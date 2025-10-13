declare module "net.luckystudios.luckyswardrobe.items.cosmetics.custom.VillagerProfessionArmorItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CosmeticItem, $CosmeticItem$$Type} from "net.luckystudios.luckyswardrobe.items.cosmetics.custom.CosmeticItem"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ArmorMaterial$Layer, $ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $VillagerProfessionArmorItem extends $CosmeticItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
 "COSMETIC_PATH": StringJS
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $ResourceLocation$$Type, arg1: $Item$Properties$$Type)

public "getArmorTexture"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $EquipmentSlot$$Type, arg3: $ArmorMaterial$Layer$$Type, arg4: boolean): $ResourceLocation
public "getDefaultAttributeModifiers"(arg0: $ItemStack$$Type): $ItemAttributeModifiers
public "getDefaultAttributeModifiers"(): $ItemAttributeModifiers
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "defaultAttributeModifiers"(): $ItemAttributeModifiers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerProfessionArmorItem$$Type = ($VillagerProfessionArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerProfessionArmorItem_ = $VillagerProfessionArmorItem$$Type;
}}
declare module "net.luckystudios.luckyswardrobe.items.cosmetics.custom.HoodArmorItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ArmorMaterial$Layer, $ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ArmorItem, $ArmorItem$$Type} from "net.minecraft.world.item.ArmorItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $HoodArmorItem extends $ArmorItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
 "COSMETIC_PATH": StringJS
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isDamageable"(arg0: $ItemStack$$Type): boolean
public "getArmorTexture"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $EquipmentSlot$$Type, arg3: $ArmorMaterial$Layer$$Type, arg4: boolean): $ResourceLocation
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoodArmorItem$$Type = ($HoodArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoodArmorItem_ = $HoodArmorItem$$Type;
}}
declare module "net.luckystudios.luckyswardrobe.items.cosmetics.custom.OutfitArmorItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ArmorMaterial$Layer, $ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ArmorItem, $ArmorItem$$Type} from "net.minecraft.world.item.ArmorItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $OutfitArmorItem extends $ArmorItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
 "COSMETIC_PATH": StringJS
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $ArmorItem$Type$$Type, arg1: $Item$Properties$$Type)

public "getArmorTexture"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $EquipmentSlot$$Type, arg3: $ArmorMaterial$Layer$$Type, arg4: boolean): $ResourceLocation
public "canWalkOnPowderedSnow"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutfitArmorItem$$Type = ($OutfitArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OutfitArmorItem_ = $OutfitArmorItem$$Type;
}}
declare module "net.luckystudios.luckyswardrobe.items.cosmetics.custom.CosmeticItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ArmorMaterial$Layer, $ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ArmorItem, $ArmorItem$$Type} from "net.minecraft.world.item.ArmorItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $CosmeticItem extends $ArmorItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
 "COSMETIC_PATH": StringJS
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $ArmorItem$Type$$Type, arg1: $Item$Properties$$Type)

public "isDamageable"(arg0: $ItemStack$$Type): boolean
public "getArmorTexture"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $EquipmentSlot$$Type, arg3: $ArmorMaterial$Layer$$Type, arg4: boolean): $ResourceLocation
public "getDefaultAttributeModifiers"(): $ItemAttributeModifiers
public "getDefaultAttributeModifiers"(arg0: $ItemStack$$Type): $ItemAttributeModifiers
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "defaultAttributeModifiers"(): $ItemAttributeModifiers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmeticItem$$Type = ($CosmeticItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmeticItem_ = $CosmeticItem$$Type;
}}
