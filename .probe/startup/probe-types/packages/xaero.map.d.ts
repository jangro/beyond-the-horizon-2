declare module "xaero.map.executor.Executor" {
import {$BlockableEventLoop, $BlockableEventLoop$$Type} from "net.minecraft.util.thread.BlockableEventLoop"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ProcessorHandle, $ProcessorHandle$$Type} from "net.minecraft.util.thread.ProcessorHandle"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $Executor extends $BlockableEventLoop<($Runnable)> {

constructor(arg0: StringJS, arg1: $Thread$$Type)

public "runAllTasks"(): void
public static "of"<Msg>(arg0: StringJS, arg1: $Consumer$$Type<(Msg)>): $ProcessorHandle<(Msg)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Executor$$Type = ($Executor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Executor_ = $Executor$$Type;
}}
declare module "xaero.map.server.radar.tracker.SyncedTrackedPlayer" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $SyncedTrackedPlayer {

constructor(arg0: $UUID$$Type, arg1: double, arg2: double, arg3: double, arg4: $ResourceKey$$Type<($Level)>)

public "copyFrom"(arg0: $SyncedTrackedPlayer$$Type): void
public "getDimension"(): $ResourceKey<($Level)>
public "update"(arg0: $Player$$Type): void
public "getId"(): $UUID
public "getY"(): double
public "getX"(): double
public "getZ"(): double
public "setPos"(arg0: double, arg1: double, arg2: double): $SyncedTrackedPlayer
public "setDimension"(arg0: $ResourceKey$$Type<($Level)>): $SyncedTrackedPlayer
public "matchesEnough"(arg0: $Player$$Type, arg1: double): boolean
get "dimension"(): $ResourceKey<($Level)>
get "id"(): $UUID
get "y"(): double
get "x"(): double
get "z"(): double
set "dimension"(value: $ResourceKey$$Type<($Level)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedTrackedPlayer$$Type = ($SyncedTrackedPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncedTrackedPlayer_ = $SyncedTrackedPlayer$$Type;
}}
declare module "xaero.map.gui.ExportScreen" {
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$Screen$DeferredTooltipRendering, $Screen$DeferredTooltipRendering$$Type} from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$MapTileSelection, $MapTileSelection$$Type} from "xaero.map.gui.MapTileSelection"
import {$List, $List$$Type} from "java.util.List"
import {$CubeMap, $CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$PanoramaRenderer, $PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$GuiSettings, $GuiSettings$$Type} from "xaero.map.gui.GuiSettings"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$PNGExportResult, $PNGExportResult$$Type} from "xaero.map.file.export.PNGExportResult"
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"

export class $ExportScreen extends $GuiSettings {
static readonly "MENU_BACKGROUND": $ResourceLocation
 "minecraft": $Minecraft
 "parent": $Screen
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering
 "title": $Component
static readonly "FOOTER_SEPARATOR": $ResourceLocation
readonly "renderables": $List<($Renderable)>
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
 "fullExport": boolean
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
 "escape": $Screen
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "font": $Font

constructor(arg0: $Screen$$Type, arg1: $Screen$$Type, arg2: $MapProcessor$$Type, arg3: $MapTileSelection$$Type)

public "init"(): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "getSelection"(): $MapTileSelection
public "onExportDone"(arg0: $PNGExportResult$$Type): void
public static "cumulus$getCubeMap"(): $CubeMap
public static "cumulus$setCubeMap"(arg0: $CubeMap$$Type): void
public static "cumulus$getPanorama"(): $PanoramaRenderer
public static "cumulus$setPanorama"(arg0: $PanoramaRenderer$$Type): void
public static "owo$PANORAMA_RENDERER"(): $CubeMap
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
get "selection"(): $MapTileSelection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExportScreen$$Type = ($ExportScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExportScreen_ = $ExportScreen$$Type;
}}
declare module "xaero.map.cache.BlockStateShortShapeCache" {
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockStateShortShapeCache {

constructor()

public "reset"(): void
public "isShort"(arg0: $BlockState$$Type): boolean
public "supplyForIOThread"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateShortShapeCache$$Type = ($BlockStateShortShapeCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateShortShapeCache_ = $BlockStateShortShapeCache$$Type;
}}
declare module "xaero.map.file.worldsave.WorldDataReader" {
import {$HolderLookup, $HolderLookup$$Type} from "net.minecraft.core.HolderLookup"
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$MapRegion, $MapRegion$$Type} from "xaero.map.region.MapRegion"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$$Type} from "xaero.map.cache.BlockStateShortShapeCache"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Executor, $Executor$$Type} from "xaero.map.executor.Executor"
import {$RegionFile, $RegionFile$$Type} from "net.minecraft.world.level.chunk.storage.RegionFile"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$WorldDataBiomeManager, $WorldDataBiomeManager$$Type} from "xaero.map.file.worldsave.biome.WorldDataBiomeManager"
import {$OverlayManager, $OverlayManager$$Type} from "xaero.map.region.OverlayManager"

export class $WorldDataReader {
 "taskCreationSync": any

constructor(arg0: $OverlayManager$$Type, arg1: $BlockStateShortShapeCache$$Type, arg2: $WorldDataBiomeManager$$Type, arg3: long)

public "readChunk"(arg0: $RegionFile$$Type, arg1: $ChunkPos$$Type): $CompoundTag
public "setMapProcessor"(arg0: $MapProcessor$$Type): void
public "buildRegion"(arg0: $MapRegion$$Type, arg1: $ServerLevel$$Type, arg2: $HolderLookup$$Type<($Block$$Type)>, arg3: $Registry$$Type<($Block$$Type)>, arg4: $Registry$$Type<($Fluid$$Type)>, arg5: boolean, arg6: (integer)[], arg7: $Executor$$Type): boolean
set "mapProcessor"(value: $MapProcessor$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldDataReader$$Type = ($WorldDataReader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldDataReader_ = $WorldDataReader$$Type;
}}
declare module "xaero.map.pool.TextureUploadPool$Normal" {
import {$TextureUploadPool, $TextureUploadPool$$Type} from "xaero.map.pool.TextureUploadPool"
import {$TextureUpload$Normal, $TextureUpload$Normal$$Type} from "xaero.map.graphics.TextureUpload$Normal"

export class $TextureUploadPool$Normal extends $TextureUploadPool<($TextureUpload$Normal)> {

constructor(arg0: integer)

public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: long, arg9: integer, arg10: integer): $TextureUpload$Normal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadPool$Normal$$Type = ($TextureUploadPool$Normal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUploadPool$Normal_ = $TextureUploadPool$Normal$$Type;
}}
declare module "xaero.map.server.MinecraftServerData" {
import {$SyncedPlayerTracker, $SyncedPlayerTracker$$Type} from "xaero.map.server.radar.tracker.SyncedPlayerTracker"
import {$LevelMapProperties, $LevelMapProperties$$Type} from "xaero.map.server.level.LevelMapProperties"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$SyncedPlayerTrackerSystemManager, $SyncedPlayerTrackerSystemManager$$Type} from "xaero.map.server.radar.tracker.SyncedPlayerTrackerSystemManager"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $MinecraftServerData {

constructor(arg0: $SyncedPlayerTrackerSystemManager$$Type, arg1: $SyncedPlayerTracker$$Type)

public static "get"(arg0: $MinecraftServer$$Type): $MinecraftServerData
public "getLevelProperties"(arg0: $Path$$Type): $LevelMapProperties
public "getSyncedPlayerTracker"(): $SyncedPlayerTracker
public "getSyncedPlayerTrackerSystemManager"(): $SyncedPlayerTrackerSystemManager
get "syncedPlayerTracker"(): $SyncedPlayerTracker
get "syncedPlayerTrackerSystemManager"(): $SyncedPlayerTrackerSystemManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServerData$$Type = ($MinecraftServerData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftServerData_ = $MinecraftServerData$$Type;
}}
declare module "xaero.map.MapRunner" {
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$MapRunnerTask, $MapRunnerTask$$Type} from "xaero.map.task.MapRunnerTask"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export class $MapRunner implements $Runnable {

constructor()

public "run"(): void
public "stop"(): void
public "addTask"(arg0: $MapRunnerTask$$Type): void
public "doTasks"(arg0: $MapProcessor$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapRunner$$Type = ($MapRunner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapRunner_ = $MapRunner$$Type;
}}
declare module "xaero.map.controls.ControlsHandler" {
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$KeyMapping, $KeyMapping$$Type} from "net.minecraft.client.KeyMapping"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $ControlsHandler {

constructor(arg0: $MapProcessor$$Type)

public "keyUp"(arg0: $KeyMapping$$Type, arg1: boolean): void
public static "isDown"(arg0: $KeyMapping$$Type): boolean
public "keyDown"(arg0: $KeyMapping$$Type, arg1: boolean, arg2: boolean): void
public "onKeyInput"(arg0: $Minecraft$$Type): void
public "handleKeyEvents"(): void
public static "isKeyRepeat"(arg0: $KeyMapping$$Type): boolean
public static "setKeyState"(arg0: $KeyMapping$$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControlsHandler$$Type = ($ControlsHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControlsHandler_ = $ControlsHandler$$Type;
}}
declare module "xaero.map.mcworld.WorldMapClientWorldData" {
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ClientboundRulesPacket, $ClientboundRulesPacket$$Type} from "xaero.map.message.basic.ClientboundRulesPacket"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $WorldMapClientWorldData {
 "usedSpawn": $BlockPos
 "serverLevelId": integer
 "usedServerLevelId": integer
 "latestSpawn": $BlockPos

constructor(arg0: $ClientLevel$$Type)

public "getSyncedRules"(): $ClientboundRulesPacket
public "setSyncedRules"(arg0: $ClientboundRulesPacket$$Type): void
public "setServerModNetworkVersion"(arg0: integer): void
public "getServerModNetworkVersion"(): integer
get "syncedRules"(): $ClientboundRulesPacket
set "syncedRules"(value: $ClientboundRulesPacket$$Type)
set "serverModNetworkVersion"(value: integer)
get "serverModNetworkVersion"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldMapClientWorldData$$Type = ($WorldMapClientWorldData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldMapClientWorldData_ = $WorldMapClientWorldData$$Type;
}}
declare module "xaero.map.region.LayeredRegionManager" {
import {$LeveledRegion, $LeveledRegion$$Type} from "xaero.map.region.LeveledRegion"
import {$MapLayer, $MapLayer$$Type} from "xaero.map.region.MapLayer"
import {$MapRegion, $MapRegion$$Type} from "xaero.map.region.MapRegion"
import {$MapDimension, $MapDimension$$Type} from "xaero.map.world.MapDimension"
import {$List, $List$$Type} from "java.util.List"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"

export class $LayeredRegionManager {

constructor(arg0: $MapDimension$$Type)

public "remove"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
public "size"(): integer
public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $LeveledRegion<(any)>
public "clear"(): void
public "getLayer"(arg0: integer): $MapLayer
public "loadedCount"(): integer
public "getUnsyncedSet"(): $Set<($LeveledRegion<(any)>)>
public "putLeaf"(arg0: integer, arg1: integer, arg2: $MapRegion$$Type): void
public "applyToEachLoadedLayer"(arg0: $BiConsumer$$Type<(integer), ($MapLayer)>): void
public "bumpLoadedRegion"(arg0: $MapRegion$$Type): void
public "bumpLoadedRegion"(arg0: $LeveledRegion$$Type<(any)>): void
public "getLoadedRegion"(arg0: integer): $LeveledRegion<(any)>
public "preDetection"(): void
public "addListRegion"(arg0: $LeveledRegion$$Type<(any)>): void
public "getLeaf"(arg0: integer, arg1: integer, arg2: integer): $MapRegion
public "addLoadedRegion"(arg0: $LeveledRegion$$Type<(any)>): void
public "removeListRegion"(arg0: $LeveledRegion$$Type<(any)>): void
public "removeLoadedRegion"(arg0: $LeveledRegion$$Type<(any)>): void
public "getLoadedListUnsynced"(): $List<($LeveledRegion<(any)>)>
public "onClearCachedHighlightHash"(arg0: integer, arg1: integer): void
public "onClearCachedHighlightHashes"(): void
get "unsyncedSet"(): $Set<($LeveledRegion<(any)>)>
get "loadedListUnsynced"(): $List<($LeveledRegion<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayeredRegionManager$$Type = ($LayeredRegionManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LayeredRegionManager_ = $LayeredRegionManager$$Type;
}}
declare module "xaero.map.capabilities.ServerWorldCapabilities" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ServerWorldCapabilities {
 "loaded": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerWorldCapabilities$$Type = ($ServerWorldCapabilities);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerWorldCapabilities_ = $ServerWorldCapabilities$$Type;
}}
declare module "xaero.map.graphics.TextureUploadBenchmark" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TextureUploadBenchmark {

constructor(...arg0: (integer)[])

public "post"(arg0: integer): void
public "pre"(): void
public "getAverage"(arg0: integer): long
public "isFinished"(arg0: integer): boolean
public "isFinished"(): boolean
public "getTotalsString"(): StringJS
get "finished"(): boolean
get "totalsString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadBenchmark$$Type = ($TextureUploadBenchmark);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUploadBenchmark_ = $TextureUploadBenchmark$$Type;
}}
declare module "xaero.map.highlight.HighlighterRegistry" {
import {$AbstractHighlighter, $AbstractHighlighter$$Type} from "xaero.map.highlight.AbstractHighlighter"
import {$List, $List$$Type} from "java.util.List"

export class $HighlighterRegistry {

constructor()

public "end"(): void
public "register"(arg0: $AbstractHighlighter$$Type): void
public "getHighlighters"(): $List<($AbstractHighlighter)>
get "highlighters"(): $List<($AbstractHighlighter)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HighlighterRegistry$$Type = ($HighlighterRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HighlighterRegistry_ = $HighlighterRegistry$$Type;
}}
declare module "xaero.map.region.Overlay" {
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$$Type} from "net.minecraft.core.BlockPos$MutableBlockPos"
import {$MapDimension, $MapDimension$$Type} from "xaero.map.world.MapDimension"
import {$MapTileChunk, $MapTileChunk$$Type} from "xaero.map.region.MapTileChunk"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockTintProvider, $BlockTintProvider$$Type} from "xaero.map.biome.BlockTintProvider"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$MapWriter, $MapWriter$$Type} from "xaero.map.MapWriter"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$MapTile, $MapTile$$Type} from "xaero.map.region.MapTile"
import {$MapPixel, $MapPixel$$Type} from "xaero.map.region.MapPixel"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$MapBlock, $MapBlock$$Type} from "xaero.map.region.MapBlock"
import {$OverlayManager, $OverlayManager$$Type} from "xaero.map.region.OverlayManager"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$DimensionType, $DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"

