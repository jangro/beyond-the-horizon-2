declare module "fuzs.easymagic.mixin.accessor.PlayerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerAccessor {

 "setEnchantmentSeed"(arg0: integer): void

(arg0: integer): void
set "enchantmentSeed"(value: integer)
}

export namespace $PlayerAccessor {
const probejs$$marker: never
}
export class $PlayerAccessor$$Static implements $PlayerAccessor {


 "setEnchantmentSeed"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAccessor$$Type = ((arg0: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerAccessor_ = $PlayerAccessor$$Type;
}}
declare module "fuzs.easymagic.mixin.accessor.EnchantmentMenuAccessor" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DataSlot, $DataSlot$$Type} from "net.minecraft.world.inventory.DataSlot"
import {$EnchantmentInstance, $EnchantmentInstance$$Type} from "net.minecraft.world.item.enchantment.EnchantmentInstance"
import {$List, $List$$Type} from "java.util.List"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export interface $EnchantmentMenuAccessor {

 "getRandom"(): $RandomSource
 "setEnchantSlots"(arg0: $Container$$Type): void
 "callGetEnchantmentList"(arg0: $RegistryAccess$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer): $List<($EnchantmentInstance)>
 "getEnchantmentSeed"(): $DataSlot
get "random"(): $RandomSource
set "enchantSlots"(value: $Container$$Type)
get "enchantmentSeed"(): $DataSlot
}

export namespace $EnchantmentMenuAccessor {
const probejs$$marker: never
}
export class $EnchantmentMenuAccessor$$Static implements $EnchantmentMenuAccessor {


 "getRandom"(): $RandomSource
 "setEnchantSlots"(arg0: $Container$$Type): void
 "callGetEnchantmentList"(arg0: $RegistryAccess$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer): $List<($EnchantmentInstance)>
 "getEnchantmentSeed"(): $DataSlot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentMenuAccessor$$Type = ($EnchantmentMenuAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentMenuAccessor_ = $EnchantmentMenuAccessor$$Type;
}}
declare module "fuzs.easymagic.world.level.block.EnchantmentTableWithInventoryBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$EnchantingTableBlock, $EnchantingTableBlock$$Type} from "net.minecraft.world.level.block.EnchantingTableBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TickingEntityBlock, $TickingEntityBlock$$Type} from "fuzs.puzzleslib.api.block.v1.entity.TickingEntityBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$EnchantmentTableWithInventoryBlockEntity, $EnchantmentTableWithInventoryBlockEntity$$Type} from "fuzs.easymagic.world.level.block.entity.EnchantmentTableWithInventoryBlockEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnchantmentTableWithInventoryBlock extends $EnchantingTableBlock implements $TickingEntityBlock<($EnchantmentTableWithInventoryBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($EnchantingTableBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BOOKSHELF_OFFSETS": $List<($BlockPos)>
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

constructor(block: $Block$$Type)

public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, blockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getBlockEntityType"(): $BlockEntityType<($EnchantmentTableWithInventoryBlockEntity)>
public "hasAnalogOutputSignal"(blockState: $BlockState$$Type): boolean
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): integer
public "getMenuProvider"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): $MenuProvider
public "getDescriptionId"(): StringJS
public "asHolder"(): $Holder<(any)>
get "blockEntityType"(): $BlockEntityType<($EnchantmentTableWithInventoryBlockEntity)>
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableWithInventoryBlock$$Type = ($EnchantmentTableWithInventoryBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableWithInventoryBlock_ = $EnchantmentTableWithInventoryBlock$$Type;
}}
declare module "fuzs.easymagic.mixin.client.accessor.ChiseledBookShelfBlockAccessor" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ChiseledBookShelfBlockAccessor {

 "easymagic$callGetHitSlot"(arg0: $BlockHitResult$$Type, arg1: $BlockState$$Type): $OptionalInt

(arg0: $BlockHitResult, arg1: $BlockState): $OptionalInt$$Type
}

