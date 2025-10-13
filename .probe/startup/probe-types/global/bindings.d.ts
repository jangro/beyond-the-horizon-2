import {$Stats, $Stats$$Type} from "net.minecraft.stats.Stats"
import {$AnimationHolder, $AnimationHolder$$Type} from "io.redspace.ironsspellbooks.api.util.AnimationHolder"
import {$NativeEventWrapper, $NativeEventWrapper$$Type} from "dev.latvian.mods.kubejs.neoforge.NativeEventWrapper"
import {$FluidAmounts, $FluidAmounts$$Type} from "dev.latvian.mods.kubejs.util.FluidAmounts"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$WispAttackGoal, $WispAttackGoal$$Type} from "io.redspace.ironsspellbooks.entity.mobs.goals.WispAttackGoal"
import {$TextWrapper, $TextWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.TextWrapper"
import {$WizardRecoverGoal, $WizardRecoverGoal$$Type} from "io.redspace.ironsspellbooks.entity.mobs.goals.WizardRecoverGoal"
import {$SpellBarrageGoal, $SpellBarrageGoal$$Type} from "io.redspace.ironsspellbooks.entity.mobs.goals.SpellBarrageGoal"
import {$TradeItem, $TradeItem$$Type} from "com.almostreliable.morejs.features.villager.TradeItem"
import {$BlockPredicate, $BlockPredicate$$Type} from "net.minecraft.advancements.critereon.BlockPredicate"
import {$Vector4f, $Vector4f$$Type} from "org.joml.Vector4f"
import {$MobEffectsPredicate, $MobEffectsPredicate$$Type} from "net.minecraft.advancements.critereon.MobEffectsPredicate"
import {$SpellData, $SpellData$$Type} from "io.redspace.ironsspellbooks.api.spells.SpellData"
import {$ICurioRenderer, $ICurioRenderer$$Type} from "top.theillusivec4.curios.api.client.ICurioRenderer"
import {$SpellRarity, $SpellRarity$$Type} from "io.redspace.ironsspellbooks.api.spells.SpellRarity"
import {$BlockStateProperties, $BlockStateProperties$$Type} from "net.minecraft.world.level.block.state.properties.BlockStateProperties"
import {$UUIDWrapper, $UUIDWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.UUIDWrapper"
import {$RegistryWrapper, $RegistryWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.RegistryWrapper"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$JavaWrapper, $JavaWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.JavaWrapper"
import {$BlockStatePredicate, $BlockStatePredicate$$Type} from "dev.latvian.mods.kubejs.block.state.BlockStatePredicate"
import {$Math, $Math$$Type} from "java.lang.Math"
import {$Potions, $Potions$$Type} from "net.minecraft.world.item.alchemy.Potions"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$FluidPredicate, $FluidPredicate$$Type} from "net.minecraft.advancements.critereon.FluidPredicate"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$NBTUtils, $NBTUtils$$Type} from "dev.latvian.mods.kubejs.util.NBTUtils"
import {$AbstractSpellWrapper, $AbstractSpellWrapper$$Type} from "com.squoshi.irons_spells_js.spell.AbstractSpellWrapper"
import {$PotionRegistry, $PotionRegistry$$Type} from "io.redspace.ironsspellbooks.registries.PotionRegistry"
import {$Blocks, $Blocks$$Type} from "net.minecraft.world.level.block.Blocks"
import {$KJSTPluginUtils, $KJSTPluginUtils$$Type} from "dev.uncandango.kubejstweaks.kubejs.plugin.KJSTPluginUtils"
import {$EntityJSUtils, $EntityJSUtils$$Type} from "net.liopyu.entityjs.util.EntityJSUtils"
import {$LightPredicate, $LightPredicate$$Type} from "net.minecraft.advancements.critereon.LightPredicate"
import {$HashMap, $HashMap$$Type} from "java.util.HashMap"
import {$GustDefenseGoal, $GustDefenseGoal$$Type} from "io.redspace.ironsspellbooks.entity.mobs.goals.GustDefenseGoal"
import {$TextIcons, $TextIcons$$Type} from "dev.latvian.mods.kubejs.bindings.TextIcons"
import {$LootFunction, $LootFunction$$Type} from "com.almostreliable.lootjs.loot.LootFunction"
import {$LootCondition, $LootCondition$$Type} from "com.almostreliable.lootjs.loot.LootCondition"
import {$Predicates, $Predicates$$Type} from "com.almostreliable.lootjs.loot.Predicates"
import {$VillagerUtils, $VillagerUtils$$Type} from "com.almostreliable.morejs.features.villager.VillagerUtils"
import {$LootType, $LootType$$Type} from "com.almostreliable.lootjs.core.LootType"
import {$ParticleHelper, $ParticleHelper$$Type} from "io.redspace.ironsspellbooks.util.ParticleHelper"
import {$ID, $ID$$Type} from "dev.latvian.mods.kubejs.util.ID"
import {$IngredientWrapper, $IngredientWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.IngredientWrapper"
import {$SpellRegistry, $SpellRegistry$$Type} from "io.redspace.ironsspellbooks.api.registry.SpellRegistry"
import {$KMath, $KMath$$Type} from "dev.latvian.mods.kubejs.bindings.KMath"
import {$ItemFilter, $ItemFilter$$Type} from "com.almostreliable.lootjs.core.filters.ItemFilter"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Types, $Types$$Type} from "moe.wolfgirl.probejs.lang.typescript.code.type.Types"
import {$EntityEquipmentPredicate, $EntityEquipmentPredicate$$Type} from "net.minecraft.advancements.critereon.EntityEquipmentPredicate"
import {$DistancePredicate, $DistancePredicate$$Type} from "net.minecraft.advancements.critereon.DistancePredicate"
import {$JsonUtils, $JsonUtils$$Type} from "dev.latvian.mods.kubejs.util.JsonUtils"
import {$Items, $Items$$Type} from "net.minecraft.world.item.Items"
import {$NumberProviderWrapper, $NumberProviderWrapper$$Type} from "com.almostreliable.lootjs.kube.wrappers.NumberProviderWrapper"
import {$MoreJSBinding, $MoreJSBinding$$Type} from "com.almostreliable.morejs.MoreJSBinding"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$CuriosApi, $CuriosApi$$Type} from "top.theillusivec4.curios.api.CuriosApi"
import {$CastType, $CastType$$Type} from "io.redspace.ironsspellbooks.api.spells.CastType"
import {$LocationPredicate, $LocationPredicate$$Type} from "net.minecraft.advancements.critereon.LocationPredicate"
import {$WizardAttackGoal, $WizardAttackGoal$$Type} from "io.redspace.ironsspellbooks.entity.mobs.goals.WizardAttackGoal"
import {$Duration, $Duration$$Type} from "java.time.Duration"
import {$RotationAxis, $RotationAxis$$Type} from "dev.latvian.mods.kubejs.util.RotationAxis"
import {$CapabilityCurios$CuriosCapabilityBuilder, $CapabilityCurios$CuriosCapabilityBuilder$$Type} from "net.zhaiji.kubejscurios.curios.CapabilityCurios$CuriosCapabilityBuilder"
import {$UtilsWrapper, $UtilsWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.UtilsWrapper"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$EnchantmentInstance, $EnchantmentInstance$$Type} from "net.minecraft.world.item.enchantment.EnchantmentInstance"
import {$RitualResults, $RitualResults$$Type} from "com.chen1335.forbiddenAndArcanusJS.kubejs.recipe.ritual.RitualResults"
import {$EntityPredicate, $EntityPredicate$$Type} from "net.minecraft.advancements.critereon.EntityPredicate"
import {$FluidWrapper, $FluidWrapper$$Type} from "dev.latvian.mods.kubejs.fluid.FluidWrapper"
import {$ConsoleJS, $ConsoleJS$$Type} from "dev.latvian.mods.kubejs.script.ConsoleJS"
import {$NbtPredicate, $NbtPredicate$$Type} from "net.minecraft.advancements.critereon.NbtPredicate"
import {$WarlockAttackGoal, $WarlockAttackGoal$$Type} from "io.redspace.ironsspellbooks.entity.mobs.goals.WarlockAttackGoal"
import {$JsonIO, $JsonIO$$Type} from "dev.latvian.mods.kubejs.util.JsonIO"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Doubles"
import {$WizardSupportGoal, $WizardSupportGoal$$Type} from "io.redspace.ironsspellbooks.entity.mobs.goals.WizardSupportGoal"
import {$DataComponents, $DataComponents$$Type} from "com.almostreliable.kubeio.binding.DataComponents"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$AABBWrapper, $AABBWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.AABBWrapper"
import {$BlockWrapper, $BlockWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.BlockWrapper"
import {$ParticleOptionsWrapper, $ParticleOptionsWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.ParticleOptionsWrapper"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ItemTags, $ItemTags$$Type} from "net.minecraft.tags.ItemTags"
import {$NBTIOWrapper, $NBTIOWrapper$$Type} from "dev.latvian.mods.kubejs.util.NBTIOWrapper"
import {$ColorWrapper, $ColorWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.ColorWrapper"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$OverlayTexture, $OverlayTexture$$Type} from "net.minecraft.client.renderer.texture.OverlayTexture"
import {$Quaternionf, $Quaternionf$$Type} from "org.joml.Quaternionf"
import {$NotificationToastData, $NotificationToastData$$Type} from "dev.latvian.mods.kubejs.util.NotificationToastData"
import {$EnchantmentPredicate, $EnchantmentPredicate$$Type} from "net.minecraft.advancements.critereon.EnchantmentPredicate"
import {$Utils, $Utils$$Type} from "io.redspace.ironsspellbooks.api.util.Utils"
import {$TargetEntityCastData, $TargetEntityCastData$$Type} from "io.redspace.ironsspellbooks.capabilities.magic.TargetEntityCastData"
import {$LootEntry, $LootEntry$$Type} from "com.almostreliable.lootjs.core.entry.LootEntry"
import {$PlatformWrapper, $PlatformWrapper$$Type} from "dev.latvian.mods.kubejs.script.PlatformWrapper"
import {$Probe, $Probe$$Type} from "moe.wolfgirl.probejs.plugin.Probe"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$Matrix3f, $Matrix3f$$Type} from "org.joml.Matrix3f"
import {$DirectionWrapper, $DirectionWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.DirectionWrapper"
import {$ItemWrapper, $ItemWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.ItemWrapper"
import {$SchoolRegistry, $SchoolRegistry$$Type} from "io.redspace.ironsspellbooks.api.registry.SchoolRegistry"
import {$SizedIngredientWrapper, $SizedIngredientWrapper$$Type} from "dev.latvian.mods.kubejs.bindings.SizedIngredientWrapper"

declare global {
const LootType: typeof $LootType
const Platform: typeof $PlatformWrapper
const WizardSupportGoal: typeof $WizardSupportGoal
const RotationAxis: typeof $RotationAxis
const WarlockAttackGoal: typeof $WarlockAttackGoal
const WizardRecoverGoal: typeof $WizardRecoverGoal
const OverlayTexture: typeof $OverlayTexture
const Items: typeof $Items
const MINUTE: long
const BlockPos: typeof $BlockPos
const SpellRegistry: typeof $SpellRegistry
const Client: $Minecraft
const IronsSpellsParticleHelper: typeof $ParticleHelper
const FluidPredicate: typeof $FluidPredicate
const SoundType: typeof $SoundType
const Player: typeof $Player
const DistancePredicate: typeof $DistancePredicate
const RitualResults: typeof $RitualResults
const CuriosJSCapabilityBuilder: $CapabilityCurios$CuriosCapabilityBuilder
const SchoolRegistry: typeof $SchoolRegistry
const KJSTweaks: typeof $KJSTPluginUtils
const ISSUtils: typeof $Utils
const Duration: typeof $Duration
const LootFunction: $LootFunction
const Range: typeof $MinMaxBounds$Doubles
const ISSAnimationHolder: typeof $AnimationHolder
const ItemPredicate: typeof $ItemPredicate
const Matrix4f: typeof $Matrix4f
const EnchantmentPredicate: typeof $EnchantmentPredicate
const SpellRarity: typeof $SpellRarity
const SpellData: typeof $SpellData
const LightPredicate: typeof $LightPredicate
const Stats: typeof $Stats
const Block: typeof $BlockWrapper
const CuriosApi: typeof $CuriosApi
const TradeItem: typeof $TradeItem
const JavaMath: typeof $Math
const TargetEntityCastData: typeof $TargetEntityCastData
const HOUR: long
const GustDefenseGoal: typeof $GustDefenseGoal
const MoreUtils: typeof $MoreJSBinding
const global: $HashMap
const CastType: typeof $CastType
const VillagerUtils: typeof $VillagerUtils
const ModelResourceLocation: typeof $ModelResourceLocation
const LootCondition: $LootCondition
const Vec4f: typeof $Vector4f
const Notification: typeof $NotificationToastData
const Potions: typeof $Potions
const Matrix3f: typeof $Matrix3f
const SpellBarrageGoal: typeof $SpellBarrageGoal
const WizardAttackGoal: typeof $WizardAttackGoal
const BlockProperties: typeof $BlockStateProperties
const EntityEquipmentPredicate: typeof $EntityEquipmentPredicate
const console: $ConsoleJS
const JsonIO: typeof $JsonIO
const Vec3i: typeof $Vec3i
const Blocks: typeof $Blocks
const DamageSource: typeof $DamageSource
const ItemTags: typeof $ItemTags
const EntityPredicate: typeof $EntityPredicate
const Quaternionf: typeof $Quaternionf
const MobEffectsPredicate: typeof $MobEffectsPredicate
const Registry: typeof $RegistryWrapper
const Vec3f: typeof $Vector3f
const NumberProvider: typeof $NumberProviderWrapper
const Vec3d: typeof $Vec3
const WispAttackGoal: typeof $WispAttackGoal
const EnchantmentInstance: typeof $EnchantmentInstance
const probejs: $Probe
const ISSPotionRegistry: typeof $PotionRegistry
const SECOND: long
const NbtPredicate: typeof $NbtPredicate
const BlockPredicate: typeof $BlockPredicate
const LocationPredicate: typeof $LocationPredicate
export import Types = $Types
export import Facing = $DirectionWrapper
export import ParticleOptions = $ParticleOptionsWrapper
export import Direction = $DirectionWrapper
export import Spell = $AbstractSpellWrapper
export import TextIcons = $TextIcons
export import Item = $ItemWrapper
export import JsonUtils = $JsonUtils
export import CuriosRenderer = $ICurioRenderer
export import ID = $ID
export import Component = $TextWrapper
export import UUID = $UUIDWrapper
export import NativeEvents = $NativeEventWrapper
export import Java = $JavaWrapper
export import NBT = $NBTUtils
export import EnderIOComponents = $DataComponents
export import Fluid = $FluidWrapper
export import Color = $ColorWrapper
export import SizedIngredient = $SizedIngredientWrapper
export import Text = $TextWrapper
export import NBTIO = $NBTIOWrapper
export import EntityJSUtils = $EntityJSUtils
export import LootEntry = $LootEntry
export import ItemFilter = $ItemFilter
export import Utils = $UtilsWrapper
export import Ingredient = $IngredientWrapper
export import KMath = $KMath
export import BlockStatePredicate = $BlockStatePredicate
export import Predicates = $Predicates
export import AABB = $AABBWrapper
export import FluidAmounts = $FluidAmounts
}