export class $Overlay extends $MapPixel {

constructor(arg0: $BlockState$$Type, arg1: byte, arg2: boolean)

public "equals"(arg0: $Overlay$$Type): boolean
public "write"(arg0: $BlockState$$Type, arg1: byte, arg2: boolean): void
public "isWater"(): boolean
public "toRenderString"(): StringJS
public "getOpacity"(): integer
public "increaseOpacity"(arg0: integer): void
public "getParametres"(): integer
public "getPixelColour"(arg0: $MapBlock$$Type, arg1: (integer)[], arg2: $MapWriter$$Type, arg3: $Level$$Type, arg4: $MapDimension$$Type, arg5: $Registry$$Type<($Block$$Type)>, arg6: $MapTileChunk$$Type, arg7: $MapTileChunk$$Type, arg8: $MapTileChunk$$Type, arg9: $MapTileChunk$$Type, arg10: $MapTile$$Type, arg11: integer, arg12: integer, arg13: integer, arg14: integer, arg15: $BlockPos$MutableBlockPos$$Type, arg16: $Registry$$Type<($Biome$$Type)>, arg17: $Registry$$Type<($DimensionType$$Type)>, arg18: float, arg19: float, arg20: float, arg21: $BlockTintProvider$$Type, arg22: $MapProcessor$$Type, arg23: $OverlayManager$$Type): void
get "water"(): boolean
get "opacity"(): integer
get "parametres"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Overlay$$Type = ($Overlay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Overlay_ = $Overlay$$Type;
}}
declare module "xaero.map.task.MapRunnerTask" {
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"

export class $MapRunnerTask {

constructor()

public "run"(arg0: $MapProcessor$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapRunnerTask$$Type = ($MapRunnerTask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapRunnerTask_ = $MapRunnerTask$$Type;
}}
declare module "xaero.map.misc.CaveStartCalculator" {
import {$MapWriter, $MapWriter$$Type} from "xaero.map.MapWriter"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export class $CaveStartCalculator {

constructor(arg0: $MapWriter$$Type)

public "getCaving"(arg0: double, arg1: double, arg2: double, arg3: $Level$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CaveStartCalculator$$Type = ($CaveStartCalculator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CaveStartCalculator_ = $CaveStartCalculator$$Type;
}}
declare module "xaero.map.world.MapDimension" {
import {$DimensionSpecialEffects, $DimensionSpecialEffects$$Type} from "net.minecraft.client.renderer.DimensionSpecialEffects"
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$MapConnectionNode, $MapConnectionNode$$Type} from "xaero.map.world.MapConnectionNode"
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$LeveledRegion, $LeveledRegion$$Type} from "xaero.map.region.LeveledRegion"
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$Hashtable, $Hashtable$$Type} from "java.util.Hashtable"
import {$MapWorld, $MapWorld$$Type} from "xaero.map.world.MapWorld"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LayeredRegionManager, $LayeredRegionManager$$Type} from "xaero.map.region.LayeredRegionManager"
import {$RegionDetection, $RegionDetection$$Type} from "xaero.map.file.RegionDetection"
import {$MapFullReloader, $MapFullReloader$$Type} from "xaero.map.MapFullReloader"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$DimensionHighlighterHandler, $DimensionHighlighterHandler$$Type} from "xaero.map.highlight.DimensionHighlighterHandler"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$HighlighterRegistry, $HighlighterRegistry$$Type} from "xaero.map.highlight.HighlighterRegistry"
import {$DimensionType, $DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"

export class $MapDimension {
 "futureMultiworldWritable": boolean
 "futureMultiworldServerBased": boolean
 "currentMultiworldWritable": boolean
readonly "regionsToCache": $ArrayList<($LeveledRegion<(any)>)>

constructor(arg0: $MapWorld$$Type, arg1: $ResourceKey$$Type<($Level)>, arg2: $HighlighterRegistry$$Type)

public "clear"(): void
public "getSkyDarken"(arg0: float, arg1: $ClientLevel$$Type, arg2: $Registry$$Type<($DimensionType$$Type)>): float
public "getMapWorld"(): $MapWorld
public "getDimId"(): $ResourceKey<($Level)>
public "isCacheOnlyMode"(arg0: $Registry$$Type<($DimensionType$$Type)>): boolean
public "isUsingWorldSave"(): boolean
public "getLayeredMapRegions"(): $LayeredRegionManager
public "getCurrentMultiworld"(): StringJS
public static "getDimensionType"(arg0: $MapDimension$$Type, arg1: $ResourceKey$$Type<($Level)>, arg2: $Registry$$Type<($DimensionType$$Type)>): $DimensionType
public "getDimensionType"(arg0: $Registry$$Type<($DimensionType$$Type)>): $DimensionType
public "getDimensionTypeId"(): $ResourceLocation
public "getHighlightHandler"(): $DimensionHighlighterHandler
public "startFullMapReload"(arg0: integer, arg1: boolean, arg2: $MapProcessor$$Type): void
public "clearFullMapReload"(): void
public "calculateDimDiv"(arg0: $Registry$$Type<($DimensionType$$Type)>, arg1: $DimensionType$$Type): double
public "getFullReloader"(): $MapFullReloader
public "calculateDimScale"(arg0: $Registry$$Type<($DimensionType$$Type)>): double
public "getWorldSaveDetectedRegions"(): $Iterable<($Hashtable<(integer), ($RegionDetection)>)>
public "isUsingUnknownDimensionType"(arg0: $Registry$$Type<($DimensionType$$Type)>): boolean
public "preDetection"(): void
public "getShadowR"(): float
public "getShadowG"(): float
public "getShadowB"(): float
public "isAutoSelected"(): boolean
public "switchToFutureMultiworldWritableValueUnsynced"(): void
public "getCaveModeType"(): integer
public "hasConfirmedMultiworld"(): boolean
public "setMultiworldUnsynced"(arg0: StringJS): void
public "getMultiworldName"(arg0: StringJS): StringJS
public "switchToFutureUnsynced"(): void
public "onWorldChangeUnsynced"(arg0: $Level$$Type): void
public "hasDoneRegionDetection"(): boolean
public "getDimensionEffects"(arg0: $Registry$$Type<($DimensionType$$Type)>): $DimensionSpecialEffects
public "addMultiworldChecked"(arg0: StringJS): boolean
public "getMainFolderPath"(): $Path
public "getOldFolderPath"(): $Path
public "setMultiworldName"(arg0: StringJS, arg1: StringJS): void
public "saveConfigUnsynced"(): void
public "getMultiworldIdsCopy"(): $List<(StringJS)>
public "deleteMultiworldId"(arg0: StringJS): void
public "toggleCaveModeType"(arg0: boolean): void
public "onCreationUnsynced"(): void
public "getPlayerMapKey"(): $MapConnectionNode
public "pickDefaultCustomMultiworldUnsynced"(): void
public "getFutureCustomSelectedMultiworld"(): StringJS
public "getLinkedWorldSaveDetectedRegions"(): $Iterable<($RegionDetection)>
public "deleteMultiworldMapDataUnsynced"(arg0: StringJS): void
public "addWorldSaveRegionDetection"(arg0: $RegionDetection$$Type): void
public "resetCustomMultiworldUnsynced"(): void
public "updateFutureAutomaticUnsynced"(arg0: $Minecraft$$Type, arg1: any): void
public "confirmMultiworldUnsynced"(): void
public "getFutureMultiworldUnsynced"(): StringJS
public "isFutureMultiworldServerBased"(): boolean
public "onClearCachedHighlightHash"(arg0: integer, arg1: integer): void
public "onClearCachedHighlightHashes"(): void
public "isFutureUsingWorldSaveUnsynced"(): boolean
public "getWorldSaveRegionDetection"(arg0: integer, arg1: integer): $RegionDetection
public "getSelectedMapKeyUnsynced"(): $MapConnectionNode
get "mapWorld"(): $MapWorld
get "dimId"(): $ResourceKey<($Level)>
get "usingWorldSave"(): boolean
get "layeredMapRegions"(): $LayeredRegionManager
get "currentMultiworld"(): StringJS
get "dimensionTypeId"(): $ResourceLocation
get "highlightHandler"(): $DimensionHighlighterHandler
get "fullReloader"(): $MapFullReloader
get "worldSaveDetectedRegions"(): $Iterable<($Hashtable<(integer), ($RegionDetection)>)>
get "shadowR"(): float
get "shadowG"(): float
get "shadowB"(): float
get "autoSelected"(): boolean
get "caveModeType"(): integer
set "multiworldUnsynced"(value: StringJS)
get "mainFolderPath"(): $Path
get "oldFolderPath"(): $Path
get "multiworldIdsCopy"(): $List<(StringJS)>
get "playerMapKey"(): $MapConnectionNode
get "futureCustomSelectedMultiworld"(): StringJS
get "linkedWorldSaveDetectedRegions"(): $Iterable<($RegionDetection)>
get "futureMultiworldUnsynced"(): StringJS
get "futureMultiworldServerBased"(): boolean
get "futureUsingWorldSaveUnsynced"(): boolean
get "selectedMapKeyUnsynced"(): $MapConnectionNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapDimension$$Type = ($MapDimension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapDimension_ = $MapDimension$$Type;
}}
declare module "xaero.map.pool.TextureUploadPool$SubsequentNormal" {
import {$TextureUpload$SubsequentNormal, $TextureUpload$SubsequentNormal$$Type} from "xaero.map.graphics.TextureUpload$SubsequentNormal"
import {$TextureUploadPool, $TextureUploadPool$$Type} from "xaero.map.pool.TextureUploadPool"

export class $TextureUploadPool$SubsequentNormal extends $TextureUploadPool<($TextureUpload$SubsequentNormal)> {

constructor(arg0: integer)

public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: long, arg8: integer, arg9: integer, arg10: integer, arg11: integer): $TextureUpload$SubsequentNormal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadPool$SubsequentNormal$$Type = ($TextureUploadPool$SubsequentNormal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUploadPool$SubsequentNormal_ = $TextureUploadPool$SubsequentNormal$$Type;
}}
declare module "xaero.map.graphics.CustomVertexConsumers" {
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"

export class $CustomVertexConsumers {

constructor()

public "getRenderTypeBuffers"(): $MultiBufferSource$BufferSource
get "renderTypeBuffers"(): $MultiBufferSource$BufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomVertexConsumers$$Type = ($CustomVertexConsumers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomVertexConsumers_ = $CustomVertexConsumers$$Type;
}}
declare module "xaero.map.server.radar.tracker.ISyncedPlayerTrackerSystem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"

export interface $ISyncedPlayerTrackerSystem {

 "isPartySystem"(): boolean
 "getTrackingLevel"(arg0: $Player$$Type, arg1: $Player$$Type): integer
get "partySystem"(): boolean
}

export namespace $ISyncedPlayerTrackerSystem {
const probejs$$marker: never
}
export class $ISyncedPlayerTrackerSystem$$Static implements $ISyncedPlayerTrackerSystem {


 "isPartySystem"(): boolean
 "getTrackingLevel"(arg0: $Player$$Type, arg1: $Player$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISyncedPlayerTrackerSystem$$Type = ($ISyncedPlayerTrackerSystem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISyncedPlayerTrackerSystem_ = $ISyncedPlayerTrackerSystem$$Type;
}}
declare module "xaero.map.region.texture.RegionTexture" {
import {$TextureUploader, $TextureUploader$$Type} from "xaero.map.graphics.TextureUploader"
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$LeveledRegion, $LeveledRegion$$Type} from "xaero.map.region.LeveledRegion"
import {$DataInputStream, $DataInputStream$$Type} from "java.io.DataInputStream"
import {$List, $List$$Type} from "java.util.List"
import {$BlockTintProvider, $BlockTintProvider$$Type} from "xaero.map.biome.BlockTintProvider"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$$Type} from "xaero.map.cache.BlockStateShortShapeCache"
import {$RegionTextureBiomes, $RegionTextureBiomes$$Type} from "xaero.map.region.texture.RegionTextureBiomes"
import {$PoolTextureDirectBufferUnit, $PoolTextureDirectBufferUnit$$Type} from "xaero.map.pool.buffer.PoolTextureDirectBufferUnit"
import {$BranchTextureRenderer, $BranchTextureRenderer$$Type} from "xaero.map.region.texture.BranchTextureRenderer"
import {$DataOutputStream, $DataOutputStream$$Type} from "java.io.DataOutputStream"
import {$DimensionHighlighterHandler, $DimensionHighlighterHandler$$Type} from "xaero.map.highlight.DimensionHighlighterHandler"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$OverlayManager, $OverlayManager$$Type} from "xaero.map.region.OverlayManager"

export class $RegionTexture<T extends $RegionTexture<(T)>> {
static readonly "PBO_PACK_LENGTH": integer
static readonly "PBO_UNPACK_LENGTH": integer

constructor(arg0: $LeveledRegion$$Type<(T)>)

public "getRegion"(): $LeveledRegion<(T)>
public "getHeight"(arg0: integer, arg1: integer): integer
public "getBiome"(arg0: integer, arg1: integer): $ResourceKey<($Biome)>
public "getTimer"(): integer
public "setBiome"(arg0: integer, arg1: integer, arg2: $ResourceKey$$Type<($Biome)>): void
public "shouldUpload"(): boolean
public "getTopHeight"(arg0: integer, arg1: integer): integer
public "resetTimer"(): void
public "canUpload"(): boolean
public "getBiomes"(): $RegionTextureBiomes
public "addDebugLines"(arg0: $List$$Type<(StringJS)>): void
public "getColorBuffer"(): $PoolTextureDirectBufferUnit
public "prepareBuffer"(): void
public "uploadBuffer"(arg0: $DimensionHighlighterHandler$$Type, arg1: $TextureUploader$$Type, arg2: $LeveledRegion$$Type<(T)>, arg3: $BranchTextureRenderer$$Type, arg4: integer, arg5: integer): long
public "setToUpload"(arg0: boolean): void
public "deletePBOs"(): void
public "resetBiomes"(): void
public "readCacheData"(arg0: integer, arg1: integer, arg2: $DataInputStream$$Type, arg3: (byte)[], arg4: (byte)[], arg5: $LeveledRegion$$Type<(T)>, arg6: $MapProcessor$$Type, arg7: integer, arg8: integer, arg9: boolean): void
public "getGlColorTexture"(): integer
public "getTextureHasLight"(): boolean
public "deleteColorBuffer"(): void
public "bindColorTexture"(arg0: boolean): integer
public "getDirectColorBuffer"(): $ByteBuffer
public "getColorBufferFormat"(): integer
public "getBufferHasLight"(): boolean
public "setCachePrepared"(arg0: boolean): void
public "shouldIncludeInCache"(): boolean
public "isCachePrepared"(): boolean
public "writeCacheMapData"(arg0: $DataOutputStream$$Type, arg1: (byte)[], arg2: (byte)[], arg3: $LeveledRegion$$Type<(T)>): void
public "isColorBufferCompressed"(): boolean
public "deleteTexturesAndBuffers"(): void
public "getBufferedTextureVersion"(): integer
public "putHeight"(arg0: integer, arg1: integer): void
public "putHeight"(arg0: integer, arg1: integer, arg2: integer): void
public "putTopHeight"(arg0: integer, arg1: integer, arg2: integer): void
public "putTopHeight"(arg0: integer, arg1: integer): void
public "decTimer"(): void
public "isUploaded"(): boolean
public "removeHeight"(arg0: integer, arg1: integer): void
public "hasSourceData"(): boolean
public "preUpload"(arg0: $MapProcessor$$Type, arg1: $BlockTintProvider$$Type, arg2: $OverlayManager$$Type, arg3: $LeveledRegion$$Type<(T)>, arg4: boolean, arg5: $BlockStateShortShapeCache$$Type): void
public "postUpload"(arg0: $MapProcessor$$Type, arg1: $LeveledRegion$$Type<(T)>, arg2: boolean): void
public "shouldDownloadFromPBO"(): boolean
public "postBufferWrite"(arg0: $PoolTextureDirectBufferUnit$$Type): void
public "onTextureDeletion"(): void
public "getTextureVersion"(): integer
public "removeTopHeight"(arg0: integer, arg1: integer): void
public "shouldHaveContentForBranchUpdate"(): boolean
public "setBufferedTextureVersion"(arg0: integer): void
public "ensureBiomeIndexStorage"(): void
public "setShouldDownloadFromPBO"(arg0: boolean): void
public "shouldBeUsedForBranchUpdate"(arg0: integer): boolean
get "region"(): $LeveledRegion<(T)>
get "timer"(): integer
get "biomes"(): $RegionTextureBiomes
get "colorBuffer"(): $PoolTextureDirectBufferUnit
set "toUpload"(value: boolean)
get "glColorTexture"(): integer
get "textureHasLight"(): boolean
get "directColorBuffer"(): $ByteBuffer
get "colorBufferFormat"(): integer
get "bufferHasLight"(): boolean
set "cachePrepared"(value: boolean)
get "cachePrepared"(): boolean
get "colorBufferCompressed"(): boolean
get "bufferedTextureVersion"(): integer
get "uploaded"(): boolean
get "textureVersion"(): integer
set "bufferedTextureVersion"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionTexture$$Type<T> = ($RegionTexture<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionTexture_<T> = $RegionTexture$$Type<(T)>;
}}
declare module "xaero.map.world.MapConnectionManager" {
import {$MapConnectionNode, $MapConnectionNode$$Type} from "xaero.map.world.MapConnectionNode"
import {$PrintWriter, $PrintWriter$$Type} from "java.io.PrintWriter"

export class $MapConnectionManager {

constructor()

public "isConnected"(arg0: $MapConnectionNode$$Type, arg1: $MapConnectionNode$$Type): boolean
public "isEmpty"(): boolean
public "save"(arg0: $PrintWriter$$Type): void
public "addConnection"(arg0: $MapConnectionNode$$Type, arg1: $MapConnectionNode$$Type): void
public "removeConnection"(arg0: $MapConnectionNode$$Type, arg1: $MapConnectionNode$$Type): void
public "renameDimension"(arg0: StringJS, arg1: StringJS): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapConnectionManager$$Type = ($MapConnectionManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapConnectionManager_ = $MapConnectionManager$$Type;
}}
declare module "xaero.map.message.WorldMapMessage" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export class $WorldMapMessage<T extends $WorldMapMessage<(T)>> {
static "MAIN_CHANNEL": $ResourceLocation

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldMapMessage$$Type<T> = ($WorldMapMessage<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldMapMessage_<T> = $WorldMapMessage$$Type<(T)>;
}}
declare module "xaero.map.server.IMinecraftServer" {
import {$MinecraftServerData, $MinecraftServerData$$Type} from "xaero.map.server.MinecraftServerData"

export interface $IMinecraftServer {

 "getXaeroWorldMapServerData"(): $MinecraftServerData
 "setXaeroWorldMapServerData"(arg0: $MinecraftServerData$$Type): void
get "xaeroWorldMapServerData"(): $MinecraftServerData
set "xaeroWorldMapServerData"(value: $MinecraftServerData$$Type)
}

export namespace $IMinecraftServer {
const probejs$$marker: never
}
export class $IMinecraftServer$$Static implements $IMinecraftServer {


 "getXaeroWorldMapServerData"(): $MinecraftServerData
 "setXaeroWorldMapServerData"(arg0: $MinecraftServerData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMinecraftServer$$Type = ($IMinecraftServer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMinecraftServer_ = $IMinecraftServer$$Type;
}}
declare module "xaero.map.deallocator.ByteBufferDeallocator" {
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $ByteBufferDeallocator {

constructor()

public "deallocate"(arg0: $ByteBuffer$$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteBufferDeallocator$$Type = ($ByteBufferDeallocator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteBufferDeallocator_ = $ByteBufferDeallocator$$Type;
}}
declare module "xaero.map.pool.TextureUploadPool$BranchDownload" {
import {$TextureUploadPool, $TextureUploadPool$$Type} from "xaero.map.pool.TextureUploadPool"
import {$TextureUpload$BranchDownload, $TextureUpload$BranchDownload$$Type} from "xaero.map.graphics.TextureUpload$BranchDownload"

export class $TextureUploadPool$BranchDownload extends $TextureUploadPool<($TextureUpload$BranchDownload)> {

constructor(arg0: integer)

public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $TextureUpload$BranchDownload
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadPool$BranchDownload$$Type = ($TextureUploadPool$BranchDownload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUploadPool$BranchDownload_ = $TextureUploadPool$BranchDownload$$Type;
}}
declare module "xaero.map.region.MapTile" {
import {$PoolUnit, $PoolUnit$$Type} from "xaero.map.pool.PoolUnit"
import {$MapBlock, $MapBlock$$Type} from "xaero.map.region.MapBlock"

export class $MapTile implements $PoolUnit {
static readonly "CURRENT_WORLD_INTERPRETATION_VERSION": integer

constructor(...arg0: (any)[])

public "create"(...arg0: (any)[]): void
public "getBlock"(arg0: integer, arg1: integer): $MapBlock
public "isLoaded"(): boolean
public "setBlock"(arg0: integer, arg1: integer, arg2: $MapBlock$$Type): void
public "wasWrittenOnce"(): boolean
public "setWrittenCave"(arg0: integer, arg1: integer): void
public "setWrittenOnce"(arg0: boolean): void
public "setLoaded"(arg0: boolean): void
public "getWrittenCaveStart"(): integer
public "getWrittenCaveDepth"(): integer
public "setWorldInterpretationVersion"(arg0: integer): void
public "getBlockColumn"(arg0: integer): ($MapBlock)[]
public "getChunkX"(): integer
public "getChunkZ"(): integer
public "getWorldInterpretationVersion"(): integer
get "loaded"(): boolean
set "writtenOnce"(value: boolean)
set "loaded"(value: boolean)
get "writtenCaveStart"(): integer
get "writtenCaveDepth"(): integer
set "worldInterpretationVersion"(value: integer)
get "chunkX"(): integer
get "chunkZ"(): integer
get "worldInterpretationVersion"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapTile$$Type = ($MapTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapTile_ = $MapTile$$Type;
}}
declare module "xaero.map.server.level.LevelMapProperties" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$BufferedReader, $BufferedReader$$Type} from "java.io.BufferedReader"
import {$PrintWriter, $PrintWriter$$Type} from "java.io.PrintWriter"
import {$WorldMapMessage, $WorldMapMessage$$Type} from "xaero.map.message.WorldMapMessage"

export class $LevelMapProperties extends $WorldMapMessage<($LevelMapProperties)> {
static "MAIN_CHANNEL": $ResourceLocation

constructor()

public "write"(arg0: $FriendlyByteBuf$$Type): void
public "write"(arg0: $PrintWriter$$Type): void
public "read"(arg0: $BufferedReader$$Type): void
public static "read"(arg0: $FriendlyByteBuf$$Type): $LevelMapProperties
public "getId"(): integer
public "isUsable"(): boolean
public "setUsable"(arg0: boolean): void
get "id"(): integer
get "usable"(): boolean
set "usable"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelMapProperties$$Type = ($LevelMapProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelMapProperties_ = $LevelMapProperties$$Type;
}}
declare module "xaero.map.graphics.TextureUpload" {
import {$PoolUnit, $PoolUnit$$Type} from "xaero.map.pool.PoolUnit"

export class $TextureUpload implements $PoolUnit {

constructor()

public "create"(...arg0: (any)[]): void
public "run"(): void
public "getUploadType"(): integer
get "uploadType"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUpload$$Type = ($TextureUpload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUpload_ = $TextureUpload$$Type;
}}
declare module "xaero.map.mcworld.IWorldMapClientWorld" {
import {$WorldMapClientWorldData, $WorldMapClientWorldData$$Type} from "xaero.map.mcworld.WorldMapClientWorldData"

export interface $IWorldMapClientWorld {

 "getXaero_worldmapData"(): $WorldMapClientWorldData
 "setXaero_worldmapData"(arg0: $WorldMapClientWorldData$$Type): void
get "xaero_worldmapData"(): $WorldMapClientWorldData
set "xaero_worldmapData"(value: $WorldMapClientWorldData$$Type)
}

export namespace $IWorldMapClientWorld {
const probejs$$marker: never
}
export class $IWorldMapClientWorld$$Static implements $IWorldMapClientWorld {


 "getXaero_worldmapData"(): $WorldMapClientWorldData
 "setXaero_worldmapData"(arg0: $WorldMapClientWorldData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldMapClientWorld$$Type = ($IWorldMapClientWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWorldMapClientWorld_ = $IWorldMapClientWorld$$Type;
}}
declare module "xaero.map.pool.TextureUploadPool$Compressed" {
import {$TextureUploadPool, $TextureUploadPool$$Type} from "xaero.map.pool.TextureUploadPool"
import {$TextureUpload$Compressed, $TextureUpload$Compressed$$Type} from "xaero.map.graphics.TextureUpload$Compressed"

export class $TextureUploadPool$Compressed extends $TextureUploadPool<($TextureUpload$Compressed)> {

constructor(arg0: integer)

public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: long, arg9: integer): $TextureUpload$Compressed
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadPool$Compressed$$Type = ($TextureUploadPool$Compressed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUploadPool$Compressed_ = $TextureUploadPool$Compressed$$Type;
}}
declare module "xaero.map.region.MapRegion" {
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$LeveledRegion, $LeveledRegion$$Type} from "xaero.map.region.LeveledRegion"
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$$Type} from "net.minecraft.core.BlockPos$MutableBlockPos"
import {$MapDimension, $MapDimension$$Type} from "xaero.map.world.MapDimension"
import {$File, $File$$Type} from "java.io.File"
import {$MapTileChunk, $MapTileChunk$$Type} from "xaero.map.region.MapTileChunk"
import {$MapSaveLoad, $MapSaveLoad$$Type} from "xaero.map.file.MapSaveLoad"
import {$List, $List$$Type} from "java.util.List"
import {$BranchLeveledRegion, $BranchLeveledRegion$$Type} from "xaero.map.region.BranchLeveledRegion"
import {$OldFormatSupport, $OldFormatSupport$$Type} from "xaero.map.file.OldFormatSupport"
import {$MapRegionInfo, $MapRegionInfo$$Type} from "xaero.map.file.MapRegionInfo"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$RegionTexture, $RegionTexture$$Type} from "xaero.map.region.texture.RegionTexture"
import {$LeafRegionTexture, $LeafRegionTexture$$Type} from "xaero.map.region.texture.LeafRegionTexture"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"

export class $MapRegion extends $LeveledRegion<($LeafRegionTexture)> implements $MapRegionInfo {
 "activeBranchUpdateReferences": integer
 "leafTextureVersionSum": ((integer)[])[]
 "loadingNeededForBranchLevel": integer
readonly "writerThreadPauseSync": any
static readonly "SIDE_LENGTH": integer
 "loadingPrioritized": boolean

constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: $MapDimension$$Type, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: boolean, arg9: $Registry$$Type<($Biome$$Type)>)

public "setVersion"(arg0: integer): void
public "getVersion"(): integer
public "isLoaded"(): boolean
public "setParent"(arg0: $BranchLeveledRegion$$Type): void
public "clean"(arg0: $MapProcessor$$Type): void
public "getChunk"(arg0: integer, arg1: integer): $MapTileChunk
public "getLoadState"(): byte
public "getTexture"(arg0: integer, arg1: integer): $LeafRegionTexture
public "registerVisit"(): void
public "getCaveStart"(): integer
public "setChunk"(arg0: integer, arg1: integer, arg2: $MapTileChunk$$Type): void
public "setLoadState"(arg0: byte): void
public "hasVersion"(): boolean
public "getExtraInfo"(): StringJS
public "isRefreshing"(): boolean
public "setRefreshing"(arg0: boolean): void
public "createTexture"(arg0: integer, arg1: integer): $LeafRegionTexture
public "isResting"(): boolean
public "requestRefresh"(arg0: $MapProcessor$$Type, arg1: boolean): void
public "requestRefresh"(arg0: $MapProcessor$$Type): void
public "checkForUpdates"(arg0: $MapProcessor$$Type, arg1: boolean, arg2: (boolean)[], arg3: $ArrayList$$Type<($BranchLeveledRegion$$Type)>, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "getDimId"(): StringJS
public "addDebugLines"(arg0: $List$$Type<(StringJS)>, arg1: $MapProcessor$$Type, arg2: integer, arg3: integer): void
public "hasHadTerrain"(): boolean
public "isBeingWritten"(): boolean
public "getRegionFile"(): $File
public "getWorldId"(): StringJS
public "getMwId"(): StringJS
public "setCaveStart"(arg0: integer): void
public "cancelRefresh"(arg0: $MapProcessor$$Type): void
public "popWriterPause"(): void
public "clearRegion"(arg0: $MapProcessor$$Type): void
public "getSaveExists"(): boolean
public "countChunks"(): integer
public "putTexture"(arg0: integer, arg1: integer, arg2: $RegionTexture$$Type<(any)>): void
public "putTexture"(arg0: integer, arg1: integer, arg2: $LeafRegionTexture$$Type): void
public "setRegionFile"(arg0: $File$$Type): void
public "setSaveExists"(arg0: boolean): void
public "getLastVisited"(): long
public "preCache"(): void
public "postCache"(arg0: $File$$Type, arg1: $MapSaveLoad$$Type, arg2: boolean): void
public "skipCaching"(arg0: $MapProcessor$$Type): boolean
public "findCacheFile"(arg0: $MapSaveLoad$$Type): $File
public "updateCaveMode"(): void
public "getCaveDepth"(): integer
public "isResaving"(): boolean
public "setResaving"(arg0: boolean): void
public "getBiomeRegistry"(): $Registry<($Biome)>
public "isWritingPaused"(): boolean
public "setBeingWritten"(arg0: boolean): void
public "isNormalMapData"(): boolean
public "setHasHadTerrain"(): void
public "shouldAffectLoadingRequestFrequency"(): boolean
public "shouldConvertCacheToOutdatedOnFinishDim"(): boolean
public "getReloadVersion"(): integer
public "getCacheHashCode"(): integer
public "caveStartOutdated"(arg0: integer, arg1: integer): boolean
public "getHighlightsHash"(): integer
public "loadingAnimation"(): boolean
public "hasLookedForCache"(): boolean
public "loadCacheTextures"(arg0: $MapProcessor$$Type, arg1: $Registry$$Type<($Biome$$Type)>, arg2: boolean, arg3: ((boolean)[])[], arg4: integer, arg5: (boolean)[], arg6: (boolean)[], arg7: integer, arg8: $OldFormatSupport$$Type): boolean
public "setCacheHashCode"(arg0: integer): void
public "setHighlightsHash"(arg0: integer): void
public "pushWriterPause"(): void
public "onDimensionClear"(arg0: $MapProcessor$$Type): void
public "getInitialVersion"(): integer
public "setInitialVersion"(arg0: integer): void
public "getPixelResultBuffer"(): (integer)[]
public "getMutableGlobalPos"(): $BlockPos$MutableBlockPos
public "getLastSaveTime"(): long
public "setLastSaveTime"(arg0: long): void
public "getTimeSinceVisit"(): long
public "shouldBeProcessed"(): boolean
public "onProcessingEnd"(): void
public "onCurrentDimFinish"(arg0: $MapSaveLoad$$Type, arg1: $MapProcessor$$Type): void
public "onLimiterRemoval"(arg0: $MapProcessor$$Type): void
public "afterLimiterRemoval"(arg0: $MapProcessor$$Type): void
public "setReloadVersion"(arg0: integer): void
public "restoreMetaData"(arg0: ((integer)[])[], arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: boolean, arg6: $MapProcessor$$Type): void
public "convertCacheToOutdated"(arg0: $MapSaveLoad$$Type, arg1: StringJS): void
public "hasRemovableSourceData"(): boolean
public "unsetHasHadTerrain"(): void
public "setLookedForCache"(arg0: boolean): void
public "getUpToDateCaveStart"(): integer
public "setOutdatedWithOtherLayers"(arg0: boolean): void
public "canRequestReload_unsynced"(): boolean
public "destroyBufferUpdateObjects"(): void
public "processWhenLoadedChunksExist"(arg0: integer): void
public "updateTargetHighlightsHash"(): void
public "getTargetHighlightsHash"(): integer
public "updateLeafTextureVersion"(arg0: integer, arg1: integer, arg2: integer): void
public "isOutdatedWithOtherLayers"(): boolean
public "restoreBufferUpdateObjects"(): void
public "cleanAndCacheRequestsBlocked"(): boolean
public "shouldEndProcessingAfterUpload"(): boolean
public "getRegionX"(): integer
public "getRegionZ"(): integer
public "shouldCache"(): boolean
public "setShouldCache"(arg0: boolean, arg1: StringJS): void
public "getCacheFile"(): $File
public "setCacheFile"(arg0: $File$$Type): void
set "version"(value: integer)
get "version"(): integer
get "loaded"(): boolean
set "parent"(value: $BranchLeveledRegion$$Type)
get "loadState"(): byte
get "caveStart"(): integer
set "loadState"(value: byte)
get "extraInfo"(): StringJS
get "refreshing"(): boolean
set "refreshing"(value: boolean)
get "resting"(): boolean
get "dimId"(): StringJS
get "beingWritten"(): boolean
get "regionFile"(): $File
get "worldId"(): StringJS
get "mwId"(): StringJS
set "caveStart"(value: integer)
get "saveExists"(): boolean
set "regionFile"(value: $File$$Type)
set "saveExists"(value: boolean)
get "lastVisited"(): long
get "caveDepth"(): integer
get "resaving"(): boolean
set "resaving"(value: boolean)
get "biomeRegistry"(): $Registry<($Biome)>
get "writingPaused"(): boolean
set "beingWritten"(value: boolean)
get "normalMapData"(): boolean
get "reloadVersion"(): integer
get "cacheHashCode"(): integer
get "highlightsHash"(): integer
set "cacheHashCode"(value: integer)
set "highlightsHash"(value: integer)
get "initialVersion"(): integer
set "initialVersion"(value: integer)
get "pixelResultBuffer"(): (integer)[]
get "mutableGlobalPos"(): $BlockPos$MutableBlockPos
get "lastSaveTime"(): long
set "lastSaveTime"(value: long)
get "timeSinceVisit"(): long
set "reloadVersion"(value: integer)
set "lookedForCache"(value: boolean)
get "upToDateCaveStart"(): integer
set "outdatedWithOtherLayers"(value: boolean)
get "targetHighlightsHash"(): integer
get "outdatedWithOtherLayers"(): boolean
get "regionX"(): integer
get "regionZ"(): integer
get "cacheFile"(): $File
set "cacheFile"(value: $File$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapRegion$$Type = ($MapRegion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapRegion_ = $MapRegion$$Type;
}}
declare module "xaero.map.core.IWorldMapSMultiBlockChangePacket" {
import {$SectionPos, $SectionPos$$Type} from "net.minecraft.core.SectionPos"

export interface $IWorldMapSMultiBlockChangePacket {

 "xaero_wm_getSectionPos"(): $SectionPos

(): $SectionPos$$Type
}

export namespace $IWorldMapSMultiBlockChangePacket {
const probejs$$marker: never
}
export class $IWorldMapSMultiBlockChangePacket$$Static implements $IWorldMapSMultiBlockChangePacket {


 "xaero_wm_getSectionPos"(): $SectionPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldMapSMultiBlockChangePacket$$Type = (() => $SectionPos$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWorldMapSMultiBlockChangePacket_ = $IWorldMapSMultiBlockChangePacket$$Type;
}}
declare module "xaero.map.region.LeveledRegion" {
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$MapDimension, $MapDimension$$Type} from "xaero.map.world.MapDimension"
import {$File, $File$$Type} from "java.io.File"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$MapSaveLoad, $MapSaveLoad$$Type} from "xaero.map.file.MapSaveLoad"
import {$List, $List$$Type} from "java.util.List"
import {$BranchLeveledRegion, $BranchLeveledRegion$$Type} from "xaero.map.region.BranchLeveledRegion"
import {$FastPalette, $FastPalette$$Type} from "xaero.map.palette.FastPalette"
import {$OldFormatSupport, $OldFormatSupport$$Type} from "xaero.map.file.OldFormatSupport"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$RegionTexture, $RegionTexture$$Type} from "xaero.map.region.texture.RegionTexture"
import {$DataOutputStream, $DataOutputStream$$Type} from "java.io.DataOutputStream"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"

export class $LeveledRegion<T extends $RegionTexture<(T)>> implements $Comparable<($LeveledRegion<(T)>)> {
 "activeBranchUpdateReferences": integer
 "leafTextureVersionSum": ((integer)[])[]
static readonly "SIDE_LENGTH": integer

constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: $MapDimension$$Type, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: $BranchLeveledRegion$$Type)

public "getLevel"(): integer
public "isLoaded"(): boolean
public "toString"(): StringJS
public "compareTo"(arg0: $LeveledRegion$$Type<(T)>): integer
public "compareTo"(arg0: any): integer
public "getParent"(): $BranchLeveledRegion
public "getRegionX"(): integer
public "getRegionZ"(): integer
public "getTexture"(arg0: integer, arg1: integer): T
public "getDim"(): $MapDimension
public "shouldCache"(): boolean
public static "setComparison"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "getCaveLayer"(): integer
public "getExtraInfo"(): StringJS
public "isRefreshing"(): boolean
public "deleteBuffers"(): void
public "createTexture"(arg0: integer, arg1: integer): T
public "checkForUpdates"(arg0: $MapProcessor$$Type, arg1: boolean, arg2: (boolean)[], arg3: $ArrayList$$Type<($BranchLeveledRegion$$Type)>, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "addDebugLines"(arg0: $List$$Type<(StringJS)>, arg1: $MapProcessor$$Type, arg2: integer, arg3: integer): void
public "isMetaLoaded"(): boolean
public "getRootRegion"(): $LeveledRegion<(any)>
public "setShouldCache"(arg0: boolean, arg1: StringJS): void
public "getCacheFile"(): $File
public "setCacheFile"(arg0: $File$$Type): void
public "putTexture"(arg0: integer, arg1: integer, arg2: T): void
public "preCache"(): void
public "postCache"(arg0: $File$$Type, arg1: $MapSaveLoad$$Type, arg2: boolean): void
public "skipCaching"(arg0: $MapProcessor$$Type): boolean
public "findCacheFile"(arg0: $MapSaveLoad$$Type): $File
public "getBiomeKey"(arg0: integer): $ResourceKey<($Biome)>
public "hasTextures"(): boolean
public "setAllCachePrepared"(arg0: boolean): void
public "shouldAffectLoadingRequestFrequency"(): boolean
public "getAndResetCachedTextureVersion"(arg0: integer, arg1: integer): integer
public "reloadHasBeenRequested"(): boolean
public "loadingAnimation"(): boolean
public "loadCacheTextures"(arg0: $MapProcessor$$Type, arg1: $Registry$$Type<($Biome$$Type)>, arg2: boolean, arg3: ((boolean)[])[], arg4: integer, arg5: (boolean)[], arg6: (boolean)[], arg7: integer, arg8: $OldFormatSupport$$Type): boolean
public "resetBiomePalette"(): void
public "deleteGLBuffers"(): void
public "onDimensionClear"(arg0: $MapProcessor$$Type): void
public "shouldBeProcessed"(): boolean
public "onProcessingEnd"(): void
public "onCurrentDimFinish"(arg0: $MapSaveLoad$$Type, arg1: $MapProcessor$$Type): void
public "onLimiterRemoval"(arg0: $MapProcessor$$Type): void
public "afterLimiterRemoval"(arg0: $MapProcessor$$Type): void
public "hasRemovableSourceData"(): boolean
public "getBiomePaletteSize"(): integer
public "saveBiomePalette"(arg0: $DataOutputStream$$Type): void
public "saveCacheTextures"(arg0: $File$$Type, arg1: integer): boolean
public "ensureBiomePalette"(): void
public "isAllCachePrepared"(): boolean
public "confirmMetaLoaded"(): void
public "getBiomePaletteIndex"(arg0: $ResourceKey$$Type<($Biome)>): integer
public "onBiomeAddedToTexture"(arg0: $ResourceKey$$Type<($Biome)>): integer
public "uncountTextureBiomes"(arg0: $RegionTexture$$Type<(any)>): void
public "getBiomePalette"(): $FastPalette<($ResourceKey<($Biome)>)>
public "shouldAllowAnotherRegionToLoad"(): boolean
public "calculateSortingChunkDistance"(): void
public "setRecacheHasBeenRequested"(arg0: boolean, arg1: StringJS): void
public "processWhenLoadedChunksExist"(arg0: integer): void
public "updateLeafTextureVersion"(arg0: integer, arg1: integer, arg2: integer): void
public "cleanAndCacheRequestsBlocked"(): boolean
public "shouldEndProcessingAfterUpload"(): boolean
public "deleteTexturesAndBuffers"(): void
public "onBiomeRemovedFromTexture"(arg0: integer): void
public "calculateSortingDistance"(): void
public "recacheHasBeenRequested"(): boolean
public "setReloadHasBeenRequested"(arg0: boolean, arg1: StringJS): void
get "level"(): integer
get "loaded"(): boolean
get "parent"(): $BranchLeveledRegion
get "regionX"(): integer
get "regionZ"(): integer
get "dim"(): $MapDimension
get "caveLayer"(): integer
get "extraInfo"(): StringJS
get "refreshing"(): boolean
get "metaLoaded"(): boolean
get "rootRegion"(): $LeveledRegion<(any)>
get "cacheFile"(): $File
set "cacheFile"(value: $File$$Type)
set "allCachePrepared"(value: boolean)
get "biomePaletteSize"(): integer
get "allCachePrepared"(): boolean
get "biomePalette"(): $FastPalette<($ResourceKey<($Biome)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeveledRegion$$Type<T> = ($LeveledRegion<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LeveledRegion_<T> = $LeveledRegion$$Type<(T)>;
}}
declare module "xaero.map.file.export.PNGExporter" {
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$PNGExportResult, $PNGExportResult$$Type} from "xaero.map.file.export.PNGExportResult"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$MapTileSelection, $MapTileSelection$$Type} from "xaero.map.gui.MapTileSelection"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$DimensionType, $DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"
import {$OldFormatSupport, $OldFormatSupport$$Type} from "xaero.map.file.OldFormatSupport"

export class $PNGExporter {

constructor(arg0: $Path$$Type)

public "export"(arg0: $MapProcessor$$Type, arg1: $Registry$$Type<($Biome$$Type)>, arg2: $Registry$$Type<($DimensionType$$Type)>, arg3: $MapTileSelection$$Type, arg4: $OldFormatSupport$$Type): $PNGExportResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PNGExporter$$Type = ($PNGExporter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PNGExporter_ = $PNGExporter$$Type;
}}
declare module "xaero.map.pool.MapTilePool" {
import {$MapTile, $MapTile$$Type} from "xaero.map.region.MapTile"
import {$MapPool, $MapPool$$Type} from "xaero.map.pool.MapPool"

export class $MapTilePool extends $MapPool<($MapTile)> {

constructor()

public "get"(arg0: StringJS, arg1: integer, arg2: integer): $MapTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapTilePool$$Type = ($MapTilePool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapTilePool_ = $MapTilePool$$Type;
}}
declare module "xaero.map.MapProcessor" {
import {$LeveledRegion, $LeveledRegion$$Type} from "xaero.map.region.LeveledRegion"
import {$MapLimiter, $MapLimiter$$Type} from "xaero.map.MapLimiter"
import {$WorldDataHandler, $WorldDataHandler$$Type} from "xaero.map.file.worldsave.WorldDataHandler"
import {$MapDimension, $MapDimension$$Type} from "xaero.map.world.MapDimension"
import {$CustomVertexConsumers, $CustomVertexConsumers$$Type} from "xaero.map.graphics.CustomVertexConsumers"
import {$MapTileChunk, $MapTileChunk$$Type} from "xaero.map.region.MapTileChunk"
import {$MapWorld, $MapWorld$$Type} from "xaero.map.world.MapWorld"
import {$MapSaveLoad, $MapSaveLoad$$Type} from "xaero.map.file.MapSaveLoad"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClientPacketListener, $ClientPacketListener$$Type} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Field, $Field$$Type} from "java.lang.reflect.Field"
import {$MapWriter, $MapWriter$$Type} from "xaero.map.MapWriter"
import {$BiomeColorCalculator, $BiomeColorCalculator$$Type} from "xaero.map.biome.BiomeColorCalculator"
import {$MessageBox, $MessageBox$$Type} from "xaero.map.gui.message.MessageBox"
import {$MapTile, $MapTile$$Type} from "xaero.map.region.MapTile"
import {$BranchTextureRenderer, $BranchTextureRenderer$$Type} from "xaero.map.region.texture.BranchTextureRenderer"
import {$BrokenBlockTintCache, $BrokenBlockTintCache$$Type} from "xaero.map.cache.BrokenBlockTintCache"
import {$MapTilePool, $MapTilePool$$Type} from "xaero.map.pool.MapTilePool"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$MapRegionHighlightsPreparer, $MapRegionHighlightsPreparer$$Type} from "xaero.map.highlight.MapRegionHighlightsPreparer"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BiomeGetter, $BiomeGetter$$Type} from "xaero.map.biome.BiomeGetter"
import {$ClientSyncedTrackedPlayerManager, $ClientSyncedTrackedPlayerManager$$Type} from "xaero.map.radar.tracker.synced.ClientSyncedTrackedPlayerManager"
import {$TextureUploader, $TextureUploader$$Type} from "xaero.map.graphics.TextureUploader"
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$HolderLookup, $HolderLookup$$Type} from "net.minecraft.core.HolderLookup"
import {$MapRegion, $MapRegion$$Type} from "xaero.map.region.MapRegion"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockTintProvider, $BlockTintProvider$$Type} from "xaero.map.biome.BlockTintProvider"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$$Type} from "xaero.map.cache.BlockStateShortShapeCache"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Queue, $Queue$$Type} from "java.util.Queue"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$MultiTextureRenderTypeRendererProvider, $MultiTextureRenderTypeRendererProvider$$Type} from "xaero.map.graphics.renderer.multitexture.MultiTextureRenderTypeRendererProvider"
import {$ByteBufferDeallocator, $ByteBufferDeallocator$$Type} from "xaero.map.deallocator.ByteBufferDeallocator"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$CaveStartCalculator, $CaveStartCalculator$$Type} from "xaero.map.misc.CaveStartCalculator"
import {$MapRunner, $MapRunner$$Type} from "xaero.map.MapRunner"
import {$HighlighterRegistry, $HighlighterRegistry$$Type} from "xaero.map.highlight.HighlighterRegistry"
import {$MessageBoxRenderer, $MessageBoxRenderer$$Type} from "xaero.map.gui.message.render.MessageBoxRenderer"
import {$DimensionType, $DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"
import {$OverlayManager, $OverlayManager$$Type} from "xaero.map.region.OverlayManager"

export class $MapProcessor {
 "worldBiomeRegistry": $Registry<($Biome)>
 "freeFramePeriod": long
readonly "processorThreadPauseSync": any
 "mainPlayerX": double
 "mainWorldBlockRegistry": $Registry<($Block)>
 "mainPlayerY": double
 "mainWorldBiomeRegistry": $Registry<($Biome)>
readonly "mainStuffSync": any
 "mainWorld": $ClientLevel
 "mainWorldDimensionTypeRegistry": $Registry<($DimensionType)>
static readonly "ROOT_FOLDER_FORMAT": integer
 "selectedField": $Field
 "mainPlayerZ": double
readonly "renderThreadPauseSync": any
 "newWorldBiomeRegistry": $Registry<($Biome)>
 "newWorldDimensionTypeRegistry": $Registry<($DimensionType)>
static readonly "DEFAULT_LIGHT_LEVELS": integer
readonly "uiSync": any
readonly "uiPauseSync": any
 "newWorldBlockRegistry": $Registry<($Block)>

constructor(arg0: $MapSaveLoad$$Type, arg1: $MapWriter$$Type, arg2: $MapLimiter$$Type, arg3: $ByteBufferDeallocator$$Type, arg4: $MapTilePool$$Type, arg5: $OverlayManager$$Type, arg6: $TextureUploader$$Type, arg7: $WorldDataHandler$$Type, arg8: $BranchTextureRenderer$$Type, arg9: $MultiTextureRenderTypeRendererProvider$$Type, arg10: $CustomVertexConsumers$$Type, arg11: $BiomeColorCalculator$$Type, arg12: $BlockStateShortShapeCache$$Type, arg13: $BiomeGetter$$Type, arg14: $BrokenBlockTintCache$$Type, arg15: $HighlighterRegistry$$Type, arg16: $MapRegionHighlightsPreparer$$Type, arg17: $MessageBox$$Type, arg18: $MessageBoxRenderer$$Type, arg19: $CaveStartCalculator$$Type, arg20: $ClientSyncedTrackedPlayerManager$$Type)

public "isEqual"(arg0: StringJS, arg1: StringJS, arg2: StringJS): boolean
public "run"(arg0: $MapRunner$$Type): void
public "stop"(): void
public "onInit"(arg0: $ClientPacketListener$$Type): void
public "getBrightness"(arg0: integer, arg1: $ClientLevel$$Type, arg2: boolean): float
public "getBrightness"(): float
public "getBrightness"(arg0: boolean): float
public "getMapSaveLoad"(): $MapSaveLoad
public "getMapWorld"(): $MapWorld
public "ignoreWorld"(arg0: $Level$$Type): boolean
public "getTilePool"(): $MapTilePool
public "setMainValues"(): void
public "getMapWriter"(): $MapWriter
public "isFinished"(): boolean
public "onWorldUnload"(): void
public "getWorld"(): $ClientLevel
public "onClientTickStart"(): void
public "getDimensionName"(arg0: $ResourceKey$$Type<($Level)>): StringJS
public "getCurrentDimension"(): StringJS
public "setConsideringNetherFairPlayMessage"(arg0: boolean): void
public "getCvc"(): $CustomVertexConsumers
public "getFootprints"(): $ArrayList<((double)[])>
public "getMessageBox"(): $MessageBox
public "getMapLimiter"(): $MapLimiter
public "regionExists"(arg0: integer, arg1: integer, arg2: integer): boolean
public "addToRefresh"(arg0: $MapRegion$$Type, arg1: boolean): void
public "popWriterPause"(): void
public "isProcessed"(arg0: $LeveledRegion$$Type<(any)>): boolean
public "popRenderPause"(arg0: boolean, arg1: boolean): void
public "onRenderProcess"(arg0: $Minecraft$$Type): void
public "resetRenderStartTime"(): void
public "updateWorldSpawn"(arg0: $BlockPos$$Type, arg1: $ClientLevel$$Type): void
public "getCrosshairMessage"(): StringJS
public "getWorldDataHandler"(): $WorldDataHandler
public "isWritingPaused"(): boolean
public "isCurrentMapLocked"(): boolean
public "getCurrentWorldId"(): StringJS
public "getWorldBlockRegistry"(): $Registry<($Block)>
public "getLeafMapRegion"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): $MapRegion
public "updateCaveStart"(): void
public "getCurrentCaveLayer"(): integer
public "getClientSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager
public "getMultiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
public "getAffectingLoadingFrequencyCount"(): integer
public "onServerLevelId"(arg0: integer): void
public "isMapWorldUsable"(): boolean
public "isRenderingPaused"(): boolean
public "getLeveledRegion"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $LeveledRegion<(any)>
public "getProcessedCount"(): integer
public "getOverlayManager"(): $OverlayManager
public "getGlobalVersion"(): integer
public "isUploadingPaused"(): boolean
public "regionDetectionExists"(arg0: integer, arg1: integer, arg2: integer): boolean
public "getAmbientBrightness"(arg0: $DimensionType$$Type): float
public "getBufferDeallocator"(): $ByteBufferDeallocator
public "removeToRefresh"(arg0: $MapRegion$$Type): void
public "pushWriterPause"(): void
public "removeMapRegion"(arg0: $LeveledRegion$$Type<(any)>): void
public "pushRenderPause"(arg0: boolean, arg1: boolean): void
public "waitForLoadingToFinish"(arg0: $Runnable$$Type): void
public "getMessageBoxRenderer"(): $MessageBoxRenderer
public "getMapRegionHighlightsPreparer"(): $MapRegionHighlightsPreparer
public "getBlockStateShortShapeCache"(): $BlockStateShortShapeCache
public "getMinecraftScheduledTasks"(): $Queue<($Runnable)>
public "getRenderStartTimeUpdater"(): $Runnable
public "isWaitingForWorldUpdate"(): boolean
public "isCurrentMultiworldWritable"(): boolean
public "getWorldBlockTintProvider"(): $BlockTintProvider
public "setServerModNetworkVersion"(arg0: integer): void
public "getWorldDimensionTypeRegistry"(): $Registry<($DimensionType)>
public "isConsideringNetherFairPlay"(): boolean
public static "isWorldRealms"(arg0: StringJS): boolean
public "getCurrentMWId"(): StringJS
public "isFinalizing"(): boolean
public "pushIsLoading"(): void
public "addToProcess"(arg0: $LeveledRegion$$Type<(any)>): void
public "popIsLoading"(): void
public "isUIPaused"(): boolean
public "changeWorld"(arg0: $ClientLevel$$Type, arg1: $HolderLookup$$Type<($Block$$Type)>, arg2: $Registry$$Type<($Block$$Type)>, arg3: $Registry$$Type<($Fluid$$Type)>, arg4: $Registry$$Type<($Biome$$Type)>, arg5: $Registry$$Type<($DimensionType$$Type)>): void
public "pushUIPause"(): void
public "popUIPause"(): void
public "getMapChunk"(arg0: integer, arg1: integer, arg2: integer): $MapTileChunk
public "setMultiworld"(arg0: $MapDimension$$Type, arg1: StringJS): void
public "getNewWorld"(): $ClientLevel
public "serverHasMod"(): boolean
public "getMapTile"(arg0: integer, arg1: integer, arg2: integer): $MapTile
public "getCurrentDimId"(): StringJS
public "isProcessingPaused"(): boolean
public "updateFootprints"(arg0: integer): void
public "updateDimension"(arg0: $ClientLevel$$Type, arg1: $ResourceKey$$Type<($Level)>): void
public "confirmMultiworld"(arg0: $MapDimension$$Type): boolean
public "updateVisitedDimension"(arg0: $ClientLevel$$Type): void
public "removeToProcess"(arg0: $LeveledRegion$$Type<(any)>): void
public "checkForWorldUpdate"(): void
public "toggleMultiworldType"(arg0: $MapDimension$$Type): void
public "quickConfirmMultiworld"(): void
public "initMinimapRender"(arg0: integer, arg1: integer): void
public "finalizeMinimapRender"(): void
public "getMinimapMapRegion"(arg0: integer, arg1: integer): $MapRegion
public "setGlobalVersion"(arg0: integer): void
public "getRenderStartTime"(): long
public static "isWorldMultiplayer"(arg0: boolean, arg1: StringJS): boolean
public "getHighlighterRegistry"(): $HighlighterRegistry
public "getWorldBlockLookup"(): $HolderLookup<($Block)>
public "canQuickConfirmUnsynced"(): boolean
public "getServerModNetworkVersion"(): integer
public "getDimensionIdForFolder"(arg0: StringJS): $ResourceKey<($Level)>
public "beforeMinimapRegionRender"(arg0: $MapRegion$$Type): void
public "requestCurrentMapDeletion"(): void
public "getBiomeColorCalculator"(): $BiomeColorCalculator
get "brightness"(): float
get "mapSaveLoad"(): $MapSaveLoad
get "mapWorld"(): $MapWorld
get "tilePool"(): $MapTilePool
get "mapWriter"(): $MapWriter
get "finished"(): boolean
get "world"(): $ClientLevel
get "currentDimension"(): StringJS
set "consideringNetherFairPlayMessage"(value: boolean)
get "cvc"(): $CustomVertexConsumers
get "footprints"(): $ArrayList<((double)[])>
get "messageBox"(): $MessageBox
get "mapLimiter"(): $MapLimiter
get "crosshairMessage"(): StringJS
get "worldDataHandler"(): $WorldDataHandler
get "writingPaused"(): boolean
get "currentMapLocked"(): boolean
get "currentWorldId"(): StringJS
get "worldBlockRegistry"(): $Registry<($Block)>
get "currentCaveLayer"(): integer
get "clientSyncedTrackedPlayerManager"(): $ClientSyncedTrackedPlayerManager
get "multiTextureRenderTypeRenderers"(): $MultiTextureRenderTypeRendererProvider
get "affectingLoadingFrequencyCount"(): integer
get "mapWorldUsable"(): boolean
get "renderingPaused"(): boolean
get "processedCount"(): integer
get "overlayManager"(): $OverlayManager
get "globalVersion"(): integer
get "uploadingPaused"(): boolean
get "bufferDeallocator"(): $ByteBufferDeallocator
get "messageBoxRenderer"(): $MessageBoxRenderer
get "mapRegionHighlightsPreparer"(): $MapRegionHighlightsPreparer
get "blockStateShortShapeCache"(): $BlockStateShortShapeCache
get "minecraftScheduledTasks"(): $Queue<($Runnable)>
get "renderStartTimeUpdater"(): $Runnable
get "waitingForWorldUpdate"(): boolean
get "currentMultiworldWritable"(): boolean
get "worldBlockTintProvider"(): $BlockTintProvider
set "serverModNetworkVersion"(value: integer)
get "worldDimensionTypeRegistry"(): $Registry<($DimensionType)>
get "consideringNetherFairPlay"(): boolean
get "currentMWId"(): StringJS
get "finalizing"(): boolean
get "uIPaused"(): boolean
get "newWorld"(): $ClientLevel
get "currentDimId"(): StringJS
get "processingPaused"(): boolean
set "globalVersion"(value: integer)
get "renderStartTime"(): long
get "highlighterRegistry"(): $HighlighterRegistry
get "worldBlockLookup"(): $HolderLookup<($Block)>
get "serverModNetworkVersion"(): integer
get "biomeColorCalculator"(): $BiomeColorCalculator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapProcessor$$Type = ($MapProcessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapProcessor_ = $MapProcessor$$Type;
}}
declare module "xaero.map.core.IWorldMapServerLevel" {
import {$ServerWorldCapabilities, $ServerWorldCapabilities$$Type} from "xaero.map.capabilities.ServerWorldCapabilities"

export interface $IWorldMapServerLevel {

