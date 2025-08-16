#!/usr/bin/env sh

# Beyond The Horizon Server Startup Script

# Edit the below values to change JVM Arguments or Allocated RAM for the server.
JAVA_PATH="java"
ALLOCATED_RAM="8G"
JVM_ARGUMENTS="-XX:+UseG1GC -XX:+UnlockExperimentalVMOptions -XX:MaxGCPauseMillis=100 -XX:+DisableExplicitGC -XX:TargetSurvivorRatio=90 -XX:G1NewSizePercent=50 -XX:G1MaxNewSizePercent=80 -XX:G1MixedGCLiveThresholdPercent=50 -XX:+AlwaysPreTouch"

# Make sure this matches the Neoforge version of the server if you update.
NEOFORGE_VERSION="21.1.200"

# Install Minecraft Neoforge if it isn't already installed.
FILE=./libraries/net/minecraftforge/forge/${NEOFORGE_VERSION}
if [ ! -d "${FILE}" ]; then
    echo "Installing Minecraft Neoforge Server."
    ${JAVA_PATH} -jar ./neoforge-${NEOFORGE_VERSION}-installer.jar --installServer
fi

# Delete installer files.
INSTALLER_FILE=./neoforge-${NEOFORGE_VERSION}-installer.jar
if [ -f "${INSTALLER_FILE}" ]; then
    if [ -d "${FILE}" ]; then
        echo "Deleting the installer file."
        rm neoforge-${NEOFORGE_VERSION}-installer.jar
    fi
    if [ -f "neoforge-${NEOFORGE_VERSION}-installer.jar.log" ]; then
        echo "Deleting the unnecessary file."
        rm neoforge-${NEOFORGE_VERSION}-installer.jar.log
    fi
    if [ -f "./run.bat" ]; then
        echo "Deleting the unnecessary file."
        rm run.bat
    fi
    if [ -f "./run.sh" ]; then
        echo "Deleting the unnecessary file."
        rm run.sh
    fi
    if [ -f "./user_jvm_args.txt" ]; then
        echo "Deleting the unnecessary file."
        rm user_jvm_args.txt
    fi
fi

echo "Starting Beyond The Horizon Server."
${JAVA_PATH} -Xms${ALLOCATED_RAM} -Xmx${ALLOCATED_RAM} "${JVM_ARGUMENTS}" @libraries/net/neoforged/neoforge/${NEOFORGE_VERSION}/unix_args.txt nogui

printf "Press enter to continue."
read -r _
