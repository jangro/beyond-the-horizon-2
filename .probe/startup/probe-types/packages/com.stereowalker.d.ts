declare module "com.stereowalker.unionlib.world.item.AccessoryItem" {
import {$AccessorySlot, $AccessorySlot$$Type} from "com.stereowalker.unionlib.world.entity.AccessorySlot"
import {$AccessorySlot$Group, $AccessorySlot$Group$$Type} from "com.stereowalker.unionlib.world.entity.AccessorySlot$Group"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $AccessoryItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $AccessorySlot$$Type)
constructor(arg0: $Item$Properties$$Type, arg1: $AccessorySlot$Group$$Type)

public "accessoryInformation"(): $Component
public "getAccessorySlots"(): $List<($AccessorySlot)>
public "getAttributeModifiers"(arg0: $AccessorySlot$Group$$Type, arg1: $ItemStack$$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getAttributeModifiers"(arg0: $AccessorySlot$$Type, arg1: $ItemStack$$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "accessoryTick"(arg0: $Level$$Type, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type, arg3: integer): void
get "accessorySlots"(): $List<($AccessorySlot)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryItem$$Type = ($AccessoryItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoryItem_ = $AccessoryItem$$Type;
}}
declare module "com.stereowalker.unionlib.world.entity.AccessorySlot" {
import {$AccessorySlot$Group, $AccessorySlot$Group$$Type} from "com.stereowalker.unionlib.world.entity.AccessorySlot$Group"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"

export class $AccessorySlot extends $Enum<($AccessorySlot)> {
static readonly "FINGER_2": $AccessorySlot
static readonly "NECK_1": $AccessorySlot
static readonly "FINGER_1": $AccessorySlot
static readonly "BACK_3": $AccessorySlot
static readonly "BACK_2": $AccessorySlot
static readonly "BACK_1": $AccessorySlot
static readonly "BACK_6": $AccessorySlot
static readonly "BACK_5": $AccessorySlot
static readonly "BACK_4": $AccessorySlot


public "getName"(): string
public static "values"(): ($AccessorySlot)[]
public static "valueOf"(arg0: string): $AccessorySlot
public "getIndex"(): integer
public "getGroup"(): $AccessorySlot$Group
public static "byName"(arg0: string): $AccessorySlot
public "getTextureIndex"(): integer
public static "byGroupAndIndex"(arg0: $AccessorySlot$Group$$Type, arg1: integer): $AccessorySlot
public "getValidStack"(): $Predicate<($ItemStack)>
get "name"(): string
get "index"(): integer
get "group"(): $AccessorySlot$Group
get "textureIndex"(): integer
get "validStack"(): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorySlot$$Type = (("neck_1") | ("back_1") | ("back_2") | ("back_3") | ("back_4") | ("back_5") | ("back_6") | ("finger_1") | ("finger_2"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorySlot_ = $AccessorySlot$$Type;
}}
declare module "com.stereowalker.unionlib.world.entity.AccessorySlotGroup" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$AccessorySlot, $AccessorySlot$$Type} from "com.stereowalker.unionlib.world.entity.AccessorySlot"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export class $AccessorySlotGroup extends $Enum<($AccessorySlotGroup)> implements $StringRepresentable {
static readonly "FINGER_2": $AccessorySlotGroup
static readonly "CODEC": $Codec<($AccessorySlotGroup)>
static readonly "FINGER_1": $AccessorySlotGroup
static readonly "BACK_3": $AccessorySlotGroup
static readonly "BY_ID": $IntFunction<($AccessorySlotGroup)>
static readonly "BACK_2": $AccessorySlotGroup
static readonly "BACK_1": $AccessorySlotGroup
static readonly "ANY": $AccessorySlotGroup
static readonly "BACK_6": $AccessorySlotGroup
static readonly "BACK_5": $AccessorySlotGroup
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($AccessorySlotGroup)>
static readonly "BACK_4": $AccessorySlotGroup
static readonly "NECK_1": $AccessorySlotGroup
static readonly "FINGER": $AccessorySlotGroup
static readonly "BACK": $AccessorySlotGroup
static readonly "NECK": $AccessorySlotGroup


public static "values"(): ($AccessorySlotGroup)[]
public "test"(arg0: $AccessorySlot$$Type): boolean
public static "valueOf"(arg0: string): $AccessorySlotGroup
public static "bySlot"(arg0: $AccessorySlot$$Type): $AccessorySlotGroup
public "getSerializedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "serializedName"(): string
get "remappedEnumConstantName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorySlotGroup$$Type = (("any") | ("neck_1") | ("neck") | ("back_7") | ("back_2") | ("back_3") | ("back_4") | ("back_5") | ("back_6") | ("back") | ("finger_1") | ("finger_2") | ("finger"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorySlotGroup_ = $AccessorySlotGroup$$Type;
}}
declare module "com.stereowalker.unionlib.event.StructurePieceAddedEvent" {
import {$StructurePiece, $StructurePiece$$Type} from "net.minecraft.world.level.levelgen.structure.StructurePiece"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $StructurePieceAddedEvent extends $Event {

constructor(arg0: $StructurePiece$$Type, arg1: $ServerLevel$$Type)

public "getWorld"(): $ServerLevel
public "getStructurePiece"(): $StructurePiece
get "world"(): $ServerLevel
get "structurePiece"(): $StructurePiece
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructurePieceAddedEvent$$Type = ($StructurePieceAddedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructurePieceAddedEvent_ = $StructurePieceAddedEvent$$Type;
}}
declare module "com.stereowalker.unionlib.event.StructureAddedEvent" {
import {$StructureStart, $StructureStart$$Type} from "net.minecraft.world.level.levelgen.structure.StructureStart"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $StructureAddedEvent extends $Event {

constructor(arg0: $StructureStart$$Type, arg1: $ServerLevel$$Type)

public "getWorld"(): $ServerLevel
public "getStructureStart"(): $StructureStart
get "world"(): $ServerLevel
get "structureStart"(): $StructureStart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureAddedEvent$$Type = ($StructureAddedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureAddedEvent_ = $StructureAddedEvent$$Type;
}}
declare module "com.stereowalker.unionlib.event.potionfluid.FluidToPotionEvent" {
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $FluidToPotionEvent extends $Event {

constructor()

public "getPotion"(): $Holder<($Potion)>
public "setPotion"(arg0: $Holder$$Type<($Potion)>): void
get "potion"(): $Holder<($Potion)>
set "potion"(value: $Holder$$Type<($Potion)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidToPotionEvent$$Type = ($FluidToPotionEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidToPotionEvent_ = $FluidToPotionEvent$$Type;
}}
declare module "com.stereowalker.unionlib.world.item.crafting.NoRemainderShaplessRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$NoRemainderShaplessRecipe, $NoRemainderShaplessRecipe$$Type} from "com.stereowalker.unionlib.world.item.crafting.NoRemainderShaplessRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $NoRemainderShaplessRecipe$Serializer implements $RecipeSerializer<($NoRemainderShaplessRecipe)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($NoRemainderShaplessRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($NoRemainderShaplessRecipe)>
public "codec"(): $MapCodec<($NoRemainderShaplessRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoRemainderShaplessRecipe$Serializer$$Type = ($NoRemainderShaplessRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoRemainderShaplessRecipe$Serializer_ = $NoRemainderShaplessRecipe$Serializer$$Type;
}}
declare module "com.stereowalker.unionlib.event.potionfluid.FluidToPotionEvent$FromStateEvent" {
import {$FluidToPotionEvent, $FluidToPotionEvent$$Type} from "com.stereowalker.unionlib.event.potionfluid.FluidToPotionEvent"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $FluidToPotionEvent$FromStateEvent extends $FluidToPotionEvent {

constructor(arg0: $FluidState$$Type)

public "getFluid"(): $FluidState
get "fluid"(): $FluidState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidToPotionEvent$FromStateEvent$$Type = ($FluidToPotionEvent$FromStateEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidToPotionEvent$FromStateEvent_ = $FluidToPotionEvent$FromStateEvent$$Type;
}}
declare module "com.stereowalker.unionlib.util.math.Funcs$_4" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Funcs$_4<A, B, C, D, R> {

 "apply"(arg0: A, arg1: B, arg2: C, arg3: D): R

(arg0: A, arg1: B, arg2: C, arg3: D): R
}

export namespace $Funcs$_4 {
const probejs$$marker: never
}
export class $Funcs$_4$$Static<A, B, C, D, R> implements $Funcs$_4 {


 "apply"(arg0: A, arg1: B, arg2: C, arg3: D): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Funcs$_4$$Type<A, B, C, D, R> = ((arg0: A, arg1: B, arg2: C, arg3: D) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Funcs$_4_<A, B, C, D, R> = $Funcs$_4$$Type<(A), (B), (C), (D), (R)>;
}}
declare module "com.stereowalker.unionlib.util.math.Funcs$_3" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Funcs$_3<A, B, C, R> {

 "apply"(arg0: A, arg1: B, arg2: C): R

(arg0: A, arg1: B, arg2: C): R
}

export namespace $Funcs$_3 {
const probejs$$marker: never
}
export class $Funcs$_3$$Static<A, B, C, R> implements $Funcs$_3 {


 "apply"(arg0: A, arg1: B, arg2: C): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Funcs$_3$$Type<A, B, C, R> = ((arg0: A, arg1: B, arg2: C) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Funcs$_3_<A, B, C, R> = $Funcs$_3$$Type<(A), (B), (C), (R)>;
}}
declare module "com.stereowalker.unionlib.hook.AccessoryStack" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$AccessorySlot, $AccessorySlot$$Type} from "com.stereowalker.unionlib.world.entity.AccessorySlot"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AccessorySlotGroup, $AccessorySlotGroup$$Type} from "com.stereowalker.unionlib.world.entity.AccessorySlotGroup"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$AccessoryItem, $AccessoryItem$$Type} from "com.stereowalker.unionlib.world.item.AccessoryItem"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $AccessoryStack {

