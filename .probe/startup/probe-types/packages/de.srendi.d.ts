declare module "de.srendi.advancedperipherals.common.addons.computercraft.pocket.PocketEnvironmentUpgrade" {
import {$IPocketAccess, $IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$BasePocketUpgrade, $BasePocketUpgrade$$Type} from "de.srendi.advancedperipherals.lib.pocket.BasePocketUpgrade"
import {$EnvironmentDetectorPeripheral, $EnvironmentDetectorPeripheral$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.EnvironmentDetectorPeripheral"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IPocketUpgrade, $IPocketUpgrade$$Type} from "dan200.computercraft.api.pocket.IPocketUpgrade"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $PocketEnvironmentUpgrade extends $BasePocketUpgrade<($EnvironmentDetectorPeripheral)> {

constructor(arg0: $ItemStack$$Type)

public "getType"(): $UpgradeType<($IPocketUpgrade)>
public "getPeripheral"(arg0: $IPocketAccess$$Type): $EnvironmentDetectorPeripheral
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($IPocketUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "type"(): $UpgradeType<($IPocketUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketEnvironmentUpgrade$$Type = ($PocketEnvironmentUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PocketEnvironmentUpgrade_ = $PocketEnvironmentUpgrade$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.OverpoweredHusbandryAutomataCorePeripheral" {
import {$HusbandryAutomataCorePeripheral, $HusbandryAutomataCorePeripheral$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.HusbandryAutomataCorePeripheral"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"

export class $OverpoweredHusbandryAutomataCorePeripheral extends $HusbandryAutomataCorePeripheral {
static readonly "ATTR_STORING_TOOL_DURABILITY": string
static readonly "TYPE": string

constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)

public "addRotationCycle"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverpoweredHusbandryAutomataCorePeripheral$$Type = ($OverpoweredHusbandryAutomataCorePeripheral);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OverpoweredHusbandryAutomataCorePeripheral_ = $OverpoweredHusbandryAutomataCorePeripheral$$Type;
}}
declare module "de.srendi.advancedperipherals.common.blocks.PlayerDetectorBlock" {
import {$PlayerDetectorEntity, $PlayerDetectorEntity$$Type} from "de.srendi.advancedperipherals.common.blocks.blockentities.PlayerDetectorEntity"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$FrontAndTop, $FrontAndTop$$Type} from "net.minecraft.core.FrontAndTop"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$APBlockEntityBlock, $APBlockEntityBlock$$Type} from "de.srendi.advancedperipherals.common.blocks.base.APBlockEntityBlock"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PlayerDetectorBlock extends $APBlockEntityBlock<($PlayerDetectorEntity)> {
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
 "descriptionId": string
static readonly "ORIENTATION": $EnumProperty<($FrontAndTop)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor()

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDetectorBlock$$Type = ($PlayerDetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerDetectorBlock_ = $PlayerDetectorBlock$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.TurtleChunkyUpgrade" {
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PeripheralTurtleUpgrade, $PeripheralTurtleUpgrade$$Type} from "de.srendi.advancedperipherals.lib.turtle.PeripheralTurtleUpgrade"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ChunkyPeripheral, $ChunkyPeripheral$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.ChunkyPeripheral"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $TurtleChunkyUpgrade extends $PeripheralTurtleUpgrade<($ChunkyPeripheral)> {

constructor(arg0: $ItemStack$$Type)

public "update"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type): void
public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public "getRightModel"(): $ModelResourceLocation
public "getLeftModel"(): $ModelResourceLocation
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "type"(): $UpgradeType<($ITurtleUpgrade)>
get "rightModel"(): $ModelResourceLocation
get "leftModel"(): $ModelResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleChunkyUpgrade$$Type = ($TurtleChunkyUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleChunkyUpgrade_ = $TurtleChunkyUpgrade$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.owner.IPeripheralOwner" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$PeripheralOwnerAbility, $PeripheralOwnerAbility$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.PeripheralOwnerAbility"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$APFakePlayer, $APFakePlayer$$Type} from "de.srendi.advancedperipherals.common.util.fakeplayer.APFakePlayer"
import {$FrontAndTop, $FrontAndTop$$Type} from "net.minecraft.core.FrontAndTop"
import {$IPeripheralOperation, $IPeripheralOperation$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralOperation"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$IOwnerAbility, $IOwnerAbility$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IOwnerAbility"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IPeripheralOwner {

 "getOwner"(): $Player
 "move"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
 "getLevel"(): $Level
 "getDataStorage"(): $DataComponentPatch
 "getAbilities"(): $Collection<($IOwnerAbility)>
 "getCustomName"(): string
 "getPos"(): $BlockPos
 "getAbility"<T extends $IOwnerAbility>(arg0: $PeripheralOwnerAbility$$Type<(T)>): T
 "getFacing"(): $Direction
 "getOrientation"(): $FrontAndTop
 "attachOperation"(...arg0: ($IPeripheralOperation$$Type<(any)>)[]): void
 "attachOperation"(arg0: $Collection$$Type<($IPeripheralOperation$$Type<(any)>)>): void
 "attachAbility"<T extends $IOwnerAbility>(arg0: $PeripheralOwnerAbility$$Type<(T)>, arg1: T): void
 "getNbtStorage"(): $CompoundTag
 "putDataStorage"(arg0: $DataComponentPatch$$Type): void
 "withPlayer"<T>(arg0: $Function$$Type<($APFakePlayer), (T)>): T
 "storeItem"(arg0: $ItemStack$$Type): $ItemStack
 "destroyUpgrade"(): void
 "markDataStorageDirty"(): void
 "getToolInMainHand"(): $ItemStack
 "isMovementPossible"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
get "owner"(): $Player
get "level"(): $Level
get "dataStorage"(): $DataComponentPatch
get "abilities"(): $Collection<($IOwnerAbility)>
get "customName"(): string
get "pos"(): $BlockPos
get "facing"(): $Direction
get "orientation"(): $FrontAndTop
get "nbtStorage"(): $CompoundTag
get "toolInMainHand"(): $ItemStack
}

export namespace $IPeripheralOwner {
const probejs$$marker: never
}
export class $IPeripheralOwner$$Static implements $IPeripheralOwner {


 "getOwner"(): $Player
 "move"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
 "getLevel"(): $Level
 "getDataStorage"(): $DataComponentPatch
 "getAbilities"(): $Collection<($IOwnerAbility)>
 "getCustomName"(): string
 "getPos"(): $BlockPos
 "getAbility"<T extends $IOwnerAbility>(arg0: $PeripheralOwnerAbility$$Type<(T)>): T
 "getFacing"(): $Direction
 "getOrientation"(): $FrontAndTop
 "attachOperation"(...arg0: ($IPeripheralOperation$$Type<(any)>)[]): void
 "attachOperation"(arg0: $Collection$$Type<($IPeripheralOperation$$Type<(any)>)>): void
 "attachAbility"<T extends $IOwnerAbility>(arg0: $PeripheralOwnerAbility$$Type<(T)>, arg1: T): void
 "getNbtStorage"(): $CompoundTag
 "putDataStorage"(arg0: $DataComponentPatch$$Type): void
 "withPlayer"<T>(arg0: $Function$$Type<($APFakePlayer), (T)>): T
 "storeItem"(arg0: $ItemStack$$Type): $ItemStack
 "destroyUpgrade"(): void
 "markDataStorageDirty"(): void
 "getToolInMainHand"(): $ItemStack
 "isMovementPossible"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralOwner$$Type = ($IPeripheralOwner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPeripheralOwner_ = $IPeripheralOwner$$Type;
}}
declare module "de.srendi.advancedperipherals.common.blocks.base.IHarvestableBlock" {
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"

export interface $IHarvestableBlock {

 "getHarvestTag"(): $TagKey<($Block)>
 "getToolTag"(): $TagKey<($Block)>

(): $TagKey$$Type<($Block$$Type)>
get "harvestTag"(): $TagKey<($Block)>
get "toolTag"(): $TagKey<($Block)>
}

export namespace $IHarvestableBlock {
const probejs$$marker: never
}
export class $IHarvestableBlock$$Static implements $IHarvestableBlock {


 "getHarvestTag"(): $TagKey<($Block)>
 "getToolTag"(): $TagKey<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHarvestableBlock$$Type = (() => $TagKey$$Type<($Block$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHarvestableBlock_ = $IHarvestableBlock$$Type;
}}
declare module "de.srendi.advancedperipherals.lib.peripherals.IPeripheralTileEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IPeripheralTileEntity {

 "handleTick"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): void
 "getPeripheralSettings"(): $CompoundTag
 "markSettingsChanged"(): void
get "peripheralSettings"(): $CompoundTag
}

export namespace $IPeripheralTileEntity {
const probejs$$marker: never
}
export class $IPeripheralTileEntity$$Static implements $IPeripheralTileEntity {


 "handleTick"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): void
 "getPeripheralSettings"(): $CompoundTag
 "markSettingsChanged"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralTileEntity$$Type = ($IPeripheralTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPeripheralTileEntity_ = $IPeripheralTileEntity$$Type;
}}
declare module "de.srendi.advancedperipherals.common.items.APBlockItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BaseBlockItem, $BaseBlockItem$$Type} from "de.srendi.advancedperipherals.common.items.base.BaseBlockItem"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $APBlockItem extends $BaseBlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
/**
 * 
 * @deprecated
 */
 "block": $Block
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type, arg2: $Supplier$$Type<(boolean)>)
constructor(arg0: $Block$$Type, arg1: $Supplier$$Type<(boolean)>)

public "isEnabled"(): boolean
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $APBlockItem$$Type = ($APBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $APBlockItem_ = $APBlockItem$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.owner.PeripheralOwnerAbility" {
import {$FuelAbility, $FuelAbility$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.FuelAbility"
import {$OperationAbility, $OperationAbility$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.OperationAbility"

export class $PeripheralOwnerAbility<T> {
static readonly "OPERATION": $PeripheralOwnerAbility<($OperationAbility)>
static readonly "FUEL": $PeripheralOwnerAbility<($FuelAbility<(any)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PeripheralOwnerAbility$$Type<T> = ($PeripheralOwnerAbility<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PeripheralOwnerAbility_<T> = $PeripheralOwnerAbility$$Type<(T)>;
}}
declare module "de.srendi.advancedperipherals.common.blocks.base.PeripheralBlockEntity" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "de.srendi.advancedperipherals.common.blocks.base.ICapabilityProvider"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$BaseContainerBlockEntity, $BaseContainerBlockEntity$$Type} from "net.minecraft.world.level.block.entity.BaseContainerBlockEntity"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$BasePeripheral, $BasePeripheral$$Type} from "de.srendi.advancedperipherals.lib.peripherals.BasePeripheral"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IComputerAccess, $IComputerAccess$$Type} from "dan200.computercraft.api.peripheral.IComputerAccess"
import {$LockCode, $LockCode$$Type} from "net.minecraft.world.LockCode"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IPeripheralTileEntity, $IPeripheralTileEntity$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralTileEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$WorldlyContainer, $WorldlyContainer$$Type} from "net.minecraft.world.WorldlyContainer"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"

export class $PeripheralBlockEntity<T extends $BasePeripheral<(any)>> extends $BaseContainerBlockEntity implements $WorldlyContainer, $MenuProvider, $IPeripheralTileEntity, $ICapabilityProvider {
 "name": $Component
static readonly "ATTACHMENTS_NBT_KEY": string
 "lockKey": $LockCode

constructor(arg0: $BlockEntityType$$Type<(any)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "isEmpty"(): boolean
public "getItem"(arg0: integer): $ItemStack
public "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "setItems"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
public "getItems"(): $NonNullList<($ItemStack)>
public "clearContent"(): void
public "stillValid"(arg0: $Player$$Type): boolean
public "createFluidHandlerCap"(arg0: $Direction$$Type): $IFluidHandler
public "createItemHandlerCap"(arg0: $Direction$$Type): $IItemHandler
public "createPeripheralCap"(arg0: $Direction$$Type): $IPeripheral
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "getSlotsForFace"(arg0: $Direction$$Type): (integer)[]
public "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Direction$$Type): boolean
public "getConnectedComputers"(): $Iterable<($IComputerAccess)>
public "getPeripheralSettings"(): $CompoundTag
public "markSettingsChanged"(): void
public "getDisplayName"(): $Component
public "handleTick"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): void
public "createEnergyStorageCap"(arg0: $Direction$$Type): $IEnergyStorage
public "setChanged"(): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "empty"(): boolean
set "items"(value: $NonNullList$$Type<($ItemStack$$Type)>)
get "items"(): $NonNullList<($ItemStack)>
get "containerSize"(): integer
get "connectedComputers"(): $Iterable<($IComputerAccess)>
get "peripheralSettings"(): $CompoundTag
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PeripheralBlockEntity$$Type<T> = ($PeripheralBlockEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PeripheralBlockEntity_<T> = $PeripheralBlockEntity$$Type<(T)>;
}}
declare module "de.srendi.advancedperipherals.lib.peripherals.BasePeripheral" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ILuaContext, $ILuaContext$$Type} from "dan200.computercraft.api.lua.ILuaContext"
import {$IDynamicPeripheral, $IDynamicPeripheral$$Type} from "dan200.computercraft.api.peripheral.IDynamicPeripheral"
import {$MethodResult, $MethodResult$$Type} from "dan200.computercraft.api.lua.MethodResult"
import {$IComputerAccess, $IComputerAccess$$Type} from "dan200.computercraft.api.peripheral.IComputerAccess"
import {$IArguments, $IArguments$$Type} from "dan200.computercraft.api.lua.IArguments"
import {$Set, $Set$$Type} from "java.util.Set"
import {$IBasePeripheral, $IBasePeripheral$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IBasePeripheral"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$IPeripheralOwner, $IPeripheralOwner$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IPeripheralOwner"

export class $BasePeripheral<O extends $IPeripheralOwner> implements $IBasePeripheral<(O)>, $IDynamicPeripheral {


public "getName"(): string
public "equals"(arg0: $IPeripheral$$Type): boolean
public "getType"(): string
public "getTarget"(): any
public "attach"(arg0: $IComputerAccess$$Type): void
public "detach"(arg0: $IComputerAccess$$Type): void
public "getMethodNames"(): (string)[]
public "getConnectedComputers"(): $Iterable<($IComputerAccess)>
public "callMethod"(arg0: $IComputerAccess$$Type, arg1: $ILuaContext$$Type, arg2: integer, arg3: $IArguments$$Type): $MethodResult
public "getConfiguration"(): $Map<(string), (any)>
public "getPeripheralConfiguration"(): $Map<(string), (any)>
public "getPeripheralOwner"(): O
public "isEnabled"(): boolean
public "getAdditionalTypes"(): $Set<(string)>
get "name"(): string
get "type"(): string
get "target"(): any
get "methodNames"(): (string)[]
get "connectedComputers"(): $Iterable<($IComputerAccess)>
get "configuration"(): $Map<(string), (any)>
get "peripheralConfiguration"(): $Map<(string), (any)>
get "peripheralOwner"(): O
get "enabled"(): boolean
get "additionalTypes"(): $Set<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasePeripheral$$Type<O> = ($BasePeripheral<(O)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasePeripheral_<O> = $BasePeripheral$$Type<(O)>;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.metaphysics.OverpoweredWeakAutomata" {
import {$OverpoweredWeakAutomataCorePeripheral, $OverpoweredWeakAutomataCorePeripheral$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.OverpoweredWeakAutomataCorePeripheral"
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ClockwiseAnimatedTurtleUpgrade, $ClockwiseAnimatedTurtleUpgrade$$Type} from "de.srendi.advancedperipherals.lib.turtle.ClockwiseAnimatedTurtleUpgrade"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $OverpoweredWeakAutomata extends $ClockwiseAnimatedTurtleUpgrade<($OverpoweredWeakAutomataCorePeripheral)> {

constructor(arg0: $ItemStack$$Type)

public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public "getRightModel"(): $ModelResourceLocation
public "getLeftModel"(): $ModelResourceLocation
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "type"(): $UpgradeType<($ITurtleUpgrade)>
get "rightModel"(): $ModelResourceLocation
get "leftModel"(): $ModelResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverpoweredWeakAutomata$$Type = ($OverpoweredWeakAutomata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OverpoweredWeakAutomata_ = $OverpoweredWeakAutomata$$Type;
}}
declare module "de.srendi.advancedperipherals.common.items.base.BaseBlockItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BaseBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
/**
 * 
 * @deprecated
 */
 "block": $Block
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type)
constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "getDescription"(): $Component
public "isEnabled"(): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
get "description"(): $Component
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockItem$$Type = ($BaseBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockItem_ = $BaseBlockItem$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.metaphysics.HusbandryAutomata" {
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$HusbandryAutomataCorePeripheral, $HusbandryAutomataCorePeripheral$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.HusbandryAutomataCorePeripheral"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ClockwiseAnimatedTurtleUpgrade, $ClockwiseAnimatedTurtleUpgrade$$Type} from "de.srendi.advancedperipherals.lib.turtle.ClockwiseAnimatedTurtleUpgrade"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $HusbandryAutomata extends $ClockwiseAnimatedTurtleUpgrade<($HusbandryAutomataCorePeripheral)> {

constructor(arg0: $ItemStack$$Type)

public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public "getRightModel"(): $ModelResourceLocation
public "getLeftModel"(): $ModelResourceLocation
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "type"(): $UpgradeType<($ITurtleUpgrade)>
get "rightModel"(): $ModelResourceLocation
get "leftModel"(): $ModelResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HusbandryAutomata$$Type = ($HusbandryAutomata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HusbandryAutomata_ = $HusbandryAutomata$$Type;
}}
declare module "de.srendi.advancedperipherals.lib.peripherals.IPeripheralCheck" {
import {$MethodResult, $MethodResult$$Type} from "dan200.computercraft.api.lua.MethodResult"

export interface $IPeripheralCheck<T> {

 "check"(arg0: T): $MethodResult
 "checkAlso"(arg0: $IPeripheralCheck$$Type<(T)>): $IPeripheralCheck<(T)>

(arg0: T): $MethodResult$$Type
}

export namespace $IPeripheralCheck {
const probejs$$marker: never
}
export class $IPeripheralCheck$$Static<T> implements $IPeripheralCheck {


 "check"(arg0: T): $MethodResult
 "checkAlso"(arg0: $IPeripheralCheck$$Type<(T)>): $IPeripheralCheck<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralCheck$$Type<T> = ((arg0: T) => $MethodResult$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPeripheralCheck_<T> = $IPeripheralCheck$$Type<(T)>;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.ChatBoxPeripheral" {
import {$IPocketAccess, $IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$MethodResult, $MethodResult$$Type} from "dan200.computercraft.api.lua.MethodResult"
import {$BasePeripheral, $BasePeripheral$$Type} from "de.srendi.advancedperipherals.lib.peripherals.BasePeripheral"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$IArguments, $IArguments$$Type} from "dan200.computercraft.api.lua.IArguments"
import {$PeripheralBlockEntity, $PeripheralBlockEntity$$Type} from "de.srendi.advancedperipherals.common.blocks.base.PeripheralBlockEntity"
import {$IPeripheralOwner, $IPeripheralOwner$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IPeripheralOwner"

export class $ChatBoxPeripheral extends $BasePeripheral<($IPeripheralOwner)> {
static readonly "PERIPHERAL_TYPE": string

constructor(arg0: $IPocketAccess$$Type)
constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)
constructor(arg0: $PeripheralBlockEntity$$Type<(any)>)

public "update"(): void
public "isEnabled"(): boolean
public "sendMessage"(arg0: $IArguments$$Type): $MethodResult
public "sendFormattedMessageToPlayer"(arg0: $IArguments$$Type): $MethodResult
public "sendFormattedToastToPlayer"(arg0: $IArguments$$Type): $MethodResult
public "sendFormattedMessage"(arg0: $IArguments$$Type): $MethodResult
public "sendMessageToPlayer"(arg0: $IArguments$$Type): $MethodResult
public "sendToastToPlayer"(arg0: $IArguments$$Type): $MethodResult
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChatBoxPeripheral$$Type = ($ChatBoxPeripheral);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChatBoxPeripheral_ = $ChatBoxPeripheral$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.operations.SingleOperationContext" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"

export class $SingleOperationContext implements $Serializable {

constructor(arg0: integer, arg1: integer)

public "getCount"(): integer
public "getDistance"(): integer
public "extraCount"(arg0: integer): $SingleOperationContext
get "count"(): integer
get "distance"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleOperationContext$$Type = ($SingleOperationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleOperationContext_ = $SingleOperationContext$$Type;
}}
declare module "de.srendi.advancedperipherals.lib.pocket.BasePocketUpgrade" {
import {$IPocketAccess, $IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$AbstractPocketUpgrade, $AbstractPocketUpgrade$$Type} from "dan200.computercraft.api.pocket.AbstractPocketUpgrade"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IPocketUpgrade, $IPocketUpgrade$$Type} from "dan200.computercraft.api.pocket.IPocketUpgrade"
import {$IBasePeripheral, $IBasePeripheral$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IBasePeripheral"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $BasePocketUpgrade<T extends $IBasePeripheral<(any)>> extends $AbstractPocketUpgrade {


public "createPeripheral"(arg0: $IPocketAccess$$Type): $IPeripheral
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($IPocketUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasePocketUpgrade$$Type<T> = ($BasePocketUpgrade<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasePocketUpgrade_<T> = $BasePocketUpgrade$$Type<(T)>;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.OverpoweredEndAutomataCorePeripheral" {
import {$EndAutomataCorePeripheral, $EndAutomataCorePeripheral$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.EndAutomataCorePeripheral"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"

export class $OverpoweredEndAutomataCorePeripheral extends $EndAutomataCorePeripheral {
static readonly "ATTR_STORING_TOOL_DURABILITY": string
static readonly "TYPE": string

constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)

public "addRotationCycle"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverpoweredEndAutomataCorePeripheral$$Type = ($OverpoweredEndAutomataCorePeripheral);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OverpoweredEndAutomataCorePeripheral_ = $OverpoweredEndAutomataCorePeripheral$$Type;
}}
declare module "de.srendi.advancedperipherals.common.util.fakeplayer.APFakePlayer" {
import {$HumanoidArm, $HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$MagniaProperties, $MagniaProperties$$Type} from "net.bunten.enderscape.entity.magnia.MagniaProperties"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ServerPlayerGameMode, $ServerPlayerGameMode$$Type} from "net.minecraft.server.level.ServerPlayerGameMode"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerGamePacketListenerImpl, $ServerGamePacketListenerImpl$$Type} from "net.minecraft.server.network.ServerGamePacketListenerImpl"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$FakePlayer, $FakePlayer$$Type} from "net.neoforged.neoforge.common.util.FakePlayer"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$Pose, $Pose$$Type} from "net.minecraft.world.entity.Pose"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Abilities, $Abilities$$Type} from "net.minecraft.world.entity.player.Abilities"
import {$Pair, $Pair$$Type} from "de.srendi.advancedperipherals.common.util.Pair"
import {$FishingHook, $FishingHook$$Type} from "net.minecraft.world.entity.projectile.FishingHook"
import {$EntityDataAccessor, $EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$WalkAnimationState, $WalkAnimationState$$Type} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PortalProcessor, $PortalProcessor$$Type} from "net.minecraft.world.entity.PortalProcessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$LevelRenderer, $LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Stat, $Stat$$Type} from "net.minecraft.stats.Stat"
import {$Stack, $Stack$$Type} from "java.util.Stack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$InventoryMenu, $InventoryMenu$$Type} from "net.minecraft.world.inventory.InventoryMenu"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $APFakePlayer extends $FakePlayer {
static readonly "DEFAULT_BASE_GRAVITY": double
 "xRot": float
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
 "ars_Nouveau$motions": $Stack<(any)>
 "yHeadRot": float
 "yCloakO": double
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "connection": $ServerGamePacketListenerImpl
 "yBodyRotO": float
 "removalReason": $Entity$RemovalReason
 "zza": float
 "swingingArm": $InteractionHand
static readonly "CRAFTING_SLOT_OFFSET": integer
static readonly "INTERACTION_DISTANCE_VERIFICATION_BUFFER": double
static readonly "ID_TAG": string
static readonly "DATA_HEALTH_ID": $EntityDataAccessor<(float)>
static readonly "WAKE_UP_DURATION": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "wonGame": boolean
 "walkDist": float
 "noCulling": boolean
 "walkAnimation": $WalkAnimationState
readonly "gameMode": $ServerPlayerGameMode
readonly "object": any
static readonly "STANDING_DIMENSIONS": $EntityDimensions
 "yya": float
readonly "server": $MinecraftServer
 "oAttackAnim": float
 "yHeadRotO": float
 "containerCounter": integer
static readonly "UUID_TAG": string
static readonly "DEFAULT_MODEL_CUSTOMIZATION": integer
 "hurtDuration": integer
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
static readonly "SWIMMING_BB_HEIGHT": float
static readonly "DEFAULT_ENTITY_INTERACTION_RANGE": float
 "dead": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "experienceLevel": integer
static readonly "DEFAULT_BABY_SCALE": float
 "eyeHeight": float
static readonly "ATTRIBUTES_FIELD": string
 "camera": $Entity
static readonly "PERSISTED_NBT_TAG": string
static readonly "DEFAULT_BB_HEIGHT": float
 "seenCredits": boolean
 "xxa": float
 "zCloak": double
 "flyDist": float
 "currentImpulseImpactPos": $Vec3
static readonly "PASSENGERS_TAG": string
 "xCloakO": double
 "wasOnFire": boolean
 "attackAnim": float
 "zOld": double
readonly "timeOffs": float
 "wasTouchingWater": boolean
readonly "rotA": float
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions
static readonly "ENDER_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SLEEP_DURATION": integer
static readonly "HELD_ITEM_SLOT": integer
 "yCloak": double
 "swingTime": integer
static readonly "BODY_ARMOR_OFFSET": integer
 "xCloak": double
readonly "abilities": $Abilities
 "tickCount": integer
static readonly "BOARDING_COOLDOWN": integer
static readonly "MAX_HEALTH": integer
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BASE_JUMP_POWER": float
static readonly "DEFAULT_EYE_HEIGHT": float
 "level": $Level
 "yRot": float
static readonly "CROUCH_BB_HEIGHT": float
 "moveDist": float
 "zCloakO": double
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "bob": float
 "experienceProgress": float
 "totalExperience": integer
 "xOld": double
 "wasInPowderSnow": boolean
 "containerMenu": $AbstractContainerMenu
 "hurtTime": integer
 "swinging": boolean
 "hurtMarked": boolean
 "attackStrengthTicker": integer
static readonly "DEFAULT_MAIN_HAND": $HumanoidArm
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
 "jumping": boolean
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DEFAULT_VEHICLE_ATTACHMENT": $Vec3
readonly "inventoryMenu": $InventoryMenu
readonly "inventory": $Inventory
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "PROFILE": $GameProfile
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "fishing": $FishingHook
 "removeArrowTime": integer
 "walkDistO": float
static readonly "SWIMMING_BB_WIDTH": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": string
 "yBodyRot": float
 "blocksBuilding": boolean
 "takeXpDelay": integer
static readonly "DEFAULT_BLOCK_INTERACTION_RANGE": float
 "oBob": float
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "effectsDirty": boolean
 "currentExplosionCause": $Entity

constructor(arg0: $ServerLevel$$Type, arg1: $Entity$$Type, arg2: $GameProfile$$Type)

public "use"(arg0: boolean, arg1: boolean, arg2: $Predicate$$Type<($Entity)>): $InteractionResult
public "use"(arg0: boolean, arg1: boolean): $InteractionResult
public "setLevel"(arg0: $Level$$Type): void
public "isSilent"(): boolean
public "canAttack"(arg0: $LivingEntity$$Type): boolean
public "awardStat"(arg0: $Stat$$Type<(any)>): void
public "playSound"(arg0: $SoundEvent$$Type, arg1: float, arg2: float): void
public "getEyeHeight"(arg0: $Pose$$Type): float
public "useOnEntity"(): $InteractionResult
public "useOnBlock"(): $InteractionResult
public "digBlock"(): $Pair<(boolean), (string)>
public "findHit"(arg0: boolean, arg1: boolean): $HitResult
public "findHit"(arg0: boolean, arg1: boolean, arg2: $Predicate$$Type<($Entity)>): $HitResult
public static "wrapActionWithRot"<T>(arg0: float, arg1: float, arg2: $Function$$Type<($APFakePlayer), (T)>): $Function<($APFakePlayer), (T)>
public static "wrapActionWithShiftKey"<T>(arg0: boolean, arg1: $Function$$Type<($APFakePlayer), (T)>): $Function<($APFakePlayer), (T)>
public "useOnFilteredEntity"(arg0: $Predicate$$Type<($Entity)>): $InteractionResult
public "useOnSpecificEntity"(arg0: $Entity$$Type, arg1: $HitResult$$Type): $InteractionResult
public "doActionWithShiftKey"<T>(arg0: boolean, arg1: $Function$$Type<($APFakePlayer), (T)>): T
public "doActionWithRot"<T>(arg0: float, arg1: float, arg2: $Function$$Type<($APFakePlayer), (T)>): T
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$$Type): void
public "sodiumdynamiclights$updateDynamicLight"(arg0: $LevelRenderer$$Type): boolean
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$shouldUpdateDynamicLight"(): boolean
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$resetDynamicLight"(): void
public static "tickEntity"(entity: $LivingEntity$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public static "getAlternativeStack"(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
public "lithium$getCachedFeetBlockState"(): $BlockState
public static "is"(arg0: $Entity$$Type): boolean
public static "spawnedFromEndTrialSpawner"(arg0: $Entity$$Type): boolean
public static "setSpawnedFromEndTrialSpawner"(arg0: $Entity$$Type, arg1: boolean): void
public static "getMagniaProperties"(arg0: $Entity$$Type): $MagniaProperties
public static "canMagniaAffect"(arg0: $Entity$$Type): boolean
public static "getMagnetismFactor"(arg0: $Entity$$Type): float
public static "setDashed"(arg0: $Entity$$Type, arg1: boolean): void
public static "dashTicks"(arg0: $Entity$$Type): integer
public static "setDashTicks"(arg0: $Entity$$Type, arg1: integer): void
public static "dashed"(arg0: $Entity$$Type): boolean
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
public static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
public static "dataOf"(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer): integer
public static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
public static "forNameOnly"(arg0: string): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
set "level"(value: $Level$$Type)
get "silent"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $APFakePlayer$$Type = ($APFakePlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $APFakePlayer_ = $APFakePlayer$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.metaphysics.WeakAutomata" {
import {$WeakAutomataCorePeripheral, $WeakAutomataCorePeripheral$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.WeakAutomataCorePeripheral"
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ClockwiseAnimatedTurtleUpgrade, $ClockwiseAnimatedTurtleUpgrade$$Type} from "de.srendi.advancedperipherals.lib.turtle.ClockwiseAnimatedTurtleUpgrade"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $WeakAutomata extends $ClockwiseAnimatedTurtleUpgrade<($WeakAutomataCorePeripheral)> {

constructor(arg0: $ItemStack$$Type)

public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public "getRightModel"(): $ModelResourceLocation
public "getLeftModel"(): $ModelResourceLocation
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "type"(): $UpgradeType<($ITurtleUpgrade)>
get "rightModel"(): $ModelResourceLocation
get "leftModel"(): $ModelResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeakAutomata$$Type = ($WeakAutomata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeakAutomata_ = $WeakAutomata$$Type;
}}
declare module "de.srendi.advancedperipherals.lib.peripherals.AutomataCorePeripheral" {
import {$TurtlePeripheralOwner, $TurtlePeripheralOwner$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.TurtlePeripheralOwner"
import {$Map, $Map$$Type} from "java.util.Map"
import {$MethodResult, $MethodResult$$Type} from "dan200.computercraft.api.lua.MethodResult"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IPeripheralCheck, $IPeripheralCheck$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralCheck"
import {$SingleOperationContext, $SingleOperationContext$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.operations.SingleOperationContext"
import {$IPeripheralFunction, $IPeripheralFunction$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralFunction"
import {$IPeripheralOperation, $IPeripheralOperation$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralOperation"
import {$BasePeripheral, $BasePeripheral$$Type} from "de.srendi.advancedperipherals.lib.peripherals.BasePeripheral"
import {$SingleOperation, $SingleOperation$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.operations.SingleOperation"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $AutomataCorePeripheral extends $BasePeripheral<($TurtlePeripheralOwner)> {
static readonly "ATTR_STORING_TOOL_DURABILITY": string


public "hasAttribute"(arg0: string): boolean
public "setAttribute"(arg0: string): void
public "getInteractionRadius"(): integer
public "withOperation"(arg0: $SingleOperation$$Type, arg1: $IPeripheralFunction$$Type<($SingleOperationContext), ($MethodResult$$Type)>): $MethodResult
public "withOperation"(arg0: $SingleOperation$$Type, arg1: $IPeripheralFunction$$Type<($SingleOperationContext), ($MethodResult$$Type)>, arg2: $IPeripheralCheck$$Type<($SingleOperationContext)>): $MethodResult
public "withOperation"<T>(arg0: $IPeripheralOperation$$Type<(T)>, arg1: T, arg2: $IPeripheralFunction$$Type<(T), ($MethodResult$$Type)>, arg3: $IPeripheralCheck$$Type<(T)>): $MethodResult
public "validateSide"(arg0: string): $Direction
public "getPeripheralConfiguration"(): $Map<(string), (any)>
public "toDistance"(arg0: $BlockPos$$Type): $SingleOperationContext
public "possibleOperations"(): $List<($IPeripheralOperation<(any)>)>
public "addRotationCycle"(): void
public "addRotationCycle"(arg0: integer): void
public "forUnknownDistance"(): $SingleOperationContext
set "attribute"(value: string)
get "interactionRadius"(): integer
get "peripheralConfiguration"(): $Map<(string), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomataCorePeripheral$$Type = ($AutomataCorePeripheral);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomataCorePeripheral_ = $AutomataCorePeripheral$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.GeoScannerPeripheral" {
import {$IPocketAccess, $IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$MethodResult, $MethodResult$$Type} from "dan200.computercraft.api.lua.MethodResult"
import {$BasePeripheral, $BasePeripheral$$Type} from "de.srendi.advancedperipherals.lib.peripherals.BasePeripheral"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$IArguments, $IArguments$$Type} from "dan200.computercraft.api.lua.IArguments"
import {$PeripheralBlockEntity, $PeripheralBlockEntity$$Type} from "de.srendi.advancedperipherals.common.blocks.base.PeripheralBlockEntity"
import {$IPeripheralOwner, $IPeripheralOwner$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IPeripheralOwner"

export class $GeoScannerPeripheral extends $BasePeripheral<($IPeripheralOwner)> {
static readonly "PERIPHERAL_TYPE": string

constructor(arg0: $IPocketAccess$$Type)
constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)
constructor(arg0: $PeripheralBlockEntity$$Type<(any)>)

public "isEnabled"(): boolean
public "scan"(arg0: $IArguments$$Type): $MethodResult
public "cost"(arg0: integer): $MethodResult
public "chunkAnalyze"(): $MethodResult
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoScannerPeripheral$$Type = ($GeoScannerPeripheral);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoScannerPeripheral_ = $GeoScannerPeripheral$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.owner.FuelAbility" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$IPeripheralOperation, $IPeripheralOperation$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralOperation"
import {$MethodResult, $MethodResult$$Type} from "dan200.computercraft.api.lua.MethodResult"
import {$List, $List$$Type} from "java.util.List"
import {$IPeripheralPlugin, $IPeripheralPlugin$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralPlugin"
import {$IOwnerAbility, $IOwnerAbility$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IOwnerAbility"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$BoundMethod, $BoundMethod$$Type} from "de.srendi.advancedperipherals.lib.peripherals.BoundMethod"
import {$IPeripheralOwner, $IPeripheralOwner$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IPeripheralOwner"

export class $FuelAbility<T extends $IPeripheralOwner> implements $IOwnerAbility, $IPeripheralPlugin {

constructor(arg0: T)

public "getFuelLevel"(): integer
public "consumeFuel"(arg0: integer, arg1: boolean): boolean
public "addFuel"(arg0: integer): void
public "collectConfiguration"(arg0: $Map$$Type<(string), (any)>): void
public "getFuelCount"(): integer
public "reduceCooldownAccordingToConsumptionRate"(arg0: integer): integer
public "getFuelMaxCount"(): integer
public "getMaxFuelLevel"(): integer
public "getFuelConsumptionRate"(): integer
public "setFuelConsumptionRate"(arg0: integer): $MethodResult
public "isFuelConsumptionDisable"(): boolean
public "getFuelConsumptionMultiply"(): integer
public "getOperations"(): ($IPeripheralOperation<(any)>)[]
public "getMethods"(): $List<($BoundMethod)>
public "isSuitable"(arg0: $IPeripheral$$Type): boolean
get "fuelLevel"(): integer
get "fuelCount"(): integer
get "fuelMaxCount"(): integer
get "maxFuelLevel"(): integer
get "fuelConsumptionRate"(): integer
set "fuelConsumptionRate"(value: integer)
get "fuelConsumptionDisable"(): boolean
get "fuelConsumptionMultiply"(): integer
get "operations"(): ($IPeripheralOperation<(any)>)[]
get "methods"(): $List<($BoundMethod)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelAbility$$Type<T> = ($FuelAbility<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuelAbility_<T> = $FuelAbility$$Type<(T)>;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.TurtleCompassUpgrade" {
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PeripheralTurtleUpgrade, $PeripheralTurtleUpgrade$$Type} from "de.srendi.advancedperipherals.lib.turtle.PeripheralTurtleUpgrade"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$CompassPeripheral, $CompassPeripheral$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.CompassPeripheral"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $TurtleCompassUpgrade extends $PeripheralTurtleUpgrade<($CompassPeripheral)> {

constructor(arg0: $ItemStack$$Type)

public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public "getRightModel"(): $ModelResourceLocation
public "getLeftModel"(): $ModelResourceLocation
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "type"(): $UpgradeType<($ITurtleUpgrade)>
get "rightModel"(): $ModelResourceLocation
get "leftModel"(): $ModelResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleCompassUpgrade$$Type = ($TurtleCompassUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleCompassUpgrade_ = $TurtleCompassUpgrade$$Type;
}}
declare module "de.srendi.advancedperipherals.lib.turtle.ClockwiseAnimatedTurtleUpgrade" {
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PeripheralTurtleUpgrade, $PeripheralTurtleUpgrade$$Type} from "de.srendi.advancedperipherals.lib.turtle.PeripheralTurtleUpgrade"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IBasePeripheral, $IBasePeripheral$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IBasePeripheral"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $ClockwiseAnimatedTurtleUpgrade<T extends $IBasePeripheral<(any)>> extends $PeripheralTurtleUpgrade<(T)> {


public "update"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type): void
public "getUpgradeItem"(arg0: $DataComponentPatch$$Type): $ItemStack
public "isItemSuitable"(arg0: $ItemStack$$Type): boolean
public "getUpgradeData"(arg0: $ItemStack$$Type): $DataComponentPatch
public "chargeConsumingCallback"(): void
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClockwiseAnimatedTurtleUpgrade$$Type<T> = ($ClockwiseAnimatedTurtleUpgrade<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClockwiseAnimatedTurtleUpgrade_<T> = $ClockwiseAnimatedTurtleUpgrade$$Type<(T)>;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.operations.SingleOperation" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$IPeripheralOperation, $IPeripheralOperation$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralOperation"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$SingleOperationContext, $SingleOperationContext$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.operations.SingleOperationContext"
import {$ModConfigSpec$Builder, $ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $SingleOperation extends $Enum<($SingleOperation)> implements $IPeripheralOperation<($SingleOperationContext)> {
static readonly "WARP": $SingleOperation
static readonly "USE_ON_BLOCK": $SingleOperation
static readonly "DIG": $SingleOperation
static readonly "CAPTURE_ANIMAL": $SingleOperation
static readonly "ACCURE_PLACE": $SingleOperation
static readonly "USE_ON_ANIMAL": $SingleOperation
static readonly "SUCK": $SingleOperation


public static "values"(): ($SingleOperation)[]
public static "valueOf"(arg0: string): $SingleOperation
public "getCost"(arg0: any): integer
public "getCost"(arg0: $SingleOperationContext$$Type): integer
public "dataComponentType"(): $DataComponentType<(long)>
public "getInitialCooldown"(): integer
public "computerDescription"(): $Map<(string), (any)>
public "addToConfig"(arg0: $ModConfigSpec$Builder$$Type): void
public "getCooldown"(arg0: any): integer
public "getCooldown"(arg0: $SingleOperationContext$$Type): integer
public "settingsPostfix"(): string
public "settingsName"(): string
get "initialCooldown"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleOperation$$Type = (("dig") | ("use_on_block") | ("suck") | ("use_on_animal") | ("capture_animal") | ("warp") | ("accure_place"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleOperation_ = $SingleOperation$$Type;
}}
declare module "de.srendi.advancedperipherals.common.items.WeakAutomataCore" {
import {$IFeedableAutomataCore, $IFeedableAutomataCore$$Type} from "de.srendi.advancedperipherals.lib.metaphysics.IFeedableAutomataCore"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$APItem, $APItem$$Type} from "de.srendi.advancedperipherals.common.items.APItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $WeakAutomataCore extends $APItem implements $IFeedableAutomataCore {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)
constructor()

public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeakAutomataCore$$Type = ($WeakAutomataCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeakAutomataCore_ = $WeakAutomataCore$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.HusbandryAutomataCorePeripheral" {
import {$WeakAutomataCorePeripheral, $WeakAutomataCorePeripheral$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.WeakAutomataCorePeripheral"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"

export class $HusbandryAutomataCorePeripheral extends $WeakAutomataCorePeripheral {
static readonly "ATTR_STORING_TOOL_DURABILITY": string
static readonly "TYPE": string

constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HusbandryAutomataCorePeripheral$$Type = ($HusbandryAutomataCorePeripheral);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HusbandryAutomataCorePeripheral_ = $HusbandryAutomataCorePeripheral$$Type;
}}
declare module "de.srendi.advancedperipherals.lib.metaphysics.IFeedableAutomataCore" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IFeedableAutomataCore {

}

export namespace $IFeedableAutomataCore {
const probejs$$marker: never
}
export class $IFeedableAutomataCore$$Static implements $IFeedableAutomataCore {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFeedableAutomataCore$$Type = ($IFeedableAutomataCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFeedableAutomataCore_ = $IFeedableAutomataCore$$Type;
}}
declare module "de.srendi.advancedperipherals.lib.peripherals.IPeripheralPlugin" {
import {$IPeripheralOperation, $IPeripheralOperation$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralOperation"
import {$List, $List$$Type} from "java.util.List"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$BoundMethod, $BoundMethod$$Type} from "de.srendi.advancedperipherals.lib.peripherals.BoundMethod"

export interface $IPeripheralPlugin {

 "getOperations"(): ($IPeripheralOperation<(any)>)[]
 "getMethods"(): $List<($BoundMethod)>
 "isSuitable"(arg0: $IPeripheral$$Type): boolean
get "operations"(): ($IPeripheralOperation<(any)>)[]
get "methods"(): $List<($BoundMethod)>
}

export namespace $IPeripheralPlugin {
const probejs$$marker: never
}
export class $IPeripheralPlugin$$Static implements $IPeripheralPlugin {


 "getOperations"(): ($IPeripheralOperation<(any)>)[]
 "getMethods"(): $List<($BoundMethod)>
 "isSuitable"(arg0: $IPeripheral$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralPlugin$$Type = ($IPeripheralPlugin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPeripheralPlugin_ = $IPeripheralPlugin$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.pocket.PocketChatBoxUpgrade" {
import {$IPocketAccess, $IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$BasePocketUpgrade, $BasePocketUpgrade$$Type} from "de.srendi.advancedperipherals.lib.pocket.BasePocketUpgrade"
import {$ChatBoxPeripheral, $ChatBoxPeripheral$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.ChatBoxPeripheral"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IPocketUpgrade, $IPocketUpgrade$$Type} from "dan200.computercraft.api.pocket.IPocketUpgrade"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $PocketChatBoxUpgrade extends $BasePocketUpgrade<($ChatBoxPeripheral)> {

constructor(arg0: $ItemStack$$Type)

public "getType"(): $UpgradeType<($IPocketUpgrade)>
public "getPeripheral"(arg0: $IPocketAccess$$Type): $ChatBoxPeripheral
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($IPocketUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "type"(): $UpgradeType<($IPocketUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketChatBoxUpgrade$$Type = ($PocketChatBoxUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PocketChatBoxUpgrade_ = $PocketChatBoxUpgrade$$Type;
}}
declare module "de.srendi.advancedperipherals.common.blocks.base.ICapabilityProvider" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export interface $ICapabilityProvider {

 "createEnergyStorageCap"(arg0: $Direction$$Type): $IEnergyStorage
 "createFluidHandlerCap"(arg0: $Direction$$Type): $IFluidHandler
 "createItemHandlerCap"(arg0: $Direction$$Type): $IItemHandler
 "createPeripheralCap"(arg0: $Direction$$Type): $IPeripheral
}

export namespace $ICapabilityProvider {
const probejs$$marker: never
}
export class $ICapabilityProvider$$Static implements $ICapabilityProvider {


 "createEnergyStorageCap"(arg0: $Direction$$Type): $IEnergyStorage
 "createFluidHandlerCap"(arg0: $Direction$$Type): $IFluidHandler
 "createItemHandlerCap"(arg0: $Direction$$Type): $IItemHandler
 "createPeripheralCap"(arg0: $Direction$$Type): $IPeripheral
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityProvider$$Type = ($ICapabilityProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapabilityProvider_ = $ICapabilityProvider$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.ColonyPeripheral" {
import {$IPocketAccess, $IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$Map, $Map$$Type} from "java.util.Map"
import {$BasePeripheral, $BasePeripheral$$Type} from "de.srendi.advancedperipherals.lib.peripherals.BasePeripheral"
import {$PeripheralBlockEntity, $PeripheralBlockEntity$$Type} from "de.srendi.advancedperipherals.common.blocks.base.PeripheralBlockEntity"
import {$IPeripheralOwner, $IPeripheralOwner$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IPeripheralOwner"

export class $ColonyPeripheral extends $BasePeripheral<($IPeripheralOwner)> {
static readonly "PERIPHERAL_TYPE": string

constructor(arg0: $PeripheralBlockEntity$$Type<(any)>)
constructor(arg0: $IPocketAccess$$Type)

public "isEnabled"(): boolean
public "getLocation"(): any
public "isActive"(): boolean
public "getBuildings"(): any
public "getResearch"(): any
public "getWorkOrders"(): any
public "getCitizens"(): any
public "isInColony"(): boolean
public "getHappiness"(): double
public "isWithin"(arg0: $Map$$Type<(any), (any)>): boolean
public "getColonyID"(): integer
public "getColonyStyle"(): string
public "isUnderAttack"(): boolean
public "isUnderRaid"(): boolean
public "maxOfCitizens"(): integer
public "amountOfGraves"(): integer
public "getVisitors"(): any
public "getRequests"(): any
public "getColonyName"(): string
public "amountOfConstructionSites"(): integer
public "amountOfCitizens"(): integer
public "getWorkOrderResources"(arg0: integer): any
public "getBuilderResources"(arg0: $Map$$Type<(any), (any)>): any
get "enabled"(): boolean
get "location"(): any
get "active"(): boolean
get "buildings"(): any
get "research"(): any
get "workOrders"(): any
get "citizens"(): any
get "inColony"(): boolean
get "happiness"(): double
get "colonyID"(): integer
get "colonyStyle"(): string
get "underAttack"(): boolean
get "underRaid"(): boolean
get "visitors"(): any
get "requests"(): any
get "colonyName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColonyPeripheral$$Type = ($ColonyPeripheral);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColonyPeripheral_ = $ColonyPeripheral$$Type;
}}
declare module "de.srendi.advancedperipherals.common.blocks.blockentities.PlayerDetectorEntity" {
import {$PlayerDetectorPeripheral, $PlayerDetectorPeripheral$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.PlayerDetectorPeripheral"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LockCode, $LockCode$$Type} from "net.minecraft.world.LockCode"
import {$PeripheralBlockEntity, $PeripheralBlockEntity$$Type} from "de.srendi.advancedperipherals.common.blocks.base.PeripheralBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PlayerDetectorEntity extends $PeripheralBlockEntity<($PlayerDetectorPeripheral)> {
 "name": $Component
static readonly "ATTACHMENTS_NBT_KEY": string
 "lockKey": $LockCode

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "handleTick"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): void
public "getDisplayName"(): $Component
public "setChanged"(): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "tryClear"(arg0: any): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDetectorEntity$$Type = ($PlayerDetectorEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerDetectorEntity_ = $PlayerDetectorEntity$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.TurtleChatBoxUpgrade" {
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PeripheralTurtleUpgrade, $PeripheralTurtleUpgrade$$Type} from "de.srendi.advancedperipherals.lib.turtle.PeripheralTurtleUpgrade"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ChatBoxPeripheral, $ChatBoxPeripheral$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.ChatBoxPeripheral"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $TurtleChatBoxUpgrade extends $PeripheralTurtleUpgrade<($ChatBoxPeripheral)> {

constructor(arg0: $ItemStack$$Type)

public "update"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type): void
public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public "getRightModel"(): $ModelResourceLocation
public "getLeftModel"(): $ModelResourceLocation
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "type"(): $UpgradeType<($ITurtleUpgrade)>
get "rightModel"(): $ModelResourceLocation
get "leftModel"(): $ModelResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleChatBoxUpgrade$$Type = ($TurtleChatBoxUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleChatBoxUpgrade_ = $TurtleChatBoxUpgrade$$Type;
}}
declare module "de.srendi.advancedperipherals.common.blocks.base.BaseBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$IHarvestableBlock, $IHarvestableBlock$$Type} from "de.srendi.advancedperipherals.common.blocks.base.IHarvestableBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$FrontAndTop, $FrontAndTop$$Type} from "net.minecraft.core.FrontAndTop"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BaseBlock extends $Block implements $IHarvestableBlock {
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
 "descriptionId": string
static readonly "ORIENTATION": $EnumProperty<($FrontAndTop)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $TagKey$$Type<($Block)>)
constructor(arg0: $TagKey$$Type<($Block)>)
constructor()

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getHarvestTag"(): $TagKey<($Block)>
public "getToolTag"(): $TagKey<($Block)>
public "asHolder"(): $Holder<(any)>
get "harvestTag"(): $TagKey<($Block)>
get "toolTag"(): $TagKey<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlock$$Type = ($BaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlock_ = $BaseBlock$$Type;
}}
declare module "de.srendi.advancedperipherals.lib.peripherals.IDataComponentProvider" {
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"

export interface $IDataComponentProvider<T> {

 "dataComponentType"(): $DataComponentType<(T)>

(): $DataComponentType$$Type<(T)>
}

export namespace $IDataComponentProvider {
const probejs$$marker: never
}
export class $IDataComponentProvider$$Static<T> implements $IDataComponentProvider {


 "dataComponentType"(): $DataComponentType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDataComponentProvider$$Type<T> = (() => $DataComponentType$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDataComponentProvider_<T> = $IDataComponentProvider$$Type<(T)>;
}}
declare module "de.srendi.advancedperipherals.common.items.APItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BaseItem, $BaseItem$$Type} from "de.srendi.advancedperipherals.common.items.base.BaseItem"

export class $APItem extends $BaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $Supplier$$Type<(boolean)>)
constructor(arg0: $Supplier$$Type<(boolean)>)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $APItem$$Type = ($APItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $APItem_ = $APItem$$Type;
}}
declare module "de.srendi.advancedperipherals.common.items.MemoryCardItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BaseItem, $BaseItem$$Type} from "de.srendi.advancedperipherals.common.items.base.BaseItem"

export class $MemoryCardItem extends $BaseItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "isEnabled"(): boolean
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryCardItem$$Type = ($MemoryCardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemoryCardItem_ = $MemoryCardItem$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.TurtleEnvironmentDetectorUpgrade" {
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PeripheralTurtleUpgrade, $PeripheralTurtleUpgrade$$Type} from "de.srendi.advancedperipherals.lib.turtle.PeripheralTurtleUpgrade"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$EnvironmentDetectorPeripheral, $EnvironmentDetectorPeripheral$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.EnvironmentDetectorPeripheral"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $TurtleEnvironmentDetectorUpgrade extends $PeripheralTurtleUpgrade<($EnvironmentDetectorPeripheral)> {

constructor(arg0: $ItemStack$$Type)

public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public "getRightModel"(): $ModelResourceLocation
public "getLeftModel"(): $ModelResourceLocation
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "type"(): $UpgradeType<($ITurtleUpgrade)>
get "rightModel"(): $ModelResourceLocation
get "leftModel"(): $ModelResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleEnvironmentDetectorUpgrade$$Type = ($TurtleEnvironmentDetectorUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleEnvironmentDetectorUpgrade_ = $TurtleEnvironmentDetectorUpgrade$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.CompassPeripheral" {
import {$TurtlePeripheralOwner, $TurtlePeripheralOwner$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.TurtlePeripheralOwner"
import {$BasePeripheral, $BasePeripheral$$Type} from "de.srendi.advancedperipherals.lib.peripherals.BasePeripheral"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"

export class $CompassPeripheral extends $BasePeripheral<($TurtlePeripheralOwner)> {
static readonly "PERIPHERAL_TYPE": string

constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)

public "isEnabled"(): boolean
public "getFacing"(): string
get "enabled"(): boolean
get "facing"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompassPeripheral$$Type = ($CompassPeripheral);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompassPeripheral_ = $CompassPeripheral$$Type;
}}
declare module "de.srendi.advancedperipherals.common.items.base.BaseItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $BaseItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)
constructor()

public "getDescription"(): $Component
public "isEnabled"(): boolean
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
get "description"(): $Component
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseItem$$Type = ($BaseItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseItem_ = $BaseItem$$Type;
}}
declare module "de.srendi.advancedperipherals.common.blocks.base.BaseBlockEntityBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BaseBlock, $BaseBlock$$Type} from "de.srendi.advancedperipherals.common.blocks.base.BaseBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$FrontAndTop, $FrontAndTop$$Type} from "net.minecraft.core.FrontAndTop"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $BaseBlockEntityBlock extends $BaseBlock implements $EntityBlock {
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
 "descriptionId": string
static readonly "ORIENTATION": $EnumProperty<($FrontAndTop)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: boolean)
constructor(arg0: boolean, arg1: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
/**
 * 
 * @deprecated
 */
public "getMenuProvider"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $MenuProvider
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockEntityBlock$$Type = ($BaseBlockEntityBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockEntityBlock_ = $BaseBlockEntityBlock$$Type;
}}
declare module "de.srendi.advancedperipherals.lib.peripherals.IPeripheralOperation" {
import {$IConfigHandler, $IConfigHandler$$Type} from "de.srendi.advancedperipherals.lib.misc.IConfigHandler"
import {$Map, $Map$$Type} from "java.util.Map"
import {$IDataComponentProvider, $IDataComponentProvider$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IDataComponentProvider"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$ModConfigSpec$Builder, $ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export interface $IPeripheralOperation<T> extends $IConfigHandler, $IDataComponentProvider<(long)> {

 "getCost"(arg0: T): integer
 "getInitialCooldown"(): integer
 "computerDescription"(): $Map<(string), (any)>
 "getCooldown"(arg0: T): integer
 "name"(): string
 "settingsPostfix"(): string
 "addToConfig"(arg0: $ModConfigSpec$Builder$$Type): void
 "settingsName"(): string
 "dataComponentType"(): $DataComponentType<(long)>
get "initialCooldown"(): integer
}

export namespace $IPeripheralOperation {
const probejs$$marker: never
}
export class $IPeripheralOperation$$Static<T> implements $IPeripheralOperation {


 "getCost"(arg0: T): integer
 "getInitialCooldown"(): integer
 "computerDescription"(): $Map<(string), (any)>
 "getCooldown"(arg0: T): integer
 "name"(): string
 "settingsPostfix"(): string
 "addToConfig"(arg0: $ModConfigSpec$Builder$$Type): void
 "settingsName"(): string
 "dataComponentType"(): $DataComponentType<(long)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralOperation$$Type<T> = ($IPeripheralOperation<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPeripheralOperation_<T> = $IPeripheralOperation$$Type<(T)>;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.metaphysics.OverpoweredEndAutomata" {
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$OverpoweredEndAutomataCorePeripheral, $OverpoweredEndAutomataCorePeripheral$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.OverpoweredEndAutomataCorePeripheral"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ClockwiseAnimatedTurtleUpgrade, $ClockwiseAnimatedTurtleUpgrade$$Type} from "de.srendi.advancedperipherals.lib.turtle.ClockwiseAnimatedTurtleUpgrade"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $OverpoweredEndAutomata extends $ClockwiseAnimatedTurtleUpgrade<($OverpoweredEndAutomataCorePeripheral)> {

constructor(arg0: $ItemStack$$Type)

public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public "getRightModel"(): $ModelResourceLocation
public "getLeftModel"(): $ModelResourceLocation
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "type"(): $UpgradeType<($ITurtleUpgrade)>
get "rightModel"(): $ModelResourceLocation
get "leftModel"(): $ModelResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverpoweredEndAutomata$$Type = ($OverpoweredEndAutomata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OverpoweredEndAutomata_ = $OverpoweredEndAutomata$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.WeakAutomataCorePeripheral" {
import {$AutomataCorePeripheral, $AutomataCorePeripheral$$Type} from "de.srendi.advancedperipherals.lib.peripherals.AutomataCorePeripheral"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"

export class $WeakAutomataCorePeripheral extends $AutomataCorePeripheral {
static readonly "ATTR_STORING_TOOL_DURABILITY": string
static readonly "TYPE": string

constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeakAutomataCorePeripheral$$Type = ($WeakAutomataCorePeripheral);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeakAutomataCorePeripheral_ = $WeakAutomataCorePeripheral$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.EnvironmentDetectorPeripheral" {
import {$MethodResult, $MethodResult$$Type} from "dan200.computercraft.api.lua.MethodResult"
import {$IArguments, $IArguments$$Type} from "dan200.computercraft.api.lua.IArguments"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$IPeripheralOwner, $IPeripheralOwner$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IPeripheralOwner"
import {$IPocketAccess, $IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$BasePeripheral, $BasePeripheral$$Type} from "de.srendi.advancedperipherals.lib.peripherals.BasePeripheral"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$IComputerAccess, $IComputerAccess$$Type} from "dan200.computercraft.api.peripheral.IComputerAccess"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Set, $Set$$Type} from "java.util.Set"
import {$PeripheralBlockEntity, $PeripheralBlockEntity$$Type} from "de.srendi.advancedperipherals.common.blocks.base.PeripheralBlockEntity"
import {$IPeripheralPlugin, $IPeripheralPlugin$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralPlugin"

export class $EnvironmentDetectorPeripheral extends $BasePeripheral<($IPeripheralOwner)> {
static readonly "PERIPHERAL_TYPE": string

constructor(arg0: $IPocketAccess$$Type)
constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)
constructor(arg0: $PeripheralBlockEntity$$Type<(any)>)

public "getDimension"(): string
public "isEnabled"(): boolean
public "getTime"(): long
public "getBiome"(): string
public "isRaining"(): boolean
public "isMoon"(arg0: integer): boolean
public "getBlockLightLevel"(): integer
public "getSkyLightLevel"(): integer
public "isSlimeChunk"(): boolean
public "isDimension"(arg0: string): boolean
public "listDimensions"(): $Set<(string)>
public "getMoonId"(): integer
public "getMoonName"(): string
public "isThunder"(): boolean
public "isSunny"(): boolean
public "scanEntities"(arg0: $IComputerAccess$$Type, arg1: $IArguments$$Type): $MethodResult
public "scanCost"(arg0: integer): $MethodResult
public "canSleepHere"(): $MethodResult
public "canSleepPlayer"(arg0: string): $MethodResult
public static "addIntegrationPlugin"(arg0: $Function$$Type<($IPeripheralOwner), ($IPeripheralPlugin$$Type)>): void
public "getDayLightLevel"(): integer
get "dimension"(): string
get "enabled"(): boolean
get "time"(): long
get "biome"(): string
get "raining"(): boolean
get "blockLightLevel"(): integer
get "skyLightLevel"(): integer
get "slimeChunk"(): boolean
get "moonId"(): integer
get "moonName"(): string
get "thunder"(): boolean
get "sunny"(): boolean
get "dayLightLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnvironmentDetectorPeripheral$$Type = ($EnvironmentDetectorPeripheral);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnvironmentDetectorPeripheral_ = $EnvironmentDetectorPeripheral$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.owner.OperationAbility$FailReason" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $OperationAbility$FailReason extends $Enum<($OperationAbility$FailReason)> {
static readonly "CHECK_FAILED": $OperationAbility$FailReason
static readonly "COOLDOWN": $OperationAbility$FailReason
static readonly "NOT_ENOUGH_FUEL": $OperationAbility$FailReason


public static "values"(): ($OperationAbility$FailReason)[]
public static "valueOf"(arg0: string): $OperationAbility$FailReason
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OperationAbility$FailReason$$Type = (("cooldown") | ("not_enough_fuel") | ("check_failed"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OperationAbility$FailReason_ = $OperationAbility$FailReason$$Type;
}}
declare module "de.srendi.advancedperipherals.common.blocks.base.APBlockEntityBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$FrontAndTop, $FrontAndTop$$Type} from "net.minecraft.core.FrontAndTop"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$BaseBlockEntityBlock, $BaseBlockEntityBlock$$Type} from "de.srendi.advancedperipherals.common.blocks.base.BaseBlockEntityBlock"

export class $APBlockEntityBlock<T extends $BlockEntity> extends $BaseBlockEntityBlock {
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
 "descriptionId": string
static readonly "ORIENTATION": $EnumProperty<($FrontAndTop)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $DeferredHolder$$Type<($BlockEntityType$$Type<(any)>), ($BlockEntityType$$Type<(T)>)>, arg1: $BlockBehaviour$Properties$$Type, arg2: boolean)
constructor(arg0: $DeferredHolder$$Type<($BlockEntityType$$Type<(any)>), ($BlockEntityType$$Type<(T)>)>, arg1: boolean)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $APBlockEntityBlock$$Type<T> = ($APBlockEntityBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $APBlockEntityBlock_<T> = $APBlockEntityBlock$$Type<(T)>;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.pocket.PocketGeoScannerUpgrade" {
import {$IPocketAccess, $IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$BasePocketUpgrade, $BasePocketUpgrade$$Type} from "de.srendi.advancedperipherals.lib.pocket.BasePocketUpgrade"
import {$GeoScannerPeripheral, $GeoScannerPeripheral$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.GeoScannerPeripheral"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IPocketUpgrade, $IPocketUpgrade$$Type} from "dan200.computercraft.api.pocket.IPocketUpgrade"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $PocketGeoScannerUpgrade extends $BasePocketUpgrade<($GeoScannerPeripheral)> {

constructor(arg0: $ItemStack$$Type)

public "getType"(): $UpgradeType<($IPocketUpgrade)>
public "getPeripheral"(arg0: $IPocketAccess$$Type): $GeoScannerPeripheral
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($IPocketUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "type"(): $UpgradeType<($IPocketUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketGeoScannerUpgrade$$Type = ($PocketGeoScannerUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PocketGeoScannerUpgrade_ = $PocketGeoScannerUpgrade$$Type;
}}
declare module "de.srendi.advancedperipherals.common.util.Pair" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $Pair<T, V> {

constructor(arg0: T, arg1: V)

public static "of"<T, V>(arg0: T, arg1: V): $Pair<(T), (V)>
public "reduce"<R>(arg0: $BiFunction$$Type<(T), (V), (R)>): R
public "mapBoth"<T1, V1>(arg0: $BiFunction$$Type<(T), (V), ($Pair$$Type<(T1), (V1)>)>): $Pair<(T1), (V1)>
public "mapLeft"<T1>(arg0: $Function$$Type<(T), (T1)>): $Pair<(T1), (V)>
public "mapRight"<V1>(arg0: $Function$$Type<(V), (V1)>): $Pair<(T), (V1)>
public "getLeft"(): T
public "getRight"(): V
public "rightPresent"(): boolean
public "leftPresent"(): boolean
public static "onlyRight"<T, V>(arg0: V): $Pair<(T), (V)>
public static "onlyLeft"<T, V>(arg0: T): $Pair<(T), (V)>
public "ifRightPresent"(arg0: $Consumer$$Type<(V)>): void
public "ifLeftPresent"(arg0: $Consumer$$Type<(T)>): void
public "ignoreLeft"<T1>(): $Pair<(T1), (V)>
public "ignoreRight"<V1>(): $Pair<(T), (V1)>
get "left"(): T
get "right"(): V
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$$Type<T, V> = ($Pair<(T), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<T, V> = $Pair$$Type<(T), (V)>;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.OverpoweredWeakAutomataCorePeripheral" {
import {$WeakAutomataCorePeripheral, $WeakAutomataCorePeripheral$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.WeakAutomataCorePeripheral"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"

export class $OverpoweredWeakAutomataCorePeripheral extends $WeakAutomataCorePeripheral {
static readonly "ATTR_STORING_TOOL_DURABILITY": string
static readonly "TYPE": string

constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)

public "addRotationCycle"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverpoweredWeakAutomataCorePeripheral$$Type = ($OverpoweredWeakAutomataCorePeripheral);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OverpoweredWeakAutomataCorePeripheral_ = $OverpoweredWeakAutomataCorePeripheral$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.pocket.PocketColonyIntegratorUpgrade" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$BasePocketUpgrade, $BasePocketUpgrade$$Type} from "de.srendi.advancedperipherals.lib.pocket.BasePocketUpgrade"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IPocketUpgrade, $IPocketUpgrade$$Type} from "dan200.computercraft.api.pocket.IPocketUpgrade"
import {$ColonyPeripheral, $ColonyPeripheral$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.ColonyPeripheral"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $PocketColonyIntegratorUpgrade extends $BasePocketUpgrade<($ColonyPeripheral)> {

constructor(arg0: $ItemStack$$Type)

public "getType"(): $UpgradeType<($IPocketUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($IPocketUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "type"(): $UpgradeType<($IPocketUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketColonyIntegratorUpgrade$$Type = ($PocketColonyIntegratorUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PocketColonyIntegratorUpgrade_ = $PocketColonyIntegratorUpgrade$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.owner.TurtlePeripheralOwner" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$APFakePlayer, $APFakePlayer$$Type} from "de.srendi.advancedperipherals.common.util.fakeplayer.APFakePlayer"
import {$FrontAndTop, $FrontAndTop$$Type} from "net.minecraft.core.FrontAndTop"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BasePeripheralOwner, $BasePeripheralOwner$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.BasePeripheralOwner"

export class $TurtlePeripheralOwner extends $BasePeripheralOwner {
readonly "side": $TurtleSide
readonly "turtle": $ITurtleAccess

constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)

public "getOwner"(): $Player
public "move"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
public "getLevel"(): $Level
public "getDataStorage"(): $DataComponentPatch
public "getCustomName"(): string
public "getSide"(): $TurtleSide
public "getPos"(): $BlockPos
public "getFacing"(): $Direction
public "getOrientation"(): $FrontAndTop
public "attachFuel"(arg0: integer): $TurtlePeripheralOwner
public "getNbtStorage"(): $CompoundTag
public "putDataStorage"(arg0: $DataComponentPatch$$Type): void
public "withPlayer"<T>(arg0: $Function$$Type<($APFakePlayer), (T)>): T
public "storeItem"(arg0: $ItemStack$$Type): $ItemStack
public "destroyUpgrade"(): void
public "getTurtle"(): $ITurtleAccess
public "markDataStorageDirty"(): void
public "getToolInMainHand"(): $ItemStack
public "isMovementPossible"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
get "owner"(): $Player
get "level"(): $Level
get "dataStorage"(): $DataComponentPatch
get "customName"(): string
get "side"(): $TurtleSide
get "pos"(): $BlockPos
get "facing"(): $Direction
get "orientation"(): $FrontAndTop
get "nbtStorage"(): $CompoundTag
get "turtle"(): $ITurtleAccess
get "toolInMainHand"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtlePeripheralOwner$$Type = ($TurtlePeripheralOwner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtlePeripheralOwner_ = $TurtlePeripheralOwner$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.TurtlePlayerDetectorUpgrade" {
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PlayerDetectorPeripheral, $PlayerDetectorPeripheral$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.PlayerDetectorPeripheral"
import {$PeripheralTurtleUpgrade, $PeripheralTurtleUpgrade$$Type} from "de.srendi.advancedperipherals.lib.turtle.PeripheralTurtleUpgrade"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $TurtlePlayerDetectorUpgrade extends $PeripheralTurtleUpgrade<($PlayerDetectorPeripheral)> {

constructor(arg0: $ItemStack$$Type)

public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public "getRightModel"(): $ModelResourceLocation
public "getLeftModel"(): $ModelResourceLocation
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "type"(): $UpgradeType<($ITurtleUpgrade)>
get "rightModel"(): $ModelResourceLocation
get "leftModel"(): $ModelResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtlePlayerDetectorUpgrade$$Type = ($TurtlePlayerDetectorUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtlePlayerDetectorUpgrade_ = $TurtlePlayerDetectorUpgrade$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.owner.OperationAbility" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$MethodResult, $MethodResult$$Type} from "dan200.computercraft.api.lua.MethodResult"
import {$List, $List$$Type} from "java.util.List"
import {$IPeripheralCheck, $IPeripheralCheck$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralCheck"
import {$OperationAbility$FailReason, $OperationAbility$FailReason$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.OperationAbility$FailReason"
import {$IPeripheralFunction, $IPeripheralFunction$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralFunction"
import {$BoundMethod, $BoundMethod$$Type} from "de.srendi.advancedperipherals.lib.peripherals.BoundMethod"
import {$IPeripheralOwner, $IPeripheralOwner$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IPeripheralOwner"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IPeripheralOperation, $IPeripheralOperation$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralOperation"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$IPeripheralPlugin, $IPeripheralPlugin$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralPlugin"
import {$IOwnerAbility, $IOwnerAbility$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IOwnerAbility"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"

export class $OperationAbility implements $IOwnerAbility, $IPeripheralPlugin {

constructor(arg0: $IPeripheralOwner$$Type)

public "isOnCooldown"(arg0: $IPeripheralOperation$$Type<(any)>): boolean
public "registerOperation"(arg0: $IPeripheralOperation$$Type<(any)>): void
public "performOperation"<T>(arg0: $IPeripheralOperation$$Type<(T)>, arg1: T, arg2: $IPeripheralCheck$$Type<(T)>, arg3: $IPeripheralFunction$$Type<(T), ($MethodResult$$Type)>, arg4: $Consumer$$Type<(T)>, arg5: $BiConsumer$$Type<($MethodResult), ($OperationAbility$FailReason)>): $MethodResult
public "collectConfiguration"(arg0: $Map$$Type<(string), (any)>): void
public "getCurrentCooldown"(arg0: $IPeripheralOperation$$Type<(any)>): integer
public "getOperationCooldown"(arg0: string): $MethodResult
public "getOperations"(): ($IPeripheralOperation<(any)>)[]
public "getMethods"(): $List<($BoundMethod)>
public "isSuitable"(arg0: $IPeripheral$$Type): boolean
get "operations"(): ($IPeripheralOperation<(any)>)[]
get "methods"(): $List<($BoundMethod)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OperationAbility$$Type = ($OperationAbility);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OperationAbility_ = $OperationAbility$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.EndAutomataCorePeripheral" {
import {$WeakAutomataCorePeripheral, $WeakAutomataCorePeripheral$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.WeakAutomataCorePeripheral"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"

export class $EndAutomataCorePeripheral extends $WeakAutomataCorePeripheral {
static readonly "ATTR_STORING_TOOL_DURABILITY": string
static readonly "TYPE": string

constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndAutomataCorePeripheral$$Type = ($EndAutomataCorePeripheral);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndAutomataCorePeripheral_ = $EndAutomataCorePeripheral$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.metaphysics.EndAutomata" {
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$EndAutomataCorePeripheral, $EndAutomataCorePeripheral$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.EndAutomataCorePeripheral"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ClockwiseAnimatedTurtleUpgrade, $ClockwiseAnimatedTurtleUpgrade$$Type} from "de.srendi.advancedperipherals.lib.turtle.ClockwiseAnimatedTurtleUpgrade"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $EndAutomata extends $ClockwiseAnimatedTurtleUpgrade<($EndAutomataCorePeripheral)> {

constructor(arg0: $ItemStack$$Type)

public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public "getRightModel"(): $ModelResourceLocation
public "getLeftModel"(): $ModelResourceLocation
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "type"(): $UpgradeType<($ITurtleUpgrade)>
get "rightModel"(): $ModelResourceLocation
get "leftModel"(): $ModelResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndAutomata$$Type = ($EndAutomata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndAutomata_ = $EndAutomata$$Type;
}}
declare module "de.srendi.advancedperipherals.lib.turtle.PeripheralTurtleUpgrade" {
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$IBasePeripheral, $IBasePeripheral$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IBasePeripheral"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"
import {$AbstractTurtleUpgrade, $AbstractTurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.AbstractTurtleUpgrade"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"

export class $PeripheralTurtleUpgrade<T extends $IBasePeripheral<(any)>> extends $AbstractTurtleUpgrade {


public "createPeripheral"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type): $IPeripheral
public "isItemSuitable"(arg0: $ItemStack$$Type): boolean
public "getRightModel"(): $ModelResourceLocation
public "getLeftModel"(): $ModelResourceLocation
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "rightModel"(): $ModelResourceLocation
get "leftModel"(): $ModelResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PeripheralTurtleUpgrade$$Type<T> = ($PeripheralTurtleUpgrade<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PeripheralTurtleUpgrade_<T> = $PeripheralTurtleUpgrade$$Type<(T)>;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.pocket.PocketPlayerDetectorUpgrade" {
import {$IPocketAccess, $IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PlayerDetectorPeripheral, $PlayerDetectorPeripheral$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.PlayerDetectorPeripheral"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$BasePocketUpgrade, $BasePocketUpgrade$$Type} from "de.srendi.advancedperipherals.lib.pocket.BasePocketUpgrade"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IPocketUpgrade, $IPocketUpgrade$$Type} from "dan200.computercraft.api.pocket.IPocketUpgrade"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $PocketPlayerDetectorUpgrade extends $BasePocketUpgrade<($PlayerDetectorPeripheral)> {

constructor(arg0: $ItemStack$$Type)

public "getType"(): $UpgradeType<($IPocketUpgrade)>
public "getPeripheral"(arg0: $IPocketAccess$$Type): $PlayerDetectorPeripheral
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($IPocketUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "type"(): $UpgradeType<($IPocketUpgrade)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketPlayerDetectorUpgrade$$Type = ($PocketPlayerDetectorUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PocketPlayerDetectorUpgrade_ = $PocketPlayerDetectorUpgrade$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.PlayerDetectorPeripheral" {
import {$IPocketAccess, $IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$Map, $Map$$Type} from "java.util.Map"
import {$MethodResult, $MethodResult$$Type} from "dan200.computercraft.api.lua.MethodResult"
import {$BasePeripheral, $BasePeripheral$$Type} from "de.srendi.advancedperipherals.lib.peripherals.BasePeripheral"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$IArguments, $IArguments$$Type} from "dan200.computercraft.api.lua.IArguments"
import {$List, $List$$Type} from "java.util.List"
import {$PeripheralBlockEntity, $PeripheralBlockEntity$$Type} from "de.srendi.advancedperipherals.common.blocks.base.PeripheralBlockEntity"
import {$IPeripheralOwner, $IPeripheralOwner$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IPeripheralOwner"

export class $PlayerDetectorPeripheral extends $BasePeripheral<($IPeripheralOwner)> {
static readonly "PERIPHERAL_TYPE": string

constructor(arg0: $IPocketAccess$$Type)
constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)
constructor(arg0: $PeripheralBlockEntity$$Type<(any)>)

public "isEnabled"(): boolean
public "getOnlinePlayers"(): (string)[]
public "getPlayerPos"(arg0: $IArguments$$Type): $Map<(string), (any)>
public "getPlayersInRange"(arg0: integer): $List<(string)>
public "getPlayersInCoords"(arg0: $Map$$Type<(any), (any)>, arg1: $Map$$Type<(any), (any)>): $MethodResult
public "getPlayersInCubic"(arg0: integer, arg1: integer, arg2: integer): $List<(string)>
public "isPlayersInCoords"(arg0: $Map$$Type<(any), (any)>, arg1: $Map$$Type<(any), (any)>): boolean
public "isPlayersInCubic"(arg0: integer, arg1: integer, arg2: integer): boolean
public "isPlayersInRange"(arg0: integer): boolean
public "isPlayerInCoords"(arg0: $Map$$Type<(any), (any)>, arg1: $Map$$Type<(any), (any)>, arg2: string): boolean
public "isPlayerInCubic"(arg0: integer, arg1: integer, arg2: integer, arg3: string): boolean
public "isPlayerInRange"(arg0: integer, arg1: string): boolean
get "enabled"(): boolean
get "onlinePlayers"(): (string)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDetectorPeripheral$$Type = ($PlayerDetectorPeripheral);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerDetectorPeripheral_ = $PlayerDetectorPeripheral$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.metaphysics.OverpoweredHusbandryAutomata" {
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ClockwiseAnimatedTurtleUpgrade, $ClockwiseAnimatedTurtleUpgrade$$Type} from "de.srendi.advancedperipherals.lib.turtle.ClockwiseAnimatedTurtleUpgrade"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"
import {$OverpoweredHusbandryAutomataCorePeripheral, $OverpoweredHusbandryAutomataCorePeripheral$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.metaphysics.OverpoweredHusbandryAutomataCorePeripheral"

export class $OverpoweredHusbandryAutomata extends $ClockwiseAnimatedTurtleUpgrade<($OverpoweredHusbandryAutomataCorePeripheral)> {

constructor(arg0: $ItemStack$$Type)

public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public "getRightModel"(): $ModelResourceLocation
public "getLeftModel"(): $ModelResourceLocation
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "type"(): $UpgradeType<($ITurtleUpgrade)>
get "rightModel"(): $ModelResourceLocation
get "leftModel"(): $ModelResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverpoweredHusbandryAutomata$$Type = ($OverpoweredHusbandryAutomata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OverpoweredHusbandryAutomata_ = $OverpoweredHusbandryAutomata$$Type;
}}
declare module "de.srendi.advancedperipherals.lib.peripherals.IPeripheralFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPeripheralFunction<T, R> {

 "apply"(arg0: T): R

(arg0: T): R
}

export namespace $IPeripheralFunction {
const probejs$$marker: never
}
export class $IPeripheralFunction$$Static<T, R> implements $IPeripheralFunction {


 "apply"(arg0: T): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralFunction$$Type<T, R> = ((arg0: T) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPeripheralFunction_<T, R> = $IPeripheralFunction$$Type<(T), (R)>;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.ChunkyPeripheral" {
import {$TurtlePeripheralOwner, $TurtlePeripheralOwner$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.TurtlePeripheralOwner"
import {$BasePeripheral, $BasePeripheral$$Type} from "de.srendi.advancedperipherals.lib.peripherals.BasePeripheral"
import {$TurtleSide, $TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$IComputerAccess, $IComputerAccess$$Type} from "dan200.computercraft.api.peripheral.IComputerAccess"
import {$ITurtleAccess, $ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"

export class $ChunkyPeripheral extends $BasePeripheral<($TurtlePeripheralOwner)> {
static readonly "PERIPHERAL_TYPE": string

constructor(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type)

public "isEnabled"(): boolean
public "attach"(arg0: $IComputerAccess$$Type): void
public "detach"(arg0: $IComputerAccess$$Type): void
public "getChunkPos"(): $ChunkPos
public "updateChunkState"(): void
get "enabled"(): boolean
get "chunkPos"(): $ChunkPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkyPeripheral$$Type = ($ChunkyPeripheral);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkyPeripheral_ = $ChunkyPeripheral$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.turtles.TurtleGeoScannerUpgrade" {
import {$ITurtleUpgrade, $ITurtleUpgrade$$Type} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PeripheralTurtleUpgrade, $PeripheralTurtleUpgrade$$Type} from "de.srendi.advancedperipherals.lib.turtle.PeripheralTurtleUpgrade"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$GeoScannerPeripheral, $GeoScannerPeripheral$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.peripheral.GeoScannerPeripheral"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$UpgradeType, $UpgradeType$$Type} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $TurtleGeoScannerUpgrade extends $PeripheralTurtleUpgrade<($GeoScannerPeripheral)> {

constructor(arg0: $ItemStack$$Type)

public "getType"(): $UpgradeType<($ITurtleUpgrade)>
public "getRightModel"(): $ModelResourceLocation
public "getLeftModel"(): $ModelResourceLocation
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): string
get "type"(): $UpgradeType<($ITurtleUpgrade)>
get "rightModel"(): $ModelResourceLocation
get "leftModel"(): $ModelResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleGeoScannerUpgrade$$Type = ($TurtleGeoScannerUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleGeoScannerUpgrade_ = $TurtleGeoScannerUpgrade$$Type;
}}
declare module "de.srendi.advancedperipherals.lib.misc.IConfigHandler" {
import {$ModConfigSpec$Builder, $ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export interface $IConfigHandler {

 "name"(): string
 "settingsPostfix"(): string
 "addToConfig"(arg0: $ModConfigSpec$Builder$$Type): void
 "settingsName"(): string
}

export namespace $IConfigHandler {
const probejs$$marker: never
}
export class $IConfigHandler$$Static implements $IConfigHandler {


 "name"(): string
 "settingsPostfix"(): string
 "addToConfig"(arg0: $ModConfigSpec$Builder$$Type): void
 "settingsName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigHandler$$Type = ($IConfigHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigHandler_ = $IConfigHandler$$Type;
}}
declare module "de.srendi.advancedperipherals.lib.peripherals.BoundMethod" {
import {$ILuaContext, $ILuaContext$$Type} from "dan200.computercraft.api.lua.ILuaContext"
import {$MethodResult, $MethodResult$$Type} from "dan200.computercraft.api.lua.MethodResult"
import {$IComputerAccess, $IComputerAccess$$Type} from "dan200.computercraft.api.peripheral.IComputerAccess"
import {$IArguments, $IArguments$$Type} from "dan200.computercraft.api.lua.IArguments"
import {$PeripheralMethod, $PeripheralMethod$$Type} from "dan200.computercraft.core.methods.PeripheralMethod"

export class $BoundMethod {

constructor(arg0: any, arg1: string, arg2: $PeripheralMethod$$Type)

public "getName"(): string
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "apply"(arg0: $IComputerAccess$$Type, arg1: $ILuaContext$$Type, arg2: $IArguments$$Type): $MethodResult
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoundMethod$$Type = ($BoundMethod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoundMethod_ = $BoundMethod$$Type;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.owner.IOwnerAbility" {
import {$Map, $Map$$Type} from "java.util.Map"

export interface $IOwnerAbility {

 "collectConfiguration"(arg0: $Map$$Type<(string), (any)>): void
}

export namespace $IOwnerAbility {
const probejs$$marker: never
}
export class $IOwnerAbility$$Static implements $IOwnerAbility {


 "collectConfiguration"(arg0: $Map$$Type<(string), (any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOwnerAbility$$Type = ($IOwnerAbility);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOwnerAbility_ = $IOwnerAbility$$Type;
}}
declare module "de.srendi.advancedperipherals.lib.peripherals.IBasePeripheral" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$IComputerAccess, $IComputerAccess$$Type} from "dan200.computercraft.api.peripheral.IComputerAccess"
import {$Set, $Set$$Type} from "java.util.Set"
import {$IPeripheral, $IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$IPeripheralOwner, $IPeripheralOwner$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IPeripheralOwner"

export interface $IBasePeripheral<T extends $IPeripheralOwner> extends $IPeripheral {

 "isEnabled"(): boolean
 "getConnectedComputers"(): $Iterable<($IComputerAccess)>
 "getPeripheralOwner"(): T
 "equals"(arg0: $IPeripheral$$Type): boolean
 "getType"(): string
 "getTarget"(): any
 "attach"(arg0: $IComputerAccess$$Type): void
 "detach"(arg0: $IComputerAccess$$Type): void
 "getAdditionalTypes"(): $Set<(string)>
get "enabled"(): boolean
get "connectedComputers"(): $Iterable<($IComputerAccess)>
get "peripheralOwner"(): T
get "type"(): string
get "target"(): any
get "additionalTypes"(): $Set<(string)>
}

export namespace $IBasePeripheral {
const probejs$$marker: never
}
export class $IBasePeripheral$$Static<T extends $IPeripheralOwner> implements $IBasePeripheral {


 "isEnabled"(): boolean
 "getConnectedComputers"(): $Iterable<($IComputerAccess)>
 "getPeripheralOwner"(): T
 "equals"(arg0: $IPeripheral$$Type): boolean
 "getType"(): string
 "getTarget"(): any
 "attach"(arg0: $IComputerAccess$$Type): void
 "detach"(arg0: $IComputerAccess$$Type): void
 "getAdditionalTypes"(): $Set<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBasePeripheral$$Type<T> = ($IBasePeripheral<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBasePeripheral_<T> = $IBasePeripheral$$Type<(T)>;
}}
declare module "de.srendi.advancedperipherals.common.addons.computercraft.owner.BasePeripheralOwner" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IPeripheralOwner, $IPeripheralOwner$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IPeripheralOwner"
import {$PeripheralOwnerAbility, $PeripheralOwnerAbility$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.PeripheralOwnerAbility"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$APFakePlayer, $APFakePlayer$$Type} from "de.srendi.advancedperipherals.common.util.fakeplayer.APFakePlayer"
import {$FrontAndTop, $FrontAndTop$$Type} from "net.minecraft.core.FrontAndTop"
import {$IPeripheralOperation, $IPeripheralOperation$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralOperation"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$IOwnerAbility, $IOwnerAbility$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IOwnerAbility"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BasePeripheralOwner implements $IPeripheralOwner {

constructor()

public "getAbilities"(): $Collection<($IOwnerAbility)>
public "getAbility"<T extends $IOwnerAbility>(arg0: $PeripheralOwnerAbility$$Type<(T)>): T
public "attachAbility"<T extends $IOwnerAbility>(arg0: $PeripheralOwnerAbility$$Type<(T)>, arg1: T): void
public "getOwner"(): $Player
public "move"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
public "getLevel"(): $Level
public "getDataStorage"(): $DataComponentPatch
public "getCustomName"(): string
public "getPos"(): $BlockPos
public "getFacing"(): $Direction
public "getOrientation"(): $FrontAndTop
public "attachOperation"(...arg0: ($IPeripheralOperation$$Type<(any)>)[]): void
public "attachOperation"(arg0: $Collection$$Type<($IPeripheralOperation$$Type<(any)>)>): void
public "getNbtStorage"(): $CompoundTag
public "putDataStorage"(arg0: $DataComponentPatch$$Type): void
public "withPlayer"<T>(arg0: $Function$$Type<($APFakePlayer), (T)>): T
public "storeItem"(arg0: $ItemStack$$Type): $ItemStack
public "destroyUpgrade"(): void
public "markDataStorageDirty"(): void
public "getToolInMainHand"(): $ItemStack
public "isMovementPossible"(arg0: $Level$$Type, arg1: $BlockPos$$Type): boolean
get "abilities"(): $Collection<($IOwnerAbility)>
get "owner"(): $Player
get "level"(): $Level
get "dataStorage"(): $DataComponentPatch
get "customName"(): string
get "pos"(): $BlockPos
get "facing"(): $Direction
get "orientation"(): $FrontAndTop
get "nbtStorage"(): $CompoundTag
get "toolInMainHand"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasePeripheralOwner$$Type = ($BasePeripheralOwner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasePeripheralOwner_ = $BasePeripheralOwner$$Type;
}}
