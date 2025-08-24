declare module "appeng.recipes.quartzcutting.QuartzCuttingRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$CraftingRecipe, $CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $QuartzCuttingRecipe implements $CraftingRecipe {
static readonly "CODEC": $MapCodec<($QuartzCuttingRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($QuartzCuttingRecipe)>

constructor(arg0: $ItemStack$$Type, arg1: $NonNullList$$Type<($Ingredient$$Type)>)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "category"(): $CraftingBookCategory
public "getIngredients"(): $NonNullList<($Ingredient)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<(any)>
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getType"(): $RecipeType<(any)>
public "getGroup"(): string
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "type"(): $RecipeType<(any)>
get "group"(): string
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzCuttingRecipe$$Type = ($QuartzCuttingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuartzCuttingRecipe_ = $QuartzCuttingRecipe$$Type;
}}
declare module "appeng.recipes.entropy.EntropyRecipe$Output" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$EntropyRecipe$FluidOutput, $EntropyRecipe$FluidOutput$$Type} from "appeng.recipes.entropy.EntropyRecipe$FluidOutput"
import {$EntropyRecipe$BlockOutput, $EntropyRecipe$BlockOutput$$Type} from "appeng.recipes.entropy.EntropyRecipe$BlockOutput"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $EntropyRecipe$Output extends $Record {
static "CODEC": $Codec<($EntropyRecipe$Output)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe$Output)>

