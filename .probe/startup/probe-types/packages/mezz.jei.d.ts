declare module "mezz.jei.api.gui.ingredient.IRecipeSlotRichTooltipCallback" {
import {$IRecipeSlotView, $IRecipeSlotView$$Type} from "mezz.jei.api.gui.ingredient.IRecipeSlotView"
import {$ITooltipBuilder, $ITooltipBuilder$$Type} from "mezz.jei.api.gui.builder.ITooltipBuilder"

export interface $IRecipeSlotRichTooltipCallback {

 "onRichTooltip"(arg0: $IRecipeSlotView$$Type, arg1: $ITooltipBuilder$$Type): void

(arg0: $IRecipeSlotView, arg1: $ITooltipBuilder): void
}

export namespace $IRecipeSlotRichTooltipCallback {
const probejs$$marker: never
}
export class $IRecipeSlotRichTooltipCallback$$Static implements $IRecipeSlotRichTooltipCallback {


 "onRichTooltip"(arg0: $IRecipeSlotView$$Type, arg1: $ITooltipBuilder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotRichTooltipCallback$$Type = ((arg0: $IRecipeSlotView, arg1: $ITooltipBuilder) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotRichTooltipCallback_ = $IRecipeSlotRichTooltipCallback$$Type;
}}
declare module "mezz.jei.api.gui.builder.IIngredientConsumer" {
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IIngredientType, $IIngredientType$$Type} from "mezz.jei.api.ingredients.IIngredientType"
import {$ITypedIngredient, $ITypedIngredient$$Type} from "mezz.jei.api.ingredients.ITypedIngredient"

export interface $IIngredientConsumer {

 "addItemStack"(arg0: $ItemStack$$Type): $IIngredientConsumer
 "addIngredients"(arg0: $Ingredient$$Type): $IIngredientConsumer
 "addIngredients"<I>(arg0: $IIngredientType$$Type<(I)>, arg1: $List$$Type<(I)>): $IIngredientConsumer
 "addIngredient"<I>(arg0: $IIngredientType$$Type<(I)>, arg1: I): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$$Type, arg1: long, arg2: $DataComponentPatch$$Type): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$$Type): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$$Type, arg1: long): $IIngredientConsumer
 "addItemStacks"(arg0: $List$$Type<($ItemStack$$Type)>): $IIngredientConsumer
 "addItemLike"(arg0: $ItemLike$$Type): $IIngredientConsumer
 "addIngredientsUnsafe"(arg0: $List$$Type<(any)>): $IIngredientConsumer
 "addTypedIngredient"<I>(arg0: $ITypedIngredient$$Type<(I)>): $IIngredientConsumer
 "addTypedIngredients"(arg0: $List$$Type<($ITypedIngredient$$Type<(any)>)>): $IIngredientConsumer
 "addOptionalTypedIngredients"(arg0: $List$$Type<($Optional$$Type<($ITypedIngredient$$Type<(any)>)>)>): $IIngredientConsumer
}

export namespace $IIngredientConsumer {
const probejs$$marker: never
}
export class $IIngredientConsumer$$Static implements $IIngredientConsumer {


 "addItemStack"(arg0: $ItemStack$$Type): $IIngredientConsumer
 "addIngredients"(arg0: $Ingredient$$Type): $IIngredientConsumer
 "addIngredients"<I>(arg0: $IIngredientType$$Type<(I)>, arg1: $List$$Type<(I)>): $IIngredientConsumer
 "addIngredient"<I>(arg0: $IIngredientType$$Type<(I)>, arg1: I): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$$Type, arg1: long, arg2: $DataComponentPatch$$Type): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$$Type): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$$Type, arg1: long): $IIngredientConsumer
 "addItemStacks"(arg0: $List$$Type<($ItemStack$$Type)>): $IIngredientConsumer
 "addItemLike"(arg0: $ItemLike$$Type): $IIngredientConsumer
 "addIngredientsUnsafe"(arg0: $List$$Type<(any)>): $IIngredientConsumer
 "addTypedIngredient"<I>(arg0: $ITypedIngredient$$Type<(I)>): $IIngredientConsumer
 "addTypedIngredients"(arg0: $List$$Type<($ITypedIngredient$$Type<(any)>)>): $IIngredientConsumer
 "addOptionalTypedIngredients"(arg0: $List$$Type<($Optional$$Type<($ITypedIngredient$$Type<(any)>)>)>): $IIngredientConsumer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientConsumer$$Type = ($IIngredientConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientConsumer_ = $IIngredientConsumer$$Type;
}}
declare module "mezz.jei.api.gui.builder.IIngredientAcceptor" {
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$IIngredientType, $IIngredientType$$Type} from "mezz.jei.api.ingredients.IIngredientType"
import {$ITypedIngredient, $ITypedIngredient$$Type} from "mezz.jei.api.ingredients.ITypedIngredient"
import {$IIngredientConsumer, $IIngredientConsumer$$Type} from "mezz.jei.api.gui.builder.IIngredientConsumer"

export interface $IIngredientAcceptor<THIS extends $IIngredientAcceptor<(THIS)>> extends $IIngredientConsumer {

 "addItemStack"(arg0: $ItemStack$$Type): THIS
 "addIngredients"(arg0: $Ingredient$$Type): $IIngredientConsumer
 "addIngredients"(arg0: $IIngredientType$$Type<(any)>, arg1: $List$$Type<(any)>): $IIngredientConsumer
 "addIngredient"(arg0: $IIngredientType$$Type<(any)>, arg1: any): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$$Type, arg1: long): THIS
 "addFluidStack"(arg0: $Fluid$$Type, arg1: long, arg2: $DataComponentPatch$$Type): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$$Type): $IIngredientConsumer
 "addItemStacks"(arg0: $List$$Type<($ItemStack$$Type)>): THIS
 "addItemLike"(arg0: $ItemLike$$Type): $IIngredientConsumer
 "addIngredientsUnsafe"(arg0: $List$$Type<(any)>): $IIngredientConsumer
 "addTypedIngredient"(arg0: $ITypedIngredient$$Type<(any)>): $IIngredientConsumer
 "addTypedIngredients"(arg0: $List$$Type<(any)>): $IIngredientConsumer
 "addOptionalTypedIngredients"(arg0: $List$$Type<($Optional$$Type<($ITypedIngredient$$Type<(any)>)>)>): THIS
}

