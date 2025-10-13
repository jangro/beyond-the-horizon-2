declare module "immersive_armors.armor_effects.ArmorEffect" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $ArmorEffect {

constructor()

public "equippedTick"(stack: $ItemStack$$Type, world: $Level$$Type, entity: $LivingEntity$$Type, slot: integer): void
public "receiveCommand"(armor: $ItemStack$$Type, world: $Level$$Type, entity: $LivingEntity$$Type, slot: integer, command: StringJS): void
public "appendTooltip"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, type: $TooltipFlag$$Type): void
public "applyArmorToDamage"(entity: $LivingEntity$$Type, source: $DamageSource$$Type, amount: float, armor: $ItemStack$$Type): float
public "applyArmorToAttack"(target: $LivingEntity$$Type, source: $DamageSource$$Type, amount: float, armor: $ItemStack$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmorEffect$$Type = ($ArmorEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArmorEffect_ = $ArmorEffect$$Type;
}}