 "getXaero_wm_capabilities"(): $ServerWorldCapabilities
 "setXaero_wm_capabilities"(arg0: $ServerWorldCapabilities$$Type): void
get "xaero_wm_capabilities"(): $ServerWorldCapabilities
set "xaero_wm_capabilities"(value: $ServerWorldCapabilities$$Type)
}

export namespace $IWorldMapServerLevel {
const probejs$$marker: never
}
export class $IWorldMapServerLevel$$Static implements $IWorldMapServerLevel {


 "getXaero_wm_capabilities"(): $ServerWorldCapabilities
 "setXaero_wm_capabilities"(arg0: $ServerWorldCapabilities$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldMapServerLevel$$Type = ($IWorldMapServerLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWorldMapServerLevel_ = $IWorldMapServerLevel$$Type;
}}
declare module "xaero.map.MapFullReloader" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$MapRegion, $MapRegion$$Type} from "xaero.map.region.MapRegion"
import {$MapDimension, $MapDimension$$Type} from "xaero.map.world.MapDimension"
import {$RegionDetection, $RegionDetection$$Type} from "xaero.map.file.RegionDetection"

export class $MapFullReloader {
static readonly "CONVERTED_WORLD_SAVE_MW": StringJS

constructor(arg0: integer, arg1: boolean, arg2: $Iterator$$Type<($RegionDetection$$Type)>, arg3: $MapDimension$$Type, arg4: $MapProcessor$$Type)

public "isResave"(): boolean
public "onRenderProcess"(): void
public "isPartOfReload"(arg0: $MapRegion$$Type): boolean
get "resave"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapFullReloader$$Type = ($MapFullReloader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapFullReloader_ = $MapFullReloader$$Type;
}}
declare module "xaero.map.world.MapWorld" {
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$MapConnectionNode, $MapConnectionNode$$Type} from "xaero.map.world.MapConnectionNode"
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$MapConnectionManager, $MapConnectionManager$$Type} from "xaero.map.world.MapConnectionManager"
import {$MapDimension, $MapDimension$$Type} from "xaero.map.world.MapDimension"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $MapWorld {

constructor(arg0: StringJS, arg1: StringJS, arg2: $MapProcessor$$Type)

public "getDimensions"(arg0: $List$$Type<($MapDimension$$Type)>): void
public "getDimension"(arg0: $ResourceKey$$Type<($Level)>): $MapDimension
public "load"(): void
public "saveConfig"(): void
public "getCurrentDimension"(): $MapDimension
public "isMultiplayer"(): boolean
public "getMapProcessor"(): $MapProcessor
public "isCacheOnlyMode"(): boolean
public "getCurrentDimensionId"(): $ResourceKey<($Level)>
public "isIgnoreHeightmaps"(): boolean
public "getFutureDimensionId"(): $ResourceKey<($Level)>
public "getFutureDimension"(): $MapDimension
public "toggleDimension"(arg0: boolean): void
public "getCustomDimensionId"(): $ResourceKey<($Level)>
public "getCurrentMultiworld"(): StringJS
public "isUsingCustomDimension"(): boolean
public "setIgnoreHeightmaps"(arg0: boolean): void
public "setTeleportAllowed"(arg0: boolean): void
public "isTeleportAllowed"(): boolean
public static "convertWorldFolderToRootId"(arg0: integer, arg1: StringJS): StringJS
public "isUsingUnknownDimensionType"(): boolean
public "clearAllCachedHighlightHashes"(): void
public "getMainId"(): StringJS
public "getPotentialDimId"(): $ResourceKey<($Level)>
public "setFutureDimensionId"(arg0: $ResourceKey$$Type<($Level)>): void
public "getDimensionsList"(): $List<($MapDimension)>
public "switchToFutureUnsynced"(): void
public "onWorldChangeUnsynced"(arg0: $ClientLevel$$Type): void
public "isIgnoreServerLevelId"(): boolean
public "getPlayerMapKey"(): $MapConnectionNode
public "setCustomDimensionId"(arg0: $ResourceKey$$Type<($Level)>): void
public "getOldUnfixedMainId"(): StringJS
public "getMapConnections"(): $MapConnectionManager
public "unconfirmMultiworldTypeUnsynced"(): void
public "isFutureMultiworldTypeConfirmed"(arg0: $MapDimension$$Type): boolean
public "isCurrentMultiworldTypeConfirmed"(): boolean
public "getDimensionTeleportCommandFormat"(): StringJS
public "setDimensionTeleportCommandFormat"(arg0: StringJS): void
public "switchToFutureMultiworldTypeUnsynced"(): void
public "getFutureMultiworldType"(arg0: $MapDimension$$Type): integer
public "getCurrentMultiworldType"(): integer
public "getPlayerTeleportCommandFormat"(): StringJS
public "setPlayerTeleportCommandFormat"(arg0: StringJS): void
public "getTeleportCommandFormat"(): StringJS
public "setTeleportCommandFormat"(arg0: StringJS): void
public "createDimensionUnsynced"(arg0: $ResourceKey$$Type<($Level)>): $MapDimension
public "toggleMultiworldTypeUnsynced"(): void
public "confirmMultiworldTypeUnsynced"(): void
public "getFutureMultiworldUnsynced"(): StringJS
get "currentDimension"(): $MapDimension
get "multiplayer"(): boolean
get "mapProcessor"(): $MapProcessor
get "cacheOnlyMode"(): boolean
get "currentDimensionId"(): $ResourceKey<($Level)>
get "ignoreHeightmaps"(): boolean
get "futureDimensionId"(): $ResourceKey<($Level)>
get "futureDimension"(): $MapDimension
get "customDimensionId"(): $ResourceKey<($Level)>
get "currentMultiworld"(): StringJS
get "usingCustomDimension"(): boolean
set "ignoreHeightmaps"(value: boolean)
set "teleportAllowed"(value: boolean)
get "teleportAllowed"(): boolean
get "usingUnknownDimensionType"(): boolean
get "mainId"(): StringJS
get "potentialDimId"(): $ResourceKey<($Level)>
set "futureDimensionId"(value: $ResourceKey$$Type<($Level)>)
get "dimensionsList"(): $List<($MapDimension)>
get "ignoreServerLevelId"(): boolean
get "playerMapKey"(): $MapConnectionNode
set "customDimensionId"(value: $ResourceKey$$Type<($Level)>)
get "oldUnfixedMainId"(): StringJS
get "mapConnections"(): $MapConnectionManager
get "currentMultiworldTypeConfirmed"(): boolean
get "dimensionTeleportCommandFormat"(): StringJS
set "dimensionTeleportCommandFormat"(value: StringJS)
get "currentMultiworldType"(): integer
get "playerTeleportCommandFormat"(): StringJS
set "playerTeleportCommandFormat"(value: StringJS)
get "teleportCommandFormat"(): StringJS
set "teleportCommandFormat"(value: StringJS)
get "futureMultiworldUnsynced"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapWorld$$Type = ($MapWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapWorld_ = $MapWorld$$Type;
}}
declare module "xaero.map.server.player.IServerPlayer" {
import {$ServerPlayerData, $ServerPlayerData$$Type} from "xaero.map.server.player.ServerPlayerData"

export interface $IServerPlayer {

