declare module "fuzs.visualworkbench.world.level.block.entity.CraftingTableAnimationController" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $CraftingTableAnimationController {
 "nextAngle": float
 "ticks": integer
 "animating": boolean
 "animationAngleStart": float
 "playerAngle": double
 "animationAngleEnd": float
 "sector": integer
 "currentAngle": float
 "startTicks": double

constructor(blockPos: $BlockPos$$Type)

public "tick"(level: $Level$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingTableAnimationController$$Type = ($CraftingTableAnimationController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingTableAnimationController_ = $CraftingTableAnimationController$$Type;
}}
declare module "fuzs.visualworkbench.world.level.block.entity.WorkbenchVisualsProvider" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CraftingTableAnimationController, $CraftingTableAnimationController$$Type} from "fuzs.visualworkbench.world.level.block.entity.CraftingTableAnimationController"

export interface $WorkbenchVisualsProvider {

 "getAnimationController"(): $CraftingTableAnimationController
 "getCraftingResult"(): $ItemStack
get "animationController"(): $CraftingTableAnimationController
get "craftingResult"(): $ItemStack
}

export namespace $WorkbenchVisualsProvider {
const probejs$$marker: never
}
export class $WorkbenchVisualsProvider$$Static implements $WorkbenchVisualsProvider {


 "getAnimationController"(): $CraftingTableAnimationController
 "getCraftingResult"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorkbenchVisualsProvider$$Type = ($WorkbenchVisualsProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorkbenchVisualsProvider_ = $WorkbenchVisualsProvider$$Type;
}}
declare module "fuzs.visualworkbench.world.level.block.entity.CraftingTableBlockEntity" {
import {$TickingBlockEntity, $TickingBlockEntity$$Type} from "fuzs.puzzleslib.api.block.v1.entity.TickingBlockEntity"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$WorkbenchVisualsProvider, $WorkbenchVisualsProvider$$Type} from "fuzs.visualworkbench.world.level.block.entity.WorkbenchVisualsProvider"
import {$LockCode, $LockCode$$Type} from "net.minecraft.world.LockCode"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RandomizableContainerBlockEntity, $RandomizableContainerBlockEntity$$Type} from "net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity"
import {$CraftingTableAnimationController, $CraftingTableAnimationController$$Type} from "fuzs.visualworkbench.world.level.block.entity.CraftingTableAnimationController"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $CraftingTableBlockEntity extends $RandomizableContainerBlockEntity implements $TickingBlockEntity, $WorkbenchVisualsProvider {
static readonly "COMPONENT_CRAFTING": $MutableComponent
 "name": $Component
static readonly "ATTACHMENTS_NBT_KEY": string
 "lockKey": $LockCode
static readonly "TAG_RESULT": string

constructor(pos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "loadAdditional"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
public "canPlaceItem"(slot: integer, stack: $ItemStack$$Type): boolean
public "getItems"(): $NonNullList<($ItemStack)>
public "getUpdateTag"(registries: $HolderLookup$Provider$$Type): $CompoundTag
public "clientTick"(): void
public "canTakeItem"(target: $Container$$Type, slot: integer, stack: $ItemStack$$Type): boolean
public "stillValid"(player: $Player$$Type): boolean
public "setChanged"(): void
public "getAnimationController"(): $CraftingTableAnimationController
public "getContainerSize"(): integer
public "getUpdatePacket"(): $Packet<(any)>
public "getResultItems"(): $NonNullList<($ItemStack)>
public "getCraftingResult"(): $ItemStack
public "serverTick"(): void
public "getLevel"(): $Level
public static "setBlockEntityLootTable"(arg0: $BlockGetter$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $ResourceKey$$Type<($LootTable)>): void
public "getBlockPos"(): $BlockPos
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "items"(): $NonNullList<($ItemStack)>
get "animationController"(): $CraftingTableAnimationController
get "containerSize"(): integer
get "updatePacket"(): $Packet<(any)>
get "resultItems"(): $NonNullList<($ItemStack)>
get "craftingResult"(): $ItemStack
get "level"(): $Level
get "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingTableBlockEntity$$Type = ($CraftingTableBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingTableBlockEntity_ = $CraftingTableBlockEntity$$Type;
}}
declare module "fuzs.visualworkbench.world.level.block.CraftingTableWithInventoryBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TickingEntityBlock, $TickingEntityBlock$$Type} from "fuzs.puzzleslib.api.block.v1.entity.TickingEntityBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CraftingTableBlockEntity, $CraftingTableBlockEntity$$Type} from "fuzs.visualworkbench.world.level.block.entity.CraftingTableBlockEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CraftingTableWithInventoryBlock extends $BaseEntityBlock implements $TickingEntityBlock<($CraftingTableBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CraftingTableWithInventoryBlock)>
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
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(block: $Block$$Type)

public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, movedByPiston: boolean): void
public "getBlockEntityType"(): $BlockEntityType<($CraftingTableBlockEntity)>
public "hasAnalogOutputSignal"(blockState: $BlockState$$Type): boolean
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type): integer
public "getDescriptionId"(): string
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "getTicker"<BE extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, blockEntityType: $BlockEntityType$$Type<(BE)>): $BlockEntityTicker<(BE)>
public "asHolder"(): $Holder<(any)>
get "blockEntityType"(): $BlockEntityType<($CraftingTableBlockEntity)>
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingTableWithInventoryBlock$$Type = ($CraftingTableWithInventoryBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingTableWithInventoryBlock_ = $CraftingTableWithInventoryBlock$$Type;
}}
