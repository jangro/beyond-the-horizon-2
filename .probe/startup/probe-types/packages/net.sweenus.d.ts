declare module "net.sweenus.simplyswords.power.powers.StoneskinPower" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$RunefusedGemPower, $RunefusedGemPower$$Type} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $StoneskinPower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StoneskinPower$$Type = ($StoneskinPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StoneskinPower_ = $StoneskinPower$$Type;
}}
declare module "net.sweenus.simplyswords.effect.OnslaughtEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $OnslaughtEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(pLivingEntity: $LivingEntity$$Type, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OnslaughtEffect$$Type = ($OnslaughtEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OnslaughtEffect_ = $OnslaughtEffect$$Type;
}}
declare module "net.sweenus.simplyswords.recipe.RunicRerollRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$SmithingRecipeInput, $SmithingRecipeInput$$Type} from "net.minecraft.world.item.crafting.SmithingRecipeInput"
import {$SmithingTransformRecipe, $SmithingTransformRecipe$$Type} from "net.minecraft.world.item.crafting.SmithingTransformRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $RunicRerollRecipe extends $SmithingTransformRecipe {
readonly "template": $Ingredient
readonly "result": $ItemStack
readonly "base": $Ingredient
readonly "addition": $Ingredient

constructor(template: $Ingredient$$Type, base: $Ingredient$$Type, addition: $Ingredient$$Type, result: $ItemStack$$Type)

public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(smithingRecipeInput: $SmithingRecipeInput$$Type, wrapperLookup: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunicRerollRecipe$$Type = ($RunicRerollRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RunicRerollRecipe_ = $RunicRerollRecipe$$Type;
}}
declare module "net.sweenus.simplyswords.power.PowerType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$RegistrySupplier, $RegistrySupplier$$Type} from "dev.architectury.registry.registries.RegistrySupplier"
import {$List, $List$$Type} from "java.util.List"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"