 "self"(): $ItemStack
 "getAccessory"(): $AccessoryItem
 "forEachModifier"(arg0: $AccessorySlotGroup$$Type, arg1: $BiConsumer$$Type<($Holder<($Attribute)>), ($AttributeModifier)>): void
 "forEachModifier"(arg0: $AccessorySlot$$Type, arg1: $BiConsumer$$Type<($Holder<($Attribute)>), ($AttributeModifier)>): void
 "addTooltipLines"(arg0: $Player$$Type, arg1: $Consumer$$Type<($Component)>): void
get "accessory"(): $AccessoryItem
}

export namespace $AccessoryStack {
const probejs$$marker: never
}
export class $AccessoryStack$$Static implements $AccessoryStack {


 "self"(): $ItemStack
 "getAccessory"(): $AccessoryItem
 "forEachModifier"(arg0: $AccessorySlotGroup$$Type, arg1: $BiConsumer$$Type<($Holder<($Attribute)>), ($AttributeModifier)>): void
 "forEachModifier"(arg0: $AccessorySlot$$Type, arg1: $BiConsumer$$Type<($Holder<($Attribute)>), ($AttributeModifier)>): void
 "addTooltipLines"(arg0: $Player$$Type, arg1: $Consumer$$Type<($Component)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryStack$$Type = ($AccessoryStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoryStack_ = $AccessoryStack$$Type;
}}
declare module "com.stereowalker.unionlib.world.entity.player.UnionInventory" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AccessorySlot, $AccessorySlot$$Type} from "com.stereowalker.unionlib.world.entity.AccessorySlot"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SimpleContainer, $SimpleContainer$$Type} from "net.minecraft.world.SimpleContainer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $UnionInventory extends $SimpleContainer {
 "size": integer
 "items": $NonNullList<($ItemStack)>
readonly "player": $Player

constructor(arg0: $Player$$Type)

public "load"(arg0: $ListTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "save"(arg0: $HolderLookup$Provider$$Type): $ListTag
public "replaceWith"(arg0: $UnionInventory$$Type): void
public "tick"(): void
public "getAccessory"(arg0: $AccessorySlot$$Type): $ItemStack
public "dropAll"(): void
public "isUsableByPlayer"(arg0: $Player$$Type): boolean
/**
 * 
 * @deprecated
 */
public "getFirstRing"(): $ItemStack
/**
 * 
 * @deprecated
 */
public "getSecondRing"(): $ItemStack
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "tryClear"(arg0: any): void
get "firstRing"(): $ItemStack
get "secondRing"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnionInventory$$Type = ($UnionInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnionInventory_ = $UnionInventory$$Type;
}}
declare module "com.stereowalker.unionlib.world.entity.player.CustomInventoryGetter" {
import {$UnionInventory, $UnionInventory$$Type} from "com.stereowalker.unionlib.world.entity.player.UnionInventory"

export interface $CustomInventoryGetter {

