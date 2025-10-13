declare module "com.alexthw.sauce.api.item.ISchoolFocus" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ISchoolProvider, $ISchoolProvider$$Type} from "com.alexthw.sauce.api.item.ISchoolProvider"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import {$SpellSchool, $SpellSchool$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ISpellModifierItem, $ISpellModifierItem$$Type} from "com.hollingsworth.arsnouveau.api.item.ISpellModifierItem"
import {$Set, $Set$$Type} from "java.util.Set"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export interface $ISchoolFocus extends $ISpellModifierItem, $ISchoolProvider {

 "getDiscount"(): double
 "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
 "getSchools"(): $Set<($SpellSchool)>
 "getSchool"(): $SpellSchool
 "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
get "discount"(): double
get "schools"(): $Set<($SpellSchool)>
get "school"(): $SpellSchool
}

export namespace $ISchoolFocus {
function getFirstFocus(arg0: $Player$$Type): $ISchoolFocus
function getFociSchools(arg0: $LivingEntity$$Type): $Set<($SpellSchool)>
const probejs$$marker: never
}
export class $ISchoolFocus$$Static implements $ISchoolFocus {


static "getFirstFocus"(arg0: $Player$$Type): $ISchoolFocus
static "getFociSchools"(arg0: $LivingEntity$$Type): $Set<($SpellSchool)>
 "getDiscount"(): double
 "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
 "getSchools"(): $Set<($SpellSchool)>
 "getSchool"(): $SpellSchool
 "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISchoolFocus$$Type = ($ISchoolFocus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISchoolFocus_ = $ISchoolFocus$$Type;
}}
declare module "com.alexthw.sauce.api.item.ISchoolBangle" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ISchoolProvider, $ISchoolProvider$$Type} from "com.alexthw.sauce.api.item.ISchoolProvider"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import {$SpellSchool, $SpellSchool$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"
import {$ISpellModifierItem, $ISpellModifierItem$$Type} from "com.hollingsworth.arsnouveau.api.item.ISpellModifierItem"
import {$Set, $Set$$Type} from "java.util.Set"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export interface $ISchoolBangle extends $ISpellModifierItem, $ISchoolProvider {

 "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
 "getSchools"(): $Set<($SpellSchool)>
 "getSchool"(): $SpellSchool
 "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder

(): $SpellSchool$$Type
get "schools"(): $Set<($SpellSchool)>
get "school"(): $SpellSchool
}

export namespace $ISchoolBangle {
function hasBangle(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $SpellSchool$$Type): boolean
function getBangles(arg0: $Level$$Type, arg1: $Entity$$Type): $Set<($SpellSchool)>
const probejs$$marker: never
}
export class $ISchoolBangle$$Static implements $ISchoolBangle {


static "hasBangle"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $SpellSchool$$Type): boolean
static "getBangles"(arg0: $Level$$Type, arg1: $Entity$$Type): $Set<($SpellSchool)>
 "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
 "getSchools"(): $Set<($SpellSchool)>
 "getSchool"(): $SpellSchool
 "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISchoolBangle$$Type = (() => $SpellSchool$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISchoolBangle_ = $ISchoolBangle$$Type;
}}
declare module "com.alexthw.sauce.common.recipe.ElementalArmorRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$ApparatusRecipeInput, $ApparatusRecipeInput$$Type} from "com.hollingsworth.arsnouveau.common.crafting.recipes.ApparatusRecipeInput"
import {$List, $List$$Type} from "java.util.List"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ITextOutput, $ITextOutput$$Type} from "com.hollingsworth.arsnouveau.common.crafting.recipes.ITextOutput"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$EnchantingApparatusRecipe, $EnchantingApparatusRecipe$$Type} from "com.hollingsworth.arsnouveau.common.crafting.recipes.EnchantingApparatusRecipe"
import {$IEnchantingRecipe, $IEnchantingRecipe$$Type} from "com.hollingsworth.arsnouveau.common.crafting.recipes.IEnchantingRecipe"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ElementalArmorRecipe extends $EnchantingApparatusRecipe implements $ITextOutput {

constructor(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Ingredient$$Type)>, arg3: integer, arg4: integer)
constructor(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Ingredient$$Type)>, arg3: integer)

