declare module "com.almostreliable.morejs.features.teleport.EntityTeleportsEventJS" {
import {$TeleportType, $TeleportType$$Type} from "com.almostreliable.morejs.features.teleport.TeleportType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$KubeEntityEvent, $KubeEntityEvent$$Type} from "dev.latvian.mods.kubejs.entity.KubeEntityEvent"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $EntityTeleportsEventJS implements $KubeEntityEvent {

constructor(arg0: $Entity$$Type, arg1: double, arg2: double, arg3: double, arg4: $TeleportType$$Type)
constructor(arg0: $Entity$$Type, arg1: double, arg2: double, arg3: double, arg4: $Level$$Type, arg5: $TeleportType$$Type)

public "getEntity"(): $Entity
public "getY"(): double
public "getType"(): $TeleportType
public "setX"(arg0: double): void
public "setY"(arg0: double): void
public "setZ"(arg0: double): void
public "getX"(): double
public "getZ"(): double
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
get "entity"(): $Entity
get "y"(): double
get "type"(): $TeleportType
set "x"(value: double)
set "y"(value: double)
set "z"(value: double)
get "x"(): double
get "z"(): double
get "level"(): $Level
get "player"(): $Player
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTeleportsEventJS$$Type = ($EntityTeleportsEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityTeleportsEventJS_ = $EntityTeleportsEventJS$$Type;
}}
declare module "com.almostreliable.lootjs.core.LootBucket" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$ListIterator, $ListIterator$$Type} from "java.util.ListIterator"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$NullableFunction, $NullableFunction$$Type} from "com.almostreliable.lootjs.util.NullableFunction"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $LootBucket implements $Iterable<($ItemStack)> {

constructor(arg0: $LootContext$$Type)
constructor(arg0: $LootContext$$Type, arg1: $List$$Type<($ItemStack$$Type)>)

public "addItem"(arg0: $ItemStack$$Type): void
public "hasItem"(arg0: $ItemFilter$$Type): boolean
public "remove"(arg0: $ItemFilter$$Type): void
public "size"(): integer
public "get"(arg0: integer): $ItemStack
public "extract"(arg0: $ItemFilter$$Type): $LootBucket
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: $ItemFilter$$Type, arg1: $ItemLootEntry$$Type): void
public "replace"(arg0: $ItemFilter$$Type, arg1: $ItemLootEntry$$Type, arg2: boolean): void
public "iterator"(): $ListIterator<($ItemStack)>
public "merge"(arg0: $LootBucket$$Type): void
public "addEntry"(arg0: $LootEntry$$Type): void
public "modifyItems"(arg0: $NullableFunction$$Type<($ItemStack), ($ItemStack$$Type)>): void
public "addAllItems"(arg0: $List$$Type<($ItemStack$$Type)>): void
public "spliterator"(): $Spliterator<($ItemStack)>
public "forEach"(arg0: $Consumer$$Type<($ItemStack)>): void
[Symbol.iterator](): IterableIterator<$ItemStack>;
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootBucket$$Type = ($LootBucket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootBucket_ = $LootBucket$$Type;
}}
declare module "com.almostreliable.lootjs.core.entry.LootEntry" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$List, $List$$Type} from "java.util.List"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$EmptyLootEntry, $EmptyLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$LootConditionsContainer, $LootConditionsContainer$$Type} from "com.almostreliable.lootjs.loot.LootConditionsContainer"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootPoolEntryType, $LootPoolEntryType$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TagLootEntry, $TagLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$TableReferenceLootEntry, $TableReferenceLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$CompositeLootEntry, $CompositeLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LootConditionList, $LootConditionList$$Type} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$DamageSourcePredicate, $DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export interface $LootEntry extends $LootConditionsContainer<($LootEntry)> {

 "getConditions"(): $LootConditionList
 "isDynamic"(): boolean
 "isEmpty"(): boolean
 "getType"(): $ResourceLocation
 "when"(arg0: $Consumer$$Type<($LootConditionList)>): $LootEntry
 "getVanillaEntry"(): $LootPoolEntryContainer
 "isReference"(): boolean
 "isSimple"(): boolean
 "isTag"(): boolean
 "isItem"(): boolean
 "collectDebugInfo"(arg0: $DebugInfo$$Type): void
 "getVanillaType"(): $LootPoolEntryType
 "isComposite"(): boolean
 "isAlternative"(): boolean
 "isSequence"(): boolean
 "isGroup"(): boolean
 "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootEntry
 "matchLocation"(arg0: $LocationPredicate$$Type): $LootEntry
 "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootEntry
 "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootEntry
 "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootEntry
 "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchCustomCondition"(arg0: $JsonObject$$Type): $LootEntry
 "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootEntry
 "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootEntry
 "survivesExplosion"(): $LootEntry
 "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootEntry
 "matchBlock"(arg0: $Block$$Type): $LootEntry
 "matchTool"(arg0: $ItemPredicate$$Type): $LootEntry
 "matchPlayer"(arg0: $EntityPredicate$$Type): $LootEntry
 "randomChance"(arg0: $NumberProvider$$Type): $LootEntry
 "killedByPlayer"(): $LootEntry
 "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootEntry
 "matchTime"(arg0: integer, arg1: integer): $LootEntry
 "matchMainHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchOffHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchHead"(arg0: $ItemFilter$$Type): $LootEntry
 "matchChest"(arg0: $ItemFilter$$Type): $LootEntry
 "matchLegs"(arg0: $ItemFilter$$Type): $LootEntry
 "matchFeet"(arg0: $ItemFilter$$Type): $LootEntry
 "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootEntry
 "matchWeather"(arg0: boolean, arg1: boolean): $LootEntry
 "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootEntry
 "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootEntry
 "isLightLevel"(arg0: integer, arg1: integer): $LootEntry
 "matchEntity"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDistance"(arg0: $DistancePredicate$$Type): $LootEntry
 "hasAnyStage"(...arg0: (string)[]): $LootEntry
 "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
get "conditions"(): $LootConditionList
get "dynamic"(): boolean
get "type"(): $ResourceLocation
get "vanillaEntry"(): $LootPoolEntryContainer
get "simple"(): boolean
get "item"(): boolean
get "vanillaType"(): $LootPoolEntryType
get "composite"(): boolean
}

export namespace $LootEntry {
const EMPTY_CONDITIONS: $List<($LootItemCondition)>
const EMPTY_FUNCTIONS: $List<($LootItemFunction)>
function group(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
function of(arg0: $ItemStack$$Type): $ItemLootEntry
function of(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
function empty(): $EmptyLootEntry
function reference(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
function sequence(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
function tag(arg0: string): $TagLootEntry
function tag(arg0: string, arg1: boolean): $TagLootEntry
function alternative(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
function ep(arg0: $EntityPredicate$$Type): $EntityPredicate
function ofItem(arg0: $Item$$Type): $ItemLootEntry
function testItem(arg0: string): $ItemLootEntry
function ofIngredient(arg0: $Ingredient$$Type): $CompositeLootEntry
function ofVanilla(arg0: $LootPoolEntryContainer$$Type): $LootEntry
const probejs$$marker: never
}
export class $LootEntry$$Static implements $LootEntry {
static readonly "EMPTY_CONDITIONS": $List<($LootItemCondition)>
static readonly "EMPTY_FUNCTIONS": $List<($LootItemFunction)>


 "getConditions"(): $LootConditionList
 "isDynamic"(): boolean
static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
 "isEmpty"(): boolean
static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
static "empty"(): $EmptyLootEntry
static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
 "getType"(): $ResourceLocation
static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
static "tag"(arg0: string): $TagLootEntry
static "tag"(arg0: string, arg1: boolean): $TagLootEntry
 "when"(arg0: $Consumer$$Type<($LootConditionList)>): $LootEntry
 "getVanillaEntry"(): $LootPoolEntryContainer
 "isReference"(): boolean
static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
 "isSimple"(): boolean
 "isTag"(): boolean
static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
 "isItem"(): boolean
 "collectDebugInfo"(arg0: $DebugInfo$$Type): void
static "testItem"(arg0: string): $ItemLootEntry
 "getVanillaType"(): $LootPoolEntryType
 "isComposite"(): boolean
 "isAlternative"(): boolean
 "isSequence"(): boolean
 "isGroup"(): boolean
static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
 "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootEntry
 "matchLocation"(arg0: $LocationPredicate$$Type): $LootEntry
 "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootEntry
 "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootEntry
 "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootEntry
 "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchCustomCondition"(arg0: $JsonObject$$Type): $LootEntry
 "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootEntry
 "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootEntry
 "survivesExplosion"(): $LootEntry
 "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootEntry
 "matchBlock"(arg0: $Block$$Type): $LootEntry
 "matchTool"(arg0: $ItemPredicate$$Type): $LootEntry
 "matchPlayer"(arg0: $EntityPredicate$$Type): $LootEntry
 "randomChance"(arg0: $NumberProvider$$Type): $LootEntry
 "killedByPlayer"(): $LootEntry
 "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootEntry
 "matchTime"(arg0: integer, arg1: integer): $LootEntry
 "matchMainHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchOffHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchHead"(arg0: $ItemFilter$$Type): $LootEntry
 "matchChest"(arg0: $ItemFilter$$Type): $LootEntry
 "matchLegs"(arg0: $ItemFilter$$Type): $LootEntry
 "matchFeet"(arg0: $ItemFilter$$Type): $LootEntry
 "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootEntry
 "matchWeather"(arg0: boolean, arg1: boolean): $LootEntry
 "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootEntry
 "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootEntry
 "isLightLevel"(arg0: integer, arg1: integer): $LootEntry
 "matchEntity"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDistance"(arg0: $DistancePredicate$$Type): $LootEntry
 "hasAnyStage"(...arg0: (string)[]): $LootEntry
 "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntry$$Type = (($ItemStack$$Type));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootEntry_ = $LootEntry$$Type;
}}
declare module "com.almostreliable.morejs.features.misc.PiglinPlayerBehaviorEventJS" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$PiglinPlayerBehaviorEventJS$PiglinBehavior, $PiglinPlayerBehaviorEventJS$PiglinBehavior$$Type} from "com.almostreliable.morejs.features.misc.PiglinPlayerBehaviorEventJS$PiglinBehavior"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$KubePlayerEvent, $KubePlayerEvent$$Type} from "dev.latvian.mods.kubejs.player.KubePlayerEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Piglin, $Piglin$$Type} from "net.minecraft.world.entity.monster.piglin.Piglin"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $PiglinPlayerBehaviorEventJS implements $KubePlayerEvent {

constructor(arg0: $Piglin$$Type, arg1: $Player$$Type, arg2: $Optional$$Type<($Player$$Type)>)

public "getEntity"(): $Player
public "ignoreHoldingCheck"(): void
public "isIgnoreHoldingCheck"(): boolean
public "setBehavior"(arg0: $PiglinPlayerBehaviorEventJS$PiglinBehavior$$Type): void
public "getBehavior"(): $PiglinPlayerBehaviorEventJS$PiglinBehavior
public "getPiglin"(): $Piglin
public "isAggressiveAlready"(): boolean
public "getPreviousTargetPlayer"(): $Player
public "getPlayer"(): $Player
public "getLevel"(): $Level
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
get "entity"(): $Player
set "behavior"(value: $PiglinPlayerBehaviorEventJS$PiglinBehavior$$Type)
get "behavior"(): $PiglinPlayerBehaviorEventJS$PiglinBehavior
get "piglin"(): $Piglin
get "aggressiveAlready"(): boolean
get "previousTargetPlayer"(): $Player
get "player"(): $Player
get "level"(): $Level
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PiglinPlayerBehaviorEventJS$$Type = ($PiglinPlayerBehaviorEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PiglinPlayerBehaviorEventJS_ = $PiglinPlayerBehaviorEventJS$$Type;
}}
declare module "com.almostreliable.morejs.features.enchantment.EnchantmentState" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $EnchantmentState extends $Enum<($EnchantmentState)> {
static readonly "STORE_ENCHANTMENTS": $EnchantmentState
static readonly "IDLE": $EnchantmentState
static readonly "USE_STORED_ENCHANTMENTS": $EnchantmentState


public static "values"(): ($EnchantmentState)[]
public static "valueOf"(arg0: string): $EnchantmentState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentState$$Type = (("idle") | ("store_enchantments") | ("use_stored_enchantments"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentState_ = $EnchantmentState$$Type;
}}
declare module "com.almostreliable.lootjs.core.filters.IdFilter" {
import {$Pattern, $Pattern$$Type} from "java.util.regex.Pattern"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"

export interface $IdFilter extends $Predicate<($ResourceLocation)> {

 "test"(arg0: $ResourceLocation$$Type): boolean
 "or"(arg0: $Predicate$$Type<($ResourceLocation)>): $Predicate<($ResourceLocation)>
 "negate"(): $Predicate<($ResourceLocation)>
 "and"(arg0: $Predicate$$Type<($ResourceLocation)>): $Predicate<($ResourceLocation)>

(arg0: $ResourceLocation): boolean
}

export namespace $IdFilter {
function not<T>(arg0: $Predicate$$Type<($ResourceLocation)>): $Predicate<($ResourceLocation)>
function isEqual<T>(arg0: any): $Predicate<($ResourceLocation)>
const probejs$$marker: never
}
export class $IdFilter$$Static implements $IdFilter {


 "test"(arg0: $ResourceLocation$$Type): boolean
 "or"(arg0: $Predicate$$Type<($ResourceLocation)>): $Predicate<($ResourceLocation)>
 "negate"(): $Predicate<($ResourceLocation)>
 "and"(arg0: $Predicate$$Type<($ResourceLocation)>): $Predicate<($ResourceLocation)>
static "not"<T>(arg0: $Predicate$$Type<($ResourceLocation)>): $Predicate<($ResourceLocation)>
static "isEqual"<T>(arg0: any): $Predicate<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdFilter$$Type = ((arg0: $ResourceLocation) => boolean) | ((string) | ($Pattern$$Type));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IdFilter_ = $IdFilter$$Type;
}}
declare module "com.almostreliable.morejs.mixin.PotionBrewingBuilderAccessor" {
import {$PotionBrewing$Mix, $PotionBrewing$Mix$$Type} from "net.minecraft.world.item.alchemy.PotionBrewing$Mix"
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IBrewingRecipe, $IBrewingRecipe$$Type} from "net.neoforged.neoforge.common.brewing.IBrewingRecipe"

export interface $PotionBrewingBuilderAccessor {

 "morejs$getContainers"(): $List<($Ingredient)>
 "morejs$getPotionMixes"(): $List<($PotionBrewing$Mix<($Potion)>)>
 "morejs$getRecipes"(): $List<($IBrewingRecipe)>
 "morejs$getContainerMixes"(): $List<($PotionBrewing$Mix<($Item)>)>
}

export namespace $PotionBrewingBuilderAccessor {
const probejs$$marker: never
}
export class $PotionBrewingBuilderAccessor$$Static implements $PotionBrewingBuilderAccessor {


 "morejs$getContainers"(): $List<($Ingredient)>
 "morejs$getPotionMixes"(): $List<($PotionBrewing$Mix<($Potion)>)>
 "morejs$getRecipes"(): $List<($IBrewingRecipe)>
 "morejs$getContainerMixes"(): $List<($PotionBrewing$Mix<($Item)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewingBuilderAccessor$$Type = ($PotionBrewingBuilderAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionBrewingBuilderAccessor_ = $PotionBrewingBuilderAccessor$$Type;
}}
declare module "com.almostreliable.lootjs.core.filters.ItemFilter" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$EquipmentSlotGroup, $EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"

export interface $ItemFilter {

 "test"(arg0: $ItemStack$$Type): boolean
 "or"(arg0: $ItemFilter$$Type): $ItemFilter
 "negate"(): $ItemFilter
 "and"(arg0: $ItemFilter$$Type): $ItemFilter

(arg0: $ItemStack): boolean
}

export namespace $ItemFilter {
const BLOCK_ITEM: $ItemFilter
const ARMOR: $ItemFilter
const DAMAGED: $ItemFilter
const NONE: $ItemFilter
const ANY: $ItemFilter
const ENCHANTED: $ItemFilter
const EMPTY: $ItemFilter
const DAMAGEABLE: $ItemFilter
const EDIBLE: $ItemFilter
function anyOf(...arg0: ($ItemFilter$$Type)[]): $ItemFilter
function not(arg0: $ItemFilter$$Type): $ItemFilter
function tag(arg0: string): $ItemFilter
function item(arg0: $ItemStack$$Type, arg1: boolean): $ItemFilter
function allOf(...arg0: ($ItemFilter$$Type)[]): $ItemFilter
function equipmentSlot(arg0: $EquipmentSlot$$Type): $ItemFilter
function custom(arg0: $Predicate$$Type<($ItemStack)>, arg1: string): $ItemFilter
function custom(arg0: $Predicate$$Type<($ItemStack)>): $ItemFilter
function equipmentSlotGroup(arg0: $EquipmentSlotGroup$$Type): $ItemFilter
function hasStoredEnchantment(arg0: $IdFilter$$Type, arg1: $MinMaxBounds$Ints$$Type): $ItemFilter
function hasStoredEnchantment(arg0: $IdFilter$$Type): $ItemFilter
function hasEnchantment(arg0: $IdFilter$$Type): $ItemFilter
function hasEnchantment(arg0: $IdFilter$$Type, arg1: $MinMaxBounds$Ints$$Type): $ItemFilter
function anyToolAction(...arg0: (string)[]): $ItemFilter
function toolAction(...arg0: (string)[]): $ItemFilter
const probejs$$marker: never
}
export class $ItemFilter$$Static implements $ItemFilter {
static readonly "BLOCK_ITEM": $ItemFilter
static readonly "ARMOR": $ItemFilter
static readonly "DAMAGED": $ItemFilter
static readonly "NONE": $ItemFilter
static readonly "ANY": $ItemFilter
static readonly "ENCHANTED": $ItemFilter
static readonly "EMPTY": $ItemFilter
static readonly "DAMAGEABLE": $ItemFilter
static readonly "EDIBLE": $ItemFilter


static "anyOf"(...arg0: ($ItemFilter$$Type)[]): $ItemFilter
 "test"(arg0: $ItemStack$$Type): boolean
 "or"(arg0: $ItemFilter$$Type): $ItemFilter
 "negate"(): $ItemFilter
 "and"(arg0: $ItemFilter$$Type): $ItemFilter
static "not"(arg0: $ItemFilter$$Type): $ItemFilter
static "tag"(arg0: string): $ItemFilter
static "item"(arg0: $ItemStack$$Type, arg1: boolean): $ItemFilter
static "allOf"(...arg0: ($ItemFilter$$Type)[]): $ItemFilter
static "equipmentSlot"(arg0: $EquipmentSlot$$Type): $ItemFilter
static "custom"(arg0: $Predicate$$Type<($ItemStack)>, arg1: string): $ItemFilter
static "custom"(arg0: $Predicate$$Type<($ItemStack)>): $ItemFilter
static "equipmentSlotGroup"(arg0: $EquipmentSlotGroup$$Type): $ItemFilter
static "hasStoredEnchantment"(arg0: $IdFilter$$Type, arg1: $MinMaxBounds$Ints$$Type): $ItemFilter
static "hasStoredEnchantment"(arg0: $IdFilter$$Type): $ItemFilter
static "hasEnchantment"(arg0: $IdFilter$$Type): $ItemFilter
static "hasEnchantment"(arg0: $IdFilter$$Type, arg1: $MinMaxBounds$Ints$$Type): $ItemFilter
static "anyToolAction"(...arg0: (string)[]): $ItemFilter
static "toolAction"(...arg0: (string)[]): $ItemFilter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFilter$$Type = ((arg0: $ItemStack) => boolean) | (($Ingredient$$Type));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFilter_ = $ItemFilter$$Type;
}}
declare module "com.almostreliable.morejs.MoreJSBinding" {
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$TradeItem, $TradeItem$$Type} from "com.almostreliable.morejs.features.villager.TradeItem"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$IntRange, $IntRange$$Type} from "com.almostreliable.morejs.features.villager.IntRange"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WeightedList$Builder, $WeightedList$Builder$$Type} from "com.almostreliable.morejs.util.WeightedList$Builder"
import {$RegistryAccessContainer, $RegistryAccessContainer$$Type} from "dev.latvian.mods.kubejs.util.RegistryAccessContainer"
import {$WeightedList, $WeightedList$$Type} from "com.almostreliable.morejs.util.WeightedList"

export class $MoreJSBinding {

constructor()

public static "range"(arg0: any): $IntRange
public static "weightedList"(): $WeightedList$Builder<(any)>
public static "ofTradeItem"(arg0: $RegistryAccessContainer$$Type, arg1: any): $TradeItem
public static "ofWeightedList"(arg0: any): $WeightedList<(any)>
public static "findStructure"(arg0: $BlockPos$$Type, arg1: $ServerLevel$$Type, arg2: $HolderSet$$Type<($Structure)>, arg3: integer): $BlockPos
public static "findBiome"(arg0: $BlockPos$$Type, arg1: $ServerLevel$$Type, arg2: $HolderSet$$Type<($Biome)>, arg3: integer): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoreJSBinding$$Type = ($MoreJSBinding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoreJSBinding_ = $MoreJSBinding$$Type;
}}
declare module "com.almostreliable.morejs.mixin.villager.MerchantOfferAccessor" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$MerchantOffer, $MerchantOffer$$Type} from "net.minecraft.world.item.trading.MerchantOffer"

export interface $MerchantOfferAccessor {

}