 "getUnionInventory"(): $UnionInventory
 "setUnionInventory"(arg0: $UnionInventory$$Type): void
get "unionInventory"(): $UnionInventory
set "unionInventory"(value: $UnionInventory$$Type)
}

export namespace $CustomInventoryGetter {
const probejs$$marker: never
}
export class $CustomInventoryGetter$$Static implements $CustomInventoryGetter {


 "getUnionInventory"(): $UnionInventory
 "setUnionInventory"(arg0: $UnionInventory$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomInventoryGetter$$Type = ($CustomInventoryGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomInventoryGetter_ = $CustomInventoryGetter$$Type;
}}
declare module "com.stereowalker.tiered.data.TierAffixer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export interface $TierAffixer {

 "InvCopy"(): $NonNullList<($ItemStack)>
 "SetInvCopy"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
 "player"(): $ServerPlayer
 "copyDefaultedList"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): $NonNullList<($ItemStack)>
}

export namespace $TierAffixer {
const probejs$$marker: never
}
export class $TierAffixer$$Static implements $TierAffixer {


 "InvCopy"(): $NonNullList<($ItemStack)>
 "SetInvCopy"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): void
 "player"(): $ServerPlayer
 "copyDefaultedList"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TierAffixer$$Type = ($TierAffixer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TierAffixer_ = $TierAffixer$$Type;
}}
declare module "com.stereowalker.unionlib.supporter.CosmeticHandler$LERAccess" {
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$EntityModel, $EntityModel$$Type} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $CosmeticHandler$LERAccess<T extends $LivingEntity, M extends $EntityModel<(T)>> {

 "getWhiteOverlayProgressA"(arg0: T, arg1: float): float
 "scaleA"(arg0: T, arg1: $PoseStack$$Type, arg2: float): void
 "setupRotationsA"(arg0: T, arg1: $PoseStack$$Type, arg2: float, arg3: float, arg4: float, arg5: float): void
 "isBodyVisibleA"(arg0: T): boolean
 "getBobA"(arg0: T, arg1: float): float
}

export namespace $CosmeticHandler$LERAccess {
const probejs$$marker: never
}
export class $CosmeticHandler$LERAccess$$Static<T extends $LivingEntity, M extends $EntityModel<(T)>> implements $CosmeticHandler$LERAccess {


