declare module "com.chen1335.forbiddenAndArcanusJS.kubejs.recipe.clibanoCombustion.ClibanoRecipeJS" {
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$ClibanoFireType, $ClibanoFireType$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.clibano.ClibanoFireType"
import {$KubeRecipeFactory, $KubeRecipeFactory$$Type} from "dev.latvian.mods.kubejs.recipe.schema.KubeRecipeFactory"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$CookingBookCategory, $CookingBookCategory$$Type} from "net.minecraft.world.item.crafting.CookingBookCategory"
import {$RecipeComponentValueMap, $RecipeComponentValueMap$$Type} from "dev.latvian.mods.kubejs.recipe.component.RecipeComponentValueMap"
import {$KubeRecipe, $KubeRecipe$$Type} from "dev.latvian.mods.kubejs.recipe.KubeRecipe"
import {$RecipeTypeFunction, $RecipeTypeFunction$$Type} from "dev.latvian.mods.kubejs.recipe.RecipeTypeFunction"
import {$EnhancerDefinition, $EnhancerDefinition$$Type} from "com.stal111.forbidden_arcanus.common.item.enhancer.EnhancerDefinition"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$SourceLine, $SourceLine$$Type} from "dev.latvian.mods.kubejs.script.SourceLine"
import {$ResidueType, $ResidueType$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.clibano.residue.ResidueType"

export class $ClibanoRecipeJS extends $KubeRecipe {
 "newRecipe": boolean
static readonly "RECIPE_FACTORY": $KubeRecipeFactory
 "type": $RecipeTypeFunction
 "sourceLine": $SourceLine
 "originalJson": $JsonObject
 "removed": boolean
 "creationError": boolean
 "valueMap": $RecipeComponentValueMap
 "json": $JsonObject
static readonly "CHANGED_MARKER": StringJS
 "changed": boolean

constructor()

/**
 * Single input
 */
public "input"(ingredient: $Ingredient$$Type): $ClibanoRecipeJS
public "residue"(type: $Holder$$Type<($ResidueType)>, chance: double): $ClibanoRecipeJS
/**
 * two-input
 */
public "inputs"(first: $Ingredient$$Type, second: $Ingredient$$Type): $ClibanoRecipeJS
public "group"(group: StringJS): $KubeRecipe
public "experience"(experience: float): $ClibanoRecipeJS
public "cookingTime"(time: integer): $ClibanoRecipeJS
public "fireType"(fireType: $ClibanoFireType$$Type): $ClibanoRecipeJS
public "enhancer"(enhancer: $Holder$$Type<($EnhancerDefinition)>): $ClibanoRecipeJS
public "cookingBookCategory"(cookingBookCategory: $CookingBookCategory$$Type): $ClibanoRecipeJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClibanoRecipeJS$$Type = ($ClibanoRecipeJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClibanoRecipeJS_ = $ClibanoRecipeJS$$Type;
}}
declare module "com.chen1335.forbiddenAndArcanusJS.kubejs.recipe.ritual.RitualResults" {
import {$TransmuteInputResult, $TransmuteInputResult$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.ritual.result.TransmuteInputResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UpgradeTierResult, $UpgradeTierResult$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.ritual.result.UpgradeTierResult"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$CreateItemResult, $CreateItemResult$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.ritual.result.CreateItemResult"

export class $RitualResults {

constructor()

public static "ofCreateItemResult"(resultItemStack: $ItemStack$$Type): $CreateItemResult
public static "ofTransmuteInputResult"(result: $Holder$$Type<($Item)>): $TransmuteInputResult
public static "ofUpgradeTierResult"(tier: integer): $UpgradeTierResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualResults$$Type = ($RitualResults);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualResults_ = $RitualResults$$Type;
}}
declare module "com.chen1335.forbiddenAndArcanusJS.forbiddenArcanusFix.RitualRecipeSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$Ritual, $Ritual$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.ritual.Ritual"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $RitualRecipeSerializer implements $RecipeSerializer<(any)> {
static readonly "MAP_CODEC": $MapCodec<($Ritual)>

constructor()

public "codec"(): $MapCodec<($Ritual)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($Ritual)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualRecipeSerializer$$Type = ($RitualRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualRecipeSerializer_ = $RitualRecipeSerializer$$Type;
}}
declare module "com.chen1335.forbiddenAndArcanusJS.kubejs.recipe.ritual.RitualRecipeJS" {
import {$RecipeComponentValueMap, $RecipeComponentValueMap$$Type} from "dev.latvian.mods.kubejs.recipe.component.RecipeComponentValueMap"
import {$MagicCircleType, $MagicCircleType$$Type} from "com.stal111.forbidden_arcanus.common.block.entity.forge.circle.MagicCircleType"
import {$KubeRecipe, $KubeRecipe$$Type} from "dev.latvian.mods.kubejs.recipe.KubeRecipe"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeTypeFunction, $RecipeTypeFunction$$Type} from "dev.latvian.mods.kubejs.recipe.RecipeTypeFunction"
import {$EnhancerDefinition, $EnhancerDefinition$$Type} from "com.stal111.forbidden_arcanus.common.item.enhancer.EnhancerDefinition"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$KubeRecipeFactory, $KubeRecipeFactory$$Type} from "dev.latvian.mods.kubejs.recipe.schema.KubeRecipeFactory"
import {$SourceLine, $SourceLine$$Type} from "dev.latvian.mods.kubejs.script.SourceLine"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $RitualRecipeJS extends $KubeRecipe {
 "newRecipe": boolean
static readonly "RECIPE_FACTORY": $KubeRecipeFactory
 "type": $RecipeTypeFunction
 "sourceLine": $SourceLine
 "originalJson": $JsonObject
 "removed": boolean
 "creationError": boolean
 "valueMap": $RecipeComponentValueMap
 "json": $JsonObject
static readonly "CHANGED_MARKER": StringJS
 "changed": boolean

constructor()

/**
 * the duration of the recipe,optional
 */
public "duration"(duration: integer): $RitualRecipeJS
/**
 * tier require,optional,default tier 1
 */
public "tier"(tier: integer): $RitualRecipeJS
/**
 * Add one input and do not exceed 8 inputs
 */
public "addInput"(ingredient: $Ingredient$$Type, amount: integer): $RitualRecipeJS
/**
 * the main Ingredient
 */
public "mainIngredient"(ingredient: $Ingredient$$Type): $RitualRecipeJS
/**
 * essences require,optional
 */
public "essences"(aureal: integer, souls: integer, blood: integer, experience: integer): $RitualRecipeJS
public "enhancers"(enhancerDefinitions1: $Holder$$Type<($EnhancerDefinition)>, enhancerDefinitions2: $Holder$$Type<($EnhancerDefinition)>, enhancerDefinitions3: $Holder$$Type<($EnhancerDefinition)>, enhancerDefinitions4: $Holder$$Type<($EnhancerDefinition)>): $RitualRecipeJS
public "enhancers"(enhancerDefinitions1: $Holder$$Type<($EnhancerDefinition)>, enhancerDefinitions2: $Holder$$Type<($EnhancerDefinition)>): $RitualRecipeJS
public "enhancers"(enhancerDefinitions: $Holder$$Type<($EnhancerDefinition)>): $RitualRecipeJS
public "enhancers"(enhancerDefinitions1: $Holder$$Type<($EnhancerDefinition)>, enhancerDefinitions2: $Holder$$Type<($EnhancerDefinition)>, enhancerDefinitions3: $Holder$$Type<($EnhancerDefinition)>): $RitualRecipeJS
public "afterLoaded"(): void
/**
 * match tier exact,optional,default false
 */
public "matchTierExact"(exact: boolean): $RitualRecipeJS
/**
 * the magic circles,require if result is not CreateItemResult
 */
public "magicCircles"(magicCircleType: $Holder$$Type<($MagicCircleType)>): $RitualRecipeJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualRecipeJS$$Type = ($RitualRecipeJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualRecipeJS_ = $RitualRecipeJS$$Type;
}}
declare module "com.chen1335.forbiddenAndArcanusJS.forbiddenArcanusFix.RitualRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"

export class $RitualRecipeInput implements $RecipeInput {

constructor()

public "getItem"(index: integer): $ItemStack
public "size"(): integer
public "isEmpty"(): boolean
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "self"(): $RecipeInput
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "findAll"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RitualRecipeInput$$Type = ($RitualRecipeInput);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RitualRecipeInput_ = $RitualRecipeInput$$Type;
}}
