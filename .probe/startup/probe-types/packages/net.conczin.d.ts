declare module "net.conczin.immersive_furniture.mixin.client.SpriteContentsAccessor" {
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"

export interface $SpriteContentsAccessor {

 "getMipLevelData"(): ($NativeImage)[]
 "immersiveFurniture$getFrameCount"(): integer
get "mipLevelData"(): ($NativeImage)[]
}

export namespace $SpriteContentsAccessor {
const probejs$$marker: never
}
export class $SpriteContentsAccessor$$Static implements $SpriteContentsAccessor {


 "getMipLevelData"(): ($NativeImage)[]
 "immersiveFurniture$getFrameCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAccessor$$Type = ($SpriteContentsAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAccessor_ = $SpriteContentsAccessor$$Type;
}}
declare module "net.conczin.immersive_furniture.data.FurnitureData$ParticleConsumer" {
import {$SimpleParticleType, $SimpleParticleType$$Type} from "net.minecraft.core.particles.SimpleParticleType"

export interface $FurnitureData$ParticleConsumer {

 "addParticle"(arg0: $SimpleParticleType$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float): void

(arg0: $SimpleParticleType, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float): void
}

export namespace $FurnitureData$ParticleConsumer {
const probejs$$marker: never
}
export class $FurnitureData$ParticleConsumer$$Static implements $FurnitureData$ParticleConsumer {