export namespace $MerchantOfferAccessor {
function morejs$setCodec(arg0: $Codec$$Type<($MerchantOffer$$Type)>): void
const probejs$$marker: never
}
export class $MerchantOfferAccessor$$Static implements $MerchantOfferAccessor {


static "morejs$setCodec"(arg0: $Codec$$Type<($MerchantOffer$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MerchantOfferAccessor$$Type = ($MerchantOfferAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MerchantOfferAccessor_ = $MerchantOfferAccessor$$Type;
}}
declare module "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder" {
import {$AddAttributesFunction$Modifier$Builder, $AddAttributesFunction$Modifier$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier$Builder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EquipmentSlotGroup, $EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AddAttributesFunction, $AddAttributesFunction$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction"
import {$LootItemFunction$Builder, $LootItemFunction$Builder$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction$Builder"
import {$AddAttributesFunction$Modifier, $AddAttributesFunction$Modifier$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $AddAttributesFunction$Builder implements $LootItemFunction$Builder {

constructor()

public "add"(arg0: $AddAttributesFunction$Modifier$$Type): $AddAttributesFunction$Builder
public "add"(arg0: $Attribute$$Type, arg1: $ResourceLocation$$Type, arg2: $NumberProvider$$Type, arg3: $Consumer$$Type<($AddAttributesFunction$Modifier$Builder)>): $AddAttributesFunction$Builder
public "build"(): $AddAttributesFunction
public "simple"(arg0: $Attribute$$Type, arg1: $ResourceLocation$$Type, arg2: $NumberProvider$$Type): $AddAttributesFunction$Builder
public "simple"(arg0: float, arg1: $Attribute$$Type, arg2: $ResourceLocation$$Type, arg3: $NumberProvider$$Type): $AddAttributesFunction$Builder
public "forSlots"(arg0: $Attribute$$Type, arg1: $ResourceLocation$$Type, arg2: $NumberProvider$$Type, arg3: ($EquipmentSlotGroup$$Type)[]): $AddAttributesFunction$Builder
public "forSlots"(arg0: float, arg1: $Attribute$$Type, arg2: $ResourceLocation$$Type, arg3: $NumberProvider$$Type, arg4: ($EquipmentSlotGroup$$Type)[]): $AddAttributesFunction$Builder
public "preserveDefaults"(arg0: boolean): $AddAttributesFunction$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Builder$$Type = ($AddAttributesFunction$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction$Builder_ = $AddAttributesFunction$Builder$$Type;
}}
declare module "com.almostreliable.lootjs.loot.LootModificationEvent" {
import {$LootType, $LootType$$Type} from "com.almostreliable.lootjs.core.LootType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$BlockFilter, $BlockFilter$$Type} from "com.almostreliable.lootjs.util.BlockFilter"
import {$LootModifier$Builder, $LootModifier$Builder$$Type} from "com.almostreliable.lootjs.loot.modifier.LootModifier$Builder"
import {$IGlobalLootModifier, $IGlobalLootModifier$$Type} from "net.neoforged.neoforge.common.loot.IGlobalLootModifier"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$LootTableFilter, $LootTableFilter$$Type} from "com.almostreliable.lootjs.core.filters.LootTableFilter"

export class $LootModificationEvent {

constructor(arg0: $Map$$Type<($ResourceLocation$$Type), ($IGlobalLootModifier$$Type)>)

public "enableLogging"(): void
public "getGlobalModifiers"(): $List<(string)>
public "removeGlobalModifiers"(...arg0: ($IdFilter$$Type)[]): void
public "addTableModifier"(...arg0: ($LootTableFilter$$Type)[]): $LootModifier$Builder
/**
 * 
 * @deprecated
 */
public "addTypeModifier"(...arg0: ($LootType$$Type)[]): $LootModifier$Builder
public "addBlockModifier"(arg0: $BlockFilter$$Type): $LootModifier$Builder
public "addEntityModifier"(arg0: $HolderSet$$Type<($EntityType<(any)>)>): $LootModifier$Builder
public "disableWitherStarDrop"(): void
public "disableCreeperHeadDrop"(): void
public "disableZombieHeadDrop"(): void
public "disableLootModification"(...arg0: ($IdFilter$$Type)[]): void
public "disableSkeletonHeadDrop"(): void
get "globalModifiers"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootModificationEvent$$Type = ($LootModificationEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootModificationEvent_ = $LootModificationEvent$$Type;
}}
declare module "com.almostreliable.lootjs.loot.LootFunctionList" {
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$List, $List$$Type} from "java.util.List"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$LootItemFunctionType, $LootItemFunctionType$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunctionType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Map, $Map$$Type} from "java.util.Map"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$SetEnchantmentsFunction$Builder, $SetEnchantmentsFunction$Builder$$Type} from "net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction$Builder"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LootFunctionsContainer, $LootFunctionsContainer$$Type} from "com.almostreliable.lootjs.loot.LootFunctionsContainer"
import {$ListHolder, $ListHolder$$Type} from "com.almostreliable.lootjs.util.ListHolder"

export class $LootFunctionList extends $ListHolder<($LootItemFunction), ($LootItemFunction)> implements $LootFunctionsContainer<($LootFunctionList)>, $BiFunction<($ItemStack), ($LootContext), ($ItemStack)> {

constructor()
constructor(arg0: $List$$Type<($LootItemFunction$$Type)>)

public "remove"(arg0: $IdFilter$$Type): boolean
public "indexOf"(arg0: $LootItemFunctionType$$Type<(any)>): integer
public "lastIndexOf"(arg0: $LootItemFunctionType$$Type<(any)>): integer
public "replace"(arg0: $LootItemFunctionType$$Type<(any)>, arg1: $LootItemFunction$$Type): boolean
public "iterator"(): $Iterator<($LootItemFunction)>
public "apply"(arg0: $ItemStack$$Type, arg1: $LootContext$$Type): $ItemStack
public "apply"(arg0: any, arg1: any): any
public "contains"(arg0: $LootItemFunctionType$$Type<(any)>): boolean
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "addFunction"(arg0: $LootItemFunction$$Type): $LootFunctionList
public "setName"(arg0: $Component$$Type): $LootFunctionList
public "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): $LootFunctionList
public "enchantRandomly"(): $LootFunctionList
public "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): $LootFunctionList
public "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): $LootFunctionList
public "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): $LootFunctionList
public "simulateExplosionDecay"(): $LootFunctionList
public "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $LootFunctionList
public "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $LootFunctionList
public "setCount"(arg0: $NumberProvider$$Type): $LootFunctionList
public "smelt"(): $LootFunctionList
public "damage"(arg0: $NumberProvider$$Type): $LootFunctionList
public "enchantWithLevels"(arg0: $NumberProvider$$Type): $LootFunctionList
public "addPotion"(arg0: $Potion$$Type): $LootFunctionList
public "setCustomData"(arg0: $CompoundTag$$Type): $LootFunctionList
public "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $LootFunctionList
public "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): $LootFunctionList
public "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $LootFunctionList
public "addLore"(...arg0: ($Component$$Type)[]): $LootFunctionList
public "replaceLore"(...arg0: ($Component$$Type)[]): $LootFunctionList
public "toggleTooltips"(arg0: $Map$$Type<(string), (boolean)>): $LootFunctionList
public "jsonFunction"(arg0: $JsonObject$$Type): $LootFunctionList
public "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): $LootFunctionList
public "andThen"<V>(arg0: $Function$$Type<($ItemStack), (V)>): $BiFunction<($ItemStack), ($LootContext), (V)>
set "name"(value: $Component$$Type)
set "count"(value: $NumberProvider$$Type)
set "customData"(value: $CompoundTag$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootFunctionList$$Type = ($LootFunctionList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootFunctionList_ = $LootFunctionList$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.TradeTypes" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $TradeTypes extends $Enum<($TradeTypes)> {
static readonly "TreasureMapForEmeralds": $TradeTypes
static readonly "EnchantedItemForEmeralds": $TradeTypes
static readonly "ItemsForEmeralds": $TradeTypes
static readonly "ForgeBasic": $TradeTypes
static readonly "EmeraldsForVillagerTypeItem": $TradeTypes
static readonly "SuspiciousStewForEmeralds": $TradeTypes
static readonly "TippedArrowForItemsAndEmeralds": $TradeTypes
static readonly "DyedArmorForEmeralds": $TradeTypes
static readonly "EmeraldForItems": $TradeTypes
static readonly "EnchantBookForEmeralds": $TradeTypes
static readonly "ItemsAndEmeraldsToItems": $TradeTypes


public static "values"(): ($TradeTypes)[]
public static "valueOf"(arg0: string): $TradeTypes
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeTypes$$Type = (("dyedarmorforemeralds") | ("enchantbookforemeralds") | ("enchanteditemforemeralds") | ("itemsforemeralds") | ("itemsandemeraldstoitems") | ("emeraldforitems") | ("tippedarrowforitemsandemeralds") | ("suspiciousstewforemeralds") | ("treasuremapforemeralds") | ("emeraldsforvillagertypeitem") | ("forgebasic"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeTypes_ = $TradeTypes$$Type;
}}
declare module "com.almostreliable.lootjs.loot.extension.LootTableExtension" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$LootPool, $LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"
import {$LootFunctionList, $LootFunctionList$$Type} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$LootContextParamSet, $LootContextParamSet$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"

export interface $LootTableExtension {

 "lootjs$createFunctionList"(): $LootFunctionList
 "lootjs$setRandomSequence"(arg0: $ResourceLocation$$Type): void
 "lootjs$getRandomSequence"(): $ResourceLocation
 "lootjs$getPools"(): $List<($LootPool)>
 "lootjs$setPools"(arg0: $List$$Type<($LootPool$$Type)>): void
 "lootjs$setParamSet"(arg0: $LootContextParamSet$$Type): void
 "lootjs$getParamSet"(): $LootContextParamSet
}

export namespace $LootTableExtension {
function cast(arg0: $LootTable$$Type): $LootTableExtension
const probejs$$marker: never
}
export class $LootTableExtension$$Static implements $LootTableExtension {


static "cast"(arg0: $LootTable$$Type): $LootTableExtension
 "lootjs$createFunctionList"(): $LootFunctionList
 "lootjs$setRandomSequence"(arg0: $ResourceLocation$$Type): void
 "lootjs$getRandomSequence"(): $ResourceLocation
 "lootjs$getPools"(): $List<($LootPool)>
 "lootjs$setPools"(arg0: $List$$Type<($LootPool$$Type)>): void
 "lootjs$setParamSet"(arg0: $LootContextParamSet$$Type): void
 "lootjs$getParamSet"(): $LootContextParamSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableExtension$$Type = ($LootTableExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootTableExtension_ = $LootTableExtension$$Type;
}}
declare module "com.almostreliable.lootjs.core.filters.LootTableFilter" {
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"

export interface $LootTableFilter {

 "test"(arg0: $LootTable$$Type): boolean
 "test"(arg0: $LootContext$$Type): boolean
}

export namespace $LootTableFilter {
const probejs$$marker: never
}
export class $LootTableFilter$$Static implements $LootTableFilter {


 "test"(arg0: $LootTable$$Type): boolean
 "test"(arg0: $LootContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableFilter$$Type = ($LootTableFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootTableFilter_ = $LootTableFilter$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.events.SingleUpdateOfferEventJS" {
import {$MerchantOffer, $MerchantOffer$$Type} from "net.minecraft.world.item.trading.MerchantOffer"
import {$MerchantOffers, $MerchantOffers$$Type} from "net.minecraft.world.item.trading.MerchantOffers"
import {$UpdateOfferEventJS, $UpdateOfferEventJS$$Type} from "com.almostreliable.morejs.features.villager.events.UpdateOfferEventJS"
import {$List, $List$$Type} from "java.util.List"
import {$AbstractVillager, $AbstractVillager$$Type} from "net.minecraft.world.entity.npc.AbstractVillager"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type} from "net.minecraft.world.entity.npc.VillagerTrades$ItemListing"

export class $SingleUpdateOfferEventJS extends $UpdateOfferEventJS {

constructor(arg0: $AbstractVillager$$Type, arg1: $MerchantOffers$$Type, arg2: ($VillagerTrades$ItemListing$$Type)[], arg3: $MerchantOffer$$Type)

public "getOffer"(): $MerchantOffer
public "getUsedTrades"(): $List<($VillagerTrades$ItemListing)>
public "setOffer"(arg0: $VillagerTrades$ItemListing$$Type): void
public "setOffer"(arg0: $MerchantOffer$$Type): void
public "createRandomOffer"(): $MerchantOffer
get "offer"(): $MerchantOffer
get "usedTrades"(): $List<($VillagerTrades$ItemListing)>
set "offer"(value: $VillagerTrades$ItemListing$$Type)
set "offer"(value: $MerchantOffer$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleUpdateOfferEventJS$$Type = ($SingleUpdateOfferEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleUpdateOfferEventJS_ = $SingleUpdateOfferEventJS$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.OfferExtension" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MerchantOffer, $MerchantOffer$$Type} from "net.minecraft.world.item.trading.MerchantOffer"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $OfferExtension {

 "setVillagerExperience"(arg0: integer): void
 "setPriceMultiplier"(arg0: float): void
 "replaceEmeralds"(arg0: $Item$$Type): void
 "replaceItems"(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type): void
 "isDisabled"(): boolean
 "setDisabled"(arg0: boolean): void
 "getFirstCost"(): $ItemStack
 "setFirstCost"(arg0: $ItemStack$$Type): void
 "getSecondCost"(): $ItemStack
 "setSecondCost"(arg0: $ItemStack$$Type): void
 "getOutput"(): $ItemStack
 "setOutput"(arg0: $ItemStack$$Type): void
 "setMaxUses"(arg0: integer): void
 "setDemand"(arg0: integer): void
 "setRewardExp"(arg0: boolean): void
 "isRewardingExp"(): boolean
 "self"(): $MerchantOffer
set "villagerExperience"(value: integer)
set "priceMultiplier"(value: float)
get "disabled"(): boolean
set "disabled"(value: boolean)
get "firstCost"(): $ItemStack
set "firstCost"(value: $ItemStack$$Type)
get "secondCost"(): $ItemStack
set "secondCost"(value: $ItemStack$$Type)
get "output"(): $ItemStack
set "output"(value: $ItemStack$$Type)
set "maxUses"(value: integer)
set "demand"(value: integer)
set "rewardExp"(value: boolean)
get "rewardingExp"(): boolean
}

export namespace $OfferExtension {
const probejs$$marker: never
}
export class $OfferExtension$$Static implements $OfferExtension {


 "setVillagerExperience"(arg0: integer): void
 "setPriceMultiplier"(arg0: float): void
 "replaceEmeralds"(arg0: $Item$$Type): void
 "replaceItems"(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type): void
 "isDisabled"(): boolean
 "setDisabled"(arg0: boolean): void
 "getFirstCost"(): $ItemStack
 "setFirstCost"(arg0: $ItemStack$$Type): void
 "getSecondCost"(): $ItemStack
 "setSecondCost"(arg0: $ItemStack$$Type): void
 "getOutput"(): $ItemStack
 "setOutput"(arg0: $ItemStack$$Type): void
 "setMaxUses"(arg0: integer): void
 "setDemand"(arg0: integer): void
 "setRewardExp"(arg0: boolean): void
 "isRewardingExp"(): boolean
 "self"(): $MerchantOffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OfferExtension$$Type = ($OfferExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OfferExtension_ = $OfferExtension$$Type;
}}
declare module "com.almostreliable.morejs.features.enchantment.EnchantmentTableTooltipEventJS" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EnchantmentInstance, $EnchantmentInstance$$Type} from "net.minecraft.world.item.enchantment.EnchantmentInstance"
import {$EnchantmentMenu, $EnchantmentMenu$$Type} from "net.minecraft.world.inventory.EnchantmentMenu"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$EnchantmentTableEventJS, $EnchantmentTableEventJS$$Type} from "com.almostreliable.morejs.features.enchantment.EnchantmentTableEventJS"

export class $EnchantmentTableTooltipEventJS extends $EnchantmentTableEventJS {

constructor(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $Player$$Type, arg4: $EnchantmentMenu$$Type, arg5: integer, arg6: $List$$Type<($Component$$Type)>)

public "getSlot"(): integer
public "clearComponents"(): void
public "getComponents"(): $List<($Component)>
public "addComponent"(arg0: integer, arg1: $Component$$Type): void
public "addComponent"(arg0: $Component$$Type): void
public "removeComponent"(arg0: integer): void
public "getClue"(): $EnchantmentInstance
public "getClueId"(): $ResourceLocation
public "getRequiredLevel"(): integer
get "slot"(): integer
get "components"(): $List<($Component)>
get "clue"(): $EnchantmentInstance
get "clueId"(): $ResourceLocation
get "requiredLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableTooltipEventJS$$Type = ($EnchantmentTableTooltipEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableTooltipEventJS_ = $EnchantmentTableTooltipEventJS$$Type;
}}
declare module "com.almostreliable.lootjs.loot.LootFunctionsContainer" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$Map, $Map$$Type} from "java.util.Map"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$SetEnchantmentsFunction$Builder, $SetEnchantmentsFunction$Builder$$Type} from "net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction$Builder"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"

export interface $LootFunctionsContainer<F> {

 "setName"(arg0: $Component$$Type): F
 "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): F
 "enchantRandomly"(): F
 "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): F
 "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): F
 "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): F
 "simulateExplosionDecay"(): F
 "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): F
 "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): F
 "setCount"(arg0: $NumberProvider$$Type): F
 "smelt"(): F
 "damage"(arg0: $NumberProvider$$Type): F
 "enchantWithLevels"(arg0: $NumberProvider$$Type): F
 "addPotion"(arg0: $Potion$$Type): F
 "setCustomData"(arg0: $CompoundTag$$Type): F
 "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): F
 "addFunction"(arg0: $LootItemFunction$$Type): F
 "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): F
 "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): F
 "addLore"(...arg0: ($Component$$Type)[]): F
 "replaceLore"(...arg0: ($Component$$Type)[]): F
 "toggleTooltips"(arg0: $Map$$Type<(string), (boolean)>): F
 "jsonFunction"(arg0: $JsonObject$$Type): F
 "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): F

(arg0: $LootItemFunction): F
set "name"(value: $Component$$Type)
set "count"(value: $NumberProvider$$Type)
set "customData"(value: $CompoundTag$$Type)
}

export namespace $LootFunctionsContainer {
const probejs$$marker: never
}
export class $LootFunctionsContainer$$Static<F> implements $LootFunctionsContainer {


 "setName"(arg0: $Component$$Type): F
 "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): F
 "enchantRandomly"(): F
 "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): F
 "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): F
 "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): F
 "simulateExplosionDecay"(): F
 "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): F
 "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): F
 "setCount"(arg0: $NumberProvider$$Type): F
 "smelt"(): F
 "damage"(arg0: $NumberProvider$$Type): F
 "enchantWithLevels"(arg0: $NumberProvider$$Type): F
 "addPotion"(arg0: $Potion$$Type): F
 "setCustomData"(arg0: $CompoundTag$$Type): F
 "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): F
 "addFunction"(arg0: $LootItemFunction$$Type): F
 "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): F
 "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): F
 "addLore"(...arg0: ($Component$$Type)[]): F
 "replaceLore"(...arg0: ($Component$$Type)[]): F
 "toggleTooltips"(arg0: $Map$$Type<(string), (boolean)>): F
 "jsonFunction"(arg0: $JsonObject$$Type): F
 "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): F
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootFunctionsContainer$$Type<F> = ((arg0: $LootItemFunction) => F);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootFunctionsContainer_<F> = $LootFunctionsContainer$$Type<(F)>;
}}
declare module "com.almostreliable.morejs.features.misc.ExperiencePlayerEventJS" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$KubePlayerEvent, $KubePlayerEvent$$Type} from "dev.latvian.mods.kubejs.player.KubePlayerEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $ExperiencePlayerEventJS implements $KubePlayerEvent {

constructor(arg0: $Player$$Type, arg1: integer)

public "getEntity"(): $Player
public "getExperienceProgress"(): float
public "getTotalExperience"(): integer
public "getExperienceLevel"(): integer
public "getXpNeededForNextLevel"(): integer
public "setAmount"(arg0: integer): void
public "getAmount"(): integer
public "willLevelUp"(): boolean
public "setExperienceProgress"(arg0: float): void
public "setExperienceLevel"(arg0: integer): void
public "setTotalExperience"(arg0: integer): void
public "getRemainingExperience"(): integer
public "getPlayer"(): $Player
public "getLevel"(): $Level
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
get "entity"(): $Player
get "experienceProgress"(): float
get "totalExperience"(): integer
get "experienceLevel"(): integer
get "xpNeededForNextLevel"(): integer
set "amount"(value: integer)
get "amount"(): integer
set "experienceProgress"(value: float)
set "experienceLevel"(value: integer)
set "totalExperience"(value: integer)
get "remainingExperience"(): integer
get "player"(): $Player
get "level"(): $Level
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExperiencePlayerEventJS$$Type = ($ExperiencePlayerEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExperiencePlayerEventJS_ = $ExperiencePlayerEventJS$$Type;
}}
declare module "com.almostreliable.lootjs.core.entry.SimpleLootEntry" {
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$EmptyLootEntry, $EmptyLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootPoolEntryType, $LootPoolEntryType$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$TagLootEntry, $TagLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$TableReferenceLootEntry, $TableReferenceLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$LootFunctionList, $LootFunctionList$$Type} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$CompositeLootEntry, $CompositeLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$SetEnchantmentsFunction$Builder, $SetEnchantmentsFunction$Builder$$Type} from "net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction$Builder"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LootConditionList, $LootConditionList$$Type} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$LootFunctionsContainer, $LootFunctionsContainer$$Type} from "com.almostreliable.lootjs.loot.LootFunctionsContainer"
import {$DamageSourcePredicate, $DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export interface $SimpleLootEntry extends $LootEntry, $LootFunctionsContainer<($SimpleLootEntry)> {

 "apply"(arg0: $Consumer$$Type<($LootFunctionList)>): $SimpleLootEntry
 "when"(arg0: $Consumer$$Type<(any)>): $LootEntry
 "setCount"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "getWeight"(): integer
 "getFunctions"(): $LootFunctionList
 "setWeight"(arg0: integer): void
 "setQuality"(arg0: integer): void
 "addFunction"(arg0: $LootItemFunction$$Type): any
 "withWeight"(arg0: integer): $SimpleLootEntry
 "withQuality"(arg0: integer): $SimpleLootEntry
 "getQuality"(): integer
 "getConditions"(): $LootConditionList
 "isDynamic"(): boolean
 "isEmpty"(): boolean
 "getType"(): $ResourceLocation
 "getVanillaEntry"(): $LootPoolEntryContainer
 "isReference"(): boolean
 "isSimple"(): boolean
 "isTag"(): boolean
 "isItem"(): boolean
 "collectDebugInfo"(arg0: $DebugInfo$$Type): void
 "getVanillaType"(): $LootPoolEntryType
 "isComposite"(): boolean
 "isAlternative"(): boolean
 "isSequence"(): boolean
 "isGroup"(): boolean
 "setName"(arg0: $Component$$Type): $SimpleLootEntry
 "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): $SimpleLootEntry
 "enchantRandomly"(): $SimpleLootEntry
 "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): $SimpleLootEntry
 "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): $SimpleLootEntry
 "simulateExplosionDecay"(): $SimpleLootEntry
 "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
 "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
 "smelt"(): $SimpleLootEntry
 "damage"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "enchantWithLevels"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "addPotion"(arg0: $Potion$$Type): $SimpleLootEntry
 "setCustomData"(arg0: $CompoundTag$$Type): $SimpleLootEntry
 "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $SimpleLootEntry
 "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): $SimpleLootEntry
 "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $SimpleLootEntry
 "addLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
 "replaceLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
 "toggleTooltips"(arg0: $Map$$Type<(string), (boolean)>): $SimpleLootEntry
 "jsonFunction"(arg0: $JsonObject$$Type): $SimpleLootEntry
 "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): $SimpleLootEntry
 "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootEntry
 "matchLocation"(arg0: $LocationPredicate$$Type): $LootEntry
 "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootEntry
 "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootEntry
 "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootEntry
 "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchCustomCondition"(arg0: $JsonObject$$Type): $LootEntry
 "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootEntry
 "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootEntry
 "survivesExplosion"(): $LootEntry
 "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootEntry
 "matchBlock"(arg0: $Block$$Type): $LootEntry
 "matchTool"(arg0: $ItemPredicate$$Type): $LootEntry
 "matchPlayer"(arg0: $EntityPredicate$$Type): $LootEntry
 "randomChance"(arg0: $NumberProvider$$Type): $LootEntry
 "killedByPlayer"(): $LootEntry
 "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootEntry
 "matchTime"(arg0: integer, arg1: integer): $LootEntry
 "matchMainHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchOffHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchHead"(arg0: $ItemFilter$$Type): $LootEntry
 "matchChest"(arg0: $ItemFilter$$Type): $LootEntry
 "matchLegs"(arg0: $ItemFilter$$Type): $LootEntry
 "matchFeet"(arg0: $ItemFilter$$Type): $LootEntry
 "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootEntry
 "matchWeather"(arg0: boolean, arg1: boolean): $LootEntry
 "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootEntry
 "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootEntry
 "isLightLevel"(arg0: integer, arg1: integer): $LootEntry
 "matchEntity"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDistance"(arg0: $DistancePredicate$$Type): $LootEntry
 "hasAnyStage"(...arg0: (string)[]): $LootEntry
 "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
set "count"(value: $NumberProvider$$Type)
get "weight"(): integer
get "functions"(): $LootFunctionList
set "weight"(value: integer)
set "quality"(value: integer)
get "quality"(): integer
get "conditions"(): $LootConditionList
get "dynamic"(): boolean
get "type"(): $ResourceLocation
get "vanillaEntry"(): $LootPoolEntryContainer
get "simple"(): boolean
get "item"(): boolean
get "vanillaType"(): $LootPoolEntryType
get "composite"(): boolean
set "name"(value: $Component$$Type)
set "customData"(value: $CompoundTag$$Type)
}

export namespace $SimpleLootEntry {
function group(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
function of(arg0: $ItemStack$$Type): $ItemLootEntry
function of(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
function empty(): $EmptyLootEntry
function reference(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
function sequence(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
function tag(arg0: string): $TagLootEntry
function tag(arg0: string, arg1: boolean): $TagLootEntry
function alternative(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
function ep(arg0: $EntityPredicate$$Type): $EntityPredicate
function ofItem(arg0: $Item$$Type): $ItemLootEntry
function testItem(arg0: string): $ItemLootEntry
function ofIngredient(arg0: $Ingredient$$Type): $CompositeLootEntry
function ofVanilla(arg0: $LootPoolEntryContainer$$Type): $LootEntry
const probejs$$marker: never
}
export class $SimpleLootEntry$$Static implements $SimpleLootEntry {


 "apply"(arg0: $Consumer$$Type<($LootFunctionList)>): $SimpleLootEntry
 "when"(arg0: $Consumer$$Type<(any)>): $LootEntry
 "setCount"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "getWeight"(): integer
 "getFunctions"(): $LootFunctionList
 "setWeight"(arg0: integer): void
 "setQuality"(arg0: integer): void
 "addFunction"(arg0: $LootItemFunction$$Type): any
 "withWeight"(arg0: integer): $SimpleLootEntry
 "withQuality"(arg0: integer): $SimpleLootEntry
 "getQuality"(): integer
 "getConditions"(): $LootConditionList
 "isDynamic"(): boolean
static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
 "isEmpty"(): boolean
static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
static "empty"(): $EmptyLootEntry
static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
 "getType"(): $ResourceLocation
static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
static "tag"(arg0: string): $TagLootEntry
static "tag"(arg0: string, arg1: boolean): $TagLootEntry
 "getVanillaEntry"(): $LootPoolEntryContainer
 "isReference"(): boolean
static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
 "isSimple"(): boolean
 "isTag"(): boolean
static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
 "isItem"(): boolean
 "collectDebugInfo"(arg0: $DebugInfo$$Type): void
static "testItem"(arg0: string): $ItemLootEntry
 "getVanillaType"(): $LootPoolEntryType
 "isComposite"(): boolean
 "isAlternative"(): boolean
 "isSequence"(): boolean
 "isGroup"(): boolean
static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
 "setName"(arg0: $Component$$Type): $SimpleLootEntry
 "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): $SimpleLootEntry
 "enchantRandomly"(): $SimpleLootEntry
 "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): $SimpleLootEntry
 "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): $SimpleLootEntry
 "simulateExplosionDecay"(): $SimpleLootEntry
 "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
 "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
 "smelt"(): $SimpleLootEntry
 "damage"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "enchantWithLevels"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "addPotion"(arg0: $Potion$$Type): $SimpleLootEntry
 "setCustomData"(arg0: $CompoundTag$$Type): $SimpleLootEntry
 "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $SimpleLootEntry
 "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): $SimpleLootEntry
 "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $SimpleLootEntry
 "addLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
 "replaceLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
 "toggleTooltips"(arg0: $Map$$Type<(string), (boolean)>): $SimpleLootEntry
 "jsonFunction"(arg0: $JsonObject$$Type): $SimpleLootEntry
 "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): $SimpleLootEntry
 "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootEntry
 "matchLocation"(arg0: $LocationPredicate$$Type): $LootEntry
 "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootEntry
 "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootEntry
 "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootEntry
 "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchCustomCondition"(arg0: $JsonObject$$Type): $LootEntry
 "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootEntry
 "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootEntry
 "survivesExplosion"(): $LootEntry
 "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootEntry
 "matchBlock"(arg0: $Block$$Type): $LootEntry
 "matchTool"(arg0: $ItemPredicate$$Type): $LootEntry
 "matchPlayer"(arg0: $EntityPredicate$$Type): $LootEntry
 "randomChance"(arg0: $NumberProvider$$Type): $LootEntry
 "killedByPlayer"(): $LootEntry
 "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootEntry
 "matchTime"(arg0: integer, arg1: integer): $LootEntry
 "matchMainHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchOffHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchHead"(arg0: $ItemFilter$$Type): $LootEntry
 "matchChest"(arg0: $ItemFilter$$Type): $LootEntry
 "matchLegs"(arg0: $ItemFilter$$Type): $LootEntry
 "matchFeet"(arg0: $ItemFilter$$Type): $LootEntry
 "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootEntry
 "matchWeather"(arg0: boolean, arg1: boolean): $LootEntry
 "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootEntry
 "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootEntry
 "isLightLevel"(arg0: integer, arg1: integer): $LootEntry
 "matchEntity"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDistance"(arg0: $DistancePredicate$$Type): $LootEntry
 "hasAnyStage"(...arg0: (string)[]): $LootEntry
 "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleLootEntry$$Type = ($SimpleLootEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleLootEntry_ = $SimpleLootEntry$$Type;
}}
declare module "com.almostreliable.lootjs.loot.modifier.GroupedLootAction$Builder" {
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootAction, $LootAction$$Type} from "com.almostreliable.lootjs.loot.modifier.LootAction"
import {$Explosion$BlockInteraction, $Explosion$BlockInteraction$$Type} from "net.minecraft.world.level.Explosion$BlockInteraction"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$LootConditionsContainer, $LootConditionsContainer$$Type} from "com.almostreliable.lootjs.loot.LootConditionsContainer"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$LootActionContainer, $LootActionContainer$$Type} from "com.almostreliable.lootjs.loot.LootActionContainer"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$ModifyLootAction$Callback, $ModifyLootAction$Callback$$Type} from "com.almostreliable.lootjs.loot.modifier.handler.ModifyLootAction$Callback"
import {$MutableLootPool, $MutableLootPool$$Type} from "com.almostreliable.lootjs.loot.table.MutableLootPool"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$SetEnchantmentsFunction$Builder, $SetEnchantmentsFunction$Builder$$Type} from "net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction$Builder"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$GroupedLootAction, $GroupedLootAction$$Type} from "com.almostreliable.lootjs.loot.modifier.GroupedLootAction"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$LootFunctionsContainer, $LootFunctionsContainer$$Type} from "com.almostreliable.lootjs.loot.LootFunctionsContainer"
import {$DamageSourcePredicate, $DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export class $GroupedLootAction$Builder implements $LootConditionsContainer<($GroupedLootAction$Builder)>, $LootFunctionsContainer<($GroupedLootAction$Builder)>, $LootActionContainer<($GroupedLootAction$Builder)> {

constructor(arg0: $ItemFilter$$Type)
constructor()

public "build"(): $GroupedLootAction
public "rolls"(arg0: $NumberProvider$$Type): $GroupedLootAction$Builder
public "addFunction"(arg0: $LootItemFunction$$Type): $GroupedLootAction$Builder
public "addAction"(arg0: $LootAction$$Type): $LootActionContainer<(any)>
public "containsLoot"(arg0: $ItemFilter$$Type, arg1: boolean): $GroupedLootAction$Builder
public "containsLoot"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $GroupedLootAction$Builder
public "matchLocation"(arg0: $LocationPredicate$$Type): $GroupedLootAction$Builder
public "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $GroupedLootAction$Builder
public "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $GroupedLootAction$Builder
public "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $GroupedLootAction$Builder
public "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $GroupedLootAction$Builder
public "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $GroupedLootAction$Builder
public "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $GroupedLootAction$Builder
public "matchCustomCondition"(arg0: $JsonObject$$Type): $GroupedLootAction$Builder
public "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $GroupedLootAction$Builder
public "luck"(arg0: $MinMaxBounds$Doubles$$Type): $GroupedLootAction$Builder
public "survivesExplosion"(): $GroupedLootAction$Builder
public "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $GroupedLootAction$Builder
public "matchBlock"(arg0: $Block$$Type): $GroupedLootAction$Builder
public "matchTool"(arg0: $ItemPredicate$$Type): $GroupedLootAction$Builder
public "matchPlayer"(arg0: $EntityPredicate$$Type): $GroupedLootAction$Builder
public "randomChance"(arg0: $NumberProvider$$Type): $GroupedLootAction$Builder
public "killedByPlayer"(): $GroupedLootAction$Builder
public "matchTime"(arg0: long, arg1: integer, arg2: integer): $GroupedLootAction$Builder
public "matchTime"(arg0: integer, arg1: integer): $GroupedLootAction$Builder
public "matchMainHand"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchOffHand"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchHead"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchChest"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchLegs"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchFeet"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $GroupedLootAction$Builder
public "matchWeather"(arg0: boolean, arg1: boolean): $GroupedLootAction$Builder
public "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $GroupedLootAction$Builder
public "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $GroupedLootAction$Builder
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $GroupedLootAction$Builder
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $GroupedLootAction$Builder
public "isLightLevel"(arg0: integer, arg1: integer): $GroupedLootAction$Builder
public "matchEntity"(arg0: $EntityPredicate$$Type): $GroupedLootAction$Builder
public "matchAttacker"(arg0: $EntityPredicate$$Type): $GroupedLootAction$Builder
public "matchDistance"(arg0: $DistancePredicate$$Type): $GroupedLootAction$Builder
public "hasAnyStage"(...arg0: (string)[]): $GroupedLootAction$Builder
public "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $GroupedLootAction$Builder
public "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $GroupedLootAction$Builder
public "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $GroupedLootAction$Builder
public "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $GroupedLootAction$Builder
public "setName"(arg0: $Component$$Type): $GroupedLootAction$Builder
public "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): $GroupedLootAction$Builder
public "enchantRandomly"(): $GroupedLootAction$Builder
public "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): $GroupedLootAction$Builder
public "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): $GroupedLootAction$Builder
public "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): $GroupedLootAction$Builder
public "simulateExplosionDecay"(): $GroupedLootAction$Builder
public "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $GroupedLootAction$Builder
public "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $GroupedLootAction$Builder
public "setCount"(arg0: $NumberProvider$$Type): $GroupedLootAction$Builder
public "smelt"(): $GroupedLootAction$Builder
public "damage"(arg0: $NumberProvider$$Type): $GroupedLootAction$Builder
public "enchantWithLevels"(arg0: $NumberProvider$$Type): $GroupedLootAction$Builder
public "addPotion"(arg0: $Potion$$Type): $GroupedLootAction$Builder
public "setCustomData"(arg0: $CompoundTag$$Type): $GroupedLootAction$Builder
public "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $GroupedLootAction$Builder
public "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): $GroupedLootAction$Builder
public "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $GroupedLootAction$Builder
public "addLore"(...arg0: ($Component$$Type)[]): $GroupedLootAction$Builder
public "replaceLore"(...arg0: ($Component$$Type)[]): $GroupedLootAction$Builder
public "toggleTooltips"(arg0: $Map$$Type<(string), (boolean)>): $GroupedLootAction$Builder
public "jsonFunction"(arg0: $JsonObject$$Type): $GroupedLootAction$Builder
public "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): $GroupedLootAction$Builder
public "group"(arg0: $Consumer$$Type<($GroupedLootAction$Builder)>): $GroupedLootAction$Builder
public "group"(arg0: $ItemFilter$$Type, arg1: $Consumer$$Type<($GroupedLootAction$Builder)>): $GroupedLootAction$Builder
public "pool"(arg0: $Consumer$$Type<($MutableLootPool)>): $GroupedLootAction$Builder
public "modifyLoot"(arg0: $ItemFilter$$Type, arg1: $ModifyLootAction$Callback$$Type): $GroupedLootAction$Builder
public "dropExperience"(arg0: $NumberProvider$$Type): $GroupedLootAction$Builder
public "addLoot"(...arg0: ($LootEntry$$Type)[]): $GroupedLootAction$Builder
public "replaceLoot"(arg0: $ItemFilter$$Type, arg1: $ItemLootEntry$$Type, arg2: boolean): $GroupedLootAction$Builder
public "replaceLoot"(arg0: $ItemFilter$$Type, arg1: $ItemLootEntry$$Type): $GroupedLootAction$Builder
public "removeLoot"(arg0: $ItemFilter$$Type): $GroupedLootAction$Builder
public "customAction"(arg0: $LootAction$$Type): $GroupedLootAction$Builder
public "playerAction"(arg0: $Consumer$$Type<($ServerPlayer)>): $GroupedLootAction$Builder
public "addAlternativesLoot"(...arg0: ($LootEntry$$Type)[]): $GroupedLootAction$Builder
public "addSequenceLoot"(...arg0: ($LootEntry$$Type)[]): $GroupedLootAction$Builder
public "triggerExplosion"(arg0: float, arg1: $Explosion$BlockInteraction$$Type, arg2: boolean): $GroupedLootAction$Builder
public "triggerExplosion"(arg0: float, arg1: boolean, arg2: boolean): $GroupedLootAction$Builder
public "triggerLightningStrike"(arg0: boolean): $GroupedLootAction$Builder
set "name"(value: $Component$$Type)
set "count"(value: $NumberProvider$$Type)
set "customData"(value: $CompoundTag$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GroupedLootAction$Builder$$Type = ($GroupedLootAction$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GroupedLootAction$Builder_ = $GroupedLootAction$Builder$$Type;
}}
declare module "com.almostreliable.lootjs.loot.LootCondition" {
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$LootConditionsContainer, $LootConditionsContainer$$Type} from "com.almostreliable.lootjs.loot.LootConditionsContainer"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$DamageSourcePredicate, $DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export class $LootCondition implements $LootConditionsContainer<($LootItemCondition)> {

constructor()

public "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootItemCondition
public "matchLocation"(arg0: $LocationPredicate$$Type): $LootItemCondition
public "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootItemCondition
public "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootItemCondition
public "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootItemCondition
public "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootItemCondition
public "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootItemCondition
public "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootItemCondition
public "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootItemCondition
public "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootItemCondition
public "matchCustomCondition"(arg0: $JsonObject$$Type): $LootItemCondition
public "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootItemCondition
public "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootItemCondition
public "survivesExplosion"(): $LootItemCondition
public "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootItemCondition
public "matchBlock"(arg0: $Block$$Type): $LootItemCondition
public "matchTool"(arg0: $ItemPredicate$$Type): $LootItemCondition
public "matchPlayer"(arg0: $EntityPredicate$$Type): $LootItemCondition
public "randomChance"(arg0: $NumberProvider$$Type): $LootItemCondition
public "killedByPlayer"(): $LootItemCondition
public "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootItemCondition
public "matchTime"(arg0: integer, arg1: integer): $LootItemCondition
public "matchMainHand"(arg0: $ItemFilter$$Type): $LootItemCondition
public "matchOffHand"(arg0: $ItemFilter$$Type): $LootItemCondition
public "matchHead"(arg0: $ItemFilter$$Type): $LootItemCondition
public "matchChest"(arg0: $ItemFilter$$Type): $LootItemCondition
public "matchLegs"(arg0: $ItemFilter$$Type): $LootItemCondition
public "matchFeet"(arg0: $ItemFilter$$Type): $LootItemCondition
public "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootItemCondition
public "matchWeather"(arg0: boolean, arg1: boolean): $LootItemCondition
public "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootItemCondition
public "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootItemCondition
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootItemCondition
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootItemCondition
public "isLightLevel"(arg0: integer, arg1: integer): $LootItemCondition
public "matchEntity"(arg0: $EntityPredicate$$Type): $LootItemCondition
public "matchAttacker"(arg0: $EntityPredicate$$Type): $LootItemCondition
public "matchDistance"(arg0: $DistancePredicate$$Type): $LootItemCondition
public "hasAnyStage"(...arg0: (string)[]): $LootItemCondition
public "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootItemCondition
public "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootItemCondition
public "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootItemCondition
public "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootItemCondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCondition$$Type = ($LootCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootCondition_ = $LootCondition$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.trades.TransformableTrade" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$MerchantOffer, $MerchantOffer$$Type} from "net.minecraft.world.item.trading.MerchantOffer"
import {$TradeItem, $TradeItem$$Type} from "com.almostreliable.morejs.features.villager.TradeItem"
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$$Type} from "com.almostreliable.morejs.features.villager.trades.TransformableTrade$Transformer"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type} from "net.minecraft.world.entity.npc.VillagerTrades$ItemListing"