constructor(block: $Optional$$Type<($EntropyRecipe$BlockOutput$$Type)>, fluid: $Optional$$Type<($EntropyRecipe$FluidOutput$$Type)>, drops: $List$$Type<($ItemStack$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "block"(): $Optional<($EntropyRecipe$BlockOutput)>
public "drops"(): $List<($ItemStack)>
public "fluid"(): $Optional<($EntropyRecipe$FluidOutput)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipe$Output$$Type = ({"fluid"?: ($EntropyRecipe$FluidOutput$$Type)?, "drops"?: $List$$Type<($ItemStack$$Type)>, "block"?: ($EntropyRecipe$BlockOutput$$Type)?}) | ([fluid?: ($EntropyRecipe$FluidOutput$$Type)?, drops?: $List$$Type<($ItemStack$$Type)>, block?: ($EntropyRecipe$BlockOutput$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntropyRecipe$Output_ = $EntropyRecipe$Output$$Type;
}}
declare module "appeng.recipes.handlers.ChargerRecipeSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$ChargerRecipe, $ChargerRecipe$$Type} from "appeng.recipes.handlers.ChargerRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $ChargerRecipeSerializer implements $RecipeSerializer<($ChargerRecipe)> {
static readonly "INSTANCE": $ChargerRecipeSerializer

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ChargerRecipe)>
public "codec"(): $MapCodec<($ChargerRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargerRecipeSerializer$$Type = ($ChargerRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargerRecipeSerializer_ = $ChargerRecipeSerializer$$Type;
}}
declare module "appeng.recipes.entropy.EntropyRecipe$BlockInput" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$PropertyValueMatcher, $PropertyValueMatcher$$Type} from "appeng.recipes.entropy.PropertyValueMatcher"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $EntropyRecipe$BlockInput extends $Record {
static "CODEC": $Codec<($EntropyRecipe$BlockInput)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe$BlockInput)>

constructor(block: $Block$$Type, properties: $Map$$Type<(string), ($PropertyValueMatcher$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "properties"(): $Map<(string), ($PropertyValueMatcher)>
public "block"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipe$BlockInput$$Type = ({"properties"?: $Map$$Type<(string), ($PropertyValueMatcher$$Type)>, "block"?: $Block$$Type}) | ([properties?: $Map$$Type<(string), ($PropertyValueMatcher$$Type)>, block?: $Block$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntropyRecipe$BlockInput_ = $EntropyRecipe$BlockInput$$Type;
}}
declare module "appeng.recipes.transform.TransformCircumstance" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export class $TransformCircumstance {
static readonly "CODEC": $Codec<($TransformCircumstance)>
static readonly "EXPLOSION": $TransformCircumstance
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($TransformCircumstance)>

constructor(arg0: string)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isExplosion"(): boolean
public "isFluid"(): boolean
public "isFluid"(arg0: $FluidState$$Type): boolean
public "isFluid"(arg0: $Fluid$$Type): boolean
public static "explosion"(): $TransformCircumstance
public "toJson"(): $JsonObject
public static "fluid"(arg0: $TagKey$$Type<($Fluid)>): $TransformCircumstance
public "isFluidTag"(arg0: $TagKey$$Type<($Fluid)>): boolean
public "getFluidsForRendering"(): $List<($Fluid)>
get "fluidsForRendering"(): $List<($Fluid)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformCircumstance$$Type = ($TransformCircumstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformCircumstance_ = $TransformCircumstance$$Type;
}}
declare module "appeng.recipes.game.StorageCellDisassemblyRecipeSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$StorageCellDisassemblyRecipe, $StorageCellDisassemblyRecipe$$Type} from "appeng.recipes.game.StorageCellDisassemblyRecipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $StorageCellDisassemblyRecipeSerializer implements $RecipeSerializer<($StorageCellDisassemblyRecipe)> {
static readonly "INSTANCE": $StorageCellDisassemblyRecipeSerializer


public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($StorageCellDisassemblyRecipe)>
public "codec"(): $MapCodec<($StorageCellDisassemblyRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageCellDisassemblyRecipeSerializer$$Type = ($StorageCellDisassemblyRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageCellDisassemblyRecipeSerializer_ = $StorageCellDisassemblyRecipeSerializer$$Type;
}}
declare module "appeng.recipes.entropy.EntropyRecipe$Input" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$EntropyRecipe$FluidInput, $EntropyRecipe$FluidInput$$Type} from "appeng.recipes.entropy.EntropyRecipe$FluidInput"
import {$EntropyRecipe$BlockInput, $EntropyRecipe$BlockInput$$Type} from "appeng.recipes.entropy.EntropyRecipe$BlockInput"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $EntropyRecipe$Input extends $Record {
static "CODEC": $Codec<($EntropyRecipe$Input)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe$Input)>

constructor(block: $Optional$$Type<($EntropyRecipe$BlockInput$$Type)>, fluid: $Optional$$Type<($EntropyRecipe$FluidInput$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "matches"(arg0: $BlockState$$Type, arg1: $FluidState$$Type): boolean
public "block"(): $Optional<($EntropyRecipe$BlockInput)>
public "fluid"(): $Optional<($EntropyRecipe$FluidInput)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipe$Input$$Type = ({"block"?: ($EntropyRecipe$BlockInput$$Type)?, "fluid"?: ($EntropyRecipe$FluidInput$$Type)?}) | ([block?: ($EntropyRecipe$BlockInput$$Type)?, fluid?: ($EntropyRecipe$FluidInput$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntropyRecipe$Input_ = $EntropyRecipe$Input$$Type;
}}
declare module "appeng.recipes.entropy.EntropyRecipe$FluidOutput" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $EntropyRecipe$FluidOutput extends $Record {
static "CODEC": $Codec<($EntropyRecipe$FluidOutput)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe$FluidOutput)>

constructor(fluid: $Fluid$$Type, keepProperties: boolean, properties: $Map$$Type<(string), (string)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "apply"(arg0: $FluidState$$Type): $FluidState
public "properties"(): $Map<(string), (string)>
public "fluid"(): $Fluid
public static "fromNetwork"(arg0: $FriendlyByteBuf$$Type): $EntropyRecipe$FluidOutput
public static "toNetwork"(arg0: $FriendlyByteBuf$$Type, arg1: $EntropyRecipe$FluidOutput$$Type): void
public "keepProperties"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipe$FluidOutput$$Type = ({"keepProperties"?: boolean, "fluid"?: $Fluid$$Type, "properties"?: $Map$$Type<(string), (string)>}) | ([keepProperties?: boolean, fluid?: $Fluid$$Type, properties?: $Map$$Type<(string), (string)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntropyRecipe$FluidOutput_ = $EntropyRecipe$FluidOutput$$Type;
}}
declare module "appeng.recipes.handlers.InscriberRecipeSerializer" {
import {$InscriberRecipe, $InscriberRecipe$$Type} from "appeng.recipes.handlers.InscriberRecipe"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $InscriberRecipeSerializer implements $RecipeSerializer<($InscriberRecipe)> {
static readonly "INSTANCE": $InscriberRecipeSerializer


public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($InscriberRecipe)>
public "codec"(): $MapCodec<($InscriberRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InscriberRecipeSerializer$$Type = ($InscriberRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InscriberRecipeSerializer_ = $InscriberRecipeSerializer$$Type;
}}
declare module "appeng.recipes.game.StorageCellUpgradeRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$CustomRecipe, $CustomRecipe$$Type} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $StorageCellUpgradeRecipe extends $CustomRecipe {
static readonly "CODEC": $MapCodec<($StorageCellUpgradeRecipe)>
static readonly "SERIALIZER_ID": $ResourceLocation
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($StorageCellUpgradeRecipe)>

constructor(arg0: $Item$$Type, arg1: $Item$$Type, arg2: $Item$$Type, arg3: $Item$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<(any)>
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getInputCell"(): $Item
public "getResultCell"(): $Item
public "getInputComponent"(): $Item
public "getResultComponent"(): $Item
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "inputCell"(): $Item
get "resultCell"(): $Item
get "inputComponent"(): $Item
get "resultComponent"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageCellUpgradeRecipe$$Type = ($StorageCellUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageCellUpgradeRecipe_ = $StorageCellUpgradeRecipe$$Type;
}}
declare module "appeng.recipes.game.CraftingUnitTransformRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$CustomRecipe, $CustomRecipe$$Type} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CraftingUnitTransformRecipe extends $CustomRecipe {
static readonly "CODEC": $MapCodec<($CraftingUnitTransformRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($CraftingUnitTransformRecipe)>

constructor(arg0: $Block$$Type, arg1: $Item$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getUpgradedBlock"(): $Block
public static "getUpgradedBlock"(arg0: $Level$$Type, arg1: $ItemStack$$Type): $Block
public static "getRemovedUpgrade"(arg0: $Level$$Type, arg1: $Block$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getUpgradeItem"(): $Item
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
get "type"(): $RecipeType<(any)>
get "upgradedBlock"(): $Block
get "serializer"(): $RecipeSerializer<(any)>
get "upgradeItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingUnitTransformRecipe$$Type = ($CraftingUnitTransformRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingUnitTransformRecipe_ = $CraftingUnitTransformRecipe$$Type;
}}
declare module "appeng.recipes.transform.TransformRecipeSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$TransformRecipe, $TransformRecipe$$Type} from "appeng.recipes.transform.TransformRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $TransformRecipeSerializer implements $RecipeSerializer<($TransformRecipe)> {
static readonly "INSTANCE": $TransformRecipeSerializer


public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($TransformRecipe)>
public "codec"(): $MapCodec<($TransformRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformRecipeSerializer$$Type = ($TransformRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformRecipeSerializer_ = $TransformRecipeSerializer$$Type;
}}
declare module "appeng.recipes.game.RemoveItemUpgradeRecipeSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RemoveItemUpgradeRecipe, $RemoveItemUpgradeRecipe$$Type} from "appeng.recipes.game.RemoveItemUpgradeRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $RemoveItemUpgradeRecipeSerializer implements $RecipeSerializer<($RemoveItemUpgradeRecipe)> {
static readonly "INSTANCE": $RemoveItemUpgradeRecipeSerializer

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($RemoveItemUpgradeRecipe)>
public "codec"(): $MapCodec<($RemoveItemUpgradeRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RemoveItemUpgradeRecipeSerializer$$Type = ($RemoveItemUpgradeRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RemoveItemUpgradeRecipeSerializer_ = $RemoveItemUpgradeRecipeSerializer$$Type;
}}
declare module "appeng.recipes.game.StorageCellUpgradeRecipeSerializer" {
import {$StorageCellUpgradeRecipe, $StorageCellUpgradeRecipe$$Type} from "appeng.recipes.game.StorageCellUpgradeRecipe"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $StorageCellUpgradeRecipeSerializer implements $RecipeSerializer<($StorageCellUpgradeRecipe)> {
static readonly "INSTANCE": $StorageCellUpgradeRecipeSerializer

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($StorageCellUpgradeRecipe)>
public "codec"(): $MapCodec<($StorageCellUpgradeRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageCellUpgradeRecipeSerializer$$Type = ($StorageCellUpgradeRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageCellUpgradeRecipeSerializer_ = $StorageCellUpgradeRecipeSerializer$$Type;
}}
declare module "appeng.recipes.handlers.ChargerRecipe" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $ChargerRecipe implements $Recipe<($RecipeInput)> {
readonly "result": $ItemStack
/**
 * 
 * @deprecated
 */
static readonly "TYPE_ID": $ResourceLocation
readonly "ingredient": $Ingredient
static readonly "CODEC": $MapCodec<($ChargerRecipe)>
readonly "ingredients": $NonNullList<($Ingredient)>
/**
 * 
 * @deprecated
 */
static readonly "TYPE": $RecipeType<($ChargerRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ChargerRecipe)>

constructor(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(): $ItemStack
public "getIngredient"(): $Ingredient
public "getGroup"(): string
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "resultItem"(): $ItemStack
get "ingredient"(): $Ingredient
get "group"(): string
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargerRecipe$$Type = ($ChargerRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargerRecipe_ = $ChargerRecipe$$Type;
}}
declare module "appeng.recipes.handlers.InscriberProcessType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $InscriberProcessType extends $Enum<($InscriberProcessType)> {
static readonly "INSCRIBE": $InscriberProcessType
static readonly "PRESS": $InscriberProcessType


public static "values"(): ($InscriberProcessType)[]
public static "valueOf"(arg0: string): $InscriberProcessType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InscriberProcessType$$Type = (("inscribe") | ("press"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InscriberProcessType_ = $InscriberProcessType$$Type;
}}
declare module "appeng.recipes.game.AddItemUpgradeRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$CustomRecipe, $CustomRecipe$$Type} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $AddItemUpgradeRecipe extends $CustomRecipe {
static readonly "CODEC": $MapCodec<($AddItemUpgradeRecipe)>
static readonly "INSTANCE": $AddItemUpgradeRecipe
static readonly "SERIALIZER_ID": $ResourceLocation
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AddItemUpgradeRecipe)>


public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddItemUpgradeRecipe$$Type = ($AddItemUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddItemUpgradeRecipe_ = $AddItemUpgradeRecipe$$Type;
}}
declare module "appeng.recipes.game.AddItemUpgradeRecipeSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$AddItemUpgradeRecipe, $AddItemUpgradeRecipe$$Type} from "appeng.recipes.game.AddItemUpgradeRecipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $AddItemUpgradeRecipeSerializer implements $RecipeSerializer<($AddItemUpgradeRecipe)> {
static readonly "INSTANCE": $AddItemUpgradeRecipeSerializer

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($AddItemUpgradeRecipe)>
public "codec"(): $MapCodec<($AddItemUpgradeRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddItemUpgradeRecipeSerializer$$Type = ($AddItemUpgradeRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddItemUpgradeRecipeSerializer_ = $AddItemUpgradeRecipeSerializer$$Type;
}}
declare module "appeng.recipes.game.CraftingUnitTransformRecipeSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$CraftingUnitTransformRecipe, $CraftingUnitTransformRecipe$$Type} from "appeng.recipes.game.CraftingUnitTransformRecipe"

export class $CraftingUnitTransformRecipeSerializer implements $RecipeSerializer<($CraftingUnitTransformRecipe)> {
static readonly "INSTANCE": $CraftingUnitTransformRecipeSerializer


public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($CraftingUnitTransformRecipe)>
public "codec"(): $MapCodec<($CraftingUnitTransformRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingUnitTransformRecipeSerializer$$Type = ($CraftingUnitTransformRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingUnitTransformRecipeSerializer_ = $CraftingUnitTransformRecipeSerializer$$Type;
}}
declare module "appeng.recipes.entropy.EntropyMode" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $EntropyMode extends $Enum<($EntropyMode)> implements $StringRepresentable {
static readonly "HEAT": $EntropyMode
static readonly "CODEC": $Codec<($EntropyMode)>
static readonly "COOL": $EntropyMode


public static "values"(): ($EntropyMode)[]
public static "valueOf"(arg0: string): $EntropyMode
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
export type $EntropyMode$$Type = (("heat") | ("cool"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntropyMode_ = $EntropyMode$$Type;
}}
declare module "appeng.recipes.entropy.EntropyRecipe" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$EntropyRecipe$Input, $EntropyRecipe$Input$$Type} from "appeng.recipes.entropy.EntropyRecipe$Input"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$EntropyMode, $EntropyMode$$Type} from "appeng.recipes.entropy.EntropyMode"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$EntropyRecipe$Output, $EntropyRecipe$Output$$Type} from "appeng.recipes.entropy.EntropyRecipe$Output"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EntropyRecipe implements $Recipe<($RecipeInput)> {
/**
 * 
 * @deprecated
 */
static readonly "TYPE_ID": $ResourceLocation
static readonly "CODEC": $MapCodec<($EntropyRecipe)>
/**
 * 
 * @deprecated
 */
static readonly "TYPE": $RecipeType<($EntropyRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe)>


public "getMode"(): $EntropyMode
public "getInput"(): $EntropyRecipe$Input
public "getOutput"(): $EntropyRecipe$Output
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $EntropyMode$$Type, arg1: $BlockState$$Type, arg2: $FluidState$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getDrops"(): $List<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getOutputBlockState"(arg0: $BlockState$$Type): $BlockState
public "getOutputFluidState"(arg0: $FluidState$$Type): $FluidState
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getGroup"(): string
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
get "mode"(): $EntropyMode
get "input"(): $EntropyRecipe$Input
get "output"(): $EntropyRecipe$Output
get "type"(): $RecipeType<(any)>
get "drops"(): $List<($ItemStack)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "group"(): string
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipe$$Type = ($EntropyRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntropyRecipe_ = $EntropyRecipe$$Type;
}}
declare module "appeng.recipes.game.RemoveItemUpgradeRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$CustomRecipe, $CustomRecipe$$Type} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $RemoveItemUpgradeRecipe extends $CustomRecipe {
static readonly "CODEC": $MapCodec<($RemoveItemUpgradeRecipe)>
static readonly "INSTANCE": $RemoveItemUpgradeRecipe
static readonly "SERIALIZER_ID": $ResourceLocation
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RemoveItemUpgradeRecipe)>


public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<(any)>
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RemoveItemUpgradeRecipe$$Type = ($RemoveItemUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RemoveItemUpgradeRecipe_ = $RemoveItemUpgradeRecipe$$Type;
}}
declare module "appeng.recipes.transform.TransformRecipe" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$TransformRecipeInput, $TransformRecipeInput$$Type} from "appeng.recipes.transform.TransformRecipeInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TransformCircumstance, $TransformCircumstance$$Type} from "appeng.recipes.transform.TransformCircumstance"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $TransformRecipe implements $Recipe<($TransformRecipeInput)> {
readonly "output": $ItemStack
/**
 * 
 * @deprecated
 */
static readonly "TYPE_ID": $ResourceLocation
static readonly "CODEC": $MapCodec<($TransformRecipe)>
readonly "circumstance": $TransformCircumstance
readonly "ingredients": $NonNullList<($Ingredient)>
/**
 * 
 * @deprecated
 */
static readonly "TYPE": $RecipeType<($TransformRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($TransformRecipe)>

constructor(arg0: $NonNullList$$Type<($Ingredient$$Type)>, arg1: $ItemStack$$Type, arg2: $TransformCircumstance$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $TransformRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "assemble"(arg0: $TransformRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getResultItem"(): $ItemStack
public "getCircumstance"(): $TransformCircumstance
public "getGroup"(): string
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $TransformRecipeInput$$Type): $NonNullList<($ItemStack)>
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "resultItem"(): $ItemStack
get "circumstance"(): $TransformCircumstance
get "group"(): string
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformRecipe$$Type = ($TransformRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformRecipe_ = $TransformRecipe$$Type;
}}
declare module "appeng.recipes.mattercannon.MatterCannonAmmoSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$MatterCannonAmmo, $MatterCannonAmmo$$Type} from "appeng.recipes.mattercannon.MatterCannonAmmo"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $MatterCannonAmmoSerializer implements $RecipeSerializer<($MatterCannonAmmo)> {
static readonly "INSTANCE": $MatterCannonAmmoSerializer


public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($MatterCannonAmmo)>
public "codec"(): $MapCodec<($MatterCannonAmmo)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatterCannonAmmoSerializer$$Type = ($MatterCannonAmmoSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MatterCannonAmmoSerializer_ = $MatterCannonAmmoSerializer$$Type;
}}
declare module "appeng.recipes.entropy.EntropyRecipeSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$EntropyRecipe, $EntropyRecipe$$Type} from "appeng.recipes.entropy.EntropyRecipe"

export class $EntropyRecipeSerializer implements $RecipeSerializer<($EntropyRecipe)> {
static readonly "INSTANCE": $EntropyRecipeSerializer


public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe)>
public "codec"(): $MapCodec<($EntropyRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipeSerializer$$Type = ($EntropyRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntropyRecipeSerializer_ = $EntropyRecipeSerializer$$Type;
}}
declare module "appeng.recipes.game.StorageCellDisassemblyRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$CustomRecipe, $CustomRecipe$$Type} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $StorageCellDisassemblyRecipe extends $CustomRecipe {
static readonly "CODEC": $MapCodec<($StorageCellDisassemblyRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($StorageCellDisassemblyRecipe)>

constructor(arg0: $Item$$Type, arg1: $List$$Type<($ItemStack$$Type)>)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public static "getDisassemblyResult"(arg0: $Level$$Type, arg1: $Item$$Type): $List<($ItemStack)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "canDisassemble"(): boolean
public "getStorageCell"(): $Item
public "getCellDisassemblyItems"(): $List<($ItemStack)>
get "type"(): $RecipeType<(any)>
get "serializer"(): $RecipeSerializer<(any)>
get "storageCell"(): $Item
get "cellDisassemblyItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageCellDisassemblyRecipe$$Type = ($StorageCellDisassemblyRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StorageCellDisassemblyRecipe_ = $StorageCellDisassemblyRecipe$$Type;
}}
declare module "appeng.recipes.handlers.InscriberRecipe" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$InscriberProcessType, $InscriberProcessType$$Type} from "appeng.recipes.handlers.InscriberProcessType"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $InscriberRecipe implements $Recipe<($RecipeInput)> {
/**
 * 
 * @deprecated
 */
static readonly "TYPE_ID": $ResourceLocation
static readonly "CODEC": $MapCodec<($InscriberRecipe)>
/**
 * 
 * @deprecated
 */
static readonly "TYPE": $RecipeType<($InscriberRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($InscriberRecipe)>

constructor(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type, arg2: $Ingredient$$Type, arg3: $Ingredient$$Type, arg4: $InscriberProcessType$$Type)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "isSpecial"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(): $ItemStack
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getProcessType"(): $InscriberProcessType
public "getMiddleInput"(): $Ingredient
public "getTopOptional"(): $Ingredient
public "getBottomOptional"(): $Ingredient
public "getGroup"(): string
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "resultItem"(): $ItemStack
get "processType"(): $InscriberProcessType
get "middleInput"(): $Ingredient
get "topOptional"(): $Ingredient
get "bottomOptional"(): $Ingredient
get "group"(): string
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InscriberRecipe$$Type = ($InscriberRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InscriberRecipe_ = $InscriberRecipe$$Type;
}}
declare module "appeng.recipes.mattercannon.MatterCannonAmmo" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $MatterCannonAmmo implements $Recipe<($RecipeInput)> {
/**
 * 
 * @deprecated
 */
static readonly "TYPE_ID": $ResourceLocation
static readonly "CODEC": $MapCodec<($MatterCannonAmmo)>
/**
 * 
 * @deprecated
 */
static readonly "TYPE": $RecipeType<($MatterCannonAmmo)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MatterCannonAmmo)>

constructor(arg0: $Ingredient$$Type, arg1: float)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "getWeight"(): float
public static "ammo"(arg0: $RecipeOutput$$Type, arg1: $ResourceLocation$$Type, arg2: $TagKey$$Type<($Item)>, arg3: float): void
public static "ammo"(arg0: $RecipeOutput$$Type, arg1: $ResourceLocation$$Type, arg2: $ItemLike$$Type, arg3: float): void
public static "ammo"(arg0: $RecipeOutput$$Type, arg1: $ResourceLocation$$Type, arg2: $Ingredient$$Type, arg3: float): void
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getAmmo"(): $Ingredient
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getGroup"(): string
public "isSpecial"(): boolean
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<($ItemStack)>
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
get "type"(): $RecipeType<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "weight"(): float
get "group"(): string
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatterCannonAmmo$$Type = ($MatterCannonAmmo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MatterCannonAmmo_ = $MatterCannonAmmo$$Type;
}}
declare module "appeng.recipes.quartzcutting.QuartzCuttingRecipeSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$QuartzCuttingRecipe, $QuartzCuttingRecipe$$Type} from "appeng.recipes.quartzcutting.QuartzCuttingRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $QuartzCuttingRecipeSerializer implements $RecipeSerializer<($QuartzCuttingRecipe)> {
static readonly "INSTANCE": $QuartzCuttingRecipeSerializer

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($QuartzCuttingRecipe)>
public "codec"(): $MapCodec<($QuartzCuttingRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuartzCuttingRecipeSerializer$$Type = ($QuartzCuttingRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuartzCuttingRecipeSerializer_ = $QuartzCuttingRecipeSerializer$$Type;
}}
declare module "appeng.recipes.transform.TransformRecipeInput" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$SlotFilter, $SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $TransformRecipeInput extends $Record implements $RecipeInput {

constructor(items: $List$$Type<($ItemStack$$Type)>)

public "items"(): $List<($ItemStack)>
public "size"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getItem"(arg0: integer): $ItemStack
public "isEmpty"(): boolean
public "find"(arg0: $SlotFilter$$Type): $ItemStack
public "find"(arg0: $SlotFilter$$Type, arg1: integer): $ItemStack
public "findAll"(): $List<($ItemStack)>
public "findAll"(arg0: $SlotFilter$$Type): $List<($ItemStack)>
public "self"(): $RecipeInput
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformRecipeInput$$Type = ({"items"?: $List$$Type<($ItemStack$$Type)>}) | ([items?: $List$$Type<($ItemStack$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformRecipeInput_ = $TransformRecipeInput$$Type;
}}
declare module "appeng.recipes.entropy.EntropyRecipe$FluidInput" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$PropertyValueMatcher, $PropertyValueMatcher$$Type} from "appeng.recipes.entropy.PropertyValueMatcher"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $EntropyRecipe$FluidInput extends $Record {
static "CODEC": $Codec<($EntropyRecipe$FluidInput)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe$FluidInput)>

constructor(fluid: $Fluid$$Type, properties: $Map$$Type<(string), ($PropertyValueMatcher$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "properties"(): $Map<(string), ($PropertyValueMatcher)>
public "fluid"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipe$FluidInput$$Type = ({"properties"?: $Map$$Type<(string), ($PropertyValueMatcher$$Type)>, "fluid"?: $Fluid$$Type}) | ([properties?: $Map$$Type<(string), ($PropertyValueMatcher$$Type)>, fluid?: $Fluid$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntropyRecipe$FluidInput_ = $EntropyRecipe$FluidInput$$Type;
}}
declare module "appeng.recipes.entropy.PropertyValueMatcher" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$StateHolder, $StateHolder$$Type} from "net.minecraft.world.level.block.state.StateHolder"
import {$Property, $Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export interface $PropertyValueMatcher {

 "matches"<T extends $Comparable<(T)>>(arg0: $Property$$Type<(T)>, arg1: $StateHolder$$Type<(any), (any)>): boolean
 "validate"(arg0: $Property$$Type<($Comparable$$Type<(any)>)>): void
 "toNetwork"(arg0: $FriendlyByteBuf$$Type): void
}

export namespace $PropertyValueMatcher {
const CODEC: $Codec<($PropertyValueMatcher)>
const MAP_CODEC: $Codec<($Map<(string), ($PropertyValueMatcher)>)>
const STREAM_CODEC: $StreamCodec<($FriendlyByteBuf), ($PropertyValueMatcher)>
const probejs$$marker: never
}
export class $PropertyValueMatcher$$Static implements $PropertyValueMatcher {
static readonly "CODEC": $Codec<($PropertyValueMatcher)>
static readonly "MAP_CODEC": $Codec<($Map<(string), ($PropertyValueMatcher)>)>
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($PropertyValueMatcher)>


 "matches"<T extends $Comparable<(T)>>(arg0: $Property$$Type<(T)>, arg1: $StateHolder$$Type<(any), (any)>): boolean
 "validate"(arg0: $Property$$Type<($Comparable$$Type<(any)>)>): void
 "toNetwork"(arg0: $FriendlyByteBuf$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertyValueMatcher$$Type = ($PropertyValueMatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropertyValueMatcher_ = $PropertyValueMatcher$$Type;
}}
declare module "appeng.recipes.entropy.EntropyRecipe$BlockOutput" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EntropyRecipe$BlockOutput extends $Record {
static "CODEC": $Codec<($EntropyRecipe$BlockOutput)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EntropyRecipe$BlockOutput)>

constructor(block: $Block$$Type, keepProperties: boolean, properties: $Map$$Type<(string), (string)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "apply"(arg0: $BlockState$$Type): $BlockState
public "properties"(): $Map<(string), (string)>
public "block"(): $Block
public "keepProperties"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntropyRecipe$BlockOutput$$Type = ({"keepProperties"?: boolean, "properties"?: $Map$$Type<(string), (string)>, "block"?: $Block$$Type}) | ([keepProperties?: boolean, properties?: $Map$$Type<(string), (string)>, block?: $Block$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntropyRecipe$BlockOutput_ = $EntropyRecipe$BlockOutput$$Type;
}}