 "addParticle"(arg0: $SimpleParticleType$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnitureData$ParticleConsumer$$Type = ((arg0: $SimpleParticleType, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnitureData$ParticleConsumer_ = $FurnitureData$ParticleConsumer$$Type;
}}
declare module "net.conczin.immersive_furniture.data.FurnitureData$ElementRotationAxes" {
import {$Vector3i, $Vector3i$$Type} from "org.joml.Vector3i"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $FurnitureData$ElementRotationAxes extends $Record {

constructor(arg0: $Vector3f$$Type, arg1: $Vector3i$$Type)
constructor(center: $Vector3f$$Type, right: $Vector3f$$Type, up: $Vector3f$$Type, forward: $Vector3f$$Type)

public "right"(): $Vector3f
public "up"(): $Vector3f
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "center"(): $Vector3f
public "forward"(): $Vector3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnitureData$ElementRotationAxes$$Type = ({"up"?: $Vector3f$$Type, "right"?: $Vector3f$$Type, "forward"?: $Vector3f$$Type, "center"?: $Vector3f$$Type}) | ([up?: $Vector3f$$Type, right?: $Vector3f$$Type, forward?: $Vector3f$$Type, center?: $Vector3f$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnitureData$ElementRotationAxes_ = $FurnitureData$ElementRotationAxes$$Type;
}}
declare module "net.conczin.immersive_furniture.data.FurnitureData$PoseOffset" {
import {$Pose, $Pose$$Type} from "net.minecraft.world.entity.Pose"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $FurnitureData$PoseOffset extends $Record {

constructor(offset: $Vector3f$$Type, pose: $Pose$$Type, rotation: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "offset"(): $Vector3f
public "pose"(): $Pose
public "rotation"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnitureData$PoseOffset$$Type = ({"pose"?: $Pose$$Type, "rotation"?: float, "offset"?: $Vector3f$$Type}) | ([pose?: $Pose$$Type, rotation?: float, offset?: $Vector3f$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnitureData$PoseOffset_ = $FurnitureData$PoseOffset$$Type;
}}
declare module "net.conczin.immersive_furniture.block.LightFurnitureBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FurnitureData, $FurnitureData$$Type} from "net.conczin.immersive_furniture.data.FurnitureData"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFurnitureBlock, $BaseFurnitureBlock$$Type} from "net.conczin.immersive_furniture.block.BaseFurnitureBlock"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LightFurnitureBlock extends $BaseFurnitureBlock {
static readonly "ACTIVE": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "IDENTIFIER": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "LIGHT": $IntegerProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getData"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $FurnitureData
public "toggleLight"(arg0: $FurnitureData$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightFurnitureBlock$$Type = ($LightFurnitureBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightFurnitureBlock_ = $LightFurnitureBlock$$Type;
}}
declare module "net.conczin.immersive_furniture.mixin.client.TextureAtlasAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$SpriteContents, $SpriteContents$$Type} from "net.minecraft.client.renderer.texture.SpriteContents"

export interface $TextureAtlasAccessor {

 "getSprites"(): $List<($SpriteContents)>

(): $List$$Type<($SpriteContents$$Type)>
get "sprites"(): $List<($SpriteContents)>
}

export namespace $TextureAtlasAccessor {
const probejs$$marker: never
}
export class $TextureAtlasAccessor$$Static implements $TextureAtlasAccessor {


 "getSprites"(): $List<($SpriteContents)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasAccessor$$Type = (() => $List$$Type<($SpriteContents$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureAtlasAccessor_ = $TextureAtlasAccessor$$Type;
}}
declare module "net.conczin.immersive_furniture.data.FurnitureData$Element" {
import {$FurnitureData$PlayerPose, $FurnitureData$PlayerPose$$Type} from "net.conczin.immersive_furniture.data.FurnitureData$PlayerPose"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FurnitureData$ParticleEmitter, $FurnitureData$ParticleEmitter$$Type} from "net.conczin.immersive_furniture.data.FurnitureData$ParticleEmitter"
import {$FurnitureData$Material, $FurnitureData$Material$$Type} from "net.conczin.immersive_furniture.data.FurnitureData$Material"
import {$Vector3i, $Vector3i$$Type} from "org.joml.Vector3i"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$FurnitureData$ElementBakedTextures, $FurnitureData$ElementBakedTextures$$Type} from "net.conczin.immersive_furniture.data.FurnitureData$ElementBakedTextures"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$FurnitureData$ElementRotationAxes, $FurnitureData$ElementRotationAxes$$Type} from "net.conczin.immersive_furniture.data.FurnitureData$ElementRotationAxes"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$FurnitureData$ElementType, $FurnitureData$ElementType$$Type} from "net.conczin.immersive_furniture.data.FurnitureData$ElementType"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$FurnitureData$SoundEmitter, $FurnitureData$SoundEmitter$$Type} from "net.conczin.immersive_furniture.data.FurnitureData$SoundEmitter"
import {$ElementRotation, $ElementRotation$$Type} from "net.conczin.immersive_furniture.data.ElementRotation"
import {$FurnitureData$Sprite, $FurnitureData$Sprite$$Type} from "net.conczin.immersive_furniture.data.FurnitureData$Sprite"

export class $FurnitureData$Element {
 "color": integer
 "rotation": float
 "rotationAxes": $FurnitureData$ElementRotationAxes
 "axis": $Direction$Axis
 "type": $FurnitureData$ElementType
 "soundEmitter": $FurnitureData$SoundEmitter
 "emission": integer
 "material": $FurnitureData$Material
 "playerPose": $FurnitureData$PlayerPose
 "sprite": $FurnitureData$Sprite
 "bakedTextures": $FurnitureData$ElementBakedTextures
 "from": $Vector3f
 "to": $Vector3f
 "particleEmitter": $FurnitureData$ParticleEmitter
 "mask": integer

constructor()
constructor(arg0: $FurnitureData$Element$$Type)
constructor(arg0: $CompoundTag$$Type)

public "move"(arg0: float, arg1: float, arg2: float): void
public "getSize"(): $Vector3i
public "getOrigin"(): $Vector3f
public "contains"(arg0: $Vector3f$$Type): boolean
public "contains"(arg0: $Vector3f$$Type, arg1: float): boolean
public "toTag"(): $CompoundTag
public "isFlat"(): boolean
public "getCenter"(): $Vector3f
public "getVolume"(): float
public "sanityCheck"(): void
public "getRotation"(): $ElementRotation
public "isMasked"(arg0: integer): boolean
public "getRotationAxes"(): $FurnitureData$ElementRotationAxes
public "sampleRandomPosition"(arg0: $RandomSource$$Type, arg1: $Direction$$Type): $Vector3f
public "getGlobalDirectionNormal"(arg0: $Direction$$Type): $Vector3f
get "size"(): $Vector3i
get "origin"(): $Vector3f
get "flat"(): boolean
get "center"(): $Vector3f
get "volume"(): float
get "rotation"(): $ElementRotation
get "rotationAxes"(): $FurnitureData$ElementRotationAxes
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnitureData$Element$$Type = ($FurnitureData$Element);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnitureData$Element_ = $FurnitureData$Element$$Type;
}}
declare module "net.conczin.immersive_furniture.data.FurnitureData$ParticleEmitter" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SimpleParticleType, $SimpleParticleType$$Type} from "net.minecraft.core.particles.SimpleParticleType"

export class $FurnitureData$ParticleEmitter {
 "velocityDirectional": float
 "velocityRandom": float
 "amount": float
 "particle": $ResourceLocation
 "onInteract": boolean

constructor(arg0: $FurnitureData$ParticleEmitter$$Type)
constructor(arg0: $CompoundTag$$Type)
constructor()

public "toTag"(): $CompoundTag
public "getParticle"(): $SimpleParticleType
get "particle"(): $SimpleParticleType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnitureData$ParticleEmitter$$Type = ($FurnitureData$ParticleEmitter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnitureData$ParticleEmitter_ = $FurnitureData$ParticleEmitter$$Type;
}}
declare module "net.conczin.immersive_furniture.block.ArtisansWorkstationBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ArtisansWorkstationBlock extends $Block {
static readonly "SHAPE_NORTH": $VoxelShape
static readonly "SHAPE_SOUTH": $VoxelShape
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "SHAPE_WEST": $VoxelShape
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "SHAPE_EAST": $VoxelShape
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtisansWorkstationBlock$$Type = ($ArtisansWorkstationBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtisansWorkstationBlock_ = $ArtisansWorkstationBlock$$Type;
}}
declare module "net.conczin.immersive_furniture.data.FurnitureData$PlayerPose" {
import {$Pose, $Pose$$Type} from "net.minecraft.world.entity.Pose"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export class $FurnitureData$PlayerPose {
 "pose": $Pose

constructor(arg0: $FurnitureData$PlayerPose$$Type)
constructor(arg0: $CompoundTag$$Type)
constructor()

public "toTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnitureData$PlayerPose$$Type = ($FurnitureData$PlayerPose);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnitureData$PlayerPose_ = $FurnitureData$PlayerPose$$Type;
}}
declare module "net.conczin.immersive_furniture.data.FurnitureData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Vector3i, $Vector3i$$Type} from "org.joml.Vector3i"
import {$FurnitureData$Element, $FurnitureData$Element$$Type} from "net.conczin.immersive_furniture.data.FurnitureData$Element"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$FurnitureData$PoseOffset, $FurnitureData$PoseOffset$$Type} from "net.conczin.immersive_furniture.data.FurnitureData$PoseOffset"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$FurnitureData$ParticleConsumer, $FurnitureData$ParticleConsumer$$Type} from "net.conczin.immersive_furniture.data.FurnitureData$ParticleConsumer"