export namespace $IIngredientAcceptor {
const probejs$$marker: never
}
export class $IIngredientAcceptor$$Static<THIS extends $IIngredientAcceptor<(THIS)>> implements $IIngredientAcceptor {


 "addItemStack"(arg0: $ItemStack$$Type): THIS
 "addIngredients"(arg0: $Ingredient$$Type): $IIngredientConsumer
 "addIngredients"(arg0: $IIngredientType$$Type<(any)>, arg1: $List$$Type<(any)>): $IIngredientConsumer
 "addIngredient"(arg0: $IIngredientType$$Type<(any)>, arg1: any): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$$Type, arg1: long): THIS
 "addFluidStack"(arg0: $Fluid$$Type, arg1: long, arg2: $DataComponentPatch$$Type): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$$Type): $IIngredientConsumer
 "addItemStacks"(arg0: $List$$Type<($ItemStack$$Type)>): THIS
 "addItemLike"(arg0: $ItemLike$$Type): $IIngredientConsumer
 "addIngredientsUnsafe"(arg0: $List$$Type<(any)>): $IIngredientConsumer
 "addTypedIngredient"(arg0: $ITypedIngredient$$Type<(any)>): $IIngredientConsumer
 "addTypedIngredients"(arg0: $List$$Type<(any)>): $IIngredientConsumer
 "addOptionalTypedIngredients"(arg0: $List$$Type<($Optional$$Type<($ITypedIngredient$$Type<(any)>)>)>): THIS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientAcceptor$$Type<THIS> = ($IIngredientAcceptor<(THIS)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientAcceptor_<THIS> = $IIngredientAcceptor$$Type<(THIS)>;
}}
declare module "mezz.jei.api.recipe.RecipeIngredientRole" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $RecipeIngredientRole extends $Enum<($RecipeIngredientRole)> {
static readonly "INPUT": $RecipeIngredientRole
static readonly "RENDER_ONLY": $RecipeIngredientRole
static readonly "OUTPUT": $RecipeIngredientRole
static readonly "CATALYST": $RecipeIngredientRole


public static "values"(): ($RecipeIngredientRole)[]
public static "valueOf"(arg0: string): $RecipeIngredientRole
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeIngredientRole$$Type = (("input") | ("output") | ("catalyst") | ("render_only"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeIngredientRole_ = $RecipeIngredientRole$$Type;
}}
declare module "mezz.jei.library.plugins.vanilla.crafting.JeiShapedRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CraftingRecipe, $CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $JeiShapedRecipe implements $CraftingRecipe {

constructor(arg0: string, arg1: $CraftingBookCategory$$Type, arg2: $ShapedRecipePattern$$Type, arg3: $List$$Type<($ItemStack$$Type)>)

public "getWidth"(): integer
public "getHeight"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "category"(): $CraftingBookCategory
public "getIngredients"(): $NonNullList<($Ingredient)>
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "getGroup"(): string
public "showNotification"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "isIncomplete"(): boolean
public "getType"(): $RecipeType<(any)>
public "isSpecial"(): boolean
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getToastSymbol"(): $ItemStack
get "width"(): integer
get "height"(): integer
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "group"(): string
get "incomplete"(): boolean
get "type"(): $RecipeType<(any)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JeiShapedRecipe$$Type = ($JeiShapedRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JeiShapedRecipe_ = $JeiShapedRecipe$$Type;
}}
declare module "mezz.jei.api.ingredients.IIngredientType" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Class, $Class$$Type} from "java.lang.Class"

export interface $IIngredientType<T> {

 "getUid"(): string
 "getIngredientClass"(): $Class<(T)>
 "getCastIngredient"(arg0: any): T
 "castIngredient"(arg0: any): $Optional<(T)>

(): $Class$$Type<(T)>
get "uid"(): string
get "ingredientClass"(): $Class<(T)>
}

export namespace $IIngredientType {
const probejs$$marker: never
}
export class $IIngredientType$$Static<T> implements $IIngredientType {


 "getUid"(): string
 "getIngredientClass"(): $Class<(T)>
 "getCastIngredient"(arg0: any): T
 "castIngredient"(arg0: any): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientType$$Type<T> = (() => $Class$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientType_<T> = $IIngredientType$$Type<(T)>;
}}
declare module "mezz.jei.api.recipe.IFocus" {
import {$RecipeIngredientRole, $RecipeIngredientRole$$Type} from "mezz.jei.api.recipe.RecipeIngredientRole"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IIngredientType, $IIngredientType$$Type} from "mezz.jei.api.ingredients.IIngredientType"
import {$ITypedIngredient, $ITypedIngredient$$Type} from "mezz.jei.api.ingredients.ITypedIngredient"

export interface $IFocus<V> {

 "checkedCast"<T>(arg0: $IIngredientType$$Type<(T)>): $Optional<($IFocus<(T)>)>
 "getTypedValue"(): $ITypedIngredient<(V)>
 "getRole"(): $RecipeIngredientRole
get "typedValue"(): $ITypedIngredient<(V)>
get "role"(): $RecipeIngredientRole
}

export namespace $IFocus {
const probejs$$marker: never
}
export class $IFocus$$Static<V> implements $IFocus {


