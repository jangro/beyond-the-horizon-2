declare module "com.ishland.flowsched.scheduler.KeyStatusPair" {
import {$ItemStatus, $ItemStatus$$Type} from "com.ishland.flowsched.scheduler.ItemStatus"

export class $KeyStatusPair<K, V, Ctx> {

constructor(key: K, status: $ItemStatus$$Type<(K), (V), (Ctx)>)

public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "key"(): K
public "status"(): $ItemStatus<(K), (V), (Ctx)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyStatusPair$$Type<K, V, Ctx> = ($KeyStatusPair<(K), (V), (Ctx)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyStatusPair_<K, V, Ctx> = $KeyStatusPair$$Type<(K), (V), (Ctx)>;
}}
declare module "com.ishland.c2me.rewrites.chunksystem.common.ducks.IChunkSystemAccess" {
import {$TheChunkSystem, $TheChunkSystem$$Type} from "com.ishland.c2me.rewrites.chunksystem.common.TheChunkSystem"

export interface $IChunkSystemAccess {

 "c2me$getTheChunkSystem"(): $TheChunkSystem

(): $TheChunkSystem$$Type
}

export namespace $IChunkSystemAccess {
const probejs$$marker: never
}
export class $IChunkSystemAccess$$Static implements $IChunkSystemAccess {


 "c2me$getTheChunkSystem"(): $TheChunkSystem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChunkSystemAccess$$Type = (() => $TheChunkSystem$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChunkSystemAccess_ = $IChunkSystemAccess$$Type;
}}
declare module "com.ishland.c2me.opts.scheduling.common.ITryFlushable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITryFlushable {

 "c2me$tryFlush"(): boolean

(): boolean
}

export namespace $ITryFlushable {
const probejs$$marker: never
}
export class $ITryFlushable$$Static implements $ITryFlushable {


 "c2me$tryFlush"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITryFlushable$$Type = (() => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITryFlushable_ = $ITryFlushable$$Type;
}}
declare module "com.ishland.flowsched.executor.Task" {
import {$LockToken, $LockToken$$Type} from "com.ishland.flowsched.executor.LockToken"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"

export interface $Task {

 "priority"(): integer
 "run"(arg0: $Runnable$$Type): void
 "lockTokens"(): ($LockToken)[]
 "propagateException"(arg0: $Throwable$$Type): void
}

export namespace $Task {
const probejs$$marker: never
}
export class $Task$$Static implements $Task {


 "priority"(): integer
 "run"(arg0: $Runnable$$Type): void
 "lockTokens"(): ($LockToken)[]
 "propagateException"(arg0: $Throwable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Task$$Type = ($Task);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Task_ = $Task$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IThreadedAnvilChunkStorage" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Long2ObjectLinkedOpenHashMap, $Long2ObjectLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectLinkedOpenHashMap"
import {$ChunkAccess, $ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$ThreadedLevelLightEngine, $ThreadedLevelLightEngine$$Type} from "net.minecraft.server.level.ThreadedLevelLightEngine"
import {$WorldGenContext, $WorldGenContext$$Type} from "net.minecraft.world.level.chunk.status.WorldGenContext"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$FullChunkStatus, $FullChunkStatus$$Type} from "net.minecraft.server.level.FullChunkStatus"
import {$Long2LongMap, $Long2LongMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2LongMap"
import {$ChunkHolder, $ChunkHolder$$Type} from "net.minecraft.server.level.ChunkHolder"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$BlockableEventLoop, $BlockableEventLoop$$Type} from "net.minecraft.util.thread.BlockableEventLoop"
import {$LevelChunk, $LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$AtomicInteger, $AtomicInteger$$Type} from "java.util.concurrent.atomic.AtomicInteger"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ChunkProgressListener, $ChunkProgressListener$$Type} from "net.minecraft.server.level.progress.ChunkProgressListener"
import {$PoiManager, $PoiManager$$Type} from "net.minecraft.world.entity.ai.village.poi.PoiManager"

export interface $IThreadedAnvilChunkStorage {

 "getGenerationContext"(): $WorldGenContext
 "getMainThreadExecutor"(): $BlockableEventLoop<($Runnable)>
 "getWorld"(): $ServerLevel
 "getWorldGenerationProgressListener"(): $ChunkProgressListener
 "getTotalChunksLoadedCount"(): $AtomicInteger
 "invokeOnChunkStatusChange"(arg0: $ChunkPos$$Type, arg1: $FullChunkStatus$$Type): void
 "getChunkToNextSaveTimeMs"(): $Long2LongMap
 "setChunkHolderListDirty"(arg0: boolean): void
 "invokeGetUpdatedChunkNbt"(arg0: $ChunkPos$$Type): $CompletableFuture<($Optional<($CompoundTag)>)>
 "getPointOfInterestStorage"(): $PoiManager
 "invokeSave"(arg0: $ChunkAccess$$Type): boolean
 "invokeUpdateHolderMap"(): boolean
 "getLightingProvider"(): $ThreadedLevelLightEngine
 "invokeSendToPlayers"(arg0: $LevelChunk$$Type): void
 "invokeGetChunkHolder"(arg0: long): $ChunkHolder
 "getCurrentChunkHolders"(): $Long2ObjectLinkedOpenHashMap<($ChunkHolder)>
get "generationContext"(): $WorldGenContext
get "mainThreadExecutor"(): $BlockableEventLoop<($Runnable)>
get "world"(): $ServerLevel
get "worldGenerationProgressListener"(): $ChunkProgressListener
get "totalChunksLoadedCount"(): $AtomicInteger
get "chunkToNextSaveTimeMs"(): $Long2LongMap
set "chunkHolderListDirty"(value: boolean)
get "pointOfInterestStorage"(): $PoiManager
get "lightingProvider"(): $ThreadedLevelLightEngine
get "currentChunkHolders"(): $Long2ObjectLinkedOpenHashMap<($ChunkHolder)>
}

export namespace $IThreadedAnvilChunkStorage {
const probejs$$marker: never
}
export class $IThreadedAnvilChunkStorage$$Static implements $IThreadedAnvilChunkStorage {


 "getGenerationContext"(): $WorldGenContext
 "getMainThreadExecutor"(): $BlockableEventLoop<($Runnable)>
 "getWorld"(): $ServerLevel
 "getWorldGenerationProgressListener"(): $ChunkProgressListener
 "getTotalChunksLoadedCount"(): $AtomicInteger
 "invokeOnChunkStatusChange"(arg0: $ChunkPos$$Type, arg1: $FullChunkStatus$$Type): void
 "getChunkToNextSaveTimeMs"(): $Long2LongMap
 "setChunkHolderListDirty"(arg0: boolean): void
 "invokeGetUpdatedChunkNbt"(arg0: $ChunkPos$$Type): $CompletableFuture<($Optional<($CompoundTag)>)>
 "getPointOfInterestStorage"(): $PoiManager
 "invokeSave"(arg0: $ChunkAccess$$Type): boolean
 "invokeUpdateHolderMap"(): boolean
 "getLightingProvider"(): $ThreadedLevelLightEngine
 "invokeSendToPlayers"(arg0: $LevelChunk$$Type): void
 "invokeGetChunkHolder"(arg0: long): $ChunkHolder
 "getCurrentChunkHolders"(): $Long2ObjectLinkedOpenHashMap<($ChunkHolder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IThreadedAnvilChunkStorage$$Type = ($IThreadedAnvilChunkStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IThreadedAnvilChunkStorage_ = $IThreadedAnvilChunkStorage$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IChunkNoiseSampler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IChunkNoiseSampler {

 "getStartBlockX"(): integer
 "getStartBlockY"(): integer
 "getStartBlockZ"(): integer
 "getStartBiomeX"(): integer
 "getStartBiomeZ"(): integer
 "getCellBlockX"(): integer
 "getCellBlockY"(): integer
 "getCellBlockZ"(): integer
 "getIsSamplingForCaches"(): boolean
 "getHorizontalCellCount"(): integer
 "getVerticalCellCount"(): integer
 "getMinimumCellY"(): integer
 "getHorizontalCellBlockCount"(): integer
 "getVerticalCellBlockCount"(): integer
 "getIsInInterpolationLoop"(): boolean
get "startBlockX"(): integer
get "startBlockY"(): integer
get "startBlockZ"(): integer
get "startBiomeX"(): integer
get "startBiomeZ"(): integer
get "cellBlockX"(): integer
get "cellBlockY"(): integer
get "cellBlockZ"(): integer
get "isSamplingForCaches"(): boolean
get "horizontalCellCount"(): integer
get "verticalCellCount"(): integer
get "minimumCellY"(): integer
get "horizontalCellBlockCount"(): integer
get "verticalCellBlockCount"(): integer
get "isInInterpolationLoop"(): boolean
}

export namespace $IChunkNoiseSampler {
const probejs$$marker: never
}
export class $IChunkNoiseSampler$$Static implements $IChunkNoiseSampler {


 "getStartBlockX"(): integer
 "getStartBlockY"(): integer
 "getStartBlockZ"(): integer
 "getStartBiomeX"(): integer
 "getStartBiomeZ"(): integer
 "getCellBlockX"(): integer
 "getCellBlockY"(): integer
 "getCellBlockZ"(): integer
 "getIsSamplingForCaches"(): boolean
 "getHorizontalCellCount"(): integer
 "getVerticalCellCount"(): integer
 "getMinimumCellY"(): integer
 "getHorizontalCellBlockCount"(): integer
 "getVerticalCellBlockCount"(): integer
 "getIsInInterpolationLoop"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChunkNoiseSampler$$Type = ($IChunkNoiseSampler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChunkNoiseSampler_ = $IChunkNoiseSampler$$Type;
}}
declare module "com.ishland.c2me.rewrites.chunksystem.common.ChunkLoadingContext" {
import {$KeyStatusPair, $KeyStatusPair$$Type} from "com.ishland.flowsched.scheduler.KeyStatusPair"
import {$ChunkState, $ChunkState$$Type} from "com.ishland.c2me.rewrites.chunksystem.common.ChunkState"
import {$ItemHolder, $ItemHolder$$Type} from "com.ishland.flowsched.scheduler.ItemHolder"
import {$SchedulingManager, $SchedulingManager$$Type} from "com.ishland.c2me.base.common.scheduler.SchedulingManager"
import {$StaticCache2D, $StaticCache2D$$Type} from "net.minecraft.util.StaticCache2D"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$NewChunkHolderVanillaInterface, $NewChunkHolderVanillaInterface$$Type} from "com.ishland.c2me.rewrites.chunksystem.common.NewChunkHolderVanillaInterface"
import {$GenerationChunkHolder, $GenerationChunkHolder$$Type} from "net.minecraft.server.level.GenerationChunkHolder"
import {$ChunkMap, $ChunkMap$$Type} from "net.minecraft.server.level.ChunkMap"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ChunkLoadingContext extends $Record {

constructor(holder: $ItemHolder$$Type<($ChunkPos$$Type), ($ChunkState$$Type), ($ChunkLoadingContext$$Type), ($NewChunkHolderVanillaInterface$$Type)>, tacs: $ChunkMap$$Type, schedulingManager: $SchedulingManager$$Type, chunks: $StaticCache2D$$Type<($GenerationChunkHolder$$Type)>, dependencies: ($KeyStatusPair$$Type<($ChunkPos$$Type), ($ChunkState$$Type), ($ChunkLoadingContext$$Type)>)[])

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "holder"(): $ItemHolder<($ChunkPos), ($ChunkState), ($ChunkLoadingContext), ($NewChunkHolderVanillaInterface)>
public "dependencies"(): ($KeyStatusPair<($ChunkPos), ($ChunkState), ($ChunkLoadingContext)>)[]
public "chunks"(): $StaticCache2D<($GenerationChunkHolder)>
public "tacs"(): $ChunkMap
public "schedulingManager"(): $SchedulingManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkLoadingContext$$Type = ({"chunks"?: $StaticCache2D$$Type<($GenerationChunkHolder$$Type)>, "tacs"?: $ChunkMap$$Type, "dependencies"?: ($KeyStatusPair$$Type<($ChunkPos$$Type), ($ChunkState$$Type), ($ChunkLoadingContext$$Type)>)[], "holder"?: $ItemHolder$$Type<($ChunkPos$$Type), ($ChunkState$$Type), ($ChunkLoadingContext$$Type), ($NewChunkHolderVanillaInterface$$Type)>, "schedulingManager"?: $SchedulingManager$$Type}) | ([chunks?: $StaticCache2D$$Type<($GenerationChunkHolder$$Type)>, tacs?: $ChunkMap$$Type, dependencies?: ($KeyStatusPair$$Type<($ChunkPos$$Type), ($ChunkState$$Type), ($ChunkLoadingContext$$Type)>)[], holder?: $ItemHolder$$Type<($ChunkPos$$Type), ($ChunkState$$Type), ($ChunkLoadingContext$$Type), ($NewChunkHolderVanillaInterface$$Type)>, schedulingManager?: $SchedulingManager$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkLoadingContext_ = $ChunkLoadingContext$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IInterpolatedNoiseSampler" {
import {$PerlinNoise, $PerlinNoise$$Type} from "net.minecraft.world.level.levelgen.synth.PerlinNoise"

export interface $IInterpolatedNoiseSampler {

 "getMaxValue"(): double
 "getLowerInterpolatedNoise"(): $PerlinNoise
 "getUpperInterpolatedNoise"(): $PerlinNoise
 "getSmearScaleMultiplier"(): double
 "getInterpolationNoise"(): $PerlinNoise
 "getScaledXzScale"(): double
 "getScaledYScale"(): double
 "getYScale"(): double
 "getXzFactor"(): double
 "getYFactor"(): double
 "getXzScale"(): double
get "maxValue"(): double
get "lowerInterpolatedNoise"(): $PerlinNoise
get "upperInterpolatedNoise"(): $PerlinNoise
get "smearScaleMultiplier"(): double
get "interpolationNoise"(): $PerlinNoise
get "scaledXzScale"(): double
get "scaledYScale"(): double
get "yScale"(): double
get "xzFactor"(): double
get "yFactor"(): double
get "xzScale"(): double
}

export namespace $IInterpolatedNoiseSampler {
const probejs$$marker: never
}
export class $IInterpolatedNoiseSampler$$Static implements $IInterpolatedNoiseSampler {


 "getMaxValue"(): double
 "getLowerInterpolatedNoise"(): $PerlinNoise
 "getUpperInterpolatedNoise"(): $PerlinNoise
 "getSmearScaleMultiplier"(): double
 "getInterpolationNoise"(): $PerlinNoise
 "getScaledXzScale"(): double
 "getScaledYScale"(): double
 "getYScale"(): double
 "getXzFactor"(): double
 "getYFactor"(): double
 "getXzScale"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInterpolatedNoiseSampler$$Type = ($IInterpolatedNoiseSampler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInterpolatedNoiseSampler_ = $IInterpolatedNoiseSampler$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IFlowableFluid" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IFlowableFluid {

 "invokeGetLevelDecreasePerBlock"(arg0: $LevelReader$$Type): integer
 "invokeIsMatchingAndStill"(arg0: $FluidState$$Type): boolean
 "invokeReceivesFlow"(arg0: $Direction$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockPos$$Type, arg5: $BlockState$$Type): boolean
}

export namespace $IFlowableFluid {
const probejs$$marker: never
}
export class $IFlowableFluid$$Static implements $IFlowableFluid {


 "invokeGetLevelDecreasePerBlock"(arg0: $LevelReader$$Type): integer
 "invokeIsMatchingAndStill"(arg0: $FluidState$$Type): boolean
 "invokeReceivesFlow"(arg0: $Direction$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockPos$$Type, arg5: $BlockState$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFlowableFluid$$Type = ($IFlowableFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFlowableFluid_ = $IFlowableFluid$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IUpgradeData" {
import {$Direction8, $Direction8$$Type} from "net.minecraft.core.Direction8"
import {$EnumSet, $EnumSet$$Type} from "java.util.EnumSet"

export interface $IUpgradeData {

 "getSidesToUpgrade"(): $EnumSet<($Direction8)>
 "getCenterIndicesToUpgrade"(): ((integer)[])[]
get "sidesToUpgrade"(): $EnumSet<($Direction8)>
get "centerIndicesToUpgrade"(): ((integer)[])[]
}

export namespace $IUpgradeData {
const probejs$$marker: never
}
export class $IUpgradeData$$Static implements $IUpgradeData {


 "getSidesToUpgrade"(): $EnumSet<($Direction8)>
 "getCenterIndicesToUpgrade"(): ((integer)[])[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeData$$Type = ($IUpgradeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeData_ = $IUpgradeData$$Type;
}}
declare module "com.ishland.c2me.rewrites.chunksystem.common.ChunkState" {
import {$ProtoChunk, $ProtoChunk$$Type} from "net.minecraft.world.level.chunk.ProtoChunk"
import {$ChunkAccess, $ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$ChunkStatus, $ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ChunkState extends $Record {

constructor(chunk: $ChunkAccess$$Type, protoChunk: $ProtoChunk$$Type, reachedStatus: $ChunkStatus$$Type)

public "chunk"(): $ChunkAccess
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "reachedStatus"(): $ChunkStatus
public "protoChunk"(): $ProtoChunk
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkState$$Type = ({"protoChunk"?: $ProtoChunk$$Type, "reachedStatus"?: $ChunkStatus$$Type, "chunk"?: $ChunkAccess$$Type}) | ([protoChunk?: $ProtoChunk$$Type, reachedStatus?: $ChunkStatus$$Type, chunk?: $ChunkAccess$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkState_ = $ChunkState$$Type;
}}
declare module "com.ishland.flowsched.scheduler.StatusAdvancingScheduler" {
import {$ItemStatus, $ItemStatus$$Type} from "com.ishland.flowsched.scheduler.ItemStatus"
import {$ItemTicket$TicketType, $ItemTicket$TicketType$$Type} from "com.ishland.flowsched.scheduler.ItemTicket$TicketType"
import {$ItemHolder, $ItemHolder$$Type} from "com.ishland.flowsched.scheduler.ItemHolder"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export class $StatusAdvancingScheduler<K, V, Ctx, UserData> {
static readonly "NO_OP": $Runnable


public "getHolder"(key: K): $ItemHolder<(K), (V), (Ctx), (UserData)>
public "addTicket"(key: K, targetStatus: $ItemStatus$$Type<(K), (V), (Ctx)>, callback: $Runnable$$Type): $ItemHolder<(K), (V), (Ctx), (UserData)>
public "addTicket"(key: K, source: any, targetStatus: $ItemStatus$$Type<(K), (V), (Ctx)>, callback: $Runnable$$Type): $ItemHolder<(K), (V), (Ctx), (UserData)>
public "addTicket"(key: K, type: $ItemTicket$TicketType$$Type, source: any, targetStatus: $ItemStatus$$Type<(K), (V), (Ctx)>, callback: $Runnable$$Type): $ItemHolder<(K), (V), (Ctx), (UserData)>
public "removeTicket"(key: K, type: $ItemTicket$TicketType$$Type, source: any, targetStatus: $ItemStatus$$Type<(K), (V), (Ctx)>): void
public "removeTicket"(key: K, targetStatus: $ItemStatus$$Type<(K), (V), (Ctx)>): void
public "itemCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatusAdvancingScheduler$$Type<K, V, Ctx, UserData> = ($StatusAdvancingScheduler<(K), (V), (Ctx), (UserData)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatusAdvancingScheduler_<K, V, Ctx, UserData> = $StatusAdvancingScheduler$$Type<(K), (V), (Ctx), (UserData)>;
}}
declare module "com.ishland.c2me.base.mixin.access.IBlender" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBlender {

}

export namespace $IBlender {
function getBLENDING_CHUNK_DISTANCE_THRESHOLD(): integer
const probejs$$marker: never
}
export class $IBlender$$Static implements $IBlender {


static "getBLENDING_CHUNK_DISTANCE_THRESHOLD"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlender$$Type = ($IBlender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlender_ = $IBlender$$Type;
}}
declare module "com.ishland.c2me.opts.scheduling.common.idle_tasks.IThreadedAnvilChunkStorage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IThreadedAnvilChunkStorage {

 "c2me$runOneChunkAutoSave"(): boolean

(): boolean
}

export namespace $IThreadedAnvilChunkStorage {
const probejs$$marker: never
}
export class $IThreadedAnvilChunkStorage$$Static implements $IThreadedAnvilChunkStorage {


 "c2me$runOneChunkAutoSave"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IThreadedAnvilChunkStorage$$Type = (() => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IThreadedAnvilChunkStorage_ = $IThreadedAnvilChunkStorage$$Type;
}}
declare module "com.ishland.c2me.rewrites.chunksystem.common.ducks.IPOIUnloading" {
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export interface $IPOIUnloading {

 "c2me$unloadPoi"(arg0: $ChunkPos$$Type): void
 "c2me$shouldUnloadPoi"(pos: $ChunkPos$$Type): boolean

(arg0: $ChunkPos): void
}

export namespace $IPOIUnloading {
const probejs$$marker: never
}
export class $IPOIUnloading$$Static implements $IPOIUnloading {


 "c2me$unloadPoi"(arg0: $ChunkPos$$Type): void
 "c2me$shouldUnloadPoi"(pos: $ChunkPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPOIUnloading$$Type = ((arg0: $ChunkPos) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPOIUnloading_ = $IPOIUnloading$$Type;
}}
declare module "com.ishland.c2me.rewrites.chunksystem.common.NewChunkStatus" {
import {$Cancellable, $Cancellable$$Type} from "com.ishland.flowsched.scheduler.Cancellable"
import {$KeyStatusPair, $KeyStatusPair$$Type} from "com.ishland.flowsched.scheduler.KeyStatusPair"
import {$ItemStatus, $ItemStatus$$Type} from "com.ishland.flowsched.scheduler.ItemStatus"
import {$ChunkLoadingContext, $ChunkLoadingContext$$Type} from "com.ishland.c2me.rewrites.chunksystem.common.ChunkLoadingContext"
import {$CompletionStage, $CompletionStage$$Type} from "java.util.concurrent.CompletionStage"
import {$ChunkState, $ChunkState$$Type} from "com.ishland.c2me.rewrites.chunksystem.common.ChunkState"
import {$ItemHolder, $ItemHolder$$Type} from "com.ishland.flowsched.scheduler.ItemHolder"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChunkStatus, $ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$FullChunkStatus, $FullChunkStatus$$Type} from "net.minecraft.server.level.FullChunkStatus"

export class $NewChunkStatus implements $ItemStatus<($ChunkPos), ($ChunkState), ($ChunkLoadingContext)> {
static readonly "NEW": $NewChunkStatus
static readonly "ENTITY_TICKING": $NewChunkStatus
static readonly "SERVER_ACCESSIBLE": $NewChunkStatus
static readonly "vanillaLevelToStatus": ($NewChunkStatus)[]
static readonly "ALL_STATUSES": ($NewChunkStatus)[]
static readonly "DEFERRED": $NewChunkStatus
static readonly "DISK": $NewChunkStatus
static readonly "SERVER_ACCESSIBLE_CHUNK_SENDING": $NewChunkStatus
static readonly "BLOCK_TICKING": $NewChunkStatus


public "ordinal"(): integer
public "getDependencies"(holder: $ItemHolder$$Type<($ChunkPos$$Type), ($ChunkState$$Type), ($ChunkLoadingContext$$Type), (any)>): ($KeyStatusPair<($ChunkPos), ($ChunkState), ($ChunkLoadingContext)>)[]
public "getEffectiveVanillaStatus"(): $ChunkStatus
public "getAllStatuses"(): ($ItemStatus<($ChunkPos), ($ChunkState), ($ChunkLoadingContext)>)[]
public "toVanillaLevel"(): integer
public "toChunkLevelType"(): $FullChunkStatus
public static "fromVanillaLevel"(level: integer): $NewChunkStatus
public static "fromVanillaStatus"(status: $ChunkStatus$$Type): $NewChunkStatus
public "getNext"(): $ItemStatus<($ChunkPos), ($ChunkState), ($ChunkLoadingContext)>
public "getPrev"(): $ItemStatus<($ChunkPos), ($ChunkState), ($ChunkLoadingContext)>
public "upgradeToThis"(arg0: $ChunkLoadingContext$$Type, arg1: $Cancellable$$Type): $CompletionStage<(void)>
public "downgradeFromThis"(arg0: $ChunkLoadingContext$$Type, arg1: $Cancellable$$Type): $CompletionStage<(void)>
public "getDependenciesToAdd"(holder: $ItemHolder$$Type<($ChunkPos$$Type), ($ChunkState$$Type), ($ChunkLoadingContext$$Type), (any)>): ($KeyStatusPair<($ChunkPos), ($ChunkState), ($ChunkLoadingContext)>)[]
public "getDependenciesToRemove"(holder: $ItemHolder$$Type<($ChunkPos$$Type), ($ChunkState$$Type), ($ChunkLoadingContext$$Type), (any)>): ($KeyStatusPair<($ChunkPos), ($ChunkState), ($ChunkLoadingContext)>)[]
get "effectiveVanillaStatus"(): $ChunkStatus
get "allStatuses"(): ($ItemStatus<($ChunkPos), ($ChunkState), ($ChunkLoadingContext)>)[]
get "next"(): $ItemStatus<($ChunkPos), ($ChunkState), ($ChunkLoadingContext)>
get "prev"(): $ItemStatus<($ChunkPos), ($ChunkState), ($ChunkLoadingContext)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NewChunkStatus$$Type = ($NewChunkStatus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NewChunkStatus_ = $NewChunkStatus$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IStructurePiece" {
import {$BoundingBox, $BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$StructurePieceType, $StructurePieceType$$Type} from "net.minecraft.world.level.levelgen.structure.pieces.StructurePieceType"

export interface $IStructurePiece {

 "getType"(): $StructurePieceType
 "getRotation"(): $Rotation
 "getBoundingBox"(): $BoundingBox
 "getMirror"(): $Mirror
 "getFacing"(): $Direction
 "getChainLength"(): integer
get "type"(): $StructurePieceType
get "rotation"(): $Rotation
get "boundingBox"(): $BoundingBox
get "mirror"(): $Mirror
get "facing"(): $Direction
get "chainLength"(): integer
}

export namespace $IStructurePiece {
const probejs$$marker: never
}
export class $IStructurePiece$$Static implements $IStructurePiece {


 "getType"(): $StructurePieceType
 "getRotation"(): $Rotation
 "getBoundingBox"(): $BoundingBox
 "getMirror"(): $Mirror
 "getFacing"(): $Direction
 "getChainLength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStructurePiece$$Type = ($IStructurePiece);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStructurePiece_ = $IStructurePiece$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IXoroshiro128PlusPlusRandom" {
import {$Xoroshiro128PlusPlus, $Xoroshiro128PlusPlus$$Type} from "net.minecraft.world.level.levelgen.Xoroshiro128PlusPlus"

export interface $IXoroshiro128PlusPlusRandom {

 "getImplementation"(): $Xoroshiro128PlusPlus

(): $Xoroshiro128PlusPlus$$Type
get "implementation"(): $Xoroshiro128PlusPlus
}

export namespace $IXoroshiro128PlusPlusRandom {
const probejs$$marker: never
}
export class $IXoroshiro128PlusPlusRandom$$Static implements $IXoroshiro128PlusPlusRandom {


 "getImplementation"(): $Xoroshiro128PlusPlus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IXoroshiro128PlusPlusRandom$$Type = (() => $Xoroshiro128PlusPlus$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IXoroshiro128PlusPlusRandom_ = $IXoroshiro128PlusPlusRandom$$Type;
}}
declare module "com.ishland.c2me.opts.scheduling.common.DuckChunkHolder" {
import {$LightLayer, $LightLayer$$Type} from "net.minecraft.world.level.LightLayer"

export interface $DuckChunkHolder {

 "c2me$undirtyLight"(): void
 "c2me$queueLightSectionDirty"(arg0: $LightLayer$$Type, arg1: integer): void
 "c2me$shouldScheduleUndirty"(): boolean
}

export namespace $DuckChunkHolder {
const probejs$$marker: never
}
export class $DuckChunkHolder$$Static implements $DuckChunkHolder {


 "c2me$undirtyLight"(): void
 "c2me$queueLightSectionDirty"(arg0: $LightLayer$$Type, arg1: integer): void
 "c2me$shouldScheduleUndirty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DuckChunkHolder$$Type = ($DuckChunkHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DuckChunkHolder_ = $DuckChunkHolder$$Type;
}}
declare module "com.ishland.c2me.rewrites.chunksystem.common.async_chunkio.ProtoChunkExtension" {
import {$BitSet, $BitSet$$Type} from "java.util.BitSet"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$List, $List$$Type} from "java.util.List"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export interface $ProtoChunkExtension {

 "setBlendingInfo"(arg0: $ChunkPos$$Type, arg1: $List$$Type<($BitSet$$Type)>): void
 "getNeedBlending"(): boolean
 "setBlendingComputeFuture"(arg0: $CompletableFuture$$Type<(void)>): void
 "setInitialMainThreadComputeFuture"(arg0: $CompletableFuture$$Type<(void)>): void
 "getInitialMainThreadComputeFuture"(): $CompletableFuture<(void)>
get "needBlending"(): boolean
set "blendingComputeFuture"(value: $CompletableFuture$$Type<(void)>)
set "initialMainThreadComputeFuture"(value: $CompletableFuture$$Type<(void)>)
get "initialMainThreadComputeFuture"(): $CompletableFuture<(void)>
}

export namespace $ProtoChunkExtension {
const probejs$$marker: never
}
export class $ProtoChunkExtension$$Static implements $ProtoChunkExtension {


 "setBlendingInfo"(arg0: $ChunkPos$$Type, arg1: $List$$Type<($BitSet$$Type)>): void
 "getNeedBlending"(): boolean
 "setBlendingComputeFuture"(arg0: $CompletableFuture$$Type<(void)>): void
 "setInitialMainThreadComputeFuture"(arg0: $CompletableFuture$$Type<(void)>): void
 "getInitialMainThreadComputeFuture"(): $CompletableFuture<(void)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProtoChunkExtension$$Type = ($ProtoChunkExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProtoChunkExtension_ = $ProtoChunkExtension$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IWorldChunk" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IWorldChunk {

 "isLoadedToWorld"(): boolean

(): boolean
get "loadedToWorld"(): boolean
}

export namespace $IWorldChunk {
const probejs$$marker: never
}
export class $IWorldChunk$$Static implements $IWorldChunk {


 "isLoadedToWorld"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWorldChunk$$Type = (() => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWorldChunk_ = $IWorldChunk$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IAquiferSamplerFluidLevel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAquiferSamplerFluidLevel {

}

export namespace $IAquiferSamplerFluidLevel {
const probejs$$marker: never
}
export class $IAquiferSamplerFluidLevel$$Static implements $IAquiferSamplerFluidLevel {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAquiferSamplerFluidLevel$$Type = ($IAquiferSamplerFluidLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAquiferSamplerFluidLevel_ = $IAquiferSamplerFluidLevel$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IChunkGenerator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IChunkGenerator {

}

export namespace $IChunkGenerator {
const probejs$$marker: never
}
export class $IChunkGenerator$$Static implements $IChunkGenerator {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChunkGenerator$$Type = ($IChunkGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChunkGenerator_ = $IChunkGenerator$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IOctavePerlinNoiseSampler" {
import {$DoubleList, $DoubleList$$Type} from "it.unimi.dsi.fastutil.doubles.DoubleList"
import {$ImprovedNoise, $ImprovedNoise$$Type} from "net.minecraft.world.level.levelgen.synth.ImprovedNoise"

export interface $IOctavePerlinNoiseSampler {

 "getAmplitudes"(): $DoubleList
 "getPersistence"(): double
 "getLacunarity"(): double
 "getOctaveSamplers"(): ($ImprovedNoise)[]
get "amplitudes"(): $DoubleList
get "persistence"(): double
get "lacunarity"(): double
get "octaveSamplers"(): ($ImprovedNoise)[]
}

export namespace $IOctavePerlinNoiseSampler {
const probejs$$marker: never
}
export class $IOctavePerlinNoiseSampler$$Static implements $IOctavePerlinNoiseSampler {


 "getAmplitudes"(): $DoubleList
 "getPersistence"(): double
 "getLacunarity"(): double
 "getOctaveSamplers"(): ($ImprovedNoise)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOctavePerlinNoiseSampler$$Type = ($IOctavePerlinNoiseSampler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOctavePerlinNoiseSampler_ = $IOctavePerlinNoiseSampler$$Type;
}}
declare module "com.ishland.c2me.notickvd.common.ChunkTicketManagerExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ChunkTicketManagerExtension {

 "c2me$closeNoTickVD"(): void
 "c2me$getPendingLoadsCount"(): long
}

export namespace $ChunkTicketManagerExtension {
const probejs$$marker: never
}
export class $ChunkTicketManagerExtension$$Static implements $ChunkTicketManagerExtension {


 "c2me$closeNoTickVD"(): void
 "c2me$getPendingLoadsCount"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTicketManagerExtension$$Type = ($ChunkTicketManagerExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkTicketManagerExtension_ = $ChunkTicketManagerExtension$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IChunkTickScheduler" {
import {$SerializableTickContainer, $SerializableTickContainer$$Type} from "net.minecraft.world.ticks.SerializableTickContainer"
import {$Queue, $Queue$$Type} from "java.util.Queue"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$List, $List$$Type} from "java.util.List"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$SavedTick, $SavedTick$$Type} from "net.minecraft.world.ticks.SavedTick"
import {$ScheduledTick, $ScheduledTick$$Type} from "net.minecraft.world.ticks.ScheduledTick"

export interface $IChunkTickScheduler<T> extends $SerializableTickContainer<(T)> {

 "getTicks"(): $List<($SavedTick<(T)>)>
 "getTickQueue"(): $Queue<($ScheduledTick<(T)>)>
 "save"(arg0: long, arg1: $Function$$Type<(T), (string)>): $Tag
get "ticks"(): $List<($SavedTick<(T)>)>
get "tickQueue"(): $Queue<($ScheduledTick<(T)>)>
}

export namespace $IChunkTickScheduler {
const probejs$$marker: never
}
export class $IChunkTickScheduler$$Static<T> implements $IChunkTickScheduler {


 "getTicks"(): $List<($SavedTick<(T)>)>
 "getTickQueue"(): $Queue<($ScheduledTick<(T)>)>
 "save"(arg0: long, arg1: $Function$$Type<(T), (string)>): $Tag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChunkTickScheduler$$Type<T> = ($IChunkTickScheduler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChunkTickScheduler_<T> = $IChunkTickScheduler$$Type<(T)>;
}}
declare module "com.ishland.c2me.base.mixin.access.IStorageIoWorker" {
import {$BitSet, $BitSet$$Type} from "java.util.BitSet"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"

export interface $IStorageIoWorker {

 "invokeGetOrComputeBlendingStatus"(arg0: integer, arg1: integer): $CompletableFuture<($BitSet)>

(arg0: integer, arg1: integer): $CompletableFuture$$Type<($BitSet$$Type)>
}

export namespace $IStorageIoWorker {
const probejs$$marker: never
}
export class $IStorageIoWorker$$Static implements $IStorageIoWorker {


 "invokeGetOrComputeBlendingStatus"(arg0: integer, arg1: integer): $CompletableFuture<($BitSet)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageIoWorker$$Type = ((arg0: integer, arg1: integer) => $CompletableFuture$$Type<($BitSet$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageIoWorker_ = $IStorageIoWorker$$Type;
}}
declare module "com.ishland.c2me.base.common.theinterface.IFastChunkHolder" {
import {$LevelChunk, $LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"

export interface $IFastChunkHolder {

 "c2me$immediateWorldChunk"(): $LevelChunk

(): $LevelChunk$$Type
}

export namespace $IFastChunkHolder {
const probejs$$marker: never
}
export class $IFastChunkHolder$$Static implements $IFastChunkHolder {


 "c2me$immediateWorldChunk"(): $LevelChunk
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFastChunkHolder$$Type = (() => $LevelChunk$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFastChunkHolder_ = $IFastChunkHolder$$Type;
}}
declare module "com.ishland.c2me.base.common.scheduler.ISyncLoadManager" {
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export interface $ISyncLoadManager {

 "getCurrentSyncLoad"(): $ChunkPos

(): $ChunkPos$$Type
get "currentSyncLoad"(): $ChunkPos
}

export namespace $ISyncLoadManager {
const probejs$$marker: never
}
export class $ISyncLoadManager$$Static implements $ISyncLoadManager {


 "getCurrentSyncLoad"(): $ChunkPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISyncLoadManager$$Type = (() => $ChunkPos$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISyncLoadManager_ = $ISyncLoadManager$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IBlendingData" {
import {$LevelHeightAccessor, $LevelHeightAccessor$$Type} from "net.minecraft.world.level.LevelHeightAccessor"

export interface $IBlendingData {

 "getOldHeightLimit"(): $LevelHeightAccessor
 "getSurfaceHeights"(): (double)[]
get "oldHeightLimit"(): $LevelHeightAccessor
get "surfaceHeights"(): (double)[]
}

export namespace $IBlendingData {
const probejs$$marker: never
}
export class $IBlendingData$$Static implements $IBlendingData {


 "getOldHeightLimit"(): $LevelHeightAccessor
 "getSurfaceHeights"(): (double)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlendingData$$Type = ($IBlendingData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlendingData_ = $IBlendingData$$Type;
}}
declare module "com.ishland.c2me.rewrites.chunksystem.common.NewChunkHolderVanillaInterface" {
import {$LevelLightEngine, $LevelLightEngine$$Type} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$LightLayer, $LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$LevelHeightAccessor, $LevelHeightAccessor$$Type} from "net.minecraft.world.level.LevelHeightAccessor"
import {$ChunkLoadingContext, $ChunkLoadingContext$$Type} from "com.ishland.c2me.rewrites.chunksystem.common.ChunkLoadingContext"
import {$ChunkResult, $ChunkResult$$Type} from "net.minecraft.server.level.ChunkResult"
import {$ChunkState, $ChunkState$$Type} from "com.ishland.c2me.rewrites.chunksystem.common.ChunkState"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$ItemHolder, $ItemHolder$$Type} from "com.ishland.flowsched.scheduler.ItemHolder"
import {$ImposterProtoChunk, $ImposterProtoChunk$$Type} from "net.minecraft.world.level.chunk.ImposterProtoChunk"
import {$TheChunkSystem, $TheChunkSystem$$Type} from "com.ishland.c2me.rewrites.chunksystem.common.TheChunkSystem"
import {$ChunkAccess, $ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$NewChunkStatus, $NewChunkStatus$$Type} from "com.ishland.c2me.rewrites.chunksystem.common.NewChunkStatus"
import {$IFastChunkHolder, $IFastChunkHolder$$Type} from "com.ishland.c2me.base.common.theinterface.IFastChunkHolder"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ChunkStatus, $ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$FullChunkStatus, $FullChunkStatus$$Type} from "net.minecraft.server.level.FullChunkStatus"
import {$ChunkMap, $ChunkMap$$Type} from "net.minecraft.server.level.ChunkMap"
import {$ChunkHolder, $ChunkHolder$$Type} from "net.minecraft.server.level.ChunkHolder"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$LevelChunk, $LevelChunk$$Type} from "net.minecraft.world.level.chunk.LevelChunk"
import {$ChunkHolder$PlayerProvider, $ChunkHolder$PlayerProvider$$Type} from "net.minecraft.server.level.ChunkHolder$PlayerProvider"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $NewChunkHolderVanillaInterface extends $ChunkHolder implements $IFastChunkHolder {
static readonly "UNLOADED_LEVEL_CHUNK_FUTURE": $CompletableFuture<($ChunkResult<($LevelChunk)>)>
 "currentlyLoading": $LevelChunk
static readonly "UNLOADED_CHUNK": $ChunkResult<($ChunkAccess)>
static readonly "UNLOADED_LEVEL_CHUNK": $ChunkResult<($LevelChunk)>
static readonly "UNLOADED_CHUNK_FUTURE": $CompletableFuture<($ChunkResult<($ChunkAccess)>)>

constructor(chunkSystem: $TheChunkSystem$$Type, newHolder: $ItemHolder$$Type<($ChunkPos$$Type), ($ChunkState$$Type), ($ChunkLoadingContext$$Type), ($NewChunkHolderVanillaInterface$$Type)>, world: $LevelHeightAccessor$$Type, lightingProvider: $LevelLightEngine$$Type, playersWatchingChunkProvider: $ChunkHolder$PlayerProvider$$Type)

public "getFullStatus"(): $FullChunkStatus
public "blockChanged"(pos: $BlockPos$$Type): void
public "getPos"(): $ChunkPos
public "broadcastChanges"(chunk: $LevelChunk$$Type): void
public "getPersistedStatus"(): $ChunkStatus
public "getLatestChunk"(): $ChunkAccess
public "getTicketLevel"(): integer
public "replaceProtoChunk"(chunk: $ImposterProtoChunk$$Type): void
public "getLatestStatus"(): $ChunkStatus
public "refreshAccessibility"(): void
public "wasAccessibleSinceLastSave"(): boolean
public "increaseGenerationRefCount"(): void
public "decreaseGenerationRefCount"(): void
public "getEntityTickingChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
public "getChunkToSend"(): $LevelChunk
public "getAllFutures"(): $List<($Pair<($ChunkStatus), ($CompletableFuture<($ChunkResult<($ChunkAccess)>)>)>)>
public "getQueueLevel"(): integer
public "setTicketLevel"(level: integer): void
public "getGenerationRefCount"(): integer
public "getChunkIfPresent"(requestedStatus: $ChunkStatus$$Type): $ChunkAccess
public "getTickingChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
public "getFullChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
public "sectionLightChanged"(lightType: $LightLayer$$Type, y: integer): void
public "addSendDependency"(postProcessingFuture: $CompletableFuture$$Type<(any)>): void
public "getSendSyncFuture"(): $CompletableFuture<(any)>
public "updateDeferredStatus"(status: $NewChunkStatus$$Type): void
public "getTickingChunk"(): $LevelChunk
public "triggerDeferredLoad"(requestedStatus: $NewChunkStatus$$Type): void
public "getSaveSyncFuture"(): $CompletableFuture<(any)>
public "isReadyForSaving"(): boolean
public "scheduleChunkGenerationTask"(requestedStatus: $ChunkStatus$$Type, chunkLoadingManager: $ChunkMap$$Type): $CompletableFuture<($ChunkResult<($ChunkAccess)>)>
public "getChunkIfPresentUnchecked"(requestedStatus: $ChunkStatus$$Type): $ChunkAccess
public "c2me$immediateWorldChunk"(): $LevelChunk
get "fullStatus"(): $FullChunkStatus
get "pos"(): $ChunkPos
get "persistedStatus"(): $ChunkStatus
get "latestChunk"(): $ChunkAccess
get "ticketLevel"(): integer
get "latestStatus"(): $ChunkStatus
get "entityTickingChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
get "chunkToSend"(): $LevelChunk
get "allFutures"(): $List<($Pair<($ChunkStatus), ($CompletableFuture<($ChunkResult<($ChunkAccess)>)>)>)>
get "queueLevel"(): integer
set "ticketLevel"(value: integer)
get "generationRefCount"(): integer
get "tickingChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
get "fullChunkFuture"(): $CompletableFuture<($ChunkResult<($LevelChunk)>)>
get "sendSyncFuture"(): $CompletableFuture<(any)>
get "tickingChunk"(): $LevelChunk
get "saveSyncFuture"(): $CompletableFuture<(any)>
get "readyForSaving"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NewChunkHolderVanillaInterface$$Type = ($NewChunkHolderVanillaInterface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NewChunkHolderVanillaInterface_ = $NewChunkHolderVanillaInterface$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IPerlinNoiseSampler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPerlinNoiseSampler {

 "getPermutation"(): (byte)[]

(): (byte)[]
get "permutation"(): (byte)[]
}

export namespace $IPerlinNoiseSampler {
const probejs$$marker: never
}
export class $IPerlinNoiseSampler$$Static implements $IPerlinNoiseSampler {


 "getPermutation"(): (byte)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPerlinNoiseSampler$$Type = (() => (byte)[]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPerlinNoiseSampler_ = $IPerlinNoiseSampler$$Type;
}}
declare module "com.ishland.c2me.notickvd.common.IRenderDistanceOverride" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IRenderDistanceOverride {

 "c2me_notickvd$setRenderDistance"(arg0: integer): void

(arg0: integer): void
}

export namespace $IRenderDistanceOverride {
const probejs$$marker: never
}
export class $IRenderDistanceOverride$$Static implements $IRenderDistanceOverride {


 "c2me_notickvd$setRenderDistance"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderDistanceOverride$$Type = ((arg0: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderDistanceOverride_ = $IRenderDistanceOverride$$Type;
}}
declare module "com.ishland.c2me.base.common.scheduler.IVanillaChunkManager" {
import {$SchedulingManager, $SchedulingManager$$Type} from "com.ishland.c2me.base.common.scheduler.SchedulingManager"

export interface $IVanillaChunkManager {

 "c2me$getSchedulingManager"(): $SchedulingManager

(): $SchedulingManager$$Type
}

export namespace $IVanillaChunkManager {
const probejs$$marker: never
}
export class $IVanillaChunkManager$$Static implements $IVanillaChunkManager {


 "c2me$getSchedulingManager"(): $SchedulingManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVanillaChunkManager$$Type = (() => $SchedulingManager$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVanillaChunkManager_ = $IVanillaChunkManager$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.ISyncedClientOptions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISyncedClientOptions {

 "setViewDistance"(arg0: integer): void

(arg0: integer): void
set "viewDistance"(value: integer)
}

export namespace $ISyncedClientOptions {
const probejs$$marker: never
}
export class $ISyncedClientOptions$$Static implements $ISyncedClientOptions {


 "setViewDistance"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISyncedClientOptions$$Type = ((arg0: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISyncedClientOptions_ = $ISyncedClientOptions$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IServerChunkManager" {
import {$DistanceManager, $DistanceManager$$Type} from "net.minecraft.server.level.DistanceManager"
import {$ServerChunkCache$MainThreadExecutor, $ServerChunkCache$MainThreadExecutor$$Type} from "net.minecraft.server.level.ServerChunkCache$MainThreadExecutor"

export interface $IServerChunkManager {

 "getMainThreadExecutor"(): $ServerChunkCache$MainThreadExecutor
 "getTicketManager"(): $DistanceManager
 "invokeUpdateChunks"(): boolean
get "mainThreadExecutor"(): $ServerChunkCache$MainThreadExecutor
get "ticketManager"(): $DistanceManager
}

export namespace $IServerChunkManager {
const probejs$$marker: never
}
export class $IServerChunkManager$$Static implements $IServerChunkManager {


 "getMainThreadExecutor"(): $ServerChunkCache$MainThreadExecutor
 "getTicketManager"(): $DistanceManager
 "invokeUpdateChunks"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerChunkManager$$Type = ($IServerChunkManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerChunkManager_ = $IServerChunkManager$$Type;
}}
declare module "com.ishland.c2me.base.common.scheduler.AbstractPosAwarePrioritizedTask" {
import {$LockToken, $LockToken$$Type} from "com.ishland.flowsched.executor.LockToken"
import {$Task, $Task$$Type} from "com.ishland.flowsched.executor.Task"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"

export class $AbstractPosAwarePrioritizedTask implements $Task {

constructor(pos: long)

public "priority"(): integer
public "setPriority"(priority: integer): void
public "getPos"(): long
public "addPostExec"(runnable: $Runnable$$Type): void
public "run"(arg0: $Runnable$$Type): void
public "lockTokens"(): ($LockToken)[]
public "propagateException"(arg0: $Throwable$$Type): void
get "pos"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPosAwarePrioritizedTask$$Type = ($AbstractPosAwarePrioritizedTask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPosAwarePrioritizedTask_ = $AbstractPosAwarePrioritizedTask$$Type;
}}
declare module "com.ishland.flowsched.scheduler.ItemStatus" {
import {$Cancellable, $Cancellable$$Type} from "com.ishland.flowsched.scheduler.Cancellable"
import {$KeyStatusPair, $KeyStatusPair$$Type} from "com.ishland.flowsched.scheduler.KeyStatusPair"
import {$CompletionStage, $CompletionStage$$Type} from "java.util.concurrent.CompletionStage"
import {$ItemHolder, $ItemHolder$$Type} from "com.ishland.flowsched.scheduler.ItemHolder"

export interface $ItemStatus<K, V, Ctx> {

 "getNext"(): $ItemStatus<(K), (V), (Ctx)>
 "ordinal"(): integer
 "getDependencies"(arg0: $ItemHolder$$Type<(K), (V), (Ctx), (any)>): ($KeyStatusPair<(K), (V), (Ctx)>)[]
 "getPrev"(): $ItemStatus<(K), (V), (Ctx)>
 "upgradeToThis"(arg0: Ctx, arg1: $Cancellable$$Type): $CompletionStage<(void)>
 "getAllStatuses"(): ($ItemStatus<(K), (V), (Ctx)>)[]
 "downgradeFromThis"(arg0: Ctx, arg1: $Cancellable$$Type): $CompletionStage<(void)>
 "getDependenciesToAdd"(holder: $ItemHolder$$Type<(K), (V), (Ctx), (any)>): ($KeyStatusPair<(K), (V), (Ctx)>)[]
 "getDependenciesToRemove"(holder: $ItemHolder$$Type<(K), (V), (Ctx), (any)>): ($KeyStatusPair<(K), (V), (Ctx)>)[]
get "next"(): $ItemStatus<(K), (V), (Ctx)>
get "prev"(): $ItemStatus<(K), (V), (Ctx)>
get "allStatuses"(): ($ItemStatus<(K), (V), (Ctx)>)[]
}

export namespace $ItemStatus {
const EMPTY_DEPENDENCIES: ($KeyStatusPair<(any), (any), (any)>)[]
const probejs$$marker: never
}
export class $ItemStatus$$Static<K, V, Ctx> implements $ItemStatus {
static readonly "EMPTY_DEPENDENCIES": ($KeyStatusPair<(any), (any), (any)>)[]


 "getNext"(): $ItemStatus<(K), (V), (Ctx)>
 "ordinal"(): integer
 "getDependencies"(arg0: $ItemHolder$$Type<(K), (V), (Ctx), (any)>): ($KeyStatusPair<(K), (V), (Ctx)>)[]
 "getPrev"(): $ItemStatus<(K), (V), (Ctx)>
 "upgradeToThis"(arg0: Ctx, arg1: $Cancellable$$Type): $CompletionStage<(void)>
 "getAllStatuses"(): ($ItemStatus<(K), (V), (Ctx)>)[]
 "downgradeFromThis"(arg0: Ctx, arg1: $Cancellable$$Type): $CompletionStage<(void)>
 "getDependenciesToAdd"(holder: $ItemHolder$$Type<(K), (V), (Ctx), (any)>): ($KeyStatusPair<(K), (V), (Ctx)>)[]
 "getDependenciesToRemove"(holder: $ItemHolder$$Type<(K), (V), (Ctx), (any)>): ($KeyStatusPair<(K), (V), (Ctx)>)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStatus$$Type<K, V, Ctx> = ($ItemStatus<(K), (V), (Ctx)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStatus_<K, V, Ctx> = $ItemStatus$$Type<(K), (V), (Ctx)>;
}}
declare module "com.ishland.c2me.opts.scheduling.common.ServerMidTickTask" {
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export interface $ServerMidTickTask {

 "executeTasksMidTick"(arg0: $ServerLevel$$Type): void

(arg0: $ServerLevel): void
}

export namespace $ServerMidTickTask {
const probejs$$marker: never
}
export class $ServerMidTickTask$$Static implements $ServerMidTickTask {


 "executeTasksMidTick"(arg0: $ServerLevel$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerMidTickTask$$Type = ((arg0: $ServerLevel) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerMidTickTask_ = $ServerMidTickTask$$Type;
}}
declare module "com.ishland.flowsched.executor.LockToken" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LockToken {

}

export namespace $LockToken {
const probejs$$marker: never
}
export class $LockToken$$Static implements $LockToken {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LockToken$$Type = ($LockToken);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LockToken_ = $LockToken$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IChunkHolder" {
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$ChunkMap, $ChunkMap$$Type} from "net.minecraft.server.level.ChunkMap"

export interface $IChunkHolder {

 "invokeUpdateFutures"(arg0: $ChunkMap$$Type, arg1: $Executor$$Type): void

(arg0: $ChunkMap, arg1: $Executor): void
}

export namespace $IChunkHolder {
const probejs$$marker: never
}
export class $IChunkHolder$$Static implements $IChunkHolder {


 "invokeUpdateFutures"(arg0: $ChunkMap$$Type, arg1: $Executor$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChunkHolder$$Type = ((arg0: $ChunkMap, arg1: $Executor) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChunkHolder_ = $IChunkHolder$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IVersionedChunkStorage" {
import {$RegionStorageInfo, $RegionStorageInfo$$Type} from "net.minecraft.world.level.chunk.storage.RegionStorageInfo"
import {$IOWorker, $IOWorker$$Type} from "net.minecraft.world.level.chunk.storage.IOWorker"

export interface $IVersionedChunkStorage {

 "getWorker"(): $IOWorker
 "invokeGetStorageKey"(): $RegionStorageInfo
get "worker"(): $IOWorker
}

export namespace $IVersionedChunkStorage {
const probejs$$marker: never
}
export class $IVersionedChunkStorage$$Static implements $IVersionedChunkStorage {


 "getWorker"(): $IOWorker
 "invokeGetStorageKey"(): $RegionStorageInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVersionedChunkStorage$$Type = ($IVersionedChunkStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVersionedChunkStorage_ = $IVersionedChunkStorage$$Type;
}}
declare module "com.ishland.flowsched.scheduler.ItemHolder" {
import {$KeyStatusPair, $KeyStatusPair$$Type} from "com.ishland.flowsched.scheduler.KeyStatusPair"
import {$ItemStatus, $ItemStatus$$Type} from "com.ishland.flowsched.scheduler.ItemStatus"
import {$ItemTicket, $ItemTicket$$Type} from "com.ishland.flowsched.scheduler.ItemTicket"
import {$IllegalStateException, $IllegalStateException$$Type} from "java.lang.IllegalStateException"
import {$AtomicReference, $AtomicReference$$Type} from "java.util.concurrent.atomic.AtomicReference"
import {$Scheduler, $Scheduler$$Type} from "io.reactivex.rxjava3.core.Scheduler"
import {$CompletionStage, $CompletionStage$$Type} from "java.util.concurrent.CompletionStage"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$StatusAdvancingScheduler, $StatusAdvancingScheduler$$Type} from "com.ishland.flowsched.scheduler.StatusAdvancingScheduler"
import {$Completable, $Completable$$Type} from "io.reactivex.rxjava3.core.Completable"
import {$CancellationSignaller, $CancellationSignaller$$Type} from "com.ishland.flowsched.scheduler.CancellationSignaller"

export class $ItemHolder<K, V, Ctx, UserData> {
static readonly "FLAG_HAVE_RETRIED": integer
static readonly "UNLOADED_EXCEPTION": $IllegalStateException
static readonly "FLAG_REMOVED": integer
static readonly "FLAG_BROKEN": integer


public "getUserData"(): $AtomicReference<(UserData)>
public "isOpen"(): boolean
public "getKey"(): K
public "getFlags"(): integer
public "getItem"(): $AtomicReference<(V)>
public "markDirty"(scheduler: $StatusAdvancingScheduler$$Type<(K), (V), (Ctx), (UserData)>): void
public "clearFlag"(flag: integer): void
public "setFlag"(flag: integer): void
public "getStatus"(): $ItemStatus<(K), (V), (Ctx)>
public "isBusy"(): boolean
public "getDependencies"(status: $ItemStatus$$Type<(K), (V), (Ctx)>): ($KeyStatusPair<(K), (V), (Ctx)>)[]
public "setDependencies"(status: $ItemStatus$$Type<(K), (V), (Ctx)>, dependencies: ($KeyStatusPair$$Type<(K), (V), (Ctx)>)[]): void
public "addTicket"(ticket: $ItemTicket$$Type<(K), (V), (Ctx)>): void
public "removeTicket"(ticket: $ItemTicket$$Type<(K), (V), (Ctx)>): void
public "setStatus"(status: $ItemStatus$$Type<(K), (V), (Ctx)>, isCancellation: boolean): boolean
public "submitOpListener"(runnable: $Runnable$$Type): void
public "getCriticalSectionScheduler"(): $Scheduler
public "executeCriticalSectionAndBusy"(command: $Runnable$$Type): void
public "getCriticalSectionExecutor"(): $Executor
public "subscribeOp"(op: $Completable$$Type): void
public "submitOp"(op: $CompletionStage$$Type<(void)>): void
public "getOpFuture"(): $CompletableFuture<(void)>
public "getTargetStatus"(): $ItemStatus<(K), (V), (Ctx)>
public "isDependencyDirty"(): boolean
public "holdsDependency"(): boolean
public "upgradingStatusTo"(): $ItemStatus<(K), (V), (Ctx)>
public "tryCancelUpgradeAction"(): void
public "consolidateMarkDirty"(scheduler: $StatusAdvancingScheduler$$Type<(K), (V), (Ctx), (UserData)>): void
public "submitUpgradeAction"(signaller: $CancellationSignaller$$Type, status: $ItemStatus$$Type<(K), (V), (Ctx)>): void
public "addDependencyTicket"(scheduler: $StatusAdvancingScheduler$$Type<(K), (V), (Ctx), (any)>, key: K, status: $ItemStatus$$Type<(K), (V), (Ctx)>, callback: $Runnable$$Type): void
public "removeDependencyTicket"(key: K, status: $ItemStatus$$Type<(K), (V), (Ctx)>): void
public "cleanupDependencies"(scheduler: $StatusAdvancingScheduler$$Type<(K), (V), (Ctx), (any)>): void
public "getFutureForStatus"(status: $ItemStatus$$Type<(K), (V), (Ctx)>): $CompletableFuture<(void)>
public "getFutureForStatus0"(status: $ItemStatus$$Type<(K), (V), (Ctx)>): $CompletableFuture<(void)>
get "userData"(): $AtomicReference<(UserData)>
get "open"(): boolean
get "key"(): K
get "flags"(): integer
get "item"(): $AtomicReference<(V)>
set "flag"(value: integer)
get "status"(): $ItemStatus<(K), (V), (Ctx)>
get "busy"(): boolean
get "criticalSectionScheduler"(): $Scheduler
get "criticalSectionExecutor"(): $Executor
get "opFuture"(): $CompletableFuture<(void)>
get "targetStatus"(): $ItemStatus<(K), (V), (Ctx)>
get "dependencyDirty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemHolder$$Type<K, V, Ctx, UserData> = ($ItemHolder<(K), (V), (Ctx), (UserData)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemHolder_<K, V, Ctx, UserData> = $ItemHolder$$Type<(K), (V), (Ctx), (UserData)>;
}}
declare module "com.ishland.c2me.base.mixin.access.IChunkTicketManagerNearbyChunkTicketUpdater" {
import {$Long2IntMap, $Long2IntMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2IntMap"

export interface $IChunkTicketManagerNearbyChunkTicketUpdater {

 "getDistances"(): $Long2IntMap

(): $Long2IntMap$$Type
get "distances"(): $Long2IntMap
}

export namespace $IChunkTicketManagerNearbyChunkTicketUpdater {
const probejs$$marker: never
}
export class $IChunkTicketManagerNearbyChunkTicketUpdater$$Static implements $IChunkTicketManagerNearbyChunkTicketUpdater {


 "getDistances"(): $Long2IntMap
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChunkTicketManagerNearbyChunkTicketUpdater$$Type = (() => $Long2IntMap$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChunkTicketManagerNearbyChunkTicketUpdater_ = $IChunkTicketManagerNearbyChunkTicketUpdater$$Type;
}}
declare module "com.ishland.flowsched.scheduler.ItemTicket$TicketType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ItemTicket$TicketType {
static "DEPENDENCY": $ItemTicket$TicketType
static "EXTERNAL": $ItemTicket$TicketType

constructor(description: string)

public "getDescription"(): string
get "description"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTicket$TicketType$$Type = ($ItemTicket$TicketType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTicket$TicketType_ = $ItemTicket$TicketType$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IChunkTicketManager" {
import {$ObjectSet, $ObjectSet$$Type} from "it.unimi.dsi.fastutil.objects.ObjectSet"
import {$Long2ObjectMap, $Long2ObjectMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import {$Ticket, $Ticket$$Type} from "net.minecraft.server.level.Ticket"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SortedArraySet, $SortedArraySet$$Type} from "net.minecraft.util.SortedArraySet"
import {$Long2ObjectOpenHashMap, $Long2ObjectOpenHashMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectOpenHashMap"
import {$TickingTracker, $TickingTracker$$Type} from "net.minecraft.server.level.TickingTracker"
import {$DistanceManager$PlayerTicketTracker, $DistanceManager$PlayerTicketTracker$$Type} from "net.minecraft.server.level.DistanceManager$PlayerTicketTracker"

export interface $IChunkTicketManager {

 "invokeSetWatchDistance"(arg0: integer): void
 "getPlayersByChunkPos"(): $Long2ObjectMap<($ObjectSet<($ServerPlayer)>)>
 "getTicketsByPosition"(): $Long2ObjectOpenHashMap<($SortedArraySet<($Ticket<(any)>)>)>
 "getSimulationDistanceTracker"(): $TickingTracker
 "getNearbyChunkTicketUpdater"(): $DistanceManager$PlayerTicketTracker
get "playersByChunkPos"(): $Long2ObjectMap<($ObjectSet<($ServerPlayer)>)>
get "ticketsByPosition"(): $Long2ObjectOpenHashMap<($SortedArraySet<($Ticket<(any)>)>)>
get "simulationDistanceTracker"(): $TickingTracker
get "nearbyChunkTicketUpdater"(): $DistanceManager$PlayerTicketTracker
}

export namespace $IChunkTicketManager {
const probejs$$marker: never
}
export class $IChunkTicketManager$$Static implements $IChunkTicketManager {


 "invokeSetWatchDistance"(arg0: integer): void
 "getPlayersByChunkPos"(): $Long2ObjectMap<($ObjectSet<($ServerPlayer)>)>
 "getTicketsByPosition"(): $Long2ObjectOpenHashMap<($SortedArraySet<($Ticket<(any)>)>)>
 "getSimulationDistanceTracker"(): $TickingTracker
 "getNearbyChunkTicketUpdater"(): $DistanceManager$PlayerTicketTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChunkTicketManager$$Type = ($IChunkTicketManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChunkTicketManager_ = $IChunkTicketManager$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IChunkTicket" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IChunkTicket {

 "invokeIsExpired"(arg0: long): boolean

(arg0: long): boolean
}

export namespace $IChunkTicket {
const probejs$$marker: never
}
export class $IChunkTicket$$Static implements $IChunkTicket {


 "invokeIsExpired"(arg0: long): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChunkTicket$$Type = ((arg0: long) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChunkTicket_ = $IChunkTicket$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.ISimpleTickScheduler" {
import {$SerializableTickContainer, $SerializableTickContainer$$Type} from "net.minecraft.world.ticks.SerializableTickContainer"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$List, $List$$Type} from "java.util.List"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$SavedTick, $SavedTick$$Type} from "net.minecraft.world.ticks.SavedTick"

export interface $ISimpleTickScheduler<T> extends $SerializableTickContainer<(T)> {

 "getScheduledTicks"(): $List<($SavedTick<(T)>)>
 "save"(arg0: long, arg1: $Function$$Type<(T), (string)>): $Tag
get "scheduledTicks"(): $List<($SavedTick<(T)>)>
}

export namespace $ISimpleTickScheduler {
const probejs$$marker: never
}
export class $ISimpleTickScheduler$$Static<T> implements $ISimpleTickScheduler {


 "getScheduledTicks"(): $List<($SavedTick<(T)>)>
 "save"(arg0: long, arg1: $Function$$Type<(T), (string)>): $Tag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISimpleTickScheduler$$Type<T> = ($ISimpleTickScheduler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISimpleTickScheduler_<T> = $ISimpleTickScheduler$$Type<(T)>;
}}
declare module "com.ishland.c2me.base.mixin.access.IStructureStart" {
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$PiecesContainer, $PiecesContainer$$Type} from "net.minecraft.world.level.levelgen.structure.pieces.PiecesContainer"

export interface $IStructureStart {

 "getChildren"(): $PiecesContainer
 "getStructure"(): $Structure
 "getReferences"(): integer
get "children"(): $PiecesContainer
get "structure"(): $Structure
get "references"(): integer
}

export namespace $IStructureStart {
const probejs$$marker: never
}
export class $IStructureStart$$Static implements $IStructureStart {


 "getChildren"(): $PiecesContainer
 "getStructure"(): $Structure
 "getReferences"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStructureStart$$Type = ($IStructureStart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStructureStart_ = $IStructureStart$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBlockEntity {

}

export namespace $IBlockEntity {
const probejs$$marker: never
}
export class $IBlockEntity$$Static implements $IBlockEntity {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockEntity$$Type = ($IBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockEntity_ = $IBlockEntity$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IServerLightingProvider" {
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ThreadedLevelLightEngine$TaskType, $ThreadedLevelLightEngine$TaskType$$Type} from "net.minecraft.server.level.ThreadedLevelLightEngine$TaskType"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"

export interface $IServerLightingProvider {

 "invokeEnqueue"(arg0: integer, arg1: integer, arg2: $IntSupplier$$Type, arg3: $ThreadedLevelLightEngine$TaskType$$Type, arg4: $Runnable$$Type): void
 "invokeUpdateChunkStatus"(arg0: $ChunkPos$$Type): void
}

export namespace $IServerLightingProvider {
const probejs$$marker: never
}
export class $IServerLightingProvider$$Static implements $IServerLightingProvider {


 "invokeEnqueue"(arg0: integer, arg1: integer, arg2: $IntSupplier$$Type, arg3: $ThreadedLevelLightEngine$TaskType$$Type, arg4: $Runnable$$Type): void
 "invokeUpdateChunkStatus"(arg0: $ChunkPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerLightingProvider$$Type = ($IServerLightingProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerLightingProvider_ = $IServerLightingProvider$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.ISerializingRegionBasedStorage" {
import {$SimpleRegionStorage, $SimpleRegionStorage$$Type} from "net.minecraft.world.level.chunk.storage.SimpleRegionStorage"

export interface $ISerializingRegionBasedStorage {

 "getStorageAccess"(): $SimpleRegionStorage

(): $SimpleRegionStorage$$Type
get "storageAccess"(): $SimpleRegionStorage
}

export namespace $ISerializingRegionBasedStorage {
const probejs$$marker: never
}
export class $ISerializingRegionBasedStorage$$Static implements $ISerializingRegionBasedStorage {


 "getStorageAccess"(): $SimpleRegionStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISerializingRegionBasedStorage$$Type = (() => $SimpleRegionStorage$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISerializingRegionBasedStorage_ = $ISerializingRegionBasedStorage$$Type;
}}
declare module "com.ishland.c2me.base.common.theinterface.IDirectStorage" {
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export interface $IDirectStorage {

 "setRawChunkData"(arg0: $ChunkPos$$Type, arg1: (byte)[]): $CompletableFuture<(void)>

(arg0: $ChunkPos, arg1: (byte)[]): $CompletableFuture$$Type<(void)>
}

export namespace $IDirectStorage {
const probejs$$marker: never
}
export class $IDirectStorage$$Static implements $IDirectStorage {


 "setRawChunkData"(arg0: $ChunkPos$$Type, arg1: (byte)[]): $CompletableFuture<(void)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDirectStorage$$Type = ((arg0: $ChunkPos, arg1: (byte)[]) => $CompletableFuture$$Type<(void)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDirectStorage_ = $IDirectStorage$$Type;
}}
declare module "com.ishland.c2me.rewrites.chunksystem.common.async_chunkio.SerializingRegionBasedStorageExtension" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export interface $SerializingRegionBasedStorageExtension {

 "update"(arg0: $ChunkPos$$Type, arg1: $CompoundTag$$Type): void

(arg0: $ChunkPos, arg1: $CompoundTag): void
}

export namespace $SerializingRegionBasedStorageExtension {
const probejs$$marker: never
}
export class $SerializingRegionBasedStorageExtension$$Static implements $SerializingRegionBasedStorageExtension {


 "update"(arg0: $ChunkPos$$Type, arg1: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializingRegionBasedStorageExtension$$Type = ((arg0: $ChunkPos, arg1: $CompoundTag) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializingRegionBasedStorageExtension_ = $SerializingRegionBasedStorageExtension$$Type;
}}
declare module "com.ishland.c2me.client.uncapvd.mixin.ISimpleOption" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$OptionInstance$ValueSet, $OptionInstance$ValueSet$$Type} from "net.minecraft.client.OptionInstance$ValueSet"

export interface $ISimpleOption<T> {

 "setCallbacks"(arg0: $OptionInstance$ValueSet$$Type<(T)>): void
 "setCodec"(arg0: $Codec$$Type<(T)>): void
set "callbacks"(value: $OptionInstance$ValueSet$$Type<(T)>)
set "codec"(value: $Codec$$Type<(T)>)
}

export namespace $ISimpleOption {
const probejs$$marker: never
}
export class $ISimpleOption$$Static<T> implements $ISimpleOption {


 "setCallbacks"(arg0: $OptionInstance$ValueSet$$Type<(T)>): void
 "setCodec"(arg0: $Codec$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISimpleOption$$Type<T> = ($ISimpleOption<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISimpleOption_<T> = $ISimpleOption$$Type<(T)>;
}}
declare module "com.ishland.c2me.base.mixin.access.ISimulationDistanceLevelPropagator" {
import {$Long2ByteMap, $Long2ByteMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ByteMap"

export interface $ISimulationDistanceLevelPropagator {

 "getLevels"(): $Long2ByteMap

(): $Long2ByteMap$$Type
get "levels"(): $Long2ByteMap
}

export namespace $ISimulationDistanceLevelPropagator {
const probejs$$marker: never
}
export class $ISimulationDistanceLevelPropagator$$Static implements $ISimulationDistanceLevelPropagator {


 "getLevels"(): $Long2ByteMap
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISimulationDistanceLevelPropagator$$Type = (() => $Long2ByteMap$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISimulationDistanceLevelPropagator_ = $ISimulationDistanceLevelPropagator$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.INbtCompound" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $INbtCompound {

}

export namespace $INbtCompound {
const probejs$$marker: never
}
export class $INbtCompound$$Static implements $INbtCompound {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INbtCompound$$Type = ($INbtCompound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INbtCompound_ = $INbtCompound$$Type;
}}
declare module "com.ishland.c2me.rewrites.chunksystem.common.TheChunkSystem" {
import {$ChunkHolder, $ChunkHolder$$Type} from "net.minecraft.server.level.ChunkHolder"
import {$ChunkLoadingContext, $ChunkLoadingContext$$Type} from "com.ishland.c2me.rewrites.chunksystem.common.ChunkLoadingContext"
import {$ChunkState, $ChunkState$$Type} from "com.ishland.c2me.rewrites.chunksystem.common.ChunkState"
import {$StatusAdvancingScheduler, $StatusAdvancingScheduler$$Type} from "com.ishland.flowsched.scheduler.StatusAdvancingScheduler"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$NewChunkHolderVanillaInterface, $NewChunkHolderVanillaInterface$$Type} from "com.ishland.c2me.rewrites.chunksystem.common.NewChunkHolderVanillaInterface"
import {$ChunkMap, $ChunkMap$$Type} from "net.minecraft.server.level.ChunkMap"

export class $TheChunkSystem extends $StatusAdvancingScheduler<($ChunkPos), ($ChunkState), ($ChunkLoadingContext), ($NewChunkHolderVanillaInterface)> {
static readonly "NO_OP": $Runnable

constructor(tacs: $ChunkMap$$Type)

public "vanillaIf$setLevel"(pos: long, level: integer): $ChunkHolder
public "vanillaIf$getManagedLevel"(pos: long): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TheChunkSystem$$Type = ($TheChunkSystem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TheChunkSystem_ = $TheChunkSystem$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IServerEntityManager" {
import {$LongSet, $LongSet$$Type} from "it.unimi.dsi.fastutil.longs.LongSet"

export interface $IServerEntityManager {

 "invokeGetLoadedChunks"(): $LongSet

(): $LongSet$$Type
}

export namespace $IServerEntityManager {
const probejs$$marker: never
}
export class $IServerEntityManager$$Static implements $IServerEntityManager {


 "invokeGetLoadedChunks"(): $LongSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IServerEntityManager$$Type = (() => $LongSet$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IServerEntityManager_ = $IServerEntityManager$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IChunkSection" {
import {$PalettedContainer, $PalettedContainer$$Type} from "net.minecraft.world.level.chunk.PalettedContainer"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$PalettedContainerRO, $PalettedContainerRO$$Type} from "net.minecraft.world.level.chunk.PalettedContainerRO"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IChunkSection {

 "getBlockStateContainer"(): $PalettedContainer<($BlockState)>
 "getBiomeContainer"(): $PalettedContainerRO<($Holder<($Biome)>)>
get "blockStateContainer"(): $PalettedContainer<($BlockState)>
get "biomeContainer"(): $PalettedContainerRO<($Holder<($Biome)>)>
}

export namespace $IChunkSection {
const probejs$$marker: never
}
export class $IChunkSection$$Static implements $IChunkSection {


 "getBlockStateContainer"(): $PalettedContainer<($BlockState)>
 "getBiomeContainer"(): $PalettedContainerRO<($Holder<($Biome)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChunkSection$$Type = ($IChunkSection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChunkSection_ = $IChunkSection$$Type;
}}
declare module "com.ishland.c2me.base.common.scheduler.SchedulingManager" {
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$AbstractPosAwarePrioritizedTask, $AbstractPosAwarePrioritizedTask$$Type} from "com.ishland.c2me.base.common.scheduler.AbstractPosAwarePrioritizedTask"

export class $SchedulingManager {
static readonly "MAX_LEVEL": integer

constructor(executor: $Executor$$Type)

public "enqueue"(task: $AbstractPosAwarePrioritizedTask$$Type): void
public "enqueue"(pos: long, command: $Runnable$$Type): void
public "getId"(): integer
public "updatePriorityFromLevelOnMain"(pos: long, level: integer): void
public "setCurrentSyncLoad"(pos: $ChunkPos$$Type): void
public "positionedExecutor"(pos: long): $Executor
public "updatePriorityFromLevel"(pos: long, level: integer): void
public "setConsolidatingLevelUpdates"(value: boolean): void
get "id"(): integer
set "currentSyncLoad"(value: $ChunkPos$$Type)
set "consolidatingLevelUpdates"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SchedulingManager$$Type = ($SchedulingManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SchedulingManager_ = $SchedulingManager$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IBelowZeroRetrogen" {
import {$BitSet, $BitSet$$Type} from "java.util.BitSet"
import {$ChunkStatus, $ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"

export interface $IBelowZeroRetrogen {

 "getMissingBedrock"(): $BitSet
 "invokeGetTargetStatus"(): $ChunkStatus
get "missingBedrock"(): $BitSet
}

export namespace $IBelowZeroRetrogen {
const probejs$$marker: never
}
export class $IBelowZeroRetrogen$$Static implements $IBelowZeroRetrogen {


 "getMissingBedrock"(): $BitSet
 "invokeGetTargetStatus"(): $ChunkStatus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBelowZeroRetrogen$$Type = ($IBelowZeroRetrogen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBelowZeroRetrogen_ = $IBelowZeroRetrogen$$Type;
}}
declare module "com.ishland.c2me.base.mixin.access.IState" {
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export interface $IState<S> {

 "getCodec"(): $MapCodec<(S)>

(): $MapCodec$$Type<(S)>
get "codec"(): $MapCodec<(S)>
}

export namespace $IState {
const probejs$$marker: never
}
export class $IState$$Static<S> implements $IState {


 "getCodec"(): $MapCodec<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IState$$Type<S> = (() => $MapCodec$$Type<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IState_<S> = $IState$$Type<(S)>;
}}
