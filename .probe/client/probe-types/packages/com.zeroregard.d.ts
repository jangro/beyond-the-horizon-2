declare module "com.zeroregard.ars_technica.block.PreciseRelay" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$LootParams$Builder, $LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IArsTechnicaWrenchAdjustable, $IArsTechnicaWrenchAdjustable$$Type} from "com.zeroregard.ars_technica.helpers.mixin.IArsTechnicaWrenchAdjustable"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Relay, $Relay$$Type} from "com.hollingsworth.arsnouveau.common.block.Relay"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PreciseRelay extends $Relay implements $IArsTechnicaWrenchAdjustable {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "shape": $VoxelShape
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
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "handleWrenching"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): void
public static "createTickerHelper"<E extends $BlockEntity, A extends $BlockEntity>(arg0: $BlockEntityType$$Type<(A)>, arg1: $BlockEntityType$$Type<(E)>, arg2: $BlockEntityTicker$$Type<(E)>): $BlockEntityTicker<(A)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PreciseRelay$$Type = ($PreciseRelay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PreciseRelay_ = $PreciseRelay$$Type;
}}
declare module "com.zeroregard.ars_technica.armor.TechnomancerArmor" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ArmorMaterial$Layer, $ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$ISpellModifierItem, $ISpellModifierItem$$Type} from "com.hollingsworth.arsnouveau.api.item.ISpellModifierItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$Spell, $Spell$$Type} from "com.hollingsworth.arsnouveau.api.spell.Spell"
import {$Map, $Map$$Type} from "java.util.Map"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$GeoRenderProvider, $GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import {$AnimatedMagicArmor, $AnimatedMagicArmor$$Type} from "com.hollingsworth.arsnouveau.common.armor.AnimatedMagicArmor"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$GeoModel, $GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"
import {$IManaDiscountEquipment, $IManaDiscountEquipment$$Type} from "com.hollingsworth.arsnouveau.api.mana.IManaDiscountEquipment"

export class $TechnomancerArmor extends $AnimatedMagicArmor implements $ISpellModifierItem, $IManaDiscountEquipment {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "model": $GeoModel<($AnimatedMagicArmor)>
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $ArmorItem$Type$$Type, arg1: StringJS)

public "getColor"(arg0: $ItemStack$$Type): StringJS
public "getMinTier"(): integer
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getArmorTexture"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $EquipmentSlot$$Type, arg3: $ArmorMaterial$Layer$$Type, arg4: boolean): $ResourceLocation
public "getDefaultAttributeModifiers"(arg0: $ItemStack$$Type): $ItemAttributeModifiers
public "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
public "getManaDiscount"(arg0: $ItemStack$$Type, arg1: $Spell$$Type): integer
public static "isWearingFullSet"(arg0: $LivingEntity$$Type): boolean
public "addInformationAfterShift"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
public "getManaDiscount"(arg0: $ItemStack$$Type): integer
public "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
public static "getId"(arg0: $ItemStack$$Type): long
public static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "minTier"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TechnomancerArmor$$Type = ($TechnomancerArmor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TechnomancerArmor_ = $TechnomancerArmor$$Type;
}}
declare module "com.zeroregard.ars_technica.client.particles.SpiralDustParticleType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$SpiralDustParticleTypeData, $SpiralDustParticleTypeData$$Type} from "com.zeroregard.ars_technica.client.particles.SpiralDustParticleTypeData"

export class $SpiralDustParticleType extends $ParticleType<($SpiralDustParticleTypeData)> {

constructor()

public "codec"(): $MapCodec<($SpiralDustParticleTypeData)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($SpiralDustParticleTypeData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiralDustParticleType$$Type = ($SpiralDustParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiralDustParticleType_ = $SpiralDustParticleType$$Type;
}}
declare module "com.zeroregard.ars_technica.helpers.mixin.IArsTechnicaWrenchAdjustable" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IArsTechnicaWrenchAdjustable {

 "handleWrenching"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): void

(arg0: $Level, arg1: $BlockPos, arg2: $Player): void
}

export namespace $IArsTechnicaWrenchAdjustable {
const probejs$$marker: never
}
export class $IArsTechnicaWrenchAdjustable$$Static implements $IArsTechnicaWrenchAdjustable {


 "handleWrenching"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IArsTechnicaWrenchAdjustable$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: $Player) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IArsTechnicaWrenchAdjustable_ = $IArsTechnicaWrenchAdjustable$$Type;
}}
declare module "com.zeroregard.ars_technica.api.ITechnomancerAware" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITechnomancerAware {

