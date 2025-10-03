#!/usr/bin/env python3
"""
Convert YAML structure set definitions to Minecraft JSON format.

Input YAML format:
overworld:
  weights:
    small: 60
    common: 30
    rare: 10
  settings:
    spacing: 40
    separation: 20
    salt: 78184732
    exclusion_zones:
      - chunks: 4
        set: bettermineshafts:mineshafts
  structures:
    small:
      - terralith:igloo
    common:
      - ae2:meteorite
    rare:
      - minecraft:mansion
overworld_underground:
  weights:
    small: 60
    common: 30
    rare: 10
  settings:
    spacing: 4
    separation: 2
    salt: 18233763
  structures:
    small:
      - minecraft:dungeon

Output JSON format when run with argument 'overworld':
{
  "placement": {
    "type": "valhelsia_structures:valhelsia_random_spread",
    "spacing": 40,
    "separation": 20,
    "salt": 78184732,
    "exclusion_zones": [
      {
        "chunk_count": 4,
        "other_set": "bettermineshafts:mineshafts"
      }
    ]
  },
  "structures": [
    {
      "structure": "terralith:igloo",
      "weight": < calculated based on number of structures in category >
    },
    {
      "structure": "ae2:meteorite",
      "weight": < calculated based on number of structures in category >
    },
    {
      "structure": "minecraft:mansion",
      "weight": < calculated based on number of structures in category >
    }
  ]
}
Output JSON format when run with argument 'overworld_underground':
{
  "placement": {
    "type": "valhelsia_structures:valhelsia_random_spread",
    "spacing": 4,
    "separation": 2,
    "salt": 18233763
  },
  "structures": [
    {
      "structure": "minecraft:dungeon",
      "weight": < calculated based on number of structures in category >
    }
  ]
}
"""

import sys
import json
import yaml
from typing import Dict, List, Any


def convert_structure_set(data: Dict[str, Any]) -> Dict[str, Any]:
    """Convert a single structure set from YAML format to JSON format."""
    weights = data.get('weights', {})
    settings = data.get('settings', {})
    structures_by_category = data.get('structures', {})

    # Build the structures list with weights distributed to maintain category percentages
    structures = []
    decimal_weights = []

    # First pass: calculate all decimal weights
    for category, structure_list in structures_by_category.items():
        category_weight = weights.get(category, 1)  # Default weight of 1 if not specified
        structure_count = len(structure_list)

        # Each structure in the category gets weight = category_weight / structure_count
        # This ensures the total weight for the category equals category_weight
        individual_weight = category_weight / structure_count if structure_count > 0 else category_weight

        for structure_id in structure_list:
            decimal_weights.append((structure_id, individual_weight))

    # Find the minimum weight and calculate scaling factor
    min_weight = min(weight for _, weight in decimal_weights)
    # Scale up so minimum weight becomes at least 1
    scale_factor = max(1, 1.0 / min_weight)

    # Second pass: scale all weights to integers
    for structure_id, decimal_weight in decimal_weights:
        # Scale up and round to nearest integer, ensuring minimum of 1
        scaled_weight = max(1, round(decimal_weight * scale_factor))
        structures.append({
            "structure": structure_id,
            "weight": scaled_weight
        })

    # Build the placement object
    placement = {
        "type": settings.get("type", "valhelsia_structures:valhelsia_random_spread"),
        "spacing": settings.get("spacing", 32),
        "separation": settings.get("separation", 8),
        "salt": settings.get("salt", 0)
    }

    # Add exclusion zones if they exist
    exclusion_zones = settings.get("exclusion_zones", [])
    placement["exclusion_zones"] = []
    if exclusion_zones:
        for zone in exclusion_zones:
            placement["exclusion_zones"].append({
                "chunk_count": zone.get("chunks", 1),
                "other_set": zone.get("set", "")
            })

    # Build the output JSON
    output = {
        "placement": placement,
        "structures": structures
    }

    return output


def main():
    if len(sys.argv) not in [2, 3]:
        print("Usage: python3 yaml_to_structure_set.py <input.yaml> [structure_set_name]", file=sys.stderr)
        print("", file=sys.stderr)
        print("Converts YAML structure set definitions to Minecraft JSON format.", file=sys.stderr)
        print("If structure_set_name is provided, only that set will be converted.", file=sys.stderr)
        print("If not provided and only one set exists, it will be converted automatically.", file=sys.stderr)
        print("Output is written to stdout.", file=sys.stderr)
        sys.exit(1)

    input_file = sys.argv[1]
    target_set = sys.argv[2] if len(sys.argv) == 3 else None

    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            yaml_data = yaml.safe_load(f)
    except FileNotFoundError:
        print(f"Error: File '{input_file}' not found.", file=sys.stderr)
        sys.exit(1)
    except yaml.YAMLError as e:
        print(f"Error parsing YAML: {e}", file=sys.stderr)
        sys.exit(1)

    if not isinstance(yaml_data, dict):
        print("Error: YAML root must be a dictionary.", file=sys.stderr)
        sys.exit(1)

    # If a specific structure set is requested
    if target_set:
        if target_set not in yaml_data:
            available_sets = list(yaml_data.keys())
            print(f"Error: Structure set '{target_set}' not found in YAML file.", file=sys.stderr)
            print(f"Available sets: {', '.join(available_sets)}", file=sys.stderr)
            sys.exit(1)

        structure_set = convert_structure_set(yaml_data[target_set])
        print(json.dumps(structure_set, indent=2))

    # If no specific set requested, use the original behavior
    elif len(yaml_data) == 1:
        # Single structure set - convert it directly
        key = next(iter(yaml_data.keys()))
        structure_set = convert_structure_set(yaml_data[key])
        print(json.dumps(structure_set, indent=2))
    else:
        # Multiple structure sets but no target specified - show available options
        available_sets = list(yaml_data.keys())
        print(f"Error: Multiple structure sets found but no target specified.", file=sys.stderr)
        print(f"Available sets: {', '.join(available_sets)}", file=sys.stderr)
        print(f"Usage: python3 yaml_to_structure_set.py {input_file} <structure_set_name>", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
