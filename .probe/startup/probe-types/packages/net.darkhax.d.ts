declare module "net.darkhax.enchdesc.common.api.ContextProvider" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ContextProvider {

 "enchdesc$getStack"(): $ItemStack
 "enchdesc$setStack"(arg0: $ItemStack$$Type): void
}

export namespace $ContextProvider {
const probejs$$marker: never
}
export class $ContextProvider$$Static implements $ContextProvider {


 "enchdesc$getStack"(): $ItemStack
 "enchdesc$setStack"(arg0: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextProvider$$Type = ($ContextProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextProvider_ = $ContextProvider$$Type;
}}
declare module "net.darkhax.bookshelf.common.mixin.access.block.AccessorBaseContainerBlockEntity" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $AccessorBaseContainerBlockEntity {

 "bookshelf$name"(arg0: $Component$$Type): void

(arg0: $Component): void
}

export namespace $AccessorBaseContainerBlockEntity {
const probejs$$marker: never
}
export class $AccessorBaseContainerBlockEntity$$Static implements $AccessorBaseContainerBlockEntity {


 "bookshelf$name"(arg0: $Component$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorBaseContainerBlockEntity$$Type = ((arg0: $Component) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorBaseContainerBlockEntity_ = $AccessorBaseContainerBlockEntity$$Type;
}}
declare module "net.darkhax.bookshelf.common.api.commands.args.SingletonArgumentInfo$Template" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext, $CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $SingletonArgumentInfo$Template<T extends $ArgumentType<(any)>> implements $ArgumentTypeInfo$Template<(T)> {


public "type"(): $ArgumentTypeInfo<(T), (any)>
public "instantiate"(arg0: $CommandBuildContext$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingletonArgumentInfo$Template$$Type<T> = ($SingletonArgumentInfo$Template<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingletonArgumentInfo$Template_<T> = $SingletonArgumentInfo$Template$$Type<(T)>;
}}
declare module "net.darkhax.bookshelf.common.api.commands.args.ArgumentSerializer" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext, $CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$ArgumentSerializer$ArgTemplate, $ArgumentSerializer$ArgTemplate$$Type} from "net.darkhax.bookshelf.common.api.commands.args.ArgumentSerializer$ArgTemplate"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $ArgumentSerializer<T extends $ArgumentType<(any)>, V> implements $ArgumentTypeInfo<(T), ($ArgumentSerializer$ArgTemplate<(T), (V)>)> {

constructor(arg0: $MapCodec$$Type<(V)>, arg1: $StreamCodec$$Type<($FriendlyByteBuf$$Type), (V)>, arg2: $BiFunction$$Type<($CommandBuildContext), (V), (T)>, arg3: $Function$$Type<(T), (V)>)

public "unpack"(arg0: $ArgumentType$$Type<(any)>): $ArgumentTypeInfo$Template<(any)>
public "serializeToNetwork"(arg0: $ArgumentSerializer$ArgTemplate$$Type<(T), (V)>, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $FriendlyByteBuf$$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template<(any)>
public "serializeToJson"(arg0: $ArgumentSerializer$ArgTemplate$$Type<(T), (V)>, arg1: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $JsonObject$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentSerializer$$Type<T, V> = ($ArgumentSerializer<(T), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArgumentSerializer_<T, V> = $ArgumentSerializer$$Type<(T), (V)>;
}}
declare module "net.darkhax.bookshelf.common.mixin.access.level.AccessorRecipeManager" {
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"

export interface $AccessorRecipeManager {

 "bookshelf$byTypeMap"(): $Multimap<($RecipeType<(any)>), ($RecipeHolder<(any)>)>

(): $Multimap$$Type<($RecipeType$$Type<(any)>), ($RecipeHolder$$Type<(any)>)>
}

export namespace $AccessorRecipeManager {
const probejs$$marker: never
}
export class $AccessorRecipeManager$$Static implements $AccessorRecipeManager {


 "bookshelf$byTypeMap"(): $Multimap<($RecipeType<(any)>), ($RecipeHolder<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorRecipeManager$$Type = (() => $Multimap$$Type<($RecipeType$$Type<(any)>), ($RecipeHolder$$Type<(any)>)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorRecipeManager_ = $AccessorRecipeManager$$Type;
}}
declare module "net.darkhax.bookshelf.common.mixin.access.entity.AccessorEntity" {
import {$HoverEvent, $HoverEvent$$Type} from "net.minecraft.network.chat.HoverEvent"

export interface $AccessorEntity {

 "bookshelf$createHoverEvent"(): $HoverEvent

(): $HoverEvent$$Type
}

export namespace $AccessorEntity {
const probejs$$marker: never
}
export class $AccessorEntity$$Static implements $AccessorEntity {


 "bookshelf$createHoverEvent"(): $HoverEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorEntity$$Type = (() => $HoverEvent$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorEntity_ = $AccessorEntity$$Type;
}}
declare module "net.darkhax.bookshelf.common.api.data.ISidedRecipeManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ISidedRecipeManager {

 "bookshelf$setLogicalClient"(): void
 "bookshelf$setLogicalServer"(): void
}

export namespace $ISidedRecipeManager {
const probejs$$marker: never
}
export class $ISidedRecipeManager$$Static implements $ISidedRecipeManager {


 "bookshelf$setLogicalClient"(): void
 "bookshelf$setLogicalServer"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISidedRecipeManager$$Type = ($ISidedRecipeManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISidedRecipeManager_ = $ISidedRecipeManager$$Type;
}}
declare module "net.darkhax.bookshelf.common.mixin.access.loot.AccessorLootPoolSingletonContainer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorLootPoolSingletonContainer {

 "bookshelf$weight"(): integer
 "bookshelf$quality"(): integer
}

export namespace $AccessorLootPoolSingletonContainer {
const probejs$$marker: never
}
export class $AccessorLootPoolSingletonContainer$$Static implements $AccessorLootPoolSingletonContainer {


 "bookshelf$weight"(): integer
 "bookshelf$quality"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorLootPoolSingletonContainer$$Type = ($AccessorLootPoolSingletonContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorLootPoolSingletonContainer_ = $AccessorLootPoolSingletonContainer$$Type;
}}
declare module "net.darkhax.bookshelf.common.mixin.access.loot.AccessorTagEntry" {
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $AccessorTagEntry {

 "bookshelf$tag"(): $TagKey<($Item)>
 "bookshelf$expand"(): boolean
}

export namespace $AccessorTagEntry {
const probejs$$marker: never
}
export class $AccessorTagEntry$$Static implements $AccessorTagEntry {


 "bookshelf$tag"(): $TagKey<($Item)>
 "bookshelf$expand"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorTagEntry$$Type = ($AccessorTagEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorTagEntry_ = $AccessorTagEntry$$Type;
}}
declare module "net.darkhax.bookshelf.common.mixin.access.loot.AccessorNestedLootTable" {
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"

export interface $AccessorNestedLootTable {

 "bookshelf$contents"(): $Either<($ResourceKey<($LootTable)>), ($LootTable)>

(): $Either$$Type<($ResourceKey$$Type<($LootTable$$Type)>), ($LootTable$$Type)>
}

export namespace $AccessorNestedLootTable {
const probejs$$marker: never
}
export class $AccessorNestedLootTable$$Static implements $AccessorNestedLootTable {


 "bookshelf$contents"(): $Either<($ResourceKey<($LootTable)>), ($LootTable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorNestedLootTable$$Type = (() => $Either$$Type<($ResourceKey$$Type<($LootTable$$Type)>), ($LootTable$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorNestedLootTable_ = $AccessorNestedLootTable$$Type;
}}
declare module "net.darkhax.bookshelf.common.api.commands.args.ArgumentSerializer$ArgTemplate" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext, $CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $ArgumentSerializer$ArgTemplate<T extends $ArgumentType<(any)>, V> implements $ArgumentTypeInfo$Template<(T)> {


public "type"(): $ArgumentTypeInfo<(T), (any)>
public "instantiate"(arg0: $CommandBuildContext$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArgumentSerializer$ArgTemplate$$Type<T, V> = ($ArgumentSerializer$ArgTemplate<(T), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArgumentSerializer$ArgTemplate_<T, V> = $ArgumentSerializer$ArgTemplate$$Type<(T), (V)>;
}}
declare module "net.darkhax.bookshelf.common.impl.data.criterion.trigger.AdvancementTrigger" {
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$AdvancementTrigger$Instance, $AdvancementTrigger$Instance$$Type} from "net.darkhax.bookshelf.common.impl.data.criterion.trigger.AdvancementTrigger$Instance"
import {$AdvancementHolder, $AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $AdvancementTrigger extends $SimpleCriterionTrigger<($AdvancementTrigger$Instance)> {
static readonly "TRIGGER": $AdvancementTrigger

constructor()

public "trigger"(arg0: $ServerPlayer$$Type, arg1: $AdvancementHolder$$Type): void
public "codec"(): $Codec<($AdvancementTrigger$Instance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementTrigger$$Type = ($AdvancementTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancementTrigger_ = $AdvancementTrigger$$Type;
}}
declare module "net.darkhax.bookshelf.common.mixin.access.client.gui.AccessorAbstractWidget" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $AccessorAbstractWidget {

}

export namespace $AccessorAbstractWidget {
function bookshelf$renderScrollingString(arg0: $GuiGraphics$$Type, arg1: $Font$$Type, arg2: $Component$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
const probejs$$marker: never
}
export class $AccessorAbstractWidget$$Static implements $AccessorAbstractWidget {


static "bookshelf$renderScrollingString"(arg0: $GuiGraphics$$Type, arg1: $Font$$Type, arg2: $Component$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorAbstractWidget$$Type = ($AccessorAbstractWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorAbstractWidget_ = $AccessorAbstractWidget$$Type;
}}
declare module "net.darkhax.bookshelf.common.mixin.access.particles.AccessSimpleParticleType" {
import {$SimpleParticleType, $SimpleParticleType$$Type} from "net.minecraft.core.particles.SimpleParticleType"

export interface $AccessSimpleParticleType {

}

export namespace $AccessSimpleParticleType {
function init(arg0: boolean): $SimpleParticleType
const probejs$$marker: never
}
export class $AccessSimpleParticleType$$Static implements $AccessSimpleParticleType {


static "init"(arg0: boolean): $SimpleParticleType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessSimpleParticleType$$Type = ($AccessSimpleParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessSimpleParticleType_ = $AccessSimpleParticleType$$Type;
}}
declare module "net.darkhax.bookshelf.common.mixin.access.block.AccessorBannerBlockEntity" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $AccessorBannerBlockEntity {

 "setName"(arg0: $Component$$Type): void

(arg0: $Component): void
set "name"(value: $Component$$Type)
}

export namespace $AccessorBannerBlockEntity {
const probejs$$marker: never
}
export class $AccessorBannerBlockEntity$$Static implements $AccessorBannerBlockEntity {


 "setName"(arg0: $Component$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorBannerBlockEntity$$Type = ((arg0: $Component) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorBannerBlockEntity_ = $AccessorBannerBlockEntity$$Type;
}}
declare module "net.darkhax.bookshelf.common.mixin.access.loot.AccessorLootPool" {
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$List, $List$$Type} from "java.util.List"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"

export interface $AccessorLootPool {

 "functions"(): $List<($LootItemFunction)>
 "bookshelf$entries"(): $List<($LootPoolEntryContainer)>
 "bookshelf$setEntries"(arg0: $List$$Type<($LootPoolEntryContainer$$Type)>): void
 "bookshelf$conditions"(): $List<($LootItemCondition)>
 "bookshelf$rolls"(): $NumberProvider
 "bookshelf$bonusRolls"(): $NumberProvider
}

export namespace $AccessorLootPool {
const probejs$$marker: never
}
export class $AccessorLootPool$$Static implements $AccessorLootPool {


 "functions"(): $List<($LootItemFunction)>
 "bookshelf$entries"(): $List<($LootPoolEntryContainer)>
 "bookshelf$setEntries"(arg0: $List$$Type<($LootPoolEntryContainer$$Type)>): void
 "bookshelf$conditions"(): $List<($LootItemCondition)>
 "bookshelf$rolls"(): $NumberProvider
 "bookshelf$bonusRolls"(): $NumberProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorLootPool$$Type = ($AccessorLootPool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorLootPool_ = $AccessorLootPool$$Type;
}}
declare module "net.darkhax.bookshelf.common.mixin.access.loot.AccessorCompositeEntryBase" {
import {$LootPoolEntryContainer, $LootPoolEntryContainer$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer"
import {$List, $List$$Type} from "java.util.List"

export interface $AccessorCompositeEntryBase {

 "bookshelf$children"(): $List<($LootPoolEntryContainer)>

(): $List$$Type<($LootPoolEntryContainer$$Type)>
}

export namespace $AccessorCompositeEntryBase {
const probejs$$marker: never
}
export class $AccessorCompositeEntryBase$$Static implements $AccessorCompositeEntryBase {


 "bookshelf$children"(): $List<($LootPoolEntryContainer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorCompositeEntryBase$$Type = (() => $List$$Type<($LootPoolEntryContainer$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorCompositeEntryBase_ = $AccessorCompositeEntryBase$$Type;
}}
declare module "net.darkhax.bookshelf.common.impl.data.loot.modifiers.ILootPoolHooks" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILootPoolHooks {

 "bookshelf$setHash"(arg0: integer): void
 "bookshelf$getHash"(): integer
 "bookshelf$matches"(arg0: integer): boolean
}

export namespace $ILootPoolHooks {
const probejs$$marker: never
}
export class $ILootPoolHooks$$Static implements $ILootPoolHooks {


 "bookshelf$setHash"(arg0: integer): void
 "bookshelf$getHash"(): integer
 "bookshelf$matches"(arg0: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILootPoolHooks$$Type = ($ILootPoolHooks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILootPoolHooks_ = $ILootPoolHooks$$Type;
}}
declare module "net.darkhax.bookshelf.common.mixin.access.block.AccessorCropBlock" {
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"

export interface $AccessorCropBlock {

 "bookshelf$getSeed"(): $ItemLike

(): $ItemLike$$Type
}

export namespace $AccessorCropBlock {
const probejs$$marker: never
}
export class $AccessorCropBlock$$Static implements $AccessorCropBlock {


 "bookshelf$getSeed"(): $ItemLike
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorCropBlock$$Type = (() => $ItemLike$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorCropBlock_ = $AccessorCropBlock$$Type;
}}
declare module "net.darkhax.bookshelf.common.impl.data.criterion.trigger.AdvancementTrigger$Instance" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Set, $Set$$Type} from "java.util.Set"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AdvancementTrigger$Instance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, advancementIds: $Set$$Type<($ResourceLocation$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "player"(): $Optional<($ContextAwarePredicate)>
public "advancementIds"(): $Set<($ResourceLocation)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementTrigger$Instance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "advancementIds"?: $Set$$Type<($ResourceLocation$$Type)>}) | ([player?: ($ContextAwarePredicate$$Type)?, advancementIds?: $Set$$Type<($ResourceLocation$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancementTrigger$Instance_ = $AdvancementTrigger$Instance$$Type;
}}
declare module "net.darkhax.bookshelf.common.mixin.access.loot.AccessorLootItem" {
import {$LootItem, $LootItem$$Type} from "net.minecraft.world.level.storage.loot.entries.LootItem"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$List, $List$$Type} from "java.util.List"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LootItemCondition, $LootItemCondition$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $AccessorLootItem {

 "bookshelf$item"(): $Holder<($Item)>

(): $Holder$$Type<($Item$$Type)>
}

export namespace $AccessorLootItem {
function bookshelf$create(arg0: $Holder$$Type<($Item)>, arg1: integer, arg2: integer, arg3: $List$$Type<($LootItemCondition$$Type)>, arg4: $List$$Type<($LootItemFunction$$Type)>): $LootItem
const probejs$$marker: never
}
export class $AccessorLootItem$$Static implements $AccessorLootItem {


 "bookshelf$item"(): $Holder<($Item)>
static "bookshelf$create"(arg0: $Holder$$Type<($Item)>, arg1: integer, arg2: integer, arg3: $List$$Type<($LootItemCondition$$Type)>, arg4: $List$$Type<($LootItemFunction$$Type)>): $LootItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorLootItem$$Type = (() => $Holder$$Type<($Item$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorLootItem_ = $AccessorLootItem$$Type;
}}
declare module "net.darkhax.bookshelf.common.mixin.access.client.AccessorFontManager" {
import {$FontSet, $FontSet$$Type} from "net.minecraft.client.gui.font.FontSet"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"

export interface $AccessorFontManager {

 "bookshelf$getFonts"(): $Map<($ResourceLocation), ($FontSet)>

(): $Map$$Type<($ResourceLocation$$Type), ($FontSet$$Type)>
}

export namespace $AccessorFontManager {
const probejs$$marker: never
}
export class $AccessorFontManager$$Static implements $AccessorFontManager {


 "bookshelf$getFonts"(): $Map<($ResourceLocation), ($FontSet)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorFontManager$$Type = (() => $Map$$Type<($ResourceLocation$$Type), ($FontSet$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorFontManager_ = $AccessorFontManager$$Type;
}}
declare module "net.darkhax.bookshelf.common.mixin.access.loot.AccessorLootTable" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LootItemFunction, $LootItemFunction$$Type} from "net.minecraft.world.level.storage.loot.functions.LootItemFunction"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$LootPool, $LootPool$$Type} from "net.minecraft.world.level.storage.loot.LootPool"

export interface $AccessorLootTable {

 "bookshelf$pools"(): $List<($LootPool)>
 "bookshelf$functions"(): $List<($LootItemFunction)>
 "bookshelf$randomSequence"(): $Optional<($ResourceLocation)>
}

export namespace $AccessorLootTable {
const probejs$$marker: never
}
export class $AccessorLootTable$$Static implements $AccessorLootTable {


 "bookshelf$pools"(): $List<($LootPool)>
 "bookshelf$functions"(): $List<($LootItemFunction)>
 "bookshelf$randomSequence"(): $Optional<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorLootTable$$Type = ($AccessorLootTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorLootTable_ = $AccessorLootTable$$Type;
}}
declare module "net.darkhax.bookshelf.common.mixin.access.client.AccessorMinecraft" {
import {$FontManager, $FontManager$$Type} from "net.minecraft.client.gui.font.FontManager"

export interface $AccessorMinecraft {

 "bookshelf$getFontManager"(): $FontManager

(): $FontManager$$Type
}

export namespace $AccessorMinecraft {
const probejs$$marker: never
}
export class $AccessorMinecraft$$Static implements $AccessorMinecraft {


 "bookshelf$getFontManager"(): $FontManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorMinecraft$$Type = (() => $FontManager$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorMinecraft_ = $AccessorMinecraft$$Type;
}}
declare module "net.darkhax.bookshelf.common.api.commands.args.SingletonArgumentInfo" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$SingletonArgumentInfo$Template, $SingletonArgumentInfo$Template$$Type} from "net.darkhax.bookshelf.common.api.commands.args.SingletonArgumentInfo$Template"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $SingletonArgumentInfo<T extends $ArgumentType<(any)>> implements $ArgumentTypeInfo<(T), ($SingletonArgumentInfo$Template<(T)>)> {


public static "of"<T extends $ArgumentType<(any)>>(arg0: $Supplier$$Type<(T)>): $SingletonArgumentInfo<(T)>
public "unpack"(arg0: T): $SingletonArgumentInfo$Template<(T)>
public "serializeToNetwork"(arg0: $SingletonArgumentInfo$Template$$Type<(T)>, arg1: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $FriendlyByteBuf$$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template<(any)>
public "serializeToJson"(arg0: $SingletonArgumentInfo$Template$$Type<(T)>, arg1: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $JsonObject$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingletonArgumentInfo$$Type<T> = ($SingletonArgumentInfo<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingletonArgumentInfo_<T> = $SingletonArgumentInfo$$Type<(T)>;
}}