 "checkedCast"<T>(arg0: $IIngredientType$$Type<(T)>): $Optional<($IFocus<(T)>)>
 "getTypedValue"(): $ITypedIngredient<(V)>
 "getRole"(): $RecipeIngredientRole
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFocus$$Type<V> = ($IFocus<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFocus_<V> = $IFocus$$Type<(V)>;
}}
declare module "mezz.jei.api.ingredients.IIngredientRenderer" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ITooltipBuilder, $ITooltipBuilder$$Type} from "mezz.jei.api.gui.builder.ITooltipBuilder"
import {$BatchRenderElement, $BatchRenderElement$$Type} from "mezz.jei.api.ingredients.rendering.BatchRenderElement"
import {$List, $List$$Type} from "java.util.List"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export interface $IIngredientRenderer<T> {

 "getWidth"(): integer
 "getHeight"(): integer
 "getTooltip"(arg0: T, arg1: $TooltipFlag$$Type): $List<($Component)>
 "getTooltip"(arg0: $ITooltipBuilder$$Type, arg1: T, arg2: $TooltipFlag$$Type): void
 "render"(arg0: $GuiGraphics$$Type, arg1: T): void
 "render"(arg0: $GuiGraphics$$Type, arg1: T, arg2: integer, arg3: integer): void
 "getFontRenderer"(arg0: $Minecraft$$Type, arg1: T): $Font
 "renderBatch"(arg0: $GuiGraphics$$Type, arg1: $List$$Type<($BatchRenderElement$$Type<(T)>)>): void
get "width"(): integer
get "height"(): integer
}

export namespace $IIngredientRenderer {
const probejs$$marker: never
}
export class $IIngredientRenderer$$Static<T> implements $IIngredientRenderer {