export class $TransformableTrade<T extends $VillagerTrades$ItemListing> implements $VillagerTrades$ItemListing {

constructor(arg0: ($TradeItem$$Type)[])

public "transform"(arg0: $TransformableTrade$Transformer$$Type): T
public "priceMultiplier"(arg0: float): T
public "villagerExperience"(arg0: integer): T
public "maxUses"(arg0: integer): T
public "getOffer"(arg0: $Entity$$Type, arg1: $RandomSource$$Type): $MerchantOffer
public "getFirstInput"(): $TradeItem
public "getSecondInput"(): $TradeItem
get "firstInput"(): $TradeItem
get "secondInput"(): $TradeItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformableTrade$$Type<T> = ($TransformableTrade<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformableTrade_<T> = $TransformableTrade$$Type<(T)>;
}}
declare module "com.almostreliable.lootjs.loot.AddAttributesFunction" {
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$List, $List$$Type} from "java.util.List"
import {$LootItemFunctionType, $LootItemFunctionType$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunctionType"
import {$ValidationContext, $ValidationContext$$Type} from "net.minecraft.world.level.storage.loot.ValidationContext"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$LootContextParam, $LootContextParam$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParam"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AddAttributesFunction$Modifier, $AddAttributesFunction$Modifier$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier"

export class $AddAttributesFunction implements $LootItemFunction {

constructor(arg0: boolean, arg1: $List$$Type<($AddAttributesFunction$Modifier$$Type)>)

public "apply"(arg0: any, arg1: any): any
public "apply"(arg0: $ItemStack$$Type, arg1: $LootContext$$Type): $ItemStack
public "getType"(): $LootItemFunctionType<(any)>
public static "decorate"(arg0: $BiFunction$$Type<($ItemStack), ($LootContext), ($ItemStack$$Type)>, arg1: $Consumer$$Type<($ItemStack)>, arg2: $LootContext$$Type): $Consumer<($ItemStack)>
public "when"(arg0: $Consumer$$Type<(any)>): $LootItemFunction
public "validate"(arg0: $ValidationContext$$Type): void
public "getReferencedContextParams"(): $Set<($LootContextParam<(any)>)>
public "andThen"<V>(arg0: $Function$$Type<($ItemStack), (V)>): $BiFunction<($ItemStack), ($LootContext), (V)>
get "type"(): $LootItemFunctionType<(any)>
get "referencedContextParams"(): $Set<($LootContextParam<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$$Type = ($AddAttributesFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction_ = $AddAttributesFunction$$Type;
}}
declare module "com.almostreliable.lootjs.loot.table.MutableLootTable" {
import {$LootType, $LootType$$Type} from "com.almostreliable.lootjs.core.LootType"
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$SimpleLootEntry, $SimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$LootFunctionList, $LootFunctionList$$Type} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$MutableLootPool, $MutableLootPool$$Type} from "com.almostreliable.lootjs.loot.table.MutableLootPool"
import {$LootContextParamSet, $LootContextParamSet$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$PostLootAction, $PostLootAction$$Type} from "com.almostreliable.lootjs.loot.table.PostLootAction"
import {$LootEntriesTransformer, $LootEntriesTransformer$$Type} from "com.almostreliable.lootjs.loot.table.LootEntriesTransformer"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"

export class $MutableLootTable implements $LootEntriesTransformer {

constructor(arg0: $LootContextParamSet$$Type, arg1: $ResourceLocation$$Type)
constructor(arg0: $LootTable$$Type, arg1: $ResourceLocation$$Type)
constructor(arg0: $LootTable$$Type)

public "clear"(): $MutableLootTable
public "apply"(arg0: $Consumer$$Type<($LootFunctionList)>): $MutableLootTable
public "getLocation"(): $ResourceLocation
public "print"(): void
public "getPool"(arg0: integer): $MutableLootPool
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>, arg1: boolean): $MutableLootTable
public "getFunctions"(): $LootFunctionList
public "onDrop"(arg0: $PostLootAction$$Type): $MutableLootTable
public "setRandomSequence"(arg0: $ResourceLocation$$Type): void
public "getRandomSequence"(): $ResourceLocation
public "getPools"(): $List<($MutableLootPool)>
public "getLootType"(): $LootType
public "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>, arg1: boolean): $MutableLootTable
public "firstPool"(arg0: $Consumer$$Type<($MutableLootPool)>): $MutableLootTable
public "firstPool"(): $MutableLootPool
public "createPool"(): $MutableLootPool
public "createPool"(arg0: $Consumer$$Type<($MutableLootPool)>): $MutableLootTable
public "getPoolByName"(arg0: string): $MutableLootPool
public "modifyPool"(arg0: integer, arg1: $Consumer$$Type<($MutableLootPool)>): $MutableLootTable
public "modifyPoolByName"(arg0: string, arg1: $Consumer$$Type<($MutableLootPool)>): $MutableLootTable
public "writeToVanillaTable"(): void
public "removeItem"(arg0: $ItemFilter$$Type): $LootEntriesTransformer
public "removeItem"(arg0: $ItemFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "hasItem"(arg0: $ItemFilter$$Type): boolean
public "removeReference"(arg0: $IdFilter$$Type): $LootEntriesTransformer
public "removeReference"(arg0: $IdFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "modifyItemEntry"(arg0: $UnaryOperator$$Type<($ItemLootEntry)>): $LootEntriesTransformer
public "removeTag"(arg0: string): $LootEntriesTransformer
public "removeTag"(arg0: string, arg1: boolean): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type, arg2: boolean): $LootEntriesTransformer
public "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
get "location"(): $ResourceLocation
get "functions"(): $LootFunctionList
set "randomSequence"(value: $ResourceLocation$$Type)
get "randomSequence"(): $ResourceLocation
get "pools"(): $List<($MutableLootPool)>
get "lootType"(): $LootType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableLootTable$$Type = ($MutableLootTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableLootTable_ = $MutableLootTable$$Type;
}}
declare module "com.almostreliable.lootjs.util.DebugInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DebugInfo {

constructor()

public "add"(arg0: string): void
public "release"(): void
public "push"(): void
public "pop"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugInfo$$Type = ($DebugInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DebugInfo_ = $DebugInfo$$Type;
}}
declare module "com.almostreliable.lootjs.kube.LootModificationEventJS" {
import {$KubeEvent, $KubeEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$LootModificationEvent, $LootModificationEvent$$Type} from "com.almostreliable.lootjs.loot.LootModificationEvent"
import {$IGlobalLootModifier, $IGlobalLootModifier$$Type} from "net.neoforged.neoforge.common.loot.IGlobalLootModifier"

export class $LootModificationEventJS extends $LootModificationEvent implements $KubeEvent {

constructor(arg0: $Map$$Type<($ResourceLocation$$Type), ($IGlobalLootModifier$$Type)>)

/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootModificationEventJS$$Type = ($LootModificationEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootModificationEventJS_ = $LootModificationEventJS$$Type;
}}
declare module "com.almostreliable.lootjs.loot.modifier.GroupedLootAction" {
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootBucket, $LootBucket$$Type} from "com.almostreliable.lootjs.core.LootBucket"
import {$List, $List$$Type} from "java.util.List"
import {$LootAction, $LootAction$$Type} from "com.almostreliable.lootjs.loot.modifier.LootAction"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"

export class $GroupedLootAction implements $LootAction {

constructor(arg0: $NumberProvider$$Type, arg1: $List$$Type<($LootItemCondition$$Type)>, arg2: $List$$Type<($LootItemFunction$$Type)>, arg3: $Collection$$Type<($LootAction$$Type)>, arg4: $ItemFilter$$Type, arg5: boolean)

public "apply"(arg0: $LootContext$$Type, arg1: $LootBucket$$Type): void
public "exact"(): boolean
public "actions"(): $List<($LootAction)>
public "functions"(): $List<($LootItemFunction)>
public "conditions"(): $List<($LootItemCondition)>
public "rolls"(): $NumberProvider
public "containsLootFilter"(): $ItemFilter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GroupedLootAction$$Type = ($GroupedLootAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GroupedLootAction_ = $GroupedLootAction$$Type;
}}
declare module "com.almostreliable.lootjs.loot.table.MutableLootPool" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$SimpleLootEntry, $SimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$LootPool, $LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$LootFunctionList, $LootFunctionList$$Type} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$LootEntryList, $LootEntryList$$Type} from "com.almostreliable.lootjs.loot.LootEntryList"
import {$LootEntryAppender, $LootEntryAppender$$Type} from "com.almostreliable.lootjs.loot.table.LootEntryAppender"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootConditionList, $LootConditionList$$Type} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$LootEntriesTransformer, $LootEntriesTransformer$$Type} from "com.almostreliable.lootjs.loot.table.LootEntriesTransformer"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"