 "getWhiteOverlayProgressA"(arg0: T, arg1: float): float
 "scaleA"(arg0: T, arg1: $PoseStack$$Type, arg2: float): void
 "setupRotationsA"(arg0: T, arg1: $PoseStack$$Type, arg2: float, arg3: float, arg4: float, arg5: float): void
 "isBodyVisibleA"(arg0: T): boolean
 "getBobA"(arg0: T, arg1: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticHandler$LERAccess$$Type<T, M> = ($CosmeticHandler$LERAccess<(T), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticHandler$LERAccess_<T, M> = $CosmeticHandler$LERAccess$$Type<(T), (M)>;
}}
declare module "com.stereowalker.unionlib.world.item.crafting.NoRemainderShaplessRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$ShapelessRecipe, $ShapelessRecipe$$Type} from "net.minecraft.world.item.crafting.ShapelessRecipe"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $NoRemainderShaplessRecipe extends $ShapelessRecipe {
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>
readonly "group": string

constructor(arg0: string, arg1: $CraftingBookCategory$$Type, arg2: $ItemStack$$Type, arg3: $NonNullList$$Type<($Ingredient$$Type)>)

public "getSerializer"(): $RecipeSerializer<(any)>
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<(any)>
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoRemainderShaplessRecipe$$Type = ($NoRemainderShaplessRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoRemainderShaplessRecipe_ = $NoRemainderShaplessRecipe$$Type;
}}
declare module "com.stereowalker.unionlib.world.level.material.FluidProperties" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$FluidProperties$Builder, $FluidProperties$Builder$$Type} from "com.stereowalker.unionlib.world.level.material.FluidProperties$Builder"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$Boat, $Boat$$Type} from "net.minecraft.world.entity.vehicle.Boat"