export class $PowerType extends $Enum<($PowerType)> {
static readonly "NETHER": $PowerType
static readonly "RUNIC": $PowerType
static readonly "RUNEFUSED": $PowerType


public static "values"(): ($PowerType)[]
public static "valueOf"(name: string): $PowerType
public "getEntries"(): $List<($RegistrySupplier<($GemPower)>)>
get "entries"(): $List<($RegistrySupplier<($GemPower)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PowerType$$Type = (("runic") | ("runefused") | ("nether"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PowerType_ = $PowerType$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.ThunderbrandSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TwoHandedWeapon, $TwoHandedWeapon$$Type} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $ThunderbrandSwordItem extends $UniqueSwordItem implements $TwoHandedWeapon {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "onUseTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "releaseUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThunderbrandSwordItem$$Type = ($ThunderbrandSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThunderbrandSwordItem_ = $ThunderbrandSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.BrambleSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $BrambleSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrambleSwordItem$$Type = ($BrambleSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrambleSwordItem_ = $BrambleSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.effect.FireVortexEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AttributeMap, $AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$OrbitingEffect, $OrbitingEffect$$Type} from "net.sweenus.simplyswords.effect.OrbitingEffect"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $FireVortexEffect extends $OrbitingEffect {
 "sourceEntity": $LivingEntity
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
 "additionalData": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "setAdditionalData"(data: integer): void
public "setSourcePlayer"(livingEntity: $LivingEntity$$Type): void
public "removeAttributeModifiers"(attributes: $AttributeMap$$Type): void
public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
set "additionalData"(value: integer)
set "sourcePlayer"(value: $LivingEntity$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireVortexEffect$$Type = ($FireVortexEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireVortexEffect_ = $FireVortexEffect$$Type;
}}
declare module "net.sweenus.simplyswords.effect.MagislamEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AttributeMap, $AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$OrbitingEffect, $OrbitingEffect$$Type} from "net.sweenus.simplyswords.effect.OrbitingEffect"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $MagislamEffect extends $OrbitingEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "removeAttributeModifiers"(attributes: $AttributeMap$$Type): void
public "shouldApplyEffectTickThisTick"(duration: integer, amplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagislamEffect$$Type = ($MagislamEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagislamEffect_ = $MagislamEffect$$Type;
}}
declare module "net.sweenus.simplyswords.effect.VoidAssaultEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AttributeMap, $AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$OrbitingEffect, $OrbitingEffect$$Type} from "net.sweenus.simplyswords.effect.OrbitingEffect"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $VoidAssaultEffect extends $OrbitingEffect {
 "sourceEntity": $LivingEntity
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
 "additionalData": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "setAdditionalData"(data: integer): void
public "setSourcePlayer"(livingEntity: $LivingEntity$$Type): void
public "removeAttributeModifiers"(attributes: $AttributeMap$$Type): void
public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
set "additionalData"(value: integer)
set "sourcePlayer"(value: $LivingEntity$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidAssaultEffect$$Type = ($VoidAssaultEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidAssaultEffect_ = $VoidAssaultEffect$$Type;
}}
declare module "net.sweenus.simplyswords.effect.FlameSeedEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AttributeMap, $AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$OrbitingEffect, $OrbitingEffect$$Type} from "net.sweenus.simplyswords.effect.OrbitingEffect"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $FlameSeedEffect extends $OrbitingEffect {
 "sourceEntity": $LivingEntity
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
 "additionalData": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "setAdditionalData"(data: integer): void
public "setSourcePlayer"(livingEntity: $LivingEntity$$Type): void
public "removeAttributeModifiers"(attributes: $AttributeMap$$Type): void
public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
set "additionalData"(value: integer)
set "sourcePlayer"(value: $LivingEntity$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlameSeedEffect$$Type = ($FlameSeedEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlameSeedEffect_ = $FlameSeedEffect$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.TaintedRelicSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $TaintedRelicSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaintedRelicSwordItem$$Type = ($TaintedRelicSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaintedRelicSwordItem_ = $TaintedRelicSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.power.powers.ThrowingPower" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$RunicGemPower, $RunicGemPower$$Type} from "net.sweenus.simplyswords.power.RunicGemPower"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $ThrowingPower extends $RunicGemPower {
static "EMPTY": $GemPower

constructor()

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type, itemStack: $ItemStack$$Type): $InteractionResultHolder<($ItemStack)>
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThrowingPower$$Type = ($ThrowingPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThrowingPower_ = $ThrowingPower$$Type;
}}
declare module "net.sweenus.simplyswords.power.powers.SwiftnessPower" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$RunefusedGemPower, $RunefusedGemPower$$Type} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $SwiftnessPower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SwiftnessPower$$Type = ($SwiftnessPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SwiftnessPower_ = $SwiftnessPower$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.SoulPyreSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TwoHandedWeapon, $TwoHandedWeapon$$Type} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $SoulPyreSwordItem extends $UniqueSwordItem implements $TwoHandedWeapon {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulPyreSwordItem$$Type = ($SoulPyreSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulPyreSwordItem_ = $SoulPyreSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.UniqueSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SlotAccess, $SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SwordItem, $SwordItem$$Type} from "net.minecraft.world.item.SwordItem"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction, $ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $UniqueSwordItem extends $SwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "getName"(stack: $ItemStack$$Type): $Component
public "overrideOtherStackedOnMe"(stack: $ItemStack$$Type, otherStack: $ItemStack$$Type, slot: $Slot$$Type, clickType: $ClickAction$$Type, player: $Player$$Type, cursorStackReference: $SlotAccess$$Type): boolean
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniqueSwordItem$$Type = ($UniqueSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniqueSwordItem_ = $UniqueSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.power.powers.PincushionPower" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$RunefusedGemPower, $RunefusedGemPower$$Type} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $PincushionPower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PincushionPower$$Type = ($PincushionPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PincushionPower_ = $PincushionPower$$Type;
}}
declare module "net.sweenus.simplyswords.power.RunefusedGemPower" {
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"

export class $RunefusedGemPower extends $GemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunefusedGemPower$$Type = ($RunefusedGemPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RunefusedGemPower_ = $RunefusedGemPower$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.LivyatanSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $LivyatanSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivyatanSwordItem$$Type = ($LivyatanSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivyatanSwordItem_ = $LivyatanSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.power.powers.ShieldingPower" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$RunefusedGemPower, $RunefusedGemPower$$Type} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $ShieldingPower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShieldingPower$$Type = ($ShieldingPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShieldingPower_ = $ShieldingPower$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.HarbingerSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $HarbingerSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HarbingerSwordItem$$Type = ($HarbingerSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HarbingerSwordItem_ = $HarbingerSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.WatcherSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $WatcherSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WatcherSwordItem$$Type = ($WatcherSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WatcherSwordItem_ = $WatcherSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.power.powers.TrailblazePower" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$RunefusedGemPower, $RunefusedGemPower$$Type} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $TrailblazePower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrailblazePower$$Type = ($TrailblazePower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrailblazePower_ = $TrailblazePower$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.IcewhisperSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TwoHandedWeapon, $TwoHandedWeapon$$Type} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $IcewhisperSwordItem extends $UniqueSwordItem implements $TwoHandedWeapon {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "onUseTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "releaseUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IcewhisperSwordItem$$Type = ($IcewhisperSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IcewhisperSwordItem_ = $IcewhisperSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.MagibladeSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $MagibladeSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "onUseTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "releaseUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagibladeSwordItem$$Type = ($MagibladeSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagibladeSwordItem_ = $MagibladeSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.power.powers.UnstablePower" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$RunefusedGemPower, $RunefusedGemPower$$Type} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $UnstablePower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor()

public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, slot: integer, selected: boolean): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnstablePower$$Type = ($UnstablePower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnstablePower_ = $UnstablePower$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.DormantRelicSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $DormantRelicSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DormantRelicSwordItem$$Type = ($DormantRelicSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DormantRelicSwordItem_ = $DormantRelicSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.ArcanethystSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TwoHandedWeapon, $TwoHandedWeapon$$Type} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $ArcanethystSwordItem extends $UniqueSwordItem implements $TwoHandedWeapon {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "onUseTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "releaseUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcanethystSwordItem$$Type = ($ArcanethystSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArcanethystSwordItem_ = $ArcanethystSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.TempestSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $TempestSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TempestSwordItem$$Type = ($TempestSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TempestSwordItem_ = $TempestSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.effect.BattleFatigueEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $BattleFatigueEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(pLivingEntity: $LivingEntity$$Type, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BattleFatigueEffect$$Type = ($BattleFatigueEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BattleFatigueEffect_ = $BattleFatigueEffect$$Type;
}}
declare module "net.sweenus.simplyswords.effect.MagistormEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$HighOrbitingEffect, $HighOrbitingEffect$$Type} from "net.sweenus.simplyswords.effect.HighOrbitingEffect"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $MagistormEffect extends $HighOrbitingEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(duration: integer, amplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagistormEffect$$Type = ($MagistormEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagistormEffect_ = $MagistormEffect$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.StealSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $StealSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StealSwordItem$$Type = ($StealSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StealSwordItem_ = $StealSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.effect.SmoulderingEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $SmoulderingEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmoulderingEffect$$Type = ($SmoulderingEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmoulderingEffect_ = $SmoulderingEffect$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.SoulkeeperSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TwoHandedWeapon, $TwoHandedWeapon$$Type} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $SoulkeeperSwordItem extends $UniqueSwordItem implements $TwoHandedWeapon {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulkeeperSwordItem$$Type = ($SoulkeeperSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulkeeperSwordItem_ = $SoulkeeperSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.RunicSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SlotAccess, $SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SwordItem, $SwordItem$$Type} from "net.minecraft.world.item.SwordItem"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction, $ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $RunicSwordItem extends $SwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "getName"(stack: $ItemStack$$Type): $Component
public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "overrideOtherStackedOnMe"(stack: $ItemStack$$Type, otherStack: $ItemStack$$Type, slot: $Slot$$Type, clickType: $ClickAction$$Type, player: $Player$$Type, cursorStackReference: $SlotAccess$$Type): boolean
public "onUseTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "releaseUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "onCraftedPostProcess"(stack: $ItemStack$$Type, world: $Level$$Type): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunicSwordItem$$Type = ($RunicSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RunicSwordItem_ = $RunicSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.effect.FreezeEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $FreezeEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(pLivingEntity: $LivingEntity$$Type, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FreezeEffect$$Type = ($FreezeEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FreezeEffect_ = $FreezeEffect$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.TwistedBladeItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TwoHandedWeapon, $TwoHandedWeapon$$Type} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $TwistedBladeItem extends $UniqueSwordItem implements $TwoHandedWeapon {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TwistedBladeItem$$Type = ($TwistedBladeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TwistedBladeItem_ = $TwistedBladeItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.CaelestisSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $CaelestisSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CaelestisSwordItem$$Type = ($CaelestisSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CaelestisSwordItem_ = $CaelestisSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.power.GemPowerComponent" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $GemPowerComponent extends $Record {
static readonly "CODEC": $Codec<($GemPowerComponent)>
static readonly "PACKET_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($GemPowerComponent)>
static readonly "DEFAULT": $GemPowerComponent

constructor(hasRunicPower: boolean, hasNetherPower: boolean, runicPower: $Holder$$Type<($GemPower)>, netherPower: $Holder$$Type<($GemPower)>)

public "equals"(componentObject: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "fill"(runicFiller: $BiFunction$$Type<(boolean), ($Holder<($GemPower)>), ($Holder$$Type<($GemPower$$Type)>)>, netherFiller: $BiFunction$$Type<(boolean), ($Holder<($GemPower)>), ($Holder$$Type<($GemPower$$Type)>)>): $GemPowerComponent
public static "create"(runic: $Holder$$Type<($GemPower)>, nether: $Holder$$Type<($GemPower)>): $GemPowerComponent
public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "createEmpty"(hasRunic: boolean, hasNether: boolean): $GemPowerComponent
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, slot: integer, selected: boolean): void
public static "runic"(power: $Holder$$Type<($GemPower)>): $GemPowerComponent
public static "nether"(power: $Holder$$Type<($GemPower)>): $GemPowerComponent
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
public "usageTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "onStoppedUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "getMaxUseTime"(stack: $ItemStack$$Type): integer
public "hasNetherPower"(): boolean
public "netherPower"(): $Holder<($GemPower)>
public "hasPower"(power: $Holder$$Type<($GemPower)>): boolean
public "hasRunicPower"(): boolean
public "runicPower"(): $Holder<($GemPower)>
public "hasNether"(power: $Holder$$Type<($GemPower)>): boolean
public "hasRunic"(power: $Holder$$Type<($GemPower)>): boolean
public "canBeFilled"(): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemPowerComponent$$Type = ({"netherPower"?: $Holder$$Type<($GemPower)>, "runicPower"?: $Holder$$Type<($GemPower)>, "hasRunicPower"?: boolean, "hasNetherPower"?: boolean}) | ([netherPower?: $Holder$$Type<($GemPower)>, runicPower?: $Holder$$Type<($GemPower)>, hasRunicPower?: boolean, hasNetherPower?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemPowerComponent_ = $GemPowerComponent$$Type;
}}
declare module "net.sweenus.simplyswords.effect.RibboncleaveEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AttributeMap, $AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$OrbitingEffect, $OrbitingEffect$$Type} from "net.sweenus.simplyswords.effect.OrbitingEffect"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $RibboncleaveEffect extends $OrbitingEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "removeAttributeModifiers"(attributes: $AttributeMap$$Type): void
public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RibboncleaveEffect$$Type = ($RibboncleaveEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RibboncleaveEffect_ = $RibboncleaveEffect$$Type;
}}
declare module "net.sweenus.simplyswords.item.SimplySwordsThrowableItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$SimplySwordsSwordItem, $SimplySwordsSwordItem$$Type} from "net.sweenus.simplyswords.item.SimplySwordsSwordItem"

export class $SimplySwordsThrowableItem extends $SimplySwordsSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type, ...repairIngredient: (string)[])

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimplySwordsThrowableItem$$Type = ($SimplySwordsThrowableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimplySwordsThrowableItem_ = $SimplySwordsThrowableItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.WickpiercerSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $WickpiercerSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WickpiercerSwordItem$$Type = ($WickpiercerSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WickpiercerSwordItem_ = $WickpiercerSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.WatcherClaymoreItem" {
import {$WatcherSwordItem, $WatcherSwordItem$$Type} from "net.sweenus.simplyswords.item.custom.WatcherSwordItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$TwoHandedWeapon, $TwoHandedWeapon$$Type} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $WatcherClaymoreItem extends $WatcherSwordItem implements $TwoHandedWeapon {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WatcherClaymoreItem$$Type = ($WatcherClaymoreItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WatcherClaymoreItem_ = $WatcherClaymoreItem$$Type;
}}
declare module "net.sweenus.simplyswords.power.powers.NullificationPower" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NetherGemPower, $NetherGemPower$$Type} from "net.sweenus.simplyswords.power.NetherGemPower"
import {$List, $List$$Type} from "java.util.List"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $NullificationPower extends $NetherGemPower {
static "EMPTY": $GemPower

constructor()

public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NullificationPower$$Type = ($NullificationPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NullificationPower_ = $NullificationPower$$Type;
}}
declare module "net.sweenus.simplyswords.power.powers.FloatPower" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$RunefusedGemPower, $RunefusedGemPower$$Type} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $FloatPower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatPower$$Type = ($FloatPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloatPower_ = $FloatPower$$Type;
}}
declare module "net.sweenus.simplyswords.power.powers.ActiveDefencePower" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$RunefusedGemPower, $RunefusedGemPower$$Type} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $ActiveDefencePower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor()

public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, slot: integer, selected: boolean): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActiveDefencePower$$Type = ($ActiveDefencePower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActiveDefencePower_ = $ActiveDefencePower$$Type;
}}
declare module "net.sweenus.simplyswords.power.powers.EchoPower" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NetherGemPower, $NetherGemPower$$Type} from "net.sweenus.simplyswords.power.NetherGemPower"
import {$List, $List$$Type} from "java.util.List"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $EchoPower extends $NetherGemPower {
static "EMPTY": $GemPower

constructor()

public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EchoPower$$Type = ($EchoPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EchoPower_ = $EchoPower$$Type;
}}
declare module "net.sweenus.simplyswords.recipe.UpgradeUniqueRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$UpgradeUniqueRecipe, $UpgradeUniqueRecipe$$Type} from "net.sweenus.simplyswords.recipe.UpgradeUniqueRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $UpgradeUniqueRecipe$Serializer implements $RecipeSerializer<($UpgradeUniqueRecipe)> {
static readonly "CODEC": $MapCodec<($UpgradeUniqueRecipe)>
static readonly "PACKET_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($UpgradeUniqueRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($UpgradeUniqueRecipe)>
public "codec"(): $MapCodec<($UpgradeUniqueRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeUniqueRecipe$Serializer$$Type = ($UpgradeUniqueRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeUniqueRecipe$Serializer_ = $UpgradeUniqueRecipe$Serializer$$Type;
}}
declare module "net.sweenus.simplyswords.effect.EchoEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $EchoEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EchoEffect$$Type = ($EchoEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EchoEffect_ = $EchoEffect$$Type;
}}
declare module "net.sweenus.simplyswords.effect.WardEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $WardEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WardEffect$$Type = ($WardEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WardEffect_ = $WardEffect$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.FlamewindSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $FlamewindSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlamewindSwordItem$$Type = ($FlamewindSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlamewindSwordItem_ = $FlamewindSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.StormbringerSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $StormbringerSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static "scalesWithSpellPower": boolean
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "onUseTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "releaseUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StormbringerSwordItem$$Type = ($StormbringerSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StormbringerSwordItem_ = $StormbringerSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.power.NetherGemPower" {
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"

export class $NetherGemPower extends $GemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetherGemPower$$Type = ($NetherGemPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetherGemPower_ = $NetherGemPower$$Type;
}}
declare module "net.sweenus.simplyswords.power.GemPowerFiller" {
import {$ValidationResult, $ValidationResult$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GemPowerComponent, $GemPowerComponent$$Type} from "net.sweenus.simplyswords.power.GemPowerComponent"

export interface $GemPowerFiller {

 "fill"(arg0: $ItemStack$$Type, arg1: $GemPowerComponent$$Type): $ValidationResult<($GemPowerComponent)>

(arg0: $ItemStack, arg1: $GemPowerComponent): $ValidationResult$$Type<($GemPowerComponent$$Type)>
}

export namespace $GemPowerFiller {
const probejs$$marker: never
}
export class $GemPowerFiller$$Static implements $GemPowerFiller {


 "fill"(arg0: $ItemStack$$Type, arg1: $GemPowerComponent$$Type): $ValidationResult<($GemPowerComponent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemPowerFiller$$Type = ((arg0: $ItemStack, arg1: $GemPowerComponent) => $ValidationResult$$Type<($GemPowerComponent$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemPowerFiller_ = $GemPowerFiller$$Type;
}}
declare module "net.sweenus.simplyswords.effect.SporeSwarmEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$WideOrbitingEffect, $WideOrbitingEffect$$Type} from "net.sweenus.simplyswords.effect.WideOrbitingEffect"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $SporeSwarmEffect extends $WideOrbitingEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(duration: integer, amplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SporeSwarmEffect$$Type = ($SporeSwarmEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SporeSwarmEffect_ = $SporeSwarmEffect$$Type;
}}
declare module "net.sweenus.simplyswords.effect.HighOrbitingEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $HighOrbitingEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HighOrbitingEffect$$Type = ($HighOrbitingEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HighOrbitingEffect_ = $HighOrbitingEffect$$Type;
}}
declare module "net.sweenus.simplyswords.recipe.RawUpgradableRecipe$Data" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $RawUpgradableRecipe$Data extends $Record {
static readonly "CODEC": $MapCodec<($RawUpgradableRecipe$Data)>

constructor(key: $Map$$Type<(character), ($Pair$$Type<($Ingredient$$Type), (boolean)>)>, pattern: $List$$Type<(string)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "pattern"(): $List<(string)>
public "key"(): $Map<(character), ($Pair<($Ingredient), (boolean)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawUpgradableRecipe$Data$$Type = ({"key"?: $Map$$Type<(character), ($Pair$$Type<($Ingredient$$Type), (boolean)>)>, "pattern"?: $List$$Type<(string)>}) | ([key?: $Map$$Type<(character), ($Pair$$Type<($Ingredient$$Type), (boolean)>)>, pattern?: $List$$Type<(string)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawUpgradableRecipe$Data_ = $RawUpgradableRecipe$Data$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.EmberIreSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EmberIreSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "onUseTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "releaseUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmberIreSwordItem$$Type = ($EmberIreSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmberIreSwordItem_ = $EmberIreSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.effect.FrostVortexEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AttributeMap, $AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$OrbitingEffect, $OrbitingEffect$$Type} from "net.sweenus.simplyswords.effect.OrbitingEffect"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $FrostVortexEffect extends $OrbitingEffect {
 "sourceEntity": $LivingEntity
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
 "additionalData": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "setAdditionalData"(data: integer): void
public "setSourcePlayer"(livingEntity: $LivingEntity$$Type): void
public "removeAttributeModifiers"(attributes: $AttributeMap$$Type): void
public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
set "additionalData"(value: integer)
set "sourcePlayer"(value: $LivingEntity$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrostVortexEffect$$Type = ($FrostVortexEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrostVortexEffect_ = $FrostVortexEffect$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.RighteousRelicSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $RighteousRelicSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RighteousRelicSwordItem$$Type = ($RighteousRelicSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RighteousRelicSwordItem_ = $RighteousRelicSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.NetherfusedGemItem" {
import {$ValidationResult, $ValidationResult$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GemPowerFiller, $GemPowerFiller$$Type} from "net.sweenus.simplyswords.power.GemPowerFiller"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SlotAccess, $SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction, $ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$GemPowerComponent, $GemPowerComponent$$Type} from "net.sweenus.simplyswords.power.GemPowerComponent"

export class $NetherfusedGemItem extends $Item implements $GemPowerFiller {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getName"(stack: $ItemStack$$Type): $Component
public "fill"(stack: $ItemStack$$Type, component: $GemPowerComponent$$Type): $ValidationResult<($GemPowerComponent)>
public "overrideOtherStackedOnMe"(stack: $ItemStack$$Type, otherStack: $ItemStack$$Type, slot: $Slot$$Type, clickType: $ClickAction$$Type, player: $Player$$Type, cursorStackReference: $SlotAccess$$Type): boolean
public "onCraftedPostProcess"(stack: $ItemStack$$Type, world: $Level$$Type): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetherfusedGemItem$$Type = ($NetherfusedGemItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetherfusedGemItem_ = $NetherfusedGemItem$$Type;
}}
declare module "net.sweenus.simplyswords.effect.WildfireEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $WildfireEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(pLivingEntity: $LivingEntity$$Type, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WildfireEffect$$Type = ($WildfireEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WildfireEffect_ = $WildfireEffect$$Type;
}}
declare module "net.sweenus.simplyswords.power.powers.OnslaughtPower" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NetherGemPower, $NetherGemPower$$Type} from "net.sweenus.simplyswords.power.NetherGemPower"
import {$List, $List$$Type} from "java.util.List"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $OnslaughtPower extends $NetherGemPower {
static "EMPTY": $GemPower

constructor()

public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OnslaughtPower$$Type = ($OnslaughtPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OnslaughtPower_ = $OnslaughtPower$$Type;
}}
declare module "net.sweenus.simplyswords.effect.SoulTetherEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AttributeMap, $AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $SoulTetherEffect extends $MobEffect {
 "sourceEntity": $LivingEntity
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
 "detonateDamage": float
 "detonateRadius": double
 "heal": float
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
 "additionalData": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "setAdditionalData"(data: integer): void
public "setSourcePlayer"(livingEntity: $LivingEntity$$Type): void
public "removeAttributeModifiers"(attributeContainer: $AttributeMap$$Type): void
public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
set "additionalData"(value: integer)
set "sourcePlayer"(value: $LivingEntity$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulTetherEffect$$Type = ($SoulTetherEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulTetherEffect_ = $SoulTetherEffect$$Type;
}}
declare module "net.sweenus.simplyswords.item.RunefusedGemItem" {
import {$ValidationResult, $ValidationResult$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GemPowerFiller, $GemPowerFiller$$Type} from "net.sweenus.simplyswords.power.GemPowerFiller"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SlotAccess, $SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction, $ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$GemPowerComponent, $GemPowerComponent$$Type} from "net.sweenus.simplyswords.power.GemPowerComponent"

export class $RunefusedGemItem extends $Item implements $GemPowerFiller {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getName"(stack: $ItemStack$$Type): $Component
public "fill"(stack: $ItemStack$$Type, component: $GemPowerComponent$$Type): $ValidationResult<($GemPowerComponent)>
public "overrideOtherStackedOnMe"(stack: $ItemStack$$Type, otherStack: $ItemStack$$Type, slot: $Slot$$Type, clickType: $ClickAction$$Type, player: $Player$$Type, cursorStackReference: $SlotAccess$$Type): boolean
public "onCraftedPostProcess"(stack: $ItemStack$$Type, world: $Level$$Type): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunefusedGemItem$$Type = ($RunefusedGemItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RunefusedGemItem_ = $RunefusedGemItem$$Type;
}}
declare module "net.sweenus.simplyswords.recipe.RunicRerollRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RunicRerollRecipe, $RunicRerollRecipe$$Type} from "net.sweenus.simplyswords.recipe.RunicRerollRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $RunicRerollRecipe$Serializer implements $RecipeSerializer<($RunicRerollRecipe)> {
static readonly "PACKET_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RunicRerollRecipe)>

constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($RunicRerollRecipe)>
public "codec"(): $MapCodec<($RunicRerollRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunicRerollRecipe$Serializer$$Type = ($RunicRerollRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RunicRerollRecipe$Serializer_ = $RunicRerollRecipe$Serializer$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.HearthflameSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TwoHandedWeapon, $TwoHandedWeapon$$Type} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $HearthflameSwordItem extends $UniqueSwordItem implements $TwoHandedWeapon {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "onUseTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "releaseUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HearthflameSwordItem$$Type = ($HearthflameSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HearthflameSwordItem_ = $HearthflameSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.power.powers.WildfirePower" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$RunefusedGemPower, $RunefusedGemPower$$Type} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $WildfirePower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor()

public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WildfirePower$$Type = ($WildfirePower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WildfirePower_ = $WildfirePower$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.SoulrenderSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TwoHandedWeapon, $TwoHandedWeapon$$Type} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $SoulrenderSwordItem extends $UniqueSwordItem implements $TwoHandedWeapon {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoulrenderSwordItem$$Type = ($SoulrenderSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoulrenderSwordItem_ = $SoulrenderSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.PlagueSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $PlagueSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlagueSwordItem$$Type = ($PlagueSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlagueSwordItem_ = $PlagueSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.StormSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $StormSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "onUseTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StormSwordItem$$Type = ($StormSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StormSwordItem_ = $StormSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.FrostfallSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $FrostfallSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrostfallSwordItem$$Type = ($FrostfallSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrostfallSwordItem_ = $FrostfallSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.EmberlashSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EmberlashSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static "tooltipEffectDamage": float
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmberlashSwordItem$$Type = ($EmberlashSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmberlashSwordItem_ = $EmberlashSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.effect.AstralShiftEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $AstralShiftEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(entity: $LivingEntity$$Type, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AstralShiftEffect$$Type = ($AstralShiftEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AstralShiftEffect_ = $AstralShiftEffect$$Type;
}}
declare module "net.sweenus.simplyswords.effect.PainEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $PainEffect extends $MobEffect {
 "sourceEntity": $LivingEntity
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
 "additionalData": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "setAdditionalData"(data: integer): void
public "setSourcePlayer"(livingEntity: $LivingEntity$$Type): void
public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
set "additionalData"(value: integer)
set "sourcePlayer"(value: $LivingEntity$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PainEffect$$Type = ($PainEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PainEffect_ = $PainEffect$$Type;
}}
declare module "net.sweenus.simplyswords.power.GemPower" {
import {$PowerType, $PowerType$$Type} from "net.sweenus.simplyswords.power.PowerType"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TooltipProvider, $TooltipProvider$$Type} from "net.minecraft.world.item.component.TooltipProvider"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $GemPower implements $TooltipProvider {
static "EMPTY": $GemPower

constructor(isGreater: boolean, ...applicableTypes: ($PowerType$$Type)[])

public "isEmpty"(): boolean
public "addToTooltip"(context: $Item$TooltipContext$$Type, tooltip: $Consumer$$Type<($Component)>, type: $TooltipFlag$$Type): void
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, slot: integer, selected: boolean): void
public "applicableTypes"(): $List<($PowerType)>
public "isGreater"(): boolean
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
get "empty"(): boolean
get "greater"(): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.SimplyswordsGemPower
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.SimplyswordsGemPowerTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemPower$$Type = (Special.SimplyswordsGemPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemPower_ = $GemPower$$Type;
}}
declare module "net.sweenus.simplyswords.effect.FatalFlickerEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $FatalFlickerEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(user: $LivingEntity$$Type, amplifier: integer): boolean
public static "performDash"(user: $LivingEntity$$Type, world: $Level$$Type, radius: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FatalFlickerEffect$$Type = ($FatalFlickerEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FatalFlickerEffect_ = $FatalFlickerEffect$$Type;
}}
declare module "net.sweenus.simplyswords.recipe.RawUpgradableRecipe" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$RawUpgradableRecipe$Data, $RawUpgradableRecipe$Data$$Type} from "net.sweenus.simplyswords.recipe.RawUpgradableRecipe$Data"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $RawUpgradableRecipe {
static readonly "CODEC": $MapCodec<($RawUpgradableRecipe)>
static readonly "PACKET_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RawUpgradableRecipe)>

constructor(width: integer, height: integer, upgradableItemSlot: integer, ingredients: $NonNullList$$Type<($Ingredient$$Type)>, data: $Optional$$Type<($RawUpgradableRecipe$Data$$Type)>)

public "getWidth"(): integer
public "getHeight"(): integer
public "matches"(input: $CraftingInput$$Type): boolean
public "isMirrored"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getUpgradableItemSlot"(): integer
get "width"(): integer
get "height"(): integer
get "mirrored"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "upgradableItemSlot"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawUpgradableRecipe$$Type = ($RawUpgradableRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawUpgradableRecipe_ = $RawUpgradableRecipe$$Type;
}}
declare module "net.sweenus.simplyswords.item.SimplySwordsNetheriteSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SwordItem, $SwordItem$$Type} from "net.minecraft.world.item.SwordItem"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SimplySwordsNetheriteSwordItem extends $SwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type, ...repairIngredient: (string)[])

public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "isValidRepairItem"(stack: $ItemStack$$Type, ingredient: $ItemStack$$Type): boolean
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimplySwordsNetheriteSwordItem$$Type = ($SimplySwordsNetheriteSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimplySwordsNetheriteSwordItem_ = $SimplySwordsNetheriteSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.effect.StormEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $StormEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(pLivingEntity: $LivingEntity$$Type, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StormEffect$$Type = ($StormEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StormEffect_ = $StormEffect$$Type;
}}
declare module "net.sweenus.simplyswords.effect.FrenzyEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AttributeMap, $AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$OrbitingEffect, $OrbitingEffect$$Type} from "net.sweenus.simplyswords.effect.OrbitingEffect"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $FrenzyEffect extends $OrbitingEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "removeAttributeModifiers"(attributes: $AttributeMap$$Type): void
public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrenzyEffect$$Type = ($FrenzyEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrenzyEffect_ = $FrenzyEffect$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.MagispearSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $MagispearSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagispearSwordItem$$Type = ($MagispearSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagispearSwordItem_ = $MagispearSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.EnigmaSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EnigmaSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnigmaSwordItem$$Type = ($EnigmaSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnigmaSwordItem_ = $EnigmaSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.effect.ResilienceEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $ResilienceEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(pLivingEntity: $LivingEntity$$Type, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResilienceEffect$$Type = ($ResilienceEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResilienceEffect_ = $ResilienceEffect$$Type;
}}
declare module "net.sweenus.simplyswords.power.powers.SlowPower" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$RunefusedGemPower, $RunefusedGemPower$$Type} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $SlowPower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlowPower$$Type = ($SlowPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlowPower_ = $SlowPower$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.StarsEdgeSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $StarsEdgeSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StarsEdgeSwordItem$$Type = ($StarsEdgeSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StarsEdgeSwordItem_ = $StarsEdgeSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.power.powers.WardPower" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$RunicGemPower, $RunicGemPower$$Type} from "net.sweenus.simplyswords.power.RunicGemPower"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $WardPower extends $RunicGemPower {
static "EMPTY": $GemPower

constructor()

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type, itemStack: $ItemStack$$Type): $InteractionResultHolder<($ItemStack)>
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "getMaxUseTime"(stack: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WardPower$$Type = ($WardPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WardPower_ = $WardPower$$Type;
}}
declare module "net.sweenus.simplyswords.power.powers.ImbuedPower" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$RunefusedGemPower, $RunefusedGemPower$$Type} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $ImbuedPower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImbuedPower$$Type = ($ImbuedPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImbuedPower_ = $ImbuedPower$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.LichbladeSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TwoHandedWeapon, $TwoHandedWeapon$$Type} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $LichbladeSwordItem extends $UniqueSwordItem implements $TwoHandedWeapon {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "onUseTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "releaseUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, user: $Entity$$Type, slot: integer, selected: boolean): void
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LichbladeSwordItem$$Type = ($LichbladeSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LichbladeSwordItem_ = $LichbladeSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.EmpoweredRemnantItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $EmpoweredRemnantItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getName"(stack: $ItemStack$$Type): $Component
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmpoweredRemnantItem$$Type = ($EmpoweredRemnantItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmpoweredRemnantItem_ = $EmpoweredRemnantItem$$Type;
}}
declare module "net.sweenus.simplyswords.effect.WideOrbitingEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $WideOrbitingEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WideOrbitingEffect$$Type = ($WideOrbitingEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WideOrbitingEffect_ = $WideOrbitingEffect$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.ShadowstingSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $ShadowstingSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShadowstingSwordItem$$Type = ($ShadowstingSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShadowstingSwordItem_ = $ShadowstingSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.WraithfangSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $WraithfangSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WraithfangSwordItem$$Type = ($WraithfangSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WraithfangSwordItem_ = $WraithfangSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.power.RunicGemPower" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"

export class $RunicGemPower extends $GemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type, itemStack: $ItemStack$$Type): $InteractionResultHolder<($ItemStack)>
public "usageTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "onStoppedUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "getMaxUseTime"(stack: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunicGemPower$$Type = ($RunicGemPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RunicGemPower_ = $RunicGemPower$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.WatchingWarglaiveItem" {
import {$WatcherSwordItem, $WatcherSwordItem$$Type} from "net.sweenus.simplyswords.item.custom.WatcherSwordItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"

export class $WatchingWarglaiveItem extends $WatcherSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WatchingWarglaiveItem$$Type = ($WatchingWarglaiveItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WatchingWarglaiveItem_ = $WatchingWarglaiveItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.SimplySwordsSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SwordItem, $SwordItem$$Type} from "net.minecraft.world.item.SwordItem"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SimplySwordsSwordItem extends $SwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type, ...repairIngredient: (string)[])
constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "isValidRepairItem"(stack: $ItemStack$$Type, ingredient: $ItemStack$$Type): boolean
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimplySwordsSwordItem$$Type = ($SimplySwordsSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimplySwordsSwordItem_ = $SimplySwordsSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.BrimstoneClaymoreItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TwoHandedWeapon, $TwoHandedWeapon$$Type} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $BrimstoneClaymoreItem extends $UniqueSwordItem implements $TwoHandedWeapon {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrimstoneClaymoreItem$$Type = ($BrimstoneClaymoreItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrimstoneClaymoreItem_ = $BrimstoneClaymoreItem$$Type;
}}
declare module "net.sweenus.simplyswords.power.powers.FrostWardPower" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$RunefusedGemPower, $RunefusedGemPower$$Type} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $FrostWardPower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor()

public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, slot: integer, selected: boolean): void
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrostWardPower$$Type = ($FrostWardPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrostWardPower_ = $FrostWardPower$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.StormsEdgeSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $StormsEdgeSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "onUseTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "getUseDuration"(stack: $ItemStack$$Type, user: $LivingEntity$$Type): integer
public "releaseUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "getUseAnimation"(stack: $ItemStack$$Type): $UseAnim
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StormsEdgeSwordItem$$Type = ($StormsEdgeSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StormsEdgeSwordItem_ = $StormsEdgeSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.TwoHandedWeapon" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TwoHandedWeapon {

}

export namespace $TwoHandedWeapon {
const probejs$$marker: never
}
export class $TwoHandedWeapon$$Static implements $TwoHandedWeapon {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TwoHandedWeapon$$Type = ($TwoHandedWeapon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TwoHandedWeapon_ = $TwoHandedWeapon$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.HiveheartSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $HiveheartSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HiveheartSwordItem$$Type = ($HiveheartSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HiveheartSwordItem_ = $HiveheartSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.power.powers.BerserkPower" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NetherGemPower, $NetherGemPower$$Type} from "net.sweenus.simplyswords.power.NetherGemPower"
import {$List, $List$$Type} from "java.util.List"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $BerserkPower extends $NetherGemPower {
static "EMPTY": $GemPower

constructor()

public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BerserkPower$$Type = ($BerserkPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BerserkPower_ = $BerserkPower$$Type;
}}
declare module "net.sweenus.simplyswords.effect.ElementalVortexEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AttributeMap, $AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$OrbitingEffect, $OrbitingEffect$$Type} from "net.sweenus.simplyswords.effect.OrbitingEffect"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $ElementalVortexEffect extends $OrbitingEffect {
 "sourceEntity": $LivingEntity
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
 "additionalData": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "setAdditionalData"(data: integer): void
public "setSourcePlayer"(livingEntity: $LivingEntity$$Type): void
public "removeAttributeModifiers"(attributes: $AttributeMap$$Type): void
public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
set "additionalData"(value: integer)
set "sourcePlayer"(value: $LivingEntity$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElementalVortexEffect$$Type = ($ElementalVortexEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElementalVortexEffect_ = $ElementalVortexEffect$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.MoltenEdgeSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $MoltenEdgeSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoltenEdgeSwordItem$$Type = ($MoltenEdgeSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoltenEdgeSwordItem_ = $MoltenEdgeSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.power.powers.ImmolationPower" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$RunicGemPower, $RunicGemPower$$Type} from "net.sweenus.simplyswords.power.RunicGemPower"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $ImmolationPower extends $RunicGemPower {
static "EMPTY": $GemPower

constructor()

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type, itemStack: $ItemStack$$Type): $InteractionResultHolder<($ItemStack)>
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "getMaxUseTime"(stack: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmolationPower$$Type = ($ImmolationPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmolationPower_ = $ImmolationPower$$Type;
}}
declare module "net.sweenus.simplyswords.power.GemPower$EmptyGemPower" {
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"

export class $GemPower$EmptyGemPower extends $GemPower {
static "EMPTY": $GemPower

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GemPower$EmptyGemPower$$Type = ($GemPower$EmptyGemPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GemPower$EmptyGemPower_ = $GemPower$EmptyGemPower$$Type;
}}
declare module "net.sweenus.simplyswords.effect.VoidcloakEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AttributeMap, $AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$OrbitingEffect, $OrbitingEffect$$Type} from "net.sweenus.simplyswords.effect.OrbitingEffect"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $VoidcloakEffect extends $OrbitingEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "removeAttributeModifiers"(attributes: $AttributeMap$$Type): void
public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoidcloakEffect$$Type = ($VoidcloakEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoidcloakEffect_ = $VoidcloakEffect$$Type;
}}
declare module "net.sweenus.simplyswords.power.powers.MomentumPower" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$RunicGemPower, $RunicGemPower$$Type} from "net.sweenus.simplyswords.power.RunicGemPower"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"

export class $MomentumPower extends $RunicGemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type, itemStack: $ItemStack$$Type): $InteractionResultHolder<($ItemStack)>
public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "usageTick"(world: $Level$$Type, user: $LivingEntity$$Type, stack: $ItemStack$$Type, remainingUseTicks: integer): void
public "onStoppedUsing"(stack: $ItemStack$$Type, world: $Level$$Type, user: $LivingEntity$$Type, remainingUseTicks: integer): void
public "getMaxUseTime"(stack: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MomentumPower$$Type = ($MomentumPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MomentumPower_ = $MomentumPower$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.SunfireSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $SunfireSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SunfireSwordItem$$Type = ($SunfireSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SunfireSwordItem_ = $SunfireSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.power.powers.FreezePower" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$RunefusedGemPower, $RunefusedGemPower$$Type} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $FreezePower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor()

public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FreezePower$$Type = ($FreezePower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FreezePower_ = $FreezePower$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.RibboncleaverSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $RibboncleaverSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RibboncleaverSwordItem$$Type = ($RibboncleaverSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RibboncleaverSwordItem_ = $RibboncleaverSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.effect.OrbitingEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AttributeMap, $AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $OrbitingEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "removeAttributeModifiers"(attributes: $AttributeMap$$Type): void
public "shouldApplyEffectTickThisTick"(duration: integer, amplifier: integer): boolean
public "onEffectStarted"(entity: $LivingEntity$$Type, amplifier: integer): void
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OrbitingEffect$$Type = ($OrbitingEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OrbitingEffect_ = $OrbitingEffect$$Type;
}}
declare module "net.sweenus.simplyswords.power.powers.RadiancePower" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NetherGemPower, $NetherGemPower$$Type} from "net.sweenus.simplyswords.power.NetherGemPower"
import {$List, $List$$Type} from "java.util.List"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $RadiancePower extends $NetherGemPower {
static "EMPTY": $GemPower

constructor()

public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadiancePower$$Type = ($RadiancePower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadiancePower_ = $RadiancePower$$Type;
}}
declare module "net.sweenus.simplyswords.power.powers.ZephyrPower" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$RunefusedGemPower, $RunefusedGemPower$$Type} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $ZephyrPower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZephyrPower$$Type = ($ZephyrPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZephyrPower_ = $ZephyrPower$$Type;
}}
declare module "net.sweenus.simplyswords.item.ContainedRemnantItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $ContainedRemnantItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getName"(stack: $ItemStack$$Type): $Component
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainedRemnantItem$$Type = ($ContainedRemnantItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainedRemnantItem_ = $ContainedRemnantItem$$Type;
}}
declare module "net.sweenus.simplyswords.effect.ImmolationEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$WideOrbitingEffect, $WideOrbitingEffect$$Type} from "net.sweenus.simplyswords.effect.WideOrbitingEffect"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AttributeMap, $AttributeMap$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeMap"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $ImmolationEffect extends $WideOrbitingEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "removeAttributeModifiers"(attributes: $AttributeMap$$Type): void
public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(pLivingEntity: $LivingEntity$$Type, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmolationEffect$$Type = ($ImmolationEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmolationEffect_ = $ImmolationEffect$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.WaxweaverSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $WaxweaverSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaxweaverSwordItem$$Type = ($WaxweaverSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaxweaverSwordItem_ = $WaxweaverSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.MagiscytheSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $MagiscytheSwordItem extends $UniqueSwordItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MagiscytheSwordItem$$Type = ($MagiscytheSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MagiscytheSwordItem_ = $MagiscytheSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.recipe.UpgradeUniqueRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ShapedRecipe, $ShapedRecipe$$Type} from "net.minecraft.world.item.crafting.ShapedRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$RawUpgradableRecipe, $RawUpgradableRecipe$$Type} from "net.sweenus.simplyswords.recipe.RawUpgradableRecipe"

export class $UpgradeUniqueRecipe extends $ShapedRecipe {
 "result": $ItemStack
readonly "pattern": $ShapedRecipePattern

constructor(group: string, category: $CraftingBookCategory$$Type, raw: $RawUpgradableRecipe$$Type, result: $ItemStack$$Type, showNotification: boolean)

public "getWidth"(): integer
public "getHeight"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(craftingRecipeInput: $CraftingInput$$Type, world: $Level$$Type): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "assemble"(craftingRecipeInput: $CraftingInput$$Type, wrapperLookup: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "canCraftInDimensions"(width: integer, height: integer): boolean
get "width"(): integer
get "height"(): integer
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeUniqueRecipe$$Type = ($UpgradeUniqueRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeUniqueRecipe_ = $UpgradeUniqueRecipe$$Type;
}}
declare module "net.sweenus.simplyswords.item.RunicTabletItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $RunicTabletItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getName"(stack: $ItemStack$$Type): $Component
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunicTabletItem$$Type = ($RunicTabletItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RunicTabletItem_ = $RunicTabletItem$$Type;
}}
declare module "net.sweenus.simplyswords.item.custom.WhisperwindSwordItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Tier, $Tier$$Type} from "net.minecraft.world.item.Tier"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$UniqueSwordItem, $UniqueSwordItem$$Type} from "net.sweenus.simplyswords.item.UniqueSwordItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TwoHandedWeapon, $TwoHandedWeapon$$Type} from "net.sweenus.simplyswords.item.TwoHandedWeapon"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $WhisperwindSwordItem extends $UniqueSwordItem implements $TwoHandedWeapon {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
 "tier": $Tier
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(toolMaterial: $Tier$$Type, settings: $Item$Properties$$Type)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WhisperwindSwordItem$$Type = ($WhisperwindSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WhisperwindSwordItem_ = $WhisperwindSwordItem$$Type;
}}
declare module "net.sweenus.simplyswords.power.powers.WeakenPower" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$RunefusedGemPower, $RunefusedGemPower$$Type} from "net.sweenus.simplyswords.power.RunefusedGemPower"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GemPower, $GemPower$$Type} from "net.sweenus.simplyswords.power.GemPower"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $WeakenPower extends $RunefusedGemPower {
static "EMPTY": $GemPower

constructor(isGreater: boolean)

public "appendTooltip"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type, isRunic: boolean): void
public "postHit"(stack: $ItemStack$$Type, target: $LivingEntity$$Type, attacker: $LivingEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeakenPower$$Type = ($WeakenPower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeakenPower_ = $WeakenPower$$Type;
}}
declare module "net.sweenus.simplyswords.effect.RibbonwrathEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $RibbonwrathEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(statusEffectCategory: $MobEffectCategory$$Type, color: integer)

public "shouldApplyEffectTickThisTick"(pDuration: integer, pAmplifier: integer): boolean
public "applyEffectTick"(pLivingEntity: $LivingEntity$$Type, pAmplifier: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RibbonwrathEffect$$Type = ($RibbonwrathEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RibbonwrathEffect_ = $RibbonwrathEffect$$Type;
}}