export class $MutableLootPool implements $LootEntriesTransformer, $LootEntryAppender {

constructor(arg0: $LootPool$$Type)

public "getConditions"(): $LootConditionList
public "getName"(): string
public "name"(arg0: string): $MutableLootPool
public "apply"(arg0: $Consumer$$Type<($LootFunctionList)>): $MutableLootPool
public "addEntry"(arg0: $LootEntry$$Type): $LootEntryAppender
public "getEntries"(): $LootEntryList
public "when"(arg0: $Consumer$$Type<($LootConditionList)>): $MutableLootPool
public "removeEntry"(arg0: $Predicate$$Type<(any)>, arg1: boolean): $LootEntriesTransformer
public "getFunctions"(): $LootFunctionList
public "rolls"(arg0: $NumberProvider$$Type): $MutableLootPool
public "bonusRolls"(arg0: $NumberProvider$$Type): $MutableLootPool
public "modifyEntry"(arg0: $UnaryOperator$$Type<(any)>, arg1: boolean): $LootEntriesTransformer
public "getVanillaPool"(): $LootPool
public "removeItem"(arg0: $ItemFilter$$Type): $LootEntriesTransformer
public "removeItem"(arg0: $ItemFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "hasItem"(arg0: $ItemFilter$$Type): boolean
public "removeReference"(arg0: $IdFilter$$Type): $LootEntriesTransformer
public "removeReference"(arg0: $IdFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "modifyItemEntry"(arg0: $UnaryOperator$$Type<($ItemLootEntry)>): $LootEntriesTransformer
public "removeTag"(arg0: string): $LootEntriesTransformer
public "removeTag"(arg0: string, arg1: boolean): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type, arg2: boolean): $LootEntriesTransformer
public "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "addCustomEntry"(arg0: $JsonObject$$Type): $LootEntryAppender
get "conditions"(): $LootConditionList
get "entries"(): $LootEntryList
get "functions"(): $LootFunctionList
get "vanillaPool"(): $LootPool
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableLootPool$$Type = ($MutableLootPool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableLootPool_ = $MutableLootPool$$Type;
}}
declare module "com.almostreliable.lootjs.loot.LootFunction" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$Map, $Map$$Type} from "java.util.Map"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$SetEnchantmentsFunction$Builder, $SetEnchantmentsFunction$Builder$$Type} from "net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction$Builder"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$LootFunctionsContainer, $LootFunctionsContainer$$Type} from "com.almostreliable.lootjs.loot.LootFunctionsContainer"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $LootFunction extends $Record implements $LootFunctionsContainer<($LootItemFunction)> {

constructor()

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "addFunction"(arg0: $LootItemFunction$$Type): $LootItemFunction
public "setName"(arg0: $Component$$Type): $LootItemFunction
public "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): $LootItemFunction
public "enchantRandomly"(): $LootItemFunction
public "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): $LootItemFunction
public "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): $LootItemFunction
public "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): $LootItemFunction
public "simulateExplosionDecay"(): $LootItemFunction
public "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $LootItemFunction
public "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $LootItemFunction
public "setCount"(arg0: $NumberProvider$$Type): $LootItemFunction
public "smelt"(): $LootItemFunction
public "damage"(arg0: $NumberProvider$$Type): $LootItemFunction
public "enchantWithLevels"(arg0: $NumberProvider$$Type): $LootItemFunction
public "addPotion"(arg0: $Potion$$Type): $LootItemFunction
public "setCustomData"(arg0: $CompoundTag$$Type): $LootItemFunction
public "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $LootItemFunction
public "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): $LootItemFunction
public "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $LootItemFunction
public "addLore"(...arg0: ($Component$$Type)[]): $LootItemFunction
public "replaceLore"(...arg0: ($Component$$Type)[]): $LootItemFunction
public "toggleTooltips"(arg0: $Map$$Type<(string), (boolean)>): $LootItemFunction
public "jsonFunction"(arg0: $JsonObject$$Type): $LootItemFunction
public "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): $LootItemFunction
set "name"(value: $Component$$Type)
set "count"(value: $NumberProvider$$Type)
set "customData"(value: $CompoundTag$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootFunction$$Type = ({}) | ([]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootFunction_ = $LootFunction$$Type;
}}
declare module "com.almostreliable.morejs.features.structure.StructureAfterPlaceEventJS" {
import {$WorldGenLevel, $WorldGenLevel$$Type} from "net.minecraft.world.level.WorldGenLevel"
import {$BoundingBox, $BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$KubeLevelEvent, $KubeLevelEvent$$Type} from "dev.latvian.mods.kubejs.level.KubeLevelEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$StructureManager, $StructureManager$$Type} from "net.minecraft.world.level.StructureManager"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$StructurePiece, $StructurePiece$$Type} from "net.minecraft.world.level.levelgen.structure.StructurePiece"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$ChunkGenerator, $ChunkGenerator$$Type} from "net.minecraft.world.level.chunk.ChunkGenerator"
import {$StructurePieceType, $StructurePieceType$$Type} from "net.minecraft.world.level.levelgen.structure.pieces.StructurePieceType"
import {$PiecesContainer, $PiecesContainer$$Type} from "net.minecraft.world.level.levelgen.structure.pieces.PiecesContainer"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $StructureAfterPlaceEventJS implements $KubeLevelEvent {

constructor(arg0: $Structure$$Type, arg1: $WorldGenLevel$$Type, arg2: $StructureManager$$Type, arg3: $ChunkGenerator$$Type, arg4: $RandomSource$$Type, arg5: $BoundingBox$$Type, arg6: $ChunkPos$$Type, arg7: $PiecesContainer$$Type)

public "getId"(): $ResourceLocation
public "getType"(): $ResourceLocation
public "getLevel"(): $Level
public "getChunkPos"(): $ChunkPos
public "getStructure"(): $Structure
public "getRandomSource"(): $RandomSource
public "getStructureManager"(): $StructureManager
public "getPieceType"(arg0: $StructurePieceType$$Type): $ResourceLocation
public "getGenStep"(): string
public "getIntersectionMap"(): $Map<($StructurePiece), ($BoundingBox)>
public "getChunkGenerator"(): $ChunkGenerator
public "getChunkBoundingBox"(): $BoundingBox
public "getPiecesContainer"(): $PiecesContainer
public "getWorldGenLevel"(): $WorldGenLevel
public "getIntersectionBoxes"(): $Collection<($BoundingBox)>
public "getIntersectionPieces"(): $Collection<($StructurePiece)>
public "getStructureBoundingBox"(): $BoundingBox
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
get "id"(): $ResourceLocation
get "type"(): $ResourceLocation
get "level"(): $Level
get "chunkPos"(): $ChunkPos
get "structure"(): $Structure
get "randomSource"(): $RandomSource
get "structureManager"(): $StructureManager
get "genStep"(): string
get "intersectionMap"(): $Map<($StructurePiece), ($BoundingBox)>
get "chunkGenerator"(): $ChunkGenerator
get "chunkBoundingBox"(): $BoundingBox
get "piecesContainer"(): $PiecesContainer
get "worldGenLevel"(): $WorldGenLevel
get "intersectionBoxes"(): $Collection<($BoundingBox)>
get "intersectionPieces"(): $Collection<($StructurePiece)>
get "structureBoundingBox"(): $BoundingBox
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureAfterPlaceEventJS$$Type = ($StructureAfterPlaceEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureAfterPlaceEventJS_ = $StructureAfterPlaceEventJS$$Type;
}}
declare module "com.almostreliable.lootjs.loot.LootTableEvent" {
import {$LootType, $LootType$$Type} from "com.almostreliable.lootjs.core.LootType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Set, $Set$$Type} from "java.util.Set"
import {$MutableLootTable, $MutableLootTable$$Type} from "com.almostreliable.lootjs.loot.table.MutableLootTable"
import {$WritableRegistry, $WritableRegistry$$Type} from "net.minecraft.core.WritableRegistry"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$LootTableFilter, $LootTableFilter$$Type} from "com.almostreliable.lootjs.core.filters.LootTableFilter"
import {$LootTableList, $LootTableList$$Type} from "com.almostreliable.lootjs.loot.table.LootTableList"

export class $LootTableEvent {

constructor(arg0: $WritableRegistry$$Type<($LootTable$$Type)>)

public "create"(arg0: $ResourceLocation$$Type): $MutableLootTable
public "create"(arg0: $ResourceLocation$$Type, arg1: $LootType$$Type): $MutableLootTable
public "getLootTable"(arg0: $ResourceLocation$$Type): $MutableLootTable
public "forEachTable"(arg0: $IdFilter$$Type, arg1: $Consumer$$Type<($MutableLootTable)>): void
public "forEachTable"(arg0: $Consumer$$Type<($MutableLootTable)>): void
public "hasLootTable"(arg0: $ResourceLocation$$Type): boolean
public "getEntityTable"(arg0: $EntityType$$Type<(any)>): $MutableLootTable
public "getBlockTable"(arg0: $Block$$Type): $MutableLootTable
public "getLootTableIds"(arg0: $IdFilter$$Type): $Set<($ResourceLocation)>
public "getLootTableIds"(): $Set<($ResourceLocation)>
public "clearLootTables"(arg0: $IdFilter$$Type): void
public "modifyLootTables"(...arg0: ($LootTableFilter$$Type)[]): $LootTableList
public "modifyBlockTables"(arg0: $IdFilter$$Type): $LootTableList
public "modifyEntityTables"(arg0: $IdFilter$$Type): $LootTableList
/**
 * 
 * @deprecated
 */
public "modifyLootTypeTables"(...arg0: ($LootType$$Type)[]): $LootTableList
get "lootTableIds"(): $Set<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableEvent$$Type = ($LootTableEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootTableEvent_ = $LootTableEvent$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.events.WandererTradingEventJS" {
import {$KubeEvent, $KubeEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$TradeItem, $TradeItem$$Type} from "com.almostreliable.morejs.features.villager.TradeItem"
import {$List, $List$$Type} from "java.util.List"
import {$SimpleTrade, $SimpleTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.SimpleTrade"
import {$TradeFilter, $TradeFilter$$Type} from "com.almostreliable.morejs.features.villager.TradeFilter"
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$$Type} from "com.almostreliable.morejs.features.villager.trades.TransformableTrade$Transformer"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type} from "net.minecraft.world.entity.npc.VillagerTrades$ItemListing"
import {$Int2ObjectMap, $Int2ObjectMap$$Type} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"

export class $WandererTradingEventJS implements $KubeEvent {

constructor(arg0: $Int2ObjectMap$$Type<($List$$Type<($VillagerTrades$ItemListing$$Type)>)>)

public "addTrade"<T extends $VillagerTrades$ItemListing>(arg0: integer, arg1: T): T
public "addTrade"(arg0: integer, arg1: ($TradeItem$$Type)[], arg2: $TradeItem$$Type): $SimpleTrade
public "removeTrades"(arg0: $TradeFilter$$Type): void
public "getTrades"(arg0: integer): $List<($VillagerTrades$ItemListing)>
public "addCustomTrade"(arg0: integer, arg1: $TransformableTrade$Transformer$$Type): void
/**
 * 
 * @deprecated
 */
public "removeVanillaTrades"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "removeVanillaTrades"(): void
/**
 * 
 * @deprecated
 */
public "removeModdedTrades"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "removeModdedTrades"(): void
public "removeVanillaTypedTrades"(arg0: integer): void
public "removeVanillaTypedTrades"(): void
public "removeModdedTypedTrades"(): void
public "removeModdedTypedTrades"(arg0: integer): void
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandererTradingEventJS$$Type = ($WandererTradingEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WandererTradingEventJS_ = $WandererTradingEventJS$$Type;
}}
declare module "com.almostreliable.lootjs.loot.extension.CompositeEntryBaseExtension" {
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$List, $List$$Type} from "java.util.List"

export interface $CompositeEntryBaseExtension {

 "lootjs$getEntries"(): $List<($LootPoolEntryContainer)>

(): $List$$Type<($LootPoolEntryContainer$$Type)>
}

export namespace $CompositeEntryBaseExtension {
const probejs$$marker: never
}
export class $CompositeEntryBaseExtension$$Static implements $CompositeEntryBaseExtension {