 "getWidth"(): integer
 "getHeight"(): integer
 "getTooltip"(arg0: T, arg1: $TooltipFlag$$Type): $List<($Component)>
 "getTooltip"(arg0: $ITooltipBuilder$$Type, arg1: T, arg2: $TooltipFlag$$Type): void
 "render"(arg0: $GuiGraphics$$Type, arg1: T): void
 "render"(arg0: $GuiGraphics$$Type, arg1: T, arg2: integer, arg3: integer): void
 "getFontRenderer"(arg0: $Minecraft$$Type, arg1: T): $Font
 "renderBatch"(arg0: $GuiGraphics$$Type, arg1: $List$$Type<($BatchRenderElement$$Type<(T)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientRenderer$$Type<T> = ($IIngredientRenderer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientRenderer_<T> = $IIngredientRenderer$$Type<(T)>;
}}
declare module "mezz.jei.api.gui.widgets.ISlottedWidgetFactory" {
import {$List, $List$$Type} from "java.util.List"
import {$IRecipeExtrasBuilder, $IRecipeExtrasBuilder$$Type} from "mezz.jei.api.gui.widgets.IRecipeExtrasBuilder"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$$Type} from "mezz.jei.api.gui.ingredient.IRecipeSlotDrawable"

/**
 * 
 * @deprecated
 */
export interface $ISlottedWidgetFactory<R> {

/**
 * 
 * @deprecated
 */
 "createWidgetForSlots"(arg0: $IRecipeExtrasBuilder$$Type, arg1: R, arg2: $List$$Type<($IRecipeSlotDrawable$$Type)>): void

(arg0: $IRecipeExtrasBuilder, arg1: R, arg2: $List<($IRecipeSlotDrawable)>): void
}

export namespace $ISlottedWidgetFactory {
const probejs$$marker: never
}
export class $ISlottedWidgetFactory$$Static<R> implements $ISlottedWidgetFactory {


/**
 * 
 * @deprecated
 */
 "createWidgetForSlots"(arg0: $IRecipeExtrasBuilder$$Type, arg1: R, arg2: $List$$Type<($IRecipeSlotDrawable$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISlottedWidgetFactory$$Type<R> = ((arg0: $IRecipeExtrasBuilder, arg1: R, arg2: $List<($IRecipeSlotDrawable)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISlottedWidgetFactory_<R> = $ISlottedWidgetFactory$$Type<(R)>;
}}
declare module "mezz.jei.library.plugins.vanilla.crafting.JeiShapedRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$JeiShapedRecipe, $JeiShapedRecipe$$Type} from "mezz.jei.library.plugins.vanilla.crafting.JeiShapedRecipe"

export class $JeiShapedRecipe$Serializer implements $RecipeSerializer<($JeiShapedRecipe)> {
static readonly "CODEC": $MapCodec<($JeiShapedRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($JeiShapedRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($JeiShapedRecipe)>
public "codec"(): $MapCodec<($JeiShapedRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JeiShapedRecipe$Serializer$$Type = ($JeiShapedRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JeiShapedRecipe$Serializer_ = $JeiShapedRecipe$Serializer$$Type;
}}
declare module "mezz.jei.api.gui.widgets.IRecipeExtrasBuilder" {
import {$FormattedText, $FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$ISlottedRecipeWidget, $ISlottedRecipeWidget$$Type} from "mezz.jei.api.gui.widgets.ISlottedRecipeWidget"
import {$List, $List$$Type} from "java.util.List"
import {$IJeiGuiEventListener, $IJeiGuiEventListener$$Type} from "mezz.jei.api.gui.inputs.IJeiGuiEventListener"
import {$IDrawable, $IDrawable$$Type} from "mezz.jei.api.gui.drawable.IDrawable"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$$Type} from "mezz.jei.api.gui.ingredient.IRecipeSlotDrawable"
import {$IRecipeSlotDrawablesView, $IRecipeSlotDrawablesView$$Type} from "mezz.jei.api.gui.ingredient.IRecipeSlotDrawablesView"
import {$IRecipeWidget, $IRecipeWidget$$Type} from "mezz.jei.api.gui.widgets.IRecipeWidget"
import {$IScrollBoxWidget, $IScrollBoxWidget$$Type} from "mezz.jei.api.gui.widgets.IScrollBoxWidget"
import {$IPlaceable, $IPlaceable$$Type} from "mezz.jei.api.gui.placement.IPlaceable"
import {$ITextWidget, $ITextWidget$$Type} from "mezz.jei.api.gui.widgets.ITextWidget"
import {$IScrollGridWidget, $IScrollGridWidget$$Type} from "mezz.jei.api.gui.widgets.IScrollGridWidget"
import {$IJeiInputHandler, $IJeiInputHandler$$Type} from "mezz.jei.api.gui.inputs.IJeiInputHandler"

export interface $IRecipeExtrasBuilder {

 "addWidget"(arg0: $IRecipeWidget$$Type): void
 "addText"(arg0: $FormattedText$$Type, arg1: integer, arg2: integer): $ITextWidget
/**
 * 
 * @deprecated
 */
 "addText"(arg0: $List$$Type<($FormattedText$$Type)>, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $ITextWidget
 "addText"(arg0: $List$$Type<($FormattedText$$Type)>, arg1: integer, arg2: integer): $ITextWidget
/**
 * 
 * @deprecated
 */
 "addText"(arg0: $FormattedText$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $ITextWidget
 "getRecipeSlots"(): $IRecipeSlotDrawablesView
/**
 * 
 * @deprecated
 */
 "addRecipeArrow"(arg0: integer, arg1: integer): void
 "addRecipeArrow"(): $IPlaceable<(any)>
 "addDrawable"(arg0: $IDrawable$$Type, arg1: integer, arg2: integer): void
 "addDrawable"(arg0: $IDrawable$$Type): $IPlaceable<(any)>
 "addSlottedWidget"(arg0: $ISlottedRecipeWidget$$Type, arg1: $List$$Type<($IRecipeSlotDrawable$$Type)>): void
 "addGuiEventListener"(arg0: $IJeiGuiEventListener$$Type): void
 "addScrollGridWidget"(arg0: $List$$Type<($IRecipeSlotDrawable$$Type)>, arg1: integer, arg2: integer): $IScrollGridWidget
 "addRecipePlusSign"(): $IPlaceable<(any)>
/**
 * 
 * @deprecated
 */
 "addRecipePlusSign"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "addAnimatedRecipeArrow"(arg0: integer, arg1: integer, arg2: integer): void
 "addAnimatedRecipeArrow"(arg0: integer): $IPlaceable<(any)>
 "addAnimatedRecipeFlame"(arg0: integer): $IPlaceable<(any)>
/**
 * 
 * @deprecated
 */
 "addAnimatedRecipeFlame"(arg0: integer, arg1: integer, arg2: integer): void
 "addInputHandler"(arg0: $IJeiInputHandler$$Type): void
 "addScrollBoxWidget"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $IScrollBoxWidget
get "recipeSlots"(): $IRecipeSlotDrawablesView
}

export namespace $IRecipeExtrasBuilder {
const probejs$$marker: never
}
export class $IRecipeExtrasBuilder$$Static implements $IRecipeExtrasBuilder {


 "addWidget"(arg0: $IRecipeWidget$$Type): void
 "addText"(arg0: $FormattedText$$Type, arg1: integer, arg2: integer): $ITextWidget
/**
 * 
 * @deprecated
 */
 "addText"(arg0: $List$$Type<($FormattedText$$Type)>, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $ITextWidget
 "addText"(arg0: $List$$Type<($FormattedText$$Type)>, arg1: integer, arg2: integer): $ITextWidget
/**
 * 
 * @deprecated
 */
 "addText"(arg0: $FormattedText$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $ITextWidget
 "getRecipeSlots"(): $IRecipeSlotDrawablesView
/**
 * 
 * @deprecated
 */
 "addRecipeArrow"(arg0: integer, arg1: integer): void
 "addRecipeArrow"(): $IPlaceable<(any)>
 "addDrawable"(arg0: $IDrawable$$Type, arg1: integer, arg2: integer): void
 "addDrawable"(arg0: $IDrawable$$Type): $IPlaceable<(any)>
 "addSlottedWidget"(arg0: $ISlottedRecipeWidget$$Type, arg1: $List$$Type<($IRecipeSlotDrawable$$Type)>): void
 "addGuiEventListener"(arg0: $IJeiGuiEventListener$$Type): void
 "addScrollGridWidget"(arg0: $List$$Type<($IRecipeSlotDrawable$$Type)>, arg1: integer, arg2: integer): $IScrollGridWidget
 "addRecipePlusSign"(): $IPlaceable<(any)>
/**
 * 
 * @deprecated
 */
 "addRecipePlusSign"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "addAnimatedRecipeArrow"(arg0: integer, arg1: integer, arg2: integer): void
 "addAnimatedRecipeArrow"(arg0: integer): $IPlaceable<(any)>
 "addAnimatedRecipeFlame"(arg0: integer): $IPlaceable<(any)>
/**
 * 
 * @deprecated
 */
 "addAnimatedRecipeFlame"(arg0: integer, arg1: integer, arg2: integer): void
 "addInputHandler"(arg0: $IJeiInputHandler$$Type): void
 "addScrollBoxWidget"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $IScrollBoxWidget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeExtrasBuilder$$Type = ($IRecipeExtrasBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeExtrasBuilder_ = $IRecipeExtrasBuilder$$Type;
}}
declare module "mezz.jei.api.gui.ingredient.IRecipeSlotTooltipCallback" {
import {$IRecipeSlotView, $IRecipeSlotView$$Type} from "mezz.jei.api.gui.ingredient.IRecipeSlotView"
import {$ITooltipBuilder, $ITooltipBuilder$$Type} from "mezz.jei.api.gui.builder.ITooltipBuilder"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

/**
 * 
 * @deprecated
 */
export interface $IRecipeSlotTooltipCallback {

/**
 * 
 * @deprecated
 */
 "onRichTooltip"(arg0: $IRecipeSlotView$$Type, arg1: $ITooltipBuilder$$Type): void
/**
 * 
 * @deprecated
 */
 "onTooltip"(arg0: $IRecipeSlotView$$Type, arg1: $List$$Type<($Component$$Type)>): void

(arg0: $IRecipeSlotView, arg1: $List<($Component)>): void
}

export namespace $IRecipeSlotTooltipCallback {
const probejs$$marker: never
}
export class $IRecipeSlotTooltipCallback$$Static implements $IRecipeSlotTooltipCallback {


/**
 * 
 * @deprecated
 */
 "onRichTooltip"(arg0: $IRecipeSlotView$$Type, arg1: $ITooltipBuilder$$Type): void
/**
 * 
 * @deprecated
 */
 "onTooltip"(arg0: $IRecipeSlotView$$Type, arg1: $List$$Type<($Component$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotTooltipCallback$$Type = ((arg0: $IRecipeSlotView, arg1: $List<($Component)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotTooltipCallback_ = $IRecipeSlotTooltipCallback$$Type;
}}
declare module "mezz.jei.api.gui.placement.IPlaceable" {
import {$HorizontalAlignment, $HorizontalAlignment$$Type} from "mezz.jei.api.gui.placement.HorizontalAlignment"
import {$VerticalAlignment, $VerticalAlignment$$Type} from "mezz.jei.api.gui.placement.VerticalAlignment"

export interface $IPlaceable<THIS extends $IPlaceable<(THIS)>> {

 "getWidth"(): integer
 "getHeight"(): integer
 "setPosition"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $HorizontalAlignment$$Type, arg5: $VerticalAlignment$$Type): THIS
 "setPosition"(arg0: integer, arg1: integer): THIS
get "width"(): integer
get "height"(): integer
}

export namespace $IPlaceable {
const probejs$$marker: never
}
export class $IPlaceable$$Static<THIS extends $IPlaceable<(THIS)>> implements $IPlaceable {


 "getWidth"(): integer
 "getHeight"(): integer
 "setPosition"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $HorizontalAlignment$$Type, arg5: $VerticalAlignment$$Type): THIS
 "setPosition"(arg0: integer, arg1: integer): THIS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlaceable$$Type<THIS> = ($IPlaceable<(THIS)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlaceable_<THIS> = $IPlaceable$$Type<(THIS)>;
}}
declare module "mezz.jei.api.ingredients.ITypedIngredient" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IIngredientType, $IIngredientType$$Type} from "mezz.jei.api.ingredients.IIngredientType"
import {$IIngredientTypeWithSubtypes, $IIngredientTypeWithSubtypes$$Type} from "mezz.jei.api.ingredients.IIngredientTypeWithSubtypes"

export interface $ITypedIngredient<T> {

 "cast"<V>(arg0: $IIngredientType$$Type<(V)>): $ITypedIngredient<(V)>
 "getType"(): $IIngredientType<(T)>
 "getBaseIngredient"<B>(arg0: $IIngredientTypeWithSubtypes$$Type<(B), (T)>): B
 "getItemStack"(): $Optional<($ItemStack)>
 "getCastIngredient"<V>(arg0: $IIngredientType$$Type<(V)>): V
 "getIngredient"(): T
 "getIngredient"<V>(arg0: $IIngredientType$$Type<(V)>): $Optional<(V)>
get "type"(): $IIngredientType<(T)>
get "itemStack"(): $Optional<($ItemStack)>
get "ingredient"(): T
}

export namespace $ITypedIngredient {
const probejs$$marker: never
}
export class $ITypedIngredient$$Static<T> implements $ITypedIngredient {


 "cast"<V>(arg0: $IIngredientType$$Type<(V)>): $ITypedIngredient<(V)>
 "getType"(): $IIngredientType<(T)>
 "getBaseIngredient"<B>(arg0: $IIngredientTypeWithSubtypes$$Type<(B), (T)>): B
 "getItemStack"(): $Optional<($ItemStack)>
 "getCastIngredient"<V>(arg0: $IIngredientType$$Type<(V)>): V
 "getIngredient"(): T
 "getIngredient"<V>(arg0: $IIngredientType$$Type<(V)>): $Optional<(V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITypedIngredient$$Type<T> = ($ITypedIngredient<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITypedIngredient_<T> = $ITypedIngredient$$Type<(T)>;
}}
declare module "mezz.jei.api.gui.placement.VerticalAlignment" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $VerticalAlignment extends $Enum<($VerticalAlignment)> {
static readonly "CENTER": $VerticalAlignment
static readonly "TOP": $VerticalAlignment
static readonly "BOTTOM": $VerticalAlignment


public static "values"(): ($VerticalAlignment)[]
public static "valueOf"(arg0: string): $VerticalAlignment
public "getYPos"(arg0: integer, arg1: integer): integer
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
declare module "mezz.jei.api.gui.builder.IRecipeSlotBuilder" {
import {$IIngredientRenderer, $IIngredientRenderer$$Type} from "mezz.jei.api.ingredients.IIngredientRenderer"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$IRecipeSlotRichTooltipCallback, $IRecipeSlotRichTooltipCallback$$Type} from "mezz.jei.api.gui.ingredient.IRecipeSlotRichTooltipCallback"
import {$IRecipeSlotTooltipCallback, $IRecipeSlotTooltipCallback$$Type} from "mezz.jei.api.gui.ingredient.IRecipeSlotTooltipCallback"
import {$IIngredientConsumer, $IIngredientConsumer$$Type} from "mezz.jei.api.gui.builder.IIngredientConsumer"
import {$IDrawable, $IDrawable$$Type} from "mezz.jei.api.gui.drawable.IDrawable"
import {$IIngredientAcceptor, $IIngredientAcceptor$$Type} from "mezz.jei.api.gui.builder.IIngredientAcceptor"
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IPlaceable, $IPlaceable$$Type} from "mezz.jei.api.gui.placement.IPlaceable"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$HorizontalAlignment, $HorizontalAlignment$$Type} from "mezz.jei.api.gui.placement.HorizontalAlignment"
import {$IIngredientType, $IIngredientType$$Type} from "mezz.jei.api.ingredients.IIngredientType"
import {$VerticalAlignment, $VerticalAlignment$$Type} from "mezz.jei.api.gui.placement.VerticalAlignment"
import {$ITypedIngredient, $ITypedIngredient$$Type} from "mezz.jei.api.ingredients.ITypedIngredient"

export interface $IRecipeSlotBuilder extends $IIngredientAcceptor<($IRecipeSlotBuilder)>, $IPlaceable<($IRecipeSlotBuilder)> {

 "setOverlay"(arg0: $IDrawable$$Type, arg1: integer, arg2: integer): $IRecipeSlotBuilder
 "setBackground"(arg0: $IDrawable$$Type, arg1: integer, arg2: integer): $IRecipeSlotBuilder
 "addRichTooltipCallback"(arg0: $IRecipeSlotRichTooltipCallback$$Type): $IRecipeSlotBuilder
 "setFluidRenderer"(arg0: long, arg1: boolean, arg2: integer, arg3: integer): $IRecipeSlotBuilder
/**
 * 
 * @deprecated
 */
 "addTooltipCallback"(arg0: $IRecipeSlotTooltipCallback$$Type): $IRecipeSlotBuilder
 "setCustomRenderer"<T>(arg0: $IIngredientType$$Type<(T)>, arg1: $IIngredientRenderer$$Type<(T)>): $IRecipeSlotBuilder
 "addFluidStack"(arg0: $Fluid$$Type, arg1: long): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$$Type, arg1: long, arg2: $DataComponentPatch$$Type): $IIngredientAcceptor<(any)>
 "setSlotName"(arg0: string): $IRecipeSlotBuilder
 "setStandardSlotBackground"(): $IRecipeSlotBuilder
 "setOutputSlotBackground"(): $IRecipeSlotBuilder
 "addItemStack"(arg0: $ItemStack$$Type): $IRecipeSlotBuilder
 "addIngredients"(arg0: $Ingredient$$Type): $IIngredientConsumer
 "addIngredients"(arg0: $IIngredientType$$Type<(any)>, arg1: $List$$Type<(any)>): $IIngredientConsumer
 "addIngredient"(arg0: $IIngredientType$$Type<(any)>, arg1: any): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$$Type): $IIngredientConsumer
 "addItemStacks"(arg0: $List$$Type<($ItemStack$$Type)>): $IRecipeSlotBuilder
 "addItemLike"(arg0: $ItemLike$$Type): $IIngredientConsumer
 "addIngredientsUnsafe"(arg0: $List$$Type<(any)>): $IIngredientConsumer
 "addTypedIngredient"(arg0: $ITypedIngredient$$Type<(any)>): $IIngredientConsumer
 "addTypedIngredients"(arg0: $List$$Type<(any)>): $IIngredientConsumer
 "addOptionalTypedIngredients"(arg0: $List$$Type<($Optional$$Type<($ITypedIngredient$$Type<(any)>)>)>): $IRecipeSlotBuilder
 "getWidth"(): integer
 "getHeight"(): integer
 "setPosition"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $HorizontalAlignment$$Type, arg5: $VerticalAlignment$$Type): $IRecipeSlotBuilder
 "setPosition"(arg0: integer, arg1: integer): $IRecipeSlotBuilder
set "slotName"(value: string)
get "width"(): integer
get "height"(): integer
}

export namespace $IRecipeSlotBuilder {
const probejs$$marker: never
}
export class $IRecipeSlotBuilder$$Static implements $IRecipeSlotBuilder {


 "setOverlay"(arg0: $IDrawable$$Type, arg1: integer, arg2: integer): $IRecipeSlotBuilder
 "setBackground"(arg0: $IDrawable$$Type, arg1: integer, arg2: integer): $IRecipeSlotBuilder
 "addRichTooltipCallback"(arg0: $IRecipeSlotRichTooltipCallback$$Type): $IRecipeSlotBuilder
 "setFluidRenderer"(arg0: long, arg1: boolean, arg2: integer, arg3: integer): $IRecipeSlotBuilder
/**
 * 
 * @deprecated
 */
 "addTooltipCallback"(arg0: $IRecipeSlotTooltipCallback$$Type): $IRecipeSlotBuilder
 "setCustomRenderer"<T>(arg0: $IIngredientType$$Type<(T)>, arg1: $IIngredientRenderer$$Type<(T)>): $IRecipeSlotBuilder
 "addFluidStack"(arg0: $Fluid$$Type, arg1: long): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$$Type, arg1: long, arg2: $DataComponentPatch$$Type): $IIngredientAcceptor<(any)>
 "setSlotName"(arg0: string): $IRecipeSlotBuilder
 "setStandardSlotBackground"(): $IRecipeSlotBuilder
 "setOutputSlotBackground"(): $IRecipeSlotBuilder
 "addItemStack"(arg0: $ItemStack$$Type): $IRecipeSlotBuilder
 "addIngredients"(arg0: $Ingredient$$Type): $IIngredientConsumer
 "addIngredients"(arg0: $IIngredientType$$Type<(any)>, arg1: $List$$Type<(any)>): $IIngredientConsumer
 "addIngredient"(arg0: $IIngredientType$$Type<(any)>, arg1: any): $IIngredientConsumer
 "addFluidStack"(arg0: $Fluid$$Type): $IIngredientConsumer
 "addItemStacks"(arg0: $List$$Type<($ItemStack$$Type)>): $IRecipeSlotBuilder
 "addItemLike"(arg0: $ItemLike$$Type): $IIngredientConsumer
 "addIngredientsUnsafe"(arg0: $List$$Type<(any)>): $IIngredientConsumer
 "addTypedIngredient"(arg0: $ITypedIngredient$$Type<(any)>): $IIngredientConsumer
 "addTypedIngredients"(arg0: $List$$Type<(any)>): $IIngredientConsumer
 "addOptionalTypedIngredients"(arg0: $List$$Type<($Optional$$Type<($ITypedIngredient$$Type<(any)>)>)>): $IRecipeSlotBuilder
 "getWidth"(): integer
 "getHeight"(): integer
 "setPosition"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $HorizontalAlignment$$Type, arg5: $VerticalAlignment$$Type): $IRecipeSlotBuilder
 "setPosition"(arg0: integer, arg1: integer): $IRecipeSlotBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotBuilder$$Type = ($IRecipeSlotBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotBuilder_ = $IRecipeSlotBuilder$$Type;
}}
declare module "mezz.jei.api.recipe.IFocusGroup" {
import {$RecipeIngredientRole, $RecipeIngredientRole$$Type} from "mezz.jei.api.recipe.RecipeIngredientRole"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IFocus, $IFocus$$Type} from "mezz.jei.api.recipe.IFocus"
import {$List, $List$$Type} from "java.util.List"
import {$IIngredientType, $IIngredientType$$Type} from "mezz.jei.api.ingredients.IIngredientType"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export interface $IFocusGroup {

 "isEmpty"(): boolean
 "getFocuses"<T>(arg0: $IIngredientType$$Type<(T)>, arg1: $RecipeIngredientRole$$Type): $Stream<($IFocus<(T)>)>
 "getFocuses"<T>(arg0: $IIngredientType$$Type<(T)>): $Stream<($IFocus<(T)>)>
 "getFocuses"(arg0: $RecipeIngredientRole$$Type): $Stream<($IFocus<(any)>)>
 "getAllFocuses"(): $List<($IFocus<(any)>)>
 "getItemStackFocuses"(arg0: $RecipeIngredientRole$$Type): $Stream<($IFocus<($ItemStack)>)>
 "getItemStackFocuses"(): $Stream<($IFocus<($ItemStack)>)>
get "empty"(): boolean
get "allFocuses"(): $List<($IFocus<(any)>)>
get "itemStackFocuses"(): $Stream<($IFocus<($ItemStack)>)>
}

export namespace $IFocusGroup {
const probejs$$marker: never
}
export class $IFocusGroup$$Static implements $IFocusGroup {


 "isEmpty"(): boolean
 "getFocuses"<T>(arg0: $IIngredientType$$Type<(T)>, arg1: $RecipeIngredientRole$$Type): $Stream<($IFocus<(T)>)>
 "getFocuses"<T>(arg0: $IIngredientType$$Type<(T)>): $Stream<($IFocus<(T)>)>
 "getFocuses"(arg0: $RecipeIngredientRole$$Type): $Stream<($IFocus<(any)>)>
 "getAllFocuses"(): $List<($IFocus<(any)>)>
 "getItemStackFocuses"(arg0: $RecipeIngredientRole$$Type): $Stream<($IFocus<($ItemStack)>)>
 "getItemStackFocuses"(): $Stream<($IFocus<($ItemStack)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFocusGroup$$Type = ($IFocusGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFocusGroup_ = $IFocusGroup$$Type;
}}
declare module "mezz.jei.api.gui.placement.HorizontalAlignment" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $HorizontalAlignment extends $Enum<($HorizontalAlignment)> {
static readonly "CENTER": $HorizontalAlignment
static readonly "LEFT": $HorizontalAlignment
static readonly "RIGHT": $HorizontalAlignment


public static "values"(): ($HorizontalAlignment)[]
public static "valueOf"(arg0: string): $HorizontalAlignment
public "getXPos"(arg0: integer, arg1: integer): integer
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
declare module "mezz.jei.api.gui.builder.IRecipeLayoutBuilder" {
import {$RecipeIngredientRole, $RecipeIngredientRole$$Type} from "mezz.jei.api.recipe.RecipeIngredientRole"
import {$IRecipeSlotBuilder, $IRecipeSlotBuilder$$Type} from "mezz.jei.api.gui.builder.IRecipeSlotBuilder"
import {$ISlottedWidgetFactory, $ISlottedWidgetFactory$$Type} from "mezz.jei.api.gui.widgets.ISlottedWidgetFactory"
import {$IIngredientAcceptor, $IIngredientAcceptor$$Type} from "mezz.jei.api.gui.builder.IIngredientAcceptor"

export interface $IRecipeLayoutBuilder {

 "addSlot"(arg0: $RecipeIngredientRole$$Type): $IRecipeSlotBuilder
 "addSlot"(arg0: $RecipeIngredientRole$$Type, arg1: integer, arg2: integer): $IRecipeSlotBuilder
 "createFocusLink"(...arg0: ($IIngredientAcceptor$$Type<(any)>)[]): void
 "addOutputSlot"(arg0: integer, arg1: integer): $IRecipeSlotBuilder
 "addOutputSlot"(): $IRecipeSlotBuilder
 "addInputSlot"(arg0: integer, arg1: integer): $IRecipeSlotBuilder
 "addInputSlot"(): $IRecipeSlotBuilder
 "addInvisibleIngredients"(arg0: $RecipeIngredientRole$$Type): $IIngredientAcceptor<(any)>
 "setShapeless"(): void
 "setShapeless"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "addSlotToWidget"(arg0: $RecipeIngredientRole$$Type, arg1: $ISlottedWidgetFactory$$Type<(any)>): $IRecipeSlotBuilder
 "moveRecipeTransferButton"(arg0: integer, arg1: integer): void
}

export namespace $IRecipeLayoutBuilder {
const probejs$$marker: never
}
export class $IRecipeLayoutBuilder$$Static implements $IRecipeLayoutBuilder {


 "addSlot"(arg0: $RecipeIngredientRole$$Type): $IRecipeSlotBuilder
 "addSlot"(arg0: $RecipeIngredientRole$$Type, arg1: integer, arg2: integer): $IRecipeSlotBuilder
 "createFocusLink"(...arg0: ($IIngredientAcceptor$$Type<(any)>)[]): void
 "addOutputSlot"(arg0: integer, arg1: integer): $IRecipeSlotBuilder
 "addOutputSlot"(): $IRecipeSlotBuilder
 "addInputSlot"(arg0: integer, arg1: integer): $IRecipeSlotBuilder
 "addInputSlot"(): $IRecipeSlotBuilder
 "addInvisibleIngredients"(arg0: $RecipeIngredientRole$$Type): $IIngredientAcceptor<(any)>
 "setShapeless"(): void
 "setShapeless"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
 "addSlotToWidget"(arg0: $RecipeIngredientRole$$Type, arg1: $ISlottedWidgetFactory$$Type<(any)>): $IRecipeSlotBuilder
 "moveRecipeTransferButton"(arg0: integer, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeLayoutBuilder$$Type = ($IRecipeLayoutBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeLayoutBuilder_ = $IRecipeLayoutBuilder$$Type;
}}
declare module "mezz.jei.api.gui.drawable.IDrawable" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $IDrawable {

 "getWidth"(): integer
 "getHeight"(): integer
 "draw"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
 "draw"(arg0: $GuiGraphics$$Type): void
get "width"(): integer
get "height"(): integer
}

export namespace $IDrawable {
const probejs$$marker: never
}
export class $IDrawable$$Static implements $IDrawable {


 "getWidth"(): integer
 "getHeight"(): integer
 "draw"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
 "draw"(arg0: $GuiGraphics$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawable$$Type = ($IDrawable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawable_ = $IDrawable$$Type;
}}
declare module "mezz.jei.api.gui.ingredient.IRecipeSlotDrawable" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeIngredientRole, $RecipeIngredientRole$$Type} from "mezz.jei.api.recipe.RecipeIngredientRole"
import {$IRecipeSlotView, $IRecipeSlotView$$Type} from "mezz.jei.api.gui.ingredient.IRecipeSlotView"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ITooltipBuilder, $ITooltipBuilder$$Type} from "mezz.jei.api.gui.builder.ITooltipBuilder"
import {$List, $List$$Type} from "java.util.List"
import {$IRecipeSlotTooltipCallback, $IRecipeSlotTooltipCallback$$Type} from "mezz.jei.api.gui.ingredient.IRecipeSlotTooltipCallback"
import {$IIngredientConsumer, $IIngredientConsumer$$Type} from "mezz.jei.api.gui.builder.IIngredientConsumer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Rect2i, $Rect2i$$Type} from "net.minecraft.client.renderer.Rect2i"
import {$IIngredientType, $IIngredientType$$Type} from "mezz.jei.api.ingredients.IIngredientType"
import {$ITypedIngredient, $ITypedIngredient$$Type} from "mezz.jei.api.ingredients.ITypedIngredient"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export interface $IRecipeSlotDrawable extends $IRecipeSlotView {

 "isMouseOver"(arg0: double, arg1: double): boolean
/**
 * 
 * @deprecated
 */
 "getTooltip"(arg0: $ITooltipBuilder$$Type): void
/**
 * 
 * @deprecated
 */
 "getTooltip"(): $List<($Component)>
 "setPosition"(arg0: integer, arg1: integer): void
 "draw"(arg0: $GuiGraphics$$Type): void
/**
 * 
 * @deprecated
 */
 "addTooltipCallback"(arg0: $IRecipeSlotTooltipCallback$$Type): void
 "drawTooltip"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
/**
 * 
 * @deprecated
 */
 "getRect"(): $Rect2i
 "drawHoverOverlays"(arg0: $GuiGraphics$$Type): void
 "clearDisplayOverrides"(): void
 "createDisplayOverrides"(): $IIngredientConsumer
 "getAreaIncludingBackground"(): $Rect2i
 "isEmpty"(): boolean
 "getIngredients"<T>(arg0: $IIngredientType$$Type<(T)>): $Stream<(T)>
 "getAllIngredients"(): $Stream<($ITypedIngredient<(any)>)>
 "getDisplayedIngredient"<T>(arg0: $IIngredientType$$Type<(T)>): $Optional<(T)>
 "getDisplayedIngredient"(): $Optional<($ITypedIngredient<(any)>)>
 "drawHighlight"(arg0: $GuiGraphics$$Type, arg1: integer): void
 "getRole"(): $RecipeIngredientRole
 "getSlotName"(): $Optional<(string)>
 "getItemStacks"(): $Stream<($ItemStack)>
 "getAllIngredientsList"(): $List<($ITypedIngredient<(any)>)>
 "getDisplayedItemStack"(): $Optional<($ItemStack)>
get "tooltip"(): $List<($Component)>
get "rect"(): $Rect2i
get "areaIncludingBackground"(): $Rect2i
get "empty"(): boolean
get "allIngredients"(): $Stream<($ITypedIngredient<(any)>)>
get "displayedIngredient"(): $Optional<($ITypedIngredient<(any)>)>
get "role"(): $RecipeIngredientRole
get "slotName"(): $Optional<(string)>
get "itemStacks"(): $Stream<($ItemStack)>
get "allIngredientsList"(): $List<($ITypedIngredient<(any)>)>
get "displayedItemStack"(): $Optional<($ItemStack)>
}

export namespace $IRecipeSlotDrawable {
const probejs$$marker: never
}
export class $IRecipeSlotDrawable$$Static implements $IRecipeSlotDrawable {


 "isMouseOver"(arg0: double, arg1: double): boolean
/**
 * 
 * @deprecated
 */
 "getTooltip"(arg0: $ITooltipBuilder$$Type): void
/**
 * 
 * @deprecated
 */
 "getTooltip"(): $List<($Component)>
 "setPosition"(arg0: integer, arg1: integer): void
 "draw"(arg0: $GuiGraphics$$Type): void
/**
 * 
 * @deprecated
 */
 "addTooltipCallback"(arg0: $IRecipeSlotTooltipCallback$$Type): void
 "drawTooltip"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
/**
 * 
 * @deprecated
 */
 "getRect"(): $Rect2i
 "drawHoverOverlays"(arg0: $GuiGraphics$$Type): void
 "clearDisplayOverrides"(): void
 "createDisplayOverrides"(): $IIngredientConsumer
 "getAreaIncludingBackground"(): $Rect2i
 "isEmpty"(): boolean
 "getIngredients"<T>(arg0: $IIngredientType$$Type<(T)>): $Stream<(T)>
 "getAllIngredients"(): $Stream<($ITypedIngredient<(any)>)>
 "getDisplayedIngredient"<T>(arg0: $IIngredientType$$Type<(T)>): $Optional<(T)>
 "getDisplayedIngredient"(): $Optional<($ITypedIngredient<(any)>)>
 "drawHighlight"(arg0: $GuiGraphics$$Type, arg1: integer): void
 "getRole"(): $RecipeIngredientRole
 "getSlotName"(): $Optional<(string)>
 "getItemStacks"(): $Stream<($ItemStack)>
 "getAllIngredientsList"(): $List<($ITypedIngredient<(any)>)>
 "getDisplayedItemStack"(): $Optional<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotDrawable$$Type = ($IRecipeSlotDrawable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotDrawable_ = $IRecipeSlotDrawable$$Type;
}}
