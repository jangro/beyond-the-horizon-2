declare module "fuzs.tradingpost.world.level.block.entity.TradingPostAnimationController" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $TradingPostAnimationController {
 "rot": float
 "tRot": float
 "oOpen": float
 "time": integer
 "oRot": float
 "open": float

constructor(blockPos: $BlockPos$$Type)

public "tick"(level: $Level$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradingPostAnimationController$$Type = ($TradingPostAnimationController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradingPostAnimationController_ = $TradingPostAnimationController$$Type;
}}
declare module "fuzs.tradingpost.world.level.block.TradingPostBlock" {
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$PathComputationType, $PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$TickingEntityBlock, $TickingEntityBlock$$Type} from "fuzs.puzzleslib.api.block.v1.entity.TickingEntityBlock"
import {$TradingPostBlockEntity, $TradingPostBlockEntity$$Type} from "fuzs.tradingpost.world.level.block.entity.TradingPostBlockEntity"
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

export class $TradingPostBlock extends $BaseEntityBlock implements $SimpleWaterloggedBlock, $TickingEntityBlock<($TradingPostBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($TradingPostBlock)>
static readonly "MISSING_MERCHANT_COMPONENT": $Component
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

constructor(blockProperties: $BlockBehaviour$Properties$$Type)

public "getShape"(state: $BlockState$$Type, blockReader: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "isPathfindable"(state: $BlockState$$Type, pathType: $PathComputationType$$Type): boolean
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, oldState: $BlockState$$Type, level: $LevelAccessor$$Type, newPos: $BlockPos$$Type, oldPos: $BlockPos$$Type): $BlockState
public "getFluidState"(blockState: $BlockState$$Type): $FluidState
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "getBlockEntityType"(): $BlockEntityType<($TradingPostBlockEntity)>
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "useShapeForLightOcclusion"(state: $BlockState$$Type): boolean
public static "isAllowedToTrade"(entity: $Entity$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "getTicker"<BE extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, blockEntityType: $BlockEntityType$$Type<(BE)>): $BlockEntityTicker<(BE)>
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "blockEntityType"(): $BlockEntityType<($TradingPostBlockEntity)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradingPostBlock$$Type = ($TradingPostBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradingPostBlock_ = $TradingPostBlock$$Type;
}}
declare module "fuzs.tradingpost.mixin.client.accessor.ButtonAccessor" {
import {$Button$OnPress, $Button$OnPress$$Type} from "net.minecraft.client.gui.components.Button$OnPress"

export interface $ButtonAccessor {

 "tradingpost$setOnPress"(arg0: $Button$OnPress$$Type): void

(arg0: $Button$OnPress): void
}

export namespace $ButtonAccessor {
const probejs$$marker: never
}
export class $ButtonAccessor$$Static implements $ButtonAccessor {


 "tradingpost$setOnPress"(arg0: $Button$OnPress$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ButtonAccessor$$Type = ((arg0: $Button$OnPress) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ButtonAccessor_ = $ButtonAccessor$$Type;
}}
declare module "fuzs.tradingpost.world.level.block.entity.TradingPostBlockEntity" {
import {$TickingBlockEntity, $TickingBlockEntity$$Type} from "fuzs.puzzleslib.api.block.v1.entity.TickingBlockEntity"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TradingPostAnimationController, $TradingPostAnimationController$$Type} from "fuzs.tradingpost.world.level.block.entity.TradingPostAnimationController"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Nameable, $Nameable$$Type} from "net.minecraft.world.Nameable"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TradingPostBlockEntity extends $BlockEntity implements $Nameable, $TickingBlockEntity {
static readonly "TAG_CUSTOM_NAME": StringJS
static readonly "CONTAINER_COMPONENT": $Component
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "getName"(): $Component
public "getCustomName"(): $Component
public "setCustomName"(component: $Component$$Type): void
public "loadAdditional"(compoundTag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
public "clientTick"(): void
public "getAnimationController"(): $TradingPostAnimationController
public "removeComponentsFromTag"(tag: $CompoundTag$$Type): void
public "getDisplayName"(): $Component
public "hasCustomName"(): boolean
public "serverTick"(): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "name"(): $Component
get "customName"(): $Component
set "customName"(value: $Component$$Type)
get "animationController"(): $TradingPostAnimationController
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradingPostBlockEntity$$Type = ($TradingPostBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradingPostBlockEntity_ = $TradingPostBlockEntity$$Type;
}}
declare module "fuzs.tradingpost.mixin.accessor.MerchantMenuAccessor" {
import {$Merchant, $Merchant$$Type} from "net.minecraft.world.item.trading.Merchant"
import {$MerchantContainer, $MerchantContainer$$Type} from "net.minecraft.world.inventory.MerchantContainer"

export interface $MerchantMenuAccessor {

 "tradingpost$setTrader"(arg0: $Merchant$$Type): void
 "tradingpost$setTradeContainer"(arg0: $MerchantContainer$$Type): void
}

export namespace $MerchantMenuAccessor {
const probejs$$marker: never
}
export class $MerchantMenuAccessor$$Static implements $MerchantMenuAccessor {


 "tradingpost$setTrader"(arg0: $Merchant$$Type): void
 "tradingpost$setTradeContainer"(arg0: $MerchantContainer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MerchantMenuAccessor$$Type = ($MerchantMenuAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MerchantMenuAccessor_ = $MerchantMenuAccessor$$Type;
}}
declare module "fuzs.tradingpost.mixin.accessor.VillagerAccessor" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"

export interface $VillagerAccessor {

 "tradingpost$callUpdateSpecialPrices"(arg0: $Player$$Type): void

(arg0: $Player): void
}

export namespace $VillagerAccessor {
const probejs$$marker: never
}
export class $VillagerAccessor$$Static implements $VillagerAccessor {


 "tradingpost$callUpdateSpecialPrices"(arg0: $Player$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerAccessor$$Type = ((arg0: $Player) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerAccessor_ = $VillagerAccessor$$Type;
}}
