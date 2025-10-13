declare module "top.theillusivec4.curios.api.event.CurioCanEquipEvent" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$LivingEvent, $LivingEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"

export class $CurioCanEquipEvent extends $LivingEvent {

constructor(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type, arg2: $TriState$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type)

public "getStack"(): $ItemStack
public "getSlotContext"(): $SlotContext
public "getEquipResult"(): $TriState
public "setEquipResult"(arg0: $TriState$$Type): void
get "stack"(): $ItemStack
get "slotContext"(): $SlotContext
get "equipResult"(): $TriState
set "equipResult"(value: $TriState$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioCanEquipEvent$$Type = ($CurioCanEquipEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioCanEquipEvent_ = $CurioCanEquipEvent$$Type;
}}
declare module "top.theillusivec4.curios.api.type.capability.ICurio" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ICurio$DropRule, $ICurio$DropRule$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$EnderMan, $EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio$SoundInfo"

export interface $ICurio {

 "getStack"(): $ItemStack
 "canEquip"(arg0: $SlotContext$$Type): boolean
 "isEnderMask"(arg0: $SlotContext$$Type, arg1: $EnderMan$$Type): boolean
 "getEquipSound"(arg0: $SlotContext$$Type): $ICurio$SoundInfo
 "curioTick"(arg0: $SlotContext$$Type): void
 "curioBreak"(arg0: $SlotContext$$Type): void
 "canSync"(arg0: $SlotContext$$Type): boolean
 "writeSyncData"(arg0: $SlotContext$$Type): $CompoundTag
 "readSyncData"(arg0: $SlotContext$$Type, arg1: $CompoundTag$$Type): void
 "onEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "onUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "canUnequip"(arg0: $SlotContext$$Type): boolean
/**
 * 
 * @deprecated
 */
 "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: integer, arg3: boolean): $ICurio$DropRule
 "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: boolean): $ICurio$DropRule
 "onEquipFromUse"(arg0: $SlotContext$$Type): void
 "canEquipFromUse"(arg0: $SlotContext$$Type): boolean
 "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>): $List<($Component)>
 "getLootingLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type): integer
 "getFortuneLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type): integer
 "canWalkOnPowderedSnow"(arg0: $SlotContext$$Type): boolean
 "makesPiglinsNeutral"(arg0: $SlotContext$$Type): boolean
/**
 * 
 * @deprecated
 */
 "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $UUID$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
 "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
 "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>): $List<($Component)>

(): $ItemStack$$Type
get "stack"(): $ItemStack
}

export namespace $ICurio {
function playBreakAnimation(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): void
const probejs$$marker: never
}
export class $ICurio$$Static implements $ICurio {


 "getStack"(): $ItemStack
 "canEquip"(arg0: $SlotContext$$Type): boolean
 "isEnderMask"(arg0: $SlotContext$$Type, arg1: $EnderMan$$Type): boolean
 "getEquipSound"(arg0: $SlotContext$$Type): $ICurio$SoundInfo
 "curioTick"(arg0: $SlotContext$$Type): void
 "curioBreak"(arg0: $SlotContext$$Type): void
 "canSync"(arg0: $SlotContext$$Type): boolean
 "writeSyncData"(arg0: $SlotContext$$Type): $CompoundTag
 "readSyncData"(arg0: $SlotContext$$Type, arg1: $CompoundTag$$Type): void
 "onEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "onUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "canUnequip"(arg0: $SlotContext$$Type): boolean
/**
 * 
 * @deprecated
 */
 "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: integer, arg3: boolean): $ICurio$DropRule
 "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: boolean): $ICurio$DropRule
 "onEquipFromUse"(arg0: $SlotContext$$Type): void
 "canEquipFromUse"(arg0: $SlotContext$$Type): boolean
 "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>): $List<($Component)>
 "getLootingLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type): integer
 "getFortuneLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type): integer
 "canWalkOnPowderedSnow"(arg0: $SlotContext$$Type): boolean
 "makesPiglinsNeutral"(arg0: $SlotContext$$Type): boolean
/**
 * 
 * @deprecated
 */
 "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $UUID$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
 "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
 "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>): $List<($Component)>
static "playBreakAnimation"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurio$$Type = (() => $ItemStack$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurio_ = $ICurio$$Type;
}}
declare module "top.theillusivec4.curios.api.type.util.ISlotHelper" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ICurioStacksHandler, $ICurioStacksHandler$$Type} from "top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ISlotType, $ISlotType$$Type} from "top.theillusivec4.curios.api.type.ISlotType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SortedMap, $SortedMap$$Type} from "java.util.SortedMap"

/**
 * 
 * @deprecated
 */