 "getXaeroWorldMapPlayerData"(): $ServerPlayerData
 "setXaeroWorldMapPlayerData"(arg0: $ServerPlayerData$$Type): void
get "xaeroWorldMapPlayerData"(): $ServerPlayerData
set "xaeroWorldMapPlayerData"(value: $ServerPlayerData$$Type)
}

export namespace $IServerPlayer {
const probejs$$marker: never
}
export class $IServerPlayer$$Static implements $IServerPlayer {


 "getXaeroWorldMapPlayerData"(): $ServerPlayerData
 "setXaeroWorldMapPlayerData"(arg0: $ServerPlayerData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerPlayer$$Type = ($IServerPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerPlayer_ = $IServerPlayer$$Type;
}}
declare module "xaero.map.region.MapBlock" {
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$Overlay, $Overlay$$Type} from "xaero.map.region.Overlay"
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$$Type} from "net.minecraft.core.BlockPos$MutableBlockPos"
import {$MapDimension, $MapDimension$$Type} from "xaero.map.world.MapDimension"
import {$MapTileChunk, $MapTileChunk$$Type} from "xaero.map.region.MapTileChunk"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockTintProvider, $BlockTintProvider$$Type} from "xaero.map.biome.BlockTintProvider"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$$Type} from "xaero.map.cache.BlockStateShortShapeCache"
import {$MapWriter, $MapWriter$$Type} from "xaero.map.MapWriter"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$MapTile, $MapTile$$Type} from "xaero.map.region.MapTile"
import {$MapPixel, $MapPixel$$Type} from "xaero.map.region.MapPixel"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$OverlayManager, $OverlayManager$$Type} from "xaero.map.region.OverlayManager"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$DimensionType, $DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"