export namespace $ChiseledBookShelfBlockAccessor {
const probejs$$marker: never
}
export class $ChiseledBookShelfBlockAccessor$$Static implements $ChiseledBookShelfBlockAccessor {


 "easymagic$callGetHitSlot"(arg0: $BlockHitResult$$Type, arg1: $BlockState$$Type): $OptionalInt
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChiseledBookShelfBlockAccessor$$Type = ((arg0: $BlockHitResult, arg1: $BlockState) => $OptionalInt$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChiseledBookShelfBlockAccessor_ = $ChiseledBookShelfBlockAccessor$$Type;
}}
declare module "fuzs.easymagic.world.level.block.entity.EnchantmentTableWithInventoryBlockEntity" {
import {$TickingBlockEntity, $TickingBlockEntity$$Type} from "fuzs.puzzleslib.api.block.v1.entity.TickingBlockEntity"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$ListBackedContainer, $ListBackedContainer$$Type} from "fuzs.puzzleslib.api.container.v1.ListBackedContainer"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$EnchantingTableBlockEntity, $EnchantingTableBlockEntity$$Type} from "net.minecraft.world.level.block.entity.EnchantingTableBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$WorldlyContainer, $WorldlyContainer$$Type} from "net.minecraft.world.WorldlyContainer"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $EnchantmentTableWithInventoryBlockEntity extends $EnchantingTableBlockEntity implements $ListBackedContainer, $MenuProvider, $WorldlyContainer, $TickingBlockEntity {
 "oFlip": float
 "flipA": float
 "rot": float
 "tRot": float
 "flipT": float
 "oOpen": float
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "time": integer
 "oRot": float
 "flip": float
 "open": float

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "getDisplayName"(): $Component
public "getType"(): $BlockEntityType<(any)>
public "createMenu"(id: integer, playerInventory: $Inventory$$Type, player: $Player$$Type): $AbstractContainerMenu
public "canPlaceItem"(index: integer, itemStack: $ItemStack$$Type): boolean
public "setChanged"(): void
public "stillValid"(player: $Player$$Type): boolean
public "loadAdditional"(compoundTag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
public "clientTick"(): void
public "canOpen"(player: $Player$$Type): boolean
public "getUpdateTag"(registries: $HolderLookup$Provider$$Type): $CompoundTag
public "getSlotsForFace"(direction: $Direction$$Type): (integer)[]
public "canTakeItemThroughFace"(index: integer, itemStack: $ItemStack$$Type, direction: $Direction$$Type): boolean
public "getContainerSize"(): integer
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "getContainerItems"(): $NonNullList<($ItemStack)>
public "canPlaceItemThroughFace"(index: integer, itemStack: $ItemStack$$Type, direction: $Direction$$Type): boolean
public "removeItem"(slot: integer, count: integer): $ItemStack
public "getItem"(slot: integer): $ItemStack
public "isEmpty"(): boolean
public static "of"(items: $NonNullList$$Type<($ItemStack$$Type)>): $ListBackedContainer
public static "of"(size: integer): $ListBackedContainer
public "setItem"(slot: integer, stack: $ItemStack$$Type): void
public "clearContent"(): void
public "removeItemNoUpdate"(slot: integer): $ItemStack
public "serverTick"(): void
public "startOpen"(arg0: $Player$$Type): void
public "stopOpen"(arg0: $Player$$Type): void
public "countItem"(arg0: $Item$$Type): integer
public "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
public "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
public "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "getMaxStackSize"(): integer
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
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
get "displayName"(): $Component
get "type"(): $BlockEntityType<(any)>
get "containerSize"(): integer
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "containerItems"(): $NonNullList<($ItemStack)>
get "empty"(): boolean
get "maxStackSize"(): integer
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
export type $EnchantmentTableWithInventoryBlockEntity$$Type = ($EnchantmentTableWithInventoryBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableWithInventoryBlockEntity_ = $EnchantmentTableWithInventoryBlockEntity$$Type;
}}
