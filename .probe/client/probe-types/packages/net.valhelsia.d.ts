declare module "net.valhelsia.valhelsia_core.api.common.registry.helper.RegistryHelper" {
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$RegistryClass, $RegistryClass$$Type} from "net.valhelsia.valhelsia_core.api.common.registry.RegistryClass"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export class $RegistryHelper<T, R extends $RegistryClass> {


public "getRegistry"(): $ResourceKey<($Registry<(T)>)>
public "getModId"(): StringJS
public "getRegistryClasses"(): $ImmutableList<($Class<(any)>)>
get "registry"(): $ResourceKey<($Registry<(T)>)>
get "modId"(): StringJS
get "registryClasses"(): $ImmutableList<($Class<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryHelper$$Type<T, R> = ($RegistryHelper<(T), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryHelper_<T, R> = $RegistryHelper$$Type<(T), (R)>;
}}
declare module "net.valhelsia.valhelsia_furniture.common.block.SeatableBlock" {
import {$SeatEntity$EjectType, $SeatEntity$EjectType$$Type} from "net.valhelsia.valhelsia_furniture.common.entity.SeatEntity$EjectType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EntityGetter, $EntityGetter$$Type} from "net.minecraft.world.level.EntityGetter"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $SeatableBlock {

 "sitOnBlock"(level: $Level$$Type, pos: $BlockPos$$Type, entity: $LivingEntity$$Type): void
 "isSeatOccupied"(entityGetter: $EntityGetter$$Type, pos: $BlockPos$$Type): boolean
 "getEjectType"(): $SeatEntity$EjectType
 "trySitEntityOnBlock"(level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): void
 "getRidingOffset"(): double

(): $SeatEntity$EjectType$$Type
get "ejectType"(): $SeatEntity$EjectType
get "ridingOffset"(): double
}

export namespace $SeatableBlock {
const probejs$$marker: never
}
export class $SeatableBlock$$Static implements $SeatableBlock {


 "sitOnBlock"(level: $Level$$Type, pos: $BlockPos$$Type, entity: $LivingEntity$$Type): void
 "isSeatOccupied"(entityGetter: $EntityGetter$$Type, pos: $BlockPos$$Type): boolean
 "getEjectType"(): $SeatEntity$EjectType
 "trySitEntityOnBlock"(level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): void
 "getRidingOffset"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SeatableBlock$$Type = (() => $SeatEntity$EjectType$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SeatableBlock_ = $SeatableBlock$$Type;
}}
declare module "net.valhelsia.valhelsia_furniture.common.block.ClosedCurtainBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$OpenCurtainBlock, $OpenCurtainBlock$$Type} from "net.valhelsia.valhelsia_furniture.common.block.OpenCurtainBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$ClosedCurtainPart, $ClosedCurtainPart$$Type} from "net.valhelsia.valhelsia_furniture.common.block.properties.ClosedCurtainPart"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$AbstractCurtainBlock, $AbstractCurtainBlock$$Type} from "net.valhelsia.valhelsia_furniture.common.block.AbstractCurtainBlock"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ClosedCurtainBlock extends $AbstractCurtainBlock<($ClosedCurtainPart)> {
static readonly "TOP_SHAPES": $Map<($Direction), ($VoxelShape)>
static readonly "SHAPES": $Map<($Direction), ($VoxelShape)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "BRACKET_SHAPES": $Map<($Direction), ($VoxelShape)>
static "PART": $EnumProperty<($ClosedCurtainPart)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(color: $DyeColor$$Type, properties: $BlockBehaviour$Properties$$Type)

public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "getOpenBlock"(): $OpenCurtainBlock
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getCollisionShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "asHolder"(): $Holder<(any)>
get "openBlock"(): $OpenCurtainBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClosedCurtainBlock$$Type = ($ClosedCurtainBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClosedCurtainBlock_ = $ClosedCurtainBlock$$Type;
}}
declare module "net.valhelsia.valhelsia_furniture.common.block.DeskDrawerBlock" {
import {$TextureSlot, $TextureSlot$$Type} from "net.minecraft.data.models.model.TextureSlot"
import {$WoodType, $WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$DeskBlock, $DeskBlock$$Type} from "net.valhelsia.valhelsia_furniture.common.block.DeskBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map, $Map$$Type} from "java.util.Map"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $DeskDrawerBlock extends $DeskBlock implements $EntityBlock {
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
static readonly "RIGHT": $BooleanProperty
static readonly "VARIANT_TEXTURES": $Map<(StringJS), ($List<($TextureSlot)>)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "LEFT": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(woodType: $WoodType$$Type, tag: $TagKey$$Type<($Block)>, properties: $BlockBehaviour$Properties$$Type)

public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hit: $BlockHitResult$$Type): $InteractionResult
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeskDrawerBlock$$Type = ($DeskDrawerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeskDrawerBlock_ = $DeskDrawerBlock$$Type;
}}
declare module "net.valhelsia.valhelsia_furniture.common.block.DeskBlock" {
import {$TextureSlot, $TextureSlot$$Type} from "net.minecraft.data.models.model.TextureSlot"
import {$WoodType, $WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $DeskBlock extends $Block implements $SimpleWaterloggedBlock {
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
static readonly "RIGHT": $BooleanProperty
static readonly "VARIANT_TEXTURES": $Map<(StringJS), ($List<($TextureSlot)>)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "LEFT": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(woodType: $WoodType$$Type, tag: $TagKey$$Type<($Block)>, properties: $BlockBehaviour$Properties$$Type)

public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "getWoodType"(): $WoodType
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "hasSameFacing"(state: $BlockState$$Type, facing: $Direction$$Type): boolean
public "isCenterPart"(state: $BlockState$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "useShapeForLightOcclusion"(state: $BlockState$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "woodType"(): $WoodType
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeskBlock$$Type = ($DeskBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeskBlock_ = $DeskBlock$$Type;
}}
declare module "net.valhelsia.valhelsia_core.api.common.world.structure.jigsaw.JigsawBuilder" {
import {$JigsawBuilder$ElementFunction, $JigsawBuilder$ElementFunction$$Type} from "net.valhelsia.valhelsia_core.api.common.world.structure.jigsaw.JigsawBuilder$ElementFunction"
import {$StructureProcessorList, $StructureProcessorList$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorList"
import {$StructureTemplatePool$Projection, $StructureTemplatePool$Projection$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool$Projection"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$TerrainAdjustment, $TerrainAdjustment$$Type} from "net.minecraft.world.level.levelgen.structure.TerrainAdjustment"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BootstrapContext, $BootstrapContext$$Type} from "net.minecraft.data.worldgen.BootstrapContext"

export class $JigsawBuilder {


public "element"(location: StringJS, terrainAdjustment: $TerrainAdjustment$$Type): $JigsawBuilder
public "element"(location: StringJS): $JigsawBuilder
public "element"(location: StringJS, weight: integer, terrainAdjustment: $TerrainAdjustment$$Type): $JigsawBuilder
public "element"(location: StringJS, weight: integer): $JigsawBuilder
public "build"(modId: StringJS, terrainAdjustment: $TerrainAdjustment$$Type): void
public static "builder"(key: $ResourceKey$$Type<($StructureTemplatePool)>, folder: StringJS, context: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, elementFunction: $JigsawBuilder$ElementFunction$$Type): $JigsawBuilder
public static "builder"(key: $ResourceKey$$Type<($StructureTemplatePool)>, context: $BootstrapContext$$Type<($StructureTemplatePool$$Type)>, elementFunction: $JigsawBuilder$ElementFunction$$Type): $JigsawBuilder
public "processors"(processors: $ResourceKey$$Type<($StructureProcessorList)>): $JigsawBuilder
public "projection"(projection: $StructureTemplatePool$Projection$$Type): $JigsawBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JigsawBuilder$$Type = ($JigsawBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JigsawBuilder_ = $JigsawBuilder$$Type;
}}
declare module "net.valhelsia.valhelsia_furniture.common.block.properties.CurtainPart" {
import {$ModelTemplate, $ModelTemplate$$Type} from "net.minecraft.data.models.model.ModelTemplate"

export interface $CurtainPart {

 "getName"(): StringJS
 "getTopTexture"(): StringJS
 "isTopOrSingle"(): boolean
 "isSingleRow"(): boolean
 "isSingle"(): boolean
 "getModelName"(): StringJS
 "isBottomOrSingle"(): boolean
 "getModelTemplate"(): $ModelTemplate
 "getBottomTexture"(): StringJS
get "name"(): StringJS
get "topTexture"(): StringJS
get "topOrSingle"(): boolean
get "singleRow"(): boolean
get "single"(): boolean
get "modelName"(): StringJS
get "bottomOrSingle"(): boolean
get "modelTemplate"(): $ModelTemplate
get "bottomTexture"(): StringJS
}

export namespace $CurtainPart {
const probejs$$marker: never
}
export class $CurtainPart$$Static implements $CurtainPart {


 "getName"(): StringJS
 "getTopTexture"(): StringJS
 "isTopOrSingle"(): boolean
 "isSingleRow"(): boolean
 "isSingle"(): boolean
 "getModelName"(): StringJS
 "isBottomOrSingle"(): boolean
 "getModelTemplate"(): $ModelTemplate
 "getBottomTexture"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurtainPart$$Type = ($CurtainPart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurtainPart_ = $CurtainPart$$Type;
}}
declare module "net.valhelsia.valhelsia_furniture.common.block.OpenCurtainBlock" {
import {$OpenCurtainPart, $OpenCurtainPart$$Type} from "net.valhelsia.valhelsia_furniture.common.block.properties.OpenCurtainPart"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map, $Map$$Type} from "java.util.Map"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$AbstractCurtainBlock, $AbstractCurtainBlock$$Type} from "net.valhelsia.valhelsia_furniture.common.block.AbstractCurtainBlock"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ClosedCurtainBlock, $ClosedCurtainBlock$$Type} from "net.valhelsia.valhelsia_furniture.common.block.ClosedCurtainBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $OpenCurtainBlock extends $AbstractCurtainBlock<($OpenCurtainPart)> {
static readonly "TOP_SHAPES": $Map<($Direction), ($VoxelShape)>
static readonly "SHAPES": $Map<($Direction), ($VoxelShape)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "BRACKET_SHAPES": $Map<($Direction), ($VoxelShape)>
static "PART": $EnumProperty<($OpenCurtainPart)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(color: $DyeColor$$Type, properties: $BlockBehaviour$Properties$$Type)

public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "getClosedBlock"(): $ClosedCurtainBlock
public "getCollisionShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getCloneItemStack"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
get "closedBlock"(): $ClosedCurtainBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OpenCurtainBlock$$Type = ($OpenCurtainBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OpenCurtainBlock_ = $OpenCurtainBlock$$Type;
}}
declare module "net.valhelsia.valhelsia_furniture.common.block.UpholsteredChairBlock" {
import {$WoodType, $WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ChairBlock, $ChairBlock$$Type} from "net.valhelsia.valhelsia_furniture.common.block.ChairBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $UpholsteredChairBlock extends $ChairBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
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

constructor(woodType: $WoodType$$Type, properties: $BlockBehaviour$Properties$$Type)
constructor(woodType: $WoodType$$Type, color: $DyeColor$$Type, properties: $BlockBehaviour$Properties$$Type)

public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getDescriptionId"(): StringJS
public "asHolder"(): $Holder<(any)>
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpholsteredChairBlock$$Type = ($UpholsteredChairBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpholsteredChairBlock_ = $UpholsteredChairBlock$$Type;
}}
declare module "net.valhelsia.valhelsia_furniture.common.block.StoolBlock" {
import {$WoodType, $WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$SeatableBlock, $SeatableBlock$$Type} from "net.valhelsia.valhelsia_furniture.common.block.SeatableBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$SeatEntity$EjectType, $SeatEntity$EjectType$$Type} from "net.valhelsia.valhelsia_furniture.common.entity.SeatEntity$EjectType"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EntityGetter, $EntityGetter$$Type} from "net.minecraft.world.level.EntityGetter"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $StoolBlock extends $Block implements $SimpleWaterloggedBlock, $SeatableBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "ROTATED": $BooleanProperty
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
 "hasCollision": boolean

constructor(woodType: $WoodType$$Type, properties: $BlockBehaviour$Properties$$Type)
constructor(woodType: $WoodType$$Type, color: $DyeColor$$Type, properties: $BlockBehaviour$Properties$$Type)

public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hit: $BlockHitResult$$Type): $InteractionResult
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "getWoodType"(): $WoodType
public "entityInside"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): void
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getColor"(): $DyeColor
public "getEjectType"(): $SeatEntity$EjectType
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "neighborChanged"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, block: $Block$$Type, fromPos: $BlockPos$$Type, isMoving: boolean): void
public "getAnalogOutputSignal"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): integer
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, list: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public "getDescriptionId"(): StringJS
public "useShapeForLightOcclusion"(state: $BlockState$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "sitOnBlock"(level: $Level$$Type, pos: $BlockPos$$Type, entity: $LivingEntity$$Type): void
public "isSeatOccupied"(entityGetter: $EntityGetter$$Type, pos: $BlockPos$$Type): boolean
public "trySitEntityOnBlock"(level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): void
public "getRidingOffset"(): double
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "woodType"(): $WoodType
get "color"(): $DyeColor
get "ejectType"(): $SeatEntity$EjectType
get "descriptionId"(): StringJS
get "pickupSound"(): $Optional<($SoundEvent)>
get "ridingOffset"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StoolBlock$$Type = ($StoolBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StoolBlock_ = $StoolBlock$$Type;
}}
declare module "net.valhelsia.valhelsia_furniture.common.block.ChairBlock" {
import {$WoodType, $WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$SeatableBlock, $SeatableBlock$$Type} from "net.valhelsia.valhelsia_furniture.common.block.SeatableBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$SeatEntity$EjectType, $SeatEntity$EjectType$$Type} from "net.valhelsia.valhelsia_furniture.common.entity.SeatEntity$EjectType"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EntityGetter, $EntityGetter$$Type} from "net.minecraft.world.level.EntityGetter"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ChairBlock extends $Block implements $SimpleWaterloggedBlock, $SeatableBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
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

constructor(woodType: $WoodType$$Type, properties: $BlockBehaviour$Properties$$Type)
constructor(woodType: $WoodType$$Type, color: $DyeColor$$Type, properties: $BlockBehaviour$Properties$$Type)

public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "getWoodType"(): $WoodType
public "entityInside"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): void
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getColor"(): $DyeColor
public "getEjectType"(): $SeatEntity$EjectType
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "neighborChanged"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, block: $Block$$Type, fromPos: $BlockPos$$Type, isMoving: boolean): void
public "getAnalogOutputSignal"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): integer
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, list: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public "getDescriptionId"(): StringJS
public "useShapeForLightOcclusion"(state: $BlockState$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "sitOnBlock"(level: $Level$$Type, pos: $BlockPos$$Type, entity: $LivingEntity$$Type): void
public "isSeatOccupied"(entityGetter: $EntityGetter$$Type, pos: $BlockPos$$Type): boolean
public "trySitEntityOnBlock"(level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): void
public "getRidingOffset"(): double
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "woodType"(): $WoodType
get "color"(): $DyeColor
get "ejectType"(): $SeatEntity$EjectType
get "descriptionId"(): StringJS
get "pickupSound"(): $Optional<($SoundEvent)>
get "ridingOffset"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChairBlock$$Type = ($ChairBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChairBlock_ = $ChairBlock$$Type;
}}
declare module "net.valhelsia.valhelsia_core.api.common.registry.helper.MappedRegistryHelper" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$RegistryClass, $RegistryClass$$Type} from "net.valhelsia.valhelsia_core.api.common.registry.RegistryClass"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$RegistryEntry, $RegistryEntry$$Type} from "net.valhelsia.valhelsia_core.api.common.registry.RegistryEntry"
import {$RegistryHelper, $RegistryHelper$$Type} from "net.valhelsia.valhelsia_core.api.common.registry.helper.RegistryHelper"

