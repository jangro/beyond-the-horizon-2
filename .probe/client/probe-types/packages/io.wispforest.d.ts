declare module "io.wispforest.owo.ui.core.Sizing$Method" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Sizing$Method extends $Enum<($Sizing$Method)> {
static readonly "EXPAND": $Sizing$Method
static readonly "FILL": $Sizing$Method
static readonly "FIXED": $Sizing$Method
static readonly "CONTENT": $Sizing$Method


public static "values"(): ($Sizing$Method)[]
public static "valueOf"(name: string): $Sizing$Method
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Sizing$Method$$Type = (("fixed") | ("content") | ("fill") | ("expand"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Sizing$Method_ = $Sizing$Method$$Type;
}}
declare module "io.wispforest.accessories.api.Accessory" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SoundEventData, $SoundEventData$$Type} from "io.wispforest.accessories.api.SoundEventData"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$SlotReference, $SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"
import {$AccessoryAttributeBuilder, $AccessoryAttributeBuilder$$Type} from "io.wispforest.accessories.api.attributes.AccessoryAttributeBuilder"
import {$DropRule, $DropRule$$Type} from "io.wispforest.accessories.api.DropRule"
import {$AccessoryItemAttributeModifiers$Builder, $AccessoryItemAttributeModifiers$Builder$$Type} from "io.wispforest.accessories.api.components.AccessoryItemAttributeModifiers$Builder"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$SlotType, $SlotType$$Type} from "io.wispforest.accessories.api.slot.SlotType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $Accessory {

/**
 * 
 * @deprecated
 */
 "getModifiers"(stack: $ItemStack$$Type, reference: $SlotReference$$Type, builder: $AccessoryAttributeBuilder$$Type): void
 "tick"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
 "maxStackSize"(stack: $ItemStack$$Type): integer
 "canEquip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): boolean
 "getEquipSound"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): $SoundEventData
 "getDynamicModifiers"(stack: $ItemStack$$Type, reference: $SlotReference$$Type, builder: $AccessoryAttributeBuilder$$Type): void
 "canEquipFromUse"(stack: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
 "canEquipFromUse"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): boolean
 "getStaticModifiers"(item: $Item$$Type, builder: $AccessoryItemAttributeModifiers$Builder$$Type): void
 "getAttributesTooltip"(stack: $ItemStack$$Type, type: $SlotType$$Type, tooltips: $List$$Type<($Component$$Type)>, tooltipContext: $Item$TooltipContext$$Type, tooltipType: $TooltipFlag$$Type): void
/**
 * 
 * @deprecated
 */
 "getAttributesTooltip"(stack: $ItemStack$$Type, type: $SlotType$$Type, tooltips: $List$$Type<($Component$$Type)>): void
 "getExtraTooltip"(stack: $ItemStack$$Type, tooltips: $List$$Type<($Component$$Type)>, tooltipContext: $Item$TooltipContext$$Type, tooltipType: $TooltipFlag$$Type): void
/**
 * 
 * @deprecated
 */
 "getExtraTooltip"(stack: $ItemStack$$Type, tooltips: $List$$Type<($Component$$Type)>): void
 "onEquip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
 "onUnequip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
 "canUnequip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): boolean
 "getDropRule"(stack: $ItemStack$$Type, reference: $SlotReference$$Type, source: $DamageSource$$Type): $DropRule
 "onEquipFromUse"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
 "onBreak"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
}

export namespace $Accessory {
const probejs$$marker: never
}
export class $Accessory$$Static implements $Accessory {


/**
 * 
 * @deprecated
 */
 "getModifiers"(stack: $ItemStack$$Type, reference: $SlotReference$$Type, builder: $AccessoryAttributeBuilder$$Type): void
 "tick"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
 "maxStackSize"(stack: $ItemStack$$Type): integer
 "canEquip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): boolean
 "getEquipSound"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): $SoundEventData
 "getDynamicModifiers"(stack: $ItemStack$$Type, reference: $SlotReference$$Type, builder: $AccessoryAttributeBuilder$$Type): void
 "canEquipFromUse"(stack: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
 "canEquipFromUse"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): boolean
 "getStaticModifiers"(item: $Item$$Type, builder: $AccessoryItemAttributeModifiers$Builder$$Type): void
 "getAttributesTooltip"(stack: $ItemStack$$Type, type: $SlotType$$Type, tooltips: $List$$Type<($Component$$Type)>, tooltipContext: $Item$TooltipContext$$Type, tooltipType: $TooltipFlag$$Type): void
/**
 * 
 * @deprecated
 */
 "getAttributesTooltip"(stack: $ItemStack$$Type, type: $SlotType$$Type, tooltips: $List$$Type<($Component$$Type)>): void
 "getExtraTooltip"(stack: $ItemStack$$Type, tooltips: $List$$Type<($Component$$Type)>, tooltipContext: $Item$TooltipContext$$Type, tooltipType: $TooltipFlag$$Type): void
/**
 * 
 * @deprecated
 */
 "getExtraTooltip"(stack: $ItemStack$$Type, tooltips: $List$$Type<($Component$$Type)>): void
 "onEquip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
 "onUnequip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
 "canUnequip"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): boolean
 "getDropRule"(stack: $ItemStack$$Type, reference: $SlotReference$$Type, source: $DamageSource$$Type): $DropRule
 "onEquipFromUse"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
 "onBreak"(stack: $ItemStack$$Type, reference: $SlotReference$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Accessory$$Type = ($Accessory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Accessory_ = $Accessory$$Type;
}}
declare module "io.wispforest.accessories.mixin.RegistryOpsAccessor" {
import {$RegistryOps$RegistryInfoLookup, $RegistryOps$RegistryInfoLookup$$Type} from "net.minecraft.resources.RegistryOps$RegistryInfoLookup"

export interface $RegistryOpsAccessor {

 "lookupProvider"(): $RegistryOps$RegistryInfoLookup

(): $RegistryOps$RegistryInfoLookup$$Type
}

export namespace $RegistryOpsAccessor {
const probejs$$marker: never
}
export class $RegistryOpsAccessor$$Static implements $RegistryOpsAccessor {