export interface $ISlotHelper {

/**
 * 
 * @deprecated
 */
 "clear"(): void
/**
 * 
 * @deprecated
 */
 "getSlotTypeIds"(): $Set<(StringJS)>
/**
 * 
 * @deprecated
 */
 "createSlots"(): $SortedMap<($ISlotType), ($ICurioStacksHandler)>
/**
 * 
 * @deprecated
 */
 "createSlots"(arg0: $LivingEntity$$Type): $SortedMap<($ISlotType), ($ICurioStacksHandler)>
/**
 * 
 * @deprecated
 */
 "growSlotType"(arg0: StringJS, arg1: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
 "growSlotType"(arg0: StringJS, arg1: integer, arg2: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
 "shrinkSlotType"(arg0: StringJS, arg1: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
 "shrinkSlotType"(arg0: StringJS, arg1: integer, arg2: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
 "unlockSlotType"(arg0: StringJS, arg1: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
 "lockSlotType"(arg0: StringJS, arg1: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
 "getSlotType"(arg0: StringJS): $Optional<($ISlotType)>
/**
 * 
 * @deprecated
 */
 "getSlotTypes"(arg0: $LivingEntity$$Type): $Collection<($ISlotType)>
/**
 * 
 * @deprecated
 */
 "getSlotTypes"(): $Collection<($ISlotType)>
/**
 * 
 * @deprecated
 */
 "addSlotType"(arg0: $ISlotType$$Type): void
/**
 * 
 * @deprecated
 */
 "getSlotsForType"(arg0: $LivingEntity$$Type, arg1: StringJS): integer
/**
 * 
 * @deprecated
 */
 "setSlotsForType"(arg0: StringJS, arg1: $LivingEntity$$Type, arg2: integer): void
get "slotTypeIds"(): $Set<(StringJS)>
get "slotTypes"(): $Collection<($ISlotType)>
}

export namespace $ISlotHelper {
const probejs$$marker: never
}
export class $ISlotHelper$$Static implements $ISlotHelper {


/**
 * 
 * @deprecated
 */
 "clear"(): void
/**
 * 
 * @deprecated
 */
 "getSlotTypeIds"(): $Set<(StringJS)>
/**
 * 
 * @deprecated
 */
 "createSlots"(): $SortedMap<($ISlotType), ($ICurioStacksHandler)>
/**
 * 
 * @deprecated
 */
 "createSlots"(arg0: $LivingEntity$$Type): $SortedMap<($ISlotType), ($ICurioStacksHandler)>
/**
 * 
 * @deprecated
 */
 "growSlotType"(arg0: StringJS, arg1: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
 "growSlotType"(arg0: StringJS, arg1: integer, arg2: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
 "shrinkSlotType"(arg0: StringJS, arg1: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
 "shrinkSlotType"(arg0: StringJS, arg1: integer, arg2: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
 "unlockSlotType"(arg0: StringJS, arg1: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
 "lockSlotType"(arg0: StringJS, arg1: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
 "getSlotType"(arg0: StringJS): $Optional<($ISlotType)>
/**
 * 
 * @deprecated
 */
 "getSlotTypes"(arg0: $LivingEntity$$Type): $Collection<($ISlotType)>
/**
 * 
 * @deprecated
 */
 "getSlotTypes"(): $Collection<($ISlotType)>
/**
 * 
 * @deprecated
 */
 "addSlotType"(arg0: $ISlotType$$Type): void
/**
 * 
 * @deprecated
 */
 "getSlotsForType"(arg0: $LivingEntity$$Type, arg1: StringJS): integer
/**
 * 
 * @deprecated
 */
 "setSlotsForType"(arg0: StringJS, arg1: $LivingEntity$$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotHelper$$Type = ($ISlotHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlotHelper_ = $ISlotHelper$$Type;
}}
declare module "top.theillusivec4.curios.api.event.SlotModifiersUpdatedEvent" {
import {$LivingEvent, $LivingEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$Set, $Set$$Type} from "java.util.Set"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SlotModifiersUpdatedEvent extends $LivingEvent {

constructor(arg0: $LivingEntity$$Type, arg1: $Set$$Type<(StringJS)>)

public "getTypes"(): $Set<(StringJS)>
get "types"(): $Set<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotModifiersUpdatedEvent$$Type = ($SlotModifiersUpdatedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotModifiersUpdatedEvent_ = $SlotModifiersUpdatedEvent$$Type;
}}
declare module "top.theillusivec4.curios.api.CuriosApi" {
import {$ISlotHelper, $ISlotHelper$$Type} from "top.theillusivec4.curios.api.type.util.ISlotHelper"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$EquipmentSlotGroup, $EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$ICurio, $ICurio$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SlotResult, $SlotResult$$Type} from "top.theillusivec4.curios.api.SlotResult"
import {$ICuriosHelper, $ICuriosHelper$$Type} from "top.theillusivec4.curios.api.type.util.ICuriosHelper"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ICurioItem, $ICurioItem$$Type} from "top.theillusivec4.curios.api.type.capability.ICurioItem"
import {$ICuriosItemHandler, $ICuriosItemHandler$$Type} from "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler"
import {$ISlotType, $ISlotType$$Type} from "top.theillusivec4.curios.api.type.ISlotType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$IIconHelper, $IIconHelper$$Type} from "top.theillusivec4.curios.api.type.util.IIconHelper"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $CuriosApi {
static readonly "MODID": StringJS

constructor()

public static "getSlot"(arg0: StringJS, arg1: boolean): $Optional<($ISlotType)>
public static "getSlot"(arg0: StringJS, arg1: $Level$$Type): $Optional<($ISlotType)>
/**
 * 
 * @deprecated
 */
public static "getSlot"(arg0: StringJS): $Optional<($ISlotType)>
public static "getCurio"(arg0: $ItemStack$$Type): $Optional<($ICurio)>
public static "getEntitySlots"(arg0: $EntityType$$Type<(any)>, arg1: $Level$$Type): $Map<(StringJS), ($ISlotType)>
public static "getEntitySlots"(arg0: $EntityType$$Type<(any)>, arg1: boolean): $Map<(StringJS), ($ISlotType)>
/**
 * 
 * @deprecated
 */
public static "getEntitySlots"(arg0: $EntityType$$Type<(any)>): $Map<(StringJS), ($ISlotType)>
public static "getEntitySlots"(arg0: $LivingEntity$$Type): $Map<(StringJS), ($ISlotType)>
/**
 * 
 * @deprecated
 */
public static "getSlots"(): $Map<(StringJS), ($ISlotType)>
public static "getSlots"(arg0: boolean): $Map<(StringJS), ($ISlotType)>
public static "getSlots"(arg0: $Level$$Type): $Map<(StringJS), ($ISlotType)>
public static "getPlayerSlots"(arg0: $Player$$Type): $Map<(StringJS), ($ISlotType)>
/**
 * 
 * @deprecated
 */
public static "getPlayerSlots"(): $Map<(StringJS), ($ISlotType)>
public static "getPlayerSlots"(arg0: $Level$$Type): $Map<(StringJS), ($ISlotType)>
public static "getPlayerSlots"(arg0: boolean): $Map<(StringJS), ($ISlotType)>
/**
 * 
 * @deprecated
 */
public static "getSlotIcon"(arg0: StringJS): $ResourceLocation
/**
 * 
 * @deprecated
 */
public static "getIconHelper"(): $IIconHelper
public static "registerCurio"(arg0: $Item$$Type, arg1: $ICurioItem$$Type): void
/**
 * 
 * @deprecated
 */
public static "setIconHelper"(arg0: $IIconHelper$$Type): void
public static "isStackValid"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
public static "getSlotId"(arg0: $SlotContext$$Type): $ResourceLocation
/**
 * 
 * @deprecated
 */
public static "setSlotHelper"(arg0: $ISlotHelper$$Type): void
/**
 * 
 * @deprecated
 */
public static "getSlotHelper"(): $ISlotHelper
public static "addModifier"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Attribute)>, arg2: $ResourceLocation$$Type, arg3: double, arg4: $AttributeModifier$Operation$$Type, arg5: StringJS): void
/**
 * 
 * @deprecated
 */
public static "getCuriosHelper"(): $ICuriosHelper
/**
 * 
 * @deprecated
 */
public static "setCuriosHelper"(arg0: $ICuriosHelper$$Type): void
public static "getItemStackSlots"(arg0: $ItemStack$$Type, arg1: $Level$$Type): $Map<(StringJS), ($ISlotType)>
/**
 * 
 * @deprecated
 */
public static "getItemStackSlots"(arg0: $ItemStack$$Type): $Map<(StringJS), ($ISlotType)>
public static "getItemStackSlots"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): $Map<(StringJS), ($ISlotType)>
public static "getItemStackSlots"(arg0: $ItemStack$$Type, arg1: boolean): $Map<(StringJS), ($ISlotType)>
public static "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public static "getCuriosInventory"(arg0: $LivingEntity$$Type): $Optional<($ICuriosItemHandler)>
public static "withSlotModifier"(arg0: $ItemAttributeModifiers$$Type, arg1: StringJS, arg2: $ResourceLocation$$Type, arg3: double, arg4: $AttributeModifier$Operation$$Type, arg5: $EquipmentSlotGroup$$Type): $ItemAttributeModifiers
public static "registerCurioPredicate"(arg0: $ResourceLocation$$Type, arg1: $Predicate$$Type<($SlotResult)>): void
public static "getCurioPredicate"(arg0: $ResourceLocation$$Type): $Optional<($Predicate<($SlotResult)>)>
public static "getCurioPredicates"(): $Map<($ResourceLocation), ($Predicate<($SlotResult)>)>
public static "testCurioPredicates"(arg0: $Set$$Type<($ResourceLocation$$Type)>, arg1: $SlotResult$$Type): boolean
public static "addSlotModifier"(arg0: $ItemStack$$Type, arg1: StringJS, arg2: $ResourceLocation$$Type, arg3: double, arg4: $AttributeModifier$Operation$$Type, arg5: StringJS): void
public static "addSlotModifier"(arg0: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>, arg1: StringJS, arg2: $ResourceLocation$$Type, arg3: double, arg4: $AttributeModifier$Operation$$Type): void
public static "broadcastCurioBreakEvent"(arg0: $SlotContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuriosApi$$Type = ($CuriosApi);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CuriosApi_ = $CuriosApi$$Type;
}}
declare module "top.theillusivec4.curios.common.util.EquipCurioTrigger$TriggerInstance" {
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$SlotPredicate, $SlotPredicate$$Type} from "top.theillusivec4.curios.api.SlotPredicate"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $EquipCurioTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($EquipCurioTrigger$TriggerInstance)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, item: $Optional$$Type<($ItemPredicate$$Type)>, location: $Optional$$Type<($LocationPredicate$$Type)>, slot: $Optional$$Type<($SlotPredicate$$Type)>)

public "item"(): $Optional<($ItemPredicate)>
public "slot"(): $Optional<($SlotPredicate)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $LootContext$$Type): boolean
public "location"(): $Optional<($LocationPredicate)>
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipCurioTrigger$TriggerInstance$$Type = ({"item"?: ($ItemPredicate$$Type)?, "location"?: ($LocationPredicate$$Type)?, "slot"?: ($SlotPredicate$$Type)?, "player"?: ($ContextAwarePredicate$$Type)?}) | ([item?: ($ItemPredicate$$Type)?, location?: ($LocationPredicate$$Type)?, slot?: ($SlotPredicate$$Type)?, player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipCurioTrigger$TriggerInstance_ = $EquipCurioTrigger$TriggerInstance$$Type;
}}
declare module "top.theillusivec4.curios.api.SlotResult" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SlotResult extends $Record {

constructor(slotContext: $SlotContext$$Type, stack: $ItemStack$$Type)

public "stack"(): $ItemStack
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "slotContext"(): $SlotContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotResult$$Type = ({"slotContext"?: $SlotContext$$Type, "stack"?: $ItemStack$$Type}) | ([slotContext?: $SlotContext$$Type, stack?: $ItemStack$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotResult_ = $SlotResult$$Type;
}}
declare module "top.theillusivec4.curios.api.type.inventory.IDynamicStackHandler" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$IItemHandler, $IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IDynamicStackHandler extends $IItemHandlerModifiable {

 "grow"(arg0: integer): void
 "shrink"(arg0: integer): void
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlots"(): integer
 "setPreviousStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getPreviousStackInSlot"(arg0: integer): $ItemStack
 "getBlock"(arg0: $Level$$Type): $BlockContainerJS
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "isMutable"(): boolean
 "getSlots"(): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "kjs$self"(): $IItemHandler
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
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}

export namespace $IDynamicStackHandler {
const probejs$$marker: never
}
export class $IDynamicStackHandler$$Static implements $IDynamicStackHandler {


 "grow"(arg0: integer): void
 "shrink"(arg0: integer): void
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getStackInSlot"(arg0: integer): $ItemStack
 "getSlots"(): integer
 "setPreviousStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getPreviousStackInSlot"(arg0: integer): $ItemStack
 "getBlock"(arg0: $Level$$Type): $BlockContainerJS
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "isMutable"(): boolean
 "getSlots"(): integer
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "kjs$self"(): $IItemHandler
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
export type $IDynamicStackHandler$$Type = ($IDynamicStackHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDynamicStackHandler_ = $IDynamicStackHandler$$Type;
}}
declare module "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$SlotResult, $SlotResult$$Type} from "top.theillusivec4.curios.api.SlotResult"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$ICurioStacksHandler, $ICurioStacksHandler$$Type} from "top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Logger, $Logger$$Type} from "org.slf4j.Logger"

export interface $ICuriosItemHandler {

 "reset"(): void
 "getModifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
 "findCurios"(arg0: $Predicate$$Type<($ItemStack)>, arg1: boolean, arg2: StringJS): $List<($SlotResult)>
 "findCurios"(...arg0: (StringJS)[]): $List<($SlotResult)>
 "findCurios"(arg0: $Predicate$$Type<($ItemStack)>): $List<($SlotResult)>
 "findCurios"(arg0: $Item$$Type): $List<($SlotResult)>
 "findCurios"(arg0: boolean, ...arg1: (StringJS)[]): $List<($SlotResult)>
 "findCurio"(arg0: StringJS, arg1: integer, arg2: boolean): $Optional<($SlotResult)>
 "findCurio"(arg0: StringJS, arg1: integer): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Predicate$$Type<($ItemStack)>, arg1: StringJS): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Item$$Type): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Predicate$$Type<($ItemStack)>): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Predicate$$Type<($ItemStack)>, arg1: boolean, arg2: StringJS): $Optional<($SlotResult)>
 "getCurios"(): $Map<(StringJS), ($ICurioStacksHandler)>
 "isEquipped"(arg0: $Item$$Type): boolean
 "isEquipped"(arg0: $Predicate$$Type<($ItemStack)>): boolean
/**
 * 
 * @deprecated
 */
 "processSlots"(): void
 "getSlots"(): integer
 "saveInventory"(arg0: boolean): $ListTag
/**
 * 
 * @deprecated
 */
 "growSlotType"(arg0: StringJS, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "shrinkSlotType"(arg0: StringJS, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "unlockSlotType"(arg0: StringJS, arg1: integer, arg2: boolean, arg3: boolean): void
/**
 * 
 * @deprecated
 */
 "lockSlotType"(arg0: StringJS): void
 "setCurios"(arg0: $Map$$Type<(StringJS), ($ICurioStacksHandler$$Type)>): void
 "isSlotActive"(arg0: StringJS, arg1: integer): boolean
 "setSlotActive"(arg0: StringJS, arg1: integer, arg2: boolean): void
 "setSlotsActive"(arg0: StringJS, arg1: boolean): void
 "getWearer"(): $LivingEntity
 "loadInventory"(arg0: $ListTag$$Type): void
/**
 * 
 * @deprecated
 */
 "getLockedSlots"(): $Set<(StringJS)>
 "readTag"(arg0: $Tag$$Type): void
 "writeTag"(): $Tag
 "removeSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
 "getEquippedCurios"(): $IItemHandlerModifiable
 "getLootingLevel"(arg0: $LootContext$$Type): integer
 "getFortuneLevel"(arg0: $LootContext$$Type): integer
 "getStacksHandler"(arg0: StringJS): $Optional<($ICurioStacksHandler)>
 "setEquippedCurio"(arg0: StringJS, arg1: integer, arg2: $ItemStack$$Type): void
 "removeSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type): void
 "clearSlotModifiers"(): void
 "addPermanentSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): void
 "getVisibleSlots"(): integer
 "loseInvalidStack"(arg0: $ItemStack$$Type): void
 "handleInvalidStacks"(): void
 "getUpdatingInventories"(): $Set<($ICurioStacksHandler)>
/**
 * 
 * @deprecated
 */
 "getFortuneBonus"(): integer
 "addTransientSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
 "clearCachedSlotModifiers"(): void
 "addTransientSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): void
 "addPermanentSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
get "modifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
get "curios"(): $Map<(StringJS), ($ICurioStacksHandler)>
get "slots"(): integer
set "curios"(value: $Map$$Type<(StringJS), ($ICurioStacksHandler$$Type)>)
get "wearer"(): $LivingEntity
get "lockedSlots"(): $Set<(StringJS)>
get "equippedCurios"(): $IItemHandlerModifiable
get "visibleSlots"(): integer
get "updatingInventories"(): $Set<($ICurioStacksHandler)>
get "fortuneBonus"(): integer
}

export namespace $ICuriosItemHandler {
const LOGGER: $Logger
const probejs$$marker: never
}
export class $ICuriosItemHandler$$Static implements $ICuriosItemHandler {
static readonly "LOGGER": $Logger


 "reset"(): void
 "getModifiers"(): $Multimap<(StringJS), ($AttributeModifier)>
 "findCurios"(arg0: $Predicate$$Type<($ItemStack)>, arg1: boolean, arg2: StringJS): $List<($SlotResult)>
 "findCurios"(...arg0: (StringJS)[]): $List<($SlotResult)>
 "findCurios"(arg0: $Predicate$$Type<($ItemStack)>): $List<($SlotResult)>
 "findCurios"(arg0: $Item$$Type): $List<($SlotResult)>
 "findCurios"(arg0: boolean, ...arg1: (StringJS)[]): $List<($SlotResult)>
 "findCurio"(arg0: StringJS, arg1: integer, arg2: boolean): $Optional<($SlotResult)>
 "findCurio"(arg0: StringJS, arg1: integer): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Predicate$$Type<($ItemStack)>, arg1: StringJS): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Item$$Type): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Predicate$$Type<($ItemStack)>): $Optional<($SlotResult)>
 "findFirstCurio"(arg0: $Predicate$$Type<($ItemStack)>, arg1: boolean, arg2: StringJS): $Optional<($SlotResult)>
 "getCurios"(): $Map<(StringJS), ($ICurioStacksHandler)>
 "isEquipped"(arg0: $Item$$Type): boolean
 "isEquipped"(arg0: $Predicate$$Type<($ItemStack)>): boolean
/**
 * 
 * @deprecated
 */
 "processSlots"(): void
 "getSlots"(): integer
 "saveInventory"(arg0: boolean): $ListTag
/**
 * 
 * @deprecated
 */
 "growSlotType"(arg0: StringJS, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "shrinkSlotType"(arg0: StringJS, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "unlockSlotType"(arg0: StringJS, arg1: integer, arg2: boolean, arg3: boolean): void
/**
 * 
 * @deprecated
 */
 "lockSlotType"(arg0: StringJS): void
 "setCurios"(arg0: $Map$$Type<(StringJS), ($ICurioStacksHandler$$Type)>): void
 "isSlotActive"(arg0: StringJS, arg1: integer): boolean
 "setSlotActive"(arg0: StringJS, arg1: integer, arg2: boolean): void
 "setSlotsActive"(arg0: StringJS, arg1: boolean): void
 "getWearer"(): $LivingEntity
 "loadInventory"(arg0: $ListTag$$Type): void
/**
 * 
 * @deprecated
 */
 "getLockedSlots"(): $Set<(StringJS)>
 "readTag"(arg0: $Tag$$Type): void
 "writeTag"(): $Tag
 "removeSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
 "getEquippedCurios"(): $IItemHandlerModifiable
 "getLootingLevel"(arg0: $LootContext$$Type): integer
 "getFortuneLevel"(arg0: $LootContext$$Type): integer
 "getStacksHandler"(arg0: StringJS): $Optional<($ICurioStacksHandler)>
 "setEquippedCurio"(arg0: StringJS, arg1: integer, arg2: $ItemStack$$Type): void
 "removeSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type): void
 "clearSlotModifiers"(): void
 "addPermanentSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): void
 "getVisibleSlots"(): integer
 "loseInvalidStack"(arg0: $ItemStack$$Type): void
 "handleInvalidStacks"(): void
 "getUpdatingInventories"(): $Set<($ICurioStacksHandler)>
/**
 * 
 * @deprecated
 */
 "getFortuneBonus"(): integer
 "addTransientSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
 "clearCachedSlotModifiers"(): void
 "addTransientSlotModifier"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: double, arg3: $AttributeModifier$Operation$$Type): void
 "addPermanentSlotModifiers"(arg0: $Multimap$$Type<(StringJS), ($AttributeModifier$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICuriosItemHandler$$Type = ($ICuriosItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICuriosItemHandler_ = $ICuriosItemHandler$$Type;
}}
declare module "top.theillusivec4.curios.api.type.capability.ICurioItem" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ICurio, $ICurio$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio"
import {$ICurio$DropRule, $ICurio$DropRule$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$EnderMan, $EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio$SoundInfo"

export interface $ICurioItem {

 "canEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
 "isEnderMask"(arg0: $SlotContext$$Type, arg1: $EnderMan$$Type, arg2: $ItemStack$$Type): boolean
 "getEquipSound"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $ICurio$SoundInfo
 "curioTick"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "curioBreak"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "canSync"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
 "writeSyncData"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $CompoundTag
 "readSyncData"(arg0: $SlotContext$$Type, arg1: $CompoundTag$$Type, arg2: $ItemStack$$Type): void
 "onEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
 "onUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
 "canUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
 "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: boolean, arg3: $ItemStack$$Type): $ICurio$DropRule
/**
 * 
 * @deprecated
 */
 "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: integer, arg3: boolean, arg4: $ItemStack$$Type): $ICurio$DropRule
 "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "hasCurioCapability"(arg0: $ItemStack$$Type): boolean
 "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
 "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $ItemStack$$Type): $List<($Component)>
 "getLootingLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer
 "getFortuneLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer
 "canWalkOnPowderedSnow"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
 "makesPiglinsNeutral"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
 "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $UUID$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
 "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
/**
 * 
 * @deprecated
 */
 "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $ItemStack$$Type): $List<($Component)>
 "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>
}

export namespace $ICurioItem {
const defaultInstance: $ICurio
const probejs$$marker: never
}
export class $ICurioItem$$Static implements $ICurioItem {
static readonly "defaultInstance": $ICurio


 "canEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
 "isEnderMask"(arg0: $SlotContext$$Type, arg1: $EnderMan$$Type, arg2: $ItemStack$$Type): boolean
 "getEquipSound"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $ICurio$SoundInfo
 "curioTick"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "curioBreak"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "canSync"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
 "writeSyncData"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $CompoundTag
 "readSyncData"(arg0: $SlotContext$$Type, arg1: $CompoundTag$$Type, arg2: $ItemStack$$Type): void
 "onEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
 "onUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
 "canUnequip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
 "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: boolean, arg3: $ItemStack$$Type): $ICurio$DropRule
/**
 * 
 * @deprecated
 */
 "getDropRule"(arg0: $SlotContext$$Type, arg1: $DamageSource$$Type, arg2: integer, arg3: boolean, arg4: $ItemStack$$Type): $ICurio$DropRule
 "onEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): void
 "hasCurioCapability"(arg0: $ItemStack$$Type): boolean
 "canEquipFromUse"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
 "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "getAttributesTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $ItemStack$$Type): $List<($Component)>
 "getLootingLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer
 "getFortuneLevel"(arg0: $SlotContext$$Type, arg1: $LootContext$$Type, arg2: $ItemStack$$Type): integer
 "canWalkOnPowderedSnow"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
 "makesPiglinsNeutral"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
 "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $UUID$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
 "getAttributeModifiers"(arg0: $SlotContext$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemStack$$Type): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
/**
 * 
 * @deprecated
 */
 "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $ItemStack$$Type): $List<($Component)>
 "getSlotsTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $Item$TooltipContext$$Type, arg2: $ItemStack$$Type): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurioItem$$Type = ($ICurioItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurioItem_ = $ICurioItem$$Type;
}}
declare module "top.theillusivec4.curios.api.SlotContext" {
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SlotContext extends $Record {

constructor(identifier: StringJS, entity: $LivingEntity$$Type, index: integer, cosmetic: boolean, visible: boolean)

public "entity"(): $LivingEntity
public "identifier"(): StringJS
public "visible"(): boolean
public "index"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "cosmetic"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotContext$$Type = ({"entity"?: $LivingEntity$$Type, "identifier"?: StringJS, "index"?: integer, "cosmetic"?: boolean, "visible"?: boolean}) | ([entity?: $LivingEntity$$Type, identifier?: StringJS, index?: integer, cosmetic?: boolean, visible?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotContext_ = $SlotContext$$Type;
}}
declare module "top.theillusivec4.curios.api.type.capability.ICurio$SoundInfo" {
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ICurio$SoundInfo extends $Record {

constructor(soundEvent: $SoundEvent$$Type, volume: float, pitch: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "volume"(): float
public "pitch"(): float
/**
 * 
 * @deprecated
 */
public "getVolume"(): float
/**
 * 
 * @deprecated
 */
public "getPitch"(): float
public "soundEvent"(): $SoundEvent
/**
 * 
 * @deprecated
 */
public "getSoundEvent"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurio$SoundInfo$$Type = ({"pitch"?: float, "volume"?: float, "soundEvent"?: $SoundEvent$$Type}) | ([pitch?: float, volume?: float, soundEvent?: $SoundEvent$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurio$SoundInfo_ = $ICurio$SoundInfo$$Type;
}}
declare module "top.theillusivec4.curios.api.event.CurioDropsEvent" {
import {$LivingEvent, $LivingEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICuriosItemHandler, $ICuriosItemHandler$$Type} from "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"

export class $CurioDropsEvent extends $LivingEvent implements $ICancellableEvent {

constructor(arg0: $LivingEntity$$Type, arg1: $ICuriosItemHandler$$Type, arg2: $DamageSource$$Type, arg3: $Collection$$Type<($ItemEntity$$Type)>, arg4: integer, arg5: boolean)

public "getSource"(): $DamageSource
public "getDrops"(): $Collection<($ItemEntity)>
public "isRecentlyHit"(): boolean
public "getCurioHandler"(): $ICuriosItemHandler
public "getLootingLevel"(): integer
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "source"(): $DamageSource
get "drops"(): $Collection<($ItemEntity)>
get "recentlyHit"(): boolean
get "curioHandler"(): $ICuriosItemHandler
get "lootingLevel"(): integer
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioDropsEvent$$Type = ($CurioDropsEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioDropsEvent_ = $CurioDropsEvent$$Type;
}}
declare module "top.theillusivec4.curios.api.event.DropRulesEvent" {
import {$LivingEvent, $LivingEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICuriosItemHandler, $ICuriosItemHandler$$Type} from "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler"
import {$ICurio$DropRule, $ICurio$DropRule$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Tuple, $Tuple$$Type} from "net.minecraft.util.Tuple"

export class $DropRulesEvent extends $LivingEvent {

constructor(arg0: $LivingEntity$$Type, arg1: $ICuriosItemHandler$$Type, arg2: $DamageSource$$Type, arg3: integer, arg4: boolean)

public "getSource"(): $DamageSource
public "addOverride"(arg0: $Predicate$$Type<($ItemStack)>, arg1: $ICurio$DropRule$$Type): void
public "getOverrides"(): $ImmutableList<($Tuple<($Predicate<($ItemStack)>), ($ICurio$DropRule)>)>
public "isRecentlyHit"(): boolean
public "getCurioHandler"(): $ICuriosItemHandler
public "getLootingLevel"(): integer
get "source"(): $DamageSource
get "overrides"(): $ImmutableList<($Tuple<($Predicate<($ItemStack)>), ($ICurio$DropRule)>)>
get "recentlyHit"(): boolean
get "curioHandler"(): $ICuriosItemHandler
get "lootingLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropRulesEvent$$Type = ($DropRulesEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropRulesEvent_ = $DropRulesEvent$$Type;
}}
declare module "top.theillusivec4.curios.api.extensions.ICurioSlotExtension" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export interface $ICurioSlotExtension {

 "getSlotTooltip"(arg0: $SlotContext$$Type, arg1: $TooltipFlag$$Type): $List<($Component)>
 "getCloneStack"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $ItemStack
 "getDisplayStack"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $ItemStack
}

export namespace $ICurioSlotExtension {
const DEFAULT: $ICurioSlotExtension
function from(arg0: StringJS): $ICurioSlotExtension
const probejs$$marker: never
}
export class $ICurioSlotExtension$$Static implements $ICurioSlotExtension {
static readonly "DEFAULT": $ICurioSlotExtension


static "from"(arg0: StringJS): $ICurioSlotExtension
 "getSlotTooltip"(arg0: $SlotContext$$Type, arg1: $TooltipFlag$$Type): $List<($Component)>
 "getCloneStack"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $ItemStack
 "getDisplayStack"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurioSlotExtension$$Type = ($ICurioSlotExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurioSlotExtension_ = $ICurioSlotExtension$$Type;
}}
declare module "top.theillusivec4.curios.api.event.CurioCanUnequipEvent" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$LivingEvent, $LivingEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"

export class $CurioCanUnequipEvent extends $LivingEvent {

constructor(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type)

public "getStack"(): $ItemStack
public "getSlotContext"(): $SlotContext
public "getUnequipResult"(): $TriState
public "setUnequipResult"(arg0: $TriState$$Type): void
get "stack"(): $ItemStack
get "slotContext"(): $SlotContext
get "unequipResult"(): $TriState
set "unequipResult"(value: $TriState$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioCanUnequipEvent$$Type = ($CurioCanUnequipEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioCanUnequipEvent_ = $CurioCanUnequipEvent$$Type;
}}
declare module "top.theillusivec4.curios.api.type.util.IIconHelper" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

/**
 * 
 * @deprecated
 */
export interface $IIconHelper {

/**
 * 
 * @deprecated
 */
 "getIcon"(arg0: StringJS): $ResourceLocation
/**
 * 
 * @deprecated
 */
 "clearIcons"(): void
/**
 * 
 * @deprecated
 */
 "addIcon"(arg0: StringJS, arg1: $ResourceLocation$$Type): void
}

export namespace $IIconHelper {
const probejs$$marker: never
}
export class $IIconHelper$$Static implements $IIconHelper {


/**
 * 
 * @deprecated
 */
 "getIcon"(arg0: StringJS): $ResourceLocation
/**
 * 
 * @deprecated
 */
 "clearIcons"(): void
/**
 * 
 * @deprecated
 */
 "addIcon"(arg0: StringJS, arg1: $ResourceLocation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIconHelper$$Type = ($IIconHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIconHelper_ = $IIconHelper$$Type;
}}
declare module "top.theillusivec4.curios.api.event.CurioAttributeModifierEvent" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $CurioAttributeModifierEvent extends $Event {

constructor(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type, arg2: $ResourceLocation$$Type, arg3: $Multimap$$Type<($Holder$$Type<($Attribute$$Type)>), ($AttributeModifier$$Type)>)

public "removeAttribute"(arg0: $Holder$$Type<($Attribute)>): $Collection<($AttributeModifier)>
public "getModifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
public "getId"(): $ResourceLocation
public "getItemStack"(): $ItemStack
public "removeModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type): boolean
public "getSlotContext"(): $SlotContext
public "addModifier"(arg0: $Holder$$Type<($Attribute)>, arg1: $AttributeModifier$$Type): boolean
public "clearModifiers"(): void
public "getOriginalModifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
get "modifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
get "id"(): $ResourceLocation
get "itemStack"(): $ItemStack
get "slotContext"(): $SlotContext
get "originalModifiers"(): $Multimap<($Holder<($Attribute)>), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioAttributeModifierEvent$$Type = ($CurioAttributeModifierEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioAttributeModifierEvent_ = $CurioAttributeModifierEvent$$Type;
}}
declare module "top.theillusivec4.curios.api.SlotPredicate" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SlotPredicate extends $Record {
static readonly "CODEC": $Codec<($SlotPredicate)>

constructor(slots: $List$$Type<(StringJS)>, index: $MinMaxBounds$Ints$$Type)

public "slots"(): $List<(StringJS)>
public "index"(): $MinMaxBounds$Ints
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $SlotContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotPredicate$$Type = ({"slots"?: $List$$Type<(StringJS)>, "index"?: $MinMaxBounds$Ints$$Type}) | ([slots?: $List$$Type<(StringJS)>, index?: $MinMaxBounds$Ints$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotPredicate_ = $SlotPredicate$$Type;
}}
declare module "top.theillusivec4.curios.api.event.CurioChangeEvent" {
import {$LivingEvent, $LivingEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $CurioChangeEvent extends $LivingEvent {

constructor(arg0: $LivingEntity$$Type, arg1: StringJS, arg2: integer, arg3: $ItemStack$$Type, arg4: $ItemStack$$Type)

public "getIdentifier"(): StringJS
public "getFrom"(): $ItemStack
public "getTo"(): $ItemStack
public "getSlotIndex"(): integer
get "identifier"(): StringJS
get "from"(): $ItemStack
get "to"(): $ItemStack
get "slotIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurioChangeEvent$$Type = ($CurioChangeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CurioChangeEvent_ = $CurioChangeEvent$$Type;
}}
declare module "top.theillusivec4.curios.api.type.util.ICuriosHelper" {
import {$ImmutableTriple, $ImmutableTriple$$Type} from "org.apache.commons.lang3.tuple.ImmutableTriple"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$ICurio, $ICurio$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$SlotResult, $SlotResult$$Type} from "top.theillusivec4.curios.api.SlotResult"
import {$TriConsumer, $TriConsumer$$Type} from "org.apache.logging.log4j.util.TriConsumer"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ICuriosItemHandler, $ICuriosItemHandler$$Type} from "top.theillusivec4.curios.api.type.capability.ICuriosItemHandler"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

/**
 * 
 * @deprecated
 */
export interface $ICuriosHelper {

/**
 * 
 * @deprecated
 */
 "getCurio"(arg0: $ItemStack$$Type): $Optional<($ICurio)>
/**
 * 
 * @deprecated
 */
 "findCurios"(arg0: $LivingEntity$$Type, arg1: $Item$$Type): $List<($SlotResult)>
/**
 * 
 * @deprecated
 */
 "findCurios"(arg0: $LivingEntity$$Type, arg1: $Predicate$$Type<($ItemStack)>): $List<($SlotResult)>
/**
 * 
 * @deprecated
 */
 "findCurios"(arg0: $LivingEntity$$Type, ...arg1: (StringJS)[]): $List<($SlotResult)>
/**
 * 
 * @deprecated
 */
 "findCurio"(arg0: $LivingEntity$$Type, arg1: StringJS, arg2: integer): $Optional<($SlotResult)>
/**
 * 
 * @deprecated
 */
 "findFirstCurio"(arg0: $LivingEntity$$Type, arg1: $Item$$Type): $Optional<($SlotResult)>
/**
 * 
 * @deprecated
 */
 "findFirstCurio"(arg0: $LivingEntity$$Type, arg1: $Predicate$$Type<($ItemStack)>): $Optional<($SlotResult)>
/**
 * 
 * @deprecated
 */
 "isStackValid"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
 "onBrokenCurio"(arg0: $SlotContext$$Type): void
/**
 * 
 * @deprecated
 */
 "onBrokenCurio"(arg0: StringJS, arg1: integer, arg2: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
 "getCurioTags"(arg0: $Item$$Type): $Set<(StringJS)>
/**
 * 
 * @deprecated
 */
 "getEquippedCurios"(arg0: $LivingEntity$$Type): $Optional<($IItemHandlerModifiable)>
/**
 * 
 * @deprecated
 */
 "setEquippedCurio"(arg0: $LivingEntity$$Type, arg1: StringJS, arg2: integer, arg3: $ItemStack$$Type): void
/**
 * 
 * @deprecated
 */
 "getCuriosHandler"(arg0: $LivingEntity$$Type): $Optional<($ICuriosItemHandler)>
/**
 * 
 * @deprecated
 */
 "findEquippedCurio"(arg0: $Item$$Type, arg1: $LivingEntity$$Type): $Optional<($ImmutableTriple<(StringJS), (integer), ($ItemStack)>)>
/**
 * 
 * @deprecated
 */
 "findEquippedCurio"(arg0: $Predicate$$Type<($ItemStack)>, arg1: $LivingEntity$$Type): $Optional<($ImmutableTriple<(StringJS), (integer), ($ItemStack)>)>
/**
 * 
 * @deprecated
 */
 "setBrokenCurioConsumer"(arg0: $Consumer$$Type<($SlotContext)>): void
/**
 * 
 * @deprecated
 */
 "setBrokenCurioConsumer"(arg0: $TriConsumer$$Type<(StringJS), (integer), ($LivingEntity$$Type)>): void
set "brokenCurioConsumer"(value: $Consumer$$Type<($SlotContext)>)
set "brokenCurioConsumer"(value: $TriConsumer$$Type<(StringJS), (integer), ($LivingEntity$$Type)>)
}

export namespace $ICuriosHelper {
const probejs$$marker: never
}
export class $ICuriosHelper$$Static implements $ICuriosHelper {


/**
 * 
 * @deprecated
 */
 "getCurio"(arg0: $ItemStack$$Type): $Optional<($ICurio)>
/**
 * 
 * @deprecated
 */
 "findCurios"(arg0: $LivingEntity$$Type, arg1: $Item$$Type): $List<($SlotResult)>
/**
 * 
 * @deprecated
 */
 "findCurios"(arg0: $LivingEntity$$Type, arg1: $Predicate$$Type<($ItemStack)>): $List<($SlotResult)>
/**
 * 
 * @deprecated
 */
 "findCurios"(arg0: $LivingEntity$$Type, ...arg1: (StringJS)[]): $List<($SlotResult)>
/**
 * 
 * @deprecated
 */
 "findCurio"(arg0: $LivingEntity$$Type, arg1: StringJS, arg2: integer): $Optional<($SlotResult)>
/**
 * 
 * @deprecated
 */
 "findFirstCurio"(arg0: $LivingEntity$$Type, arg1: $Item$$Type): $Optional<($SlotResult)>
/**
 * 
 * @deprecated
 */
 "findFirstCurio"(arg0: $LivingEntity$$Type, arg1: $Predicate$$Type<($ItemStack)>): $Optional<($SlotResult)>
/**
 * 
 * @deprecated
 */
 "isStackValid"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type): boolean
/**
 * 
 * @deprecated
 */
 "onBrokenCurio"(arg0: $SlotContext$$Type): void
/**
 * 
 * @deprecated
 */
 "onBrokenCurio"(arg0: StringJS, arg1: integer, arg2: $LivingEntity$$Type): void
/**
 * 
 * @deprecated
 */
 "getCurioTags"(arg0: $Item$$Type): $Set<(StringJS)>
/**
 * 
 * @deprecated
 */
 "getEquippedCurios"(arg0: $LivingEntity$$Type): $Optional<($IItemHandlerModifiable)>
/**
 * 
 * @deprecated
 */
 "setEquippedCurio"(arg0: $LivingEntity$$Type, arg1: StringJS, arg2: integer, arg3: $ItemStack$$Type): void
/**
 * 
 * @deprecated
 */
 "getCuriosHandler"(arg0: $LivingEntity$$Type): $Optional<($ICuriosItemHandler)>
/**
 * 
 * @deprecated
 */
 "findEquippedCurio"(arg0: $Item$$Type, arg1: $LivingEntity$$Type): $Optional<($ImmutableTriple<(StringJS), (integer), ($ItemStack)>)>
/**
 * 
 * @deprecated
 */
 "findEquippedCurio"(arg0: $Predicate$$Type<($ItemStack)>, arg1: $LivingEntity$$Type): $Optional<($ImmutableTriple<(StringJS), (integer), ($ItemStack)>)>
/**
 * 
 * @deprecated
 */
 "setBrokenCurioConsumer"(arg0: $Consumer$$Type<($SlotContext)>): void
/**
 * 
 * @deprecated
 */
 "setBrokenCurioConsumer"(arg0: $TriConsumer$$Type<(StringJS), (integer), ($LivingEntity$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICuriosHelper$$Type = ($ICuriosHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICuriosHelper_ = $ICuriosHelper$$Type;
}}
declare module "top.theillusivec4.curios.mixin.core.AccessorEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorEntity {

 "getFirstTick"(): boolean

(): boolean
get "firstTick"(): boolean
}

export namespace $AccessorEntity {
const probejs$$marker: never
}
export class $AccessorEntity$$Static implements $AccessorEntity {


 "getFirstTick"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorEntity$$Type = (() => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorEntity_ = $AccessorEntity$$Type;
}}
declare module "top.theillusivec4.curios.api.client.ICurioRenderer" {
import {$HumanoidModel, $HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RenderLayerParent, $RenderLayerParent$$Type} from "net.minecraft.client.renderer.entity.RenderLayerParent"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$EntityModel, $EntityModel$$Type} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export interface $ICurioRenderer {

 "render"<T extends $LivingEntity, M extends $EntityModel<(T)>>(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type, arg2: $PoseStack$$Type, arg3: $RenderLayerParent$$Type<(T), (M)>, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void

(arg0: $ItemStack, arg1: $SlotContext, arg2: $PoseStack, arg3: $RenderLayerParent<(T), (M)>, arg4: $MultiBufferSource, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
}

export namespace $ICurioRenderer {
function translateIfSneaking(arg0: $PoseStack$$Type, arg1: $LivingEntity$$Type): void
function rotateIfSneaking(arg0: $PoseStack$$Type, arg1: $LivingEntity$$Type): void
function followHeadRotations(arg0: $LivingEntity$$Type, ...arg1: ($ModelPart$$Type)[]): void
function followBodyRotations(arg0: $LivingEntity$$Type, ...arg1: ($HumanoidModel$$Type<($LivingEntity$$Type)>)[]): void
const probejs$$marker: never
}
export class $ICurioRenderer$$Static implements $ICurioRenderer {


 "render"<T extends $LivingEntity, M extends $EntityModel<(T)>>(arg0: $ItemStack$$Type, arg1: $SlotContext$$Type, arg2: $PoseStack$$Type, arg3: $RenderLayerParent$$Type<(T), (M)>, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
static "translateIfSneaking"(arg0: $PoseStack$$Type, arg1: $LivingEntity$$Type): void
static "rotateIfSneaking"(arg0: $PoseStack$$Type, arg1: $LivingEntity$$Type): void
static "followHeadRotations"(arg0: $LivingEntity$$Type, ...arg1: ($ModelPart$$Type)[]): void
static "followBodyRotations"(arg0: $LivingEntity$$Type, ...arg1: ($HumanoidModel$$Type<($LivingEntity$$Type)>)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurioRenderer$$Type = ((arg0: $ItemStack, arg1: $SlotContext, arg2: $PoseStack, arg3: $RenderLayerParent<(T), (M)>, arg4: $MultiBufferSource, arg5: integer, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurioRenderer_ = $ICurioRenderer$$Type;
}}
declare module "top.theillusivec4.curios.api.type.inventory.ICurioStacksHandler" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IDynamicStackHandler, $IDynamicStackHandler$$Type} from "top.theillusivec4.curios.api.type.inventory.IDynamicStackHandler"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$ICurio$DropRule, $ICurio$DropRule$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$Set, $Set$$Type} from "java.util.Set"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export interface $ICurioStacksHandler {

/**
 * 
 * @deprecated
 */
 "grow"(arg0: integer): void
 "getIdentifier"(): StringJS
 "getStacks"(): $IDynamicStackHandler
 "getModifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
 "update"(): void
/**
 * 
 * @deprecated
 */
 "shrink"(arg0: integer): void
 "deserializeNBT"(arg0: $CompoundTag$$Type): void
 "serializeNBT"(): $CompoundTag
 "getRenders"(): $NonNullList<(boolean)>
 "removeModifier"(arg0: $ResourceLocation$$Type): void
 "isVisible"(): boolean
 "getSlots"(): integer
 "hasCosmetic"(): boolean
 "copyModifiers"(arg0: $ICurioStacksHandler$$Type): void
 "getSyncTag"(): $CompoundTag
 "applySyncTag"(arg0: $CompoundTag$$Type): void
/**
 * 
 * @deprecated
 */
 "getSizeShift"(): integer
 "getDropRule"(): $ICurio$DropRule
 "clearModifiers"(): void
 "addPermanentModifier"(arg0: $AttributeModifier$$Type): void
 "addTransientModifier"(arg0: $AttributeModifier$$Type): void
 "getCosmeticStacks"(): $IDynamicStackHandler
 "getActiveStates"(): $NonNullList<(boolean)>
 "updateActiveState"(arg0: integer): void
 "canToggleRendering"(): boolean
 "getPermanentModifiers"(): $Set<($AttributeModifier)>
 "getCachedModifiers"(): $Set<($AttributeModifier)>
 "clearCachedModifiers"(): void
 "getModifiersByOperation"(arg0: $AttributeModifier$Operation$$Type): $Collection<($AttributeModifier)>
get "identifier"(): StringJS
get "stacks"(): $IDynamicStackHandler
get "modifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
get "renders"(): $NonNullList<(boolean)>
get "visible"(): boolean
get "slots"(): integer
get "syncTag"(): $CompoundTag
get "sizeShift"(): integer
get "dropRule"(): $ICurio$DropRule
get "cosmeticStacks"(): $IDynamicStackHandler
get "activeStates"(): $NonNullList<(boolean)>
get "permanentModifiers"(): $Set<($AttributeModifier)>
get "cachedModifiers"(): $Set<($AttributeModifier)>
}

export namespace $ICurioStacksHandler {
const probejs$$marker: never
}
export class $ICurioStacksHandler$$Static implements $ICurioStacksHandler {


/**
 * 
 * @deprecated
 */
 "grow"(arg0: integer): void
 "getIdentifier"(): StringJS
 "getStacks"(): $IDynamicStackHandler
 "getModifiers"(): $Map<($ResourceLocation), ($AttributeModifier)>
 "update"(): void
/**
 * 
 * @deprecated
 */
 "shrink"(arg0: integer): void
 "deserializeNBT"(arg0: $CompoundTag$$Type): void
 "serializeNBT"(): $CompoundTag
 "getRenders"(): $NonNullList<(boolean)>
 "removeModifier"(arg0: $ResourceLocation$$Type): void
 "isVisible"(): boolean
 "getSlots"(): integer
 "hasCosmetic"(): boolean
 "copyModifiers"(arg0: $ICurioStacksHandler$$Type): void
 "getSyncTag"(): $CompoundTag
 "applySyncTag"(arg0: $CompoundTag$$Type): void
/**
 * 
 * @deprecated
 */
 "getSizeShift"(): integer
 "getDropRule"(): $ICurio$DropRule
 "clearModifiers"(): void
 "addPermanentModifier"(arg0: $AttributeModifier$$Type): void
 "addTransientModifier"(arg0: $AttributeModifier$$Type): void
 "getCosmeticStacks"(): $IDynamicStackHandler
 "getActiveStates"(): $NonNullList<(boolean)>
 "updateActiveState"(arg0: integer): void
 "canToggleRendering"(): boolean
 "getPermanentModifiers"(): $Set<($AttributeModifier)>
 "getCachedModifiers"(): $Set<($AttributeModifier)>
 "clearCachedModifiers"(): void
 "getModifiersByOperation"(arg0: $AttributeModifier$Operation$$Type): $Collection<($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurioStacksHandler$$Type = ($ICurioStacksHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurioStacksHandler_ = $ICurioStacksHandler$$Type;
}}
declare module "top.theillusivec4.curios.common.util.EquipCurioTrigger" {
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$EquipCurioTrigger$TriggerInstance, $EquipCurioTrigger$TriggerInstance$$Type} from "top.theillusivec4.curios.common.util.EquipCurioTrigger$TriggerInstance"

export class $EquipCurioTrigger extends $SimpleCriterionTrigger<($EquipCurioTrigger$TriggerInstance)> {
static readonly "INSTANCE": $EquipCurioTrigger

constructor()

public "trigger"(arg0: $SlotContext$$Type, arg1: $ServerPlayer$$Type, arg2: $ItemStack$$Type): void
public "trigger"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type): void
public "codec"(): $Codec<($EquipCurioTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipCurioTrigger$$Type = ($EquipCurioTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipCurioTrigger_ = $EquipCurioTrigger$$Type;
}}
declare module "top.theillusivec4.curios.api.extensions.RegisterCuriosExtensionsEvent" {
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$ICurioSlotExtension, $ICurioSlotExtension$$Type} from "top.theillusivec4.curios.api.extensions.ICurioSlotExtension"
import {$IModBusEvent, $IModBusEvent$$Type} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterCuriosExtensionsEvent extends $Event implements $IModBusEvent {

constructor()

public "registerSlotExtension"(arg0: $ICurioSlotExtension$$Type, ...arg1: (StringJS)[]): void
public "isSlotExtensionRegistered"(arg0: StringJS): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterCuriosExtensionsEvent$$Type = ($RegisterCuriosExtensionsEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegisterCuriosExtensionsEvent_ = $RegisterCuriosExtensionsEvent$$Type;
}}
declare module "top.theillusivec4.curios.api.type.ISlotType" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ICurio$DropRule, $ICurio$DropRule$$Type} from "top.theillusivec4.curios.api.type.capability.ICurio$DropRule"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $ISlotType extends $Comparable<($ISlotType)> {

/**
 * 
 * @deprecated
 */
 "isLocked"(): boolean
 "getIdentifier"(): StringJS
 "getOrder"(): integer
 "getSize"(): integer
/**
 * 
 * @deprecated
 */
 "getPriority"(): integer
/**
 * 
 * @deprecated
 */
 "isVisible"(): boolean
 "writeNbt"(): $CompoundTag
 "getIcon"(): $ResourceLocation
 "useNativeGui"(): boolean
 "getValidators"(): $Set<($ResourceLocation)>
 "hasCosmetic"(): boolean
 "getDropRule"(): $ICurio$DropRule
 "canToggleRendering"(): boolean
 "compareTo"(arg0: $ISlotType$$Type): integer
get "locked"(): boolean
get "identifier"(): StringJS
get "order"(): integer
get "size"(): integer
get "priority"(): integer
get "visible"(): boolean
get "icon"(): $ResourceLocation
get "validators"(): $Set<($ResourceLocation)>
get "dropRule"(): $ICurio$DropRule
}

export namespace $ISlotType {
const probejs$$marker: never
}
export class $ISlotType$$Static implements $ISlotType {


/**
 * 
 * @deprecated
 */
 "isLocked"(): boolean
 "getIdentifier"(): StringJS
 "getOrder"(): integer
 "getSize"(): integer
/**
 * 
 * @deprecated
 */
 "getPriority"(): integer
/**
 * 
 * @deprecated
 */
 "isVisible"(): boolean
 "writeNbt"(): $CompoundTag
 "getIcon"(): $ResourceLocation
 "useNativeGui"(): boolean
 "getValidators"(): $Set<($ResourceLocation)>
 "hasCosmetic"(): boolean
 "getDropRule"(): $ICurio$DropRule
 "canToggleRendering"(): boolean
 "compareTo"(arg0: $ISlotType$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlotType$$Type = ($ISlotType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlotType_ = $ISlotType$$Type;
}}
declare module "top.theillusivec4.curios.api.type.capability.ICurio$DropRule" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ICurio$DropRule extends $Enum<($ICurio$DropRule)> {
static readonly "ALWAYS_KEEP": $ICurio$DropRule
static readonly "DESTROY": $ICurio$DropRule
static readonly "ALWAYS_DROP": $ICurio$DropRule
static readonly "DEFAULT": $ICurio$DropRule


public static "values"(): ($ICurio$DropRule)[]
public static "valueOf"(arg0: StringJS): $ICurio$DropRule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurio$DropRule$$Type = (("default") | ("always_drop") | ("always_keep") | ("destroy"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurio$DropRule_ = $ICurio$DropRule$$Type;
}}