export class $MappedRegistryHelper<T> extends $RegistryHelper<(T), ($RegistryClass)> {

constructor(registry: $ResourceKey$$Type<($Registry<(T)>)>, modId: StringJS, registryClasses: $ImmutableList$$Type<($Class$$Type<(any)>)>)

public "register"<O extends T>(name: StringJS, object: $Supplier$$Type<(O)>): $RegistryEntry<(T), (O)>
public "getRegistryClasses"(): $ImmutableList<($Class<(any)>)>
public "getRegistryEntries"(): $Collection<($RegistryEntry<(T), (T)>)>
public "internalRegister"(): void
public "registerInternal"<O extends T, E extends $RegistryEntry<(T), (O)>>(name: StringJS, object: $Supplier$$Type<(O)>): E
get "registryClasses"(): $ImmutableList<($Class<(any)>)>
get "registryEntries"(): $Collection<($RegistryEntry<(T), (T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MappedRegistryHelper$$Type<T> = ($MappedRegistryHelper<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MappedRegistryHelper_<T> = $MappedRegistryHelper$$Type<(T)>;
}}
declare module "net.valhelsia.valhelsia_core.api.common.util.ItemStackListGetter" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export interface $ItemStackListGetter {

 "getStacks"(): $NonNullList<($ItemStack)>

(): $NonNullList$$Type<($ItemStack$$Type)>
get "stacks"(): $NonNullList<($ItemStack)>
}

export namespace $ItemStackListGetter {
const probejs$$marker: never
}
export class $ItemStackListGetter$$Static implements $ItemStackListGetter {


 "getStacks"(): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackListGetter$$Type = (() => $NonNullList$$Type<($ItemStack$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackListGetter_ = $ItemStackListGetter$$Type;
}}
declare module "net.valhelsia.valhelsia_furniture.common.block.properties.OpenCurtainPart" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$ModelTemplate, $ModelTemplate$$Type} from "net.minecraft.data.models.model.ModelTemplate"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$CurtainPart, $CurtainPart$$Type} from "net.valhelsia.valhelsia_furniture.common.block.properties.CurtainPart"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $OpenCurtainPart extends $Enum<($OpenCurtainPart)> implements $StringRepresentable, $CurtainPart {
static readonly "SINGLE_BOTTOM": $OpenCurtainPart
static readonly "SINGLE": $OpenCurtainPart
static readonly "LEFT": $OpenCurtainPart
static readonly "SINGLE_MIDDLE": $OpenCurtainPart
static readonly "SINGLE_TOP": $OpenCurtainPart
static readonly "RIGHT_SIDE_MIDDLE": $OpenCurtainPart
static readonly "TOP": $OpenCurtainPart
static readonly "LEFT_SIDE_MIDDLE": $OpenCurtainPart
static readonly "RIGHT_SIDE_TOP": $OpenCurtainPart
static readonly "RIGHT": $OpenCurtainPart
static readonly "MIDDLE": $OpenCurtainPart
static readonly "LEFT_SIDE_TOP": $OpenCurtainPart
static readonly "LEFT_SIDE_BOTTOM": $OpenCurtainPart
static readonly "RIGHT_SIDE_BOTTOM": $OpenCurtainPart


public "getName"(): StringJS
public static "values"(): ($OpenCurtainPart)[]
public static "valueOf"(name: StringJS): $OpenCurtainPart
public "getTopTexture"(): StringJS
public "isTopOrSingle"(): boolean
public "isSingleRow"(): boolean
public "isSingle"(): boolean
public "isMiddle"(): boolean
public "getModelName"(): StringJS
public "isBottomOrSingle"(): boolean
public static "getTypeForConnections"(connectUp: boolean, connectDown: boolean): $OpenCurtainPart
public "getSerializedName"(): StringJS
public "getModelTemplate"(): $ModelTemplate
public "getBottomTexture"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "name"(): StringJS
get "topTexture"(): StringJS
get "topOrSingle"(): boolean
get "singleRow"(): boolean
get "single"(): boolean
get "middle"(): boolean
get "modelName"(): StringJS
get "bottomOrSingle"(): boolean
get "serializedName"(): StringJS
get "modelTemplate"(): $ModelTemplate
get "bottomTexture"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OpenCurtainPart$$Type = (("single") | ("single_top") | ("single_bottom") | ("single_middle") | ("top") | ("middle") | ("left") | ("right") | ("left_side_top") | ("left_side_middle") | ("left_side_bottom") | ("right_side_top") | ("right_side_middle") | ("right_side_bottom"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OpenCurtainPart_ = $OpenCurtainPart$$Type;
}}
declare module "net.valhelsia.valhelsia_furniture.common.entity.SeatEntity$EjectType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SeatEntity$EjectType extends $Enum<($SeatEntity$EjectType)> {
static readonly "BLOCK_HORIZONTAL_FACING": $SeatEntity$EjectType
static readonly "NORTH": $SeatEntity$EjectType
static readonly "ENTITY_HEAD_ROTATION": $SeatEntity$EjectType


public "getName"(): StringJS
public static "values"(): ($SeatEntity$EjectType)[]
public static "valueOf"(name: StringJS): $SeatEntity$EjectType
public static "fromName"(name: StringJS): $SeatEntity$EjectType
public "getPreferredDirection"(state: $BlockState$$Type, livingEntity: $LivingEntity$$Type): $Direction
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SeatEntity$EjectType$$Type = (("north") | ("block_horizontal_facing") | ("entity_head_rotation"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SeatEntity$EjectType_ = $SeatEntity$EjectType$$Type;
}}
declare module "net.valhelsia.valhelsia_furniture.common.block.FabricDeskLampBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $FabricDeskLampBlock extends $Block implements $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "SWITCHED_ON": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
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
 "hasCollision": boolean

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hit: $BlockHitResult$$Type): $InteractionResult
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "neighborChanged"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, block: $Block$$Type, fromPos: $BlockPos$$Type, isMoving: boolean): void
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricDeskLampBlock$$Type = ($FabricDeskLampBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricDeskLampBlock_ = $FabricDeskLampBlock$$Type;
}}
declare module "net.valhelsia.valhelsia_core.api.common.registry.RegistryClass" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RegistryClass {