 "lookupProvider"(): $RegistryOps$RegistryInfoLookup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryOpsAccessor$$Type = (() => $RegistryOps$RegistryInfoLookup$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryOpsAccessor_ = $RegistryOpsAccessor$$Type;
}}
declare module "io.wispforest.owo.ui.core.Color" {
import {$Node, $Node$$Type} from "org.w3c.dom.Node"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$ChatFormatting, $ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $Color extends $Record implements $Animatable<($Color)> {
static readonly "RED": $Color
static readonly "WHITE": $Color
static readonly "BLUE": $Color
static readonly "BLACK": $Color
static readonly "GREEN": $Color

constructor(red: float, green: float, blue: float)
constructor(red: float, green: float, blue: float, alpha: float)

public "rgb"(): integer
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "parse"(node: $Node$$Type): $Color
public static "random"(): $Color
public "red"(): float
public "interpolate"(next: $Color$$Type, delta: float): $Color
public "interpolate"(arg0: $Animatable$$Type<(any)>, arg1: float): $Animatable<(any)>
public "argb"(): integer
public static "ofArgb"(argb: integer): $Color
public "blue"(): float
public "green"(): float
public "alpha"(): float
public static "ofRgb"(rgb: integer): $Color
public static "ofHsv"(hue: float, saturation: float, value: float): $Color
public static "ofHsv"(hue: float, saturation: float, value: float, alpha: float): $Color
public static "ofDye"(dyeColor: $DyeColor$$Type): $Color
public "hsv"(): (float)[]
public "asHexString"(includeAlpha: boolean): string
public static "ofFormatting"(formatting: $ChatFormatting$$Type): $Color
public static "parseAndPack"(node: $Node$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color$$Type = ({"alpha"?: float, "red"?: float, "blue"?: float, "green"?: float}) | ([alpha?: float, red?: float, blue?: float, green?: float]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Color_ = $Color$$Type;
}}
declare module "io.wispforest.owo.itemgroup.OwoItemGroup$TabTextures" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $OwoItemGroup$TabTextures extends $Record {

constructor(topSelected: $ResourceLocation$$Type, topSelectedFirstColumn: $ResourceLocation$$Type, topUnselected: $ResourceLocation$$Type, bottomSelected: $ResourceLocation$$Type, bottomSelectedFirstColumn: $ResourceLocation$$Type, bottomUnselected: $ResourceLocation$$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "topSelectedFirstColumn"(): $ResourceLocation
public "bottomUnselected"(): $ResourceLocation
public "topSelected"(): $ResourceLocation
public "topUnselected"(): $ResourceLocation
public "bottomSelected"(): $ResourceLocation
public "bottomSelectedFirstColumn"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoItemGroup$TabTextures$$Type = ({"bottomUnselected"?: $ResourceLocation$$Type, "topSelectedFirstColumn"?: $ResourceLocation$$Type, "bottomSelectedFirstColumn"?: $ResourceLocation$$Type, "topSelected"?: $ResourceLocation$$Type, "bottomSelected"?: $ResourceLocation$$Type, "topUnselected"?: $ResourceLocation$$Type}) | ([bottomUnselected?: $ResourceLocation$$Type, topSelectedFirstColumn?: $ResourceLocation$$Type, bottomSelectedFirstColumn?: $ResourceLocation$$Type, topSelected?: $ResourceLocation$$Type, bottomSelected?: $ResourceLocation$$Type, topUnselected?: $ResourceLocation$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwoItemGroup$TabTextures_ = $OwoItemGroup$TabTextures$$Type;
}}
declare module "io.wispforest.accessories.mixin.LivingEntityAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $LivingEntityAccessor {

 "accessors$breakItem"(arg0: $ItemStack$$Type): void

(arg0: $ItemStack): void
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
export class $LivingEntityAccessor$$Static implements $LivingEntityAccessor {


 "accessors$breakItem"(arg0: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccessor$$Type = ((arg0: $ItemStack) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityAccessor_ = $LivingEntityAccessor$$Type;
}}
declare module "io.wispforest.owo.ui.event.CharTyped" {
import {$EventStream, $EventStream$$Type} from "io.wispforest.owo.util.EventStream"

export interface $CharTyped {

 "onCharTyped"(arg0: character, arg1: integer): boolean

(arg0: character, arg1: integer): boolean
}

export namespace $CharTyped {
function newStream(): $EventStream<($CharTyped)>
const probejs$$marker: never
}
export class $CharTyped$$Static implements $CharTyped {


static "newStream"(): $EventStream<($CharTyped)>
 "onCharTyped"(arg0: character, arg1: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharTyped$$Type = ((arg0: character, arg1: integer) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CharTyped_ = $CharTyped$$Type;
}}
declare module "io.wispforest.accessories.api.attributes.AccessoryAttributeBuilder" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$AttributeModificationData, $AttributeModificationData$$Type} from "io.wispforest.accessories.api.attributes.AttributeModificationData"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SlotReference, $SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export class $AccessoryAttributeBuilder {

constructor()
constructor(slotName: string, slot: integer)
constructor(slotReference: $SlotReference$$Type)

public "getStacks"(attribute: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type): $Collection<($AttributeModificationData)>
public "equals"(obj: any): boolean
public "isEmpty"(): boolean
/**
 * 
 * @deprecated
 */
public static "createSlotPath"(ref: $SlotReference$$Type): string
/**
 * 
 * @deprecated
 */
public static "createSlotPath"(slotname: string, slot: integer): string
public "getSlotModifiers"(): $Multimap<(string), ($AttributeModifier)>
public "getAttributeModifiers"(filterSlots: boolean): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "addFrom"(builder: $AccessoryAttributeBuilder$$Type): $AccessoryAttributeBuilder
public "addStackable"(attribute: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type, amount: double, operation: $AttributeModifier$Operation$$Type): $AccessoryAttributeBuilder
public "addStackable"(attribute: $Holder$$Type<($Attribute)>, modifier: $AttributeModifier$$Type): $AccessoryAttributeBuilder
public "getExclusive"(attribute: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type): $AttributeModificationData
public "addExclusive"(attribute: $Holder$$Type<($Attribute)>, modifier: $AttributeModifier$$Type): $AccessoryAttributeBuilder
public "addExclusive"(attribute: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type, amount: double, operation: $AttributeModifier$Operation$$Type): $AccessoryAttributeBuilder
public "removeStacks"(attribute: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type): $Collection<($AttributeModificationData)>
public "exclusiveAttributes"(): $Map<($Holder<($Attribute)>), ($Map<($ResourceLocation), ($AttributeModificationData)>)>
public "stackedAttributes"(): $Multimap<($Holder<($Attribute)>), ($AttributeModificationData)>
public "removeExclusive"(attribute: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type): $AttributeModificationData
get "empty"(): boolean
get "slotModifiers"(): $Multimap<(string), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryAttributeBuilder$$Type = ($AccessoryAttributeBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoryAttributeBuilder_ = $AccessoryAttributeBuilder$$Type;
}}
declare module "io.wispforest.owo.util.pond.OwoItemExtensions" {
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $OwoItemExtensions {

 "owo$shouldTrackUsageStat"(): boolean
 "owo$setGroup"(arg0: $Supplier$$Type<($CreativeModeTab$$Type)>): void
 "owo$setGroup"(group: $CreativeModeTab$$Type): void
 "owo$group"(): $CreativeModeTab
 "owo$tab"(): integer
 "owo$stackGenerator"(): $BiConsumer<($Item), ($CreativeModeTab$Output)>
}

export namespace $OwoItemExtensions {
const probejs$$marker: never
}
export class $OwoItemExtensions$$Static implements $OwoItemExtensions {


 "owo$shouldTrackUsageStat"(): boolean
 "owo$setGroup"(arg0: $Supplier$$Type<($CreativeModeTab$$Type)>): void
 "owo$setGroup"(group: $CreativeModeTab$$Type): void
 "owo$group"(): $CreativeModeTab
 "owo$tab"(): integer
 "owo$stackGenerator"(): $BiConsumer<($Item), ($CreativeModeTab$Output)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoItemExtensions$$Type = ($OwoItemExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwoItemExtensions_ = $OwoItemExtensions$$Type;
}}
declare module "io.wispforest.accessories.pond.ModelRootAccess" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export interface $ModelRootAccess {

 "accessories$getAnyDescendantWithName"(name: string): $Optional<($ModelPart)>
 "accessories$rootPart"(): $ModelPart
}

export namespace $ModelRootAccess {
const probejs$$marker: never
}
export class $ModelRootAccess$$Static implements $ModelRootAccess {


 "accessories$getAnyDescendantWithName"(name: string): $Optional<($ModelPart)>
 "accessories$rootPart"(): $ModelPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelRootAccess$$Type = ($ModelRootAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelRootAccess_ = $ModelRootAccess$$Type;
}}
declare module "io.wispforest.owo.ui.base.BaseComponent" {
import {$EventSource, $EventSource$$Type} from "io.wispforest.owo.util.EventSource"
import {$PositionedRectangle, $PositionedRectangle$$Type} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$List, $List$$Type} from "java.util.List"
import {$ComponentExtension, $ComponentExtension$$Type} from "io.wispforest.accessories.pond.owo.ComponentExtension"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component as $Component$0, $Component$$Type as $Component$0$$Type} from "net.minecraft.network.chat.Component"
import {$CharTyped, $CharTyped$$Type} from "io.wispforest.owo.ui.event.CharTyped"
import {$OwoUIDrawContext, $OwoUIDrawContext$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext"
import {$Component, $Component$$Type} from "io.wispforest.owo.ui.core.Component"
import {$FocusGained, $FocusGained$$Type} from "io.wispforest.owo.ui.event.FocusGained"
import {$ParentComponent, $ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Positioning, $Positioning$$Type} from "io.wispforest.owo.ui.core.Positioning"
import {$KeyPress, $KeyPress$$Type} from "io.wispforest.owo.ui.event.KeyPress"
import {$AnimatableProperty, $AnimatableProperty$$Type} from "io.wispforest.owo.ui.core.AnimatableProperty"
import {$Insets, $Insets$$Type} from "io.wispforest.owo.ui.core.Insets"
import {$MouseScroll, $MouseScroll$$Type} from "io.wispforest.owo.ui.event.MouseScroll"
import {$MouseDown, $MouseDown$$Type} from "io.wispforest.owo.ui.event.MouseDown"
import {$CursorStyle, $CursorStyle$$Type} from "io.wispforest.owo.ui.core.CursorStyle"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Element, $Element$$Type} from "org.w3c.dom.Element"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UIModel, $UIModel$$Type} from "io.wispforest.owo.ui.parsing.UIModel"
import {$Component$FocusSource, $Component$FocusSource$$Type} from "io.wispforest.owo.ui.core.Component$FocusSource"
import {$MouseUp, $MouseUp$$Type} from "io.wispforest.owo.ui.event.MouseUp"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ClientTooltipComponent, $ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import {$Component$DismountReason, $Component$DismountReason$$Type} from "io.wispforest.owo.ui.core.Component$DismountReason"
import {$FocusLost, $FocusLost$$Type} from "io.wispforest.owo.ui.event.FocusLost"
import {$FocusHandler, $FocusHandler$$Type} from "io.wispforest.owo.ui.util.FocusHandler"
import {$MouseDrag, $MouseDrag$$Type} from "io.wispforest.owo.ui.event.MouseDrag"
import {$Sizing, $Sizing$$Type} from "io.wispforest.owo.ui.core.Sizing"
import {$MouseEnter, $MouseEnter$$Type} from "io.wispforest.owo.ui.event.MouseEnter"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$MouseLeave, $MouseLeave$$Type} from "io.wispforest.owo.ui.event.MouseLeave"
import {$Size, $Size$$Type} from "io.wispforest.owo.ui.core.Size"

export class $BaseComponent implements $Component, $ComponentExtension<(any)> {


public "parent"(): $ParentComponent
public "inflate"(space: $Size$$Type): void
public "update"(delta: float, mouseX: integer, mouseY: integer): void
public "x"(): integer
public "id"(id: string): $Component
public "id"(): string
public "mount"(parent: $ParentComponent$$Type, x: integer, y: integer): void
public "y"(): integer
public "width"(): integer
public "configure"<C extends $Component>(closure: $Consumer$$Type<(C)>): C
public "allowIndividualOverdraw"(value: boolean): $BaseComponent
public "allowIndividualOverdraw"(): boolean
public "dismount"(reason: $Component$DismountReason$$Type): void
public "tooltip"(tooltip: $List$$Type<($ClientTooltipComponent$$Type)>): $Component
public "tooltip"(): $List<($ClientTooltipComponent)>
public "charTyped"(): $EventSource<($CharTyped)>
public "height"(): integer
public "zIndex"(): integer
public "zIndex"(zIndex: integer): $Component
public "horizontalSizing"(): $AnimatableProperty<($Sizing)>
public "horizontalSizing"(horizontalSizing: $Sizing$$Type): $Component
public "focusHandler"(): $FocusHandler
public "positioning"(positioning: $Positioning$$Type): $BaseComponent
public "positioning"(): $AnimatableProperty<($Positioning)>
public "margins"(margins: $Insets$$Type): $BaseComponent
public "margins"(): $AnimatableProperty<($Insets)>
public "verticalSizing"(verticalSizing: $Sizing$$Type): $Component
public "verticalSizing"(): $AnimatableProperty<($Sizing)>
public "mouseDown"(): $EventSource<($MouseDown)>
public "cursorStyle"(arg0: $CursorStyle$$Type): $Component
public "cursorStyle"(): $CursorStyle
public "onMouseDown"(mouseX: double, mouseY: double, button: integer): boolean
public "onMouseUp"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseUp"(): $EventSource<($MouseUp)>
public "mouseScroll"(): $EventSource<($MouseScroll)>
public "mouseDrag"(): $EventSource<($MouseDrag)>
public "keyPress"(): $EventSource<($KeyPress)>
public "focusGained"(): $EventSource<($FocusGained)>
public "focusLost"(): $EventSource<($FocusLost)>
public "mouseEnter"(): $EventSource<($MouseEnter)>
public "mouseLeave"(): $EventSource<($MouseLeave)>
public "onMouseScroll"(mouseX: double, mouseY: double, amount: double): boolean
public "onMouseDrag"(mouseX: double, mouseY: double, deltaX: double, deltaY: double, button: integer): boolean
public "onKeyPress"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "onCharTyped"(chr: character, modifiers: integer): boolean
public "onFocusGained"(source: $Component$FocusSource$$Type): void
public "onFocusLost"(): void
public "updateX"(x: integer): void
public "updateY"(y: integer): void
public "remove"(): void
public "root"(): $ParentComponent
public "tooltip"(tooltip: $Component$0$$Type): $Component
public "tooltip"(tooltip: $Collection$$Type<($Component$0$$Type)>): $Component
public "draw"(arg0: $OwoUIDrawContext$$Type, arg1: integer, arg2: integer, arg3: float, arg4: float): void
public "moveTo"(x: integer, y: integer): void
public "sizing"(sizing: $Sizing$$Type): $Component
public "sizing"(horizontalSizing: $Sizing$$Type, verticalSizing: $Sizing$$Type): $Component
public "baseX"(): integer
public "baseY"(): integer
public "shouldDrawTooltip"(mouseX: double, mouseY: double): boolean
public "parseProperties"(model: $UIModel$$Type, element: $Element$$Type, children: $Map$$Type<(string), ($Element$$Type)>): void
public "drawFocusHighlight"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
public "isInBoundingBox"(x: double, y: double): boolean
public "canFocus"(source: $Component$FocusSource$$Type): boolean
public "drawTooltip"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
public "hasParent"(): boolean
public "fullSize"(): $Size
public static "bypassCheck"(component: $Component$$Type, runnable: $Runnable$$Type): void
public "intersects"(other: $PositionedRectangle$$Type): boolean
public "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
public static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
public static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
public "interpolate"(arg0: $Animatable$$Type<(any)>, arg1: float): $Animatable<(any)>
public "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseComponent$$Type = ($BaseComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseComponent_ = $BaseComponent$$Type;
}}
declare module "io.wispforest.accessories.mixin.ServerChunkLoadingManagerAccessor" {
import {$EntityTrackerAccessor, $EntityTrackerAccessor$$Type} from "io.wispforest.accessories.mixin.EntityTrackerAccessor"
import {$Int2ObjectMap, $Int2ObjectMap$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"

export interface $ServerChunkLoadingManagerAccessor {

 "accessories$getEntityMap"(): $Int2ObjectMap<($EntityTrackerAccessor)>

(): $Int2ObjectMap$$Type<($EntityTrackerAccessor$$Type)>
}

export namespace $ServerChunkLoadingManagerAccessor {
const probejs$$marker: never
}
export class $ServerChunkLoadingManagerAccessor$$Static implements $ServerChunkLoadingManagerAccessor {


 "accessories$getEntityMap"(): $Int2ObjectMap<($EntityTrackerAccessor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerChunkLoadingManagerAccessor$$Type = (() => $Int2ObjectMap$$Type<($EntityTrackerAccessor$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerChunkLoadingManagerAccessor_ = $ServerChunkLoadingManagerAccessor$$Type;
}}
declare module "io.wispforest.owo.ui.util.CursorAdapter" {
import {$CursorStyle, $CursorStyle$$Type} from "io.wispforest.owo.ui.core.CursorStyle"
import {$Window, $Window$$Type} from "com.mojang.blaze3d.platform.Window"

export class $CursorAdapter {


public "dispose"(): void
public static "ofClientWindow"(): $CursorAdapter
public "applyStyle"(style: $CursorStyle$$Type): void
public static "ofWindow"(windowHandle: long): $CursorAdapter
public static "ofWindow"(window: $Window$$Type): $CursorAdapter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CursorAdapter$$Type = ($CursorAdapter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CursorAdapter_ = $CursorAdapter$$Type;
}}
declare module "io.wispforest.accessories.api.client.AccessoryRenderer" {
import {$HumanoidModel, $HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$HumanoidArm, $HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$EntityModel, $EntityModel$$Type} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"
import {$Side, $Side$$Type} from "io.wispforest.accessories.api.client.Side"
import {$SlotReference, $SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export interface $AccessoryRenderer {

 "isEmpty"(): boolean
 "shouldRender"(isRendering: boolean): boolean
 "render"<M extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type, arg2: $PoseStack$$Type, arg3: $EntityModel$$Type<(M)>, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
 "renderOnFirstPerson"<M extends $LivingEntity>(arm: $HumanoidArm$$Type, stack: $ItemStack$$Type, reference: $SlotReference$$Type, matrices: $PoseStack$$Type, model: $EntityModel$$Type<(M)>, multiBufferSource: $MultiBufferSource$$Type, light: integer): void
 "shouldRenderInFirstPerson"(arm: $HumanoidArm$$Type, stack: $ItemStack$$Type, reference: $SlotReference$$Type): boolean

(arg0: $ItemStack, arg1: $SlotReference, arg2: $PoseStack, arg3: $EntityModel<(M)>, arg4: $MultiBufferSource, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
get "empty"(): boolean
}

export namespace $AccessoryRenderer {
function followBodyRotations(entity: $LivingEntity$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>): void
function translateToFace(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, entity: $LivingEntity$$Type): void
function transformToFace(poseStack: $PoseStack$$Type, part: $ModelPart$$Type, side: $Side$$Type): void
function transformToModelPart(poseStack: $PoseStack$$Type, part: $ModelPart$$Type): void
function transformToModelPart(poseStack: $PoseStack$$Type, part: $ModelPart$$Type, xPercent: number, yPercent: number, zPercent: number): void
function translateToRightArm(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, player: $LivingEntity$$Type): void
function translateToLeftArm(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, player: $LivingEntity$$Type): void
function translateToRightLeg(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, player: $LivingEntity$$Type): void
function translateToLeftLeg(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, player: $LivingEntity$$Type): void
function translateToChest(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, livingEntity: $LivingEntity$$Type): void
const probejs$$marker: never
}
export class $AccessoryRenderer$$Static implements $AccessoryRenderer {


 "isEmpty"(): boolean
/**
 * 
 * @deprecated
 */
static "followBodyRotations"(entity: $LivingEntity$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>): void
 "shouldRender"(isRendering: boolean): boolean
 "render"<M extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type, arg2: $PoseStack$$Type, arg3: $EntityModel$$Type<(M)>, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
 "renderOnFirstPerson"<M extends $LivingEntity>(arm: $HumanoidArm$$Type, stack: $ItemStack$$Type, reference: $SlotReference$$Type, matrices: $PoseStack$$Type, model: $EntityModel$$Type<(M)>, multiBufferSource: $MultiBufferSource$$Type, light: integer): void
 "shouldRenderInFirstPerson"(arm: $HumanoidArm$$Type, stack: $ItemStack$$Type, reference: $SlotReference$$Type): boolean
/**
 * 
 * @deprecated
 */
static "translateToFace"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, entity: $LivingEntity$$Type): void
static "transformToFace"(poseStack: $PoseStack$$Type, part: $ModelPart$$Type, side: $Side$$Type): void
static "transformToModelPart"(poseStack: $PoseStack$$Type, part: $ModelPart$$Type): void
static "transformToModelPart"(poseStack: $PoseStack$$Type, part: $ModelPart$$Type, xPercent: number, yPercent: number, zPercent: number): void
/**
 * 
 * @deprecated
 */
static "translateToRightArm"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, player: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
static "translateToLeftArm"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, player: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
static "translateToRightLeg"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, player: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
static "translateToLeftLeg"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, player: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
static "translateToChest"(poseStack: $PoseStack$$Type, model: $HumanoidModel$$Type<($LivingEntity$$Type)>, livingEntity: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryRenderer$$Type = ((arg0: $ItemStack, arg1: $SlotReference, arg2: $PoseStack, arg3: $EntityModel<(M)>, arg4: $MultiBufferSource, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoryRenderer_ = $AccessoryRenderer$$Type;
}}
declare module "io.wispforest.owo.ui.event.MouseScroll" {
import {$EventStream, $EventStream$$Type} from "io.wispforest.owo.util.EventStream"

export interface $MouseScroll {

 "onMouseScroll"(arg0: double, arg1: double, arg2: double): boolean

(arg0: double, arg1: double, arg2: double): boolean
}

export namespace $MouseScroll {
function newStream(): $EventStream<($MouseScroll)>
const probejs$$marker: never
}
export class $MouseScroll$$Static implements $MouseScroll {


static "newStream"(): $EventStream<($MouseScroll)>
 "onMouseScroll"(arg0: double, arg1: double, arg2: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseScroll$$Type = ((arg0: double, arg1: double, arg2: double) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseScroll_ = $MouseScroll$$Type;
}}
declare module "io.wispforest.owo.mixin.ext.ComponentMapImplAccessor" {
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"

export interface $ComponentMapImplAccessor {

 "owo$getBaseComponents"(): $DataComponentMap
 "owo$setBaseComponents"(arg0: $DataComponentMap$$Type): void
}

export namespace $ComponentMapImplAccessor {
const probejs$$marker: never
}
export class $ComponentMapImplAccessor$$Static implements $ComponentMapImplAccessor {


 "owo$getBaseComponents"(): $DataComponentMap
 "owo$setBaseComponents"(arg0: $DataComponentMap$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComponentMapImplAccessor$$Type = ($ComponentMapImplAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComponentMapImplAccessor_ = $ComponentMapImplAccessor$$Type;
}}
declare module "io.wispforest.owo.ui.core.Easing" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Easing {

 "apply"(arg0: float): float

(arg0: float): float
}

export namespace $Easing {
const EXPO: $Easing
const QUADRATIC: $Easing
const QUARTIC: $Easing
const SINE: $Easing
const LINEAR: $Easing
const CUBIC: $Easing
const probejs$$marker: never
}
export class $Easing$$Static implements $Easing {
static readonly "EXPO": $Easing
static readonly "QUADRATIC": $Easing
static readonly "QUARTIC": $Easing
static readonly "SINE": $Easing
static readonly "LINEAR": $Easing
static readonly "CUBIC": $Easing


 "apply"(arg0: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Easing$$Type = ((arg0: float) => float);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Easing_ = $Easing$$Type;
}}
declare module "io.wispforest.accessories.mixin.client.AbstractContainerScreenAccessor" {
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $AbstractContainerScreenAccessor {

 "accessories$recalculateQuickCraftRemaining"(): void
 "accessories$getQuickCraftingType"(): integer
 "accessories$getClickedSlot"(): $Slot
 "accessories$getDraggingItem"(): $ItemStack
 "accessories$isSplittingStack"(): boolean
 "accessories$leftPos"(): integer
 "accessories$topPos"(): integer
}

export namespace $AbstractContainerScreenAccessor {
const probejs$$marker: never
}
export class $AbstractContainerScreenAccessor$$Static implements $AbstractContainerScreenAccessor {


 "accessories$recalculateQuickCraftRemaining"(): void
 "accessories$getQuickCraftingType"(): integer
 "accessories$getClickedSlot"(): $Slot
 "accessories$getDraggingItem"(): $ItemStack
 "accessories$isSplittingStack"(): boolean
 "accessories$leftPos"(): integer
 "accessories$topPos"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerScreenAccessor$$Type = ($AbstractContainerScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerScreenAccessor_ = $AbstractContainerScreenAccessor$$Type;
}}
declare module "io.wispforest.accessories.impl.PlayerEquipControl" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $PlayerEquipControl extends $Enum<($PlayerEquipControl)> {
static readonly "DISABLED": $PlayerEquipControl
static readonly "MUST_NOT_CROUCH": $PlayerEquipControl
static readonly "MUST_CROUCH": $PlayerEquipControl


public static "values"(): ($PlayerEquipControl)[]
public static "valueOf"(name: string): $PlayerEquipControl
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEquipControl$$Type = (("must_crouch") | ("must_not_crouch") | ("disabled"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerEquipControl_ = $PlayerEquipControl$$Type;
}}
declare module "io.wispforest.accessories.api.slot.SlotReference" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$AccessoriesCapability, $AccessoriesCapability$$Type} from "io.wispforest.accessories.api.AccessoriesCapability"
import {$AccessoriesContainer, $AccessoriesContainer$$Type} from "io.wispforest.accessories.api.AccessoriesContainer"
import {$SlotType, $SlotType$$Type} from "io.wispforest.accessories.api.slot.SlotType"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $SlotReference {

 "entity"(): $LivingEntity
 "slot"(): integer
 "type"(): $SlotType
 "getStack"(): $ItemStack
 "isValid"(): boolean
 "capability"(): $AccessoriesCapability
 "createSlotPath"(): string
 "slotContainer"(): $AccessoriesContainer
 "setStack"(stack: $ItemStack$$Type): boolean
 "slotName"(): string
get "stack"(): $ItemStack
get "valid"(): boolean
set "stack"(value: $ItemStack$$Type)
}

export namespace $SlotReference {
function of(livingEntity: $LivingEntity$$Type, slotName: string, slot: integer): $SlotReference
function ofNest(livingEntity: $LivingEntity$$Type, slotName: string, initialHolderSlot: integer, innerSlotIndices: $List$$Type<(integer)>): $SlotReference
const probejs$$marker: never
}
export class $SlotReference$$Static implements $SlotReference {


 "entity"(): $LivingEntity
 "slot"(): integer
 "type"(): $SlotType
static "of"(livingEntity: $LivingEntity$$Type, slotName: string, slot: integer): $SlotReference
 "getStack"(): $ItemStack
 "isValid"(): boolean
 "capability"(): $AccessoriesCapability
 "createSlotPath"(): string
 "slotContainer"(): $AccessoriesContainer
 "setStack"(stack: $ItemStack$$Type): boolean
static "ofNest"(livingEntity: $LivingEntity$$Type, slotName: string, initialHolderSlot: integer, innerSlotIndices: $List$$Type<(integer)>): $SlotReference
 "slotName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotReference$$Type = ($SlotReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotReference_ = $SlotReference$$Type;
}}
declare module "io.wispforest.accessories.client.gui.ButtonEvents$AdjustRendering" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$AbstractButton, $AbstractButton$$Type} from "net.minecraft.client.gui.components.AbstractButton"

export interface $ButtonEvents$AdjustRendering {

 "render"(arg0: $AbstractButton$$Type, arg1: $GuiGraphics$$Type, arg2: $ResourceLocation$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer): boolean

(arg0: $AbstractButton, arg1: $GuiGraphics, arg2: $ResourceLocation, arg3: integer, arg4: integer, arg5: integer, arg6: integer): boolean
}

export namespace $ButtonEvents$AdjustRendering {
const probejs$$marker: never
}
export class $ButtonEvents$AdjustRendering$$Static implements $ButtonEvents$AdjustRendering {


 "render"(arg0: $AbstractButton$$Type, arg1: $GuiGraphics$$Type, arg2: $ResourceLocation$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ButtonEvents$AdjustRendering$$Type = ((arg0: $AbstractButton, arg1: $GuiGraphics, arg2: $ResourceLocation, arg3: integer, arg4: integer, arg5: integer, arg6: integer) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ButtonEvents$AdjustRendering_ = $ButtonEvents$AdjustRendering$$Type;
}}
declare module "io.wispforest.endec.Serializer" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$Serializer$Sequence, $Serializer$Sequence$$Type} from "io.wispforest.endec.Serializer$Sequence"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$SerializationContext, $SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"
import {$Serializer$Map, $Serializer$Map$$Type} from "io.wispforest.endec.Serializer$Map"
import {$Serializer$Struct, $Serializer$Struct$$Type} from "io.wispforest.endec.Serializer$Struct"

export interface $Serializer<T> {

 "map"<V>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(V)>, arg2: integer): $Serializer$Map<(V)>
 "result"(): T
 "writeInt"(arg0: $SerializationContext$$Type, arg1: integer): void
 "writeBytes"(arg0: $SerializationContext$$Type, arg1: (byte)[]): void
 "writeFloat"(arg0: $SerializationContext$$Type, arg1: float): void
 "sequence"<E>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(E)>, arg2: integer): $Serializer$Sequence<(E)>
 "writeBoolean"(arg0: $SerializationContext$$Type, arg1: boolean): void
 "writeByte"(arg0: $SerializationContext$$Type, arg1: byte): void
 "writeShort"(arg0: $SerializationContext$$Type, arg1: short): void
 "writeLong"(arg0: $SerializationContext$$Type, arg1: long): void
 "writeDouble"(arg0: $SerializationContext$$Type, arg1: double): void
 "writeString"(arg0: $SerializationContext$$Type, arg1: string): void
 "writeVarInt"(arg0: $SerializationContext$$Type, arg1: integer): void
 "writeOptional"<V>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(V)>, arg2: $Optional$$Type<(V)>): void
 "writeVarLong"(arg0: $SerializationContext$$Type, arg1: long): void
 "struct"(): $Serializer$Struct
 "setupContext"(arg0: $SerializationContext$$Type): $SerializationContext
set "upContext"(value: $SerializationContext$$Type)
}

export namespace $Serializer {
const probejs$$marker: never
}
export class $Serializer$$Static<T> implements $Serializer {


 "map"<V>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(V)>, arg2: integer): $Serializer$Map<(V)>
 "result"(): T
 "writeInt"(arg0: $SerializationContext$$Type, arg1: integer): void
 "writeBytes"(arg0: $SerializationContext$$Type, arg1: (byte)[]): void
 "writeFloat"(arg0: $SerializationContext$$Type, arg1: float): void
 "sequence"<E>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(E)>, arg2: integer): $Serializer$Sequence<(E)>
 "writeBoolean"(arg0: $SerializationContext$$Type, arg1: boolean): void
 "writeByte"(arg0: $SerializationContext$$Type, arg1: byte): void
 "writeShort"(arg0: $SerializationContext$$Type, arg1: short): void
 "writeLong"(arg0: $SerializationContext$$Type, arg1: long): void
 "writeDouble"(arg0: $SerializationContext$$Type, arg1: double): void
 "writeString"(arg0: $SerializationContext$$Type, arg1: string): void
 "writeVarInt"(arg0: $SerializationContext$$Type, arg1: integer): void
 "writeOptional"<V>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(V)>, arg2: $Optional$$Type<(V)>): void
 "writeVarLong"(arg0: $SerializationContext$$Type, arg1: long): void
 "struct"(): $Serializer$Struct
 "setupContext"(arg0: $SerializationContext$$Type): $SerializationContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializer$$Type<T> = ($Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Serializer_<T> = $Serializer$$Type<(T)>;
}}
declare module "io.wispforest.accessories.pond.CosmeticArmorLookupTogglable" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $CosmeticArmorLookupTogglable {

 "setLookupToggle"(value: boolean): void
 "getLookupToggle"(): boolean
set "lookupToggle"(value: boolean)
get "lookupToggle"(): boolean
}

export namespace $CosmeticArmorLookupTogglable {
function getAlternativeStack(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
const probejs$$marker: never
}
export class $CosmeticArmorLookupTogglable$$Static implements $CosmeticArmorLookupTogglable {


 "setLookupToggle"(value: boolean): void
 "getLookupToggle"(): boolean
static "getAlternativeStack"(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticArmorLookupTogglable$$Type = ($CosmeticArmorLookupTogglable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticArmorLookupTogglable_ = $CosmeticArmorLookupTogglable$$Type;
}}
declare module "io.wispforest.owo.mixin.ui.SlotAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlotAccessor {

 "owo$setX"(arg0: integer): void
 "owo$setY"(arg0: integer): void
}

export namespace $SlotAccessor {
const probejs$$marker: never
}
export class $SlotAccessor$$Static implements $SlotAccessor {


 "owo$setX"(arg0: integer): void
 "owo$setY"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotAccessor$$Type = ($SlotAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotAccessor_ = $SlotAccessor$$Type;
}}
declare module "io.wispforest.endec.Deserializer$Struct" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$SerializationContext, $SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"

export interface $Deserializer$Struct {

 "field"<F>(arg0: string, arg1: $SerializationContext$$Type, arg2: $Endec$$Type<(F)>): F
 "field"<F>(arg0: string, arg1: $SerializationContext$$Type, arg2: $Endec$$Type<(F)>, arg3: F): F
}

export namespace $Deserializer$Struct {
const probejs$$marker: never
}
export class $Deserializer$Struct$$Static implements $Deserializer$Struct {


 "field"<F>(arg0: string, arg1: $SerializationContext$$Type, arg2: $Endec$$Type<(F)>): F
 "field"<F>(arg0: string, arg1: $SerializationContext$$Type, arg2: $Endec$$Type<(F)>, arg3: F): F
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Deserializer$Struct$$Type = ($Deserializer$Struct);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Deserializer$Struct_ = $Deserializer$Struct$$Type;
}}
declare module "io.wispforest.accessories.api.EquipmentChecking" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $EquipmentChecking extends $Enum<($EquipmentChecking)> {
static readonly "ACCESSORIES_ONLY": $EquipmentChecking
static readonly "COSMETICALLY_OVERRIDABLE": $EquipmentChecking


public static "values"(): ($EquipmentChecking)[]
public static "valueOf"(name: string): $EquipmentChecking
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentChecking$$Type = (("accessories_only") | ("cosmetically_overridable"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipmentChecking_ = $EquipmentChecking$$Type;
}}
declare module "io.wispforest.accessories.mixin.StateHolderAccessor" {
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export interface $StateHolderAccessor<O, S> {

 "accessories$propertiesCodec"(): $MapCodec<(S)>
 "accessories$owner"(): O
}

export namespace $StateHolderAccessor {
const probejs$$marker: never
}
export class $StateHolderAccessor$$Static<O, S> implements $StateHolderAccessor {


 "accessories$propertiesCodec"(): $MapCodec<(S)>
 "accessories$owner"(): O
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StateHolderAccessor$$Type<O, S> = ($StateHolderAccessor<(O), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StateHolderAccessor_<O, S> = $StateHolderAccessor$$Type<(O), (S)>;
}}
declare module "io.wispforest.accessories.criteria.AccessoryChangedCriterion$Conditions" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$List, $List$$Type} from "java.util.List"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AccessoryChangedCriterion$Conditions extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($AccessoryChangedCriterion$Conditions)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, itemPredicates: $Optional$$Type<($List$$Type<($ItemPredicate$$Type)>)>, groups: $Optional$$Type<($List$$Type<(string)>)>, slots: $Optional$$Type<($List$$Type<(string)>)>, indices: $Optional$$Type<($List$$Type<(integer)>)>, cosmetic: $Optional$$Type<(boolean)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "groups"(): $Optional<($List<(string)>)>
public "slots"(): $Optional<($List<(string)>)>
public "indices"(): $Optional<($List<(integer)>)>
public "cosmetic"(): $Optional<(boolean)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "itemPredicates"(): $Optional<($List<($ItemPredicate)>)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryChangedCriterion$Conditions$$Type = ({"groups"?: ($List$$Type<(string)>)?, "indices"?: ($List$$Type<(integer)>)?, "cosmetic"?: (boolean)?, "slots"?: ($List$$Type<(string)>)?, "player"?: ($ContextAwarePredicate$$Type)?, "itemPredicates"?: ($List$$Type<($ItemPredicate$$Type)>)?}) | ([groups?: ($List$$Type<(string)>)?, indices?: ($List$$Type<(integer)>)?, cosmetic?: (boolean)?, slots?: ($List$$Type<(string)>)?, player?: ($ContextAwarePredicate$$Type)?, itemPredicates?: ($List$$Type<($ItemPredicate$$Type)>)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoryChangedCriterion$Conditions_ = $AccessoryChangedCriterion$Conditions$$Type;
}}
declare module "io.wispforest.owo.util.EventStream" {
import {$EventSource, $EventSource$$Type} from "io.wispforest.owo.util.EventSource"
import {$List, $List$$Type} from "java.util.List"
import {$Function, $Function$$Type} from "java.util.function.Function"

export class $EventStream<T> {

constructor(sinkFactory: $Function$$Type<($List<(T)>), (T)>)

public "source"(): $EventSource<(T)>
public "sink"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventStream$$Type<T> = ($EventStream<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventStream_<T> = $EventStream$$Type<(T)>;
}}
declare module "io.wispforest.owo.ui.inject.ComponentStub" {
import {$EventSource, $EventSource$$Type} from "io.wispforest.owo.util.EventSource"
import {$PositionedRectangle, $PositionedRectangle$$Type} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$CharTyped, $CharTyped$$Type} from "io.wispforest.owo.ui.event.CharTyped"
import {$OwoUIDrawContext, $OwoUIDrawContext$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext"
import {$Component as $Component$0, $Component$$Type as $Component$0$$Type} from "io.wispforest.owo.ui.core.Component"
import {$FocusGained, $FocusGained$$Type} from "io.wispforest.owo.ui.event.FocusGained"
import {$ParentComponent, $ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Positioning, $Positioning$$Type} from "io.wispforest.owo.ui.core.Positioning"
import {$KeyPress, $KeyPress$$Type} from "io.wispforest.owo.ui.event.KeyPress"
import {$AnimatableProperty, $AnimatableProperty$$Type} from "io.wispforest.owo.ui.core.AnimatableProperty"
import {$Insets, $Insets$$Type} from "io.wispforest.owo.ui.core.Insets"
import {$MouseScroll, $MouseScroll$$Type} from "io.wispforest.owo.ui.event.MouseScroll"
import {$MouseDown, $MouseDown$$Type} from "io.wispforest.owo.ui.event.MouseDown"
import {$CursorStyle, $CursorStyle$$Type} from "io.wispforest.owo.ui.core.CursorStyle"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Element, $Element$$Type} from "org.w3c.dom.Element"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UIModel, $UIModel$$Type} from "io.wispforest.owo.ui.parsing.UIModel"
import {$Component$FocusSource, $Component$FocusSource$$Type} from "io.wispforest.owo.ui.core.Component$FocusSource"
import {$MouseUp, $MouseUp$$Type} from "io.wispforest.owo.ui.event.MouseUp"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ClientTooltipComponent, $ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import {$Component$DismountReason, $Component$DismountReason$$Type} from "io.wispforest.owo.ui.core.Component$DismountReason"
import {$FocusLost, $FocusLost$$Type} from "io.wispforest.owo.ui.event.FocusLost"
import {$FocusHandler, $FocusHandler$$Type} from "io.wispforest.owo.ui.util.FocusHandler"
import {$MouseDrag, $MouseDrag$$Type} from "io.wispforest.owo.ui.event.MouseDrag"
import {$Sizing, $Sizing$$Type} from "io.wispforest.owo.ui.core.Sizing"
import {$MouseEnter, $MouseEnter$$Type} from "io.wispforest.owo.ui.event.MouseEnter"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$VanillaWidgetComponent, $VanillaWidgetComponent$$Type} from "io.wispforest.owo.ui.component.VanillaWidgetComponent"
import {$MouseLeave, $MouseLeave$$Type} from "io.wispforest.owo.ui.event.MouseLeave"
import {$Size, $Size$$Type} from "io.wispforest.owo.ui.core.Size"

export interface $ComponentStub extends $Component$0 {

 "parent"(): $ParentComponent
 "inflate"(space: $Size$$Type): void
 "x"(): integer
 "id"(): string
 "id"(id: string): $Component$0
 "mount"(parent: $ParentComponent$$Type, x: integer, y: integer): void
 "y"(): integer
 "width"(): integer
 "configure"<C extends $Component$0>(closure: $Consumer$$Type<(C)>): C
 "xOffset"(): integer
 "yOffset"(): integer
 "dismount"(reason: $Component$DismountReason$$Type): void
 "tooltip"(tooltip: $List$$Type<($ClientTooltipComponent$$Type)>): $Component$0
 "tooltip"(): $List<($ClientTooltipComponent)>
 "charTyped"(): $EventSource<($CharTyped)>
 "height"(): integer
 "draw"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "zIndex"(): integer
 "zIndex"(zIndex: integer): $Component$0
 "horizontalSizing"(): $AnimatableProperty<($Sizing)>
 "horizontalSizing"(horizontalSizing: $Sizing$$Type): $Component$0
 "focusHandler"(): $FocusHandler
 "positioning"(positioning: $Positioning$$Type): $Component$0
 "positioning"(): $AnimatableProperty<($Positioning)>
 "margins"(margins: $Insets$$Type): $Component$0
 "margins"(): $AnimatableProperty<($Insets)>
 "verticalSizing"(): $AnimatableProperty<($Sizing)>
 "verticalSizing"(verticalSizing: $Sizing$$Type): $Component$0
 "mouseDown"(): $EventSource<($MouseDown)>
 "cursorStyle"(style: $CursorStyle$$Type): $Component$0
 "cursorStyle"(): $CursorStyle
 "onMouseDown"(mouseX: double, mouseY: double, button: integer): boolean
 "onMouseUp"(mouseX: double, mouseY: double, button: integer): boolean
 "mouseUp"(): $EventSource<($MouseUp)>
 "mouseScroll"(): $EventSource<($MouseScroll)>
 "mouseDrag"(): $EventSource<($MouseDrag)>
 "keyPress"(): $EventSource<($KeyPress)>
 "focusGained"(): $EventSource<($FocusGained)>
 "focusLost"(): $EventSource<($FocusLost)>
 "mouseEnter"(): $EventSource<($MouseEnter)>
 "mouseLeave"(): $EventSource<($MouseLeave)>
 "onMouseScroll"(mouseX: double, mouseY: double, amount: double): boolean
 "onMouseDrag"(mouseX: double, mouseY: double, deltaX: double, deltaY: double, button: integer): boolean
 "onKeyPress"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
 "onCharTyped"(chr: character, modifiers: integer): boolean
 "onFocusGained"(source: $Component$FocusSource$$Type): void
 "onFocusLost"(): void
 "widgetWrapper"(): $VanillaWidgetComponent
 "widthOffset"(): integer
 "heightOffset"(): integer
 "updateX"(x: integer): void
 "updateY"(y: integer): void
 "remove"(): void
 "update"(delta: float, mouseX: integer, mouseY: integer): void
 "root"(): $ParentComponent
 "tooltip"(tooltip: $Component$$Type): $Component$0
 "tooltip"(tooltip: $Collection$$Type<($Component$$Type)>): $Component$0
 "moveTo"(x: integer, y: integer): void
 "sizing"(sizing: $Sizing$$Type): $Component$0
 "sizing"(horizontalSizing: $Sizing$$Type, verticalSizing: $Sizing$$Type): $Component$0
 "baseX"(): integer
 "baseY"(): integer
 "shouldDrawTooltip"(mouseX: double, mouseY: double): boolean
 "parseProperties"(model: $UIModel$$Type, element: $Element$$Type, children: $Map$$Type<(string), ($Element$$Type)>): void
 "drawFocusHighlight"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "isInBoundingBox"(x: double, y: double): boolean
 "canFocus"(source: $Component$FocusSource$$Type): boolean
 "drawTooltip"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "hasParent"(): boolean
 "fullSize"(): $Size
 "intersects"(other: $PositionedRectangle$$Type): boolean
 "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
 "interpolate"(arg0: $Animatable$$Type<(any)>, arg1: float): $Animatable<(any)>
 "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
}

export namespace $ComponentStub {
function of(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
function of(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
const probejs$$marker: never
}
export class $ComponentStub$$Static implements $ComponentStub {


 "parent"(): $ParentComponent
 "inflate"(space: $Size$$Type): void
 "x"(): integer
 "id"(): string
 "id"(id: string): $Component$0
 "mount"(parent: $ParentComponent$$Type, x: integer, y: integer): void
 "y"(): integer
 "width"(): integer
 "configure"<C extends $Component$0>(closure: $Consumer$$Type<(C)>): C
 "xOffset"(): integer
 "yOffset"(): integer
 "dismount"(reason: $Component$DismountReason$$Type): void
 "tooltip"(tooltip: $List$$Type<($ClientTooltipComponent$$Type)>): $Component$0
 "tooltip"(): $List<($ClientTooltipComponent)>
 "charTyped"(): $EventSource<($CharTyped)>
 "height"(): integer
 "draw"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "zIndex"(): integer
 "zIndex"(zIndex: integer): $Component$0
 "horizontalSizing"(): $AnimatableProperty<($Sizing)>
 "horizontalSizing"(horizontalSizing: $Sizing$$Type): $Component$0
 "focusHandler"(): $FocusHandler
 "positioning"(positioning: $Positioning$$Type): $Component$0
 "positioning"(): $AnimatableProperty<($Positioning)>
 "margins"(margins: $Insets$$Type): $Component$0
 "margins"(): $AnimatableProperty<($Insets)>
 "verticalSizing"(): $AnimatableProperty<($Sizing)>
 "verticalSizing"(verticalSizing: $Sizing$$Type): $Component$0
 "mouseDown"(): $EventSource<($MouseDown)>
 "cursorStyle"(style: $CursorStyle$$Type): $Component$0
 "cursorStyle"(): $CursorStyle
 "onMouseDown"(mouseX: double, mouseY: double, button: integer): boolean
 "onMouseUp"(mouseX: double, mouseY: double, button: integer): boolean
 "mouseUp"(): $EventSource<($MouseUp)>
 "mouseScroll"(): $EventSource<($MouseScroll)>
 "mouseDrag"(): $EventSource<($MouseDrag)>
 "keyPress"(): $EventSource<($KeyPress)>
 "focusGained"(): $EventSource<($FocusGained)>
 "focusLost"(): $EventSource<($FocusLost)>
 "mouseEnter"(): $EventSource<($MouseEnter)>
 "mouseLeave"(): $EventSource<($MouseLeave)>
 "onMouseScroll"(mouseX: double, mouseY: double, amount: double): boolean
 "onMouseDrag"(mouseX: double, mouseY: double, deltaX: double, deltaY: double, button: integer): boolean
 "onKeyPress"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
 "onCharTyped"(chr: character, modifiers: integer): boolean
 "onFocusGained"(source: $Component$FocusSource$$Type): void
 "onFocusLost"(): void
 "widgetWrapper"(): $VanillaWidgetComponent
 "widthOffset"(): integer
 "heightOffset"(): integer
 "updateX"(x: integer): void
 "updateY"(y: integer): void
 "remove"(): void
 "update"(delta: float, mouseX: integer, mouseY: integer): void
 "root"(): $ParentComponent
 "tooltip"(tooltip: $Component$$Type): $Component$0
 "tooltip"(tooltip: $Collection$$Type<($Component$$Type)>): $Component$0
 "moveTo"(x: integer, y: integer): void
 "sizing"(sizing: $Sizing$$Type): $Component$0
 "sizing"(horizontalSizing: $Sizing$$Type, verticalSizing: $Sizing$$Type): $Component$0
 "baseX"(): integer
 "baseY"(): integer
 "shouldDrawTooltip"(mouseX: double, mouseY: double): boolean
 "parseProperties"(model: $UIModel$$Type, element: $Element$$Type, children: $Map$$Type<(string), ($Element$$Type)>): void
 "drawFocusHighlight"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "isInBoundingBox"(x: double, y: double): boolean
 "canFocus"(source: $Component$FocusSource$$Type): boolean
 "drawTooltip"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "hasParent"(): boolean
 "fullSize"(): $Size
 "intersects"(other: $PositionedRectangle$$Type): boolean
 "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
 "interpolate"(arg0: $Animatable$$Type<(any)>, arg1: float): $Animatable<(any)>
 "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComponentStub$$Type = ($ComponentStub);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComponentStub_ = $ComponentStub$$Type;
}}
declare module "io.wispforest.endec.SerializationAttribute$Instance" {
import {$SerializationAttribute, $SerializationAttribute$$Type} from "io.wispforest.endec.SerializationAttribute"

export interface $SerializationAttribute$Instance {

 "value"(): any
 "attribute"(): $SerializationAttribute
}

export namespace $SerializationAttribute$Instance {
const probejs$$marker: never
}
export class $SerializationAttribute$Instance$$Static implements $SerializationAttribute$Instance {


 "value"(): any
 "attribute"(): $SerializationAttribute
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializationAttribute$Instance$$Type = ($SerializationAttribute$Instance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializationAttribute$Instance_ = $SerializationAttribute$Instance$$Type;
}}
declare module "io.wispforest.owo.ext.OwoItem" {
import {$DataComponentMap, $DataComponentMap$$Type} from "net.minecraft.core.component.DataComponentMap"
import {$DataComponentPatch$Builder, $DataComponentPatch$Builder$$Type} from "net.minecraft.core.component.DataComponentPatch$Builder"

export interface $OwoItem {

 "deriveStackComponents"(source: $DataComponentMap$$Type, target: $DataComponentPatch$Builder$$Type): void
}

export namespace $OwoItem {
const probejs$$marker: never
}
export class $OwoItem$$Static implements $OwoItem {


 "deriveStackComponents"(source: $DataComponentMap$$Type, target: $DataComponentPatch$Builder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoItem$$Type = ($OwoItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwoItem_ = $OwoItem$$Type;
}}
declare module "io.wispforest.owo.itemgroup.ItemGroupReference" {
import {$OwoItemGroup, $OwoItemGroup$$Type} from "io.wispforest.owo.itemgroup.OwoItemGroup"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ItemGroupReference extends $Record {

/**
 * 
 * @deprecated
 */
constructor(group: $OwoItemGroup$$Type, tab: integer)
constructor(groupSup: $Supplier$$Type<($OwoItemGroup$$Type)>, tab: integer)

public "group"(): $OwoItemGroup
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "tab"(): integer
public "groupSup"(): $Supplier<($OwoItemGroup)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGroupReference$$Type = ({"groupSup"?: $Supplier$$Type<($OwoItemGroup$$Type)>, "tab"?: integer}) | ([groupSup?: $Supplier$$Type<($OwoItemGroup$$Type)>, tab?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemGroupReference_ = $ItemGroupReference$$Type;
}}
declare module "io.wispforest.owo.ui.layers.Layer$Instance$AnchorSide" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Layer$Instance$AnchorSide extends $Enum<($Layer$Instance$AnchorSide)> {
static readonly "TOP": $Layer$Instance$AnchorSide
static readonly "LEFT": $Layer$Instance$AnchorSide
static readonly "RIGHT": $Layer$Instance$AnchorSide
static readonly "BOTTOM": $Layer$Instance$AnchorSide


public static "values"(): ($Layer$Instance$AnchorSide)[]
public static "valueOf"(name: string): $Layer$Instance$AnchorSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layer$Instance$AnchorSide$$Type = (("top") | ("bottom") | ("left") | ("right"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Layer$Instance$AnchorSide_ = $Layer$Instance$AnchorSide$$Type;
}}
declare module "io.wispforest.endec.Endec$Encoder" {
import {$Serializer, $Serializer$$Type} from "io.wispforest.endec.Serializer"
import {$SerializationContext, $SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"

export interface $Endec$Encoder<T> {

 "encode"(arg0: $SerializationContext$$Type, arg1: $Serializer$$Type<(any)>, arg2: T): void

(arg0: $SerializationContext, arg1: $Serializer<(any)>, arg2: T): void
}

export namespace $Endec$Encoder {
const probejs$$marker: never
}
export class $Endec$Encoder$$Static<T> implements $Endec$Encoder {


 "encode"(arg0: $SerializationContext$$Type, arg1: $Serializer$$Type<(any)>, arg2: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endec$Encoder$$Type<T> = ((arg0: $SerializationContext, arg1: $Serializer<(any)>, arg2: T) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Endec$Encoder_<T> = $Endec$Encoder$$Type<(T)>;
}}
declare module "io.wispforest.owo.serialization.OwoComponentTypeBuilder" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$DataComponentType$Builder, $DataComponentType$Builder$$Type} from "net.minecraft.core.component.DataComponentType$Builder"
import {$SerializationContext, $SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"

export interface $OwoComponentTypeBuilder<T> {

 "endec"(endec: $Endec$$Type<(T)>): $DataComponentType$Builder<(T)>
 "endec"(endec: $Endec$$Type<(T)>, assumedContext: $SerializationContext$$Type): $DataComponentType$Builder<(T)>
}

export namespace $OwoComponentTypeBuilder {
const probejs$$marker: never
}
export class $OwoComponentTypeBuilder$$Static<T> implements $OwoComponentTypeBuilder {


 "endec"(endec: $Endec$$Type<(T)>): $DataComponentType$Builder<(T)>
 "endec"(endec: $Endec$$Type<(T)>, assumedContext: $SerializationContext$$Type): $DataComponentType$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoComponentTypeBuilder$$Type<T> = ($OwoComponentTypeBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwoComponentTypeBuilder_<T> = $OwoComponentTypeBuilder$$Type<(T)>;
}}
declare module "io.wispforest.accessories.mixin.EntityTrackerAccessor" {
import {$ServerPlayerConnection, $ServerPlayerConnection$$Type} from "net.minecraft.server.network.ServerPlayerConnection"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $EntityTrackerAccessor {

 "accessories$getSeenBy"(): $Set<($ServerPlayerConnection)>

(): $Set$$Type<($ServerPlayerConnection$$Type)>
}

export namespace $EntityTrackerAccessor {
const probejs$$marker: never
}
export class $EntityTrackerAccessor$$Static implements $EntityTrackerAccessor {


 "accessories$getSeenBy"(): $Set<($ServerPlayerConnection)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTrackerAccessor$$Type = (() => $Set$$Type<($ServerPlayerConnection$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityTrackerAccessor_ = $EntityTrackerAccessor$$Type;
}}
declare module "io.wispforest.owo.ui.core.Size" {
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Size extends $Record {

/**
 * 
 * @deprecated
 */
constructor(width: integer, height: integer)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(width: integer, height: integer): $Size
public static "zero"(): $Size
public static "square"(sideLength: integer): $Size
public "width"(): integer
public "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Size$$Type = ({"height"?: integer, "width"?: integer}) | ([height?: integer, width?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Size_ = $Size$$Type;
}}
declare module "io.wispforest.owo.util.pond.OwoSlotExtension" {
import {$PositionedRectangle, $PositionedRectangle$$Type} from "io.wispforest.owo.ui.core.PositionedRectangle"

export interface $OwoSlotExtension {

 "owo$setDisabledOverride"(arg0: boolean): void
 "owo$getDisabledOverride"(): boolean
 "owo$setScissorArea"(arg0: $PositionedRectangle$$Type): void
 "owo$getScissorArea"(): $PositionedRectangle
}

export namespace $OwoSlotExtension {
const probejs$$marker: never
}
export class $OwoSlotExtension$$Static implements $OwoSlotExtension {


 "owo$setDisabledOverride"(arg0: boolean): void
 "owo$getDisabledOverride"(): boolean
 "owo$setScissorArea"(arg0: $PositionedRectangle$$Type): void
 "owo$getScissorArea"(): $PositionedRectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoSlotExtension$$Type = ($OwoSlotExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwoSlotExtension_ = $OwoSlotExtension$$Type;
}}
declare module "io.wispforest.accessories.api.slot.SlotType" {
import {$DropRule, $DropRule$$Type} from "io.wispforest.accessories.api.DropRule"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $SlotType {

 "name"(): string
 "order"(): integer
 "amount"(): integer
 "translation"(): string
 "validators"(): $Set<($ResourceLocation)>
 "icon"(): $ResourceLocation
 "dropRule"(): $DropRule
}

export namespace $SlotType {
const EMPTY_SLOT_ICON: $ResourceLocation
const probejs$$marker: never
}
export class $SlotType$$Static implements $SlotType {
static readonly "EMPTY_SLOT_ICON": $ResourceLocation


 "name"(): string
 "order"(): integer
 "amount"(): integer
 "translation"(): string
 "validators"(): $Set<($ResourceLocation)>
 "icon"(): $ResourceLocation
 "dropRule"(): $DropRule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotType$$Type = ($SlotType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotType_ = $SlotType$$Type;
}}
declare module "io.wispforest.accessories.pond.ContainerScreenExtension" {
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $ContainerScreenExtension {

 "isHovering_Logical"(slot: $Slot$$Type, mouseX: double, mouseY: double): boolean
 "shouldRenderSlot"(slot: $Slot$$Type): boolean
 "hoverStackOffset"(): integer
 "forceRenderSlot"(context: $GuiGraphics$$Type, slot: $Slot$$Type): void
 "isHovering_Rendering"(slot: $Slot$$Type, mouseX: double, mouseY: double): boolean
}

export namespace $ContainerScreenExtension {
const probejs$$marker: never
}
export class $ContainerScreenExtension$$Static implements $ContainerScreenExtension {


 "isHovering_Logical"(slot: $Slot$$Type, mouseX: double, mouseY: double): boolean
 "shouldRenderSlot"(slot: $Slot$$Type): boolean
 "hoverStackOffset"(): integer
 "forceRenderSlot"(context: $GuiGraphics$$Type, slot: $Slot$$Type): void
 "isHovering_Rendering"(slot: $Slot$$Type, mouseX: double, mouseY: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerScreenExtension$$Type = ($ContainerScreenExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerScreenExtension_ = $ContainerScreenExtension$$Type;
}}
declare module "io.wispforest.endec.impl.AttributeEndecBuilder" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$SerializationAttribute, $SerializationAttribute$$Type} from "io.wispforest.endec.SerializationAttribute"

export class $AttributeEndecBuilder<T> {

constructor(arg0: $Endec$$Type<(T)>, arg1: $SerializationAttribute$$Type)

public "orElse"(arg0: $Endec$$Type<(T)>): $Endec<(T)>
public "orElseIf"(arg0: $Endec$$Type<(T)>, arg1: $SerializationAttribute$$Type): $AttributeEndecBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeEndecBuilder$$Type<T> = ($AttributeEndecBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributeEndecBuilder_<T> = $AttributeEndecBuilder$$Type<(T)>;
}}
declare module "io.wispforest.owo.ui.core.Component$FocusSource" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Component$FocusSource extends $Enum<($Component$FocusSource)> {
static readonly "MOUSE_CLICK": $Component$FocusSource
static readonly "KEYBOARD_CYCLE": $Component$FocusSource


public static "values"(): ($Component$FocusSource)[]
public static "valueOf"(name: string): $Component$FocusSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Component$FocusSource$$Type = (("mouse_click") | ("keyboard_cycle"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Component$FocusSource_ = $Component$FocusSource$$Type;
}}
declare module "io.wispforest.owo.ui.core.OwoUIDrawContext$UtilityScreen" {
import {$Screen$DeferredTooltipRendering, $Screen$DeferredTooltipRendering$$Type} from "net.minecraft.client.gui.screens.Screen$DeferredTooltipRendering"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$List, $List$$Type} from "java.util.List"
import {$CubeMap, $CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$PanoramaRenderer, $PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"

export class $OwoUIDrawContext$UtilityScreen extends $Screen {
static readonly "MENU_BACKGROUND": $ResourceLocation
 "minecraft": $Minecraft
static readonly "INWORLD_FOOTER_SEPARATOR": $ResourceLocation
 "deferredTooltipRendering": $Screen$DeferredTooltipRendering
 "title": $Component
static readonly "FOOTER_SEPARATOR": $ResourceLocation
readonly "renderables": $List<($Renderable)>
static readonly "INWORLD_HEADER_SEPARATOR": $ResourceLocation
readonly "narratables": $List<($NarratableEntry)>
 "width": integer
static readonly "HEADER_SEPARATOR": $ResourceLocation
 "height": integer
 "font": $Font


public static "get"(): $OwoUIDrawContext$UtilityScreen
public "handleComponentClicked"(style: $Style$$Type): boolean
public "getAndClearLinkSource"(): $Screen
public "setLinkSource"(screen: $Screen$$Type): void
public "captureLinkSource"(): void
public static "cumulus$getCubeMap"(): $CubeMap
public static "cumulus$setCubeMap"(arg0: $CubeMap$$Type): void
public static "cumulus$getPanorama"(): $PanoramaRenderer
public static "cumulus$setPanorama"(arg0: $PanoramaRenderer$$Type): void
public static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
public static "owo$PANORAMA_RENDERER"(): $CubeMap
get "andClearLinkSource"(): $Screen
set "linkSource"(value: $Screen$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoUIDrawContext$UtilityScreen$$Type = ($OwoUIDrawContext$UtilityScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwoUIDrawContext$UtilityScreen_ = $OwoUIDrawContext$UtilityScreen$$Type;
}}
declare module "io.wispforest.accessories.pond.ModelPartLoadingHelper" {
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export interface $ModelPartLoadingHelper {

 "accessories$pushRoot"(root: $ModelPart$$Type): void
 "accessories$clearQueue"(): void
 "accessories$pollRoot"(): $ModelPart
}

export namespace $ModelPartLoadingHelper {
const probejs$$marker: never
}
export class $ModelPartLoadingHelper$$Static implements $ModelPartLoadingHelper {


 "accessories$pushRoot"(root: $ModelPart$$Type): void
 "accessories$clearQueue"(): void
 "accessories$pollRoot"(): $ModelPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartLoadingHelper$$Type = ($ModelPartLoadingHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelPartLoadingHelper_ = $ModelPartLoadingHelper$$Type;
}}
declare module "io.wispforest.owo.ui.event.FocusLost" {
import {$EventStream, $EventStream$$Type} from "io.wispforest.owo.util.EventStream"

export interface $FocusLost {

 "onFocusLost"(): void

(): void
}

export namespace $FocusLost {
function newStream(): $EventStream<($FocusLost)>
const probejs$$marker: never
}
export class $FocusLost$$Static implements $FocusLost {


static "newStream"(): $EventStream<($FocusLost)>
 "onFocusLost"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocusLost$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FocusLost_ = $FocusLost$$Type;
}}
declare module "io.wispforest.owo.ui.event.MouseLeave" {
import {$EventStream, $EventStream$$Type} from "io.wispforest.owo.util.EventStream"

export interface $MouseLeave {

 "onMouseLeave"(): void

(): void
}

export namespace $MouseLeave {
function newStream(): $EventStream<($MouseLeave)>
const probejs$$marker: never
}
export class $MouseLeave$$Static implements $MouseLeave {


static "newStream"(): $EventStream<($MouseLeave)>
 "onMouseLeave"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseLeave$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseLeave_ = $MouseLeave$$Type;
}}
declare module "io.wispforest.endec.SerializationAttribute$WithValue" {
import {$SerializationAttribute, $SerializationAttribute$$Type} from "io.wispforest.endec.SerializationAttribute"
import {$SerializationAttribute$Instance, $SerializationAttribute$Instance$$Type} from "io.wispforest.endec.SerializationAttribute$Instance"

export class $SerializationAttribute$WithValue<T> extends $SerializationAttribute {
readonly "name": string


public "instance"(arg0: T): $SerializationAttribute$Instance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializationAttribute$WithValue$$Type<T> = ($SerializationAttribute$WithValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializationAttribute$WithValue_<T> = $SerializationAttribute$WithValue$$Type<(T)>;
}}
declare module "io.wispforest.accessories.impl.AccessoriesContainerImpl" {
import {$InstanceEndec, $InstanceEndec$$Type} from "io.wispforest.accessories.impl.InstanceEndec"
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$List, $List$$Type} from "java.util.List"
import {$AccessoriesContainer, $AccessoriesContainer$$Type} from "io.wispforest.accessories.api.AccessoriesContainer"
import {$SerializationContext, $SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"
import {$SimpleContainer, $SimpleContainer$$Type} from "net.minecraft.world.SimpleContainer"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$SlotReference, $SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"
import {$MapCarrier, $MapCarrier$$Type} from "io.wispforest.endec.util.MapCarrier"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$ExpandedSimpleContainer, $ExpandedSimpleContainer$$Type} from "io.wispforest.accessories.impl.ExpandedSimpleContainer"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$AccessoriesCapability, $AccessoriesCapability$$Type} from "io.wispforest.accessories.api.AccessoriesCapability"
import {$SlotType, $SlotType$$Type} from "io.wispforest.accessories.api.slot.SlotType"
import {$ContainerListener, $ContainerListener$$Type} from "net.minecraft.world.ContainerListener"
import {$Set, $Set$$Type} from "java.util.Set"
import {$KeyedEndec, $KeyedEndec$$Type} from "io.wispforest.endec.impl.KeyedEndec"

export class $AccessoriesContainerImpl implements $AccessoriesContainer, $InstanceEndec, $ContainerListener {
static readonly "BASE_SIZE_KEY": $KeyedEndec<(integer)>
static readonly "COSMETICS_KEY": $KeyedEndec<($ListTag)>
static readonly "SLOT_NAME_KEY": $KeyedEndec<(string)>
static readonly "CACHED_MODIFIERS_KEY": $KeyedEndec<($List<($CompoundTag)>)>
static readonly "PERSISTENT_MODIFIERS_KEY": $KeyedEndec<($List<($CompoundTag)>)>
static readonly "ITEMS_KEY": $KeyedEndec<($ListTag)>
static readonly "RENDER_OPTIONS_KEY": $KeyedEndec<($List<(boolean)>)>
static readonly "CURRENT_SIZE_KEY": $KeyedEndec<(integer)>
static readonly "MODIFIERS_KEY": $KeyedEndec<($List<($CompoundTag)>)>

constructor(capability: $AccessoriesCapability$$Type, slotType: $SlotType$$Type)

public "getModifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
public "update"(): void
public "write"(carrier: $MapCarrier$$Type, ctx: $SerializationContext$$Type, sync: boolean): void
public "write"(carrier: $MapCarrier$$Type, ctx: $SerializationContext$$Type): void
public "read"(carrier: $MapCarrier$$Type, ctx: $SerializationContext$$Type): void
public "read"(carrier: $MapCarrier$$Type, ctx: $SerializationContext$$Type, sync: boolean): void
public "getSize"(): integer
public "copyFrom"(other: $AccessoriesContainerImpl$$Type): void
public "markChanged"(resizingUpdate: boolean): void
public "hasModifier"(location: $ResourceLocation$$Type): boolean
public "clearModifiers"(): void
public "getAccessories"(): $ExpandedSimpleContainer
public "capability"(): $AccessoriesCapability
public "removeModifier"(location: $ResourceLocation$$Type): void
public static "copyContainerList"(container: $SimpleContainer$$Type): $SimpleContainer
public "addTransientModifier"(modifier: $AttributeModifier$$Type): void
public "getCosmeticAccessories"(): $ExpandedSimpleContainer
public "containerChanged"(container: $Container$$Type): void
public "hasChanged"(): boolean
public static "readContainers"(carrier: $MapCarrier$$Type, ctx: $SerializationContext$$Type, ...keys: ($KeyedEndec$$Type<($ListTag$$Type)>)[]): $List<($SimpleContainer)>
public "getSlotName"(): string
public "renderOptions"(): $List<(boolean)>
public "getBaseSize"(): integer
public "getCachedModifiers"(): $Set<($AttributeModifier)>
public "clearCachedModifiers"(): void
public static "readContainer"(carrier: $MapCarrier$$Type, ctx: $SerializationContext$$Type, key: $KeyedEndec$$Type<($ListTag$$Type)>): $SimpleContainer
public "addPersistentModifier"(modifier: $AttributeModifier$$Type): void
public "removeCachedModifiers"(modifier: $AttributeModifier$$Type): void
public "getModifiersForOperation"(operation: $AttributeModifier$Operation$$Type): $Collection<($AttributeModifier)>
public "markChanged"(): void
public "shouldRender"(index: integer): boolean
public "slotType"(): $SlotType
public "createReference"(index: integer): $SlotReference
public static "constructed"<T extends $InstanceEndec>(supplier: $Supplier$$Type<(T)>): $Endec<(T)>
get "modifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
get "size"(): integer
get "accessories"(): $ExpandedSimpleContainer
get "cosmeticAccessories"(): $ExpandedSimpleContainer
get "slotName"(): string
get "baseSize"(): integer
get "cachedModifiers"(): $Set<($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesContainerImpl$$Type = ($AccessoriesContainerImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoriesContainerImpl_ = $AccessoriesContainerImpl$$Type;
}}
declare module "io.wispforest.accessories.commands.RecordArgumentTypeInfo" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$StructEndec, $StructEndec$$Type} from "io.wispforest.endec.StructEndec"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext, $CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$RecordArgumentTypeInfo$RecordInfoTemplate, $RecordArgumentTypeInfo$RecordInfoTemplate$$Type} from "io.wispforest.accessories.commands.RecordArgumentTypeInfo$RecordInfoTemplate"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $RecordArgumentTypeInfo<A extends $ArgumentType<(any)>, T> extends $Record implements $ArgumentTypeInfo<(A), ($RecordArgumentTypeInfo$RecordInfoTemplate<(A), (T)>)> {

constructor(endec: $StructEndec$$Type<(T)>, toTemplate: $Function$$Type<(A), (T)>, fromTemplate: $BiFunction$$Type<($CommandBuildContext), (T), (A)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"<A extends $ArgumentType<(any)>>(argTypeConstructor: $Function$$Type<($CommandBuildContext), (A)>): $RecordArgumentTypeInfo<(A), (void)>
public "endec"(): $StructEndec<(T)>
public "unpack"(arg0: $ArgumentType$$Type<(any)>): $ArgumentTypeInfo$Template<(any)>
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(template: $RecordArgumentTypeInfo$RecordInfoTemplate$$Type<(A), (T)>, buffer: $FriendlyByteBuf$$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template<(any)>
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $JsonObject$$Type): void
public "serializeToJson"(template: $RecordArgumentTypeInfo$RecordInfoTemplate$$Type<(A), (T)>, json: $JsonObject$$Type): void
public "toTemplate"(): $Function<(A), (T)>
public "fromTemplate"(): $BiFunction<($CommandBuildContext), (T), (A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordArgumentTypeInfo$$Type<A, T> = ({"fromTemplate"?: $BiFunction$$Type<($CommandBuildContext$$Type), (any), (any)>, "endec"?: $StructEndec$$Type<(any)>, "toTemplate"?: $Function$$Type<(any), (any)>}) | ([fromTemplate?: $BiFunction$$Type<($CommandBuildContext$$Type), (any), (any)>, endec?: $StructEndec$$Type<(any)>, toTemplate?: $Function$$Type<(any), (any)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecordArgumentTypeInfo_<A, T> = $RecordArgumentTypeInfo$$Type<(A), (T)>;
}}
declare module "io.wispforest.owo.client.screens.OwoScreenHandler" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ReflectiveEndecBuilder, $ReflectiveEndecBuilder$$Type} from "io.wispforest.endec.impl.ReflectiveEndecBuilder"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$SyncedProperty, $SyncedProperty$$Type} from "io.wispforest.owo.client.screens.SyncedProperty"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $OwoScreenHandler {

 "endecBuilder"(): $ReflectiveEndecBuilder
 "sendMessage"<R extends $Record>(message: R): void
 "createProperty"<T>(clazz: $Class$$Type<(T)>, initial: T): $SyncedProperty<(T)>
 "createProperty"<T>(clazz: $Class$$Type<(T)>, endec: $Endec$$Type<(T)>, initial: T): $SyncedProperty<(T)>
 "player"(): $Player
 "addServerboundMessage"<R extends $Record>(messageClass: $Class$$Type<(R)>, handler: $Consumer$$Type<(R)>): void
 "addServerboundMessage"<R extends $Record>(messageClass: $Class$$Type<(R)>, endec: $Endec$$Type<(R)>, handler: $Consumer$$Type<(R)>): void
 "addClientboundMessage"<R extends $Record>(messageClass: $Class$$Type<(R)>, handler: $Consumer$$Type<(R)>): void
 "addClientboundMessage"<R extends $Record>(messageClass: $Class$$Type<(R)>, endec: $Endec$$Type<(R)>, handler: $Consumer$$Type<(R)>): void
}

export namespace $OwoScreenHandler {
const probejs$$marker: never
}
export class $OwoScreenHandler$$Static implements $OwoScreenHandler {


 "endecBuilder"(): $ReflectiveEndecBuilder
 "sendMessage"<R extends $Record>(message: R): void
 "createProperty"<T>(clazz: $Class$$Type<(T)>, initial: T): $SyncedProperty<(T)>
 "createProperty"<T>(clazz: $Class$$Type<(T)>, endec: $Endec$$Type<(T)>, initial: T): $SyncedProperty<(T)>
 "player"(): $Player
 "addServerboundMessage"<R extends $Record>(messageClass: $Class$$Type<(R)>, handler: $Consumer$$Type<(R)>): void
 "addServerboundMessage"<R extends $Record>(messageClass: $Class$$Type<(R)>, endec: $Endec$$Type<(R)>, handler: $Consumer$$Type<(R)>): void
 "addClientboundMessage"<R extends $Record>(messageClass: $Class$$Type<(R)>, handler: $Consumer$$Type<(R)>): void
 "addClientboundMessage"<R extends $Record>(messageClass: $Class$$Type<(R)>, endec: $Endec$$Type<(R)>, handler: $Consumer$$Type<(R)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoScreenHandler$$Type = ($OwoScreenHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwoScreenHandler_ = $OwoScreenHandler$$Type;
}}
declare module "io.wispforest.accessories.pond.AccessoriesFrameBufferExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessoriesFrameBufferExtension {

 "accessories$setUseHighlightShader"(arg0: boolean): void

(arg0: boolean): void
}

export namespace $AccessoriesFrameBufferExtension {
const probejs$$marker: never
}
export class $AccessoriesFrameBufferExtension$$Static implements $AccessoriesFrameBufferExtension {


 "accessories$setUseHighlightShader"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesFrameBufferExtension$$Type = ((arg0: boolean) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoriesFrameBufferExtension_ = $AccessoriesFrameBufferExtension$$Type;
}}
declare module "io.wispforest.owo.ui.core.PositionedRectangle" {
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$Size, $Size$$Type} from "io.wispforest.owo.ui.core.Size"

export interface $PositionedRectangle extends $Animatable<($PositionedRectangle)> {

 "intersects"(other: $PositionedRectangle$$Type): boolean
 "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
 "x"(): integer
 "y"(): integer
 "width"(): integer
 "interpolate"(arg0: $Animatable$$Type<(any)>, arg1: float): $Animatable<(any)>
 "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
 "height"(): integer
 "isInBoundingBox"(x: double, y: double): boolean
}

export namespace $PositionedRectangle {
function of(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
function of(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
const probejs$$marker: never
}
export class $PositionedRectangle$$Static implements $PositionedRectangle {


 "intersects"(other: $PositionedRectangle$$Type): boolean
 "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
 "x"(): integer
 "y"(): integer
 "width"(): integer
 "interpolate"(arg0: $Animatable$$Type<(any)>, arg1: float): $Animatable<(any)>
 "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
 "height"(): integer
 "isInBoundingBox"(x: double, y: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionedRectangle$$Type = ($PositionedRectangle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PositionedRectangle_ = $PositionedRectangle$$Type;
}}
declare module "io.wispforest.accessories.pond.DroppedStacksExtension" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $DroppedStacksExtension {

 "toBeDroppedStacks"(): $Collection<($ItemStack)>
 "addToBeDroppedStacks"(arg0: $Collection$$Type<($ItemStack$$Type)>): void
}

export namespace $DroppedStacksExtension {
const probejs$$marker: never
}
export class $DroppedStacksExtension$$Static implements $DroppedStacksExtension {


 "toBeDroppedStacks"(): $Collection<($ItemStack)>
 "addToBeDroppedStacks"(arg0: $Collection$$Type<($ItemStack$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DroppedStacksExtension$$Type = ($DroppedStacksExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DroppedStacksExtension_ = $DroppedStacksExtension$$Type;
}}
declare module "io.wispforest.owo.util.pond.OwoEntityRenderDispatcherExtension" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $OwoEntityRenderDispatcherExtension {

 "owo$showNametag"(): boolean
 "owo$counterRotate"(): boolean
 "owo$setCounterRotate"(arg0: boolean): void
 "owo$setShowNametag"(arg0: boolean): void
}

export namespace $OwoEntityRenderDispatcherExtension {
const probejs$$marker: never
}
export class $OwoEntityRenderDispatcherExtension$$Static implements $OwoEntityRenderDispatcherExtension {


 "owo$showNametag"(): boolean
 "owo$counterRotate"(): boolean
 "owo$setCounterRotate"(arg0: boolean): void
 "owo$setShowNametag"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoEntityRenderDispatcherExtension$$Type = ($OwoEntityRenderDispatcherExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwoEntityRenderDispatcherExtension_ = $OwoEntityRenderDispatcherExtension$$Type;
}}
declare module "io.wispforest.owo.ui.core.ParentComponent" {
import {$EventSource, $EventSource$$Type} from "io.wispforest.owo.util.EventSource"
import {$PositionedRectangle, $PositionedRectangle$$Type} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$Surface, $Surface$$Type} from "io.wispforest.owo.ui.core.Surface"
import {$List, $List$$Type} from "java.util.List"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component as $Component$0, $Component$$Type as $Component$0$$Type} from "net.minecraft.network.chat.Component"
import {$CharTyped, $CharTyped$$Type} from "io.wispforest.owo.ui.event.CharTyped"
import {$OwoUIDrawContext, $OwoUIDrawContext$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext"
import {$Component, $Component$$Type} from "io.wispforest.owo.ui.core.Component"
import {$FocusGained, $FocusGained$$Type} from "io.wispforest.owo.ui.event.FocusGained"
import {$Positioning, $Positioning$$Type} from "io.wispforest.owo.ui.core.Positioning"
import {$HorizontalAlignment, $HorizontalAlignment$$Type} from "io.wispforest.owo.ui.core.HorizontalAlignment"
import {$KeyPress, $KeyPress$$Type} from "io.wispforest.owo.ui.event.KeyPress"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$AnimatableProperty, $AnimatableProperty$$Type} from "io.wispforest.owo.ui.core.AnimatableProperty"
import {$VerticalAlignment, $VerticalAlignment$$Type} from "io.wispforest.owo.ui.core.VerticalAlignment"
import {$Insets, $Insets$$Type} from "io.wispforest.owo.ui.core.Insets"
import {$MouseScroll, $MouseScroll$$Type} from "io.wispforest.owo.ui.event.MouseScroll"
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$MouseDown, $MouseDown$$Type} from "io.wispforest.owo.ui.event.MouseDown"
import {$CursorStyle, $CursorStyle$$Type} from "io.wispforest.owo.ui.core.CursorStyle"
import {$Element, $Element$$Type} from "org.w3c.dom.Element"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$UIModel, $UIModel$$Type} from "io.wispforest.owo.ui.parsing.UIModel"
import {$Component$FocusSource, $Component$FocusSource$$Type} from "io.wispforest.owo.ui.core.Component$FocusSource"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$MouseUp, $MouseUp$$Type} from "io.wispforest.owo.ui.event.MouseUp"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ClientTooltipComponent, $ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import {$Component$DismountReason, $Component$DismountReason$$Type} from "io.wispforest.owo.ui.core.Component$DismountReason"
import {$FocusLost, $FocusLost$$Type} from "io.wispforest.owo.ui.event.FocusLost"
import {$FocusHandler, $FocusHandler$$Type} from "io.wispforest.owo.ui.util.FocusHandler"
import {$MouseDrag, $MouseDrag$$Type} from "io.wispforest.owo.ui.event.MouseDrag"
import {$Sizing, $Sizing$$Type} from "io.wispforest.owo.ui.core.Sizing"
import {$MouseEnter, $MouseEnter$$Type} from "io.wispforest.owo.ui.event.MouseEnter"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$MouseLeave, $MouseLeave$$Type} from "io.wispforest.owo.ui.event.MouseLeave"
import {$Size, $Size$$Type} from "io.wispforest.owo.ui.core.Size"

export interface $ParentComponent extends $Component {

 "padding"(arg0: $Insets$$Type): $ParentComponent
 "padding"(): $AnimatableProperty<($Insets)>
 "alignment"(horizontalAlignment: $HorizontalAlignment$$Type, verticalAlignment: $VerticalAlignment$$Type): $ParentComponent
 "removeChild"(arg0: $Component$$Type): $ParentComponent
 "update"(delta: float, mouseX: integer, mouseY: integer): void
 "queue"(arg0: $Runnable$$Type): void
 "layout"(arg0: $Size$$Type): void
 "children"(): $List<($Component)>
 "surface"(arg0: $Surface$$Type): $ParentComponent
 "surface"(): $Surface
 "parseProperties"(model: $UIModel$$Type, element: $Element$$Type, children: $Map$$Type<(string), ($Element$$Type)>): void
 "horizontalAlignment"(arg0: $HorizontalAlignment$$Type): $ParentComponent
 "horizontalAlignment"(): $HorizontalAlignment
 "verticalAlignment"(arg0: $VerticalAlignment$$Type): $ParentComponent
 "verticalAlignment"(): $VerticalAlignment
 "forEachDescendantWhere"(action: $Consumer$$Type<($Component)>, condition: $Predicate$$Type<($Component)>): void
 "collectDescendants"(into: $ArrayList$$Type<($Component$$Type)>): void
 "forEachDescendant"(action: $Consumer$$Type<($Component)>): void
 "onMouseDown"(mouseX: double, mouseY: double, button: integer): boolean
 "onMouseScroll"(mouseX: double, mouseY: double, amount: double): boolean
 "drawTooltip"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "onChildMutated"(arg0: $Component$$Type): void
 "childById"<T extends $Component>(expectedClass: $Class$$Type<(T)>, id: string): T
 "childAt"(x: integer, y: integer): $Component
 "allowOverflow"(arg0: boolean): $ParentComponent
 "allowOverflow"(): boolean
 "remove"(): void
 "parent"(): $ParentComponent
 "inflate"(arg0: $Size$$Type): void
 "x"(): integer
 "id"(): string
 "id"(arg0: string): $Component
 "root"(): $ParentComponent
 "mount"(arg0: $ParentComponent$$Type, arg1: integer, arg2: integer): void
 "y"(): integer
 "width"(): integer
 "configure"<C extends $Component>(arg0: $Consumer$$Type<(C)>): C
 "dismount"(arg0: $Component$DismountReason$$Type): void
 "tooltip"(tooltip: $Component$0$$Type): $Component
 "tooltip"(tooltip: $Collection$$Type<($Component$0$$Type)>): $Component
 "tooltip"(): $List<($ClientTooltipComponent)>
 "tooltip"(arg0: $List$$Type<($ClientTooltipComponent$$Type)>): $Component
 "charTyped"(): $EventSource<($CharTyped)>
 "height"(): integer
 "draw"(arg0: $OwoUIDrawContext$$Type, arg1: integer, arg2: integer, arg3: float, arg4: float): void
 "moveTo"(x: integer, y: integer): void
 "sizing"(sizing: $Sizing$$Type): $Component
 "sizing"(horizontalSizing: $Sizing$$Type, verticalSizing: $Sizing$$Type): $Component
 "zIndex"(arg0: integer): $Component
 "zIndex"(): integer
 "baseX"(): integer
 "baseY"(): integer
 "horizontalSizing"(arg0: $Sizing$$Type): $Component
 "horizontalSizing"(): $AnimatableProperty<($Sizing)>
 "shouldDrawTooltip"(mouseX: double, mouseY: double): boolean
 "drawFocusHighlight"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "isInBoundingBox"(x: double, y: double): boolean
 "focusHandler"(): $FocusHandler
 "positioning"(): $AnimatableProperty<($Positioning)>
 "positioning"(arg0: $Positioning$$Type): $Component
 "margins"(): $AnimatableProperty<($Insets)>
 "margins"(arg0: $Insets$$Type): $Component
 "verticalSizing"(arg0: $Sizing$$Type): $Component
 "verticalSizing"(): $AnimatableProperty<($Sizing)>
 "mouseDown"(): $EventSource<($MouseDown)>
 "cursorStyle"(): $CursorStyle
 "cursorStyle"(arg0: $CursorStyle$$Type): $Component
 "onMouseUp"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseUp"(): $EventSource<($MouseUp)>
 "mouseScroll"(): $EventSource<($MouseScroll)>
 "mouseDrag"(): $EventSource<($MouseDrag)>
 "keyPress"(): $EventSource<($KeyPress)>
 "focusGained"(): $EventSource<($FocusGained)>
 "focusLost"(): $EventSource<($FocusLost)>
 "mouseEnter"(): $EventSource<($MouseEnter)>
 "mouseLeave"(): $EventSource<($MouseLeave)>
 "onMouseDrag"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer): boolean
 "onKeyPress"(arg0: integer, arg1: integer, arg2: integer): boolean
 "onCharTyped"(arg0: character, arg1: integer): boolean
 "canFocus"(source: $Component$FocusSource$$Type): boolean
 "onFocusGained"(arg0: $Component$FocusSource$$Type): void
 "onFocusLost"(): void
 "updateX"(arg0: integer): void
 "updateY"(arg0: integer): void
 "hasParent"(): boolean
 "fullSize"(): $Size
 "intersects"(other: $PositionedRectangle$$Type): boolean
 "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
 "interpolate"(arg0: $Animatable$$Type<(any)>, arg1: float): $Animatable<(any)>
 "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
}

export namespace $ParentComponent {
function of(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
function of(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
const probejs$$marker: never
}
export class $ParentComponent$$Static implements $ParentComponent {


 "padding"(arg0: $Insets$$Type): $ParentComponent
 "padding"(): $AnimatableProperty<($Insets)>
 "alignment"(horizontalAlignment: $HorizontalAlignment$$Type, verticalAlignment: $VerticalAlignment$$Type): $ParentComponent
 "removeChild"(arg0: $Component$$Type): $ParentComponent
 "update"(delta: float, mouseX: integer, mouseY: integer): void
 "queue"(arg0: $Runnable$$Type): void
 "layout"(arg0: $Size$$Type): void
 "children"(): $List<($Component)>
 "surface"(arg0: $Surface$$Type): $ParentComponent
 "surface"(): $Surface
 "parseProperties"(model: $UIModel$$Type, element: $Element$$Type, children: $Map$$Type<(string), ($Element$$Type)>): void
 "horizontalAlignment"(arg0: $HorizontalAlignment$$Type): $ParentComponent
 "horizontalAlignment"(): $HorizontalAlignment
 "verticalAlignment"(arg0: $VerticalAlignment$$Type): $ParentComponent
 "verticalAlignment"(): $VerticalAlignment
 "forEachDescendantWhere"(action: $Consumer$$Type<($Component)>, condition: $Predicate$$Type<($Component)>): void
 "collectDescendants"(into: $ArrayList$$Type<($Component$$Type)>): void
 "forEachDescendant"(action: $Consumer$$Type<($Component)>): void
 "onMouseDown"(mouseX: double, mouseY: double, button: integer): boolean
 "onMouseScroll"(mouseX: double, mouseY: double, amount: double): boolean
 "drawTooltip"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "onChildMutated"(arg0: $Component$$Type): void
 "childById"<T extends $Component>(expectedClass: $Class$$Type<(T)>, id: string): T
 "childAt"(x: integer, y: integer): $Component
 "allowOverflow"(arg0: boolean): $ParentComponent
 "allowOverflow"(): boolean
 "remove"(): void
 "parent"(): $ParentComponent
 "inflate"(arg0: $Size$$Type): void
 "x"(): integer
 "id"(): string
 "id"(arg0: string): $Component
 "root"(): $ParentComponent
 "mount"(arg0: $ParentComponent$$Type, arg1: integer, arg2: integer): void
 "y"(): integer
 "width"(): integer
 "configure"<C extends $Component>(arg0: $Consumer$$Type<(C)>): C
 "dismount"(arg0: $Component$DismountReason$$Type): void
 "tooltip"(tooltip: $Component$0$$Type): $Component
 "tooltip"(tooltip: $Collection$$Type<($Component$0$$Type)>): $Component
 "tooltip"(): $List<($ClientTooltipComponent)>
 "tooltip"(arg0: $List$$Type<($ClientTooltipComponent$$Type)>): $Component
 "charTyped"(): $EventSource<($CharTyped)>
 "height"(): integer
 "draw"(arg0: $OwoUIDrawContext$$Type, arg1: integer, arg2: integer, arg3: float, arg4: float): void
 "moveTo"(x: integer, y: integer): void
 "sizing"(sizing: $Sizing$$Type): $Component
 "sizing"(horizontalSizing: $Sizing$$Type, verticalSizing: $Sizing$$Type): $Component
 "zIndex"(arg0: integer): $Component
 "zIndex"(): integer
 "baseX"(): integer
 "baseY"(): integer
 "horizontalSizing"(arg0: $Sizing$$Type): $Component
 "horizontalSizing"(): $AnimatableProperty<($Sizing)>
 "shouldDrawTooltip"(mouseX: double, mouseY: double): boolean
 "drawFocusHighlight"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "isInBoundingBox"(x: double, y: double): boolean
 "focusHandler"(): $FocusHandler
 "positioning"(): $AnimatableProperty<($Positioning)>
 "positioning"(arg0: $Positioning$$Type): $Component
 "margins"(): $AnimatableProperty<($Insets)>
 "margins"(arg0: $Insets$$Type): $Component
 "verticalSizing"(arg0: $Sizing$$Type): $Component
 "verticalSizing"(): $AnimatableProperty<($Sizing)>
 "mouseDown"(): $EventSource<($MouseDown)>
 "cursorStyle"(): $CursorStyle
 "cursorStyle"(arg0: $CursorStyle$$Type): $Component
 "onMouseUp"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseUp"(): $EventSource<($MouseUp)>
 "mouseScroll"(): $EventSource<($MouseScroll)>
 "mouseDrag"(): $EventSource<($MouseDrag)>
 "keyPress"(): $EventSource<($KeyPress)>
 "focusGained"(): $EventSource<($FocusGained)>
 "focusLost"(): $EventSource<($FocusLost)>
 "mouseEnter"(): $EventSource<($MouseEnter)>
 "mouseLeave"(): $EventSource<($MouseLeave)>
 "onMouseDrag"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer): boolean
 "onKeyPress"(arg0: integer, arg1: integer, arg2: integer): boolean
 "onCharTyped"(arg0: character, arg1: integer): boolean
 "canFocus"(source: $Component$FocusSource$$Type): boolean
 "onFocusGained"(arg0: $Component$FocusSource$$Type): void
 "onFocusLost"(): void
 "updateX"(arg0: integer): void
 "updateY"(arg0: integer): void
 "hasParent"(): boolean
 "fullSize"(): $Size
 "intersects"(other: $PositionedRectangle$$Type): boolean
 "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
 "interpolate"(arg0: $Animatable$$Type<(any)>, arg1: float): $Animatable<(any)>
 "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParentComponent$$Type = ($ParentComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParentComponent_ = $ParentComponent$$Type;
}}
declare module "io.wispforest.accessories.api.EquipCheck" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $EquipCheck {

 "isValid"(arg0: $ItemStack$$Type, arg1: boolean): boolean

(arg0: $ItemStack, arg1: boolean): boolean
}

export namespace $EquipCheck {
const probejs$$marker: never
}
export class $EquipCheck$$Static implements $EquipCheck {


 "isValid"(arg0: $ItemStack$$Type, arg1: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipCheck$$Type = ((arg0: $ItemStack, arg1: boolean) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipCheck_ = $EquipCheck$$Type;
}}
declare module "io.wispforest.owo.client.screens.ScreenInternals$LocalPacket" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$PacketFlow, $PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$CustomPacketPayload$Type, $CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder, $StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$StreamMemberEncoder, $StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$ServerboundCustomPayloadPacket, $ServerboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ClientboundCustomPayloadPacket, $ClientboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$ConnectionProtocol, $ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec, $CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$CustomPacketPayload$FallbackProvider, $CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ScreenInternals$LocalPacket extends $Record implements $CustomPacketPayload {
static readonly "ENDEC": $Endec<($ScreenInternals$LocalPacket)>
static readonly "ID": $CustomPacketPayload$Type<($ScreenInternals$LocalPacket)>

constructor(packetId: integer, payload: $FriendlyByteBuf$$Type)

public "payload"(): $FriendlyByteBuf
public "type"(): $CustomPacketPayload$Type<($CustomPacketPayload)>
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "packetId"(): integer
public static "createType"<T extends $CustomPacketPayload>(arg0: string): $CustomPacketPayload$Type<(T)>
public static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (any)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
public static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
public "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
public "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenInternals$LocalPacket$$Type = ({"packetId"?: integer, "payload"?: $FriendlyByteBuf$$Type}) | ([packetId?: integer, payload?: $FriendlyByteBuf$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenInternals$LocalPacket_ = $ScreenInternals$LocalPacket$$Type;
}}
declare module "io.wispforest.accessories.criteria.AccessoryChangedCriterion" {
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$AccessoryChangedCriterion$Conditions, $AccessoryChangedCriterion$Conditions$$Type} from "io.wispforest.accessories.criteria.AccessoryChangedCriterion$Conditions"
import {$SlotReference, $SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export class $AccessoryChangedCriterion extends $SimpleCriterionTrigger<($AccessoryChangedCriterion$Conditions)> {

constructor()

public "trigger"(player: $ServerPlayer$$Type, accessory: $ItemStack$$Type, reference: $SlotReference$$Type, cosmetic: boolean): void
public "codec"(): $Codec<($AccessoryChangedCriterion$Conditions)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryChangedCriterion$$Type = ($AccessoryChangedCriterion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoryChangedCriterion_ = $AccessoryChangedCriterion$$Type;
}}
declare module "io.wispforest.accessories.client.gui.AbstractButtonExtension" {
import {$ButtonEvents$AdjustRendering, $ButtonEvents$AdjustRendering$$Type} from "io.wispforest.accessories.client.gui.ButtonEvents$AdjustRendering"
import {$AbstractButton, $AbstractButton$$Type} from "net.minecraft.client.gui.components.AbstractButton"
import {$Event, $Event$$Type} from "net.fabricmc.fabric.api.event.Event"

export interface $AbstractButtonExtension {

 "getRenderingEvent"(): $Event<($ButtonEvents$AdjustRendering)>
 "adjustRendering"<B extends $AbstractButton>(event: $ButtonEvents$AdjustRendering$$Type): B

(): $Event$$Type<($ButtonEvents$AdjustRendering$$Type)>
get "renderingEvent"(): $Event<($ButtonEvents$AdjustRendering)>
}

export namespace $AbstractButtonExtension {
const probejs$$marker: never
}
export class $AbstractButtonExtension$$Static implements $AbstractButtonExtension {


 "getRenderingEvent"(): $Event<($ButtonEvents$AdjustRendering)>
 "adjustRendering"<B extends $AbstractButton>(event: $ButtonEvents$AdjustRendering$$Type): B
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractButtonExtension$$Type = (() => $Event$$Type<($ButtonEvents$AdjustRendering$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractButtonExtension_ = $AbstractButtonExtension$$Type;
}}
declare module "io.wispforest.accessories.api.SoundEventData" {
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SoundEventData extends $Record {

constructor(event: $Holder$$Type<($SoundEvent)>, volume: float, pitch: float)

public "volume"(): float
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "event"(): $Holder<($SoundEvent)>
public "pitch"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEventData$$Type = ({"volume"?: float, "event"?: $Holder$$Type<($SoundEvent)>, "pitch"?: float}) | ([volume?: float, event?: $Holder$$Type<($SoundEvent)>, pitch?: float]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundEventData_ = $SoundEventData$$Type;
}}
declare module "io.wispforest.accessories.mixin.client.LivingEntityRendererAccessor" {
import {$RenderLayer, $RenderLayer$$Type} from "net.minecraft.client.renderer.entity.layers.RenderLayer"
import {$List, $List$$Type} from "java.util.List"
import {$EntityModel, $EntityModel$$Type} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $LivingEntityRendererAccessor<T extends $LivingEntity, M extends $EntityModel<(T)>> {

 "getLayers"(): $List<($RenderLayer<(T), (M)>)>

(): $List$$Type<($RenderLayer$$Type<(T), (M)>)>
get "layers"(): $List<($RenderLayer<(T), (M)>)>
}

export namespace $LivingEntityRendererAccessor {
const probejs$$marker: never
}
export class $LivingEntityRendererAccessor$$Static<T extends $LivingEntity, M extends $EntityModel<(T)>> implements $LivingEntityRendererAccessor {


 "getLayers"(): $List<($RenderLayer<(T), (M)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityRendererAccessor$$Type<T, M> = (() => $List$$Type<($RenderLayer$$Type<(T), (M)>)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityRendererAccessor_<T, M> = $LivingEntityRendererAccessor$$Type<(T), (M)>;
}}
declare module "io.wispforest.owo.ui.event.MouseUp" {
import {$EventStream, $EventStream$$Type} from "io.wispforest.owo.util.EventStream"

export interface $MouseUp {

 "onMouseUp"(arg0: double, arg1: double, arg2: integer): boolean

(arg0: double, arg1: double, arg2: integer): boolean
}

export namespace $MouseUp {
function newStream(): $EventStream<($MouseUp)>
const probejs$$marker: never
}
export class $MouseUp$$Static implements $MouseUp {


static "newStream"(): $EventStream<($MouseUp)>
 "onMouseUp"(arg0: double, arg1: double, arg2: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseUp$$Type = ((arg0: double, arg1: double, arg2: integer) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseUp_ = $MouseUp$$Type;
}}
declare module "io.wispforest.accessories.mixin.client.ModelPartAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ModelPart$Cube, $ModelPart$Cube$$Type} from "net.minecraft.client.model.geom.ModelPart$Cube"
import {$List, $List$$Type} from "java.util.List"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export interface $ModelPartAccessor {

 "getChildren"(): $Map<(string), ($ModelPart)>
 "getCubes"(): $List<($ModelPart$Cube)>
get "children"(): $Map<(string), ($ModelPart)>
get "cubes"(): $List<($ModelPart$Cube)>
}

export namespace $ModelPartAccessor {
const probejs$$marker: never
}
export class $ModelPartAccessor$$Static implements $ModelPartAccessor {


 "getChildren"(): $Map<(string), ($ModelPart)>
 "getCubes"(): $List<($ModelPart$Cube)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartAccessor$$Type = ($ModelPartAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelPartAccessor_ = $ModelPartAccessor$$Type;
}}
declare module "io.wispforest.accessories.mixin.ItemStackAccessor" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$PatchedDataComponentMap, $PatchedDataComponentMap$$Type} from "net.minecraft.core.component.PatchedDataComponentMap"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $ItemStackAccessor {

 "accessories$addModifierTooltip"(arg0: $Consumer$$Type<($Component)>, arg1: $Player$$Type, arg2: $Holder$$Type<($Attribute)>, arg3: $AttributeModifier$$Type): void
 "accessories$components"(): $PatchedDataComponentMap
}

export namespace $ItemStackAccessor {
const probejs$$marker: never
}
export class $ItemStackAccessor$$Static implements $ItemStackAccessor {


 "accessories$addModifierTooltip"(arg0: $Consumer$$Type<($Component)>, arg1: $Player$$Type, arg2: $Holder$$Type<($Attribute)>, arg3: $AttributeModifier$$Type): void
 "accessories$components"(): $PatchedDataComponentMap
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackAccessor$$Type = ($ItemStackAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackAccessor_ = $ItemStackAccessor$$Type;
}}
declare module "io.wispforest.owo.ui.inject.GreedyInputComponent" {
import {$EventSource, $EventSource$$Type} from "io.wispforest.owo.util.EventSource"
import {$PositionedRectangle, $PositionedRectangle$$Type} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$CharTyped, $CharTyped$$Type} from "io.wispforest.owo.ui.event.CharTyped"
import {$OwoUIDrawContext, $OwoUIDrawContext$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext"
import {$Component as $Component$0, $Component$$Type as $Component$0$$Type} from "io.wispforest.owo.ui.core.Component"
import {$FocusGained, $FocusGained$$Type} from "io.wispforest.owo.ui.event.FocusGained"
import {$ParentComponent, $ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Positioning, $Positioning$$Type} from "io.wispforest.owo.ui.core.Positioning"
import {$KeyPress, $KeyPress$$Type} from "io.wispforest.owo.ui.event.KeyPress"
import {$AnimatableProperty, $AnimatableProperty$$Type} from "io.wispforest.owo.ui.core.AnimatableProperty"
import {$Insets, $Insets$$Type} from "io.wispforest.owo.ui.core.Insets"
import {$MouseScroll, $MouseScroll$$Type} from "io.wispforest.owo.ui.event.MouseScroll"
import {$MouseDown, $MouseDown$$Type} from "io.wispforest.owo.ui.event.MouseDown"
import {$CursorStyle, $CursorStyle$$Type} from "io.wispforest.owo.ui.core.CursorStyle"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Element, $Element$$Type} from "org.w3c.dom.Element"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UIModel, $UIModel$$Type} from "io.wispforest.owo.ui.parsing.UIModel"
import {$Component$FocusSource, $Component$FocusSource$$Type} from "io.wispforest.owo.ui.core.Component$FocusSource"
import {$MouseUp, $MouseUp$$Type} from "io.wispforest.owo.ui.event.MouseUp"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ClientTooltipComponent, $ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import {$Component$DismountReason, $Component$DismountReason$$Type} from "io.wispforest.owo.ui.core.Component$DismountReason"
import {$FocusLost, $FocusLost$$Type} from "io.wispforest.owo.ui.event.FocusLost"
import {$FocusHandler, $FocusHandler$$Type} from "io.wispforest.owo.ui.util.FocusHandler"
import {$MouseDrag, $MouseDrag$$Type} from "io.wispforest.owo.ui.event.MouseDrag"
import {$Sizing, $Sizing$$Type} from "io.wispforest.owo.ui.core.Sizing"
import {$MouseEnter, $MouseEnter$$Type} from "io.wispforest.owo.ui.event.MouseEnter"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$MouseLeave, $MouseLeave$$Type} from "io.wispforest.owo.ui.event.MouseLeave"
import {$Size, $Size$$Type} from "io.wispforest.owo.ui.core.Size"

export interface $GreedyInputComponent extends $Component$0 {

 "remove"(): void
 "parent"(): $ParentComponent
 "inflate"(arg0: $Size$$Type): void
 "update"(delta: float, mouseX: integer, mouseY: integer): void
 "x"(): integer
 "id"(): string
 "id"(arg0: string): $Component$0
 "root"(): $ParentComponent
 "mount"(arg0: $ParentComponent$$Type, arg1: integer, arg2: integer): void
 "y"(): integer
 "width"(): integer
 "configure"<C extends $Component$0>(arg0: $Consumer$$Type<(C)>): C
 "dismount"(arg0: $Component$DismountReason$$Type): void
 "tooltip"(tooltip: $Component$$Type): $Component$0
 "tooltip"(tooltip: $Collection$$Type<($Component$$Type)>): $Component$0
 "tooltip"(): $List<($ClientTooltipComponent)>
 "tooltip"(arg0: $List$$Type<($ClientTooltipComponent$$Type)>): $Component$0
 "charTyped"(): $EventSource<($CharTyped)>
 "height"(): integer
 "draw"(arg0: $OwoUIDrawContext$$Type, arg1: integer, arg2: integer, arg3: float, arg4: float): void
 "moveTo"(x: integer, y: integer): void
 "sizing"(sizing: $Sizing$$Type): $Component$0
 "sizing"(horizontalSizing: $Sizing$$Type, verticalSizing: $Sizing$$Type): $Component$0
 "zIndex"(arg0: integer): $Component$0
 "zIndex"(): integer
 "baseX"(): integer
 "baseY"(): integer
 "horizontalSizing"(arg0: $Sizing$$Type): $Component$0
 "horizontalSizing"(): $AnimatableProperty<($Sizing)>
 "shouldDrawTooltip"(mouseX: double, mouseY: double): boolean
 "parseProperties"(model: $UIModel$$Type, element: $Element$$Type, children: $Map$$Type<(string), ($Element$$Type)>): void
 "drawFocusHighlight"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "isInBoundingBox"(x: double, y: double): boolean
 "focusHandler"(): $FocusHandler
 "positioning"(): $AnimatableProperty<($Positioning)>
 "positioning"(arg0: $Positioning$$Type): $Component$0
 "margins"(): $AnimatableProperty<($Insets)>
 "margins"(arg0: $Insets$$Type): $Component$0
 "verticalSizing"(arg0: $Sizing$$Type): $Component$0
 "verticalSizing"(): $AnimatableProperty<($Sizing)>
 "mouseDown"(): $EventSource<($MouseDown)>
 "cursorStyle"(): $CursorStyle
 "cursorStyle"(arg0: $CursorStyle$$Type): $Component$0
 "onMouseDown"(arg0: double, arg1: double, arg2: integer): boolean
 "onMouseUp"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseUp"(): $EventSource<($MouseUp)>
 "mouseScroll"(): $EventSource<($MouseScroll)>
 "mouseDrag"(): $EventSource<($MouseDrag)>
 "keyPress"(): $EventSource<($KeyPress)>
 "focusGained"(): $EventSource<($FocusGained)>
 "focusLost"(): $EventSource<($FocusLost)>
 "mouseEnter"(): $EventSource<($MouseEnter)>
 "mouseLeave"(): $EventSource<($MouseLeave)>
 "onMouseScroll"(arg0: double, arg1: double, arg2: double): boolean
 "onMouseDrag"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer): boolean
 "onKeyPress"(arg0: integer, arg1: integer, arg2: integer): boolean
 "onCharTyped"(arg0: character, arg1: integer): boolean
 "canFocus"(source: $Component$FocusSource$$Type): boolean
 "onFocusGained"(arg0: $Component$FocusSource$$Type): void
 "onFocusLost"(): void
 "updateX"(arg0: integer): void
 "updateY"(arg0: integer): void
 "drawTooltip"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "hasParent"(): boolean
 "fullSize"(): $Size
 "intersects"(other: $PositionedRectangle$$Type): boolean
 "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
 "interpolate"(arg0: $Animatable$$Type<(any)>, arg1: float): $Animatable<(any)>
 "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
}

export namespace $GreedyInputComponent {
function of(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
function of(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
const probejs$$marker: never
}
export class $GreedyInputComponent$$Static implements $GreedyInputComponent {


 "remove"(): void
 "parent"(): $ParentComponent
 "inflate"(arg0: $Size$$Type): void
 "update"(delta: float, mouseX: integer, mouseY: integer): void
 "x"(): integer
 "id"(): string
 "id"(arg0: string): $Component$0
 "root"(): $ParentComponent
 "mount"(arg0: $ParentComponent$$Type, arg1: integer, arg2: integer): void
 "y"(): integer
 "width"(): integer
 "configure"<C extends $Component$0>(arg0: $Consumer$$Type<(C)>): C
 "dismount"(arg0: $Component$DismountReason$$Type): void
 "tooltip"(tooltip: $Component$$Type): $Component$0
 "tooltip"(tooltip: $Collection$$Type<($Component$$Type)>): $Component$0
 "tooltip"(): $List<($ClientTooltipComponent)>
 "tooltip"(arg0: $List$$Type<($ClientTooltipComponent$$Type)>): $Component$0
 "charTyped"(): $EventSource<($CharTyped)>
 "height"(): integer
 "draw"(arg0: $OwoUIDrawContext$$Type, arg1: integer, arg2: integer, arg3: float, arg4: float): void
 "moveTo"(x: integer, y: integer): void
 "sizing"(sizing: $Sizing$$Type): $Component$0
 "sizing"(horizontalSizing: $Sizing$$Type, verticalSizing: $Sizing$$Type): $Component$0
 "zIndex"(arg0: integer): $Component$0
 "zIndex"(): integer
 "baseX"(): integer
 "baseY"(): integer
 "horizontalSizing"(arg0: $Sizing$$Type): $Component$0
 "horizontalSizing"(): $AnimatableProperty<($Sizing)>
 "shouldDrawTooltip"(mouseX: double, mouseY: double): boolean
 "parseProperties"(model: $UIModel$$Type, element: $Element$$Type, children: $Map$$Type<(string), ($Element$$Type)>): void
 "drawFocusHighlight"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "isInBoundingBox"(x: double, y: double): boolean
 "focusHandler"(): $FocusHandler
 "positioning"(): $AnimatableProperty<($Positioning)>
 "positioning"(arg0: $Positioning$$Type): $Component$0
 "margins"(): $AnimatableProperty<($Insets)>
 "margins"(arg0: $Insets$$Type): $Component$0
 "verticalSizing"(arg0: $Sizing$$Type): $Component$0
 "verticalSizing"(): $AnimatableProperty<($Sizing)>
 "mouseDown"(): $EventSource<($MouseDown)>
 "cursorStyle"(): $CursorStyle
 "cursorStyle"(arg0: $CursorStyle$$Type): $Component$0
 "onMouseDown"(arg0: double, arg1: double, arg2: integer): boolean
 "onMouseUp"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseUp"(): $EventSource<($MouseUp)>
 "mouseScroll"(): $EventSource<($MouseScroll)>
 "mouseDrag"(): $EventSource<($MouseDrag)>
 "keyPress"(): $EventSource<($KeyPress)>
 "focusGained"(): $EventSource<($FocusGained)>
 "focusLost"(): $EventSource<($FocusLost)>
 "mouseEnter"(): $EventSource<($MouseEnter)>
 "mouseLeave"(): $EventSource<($MouseLeave)>
 "onMouseScroll"(arg0: double, arg1: double, arg2: double): boolean
 "onMouseDrag"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer): boolean
 "onKeyPress"(arg0: integer, arg1: integer, arg2: integer): boolean
 "onCharTyped"(arg0: character, arg1: integer): boolean
 "canFocus"(source: $Component$FocusSource$$Type): boolean
 "onFocusGained"(arg0: $Component$FocusSource$$Type): void
 "onFocusLost"(): void
 "updateX"(arg0: integer): void
 "updateY"(arg0: integer): void
 "drawTooltip"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "hasParent"(): boolean
 "fullSize"(): $Size
 "intersects"(other: $PositionedRectangle$$Type): boolean
 "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
 "interpolate"(arg0: $Animatable$$Type<(any)>, arg1: float): $Animatable<(any)>
 "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GreedyInputComponent$$Type = ($GreedyInputComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GreedyInputComponent_ = $GreedyInputComponent$$Type;
}}
declare module "io.wispforest.endec.impl.ReflectiveEndecBuilder" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $ReflectiveEndecBuilder {
static readonly "SHARED_INSTANCE": $ReflectiveEndecBuilder

constructor(arg0: $Consumer$$Type<($ReflectiveEndecBuilder)>)
constructor()

public "get"(arg0: $Type$$Type): $Endec<(any)>
public "get"<T>(arg0: $Class$$Type<(T)>): $Endec<(T)>
public "register"<T>(arg0: $Endec$$Type<(T)>, arg1: $Class$$Type<(T)>): $ReflectiveEndecBuilder
public "register"<T>(arg0: $Endec$$Type<(T)>, ...arg1: ($Class$$Type<(T)>)[]): $ReflectiveEndecBuilder
public "maybeGet"<T>(arg0: $Class$$Type<(T)>): $Optional<($Endec<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReflectiveEndecBuilder$$Type = ($ReflectiveEndecBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReflectiveEndecBuilder_ = $ReflectiveEndecBuilder$$Type;
}}
declare module "io.wispforest.owo.mixin.offline.AdvancementProgressAccessor" {
import {$AdvancementRequirements, $AdvancementRequirements$$Type} from "net.minecraft.advancements.AdvancementRequirements"

export interface $AdvancementProgressAccessor {

 "getRequirements"(): $AdvancementRequirements
 "setRequirements"(arg0: $AdvancementRequirements$$Type): void
get "requirements"(): $AdvancementRequirements
set "requirements"(value: $AdvancementRequirements$$Type)
}

export namespace $AdvancementProgressAccessor {
const probejs$$marker: never
}
export class $AdvancementProgressAccessor$$Static implements $AdvancementProgressAccessor {


 "getRequirements"(): $AdvancementRequirements
 "setRequirements"(arg0: $AdvancementRequirements$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementProgressAccessor$$Type = ($AdvancementProgressAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancementProgressAccessor_ = $AdvancementProgressAccessor$$Type;
}}
declare module "io.wispforest.endec.util.MapCarrier" {
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$SerializationContext, $SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"
import {$KeyedEndec, $KeyedEndec$$Type} from "io.wispforest.endec.impl.KeyedEndec"

export interface $MapCarrier {

 "get"<T>(arg0: $SerializationContext$$Type, arg1: $KeyedEndec$$Type<(T)>): T
 "get"<T>(arg0: $KeyedEndec$$Type<(T)>): T
 "put"<T>(arg0: $KeyedEndec$$Type<(T)>, arg1: T): void
 "put"<T>(arg0: $SerializationContext$$Type, arg1: $KeyedEndec$$Type<(T)>, arg2: T): void
 "delete"<T>(arg0: $KeyedEndec$$Type<(T)>): void
 "copy"<T>(arg0: $KeyedEndec$$Type<(T)>, arg1: $MapCarrier$$Type): void
 "copy"<T>(arg0: $SerializationContext$$Type, arg1: $KeyedEndec$$Type<(T)>, arg2: $MapCarrier$$Type): void
 "has"<T>(arg0: $KeyedEndec$$Type<(T)>): boolean
 "getWithErrors"<T>(arg0: $KeyedEndec$$Type<(T)>): T
 "getWithErrors"<T>(arg0: $SerializationContext$$Type, arg1: $KeyedEndec$$Type<(T)>): T
 "putIfNotNull"<T>(arg0: $SerializationContext$$Type, arg1: $KeyedEndec$$Type<(T)>, arg2: T): void
 "putIfNotNull"<T>(arg0: $KeyedEndec$$Type<(T)>, arg1: T): void
 "copyIfPresent"<T>(arg0: $SerializationContext$$Type, arg1: $KeyedEndec$$Type<(T)>, arg2: $MapCarrier$$Type): void
/**
 * 
 * @deprecated
 */
 "copyIfPresent"<T>(arg0: $KeyedEndec$$Type<(T)>, arg1: $SerializationContext$$Type, arg2: $MapCarrier$$Type): void
 "copyIfPresent"<T>(arg0: $KeyedEndec$$Type<(T)>, arg1: $MapCarrier$$Type): void
/**
 * 
 * @deprecated
 */
 "mutate"<T>(arg0: $KeyedEndec$$Type<(T)>, arg1: $SerializationContext$$Type, arg2: $Function$$Type<(T), (T)>): void
 "mutate"<T>(arg0: $SerializationContext$$Type, arg1: $KeyedEndec$$Type<(T)>, arg2: $Function$$Type<(T), (T)>): void
 "mutate"<T>(arg0: $KeyedEndec$$Type<(T)>, arg1: $Function$$Type<(T), (T)>): void
}

export namespace $MapCarrier {
const probejs$$marker: never
}
export class $MapCarrier$$Static implements $MapCarrier {


 "get"<T>(arg0: $SerializationContext$$Type, arg1: $KeyedEndec$$Type<(T)>): T
 "get"<T>(arg0: $KeyedEndec$$Type<(T)>): T
 "put"<T>(arg0: $KeyedEndec$$Type<(T)>, arg1: T): void
 "put"<T>(arg0: $SerializationContext$$Type, arg1: $KeyedEndec$$Type<(T)>, arg2: T): void
 "delete"<T>(arg0: $KeyedEndec$$Type<(T)>): void
 "copy"<T>(arg0: $KeyedEndec$$Type<(T)>, arg1: $MapCarrier$$Type): void
 "copy"<T>(arg0: $SerializationContext$$Type, arg1: $KeyedEndec$$Type<(T)>, arg2: $MapCarrier$$Type): void
 "has"<T>(arg0: $KeyedEndec$$Type<(T)>): boolean
 "getWithErrors"<T>(arg0: $KeyedEndec$$Type<(T)>): T
 "getWithErrors"<T>(arg0: $SerializationContext$$Type, arg1: $KeyedEndec$$Type<(T)>): T
 "putIfNotNull"<T>(arg0: $SerializationContext$$Type, arg1: $KeyedEndec$$Type<(T)>, arg2: T): void
 "putIfNotNull"<T>(arg0: $KeyedEndec$$Type<(T)>, arg1: T): void
 "copyIfPresent"<T>(arg0: $SerializationContext$$Type, arg1: $KeyedEndec$$Type<(T)>, arg2: $MapCarrier$$Type): void
/**
 * 
 * @deprecated
 */
 "copyIfPresent"<T>(arg0: $KeyedEndec$$Type<(T)>, arg1: $SerializationContext$$Type, arg2: $MapCarrier$$Type): void
 "copyIfPresent"<T>(arg0: $KeyedEndec$$Type<(T)>, arg1: $MapCarrier$$Type): void
/**
 * 
 * @deprecated
 */
 "mutate"<T>(arg0: $KeyedEndec$$Type<(T)>, arg1: $SerializationContext$$Type, arg2: $Function$$Type<(T), (T)>): void
 "mutate"<T>(arg0: $SerializationContext$$Type, arg1: $KeyedEndec$$Type<(T)>, arg2: $Function$$Type<(T), (T)>): void
 "mutate"<T>(arg0: $KeyedEndec$$Type<(T)>, arg1: $Function$$Type<(T), (T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapCarrier$$Type = ($MapCarrier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapCarrier_ = $MapCarrier$$Type;
}}
declare module "io.wispforest.endec.Deserializer$Sequence" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $Deserializer$Sequence<E> extends $Iterator<(E)> {

 "hasNext"(): boolean
 "next"(): E
 "estimatedSize"(): integer
 "remove"(): void
 "forEachRemaining"(arg0: $Consumer$$Type<(E)>): void
}

export namespace $Deserializer$Sequence {
const probejs$$marker: never
}
export class $Deserializer$Sequence$$Static<E> implements $Deserializer$Sequence {


 "hasNext"(): boolean
 "next"(): E
 "estimatedSize"(): integer
 "remove"(): void
 "forEachRemaining"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Deserializer$Sequence$$Type<E> = ($Deserializer$Sequence<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Deserializer$Sequence_<E> = $Deserializer$Sequence$$Type<(E)>;
}}
declare module "io.wispforest.accessories.api.slot.SlotEntryReference" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$SlotReference, $SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export class $SlotEntryReference extends $Record {

constructor(reference: $SlotReference$$Type, stack: $ItemStack$$Type)

public "stack"(): $ItemStack
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "reference"(): $SlotReference
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotEntryReference$$Type = ({"reference"?: $SlotReference$$Type, "stack"?: $ItemStack$$Type}) | ([reference?: $SlotReference$$Type, stack?: $ItemStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotEntryReference_ = $SlotEntryReference$$Type;
}}
declare module "io.wispforest.endec.Endec$Decoder" {
import {$SerializationContext, $SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"
import {$Deserializer, $Deserializer$$Type} from "io.wispforest.endec.Deserializer"

export interface $Endec$Decoder<T> {

 "decode"(arg0: $SerializationContext$$Type, arg1: $Deserializer$$Type<(any)>): T

(arg0: $SerializationContext, arg1: $Deserializer<(any)>): T
}

export namespace $Endec$Decoder {
const probejs$$marker: never
}
export class $Endec$Decoder$$Static<T> implements $Endec$Decoder {


 "decode"(arg0: $SerializationContext$$Type, arg1: $Deserializer$$Type<(any)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endec$Decoder$$Type<T> = ((arg0: $SerializationContext, arg1: $Deserializer<(any)>) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Endec$Decoder_<T> = $Endec$Decoder$$Type<(T)>;
}}
declare module "io.wispforest.accessories.mixin.client.GuiGraphicsAccessor" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"

export interface $GuiGraphicsAccessor {

 "callBlitSprite"(arg0: $TextureAtlasSprite$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void

(arg0: $TextureAtlasSprite, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
}

export namespace $GuiGraphicsAccessor {
const probejs$$marker: never
}
export class $GuiGraphicsAccessor$$Static implements $GuiGraphicsAccessor {


 "callBlitSprite"(arg0: $TextureAtlasSprite$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiGraphicsAccessor$$Type = ((arg0: $TextureAtlasSprite, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiGraphicsAccessor_ = $GuiGraphicsAccessor$$Type;
}}
declare module "io.wispforest.endec.util.Endable" {
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"

export interface $Endable extends $AutoCloseable {

 "end"(): void
 "close"(): void

(): void
}

export namespace $Endable {
const probejs$$marker: never
}
export class $Endable$$Static implements $Endable {


 "end"(): void
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endable$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Endable_ = $Endable$$Type;
}}
declare module "io.wispforest.owo.mixin.ScreenHandlerInvoker" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ScreenHandlerInvoker {

 "owo$insertItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: boolean): boolean

(arg0: $ItemStack, arg1: integer, arg2: integer, arg3: boolean): boolean
}

export namespace $ScreenHandlerInvoker {
const probejs$$marker: never
}
export class $ScreenHandlerInvoker$$Static implements $ScreenHandlerInvoker {


 "owo$insertItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenHandlerInvoker$$Type = ((arg0: $ItemStack, arg1: integer, arg2: integer, arg3: boolean) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenHandlerInvoker_ = $ScreenHandlerInvoker$$Type;
}}
declare module "io.wispforest.owo.ui.core.VerticalAlignment" {
import {$Element, $Element$$Type} from "org.w3c.dom.Element"
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $VerticalAlignment extends $Enum<($VerticalAlignment)> {
static readonly "CENTER": $VerticalAlignment
static readonly "TOP": $VerticalAlignment
static readonly "BOTTOM": $VerticalAlignment


public static "values"(): ($VerticalAlignment)[]
public static "valueOf"(name: string): $VerticalAlignment
public static "parse"(element: $Element$$Type): $VerticalAlignment
public "align"(componentWidth: integer, span: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VerticalAlignment$$Type = (("top") | ("center") | ("bottom"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VerticalAlignment_ = $VerticalAlignment$$Type;
}}
declare module "io.wispforest.accessories.mixin.CraftingMenuAccessor" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingRecipe, $CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$CraftingContainer, $CraftingContainer$$Type} from "net.minecraft.world.inventory.CraftingContainer"
import {$ResultContainer, $ResultContainer$$Type} from "net.minecraft.world.inventory.ResultContainer"

export interface $CraftingMenuAccessor {

}

export namespace $CraftingMenuAccessor {
function accessories$slotChangedCraftingGrid(abstractContainerMenu: $AbstractContainerMenu$$Type, level: $Level$$Type, player: $Player$$Type, craftingContainer: $CraftingContainer$$Type, resultContainer: $ResultContainer$$Type, recipeHolder: $RecipeHolder$$Type<($CraftingRecipe$$Type)>): void
const probejs$$marker: never
}
export class $CraftingMenuAccessor$$Static implements $CraftingMenuAccessor {


static "accessories$slotChangedCraftingGrid"(abstractContainerMenu: $AbstractContainerMenu$$Type, level: $Level$$Type, player: $Player$$Type, craftingContainer: $CraftingContainer$$Type, resultContainer: $ResultContainer$$Type, recipeHolder: $RecipeHolder$$Type<($CraftingRecipe$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingMenuAccessor$$Type = ($CraftingMenuAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingMenuAccessor_ = $CraftingMenuAccessor$$Type;
}}
declare module "io.wispforest.owo.util.EventSource$Subscription" {
import {$EventSource, $EventSource$$Type} from "io.wispforest.owo.util.EventSource"

export class $EventSource$Subscription {

constructor(this$0: $EventSource$$Type<(any)>, subscriber: T)

public "cancel"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventSource$Subscription$$Type = ($EventSource$Subscription);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventSource$Subscription_ = $EventSource$Subscription$$Type;
}}
declare module "io.wispforest.endec.SerializationAttribute$Marker" {
import {$SerializationAttribute, $SerializationAttribute$$Type} from "io.wispforest.endec.SerializationAttribute"
import {$SerializationAttribute$Instance, $SerializationAttribute$Instance$$Type} from "io.wispforest.endec.SerializationAttribute$Instance"

export class $SerializationAttribute$Marker extends $SerializationAttribute implements $SerializationAttribute$Instance {
readonly "name": string


public "value"(): any
public "attribute"(): $SerializationAttribute
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializationAttribute$Marker$$Type = ($SerializationAttribute$Marker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializationAttribute$Marker_ = $SerializationAttribute$Marker$$Type;
}}
declare module "io.wispforest.owo.client.screens.ScreenInternals$SyncPropertiesPacket" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$PacketFlow, $PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$CustomPacketPayload$Type, $CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder, $StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$StreamMemberEncoder, $StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$ServerboundCustomPayloadPacket, $ServerboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ClientboundCustomPayloadPacket, $ClientboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$ConnectionProtocol, $ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec, $CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$CustomPacketPayload$FallbackProvider, $CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ScreenInternals$SyncPropertiesPacket extends $Record implements $CustomPacketPayload {
static readonly "ENDEC": $Endec<($ScreenInternals$SyncPropertiesPacket)>
static readonly "ID": $CustomPacketPayload$Type<($ScreenInternals$SyncPropertiesPacket)>

constructor(payload: $FriendlyByteBuf$$Type)

public "payload"(): $FriendlyByteBuf
public "type"(): $CustomPacketPayload$Type<($CustomPacketPayload)>
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "createType"<T extends $CustomPacketPayload>(arg0: string): $CustomPacketPayload$Type<(T)>
public static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (any)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
public static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
public "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
public "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenInternals$SyncPropertiesPacket$$Type = ({"payload"?: $FriendlyByteBuf$$Type}) | ([payload?: $FriendlyByteBuf$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenInternals$SyncPropertiesPacket_ = $ScreenInternals$SyncPropertiesPacket$$Type;
}}
declare module "io.wispforest.accessories.impl.caching.AccessoriesHolderLookupCache" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentLookupCache, $EquipmentLookupCache$$Type} from "io.wispforest.accessories.impl.caching.EquipmentLookupCache"
import {$AccessoriesHolderImpl, $AccessoriesHolderImpl$$Type} from "io.wispforest.accessories.impl.AccessoriesHolderImpl"
import {$ItemStackBasedPredicate, $ItemStackBasedPredicate$$Type} from "io.wispforest.accessories.api.caching.ItemStackBasedPredicate"
import {$List, $List$$Type} from "java.util.List"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$EquipmentChecking, $EquipmentChecking$$Type} from "io.wispforest.accessories.api.EquipmentChecking"
import {$SlotEntryReference, $SlotEntryReference$$Type} from "io.wispforest.accessories.api.slot.SlotEntryReference"

export class $AccessoriesHolderLookupCache extends $EquipmentLookupCache {

constructor(holder: $AccessoriesHolderImpl$$Type)

public "clearCache"(): void
public "isEquipped"(predicate: $ItemStackBasedPredicate$$Type): boolean
public "getEquipped"(predicate: $ItemStackBasedPredicate$$Type): $List<($SlotEntryReference)>
public "invalidateLookupData"(key: string, stack: $ItemStack$$Type, types: $List$$Type<($DataComponentType$$Type<(any)>)>): void
public "getAllEquipped"(): $List<($SlotEntryReference)>
public "clearContainerCache"(key: string): void
public "firstEquipped"(predicate: $ItemStackBasedPredicate$$Type, check: $EquipmentChecking$$Type): $SlotEntryReference
get "allEquipped"(): $List<($SlotEntryReference)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesHolderLookupCache$$Type = ($AccessoriesHolderLookupCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoriesHolderLookupCache_ = $AccessoriesHolderLookupCache$$Type;
}}
declare module "io.wispforest.endec.Deserializer" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$Deserializer$Struct, $Deserializer$Struct$$Type} from "io.wispforest.endec.Deserializer$Struct"
import {$Deserializer$Map, $Deserializer$Map$$Type} from "io.wispforest.endec.Deserializer$Map"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Deserializer$Sequence, $Deserializer$Sequence$$Type} from "io.wispforest.endec.Deserializer$Sequence"
import {$SerializationContext, $SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"

export interface $Deserializer<T> {

 "tryRead"<V>(arg0: $Function$$Type<($Deserializer<(T)>), (V)>): V
 "map"<V>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(V)>): $Deserializer$Map<(V)>
 "readInt"(arg0: $SerializationContext$$Type): integer
 "readBytes"(arg0: $SerializationContext$$Type): (byte)[]
 "readFloat"(arg0: $SerializationContext$$Type): float
 "sequence"<E>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(E)>): $Deserializer$Sequence<(E)>
 "readBoolean"(arg0: $SerializationContext$$Type): boolean
 "readByte"(arg0: $SerializationContext$$Type): byte
 "readShort"(arg0: $SerializationContext$$Type): short
 "readLong"(arg0: $SerializationContext$$Type): long
 "readDouble"(arg0: $SerializationContext$$Type): double
 "readString"(arg0: $SerializationContext$$Type): string
 "readVarInt"(arg0: $SerializationContext$$Type): integer
 "readOptional"<V>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(V)>): $Optional<(V)>
 "readVarLong"(arg0: $SerializationContext$$Type): long
 "struct"(): $Deserializer$Struct
 "setupContext"(arg0: $SerializationContext$$Type): $SerializationContext
set "upContext"(value: $SerializationContext$$Type)
}

export namespace $Deserializer {
const probejs$$marker: never
}
export class $Deserializer$$Static<T> implements $Deserializer {


 "tryRead"<V>(arg0: $Function$$Type<($Deserializer<(T)>), (V)>): V
 "map"<V>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(V)>): $Deserializer$Map<(V)>
 "readInt"(arg0: $SerializationContext$$Type): integer
 "readBytes"(arg0: $SerializationContext$$Type): (byte)[]
 "readFloat"(arg0: $SerializationContext$$Type): float
 "sequence"<E>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(E)>): $Deserializer$Sequence<(E)>
 "readBoolean"(arg0: $SerializationContext$$Type): boolean
 "readByte"(arg0: $SerializationContext$$Type): byte
 "readShort"(arg0: $SerializationContext$$Type): short
 "readLong"(arg0: $SerializationContext$$Type): long
 "readDouble"(arg0: $SerializationContext$$Type): double
 "readString"(arg0: $SerializationContext$$Type): string
 "readVarInt"(arg0: $SerializationContext$$Type): integer
 "readOptional"<V>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(V)>): $Optional<(V)>
 "readVarLong"(arg0: $SerializationContext$$Type): long
 "struct"(): $Deserializer$Struct
 "setupContext"(arg0: $SerializationContext$$Type): $SerializationContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Deserializer$$Type<T> = ($Deserializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Deserializer_<T> = $Deserializer$$Type<(T)>;
}}
declare module "io.wispforest.owo.mixin.RegistryOpsAccessor" {
import {$RegistryOps$RegistryInfoLookup, $RegistryOps$RegistryInfoLookup$$Type} from "net.minecraft.resources.RegistryOps$RegistryInfoLookup"

export interface $RegistryOpsAccessor {

 "owo$infoGetter"(): $RegistryOps$RegistryInfoLookup

(): $RegistryOps$RegistryInfoLookup$$Type
}

export namespace $RegistryOpsAccessor {
const probejs$$marker: never
}
export class $RegistryOpsAccessor$$Static implements $RegistryOpsAccessor {


 "owo$infoGetter"(): $RegistryOps$RegistryInfoLookup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryOpsAccessor$$Type = (() => $RegistryOps$RegistryInfoLookup$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryOpsAccessor_ = $RegistryOpsAccessor$$Type;
}}
declare module "io.wispforest.owo.itemgroup.gui.ItemGroupTab$ContentSupplier" {
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"

export interface $ItemGroupTab$ContentSupplier {

 "addItems"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void

(arg0: $CreativeModeTab$ItemDisplayParameters, arg1: $CreativeModeTab$Output): void
}

export namespace $ItemGroupTab$ContentSupplier {
const probejs$$marker: never
}
export class $ItemGroupTab$ContentSupplier$$Static implements $ItemGroupTab$ContentSupplier {


 "addItems"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGroupTab$ContentSupplier$$Type = ((arg0: $CreativeModeTab$ItemDisplayParameters, arg1: $CreativeModeTab$Output) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemGroupTab$ContentSupplier_ = $ItemGroupTab$ContentSupplier$$Type;
}}
declare module "io.wispforest.owo.util.EventSource" {
import {$EventSource$Subscription, $EventSource$Subscription$$Type} from "io.wispforest.owo.util.EventSource$Subscription"

export class $EventSource<T> {


public "subscribe"(subscriber: T): $EventSource$Subscription<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventSource$$Type<T> = ($EventSource<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventSource_<T> = $EventSource$$Type<(T)>;
}}
declare module "io.wispforest.accessories.pond.AccessoriesAPIAccess" {
import {$AccessoriesCapability, $AccessoriesCapability$$Type} from "io.wispforest.accessories.api.AccessoriesCapability"
import {$AccessoriesHolder, $AccessoriesHolder$$Type} from "io.wispforest.accessories.api.AccessoriesHolder"

export interface $AccessoriesAPIAccess {

 "accessoriesCapability"(): $AccessoriesCapability
 "accessoriesHolder"(): $AccessoriesHolder
}

export namespace $AccessoriesAPIAccess {
const probejs$$marker: never
}
export class $AccessoriesAPIAccess$$Static implements $AccessoriesAPIAccess {


 "accessoriesCapability"(): $AccessoriesCapability
 "accessoriesHolder"(): $AccessoriesHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesAPIAccess$$Type = ($AccessoriesAPIAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoriesAPIAccess_ = $AccessoriesAPIAccess$$Type;
}}
declare module "io.wispforest.owo.mixin.ui.access.ButtonWidgetAccessor" {
import {$Button$OnPress, $Button$OnPress$$Type} from "net.minecraft.client.gui.components.Button$OnPress"

export interface $ButtonWidgetAccessor {

 "owo$setOnPress"(arg0: $Button$OnPress$$Type): void

(arg0: $Button$OnPress): void
}

export namespace $ButtonWidgetAccessor {
const probejs$$marker: never
}
export class $ButtonWidgetAccessor$$Static implements $ButtonWidgetAccessor {


 "owo$setOnPress"(arg0: $Button$OnPress$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ButtonWidgetAccessor$$Type = ((arg0: $Button$OnPress) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ButtonWidgetAccessor_ = $ButtonWidgetAccessor$$Type;
}}
declare module "io.wispforest.owo.ui.core.Insets" {
import {$Element, $Element$$Type} from "org.w3c.dom.Element"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Insets extends $Record implements $Animatable<($Insets)> {

/**
 * 
 * @deprecated
 */
constructor(top: integer, bottom: integer, left: integer, right: integer)

public "bottom"(): integer
public static "bottom"(bottom: integer): $Insets
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "add"(top: integer, bottom: integer, left: integer, right: integer): $Insets
public static "of"(inset: integer): $Insets
public static "of"(top: integer, bottom: integer, left: integer, right: integer): $Insets
public static "parse"(insetsElement: $Element$$Type): $Insets
public "top"(): integer
public static "top"(top: integer): $Insets
public "left"(): integer
public static "left"(left: integer): $Insets
public "right"(): integer
public static "right"(right: integer): $Insets
public "horizontal"(): integer
public static "horizontal"(inset: integer): $Insets
public "vertical"(): integer
public static "vertical"(inset: integer): $Insets
public "inverted"(): $Insets
public "interpolate"(next: $Insets$$Type, delta: float): $Insets
public "interpolate"(arg0: $Animatable$$Type<(any)>, arg1: float): $Animatable<(any)>
public static "both"(horizontal: integer, vertical: integer): $Insets
public static "none"(): $Insets
public "withTop"(top: integer): $Insets
public "withRight"(right: integer): $Insets
public "withLeft"(left: integer): $Insets
public "withBottom"(bottom: integer): $Insets
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Insets$$Type = ({"top"?: integer, "left"?: integer, "bottom"?: integer, "right"?: integer}) | ([top?: integer, left?: integer, bottom?: integer, right?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Insets_ = $Insets$$Type;
}}
declare module "io.wispforest.owo.mixin.registry.ReferenceAccessor" {
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export interface $ReferenceAccessor<T> {

 "owo$setValue"(arg0: T): void
 "owo$setRegistryKey"(arg0: $ResourceKey$$Type<(T)>): void
}

export namespace $ReferenceAccessor {
const probejs$$marker: never
}
export class $ReferenceAccessor$$Static<T> implements $ReferenceAccessor {


 "owo$setValue"(arg0: T): void
 "owo$setRegistryKey"(arg0: $ResourceKey$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReferenceAccessor$$Type<T> = ($ReferenceAccessor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReferenceAccessor_<T> = $ReferenceAccessor$$Type<(T)>;
}}
declare module "io.wispforest.owo.ui.util.FocusHandler" {
import {$ParentComponent, $ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Component, $Component$$Type} from "io.wispforest.owo.ui.core.Component"
import {$Component$FocusSource, $Component$FocusSource$$Type} from "io.wispforest.owo.ui.core.Component$FocusSource"

export class $FocusHandler {

constructor(root: $ParentComponent$$Type)

public "focused"(): $Component
public "cycle"(forwards: boolean): void
public "focus"(component: $Component$$Type, source: $Component$FocusSource$$Type): void
public "updateClickFocus"(mouseX: double, mouseY: double): void
public "lastFocusSource"(): $Component$FocusSource
public "moveFocus"(keyCode: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocusHandler$$Type = ($FocusHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FocusHandler_ = $FocusHandler$$Type;
}}
declare module "io.wispforest.owo.ui.event.MouseDrag" {
import {$EventStream, $EventStream$$Type} from "io.wispforest.owo.util.EventStream"

export interface $MouseDrag {

 "onMouseDrag"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer): boolean

(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer): boolean
}

export namespace $MouseDrag {
function newStream(): $EventStream<($MouseDrag)>
const probejs$$marker: never
}
export class $MouseDrag$$Static implements $MouseDrag {


static "newStream"(): $EventStream<($MouseDrag)>
 "onMouseDrag"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseDrag$$Type = ((arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseDrag_ = $MouseDrag$$Type;
}}
declare module "io.wispforest.endec.Serializer$Map" {
import {$Endable, $Endable$$Type} from "io.wispforest.endec.util.Endable"

export interface $Serializer$Map<V> extends $Endable {

 "entry"(arg0: string, arg1: V): void
 "end"(): void
 "close"(): void
}

export namespace $Serializer$Map {
const probejs$$marker: never
}
export class $Serializer$Map$$Static<V> implements $Serializer$Map {


 "entry"(arg0: string, arg1: V): void
 "end"(): void
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializer$Map$$Type<V> = ($Serializer$Map<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Serializer$Map_<V> = $Serializer$Map$$Type<(V)>;
}}
declare module "io.wispforest.accessories.api.AccessoriesCapability" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Pair, $Pair$$Type} from "it.unimi.dsi.fastutil.Pair"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$List, $List$$Type} from "java.util.List"
import {$AccessoriesContainer, $AccessoriesContainer$$Type} from "io.wispforest.accessories.api.AccessoriesContainer"
import {$SlotTypeReference, $SlotTypeReference$$Type} from "io.wispforest.accessories.api.slot.SlotTypeReference"
import {$EquipmentChecking, $EquipmentChecking$$Type} from "io.wispforest.accessories.api.EquipmentChecking"
import {$EquipAction, $EquipAction$$Type} from "io.wispforest.accessories.api.EquipAction"
import {$AccessoriesHolder, $AccessoriesHolder$$Type} from "io.wispforest.accessories.api.AccessoriesHolder"
import {$TriFunction, $TriFunction$$Type} from "org.apache.commons.lang3.function.TriFunction"
import {$SlotReference, $SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"
import {$ItemStackBasedPredicate, $ItemStackBasedPredicate$$Type} from "io.wispforest.accessories.api.caching.ItemStackBasedPredicate"
import {$EquipCheck, $EquipCheck$$Type} from "io.wispforest.accessories.api.EquipCheck"
import {$SlotType, $SlotType$$Type} from "io.wispforest.accessories.api.slot.SlotType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Accessory, $Accessory$$Type} from "io.wispforest.accessories.api.Accessory"
import {$SlotEntryReference, $SlotEntryReference$$Type} from "io.wispforest.accessories.api.slot.SlotEntryReference"

export interface $AccessoriesCapability {

 "getContainer"(slotType: $SlotType$$Type): $AccessoriesContainer
 "getContainer"(reference: $SlotTypeReference$$Type): $AccessoriesContainer
 "entity"(): $LivingEntity
 "reset"(arg0: boolean): void
 "attemptToEquipAccessory"(stack: $ItemStack$$Type, allowSwapping: boolean): $Pair<($SlotReference), ($Optional<($ItemStack)>)>
 "attemptToEquipAccessory"(stack: $ItemStack$$Type): $SlotReference
 "addTransientSlotModifiers"(arg0: $Multimap$$Type<(string), ($AttributeModifier$$Type)>): void
 "addPersistentSlotModifiers"(arg0: $Multimap$$Type<(string), ($AttributeModifier$$Type)>): void
 "clearCachedSlotModifiers"(): void
 "getHolder"(): $AccessoriesHolder
 "isEquipped"(predicate: $Predicate$$Type<($ItemStack)>, check: $EquipmentChecking$$Type): boolean
 "isEquipped"(predicate: $Predicate$$Type<($ItemStack)>): boolean
 "isEquipped"(predicate: $ItemStackBasedPredicate$$Type, check: $EquipmentChecking$$Type): boolean
 "isEquipped"(item: $Item$$Type, check: $EquipmentChecking$$Type): boolean
 "isEquipped"(item: $Item$$Type): boolean
 "getEquipped"(predicate: $Predicate$$Type<($ItemStack)>): $List<($SlotEntryReference)>
 "getEquipped"(predicate: $ItemStackBasedPredicate$$Type): $List<($SlotEntryReference)>
 "getEquipped"(item: $Item$$Type): $List<($SlotEntryReference)>
 "updateContainers"(): void
 "canEquipAccessory"(arg0: $ItemStack$$Type, arg1: boolean, arg2: $EquipCheck$$Type): $Pair<($SlotReference), ($EquipAction)>
 "canEquipAccessory"(stack: $ItemStack$$Type, allowSwapping: boolean): $Pair<($SlotReference), ($EquipAction)>
 "getFirstEquipped"(item: $Item$$Type, check: $EquipmentChecking$$Type): $SlotEntryReference
 "getFirstEquipped"(item: $Item$$Type): $SlotEntryReference
 "getFirstEquipped"(arg0: $ItemStackBasedPredicate$$Type, arg1: $EquipmentChecking$$Type): $SlotEntryReference
 "getFirstEquipped"(predicate: $Predicate$$Type<($ItemStack)>): $SlotEntryReference
 "getFirstEquipped"(predicate: $Predicate$$Type<($ItemStack)>, check: $EquipmentChecking$$Type): $SlotEntryReference
/**
 * 
 * @deprecated
 */
 "isAnotherEquipped"(slotReference: $SlotReference$$Type, item: $Item$$Type): boolean
 "isAnotherEquipped"(stack: $ItemStack$$Type, slotReference: $SlotReference$$Type, predicate: $Predicate$$Type<($ItemStack)>): boolean
 "isAnotherEquipped"(stack: $ItemStack$$Type, slotReference: $SlotReference$$Type, item: $Item$$Type): boolean
 "isAnotherEquipped"(stack: $ItemStack$$Type, slotReference: $SlotReference$$Type, predicate: $ItemStackBasedPredicate$$Type): boolean
/**
 * 
 * @deprecated
 */
 "isAnotherEquipped"(slotReference: $SlotReference$$Type, predicate: $Predicate$$Type<($ItemStack)>): boolean
 "removeSlotModifiers"(arg0: $Multimap$$Type<(string), ($AttributeModifier$$Type)>): void
 "getSlotModifiers"(): $Multimap<(string), ($AttributeModifier)>
 "clearSlotModifiers"(): void
 "getContainers"(): $Map<(string), ($AccessoriesContainer)>
 "getAllEquipped"(arg0: boolean): $List<($SlotEntryReference)>
 "getAllEquipped"(): $List<($SlotEntryReference)>
/**
 * 
 * @deprecated
 */
 "equipAccessory"(stack: $ItemStack$$Type, allowSwapping: boolean, additionalCheck: $TriFunction$$Type<($Accessory), ($ItemStack), ($SlotReference), (boolean)>): $Pair<($SlotReference), ($List<($ItemStack)>)>
/**
 * 
 * @deprecated
 */
 "equipAccessory"(stack: $ItemStack$$Type, allowSwapping: boolean): $Pair<($SlotReference), ($List<($ItemStack)>)>
/**
 * 
 * @deprecated
 */
 "equipAccessory"(stack: $ItemStack$$Type): $Pair<($SlotReference), ($List<($ItemStack)>)>
get "holder"(): $AccessoriesHolder
get "slotModifiers"(): $Multimap<(string), ($AttributeModifier)>
get "containers"(): $Map<(string), ($AccessoriesContainer)>
get "allEquipped"(): $List<($SlotEntryReference)>
}

export namespace $AccessoriesCapability {
function get(livingEntity: $LivingEntity$$Type): $AccessoriesCapability
function getOptionally(livingEntity: $LivingEntity$$Type): $Optional<($AccessoriesCapability)>
const probejs$$marker: never
}
export class $AccessoriesCapability$$Static implements $AccessoriesCapability {


 "getContainer"(slotType: $SlotType$$Type): $AccessoriesContainer
 "getContainer"(reference: $SlotTypeReference$$Type): $AccessoriesContainer
 "entity"(): $LivingEntity
 "reset"(arg0: boolean): void
static "get"(livingEntity: $LivingEntity$$Type): $AccessoriesCapability
 "attemptToEquipAccessory"(stack: $ItemStack$$Type, allowSwapping: boolean): $Pair<($SlotReference), ($Optional<($ItemStack)>)>
 "attemptToEquipAccessory"(stack: $ItemStack$$Type): $SlotReference
 "addTransientSlotModifiers"(arg0: $Multimap$$Type<(string), ($AttributeModifier$$Type)>): void
 "addPersistentSlotModifiers"(arg0: $Multimap$$Type<(string), ($AttributeModifier$$Type)>): void
 "clearCachedSlotModifiers"(): void
 "getHolder"(): $AccessoriesHolder
 "isEquipped"(predicate: $Predicate$$Type<($ItemStack)>, check: $EquipmentChecking$$Type): boolean
 "isEquipped"(predicate: $Predicate$$Type<($ItemStack)>): boolean
 "isEquipped"(predicate: $ItemStackBasedPredicate$$Type, check: $EquipmentChecking$$Type): boolean
 "isEquipped"(item: $Item$$Type, check: $EquipmentChecking$$Type): boolean
 "isEquipped"(item: $Item$$Type): boolean
 "getEquipped"(predicate: $Predicate$$Type<($ItemStack)>): $List<($SlotEntryReference)>
 "getEquipped"(predicate: $ItemStackBasedPredicate$$Type): $List<($SlotEntryReference)>
 "getEquipped"(item: $Item$$Type): $List<($SlotEntryReference)>
 "updateContainers"(): void
 "canEquipAccessory"(arg0: $ItemStack$$Type, arg1: boolean, arg2: $EquipCheck$$Type): $Pair<($SlotReference), ($EquipAction)>
 "canEquipAccessory"(stack: $ItemStack$$Type, allowSwapping: boolean): $Pair<($SlotReference), ($EquipAction)>
 "getFirstEquipped"(item: $Item$$Type, check: $EquipmentChecking$$Type): $SlotEntryReference
 "getFirstEquipped"(item: $Item$$Type): $SlotEntryReference
 "getFirstEquipped"(arg0: $ItemStackBasedPredicate$$Type, arg1: $EquipmentChecking$$Type): $SlotEntryReference
 "getFirstEquipped"(predicate: $Predicate$$Type<($ItemStack)>): $SlotEntryReference
 "getFirstEquipped"(predicate: $Predicate$$Type<($ItemStack)>, check: $EquipmentChecking$$Type): $SlotEntryReference
/**
 * 
 * @deprecated
 */
 "isAnotherEquipped"(slotReference: $SlotReference$$Type, item: $Item$$Type): boolean
 "isAnotherEquipped"(stack: $ItemStack$$Type, slotReference: $SlotReference$$Type, predicate: $Predicate$$Type<($ItemStack)>): boolean
 "isAnotherEquipped"(stack: $ItemStack$$Type, slotReference: $SlotReference$$Type, item: $Item$$Type): boolean
 "isAnotherEquipped"(stack: $ItemStack$$Type, slotReference: $SlotReference$$Type, predicate: $ItemStackBasedPredicate$$Type): boolean
/**
 * 
 * @deprecated
 */
 "isAnotherEquipped"(slotReference: $SlotReference$$Type, predicate: $Predicate$$Type<($ItemStack)>): boolean
 "removeSlotModifiers"(arg0: $Multimap$$Type<(string), ($AttributeModifier$$Type)>): void
 "getSlotModifiers"(): $Multimap<(string), ($AttributeModifier)>
 "clearSlotModifiers"(): void
static "getOptionally"(livingEntity: $LivingEntity$$Type): $Optional<($AccessoriesCapability)>
 "getContainers"(): $Map<(string), ($AccessoriesContainer)>
 "getAllEquipped"(arg0: boolean): $List<($SlotEntryReference)>
 "getAllEquipped"(): $List<($SlotEntryReference)>
/**
 * 
 * @deprecated
 */
 "equipAccessory"(stack: $ItemStack$$Type, allowSwapping: boolean, additionalCheck: $TriFunction$$Type<($Accessory), ($ItemStack), ($SlotReference), (boolean)>): $Pair<($SlotReference), ($List<($ItemStack)>)>
/**
 * 
 * @deprecated
 */
 "equipAccessory"(stack: $ItemStack$$Type, allowSwapping: boolean): $Pair<($SlotReference), ($List<($ItemStack)>)>
/**
 * 
 * @deprecated
 */
 "equipAccessory"(stack: $ItemStack$$Type): $Pair<($SlotReference), ($List<($ItemStack)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesCapability$$Type = ($AccessoriesCapability);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoriesCapability_ = $AccessoriesCapability$$Type;
}}
declare module "io.wispforest.owo.util.Observable" {
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $Observable<T> {


public "get"(): T
public static "of"<T>(initial: T): $Observable<(T)>
public "set"(newValue: T): void
public "observe"(observer: $Consumer$$Type<(T)>): void
public static "observeAll"(observer: $Runnable$$Type, ...observables: ($Observable$$Type<(any)>)[]): void
public static "observeAll"<T>(observer: $Consumer$$Type<(T)>, ...observables: ($Observable$$Type<(T)>)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Observable$$Type<T> = ($Observable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Observable_<T> = $Observable$$Type<(T)>;
}}
declare module "io.wispforest.accessories.api.caching.ItemStackBasedPredicate" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"

export class $ItemStackBasedPredicate implements $Predicate<($ItemStack)> {


public "name"(): string
public "equals"(other: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $ItemStack$$Type): boolean
public "test"(arg0: any): boolean
public static "ofItem"(name: string, item: $Item$$Type): $ItemStackBasedPredicate
public static "ofItem"(item: $Item$$Type): $ItemStackBasedPredicate
public static "ofPredicate"(name: string, predicate: $Predicate$$Type<($ItemStack)>): $ItemStackBasedPredicate
public static "ofPredicate"(predicate: $Predicate$$Type<($ItemStack)>): $ItemStackBasedPredicate
public static "ofComponents"(...dataComponentTypes: ($DataComponentType$$Type<(any)>)[]): $ItemStackBasedPredicate
public static "ofComponents"(name: string, ...dataComponentTypes: ($DataComponentType$$Type<(any)>)[]): $ItemStackBasedPredicate
public "extraStringData"(): string
public "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackBasedPredicate$$Type = ($ItemStackBasedPredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackBasedPredicate_ = $ItemStackBasedPredicate$$Type;
}}
declare module "io.wispforest.owo.ui.util.MatrixStackTransformer" {
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Quaternionf, $Quaternionf$$Type} from "org.joml.Quaternionf"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"

export interface $MatrixStackTransformer {

 "scale"(x: float, y: float, z: float): $MatrixStackTransformer
 "multiply"(quaternion: $Quaternionf$$Type): $MatrixStackTransformer
 "multiply"(quaternion: $Quaternionf$$Type, originX: float, originY: float, originZ: float): $MatrixStackTransformer
 "push"(): $MatrixStackTransformer
 "pop"(): $MatrixStackTransformer
 "translate"(x: double, y: double, z: double): $MatrixStackTransformer
 "translate"(x: float, y: float, z: float): $MatrixStackTransformer
 "getMatrixStack"(): $PoseStack
 "multiplyPositionMatrix"(matrix: $Matrix4f$$Type): $MatrixStackTransformer
get "matrixStack"(): $PoseStack
}

export namespace $MatrixStackTransformer {
const probejs$$marker: never
}
export class $MatrixStackTransformer$$Static implements $MatrixStackTransformer {


 "scale"(x: float, y: float, z: float): $MatrixStackTransformer
 "multiply"(quaternion: $Quaternionf$$Type): $MatrixStackTransformer
 "multiply"(quaternion: $Quaternionf$$Type, originX: float, originY: float, originZ: float): $MatrixStackTransformer
 "push"(): $MatrixStackTransformer
 "pop"(): $MatrixStackTransformer
 "translate"(x: double, y: double, z: double): $MatrixStackTransformer
 "translate"(x: float, y: float, z: float): $MatrixStackTransformer
 "getMatrixStack"(): $PoseStack
 "multiplyPositionMatrix"(matrix: $Matrix4f$$Type): $MatrixStackTransformer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatrixStackTransformer$$Type = ($MatrixStackTransformer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MatrixStackTransformer_ = $MatrixStackTransformer$$Type;
}}
declare module "io.wispforest.endec.SerializationAttribute" {
import {$SerializationAttribute$WithValue, $SerializationAttribute$WithValue$$Type} from "io.wispforest.endec.SerializationAttribute$WithValue"
import {$SerializationAttribute$Marker, $SerializationAttribute$Marker$$Type} from "io.wispforest.endec.SerializationAttribute$Marker"

export class $SerializationAttribute {
readonly "name": string


public static "withValue"<T>(arg0: string): $SerializationAttribute$WithValue<(T)>
public static "marker"(arg0: string): $SerializationAttribute$Marker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializationAttribute$$Type = ($SerializationAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializationAttribute_ = $SerializationAttribute$$Type;
}}
declare module "io.wispforest.accessories.utils.ItemStackMutation" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$EventStream, $EventStream$$Type} from "io.wispforest.owo.util.EventStream"

export interface $ItemStackMutation {

 "onMutation"(arg0: $ItemStack$$Type, arg1: $List$$Type<($DataComponentType$$Type<(any)>)>): void

(arg0: $ItemStack, arg1: $List<($DataComponentType<(any)>)>): void
}

export namespace $ItemStackMutation {
function getEvent(stack: $ItemStack$$Type): $EventStream<($ItemStackMutation)>
const probejs$$marker: never
}
export class $ItemStackMutation$$Static implements $ItemStackMutation {


static "getEvent"(stack: $ItemStack$$Type): $EventStream<($ItemStackMutation)>
 "onMutation"(arg0: $ItemStack$$Type, arg1: $List$$Type<($DataComponentType$$Type<(any)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackMutation$$Type = ((arg0: $ItemStack, arg1: $List<($DataComponentType<(any)>)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackMutation_ = $ItemStackMutation$$Type;
}}
declare module "io.wispforest.accessories.api.slot.SlotTypeReference" {
import {$SlotType, $SlotType$$Type} from "io.wispforest.accessories.api.slot.SlotType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SlotTypeReference extends $Record {

constructor(slotName: string)

public "get"(level: $Level$$Type): $SlotType
public "get"(isClientSide: boolean): $SlotType
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "slotName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotTypeReference$$Type = ({"slotName"?: string}) | ([slotName?: string]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotTypeReference_ = $SlotTypeReference$$Type;
}}
declare module "io.wispforest.owo.itemgroup.OwoItemGroup$ScrollerTextures" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $OwoItemGroup$ScrollerTextures extends $Record {

constructor(enabled: $ResourceLocation$$Type, disabled: $ResourceLocation$$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "enabled"(): $ResourceLocation
public "disabled"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoItemGroup$ScrollerTextures$$Type = ({"disabled"?: $ResourceLocation$$Type, "enabled"?: $ResourceLocation$$Type}) | ([disabled?: $ResourceLocation$$Type, enabled?: $ResourceLocation$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwoItemGroup$ScrollerTextures_ = $OwoItemGroup$ScrollerTextures$$Type;
}}
declare module "io.wispforest.accessories.pond.owo.ComponentExtension" {
import {$Component, $Component$$Type} from "io.wispforest.owo.ui.core.Component"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export interface $ComponentExtension<T extends $Component> {

 "allowIndividualOverdraw"(arg0: boolean): T
 "allowIndividualOverdraw"(): boolean
}

export namespace $ComponentExtension {
function bypassCheck(component: $Component$$Type, runnable: $Runnable$$Type): void
const probejs$$marker: never
}
export class $ComponentExtension$$Static<T extends $Component> implements $ComponentExtension {


 "allowIndividualOverdraw"(arg0: boolean): T
 "allowIndividualOverdraw"(): boolean
static "bypassCheck"(component: $Component$$Type, runnable: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComponentExtension$$Type<T> = ($ComponentExtension<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComponentExtension_<T> = $ComponentExtension$$Type<(T)>;
}}
declare module "io.wispforest.owo.util.pond.OwoScreenExtension" {
import {$ParentComponent, $ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Layer, $Layer$$Type} from "io.wispforest.owo.ui.layers.Layer"
import {$Layer$Instance, $Layer$Instance$$Type} from "io.wispforest.owo.ui.layers.Layer$Instance"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List, $List$$Type} from "java.util.List"

export interface $OwoScreenExtension {

 "owo$updateLayers"(): void
 "owo$getInstance"<S extends $Screen, R extends $ParentComponent>(arg0: $Layer$$Type<(S), (R)>): $Layer$Instance<>
 "owo$getInstancesView"(): $List<($Layer$Instance<>)>
}

export namespace $OwoScreenExtension {
const probejs$$marker: never
}
export class $OwoScreenExtension$$Static implements $OwoScreenExtension {


 "owo$updateLayers"(): void
 "owo$getInstance"<S extends $Screen, R extends $ParentComponent>(arg0: $Layer$$Type<(S), (R)>): $Layer$Instance<>
 "owo$getInstancesView"(): $List<($Layer$Instance<>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoScreenExtension$$Type = ($OwoScreenExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwoScreenExtension_ = $OwoScreenExtension$$Type;
}}
declare module "io.wispforest.endec.Endec$DecoderWithError" {
import {$Exception, $Exception$$Type} from "java.lang.Exception"
import {$SerializationContext, $SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"
import {$Deserializer, $Deserializer$$Type} from "io.wispforest.endec.Deserializer"

export interface $Endec$DecoderWithError<T> {

 "decode"(arg0: $SerializationContext$$Type, arg1: $Deserializer$$Type<(any)>, arg2: $Exception$$Type): T

(arg0: $SerializationContext, arg1: $Deserializer<(any)>, arg2: $Exception): T
}

export namespace $Endec$DecoderWithError {
const probejs$$marker: never
}
export class $Endec$DecoderWithError$$Static<T> implements $Endec$DecoderWithError {


 "decode"(arg0: $SerializationContext$$Type, arg1: $Deserializer$$Type<(any)>, arg2: $Exception$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endec$DecoderWithError$$Type<T> = ((arg0: $SerializationContext, arg1: $Deserializer<(any)>, arg2: $Exception) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Endec$DecoderWithError_<T> = $Endec$DecoderWithError$$Type<(T)>;
}}
declare module "io.wispforest.owo.ui.event.MouseDown" {
import {$EventStream, $EventStream$$Type} from "io.wispforest.owo.util.EventStream"

export interface $MouseDown {

 "onMouseDown"(arg0: double, arg1: double, arg2: integer): boolean

(arg0: double, arg1: double, arg2: integer): boolean
}

export namespace $MouseDown {
function newStream(): $EventStream<($MouseDown)>
const probejs$$marker: never
}
export class $MouseDown$$Static implements $MouseDown {


static "newStream"(): $EventStream<($MouseDown)>
 "onMouseDown"(arg0: double, arg1: double, arg2: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseDown$$Type = ((arg0: double, arg1: double, arg2: integer) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseDown_ = $MouseDown$$Type;
}}
declare module "io.wispforest.owo.mixin.ui.access.TextFieldWidgetAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TextFieldWidgetAccessor {

 "owo$drawsBackground"(): boolean

(): boolean
}

export namespace $TextFieldWidgetAccessor {
const probejs$$marker: never
}
export class $TextFieldWidgetAccessor$$Static implements $TextFieldWidgetAccessor {


 "owo$drawsBackground"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextFieldWidgetAccessor$$Type = (() => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextFieldWidgetAccessor_ = $TextFieldWidgetAccessor$$Type;
}}
declare module "io.wispforest.accessories.api.client.ArmorRenderingExtension" {
import {$AccessoryRenderer, $AccessoryRenderer$$Type} from "io.wispforest.accessories.api.client.AccessoryRenderer"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $ArmorRenderingExtension<T extends $LivingEntity> {

 "renderEquipmentStack"(stack: $ItemStack$$Type, poseStack: $PoseStack$$Type, multiBufferSource: $MultiBufferSource$$Type, livingEntity: T, equipmentSlot: $EquipmentSlot$$Type, light: integer, limbSwing: float, limbSwingAmount: float, partialTicks: float, ageInTicks: float, netHeadYaw: float, headPitch: float): void
}

export namespace $ArmorRenderingExtension {
const RENDERER: $AccessoryRenderer
const probejs$$marker: never
}
export class $ArmorRenderingExtension$$Static<T extends $LivingEntity> implements $ArmorRenderingExtension {
/**
 * 
 * @deprecated
 */
static readonly "RENDERER": $AccessoryRenderer


 "renderEquipmentStack"(stack: $ItemStack$$Type, poseStack: $PoseStack$$Type, multiBufferSource: $MultiBufferSource$$Type, livingEntity: T, equipmentSlot: $EquipmentSlot$$Type, light: integer, limbSwing: float, limbSwingAmount: float, partialTicks: float, ageInTicks: float, netHeadYaw: float, headPitch: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorRenderingExtension$$Type<T> = ($ArmorRenderingExtension<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmorRenderingExtension_<T> = $ArmorRenderingExtension$$Type<(T)>;
}}
declare module "io.wispforest.endec.Serializer$Sequence" {
import {$Endable, $Endable$$Type} from "io.wispforest.endec.util.Endable"

export interface $Serializer$Sequence<E> extends $Endable {

 "element"(arg0: E): void
 "end"(): void
 "close"(): void
}

export namespace $Serializer$Sequence {
const probejs$$marker: never
}
export class $Serializer$Sequence$$Static<E> implements $Serializer$Sequence {


 "element"(arg0: E): void
 "end"(): void
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializer$Sequence$$Type<E> = ($Serializer$Sequence<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Serializer$Sequence_<E> = $Serializer$Sequence$$Type<(E)>;
}}
declare module "io.wispforest.accessories.impl.InstanceEndec" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$MapCarrier, $MapCarrier$$Type} from "io.wispforest.endec.util.MapCarrier"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$SerializationContext, $SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"

export interface $InstanceEndec {

 "write"(arg0: $MapCarrier$$Type, arg1: $SerializationContext$$Type): void
 "read"(arg0: $MapCarrier$$Type, arg1: $SerializationContext$$Type): void
}

export namespace $InstanceEndec {
function constructed<T extends $InstanceEndec>(supplier: $Supplier$$Type<(T)>): $Endec<(T)>
const probejs$$marker: never
}
export class $InstanceEndec$$Static implements $InstanceEndec {


 "write"(arg0: $MapCarrier$$Type, arg1: $SerializationContext$$Type): void
 "read"(arg0: $MapCarrier$$Type, arg1: $SerializationContext$$Type): void
static "constructed"<T extends $InstanceEndec>(supplier: $Supplier$$Type<(T)>): $Endec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstanceEndec$$Type = ($InstanceEndec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InstanceEndec_ = $InstanceEndec$$Type;
}}
declare module "io.wispforest.owo.ui.core.AnimatableProperty" {
import {$Animation, $Animation$$Type} from "io.wispforest.owo.ui.core.Animation"
import {$Observable, $Observable$$Type} from "io.wispforest.owo.util.Observable"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$Easing, $Easing$$Type} from "io.wispforest.owo.ui.core.Easing"

export class $AnimatableProperty<A extends $Animatable<(A)>> extends $Observable<(A)> {


public "update"(delta: float): void
public static "of"<A extends $Animatable<(A)>>(initial: A): $AnimatableProperty<(A)>
public "animation"(): $Animation<(A)>
public "animate"(duration: integer, easing: $Easing$$Type, to: A): $Animation<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableProperty$$Type<A> = ($AnimatableProperty<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableProperty_<A> = $AnimatableProperty$$Type<(A)>;
}}
declare module "io.wispforest.accessories.api.EquipAction" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"

export interface $EquipAction {

 "equipStack"(arg0: $ItemStack$$Type): $Optional<($ItemStack)>

(arg0: $ItemStack): $Optional$$Type<($ItemStack$$Type)>
}

export namespace $EquipAction {
const probejs$$marker: never
}
export class $EquipAction$$Static implements $EquipAction {


 "equipStack"(arg0: $ItemStack$$Type): $Optional<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipAction$$Type = ((arg0: $ItemStack) => $Optional$$Type<($ItemStack$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipAction_ = $EquipAction$$Type;
}}
declare module "io.wispforest.accessories.pond.stack.PatchedDataComponentMapExtension" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemStackMutation, $ItemStackMutation$$Type} from "io.wispforest.accessories.utils.ItemStackMutation"
import {$EventStream, $EventStream$$Type} from "io.wispforest.owo.util.EventStream"

export interface $PatchedDataComponentMapExtension {

 "accessories$getMutationEvent"(arg0: $ItemStack$$Type): $EventStream<($ItemStackMutation)>
 "accessories$hasChanged"(): boolean
}

export namespace $PatchedDataComponentMapExtension {
const probejs$$marker: never
}
export class $PatchedDataComponentMapExtension$$Static implements $PatchedDataComponentMapExtension {


 "accessories$getMutationEvent"(arg0: $ItemStack$$Type): $EventStream<($ItemStackMutation)>
 "accessories$hasChanged"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatchedDataComponentMapExtension$$Type = ($PatchedDataComponentMapExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatchedDataComponentMapExtension_ = $PatchedDataComponentMapExtension$$Type;
}}
declare module "io.wispforest.accessories.impl.AccessoriesHolderImpl" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$InstanceEndec, $InstanceEndec$$Type} from "io.wispforest.accessories.impl.InstanceEndec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$AccessoriesContainer, $AccessoriesContainer$$Type} from "io.wispforest.accessories.api.AccessoriesContainer"
import {$SerializationContext, $SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"
import {$AccessoriesHolder, $AccessoriesHolder$$Type} from "io.wispforest.accessories.api.AccessoriesHolder"
import {$MapCarrier, $MapCarrier$$Type} from "io.wispforest.endec.util.MapCarrier"
import {$PlayerEquipControl, $PlayerEquipControl$$Type} from "io.wispforest.accessories.impl.PlayerEquipControl"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$AccessoriesCapability, $AccessoriesCapability$$Type} from "io.wispforest.accessories.api.AccessoriesCapability"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AccessoriesHolderLookupCache, $AccessoriesHolderLookupCache$$Type} from "io.wispforest.accessories.impl.caching.AccessoriesHolderLookupCache"

export class $AccessoriesHolderImpl implements $AccessoriesHolder, $InstanceEndec {
 "lookupCache": $AccessoriesHolderLookupCache
readonly "invalidStacks": $List<($ItemStack)>

constructor()

public static "of"(): $AccessoriesHolderImpl
public "init"(capability: $AccessoriesCapability$$Type): void
public "write"(carrier: $MapCarrier$$Type, ctx: $SerializationContext$$Type): void
public "read"(entity: $LivingEntity$$Type, carrier: $MapCarrier$$Type, ctx: $SerializationContext$$Type): void
public "read"(capability: $AccessoriesCapability$$Type, entity: $LivingEntity$$Type, carrier: $MapCarrier$$Type, ctx: $SerializationContext$$Type): void
public "read"(carrier: $MapCarrier$$Type, context: $SerializationContext$$Type): void
public "showAdvancedOptions"(): boolean
public "showAdvancedOptions"(value: boolean): $AccessoriesHolder
public "showUnusedSlots"(value: boolean): $AccessoriesHolder
public "showUnusedSlots"(): boolean
public "showGroupFilter"(value: boolean): $AccessoriesHolder
public "showGroupFilter"(): boolean
public "mainWidgetPosition"(): boolean
public "mainWidgetPosition"(value: boolean): $AccessoriesHolder
public "sideWidgetPosition"(value: boolean): $AccessoriesHolder
public "sideWidgetPosition"(): boolean
public "showCraftingGrid"(): boolean
public "showCraftingGrid"(value: boolean): $AccessoriesHolder
public "isGroupFiltersOpen"(value: boolean): $AccessoriesHolder
public "isGroupFiltersOpen"(): boolean
public "getSlotContainers"(): $Map<(string), ($AccessoriesContainer)>
public "equipControl"(): $PlayerEquipControl
public "equipControl"(value: $PlayerEquipControl$$Type): $AccessoriesHolder
public "columnAmount"(value: integer): $AccessoriesHolder
public "columnAmount"(): integer
public "widgetType"(): integer
public "widgetType"(value: integer): $AccessoriesHolder
public "filteredGroups"(value: $Set$$Type<(string)>): $AccessoriesHolder
public "filteredGroups"(): $Set<(string)>
public "setValidTypes"(validTypes: $Set$$Type<(string)>): void
public "cosmeticsShown"(value: boolean): $AccessoriesHolder
public "cosmeticsShown"(): boolean
public "getLookupCache"(): $AccessoriesHolderLookupCache
public static "get"(livingEntity: $LivingEntity$$Type): $AccessoriesHolder
/**
 * 
 * @deprecated
 */
public "showUniqueSlots"(): boolean
/**
 * 
 * @deprecated
 */
public "showUniqueSlots"(value: boolean): $AccessoriesHolder
/**
 * 
 * @deprecated
 */
public "linesShown"(): boolean
/**
 * 
 * @deprecated
 */
public "linesShown"(value: boolean): $AccessoriesHolder
public static "getOptionally"(livingEntity: $LivingEntity$$Type): $Optional<($AccessoriesHolder)>
public static "constructed"<T extends $InstanceEndec>(supplier: $Supplier$$Type<(T)>): $Endec<(T)>
get "groupFiltersOpen"(): boolean
get "slotContainers"(): $Map<(string), ($AccessoriesContainer)>
set "validTypes"(value: $Set$$Type<(string)>)
get "lookupCache"(): $AccessoriesHolderLookupCache
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesHolderImpl$$Type = ($AccessoriesHolderImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoriesHolderImpl_ = $AccessoriesHolderImpl$$Type;
}}
declare module "io.wispforest.owo.ui.event.KeyPress" {
import {$EventStream, $EventStream$$Type} from "io.wispforest.owo.util.EventStream"

export interface $KeyPress {

 "onKeyPress"(arg0: integer, arg1: integer, arg2: integer): boolean

(arg0: integer, arg1: integer, arg2: integer): boolean
}

export namespace $KeyPress {
function newStream(): $EventStream<($KeyPress)>
const probejs$$marker: never
}
export class $KeyPress$$Static implements $KeyPress {


static "newStream"(): $EventStream<($KeyPress)>
 "onKeyPress"(arg0: integer, arg1: integer, arg2: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyPress$$Type = ((arg0: integer, arg1: integer, arg2: integer) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyPress_ = $KeyPress$$Type;
}}
declare module "io.wispforest.accessories.api.events.extra.PiglinNeutralInducer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TriState, $TriState$$Type} from "net.fabricmc.fabric.api.util.TriState"
import {$Event, $Event$$Type} from "net.fabricmc.fabric.api.event.Event"
import {$SlotReference, $SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export interface $PiglinNeutralInducer {

 "makePiglinsNeutral"(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type): $TriState

(arg0: $ItemStack, arg1: $SlotReference): $TriState$$Type
}

export namespace $PiglinNeutralInducer {
const EVENT: $Event<($PiglinNeutralInducer)>
const probejs$$marker: never
}
export class $PiglinNeutralInducer$$Static implements $PiglinNeutralInducer {
static readonly "EVENT": $Event<($PiglinNeutralInducer)>


 "makePiglinsNeutral"(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type): $TriState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PiglinNeutralInducer$$Type = ((arg0: $ItemStack, arg1: $SlotReference) => $TriState$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PiglinNeutralInducer_ = $PiglinNeutralInducer$$Type;
}}
declare module "io.wispforest.accessories.api.DropRule" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $DropRule extends $Enum<($DropRule)> {
static readonly "DESTROY": $DropRule
static readonly "KEEP": $DropRule
static readonly "DEFAULT": $DropRule
static readonly "DROP": $DropRule


public static "values"(): ($DropRule)[]
public static "valueOf"(name: string): $DropRule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropRule$$Type = (("keep") | ("drop") | ("destroy") | ("default"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropRule_ = $DropRule$$Type;
}}
declare module "io.wispforest.accessories.impl.caching.EquipmentLookupCache" {
import {$ItemStackBasedPredicate, $ItemStackBasedPredicate$$Type} from "io.wispforest.accessories.api.caching.ItemStackBasedPredicate"
import {$List, $List$$Type} from "java.util.List"
import {$EquipmentChecking, $EquipmentChecking$$Type} from "io.wispforest.accessories.api.EquipmentChecking"
import {$SlotEntryReference, $SlotEntryReference$$Type} from "io.wispforest.accessories.api.slot.SlotEntryReference"

export class $EquipmentLookupCache {


public "clearCache"(): void
public "isEquipped"(arg0: $ItemStackBasedPredicate$$Type): boolean
public "getEquipped"(arg0: $ItemStackBasedPredicate$$Type): $List<($SlotEntryReference)>
public "getAllEquipped"(): $List<($SlotEntryReference)>
public "firstEquipped"(arg0: $ItemStackBasedPredicate$$Type, arg1: $EquipmentChecking$$Type): $SlotEntryReference
get "allEquipped"(): $List<($SlotEntryReference)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentLookupCache$$Type = ($EquipmentLookupCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipmentLookupCache_ = $EquipmentLookupCache$$Type;
}}
declare module "io.wispforest.accessories.api.components.AccessoryItemAttributeModifiers$Entry" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AccessoryItemAttributeModifiers$Entry extends $Record {
static readonly "ENDEC": $Endec<($AccessoryItemAttributeModifiers$Entry)>

constructor(attribute: $Holder$$Type<($Attribute)>, modifier: $AttributeModifier$$Type, slotName: string, isStackable: boolean)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "modifier"(): $AttributeModifier
public "attribute"(): $Holder<($Attribute)>
public "isStackable"(): boolean
public "slotName"(): string
get "stackable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryItemAttributeModifiers$Entry$$Type = ({"modifier"?: $AttributeModifier$$Type, "isStackable"?: boolean, "slotName"?: string, "attribute"?: $Holder$$Type<($Attribute)>}) | ([modifier?: $AttributeModifier$$Type, isStackable?: boolean, slotName?: string, attribute?: $Holder$$Type<($Attribute)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoryItemAttributeModifiers$Entry_ = $AccessoryItemAttributeModifiers$Entry$$Type;
}}
declare module "io.wispforest.owo.util.pond.OwoTessellatorExtension" {
import {$BufferBuilder, $BufferBuilder$$Type} from "com.mojang.blaze3d.vertex.BufferBuilder"

export interface $OwoTessellatorExtension {

 "owo$getStoredBuilder"(): $BufferBuilder
 "owo$skipNextBegin"(): void
 "owo$setStoredBuilder"(arg0: $BufferBuilder$$Type): void
}

export namespace $OwoTessellatorExtension {
const probejs$$marker: never
}
export class $OwoTessellatorExtension$$Static implements $OwoTessellatorExtension {


 "owo$getStoredBuilder"(): $BufferBuilder
 "owo$skipNextBegin"(): void
 "owo$setStoredBuilder"(arg0: $BufferBuilder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoTessellatorExtension$$Type = ($OwoTessellatorExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwoTessellatorExtension_ = $OwoTessellatorExtension$$Type;
}}
declare module "io.wispforest.owo.ui.parsing.UIModel" {
import {$ParentComponent, $ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Component, $Component$$Type} from "io.wispforest.owo.ui.core.Component"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Element, $Element$$Type} from "org.w3c.dom.Element"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$OwoUIAdapter, $OwoUIAdapter$$Type} from "io.wispforest.owo.ui.core.OwoUIAdapter"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export class $UIModel {


public static "load"(stream: $InputStream$$Type): $UIModel
public static "load"(path: $Path$$Type): $UIModel
public "createAdapterWithoutScreen"<T extends $ParentComponent>(x: integer, y: integer, width: integer, height: integer, expectedRootComponentClass: $Class$$Type<(T)>): $OwoUIAdapter<(T)>
public "createAdapter"<T extends $ParentComponent>(expectedRootComponentClass: $Class$$Type<(T)>, screen: $Screen$$Type): $OwoUIAdapter<(T)>
public "expandTemplate"<T extends $Component>(expectedClass: $Class$$Type<(T)>, name: string, parameterSupplier: $Function$$Type<(string), (string)>, childSupplier: $Function$$Type<(string), ($Element$$Type)>): T
public "expandTemplate"<T extends $Component>(expectedClass: $Class$$Type<(T)>, name: string, parameters: $Map$$Type<(string), (string)>): T
public "parseComponent"<T extends $Component>(expectedClass: $Class$$Type<(T)>, componentElement: $Element$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UIModel$$Type = ($UIModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UIModel_ = $UIModel$$Type;
}}
declare module "io.wispforest.owo.ui.component.VanillaWidgetComponent" {
import {$OwoUIDrawContext, $OwoUIDrawContext$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext"
import {$ParentComponent, $ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Component, $Component$$Type} from "io.wispforest.owo.ui.core.Component"
import {$CursorStyle, $CursorStyle$$Type} from "io.wispforest.owo.ui.core.CursorStyle"
import {$PositionedRectangle, $PositionedRectangle$$Type} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$BaseComponent, $BaseComponent$$Type} from "io.wispforest.owo.ui.base.BaseComponent"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Insets, $Insets$$Type} from "io.wispforest.owo.ui.core.Insets"
import {$Size, $Size$$Type} from "io.wispforest.owo.ui.core.Size"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $VanillaWidgetComponent extends $BaseComponent {


public "inflate"(space: $Size$$Type): void
public "mount"(parent: $ParentComponent$$Type, x: integer, y: integer): void
public "configure"<C extends $Component>(closure: $Consumer$$Type<(C)>): C
public "draw"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
public "shouldDrawTooltip"(mouseX: double, mouseY: double): boolean
public "notifyParentIfMounted"(): void
public "margins"(margins: $Insets$$Type): $BaseComponent
public "onMouseDown"(mouseX: double, mouseY: double, button: integer): boolean
public "onMouseUp"(mouseX: double, mouseY: double, button: integer): boolean
public "onMouseScroll"(mouseX: double, mouseY: double, amount: double): boolean
public "onMouseDrag"(mouseX: double, mouseY: double, deltaX: double, deltaY: double, button: integer): boolean
public "onKeyPress"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "onCharTyped"(chr: character, modifiers: integer): boolean
public "updateX"(x: integer): void
public "updateY"(y: integer): void
public "hovered"(): boolean
public "cursorStyle"(arg0: $CursorStyle$$Type): $Component
public static "bypassCheck"(component: $Component$$Type, runnable: $Runnable$$Type): void
public static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
public static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VanillaWidgetComponent$$Type = ($VanillaWidgetComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VanillaWidgetComponent_ = $VanillaWidgetComponent$$Type;
}}
declare module "io.wispforest.owo.serialization.EndecRecipeSerializer" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$StructEndec, $StructEndec$$Type} from "io.wispforest.endec.StructEndec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $EndecRecipeSerializer<R extends $Recipe<(any)>> implements $RecipeSerializer<(R)> {

constructor(endec: $StructEndec$$Type<(R)>, networkEndec: $Endec$$Type<(R)>)
constructor(endec: $StructEndec$$Type<(R)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (R)>
public "codec"(): $MapCodec<(R)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndecRecipeSerializer$$Type<R> = ($EndecRecipeSerializer<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndecRecipeSerializer_<R> = $EndecRecipeSerializer$$Type<(R)>;
}}
declare module "io.wispforest.owo.ui.core.OwoUIDrawContext" {
import {$List, $List$$Type} from "java.util.List"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$OwoUIDrawContext$UtilityScreen, $OwoUIDrawContext$UtilityScreen$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext$UtilityScreen"
import {$ClientTooltipComponent, $ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import {$ParentComponent, $ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$OwoUIDrawContext$TextAnchor, $OwoUIDrawContext$TextAnchor$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext$TextAnchor"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Insets, $Insets$$Type} from "io.wispforest.owo.ui.core.Insets"
import {$Color, $Color$$Type} from "io.wispforest.owo.ui.core.Color"

export class $OwoUIDrawContext extends $GuiGraphics {
/**
 * 
 * @deprecated
 */
static readonly "PANEL_TEXTURE": $ResourceLocation
static readonly "PANEL_NINE_PATCH_TEXTURE": $ResourceLocation
 "minecraft": $Minecraft
static readonly "MIN_GUI_Z": float
static readonly "PANEL_INSET_NINE_PATCH_TEXTURE": $ResourceLocation
/**
 * 
 * @deprecated
 */
static readonly "DARK_PANEL_TEXTURE": $ResourceLocation
/**
 * 
 * @deprecated
 */
static readonly "PANEL_INSET_TEXTURE": $ResourceLocation
static readonly "DARK_PANEL_NINE_PATCH_TEXTURE": $ResourceLocation
static readonly "MAX_GUI_Z": float


public "recording"(): boolean
public static "of"(context: $GuiGraphics$$Type): $OwoUIDrawContext
public static "utilityScreen"(): $OwoUIDrawContext$UtilityScreen
public "drawRectOutline"(x: integer, y: integer, width: integer, height: integer, color: integer): void
public "drawGradientRect"(x: integer, y: integer, width: integer, height: integer, topLeftColor: integer, topRightColor: integer, bottomRightColor: integer, bottomLeftColor: integer): void
public "drawLine"(x1: integer, y1: integer, x2: integer, y2: integer, thiccness: double, color: $Color$$Type): void
public "recordQuads"(): void
public "submitQuads"(): void
public "drawPanel"(x: integer, y: integer, width: integer, height: integer, dark: boolean): void
public "drawSpectrum"(x: integer, y: integer, width: integer, height: integer, vertical: boolean): void
public "drawCircle"(centerX: integer, centerY: integer, angleFrom: double, angleTo: double, segments: integer, radius: double, color: $Color$$Type): void
public "drawCircle"(centerX: integer, centerY: integer, segments: integer, radius: double, color: $Color$$Type): void
public "drawRing"(centerX: integer, centerY: integer, segments: integer, innerRadius: double, outerRadius: double, innerColor: $Color$$Type, outerColor: $Color$$Type): void
public "drawRing"(centerX: integer, centerY: integer, angleFrom: double, angleTo: double, segments: integer, innerRadius: double, outerRadius: double, innerColor: $Color$$Type, outerColor: $Color$$Type): void
public "drawInsets"(x: integer, y: integer, width: integer, height: integer, insets: $Insets$$Type, color: integer): void
public "drawInspector"(root: $ParentComponent$$Type, mouseX: double, mouseY: double, onlyHovered: boolean): void
public "drawText"(text: $Component$$Type, x: float, y: float, scale: float, color: integer): void
public "drawText"(text: $Component$$Type, x: float, y: float, scale: float, color: integer, anchorPoint: $OwoUIDrawContext$TextAnchor$$Type): void
public "drawTooltip"(textRenderer: $Font$$Type, x: integer, y: integer, components: $List$$Type<($ClientTooltipComponent$$Type)>): void
public static "bufferSource"(arg0: $GuiGraphics$$Type): $MultiBufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoUIDrawContext$$Type = ($OwoUIDrawContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwoUIDrawContext_ = $OwoUIDrawContext$$Type;
}}
declare module "io.wispforest.owo.itemgroup.OwoItemGroup$Builder" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$OwoItemGroup$ScrollerTextures, $OwoItemGroup$ScrollerTextures$$Type} from "io.wispforest.owo.itemgroup.OwoItemGroup$ScrollerTextures"
import {$OwoItemGroup, $OwoItemGroup$$Type} from "io.wispforest.owo.itemgroup.OwoItemGroup"
import {$OwoItemGroup$TabTextures, $OwoItemGroup$TabTextures$$Type} from "io.wispforest.owo.itemgroup.OwoItemGroup$TabTextures"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $OwoItemGroup$Builder {


public "build"(): $OwoItemGroup
public "initializer"(initializer: $Consumer$$Type<($OwoItemGroup)>): $OwoItemGroup$Builder
public "backgroundTexture"(backgroundTexture: $ResourceLocation$$Type): $OwoItemGroup$Builder
public "scrollerTextures"(scrollerTextures: $OwoItemGroup$ScrollerTextures$$Type): $OwoItemGroup$Builder
public "displaySingleTab"(): $OwoItemGroup$Builder
public "buttonStackHeight"(buttonStackHeight: integer): $OwoItemGroup$Builder
public "tabTextures"(tabTextures: $OwoItemGroup$TabTextures$$Type): $OwoItemGroup$Builder
public "tabStackHeight"(tabStackHeight: integer): $OwoItemGroup$Builder
public "disableDynamicTitle"(): $OwoItemGroup$Builder
public "withoutMultipleSelection"(): $OwoItemGroup$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoItemGroup$Builder$$Type = ($OwoItemGroup$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwoItemGroup$Builder_ = $OwoItemGroup$Builder$$Type;
}}
declare module "io.wispforest.accessories.api.attributes.AttributeModificationData" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AttributeModificationData extends $Record {

constructor(attribute: $Holder$$Type<($Attribute)>, modifier: $AttributeModifier$$Type)
constructor(slotPath: string, attribute: $Holder$$Type<($Attribute)>, modifier: $AttributeModifier$$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "modifier"(): $AttributeModifier
public "attribute"(): $Holder<($Attribute)>
public "slotPath"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttributeModificationData$$Type = ({"modifier"?: $AttributeModifier$$Type, "attribute"?: $Holder$$Type<($Attribute)>, "slotPath"?: string}) | ([modifier?: $AttributeModifier$$Type, attribute?: $Holder$$Type<($Attribute)>, slotPath?: string]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttributeModificationData_ = $AttributeModificationData$$Type;
}}
declare module "io.wispforest.endec.util.EndecBuffer" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$SerializationContext, $SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"

export interface $EndecBuffer {

 "write"<T>(arg0: $Endec$$Type<(T)>, arg1: T): void
 "write"<T>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(T)>, arg2: T): void
 "read"<T>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(T)>): T
 "read"<T>(arg0: $Endec$$Type<(T)>): T
}

export namespace $EndecBuffer {
const probejs$$marker: never
}
export class $EndecBuffer$$Static implements $EndecBuffer {


 "write"<T>(arg0: $Endec$$Type<(T)>, arg1: T): void
 "write"<T>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(T)>, arg2: T): void
 "read"<T>(arg0: $SerializationContext$$Type, arg1: $Endec$$Type<(T)>): T
 "read"<T>(arg0: $Endec$$Type<(T)>): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndecBuffer$$Type = ($EndecBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndecBuffer_ = $EndecBuffer$$Type;
}}
declare module "io.wispforest.accessories.api.client.Side" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export class $Side extends $Enum<($Side)> {
static readonly "TOP": $Side
static readonly "LEFT": $Side
static readonly "BACK": $Side
static readonly "FRONT": $Side
static readonly "RIGHT": $Side
static readonly "ENDEC": $Endec<($Side)>
static readonly "BOTTOM": $Side
readonly "direction": $Direction


public static "values"(): ($Side)[]
public static "valueOf"(name: string): $Side
public "rotationAxis"(): $Vec3i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Side$$Type = (("bottom") | ("top") | ("back") | ("front") | ("left") | ("right"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Side_ = $Side$$Type;
}}
declare module "io.wispforest.accessories.pond.CloseContainerTransfer" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $CloseContainerTransfer {

 "accessories$setScreenTransfer"(arg0: $Screen$$Type): void

(arg0: $Screen): void
}

export namespace $CloseContainerTransfer {
const probejs$$marker: never
}
export class $CloseContainerTransfer$$Static implements $CloseContainerTransfer {


 "accessories$setScreenTransfer"(arg0: $Screen$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CloseContainerTransfer$$Type = ((arg0: $Screen) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CloseContainerTransfer_ = $CloseContainerTransfer$$Type;
}}
declare module "io.wispforest.owo.ui.core.OwoUIDrawContext$TextAnchor" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $OwoUIDrawContext$TextAnchor extends $Enum<($OwoUIDrawContext$TextAnchor)> {
static readonly "TOP_LEFT": $OwoUIDrawContext$TextAnchor
static readonly "BOTTOM_RIGHT": $OwoUIDrawContext$TextAnchor
static readonly "TOP_RIGHT": $OwoUIDrawContext$TextAnchor
static readonly "BOTTOM_LEFT": $OwoUIDrawContext$TextAnchor


public static "values"(): ($OwoUIDrawContext$TextAnchor)[]
public static "valueOf"(name: string): $OwoUIDrawContext$TextAnchor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoUIDrawContext$TextAnchor$$Type = (("top_right") | ("bottom_right") | ("top_left") | ("bottom_left"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwoUIDrawContext$TextAnchor_ = $OwoUIDrawContext$TextAnchor$$Type;
}}
declare module "io.wispforest.owo.mixin.ForwardingDynamicOpsAccessor" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"

export interface $ForwardingDynamicOpsAccessor<T> {

 "owo$delegate"(): $DynamicOps<(T)>

(): $DynamicOps$$Type<(T)>
}

export namespace $ForwardingDynamicOpsAccessor {
const probejs$$marker: never
}
export class $ForwardingDynamicOpsAccessor$$Static<T> implements $ForwardingDynamicOpsAccessor {


 "owo$delegate"(): $DynamicOps<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForwardingDynamicOpsAccessor$$Type<T> = (() => $DynamicOps$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForwardingDynamicOpsAccessor_<T> = $ForwardingDynamicOpsAccessor$$Type<(T)>;
}}
declare module "io.wispforest.accessories.pond.ItemBasedSteerable" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemBasedSteering, $ItemBasedSteering$$Type} from "net.minecraft.world.entity.ItemBasedSteering"
import {$SoundSource, $SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Saddleable, $Saddleable$$Type} from "net.minecraft.world.entity.Saddleable"

export interface $ItemBasedSteerable extends $Saddleable {

 "getInstance"(): $ItemBasedSteering
 "isSaddled"(): boolean
 "getSaddleSoundEvent"(): $SoundEvent
 "isSaddleable"(): boolean
 "equipSaddle"(arg0: $ItemStack$$Type, arg1: $SoundSource$$Type): void
get "instance"(): $ItemBasedSteering
get "saddled"(): boolean
get "saddleSoundEvent"(): $SoundEvent
get "saddleable"(): boolean
}

export namespace $ItemBasedSteerable {
const probejs$$marker: never
}
export class $ItemBasedSteerable$$Static implements $ItemBasedSteerable {


 "getInstance"(): $ItemBasedSteering
 "isSaddled"(): boolean
 "getSaddleSoundEvent"(): $SoundEvent
 "isSaddleable"(): boolean
 "equipSaddle"(arg0: $ItemStack$$Type, arg1: $SoundSource$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBasedSteerable$$Type = ($ItemBasedSteerable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBasedSteerable_ = $ItemBasedSteerable$$Type;
}}
declare module "io.wispforest.owo.ui.core.Component$DismountReason" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Component$DismountReason extends $Enum<($Component$DismountReason)> {
static readonly "LAYOUT_INFLATION": $Component$DismountReason
static readonly "REMOVED": $Component$DismountReason


public static "values"(): ($Component$DismountReason)[]
public static "valueOf"(name: string): $Component$DismountReason
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Component$DismountReason$$Type = (("layout_inflation") | ("removed"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Component$DismountReason_ = $Component$DismountReason$$Type;
}}
declare module "io.wispforest.owo.ui.layers.Layer$Instance" {
import {$Component, $Component$$Type} from "io.wispforest.owo.ui.core.Component"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$OwoUIAdapter, $OwoUIAdapter$$Type} from "io.wispforest.owo.ui.core.OwoUIAdapter"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$AbstractWidget, $AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Layer$Instance$AnchorSide, $Layer$Instance$AnchorSide$$Type} from "io.wispforest.owo.ui.layers.Layer$Instance$AnchorSide"

export class $Layer$Instance {
readonly "adapter": $OwoUIAdapter<(R)>
 "aggressivePositioning": boolean
readonly "screen": S


public "resize"(width: integer, height: integer): void
public "alignComponentToHandledScreenCoordinates"(component: $Component$$Type, x: integer, y: integer): void
public "dispatchLayoutUpdates"(): void
public "alignComponentToWidget"(locator: $Predicate$$Type<($AbstractWidget)>, anchor: $Layer$Instance$AnchorSide$$Type, justification: float, component: $Component$$Type): void
public "queryWidget"(locator: $Predicate$$Type<($AbstractWidget)>): $AbstractWidget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layer$Instance$$Type = ($Layer$Instance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Layer$Instance_ = $Layer$Instance$$Type;
}}
declare module "io.wispforest.owo.ui.event.MouseEnter" {
import {$EventStream, $EventStream$$Type} from "io.wispforest.owo.util.EventStream"

export interface $MouseEnter {

 "onMouseEnter"(): void

(): void
}

export namespace $MouseEnter {
function newStream(): $EventStream<($MouseEnter)>
const probejs$$marker: never
}
export class $MouseEnter$$Static implements $MouseEnter {


static "newStream"(): $EventStream<($MouseEnter)>
 "onMouseEnter"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseEnter$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseEnter_ = $MouseEnter$$Type;
}}
declare module "io.wispforest.owo.mixin.ui.DrawContextInvoker" {
import {$GuiGraphics$ScissorStack, $GuiGraphics$ScissorStack$$Type} from "net.minecraft.client.gui.GuiGraphics$ScissorStack"
import {$List, $List$$Type} from "java.util.List"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$ClientTooltipPositioner, $ClientTooltipPositioner$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner"
import {$ClientTooltipComponent, $ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"

export interface $DrawContextInvoker {

 "owo$renderTooltipFromComponents"(arg0: $Font$$Type, arg1: $List$$Type<($ClientTooltipComponent$$Type)>, arg2: integer, arg3: integer, arg4: $ClientTooltipPositioner$$Type): void
 "owo$getMatrices"(): $PoseStack
 "owo$setMatrices"(arg0: $PoseStack$$Type): void
 "owo$getScissorStack"(): $GuiGraphics$ScissorStack
 "owo$setScissorStack"(arg0: $GuiGraphics$ScissorStack$$Type): void
}

export namespace $DrawContextInvoker {
const probejs$$marker: never
}
export class $DrawContextInvoker$$Static implements $DrawContextInvoker {


 "owo$renderTooltipFromComponents"(arg0: $Font$$Type, arg1: $List$$Type<($ClientTooltipComponent$$Type)>, arg2: integer, arg3: integer, arg4: $ClientTooltipPositioner$$Type): void
 "owo$getMatrices"(): $PoseStack
 "owo$setMatrices"(arg0: $PoseStack$$Type): void
 "owo$getScissorStack"(): $GuiGraphics$ScissorStack
 "owo$setScissorStack"(arg0: $GuiGraphics$ScissorStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawContextInvoker$$Type = ($DrawContextInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawContextInvoker_ = $DrawContextInvoker$$Type;
}}
declare module "io.wispforest.endec.StructEndec" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$Endec$Decoder, $Endec$Decoder$$Type} from "io.wispforest.endec.Endec$Decoder"
import {$SerializationAttribute, $SerializationAttribute$$Type} from "io.wispforest.endec.SerializationAttribute"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$StructField, $StructField$$Type} from "io.wispforest.endec.impl.StructField"
import {$SerializationContext, $SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"
import {$Serializer$Struct, $Serializer$Struct$$Type} from "io.wispforest.endec.Serializer$Struct"
import {$Deserializer, $Deserializer$$Type} from "io.wispforest.endec.Deserializer"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$AttributeEndecBuilder, $AttributeEndecBuilder$$Type} from "io.wispforest.endec.impl.AttributeEndecBuilder"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Deserializer$Struct, $Deserializer$Struct$$Type} from "io.wispforest.endec.Deserializer$Struct"
import {$Serializer, $Serializer$$Type} from "io.wispforest.endec.Serializer"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Endec$Encoder, $Endec$Encoder$$Type} from "io.wispforest.endec.Endec$Encoder"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Endec$DecoderWithError, $Endec$DecoderWithError$$Type} from "io.wispforest.endec.Endec$DecoderWithError"
import {$KeyedEndec, $KeyedEndec$$Type} from "io.wispforest.endec.impl.KeyedEndec"

export interface $StructEndec<T> extends $Endec<(T)> {

 "decode"(arg0: $SerializationContext$$Type, arg1: $Deserializer$$Type<(any)>): T
 "encode"(arg0: $SerializationContext$$Type, arg1: $Serializer$$Type<(any)>, arg2: T): void
 "xmap"<R>(arg0: $Function$$Type<(T), (R)>, arg1: $Function$$Type<(R), (T)>): $StructEndec<(R)>
 "xmapWithContext"(arg0: $BiFunction$$Type<(any), (any), (any)>, arg1: $BiFunction$$Type<(any), (any), (any)>): $Endec<(any)>
 "flatFieldOf"<S>(arg0: $Function$$Type<(S), (T)>): $StructField<(S), (T)>
 "encodeStruct"(arg0: $SerializationContext$$Type, arg1: $Serializer$$Type<(any)>, arg2: $Serializer$Struct$$Type, arg3: T): void
 "decodeStruct"(arg0: $SerializationContext$$Type, arg1: $Deserializer$$Type<(any)>, arg2: $Deserializer$Struct$$Type): T
 "validate"(arg0: $Consumer$$Type<(T)>): $Endec<(T)>
 "optionalOf"(): $Endec<($Optional<(T)>)>
 "fieldOf"<S>(arg0: string, arg1: $Function$$Type<(S), (T)>): $StructField<(S), (T)>
 "decodeFully"<E>(arg0: $Function$$Type<(E), ($Deserializer$$Type<(E)>)>, arg1: E): T
 "decodeFully"<E>(arg0: $SerializationContext$$Type, arg1: $Function$$Type<(E), ($Deserializer$$Type<(E)>)>, arg2: E): T
 "encodeFully"<E>(arg0: $Supplier$$Type<($Serializer$$Type<(E)>)>, arg1: T): E
 "encodeFully"<E>(arg0: $SerializationContext$$Type, arg1: $Supplier$$Type<($Serializer$$Type<(E)>)>, arg2: T): E
 "setOf"(): $Endec<($Set<(T)>)>
 "keyed"(arg0: string, arg1: $Supplier$$Type<(T)>): $KeyedEndec<(T)>
 "keyed"(arg0: string, arg1: T): $KeyedEndec<(T)>
 "listOf"(): $Endec<($List<(T)>)>
 "mapOf"(): $Endec<($Map<(string), (T)>)>
 "optionalFieldOf"<S>(arg0: string, arg1: $Function$$Type<(S), (T)>, arg2: $Supplier$$Type<(T)>): $StructField<(S), (T)>
 "optionalFieldOf"<S>(arg0: string, arg1: $Function$$Type<(S), (T)>, arg2: T): $StructField<(S), (T)>
 "catchErrors"(arg0: $Endec$DecoderWithError$$Type<(T)>): $Endec<(T)>
 "nullableOf"(): $Endec<(T)>
}

export namespace $StructEndec {
function unit<T>(arg0: T): $StructEndec<(T)>
function unit<T>(arg0: $Supplier$$Type<(T)>): $StructEndec<(T)>
function map<K, V>(arg0: $Endec$$Type<(K)>, arg1: $Endec$$Type<(V)>): $Endec<($Map<(K), (V)>)>
function map<K, V>(arg0: $Function$$Type<(K), (string)>, arg1: $Function$$Type<(string), (K)>, arg2: $Endec$$Type<(V)>): $Endec<($Map<(K), (V)>)>
function of<T>(arg0: $Endec$Encoder$$Type<(T)>, arg1: $Endec$Decoder$$Type<(T)>): $Endec<(T)>
function dispatched<T, K>(arg0: $Function$$Type<(K), ($Endec$$Type<(T)>)>, arg1: $Function$$Type<(T), (K)>, arg2: $Endec$$Type<(K)>): $Endec<(T)>
function ifAttr<T>(arg0: $SerializationAttribute$$Type, arg1: $Endec$$Type<(T)>): $AttributeEndecBuilder<(T)>
function dispatchedStruct<T, K>(arg0: $Function$$Type<(K), ($StructEndec$$Type<(T)>)>, arg1: $Function$$Type<(T), (K)>, arg2: $Endec$$Type<(K)>, arg3: string): $Endec<(T)>
function dispatchedStruct<T, K>(arg0: $Function$$Type<(K), ($StructEndec$$Type<(T)>)>, arg1: $Function$$Type<(T), (K)>, arg2: $Endec$$Type<(K)>): $Endec<(T)>
function forEnum<E extends $Enum<(E)>>(arg0: $Class$$Type<(E)>): $Endec<(E)>
const probejs$$marker: never
}
export class $StructEndec$$Static<T> implements $StructEndec {


 "decode"(arg0: $SerializationContext$$Type, arg1: $Deserializer$$Type<(any)>): T
 "encode"(arg0: $SerializationContext$$Type, arg1: $Serializer$$Type<(any)>, arg2: T): void
static "unit"<T>(arg0: T): $StructEndec<(T)>
static "unit"<T>(arg0: $Supplier$$Type<(T)>): $StructEndec<(T)>
 "xmap"<R>(arg0: $Function$$Type<(T), (R)>, arg1: $Function$$Type<(R), (T)>): $StructEndec<(R)>
 "xmapWithContext"(arg0: $BiFunction$$Type<(any), (any), (any)>, arg1: $BiFunction$$Type<(any), (any), (any)>): $Endec<(any)>
 "flatFieldOf"<S>(arg0: $Function$$Type<(S), (T)>): $StructField<(S), (T)>
 "encodeStruct"(arg0: $SerializationContext$$Type, arg1: $Serializer$$Type<(any)>, arg2: $Serializer$Struct$$Type, arg3: T): void
 "decodeStruct"(arg0: $SerializationContext$$Type, arg1: $Deserializer$$Type<(any)>, arg2: $Deserializer$Struct$$Type): T
static "map"<K, V>(arg0: $Endec$$Type<(K)>, arg1: $Endec$$Type<(V)>): $Endec<($Map<(K), (V)>)>
static "map"<K, V>(arg0: $Function$$Type<(K), (string)>, arg1: $Function$$Type<(string), (K)>, arg2: $Endec$$Type<(V)>): $Endec<($Map<(K), (V)>)>
static "of"<T>(arg0: $Endec$Encoder$$Type<(T)>, arg1: $Endec$Decoder$$Type<(T)>): $Endec<(T)>
 "validate"(arg0: $Consumer$$Type<(T)>): $Endec<(T)>
 "optionalOf"(): $Endec<($Optional<(T)>)>
 "fieldOf"<S>(arg0: string, arg1: $Function$$Type<(S), (T)>): $StructField<(S), (T)>
 "decodeFully"<E>(arg0: $Function$$Type<(E), ($Deserializer$$Type<(E)>)>, arg1: E): T
 "decodeFully"<E>(arg0: $SerializationContext$$Type, arg1: $Function$$Type<(E), ($Deserializer$$Type<(E)>)>, arg2: E): T
 "encodeFully"<E>(arg0: $Supplier$$Type<($Serializer$$Type<(E)>)>, arg1: T): E
 "encodeFully"<E>(arg0: $SerializationContext$$Type, arg1: $Supplier$$Type<($Serializer$$Type<(E)>)>, arg2: T): E
static "dispatched"<T, K>(arg0: $Function$$Type<(K), ($Endec$$Type<(T)>)>, arg1: $Function$$Type<(T), (K)>, arg2: $Endec$$Type<(K)>): $Endec<(T)>
 "setOf"(): $Endec<($Set<(T)>)>
static "ifAttr"<T>(arg0: $SerializationAttribute$$Type, arg1: $Endec$$Type<(T)>): $AttributeEndecBuilder<(T)>
 "keyed"(arg0: string, arg1: $Supplier$$Type<(T)>): $KeyedEndec<(T)>
 "keyed"(arg0: string, arg1: T): $KeyedEndec<(T)>
 "listOf"(): $Endec<($List<(T)>)>
 "mapOf"(): $Endec<($Map<(string), (T)>)>
static "dispatchedStruct"<T, K>(arg0: $Function$$Type<(K), ($StructEndec$$Type<(T)>)>, arg1: $Function$$Type<(T), (K)>, arg2: $Endec$$Type<(K)>, arg3: string): $Endec<(T)>
static "dispatchedStruct"<T, K>(arg0: $Function$$Type<(K), ($StructEndec$$Type<(T)>)>, arg1: $Function$$Type<(T), (K)>, arg2: $Endec$$Type<(K)>): $Endec<(T)>
 "optionalFieldOf"<S>(arg0: string, arg1: $Function$$Type<(S), (T)>, arg2: $Supplier$$Type<(T)>): $StructField<(S), (T)>
 "optionalFieldOf"<S>(arg0: string, arg1: $Function$$Type<(S), (T)>, arg2: T): $StructField<(S), (T)>
 "catchErrors"(arg0: $Endec$DecoderWithError$$Type<(T)>): $Endec<(T)>
 "nullableOf"(): $Endec<(T)>
static "forEnum"<E extends $Enum<(E)>>(arg0: $Class$$Type<(E)>): $Endec<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructEndec$$Type<T> = ($StructEndec<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructEndec_<T> = $StructEndec$$Type<(T)>;
}}
declare module "io.wispforest.owo.ui.core.Sizing" {
import {$Element, $Element$$Type} from "org.w3c.dom.Element"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$Sizing$Method, $Sizing$Method$$Type} from "io.wispforest.owo.ui.core.Sizing$Method"

export class $Sizing implements $Animatable<($Sizing)> {
readonly "method": $Sizing$Method
readonly "value": integer


public "isContent"(): boolean
public "equals"(o: any): boolean
public "hashCode"(): integer
public static "expand"(percent: integer): $Sizing
public static "expand"(): $Sizing
public "inflate"(space: integer, contentSizeFunction: $Function$$Type<($Sizing), (integer)>): integer
public static "fill"(percent: integer): $Sizing
public static "fill"(): $Sizing
public static "parse"(sizingElement: $Element$$Type): $Sizing
public static "fixed"(value: integer): $Sizing
public static "content"(): $Sizing
public static "content"(padding: integer): $Sizing
public "interpolate"(arg0: $Animatable$$Type<(any)>, arg1: float): $Animatable<(any)>
public "interpolate"(next: $Sizing$$Type, delta: float): $Sizing
public "contentFactor"(): float
public "isExpand"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Sizing$$Type = ($Sizing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Sizing_ = $Sizing$$Type;
}}
declare module "io.wispforest.owo.mixin.ScreenAccessor" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$CubeMap, $CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"
import {$PanoramaRenderer, $PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"

export interface $ScreenAccessor {

 "owo$addDrawableChild"<T extends ($GuiEventListener) & ($Renderable) & ($NarratableEntry)>(arg0: T): T

(arg0: T): T
}

export namespace $ScreenAccessor {
function owo$ROTATING_PANORAMA_RENDERER(): $PanoramaRenderer
function owo$PANORAMA_RENDERER(): $CubeMap
const probejs$$marker: never
}
export class $ScreenAccessor$$Static implements $ScreenAccessor {


static "owo$ROTATING_PANORAMA_RENDERER"(): $PanoramaRenderer
 "owo$addDrawableChild"<T extends ($GuiEventListener) & ($Renderable) & ($NarratableEntry)>(arg0: T): T
static "owo$PANORAMA_RENDERER"(): $CubeMap
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$$Type = ((arg0: T) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenAccessor_ = $ScreenAccessor$$Type;
}}
declare module "io.wispforest.owo.util.pond.OwoScreenHandlerExtension" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ScreenInternals$SyncPropertiesPacket, $ScreenInternals$SyncPropertiesPacket$$Type} from "io.wispforest.owo.client.screens.ScreenInternals$SyncPropertiesPacket"
import {$ScreenInternals$LocalPacket, $ScreenInternals$LocalPacket$$Type} from "io.wispforest.owo.client.screens.ScreenInternals$LocalPacket"

export interface $OwoScreenHandlerExtension {

 "owo$attachToPlayer"(arg0: $Player$$Type): void
 "owo$handlePacket"(arg0: $ScreenInternals$LocalPacket$$Type, arg1: boolean): void
 "owo$readPropertySync"(arg0: $ScreenInternals$SyncPropertiesPacket$$Type): void
}

export namespace $OwoScreenHandlerExtension {
const probejs$$marker: never
}
export class $OwoScreenHandlerExtension$$Static implements $OwoScreenHandlerExtension {


 "owo$attachToPlayer"(arg0: $Player$$Type): void
 "owo$handlePacket"(arg0: $ScreenInternals$LocalPacket$$Type, arg1: boolean): void
 "owo$readPropertySync"(arg0: $ScreenInternals$SyncPropertiesPacket$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoScreenHandlerExtension$$Type = ($OwoScreenHandlerExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwoScreenHandlerExtension_ = $OwoScreenHandlerExtension$$Type;
}}
declare module "io.wispforest.endec.SerializationContext" {
import {$SerializationAttribute, $SerializationAttribute$$Type} from "io.wispforest.endec.SerializationAttribute"
import {$SerializationAttribute$WithValue, $SerializationAttribute$WithValue$$Type} from "io.wispforest.endec.SerializationAttribute$WithValue"
import {$SerializationAttribute$Instance, $SerializationAttribute$Instance$$Type} from "io.wispforest.endec.SerializationAttribute$Instance"

export class $SerializationContext {


public "hasAttribute"(arg0: $SerializationAttribute$$Type): boolean
public "getAttributeValue"<A>(arg0: $SerializationAttribute$WithValue$$Type<(A)>): A
public static "empty"(): $SerializationContext
public static "suppressed"(...arg0: ($SerializationAttribute$$Type)[]): $SerializationContext
public static "attributes"(...arg0: ($SerializationAttribute$Instance$$Type)[]): $SerializationContext
public "and"(arg0: $SerializationContext$$Type): $SerializationContext
public "withAttributes"(...arg0: ($SerializationAttribute$Instance$$Type)[]): $SerializationContext
public "withoutAttributes"(...arg0: ($SerializationAttribute$$Type)[]): $SerializationContext
public "withoutSuppressed"(...arg0: ($SerializationAttribute$$Type)[]): $SerializationContext
public "requireAttributeValue"<A>(arg0: $SerializationAttribute$WithValue$$Type<(A)>): A
public "withSuppressed"(...arg0: ($SerializationAttribute$$Type)[]): $SerializationContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializationContext$$Type = ($SerializationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializationContext_ = $SerializationContext$$Type;
}}
declare module "io.wispforest.endec.Serializer$Struct" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$Endable, $Endable$$Type} from "io.wispforest.endec.util.Endable"
import {$SerializationContext, $SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"

export interface $Serializer$Struct extends $Endable {

 "field"<F>(arg0: string, arg1: $SerializationContext$$Type, arg2: $Endec$$Type<(F)>, arg3: F): $Serializer$Struct
 "end"(): void
 "close"(): void
}

export namespace $Serializer$Struct {
const probejs$$marker: never
}
export class $Serializer$Struct$$Static implements $Serializer$Struct {


 "field"<F>(arg0: string, arg1: $SerializationContext$$Type, arg2: $Endec$$Type<(F)>, arg3: F): $Serializer$Struct
 "end"(): void
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializer$Struct$$Type = ($Serializer$Struct);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Serializer$Struct_ = $Serializer$Struct$$Type;
}}
declare module "io.wispforest.owo.ui.core.OwoUIAdapter" {
import {$CursorAdapter, $CursorAdapter$$Type} from "io.wispforest.owo.ui.util.CursorAdapter"
import {$NarrationElementOutput, $NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"
import {$FocusNavigationEvent, $FocusNavigationEvent$$Type} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$ParentComponent, $ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$ScreenRectangle, $ScreenRectangle$$Type} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Sizing, $Sizing$$Type} from "io.wispforest.owo.ui.core.Sizing"
import {$ComponentPath, $ComponentPath$$Type} from "net.minecraft.client.gui.ComponentPath"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"
import {$NarratableEntry$NarrationPriority, $NarratableEntry$NarrationPriority$$Type} from "net.minecraft.client.gui.narration.NarratableEntry$NarrationPriority"

export class $OwoUIAdapter<R extends $ParentComponent> implements $GuiEventListener, $Renderable, $NarratableEntry {
readonly "cursorAdapter": $CursorAdapter
 "enableInspector": boolean
readonly "rootComponent": R
 "inspectorZOffset": integer
 "globalInspector": boolean


public "x"(): integer
public static "create"<R extends $ParentComponent>(screen: $Screen$$Type, rootComponentMaker: $BiFunction$$Type<($Sizing), ($Sizing), (R)>): $OwoUIAdapter<(R)>
public "y"(): integer
public "width"(): integer
public "dispose"(): void
public "keyPressed"(keyCode: integer, scanCode: integer, modifiers: integer): boolean
public "isMouseOver"(mouseX: double, mouseY: double): boolean
public "setFocused"(focused: boolean): void
public "mouseClicked"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseReleased"(mouseX: double, mouseY: double, button: integer): boolean
public "mouseDragged"(mouseX: double, mouseY: double, button: integer, deltaX: double, deltaY: double): boolean
public "mouseScrolled"(mouseX: double, mouseY: double, horizontalAmount: double, verticalAmount: double): boolean
public "charTyped"(chr: character, modifiers: integer): boolean
public "isFocused"(): boolean
public "height"(): integer
public "render"(context: $GuiGraphics$$Type, mouseX: integer, mouseY: integer, partialTicks: float): void
public "updateNarration"(builder: $NarrationElementOutput$$Type): void
public "narrationPriority"(): $NarratableEntry$NarrationPriority
public "inflateAndMount"(): void
public static "createWithoutScreen"<R extends $ParentComponent>(x: integer, y: integer, width: integer, height: integer, rootComponentMaker: $BiFunction$$Type<($Sizing), ($Sizing), (R)>): $OwoUIAdapter<(R)>
public static "isRendering"(): boolean
public "moveAndResize"(x: integer, y: integer, width: integer, height: integer): void
public "toggleGlobalInspector"(): boolean
public "toggleInspector"(): boolean
public "nextFocusPath"(arg0: $FocusNavigationEvent$$Type): $ComponentPath
public "getRectangle"(): $ScreenRectangle
public "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
public "mouseMoved"(arg0: double, arg1: double): void
public "getCurrentFocusPath"(): $ComponentPath
public "isActive"(): boolean
public "getTabOrderGroup"(): integer
set "focused"(value: boolean)
get "focused"(): boolean
get "rectangle"(): $ScreenRectangle
get "currentFocusPath"(): $ComponentPath
get "active"(): boolean
get "tabOrderGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoUIAdapter$$Type<R> = ($OwoUIAdapter<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwoUIAdapter_<R> = $OwoUIAdapter$$Type<(R)>;
}}
declare module "io.wispforest.endec.impl.StructField" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$Deserializer$Struct, $Deserializer$Struct$$Type} from "io.wispforest.endec.Deserializer$Struct"
import {$Serializer, $Serializer$$Type} from "io.wispforest.endec.Serializer"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$SerializationContext, $SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"
import {$Deserializer, $Deserializer$$Type} from "io.wispforest.endec.Deserializer"
import {$Serializer$Struct, $Serializer$Struct$$Type} from "io.wispforest.endec.Serializer$Struct"

export class $StructField<S, F> {

constructor(arg0: string, arg1: $Endec$$Type<(F)>, arg2: $Function$$Type<(S), (F)>)
constructor(arg0: string, arg1: $Endec$$Type<(F)>, arg2: $Function$$Type<(S), (F)>, arg3: F)
constructor(arg0: string, arg1: $Endec$$Type<(F)>, arg2: $Function$$Type<(S), (F)>, arg3: $Supplier$$Type<(F)>)

public "encodeField"(arg0: $SerializationContext$$Type, arg1: $Serializer$$Type<(any)>, arg2: $Serializer$Struct$$Type, arg3: S): void
public "decodeField"(arg0: $SerializationContext$$Type, arg1: $Deserializer$$Type<(any)>, arg2: $Deserializer$Struct$$Type): F
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructField$$Type<S, F> = ($StructField<(S), (F)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructField_<S, F> = $StructField$$Type<(S), (F)>;
}}
declare module "io.wispforest.owo.ui.event.FocusGained" {
import {$Component$FocusSource, $Component$FocusSource$$Type} from "io.wispforest.owo.ui.core.Component$FocusSource"
import {$EventStream, $EventStream$$Type} from "io.wispforest.owo.util.EventStream"

export interface $FocusGained {

 "onFocusGained"(arg0: $Component$FocusSource$$Type): void

(arg0: $Component$FocusSource): void
}

export namespace $FocusGained {
function newStream(): $EventStream<($FocusGained)>
const probejs$$marker: never
}
export class $FocusGained$$Static implements $FocusGained {


static "newStream"(): $EventStream<($FocusGained)>
 "onFocusGained"(arg0: $Component$FocusSource$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocusGained$$Type = ((arg0: $Component$FocusSource) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FocusGained_ = $FocusGained$$Type;
}}
declare module "io.wispforest.accessories.api.components.AccessoryItemAttributeModifiers$Builder" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AccessoryItemAttributeModifiers, $AccessoryItemAttributeModifiers$$Type} from "io.wispforest.accessories.api.components.AccessoryItemAttributeModifiers"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $AccessoryItemAttributeModifiers$Builder {


public "isEmpty"(): boolean
/**
 * 
 * @deprecated
 */
public "add"(holder: $Holder$$Type<($Attribute)>, attributeModifier: $AttributeModifier$$Type, slotName: string, isStackable: boolean): $AccessoryItemAttributeModifiers$Builder
public "build"(): $AccessoryItemAttributeModifiers
public "showInTooltip"(value: boolean): $AccessoryItemAttributeModifiers$Builder
public "addForAny"(holder: $Holder$$Type<($Attribute)>, attributeModifier: $AttributeModifier$$Type, isStackable: boolean): $AccessoryItemAttributeModifiers$Builder
public "addForSlot"(holder: $Holder$$Type<($Attribute)>, attributeModifier: $AttributeModifier$$Type, slotName: string, isStackable: boolean): $AccessoryItemAttributeModifiers$Builder
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryItemAttributeModifiers$Builder$$Type = ($AccessoryItemAttributeModifiers$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoryItemAttributeModifiers$Builder_ = $AccessoryItemAttributeModifiers$Builder$$Type;
}}
declare module "io.wispforest.owo.mixin.BufferBuilderAccessor" {
import {$VertexFormat$Mode, $VertexFormat$Mode$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import {$VertexFormat, $VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"

export interface $BufferBuilderAccessor {

 "getFormat"(): $VertexFormat
 "getDrawMode"(): $VertexFormat$Mode
 "isBuilding"(): boolean
get "format"(): $VertexFormat
get "drawMode"(): $VertexFormat$Mode
get "building"(): boolean
}

export namespace $BufferBuilderAccessor {
const probejs$$marker: never
}
export class $BufferBuilderAccessor$$Static implements $BufferBuilderAccessor {


 "getFormat"(): $VertexFormat
 "getDrawMode"(): $VertexFormat$Mode
 "isBuilding"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferBuilderAccessor$$Type = ($BufferBuilderAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferBuilderAccessor_ = $BufferBuilderAccessor$$Type;
}}
declare module "io.wispforest.owo.mixin.ui.access.BlockEntityAccessor" {
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockEntityAccessor {

 "owo$setCachedState"(arg0: $BlockState$$Type): void

(arg0: $BlockState): void
}

export namespace $BlockEntityAccessor {
const probejs$$marker: never
}
export class $BlockEntityAccessor$$Static implements $BlockEntityAccessor {


 "owo$setCachedState"(arg0: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityAccessor$$Type = ((arg0: $BlockState) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityAccessor_ = $BlockEntityAccessor$$Type;
}}
declare module "io.wispforest.owo.mixin.ui.layers.HandledScreenAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $HandledScreenAccessor {

 "owo$getRootX"(): integer
 "owo$getRootY"(): integer
}

export namespace $HandledScreenAccessor {
const probejs$$marker: never
}
export class $HandledScreenAccessor$$Static implements $HandledScreenAccessor {


 "owo$getRootX"(): integer
 "owo$getRootY"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandledScreenAccessor$$Type = ($HandledScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HandledScreenAccessor_ = $HandledScreenAccessor$$Type;
}}
declare module "io.wispforest.accessories.api.events.extra.AllowWalkingOnSnow" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TriState, $TriState$$Type} from "net.fabricmc.fabric.api.util.TriState"
import {$Event, $Event$$Type} from "net.fabricmc.fabric.api.event.Event"
import {$SlotReference, $SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export interface $AllowWalkingOnSnow {

 "allowWalkingOnSnow"(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type): $TriState

(arg0: $ItemStack, arg1: $SlotReference): $TriState$$Type
}

export namespace $AllowWalkingOnSnow {
const EVENT: $Event<($AllowWalkingOnSnow)>
const probejs$$marker: never
}
export class $AllowWalkingOnSnow$$Static implements $AllowWalkingOnSnow {
static readonly "EVENT": $Event<($AllowWalkingOnSnow)>


 "allowWalkingOnSnow"(arg0: $ItemStack$$Type, arg1: $SlotReference$$Type): $TriState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AllowWalkingOnSnow$$Type = ((arg0: $ItemStack, arg1: $SlotReference) => $TriState$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AllowWalkingOnSnow_ = $AllowWalkingOnSnow$$Type;
}}
declare module "io.wispforest.owo.ui.core.Animatable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Animatable<T extends $Animatable<(T)>> {

 "interpolate"(arg0: T, arg1: float): T

(arg0: T, arg1: float): T
}

export namespace $Animatable {
const probejs$$marker: never
}
export class $Animatable$$Static<T extends $Animatable<(T)>> implements $Animatable {


 "interpolate"(arg0: T, arg1: float): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animatable$$Type<T> = ((arg0: T, arg1: float) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animatable_<T> = $Animatable$$Type<(T)>;
}}
declare module "io.wispforest.endec.Endec" {
import {$StructEndec, $StructEndec$$Type} from "io.wispforest.endec.StructEndec"
import {$Endec$Decoder, $Endec$Decoder$$Type} from "io.wispforest.endec.Endec$Decoder"
import {$SerializationAttribute, $SerializationAttribute$$Type} from "io.wispforest.endec.SerializationAttribute"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$StructField, $StructField$$Type} from "io.wispforest.endec.impl.StructField"
import {$SerializationContext, $SerializationContext$$Type} from "io.wispforest.endec.SerializationContext"
import {$Deserializer, $Deserializer$$Type} from "io.wispforest.endec.Deserializer"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$AttributeEndecBuilder, $AttributeEndecBuilder$$Type} from "io.wispforest.endec.impl.AttributeEndecBuilder"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Serializer, $Serializer$$Type} from "io.wispforest.endec.Serializer"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Endec$Encoder, $Endec$Encoder$$Type} from "io.wispforest.endec.Endec$Encoder"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Endec$DecoderWithError, $Endec$DecoderWithError$$Type} from "io.wispforest.endec.Endec$DecoderWithError"
import {$KeyedEndec, $KeyedEndec$$Type} from "io.wispforest.endec.impl.KeyedEndec"

export interface $Endec<T> {

 "decode"(arg0: $SerializationContext$$Type, arg1: $Deserializer$$Type<(any)>): T
 "encode"(arg0: $SerializationContext$$Type, arg1: $Serializer$$Type<(any)>, arg2: T): void
 "validate"(arg0: $Consumer$$Type<(T)>): $Endec<(T)>
 "optionalOf"(): $Endec<($Optional<(T)>)>
 "fieldOf"<S>(arg0: string, arg1: $Function$$Type<(S), (T)>): $StructField<(S), (T)>
 "decodeFully"<E>(arg0: $Function$$Type<(E), ($Deserializer$$Type<(E)>)>, arg1: E): T
 "decodeFully"<E>(arg0: $SerializationContext$$Type, arg1: $Function$$Type<(E), ($Deserializer$$Type<(E)>)>, arg2: E): T
 "encodeFully"<E>(arg0: $Supplier$$Type<($Serializer$$Type<(E)>)>, arg1: T): E
 "encodeFully"<E>(arg0: $SerializationContext$$Type, arg1: $Supplier$$Type<($Serializer$$Type<(E)>)>, arg2: T): E
 "setOf"(): $Endec<($Set<(T)>)>
 "keyed"(arg0: string, arg1: $Supplier$$Type<(T)>): $KeyedEndec<(T)>
 "keyed"(arg0: string, arg1: T): $KeyedEndec<(T)>
 "listOf"(): $Endec<($List<(T)>)>
 "mapOf"(): $Endec<($Map<(string), (T)>)>
 "xmap"<R>(arg0: $Function$$Type<(T), (R)>, arg1: $Function$$Type<(R), (T)>): $Endec<(R)>
 "xmapWithContext"<R>(arg0: $BiFunction$$Type<($SerializationContext), (T), (R)>, arg1: $BiFunction$$Type<($SerializationContext), (R), (T)>): $Endec<(R)>
 "optionalFieldOf"<S>(arg0: string, arg1: $Function$$Type<(S), (T)>, arg2: $Supplier$$Type<(T)>): $StructField<(S), (T)>
 "optionalFieldOf"<S>(arg0: string, arg1: $Function$$Type<(S), (T)>, arg2: T): $StructField<(S), (T)>
 "catchErrors"(arg0: $Endec$DecoderWithError$$Type<(T)>): $Endec<(T)>
 "nullableOf"(): $Endec<(T)>
}

export namespace $Endec {
const BYTES: $Endec<((byte)[])>
const VAR_LONG: $Endec<(long)>
const FLOAT: $Endec<(float)>
const VAR_INT: $Endec<(integer)>
const BYTE: $Endec<(byte)>
const STRING: $Endec<(string)>
const DOUBLE: $Endec<(double)>
const VOID: $Endec<(void)>
const BOOLEAN: $Endec<(boolean)>
const INT: $Endec<(integer)>
const SHORT: $Endec<(short)>
const LONG: $Endec<(long)>
function map<K, V>(arg0: $Endec$$Type<(K)>, arg1: $Endec$$Type<(V)>): $Endec<($Map<(K), (V)>)>
function map<K, V>(arg0: $Function$$Type<(K), (string)>, arg1: $Function$$Type<(string), (K)>, arg2: $Endec$$Type<(V)>): $Endec<($Map<(K), (V)>)>
function of<T>(arg0: $Endec$Encoder$$Type<(T)>, arg1: $Endec$Decoder$$Type<(T)>): $Endec<(T)>
function dispatched<T, K>(arg0: $Function$$Type<(K), ($Endec$$Type<(T)>)>, arg1: $Function$$Type<(T), (K)>, arg2: $Endec$$Type<(K)>): $Endec<(T)>
function ifAttr<T>(arg0: $SerializationAttribute$$Type, arg1: $Endec$$Type<(T)>): $AttributeEndecBuilder<(T)>
function dispatchedStruct<T, K>(arg0: $Function$$Type<(K), ($StructEndec$$Type<(T)>)>, arg1: $Function$$Type<(T), (K)>, arg2: $Endec$$Type<(K)>, arg3: string): $Endec<(T)>
function dispatchedStruct<T, K>(arg0: $Function$$Type<(K), ($StructEndec$$Type<(T)>)>, arg1: $Function$$Type<(T), (K)>, arg2: $Endec$$Type<(K)>): $Endec<(T)>
function forEnum<E extends $Enum<(E)>>(arg0: $Class$$Type<(E)>): $Endec<(E)>
const probejs$$marker: never
}
export class $Endec$$Static<T> implements $Endec {
static readonly "BYTES": $Endec<((byte)[])>
static readonly "VAR_LONG": $Endec<(long)>
static readonly "FLOAT": $Endec<(float)>
static readonly "VAR_INT": $Endec<(integer)>
static readonly "BYTE": $Endec<(byte)>
static readonly "STRING": $Endec<(string)>
static readonly "DOUBLE": $Endec<(double)>
static readonly "VOID": $Endec<(void)>
static readonly "BOOLEAN": $Endec<(boolean)>
static readonly "INT": $Endec<(integer)>
static readonly "SHORT": $Endec<(short)>
static readonly "LONG": $Endec<(long)>


 "decode"(arg0: $SerializationContext$$Type, arg1: $Deserializer$$Type<(any)>): T
 "encode"(arg0: $SerializationContext$$Type, arg1: $Serializer$$Type<(any)>, arg2: T): void
static "map"<K, V>(arg0: $Endec$$Type<(K)>, arg1: $Endec$$Type<(V)>): $Endec<($Map<(K), (V)>)>
static "map"<K, V>(arg0: $Function$$Type<(K), (string)>, arg1: $Function$$Type<(string), (K)>, arg2: $Endec$$Type<(V)>): $Endec<($Map<(K), (V)>)>
static "of"<T>(arg0: $Endec$Encoder$$Type<(T)>, arg1: $Endec$Decoder$$Type<(T)>): $Endec<(T)>
 "validate"(arg0: $Consumer$$Type<(T)>): $Endec<(T)>
 "optionalOf"(): $Endec<($Optional<(T)>)>
 "fieldOf"<S>(arg0: string, arg1: $Function$$Type<(S), (T)>): $StructField<(S), (T)>
 "decodeFully"<E>(arg0: $Function$$Type<(E), ($Deserializer$$Type<(E)>)>, arg1: E): T
 "decodeFully"<E>(arg0: $SerializationContext$$Type, arg1: $Function$$Type<(E), ($Deserializer$$Type<(E)>)>, arg2: E): T
 "encodeFully"<E>(arg0: $Supplier$$Type<($Serializer$$Type<(E)>)>, arg1: T): E
 "encodeFully"<E>(arg0: $SerializationContext$$Type, arg1: $Supplier$$Type<($Serializer$$Type<(E)>)>, arg2: T): E
static "dispatched"<T, K>(arg0: $Function$$Type<(K), ($Endec$$Type<(T)>)>, arg1: $Function$$Type<(T), (K)>, arg2: $Endec$$Type<(K)>): $Endec<(T)>
 "setOf"(): $Endec<($Set<(T)>)>
static "ifAttr"<T>(arg0: $SerializationAttribute$$Type, arg1: $Endec$$Type<(T)>): $AttributeEndecBuilder<(T)>
 "keyed"(arg0: string, arg1: $Supplier$$Type<(T)>): $KeyedEndec<(T)>
 "keyed"(arg0: string, arg1: T): $KeyedEndec<(T)>
 "listOf"(): $Endec<($List<(T)>)>
 "mapOf"(): $Endec<($Map<(string), (T)>)>
 "xmap"<R>(arg0: $Function$$Type<(T), (R)>, arg1: $Function$$Type<(R), (T)>): $Endec<(R)>
static "dispatchedStruct"<T, K>(arg0: $Function$$Type<(K), ($StructEndec$$Type<(T)>)>, arg1: $Function$$Type<(T), (K)>, arg2: $Endec$$Type<(K)>, arg3: string): $Endec<(T)>
static "dispatchedStruct"<T, K>(arg0: $Function$$Type<(K), ($StructEndec$$Type<(T)>)>, arg1: $Function$$Type<(T), (K)>, arg2: $Endec$$Type<(K)>): $Endec<(T)>
 "xmapWithContext"<R>(arg0: $BiFunction$$Type<($SerializationContext), (T), (R)>, arg1: $BiFunction$$Type<($SerializationContext), (R), (T)>): $Endec<(R)>
 "optionalFieldOf"<S>(arg0: string, arg1: $Function$$Type<(S), (T)>, arg2: $Supplier$$Type<(T)>): $StructField<(S), (T)>
 "optionalFieldOf"<S>(arg0: string, arg1: $Function$$Type<(S), (T)>, arg2: T): $StructField<(S), (T)>
 "catchErrors"(arg0: $Endec$DecoderWithError$$Type<(T)>): $Endec<(T)>
 "nullableOf"(): $Endec<(T)>
static "forEnum"<E extends $Enum<(E)>>(arg0: $Class$$Type<(E)>): $Endec<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endec$$Type<T> = ($Endec<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Endec_<T> = $Endec$$Type<(T)>;
}}
declare module "io.wispforest.accessories.impl.ExpandedSimpleContainer" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$SimpleContainer, $SimpleContainer$$Type} from "net.minecraft.world.SimpleContainer"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AccessoriesContainerImpl, $AccessoriesContainerImpl$$Type} from "io.wispforest.accessories.impl.AccessoriesContainerImpl"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $ExpandedSimpleContainer extends $SimpleContainer implements $Iterable<($Pair<(integer), ($ItemStack)>)> {
 "size": integer
 "items": $NonNullList<($ItemStack)>

constructor(container: $AccessoriesContainerImpl$$Type, size: integer, name: string, toggleNewlyConstructed: boolean)
constructor(container: $AccessoriesContainerImpl$$Type, size: integer, name: string)

public "removeItem"(slot: integer, amount: integer): $ItemStack
public "createTag"(provider: $HolderLookup$Provider$$Type): $ListTag
public "name"(): string
public "iterator"(): $Iterator<($Pair<(integer), ($ItemStack)>)>
public "validIndex"(slot: integer): boolean
public "getItem"(slot: integer): $ItemStack
public "setItem"(slot: integer, stack: $ItemStack$$Type): void
public "fromTag"(containerNbt: $ListTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "parseOptional"(lookupProvider: $HolderLookup$Provider$$Type, tag: $Tag$$Type): $ItemStack
public "wasNewlyConstructed"(): boolean
public "setPreviousItem"(slot: integer, stack: $ItemStack$$Type): void
public "getPreviousItem"(slot: integer): $ItemStack
public "removeItemNoUpdate"(slot: integer): $ItemStack
public "getMaxStackSize"(itemStack: $ItemStack$$Type): integer
public "isSlotFlagged"(slot: integer): boolean
public "setFromPrev"(prevContainer: $ExpandedSimpleContainer$$Type): void
public "copyPrev"(prevContainer: $ExpandedSimpleContainer$$Type): void
public "spliterator"(): $Spliterator<($Pair<(integer), ($ItemStack)>)>
public "forEach"(arg0: $Consumer$$Type<($Pair<(integer), ($ItemStack)>)>): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "tryClear"(arg0: any): void
[Symbol.iterator](): IterableIterator<$Pair<(integer), ($ItemStack)>>;
set "fromPrev"(value: $ExpandedSimpleContainer$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExpandedSimpleContainer$$Type = ($ExpandedSimpleContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExpandedSimpleContainer_ = $ExpandedSimpleContainer$$Type;
}}
declare module "io.wispforest.owo.ui.core.Positioning" {
import {$Element, $Element$$Type} from "org.w3c.dom.Element"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$Positioning$Type, $Positioning$Type$$Type} from "io.wispforest.owo.ui.core.Positioning$Type"

export class $Positioning implements $Animatable<($Positioning)> {
readonly "x": integer
readonly "y": integer
readonly "type": $Positioning$Type


public "equals"(o: any): boolean
public "hashCode"(): integer
public static "parse"(positioningElement: $Element$$Type): $Positioning
public "isRelative"(): boolean
public static "layout"(): $Positioning
public static "absolute"(xPixels: integer, yPixels: integer): $Positioning
public static "relative"(xPercent: integer, yPercent: integer): $Positioning
public "interpolate"(arg0: $Animatable$$Type<(any)>, arg1: float): $Animatable<(any)>
public "interpolate"(next: $Positioning$$Type, delta: float): $Positioning
public "withX"(x: integer): $Positioning
public "withY"(y: integer): $Positioning
public static "across"(xPercent: integer, yPercent: integer): $Positioning
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Positioning$$Type = ($Positioning);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Positioning_ = $Positioning$$Type;
}}
declare module "io.wispforest.owo.mixin.ServerCommonNetworkHandlerAccessor" {
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export interface $ServerCommonNetworkHandlerAccessor {

 "owo$getConnection"(): $Connection
 "owo$server"(): $MinecraftServer
}

export namespace $ServerCommonNetworkHandlerAccessor {
const probejs$$marker: never
}
export class $ServerCommonNetworkHandlerAccessor$$Static implements $ServerCommonNetworkHandlerAccessor {


 "owo$getConnection"(): $Connection
 "owo$server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommonNetworkHandlerAccessor$$Type = ($ServerCommonNetworkHandlerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerCommonNetworkHandlerAccessor_ = $ServerCommonNetworkHandlerAccessor$$Type;
}}
declare module "io.wispforest.owo.ui.core.HorizontalAlignment" {
import {$Element, $Element$$Type} from "org.w3c.dom.Element"
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $HorizontalAlignment extends $Enum<($HorizontalAlignment)> {
static readonly "CENTER": $HorizontalAlignment
static readonly "LEFT": $HorizontalAlignment
static readonly "RIGHT": $HorizontalAlignment


public static "values"(): ($HorizontalAlignment)[]
public static "valueOf"(name: string): $HorizontalAlignment
public static "parse"(element: $Element$$Type): $HorizontalAlignment
public "align"(componentWidth: integer, span: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HorizontalAlignment$$Type = (("left") | ("center") | ("right"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HorizontalAlignment_ = $HorizontalAlignment$$Type;
}}
declare module "io.wispforest.owo.itemgroup.Icon" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"

export interface $Icon {

 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: float): void

(arg0: $GuiGraphics, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: float): void
}

export namespace $Icon {
function of(texture: $ResourceLocation$$Type, u: integer, v: integer, textureWidth: integer, textureHeight: integer): $Icon
function of(texture: $ResourceLocation$$Type, textureSize: integer, frameDelay: integer, loop: boolean): $Icon
function of(stack: $ItemStack$$Type): $Icon
function of(item: $ItemLike$$Type): $Icon
const probejs$$marker: never
}
export class $Icon$$Static implements $Icon {


static "of"(texture: $ResourceLocation$$Type, u: integer, v: integer, textureWidth: integer, textureHeight: integer): $Icon
static "of"(texture: $ResourceLocation$$Type, textureSize: integer, frameDelay: integer, loop: boolean): $Icon
static "of"(stack: $ItemStack$$Type): $Icon
static "of"(item: $ItemLike$$Type): $Icon
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Icon$$Type = ((arg0: $GuiGraphics, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: float) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Icon_ = $Icon$$Type;
}}
declare module "io.wispforest.accessories.mixin.SlotAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlotAccessor {

 "accessories$setY"(arg0: integer): void

(arg0: integer): void
}

export namespace $SlotAccessor {
const probejs$$marker: never
}
export class $SlotAccessor$$Static implements $SlotAccessor {


 "accessories$setY"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotAccessor$$Type = ((arg0: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotAccessor_ = $SlotAccessor$$Type;
}}
declare module "io.wispforest.owo.ui.core.Component" {
import {$EventSource, $EventSource$$Type} from "io.wispforest.owo.util.EventSource"
import {$PositionedRectangle, $PositionedRectangle$$Type} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$List, $List$$Type} from "java.util.List"
import {$Component as $Component$0, $Component$$Type as $Component$0$$Type} from "net.minecraft.network.chat.Component"
import {$CharTyped, $CharTyped$$Type} from "io.wispforest.owo.ui.event.CharTyped"
import {$OwoUIDrawContext, $OwoUIDrawContext$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext"
import {$FocusGained, $FocusGained$$Type} from "io.wispforest.owo.ui.event.FocusGained"
import {$ParentComponent, $ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Positioning, $Positioning$$Type} from "io.wispforest.owo.ui.core.Positioning"
import {$KeyPress, $KeyPress$$Type} from "io.wispforest.owo.ui.event.KeyPress"
import {$AnimatableProperty, $AnimatableProperty$$Type} from "io.wispforest.owo.ui.core.AnimatableProperty"
import {$Insets, $Insets$$Type} from "io.wispforest.owo.ui.core.Insets"
import {$MouseScroll, $MouseScroll$$Type} from "io.wispforest.owo.ui.event.MouseScroll"
import {$MouseDown, $MouseDown$$Type} from "io.wispforest.owo.ui.event.MouseDown"
import {$CursorStyle, $CursorStyle$$Type} from "io.wispforest.owo.ui.core.CursorStyle"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Element, $Element$$Type} from "org.w3c.dom.Element"
import {$Map, $Map$$Type} from "java.util.Map"
import {$UIModel, $UIModel$$Type} from "io.wispforest.owo.ui.parsing.UIModel"
import {$Component$FocusSource, $Component$FocusSource$$Type} from "io.wispforest.owo.ui.core.Component$FocusSource"
import {$MouseUp, $MouseUp$$Type} from "io.wispforest.owo.ui.event.MouseUp"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ClientTooltipComponent, $ClientTooltipComponent$$Type} from "net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent"
import {$Component$DismountReason, $Component$DismountReason$$Type} from "io.wispforest.owo.ui.core.Component$DismountReason"
import {$FocusLost, $FocusLost$$Type} from "io.wispforest.owo.ui.event.FocusLost"
import {$FocusHandler, $FocusHandler$$Type} from "io.wispforest.owo.ui.util.FocusHandler"
import {$MouseDrag, $MouseDrag$$Type} from "io.wispforest.owo.ui.event.MouseDrag"
import {$Sizing, $Sizing$$Type} from "io.wispforest.owo.ui.core.Sizing"
import {$MouseEnter, $MouseEnter$$Type} from "io.wispforest.owo.ui.event.MouseEnter"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$MouseLeave, $MouseLeave$$Type} from "io.wispforest.owo.ui.event.MouseLeave"
import {$Size, $Size$$Type} from "io.wispforest.owo.ui.core.Size"

export interface $Component extends $PositionedRectangle {

 "remove"(): void
 "parent"(): $ParentComponent
 "inflate"(arg0: $Size$$Type): void
 "update"(delta: float, mouseX: integer, mouseY: integer): void
 "x"(): integer
 "id"(): string
 "id"(arg0: string): $Component
 "root"(): $ParentComponent
 "mount"(arg0: $ParentComponent$$Type, arg1: integer, arg2: integer): void
 "y"(): integer
 "width"(): integer
 "configure"<C extends $Component>(arg0: $Consumer$$Type<(C)>): C
 "dismount"(arg0: $Component$DismountReason$$Type): void
 "tooltip"(tooltip: $Component$0$$Type): $Component
 "tooltip"(tooltip: $Collection$$Type<($Component$0$$Type)>): $Component
 "tooltip"(): $List<($ClientTooltipComponent)>
 "tooltip"(arg0: $List$$Type<($ClientTooltipComponent$$Type)>): $Component
 "charTyped"(): $EventSource<($CharTyped)>
 "height"(): integer
 "draw"(arg0: $OwoUIDrawContext$$Type, arg1: integer, arg2: integer, arg3: float, arg4: float): void
 "moveTo"(x: integer, y: integer): void
 "sizing"(sizing: $Sizing$$Type): $Component
 "sizing"(horizontalSizing: $Sizing$$Type, verticalSizing: $Sizing$$Type): $Component
 "zIndex"(arg0: integer): $Component
 "zIndex"(): integer
 "baseX"(): integer
 "baseY"(): integer
 "horizontalSizing"(arg0: $Sizing$$Type): $Component
 "horizontalSizing"(): $AnimatableProperty<($Sizing)>
 "shouldDrawTooltip"(mouseX: double, mouseY: double): boolean
 "parseProperties"(model: $UIModel$$Type, element: $Element$$Type, children: $Map$$Type<(string), ($Element$$Type)>): void
 "drawFocusHighlight"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "isInBoundingBox"(x: double, y: double): boolean
 "focusHandler"(): $FocusHandler
 "positioning"(): $AnimatableProperty<($Positioning)>
 "positioning"(arg0: $Positioning$$Type): $Component
 "margins"(): $AnimatableProperty<($Insets)>
 "margins"(arg0: $Insets$$Type): $Component
 "verticalSizing"(arg0: $Sizing$$Type): $Component
 "verticalSizing"(): $AnimatableProperty<($Sizing)>
 "mouseDown"(): $EventSource<($MouseDown)>
 "cursorStyle"(): $CursorStyle
 "cursorStyle"(arg0: $CursorStyle$$Type): $Component
 "onMouseDown"(arg0: double, arg1: double, arg2: integer): boolean
 "onMouseUp"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseUp"(): $EventSource<($MouseUp)>
 "mouseScroll"(): $EventSource<($MouseScroll)>
 "mouseDrag"(): $EventSource<($MouseDrag)>
 "keyPress"(): $EventSource<($KeyPress)>
 "focusGained"(): $EventSource<($FocusGained)>
 "focusLost"(): $EventSource<($FocusLost)>
 "mouseEnter"(): $EventSource<($MouseEnter)>
 "mouseLeave"(): $EventSource<($MouseLeave)>
 "onMouseScroll"(arg0: double, arg1: double, arg2: double): boolean
 "onMouseDrag"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer): boolean
 "onKeyPress"(arg0: integer, arg1: integer, arg2: integer): boolean
 "onCharTyped"(arg0: character, arg1: integer): boolean
 "canFocus"(source: $Component$FocusSource$$Type): boolean
 "onFocusGained"(arg0: $Component$FocusSource$$Type): void
 "onFocusLost"(): void
 "updateX"(arg0: integer): void
 "updateY"(arg0: integer): void
 "drawTooltip"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "hasParent"(): boolean
 "fullSize"(): $Size
 "intersects"(other: $PositionedRectangle$$Type): boolean
 "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
 "interpolate"(arg0: $Animatable$$Type<(any)>, arg1: float): $Animatable<(any)>
 "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
}

export namespace $Component {
function of(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
function of(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
const probejs$$marker: never
}
export class $Component$$Static implements $Component {


 "remove"(): void
 "parent"(): $ParentComponent
 "inflate"(arg0: $Size$$Type): void
 "update"(delta: float, mouseX: integer, mouseY: integer): void
 "x"(): integer
 "id"(): string
 "id"(arg0: string): $Component
 "root"(): $ParentComponent
 "mount"(arg0: $ParentComponent$$Type, arg1: integer, arg2: integer): void
 "y"(): integer
 "width"(): integer
 "configure"<C extends $Component>(arg0: $Consumer$$Type<(C)>): C
 "dismount"(arg0: $Component$DismountReason$$Type): void
 "tooltip"(tooltip: $Component$0$$Type): $Component
 "tooltip"(tooltip: $Collection$$Type<($Component$0$$Type)>): $Component
 "tooltip"(): $List<($ClientTooltipComponent)>
 "tooltip"(arg0: $List$$Type<($ClientTooltipComponent$$Type)>): $Component
 "charTyped"(): $EventSource<($CharTyped)>
 "height"(): integer
 "draw"(arg0: $OwoUIDrawContext$$Type, arg1: integer, arg2: integer, arg3: float, arg4: float): void
 "moveTo"(x: integer, y: integer): void
 "sizing"(sizing: $Sizing$$Type): $Component
 "sizing"(horizontalSizing: $Sizing$$Type, verticalSizing: $Sizing$$Type): $Component
 "zIndex"(arg0: integer): $Component
 "zIndex"(): integer
 "baseX"(): integer
 "baseY"(): integer
 "horizontalSizing"(arg0: $Sizing$$Type): $Component
 "horizontalSizing"(): $AnimatableProperty<($Sizing)>
 "shouldDrawTooltip"(mouseX: double, mouseY: double): boolean
 "parseProperties"(model: $UIModel$$Type, element: $Element$$Type, children: $Map$$Type<(string), ($Element$$Type)>): void
 "drawFocusHighlight"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "isInBoundingBox"(x: double, y: double): boolean
 "focusHandler"(): $FocusHandler
 "positioning"(): $AnimatableProperty<($Positioning)>
 "positioning"(arg0: $Positioning$$Type): $Component
 "margins"(): $AnimatableProperty<($Insets)>
 "margins"(arg0: $Insets$$Type): $Component
 "verticalSizing"(arg0: $Sizing$$Type): $Component
 "verticalSizing"(): $AnimatableProperty<($Sizing)>
 "mouseDown"(): $EventSource<($MouseDown)>
 "cursorStyle"(): $CursorStyle
 "cursorStyle"(arg0: $CursorStyle$$Type): $Component
 "onMouseDown"(arg0: double, arg1: double, arg2: integer): boolean
 "onMouseUp"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseUp"(): $EventSource<($MouseUp)>
 "mouseScroll"(): $EventSource<($MouseScroll)>
 "mouseDrag"(): $EventSource<($MouseDrag)>
 "keyPress"(): $EventSource<($KeyPress)>
 "focusGained"(): $EventSource<($FocusGained)>
 "focusLost"(): $EventSource<($FocusLost)>
 "mouseEnter"(): $EventSource<($MouseEnter)>
 "mouseLeave"(): $EventSource<($MouseLeave)>
 "onMouseScroll"(arg0: double, arg1: double, arg2: double): boolean
 "onMouseDrag"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: integer): boolean
 "onKeyPress"(arg0: integer, arg1: integer, arg2: integer): boolean
 "onCharTyped"(arg0: character, arg1: integer): boolean
 "canFocus"(source: $Component$FocusSource$$Type): boolean
 "onFocusGained"(arg0: $Component$FocusSource$$Type): void
 "onFocusLost"(): void
 "updateX"(arg0: integer): void
 "updateY"(arg0: integer): void
 "drawTooltip"(context: $OwoUIDrawContext$$Type, mouseX: integer, mouseY: integer, partialTicks: float, delta: float): void
 "hasParent"(): boolean
 "fullSize"(): $Size
 "intersects"(other: $PositionedRectangle$$Type): boolean
 "intersection"(other: $PositionedRectangle$$Type): $PositionedRectangle
static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
 "interpolate"(arg0: $Animatable$$Type<(any)>, arg1: float): $Animatable<(any)>
 "interpolate"(next: $PositionedRectangle$$Type, delta: float): $PositionedRectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Component$$Type = ($Component);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Component_ = $Component$$Type;
}}
declare module "io.wispforest.accessories.mixin.DelegatingOpsAccessor" {
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"

export interface $DelegatingOpsAccessor<T> {

 "delegate"(): $DynamicOps<(T)>

(): $DynamicOps$$Type<(T)>
}

export namespace $DelegatingOpsAccessor {
const probejs$$marker: never
}
export class $DelegatingOpsAccessor$$Static<T> implements $DelegatingOpsAccessor {


 "delegate"(): $DynamicOps<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DelegatingOpsAccessor$$Type<T> = (() => $DynamicOps$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DelegatingOpsAccessor_<T> = $DelegatingOpsAccessor$$Type<(T)>;
}}
declare module "io.wispforest.owo.mixin.shader.ShaderProgramAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Uniform, $Uniform$$Type} from "com.mojang.blaze3d.shaders.Uniform"

export interface $ShaderProgramAccessor {

 "owo$getLoadedUniforms"(): $Map<(string), ($Uniform)>

(): $Map$$Type<(string), ($Uniform$$Type)>
}

export namespace $ShaderProgramAccessor {
const probejs$$marker: never
}
export class $ShaderProgramAccessor$$Static implements $ShaderProgramAccessor {


 "owo$getLoadedUniforms"(): $Map<(string), ($Uniform)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderProgramAccessor$$Type = (() => $Map$$Type<(string), ($Uniform$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShaderProgramAccessor_ = $ShaderProgramAccessor$$Type;
}}
declare module "io.wispforest.owo.itemgroup.gui.ItemGroupButton" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$OwoItemGroup$ButtonDefinition, $OwoItemGroup$ButtonDefinition$$Type} from "io.wispforest.owo.itemgroup.OwoItemGroup$ButtonDefinition"
import {$Icon, $Icon$$Type} from "io.wispforest.owo.itemgroup.Icon"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $ItemGroupButton implements $OwoItemGroup$ButtonDefinition {
static readonly "ICONS_TEXTURE": $ResourceLocation

constructor(group: $CreativeModeTab$$Type, icon: $Icon$$Type, name: string, texture: $ResourceLocation$$Type, action: $Runnable$$Type)
constructor(group: $CreativeModeTab$$Type, icon: $Icon$$Type, name: string, action: $Runnable$$Type)

public "action"(): $Runnable
public static "link"(group: $CreativeModeTab$$Type, icon: $Icon$$Type, name: string, url: string): $ItemGroupButton
public "tooltip"(): $Component
public "texture"(): $ResourceLocation
public "icon"(): $Icon
public static "github"(group: $CreativeModeTab$$Type, url: string): $ItemGroupButton
public static "modrinth"(group: $CreativeModeTab$$Type, url: string): $ItemGroupButton
public static "curseforge"(group: $CreativeModeTab$$Type, url: string): $ItemGroupButton
public static "discord"(group: $CreativeModeTab$$Type, url: string): $ItemGroupButton
public static "tooltipFor"(group: $CreativeModeTab$$Type, component: string, componentName: string): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGroupButton$$Type = ($ItemGroupButton);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemGroupButton_ = $ItemGroupButton$$Type;
}}
declare module "io.wispforest.owo.itemgroup.gui.ItemGroupTab" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$OwoItemGroup$ButtonDefinition, $OwoItemGroup$ButtonDefinition$$Type} from "io.wispforest.owo.itemgroup.OwoItemGroup$ButtonDefinition"
import {$Icon, $Icon$$Type} from "io.wispforest.owo.itemgroup.Icon"
import {$ItemGroupTab$ContentSupplier, $ItemGroupTab$ContentSupplier$$Type} from "io.wispforest.owo.itemgroup.gui.ItemGroupTab$ContentSupplier"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ItemGroupTab extends $Record implements $OwoItemGroup$ButtonDefinition {
static readonly "DEFAULT_TEXTURE": $ResourceLocation

constructor(icon: $Icon$$Type, name: $Component$$Type, contentSupplier: $ItemGroupTab$ContentSupplier$$Type, texture: $ResourceLocation$$Type, primary: boolean)

public "name"(): $Component
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "tooltip"(): $Component
public "texture"(): $ResourceLocation
public "primary"(): boolean
public "icon"(): $Icon
public "contentSupplier"(): $ItemGroupTab$ContentSupplier
public static "tooltipFor"(group: $CreativeModeTab$$Type, component: string, componentName: string): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGroupTab$$Type = ({"icon"?: $Icon$$Type, "contentSupplier"?: $ItemGroupTab$ContentSupplier$$Type, "name"?: $Component$$Type, "primary"?: boolean, "texture"?: $ResourceLocation$$Type}) | ([icon?: $Icon$$Type, contentSupplier?: $ItemGroupTab$ContentSupplier$$Type, name?: $Component$$Type, primary?: boolean, texture?: $ResourceLocation$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemGroupTab_ = $ItemGroupTab$$Type;
}}
declare module "io.wispforest.owo.itemgroup.OwoItemGroup" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$OwoItemGroup$Builder, $OwoItemGroup$Builder$$Type} from "io.wispforest.owo.itemgroup.OwoItemGroup$Builder"
import {$List, $List$$Type} from "java.util.List"
import {$Icon, $Icon$$Type} from "io.wispforest.owo.itemgroup.Icon"
import {$ItemGroupButton, $ItemGroupButton$$Type} from "io.wispforest.owo.itemgroup.gui.ItemGroupButton"
import {$ItemGroupTab, $ItemGroupTab$$Type} from "io.wispforest.owo.itemgroup.gui.ItemGroupTab"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"
import {$IntSet, $IntSet$$Type} from "it.unimi.dsi.fastutil.ints.IntSet"
import {$OwoItemGroup$ScrollerTextures, $OwoItemGroup$ScrollerTextures$$Type} from "io.wispforest.owo.itemgroup.OwoItemGroup$ScrollerTextures"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$OwoItemGroup$TabTextures, $OwoItemGroup$TabTextures$$Type} from "io.wispforest.owo.itemgroup.OwoItemGroup$TabTextures"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemGroupTab$ContentSupplier, $ItemGroupTab$ContentSupplier$$Type} from "io.wispforest.owo.itemgroup.gui.ItemGroupTab$ContentSupplier"
import {$CreativeModeTab$DisplayItemsGenerator, $CreativeModeTab$DisplayItemsGenerator$$Type} from "net.minecraft.world.item.CreativeModeTab$DisplayItemsGenerator"

export class $OwoItemGroup extends $CreativeModeTab {
readonly "buttons": $List<($ItemGroupButton)>
readonly "tabsAfter": $List<($ResourceLocation)>
readonly "tabs": $List<($ItemGroupTab)>
readonly "tabsBefore": $List<($ResourceLocation)>
 "displayItemsGenerator": $CreativeModeTab$DisplayItemsGenerator
static readonly "DEFAULT_STACK_GENERATOR": $BiConsumer<($Item), ($CreativeModeTab$Output)>
 "displayItems": $Collection<($ItemStack)>


public static "builder"(id: $ResourceLocation$$Type, iconSupplier: $Supplier$$Type<($Icon$$Type)>): $OwoItemGroup$Builder
public "initialize"(): void
public "id"(): $ResourceLocation
public "shouldDisplay"(): boolean
public "buildContents"(context: $CreativeModeTab$ItemDisplayParameters$$Type): void
public "hasAnyItems"(): boolean
public "getButtons"(): $List<($ItemGroupButton)>
public "selectTab"(tab: integer, context: $CreativeModeTab$ItemDisplayParameters$$Type): void
public "addButton"(button: $ItemGroupButton$$Type): void
public "icon"(): $Icon
public "getTab"(index: integer): $ItemGroupTab
public "addTab"(icon: $Icon$$Type, name: string, contentTag: $TagKey$$Type<($Item)>, primary: boolean): void
public "addTab"(icon: $Icon$$Type, name: string, contentTag: $TagKey$$Type<($Item)>, texture: $ResourceLocation$$Type, primary: boolean): void
public "getScrollerTextures"(): $OwoItemGroup$ScrollerTextures
public "hasDynamicTitle"(): boolean
public "getTabStackHeight"(): integer
public "shouldDisplaySingleTab"(): boolean
public "getButtonStackHeight"(): integer
public "canSelectMultipleTabs"(): boolean
public "selectSingleTab"(tab: integer, context: $CreativeModeTab$ItemDisplayParameters$$Type): void
public "addCustomTab"(icon: $Icon$$Type, name: string, contentSupplier: $ItemGroupTab$ContentSupplier$$Type, texture: $ResourceLocation$$Type, primary: boolean): void
public "addCustomTab"(icon: $Icon$$Type, name: string, contentSupplier: $ItemGroupTab$ContentSupplier$$Type, primary: boolean): void
public "deselectTab"(tab: integer, context: $CreativeModeTab$ItemDisplayParameters$$Type): void
public "getTabTextures"(): $OwoItemGroup$TabTextures
public "selectedTabs"(): $IntSet
public "isTabSelected"(tab: integer): boolean
public "toggleTab"(tab: integer, context: $CreativeModeTab$ItemDisplayParameters$$Type): void
public "owo$getBackgroundTexture"(): $ResourceLocation
get "buttons"(): $List<($ItemGroupButton)>
get "scrollerTextures"(): $OwoItemGroup$ScrollerTextures
get "tabStackHeight"(): integer
get "buttonStackHeight"(): integer
get "tabTextures"(): $OwoItemGroup$TabTextures
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoItemGroup$$Type = ($OwoItemGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwoItemGroup_ = $OwoItemGroup$$Type;
}}
declare module "io.wispforest.accessories.pond.AccessoriesLivingEntityExtension" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SlotReference, $SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export interface $AccessoriesLivingEntityExtension {

 "onEquipItem"(arg0: $SlotReference$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void

(arg0: $SlotReference, arg1: $ItemStack, arg2: $ItemStack): void
}

export namespace $AccessoriesLivingEntityExtension {
const probejs$$marker: never
}
export class $AccessoriesLivingEntityExtension$$Static implements $AccessoriesLivingEntityExtension {


 "onEquipItem"(arg0: $SlotReference$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesLivingEntityExtension$$Type = ((arg0: $SlotReference, arg1: $ItemStack, arg2: $ItemStack) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoriesLivingEntityExtension_ = $AccessoriesLivingEntityExtension$$Type;
}}
declare module "io.wispforest.owo.itemgroup.OwoItemGroup$ButtonDefinition" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$Icon, $Icon$$Type} from "io.wispforest.owo.itemgroup.Icon"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $OwoItemGroup$ButtonDefinition {

 "tooltip"(): $Component
 "texture"(): $ResourceLocation
 "icon"(): $Icon
}

export namespace $OwoItemGroup$ButtonDefinition {
function tooltipFor(group: $CreativeModeTab$$Type, component: string, componentName: string): $Component
const probejs$$marker: never
}
export class $OwoItemGroup$ButtonDefinition$$Static implements $OwoItemGroup$ButtonDefinition {


 "tooltip"(): $Component
 "texture"(): $ResourceLocation
 "icon"(): $Icon
static "tooltipFor"(group: $CreativeModeTab$$Type, component: string, componentName: string): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoItemGroup$ButtonDefinition$$Type = ($OwoItemGroup$ButtonDefinition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwoItemGroup$ButtonDefinition_ = $OwoItemGroup$ButtonDefinition$$Type;
}}
declare module "io.wispforest.owo.client.screens.SyncedProperty" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Observable, $Observable$$Type} from "io.wispforest.owo.util.Observable"

export class $SyncedProperty<T> extends $Observable<(T)> {

constructor(index: integer, endec: $Endec$$Type<(T)>, initial: T, owner: $AbstractContainerMenu$$Type)

public "index"(): integer
public "write"(buf: $FriendlyByteBuf$$Type): void
public "read"(buf: $FriendlyByteBuf$$Type): void
public "markDirty"(): void
public "needsSync"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedProperty$$Type<T> = ($SyncedProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncedProperty_<T> = $SyncedProperty$$Type<(T)>;
}}
declare module "io.wispforest.accessories.commands.RecordArgumentTypeInfo$RecordInfoTemplate" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext, $CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $RecordArgumentTypeInfo$RecordInfoTemplate<A extends $ArgumentType<(any)>, T> extends $Record implements $ArgumentTypeInfo$Template<(A)> {

constructor(type: $ArgumentTypeInfo$$Type<(A), (any)>, data: T, fromTemplate: $BiFunction$$Type<($CommandBuildContext), (T), (A)>)

public "type"(): $ArgumentTypeInfo<(A), (any)>
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "data"(): T
public "instantiate"(ctx: $CommandBuildContext$$Type): A
public "fromTemplate"(): $BiFunction<($CommandBuildContext), (T), (A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecordArgumentTypeInfo$RecordInfoTemplate$$Type<A, T> = ({"fromTemplate"?: $BiFunction$$Type<($CommandBuildContext$$Type), (any), (any)>, "type"?: $ArgumentTypeInfo$$Type<(any), (never)>, "data"?: any}) | ([fromTemplate?: $BiFunction$$Type<($CommandBuildContext$$Type), (any), (any)>, type?: $ArgumentTypeInfo$$Type<(any), (never)>, data?: any]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecordArgumentTypeInfo$RecordInfoTemplate_<A, T> = $RecordArgumentTypeInfo$RecordInfoTemplate$$Type<(A), (T)>;
}}
declare module "io.wispforest.owo.ui.core.Surface" {
import {$OwoUIDrawContext, $OwoUIDrawContext$$Type} from "io.wispforest.owo.ui.core.OwoUIDrawContext"
import {$ParentComponent, $ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Element, $Element$$Type} from "org.w3c.dom.Element"
import {$PanoramaRenderer, $PanoramaRenderer$$Type} from "net.minecraft.client.renderer.PanoramaRenderer"

export interface $Surface {

 "and"(surface: $Surface$$Type): $Surface
 "draw"(arg0: $OwoUIDrawContext$$Type, arg1: $ParentComponent$$Type): void

(arg0: $OwoUIDrawContext, arg1: $ParentComponent): void
}

export namespace $Surface {
const OPTIONS_BACKGROUND: $Surface
const BLANK: $Surface
const PANEL: $Surface
const DARK_PANEL: $Surface
const TOOLTIP: $Surface
const PANEL_INSET: $Surface
const VANILLA_TRANSLUCENT: $Surface
function parse(surfaceElement: $Element$$Type): $Surface
function panorama(renderer: $PanoramaRenderer$$Type, alwaysVisible: boolean): $Surface
function tiled(texture: $ResourceLocation$$Type, textureWidth: integer, textureHeight: integer): $Surface
function blur(quality: float, size: float): $Surface
function flat(color: integer): $Surface
function vanillaPanorama(alwaysVisible: boolean): $Surface
function outline(color: integer): $Surface
function panelWithInset(insetWidth: integer): $Surface
const probejs$$marker: never
}
export class $Surface$$Static implements $Surface {
static readonly "OPTIONS_BACKGROUND": $Surface
static readonly "BLANK": $Surface
static readonly "PANEL": $Surface
static readonly "DARK_PANEL": $Surface
static readonly "TOOLTIP": $Surface
static readonly "PANEL_INSET": $Surface
static readonly "VANILLA_TRANSLUCENT": $Surface


static "parse"(surfaceElement: $Element$$Type): $Surface
 "and"(surface: $Surface$$Type): $Surface
static "panorama"(renderer: $PanoramaRenderer$$Type, alwaysVisible: boolean): $Surface
 "draw"(arg0: $OwoUIDrawContext$$Type, arg1: $ParentComponent$$Type): void
static "tiled"(texture: $ResourceLocation$$Type, textureWidth: integer, textureHeight: integer): $Surface
static "blur"(quality: float, size: float): $Surface
static "flat"(color: integer): $Surface
static "vanillaPanorama"(alwaysVisible: boolean): $Surface
static "outline"(color: integer): $Surface
static "panelWithInset"(insetWidth: integer): $Surface
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Surface$$Type = ((arg0: $OwoUIDrawContext, arg1: $ParentComponent) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Surface_ = $Surface$$Type;
}}
declare module "io.wispforest.accessories.api.components.AccessoryItemAttributeModifiers" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$AccessoryAttributeBuilder, $AccessoryAttributeBuilder$$Type} from "io.wispforest.accessories.api.attributes.AccessoryAttributeBuilder"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$AccessoryItemAttributeModifiers$Builder, $AccessoryItemAttributeModifiers$Builder$$Type} from "io.wispforest.accessories.api.components.AccessoryItemAttributeModifiers$Builder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AccessoryItemAttributeModifiers$Entry, $AccessoryItemAttributeModifiers$Entry$$Type} from "io.wispforest.accessories.api.components.AccessoryItemAttributeModifiers$Entry"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SlotReference, $SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AccessoryItemAttributeModifiers extends $Record {
static readonly "ENDEC": $Endec<($AccessoryItemAttributeModifiers)>
static readonly "EMPTY": $AccessoryItemAttributeModifiers

constructor(modifiers: $List$$Type<($AccessoryItemAttributeModifiers$Entry$$Type)>, showInTooltip: boolean)

public "modifiers"(): $List<($AccessoryItemAttributeModifiers$Entry)>
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "builder"(): $AccessoryItemAttributeModifiers$Builder
public "showInTooltip"(): boolean
public "hasModifier"(holder: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type): boolean
public "getModifier"(holder: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type): $AttributeModifier
public "withModifierAdded"(holder: $Holder$$Type<($Attribute)>, attributeModifier: $AttributeModifier$$Type, slotName: string, isStackable: boolean): $AccessoryItemAttributeModifiers
public "gatherAttributes"(slotReference: $SlotReference$$Type): $AccessoryAttributeBuilder
public "withModifierAddedForAny"(holder: $Holder$$Type<($Attribute)>, attributeModifier: $AttributeModifier$$Type, slotName: string, isStackable: boolean): $AccessoryItemAttributeModifiers
public "withoutModifier"(holder: $Holder$$Type<($Attribute)>, location: $ResourceLocation$$Type): $AccessoryItemAttributeModifiers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryItemAttributeModifiers$$Type = ({"modifiers"?: $List$$Type<($AccessoryItemAttributeModifiers$Entry$$Type)>, "showInTooltip"?: boolean}) | ([modifiers?: $List$$Type<($AccessoryItemAttributeModifiers$Entry$$Type)>, showInTooltip?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoryItemAttributeModifiers_ = $AccessoryItemAttributeModifiers$$Type;
}}
declare module "io.wispforest.accessories.api.AccessoriesContainer" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$ExpandedSimpleContainer, $ExpandedSimpleContainer$$Type} from "io.wispforest.accessories.impl.ExpandedSimpleContainer"
import {$List, $List$$Type} from "java.util.List"
import {$AccessoriesCapability, $AccessoriesCapability$$Type} from "io.wispforest.accessories.api.AccessoriesCapability"
import {$SlotType, $SlotType$$Type} from "io.wispforest.accessories.api.slot.SlotType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$SlotReference, $SlotReference$$Type} from "io.wispforest.accessories.api.slot.SlotReference"

export interface $AccessoriesContainer {

 "getModifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
 "update"(): void
 "getSize"(): integer
 "markChanged"(arg0: boolean): void
 "markChanged"(): void
 "hasModifier"(arg0: $ResourceLocation$$Type): boolean
 "clearModifiers"(): void
 "getAccessories"(): $ExpandedSimpleContainer
 "capability"(): $AccessoriesCapability
 "removeModifier"(arg0: $ResourceLocation$$Type): void
 "shouldRender"(index: integer): boolean
 "addTransientModifier"(arg0: $AttributeModifier$$Type): void
 "getCosmeticAccessories"(): $ExpandedSimpleContainer
 "hasChanged"(): boolean
 "getSlotName"(): string
 "slotType"(): $SlotType
 "createReference"(index: integer): $SlotReference
 "renderOptions"(): $List<(boolean)>
 "getCachedModifiers"(): $Set<($AttributeModifier)>
 "clearCachedModifiers"(): void
 "addPersistentModifier"(arg0: $AttributeModifier$$Type): void
 "removeCachedModifiers"(arg0: $AttributeModifier$$Type): void
 "getModifiersForOperation"(arg0: $AttributeModifier$Operation$$Type): $Collection<($AttributeModifier)>
get "modifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
get "size"(): integer
get "accessories"(): $ExpandedSimpleContainer
get "cosmeticAccessories"(): $ExpandedSimpleContainer
get "slotName"(): string
get "cachedModifiers"(): $Set<($AttributeModifier)>
}

export namespace $AccessoriesContainer {
const probejs$$marker: never
}
export class $AccessoriesContainer$$Static implements $AccessoriesContainer {


 "getModifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
 "update"(): void
 "getSize"(): integer
 "markChanged"(arg0: boolean): void
 "markChanged"(): void
 "hasModifier"(arg0: $ResourceLocation$$Type): boolean
 "clearModifiers"(): void
 "getAccessories"(): $ExpandedSimpleContainer
 "capability"(): $AccessoriesCapability
 "removeModifier"(arg0: $ResourceLocation$$Type): void
 "shouldRender"(index: integer): boolean
 "addTransientModifier"(arg0: $AttributeModifier$$Type): void
 "getCosmeticAccessories"(): $ExpandedSimpleContainer
 "hasChanged"(): boolean
 "getSlotName"(): string
 "slotType"(): $SlotType
 "createReference"(index: integer): $SlotReference
 "renderOptions"(): $List<(boolean)>
 "getCachedModifiers"(): $Set<($AttributeModifier)>
 "clearCachedModifiers"(): void
 "addPersistentModifier"(arg0: $AttributeModifier$$Type): void
 "removeCachedModifiers"(arg0: $AttributeModifier$$Type): void
 "getModifiersForOperation"(arg0: $AttributeModifier$Operation$$Type): $Collection<($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesContainer$$Type = ($AccessoriesContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoriesContainer_ = $AccessoriesContainer$$Type;
}}
declare module "io.wispforest.owo.mixin.ClientCommonNetworkHandlerAccessor" {
import {$Connection, $Connection$$Type} from "net.minecraft.network.Connection"

export interface $ClientCommonNetworkHandlerAccessor {

 "getConnection"(): $Connection

(): $Connection$$Type
get "connection"(): $Connection
}

export namespace $ClientCommonNetworkHandlerAccessor {
const probejs$$marker: never
}
export class $ClientCommonNetworkHandlerAccessor$$Static implements $ClientCommonNetworkHandlerAccessor {


 "getConnection"(): $Connection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientCommonNetworkHandlerAccessor$$Type = (() => $Connection$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientCommonNetworkHandlerAccessor_ = $ClientCommonNetworkHandlerAccessor$$Type;
}}
declare module "io.wispforest.accessories.api.AccessoriesHolder" {
import {$PlayerEquipControl, $PlayerEquipControl$$Type} from "io.wispforest.accessories.impl.PlayerEquipControl"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AccessoriesHolderLookupCache, $AccessoriesHolderLookupCache$$Type} from "io.wispforest.accessories.impl.caching.AccessoriesHolderLookupCache"

export interface $AccessoriesHolder {

 "showAdvancedOptions"(): boolean
 "showAdvancedOptions"(arg0: boolean): $AccessoriesHolder
 "showUnusedSlots"(arg0: boolean): $AccessoriesHolder
 "showUnusedSlots"(): boolean
 "showGroupFilter"(arg0: boolean): $AccessoriesHolder
 "showGroupFilter"(): boolean
 "mainWidgetPosition"(): boolean
 "mainWidgetPosition"(arg0: boolean): $AccessoriesHolder
 "sideWidgetPosition"(arg0: boolean): $AccessoriesHolder
 "sideWidgetPosition"(): boolean
 "showCraftingGrid"(): boolean
 "showCraftingGrid"(arg0: boolean): $AccessoriesHolder
 "isGroupFiltersOpen"(arg0: boolean): $AccessoriesHolder
 "isGroupFiltersOpen"(): boolean
/**
 * 
 * @deprecated
 */
 "showUniqueSlots"(): boolean
/**
 * 
 * @deprecated
 */
 "showUniqueSlots"(value: boolean): $AccessoriesHolder
 "equipControl"(arg0: $PlayerEquipControl$$Type): $AccessoriesHolder
 "equipControl"(): $PlayerEquipControl
 "columnAmount"(arg0: integer): $AccessoriesHolder
 "columnAmount"(): integer
 "widgetType"(arg0: integer): $AccessoriesHolder
 "widgetType"(): integer
 "filteredGroups"(): $Set<(string)>
 "filteredGroups"(arg0: $Set$$Type<(string)>): $AccessoriesHolder
 "cosmeticsShown"(arg0: boolean): $AccessoriesHolder
 "cosmeticsShown"(): boolean
/**
 * 
 * @deprecated
 */
 "linesShown"(): boolean
/**
 * 
 * @deprecated
 */
 "linesShown"(value: boolean): $AccessoriesHolder
 "getLookupCache"(): $AccessoriesHolderLookupCache
get "groupFiltersOpen"(): boolean
get "lookupCache"(): $AccessoriesHolderLookupCache
}

export namespace $AccessoriesHolder {
function get(livingEntity: $LivingEntity$$Type): $AccessoriesHolder
function getOptionally(livingEntity: $LivingEntity$$Type): $Optional<($AccessoriesHolder)>
const probejs$$marker: never
}
export class $AccessoriesHolder$$Static implements $AccessoriesHolder {


static "get"(livingEntity: $LivingEntity$$Type): $AccessoriesHolder
 "showAdvancedOptions"(): boolean
 "showAdvancedOptions"(arg0: boolean): $AccessoriesHolder
 "showUnusedSlots"(arg0: boolean): $AccessoriesHolder
 "showUnusedSlots"(): boolean
 "showGroupFilter"(arg0: boolean): $AccessoriesHolder
 "showGroupFilter"(): boolean
 "mainWidgetPosition"(): boolean
 "mainWidgetPosition"(arg0: boolean): $AccessoriesHolder
 "sideWidgetPosition"(arg0: boolean): $AccessoriesHolder
 "sideWidgetPosition"(): boolean
 "showCraftingGrid"(): boolean
 "showCraftingGrid"(arg0: boolean): $AccessoriesHolder
 "isGroupFiltersOpen"(arg0: boolean): $AccessoriesHolder
 "isGroupFiltersOpen"(): boolean
/**
 * 
 * @deprecated
 */
 "showUniqueSlots"(): boolean
/**
 * 
 * @deprecated
 */
 "showUniqueSlots"(value: boolean): $AccessoriesHolder
 "equipControl"(arg0: $PlayerEquipControl$$Type): $AccessoriesHolder
 "equipControl"(): $PlayerEquipControl
 "columnAmount"(arg0: integer): $AccessoriesHolder
 "columnAmount"(): integer
 "widgetType"(arg0: integer): $AccessoriesHolder
 "widgetType"(): integer
 "filteredGroups"(): $Set<(string)>
 "filteredGroups"(arg0: $Set$$Type<(string)>): $AccessoriesHolder
 "cosmeticsShown"(arg0: boolean): $AccessoriesHolder
 "cosmeticsShown"(): boolean
/**
 * 
 * @deprecated
 */
 "linesShown"(): boolean
/**
 * 
 * @deprecated
 */
 "linesShown"(value: boolean): $AccessoriesHolder
static "getOptionally"(livingEntity: $LivingEntity$$Type): $Optional<($AccessoriesHolder)>
 "getLookupCache"(): $AccessoriesHolderLookupCache
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoriesHolder$$Type = ($AccessoriesHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoriesHolder_ = $AccessoriesHolder$$Type;
}}
declare module "io.wispforest.owo.network.OwoClientConnectionExtension" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $OwoClientConnectionExtension {

 "owo$setChannelSet"(arg0: $Set$$Type<($ResourceLocation$$Type)>): void
 "owo$getChannelSet"(): $Set<($ResourceLocation)>
}

export namespace $OwoClientConnectionExtension {
const probejs$$marker: never
}
export class $OwoClientConnectionExtension$$Static implements $OwoClientConnectionExtension {


 "owo$setChannelSet"(arg0: $Set$$Type<($ResourceLocation$$Type)>): void
 "owo$getChannelSet"(): $Set<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoClientConnectionExtension$$Type = ($OwoClientConnectionExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwoClientConnectionExtension_ = $OwoClientConnectionExtension$$Type;
}}
declare module "io.wispforest.owo.mixin.ui.access.ClickableWidgetAccessor" {
import {$WidgetTooltipHolder, $WidgetTooltipHolder$$Type} from "net.minecraft.client.gui.components.WidgetTooltipHolder"

export interface $ClickableWidgetAccessor {

 "owo$setX"(arg0: integer): void
 "owo$setY"(arg0: integer): void
 "owo$setHeight"(arg0: integer): void
 "owo$setWidth"(arg0: integer): void
 "owo$getTooltip"(): $WidgetTooltipHolder
}

export namespace $ClickableWidgetAccessor {
const probejs$$marker: never
}
export class $ClickableWidgetAccessor$$Static implements $ClickableWidgetAccessor {


 "owo$setX"(arg0: integer): void
 "owo$setY"(arg0: integer): void
 "owo$setHeight"(arg0: integer): void
 "owo$setWidth"(arg0: integer): void
 "owo$getTooltip"(): $WidgetTooltipHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickableWidgetAccessor$$Type = ($ClickableWidgetAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClickableWidgetAccessor_ = $ClickableWidgetAccessor$$Type;
}}
declare module "io.wispforest.owo.itemgroup.OwoItemSettingsExtension" {
import {$ItemGroupReference, $ItemGroupReference$$Type} from "io.wispforest.owo.itemgroup.ItemGroupReference"
import {$OwoItemGroup, $OwoItemGroup$$Type} from "io.wispforest.owo.itemgroup.OwoItemGroup"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $OwoItemSettingsExtension {

/**
 * 
 * @deprecated
 */
 "group"(): $OwoItemGroup
 "group"(groupSupplier: $Supplier$$Type<($OwoItemGroup$$Type)>): $Item$Properties
/**
 * 
 * @deprecated
 */
 "group"(group: $OwoItemGroup$$Type): $Item$Properties
 "group"(ref: $ItemGroupReference$$Type): $Item$Properties
 "tab"(tab: integer): $Item$Properties
 "tab"(): integer
 "stackGenerator"(): $BiConsumer<($Item), ($CreativeModeTab$Output)>
 "stackGenerator"(generator: $BiConsumer$$Type<($Item), ($CreativeModeTab$Output)>): $Item$Properties
 "groupSupplier"(): $Supplier<($OwoItemGroup)>
 "shouldTrackUsageStat"(): boolean
 "trackUsageStat"(): $Item$Properties
}

export namespace $OwoItemSettingsExtension {
const probejs$$marker: never
}
export class $OwoItemSettingsExtension$$Static implements $OwoItemSettingsExtension {


/**
 * 
 * @deprecated
 */
 "group"(): $OwoItemGroup
 "group"(groupSupplier: $Supplier$$Type<($OwoItemGroup$$Type)>): $Item$Properties
/**
 * 
 * @deprecated
 */
 "group"(group: $OwoItemGroup$$Type): $Item$Properties
 "group"(ref: $ItemGroupReference$$Type): $Item$Properties
 "tab"(tab: integer): $Item$Properties
 "tab"(): integer
 "stackGenerator"(): $BiConsumer<($Item), ($CreativeModeTab$Output)>
 "stackGenerator"(generator: $BiConsumer$$Type<($Item), ($CreativeModeTab$Output)>): $Item$Properties
 "groupSupplier"(): $Supplier<($OwoItemGroup)>
 "shouldTrackUsageStat"(): boolean
 "trackUsageStat"(): $Item$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OwoItemSettingsExtension$$Type = ($OwoItemSettingsExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OwoItemSettingsExtension_ = $OwoItemSettingsExtension$$Type;
}}
declare module "io.wispforest.endec.Deserializer$Map" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $Deserializer$Map<E> extends $Iterator<($Map$Entry<(string), (E)>)> {

 "hasNext"(): boolean
 "next"(): any
 "estimatedSize"(): integer
 "remove"(): void
 "forEachRemaining"(arg0: $Consumer$$Type<($Map$Entry<(string), (E)>)>): void
}

export namespace $Deserializer$Map {
const probejs$$marker: never
}
export class $Deserializer$Map$$Static<E> implements $Deserializer$Map {


 "hasNext"(): boolean
 "next"(): any
 "estimatedSize"(): integer
 "remove"(): void
 "forEachRemaining"(arg0: $Consumer$$Type<($Map$Entry<(string), (E)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Deserializer$Map$$Type<E> = ($Deserializer$Map<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Deserializer$Map_<E> = $Deserializer$Map$$Type<(E)>;
}}
declare module "io.wispforest.owo.ui.core.CursorStyle" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $CursorStyle extends $Enum<($CursorStyle)> {
static readonly "VERTICAL_RESIZE": $CursorStyle
static readonly "MOVE": $CursorStyle
readonly "glfw": integer
static readonly "POINTER": $CursorStyle
static readonly "NESW_RESIZE": $CursorStyle
static readonly "CROSSHAIR": $CursorStyle
static readonly "NOT_ALLOWED": $CursorStyle
static readonly "TEXT": $CursorStyle
static readonly "HORIZONTAL_RESIZE": $CursorStyle
static readonly "NONE": $CursorStyle
static readonly "NWSE_RESIZE": $CursorStyle
static readonly "HAND": $CursorStyle


public static "values"(): ($CursorStyle)[]
public static "valueOf"(name: string): $CursorStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CursorStyle$$Type = (("none") | ("pointer") | ("text") | ("hand") | ("crosshair") | ("move") | ("horizontal_resize") | ("vertical_resize") | ("nwse_resize") | ("nesw_resize") | ("not_allowed"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CursorStyle_ = $CursorStyle$$Type;
}}
declare module "io.wispforest.owo.ui.core.Animation" {
import {$EventSource, $EventSource$$Type} from "io.wispforest.owo.util.EventSource"
import {$Animation$Direction, $Animation$Direction$$Type} from "io.wispforest.owo.ui.core.Animation$Direction"
import {$Animatable, $Animatable$$Type} from "io.wispforest.owo.ui.core.Animatable"
import {$Animation$Finished, $Animation$Finished$$Type} from "io.wispforest.owo.ui.core.Animation$Finished"
import {$Easing, $Easing$$Type} from "io.wispforest.owo.ui.core.Easing"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Animation$Composed, $Animation$Composed$$Type} from "io.wispforest.owo.ui.core.Animation$Composed"

export class $Animation<A extends $Animatable<(A)>> {

constructor(duration: integer, setter: $Consumer$$Type<(A)>, easing: $Easing$$Type, from: A, to: A)

public "reverse"(): $Animation<(A)>
public "update"(delta: float): void
public "loop"(loop: boolean): $Animation<(A)>
public "direction"(): $Animation$Direction
public static "compose"(...elements: ($Animation$$Type<(any)>)[]): $Animation$Composed
public "finished"(): $EventSource<($Animation$Finished)>
public "looping"(): boolean
public "backwards"(): $Animation<(A)>
public "forwards"(): $Animation<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$$Type<A> = ($Animation<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation_<A> = $Animation$$Type<(A)>;
}}
declare module "io.wispforest.endec.impl.KeyedEndec" {
import {$Endec, $Endec$$Type} from "io.wispforest.endec.Endec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"

export class $KeyedEndec<F> {

constructor(arg0: string, arg1: $Endec$$Type<(F)>, arg2: $Supplier$$Type<(F)>)
constructor(arg0: string, arg1: $Endec$$Type<(F)>, arg2: F)

public "key"(): string
public "defaultValue"(): F
public "endec"(): $Endec<(F)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyedEndec$$Type<F> = ($KeyedEndec<(F)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyedEndec_<F> = $KeyedEndec$$Type<(F)>;
}}
declare module "io.wispforest.owo.ui.core.Positioning$Type" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Positioning$Type extends $Enum<($Positioning$Type)> {
static readonly "ABSOLUTE": $Positioning$Type
static readonly "RELATIVE": $Positioning$Type
static readonly "LAYOUT": $Positioning$Type
static readonly "ACROSS": $Positioning$Type


public static "values"(): ($Positioning$Type)[]
public static "valueOf"(name: string): $Positioning$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Positioning$Type$$Type = (("relative") | ("across") | ("absolute") | ("layout"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Positioning$Type_ = $Positioning$Type$$Type;
}}
declare module "io.wispforest.owo.ui.layers.Layer" {
import {$ParentComponent, $ParentComponent$$Type} from "io.wispforest.owo.ui.core.ParentComponent"
import {$Layer$Instance, $Layer$Instance$$Type} from "io.wispforest.owo.ui.layers.Layer$Instance"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $Layer<S extends $Screen, R extends $ParentComponent> {


public "getInstance"(screen: S): $Layer$Instance<>
public "instantiate"(screen: S): $Layer$Instance<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layer$$Type<S, R> = ($Layer<(S), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Layer_<S, R> = $Layer$$Type<(S), (R)>;
}}
declare module "io.wispforest.owo.mixin.itemgroup.ItemGroupAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$CreativeModeTab$Row, $CreativeModeTab$Row$$Type} from "net.minecraft.world.item.CreativeModeTab$Row"
import {$CreativeModeTab$DisplayItemsGenerator, $CreativeModeTab$DisplayItemsGenerator$$Type} from "net.minecraft.world.item.CreativeModeTab$DisplayItemsGenerator"

export interface $ItemGroupAccessor {

 "owo$setColumn"(arg0: integer): void
 "owo$setRow"(arg0: $CreativeModeTab$Row$$Type): void
 "owo$getEntryCollector"(): $CreativeModeTab$DisplayItemsGenerator
 "owo$setEntryCollector"(arg0: $CreativeModeTab$DisplayItemsGenerator$$Type): void
 "owo$setSearchTabStacks"(arg0: $Set$$Type<($ItemStack$$Type)>): void
 "owo$setDisplayName"(arg0: $Component$$Type): void
}

export namespace $ItemGroupAccessor {
const probejs$$marker: never
}
export class $ItemGroupAccessor$$Static implements $ItemGroupAccessor {


 "owo$setColumn"(arg0: integer): void
 "owo$setRow"(arg0: $CreativeModeTab$Row$$Type): void
 "owo$getEntryCollector"(): $CreativeModeTab$DisplayItemsGenerator
 "owo$setEntryCollector"(arg0: $CreativeModeTab$DisplayItemsGenerator$$Type): void
 "owo$setSearchTabStacks"(arg0: $Set$$Type<($ItemStack$$Type)>): void
 "owo$setDisplayName"(arg0: $Component$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGroupAccessor$$Type = ($ItemGroupAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemGroupAccessor_ = $ItemGroupAccessor$$Type;
}}