export class $MapBlock extends $MapPixel {

constructor()

public "getHeight"(): integer
public "equals"(arg0: $MapBlock$$Type, arg1: boolean): boolean
public "write"(arg0: $BlockState$$Type, arg1: integer, arg2: integer, arg3: $ResourceKey$$Type<($Biome)>, arg4: byte, arg5: boolean, arg6: boolean): void
public "getBiome"(): $ResourceKey<($Biome)>
public "setHeight"(arg0: integer): void
public "setBiome"(arg0: $ResourceKey$$Type<($Biome)>): void
public "fixHeightType"(arg0: integer, arg1: integer, arg2: $MapTile$$Type, arg3: $MapTileChunk$$Type, arg4: $MapTileChunk$$Type, arg5: $MapTileChunk$$Type, arg6: $MapTileChunk$$Type, arg7: integer, arg8: boolean, arg9: $BlockStateShortShapeCache$$Type): void
public "getTopHeight"(): integer
public "getOverlays"(): $ArrayList<($Overlay)>
public "isGrass"(): boolean
public "toRenderString"(arg0: $Registry$$Type<($Biome$$Type)>): StringJS
public "addOverlay"(arg0: $Overlay$$Type): void
public "getEffectiveHeight"(arg0: $BlockStateShortShapeCache$$Type): integer
public "getEffectiveHeight"(arg0: boolean): integer
public "equalsSlopesExcluded"(arg0: $MapBlock$$Type): boolean
public "setSlopeUnknown"(arg0: boolean): void
public "prepareForWriting"(arg0: integer): void
public "getNumberOfOverlays"(): integer
public "getParametres"(): integer
public "setTopHeight"(arg0: integer): void
public "getPixelColour"(arg0: (integer)[], arg1: $MapWriter$$Type, arg2: $Level$$Type, arg3: $MapDimension$$Type, arg4: $Registry$$Type<($Block$$Type)>, arg5: $MapTileChunk$$Type, arg6: $MapTileChunk$$Type, arg7: $MapTileChunk$$Type, arg8: $MapTileChunk$$Type, arg9: $MapTile$$Type, arg10: integer, arg11: integer, arg12: integer, arg13: integer, arg14: $BlockPos$MutableBlockPos$$Type, arg15: $Registry$$Type<($Biome$$Type)>, arg16: $Registry$$Type<($DimensionType$$Type)>, arg17: float, arg18: float, arg19: float, arg20: $BlockTintProvider$$Type, arg21: $MapProcessor$$Type, arg22: $OverlayManager$$Type, arg23: integer, arg24: integer, arg25: $BlockStateShortShapeCache$$Type): void
public "setVerticalSlope"(arg0: byte): void
public "setDiagonalSlope"(arg0: byte): void
public "getVerticalSlope"(): byte
public "getDiagonalSlope"(): byte
public "getEffectiveTopHeight"(arg0: boolean): integer
get "height"(): integer
get "biome"(): $ResourceKey<($Biome)>
set "height"(value: integer)
set "biome"(value: $ResourceKey$$Type<($Biome)>)
get "topHeight"(): integer
get "overlays"(): $ArrayList<($Overlay)>
get "grass"(): boolean
set "slopeUnknown"(value: boolean)
get "numberOfOverlays"(): integer
get "parametres"(): integer
set "topHeight"(value: integer)
set "verticalSlope"(value: byte)
set "diagonalSlope"(value: byte)
get "verticalSlope"(): byte
get "diagonalSlope"(): byte
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapBlock$$Type = ($MapBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapBlock_ = $MapBlock$$Type;
}}
declare module "xaero.map.file.worldsave.WorldDataHandler$Result" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $WorldDataHandler$Result extends $Enum<($WorldDataHandler$Result)> {
static readonly "SUCCESS": $WorldDataHandler$Result
static readonly "CANCEL": $WorldDataHandler$Result
static readonly "FAIL": $WorldDataHandler$Result


public static "values"(): ($WorldDataHandler$Result)[]
public static "valueOf"(arg0: StringJS): $WorldDataHandler$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldDataHandler$Result$$Type = (("success") | ("fail") | ("cancel"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldDataHandler$Result_ = $WorldDataHandler$Result$$Type;
}}
declare module "xaero.map.pool.TextureUploadPool$BranchUpdate" {
import {$TextureUploadPool, $TextureUploadPool$$Type} from "xaero.map.pool.TextureUploadPool"
import {$BranchTextureRenderer, $BranchTextureRenderer$$Type} from "xaero.map.region.texture.BranchTextureRenderer"
import {$TextureUpload$BranchUpdate, $TextureUpload$BranchUpdate$$Type} from "xaero.map.graphics.TextureUpload$BranchUpdate"

export class $TextureUploadPool$BranchUpdate extends $TextureUploadPool<($TextureUpload$BranchUpdate)> {

constructor(arg0: integer, arg1: boolean)

public "get"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: long, arg9: integer, arg10: integer, arg11: integer, arg12: integer, arg13: integer, arg14: integer, arg15: $BranchTextureRenderer$$Type, arg16: integer, arg17: integer): $TextureUpload$BranchUpdate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploadPool$BranchUpdate$$Type = ($TextureUploadPool$BranchUpdate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUploadPool$BranchUpdate_ = $TextureUploadPool$BranchUpdate$$Type;
}}
declare module "xaero.map.region.OverlayManager" {
import {$Overlay, $Overlay$$Type} from "xaero.map.region.Overlay"

export class $OverlayManager {

constructor()

public "getOriginal"(arg0: $Overlay$$Type): $Overlay
public "getNumberOfUniqueOverlays"(): integer
get "numberOfUniqueOverlays"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverlayManager$$Type = ($OverlayManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OverlayManager_ = $OverlayManager$$Type;
}}
declare module "xaero.map.biome.BlockTintProvider" {
import {$LevelLightEngine, $LevelLightEngine$$Type} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$LevelHeightAccessor, $LevelHeightAccessor$$Type} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ColorResolver, $ColorResolver$$Type} from "net.minecraft.world.level.ColorResolver"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MapWriter, $MapWriter$$Type} from "xaero.map.MapWriter"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BiomeColorCalculator, $BiomeColorCalculator$$Type} from "xaero.map.biome.BiomeColorCalculator"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$MapTile, $MapTile$$Type} from "xaero.map.region.MapTile"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BrokenBlockTintCache, $BrokenBlockTintCache$$Type} from "xaero.map.cache.BrokenBlockTintCache"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$ClipBlockStateContext, $ClipBlockStateContext$$Type} from "net.minecraft.world.level.ClipBlockStateContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LightLayer, $LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$AuxiliaryLightManager, $AuxiliaryLightManager$$Type} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ClipContext, $ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"

