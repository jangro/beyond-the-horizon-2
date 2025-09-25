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

# Import the pack into PrismLauncher
if [ -d "${PRISM_PATH}/bth2-${pack_version}-server" ]; then
	echo "\n==> Warning: existing PrismLauncher instance found at ${PRISM_PATH}/bth2-${pack_version}-server\n"
	read -p "Do you want to remove it (no means use existing instance)? (y/n) " choice
	if [ "$choice" = "y" ]; then
		rm -rf "${PRISM_PATH}/bth2-${pack_version}-server"
        $PRISM --import "bth2-${pack_version}-server.zip"
		# rm "bth2-${pack_version}-server-packwiz.zip"
		# mv "bth2-${pack_version}-server.zip" "bth2-${pack_version}-server-packwiz.zip"
	fi
fi

# Ask to remove output folder if it exists
if [ -d "bth2-${pack_version}-server-output" ]; then
	echo "\n==> Warning: existing output folder found at bth2-${pack_version}-server-output\n"
	read -p "Do you want to remove it (required to continue)? (y/n) " choice
	if [ "$choice" = "y" ]; then
		rm -rf "bth2-${pack_version}-server-output"
	else
		echo "Cannot continue, exiting"
		exit 1
	fi
fi

# Build server pack with mods from prismlauncher instance
mkdir -p "bth2-${pack_version}-server-output"

# Copy required file from packwiz export
unzip -d "bth2-${pack_version}-server-output" "bth2-${pack_version}-server.zip" manifest.json

# Copy the rest of the files from the prismlauncher instance
cp -r "${PRISM_PATH}/bth2-${pack_version}-server/minecraft/" "bth2-${pack_version}-server-output/"

cd "bth2-${pack_version}-server-output/"
zip -r "../bth2-${pack_version}-server-full.zip" * -x "mods/.index/*"
cd ..



# # Run the commands with the extracted version
# $PACKWIZ curseforge export -s server
# mv -v "Beyond the Horizon 2-${pack_version}.zip" "bth2-${pack_version}-server.zip"

# $PACKWIZ curseforge export
# mv -v "Beyond the Horizon 2-${pack_version}.zip" "bth2-${pack_version}.zip"

# # Add icon to the client zip
# zip "bth2-${pack_version}.zip" "overrides/icon.png"

# # Add server files to server zip
# for f in overrides/*; do
#   [ -e "$f" ] && zip "bth2-${pack_version}-server.zip" "$f"
# done

# for f in overrides/config/*; do
#   [ -e "$f" ] && zip "bth2-${pack_version}-server.zip" "$f"
# done