 "setTechnomancerNearby"(arg0: boolean): void
 "isTechnomancerNearby"(): boolean
set "technomancerNearby"(value: boolean)
get "technomancerNearby"(): boolean
}

export namespace $ITechnomancerAware {
const probejs$$marker: never
}
export class $ITechnomancerAware$$Static implements $ITechnomancerAware {


 "setTechnomancerNearby"(arg0: boolean): void
 "isTechnomancerNearby"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITechnomancerAware$$Type = ($ITechnomancerAware);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITechnomancerAware_ = $ITechnomancerAware$$Type;
}}
declare module "com.zeroregard.ars_technica.recipe.TechnomancerArmorRecipe" {
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

export class $TechnomancerArmorRecipe extends $EnchantingApparatusRecipe implements $ITextOutput {
 "tier": integer

constructor(arg0: $Ingredient$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Ingredient$$Type)>, arg3: integer)

public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $ApparatusRecipeInput$$Type, arg1: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "excludeJei"(): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $ApparatusRecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
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
export type $TechnomancerArmorRecipe$$Type = ($TechnomancerArmorRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TechnomancerArmorRecipe_ = $TechnomancerArmorRecipe$$Type;
}}
declare module "com.zeroregard.ars_technica.block.SourceMotorBlock" {
import {$IBE, $IBE$$Type} from "com.simibubi.create.foundation.block.IBE"
import {$LootParams$Builder, $LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$DirectionalKineticBlock, $DirectionalKineticBlock$$Type} from "com.simibubi.create.content.kinetics.base.DirectionalKineticBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$SourceMotorBlockEntity, $SourceMotorBlockEntity$$Type} from "com.zeroregard.ars_technica.block.SourceMotorBlockEntity"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $SourceMotorBlock extends $DirectionalKineticBlock implements $IBE<($SourceMotorBlockEntity)> {
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
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "hideStressImpact"(): boolean
public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public "getBlockEntityClass"(): $Class<($SourceMotorBlockEntity)>
public "getBlockEntityType"(): $BlockEntityType<($SourceMotorBlockEntity)>
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $SourceMotorBlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($SourceMotorBlockEntity)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($SourceMotorBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($SourceMotorBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($SourceMotorBlockEntity)>): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "asHolder"(): $Holder<(any)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
get "blockEntityClass"(): $Class<($SourceMotorBlockEntity)>
get "blockEntityType"(): $BlockEntityType<($SourceMotorBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourceMotorBlock$$Type = ($SourceMotorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SourceMotorBlock_ = $SourceMotorBlock$$Type;
}}
declare module "com.zeroregard.ars_technica.block.SourceMotorBlockEntity" {
import {$GeneratingKineticBlockEntity, $GeneratingKineticBlockEntity$$Type} from "com.simibubi.create.content.kinetics.base.GeneratingKineticBlockEntity"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$List, $List$$Type} from "java.util.List"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$$Type} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SourceMotorBlockEntity extends $GeneratingKineticBlockEntity {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
static readonly "MAX_SPEED": integer
 "generatedStressUnitsRatio": integer
 "updateSpeed": boolean
 "reActivateSource": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "tick"(): void
public "initialize"(): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "setPowered"(arg0: boolean): void
public "isFueled"(): boolean
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getGeneratedSpeed"(): float
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "calculateAddedStressCapacity"(): float
public "setGeneratedStressUnitsRatio"(arg0: integer): void
public "getUpdatePacket"(): $Packet<(any)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
set "powered"(value: boolean)
get "fueled"(): boolean
get "generatedSpeed"(): float
set "generatedStressUnitsRatio"(value: integer)
get "updatePacket"(): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SourceMotorBlockEntity$$Type = ($SourceMotorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SourceMotorBlockEntity_ = $SourceMotorBlockEntity$$Type;
}}
declare module "com.zeroregard.ars_technica.recipe.TechnomancerArmorRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$TechnomancerArmorRecipe, $TechnomancerArmorRecipe$$Type} from "com.zeroregard.ars_technica.recipe.TechnomancerArmorRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $TechnomancerArmorRecipe$Serializer implements $RecipeSerializer<($TechnomancerArmorRecipe)> {
static "CODEC": $MapCodec<($TechnomancerArmorRecipe)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($TechnomancerArmorRecipe)>

constructor()

public "codec"(): $MapCodec<($TechnomancerArmorRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($TechnomancerArmorRecipe)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TechnomancerArmorRecipe$Serializer$$Type = ($TechnomancerArmorRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TechnomancerArmorRecipe$Serializer_ = $TechnomancerArmorRecipe$Serializer$$Type;
}}
declare module "com.zeroregard.ars_technica.item.TransmutationFocus" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractSpellPart, $AbstractSpellPart$$Type} from "com.hollingsworth.arsnouveau.api.spell.AbstractSpellPart"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Rarity, $Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SpellStats$Builder, $SpellStats$Builder$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellStats$Builder"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ArsNouveauCurio, $ArsNouveauCurio$$Type} from "com.hollingsworth.arsnouveau.api.item.ArsNouveauCurio"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SlotContext, $SlotContext$$Type} from "top.theillusivec4.curios.api.SlotContext"
import {$ISpellModifierItem, $ISpellModifierItem$$Type} from "com.hollingsworth.arsnouveau.api.item.ISpellModifierItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$SpellContext, $SpellContext$$Type} from "com.hollingsworth.arsnouveau.api.spell.SpellContext"

export class $TransmutationFocus extends $ArsNouveauCurio implements $ISpellModifierItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
 "tooltip": $List<($Component)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "rarity": $Rarity
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "onEquip"(arg0: $SlotContext$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "applyItemModifiers"(arg0: $ItemStack$$Type, arg1: $SpellStats$Builder$$Type, arg2: $AbstractSpellPart$$Type, arg3: $HitResult$$Type, arg4: $Level$$Type, arg5: $LivingEntity$$Type, arg6: $SpellContext$$Type): $SpellStats$Builder
public "addInformationAfterShift"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "applyModifiers"(arg0: $SpellStats$Builder$$Type, arg1: $AbstractSpellPart$$Type, arg2: $HitResult$$Type, arg3: $Level$$Type, arg4: $LivingEntity$$Type, arg5: $SpellContext$$Type): $SpellStats$Builder
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransmutationFocus$$Type = ($TransmutationFocus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransmutationFocus_ = $TransmutationFocus$$Type;
}}
declare module "com.zeroregard.ars_technica.item.SpyMonocle" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $SpyMonocle extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "ZOOM_FOV_MODIFIER": float
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ZOOM_SENSITIVITY_MODIFIER": float
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public static "isZoomed"(arg0: $ItemStack$$Type): boolean
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpyMonocle$$Type = ($SpyMonocle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpyMonocle_ = $SpyMonocle$$Type;
}}
declare module "com.zeroregard.ars_technica.client.particles.SpiralDustParticleTypeData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$ParticleColor, $ParticleColor$$Type} from "com.hollingsworth.arsnouveau.client.particle.ParticleColor"