export class $BlockTintProvider implements $BlockAndTintGetter {

constructor(arg0: $Registry$$Type<($Biome$$Type)>, arg1: $BiomeColorCalculator$$Type, arg2: $MapProcessor$$Type, arg3: $BrokenBlockTintCache$$Type, arg4: $MapWriter$$Type)

public "getHeight"(): integer
public "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
public "getShade"(arg0: $Direction$$Type, arg1: boolean): float
public "getLightEngine"(): $LevelLightEngine
public "getFluidState"(arg0: $BlockPos$$Type): $FluidState
public "getBlockState"(arg0: $BlockPos$$Type): $BlockState
public "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
public "getMinBuildHeight"(): integer
public "getBiomeColor"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: boolean, arg3: $MapTile$$Type, arg4: integer): integer
public "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
public "canSeeSky"(arg0: $BlockPos$$Type): boolean
public "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
public "clip"(arg0: $ClipContext$$Type): $BlockHitResult
public "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
public "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
public static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
public "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
public "getLightEmission"(arg0: $BlockPos$$Type): integer
public "getMaxLightLevel"(): integer
public "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
public "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
public "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
public "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "getMaxSection"(): integer
public "getMinSection"(): integer
public "getMaxBuildHeight"(): integer
public "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
public "isOutsideBuildHeight"(arg0: integer): boolean
public "getSectionIndex"(arg0: integer): integer
public "getSectionsCount"(): integer
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "getSectionYFromSectionIndex"(arg0: integer): integer
public "getModelData"(arg0: $BlockPos$$Type): $ModelData
public "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
public "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
public "hasBiomes"(): boolean
public "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
public "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
get "height"(): integer
get "lightEngine"(): $LevelLightEngine
get "minBuildHeight"(): integer
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minSection"(): integer
get "maxBuildHeight"(): integer
get "sectionsCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTintProvider$$Type = ($BlockTintProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTintProvider_ = $BlockTintProvider$$Type;
}}
declare module "xaero.map.highlight.MapRegionHighlightsPreparer" {
import {$MapRegion, $MapRegion$$Type} from "xaero.map.region.MapRegion"

export class $MapRegionHighlightsPreparer {

constructor()

public "prepare"(arg0: $MapRegion$$Type, arg1: integer, arg2: integer, arg3: boolean): void
public "prepare"(arg0: $MapRegion$$Type, arg1: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapRegionHighlightsPreparer$$Type = ($MapRegionHighlightsPreparer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapRegionHighlightsPreparer_ = $MapRegionHighlightsPreparer$$Type;
}}
declare module "xaero.map.file.MapSaveLoad" {
import {$HolderLookup, $HolderLookup$$Type} from "net.minecraft.core.HolderLookup"
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$LeveledRegion, $LeveledRegion$$Type} from "xaero.map.region.LeveledRegion"
import {$MapRegion, $MapRegion$$Type} from "xaero.map.region.MapRegion"
import {$MapDimension, $MapDimension$$Type} from "xaero.map.world.MapDimension"
import {$File, $File$$Type} from "java.io.File"
import {$MapTileSelection, $MapTileSelection$$Type} from "xaero.map.gui.MapTileSelection"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ExportScreen, $ExportScreen$$Type} from "xaero.map.gui.ExportScreen"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$$Type} from "xaero.map.cache.BlockStateShortShapeCache"
import {$RegionDetection, $RegionDetection$$Type} from "xaero.map.file.RegionDetection"
import {$BranchLeveledRegion, $BranchLeveledRegion$$Type} from "xaero.map.region.BranchLeveledRegion"
import {$PNGExporter, $PNGExporter$$Type} from "xaero.map.file.export.PNGExporter"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$OldFormatSupport, $OldFormatSupport$$Type} from "xaero.map.file.OldFormatSupport"
import {$MapRegionInfo, $MapRegionInfo$$Type} from "xaero.map.file.MapRegionInfo"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$BiomeGetter, $BiomeGetter$$Type} from "xaero.map.biome.BiomeGetter"
import {$OverlayManager, $OverlayManager$$Type} from "xaero.map.region.OverlayManager"

export class $MapSaveLoad {
static readonly "currentCacheSaveMinorVersion": integer
 "saveAll": boolean
static readonly "currentCacheSaveMajorVersion": integer
 "loadingFiles": boolean
static readonly "SAVE_TIME": integer
 "mainTextureLevel": integer

constructor(arg0: $OverlayManager$$Type, arg1: $PNGExporter$$Type, arg2: $OldFormatSupport$$Type, arg3: $BlockStateShortShapeCache$$Type)

public "getFile"(arg0: $MapRegion$$Type): $File
public "run"(arg0: $HolderLookup$$Type<($Block$$Type)>, arg1: $Registry$$Type<($Block$$Type)>, arg2: $Registry$$Type<($Fluid$$Type)>, arg3: $BiomeGetter$$Type, arg4: $Registry$$Type<($Biome$$Type)>): void
public "safeDelete"(arg0: $Path$$Type, arg1: StringJS): void
public "requestLoad"(arg0: $MapRegion$$Type, arg1: StringJS): void
public "requestLoad"(arg0: $MapRegion$$Type, arg1: StringJS, arg2: boolean): void
public "getToSave"(): $ArrayList<($MapRegion)>
public "getCacheFile"(arg0: $MapRegionInfo$$Type, arg1: integer, arg2: boolean, arg3: boolean): $File
public "saveExists"(arg0: $MapRegion$$Type): boolean
public "removeToLoad"(arg0: $MapRegion$$Type): void
public "getMainFolder"(arg0: StringJS, arg1: StringJS): $Path
public "getMWSubFolder"(arg0: StringJS, arg1: StringJS, arg2: StringJS): $Path
public "backupFile"(arg0: $File$$Type, arg1: integer): void
public "removeToCache"(arg0: $MapDimension$$Type, arg1: integer): $LeveledRegion<(any)>
public "removeToCache"(arg0: $LeveledRegion$$Type<(any)>): void
public static "getRootFolder"(arg0: StringJS): $Path
public "getNextToLoadByViewing"(): $LeveledRegion<(any)>
public "setNextToLoadByViewing"(arg0: $LeveledRegion$$Type<(any)>): void
public "setMapProcessor"(arg0: $MapProcessor$$Type): void
public "getSizeOfToLoad"(): integer
public "requestBranchCache"(arg0: $BranchLeveledRegion$$Type, arg1: StringJS, arg2: boolean): void
public "requestBranchCache"(arg0: $BranchLeveledRegion$$Type, arg1: StringJS): void
public "toCacheContains"(arg0: $LeveledRegion$$Type<(any)>): boolean
public "removeTempCacheRequest"(arg0: $File$$Type): boolean
public "addTempCacheRequest"(arg0: $File$$Type): void
public "isRegionDetectionComplete"(): boolean
public "getSizeOfToLoadBranchCache"(): integer
public "getNormalFile"(arg0: $MapRegion$$Type): $File
public "detectRegions"(arg0: integer): void
public "getTempFile"(arg0: $File$$Type): $File
public "loadRegion"(arg0: $MapRegion$$Type, arg1: $HolderLookup$$Type<($Block$$Type)>, arg2: $Registry$$Type<($Block$$Type)>, arg3: $Registry$$Type<($Fluid$$Type)>, arg4: $BiomeGetter$$Type, arg5: integer): boolean
public "addToLoad"(arg0: $MapRegion$$Type, arg1: StringJS, arg2: boolean): void
public "beingSaved"(arg0: $MapDimension$$Type, arg1: integer, arg2: integer): boolean
public "exportPNG"(arg0: $ExportScreen$$Type, arg1: $MapTileSelection$$Type): boolean
public "requestCache"(arg0: $LeveledRegion$$Type<(any)>): void
public "getOldFolder"(arg0: StringJS, arg1: StringJS): $Path
public "clearToLoad"(): void
public "updateSave"(arg0: $LeveledRegion$$Type<(any)>, arg1: long, arg2: integer): void
public "getCaveLayerFolder"(arg0: integer, arg1: $Path$$Type): $Path
public "detectRegionsFromFiles"(arg0: $MapDimension$$Type, arg1: StringJS, arg2: StringJS, arg3: StringJS, arg4: $Path$$Type, arg5: StringJS, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: $Consumer$$Type<($RegionDetection)>): void
public "safeMoveAndReplace"(arg0: $Path$$Type, arg1: $Path$$Type, arg2: StringJS, arg3: StringJS): void
public "getOldFormatSupport"(): $OldFormatSupport
public "setRegionDetectionComplete"(arg0: boolean): void
get "toSave"(): $ArrayList<($MapRegion)>
get "nextToLoadByViewing"(): $LeveledRegion<(any)>
set "nextToLoadByViewing"(value: $LeveledRegion$$Type<(any)>)
set "mapProcessor"(value: $MapProcessor$$Type)
get "sizeOfToLoad"(): integer
get "regionDetectionComplete"(): boolean
get "sizeOfToLoadBranchCache"(): integer
get "oldFormatSupport"(): $OldFormatSupport
set "regionDetectionComplete"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapSaveLoad$$Type = ($MapSaveLoad);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapSaveLoad_ = $MapSaveLoad$$Type;
}}
declare module "xaero.map.region.texture.BranchTextureRenderer" {
import {$RenderTarget, $RenderTarget$$Type} from "com.mojang.blaze3d.pipeline.RenderTarget"

export class $BranchTextureRenderer {

constructor()

public "render"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: $RenderTarget$$Type, arg6: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BranchTextureRenderer$$Type = ($BranchTextureRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BranchTextureRenderer_ = $BranchTextureRenderer$$Type;
}}
declare module "xaero.map.file.MapRegionInfo" {
import {$File, $File$$Type} from "java.io.File"

export interface $MapRegionInfo {

 "getRegionX"(): integer
 "getRegionZ"(): integer
 "shouldCache"(): boolean
 "getDimId"(): StringJS
 "setShouldCache"(arg0: boolean, arg1: StringJS): void
 "getCacheFile"(): $File
 "setCacheFile"(arg0: $File$$Type): void
 "getRegionFile"(): $File
 "getWorldId"(): StringJS
 "getMwId"(): StringJS
 "hasLookedForCache"(): boolean
get "regionX"(): integer
get "regionZ"(): integer
get "dimId"(): StringJS
get "cacheFile"(): $File
set "cacheFile"(value: $File$$Type)
get "regionFile"(): $File
get "worldId"(): StringJS
get "mwId"(): StringJS
}

export namespace $MapRegionInfo {
const probejs$$marker: never
}
export class $MapRegionInfo$$Static implements $MapRegionInfo {


 "getRegionX"(): integer
 "getRegionZ"(): integer
 "shouldCache"(): boolean
 "getDimId"(): StringJS
 "setShouldCache"(arg0: boolean, arg1: StringJS): void
 "getCacheFile"(): $File
 "setCacheFile"(arg0: $File$$Type): void
 "getRegionFile"(): $File
 "getWorldId"(): StringJS
 "getMwId"(): StringJS
 "hasLookedForCache"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapRegionInfo$$Type = ($MapRegionInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapRegionInfo_ = $MapRegionInfo$$Type;
}}
declare module "xaero.map.core.IWorldMapMinecraftClient" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IWorldMapMinecraftClient {

 "getXaeroWorldMap_fps"(): integer

(): integer
get "xaeroWorldMap_fps"(): integer
}

export namespace $IWorldMapMinecraftClient {
const probejs$$marker: never
}
export class $IWorldMapMinecraftClient$$Static implements $IWorldMapMinecraftClient {


 "getXaeroWorldMap_fps"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldMapMinecraftClient$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWorldMapMinecraftClient_ = $IWorldMapMinecraftClient$$Type;
}}
declare module "xaero.map.effects.NoWorldMapEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$WorldMapStatusEffect, $WorldMapStatusEffect$$Type} from "xaero.map.effects.WorldMapStatusEffect"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $NoWorldMapEffect extends $WorldMapStatusEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoWorldMapEffect$$Type = ($NoWorldMapEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoWorldMapEffect_ = $NoWorldMapEffect$$Type;
}}
declare module "xaero.map.MapWriter" {
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$MapRegion, $MapRegion$$Type} from "xaero.map.region.MapRegion"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$$Type} from "net.minecraft.core.BlockPos$MutableBlockPos"
import {$MapTileChunk, $MapTileChunk$$Type} from "xaero.map.region.MapTileChunk"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockTintProvider, $BlockTintProvider$$Type} from "xaero.map.biome.BlockTintProvider"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$$Type} from "xaero.map.cache.BlockStateShortShapeCache"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$BiomeColorCalculator, $BiomeColorCalculator$$Type} from "xaero.map.biome.BiomeColorCalculator"
import {$LevelChunk, $LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$StateHolder, $StateHolder$$Type} from "net.minecraft.world.level.block.state.StateHolder"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BiomeGetter, $BiomeGetter$$Type} from "xaero.map.biome.BiomeGetter"
import {$MapBlock, $MapBlock$$Type} from "xaero.map.region.MapBlock"
import {$OverlayManager, $OverlayManager$$Type} from "xaero.map.region.OverlayManager"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MapWriter {
static readonly "DEFAULT_RESOURCE": (StringJS)[]
static readonly "NO_Y_VALUE": integer
static readonly "MAX_TRANSPARENCY_BLEND_DEPTH": integer
 "writeFreeSinceLastWrite": long

constructor(arg0: $OverlayManager$$Type, arg1: $BlockStateShortShapeCache$$Type, arg2: $BiomeGetter$$Type)

public "resetPosition"(): void
public "writeMap"(arg0: $Level$$Type, arg1: $Registry$$Type<($Block$$Type)>, arg2: double, arg3: double, arg4: double, arg5: $Registry$$Type<($Biome$$Type)>, arg6: $BiomeColorCalculator$$Type, arg7: $OverlayManager$$Type, arg8: boolean, arg9: boolean, arg10: boolean, arg11: boolean, arg12: boolean, arg13: $BlockPos$MutableBlockPos$$Type, arg14: $BlockTintProvider$$Type, arg15: integer): boolean
public "isGlowing"(arg0: $BlockState$$Type): boolean
public "onRender"(arg0: $BiomeColorCalculator$$Type, arg1: $OverlayManager$$Type): void
public "isInvisible"(arg0: $BlockState$$Type, arg1: $Block$$Type, arg2: boolean): boolean
public "writeChunk"(arg0: $Level$$Type, arg1: $Registry$$Type<($Block$$Type)>, arg2: integer, arg3: boolean, arg4: $Registry$$Type<($Biome$$Type)>, arg5: $OverlayManager$$Type, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean, arg10: boolean, arg11: $BlockPos$MutableBlockPos$$Type, arg12: $BlockTintProvider$$Type, arg13: integer, arg14: integer, arg15: integer, arg16: integer, arg17: integer, arg18: integer, arg19: integer, arg20: integer, arg21: integer): boolean
public "loadPixel"(arg0: $Level$$Type, arg1: $Registry$$Type<($Block$$Type)>, arg2: $MapBlock$$Type, arg3: $MapBlock$$Type, arg4: $LevelChunk$$Type, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: boolean, arg10: boolean, arg11: integer, arg12: boolean, arg13: boolean, arg14: $Registry$$Type<($Biome$$Type)>, arg15: boolean, arg16: integer, arg17: $BlockPos$MutableBlockPos$$Type): void
public "shouldOverlay"(arg0: $StateHolder$$Type<(any), (any)>): boolean
public "getSectionBasedHeight"(arg0: $LevelChunk$$Type, arg1: integer): integer
public "updateBottomRightTile"(arg0: $MapRegion$$Type, arg1: $MapTileChunk$$Type, arg2: $MapTileChunk$$Type, arg3: integer, arg4: integer): void
public "hasVanillaColor"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $Registry$$Type<($Block$$Type)>, arg3: $BlockPos$$Type): boolean
public "getUpdateCounter"(): long
public "setMapProcessor"(arg0: $MapProcessor$$Type): void
public "getBlockTintIndex"(arg0: $BlockState$$Type): integer
public "loadBlockColourFromTexture"(arg0: $BlockState$$Type, arg1: boolean, arg2: $Level$$Type, arg3: $Registry$$Type<($Block$$Type)>, arg4: $BlockPos$$Type): integer
public "requestCachedColoursClear"(): void
public "setDirtyInWriteDistance"(arg0: $Player$$Type, arg1: $Level$$Type): void
get "updateCounter"(): long
set "mapProcessor"(value: $MapProcessor$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapWriter$$Type = ($MapWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapWriter_ = $MapWriter$$Type;
}}
declare module "xaero.map.gui.message.render.MessageBoxRenderer" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$MessageBox, $MessageBox$$Type} from "xaero.map.gui.message.MessageBox"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"

export class $MessageBoxRenderer {

constructor()

public "render"(arg0: $GuiGraphics$$Type, arg1: $MessageBox$$Type, arg2: $Font$$Type, arg3: integer, arg4: integer, arg5: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageBoxRenderer$$Type = ($MessageBoxRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageBoxRenderer_ = $MessageBoxRenderer$$Type;
}}
declare module "xaero.map.core.IWorldMapClientPlayNetHandler" {
import {$WorldMapSession, $WorldMapSession$$Type} from "xaero.map.WorldMapSession"

export interface $IWorldMapClientPlayNetHandler {

 "getXaero_worldmapSession"(): $WorldMapSession
 "setXaero_worldmapSession"(arg0: $WorldMapSession$$Type): void
get "xaero_worldmapSession"(): $WorldMapSession
set "xaero_worldmapSession"(value: $WorldMapSession$$Type)
}

export namespace $IWorldMapClientPlayNetHandler {
const probejs$$marker: never
}
export class $IWorldMapClientPlayNetHandler$$Static implements $IWorldMapClientPlayNetHandler {