export class $FluidProperties {
static readonly "fluidProps": $Map<($Fluid), ($FluidProperties)>

constructor()

public "name"(): $ResourceLocation
public static "create"(arg0: $ResourceLocation$$Type): $FluidProperties$Builder
public static "or"<T>(arg0: $Fluid$$Type, arg1: $Function$$Type<($FluidProperties), (T)>, arg2: T): T
public "move"(arg0: $FluidState$$Type, arg1: $LivingEntity$$Type, arg2: $Vec3$$Type, arg3: double): boolean
public "stillTexture"(): $ResourceLocation
public "flowingTexture"(): $ResourceLocation
public "canDrownIn"(arg0: $LivingEntity$$Type): boolean
public "motionScale"(arg0: $Entity$$Type): double
public "canPushEntity"(arg0: $Entity$$Type): boolean
public "canSwim"(arg0: $Entity$$Type): boolean
public "canExtinguish"(arg0: $Entity$$Type): boolean
public "fallDistanceModifier"(arg0: $Entity$$Type): float
public "itemMovement"(arg0: $ItemEntity$$Type): void
public "supportsBoats"(arg0: $Boat$$Type): boolean
public "supportsBoats"(arg0: $FluidState$$Type, arg1: $Boat$$Type): boolean
public "tintColor"(arg0: $FluidState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type): integer
public "tintColor"(): integer
public "overlayTexture"(): $ResourceLocation
public static "fromFluid"(arg0: $Fluid$$Type): $FluidProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidProperties$$Type = ($FluidProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidProperties_ = $FluidProperties$$Type;
}}
declare module "com.stereowalker.unionlib.world.entity.AccessorySlot$Group" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $AccessorySlot$Group extends $Enum<($AccessorySlot$Group)> {
static readonly "FINGER": $AccessorySlot$Group
static readonly "BACK": $AccessorySlot$Group
static readonly "NECK": $AccessorySlot$Group


public "getName"(): string
public static "values"(): ($AccessorySlot$Group)[]
public static "valueOf"(arg0: string): $AccessorySlot$Group
public static "byName"(arg0: string): $AccessorySlot$Group
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorySlot$Group$$Type = (("neck") | ("back") | ("finger"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorySlot$Group_ = $AccessorySlot$Group$$Type;
}}
declare module "com.stereowalker.unionlib.hook.ICreativeTab" {
import {$CreativeModeTab$DisplayItemsGenerator, $CreativeModeTab$DisplayItemsGenerator$$Type} from "net.minecraft.world.item.CreativeModeTab$DisplayItemsGenerator"

export interface $ICreativeTab {

 "getGenerator"(): $CreativeModeTab$DisplayItemsGenerator

(): $CreativeModeTab$DisplayItemsGenerator$$Type
get "generator"(): $CreativeModeTab$DisplayItemsGenerator
}

export namespace $ICreativeTab {
const probejs$$marker: never
}
export class $ICreativeTab$$Static implements $ICreativeTab {


 "getGenerator"(): $CreativeModeTab$DisplayItemsGenerator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICreativeTab$$Type = (() => $CreativeModeTab$DisplayItemsGenerator$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICreativeTab_ = $ICreativeTab$$Type;
}}
declare module "com.stereowalker.unionlib.hook.EntityHook" {
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$FluidProperties, $FluidProperties$$Type} from "com.stereowalker.unionlib.world.level.material.FluidProperties"
import {$Object2DoubleMap, $Object2DoubleMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2DoubleMap"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export interface $EntityHook {

 "fluidInEyes"(): $FluidState
 "fluidHeights"(): $Object2DoubleMap<($FluidProperties)>
 "isInFluid"(arg0: $FluidProperties$$Type): boolean
 "isInFluid"(arg0: $FluidState$$Type, arg1: $Function$$Type<($FluidProperties), (boolean)>): boolean
 "isInFluid"(arg0: $FluidState$$Type): boolean
 "isInFluidOr"(arg0: $FluidState$$Type, arg1: boolean): boolean
}

export namespace $EntityHook {
const probejs$$marker: never
}
export class $EntityHook$$Static implements $EntityHook {