export class $FurnitureData {
static readonly "CODEC": $Codec<($FurnitureData)>
 "sources": $Set<(StringJS)>
 "author": StringJS
 "contentid": integer
 "toggleWithRightClick": boolean
 "originalAuthor": StringJS
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($FurnitureData)>
 "inventorySize": integer
 "dependencies": $Set<(StringJS)>
 "lastTick": long
 "lightLevel": integer
 "size": $Vector3i
 "toggleLight": boolean
readonly "elements": $List<($FurnitureData$Element)>
 "name": StringJS
 "tag": StringJS
static readonly "EMPTY": $FurnitureData

constructor()
constructor(arg0: $FurnitureData$$Type)
constructor(arg0: $CompoundTag$$Type)

public "computeHash"(): StringJS
public "tick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: integer, arg3: $Direction$$Type, arg4: $RandomSource$$Type, arg5: $FurnitureData$ParticleConsumer$$Type, arg6: boolean, arg7: boolean): void
public "dirty"(): void
public "getShape"(arg0: $Direction$$Type, arg1: integer): $VoxelShape
public "getShape"(arg0: $Direction$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $VoxelShape
public "getSize"(): double
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "toTag"(): $CompoundTag
public "getVolume"(): integer
public "getCost"(): integer
public "getTooltip"(arg0: boolean): $List<($Component)>
public "getHash"(): StringJS
public "canSit"(): boolean
public "getRotatedX"(arg0: $Direction$$Type, arg1: integer, arg2: integer): integer
public "getRotatedZ"(arg0: $Direction$$Type, arg1: integer, arg2: integer): integer
public "computeShape"(arg0: $Direction$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $VoxelShape
public "getClosestPose"(arg0: $Vec3$$Type, arg1: $Direction$$Type): $FurnitureData$PoseOffset
public "hasSounds"(): boolean
public "hasParticles"(): boolean
public "getShapeLazy"(arg0: $Direction$$Type): $VoxelShape
public "boundingBox"(): $AABB
public "canSleep"(): boolean
public "hasDisplayItems"(): boolean
public "requiresBlockEntity"(): boolean
public "getUniqueSolidStates"(): $Set<(integer)>
public "playInteractSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: integer, arg3: $Player$$Type): void
public "emitInteractParticles"(arg0: $BlockPos$$Type, arg1: $Direction$$Type, arg2: integer, arg3: $Player$$Type, arg4: $FurnitureData$ParticleConsumer$$Type, arg5: boolean): void
get "size"(): double
get "volume"(): integer
get "cost"(): integer
get "hash"(): StringJS
get "uniqueSolidStates"(): $Set<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnitureData$$Type = ($FurnitureData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnitureData_ = $FurnitureData$$Type;
}}
declare module "net.conczin.immersive_furniture.block.BaseFurnitureBlock" {
import {$LootParams$Builder, $LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$FurnitureData, $FurnitureData$$Type} from "net.conczin.immersive_furniture.data.FurnitureData"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BaseFurnitureBlock extends $Block implements $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "ACTIVE": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getData"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $FurnitureData
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "trigger"(arg0: $FurnitureData$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: boolean): boolean
public "asItem"(): $Item
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "onInteract"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: boolean, arg4: $Player$$Type): void
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "toggleLight"(arg0: $FurnitureData$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type): $BlockState
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public static "getProxyPosition"(arg0: $BlockPos$$Type, arg1: $Direction$$Type, arg2: integer, arg3: integer, arg4: integer): $BlockPos
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseFurnitureBlock$$Type = ($BaseFurnitureBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseFurnitureBlock_ = $BaseFurnitureBlock$$Type;
}}
declare module "net.conczin.immersive_furniture.data.FurnitureData$Material" {
import {$FurnitureData$LightMaterialEffect, $FurnitureData$LightMaterialEffect$$Type} from "net.conczin.immersive_furniture.data.FurnitureData$LightMaterialEffect"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FurnitureData$MaterialAxis, $FurnitureData$MaterialAxis$$Type} from "net.conczin.immersive_furniture.data.FurnitureData$MaterialAxis"
import {$TransparencyType, $TransparencyType$$Type} from "net.conczin.immersive_furniture.data.TransparencyType"
import {$FurnitureData$WrapMode, $FurnitureData$WrapMode$$Type} from "net.conczin.immersive_furniture.data.FurnitureData$WrapMode"

export class $FurnitureData$Material {
 "margin": integer
 "transparency": $TransparencyType
 "source": $ResourceLocation
 "lightEffect": $FurnitureData$LightMaterialEffect
 "axis": $FurnitureData$MaterialAxis
 "wrap": $FurnitureData$WrapMode

constructor(arg0: $FurnitureData$Material$$Type)
constructor(arg0: $CompoundTag$$Type)
constructor()

public "toTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnitureData$Material$$Type = ($FurnitureData$Material);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnitureData$Material_ = $FurnitureData$Material$$Type;
}}
declare module "net.conczin.immersive_furniture.block.FurnitureBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FurnitureData, $FurnitureData$$Type} from "net.conczin.immersive_furniture.data.FurnitureData"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BaseFurnitureBlock, $BaseFurnitureBlock$$Type} from "net.conczin.immersive_furniture.block.BaseFurnitureBlock"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FurnitureBlock extends $BaseFurnitureBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "ACTIVE": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "IDENTIFIER": $IntegerProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getData"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $FurnitureData
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnitureBlock$$Type = ($FurnitureBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnitureBlock_ = $FurnitureBlock$$Type;
}}
declare module "net.conczin.immersive_furniture.data.FurnitureData$Sprite" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export class $FurnitureData$Sprite {
 "tiled": boolean
 "item": boolean
 "size": float
 "rotation": integer
 "sprite": $ResourceLocation
 "align": boolean

constructor(arg0: $FurnitureData$Sprite$$Type)
constructor(arg0: $CompoundTag$$Type)
constructor()

public "toTag"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnitureData$Sprite$$Type = ($FurnitureData$Sprite);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnitureData$Sprite_ = $FurnitureData$Sprite$$Type;
}}
declare module "net.conczin.immersive_furniture.data.FurnitureData$LightMaterialEffect" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export class $FurnitureData$LightMaterialEffect {
 "saturation": float
 "brightness": float
 "contrast": float
 "hue": float
 "roundness": float
 "value": float

constructor()
constructor(arg0: $FurnitureData$LightMaterialEffect$$Type)

public "load"(arg0: $CompoundTag$$Type): void
public "save"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnitureData$LightMaterialEffect$$Type = ($FurnitureData$LightMaterialEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnitureData$LightMaterialEffect_ = $FurnitureData$LightMaterialEffect$$Type;
}}
declare module "net.conczin.immersive_furniture.data.FurnitureData$MaterialAxis" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $FurnitureData$MaterialAxis extends $Enum<($FurnitureData$MaterialAxis)> {
static readonly "X": $FurnitureData$MaterialAxis
static readonly "Y": $FurnitureData$MaterialAxis
static readonly "Z": $FurnitureData$MaterialAxis


public static "values"(): ($FurnitureData$MaterialAxis)[]
public static "valueOf"(arg0: StringJS): $FurnitureData$MaterialAxis
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnitureData$MaterialAxis$$Type = (("x") | ("y") | ("z"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnitureData$MaterialAxis_ = $FurnitureData$MaterialAxis$$Type;
}}
declare module "net.conczin.immersive_furniture.data.FurnitureData$WrapMode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $FurnitureData$WrapMode extends $Enum<($FurnitureData$WrapMode)> {
static readonly "EXPAND": $FurnitureData$WrapMode
static readonly "REPEAT": $FurnitureData$WrapMode


public static "values"(): ($FurnitureData$WrapMode)[]
public static "valueOf"(arg0: StringJS): $FurnitureData$WrapMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnitureData$WrapMode$$Type = (("expand") | ("repeat"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnitureData$WrapMode_ = $FurnitureData$WrapMode$$Type;
}}
declare module "net.conczin.immersive_furniture.data.FurnitureData$ElementType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $FurnitureData$ElementType extends $Enum<($FurnitureData$ElementType)> {
static readonly "PARTICLE_EMITTER": $FurnitureData$ElementType
static readonly "ELEMENT": $FurnitureData$ElementType
static readonly "PLAYER_POSE": $FurnitureData$ElementType
static readonly "SOUND_EMITTER": $FurnitureData$ElementType
static readonly "SPRITE": $FurnitureData$ElementType


public static "values"(): ($FurnitureData$ElementType)[]
public static "valueOf"(arg0: StringJS): $FurnitureData$ElementType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnitureData$ElementType$$Type = (("element") | ("particle_emitter") | ("sound_emitter") | ("player_pose") | ("sprite"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnitureData$ElementType_ = $FurnitureData$ElementType$$Type;
}}
declare module "net.conczin.immersive_furniture.data.FurnitureData$SoundEmitter" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"

export class $FurnitureData$SoundEmitter {
 "volume": float
 "sound": $ResourceLocation
 "pitch": float
 "onInteract": boolean
 "frequency": float

constructor(arg0: $FurnitureData$SoundEmitter$$Type)
constructor(arg0: $CompoundTag$$Type)
constructor()

public "toTag"(): $CompoundTag
public "getSoundEvent"(): $SoundEvent
get "soundEvent"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnitureData$SoundEmitter$$Type = ($FurnitureData$SoundEmitter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnitureData$SoundEmitter_ = $FurnitureData$SoundEmitter$$Type;
}}
declare module "net.conczin.immersive_furniture.item.FurnitureItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FurnitureData, $FurnitureData$$Type} from "net.conczin.immersive_furniture.data.FurnitureData"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $FurnitureItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
/**
 * 
 * @deprecated
 */
 "block": $Block
static readonly "FURNITURE": $DataComponentType<($FurnitureData)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "getData"(arg0: $ItemStack$$Type): $FurnitureData
public static "setData"(arg0: $ItemStack$$Type, arg1: $FurnitureData$$Type): void
public "getName"(arg0: $ItemStack$$Type): $Component
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnitureItem$$Type = ($FurnitureItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnitureItem_ = $FurnitureItem$$Type;
}}
declare module "net.conczin.immersive_furniture.data.FurnitureData$ElementBakedTextures" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export class $FurnitureData$ElementBakedTextures {
 "textures": $Map<($Direction), ($Map<(integer), ((integer)[])>)>

constructor()
constructor(arg0: $CompoundTag$$Type, arg1: $CompoundTag$$Type)

public "get"(arg0: $Direction$$Type, arg1: integer): (integer)[]
public "put"(arg0: $Direction$$Type, arg1: integer, arg2: (integer)[]): void
public "clear"(): void
public "save"(arg0: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnitureData$ElementBakedTextures$$Type = ($FurnitureData$ElementBakedTextures);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnitureData$ElementBakedTextures_ = $FurnitureData$ElementBakedTextures$$Type;
}}
declare module "net.conczin.immersive_furniture.data.ElementRotation" {
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ElementRotation extends $Record {

constructor(origin: $Vector3f$$Type, axis: $Direction$Axis$$Type, angle: float, rescale: boolean)

public "origin"(): $Vector3f
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "angle"(): float
public "axis"(): $Direction$Axis
public "rescale"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementRotation$$Type = ({"angle"?: float, "origin"?: $Vector3f$$Type, "rescale"?: boolean, "axis"?: $Direction$Axis$$Type}) | ([angle?: float, origin?: $Vector3f$$Type, rescale?: boolean, axis?: $Direction$Axis$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElementRotation_ = $ElementRotation$$Type;
}}
declare module "net.conczin.immersive_furniture.block.EntityFurnitureBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FurnitureData, $FurnitureData$$Type} from "net.conczin.immersive_furniture.data.FurnitureData"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BaseFurnitureBlock, $BaseFurnitureBlock$$Type} from "net.conczin.immersive_furniture.block.BaseFurnitureBlock"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $EntityFurnitureBlock extends $BaseFurnitureBlock implements $EntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "ACTIVE": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "LIGHT": $IntegerProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getData"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $FurnitureData
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "toggleLight"(arg0: $FurnitureData$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityFurnitureBlock$$Type = ($EntityFurnitureBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityFurnitureBlock_ = $EntityFurnitureBlock$$Type;
}}
declare module "net.conczin.immersive_furniture.data.TransparencyType" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $TransparencyType extends $Enum<($TransparencyType)> implements $StringRepresentable {
static readonly "CUTOUT": $TransparencyType
static readonly "TRANSLUCENT": $TransparencyType
static readonly "CUTOUT_MIPPED": $TransparencyType
static readonly "SOLID": $TransparencyType


public "toString"(): StringJS
public static "values"(): ($TransparencyType)[]
public static "valueOf"(arg0: StringJS): $TransparencyType
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransparencyType$$Type = (("solid") | ("cutout_mipped") | ("cutout") | ("translucent"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransparencyType_ = $TransparencyType$$Type;
}}
declare module "net.conczin.immersive_furniture.block.FurnitureProxyBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FurnitureProxyBlock extends $Block {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "OFFSET_Z": $IntegerProperty
static readonly "INSTANT": float
static readonly "OFFSET_X": $IntegerProperty
static readonly "OFFSET_Y": $IntegerProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getBasePos"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type): $BlockPos
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnitureProxyBlock$$Type = ($FurnitureProxyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnitureProxyBlock_ = $FurnitureProxyBlock$$Type;
}}
