#!/bin/sh

# Script that generates structure tags based on BTH structure sets
# Usage: ./gen_structure_tags.sh

OUTPUT="kubejs/server_scripts/tags/generated.js"

# Build set list
SETS=$(find kubejs/data/bth/worldgen/structure_set/ -type f -name "*.json" | sort | sed 's|kubejs/data/bth/worldgen/structure_set/||; s|\.json||')

cat <<EOF > "$OUTPUT"
// priority: 110

/**
 * @file Structure Tag Modifications for Beyond the Horizon.
 *
 * Documentation: https://kubejs.com/wiki/tutorials/tags
 */

/**
 * Structure Tag Event Handler
 */
ServerEvents.tags('worldgen/structure', event => {

EOF


for set in $SETS; do
  echo "Generating tag for $set"
  echo "  event.add('bth:$set', [" >> "$OUTPUT"
  jq -r '.structures[].structure' "kubejs/data/bth/worldgen/structure_set/$set.json" | while read -r feature; do
    echo "    \"$feature\"," >> "$OUTPUT"
  done
  echo "  ]);" >> "$OUTPUT"
  echo >> "$OUTPUT"
done

cat <<EOF >> "$OUTPUT"

});
EOF