 "load"(): void
}

export namespace $RegistryClass {
const probejs$$marker: never
}
export class $RegistryClass$$Static implements $RegistryClass {


 "load"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryClass$$Type = ($RegistryClass);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryClass_ = $RegistryClass$$Type;
}}
declare module "net.valhelsia.valhelsia_furniture.common.block.FurnitureBlock" {
import {$FurnitureBlock$Type, $FurnitureBlock$Type$$Type} from "net.valhelsia.valhelsia_furniture.common.block.FurnitureBlock$Type"

export interface $FurnitureBlock {

 "getType"(): $FurnitureBlock$Type

(): $FurnitureBlock$Type$$Type
get "type"(): $FurnitureBlock$Type
}

export namespace $FurnitureBlock {
const probejs$$marker: never
}
export class $FurnitureBlock$$Static implements $FurnitureBlock {


 "getType"(): $FurnitureBlock$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnitureBlock$$Type = (() => $FurnitureBlock$Type$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnitureBlock_ = $FurnitureBlock$$Type;
}}
declare module "net.valhelsia.valhelsia_furniture.common.block.AbstractCurtainBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$CurtainPart, $CurtainPart$$Type} from "net.valhelsia.valhelsia_furniture.common.block.properties.CurtainPart"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractCurtainBlock<T extends $CurtainPart> extends $Block {
static readonly "TOP_SHAPES": $Map<($Direction), ($VoxelShape)>
static readonly "SHAPES": $Map<($Direction), ($VoxelShape)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "BRACKET_SHAPES": $Map<($Direction), ($VoxelShape)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(color: $DyeColor$$Type, properties: $BlockBehaviour$Properties$$Type)

public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "getColor"(): $DyeColor
public "neighborChanged"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, block: $Block$$Type, fromPos: $BlockPos$$Type, isMoving: boolean): void
public "getBlockSupportShape"(state: $BlockState$$Type, blockGetter: $BlockGetter$$Type, pos: $BlockPos$$Type): $VoxelShape
public "asHolder"(): $Holder<(any)>
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCurtainBlock$$Type<T> = ($AbstractCurtainBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCurtainBlock_<T> = $AbstractCurtainBlock$$Type<(T)>;
}}
declare module "net.valhelsia.valhelsia_core.api.common.world.structure.jigsaw.JigsawBuilder$ElementFunction" {
import {$StructureProcessorList, $StructureProcessorList$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureProcessorList"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$StructureTemplatePool$Projection, $StructureTemplatePool$Projection$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool$Projection"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$TerrainAdjustment, $TerrainAdjustment$$Type} from "net.minecraft.world.level.levelgen.structure.TerrainAdjustment"
import {$StructurePoolElement, $StructurePoolElement$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $JigsawBuilder$ElementFunction {

 "apply"(arg0: $ResourceLocation$$Type, arg1: $Holder$$Type<($StructureProcessorList)>, arg2: $StructureTemplatePool$Projection$$Type, arg3: $TerrainAdjustment$$Type): $Function<($StructureTemplatePool$Projection), ($StructurePoolElement)>

(arg0: $ResourceLocation, arg1: $Holder<($StructureProcessorList)>, arg2: $StructureTemplatePool$Projection, arg3: $TerrainAdjustment): $Function$$Type<($StructureTemplatePool$Projection$$Type), ($StructurePoolElement$$Type)>
}

export namespace $JigsawBuilder$ElementFunction {
const probejs$$marker: never
}
export class $JigsawBuilder$ElementFunction$$Static implements $JigsawBuilder$ElementFunction {


 "apply"(arg0: $ResourceLocation$$Type, arg1: $Holder$$Type<($StructureProcessorList)>, arg2: $StructureTemplatePool$Projection$$Type, arg3: $TerrainAdjustment$$Type): $Function<($StructureTemplatePool$Projection), ($StructurePoolElement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JigsawBuilder$ElementFunction$$Type = ((arg0: $ResourceLocation, arg1: $Holder<($StructureProcessorList)>, arg2: $StructureTemplatePool$Projection, arg3: $TerrainAdjustment) => $Function$$Type<($StructureTemplatePool$Projection$$Type), ($StructurePoolElement$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JigsawBuilder$ElementFunction_ = $JigsawBuilder$ElementFunction$$Type;
}}
declare module "net.valhelsia.valhelsia_furniture.common.block.TableBlock" {
import {$WoodType, $WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$FurnitureBlock$Type, $FurnitureBlock$Type$$Type} from "net.valhelsia.valhelsia_furniture.common.block.FurnitureBlock$Type"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$EnumMap, $EnumMap$$Type} from "java.util.EnumMap"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$FurnitureBlock, $FurnitureBlock$$Type} from "net.valhelsia.valhelsia_furniture.common.block.FurnitureBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $TableBlock extends $Block implements $SimpleWaterloggedBlock, $FurnitureBlock {
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "PROPERTY_BY_DIRECTION": $EnumMap<($Direction), ($BooleanProperty)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(woodType: $WoodType$$Type, properties: $BlockBehaviour$Properties$$Type)

public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getType"(): $FurnitureBlock$Type
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "getWoodType"(): $WoodType
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "isValidTable"(state: $BlockState$$Type): boolean
public "isSameRotation"(state1: $BlockState$$Type, state2: $BlockState$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "useShapeForLightOcclusion"(state: $BlockState$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "type"(): $FurnitureBlock$Type
get "woodType"(): $WoodType
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TableBlock$$Type = ($TableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TableBlock_ = $TableBlock$$Type;
}}
declare module "net.valhelsia.valhelsia_furniture.common.block.properties.ClosedCurtainPart" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$ModelTemplate, $ModelTemplate$$Type} from "net.minecraft.data.models.model.ModelTemplate"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$CurtainPart, $CurtainPart$$Type} from "net.valhelsia.valhelsia_furniture.common.block.properties.CurtainPart"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $ClosedCurtainPart extends $Enum<($ClosedCurtainPart)> implements $StringRepresentable, $CurtainPart {
static readonly "SINGLE": $ClosedCurtainPart
static readonly "TOP": $ClosedCurtainPart
static readonly "BOTTOM": $ClosedCurtainPart
static readonly "MIDDLE": $ClosedCurtainPart


public "getName"(): StringJS
public static "values"(): ($ClosedCurtainPart)[]
public static "valueOf"(name: StringJS): $ClosedCurtainPart
public "getTopTexture"(): StringJS
public "isTopOrSingle"(): boolean
public "isSingleRow"(): boolean
public "isSingle"(): boolean
public "isBottomOrSingle"(): boolean
public static "getTypeForConnections"(connectUp: boolean, connectDown: boolean): $ClosedCurtainPart
public "getSerializedName"(): StringJS
public "getModelTemplate"(): $ModelTemplate
public "getBottomTexture"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public "getModelName"(): StringJS
get "name"(): StringJS
get "topTexture"(): StringJS
get "topOrSingle"(): boolean
get "singleRow"(): boolean
get "single"(): boolean
get "bottomOrSingle"(): boolean
get "serializedName"(): StringJS
get "modelTemplate"(): $ModelTemplate
get "bottomTexture"(): StringJS
get "remappedEnumConstantName"(): StringJS
get "modelName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClosedCurtainPart$$Type = (("single") | ("top") | ("middle") | ("bottom"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClosedCurtainPart_ = $ClosedCurtainPart$$Type;
}}
declare module "net.valhelsia.valhelsia_core.api.common.registry.RegistryEntry" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$HolderLookup$RegistryLookup, $HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$HolderOwner, $HolderOwner$$Type} from "net.minecraft.core.HolderOwner"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$DataMapType, $DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Holder$Kind, $Holder$Kind$$Type} from "net.minecraft.core.Holder$Kind"