 "fluidInEyes"(): $FluidState
 "fluidHeights"(): $Object2DoubleMap<($FluidProperties)>
 "isInFluid"(arg0: $FluidProperties$$Type): boolean
 "isInFluid"(arg0: $FluidState$$Type, arg1: $Function$$Type<($FluidProperties), (boolean)>): boolean
 "isInFluid"(arg0: $FluidState$$Type): boolean
 "isInFluidOr"(arg0: $FluidState$$Type, arg1: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityHook$$Type = ($EntityHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityHook_ = $EntityHook$$Type;
}}
declare module "com.stereowalker.unionlib.event.item.ItemAttributeEvent" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$HashMultimap, $HashMultimap$$Type} from "com.google.common.collect.HashMultimap"

export class $ItemAttributeEvent extends $Event {

constructor(arg0: $HashMultimap$$Type<($Attribute$$Type), ($AttributeModifier$$Type)>, arg1: $EquipmentSlot$$Type, arg2: $ItemStack$$Type)

public "getStack"(): $ItemStack
public "getEquipmentSlot"(): $EquipmentSlot
public "getAttributeMap"(): $HashMultimap<($Attribute), ($AttributeModifier)>
get "stack"(): $ItemStack
get "equipmentSlot"(): $EquipmentSlot
get "attributeMap"(): $HashMultimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAttributeEvent$$Type = ($ItemAttributeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAttributeEvent_ = $ItemAttributeEvent$$Type;
}}
declare module "com.stereowalker.unionlib.event.potionfluid.PotionToFluidEvent" {
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"

export class $PotionToFluidEvent extends $Event {

constructor(arg0: $Potion$$Type)

public "getFluid"(): $Fluid
public "setFluid"(arg0: $Fluid$$Type): void
public "getFlowingFluid"(): $Fluid
public "getPotion"(): $Potion
public "setFlowingFluid"(arg0: $Fluid$$Type): void
get "fluid"(): $Fluid
set "fluid"(value: $Fluid$$Type)
get "flowingFluid"(): $Fluid
get "potion"(): $Potion
set "flowingFluid"(value: $Fluid$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionToFluidEvent$$Type = ($PotionToFluidEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionToFluidEvent_ = $PotionToFluidEvent$$Type;
}}
declare module "com.stereowalker.unionlib.world.level.material.FluidProperties$Builder" {
import {$Funcs$_4, $Funcs$_4$$Type} from "com.stereowalker.unionlib.util.math.Funcs$_4"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$FluidProperties, $FluidProperties$$Type} from "com.stereowalker.unionlib.world.level.material.FluidProperties"
import {$Funcs$_3, $Funcs$_3$$Type} from "com.stereowalker.unionlib.util.math.Funcs$_3"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $FluidProperties$Builder {


public "stillTexture"(arg0: $ResourceLocation$$Type): $FluidProperties$Builder
public "flowingTexture"(arg0: $ResourceLocation$$Type): $FluidProperties$Builder
public "canDrownIn"(arg0: boolean): $FluidProperties$Builder
public "motionScale"(arg0: double): $FluidProperties$Builder
public "canPushEntity"(arg0: boolean): $FluidProperties$Builder
public "canSwim"(arg0: boolean): $FluidProperties$Builder
public "canExtinguish"(arg0: boolean): $FluidProperties$Builder
public "toProperties"(): $FluidProperties
public "tint"(arg0: $Funcs$_3$$Type<($FluidState), ($BlockAndTintGetter), ($BlockPos), (integer)>): $FluidProperties$Builder
public "tint"(arg0: integer): $FluidProperties$Builder
public "fallDistanceModifier"(arg0: float): $FluidProperties$Builder
public "supportsBoats"(arg0: boolean): $FluidProperties$Builder
public "overlayTexture"(arg0: $ResourceLocation$$Type): $FluidProperties$Builder
public "customMovement"(arg0: $Funcs$_4$$Type<($FluidState), ($LivingEntity), ($Vec3), (double), (boolean)>): $FluidProperties$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidProperties$Builder$$Type = ($FluidProperties$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidProperties$Builder_ = $FluidProperties$Builder$$Type;
}}
declare module "com.stereowalker.unionlib.event.item.ItemCraftedEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResultSlot, $ResultSlot$$Type} from "net.minecraft.world.inventory.ResultSlot"
import {$PlayerEvent, $PlayerEvent$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $ItemCraftedEvent extends $PlayerEvent {

constructor(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Container$$Type, arg3: $ResultSlot$$Type)

public "getResultSlot"(): $ResultSlot
public "getCraftingMatrix"(): $Container
public "getCraftedStack"(): $ItemStack
public "getEntity"(): $Entity
get "resultSlot"(): $ResultSlot
get "craftingMatrix"(): $Container
get "craftedStack"(): $ItemStack
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCraftedEvent$$Type = ($ItemCraftedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCraftedEvent_ = $ItemCraftedEvent$$Type;
}}
