declare module "net.joefoxe.hexerei.block.custom.ModChest" {
import {$ChestType, $ChestType$$Type} from "net.minecraft.world.level.block.state.properties.ChestType"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$DoubleBlockCombiner$NeighborCombineResult, $DoubleBlockCombiner$NeighborCombineResult$$Type} from "net.minecraft.world.level.block.DoubleBlockCombiner$NeighborCombineResult"
import {$DoubleBlockCombiner$BlockType, $DoubleBlockCombiner$BlockType$$Type} from "net.minecraft.world.level.block.DoubleBlockCombiner$BlockType"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$DoubleBlockCombiner$Combiner, $DoubleBlockCombiner$Combiner$$Type} from "net.minecraft.world.level.block.DoubleBlockCombiner$Combiner"
import {$ModChestBlockEntity, $ModChestBlockEntity$$Type} from "net.joefoxe.hexerei.tileentity.ModChestBlockEntity"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Float2FloatFunction, $Float2FloatFunction$$Type} from "it.unimi.dsi.fastutil.floats.Float2FloatFunction"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbstractChestBlock, $AbstractChestBlock$$Type} from "net.minecraft.world.level.block.AbstractChestBlock"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$ModChest$WoodType, $ModChest$WoodType$$Type} from "net.joefoxe.hexerei.block.custom.ModChest$WoodType"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$LidBlockEntity, $LidBlockEntity$$Type} from "net.minecraft.world.level.block.entity.LidBlockEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ModChest extends $AbstractChestBlock<($ModChestBlockEntity)> implements $SimpleWaterloggedBlock {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
 "type": $ModChest$WoodType
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "EVENT_SET_OPEN_COUNT": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "TYPE": $EnumProperty<($ChestType)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ModChest)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "WOOD_TYPE": $EnumProperty<($ModChest$WoodType)>
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $ModChest$WoodType$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public static "getContainer"(arg0: $ModChest$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: boolean): $Container
public "use"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $BlockHitResult$$Type): $InteractionResult
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "combine"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: boolean): $DoubleBlockCombiner$NeighborCombineResult<($ModChestBlockEntity)>
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $PathComputationType$$Type): boolean
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public static "getBlockType"(arg0: $BlockState$$Type): $DoubleBlockCombiner$BlockType
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "blockEntityType"(): $BlockEntityType<($ModChestBlockEntity)>
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getMenuProvider"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $MenuProvider
public static "getConnectedDirection"(arg0: $BlockState$$Type): $Direction
public static "isChestBlockedAt"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): boolean
public static "opennessCombiner"(arg0: $LidBlockEntity$$Type): $DoubleBlockCombiner$Combiner<($ModChestBlockEntity), ($Float2FloatFunction)>
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public "asHolder"(): $Holder<(any)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModChest$$Type = ($ModChest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModChest_ = $ModChest$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.BookBlocks" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BookBlocks {
 "blockState": $BlockState
static readonly "BLOCK_CODEC": $Codec<($BookBlocks)>
static readonly "CODEC": $Codec<($BookBlocks)>
 "extra_tooltips": $List<($Component)>
 "x": float
 "y": float
 "tag": StringJS
 "type": StringJS
 "show_slot": boolean
static readonly "TAG_CODEC": $Codec<($BookBlocks)>
 "refreshTag": boolean
 "key": $TagKey<($Block)>


public static "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<($Pair<($BookBlocks), (T)>)>
public static "encode"<T>(arg0: $BookBlocks$$Type, arg1: $DynamicOps$$Type<(T)>, arg2: T): $DataResult<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookBlocks$$Type = ($BookBlocks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookBlocks_ = $BookBlocks$$Type;
}}
declare module "net.joefoxe.hexerei.client.renderer.IFirstPersonItemAnimation" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $IFirstPersonItemAnimation {

 "animateItemFirstPerson"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type, arg3: $PoseStack$$Type, arg4: float, arg5: float, arg6: float, arg7: float): void

(arg0: $LivingEntity, arg1: $ItemStack, arg2: $InteractionHand, arg3: $PoseStack, arg4: float, arg5: float, arg6: float, arg7: float): void
}

export namespace $IFirstPersonItemAnimation {
const probejs$$marker: never
}
export class $IFirstPersonItemAnimation$$Static implements $IFirstPersonItemAnimation {


 "animateItemFirstPerson"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type, arg3: $PoseStack$$Type, arg4: float, arg5: float, arg6: float, arg7: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFirstPersonItemAnimation$$Type = ((arg0: $LivingEntity, arg1: $ItemStack, arg2: $InteractionHand, arg3: $PoseStack, arg4: float, arg5: float, arg6: float, arg7: float) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFirstPersonItemAnimation_ = $IFirstPersonItemAnimation$$Type;
}}
declare module "net.joefoxe.hexerei.block.connected.WaxedBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Waxed, $Waxed$$Type} from "net.joefoxe.hexerei.block.connected.Waxed"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WaxedBlock extends $Block implements $Waxed {
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
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
public "getUnWaxed"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaxedBlock$$Type = ($WaxedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaxedBlock_ = $WaxedBlock$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.ConnectingTableEntityBase" {
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ConnectingTable, $ConnectingTable$$Type} from "net.joefoxe.hexerei.block.custom.ConnectingTable"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ConnectingTable$North, $ConnectingTable$North$$Type} from "net.joefoxe.hexerei.block.custom.ConnectingTable$North"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ConnectingTable$South, $ConnectingTable$South$$Type} from "net.joefoxe.hexerei.block.custom.ConnectingTable$South"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ConnectingTableEntityBase extends $ConnectingTable implements $EntityBlock {
static "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "NORTH": $EnumProperty<($ConnectingTable$North)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $EnumProperty<($ConnectingTable$South)>
static "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "triggerEvent"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: integer, arg4: integer): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectingTableEntityBase$$Type = ($ConnectingTableEntityBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectingTableEntityBase_ = $ConnectingTableEntityBase$$Type;
}}
declare module "net.joefoxe.hexerei.block.connected.LayeredBlock" {
import {$RotatedPillarBlock, $RotatedPillarBlock$$Type} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LayeredBlock extends $RotatedPillarBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayeredBlock$$Type = ($LayeredBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LayeredBlock_ = $LayeredBlock$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.BookPage" {
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$List, $List$$Type} from "java.util.List"
import {$BookWritableTextBox, $BookWritableTextBox$$Type} from "net.joefoxe.hexerei.data.books.BookWritableTextBox"
import {$BookBlocks, $BookBlocks$$Type} from "net.joefoxe.hexerei.data.books.BookBlocks"
import {$BookEntity, $BookEntity$$Type} from "net.joefoxe.hexerei.data.books.BookEntity"
import {$BookPaintElement, $BookPaintElement$$Type} from "net.joefoxe.hexerei.data.books.BookPaintElement"
import {$BookNonItemTooltip, $BookNonItemTooltip$$Type} from "net.joefoxe.hexerei.data.books.BookNonItemTooltip"
import {$BookParagraph, $BookParagraph$$Type} from "net.joefoxe.hexerei.data.books.BookParagraph"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$BookItemsAndFluids, $BookItemsAndFluids$$Type} from "net.joefoxe.hexerei.data.books.BookItemsAndFluids"
import {$BookImage, $BookImage$$Type} from "net.joefoxe.hexerei.data.books.BookImage"

export class $BookPage {
 "paragraph": $ArrayList<($BookParagraph)>
static readonly "CODEC": $Codec<($BookPage)>
 "nonItemTooltipList": $ArrayList<($BookNonItemTooltip)>
 "itemHyperlink": StringJS
 "entityList": $ArrayList<($BookEntity)>
 "blockList": $ArrayList<($BookBlocks)>
 "name": StringJS
 "writableTextBoxes": $ArrayList<($BookWritableTextBox)>
 "location": $ResourceLocation
 "itemList": $ArrayList<($BookItemsAndFluids)>
 "imageList": $ArrayList<($BookImage)>
 "paintElements": $ArrayList<($BookPaintElement)>

constructor(arg0: StringJS, arg1: StringJS, arg2: $List$$Type<($BookParagraph$$Type)>, arg3: $List$$Type<($BookItemsAndFluids$$Type)>, arg4: $List$$Type<($BookBlocks$$Type)>, arg5: $List$$Type<($BookEntity$$Type)>, arg6: $List$$Type<($BookImage$$Type)>, arg7: $List$$Type<($BookNonItemTooltip$$Type)>, arg8: $List$$Type<($BookWritableTextBox$$Type)>, arg9: $List$$Type<($BookPaintElement$$Type)>)

public static "loadFromTag"(arg0: $CompoundTag$$Type): $BookPage
public static "saveToTag"(arg0: $BookPage$$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookPage$$Type = ($BookPage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookPage_ = $BookPage$$Type;
}}
declare module "net.joefoxe.hexerei.block.connected.ConnectedPillarBlock" {
import {$RotatedPillarBlock, $RotatedPillarBlock$$Type} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LayeredBlock, $LayeredBlock$$Type} from "net.joefoxe.hexerei.block.connected.LayeredBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ConnectedPillarBlock extends $LayeredBlock {
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
static readonly "CODEC": $MapCodec<($RotatedPillarBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public static "getConnection"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public static "connection"(arg0: $Direction$Axis$$Type, arg1: $Direction$$Type): $BooleanProperty
public static "setConnection"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: boolean): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectedPillarBlock$$Type = ($ConnectedPillarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectedPillarBlock_ = $ConnectedPillarBlock$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.ConnectingCarpetStairs" {
import {$CTDyable, $CTDyable$$Type} from "net.joefoxe.hexerei.block.connected.CTDyable"
import {$LootParams$Builder, $LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Waxed, $Waxed$$Type} from "net.joefoxe.hexerei.block.connected.Waxed"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ConnectingCarpetStairs$North, $ConnectingCarpetStairs$North$$Type} from "net.joefoxe.hexerei.block.custom.ConnectingCarpetStairs$North"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$ConnectingCarpetStairs$South, $ConnectingCarpetStairs$South$$Type} from "net.joefoxe.hexerei.block.custom.ConnectingCarpetStairs$South"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$CarpetBlock, $CarpetBlock$$Type} from "net.minecraft.world.level.block.CarpetBlock"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $ConnectingCarpetStairs extends $CarpetBlock implements $Waxed, $CTDyable {
static "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "NORTH": $EnumProperty<($ConnectingCarpetStairs$North)>
static readonly "COLOR": $EnumProperty<($DyeColor)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "RIGHT": $BooleanProperty
static readonly "SOUTH": $EnumProperty<($ConnectingCarpetStairs$South)>
static "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CarpetBlock)>
static readonly "LEFT": $BooleanProperty
 "parentBlock": $Block
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)
constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Block$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getDyeColor"(arg0: $BlockState$$Type): $DyeColor
public static "checkLeft"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $LevelAccessor$$Type): boolean
public "checkRight"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $LevelAccessor$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getUnWaxed"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectingCarpetStairs$$Type = ($ConnectingCarpetStairs);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectingCarpetStairs_ = $ConnectingCarpetStairs$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.FluidMixingRecipe$Type" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$FluidMixingRecipe, $FluidMixingRecipe$$Type} from "net.joefoxe.hexerei.data.recipes.FluidMixingRecipe"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"

