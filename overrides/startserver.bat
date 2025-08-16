@echo off
REM Beyond The Horizon Server Startup Script

REM Edit the below values to change JVM Arguments or Allocated RAM for the server.
SET ALLOCATED_RAM=8G
SET JVM_ARGUMENTS=-XX:+UseG1GC -XX:+UnlockExperimentalVMOptions -XX:MaxGCPauseMillis=100 -XX:+DisableExplicitGC -XX:TargetSurvivorRatio=90 -XX:G1NewSizePercent=50 -XX:G1MaxNewSizePercent=80 -XX:G1MixedGCLiveThresholdPercent=50 -XX:+AlwaysPreTouch

REM Make sure this matches the Neoforge version of the server if you update.
SET NEOFORGE_VERSION=1.20.1-47.3.25

REM Install Minecraft Neoforge if it isn't already installed:
if not exist .\libraries/net/minecraftforge/forge/%NEOFORGE_VERSION% (
    echo Installing Minecraft Neoforge Server
    java -jar neoforge-%NEOFORGE_VERSION%-installer.jar --installServer
)

REM Delete installer files.
if exist .\libraries/net/minecraftforge/forge/%NEOFORGE_VERSION% (
    if exist .\neoforge-%NEOFORGE_VERSION%-installer.jar (
        echo Deleting the installer file.
        del neoforge-%NEOFORGE_VERSION%-installer.jar
    )
    if exist .\installer.log (
        echo Deleting the unnecessary file.
        del installer.log
    )
    if exist .\run.bat (
        echo Deleting the unnecessary file.
        del run.bat
    )
    if exist .\run.sh (
        echo Deleting the unnecessary file.
        del run.sh
    )
    if exist .\user_jvm_args.txt (
        echo Deleting the unnecessary file.
        del user_jvm_args.txt
    )
)

ECHO Starting Beyond The Horizon Server
java -Xms%ALLOCATED_RAM% -Xmx%ALLOCATED_RAM% %JVM_ARGUMENTS% @libraries/net/neoforged/neoforge/%NEOFORGE_VERSION%/win_args.txt nogui

pause