 "getXaero_worldmapSession"(): $WorldMapSession
 "setXaero_worldmapSession"(arg0: $WorldMapSession$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldMapClientPlayNetHandler$$Type = ($IWorldMapClientPlayNetHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWorldMapClientPlayNetHandler_ = $IWorldMapClientPlayNetHandler$$Type;
}}
declare module "xaero.map.region.MapTileChunk" {
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$LeveledRegion, $LeveledRegion$$Type} from "xaero.map.region.LeveledRegion"
import {$MapRegion, $MapRegion$$Type} from "xaero.map.region.MapRegion"
import {$DataInputStream, $DataInputStream$$Type} from "java.io.DataInputStream"
import {$MapTile, $MapTile$$Type} from "xaero.map.region.MapTile"
import {$DataOutputStream, $DataOutputStream$$Type} from "java.io.DataOutputStream"
import {$BlockTintProvider, $BlockTintProvider$$Type} from "xaero.map.biome.BlockTintProvider"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$$Type} from "xaero.map.cache.BlockStateShortShapeCache"
import {$LeafRegionTexture, $LeafRegionTexture$$Type} from "xaero.map.region.texture.LeafRegionTexture"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$OverlayManager, $OverlayManager$$Type} from "xaero.map.region.OverlayManager"

export class $MapTileChunk {
static readonly "SIDE_LENGTH": integer

constructor(arg0: $MapRegion$$Type, arg1: integer, arg2: integer)

public "getTile"(arg0: integer, arg1: integer): $MapTile
public "toString"(): StringJS
public "clean"(arg0: $MapProcessor$$Type): void
public "getX"(): integer
public "getZ"(): integer
public "setChanged"(arg0: boolean): void
public "getLoadState"(): integer
public "getTimer"(): integer
public "setLoadState"(arg0: byte): void
public "getLeafTexture"(): $LeafRegionTexture
public "setTile"(arg0: integer, arg1: integer, arg2: $MapTile$$Type, arg3: $BlockStateShortShapeCache$$Type): void
public "includeInSave"(): boolean
public "updateBuffers"(arg0: $MapProcessor$$Type, arg1: $BlockTintProvider$$Type, arg2: $OverlayManager$$Type, arg3: boolean, arg4: $BlockStateShortShapeCache$$Type): void
public "wasChanged"(): boolean
public "hasHadTerrain"(): boolean
public "readCacheData"(arg0: integer, arg1: integer, arg2: $DataInputStream$$Type, arg3: (byte)[], arg4: (byte)[], arg5: $MapProcessor$$Type, arg6: integer, arg7: integer): void
public "getNeighbourTileChunk"(arg0: integer, arg1: integer, arg2: $MapProcessor$$Type, arg3: boolean): $MapTileChunk
public "setHasHadTerrain"(): void
public "setToUpdateBuffers"(arg0: boolean): void
public "unsetHasHadTerrain"(): void
public "hasHighlightsIfUndiscovered"(): boolean
public "putColour"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: $ByteBuffer$$Type, arg7: integer): void
public "resetHeights"(): void
public "decTimer"(): void
public "getInRegion"(): $MapRegion
public "hasHighlights"(): boolean
public "writeCacheData"(arg0: $DataOutputStream$$Type, arg1: (byte)[], arg2: (byte)[], arg3: $LeveledRegion$$Type<($LeafRegionTexture$$Type)>): void
public "getTileGridsCache"(): ((byte)[])[]
public "getToUpdateBuffers"(): boolean
public "unincludeInSave"(): void
public "setHasHighlights"(arg0: boolean): void
public "setHasHighlightsIfUndiscovered"(arg0: boolean): void
get "x"(): integer
get "z"(): integer
set "changed"(value: boolean)
get "loadState"(): integer
get "timer"(): integer
set "loadState"(value: byte)
get "leafTexture"(): $LeafRegionTexture
set "toUpdateBuffers"(value: boolean)
get "inRegion"(): $MapRegion
get "tileGridsCache"(): ((byte)[])[]
get "toUpdateBuffers"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapTileChunk$$Type = ($MapTileChunk);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapTileChunk_ = $MapTileChunk$$Type;
}}
declare module "xaero.map.gui.MapTileSelection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MapTileSelection {

constructor(arg0: integer, arg1: integer)

public "getLeft"(): integer
public "getRight"(): integer
public "getTop"(): integer
public "setEnd"(arg0: integer, arg1: integer): void
public "getStartZ"(): integer
public "getEndX"(): integer
public "getEndZ"(): integer
public "getStartX"(): integer
public "getBottom"(): integer
get "left"(): integer
get "right"(): integer
get "top"(): integer
get "startZ"(): integer
get "endX"(): integer
get "endZ"(): integer
get "startX"(): integer
get "bottom"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapTileSelection$$Type = ($MapTileSelection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapTileSelection_ = $MapTileSelection$$Type;
}}
declare module "xaero.map.world.MapConnectionNode" {
import {$MapWorld, $MapWorld$$Type} from "xaero.map.world.MapWorld"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $MapConnectionNode {

constructor(arg0: $ResourceKey$$Type<($Level)>, arg1: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "fromString"(arg0: StringJS): $MapConnectionNode
public "getDimId"(): $ResourceKey<($Level)>
public "getMw"(): StringJS
public "getNamedString"(arg0: $MapWorld$$Type): StringJS
get "dimId"(): $ResourceKey<($Level)>
get "mw"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapConnectionNode$$Type = ($MapConnectionNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapConnectionNode_ = $MapConnectionNode$$Type;
}}
declare module "xaero.map.pool.MapPool" {
import {$PoolUnit, $PoolUnit$$Type} from "xaero.map.pool.PoolUnit"

export class $MapPool<T extends $PoolUnit> {

constructor(arg0: integer)

public "size"(): integer
public "addToPool"(arg0: T): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapPool$$Type<T> = ($MapPool<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapPool_<T> = $MapPool$$Type<(T)>;
}}
declare module "xaero.map.MapLimiter" {
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$MapWorld, $MapWorld$$Type} from "xaero.map.world.MapWorld"

export class $MapLimiter {

constructor()

public "onSessionFinalized"(): void
public "applyLimit"(arg0: $MapWorld$$Type, arg1: $MapProcessor$$Type): void
public "getAvailableVRAM"(): integer
public "getMostRegionsAtATime"(): integer
public "setMostRegionsAtATime"(arg0: integer): void
public "updateAvailableVRAM"(): void
get "availableVRAM"(): integer
get "mostRegionsAtATime"(): integer
set "mostRegionsAtATime"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapLimiter$$Type = ($MapLimiter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapLimiter_ = $MapLimiter$$Type;
}}
declare module "xaero.map.highlight.AbstractHighlighter" {
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $AbstractHighlighter {


public "getBlockHighlightSubtleTooltip"(arg0: $ResourceKey$$Type<($Level)>, arg1: integer, arg2: integer): $Component
public "getBlockHighlightBluntTooltip"(arg0: $ResourceKey$$Type<($Level)>, arg1: integer, arg2: integer): $Component
public "chunkIsHighlit"(arg0: $ResourceKey$$Type<($Level)>, arg1: integer, arg2: integer): boolean
public "regionHasHighlights"(arg0: $ResourceKey$$Type<($Level)>, arg1: integer, arg2: integer): boolean
public "getChunkHighlitColor"(arg0: $ResourceKey$$Type<($Level)>, arg1: integer, arg2: integer): (integer)[]
public "calculateRegionHash"(arg0: $ResourceKey$$Type<($Level)>, arg1: integer, arg2: integer): integer
public "addMinimapBlockHighlightTooltips"(arg0: $List$$Type<($Component$$Type)>, arg1: $ResourceKey$$Type<($Level)>, arg2: integer, arg3: integer, arg4: integer): void
public "isCoveringOutsideDiscovered"(): boolean
get "coveringOutsideDiscovered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractHighlighter$$Type = ($AbstractHighlighter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractHighlighter_ = $AbstractHighlighter$$Type;
}}
declare module "xaero.map.message.basic.ClientboundRulesPacket" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$WorldMapMessage, $WorldMapMessage$$Type} from "xaero.map.message.WorldMapMessage"

export class $ClientboundRulesPacket extends $WorldMapMessage<($ClientboundRulesPacket)> {
readonly "allowCaveModeOnServer": boolean
readonly "allowNetherCaveModeOnServer": boolean
static "MAIN_CHANNEL": $ResourceLocation

constructor(arg0: boolean, arg1: boolean)

public "write"(arg0: $FriendlyByteBuf$$Type): void
public static "read"(arg0: $FriendlyByteBuf$$Type): $ClientboundRulesPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundRulesPacket$$Type = ($ClientboundRulesPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientboundRulesPacket_ = $ClientboundRulesPacket$$Type;
}}
declare module "xaero.map.biome.BiomeGetter" {
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BiomeGetter {
readonly "UNKNOWN_BIOME": $ResourceKey<($Biome)>
readonly "PLACEHOLDER_BIOME": $ResourceKey<($Biome)>

constructor()

public "getBiome"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Registry$$Type<($Biome$$Type)>): $ResourceKey<($Biome)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeGetter$$Type = ($BiomeGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeGetter_ = $BiomeGetter$$Type;
}}
declare module "xaero.map.palette.FastPalette" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FastPalette<T> {


public "getIndex"(arg0: T): integer
public "getSize"(): integer
public "remove"(arg0: integer): void
public "get"(arg0: integer): T
public "append"(arg0: T, arg1: integer): integer
public "replace"(arg0: integer, arg1: T): boolean
public "replace"(arg0: T, arg1: T): boolean
public "add"(arg0: T): integer
public "add"(arg0: T, arg1: integer): integer
public "count"(arg0: integer, arg1: boolean): integer
public "getCount"(arg0: integer): integer
public "addNull"(): void
public "getNonNullCount"(): integer
get "size"(): integer
get "nonNullCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastPalette$$Type<T> = ($FastPalette<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FastPalette_<T> = $FastPalette$$Type<(T)>;
}}
declare module "xaero.map.biome.BiomeColorCalculator" {
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$$Type} from "net.minecraft.core.BlockPos$MutableBlockPos"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$MapTile, $MapTile$$Type} from "xaero.map.region.MapTile"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ColorResolver, $ColorResolver$$Type} from "net.minecraft.world.level.ColorResolver"

export class $BiomeColorCalculator {
readonly "UNREACHABLE_BIOME": $ResourceKey<($Biome)>
readonly "RIVER_BIOME": $ResourceKey<($Biome)>

constructor()

public "prepare"(arg0: boolean): void
public "getBiomeColor"(arg0: $ColorResolver$$Type, arg1: boolean, arg2: $BlockPos$MutableBlockPos$$Type, arg3: $MapTile$$Type, arg4: integer, arg5: $Registry$$Type<($Biome$$Type)>, arg6: $MapProcessor$$Type): integer
public "getBiomeAtPos"(arg0: $BlockPos$$Type, arg1: $MapTile$$Type, arg2: integer, arg3: $MapProcessor$$Type): $ResourceKey<($Biome)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeColorCalculator$$Type = ($BiomeColorCalculator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeColorCalculator_ = $BiomeColorCalculator$$Type;
}}
declare module "xaero.map.pool.PoolUnit" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PoolUnit {

 "create"(...arg0: (any)[]): void

(...arg0: (any)[]): void
}

export namespace $PoolUnit {
const probejs$$marker: never
}
export class $PoolUnit$$Static implements $PoolUnit {


 "create"(...arg0: (any)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoolUnit$$Type = ((arg0: (any)[]) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoolUnit_ = $PoolUnit$$Type;
}}
declare module "xaero.map.region.BranchLeveledRegion" {
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$LeveledRegion, $LeveledRegion$$Type} from "xaero.map.region.LeveledRegion"
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$MapDimension, $MapDimension$$Type} from "xaero.map.world.MapDimension"
import {$File, $File$$Type} from "java.io.File"
import {$MapSaveLoad, $MapSaveLoad$$Type} from "xaero.map.file.MapSaveLoad"
import {$List, $List$$Type} from "java.util.List"
import {$RegionTexture, $RegionTexture$$Type} from "xaero.map.region.texture.RegionTexture"
import {$BranchRegionTexture, $BranchRegionTexture$$Type} from "xaero.map.region.texture.BranchRegionTexture"

export class $BranchLeveledRegion extends $LeveledRegion<($BranchRegionTexture)> {
 "activeBranchUpdateReferences": integer
static readonly "CHILD_LENGTH_IN_TEXTURES": integer
 "leafTextureVersionSum": ((integer)[])[]
static readonly "SIDE_LENGTH": integer
static readonly "MAX_COORD_WITHIN_CHILD": integer

constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: $MapDimension$$Type, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: $BranchLeveledRegion$$Type)