export class $FluidMixingRecipe$Type implements $RecipeType<($FluidMixingRecipe)> {
static readonly "INSTANCE": $FluidMixingRecipe$Type


public static "register"<T extends $Recipe<(any)>>(arg0: StringJS): $RecipeType<($FluidMixingRecipe)>
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$$Type): $RecipeType<($FluidMixingRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidMixingRecipe$Type$$Type = ($FluidMixingRecipe$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidMixingRecipe$Type_ = $FluidMixingRecipe$Type$$Type;
}}
declare module "net.joefoxe.hexerei.tileentity.CandleDipperTile$DipperState" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $CandleDipperTile$DipperState extends $Enum<($CandleDipperTile$DipperState)> {
static readonly "DRYING": $CandleDipperTile$DipperState
static readonly "DUNKING": $CandleDipperTile$DipperState
static readonly "FINISHED": $CandleDipperTile$DipperState
static readonly "NON": $CandleDipperTile$DipperState


public static "values"(): ($CandleDipperTile$DipperState)[]
public static "valueOf"(arg0: StringJS): $CandleDipperTile$DipperState
public static "byId"(arg0: integer): $CandleDipperTile$DipperState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CandleDipperTile$DipperState$$Type = (("drying") | ("dunking") | ("finished") | ("non"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CandleDipperTile$DipperState_ = $CandleDipperTile$DipperState$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.PageDrawing$PageOn" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $PageDrawing$PageOn extends $Enum<($PageDrawing$PageOn)> {
static readonly "RIGHT_PAGE_PREV_PREV": $PageDrawing$PageOn
static readonly "LEFT_PAGE_PREV": $PageDrawing$PageOn
static readonly "LEFT_PAGE_PREV_PREV": $PageDrawing$PageOn
static readonly "MIDDLE_BUTTON": $PageDrawing$PageOn
static readonly "RIGHT_PAGE": $PageDrawing$PageOn
static readonly "RIGHT_PAGE_PREV": $PageDrawing$PageOn
static readonly "RIGHT_PAGE_UNDER": $PageDrawing$PageOn
static readonly "LEFT_PAGE": $PageDrawing$PageOn
static readonly "LEFT_PAGE_UNDER": $PageDrawing$PageOn


public static "values"(): ($PageDrawing$PageOn)[]
public static "valueOf"(arg0: StringJS): $PageDrawing$PageOn
public "isOnLeftSide"(): boolean
get "onLeftSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PageDrawing$PageOn$$Type = (("left_page") | ("left_page_under") | ("left_page_prev") | ("left_page_prev_prev") | ("right_page") | ("right_page_under") | ("right_page_prev") | ("right_page_prev_prev") | ("middle_button"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PageDrawing$PageOn_ = $PageDrawing$PageOn$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.WillowLog" {
import {$RotatedPillarBlock, $RotatedPillarBlock$$Type} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WillowLog extends $RotatedPillarBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WillowLog$$Type = ($WillowLog);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WillowLog_ = $WillowLog$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.CrowAmuletItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $CrowAmuletItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getName"(arg0: $ItemStack$$Type): $Component
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrowAmuletItem$$Type = ($CrowAmuletItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrowAmuletItem_ = $CrowAmuletItem$$Type;
}}
declare module "net.joefoxe.hexerei.fluid.BloodFluid$Flowing" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BloodFluid, $BloodFluid$$Type} from "net.joefoxe.hexerei.fluid.BloodFluid"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BloodFluid$Flowing extends $BloodFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public "createLegacyBlock"(arg0: $FluidState$$Type): $BlockState
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloodFluid$Flowing$$Type = ($BloodFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BloodFluid$Flowing_ = $BloodFluid$Flowing$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.MixingCauldronRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$MixingCauldronRecipe, $MixingCauldronRecipe$$Type} from "net.joefoxe.hexerei.data.recipes.MixingCauldronRecipe"

export class $MixingCauldronRecipe$Serializer implements $RecipeSerializer<($MixingCauldronRecipe)> {
static readonly "CODEC": $MapCodec<($MixingCauldronRecipe)>
static readonly "INSTANCE": $MixingCauldronRecipe$Serializer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MixingCauldronRecipe)>

constructor()

public "codec"(): $MapCodec<($MixingCauldronRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($MixingCauldronRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixingCauldronRecipe$Serializer$$Type = ($MixingCauldronRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixingCauldronRecipe$Serializer_ = $MixingCauldronRecipe$Serializer$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.BookOfShadowsRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BookOfShadowsRecipe extends $ShapedRecipe {
 "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: $ShapedRecipe$$Type)
constructor(arg0: StringJS, arg1: $CraftingBookCategory$$Type, arg2: $ShapedRecipePattern$$Type, arg3: $ItemStack$$Type, arg4: boolean)

public "getOutput"(): $ItemStack
public "getInputs"(): $NonNullList<($Ingredient)>
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
get "output"(): $ItemStack
get "inputs"(): $NonNullList<($Ingredient)>
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOfShadowsRecipe$$Type = ($BookOfShadowsRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookOfShadowsRecipe_ = $BookOfShadowsRecipe$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.GlassesItem" {
import {$HumanoidArm, $HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AgeableListModel, $AgeableListModel$$Type} from "net.minecraft.client.model.AgeableListModel"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TwoHandedItemAnimation, $TwoHandedItemAnimation$$Type} from "net.joefoxe.hexerei.client.renderer.TwoHandedItemAnimation"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$HumanoidModel, $HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$IThirdPersonItemAnimation, $IThirdPersonItemAnimation$$Type} from "net.joefoxe.hexerei.client.renderer.IThirdPersonItemAnimation"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $GlassesItem extends $Item implements $IThirdPersonItemAnimation {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): void
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "poseRightArm"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $HumanoidModel$$Type<(T)>, arg2: T, arg3: $HumanoidArm$$Type, arg4: $TwoHandedItemAnimation$$Type): boolean
public "poseLeftArm"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $HumanoidModel$$Type<(T)>, arg2: T, arg3: $HumanoidArm$$Type, arg4: $TwoHandedItemAnimation$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getEquipmentSlot"(arg0: $ItemStack$$Type): $EquipmentSlot
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "isTwoHanded"(): boolean
public "poseRightArmMixin"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $AgeableListModel$$Type<(T)>, arg2: T, arg3: $HumanoidArm$$Type, arg4: $TwoHandedItemAnimation$$Type): boolean
public "poseleftArmMixin"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $AgeableListModel$$Type<(T)>, arg2: T, arg3: $HumanoidArm$$Type, arg4: $TwoHandedItemAnimation$$Type): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "twoHanded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlassesItem$$Type = ($GlassesItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlassesItem_ = $GlassesItem$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.HerbDryingRackFull" {
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
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
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

export class $HerbDryingRackFull extends $Block implements $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "SHAPE_TURNED": $VoxelShape
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "ANGLE": $IntegerProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "setAngle"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: integer): void
public "getAngle"(arg0: $Level$$Type, arg1: $BlockPos$$Type): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
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
export type $HerbDryingRackFull$$Type = ($HerbDryingRackFull);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HerbDryingRackFull_ = $HerbDryingRackFull$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.AddToCandleRecipe$Type" {
import {$AddToCandleRecipe, $AddToCandleRecipe$$Type} from "net.joefoxe.hexerei.data.recipes.AddToCandleRecipe"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"

export class $AddToCandleRecipe$Type implements $RecipeType<($AddToCandleRecipe)> {
static readonly "INSTANCE": $AddToCandleRecipe$Type


public static "register"<T extends $Recipe<(any)>>(arg0: StringJS): $RecipeType<($AddToCandleRecipe)>
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$$Type): $RecipeType<($AddToCandleRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddToCandleRecipe$Type$$Type = ($AddToCandleRecipe$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddToCandleRecipe$Type_ = $AddToCandleRecipe$Type$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.DowsingRodItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$DynamicCommandExceptionType, $DynamicCommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.DynamicCommandExceptionType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $DowsingRodItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
 "swampMode": boolean
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BT_SWAMP": $TagKey<($Biome)>
 "nearestPos": $BlockPos
static readonly "ERROR_INVALID_BIOME": $DynamicCommandExceptionType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "findSwamp"(arg0: $Level$$Type, arg1: $Entity$$Type): void
public "findJungle"(arg0: $Level$$Type, arg1: $Entity$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "angleDifference"(arg0: double, arg1: double): double
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DowsingRodItem$$Type = ($DowsingRodItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DowsingRodItem_ = $DowsingRodItem$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.CrowFluteRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $CrowFluteRecipe extends $ShapedRecipe {
 "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: StringJS, arg1: $CraftingBookCategory$$Type, arg2: $ShapedRecipePattern$$Type, arg3: $ItemStack$$Type, arg4: boolean)

public "getOutput"(): $ItemStack
public "getInputs"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
get "output"(): $ItemStack
get "inputs"(): $NonNullList<($Ingredient)>
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrowFluteRecipe$$Type = ($CrowFluteRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrowFluteRecipe_ = $CrowFluteRecipe$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.ConnectingTable$North" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $ConnectingTable$North extends $Enum<($ConnectingTable$North)> implements $StringRepresentable {
static readonly "ALL": $ConnectingTable$North
static readonly "NORTH_AND_NORTH_EAST": $ConnectingTable$North
static readonly "JUST_NORTH_WEST": $ConnectingTable$North
static readonly "NORTH_AND_NORTH_WEST": $ConnectingTable$North
static readonly "NORTH_EAST_AND_NORTH_WEST": $ConnectingTable$North
static readonly "JUST_NORTH_EAST": $ConnectingTable$North
static readonly "NONE": $ConnectingTable$North
static readonly "JUST_NORTH": $ConnectingTable$North


public "toString"(): StringJS
public static "values"(): ($ConnectingTable$North)[]
public static "valueOf"(arg0: StringJS): $ConnectingTable$North
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
export type $ConnectingTable$North$$Type = (("north") | ("north_and_north_west") | ("north_and_north_east") | ("north_west") | ("north_east") | ("north_east_and_north_west") | ("all") | ("none"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectingTable$North_ = $ConnectingTable$North$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.OwlCourierDepot" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$OwlCourierDepotTile, $OwlCourierDepotTile$$Type} from "net.joefoxe.hexerei.tileentity.OwlCourierDepotTile"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ITileEntity, $ITileEntity$$Type} from "net.joefoxe.hexerei.block.ITileEntity"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $OwlCourierDepot extends $Block implements $ITileEntity<($OwlCourierDepotTile)>, $EntityBlock, $SimpleWaterloggedBlock {
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
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getTileEntityClass"(): $Class<($OwlCourierDepotTile)>
public "sync"(): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $OwlCourierDepotTile
public "getTileEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($OwlCourierDepotTile)>
public "withTileEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($OwlCourierDepotTile)>): void
public "onTileEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($OwlCourierDepotTile), ($InteractionResult$$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "tileEntityClass"(): $Class<($OwlCourierDepotTile)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwlCourierDepot$$Type = ($OwlCourierDepot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwlCourierDepot_ = $OwlCourierDepot$$Type;
}}
declare module "net.joefoxe.hexerei.tileentity.SageBurningPlateTile" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Clearable, $Clearable$$Type} from "net.minecraft.world.Clearable"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LockCode, $LockCode$$Type} from "net.minecraft.world.LockCode"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RandomizableContainerBlockEntity, $RandomizableContainerBlockEntity$$Type} from "net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity"
import {$WorldlyContainer, $WorldlyContainer$$Type} from "net.minecraft.world.WorldlyContainer"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $SageBurningPlateTile extends $RandomizableContainerBlockEntity implements $WorldlyContainer, $Clearable, $MenuProvider {
 "burnTime": integer
 "burnTimeMax": integer
 "name": $Component
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "lockKey": $LockCode

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)
constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "tick"(): void
public "sync"(): void
public "save"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "onLoad"(): void
public "getItems"(): $NonNullList<($ItemStack)>
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "emitParticles"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setItems"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getSpeed"(arg0: double, arg1: double): float
public "setChanged"(): void
public static "getDistance"(arg0: float, arg1: float, arg2: float, arg3: float): double
public "putItems"(arg0: integer, arg1: $ItemStack$$Type): integer
public "getItemInSlot"(arg0: integer): $Item
public "getAngle"(arg0: $Vec3$$Type): float
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getSlotsForFace"(arg0: $Direction$$Type): (integer)[]
public "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
public "getContainerSize"(): integer
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getMaxStackSize"(): integer
public "rotateAroundVec"(arg0: $Vec3$$Type, arg1: float, arg2: $Vec3$$Type): $Vec3
public "extinguishParticles"(): void
public static "getDistanceToEntity"(arg0: $Entity$$Type, arg1: $BlockPos$$Type): double
public "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
public "interactSageBurningPlate"(arg0: $Player$$Type, arg1: $BlockHitResult$$Type): integer
public "clearContent"(): void
public static "tryClear"(arg0: any): void
public "getDisplayName"(): $Component
public "stillValid"(arg0: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "getLevel"(): $Level
public "getBlockPos"(): $BlockPos
public static "setBlockEntityLootTable"(arg0: $BlockGetter$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $ResourceKey$$Type<($LootTable)>): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "items"(): $NonNullList<($ItemStack)>
set "items"(value: $NonNullList$$Type<($ItemStack$$Type)>)
get "containerSize"(): integer
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "maxStackSize"(): integer
get "displayName"(): $Component
get "level"(): $Level
get "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SageBurningPlateTile$$Type = ($SageBurningPlateTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SageBurningPlateTile_ = $SageBurningPlateTile$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.BookPaintElement$Client" {
import {$PaintSystem, $PaintSystem$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$BookPaintElement, $BookPaintElement$$Type} from "net.joefoxe.hexerei.data.books.BookPaintElement"

export class $BookPaintElement$Client {

constructor(arg0: $BookPaintElement$$Type)

public "getPaintSystem"(arg0: $UUID$$Type): $PaintSystem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookPaintElement$Client$$Type = ($BookPaintElement$Client);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookPaintElement$Client_ = $BookPaintElement$Client$$Type;
}}
declare module "net.joefoxe.hexerei.block.connected.Waxed" {
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $Waxed {

 "getUnWaxed"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type): $BlockState
}

export namespace $Waxed {
const probejs$$marker: never
}
export class $Waxed$$Static implements $Waxed {


 "getUnWaxed"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Waxed$$Type = ($Waxed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Waxed_ = $Waxed$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.PaintSystem$ValueSlider$SliderListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PaintSystem$ValueSlider$SliderListener {

 "onValueChanged"(arg0: float): void

(arg0: float): void
}

export namespace $PaintSystem$ValueSlider$SliderListener {
const probejs$$marker: never
}
export class $PaintSystem$ValueSlider$SliderListener$$Static implements $PaintSystem$ValueSlider$SliderListener {


 "onValueChanged"(arg0: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintSystem$ValueSlider$SliderListener$$Type = ((arg0: float) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintSystem$ValueSlider$SliderListener_ = $PaintSystem$ValueSlider$SliderListener$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.ConnectingTable$South" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $ConnectingTable$South extends $Enum<($ConnectingTable$South)> implements $StringRepresentable {
static readonly "ALL": $ConnectingTable$South
static readonly "SOUTH_EAST_AND_SOUTH_WEST": $ConnectingTable$South
static readonly "SOUTH_AND_SOUTH_EAST": $ConnectingTable$South
static readonly "JUST_SOUTH_WEST": $ConnectingTable$South
static readonly "JUST_SOUTH": $ConnectingTable$South
static readonly "JUST_SOUTH_EAST": $ConnectingTable$South
static readonly "NONE": $ConnectingTable$South
static readonly "SOUTH_AND_SOUTH_WEST": $ConnectingTable$South


public "toString"(): StringJS
public static "values"(): ($ConnectingTable$South)[]
public static "valueOf"(arg0: StringJS): $ConnectingTable$South
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
export type $ConnectingTable$South$$Type = (("south") | ("south_and_south_west") | ("south_and_south_east") | ("south_west") | ("south_east") | ("south_east_and_south_west") | ("all") | ("none"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectingTable$South_ = $ConnectingTable$South$$Type;
}}
declare module "net.joefoxe.hexerei.block.connected.FabricBlock" {
import {$RotatedPillarBlock, $RotatedPillarBlock$$Type} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CTDyable, $CTDyable$$Type} from "net.joefoxe.hexerei.block.connected.CTDyable"
import {$LootParams$Builder, $LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$WaxedLayeredBlock, $WaxedLayeredBlock$$Type} from "net.joefoxe.hexerei.block.connected.WaxedLayeredBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FabricBlock extends $WaxedLayeredBlock implements $CTDyable {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getDyeColor"(arg0: $BlockState$$Type): $DyeColor
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBlock$$Type = ($FabricBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricBlock_ = $FabricBlock$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.WitchHazelWood" {
import {$RotatedPillarBlock, $RotatedPillarBlock$$Type} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WitchHazelWood extends $RotatedPillarBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WitchHazelWood$$Type = ($WitchHazelWood);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WitchHazelWood_ = $WitchHazelWood$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.CourierPackage$State" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $CourierPackage$State extends $Enum<($CourierPackage$State)> implements $StringRepresentable {
static readonly "SEALED": $CourierPackage$State
static readonly "CLOSED": $CourierPackage$State
static readonly "OPENED": $CourierPackage$State


public "getString"(): StringJS
public "toString"(): StringJS
public static "values"(): ($CourierPackage$State)[]
public static "valueOf"(arg0: StringJS): $CourierPackage$State
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "string"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CourierPackage$State$$Type = (("opened") | ("closed") | ("sealed"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CourierPackage$State_ = $CourierPackage$State$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.BookEntity" {
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BookHoverOffset, $BookHoverOffset$$Type} from "net.joefoxe.hexerei.data.books.BookHoverOffset"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $BookEntity {
static readonly "CODEC": $Codec<($BookEntity)>
 "offset": $BookHoverOffset
 "hoverTickRender": float
 "entityType": StringJS
 "entityTags": $CompoundTag
 "toRotateO": float
 "scale": float
 "rotO": float
 "toRotate": float
 "clicked": boolean
 "hoverTickO": float
 "entityTagsList": $ArrayList<($CompoundTag)>
 "hoverTick": float
 "entityTagsListOnSet": integer
 "entityTagsLastChange": integer
 "rot": float
 "x": float
 "y": float
 "entityTagsListOn": integer
 "hovered": boolean
 "markedForUpdate": boolean
 "entity": $Entity


public "tick"(): void
public "getRot"(arg0: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookEntity$$Type = ($BookEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookEntity_ = $BookEntity$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.BookParagraphElements" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"

export class $BookParagraphElements {
 "verticalAlign": StringJS
static readonly "CODEC": $Codec<($BookParagraphElements)>
 "x": float
 "width": float
 "y": float
 "height": float


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookParagraphElements$$Type = ($BookParagraphElements);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookParagraphElements_ = $BookParagraphElements$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.MixingCauldronRecipe$Type" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$MixingCauldronRecipe, $MixingCauldronRecipe$$Type} from "net.joefoxe.hexerei.data.recipes.MixingCauldronRecipe"

export class $MixingCauldronRecipe$Type implements $RecipeType<($MixingCauldronRecipe)> {
static readonly "INSTANCE": $MixingCauldronRecipe$Type


public static "register"<T extends $Recipe<(any)>>(arg0: StringJS): $RecipeType<($MixingCauldronRecipe)>
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$$Type): $RecipeType<($MixingCauldronRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixingCauldronRecipe$Type$$Type = ($MixingCauldronRecipe$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixingCauldronRecipe$Type_ = $MixingCauldronRecipe$Type$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.CandleItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $CandleItem extends $BlockItem {
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
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public static "getHeight"(arg0: $ItemStack$$Type): integer
public "place"(arg0: $BlockPlaceContext$$Type): $InteractionResult
public static "setHeight"(arg0: $ItemStack$$Type, arg1: integer): void
public static "getBaseLayer"(arg0: $ItemStack$$Type): StringJS
public static "getColorValue"(arg0: $DyeColor$$Type, arg1: $ItemStack$$Type): integer
public static "getDyeColorNamed"(arg0: $ItemStack$$Type): $DyeColor
public static "getDyeColorNamed"(arg0: StringJS): integer
public static "setLayerFromBlock"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: StringJS): void
public static "getEffectLocation"(arg0: $ItemStack$$Type): StringJS
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
export type $CandleItem$$Type = ($CandleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CandleItem_ = $CandleItem$$Type;
}}
declare module "net.joefoxe.hexerei.world.structure.structures.HexereiAbstractTreeFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$LevelSimulatedReader, $LevelSimulatedReader$$Type} from "net.minecraft.world.level.LevelSimulatedReader"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $HexereiAbstractTreeFeature extends $Feature<($NoneFeatureConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(arg0: $Codec$$Type<(any)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
public static "isAirOrLeavesOrLogsAt"(arg0: $LevelSimulatedReader$$Type, arg1: $BlockPos$$Type): boolean
public static "isAirOrLeavesAt"(arg0: $LevelSimulatedReader$$Type, arg1: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HexereiAbstractTreeFeature$$Type = ($HexereiAbstractTreeFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HexereiAbstractTreeFeature_ = $HexereiAbstractTreeFeature$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.PestleAndMortarRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $PestleAndMortarRecipe implements $Recipe<($CraftingInput)> {

constructor(arg0: $ItemStack$$Type, arg1: $NonNullList$$Type<($Ingredient$$Type)>, arg2: integer)

public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getOutput"(): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getToastSymbol"(): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getGrindingTime"(): integer
public "getGroup"(): StringJS
public "isIncomplete"(): boolean
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
get "type"(): $RecipeType<(any)>
get "output"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "toastSymbol"(): $ItemStack
get "grindingTime"(): integer
get "group"(): StringJS
get "incomplete"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PestleAndMortarRecipe$$Type = ($PestleAndMortarRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PestleAndMortarRecipe_ = $PestleAndMortarRecipe$$Type;
}}
declare module "net.joefoxe.hexerei.client.renderer.IThirdPersonItemAnimation" {
import {$HumanoidArm, $HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$HumanoidModel, $HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AgeableListModel, $AgeableListModel$$Type} from "net.minecraft.client.model.AgeableListModel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TwoHandedItemAnimation, $TwoHandedItemAnimation$$Type} from "net.joefoxe.hexerei.client.renderer.TwoHandedItemAnimation"

export interface $IThirdPersonItemAnimation {

 "isTwoHanded"(): boolean
 "poseRightArm"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $HumanoidModel$$Type<(T)>, arg2: T, arg3: $HumanoidArm$$Type, arg4: $TwoHandedItemAnimation$$Type): boolean
 "poseLeftArm"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $HumanoidModel$$Type<(T)>, arg2: T, arg3: $HumanoidArm$$Type, arg4: $TwoHandedItemAnimation$$Type): boolean
 "poseRightArmMixin"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $AgeableListModel$$Type<(T)>, arg2: T, arg3: $HumanoidArm$$Type, arg4: $TwoHandedItemAnimation$$Type): boolean
 "poseleftArmMixin"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $AgeableListModel$$Type<(T)>, arg2: T, arg3: $HumanoidArm$$Type, arg4: $TwoHandedItemAnimation$$Type): boolean
get "twoHanded"(): boolean
}

export namespace $IThirdPersonItemAnimation {
const probejs$$marker: never
}
export class $IThirdPersonItemAnimation$$Static implements $IThirdPersonItemAnimation {


 "isTwoHanded"(): boolean
 "poseRightArm"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $HumanoidModel$$Type<(T)>, arg2: T, arg3: $HumanoidArm$$Type, arg4: $TwoHandedItemAnimation$$Type): boolean
 "poseLeftArm"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $HumanoidModel$$Type<(T)>, arg2: T, arg3: $HumanoidArm$$Type, arg4: $TwoHandedItemAnimation$$Type): boolean
 "poseRightArmMixin"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $AgeableListModel$$Type<(T)>, arg2: T, arg3: $HumanoidArm$$Type, arg4: $TwoHandedItemAnimation$$Type): boolean
 "poseleftArmMixin"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $AgeableListModel$$Type<(T)>, arg2: T, arg3: $HumanoidArm$$Type, arg4: $TwoHandedItemAnimation$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IThirdPersonItemAnimation$$Type = ($IThirdPersonItemAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IThirdPersonItemAnimation_ = $IThirdPersonItemAnimation$$Type;
}}
declare module "net.joefoxe.hexerei.world.biomemods.ModVegetalBiomeModifiers" {
import {$PlacedFeature, $PlacedFeature$$Type} from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import {$ModifiableBiomeInfo$BiomeInfo$Builder, $ModifiableBiomeInfo$BiomeInfo$Builder$$Type} from "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo$Builder"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$BiomeModifier, $BiomeModifier$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BiomeModifier$Phase, $BiomeModifier$Phase$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier$Phase"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ModVegetalBiomeModifiers extends $Record implements $BiomeModifier {

constructor(biomes: $HolderSet$$Type<($Biome)>, feature: $Holder$$Type<($PlacedFeature)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "feature"(): $Holder<($PlacedFeature)>
public "codec"(): $MapCodec<($BiomeModifier)>
public "modify"(arg0: $Holder$$Type<($Biome)>, arg1: $BiomeModifier$Phase$$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$$Type): void
public "biomes"(): $HolderSet<($Biome)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModVegetalBiomeModifiers$$Type = ({"feature"?: $Holder$$Type<($PlacedFeature)>, "biomes"?: $HolderSet$$Type<($Biome)>}) | ([feature?: $Holder$$Type<($PlacedFeature)>, biomes?: $HolderSet$$Type<($Biome)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModVegetalBiomeModifiers_ = $ModVegetalBiomeModifiers$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.CrystalBall" {
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
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
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CrystalBallTile, $CrystalBallTile$$Type} from "net.joefoxe.hexerei.tileentity.CrystalBallTile"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ITileEntity, $ITileEntity$$Type} from "net.joefoxe.hexerei.block.ITileEntity"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $CrystalBall extends $BaseEntityBlock implements $ITileEntity<($CrystalBallTile)>, $EntityBlock, $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CrystalBall)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "ANGLE": $IntegerProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "hasBlockEntity"(arg0: $BlockState$$Type): boolean
public "setAngle"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: integer): void
public "getAngle"(arg0: $Level$$Type, arg1: $BlockPos$$Type): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTileEntityClass"(): $Class<($CrystalBallTile)>
public "sync"(): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CrystalBallTile
public "getTileEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CrystalBallTile)>
public "withTileEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CrystalBallTile)>): void
public "onTileEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CrystalBallTile), ($InteractionResult$$Type)>): $InteractionResult
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "tileEntityClass"(): $Class<($CrystalBallTile)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrystalBall$$Type = ($CrystalBall);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrystalBall_ = $CrystalBall$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.ConnectingCarpetSlab" {
import {$CTDyable, $CTDyable$$Type} from "net.joefoxe.hexerei.block.connected.CTDyable"
import {$LootParams$Builder, $LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ConnectingCarpetSlab$South, $ConnectingCarpetSlab$South$$Type} from "net.joefoxe.hexerei.block.custom.ConnectingCarpetSlab$South"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Waxed, $Waxed$$Type} from "net.joefoxe.hexerei.block.connected.Waxed"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$ConnectingCarpetSlab$North, $ConnectingCarpetSlab$North$$Type} from "net.joefoxe.hexerei.block.custom.ConnectingCarpetSlab$North"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$CarpetBlock, $CarpetBlock$$Type} from "net.minecraft.world.level.block.CarpetBlock"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $ConnectingCarpetSlab extends $CarpetBlock implements $Waxed, $CTDyable {
static "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "NORTH": $EnumProperty<($ConnectingCarpetSlab$North)>
static readonly "COLOR": $EnumProperty<($DyeColor)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $EnumProperty<($ConnectingCarpetSlab$South)>
static "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CarpetBlock)>
 "parentBlock": $Block
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Block$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getDyeColor"(arg0: $BlockState$$Type): $DyeColor
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getUnWaxed"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectingCarpetSlab$$Type = ($ConnectingCarpetSlab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectingCarpetSlab_ = $ConnectingCarpetSlab$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.bottles.BottleQuicksilverItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$FoodProperties, $FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$HexBottleItem, $HexBottleItem$$Type} from "net.joefoxe.hexerei.item.custom.bottles.HexBottleItem"

export class $BottleQuicksilverItem extends $HexBottleItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static "FOOD": $FoodProperties
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getTooltip"(): $Component
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "tooltip"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BottleQuicksilverItem$$Type = ($BottleQuicksilverItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BottleQuicksilverItem_ = $BottleQuicksilverItem$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.bottles.BottleBloodtem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$FoodProperties, $FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$HexBottleItem, $HexBottleItem$$Type} from "net.joefoxe.hexerei.item.custom.bottles.HexBottleItem"

export class $BottleBloodtem extends $HexBottleItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static "FOOD": $FoodProperties
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getTooltip"(): $Component
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "tooltip"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BottleBloodtem$$Type = ($BottleBloodtem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BottleBloodtem_ = $BottleBloodtem$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.FloweringLilyPadItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $FloweringLilyPadItem extends $BlockItem {
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
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
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
export type $FloweringLilyPadItem$$Type = ($FloweringLilyPadItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloweringLilyPadItem_ = $FloweringLilyPadItem$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.Candelabra" {
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
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
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
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$PushReaction, $PushReaction$$Type} from "net.minecraft.world.level.material.PushReaction"

export class $Candelabra extends $Block implements $SimpleWaterloggedBlock {
static readonly "HANGING": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "HANGING_SHAPES_TURNED": $VoxelShape
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "HANGING_SHAPES": $VoxelShape
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "GROUNDED_SHAPE": $VoxelShape
static readonly "GROUNDED_SHAPE_TURNED": $VoxelShape
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "LIT": $BooleanProperty
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "isLit"(arg0: $BlockState$$Type): boolean
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public static "extinguish"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public static "canBeLit"(arg0: $BlockState$$Type): boolean
public static "spawnSmokeParticles"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
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
export type $Candelabra$$Type = ($Candelabra);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Candelabra_ = $Candelabra$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.MoonPhases$MoonCondition" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $MoonPhases$MoonCondition extends $Enum<($MoonPhases$MoonCondition)> implements $StringRepresentable {
static readonly "WAXING_CRESCENT": $MoonPhases$MoonCondition
static readonly "FULL_MOON": $MoonPhases$MoonCondition
static readonly "LAST_QUARTER": $MoonPhases$MoonCondition
static readonly "WANING_CRESCENT": $MoonPhases$MoonCondition
static readonly "CODEC": $StringRepresentable$EnumCodec<($MoonPhases$MoonCondition)>
static readonly "WAXING_GIBBOUS": $MoonPhases$MoonCondition
static readonly "WANING_GIBBOUS": $MoonPhases$MoonCondition
static readonly "NONE": $MoonPhases$MoonCondition
static readonly "FIRST_QUARTER": $MoonPhases$MoonCondition
static readonly "NEW_MOON": $MoonPhases$MoonCondition


public "getName"(): StringJS
public static "values"(): ($MoonPhases$MoonCondition)[]
public static "valueOf"(arg0: StringJS): $MoonPhases$MoonCondition
public static "getMoonPhase"(arg0: $Level$$Type): $MoonPhases$MoonCondition
public "getSerializedName"(): StringJS
public static "getMoonCondition"(arg0: StringJS): $MoonPhases$MoonCondition
public "getNameTranslated"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "name"(): StringJS
get "serializedName"(): StringJS
get "nameTranslated"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoonPhases$MoonCondition$$Type = (("none") | ("new_moon") | ("waxing_crescent") | ("first_quarter") | ("waxing_gibbous") | ("full_moon") | ("waning_gibbous") | ("last_quarter") | ("waning_crescent"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoonPhases$MoonCondition_ = $MoonPhases$MoonCondition$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.PageDrawing" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List, $List$$Type} from "java.util.List"
import {$BookWritableTextBox, $BookWritableTextBox$$Type} from "net.joefoxe.hexerei.data.books.BookWritableTextBox"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemRenderer, $ItemRenderer$$Type} from "net.minecraft.client.renderer.entity.ItemRenderer"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec2, $Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$BookParagraph, $BookParagraph$$Type} from "net.joefoxe.hexerei.data.books.BookParagraph"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$PaintSystem, $PaintSystem$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$Triple, $Triple$$Type} from "org.apache.commons.lang3.tuple.Triple"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BookOfShadowsAltarTile, $BookOfShadowsAltarTile$$Type} from "net.joefoxe.hexerei.tileentity.BookOfShadowsAltarTile"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BookData, $BookData$$Type} from "net.joefoxe.hexerei.item.data_components.BookData"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BookImage, $BookImage$$Type} from "net.joefoxe.hexerei.data.books.BookImage"
import {$PaintSystem$ValueSlider, $PaintSystem$ValueSlider$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem$ValueSlider"
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$BookParagraphElements, $BookParagraphElements$$Type} from "net.joefoxe.hexerei.data.books.BookParagraphElements"
import {$ItemDisplayContext, $ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$PageDrawing$PageOn, $PageDrawing$PageOn$$Type} from "net.joefoxe.hexerei.data.books.PageDrawing$PageOn"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BookBlocks, $BookBlocks$$Type} from "net.joefoxe.hexerei.data.books.BookBlocks"
import {$BookPage, $BookPage$$Type} from "net.joefoxe.hexerei.data.books.BookPage"
import {$BookPaintElement, $BookPaintElement$$Type} from "net.joefoxe.hexerei.data.books.BookPaintElement"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BookItemsAndFluids, $BookItemsAndFluids$$Type} from "net.joefoxe.hexerei.data.books.BookItemsAndFluids"
import {$PageDrawing$DrawingType, $PageDrawing$DrawingType$$Type} from "net.joefoxe.hexerei.data.books.PageDrawing$DrawingType"

export class $PageDrawing {
 "drawTooltipStack": boolean
static "itemRenderer": $ItemRenderer
 "drawTooltipScaleOld": float
static readonly "MAX_Y": float
 "bookmarkHoverAmount": $ArrayList<(float)>
 "drawTooltipScale": float
 "lineWidth": float
static readonly "MIN_Y": float
 "bookmarkHovered": $ArrayList<(integer)>
 "altarTile": $BookOfShadowsAltarTile
 "bookmarkHoverAmountOld": $ArrayList<(float)>
static "isClickedOld": boolean
 "tooltipText": $List<($Component)>
static "isClicked": boolean
static readonly "CORNERS": float
 "slotOverlayPageOn": $PageDrawing$PageOn
 "bookmarkHoverAmountRender": $ArrayList<(float)>
 "drawTooltipStackFlag": boolean
 "slotOverlay": $BookImage
static "overlayTextureLocs": $ArrayList<($ResourceLocation)>
static "pageTextureLocs": $ArrayList<($ResourceLocation)>
 "drawTooltipTextFlag": boolean
 "drawTooltip": boolean
 "tooltipStack": $ItemStack
 "lineHeight": float
 "drawSlotOverlay": boolean
static "focusedWritableTextBoxLast": $Triple<($BookOfShadowsAltarTile), ($ResourceLocation), ($BookWritableTextBox)>
static "focusedWritableTextBox": $Triple<($BookOfShadowsAltarTile), ($ResourceLocation), ($BookWritableTextBox)>

constructor(arg0: $BookOfShadowsAltarTile$$Type)

public "tick"(): void
public static "canInteract"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: $BookOfShadowsAltarTile$$Type, arg5: $PageDrawing$PageOn$$Type): boolean
public static "canInteract"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $BookOfShadowsAltarTile$$Type, arg7: $PageDrawing$DrawingType$$Type): boolean
public static "canInteract"(arg0: $Vector3f$$Type, arg1: $Vector3f$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $Player$$Type, arg7: $BookOfShadowsAltarTile$$Type, arg8: $PageDrawing$PageOn$$Type): boolean
public "drawTooltips"(arg0: $BookOfShadowsAltarTile$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: integer, arg5: float): void
public "renderTooltip"(arg0: $ItemStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $PoseStack$$Type, arg3: $List$$Type<($Component$$Type)>, arg4: $Optional$$Type<($TooltipComponent$$Type)>, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public static "renderItem"(arg0: $BookOfShadowsAltarTile$$Type, arg1: $BookItemsAndFluids$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: float, arg6: float, arg7: integer, arg8: integer, arg9: $PageDrawing$PageOn$$Type, arg10: $PageDrawing$DrawingType$$Type): void
public "drawString"(arg0: $BookParagraph$$Type, arg1: $BookOfShadowsAltarTile$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: float, arg6: float, arg7: integer, arg8: integer, arg9: $PageDrawing$PageOn$$Type, arg10: $PageDrawing$DrawingType$$Type): void
public "drawString"(arg0: $BookWritableTextBox$$Type, arg1: $BookOfShadowsAltarTile$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: float, arg6: float, arg7: integer, arg8: integer, arg9: $PageDrawing$PageOn$$Type, arg10: $PageDrawing$DrawingType$$Type): void
public "drawPages"(arg0: $BookOfShadowsAltarTile$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: $PoseStack$$Type, arg6: $MultiBufferSource$$Type, arg7: integer, arg8: integer, arg9: $PageDrawing$DrawingType$$Type, arg10: $ItemDisplayContext$$Type, arg11: float): void
public "drawPages"(arg0: $BookOfShadowsAltarTile$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: $PoseStack$$Type, arg6: $MultiBufferSource$$Type, arg7: integer, arg8: integer, arg9: float, arg10: $PageDrawing$DrawingType$$Type): void
public static "renderGuiItem"(arg0: $MultiBufferSource$$Type, arg1: $Font$$Type, arg2: $ItemStack$$Type, arg3: $PoseStack$$Type, arg4: float, arg5: float, arg6: integer, arg7: integer): void
public static "getAltars"(arg0: $Player$$Type): $List<($BlockPos)>
public "interactClick"(arg0: $BookOfShadowsAltarTile$$Type, arg1: $Player$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $PageDrawing$DrawingType$$Type): boolean
public "releaseClick"(arg0: $BookOfShadowsAltarTile$$Type, arg1: $Player$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $PageDrawing$DrawingType$$Type): boolean
public static "renderBlock"(arg0: $BookOfShadowsAltarTile$$Type, arg1: $BookBlocks$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: float, arg6: float, arg7: integer, arg8: integer, arg9: $PageDrawing$PageOn$$Type, arg10: $PageDrawing$DrawingType$$Type): void
public "drawSlot"(arg0: $BookOfShadowsAltarTile$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: $PageDrawing$PageOn$$Type, arg9: $PageDrawing$DrawingType$$Type): void
public "drawEntity"(arg0: $BookOfShadowsAltarTile$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: float, arg5: float, arg6: float, arg7: integer, arg8: float, arg9: float, arg10: $Entity$$Type, arg11: integer, arg12: integer, arg13: $PageDrawing$PageOn$$Type, arg14: $PageDrawing$DrawingType$$Type): void
public "drawImage"(arg0: $BookImage$$Type, arg1: $BookOfShadowsAltarTile$$Type, arg2: float, arg3: float, arg4: $PoseStack$$Type, arg5: $MultiBufferSource$$Type, arg6: float, arg7: integer, arg8: integer, arg9: $PageDrawing$PageOn$$Type, arg10: integer, arg11: $PageDrawing$DrawingType$$Type, arg12: $ItemDisplayContext$$Type): void
public "drawImage"(arg0: $BookImage$$Type, arg1: $BookOfShadowsAltarTile$$Type, arg2: float, arg3: float, arg4: $PoseStack$$Type, arg5: $MultiBufferSource$$Type, arg6: float, arg7: integer, arg8: integer, arg9: $PageDrawing$PageOn$$Type, arg10: $PageDrawing$DrawingType$$Type): void
public "drawImage"(arg0: $BookImage$$Type, arg1: $BookOfShadowsAltarTile$$Type, arg2: float, arg3: float, arg4: $PoseStack$$Type, arg5: $MultiBufferSource$$Type, arg6: float, arg7: integer, arg8: integer, arg9: $PageDrawing$PageOn$$Type, arg10: integer, arg11: $PageDrawing$DrawingType$$Type, arg12: $ItemDisplayContext$$Type, arg13: boolean): void
public static "getModNameForModId"(arg0: StringJS): StringJS
public "drawTitle"(arg0: $BookOfShadowsAltarTile$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: integer, arg5: $PageDrawing$PageOn$$Type, arg6: $PageDrawing$DrawingType$$Type): void
public static "getTagStack"(arg0: $TagKey$$Type<($Item)>): $ItemStack
public static "getTagBlock"(arg0: $TagKey$$Type<($Block)>): $Block
public "drawPage"(arg0: $BookPage$$Type, arg1: $BookOfShadowsAltarTile$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $PoseStack$$Type, arg7: $MultiBufferSource$$Type, arg8: integer, arg9: integer, arg10: $PageDrawing$PageOn$$Type, arg11: $PageDrawing$DrawingType$$Type, arg12: $ItemDisplayContext$$Type, arg13: integer, arg14: float): void
public "drawPage"(arg0: $BookPage$$Type, arg1: $BookOfShadowsAltarTile$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $PoseStack$$Type, arg7: $MultiBufferSource$$Type, arg8: integer, arg9: integer, arg10: $PageDrawing$PageOn$$Type, arg11: $PageDrawing$DrawingType$$Type, arg12: $ItemDisplayContext$$Type, arg13: float): void
public "drawItemInSlot"(arg0: $BookOfShadowsAltarTile$$Type, arg1: $BookItemsAndFluids$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: float, arg6: float, arg7: integer, arg8: integer, arg9: $PageDrawing$PageOn$$Type, arg10: $PageDrawing$DrawingType$$Type): void
public "drawBlock"(arg0: $BookOfShadowsAltarTile$$Type, arg1: $BookBlocks$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: float, arg6: float, arg7: integer, arg8: integer, arg9: $PageDrawing$PageOn$$Type, arg10: $PageDrawing$DrawingType$$Type): void
public "drawBasePage"(arg0: $BookImage$$Type, arg1: $BookOfShadowsAltarTile$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $PoseStack$$Type, arg7: $MultiBufferSource$$Type, arg8: float, arg9: integer, arg10: integer, arg11: $PageDrawing$PageOn$$Type, arg12: integer, arg13: $PageDrawing$DrawingType$$Type, arg14: $ItemDisplayContext$$Type): void
public "drawBookmark"(arg0: $BookImage$$Type, arg1: $BookOfShadowsAltarTile$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: $PageDrawing$PageOn$$Type, arg9: integer, arg10: $PageDrawing$DrawingType$$Type, arg11: $ItemDisplayContext$$Type): void
public static "checkClick"(arg0: $BookData$$Type, arg1: $BookOfShadowsAltarTile$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $PageDrawing$DrawingType$$Type): boolean
public "resetLines"(): void
public static "getPointOnPlane"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: $BookOfShadowsAltarTile$$Type, arg5: $PageDrawing$PageOn$$Type): $Vec3
public static "getPointOnPlane"(arg0: $Vector3f$$Type, arg1: $Vector3f$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $BookOfShadowsAltarTile$$Type, arg7: $PageDrawing$PageOn$$Type): $Vec3
public static "getIntersectPoint"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BookOfShadowsAltarTile$$Type, arg3: $PageDrawing$PageOn$$Type): $Vec2
public static "getIntersectPoint"(arg0: $Vector3f$$Type, arg1: $Vector3f$$Type, arg2: $Vec3$$Type, arg3: $Vec3$$Type, arg4: $BookOfShadowsAltarTile$$Type, arg5: $PageDrawing$PageOn$$Type): $Vec2
public static "renderGuiItemCount"(arg0: $MultiBufferSource$$Type, arg1: $Font$$Type, arg2: $ItemStack$$Type, arg3: $PoseStack$$Type, arg4: float, arg5: float, arg6: integer, arg7: integer): void
public "drawTooltipText"(arg0: $BookOfShadowsAltarTile$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer, arg5: integer, arg6: float): void
public static "translateToLeftPage"(arg0: $BookOfShadowsAltarTile$$Type, arg1: $PoseStack$$Type, arg2: $PageDrawing$DrawingType$$Type, arg3: $ItemDisplayContext$$Type): void
public static "translateToRightPage"(arg0: $BookOfShadowsAltarTile$$Type, arg1: $PoseStack$$Type, arg2: $PageDrawing$DrawingType$$Type, arg3: $ItemDisplayContext$$Type): void
public static "renderFluidBlockGUI"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $FluidStack$$Type, arg3: float, arg4: integer, arg5: integer): void
public "drawPaintElement"(arg0: $BookPaintElement$$Type, arg1: $BookOfShadowsAltarTile$$Type, arg2: float, arg3: float, arg4: $PoseStack$$Type, arg5: $MultiBufferSource$$Type, arg6: float, arg7: integer, arg8: integer, arg9: $PageDrawing$PageOn$$Type, arg10: integer, arg11: $PageDrawing$DrawingType$$Type, arg12: $ItemDisplayContext$$Type, arg13: float): void
public static "getFluidTooltip"(arg0: $BookItemsAndFluids$$Type): $List<($Component)>
public "drawLivingEntity"(arg0: $BookOfShadowsAltarTile$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: float, arg5: float, arg6: float, arg7: integer, arg8: float, arg9: float, arg10: $LivingEntity$$Type, arg11: integer, arg12: integer, arg13: $PageDrawing$PageOn$$Type, arg14: $PageDrawing$DrawingType$$Type): void
public "drawTooltipImage"(arg0: $ItemStack$$Type, arg1: $BookOfShadowsAltarTile$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer, arg6: integer, arg7: float): void
public "getBookPageSeed"(arg0: StringJS, arg1: $UUID$$Type): integer
public "drawBaseButtons"(arg0: $BookOfShadowsAltarTile$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: $PoseStack$$Type, arg6: $MultiBufferSource$$Type, arg7: integer, arg8: integer, arg9: boolean, arg10: boolean, arg11: integer, arg12: integer, arg13: $PageDrawing$DrawingType$$Type, arg14: $ItemDisplayContext$$Type, arg15: boolean, arg16: float): void
public "drawBaseButtons"(arg0: $BookOfShadowsAltarTile$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: $PoseStack$$Type, arg6: $MultiBufferSource$$Type, arg7: integer, arg8: integer, arg9: boolean, arg10: boolean, arg11: integer, arg12: integer, arg13: $PageDrawing$DrawingType$$Type, arg14: float): void
public "drawFluidInSlot"(arg0: $BookOfShadowsAltarTile$$Type, arg1: $BookItemsAndFluids$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: float, arg6: float, arg7: integer, arg8: integer, arg9: $PageDrawing$PageOn$$Type, arg10: $PageDrawing$DrawingType$$Type): void
public static "calculatePlaneNormal"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $Vec3$$Type): $Vec3
public static "showLinkScreenClient"(arg0: StringJS): void
public "drawPaintColors"(arg0: $PaintSystem$$Type, arg1: $BookOfShadowsAltarTile$$Type, arg2: float, arg3: float, arg4: float, arg5: $PoseStack$$Type, arg6: $MultiBufferSource$$Type, arg7: float, arg8: integer, arg9: integer, arg10: $PageDrawing$PageOn$$Type, arg11: $PageDrawing$DrawingType$$Type, arg12: $ItemDisplayContext$$Type, arg13: float): void
public "drawPaintColorSlider"(arg0: float, arg1: $PaintSystem$ValueSlider$$Type, arg2: $BookOfShadowsAltarTile$$Type, arg3: float, arg4: float, arg5: float, arg6: $PoseStack$$Type, arg7: $MultiBufferSource$$Type, arg8: float, arg9: integer, arg10: integer, arg11: $PageDrawing$PageOn$$Type, arg12: integer, arg13: $PageDrawing$DrawingType$$Type, arg14: $ItemDisplayContext$$Type, arg15: float): void
public "resetLinesNewBox"(arg0: $List$$Type<($BookParagraphElements$$Type)>, arg1: integer): $BookParagraphElements
public static "adjustCombinedLight"(arg0: integer, arg1: integer): integer
public static "clearFocusedWritableTextBox"(): void
public static "setFocusedWritableTextBoxNull"(): void
public static "setFocusedWritableTextBox"(arg0: $BookOfShadowsAltarTile$$Type, arg1: $ResourceLocation$$Type, arg2: $BookWritableTextBox$$Type): void
public static "translateToLeftPageUnder"(arg0: $BookOfShadowsAltarTile$$Type, arg1: $PoseStack$$Type, arg2: $PageDrawing$DrawingType$$Type, arg3: $ItemDisplayContext$$Type): void
public static "translateToLeftPagePrevious"(arg0: $BookOfShadowsAltarTile$$Type, arg1: $PoseStack$$Type, arg2: $PageDrawing$DrawingType$$Type, arg3: $ItemDisplayContext$$Type): void
public static "translateToRightPageUnder"(arg0: $BookOfShadowsAltarTile$$Type, arg1: $PoseStack$$Type, arg2: $PageDrawing$DrawingType$$Type, arg3: $ItemDisplayContext$$Type): void
public static "translateToRightPagePrevious"(arg0: $BookOfShadowsAltarTile$$Type, arg1: $PoseStack$$Type, arg2: $PageDrawing$DrawingType$$Type, arg3: $ItemDisplayContext$$Type): void
public static "getLookingAtPointOnPlane"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $Vec3$$Type, arg3: $Vec3$$Type, arg4: $Vec3$$Type): $Vec2
public "translateToMiddleButton"(arg0: $BookOfShadowsAltarTile$$Type, arg1: $PoseStack$$Type, arg2: $PageDrawing$DrawingType$$Type, arg3: $ItemDisplayContext$$Type): void
public static "translateToLeftPagePrevious2"(arg0: $BookOfShadowsAltarTile$$Type, arg1: $PoseStack$$Type, arg2: $PageDrawing$DrawingType$$Type, arg3: $ItemDisplayContext$$Type): void
public static "translateToRightPagePrevious2"(arg0: $BookOfShadowsAltarTile$$Type, arg1: $PoseStack$$Type, arg2: $PageDrawing$DrawingType$$Type, arg3: $ItemDisplayContext$$Type): void
public "drawPaintColorSliderBar"(arg0: float, arg1: $PaintSystem$ValueSlider$$Type, arg2: $BookOfShadowsAltarTile$$Type, arg3: float, arg4: float, arg5: float, arg6: $PoseStack$$Type, arg7: $MultiBufferSource$$Type, arg8: float, arg9: integer, arg10: integer, arg11: $PageDrawing$PageOn$$Type, arg12: integer, arg13: integer, arg14: $PageDrawing$DrawingType$$Type, arg15: $ItemDisplayContext$$Type, arg16: boolean, arg17: float): void
public static "renderGuiItemDecorations"(arg0: $MultiBufferSource$$Type, arg1: $Font$$Type, arg2: $ItemStack$$Type, arg3: $PoseStack$$Type, arg4: float, arg5: float, arg6: integer, arg7: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PageDrawing$$Type = ($PageDrawing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PageDrawing_ = $PageDrawing$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.CauldronEmptyingRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$CauldronEmptyingRecipe, $CauldronEmptyingRecipe$$Type} from "net.joefoxe.hexerei.data.recipes.CauldronEmptyingRecipe"

export class $CauldronEmptyingRecipe$Serializer implements $RecipeSerializer<($CauldronEmptyingRecipe)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($CauldronEmptyingRecipe)>

constructor()

public "codec"(): $MapCodec<($CauldronEmptyingRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($CauldronEmptyingRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CauldronEmptyingRecipe$Serializer$$Type = ($CauldronEmptyingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CauldronEmptyingRecipe$Serializer_ = $CauldronEmptyingRecipe$Serializer$$Type;
}}
declare module "net.joefoxe.hexerei.tileentity.CuttingCrystalTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$AtomicInteger, $AtomicInteger$$Type} from "java.util.concurrent.atomic.AtomicInteger"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CuttingCrystalTile extends $BlockEntity {
 "isParent": boolean
static readonly "NEXT_BREAKER_ID": $AtomicInteger
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "boundPos": $List<($BlockPos)>

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "tick"(): void
public "setChanged"(): void
public static "getDistance"(arg0: float, arg1: float, arg2: float, arg3: float): double
public "cutTree"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "isBreakable"(arg0: $BlockState$$Type, arg1: float): boolean
public "onBlockBroken"(arg0: $BlockState$$Type): void
public "canBreak"(arg0: $BlockState$$Type, arg1: float): boolean
public "getAngle"(arg0: $Vec3$$Type): float
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "destroyNextTick"(): void
public "dropItemFromCutTree"(arg0: $BlockPos$$Type, arg1: $ItemStack$$Type): void
public "rotateAroundVec"(arg0: $Vec3$$Type, arg1: float, arg2: $Vec3$$Type): $Vec3
public static "getDistanceToEntity"(arg0: $Entity$$Type, arg1: $BlockPos$$Type): double
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuttingCrystalTile$$Type = ($CuttingCrystalTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CuttingCrystalTile_ = $CuttingCrystalTile$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.PaintSystem$Colors" {
import {$PaintSystem, $PaintSystem$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem"
import {$List, $List$$Type} from "java.util.List"
import {$PaintSystem$Colors$ColorSelection, $PaintSystem$Colors$ColorSelection$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem$Colors$ColorSelection"

export class $PaintSystem$Colors {
 "colors": $List<($PaintSystem$Colors$ColorSelection)>

constructor(arg0: $List$$Type<($PaintSystem$Colors$ColorSelection$$Type)>)

public "tick"(): void
public "setColor"(arg0: integer): void
public "getColor"(): integer
public "cycleColorBack"(arg0: $PaintSystem$$Type): void
public "cycleColor"(arg0: $PaintSystem$$Type): void
public "updateColorSelectionTargetPos"(): void
set "color"(value: integer)
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintSystem$Colors$$Type = ($PaintSystem$Colors);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintSystem$Colors_ = $PaintSystem$Colors$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.BookTooltipExtra" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"

export class $BookTooltipExtra {
static readonly "CODEC": $Codec<($BookTooltipExtra)>
 "color": integer
 "color_hex": StringJS
 "text": StringJS
 "type": StringJS


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookTooltipExtra$$Type = ($BookTooltipExtra);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookTooltipExtra_ = $BookTooltipExtra$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.bottles.HexBottleItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $HexBottleItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getTooltip"(): $Component
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "tooltip"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HexBottleItem$$Type = ($HexBottleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HexBottleItem_ = $HexBottleItem$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.AddBaseToCandleRecipe$Type" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$AddBaseToCandleRecipe, $AddBaseToCandleRecipe$$Type} from "net.joefoxe.hexerei.data.recipes.AddBaseToCandleRecipe"

export class $AddBaseToCandleRecipe$Type implements $RecipeType<($AddBaseToCandleRecipe)> {
static readonly "INSTANCE": $AddBaseToCandleRecipe$Type


public static "register"<T extends $Recipe<(any)>>(arg0: StringJS): $RecipeType<($AddBaseToCandleRecipe)>
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$$Type): $RecipeType<($AddBaseToCandleRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddBaseToCandleRecipe$Type$$Type = ($AddBaseToCandleRecipe$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddBaseToCandleRecipe$Type_ = $AddBaseToCandleRecipe$Type$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.BlendItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $BlendItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlendItem$$Type = ($BlendItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlendItem_ = $BlendItem$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.WaxBlendItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BiMap, $BiMap$$Type} from "com.google.common.collect.BiMap"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WaxBlendItem extends $Item {
static readonly "WAX_OFF_BY_BLOCK": $Supplier<($BiMap<($Block), ($Block)>)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "WAXABLES": $BiMap<($Block), ($Block)>
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "getWaxed"(arg0: $BlockState$$Type): $Optional<($BlockState)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaxBlendItem$$Type = ($WaxBlendItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaxBlendItem_ = $WaxBlendItem$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.MixingCauldronRecipe$MixingCauldronRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"

export class $MixingCauldronRecipe$MixingCauldronRecipeInput implements $RecipeInput {

constructor(arg0: $List$$Type<($ItemStack$$Type)>)

public "getItem"(arg0: integer): $ItemStack
public "size"(): integer
public "isEmpty"(): boolean
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixingCauldronRecipe$MixingCauldronRecipeInput$$Type = ($MixingCauldronRecipe$MixingCauldronRecipeInput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixingCauldronRecipe$MixingCauldronRecipeInput_ = $MixingCauldronRecipe$MixingCauldronRecipeInput$$Type;
}}
declare module "net.joefoxe.hexerei.tileentity.BroomStandTile" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Clearable, $Clearable$$Type} from "net.minecraft.world.Clearable"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LockCode, $LockCode$$Type} from "net.minecraft.world.LockCode"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ItemStackHandler, $ItemStackHandler$$Type} from "net.neoforged.neoforge.items.ItemStackHandler"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RandomizableContainerBlockEntity, $RandomizableContainerBlockEntity$$Type} from "net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $BroomStandTile extends $RandomizableContainerBlockEntity implements $Clearable, $MenuProvider {
 "name": $Component
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "lockKey": $LockCode
readonly "itemHandler": $ItemStackHandler

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "tick"(): void
public "sync"(): void
public "getItem"(arg0: integer): $ItemStack
public "onLoad"(): void
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "clearContent"(): void
public "setChanged"(): void
public "interact"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: boolean): integer
public "getAngle"(arg0: $Vec3$$Type): float
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "requestModelDataUpdate"(): void
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public static "tryClear"(arg0: any): void
public "getDisplayName"(): $Component
public "getLevel"(): $Level
public "getBlockPos"(): $BlockPos
public static "setBlockEntityLootTable"(arg0: $BlockGetter$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $ResourceKey$$Type<($LootTable)>): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "containerSize"(): integer
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "displayName"(): $Component
get "level"(): $Level
get "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BroomStandTile$$Type = ($BroomStandTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BroomStandTile_ = $BroomStandTile$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.PaintSystem$ActionManager" {
import {$PaintSystem, $PaintSystem$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem"
import {$PaintSystem$Action, $PaintSystem$Action$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem$Action"

export class $PaintSystem$ActionManager {

constructor(arg0: $PaintSystem$$Type)

public "redo"(): void
public "undo"(): void
public "beginAction"(arg0: $PaintSystem$Action$$Type): void
public "commitAction"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintSystem$ActionManager$$Type = ($PaintSystem$ActionManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintSystem$ActionManager_ = $PaintSystem$ActionManager$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.WaxingKitItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $WaxingKitItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: boolean)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaxingKitItem$$Type = ($WaxingKitItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaxingKitItem_ = $WaxingKitItem$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.MahoganyLog" {
import {$RotatedPillarBlock, $RotatedPillarBlock$$Type} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MahoganyLog extends $RotatedPillarBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MahoganyLog$$Type = ($MahoganyLog);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MahoganyLog_ = $MahoganyLog$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.SageBurningPlate" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SageBurningPlateTile, $SageBurningPlateTile$$Type} from "net.joefoxe.hexerei.tileentity.SageBurningPlateTile"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ITileEntity, $ITileEntity$$Type} from "net.joefoxe.hexerei.block.ITileEntity"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $SageBurningPlate extends $Block implements $ITileEntity<($SageBurningPlateTile)>, $EntityBlock, $SimpleWaterloggedBlock {
static readonly "MODE": $IntegerProperty
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
static readonly "SHAPE_TURNED": $VoxelShape
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "LIT": $BooleanProperty
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTileEntityClass"(): $Class<($SageBurningPlateTile)>
public "sync"(): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $SageBurningPlateTile
public "getTileEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($SageBurningPlateTile)>
public "withTileEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($SageBurningPlateTile)>): void
public "onTileEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($SageBurningPlateTile), ($InteractionResult$$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "tileEntityClass"(): $Class<($SageBurningPlateTile)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SageBurningPlate$$Type = ($SageBurningPlate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SageBurningPlate_ = $SageBurningPlate$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.PaintSystem$Colors$ColorSelection" {
import {$PaintSystem$Colors$ColorSelectionPosData, $PaintSystem$Colors$ColorSelectionPosData$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem$Colors$ColorSelectionPosData"

export class $PaintSystem$Colors$ColorSelection {
 "colorPosData": $PaintSystem$Colors$ColorSelectionPosData
 "colorPosDataOld": $PaintSystem$Colors$ColorSelectionPosData
 "color": integer
 "target": $PaintSystem$Colors$ColorSelectionPosData

constructor(arg0: integer, arg1: $PaintSystem$Colors$ColorSelectionPosData$$Type)

public "tick"(): void
public "setColor"(arg0: integer): void
public "getColor"(): integer
set "color"(value: integer)
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintSystem$Colors$ColorSelection$$Type = ($PaintSystem$Colors$ColorSelection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintSystem$Colors$ColorSelection_ = $PaintSystem$Colors$ColorSelection$$Type;
}}
declare module "net.joefoxe.hexerei.light.LambHexereiDynamicLight" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LevelRenderer, $LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"

export interface $LambHexereiDynamicLight {

 "getLuminanceH"(): integer
 "dynamicLightTickH"(): void
 "getDynamicLightXH"(): double
 "getDynamicLightYH"(): double
 "getDynamicLightZH"(): double
 "getDynamicLightWorldH"(): $Level
 "resetDynamicLightH"(): void
 "isDynamicLightEnabledH"(): boolean
 "lambdynlights$updateDynamicLightH"(arg0: $LevelRenderer$$Type): boolean
 "setHexereiDynamicLightEnabled"(arg0: boolean): void
 "shouldUpdateDynamicLightH"(): boolean
 "lambdynlights$scheduleTrackedChunksRebuildH"(arg0: $LevelRenderer$$Type): void
get "luminanceH"(): integer
get "dynamicLightXH"(): double
get "dynamicLightYH"(): double
get "dynamicLightZH"(): double
get "dynamicLightWorldH"(): $Level
get "dynamicLightEnabledH"(): boolean
set "hexereiDynamicLightEnabled"(value: boolean)
}

export namespace $LambHexereiDynamicLight {
const probejs$$marker: never
}
export class $LambHexereiDynamicLight$$Static implements $LambHexereiDynamicLight {


 "getLuminanceH"(): integer
 "dynamicLightTickH"(): void
 "getDynamicLightXH"(): double
 "getDynamicLightYH"(): double
 "getDynamicLightZH"(): double
 "getDynamicLightWorldH"(): $Level
 "resetDynamicLightH"(): void
 "isDynamicLightEnabledH"(): boolean
 "lambdynlights$updateDynamicLightH"(arg0: $LevelRenderer$$Type): boolean
 "setHexereiDynamicLightEnabled"(arg0: boolean): void
 "shouldUpdateDynamicLightH"(): boolean
 "lambdynlights$scheduleTrackedChunksRebuildH"(arg0: $LevelRenderer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LambHexereiDynamicLight$$Type = ($LambHexereiDynamicLight);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LambHexereiDynamicLight_ = $LambHexereiDynamicLight$$Type;
}}
declare module "net.joefoxe.hexerei.world.structure.structures.DarkCovenStructure" {
import {$WorldGenLevel, $WorldGenLevel$$Type} from "net.minecraft.world.level.WorldGenLevel"
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$BoundingBox, $BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$StructureManager, $StructureManager$$Type} from "net.minecraft.world.level.StructureManager"
import {$StructureType, $StructureType$$Type} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Structure$GenerationStub, $Structure$GenerationStub$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ChunkGenerator, $ChunkGenerator$$Type} from "net.minecraft.world.level.chunk.ChunkGenerator"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PiecesContainer, $PiecesContainer$$Type} from "net.minecraft.world.level.levelgen.structure.pieces.PiecesContainer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"
import {$Structure$StructureSettings, $Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $DarkCovenStructure extends $Structure {
static readonly "CODEC": $MapCodec<($DarkCovenStructure)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>

constructor(arg0: $Structure$StructureSettings$$Type, arg1: $Holder$$Type<($StructureTemplatePool)>, arg2: $Optional$$Type<($ResourceLocation$$Type)>, arg3: integer, arg4: $HeightProvider$$Type, arg5: $Optional$$Type<($Heightmap$Types$$Type)>, arg6: integer)

public "type"(): $StructureType<(any)>
public "afterPlace"(arg0: $WorldGenLevel$$Type, arg1: $StructureManager$$Type, arg2: $ChunkGenerator$$Type, arg3: $RandomSource$$Type, arg4: $BoundingBox$$Type, arg5: $ChunkPos$$Type, arg6: $PiecesContainer$$Type): void
public static "addPieces"(arg0: $Structure$GenerationContext$$Type, arg1: $Holder$$Type<($StructureTemplatePool)>, arg2: $Optional$$Type<($ResourceLocation$$Type)>, arg3: integer, arg4: $BlockPos$$Type, arg5: boolean, arg6: $Optional$$Type<($Heightmap$Types$$Type)>, arg7: integer): $Optional<($Structure$GenerationStub)>
public "findGenerationPoint"(arg0: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DarkCovenStructure$$Type = ($DarkCovenStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DarkCovenStructure_ = $DarkCovenStructure$$Type;
}}
declare module "net.joefoxe.hexerei.block.connected.WaxedLayeredBlock" {
import {$RotatedPillarBlock, $RotatedPillarBlock$$Type} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LayeredBlock, $LayeredBlock$$Type} from "net.joefoxe.hexerei.block.connected.LayeredBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Waxed, $Waxed$$Type} from "net.joefoxe.hexerei.block.connected.Waxed"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WaxedLayeredBlock extends $LayeredBlock implements $Waxed {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
public "getUnWaxed"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaxedLayeredBlock$$Type = ($WaxedLayeredBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaxedLayeredBlock_ = $WaxedLayeredBlock$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.ConnectingTable" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
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
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ConnectingTable$North, $ConnectingTable$North$$Type} from "net.joefoxe.hexerei.block.custom.ConnectingTable$North"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$ConnectingTable$South, $ConnectingTable$South$$Type} from "net.joefoxe.hexerei.block.custom.ConnectingTable$South"

export class $ConnectingTable extends $Block implements $SimpleWaterloggedBlock {
static "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "NORTH": $EnumProperty<($ConnectingTable$North)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $EnumProperty<($ConnectingTable$South)>
static "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
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
export type $ConnectingTable$$Type = ($ConnectingTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectingTable_ = $ConnectingTable$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.ModBoatItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ModBoatEntity$Type, $ModBoatEntity$Type$$Type} from "net.joefoxe.hexerei.client.renderer.entity.custom.ModBoatEntity$Type"

export class $ModBoatItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: boolean, arg1: $ModBoatEntity$Type$$Type, arg2: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBoatItem$$Type = ($ModBoatItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBoatItem_ = $ModBoatItem$$Type;
}}
declare module "net.joefoxe.hexerei.client.renderer.entity.custom.ModBoatEntity$Type" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"

export class $ModBoatEntity$Type extends $Enum<($ModBoatEntity$Type)> {
static readonly "POLISHED_MAHOGANY": $ModBoatEntity$Type
static readonly "WILLOW": $ModBoatEntity$Type
static readonly "MAHOGANY": $ModBoatEntity$Type
static readonly "POLISHED_WILLOW": $ModBoatEntity$Type


public "getName"(): StringJS
public "toString"(): StringJS
public static "values"(): ($ModBoatEntity$Type)[]
public static "valueOf"(arg0: StringJS): $ModBoatEntity$Type
public static "byId"(arg0: integer): $ModBoatEntity$Type
public static "byName"(arg0: StringJS): $ModBoatEntity$Type
public "getPlanks"(): $Block
get "name"(): StringJS
get "planks"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModBoatEntity$Type$$Type = (("willow") | ("polished_willow") | ("mahogany") | ("polished_mahogany"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModBoatEntity$Type_ = $ModBoatEntity$Type$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.BookOfShadowsRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BookOfShadowsRecipe, $BookOfShadowsRecipe$$Type} from "net.joefoxe.hexerei.data.recipes.BookOfShadowsRecipe"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $BookOfShadowsRecipe$Serializer implements $RecipeSerializer<($BookOfShadowsRecipe)> {
static readonly "CODEC": $MapCodec<($BookOfShadowsRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($BookOfShadowsRecipe)>

constructor()

public "codec"(): $MapCodec<($BookOfShadowsRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($BookOfShadowsRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOfShadowsRecipe$Serializer$$Type = ($BookOfShadowsRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookOfShadowsRecipe$Serializer_ = $BookOfShadowsRecipe$Serializer$$Type;
}}
declare module "net.joefoxe.hexerei.tileentity.CourierPackageTile" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Clearable, $Clearable$$Type} from "net.minecraft.world.Clearable"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LockCode, $LockCode$$Type} from "net.minecraft.world.LockCode"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RandomizableContainerBlockEntity, $RandomizableContainerBlockEntity$$Type} from "net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $CourierPackageTile extends $RandomizableContainerBlockEntity implements $Container, $Clearable {
 "name": $Component
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "lockKey": $LockCode

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "tick"(): void
public "sync"(): void
public "isEmpty"(): boolean
public "save"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "getType"(): $BlockEntityType<(any)>
public "saveData"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "startOpen"(arg0: $Player$$Type): void
public "stopOpen"(arg0: $Player$$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "countItem"(arg0: $Item$$Type): integer
public "clearContent"(): void
public "setChanged"(): void
public "interact"(arg0: $Player$$Type): boolean
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "loadFromTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getContainerSize"(): integer
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getMaxStackSize"(): integer
public static "getDistanceToEntity"(arg0: $Entity$$Type, arg1: $BlockPos$$Type): double
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "getItem"(arg0: integer): $ItemStack
public "stillValid"(arg0: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public static "tryClear"(arg0: any): void
public "getLevel"(): $Level
public "getBlockPos"(): $BlockPos
public static "setBlockEntityLootTable"(arg0: $BlockGetter$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $ResourceKey$$Type<($LootTable)>): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "empty"(): boolean
get "type"(): $BlockEntityType<(any)>
get "containerSize"(): integer
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "maxStackSize"(): integer
get "level"(): $Level
get "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CourierPackageTile$$Type = ($CourierPackageTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CourierPackageTile_ = $CourierPackageTile$$Type;
}}
declare module "net.joefoxe.hexerei.world.structure.structures.HexereiWitchHazelTreeFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$LevelSimulatedReader, $LevelSimulatedReader$$Type} from "net.minecraft.world.level.LevelSimulatedReader"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $HexereiWitchHazelTreeFeature extends $Feature<($NoneFeatureConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(arg0: $Codec$$Type<(any)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
public static "isAirOrLeavesOrLogsAt"(arg0: $LevelSimulatedReader$$Type, arg1: $BlockPos$$Type): boolean
public static "isAirOrLeavesAt"(arg0: $LevelSimulatedReader$$Type, arg1: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HexereiWitchHazelTreeFeature$$Type = ($HexereiWitchHazelTreeFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HexereiWitchHazelTreeFeature_ = $HexereiWitchHazelTreeFeature$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.DryingRackRecipe$Type" {
import {$DryingRackRecipe, $DryingRackRecipe$$Type} from "net.joefoxe.hexerei.data.recipes.DryingRackRecipe"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"

export class $DryingRackRecipe$Type implements $RecipeType<($DryingRackRecipe)> {
static readonly "INSTANCE": $DryingRackRecipe$Type
static readonly "ID": StringJS


public static "register"<T extends $Recipe<(any)>>(arg0: StringJS): $RecipeType<($DryingRackRecipe)>
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$$Type): $RecipeType<($DryingRackRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DryingRackRecipe$Type$$Type = ($DryingRackRecipe$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DryingRackRecipe$Type_ = $DryingRackRecipe$Type$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.BookHyperlink" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"

export class $BookHyperlink {
 "chapter": integer
static readonly "CODEC": $Codec<($BookHyperlink)>
 "page": integer
 "id": StringJS
static "EMPTY": $BookHyperlink
 "url": StringJS

constructor(arg0: integer, arg1: integer)
constructor(arg0: integer, arg1: integer, arg2: StringJS, arg3: StringJS)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookHyperlink$$Type = ($BookHyperlink);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookHyperlink_ = $BookHyperlink$$Type;
}}
declare module "net.joefoxe.hexerei.fluid.PotionFluid" {
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$PotionContents, $PotionContents$$Type} from "net.minecraft.world.item.alchemy.PotionContents"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $PotionFluid extends $FlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getSource"(): $Fluid
public static "of"(arg0: integer, arg1: $PotionContents$$Type): $FluidStack
public "getTickDelay"(arg0: $LevelReader$$Type): integer
public "getFlowing"(): $Fluid
public "getFluidType"(): $FluidType
public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "getKeyOrThrow"<V>(arg0: $Potion$$Type): $ResourceLocation
public "getBucket"(): $Item
public static "addPotionToFluidStack"(arg0: $FluidStack$$Type, arg1: $PotionContents$$Type): $FluidStack
public static "wrap"(arg1: any): $ReplacementMatch
get "source"(): $Fluid
get "flowing"(): $Fluid
get "fluidType"(): $FluidType
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionFluid$$Type = ($PotionFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionFluid_ = $PotionFluid$$Type;
}}
declare module "net.joefoxe.hexerei.client.renderer.entity.custom.BroomEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ServerEntity, $ServerEntity$$Type} from "net.minecraft.server.level.ServerEntity"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$BroomEntity$BroomSlot, $BroomEntity$BroomSlot$$Type} from "net.joefoxe.hexerei.client.renderer.entity.custom.BroomEntity$BroomSlot"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$ClientboundAddEntityPacket, $ClientboundAddEntityPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundAddEntityPacket"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BroomType, $BroomType$$Type} from "net.joefoxe.hexerei.client.renderer.entity.BroomType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$HasCustomInventoryScreen, $HasCustomInventoryScreen$$Type} from "net.minecraft.world.entity.HasCustomInventoryScreen"
import {$BlockUtil$FoundRectangle, $BlockUtil$FoundRectangle$$Type} from "net.minecraft.BlockUtil$FoundRectangle"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PortalProcessor, $PortalProcessor$$Type} from "net.minecraft.world.entity.PortalProcessor"
import {$ItemStackHandler, $ItemStackHandler$$Type} from "net.neoforged.neoforge.items.ItemStackHandler"
import {$Entity$MoveFunction, $Entity$MoveFunction$$Type} from "net.minecraft.world.entity.Entity$MoveFunction"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Stack, $Stack$$Type} from "java.util.Stack"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $BroomEntity extends $Entity implements $Container, $MenuProvider, $HasCustomInventoryScreen {
 "rightInputDown": boolean
 "speedMultiplier": float
 "xRot": float
 "hasImpulse": boolean
 "ars_Nouveau$motions": $Stack<(any)>
 "floatingOffset": float
 "tickCount": integer
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "broomCalledDelay": integer
 "deltaRotationLerp": float
 "deltaMovementLerp": $Vec3
static readonly "BOARDING_COOLDOWN": integer
 "removalReason": $Entity$RemovalReason
 "backInputDown": boolean
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "broomUUID": $UUID
 "yRot": float
 "moveDist": float
 "leftInputDown": boolean
 "forwardInputDown": boolean
static readonly "ID_TAG": StringJS
 "floatingOffsetOld": float
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "floatMode": boolean
 "hurtMarked": boolean
 "items": $NonNullList<($ItemStack)>
 "deltaRotation": float
 "prevPassengers": $List<($Entity)>
 "invulnerableTime": integer
static readonly "UUID_TAG": StringJS
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "portalProcess": $PortalProcessor
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
readonly "itemHandler": $ItemStackHandler
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "deltaMovementOld": $Vec3
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "eyeHeight": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
 "jumpInputDown": boolean
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "broomCalled": boolean
 "sneakingInputDown": boolean
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
 "wasOnFire": boolean
 "zOld": double
 "deltaRotationOld": float
 "selfItem": $ItemStack
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
 "isItem": boolean
 "activateInputDown": boolean
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "age": float
 "wasTouchingWater": boolean
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

constructor(arg0: $Level$$Type, arg1: double, arg2: double, arg3: double)
constructor(arg0: $EntityType$$Type<($BroomEntity$$Type)>, arg1: $Level$$Type)

public "push"(arg0: $Entity$$Type): void
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "tick"(): void
public "sync"(): void
public "getItem"(arg0: integer): $ItemStack
public "getModule"(arg0: $BroomEntity$BroomSlot$$Type): $ItemStack
public "load"(arg0: $CompoundTag$$Type): void
public "isEmpty"(): boolean
public "save"(arg0: $CompoundTag$$Type): boolean
public "attack"(arg0: $DamageSource$$Type, arg1: float): boolean
public "lerpTo"(arg0: double, arg1: double, arg2: double, arg3: float, arg4: float, arg5: integer): void
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "startOpen"(arg0: $Player$$Type): void
public "stopOpen"(arg0: $Player$$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "clearContent"(): void
public "canCollideWith"(arg0: $Entity$$Type): boolean
public "positionRider"(arg0: $Entity$$Type, arg1: $Entity$MoveFunction$$Type): void
public "getPickResult"(): $ItemStack
public "getPickResult"(arg0: boolean): $ItemStack
public "canSwim"(): boolean
public "animateHurt"(arg0: float): void
public "lerpTargetX"(): double
public "lerpTargetY"(): double
public "lerpTargetZ"(): double
public "lerpTargetXRot"(): float
public "lerpTargetYRot"(): float
public "isPickable"(): boolean
public "isPushable"(): boolean
public "setChanged"(): void
public "stillValid"(arg0: $Player$$Type): boolean
public "interact"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): $InteractionResult
public "fireImmune"(): boolean
public "setModule"(arg0: $BroomEntity$BroomSlot$$Type, arg1: $ItemStack$$Type): void
public "activate"(): void
public "isEnder"(): boolean
public "damageMisc"(): void
public static "func_242378_a"(arg0: $Entity$$Type, arg1: $Entity$$Type): boolean
public "getBroomItem"(): $Item
public "updateInputs"(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean): void
public "getBoatGlide"(): float
public "getFloatMode"(): boolean
public "damageBrush"(): void
public "isReplacer"(): boolean
public "getDamageTaken"(): float
public "setDamageTaken"(arg0: float): void
public "getBroomType"(): $BroomType
public "getExtraBrush"(): integer
public "setBroomType"(arg0: StringJS): void
public "setFloatMode"(arg0: boolean): void
public "setPaddleState"(arg0: boolean, arg1: boolean): void
public "getPaddleState"(arg0: integer): boolean
public "setRotation"(arg0: float): void
public "getWaterLevelAbove"(): float
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "getAddEntityPacket"(arg0: $ServerEntity$$Type): $Packet<($ClientGamePacketListener)>
public "getPickedResult"(arg0: $HitResult$$Type): $ItemStack
public "readAdditionalSaveData"(arg0: $CompoundTag$$Type): void
public "onPassengerTurned"(arg0: $Entity$$Type): void
public "canBeCollidedWith"(): boolean
public "onAboveBubbleCol"(arg0: boolean): void
public "getMotionDirection"(): $Direction
public "recreateFromPacket"(arg0: $ClientboundAddEntityPacket$$Type): void
public "getDismountLocationForPassenger"(arg0: $LivingEntity$$Type): $Vec3
public "getVehicleAttachmentPoint"(arg0: $Entity$$Type): $Vec3
public "getPassengerRidingPosition"(arg0: $Entity$$Type): $Vec3
public "getControllingPassenger"(): $LivingEntity
public "getRelativePortalPosition"(arg0: $Direction$Axis$$Type, arg1: $BlockUtil$FoundRectangle$$Type): $Vec3
public "setForwardDirection"(arg0: integer): void
public "getPassengerOffset"(arg0: $Entity$$Type): $Vec3
public "transferBrushParticles"(): void
public "syncDeltaRotation"(): void
public "getRockingAngle"(arg0: float): float
public "getSatchelSlots"(arg0: integer): $List<($ItemStack)>
public static "getDyeColorNamed"(arg0: $BroomEntity$$Type): $DyeColor
public "getTimeSinceHit"(): integer
public "setTimeSinceHit"(arg0: integer): void
public "getForwardDirection"(): integer
public "openCustomInventoryScreen"(arg0: $Player$$Type): void
public "getPassengersRidingOffset"(arg0: $Entity$$Type): double
public "countItem"(arg0: $Item$$Type): integer
public "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
public "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
public "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "getMaxStackSize"(): integer
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "getDisplayName"(): $Component
public static "tryClear"(arg0: any): void
public "setTransferCooldown"(arg0: long): void
public "canReceiveTransferCooldown"(): boolean
public "lithium$itemInsertionTestRequiresStackSize1"(): boolean
public "getBlock"(arg0: $Level$$Type): $BlockContainerJS
public "isMutable"(): boolean
public "getSlots"(): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "clear"(): void
public "getWidth"(): integer
public "getHeight"(): integer
public "setChanged"(): void
public "self"(): $Container
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "asContainer"(): $Container
public "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "clear"(arg0: $ItemPredicate$$Type): void
public "find"(): integer
public "find"(arg0: $ItemPredicate$$Type): integer
public "count"(): integer
public "count"(arg0: $ItemPredicate$$Type): integer
public "isEmpty"(): boolean
public "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
public "countNonEmpty"(): integer
public "getAllItems"(): $List<($ItemStack)>
get "empty"(): boolean
get "pickResult"(): $ItemStack
get "pickable"(): boolean
get "pushable"(): boolean
get "ender"(): boolean
get "broomItem"(): $Item
get "boatGlide"(): float
get "floatMode"(): boolean
get "replacer"(): boolean
get "damageTaken"(): float
set "damageTaken"(value: float)
get "broomType"(): $BroomType
get "extraBrush"(): integer
set "broomType"(value: StringJS)
set "floatMode"(value: boolean)
set "rotation"(value: float)
get "waterLevelAbove"(): float
get "containerSize"(): integer
get "motionDirection"(): $Direction
get "controllingPassenger"(): $LivingEntity
set "forwardDirection"(value: integer)
get "timeSinceHit"(): integer
set "timeSinceHit"(value: integer)
get "forwardDirection"(): integer
get "maxStackSize"(): integer
get "displayName"(): $Component
set "transferCooldown"(value: long)
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BroomEntity$$Type = ($BroomEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BroomEntity_ = $BroomEntity$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.WillowVinesBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GrowingPlantHeadBlock, $GrowingPlantHeadBlock$$Type} from "net.minecraft.world.level.block.GrowingPlantHeadBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WillowVinesBlock extends $GrowingPlantHeadBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WillowVinesBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "MAX_AGE": integer
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
static readonly "AGE": $IntegerProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WillowVinesBlock$$Type = ($WillowVinesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WillowVinesBlock_ = $WillowVinesBlock$$Type;
}}
declare module "net.joefoxe.hexerei.block.connected.WaxedConnectedRotatedPillarBlock" {
import {$RotatedPillarBlock, $RotatedPillarBlock$$Type} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ConnectedPillarBlock, $ConnectedPillarBlock$$Type} from "net.joefoxe.hexerei.block.connected.ConnectedPillarBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Waxed, $Waxed$$Type} from "net.joefoxe.hexerei.block.connected.Waxed"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WaxedConnectedRotatedPillarBlock extends $ConnectedPillarBlock implements $Waxed {
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
static readonly "CODEC": $MapCodec<($RotatedPillarBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
public "getUnWaxed"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaxedConnectedRotatedPillarBlock$$Type = ($WaxedConnectedRotatedPillarBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaxedConnectedRotatedPillarBlock_ = $WaxedConnectedRotatedPillarBlock$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.HerbJarItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $HerbJarItem extends $BlockItem {
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
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "place"(arg0: $BlockPlaceContext$$Type): $InteractionResult
public "registerBlocks"(arg0: $Map$$Type<($Block$$Type), ($Item$$Type)>, arg1: $Item$$Type): void
public static "getColorValue"(arg0: $DyeColor$$Type, arg1: $ItemStack$$Type): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
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
export type $HerbJarItem$$Type = ($HerbJarItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HerbJarItem_ = $HerbJarItem$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.WallDryingRack" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$DryingRackTile, $DryingRackTile$$Type} from "net.joefoxe.hexerei.tileentity.DryingRackTile"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$HerbDryingRack, $HerbDryingRack$$Type} from "net.joefoxe.hexerei.block.custom.HerbDryingRack"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $WallDryingRack extends $HerbDryingRack {
static readonly "SHAPE_LEFT_90": $VoxelShape
static readonly "SHAPE_LEFT_180": $VoxelShape
static "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "SHAPE_LEFT": $VoxelShape
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static "RIGHT": $BooleanProperty
static "SOUTH": $BooleanProperty
static readonly "SHAPE_RIGHT_270": $VoxelShape
static "EAST": $BooleanProperty
static readonly "SHAPE_180": $VoxelShape
static readonly "SHAPE_90": $VoxelShape
static readonly "UPDATE_IMMEDIATE": integer
static readonly "SHAPE_RIGHT": $VoxelShape
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static "LEFT": $BooleanProperty
static readonly "SHAPE_TURNED": $VoxelShape
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "SHAPE_RIGHT_90": $VoxelShape
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "SHAPE_270": $VoxelShape
static readonly "INSTANT": float
static readonly "SHAPE_LEFT_270": $VoxelShape
static readonly "UPDATE_CLIENTS": integer
static readonly "SHAPE_RIGHT_180": $VoxelShape
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getTileEntityClass"(): $Class<($DryingRackTile)>
public "asHolder"(): $Holder<(any)>
get "tileEntityClass"(): $Class<($DryingRackTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallDryingRack$$Type = ($WallDryingRack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WallDryingRack_ = $WallDryingRack$$Type;
}}
declare module "net.joefoxe.hexerei.tileentity.MixingCauldronTile" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Clearable, $Clearable$$Type} from "net.minecraft.world.Clearable"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$MoonPhases$MoonCondition, $MoonPhases$MoonCondition$$Type} from "net.joefoxe.hexerei.data.recipes.MoonPhases$MoonCondition"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IFluidHandlerItem, $IFluidHandlerItem$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandlerItem"
import {$LockCode, $LockCode$$Type} from "net.minecraft.world.LockCode"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RandomizableContainerBlockEntity, $RandomizableContainerBlockEntity$$Type} from "net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity"
import {$WorldlyContainer, $WorldlyContainer$$Type} from "net.minecraft.world.WorldlyContainer"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $MixingCauldronTile extends $RandomizableContainerBlockEntity implements $WorldlyContainer, $Clearable, $MenuProvider, $IFluidHandler {
 "usingRecipeNeedsMoonPhase": $MoonPhases$MoonCondition
 "renderedFluid": $FluidStack
 "usingRecipeNeedsHeat": boolean
 "fluidRenderLevel": float
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "customName": $Component
 "hasHeatSource": boolean
 "craftDelay": integer
 "degrees": float
 "craftDelayOld": integer
static readonly "craftDelayMax": integer
 "crafting": boolean
 "dyeColor": integer
 "emitParticles": integer
 "checkCraft": boolean
 "name": $Component
 "lockKey": $LockCode
 "emitParticleSpout": boolean
 "items": $NonNullList<($ItemStack)>

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "tick"(): void
public "sync"(): void
public "getDisplayName"(): $Component
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "getItem"(arg0: integer): $ItemStack
public "isEmpty"(): boolean
public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
public "craft"(): void
public "getPos"(): $BlockPos
public "onLoad"(): void
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "clearContent"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "entityInside"(arg0: $Entity$$Type): void
public "getCustomName"(): $Component
public "hasCustomName"(): boolean
public "setChanged"(): void
public "getDyeColor"(): integer
public "getFluidStack"(): $FluidStack
public "normalizeTank"(): void
public "setFluidStack"(arg0: $FluidStack$$Type): void
public "getCraftDelay"(): integer
public "setCraftDelay"(arg0: integer): void
public "getCrafted"(): boolean
public "captureItem"(arg0: $ItemEntity$$Type): boolean
public "setDyeColor"(arg0: integer): void
public "getItemInSlot"(arg0: integer): $Item
public "getTanks"(): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
public "setContents"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: $Player$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getTankCapacity"(arg0: integer): integer
public "requestModelDataUpdate"(): void
public "getSlotsForFace"(arg0: $Direction$$Type): (integer)[]
public "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getMaxStackSize"(): integer
public "getFirstOpenSlot"(): integer
public "getCraftMaxDelay"(): integer
public "getItemStackInSlot"(arg0: integer): $ItemStack
public "interactWithFluid"(arg0: $IFluidHandlerItem$$Type): boolean
public "getNumberOfItems"(): integer
public "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
public static "tryClear"(arg0: any): void
public "stillValid"(arg0: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "getLevel"(): $Level
public "getBlockPos"(): $BlockPos
public static "setBlockEntityLootTable"(arg0: $BlockGetter$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $ResourceKey$$Type<($LootTable)>): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "displayName"(): $Component
get "empty"(): boolean
get "pos"(): $BlockPos
get "customName"(): $Component
get "dyeColor"(): integer
get "fluidStack"(): $FluidStack
set "fluidStack"(value: $FluidStack$$Type)
get "craftDelay"(): integer
set "craftDelay"(value: integer)
get "crafted"(): boolean
set "dyeColor"(value: integer)
get "tanks"(): integer
get "containerSize"(): integer
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "maxStackSize"(): integer
get "firstOpenSlot"(): integer
get "craftMaxDelay"(): integer
get "numberOfItems"(): integer
get "level"(): $Level
get "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixingCauldronTile$$Type = ($MixingCauldronTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixingCauldronTile_ = $MixingCauldronTile$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.DipperRecipe$Type" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$DipperRecipe, $DipperRecipe$$Type} from "net.joefoxe.hexerei.data.recipes.DipperRecipe"

export class $DipperRecipe$Type implements $RecipeType<($DipperRecipe)> {
static readonly "INSTANCE": $DipperRecipe$Type
static readonly "ID": StringJS


public static "register"<T extends $Recipe<(any)>>(arg0: StringJS): $RecipeType<($DipperRecipe)>
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$$Type): $RecipeType<($DipperRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DipperRecipe$Type$$Type = ($DipperRecipe$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DipperRecipe$Type_ = $DipperRecipe$Type$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.BroomStandWall" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ITileEntity, $ITileEntity$$Type} from "net.joefoxe.hexerei.block.ITileEntity"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BroomStand, $BroomStand$$Type} from "net.joefoxe.hexerei.block.custom.BroomStand"
import {$BroomStandTile, $BroomStandTile$$Type} from "net.joefoxe.hexerei.tileentity.BroomStandTile"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $BroomStandWall extends $BroomStand implements $ITileEntity<($BroomStandTile)>, $EntityBlock, $SimpleWaterloggedBlock {
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
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getTileEntityClass"(): $Class<($BroomStandTile)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
get "tileEntityClass"(): $Class<($BroomStandTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BroomStandWall$$Type = ($BroomStandWall);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BroomStandWall_ = $BroomStandWall$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.PaintSystem$ValueSliders" {
import {$PaintSystem, $PaintSystem$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem"
import {$List, $List$$Type} from "java.util.List"
import {$PageDrawing$PageOn, $PageDrawing$PageOn$$Type} from "net.joefoxe.hexerei.data.books.PageDrawing$PageOn"
import {$PaintSystem$ValueSlider, $PaintSystem$ValueSlider$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem$ValueSlider"

export class $PaintSystem$ValueSliders {

constructor(arg0: $PaintSystem$$Type, arg1: $PaintSystem$$Type)

public "release"(): void
public "click"(arg0: float, arg1: float, arg2: $PageDrawing$PageOn$$Type): boolean
public "getHueSlider"(): $PaintSystem$ValueSlider
public "getAlphaSlider"(): $PaintSystem$ValueSlider
public "getSliders"(): $List<($PaintSystem$ValueSlider)>
public "getHardnessSlider"(): $PaintSystem$ValueSlider
public "getToleranceSlider"(): $PaintSystem$ValueSlider
public "getBrushSizeSlider"(): $PaintSystem$ValueSlider
public "getSaturationSlider"(): $PaintSystem$ValueSlider
public "getBrightnessSlider"(): $PaintSystem$ValueSlider
public "updateColorSliders"(arg0: integer): void
get "hueSlider"(): $PaintSystem$ValueSlider
get "alphaSlider"(): $PaintSystem$ValueSlider
get "sliders"(): $List<($PaintSystem$ValueSlider)>
get "hardnessSlider"(): $PaintSystem$ValueSlider
get "toleranceSlider"(): $PaintSystem$ValueSlider
get "brushSizeSlider"(): $PaintSystem$ValueSlider
get "saturationSlider"(): $PaintSystem$ValueSlider
get "brightnessSlider"(): $PaintSystem$ValueSlider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintSystem$ValueSliders$$Type = ($PaintSystem$ValueSliders);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintSystem$ValueSliders_ = $PaintSystem$ValueSliders$$Type;
}}
declare module "net.joefoxe.hexerei.block.connected.WaxedGlassBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Waxed, $Waxed$$Type} from "net.joefoxe.hexerei.block.connected.Waxed"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$TransparentBlock, $TransparentBlock$$Type} from "net.minecraft.world.level.block.TransparentBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WaxedGlassBlock extends $TransparentBlock implements $Waxed {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($TransparentBlock)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "skipRendering"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $Direction$$Type): boolean
public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
public "getUnWaxed"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaxedGlassBlock$$Type = ($WaxedGlassBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaxedGlassBlock_ = $WaxedGlassBlock$$Type;
}}
declare module "net.joefoxe.hexerei.data.candle.CandleData" {
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$CandleLayer, $CandleLayer$$Type} from "net.joefoxe.hexerei.data.candle.CandleLayer"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AbstractCandleEffect, $AbstractCandleEffect$$Type} from "net.joefoxe.hexerei.data.candle.AbstractCandleEffect"

export class $CandleData {
 "zO": float
 "lit": boolean
 "dyeColor": integer
 "xO": float
 "cooldown": integer
 "meltTimer": float
 "herb": $CandleLayer
 "yTarget": float
 "height": integer
 "effectParticle": $List<(StringJS)>
 "returnToBlockLastTick": integer
 "xTarget": float
 "returnToBlock": boolean
 "customName": $Component
 "hasCandle": boolean
static "meltTimerMAX": integer
 "zTarget": float
 "effects": $ArrayList<($AbstractCandleEffect)>
 "swirl": $CandleLayer
 "yO": float
 "effect": $AbstractCandleEffect
 "x": float
 "y": float
 "z": float
 "glow": $CandleLayer
 "baseHeight": integer
 "base": $CandleLayer

constructor(arg0: integer, arg1: boolean, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer, arg7: $AbstractCandleEffect$$Type)
constructor()

public "move"(): void
public "load"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "load"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "save"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean, arg3: boolean): $CompoundTag
public "save"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "save"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): $CompoundTag
public "getEffects"(): $ArrayList<($AbstractCandleEffect)>
public "getEffect"(): $AbstractCandleEffect
public "hasBase"(): boolean
public "setOldPos"(): void
public "setEffect"(arg0: $AbstractCandleEffect$$Type): void
public "setNotReturn"(arg0: integer): void
public "hasHerb"(): boolean
public "hasGlow"(): boolean
public "hasSwirl"(): boolean
public "getRadiusMultiplier"(): float
public "moveInstantlyToTarget"(): void
public "getMeltingSpeedMultiplier"(): float
public "getEffectAmplifierMultiplier"(): float
public "getEffectCooldownMultiplier"(): float
public "getEffectDurationMultiplier"(): float
get "effects"(): $ArrayList<($AbstractCandleEffect)>
get "effect"(): $AbstractCandleEffect
set "effect"(value: $AbstractCandleEffect$$Type)
set "notReturn"(value: integer)
get "radiusMultiplier"(): float
get "meltingSpeedMultiplier"(): float
get "effectAmplifierMultiplier"(): float
get "effectCooldownMultiplier"(): float
get "effectDurationMultiplier"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CandleData$$Type = ($CandleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CandleData_ = $CandleData$$Type;
}}
declare module "net.joefoxe.hexerei.tileentity.DryingRackTile" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Clearable, $Clearable$$Type} from "net.minecraft.world.Clearable"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LockCode, $LockCode$$Type} from "net.minecraft.world.LockCode"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RandomizableContainerBlockEntity, $RandomizableContainerBlockEntity$$Type} from "net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity"
import {$WorldlyContainer, $WorldlyContainer$$Type} from "net.minecraft.world.WorldlyContainer"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $DryingRackTile extends $RandomizableContainerBlockEntity implements $WorldlyContainer, $Clearable, $MenuProvider {
 "output": ($ItemStack)[]
 "crafting": (boolean)[]
 "crafted": (boolean)[]
 "placedTime": (integer)[]
 "name": $Component
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "dryingTimeMax": (integer)[]
 "dryingTime": (integer)[]
 "lockKey": $LockCode

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)
constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "tick"(): void
public "sync"(): void
public "save"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "craft"(): void
public "onLoad"(): void
public "getItems"(): $NonNullList<($ItemStack)>
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setItems"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getSpeed"(arg0: double, arg1: double): float
public "setChanged"(): void
public static "getDistance"(arg0: float, arg1: float, arg2: float, arg3: float): double
public "putItems"(arg0: integer, arg1: $ItemStack$$Type): integer
public "getItemInSlot"(arg0: integer): $Item
public "getAngle"(arg0: $Vec3$$Type): float
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getSlotsForFace"(arg0: $Direction$$Type): (integer)[]
public "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
public "getContainerSize"(): integer
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getMaxStackSize"(): integer
public "rotateAroundVec"(arg0: $Vec3$$Type, arg1: float, arg2: $Vec3$$Type): $Vec3
public static "getDistanceToEntity"(arg0: $Entity$$Type, arg1: $BlockPos$$Type): double
public "getNumberOfItems"(): integer
public "interactWithoutItem"(arg0: $Player$$Type, arg1: $BlockHitResult$$Type): integer
public "interactDryingRack"(arg0: $Player$$Type, arg1: $BlockHitResult$$Type): integer
public "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
public "clearContent"(): void
public static "tryClear"(arg0: any): void
public "getDisplayName"(): $Component
public "stillValid"(arg0: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "getLevel"(): $Level
public "getBlockPos"(): $BlockPos
public static "setBlockEntityLootTable"(arg0: $BlockGetter$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $ResourceKey$$Type<($LootTable)>): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "items"(): $NonNullList<($ItemStack)>
set "items"(value: $NonNullList$$Type<($ItemStack$$Type)>)
get "containerSize"(): integer
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "maxStackSize"(): integer
get "numberOfItems"(): integer
get "displayName"(): $Component
get "level"(): $Level
get "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DryingRackTile$$Type = ($DryingRackTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DryingRackTile_ = $DryingRackTile$$Type;
}}
declare module "net.joefoxe.hexerei.tileentity.ModChestBlockEntity" {
import {$ChestBlockEntity, $ChestBlockEntity$$Type} from "net.minecraft.world.level.block.entity.ChestBlockEntity"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ContainerOpenersCounter, $ContainerOpenersCounter$$Type} from "net.minecraft.world.level.block.entity.ContainerOpenersCounter"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$InventoryChangeListener, $InventoryChangeListener$$Type} from "net.caffeinemc.mods.lithium.common.block.entity.inventory_change_tracking.InventoryChangeListener"
import {$InventoryChangeTracker, $InventoryChangeTracker$$Type} from "net.caffeinemc.mods.lithium.common.block.entity.inventory_change_tracking.InventoryChangeTracker"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LockCode, $LockCode$$Type} from "net.minecraft.world.LockCode"
import {$LithiumStackList, $LithiumStackList$$Type} from "net.caffeinemc.mods.lithium.common.hopper.LithiumStackList"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ModChestBlockEntity extends $ChestBlockEntity {
 "openersCounter": $ContainerOpenersCounter
 "name": $Component
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "lockKey": $LockCode

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "startOpen"(arg0: $Player$$Type): void
public "stopOpen"(arg0: $Player$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "lithium$emitRemoved"(): void
public "lithium$forwardContentChangeOnce"(arg0: $InventoryChangeListener$$Type, arg1: $LithiumStackList$$Type, arg2: $InventoryChangeTracker$$Type): void
public "lithium$forwardMajorInventoryChanges"(arg0: $InventoryChangeListener$$Type): void
public "lithium$emitFirstComparatorAdded"(): void
public "lithium$stopForwardingMajorInventoryChanges"(arg0: $InventoryChangeListener$$Type): void
public "lithium$emitStackListReplaced"(): void
public "lithium$emitContentModified"(): void
public "setChanged"(): void
public "stillValid"(arg0: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "getLevel"(): $Level
public "getBlockPos"(): $BlockPos
public static "setBlockEntityLootTable"(arg0: $BlockGetter$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $ResourceKey$$Type<($LootTable)>): void
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "level"(): $Level
get "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModChestBlockEntity$$Type = ($ModChestBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModChestBlockEntity_ = $ModChestBlockEntity$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.PaintData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$PaintData$LayerData, $PaintData$LayerData$$Type} from "net.joefoxe.hexerei.data.books.PaintData$LayerData"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $PaintData {
static readonly "CODEC": $Codec<($PaintData)>
 "page": $ResourceLocation
 "locked": boolean
 "lockedByName": $Component
 "uuid": $UUID
static "STREAM_CODEC": $StreamCodec<($ByteBuf), ($PaintData)>
 "lockedByUUID": $UUID

constructor(arg0: integer, arg1: integer, arg2: $List$$Type<($PaintData$LayerData$$Type)>, arg3: $ResourceLocation$$Type, arg4: $UUID$$Type)
constructor(arg0: integer, arg1: integer, arg2: $List$$Type<($PaintData$LayerData$$Type)>, arg3: $ResourceLocation$$Type, arg4: $UUID$$Type, arg5: boolean, arg6: $UUID$$Type, arg7: $Component$$Type)

public "isLocked"(): boolean
public "getWidth"(): integer
public "getHeight"(): integer
public "getUuid"(): $UUID
public "getPage"(): $ResourceLocation
public "getLayers"(): $List<($PaintData$LayerData)>
public "getLockedByUUID"(): $UUID
public "getLockedByName"(): $Component
get "locked"(): boolean
get "width"(): integer
get "height"(): integer
get "uuid"(): $UUID
get "page"(): $ResourceLocation
get "layers"(): $List<($PaintData$LayerData)>
get "lockedByUUID"(): $UUID
get "lockedByName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintData$$Type = ($PaintData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintData_ = $PaintData$$Type;
}}
declare module "net.joefoxe.hexerei.data.candle.CandleEffect" {
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CandleTile, $CandleTile$$Type} from "net.joefoxe.hexerei.tileentity.CandleTile"
import {$CandleData, $CandleData$$Type} from "net.joefoxe.hexerei.data.candle.CandleData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Random, $Random$$Type} from "java.util.Random"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$AbstractCandleEffect, $AbstractCandleEffect$$Type} from "net.joefoxe.hexerei.data.candle.AbstractCandleEffect"

export interface $CandleEffect {

 "tick"(arg0: $Level$$Type, arg1: $CandleTile$$Type, arg2: $CandleData$$Type): void
 "getCopy"<T>(): $AbstractCandleEffect
 "getParticleType"(): $ParticleOptions
 "getRandomPos"(): $BlockPos
 "getLocationName"(): StringJS
get "copy"(): $AbstractCandleEffect
get "particleType"(): $ParticleOptions
get "randomPos"(): $BlockPos
get "locationName"(): StringJS
}

export namespace $CandleEffect {
const area: $List<($BlockPos)>
const random: $Random
const EMPTY: StringJS
const probejs$$marker: never
}
export class $CandleEffect$$Static implements $CandleEffect {
static readonly "area": $List<($BlockPos)>
static readonly "random": $Random
static readonly "EMPTY": StringJS


 "tick"(arg0: $Level$$Type, arg1: $CandleTile$$Type, arg2: $CandleData$$Type): void
 "getCopy"<T>(): $AbstractCandleEffect
 "getParticleType"(): $ParticleOptions
 "getRandomPos"(): $BlockPos
 "getLocationName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CandleEffect$$Type = ($CandleEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CandleEffect_ = $CandleEffect$$Type;
}}
declare module "net.joefoxe.hexerei.item.data_components.BookData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$BookData$Bookmarks, $BookData$Bookmarks$$Type} from "net.joefoxe.hexerei.item.data_components.BookData$Bookmarks"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BookData$PageText, $BookData$PageText$$Type} from "net.joefoxe.hexerei.item.data_components.BookData$PageText"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BookData extends $Record {
static readonly "EMPTY_UUID": $UUID
static readonly "CODEC": $Codec<($BookData)>
static readonly "MAP_CODEC": $Codec<($Map<(StringJS), ($Map<(StringJS), (StringJS)>)>)>
static readonly "EMPTY_AS": $Function<($ResourceLocation), ($BookData)>
static readonly "EMPTY_NOTEBOOK": $BookData
static readonly "EMPTY": $BookData
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($BookData)>

constructor(uuid: $UUID$$Type, book: $ResourceLocation$$Type, chapter: integer, page: integer, opened: boolean, bookmarks: $BookData$Bookmarks$$Type, pageTexts: $Map$$Type<(StringJS), ($BookData$PageText$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "opened"(): boolean
public "book"(): $ResourceLocation
public "page"(): integer
public "uuid"(): $UUID
public "getPage"(): integer
public "getUUID"(): $UUID
public "setUUID"(arg0: $UUID$$Type): $BookData
public "getTextBoxText"(arg0: StringJS, arg1: integer): StringJS
public "pageTexts"(): $Map<(StringJS), ($BookData$PageText)>
public "setOpened"(arg0: boolean): $BookData
public "setChapter"(arg0: integer): $BookData
public "getBookmarks"(): $BookData$Bookmarks
public "setBookmarks"(arg0: $BookData$Bookmarks$$Type): $BookData
public "getChapter"(): integer
public "chapter"(): integer
public "bookmarks"(): $BookData$Bookmarks
public "isOpened"(): boolean
public "setBook"(arg0: $ResourceLocation$$Type): $BookData
public "getBook"(): $ResourceLocation
public "setPage"(arg0: integer): $BookData
public "updateTextBoxText"(arg0: StringJS, arg1: integer, arg2: StringJS): $BookData
get "uUID"(): $UUID
set "uUID"(value: $UUID$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookData$$Type = ({"uuid"?: $UUID$$Type, "opened"?: boolean, "page"?: integer, "chapter"?: integer, "book"?: $ResourceLocation$$Type, "pageTexts"?: $Map$$Type<(StringJS), ($BookData$PageText$$Type)>, "bookmarks"?: $BookData$Bookmarks$$Type}) | ([uuid?: $UUID$$Type, opened?: boolean, page?: integer, chapter?: integer, book?: $ResourceLocation$$Type, pageTexts?: $Map$$Type<(StringJS), ($BookData$PageText$$Type)>, bookmarks?: $BookData$Bookmarks$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookData_ = $BookData$$Type;
}}
declare module "net.joefoxe.hexerei.tileentity.CandleDipperTile" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Clearable, $Clearable$$Type} from "net.minecraft.world.Clearable"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LockCode, $LockCode$$Type} from "net.minecraft.world.LockCode"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CandleDipperTile$DipperSlot, $CandleDipperTile$DipperSlot$$Type} from "net.joefoxe.hexerei.tileentity.CandleDipperTile$DipperSlot"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RandomizableContainerBlockEntity, $RandomizableContainerBlockEntity$$Type} from "net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity"
import {$WorldlyContainer, $WorldlyContainer$$Type} from "net.minecraft.world.WorldlyContainer"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $CandleDipperTile extends $RandomizableContainerBlockEntity implements $WorldlyContainer, $Clearable, $MenuProvider {
static "DRYING_START_TICKS": integer
 "dipperSlots": $List<($CandleDipperTile$DipperSlot)>
 "name": $Component
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "lockKey": $LockCode
 "numberOfCandles": float

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)
constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "tick"(): void
public "sync"(): void
public "craft"(): void
public "onLoad"(): void
public "getItems"(): $NonNullList<($ItemStack)>
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "setItems"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getSpeed"(arg0: double, arg1: double): float
public "setChanged"(): void
public "putItems"(arg0: integer, arg1: $ItemStack$$Type): integer
public "getAngle"(arg0: $Vec3$$Type): float
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "interactWithItem"(arg0: $Player$$Type): $ItemInteractionResult
public "getSlotsForFace"(arg0: $Direction$$Type): (integer)[]
public "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
public "getContainerSize"(): integer
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getMaxStackSize"(): integer
public "rotateAroundVec"(arg0: $Vec3$$Type, arg1: float, arg2: $Vec3$$Type): $Vec3
public "interactWithoutItem"(arg0: $Player$$Type): $InteractionResult
public "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
public "clearContent"(): void
public static "tryClear"(arg0: any): void
public "getDisplayName"(): $Component
public "stillValid"(arg0: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "getLevel"(): $Level
public "getBlockPos"(): $BlockPos
public static "setBlockEntityLootTable"(arg0: $BlockGetter$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $ResourceKey$$Type<($LootTable)>): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "items"(): $NonNullList<($ItemStack)>
set "items"(value: $NonNullList$$Type<($ItemStack$$Type)>)
get "containerSize"(): integer
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "maxStackSize"(): integer
get "displayName"(): $Component
get "level"(): $Level
get "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CandleDipperTile$$Type = ($CandleDipperTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CandleDipperTile_ = $CandleDipperTile$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.ModChest$WoodType" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $ModChest$WoodType extends $Enum<($ModChest$WoodType)> implements $StringRepresentable {
static readonly "POLISHED_MAHOGANY": $ModChest$WoodType
static readonly "CODEC": $StringRepresentable$EnumCodec<($ModChest$WoodType)>
static readonly "WILLOW": $ModChest$WoodType
static readonly "MAHOGANY": $ModChest$WoodType
static readonly "POLISHED_WILLOW": $ModChest$WoodType
static readonly "POLISHED_WITCH_HAZEL": $ModChest$WoodType
static readonly "WITCH_HAZEL": $ModChest$WoodType


public "getName"(): StringJS
public "toString"(): StringJS
public static "values"(): ($ModChest$WoodType)[]
public static "valueOf"(arg0: StringJS): $ModChest$WoodType
public static "byId"(arg0: integer): $ModChest$WoodType
public static "byName"(arg0: StringJS): $ModChest$WoodType
public "getPlanks"(): $Block
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "name"(): StringJS
get "planks"(): $Block
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModChest$WoodType$$Type = (("willow") | ("polished_willow") | ("witch_hazel") | ("polished_witch_hazel") | ("mahogany") | ("polished_mahogany"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModChest$WoodType_ = $ModChest$WoodType$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.MixingCauldronRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$MixingCauldronRecipe$MixingCauldronRecipeInput, $MixingCauldronRecipe$MixingCauldronRecipeInput$$Type} from "net.joefoxe.hexerei.data.recipes.MixingCauldronRecipe$MixingCauldronRecipeInput"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$FluidIngredient, $FluidIngredient$$Type} from "net.neoforged.neoforge.fluids.crafting.FluidIngredient"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$MoonPhases$MoonCondition, $MoonPhases$MoonCondition$$Type} from "net.joefoxe.hexerei.data.recipes.MoonPhases$MoonCondition"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$FluidMixingRecipe$HeatCondition, $FluidMixingRecipe$HeatCondition$$Type} from "net.joefoxe.hexerei.data.recipes.FluidMixingRecipe$HeatCondition"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $MixingCauldronRecipe implements $Recipe<($MixingCauldronRecipe$MixingCauldronRecipeInput)> {

constructor(arg0: $ItemStack$$Type, arg1: $NonNullList$$Type<($Ingredient$$Type)>, arg2: $FluidStack$$Type, arg3: $FluidStack$$Type, arg4: $FluidMixingRecipe$HeatCondition$$Type, arg5: $MoonPhases$MoonCondition$$Type)

public "matches"(arg0: $MixingCauldronRecipe$MixingCauldronRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getOutput"(): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getLiquid"(): $FluidStack
public "isSpecial"(): boolean
public static "createInput"(arg0: $List$$Type<($ItemStack$$Type)>): $MixingCauldronRecipe$MixingCauldronRecipeInput
public "getSerializer"(): $RecipeSerializer<(any)>
public "getToastSymbol"(): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $MixingCauldronRecipe$MixingCauldronRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getFluidIngredients"(): $List<($FluidIngredient)>
public "getFluidIngredient"(): $FluidIngredient
public "getMoonCondition"(): $MoonPhases$MoonCondition
public "getFluidLevelsConsumed"(): integer
public "getHeatCondition"(): $FluidMixingRecipe$HeatCondition
public "getLiquidOutput"(): $FluidStack
public "getGroup"(): StringJS
public "isIncomplete"(): boolean
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $MixingCauldronRecipe$MixingCauldronRecipeInput$$Type): $NonNullList<($ItemStack)>
get "type"(): $RecipeType<(any)>
get "output"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "liquid"(): $FluidStack
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "toastSymbol"(): $ItemStack
get "fluidIngredients"(): $List<($FluidIngredient)>
get "fluidIngredient"(): $FluidIngredient
get "moonCondition"(): $MoonPhases$MoonCondition
get "fluidLevelsConsumed"(): integer
get "heatCondition"(): $FluidMixingRecipe$HeatCondition
get "liquidOutput"(): $FluidStack
get "group"(): StringJS
get "incomplete"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixingCauldronRecipe$$Type = ($MixingCauldronRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixingCauldronRecipe_ = $MixingCauldronRecipe$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.SageBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CropBlock, $CropBlock$$Type} from "net.minecraft.world.level.block.CropBlock"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SageBlock extends $CropBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CropBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "MAX_AGE": integer
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
static readonly "AGE": $IntegerProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SageBlock$$Type = ($SageBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SageBlock_ = $SageBlock$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.PaintSystem$BlendMode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $PaintSystem$BlendMode extends $Enum<($PaintSystem$BlendMode)> {
static readonly "NORMAL": $PaintSystem$BlendMode
static readonly "OVERLAY": $PaintSystem$BlendMode


public static "values"(): ($PaintSystem$BlendMode)[]
public static "valueOf"(arg0: StringJS): $PaintSystem$BlendMode
public "apply"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintSystem$BlendMode$$Type = (("normal") | ("overlay"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintSystem$BlendMode_ = $PaintSystem$BlendMode$$Type;
}}
declare module "net.joefoxe.hexerei.tileentity.CandleDipperTile$DipperSlot" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CandleDipperTile$DipperState, $CandleDipperTile$DipperState$$Type} from "net.joefoxe.hexerei.tileentity.CandleDipperTile$DipperState"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $CandleDipperTile$DipperSlot {
 "dryingTicks": integer
 "output": $ItemStack
 "timesDippedMax": integer
 "dryingTicksMax": integer
 "pos": $Vec3
 "posLast": $Vec3
 "timesDipped": integer
 "fluidConsumptionAmount": integer
 "index": integer
 "dippingTicks": integer
 "state": $CandleDipperTile$DipperState
 "dippingTicksMax": integer

constructor(arg0: integer, arg1: $Vec3$$Type, arg2: $CandleDipperTile$DipperState$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $ItemStack$$Type)

public "load"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "save"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "isDrying"(): boolean
public "isDunking"(): boolean
public "isFinished"(): boolean
public "isCrafting"(): boolean
public "isNon"(): boolean
get "drying"(): boolean
get "dunking"(): boolean
get "finished"(): boolean
get "crafting"(): boolean
get "non"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CandleDipperTile$DipperSlot$$Type = ($CandleDipperTile$DipperSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CandleDipperTile$DipperSlot_ = $CandleDipperTile$DipperSlot$$Type;
}}
declare module "net.joefoxe.hexerei.client.renderer.IThirdPersonItemRenderer" {
import {$HumanoidArm, $HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$HeadedModel, $HeadedModel$$Type} from "net.minecraft.client.model.HeadedModel"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ArmedModel, $ArmedModel$$Type} from "net.minecraft.client.model.ArmedModel"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$EntityModel, $EntityModel$$Type} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $IThirdPersonItemRenderer {

 "renderThirdPersonItem"<T extends $Player, M extends ($EntityModel<(T)>) & ($ArmedModel) & ($HeadedModel)>(arg0: M, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type, arg3: $HumanoidArm$$Type, arg4: $PoseStack$$Type, arg5: $MultiBufferSource$$Type, arg6: integer): void

(arg0: M, arg1: $LivingEntity, arg2: $ItemStack, arg3: $HumanoidArm, arg4: $PoseStack, arg5: $MultiBufferSource, arg6: integer): void
}

export namespace $IThirdPersonItemRenderer {
const probejs$$marker: never
}
export class $IThirdPersonItemRenderer$$Static implements $IThirdPersonItemRenderer {


 "renderThirdPersonItem"<T extends $Player, M extends ($EntityModel<(T)>) & ($ArmedModel) & ($HeadedModel)>(arg0: M, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type, arg3: $HumanoidArm$$Type, arg4: $PoseStack$$Type, arg5: $MultiBufferSource$$Type, arg6: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IThirdPersonItemRenderer$$Type = ((arg0: M, arg1: $LivingEntity, arg2: $ItemStack, arg3: $HumanoidArm, arg4: $PoseStack, arg5: $MultiBufferSource, arg6: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IThirdPersonItemRenderer_ = $IThirdPersonItemRenderer$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.CandleDipper" {
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
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
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ITileEntity, $ITileEntity$$Type} from "net.joefoxe.hexerei.block.ITileEntity"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$CandleDipperTile, $CandleDipperTile$$Type} from "net.joefoxe.hexerei.tileentity.CandleDipperTile"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$PushReaction, $PushReaction$$Type} from "net.minecraft.world.level.material.PushReaction"

export class $CandleDipper extends $BaseEntityBlock implements $ITileEntity<($CandleDipperTile)>, $EntityBlock, $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CandleDipper)>
static readonly "SHAPE_TURNED": $VoxelShape
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "destroy"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
public "getTileEntityClass"(): $Class<($CandleDipperTile)>
public "sync"(): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CandleDipperTile
public "getTileEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CandleDipperTile)>
public "withTileEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CandleDipperTile)>): void
public "onTileEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CandleDipperTile), ($InteractionResult$$Type)>): $InteractionResult
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "tileEntityClass"(): $Class<($CandleDipperTile)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CandleDipper$$Type = ($CandleDipper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CandleDipper_ = $CandleDipper$$Type;
}}
declare module "net.joefoxe.hexerei.fluid.TallowFluid$Flowing" {
import {$TallowFluid, $TallowFluid$$Type} from "net.joefoxe.hexerei.fluid.TallowFluid"
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TallowFluid$Flowing extends $TallowFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public "createLegacyBlock"(arg0: $FluidState$$Type): $BlockState
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TallowFluid$Flowing$$Type = ($TallowFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TallowFluid$Flowing_ = $TallowFluid$Flowing$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.DipperRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $DipperRecipe implements $Recipe<($CraftingInput)> {

constructor(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $FluidStack$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: boolean)

public "getInput"(): $ItemStack
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getOutput"(): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getFluid"(): $FluidStack
public "getLiquid"(): $FluidStack
public "isSpecial"(): boolean
public "getDryingTime"(): integer
public "getDippingTime"(): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "getToastSymbol"(): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getNumberOfDips"(): integer
public "getFluidLevelsConsumed"(): integer
public "getUseInputItemAsOutput"(): boolean
public "getGroup"(): StringJS
public "isIncomplete"(): boolean
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
get "input"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "output"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "fluid"(): $FluidStack
get "liquid"(): $FluidStack
get "special"(): boolean
get "dryingTime"(): integer
get "dippingTime"(): integer
get "serializer"(): $RecipeSerializer<(any)>
get "toastSymbol"(): $ItemStack
get "numberOfDips"(): integer
get "fluidLevelsConsumed"(): integer
get "useInputItemAsOutput"(): boolean
get "group"(): StringJS
get "incomplete"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DipperRecipe$$Type = ($DipperRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DipperRecipe_ = $DipperRecipe$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.PaintSystem" {
import {$Color, $Color$$Type} from "java.awt.Color"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$PaintSystem$ValueSliders, $PaintSystem$ValueSliders$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem$ValueSliders"
import {$PaintData, $PaintData$$Type} from "net.joefoxe.hexerei.data.books.PaintData"
import {$PaintSystem$Colors, $PaintSystem$Colors$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem$Colors"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$PaintSystem$Tool, $PaintSystem$Tool$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem$Tool"
import {$BufferedImage, $BufferedImage$$Type} from "java.awt.image.BufferedImage"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$PaintSystem$Button, $PaintSystem$Button$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem$Button"
import {$Rectangle, $Rectangle$$Type} from "java.awt.Rectangle"
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"
import {$PaintSystem$ActionManager, $PaintSystem$ActionManager$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem$ActionManager"
import {$PaintSystem$Brush$Type, $PaintSystem$Brush$Type$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem$Brush$Type"
import {$PaintSystem$Layer, $PaintSystem$Layer$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem$Layer"
import {$PaintSystem$Brush, $PaintSystem$Brush$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem$Brush"

export class $PaintSystem {
 "strokeMask": $BufferedImage
readonly "parentLocation": $ResourceLocation
 "toolVisibilityOld": float
 "buttons": $List<($PaintSystem$Button)>
 "toolsVisible": boolean
static "clipboardMask": $BufferedImage
 "shouldTick": boolean
 "cursorX": float
 "compositeImage": $BufferedImage
 "cursorY": float
 "lockedByUUID": $UUID
static "clipboardBounds": $Rectangle
 "actionManager": $PaintSystem$ActionManager
static "clipboardImage": $BufferedImage
 "toolVisibility": float
 "strokeType": $PaintSystem$Brush$Type
 "width": integer
 "cursorXOld": float
 "locked": boolean
 "lockedByName": $Component
 "cursorYOld": float
 "height": integer

constructor(arg0: integer, arg1: integer, arg2: $ResourceLocation$$Type, arg3: $UUID$$Type)

public "released"(arg0: integer, arg1: integer): void
public "tick"(): void
public "setColor"(arg0: integer): void
public "hover"(arg0: float, arg1: float): void
public "click"(arg0: float, arg1: float): void
public "draw"(arg0: float, arg1: float, arg2: float, arg3: float): void
public "getColor"(): integer
public "getLayers"(): $List<($PaintSystem$Layer)>
public static "deepCopy"(arg0: $BufferedImage$$Type): $BufferedImage
public "pickColor"(arg0: $PaintSystem$Layer$$Type, arg1: integer, arg2: integer): integer
public "canCopy"(): boolean
public "getActiveLayer"(): $PaintSystem$Layer
public "getTools"(): $List<($PaintSystem$Tool)>
public "getBrush"(): $PaintSystem$Brush
public "getColors"(): $PaintSystem$Colors
public "addLayer"(arg0: integer, arg1: integer): void
public "addLayer"(arg0: $PaintSystem$Layer$$Type): void
public "fromPaintData"(arg0: $PaintData$$Type): void
public "floodFill"(arg0: $PaintSystem$Layer$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: float): void
public "updateSelection"(arg0: integer, arg1: integer): void
public "getValueSliders"(): $PaintSystem$ValueSliders
public "getMovingSelection"(): $BufferedImage
public "getImageLocation"(): $ResourceLocation
public "getColorsVisibility"(arg0: float): float
public "setToolsVisible"(arg0: boolean): void
public "addAndUpdateTexture"(): void
public "deleteSelection"(): void
public "endDrawing"(): void
public "setActiveLayer"(arg0: integer): void
public "setActiveLayer"(arg0: $PaintSystem$Layer$$Type): void
public "getCurrentTool"(): $PaintSystem$Tool
public "startSelection"(arg0: integer, arg1: integer): void
public "endSelection"(arg0: integer, arg1: integer): void
public "toPaintData"(): $PaintData
public "startStroke"(arg0: integer, arg1: integer, arg2: $PaintSystem$Brush$Type$$Type): void
public "endStroke"(): void
public "copySelection"(): $BufferedImage
public "setCurrentTool"(arg0: $PaintSystem$Tool$$Type): void
public "adjustImage"(arg0: $BufferedImage$$Type, arg1: float, arg2: $Color$$Type): $BufferedImage
public "nextTool"(): void
public "previousTool"(): void
public "pasteClipboard"(): void
public "rebuildComposite"(): void
public static "convertToNativeImage"(arg0: $BufferedImage$$Type): $NativeImage
public "setCurrentToolById"(arg0: integer): void
public "copySelectionToClipboard"(): void
public "cutSelectionToClipboard"(): void
set "color"(value: integer)
get "color"(): integer
get "layers"(): $List<($PaintSystem$Layer)>
get "activeLayer"(): $PaintSystem$Layer
get "tools"(): $List<($PaintSystem$Tool)>
get "brush"(): $PaintSystem$Brush
get "colors"(): $PaintSystem$Colors
get "valueSliders"(): $PaintSystem$ValueSliders
get "movingSelection"(): $BufferedImage
get "imageLocation"(): $ResourceLocation
set "toolsVisible"(value: boolean)
set "activeLayer"(value: integer)
set "activeLayer"(value: $PaintSystem$Layer$$Type)
get "currentTool"(): $PaintSystem$Tool
set "currentTool"(value: $PaintSystem$Tool$$Type)
set "currentToolById"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintSystem$$Type = ($PaintSystem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintSystem_ = $PaintSystem$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.BroomStand" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ITileEntity, $ITileEntity$$Type} from "net.joefoxe.hexerei.block.ITileEntity"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$BroomStandTile, $BroomStandTile$$Type} from "net.joefoxe.hexerei.tileentity.BroomStandTile"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $BroomStand extends $Block implements $ITileEntity<($BroomStandTile)>, $EntityBlock, $SimpleWaterloggedBlock {
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
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getTileEntityClass"(): $Class<($BroomStandTile)>
public "sync"(): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BroomStandTile
public "getTileEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($BroomStandTile)>
public "withTileEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($BroomStandTile)>): void
public "onTileEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($BroomStandTile), ($InteractionResult$$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "tileEntityClass"(): $Class<($BroomStandTile)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BroomStand$$Type = ($BroomStand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BroomStand_ = $BroomStand$$Type;
}}
declare module "net.joefoxe.hexerei.world.biomemods.ModEntityBiomeModifier" {
import {$ModifiableBiomeInfo$BiomeInfo$Builder, $ModifiableBiomeInfo$BiomeInfo$Builder$$Type} from "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo$Builder"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$BiomeModifier, $BiomeModifier$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$$Type} from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import {$BiomeModifier$Phase, $BiomeModifier$Phase$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier$Phase"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ModEntityBiomeModifier extends $Record implements $BiomeModifier {

constructor(biomes: $HolderSet$$Type<($Biome)>, spawnerData: $MobSpawnSettings$SpawnerData$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "codec"(): $MapCodec<($BiomeModifier)>
public "modify"(arg0: $Holder$$Type<($Biome)>, arg1: $BiomeModifier$Phase$$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$$Type): void
public "biomes"(): $HolderSet<($Biome)>
public "spawnerData"(): $MobSpawnSettings$SpawnerData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModEntityBiomeModifier$$Type = ({"spawnerData"?: $MobSpawnSettings$SpawnerData$$Type, "biomes"?: $HolderSet$$Type<($Biome)>}) | ([spawnerData?: $MobSpawnSettings$SpawnerData$$Type, biomes?: $HolderSet$$Type<($Biome)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModEntityBiomeModifier_ = $ModEntityBiomeModifier$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.PaintSystem$Layer" {
import {$BufferedImage, $BufferedImage$$Type} from "java.awt.image.BufferedImage"
import {$PaintSystem$BlendMode, $PaintSystem$BlendMode$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem$BlendMode"

export class $PaintSystem$Layer {
 "dirty": boolean
 "pixels": $BufferedImage
 "blendMode": $PaintSystem$BlendMode
 "name": StringJS
 "opacity": float

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintSystem$Layer$$Type = ($PaintSystem$Layer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintSystem$Layer_ = $PaintSystem$Layer$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.KeychainItem" {
import {$BroomAttachmentItem, $BroomAttachmentItem$$Type} from "net.joefoxe.hexerei.item.custom.BroomAttachmentItem"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Model, $Model$$Type} from "net.minecraft.client.model.Model"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $KeychainItem extends $BroomAttachmentItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "dye_texture": $ResourceLocation
static readonly "MAX_BAR_WIDTH": integer
 "texture": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "model": $Model
 "chain_resources": $Pair<($ResourceLocation), ($Model)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "bakeModels"(): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeychainItem$$Type = ($KeychainItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeychainItem_ = $KeychainItem$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.ModChestBoatItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ModChestBoatEntity$Type, $ModChestBoatEntity$Type$$Type} from "net.joefoxe.hexerei.client.renderer.entity.custom.ModChestBoatEntity$Type"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ModChestBoatItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: boolean, arg1: $ModChestBoatEntity$Type$$Type, arg2: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModChestBoatItem$$Type = ($ModChestBoatItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModChestBoatItem_ = $ModChestBoatItem$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.MushroomWitchArmorItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$WitchArmorItem, $WitchArmorItem$$Type} from "net.joefoxe.hexerei.item.custom.WitchArmorItem"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ArmorMaterial$Layer, $ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $MushroomWitchArmorItem extends $WitchArmorItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: $ArmorItem$Type$$Type, arg2: $Item$Properties$$Type)

public "getArmorTexture"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $EquipmentSlot$$Type, arg3: $ArmorMaterial$Layer$$Type, arg4: boolean): $ResourceLocation
public "getEquipmentSlot"(arg0: $ItemStack$$Type): $EquipmentSlot
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MushroomWitchArmorItem$$Type = ($MushroomWitchArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MushroomWitchArmorItem_ = $MushroomWitchArmorItem$$Type;
}}
declare module "net.joefoxe.hexerei.fluid.TallowFluid$Source" {
import {$TallowFluid, $TallowFluid$$Type} from "net.joefoxe.hexerei.fluid.TallowFluid"
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $TallowFluid$Source extends $TallowFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TallowFluid$Source$$Type = ($TallowFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TallowFluid$Source_ = $TallowFluid$Source$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.FlowerOutputItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $FlowerOutputItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlowerOutputItem$$Type = ($FlowerOutputItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlowerOutputItem_ = $FlowerOutputItem$$Type;
}}
declare module "net.joefoxe.hexerei.block.connected.CTDyable" {
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $CTDyable {

 "getDyeColor"(arg0: $BlockState$$Type): $DyeColor
}

export namespace $CTDyable {
const probejs$$marker: never
}
export class $CTDyable$$Static implements $CTDyable {


 "getDyeColor"(arg0: $BlockState$$Type): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CTDyable$$Type = ($CTDyable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CTDyable_ = $CTDyable$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.PaintSystem$Brush$Type" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $PaintSystem$Brush$Type extends $Enum<($PaintSystem$Brush$Type)> {
static readonly "DRAW": $PaintSystem$Brush$Type
static readonly "ERASE": $PaintSystem$Brush$Type


public static "values"(): ($PaintSystem$Brush$Type)[]
public static "valueOf"(arg0: StringJS): $PaintSystem$Brush$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintSystem$Brush$Type$$Type = (("draw") | ("erase"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintSystem$Brush$Type_ = $PaintSystem$Brush$Type$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.WillowVinesPlantBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$GrowingPlantBodyBlock, $GrowingPlantBodyBlock$$Type} from "net.minecraft.world.level.block.GrowingPlantBodyBlock"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WillowVinesPlantBlock extends $GrowingPlantBodyBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WillowVinesPlantBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WillowVinesPlantBlock$$Type = ($WillowVinesPlantBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WillowVinesPlantBlock_ = $WillowVinesPlantBlock$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.PaintData$LayerData" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PaintData$LayerData extends $Record {
static readonly "CODEC": $Codec<($PaintData$LayerData)>

constructor(width: integer, height: integer, pixels: $List$$Type<(integer)>, opacity: float, blendMode: StringJS, name: StringJS)

public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "pixels"(): $List<(integer)>
public "width"(): integer
public "height"(): integer
public "opacity"(): float
public "blendMode"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintData$LayerData$$Type = ({"name"?: StringJS, "blendMode"?: StringJS, "pixels"?: $List$$Type<(integer)>, "width"?: integer, "opacity"?: float, "height"?: integer}) | ([name?: StringJS, blendMode?: StringJS, pixels?: $List$$Type<(integer)>, width?: integer, opacity?: float, height?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintData$LayerData_ = $PaintData$LayerData$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.MixingCauldronItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$ItemStackHandler, $ItemStackHandler$$Type} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $MixingCauldronItem extends $BlockItem {
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
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "createHandler"(): $ItemStackHandler
public "place"(arg0: $BlockPlaceContext$$Type): $InteractionResult
public static "getColorValue"(arg0: $DyeColor$$Type, arg1: $ItemStack$$Type): integer
public static "getDyeColorNamed"(arg0: StringJS): integer
public static "getDyeColorNamed"(arg0: $ItemStack$$Type): $DyeColor
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
export type $MixingCauldronItem$$Type = ($MixingCauldronItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixingCauldronItem_ = $MixingCauldronItem$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.ConnectingCarpetDyed$South" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $ConnectingCarpetDyed$South extends $Enum<($ConnectingCarpetDyed$South)> implements $StringRepresentable {
static readonly "ALL": $ConnectingCarpetDyed$South
static readonly "SOUTH_EAST_AND_SOUTH_WEST": $ConnectingCarpetDyed$South
static readonly "SOUTH_AND_SOUTH_EAST": $ConnectingCarpetDyed$South
static readonly "JUST_SOUTH_WEST": $ConnectingCarpetDyed$South
static readonly "JUST_SOUTH": $ConnectingCarpetDyed$South
static readonly "JUST_SOUTH_EAST": $ConnectingCarpetDyed$South
static readonly "NONE": $ConnectingCarpetDyed$South
static readonly "SOUTH_AND_SOUTH_WEST": $ConnectingCarpetDyed$South


public "toString"(): StringJS
public static "values"(): ($ConnectingCarpetDyed$South)[]
public static "valueOf"(arg0: StringJS): $ConnectingCarpetDyed$South
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
export type $ConnectingCarpetDyed$South$$Type = (("south") | ("south_and_south_west") | ("south_and_south_east") | ("south_west") | ("south_east") | ("south_east_and_south_west") | ("all") | ("none"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectingCarpetDyed$South_ = $ConnectingCarpetDyed$South$$Type;
}}
declare module "net.joefoxe.hexerei.tileentity.HerbJarTile" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$JarHandler, $JarHandler$$Type} from "net.joefoxe.hexerei.items.JarHandler"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Clearable, $Clearable$$Type} from "net.minecraft.world.Clearable"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$LockCode, $LockCode$$Type} from "net.minecraft.world.LockCode"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$DyedItemColor, $DyedItemColor$$Type} from "net.minecraft.world.item.component.DyedItemColor"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RandomizableContainerBlockEntity, $RandomizableContainerBlockEntity$$Type} from "net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$FormattedCharSequence, $FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $HerbJarTile extends $RandomizableContainerBlockEntity implements $Clearable, $MenuProvider, $ICapabilityProvider<($HerbJarTile), ($Direction), ($IItemHandler)> {
 "dyeColor": $DyedItemColor
 "degreesOpened": integer
 "name": $Component
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "customName": $Component
 "lockKey": $LockCode
 "buttonToggled": integer
 "itemHandler": $JarHandler

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "sync"(): void
public "getDisplayName"(): $Component
public "getName"(): $Component
public "isEmpty"(): boolean
public "getItems"(): $NonNullList<($ItemStack)>
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "clearContent"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getCustomName"(): $Component
public "hasCustomName"(): boolean
public "setChanged"(): void
public "getCapability"(arg0: $HerbJarTile$$Type, arg1: $Direction$$Type): $IItemHandler
public "getCapability"(arg0: any, arg1: any): any
public "getDyeColor"(): integer
public "takeItems"(arg0: integer, arg1: integer): $ItemStack
public "hasDyeColor"(): boolean
public "putItems"(arg0: integer, arg1: $ItemStack$$Type, arg2: integer): integer
public "reorderText"(arg0: integer, arg1: $Function$$Type<($Component), ($FormattedCharSequence$$Type)>): $FormattedCharSequence
public "readInventory"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "getContainerSize"(): integer
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "clientUpdateCount"(arg0: integer, arg1: integer): void
public "interactPutCurrentItem"(arg0: integer, arg1: $Player$$Type): integer
public static "getDistanceToEntity"(arg0: $Entity$$Type, arg1: $BlockPos$$Type): double
public "getDegreesOpened"(): integer
public "setDegreesOpened"(arg0: integer): void
public "setButtonToggled"(arg0: integer): void
public "getButtonToggled"(): integer
public "getItemStackInSlot"(arg0: integer): $ItemStack
public "interactPutItems"(arg0: $Player$$Type): integer
public "interactPutCurrentInventory"(arg0: integer, arg1: $Player$$Type): integer
public static "tryClear"(arg0: any): void
public "getLevel"(): $Level
public "getBlockPos"(): $BlockPos
public static "setBlockEntityLootTable"(arg0: $BlockGetter$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $ResourceKey$$Type<($LootTable)>): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "displayName"(): $Component
get "name"(): $Component
get "empty"(): boolean
get "items"(): $NonNullList<($ItemStack)>
get "customName"(): $Component
get "dyeColor"(): integer
get "containerSize"(): integer
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "degreesOpened"(): integer
set "degreesOpened"(value: integer)
set "buttonToggled"(value: integer)
get "buttonToggled"(): integer
get "level"(): $Level
get "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HerbJarTile$$Type = ($HerbJarTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HerbJarTile_ = $HerbJarTile$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.ConnectingCarpetDyed$North" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $ConnectingCarpetDyed$North extends $Enum<($ConnectingCarpetDyed$North)> implements $StringRepresentable {
static readonly "ALL": $ConnectingCarpetDyed$North
static readonly "NORTH_AND_NORTH_EAST": $ConnectingCarpetDyed$North
static readonly "JUST_NORTH_WEST": $ConnectingCarpetDyed$North
static readonly "NORTH_AND_NORTH_WEST": $ConnectingCarpetDyed$North
static readonly "NORTH_EAST_AND_NORTH_WEST": $ConnectingCarpetDyed$North
static readonly "JUST_NORTH_EAST": $ConnectingCarpetDyed$North
static readonly "NONE": $ConnectingCarpetDyed$North
static readonly "JUST_NORTH": $ConnectingCarpetDyed$North


public "toString"(): StringJS
public static "values"(): ($ConnectingCarpetDyed$North)[]
public static "valueOf"(arg0: StringJS): $ConnectingCarpetDyed$North
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
export type $ConnectingCarpetDyed$North$$Type = (("north") | ("north_and_north_west") | ("north_and_north_east") | ("north_west") | ("north_east") | ("north_east_and_north_west") | ("all") | ("none"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectingCarpetDyed$North_ = $ConnectingCarpetDyed$North$$Type;
}}
declare module "net.joefoxe.hexerei.block.ITileEntity" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $ITileEntity<T extends $BlockEntity> {

 "sync"(): void
 "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): T
 "getTileEntityClass"(): $Class<(T)>
 "getTileEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<(T)>
 "withTileEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<(T)>): void
 "onTileEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<(T), ($InteractionResult$$Type)>): $InteractionResult

(): $Class$$Type<(T)>
get "tileEntityClass"(): $Class<(T)>
}

export namespace $ITileEntity {
const probejs$$marker: never
}
export class $ITileEntity$$Static<T extends $BlockEntity> implements $ITileEntity {


 "sync"(): void
 "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): T
 "getTileEntityClass"(): $Class<(T)>
 "getTileEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<(T)>
 "withTileEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<(T)>): void
 "onTileEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<(T), ($InteractionResult$$Type)>): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITileEntity$$Type<T> = (() => $Class$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITileEntity_<T> = $ITileEntity$$Type<(T)>;
}}
declare module "net.joefoxe.hexerei.item.data_components.BookData$Bookmarks$Slot" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $BookData$Bookmarks$Slot {
static readonly "CODEC": $Codec<($BookData$Bookmarks$Slot)>
static "STREAM_CODEC": $StreamCodec<($ByteBuf), ($BookData$Bookmarks$Slot)>

constructor(arg0: StringJS, arg1: $DyeColor$$Type, arg2: integer)

public "getIndex"(): integer
public "setIndex"(arg0: integer): void
public "setColor"(arg0: $DyeColor$$Type): void
public "getId"(): StringJS
public "copy"(): $BookData$Bookmarks$Slot
public "setId"(arg0: StringJS): void
public "getColor"(): $DyeColor
public "copyWithIndex"(arg0: integer): $BookData$Bookmarks$Slot
get "index"(): integer
set "index"(value: integer)
set "color"(value: $DyeColor$$Type)
get "id"(): StringJS
set "id"(value: StringJS)
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookData$Bookmarks$Slot$$Type = ($BookData$Bookmarks$Slot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookData$Bookmarks$Slot_ = $BookData$Bookmarks$Slot$$Type;
}}
declare module "net.joefoxe.hexerei.fluid.BloodFluid" {
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $BloodFluid extends $FlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getSource"(): $Fluid
public "isSame"(arg0: $Fluid$$Type): boolean
public "getTickDelay"(arg0: $LevelReader$$Type): integer
public "getFlowing"(): $Fluid
public "getFluidType"(): $FluidType
public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public "getBucket"(): $Item
public "getDropOff"(arg0: $LevelReader$$Type): integer
public "getSlopeFindDistance"(arg0: $LevelReader$$Type): integer
public static "wrap"(arg1: any): $ReplacementMatch
get "source"(): $Fluid
get "flowing"(): $Fluid
get "fluidType"(): $FluidType
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloodFluid$$Type = ($BloodFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BloodFluid_ = $BloodFluid$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.PaintSystem$ValueSlider" {
import {$PaintSystem, $PaintSystem$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem"
import {$PageDrawing$PageOn, $PageDrawing$PageOn$$Type} from "net.joefoxe.hexerei.data.books.PageDrawing$PageOn"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$PaintSystem$ValueSlider$SliderListener, $PaintSystem$ValueSlider$SliderListener$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem$ValueSlider$SliderListener"

export class $PaintSystem$ValueSlider {
 "visibilityOld": float
 "visibility": float
 "rx": float
 "ry": float
 "width": float
 "lx": float
 "ly": float
 "height": float


public "tick"(arg0: $PaintSystem$$Type): void
public "getValue"(): float
public "setValue"(arg0: float): void
public "getY"(arg0: $PageDrawing$PageOn$$Type): float
public "getX"(arg0: $PageDrawing$PageOn$$Type): float
public "shouldRender"(arg0: $PaintSystem$$Type): boolean
public "isHorizontal"(): boolean
public "getVisibility"(arg0: float): float
public "isDragging"(): boolean
public "getTooltip"(arg0: $PaintSystem$$Type): $Component
public "isVisible"(arg0: $PaintSystem$$Type): boolean
public "updateValue"(arg0: float, arg1: float, arg2: $PageDrawing$PageOn$$Type): void
public "getColor1"(arg0: $PaintSystem$$Type): integer
public "getColor2"(arg0: $PaintSystem$$Type): integer
public "getSliderColor"(arg0: $PaintSystem$$Type): integer
public "setHovering"(): void
public "getHoveringScale"(arg0: float): float
public "isSpecialHueSlider"(): boolean
public "setSliderListener"(arg0: $PaintSystem$ValueSlider$SliderListener$$Type): void
get "value"(): float
set "value"(value: float)
get "horizontal"(): boolean
get "dragging"(): boolean
get "specialHueSlider"(): boolean
set "sliderListener"(value: $PaintSystem$ValueSlider$SliderListener$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintSystem$ValueSlider$$Type = ($PaintSystem$ValueSlider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintSystem$ValueSlider_ = $PaintSystem$ValueSlider$$Type;
}}
declare module "net.joefoxe.hexerei.client.renderer.TwoHandedItemAnimation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TwoHandedItemAnimation {
 "bool": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TwoHandedItemAnimation$$Type = ($TwoHandedItemAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TwoHandedItemAnimation_ = $TwoHandedItemAnimation$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.Candle" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$AbstractCandleBlock, $AbstractCandleBlock$$Type} from "net.minecraft.world.level.block.AbstractCandleBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ITileEntity, $ITileEntity$$Type} from "net.joefoxe.hexerei.block.ITileEntity"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$CandleTile, $CandleTile$$Type} from "net.joefoxe.hexerei.tileentity.CandleTile"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $Candle extends $AbstractCandleBlock implements $ITileEntity<($CandleTile)>, $EntityBlock, $SimpleWaterloggedBlock {
static readonly "BASE_COLOR": integer
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
static readonly "CANDLES_LIT": $IntegerProperty
static readonly "ONE_SHAPE": $VoxelShape
static readonly "LIGHT_PER_CANDLE": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Candle)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWER": $IntegerProperty
static readonly "THREE_SHAPE": $VoxelShape
static readonly "FOUR_SHAPE": $VoxelShape
static readonly "CANDLES": $IntegerProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "LIT": $BooleanProperty
static readonly "TWO_SHAPE": $VoxelShape
static readonly "INSTANT": float
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "getShape"(arg0: $BlockState$$Type): $VoxelShape
public static "isLit"(arg0: $BlockState$$Type): boolean
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public static "extinguish"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $CandleTile$$Type): void
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "canBeReplaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "dropCandles"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "canBeLit"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $Level$$Type): boolean
public static "spawnSmokeParticles"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "onProjectileHit"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockHitResult$$Type, arg3: $Projectile$$Type): void
public "getDirectSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public static "spawnParticleWave"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean, arg3: $List$$Type<(StringJS)>, arg4: integer): void
public "getTileEntityClass"(): $Class<($CandleTile)>
public "sync"(): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CandleTile
public "getTileEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CandleTile)>
public "withTileEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CandleTile)>): void
public "onTileEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CandleTile), ($InteractionResult$$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "tileEntityClass"(): $Class<($CandleTile)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Candle$$Type = ($Candle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Candle_ = $Candle$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.ModRecipeTypes$ModRecipeType" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"

export class $ModRecipeTypes$ModRecipeType<T extends $Recipe<(any)>> implements $RecipeType<(T)> {


public static "register"<T extends $Recipe<(any)>>(arg0: StringJS): $RecipeType<(T)>
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$$Type): $RecipeType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModRecipeTypes$ModRecipeType$$Type<T> = ($ModRecipeTypes$ModRecipeType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModRecipeTypes$ModRecipeType_<T> = $ModRecipeTypes$ModRecipeType$$Type<(T)>;
}}
declare module "net.joefoxe.hexerei.block.custom.PestleAndMortar" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$PestleAndMortarTile, $PestleAndMortarTile$$Type} from "net.joefoxe.hexerei.tileentity.PestleAndMortarTile"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ITileEntity, $ITileEntity$$Type} from "net.joefoxe.hexerei.block.ITileEntity"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $PestleAndMortar extends $Block implements $ITileEntity<($PestleAndMortarTile)>, $EntityBlock, $SimpleWaterloggedBlock {
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
static readonly "SHAPE": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTileEntityClass"(): $Class<($PestleAndMortarTile)>
public "sync"(): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $PestleAndMortarTile
public "getTileEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($PestleAndMortarTile)>
public "withTileEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($PestleAndMortarTile)>): void
public "onTileEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($PestleAndMortarTile), ($InteractionResult$$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "tileEntityClass"(): $Class<($PestleAndMortarTile)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PestleAndMortar$$Type = ($PestleAndMortar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PestleAndMortar_ = $PestleAndMortar$$Type;
}}
declare module "net.joefoxe.hexerei.tileentity.CofferTile$WhitelistMode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $CofferTile$WhitelistMode extends $Enum<($CofferTile$WhitelistMode)> {
static readonly "WHITELIST": $CofferTile$WhitelistMode
static readonly "BLACKLIST_INV": $CofferTile$WhitelistMode
static readonly "WHITELIST_INV": $CofferTile$WhitelistMode


public "getName"(): StringJS
public static "values"(): ($CofferTile$WhitelistMode)[]
public static "valueOf"(arg0: StringJS): $CofferTile$WhitelistMode
public static "byId"(arg0: integer): $CofferTile$WhitelistMode
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CofferTile$WhitelistMode$$Type = (("whitelist_inv") | ("whitelist") | ("blacklist_inv"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CofferTile$WhitelistMode_ = $CofferTile$WhitelistMode$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.PestleAndMortarRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$PestleAndMortarRecipe, $PestleAndMortarRecipe$$Type} from "net.joefoxe.hexerei.data.recipes.PestleAndMortarRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $PestleAndMortarRecipe$Serializer implements $RecipeSerializer<($PestleAndMortarRecipe)> {
static readonly "INSTANCE": $PestleAndMortarRecipe$Serializer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($PestleAndMortarRecipe)>

constructor()

public "codec"(): $MapCodec<($PestleAndMortarRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($PestleAndMortarRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PestleAndMortarRecipe$Serializer$$Type = ($PestleAndMortarRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PestleAndMortarRecipe$Serializer_ = $PestleAndMortarRecipe$Serializer$$Type;
}}
declare module "net.joefoxe.hexerei.client.renderer.entity.custom.BroomEntity$Status" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $BroomEntity$Status extends $Enum<($BroomEntity$Status)> {
static readonly "UNDER_WATER": $BroomEntity$Status
static readonly "UNDER_LAVA": $BroomEntity$Status
static readonly "UNDER_FLOWING_WATER": $BroomEntity$Status
static readonly "UNDER_FLOWING_LAVA": $BroomEntity$Status
static readonly "IN_AIR": $BroomEntity$Status
static readonly "IN_WATER": $BroomEntity$Status
static readonly "ON_LAND": $BroomEntity$Status


public static "values"(): ($BroomEntity$Status)[]
public static "valueOf"(arg0: StringJS): $BroomEntity$Status
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BroomEntity$Status$$Type = (("in_water") | ("under_water") | ("under_flowing_water") | ("under_lava") | ("under_flowing_lava") | ("on_land") | ("in_air"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BroomEntity$Status_ = $BroomEntity$Status$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.BookImage" {
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$BookHyperlink, $BookHyperlink$$Type} from "net.joefoxe.hexerei.data.books.BookHyperlink"
import {$BookImageEffect, $BookImageEffect$$Type} from "net.joefoxe.hexerei.data.books.BookImageEffect"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"

export class $BookImage {
 "imageWidth": float
 "hyperlink": $BookHyperlink
static readonly "CODEC": $Codec<($BookImage)>
 "texture": StringJS
 "scale": float
 "imageHeight": float
 "effects": $ArrayList<($BookImageEffect)>
 "u": float
 "v": float
 "x": float
 "width": float
 "y": float
 "z": float
 "height": float


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookImage$$Type = ($BookImage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookImage_ = $BookImage$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.AddToCandleRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$CustomRecipe, $CustomRecipe$$Type} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $AddToCandleRecipe extends $CustomRecipe {

constructor(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getOutput"(): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
get "type"(): $RecipeType<(any)>
get "output"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddToCandleRecipe$$Type = ($AddToCandleRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddToCandleRecipe_ = $AddToCandleRecipe$$Type;
}}
declare module "net.joefoxe.hexerei.item.data_components.BookData$Bookmarks" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$BookData$Bookmarks$Slot, $BookData$Bookmarks$Slot$$Type} from "net.joefoxe.hexerei.item.data_components.BookData$Bookmarks$Slot"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $BookData$Bookmarks {
static readonly "CODEC": $Codec<($BookData$Bookmarks)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($BookData$Bookmarks)>

constructor(arg0: $List$$Type<($BookData$Bookmarks$Slot$$Type)>)

public "getSlot"(arg0: integer): $BookData$Bookmarks$Slot
public "setSlot"(arg0: integer, arg1: $BookData$Bookmarks$Slot$$Type): void
public "getSlots"(): $List<($BookData$Bookmarks$Slot)>
public "setSlots"(arg0: $List$$Type<($BookData$Bookmarks$Slot$$Type)>): void
get "slots"(): $List<($BookData$Bookmarks$Slot)>
set "slots"(value: $List$$Type<($BookData$Bookmarks$Slot$$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookData$Bookmarks$$Type = ($BookData$Bookmarks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookData$Bookmarks_ = $BookData$Bookmarks$$Type;
}}
declare module "net.joefoxe.hexerei.world.structure.structures.WitchHutStructure" {
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$StructureType, $StructureType$$Type} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Structure$GenerationStub, $Structure$GenerationStub$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"
import {$Structure$StructureSettings, $Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $WitchHutStructure extends $Structure {
static readonly "CODEC": $MapCodec<($WitchHutStructure)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>

constructor(arg0: $Structure$StructureSettings$$Type, arg1: $Holder$$Type<($StructureTemplatePool)>, arg2: $Optional$$Type<($ResourceLocation$$Type)>, arg3: integer, arg4: $HeightProvider$$Type, arg5: $Optional$$Type<($Heightmap$Types$$Type)>, arg6: integer)

public "type"(): $StructureType<(any)>
public "findGenerationPoint"(arg0: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WitchHutStructure$$Type = ($WitchHutStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WitchHutStructure_ = $WitchHutStructure$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.WoodcutterRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$SingleRecipeInput, $SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SingleItemRecipe, $SingleItemRecipe$$Type} from "net.minecraft.world.item.crafting.SingleItemRecipe"

export class $WoodcutterRecipe extends $SingleItemRecipe {
 "ingredientCount": integer

constructor(arg0: StringJS, arg1: $Ingredient$$Type, arg2: StringJS, arg3: integer, arg4: integer)
constructor(arg0: StringJS, arg1: $Ingredient$$Type, arg2: integer, arg3: $ItemStack$$Type)

public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "isSpecial"(): boolean
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodcutterRecipe$$Type = ($WoodcutterRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodcutterRecipe_ = $WoodcutterRecipe$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.CauldronEmptyingRecipe" {
import {$CauldronEmptyingRecipe$Wrapper, $CauldronEmptyingRecipe$Wrapper$$Type} from "net.joefoxe.hexerei.data.recipes.CauldronEmptyingRecipe$Wrapper"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $CauldronEmptyingRecipe implements $Recipe<($CauldronEmptyingRecipe$Wrapper)> {

constructor(arg0: $Ingredient$$Type, arg1: $FluidStack$$Type, arg2: $ItemStack$$Type)

public "getInput"(): $Ingredient
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CauldronEmptyingRecipe$Wrapper$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(): $ItemStack
public "getFluid"(): $FluidStack
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CauldronEmptyingRecipe$Wrapper$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): StringJS
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $CauldronEmptyingRecipe$Wrapper$$Type): $NonNullList<($ItemStack)>
get "input"(): $Ingredient
get "type"(): $RecipeType<(any)>
get "resultItem"(): $ItemStack
get "fluid"(): $FluidStack
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CauldronEmptyingRecipe$$Type = ($CauldronEmptyingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CauldronEmptyingRecipe_ = $CauldronEmptyingRecipe$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.PestleAndMortarRecipe$Type" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$PestleAndMortarRecipe, $PestleAndMortarRecipe$$Type} from "net.joefoxe.hexerei.data.recipes.PestleAndMortarRecipe"

export class $PestleAndMortarRecipe$Type implements $RecipeType<($PestleAndMortarRecipe)> {
static readonly "INSTANCE": $PestleAndMortarRecipe$Type
static readonly "ID": StringJS


public static "register"<T extends $Recipe<(any)>>(arg0: StringJS): $RecipeType<($PestleAndMortarRecipe)>
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$$Type): $RecipeType<($PestleAndMortarRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PestleAndMortarRecipe$Type$$Type = ($PestleAndMortarRecipe$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PestleAndMortarRecipe$Type_ = $PestleAndMortarRecipe$Type$$Type;
}}
declare module "net.joefoxe.hexerei.fluid.PotionFluidType" {
import {$FluidType$Properties, $FluidType$Properties$$Type} from "net.neoforged.neoforge.fluids.FluidType$Properties"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Lazy, $Lazy$$Type} from "net.neoforged.neoforge.common.util.Lazy"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $PotionFluidType extends $FluidType {
static readonly "SIZE": $Lazy<(integer)>
static readonly "BUCKET_VOLUME": integer

constructor(arg0: $FluidType$Properties$$Type)

public static "getTintColor"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
public static "getTintColor"(arg0: $FluidStack$$Type): integer
public "getDescriptionId"(arg0: $FluidStack$$Type): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionFluidType$$Type = ($PotionFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionFluidType_ = $PotionFluidType$$Type;
}}
declare module "net.joefoxe.hexerei.world.structure.structures.HexereiMahoganyTreeFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$LevelSimulatedReader, $LevelSimulatedReader$$Type} from "net.minecraft.world.level.LevelSimulatedReader"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $HexereiMahoganyTreeFeature extends $Feature<($NoneFeatureConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(arg0: $Codec$$Type<(any)>)

public "place"(arg0: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
public static "isAirOrLeavesOrLogsAt"(arg0: $LevelSimulatedReader$$Type, arg1: $BlockPos$$Type): boolean
public static "isAirOrLeavesAt"(arg0: $LevelSimulatedReader$$Type, arg1: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HexereiMahoganyTreeFeature$$Type = ($HexereiMahoganyTreeFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HexereiMahoganyTreeFeature_ = $HexereiMahoganyTreeFeature$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.TallowImpurityItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$FoodProperties, $FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $TallowImpurityItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static "FOOD": $FoodProperties
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TallowImpurityItem$$Type = ($TallowImpurityItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TallowImpurityItem_ = $TallowImpurityItem$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.AddToCandleRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$AddToCandleRecipe, $AddToCandleRecipe$$Type} from "net.joefoxe.hexerei.data.recipes.AddToCandleRecipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $AddToCandleRecipe$Serializer implements $RecipeSerializer<($AddToCandleRecipe)> {
static readonly "INSTANCE": $AddToCandleRecipe$Serializer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AddToCandleRecipe)>

constructor()

public "codec"(): $MapCodec<($AddToCandleRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($AddToCandleRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddToCandleRecipe$Serializer$$Type = ($AddToCandleRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddToCandleRecipe$Serializer_ = $AddToCandleRecipe$Serializer$$Type;
}}
declare module "net.joefoxe.hexerei.world.structure.structures.OwlPostOfficeStructure" {
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$StructureType, $StructureType$$Type} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Structure$GenerationStub, $Structure$GenerationStub$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"
import {$Structure$StructureSettings, $Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $OwlPostOfficeStructure extends $Structure {
static readonly "CODEC": $MapCodec<($OwlPostOfficeStructure)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>

constructor(arg0: $Structure$StructureSettings$$Type, arg1: $Holder$$Type<($StructureTemplatePool)>, arg2: $Optional$$Type<($ResourceLocation$$Type)>, arg3: integer, arg4: $HeightProvider$$Type, arg5: $Optional$$Type<($Heightmap$Types$$Type)>, arg6: integer)

public "type"(): $StructureType<(any)>
public "findGenerationPoint"(arg0: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwlPostOfficeStructure$$Type = ($OwlPostOfficeStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwlPostOfficeStructure_ = $OwlPostOfficeStructure$$Type;
}}
declare module "net.joefoxe.hexerei.tileentity.CourierLetterTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CourierLetterTile extends $BlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "tick"(): void
public "sync"(): void
public "save"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "getType"(): $BlockEntityType<(any)>
public "onLoad"(): void
public "saveData"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "getModelData"(): $ModelData
public "interact"(): boolean
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "loadFromTag"(arg0: $CompoundTag$$Type): void
public "requestModelDataUpdate"(): void
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "type"(): $BlockEntityType<(any)>
get "modelData"(): $ModelData
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CourierLetterTile$$Type = ($CourierLetterTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CourierLetterTile_ = $CourierLetterTile$$Type;
}}
declare module "net.joefoxe.hexerei.tileentity.BookOfShadowsAltarTile" {
import {$PageDrawing, $PageDrawing$$Type} from "net.joefoxe.hexerei.data.books.PageDrawing"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Clearable, $Clearable$$Type} from "net.minecraft.world.Clearable"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LockCode, $LockCode$$Type} from "net.minecraft.world.LockCode"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BookData, $BookData$$Type} from "net.joefoxe.hexerei.item.data_components.BookData"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ItemStackHandler, $ItemStackHandler$$Type} from "net.neoforged.neoforge.items.ItemStackHandler"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RandomizableContainerBlockEntity, $RandomizableContainerBlockEntity$$Type} from "net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $BookOfShadowsAltarTile extends $RandomizableContainerBlockEntity implements $Clearable, $MenuProvider {
 "turnToChapter": integer
 "candlePos3": $BlockPos
 "floppedPercent": float
 "candlePos2": $BlockPos
 "candlePos1": $BlockPos
 "pageOneRotationTo": float
 "tickCount": float
 "buttonScaleOld": float
 "pageTwoRotationSpeed": float
 "fromItem": boolean
 "degreesFloppedSpeed": float
 "drawing": $PageDrawing
 "degreesOpened": float
 "tooltipScaleOld": float
 "degreesSpunTo": float
 "openedPercent": float
 "lockKey": $LockCode
 "bookYaw": float
 "degreesSpunSpeed": float
 "buttonScaleTo": float
 "pageOneRotation": float
 "bookmarkSelectorScale": float
 "slotClicked": integer
 "degreesOpenedRender": float
 "degreesFloppedRender": float
 "degreesOpenedSpeed": float
 "closestPlayerPos": $Vec3
 "slotClickedTick": integer
 "pageOneRotationSpeed": float
 "buttonScaleRender": float
 "tooltipScale": float
 "degreesSpun": float
 "bookYawO": float
 "degreesFlopped": float
 "name": $Component
 "openedPercentOld": float
 "degreesOpenedTo": float
 "bookYawIncrement": float
 "degreesSpunOld": float
 "maxCandles": float
 "buttonScale": float
 "pageTwoRotationTo": float
 "closestDist": double
 "floppedPercentOld": float
 "currentBook": $BookData
 "degreesFloppedTo": float
 "degreesSpunRender": float
 "buttonScaleSpeed": float
 "candlePos2Slot": integer
readonly "itemHandler": $ItemStackHandler
 "turnPage": integer
 "turnToPage": integer
 "numberOfCandles": float
 "candlePos3Slot": integer
readonly "maxDist": double
 "pageTwoRotationLast": float
 "pageOneRotationLast": float
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "pageTwoRotationRender": float
 "candlePos1Slot": integer
 "degreesSpunCandles": float
 "drawTooltip": boolean
 "pageOneRotationRender": float
 "pageTwoRotation": float
 "closestPlayer": $Player

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)
constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "tick"(): void
public "sync"(): void
public "getItem"(arg0: integer): $ItemStack
public "save"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "onLoad"(): void
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "clearContent"(): void
public "tickClient"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setChanged"(): void
public "interact"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type): boolean
public static "getDistance"(arg0: float, arg1: float, arg2: float, arg3: float): double
public "tickBook"(arg0: $ItemStack$$Type): void
public "tickBook"(arg0: $ItemStack$$Type, arg1: boolean): void
public "updateAngle"(arg0: float, arg1: float): float
public static "easeOpened"(arg0: float): float
public "tickCandles"(): void
public "forceTurnPage"(arg0: integer, arg1: integer, arg2: integer): void
public "setTurnPage"(arg0: integer, arg1: integer, arg2: integer): void
public "setTurnPage"(arg0: integer): void
public static "easeFlop"(arg0: float): float
public static "easeButtons"(arg0: float): float
public "swapBookmarks"(arg0: integer, arg1: integer): void
public "deleteBookmark"(arg0: integer): void
public "clickedBack"(arg0: $BookData$$Type, arg1: integer): $BookData
public "clickedNext"(arg0: $BookData$$Type, arg1: integer): $BookData
public "getAngle"(arg0: $Vec3$$Type): float
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "requestModelDataUpdate"(): void
public "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "resetBookRotations"(): void
public "updateIncrement"(arg0: float, arg1: float, arg2: float): float
public "forcePageBookmark"(arg0: integer, arg1: integer): void
public "forceSwapBookmarks"(arg0: integer, arg1: integer): void
public "forceDeleteBookmark"(arg0: integer): void
public "clickPageBookmark"(arg0: integer, arg1: integer): void
public static "getDistanceToEntity"(arg0: $Entity$$Type, arg1: $BlockPos$$Type): double
public static "snapToCardinalDirection"(arg0: float): integer
public static "tryClear"(arg0: any): void
public "getDisplayName"(): $Component
public "getLevel"(): $Level
public "getBlockPos"(): $BlockPos
public static "setBlockEntityLootTable"(arg0: $BlockGetter$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $ResourceKey$$Type<($LootTable)>): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
set "turnPage"(value: integer)
get "containerSize"(): integer
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "displayName"(): $Component
get "level"(): $Level
get "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookOfShadowsAltarTile$$Type = ($BookOfShadowsAltarTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookOfShadowsAltarTile_ = $BookOfShadowsAltarTile$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.CleaningClothItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CleaningClothItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "CLOTH_WAX_OFF": $ItemAbility
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "copyProperties"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "getCleanedState"(arg0: $BlockState$$Type): $BlockState
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CleaningClothItem$$Type = ($CleaningClothItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CleaningClothItem_ = $CleaningClothItem$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.BookParagraph" {
import {$BookParagraphElements, $BookParagraphElements$$Type} from "net.joefoxe.hexerei.data.books.BookParagraphElements"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"

export class $BookParagraph {
static readonly "CODEC": $Codec<($BookParagraph)>
 "passage": StringJS
 "translatablePassage": $MutableComponent
 "paragraphElements": $List<($BookParagraphElements)>
 "align": StringJS


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookParagraph$$Type = ($BookParagraph);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookParagraph_ = $BookParagraph$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.CofferItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$ItemStackHandler, $ItemStackHandler$$Type} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $CofferItem extends $BlockItem {
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
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "createHandler"(): $ItemStackHandler
public "place"(arg0: $BlockPlaceContext$$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public static "getColorStatic"(arg0: $ItemStack$$Type): integer
public static "getColorValue"(arg0: $DyeColor$$Type, arg1: $ItemStack$$Type): integer
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public static "getDyeColorNamed"(arg0: $ItemStack$$Type): $DyeColor
public static "getDyeColorNamed"(arg0: StringJS): integer
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
export type $CofferItem$$Type = ($CofferItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CofferItem_ = $CofferItem$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.BookWritableTextBox$Client$Pos2i" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BookWritableTextBox$Client$Pos2i {
readonly "x": integer
readonly "y": integer


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookWritableTextBox$Client$Pos2i$$Type = ($BookWritableTextBox$Client$Pos2i);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookWritableTextBox$Client$Pos2i_ = $BookWritableTextBox$Client$Pos2i$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.CourierLetter" {
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CourierLetterTile, $CourierLetterTile$$Type} from "net.joefoxe.hexerei.tileentity.CourierLetterTile"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$ITileEntity, $ITileEntity$$Type} from "net.joefoxe.hexerei.block.ITileEntity"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $CourierLetter extends $BaseEntityBlock implements $ITileEntity<($CourierLetterTile)>, $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CourierLetter)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "SEALED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getTileEntityClass"(): $Class<($CourierLetterTile)>
public "sync"(): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CourierLetterTile
public "getTileEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CourierLetterTile)>
public "withTileEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CourierLetterTile)>): void
public "onTileEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CourierLetterTile), ($InteractionResult$$Type)>): $InteractionResult
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "tileEntityClass"(): $Class<($CourierLetterTile)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CourierLetter$$Type = ($CourierLetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CourierLetter_ = $CourierLetter$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.HerbDryingRack" {
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
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$DryingRackTile, $DryingRackTile$$Type} from "net.joefoxe.hexerei.tileentity.DryingRackTile"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ITileEntity, $ITileEntity$$Type} from "net.joefoxe.hexerei.block.ITileEntity"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $HerbDryingRack extends $Block implements $ITileEntity<($DryingRackTile)>, $EntityBlock, $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "SHAPE_TURNED": $VoxelShape
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTileEntityClass"(): $Class<($DryingRackTile)>
public "sync"(): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $DryingRackTile
public "getTileEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($DryingRackTile)>
public "withTileEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($DryingRackTile)>): void
public "onTileEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($DryingRackTile), ($InteractionResult$$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "tileEntityClass"(): $Class<($DryingRackTile)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HerbDryingRack$$Type = ($HerbDryingRack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HerbDryingRack_ = $HerbDryingRack$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.BookWritableTextBox$Client$DisplayCache" {
import {$BookWritableTextBox$Client$Pos2i, $BookWritableTextBox$Client$Pos2i$$Type} from "net.joefoxe.hexerei.data.books.BookWritableTextBox$Client$Pos2i"
import {$Rect2i, $Rect2i$$Type} from "net.minecraft.client.renderer.Rect2i"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$BookWritableTextBox$Client$LineInfo, $BookWritableTextBox$Client$LineInfo$$Type} from "net.joefoxe.hexerei.data.books.BookWritableTextBox$Client$LineInfo"

export class $BookWritableTextBox$Client$DisplayCache {

constructor(arg0: StringJS, arg1: $BookWritableTextBox$Client$Pos2i$$Type, arg2: boolean, arg3: (integer)[], arg4: ($BookWritableTextBox$Client$LineInfo$$Type)[], arg5: ($Rect2i$$Type)[])

public "changeLine"(arg0: integer, arg1: integer): integer
public "findLineStart"(arg0: integer): integer
public "findLineEnd"(arg0: integer): integer
public "getIndexAtPosition"(arg0: $Font$$Type, arg1: $BookWritableTextBox$Client$Pos2i$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookWritableTextBox$Client$DisplayCache$$Type = ($BookWritableTextBox$Client$DisplayCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookWritableTextBox$Client$DisplayCache_ = $BookWritableTextBox$Client$DisplayCache$$Type;
}}
declare module "net.joefoxe.hexerei.fluid.TallowFluid" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $TallowFluid extends $FlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getSource"(): $Fluid
public "isSame"(arg0: $Fluid$$Type): boolean
public "getTickDelay"(arg0: $LevelReader$$Type): integer
public "getFlowing"(): $Fluid
public "getFluidType"(): $FluidType
public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public "animateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type, arg3: $RandomSource$$Type): void
public "getBucket"(): $Item
public "getDropOff"(arg0: $LevelReader$$Type): integer
public "getSlopeFindDistance"(arg0: $LevelReader$$Type): integer
public static "wrap"(arg1: any): $ReplacementMatch
get "source"(): $Fluid
get "flowing"(): $Fluid
get "fluidType"(): $FluidType
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TallowFluid$$Type = ($TallowFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TallowFluid_ = $TallowFluid$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.CauldronEmptyingRecipe$Wrapper" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$RecipeWrapper, $RecipeWrapper$$Type} from "net.neoforged.neoforge.items.wrapper.RecipeWrapper"

export class $CauldronEmptyingRecipe$Wrapper extends $RecipeWrapper {

constructor(arg0: $ItemStack$$Type, arg1: $FluidStack$$Type)

public "getInput"(): $ItemStack
public "getFluid"(): $FluidStack
get "input"(): $ItemStack
get "fluid"(): $FluidStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CauldronEmptyingRecipe$Wrapper$$Type = ($CauldronEmptyingRecipe$Wrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CauldronEmptyingRecipe$Wrapper_ = $CauldronEmptyingRecipe$Wrapper$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.DryingRackRecipe$Serializer" {
import {$DryingRackRecipe, $DryingRackRecipe$$Type} from "net.joefoxe.hexerei.data.recipes.DryingRackRecipe"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $DryingRackRecipe$Serializer implements $RecipeSerializer<($DryingRackRecipe)> {
static readonly "INSTANCE": $DryingRackRecipe$Serializer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($DryingRackRecipe)>

constructor()

public "codec"(): $MapCodec<($DryingRackRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($DryingRackRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DryingRackRecipe$Serializer$$Type = ($DryingRackRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DryingRackRecipe$Serializer_ = $DryingRackRecipe$Serializer$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.ConnectingCarpetSlab$North" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $ConnectingCarpetSlab$North extends $Enum<($ConnectingCarpetSlab$North)> implements $StringRepresentable {
static readonly "ALL": $ConnectingCarpetSlab$North
static readonly "NORTH_AND_NORTH_EAST": $ConnectingCarpetSlab$North
static readonly "JUST_NORTH_WEST": $ConnectingCarpetSlab$North
static readonly "NORTH_AND_NORTH_WEST": $ConnectingCarpetSlab$North
static readonly "NORTH_EAST_AND_NORTH_WEST": $ConnectingCarpetSlab$North
static readonly "JUST_NORTH_EAST": $ConnectingCarpetSlab$North
static readonly "NONE": $ConnectingCarpetSlab$North
static readonly "JUST_NORTH": $ConnectingCarpetSlab$North


public "toString"(): StringJS
public static "values"(): ($ConnectingCarpetSlab$North)[]
public static "valueOf"(arg0: StringJS): $ConnectingCarpetSlab$North
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
export type $ConnectingCarpetSlab$North$$Type = (("north") | ("north_and_north_west") | ("north_and_north_east") | ("north_west") | ("north_east") | ("north_east_and_north_west") | ("all") | ("none"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectingCarpetSlab$North_ = $ConnectingCarpetSlab$North$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.ConnectingCarpetSlab$South" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $ConnectingCarpetSlab$South extends $Enum<($ConnectingCarpetSlab$South)> implements $StringRepresentable {
static readonly "ALL": $ConnectingCarpetSlab$South
static readonly "SOUTH_EAST_AND_SOUTH_WEST": $ConnectingCarpetSlab$South
static readonly "SOUTH_AND_SOUTH_EAST": $ConnectingCarpetSlab$South
static readonly "JUST_SOUTH_WEST": $ConnectingCarpetSlab$South
static readonly "JUST_SOUTH": $ConnectingCarpetSlab$South
static readonly "JUST_SOUTH_EAST": $ConnectingCarpetSlab$South
static readonly "NONE": $ConnectingCarpetSlab$South
static readonly "SOUTH_AND_SOUTH_WEST": $ConnectingCarpetSlab$South


public "toString"(): StringJS
public static "values"(): ($ConnectingCarpetSlab$South)[]
public static "valueOf"(arg0: StringJS): $ConnectingCarpetSlab$South
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
export type $ConnectingCarpetSlab$South$$Type = (("south") | ("south_and_south_west") | ("south_and_south_east") | ("south_west") | ("south_east") | ("south_east_and_south_west") | ("all") | ("none"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectingCarpetSlab$South_ = $ConnectingCarpetSlab$South$$Type;
}}
declare module "net.joefoxe.hexerei.client.renderer.entity.BroomType" {
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BroomType extends $Record {

constructor(name: StringJS, item: $Item$$Type, speedMultiplier: float)

public static "create"(arg0: StringJS, arg1: $Item$$Type, arg2: float): $BroomType
public "item"(): $Item
public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "byId"(arg0: integer): $BroomType
public static "byName"(arg0: StringJS): $BroomType
public static "getValues"(): $Set<($BroomType)>
public "speedMultiplier"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BroomType$$Type = ({"name"?: StringJS, "speedMultiplier"?: float, "item"?: $Item$$Type}) | ([name?: StringJS, speedMultiplier?: float, item?: $Item$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BroomType_ = $BroomType$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.CauldronFillingRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CauldronFillingRecipe, $CauldronFillingRecipe$$Type} from "net.joefoxe.hexerei.data.recipes.CauldronFillingRecipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CauldronFillingRecipe$Serializer implements $RecipeSerializer<($CauldronFillingRecipe)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($CauldronFillingRecipe)>

constructor()

public "codec"(): $MapCodec<($CauldronFillingRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($CauldronFillingRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CauldronFillingRecipe$Serializer$$Type = ($CauldronFillingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CauldronFillingRecipe$Serializer_ = $CauldronFillingRecipe$Serializer$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.ModSign" {
import {$WoodType, $WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$StandingSignBlock, $StandingSignBlock$$Type} from "net.minecraft.world.level.block.StandingSignBlock"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ModSign extends $StandingSignBlock {
static readonly "ROTATION": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($StandingSignBlock)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $WoodType$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModSign$$Type = ($ModSign);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModSign_ = $ModSign$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.WillowWood" {
import {$RotatedPillarBlock, $RotatedPillarBlock$$Type} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WillowWood extends $RotatedPillarBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WillowWood$$Type = ($WillowWood);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WillowWood_ = $WillowWood$$Type;
}}
declare module "net.joefoxe.hexerei.tileentity.ModSignBlockEntity" {
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$SignBlockEntity, $SignBlockEntity$$Type} from "net.minecraft.world.level.block.entity.SignBlockEntity"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ModSignBlockEntity extends $SignBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getType"(): $BlockEntityType<(any)>
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "type"(): $BlockEntityType<(any)>
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModSignBlockEntity$$Type = ($ModSignBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModSignBlockEntity_ = $ModSignBlockEntity$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.FluidMixingRecipe$HeatCondition" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $FluidMixingRecipe$HeatCondition extends $Enum<($FluidMixingRecipe$HeatCondition)> implements $StringRepresentable {
static readonly "CODEC": $StringRepresentable$EnumCodec<($FluidMixingRecipe$HeatCondition)>
static readonly "HEATED": $FluidMixingRecipe$HeatCondition
static readonly "SUPERHEATED": $FluidMixingRecipe$HeatCondition
static readonly "NONE": $FluidMixingRecipe$HeatCondition


public "toString"(): StringJS
public static "values"(): ($FluidMixingRecipe$HeatCondition)[]
public static "valueOf"(arg0: StringJS): $FluidMixingRecipe$HeatCondition
public static "getHeated"(arg0: StringJS): $FluidMixingRecipe$HeatCondition
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
export type $FluidMixingRecipe$HeatCondition$$Type = (("none") | ("heated") | ("superheated"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidMixingRecipe$HeatCondition_ = $FluidMixingRecipe$HeatCondition$$Type;
}}
declare module "net.joefoxe.hexerei.tileentity.CofferTile" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Clearable, $Clearable$$Type} from "net.minecraft.world.Clearable"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LockCode, $LockCode$$Type} from "net.minecraft.world.LockCode"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CofferTile$WhitelistMode, $CofferTile$WhitelistMode$$Type} from "net.joefoxe.hexerei.tileentity.CofferTile$WhitelistMode"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RandomizableContainerBlockEntity, $RandomizableContainerBlockEntity$$Type} from "net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity"
import {$WorldlyContainer, $WorldlyContainer$$Type} from "net.minecraft.world.WorldlyContainer"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $CofferTile extends $RandomizableContainerBlockEntity implements $WorldlyContainer, $Clearable {
static readonly "DEFAULT_COLOR": integer
static readonly "DEFAULT_COLOR_ENTANGLED": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "customName": $Component
 "whitelist": $NonNullList<($ItemStack)>
 "mode": $CofferTile$WhitelistMode
 "degreesOpenedPrev": integer
 "dyeColor": integer
 "cofferId": $UUID
 "degreesOpened": integer
 "name": $Component
 "lockKey": $LockCode
 "buttonToggled": integer
static readonly "lidOpenAmount": integer

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "tick"(): void
public "sync"(): void
public "getDisplayName"(): $Component
public "getItem"(arg0: integer): $ItemStack
public "hasItem"(arg0: $Item$$Type): boolean
public "getName"(): $Component
public "isEmpty"(): boolean
public "getType"(): $BlockEntityType<(any)>
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "startOpen"(arg0: $Player$$Type): void
public "stopOpen"(arg0: $Player$$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "countItem"(arg0: $Item$$Type): integer
public "clearContent"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getCustomName"(): $Component
public "hasCustomName"(): boolean
public "setChanged"(): void
public "getDyeColor"(): integer
public "setDyeColor"(arg0: integer): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "unpackLootTable"(arg0: $Player$$Type): void
public "getSlotsForFace"(arg0: $Direction$$Type): (integer)[]
public "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getMaxStackSize"(): integer
public "hasWhitelistItem"(arg0: $ItemStack$$Type): boolean
public "getOrCreateCofferId"(): $UUID
public static "getDistanceToEntity"(arg0: $Entity$$Type, arg1: $BlockPos$$Type): double
public "getDegreesOpened"(): integer
public "setDegreesOpened"(arg0: integer): void
public "setButtonToggled"(arg0: integer): void
public "setWhitelistSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "getButtonToggled"(): integer
public "isWhitelistEmpty"(): boolean
public "syncCofferInventory"(): void
public "getItemStackInSlot"(arg0: integer): $ItemStack
public "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
public "hasNonMaxStackItemStack"(arg0: $ItemStack$$Type): boolean
public static "tryClear"(arg0: any): void
public "stillValid"(arg0: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "getLevel"(): $Level
public "getBlockPos"(): $BlockPos
public static "setBlockEntityLootTable"(arg0: $BlockGetter$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $ResourceKey$$Type<($LootTable)>): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "displayName"(): $Component
get "name"(): $Component
get "empty"(): boolean
get "type"(): $BlockEntityType<(any)>
get "customName"(): $Component
get "dyeColor"(): integer
set "dyeColor"(value: integer)
get "containerSize"(): integer
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "maxStackSize"(): integer
get "orCreateCofferId"(): $UUID
get "degreesOpened"(): integer
set "degreesOpened"(value: integer)
set "buttonToggled"(value: integer)
get "buttonToggled"(): integer
get "whitelistEmpty"(): boolean
get "level"(): $Level
get "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CofferTile$$Type = ($CofferTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CofferTile_ = $CofferTile$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.BookItemsAndFluids" {
import {$BookTooltipExtra, $BookTooltipExtra$$Type} from "net.joefoxe.hexerei.data.books.BookTooltipExtra"
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$List, $List$$Type} from "java.util.List"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $BookItemsAndFluids {
 "item": $ItemStack
 "amount": integer
static readonly "ITEM_CODEC": $Codec<($BookItemsAndFluids)>
static readonly "CODEC": $Codec<($BookItemsAndFluids)>
 "fluid_offset_x": float
 "fluid_offset_y": float
 "type": StringJS
 "show_slot": boolean
 "refreshTag": boolean
 "capacity": integer
 "extra_tooltips": $List<($Component)>
 "fluid_width": float
 "x": float
 "y": float
 "fluid": $FluidStack
 "tag": StringJS
 "modelCache": $BakedModel
static readonly "TAG_CODEC": $Codec<($BookItemsAndFluids)>
 "key": $TagKey<($Item)>
 "fluid_height": float
static readonly "FLUID_CODEC": $Codec<($BookItemsAndFluids)>

constructor(arg0: StringJS, arg1: float, arg2: float, arg3: StringJS, arg4: boolean, arg5: $List$$Type<($BookTooltipExtra$$Type)>)
constructor(arg0: StringJS, arg1: float, arg2: float, arg3: $ItemStack$$Type, arg4: boolean, arg5: $List$$Type<($BookTooltipExtra$$Type)>)
constructor(arg0: StringJS, arg1: float, arg2: float, arg3: $FluidStack$$Type, arg4: integer, arg5: float, arg6: float, arg7: float, arg8: float, arg9: boolean, arg10: $List$$Type<($BookTooltipExtra$$Type)>)

public static "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: T): $DataResult<($Pair<($BookItemsAndFluids), (T)>)>
public static "encode"<T>(arg0: $BookItemsAndFluids$$Type, arg1: $DynamicOps$$Type<(T)>, arg2: T): $DataResult<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookItemsAndFluids$$Type = ($BookItemsAndFluids);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookItemsAndFluids_ = $BookItemsAndFluids$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.WoodcutterRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$WoodcutterRecipe, $WoodcutterRecipe$$Type} from "net.joefoxe.hexerei.data.recipes.WoodcutterRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $WoodcutterRecipe$Serializer implements $RecipeSerializer<($WoodcutterRecipe)> {
static readonly "INSTANCE": $WoodcutterRecipe$Serializer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($WoodcutterRecipe)>

constructor()

public "codec"(): $MapCodec<($WoodcutterRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($WoodcutterRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodcutterRecipe$Serializer$$Type = ($WoodcutterRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodcutterRecipe$Serializer_ = $WoodcutterRecipe$Serializer$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.PaintSystem$Action" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PaintSystem$Action {

 "redo"(): void
 "undo"(): void
}

export namespace $PaintSystem$Action {
const probejs$$marker: never
}
export class $PaintSystem$Action$$Static implements $PaintSystem$Action {


 "redo"(): void
 "undo"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintSystem$Action$$Type = ($PaintSystem$Action);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintSystem$Action_ = $PaintSystem$Action$$Type;
}}
declare module "net.joefoxe.hexerei.tileentity.OwlCourierDepotTile" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Clearable, $Clearable$$Type} from "net.minecraft.world.Clearable"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LockCode, $LockCode$$Type} from "net.minecraft.world.LockCode"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RandomizableContainerBlockEntity, $RandomizableContainerBlockEntity$$Type} from "net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $OwlCourierDepotTile extends $RandomizableContainerBlockEntity implements $Clearable, $MenuProvider {
 "name": $Component
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "lockKey": $LockCode

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "tick"(): void
public "sync"(): void
public "getItem"(arg0: integer): $ItemStack
public "save"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "clearContent"(): void
public "setChanged"(): void
public "interact"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): $ItemInteractionResult
public "getAngle"(arg0: $Vec3$$Type): float
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public static "tryClear"(arg0: any): void
public "getDisplayName"(): $Component
public "getLevel"(): $Level
public "getBlockPos"(): $BlockPos
public static "setBlockEntityLootTable"(arg0: $BlockGetter$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $ResourceKey$$Type<($LootTable)>): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "containerSize"(): integer
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "displayName"(): $Component
get "level"(): $Level
get "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwlCourierDepotTile$$Type = ($OwlCourierDepotTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwlCourierDepotTile_ = $OwlCourierDepotTile$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.BookWritableTextBox" {
import {$BookParagraphElements, $BookParagraphElements$$Type} from "net.joefoxe.hexerei.data.books.BookParagraphElements"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$BookWritableTextBox$Client, $BookWritableTextBox$Client$$Type} from "net.joefoxe.hexerei.data.books.BookWritableTextBox$Client"

export class $BookWritableTextBox {
 "parentLocation": $ResourceLocation
static readonly "CODEC": $Codec<($BookWritableTextBox)>
 "paragraphElement": $BookParagraphElements
 "index": integer
 "client": $BookWritableTextBox$Client
 "align": StringJS


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookWritableTextBox$$Type = ($BookWritableTextBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookWritableTextBox_ = $BookWritableTextBox$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.WitchHazelLog" {
import {$RotatedPillarBlock, $RotatedPillarBlock$$Type} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WitchHazelLog extends $RotatedPillarBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WitchHazelLog$$Type = ($WitchHazelLog);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WitchHazelLog_ = $WitchHazelLog$$Type;
}}
declare module "net.joefoxe.hexerei.block.connected.WaxedGlassPaneBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Waxed, $Waxed$$Type} from "net.joefoxe.hexerei.block.connected.Waxed"
import {$IronBarsBlock, $IronBarsBlock$$Type} from "net.minecraft.world.level.block.IronBarsBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WaxedGlassPaneBlock extends $IronBarsBlock implements $Waxed {
 "shapeByIndex": ($VoxelShape)[]
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($IronBarsBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "collisionShapeByIndex": ($VoxelShape)[]
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "skipRendering"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $Direction$$Type): boolean
public "getUnWaxed"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type): $BlockState
public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaxedGlassPaneBlock$$Type = ($WaxedGlassPaneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaxedGlassPaneBlock_ = $WaxedGlassPaneBlock$$Type;
}}
declare module "net.joefoxe.hexerei.data.candle.AbstractCandleEffect" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CandleTile, $CandleTile$$Type} from "net.joefoxe.hexerei.tileentity.CandleTile"
import {$CandleData, $CandleData$$Type} from "net.joefoxe.hexerei.data.candle.CandleData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$CandleEffect, $CandleEffect$$Type} from "net.joefoxe.hexerei.data.candle.CandleEffect"

export class $AbstractCandleEffect implements $CandleEffect {
 "particleLocation": $List<($ResourceLocation)>
 "particle": $ParticleOptions
 "checkCooldown": integer

constructor(arg0: $ParticleOptions$$Type)
constructor()

public "tick"(arg0: $Level$$Type, arg1: $CandleTile$$Type, arg2: $CandleData$$Type): void
public "isEmpty"(): boolean
public "getParticleType"(): $ParticleOptions
public "getCopy"<T>(): $AbstractCandleEffect
public "getRandomPos"(): $BlockPos
public "getLocationName"(): StringJS
get "empty"(): boolean
get "particleType"(): $ParticleOptions
get "copy"(): $AbstractCandleEffect
get "randomPos"(): $BlockPos
get "locationName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCandleEffect$$Type = ($AbstractCandleEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCandleEffect_ = $AbstractCandleEffect$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.WitchArmorItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ArmorMaterial$Layer, $ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ArmorItem, $ArmorItem$$Type} from "net.minecraft.world.item.ArmorItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"

export class $WitchArmorItem extends $ArmorItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Holder$$Type<($ArmorMaterial)>, arg1: $ArmorItem$Type$$Type, arg2: $Item$Properties$$Type)

public "getColor"(arg0: $ItemStack$$Type): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getArmorTexture"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $EquipmentSlot$$Type, arg3: $ArmorMaterial$Layer$$Type, arg4: boolean): $ResourceLocation
public "getEquipmentSlot"(arg0: $ItemStack$$Type): $EquipmentSlot
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WitchArmorItem$$Type = ($WitchArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WitchArmorItem_ = $WitchArmorItem$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.ModHangingWallSign" {
import {$WoodType, $WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$WallHangingSignBlock, $WallHangingSignBlock$$Type} from "net.minecraft.world.level.block.WallHangingSignBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ModHangingWallSign extends $WallHangingSignBlock {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "PLANK_NORTHSOUTH": $VoxelShape
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WallHangingSignBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "SHAPE_NORTHSOUTH": $VoxelShape
static readonly "PLANK_EASTWEST": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "SHAPE_EASTWEST": $VoxelShape
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $WoodType$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModHangingWallSign$$Type = ($ModHangingWallSign);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModHangingWallSign_ = $ModHangingWallSign$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.SeedMixtureItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$FoodProperties, $FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SeedMixtureItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static "FOOD": $FoodProperties
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SeedMixtureItem$$Type = ($SeedMixtureItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SeedMixtureItem_ = $SeedMixtureItem$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.CrowFluteRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CrowFluteRecipe, $CrowFluteRecipe$$Type} from "net.joefoxe.hexerei.data.recipes.CrowFluteRecipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CrowFluteRecipe$Serializer implements $RecipeSerializer<($CrowFluteRecipe)> {
static readonly "CODEC": $MapCodec<($CrowFluteRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($CrowFluteRecipe)>

constructor()

public "codec"(): $MapCodec<($CrowFluteRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($CrowFluteRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrowFluteRecipe$Serializer$$Type = ($CrowFluteRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrowFluteRecipe$Serializer_ = $CrowFluteRecipe$Serializer$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.ModWallSign" {
import {$WoodType, $WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$WallSignBlock, $WallSignBlock$$Type} from "net.minecraft.world.level.block.WallSignBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ModSignBlockEntity, $ModSignBlockEntity$$Type} from "net.joefoxe.hexerei.tileentity.ModSignBlockEntity"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ModWallSign extends $WallSignBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WallSignBlock)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<($BlockEntityType$$Type<($ModSignBlockEntity$$Type)>)>, arg2: $WoodType$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModWallSign$$Type = ($ModWallSign);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModWallSign_ = $ModWallSign$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.PaintSystem$Tool" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $PaintSystem$Tool extends $Enum<($PaintSystem$Tool)> {
static readonly "BRUSH": $PaintSystem$Tool
static readonly "FILL": $PaintSystem$Tool
static readonly "MOVE": $PaintSystem$Tool
static readonly "EYEDROPPER": $PaintSystem$Tool
static readonly "MAGIC_WAND": $PaintSystem$Tool
static readonly "ERASER": $PaintSystem$Tool
static readonly "SELECTION": $PaintSystem$Tool


public "getName"(): StringJS
public static "values"(): ($PaintSystem$Tool)[]
public static "valueOf"(arg0: StringJS): $PaintSystem$Tool
public "shouldShowBrushSliders"(): boolean
public "shouldShowColorSliders"(): boolean
public "shouldShowToleranceSliders"(): boolean
public "shouldSelectionShowMask"(): boolean
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintSystem$Tool$$Type = (("brush") | ("eraser") | ("selection") | ("move") | ("fill") | ("eyedropper") | ("magic_wand"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintSystem$Tool_ = $PaintSystem$Tool$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.FloweringLilyPadBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$WaterlilyBlock, $WaterlilyBlock$$Type} from "net.minecraft.world.level.block.WaterlilyBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FloweringLilyPadBlock extends $WaterlilyBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WaterlilyBlock)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloweringLilyPadBlock$$Type = ($FloweringLilyPadBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloweringLilyPadBlock_ = $FloweringLilyPadBlock$$Type;
}}
declare module "net.joefoxe.hexerei.tileentity.CrystalBallTile" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CrystalBallTile extends $BlockEntity {
 "orbOffset": float
 "nearestPlayer": $Player
 "degreesSpunOld": float
 "centerPitchIncrement": float
 "moonAlpha": float
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "centerYaw": float
 "centerYawO": float
 "lastLocatedNearestPlayer": long
 "degreesSpun": float
 "centerPitchO": float
 "centerPitch": float
 "lastInteractedWith": long
 "centerYawIncrement": float

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "tick"(): void
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public "updateAngle"(arg0: float, arg1: float): float
public "updateIncrement"(arg0: float, arg1: float, arg2: float): float
public static "getDistanceToEntity"(arg0: $Entity$$Type, arg1: $BlockPos$$Type): double
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrystalBallTile$$Type = ($CrystalBallTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrystalBallTile_ = $CrystalBallTile$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.DryingRackRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $DryingRackRecipe implements $Recipe<($CraftingInput)> {

constructor(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type, arg2: integer)

public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getOutput"(): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getDryingTime"(): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "getToastSymbol"(): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getGroup"(): StringJS
public "isIncomplete"(): boolean
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
get "type"(): $RecipeType<(any)>
get "output"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "special"(): boolean
get "dryingTime"(): integer
get "serializer"(): $RecipeSerializer<(any)>
get "toastSymbol"(): $ItemStack
get "group"(): StringJS
get "incomplete"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DryingRackRecipe$$Type = ($DryingRackRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DryingRackRecipe_ = $DryingRackRecipe$$Type;
}}
declare module "net.joefoxe.hexerei.client.renderer.entity.custom.ModChestBoatEntity$Type" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"

export class $ModChestBoatEntity$Type extends $Enum<($ModChestBoatEntity$Type)> {
static readonly "POLISHED_MAHOGANY": $ModChestBoatEntity$Type
static readonly "WILLOW": $ModChestBoatEntity$Type
static readonly "MAHOGANY": $ModChestBoatEntity$Type
static readonly "POLISHED_WILLOW": $ModChestBoatEntity$Type


public "getName"(): StringJS
public "toString"(): StringJS
public static "values"(): ($ModChestBoatEntity$Type)[]
public static "valueOf"(arg0: StringJS): $ModChestBoatEntity$Type
public static "byId"(arg0: integer): $ModChestBoatEntity$Type
public static "byName"(arg0: StringJS): $ModChestBoatEntity$Type
public "getPlanks"(): $Block
get "name"(): StringJS
get "planks"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModChestBoatEntity$Type$$Type = (("willow") | ("polished_willow") | ("mahogany") | ("polished_mahogany"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModChestBoatEntity$Type_ = $ModChestBoatEntity$Type$$Type;
}}
declare module "net.joefoxe.hexerei.world.structure.structures.NatureCovenStructure" {
import {$WorldGenLevel, $WorldGenLevel$$Type} from "net.minecraft.world.level.WorldGenLevel"
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$BoundingBox, $BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$StructureManager, $StructureManager$$Type} from "net.minecraft.world.level.StructureManager"
import {$StructureType, $StructureType$$Type} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Structure$GenerationStub, $Structure$GenerationStub$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ChunkGenerator, $ChunkGenerator$$Type} from "net.minecraft.world.level.chunk.ChunkGenerator"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PiecesContainer, $PiecesContainer$$Type} from "net.minecraft.world.level.levelgen.structure.pieces.PiecesContainer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"
import {$Structure$StructureSettings, $Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $NatureCovenStructure extends $Structure {
static readonly "CODEC": $MapCodec<($NatureCovenStructure)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>

constructor(arg0: $Structure$StructureSettings$$Type, arg1: $Holder$$Type<($StructureTemplatePool)>, arg2: $Optional$$Type<($ResourceLocation$$Type)>, arg3: integer, arg4: $HeightProvider$$Type, arg5: $Optional$$Type<($Heightmap$Types$$Type)>, arg6: integer)

public "type"(): $StructureType<(any)>
public "afterPlace"(arg0: $WorldGenLevel$$Type, arg1: $StructureManager$$Type, arg2: $ChunkGenerator$$Type, arg3: $RandomSource$$Type, arg4: $BoundingBox$$Type, arg5: $ChunkPos$$Type, arg6: $PiecesContainer$$Type): void
public static "addPieces"(arg0: $Structure$GenerationContext$$Type, arg1: $Holder$$Type<($StructureTemplatePool)>, arg2: $Optional$$Type<($ResourceLocation$$Type)>, arg3: integer, arg4: $BlockPos$$Type, arg5: boolean, arg6: $Optional$$Type<($Heightmap$Types$$Type)>, arg7: integer): $Optional<($Structure$GenerationStub)>
public "findGenerationPoint"(arg0: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NatureCovenStructure$$Type = ($NatureCovenStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NatureCovenStructure_ = $NatureCovenStructure$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.CrowFluteItem" {
import {$HumanoidArm, $HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$IFirstPersonItemAnimation, $IFirstPersonItemAnimation$$Type} from "net.joefoxe.hexerei.client.renderer.IFirstPersonItemAnimation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AgeableListModel, $AgeableListModel$$Type} from "net.minecraft.client.model.AgeableListModel"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TwoHandedItemAnimation, $TwoHandedItemAnimation$$Type} from "net.joefoxe.hexerei.client.renderer.TwoHandedItemAnimation"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ArmedModel, $ArmedModel$$Type} from "net.minecraft.client.model.ArmedModel"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$EntityModel, $EntityModel$$Type} from "net.minecraft.client.model.EntityModel"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$HeadedModel, $HeadedModel$$Type} from "net.minecraft.client.model.HeadedModel"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$HumanoidModel, $HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$IThirdPersonItemAnimation, $IThirdPersonItemAnimation$$Type} from "net.joefoxe.hexerei.client.renderer.IThirdPersonItemAnimation"
import {$IThirdPersonItemRenderer, $IThirdPersonItemRenderer$$Type} from "net.joefoxe.hexerei.client.renderer.IThirdPersonItemRenderer"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $CrowFluteItem extends $Item implements $IThirdPersonItemAnimation, $IThirdPersonItemRenderer, $IFirstPersonItemAnimation {
 "helpCommandSelected": integer
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "commandSelected": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public static "getMaxHeadXRot"(arg0: float): float
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "isTwoHanded"(): boolean
public static "setHelpCommand"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): void
public static "setCommandMode"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): void
public static "clearCrowList"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): void
public static "clearCrowPerch"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): void
public static "withColors"(arg0: integer, arg1: integer): $ItemStack
public static "getColor1"(arg0: $ItemStack$$Type): $DyeColor
public static "getColor2"(arg0: $ItemStack$$Type): $DyeColor
public static "wrapRad"(arg0: float): float
public "poseRightArm"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $HumanoidModel$$Type<(T)>, arg2: T, arg3: $HumanoidArm$$Type, arg4: $TwoHandedItemAnimation$$Type): boolean
public "poseLeftArm"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $HumanoidModel$$Type<(T)>, arg2: T, arg3: $HumanoidArm$$Type, arg4: $TwoHandedItemAnimation$$Type): boolean
public static "setCommand"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type): void
public "renderThirdPersonItem"<T extends $Player, M extends ($EntityModel<(T)>) & ($ArmedModel) & ($HeadedModel)>(arg0: M, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type, arg3: $HumanoidArm$$Type, arg4: $PoseStack$$Type, arg5: $MultiBufferSource$$Type, arg6: integer): void
public "animateItemFirstPerson"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type, arg3: $PoseStack$$Type, arg4: float, arg5: float, arg6: float, arg7: float): void
public "poseRightArmMixin"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $AgeableListModel$$Type<(T)>, arg2: T, arg3: $HumanoidArm$$Type, arg4: $TwoHandedItemAnimation$$Type): boolean
public "poseleftArmMixin"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $AgeableListModel$$Type<(T)>, arg2: T, arg3: $HumanoidArm$$Type, arg4: $TwoHandedItemAnimation$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "twoHanded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrowFluteItem$$Type = ($CrowFluteItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrowFluteItem_ = $CrowFluteItem$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.WhistleItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $WhistleItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WhistleItem$$Type = ($WhistleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WhistleItem_ = $WhistleItem$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.BookWritableTextBox$Client" {
import {$BookWritableTextBox$Client$Pos2i, $BookWritableTextBox$Client$Pos2i$$Type} from "net.joefoxe.hexerei.data.books.BookWritableTextBox$Client$Pos2i"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$BookWritableTextBox, $BookWritableTextBox$$Type} from "net.joefoxe.hexerei.data.books.BookWritableTextBox"
import {$BookData, $BookData$$Type} from "net.joefoxe.hexerei.item.data_components.BookData"
import {$BookWritableTextBox$Client$DisplayCache, $BookWritableTextBox$Client$DisplayCache$$Type} from "net.joefoxe.hexerei.data.books.BookWritableTextBox$Client$DisplayCache"
import {$TextFieldHelper, $TextFieldHelper$$Type} from "net.minecraft.client.gui.font.TextFieldHelper"

export class $BookWritableTextBox$Client {
 "clickedPos": $BookWritableTextBox$Client$Pos2i
 "lastClickTime": long
readonly "pageEdit": $TextFieldHelper
 "lastIndex": integer
 "clicked": boolean

constructor(arg0: $BookWritableTextBox$$Type)

public "keyUp"(): void
public "redo"(): void
public "undo"(): void
public "keyPressed"(arg0: integer): boolean
public "keyEnd"(): void
public "keyHome"(): void
public "changeLine"(arg0: integer): void
public "selectWord"(arg0: integer, arg1: $BookData$$Type): void
public "keyDown"(): void
public "clearDisplayCache"(arg0: $UUID$$Type): void
public "getCursorPosOf"(arg0: integer, arg1: $BookData$$Type): $BookWritableTextBox$Client$Pos2i
public "getDisplayCache"(arg0: $BookData$$Type): $BookWritableTextBox$Client$DisplayCache
public "convertLocalToScreen"(arg0: $BookWritableTextBox$Client$Pos2i$$Type, arg1: integer): $BookWritableTextBox$Client$Pos2i
public "convertScreenToLocal"(arg0: $BookWritableTextBox$Client$Pos2i$$Type, arg1: integer): $BookWritableTextBox$Client$Pos2i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookWritableTextBox$Client$$Type = ($BookWritableTextBox$Client);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookWritableTextBox$Client_ = $BookWritableTextBox$Client$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.CourierPackage" {
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$LootParams$Builder, $LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
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
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$CourierPackage$State, $CourierPackage$State$$Type} from "net.joefoxe.hexerei.block.custom.CourierPackage$State"
import {$ITileEntity, $ITileEntity$$Type} from "net.joefoxe.hexerei.block.ITileEntity"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$CourierPackageTile, $CourierPackageTile$$Type} from "net.joefoxe.hexerei.tileentity.CourierPackageTile"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $CourierPackage extends $BaseEntityBlock implements $ITileEntity<($CourierPackageTile)>, $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CourierPackage)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "STATE": $EnumProperty<($CourierPackage$State)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getTileEntityClass"(): $Class<($CourierPackageTile)>
public "sync"(): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CourierPackageTile
public "getTileEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CourierPackageTile)>
public "withTileEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CourierPackageTile)>): void
public "onTileEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CourierPackageTile), ($InteractionResult$$Type)>): $InteractionResult
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "tileEntityClass"(): $Class<($CourierPackageTile)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CourierPackage$$Type = ($CourierPackage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CourierPackage_ = $CourierPackage$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.ConnectingCarpetStairs$South" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $ConnectingCarpetStairs$South extends $Enum<($ConnectingCarpetStairs$South)> implements $StringRepresentable {
static readonly "ALL": $ConnectingCarpetStairs$South
static readonly "SOUTH_EAST_AND_SOUTH_WEST": $ConnectingCarpetStairs$South
static readonly "SOUTH_AND_SOUTH_EAST": $ConnectingCarpetStairs$South
static readonly "JUST_SOUTH_WEST": $ConnectingCarpetStairs$South
static readonly "JUST_SOUTH": $ConnectingCarpetStairs$South
static readonly "JUST_SOUTH_EAST": $ConnectingCarpetStairs$South
static readonly "NONE": $ConnectingCarpetStairs$South
static readonly "SOUTH_AND_SOUTH_WEST": $ConnectingCarpetStairs$South


public "toString"(): StringJS
public static "values"(): ($ConnectingCarpetStairs$South)[]
public static "valueOf"(arg0: StringJS): $ConnectingCarpetStairs$South
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
export type $ConnectingCarpetStairs$South$$Type = (("south") | ("south_and_south_west") | ("south_and_south_east") | ("south_west") | ("south_east") | ("south_east_and_south_west") | ("all") | ("none"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectingCarpetStairs$South_ = $ConnectingCarpetStairs$South$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.BookHoverOffset" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"

export class $BookHoverOffset {
static readonly "CODEC": $Codec<($BookHoverOffset)>
 "x": float
 "y": float
 "scale": float


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookHoverOffset$$Type = ($BookHoverOffset);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookHoverOffset_ = $BookHoverOffset$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.Coffer" {
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$CofferTile, $CofferTile$$Type} from "net.joefoxe.hexerei.tileentity.CofferTile"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ItemStackHandler, $ItemStackHandler$$Type} from "net.neoforged.neoforge.items.ItemStackHandler"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ITileEntity, $ITileEntity$$Type} from "net.joefoxe.hexerei.block.ITileEntity"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $Coffer extends $BaseEntityBlock implements $ITileEntity<($CofferTile)>, $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Coffer)>
static readonly "SHAPE_TURNED": $VoxelShape
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "isEmpty"(arg0: $ItemStackHandler$$Type): boolean
public "attack"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public static "getColorStatic"(arg0: $ItemStack$$Type): integer
public static "getColorValue"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BlockGetter$$Type): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getTileEntityClass"(): $Class<($CofferTile)>
public static "getDyeColorNamed"(arg0: StringJS): $DyeColor
public "sync"(): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CofferTile
public "getTileEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CofferTile)>
public "withTileEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CofferTile)>): void
public "onTileEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CofferTile), ($InteractionResult$$Type)>): $InteractionResult
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "tileEntityClass"(): $Class<($CofferTile)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Coffer$$Type = ($Coffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Coffer_ = $Coffer$$Type;
}}
declare module "net.joefoxe.hexerei.data.candle.CandleLayer" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export class $CandleLayer {
 "layerFromBlockLocation": boolean
 "effectCooldownMultiplier": float
 "effectAmplifierMultiplier": float
 "meltingSpeedMultiplier": float
 "radiusMultiplier": float
 "effectDurationMultiplier": float
 "layer": $ResourceLocation

constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: $ResourceLocation$$Type, arg6: boolean)
constructor()

public "load"(arg0: $CompoundTag$$Type): void
public "save"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CandleLayer$$Type = ($CandleLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CandleLayer_ = $CandleLayer$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.ConnectingCarpetStairs$North" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $ConnectingCarpetStairs$North extends $Enum<($ConnectingCarpetStairs$North)> implements $StringRepresentable {
static readonly "ALL": $ConnectingCarpetStairs$North
static readonly "NORTH_AND_NORTH_EAST": $ConnectingCarpetStairs$North
static readonly "JUST_NORTH_WEST": $ConnectingCarpetStairs$North
static readonly "NORTH_AND_NORTH_WEST": $ConnectingCarpetStairs$North
static readonly "NORTH_EAST_AND_NORTH_WEST": $ConnectingCarpetStairs$North
static readonly "JUST_NORTH_EAST": $ConnectingCarpetStairs$North
static readonly "NONE": $ConnectingCarpetStairs$North
static readonly "JUST_NORTH": $ConnectingCarpetStairs$North


public "toString"(): StringJS
public static "values"(): ($ConnectingCarpetStairs$North)[]
public static "valueOf"(arg0: StringJS): $ConnectingCarpetStairs$North
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
export type $ConnectingCarpetStairs$North$$Type = (("north") | ("north_and_north_west") | ("north_and_north_east") | ("north_west") | ("north_east") | ("north_east_and_north_west") | ("all") | ("none"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectingCarpetStairs$North_ = $ConnectingCarpetStairs$North$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.HexereiBookItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $HexereiBookItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public static "withColors"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer): $ItemStack
public static "getColor1"(arg0: $ItemStack$$Type): integer
public static "getColor2"(arg0: $ItemStack$$Type): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onCraftedPostProcess"(arg0: $ItemStack$$Type, arg1: $Level$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HexereiBookItem$$Type = ($HexereiBookItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HexereiBookItem_ = $HexereiBookItem$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.PageDrawing$DrawingType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $PageDrawing$DrawingType extends $Enum<($PageDrawing$DrawingType)> {
static readonly "SCREEN": $PageDrawing$DrawingType
static readonly "BOOK": $PageDrawing$DrawingType
static readonly "GUI": $PageDrawing$DrawingType


public static "values"(): ($PageDrawing$DrawingType)[]
public static "valueOf"(arg0: StringJS): $PageDrawing$DrawingType
public static "byId"(arg0: integer): $PageDrawing$DrawingType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PageDrawing$DrawingType$$Type = (("book") | ("screen") | ("gui"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PageDrawing$DrawingType_ = $PageDrawing$DrawingType$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.DipperRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$DipperRecipe, $DipperRecipe$$Type} from "net.joefoxe.hexerei.data.recipes.DipperRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $DipperRecipe$Serializer implements $RecipeSerializer<($DipperRecipe)> {
static readonly "INSTANCE": $DipperRecipe$Serializer
static readonly "ID": $ResourceLocation
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($DipperRecipe)>

constructor()

public "codec"(): $MapCodec<($DipperRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($DipperRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DipperRecipe$Serializer$$Type = ($DipperRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DipperRecipe$Serializer_ = $DipperRecipe$Serializer$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.FluidMixingRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$FluidMixingRecipe, $FluidMixingRecipe$$Type} from "net.joefoxe.hexerei.data.recipes.FluidMixingRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $FluidMixingRecipe$Serializer implements $RecipeSerializer<($FluidMixingRecipe)> {
static readonly "INSTANCE": $FluidMixingRecipe$Serializer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FluidMixingRecipe)>

constructor()

public "codec"(): $MapCodec<($FluidMixingRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($FluidMixingRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidMixingRecipe$Serializer$$Type = ($FluidMixingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidMixingRecipe$Serializer_ = $FluidMixingRecipe$Serializer$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.Woodcutter" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $Woodcutter extends $Block {
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
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $PathComputationType$$Type): boolean
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getMenuProvider"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $MenuProvider
public "useShapeForLightOcclusion"(arg0: $BlockState$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Woodcutter$$Type = ($Woodcutter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Woodcutter_ = $Woodcutter$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.BookPaintElement" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$BookPaintElement$Client, $BookPaintElement$Client$$Type} from "net.joefoxe.hexerei.data.books.BookPaintElement$Client"

export class $BookPaintElement {
 "parentLocation": $ResourceLocation
static readonly "CODEC": $Codec<($BookPaintElement)>
 "x": float
 "width": float
 "y": float
 "scale": float
 "index": integer
 "client": $BookPaintElement$Client
 "z": float
 "height": float


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookPaintElement$$Type = ($BookPaintElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookPaintElement_ = $BookPaintElement$$Type;
}}
declare module "net.joefoxe.hexerei.world.structure.structures.BabaYagaHutStructure" {
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$StructureType, $StructureType$$Type} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Structure$GenerationStub, $Structure$GenerationStub$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"
import {$Structure$StructureSettings, $Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $BabaYagaHutStructure extends $Structure {
static readonly "CODEC": $MapCodec<($BabaYagaHutStructure)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>

constructor(arg0: $Structure$StructureSettings$$Type, arg1: $Holder$$Type<($StructureTemplatePool)>, arg2: $Optional$$Type<($ResourceLocation$$Type)>, arg3: integer, arg4: $HeightProvider$$Type, arg5: $Optional$$Type<($Heightmap$Types$$Type)>, arg6: integer)

public "type"(): $StructureType<(any)>
public "findGenerationPoint"(arg0: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BabaYagaHutStructure$$Type = ($BabaYagaHutStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BabaYagaHutStructure_ = $BabaYagaHutStructure$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.ModChestItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $ModChestItem extends $BlockItem {
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
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

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
export type $ModChestItem$$Type = ($ModChestItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModChestItem_ = $ModChestItem$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.PaintSystem$Button" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$PaintSystem, $PaintSystem$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem"
import {$List, $List$$Type} from "java.util.List"
import {$PageDrawing$PageOn, $PageDrawing$PageOn$$Type} from "net.joefoxe.hexerei.data.books.PageDrawing$PageOn"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $PaintSystem$Button {
 "visibilityOld": float
 "onTick": $Consumer<($PaintSystem)>
 "visible": $Function<($PaintSystem), (boolean)>
 "visibility": float
 "rx": $BiFunction<($PaintSystem), (float), (float)>
 "texture": StringJS
 "ry": $BiFunction<($PaintSystem), (float), (float)>
 "tooltip": $Component
 "scale": $Function<(float), (float)>
 "lx": $BiFunction<($PaintSystem), (float), (float)>
 "ly": $BiFunction<($PaintSystem), (float), (float)>
 "clicked": boolean
 "disabledTexture": StringJS
 "hoverTexture": StringJS
 "width": float
 "disabled": $Function<($PaintSystem), (boolean)>
 "selected": $Function<($PaintSystem), (boolean)>
 "height": float
 "clickedScale": float


public "tick"(arg0: $PaintSystem$$Type): void
public "getY"(arg0: $PaintSystem$$Type, arg1: $PageDrawing$PageOn$$Type, arg2: float): float
public "getX"(arg0: $PaintSystem$$Type, arg1: $PageDrawing$PageOn$$Type, arg2: float): float
public "shouldRender"(arg0: $PaintSystem$$Type): boolean
public "getVisibility"(arg0: float): float
public "getTooltip"(): $Component
public "isVisible"(arg0: $PaintSystem$$Type): boolean
public "getScale"(arg0: float): float
public "getTexture"(arg0: $PaintSystem$$Type): StringJS
public "getDisabled"(arg0: $PaintSystem$$Type): boolean
public "onClick"(arg0: $PaintSystem$$Type): void
public "getTooltipList"(): $List<($Component)>
public "getDisabledTexture"(arg0: $PaintSystem$$Type): StringJS
public "getHoverTexture"(arg0: $PaintSystem$$Type): StringJS
public "getOnClick"(arg0: $PaintSystem$$Type): $Consumer<($PaintSystem)>
get "tooltip"(): $Component
get "tooltipList"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintSystem$Button$$Type = ($PaintSystem$Button);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintSystem$Button_ = $PaintSystem$Button$$Type;
}}
declare module "net.joefoxe.hexerei.fluid.BloodFluid$Source" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BloodFluid, $BloodFluid$$Type} from "net.joefoxe.hexerei.fluid.BloodFluid"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $BloodFluid$Source extends $BloodFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor()

public "getAmount"(arg0: $FluidState$$Type): integer
public "isSource"(arg0: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloodFluid$Source$$Type = ($BloodFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BloodFluid$Source_ = $BloodFluid$Source$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.ModHangingSign" {
import {$WoodType, $WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$CeilingHangingSignBlock, $CeilingHangingSignBlock$$Type} from "net.minecraft.world.level.block.CeilingHangingSignBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ModHangingSign extends $CeilingHangingSignBlock {
static readonly "ROTATION": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CeilingHangingSignBlock)>
static readonly "ATTACHED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $WoodType$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModHangingSign$$Type = ($ModHangingSign);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModHangingSign_ = $ModHangingSign$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.bottles.BottleTallowItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$FoodProperties, $FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$HexBottleItem, $HexBottleItem$$Type} from "net.joefoxe.hexerei.item.custom.bottles.HexBottleItem"

export class $BottleTallowItem extends $HexBottleItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static "FOOD": $FoodProperties
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getTooltip"(): $Component
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "tooltip"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BottleTallowItem$$Type = ($BottleTallowItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BottleTallowItem_ = $BottleTallowItem$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.bottles.BottleLavaItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$FoodProperties, $FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$HexBottleItem, $HexBottleItem$$Type} from "net.joefoxe.hexerei.item.custom.bottles.HexBottleItem"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $BottleLavaItem extends $HexBottleItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static "FOOD": $FoodProperties
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "getTooltip"(): $Component
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "tooltip"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BottleLavaItem$$Type = ($BottleLavaItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BottleLavaItem_ = $BottleLavaItem$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.ConnectingCarpetDyed" {
import {$CTDyable, $CTDyable$$Type} from "net.joefoxe.hexerei.block.connected.CTDyable"
import {$LootParams$Builder, $LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$ConnectingCarpetDyed$North, $ConnectingCarpetDyed$North$$Type} from "net.joefoxe.hexerei.block.custom.ConnectingCarpetDyed$North"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Waxed, $Waxed$$Type} from "net.joefoxe.hexerei.block.connected.Waxed"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ConnectingCarpetDyed$South, $ConnectingCarpetDyed$South$$Type} from "net.joefoxe.hexerei.block.custom.ConnectingCarpetDyed$South"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$CarpetBlock, $CarpetBlock$$Type} from "net.minecraft.world.level.block.CarpetBlock"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $ConnectingCarpetDyed extends $CarpetBlock implements $Waxed, $CTDyable {
static "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "NORTH": $EnumProperty<($ConnectingCarpetDyed$North)>
static readonly "COLOR": $EnumProperty<($DyeColor)>
 "dyeColor": $DyeColor
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $EnumProperty<($ConnectingCarpetDyed$South)>
static "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CarpetBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $DyeColor$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getDyeColor"(arg0: $BlockState$$Type): $DyeColor
public static "toDarkPastel"(arg0: integer): integer
public static "getColorValue"(arg0: $BlockState$$Type): integer
public static "getColorValue"(arg0: $DyeColor$$Type): integer
public static "getColorValue"(arg0: $ItemStack$$Type): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getUnWaxed"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectingCarpetDyed$$Type = ($ConnectingCarpetDyed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectingCarpetDyed_ = $ConnectingCarpetDyed$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.FluidMixingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$FluidMixingRecipe$HeatCondition, $FluidMixingRecipe$HeatCondition$$Type} from "net.joefoxe.hexerei.data.recipes.FluidMixingRecipe$HeatCondition"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $FluidMixingRecipe implements $Recipe<($RecipeInput)> {

constructor(arg0: $NonNullList$$Type<($Ingredient$$Type)>, arg1: $FluidStack$$Type, arg2: $FluidStack$$Type, arg3: $FluidMixingRecipe$HeatCondition$$Type)
constructor(arg0: $NonNullList$$Type<($Ingredient$$Type)>, arg1: $FluidStack$$Type, arg2: $FluidStack$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getLiquid"(): $FluidStack
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getToastSymbol"(): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getHeatCondition"(): $FluidMixingRecipe$HeatCondition
public "getLiquidOutput"(): $FluidStack
public "getGroup"(): StringJS
public "isIncomplete"(): boolean
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
get "type"(): $RecipeType<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "liquid"(): $FluidStack
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "toastSymbol"(): $ItemStack
get "heatCondition"(): $FluidMixingRecipe$HeatCondition
get "liquidOutput"(): $FluidStack
get "group"(): StringJS
get "incomplete"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidMixingRecipe$$Type = ($FluidMixingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidMixingRecipe_ = $FluidMixingRecipe$$Type;
}}
declare module "net.joefoxe.hexerei.tileentity.CandleTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$CandleData, $CandleData$$Type} from "net.joefoxe.hexerei.data.candle.CandleData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CandleTile extends $BlockEntity {
 "redstoneBases": integer
 "tickCount": integer
 "litStateOld": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "candles": $NonNullList<($CandleData)>
 "customName": $Component
 "redstoneAnalogSignal": integer

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "tick"(): void
public "sync"(): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "entityInside"(arg0: $Entity$$Type): void
public "getCustomName"(): $Component
public "getCustomName"(arg0: integer): $Component
public "hasCustomName"(): boolean
public "setChanged"(): void
public "setHeight"(arg0: integer): void
public "setHeight"(arg0: integer, arg1: integer): void
public "getDyeColor"(): integer
public "getDyeColor"(arg0: integer): integer
public "updateAnalog"(): integer
public "setOffsetPos"(arg0: integer): void
public "setOffsetPos"(): void
public "setOffsetPos"(arg0: boolean): void
public "setDyeColor"(arg0: integer): void
public "setDyeColor"(arg0: integer, arg1: integer): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "updateCandleSlots"(): void
public "updateCandleSlot"(arg0: integer): void
public "getNumberOfCandles"(): integer
public static "getDistanceToEntity"(arg0: $Entity$$Type, arg1: $BlockPos$$Type): double
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "customName"(): $Component
set "height"(value: integer)
get "dyeColor"(): integer
set "offsetPos"(value: integer)
set "offsetPos"(value: boolean)
set "dyeColor"(value: integer)
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "numberOfCandles"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CandleTile$$Type = ($CandleTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CandleTile_ = $CandleTile$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.bottles.BottleMilkItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$FoodProperties, $FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$HexBottleItem, $HexBottleItem$$Type} from "net.joefoxe.hexerei.item.custom.bottles.HexBottleItem"

export class $BottleMilkItem extends $HexBottleItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static "FOOD": $FoodProperties
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "getTooltip"(): $Component
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "tooltip"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BottleMilkItem$$Type = ($BottleMilkItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BottleMilkItem_ = $BottleMilkItem$$Type;
}}
declare module "net.joefoxe.hexerei.item.data_components.BookData$PageText" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"

export class $BookData$PageText {
static readonly "CODEC": $Codec<($BookData$PageText)>
 "pageTexts": $Map<(StringJS), (StringJS)>

constructor(arg0: $Map$$Type<(StringJS), (StringJS)>)

public "getPageTexts"(): $Map<(StringJS), (StringJS)>
get "pageTexts"(): $Map<(StringJS), (StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookData$PageText$$Type = ($BookData$PageText);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookData$PageText_ = $BookData$PageText$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.HerbJar" {
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
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$DyedItemColor, $DyedItemColor$$Type} from "net.minecraft.world.item.component.DyedItemColor"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ITileEntity, $ITileEntity$$Type} from "net.joefoxe.hexerei.block.ITileEntity"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$HerbJarTile, $HerbJarTile$$Type} from "net.joefoxe.hexerei.tileentity.HerbJarTile"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$PushReaction, $PushReaction$$Type} from "net.minecraft.world.level.material.PushReaction"

export class $HerbJar extends $Block implements $ITileEntity<($HerbJarTile)>, $EntityBlock, $SimpleWaterloggedBlock {
static readonly "HANGING": $BooleanProperty
static readonly "DEFAULT_COLOR": $DyedItemColor
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "DYED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "GUI_RENDER": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "attack"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
public "getTileEntityClass"(): $Class<($HerbJarTile)>
public "sync"(): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $HerbJarTile
public "getTileEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($HerbJarTile)>
public "withTileEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($HerbJarTile)>): void
public "onTileEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($HerbJarTile), ($InteractionResult$$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "tileEntityClass"(): $Class<($HerbJarTile)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HerbJar$$Type = ($HerbJar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HerbJar_ = $HerbJar$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.AddBaseToCandleRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe, $CustomRecipe$$Type} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $AddBaseToCandleRecipe extends $CustomRecipe {

constructor(arg0: $CraftingBookCategory$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getOutput"(): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
get "type"(): $RecipeType<(any)>
get "output"(): $ItemStack
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddBaseToCandleRecipe$$Type = ($AddBaseToCandleRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddBaseToCandleRecipe_ = $AddBaseToCandleRecipe$$Type;
}}
declare module "net.joefoxe.hexerei.item.custom.BroomAttachmentItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Model, $Model$$Type} from "net.minecraft.client.model.Model"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$BroomEntity$Status, $BroomEntity$Status$$Type} from "net.joefoxe.hexerei.client.renderer.entity.custom.BroomEntity$Status"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$BroomEntity, $BroomEntity$$Type} from "net.joefoxe.hexerei.client.renderer.entity.custom.BroomEntity"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $BroomAttachmentItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
 "dye_texture": $ResourceLocation
static readonly "MAX_BAR_WIDTH": integer
 "texture": $ResourceLocation
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "model": $Model
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "onMount"(arg0: $BroomEntity$$Type, arg1: $Entity$$Type, arg2: $RandomSource$$Type): void
public "onBrushDamage"(arg0: $BroomEntity$$Type, arg1: $RandomSource$$Type): void
public "onActivate"(arg0: $BroomEntity$$Type, arg1: $RandomSource$$Type): void
public "onDismount"(arg0: $BroomEntity$$Type, arg1: $Entity$$Type, arg2: $RandomSource$$Type): void
public "bakeModels"(): void
public "shouldRenderParticles"(arg0: $BroomEntity$$Type, arg1: $Level$$Type, arg2: $BroomEntity$Status$$Type): boolean
public "renderParticles"(arg0: $BroomEntity$$Type, arg1: $Level$$Type, arg2: $BroomEntity$Status$$Type, arg3: $RandomSource$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BroomAttachmentItem$$Type = ($BroomAttachmentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BroomAttachmentItem_ = $BroomAttachmentItem$$Type;
}}
declare module "net.joefoxe.hexerei.data.recipes.CauldronFillingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$SingleRecipeInput, $SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $CauldronFillingRecipe implements $Recipe<($SingleRecipeInput)> {

constructor(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type, arg2: $FluidStack$$Type)

public "test"(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $SingleRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SingleRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultingFluid"(): $FluidStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): StringJS
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $SingleRecipeInput$$Type): $NonNullList<($ItemStack)>
get "type"(): $RecipeType<(any)>
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
get "resultingFluid"(): $FluidStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CauldronFillingRecipe$$Type = ($CauldronFillingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CauldronFillingRecipe_ = $CauldronFillingRecipe$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.PaintSystem$Brush" {
import {$PaintSystem, $PaintSystem$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem"
import {$PaintSystem$Brush$Type, $PaintSystem$Brush$Type$$Type} from "net.joefoxe.hexerei.data.books.PaintSystem$Brush$Type"

export class $PaintSystem$Brush {
 "parent": $PaintSystem
static "hardness": float
static "size": integer
 "drawing": boolean
static "global": boolean
 "type": $PaintSystem$Brush$Type
 "cursorXOld": float
static "tolerance": float
 "cursorX": float
 "cursorYOld": float
 "cursorY": float

constructor(arg0: $PaintSystem$$Type)

public "getGlobal"(): boolean
public "apply"(arg0: float, arg1: float): void
public "setGlobal"(arg0: boolean): void
get "global"(): boolean
set "global"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintSystem$Brush$$Type = ($PaintSystem$Brush);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaintSystem$Brush_ = $PaintSystem$Brush$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.MahoganyWood" {
import {$RotatedPillarBlock, $RotatedPillarBlock$$Type} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MahoganyWood extends $RotatedPillarBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MahoganyWood$$Type = ($MahoganyWood);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MahoganyWood_ = $MahoganyWood$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.MixingCauldron" {
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ITileEntity, $ITileEntity$$Type} from "net.joefoxe.hexerei.block.ITileEntity"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MixingCauldronTile, $MixingCauldronTile$$Type} from "net.joefoxe.hexerei.tileentity.MixingCauldronTile"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $MixingCauldron extends $BaseEntityBlock implements $ITileEntity<($MixingCauldronTile)> {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "DYED": $BooleanProperty
 "emitParticles": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "POTION_MB_AMOUNT": integer
static readonly "GUI_RENDER": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($MixingCauldron)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "LEVEL": $IntegerProperty
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "CRAFT_DELAY": $IntegerProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "useShapeForLightOcclusion"(arg0: $BlockState$$Type): boolean
public "getTileEntityClass"(): $Class<($MixingCauldronTile)>
public static "getDyeColorNamed"(arg0: $ItemStack$$Type): $DyeColor
public "sync"(): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $MixingCauldronTile
public "getTileEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($MixingCauldronTile)>
public "withTileEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($MixingCauldronTile)>): void
public "onTileEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($MixingCauldronTile), ($InteractionResult$$Type)>): $InteractionResult
public "asHolder"(): $Holder<(any)>
get "tileEntityClass"(): $Class<($MixingCauldronTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixingCauldron$$Type = ($MixingCauldron);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixingCauldron_ = $MixingCauldron$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.BookNonItemTooltip" {
import {$BookHyperlink, $BookHyperlink$$Type} from "net.joefoxe.hexerei.data.books.BookHyperlink"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $BookNonItemTooltip {
 "hyperlink": $BookHyperlink
static readonly "CODEC": $Codec<($BookNonItemTooltip)>
 "x": float
 "width": float
 "tooltip": $List<($Component)>
 "y": float
 "height": float


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookNonItemTooltip$$Type = ($BookNonItemTooltip);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookNonItemTooltip_ = $BookNonItemTooltip$$Type;
}}
declare module "net.joefoxe.hexerei.client.renderer.entity.custom.BroomEntity$BroomSlot" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $BroomEntity$BroomSlot extends $Enum<($BroomEntity$BroomSlot)> {
static readonly "BRUSH": $BroomEntity$BroomSlot
static readonly "MISC": $BroomEntity$BroomSlot
static readonly "SATCHEL": $BroomEntity$BroomSlot


public static "values"(): ($BroomEntity$BroomSlot)[]
public static "valueOf"(arg0: StringJS): $BroomEntity$BroomSlot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BroomEntity$BroomSlot$$Type = (("misc") | ("satchel") | ("brush"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BroomEntity$BroomSlot_ = $BroomEntity$BroomSlot$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.CuttingCrystal" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CuttingCrystalTile, $CuttingCrystalTile$$Type} from "net.joefoxe.hexerei.tileentity.CuttingCrystalTile"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ITileEntity, $ITileEntity$$Type} from "net.joefoxe.hexerei.block.ITileEntity"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $CuttingCrystal extends $Block implements $ITileEntity<($CuttingCrystalTile)>, $EntityBlock, $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "SHAPE_TURNED": $VoxelShape
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "LIT": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getTileEntityClass"(): $Class<($CuttingCrystalTile)>
public "sync"(): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CuttingCrystalTile
public "getTileEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CuttingCrystalTile)>
public "withTileEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CuttingCrystalTile)>): void
public "onTileEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CuttingCrystalTile), ($InteractionResult$$Type)>): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "tileEntityClass"(): $Class<($CuttingCrystalTile)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuttingCrystal$$Type = ($CuttingCrystal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CuttingCrystal_ = $CuttingCrystal$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.Altar" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BookOfShadowsAltarTile, $BookOfShadowsAltarTile$$Type} from "net.joefoxe.hexerei.tileentity.BookOfShadowsAltarTile"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ConnectingTableEntityBase, $ConnectingTableEntityBase$$Type} from "net.joefoxe.hexerei.block.custom.ConnectingTableEntityBase"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ITileEntity, $ITileEntity$$Type} from "net.joefoxe.hexerei.block.ITileEntity"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ConnectingTable$North, $ConnectingTable$North$$Type} from "net.joefoxe.hexerei.block.custom.ConnectingTable$North"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ConnectingTable$South, $ConnectingTable$South$$Type} from "net.joefoxe.hexerei.block.custom.ConnectingTable$South"

export class $Altar extends $ConnectingTableEntityBase implements $ITileEntity<($BookOfShadowsAltarTile)> {
static "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "NORTH": $EnumProperty<($ConnectingTable$North)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $EnumProperty<($ConnectingTable$South)>
static "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getTileEntityClass"(): $Class<($BookOfShadowsAltarTile)>
public "sync"(): void
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BookOfShadowsAltarTile
public "getTileEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($BookOfShadowsAltarTile)>
public "withTileEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($BookOfShadowsAltarTile)>): void
public "onTileEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($BookOfShadowsAltarTile), ($InteractionResult$$Type)>): $InteractionResult
public "asHolder"(): $Holder<(any)>
get "tileEntityClass"(): $Class<($BookOfShadowsAltarTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Altar$$Type = ($Altar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Altar_ = $Altar$$Type;
}}
declare module "net.joefoxe.hexerei.items.JarHandler" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ItemStackHandler, $ItemStackHandler$$Type} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $JarHandler extends $ItemStackHandler {
readonly "stacklimit": integer

constructor(arg0: integer, arg1: integer)

public "getContents"(): $NonNullList<($ItemStack)>
public "isEmpty"(): boolean
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "noValidSlots"(): boolean
public "getStackLimit"(arg0: integer, arg1: $ItemStack$$Type): integer
get "contents"(): $NonNullList<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JarHandler$$Type = ($JarHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JarHandler_ = $JarHandler$$Type;
}}
declare module "net.joefoxe.hexerei.data.books.BookImageEffect" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$BookImage, $BookImage$$Type} from "net.joefoxe.hexerei.data.books.BookImage"

export class $BookImageEffect {
 "amount": float
static readonly "CODEC": $Codec<($BookImageEffect)>
 "type": StringJS
 "hoverImage": $BookImage
 "speed": float

constructor(arg0: StringJS, arg1: float, arg2: float, arg3: $BookImage$$Type)
constructor(arg0: StringJS, arg1: float, arg2: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BookImageEffect$$Type = ($BookImageEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BookImageEffect_ = $BookImageEffect$$Type;
}}
declare module "net.joefoxe.hexerei.tileentity.PestleAndMortarTile" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Clearable, $Clearable$$Type} from "net.minecraft.world.Clearable"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LockCode, $LockCode$$Type} from "net.minecraft.world.LockCode"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ItemStackHandler, $ItemStackHandler$$Type} from "net.neoforged.neoforge.items.ItemStackHandler"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RandomizableContainerBlockEntity, $RandomizableContainerBlockEntity$$Type} from "net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity"
import {$WorldlyContainer, $WorldlyContainer$$Type} from "net.minecraft.world.WorldlyContainer"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $PestleAndMortarTile extends $RandomizableContainerBlockEntity implements $WorldlyContainer, $Clearable, $MenuProvider {
 "output": $ItemStack
 "grindingTimeMax": integer
static readonly "craftDelayMax": integer
 "crafting": boolean
 "crafted": boolean
 "name": $Component
 "grindSoundPlayed": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "lockKey": $LockCode
 "craftDelay": integer
readonly "itemHandler": $ItemStackHandler
 "grindingTime": integer

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "tick"(): void
public "sync"(): void
public "craft"(): void
public "onLoad"(): void
public "getItems"(): $NonNullList<($ItemStack)>
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setItems"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getSpeed"(arg0: double, arg1: double): float
public "setChanged"(): void
public static "getDistance"(arg0: float, arg1: float, arg2: float, arg3: float): double
public "putItems"(arg0: integer, arg1: $ItemStack$$Type): integer
public "getItemInSlot"(arg0: integer): $Item
public "getAngle"(arg0: $Vec3$$Type): float
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "getSlotsForFace"(arg0: $Direction$$Type): (integer)[]
public "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
public "getContainerSize"(): integer
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getMaxStackSize"(): integer
public "rotateAroundVec"(arg0: $Vec3$$Type, arg1: float, arg2: $Vec3$$Type): $Vec3
public static "getDistanceToEntity"(arg0: $Entity$$Type, arg1: $BlockPos$$Type): double
public "getItemStackInSlot"(arg0: integer): $ItemStack
public "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
public "interactPestleAndMortar"(arg0: $Player$$Type, arg1: $BlockHitResult$$Type): integer
public "clearContent"(): void
public static "tryClear"(arg0: any): void
public "getDisplayName"(): $Component
public "stillValid"(arg0: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "getLevel"(): $Level
public "getBlockPos"(): $BlockPos
public static "setBlockEntityLootTable"(arg0: $BlockGetter$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $ResourceKey$$Type<($LootTable)>): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "items"(): $NonNullList<($ItemStack)>
set "items"(value: $NonNullList$$Type<($ItemStack$$Type)>)
get "containerSize"(): integer
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "maxStackSize"(): integer
get "displayName"(): $Component
get "level"(): $Level
get "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PestleAndMortarTile$$Type = ($PestleAndMortarTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PestleAndMortarTile_ = $PestleAndMortarTile$$Type;
}}
declare module "net.joefoxe.hexerei.block.custom.OwlCourierDepotWall" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$OwlCourierDepotTile, $OwlCourierDepotTile$$Type} from "net.joefoxe.hexerei.tileentity.OwlCourierDepotTile"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ITileEntity, $ITileEntity$$Type} from "net.joefoxe.hexerei.block.ITileEntity"
import {$OwlCourierDepot, $OwlCourierDepot$$Type} from "net.joefoxe.hexerei.block.custom.OwlCourierDepot"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $OwlCourierDepotWall extends $OwlCourierDepot implements $ITileEntity<($OwlCourierDepotTile)>, $EntityBlock, $SimpleWaterloggedBlock {
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
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getTileEntityClass"(): $Class<($OwlCourierDepotTile)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "asHolder"(): $Holder<(any)>
get "tileEntityClass"(): $Class<($OwlCourierDepotTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwlCourierDepotWall$$Type = ($OwlCourierDepotWall);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwlCourierDepotWall_ = $OwlCourierDepotWall$$Type;
}}
