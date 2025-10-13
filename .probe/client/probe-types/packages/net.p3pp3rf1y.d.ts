declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.feeding.FeedingUpgradeWrapper" {
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FilterLogic, $FilterLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IFilteredUpgrade, $IFilteredUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IFilteredUpgrade"
import {$HungerLevel, $HungerLevel$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.feeding.HungerLevel"
import {$ITickableUpgrade, $ITickableUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$FeedingUpgradeItem, $FeedingUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.feeding.FeedingUpgradeItem"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"

export class $FeedingUpgradeWrapper extends $UpgradeWrapperBase<($FeedingUpgradeWrapper), ($FeedingUpgradeItem)> implements $ITickableUpgrade, $IFilteredUpgrade {

constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "getFilterLogic"(): $FilterLogic
public "setFeedAtHungerLevel"(arg0: $HungerLevel$$Type): void
public "getFeedAtHungerLevel"(): $HungerLevel
public "setFeedImmediatelyWhenHurt"(arg0: boolean): void
public "shouldFeedImmediatelyWhenHurt"(): boolean
get "filterLogic"(): $FilterLogic
set "feedAtHungerLevel"(value: $HungerLevel$$Type)
get "feedAtHungerLevel"(): $HungerLevel
set "feedImmediatelyWhenHurt"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeedingUpgradeWrapper$$Type = ($FeedingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeedingUpgradeWrapper_ = $FeedingUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.ContentsFilterLogic" {
import {$MemorySettingsCategory, $MemorySettingsCategory$$Type} from "net.p3pp3rf1y.sophisticatedcore.settings.memory.MemorySettingsCategory"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FilterLogic, $FilterLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$InventoryHandler, $InventoryHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryHandler"
import {$ContentsFilterType, $ContentsFilterType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ContentsFilterType"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$FilterAttributes, $FilterAttributes$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterAttributes"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $ContentsFilterLogic extends $FilterLogic {

constructor(arg0: $ItemStack$$Type, arg1: $Consumer$$Type<($ItemStack)>, arg2: integer, arg3: $Supplier$$Type<($InventoryHandler$$Type)>, arg4: $MemorySettingsCategory$$Type, arg5: $DeferredHolder$$Type<($DataComponentType$$Type<(any)>), ($DataComponentType$$Type<($FilterAttributes$$Type)>)>)

public "getFilterType"(): $ContentsFilterType
public "matchesFilter"(arg0: $ItemStack$$Type): boolean
public "setDepositFilterType"(arg0: $ContentsFilterType$$Type): void
get "filterType"(): $ContentsFilterType
set "depositFilterType"(value: $ContentsFilterType$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContentsFilterLogic$$Type = ($ContentsFilterLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContentsFilterLogic_ = $ContentsFilterLogic$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.renderdata.DisplaySide" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $DisplaySide extends $Enum<($DisplaySide)> implements $StringRepresentable {
static readonly "LEFT": $DisplaySide
static readonly "FRONT": $DisplaySide
static readonly "RIGHT": $DisplaySide


public "previous"(): $DisplaySide
public static "values"(): ($DisplaySide)[]
public static "valueOf"(arg0: StringJS): $DisplaySide
public "next"(): $DisplaySide
public static "fromName"(arg0: StringJS): $DisplaySide
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
export type $DisplaySide$$Type = (("front") | ("left") | ("right"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisplaySide_ = $DisplaySide$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.common.gui.BackpackContext$ContextType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"

export class $BackpackContext$ContextType extends $Enum<($BackpackContext$ContextType)> {
static readonly "ITEM_SUB_BACKPACK": $BackpackContext$ContextType
static readonly "BLOCK_BACKPACK": $BackpackContext$ContextType
static readonly "ANOTHER_PLAYER_BACKPACK": $BackpackContext$ContextType
static readonly "ITEM_BACKPACK": $BackpackContext$ContextType
static readonly "BLOCK_SUB_BACKPACK": $BackpackContext$ContextType
static readonly "ANOTHER_PLAYER_SUB_BACKPACK": $BackpackContext$ContextType


public "toBuffer"(arg0: $FriendlyByteBuf$$Type): void
public static "fromBuffer"(arg0: $FriendlyByteBuf$$Type): $BackpackContext$ContextType
public static "values"(): ($BackpackContext$ContextType)[]
public static "valueOf"(arg0: StringJS): $BackpackContext$ContextType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackContext$ContextType$$Type = (("block_backpack") | ("block_sub_backpack") | ("item_backpack") | ("item_sub_backpack") | ("another_player_backpack") | ("another_player_sub_backpack"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackContext$ContextType_ = $BackpackContext$ContextType$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.controller.IControllerBoundable" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ControllerBlockEntityBase, $ControllerBlockEntityBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.controller.ControllerBlockEntityBase"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $IControllerBoundable {

 "canBeConnected"(): boolean
 "runOnController"(arg0: $Level$$Type, arg1: $Consumer$$Type<($ControllerBlockEntityBase)>): void
 "addToController"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
 "loadControllerPos"(arg0: $CompoundTag$$Type): void
 "removeControllerPos"(): void
 "saveControllerPos"(arg0: $CompoundTag$$Type): void
 "unregisterController"(): void
 "registerController"(arg0: $ControllerBlockEntityBase$$Type): void
 "setControllerPos"(arg0: $BlockPos$$Type): void
 "getControllerPos"(): $Optional<($BlockPos)>
 "getStorageBlockPos"(): $BlockPos
 "getStorageBlockLevel"(): $Level
 "canConnectStorages"(): boolean
 "addToAdjacentController"(): void
set "controllerPos"(value: $BlockPos$$Type)
get "controllerPos"(): $Optional<($BlockPos)>
get "storageBlockPos"(): $BlockPos
get "storageBlockLevel"(): $Level
}

export namespace $IControllerBoundable {
const CONTROLLER_POS_TAG: StringJS
const probejs$$marker: never
}
export class $IControllerBoundable$$Static implements $IControllerBoundable {
static readonly "CONTROLLER_POS_TAG": StringJS


 "canBeConnected"(): boolean
 "runOnController"(arg0: $Level$$Type, arg1: $Consumer$$Type<($ControllerBlockEntityBase)>): void
 "addToController"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
 "loadControllerPos"(arg0: $CompoundTag$$Type): void
 "removeControllerPos"(): void
 "saveControllerPos"(arg0: $CompoundTag$$Type): void
 "unregisterController"(): void
 "registerController"(arg0: $ControllerBlockEntityBase$$Type): void
 "setControllerPos"(arg0: $BlockPos$$Type): void
 "getControllerPos"(): $Optional<($BlockPos)>
 "getStorageBlockPos"(): $BlockPos
 "getStorageBlockLevel"(): $Level
 "canConnectStorages"(): boolean
 "addToAdjacentController"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IControllerBoundable$$Type = ($IControllerBoundable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IControllerBoundable_ = $IControllerBoundable$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.compat.chipped.BlockTransformationUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockTransformationUpgradeWrapper, $BlockTransformationUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.compat.chipped.BlockTransformationUpgradeWrapper"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$ChippedRecipe, $ChippedRecipe$$Type} from "earth.terrarium.chipped.common.recipes.ChippedRecipe"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $BlockTransformationUpgradeItem extends $UpgradeItemBase<($BlockTransformationUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Supplier$$Type<($RecipeType$$Type<($ChippedRecipe$$Type)>)>, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($BlockTransformationUpgradeWrapper)>
public "getRecipeType"(): $RecipeType<($ChippedRecipe)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($BlockTransformationUpgradeWrapper)>
get "recipeType"(): $RecipeType<($ChippedRecipe)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTransformationUpgradeItem$$Type = ($BlockTransformationUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTransformationUpgradeItem_ = $BlockTransformationUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.SmeltingUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UpgradeGroup, $UpgradeGroup$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"
import {$CookingUpgradeWrapper$SmeltingUpgradeWrapper, $CookingUpgradeWrapper$SmeltingUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeWrapper$SmeltingUpgradeWrapper"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICookingUpgradeItem, $ICookingUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.ICookingUpgradeItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CookingUpgradeConfig, $CookingUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeConfig"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $SmeltingUpgradeItem extends $UpgradeItemBase<($CookingUpgradeWrapper$SmeltingUpgradeWrapper)> implements $ICookingUpgradeItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($CookingUpgradeWrapper$SmeltingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $CookingUpgradeConfig$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($CookingUpgradeWrapper$SmeltingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getUpgradeGroup"(): $UpgradeGroup
public "getCookingUpgradeConfig"(): $CookingUpgradeConfig
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($CookingUpgradeWrapper$SmeltingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeGroup"(): $UpgradeGroup
get "cookingUpgradeConfig"(): $CookingUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmeltingUpgradeItem$$Type = ($SmeltingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmeltingUpgradeItem_ = $SmeltingUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $UpgradeGroup {
static readonly "NONE": $UpgradeGroup

constructor(arg0: StringJS, arg1: StringJS)

public "name"(): StringJS
public "isSolo"(): boolean
public "translName"(): StringJS
get "solo"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeGroup$$Type = ($UpgradeGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeGroup_ = $UpgradeGroup$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.inventory.StatefulComponentItemHandler" {
import {$ISlotChangeListener, $ISlotChangeListener$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.ISlotChangeListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MutableDataComponentHolder, $MutableDataComponentHolder$$Type} from "net.neoforged.neoforge.common.MutableDataComponentHolder"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$ItemContainerContents, $ItemContainerContents$$Type} from "net.minecraft.world.item.component.ItemContainerContents"

export class $StatefulComponentItemHandler implements $IItemHandlerModifiable, $ISlotChangeListener {

constructor(arg0: $MutableDataComponentHolder$$Type, arg1: $DataComponentType$$Type<($ItemContainerContents$$Type)>, arg2: integer)

public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "getSlots"(): integer
public "onSlotChanged"(arg0: integer): void
public "getBlock"(arg0: $Level$$Type): $BlockContainerJS
public "isMutable"(): boolean
public "getSlots"(): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "kjs$self"(): $IItemHandler
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "clear"(): void
public "clear"(arg0: $ItemPredicate$$Type): void
public "find"(): integer
public "find"(arg0: $ItemPredicate$$Type): integer
public "count"(): integer
public "count"(arg0: $ItemPredicate$$Type): integer
public "getWidth"(): integer
public "getHeight"(): integer
public "setChanged"(): void
public "isEmpty"(): boolean
public "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
public "countNonEmpty"(): integer
public "getAllItems"(): $List<($ItemStack)>
public "asContainer"(): $Container
get "slots"(): integer
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
export type $StatefulComponentItemHandler$$Type = ($StatefulComponentItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatefulComponentItemHandler_ = $StatefulComponentItemHandler$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.EntityMatch" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $EntityMatch extends $Enum<($EntityMatch)> implements $StringRepresentable {
static readonly "PLAYERS": $EntityMatch
static readonly "CODEC": $Codec<($EntityMatch)>
static readonly "PLAYERS_AND_ENTITIES": $EntityMatch
static readonly "ENTITIES": $EntityMatch
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($EntityMatch)>


public static "values"(): ($EntityMatch)[]
public static "valueOf"(arg0: StringJS): $EntityMatch
public "next"(): $EntityMatch
public static "fromName"(arg0: StringJS): $EntityMatch
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
export type $EntityMatch$$Type = (("players") | ("players_and_entities") | ("entities"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityMatch_ = $EntityMatch$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$AlchemyItemDefinition" {
import {$AlchemyCondition, $AlchemyCondition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyCondition"
import {$AlchemyUpgradeWrapper$FinishUsing, $AlchemyUpgradeWrapper$FinishUsing$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$FinishUsing"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AlchemyUpgradeWrapper$AlchemyItemEntityMatcher, $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$AlchemyItemEntityMatcher"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$AlchemyUpgradeWrapper$StartUsing, $AlchemyUpgradeWrapper$StartUsing$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$StartUsing"
import {$AlchemyUpgradeWrapper$AlchemyItemStackMatcher, $AlchemyUpgradeWrapper$AlchemyItemStackMatcher$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$AlchemyItemStackMatcher"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AlchemyUpgradeWrapper$AlchemyItemDefinition extends $Record {

constructor(arg0: $Predicate$$Type<($ItemStack)>, arg1: $Function$$Type<($ItemStack), ($AlchemyCondition$$Type)>, arg2: $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher$$Type, arg3: $AlchemyUpgradeWrapper$AlchemyItemStackMatcher$$Type, arg4: $AlchemyUpgradeWrapper$StartUsing$$Type, arg5: $AlchemyUpgradeWrapper$FinishUsing$$Type)
constructor(filter: $Predicate$$Type<($ItemStack)>, getDefaultCondition: $Function$$Type<($ItemStack), ($AlchemyCondition$$Type)>, canApply: $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher$$Type, stackMatches: $AlchemyUpgradeWrapper$AlchemyItemStackMatcher$$Type, startUsing: $AlchemyUpgradeWrapper$StartUsing$$Type, finishUsing: $AlchemyUpgradeWrapper$FinishUsing$$Type, hasItemUseEffects: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "filter"(): $Predicate<($ItemStack)>
public "finishUsing"(): $AlchemyUpgradeWrapper$FinishUsing
public "canApply"(): $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher
public "stackMatches"(): $AlchemyUpgradeWrapper$AlchemyItemStackMatcher
public "startUsing"(): $AlchemyUpgradeWrapper$StartUsing
public "hasItemUseEffects"(): boolean
public "getDefaultCondition"(): $Function<($ItemStack), ($AlchemyCondition)>
get "defaultCondition"(): $Function<($ItemStack), ($AlchemyCondition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeWrapper$AlchemyItemDefinition$$Type = ({"filter"?: $Predicate$$Type<($ItemStack$$Type)>, "getDefaultCondition"?: $Function$$Type<($ItemStack$$Type), ($AlchemyCondition$$Type)>, "finishUsing"?: $AlchemyUpgradeWrapper$FinishUsing$$Type, "startUsing"?: $AlchemyUpgradeWrapper$StartUsing$$Type, "stackMatches"?: $AlchemyUpgradeWrapper$AlchemyItemStackMatcher$$Type, "hasItemUseEffects"?: boolean, "canApply"?: $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher$$Type}) | ([filter?: $Predicate$$Type<($ItemStack$$Type)>, getDefaultCondition?: $Function$$Type<($ItemStack$$Type), ($AlchemyCondition$$Type)>, finishUsing?: $AlchemyUpgradeWrapper$FinishUsing$$Type, startUsing?: $AlchemyUpgradeWrapper$StartUsing$$Type, stackMatches?: $AlchemyUpgradeWrapper$AlchemyItemStackMatcher$$Type, hasItemUseEffects?: boolean, canApply?: $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyUpgradeWrapper$AlchemyItemDefinition_ = $AlchemyUpgradeWrapper$AlchemyItemDefinition$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.inception.InventoryOrder" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $InventoryOrder extends $Enum<($InventoryOrder)> implements $StringRepresentable {
static readonly "CODEC": $Codec<($InventoryOrder)>
static readonly "MAIN_FIRST": $InventoryOrder
static readonly "INCEPTED_FIRST": $InventoryOrder
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($InventoryOrder)>


public static "values"(): ($InventoryOrder)[]
public static "valueOf"(arg0: StringJS): $InventoryOrder
public "next"(): $InventoryOrder
public static "fromName"(arg0: StringJS): $InventoryOrder
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
export type $InventoryOrder$$Type = (("main_first") | ("incepted_first"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryOrder_ = $InventoryOrder$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic$ObservableFilterItemStackHandler" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FilterLogic, $FilterLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"
import {$IntConsumer, $IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$List, $List$$Type} from "java.util.List"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$FilterItemStackHandler, $FilterItemStackHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.util.FilterItemStackHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $FilterLogic$ObservableFilterItemStackHandler extends $FilterItemStackHandler {

constructor(arg0: $FilterLogic$$Type, arg1: integer)

public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "initFilters"(arg0: $List$$Type<($ItemStack$$Type)>): void
public "setOnSlotChange"(arg0: $IntConsumer$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
set "onSlotChange"(value: $IntConsumer$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterLogic$ObservableFilterItemStackHandler$$Type = ($FilterLogic$ObservableFilterItemStackHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterLogic$ObservableFilterItemStackHandler_ = $FilterLogic$ObservableFilterItemStackHandler$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.api.IEntityToolSwapUpgrade" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $IEntityToolSwapUpgrade {

 "onEntityInteract"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $Player$$Type): boolean
 "canProcessEntityInteract"(): boolean

(arg0: $Level, arg1: $Entity, arg2: $Player): boolean
}

export namespace $IEntityToolSwapUpgrade {
const probejs$$marker: never
}
export class $IEntityToolSwapUpgrade$$Static implements $IEntityToolSwapUpgrade {


 "onEntityInteract"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $Player$$Type): boolean
 "canProcessEntityInteract"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntityToolSwapUpgrade$$Type = ((arg0: $Level, arg1: $Entity, arg2: $Player) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEntityToolSwapUpgrade_ = $IEntityToolSwapUpgrade$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.ICookingUpgrade" {
import {$CookingLogic, $CookingLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingLogic"
import {$UpgradeGroup, $UpgradeGroup$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$$Type} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"

export interface $ICookingUpgrade<T extends $AbstractCookingRecipe> {

 "getCookingLogic"(): $CookingLogic<(T)>

(): $CookingLogic$$Type<(T)>
get "cookingLogic"(): $CookingLogic<(T)>
}

export namespace $ICookingUpgrade {
const UPGRADE_GROUP: $UpgradeGroup
const probejs$$marker: never
}
export class $ICookingUpgrade$$Static<T extends $AbstractCookingRecipe> implements $ICookingUpgrade {
static readonly "UPGRADE_GROUP": $UpgradeGroup


 "getCookingLogic"(): $CookingLogic<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICookingUpgrade$$Type<T> = (() => $CookingLogic$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICookingUpgrade_<T> = $ICookingUpgrade$$Type<(T)>;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.magnet.MagnetUpgradeWrapper" {
import {$MagnetUpgradeItem, $MagnetUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.magnet.MagnetUpgradeItem"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$IPickupResponseUpgrade, $IPickupResponseUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IPickupResponseUpgrade"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LevelTickEvent$Pre, $LevelTickEvent$Pre$$Type} from "net.neoforged.neoforge.event.tick.LevelTickEvent$Pre"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ITickableUpgrade, $ITickableUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IMagnetPreventionChecker, $IMagnetPreventionChecker$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.magnet.IMagnetPreventionChecker"
import {$ContentsFilterLogic, $ContentsFilterLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ContentsFilterLogic"
import {$IContentsFilteredUpgrade, $IContentsFilteredUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IContentsFilteredUpgrade"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$LevelEvent$Unload, $LevelEvent$Unload$$Type} from "net.neoforged.neoforge.event.level.LevelEvent$Unload"

export class $MagnetUpgradeWrapper extends $UpgradeWrapperBase<($MagnetUpgradeWrapper), ($MagnetUpgradeItem)> implements $IContentsFilteredUpgrade, $ITickableUpgrade, $IPickupResponseUpgrade {

constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "pickup"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "shouldPickupXp"(): boolean
public "getFilterLogic"(): $ContentsFilterLogic
public "setPickupItems"(arg0: boolean): void
public "setPickupXp"(arg0: boolean): void
public static "onWorldUnload"(arg0: $LevelEvent$Unload$$Type): void
public static "globalPostTick"(arg0: $LevelTickEvent$Pre$$Type): void
public "shouldPickupItems"(): boolean
public static "addMagnetPreventionChecker"(arg0: $IMagnetPreventionChecker$$Type): void
get "filterLogic"(): $ContentsFilterLogic
set "pickupItems"(value: boolean)
set "pickupXp"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagnetUpgradeWrapper$$Type = ($MagnetUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagnetUpgradeWrapper_ = $MagnetUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.crafting.SmithingBackpackUpgradeRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$SmithingRecipeInput, $SmithingRecipeInput$$Type} from "net.minecraft.world.item.crafting.SmithingRecipeInput"
import {$SmithingTransformRecipe, $SmithingTransformRecipe$$Type} from "net.minecraft.world.item.crafting.SmithingTransformRecipe"
import {$IWrapperRecipe, $IWrapperRecipe$$Type} from "net.p3pp3rf1y.sophisticatedcore.crafting.IWrapperRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $SmithingBackpackUpgradeRecipe extends $SmithingTransformRecipe implements $IWrapperRecipe<($SmithingTransformRecipe)> {
readonly "template": $Ingredient
readonly "result": $ItemStack
readonly "base": $Ingredient
readonly "addition": $Ingredient

constructor(arg0: $SmithingTransformRecipe$$Type)

public "getCompose"(): $SmithingTransformRecipe
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $SmithingRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
get "compose"(): $SmithingTransformRecipe
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingBackpackUpgradeRecipe$$Type = ($SmithingBackpackUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmithingBackpackUpgradeRecipe_ = $SmithingBackpackUpgradeRecipe$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $ITickableUpgrade {

 "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void

(arg0: $Entity, arg1: $Level, arg2: $BlockPos): void
}

export namespace $ITickableUpgrade {
const probejs$$marker: never
}
export class $ITickableUpgrade$$Static implements $ITickableUpgrade {


 "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickableUpgrade$$Type = ((arg0: $Entity, arg1: $Level, arg2: $BlockPos) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITickableUpgrade_ = $ITickableUpgrade$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.common.gui.UpgradeSlotChangeResult" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $UpgradeSlotChangeResult extends $Record {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($UpgradeSlotChangeResult)>

constructor(successful: boolean, errorMessage: $Component$$Type, errorUpgradeSlots: $Set$$Type<(integer)>, errorInventorySlots: $Set$$Type<(integer)>, errorInventoryParts: $Set$$Type<(integer)>)

public "successful"(): boolean
public static "fail"(arg0: $Component$$Type, arg1: $Set$$Type<(integer)>, arg2: $Set$$Type<(integer)>, arg3: $Set$$Type<(integer)>): $UpgradeSlotChangeResult
public static "success"(): $UpgradeSlotChangeResult
public "getErrorMessage"(): $Optional<($Component)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "errorMessage"(): $Component
public "errorUpgradeSlots"(): $Set<(integer)>
public "errorInventoryParts"(): $Set<(integer)>
public "errorInventorySlots"(): $Set<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeSlotChangeResult$$Type = ({"errorMessage"?: $Component$$Type, "errorInventoryParts"?: $Set$$Type<(integer)>, "errorUpgradeSlots"?: $Set$$Type<(integer)>, "errorInventorySlots"?: $Set$$Type<(integer)>, "successful"?: boolean}) | ([errorMessage?: $Component$$Type, errorInventoryParts?: $Set$$Type<(integer)>, errorUpgradeSlots?: $Set$$Type<(integer)>, errorInventorySlots?: $Set$$Type<(integer)>, successful?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeSlotChangeResult_ = $UpgradeSlotChangeResult$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IFilteredUpgrade" {
import {$FilterLogic, $FilterLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"

export interface $IFilteredUpgrade {

 "getFilterLogic"(): $FilterLogic

(): $FilterLogic$$Type
get "filterLogic"(): $FilterLogic
}

export namespace $IFilteredUpgrade {
const probejs$$marker: never
}
export class $IFilteredUpgrade$$Static implements $IFilteredUpgrade {


 "getFilterLogic"(): $FilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFilteredUpgrade$$Type = (() => $FilterLogic$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFilteredUpgrade_ = $IFilteredUpgrade$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.settings.SettingsHandler" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ISettingsCategory, $ISettingsCategory$$Type} from "net.p3pp3rf1y.sophisticatedcore.settings.ISettingsCategory"
import {$MainSettingsCategory, $MainSettingsCategory$$Type} from "net.p3pp3rf1y.sophisticatedcore.settings.main.MainSettingsCategory"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $SettingsHandler {


public "getNbt"(): $CompoundTag
public "reloadFrom"(arg0: $CompoundTag$$Type): void
public "getTypeCategory"<T extends $ISettingsCategory<(any)>>(arg0: $Class$$Type<(T)>): T
public "getSettingsCategories"(): $Map<(StringJS), ($ISettingsCategory<(any)>)>
public "getCategoriesThatImplement"<T>(arg0: $Class$$Type<(T)>): $List<(T)>
public "getGlobalSettingsCategory"(): $MainSettingsCategory<(any)>
public "instantiateGlobalSettingsCategory"(arg0: $CompoundTag$$Type, arg1: $Consumer$$Type<($CompoundTag)>): $ISettingsCategory<(any)>
public "getGlobalSettingsCategoryName"(): StringJS
get "nbt"(): $CompoundTag
get "settingsCategories"(): $Map<(StringJS), ($ISettingsCategory<(any)>)>
get "globalSettingsCategory"(): $MainSettingsCategory<(any)>
get "globalSettingsCategoryName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SettingsHandler$$Type = ($SettingsHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SettingsHandler_ = $SettingsHandler$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.magnet.IMagnetPreventionChecker" {
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $IMagnetPreventionChecker {

 "isBlocked"(arg0: $Entity$$Type): boolean

(arg0: $Entity): boolean
}

export namespace $IMagnetPreventionChecker {
const probejs$$marker: never
}
export class $IMagnetPreventionChecker$$Static implements $IMagnetPreventionChecker {


 "isBlocked"(arg0: $Entity$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMagnetPreventionChecker$$Type = ((arg0: $Entity) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMagnetPreventionChecker_ = $IMagnetPreventionChecker$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IContentsFilteredUpgrade" {
import {$ContentsFilterLogic, $ContentsFilterLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ContentsFilterLogic"
import {$IFilteredUpgrade, $IFilteredUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IFilteredUpgrade"

export interface $IContentsFilteredUpgrade extends $IFilteredUpgrade {

 "getFilterLogic"(): $ContentsFilterLogic

(): $ContentsFilterLogic$$Type
get "filterLogic"(): $ContentsFilterLogic
}

export namespace $IContentsFilteredUpgrade {
const probejs$$marker: never
}
export class $IContentsFilteredUpgrade$$Static implements $IContentsFilteredUpgrade {


 "getFilterLogic"(): $ContentsFilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContentsFilteredUpgrade$$Type = (() => $ContentsFilterLogic$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContentsFilteredUpgrade_ = $IContentsFilteredUpgrade$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.pump.PumpUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$PumpUpgradeWrapper, $PumpUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.pump.PumpUpgradeWrapper"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PumpUpgradeConfig, $PumpUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.pump.PumpUpgradeConfig"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $PumpUpgradeItem extends $UpgradeItemBase<($PumpUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: $PumpUpgradeConfig$$Type, arg4: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($PumpUpgradeWrapper)>
public "getPumpUpgradeConfig"(): $PumpUpgradeConfig
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getInteractWithFluidHandlersDefault"(): boolean
public "getInteractWithHandDefault"(): boolean
public "getInteractWithWorldDefault"(): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($PumpUpgradeWrapper)>
get "pumpUpgradeConfig"(): $PumpUpgradeConfig
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "interactWithFluidHandlersDefault"(): boolean
get "interactWithHandDefault"(): boolean
get "interactWithWorldDefault"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpUpgradeItem$$Type = ($PumpUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PumpUpgradeItem_ = $PumpUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.api.IAttackEntityResponseUpgrade" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"

export interface $IAttackEntityResponseUpgrade {

 "onAttackEntity"(arg0: $Player$$Type): boolean

(arg0: $Player): boolean
}

export namespace $IAttackEntityResponseUpgrade {
const probejs$$marker: never
}
export class $IAttackEntityResponseUpgrade$$Static implements $IAttackEntityResponseUpgrade {


 "onAttackEntity"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAttackEntityResponseUpgrade$$Type = ((arg0: $Player) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAttackEntityResponseUpgrade_ = $IAttackEntityResponseUpgrade$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.ContentsFilterType" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $ContentsFilterType extends $Enum<($ContentsFilterType)> implements $StringRepresentable {
static readonly "STORAGE": $ContentsFilterType
static readonly "BLOCK": $ContentsFilterType
static readonly "ALLOW": $ContentsFilterType


public static "values"(): ($ContentsFilterType)[]
public static "valueOf"(arg0: StringJS): $ContentsFilterType
public "next"(): $ContentsFilterType
public static "fromName"(arg0: StringJS): $ContentsFilterType
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
export type $ContentsFilterType$$Type = (("allow") | ("block") | ("storage"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContentsFilterType_ = $ContentsFilterType$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.api.IStashStorageItem" {
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IStashStorageItem$StashResult, $IStashStorageItem$StashResult$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStashStorageItem$StashResult"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IStashStorageItem {

 "getInventoryTooltip"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
 "getItemStashable"(arg0: $HolderLookup$Provider$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): $IStashStorageItem$StashResult
}

export namespace $IStashStorageItem {
const probejs$$marker: never
}
export class $IStashStorageItem$$Static implements $IStashStorageItem {


 "getInventoryTooltip"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
 "getItemStashable"(arg0: $HolderLookup$Provider$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): $IStashStorageItem$StashResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStashStorageItem$$Type = ($IStashStorageItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStashStorageItem_ = $IStashStorageItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.inventory.ITrackedContentsItemHandler" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$IItemHandlerSimpleInserter, $IItemHandlerSimpleInserter$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.IItemHandlerSimpleInserter"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ItemStackKey, $ItemStackKey$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.ItemStackKey"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $ITrackedContentsItemHandler extends $IItemHandlerSimpleInserter {

 "hasEmptySlots"(): boolean
 "getTrackedStacks"(): $Set<($ItemStackKey)>
 "getInternalSlotLimit"(arg0: integer): integer
 "unregisterStackKeyListeners"(): void
 "registerTrackingListeners"(arg0: $Consumer$$Type<($ItemStackKey)>, arg1: $Consumer$$Type<($ItemStackKey)>, arg2: $Runnable$$Type, arg3: $Runnable$$Type): void
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getBlock"(arg0: $Level$$Type): $BlockContainerJS
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "isMutable"(): boolean
 "getSlots"(): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "getStackInSlot"(arg0: integer): $ItemStack
 "kjs$self"(): $IItemHandler
 "getSlots"(): integer
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getStackInSlot"(arg0: integer): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "clear"(): void
 "clear"(arg0: $ItemPredicate$$Type): void
 "find"(): integer
 "find"(arg0: $ItemPredicate$$Type): integer
 "count"(): integer
 "count"(arg0: $ItemPredicate$$Type): integer
 "getWidth"(): integer
 "getHeight"(): integer
 "setChanged"(): void
 "isEmpty"(): boolean
 "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
 "countNonEmpty"(): integer
 "getAllItems"(): $List<($ItemStack)>
 "asContainer"(): $Container
get "trackedStacks"(): $Set<($ItemStackKey)>
get "mutable"(): boolean
get "slots"(): integer
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}

export namespace $ITrackedContentsItemHandler {
const probejs$$marker: never
}
export class $ITrackedContentsItemHandler$$Static implements $ITrackedContentsItemHandler {


 "hasEmptySlots"(): boolean
 "getTrackedStacks"(): $Set<($ItemStackKey)>
 "getInternalSlotLimit"(arg0: integer): integer
 "unregisterStackKeyListeners"(): void
 "registerTrackingListeners"(arg0: $Consumer$$Type<($ItemStackKey)>, arg1: $Consumer$$Type<($ItemStackKey)>, arg2: $Runnable$$Type, arg3: $Runnable$$Type): void
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getBlock"(arg0: $Level$$Type): $BlockContainerJS
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "isMutable"(): boolean
 "getSlots"(): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "getStackInSlot"(arg0: integer): $ItemStack
 "kjs$self"(): $IItemHandler
 "getSlots"(): integer
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getStackInSlot"(arg0: integer): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "clear"(): void
 "clear"(arg0: $ItemPredicate$$Type): void
 "find"(): integer
 "find"(arg0: $ItemPredicate$$Type): integer
 "count"(): integer
 "count"(arg0: $ItemPredicate$$Type): integer
 "getWidth"(): integer
 "getHeight"(): integer
 "setChanged"(): void
 "isEmpty"(): boolean
 "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
 "countNonEmpty"(): integer
 "getAllItems"(): $List<($ItemStack)>
 "asContainer"(): $Container
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITrackedContentsItemHandler$$Type = ($ITrackedContentsItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITrackedContentsItemHandler_ = $ITrackedContentsItemHandler$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.backpack.BackpackBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IControllableStorage, $IControllableStorage$$Type} from "net.p3pp3rf1y.sophisticatedcore.controller.IControllableStorage"
import {$ControllerBlockEntityBase, $ControllerBlockEntityBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.controller.ControllerBlockEntityBase"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IBackpackWrapper, $IBackpackWrapper$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.backpack.wrapper.IBackpackWrapper"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BackpackBlockEntity extends $BlockEntity implements $IControllableStorage {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "BACKPACK_DATA_TAG": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "onLoad"(): void
public static "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BackpackBlockEntity$$Type): void
public "setRemoved"(): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "setBackpack"(arg0: $ItemStack$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "refreshRenderState"(): void
public "getBackpackWrapper"(): $IBackpackWrapper
public "getStorageWrapper"(): $IStorageWrapper
public "getExternalItemHandler"(arg0: $Direction$$Type): $IItemHandler
public "onChunkUnloaded"(): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "removeControllerPos"(): void
public "unregisterController"(): void
public "registerController"(arg0: $ControllerBlockEntityBase$$Type): void
public "setControllerPos"(arg0: $BlockPos$$Type): void
public "getControllerPos"(): $Optional<($BlockPos)>
public "getStorageBlockPos"(): $BlockPos
public "getStorageBlockLevel"(): $Level
public "canConnectStorages"(): boolean
public "getExternalFluidHandler"(arg0: $Direction$$Type): $IFluidHandler
public "getExternalEnergyStorage"(arg0: $Direction$$Type): $IEnergyStorage
public "hasStorageData"(): boolean
public "changeSlots"(arg0: integer): void
public "tryToAddToController"(): void
public "updateEmptySlots"(): void
public "addToController"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
public "removeFromController"(): void
public "onInventoryInputOutputHandlerRefresh"(): void
public "registerInventoryStackListeners"(): void
public "registerWithControllerOnLoad"(): void
public "canBeConnected"(): boolean
public "runOnController"(arg0: $Level$$Type, arg1: $Consumer$$Type<($ControllerBlockEntityBase)>): void
public "loadControllerPos"(arg0: $CompoundTag$$Type): void
public "saveControllerPos"(arg0: $CompoundTag$$Type): void
public "addToAdjacentController"(): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
set "backpack"(value: $ItemStack$$Type)
get "backpackWrapper"(): $IBackpackWrapper
get "storageWrapper"(): $IStorageWrapper
get "updatePacket"(): $ClientboundBlockEntityDataPacket
set "controllerPos"(value: $BlockPos$$Type)
get "controllerPos"(): $Optional<($BlockPos)>
get "storageBlockPos"(): $BlockPos
get "storageBlockLevel"(): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackBlockEntity$$Type = ($BackpackBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackBlockEntity_ = $BackpackBlockEntity$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$AlchemyItemStackMatcher" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $AlchemyUpgradeWrapper$AlchemyItemStackMatcher {

 "test"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean, arg3: boolean, arg4: boolean): boolean

(arg0: $ItemStack, arg1: $ItemStack, arg2: boolean, arg3: boolean, arg4: boolean): boolean
}

export namespace $AlchemyUpgradeWrapper$AlchemyItemStackMatcher {
const probejs$$marker: never
}
export class $AlchemyUpgradeWrapper$AlchemyItemStackMatcher$$Static implements $AlchemyUpgradeWrapper$AlchemyItemStackMatcher {


 "test"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean, arg3: boolean, arg4: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeWrapper$AlchemyItemStackMatcher$$Type = ((arg0: $ItemStack, arg1: $ItemStack, arg2: boolean, arg3: boolean, arg4: boolean) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyUpgradeWrapper$AlchemyItemStackMatcher_ = $AlchemyUpgradeWrapper$AlchemyItemStackMatcher$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$AlchemyItemEntityMatcher" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher {

 "test"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: boolean, arg3: boolean): boolean

(arg0: $LivingEntity, arg1: $ItemStack, arg2: boolean, arg3: boolean): boolean
}

export namespace $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher {
const probejs$$marker: never
}
export class $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher$$Static implements $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher {


 "test"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: boolean, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher$$Type = ((arg0: $LivingEntity, arg1: $ItemStack, arg2: boolean, arg3: boolean) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher_ = $AlchemyUpgradeWrapper$AlchemyItemEntityMatcher$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.pickup.PickupUpgradeWrapper" {
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$IPickupResponseUpgrade, $IPickupResponseUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IPickupResponseUpgrade"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FilterLogic, $FilterLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IContentsFilteredUpgrade, $IContentsFilteredUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IContentsFilteredUpgrade"
import {$PickupUpgradeItem, $PickupUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.pickup.PickupUpgradeItem"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $PickupUpgradeWrapper extends $UpgradeWrapperBase<($PickupUpgradeWrapper), ($PickupUpgradeItem)> implements $IPickupResponseUpgrade, $IContentsFilteredUpgrade {

constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "pickup"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "getFilterLogic"(): $FilterLogic
get "filterLogic"(): $FilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PickupUpgradeWrapper$$Type = ($PickupUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PickupUpgradeWrapper_ = $PickupUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.ISlotLimitUpgrade" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISlotLimitUpgrade {

 "getSlotLimit"(): integer

(): integer
get "slotLimit"(): integer
}

export namespace $ISlotLimitUpgrade {
const probejs$$marker: never
}
export class $ISlotLimitUpgrade$$Static implements $ISlotLimitUpgrade {


 "getSlotLimit"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotLimitUpgrade$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlotLimitUpgrade_ = $ISlotLimitUpgrade$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.compat.create.MountedStorageBase" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Contraption, $Contraption$$Type} from "com.simibubi.create.content.contraptions.Contraption"
import {$MountedItemStorage, $MountedItemStorage$$Type} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorage"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SyncedMountedStorage, $SyncedMountedStorage$$Type} from "com.simibubi.create.api.contraption.storage.SyncedMountedStorage"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$MountedItemStorageType, $MountedItemStorageType$$Type} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorageType"

export class $MountedStorageBase extends $MountedItemStorage implements $SyncedMountedStorage {
static readonly "CODEC": $Codec<($MountedItemStorage)>
readonly "type": $MountedItemStorageType<($MountedItemStorage)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MountedItemStorage)>

constructor(arg0: $MountedItemStorageType$$Type<(any)>, arg1: $ItemStack$$Type)

public "onClose"(arg0: $Player$$Type, arg1: $Vec3$$Type): void
public "isDirty"(): boolean
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "getSlots"(): integer
public "afterSync"(arg0: $Contraption$$Type, arg1: $BlockPos$$Type): void
public "markClean"(): void
public "setStorageStack"(arg0: $ItemStack$$Type): void
public "getStorageStack"(): $ItemStack
public "getStorageWrapper"(): $IStorageWrapper
public "updateWithSyncedStorageStack"(arg0: $ItemStack$$Type, arg1: boolean): void
get "dirty"(): boolean
get "slots"(): integer
set "storageStack"(value: $ItemStack$$Type)
get "storageStack"(): $ItemStack
get "storageWrapper"(): $IStorageWrapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MountedStorageBase$$Type = ($MountedStorageBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MountedStorageBase_ = $MountedStorageBase$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.refill.RefillUpgradeWrapper$TargetSlot" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $RefillUpgradeWrapper$TargetSlot extends $Enum<($RefillUpgradeWrapper$TargetSlot)> implements $StringRepresentable {
static readonly "TOOLBAR_2": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_3": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_1": $RefillUpgradeWrapper$TargetSlot
static readonly "CODEC": $Codec<($RefillUpgradeWrapper$TargetSlot)>
static readonly "MAIN_HAND": $RefillUpgradeWrapper$TargetSlot
static readonly "ANY": $RefillUpgradeWrapper$TargetSlot
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($RefillUpgradeWrapper$TargetSlot)>
static readonly "TOOLBAR_8": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_9": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_6": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_7": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_4": $RefillUpgradeWrapper$TargetSlot
static readonly "OFF_HAND": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_5": $RefillUpgradeWrapper$TargetSlot


public "previous"(): $RefillUpgradeWrapper$TargetSlot
public "getDescription"(): $Component
public static "values"(): ($RefillUpgradeWrapper$TargetSlot)[]
public static "valueOf"(arg0: StringJS): $RefillUpgradeWrapper$TargetSlot
public "next"(): $RefillUpgradeWrapper$TargetSlot
public "getAcronym"(): $Component
public static "fromName"(arg0: StringJS): $RefillUpgradeWrapper$TargetSlot
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "description"(): $Component
get "acronym"(): $Component
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefillUpgradeWrapper$TargetSlot$$Type = (("any") | ("main_hand") | ("off_hand") | ("toolbar_1") | ("toolbar_2") | ("toolbar_3") | ("toolbar_4") | ("toolbar_5") | ("toolbar_6") | ("toolbar_7") | ("toolbar_8") | ("toolbar_9"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefillUpgradeWrapper$TargetSlot_ = $RefillUpgradeWrapper$TargetSlot$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.filter.FilterUpgradeWrapper" {
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$IIOFilterUpgrade, $IIOFilterUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IIOFilterUpgrade"
import {$FilterUpgradeItem, $FilterUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.filter.FilterUpgradeItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$FilterLogic, $FilterLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"
import {$IContentsFilteredUpgrade, $IContentsFilteredUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IContentsFilteredUpgrade"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Direction, $Direction$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.filter.Direction"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $FilterUpgradeWrapper extends $UpgradeWrapperBase<($FilterUpgradeWrapper), ($FilterUpgradeItem)> implements $IContentsFilteredUpgrade, $IIOFilterUpgrade {

constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "getDirection"(): $Direction
public "getInputFilter"(): $Optional<($FilterLogic)>
public "getFilterLogic"(): $FilterLogic
public "setDirection"(arg0: $Direction$$Type): void
public "getOutputFilter"(): $Optional<($FilterLogic)>
get "direction"(): $Direction
get "inputFilter"(): $Optional<($FilterLogic)>
get "filterLogic"(): $FilterLogic
set "direction"(value: $Direction$$Type)
get "outputFilter"(): $Optional<($FilterLogic)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterUpgradeWrapper$$Type = ($FilterUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterUpgradeWrapper_ = $FilterUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IOverflowResponseUpgrade" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FilterLogic, $FilterLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"

export interface $IOverflowResponseUpgrade {

 "getFilterLogic"(): $FilterLogic
 "worksInGui"(): boolean
 "onOverflow"(arg0: $ItemStack$$Type): $ItemStack
 "stackMatchesFilter"(arg0: $ItemStack$$Type): boolean
 "stackMatchesFilterStack"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
get "filterLogic"(): $FilterLogic
}

export namespace $IOverflowResponseUpgrade {
const probejs$$marker: never
}
export class $IOverflowResponseUpgrade$$Static implements $IOverflowResponseUpgrade {


 "getFilterLogic"(): $FilterLogic
 "worksInGui"(): boolean
 "onOverflow"(arg0: $ItemStack$$Type): $ItemStack
 "stackMatchesFilter"(arg0: $ItemStack$$Type): boolean
 "stackMatchesFilterStack"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOverflowResponseUpgrade$$Type = ($IOverflowResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOverflowResponseUpgrade_ = $IOverflowResponseUpgrade$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeHandler" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$IUpgradeWrapper, $IUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeWrapper"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$ItemStackHandler, $ItemStackHandler$$Type} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $UpgradeHandler extends $ItemStackHandler {
static readonly "UPGRADE_INVENTORY_TAG": StringJS

constructor(arg0: integer, arg1: $IStorageWrapper$$Type, arg2: $CompoundTag$$Type, arg3: $Runnable$$Type, arg4: $Runnable$$Type)

public "copyTo"(arg0: $UpgradeHandler$$Type): void
public "setSize"(arg0: integer): void
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "setPersistent"(arg0: boolean): void
public "hasUpgrade"<T extends $IUpgradeWrapper>(arg0: $UpgradeType$$Type<(T)>): boolean
public "saveInventory"(): void
public "getSlotWrappers"(): $Map<(integer), ($IUpgradeWrapper)>
public "getTypeWrappers"<T extends $IUpgradeWrapper>(arg0: $UpgradeType$$Type<(T)>): $List<(T)>
public "refreshWrappersThatImplementAndTypeWrappers"(): void
public "getWrappersThatImplementFromMainStorage"<T>(arg0: $Class$$Type<(T)>): $List<(T)>
public "increaseSize"(arg0: integer): void
public "refreshUpgradeWrappers"(): void
public "getWrappersThatImplement"<T>(arg0: $Class$$Type<(T)>): $List<(T)>
public "setRenderUpgradeItems"(): void
public "setRefreshCallBack"(arg0: $Runnable$$Type): void
public "removeRefreshCallback"(): void
public "getListOfWrappersThatImplement"<T>(arg0: $Class$$Type<(T)>): $List<(T)>
public "registerUpgradeDefaultsHandler"<T extends $IUpgradeWrapper>(arg0: $Class$$Type<(T)>, arg1: $Consumer$$Type<(T)>): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
set "size"(value: integer)
set "persistent"(value: boolean)
get "slotWrappers"(): $Map<(integer), ($IUpgradeWrapper)>
set "refreshCallBack"(value: $Runnable$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeHandler$$Type = ($UpgradeHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeHandler_ = $UpgradeHandler$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.feeding.FeedingUpgradeItem" {
import {$FeedingUpgradeWrapper, $FeedingUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.feeding.FeedingUpgradeWrapper"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $FeedingUpgradeItem extends $UpgradeItemBase<($FeedingUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($FeedingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IntSupplier$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($FeedingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($FeedingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeedingUpgradeItem$$Type = ($FeedingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeedingUpgradeItem_ = $FeedingUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryPartitioner" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$SlotRange, $SlotRange$$Type} from "net.p3pp3rf1y.sophisticatedcore.util.SlotRange"
import {$IInventoryPartHandler, $IInventoryPartHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.IInventoryPartHandler"
import {$MemorySettingsCategory, $MemorySettingsCategory$$Type} from "net.p3pp3rf1y.sophisticatedcore.settings.memory.MemorySettingsCategory"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$InventoryHandler, $InventoryHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryHandler"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"

export class $InventoryPartitioner {
static readonly "BASE_INDEXES_TAG": StringJS

constructor(arg0: $CompoundTag$$Type, arg1: $InventoryHandler$$Type, arg2: $Supplier$$Type<($MemorySettingsCategory$$Type)>)

public "isInfinite"(arg0: integer): boolean
public "onInit"(): void
public "serializeNBT"(): $CompoundTag
public "getNoItemIcon"(arg0: integer): $Pair<($ResourceLocation), ($ResourceLocation)>
public "getPartBySlot"(arg0: integer): $IInventoryPartHandler
public "getNoSortSlots"(): $Set<(integer)>
public "getFilterItems"(): $Map<($Item), ($Set<(integer)>)>
public "isFilterItem"(arg0: $Item$$Type): boolean
public "onSlotLimitChange"(): void
public "addInventoryPart"(arg0: integer, arg1: integer, arg2: $IInventoryPartHandler$$Type): void
public "removeInventoryPart"(arg0: integer): void
public "getFirstSpace"(arg0: integer): $Optional<($SlotRange)>
get "noSortSlots"(): $Set<(integer)>
get "filterItems"(): $Map<($Item), ($Set<(integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryPartitioner$$Type = ($InventoryPartitioner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryPartitioner_ = $InventoryPartitioner$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.everlasting.EverlastingUpgradeItem$Wrapper" {
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EverlastingUpgradeItem, $EverlastingUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.everlasting.EverlastingUpgradeItem"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $EverlastingUpgradeItem$Wrapper extends $UpgradeWrapperBase<($EverlastingUpgradeItem$Wrapper), ($EverlastingUpgradeItem)> {

constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "canBeDisabled"(): boolean
public "hideSettingsTab"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EverlastingUpgradeItem$Wrapper$$Type = ($EverlastingUpgradeItem$Wrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EverlastingUpgradeItem$Wrapper_ = $EverlastingUpgradeItem$Wrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.tank.TankUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$$Type} from "net.p3pp3rf1y.sophisticatedcore.common.gui.UpgradeSlotChangeResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$TankUpgradeConfig, $TankUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.tank.TankUpgradeConfig"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IUpgradeItem, $IUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem"
import {$TankUpgradeWrapper, $TankUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.tank.TankUpgradeWrapper"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $TankUpgradeItem extends $UpgradeItemBase<($TankUpgradeWrapper)> {
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($TankUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $TankUpgradeConfig$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($TankUpgradeWrapper)>
public "getBaseCapacity"(arg0: $IStorageWrapper$$Type): integer
public "getTankUpgradeConfig"(): $TankUpgradeConfig
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getTankCapacity"(arg0: $IStorageWrapper$$Type): integer
public "getAdjustedStackMultiplier"(arg0: $IStorageWrapper$$Type): double
public "getInventoryColumnsTaken"(): integer
public "checkExtraInsertConditions"(arg0: $ItemStack$$Type, arg1: $IStorageWrapper$$Type, arg2: boolean, arg3: $IUpgradeItem$$Type<(any)>): $UpgradeSlotChangeResult
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($TankUpgradeWrapper)>
get "tankUpgradeConfig"(): $TankUpgradeConfig
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "inventoryColumnsTaken"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankUpgradeItem$$Type = ($TankUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankUpgradeItem_ = $TankUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$UpgradeGroup, $UpgradeGroup$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"

export interface $IUpgradeCountLimitConfig {

 "getMaxUpgradesInGroupPerStorage"(arg0: StringJS, arg1: $UpgradeGroup$$Type): integer
 "getMaxUpgradesPerStorage"(arg0: StringJS, arg1: $ResourceLocation$$Type): integer
}

export namespace $IUpgradeCountLimitConfig {
const probejs$$marker: never
}
export class $IUpgradeCountLimitConfig$$Static implements $IUpgradeCountLimitConfig {


 "getMaxUpgradesInGroupPerStorage"(arg0: StringJS, arg1: $UpgradeGroup$$Type): integer
 "getMaxUpgradesPerStorage"(arg0: StringJS, arg1: $ResourceLocation$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeCountLimitConfig$$Type = ($IUpgradeCountLimitConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeCountLimitConfig_ = $IUpgradeCountLimitConfig$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpackscreateintegration.common.MountedBackpackContext" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$BackpackContext$ContextType, $BackpackContext$ContextType$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.common.gui.BackpackContext$ContextType"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"

export class $MountedBackpackContext {

constructor(arg0: integer, arg1: $BlockPos$$Type)

public "getDisplayName"(arg0: $ServerPlayer$$Type): $Component
public "toBuffer"(arg0: $FriendlyByteBuf$$Type): void
public static "fromBuffer"(arg0: $FriendlyByteBuf$$Type): $MountedBackpackContext
public "getType"(): $BackpackContext$ContextType
public "addToBuffer"(arg0: $FriendlyByteBuf$$Type): void
public "getLocalPos"(): $BlockPos
public "getSubBackpackContext"(arg0: integer): $MountedBackpackContext
public "getBackpackWrapper"(arg0: $Player$$Type): $IStorageWrapper
public "setBlockRenderDirty"(arg0: $Player$$Type): void
public "getContraptionEntityId"(): integer
public "getParentBackpackWrapper"(arg0: $Player$$Type): $Optional<($IStorageWrapper)>
public "getParentBackpackContext"(): $MountedBackpackContext
get "type"(): $BackpackContext$ContextType
get "localPos"(): $BlockPos
set "blockRenderDirty"(value: $Player$$Type)
get "contraptionEntityId"(): integer
get "parentBackpackContext"(): $MountedBackpackContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MountedBackpackContext$$Type = ($MountedBackpackContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MountedBackpackContext_ = $MountedBackpackContext$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.settings.MainSetting" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$TriConsumer, $TriConsumer$$Type} from "org.apache.logging.log4j.util.TriConsumer"

export class $MainSetting<T> {

constructor(arg0: StringJS, arg1: $BiFunction$$Type<($CompoundTag), (StringJS), ($Optional$$Type<(T)>)>, arg2: $TriConsumer$$Type<($CompoundTag$$Type), (StringJS), (T)>, arg3: T)

public "getDefaultValue"(): T
public "getName"(): StringJS
public "getValue"(arg0: $CompoundTag$$Type): $Optional<(T)>
public "setValue"(arg0: $CompoundTag$$Type, arg1: T): void
public "removeFrom"(arg0: $CompoundTag$$Type): void
get "defaultValue"(): T
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MainSetting$$Type<T> = ($MainSetting<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MainSetting_<T> = $MainSetting$$Type<(T)>;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryHandler" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ITrackedContentsItemHandler, $ITrackedContentsItemHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.ITrackedContentsItemHandler"
import {$ISlotTracker, $ISlotTracker$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.ISlotTracker"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$BooleanSupplier, $BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ItemStackKey, $ItemStackKey$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.ItemStackKey"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IntConsumer, $IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Set, $Set$$Type} from "java.util.Set"
import {$InventoryPartitioner, $InventoryPartitioner$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryPartitioner"
import {$ItemStackHandler, $ItemStackHandler$$Type} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $InventoryHandler extends $ItemStackHandler implements $ITrackedContentsItemHandler {
static readonly "INVENTORY_TAG": StringJS


public "setSize"(arg0: integer): void
public "isInfinite"(arg0: integer): boolean
public "onInit"(): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Player$$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "getNoItemIcon"(arg0: integer): $Pair<($ResourceLocation), ($ResourceLocation)>
public "getStackInSlot"(arg0: integer): $ItemStack
public "setSlotStack"(arg0: integer, arg1: $ItemStack$$Type): void
public "setPersistent"(arg0: boolean): void
public "addListener"(arg0: $IntConsumer$$Type): void
public "copyStacksTo"(arg0: $InventoryHandler$$Type): void
public "hasEmptySlots"(): boolean
public "saveInventory"(): void
public "getNoSortSlots"(): $Set<(integer)>
public "getFilterItems"(): $Set<($Item)>
public "isFilterItem"(arg0: $Item$$Type): boolean
public "getSlotTracker"(): $ISlotTracker
public "getSlotStack"(arg0: integer): $ItemStack
public "changeSlots"(arg0: integer): void
public "getFilterItem"(arg0: integer): $Item
public "clearListeners"(): void
public "getStackLimit"(arg0: integer, arg1: $ItemStack$$Type): integer
public "extractItemInternal"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getStackSizeMultiplier"(): double
public "onContentsChanged"(arg0: integer): void
public "validateSlotIndex"(arg0: integer): void
public "isSlotAccessible"(arg0: integer): boolean
public "getBaseStackLimit"(arg0: $ItemStack$$Type): integer
public "unregisterFilterItemsChangeListener"(): void
public "registerFilterItemsChangeListener"(arg0: $Consumer$$Type<($Set<($Item)>)>): void
public "getTrackedStacks"(): $Set<($ItemStackKey)>
public "getInternalSlotLimit"(arg0: integer): integer
public "onSlotFilterChanged"(arg0: integer): void
public "setBaseSlotLimit"(arg0: integer): void
public "getBaseSlotLimit"(): integer
public "insertItemOnlyToSlot"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "initFilterItems"(): void
public "onFilterItemsChanged"(): void
public "unregisterStackKeyListeners"(): void
public "registerTrackingListeners"(arg0: $Consumer$$Type<($ItemStackKey)>, arg1: $Consumer$$Type<($ItemStackKey)>, arg2: $Runnable$$Type, arg3: $Runnable$$Type): void
public "getInventoryPartitioner"(): $InventoryPartitioner
public "triggerOnChangeListeners"(arg0: integer): void
public "setShouldInsertIntoEmpty"(arg0: $BooleanSupplier$$Type): void
set "size"(value: integer)
set "persistent"(value: boolean)
get "noSortSlots"(): $Set<(integer)>
get "filterItems"(): $Set<($Item)>
get "slotTracker"(): $ISlotTracker
get "stackSizeMultiplier"(): double
get "trackedStacks"(): $Set<($ItemStackKey)>
set "baseSlotLimit"(value: integer)
get "baseSlotLimit"(): integer
get "inventoryPartitioner"(): $InventoryPartitioner
set "shouldInsertIntoEmpty"(value: $BooleanSupplier$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryHandler$$Type = ($InventoryHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryHandler_ = $InventoryHandler$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper" {
import {$AutoSmokingUpgradeItem, $AutoSmokingUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoSmokingUpgradeItem"
import {$SmokingRecipe, $SmokingRecipe$$Type} from "net.minecraft.world.item.crafting.SmokingRecipe"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AutoCookingUpgradeWrapper, $AutoCookingUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeWrapper"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper extends $AutoCookingUpgradeWrapper<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper), ($AutoSmokingUpgradeItem), ($SmokingRecipe)> {

constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper$$Type = ($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper_ = $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeWrapper$SmokingUpgradeWrapper" {
import {$SmokingRecipe, $SmokingRecipe$$Type} from "net.minecraft.world.item.crafting.SmokingRecipe"
import {$SmokingUpgradeItem, $SmokingUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.SmokingUpgradeItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CookingUpgradeWrapper, $CookingUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeWrapper"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $CookingUpgradeWrapper$SmokingUpgradeWrapper extends $CookingUpgradeWrapper<($CookingUpgradeWrapper$SmokingUpgradeWrapper), ($SmokingUpgradeItem), ($SmokingRecipe)> {

constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeWrapper$SmokingUpgradeWrapper$$Type = ($CookingUpgradeWrapper$SmokingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingUpgradeWrapper$SmokingUpgradeWrapper_ = $CookingUpgradeWrapper$SmokingUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.anvil.AnvilUpgradeWrapper" {
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$StatefulComponentItemHandler, $StatefulComponentItemHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.StatefulComponentItemHandler"
import {$AnvilUpgradeItem, $AnvilUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.anvil.AnvilUpgradeItem"

export class $AnvilUpgradeWrapper extends $UpgradeWrapperBase<($AnvilUpgradeWrapper), ($AnvilUpgradeItem)> {


public "getItemName"(): StringJS
public "setItemName"(arg0: StringJS): void
public "getInventory"(): $StatefulComponentItemHandler
public "canBeDisabled"(): boolean
public "setShiftClickIntoStorage"(arg0: boolean): void
public "shouldShiftClickIntoStorage"(): boolean
get "itemName"(): StringJS
set "itemName"(value: StringJS)
get "inventory"(): $StatefulComponentItemHandler
set "shiftClickIntoStorage"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnvilUpgradeWrapper$$Type = ($AnvilUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnvilUpgradeWrapper_ = $AnvilUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.xppump.XpPumpUpgradeConfig" {
import {$ModConfigSpec$IntValue, $ModConfigSpec$IntValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$IntValue"
import {$ModConfigSpec$BooleanValue, $ModConfigSpec$BooleanValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$BooleanValue"
import {$ModConfigSpec$Builder, $ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $XpPumpUpgradeConfig {
readonly "mendingOn": $ModConfigSpec$BooleanValue
readonly "maxXpPointsPerMending": $ModConfigSpec$IntValue

constructor(arg0: $ModConfigSpec$Builder$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XpPumpUpgradeConfig$$Type = ($XpPumpUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XpPumpUpgradeConfig_ = $XpPumpUpgradeConfig$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.crafting.RecipeWrapperSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$IWrapperRecipe, $IWrapperRecipe$$Type} from "net.p3pp3rf1y.sophisticatedcore.crafting.IWrapperRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $RecipeWrapperSerializer<T extends $Recipe<(any)>, R extends ($Recipe<(any)>) & ($IWrapperRecipe<(T)>)> implements $RecipeSerializer<(R)> {

constructor(arg0: $Function$$Type<(T), (R)>, arg1: $RecipeSerializer$$Type<(T)>)

public "codec"(): $MapCodec<(R)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (R)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeWrapperSerializer$$Type<T, R> = ($RecipeWrapperSerializer<(T), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeWrapperSerializer_<T, R> = $RecipeWrapperSerializer$$Type<(T), (R)>;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedTankUpgrade" {
import {$IRenderedTankUpgrade$TankRenderInfo, $IRenderedTankUpgrade$TankRenderInfo$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedTankUpgrade$TankRenderInfo"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $IRenderedTankUpgrade {

 "setTankRenderInfoUpdateCallback"(arg0: $Consumer$$Type<($IRenderedTankUpgrade$TankRenderInfo)>): void
 "forceUpdateTankRenderInfo"(): void
set "tankRenderInfoUpdateCallback"(value: $Consumer$$Type<($IRenderedTankUpgrade$TankRenderInfo)>)
}

export namespace $IRenderedTankUpgrade {
const probejs$$marker: never
}
export class $IRenderedTankUpgrade$$Static implements $IRenderedTankUpgrade {


 "setTankRenderInfoUpdateCallback"(arg0: $Consumer$$Type<($IRenderedTankUpgrade$TankRenderInfo)>): void
 "forceUpdateTankRenderInfo"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderedTankUpgrade$$Type = ($IRenderedTankUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderedTankUpgrade_ = $IRenderedTankUpgrade$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.crafting.SmithingBackpackUpgradeRecipe$Serializer" {
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$$Type} from "net.p3pp3rf1y.sophisticatedcore.crafting.RecipeWrapperSerializer"
import {$SmithingBackpackUpgradeRecipe, $SmithingBackpackUpgradeRecipe$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.crafting.SmithingBackpackUpgradeRecipe"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$SmithingTransformRecipe, $SmithingTransformRecipe$$Type} from "net.minecraft.world.item.crafting.SmithingTransformRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $SmithingBackpackUpgradeRecipe$Serializer extends $RecipeWrapperSerializer<($SmithingTransformRecipe), ($SmithingBackpackUpgradeRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingBackpackUpgradeRecipe$Serializer$$Type = ($SmithingBackpackUpgradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmithingBackpackUpgradeRecipe$Serializer_ = $SmithingBackpackUpgradeRecipe$Serializer$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.smithing.SmithingUpgradeWrapper" {
import {$SmithingUpgradeItem, $SmithingUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.smithing.SmithingUpgradeItem"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$StatefulComponentItemHandler, $StatefulComponentItemHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.StatefulComponentItemHandler"

export class $SmithingUpgradeWrapper extends $UpgradeWrapperBase<($SmithingUpgradeWrapper), ($SmithingUpgradeItem)> {


public "getInventory"(): $StatefulComponentItemHandler
public "canBeDisabled"(): boolean
public "setShiftClickIntoStorage"(arg0: boolean): void
public "shouldShiftClickIntoStorage"(): boolean
get "inventory"(): $StatefulComponentItemHandler
set "shiftClickIntoStorage"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingUpgradeWrapper$$Type = ($SmithingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmithingUpgradeWrapper_ = $SmithingUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.crafting.UpgradeNextTierRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$IWrapperRecipe, $IWrapperRecipe$$Type} from "net.p3pp3rf1y.sophisticatedcore.crafting.IWrapperRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $UpgradeNextTierRecipe extends $ShapedRecipe implements $IWrapperRecipe<($ShapedRecipe)> {
 "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: $ShapedRecipe$$Type)

public "getCompose"(): $Recipe<(any)>
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
get "compose"(): $Recipe<(any)>
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeNextTierRecipe$$Type = ($UpgradeNextTierRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeNextTierRecipe_ = $UpgradeNextTierRecipe$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType$IFactory" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeWrapper, $IUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeWrapper"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $UpgradeType$IFactory<T extends $IUpgradeWrapper> {

 "create"(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>): T

(arg0: $IStorageWrapper, arg1: $ItemStack, arg2: $Consumer<($ItemStack)>): T
}

export namespace $UpgradeType$IFactory {
const probejs$$marker: never
}
export class $UpgradeType$IFactory$$Static<T extends $IUpgradeWrapper> implements $UpgradeType$IFactory {


 "create"(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$IFactory$$Type<T> = ((arg0: $IStorageWrapper, arg1: $ItemStack, arg2: $Consumer<($ItemStack)>) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeType$IFactory_<T> = $UpgradeType$IFactory$$Type<(T)>;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.api.IBlockPickResponseUpgrade" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IBlockPickResponseUpgrade {

 "pickBlock"(arg0: $Player$$Type, arg1: $ItemStack$$Type): boolean

(arg0: $Player, arg1: $ItemStack): boolean
}

export namespace $IBlockPickResponseUpgrade {
const probejs$$marker: never
}
export class $IBlockPickResponseUpgrade$$Static implements $IBlockPickResponseUpgrade {


 "pickBlock"(arg0: $Player$$Type, arg1: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockPickResponseUpgrade$$Type = ((arg0: $Player, arg1: $ItemStack) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockPickResponseUpgrade_ = $IBlockPickResponseUpgrade$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.pump.PumpUpgradeConfig" {
import {$ModConfigSpec$DoubleValue, $ModConfigSpec$DoubleValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$DoubleValue"
import {$ModConfigSpec$IntValue, $ModConfigSpec$IntValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$IntValue"
import {$ModConfigSpec$Builder, $ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $PumpUpgradeConfig {
readonly "stackMultiplierRatio": $ModConfigSpec$DoubleValue
readonly "maxInputOutput": $ModConfigSpec$IntValue
readonly "filterSlots": $ModConfigSpec$IntValue

constructor(arg0: $ModConfigSpec$Builder$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpUpgradeConfig$$Type = ($PumpUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PumpUpgradeConfig_ = $PumpUpgradeConfig$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.crafting.BasicBackpackRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$IWrapperRecipe, $IWrapperRecipe$$Type} from "net.p3pp3rf1y.sophisticatedcore.crafting.IWrapperRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BasicBackpackRecipe extends $ShapedRecipe implements $IWrapperRecipe<($ShapedRecipe)> {
 "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: $ShapedRecipe$$Type)

public "getCompose"(): $Recipe<(any)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
get "compose"(): $Recipe<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicBackpackRecipe$$Type = ($BasicBackpackRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicBackpackRecipe_ = $BasicBackpackRecipe$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper" {
import {$BlastingRecipe, $BlastingRecipe$$Type} from "net.minecraft.world.item.crafting.BlastingRecipe"
import {$AutoBlastingUpgradeItem, $AutoBlastingUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoBlastingUpgradeItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AutoCookingUpgradeWrapper, $AutoCookingUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeWrapper"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper extends $AutoCookingUpgradeWrapper<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper), ($AutoBlastingUpgradeItem), ($BlastingRecipe)> {

constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper$$Type = ($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper_ = $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.settings.memory.MemorySettingsCategory" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$InventoryHandler, $InventoryHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryHandler"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ISettingsCategory, $ISettingsCategory$$Type} from "net.p3pp3rf1y.sophisticatedcore.settings.ISettingsCategory"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $MemorySettingsCategory implements $ISettingsCategory<($MemorySettingsCategory)> {
static readonly "NAME": StringJS

constructor(arg0: $Supplier$$Type<($InventoryHandler$$Type)>, arg1: $CompoundTag$$Type, arg2: $Consumer$$Type<($CompoundTag)>)

public "copyTo"(arg0: $ISettingsCategory$$Type<(any)>, arg1: integer, arg2: integer): void
public "copyTo"(arg0: $MemorySettingsCategory$$Type, arg1: integer, arg2: integer): void
public "setFilter"(arg0: integer, arg1: $ItemStack$$Type): void
public "selectSlot"(arg0: integer): void
public "getSlotIndexes"(): $Set<(integer)>
public "isSlotSelected"(arg0: integer): boolean
public "matchesFilter"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "matchesFilter"(arg0: $ItemStack$$Type): boolean
public "overwriteWith"(arg0: $ISettingsCategory$$Type<(any)>): void
public "overwriteWith"(arg0: $MemorySettingsCategory$$Type): void
public "reloadFrom"(arg0: $CompoundTag$$Type): void
public "registerListeners"(arg0: $Consumer$$Type<($Item)>, arg1: $Consumer$$Type<($Item)>, arg2: $Consumer$$Type<(integer)>, arg3: $Consumer$$Type<(integer)>): void
public "unregisterListeners"(): void
public "getSlotFilterStack"(arg0: integer, arg1: boolean): $Optional<($ItemStack)>
public "deleteSlotSettingsFrom"(arg0: integer): void
public "isLargerThanNumberOfSlots"(arg0: integer): boolean
public "setIgnoreNbt"(arg0: boolean): void
public "ignoresNbt"(): boolean
public "selectSlots"(arg0: integer, arg1: integer): void
public "unselectSlot"(arg0: integer): void
public "unselectAllSlots"(): void
public "getFilterItemSlots"(): $Map<($Item), ($Set<(integer)>)>
public "getFilterStackSlots"(): $Map<(integer), ($Set<(integer)>)>
get "slotIndexes"(): $Set<(integer)>
set "ignoreNbt"(value: boolean)
get "filterItemSlots"(): $Map<($Item), ($Set<(integer)>)>
get "filterStackSlots"(): $Map<(integer), ($Set<(integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemorySettingsCategory$$Type = ($MemorySettingsCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemorySettingsCategory_ = $MemorySettingsCategory$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.PrimaryMatch" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $PrimaryMatch extends $Enum<($PrimaryMatch)> implements $StringRepresentable {
static readonly "ITEM": $PrimaryMatch
static readonly "MOD": $PrimaryMatch
static readonly "CODEC": $Codec<($PrimaryMatch)>
static readonly "TAGS": $PrimaryMatch
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($PrimaryMatch)>


public static "values"(): ($PrimaryMatch)[]
public static "valueOf"(arg0: StringJS): $PrimaryMatch
public "next"(): $PrimaryMatch
public static "fromName"(arg0: StringJS): $PrimaryMatch
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
export type $PrimaryMatch$$Type = (("item") | ("mod") | ("tags"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrimaryMatch_ = $PrimaryMatch$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.everlasting.EverlastingUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$EverlastingUpgradeItem$Wrapper, $EverlastingUpgradeItem$Wrapper$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.everlasting.EverlastingUpgradeItem$Wrapper"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $EverlastingUpgradeItem extends $UpgradeItemBase<($EverlastingUpgradeItem$Wrapper)> {
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($EverlastingUpgradeItem$Wrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getType"(): $UpgradeType<($EverlastingUpgradeItem$Wrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($EverlastingUpgradeItem$Wrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EverlastingUpgradeItem$$Type = ($EverlastingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EverlastingUpgradeItem_ = $EverlastingUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpackscreateintegration.backpack.MountedSophisticatedBackpack" {
import {$MountedBackpackContext, $MountedBackpackContext$$Type} from "net.p3pp3rf1y.sophisticatedbackpackscreateintegration.common.MountedBackpackContext"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BackpackBlockEntity, $BackpackBlockEntity$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.backpack.BackpackBlockEntity"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Contraption, $Contraption$$Type} from "com.simibubi.create.content.contraptions.Contraption"
import {$MountedItemStorage, $MountedItemStorage$$Type} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorage"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$$Type} from "com.simibubi.create.content.contraptions.AbstractContraptionEntity"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MountedStorageBase, $MountedStorageBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.compat.create.MountedStorageBase"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$MountedItemStorageType, $MountedItemStorageType$$Type} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorageType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MountedSophisticatedBackpack extends $MountedStorageBase {
static readonly "CODEC": $MapCodec<($MountedSophisticatedBackpack)>
readonly "type": $MountedItemStorageType<($MountedItemStorage)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MountedItemStorage)>

constructor(arg0: $ItemStack$$Type)

public "tick"(): void
public "setLevel"(arg0: $Level$$Type): void
public static "from"(arg0: $BackpackBlockEntity$$Type): $MountedSophisticatedBackpack
public "unmount"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type): void
public "setPosition"(arg0: $Vec3$$Type): void
public static "openMenu"(arg0: $ServerPlayer$$Type, arg1: $MountedBackpackContext$$Type): $OptionalInt
public "setLocalPos"(arg0: $BlockPos$$Type): void
public "clearNbt"(): void
public "setStorageStack"(arg0: $ItemStack$$Type): void
public "setContraptionEntity"(arg0: $Entity$$Type): void
public "getStorageWrapper"(): $IStorageWrapper
public "setBlockRenderDirty"(): void
public "handleInteraction"(arg0: $ServerPlayer$$Type, arg1: $Contraption$$Type, arg2: $StructureTemplate$StructureBlockInfo$$Type): boolean
public "initEntityLevelAndPositions"(arg0: $AbstractContraptionEntity$$Type, arg1: $BlockPos$$Type, arg2: $Level$$Type, arg3: $Vec3$$Type): void
public "sendStorageUpdatePayload"(): void
public "updateWithSyncedStorageStack"(arg0: $ItemStack$$Type, arg1: boolean): void
set "level"(value: $Level$$Type)
set "position"(value: $Vec3$$Type)
set "localPos"(value: $BlockPos$$Type)
set "storageStack"(value: $ItemStack$$Type)
set "contraptionEntity"(value: $Entity$$Type)
get "storageWrapper"(): $IStorageWrapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MountedSophisticatedBackpack$$Type = ($MountedSophisticatedBackpack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MountedSophisticatedBackpack_ = $MountedSophisticatedBackpack$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.battery.BatteryUpgradeConfig" {
import {$ModConfigSpec$DoubleValue, $ModConfigSpec$DoubleValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$DoubleValue"
import {$ModConfigSpec$IntValue, $ModConfigSpec$IntValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$IntValue"
import {$ModConfigSpec$Builder, $ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $BatteryUpgradeConfig {
readonly "stackMultiplierRatio": $ModConfigSpec$DoubleValue
readonly "maxInputOutput": $ModConfigSpec$IntValue
readonly "energyPerSlotRow": $ModConfigSpec$IntValue

constructor(arg0: $ModConfigSpec$Builder$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BatteryUpgradeConfig$$Type = ($BatteryUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BatteryUpgradeConfig_ = $BatteryUpgradeConfig$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.toolswapper.ToolSwapperUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ToolSwapperUpgradeWrapper, $ToolSwapperUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.toolswapper.ToolSwapperUpgradeWrapper"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $ToolSwapperUpgradeItem extends $UpgradeItemBase<($ToolSwapperUpgradeWrapper)> {
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: boolean, arg1: boolean)

public "getType"(): $UpgradeType<($ToolSwapperUpgradeWrapper)>
public "hasSettingsTab"(): boolean
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "shouldSwapToolOnKeyPress"(): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($ToolSwapperUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolSwapperUpgradeItem$$Type = ($ToolSwapperUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolSwapperUpgradeItem_ = $ToolSwapperUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.restock.RestockUpgradeItem" {
import {$RestockUpgradeWrapper, $RestockUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.restock.RestockUpgradeWrapper"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $RestockUpgradeItem extends $UpgradeItemBase<($RestockUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IntSupplier$$Type)

public "getType"(): $UpgradeType<($RestockUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($RestockUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RestockUpgradeItem$$Type = ($RestockUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RestockUpgradeItem_ = $RestockUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.api.IBlockToolSwapUpgrade" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IBlockToolSwapUpgrade {

 "onBlockInteract"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): boolean
 "canProcessBlockInteract"(): boolean

(arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $Player): boolean
}

export namespace $IBlockToolSwapUpgrade {
const probejs$$marker: never
}
export class $IBlockToolSwapUpgrade$$Static implements $IBlockToolSwapUpgrade {


 "onBlockInteract"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): boolean
 "canProcessBlockInteract"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockToolSwapUpgrade$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $Player) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockToolSwapUpgrade_ = $IBlockToolSwapUpgrade$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.filter.Direction" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $Direction extends $Enum<($Direction)> implements $StringRepresentable {
static readonly "INPUT": $Direction
static readonly "CODEC": $Codec<($Direction)>
static readonly "OUTPUT": $Direction
static readonly "BOTH": $Direction
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Direction)>


public static "values"(): ($Direction)[]
public static "valueOf"(arg0: StringJS): $Direction
public "next"(): $Direction
public static "fromName"(arg0: StringJS): $Direction
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
export type $Direction$$Type = (("both") | ("input") | ("output"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Direction_ = $Direction$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.pickup.PickupUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$PickupUpgradeWrapper, $PickupUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.pickup.PickupUpgradeWrapper"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $PickupUpgradeItem extends $UpgradeItemBase<($PickupUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($PickupUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IntSupplier$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($PickupUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($PickupUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PickupUpgradeItem$$Type = ($PickupUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PickupUpgradeItem_ = $PickupUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeWrapper, $IUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeWrapper"
import {$UpgradeType$IFactory, $UpgradeType$IFactory$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType$IFactory"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $UpgradeType<T extends $IUpgradeWrapper> {

constructor(arg0: $UpgradeType$IFactory$$Type<(T)>)

public "create"(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$$Type<T> = ($UpgradeType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeType_<T> = $UpgradeType$$Type<(T)>;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.jukebox.RepeatMode" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $RepeatMode extends $Enum<($RepeatMode)> implements $StringRepresentable {
static readonly "ALL": $RepeatMode
static readonly "NO": $RepeatMode
static readonly "CODEC": $Codec<($RepeatMode)>
static readonly "ONE": $RepeatMode
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($RepeatMode)>


public static "values"(): ($RepeatMode)[]
public static "valueOf"(arg0: StringJS): $RepeatMode
public "next"(): $RepeatMode
public static "fromName"(arg0: StringJS): $RepeatMode
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
export type $RepeatMode$$Type = (("all") | ("one") | ("no"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepeatMode_ = $RepeatMode$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.pump.PumpUpgradeWrapper" {
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$PumpUpgradeItem, $PumpUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.pump.PumpUpgradeItem"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ITickableUpgrade, $ITickableUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$FluidFilterLogic, $FluidFilterLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.pump.FluidFilterLogic"

export class $PumpUpgradeWrapper extends $UpgradeWrapperBase<($PumpUpgradeWrapper), ($PumpUpgradeItem)> implements $ITickableUpgrade {


public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "setIsInput"(arg0: boolean): void
public "isInput"(): boolean
public "setInteractWithHand"(arg0: boolean): void
public "setInteractWithWorld"(arg0: boolean): void
public "shouldInteractWithHand"(): boolean
public "getFluidFilterLogic"(): $FluidFilterLogic
public "shouldInteractWithFluidHandlers"(): boolean
public "setInteractWithFluidHandlers"(arg0: boolean): void
public "shouldInteractWithWorld"(): boolean
public "getAdjustedStackMultiplier"(arg0: $IStorageWrapper$$Type): integer
get "input"(): boolean
set "interactWithHand"(value: boolean)
set "interactWithWorld"(value: boolean)
get "fluidFilterLogic"(): $FluidFilterLogic
set "interactWithFluidHandlers"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpUpgradeWrapper$$Type = ($PumpUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PumpUpgradeWrapper_ = $PumpUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.api.ISlotChangeResponseUpgrade" {
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export interface $ISlotChangeResponseUpgrade {

 "onSlotChange"(arg0: $IItemHandler$$Type, arg1: integer): void

(arg0: $IItemHandler, arg1: integer): void
}

export namespace $ISlotChangeResponseUpgrade {
const probejs$$marker: never
}
export class $ISlotChangeResponseUpgrade$$Static implements $ISlotChangeResponseUpgrade {


 "onSlotChange"(arg0: $IItemHandler$$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotChangeResponseUpgrade$$Type = ((arg0: $IItemHandler, arg1: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlotChangeResponseUpgrade_ = $ISlotChangeResponseUpgrade$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$FilterLogic$ObservableFilterItemStackHandler, $FilterLogic$ObservableFilterItemStackHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic$ObservableFilterItemStackHandler"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$PrimaryMatch, $PrimaryMatch$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.PrimaryMatch"
import {$FilterAttributes, $FilterAttributes$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterAttributes"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $FilterLogic {

constructor(arg0: $ItemStack$$Type, arg1: $Consumer$$Type<($ItemStack)>, arg2: integer, arg3: $DeferredHolder$$Type<($DataComponentType$$Type<(any)>), ($DataComponentType$$Type<($FilterAttributes$$Type)>)>)
constructor(arg0: $ItemStack$$Type, arg1: $Consumer$$Type<($ItemStack)>, arg2: integer, arg3: $Predicate$$Type<($ItemStack)>, arg4: $DeferredHolder$$Type<($DataComponentType$$Type<(any)>), ($DataComponentType$$Type<($FilterAttributes$$Type)>)>)

public "addTag"(arg0: $TagKey$$Type<($Item)>): void
public "isAllowList"(): boolean
public "setMatchAnyTag"(arg0: boolean): void
public "setAllowList"(arg0: boolean): void
public "getTagKeys"(): $Set<($TagKey<($Item)>)>
public "removeTagName"(arg0: $TagKey$$Type<($Item)>): void
public "matchesFilter"(arg0: $ItemStack$$Type): boolean
public "getPrimaryMatch"(): $PrimaryMatch
public "getFilterHandler"(): $FilterLogic$ObservableFilterItemStackHandler
public "shouldMatchAnyTag"(): boolean
public "shouldMatchDurability"(): boolean
public "shouldMatchComponents"(): boolean
public "setPrimaryMatch"(arg0: $PrimaryMatch$$Type): void
public "setMatchComponents"(arg0: boolean): void
public "setMatchDurability"(arg0: boolean): void
public "stackMatchesFilter"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
public "setAllowByDefault"(arg0: boolean): void
public "getAttributesComponent"(): $DeferredHolder<($DataComponentType<(any)>), ($DataComponentType<($FilterAttributes)>)>
public "setEmptyAllowListMatchesEverything"(): void
get "allowList"(): boolean
set "matchAnyTag"(value: boolean)
set "allowList"(value: boolean)
get "tagKeys"(): $Set<($TagKey<($Item)>)>
get "primaryMatch"(): $PrimaryMatch
get "filterHandler"(): $FilterLogic$ObservableFilterItemStackHandler
set "primaryMatch"(value: $PrimaryMatch$$Type)
set "matchComponents"(value: boolean)
set "matchDurability"(value: boolean)
set "allowByDefault"(value: boolean)
get "attributesComponent"(): $DeferredHolder<($DataComponentType<(any)>), ($DataComponentType<($FilterAttributes)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterLogic$$Type = ($FilterLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterLogic_ = $FilterLogic$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.crafting.CraftingUpgradeWrapper" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$CraftingUpgradeItem, $CraftingUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.crafting.CraftingUpgradeItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$StatefulComponentItemHandler, $StatefulComponentItemHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.StatefulComponentItemHandler"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $CraftingUpgradeWrapper extends $UpgradeWrapperBase<($CraftingUpgradeWrapper), ($CraftingUpgradeItem)> {

constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "getInventory"(): $StatefulComponentItemHandler
public "canBeDisabled"(): boolean
public "extractFromStorageOrPlayer"(arg0: $Player$$Type, arg1: $ItemStack$$Type): boolean
public "insertIntoStorageOrPlayer"(arg0: $Player$$Type, arg1: $ItemStack$$Type): boolean
public "setShiftClickIntoStorage"(arg0: boolean): void
public "shouldShiftClickIntoStorage"(): boolean
public "shouldRefillCraftingGridNBT"(): boolean
public "setRefillCraftingGridNBT"(arg0: boolean): void
get "inventory"(): $StatefulComponentItemHandler
set "shiftClickIntoStorage"(value: boolean)
set "refillCraftingGridNBT"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingUpgradeWrapper$$Type = ($CraftingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingUpgradeWrapper_ = $CraftingUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.api.IStorageFluidHandler" {
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$IFluidHandlerItem, $IFluidHandlerItem$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandlerItem"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export interface $IStorageFluidHandler extends $IFluidHandlerItem {

 "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type, arg2: boolean): $FluidStack
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type, arg2: boolean): $FluidStack
 "drain"(arg0: $TagKey$$Type<($Fluid)>, arg1: integer, arg2: $IFluidHandler$FluidAction$$Type, arg3: boolean): $FluidStack
 "fill"(arg0: $TagKey$$Type<($Fluid)>, arg1: integer, arg2: $Fluid$$Type, arg3: $IFluidHandler$FluidAction$$Type): integer
 "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type, arg2: boolean): integer
 "fill"(arg0: $TagKey$$Type<($Fluid)>, arg1: integer, arg2: $Fluid$$Type, arg3: $IFluidHandler$FluidAction$$Type, arg4: boolean): integer
 "getContainer"(): $ItemStack
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
 "getTanks"(): integer
 "getFluidInTank"(arg0: integer): $FluidStack
 "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
 "getTankCapacity"(arg0: integer): integer
get "container"(): $ItemStack
get "tanks"(): integer
}

export namespace $IStorageFluidHandler {
const probejs$$marker: never
}
export class $IStorageFluidHandler$$Static implements $IStorageFluidHandler {


 "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type, arg2: boolean): $FluidStack
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type, arg2: boolean): $FluidStack
 "drain"(arg0: $TagKey$$Type<($Fluid)>, arg1: integer, arg2: $IFluidHandler$FluidAction$$Type, arg3: boolean): $FluidStack
 "fill"(arg0: $TagKey$$Type<($Fluid)>, arg1: integer, arg2: $Fluid$$Type, arg3: $IFluidHandler$FluidAction$$Type): integer
 "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type, arg2: boolean): integer
 "fill"(arg0: $TagKey$$Type<($Fluid)>, arg1: integer, arg2: $Fluid$$Type, arg3: $IFluidHandler$FluidAction$$Type, arg4: boolean): integer
 "getContainer"(): $ItemStack
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
 "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
 "getTanks"(): integer
 "getFluidInTank"(arg0: integer): $FluidStack
 "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
 "getTankCapacity"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageFluidHandler$$Type = ($IStorageFluidHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageFluidHandler_ = $IStorageFluidHandler$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.api.IInventoryWrapperUpgrade" {
import {$ITrackedContentsItemHandler, $ITrackedContentsItemHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.ITrackedContentsItemHandler"

export interface $IInventoryWrapperUpgrade {

 "wrapInventory"(arg0: $ITrackedContentsItemHandler$$Type): $ITrackedContentsItemHandler

(arg0: $ITrackedContentsItemHandler): $ITrackedContentsItemHandler$$Type
}

export namespace $IInventoryWrapperUpgrade {
const probejs$$marker: never
}
export class $IInventoryWrapperUpgrade$$Static implements $IInventoryWrapperUpgrade {


 "wrapInventory"(arg0: $ITrackedContentsItemHandler$$Type): $ITrackedContentsItemHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventoryWrapperUpgrade$$Type = ((arg0: $ITrackedContentsItemHandler) => $ITrackedContentsItemHandler$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInventoryWrapperUpgrade_ = $IInventoryWrapperUpgrade$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingLogic" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$$Type} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$CookingLogic$CookingComponentItemHandler, $CookingLogic$CookingComponentItemHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingLogic$CookingComponentItemHandler"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$CookingUpgradeConfig, $CookingUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeConfig"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $CookingLogic<T extends $AbstractCookingRecipe> {
static readonly "COOK_INPUT_SLOT": integer
static readonly "COOK_OUTPUT_SLOT": integer
static readonly "RECIPES_USED_CODEC": $Codec<($Map<($ResourceLocation), (integer)>)>
static readonly "RECIPES_USED_STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Map<($ResourceLocation), (integer)>)>
static readonly "FUEL_SLOT": integer

constructor(arg0: $ItemStack$$Type, arg1: $Consumer$$Type<($ItemStack)>, arg2: $CookingUpgradeConfig$$Type, arg3: $RecipeType$$Type<(T)>, arg4: float)
constructor(arg0: $ItemStack$$Type, arg1: $Consumer$$Type<($ItemStack)>, arg2: $Predicate$$Type<($ItemStack)>, arg3: $Predicate$$Type<($ItemStack)>, arg4: $CookingUpgradeConfig$$Type, arg5: $RecipeType$$Type<(T)>, arg6: float)

public "tick"(arg0: $Level$$Type): boolean
public "pause"(): void
public "isBurning"(arg0: $Level$$Type): boolean
public "isCooking"(): boolean
public "getCookOutput"(): $ItemStack
public "getCookInput"(): $ItemStack
public "setCookInput"(arg0: $ItemStack$$Type): void
public "setFuel"(arg0: $ItemStack$$Type): void
public "getFuel"(): $ItemStack
public "getCookingInventory"(): $CookingLogic$CookingComponentItemHandler<>
public "getStoredExperience"(): float
public "drainStoredExperience"(arg0: float): void
public "getRecipesToAwardAndPopExperience"(arg0: $ServerLevel$$Type, arg1: $Vec3$$Type): $List<($RecipeHolder<(any)>)>
public "awardUsedRecipesAndPopExperience"(arg0: $ServerPlayer$$Type): void
public "getBurnTimeFinish"(): long
public "getCookTimeFinish"(): long
public "getCookTimeTotal"(): integer
public "getBurnTimeTotal"(): integer
get "cooking"(): boolean
get "cookOutput"(): $ItemStack
get "cookInput"(): $ItemStack
set "cookInput"(value: $ItemStack$$Type)
set "fuel"(value: $ItemStack$$Type)
get "fuel"(): $ItemStack
get "cookingInventory"(): $CookingLogic$CookingComponentItemHandler<>
get "storedExperience"(): float
get "burnTimeFinish"(): long
get "cookTimeFinish"(): long
get "cookTimeTotal"(): integer
get "burnTimeTotal"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingLogic$$Type<T> = ($CookingLogic<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingLogic_<T> = $CookingLogic$$Type<(T)>;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.util.SlotRange" {
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SlotRange extends $Record {

constructor(firstSlot: integer, numberOfSlots: integer)

public "firstSlot"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isInRange"(arg0: integer): boolean
public "numberOfSlots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotRange$$Type = ({"numberOfSlots"?: integer, "firstSlot"?: integer}) | ([numberOfSlots?: integer, firstSlot?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotRange_ = $SlotRange$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.api.IFluidHandlerWrapperUpgrade" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IStorageFluidHandler, $IStorageFluidHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageFluidHandler"

export interface $IFluidHandlerWrapperUpgrade {

 "wrapHandler"(arg0: $IStorageFluidHandler$$Type, arg1: $ItemStack$$Type): $IStorageFluidHandler

(arg0: $IStorageFluidHandler, arg1: $ItemStack): $IStorageFluidHandler$$Type
}

export namespace $IFluidHandlerWrapperUpgrade {
const probejs$$marker: never
}
export class $IFluidHandlerWrapperUpgrade$$Static implements $IFluidHandlerWrapperUpgrade {


 "wrapHandler"(arg0: $IStorageFluidHandler$$Type, arg1: $ItemStack$$Type): $IStorageFluidHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidHandlerWrapperUpgrade$$Type = ((arg0: $IStorageFluidHandler, arg1: $ItemStack) => $IStorageFluidHandler$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidHandlerWrapperUpgrade_ = $IFluidHandlerWrapperUpgrade$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.toolswapper.ToolSwapMode" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $ToolSwapMode extends $Enum<($ToolSwapMode)> implements $StringRepresentable {
static readonly "ONLY_TOOLS": $ToolSwapMode
static readonly "CODEC": $Codec<($ToolSwapMode)>
static readonly "NO_SWAP": $ToolSwapMode
static readonly "ANY": $ToolSwapMode
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ToolSwapMode)>


public static "values"(): ($ToolSwapMode)[]
public static "valueOf"(arg0: StringJS): $ToolSwapMode
public "next"(): $ToolSwapMode
public static "fromName"(arg0: StringJS): $ToolSwapMode
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
export type $ToolSwapMode$$Type = (("name") | ("onlytools") | ("noswap"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolSwapMode_ = $ToolSwapMode$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeWrapper" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IUpgradeWrapper {

 "isEnabled"(): boolean
 "setEnabled"(arg0: boolean): void
 "canBeDisabled"(): boolean
 "onAdded"(): void
 "getUpgradeStack"(): $ItemStack
 "hideSettingsTab"(): boolean
 "onBeforeRemoved"(): void
get "enabled"(): boolean
set "enabled"(value: boolean)
get "upgradeStack"(): $ItemStack
}

export namespace $IUpgradeWrapper {
const probejs$$marker: never
}
export class $IUpgradeWrapper$$Static implements $IUpgradeWrapper {


 "isEnabled"(): boolean
 "setEnabled"(arg0: boolean): void
 "canBeDisabled"(): boolean
 "onAdded"(): void
 "getUpgradeStack"(): $ItemStack
 "hideSettingsTab"(): boolean
 "onBeforeRemoved"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeWrapper$$Type = ($IUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeWrapper_ = $IUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.inception.InceptionUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$$Type} from "net.p3pp3rf1y.sophisticatedcore.common.gui.UpgradeSlotChangeResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"
import {$InceptionUpgradeWrapper, $InceptionUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.inception.InceptionUpgradeWrapper"

export class $InceptionUpgradeItem extends $UpgradeItemBase<($InceptionUpgradeWrapper)> {
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($InceptionUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getType"(): $UpgradeType<($InceptionUpgradeWrapper)>
public "canSwapUpgradeFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: $IStorageWrapper$$Type, arg3: boolean): $UpgradeSlotChangeResult
public "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$$Type, arg1: boolean): $UpgradeSlotChangeResult
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "canAddUpgradeTo"(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: boolean, arg3: boolean): $UpgradeSlotChangeResult
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($InceptionUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InceptionUpgradeItem$$Type = ($InceptionUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InceptionUpgradeItem_ = $InceptionUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.battery.BatteryUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$$Type} from "net.p3pp3rf1y.sophisticatedcore.common.gui.UpgradeSlotChangeResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$BatteryUpgradeWrapper, $BatteryUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.battery.BatteryUpgradeWrapper"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IUpgradeItem, $IUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"
import {$BatteryUpgradeConfig, $BatteryUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.battery.BatteryUpgradeConfig"

export class $BatteryUpgradeItem extends $UpgradeItemBase<($BatteryUpgradeWrapper)> {
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($BatteryUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $BatteryUpgradeConfig$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($BatteryUpgradeWrapper)>
public "getMaxEnergyBase"(arg0: $IStorageWrapper$$Type): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getMaxEnergyStored"(arg0: $IStorageWrapper$$Type): integer
public "getBatteryUpgradeConfig"(): $BatteryUpgradeConfig
public "getAdjustedStackMultiplier"(arg0: $IStorageWrapper$$Type): double
public "getInventoryColumnsTaken"(): integer
public "checkExtraInsertConditions"(arg0: $ItemStack$$Type, arg1: $IStorageWrapper$$Type, arg2: boolean, arg3: $IUpgradeItem$$Type<(any)>): $UpgradeSlotChangeResult
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($BatteryUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "batteryUpgradeConfig"(): $BatteryUpgradeConfig
get "inventoryColumnsTaken"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BatteryUpgradeItem$$Type = ($BatteryUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BatteryUpgradeItem_ = $BatteryUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.renderdata.UpgradeRenderDataType" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$IUpgradeRenderData, $IUpgradeRenderData$$Type} from "net.p3pp3rf1y.sophisticatedcore.renderdata.IUpgradeRenderData"

export class $UpgradeRenderDataType<T extends $IUpgradeRenderData> {

constructor(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $Function$$Type<($CompoundTag), (T)>)

public "getName"(): StringJS
public "cast"(arg0: $IUpgradeRenderData$$Type): $Optional<(T)>
public "deserialize"(arg0: $CompoundTag$$Type): T
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeRenderDataType$$Type<T> = ($UpgradeRenderDataType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeRenderDataType_<T> = $UpgradeRenderDataType$$Type<(T)>;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.api.IBlockClickResponseUpgrade" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IBlockClickResponseUpgrade {

 "onBlockClick"(arg0: $Player$$Type, arg1: $BlockPos$$Type): boolean

(arg0: $Player, arg1: $BlockPos): boolean
}

export namespace $IBlockClickResponseUpgrade {
const probejs$$marker: never
}
export class $IBlockClickResponseUpgrade$$Static implements $IBlockClickResponseUpgrade {


 "onBlockClick"(arg0: $Player$$Type, arg1: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockClickResponseUpgrade$$Type = ((arg0: $Player, arg1: $BlockPos) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockClickResponseUpgrade_ = $IBlockClickResponseUpgrade$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoSmeltingUpgradeItem" {
import {$IAutoCookingUpgradeItem, $IAutoCookingUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.IAutoCookingUpgradeItem"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UpgradeGroup, $UpgradeGroup$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper, $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AutoCookingUpgradeConfig, $AutoCookingUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeConfig"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $AutoSmeltingUpgradeItem extends $UpgradeItemBase<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper)> implements $IAutoCookingUpgradeItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $AutoCookingUpgradeConfig$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getUpgradeGroup"(): $UpgradeGroup
public "getAutoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeGroup"(): $UpgradeGroup
get "autoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoSmeltingUpgradeItem$$Type = ($AutoSmeltingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoSmeltingUpgradeItem_ = $AutoSmeltingUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IPickupResponseUpgrade" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export interface $IPickupResponseUpgrade {

 "pickup"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack

(arg0: $Level, arg1: $ItemStack, arg2: boolean): $ItemStack$$Type
}

export namespace $IPickupResponseUpgrade {
const probejs$$marker: never
}
export class $IPickupResponseUpgrade$$Static implements $IPickupResponseUpgrade {


 "pickup"(arg0: $Level$$Type, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPickupResponseUpgrade$$Type = ((arg0: $Level, arg1: $ItemStack, arg2: boolean) => $ItemStack$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPickupResponseUpgrade_ = $IPickupResponseUpgrade$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.inventory.ISlotTracker" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InventoryHandler, $InventoryHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryHandler"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$ISlotTracker$IItemHandlerInserter, $ISlotTracker$IItemHandlerInserter$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.ISlotTracker$IItemHandlerInserter"
import {$BooleanSupplier, $BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$ItemStackKey, $ItemStackKey$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.ItemStackKey"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $ISlotTracker {

 "clear"(): void
 "getItems"(): $Set<($Item)>
 "hasEmptySlots"(): boolean
 "getFullStacks"(): $Set<($ItemStackKey)>
 "getPartialStacks"(): $Set<($ItemStackKey)>
 "registerListeners"(arg0: $Consumer$$Type<($ItemStackKey)>, arg1: $Consumer$$Type<($ItemStackKey)>, arg2: $Runnable$$Type, arg3: $Runnable$$Type): void
 "refreshSlotIndexesFrom"(arg0: $InventoryHandler$$Type): void
 "insertItemIntoHandler"(arg0: $InventoryHandler$$Type, arg1: $ISlotTracker$IItemHandlerInserter$$Type, arg2: $UnaryOperator$$Type<($ItemStack)>, arg3: $ItemStack$$Type, arg4: boolean): $ItemStack
 "insertItemIntoHandler"(arg0: $InventoryHandler$$Type, arg1: $ISlotTracker$IItemHandlerInserter$$Type, arg2: $UnaryOperator$$Type<($ItemStack)>, arg3: integer, arg4: $ItemStack$$Type, arg5: boolean): $ItemStack
 "unregisterStackKeyListeners"(): void
 "getFirstMatchingSlot"(arg0: $ItemStackKey$$Type): integer
 "removeAndSetSlotIndexes"(arg0: $InventoryHandler$$Type, arg1: integer, arg2: $ItemStack$$Type): void
 "setShouldInsertIntoEmpty"(arg0: $BooleanSupplier$$Type): void
 "hasStackMemorizedOrFiltered"(arg0: $ItemStack$$Type): boolean
get "items"(): $Set<($Item)>
get "fullStacks"(): $Set<($ItemStackKey)>
get "partialStacks"(): $Set<($ItemStackKey)>
set "shouldInsertIntoEmpty"(value: $BooleanSupplier$$Type)
}

export namespace $ISlotTracker {
const probejs$$marker: never
}
export class $ISlotTracker$$Static implements $ISlotTracker {


 "clear"(): void
 "getItems"(): $Set<($Item)>
 "hasEmptySlots"(): boolean
 "getFullStacks"(): $Set<($ItemStackKey)>
 "getPartialStacks"(): $Set<($ItemStackKey)>
 "registerListeners"(arg0: $Consumer$$Type<($ItemStackKey)>, arg1: $Consumer$$Type<($ItemStackKey)>, arg2: $Runnable$$Type, arg3: $Runnable$$Type): void
 "refreshSlotIndexesFrom"(arg0: $InventoryHandler$$Type): void
 "insertItemIntoHandler"(arg0: $InventoryHandler$$Type, arg1: $ISlotTracker$IItemHandlerInserter$$Type, arg2: $UnaryOperator$$Type<($ItemStack)>, arg3: $ItemStack$$Type, arg4: boolean): $ItemStack
 "insertItemIntoHandler"(arg0: $InventoryHandler$$Type, arg1: $ISlotTracker$IItemHandlerInserter$$Type, arg2: $UnaryOperator$$Type<($ItemStack)>, arg3: integer, arg4: $ItemStack$$Type, arg5: boolean): $ItemStack
 "unregisterStackKeyListeners"(): void
 "getFirstMatchingSlot"(arg0: $ItemStackKey$$Type): integer
 "removeAndSetSlotIndexes"(arg0: $InventoryHandler$$Type, arg1: integer, arg2: $ItemStack$$Type): void
 "setShouldInsertIntoEmpty"(arg0: $BooleanSupplier$$Type): void
 "hasStackMemorizedOrFiltered"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotTracker$$Type = ($ISlotTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlotTracker_ = $ISlotTracker$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.tank.TankUpgradeConfig" {
import {$ModConfigSpec$DoubleValue, $ModConfigSpec$DoubleValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$DoubleValue"
import {$ModConfigSpec$IntValue, $ModConfigSpec$IntValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$IntValue"
import {$ModConfigSpec$Builder, $ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $TankUpgradeConfig {
readonly "stackMultiplierRatio": $ModConfigSpec$DoubleValue
readonly "maxInputOutput": $ModConfigSpec$IntValue
readonly "capacityPerSlotRow": $ModConfigSpec$IntValue
readonly "autoFillDrainContainerCooldown": $ModConfigSpec$IntValue

constructor(arg0: $ModConfigSpec$Builder$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankUpgradeConfig$$Type = ($TankUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankUpgradeConfig_ = $TankUpgradeConfig$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterAttributes" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$PrimaryMatch, $PrimaryMatch$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.PrimaryMatch"
import {$ItemContainerContents, $ItemContainerContents$$Type} from "net.minecraft.world.item.component.ItemContainerContents"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $FilterAttributes extends $Record {
static readonly "CODEC": $Codec<($FilterAttributes)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FilterAttributes)>

constructor(tagKeys: $Set$$Type<($TagKey$$Type<($Item$$Type)>)>, isAllowList: boolean, matchDurability: boolean, matchComponents: boolean, primaryMatch: $PrimaryMatch$$Type, matchAnyTag: boolean, filterItems: $ItemContainerContents$$Type, filterByStorage: boolean, filterByInventory: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "filterItems"(): $ItemContainerContents
public "isAllowList"(): boolean
public "primaryMatch"(): $PrimaryMatch
public "matchAnyTag"(): boolean
public "setMatchAnyTag"(arg0: boolean): $FilterAttributes
public "setAllowList"(arg0: boolean): $FilterAttributes
public "setTagKeys"(arg0: $Set$$Type<($TagKey$$Type<($Item$$Type)>)>): $FilterAttributes
public "setFilterItem"(arg0: integer, arg1: $ItemStack$$Type): $FilterAttributes
public "tagKeys"(): $Set<($TagKey<($Item)>)>
public "setFilterByStorage"(arg0: boolean): $FilterAttributes
public "matchDurability"(): boolean
public "matchComponents"(): boolean
public "setPrimaryMatch"(arg0: $PrimaryMatch$$Type): $FilterAttributes
public "setMatchComponents"(arg0: boolean): $FilterAttributes
public "setMatchDurability"(arg0: boolean): $FilterAttributes
public "filterByStorage"(): boolean
public "filterByInventory"(): boolean
public "setFilterByInventory"(arg0: boolean): $FilterAttributes
get "allowList"(): boolean
set "allowList"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterAttributes$$Type = ({"tagKeys"?: $Set$$Type<($TagKey$$Type<($Item$$Type)>)>, "isAllowList"?: boolean, "matchComponents"?: boolean, "matchDurability"?: boolean, "primaryMatch"?: $PrimaryMatch$$Type, "filterByStorage"?: boolean, "filterByInventory"?: boolean, "filterItems"?: $ItemContainerContents$$Type, "matchAnyTag"?: boolean}) | ([tagKeys?: $Set$$Type<($TagKey$$Type<($Item$$Type)>)>, isAllowList?: boolean, matchComponents?: boolean, matchDurability?: boolean, primaryMatch?: $PrimaryMatch$$Type, filterByStorage?: boolean, filterByInventory?: boolean, filterItems?: $ItemContainerContents$$Type, matchAnyTag?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterAttributes_ = $FilterAttributes$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.jukebox.JukeboxUpgradeNoteParticleData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export class $JukeboxUpgradeNoteParticleData extends $ParticleType<($JukeboxUpgradeNoteParticleData)> implements $ParticleOptions {

constructor()

public "getType"(): $ParticleType<(any)>
public "codec"(): $MapCodec<($JukeboxUpgradeNoteParticleData)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($JukeboxUpgradeNoteParticleData)>
get "type"(): $ParticleType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JukeboxUpgradeNoteParticleData$$Type = ($JukeboxUpgradeNoteParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JukeboxUpgradeNoteParticleData_ = $JukeboxUpgradeNoteParticleData$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.crafting.BasicBackpackRecipe$Serializer" {
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$$Type} from "net.p3pp3rf1y.sophisticatedcore.crafting.RecipeWrapperSerializer"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$BasicBackpackRecipe, $BasicBackpackRecipe$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.crafting.BasicBackpackRecipe"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $BasicBackpackRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($BasicBackpackRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicBackpackRecipe$Serializer$$Type = ($BasicBackpackRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicBackpackRecipe$Serializer_ = $BasicBackpackRecipe$Serializer$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.deposit.DepositUpgradeItem" {
import {$DepositUpgradeWrapper, $DepositUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.deposit.DepositUpgradeWrapper"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $DepositUpgradeItem extends $UpgradeItemBase<($DepositUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IntSupplier$$Type)

public "getType"(): $UpgradeType<($DepositUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($DepositUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepositUpgradeItem$$Type = ($DepositUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DepositUpgradeItem_ = $DepositUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.crafting.IWrapperRecipe" {
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"

export interface $IWrapperRecipe<T extends $Recipe<(any)>> {

 "getCompose"(): T

(): T
get "compose"(): T
}

export namespace $IWrapperRecipe {
const probejs$$marker: never
}
export class $IWrapperRecipe$$Static<T extends $Recipe<(any)>> implements $IWrapperRecipe {


 "getCompose"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWrapperRecipe$$Type<T> = (() => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWrapperRecipe_<T> = $IWrapperRecipe$$Type<(T)>;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper" {
import {$AutoSmeltingUpgradeItem, $AutoSmeltingUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoSmeltingUpgradeItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SmeltingRecipe, $SmeltingRecipe$$Type} from "net.minecraft.world.item.crafting.SmeltingRecipe"
import {$AutoCookingUpgradeWrapper, $AutoCookingUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeWrapper"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper extends $AutoCookingUpgradeWrapper<($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper), ($AutoSmeltingUpgradeItem), ($SmeltingRecipe)> {

constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper$$Type = ($AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper_ = $AutoCookingUpgradeWrapper$AutoSmeltingUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.common.gui.SortBy" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $SortBy extends $Enum<($SortBy)> implements $StringRepresentable {
static readonly "MOD": $SortBy
static readonly "CODEC": $Codec<($SortBy)>
static readonly "COUNT": $SortBy
static readonly "TAGS": $SortBy
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($SortBy)>
static readonly "NAME": $SortBy


public static "values"(): ($SortBy)[]
public static "valueOf"(arg0: StringJS): $SortBy
public "next"(): $SortBy
public static "fromName"(arg0: StringJS): $SortBy
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
export type $SortBy$$Type = (("name") | ("mod") | ("count") | ("tags"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SortBy_ = $SortBy$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.jukebox.JukeboxUpgradeItem" {
import {$JukeboxUpgradeWrapper, $JukeboxUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.jukebox.JukeboxUpgradeWrapper"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UpgradeGroup, $UpgradeGroup$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $JukeboxUpgradeItem extends $UpgradeItemBase<($JukeboxUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($JukeboxUpgradeWrapper)>
static readonly "UPGRADE_GROUP": $UpgradeGroup
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IUpgradeCountLimitConfig$$Type, arg1: $IntSupplier$$Type, arg2: $IntSupplier$$Type)

public "getType"(): $UpgradeType<($JukeboxUpgradeWrapper)>
public "getSlotsInRow"(): integer
public "getNumberOfSlots"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getUpgradeGroup"(): $UpgradeGroup
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($JukeboxUpgradeWrapper)>
get "slotsInRow"(): integer
get "numberOfSlots"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeGroup"(): $UpgradeGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JukeboxUpgradeItem$$Type = ($JukeboxUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JukeboxUpgradeItem_ = $JukeboxUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.renderdata.IUpgradeRenderData" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export interface $IUpgradeRenderData {

 "serializeNBT"(): $CompoundTag

(): $CompoundTag$$Type
}

export namespace $IUpgradeRenderData {
const probejs$$marker: never
}
export class $IUpgradeRenderData$$Static implements $IUpgradeRenderData {


 "serializeNBT"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeRenderData$$Type = (() => $CompoundTag$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeRenderData_ = $IUpgradeRenderData$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.compacting.CompactingUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CompactingUpgradeWrapper, $CompactingUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.compacting.CompactingUpgradeWrapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $CompactingUpgradeItem extends $UpgradeItemBase<($CompactingUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: boolean, arg1: $IntSupplier$$Type, arg2: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($CompactingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
public "shouldCompactThreeByThree"(): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($CompactingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingUpgradeItem$$Type = ($CompactingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingUpgradeItem_ = $CompactingUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.controller.IControllableStorage" {
import {$IControllerBoundable, $IControllerBoundable$$Type} from "net.p3pp3rf1y.sophisticatedcore.controller.IControllerBoundable"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ControllerBlockEntityBase, $ControllerBlockEntityBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.controller.ControllerBlockEntityBase"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $IControllableStorage extends $IControllerBoundable {

 "hasStorageData"(): boolean
 "changeSlots"(arg0: integer): void
 "tryToAddToController"(): void
 "getStorageWrapper"(): $IStorageWrapper
 "updateEmptySlots"(): void
 "addToController"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
 "unregisterController"(): void
 "registerController"(arg0: $ControllerBlockEntityBase$$Type): void
 "canConnectStorages"(): boolean
 "removeFromController"(): void
 "onInventoryInputOutputHandlerRefresh"(): void
 "registerInventoryStackListeners"(): void
 "registerWithControllerOnLoad"(): void
 "canBeConnected"(): boolean
 "runOnController"(arg0: $Level$$Type, arg1: $Consumer$$Type<($ControllerBlockEntityBase)>): void
 "loadControllerPos"(arg0: $CompoundTag$$Type): void
 "removeControllerPos"(): void
 "saveControllerPos"(arg0: $CompoundTag$$Type): void
 "setControllerPos"(arg0: $BlockPos$$Type): void
 "getControllerPos"(): $Optional<($BlockPos)>
 "getStorageBlockPos"(): $BlockPos
 "getStorageBlockLevel"(): $Level
 "addToAdjacentController"(): void
get "storageWrapper"(): $IStorageWrapper
set "controllerPos"(value: $BlockPos$$Type)
get "controllerPos"(): $Optional<($BlockPos)>
get "storageBlockPos"(): $BlockPos
get "storageBlockLevel"(): $Level
}

export namespace $IControllableStorage {
const probejs$$marker: never
}
export class $IControllableStorage$$Static implements $IControllableStorage {


 "hasStorageData"(): boolean
 "changeSlots"(arg0: integer): void
 "tryToAddToController"(): void
 "getStorageWrapper"(): $IStorageWrapper
 "updateEmptySlots"(): void
 "addToController"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): void
 "unregisterController"(): void
 "registerController"(arg0: $ControllerBlockEntityBase$$Type): void
 "canConnectStorages"(): boolean
 "removeFromController"(): void
 "onInventoryInputOutputHandlerRefresh"(): void
 "registerInventoryStackListeners"(): void
 "registerWithControllerOnLoad"(): void
 "canBeConnected"(): boolean
 "runOnController"(arg0: $Level$$Type, arg1: $Consumer$$Type<($ControllerBlockEntityBase)>): void
 "loadControllerPos"(arg0: $CompoundTag$$Type): void
 "removeControllerPos"(): void
 "saveControllerPos"(arg0: $CompoundTag$$Type): void
 "setControllerPos"(arg0: $BlockPos$$Type): void
 "getControllerPos"(): $Optional<($BlockPos)>
 "getStorageBlockPos"(): $BlockPos
 "getStorageBlockLevel"(): $Level
 "addToAdjacentController"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IControllableStorage$$Type = ($IControllableStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IControllableStorage_ = $IControllableStorage$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.smithing.SmithingUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SmithingUpgradeWrapper, $SmithingUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.smithing.SmithingUpgradeWrapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $SmithingUpgradeItem extends $UpgradeItemBase<($SmithingUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getType"(): $UpgradeType<($SmithingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($SmithingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingUpgradeItem$$Type = ($SmithingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmithingUpgradeItem_ = $SmithingUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeWrapper$SmeltingUpgradeWrapper" {
import {$SmeltingUpgradeItem, $SmeltingUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.SmeltingUpgradeItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SmeltingRecipe, $SmeltingRecipe$$Type} from "net.minecraft.world.item.crafting.SmeltingRecipe"
import {$CookingUpgradeWrapper, $CookingUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeWrapper"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $CookingUpgradeWrapper$SmeltingUpgradeWrapper extends $CookingUpgradeWrapper<($CookingUpgradeWrapper$SmeltingUpgradeWrapper), ($SmeltingUpgradeItem), ($SmeltingRecipe)> {

constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeWrapper$SmeltingUpgradeWrapper$$Type = ($CookingUpgradeWrapper$SmeltingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingUpgradeWrapper$SmeltingUpgradeWrapper_ = $CookingUpgradeWrapper$SmeltingUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.ICookingUpgradeItem" {
import {$CookingUpgradeConfig, $CookingUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeConfig"

export interface $ICookingUpgradeItem {

 "getCookingUpgradeConfig"(): $CookingUpgradeConfig

(): $CookingUpgradeConfig$$Type
get "cookingUpgradeConfig"(): $CookingUpgradeConfig
}

export namespace $ICookingUpgradeItem {
const probejs$$marker: never
}
export class $ICookingUpgradeItem$$Static implements $ICookingUpgradeItem {


 "getCookingUpgradeConfig"(): $CookingUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICookingUpgradeItem$$Type = (() => $CookingUpgradeConfig$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICookingUpgradeItem_ = $ICookingUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.compacting.CompactingUpgradeWrapper" {
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$IInsertResponseUpgrade, $IInsertResponseUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IInsertResponseUpgrade"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FilterLogic, $FilterLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IFilteredUpgrade, $IFilteredUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IFilteredUpgrade"
import {$ISlotChangeResponseUpgrade, $ISlotChangeResponseUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.ISlotChangeResponseUpgrade"
import {$IItemHandlerSimpleInserter, $IItemHandlerSimpleInserter$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.IItemHandlerSimpleInserter"
import {$ITickableUpgrade, $ITickableUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$CompactingUpgradeItem, $CompactingUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.compacting.CompactingUpgradeItem"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"

export class $CompactingUpgradeWrapper extends $UpgradeWrapperBase<($CompactingUpgradeWrapper), ($CompactingUpgradeItem)> implements $IInsertResponseUpgrade, $IFilteredUpgrade, $ISlotChangeResponseUpgrade, $ITickableUpgrade {

constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "getFilterLogic"(): $FilterLogic
public "onBeforeInsert"(arg0: $IItemHandlerSimpleInserter$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: boolean): $ItemStack
public "onAfterInsert"(arg0: $IItemHandlerSimpleInserter$$Type, arg1: integer): void
public "onSlotChange"(arg0: $IItemHandler$$Type, arg1: integer): void
public "setShouldWorkdInGUI"(arg0: boolean): void
public "shouldWorkInGUI"(): boolean
public "setCompactNonUncraftable"(arg0: boolean): void
public "shouldCompactNonUncraftable"(): boolean
get "filterLogic"(): $FilterLogic
set "shouldWorkdInGUI"(value: boolean)
set "compactNonUncraftable"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingUpgradeWrapper$$Type = ($CompactingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompactingUpgradeWrapper_ = $CompactingUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.crafting.CraftingUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CraftingUpgradeWrapper, $CraftingUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.crafting.CraftingUpgradeWrapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $CraftingUpgradeItem extends $UpgradeItemBase<($CraftingUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($CraftingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($CraftingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingUpgradeItem$$Type = ($CraftingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingUpgradeItem_ = $CraftingUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedBatteryUpgrade$BatteryRenderInfo" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export class $IRenderedBatteryUpgrade$BatteryRenderInfo {

constructor(arg0: float)

public static "deserialize"(arg0: $CompoundTag$$Type): $IRenderedBatteryUpgrade$BatteryRenderInfo
public "serialize"(): $CompoundTag
public "getChargeRatio"(): float
public "setChargeRatio"(arg0: float): void
get "chargeRatio"(): float
set "chargeRatio"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderedBatteryUpgrade$BatteryRenderInfo$$Type = ($IRenderedBatteryUpgrade$BatteryRenderInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderedBatteryUpgrade$BatteryRenderInfo_ = $IRenderedBatteryUpgrade$BatteryRenderInfo$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.settings.main.MainSettingsCategory" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MainSetting, $MainSetting$$Type} from "net.p3pp3rf1y.sophisticatedcore.settings.MainSetting"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ISettingsCategory, $ISettingsCategory$$Type} from "net.p3pp3rf1y.sophisticatedcore.settings.ISettingsCategory"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $MainSettingsCategory<T extends $MainSettingsCategory<(any)>> implements $ISettingsCategory<(T)> {
static readonly "NAME": StringJS

constructor(arg0: $CompoundTag$$Type, arg1: $Consumer$$Type<($CompoundTag)>, arg2: StringJS)

public "copyTo"(arg0: T, arg1: integer, arg2: integer): void
public "copyTo"(arg0: $ISettingsCategory$$Type<(any)>, arg1: integer, arg2: integer): void
public "removeSetting"<S>(arg0: $MainSetting$$Type<(S)>): void
public "overwriteWith"(arg0: $ISettingsCategory$$Type<(any)>): void
public "overwriteWith"(arg0: T): void
public "reloadFrom"(arg0: $CompoundTag$$Type): void
public "getSettingValue"<S>(arg0: $MainSetting$$Type<(S)>): $Optional<(S)>
public "getPlayerSettingsTagName"(): StringJS
public "setSettingValue"<S>(arg0: $MainSetting$$Type<(S)>, arg1: S): void
public "deleteSlotSettingsFrom"(arg0: integer): void
public "isLargerThanNumberOfSlots"(arg0: integer): boolean
get "playerSettingsTagName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MainSettingsCategory$$Type<T> = ($MainSettingsCategory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MainSettingsCategory_<T> = $MainSettingsCategory$$Type<(T)>;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.inventory.IItemHandlerSimpleInserter" {
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export interface $IItemHandlerSimpleInserter extends $IItemHandlerModifiable {

 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getBlock"(arg0: $Level$$Type): $BlockContainerJS
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "isMutable"(): boolean
 "getSlots"(): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "getStackInSlot"(arg0: integer): $ItemStack
 "kjs$self"(): $IItemHandler
 "getSlots"(): integer
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getStackInSlot"(arg0: integer): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "clear"(): void
 "clear"(arg0: $ItemPredicate$$Type): void
 "find"(): integer
 "find"(arg0: $ItemPredicate$$Type): integer
 "count"(): integer
 "count"(arg0: $ItemPredicate$$Type): integer
 "getWidth"(): integer
 "getHeight"(): integer
 "setChanged"(): void
 "isEmpty"(): boolean
 "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
 "countNonEmpty"(): integer
 "getAllItems"(): $List<($ItemStack)>
 "asContainer"(): $Container
get "mutable"(): boolean
get "slots"(): integer
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}

export namespace $IItemHandlerSimpleInserter {
const probejs$$marker: never
}
export class $IItemHandlerSimpleInserter$$Static implements $IItemHandlerSimpleInserter {


 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getBlock"(arg0: $Level$$Type): $BlockContainerJS
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "isMutable"(): boolean
 "getSlots"(): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "getStackInSlot"(arg0: integer): $ItemStack
 "kjs$self"(): $IItemHandler
 "getSlots"(): integer
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getStackInSlot"(arg0: integer): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
 "clear"(): void
 "clear"(arg0: $ItemPredicate$$Type): void
 "find"(): integer
 "find"(arg0: $ItemPredicate$$Type): integer
 "count"(): integer
 "count"(arg0: $ItemPredicate$$Type): integer
 "getWidth"(): integer
 "getHeight"(): integer
 "setChanged"(): void
 "isEmpty"(): boolean
 "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
 "countNonEmpty"(): integer
 "getAllItems"(): $List<($ItemStack)>
 "asContainer"(): $Container
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandlerSimpleInserter$$Type = ($IItemHandlerSimpleInserter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemHandlerSimpleInserter_ = $IItemHandlerSimpleInserter$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.feeding.HungerLevel" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $HungerLevel extends $Enum<($HungerLevel)> implements $StringRepresentable {
static readonly "HALF": $HungerLevel
static readonly "CODEC": $Codec<($HungerLevel)>
static readonly "ANY": $HungerLevel
static readonly "FULL": $HungerLevel
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($HungerLevel)>


public static "values"(): ($HungerLevel)[]
public static "valueOf"(arg0: StringJS): $HungerLevel
public "next"(): $HungerLevel
public static "fromName"(arg0: StringJS): $HungerLevel
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
export type $HungerLevel$$Type = (("any") | ("half") | ("full"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HungerLevel_ = $HungerLevel$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper" {
import {$ITrackedContentsItemHandler, $ITrackedContentsItemHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.ITrackedContentsItemHandler"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$UpgradeHandler, $UpgradeHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeHandler"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ITintable, $ITintable$$Type} from "net.p3pp3rf1y.sophisticatedcore.util.ITintable"
import {$SettingsHandler, $SettingsHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.settings.SettingsHandler"
import {$InventoryHandler, $InventoryHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryHandler"
import {$IStorageFluidHandler, $IStorageFluidHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageFluidHandler"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$RenderInfo, $RenderInfo$$Type} from "net.p3pp3rf1y.sophisticatedcore.renderdata.RenderInfo"
import {$SortBy, $SortBy$$Type} from "net.p3pp3rf1y.sophisticatedcore.common.gui.SortBy"

export interface $IStorageWrapper extends $ITintable {

 "getDisplayName"(): $Component
 "sort"(): void
 "onInit"(): void
 "getOpenTabId"(): $Optional<(integer)>
 "setOpenTabId"(arg0: integer): void
 "setSortBy"(arg0: $SortBy$$Type): void
 "getSortBy"(): $SortBy
 "setPersistent"(arg0: boolean): void
 "fillWithLoot"(arg0: $Player$$Type): void
 "getStorageType"(): StringJS
 "getRenderInfo"(): $RenderInfo
 "getContentsUuid"(): $Optional<($UUID)>
 "onContentsNbtUpdated"(): void
 "removeOpenTabId"(): void
 "setColumnsTaken"(arg0: integer, arg1: boolean): void
 "getColumnsTaken"(): integer
 "getNumberOfSlotRows"(): integer
 "getWrappedStorageStack"(): $ItemStack
 "isUpgradeRunnable"(arg0: $ItemStack$$Type): boolean
 "getSettingsHandler"(): $SettingsHandler
 "getInventoryHandler"(): $InventoryHandler
 "getEnergyStorage"(): $Optional<($IEnergyStorage)>
 "getFluidHandler"(): $Optional<($IStorageFluidHandler)>
 "getUpgradeHandler"(): $UpgradeHandler
 "getInventoryForUpgradeProcessing"(): $ITrackedContentsItemHandler
 "refreshInventoryForUpgradeProcessing"(): void
 "setUpgradeCachesInvalidatedHandler"(arg0: $Runnable$$Type): void
 "setInventorySlotChangeHandler"(arg0: $Runnable$$Type): void
 "refreshInventoryForInputOutput"(): void
 "getBaseStackSizeMultiplier"(): integer
 "setContentsChangeHandler"(arg0: $Runnable$$Type): void
 "getInventoryForInputOutput"(): $ITrackedContentsItemHandler
 "registerOnInventoryInputOutputHandlerRefreshListener"(arg0: $Runnable$$Type): void
 "getMainColor"(): integer
 "getAccentColor"(): integer
 "setColors"(arg0: integer, arg1: integer): void
get "displayName"(): $Component
get "openTabId"(): $Optional<(integer)>
set "openTabId"(value: integer)
set "sortBy"(value: $SortBy$$Type)
get "sortBy"(): $SortBy
set "persistent"(value: boolean)
get "storageType"(): StringJS
get "renderInfo"(): $RenderInfo
get "contentsUuid"(): $Optional<($UUID)>
get "columnsTaken"(): integer
get "numberOfSlotRows"(): integer
get "wrappedStorageStack"(): $ItemStack
get "settingsHandler"(): $SettingsHandler
get "inventoryHandler"(): $InventoryHandler
get "energyStorage"(): $Optional<($IEnergyStorage)>
get "fluidHandler"(): $Optional<($IStorageFluidHandler)>
get "upgradeHandler"(): $UpgradeHandler
get "inventoryForUpgradeProcessing"(): $ITrackedContentsItemHandler
set "upgradeCachesInvalidatedHandler"(value: $Runnable$$Type)
set "inventorySlotChangeHandler"(value: $Runnable$$Type)
get "baseStackSizeMultiplier"(): integer
set "contentsChangeHandler"(value: $Runnable$$Type)
get "inventoryForInputOutput"(): $ITrackedContentsItemHandler
get "mainColor"(): integer
get "accentColor"(): integer
}

export namespace $IStorageWrapper {
const SETTINGS_TAG: StringJS
const probejs$$marker: never
}
export class $IStorageWrapper$$Static implements $IStorageWrapper {
static readonly "SETTINGS_TAG": StringJS


 "getDisplayName"(): $Component
 "sort"(): void
 "onInit"(): void
 "getOpenTabId"(): $Optional<(integer)>
 "setOpenTabId"(arg0: integer): void
 "setSortBy"(arg0: $SortBy$$Type): void
 "getSortBy"(): $SortBy
 "setPersistent"(arg0: boolean): void
 "fillWithLoot"(arg0: $Player$$Type): void
 "getStorageType"(): StringJS
 "getRenderInfo"(): $RenderInfo
 "getContentsUuid"(): $Optional<($UUID)>
 "onContentsNbtUpdated"(): void
 "removeOpenTabId"(): void
 "setColumnsTaken"(arg0: integer, arg1: boolean): void
 "getColumnsTaken"(): integer
 "getNumberOfSlotRows"(): integer
 "getWrappedStorageStack"(): $ItemStack
 "isUpgradeRunnable"(arg0: $ItemStack$$Type): boolean
 "getSettingsHandler"(): $SettingsHandler
 "getInventoryHandler"(): $InventoryHandler
 "getEnergyStorage"(): $Optional<($IEnergyStorage)>
 "getFluidHandler"(): $Optional<($IStorageFluidHandler)>
 "getUpgradeHandler"(): $UpgradeHandler
 "getInventoryForUpgradeProcessing"(): $ITrackedContentsItemHandler
 "refreshInventoryForUpgradeProcessing"(): void
 "setUpgradeCachesInvalidatedHandler"(arg0: $Runnable$$Type): void
 "setInventorySlotChangeHandler"(arg0: $Runnable$$Type): void
 "refreshInventoryForInputOutput"(): void
 "getBaseStackSizeMultiplier"(): integer
 "setContentsChangeHandler"(arg0: $Runnable$$Type): void
 "getInventoryForInputOutput"(): $ITrackedContentsItemHandler
 "registerOnInventoryInputOutputHandlerRefreshListener"(arg0: $Runnable$$Type): void
 "getMainColor"(): integer
 "getAccentColor"(): integer
 "setColors"(arg0: integer, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageWrapper$$Type = ($IStorageWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageWrapper_ = $IStorageWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.stonecutter.StonecutterUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$BlockConverterUpgradeItem, $BlockConverterUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.blockconverter.BlockConverterUpgradeItem"
import {$Map, $Map$$Type} from "java.util.Map"
import {$StonecutterUpgradeItem$Wrapper, $StonecutterUpgradeItem$Wrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.stonecutter.StonecutterUpgradeItem$Wrapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"

export class $StonecutterUpgradeItem extends $BlockConverterUpgradeItem<($StonecutterUpgradeItem), ($StonecutterUpgradeItem$Wrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($StonecutterUpgradeItem$Wrapper)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($StonecutterUpgradeItem$Wrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StonecutterUpgradeItem$$Type = ($StonecutterUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StonecutterUpgradeItem_ = $StonecutterUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.tank.TankUpgradeWrapper" {
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$IRenderedTankUpgrade$TankRenderInfo, $IRenderedTankUpgrade$TankRenderInfo$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedTankUpgrade$TankRenderInfo"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TankUpgradeWrapper$TankComponentItemHandler, $TankUpgradeWrapper$TankComponentItemHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.tank.TankUpgradeWrapper$TankComponentItemHandler"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$ITickableUpgrade, $ITickableUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IStackableContentsUpgrade, $IStackableContentsUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IStackableContentsUpgrade"
import {$IFluidHandlerItem, $IFluidHandlerItem$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandlerItem"
import {$TankUpgradeItem, $TankUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.tank.TankUpgradeItem"
import {$SimpleFluidContent, $SimpleFluidContent$$Type} from "net.neoforged.neoforge.fluids.SimpleFluidContent"
import {$IRenderedTankUpgrade, $IRenderedTankUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedTankUpgrade"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $TankUpgradeWrapper extends $UpgradeWrapperBase<($TankUpgradeWrapper), ($TankUpgradeItem)> implements $IRenderedTankUpgrade, $ITickableUpgrade, $IStackableContentsUpgrade {
static readonly "INPUT_SLOT": integer
static readonly "OUTPUT_RESULT_SLOT": integer
static readonly "OUTPUT_SLOT": integer
static readonly "INPUT_RESULT_SLOT": integer


public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type, arg2: boolean): $FluidStack
public static "getContents"(arg0: $ItemStack$$Type): $SimpleFluidContent
public "getContents"(): $FluidStack
public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type, arg2: boolean): integer
public "getInventory"(): $TankUpgradeWrapper$TankComponentItemHandler
public "drainHandler"(arg0: $IFluidHandlerItem$$Type, arg1: $Consumer$$Type<($ItemStack)>): void
public "drainHandler"(arg0: $IFluidHandlerItem$$Type, arg1: $Consumer$$Type<($ItemStack)>, arg2: boolean, arg3: boolean): boolean
public "fillHandler"(arg0: $IFluidHandlerItem$$Type, arg1: $Consumer$$Type<($ItemStack)>, arg2: boolean, arg3: boolean): boolean
public "canBeDisabled"(): boolean
public "getTankCapacity"(): integer
public "setTankRenderInfoUpdateCallback"(arg0: $Consumer$$Type<($IRenderedTankUpgrade$TankRenderInfo)>): void
public "forceUpdateTankRenderInfo"(): void
public "interactWithCursorStack"(arg0: $ItemStack$$Type, arg1: $Consumer$$Type<($ItemStack)>): void
public "getMinimumMultiplierRequired"(): integer
get "contents"(): $FluidStack
get "inventory"(): $TankUpgradeWrapper$TankComponentItemHandler
get "tankCapacity"(): integer
set "tankRenderInfoUpdateCallback"(value: $Consumer$$Type<($IRenderedTankUpgrade$TankRenderInfo)>)
get "minimumMultiplierRequired"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankUpgradeWrapper$$Type = ($TankUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankUpgradeWrapper_ = $TankUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.SmokingUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UpgradeGroup, $UpgradeGroup$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$CookingUpgradeWrapper$SmokingUpgradeWrapper, $CookingUpgradeWrapper$SmokingUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeWrapper$SmokingUpgradeWrapper"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICookingUpgradeItem, $ICookingUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.ICookingUpgradeItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CookingUpgradeConfig, $CookingUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeConfig"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $SmokingUpgradeItem extends $UpgradeItemBase<($CookingUpgradeWrapper$SmokingUpgradeWrapper)> implements $ICookingUpgradeItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($CookingUpgradeWrapper$SmokingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $CookingUpgradeConfig$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($CookingUpgradeWrapper$SmokingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getUpgradeGroup"(): $UpgradeGroup
public "getCookingUpgradeConfig"(): $CookingUpgradeConfig
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($CookingUpgradeWrapper$SmokingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeGroup"(): $UpgradeGroup
get "cookingUpgradeConfig"(): $CookingUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmokingUpgradeItem$$Type = ($SmokingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmokingUpgradeItem_ = $SmokingUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyFilterAttribute" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$AlchemyCondition, $AlchemyCondition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyCondition"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AlchemyFilterAttribute extends $Record {
static readonly "CODEC": $Codec<($AlchemyFilterAttribute)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AlchemyFilterAttribute)>

constructor(arg0: $ItemStack$$Type, arg1: $AlchemyCondition$$Type)
constructor(filter: $ItemStack$$Type, condition: $AlchemyCondition$$Type, value: float)

public "condition"(): $AlchemyCondition
public "setFilter"(arg0: $ItemStack$$Type): $AlchemyFilterAttribute
public "value"(): float
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "filter"(): $ItemStack
public "setValue"(arg0: float): $AlchemyFilterAttribute
public "setConditionAndValue"(arg0: $AlchemyCondition$$Type, arg1: float): $AlchemyFilterAttribute
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyFilterAttribute$$Type = ({"value"?: float, "filter"?: $ItemStack$$Type, "condition"?: $AlchemyCondition$$Type}) | ([value?: float, filter?: $ItemStack$$Type, condition?: $AlchemyCondition$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyFilterAttribute_ = $AlchemyFilterAttribute$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.util.FilterItemStackHandler" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ItemStackHandler, $ItemStackHandler$$Type} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $FilterItemStackHandler extends $ItemStackHandler {

constructor(arg0: integer)

public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "hasOnlyEmptyFilters"(): boolean
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterItemStackHandler$$Type = ($FilterItemStackHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterItemStackHandler_ = $FilterItemStackHandler$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.xppump.XpPumpUpgradeWrapper" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AutomationDirection, $AutomationDirection$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.xppump.AutomationDirection"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$XpPumpUpgradeItem, $XpPumpUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.xppump.XpPumpUpgradeItem"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ITickableUpgrade, $ITickableUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"

export class $XpPumpUpgradeWrapper extends $UpgradeWrapperBase<($XpPumpUpgradeWrapper), ($XpPumpUpgradeItem)> implements $ITickableUpgrade {


public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "getLevel"(): integer
public "setLevel"(arg0: integer): void
public "getDirection"(): $AutomationDirection
public "setMendItems"(arg0: boolean): void
public "setDirection"(arg0: $AutomationDirection$$Type): void
public "setLevelsToStore"(arg0: integer): void
public "setLevelsToTake"(arg0: integer): void
public "getLevelsToStore"(): integer
public "getLevelsToTake"(): integer
public "shouldMendItems"(): boolean
public "giveLevelsToPlayer"(arg0: $Player$$Type): void
public "takeLevelsFromPlayer"(arg0: $Player$$Type): void
public "giveAllExperienceToPlayer"(arg0: $Player$$Type): void
public "takeAllExperienceFromPlayer"(arg0: $Player$$Type): void
get "level"(): integer
set "level"(value: integer)
get "direction"(): $AutomationDirection
set "mendItems"(value: boolean)
set "direction"(value: $AutomationDirection$$Type)
set "levelsToStore"(value: integer)
set "levelsToTake"(value: integer)
get "levelsToStore"(): integer
get "levelsToTake"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XpPumpUpgradeWrapper$$Type = ($XpPumpUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XpPumpUpgradeWrapper_ = $XpPumpUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingLogic$CookingComponentItemHandler" {
import {$CookingLogic, $CookingLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingLogic"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ComponentItemHandler, $ComponentItemHandler$$Type} from "net.neoforged.neoforge.items.ComponentItemHandler"

export class $CookingLogic$CookingComponentItemHandler extends $ComponentItemHandler {

constructor(arg0: $CookingLogic$$Type<(any)>)

public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "setStackInSlotWithoutValidation"(arg0: integer, arg1: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingLogic$CookingComponentItemHandler$$Type = ($CookingLogic$CookingComponentItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingLogic$CookingComponentItemHandler_ = $CookingLogic$CookingComponentItemHandler$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.infinity.InfinityUpgradeItem$Wrapper" {
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$InfinityUpgradeItem, $InfinityUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.infinity.InfinityUpgradeItem"

export class $InfinityUpgradeItem$Wrapper extends $UpgradeWrapperBase<($InfinityUpgradeItem$Wrapper), ($InfinityUpgradeItem)> {


public "canBeDisabled"(): boolean
public "onAdded"(): void
public "onBeforeRemoved"(): void
public "getPermissionLevel"(): integer
get "permissionLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfinityUpgradeItem$Wrapper$$Type = ($InfinityUpgradeItem$Wrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfinityUpgradeItem$Wrapper_ = $InfinityUpgradeItem$Wrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$$Type} from "net.p3pp3rf1y.sophisticatedcore.common.gui.UpgradeSlotChangeResult"
import {$UpgradeGroup, $UpgradeGroup$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IUpgradeWrapper, $IUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeWrapper"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"

export interface $IUpgradeItem<T extends $IUpgradeWrapper> {

 "getName"(): $Component
 "getType"(): $UpgradeType<(T)>
 "canSwapUpgradeFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: $IStorageWrapper$$Type, arg3: boolean): $UpgradeSlotChangeResult
 "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$$Type, arg1: boolean): $UpgradeSlotChangeResult
 "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$$Type, arg1: boolean, arg2: $Player$$Type): $UpgradeSlotChangeResult
 "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
 "getUpgradeGroup"(): $UpgradeGroup
 "getUpgradesPerStorage"(arg0: StringJS): integer
 "canAddUpgradeTo"(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: boolean, arg3: boolean): $UpgradeSlotChangeResult
 "getCleanedUpgradeStack"(arg0: $ItemStack$$Type): $ItemStack
 "checkThisForConflictsWithExistingUpgrades"(arg0: $ItemStack$$Type, arg1: $IStorageWrapper$$Type, arg2: integer): $UpgradeSlotChangeResult
 "getUpgradesInGroupPerStorage"(arg0: StringJS): integer
 "getInventoryColumnsTaken"(): integer
 "checkExtraInsertConditions"(arg0: $ItemStack$$Type, arg1: $IStorageWrapper$$Type, arg2: boolean, arg3: integer, arg4: $IUpgradeItem$$Type<(any)>): $UpgradeSlotChangeResult
 "checkExtraInsertConditions"(arg0: $ItemStack$$Type, arg1: $IStorageWrapper$$Type, arg2: boolean, arg3: $IUpgradeItem$$Type<(any)>): $UpgradeSlotChangeResult
get "name"(): $Component
get "type"(): $UpgradeType<(T)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeGroup"(): $UpgradeGroup
get "inventoryColumnsTaken"(): integer
}

export namespace $IUpgradeItem {
const probejs$$marker: never
}
export class $IUpgradeItem$$Static<T extends $IUpgradeWrapper> implements $IUpgradeItem {


 "getName"(): $Component
 "getType"(): $UpgradeType<(T)>
 "canSwapUpgradeFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: $IStorageWrapper$$Type, arg3: boolean): $UpgradeSlotChangeResult
 "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$$Type, arg1: boolean): $UpgradeSlotChangeResult
 "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$$Type, arg1: boolean, arg2: $Player$$Type): $UpgradeSlotChangeResult
 "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
 "getUpgradeGroup"(): $UpgradeGroup
 "getUpgradesPerStorage"(arg0: StringJS): integer
 "canAddUpgradeTo"(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: boolean, arg3: boolean): $UpgradeSlotChangeResult
 "getCleanedUpgradeStack"(arg0: $ItemStack$$Type): $ItemStack
 "checkThisForConflictsWithExistingUpgrades"(arg0: $ItemStack$$Type, arg1: $IStorageWrapper$$Type, arg2: integer): $UpgradeSlotChangeResult
 "getUpgradesInGroupPerStorage"(arg0: StringJS): integer
 "getInventoryColumnsTaken"(): integer
 "checkExtraInsertConditions"(arg0: $ItemStack$$Type, arg1: $IStorageWrapper$$Type, arg2: boolean, arg3: integer, arg4: $IUpgradeItem$$Type<(any)>): $UpgradeSlotChangeResult
 "checkExtraInsertConditions"(arg0: $ItemStack$$Type, arg1: $IStorageWrapper$$Type, arg2: boolean, arg3: $IUpgradeItem$$Type<(any)>): $UpgradeSlotChangeResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeItem$$Type<T> = ($IUpgradeItem<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeItem_<T> = $IUpgradeItem$$Type<(T)>;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeAccessModifier" {
import {$IUpgradeWrapperAccessor, $IUpgradeWrapperAccessor$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeWrapperAccessor"

export interface $IUpgradeAccessModifier {

 "wrapAccessor"(arg0: $IUpgradeWrapperAccessor$$Type): $IUpgradeWrapperAccessor

(arg0: $IUpgradeWrapperAccessor): $IUpgradeWrapperAccessor$$Type
}

export namespace $IUpgradeAccessModifier {
const probejs$$marker: never
}
export class $IUpgradeAccessModifier$$Static implements $IUpgradeAccessModifier {


 "wrapAccessor"(arg0: $IUpgradeWrapperAccessor$$Type): $IUpgradeWrapperAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeAccessModifier$$Type = ((arg0: $IUpgradeWrapperAccessor) => $IUpgradeWrapperAccessor$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeAccessModifier_ = $IUpgradeAccessModifier$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.inception.InceptionUpgradeWrapper" {
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$IEnergyStorageUpgradeWrapper, $IEnergyStorageUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.api.IEnergyStorageUpgradeWrapper"
import {$InventoryOrder, $InventoryOrder$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.inception.InventoryOrder"
import {$IUpgradeAccessModifier, $IUpgradeAccessModifier$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeAccessModifier"
import {$ITrackedContentsItemHandler, $ITrackedContentsItemHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.ITrackedContentsItemHandler"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IUpgradeWrapperAccessor, $IUpgradeWrapperAccessor$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeWrapperAccessor"
import {$IStorageFluidHandler, $IStorageFluidHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageFluidHandler"
import {$IFluidHandlerWrapperUpgrade, $IFluidHandlerWrapperUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.api.IFluidHandlerWrapperUpgrade"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$IInventoryWrapperUpgrade, $IInventoryWrapperUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.api.IInventoryWrapperUpgrade"
import {$InceptionUpgradeItem, $InceptionUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.inception.InceptionUpgradeItem"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"

export class $InceptionUpgradeWrapper extends $UpgradeWrapperBase<($InceptionUpgradeWrapper), ($InceptionUpgradeItem)> implements $IInventoryWrapperUpgrade, $IUpgradeAccessModifier, $IFluidHandlerWrapperUpgrade, $IEnergyStorageUpgradeWrapper {

constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "wrapInventory"(arg0: $ITrackedContentsItemHandler$$Type): $ITrackedContentsItemHandler
public "wrapAccessor"(arg0: $IUpgradeWrapperAccessor$$Type): $IUpgradeWrapperAccessor
public "wrapHandler"(arg0: $IStorageFluidHandler$$Type, arg1: $ItemStack$$Type): $IStorageFluidHandler
public "wrapStorage"(arg0: $IEnergyStorage$$Type): $IEnergyStorage
public "hideSettingsTab"(): boolean
public "setInventoryOrder"(arg0: $InventoryOrder$$Type): void
public "getInventoryOrder"(): $InventoryOrder
set "inventoryOrder"(value: $InventoryOrder$$Type)
get "inventoryOrder"(): $InventoryOrder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InceptionUpgradeWrapper$$Type = ($InceptionUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InceptionUpgradeWrapper_ = $InceptionUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.tank.TankUpgradeWrapper$TankComponentItemHandler" {
import {$TankUpgradeWrapper, $TankUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.tank.TankUpgradeWrapper"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ComponentItemHandler, $ComponentItemHandler$$Type} from "net.neoforged.neoforge.items.ComponentItemHandler"

export class $TankUpgradeWrapper$TankComponentItemHandler extends $ComponentItemHandler {

constructor(arg0: $TankUpgradeWrapper$$Type, arg1: $ItemStack$$Type)

public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankUpgradeWrapper$TankComponentItemHandler$$Type = ($TankUpgradeWrapper$TankComponentItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankUpgradeWrapper$TankComponentItemHandler_ = $TankUpgradeWrapper$TankComponentItemHandler$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.blockconverter.BlockConverterUpgradeWrapper" {
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$BlockConverterUpgradeItem, $BlockConverterUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.blockconverter.BlockConverterUpgradeItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $BlockConverterUpgradeWrapper<U extends $BlockConverterUpgradeItem<(U), (W)>, W extends $BlockConverterUpgradeWrapper<(U), (W)>> extends $UpgradeWrapperBase<(W), (U)> {

constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "setRecipeId"(arg0: $ResourceLocation$$Type): void
public "canBeDisabled"(): boolean
public "getRecipeId"(): $Optional<($ResourceLocation)>
public "getInputInventory"(): $IItemHandlerModifiable
public "setShiftClickIntoStorage"(arg0: boolean): void
public "shouldShiftClickIntoStorage"(): boolean
set "recipeId"(value: $ResourceLocation$$Type)
get "recipeId"(): $Optional<($ResourceLocation)>
get "inputInventory"(): $IItemHandlerModifiable
set "shiftClickIntoStorage"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockConverterUpgradeWrapper$$Type<U, W> = ($BlockConverterUpgradeWrapper<(U), (W)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockConverterUpgradeWrapper_<U, W> = $BlockConverterUpgradeWrapper$$Type<(U), (W)>;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$ObservableFilterItemStackHandler" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AlchemyFilterAttribute, $AlchemyFilterAttribute$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyFilterAttribute"
import {$List, $List$$Type} from "java.util.List"
import {$AlchemyUpgradeWrapper, $AlchemyUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$FilterItemStackHandler, $FilterItemStackHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.util.FilterItemStackHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $AlchemyUpgradeWrapper$ObservableFilterItemStackHandler extends $FilterItemStackHandler {

constructor(arg0: $AlchemyUpgradeWrapper$$Type, arg1: integer)

public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "initFilters"(arg0: $List$$Type<($AlchemyFilterAttribute$$Type)>): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeWrapper$ObservableFilterItemStackHandler$$Type = ($AlchemyUpgradeWrapper$ObservableFilterItemStackHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyUpgradeWrapper$ObservableFilterItemStackHandler_ = $AlchemyUpgradeWrapper$ObservableFilterItemStackHandler$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.crafting.UpgradeNextTierRecipe$Serializer" {
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$$Type} from "net.p3pp3rf1y.sophisticatedcore.crafting.RecipeWrapperSerializer"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$UpgradeNextTierRecipe, $UpgradeNextTierRecipe$$Type} from "net.p3pp3rf1y.sophisticatedcore.crafting.UpgradeNextTierRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $UpgradeNextTierRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($UpgradeNextTierRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeNextTierRecipe$Serializer$$Type = ($UpgradeNextTierRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeNextTierRecipe$Serializer_ = $UpgradeNextTierRecipe$Serializer$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.refill.RefillUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RefillUpgradeWrapper, $RefillUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.refill.RefillUpgradeWrapper"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $RefillUpgradeItem extends $UpgradeItemBase<($RefillUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IntSupplier$$Type, arg1: boolean, arg2: boolean)

public "getType"(): $UpgradeType<($RefillUpgradeWrapper)>
public "supportsBlockPick"(): boolean
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
public "allowsTargetSlotSelection"(): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($RefillUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefillUpgradeItem$$Type = ($RefillUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefillUpgradeItem_ = $RefillUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IInsertResponseUpgrade" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IItemHandlerSimpleInserter, $IItemHandlerSimpleInserter$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.IItemHandlerSimpleInserter"

export interface $IInsertResponseUpgrade {

 "onBeforeInsert"(arg0: $IItemHandlerSimpleInserter$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: boolean): $ItemStack
 "onAfterInsert"(arg0: $IItemHandlerSimpleInserter$$Type, arg1: integer): void
}

export namespace $IInsertResponseUpgrade {
const probejs$$marker: never
}
export class $IInsertResponseUpgrade$$Static implements $IInsertResponseUpgrade {


 "onBeforeInsert"(arg0: $IItemHandlerSimpleInserter$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: boolean): $ItemStack
 "onAfterInsert"(arg0: $IItemHandlerSimpleInserter$$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInsertResponseUpgrade$$Type = ($IInsertResponseUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInsertResponseUpgrade_ = $IInsertResponseUpgrade$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeWrapper" {
import {$IAutoCookingUpgradeItem, $IAutoCookingUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.IAutoCookingUpgradeItem"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$CookingLogic, $CookingLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingLogic"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FilterLogic, $FilterLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$$Type} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import {$ITickableUpgrade, $ITickableUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ICookingUpgrade, $ICookingUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.ICookingUpgrade"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $AutoCookingUpgradeWrapper<W extends $AutoCookingUpgradeWrapper<(W), (U), (R)>, U extends ($UpgradeItemBase<(W)>) & ($IAutoCookingUpgradeItem), R extends $AbstractCookingRecipe> extends $UpgradeWrapperBase<(W), (U)> implements $ITickableUpgrade, $ICookingUpgrade<(R)> {

constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>, arg3: $RecipeType$$Type<(R)>, arg4: float)

public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "setEnabled"(arg0: boolean): void
public "getCookingLogic"(): $CookingLogic<(R)>
public "getFuelFilterLogic"(): $FilterLogic
public "getInputFilterLogic"(): $FilterLogic
public "onBeforeRemoved"(): void
set "enabled"(value: boolean)
get "cookingLogic"(): $CookingLogic<(R)>
get "fuelFilterLogic"(): $FilterLogic
get "inputFilterLogic"(): $FilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeWrapper$$Type<W, U, R> = ($AutoCookingUpgradeWrapper<(W), (U), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoCookingUpgradeWrapper_<W, U, R> = $AutoCookingUpgradeWrapper$$Type<(W), (U), (R)>;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.inventory.ISlotTracker$IItemHandlerInserter" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ISlotTracker$IItemHandlerInserter {

 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack

(arg0: integer, arg1: $ItemStack, arg2: boolean): $ItemStack$$Type
}

export namespace $ISlotTracker$IItemHandlerInserter {
const probejs$$marker: never
}
export class $ISlotTracker$IItemHandlerInserter$$Static implements $ISlotTracker$IItemHandlerInserter {


 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotTracker$IItemHandlerInserter$$Type = ((arg0: integer, arg1: $ItemStack, arg2: boolean) => $ItemStack$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlotTracker$IItemHandlerInserter_ = $ISlotTracker$IItemHandlerInserter$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedTankUpgrade$TankRenderInfo" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export class $IRenderedTankUpgrade$TankRenderInfo {

constructor()
constructor(arg0: $FluidStack$$Type, arg1: float)

public "getFluid"(): $Optional<($FluidStack)>
public static "deserialize"(arg0: $CompoundTag$$Type): $IRenderedTankUpgrade$TankRenderInfo
public "serialize"(): $CompoundTag
public "getFillRatio"(): float
public "setFillRatio"(arg0: float): void
public "setFluid"(arg0: $FluidStack$$Type): void
get "fluid"(): $Optional<($FluidStack)>
get "fillRatio"(): float
set "fillRatio"(value: float)
set "fluid"(value: $FluidStack$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderedTankUpgrade$TankRenderInfo$$Type = ($IRenderedTankUpgrade$TankRenderInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderedTankUpgrade$TankRenderInfo_ = $IRenderedTankUpgrade$TankRenderInfo$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.blockconverter.BlockConverterUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockConverterUpgradeWrapper, $BlockConverterUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.blockconverter.BlockConverterUpgradeWrapper"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $BlockConverterUpgradeItem<U extends $BlockConverterUpgradeItem<(U), (W)>, W extends $BlockConverterUpgradeWrapper<(U), (W)>> extends $UpgradeItemBase<(W)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IUpgradeCountLimitConfig$$Type)

public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockConverterUpgradeItem$$Type<U, W> = ($BlockConverterUpgradeItem<(U), (W)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockConverterUpgradeItem_<U, W> = $BlockConverterUpgradeItem$$Type<(U), (W)>;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.backpack.wrapper.IBackpackWrapper" {
import {$ITrackedContentsItemHandler, $ITrackedContentsItemHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.ITrackedContentsItemHandler"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$UpgradeHandler, $UpgradeHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeHandler"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SettingsHandler, $SettingsHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.settings.SettingsHandler"
import {$IntConsumer, $IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$InventoryHandler, $InventoryHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryHandler"
import {$IStorageFluidHandler, $IStorageFluidHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageFluidHandler"
import {$IFluidHandlerItem, $IFluidHandlerItem$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandlerItem"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$RenderInfo, $RenderInfo$$Type} from "net.p3pp3rf1y.sophisticatedcore.renderdata.RenderInfo"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SortBy, $SortBy$$Type} from "net.p3pp3rf1y.sophisticatedcore.common.gui.SortBy"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"

export interface $IBackpackWrapper extends $IStorageWrapper {

 "setSlotNumbers"(arg0: integer, arg1: integer): void
 "copyDataTo"(arg0: $IStorageWrapper$$Type): void
 "setTemplate"(arg0: $ResourceLocation$$Type): void
 "cloneBackpack"(): $ItemStack
 "setLoot"(arg0: $ResourceLocation$$Type, arg1: float): void
 "getBackpack"(): $ItemStack
 "getItemFluidHandler"(): $Optional<($IFluidHandlerItem)>
 "removeContentsUUIDTag"(): void
 "getSettingsHandler"(): $SettingsHandler
 "removeContentsUuid"(): void
 "unregisterOnInventoryHandlerRefreshListener"(): void
 "registerOnInventoryHandlerRefreshListener"(arg0: $Runnable$$Type): void
 "unregisterOnSlotsChangeListener"(): void
 "setBackpackStack"(arg0: $ItemStack$$Type): $IBackpackWrapper
 "fillFromTemplate"(): void
 "setContentsUuid"(arg0: $UUID$$Type): void
 "registerOnSlotsChangeListener"(arg0: $IntConsumer$$Type): void
 "fillWithLootAndExtraItems"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "getDisplayName"(): $Component
 "sort"(): void
 "onInit"(): void
 "getOpenTabId"(): $Optional<(integer)>
 "setOpenTabId"(arg0: integer): void
 "setSortBy"(arg0: $SortBy$$Type): void
 "getSortBy"(): $SortBy
 "setPersistent"(arg0: boolean): void
 "fillWithLoot"(arg0: $Player$$Type): void
 "getStorageType"(): StringJS
 "getRenderInfo"(): $RenderInfo
 "getContentsUuid"(): $Optional<($UUID)>
 "onContentsNbtUpdated"(): void
 "removeOpenTabId"(): void
 "setColumnsTaken"(arg0: integer, arg1: boolean): void
 "getColumnsTaken"(): integer
 "getNumberOfSlotRows"(): integer
 "getWrappedStorageStack"(): $ItemStack
 "isUpgradeRunnable"(arg0: $ItemStack$$Type): boolean
 "getInventoryHandler"(): $InventoryHandler
 "getEnergyStorage"(): $Optional<($IEnergyStorage)>
 "getFluidHandler"(): $Optional<($IStorageFluidHandler)>
 "getUpgradeHandler"(): $UpgradeHandler
 "getInventoryForUpgradeProcessing"(): $ITrackedContentsItemHandler
 "refreshInventoryForUpgradeProcessing"(): void
 "setUpgradeCachesInvalidatedHandler"(arg0: $Runnable$$Type): void
 "setInventorySlotChangeHandler"(arg0: $Runnable$$Type): void
 "refreshInventoryForInputOutput"(): void
 "getBaseStackSizeMultiplier"(): integer
 "setContentsChangeHandler"(arg0: $Runnable$$Type): void
 "getInventoryForInputOutput"(): $ITrackedContentsItemHandler
 "registerOnInventoryInputOutputHandlerRefreshListener"(arg0: $Runnable$$Type): void
 "getMainColor"(): integer
 "getAccentColor"(): integer
 "setColors"(arg0: integer, arg1: integer): void
set "template"(value: $ResourceLocation$$Type)
get "backpack"(): $ItemStack
get "itemFluidHandler"(): $Optional<($IFluidHandlerItem)>
get "settingsHandler"(): $SettingsHandler
set "backpackStack"(value: $ItemStack$$Type)
set "contentsUuid"(value: $UUID$$Type)
get "displayName"(): $Component
get "openTabId"(): $Optional<(integer)>
set "openTabId"(value: integer)
set "sortBy"(value: $SortBy$$Type)
get "sortBy"(): $SortBy
set "persistent"(value: boolean)
get "storageType"(): StringJS
get "renderInfo"(): $RenderInfo
get "contentsUuid"(): $Optional<($UUID)>
get "columnsTaken"(): integer
get "numberOfSlotRows"(): integer
get "wrappedStorageStack"(): $ItemStack
get "inventoryHandler"(): $InventoryHandler
get "energyStorage"(): $Optional<($IEnergyStorage)>
get "fluidHandler"(): $Optional<($IStorageFluidHandler)>
get "upgradeHandler"(): $UpgradeHandler
get "inventoryForUpgradeProcessing"(): $ITrackedContentsItemHandler
set "upgradeCachesInvalidatedHandler"(value: $Runnable$$Type)
set "inventorySlotChangeHandler"(value: $Runnable$$Type)
get "baseStackSizeMultiplier"(): integer
set "contentsChangeHandler"(value: $Runnable$$Type)
get "inventoryForInputOutput"(): $ITrackedContentsItemHandler
get "mainColor"(): integer
get "accentColor"(): integer
}

export namespace $IBackpackWrapper {
const probejs$$marker: never
}
export class $IBackpackWrapper$$Static implements $IBackpackWrapper {


 "setSlotNumbers"(arg0: integer, arg1: integer): void
 "copyDataTo"(arg0: $IStorageWrapper$$Type): void
 "setTemplate"(arg0: $ResourceLocation$$Type): void
 "cloneBackpack"(): $ItemStack
 "setLoot"(arg0: $ResourceLocation$$Type, arg1: float): void
 "getBackpack"(): $ItemStack
 "getItemFluidHandler"(): $Optional<($IFluidHandlerItem)>
 "removeContentsUUIDTag"(): void
 "getSettingsHandler"(): $SettingsHandler
 "removeContentsUuid"(): void
 "unregisterOnInventoryHandlerRefreshListener"(): void
 "registerOnInventoryHandlerRefreshListener"(arg0: $Runnable$$Type): void
 "unregisterOnSlotsChangeListener"(): void
 "setBackpackStack"(arg0: $ItemStack$$Type): $IBackpackWrapper
 "fillFromTemplate"(): void
 "setContentsUuid"(arg0: $UUID$$Type): void
 "registerOnSlotsChangeListener"(arg0: $IntConsumer$$Type): void
 "fillWithLootAndExtraItems"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "getDisplayName"(): $Component
 "sort"(): void
 "onInit"(): void
 "getOpenTabId"(): $Optional<(integer)>
 "setOpenTabId"(arg0: integer): void
 "setSortBy"(arg0: $SortBy$$Type): void
 "getSortBy"(): $SortBy
 "setPersistent"(arg0: boolean): void
 "fillWithLoot"(arg0: $Player$$Type): void
 "getStorageType"(): StringJS
 "getRenderInfo"(): $RenderInfo
 "getContentsUuid"(): $Optional<($UUID)>
 "onContentsNbtUpdated"(): void
 "removeOpenTabId"(): void
 "setColumnsTaken"(arg0: integer, arg1: boolean): void
 "getColumnsTaken"(): integer
 "getNumberOfSlotRows"(): integer
 "getWrappedStorageStack"(): $ItemStack
 "isUpgradeRunnable"(arg0: $ItemStack$$Type): boolean
 "getInventoryHandler"(): $InventoryHandler
 "getEnergyStorage"(): $Optional<($IEnergyStorage)>
 "getFluidHandler"(): $Optional<($IStorageFluidHandler)>
 "getUpgradeHandler"(): $UpgradeHandler
 "getInventoryForUpgradeProcessing"(): $ITrackedContentsItemHandler
 "refreshInventoryForUpgradeProcessing"(): void
 "setUpgradeCachesInvalidatedHandler"(arg0: $Runnable$$Type): void
 "setInventorySlotChangeHandler"(arg0: $Runnable$$Type): void
 "refreshInventoryForInputOutput"(): void
 "getBaseStackSizeMultiplier"(): integer
 "setContentsChangeHandler"(arg0: $Runnable$$Type): void
 "getInventoryForInputOutput"(): $ITrackedContentsItemHandler
 "registerOnInventoryInputOutputHandlerRefreshListener"(arg0: $Runnable$$Type): void
 "getMainColor"(): integer
 "getAccentColor"(): integer
 "setColors"(arg0: integer, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBackpackWrapper$$Type = ($IBackpackWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBackpackWrapper_ = $IBackpackWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.voiding.VoidUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$VoidUpgradeWrapper, $VoidUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.voiding.VoidUpgradeWrapper"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$VoidUpgradeConfig, $VoidUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.voiding.VoidUpgradeConfig"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $VoidUpgradeItem extends $UpgradeItemBase<($VoidUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($VoidUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $VoidUpgradeConfig$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($VoidUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
public "isVoidAnythingEnabled"(): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($VoidUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
get "voidAnythingEnabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidUpgradeItem$$Type = ($VoidUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidUpgradeItem_ = $VoidUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.settings.ISettingsCategory" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export interface $ISettingsCategory<T extends $ISettingsCategory<(any)>> {

 "copyTo"(arg0: T, arg1: integer, arg2: integer): void
 "overwriteWith"(arg0: T): void
 "reloadFrom"(arg0: $CompoundTag$$Type): void
 "deleteSlotSettingsFrom"(arg0: integer): void
 "isLargerThanNumberOfSlots"(arg0: integer): boolean
}

export namespace $ISettingsCategory {
const probejs$$marker: never
}
export class $ISettingsCategory$$Static<T extends $ISettingsCategory<(any)>> implements $ISettingsCategory {


 "copyTo"(arg0: T, arg1: integer, arg2: integer): void
 "overwriteWith"(arg0: T): void
 "reloadFrom"(arg0: $CompoundTag$$Type): void
 "deleteSlotSettingsFrom"(arg0: integer): void
 "isLargerThanNumberOfSlots"(arg0: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISettingsCategory$$Type<T> = ($ISettingsCategory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISettingsCategory_<T> = $ISettingsCategory$$Type<(T)>;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.inventory.ItemStackKey" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ServerTickEvent$Post, $ServerTickEvent$Post$$Type} from "net.neoforged.neoforge.event.tick.ServerTickEvent$Post"

export class $ItemStackKey {


public "getStack"(): $ItemStack
public "stack"(): $ItemStack
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $ItemStack$$Type): boolean
public static "of"(arg0: $ItemStack$$Type): $ItemStackKey
public static "clearCacheOnTickEnd"(arg0: $ServerTickEvent$Post$$Type): void
public "hashCodeNotEquals"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackKey$$Type = ($ItemStackKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackKey_ = $ItemStackKey$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.filter.FilterUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$FilterUpgradeWrapper, $FilterUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.filter.FilterUpgradeWrapper"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $FilterUpgradeItem extends $UpgradeItemBase<($FilterUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($FilterUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IntSupplier$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($FilterUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($FilterUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterUpgradeItem$$Type = ($FilterUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterUpgradeItem_ = $FilterUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.BlastingUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UpgradeGroup, $UpgradeGroup$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$CookingUpgradeWrapper$BlastingUpgradeWrapper, $CookingUpgradeWrapper$BlastingUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeWrapper$BlastingUpgradeWrapper"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICookingUpgradeItem, $ICookingUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.ICookingUpgradeItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CookingUpgradeConfig, $CookingUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeConfig"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $BlastingUpgradeItem extends $UpgradeItemBase<($CookingUpgradeWrapper$BlastingUpgradeWrapper)> implements $ICookingUpgradeItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($CookingUpgradeWrapper$BlastingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $CookingUpgradeConfig$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($CookingUpgradeWrapper$BlastingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getUpgradeGroup"(): $UpgradeGroup
public "getCookingUpgradeConfig"(): $CookingUpgradeConfig
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($CookingUpgradeWrapper$BlastingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeGroup"(): $UpgradeGroup
get "cookingUpgradeConfig"(): $CookingUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastingUpgradeItem$$Type = ($BlastingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlastingUpgradeItem_ = $BlastingUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.pump.FluidFilterLogic" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $FluidFilterLogic {

constructor(arg0: integer, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "getFluid"(arg0: integer): $FluidStack
public "fluidMatches"(arg0: $FluidStack$$Type): boolean
public "setFluid"(arg0: integer, arg1: $FluidStack$$Type): void
public "getNumberOfFluidFilters"(): integer
get "numberOfFluidFilters"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidFilterLogic$$Type = ($FluidFilterLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidFilterLogic_ = $FluidFilterLogic$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.util.SimpleItemContent" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$DataComponentHolder, $DataComponentHolder$$Type} from "net.minecraft.core.component.DataComponentHolder"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$TooltipProvider, $TooltipProvider$$Type} from "net.minecraft.world.item.component.TooltipProvider"

export class $SimpleItemContent implements $DataComponentHolder {
static readonly "CODEC": $Codec<($SimpleItemContent)>
static readonly "EMPTY": $SimpleItemContent
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SimpleItemContent)>


public "is"(arg0: $TagKey$$Type<($Item)>): boolean
public "is"(arg0: $Item$$Type): boolean
public "is"(arg0: $HolderSet$$Type<($Item)>): boolean
public "is"(arg0: $Predicate$$Type<($Holder<($Item)>)>): boolean
public "is"(arg0: $Holder$$Type<($Item)>): boolean
public "getItem"(): $Item
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"(arg0: $ItemStack$$Type): $SimpleItemContent
public "isEmpty"(): boolean
public "matches"(arg0: $ItemStack$$Type): boolean
public "getCount"(): integer
public "copy"(): $ItemStack
public "isSameItem"(arg0: $ItemStack$$Type): boolean
public "getComponents"(): $DataComponentMap
public "isSameItemSameComponents"(arg0: $ItemStack$$Type): boolean
public "isSameItemSameComponents"(arg0: $SimpleItemContent$$Type): boolean
public "has"(arg0: $DataComponentType$$Type<(any)>): boolean
public "get"<T>(arg0: $DataComponentType$$Type<(T)>): T
public "getOrDefault"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T): T
public "has"(arg0: $Supplier$$Type<($DataComponentType$$Type<(any)>)>): boolean
public "get"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>): T
public "getOrDefault"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): T
public "addToTooltip"<T extends $TooltipProvider>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
public "addToTooltip"<T extends $TooltipProvider>(arg0: $DataComponentType$$Type<(T)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
get "item"(): $Item
get "empty"(): boolean
get "count"(): integer
get "components"(): $DataComponentMap
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleItemContent$$Type = ($SimpleItemContent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleItemContent_ = $SimpleItemContent$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.jukebox.JukeboxUpgradeWrapper" {
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$JukeboxUpgradeItem, $JukeboxUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.jukebox.JukeboxUpgradeItem"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$RepeatMode, $RepeatMode$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.jukebox.RepeatMode"
import {$JukeboxSong, $JukeboxSong$$Type} from "net.minecraft.world.item.JukeboxSong"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$ITickableUpgrade, $ITickableUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $JukeboxUpgradeWrapper extends $UpgradeWrapperBase<($JukeboxUpgradeWrapper), ($JukeboxUpgradeItem)> implements $ITickableUpgrade {


public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "previous"(): void
public "next"(): void
public "stop"(arg0: $LivingEntity$$Type): void
public "play"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "play"(arg0: $Entity$$Type): void
public "isPlaying"(): boolean
public "playNext"(): void
public "playNext"(arg0: boolean): void
public "getDisc"(): $ItemStack
public "getRepeatMode"(): $RepeatMode
public "playPrevious"(): void
public "setRepeatMode"(arg0: $RepeatMode$$Type): void
public "onBeforeRemoved"(): void
public "getDiscSlotActive"(): integer
public "isShuffleEnabled"(): boolean
public "getJukeboxSongHolder"(arg0: $Level$$Type): $Optional<($Holder<($JukeboxSong)>)>
public "setShuffleEnabled"(arg0: boolean): void
public "getDiscInventory"(): $IItemHandler
public "getDiscFinishTime"(): long
get "playing"(): boolean
get "disc"(): $ItemStack
get "repeatMode"(): $RepeatMode
set "repeatMode"(value: $RepeatMode$$Type)
get "discSlotActive"(): integer
get "shuffleEnabled"(): boolean
set "shuffleEnabled"(value: boolean)
get "discInventory"(): $IItemHandler
get "discFinishTime"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JukeboxUpgradeWrapper$$Type = ($JukeboxUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JukeboxUpgradeWrapper_ = $JukeboxUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.IAutoCookingUpgradeItem" {
import {$AutoCookingUpgradeConfig, $AutoCookingUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeConfig"

export interface $IAutoCookingUpgradeItem {

 "getAutoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig

(): $AutoCookingUpgradeConfig$$Type
get "autoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
}

export namespace $IAutoCookingUpgradeItem {
const probejs$$marker: never
}
export class $IAutoCookingUpgradeItem$$Static implements $IAutoCookingUpgradeItem {


 "getAutoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAutoCookingUpgradeItem$$Type = (() => $AutoCookingUpgradeConfig$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAutoCookingUpgradeItem_ = $IAutoCookingUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.xppump.AutomationDirection" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $AutomationDirection extends $Enum<($AutomationDirection)> implements $StringRepresentable {
static readonly "INPUT": $AutomationDirection
static readonly "CODEC": $Codec<($AutomationDirection)>
static readonly "OUTPUT": $AutomationDirection
static readonly "KEEP": $AutomationDirection
static readonly "OFF": $AutomationDirection
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($AutomationDirection)>


public static "values"(): ($AutomationDirection)[]
public static "valueOf"(arg0: StringJS): $AutomationDirection
public "next"(): $AutomationDirection
public static "fromName"(arg0: StringJS): $AutomationDirection
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
export type $AutomationDirection$$Type = (("input") | ("output") | ("keep") | ("off"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomationDirection_ = $AutomationDirection$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.voiding.VoidUpgradeWrapper" {
import {$VoidUpgradeItem, $VoidUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.voiding.VoidUpgradeItem"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$IInsertResponseUpgrade, $IInsertResponseUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IInsertResponseUpgrade"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FilterLogic, $FilterLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"
import {$ISlotLimitUpgrade, $ISlotLimitUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ISlotLimitUpgrade"
import {$IOverflowResponseUpgrade, $IOverflowResponseUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IOverflowResponseUpgrade"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IFilteredUpgrade, $IFilteredUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IFilteredUpgrade"
import {$ISlotChangeResponseUpgrade, $ISlotChangeResponseUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.ISlotChangeResponseUpgrade"
import {$IItemHandlerSimpleInserter, $IItemHandlerSimpleInserter$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.IItemHandlerSimpleInserter"
import {$ITickableUpgrade, $ITickableUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"

export class $VoidUpgradeWrapper extends $UpgradeWrapperBase<($VoidUpgradeWrapper), ($VoidUpgradeItem)> implements $IInsertResponseUpgrade, $IFilteredUpgrade, $ISlotChangeResponseUpgrade, $ITickableUpgrade, $IOverflowResponseUpgrade, $ISlotLimitUpgrade {

constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "getSlotLimit"(): integer
public "getFilterLogic"(): $FilterLogic
public "onBeforeInsert"(arg0: $IItemHandlerSimpleInserter$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: boolean): $ItemStack
public "onAfterInsert"(arg0: $IItemHandlerSimpleInserter$$Type, arg1: integer): void
public "onSlotChange"(arg0: $IItemHandler$$Type, arg1: integer): void
public "worksInGui"(): boolean
public "onOverflow"(arg0: $ItemStack$$Type): $ItemStack
public "setShouldWorkdInGUI"(arg0: boolean): void
public "shouldWorkInGUI"(): boolean
public "shouldVoidOverflow"(): boolean
public "setShouldVoidOverflow"(arg0: boolean): void
public "stackMatchesFilter"(arg0: $ItemStack$$Type): boolean
public "isVoidAnythingEnabled"(): boolean
public "setShouldVoidOverflowDefaultOrLoadFromNbt"(arg0: boolean): void
public "stackMatchesFilterStack"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
get "slotLimit"(): integer
get "filterLogic"(): $FilterLogic
set "shouldWorkdInGUI"(value: boolean)
get "voidAnythingEnabled"(): boolean
set "shouldVoidOverflowDefaultOrLoadFromNbt"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidUpgradeWrapper$$Type = ($VoidUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidUpgradeWrapper_ = $VoidUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.crafting.BackpackUpgradeRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$IWrapperRecipe, $IWrapperRecipe$$Type} from "net.p3pp3rf1y.sophisticatedcore.crafting.IWrapperRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BackpackUpgradeRecipe extends $ShapedRecipe implements $IWrapperRecipe<($ShapedRecipe)> {
 "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(arg0: $ShapedRecipe$$Type)

public "getCompose"(): $Recipe<(any)>
public "isSpecial"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
get "compose"(): $Recipe<(any)>
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackUpgradeRecipe$$Type = ($BackpackUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackUpgradeRecipe_ = $BackpackUpgradeRecipe$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeWrapperAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$Class, $Class$$Type} from "java.lang.Class"

export interface $IUpgradeWrapperAccessor {

 "clearCache"(): void
 "getWrappersThatImplementFromMainStorage"<T>(arg0: $Class$$Type<(T)>): $List<(T)>
 "onBeforeDeconstruct"(): void
 "getWrappersThatImplement"<T>(arg0: $Class$$Type<(T)>): $List<(T)>
}

export namespace $IUpgradeWrapperAccessor {
const probejs$$marker: never
}
export class $IUpgradeWrapperAccessor$$Static implements $IUpgradeWrapperAccessor {


 "clearCache"(): void
 "getWrappersThatImplementFromMainStorage"<T>(arg0: $Class$$Type<(T)>): $List<(T)>
 "onBeforeDeconstruct"(): void
 "getWrappersThatImplement"<T>(arg0: $Class$$Type<(T)>): $List<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeWrapperAccessor$$Type = ($IUpgradeWrapperAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeWrapperAccessor_ = $IUpgradeWrapperAccessor$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeConfig" {
import {$CookingUpgradeConfig, $CookingUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeConfig"
import {$ModConfigSpec$DoubleValue, $ModConfigSpec$DoubleValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$DoubleValue"
import {$ModConfigSpec$IntValue, $ModConfigSpec$IntValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$IntValue"
import {$ModConfigSpec$Builder, $ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $AutoCookingUpgradeConfig extends $CookingUpgradeConfig {
readonly "fuelFilterSlotsInRow": $ModConfigSpec$IntValue
readonly "inputFilterSlots": $ModConfigSpec$IntValue
readonly "fuelFilterSlots": $ModConfigSpec$IntValue
readonly "fuelEfficiencyMultiplier": $ModConfigSpec$DoubleValue
readonly "inputFilterSlotsInRow": $ModConfigSpec$IntValue
readonly "cookingSpeedMultiplier": $ModConfigSpec$DoubleValue

constructor(arg0: $ModConfigSpec$Builder$$Type, arg1: StringJS, arg2: StringJS)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCookingUpgradeConfig$$Type = ($AutoCookingUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoCookingUpgradeConfig_ = $AutoCookingUpgradeConfig$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.backpack.BackpackBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$PlayerInteractEvent$RightClickBlock, $PlayerInteractEvent$RightClickBlock$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$RightClickBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BackpackBlock extends $Block implements $EntityBlock, $SimpleWaterloggedBlock {
static readonly "BATTERY": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "LEFT_TANK": $BooleanProperty
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
static readonly "RIGHT_TANK": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor()
constructor(arg0: float)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public static "playerInteract"(arg0: $PlayerInteractEvent$RightClickBlock$$Type): void
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "canEntityDestroy"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
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
export type $BackpackBlock$$Type = ($BackpackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackBlock_ = $BackpackBlock$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.api.IEnergyStorageUpgradeWrapper" {
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"

export interface $IEnergyStorageUpgradeWrapper {

 "wrapStorage"(arg0: $IEnergyStorage$$Type): $IEnergyStorage

(arg0: $IEnergyStorage): $IEnergyStorage$$Type
}

export namespace $IEnergyStorageUpgradeWrapper {
const probejs$$marker: never
}
export class $IEnergyStorageUpgradeWrapper$$Static implements $IEnergyStorageUpgradeWrapper {


 "wrapStorage"(arg0: $IEnergyStorage$$Type): $IEnergyStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyStorageUpgradeWrapper$$Type = ((arg0: $IEnergyStorage) => $IEnergyStorage$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergyStorageUpgradeWrapper_ = $IEnergyStorageUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.backpack.BackpackItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IStashStorageItem, $IStashStorageItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStashStorageItem"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$TooltipComponent, $TooltipComponent$$Type} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction, $ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IStashStorageItem$StashResult, $IStashStorageItem$StashResult$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStashStorageItem$StashResult"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SlotAccess, $SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$BackpackBlock, $BackpackBlock$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.backpack.BackpackBlock"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ItemBase, $ItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.util.ItemBase"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $BackpackItem extends $ItemBase implements $IStashStorageItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IntSupplier$$Type, arg1: $IntSupplier$$Type, arg2: $Supplier$$Type<($BackpackBlock$$Type)>)
constructor(arg0: $IntSupplier$$Type, arg1: $IntSupplier$$Type, arg2: $Supplier$$Type<($BackpackBlock$$Type)>, arg3: $UnaryOperator$$Type<($Item$Properties)>)

public "createEntity"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $ItemStack$$Type): $Entity
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "stash"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public static "setColors"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer): void
public "tryPlace"(arg0: $Player$$Type, arg1: $Direction$$Type, arg2: $BlockPlaceContext$$Type): $InteractionResult
public "getNumberOfSlots"(): integer
public "addCreativeTabItems"(arg0: $Consumer$$Type<($ItemStack)>): void
public "getInventoryTooltip"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getItemStashable"(arg0: $HolderLookup$Provider$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): $IStashStorageItem$StashResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onDroppedByPlayer"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public "hasCustomEntity"(arg0: $ItemStack$$Type): boolean
public "overrideStackedOnOther"(arg0: $ItemStack$$Type, arg1: $Slot$$Type, arg2: $ClickAction$$Type, arg3: $Player$$Type): boolean
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getEquipmentSlot"(arg0: $ItemStack$$Type): $EquipmentSlot
public "makesPiglinsNeutral"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "canFitInsideContainerItems"(): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type, arg3: $ClickAction$$Type, arg4: $Player$$Type, arg5: $SlotAccess$$Type): boolean
public "getNumberOfUpgradeSlots"(): integer
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "numberOfSlots"(): integer
get "numberOfUpgradeSlots"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackItem$$Type = ($BackpackItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackItem_ = $BackpackItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.deposit.DepositFilterLogic" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FilterLogic, $FilterLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$FilterAttributes, $FilterAttributes$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterAttributes"
import {$DepositFilterType, $DepositFilterType$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.deposit.DepositFilterType"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $DepositFilterLogic extends $FilterLogic {

constructor(arg0: $ItemStack$$Type, arg1: $Consumer$$Type<($ItemStack)>, arg2: integer, arg3: $DeferredHolder$$Type<($DataComponentType$$Type<(any)>), ($DataComponentType$$Type<($FilterAttributes$$Type)>)>)

public "setInventory"(arg0: $IItemHandler$$Type): void
public "matchesFilter"(arg0: $ItemStack$$Type): boolean
public "setDepositFilterType"(arg0: $DepositFilterType$$Type): void
public "getDepositFilterType"(): $DepositFilterType
set "inventory"(value: $IItemHandler$$Type)
set "depositFilterType"(value: $DepositFilterType$$Type)
get "depositFilterType"(): $DepositFilterType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepositFilterLogic$$Type = ($DepositFilterLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DepositFilterLogic_ = $DepositFilterLogic$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeConfig" {
import {$ModConfigSpec$DoubleValue, $ModConfigSpec$DoubleValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$DoubleValue"
import {$ModConfigSpec$Builder, $ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $CookingUpgradeConfig {
readonly "fuelEfficiencyMultiplier": $ModConfigSpec$DoubleValue
readonly "cookingSpeedMultiplier": $ModConfigSpec$DoubleValue

constructor(arg0: $ModConfigSpec$Builder$$Type, arg1: StringJS, arg2: StringJS)

public static "getInstance"(arg0: $ModConfigSpec$Builder$$Type, arg1: StringJS, arg2: StringJS): $CookingUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeConfig$$Type = ($CookingUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingUpgradeConfig_ = $CookingUpgradeConfig$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.renderdata.RenderInfo$DisplayItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DisplaySide, $DisplaySide$$Type} from "net.p3pp3rf1y.sophisticatedcore.renderdata.DisplaySide"

export class $RenderInfo$DisplayItem {

constructor(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: $DisplaySide$$Type)

public "getItem"(): $ItemStack
public "getSlotIndex"(): integer
public "getRotation"(): integer
public "getDisplaySide"(): $DisplaySide
get "item"(): $ItemStack
get "slotIndex"(): integer
get "rotation"(): integer
get "displaySide"(): $DisplaySide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderInfo$DisplayItem$$Type = ($RenderInfo$DisplayItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderInfo$DisplayItem_ = $RenderInfo$DisplayItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.api.IItemHandlerInteractionUpgrade" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export interface $IItemHandlerInteractionUpgrade {

 "onHandlerInteract"(arg0: $IItemHandler$$Type, arg1: $Player$$Type): void

(arg0: $IItemHandler, arg1: $Player): void
}

export namespace $IItemHandlerInteractionUpgrade {
const probejs$$marker: never
}
export class $IItemHandlerInteractionUpgrade$$Static implements $IItemHandlerInteractionUpgrade {


 "onHandlerInteract"(arg0: $IItemHandler$$Type, arg1: $Player$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandlerInteractionUpgrade$$Type = ((arg0: $IItemHandler, arg1: $Player) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemHandlerInteractionUpgrade_ = $IItemHandlerInteractionUpgrade$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.inventory.IInventoryPartHandler" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BiPredicate, $BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$TriFunction, $TriFunction$$Type} from "org.apache.commons.lang3.function.TriFunction"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export interface $IInventoryPartHandler {

 "getName"(): StringJS
 "isInfinite"(arg0: integer): boolean
 "onInit"(): void
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean, arg3: $TriFunction$$Type<(integer), ($ItemStack), (boolean), ($ItemStack$$Type)>): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Player$$Type, arg3: $BiPredicate$$Type<(integer), ($ItemStack)>): boolean
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type, arg2: $BiConsumer$$Type<(integer), ($ItemStack)>): void
 "getNoItemIcon"(arg0: integer): $Pair<($ResourceLocation), ($ResourceLocation)>
 "canBeReplaced"(): boolean
 "getStackInSlot"(arg0: integer, arg1: $IntFunction$$Type<($ItemStack$$Type)>): $ItemStack
 "getSlots"(): integer
 "getNoSortSlots"(): $Set<(integer)>
 "getFilterItems"(): $Map<($Item), ($Set<(integer)>)>
 "isFilterItem"(arg0: $Item$$Type): boolean
 "getFilterItem"(arg0: integer): $Item
 "getStackLimit"(arg0: integer, arg1: $ItemStack$$Type): integer
 "onContentsChanged"(arg0: integer, arg1: $BiConsumer$$Type<(integer), ($ItemStack)>): void
 "isSlotAccessible"(arg0: integer): boolean
 "onSlotLimitChange"(): void
 "onSlotFilterChanged"(arg0: integer): void

(): StringJS
get "name"(): StringJS
get "slots"(): integer
get "noSortSlots"(): $Set<(integer)>
get "filterItems"(): $Map<($Item), ($Set<(integer)>)>
}

export namespace $IInventoryPartHandler {
const EMPTY: $IInventoryPartHandler
const probejs$$marker: never
}
export class $IInventoryPartHandler$$Static implements $IInventoryPartHandler {
static readonly "EMPTY": $IInventoryPartHandler


 "getName"(): StringJS
 "isInfinite"(arg0: integer): boolean
 "onInit"(): void
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean, arg3: $TriFunction$$Type<(integer), ($ItemStack), (boolean), ($ItemStack$$Type)>): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type, arg2: $Player$$Type, arg3: $BiPredicate$$Type<(integer), ($ItemStack)>): boolean
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type, arg2: $BiConsumer$$Type<(integer), ($ItemStack)>): void
 "getNoItemIcon"(arg0: integer): $Pair<($ResourceLocation), ($ResourceLocation)>
 "canBeReplaced"(): boolean
 "getStackInSlot"(arg0: integer, arg1: $IntFunction$$Type<($ItemStack$$Type)>): $ItemStack
 "getSlots"(): integer
 "getNoSortSlots"(): $Set<(integer)>
 "getFilterItems"(): $Map<($Item), ($Set<(integer)>)>
 "isFilterItem"(arg0: $Item$$Type): boolean
 "getFilterItem"(arg0: integer): $Item
 "getStackLimit"(arg0: integer, arg1: $ItemStack$$Type): integer
 "onContentsChanged"(arg0: integer, arg1: $BiConsumer$$Type<(integer), ($ItemStack)>): void
 "isSlotAccessible"(arg0: integer): boolean
 "onSlotLimitChange"(): void
 "onSlotFilterChanged"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventoryPartHandler$$Type = (() => StringJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInventoryPartHandler_ = $IInventoryPartHandler$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$$Type} from "net.p3pp3rf1y.sophisticatedcore.common.gui.UpgradeSlotChangeResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UpgradeGroup, $UpgradeGroup$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IUpgradeItem, $IUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem"
import {$ItemBase, $ItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.util.ItemBase"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeWrapper, $IUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeWrapper"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"

export class $UpgradeItemBase<T extends $IUpgradeWrapper> extends $ItemBase implements $IUpgradeItem<(T)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>


public "getName"(): $Component
public "getUpgradesPerStorage"(arg0: StringJS): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getUpgradesInGroupPerStorage"(arg0: StringJS): integer
public "getType"(): $UpgradeType<(T)>
public "canSwapUpgradeFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: $IStorageWrapper$$Type, arg3: boolean): $UpgradeSlotChangeResult
public "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$$Type, arg1: boolean): $UpgradeSlotChangeResult
public "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$$Type, arg1: boolean, arg2: $Player$$Type): $UpgradeSlotChangeResult
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getUpgradeGroup"(): $UpgradeGroup
public "canAddUpgradeTo"(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: boolean, arg3: boolean): $UpgradeSlotChangeResult
public "getCleanedUpgradeStack"(arg0: $ItemStack$$Type): $ItemStack
public "checkThisForConflictsWithExistingUpgrades"(arg0: $ItemStack$$Type, arg1: $IStorageWrapper$$Type, arg2: integer): $UpgradeSlotChangeResult
public "getInventoryColumnsTaken"(): integer
public "checkExtraInsertConditions"(arg0: $ItemStack$$Type, arg1: $IStorageWrapper$$Type, arg2: boolean, arg3: integer, arg4: $IUpgradeItem$$Type<(any)>): $UpgradeSlotChangeResult
public "checkExtraInsertConditions"(arg0: $ItemStack$$Type, arg1: $IStorageWrapper$$Type, arg2: boolean, arg3: $IUpgradeItem$$Type<(any)>): $UpgradeSlotChangeResult
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "name"(): $Component
get "type"(): $UpgradeType<(T)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeGroup"(): $UpgradeGroup
get "inventoryColumnsTaken"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeItemBase$$Type<T> = ($UpgradeItemBase<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeItemBase_<T> = $UpgradeItemBase$$Type<(T)>;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.anvil.AnvilUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$AnvilUpgradeWrapper, $AnvilUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.anvil.AnvilUpgradeWrapper"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $AnvilUpgradeItem extends $UpgradeItemBase<($AnvilUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getType"(): $UpgradeType<($AnvilUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($AnvilUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnvilUpgradeItem$$Type = ($AnvilUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnvilUpgradeItem_ = $AnvilUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$FinishUsing" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $AlchemyUpgradeWrapper$FinishUsing {

 "apply"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): $ItemStack

(arg0: $ItemStack, arg1: $LivingEntity): $ItemStack$$Type
}

export namespace $AlchemyUpgradeWrapper$FinishUsing {
const probejs$$marker: never
}
export class $AlchemyUpgradeWrapper$FinishUsing$$Static implements $AlchemyUpgradeWrapper$FinishUsing {


 "apply"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeWrapper$FinishUsing$$Type = ((arg0: $ItemStack, arg1: $LivingEntity) => $ItemStack$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyUpgradeWrapper$FinishUsing_ = $AlchemyUpgradeWrapper$FinishUsing$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.renderdata.RenderInfo" {
import {$IRenderedTankUpgrade$TankRenderInfo, $IRenderedTankUpgrade$TankRenderInfo$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedTankUpgrade$TankRenderInfo"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$IUpgradeRenderData, $IUpgradeRenderData$$Type} from "net.p3pp3rf1y.sophisticatedcore.renderdata.IUpgradeRenderData"
import {$RenderInfo$DisplayItem, $RenderInfo$DisplayItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.renderdata.RenderInfo$DisplayItem"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$UpgradeRenderDataType, $UpgradeRenderDataType$$Type} from "net.p3pp3rf1y.sophisticatedcore.renderdata.UpgradeRenderDataType"
import {$TankPosition, $TankPosition$$Type} from "net.p3pp3rf1y.sophisticatedcore.renderdata.TankPosition"
import {$RenderInfo$ItemDisplayRenderInfo, $RenderInfo$ItemDisplayRenderInfo$$Type} from "net.p3pp3rf1y.sophisticatedcore.renderdata.RenderInfo$ItemDisplayRenderInfo"
import {$IRenderedBatteryUpgrade$BatteryRenderInfo, $IRenderedBatteryUpgrade$BatteryRenderInfo$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedBatteryUpgrade$BatteryRenderInfo"

export class $RenderInfo {


public "getNbt"(): $CompoundTag
public "setUpgradeRenderData"<T extends $IUpgradeRenderData>(arg0: $UpgradeRenderDataType$$Type<(T)>, arg1: T): void
public "getUpgradeRenderData"(): $Map<($UpgradeRenderDataType<(any)>), ($IUpgradeRenderData)>
public "getUpgradeRenderData"<T extends $IUpgradeRenderData>(arg0: $UpgradeRenderDataType$$Type<(T)>): $Optional<(T)>
public "getTankRenderInfos"(): $Map<($TankPosition), ($IRenderedTankUpgrade$TankRenderInfo)>
public "getBatteryRenderInfo"(): $Optional<($IRenderedBatteryUpgrade$BatteryRenderInfo)>
public "deserializeFrom"(arg0: $CompoundTag$$Type): void
public "getItemDisplayRenderInfo"(): $RenderInfo$ItemDisplayRenderInfo
public "removeUpgradeRenderData"(arg0: $UpgradeRenderDataType$$Type<(any)>): void
public "getUpgradeItems"(): $List<($ItemStack)>
public "setUpgradeItems"(arg0: $List$$Type<($ItemStack$$Type)>): void
public "resetUpgradeInfo"(arg0: boolean): void
public "setTankRenderInfo"(arg0: $TankPosition$$Type, arg1: $IRenderedTankUpgrade$TankRenderInfo$$Type): void
public "setBatteryRenderInfo"(arg0: $IRenderedBatteryUpgrade$BatteryRenderInfo$$Type): void
public "refreshDisplayItemsAndInaccessibleSlots"(arg0: $List$$Type<($RenderInfo$DisplayItem$$Type)>, arg1: $List$$Type<(integer)>): void
public "refreshSlotCountsFillRatiosAndInfiniteSlots"(arg0: $List$$Type<(integer)>, arg1: $List$$Type<(float)>, arg2: $List$$Type<(integer)>): void
public "showsCountsAndFillRatios"(): boolean
public "refreshItemDisplayRenderInfo"(arg0: $List$$Type<($RenderInfo$DisplayItem$$Type)>, arg1: $List$$Type<(integer)>, arg2: $List$$Type<(integer)>, arg3: $List$$Type<(integer)>, arg4: $List$$Type<(float)>): void
public "setDisplayItemsChangeListener"(arg0: $Consumer$$Type<($RenderInfo)>): void
public "removeAllUpgradeRenderData"(): void
get "nbt"(): $CompoundTag
get "upgradeRenderData"(): $Map<($UpgradeRenderDataType<(any)>), ($IUpgradeRenderData)>
get "tankRenderInfos"(): $Map<($TankPosition), ($IRenderedTankUpgrade$TankRenderInfo)>
get "batteryRenderInfo"(): $Optional<($IRenderedBatteryUpgrade$BatteryRenderInfo)>
get "itemDisplayRenderInfo"(): $RenderInfo$ItemDisplayRenderInfo
get "upgradeItems"(): $List<($ItemStack)>
set "upgradeItems"(value: $List$$Type<($ItemStack$$Type)>)
set "batteryRenderInfo"(value: $IRenderedBatteryUpgrade$BatteryRenderInfo$$Type)
set "displayItemsChangeListener"(value: $Consumer$$Type<($RenderInfo)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderInfo$$Type = ($RenderInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderInfo_ = $RenderInfo$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeWrapper, $IUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeWrapper"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $UpgradeWrapperBase<W extends $IUpgradeWrapper, T extends $UpgradeItemBase<(W)>> implements $IUpgradeWrapper {


public "isEnabled"(): boolean
public "setEnabled"(arg0: boolean): void
public "isInCooldown"(arg0: $Level$$Type): boolean
public "getUpgradeStack"(): $ItemStack
public "getCooldownTime"(): long
public "canBeDisabled"(): boolean
public "onAdded"(): void
public "hideSettingsTab"(): boolean
public "onBeforeRemoved"(): void
get "enabled"(): boolean
set "enabled"(value: boolean)
get "upgradeStack"(): $ItemStack
get "cooldownTime"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeWrapperBase$$Type<W, T> = ($UpgradeWrapperBase<(W), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeWrapperBase_<W, T> = $UpgradeWrapperBase$$Type<(W), (T)>;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.deposit.DepositUpgradeWrapper" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$IItemHandlerInteractionUpgrade, $IItemHandlerInteractionUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.api.IItemHandlerInteractionUpgrade"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IFilteredUpgrade, $IFilteredUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IFilteredUpgrade"
import {$DepositUpgradeItem, $DepositUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.deposit.DepositUpgradeItem"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$DepositFilterLogic, $DepositFilterLogic$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.deposit.DepositFilterLogic"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $DepositUpgradeWrapper extends $UpgradeWrapperBase<($DepositUpgradeWrapper), ($DepositUpgradeItem)> implements $IFilteredUpgrade, $IItemHandlerInteractionUpgrade {

constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "getFilterLogic"(): $DepositFilterLogic
public "onHandlerInteract"(arg0: $IItemHandler$$Type, arg1: $Player$$Type): void
get "filterLogic"(): $DepositFilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepositUpgradeWrapper$$Type = ($DepositUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DepositUpgradeWrapper_ = $DepositUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeWrapper" {
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$CookingLogic, $CookingLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingLogic"
import {$ICookingUpgradeItem, $ICookingUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.ICookingUpgradeItem"
import {$ICookingUpgrade, $ICookingUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.ICookingUpgrade"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$$Type} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ITickableUpgrade, $ITickableUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $CookingUpgradeWrapper<W extends $CookingUpgradeWrapper<(W), (U), (R)>, U extends ($UpgradeItemBase<(W)>) & ($ICookingUpgradeItem), R extends $AbstractCookingRecipe> extends $UpgradeWrapperBase<(W), (U)> implements $ITickableUpgrade, $ICookingUpgrade<(R)> {


public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "setEnabled"(arg0: boolean): void
public "getCookingLogic"(): $CookingLogic<(R)>
public "onBeforeRemoved"(): void
set "enabled"(value: boolean)
get "cookingLogic"(): $CookingLogic<(R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeWrapper$$Type<W, U, R> = ($CookingUpgradeWrapper<(W), (U), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingUpgradeWrapper_<W, U, R> = $CookingUpgradeWrapper$$Type<(W), (U), (R)>;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.controller.ControllerBlockEntityBase" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$IItemHandlerSimpleInserter, $IItemHandlerSimpleInserter$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.IItemHandlerSimpleInserter"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$ItemStackKey, $ItemStackKey$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.ItemStackKey"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $ControllerBlockEntityBase extends $BlockEntity implements $IItemHandlerSimpleInserter {
static readonly "ATTACHMENTS_NBT_KEY": StringJS


public "onLoad"(): void
public "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "getSlots"(arg0: integer): integer
public "getSlots"(): integer
public "addStorage"(arg0: $BlockPos$$Type): void
public "removeStorage"(arg0: $BlockPos$$Type): void
public "changeSlots"(arg0: $BlockPos$$Type, arg1: integer, arg2: boolean): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onChunkUnloaded"(): void
public "getUpdatePacket"(): $Packet<(any)>
public "updateEmptySlots"(arg0: $BlockPos$$Type, arg1: boolean): void
public "isStorageConnected"(arg0: $BlockPos$$Type): boolean
public "removeStorageStack"(arg0: $BlockPos$$Type, arg1: $ItemStackKey$$Type): void
public "addStorageStack"(arg0: $BlockPos$$Type, arg1: $ItemStackKey$$Type): void
public "clearCachedHandler"(arg0: $BlockPos$$Type): void
public "setStorageFilterItems"(arg0: $BlockPos$$Type, arg1: $Set$$Type<($Item$$Type)>): void
public "addStorageStacksAndRegisterListeners"(arg0: $BlockPos$$Type): void
public "removeStorageWithEmptySlots"(arg0: $BlockPos$$Type): void
public "addStorageWithEmptySlots"(arg0: $BlockPos$$Type): void
public "removeStorageMemorizedStack"(arg0: $BlockPos$$Type, arg1: integer): void
public "addStorageMemorizedStack"(arg0: $BlockPos$$Type, arg1: integer): void
public "removeStorageMemorizedItem"(arg0: $BlockPos$$Type, arg1: $Item$$Type): void
public "addStorageMemorizedItem"(arg0: $BlockPos$$Type, arg1: $Item$$Type): void
public "addLinkedBlock"(arg0: $BlockPos$$Type): boolean
public "removeBoundable"(arg0: $BlockPos$$Type): void
public "getLinkedBlocks"(): $Set<($BlockPos)>
public "hasMatchingStackOrItem"(arg0: $ItemStackKey$$Type): boolean
public "getStoragePositions"(): $List<($BlockPos)>
public "removeStorageStacks"(arg0: $BlockPos$$Type): void
public "removeLinkedBlock"(arg0: $BlockPos$$Type): void
public "searchAndAddBoundables"(): void
public "detachFromStoragesAndUnlinkBlocks"(): void
public "removeNonConnectingBlock"(arg0: $BlockPos$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public "getBlock"(arg0: $Level$$Type): $BlockContainerJS
public "isMutable"(): boolean
public "getSlots"(): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "kjs$self"(): $IItemHandler
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "clear"(): void
public "clear"(arg0: $ItemPredicate$$Type): void
public "find"(): integer
public "find"(arg0: $ItemPredicate$$Type): integer
public "count"(): integer
public "count"(arg0: $ItemPredicate$$Type): integer
public "getWidth"(): integer
public "getHeight"(): integer
public "setChanged"(): void
public "isEmpty"(): boolean
public "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
public "countNonEmpty"(): integer
public "getAllItems"(): $List<($ItemStack)>
public "asContainer"(): $Container
get "slots"(): integer
get "updatePacket"(): $Packet<(any)>
get "linkedBlocks"(): $Set<($BlockPos)>
get "storagePositions"(): $List<($BlockPos)>
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
export type $ControllerBlockEntityBase$$Type = ($ControllerBlockEntityBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllerBlockEntityBase_ = $ControllerBlockEntityBase$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IStackableContentsUpgrade" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IStackableContentsUpgrade {

 "getMinimumMultiplierRequired"(): integer

(): integer
get "minimumMultiplierRequired"(): integer
}

export namespace $IStackableContentsUpgrade {
const probejs$$marker: never
}
export class $IStackableContentsUpgrade$$Static implements $IStackableContentsUpgrade {


 "getMinimumMultiplierRequired"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStackableContentsUpgrade$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStackableContentsUpgrade_ = $IStackableContentsUpgrade$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$StartUsing" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $AlchemyUpgradeWrapper$StartUsing {

 "applyAsInt"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer

(arg0: $ItemStack, arg1: $LivingEntity): integer
}

export namespace $AlchemyUpgradeWrapper$StartUsing {
const probejs$$marker: never
}
export class $AlchemyUpgradeWrapper$StartUsing$$Static implements $AlchemyUpgradeWrapper$StartUsing {


 "applyAsInt"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeWrapper$StartUsing$$Type = ((arg0: $ItemStack, arg1: $LivingEntity) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyUpgradeWrapper$StartUsing_ = $AlchemyUpgradeWrapper$StartUsing$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.renderdata.RenderInfo$ItemDisplayRenderInfo" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$RenderInfo$DisplayItem, $RenderInfo$DisplayItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.renderdata.RenderInfo$DisplayItem"

export class $RenderInfo$ItemDisplayRenderInfo {
static readonly "SLOT_FILL_RATIOS_TAG": StringJS
static readonly "SLOT_COUNTS_TAG": StringJS

constructor()

public "getDisplayItem"(): $Optional<($RenderInfo$DisplayItem)>
public static "deserialize"(arg0: $CompoundTag$$Type): $RenderInfo$ItemDisplayRenderInfo
public "serialize"(): $CompoundTag
public "getDisplayItems"(): $List<($RenderInfo$DisplayItem)>
public "getSlotCounts"(): $List<(integer)>
public "getInfiniteSlots"(): $List<(integer)>
public "getSlotFillRatios"(): $List<(float)>
public "getInaccessibleSlots"(): $List<(integer)>
get "displayItem"(): $Optional<($RenderInfo$DisplayItem)>
get "displayItems"(): $List<($RenderInfo$DisplayItem)>
get "slotCounts"(): $List<(integer)>
get "infiniteSlots"(): $List<(integer)>
get "slotFillRatios"(): $List<(float)>
get "inaccessibleSlots"(): $List<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderInfo$ItemDisplayRenderInfo$$Type = ($RenderInfo$ItemDisplayRenderInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderInfo$ItemDisplayRenderInfo_ = $RenderInfo$ItemDisplayRenderInfo$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoSmokingUpgradeItem" {
import {$IAutoCookingUpgradeItem, $IAutoCookingUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.IAutoCookingUpgradeItem"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UpgradeGroup, $UpgradeGroup$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"
import {$List, $List$$Type} from "java.util.List"
import {$AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper, $AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AutoCookingUpgradeConfig, $AutoCookingUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeConfig"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $AutoSmokingUpgradeItem extends $UpgradeItemBase<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper)> implements $IAutoCookingUpgradeItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $AutoCookingUpgradeConfig$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getUpgradeGroup"(): $UpgradeGroup
public "getAutoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoSmokingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeGroup"(): $UpgradeGroup
get "autoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoSmokingUpgradeItem$$Type = ($AutoSmokingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoSmokingUpgradeItem_ = $AutoSmokingUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.util.ITintable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITintable {

 "getMainColor"(): integer
 "getAccentColor"(): integer
 "setColors"(arg0: integer, arg1: integer): void
get "mainColor"(): integer
get "accentColor"(): integer
}

export namespace $ITintable {
const probejs$$marker: never
}
export class $ITintable$$Static implements $ITintable {


 "getMainColor"(): integer
 "getAccentColor"(): integer
 "setColors"(arg0: integer, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITintable$$Type = ($ITintable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITintable_ = $ITintable$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.FilteredUpgradeConfigBase" {
import {$ModConfigSpec$IntValue, $ModConfigSpec$IntValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$IntValue"

export class $FilteredUpgradeConfigBase {
readonly "filterSlots": $ModConfigSpec$IntValue
readonly "slotsInRow": $ModConfigSpec$IntValue


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilteredUpgradeConfigBase$$Type = ($FilteredUpgradeConfigBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilteredUpgradeConfigBase_ = $FilteredUpgradeConfigBase$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.stack.StackUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$$Type} from "net.p3pp3rf1y.sophisticatedcore.common.gui.UpgradeSlotChangeResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UpgradeGroup, $UpgradeGroup$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IUpgradeItem, $IUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$StackUpgradeItem$Wrapper, $StackUpgradeItem$Wrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.stack.StackUpgradeItem$Wrapper"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $StackUpgradeItem extends $UpgradeItemBase<($StackUpgradeItem$Wrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($StackUpgradeItem$Wrapper)>
static readonly "UPGRADE_GROUP": $UpgradeGroup
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: double, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($StackUpgradeItem$Wrapper)>
public static "getInventorySlotLimit"(arg0: $IStorageWrapper$$Type): integer
public "getStackSizeMultiplier"(): double
public "canSwapUpgradeFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: $IStorageWrapper$$Type, arg3: boolean): $UpgradeSlotChangeResult
public "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$$Type, arg1: boolean): $UpgradeSlotChangeResult
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getUpgradeGroup"(): $UpgradeGroup
public "checkExtraInsertConditions"(arg0: $ItemStack$$Type, arg1: $IStorageWrapper$$Type, arg2: boolean, arg3: integer, arg4: $IUpgradeItem$$Type<(any)>): $UpgradeSlotChangeResult
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($StackUpgradeItem$Wrapper)>
get "stackSizeMultiplier"(): double
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeGroup"(): $UpgradeGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackUpgradeItem$$Type = ($StackUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StackUpgradeItem_ = $StackUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.refill.RefillUpgradeWrapper" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$FilterLogic, $FilterLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IFilteredUpgrade, $IFilteredUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IFilteredUpgrade"
import {$ITickableUpgrade, $ITickableUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RefillUpgradeItem, $RefillUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.refill.RefillUpgradeItem"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IBlockPickResponseUpgrade, $IBlockPickResponseUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.api.IBlockPickResponseUpgrade"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$RefillUpgradeWrapper$TargetSlot, $RefillUpgradeWrapper$TargetSlot$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.refill.RefillUpgradeWrapper$TargetSlot"

export class $RefillUpgradeWrapper extends $UpgradeWrapperBase<($RefillUpgradeWrapper), ($RefillUpgradeItem)> implements $IFilteredUpgrade, $ITickableUpgrade, $IBlockPickResponseUpgrade {
static readonly "TARGET_SLOTS_STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Map<(integer), ($RefillUpgradeWrapper$TargetSlot)>)>
static readonly "TARGET_SLOTS_CODEC": $Codec<($Map<(integer), ($RefillUpgradeWrapper$TargetSlot)>)>

constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "pickBlock"(arg0: $Player$$Type, arg1: $ItemStack$$Type): boolean
public "getFilterLogic"(): $FilterLogic
public "setTargetSlot"(arg0: integer, arg1: $RefillUpgradeWrapper$TargetSlot$$Type): void
public "getTargetSlots"(): $Map<(integer), ($RefillUpgradeWrapper$TargetSlot)>
public "allowsTargetSlotSelection"(): boolean
get "filterLogic"(): $FilterLogic
get "targetSlots"(): $Map<(integer), ($RefillUpgradeWrapper$TargetSlot)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefillUpgradeWrapper$$Type = ($RefillUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RefillUpgradeWrapper_ = $RefillUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpackscreateintegration.backpack.MountedSophisticatedBackpackType" {
import {$MountedSophisticatedBackpack, $MountedSophisticatedBackpack$$Type} from "net.p3pp3rf1y.sophisticatedbackpackscreateintegration.backpack.MountedSophisticatedBackpack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SimpleRegistry, $SimpleRegistry$$Type} from "com.simibubi.create.api.registry.SimpleRegistry"
import {$MountedItemStorage, $MountedItemStorage$$Type} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorage"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Holder$Reference, $Holder$Reference$$Type} from "net.minecraft.core.Holder$Reference"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$MountedItemStorageType, $MountedItemStorageType$$Type} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorageType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MountedSophisticatedBackpackType extends $MountedItemStorageType<($MountedSophisticatedBackpack)> {
readonly "codec": $MapCodec<(T)>
static readonly "CODEC": $Codec<($MountedItemStorageType<(any)>)>
readonly "holder": $Holder$Reference<($MountedItemStorageType<(any)>)>
static readonly "REGISTRY": $SimpleRegistry<($Block), ($MountedItemStorageType<(any)>)>

constructor()

public "mount"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type): $MountedSophisticatedBackpack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MountedSophisticatedBackpackType$$Type = ($MountedSophisticatedBackpackType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MountedSophisticatedBackpackType_ = $MountedSophisticatedBackpackType$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.util.ItemBase" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $ItemBase extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addCreativeTabItems"(arg0: $Consumer$$Type<($ItemStack)>): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBase$$Type = ($ItemBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBase_ = $ItemBase$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.xppump.XpPumpUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$XpPumpUpgradeConfig, $XpPumpUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.xppump.XpPumpUpgradeConfig"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$XpPumpUpgradeWrapper, $XpPumpUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.xppump.XpPumpUpgradeWrapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $XpPumpUpgradeItem extends $UpgradeItemBase<($XpPumpUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($XpPumpUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $XpPumpUpgradeConfig$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($XpPumpUpgradeWrapper)>
public "getXpPumpUpgradeConfig"(): $XpPumpUpgradeConfig
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($XpPumpUpgradeWrapper)>
get "xpPumpUpgradeConfig"(): $XpPumpUpgradeConfig
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $XpPumpUpgradeItem$$Type = ($XpPumpUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $XpPumpUpgradeItem_ = $XpPumpUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.compat.chipped.BlockTransformationUpgradeWrapper" {
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$BlockTransformationUpgradeItem, $BlockTransformationUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.compat.chipped.BlockTransformationUpgradeItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$SimpleItemContent, $SimpleItemContent$$Type} from "net.p3pp3rf1y.sophisticatedcore.util.SimpleItemContent"
import {$ChippedRecipe, $ChippedRecipe$$Type} from "earth.terrarium.chipped.common.recipes.ChippedRecipe"

export class $BlockTransformationUpgradeWrapper extends $UpgradeWrapperBase<($BlockTransformationUpgradeWrapper), ($BlockTransformationUpgradeItem)> {


public "setResult"(arg0: $ItemStack$$Type): void
public "getResult"(): $Optional<($SimpleItemContent)>
public "canBeDisabled"(): boolean
public "getRecipeType"(): $RecipeType<($ChippedRecipe)>
public "getInputInventory"(): $IItemHandlerModifiable
public "setShiftClickIntoStorage"(arg0: boolean): void
public "shouldShiftClickIntoStorage"(): boolean
set "result"(value: $ItemStack$$Type)
get "result"(): $Optional<($SimpleItemContent)>
get "recipeType"(): $RecipeType<($ChippedRecipe)>
get "inputInventory"(): $IItemHandlerModifiable
set "shiftClickIntoStorage"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTransformationUpgradeWrapper$$Type = ($BlockTransformationUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTransformationUpgradeWrapper_ = $BlockTransformationUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.api.IStashStorageItem$StashResult" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $IStashStorageItem$StashResult extends $Enum<($IStashStorageItem$StashResult)> {
static readonly "SPACE": $IStashStorageItem$StashResult
static readonly "MATCH_AND_SPACE": $IStashStorageItem$StashResult
static readonly "NO_SPACE": $IStashStorageItem$StashResult


public static "values"(): ($IStashStorageItem$StashResult)[]
public static "valueOf"(arg0: StringJS): $IStashStorageItem$StashResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStashStorageItem$StashResult$$Type = (("match_and_space") | ("space") | ("no_space"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStashStorageItem$StashResult_ = $IStashStorageItem$StashResult$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.toolswapper.ToolSwapperUpgradeWrapper" {
import {$ToolSwapMode, $ToolSwapMode$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.toolswapper.ToolSwapMode"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$FilterLogic, $FilterLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"
import {$IBlockClickResponseUpgrade, $IBlockClickResponseUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.api.IBlockClickResponseUpgrade"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IBlockToolSwapUpgrade, $IBlockToolSwapUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.api.IBlockToolSwapUpgrade"
import {$IEntityToolSwapUpgrade, $IEntityToolSwapUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.api.IEntityToolSwapUpgrade"
import {$ToolSwapperUpgradeItem, $ToolSwapperUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.toolswapper.ToolSwapperUpgradeItem"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IAttackEntityResponseUpgrade, $IAttackEntityResponseUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.api.IAttackEntityResponseUpgrade"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ToolSwapperUpgradeWrapper extends $UpgradeWrapperBase<($ToolSwapperUpgradeWrapper), ($ToolSwapperUpgradeItem)> implements $IBlockClickResponseUpgrade, $IAttackEntityResponseUpgrade, $IBlockToolSwapUpgrade, $IEntityToolSwapUpgrade {


public "setSwapWeapon"(arg0: boolean): void
public "getFilterLogic"(): $FilterLogic
public "onBlockClick"(arg0: $Player$$Type, arg1: $BlockPos$$Type): boolean
public "onAttackEntity"(arg0: $Player$$Type): boolean
public "shouldSwapWeapon"(): boolean
public "setToolSwapMode"(arg0: $ToolSwapMode$$Type): void
public "getToolSwapMode"(): $ToolSwapMode
public "hideSettingsTab"(): boolean
public "onEntityInteract"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $Player$$Type): boolean
public "onBlockInteract"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): boolean
public "canProcessBlockInteract"(): boolean
public "canProcessEntityInteract"(): boolean
set "swapWeapon"(value: boolean)
get "filterLogic"(): $FilterLogic
set "toolSwapMode"(value: $ToolSwapMode$$Type)
get "toolSwapMode"(): $ToolSwapMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolSwapperUpgradeWrapper$$Type = ($ToolSwapperUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolSwapperUpgradeWrapper_ = $ToolSwapperUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeWrapper$BlastingUpgradeWrapper" {
import {$BlastingRecipe, $BlastingRecipe$$Type} from "net.minecraft.world.item.crafting.BlastingRecipe"
import {$BlastingUpgradeItem, $BlastingUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.BlastingUpgradeItem"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CookingUpgradeWrapper, $CookingUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.CookingUpgradeWrapper"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $CookingUpgradeWrapper$BlastingUpgradeWrapper extends $CookingUpgradeWrapper<($CookingUpgradeWrapper$BlastingUpgradeWrapper), ($BlastingUpgradeItem), ($BlastingRecipe)> {

constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingUpgradeWrapper$BlastingUpgradeWrapper$$Type = ($CookingUpgradeWrapper$BlastingUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingUpgradeWrapper$BlastingUpgradeWrapper_ = $CookingUpgradeWrapper$BlastingUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.magnet.MagnetUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$MagnetUpgradeWrapper, $MagnetUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.magnet.MagnetUpgradeWrapper"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $MagnetUpgradeItem extends $UpgradeItemBase<($MagnetUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($MagnetUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IntSupplier$$Type, arg1: $IntSupplier$$Type, arg2: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($MagnetUpgradeWrapper)>
public "getRadius"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($MagnetUpgradeWrapper)>
get "radius"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagnetUpgradeItem$$Type = ($MagnetUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagnetUpgradeItem_ = $MagnetUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.api.IIOFilterUpgrade" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$FilterLogic, $FilterLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"

export interface $IIOFilterUpgrade {

 "getInputFilter"(): $Optional<($FilterLogic)>
 "getOutputFilter"(): $Optional<($FilterLogic)>
get "inputFilter"(): $Optional<($FilterLogic)>
get "outputFilter"(): $Optional<($FilterLogic)>
}

export namespace $IIOFilterUpgrade {
const probejs$$marker: never
}
export class $IIOFilterUpgrade$$Static implements $IIOFilterUpgrade {


 "getInputFilter"(): $Optional<($FilterLogic)>
 "getOutputFilter"(): $Optional<($FilterLogic)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIOFilterUpgrade$$Type = ($IIOFilterUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIOFilterUpgrade_ = $IIOFilterUpgrade$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyCondition" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $AlchemyCondition extends $Enum<($AlchemyCondition)> implements $StringRepresentable {
static readonly "UNDER_WATER": $AlchemyCondition
static readonly "CODEC": $Codec<($AlchemyCondition)>
static readonly "FALLING": $AlchemyCondition
static readonly "NEVER": $AlchemyCondition
static readonly "ON_FIRE": $AlchemyCondition
static readonly "SPRINTING": $AlchemyCondition
static readonly "NEGATIVE_EFFECT": $AlchemyCondition
static readonly "ALWAYS": $AlchemyCondition
static readonly "HURT": $AlchemyCondition
static readonly "MINING": $AlchemyCondition
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($AlchemyCondition)>


public static "values"(): ($AlchemyCondition)[]
public "test"(arg0: $LivingEntity$$Type, arg1: float): boolean
public static "valueOf"(arg0: StringJS): $AlchemyCondition
public "next"(): $AlchemyCondition
public "defaultValue"(): float
public static "fromName"(arg0: StringJS): $AlchemyCondition
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
export type $AlchemyCondition$$Type = (("never") | ("always") | ("under_water") | ("on_fire") | ("falling") | ("mining") | ("sprinting") | ("hurt") | ("negative_effect"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyCondition_ = $AlchemyCondition$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.battery.BatteryUpgradeWrapper" {
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$ITickableUpgrade, $ITickableUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$BatteryUpgradeItem, $BatteryUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.battery.BatteryUpgradeItem"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IStackableContentsUpgrade, $IStackableContentsUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IStackableContentsUpgrade"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IRenderedBatteryUpgrade, $IRenderedBatteryUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedBatteryUpgrade"
import {$IRenderedBatteryUpgrade$BatteryRenderInfo, $IRenderedBatteryUpgrade$BatteryRenderInfo$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedBatteryUpgrade$BatteryRenderInfo"

export class $BatteryUpgradeWrapper extends $UpgradeWrapperBase<($BatteryUpgradeWrapper), ($BatteryUpgradeItem)> implements $IRenderedBatteryUpgrade, $IEnergyStorage, $ITickableUpgrade, $IStackableContentsUpgrade {
static readonly "INPUT_SLOT": integer
static readonly "OUTPUT_SLOT": integer


public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "getInventory"(): $IItemHandler
public "canBeDisabled"(): boolean
public "extractEnergy"(arg0: integer, arg1: boolean): integer
public "receiveEnergy"(arg0: integer, arg1: boolean): integer
public "canExtract"(): boolean
public "canReceive"(): boolean
public "getEnergyStored"(): integer
public static "getEnergyStored"(arg0: $ItemStack$$Type): integer
public "getMaxEnergyStored"(): integer
public "setBatteryRenderInfoUpdateCallback"(arg0: $Consumer$$Type<($IRenderedBatteryUpgrade$BatteryRenderInfo)>): void
public "forceUpdateBatteryRenderInfo"(): void
public "getMinimumMultiplierRequired"(): integer
get "inventory"(): $IItemHandler
get "energyStored"(): integer
get "maxEnergyStored"(): integer
set "batteryRenderInfoUpdateCallback"(value: $Consumer$$Type<($IRenderedBatteryUpgrade$BatteryRenderInfo)>)
get "minimumMultiplierRequired"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BatteryUpgradeWrapper$$Type = ($BatteryUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BatteryUpgradeWrapper_ = $BatteryUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper" {
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$EntityMatch, $EntityMatch$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.EntityMatch"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$AlchemyFilterAttribute, $AlchemyFilterAttribute$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyFilterAttribute"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AlchemyUpgradeWrapper$AlchemyItemDefinition, $AlchemyUpgradeWrapper$AlchemyItemDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$AlchemyItemDefinition"
import {$ITickableUpgrade, $ITickableUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$AlchemyCondition, $AlchemyCondition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyCondition"
import {$AlchemyUpgradeItem, $AlchemyUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeItem"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AlchemyUpgradeWrapper$ObservableFilterItemStackHandler, $AlchemyUpgradeWrapper$ObservableFilterItemStackHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper$ObservableFilterItemStackHandler"

export class $AlchemyUpgradeWrapper extends $UpgradeWrapperBase<($AlchemyUpgradeWrapper), ($AlchemyUpgradeItem)> implements $ITickableUpgrade {


public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "getValue"(arg0: integer): float
public "getEntityMatch"(): $EntityMatch
public "setEntityMatch"(arg0: $EntityMatch$$Type): void
public "getCondition"(arg0: integer): $AlchemyCondition
public "getFilterHandler"(): $AlchemyUpgradeWrapper$ObservableFilterItemStackHandler
public "triggerItemUseEffects"(arg0: $Level$$Type): void
public "setConditionValue"(arg0: integer, arg1: $AlchemyCondition$$Type, arg2: float): void
public "shouldMatchAllEffects"(): boolean
public "setMatchAllEffects"(arg0: boolean): void
public "setMatchEffectDuration"(arg0: boolean): void
public "getFilterAttributes"(): $List<($AlchemyFilterAttribute)>
public static "addItemDefinition"(arg0: $AlchemyUpgradeWrapper$AlchemyItemDefinition$$Type): void
public "isValidAlchemyItem"(arg0: $ItemStack$$Type): boolean
public static "stackPotionEffectsMatch"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean, arg3: boolean, arg4: boolean): boolean
public static "getDefaultConditionForPotion"(arg0: $ItemStack$$Type): $AlchemyCondition
public static "shouldApplyPotionEffectsTo"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: boolean, arg3: boolean): boolean
public "shouldMatchEffectDuration"(): boolean
public "shouldMatchEffectAmplifier"(): boolean
public "setMatchEffectAmplifier"(arg0: boolean): void
get "entityMatch"(): $EntityMatch
set "entityMatch"(value: $EntityMatch$$Type)
get "filterHandler"(): $AlchemyUpgradeWrapper$ObservableFilterItemStackHandler
set "matchAllEffects"(value: boolean)
set "matchEffectDuration"(value: boolean)
get "filterAttributes"(): $List<($AlchemyFilterAttribute)>
set "matchEffectAmplifier"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeWrapper$$Type = ($AlchemyUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyUpgradeWrapper_ = $AlchemyUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.renderdata.TankPosition" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $TankPosition extends $Enum<($TankPosition)> implements $StringRepresentable {
static readonly "LEFT": $TankPosition
static readonly "RIGHT": $TankPosition


public static "values"(): ($TankPosition)[]
public static "valueOf"(arg0: StringJS): $TankPosition
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
export type $TankPosition$$Type = (("left") | ("right"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TankPosition_ = $TankPosition$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AlchemyUpgradeWrapper, $AlchemyUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.alchemy.AlchemyUpgradeWrapper"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $AlchemyUpgradeItem extends $UpgradeItemBase<($AlchemyUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IntSupplier$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($AlchemyUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getFilterSlotCount"(): integer
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($AlchemyUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "filterSlotCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlchemyUpgradeItem$$Type = ($AlchemyUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlchemyUpgradeItem_ = $AlchemyUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.stack.StackUpgradeItem$Wrapper" {
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$StackUpgradeItem, $StackUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.stack.StackUpgradeItem"

export class $StackUpgradeItem$Wrapper extends $UpgradeWrapperBase<($StackUpgradeItem$Wrapper), ($StackUpgradeItem)> {


public "canBeDisabled"(): boolean
public "hideSettingsTab"(): boolean
public "getStackSizeMultiplier"(): double
get "stackSizeMultiplier"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackUpgradeItem$Wrapper$$Type = ($StackUpgradeItem$Wrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StackUpgradeItem$Wrapper_ = $StackUpgradeItem$Wrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.infinity.InfinityUpgradeItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$UpgradeSlotChangeResult, $UpgradeSlotChangeResult$$Type} from "net.p3pp3rf1y.sophisticatedcore.common.gui.UpgradeSlotChangeResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$SlotRange, $SlotRange$$Type} from "net.p3pp3rf1y.sophisticatedcore.util.SlotRange"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IInventoryPartHandler, $IInventoryPartHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.IInventoryPartHandler"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InfinityUpgradeItem$Wrapper, $InfinityUpgradeItem$Wrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.infinity.InfinityUpgradeItem$Wrapper"
import {$InventoryHandler, $InventoryHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.InventoryHandler"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $InfinityUpgradeItem extends $UpgradeItemBase<($InfinityUpgradeItem$Wrapper)> {
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($InfinityUpgradeItem$Wrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IUpgradeCountLimitConfig$$Type, arg1: boolean)

public "getType"(): $UpgradeType<($InfinityUpgradeItem$Wrapper)>
public "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$$Type, arg1: boolean, arg2: $Player$$Type): $UpgradeSlotChangeResult
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getPermissionLevel"(): integer
public "createInventoryPartHandler"(arg0: $InventoryHandler$$Type, arg1: $SlotRange$$Type): $IInventoryPartHandler
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($InfinityUpgradeItem$Wrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "permissionLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfinityUpgradeItem$$Type = ($InfinityUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfinityUpgradeItem_ = $InfinityUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoBlastingUpgradeItem" {
import {$IAutoCookingUpgradeItem, $IAutoCookingUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.IAutoCookingUpgradeItem"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UpgradeGroup, $UpgradeGroup$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeGroup"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IUpgradeItem$UpgradeConflictDefinition, $IUpgradeItem$UpgradeConflictDefinition$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper, $AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AutoCookingUpgradeConfig, $AutoCookingUpgradeConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.cooking.AutoCookingUpgradeConfig"
import {$IUpgradeCountLimitConfig, $IUpgradeCountLimitConfig$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeCountLimitConfig"
import {$UpgradeType, $UpgradeType$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase, $UpgradeItemBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $AutoBlastingUpgradeItem extends $UpgradeItemBase<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper)> implements $IAutoCookingUpgradeItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $AutoCookingUpgradeConfig$$Type, arg1: $IUpgradeCountLimitConfig$$Type)

public "getType"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper)>
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getUpgradeGroup"(): $UpgradeGroup
public "getAutoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "type"(): $UpgradeType<($AutoCookingUpgradeWrapper$AutoBlastingUpgradeWrapper)>
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "upgradeGroup"(): $UpgradeGroup
get "autoCookingUpgradeConfig"(): $AutoCookingUpgradeConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoBlastingUpgradeItem$$Type = ($AutoBlastingUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoBlastingUpgradeItem_ = $AutoBlastingUpgradeItem$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.restock.RestockUpgradeWrapper" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UpgradeWrapperBase, $UpgradeWrapperBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$IItemHandlerInteractionUpgrade, $IItemHandlerInteractionUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.api.IItemHandlerInteractionUpgrade"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ContentsFilterLogic, $ContentsFilterLogic$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ContentsFilterLogic"
import {$IContentsFilteredUpgrade, $IContentsFilteredUpgrade$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IContentsFilteredUpgrade"
import {$RestockUpgradeItem, $RestockUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.restock.RestockUpgradeItem"
import {$IStorageWrapper, $IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $RestockUpgradeWrapper extends $UpgradeWrapperBase<($RestockUpgradeWrapper), ($RestockUpgradeItem)> implements $IContentsFilteredUpgrade, $IItemHandlerInteractionUpgrade {

constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "getFilterLogic"(): $ContentsFilterLogic
public "onHandlerInteract"(arg0: $IItemHandler$$Type, arg1: $Player$$Type): void
get "filterLogic"(): $ContentsFilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RestockUpgradeWrapper$$Type = ($RestockUpgradeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RestockUpgradeWrapper_ = $RestockUpgradeWrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition" {
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $IUpgradeItem$UpgradeConflictDefinition extends $Record {

constructor(arg0: $Predicate$$Type<($Item)>, arg1: integer, arg2: $Component$$Type)
constructor(isConflictingItem: $Predicate$$Type<($Item)>, maxConflictingAllowed: integer, errorMessage: $Component$$Type, otherBeingAddedErrorMessage: $Component$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "errorMessage"(): $Component
public "maxConflictingAllowed"(): integer
public "isConflictingItem"(): $Predicate<($Item)>
public "otherBeingAddedErrorMessage"(): $Component
get "conflictingItem"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeItem$UpgradeConflictDefinition$$Type = ({"maxConflictingAllowed"?: integer, "errorMessage"?: $Component$$Type, "otherBeingAddedErrorMessage"?: $Component$$Type, "isConflictingItem"?: $Predicate$$Type<($Item$$Type)>}) | ([maxConflictingAllowed?: integer, errorMessage?: $Component$$Type, otherBeingAddedErrorMessage?: $Component$$Type, isConflictingItem?: $Predicate$$Type<($Item$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeItem$UpgradeConflictDefinition_ = $IUpgradeItem$UpgradeConflictDefinition$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.deposit.DepositFilterType" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $DepositFilterType extends $Enum<($DepositFilterType)> implements $StringRepresentable {
static readonly "INVENTORY": $DepositFilterType
static readonly "BLOCK": $DepositFilterType
static readonly "ALLOW": $DepositFilterType


public static "values"(): ($DepositFilterType)[]
public static "valueOf"(arg0: StringJS): $DepositFilterType
public "next"(): $DepositFilterType
public static "fromName"(arg0: StringJS): $DepositFilterType
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
export type $DepositFilterType$$Type = (("allow") | ("block") | ("inventory"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DepositFilterType_ = $DepositFilterType$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.voiding.VoidUpgradeConfig" {
import {$FilteredUpgradeConfigBase, $FilteredUpgradeConfigBase$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilteredUpgradeConfigBase"
import {$ModConfigSpec$IntValue, $ModConfigSpec$IntValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$IntValue"
import {$ModConfigSpec$BooleanValue, $ModConfigSpec$BooleanValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$BooleanValue"
import {$ModConfigSpec$Builder, $ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $VoidUpgradeConfig extends $FilteredUpgradeConfigBase {
readonly "filterSlots": $ModConfigSpec$IntValue
readonly "slotsInRow": $ModConfigSpec$IntValue
readonly "voidAnythingEnabled": $ModConfigSpec$BooleanValue

constructor(arg0: $ModConfigSpec$Builder$$Type, arg1: StringJS, arg2: StringJS, arg3: integer, arg4: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidUpgradeConfig$$Type = ($VoidUpgradeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidUpgradeConfig_ = $VoidUpgradeConfig$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedBatteryUpgrade" {
import {$IRenderedBatteryUpgrade$BatteryRenderInfo, $IRenderedBatteryUpgrade$BatteryRenderInfo$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IRenderedBatteryUpgrade$BatteryRenderInfo"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $IRenderedBatteryUpgrade {

 "setBatteryRenderInfoUpdateCallback"(arg0: $Consumer$$Type<($IRenderedBatteryUpgrade$BatteryRenderInfo)>): void
 "forceUpdateBatteryRenderInfo"(): void
set "batteryRenderInfoUpdateCallback"(value: $Consumer$$Type<($IRenderedBatteryUpgrade$BatteryRenderInfo)>)
}

export namespace $IRenderedBatteryUpgrade {
const probejs$$marker: never
}
export class $IRenderedBatteryUpgrade$$Static implements $IRenderedBatteryUpgrade {


 "setBatteryRenderInfoUpdateCallback"(arg0: $Consumer$$Type<($IRenderedBatteryUpgrade$BatteryRenderInfo)>): void
 "forceUpdateBatteryRenderInfo"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRenderedBatteryUpgrade$$Type = ($IRenderedBatteryUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRenderedBatteryUpgrade_ = $IRenderedBatteryUpgrade$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.crafting.BackpackUpgradeRecipe$Serializer" {
import {$RecipeWrapperSerializer, $RecipeWrapperSerializer$$Type} from "net.p3pp3rf1y.sophisticatedcore.crafting.RecipeWrapperSerializer"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$BackpackUpgradeRecipe, $BackpackUpgradeRecipe$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.crafting.BackpackUpgradeRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $BackpackUpgradeRecipe$Serializer extends $RecipeWrapperSerializer<($ShapedRecipe), ($BackpackUpgradeRecipe)> {

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BackpackUpgradeRecipe$Serializer$$Type = ($BackpackUpgradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BackpackUpgradeRecipe$Serializer_ = $BackpackUpgradeRecipe$Serializer$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.upgrades.stonecutter.StonecutterUpgradeItem$Wrapper" {
import {$BlockConverterUpgradeWrapper, $BlockConverterUpgradeWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.blockconverter.BlockConverterUpgradeWrapper"
import {$StonecutterUpgradeItem, $StonecutterUpgradeItem$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.stonecutter.StonecutterUpgradeItem"

export class $StonecutterUpgradeItem$Wrapper extends $BlockConverterUpgradeWrapper<($StonecutterUpgradeItem), ($StonecutterUpgradeItem$Wrapper)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StonecutterUpgradeItem$Wrapper$$Type = ($StonecutterUpgradeItem$Wrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StonecutterUpgradeItem$Wrapper_ = $StonecutterUpgradeItem$Wrapper$$Type;
}}
declare module "net.p3pp3rf1y.sophisticatedcore.inventory.ISlotChangeListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISlotChangeListener {

 "onSlotChanged"(arg0: integer): void

(arg0: integer): void
}

export namespace $ISlotChangeListener {
const probejs$$marker: never
}
export class $ISlotChangeListener$$Static implements $ISlotChangeListener {


 "onSlotChanged"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotChangeListener$$Type = ((arg0: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlotChangeListener_ = $ISlotChangeListener$$Type;
}}
