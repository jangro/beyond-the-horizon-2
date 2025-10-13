declare module "net.caffeinemc.mods.lithium.common.util.deduplication.LithiumInterner" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $LithiumInterner<T> {

constructor()

public "getCanonical"<S extends T>(arg0: S): S
public "deleteCanonical"(arg0: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LithiumInterner$$Type<T> = ($LithiumInterner<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LithiumInterner_<T> = $LithiumInterner$$Type<(T)>;
}}
declare module "net.caffeinemc.mods.sodium.mixin.features.textures.animations.tracking.AnimatedTextureAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$SpriteContents$FrameInfo, $SpriteContents$FrameInfo$$Type} from "net.minecraft.client.renderer.texture.SpriteContents$FrameInfo"

export interface $AnimatedTextureAccessor {

 "getFrames"(): $List<($SpriteContents$FrameInfo)>

(): $List$$Type<($SpriteContents$FrameInfo$$Type)>
get "frames"(): $List<($SpriteContents$FrameInfo)>
}

export namespace $AnimatedTextureAccessor {
const probejs$$marker: never
}
export class $AnimatedTextureAccessor$$Static implements $AnimatedTextureAccessor {


 "getFrames"(): $List<($SpriteContents$FrameInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatedTextureAccessor$$Type = (() => $List$$Type<($SpriteContents$FrameInfo$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatedTextureAccessor_ = $AnimatedTextureAccessor$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.block.entity.SetChangedHandlingBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SetChangedHandlingBlockEntity {

 "lithium$handleSetChanged"(): void
}

export namespace $SetChangedHandlingBlockEntity {
const probejs$$marker: never
}
export class $SetChangedHandlingBlockEntity$$Static implements $SetChangedHandlingBlockEntity {


 "lithium$handleSetChanged"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetChangedHandlingBlockEntity$$Type = ($SetChangedHandlingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetChangedHandlingBlockEntity_ = $SetChangedHandlingBlockEntity$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.entity.PositionedEntityTrackingSection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PositionedEntityTrackingSection {

 "lithium$setPos"(arg0: long): void
 "lithium$getPos"(): long
}

export namespace $PositionedEntityTrackingSection {
const probejs$$marker: never
}
export class $PositionedEntityTrackingSection$$Static implements $PositionedEntityTrackingSection {


 "lithium$setPos"(arg0: long): void
 "lithium$getPos"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionedEntityTrackingSection$$Type = ($PositionedEntityTrackingSection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PositionedEntityTrackingSection_ = $PositionedEntityTrackingSection$$Type;
}}
declare module "net.caffeinemc.mods.lithium.mixin.block.hopper.EntitySectionAccessor" {
import {$ClassInstanceMultiMap, $ClassInstanceMultiMap$$Type} from "net.minecraft.util.ClassInstanceMultiMap"

export interface $EntitySectionAccessor<T> {

 "getCollection"(): $ClassInstanceMultiMap<(T)>

(): $ClassInstanceMultiMap$$Type<(T)>
get "collection"(): $ClassInstanceMultiMap<(T)>
}

export namespace $EntitySectionAccessor {
const probejs$$marker: never
}
export class $EntitySectionAccessor$$Static<T> implements $EntitySectionAccessor {


 "getCollection"(): $ClassInstanceMultiMap<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitySectionAccessor$$Type<T> = (() => $ClassInstanceMultiMap$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntitySectionAccessor_<T> = $EntitySectionAccessor$$Type<(T)>;
}}
declare module "net.caffeinemc.mods.lithium.mixin.util.accessors.ItemStackAccessor" {
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $ItemStackAccessor {

 "lithium$getItem"(): $Item

(): $Item$$Type
}

export namespace $ItemStackAccessor {
const probejs$$marker: never
}
export class $ItemStackAccessor$$Static implements $ItemStackAccessor {


 "lithium$getItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackAccessor$$Type = (() => $Item$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackAccessor_ = $ItemStackAccessor$$Type;
}}
declare module "net.caffeinemc.mods.sodium.client.render.chunk.ChunkRenderMatrices" {
import {$Matrix4fc, $Matrix4fc$$Type} from "org.joml.Matrix4fc"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ChunkRenderMatrices extends $Record {

constructor(projection: $Matrix4fc$$Type, modelView: $Matrix4fc$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "from"(arg0: $PoseStack$$Type): $ChunkRenderMatrices
public "modelView"(): $Matrix4fc
public "projection"(): $Matrix4fc
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkRenderMatrices$$Type = ({"modelView"?: $Matrix4fc$$Type, "projection"?: $Matrix4fc$$Type}) | ([modelView?: $Matrix4fc$$Type, projection?: $Matrix4fc$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkRenderMatrices_ = $ChunkRenderMatrices$$Type;
}}
declare module "net.caffeinemc.mods.lithium.mixin.block.hopper.NonNullListAccessor" {
import {$List, $List$$Type} from "java.util.List"

export interface $NonNullListAccessor<T> {

 "getDelegate"(): $List<(T)>

(): $List$$Type<(T)>
get "delegate"(): $List<(T)>
}

export namespace $NonNullListAccessor {
const probejs$$marker: never
}
export class $NonNullListAccessor$$Static<T> implements $NonNullListAccessor {


 "getDelegate"(): $List<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullListAccessor$$Type<T> = (() => $List$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonNullListAccessor_<T> = $NonNullListAccessor$$Type<(T)>;
}}
declare module "net.caffeinemc.mods.sodium.client.world.BiomeSeedProvider" {
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"

export interface $BiomeSeedProvider {

 "sodium$getBiomeZoomSeed"(): long

(): long
}

export namespace $BiomeSeedProvider {
function getBiomeZoomSeed(arg0: $ClientLevel$$Type): long
const probejs$$marker: never
}
export class $BiomeSeedProvider$$Static implements $BiomeSeedProvider {


static "getBiomeZoomSeed"(arg0: $ClientLevel$$Type): long
 "sodium$getBiomeZoomSeed"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeSeedProvider$$Type = (() => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeSeedProvider_ = $BiomeSeedProvider$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.block.TrackedBlockStatePredicate" {
import {$AtomicBoolean, $AtomicBoolean$$Type} from "java.util.concurrent.atomic.AtomicBoolean"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TrackedBlockStatePredicate implements $Predicate<($BlockState)> {
static readonly "FULLY_INITIALIZED": $AtomicBoolean

constructor(arg0: integer)

public "getIndex"(): integer
public "or"(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
public static "not"<T>(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
public "negate"(): $Predicate<($BlockState)>
public "and"(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
public static "isEqual"<T>(arg0: any): $Predicate<($BlockState)>
public "test"(arg0: $BlockState$$Type): boolean
get "index"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackedBlockStatePredicate$$Type = ($TrackedBlockStatePredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackedBlockStatePredicate_ = $TrackedBlockStatePredicate$$Type;
}}
declare module "net.caffeinemc.mods.sodium.client.render.texture.SpriteContentsExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsExtension {

 "sodium$setActive"(arg0: boolean): void
 "sodium$hasAnimation"(): boolean
 "sodium$isActive"(): boolean
}

export namespace $SpriteContentsExtension {
const probejs$$marker: never
}
export class $SpriteContentsExtension$$Static implements $SpriteContentsExtension {


 "sodium$setActive"(arg0: boolean): void
 "sodium$hasAnimation"(): boolean
 "sodium$isActive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsExtension$$Type = ($SpriteContentsExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsExtension_ = $SpriteContentsExtension$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.ai.MemoryModificationCounter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MemoryModificationCounter {

 "lithium$getModCount"(): long

(): long
}

export namespace $MemoryModificationCounter {
const probejs$$marker: never
}
export class $MemoryModificationCounter$$Static implements $MemoryModificationCounter {


 "lithium$getModCount"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryModificationCounter$$Type = (() => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemoryModificationCounter_ = $MemoryModificationCounter$$Type;
}}
declare module "net.caffeinemc.mods.sodium.mixin.features.textures.animations.upload.SpriteContentsTickerAccessor" {
import {$SpriteContents$AnimatedTexture, $SpriteContents$AnimatedTexture$$Type} from "net.minecraft.client.renderer.texture.SpriteContents$AnimatedTexture"

export interface $SpriteContentsTickerAccessor {

 "getFrameIndex"(): integer
 "getFrameTicks"(): integer
 "getAnimationInfo"(): $SpriteContents$AnimatedTexture
get "frameIndex"(): integer
get "frameTicks"(): integer
get "animationInfo"(): $SpriteContents$AnimatedTexture
}

export namespace $SpriteContentsTickerAccessor {
const probejs$$marker: never
}
export class $SpriteContentsTickerAccessor$$Static implements $SpriteContentsTickerAccessor {


 "getFrameIndex"(): integer
 "getFrameTicks"(): integer
 "getAnimationInfo"(): $SpriteContents$AnimatedTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsTickerAccessor$$Type = ($SpriteContentsTickerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsTickerAccessor_ = $SpriteContentsTickerAccessor$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.entity.NavigatingEntity" {
import {$PathNavigation, $PathNavigation$$Type} from "net.minecraft.world.entity.ai.navigation.PathNavigation"

export interface $NavigatingEntity {

 "lithium$updateNavigationRegistration"(): void
 "lithium$getRegisteredNavigation"(): $PathNavigation
 "lithium$isRegisteredToWorld"(): boolean
 "lithium$setRegisteredToWorld"(arg0: $PathNavigation$$Type): void
}

export namespace $NavigatingEntity {
const probejs$$marker: never
}
export class $NavigatingEntity$$Static implements $NavigatingEntity {


 "lithium$updateNavigationRegistration"(): void
 "lithium$getRegisteredNavigation"(): $PathNavigation
 "lithium$isRegisteredToWorld"(): boolean
 "lithium$setRegisteredToWorld"(arg0: $PathNavigation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NavigatingEntity$$Type = ($NavigatingEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NavigatingEntity_ = $NavigatingEntity$$Type;
}}
declare module "net.caffeinemc.mods.sodium.client.render.chunk.compile.pipeline.TextureAtlasSpriteExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TextureAtlasSpriteExtension {

 "sodium$hasUnknownImageContents"(): boolean

(): boolean
}

export namespace $TextureAtlasSpriteExtension {
const probejs$$marker: never
}
export class $TextureAtlasSpriteExtension$$Static implements $TextureAtlasSpriteExtension {


 "sodium$hasUnknownImageContents"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasSpriteExtension$$Type = (() => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureAtlasSpriteExtension_ = $TextureAtlasSpriteExtension$$Type;
}}
declare module "net.caffeinemc.mods.lithium.api.inventory.LithiumDefaultedList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LithiumDefaultedList {

 "changedInteractionConditions"(): void

(): void
}

export namespace $LithiumDefaultedList {
const probejs$$marker: never
}
export class $LithiumDefaultedList$$Static implements $LithiumDefaultedList {


 "changedInteractionConditions"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LithiumDefaultedList$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LithiumDefaultedList_ = $LithiumDefaultedList$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.block.entity.inventory_change_tracking.InventoryChangeEmitter" {
import {$LithiumStackList, $LithiumStackList$$Type} from "net.caffeinemc.mods.lithium.common.hopper.LithiumStackList"
import {$InventoryChangeListener, $InventoryChangeListener$$Type} from "net.caffeinemc.mods.lithium.common.block.entity.inventory_change_tracking.InventoryChangeListener"
import {$InventoryChangeTracker, $InventoryChangeTracker$$Type} from "net.caffeinemc.mods.lithium.common.block.entity.inventory_change_tracking.InventoryChangeTracker"

export interface $InventoryChangeEmitter {

 "emitCallbackReplaced"(): void
 "lithium$emitRemoved"(): void
 "lithium$forwardContentChangeOnce"(arg0: $InventoryChangeListener$$Type, arg1: $LithiumStackList$$Type, arg2: $InventoryChangeTracker$$Type): void
 "lithium$forwardMajorInventoryChanges"(arg0: $InventoryChangeListener$$Type): void
 "lithium$emitFirstComparatorAdded"(): void
 "lithium$stopForwardingMajorInventoryChanges"(arg0: $InventoryChangeListener$$Type): void
 "lithium$emitStackListReplaced"(): void
 "lithium$emitContentModified"(): void
}

export namespace $InventoryChangeEmitter {
const probejs$$marker: never
}
export class $InventoryChangeEmitter$$Static implements $InventoryChangeEmitter {


 "emitCallbackReplaced"(): void
 "lithium$emitRemoved"(): void
 "lithium$forwardContentChangeOnce"(arg0: $InventoryChangeListener$$Type, arg1: $LithiumStackList$$Type, arg2: $InventoryChangeTracker$$Type): void
 "lithium$forwardMajorInventoryChanges"(arg0: $InventoryChangeListener$$Type): void
 "lithium$emitFirstComparatorAdded"(): void
 "lithium$stopForwardingMajorInventoryChanges"(arg0: $InventoryChangeListener$$Type): void
 "lithium$emitStackListReplaced"(): void
 "lithium$emitContentModified"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryChangeEmitter$$Type = ($InventoryChangeEmitter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryChangeEmitter_ = $InventoryChangeEmitter$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.entity.EquipmentEntity$EquipmentTrackingEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EquipmentEntity$EquipmentTrackingEntity {

 "lithium$onEquipmentChanged"(): void

(): void
}

export namespace $EquipmentEntity$EquipmentTrackingEntity {
const probejs$$marker: never
}
export class $EquipmentEntity$EquipmentTrackingEntity$$Static implements $EquipmentEntity$EquipmentTrackingEntity {


 "lithium$onEquipmentChanged"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentEntity$EquipmentTrackingEntity$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipmentEntity$EquipmentTrackingEntity_ = $EquipmentEntity$EquipmentTrackingEntity$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.world.LithiumData" {
import {$LithiumData$Data, $LithiumData$Data$$Type} from "net.caffeinemc.mods.lithium.common.world.LithiumData$Data"

export interface $LithiumData {

 "lithium$getData"(): $LithiumData$Data

(): $LithiumData$Data$$Type
}

export namespace $LithiumData {
const probejs$$marker: never
}
export class $LithiumData$$Static implements $LithiumData {


 "lithium$getData"(): $LithiumData$Data
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LithiumData$$Type = (() => $LithiumData$Data$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LithiumData_ = $LithiumData$$Type;
}}
declare module "net.caffeinemc.mods.sodium.client.render.viewport.frustum.Frustum" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Frustum {

 "testAab"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): boolean

(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): boolean
}

export namespace $Frustum {
const probejs$$marker: never
}
export class $Frustum$$Static implements $Frustum {


 "testAab"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Frustum$$Type = ((arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Frustum_ = $Frustum$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.world.ChunkAwareEntityIterable" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$EntityAccess, $EntityAccess$$Type} from "net.minecraft.world.level.entity.EntityAccess"

export interface $ChunkAwareEntityIterable<T extends $EntityAccess> {

 "lithium$IterateEntitiesInTrackedSections"(): $Iterable<(T)>

(): $Iterable$$Type<(T)>
}

export namespace $ChunkAwareEntityIterable {
const probejs$$marker: never
}
export class $ChunkAwareEntityIterable$$Static<T extends $EntityAccess> implements $ChunkAwareEntityIterable {


 "lithium$IterateEntitiesInTrackedSections"(): $Iterable<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkAwareEntityIterable$$Type<T> = (() => $Iterable$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkAwareEntityIterable_<T> = $ChunkAwareEntityIterable$$Type<(T)>;
}}
declare module "net.caffeinemc.mods.lithium.common.entity.pushable.BlockCachingEntity" {
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockCachingEntity {

 "lithium$getCachedFeetBlockState"(): $BlockState
 "lithium$OnBlockCacheDeleted"(): void
 "lithium$OnBlockCacheSet"(arg0: $BlockState$$Type): void
 "lithium$SetClimbingMobCachingSectionUpdateBehavior"(arg0: boolean): void

(): $BlockState$$Type
}

export namespace $BlockCachingEntity {
const probejs$$marker: never
}
export class $BlockCachingEntity$$Static implements $BlockCachingEntity {


 "lithium$getCachedFeetBlockState"(): $BlockState
 "lithium$OnBlockCacheDeleted"(): void
 "lithium$OnBlockCacheSet"(arg0: $BlockState$$Type): void
 "lithium$SetClimbingMobCachingSectionUpdateBehavior"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCachingEntity$$Type = (() => $BlockState$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCachingEntity_ = $BlockCachingEntity$$Type;
}}
declare module "net.caffeinemc.mods.lithium.mixin.world.combined_heightmap_update.HeightmapAccessor" {
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $HeightmapAccessor {

 "callSet"(arg0: integer, arg1: integer, arg2: integer): void
 "getBlockPredicate"(): $Predicate<($BlockState)>
get "blockPredicate"(): $Predicate<($BlockState)>
}

export namespace $HeightmapAccessor {
const probejs$$marker: never
}
export class $HeightmapAccessor$$Static implements $HeightmapAccessor {


 "callSet"(arg0: integer, arg1: integer, arg2: integer): void
 "getBlockPredicate"(): $Predicate<($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeightmapAccessor$$Type = ($HeightmapAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeightmapAccessor_ = $HeightmapAccessor$$Type;
}}
declare module "net.caffeinemc.mods.lithium.mixin.util.accessors.LevelAccessor" {
import {$Thread, $Thread$$Type} from "java.lang.Thread"

export interface $LevelAccessor {

 "getThread"(): $Thread

(): $Thread$$Type
get "thread"(): $Thread
}

export namespace $LevelAccessor {
const probejs$$marker: never
}
export class $LevelAccessor$$Static implements $LevelAccessor {


 "getThread"(): $Thread
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelAccessor$$Type = (() => $Thread$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelAccessor_ = $LevelAccessor$$Type;
}}
declare module "net.caffeinemc.mods.sodium.client.services.SodiumModelData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SodiumModelData {

}

export namespace $SodiumModelData {
const EMPTY: $SodiumModelData
const probejs$$marker: never
}
export class $SodiumModelData$$Static implements $SodiumModelData {
static readonly "EMPTY": $SodiumModelData


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SodiumModelData$$Type = ($SodiumModelData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SodiumModelData_ = $SodiumModelData$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.block.entity.inventory_change_tracking.InventoryChangeListener" {
import {$Container, $Container$$Type} from "net.minecraft.world.Container"

export interface $InventoryChangeListener {

 "lithium$handleInventoryContentModified"(arg0: $Container$$Type): void
 "handleStackListReplaced"(arg0: $Container$$Type): void
 "lithium$handleInventoryRemoved"(arg0: $Container$$Type): void
 "lithium$handleComparatorAdded"(arg0: $Container$$Type): boolean
}

export namespace $InventoryChangeListener {
const probejs$$marker: never
}
export class $InventoryChangeListener$$Static implements $InventoryChangeListener {


 "lithium$handleInventoryContentModified"(arg0: $Container$$Type): void
 "handleStackListReplaced"(arg0: $Container$$Type): void
 "lithium$handleInventoryRemoved"(arg0: $Container$$Type): void
 "lithium$handleComparatorAdded"(arg0: $Container$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryChangeListener$$Type = ($InventoryChangeListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryChangeListener_ = $InventoryChangeListener$$Type;
}}
declare module "net.caffeinemc.mods.sodium.api.vertex.format.VertexFormatExtensions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VertexFormatExtensions {

 "sodium$getGlobalId"(): integer

(): integer
}

export namespace $VertexFormatExtensions {
const probejs$$marker: never
}
export class $VertexFormatExtensions$$Static implements $VertexFormatExtensions {


 "sodium$getGlobalId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormatExtensions$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexFormatExtensions_ = $VertexFormatExtensions$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.hopper.LithiumStackList" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$LithiumDefaultedList, $LithiumDefaultedList$$Type} from "net.caffeinemc.mods.lithium.api.inventory.LithiumDefaultedList"
import {$InventoryChangeTracker, $InventoryChangeTracker$$Type} from "net.caffeinemc.mods.lithium.common.block.entity.inventory_change_tracking.InventoryChangeTracker"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$ChangeSubscriber$CountChangeSubscriber, $ChangeSubscriber$CountChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber$CountChangeSubscriber"

export class $LithiumStackList extends $NonNullList<($ItemStack)> implements $LithiumDefaultedList, $ChangeSubscriber$CountChangeSubscriber<($ItemStack)> {

constructor(arg0: $NonNullList$$Type<($ItemStack$$Type)>, arg1: integer)
constructor(arg0: integer)

public "changed"(): void
public "remove"(arg0: integer): any
public "clear"(): void
public "add"(arg0: integer, arg1: $ItemStack$$Type): void
public "add"(arg0: integer, arg1: any): void
public "set"(arg0: integer, arg1: any): any
public "set"(arg0: integer, arg1: $ItemStack$$Type): $ItemStack
public "lithium$notify"(arg0: any, arg1: integer): void
public "lithium$notify"(arg0: $ItemStack$$Type, arg1: integer): void
public "changedALot"(): void
public "getModCount"(): long
public "getFullSlots"(): integer
public "getSignalStrength"(arg0: $Container$$Type): integer
public "getOccupiedSlots"(): integer
public "lithium$notifyCount"(arg0: any, arg1: integer, arg2: integer): void
public "lithium$notifyCount"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer): void
public "removeInventoryModificationCallback"(arg0: $InventoryChangeTracker$$Type): void
public "setInventoryModificationCallback"(arg0: $InventoryChangeTracker$$Type): void
public "lithium$forceUnsubscribe"(arg0: $ItemStack$$Type, arg1: integer): void
public "lithium$forceUnsubscribe"(arg0: any, arg1: integer): void
public "runComparatorUpdatePatternOnFailedExtract"(arg0: $LithiumStackList$$Type, arg1: $Container$$Type): void
public "maybeSendsComparatorUpdatesOnFailedExtract"(): boolean
public "setReducedSignalStrengthOverride"(): void
public "hasSignalStrengthOverride"(): boolean
public "clearSignalStrengthOverride"(): void
public "changedInteractionConditions"(): void
public static "without"<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg2: integer, arg3: boolean): $ChangeSubscriber<($ItemStack)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: $ChangeSubscriber$$Type<($ItemStack$$Type)>): $ChangeSubscriber<($ItemStack)>
public static "combine"<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): $ChangeSubscriber<($ItemStack)>
public static "dataOf"(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg2: integer, arg3: integer, arg4: boolean): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg2: integer): integer
public static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
public "removeAll"(arg0: $Collection$$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$$Type<(any)>): boolean
public "remove"(arg0: any): boolean
public "isEmpty"(): boolean
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
get "modCount"(): long
get "fullSlots"(): integer
get "occupiedSlots"(): integer
set "inventoryModificationCallback"(value: $InventoryChangeTracker$$Type)
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LithiumStackList$$Type = ($LithiumStackList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LithiumStackList_ = $LithiumStackList$$Type;
}}
declare module "net.caffeinemc.mods.lithium.api.inventory.LithiumCooldownReceivingInventory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LithiumCooldownReceivingInventory {

 "setTransferCooldown"(arg0: long): void
 "canReceiveTransferCooldown"(): boolean
set "transferCooldown"(value: long)
}

export namespace $LithiumCooldownReceivingInventory {
const probejs$$marker: never
}
export class $LithiumCooldownReceivingInventory$$Static implements $LithiumCooldownReceivingInventory {


 "setTransferCooldown"(arg0: long): void
 "canReceiveTransferCooldown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LithiumCooldownReceivingInventory$$Type = ($LithiumCooldownReceivingInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LithiumCooldownReceivingInventory_ = $LithiumCooldownReceivingInventory$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.tracking.block.ChunkSectionChangeCallback" {
import {$SectionPos, $SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$SectionedBlockChangeTracker, $SectionedBlockChangeTracker$$Type} from "net.caffeinemc.mods.lithium.common.tracking.block.SectionedBlockChangeTracker"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockListeningSection, $BlockListeningSection$$Type} from "net.caffeinemc.mods.lithium.common.block.BlockListeningSection"
import {$ListeningBlockStatePredicate, $ListeningBlockStatePredicate$$Type} from "net.caffeinemc.mods.lithium.common.block.ListeningBlockStatePredicate"

export class $ChunkSectionChangeCallback {

constructor()

public static "create"(arg0: long, arg1: $Level$$Type): $ChunkSectionChangeCallback
public static "init"(): void
public "onBlockChange"(arg0: integer, arg1: $BlockListeningSection$$Type): short
public "addTracker"(arg0: $SectionedBlockChangeTracker$$Type, arg1: $ListeningBlockStatePredicate$$Type): short
public "removeTracker"(arg0: $SectionedBlockChangeTracker$$Type, arg1: $ListeningBlockStatePredicate$$Type): short
public "onChunkSectionInvalidated"(arg0: $SectionPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkSectionChangeCallback$$Type = ($ChunkSectionChangeCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkSectionChangeCallback_ = $ChunkSectionChangeCallback$$Type;
}}
declare module "net.caffeinemc.mods.lithium.mixin.util.entity_movement_tracking.ServerLevelAccessor" {
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PersistentEntitySectionManager, $PersistentEntitySectionManager$$Type} from "net.minecraft.world.level.entity.PersistentEntitySectionManager"

export interface $ServerLevelAccessor {

 "getEntityManager"(): $PersistentEntitySectionManager<($Entity)>

(): $PersistentEntitySectionManager$$Type<($Entity$$Type)>
get "entityManager"(): $PersistentEntitySectionManager<($Entity)>
}

export namespace $ServerLevelAccessor {
const probejs$$marker: never
}
export class $ServerLevelAccessor$$Static implements $ServerLevelAccessor {


 "getEntityManager"(): $PersistentEntitySectionManager<($Entity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLevelAccessor$$Type = (() => $PersistentEntitySectionManager$$Type<($Entity$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerLevelAccessor_ = $ServerLevelAccessor$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.tracking.entity.SectionedEntityMovementListener" {
import {$Class, $Class$$Type} from "java.lang.Class"

export interface $SectionedEntityMovementListener {

 "lithium$handleEntityMovement"(arg0: $Class$$Type<(any)>): void

(arg0: $Class<(any)>): void
}

export namespace $SectionedEntityMovementListener {
const probejs$$marker: never
}
export class $SectionedEntityMovementListener$$Static implements $SectionedEntityMovementListener {


 "lithium$handleEntityMovement"(arg0: $Class$$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionedEntityMovementListener$$Type = ((arg0: $Class<(any)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SectionedEntityMovementListener_ = $SectionedEntityMovementListener$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.block.entity.inventory_change_tracking.InventoryChangeTracker" {
import {$LithiumStackList, $LithiumStackList$$Type} from "net.caffeinemc.mods.lithium.common.hopper.LithiumStackList"
import {$InventoryChangeListener, $InventoryChangeListener$$Type} from "net.caffeinemc.mods.lithium.common.block.entity.inventory_change_tracking.InventoryChangeListener"
import {$InventoryChangeEmitter, $InventoryChangeEmitter$$Type} from "net.caffeinemc.mods.lithium.common.block.entity.inventory_change_tracking.InventoryChangeEmitter"

export interface $InventoryChangeTracker extends $InventoryChangeEmitter {

 "stopListenForMajorInventoryChanges"(arg0: $InventoryChangeListener$$Type): void
 "listenForContentChangesOnce"(arg0: $LithiumStackList$$Type, arg1: $InventoryChangeListener$$Type): void
 "listenForMajorInventoryChanges"(arg0: $InventoryChangeListener$$Type): void
 "emitCallbackReplaced"(): void
 "lithium$emitRemoved"(): void
 "lithium$forwardContentChangeOnce"(arg0: $InventoryChangeListener$$Type, arg1: $LithiumStackList$$Type, arg2: $InventoryChangeTracker$$Type): void
 "lithium$forwardMajorInventoryChanges"(arg0: $InventoryChangeListener$$Type): void
 "lithium$emitFirstComparatorAdded"(): void
 "lithium$stopForwardingMajorInventoryChanges"(arg0: $InventoryChangeListener$$Type): void
 "lithium$emitStackListReplaced"(): void
 "lithium$emitContentModified"(): void
}

export namespace $InventoryChangeTracker {
const probejs$$marker: never
}
export class $InventoryChangeTracker$$Static implements $InventoryChangeTracker {


 "stopListenForMajorInventoryChanges"(arg0: $InventoryChangeListener$$Type): void
 "listenForContentChangesOnce"(arg0: $LithiumStackList$$Type, arg1: $InventoryChangeListener$$Type): void
 "listenForMajorInventoryChanges"(arg0: $InventoryChangeListener$$Type): void
 "emitCallbackReplaced"(): void
 "lithium$emitRemoved"(): void
 "lithium$forwardContentChangeOnce"(arg0: $InventoryChangeListener$$Type, arg1: $LithiumStackList$$Type, arg2: $InventoryChangeTracker$$Type): void
 "lithium$forwardMajorInventoryChanges"(arg0: $InventoryChangeListener$$Type): void
 "lithium$emitFirstComparatorAdded"(): void
 "lithium$stopForwardingMajorInventoryChanges"(arg0: $InventoryChangeListener$$Type): void
 "lithium$emitStackListReplaced"(): void
 "lithium$emitContentModified"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryChangeTracker$$Type = ($InventoryChangeTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryChangeTracker_ = $InventoryChangeTracker$$Type;
}}
declare module "net.caffeinemc.mods.lithium.mixin.world.chunk_access.GenerationChunkHolderAccessor" {
import {$ChunkResult, $ChunkResult$$Type} from "net.minecraft.server.level.ChunkResult"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$ChunkAccess, $ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$AtomicReferenceArray, $AtomicReferenceArray$$Type} from "java.util.concurrent.atomic.AtomicReferenceArray"
import {$ChunkStatus, $ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"

export interface $GenerationChunkHolderAccessor {

 "lithium$getChunkFuturesByStatus"(): $AtomicReferenceArray<($CompletableFuture<($ChunkResult<($ChunkAccess)>)>)>
 "invokeCannotBeLoaded"(arg0: $ChunkStatus$$Type): boolean
}

export namespace $GenerationChunkHolderAccessor {
const probejs$$marker: never
}
export class $GenerationChunkHolderAccessor$$Static implements $GenerationChunkHolderAccessor {


 "lithium$getChunkFuturesByStatus"(): $AtomicReferenceArray<($CompletableFuture<($ChunkResult<($ChunkAccess)>)>)>
 "invokeCannotBeLoaded"(arg0: $ChunkStatus$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenerationChunkHolderAccessor$$Type = ($GenerationChunkHolderAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenerationChunkHolderAccessor_ = $GenerationChunkHolderAccessor$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber$EnchantmentSubscriber" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"

export interface $ChangeSubscriber$EnchantmentSubscriber<T> extends $ChangeSubscriber<(T)> {

 "lithium$notifyAfterEnchantmentChange"(arg0: T, arg1: integer): void
 "lithium$notify"(arg0: T, arg1: integer): void
 "lithium$forceUnsubscribe"(arg0: T, arg1: integer): void
}

export namespace $ChangeSubscriber$EnchantmentSubscriber {
function without<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
function without<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
function combine<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
function dataOf(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer): integer
function dataWithout<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
function dataWithout<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
function containsSubscriber(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
const probejs$$marker: never
}
export class $ChangeSubscriber$EnchantmentSubscriber$$Static<T> implements $ChangeSubscriber$EnchantmentSubscriber {


 "lithium$notifyAfterEnchantmentChange"(arg0: T, arg1: integer): void
static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
static "dataOf"(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer): integer
static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
 "lithium$notify"(arg0: T, arg1: integer): void
static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
 "lithium$forceUnsubscribe"(arg0: T, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChangeSubscriber$EnchantmentSubscriber$$Type<T> = ($ChangeSubscriber$EnchantmentSubscriber<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChangeSubscriber$EnchantmentSubscriber_<T> = $ChangeSubscriber$EnchantmentSubscriber$$Type<(T)>;
}}
declare module "net.caffeinemc.mods.lithium.common.world.interests.PointOfInterestStorageExtended" {
import {$PoiType, $PoiType$$Type} from "net.minecraft.world.entity.ai.village.poi.PoiType"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$PoiRecord, $PoiRecord$$Type} from "net.minecraft.world.entity.ai.village.poi.PoiRecord"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$PoiManager$Occupancy, $PoiManager$Occupancy$$Type} from "net.minecraft.world.entity.ai.village.poi.PoiManager$Occupancy"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$WorldBorder, $WorldBorder$$Type} from "net.minecraft.world.level.border.WorldBorder"

export interface $PointOfInterestStorageExtended {

 "lithium$findNearestForPortalLogic"(arg0: $BlockPos$$Type, arg1: integer, arg2: $Holder$$Type<($PoiType)>, arg3: $PoiManager$Occupancy$$Type, arg4: $Predicate$$Type<($PoiRecord)>, arg5: $WorldBorder$$Type): $Optional<($PoiRecord)>

(arg0: $BlockPos, arg1: integer, arg2: $Holder<($PoiType)>, arg3: $PoiManager$Occupancy, arg4: $Predicate<($PoiRecord)>, arg5: $WorldBorder): $Optional$$Type<($PoiRecord$$Type)>
}

export namespace $PointOfInterestStorageExtended {
const probejs$$marker: never
}
export class $PointOfInterestStorageExtended$$Static implements $PointOfInterestStorageExtended {


 "lithium$findNearestForPortalLogic"(arg0: $BlockPos$$Type, arg1: integer, arg2: $Holder$$Type<($PoiType)>, arg3: $PoiManager$Occupancy$$Type, arg4: $Predicate$$Type<($PoiRecord)>, arg5: $WorldBorder$$Type): $Optional<($PoiRecord)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PointOfInterestStorageExtended$$Type = ((arg0: $BlockPos, arg1: integer, arg2: $Holder<($PoiType)>, arg3: $PoiManager$Occupancy, arg4: $Predicate<($PoiRecord)>, arg5: $WorldBorder) => $Optional$$Type<($PoiRecord$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PointOfInterestStorageExtended_ = $PointOfInterestStorageExtended$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.world.blockentity.BlockEntityGetter" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockEntityGetter {

 "lithium$getLoadedExistingBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity

(arg0: $BlockPos): $BlockEntity$$Type
}

export namespace $BlockEntityGetter {
const probejs$$marker: never
}
export class $BlockEntityGetter$$Static implements $BlockEntityGetter {


 "lithium$getLoadedExistingBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityGetter$$Type = ((arg0: $BlockPos) => $BlockEntity$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityGetter_ = $BlockEntityGetter$$Type;
}}
declare module "net.caffeinemc.mods.sodium.client.render.viewport.CameraTransform" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CameraTransform {
readonly "intX": integer
readonly "fracX": float
readonly "x": double
readonly "fracY": float
readonly "y": double
readonly "intZ": integer
readonly "z": double
readonly "intY": integer
readonly "fracZ": float

constructor(arg0: double, arg1: double, arg2: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraTransform$$Type = ($CameraTransform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CameraTransform_ = $CameraTransform$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.world.GameEventDispatcherStorage" {
import {$Long2ReferenceOpenHashMap, $Long2ReferenceOpenHashMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceOpenHashMap"
import {$LongOpenHashSet, $LongOpenHashSet$$Type} from "it.unimi.dsi.fastutil.longs.LongOpenHashSet"
import {$GameEventListenerRegistry, $GameEventListenerRegistry$$Type} from "net.minecraft.world.level.gameevent.GameEventListenerRegistry"
import {$Int2ObjectMap, $Int2ObjectMap$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $GameEventDispatcherStorage extends $Record {

constructor()
constructor(storage: $Long2ReferenceOpenHashMap$$Type<($Int2ObjectMap$$Type<($GameEventListenerRegistry$$Type)>)>, loadedChunks: $LongOpenHashSet$$Type)

public "get"(arg0: long): $Int2ObjectMap<($GameEventListenerRegistry)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "replace"(arg0: long, arg1: $Int2ObjectMap$$Type<($GameEventListenerRegistry$$Type)>): void
public "storage"(): $Long2ReferenceOpenHashMap<($Int2ObjectMap<($GameEventListenerRegistry)>)>
public "loadedChunks"(): $LongOpenHashSet
public "removeChunk"(arg0: long): void
public "addChunk"(arg0: long, arg1: $Int2ObjectMap$$Type<($GameEventListenerRegistry$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameEventDispatcherStorage$$Type = ({"storage"?: $Long2ReferenceOpenHashMap$$Type<($Int2ObjectMap$$Type<($GameEventListenerRegistry$$Type)>)>, "loadedChunks"?: $LongOpenHashSet$$Type}) | ([storage?: $Long2ReferenceOpenHashMap$$Type<($Int2ObjectMap$$Type<($GameEventListenerRegistry$$Type)>)>, loadedChunks?: $LongOpenHashSet$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameEventDispatcherStorage_ = $GameEventDispatcherStorage$$Type;
}}
declare module "net.caffeinemc.mods.sodium.client.render.chunk.compile.pipeline.SpriteContentsExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsExtension {

 "sodium$hasTransparentPixels"(): boolean
 "sodium$hasTranslucentPixels"(): boolean
}

export namespace $SpriteContentsExtension {
const probejs$$marker: never
}
export class $SpriteContentsExtension$$Static implements $SpriteContentsExtension {


 "sodium$hasTransparentPixels"(): boolean
 "sodium$hasTranslucentPixels"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsExtension$$Type = ($SpriteContentsExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsExtension_ = $SpriteContentsExtension$$Type;
}}
declare module "net.caffeinemc.mods.lithium.mixin.util.accessors.ServerLevelAccessor" {
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PersistentEntitySectionManager, $PersistentEntitySectionManager$$Type} from "net.minecraft.world.level.entity.PersistentEntitySectionManager"

export interface $ServerLevelAccessor {

 "getEntityManager"(): $PersistentEntitySectionManager<($Entity)>

(): $PersistentEntitySectionManager$$Type<($Entity$$Type)>
get "entityManager"(): $PersistentEntitySectionManager<($Entity)>
}

export namespace $ServerLevelAccessor {
const probejs$$marker: never
}
export class $ServerLevelAccessor$$Static implements $ServerLevelAccessor {


 "getEntityManager"(): $PersistentEntitySectionManager<($Entity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLevelAccessor$$Type = (() => $PersistentEntitySectionManager$$Type<($Entity$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerLevelAccessor_ = $ServerLevelAccessor$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.hopper.UpdateReceiver" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export interface $UpdateReceiver {

 "lithium$invalidateCacheOnUndirectedNeighborUpdate"(): void
 "lithium$invalidateCacheOnNeighborUpdate"(arg0: boolean): void
 "lithium$invalidateCacheOnNeighborUpdate"(arg0: $Direction$$Type): void
}

export namespace $UpdateReceiver {
const probejs$$marker: never
}
export class $UpdateReceiver$$Static implements $UpdateReceiver {


 "lithium$invalidateCacheOnUndirectedNeighborUpdate"(): void
 "lithium$invalidateCacheOnNeighborUpdate"(arg0: boolean): void
 "lithium$invalidateCacheOnNeighborUpdate"(arg0: $Direction$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdateReceiver$$Type = ($UpdateReceiver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpdateReceiver_ = $UpdateReceiver$$Type;
}}
declare module "net.caffeinemc.mods.sodium.client.model.quad.ModelQuadView" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export interface $ModelQuadView {

 "getFlags"(): integer
 "getY"(arg0: integer): float
 "getX"(arg0: integer): float
 "getZ"(arg0: integer): float
 "getSprite"(): $TextureAtlasSprite
 "getColor"(arg0: integer): integer
 "hasColor"(): boolean
 "getColorIndex"(): integer
 "getFaceNormal"(): integer
 "getTexU"(arg0: integer): float
 "getTexV"(arg0: integer): float
 "getLight"(arg0: integer): integer
 "getLightFace"(): $Direction
 "getVertexNormal"(arg0: integer): integer
 "calculateNormal"(): integer
 "getAccurateNormal"(arg0: integer): integer
get "flags"(): integer
get "sprite"(): $TextureAtlasSprite
get "colorIndex"(): integer
get "faceNormal"(): integer
get "lightFace"(): $Direction
}

export namespace $ModelQuadView {
const probejs$$marker: never
}
export class $ModelQuadView$$Static implements $ModelQuadView {


 "getFlags"(): integer
 "getY"(arg0: integer): float
 "getX"(arg0: integer): float
 "getZ"(arg0: integer): float
 "getSprite"(): $TextureAtlasSprite
 "getColor"(arg0: integer): integer
 "hasColor"(): boolean
 "getColorIndex"(): integer
 "getFaceNormal"(): integer
 "getTexU"(arg0: integer): float
 "getTexV"(arg0: integer): float
 "getLight"(arg0: integer): integer
 "getLightFace"(): $Direction
 "getVertexNormal"(arg0: integer): integer
 "calculateNormal"(): integer
 "getAccurateNormal"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelQuadView$$Type = ($ModelQuadView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelQuadView_ = $ModelQuadView$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.world.block_pattern_matching.BlockPatternExtended" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"

export interface $BlockPatternExtended {

 "lithium$setRequiredBlock"(arg0: $Block$$Type, arg1: integer): void

(arg0: $Block, arg1: integer): void
}

export namespace $BlockPatternExtended {
const probejs$$marker: never
}
export class $BlockPatternExtended$$Static implements $BlockPatternExtended {


 "lithium$setRequiredBlock"(arg0: $Block$$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPatternExtended$$Type = ((arg0: $Block, arg1: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPatternExtended_ = $BlockPatternExtended$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.client.ClientWorldAccessor" {
import {$TransientEntitySectionManager, $TransientEntitySectionManager$$Type} from "net.minecraft.world.level.entity.TransientEntitySectionManager"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $ClientWorldAccessor {

 "lithium$getEntityManager"(): $TransientEntitySectionManager<($Entity)>

(): $TransientEntitySectionManager$$Type<($Entity$$Type)>
}

export namespace $ClientWorldAccessor {
const probejs$$marker: never
}
export class $ClientWorldAccessor$$Static implements $ClientWorldAccessor {


 "lithium$getEntityManager"(): $TransientEntitySectionManager<($Entity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientWorldAccessor$$Type = (() => $TransientEntitySectionManager$$Type<($Entity$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientWorldAccessor_ = $ClientWorldAccessor$$Type;
}}
declare module "net.caffeinemc.mods.sodium.client.model.color.interop.BlockColorsExtension" {
import {$BlockColors, $BlockColors$$Type} from "net.minecraft.client.color.block.BlockColors"
import {$ReferenceSet, $ReferenceSet$$Type} from "it.unimi.dsi.fastutil.objects.ReferenceSet"
import {$Reference2ReferenceMap, $Reference2ReferenceMap$$Type} from "it.unimi.dsi.fastutil.objects.Reference2ReferenceMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"

export interface $BlockColorsExtension {

 "sodium$getProviders"(): $Reference2ReferenceMap<($Block), ($BlockColor)>
 "sodium$getOverridenVanillaBlocks"(): $ReferenceSet<($Block)>
}

export namespace $BlockColorsExtension {
function getProviders(arg0: $BlockColors$$Type): $Reference2ReferenceMap<($Block), ($BlockColor)>
function getOverridenVanillaBlocks(arg0: $BlockColors$$Type): $ReferenceSet<($Block)>
const probejs$$marker: never
}
export class $BlockColorsExtension$$Static implements $BlockColorsExtension {


static "getProviders"(arg0: $BlockColors$$Type): $Reference2ReferenceMap<($Block), ($BlockColor)>
 "sodium$getProviders"(): $Reference2ReferenceMap<($Block), ($BlockColor)>
 "sodium$getOverridenVanillaBlocks"(): $ReferenceSet<($Block)>
static "getOverridenVanillaBlocks"(arg0: $BlockColors$$Type): $ReferenceSet<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockColorsExtension$$Type = ($BlockColorsExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockColorsExtension_ = $BlockColorsExtension$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.world.ServerWorldExtended" {
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"

export interface $ServerWorldExtended {

 "lithium$setNavigationActive"(arg0: $Mob$$Type): void
 "lithium$setNavigationInactive"(arg0: $Mob$$Type): void
}

export namespace $ServerWorldExtended {
const probejs$$marker: never
}
export class $ServerWorldExtended$$Static implements $ServerWorldExtended {


 "lithium$setNavigationActive"(arg0: $Mob$$Type): void
 "lithium$setNavigationInactive"(arg0: $Mob$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerWorldExtended$$Type = ($ServerWorldExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerWorldExtended_ = $ServerWorldExtended$$Type;
}}
declare module "net.caffeinemc.mods.sodium.client.world.LevelRendererExtension" {
import {$SodiumWorldRenderer, $SodiumWorldRenderer$$Type} from "net.caffeinemc.mods.sodium.client.render.SodiumWorldRenderer"

export interface $LevelRendererExtension {

 "sodium$getWorldRenderer"(): $SodiumWorldRenderer

(): $SodiumWorldRenderer$$Type
}

export namespace $LevelRendererExtension {
const probejs$$marker: never
}
export class $LevelRendererExtension$$Static implements $LevelRendererExtension {


 "sodium$getWorldRenderer"(): $SodiumWorldRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererExtension$$Type = (() => $SodiumWorldRenderer$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelRendererExtension_ = $LevelRendererExtension$$Type;
}}
declare module "net.caffeinemc.mods.lithium.mixin.ai.useless_sensors.SensorAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SensorAccessor {

 "getLastSenseTime"(): long
 "getSenseInterval"(): integer
 "setLastSenseTime"(arg0: long): void
get "lastSenseTime"(): long
get "senseInterval"(): integer
set "lastSenseTime"(value: long)
}

export namespace $SensorAccessor {
const probejs$$marker: never
}
export class $SensorAccessor$$Static implements $SensorAccessor {


 "getLastSenseTime"(): long
 "getSenseInterval"(): integer
 "setLastSenseTime"(arg0: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SensorAccessor$$Type = ($SensorAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SensorAccessor_ = $SensorAccessor$$Type;
}}
declare module "net.caffeinemc.mods.lithium.mixin.util.accessors.TransientEntitySectionManagerAccessor" {
import {$EntitySectionStorage, $EntitySectionStorage$$Type} from "net.minecraft.world.level.entity.EntitySectionStorage"
import {$EntityAccess, $EntityAccess$$Type} from "net.minecraft.world.level.entity.EntityAccess"

export interface $TransientEntitySectionManagerAccessor<T extends $EntityAccess> {

 "getCache"(): $EntitySectionStorage<(T)>

(): $EntitySectionStorage$$Type<(T)>
get "cache"(): $EntitySectionStorage<(T)>
}

export namespace $TransientEntitySectionManagerAccessor {
const probejs$$marker: never
}
export class $TransientEntitySectionManagerAccessor$$Static<T extends $EntityAccess> implements $TransientEntitySectionManagerAccessor {


 "getCache"(): $EntitySectionStorage<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransientEntitySectionManagerAccessor$$Type<T> = (() => $EntitySectionStorage$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransientEntitySectionManagerAccessor_<T> = $TransientEntitySectionManagerAccessor$$Type<(T)>;
}}
declare module "net.caffeinemc.mods.lithium.api.inventory.LithiumTransferConditionInventory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LithiumTransferConditionInventory {

 "lithium$itemInsertionTestRequiresStackSize1"(): boolean
}

export namespace $LithiumTransferConditionInventory {
const probejs$$marker: never
}
export class $LithiumTransferConditionInventory$$Static implements $LithiumTransferConditionInventory {


 "lithium$itemInsertionTestRequiresStackSize1"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LithiumTransferConditionInventory$$Type = ($LithiumTransferConditionInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LithiumTransferConditionInventory_ = $LithiumTransferConditionInventory$$Type;
}}
declare module "net.caffeinemc.mods.sodium.client.render.chunk.map.ChunkTracker$ChunkEventHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ChunkTracker$ChunkEventHandler {

 "apply"(arg0: integer, arg1: integer): void

(arg0: integer, arg1: integer): void
}

export namespace $ChunkTracker$ChunkEventHandler {
const probejs$$marker: never
}
export class $ChunkTracker$ChunkEventHandler$$Static implements $ChunkTracker$ChunkEventHandler {


 "apply"(arg0: integer, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTracker$ChunkEventHandler$$Type = ((arg0: integer, arg1: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkTracker$ChunkEventHandler_ = $ChunkTracker$ChunkEventHandler$$Type;
}}
declare module "net.caffeinemc.mods.sodium.client.render.chunk.map.ChunkTracker" {
import {$ChunkTracker$ChunkEventHandler, $ChunkTracker$ChunkEventHandler$$Type} from "net.caffeinemc.mods.sodium.client.render.chunk.map.ChunkTracker$ChunkEventHandler"
import {$ClientChunkEventListener, $ClientChunkEventListener$$Type} from "net.caffeinemc.mods.sodium.client.render.chunk.map.ClientChunkEventListener"
import {$LongCollection, $LongCollection$$Type} from "it.unimi.dsi.fastutil.longs.LongCollection"

export class $ChunkTracker implements $ClientChunkEventListener {

constructor()

public "forEachEvent"(arg0: $ChunkTracker$ChunkEventHandler$$Type, arg1: $ChunkTracker$ChunkEventHandler$$Type): void
public "getReadyChunks"(): $LongCollection
public static "forEachChunk"(arg0: $LongCollection$$Type, arg1: $ChunkTracker$ChunkEventHandler$$Type): void
public "onChunkStatusRemoved"(arg0: integer, arg1: integer, arg2: integer): void
public "onChunkStatusAdded"(arg0: integer, arg1: integer, arg2: integer): void
public "updateMapCenter"(arg0: integer, arg1: integer): void
public "updateLoadDistance"(arg0: integer): void
get "readyChunks"(): $LongCollection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTracker$$Type = ($ChunkTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkTracker_ = $ChunkTracker$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ChangeSubscriber<T> {

 "lithium$notify"(arg0: T, arg1: integer): void
 "lithium$forceUnsubscribe"(arg0: T, arg1: integer): void
}

export namespace $ChangeSubscriber {
function without<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
function without<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
function combine<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
function dataOf(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer): integer
function dataWithout<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
function dataWithout<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
function containsSubscriber(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
const probejs$$marker: never
}
export class $ChangeSubscriber$$Static<T> implements $ChangeSubscriber {


static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
static "dataOf"(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer): integer
static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
 "lithium$notify"(arg0: T, arg1: integer): void
static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
 "lithium$forceUnsubscribe"(arg0: T, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChangeSubscriber$$Type<T> = ($ChangeSubscriber<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChangeSubscriber_<T> = $ChangeSubscriber$$Type<(T)>;
}}
declare module "net.caffeinemc.mods.sodium.client.render.viewport.ViewportProvider" {
import {$Viewport, $Viewport$$Type} from "net.caffeinemc.mods.sodium.client.render.viewport.Viewport"

export interface $ViewportProvider {

 "sodium$createViewport"(): $Viewport

(): $Viewport$$Type
}

export namespace $ViewportProvider {
const probejs$$marker: never
}
export class $ViewportProvider$$Static implements $ViewportProvider {


 "sodium$createViewport"(): $Viewport
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ViewportProvider$$Type = (() => $Viewport$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ViewportProvider_ = $ViewportProvider$$Type;
}}
declare module "net.caffeinemc.mods.lithium.mixin.util.accessors.PersistentEntitySectionManagerAccessor" {
import {$EntitySectionStorage, $EntitySectionStorage$$Type} from "net.minecraft.world.level.entity.EntitySectionStorage"
import {$EntityAccess, $EntityAccess$$Type} from "net.minecraft.world.level.entity.EntityAccess"

export interface $PersistentEntitySectionManagerAccessor<T extends $EntityAccess> {

 "getCache"(): $EntitySectionStorage<(T)>

(): $EntitySectionStorage$$Type<(T)>
get "cache"(): $EntitySectionStorage<(T)>
}

export namespace $PersistentEntitySectionManagerAccessor {
const probejs$$marker: never
}
export class $PersistentEntitySectionManagerAccessor$$Static<T extends $EntityAccess> implements $PersistentEntitySectionManagerAccessor {


 "getCache"(): $EntitySectionStorage<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PersistentEntitySectionManagerAccessor$$Type<T> = (() => $EntitySectionStorage$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PersistentEntitySectionManagerAccessor_<T> = $PersistentEntitySectionManagerAccessor$$Type<(T)>;
}}
declare module "net.caffeinemc.mods.sodium.client.render.chunk.map.ClientChunkEventListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ClientChunkEventListener {

 "onChunkStatusRemoved"(arg0: integer, arg1: integer, arg2: integer): void
 "onChunkStatusAdded"(arg0: integer, arg1: integer, arg2: integer): void
 "updateMapCenter"(arg0: integer, arg1: integer): void
 "updateLoadDistance"(arg0: integer): void
}

export namespace $ClientChunkEventListener {
const probejs$$marker: never
}
export class $ClientChunkEventListener$$Static implements $ClientChunkEventListener {


 "onChunkStatusRemoved"(arg0: integer, arg1: integer, arg2: integer): void
 "onChunkStatusAdded"(arg0: integer, arg1: integer, arg2: integer): void
 "updateMapCenter"(arg0: integer, arg1: integer): void
 "updateLoadDistance"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChunkEventListener$$Type = ($ClientChunkEventListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientChunkEventListener_ = $ClientChunkEventListener$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.tracking.block.SectionedBlockChangeTracker" {
import {$WorldSectionBox, $WorldSectionBox$$Type} from "net.caffeinemc.mods.lithium.common.util.tuples.WorldSectionBox"
import {$SectionPos, $SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockListeningSection, $BlockListeningSection$$Type} from "net.caffeinemc.mods.lithium.common.block.BlockListeningSection"
import {$ListeningBlockStatePredicate, $ListeningBlockStatePredicate$$Type} from "net.caffeinemc.mods.lithium.common.block.ListeningBlockStatePredicate"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"

export class $SectionedBlockChangeTracker {
readonly "trackedWorldSections": $WorldSectionBox
readonly "blockGroup": $ListeningBlockStatePredicate

constructor(arg0: $WorldSectionBox$$Type, arg1: $ListeningBlockStatePredicate$$Type)

public "unregister"(): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "register"(): void
public "setChanged"(arg0: long): void
public "setChanged"(arg0: $BlockListeningSection$$Type): void
public static "registerAt"(arg0: $Level$$Type, arg1: $AABB$$Type, arg2: $ListeningBlockStatePredicate$$Type): $SectionedBlockChangeTracker
public "isUnchangedSince"(arg0: long): boolean
public "listenToAllSections"(): void
public "matchesMovedBox"(arg0: $AABB$$Type): boolean
public "onChunkSectionInvalidated"(arg0: $SectionPos$$Type): void
set "changed"(value: long)
set "changed"(value: $BlockListeningSection$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionedBlockChangeTracker$$Type = ($SectionedBlockChangeTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SectionedBlockChangeTracker_ = $SectionedBlockChangeTracker$$Type;
}}
declare module "net.caffeinemc.mods.lithium.mixin.util.entity_movement_tracking.PersistentEntitySectionManagerAccessor" {
import {$EntitySectionStorage, $EntitySectionStorage$$Type} from "net.minecraft.world.level.entity.EntitySectionStorage"
import {$EntityAccess, $EntityAccess$$Type} from "net.minecraft.world.level.entity.EntityAccess"

export interface $PersistentEntitySectionManagerAccessor<T extends $EntityAccess> {

 "getCache"(): $EntitySectionStorage<(T)>

(): $EntitySectionStorage$$Type<(T)>
get "cache"(): $EntitySectionStorage<(T)>
}

export namespace $PersistentEntitySectionManagerAccessor {
const probejs$$marker: never
}
export class $PersistentEntitySectionManagerAccessor$$Static<T extends $EntityAccess> implements $PersistentEntitySectionManagerAccessor {


 "getCache"(): $EntitySectionStorage<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PersistentEntitySectionManagerAccessor$$Type<T> = (() => $EntitySectionStorage$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PersistentEntitySectionManagerAccessor_<T> = $PersistentEntitySectionManagerAccessor$$Type<(T)>;
}}
declare module "net.caffeinemc.mods.lithium.mixin.block.hopper.ContainerMixin" {
import {$LithiumCooldownReceivingInventory, $LithiumCooldownReceivingInventory$$Type} from "net.caffeinemc.mods.lithium.api.inventory.LithiumCooldownReceivingInventory"
import {$LithiumTransferConditionInventory, $LithiumTransferConditionInventory$$Type} from "net.caffeinemc.mods.lithium.api.inventory.LithiumTransferConditionInventory"

export interface $ContainerMixin extends $LithiumCooldownReceivingInventory, $LithiumTransferConditionInventory {

 "setTransferCooldown"(arg0: long): void
 "canReceiveTransferCooldown"(): boolean
 "lithium$itemInsertionTestRequiresStackSize1"(): boolean
set "transferCooldown"(value: long)
}

export namespace $ContainerMixin {
const probejs$$marker: never
}
export class $ContainerMixin$$Static implements $ContainerMixin {


 "setTransferCooldown"(arg0: long): void
 "canReceiveTransferCooldown"(): boolean
 "lithium$itemInsertionTestRequiresStackSize1"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerMixin$$Type = ($ContainerMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerMixin_ = $ContainerMixin$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.entity.pushable.EntityPushablePredicate" {
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"

export class $EntityPushablePredicate<S> implements $Predicate<(S)> {

constructor()

public static "and"<T>(arg0: $Predicate$$Type<(T)>, arg1: $Predicate$$Type<(T)>): $Predicate<(T)>
public "or"(arg0: $Predicate$$Type<(S)>): $Predicate<(S)>
public static "not"<T>(arg0: $Predicate$$Type<(S)>): $Predicate<(S)>
public "negate"(): $Predicate<(S)>
public "and"(arg0: $Predicate$$Type<(S)>): $Predicate<(S)>
public static "isEqual"<T>(arg0: any): $Predicate<(S)>
public "test"(arg0: S): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPushablePredicate$$Type<S> = ($EntityPushablePredicate<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityPushablePredicate_<S> = $EntityPushablePredicate$$Type<(S)>;
}}
declare module "net.caffeinemc.mods.sodium.client.model.quad.BakedQuadView" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ModelQuadView, $ModelQuadView$$Type} from "net.caffeinemc.mods.sodium.client.model.quad.ModelQuadView"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ModelQuadFacing, $ModelQuadFacing$$Type} from "net.caffeinemc.mods.sodium.client.model.quad.properties.ModelQuadFacing"

export interface $BakedQuadView extends $ModelQuadView {

 "hasShade"(): boolean
 "getFaceNormal"(): integer
 "hasAO"(): boolean
 "getNormalFace"(): $ModelQuadFacing
 "getFlags"(): integer
 "getY"(arg0: integer): float
 "getX"(arg0: integer): float
 "getZ"(arg0: integer): float
 "getSprite"(): $TextureAtlasSprite
 "getColor"(arg0: integer): integer
 "hasColor"(): boolean
 "getColorIndex"(): integer
 "getTexU"(arg0: integer): float
 "getTexV"(arg0: integer): float
 "getLight"(arg0: integer): integer
 "getLightFace"(): $Direction
 "getVertexNormal"(arg0: integer): integer
 "calculateNormal"(): integer
 "getAccurateNormal"(arg0: integer): integer
get "faceNormal"(): integer
get "normalFace"(): $ModelQuadFacing
get "flags"(): integer
get "sprite"(): $TextureAtlasSprite
get "colorIndex"(): integer
get "lightFace"(): $Direction
}

export namespace $BakedQuadView {
const probejs$$marker: never
}
export class $BakedQuadView$$Static implements $BakedQuadView {


 "hasShade"(): boolean
 "getFaceNormal"(): integer
 "hasAO"(): boolean
 "getNormalFace"(): $ModelQuadFacing
 "getFlags"(): integer
 "getY"(arg0: integer): float
 "getX"(arg0: integer): float
 "getZ"(arg0: integer): float
 "getSprite"(): $TextureAtlasSprite
 "getColor"(arg0: integer): integer
 "hasColor"(): boolean
 "getColorIndex"(): integer
 "getTexU"(arg0: integer): float
 "getTexV"(arg0: integer): float
 "getLight"(arg0: integer): integer
 "getLightFace"(): $Direction
 "getVertexNormal"(arg0: integer): integer
 "calculateNormal"(): integer
 "getAccurateNormal"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedQuadView$$Type = ($BakedQuadView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedQuadView_ = $BakedQuadView$$Type;
}}
declare module "net.caffeinemc.mods.sodium.mixin.platform.neoforge.AuxiliaryLightManagerMixin" {
import {$SodiumAuxiliaryLightManager, $SodiumAuxiliaryLightManager$$Type} from "net.caffeinemc.mods.sodium.client.world.SodiumAuxiliaryLightManager"

export interface $AuxiliaryLightManagerMixin extends $SodiumAuxiliaryLightManager {

}

export namespace $AuxiliaryLightManagerMixin {
const probejs$$marker: never
}
export class $AuxiliaryLightManagerMixin$$Static implements $AuxiliaryLightManagerMixin {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AuxiliaryLightManagerMixin$$Type = ($AuxiliaryLightManagerMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AuxiliaryLightManagerMixin_ = $AuxiliaryLightManagerMixin$$Type;
}}
declare module "net.caffeinemc.mods.sodium.client.model.color.interop.ItemColorsExtension" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemColor, $ItemColor$$Type} from "net.minecraft.client.color.item.ItemColor"

export interface $ItemColorsExtension {

 "sodium$getColorProvider"(arg0: $ItemStack$$Type): $ItemColor

(arg0: $ItemStack): $ItemColor$$Type
}

export namespace $ItemColorsExtension {
const probejs$$marker: never
}
export class $ItemColorsExtension$$Static implements $ItemColorsExtension {


 "sodium$getColorProvider"(arg0: $ItemStack$$Type): $ItemColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemColorsExtension$$Type = ((arg0: $ItemStack) => $ItemColor$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemColorsExtension_ = $ItemColorsExtension$$Type;
}}
declare module "net.caffeinemc.mods.sodium.client.world.SodiumAuxiliaryLightManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SodiumAuxiliaryLightManager {

}

export namespace $SodiumAuxiliaryLightManager {
const probejs$$marker: never
}
export class $SodiumAuxiliaryLightManager$$Static implements $SodiumAuxiliaryLightManager {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SodiumAuxiliaryLightManager$$Type = ($SodiumAuxiliaryLightManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SodiumAuxiliaryLightManager_ = $SodiumAuxiliaryLightManager$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.world.LithiumData$Data" {
import {$PathNavigation, $PathNavigation$$Type} from "net.minecraft.world.entity.ai.navigation.PathNavigation"
import {$ChunkSectionChangeCallback, $ChunkSectionChangeCallback$$Type} from "net.caffeinemc.mods.lithium.common.tracking.block.ChunkSectionChangeCallback"
import {$SectionedEntityMovementTracker, $SectionedEntityMovementTracker$$Type} from "net.caffeinemc.mods.lithium.common.tracking.entity.SectionedEntityMovementTracker"
import {$ReferenceOpenHashSet, $ReferenceOpenHashSet$$Type} from "it.unimi.dsi.fastutil.objects.ReferenceOpenHashSet"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Long2ReferenceOpenHashMap, $Long2ReferenceOpenHashMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ReferenceOpenHashMap"
import {$GameEventDispatcherStorage, $GameEventDispatcherStorage$$Type} from "net.caffeinemc.mods.lithium.common.world.GameEventDispatcherStorage"
import {$SectionedBlockChangeTracker, $SectionedBlockChangeTracker$$Type} from "net.caffeinemc.mods.lithium.common.tracking.block.SectionedBlockChangeTracker"
import {$LithiumInterner, $LithiumInterner$$Type} from "net.caffeinemc.mods.lithium.common.util.deduplication.LithiumInterner"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $LithiumData$Data extends $Record {

constructor(arg0: $HolderLookup$Provider$$Type)
constructor(gameEventDispatchers: $GameEventDispatcherStorage$$Type, ominousBanner: $ItemStack$$Type, activeNavigations: $ReferenceOpenHashSet$$Type<($PathNavigation$$Type)>, blockChangeTrackers: $LithiumInterner$$Type<($SectionedBlockChangeTracker$$Type)>, entityMovementTrackers: $LithiumInterner$$Type<($SectionedEntityMovementTracker$$Type<(any), (any)>)>, chunkSectionChangeCallbacks: $Long2ReferenceOpenHashMap$$Type<($ChunkSectionChangeCallback$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "ominousBanner"(): $ItemStack
public "gameEventDispatchers"(): $GameEventDispatcherStorage
public "activeNavigations"(): $ReferenceOpenHashSet<($PathNavigation)>
public "blockChangeTrackers"(): $LithiumInterner<($SectionedBlockChangeTracker)>
public "entityMovementTrackers"(): $LithiumInterner<($SectionedEntityMovementTracker<(any), (any)>)>
public "chunkSectionChangeCallbacks"(): $Long2ReferenceOpenHashMap<($ChunkSectionChangeCallback)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LithiumData$Data$$Type = ({"chunkSectionChangeCallbacks"?: $Long2ReferenceOpenHashMap$$Type<($ChunkSectionChangeCallback$$Type)>, "ominousBanner"?: $ItemStack$$Type, "blockChangeTrackers"?: $LithiumInterner$$Type<($SectionedBlockChangeTracker$$Type)>, "gameEventDispatchers"?: $GameEventDispatcherStorage$$Type, "activeNavigations"?: $ReferenceOpenHashSet$$Type<($PathNavigation$$Type)>, "entityMovementTrackers"?: $LithiumInterner$$Type<($SectionedEntityMovementTracker$$Type<(never), (never)>)>}) | ([chunkSectionChangeCallbacks?: $Long2ReferenceOpenHashMap$$Type<($ChunkSectionChangeCallback$$Type)>, ominousBanner?: $ItemStack$$Type, blockChangeTrackers?: $LithiumInterner$$Type<($SectionedBlockChangeTracker$$Type)>, gameEventDispatchers?: $GameEventDispatcherStorage$$Type, activeNavigations?: $ReferenceOpenHashSet$$Type<($PathNavigation$$Type)>, entityMovementTrackers?: $LithiumInterner$$Type<($SectionedEntityMovementTracker$$Type<(never), (never)>)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LithiumData$Data_ = $LithiumData$Data$$Type;
}}
declare module "net.caffeinemc.mods.lithium.api.inventory.LithiumInventory" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $LithiumInventory extends $Container {

 "getInventoryLithium"(): $NonNullList<($ItemStack)>
 "setInventoryLithium"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
 "generateLootLithium"(): void
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "getItem"(arg0: integer): $ItemStack
 "isEmpty"(): boolean
 "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
 "startOpen"(arg0: $Player$$Type): void
 "stopOpen"(arg0: $Player$$Type): void
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "countItem"(arg0: $Item$$Type): integer
 "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
 "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
 "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
 "setChanged"(): void
 "stillValid"(arg0: $Player$$Type): boolean
 "getContainerSize"(): integer
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "getMaxStackSize"(): integer
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
 "clearContent"(): void
 "setTransferCooldown"(arg0: long): void
 "canReceiveTransferCooldown"(): boolean
 "lithium$itemInsertionTestRequiresStackSize1"(): boolean
 "getBlock"(arg0: $Level$$Type): $BlockContainerJS
 "isMutable"(): boolean
 "getSlots"(): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "clear"(): void
 "getWidth"(): integer
 "getHeight"(): integer
 "setChanged"(): void
 "self"(): $Container
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getStackInSlot"(arg0: integer): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "asContainer"(): $Container
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "clear"(arg0: $ItemPredicate$$Type): void
 "find"(): integer
 "find"(arg0: $ItemPredicate$$Type): integer
 "count"(): integer
 "count"(arg0: $ItemPredicate$$Type): integer
 "isEmpty"(): boolean
 "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
 "countNonEmpty"(): integer
 "getAllItems"(): $List<($ItemStack)>
get "inventoryLithium"(): $NonNullList<($ItemStack)>
set "inventoryLithium"(value: $NonNullList$$Type<($ItemStack$$Type)>)
get "empty"(): boolean
get "containerSize"(): integer
get "maxStackSize"(): integer
set "transferCooldown"(value: long)
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}

export namespace $LithiumInventory {
function stillValidBlockEntity(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
function stillValidBlockEntity(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
function tryClear(arg0: any): void
const probejs$$marker: never
}
export class $LithiumInventory$$Static implements $LithiumInventory {


 "getInventoryLithium"(): $NonNullList<($ItemStack)>
 "setInventoryLithium"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
 "generateLootLithium"(): void
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "getItem"(arg0: integer): $ItemStack
 "isEmpty"(): boolean
 "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
 "startOpen"(arg0: $Player$$Type): void
 "stopOpen"(arg0: $Player$$Type): void
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "countItem"(arg0: $Item$$Type): integer
 "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
 "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
 "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
 "setChanged"(): void
 "stillValid"(arg0: $Player$$Type): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
 "getContainerSize"(): integer
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "getMaxStackSize"(): integer
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
 "clearContent"(): void
static "tryClear"(arg0: any): void
 "setTransferCooldown"(arg0: long): void
 "canReceiveTransferCooldown"(): boolean
 "lithium$itemInsertionTestRequiresStackSize1"(): boolean
 "getBlock"(arg0: $Level$$Type): $BlockContainerJS
 "isMutable"(): boolean
 "getSlots"(): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "clear"(): void
 "getWidth"(): integer
 "getHeight"(): integer
 "setChanged"(): void
 "self"(): $Container
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getStackInSlot"(arg0: integer): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "asContainer"(): $Container
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "clear"(arg0: $ItemPredicate$$Type): void
 "find"(): integer
 "find"(arg0: $ItemPredicate$$Type): integer
 "count"(): integer
 "count"(arg0: $ItemPredicate$$Type): integer
 "isEmpty"(): boolean
 "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
 "countNonEmpty"(): integer
 "getAllItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LithiumInventory$$Type = ($LithiumInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LithiumInventory_ = $LithiumInventory$$Type;
}}
declare module "net.caffeinemc.mods.lithium.mixin.util.accessors.EntitySectionAccessor" {
import {$ClassInstanceMultiMap, $ClassInstanceMultiMap$$Type} from "net.minecraft.util.ClassInstanceMultiMap"

export interface $EntitySectionAccessor<T> {

 "getCollection"(): $ClassInstanceMultiMap<(T)>

(): $ClassInstanceMultiMap$$Type<(T)>
get "collection"(): $ClassInstanceMultiMap<(T)>
}

export namespace $EntitySectionAccessor {
const probejs$$marker: never
}
export class $EntitySectionAccessor$$Static<T> implements $EntitySectionAccessor {


 "getCollection"(): $ClassInstanceMultiMap<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitySectionAccessor$$Type<T> = (() => $ClassInstanceMultiMap$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntitySectionAccessor_<T> = $EntitySectionAccessor$$Type<(T)>;
}}
declare module "net.caffeinemc.mods.lithium.common.block.entity.ShapeUpdateHandlingBlockBehaviour" {
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ShapeUpdateHandlingBlockBehaviour {

 "lithium$handleShapeUpdate"(arg0: $LevelReader$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type, arg4: $BlockState$$Type): void
}

export namespace $ShapeUpdateHandlingBlockBehaviour {
const probejs$$marker: never
}
export class $ShapeUpdateHandlingBlockBehaviour$$Static implements $ShapeUpdateHandlingBlockBehaviour {


 "lithium$handleShapeUpdate"(arg0: $LevelReader$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type, arg4: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapeUpdateHandlingBlockBehaviour$$Type = ($ShapeUpdateHandlingBlockBehaviour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapeUpdateHandlingBlockBehaviour_ = $ShapeUpdateHandlingBlockBehaviour$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.world.blockentity.SupportCache" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SupportCache {

 "lithium$isSupported"(): boolean

(): boolean
}

export namespace $SupportCache {
const probejs$$marker: never
}
export class $SupportCache$$Static implements $SupportCache {


 "lithium$isSupported"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SupportCache$$Type = (() => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SupportCache_ = $SupportCache$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangePublisher" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"

export interface $ChangePublisher<T> {

 "lithium$unsubscribe"(arg0: $ChangeSubscriber$$Type<(T)>): integer
 "lithium$subscribe"(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer): void
 "lithium$unsubscribeWithData"(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer): void
 "lithium$isSubscribedWithData"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer): boolean
}

export namespace $ChangePublisher {
const probejs$$marker: never
}
export class $ChangePublisher$$Static<T> implements $ChangePublisher {


 "lithium$unsubscribe"(arg0: $ChangeSubscriber$$Type<(T)>): integer
 "lithium$subscribe"(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer): void
 "lithium$unsubscribeWithData"(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer): void
 "lithium$isSubscribedWithData"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChangePublisher$$Type<T> = ($ChangePublisher<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChangePublisher_<T> = $ChangePublisher$$Type<(T)>;
}}
declare module "net.caffeinemc.mods.sodium.client.world.PalettedContainerROExtension" {
import {$PalettedContainerRO, $PalettedContainerRO$$Type} from "net.minecraft.world.level.chunk.PalettedContainerRO"

export interface $PalettedContainerROExtension<T> {

 "sodium$copy"(): $PalettedContainerRO<(T)>
 "sodium$unpack"(arg0: (T)[], arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
 "sodium$unpack"(arg0: (T)[]): void
}

export namespace $PalettedContainerROExtension {
function clone<T>(arg0: $PalettedContainerRO$$Type<(T)>): $PalettedContainerRO<(T)>
function of<T>(arg0: $PalettedContainerRO$$Type<(T)>): $PalettedContainerROExtension<(T)>
const probejs$$marker: never
}
export class $PalettedContainerROExtension$$Static<T> implements $PalettedContainerROExtension {


static "clone"<T>(arg0: $PalettedContainerRO$$Type<(T)>): $PalettedContainerRO<(T)>
static "of"<T>(arg0: $PalettedContainerRO$$Type<(T)>): $PalettedContainerROExtension<(T)>
 "sodium$copy"(): $PalettedContainerRO<(T)>
 "sodium$unpack"(arg0: (T)[], arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
 "sodium$unpack"(arg0: (T)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PalettedContainerROExtension$$Type<T> = ($PalettedContainerROExtension<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PalettedContainerROExtension_<T> = $PalettedContainerROExtension$$Type<(T)>;
}}
declare module "net.caffeinemc.mods.lithium.common.entity.EquipmentEntity$TickableEnchantmentTrackingEntity" {
import {$ChangeSubscriber$EnchantmentSubscriber, $ChangeSubscriber$EnchantmentSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber$EnchantmentSubscriber"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"

export interface $EquipmentEntity$TickableEnchantmentTrackingEntity extends $ChangeSubscriber$EnchantmentSubscriber<($ItemStack)> {

 "lithium$updateHasTickableEnchantments"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
 "lithium$notifyAfterEnchantmentChange"(arg0: $ItemStack$$Type, arg1: integer): void
 "lithium$notify"(arg0: $ItemStack$$Type, arg1: integer): void
 "lithium$forceUnsubscribe"(arg0: $ItemStack$$Type, arg1: integer): void
}

export namespace $EquipmentEntity$TickableEnchantmentTrackingEntity {
function without<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg2: integer, arg3: boolean): $ChangeSubscriber<($ItemStack)>
function without<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: $ChangeSubscriber$$Type<($ItemStack$$Type)>): $ChangeSubscriber<($ItemStack)>
function combine<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): $ChangeSubscriber<($ItemStack)>
function dataOf(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer): integer
function dataWithout<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg2: integer, arg3: integer, arg4: boolean): integer
function dataWithout<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg2: integer): integer
function containsSubscriber(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
const probejs$$marker: never
}
export class $EquipmentEntity$TickableEnchantmentTrackingEntity$$Static implements $EquipmentEntity$TickableEnchantmentTrackingEntity {


 "lithium$updateHasTickableEnchantments"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
 "lithium$notifyAfterEnchantmentChange"(arg0: $ItemStack$$Type, arg1: integer): void
static "without"<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg2: integer, arg3: boolean): $ChangeSubscriber<($ItemStack)>
static "without"<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: $ChangeSubscriber$$Type<($ItemStack$$Type)>): $ChangeSubscriber<($ItemStack)>
static "combine"<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): $ChangeSubscriber<($ItemStack)>
static "dataOf"(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer): integer
static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg2: integer, arg3: integer, arg4: boolean): integer
static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg2: integer): integer
 "lithium$notify"(arg0: $ItemStack$$Type, arg1: integer): void
static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
 "lithium$forceUnsubscribe"(arg0: $ItemStack$$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentEntity$TickableEnchantmentTrackingEntity$$Type = ($EquipmentEntity$TickableEnchantmentTrackingEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipmentEntity$TickableEnchantmentTrackingEntity_ = $EquipmentEntity$TickableEnchantmentTrackingEntity$$Type;
}}
declare module "net.caffeinemc.mods.sodium.mixin.features.textures.animations.upload.SpriteContentsFrameInfoAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsFrameInfoAccessor {

 "getTime"(): integer
 "getIndex"(): integer
get "time"(): integer
get "index"(): integer
}

export namespace $SpriteContentsFrameInfoAccessor {
const probejs$$marker: never
}
export class $SpriteContentsFrameInfoAccessor$$Static implements $SpriteContentsFrameInfoAccessor {


 "getTime"(): integer
 "getIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsFrameInfoAccessor$$Type = ($SpriteContentsFrameInfoAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsFrameInfoAccessor_ = $SpriteContentsFrameInfoAccessor$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.tracking.entity.EntityMovementTrackerSection" {
import {$EntitySectionStorage, $EntitySectionStorage$$Type} from "net.minecraft.world.level.entity.EntitySectionStorage"
import {$SectionedEntityMovementTracker, $SectionedEntityMovementTracker$$Type} from "net.caffeinemc.mods.lithium.common.tracking.entity.SectionedEntityMovementTracker"
import {$EntityAccess, $EntityAccess$$Type} from "net.minecraft.world.level.entity.EntityAccess"

export interface $EntityMovementTrackerSection {

 "lithium$addListener"(arg0: $SectionedEntityMovementTracker$$Type<(any), (any)>): void
 "lithium$removeListener"(arg0: $EntitySectionStorage$$Type<(any)>, arg1: $SectionedEntityMovementTracker$$Type<(any), (any)>): void
 "lithium$getChangeTime"(arg0: integer): long
 "lithium$removeListenToMovementOnce"<S, E extends $EntityAccess>(arg0: $SectionedEntityMovementTracker$$Type<(E), (S)>, arg1: integer): void
 "lithium$trackEntityMovement"(arg0: integer, arg1: long): void
 "lithium$listenToMovementOnce"<S, E extends $EntityAccess>(arg0: $SectionedEntityMovementTracker$$Type<(E), (S)>, arg1: integer): void
}

export namespace $EntityMovementTrackerSection {
const probejs$$marker: never
}
export class $EntityMovementTrackerSection$$Static implements $EntityMovementTrackerSection {


 "lithium$addListener"(arg0: $SectionedEntityMovementTracker$$Type<(any), (any)>): void
 "lithium$removeListener"(arg0: $EntitySectionStorage$$Type<(any)>, arg1: $SectionedEntityMovementTracker$$Type<(any), (any)>): void
 "lithium$getChangeTime"(arg0: integer): long
 "lithium$removeListenToMovementOnce"<S, E extends $EntityAccess>(arg0: $SectionedEntityMovementTracker$$Type<(E), (S)>, arg1: integer): void
 "lithium$trackEntityMovement"(arg0: integer, arg1: long): void
 "lithium$listenToMovementOnce"<S, E extends $EntityAccess>(arg0: $SectionedEntityMovementTracker$$Type<(E), (S)>, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityMovementTrackerSection$$Type = ($EntityMovementTrackerSection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityMovementTrackerSection_ = $EntityMovementTrackerSection$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.world.interests.RegionBasedStorageSectionExtended" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export interface $RegionBasedStorageSectionExtended<R> {

 "lithium$getWithinChunkColumn"(arg0: integer, arg1: integer): $Stream<(R)>
 "lithium$getInChunkColumn"(arg0: integer, arg1: integer): $Iterable<(R)>
}

export namespace $RegionBasedStorageSectionExtended {
const probejs$$marker: never
}
export class $RegionBasedStorageSectionExtended$$Static<R> implements $RegionBasedStorageSectionExtended {


 "lithium$getWithinChunkColumn"(arg0: integer, arg1: integer): $Stream<(R)>
 "lithium$getInChunkColumn"(arg0: integer, arg1: integer): $Iterable<(R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionBasedStorageSectionExtended$$Type<R> = ($RegionBasedStorageSectionExtended<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionBasedStorageSectionExtended_<R> = $RegionBasedStorageSectionExtended$$Type<(R)>;
}}
declare module "net.caffeinemc.mods.sodium.client.render.chunk.ExtendedBlockEntityType" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$BlockEntityRenderPredicate, $BlockEntityRenderPredicate$$Type} from "net.caffeinemc.mods.sodium.api.blockentity.BlockEntityRenderPredicate"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $ExtendedBlockEntityType<T extends $BlockEntity> {

 "sodium$getRenderPredicates"(): ($BlockEntityRenderPredicate<(T)>)[]
 "sodium$addRenderPredicate"(arg0: $BlockEntityRenderPredicate$$Type<(T)>): void
 "sodium$removeRenderPredicate"(arg0: $BlockEntityRenderPredicate$$Type<(T)>): boolean
}

export namespace $ExtendedBlockEntityType {
function shouldRender<T extends $BlockEntity>(arg0: $BlockEntityType$$Type<(T)>, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: T): boolean
function addRenderPredicate<T extends $BlockEntity>(arg0: $BlockEntityType$$Type<(T)>, arg1: $BlockEntityRenderPredicate$$Type<(T)>): void
function removeRenderPredicate<T extends $BlockEntity>(arg0: $BlockEntityType$$Type<(T)>, arg1: $BlockEntityRenderPredicate$$Type<(T)>): boolean
const probejs$$marker: never
}
export class $ExtendedBlockEntityType$$Static<T extends $BlockEntity> implements $ExtendedBlockEntityType {


static "shouldRender"<T extends $BlockEntity>(arg0: $BlockEntityType$$Type<(T)>, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: T): boolean
static "addRenderPredicate"<T extends $BlockEntity>(arg0: $BlockEntityType$$Type<(T)>, arg1: $BlockEntityRenderPredicate$$Type<(T)>): void
static "removeRenderPredicate"<T extends $BlockEntity>(arg0: $BlockEntityType$$Type<(T)>, arg1: $BlockEntityRenderPredicate$$Type<(T)>): boolean
 "sodium$getRenderPredicates"(): ($BlockEntityRenderPredicate<(T)>)[]
 "sodium$addRenderPredicate"(arg0: $BlockEntityRenderPredicate$$Type<(T)>): void
 "sodium$removeRenderPredicate"(arg0: $BlockEntityRenderPredicate$$Type<(T)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedBlockEntityType$$Type<T> = ($ExtendedBlockEntityType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedBlockEntityType_<T> = $ExtendedBlockEntityType$$Type<(T)>;
}}
declare module "net.caffeinemc.mods.lithium.common.entity.EquipmentEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $EquipmentEntity {

 "lithium$onEquipmentReplaced"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void

(arg0: $ItemStack, arg1: $ItemStack): void
}

export namespace $EquipmentEntity {
const probejs$$marker: never
}
export class $EquipmentEntity$$Static implements $EquipmentEntity {


 "lithium$onEquipmentReplaced"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentEntity$$Type = ((arg0: $ItemStack, arg1: $ItemStack) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipmentEntity_ = $EquipmentEntity$$Type;
}}
declare module "net.caffeinemc.mods.sodium.mixin.platform.neoforge.ChunkRenderTypeSetAccessor" {
import {$BitSet, $BitSet$$Type} from "java.util.BitSet"
import {$ChunkRenderTypeSet, $ChunkRenderTypeSet$$Type} from "net.neoforged.neoforge.client.ChunkRenderTypeSet"

export interface $ChunkRenderTypeSetAccessor {

 "getBits"(): $BitSet

(): $BitSet$$Type
get "bits"(): $BitSet
}

export namespace $ChunkRenderTypeSetAccessor {
function create(arg0: $BitSet$$Type): $ChunkRenderTypeSet
const probejs$$marker: never
}
export class $ChunkRenderTypeSetAccessor$$Static implements $ChunkRenderTypeSetAccessor {


 "getBits"(): $BitSet
static "create"(arg0: $BitSet$$Type): $ChunkRenderTypeSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkRenderTypeSetAccessor$$Type = (() => $BitSet$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkRenderTypeSetAccessor_ = $ChunkRenderTypeSetAccessor$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.shapes.OffsetVoxelShapeCache" {
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export interface $OffsetVoxelShapeCache {

 "lithium$setShape"(arg0: float, arg1: $Direction$$Type, arg2: $VoxelShape$$Type): void
 "lithium$getOffsetSimplifiedShape"(arg0: float, arg1: $Direction$$Type): $VoxelShape
}

export namespace $OffsetVoxelShapeCache {
const probejs$$marker: never
}
export class $OffsetVoxelShapeCache$$Static implements $OffsetVoxelShapeCache {


 "lithium$setShape"(arg0: float, arg1: $Direction$$Type, arg2: $VoxelShape$$Type): void
 "lithium$getOffsetSimplifiedShape"(arg0: float, arg1: $Direction$$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OffsetVoxelShapeCache$$Type = ($OffsetVoxelShapeCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OffsetVoxelShapeCache_ = $OffsetVoxelShapeCache$$Type;
}}
declare module "net.caffeinemc.mods.lithium.mixin.world.block_entity_ticking.sleeping.WrappedBlockEntityTickInvokerAccessor" {
import {$TickingBlockEntity, $TickingBlockEntity$$Type} from "net.minecraft.world.level.block.entity.TickingBlockEntity"

export interface $WrappedBlockEntityTickInvokerAccessor {

 "getWrapped"(): $TickingBlockEntity
 "callSetWrapped"(arg0: $TickingBlockEntity$$Type): void
get "wrapped"(): $TickingBlockEntity
}

export namespace $WrappedBlockEntityTickInvokerAccessor {
const probejs$$marker: never
}
export class $WrappedBlockEntityTickInvokerAccessor$$Static implements $WrappedBlockEntityTickInvokerAccessor {


 "getWrapped"(): $TickingBlockEntity
 "callSetWrapped"(arg0: $TickingBlockEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedBlockEntityTickInvokerAccessor$$Type = ($WrappedBlockEntityTickInvokerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrappedBlockEntityTickInvokerAccessor_ = $WrappedBlockEntityTickInvokerAccessor$$Type;
}}
declare module "net.caffeinemc.mods.lithium.mixin.world.raycast.ClipContextAccessor" {
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"

export interface $ClipContextAccessor {

 "getFluidHandling"(): $ClipContext$Fluid

(): $ClipContext$Fluid$$Type
get "fluidHandling"(): $ClipContext$Fluid
}

export namespace $ClipContextAccessor {
const probejs$$marker: never
}
export class $ClipContextAccessor$$Static implements $ClipContextAccessor {


 "getFluidHandling"(): $ClipContext$Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClipContextAccessor$$Type = (() => $ClipContext$Fluid$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClipContextAccessor_ = $ClipContextAccessor$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.world.interests.PointOfInterestSetExtended" {
import {$PoiType, $PoiType$$Type} from "net.minecraft.world.entity.ai.village.poi.PoiType"
import {$PoiRecord, $PoiRecord$$Type} from "net.minecraft.world.entity.ai.village.poi.PoiRecord"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$PoiManager$Occupancy, $PoiManager$Occupancy$$Type} from "net.minecraft.world.entity.ai.village.poi.PoiManager$Occupancy"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $PointOfInterestSetExtended {

 "lithium$collectMatchingPoints"(arg0: $Predicate$$Type<($Holder<($PoiType)>)>, arg1: $PoiManager$Occupancy$$Type, arg2: $Consumer$$Type<($PoiRecord)>): void

(arg0: $Predicate<($Holder<($PoiType)>)>, arg1: $PoiManager$Occupancy, arg2: $Consumer<($PoiRecord)>): void
}

export namespace $PointOfInterestSetExtended {
const probejs$$marker: never
}
export class $PointOfInterestSetExtended$$Static implements $PointOfInterestSetExtended {


 "lithium$collectMatchingPoints"(arg0: $Predicate$$Type<($Holder<($PoiType)>)>, arg1: $PoiManager$Occupancy$$Type, arg2: $Consumer$$Type<($PoiRecord)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PointOfInterestSetExtended$$Type = ((arg0: $Predicate<($Holder<($PoiType)>)>, arg1: $PoiManager$Occupancy, arg2: $Consumer<($PoiRecord)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PointOfInterestSetExtended_ = $PointOfInterestSetExtended$$Type;
}}
declare module "net.caffeinemc.mods.sodium.mixin.features.textures.NativeImageAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NativeImageAccessor {

 "getPixels"(): long

(): long
get "pixels"(): long
}

export namespace $NativeImageAccessor {
const probejs$$marker: never
}
export class $NativeImageAccessor$$Static implements $NativeImageAccessor {


 "getPixels"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeImageAccessor$$Type = (() => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NativeImageAccessor_ = $NativeImageAccessor$$Type;
}}
declare module "net.caffeinemc.mods.lithium.mixin.ai.useless_sensors.BrainAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$SensorType, $SensorType$$Type} from "net.minecraft.world.entity.ai.sensing.SensorType"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Sensor, $Sensor$$Type} from "net.minecraft.world.entity.ai.sensing.Sensor"

export interface $BrainAccessor<E extends $LivingEntity> {

 "getSensors"(): $Map<($SensorType<($Sensor<(E)>)>), ($Sensor<(E)>)>

(): $Map$$Type<($SensorType$$Type<($Sensor$$Type<(E)>)>), ($Sensor$$Type<(E)>)>
get "sensors"(): $Map<($SensorType<($Sensor<(E)>)>), ($Sensor<(E)>)>
}

export namespace $BrainAccessor {
const probejs$$marker: never
}
export class $BrainAccessor$$Static<E extends $LivingEntity> implements $BrainAccessor {


 "getSensors"(): $Map<($SensorType<($Sensor<(E)>)>), ($Sensor<(E)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrainAccessor$$Type<E> = (() => $Map$$Type<($SensorType$$Type<($Sensor$$Type<(E)>)>), ($Sensor$$Type<(E)>)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrainAccessor_<E> = $BrainAccessor$$Type<(E)>;
}}
declare module "net.caffeinemc.mods.sodium.client.render.chunk.map.ChunkTrackerHolder" {
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ChunkTracker, $ChunkTracker$$Type} from "net.caffeinemc.mods.sodium.client.render.chunk.map.ChunkTracker"

export interface $ChunkTrackerHolder {

 "sodium$getTracker"(): $ChunkTracker

(): $ChunkTracker$$Type
}

export namespace $ChunkTrackerHolder {
function get(arg0: $ClientLevel$$Type): $ChunkTracker
const probejs$$marker: never
}
export class $ChunkTrackerHolder$$Static implements $ChunkTrackerHolder {


static "get"(arg0: $ClientLevel$$Type): $ChunkTracker
 "sodium$getTracker"(): $ChunkTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTrackerHolder$$Type = (() => $ChunkTracker$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkTrackerHolder_ = $ChunkTrackerHolder$$Type;
}}
declare module "net.caffeinemc.mods.sodium.mixin.features.textures.animations.tracking.SpriteContentsFrameInfoAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsFrameInfoAccessor {

 "getTime"(): integer

(): integer
get "time"(): integer
}

export namespace $SpriteContentsFrameInfoAccessor {
const probejs$$marker: never
}
export class $SpriteContentsFrameInfoAccessor$$Static implements $SpriteContentsFrameInfoAccessor {


 "getTime"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsFrameInfoAccessor$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsFrameInfoAccessor_ = $SpriteContentsFrameInfoAccessor$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.world.ClimbingMobCachingSection" {
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$EntityPushablePredicate, $EntityPushablePredicate$$Type} from "net.caffeinemc.mods.lithium.common.entity.pushable.EntityPushablePredicate"
import {$AbortableIterationConsumer$Continuation, $AbortableIterationConsumer$Continuation$$Type} from "net.minecraft.util.AbortableIterationConsumer$Continuation"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$BlockCachingEntity, $BlockCachingEntity$$Type} from "net.caffeinemc.mods.lithium.common.entity.pushable.BlockCachingEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ClimbingMobCachingSection {

 "lithium$onEntityModifiedCachedBlock"(arg0: $BlockCachingEntity$$Type, arg1: $BlockState$$Type): void
 "lithium$collectPushableEntities"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $AABB$$Type, arg3: $EntityPushablePredicate$$Type<($Entity$$Type)>, arg4: $ArrayList$$Type<($Entity$$Type)>): $AbortableIterationConsumer$Continuation
}

export namespace $ClimbingMobCachingSection {
const probejs$$marker: never
}
export class $ClimbingMobCachingSection$$Static implements $ClimbingMobCachingSection {


 "lithium$onEntityModifiedCachedBlock"(arg0: $BlockCachingEntity$$Type, arg1: $BlockState$$Type): void
 "lithium$collectPushableEntities"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $AABB$$Type, arg3: $EntityPushablePredicate$$Type<($Entity$$Type)>, arg4: $ArrayList$$Type<($Entity$$Type)>): $AbortableIterationConsumer$Continuation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClimbingMobCachingSection$$Type = ($ClimbingMobCachingSection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClimbingMobCachingSection_ = $ClimbingMobCachingSection$$Type;
}}
declare module "net.caffeinemc.mods.lithium.mixin.minimal_nonvanilla.spawning.ServerLevelAccessor" {
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PersistentEntitySectionManager, $PersistentEntitySectionManager$$Type} from "net.minecraft.world.level.entity.PersistentEntitySectionManager"

export interface $ServerLevelAccessor {

 "getEntityManager"(): $PersistentEntitySectionManager<($Entity)>

(): $PersistentEntitySectionManager$$Type<($Entity$$Type)>
get "entityManager"(): $PersistentEntitySectionManager<($Entity)>
}

export namespace $ServerLevelAccessor {
const probejs$$marker: never
}
export class $ServerLevelAccessor$$Static implements $ServerLevelAccessor {


 "getEntityManager"(): $PersistentEntitySectionManager<($Entity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLevelAccessor$$Type = (() => $PersistentEntitySectionManager$$Type<($Entity$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerLevelAccessor_ = $ServerLevelAccessor$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.block.entity.inventory_comparator_tracking.ComparatorTracker" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export interface $ComparatorTracker {

 "lithium$onComparatorAdded"(arg0: $Direction$$Type, arg1: integer): void
 "lithium$hasAnyComparatorNearby"(): boolean
}

export namespace $ComparatorTracker {
const probejs$$marker: never
}
export class $ComparatorTracker$$Static implements $ComparatorTracker {


 "lithium$onComparatorAdded"(arg0: $Direction$$Type, arg1: integer): void
 "lithium$hasAnyComparatorNearby"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComparatorTracker$$Type = ($ComparatorTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComparatorTracker_ = $ComparatorTracker$$Type;
}}
declare module "net.caffeinemc.mods.sodium.mixin.features.textures.animations.upload.SpriteContentsAnimatedTextureAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$SpriteContents$FrameInfo, $SpriteContents$FrameInfo$$Type} from "net.minecraft.client.renderer.texture.SpriteContents$FrameInfo"

export interface $SpriteContentsAnimatedTextureAccessor {

 "getFrames"(): $List<($SpriteContents$FrameInfo)>
 "getFrameRowSize"(): integer
get "frames"(): $List<($SpriteContents$FrameInfo)>
get "frameRowSize"(): integer
}

export namespace $SpriteContentsAnimatedTextureAccessor {
const probejs$$marker: never
}
export class $SpriteContentsAnimatedTextureAccessor$$Static implements $SpriteContentsAnimatedTextureAccessor {


 "getFrames"(): $List<($SpriteContents$FrameInfo)>
 "getFrameRowSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimatedTextureAccessor$$Type = ($SpriteContentsAnimatedTextureAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAnimatedTextureAccessor_ = $SpriteContentsAnimatedTextureAccessor$$Type;
}}
declare module "net.caffeinemc.mods.sodium.mixin.features.textures.SpriteContentsInvoker" {
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"

export interface $SpriteContentsInvoker {

 "invokeUpload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage$$Type)[]): void

(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage)[]): void
}

export namespace $SpriteContentsInvoker {
const probejs$$marker: never
}
export class $SpriteContentsInvoker$$Static implements $SpriteContentsInvoker {


 "invokeUpload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage$$Type)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsInvoker$$Type = ((arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage)[]) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsInvoker_ = $SpriteContentsInvoker$$Type;
}}
declare module "net.caffeinemc.mods.sodium.mixin.features.textures.animations.upload.SpriteContentsAccessor" {
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"

export interface $SpriteContentsAccessor {

 "getImages"(): ($NativeImage)[]

(): ($NativeImage$$Type)[]
get "images"(): ($NativeImage)[]
}

export namespace $SpriteContentsAccessor {
const probejs$$marker: never
}
export class $SpriteContentsAccessor$$Static implements $SpriteContentsAccessor {


 "getImages"(): ($NativeImage)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAccessor$$Type = (() => ($NativeImage$$Type)[]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAccessor_ = $SpriteContentsAccessor$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber$CountChangeSubscriber" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"

export interface $ChangeSubscriber$CountChangeSubscriber<T> extends $ChangeSubscriber<(T)> {

 "lithium$notifyCount"(arg0: T, arg1: integer, arg2: integer): void
 "lithium$notify"(arg0: T, arg1: integer): void
 "lithium$forceUnsubscribe"(arg0: T, arg1: integer): void
}

export namespace $ChangeSubscriber$CountChangeSubscriber {
function without<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
function without<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
function combine<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
function dataOf(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer): integer
function dataWithout<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
function dataWithout<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
function containsSubscriber(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
const probejs$$marker: never
}
export class $ChangeSubscriber$CountChangeSubscriber$$Static<T> implements $ChangeSubscriber$CountChangeSubscriber {


 "lithium$notifyCount"(arg0: T, arg1: integer, arg2: integer): void
static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
static "dataOf"(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer): integer
static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
 "lithium$notify"(arg0: T, arg1: integer): void
static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
 "lithium$forceUnsubscribe"(arg0: T, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChangeSubscriber$CountChangeSubscriber$$Type<T> = ($ChangeSubscriber$CountChangeSubscriber<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChangeSubscriber$CountChangeSubscriber_<T> = $ChangeSubscriber$CountChangeSubscriber$$Type<(T)>;
}}
declare module "net.caffeinemc.mods.lithium.common.block.BlockListeningSection" {
import {$SectionedBlockChangeTracker, $SectionedBlockChangeTracker$$Type} from "net.caffeinemc.mods.lithium.common.tracking.block.SectionedBlockChangeTracker"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ListeningBlockStatePredicate, $ListeningBlockStatePredicate$$Type} from "net.caffeinemc.mods.lithium.common.block.ListeningBlockStatePredicate"

export interface $BlockListeningSection {

 "lithium$addToCallback"(arg0: $ListeningBlockStatePredicate$$Type, arg1: $SectionedBlockChangeTracker$$Type, arg2: long, arg3: $Level$$Type): void
 "lithium$removeFromCallback"(arg0: $ListeningBlockStatePredicate$$Type, arg1: $SectionedBlockChangeTracker$$Type): void
}

export namespace $BlockListeningSection {
const probejs$$marker: never
}
export class $BlockListeningSection$$Static implements $BlockListeningSection {


 "lithium$addToCallback"(arg0: $ListeningBlockStatePredicate$$Type, arg1: $SectionedBlockChangeTracker$$Type, arg2: long, arg3: $Level$$Type): void
 "lithium$removeFromCallback"(arg0: $ListeningBlockStatePredicate$$Type, arg1: $SectionedBlockChangeTracker$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockListeningSection$$Type = ($BlockListeningSection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockListeningSection_ = $BlockListeningSection$$Type;
}}
declare module "net.caffeinemc.mods.lithium.mixin.util.accessors.ItemEntityAccessor" {
import {$UUID, $UUID$$Type} from "java.util.UUID"

export interface $ItemEntityAccessor {

 "lithium$getOwner"(): $UUID

(): $UUID$$Type
}

export namespace $ItemEntityAccessor {
const probejs$$marker: never
}
export class $ItemEntityAccessor$$Static implements $ItemEntityAccessor {


 "lithium$getOwner"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEntityAccessor$$Type = (() => $UUID$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEntityAccessor_ = $ItemEntityAccessor$$Type;
}}
declare module "net.caffeinemc.mods.lithium.mixin.minimal_nonvanilla.spawning.EntitySectionAccessor" {
import {$ClassInstanceMultiMap, $ClassInstanceMultiMap$$Type} from "net.minecraft.util.ClassInstanceMultiMap"

export interface $EntitySectionAccessor<T> {

 "getCollection"(): $ClassInstanceMultiMap<(T)>

(): $ClassInstanceMultiMap$$Type<(T)>
get "collection"(): $ClassInstanceMultiMap<(T)>
}

export namespace $EntitySectionAccessor {
const probejs$$marker: never
}
export class $EntitySectionAccessor$$Static<T> implements $EntitySectionAccessor {


 "getCollection"(): $ClassInstanceMultiMap<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitySectionAccessor$$Type<T> = (() => $ClassInstanceMultiMap$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntitySectionAccessor_<T> = $EntitySectionAccessor$$Type<(T)>;
}}
declare module "net.caffeinemc.mods.lithium.common.world.chunk.ChunkHolderExtended" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ChunkHolderExtended {

 "lithium$updateLastAccessTime"(arg0: long): boolean

(arg0: long): boolean
}

export namespace $ChunkHolderExtended {
const probejs$$marker: never
}
export class $ChunkHolderExtended$$Static implements $ChunkHolderExtended {


 "lithium$updateLastAccessTime"(arg0: long): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkHolderExtended$$Type = ((arg0: long) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkHolderExtended_ = $ChunkHolderExtended$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.world.ChunkView" {
import {$ChunkAccess, $ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"

export interface $ChunkView {

 "lithium$getLoadedChunk"(arg0: integer, arg1: integer): $ChunkAccess

(arg0: integer, arg1: integer): $ChunkAccess$$Type
}

export namespace $ChunkView {
const probejs$$marker: never
}
export class $ChunkView$$Static implements $ChunkView {


 "lithium$getLoadedChunk"(arg0: integer, arg1: integer): $ChunkAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkView$$Type = ((arg0: integer, arg1: integer) => $ChunkAccess$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkView_ = $ChunkView$$Type;
}}
declare module "net.caffeinemc.mods.sodium.client.render.SodiumWorldRenderer" {
import {$RenderBuffers, $RenderBuffers$$Type} from "net.minecraft.client.renderer.RenderBuffers"
import {$BlockDestructionProgress, $BlockDestructionProgress$$Type} from "net.minecraft.server.level.BlockDestructionProgress"
import {$LocalBooleanRef, $LocalBooleanRef$$Type} from "com.llamalad7.mixinextras.sugar.ref.LocalBooleanRef"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$SortedSet, $SortedSet$$Type} from "java.util.SortedSet"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Long2ObjectMap, $Long2ObjectMap$$Type} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ChunkRenderMatrices, $ChunkRenderMatrices$$Type} from "net.caffeinemc.mods.sodium.client.render.chunk.ChunkRenderMatrices"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Viewport, $Viewport$$Type} from "net.caffeinemc.mods.sodium.client.render.viewport.Viewport"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $SodiumWorldRenderer {

constructor(arg0: $Minecraft$$Type)

public static "instance"(): $SodiumWorldRenderer
public "setLevel"(arg0: $ClientLevel$$Type): void
public "reload"(): void
public "isBoxVisible"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): boolean
public "drawChunkLayer"(arg0: $RenderType$$Type, arg1: $ChunkRenderMatrices$$Type, arg2: double, arg3: double, arg4: double): void
public "setupTerrain"(arg0: $Camera$$Type, arg1: $Viewport$$Type, arg2: boolean, arg3: boolean): void
public "isSectionReady"(arg0: integer, arg1: integer, arg2: integer): boolean
public static "instanceNullable"(): $SodiumWorldRenderer
public "isEntityVisible"(arg0: $Entity$$Type): boolean
public "getVisibleChunkCount"(): integer
public "scheduleTerrainUpdate"(): void
public "renderBlockEntities"(arg0: $PoseStack$$Type, arg1: $RenderBuffers$$Type, arg2: $Long2ObjectMap$$Type<($SortedSet$$Type<($BlockDestructionProgress$$Type)>)>, arg3: $Camera$$Type, arg4: float, arg5: $LocalBooleanRef$$Type): void
public "getChunksDebugString"(): StringJS
public "getDebugStrings"(): $Collection<(StringJS)>
public "iterateVisibleBlockEntities"(arg0: $Consumer$$Type<($BlockEntity)>): void
public "isTerrainRenderComplete"(): boolean
public "scheduleRebuildForBlockArea"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean): void
public "scheduleRebuildForChunks"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean): void
public "scheduleRebuildForChunk"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void
set "level"(value: $ClientLevel$$Type)
get "visibleChunkCount"(): integer
get "chunksDebugString"(): StringJS
get "debugStrings"(): $Collection<(StringJS)>
get "terrainRenderComplete"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SodiumWorldRenderer$$Type = ($SodiumWorldRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SodiumWorldRenderer_ = $SodiumWorldRenderer$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.block.entity.SleepingBlockEntity" {
import {$TickingBlockEntity, $TickingBlockEntity$$Type} from "net.minecraft.world.level.block.entity.TickingBlockEntity"
import {$WrappedBlockEntityTickInvokerAccessor, $WrappedBlockEntityTickInvokerAccessor$$Type} from "net.caffeinemc.mods.lithium.mixin.world.block_entity_ticking.sleeping.WrappedBlockEntityTickInvokerAccessor"

export interface $SleepingBlockEntity {

 "isSleeping"(): boolean
 "wakeUpNow"(): void
 "setTicker"(arg0: $TickingBlockEntity$$Type): void
 "lithium$getTickWrapper"(): $WrappedBlockEntityTickInvokerAccessor
 "lithium$setTickWrapper"(arg0: $WrappedBlockEntityTickInvokerAccessor$$Type): void
 "lithium$startSleeping"(): boolean
 "sleepOnlyCurrentTick"(): void
 "lithium$setSleepingTicker"(arg0: $TickingBlockEntity$$Type): void
 "lithium$getSleepingTicker"(): $TickingBlockEntity
get "sleeping"(): boolean
set "ticker"(value: $TickingBlockEntity$$Type)
}

export namespace $SleepingBlockEntity {
const SLEEPING_BLOCK_ENTITY_TICKER: $TickingBlockEntity
const probejs$$marker: never
}
export class $SleepingBlockEntity$$Static implements $SleepingBlockEntity {
static readonly "SLEEPING_BLOCK_ENTITY_TICKER": $TickingBlockEntity


 "isSleeping"(): boolean
 "wakeUpNow"(): void
 "setTicker"(arg0: $TickingBlockEntity$$Type): void
 "lithium$getTickWrapper"(): $WrappedBlockEntityTickInvokerAccessor
 "lithium$setTickWrapper"(arg0: $WrappedBlockEntityTickInvokerAccessor$$Type): void
 "lithium$startSleeping"(): boolean
 "sleepOnlyCurrentTick"(): void
 "lithium$setSleepingTicker"(arg0: $TickingBlockEntity$$Type): void
 "lithium$getSleepingTicker"(): $TickingBlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SleepingBlockEntity$$Type = ($SleepingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SleepingBlockEntity_ = $SleepingBlockEntity$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.util.tuples.WorldSectionBox" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $WorldSectionBox extends $Record {

constructor(world: $Level$$Type, chunkX1: integer, chunkY1: integer, chunkZ1: integer, chunkX2: integer, chunkY2: integer, chunkZ2: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "world"(): $Level
public "numSections"(): integer
public "chunkX1"(): integer
public "chunkX2"(): integer
public "chunkZ1"(): integer
public "chunkZ2"(): integer
public "chunkY1"(): integer
public "chunkY2"(): integer
public static "entityAccessBox"(arg0: $Level$$Type, arg1: $AABB$$Type): $WorldSectionBox
public static "relevantFluidBox"(arg0: $Level$$Type, arg1: $AABB$$Type): $WorldSectionBox
public static "relevantExpandedBlocksBox"(arg0: $Level$$Type, arg1: $AABB$$Type): $WorldSectionBox
public "matchesRelevantBlocksBox"(arg0: $AABB$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSectionBox$$Type = ({"chunkX1"?: integer, "chunkX2"?: integer, "chunkY1"?: integer, "chunkY2"?: integer, "chunkZ1"?: integer, "chunkZ2"?: integer, "world"?: $Level$$Type}) | ([chunkX1?: integer, chunkX2?: integer, chunkY1?: integer, chunkY2?: integer, chunkZ1?: integer, chunkZ2?: integer, world?: $Level$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldSectionBox_ = $WorldSectionBox$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.tracking.entity.SectionedEntityMovementTracker" {
import {$EntityAccess, $EntityAccess$$Type} from "net.minecraft.world.level.entity.EntityAccess"
import {$WorldSectionBox, $WorldSectionBox$$Type} from "net.caffeinemc.mods.lithium.common.util.tuples.WorldSectionBox"
import {$SectionedEntityMovementListener, $SectionedEntityMovementListener$$Type} from "net.caffeinemc.mods.lithium.common.tracking.entity.SectionedEntityMovementListener"
import {$EntityMovementTrackerSection, $EntityMovementTrackerSection$$Type} from "net.caffeinemc.mods.lithium.common.tracking.entity.EntityMovementTrackerSection"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $SectionedEntityMovementTracker<E extends $EntityAccess, S> {

constructor(arg0: $WorldSectionBox$$Type, arg1: $Class$$Type<(S)>)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "register"(arg0: $ServerLevel$$Type): void
public "unRegister"(arg0: $ServerLevel$$Type): void
public "isUnchangedSince"(arg0: long): boolean
public "listenToEntityMovementOnce"(arg0: $SectionedEntityMovementListener$$Type): void
public "onSectionEnteredRange"(arg0: $EntityMovementTrackerSection$$Type): void
public "onSectionLeftRange"(arg0: $EntityMovementTrackerSection$$Type): void
public "emitEntityMovement"(arg0: integer, arg1: $EntityMovementTrackerSection$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionedEntityMovementTracker$$Type<E, S> = ($SectionedEntityMovementTracker<(E), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SectionedEntityMovementTracker_<E, S> = $SectionedEntityMovementTracker$$Type<(E), (S)>;
}}
declare module "net.caffeinemc.mods.sodium.client.platform.NativeWindowHandle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NativeWindowHandle {

 "getWin32Handle"(): long

(): long
get "win32Handle"(): long
}

export namespace $NativeWindowHandle {
const probejs$$marker: never
}
export class $NativeWindowHandle$$Static implements $NativeWindowHandle {


 "getWin32Handle"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeWindowHandle$$Type = (() => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NativeWindowHandle_ = $NativeWindowHandle$$Type;
}}
declare module "net.caffeinemc.mods.sodium.api.vertex.buffer.VertexBufferWriter" {
import {$MemoryStack, $MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$VertexFormat, $VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"

export interface $VertexBufferWriter {

 "push"(arg0: $MemoryStack$$Type, arg1: long, arg2: integer, arg3: $VertexFormat$$Type): void
 "canUseIntrinsics"(): boolean

(arg0: $MemoryStack, arg1: long, arg2: integer, arg3: $VertexFormat): void
}

export namespace $VertexBufferWriter {
function copyInto(arg0: $VertexBufferWriter$$Type, arg1: $MemoryStack$$Type, arg2: long, arg3: integer, arg4: $VertexFormat$$Type): void
function of(arg0: $VertexConsumer$$Type): $VertexBufferWriter
function tryOf(arg0: $VertexConsumer$$Type): $VertexBufferWriter
const probejs$$marker: never
}
export class $VertexBufferWriter$$Static implements $VertexBufferWriter {


 "push"(arg0: $MemoryStack$$Type, arg1: long, arg2: integer, arg3: $VertexFormat$$Type): void
static "copyInto"(arg0: $VertexBufferWriter$$Type, arg1: $MemoryStack$$Type, arg2: long, arg3: integer, arg4: $VertexFormat$$Type): void
static "of"(arg0: $VertexConsumer$$Type): $VertexBufferWriter
static "tryOf"(arg0: $VertexConsumer$$Type): $VertexBufferWriter
 "canUseIntrinsics"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexBufferWriter$$Type = ((arg0: $MemoryStack, arg1: long, arg2: integer, arg3: $VertexFormat) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexBufferWriter_ = $VertexBufferWriter$$Type;
}}
declare module "net.caffeinemc.mods.sodium.api.blockentity.BlockEntityRenderPredicate" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockEntityRenderPredicate<T extends $BlockEntity> {

 "shouldRender"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: T): boolean

(arg0: $BlockGetter, arg1: $BlockPos, arg2: T): boolean
}

export namespace $BlockEntityRenderPredicate {
const probejs$$marker: never
}
export class $BlockEntityRenderPredicate$$Static<T extends $BlockEntity> implements $BlockEntityRenderPredicate {


 "shouldRender"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: T): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityRenderPredicate$$Type<T> = ((arg0: $BlockGetter, arg1: $BlockPos, arg2: T) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityRenderPredicate_<T> = $BlockEntityRenderPredicate$$Type<(T)>;
}}
declare module "net.caffeinemc.mods.sodium.client.render.vertex.buffer.BufferBuilderExtension" {
import {$MemoryStack, $MemoryStack$$Type} from "org.lwjgl.system.MemoryStack"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$VertexBufferWriter, $VertexBufferWriter$$Type} from "net.caffeinemc.mods.sodium.api.vertex.buffer.VertexBufferWriter"
import {$VertexFormat, $VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"

export interface $BufferBuilderExtension extends $VertexBufferWriter {

 "sodium$duplicateVertex"(): void
 "push"(arg0: $MemoryStack$$Type, arg1: long, arg2: integer, arg3: $VertexFormat$$Type): void
 "canUseIntrinsics"(): boolean
}

export namespace $BufferBuilderExtension {
function copyInto(arg0: $VertexBufferWriter$$Type, arg1: $MemoryStack$$Type, arg2: long, arg3: integer, arg4: $VertexFormat$$Type): void
function of(arg0: $VertexConsumer$$Type): $VertexBufferWriter
function tryOf(arg0: $VertexConsumer$$Type): $VertexBufferWriter
const probejs$$marker: never
}
export class $BufferBuilderExtension$$Static implements $BufferBuilderExtension {


 "sodium$duplicateVertex"(): void
 "push"(arg0: $MemoryStack$$Type, arg1: long, arg2: integer, arg3: $VertexFormat$$Type): void
static "copyInto"(arg0: $VertexBufferWriter$$Type, arg1: $MemoryStack$$Type, arg2: long, arg3: integer, arg4: $VertexFormat$$Type): void
static "of"(arg0: $VertexConsumer$$Type): $VertexBufferWriter
static "tryOf"(arg0: $VertexConsumer$$Type): $VertexBufferWriter
 "canUseIntrinsics"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferBuilderExtension$$Type = ($BufferBuilderExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferBuilderExtension_ = $BufferBuilderExtension$$Type;
}}
declare module "net.caffeinemc.mods.sodium.client.model.quad.properties.ModelQuadFacing" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Vector3fc, $Vector3fc$$Type} from "org.joml.Vector3fc"

export class $ModelQuadFacing extends $Enum<($ModelQuadFacing)> {
static readonly "NEG_Z": $ModelQuadFacing
static readonly "POS_X": $ModelQuadFacing
static readonly "NEG_Y": $ModelQuadFacing
static readonly "ALL": integer
static readonly "POS_Y": $ModelQuadFacing
static readonly "NEG_X": $ModelQuadFacing
static readonly "POS_Z": $ModelQuadFacing
static readonly "OPPOSING_Z": integer
static readonly "OPPOSING_X": integer
static readonly "UNASSIGNED_MASK": integer
static readonly "OPPOSING_Y": integer
static readonly "UNASSIGNED": $ModelQuadFacing
static readonly "PACKED_ALIGNED_NORMALS": (integer)[]
static readonly "ALIGNED_NORMALS": ($Vector3fc)[]
static readonly "VALUES": ($ModelQuadFacing)[]
static readonly "COUNT": integer
static readonly "NONE": integer
static readonly "DIRECTIONS": integer


public static "values"(): ($ModelQuadFacing)[]
public static "valueOf"(arg0: StringJS): $ModelQuadFacing
public "getOpposite"(): $ModelQuadFacing
public "getAxis"(): integer
public static "fromDirection"(arg0: $Direction$$Type): $ModelQuadFacing
public "getSign"(): integer
public static "fromPackedNormal"(arg0: integer): $ModelQuadFacing
public "isAligned"(): boolean
public static "fromNormal"(arg0: float, arg1: float, arg2: float): $ModelQuadFacing
public "getAlignedNormal"(): $Vector3fc
public "getPackedAlignedNormal"(): integer
public static "bitmapHasUnassigned"(arg0: integer): boolean
public static "bitmapIsOpposingAligned"(arg0: integer): boolean
get "opposite"(): $ModelQuadFacing
get "axis"(): integer
get "sign"(): integer
get "aligned"(): boolean
get "alignedNormal"(): $Vector3fc
get "packedAlignedNormal"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelQuadFacing$$Type = (("pos_x") | ("pos_y") | ("pos_z") | ("neg_x") | ("neg_y") | ("neg_z") | ("unassigned"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelQuadFacing_ = $ModelQuadFacing$$Type;
}}
declare module "net.caffeinemc.mods.sodium.mixin.core.render.texture.TextureAtlasAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TextureAtlasAccessor {

 "getWidth"(): integer
 "getHeight"(): integer
get "width"(): integer
get "height"(): integer
}

export namespace $TextureAtlasAccessor {
const probejs$$marker: never
}
export class $TextureAtlasAccessor$$Static implements $TextureAtlasAccessor {


 "getWidth"(): integer
 "getHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasAccessor$$Type = ($TextureAtlasAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureAtlasAccessor_ = $TextureAtlasAccessor$$Type;
}}
declare module "net.caffeinemc.mods.lithium.mixin.block.hopper.EntityAccessor" {
import {$EntityInLevelCallback, $EntityInLevelCallback$$Type} from "net.minecraft.world.level.entity.EntityInLevelCallback"

export interface $EntityAccessor {

 "getChangeListener"(): $EntityInLevelCallback

(): $EntityInLevelCallback$$Type
get "changeListener"(): $EntityInLevelCallback
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
export class $EntityAccessor$$Static implements $EntityAccessor {


 "getChangeListener"(): $EntityInLevelCallback
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$$Type = (() => $EntityInLevelCallback$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAccessor_ = $EntityAccessor$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.world.ChunkRandomSource" {
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$$Type} from "net.minecraft.core.BlockPos$MutableBlockPos"

export interface $ChunkRandomSource {

 "lithium$getRandomPosInChunk"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $BlockPos$MutableBlockPos$$Type): void

(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $BlockPos$MutableBlockPos): void
}

export namespace $ChunkRandomSource {
const probejs$$marker: never
}
export class $ChunkRandomSource$$Static implements $ChunkRandomSource {


 "lithium$getRandomPosInChunk"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $BlockPos$MutableBlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkRandomSource$$Type = ((arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $BlockPos$MutableBlockPos) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkRandomSource_ = $ChunkRandomSource$$Type;
}}
declare module "net.caffeinemc.mods.sodium.mixin.features.render.frapi.ItemRendererAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ItemRendererAccessor {

}

export namespace $ItemRendererAccessor {
function sodium$hasAnimatedTexture(arg0: $ItemStack$$Type): boolean
const probejs$$marker: never
}
export class $ItemRendererAccessor$$Static implements $ItemRendererAccessor {


static "sodium$hasAnimatedTexture"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRendererAccessor$$Type = ($ItemRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRendererAccessor_ = $ItemRendererAccessor$$Type;
}}
declare module "net.caffeinemc.mods.sodium.client.render.viewport.Viewport" {
import {$Frustum, $Frustum$$Type} from "net.caffeinemc.mods.sodium.client.render.viewport.frustum.Frustum"
import {$SectionPos, $SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CameraTransform, $CameraTransform$$Type} from "net.caffeinemc.mods.sodium.client.render.viewport.CameraTransform"
import {$Vector3d, $Vector3d$$Type} from "org.joml.Vector3d"

export class $Viewport {

constructor(arg0: $Frustum$$Type, arg1: $Vector3d$$Type)

public "getTransform"(): $CameraTransform
public "isBoxVisible"(arg0: integer, arg1: integer, arg2: integer, arg3: float, arg4: float, arg5: float): boolean
public "getBlockCoord"(): $BlockPos
public "getChunkCoord"(): $SectionPos
get "transform"(): $CameraTransform
get "blockCoord"(): $BlockPos
get "chunkCoord"(): $SectionPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Viewport$$Type = ($Viewport);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Viewport_ = $Viewport$$Type;
}}
declare module "net.caffeinemc.mods.lithium.common.block.ListeningBlockStatePredicate" {
import {$AtomicBoolean, $AtomicBoolean$$Type} from "java.util.concurrent.atomic.AtomicBoolean"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$TrackedBlockStatePredicate, $TrackedBlockStatePredicate$$Type} from "net.caffeinemc.mods.lithium.common.block.TrackedBlockStatePredicate"

export class $ListeningBlockStatePredicate extends $TrackedBlockStatePredicate {
static readonly "FULLY_INITIALIZED": $AtomicBoolean
static "LISTENING_MASK": integer


public static "not"<T>(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
public static "isEqual"<T>(arg0: any): $Predicate<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListeningBlockStatePredicate$$Type = ($ListeningBlockStatePredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListeningBlockStatePredicate_ = $ListeningBlockStatePredicate$$Type;
}}
declare module "net.caffeinemc.mods.lithium.mixin.minimal_nonvanilla.spawning.PersistentEntitySectionManagerAccessor" {
import {$EntitySectionStorage, $EntitySectionStorage$$Type} from "net.minecraft.world.level.entity.EntitySectionStorage"
import {$EntityAccess, $EntityAccess$$Type} from "net.minecraft.world.level.entity.EntityAccess"

export interface $PersistentEntitySectionManagerAccessor<T extends $EntityAccess> {

 "getCache"(): $EntitySectionStorage<(T)>

(): $EntitySectionStorage$$Type<(T)>
get "cache"(): $EntitySectionStorage<(T)>
}

export namespace $PersistentEntitySectionManagerAccessor {
const probejs$$marker: never
}
export class $PersistentEntitySectionManagerAccessor$$Static<T extends $EntityAccess> implements $PersistentEntitySectionManagerAccessor {


 "getCache"(): $EntitySectionStorage<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PersistentEntitySectionManagerAccessor$$Type<T> = (() => $EntitySectionStorage$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PersistentEntitySectionManagerAccessor_<T> = $PersistentEntitySectionManagerAccessor$$Type<(T)>;
}}