public "isLoaded"(): boolean
public "isEmpty"(): boolean
public "getTexture"(arg0: integer, arg1: integer): $RegionTexture<(any)>
public "createTexture"(arg0: integer, arg1: integer): $BranchRegionTexture
public "setLoaded"(arg0: boolean): void
public "checkForUpdates"(arg0: $MapProcessor$$Type, arg1: boolean, arg2: (boolean)[], arg3: $ArrayList$$Type<($BranchLeveledRegion$$Type)>, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "addDebugLines"(arg0: $List$$Type<(StringJS)>, arg1: $MapProcessor$$Type, arg2: integer, arg3: integer): void
public "putTexture"(arg0: integer, arg1: integer, arg2: $BranchRegionTexture$$Type): void
public "putTexture"(arg0: integer, arg1: integer, arg2: $RegionTexture$$Type<(any)>): void
public "preCache"(): void
public "postCache"(arg0: $File$$Type, arg1: $MapSaveLoad$$Type, arg2: boolean): void
public "skipCaching"(arg0: $MapProcessor$$Type): boolean
public "findCacheFile"(arg0: $MapSaveLoad$$Type): $File
public "preCacheLoad"(): void
public "hasTextures"(): boolean
public "setShouldCheckForUpdatesRecursive"(arg0: boolean): void
public "loadingAnimation"(): boolean
public "shouldBeProcessed"(): boolean
public "onProcessingEnd"(): void
public "onCurrentDimFinish"(arg0: $MapSaveLoad$$Type, arg1: $MapProcessor$$Type): void
public "onLimiterRemoval"(arg0: $MapProcessor$$Type): void
public "afterLimiterRemoval"(arg0: $MapProcessor$$Type): void
public "cleanAndCacheRequestsBlocked"(): boolean
public "shouldEndProcessingAfterUpload"(): boolean
public "eligibleForSaving"(arg0: long): boolean
public "postTextureUpdate"(): void
public "startDownloadingTexturesForCache"(arg0: $MapProcessor$$Type): void
public "setShouldCheckForUpdatesSingle"(arg0: boolean): void
get "loaded"(): boolean
get "empty"(): boolean
set "loaded"(value: boolean)
set "shouldCheckForUpdatesRecursive"(value: boolean)
set "shouldCheckForUpdatesSingle"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BranchLeveledRegion$$Type = ($BranchLeveledRegion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BranchLeveledRegion_ = $BranchLeveledRegion$$Type;
}}
declare module "xaero.map.highlight.DimensionHighlighterHandler" {
import {$MapDimension, $MapDimension$$Type} from "xaero.map.world.MapDimension"
import {$PoolTextureDirectBufferUnit, $PoolTextureDirectBufferUnit$$Type} from "xaero.map.pool.buffer.PoolTextureDirectBufferUnit"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$HighlighterRegistry, $HighlighterRegistry$$Type} from "xaero.map.highlight.HighlighterRegistry"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $DimensionHighlighterHandler {

constructor(arg0: $MapDimension$$Type, arg1: $ResourceKey$$Type<($Level)>, arg2: $HighlighterRegistry$$Type)

public static "getKey"(arg0: integer, arg1: integer): long
public "getRegionHash"(arg0: integer, arg1: integer): integer
public "clearCachedHashes"(): void
public "shouldApplyRegionHighlights"(arg0: integer, arg1: integer, arg2: boolean): boolean
public "getBlockHighlightSubtleTooltip"(arg0: integer, arg1: integer, arg2: boolean): $Component
public "getBlockHighlightBluntTooltip"(arg0: integer, arg1: integer, arg2: boolean): $Component
public static "getXFromKey"(arg0: long): integer
public static "getZFromKey"(arg0: long): integer
public "clearCachedHash"(arg0: integer, arg1: integer): void
public "applyChunkHighlightColors"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $PoolTextureDirectBufferUnit$$Type, arg5: $PoolTextureDirectBufferUnit$$Type, arg6: boolean, arg7: boolean, arg8: boolean): $PoolTextureDirectBufferUnit
public "shouldApplyTileChunkHighlights"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionHighlighterHandler$$Type = ($DimensionHighlighterHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionHighlighterHandler_ = $DimensionHighlighterHandler$$Type;
}}
declare module "xaero.map.graphics.renderer.multitexture.MultiTextureRenderTypeRenderer" {
import {$BufferBuilder, $BufferBuilder$$Type} from "com.mojang.blaze3d.vertex.BufferBuilder"

export class $MultiTextureRenderTypeRenderer {


public "begin"(arg0: integer): $BufferBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiTextureRenderTypeRenderer$$Type = ($MultiTextureRenderTypeRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiTextureRenderTypeRenderer_ = $MultiTextureRenderTypeRenderer$$Type;
}}
declare module "xaero.map.server.radar.tracker.SyncedPlayerTracker" {
import {$MinecraftServerData, $MinecraftServerData$$Type} from "xaero.map.server.MinecraftServerData"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ServerPlayerData, $ServerPlayerData$$Type} from "xaero.map.server.player.ServerPlayerData"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $SyncedPlayerTracker {

constructor()

public "onTick"(arg0: $MinecraftServer$$Type, arg1: $ServerPlayer$$Type, arg2: $MinecraftServerData$$Type, arg3: $ServerPlayerData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedPlayerTracker$$Type = ($SyncedPlayerTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncedPlayerTracker_ = $SyncedPlayerTracker$$Type;
}}
declare module "xaero.map.region.texture.LeafRegionTexture" {
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$LeveledRegion, $LeveledRegion$$Type} from "xaero.map.region.LeveledRegion"
import {$MapTileChunk, $MapTileChunk$$Type} from "xaero.map.region.MapTileChunk"
import {$DataInputStream, $DataInputStream$$Type} from "java.io.DataInputStream"
import {$PoolTextureDirectBufferUnit, $PoolTextureDirectBufferUnit$$Type} from "xaero.map.pool.buffer.PoolTextureDirectBufferUnit"
import {$List, $List$$Type} from "java.util.List"
import {$RegionTexture, $RegionTexture$$Type} from "xaero.map.region.texture.RegionTexture"
import {$DataOutputStream, $DataOutputStream$$Type} from "java.io.DataOutputStream"
import {$BlockTintProvider, $BlockTintProvider$$Type} from "xaero.map.biome.BlockTintProvider"
import {$BlockStateShortShapeCache, $BlockStateShortShapeCache$$Type} from "xaero.map.cache.BlockStateShortShapeCache"
import {$OverlayManager, $OverlayManager$$Type} from "xaero.map.region.OverlayManager"

export class $LeafRegionTexture extends $RegionTexture<($LeafRegionTexture)> {
static readonly "PBO_PACK_LENGTH": integer
static readonly "PBO_UNPACK_LENGTH": integer

constructor(arg0: $MapTileChunk$$Type)

public "canUpload"(): boolean
public "addDebugLines"(arg0: $List$$Type<(StringJS)>): void
public "getTileChunk"(): $MapTileChunk
public "prepareBuffer"(): void
public "readCacheData"(arg0: integer, arg1: integer, arg2: $DataInputStream$$Type, arg3: (byte)[], arg4: (byte)[], arg5: $LeveledRegion$$Type<($LeafRegionTexture$$Type)>, arg6: $MapProcessor$$Type, arg7: integer, arg8: integer, arg9: boolean): void
public "shouldIncludeInCache"(): boolean
public "writeCacheMapData"(arg0: $DataOutputStream$$Type, arg1: (byte)[], arg2: (byte)[], arg3: $LeveledRegion$$Type<($LeafRegionTexture$$Type)>): void
public "deleteTexturesAndBuffers"(): void
public "resetHeights"(): void
public "isUploaded"(): boolean
public "hasSourceData"(): boolean
public "preUpload"(arg0: $MapProcessor$$Type, arg1: $BlockTintProvider$$Type, arg2: $OverlayManager$$Type, arg3: $LeveledRegion$$Type<($LeafRegionTexture$$Type)>, arg4: boolean, arg5: $BlockStateShortShapeCache$$Type): void
public "postUpload"(arg0: $MapProcessor$$Type, arg1: $LeveledRegion$$Type<($LeafRegionTexture$$Type)>, arg2: boolean): void
public "postBufferWrite"(arg0: $PoolTextureDirectBufferUnit$$Type): void
public "postBufferUpdate"(arg0: boolean): void
public "shouldHaveContentForBranchUpdate"(): boolean
public "requestHighlightOnlyUpload"(): void
public "shouldBeUsedForBranchUpdate"(arg0: integer): boolean
get "tileChunk"(): $MapTileChunk
get "uploaded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeafRegionTexture$$Type = ($LeafRegionTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LeafRegionTexture_ = $LeafRegionTexture$$Type;
}}
declare module "xaero.map.radar.tracker.synced.ClientSyncedTrackedPlayerManager" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$SyncedTrackedPlayer, $SyncedTrackedPlayer$$Type} from "xaero.map.server.radar.tracker.SyncedTrackedPlayer"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $ClientSyncedTrackedPlayerManager {

constructor()

public "remove"(arg0: $UUID$$Type): void
public "reset"(): void
public "update"(arg0: $UUID$$Type, arg1: double, arg2: double, arg3: double, arg4: $ResourceKey$$Type<($Level)>): void
public "getPlayers"(): $Iterable<($SyncedTrackedPlayer)>
get "players"(): $Iterable<($SyncedTrackedPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientSyncedTrackedPlayerManager$$Type = ($ClientSyncedTrackedPlayerManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientSyncedTrackedPlayerManager_ = $ClientSyncedTrackedPlayerManager$$Type;
}}
declare module "xaero.map.WorldMapSession" {
import {$LocalPlayer, $LocalPlayer$$Type} from "net.minecraft.client.player.LocalPlayer"
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$ControlsHandler, $ControlsHandler$$Type} from "xaero.map.controls.ControlsHandler"
import {$ClientPacketListener, $ClientPacketListener$$Type} from "net.minecraft.client.multiplayer.ClientPacketListener"

export class $WorldMapSession {

constructor()

public "cleanup"(): void
public "init"(arg0: $ClientPacketListener$$Type, arg1: long): void
public "isUsable"(): boolean
public static "getForPlayer"(arg0: $LocalPlayer$$Type): $WorldMapSession
public static "getCurrentSession"(): $WorldMapSession
public "getMapProcessor"(): $MapProcessor
public "getControlsHandler"(): $ControlsHandler
get "usable"(): boolean
get "mapProcessor"(): $MapProcessor
get "controlsHandler"(): $ControlsHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldMapSession$$Type = ($WorldMapSession);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldMapSession_ = $WorldMapSession$$Type;
}}
declare module "xaero.map.graphics.TextureUploader" {
import {$TextureUploadPool$BranchUpdate, $TextureUploadPool$BranchUpdate$$Type} from "xaero.map.pool.TextureUploadPool$BranchUpdate"
import {$TextureUpload, $TextureUpload$$Type} from "xaero.map.graphics.TextureUpload"
import {$BranchTextureRenderer, $BranchTextureRenderer$$Type} from "xaero.map.region.texture.BranchTextureRenderer"
import {$TextureUploadPool$Compressed, $TextureUploadPool$Compressed$$Type} from "xaero.map.pool.TextureUploadPool$Compressed"
import {$TextureUploadPool$SubsequentNormal, $TextureUploadPool$SubsequentNormal$$Type} from "xaero.map.pool.TextureUploadPool$SubsequentNormal"
import {$TextureUploadPool$Normal, $TextureUploadPool$Normal$$Type} from "xaero.map.pool.TextureUploadPool$Normal"
import {$TextureUploadBenchmark, $TextureUploadBenchmark$$Type} from "xaero.map.graphics.TextureUploadBenchmark"
import {$TextureUploadPool$BranchDownload, $TextureUploadPool$BranchDownload$$Type} from "xaero.map.pool.TextureUploadPool$BranchDownload"

export class $TextureUploader {
static readonly "BRANCHUPDATE_ALLOCATE": integer
static readonly "BRANCHDOWNLOAD": integer
static readonly "SUBSEQUENT_NORMAL": integer
static readonly "NORMALDOWNLOAD": integer
static readonly "COMPRESSED": integer
static readonly "BRANCHUPDATE": integer
static readonly "NORMAL": integer

constructor(arg0: $TextureUploadPool$Normal$$Type, arg1: $TextureUploadPool$Compressed$$Type, arg2: $TextureUploadPool$BranchUpdate$$Type, arg3: $TextureUploadPool$BranchUpdate$$Type, arg4: $TextureUploadPool$BranchDownload$$Type, arg5: $TextureUploadPool$SubsequentNormal$$Type, arg6: $TextureUploadBenchmark$$Type)

public "requestNormal"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: long, arg9: integer, arg10: integer): long
public "requestUpload"(arg0: $TextureUpload$$Type): long
public "uploadTextures"(): void
public "requestCompressed"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: long, arg9: integer): long
public "requestBranchUpdate"(arg0: boolean, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: long, arg10: integer, arg11: integer, arg12: integer, arg13: integer, arg14: integer, arg15: integer, arg16: $BranchTextureRenderer$$Type, arg17: integer, arg18: integer): long
public "requestBranchDownload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): long
public "requestSubsequentNormal"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: long, arg8: integer, arg9: integer, arg10: integer, arg11: integer): long
public "finishNewestRequestImmediately"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureUploader$$Type = ($TextureUploader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureUploader_ = $TextureUploader$$Type;
}}
declare module "xaero.map.effects.WorldMapStatusEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $WorldMapStatusEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>


public "getRegistryName"(): $ResourceLocation
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldMapStatusEffect$$Type = ($WorldMapStatusEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldMapStatusEffect_ = $WorldMapStatusEffect$$Type;
}}
declare module "xaero.map.file.RegionDetection" {
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$MapRegion, $MapRegion$$Type} from "xaero.map.region.MapRegion"
import {$MapRegionInfo, $MapRegionInfo$$Type} from "xaero.map.file.MapRegionInfo"
import {$ILinkedChainNode, $ILinkedChainNode$$Type} from "xaero.map.util.linked.ILinkedChainNode"
import {$File, $File$$Type} from "java.io.File"

export class $RegionDetection implements $MapRegionInfo, $ILinkedChainNode<($RegionDetection)> {

constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: integer, arg4: integer, arg5: $File$$Type, arg6: integer, arg7: boolean)

public "getNext"(): $RegionDetection
public "isDestroyed"(): boolean
public "setRemoved"(arg0: boolean): void
public "setPrevious"(arg0: $RegionDetection$$Type): void
public "setPrevious"(arg0: $ILinkedChainNode$$Type<(any)>): void
public "onDestroyed"(): void
public "isRemoved"(): boolean
public "getRegionX"(): integer
public "getRegionZ"(): integer
public "setNext"(arg0: $RegionDetection$$Type): void
public "setNext"(arg0: $ILinkedChainNode$$Type<(any)>): void
public "getPrevious"(): $ILinkedChainNode<(any)>
public "shouldCache"(): boolean
public "getDimId"(): StringJS
public "setShouldCache"(arg0: boolean, arg1: StringJS): void
public "getCacheFile"(): $File
public "setCacheFile"(arg0: $File$$Type): void
public "getRegionFile"(): $File
public "getWorldId"(): StringJS
public "getMwId"(): StringJS
public "isHasHadTerrain"(): boolean
public "hasLookedForCache"(): boolean
public "transferInfoFrom"(arg0: $MapRegion$$Type): void
public "getInitialVersion"(): integer
public "transferInfoTo"(arg0: $MapRegion$$Type): void
public "transferInfoPostAddTo"(arg0: $MapRegion$$Type, arg1: $MapProcessor$$Type): void
get "next"(): $RegionDetection
get "destroyed"(): boolean
set "removed"(value: boolean)
set "previous"(value: $RegionDetection$$Type)
set "previous"(value: $ILinkedChainNode$$Type<(any)>)
get "removed"(): boolean
get "regionX"(): integer
get "regionZ"(): integer
set "next"(value: $RegionDetection$$Type)
set "next"(value: $ILinkedChainNode$$Type<(any)>)
get "previous"(): $ILinkedChainNode<(any)>
get "dimId"(): StringJS
get "cacheFile"(): $File
set "cacheFile"(value: $File$$Type)
get "regionFile"(): $File
get "worldId"(): StringJS
get "mwId"(): StringJS
get "hasHadTerrain"(): boolean
get "initialVersion"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionDetection$$Type = ($RegionDetection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionDetection_ = $RegionDetection$$Type;
}}
declare module "xaero.map.effects.NoCaveMapsEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$WorldMapStatusEffect, $WorldMapStatusEffect$$Type} from "xaero.map.effects.WorldMapStatusEffect"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $NoCaveMapsEffect extends $WorldMapStatusEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoCaveMapsEffect$$Type = ($NoCaveMapsEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoCaveMapsEffect_ = $NoCaveMapsEffect$$Type;
}}
declare module "xaero.map.cache.BrokenBlockTintCache" {
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BrokenBlockTintCache {

constructor(arg0: $Set$$Type<($BlockState$$Type)>)

public "getSize"(): integer
public "isBroken"(arg0: $BlockState$$Type): boolean
public "setBroken"(arg0: $BlockState$$Type): void
get "size"(): integer
set "broken"(value: $BlockState$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrokenBlockTintCache$$Type = ($BrokenBlockTintCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrokenBlockTintCache_ = $BrokenBlockTintCache$$Type;
}}
declare module "xaero.map.gui.message.Message" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $Message {

constructor(arg0: $Component$$Type, arg1: long)

public "getText"(): $Component
public "getAdditionTime"(): long
get "text"(): $Component
get "additionTime"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Message$$Type = ($Message);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Message_ = $Message$$Type;
}}
declare module "xaero.map.file.OldFormatSupport" {
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ImmutableMap, $ImmutableMap$$Type} from "com.google.common.collect.ImmutableMap"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $OldFormatSupport {
 "cc2BiomeRenames": $ImmutableMap<(StringJS), (StringJS)>

constructor()

public "loadStates"(): void
public "getStateForId"(arg0: integer): $BlockState
public "fixBlock"(arg0: $CompoundTag$$Type, arg1: integer): void
public "fixBiome"(arg0: StringJS, arg1: integer): StringJS
public "fixBiome"(arg0: integer, arg1: integer): StringJS
public "fixBiome"(arg0: integer, arg1: integer, arg2: StringJS): StringJS
public "loadVanillaStates"(): void
public "loadModdedStates"(arg0: $MapProcessor$$Type, arg1: StringJS, arg2: StringJS, arg3: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OldFormatSupport$$Type = ($OldFormatSupport);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OldFormatSupport_ = $OldFormatSupport$$Type;
}}
declare module "xaero.map.file.worldsave.WorldDataHandler" {
import {$HolderLookup, $HolderLookup$$Type} from "net.minecraft.core.HolderLookup"
import {$MapProcessor, $MapProcessor$$Type} from "xaero.map.MapProcessor"
import {$MapRegion, $MapRegion$$Type} from "xaero.map.region.MapRegion"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$WorldDataReader, $WorldDataReader$$Type} from "xaero.map.file.worldsave.WorldDataReader"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$WorldDataHandler$Result, $WorldDataHandler$Result$$Type} from "xaero.map.file.worldsave.WorldDataHandler$Result"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Executor, $Executor$$Type} from "xaero.map.executor.Executor"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export class $WorldDataHandler {

constructor(arg0: $WorldDataReader$$Type, arg1: $Executor$$Type)

public "getWorldDir"(): $Path
public static "onServerWorldUnload"(arg0: $ServerLevel$$Type): void
public "handleRenderExecutor"(): void
public "buildRegion"(arg0: $MapRegion$$Type, arg1: $HolderLookup$$Type<($Block$$Type)>, arg2: $Registry$$Type<($Block$$Type)>, arg3: $Registry$$Type<($Fluid$$Type)>, arg4: boolean, arg5: (integer)[]): $WorldDataHandler$Result
public "getWorldServer"(): $ServerLevel
public "prepareSingleplayer"(arg0: $Level$$Type, arg1: $MapProcessor$$Type): void
public "getWorldDataReader"(): $WorldDataReader
get "worldDir"(): $Path
get "worldServer"(): $ServerLevel
get "worldDataReader"(): $WorldDataReader
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldDataHandler$$Type = ($WorldDataHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldDataHandler_ = $WorldDataHandler$$Type;
}}
declare module "xaero.map.gui.message.MessageBox" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Message, $Message$$Type} from "xaero.map.gui.message.Message"

export class $MessageBox {


public "getCapacity"(): integer
public "getIterator"(): $Iterator<($Message)>
public "addMessage"(arg0: $Component$$Type): void
public "addMessageWithSource"(arg0: $Component$$Type, arg1: $Component$$Type): void
get "capacity"(): integer
get "iterator"(): $Iterator<($Message)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageBox$$Type = ($MessageBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageBox_ = $MessageBox$$Type;
}}
declare module "xaero.map.graphics.renderer.multitexture.MultiTextureRenderTypeRendererProvider" {
import {$IntConsumer, $IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$MultiTextureRenderTypeRenderer, $MultiTextureRenderTypeRenderer$$Type} from "xaero.map.graphics.renderer.multitexture.MultiTextureRenderTypeRenderer"

export class $MultiTextureRenderTypeRendererProvider {

constructor(arg0: integer)

public "draw"(arg0: $MultiTextureRenderTypeRenderer$$Type): void
public "getRenderer"(arg0: $IntConsumer$$Type, arg1: $IntConsumer$$Type, arg2: $Runnable$$Type, arg3: $RenderType$$Type): $MultiTextureRenderTypeRenderer
public "getRenderer"(arg0: $IntConsumer$$Type, arg1: $IntConsumer$$Type, arg2: $RenderType$$Type): $MultiTextureRenderTypeRenderer
public static "defaultTextureBind"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiTextureRenderTypeRendererProvider$$Type = ($MultiTextureRenderTypeRendererProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiTextureRenderTypeRendererProvider_ = $MultiTextureRenderTypeRendererProvider$$Type;
}}
declare module "xaero.map.server.radar.tracker.SyncedPlayerTrackerSystemManager" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ISyncedPlayerTrackerSystem, $ISyncedPlayerTrackerSystem$$Type} from "xaero.map.server.radar.tracker.ISyncedPlayerTrackerSystem"

export class $SyncedPlayerTrackerSystemManager {

constructor()

public "register"(arg0: StringJS, arg1: $ISyncedPlayerTrackerSystem$$Type): void
public "getSystems"(): $Iterable<($ISyncedPlayerTrackerSystem)>
get "systems"(): $Iterable<($ISyncedPlayerTrackerSystem)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedPlayerTrackerSystemManager$$Type = ($SyncedPlayerTrackerSystemManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncedPlayerTrackerSystemManager_ = $SyncedPlayerTrackerSystemManager$$Type;
}}
declare module "xaero.map.server.player.ServerPlayerData" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$SyncedTrackedPlayer, $SyncedTrackedPlayer$$Type} from "xaero.map.server.radar.tracker.SyncedTrackedPlayer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ServerPlayerData {

constructor(arg0: $UUID$$Type)

public static "get"(arg0: $ServerPlayer$$Type): $ServerPlayerData
public "setOpacData"(arg0: any): void
public "getOpacData"(): any
public "hasMod"(): boolean
public "getLastSyncedData"(): $SyncedTrackedPlayer
public "ensureLastSyncedData"(): $SyncedTrackedPlayer
public "getCurrentlySyncedPlayers"(): $Set<($UUID)>
public "ensureCurrentlySyncedPlayers"(): $Set<($UUID)>
public "getLastTrackedPlayerSync"(): long
public "setLastTrackedPlayerSync"(arg0: long): void
public "setClientModNetworkVersion"(arg0: integer): void
public "getClientModNetworkVersion"(): integer
set "opacData"(value: any)
get "opacData"(): any
get "lastSyncedData"(): $SyncedTrackedPlayer
get "currentlySyncedPlayers"(): $Set<($UUID)>
get "lastTrackedPlayerSync"(): long
set "lastTrackedPlayerSync"(value: long)
set "clientModNetworkVersion"(value: integer)
get "clientModNetworkVersion"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerData$$Type = ($ServerPlayerData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerData_ = $ServerPlayerData$$Type;
}}
