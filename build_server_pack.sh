#!/bin/sh

# Enable exit on error
set -e

PRISM=prismlauncher
PRISM_PATH="$HOME/Library/Application Support/PrismLauncher/instances"

# Get version from pack metadata
pack_version=$(grep -e "^version" pack.toml | cut -f3 -d' ' | tr -d '"')
bcc_version=$(grep -e "modpackVersion" config/bcc-common.toml | cut -f3 -d' ' | tr -d '"')

if [ "${pack_version}" != "${bcc_version}" ]
then
    echo "\n==> Error: version in pack.toml (${pack_version}) and config/bcc-common.toml (${bcc_version}) does not match\n"
    exit 1
fi

# Remove existing instance if it exists but ask first
if [ -d "${PRISM_PATH}/bth2-${pack_version}-server" ]; then
	echo "\n==> Warning: existing PrismLauncher instance found at ${PRISM_PATH}/bth2-${pack_version}-server\n"
	read -p "Do you want to remove it? (y/n) " choice
	if [ "$choice" = "y" ]; then
		rm -rf "${PRISM_PATH}/bth2-${pack_version}-server"
	fi
fi

# Import the pack into PrismLauncher
$PRISM --import "bth2-${pack_version}-server.zip"

# Build server pack with mods from prismlauncher instance
unzip bth2-${pack_version}-server.zip
cp -r "${PRISM_PATH}/bth2-${pack_version}-server/mods" bth2-${pack_version}-server/





# Run the commands with the extracted version
$PACKWIZ curseforge export -s server
mv -v "Beyond the Horizon 2-${pack_version}.zip" "bth2-${pack_version}-server.zip"

$PACKWIZ curseforge export
mv -v "Beyond the Horizon 2-${pack_version}.zip" "bth2-${pack_version}.zip"

# Add icon to the client zip
zip "bth2-${pack_version}.zip" "overrides/icon.png"

# Add server files to server zip
for f in overrides/*; do
  [ -e "$f" ] && zip "bth2-${pack_version}-server.zip" "$f"
done

for f in overrides/config/*; do
  [ -e "$f" ] && zip "bth2-${pack_version}-server.zip" "$f"
done