public "matches"(arg0: $ApparatusRecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "tier"(): integer
public "excludeJei"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $ApparatusRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getOutputComponent"(): $Component
public static "getRecipe"(arg0: $Level$$Type, arg1: $ApparatusRecipeInput$$Type): $RecipeHolder<($IEnchantingRecipe)>
get "type"(): $RecipeType<(any)>
get "serializer"(): $RecipeSerializer<(any)>
get "outputComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementalArmorRecipe$$Type = ($ElementalArmorRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElementalArmorRecipe_ = $ElementalArmorRecipe$$Type;
}}
declare module "com.alexthw.sauce.common.item.SchoolCasterTome" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SpellSchool, $SpellSchool$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$CasterTome, $CasterTome$$Type} from "com.hollingsworth.arsnouveau.common.items.CasterTome"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ISchoolFocus, $ISchoolFocus$$Type} from "com.alexthw.sauce.api.item.ISchoolFocus"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Rarity, $Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $SchoolCasterTome extends $CasterTome implements $ISchoolFocus {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $SpellSchool$$Type)

public "getDiscount"(): double
public "getSchool"(): $SpellSchool
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "getFirstFocus"(arg0: $Player$$Type): $ISchoolFocus
public static "getFociSchools"(arg0: $LivingEntity$$Type): $Set<($SpellSchool)>
public "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
public "getSchools"(): $Set<($SpellSchool)>
public "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "discount"(): double
get "school"(): $SpellSchool
get "schools"(): $Set<($SpellSchool)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SchoolCasterTome$$Type = ($SchoolCasterTome);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SchoolCasterTome_ = $SchoolCasterTome$$Type;
}}
declare module "com.alexthw.sauce.common.fluid.SourceFluid" {
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientFluidTypeExtensions"
import {$Lazy, $Lazy$$Type} from "net.neoforged.neoforge.common.util.Lazy"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"

export class $SourceFluid extends $FluidType {
static "extension": $IClientFluidTypeExtensions
static readonly "SIZE": $Lazy<(integer)>
static readonly "BUCKET_VOLUME": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourceFluid$$Type = ($SourceFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SourceFluid_ = $SourceFluid$$Type;
}}
declare module "com.alexthw.sauce.common.recipe.CharmChargingRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$CharmChargingRecipe, $CharmChargingRecipe$$Type} from "com.alexthw.sauce.common.recipe.CharmChargingRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CharmChargingRecipe$Serializer implements $RecipeSerializer<($CharmChargingRecipe)> {
static readonly "CODEC": $MapCodec<($CharmChargingRecipe)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($CharmChargingRecipe)>

constructor()

public "codec"(): $MapCodec<($CharmChargingRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($CharmChargingRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharmChargingRecipe$Serializer$$Type = ($CharmChargingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CharmChargingRecipe$Serializer_ = $CharmChargingRecipe$Serializer$$Type;
}}
declare module "com.alexthw.sauce.mixin.TurretAccessor" {
import {$UUID, $UUID$$Type} from "java.util.UUID"

export interface $TurretAccessor {

 "getUuid"(): $UUID

(): $UUID$$Type
get "uuid"(): $UUID
}

export namespace $TurretAccessor {
const probejs$$marker: never
}
export class $TurretAccessor$$Static implements $TurretAccessor {


 "getUuid"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurretAccessor$$Type = (() => $UUID$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurretAccessor_ = $TurretAccessor$$Type;
}}
declare module "com.alexthw.sauce.common.recipe.ElementalArmorRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ElementalArmorRecipe, $ElementalArmorRecipe$$Type} from "com.alexthw.sauce.common.recipe.ElementalArmorRecipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $ElementalArmorRecipe$Serializer implements $RecipeSerializer<($ElementalArmorRecipe)> {
static "CODEC": $MapCodec<($ElementalArmorRecipe)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ElementalArmorRecipe)>

constructor()

public "codec"(): $MapCodec<($ElementalArmorRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ElementalArmorRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementalArmorRecipe$Serializer$$Type = ($ElementalArmorRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElementalArmorRecipe$Serializer_ = $ElementalArmorRecipe$Serializer$$Type;
}}
declare module "com.alexthw.sauce.common.recipe.CharmChargingRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ImbuementTile, $ImbuementTile$$Type} from "com.hollingsworth.arsnouveau.common.block.tile.ImbuementTile"
import {$IImbuementRecipe, $IImbuementRecipe$$Type} from "com.hollingsworth.arsnouveau.api.imbuement_chamber.IImbuementRecipe"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $CharmChargingRecipe extends $Record implements $IImbuementRecipe {

constructor(id: $ResourceLocation$$Type, input: $Item$$Type, costPerCharge: integer)

public "input"(): $Item
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $ImbuementTile$$Type, arg1: $Level$$Type): boolean
public "id"(): $ResourceLocation
public "getType"(): $RecipeType<(any)>
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "getSourceCost"(arg0: $ImbuementTile$$Type): integer
public "costPerCharge"(): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $ImbuementTile$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getCraftingStartedText"(arg0: $ImbuementTile$$Type): $Component
public "getCraftingText"(arg0: $ImbuementTile$$Type): $Component
public "getCraftingProgressText"(arg0: $ImbuementTile$$Type, arg1: integer): $Component
public static "getRecipe"(arg0: $Level$$Type, arg1: $ImbuementTile$$Type): $RecipeHolder<($IImbuementRecipe)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getGroup"(): StringJS
public "isSpecial"(): boolean
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $ImbuementTile$$Type): $NonNullList<($ItemStack)>
get "type"(): $RecipeType<(any)>
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharmChargingRecipe$$Type = ({"input"?: $Item$$Type, "costPerCharge"?: integer, "id"?: $ResourceLocation$$Type}) | ([input?: $Item$$Type, costPerCharge?: integer, id?: $ResourceLocation$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CharmChargingRecipe_ = $CharmChargingRecipe$$Type;
}}
declare module "com.alexthw.sauce.mixin.SpellSchoolAccessor" {
import {$DocAssets$BlitInfo, $DocAssets$BlitInfo$$Type} from "com.hollingsworth.arsnouveau.api.documentation.DocAssets$BlitInfo"

export interface $SpellSchoolAccessor {

 "setDocIcon"(arg0: $DocAssets$BlitInfo$$Type): void

(arg0: $DocAssets$BlitInfo): void
set "docIcon"(value: $DocAssets$BlitInfo$$Type)
}

export namespace $SpellSchoolAccessor {
const probejs$$marker: never
}
export class $SpellSchoolAccessor$$Static implements $SpellSchoolAccessor {


 "setDocIcon"(arg0: $DocAssets$BlitInfo$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellSchoolAccessor$$Type = ((arg0: $DocAssets$BlitInfo) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellSchoolAccessor_ = $SpellSchoolAccessor$$Type;
}}
declare module "com.alexthw.sauce.api.item.ISchoolProvider" {
import {$Set, $Set$$Type} from "java.util.Set"
import {$SpellSchool, $SpellSchool$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"

export interface $ISchoolProvider {

 "getSchools"(): $Set<($SpellSchool)>
 "getSchool"(): $SpellSchool

(): $SpellSchool$$Type
get "schools"(): $Set<($SpellSchool)>
get "school"(): $SpellSchool
}

export namespace $ISchoolProvider {
const probejs$$marker: never
}
export class $ISchoolProvider$$Static implements $ISchoolProvider {


 "getSchools"(): $Set<($SpellSchool)>
 "getSchool"(): $SpellSchool
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISchoolProvider$$Type = (() => $SpellSchool$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISchoolProvider_ = $ISchoolProvider$$Type;
}}
declare module "com.alexthw.sauce.api.item.SpellPrismLens" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$EntityProjectileSpell, $EntityProjectileSpell$$Type} from "com.hollingsworth.arsnouveau.common.entity.EntityProjectileSpell"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $SpellPrismLens {

 "canConvert"(arg0: $EntityProjectileSpell$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
 "shoot"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $EntityProjectileSpell$$Type, arg3: $Vec3$$Type): void
 "addTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $ItemStack$$Type): void

(arg0: $EntityProjectileSpell, arg1: $Level, arg2: $BlockPos): boolean
}

export namespace $SpellPrismLens {
const probejs$$marker: never
}
export class $SpellPrismLens$$Static implements $SpellPrismLens {


 "canConvert"(arg0: $EntityProjectileSpell$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): boolean
 "shoot"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $EntityProjectileSpell$$Type, arg3: $Vec3$$Type): void
 "addTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellPrismLens$$Type = ((arg0: $EntityProjectileSpell, arg1: $Level, arg2: $BlockPos) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellPrismLens_ = $SpellPrismLens$$Type;
}}
declare module "com.alexthw.sauce.api.item.IElementalArmor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ISchoolProvider, $ISchoolProvider$$Type} from "com.alexthw.sauce.api.item.ISchoolProvider"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import {$DamageType, $DamageType$$Type} from "net.minecraft.world.damagesource.DamageType"
import {$SpellSchool, $SpellSchool$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"
import {$HashMap, $HashMap$$Type} from "java.util.HashMap"
import {$ISpellModifierItem, $ISpellModifierItem$$Type} from "com.hollingsworth.arsnouveau.api.item.ISpellModifierItem"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Set, $Set$$Type} from "java.util.Set"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export interface $IElementalArmor extends $ISpellModifierItem, $ISchoolProvider {

 "doAbsorb"(arg0: $DamageSource$$Type): boolean
 "getDiscount"(arg0: $List$$Type<($AbstractSpellPart$$Type)>): double
 "getTier"(): StringJS
 "fillAbsorptions"(arg0: $DamageSource$$Type, arg1: $HashMap$$Type<($SpellSchool$$Type), (integer)>): boolean
 "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
 "getSchools"(): $Set<($SpellSchool)>
 "getSchool"(): $SpellSchool
 "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
get "tier"(): StringJS
get "schools"(): $Set<($SpellSchool)>
get "school"(): $SpellSchool
}

export namespace $IElementalArmor {
const damageResistances: $Map<($SpellSchool), ($TagKey<($DamageType)>)>
const probejs$$marker: never
}
export class $IElementalArmor$$Static implements $IElementalArmor {
static readonly "damageResistances": $Map<($SpellSchool), ($TagKey<($DamageType)>)>


 "doAbsorb"(arg0: $DamageSource$$Type): boolean
 "getDiscount"(arg0: $List$$Type<($AbstractSpellPart$$Type)>): double
 "getTier"(): StringJS
 "fillAbsorptions"(arg0: $DamageSource$$Type, arg1: $HashMap$$Type<($SpellSchool$$Type), (integer)>): boolean
 "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
 "getSchools"(): $Set<($SpellSchool)>
 "getSchool"(): $SpellSchool
 "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IElementalArmor$$Type = ($IElementalArmor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IElementalArmor_ = $IElementalArmor$$Type;
}}
declare module "com.alexthw.sauce.common.block.FocusEnhancedSpellTurret" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$SpellSchool, $SpellSchool$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellSchool"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ITurretBehavior, $ITurretBehavior$$Type} from "com.hollingsworth.arsnouveau.api.spell.ITurretBehavior"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BasicSpellTurret, $BasicSpellTurret$$Type} from "com.hollingsworth.arsnouveau.common.block.BasicSpellTurret"
import {$HashMap, $HashMap$$Type} from "java.util.HashMap"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$AbstractCastMethod, $AbstractCastMethod$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractCastMethod"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $FocusEnhancedSpellTurret extends $BasicSpellTurret {
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
 "descriptionId": StringJS
readonly "school": $SpellSchool
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static "TURRET_BEHAVIOR_MAP": $HashMap<($AbstractCastMethod), ($ITurretBehavior)>
static readonly "TRIGGERED": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $SpellSchool$$Type)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FocusEnhancedSpellTurret$$Type = ($FocusEnhancedSpellTurret);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FocusEnhancedSpellTurret_ = $FocusEnhancedSpellTurret$$Type;
}}
