declare module "immersive_armors.item.ExtendedArmorMaterial" {
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$Piece, $Piece$$Type} from "immersive_armors.client.render.entity.piece.Piece"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List, $List$$Type} from "java.util.List"
import {$EnumMap, $EnumMap$$Type} from "java.util.EnumMap"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$ArmorEffect, $ArmorEffect$$Type} from "immersive_armors.armor_effects.ArmorEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $ExtendedArmorMaterial {

constructor(name: string)

public "getName"(): string
public "full"(pieceSupplier: $Piece$$Type): $ExtendedArmorMaterial
public "upper"(pieceSupplier: $Piece$$Type): $ExtendedArmorMaterial
public "lower"(pieceSupplier: $Piece$$Type): $ExtendedArmorMaterial
public "color"(color: integer): $ExtendedArmorMaterial
public "head"(pieceSupplier: $Piece$$Type): $ExtendedArmorMaterial
public "durabilityMultiplier"(durabilityMultiplier: integer): $ExtendedArmorMaterial
public "protectionAmount"(helmet: integer, chestplate: integer, legging: integer, boots: integer): $ExtendedArmorMaterial
public "knockbackReduction"(knockbackReduction: float): $ExtendedArmorMaterial
public "getRegistryReference"(): $Holder<($ArmorMaterial)>
public "getKnockbackResistance"(): float
public "getWaterMovement"(): float
public "hidesSecondLayer"(head: boolean, chest: boolean, legs: boolean, feet: boolean): $ExtendedArmorMaterial
public "getEnchantability"(): integer
public "getColor"(): integer
public "getEquipSound"(): $Holder<($SoundEvent)>
public "getEffects"(): $List<($ArmorEffect)>
public "getMaterial"(): $ArmorMaterial
public "getToughness"(): float
public "getWeight"(): float
public "addLoot"(name: string, chance: float): $ExtendedArmorMaterial
public "feet"(pieceSupplier: $Piece$$Type): $ExtendedArmorMaterial
public "legs"(pieceSupplier: $Piece$$Type): $ExtendedArmorMaterial
public "weight"(weight: float): $ExtendedArmorMaterial
public "effect"(effect: $ArmorEffect$$Type): $ExtendedArmorMaterial
public "chest"(pieceSupplier: $Piece$$Type): $ExtendedArmorMaterial
public "shouldHideSecondLayer"(): (boolean)[]
public "repairIngredient"(repairIngredient: $Supplier$$Type<($Ingredient$$Type)>): $ExtendedArmorMaterial
public "getRepairIngredient"(): $Ingredient
public "enchantability"(enchantability: integer): $ExtendedArmorMaterial
public "toughness"(toughness: float): $ExtendedArmorMaterial
public "equipSound"(equipSound: $Holder$$Type<($SoundEvent)>): $ExtendedArmorMaterial
public "equipSound"(equipSound: $SoundEvent$$Type): $ExtendedArmorMaterial
public "getProtection"(slot: $ArmorItem$Type$$Type): integer
public "getProtection"(): $EnumMap<($ArmorItem$Type), (integer)>
public "isAntiSkeleton"(): boolean
public "getLoot"(): $Map<(string), (float)>
public "getPieces"(slot: $EquipmentSlot$$Type): $List<($Piece)>
public "antiSkeleton"(): $ExtendedArmorMaterial
public "hideCape"(): $ExtendedArmorMaterial
public "waterMovement"(waterMovement: float): $ExtendedArmorMaterial
public "shouldHideCape"(): boolean
public "registerVanillaMaterial"(): void
public "getDurabilityMultiplier"(): integer
get "name"(): string
get "registryReference"(): $Holder<($ArmorMaterial)>
get "knockbackResistance"(): float
get "effects"(): $List<($ArmorEffect)>
get "material"(): $ArmorMaterial
get "protection"(): $EnumMap<($ArmorItem$Type), (integer)>
get "loot"(): $Map<(string), (float)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedArmorMaterial$$Type = ($ExtendedArmorMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedArmorMaterial_ = $ExtendedArmorMaterial$$Type;
}}
declare module "immersive_armors.item.ExtendedArmorItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ArmorItem, $ArmorItem$$Type} from "net.minecraft.world.item.ArmorItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ExtendedArmorMaterial, $ExtendedArmorMaterial$$Type} from "immersive_armors.item.ExtendedArmorMaterial"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $ExtendedArmorItem extends $ArmorItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(settings: $Item$Properties$$Type, slot: $ArmorItem$Type$$Type, material: $ExtendedArmorMaterial$$Type)

public "refreshAttributes"(): void
public "getDefaultAttributeModifiers"(): $ItemAttributeModifiers
public "inventoryTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $Entity$$Type, slot: integer, selected: boolean): void
public "getDefense"(): integer
public "getToughness"(): float
public "applyArmorToDamage"(entity: $LivingEntity$$Type, source: $DamageSource$$Type, amount: float, armor: $ItemStack$$Type): float
public "applyArmorToAttack"(target: $LivingEntity$$Type, source: $DamageSource$$Type, amount: float, armor: $ItemStack$$Type): float
public "getExtendedMaterial"(): $ExtendedArmorMaterial
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public static "get"(arg0: $ItemStack$$Type): $Equipable
get "defaultAttributeModifiers"(): $ItemAttributeModifiers
get "defense"(): integer
get "toughness"(): float
get "extendedMaterial"(): $ExtendedArmorMaterial
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedArmorItem$$Type = ($ExtendedArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedArmorItem_ = $ExtendedArmorItem$$Type;
}}
declare module "immersive_armors.item.DyeableExtendedArmorItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ExtendedArmorItem, $ExtendedArmorItem$$Type} from "immersive_armors.item.ExtendedArmorItem"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ExtendedArmorMaterial, $ExtendedArmorMaterial$$Type} from "immersive_armors.item.ExtendedArmorMaterial"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $DyeableExtendedArmorItem extends $ExtendedArmorItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(settings: $Item$Properties$$Type, slot: $ArmorItem$Type$$Type, material: $ExtendedArmorMaterial$$Type)

public "getColor"(stack: $ItemStack$$Type): integer
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public static "get"(arg0: $ItemStack$$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyeableExtendedArmorItem$$Type = ($DyeableExtendedArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DyeableExtendedArmorItem_ = $DyeableExtendedArmorItem$$Type;
}}