export class $SpiralDustParticleTypeData implements $ParticleOptions {
static readonly "CODEC": $MapCodec<($SpiralDustParticleTypeData)>
 "color": $ParticleColor
 "size": float
 "disableDepthTest": boolean
 "alpha": float
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SpiralDustParticleTypeData)>
 "age": integer

constructor(arg0: $ParticleType$$Type<($SpiralDustParticleTypeData$$Type)>, arg1: $ParticleColor$$Type, arg2: boolean, arg3: float, arg4: float, arg5: integer)
constructor(arg0: $ParticleType$$Type<($SpiralDustParticleTypeData$$Type)>, arg1: $ParticleColor$$Type, arg2: boolean)
constructor(arg0: $ParticleColor$$Type, arg1: boolean, arg2: float, arg3: float, arg4: integer)
constructor(arg0: float, arg1: float, arg2: float, arg3: boolean, arg4: float, arg5: float, arg6: integer)

public "getType"(): $ParticleType<($SpiralDustParticleTypeData)>
public static "fromNetwork"(arg0: $RegistryFriendlyByteBuf$$Type): $SpiralDustParticleTypeData
public static "toNetwork"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: $SpiralDustParticleTypeData$$Type): void
get "type"(): $ParticleType<($SpiralDustParticleTypeData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiralDustParticleTypeData$$Type = ($SpiralDustParticleTypeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiralDustParticleTypeData_ = $SpiralDustParticleTypeData$$Type;
}}
declare module "com.zeroregard.ars_technica.item.RunicSpanner" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$WrenchItem, $WrenchItem$$Type} from "com.simibubi.create.content.equipment.wrench.WrenchItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IClientItemExtensions, $IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $RunicSpanner extends $WrenchItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "isFoil"(arg0: $ItemStack$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "initializeClient"(arg0: $Consumer$$Type<($IClientItemExtensions)>): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RunicSpanner$$Type = ($RunicSpanner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RunicSpanner_ = $RunicSpanner$$Type;
}}