 "lootjs$getEntries"(): $List<($LootPoolEntryContainer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeEntryBaseExtension$$Type = (() => $List$$Type<($LootPoolEntryContainer$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeEntryBaseExtension_ = $CompositeEntryBaseExtension$$Type;
}}
declare module "com.almostreliable.lootjs.loot.modifier.LootModifier$Builder" {
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$GroupedLootAction$Builder, $GroupedLootAction$Builder$$Type} from "com.almostreliable.lootjs.loot.modifier.GroupedLootAction$Builder"
import {$LootActionContainer, $LootActionContainer$$Type} from "com.almostreliable.lootjs.loot.LootActionContainer"
import {$GroupedLootAction, $GroupedLootAction$$Type} from "com.almostreliable.lootjs.loot.modifier.GroupedLootAction"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$LootAction, $LootAction$$Type} from "com.almostreliable.lootjs.loot.modifier.LootAction"

export class $LootModifier$Builder extends $GroupedLootAction$Builder {

constructor(arg0: $Predicate$$Type<($LootContext)>, arg1: string)

public "name"(arg0: string): $LootModifier$Builder
public "build"(): $GroupedLootAction
public "addAction"(arg0: $LootAction$$Type): $LootActionContainer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootModifier$Builder$$Type = ($LootModifier$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootModifier$Builder_ = $LootModifier$Builder$$Type;
}}
declare module "com.almostreliable.morejs.features.misc.PiglinPlayerBehaviorEventJS$PiglinBehavior" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $PiglinPlayerBehaviorEventJS$PiglinBehavior extends $Enum<($PiglinPlayerBehaviorEventJS$PiglinBehavior)> {
static readonly "KEEP": $PiglinPlayerBehaviorEventJS$PiglinBehavior
static readonly "ATTACK": $PiglinPlayerBehaviorEventJS$PiglinBehavior
static readonly "IGNORE": $PiglinPlayerBehaviorEventJS$PiglinBehavior


public static "values"(): ($PiglinPlayerBehaviorEventJS$PiglinBehavior)[]
public static "valueOf"(arg0: string): $PiglinPlayerBehaviorEventJS$PiglinBehavior
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PiglinPlayerBehaviorEventJS$PiglinBehavior$$Type = (("attack") | ("ignore") | ("keep"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PiglinPlayerBehaviorEventJS$PiglinBehavior_ = $PiglinPlayerBehaviorEventJS$PiglinBehavior$$Type;
}}
declare module "com.almostreliable.morejs.features.potion.CustomBrewingFilter" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$BrewingRecipe, $BrewingRecipe$$Type} from "net.neoforged.neoforge.common.brewing.BrewingRecipe"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $CustomBrewingFilter extends $Record implements $Predicate<($BrewingRecipe)> {

constructor(ingredient: $Optional$$Type<($Ingredient$$Type)>, input: $Optional$$Type<($Ingredient$$Type)>, output: $Optional$$Type<($Ingredient$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $BrewingRecipe$$Type): boolean
public "test"(arg0: any): boolean
public "input"(): $Optional<($Ingredient)>
public "output"(): $Optional<($Ingredient)>
public "ingredient"(): $Optional<($Ingredient)>
public "or"(arg0: $Predicate$$Type<($BrewingRecipe)>): $Predicate<($BrewingRecipe)>
public "negate"(): $Predicate<($BrewingRecipe)>
public "and"(arg0: $Predicate$$Type<($BrewingRecipe)>): $Predicate<($BrewingRecipe)>
public static "not"<T>(arg0: $Predicate$$Type<($BrewingRecipe)>): $Predicate<($BrewingRecipe)>
public static "isEqual"<T>(arg0: any): $Predicate<($BrewingRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomBrewingFilter$$Type = ({"output"?: ($Ingredient$$Type)?, "input"?: ($Ingredient$$Type)?, "ingredient"?: ($Ingredient$$Type)?}) | ([output?: ($Ingredient$$Type)?, input?: ($Ingredient$$Type)?, ingredient?: ($Ingredient$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomBrewingFilter_ = $CustomBrewingFilter$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.events.PostUpdateOfferEventJS" {
import {$MerchantOffer, $MerchantOffer$$Type} from "net.minecraft.world.item.trading.MerchantOffer"
import {$MerchantOffers, $MerchantOffers$$Type} from "net.minecraft.world.item.trading.MerchantOffers"
import {$UpdateOfferEventJS, $UpdateOfferEventJS$$Type} from "com.almostreliable.morejs.features.villager.events.UpdateOfferEventJS"
import {$AbstractVillager, $AbstractVillager$$Type} from "net.minecraft.world.entity.npc.AbstractVillager"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type} from "net.minecraft.world.entity.npc.VillagerTrades$ItemListing"

export class $PostUpdateOfferEventJS extends $UpdateOfferEventJS {

constructor(arg0: $AbstractVillager$$Type, arg1: $MerchantOffers$$Type)

public static "invoke"(arg0: $AbstractVillager$$Type, arg1: $MerchantOffers$$Type): void
public "addTrade"(arg0: $VillagerTrades$ItemListing$$Type): void
public "addOffer"(arg0: $MerchantOffer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostUpdateOfferEventJS$$Type = ($PostUpdateOfferEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PostUpdateOfferEventJS_ = $PostUpdateOfferEventJS$$Type;
}}
declare module "com.almostreliable.morejs.features.enchantment.EnchantmentMenuExtension" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$EnchantmentMenu, $EnchantmentMenu$$Type} from "net.minecraft.world.inventory.EnchantmentMenu"
import {$EnchantmentMenuState, $EnchantmentMenuState$$Type} from "com.almostreliable.morejs.features.enchantment.EnchantmentMenuState"

export interface $EnchantmentMenuExtension {

 "morejs$getEnchantmentClues"(): (integer)[]
 "morejs$getState"(): $Optional<($EnchantmentMenuState)>
 "morejs$getContainer"(): $Container
 "morejs$getCosts"(): (integer)[]
 "morejs$getLevelClues"(): (integer)[]
 "morejs$getRandom"(): $RandomSource
}

export namespace $EnchantmentMenuExtension {
function morejs$cast(arg0: $EnchantmentMenu$$Type): $EnchantmentMenuExtension
const probejs$$marker: never
}
export class $EnchantmentMenuExtension$$Static implements $EnchantmentMenuExtension {


 "morejs$getEnchantmentClues"(): (integer)[]
static "morejs$cast"(arg0: $EnchantmentMenu$$Type): $EnchantmentMenuExtension
 "morejs$getState"(): $Optional<($EnchantmentMenuState)>
 "morejs$getContainer"(): $Container
 "morejs$getCosts"(): (integer)[]
 "morejs$getLevelClues"(): (integer)[]
 "morejs$getRandom"(): $RandomSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentMenuExtension$$Type = ($EnchantmentMenuExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentMenuExtension_ = $EnchantmentMenuExtension$$Type;
}}
declare module "com.almostreliable.lootjs.loot.extension.LootContextExtension" {
import {$LootType, $LootType$$Type} from "com.almostreliable.lootjs.core.LootType"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export interface $LootContextExtension {

 "getAttackingEntity"(): $Entity
 "getExplosionRadius"(): float
 "getEntity"(): $Entity
 "getPosition"(): $Vec3
 "getKillerPlayer"(): $ServerPlayer
 "getDamageSource"(): $DamageSource
 "isExploded"(): boolean
 "getServer"(): $MinecraftServer
 "self"(): $LootContext
 "getData"(): $Map<(string), (any)>
 "getType"(): $LootType
 "getId"(): $ResourceLocation
 "isType"(arg0: $LootType$$Type): boolean
 "getTool"(): $ItemStack
get "attackingEntity"(): $Entity
get "explosionRadius"(): float
get "entity"(): $Entity
get "position"(): $Vec3
get "killerPlayer"(): $ServerPlayer
get "damageSource"(): $DamageSource
get "exploded"(): boolean
get "server"(): $MinecraftServer
get "data"(): $Map<(string), (any)>
get "type"(): $LootType
get "id"(): $ResourceLocation
get "tool"(): $ItemStack
}

export namespace $LootContextExtension {
function cast(arg0: $LootContext$$Type): $LootContextExtension
const probejs$$marker: never
}
export class $LootContextExtension$$Static implements $LootContextExtension {


static "cast"(arg0: $LootContext$$Type): $LootContextExtension
 "getAttackingEntity"(): $Entity
 "getExplosionRadius"(): float
 "getEntity"(): $Entity
 "getPosition"(): $Vec3
 "getKillerPlayer"(): $ServerPlayer
 "getDamageSource"(): $DamageSource
 "isExploded"(): boolean
 "getServer"(): $MinecraftServer
 "self"(): $LootContext
 "getData"(): $Map<(string), (any)>
 "getType"(): $LootType
 "getId"(): $ResourceLocation
 "isType"(arg0: $LootType$$Type): boolean
 "getTool"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootContextExtension$$Type = ($LootContextExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootContextExtension_ = $LootContextExtension$$Type;
}}
declare module "com.almostreliable.lootjs.loot.LootConditionsContainer" {
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$DamageSourcePredicate, $DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export interface $LootConditionsContainer<C> {

 "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): C
 "matchLocation"(arg0: $LocationPredicate$$Type): C
 "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): C
 "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): C
 "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): C
 "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): C
 "matchDirectAttacker"(arg0: $EntityPredicate$$Type): C
 "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): C
 "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): C
 "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): C
 "matchCustomCondition"(arg0: $JsonObject$$Type): C
 "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): C
 "luck"(arg0: $MinMaxBounds$Doubles$$Type): C
 "survivesExplosion"(): C
 "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): C
 "matchBlock"(arg0: $Block$$Type): C
 "matchTool"(arg0: $ItemPredicate$$Type): C
 "matchPlayer"(arg0: $EntityPredicate$$Type): C
 "randomChance"(arg0: $NumberProvider$$Type): C
 "killedByPlayer"(): C
 "matchTime"(arg0: long, arg1: integer, arg2: integer): C
 "matchTime"(arg0: integer, arg1: integer): C
 "matchMainHand"(arg0: $ItemFilter$$Type): C
 "matchOffHand"(arg0: $ItemFilter$$Type): C
 "matchHead"(arg0: $ItemFilter$$Type): C
 "matchChest"(arg0: $ItemFilter$$Type): C
 "matchLegs"(arg0: $ItemFilter$$Type): C
 "matchFeet"(arg0: $ItemFilter$$Type): C
 "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): C
 "matchWeather"(arg0: boolean, arg1: boolean): C
 "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): C
 "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): C
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): C
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): C
 "isLightLevel"(arg0: integer, arg1: integer): C
 "matchEntity"(arg0: $EntityPredicate$$Type): C
 "matchAttacker"(arg0: $EntityPredicate$$Type): C
 "matchDistance"(arg0: $DistancePredicate$$Type): C
 "hasAnyStage"(...arg0: (string)[]): C
 "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): C
 "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): C
 "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): C
 "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): C
}

export namespace $LootConditionsContainer {
const probejs$$marker: never
}
export class $LootConditionsContainer$$Static<C> implements $LootConditionsContainer {


 "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): C
 "matchLocation"(arg0: $LocationPredicate$$Type): C
 "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): C
 "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): C
 "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): C
 "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): C
 "matchDirectAttacker"(arg0: $EntityPredicate$$Type): C
 "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): C
 "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): C
 "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): C
 "matchCustomCondition"(arg0: $JsonObject$$Type): C
 "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): C
 "luck"(arg0: $MinMaxBounds$Doubles$$Type): C
 "survivesExplosion"(): C
 "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): C
 "matchBlock"(arg0: $Block$$Type): C
 "matchTool"(arg0: $ItemPredicate$$Type): C
 "matchPlayer"(arg0: $EntityPredicate$$Type): C
 "randomChance"(arg0: $NumberProvider$$Type): C
 "killedByPlayer"(): C
 "matchTime"(arg0: long, arg1: integer, arg2: integer): C
 "matchTime"(arg0: integer, arg1: integer): C
 "matchMainHand"(arg0: $ItemFilter$$Type): C
 "matchOffHand"(arg0: $ItemFilter$$Type): C
 "matchHead"(arg0: $ItemFilter$$Type): C
 "matchChest"(arg0: $ItemFilter$$Type): C
 "matchLegs"(arg0: $ItemFilter$$Type): C
 "matchFeet"(arg0: $ItemFilter$$Type): C
 "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): C
 "matchWeather"(arg0: boolean, arg1: boolean): C
 "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): C
 "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): C
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): C
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): C
 "isLightLevel"(arg0: integer, arg1: integer): C
 "matchEntity"(arg0: $EntityPredicate$$Type): C
 "matchAttacker"(arg0: $EntityPredicate$$Type): C
 "matchDistance"(arg0: $DistancePredicate$$Type): C
 "hasAnyStage"(...arg0: (string)[]): C
 "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): C
 "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): C
 "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): C
 "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootConditionsContainer$$Type<C> = ($LootConditionsContainer<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootConditionsContainer_<C> = $LootConditionsContainer$$Type<(C)>;
}}
declare module "com.almostreliable.lootjs.loot.extension.LootPoolExtension" {
import {$LootConditionList, $LootConditionList$$Type} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$LootPool, $LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"
import {$LootFunctionList, $LootFunctionList$$Type} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$LootEntryList, $LootEntryList$$Type} from "com.almostreliable.lootjs.loot.LootEntryList"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"

export interface $LootPoolExtension {

 "lootjs$collectDebugInfo"(arg0: $DebugInfo$$Type): void
 "lootjs$asVanillaPool"(): $LootPool
 "lootjs$getEntries"(): $LootEntryList
 "lootjs$getConditions"(): $LootConditionList
 "lootjs$getFunctions"(): $LootFunctionList
 "lootjs$setName"(arg0: string): void
}

export namespace $LootPoolExtension {
function cast(arg0: $LootPool$$Type): $LootPoolExtension
const probejs$$marker: never
}
export class $LootPoolExtension$$Static implements $LootPoolExtension {


static "cast"(arg0: $LootPool$$Type): $LootPoolExtension
 "lootjs$collectDebugInfo"(arg0: $DebugInfo$$Type): void
 "lootjs$asVanillaPool"(): $LootPool
 "lootjs$getEntries"(): $LootEntryList
 "lootjs$getConditions"(): $LootConditionList
 "lootjs$getFunctions"(): $LootFunctionList
 "lootjs$setName"(arg0: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootPoolExtension$$Type = ($LootPoolExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootPoolExtension_ = $LootPoolExtension$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.events.VillagerTradingEventJS$ForEachCallback" {
import {$VillagerProfession, $VillagerProfession$$Type} from "net.minecraft.world.entity.npc.VillagerProfession"
import {$List, $List$$Type} from "java.util.List"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type} from "net.minecraft.world.entity.npc.VillagerTrades$ItemListing"

export interface $VillagerTradingEventJS$ForEachCallback {

 "accept"(arg0: $List$$Type<($VillagerTrades$ItemListing$$Type)>, arg1: integer, arg2: $VillagerProfession$$Type): void

(arg0: $List<($VillagerTrades$ItemListing)>, arg1: integer, arg2: $VillagerProfession): void
}

export namespace $VillagerTradingEventJS$ForEachCallback {
const probejs$$marker: never
}
export class $VillagerTradingEventJS$ForEachCallback$$Static implements $VillagerTradingEventJS$ForEachCallback {


 "accept"(arg0: $List$$Type<($VillagerTrades$ItemListing$$Type)>, arg1: integer, arg2: $VillagerProfession$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerTradingEventJS$ForEachCallback$$Type = ((arg0: $List<($VillagerTrades$ItemListing)>, arg1: integer, arg2: $VillagerProfession) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerTradingEventJS$ForEachCallback_ = $VillagerTradingEventJS$ForEachCallback$$Type;
}}
declare module "com.almostreliable.lootjs.loot.modifier.LootAction" {
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$LootBucket, $LootBucket$$Type} from "com.almostreliable.lootjs.core.LootBucket"

export interface $LootAction {

 "apply"(arg0: $LootContext$$Type, arg1: $LootBucket$$Type): void

(arg0: $LootContext, arg1: $LootBucket): void
}

export namespace $LootAction {
const probejs$$marker: never
}
export class $LootAction$$Static implements $LootAction {


 "apply"(arg0: $LootContext$$Type, arg1: $LootBucket$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootAction$$Type = ((arg0: $LootContext, arg1: $LootBucket) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootAction_ = $LootAction$$Type;
}}
declare module "com.almostreliable.morejs.features.teleport.TeleportType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $TeleportType extends $Enum<($TeleportType)> {
static readonly "CHORUS_FRUIT": $TeleportType
static readonly "ENDER_PEARL": $TeleportType


public static "values"(): ($TeleportType)[]
public static "valueOf"(arg0: string): $TeleportType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeleportType$$Type = (("chorus_fruit") | ("ender_pearl"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeleportType_ = $TeleportType$$Type;
}}
declare module "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier" {
import {$AttributeModifier, $AttributeModifier$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$EquipmentSlotGroup, $EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Set, $Set$$Type} from "java.util.Set"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $AddAttributesFunction$Modifier {

constructor(arg0: float, arg1: $Holder$$Type<($Attribute)>, arg2: $AttributeModifier$Operation$$Type, arg3: $NumberProvider$$Type, arg4: $ResourceLocation$$Type, arg5: $Set$$Type<($EquipmentSlotGroup$$Type)>)

public "createAttributeModifier"(arg0: $LootContext$$Type): $AttributeModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Modifier$$Type = ($AddAttributesFunction$Modifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction$Modifier_ = $AddAttributesFunction$Modifier$$Type;
}}
declare module "com.almostreliable.morejs.features.structure.StructureBlockInfoModification" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $StructureBlockInfoModification {

 "getPosition"(): $BlockPos
 "getBlock"(): $Block
 "getProperties"(): $Map<(string), (any)>
 "getId"(): string
 "setBlock"(arg0: $ResourceLocation$$Type, arg1: $Map$$Type<(string), (any)>): void
 "setBlock"(arg0: $ResourceLocation$$Type): void
 "setNbt"(arg0: $CompoundTag$$Type): void
 "hasNbt"(): boolean
 "getNbt"(): $CompoundTag
 "setVanillaBlockState"(arg0: $BlockState$$Type): void
get "position"(): $BlockPos
get "block"(): $Block
get "properties"(): $Map<(string), (any)>
get "id"(): string
set "block"(value: $ResourceLocation$$Type)
set "nbt"(value: $CompoundTag$$Type)
get "nbt"(): $CompoundTag
set "vanillaBlockState"(value: $BlockState$$Type)
}

export namespace $StructureBlockInfoModification {
const probejs$$marker: never
}
export class $StructureBlockInfoModification$$Static implements $StructureBlockInfoModification {


 "getPosition"(): $BlockPos
 "getBlock"(): $Block
 "getProperties"(): $Map<(string), (any)>
 "getId"(): string
 "setBlock"(arg0: $ResourceLocation$$Type, arg1: $Map$$Type<(string), (any)>): void
 "setBlock"(arg0: $ResourceLocation$$Type): void
 "setNbt"(arg0: $CompoundTag$$Type): void
 "hasNbt"(): boolean
 "getNbt"(): $CompoundTag
 "setVanillaBlockState"(arg0: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureBlockInfoModification$$Type = ($StructureBlockInfoModification);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureBlockInfoModification_ = $StructureBlockInfoModification$$Type;
}}
declare module "com.almostreliable.lootjs.loot.modifier.handler.ModifyLootAction$Callback" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ModifyLootAction$Callback {

 "modify"(arg0: $ItemStack$$Type): $ItemStack

(arg0: $ItemStack): $ItemStack$$Type
}

export namespace $ModifyLootAction$Callback {
const probejs$$marker: never
}
export class $ModifyLootAction$Callback$$Static implements $ModifyLootAction$Callback {


 "modify"(arg0: $ItemStack$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifyLootAction$Callback$$Type = ((arg0: $ItemStack) => $ItemStack$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifyLootAction$Callback_ = $ModifyLootAction$Callback$$Type;
}}
declare module "com.almostreliable.lootjs.loot.Predicates" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$ItemEnchantmentsPredicate, $ItemEnchantmentsPredicate$$Type} from "net.minecraft.advancements.critereon.ItemEnchantmentsPredicate"
import {$EnchantmentPredicate, $EnchantmentPredicate$$Type} from "net.minecraft.advancements.critereon.EnchantmentPredicate"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$NbtPredicate, $NbtPredicate$$Type} from "net.minecraft.advancements.critereon.NbtPredicate"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $Predicates {

}

export namespace $Predicates {
function lookup(): $HolderLookup$Provider
function enchantment(arg0: $IdFilter$$Type, arg1: $MinMaxBounds$Ints$$Type): $EnchantmentPredicate
function enchantment(arg0: $IdFilter$$Type): $EnchantmentPredicate
function nbt(arg0: $CompoundTag$$Type): $NbtPredicate
function storedEnchantments(arg0: ($EnchantmentPredicate$$Type)[]): $ItemEnchantmentsPredicate
function itemEnchantments(arg0: ($EnchantmentPredicate$$Type)[]): $ItemEnchantmentsPredicate
const probejs$$marker: never
}
export class $Predicates$$Static implements $Predicates {


static "lookup"(): $HolderLookup$Provider
static "enchantment"(arg0: $IdFilter$$Type, arg1: $MinMaxBounds$Ints$$Type): $EnchantmentPredicate
static "enchantment"(arg0: $IdFilter$$Type): $EnchantmentPredicate
static "nbt"(arg0: $CompoundTag$$Type): $NbtPredicate
static "storedEnchantments"(arg0: ($EnchantmentPredicate$$Type)[]): $ItemEnchantmentsPredicate
static "itemEnchantments"(arg0: ($EnchantmentPredicate$$Type)[]): $ItemEnchantmentsPredicate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Predicates$$Type = ($Predicates);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Predicates_ = $Predicates$$Type;
}}
declare module "com.almostreliable.morejs.features.enchantment.PlayerEnchantEventJS" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EnchantmentInstance, $EnchantmentInstance$$Type} from "net.minecraft.world.item.enchantment.EnchantmentInstance"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$EnchantmentTableEventJS, $EnchantmentTableEventJS$$Type} from "com.almostreliable.morejs.features.enchantment.EnchantmentTableEventJS"
import {$EnchantmentMenuState, $EnchantmentMenuState$$Type} from "com.almostreliable.morejs.features.enchantment.EnchantmentMenuState"

export class $PlayerEnchantEventJS extends $EnchantmentTableEventJS {

constructor(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $EnchantmentMenuState$$Type, arg6: integer, arg7: $List$$Type<($EnchantmentInstance$$Type)>)

public "getPosition"(): $BlockPos
public "getEnchantments"(): $List<($EnchantmentInstance)>
public "getRequiredLevel"(): integer
public "getEnchantmentIds"(): $List<($ResourceLocation)>
get "position"(): $BlockPos
get "enchantments"(): $List<($EnchantmentInstance)>
get "requiredLevel"(): integer
get "enchantmentIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEnchantEventJS$$Type = ($PlayerEnchantEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerEnchantEventJS_ = $PlayerEnchantEventJS$$Type;
}}
declare module "com.almostreliable.morejs.features.potion.PotionBrewingRegisterEvent" {
import {$KubeEvent, $KubeEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$PotionBrewingFilter, $PotionBrewingFilter$$Type} from "com.almostreliable.morejs.features.potion.PotionBrewingFilter"
import {$List, $List$$Type} from "java.util.List"
import {$CustomBrewingFilter, $CustomBrewingFilter$$Type} from "com.almostreliable.morejs.features.potion.CustomBrewingFilter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IBrewingRecipe, $IBrewingRecipe$$Type} from "net.neoforged.neoforge.common.brewing.IBrewingRecipe"
import {$PotionBrewing$Builder, $PotionBrewing$Builder$$Type} from "net.minecraft.world.item.alchemy.PotionBrewing$Builder"

export class $PotionBrewingRegisterEvent implements $KubeEvent {

constructor(arg0: $PotionBrewing$Builder$$Type)

public "removeContainer"(arg0: $Ingredient$$Type): void
public "addContainerRecipe"(arg0: $Ingredient$$Type, arg1: $Item$$Type, arg2: $Item$$Type): void
public "addPotionBrewing"(arg0: $Ingredient$$Type, arg1: $Potion$$Type): void
public "addPotionBrewing"(arg0: $Ingredient$$Type, arg1: $Potion$$Type, arg2: $Potion$$Type): void
public "validateContainer"(arg0: $Ingredient$$Type, arg1: $Item$$Type, arg2: $Item$$Type): void
public "addCustomBrewing"(arg0: $Ingredient$$Type, arg1: $Ingredient$$Type, arg2: $ItemStack$$Type): void
public "removePotionBrewing"(arg0: $PotionBrewingFilter$$Type): void
public "removeCustomBrewing"(arg0: $CustomBrewingFilter$$Type): void
public "getCustomBrewingRecipes"(): $List<($IBrewingRecipe)>
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
get "customBrewingRecipes"(): $List<($IBrewingRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewingRegisterEvent$$Type = ($PotionBrewingRegisterEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionBrewingRegisterEvent_ = $PotionBrewingRegisterEvent$$Type;
}}
declare module "com.almostreliable.morejs.features.structure.StructureLoadEventJS" {
import {$KubeEvent, $KubeEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$StructureTemplateAccess, $StructureTemplateAccess$$Type} from "com.almostreliable.morejs.features.structure.StructureTemplateAccess"
import {$EntityInfoWrapper, $EntityInfoWrapper$$Type} from "com.almostreliable.morejs.features.structure.EntityInfoWrapper"
import {$PaletteWrapper, $PaletteWrapper$$Type} from "com.almostreliable.morejs.features.structure.PaletteWrapper"
import {$StructureTemplate, $StructureTemplate$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $StructureLoadEventJS implements $KubeEvent {

constructor(arg0: $StructureTemplateAccess$$Type, arg1: $ResourceLocation$$Type)

public "getEntities"(): $EntityInfoWrapper
public static "invoke"(arg0: $StructureTemplate$$Type, arg1: $ResourceLocation$$Type): void
public "getId"(): string
public "getPalette"(arg0: integer): $PaletteWrapper
public "getStructureSize"(): $Vec3i
public "removePalette"(arg0: integer): void
public "getPalettesSize"(): integer
public "getEntitiesSize"(): integer
public "forEachPalettes"(arg0: $Consumer$$Type<($PaletteWrapper)>): void
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
get "entities"(): $EntityInfoWrapper
get "id"(): string
get "structureSize"(): $Vec3i
get "palettesSize"(): integer
get "entitiesSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureLoadEventJS$$Type = ($StructureLoadEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureLoadEventJS_ = $StructureLoadEventJS$$Type;
}}
declare module "com.almostreliable.lootjs.util.NullableFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NullableFunction<T, R> {

 "apply"(arg0: T): R

(arg0: T): R
}

export namespace $NullableFunction {
const probejs$$marker: never
}
export class $NullableFunction$$Static<T, R> implements $NullableFunction {


 "apply"(arg0: T): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NullableFunction$$Type<T, R> = ((arg0: T) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NullableFunction_<T, R> = $NullableFunction$$Type<(T), (R)>;
}}
declare module "com.almostreliable.lootjs.kube.LootTableEventJS" {
import {$KubeEvent, $KubeEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$LootTableEvent, $LootTableEvent$$Type} from "com.almostreliable.lootjs.loot.LootTableEvent"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$WritableRegistry, $WritableRegistry$$Type} from "net.minecraft.core.WritableRegistry"

export class $LootTableEventJS extends $LootTableEvent implements $KubeEvent {

constructor(arg0: $WritableRegistry$$Type<($LootTable$$Type)>)

/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableEventJS$$Type = ($LootTableEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootTableEventJS_ = $LootTableEventJS$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.trades.SimpleTrade" {
import {$TradeItem, $TradeItem$$Type} from "com.almostreliable.morejs.features.villager.TradeItem"
import {$TransformableTrade, $TransformableTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.TransformableTrade"

export class $SimpleTrade extends $TransformableTrade<($SimpleTrade)> {

constructor(arg0: ($TradeItem$$Type)[], arg1: $TradeItem$$Type)

public "getOutput"(): $TradeItem
get "output"(): $TradeItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleTrade$$Type = ($SimpleTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleTrade_ = $SimpleTrade$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.trades.TreasureMapTrade" {
import {$TradeItem, $TradeItem$$Type} from "com.almostreliable.morejs.features.villager.TradeItem"
import {$BlockPosFinder, $BlockPosFinder$$Type} from "com.almostreliable.morejs.util.BlockPosFinder"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$MapDecorationType, $MapDecorationType$$Type} from "net.minecraft.world.level.saveddata.maps.MapDecorationType"
import {$TransformableTrade, $TransformableTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.TransformableTrade"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $TreasureMapTrade extends $TransformableTrade<($TreasureMapTrade)> {

constructor(arg0: ($TradeItem$$Type)[], arg1: $BlockPosFinder$$Type)

public "scale"(arg0: byte): $TreasureMapTrade
public "displayName"(arg0: $Component$$Type): $TreasureMapTrade
public "marker"(arg0: $Holder$$Type<($MapDecorationType)>): $TreasureMapTrade
public "noPreview"(): $TreasureMapTrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreasureMapTrade$$Type = ($TreasureMapTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreasureMapTrade_ = $TreasureMapTrade$$Type;
}}
declare module "com.almostreliable.lootjs.core.entry.TagLootEntry" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$SingleLootEntry, $SingleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SingleLootEntry"
import {$TagEntry, $TagEntry$$Type} from "net.minecraft.world.level.storage.loot.entries.TagEntry"
import {$EmptyLootEntry, $EmptyLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$CompositeLootEntry, $CompositeLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AbstractSimpleLootEntry, $AbstractSimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.AbstractSimpleLootEntry"
import {$TableReferenceLootEntry, $TableReferenceLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"

export class $TagLootEntry extends $AbstractSimpleLootEntry<($TagEntry)> implements $SingleLootEntry {

constructor(arg0: $TagEntry$$Type)
constructor(arg0: $TagKey$$Type<($Item)>, arg1: boolean)

public "getTag"(): string
public "setTag"(arg0: string): void
public "isTag"(arg0: string): boolean
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "getExpand"(): boolean
public "setExpand"(arg0: boolean): void
public "when"(arg0: $Consumer$$Type<(any)>): $LootEntry
public "addFunction"(arg0: $LootItemFunction$$Type): any
public static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
public static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
public static "empty"(): $EmptyLootEntry
public static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
public static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "tag"(arg0: string): $TagLootEntry
public static "tag"(arg0: string, arg1: boolean): $TagLootEntry
public static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
public static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
public static "testItem"(arg0: string): $ItemLootEntry
public static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
public static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
get "expand"(): boolean
set "expand"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagLootEntry$$Type = ($TagLootEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TagLootEntry_ = $TagLootEntry$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.trades.CustomTrade" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$MerchantOffer, $MerchantOffer$$Type} from "net.minecraft.world.item.trading.MerchantOffer"
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$$Type} from "com.almostreliable.morejs.features.villager.trades.TransformableTrade$Transformer"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type} from "net.minecraft.world.entity.npc.VillagerTrades$ItemListing"

export class $CustomTrade implements $VillagerTrades$ItemListing {

constructor(arg0: $TransformableTrade$Transformer$$Type)

public "getOffer"(arg0: $Entity$$Type, arg1: $RandomSource$$Type): $MerchantOffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTrade$$Type = ($CustomTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTrade_ = $CustomTrade$$Type;
}}
declare module "com.almostreliable.morejs.features.enchantment.EnchantmentMenuState" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$EnchantmentState, $EnchantmentState$$Type} from "com.almostreliable.morejs.features.enchantment.EnchantmentState"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EnchantmentInstance, $EnchantmentInstance$$Type} from "net.minecraft.world.item.enchantment.EnchantmentInstance"
import {$EnchantmentMenu, $EnchantmentMenu$$Type} from "net.minecraft.world.inventory.EnchantmentMenu"
import {$List, $List$$Type} from "java.util.List"

export class $EnchantmentMenuState {

constructor(arg0: $EnchantmentMenu$$Type, arg1: $Player$$Type)

public "reset"(arg0: $ItemStack$$Type): void
public "getState"(): $EnchantmentState
public "setState"(arg0: $EnchantmentState$$Type): void
public "getPlayer"(): $Player
public "prepareEvent"(arg0: $ItemStack$$Type): void
public "getMenu"(): $EnchantmentMenu
public "storeItemIsEnchantable"(arg0: boolean): boolean
public "setEnchantments"(arg0: integer, arg1: $List$$Type<($EnchantmentInstance$$Type)>): void
public "getEnchantments"(arg0: integer): $List<($EnchantmentInstance)>
public "matchesCurrentItem"(arg0: $ItemStack$$Type): boolean
public "setCurrentItem"(arg0: $ItemStack$$Type): void
public "getCurrentItem"(): $ItemStack
public "clearEnchantments"(): void
public "setFreezeBroadcast"(arg0: boolean): void
public "isFreezeBroadcast"(): boolean
get "state"(): $EnchantmentState
set "state"(value: $EnchantmentState$$Type)
get "player"(): $Player
get "menu"(): $EnchantmentMenu
set "currentItem"(value: $ItemStack$$Type)
get "currentItem"(): $ItemStack
set "freezeBroadcast"(value: boolean)
get "freezeBroadcast"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentMenuState$$Type = ($EnchantmentMenuState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentMenuState_ = $EnchantmentMenuState$$Type;
}}
declare module "com.almostreliable.lootjs.loot.LootEntryList" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$SimpleLootEntry, $SimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$LootEntryAppender, $LootEntryAppender$$Type} from "com.almostreliable.lootjs.loot.table.LootEntryAppender"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootPoolEntryType, $LootPoolEntryType$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$LootEntriesTransformer, $LootEntriesTransformer$$Type} from "com.almostreliable.lootjs.loot.table.LootEntriesTransformer"
import {$ListHolder, $ListHolder$$Type} from "com.almostreliable.lootjs.util.ListHolder"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"

export class $LootEntryList extends $ListHolder<($LootEntry), ($LootPoolEntryContainer)> implements $LootEntriesTransformer, $LootEntryAppender {

constructor(arg0: $List$$Type<($LootPoolEntryContainer$$Type)>)
constructor(...arg0: ($LootEntry$$Type)[])
constructor()

public "remove"(arg0: $IdFilter$$Type): boolean
public "indexOf"(arg0: $LootPoolEntryType$$Type): integer
public "lastIndexOf"(arg0: $LootPoolEntryType$$Type): integer
public "iterator"(): $Iterator<(any)>
public "contains"(arg0: $LootPoolEntryType$$Type): boolean
public "addEntry"(arg0: $LootEntry$$Type): $LootEntryAppender
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>, arg1: boolean): $LootEntryList
public "modify"(arg0: $UnaryOperator$$Type<($LootEntry)>): void
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "modifyEntry"(arg0: $UnaryOperator$$Type<(any)>, arg1: boolean): $LootEntriesTransformer
public "createVanillaArray"(): $List<($LootPoolEntryContainer)>
public "removeItem"(arg0: $ItemFilter$$Type): $LootEntriesTransformer
public "removeItem"(arg0: $ItemFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "hasItem"(arg0: $ItemFilter$$Type): boolean
public "removeReference"(arg0: $IdFilter$$Type): $LootEntriesTransformer
public "removeReference"(arg0: $IdFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "modifyItemEntry"(arg0: $UnaryOperator$$Type<($ItemLootEntry)>): $LootEntriesTransformer
public "removeTag"(arg0: string): $LootEntriesTransformer
public "removeTag"(arg0: string, arg1: boolean): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type, arg2: boolean): $LootEntriesTransformer
public "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "addCustomEntry"(arg0: $JsonObject$$Type): $LootEntryAppender
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntryList$$Type = ($LootEntryList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootEntryList_ = $LootEntryList$$Type;
}}
declare module "com.almostreliable.lootjs.util.ListHolder" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $ListHolder<W, T> implements $Iterable<(W)> {

constructor(arg0: $List$$Type<(T)>)
constructor()

public "remove"(arg0: integer): W
public "size"(): integer
public "get"(arg0: integer): W
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: integer, arg1: W): void
public "add"(arg0: W): boolean
public "iterator"(): $Iterator<(W)>
public "set"(arg0: integer, arg1: W): W
public static "asArrayList"<T>(arg0: $List$$Type<(T)>): $ArrayList<(T)>
public "spliterator"(): $Spliterator<(W)>
public "forEach"(arg0: $Consumer$$Type<(W)>): void
[Symbol.iterator](): IterableIterator<W>;
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListHolder$$Type<W, T> = ($ListHolder<(W), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListHolder_<W, T> = $ListHolder$$Type<(W), (T)>;
}}
declare module "com.almostreliable.lootjs.loot.table.LootEntriesTransformer" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$SimpleLootEntry, $SimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"

export interface $LootEntriesTransformer {

 "removeItem"(arg0: $ItemFilter$$Type): $LootEntriesTransformer
 "removeItem"(arg0: $ItemFilter$$Type, arg1: boolean): $LootEntriesTransformer
 "hasItem"(arg0: $ItemFilter$$Type): boolean
 "removeReference"(arg0: $IdFilter$$Type): $LootEntriesTransformer
 "removeReference"(arg0: $IdFilter$$Type, arg1: boolean): $LootEntriesTransformer
 "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
 "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>, arg1: boolean): $LootEntriesTransformer
 "modifyItemEntry"(arg0: $UnaryOperator$$Type<($ItemLootEntry)>): $LootEntriesTransformer
 "removeTag"(arg0: string): $LootEntriesTransformer
 "removeTag"(arg0: string, arg1: boolean): $LootEntriesTransformer
 "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type): $LootEntriesTransformer
 "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type, arg2: boolean): $LootEntriesTransformer
 "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
 "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>, arg1: boolean): $LootEntriesTransformer
}

export namespace $LootEntriesTransformer {
const probejs$$marker: never
}
export class $LootEntriesTransformer$$Static implements $LootEntriesTransformer {


 "removeItem"(arg0: $ItemFilter$$Type): $LootEntriesTransformer
 "removeItem"(arg0: $ItemFilter$$Type, arg1: boolean): $LootEntriesTransformer
 "hasItem"(arg0: $ItemFilter$$Type): boolean
 "removeReference"(arg0: $IdFilter$$Type): $LootEntriesTransformer
 "removeReference"(arg0: $IdFilter$$Type, arg1: boolean): $LootEntriesTransformer
 "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
 "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>, arg1: boolean): $LootEntriesTransformer
 "modifyItemEntry"(arg0: $UnaryOperator$$Type<($ItemLootEntry)>): $LootEntriesTransformer
 "removeTag"(arg0: string): $LootEntriesTransformer
 "removeTag"(arg0: string, arg1: boolean): $LootEntriesTransformer
 "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type): $LootEntriesTransformer
 "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type, arg2: boolean): $LootEntriesTransformer
 "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
 "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>, arg1: boolean): $LootEntriesTransformer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntriesTransformer$$Type = ($LootEntriesTransformer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootEntriesTransformer_ = $LootEntriesTransformer$$Type;
}}
declare module "com.almostreliable.morejs.features.enchantment.EnchantmentTableServerEventJS" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$EnchantmentData, $EnchantmentData$$Type} from "com.almostreliable.morejs.features.enchantment.EnchantmentData"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$EnchantmentTableEventJS, $EnchantmentTableEventJS$$Type} from "com.almostreliable.morejs.features.enchantment.EnchantmentTableEventJS"
import {$EnchantmentMenuState, $EnchantmentMenuState$$Type} from "com.almostreliable.morejs.features.enchantment.EnchantmentMenuState"

export class $EnchantmentTableServerEventJS extends $EnchantmentTableEventJS {

constructor(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $EnchantmentMenuState$$Type)

public "getPosition"(): $BlockPos
public "get"(arg0: integer): $EnchantmentData
public "getSize"(): integer
public "setItem"(arg0: $ItemStack$$Type): void
public "itemWasChanged"(): boolean
get "position"(): $BlockPos
get "size"(): integer
set "item"(value: $ItemStack$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableServerEventJS$$Type = ($EnchantmentTableServerEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableServerEventJS_ = $EnchantmentTableServerEventJS$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.trades.EnchantedItemTrade" {
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TradeItem, $TradeItem$$Type} from "com.almostreliable.morejs.features.villager.TradeItem"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$TransformableTrade, $TransformableTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.TransformableTrade"

export class $EnchantedItemTrade extends $TransformableTrade<($EnchantedItemTrade)> {

constructor(arg0: ($TradeItem$$Type)[], arg1: $ItemStack$$Type, arg2: $TagKey$$Type<($Enchantment)>)
constructor(arg0: ($TradeItem$$Type)[], arg1: $ItemStack$$Type, arg2: $HolderSet$$Type<($Enchantment)>)

public "levels"(arg0: $IntProvider$$Type): $EnchantedItemTrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantedItemTrade$$Type = ($EnchantedItemTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantedItemTrade_ = $EnchantedItemTrade$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.TradeFilter" {
import {$VillagerProfession, $VillagerProfession$$Type} from "net.minecraft.world.entity.npc.VillagerProfession"
import {$TradeTypes, $TradeTypes$$Type} from "com.almostreliable.morejs.features.villager.TradeTypes"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$IntRange, $IntRange$$Type} from "com.almostreliable.morejs.features.villager.IntRange"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $TradeFilter extends $Record {

constructor(first: $Optional$$Type<($Ingredient$$Type)>, second: $Optional$$Type<($Ingredient$$Type)>, output: $Optional$$Type<($Ingredient$$Type)>, firstCount: $Optional$$Type<($IntRange$$Type)>, secondCount: $Optional$$Type<($IntRange$$Type)>, outputCount: $Optional$$Type<($IntRange$$Type)>, level: $Optional$$Type<($IntRange$$Type)>, types: $Optional$$Type<($List$$Type<($TradeTypes$$Type)>)>, professions: $Optional$$Type<($HolderSet$$Type<($VillagerProfession$$Type)>)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "first"(): $Optional<($Ingredient)>
public "second"(): $Optional<($Ingredient)>
public "types"(): $Optional<($List<($TradeTypes)>)>
public "level"(): $Optional<($IntRange)>
public "output"(): $Optional<($Ingredient)>
public "professions"(): $Optional<($HolderSet<($VillagerProfession)>)>
public "outputCount"(): $Optional<($IntRange)>
public "firstCount"(): $Optional<($IntRange)>
public "secondCount"(): $Optional<($IntRange)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeFilter$$Type = ({"level"?: ($IntRange$$Type)?, "professions"?: ($HolderSet$$Type<($VillagerProfession$$Type)>)?, "secondCount"?: ($IntRange$$Type)?, "firstCount"?: ($IntRange$$Type)?, "second"?: ($Ingredient$$Type)?, "first"?: ($Ingredient$$Type)?, "output"?: ($Ingredient$$Type)?, "outputCount"?: ($IntRange$$Type)?, "types"?: ($List$$Type<($TradeTypes$$Type)>)?}) | ([level?: ($IntRange$$Type)?, professions?: ($HolderSet$$Type<($VillagerProfession$$Type)>)?, secondCount?: ($IntRange$$Type)?, firstCount?: ($IntRange$$Type)?, second?: ($Ingredient$$Type)?, first?: ($Ingredient$$Type)?, output?: ($Ingredient$$Type)?, outputCount?: ($IntRange$$Type)?, types?: ($List$$Type<($TradeTypes$$Type)>)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeFilter_ = $TradeFilter$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.VillagerUtils" {
import {$EnchantedItemTrade, $EnchantedItemTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.EnchantedItemTrade"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$TreasureMapTrade, $TreasureMapTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.TreasureMapTrade"
import {$PotionTrade, $PotionTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.PotionTrade"
import {$TradeItem, $TradeItem$$Type} from "com.almostreliable.morejs.features.villager.TradeItem"
import {$List, $List$$Type} from "java.util.List"
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$$Type} from "com.almostreliable.morejs.features.villager.trades.TransformableTrade$Transformer"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type} from "net.minecraft.world.entity.npc.VillagerTrades$ItemListing"
import {$StewTrade, $StewTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.StewTrade"
import {$VillagerProfession, $VillagerProfession$$Type} from "net.minecraft.world.entity.npc.VillagerProfession"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$BlockPosFinder, $BlockPosFinder$$Type} from "com.almostreliable.morejs.util.BlockPosFinder"
import {$SimpleTrade, $SimpleTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.SimpleTrade"
import {$CustomTrade, $CustomTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.CustomTrade"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"

export class $VillagerUtils {
static readonly "CACHED_PROFESSION_TRADES": $Map<($VillagerProfession), ($List<($VillagerTrades$ItemListing)>)>
static readonly "VANILLA_TRADE_TYPES": $Set<($Class<($VillagerTrades$ItemListing)>)>

constructor()

public static "isVanillaTypedTrade"(arg0: $VillagerTrades$ItemListing$$Type): boolean
public static "isCustomTypedTrade"(arg0: $VillagerTrades$ItemListing$$Type): boolean
public static "getWandererTrades"(arg0: integer): $List<($VillagerTrades$ItemListing)>
public static "isModdedTypedTrade"(arg0: $VillagerTrades$ItemListing$$Type): boolean
public static "createSimpleTrade"(arg0: ($TradeItem$$Type)[], arg1: $TradeItem$$Type): $SimpleTrade
public static "createCustomTrade"(arg0: $TransformableTrade$Transformer$$Type): $CustomTrade
public static "createBiomeMapTrade"(arg0: ($TradeItem$$Type)[], arg1: $HolderSet$$Type<($Biome)>): $TreasureMapTrade
public static "createCustomMapTrade"(arg0: ($TradeItem$$Type)[], arg1: $BlockPosFinder$$Type): $TreasureMapTrade
public static "createStewTrade"(arg0: ($TradeItem$$Type)[]): $StewTrade
public static "createPotionTrade"(arg0: ($TradeItem$$Type)[]): $PotionTrade
public static "setAbstractTrades"(arg0: $Map$$Type<(integer), (($VillagerTrades$ItemListing$$Type)[])>, arg1: integer, arg2: $List$$Type<($VillagerTrades$ItemListing$$Type)>): void
public static "getAbstractTrades"(arg0: $Map$$Type<(integer), (($VillagerTrades$ItemListing$$Type)[])>, arg1: integer): $List<($VillagerTrades$ItemListing)>
public static "getRandomVillagerTrade"(arg0: $VillagerProfession$$Type, arg1: integer): $VillagerTrades$ItemListing
public static "getRandomVillagerTrade"(arg0: $VillagerProfession$$Type): $VillagerTrades$ItemListing
public static "getRandomWandererTrade"(arg0: integer): $VillagerTrades$ItemListing
public static "getProfession"(arg0: $ResourceLocation$$Type): $VillagerProfession
public static "getVillagerTrades"(arg0: $VillagerProfession$$Type): $List<($VillagerTrades$ItemListing)>
public static "getVillagerTrades"(arg0: $VillagerProfession$$Type, arg1: integer): $List<($VillagerTrades$ItemListing)>
public static "getProfessions"(): $Collection<($VillagerProfession)>
public static "createStructureMapTrade"(arg0: ($TradeItem$$Type)[], arg1: $HolderSet$$Type<($Structure)>): $TreasureMapTrade
public static "createEnchantedItemTrade"(arg0: ($TradeItem$$Type)[], arg1: $ItemStack$$Type, arg2: $HolderSet$$Type<($Enchantment)>): $EnchantedItemTrade
public static "createEnchantedItemTrade"(arg0: ($TradeItem$$Type)[], arg1: $ItemStack$$Type): $EnchantedItemTrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerUtils$$Type = ($VillagerUtils);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerUtils_ = $VillagerUtils$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.events.UpdateOfferEventJS" {
import {$MerchantOffers, $MerchantOffers$$Type} from "net.minecraft.world.item.trading.MerchantOffers"
import {$VillagerData, $VillagerData$$Type} from "net.minecraft.world.entity.npc.VillagerData"
import {$List, $List$$Type} from "java.util.List"
import {$AbstractVillager, $AbstractVillager$$Type} from "net.minecraft.world.entity.npc.AbstractVillager"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type} from "net.minecraft.world.entity.npc.VillagerTrades$ItemListing"
import {$VillagerProfession, $VillagerProfession$$Type} from "net.minecraft.world.entity.npc.VillagerProfession"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$MerchantOffer, $MerchantOffer$$Type} from "net.minecraft.world.item.trading.MerchantOffer"
import {$KubeLivingEntityEvent, $KubeLivingEntityEvent$$Type} from "dev.latvian.mods.kubejs.entity.KubeLivingEntityEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $UpdateOfferEventJS implements $KubeLivingEntityEvent {

constructor(arg0: $AbstractVillager$$Type, arg1: $MerchantOffers$$Type)

public "getRandom"(): $RandomSource
public "getEntity"(): $LivingEntity
public "getVillagerLevel"(): integer
public "getWandererTrades"(): $List<($VillagerTrades$ItemListing)>
public "getWandererTrades"(arg0: integer): $List<($VillagerTrades$ItemListing)>
public "getProfession"(): $VillagerProfession
public "getVillagerData"(): $VillagerData
public "getVillagerTrades"(arg0: $VillagerProfession$$Type, arg1: integer): $List<($VillagerTrades$ItemListing)>
public "getVillagerTrades"(arg0: $VillagerProfession$$Type): $List<($VillagerTrades$ItemListing)>
public "isVillager"(): boolean
public "isWanderer"(): boolean
public "isProfession"(arg0: $VillagerProfession$$Type): boolean
public "getAllOffers"(): $MerchantOffers
public "isUnknownTrader"(): boolean
public "createRandomOffer"(arg0: $List$$Type<($VillagerTrades$ItemListing$$Type)>): $MerchantOffer
public "getLevel"(): $Level
public "getPlayer"(): $Player
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
get "random"(): $RandomSource
get "entity"(): $LivingEntity
get "villagerLevel"(): integer
get "wandererTrades"(): $List<($VillagerTrades$ItemListing)>
get "profession"(): $VillagerProfession
get "villagerData"(): $VillagerData
get "villager"(): boolean
get "wanderer"(): boolean
get "allOffers"(): $MerchantOffers
get "unknownTrader"(): boolean
get "level"(): $Level
get "player"(): $Player
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdateOfferEventJS$$Type = ($UpdateOfferEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpdateOfferEventJS_ = $UpdateOfferEventJS$$Type;
}}
declare module "com.almostreliable.lootjs.core.entry.ItemLootEntry" {
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$SingleLootEntry, $SingleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SingleLootEntry"
import {$EmptyLootEntry, $EmptyLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$CompositeLootEntry, $CompositeLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$LootItem, $LootItem$$Type} from "net.minecraft.world.level.storage.loot.entries.LootItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LootPoolEntryType, $LootPoolEntryType$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryType"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AbstractSimpleLootEntry, $AbstractSimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.AbstractSimpleLootEntry"
import {$TagLootEntry, $TagLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$TableReferenceLootEntry, $TableReferenceLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"

export class $ItemLootEntry extends $AbstractSimpleLootEntry<($LootItem)> implements $SingleLootEntry {

constructor(arg0: $Item$$Type, arg1: $NumberProvider$$Type)
constructor(arg0: $ItemStack$$Type)
constructor(arg0: $LootItem$$Type)

public "test"(arg0: $ItemFilter$$Type): boolean
public "create"(arg0: $LootContext$$Type): $ItemStack
public "getItem"(): $Item
public "setItem"(arg0: $Item$$Type): void
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "getVanillaType"(): $LootPoolEntryType
public "when"(arg0: $Consumer$$Type<(any)>): $LootEntry
public "addFunction"(arg0: $LootItemFunction$$Type): any
public static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
public static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
public static "empty"(): $EmptyLootEntry
public static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
public static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "tag"(arg0: string): $TagLootEntry
public static "tag"(arg0: string, arg1: boolean): $TagLootEntry
public static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
public static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
public static "testItem"(arg0: string): $ItemLootEntry
public static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
public static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
get "item"(): $Item
set "item"(value: $Item$$Type)
get "vanillaType"(): $LootPoolEntryType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemLootEntry$$Type = ($ItemLootEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemLootEntry_ = $ItemLootEntry$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.trades.StewTrade" {
import {$TradeItem, $TradeItem$$Type} from "com.almostreliable.morejs.features.villager.TradeItem"
import {$TransformableTrade, $TransformableTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.TransformableTrade"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"

export class $StewTrade extends $TransformableTrade<($StewTrade)> {

constructor(arg0: ($TradeItem$$Type)[])

public "addEffect"(arg0: $MobEffect$$Type, arg1: integer): $StewTrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StewTrade$$Type = ($StewTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StewTrade_ = $StewTrade$$Type;
}}
declare module "com.almostreliable.lootjs.core.entry.EmptyLootEntry" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$EmptyLootItem, $EmptyLootItem$$Type} from "net.minecraft.world.level.storage.loot.entries.EmptyLootItem"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$SingleLootEntry, $SingleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SingleLootEntry"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$CompositeLootEntry, $CompositeLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AbstractSimpleLootEntry, $AbstractSimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.AbstractSimpleLootEntry"
import {$TagLootEntry, $TagLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$TableReferenceLootEntry, $TableReferenceLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"

export class $EmptyLootEntry extends $AbstractSimpleLootEntry<($EmptyLootItem)> implements $SingleLootEntry {

constructor(arg0: $EmptyLootItem$$Type)
constructor()

public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "when"(arg0: $Consumer$$Type<(any)>): $LootEntry
public "addFunction"(arg0: $LootItemFunction$$Type): any
public static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
public static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
public static "empty"(): $EmptyLootEntry
public static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
public static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "tag"(arg0: string): $TagLootEntry
public static "tag"(arg0: string, arg1: boolean): $TagLootEntry
public static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
public static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
public static "testItem"(arg0: string): $ItemLootEntry
public static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
public static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyLootEntry$$Type = ($EmptyLootEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyLootEntry_ = $EmptyLootEntry$$Type;
}}
declare module "com.almostreliable.morejs.features.structure.PaletteWrapper" {
import {$StructureTemplate$Palette, $StructureTemplate$Palette$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PaletteWrapper {

constructor(arg0: $StructureTemplate$Palette$$Type, arg1: $Vec3i$$Type)

public "get"(arg0: $BlockPos$$Type): $StructureTemplate$StructureBlockInfo
public "clear"(): void
public "add"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: $CompoundTag$$Type): void
public "add"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): void
public "forEach"(arg0: $Consumer$$Type<($StructureTemplate$StructureBlockInfo)>): void
public "removeIf"(arg0: $Predicate$$Type<($StructureTemplate$StructureBlockInfo)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaletteWrapper$$Type = ($PaletteWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PaletteWrapper_ = $PaletteWrapper$$Type;
}}
declare module "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier$Builder" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AttributeModifier$Operation, $AttributeModifier$Operation$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation"
import {$EquipmentSlotGroup, $EquipmentSlotGroup$$Type} from "net.minecraft.world.entity.EquipmentSlotGroup"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$AddAttributesFunction$Modifier, $AddAttributesFunction$Modifier$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Modifier"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"

export class $AddAttributesFunction$Modifier$Builder {

constructor(arg0: $Attribute$$Type, arg1: $ResourceLocation$$Type, arg2: $NumberProvider$$Type)

public "build"(): $AddAttributesFunction$Modifier
public "setOperation"(arg0: $AttributeModifier$Operation$$Type): void
public "setSlots"(arg0: ($EquipmentSlotGroup$$Type)[]): void
public "setProbability"(arg0: float): void
set "operation"(value: $AttributeModifier$Operation$$Type)
set "slots"(value: ($EquipmentSlotGroup$$Type)[])
set "probability"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddAttributesFunction$Modifier$Builder$$Type = ($AddAttributesFunction$Modifier$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddAttributesFunction$Modifier$Builder_ = $AddAttributesFunction$Modifier$Builder$$Type;
}}
declare module "com.almostreliable.lootjs.loot.table.LootTableList" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$SimpleLootEntry, $SimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$LootFunctionList, $LootFunctionList$$Type} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$MutableLootPool, $MutableLootPool$$Type} from "com.almostreliable.lootjs.loot.table.MutableLootPool"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$PostLootAction, $PostLootAction$$Type} from "com.almostreliable.lootjs.loot.table.PostLootAction"
import {$LootEntriesTransformer, $LootEntriesTransformer$$Type} from "com.almostreliable.lootjs.loot.table.LootEntriesTransformer"
import {$MutableLootTable, $MutableLootTable$$Type} from "com.almostreliable.lootjs.loot.table.MutableLootTable"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"

export class $LootTableList implements $LootEntriesTransformer, $Iterable<($MutableLootTable)> {

constructor(arg0: $List$$Type<($MutableLootTable$$Type)>)

public "clear"(): $LootTableList
public "iterator"(): $Iterator<($MutableLootTable)>
public "apply"(arg0: $Consumer$$Type<($LootFunctionList)>): $LootTableList
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>, arg1: boolean): $LootTableList
public "getTables"(): $List<($MutableLootTable)>
public "onDrop"(arg0: $PostLootAction$$Type): $LootTableList
public "modifyEntry"(arg0: $UnaryOperator$$Type<(any)>, arg1: boolean): $LootEntriesTransformer
public "firstPool"(arg0: $Consumer$$Type<($MutableLootPool)>): $LootTableList
public "createPool"(arg0: $Consumer$$Type<($MutableLootPool)>): $LootTableList
public "removeItem"(arg0: $ItemFilter$$Type): $LootEntriesTransformer
public "removeItem"(arg0: $ItemFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "hasItem"(arg0: $ItemFilter$$Type): boolean
public "removeReference"(arg0: $IdFilter$$Type): $LootEntriesTransformer
public "removeReference"(arg0: $IdFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "modifyItemEntry"(arg0: $UnaryOperator$$Type<($ItemLootEntry)>): $LootEntriesTransformer
public "removeTag"(arg0: string): $LootEntriesTransformer
public "removeTag"(arg0: string, arg1: boolean): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type, arg2: boolean): $LootEntriesTransformer
public "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "spliterator"(): $Spliterator<($MutableLootTable)>
public "forEach"(arg0: $Consumer$$Type<($MutableLootTable)>): void
[Symbol.iterator](): IterableIterator<$MutableLootTable>;
get "tables"(): $List<($MutableLootTable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableList$$Type = ($LootTableList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootTableList_ = $LootTableList$$Type;
}}
declare module "com.almostreliable.lootjs.loot.table.PostLootAction" {
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$LootBucket, $LootBucket$$Type} from "com.almostreliable.lootjs.core.LootBucket"

export interface $PostLootAction {

 "alter"(arg0: $LootContext$$Type, arg1: $LootBucket$$Type): void

(arg0: $LootContext, arg1: $LootBucket): void
}

export namespace $PostLootAction {
const probejs$$marker: never
}
export class $PostLootAction$$Static implements $PostLootAction {


 "alter"(arg0: $LootContext$$Type, arg1: $LootBucket$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostLootAction$$Type = ((arg0: $LootContext, arg1: $LootBucket) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PostLootAction_ = $PostLootAction$$Type;
}}
declare module "com.almostreliable.morejs.util.WeightedList" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Function, $Function$$Type} from "java.util.function.Function"

export class $WeightedList<T> {


public "map"<T2>(arg0: $Function$$Type<(T), (T2)>): $WeightedList<(T2)>
public "roll"(): T
public "roll"(arg0: $RandomSource$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedList$$Type<T> = ($WeightedList<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedList_<T> = $WeightedList$$Type<(T)>;
}}
declare module "com.almostreliable.morejs.features.enchantment.EnchantmentData" {
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$BiPredicate, $BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EnchantmentInstance, $EnchantmentInstance$$Type} from "net.minecraft.world.item.enchantment.EnchantmentInstance"
import {$EnchantmentMenu, $EnchantmentMenu$$Type} from "net.minecraft.world.inventory.EnchantmentMenu"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IntRange, $IntRange$$Type} from "com.almostreliable.morejs.features.villager.IntRange"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $EnchantmentData {

constructor(arg0: $List$$Type<($EnchantmentInstance$$Type)>, arg1: integer, arg2: $EnchantmentMenu$$Type, arg3: $Level$$Type)

public "getEnchantments"(): $List<($EnchantmentInstance)>
public "hasEnchantment"(arg0: $ResourceLocation$$Type): boolean
public "hasEnchantment"(arg0: $ResourceLocation$$Type, arg1: $IntRange$$Type): boolean
public "clearClue"(): void
public "getClue"(): $EnchantmentInstance
public "setClue"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): void
public "setClue"(arg0: $EnchantmentInstance$$Type): void
public "randomClue"(): void
public "addEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): void
public "setRequiredLevel"(arg0: integer): void
public "getRequiredLevel"(): integer
public "getEnchantmentIds"(): $List<($ResourceLocation)>
public "removeEnchantments"(arg0: $BiPredicate$$Type<($Holder<($Enchantment)>), (integer)>): void
get "enchantments"(): $List<($EnchantmentInstance)>
get "clue"(): $EnchantmentInstance
set "clue"(value: $EnchantmentInstance$$Type)
set "requiredLevel"(value: integer)
get "requiredLevel"(): integer
get "enchantmentIds"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentData$$Type = ($EnchantmentData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentData_ = $EnchantmentData$$Type;
}}
declare module "com.almostreliable.morejs.util.BlockPosFinder" {
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $BlockPosFinder {

 "findPosition"(arg0: $ServerLevel$$Type, arg1: $Entity$$Type): $BlockPos

(arg0: $ServerLevel, arg1: $Entity): $BlockPos$$Type
}

export namespace $BlockPosFinder {
const probejs$$marker: never
}
export class $BlockPosFinder$$Static implements $BlockPosFinder {


 "findPosition"(arg0: $ServerLevel$$Type, arg1: $Entity$$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPosFinder$$Type = ((arg0: $ServerLevel, arg1: $Entity) => $BlockPos$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPosFinder_ = $BlockPosFinder$$Type;
}}
declare module "com.almostreliable.lootjs.kube.wrappers.NumberProviderWrapper" {
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"

export class $NumberProviderWrapper {

constructor()

public static "constant"(arg0: integer): $NumberProvider
public static "uniform"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $NumberProvider
public static "binomial"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $NumberProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumberProviderWrapper$$Type = ($NumberProviderWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NumberProviderWrapper_ = $NumberProviderWrapper$$Type;
}}
declare module "com.almostreliable.lootjs.util.BlockFilter" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$BlockStatePredicate, $BlockStatePredicate$$Type} from "dev.latvian.mods.kubejs.block.state.BlockStatePredicate"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockFilter extends $Iterable<($Block)>, $Predicate<($BlockState)> {

 "stream"(): $Stream<($Block)>
 "iterator"(): $Iterator<($Block)>
 "spliterator"(): $Spliterator<($Block)>
 "forEach"(arg0: $Consumer$$Type<($Block)>): void
 "test"(arg0: $BlockState$$Type): boolean
 "or"(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
 "negate"(): $Predicate<($BlockState)>
 "and"(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
[Symbol.iterator](): IterableIterator<$Block>;
}

export namespace $BlockFilter {
function not<T>(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
function isEqual<T>(arg0: any): $Predicate<($BlockState)>
const probejs$$marker: never
}
export class $BlockFilter$$Static implements $BlockFilter {


 "stream"(): $Stream<($Block)>
 "iterator"(): $Iterator<($Block)>
 "spliterator"(): $Spliterator<($Block)>
 "forEach"(arg0: $Consumer$$Type<($Block)>): void
 "test"(arg0: $BlockState$$Type): boolean
 "or"(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
 "negate"(): $Predicate<($BlockState)>
 "and"(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
static "not"<T>(arg0: $Predicate$$Type<($BlockState)>): $Predicate<($BlockState)>
static "isEqual"<T>(arg0: any): $Predicate<($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFilter$$Type = (($BlockStatePredicate$$Type));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFilter_ = $BlockFilter$$Type;
}}
declare module "com.almostreliable.lootjs.core.LootType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$LootContextParamSet, $LootContextParamSet$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"

export class $LootType extends $Enum<($LootType)> {
static readonly "BLOCK": $LootType
static readonly "VAULT": $LootType
static readonly "ADVANCEMENT_REWARD": $LootType
static readonly "ARCHAEOLOGY": $LootType
static readonly "CHEST": $LootType
static readonly "ADVANCEMENT_ENTITY": $LootType
static readonly "EQUIPMENT": $LootType
static readonly "GIFT": $LootType
static readonly "FISHING": $LootType
static readonly "ENTITY": $LootType
static readonly "GENERIC": $LootType
static readonly "SELECTOR": $LootType
static readonly "PIGLIN_BARTER": $LootType
static readonly "BLOCK_USE": $LootType
static readonly "COMMAND": $LootType
static readonly "UNKNOWN": $LootType
static readonly "ADVANCEMENT_LOCATION": $LootType
static readonly "SHEARING": $LootType


public static "values"(): ($LootType)[]
public static "valueOf"(arg0: string): $LootType
public "getParamSet"(): $LootContextParamSet
public static "getLootType"(arg0: $LootContextParamSet$$Type): $LootType
get "paramSet"(): $LootContextParamSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootType$$Type = (("unknown") | ("block") | ("block_use") | ("chest") | ("fishing") | ("entity") | ("equipment") | ("archaeology") | ("gift") | ("vault") | ("piglin_barter") | ("advancement_reward") | ("advancement_entity") | ("advancement_location") | ("command") | ("selector") | ("shearing") | ("generic"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootType_ = $LootType$$Type;
}}
declare module "com.almostreliable.lootjs.loot.table.PostLootActionOwner" {
import {$PostLootAction, $PostLootAction$$Type} from "com.almostreliable.lootjs.loot.table.PostLootAction"

export interface $PostLootActionOwner {

 "lootjs$setPostLootAction"(arg0: $PostLootAction$$Type): void
 "lootjs$getPostLootAction"(): $PostLootAction
}

export namespace $PostLootActionOwner {
const probejs$$marker: never
}
export class $PostLootActionOwner$$Static implements $PostLootActionOwner {


 "lootjs$setPostLootAction"(arg0: $PostLootAction$$Type): void
 "lootjs$getPostLootAction"(): $PostLootAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostLootActionOwner$$Type = ($PostLootActionOwner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PostLootActionOwner_ = $PostLootActionOwner$$Type;
}}
declare module "com.almostreliable.lootjs.core.entry.AbstractSimpleLootEntry" {
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootPoolEntryType, $LootPoolEntryType$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryType"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$SimpleLootEntry, $SimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$EmptyLootEntry, $EmptyLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$LootPoolSingletonContainer, $LootPoolSingletonContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$TagLootEntry, $TagLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$TableReferenceLootEntry, $TableReferenceLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LootFunctionList, $LootFunctionList$$Type} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$CompositeLootEntry, $CompositeLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$SetEnchantmentsFunction$Builder, $SetEnchantmentsFunction$Builder$$Type} from "net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction$Builder"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LootConditionList, $LootConditionList$$Type} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$DamageSourcePredicate, $DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"

export class $AbstractSimpleLootEntry<E extends $LootPoolSingletonContainer> implements $SimpleLootEntry {

constructor(arg0: E)
constructor(arg0: E, arg1: $LootConditionList$$Type, arg2: $LootFunctionList$$Type)

public "getConditions"(): $LootConditionList
public "getVanillaEntry"(): E
public "getWeight"(): integer
public "getFunctions"(): $LootFunctionList
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "setWeight"(arg0: integer): void
public "setQuality"(arg0: integer): void
public "getQuality"(): integer
public "getVanillaType"(): $LootPoolEntryType
public "apply"(arg0: $Consumer$$Type<($LootFunctionList)>): $SimpleLootEntry
public "when"(arg0: $Consumer$$Type<(any)>): $LootEntry
public "setCount"(arg0: $NumberProvider$$Type): $SimpleLootEntry
public "addFunction"(arg0: $LootItemFunction$$Type): any
public "withWeight"(arg0: integer): $SimpleLootEntry
public "withQuality"(arg0: integer): $SimpleLootEntry
public "isDynamic"(): boolean
public static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public "isEmpty"(): boolean
public static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
public static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
public static "empty"(): $EmptyLootEntry
public static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
public "getType"(): $ResourceLocation
public static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "tag"(arg0: string): $TagLootEntry
public static "tag"(arg0: string, arg1: boolean): $TagLootEntry
public "isReference"(): boolean
public static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public "isSimple"(): boolean
public "isTag"(): boolean
public static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
public static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
public "isItem"(): boolean
public static "testItem"(arg0: string): $ItemLootEntry
public "isComposite"(): boolean
public "isAlternative"(): boolean
public "isSequence"(): boolean
public "isGroup"(): boolean
public static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
public static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
public "setName"(arg0: $Component$$Type): $SimpleLootEntry
public "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): $SimpleLootEntry
public "enchantRandomly"(): $SimpleLootEntry
public "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): $SimpleLootEntry
public "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): $SimpleLootEntry
public "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): $SimpleLootEntry
public "simulateExplosionDecay"(): $SimpleLootEntry
public "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
public "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
public "smelt"(): $SimpleLootEntry
public "damage"(arg0: $NumberProvider$$Type): $SimpleLootEntry
public "enchantWithLevels"(arg0: $NumberProvider$$Type): $SimpleLootEntry
public "addPotion"(arg0: $Potion$$Type): $SimpleLootEntry
public "setCustomData"(arg0: $CompoundTag$$Type): $SimpleLootEntry
public "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $SimpleLootEntry
public "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): $SimpleLootEntry
public "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $SimpleLootEntry
public "addLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
public "replaceLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
public "toggleTooltips"(arg0: $Map$$Type<(string), (boolean)>): $SimpleLootEntry
public "jsonFunction"(arg0: $JsonObject$$Type): $SimpleLootEntry
public "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): $SimpleLootEntry
public "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootEntry
public "matchLocation"(arg0: $LocationPredicate$$Type): $LootEntry
public "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootEntry
public "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootEntry
public "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootEntry
public "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
public "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
public "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootEntry
public "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
public "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
public "matchCustomCondition"(arg0: $JsonObject$$Type): $LootEntry
public "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootEntry
public "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootEntry
public "survivesExplosion"(): $LootEntry
public "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootEntry
public "matchBlock"(arg0: $Block$$Type): $LootEntry
public "matchTool"(arg0: $ItemPredicate$$Type): $LootEntry
public "matchPlayer"(arg0: $EntityPredicate$$Type): $LootEntry
public "randomChance"(arg0: $NumberProvider$$Type): $LootEntry
public "killedByPlayer"(): $LootEntry
public "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootEntry
public "matchTime"(arg0: integer, arg1: integer): $LootEntry
public "matchMainHand"(arg0: $ItemFilter$$Type): $LootEntry
public "matchOffHand"(arg0: $ItemFilter$$Type): $LootEntry
public "matchHead"(arg0: $ItemFilter$$Type): $LootEntry
public "matchChest"(arg0: $ItemFilter$$Type): $LootEntry
public "matchLegs"(arg0: $ItemFilter$$Type): $LootEntry
public "matchFeet"(arg0: $ItemFilter$$Type): $LootEntry
public "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootEntry
public "matchWeather"(arg0: boolean, arg1: boolean): $LootEntry
public "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootEntry
public "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootEntry
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootEntry
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootEntry
public "isLightLevel"(arg0: integer, arg1: integer): $LootEntry
public "matchEntity"(arg0: $EntityPredicate$$Type): $LootEntry
public "matchAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
public "matchDistance"(arg0: $DistancePredicate$$Type): $LootEntry
public "hasAnyStage"(...arg0: (string)[]): $LootEntry
public "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
public "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
public "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
public "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
get "conditions"(): $LootConditionList
get "vanillaEntry"(): E
get "weight"(): integer
get "functions"(): $LootFunctionList
set "weight"(value: integer)
set "quality"(value: integer)
get "quality"(): integer
get "vanillaType"(): $LootPoolEntryType
set "count"(value: $NumberProvider$$Type)
get "dynamic"(): boolean
get "type"(): $ResourceLocation
get "simple"(): boolean
get "item"(): boolean
get "composite"(): boolean
set "name"(value: $Component$$Type)
set "customData"(value: $CompoundTag$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSimpleLootEntry$$Type<E> = ($AbstractSimpleLootEntry<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSimpleLootEntry_<E> = $AbstractSimpleLootEntry$$Type<(E)>;
}}
declare module "com.almostreliable.morejs.features.villager.TradeItem" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IntRange, $IntRange$$Type} from "com.almostreliable.morejs.features.villager.IntRange"
import {$ItemCost, $ItemCost$$Type} from "net.minecraft.world.item.trading.ItemCost"

export class $TradeItem {
static readonly "EMPTY": $TradeItem

constructor(arg0: $ItemStack$$Type, arg1: $IntRange$$Type)

public "isEmpty"(): boolean
public static "of"(arg0: $ItemStack$$Type): $TradeItem
public static "of"(arg0: $ItemStack$$Type, arg1: integer): $TradeItem
public static "of"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer): $TradeItem
public "getItemStack"(): $ItemStack
public "createItemStack"(arg0: $RandomSource$$Type): $ItemStack
public "createItemCost"(arg0: $RandomSource$$Type): $ItemCost
public "getCountRange"(): $IntRange
get "empty"(): boolean
get "itemStack"(): $ItemStack
get "countRange"(): $IntRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TradeItem$$Type = ($TradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TradeItem_ = $TradeItem$$Type;
}}
declare module "com.almostreliable.morejs.features.potion.PotionBrewingFilter" {
import {$PotionBrewing$Mix, $PotionBrewing$Mix$$Type} from "net.minecraft.world.item.alchemy.PotionBrewing$Mix"
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PotionBrewingFilter extends $Record implements $Predicate<($PotionBrewing$Mix<($Potion)>)> {

constructor(ingredient: $Optional$$Type<($Ingredient$$Type)>, input: $Optional$$Type<($HolderSet$$Type<($Potion$$Type)>)>, output: $Optional$$Type<($HolderSet$$Type<($Potion$$Type)>)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $PotionBrewing$Mix$$Type<($Potion$$Type)>): boolean
public "test"(arg0: any): boolean
public "input"(): $Optional<($HolderSet<($Potion)>)>
public "output"(): $Optional<($HolderSet<($Potion)>)>
public "ingredient"(): $Optional<($Ingredient)>
public "or"(arg0: $Predicate$$Type<($PotionBrewing$Mix<($Potion)>)>): $Predicate<($PotionBrewing$Mix<($Potion)>)>
public "negate"(): $Predicate<($PotionBrewing$Mix<($Potion)>)>
public "and"(arg0: $Predicate$$Type<($PotionBrewing$Mix<($Potion)>)>): $Predicate<($PotionBrewing$Mix<($Potion)>)>
public static "not"<T>(arg0: $Predicate$$Type<($PotionBrewing$Mix<($Potion)>)>): $Predicate<($PotionBrewing$Mix<($Potion)>)>
public static "isEqual"<T>(arg0: any): $Predicate<($PotionBrewing$Mix<($Potion)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewingFilter$$Type = ({"output"?: ($HolderSet$$Type<($Potion$$Type)>)?, "input"?: ($HolderSet$$Type<($Potion$$Type)>)?, "ingredient"?: ($Ingredient$$Type)?}) | ([output?: ($HolderSet$$Type<($Potion$$Type)>)?, input?: ($HolderSet$$Type<($Potion$$Type)>)?, ingredient?: ($Ingredient$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionBrewingFilter_ = $PotionBrewingFilter$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.trades.PotionTrade" {
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$TradeItem, $TradeItem$$Type} from "com.almostreliable.morejs.features.villager.TradeItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$TransformableTrade, $TransformableTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.TransformableTrade"

export class $PotionTrade extends $TransformableTrade<($PotionTrade)> {

constructor(arg0: ($TradeItem$$Type)[])

public "item"(arg0: $Item$$Type): $PotionTrade
public "onlyBrewablePotion"(): $PotionTrade
public "noBrewablePotion"(): $PotionTrade
public "potions"(...arg0: ($Potion$$Type)[]): $PotionTrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionTrade$$Type = ($PotionTrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionTrade_ = $PotionTrade$$Type;
}}
declare module "com.almostreliable.lootjs.core.entry.CompositeLootEntry" {
import {$SimpleLootEntry, $SimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$EmptyLootEntry, $EmptyLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$CompositeEntryBase, $CompositeEntryBase$$Type} from "net.minecraft.world.level.storage.loot.entries.CompositeEntryBase"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootPoolEntryType, $LootPoolEntryType$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$TagLootEntry, $TagLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$TableReferenceLootEntry, $TableReferenceLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$LootEntryList, $LootEntryList$$Type} from "com.almostreliable.lootjs.loot.LootEntryList"
import {$LootEntryAppender, $LootEntryAppender$$Type} from "com.almostreliable.lootjs.loot.table.LootEntryAppender"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LootConditionList, $LootConditionList$$Type} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$DamageSourcePredicate, $DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$LootEntriesTransformer, $LootEntriesTransformer$$Type} from "com.almostreliable.lootjs.loot.table.LootEntriesTransformer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export class $CompositeLootEntry implements $LootEntry, $LootEntriesTransformer, $LootEntryAppender {

constructor(arg0: $CompositeEntryBase$$Type)
constructor(arg0: $CompositeEntryBase$$Type, arg1: $LootEntryList$$Type, arg2: $LootConditionList$$Type)

public "getConditions"(): $LootConditionList
public "entries"(arg0: $Consumer$$Type<($LootEntryList)>): $CompositeLootEntry
public "addEntry"(arg0: $LootEntry$$Type): $CompositeLootEntry
public "getEntries"(): $LootEntryList
public "when"(arg0: $Consumer$$Type<($LootConditionList)>): $CompositeLootEntry
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>, arg1: boolean): $CompositeLootEntry
public "getVanillaEntry"(): $LootPoolEntryContainer
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "getVanillaType"(): $LootPoolEntryType
public "modifyEntry"(arg0: $UnaryOperator$$Type<(any)>, arg1: boolean): $LootEntriesTransformer
public "isDynamic"(): boolean
public static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public "isEmpty"(): boolean
public static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
public static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
public static "empty"(): $EmptyLootEntry
public static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
public "getType"(): $ResourceLocation
public static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "tag"(arg0: string): $TagLootEntry
public static "tag"(arg0: string, arg1: boolean): $TagLootEntry
public "isReference"(): boolean
public static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public "isSimple"(): boolean
public "isTag"(): boolean
public static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
public static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
public "isItem"(): boolean
public static "testItem"(arg0: string): $ItemLootEntry
public "isComposite"(): boolean
public "isAlternative"(): boolean
public "isSequence"(): boolean
public "isGroup"(): boolean
public static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
public static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
public "removeItem"(arg0: $ItemFilter$$Type): $LootEntriesTransformer
public "removeItem"(arg0: $ItemFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "hasItem"(arg0: $ItemFilter$$Type): boolean
public "removeReference"(arg0: $IdFilter$$Type): $LootEntriesTransformer
public "removeReference"(arg0: $IdFilter$$Type, arg1: boolean): $LootEntriesTransformer
public "removeEntry"(arg0: $Predicate$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "modifyItemEntry"(arg0: $UnaryOperator$$Type<($ItemLootEntry)>): $LootEntriesTransformer
public "removeTag"(arg0: string): $LootEntriesTransformer
public "removeTag"(arg0: string, arg1: boolean): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type): $LootEntriesTransformer
public "replaceItem"(arg0: $ItemFilter$$Type, arg1: $Item$$Type, arg2: boolean): $LootEntriesTransformer
public "modifyEntry"(arg0: $UnaryOperator$$Type<($SimpleLootEntry)>): $LootEntriesTransformer
public "addCustomEntry"(arg0: $JsonObject$$Type): $LootEntryAppender
public "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootEntry
public "matchLocation"(arg0: $LocationPredicate$$Type): $LootEntry
public "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootEntry
public "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootEntry
public "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootEntry
public "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
public "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
public "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootEntry
public "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
public "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
public "matchCustomCondition"(arg0: $JsonObject$$Type): $LootEntry
public "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootEntry
public "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootEntry
public "survivesExplosion"(): $LootEntry
public "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootEntry
public "matchBlock"(arg0: $Block$$Type): $LootEntry
public "matchTool"(arg0: $ItemPredicate$$Type): $LootEntry
public "matchPlayer"(arg0: $EntityPredicate$$Type): $LootEntry
public "randomChance"(arg0: $NumberProvider$$Type): $LootEntry
public "killedByPlayer"(): $LootEntry
public "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootEntry
public "matchTime"(arg0: integer, arg1: integer): $LootEntry
public "matchMainHand"(arg0: $ItemFilter$$Type): $LootEntry
public "matchOffHand"(arg0: $ItemFilter$$Type): $LootEntry
public "matchHead"(arg0: $ItemFilter$$Type): $LootEntry
public "matchChest"(arg0: $ItemFilter$$Type): $LootEntry
public "matchLegs"(arg0: $ItemFilter$$Type): $LootEntry
public "matchFeet"(arg0: $ItemFilter$$Type): $LootEntry
public "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootEntry
public "matchWeather"(arg0: boolean, arg1: boolean): $LootEntry
public "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootEntry
public "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootEntry
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootEntry
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootEntry
public "isLightLevel"(arg0: integer, arg1: integer): $LootEntry
public "matchEntity"(arg0: $EntityPredicate$$Type): $LootEntry
public "matchAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
public "matchDistance"(arg0: $DistancePredicate$$Type): $LootEntry
public "hasAnyStage"(...arg0: (string)[]): $LootEntry
public "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
public "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
public "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
public "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
get "conditions"(): $LootConditionList
get "vanillaEntry"(): $LootPoolEntryContainer
get "vanillaType"(): $LootPoolEntryType
get "dynamic"(): boolean
get "type"(): $ResourceLocation
get "simple"(): boolean
get "item"(): boolean
get "composite"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeLootEntry$$Type = ($CompositeLootEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeLootEntry_ = $CompositeLootEntry$$Type;
}}
declare module "com.almostreliable.morejs.features.enchantment.EnchantmentTableEventJS" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$KubeLevelEvent, $KubeLevelEvent$$Type} from "dev.latvian.mods.kubejs.level.KubeLevelEvent"
import {$EnchantmentMenu, $EnchantmentMenu$$Type} from "net.minecraft.world.inventory.EnchantmentMenu"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $EnchantmentTableEventJS implements $KubeLevelEvent {

constructor(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $Player$$Type, arg4: $EnchantmentMenu$$Type)

public "getLevel"(): $Level
public "getItem"(): $ItemStack
public "getPlayer"(): $Player
public "getSecondItem"(): $ItemStack
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
get "level"(): $Level
get "item"(): $ItemStack
get "player"(): $Player
get "secondItem"(): $ItemStack
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentTableEventJS$$Type = ($EnchantmentTableEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentTableEventJS_ = $EnchantmentTableEventJS$$Type;
}}
declare module "com.almostreliable.lootjs.loot.LootConditionList" {
import {$LootItemConditionType, $LootItemConditionType$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemConditionType"
import {$List, $List$$Type} from "java.util.List"
import {$IdFilter, $IdFilter$$Type} from "com.almostreliable.lootjs.core.filters.IdFilter"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$LootConditionsContainer, $LootConditionsContainer$$Type} from "com.almostreliable.lootjs.loot.LootConditionsContainer"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$DamageSourcePredicate, $DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$ListHolder, $ListHolder$$Type} from "com.almostreliable.lootjs.util.ListHolder"

export class $LootConditionList extends $ListHolder<($LootItemCondition), ($LootItemCondition)> implements $LootConditionsContainer<($LootConditionList)>, $Predicate<($LootContext)> {

constructor()
constructor(arg0: $List$$Type<($LootItemCondition$$Type)>)

public "remove"(arg0: $IdFilter$$Type): boolean
public "indexOf"(arg0: $LootItemConditionType$$Type): integer
public "test"(arg0: $LootContext$$Type): boolean
public "test"(arg0: any): boolean
public "lastIndexOf"(arg0: $LootItemConditionType$$Type): integer
public "iterator"(): $Iterator<($LootItemCondition)>
public "contains"(arg0: $LootItemConditionType$$Type): boolean
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootConditionList
public "matchLocation"(arg0: $LocationPredicate$$Type): $LootConditionList
public "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootConditionList
public "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootConditionList
public "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootConditionList
public "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootConditionList
public "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootConditionList
public "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootConditionList
public "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootConditionList
public "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootConditionList
public "matchCustomCondition"(arg0: $JsonObject$$Type): $LootConditionList
public "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootConditionList
public "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootConditionList
public "survivesExplosion"(): $LootConditionList
public "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootConditionList
public "matchBlock"(arg0: $Block$$Type): $LootConditionList
public "matchTool"(arg0: $ItemPredicate$$Type): $LootConditionList
public "matchPlayer"(arg0: $EntityPredicate$$Type): $LootConditionList
public "randomChance"(arg0: $NumberProvider$$Type): $LootConditionList
public "killedByPlayer"(): $LootConditionList
public "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootConditionList
public "matchTime"(arg0: integer, arg1: integer): $LootConditionList
public "matchMainHand"(arg0: $ItemFilter$$Type): $LootConditionList
public "matchOffHand"(arg0: $ItemFilter$$Type): $LootConditionList
public "matchHead"(arg0: $ItemFilter$$Type): $LootConditionList
public "matchChest"(arg0: $ItemFilter$$Type): $LootConditionList
public "matchLegs"(arg0: $ItemFilter$$Type): $LootConditionList
public "matchFeet"(arg0: $ItemFilter$$Type): $LootConditionList
public "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootConditionList
public "matchWeather"(arg0: boolean, arg1: boolean): $LootConditionList
public "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootConditionList
public "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootConditionList
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootConditionList
public "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootConditionList
public "isLightLevel"(arg0: integer, arg1: integer): $LootConditionList
public "matchEntity"(arg0: $EntityPredicate$$Type): $LootConditionList
public "matchAttacker"(arg0: $EntityPredicate$$Type): $LootConditionList
public "matchDistance"(arg0: $DistancePredicate$$Type): $LootConditionList
public "hasAnyStage"(...arg0: (string)[]): $LootConditionList
public "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootConditionList
public "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootConditionList
public "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootConditionList
public "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootConditionList
public "or"(arg0: $Predicate$$Type<($LootContext)>): $Predicate<($LootContext)>
public "negate"(): $Predicate<($LootContext)>
public "and"(arg0: $Predicate$$Type<($LootContext)>): $Predicate<($LootContext)>
public static "not"<T>(arg0: $Predicate$$Type<($LootContext)>): $Predicate<($LootContext)>
public static "isEqual"<T>(arg0: any): $Predicate<($LootContext)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootConditionList$$Type = ($LootConditionList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootConditionList_ = $LootConditionList$$Type;
}}
declare module "com.almostreliable.morejs.features.structure.StructureTemplateAccess" {
import {$StructureTemplate$Palette, $StructureTemplate$Palette$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$StructureTemplate$StructureEntityInfo, $StructureTemplate$StructureEntityInfo$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureEntityInfo"
import {$List, $List$$Type} from "java.util.List"

export interface $StructureTemplateAccess {

 "getEntities"(): $List<($StructureTemplate$StructureEntityInfo)>
 "getPalettes"(): $List<($StructureTemplate$Palette)>
 "getBorderSize"(): $Vec3i
get "entities"(): $List<($StructureTemplate$StructureEntityInfo)>
get "palettes"(): $List<($StructureTemplate$Palette)>
get "borderSize"(): $Vec3i
}

export namespace $StructureTemplateAccess {
const probejs$$marker: never
}
export class $StructureTemplateAccess$$Static implements $StructureTemplateAccess {


 "getEntities"(): $List<($StructureTemplate$StructureEntityInfo)>
 "getPalettes"(): $List<($StructureTemplate$Palette)>
 "getBorderSize"(): $Vec3i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplateAccess$$Type = ($StructureTemplateAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureTemplateAccess_ = $StructureTemplateAccess$$Type;
}}
declare module "com.almostreliable.lootjs.loot.extension.LootItemFunctionExtension" {
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootConditionList, $LootConditionList$$Type} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $LootItemFunctionExtension {

 "when"(arg0: $Consumer$$Type<($LootConditionList)>): $LootItemFunction

(arg0: $Consumer<($LootConditionList)>): $LootItemFunction$$Type
}

export namespace $LootItemFunctionExtension {
const probejs$$marker: never
}
export class $LootItemFunctionExtension$$Static implements $LootItemFunctionExtension {


 "when"(arg0: $Consumer$$Type<($LootConditionList)>): $LootItemFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootItemFunctionExtension$$Type = ((arg0: $Consumer<($LootConditionList)>) => $LootItemFunction$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootItemFunctionExtension_ = $LootItemFunctionExtension$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.IntRange" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IntPredicate, $IntPredicate$$Type} from "java.util.function.IntPredicate"

export class $IntRange implements $IntPredicate {

constructor(arg0: integer, arg1: integer)
constructor(arg0: integer)

public "getRandom"(arg0: $RandomSource$$Type): integer
public "test"(arg0: integer): boolean
public static "all"(): $IntRange
public "getMin"(): integer
public "getMax"(): integer
public "or"(arg0: $IntPredicate$$Type): $IntPredicate
public "negate"(): $IntPredicate
public "and"(arg0: $IntPredicate$$Type): $IntPredicate
get "min"(): integer
get "max"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntRange$$Type = ($IntRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntRange_ = $IntRange$$Type;
}}
declare module "com.almostreliable.lootjs.loot.extension.LootParamsExtension" {
import {$LootType, $LootType$$Type} from "com.almostreliable.lootjs.core.LootType"

export interface $LootParamsExtension {

 "setType"(arg0: $LootType$$Type): void
 "getType"(): $LootType
set "type"(value: $LootType$$Type)
get "type"(): $LootType
}

export namespace $LootParamsExtension {
const probejs$$marker: never
}
export class $LootParamsExtension$$Static implements $LootParamsExtension {


 "setType"(arg0: $LootType$$Type): void
 "getType"(): $LootType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootParamsExtension$$Type = ($LootParamsExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootParamsExtension_ = $LootParamsExtension$$Type;
}}
declare module "com.almostreliable.lootjs.loot.table.LootEntryAppender" {
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"

export interface $LootEntryAppender {

 "addEntry"(arg0: $LootEntry$$Type): $LootEntryAppender
 "addCustomEntry"(arg0: $JsonObject$$Type): $LootEntryAppender

(arg0: $LootEntry): $LootEntryAppender$$Type
}

export namespace $LootEntryAppender {
const probejs$$marker: never
}
export class $LootEntryAppender$$Static implements $LootEntryAppender {


 "addEntry"(arg0: $LootEntry$$Type): $LootEntryAppender
 "addCustomEntry"(arg0: $JsonObject$$Type): $LootEntryAppender
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootEntryAppender$$Type = ((arg0: $LootEntry) => $LootEntryAppender$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootEntryAppender_ = $LootEntryAppender$$Type;
}}
declare module "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$EmptyLootEntry, $EmptyLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$CompositeLootEntry, $CompositeLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$NestedLootTable, $NestedLootTable$$Type} from "net.minecraft.world.level.storage.loot.entries.NestedLootTable"
import {$AbstractSimpleLootEntry, $AbstractSimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.AbstractSimpleLootEntry"
import {$TagLootEntry, $TagLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"

export class $TableReferenceLootEntry extends $AbstractSimpleLootEntry<($NestedLootTable)> {

constructor(arg0: $NestedLootTable$$Type)
constructor(arg0: $ResourceLocation$$Type)

public "getLocation"(): $ResourceLocation
public "setLocation"(arg0: $ResourceLocation$$Type): void
public "collectDebugInfo"(arg0: $DebugInfo$$Type): void
public "when"(arg0: $Consumer$$Type<(any)>): $LootEntry
public "addFunction"(arg0: $LootItemFunction$$Type): any
public static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
public static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
public static "empty"(): $EmptyLootEntry
public static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
public static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "tag"(arg0: string): $TagLootEntry
public static "tag"(arg0: string, arg1: boolean): $TagLootEntry
public static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
public static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
public static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
public static "testItem"(arg0: string): $ItemLootEntry
public static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
public static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
get "location"(): $ResourceLocation
set "location"(value: $ResourceLocation$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TableReferenceLootEntry$$Type = ($TableReferenceLootEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TableReferenceLootEntry_ = $TableReferenceLootEntry$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.trades.TransformableTrade$Transformer" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$MerchantOffer, $MerchantOffer$$Type} from "net.minecraft.world.item.trading.MerchantOffer"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $TransformableTrade$Transformer {

 "accept"(arg0: $MerchantOffer$$Type, arg1: $Entity$$Type, arg2: $RandomSource$$Type): void

(arg0: $MerchantOffer, arg1: $Entity, arg2: $RandomSource): void
}

export namespace $TransformableTrade$Transformer {
const probejs$$marker: never
}
export class $TransformableTrade$Transformer$$Static implements $TransformableTrade$Transformer {


 "accept"(arg0: $MerchantOffer$$Type, arg1: $Entity$$Type, arg2: $RandomSource$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformableTrade$Transformer$$Type = ((arg0: $MerchantOffer, arg1: $Entity, arg2: $RandomSource) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformableTrade$Transformer_ = $TransformableTrade$Transformer$$Type;
}}
declare module "com.almostreliable.morejs.util.WeightedList$Builder" {
import {$WeightedList, $WeightedList$$Type} from "com.almostreliable.morejs.util.WeightedList"

export class $WeightedList$Builder<T> {

constructor()

public "add"(arg0: integer, arg1: T): $WeightedList$Builder<(T)>
public "build"(): $WeightedList<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedList$Builder$$Type<T> = ($WeightedList$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedList$Builder_<T> = $WeightedList$Builder$$Type<(T)>;
}}
declare module "com.almostreliable.morejs.features.structure.EntityInfoWrapper" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$StructureTemplate$StructureEntityInfo, $StructureTemplate$StructureEntityInfo$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureEntityInfo"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $EntityInfoWrapper {

constructor(arg0: $List$$Type<($StructureTemplate$StructureEntityInfo$$Type)>, arg1: $Vec3i$$Type)

public "add"(arg0: $CompoundTag$$Type): void
public "forEach"(arg0: $Consumer$$Type<($StructureTemplate$StructureEntityInfo)>): void
public "removeIf"(arg0: $Predicate$$Type<($StructureTemplate$StructureEntityInfo)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityInfoWrapper$$Type = ($EntityInfoWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityInfoWrapper_ = $EntityInfoWrapper$$Type;
}}
declare module "com.almostreliable.morejs.features.villager.events.StartTradingEventJS" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Merchant, $Merchant$$Type} from "net.minecraft.world.item.trading.Merchant"
import {$KubePlayerEvent, $KubePlayerEvent$$Type} from "dev.latvian.mods.kubejs.player.KubePlayerEvent"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$OfferExtension, $OfferExtension$$Type} from "com.almostreliable.morejs.features.villager.OfferExtension"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $StartTradingEventJS implements $KubePlayerEvent {

constructor(arg0: $Player$$Type, arg1: $Merchant$$Type)

public "getEntity"(): $LivingEntity
public "getMerchant"(): $Merchant
public "forEachOffers"(arg0: $BiConsumer$$Type<($OfferExtension), (integer)>): void
public "getPlayer"(): $Player
public "getLevel"(): $Level
public "getRegistries"(): $RegistryAccess
public "getServer"(): $MinecraftServer
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
get "entity"(): $LivingEntity
get "merchant"(): $Merchant
get "player"(): $Player
get "level"(): $Level
get "registries"(): $RegistryAccess
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StartTradingEventJS$$Type = ($StartTradingEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StartTradingEventJS_ = $StartTradingEventJS$$Type;
}}
declare module "com.almostreliable.lootjs.loot.LootActionContainer" {
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$GroupedLootAction$Builder, $GroupedLootAction$Builder$$Type} from "com.almostreliable.lootjs.loot.modifier.GroupedLootAction$Builder"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$LootAction, $LootAction$$Type} from "com.almostreliable.lootjs.loot.modifier.LootAction"
import {$Explosion$BlockInteraction, $Explosion$BlockInteraction$$Type} from "net.minecraft.world.level.Explosion$BlockInteraction"
import {$ModifyLootAction$Callback, $ModifyLootAction$Callback$$Type} from "com.almostreliable.lootjs.loot.modifier.handler.ModifyLootAction$Callback"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$MutableLootPool, $MutableLootPool$$Type} from "com.almostreliable.lootjs.loot.table.MutableLootPool"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $LootActionContainer<A extends $LootActionContainer<(any)>> {

 "group"(arg0: $Consumer$$Type<($GroupedLootAction$Builder)>): A
 "group"(arg0: $ItemFilter$$Type, arg1: $Consumer$$Type<($GroupedLootAction$Builder)>): A
 "pool"(arg0: $Consumer$$Type<($MutableLootPool)>): A
 "modifyLoot"(arg0: $ItemFilter$$Type, arg1: $ModifyLootAction$Callback$$Type): A
 "dropExperience"(arg0: $NumberProvider$$Type): A
 "addLoot"(...arg0: ($LootEntry$$Type)[]): A
 "replaceLoot"(arg0: $ItemFilter$$Type, arg1: $ItemLootEntry$$Type, arg2: boolean): A
 "replaceLoot"(arg0: $ItemFilter$$Type, arg1: $ItemLootEntry$$Type): A
 "addAction"(arg0: $LootAction$$Type): A
 "removeLoot"(arg0: $ItemFilter$$Type): A
 "customAction"(arg0: $LootAction$$Type): A
 "playerAction"(arg0: $Consumer$$Type<($ServerPlayer)>): A
 "addAlternativesLoot"(...arg0: ($LootEntry$$Type)[]): A
 "addSequenceLoot"(...arg0: ($LootEntry$$Type)[]): A
 "triggerExplosion"(arg0: float, arg1: $Explosion$BlockInteraction$$Type, arg2: boolean): A
 "triggerExplosion"(arg0: float, arg1: boolean, arg2: boolean): A
 "triggerLightningStrike"(arg0: boolean): A

(arg0: $LootAction): A
}

export namespace $LootActionContainer {
const probejs$$marker: never
}
export class $LootActionContainer$$Static<A extends $LootActionContainer<(any)>> implements $LootActionContainer {


 "group"(arg0: $Consumer$$Type<($GroupedLootAction$Builder)>): A
 "group"(arg0: $ItemFilter$$Type, arg1: $Consumer$$Type<($GroupedLootAction$Builder)>): A
 "pool"(arg0: $Consumer$$Type<($MutableLootPool)>): A
 "modifyLoot"(arg0: $ItemFilter$$Type, arg1: $ModifyLootAction$Callback$$Type): A
 "dropExperience"(arg0: $NumberProvider$$Type): A
 "addLoot"(...arg0: ($LootEntry$$Type)[]): A
 "replaceLoot"(arg0: $ItemFilter$$Type, arg1: $ItemLootEntry$$Type, arg2: boolean): A
 "replaceLoot"(arg0: $ItemFilter$$Type, arg1: $ItemLootEntry$$Type): A
 "addAction"(arg0: $LootAction$$Type): A
 "removeLoot"(arg0: $ItemFilter$$Type): A
 "customAction"(arg0: $LootAction$$Type): A
 "playerAction"(arg0: $Consumer$$Type<($ServerPlayer)>): A
 "addAlternativesLoot"(...arg0: ($LootEntry$$Type)[]): A
 "addSequenceLoot"(...arg0: ($LootEntry$$Type)[]): A
 "triggerExplosion"(arg0: float, arg1: $Explosion$BlockInteraction$$Type, arg2: boolean): A
 "triggerExplosion"(arg0: float, arg1: boolean, arg2: boolean): A
 "triggerLightningStrike"(arg0: boolean): A
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootActionContainer$$Type<A> = ((arg0: $LootAction) => A);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootActionContainer_<A> = $LootActionContainer$$Type<(A)>;
}}
declare module "com.almostreliable.morejs.features.villager.events.VillagerTradingEventJS" {
import {$KubeEvent, $KubeEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$VillagerTradingEventJS$ForEachCallback, $VillagerTradingEventJS$ForEachCallback$$Type} from "com.almostreliable.morejs.features.villager.events.VillagerTradingEventJS$ForEachCallback"
import {$TradeItem, $TradeItem$$Type} from "com.almostreliable.morejs.features.villager.TradeItem"
import {$List, $List$$Type} from "java.util.List"
import {$TradeFilter, $TradeFilter$$Type} from "com.almostreliable.morejs.features.villager.TradeFilter"
import {$TransformableTrade$Transformer, $TransformableTrade$Transformer$$Type} from "com.almostreliable.morejs.features.villager.trades.TransformableTrade$Transformer"
import {$VillagerTrades$ItemListing, $VillagerTrades$ItemListing$$Type} from "net.minecraft.world.entity.npc.VillagerTrades$ItemListing"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$VillagerProfession, $VillagerProfession$$Type} from "net.minecraft.world.entity.npc.VillagerProfession"
import {$Table, $Table$$Type} from "com.google.common.collect.Table"
import {$SimpleTrade, $SimpleTrade$$Type} from "com.almostreliable.morejs.features.villager.trades.SimpleTrade"
import {$IntRange, $IntRange$$Type} from "com.almostreliable.morejs.features.villager.IntRange"

export class $VillagerTradingEventJS implements $KubeEvent {

constructor(arg0: $Table$$Type<($VillagerProfession$$Type), (integer), ($List$$Type<($VillagerTrades$ItemListing$$Type)>)>)

public "addTrade"<T extends $VillagerTrades$ItemListing>(arg0: $Holder$$Type<($VillagerProfession)>, arg1: integer, arg2: T): T
public "addTrade"(arg0: $Holder$$Type<($VillagerProfession)>, arg1: integer, arg2: ($TradeItem$$Type)[], arg3: $TradeItem$$Type): $SimpleTrade
public "removeTrades"(arg0: $TradeFilter$$Type): void
public "getTrades"(arg0: $Holder$$Type<($VillagerProfession)>, arg1: integer): $List<($VillagerTrades$ItemListing)>
public "forEachTrades"(arg0: $List$$Type<($Holder$$Type<($VillagerProfession$$Type)>)>, arg1: $IntRange$$Type, arg2: $Consumer$$Type<($List<($VillagerTrades$ItemListing)>)>): void
public "forEachTrades"(arg0: $VillagerTradingEventJS$ForEachCallback$$Type): void
public "addCustomTrade"(arg0: $Holder$$Type<($VillagerProfession)>, arg1: integer, arg2: $TransformableTrade$Transformer$$Type): void
public "removeVanillaTypedTrades"(): void
public "removeVanillaTypedTrades"(arg0: $List$$Type<($Holder$$Type<($VillagerProfession$$Type)>)>): void
public "removeVanillaTypedTrades"(arg0: $List$$Type<($Holder$$Type<($VillagerProfession$$Type)>)>, arg1: $IntRange$$Type): void
public "removeModdedTypedTrades"(arg0: $List$$Type<($Holder$$Type<($VillagerProfession$$Type)>)>): void
public "removeModdedTypedTrades"(arg0: $List$$Type<($Holder$$Type<($VillagerProfession$$Type)>)>, arg1: $IntRange$$Type): void
public "removeModdedTypedTrades"(): void
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerTradingEventJS$$Type = ($VillagerTradingEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerTradingEventJS_ = $VillagerTradingEventJS$$Type;
}}
declare module "com.almostreliable.lootjs.core.entry.SingleLootEntry" {
import {$SimpleLootEntry, $SimpleLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.SimpleLootEntry"
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$EmptyLootEntry, $EmptyLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.EmptyLootEntry"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$LootPoolEntryType, $LootPoolEntryType$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$TagLootEntry, $TagLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TagLootEntry"
import {$TableReferenceLootEntry, $TableReferenceLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.TableReferenceLootEntry"
import {$ItemLootEntry, $ItemLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.ItemLootEntry"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$LootFunctionList, $LootFunctionList$$Type} from "com.almostreliable.lootjs.loot.LootFunctionList"
import {$AddAttributesFunction$Builder, $AddAttributesFunction$Builder$$Type} from "com.almostreliable.lootjs.loot.AddAttributesFunction$Builder"
import {$DebugInfo, $DebugInfo$$Type} from "com.almostreliable.lootjs.util.DebugInfo"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$CompositeLootEntry, $CompositeLootEntry$$Type} from "com.almostreliable.lootjs.core.entry.CompositeLootEntry"
import {$SetEnchantmentsFunction$Builder, $SetEnchantmentsFunction$Builder$$Type} from "net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction$Builder"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LootConditionList, $LootConditionList$$Type} from "com.almostreliable.lootjs.loot.LootConditionList"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$DamageSourcePredicate, $DamageSourcePredicate$$Type} from "net.minecraft.advancements.critereon.DamageSourcePredicate"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"

export interface $SingleLootEntry extends $SimpleLootEntry {

 "apply"(arg0: $Consumer$$Type<($LootFunctionList)>): $SimpleLootEntry
 "when"(arg0: $Consumer$$Type<(any)>): $LootEntry
 "setCount"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "getWeight"(): integer
 "getFunctions"(): $LootFunctionList
 "setWeight"(arg0: integer): void
 "setQuality"(arg0: integer): void
 "addFunction"(arg0: $LootItemFunction$$Type): any
 "withWeight"(arg0: integer): $SimpleLootEntry
 "withQuality"(arg0: integer): $SimpleLootEntry
 "getQuality"(): integer
 "getConditions"(): $LootConditionList
 "isDynamic"(): boolean
 "isEmpty"(): boolean
 "getType"(): $ResourceLocation
 "getVanillaEntry"(): $LootPoolEntryContainer
 "isReference"(): boolean
 "isSimple"(): boolean
 "isTag"(): boolean
 "isItem"(): boolean
 "collectDebugInfo"(arg0: $DebugInfo$$Type): void
 "getVanillaType"(): $LootPoolEntryType
 "isComposite"(): boolean
 "isAlternative"(): boolean
 "isSequence"(): boolean
 "isGroup"(): boolean
 "setName"(arg0: $Component$$Type): $SimpleLootEntry
 "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): $SimpleLootEntry
 "enchantRandomly"(): $SimpleLootEntry
 "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): $SimpleLootEntry
 "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): $SimpleLootEntry
 "simulateExplosionDecay"(): $SimpleLootEntry
 "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
 "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
 "smelt"(): $SimpleLootEntry
 "damage"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "enchantWithLevels"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "addPotion"(arg0: $Potion$$Type): $SimpleLootEntry
 "setCustomData"(arg0: $CompoundTag$$Type): $SimpleLootEntry
 "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $SimpleLootEntry
 "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): $SimpleLootEntry
 "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $SimpleLootEntry
 "addLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
 "replaceLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
 "toggleTooltips"(arg0: $Map$$Type<(string), (boolean)>): $SimpleLootEntry
 "jsonFunction"(arg0: $JsonObject$$Type): $SimpleLootEntry
 "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): $SimpleLootEntry
 "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootEntry
 "matchLocation"(arg0: $LocationPredicate$$Type): $LootEntry
 "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootEntry
 "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootEntry
 "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootEntry
 "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchCustomCondition"(arg0: $JsonObject$$Type): $LootEntry
 "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootEntry
 "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootEntry
 "survivesExplosion"(): $LootEntry
 "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootEntry
 "matchBlock"(arg0: $Block$$Type): $LootEntry
 "matchTool"(arg0: $ItemPredicate$$Type): $LootEntry
 "matchPlayer"(arg0: $EntityPredicate$$Type): $LootEntry
 "randomChance"(arg0: $NumberProvider$$Type): $LootEntry
 "killedByPlayer"(): $LootEntry
 "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootEntry
 "matchTime"(arg0: integer, arg1: integer): $LootEntry
 "matchMainHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchOffHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchHead"(arg0: $ItemFilter$$Type): $LootEntry
 "matchChest"(arg0: $ItemFilter$$Type): $LootEntry
 "matchLegs"(arg0: $ItemFilter$$Type): $LootEntry
 "matchFeet"(arg0: $ItemFilter$$Type): $LootEntry
 "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootEntry
 "matchWeather"(arg0: boolean, arg1: boolean): $LootEntry
 "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootEntry
 "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootEntry
 "isLightLevel"(arg0: integer, arg1: integer): $LootEntry
 "matchEntity"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDistance"(arg0: $DistancePredicate$$Type): $LootEntry
 "hasAnyStage"(...arg0: (string)[]): $LootEntry
 "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
set "count"(value: $NumberProvider$$Type)
get "weight"(): integer
get "functions"(): $LootFunctionList
set "weight"(value: integer)
set "quality"(value: integer)
get "quality"(): integer
get "conditions"(): $LootConditionList
get "dynamic"(): boolean
get "type"(): $ResourceLocation
get "vanillaEntry"(): $LootPoolEntryContainer
get "simple"(): boolean
get "item"(): boolean
get "vanillaType"(): $LootPoolEntryType
get "composite"(): boolean
set "name"(value: $Component$$Type)
set "customData"(value: $CompoundTag$$Type)
}

export namespace $SingleLootEntry {
function group(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
function of(arg0: $ItemStack$$Type): $ItemLootEntry
function of(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
function empty(): $EmptyLootEntry
function reference(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
function sequence(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
function tag(arg0: string): $TagLootEntry
function tag(arg0: string, arg1: boolean): $TagLootEntry
function alternative(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
function ep(arg0: $EntityPredicate$$Type): $EntityPredicate
function ofItem(arg0: $Item$$Type): $ItemLootEntry
function testItem(arg0: string): $ItemLootEntry
function ofIngredient(arg0: $Ingredient$$Type): $CompositeLootEntry
function ofVanilla(arg0: $LootPoolEntryContainer$$Type): $LootEntry
const probejs$$marker: never
}
export class $SingleLootEntry$$Static implements $SingleLootEntry {


 "apply"(arg0: $Consumer$$Type<($LootFunctionList)>): $SimpleLootEntry
 "when"(arg0: $Consumer$$Type<(any)>): $LootEntry
 "setCount"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "getWeight"(): integer
 "getFunctions"(): $LootFunctionList
 "setWeight"(arg0: integer): void
 "setQuality"(arg0: integer): void
 "addFunction"(arg0: $LootItemFunction$$Type): any
 "withWeight"(arg0: integer): $SimpleLootEntry
 "withQuality"(arg0: integer): $SimpleLootEntry
 "getQuality"(): integer
 "getConditions"(): $LootConditionList
 "isDynamic"(): boolean
static "group"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
 "isEmpty"(): boolean
static "of"(arg0: $ItemStack$$Type): $ItemLootEntry
static "of"(arg0: $Item$$Type, arg1: $NumberProvider$$Type): $ItemLootEntry
static "empty"(): $EmptyLootEntry
static "reference"(arg0: $ResourceLocation$$Type): $TableReferenceLootEntry
 "getType"(): $ResourceLocation
static "sequence"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
static "tag"(arg0: string): $TagLootEntry
static "tag"(arg0: string, arg1: boolean): $TagLootEntry
 "getVanillaEntry"(): $LootPoolEntryContainer
 "isReference"(): boolean
static "alternative"(...arg0: ($LootEntry$$Type)[]): $CompositeLootEntry
 "isSimple"(): boolean
 "isTag"(): boolean
static "ep"(arg0: $EntityPredicate$$Type): $EntityPredicate
static "ofItem"(arg0: $Item$$Type): $ItemLootEntry
 "isItem"(): boolean
 "collectDebugInfo"(arg0: $DebugInfo$$Type): void
static "testItem"(arg0: string): $ItemLootEntry
 "getVanillaType"(): $LootPoolEntryType
 "isComposite"(): boolean
 "isAlternative"(): boolean
 "isSequence"(): boolean
 "isGroup"(): boolean
static "ofIngredient"(arg0: $Ingredient$$Type): $CompositeLootEntry
static "ofVanilla"(arg0: $LootPoolEntryContainer$$Type): $LootEntry
 "setName"(arg0: $Component$$Type): $SimpleLootEntry
 "addAttributes"(arg0: $Consumer$$Type<($AddAttributesFunction$Builder)>): $SimpleLootEntry
 "enchantRandomly"(): $SimpleLootEntry
 "enchantRandomly"(arg0: $HolderSet$$Type<($Enchantment)>): $SimpleLootEntry
 "applyEnchantmentBonus"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "applyEnchantmentBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: $NumberProvider$$Type): $SimpleLootEntry
 "simulateExplosionDecay"(): $SimpleLootEntry
 "enchant"(arg0: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
 "enchant"(arg0: boolean, arg1: $Consumer$$Type<($SetEnchantmentsFunction$Builder)>): $SimpleLootEntry
 "smelt"(): $SimpleLootEntry
 "damage"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "enchantWithLevels"(arg0: $NumberProvider$$Type): $SimpleLootEntry
 "addPotion"(arg0: $Potion$$Type): $SimpleLootEntry
 "setCustomData"(arg0: $CompoundTag$$Type): $SimpleLootEntry
 "limitCount"(arg0: $NumberProvider$$Type, arg1: $NumberProvider$$Type): $SimpleLootEntry
 "applyOreBonus"(arg0: $Holder$$Type<($Enchantment)>): $SimpleLootEntry
 "applyBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: integer): $SimpleLootEntry
 "addLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
 "replaceLore"(...arg0: ($Component$$Type)[]): $SimpleLootEntry
 "toggleTooltips"(arg0: $Map$$Type<(string), (boolean)>): $SimpleLootEntry
 "jsonFunction"(arg0: $JsonObject$$Type): $SimpleLootEntry
 "applyBinomialDistributionBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: float, arg2: integer): $SimpleLootEntry
 "matchLocation"(arg0: $BlockPos$$Type, arg1: $LocationPredicate$$Type): $LootEntry
 "matchLocation"(arg0: $LocationPredicate$$Type): $LootEntry
 "matchPlayerCustom"(arg0: $Predicate$$Type<($ServerPlayer)>): $LootEntry
 "matchAnyInventorySlot"(arg0: $ItemFilter$$Type): $LootEntry
 "matchAnyHotbarSlot"(arg0: $ItemFilter$$Type): $LootEntry
 "randomTableBonus"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "matchDirectAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDamageSource"(arg0: $DamageSourcePredicate$$Type): $LootEntry
 "matchEntityCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
 "matchCustomCondition"(arg0: $JsonObject$$Type): $LootEntry
 "blockEntity"(arg0: $Predicate$$Type<($BlockEntity)>): $LootEntry
 "luck"(arg0: $MinMaxBounds$Doubles$$Type): $LootEntry
 "survivesExplosion"(): $LootEntry
 "matchBlock"(arg0: $Block$$Type, arg1: $StatePropertiesPredicate$$Type): $LootEntry
 "matchBlock"(arg0: $Block$$Type): $LootEntry
 "matchTool"(arg0: $ItemPredicate$$Type): $LootEntry
 "matchPlayer"(arg0: $EntityPredicate$$Type): $LootEntry
 "randomChance"(arg0: $NumberProvider$$Type): $LootEntry
 "killedByPlayer"(): $LootEntry
 "matchTime"(arg0: long, arg1: integer, arg2: integer): $LootEntry
 "matchTime"(arg0: integer, arg1: integer): $LootEntry
 "matchMainHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchOffHand"(arg0: $ItemFilter$$Type): $LootEntry
 "matchHead"(arg0: $ItemFilter$$Type): $LootEntry
 "matchChest"(arg0: $ItemFilter$$Type): $LootEntry
 "matchLegs"(arg0: $ItemFilter$$Type): $LootEntry
 "matchFeet"(arg0: $ItemFilter$$Type): $LootEntry
 "matchEquip"(arg0: $EquipmentSlot$$Type, arg1: $ItemFilter$$Type): $LootEntry
 "matchWeather"(arg0: boolean, arg1: boolean): $LootEntry
 "matchBiome"(arg0: $HolderSet$$Type<($Biome)>): $LootEntry
 "matchDimension"(...arg0: ($ResourceLocation$$Type)[]): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>): $LootEntry
 "matchStructure"(arg0: $HolderSet$$Type<($Structure)>, arg1: boolean): $LootEntry
 "isLightLevel"(arg0: integer, arg1: integer): $LootEntry
 "matchEntity"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchAttacker"(arg0: $EntityPredicate$$Type): $LootEntry
 "matchDistance"(arg0: $DistancePredicate$$Type): $LootEntry
 "hasAnyStage"(...arg0: (string)[]): $LootEntry
 "matchAnyOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "matchAllOf"(...arg0: ($LootItemCondition$$Type)[]): $LootEntry
 "randomChanceWithEnchantment"(arg0: $Holder$$Type<($Enchantment)>, arg1: (float)[]): $LootEntry
 "matchDirectAttackerCustom"(arg0: $Predicate$$Type<($Entity)>): $LootEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleLootEntry$$Type = (($ItemStack$$Type));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleLootEntry_ = $SingleLootEntry$$Type;
}}