export class $RegistryEntry<R, T extends R> implements $Holder<(R)>, $Supplier<(T)> {

constructor(key: $ResourceKey$$Type<(R)>)

public "unwrap"(): $Either<($ResourceKey<(R)>), (R)>
public "is"(holder: $Holder$$Type<(R)>): boolean
public "is"(resourceKey: $ResourceKey$$Type<(R)>): boolean
public "is"(predicate: $Predicate$$Type<($ResourceKey<(R)>)>): boolean
public "is"(tagKey: $TagKey$$Type<(R)>): boolean
public "is"(location: $ResourceLocation$$Type): boolean
public "tags"(): $Stream<($TagKey<(R)>)>
public "get"(): T
public "value"(): T
public "equals"(obj: any): boolean
public "hashCode"(): integer
public "kind"(): $Holder$Kind
public "canSerializeIn"(owner: $HolderOwner$$Type<(R)>): boolean
public "unwrapKey"(): $Optional<($ResourceKey<(R)>)>
public "isBound"(): boolean
public static "direct"<T>(arg0: R): $Holder<(R)>
public "getRegisteredName"(): StringJS
public "getKey"(): $ResourceKey<(R)>
public "unwrapLookup"(): $HolderLookup$RegistryLookup<(R)>
public "getDelegate"(): $Holder<(R)>
public "getData"<T>(arg0: $DataMapType$$Type<(R), (T)>): T
get "bound"(): boolean
get "registeredName"(): StringJS
get "key"(): $ResourceKey<(R)>
get "delegate"(): $Holder<(R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryEntry$$Type<R, T> = ($RegistryEntry<(R), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryEntry_<R, T> = $RegistryEntry$$Type<(R), (T)>;
}}
declare module "net.valhelsia.valhelsia_furniture.common.block.TableclothTableBlock" {
import {$WoodType, $WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$EnumMap, $EnumMap$$Type} from "java.util.EnumMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$TableBlock, $TableBlock$$Type} from "net.valhelsia.valhelsia_furniture.common.block.TableBlock"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TableclothTableBlock extends $TableBlock {
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "PROPERTY_BY_DIRECTION": $EnumMap<($Direction), ($BooleanProperty)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(baseTable: $Supplier$$Type<($TableBlock$$Type)>, color: $DyeColor$$Type, woodType: $WoodType$$Type, properties: $BlockBehaviour$Properties$$Type)

public "getColor"(): $DyeColor
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, list: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public "getDescriptionId"(): StringJS
public "asHolder"(): $Holder<(any)>
get "color"(): $DyeColor
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TableclothTableBlock$$Type = ($TableclothTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TableclothTableBlock_ = $TableclothTableBlock$$Type;
}}
declare module "net.valhelsia.valhelsia_core.api.common.block.StrippableRotatedPillarBlock" {
import {$RotatedPillarBlock, $RotatedPillarBlock$$Type} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StrippableRotatedPillarBlock extends $RotatedPillarBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($RotatedPillarBlock)>
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
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(strippedBlock: $Supplier$$Type<($Block$$Type)>, properties: $BlockBehaviour$Properties$$Type)

public "getToolModifiedState"(state: $BlockState$$Type, context: $UseOnContext$$Type, itemAbility: $ItemAbility$$Type, simulate: boolean): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StrippableRotatedPillarBlock$$Type = ($StrippableRotatedPillarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StrippableRotatedPillarBlock_ = $StrippableRotatedPillarBlock$$Type;
}}
declare module "net.valhelsia.valhelsia_furniture.common.block.FurnitureBlock$Type" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $FurnitureBlock$Type extends $Enum<($FurnitureBlock$Type)> implements $StringRepresentable {
static readonly "TABLE": $FurnitureBlock$Type


public static "values"(): ($FurnitureBlock$Type)[]
public static "valueOf"(name: StringJS): $FurnitureBlock$Type
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
export type $FurnitureBlock$Type$$Type = (("table"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FurnitureBlock$Type_ = $FurnitureBlock$Type$$Type;
}}
