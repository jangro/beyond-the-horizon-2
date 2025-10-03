#!/usr/bin/env bash

# Script that generates all structure sets
# Usage: ./gen_all_structure_sets.sh

# List of structure sets to generate
SETS=("overworld" "overworld_underground" "nether" "end" "aether")

for set in "${SETS[@]}"; do
  echo "Generating structure set: $set"
  ./scripts/gen_structure_sets.py ./scripts/structures.yml "$set" > "kubejs/data/bth/worldgen/structure_set/$set.json"
done
