declare module "com.telepathicgrunt.the_bumblezone.worldgen.structures.GenericOptimizedStructure" {
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LiquidSettings, $LiquidSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.LiquidSettings"
import {$StructureType, $StructureType$$Type} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Structure$GenerationStub, $Structure$GenerationStub$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"
import {$Structure$StructureSettings, $Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $GenericOptimizedStructure extends $Structure {
readonly "biomeRadius": $Optional<(integer)>
static readonly "CODEC": $MapCodec<($GenericOptimizedStructure)>
readonly "disableBoundChecks": boolean
readonly "liquidSettings": $LiquidSettings
static readonly "DIRECT_CODEC": $Codec<($Structure)>
readonly "minYLimit": $Optional<(integer)>

constructor(config: $Structure$StructureSettings$$Type, startPool: $Holder$$Type<($StructureTemplatePool)>, startJigsawName: $Optional$$Type<($ResourceLocation$$Type)>, size: integer, startHeight: $HeightProvider$$Type, projectStartToHeightmap: $Optional$$Type<($Heightmap$Types$$Type)>, maxDistanceFromCenter: integer, biomeRadius: $Optional$$Type<(integer)>, minYLimit: $Optional$$Type<(integer)>, disableBoundChecks: boolean, liquidSettings: $LiquidSettings$$Type)

public "type"(): $StructureType<(any)>
public "findGenerationPoint"(context: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericOptimizedStructure$$Type = ($GenericOptimizedStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericOptimizedStructure_ = $GenericOptimizedStructure$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.blockentities.EssenceBlockEntity$EventEntities" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $EssenceBlockEntity$EventEntities extends $Record {

constructor(uuid: $UUID$$Type)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "uuid"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceBlockEntity$EventEntities$$Type = ({"uuid"?: $UUID$$Type}) | ([uuid?: $UUID$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceBlockEntity$EventEntities_ = $EssenceBlockEntity$EventEntities$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.essence.RagingEssence" {
import {$BzEntityDeathEvent, $BzEntityDeathEvent$$Type} from "com.telepathicgrunt.the_bumblezone.events.entity.BzEntityDeathEvent"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AbilityEssenceItem, $AbilityEssenceItem$$Type} from "com.telepathicgrunt.the_bumblezone.items.essence.AbilityEssenceItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $RagingEssence extends $AbilityEssenceItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public static "spawnParticles"(world: $ServerLevel$$Type, location: $Vec3$$Type, random: $RandomSource$$Type, rageState: integer): void
public static "GetTeamColor"(entity: $Entity$$Type, player: $Player$$Type): integer
public "getColor"(): integer
public static "OnEntityDeath"(event: $BzEntityDeathEvent$$Type): void
public static "setRageState"(itemStack: $ItemStack$$Type, rageState: short): void
public static "getRageState"(itemStack: $ItemStack$$Type): short
public "applyAbilityEffects"(itemStack: $ItemStack$$Type, level: $Level$$Type, serverPlayer: $ServerPlayer$$Type): void
public static "setEmpoweredTimestamp"(itemStack: $ItemStack$$Type, empoweredTimestamp: long): void
public static "getEmpoweredTimestamp"(itemStack: $ItemStack$$Type): long
public static "setCurrentTargets"(itemStack: $ItemStack$$Type, targetsToKill: $List$$Type<($UUID$$Type)>): void
public static "getCurrentTargets"(itemStack: $ItemStack$$Type): $List<($UUID)>
public static "IsValidEntityToGlow"(entity: $Entity$$Type, player: $Player$$Type): boolean
public static "IsRagingEssenceActive"(player: $Player$$Type): boolean
public "verifyComponentsAfterLoad"(itemStack: $ItemStack$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RagingEssence$$Type = ($RagingEssence);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RagingEssence_ = $RagingEssence$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.essence.RadianceEssence" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AbilityEssenceItem, $AbilityEssenceItem$$Type} from "com.telepathicgrunt.the_bumblezone.items.essence.AbilityEssenceItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $RadianceEssence extends $AbilityEssenceItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public static "spawnParticles"(world: $ServerLevel$$Type, location: $Vec3$$Type, random: $RandomSource$$Type): void
public "getColor"(): integer
public "applyAbilityEffects"(itemStack: $ItemStack$$Type, level: $Level$$Type, serverPlayer: $ServerPlayer$$Type): void
public static "IsRadianceEssenceActive"(player: $Player$$Type): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadianceEssence$$Type = ($RadianceEssence);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadianceEssence_ = $RadianceEssence$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.essence.KnowingEssence" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AbilityEssenceItem, $AbilityEssenceItem$$Type} from "com.telepathicgrunt.the_bumblezone.items.essence.AbilityEssenceItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $KnowingEssence extends $AbilityEssenceItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public static "spawnParticles"(world: $ServerLevel$$Type, location: $Vec3$$Type, random: $RandomSource$$Type): void
public static "GetTeamColor"(entity: $Entity$$Type, player: $Player$$Type): integer
public "getColor"(): integer
public static "GetAllStructure"(itemStack: $ItemStack$$Type): StringJS
public "applyAbilityEffects"(itemStack: $ItemStack$$Type, level: $Level$$Type, serverPlayer: $ServerPlayer$$Type): void
public static "IsKnowingEssenceActive"(player: $Player$$Type): boolean
public static "IsValidEntityToGlow"(entity: $Entity$$Type, player: $Player$$Type): boolean
public "verifyComponentsAfterLoad"(itemStack: $ItemStack$$Type): void
public "rechargeAbilityEntirely"(stack: $ItemStack$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KnowingEssence$$Type = ($KnowingEssence);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KnowingEssence_ = $KnowingEssence$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.StinglessBeeHelmet" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BeeArmor, $BeeArmor$$Type} from "com.telepathicgrunt.the_bumblezone.items.BeeArmor"

export class $StinglessBeeHelmet extends $BeeArmor {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "MAX_BAR_WIDTH": integer
static "HELMET_EFFECT_COUNTER_CLIENTSIDE": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static "BEE_WEARABLES_COUNT": integer
static readonly "BEE_HIGHLIGHTED_COUNTER_CLIENTSIDE": $Set<($Entity)>
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static "PACKET_SEND_COOLDOWN_CLIENTSIDE": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(material: $Holder$$Type<($ArmorMaterial)>, armorType: $ArmorItem$Type$$Type, properties: $Item$Properties$$Type, variant: integer)

public "bz$onArmorTick"(itemStack: $ItemStack$$Type, level: $Level$$Type, player: $Player$$Type): void
public static "getEntityBeeHelmet"(entity: $LivingEntity$$Type): $ItemStack
public static "addBeePassenger"(level: $Level$$Type, playerEntity: $Player$$Type, hand: $InteractionHand$$Type, entity: $Entity$$Type): $InteractionResult
public static "beeRidingOffset"(offset: $Vec3$$Type, vehicle: $Entity$$Type, rider: $Entity$$Type): $Vec3
public static "shouldEntityGlow"(player: $Player$$Type, entity: $Entity$$Type): boolean
public "verifyComponentsAfterLoad"(itemStack: $ItemStack$$Type): void
public static "decrementHighlightingCounter"(player: $Player$$Type): void
public "isRepairable"(arg0: $ItemStack$$Type): boolean
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StinglessBeeHelmet$$Type = ($StinglessBeeHelmet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StinglessBeeHelmet_ = $StinglessBeeHelmet$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.events.entity.BzEntityAttackedEvent" {
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CancellableEventHandler, $CancellableEventHandler$$Type} from "com.telepathicgrunt.the_bumblezone.events.base.CancellableEventHandler"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BzEntityAttackedEvent extends $Record {
static readonly "EVENT_HIGH": $CancellableEventHandler<($BzEntityAttackedEvent)>
static readonly "EVENT": $CancellableEventHandler<($BzEntityAttackedEvent)>

constructor(entity: $LivingEntity$$Type, source: $DamageSource$$Type, amount: float)

public "entity"(): $LivingEntity
public "amount"(): float
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "source"(): $DamageSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BzEntityAttackedEvent$$Type = ({"amount"?: float, "source"?: $DamageSource$$Type, "entity"?: $LivingEntity$$Type}) | ([amount?: float, source?: $DamageSource$$Type, entity?: $LivingEntity$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BzEntityAttackedEvent_ = $BzEntityAttackedEvent$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.SugarInfusedStone" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SugarInfusedStone extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SugarInfusedStone)>
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

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "codec"(): $MapCodec<($SugarInfusedStone)>
public "onPlace"(blockState: $BlockState$$Type, world: $Level$$Type, blockPos: $BlockPos$$Type, previousBlockState: $BlockState$$Type, notify: boolean): void
public "neighborChanged"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, block: $Block$$Type, blockPos1: $BlockPos$$Type, b: boolean): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SugarInfusedStone$$Type = ($SugarInfusedStone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SugarInfusedStone_ = $SugarInfusedStone$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.modules.PlayerDataModule" {
import {$Object2IntOpenHashMap, $Object2IntOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2IntOpenHashMap"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Module, $Module$$Type} from "com.telepathicgrunt.the_bumblezone.modules.base.Module"

export class $PlayerDataModule implements $Module<($PlayerDataModule)> {
 "honeySlimeBred": integer
static readonly "CODEC": $Codec<($PlayerDataModule)>
 "beeSaved": integer
 "flowersSpawned": integer
 "pollenPuffHits": integer
 "gottenWelcomed": boolean
 "craftedBeehives": integer
 "beeStingersFired": integer
 "tradeResetPrimedTime": long
 "honeyBottleDrank": integer
readonly "mobsKilledTracker": $Object2IntOpenHashMap<($ResourceLocation)>
 "isBeeEssenced": boolean
 "beesFed": integer
 "beesBred": integer
 "receivedEssencePrize": boolean
 "gottenWelcomedInDimension": boolean
static readonly "ID": $ResourceLocation
 "queenBeeTrade": integer

constructor(isBeeEssenced: boolean, gottenWelcomed: boolean, gottenWelcomedInDimension: boolean, receivedEssencePrize: boolean, tradeResetPrimedTime: long, craftedBeehives: integer, beesBred: integer, flowersSpawned: integer, honeyBottleDrank: integer, beeStingersFired: integer, beeSaved: integer, pollenPuffHits: integer, honeySlimeBred: integer, beesFed: integer, queenBeeTrade: integer, mobsKilledTracker: $Object2IntOpenHashMap$$Type<($ResourceLocation$$Type)>)
constructor()

public "id"(): $ResourceLocation
public "codec"(): $Codec<($PlayerDataModule)>
public "resetAllTrackerStats"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDataModule$$Type = ($PlayerDataModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerDataModule_ = $PlayerDataModule$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.effects.WrathOfTheHiveEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$BzEntityDeathEvent, $BzEntityDeathEvent$$Type} from "com.telepathicgrunt.the_bumblezone.events.entity.BzEntityDeathEvent"
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IMobEffectExtension, $IMobEffectExtension$$Type} from "net.neoforged.neoforge.common.extensions.IMobEffectExtension"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$Set, $Set$$Type} from "java.util.Set"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $WrathOfTheHiveEffect extends $MobEffect implements $IMobEffectExtension {
static "ACTIVE_WRATH": boolean
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
static readonly "NEARBY_WRATH_EFFECT_RADIUS": integer
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(type: $MobEffectCategory$$Type, potionColor: integer)

public static "effectRemoval"(entity: $LivingEntity$$Type, mobEffectInstance: $MobEffectInstance$$Type): void
public "isInstantenous"(): boolean
public static "calmTheBees"(world: $Level$$Type, livingEntity: $LivingEntity$$Type): void
public static "onLivingEntityDeath"(event: $BzEntityDeathEvent$$Type): void
public static "mediumAggression"(world: $Level$$Type, livingEntity: $LivingEntity$$Type): void
public "applyEffectTick"(entity: $LivingEntity$$Type, amplifier: integer): boolean
public "fillEffectCures"(cures: $Set$$Type<(any)>, effectInstance: $MobEffectInstance$$Type): void
public "shouldApplyEffectTickThisTick"(duration: integer, amplifier: integer): boolean
public static "unBEElievablyHighAggression"(world: $Level$$Type, livingEntity: $LivingEntity$$Type): void
get "instantenous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrathOfTheHiveEffect$$Type = ($WrathOfTheHiveEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrathOfTheHiveEffect_ = $WrathOfTheHiveEffect$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.DenseBubbleBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BucketPickup, $BucketPickup$$Type} from "net.minecraft.world.level.block.BucketPickup"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $DenseBubbleBlock extends $Block implements $BucketPickup {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($DenseBubbleBlock)>
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

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "getShape"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type, collisionContext: $CollisionContext$$Type): $VoxelShape
public "codec"(): $MapCodec<($DenseBubbleBlock)>
public "getPickupSound"(): $Optional<($SoundEvent)>
public "pickupBlock"(player: $Player$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $ItemStack
/**
 * 
 * @deprecated
 */
public "entityInside"(state: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, entity: $Entity$$Type): void
public "getFluidState"(blockState: $BlockState$$Type): $FluidState
public "getRenderShape"(blockState: $BlockState$$Type): $RenderShape
public "animateTick"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, randomSource: $RandomSource$$Type): void
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DenseBubbleBlock$$Type = ($DenseBubbleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DenseBubbleBlock_ = $DenseBubbleBlock$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.advancements.ItemSpecificTrigger" {
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$ItemSpecificTrigger$TriggerInstance, $ItemSpecificTrigger$TriggerInstance$$Type} from "com.telepathicgrunt.the_bumblezone.advancements.ItemSpecificTrigger$TriggerInstance"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ItemSpecificTrigger extends $SimpleCriterionTrigger<($ItemSpecificTrigger$TriggerInstance)> {

constructor()

public "trigger"(serverPlayer: $ServerPlayer$$Type, itemStack: $ItemStack$$Type): void
public "codec"(): $Codec<($ItemSpecificTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSpecificTrigger$$Type = ($ItemSpecificTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSpecificTrigger_ = $ItemSpecificTrigger$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.FloralFillWithRootmin" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$FloralFillWithRootminConfig, $FloralFillWithRootminConfig$$Type} from "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.FloralFillWithRootminConfig"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $FloralFillWithRootmin extends $Feature<($FloralFillWithRootminConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(configFactory: $Codec$$Type<($FloralFillWithRootminConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($FloralFillWithRootminConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloralFillWithRootmin$$Type = ($FloralFillWithRootmin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloralFillWithRootmin_ = $FloralFillWithRootmin$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.utils.TriState" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $TriState extends $Enum<($TriState)> {
static readonly "DENY": $TriState
static readonly "PASS": $TriState
static readonly "ALLOW": $TriState


public static "values"(): ($TriState)[]
public static "valueOf"(name: StringJS): $TriState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriState$$Type = (("allow") | ("deny") | ("pass"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriState_ = $TriState$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.fluids.SugarWaterFluid" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BzFluid, $BzFluid$$Type} from "com.telepathicgrunt.the_bumblezone.fluids.base.BzFluid"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SugarWaterFluid extends $BzFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty


public "getSource"(): $Fluid
public "isSame"(fluid: $Fluid$$Type): boolean
public "randomTick"(level: $Level$$Type, position: $BlockPos$$Type, state: $FluidState$$Type, random: $RandomSource$$Type): void
public "getTickDelay"(world: $LevelReader$$Type): integer
public "getFlowing"(): $Fluid
public "animateTick"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $FluidState$$Type, random: $RandomSource$$Type): void
public "getBucket"(): $Item
public "getDropOff"(world: $LevelReader$$Type): integer
public "canHoldFluid"(blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, fluid: $Fluid$$Type): boolean
public "getSlopeFindDistance"(world: $LevelReader$$Type): integer
public "createLegacyBlock"(state: $FluidState$$Type): $BlockState
public "getDripParticle"(): $ParticleOptions
public "canBeReplacedWith"(state: $FluidState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, fluid: $Fluid$$Type, direction: $Direction$$Type): boolean
public static "isBlockAllowedForSugarWaterWaterlogging"(blockState: $BlockState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
get "source"(): $Fluid
get "flowing"(): $Fluid
get "bucket"(): $Item
get "dripParticle"(): $ParticleOptions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SugarWaterFluid$$Type = ($SugarWaterFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SugarWaterFluid_ = $SugarWaterFluid$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.advancements.KilledCounterTrigger$TriggerInstance" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$PlayerDataModule, $PlayerDataModule$$Type} from "com.telepathicgrunt.the_bumblezone.modules.PlayerDataModule"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $KilledCounterTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($KilledCounterTrigger$TriggerInstance)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, targetCount: integer, targetEntity: $ResourceLocation$$Type, isTargetTag: boolean, beeArmorRequired: boolean)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(serverPlayer: $ServerPlayer$$Type, currentEntity: $Entity$$Type, module: $PlayerDataModule$$Type): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "targetCount"(): integer
public "targetEntity"(): $ResourceLocation
public "isTargetTag"(): boolean
public "beeArmorRequired"(): boolean
public "validate"(arg0: $CriterionValidator$$Type): void
get "targetTag"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KilledCounterTrigger$TriggerInstance$$Type = ({"targetCount"?: integer, "player"?: ($ContextAwarePredicate$$Type)?, "isTargetTag"?: boolean, "targetEntity"?: $ResourceLocation$$Type, "beeArmorRequired"?: boolean}) | ([targetCount?: integer, player?: ($ContextAwarePredicate$$Type)?, isTargetTag?: boolean, targetEntity?: $ResourceLocation$$Type, beeArmorRequired?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KilledCounterTrigger$TriggerInstance_ = $KilledCounterTrigger$TriggerInstance$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.blocks.StemBlockAccessor" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

export interface $StemBlockAccessor {

 "bumblezone$getFruit"(): $ResourceKey<($Block)>

(): $ResourceKey$$Type<($Block$$Type)>
}

export namespace $StemBlockAccessor {
const probejs$$marker: never
}
export class $StemBlockAccessor$$Static implements $StemBlockAccessor {


 "bumblezone$getFruit"(): $ResourceKey<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StemBlockAccessor$$Type = (() => $ResourceKey$$Type<($Block$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StemBlockAccessor_ = $StemBlockAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.HangingGardenMob" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $HangingGardenMob extends $Feature<($NoneFeatureConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(code: $Codec$$Type<($NoneFeatureConfiguration$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HangingGardenMob$$Type = ($HangingGardenMob);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HangingGardenMob_ = $HangingGardenMob$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.advancements.EntitySpecificTrigger" {
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$EntitySpecificTrigger$TriggerInstance, $EntitySpecificTrigger$TriggerInstance$$Type} from "com.telepathicgrunt.the_bumblezone.advancements.EntitySpecificTrigger$TriggerInstance"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $EntitySpecificTrigger extends $SimpleCriterionTrigger<($EntitySpecificTrigger$TriggerInstance)> {

constructor()

public "trigger"(serverPlayer: $ServerPlayer$$Type, entity: $Entity$$Type): void
public "codec"(): $Codec<($EntitySpecificTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitySpecificTrigger$$Type = ($EntitySpecificTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntitySpecificTrigger_ = $EntitySpecificTrigger$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.BumbleBeeChestplate" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BeeArmor, $BeeArmor$$Type} from "com.telepathicgrunt.the_bumblezone.items.BeeArmor"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $BumbleBeeChestplate extends $BeeArmor {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(material: $Holder$$Type<($ArmorMaterial)>, armorType: $ArmorItem$Type$$Type, properties: $Item$Properties$$Type, transTexture: boolean, variant: integer)

public "bz$onArmorTick"(itemstack: $ItemStack$$Type, world: $Level$$Type, player: $Player$$Type): void
public static "getEntityBeeChestplate"(entity: $LivingEntity$$Type): $ItemStack
public "verifyComponentsAfterLoad"(itemStack: $ItemStack$$Type): void
public "isRepairable"(arg0: $ItemStack$$Type): boolean
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BumbleBeeChestplate$$Type = ($BumbleBeeChestplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BumbleBeeChestplate_ = $BumbleBeeChestplate$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.HoneycombBrood" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ProperFacingBlock, $ProperFacingBlock$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.ProperFacingBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HoneycombBrood extends $ProperFacingBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($HoneycombBrood)>
static readonly "STAGE": $IntegerProperty
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

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "tick"(state: $BlockState$$Type, level: $ServerLevel$$Type, position: $BlockPos$$Type, random: $RandomSource$$Type): void
public "codec"(): $MapCodec<($HoneycombBrood)>
public "useItemOn"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, position: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type, raytraceResult: $BlockHitResult$$Type): $ItemInteractionResult
public "animateTick"(blockState: $BlockState$$Type, world: $Level$$Type, position: $BlockPos$$Type, random: $RandomSource$$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type): integer
public "playerWillDestroy"(world: $Level$$Type, position: $BlockPos$$Type, state: $BlockState$$Type, playerEntity: $Player$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoneycombBrood$$Type = ($HoneycombBrood);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoneycombBrood_ = $HoneycombBrood$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.fluids.SugarWaterFluid$Source" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$SugarWaterFluid, $SugarWaterFluid$$Type} from "com.telepathicgrunt.the_bumblezone.fluids.SugarWaterFluid"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$FluidData, $FluidData$$Type} from "com.teamresourceful.resourcefullib.common.fluid.data.FluidData"

export class $SugarWaterFluid$Source extends $SugarWaterFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(properties: $FluidData$$Type)

public "getAmount"(state: $FluidState$$Type): integer
public "isSource"(state: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SugarWaterFluid$Source$$Type = ($SugarWaterFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SugarWaterFluid$Source_ = $SugarWaterFluid$Source$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.NbtFeatureConfig" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $NbtFeatureConfig implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($NbtFeatureConfig)>
readonly "postProcessor": $ResourceLocation
readonly "processor": $ResourceLocation
readonly "structureYOffset": integer
readonly "nbtResourcelocationsAndWeights": $List<($Pair<($ResourceLocation), (integer)>)>

constructor(processor: $ResourceLocation$$Type, postProcessor: $ResourceLocation$$Type, nbtIdentifiersAndWeights: $List$$Type<($Pair$$Type<($ResourceLocation$$Type), (integer)>)>, structureYOffset: integer)

public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NbtFeatureConfig$$Type = ($NbtFeatureConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NbtFeatureConfig_ = $NbtFeatureConfig$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.BlockEntityCombOre" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ChunkAccess, $ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$NbtOreConfiguration, $NbtOreConfiguration$$Type} from "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.NbtOreConfiguration"
import {$ServerLevelAccessor, $ServerLevelAccessor$$Type} from "net.minecraft.world.level.ServerLevelAccessor"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $BlockEntityCombOre extends $Feature<($NbtOreConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(configFactory: $Codec$$Type<($NbtOreConfiguration$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($NbtOreConfiguration$$Type)>): boolean
public "getCachedChunk"(world: $ServerLevelAccessor$$Type, blockpos: $BlockPos$$Type): $ChunkAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityCombOre$$Type = ($BlockEntityCombOre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityCombOre_ = $BlockEntityCombOre$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.containers.ShapedRecipePatternAccessor" {
import {$List, $List$$Type} from "java.util.List"

export interface $ShapedRecipePatternAccessor {

}

export namespace $ShapedRecipePatternAccessor {
function bumblezone$callShrink(list: $List$$Type<(StringJS)>): (StringJS)[]
const probejs$$marker: never
}
export class $ShapedRecipePatternAccessor$$Static implements $ShapedRecipePatternAccessor {


static "bumblezone$callShrink"(list: $List$$Type<(StringJS)>): (StringJS)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRecipePatternAccessor$$Type = ($ShapedRecipePatternAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedRecipePatternAccessor_ = $ShapedRecipePatternAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.neoforge.block.FireBlockInvoker" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"

export interface $FireBlockInvoker {

 "bumblezone$callSetFlammable"(arg0: $Block$$Type, arg1: integer, arg2: integer): void

(arg0: $Block, arg1: integer, arg2: integer): void
}

export namespace $FireBlockInvoker {
const probejs$$marker: never
}
export class $FireBlockInvoker$$Static implements $FireBlockInvoker {


 "bumblezone$callSetFlammable"(arg0: $Block$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireBlockInvoker$$Type = ((arg0: $Block, arg1: integer, arg2: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireBlockInvoker_ = $FireBlockInvoker$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.fluids.SugarWaterFluid$Flowing" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$SugarWaterFluid, $SugarWaterFluid$$Type} from "com.telepathicgrunt.the_bumblezone.fluids.SugarWaterFluid"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$FluidData, $FluidData$$Type} from "com.teamresourceful.resourcefullib.common.fluid.data.FluidData"

export class $SugarWaterFluid$Flowing extends $SugarWaterFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(properties: $FluidData$$Type)

public "getAmount"(state: $FluidState$$Type): integer
public "isSource"(state: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SugarWaterFluid$Flowing$$Type = ($SugarWaterFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SugarWaterFluid$Flowing_ = $SugarWaterFluid$Flowing$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.HeavyAir" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HeavyAir extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($HeavyAir)>
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

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "getShape"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type, collisionContext: $CollisionContext$$Type): $VoxelShape
public "codec"(): $MapCodec<($HeavyAir)>
public "entityInside"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, entity: $Entity$$Type): void
public static "isInHeavyAir"(level: $Level$$Type, boundingBox: $AABB$$Type): boolean
/**
 * 
 * @deprecated
 */
public "onExplosionHit"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, explosion: $Explosion$$Type, biConsumer: $BiConsumer$$Type<($ItemStack), ($BlockPos)>): void
public "getRenderShape"(blockState: $BlockState$$Type): $RenderShape
public "animateTick"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, randomSource: $RandomSource$$Type): void
public "getShadeBrightness"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): float
public "propagatesSkylightDown"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): boolean
public "getCollisionShape"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type, collisionContext: $CollisionContext$$Type): $VoxelShape
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeavyAir$$Type = ($HeavyAir);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeavyAir_ = $HeavyAir$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.datacomponents.HoneyCompassTargetData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $HoneyCompassTargetData extends $Record {
static readonly "DIRECT_CODEC": $Codec<($HoneyCompassTargetData)>
static readonly "DIRECT_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($HoneyCompassTargetData)>

constructor()
constructor(targetBlock: $Optional$$Type<(StringJS)>, targetStructureTag: $Optional$$Type<(StringJS)>, targetPos: $Optional$$Type<($BlockPos$$Type)>, targetDimension: $Optional$$Type<($ResourceKey$$Type<($Level$$Type)>)>)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "targetPos"(): $Optional<($BlockPos)>
public "isDifferent"(targetBlock: $Optional$$Type<(StringJS)>, targetStructureTag: $Optional$$Type<(StringJS)>, targetPos: $Optional$$Type<($BlockPos$$Type)>, targetDimension: $Optional$$Type<($ResourceKey$$Type<($Level$$Type)>)>): boolean
public "getStoredBlock"(): $Optional<($Block)>
public "targetBlock"(): $Optional<(StringJS)>
public "targetDimension"(): $Optional<($ResourceKey<($Level)>)>
public "targetStructureTag"(): $Optional<(StringJS)>
get "storedBlock"(): $Optional<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoneyCompassTargetData$$Type = ({"targetPos"?: ($BlockPos$$Type)?, "targetBlock"?: (StringJS)?, "targetDimension"?: ($ResourceKey$$Type<($Level$$Type)>)?, "targetStructureTag"?: (StringJS)?}) | ([targetPos?: ($BlockPos$$Type)?, targetBlock?: (StringJS)?, targetDimension?: ($ResourceKey$$Type<($Level$$Type)>)?, targetStructureTag?: (StringJS)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoneyCompassTargetData_ = $HoneyCompassTargetData$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.loot.LootParamsBzVisitedLootInterface" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $LootParamsBzVisitedLootInterface {

 "getVisitedBzVisitedLootRL"(): $Set<($ResourceLocation)>
 "addVisitedBzVisitedLootRL"(arg0: $ResourceLocation$$Type): void
get "visitedBzVisitedLootRL"(): $Set<($ResourceLocation)>
}

export namespace $LootParamsBzVisitedLootInterface {
const probejs$$marker: never
}
export class $LootParamsBzVisitedLootInterface$$Static implements $LootParamsBzVisitedLootInterface {


 "getVisitedBzVisitedLootRL"(): $Set<($ResourceLocation)>
 "addVisitedBzVisitedLootRL"(arg0: $ResourceLocation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootParamsBzVisitedLootInterface$$Type = ($LootParamsBzVisitedLootInterface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootParamsBzVisitedLootInterface_ = $LootParamsBzVisitedLootInterface$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.InfinityBarrier" {
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$OptionalBoolean, $OptionalBoolean$$Type} from "com.telepathicgrunt.the_bumblezone.utils.OptionalBoolean"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockExtension, $BlockExtension$$Type} from "com.telepathicgrunt.the_bumblezone.platform.BlockExtension"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $InfinityBarrier extends $BaseEntityBlock implements $BlockExtension {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($InfinityBarrier)>
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

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "destroy"(level: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): void
public "codec"(): $MapCodec<($InfinityBarrier)>
public "playerDestroy"(level: $Level$$Type, player: $Player$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, blockEntity: $BlockEntity$$Type, itemStack: $ItemStack$$Type): void
public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public "entityInside"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, entity: $Entity$$Type): void
public "getRenderShape"(arg: $BlockState$$Type): $RenderShape
public "getDestroyProgress"(blockState: $BlockState$$Type, player: $Player$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): float
public "getBlockSupportShape"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): $VoxelShape
public "bz$shouldNotDisplayFluidOverlay"(): $OptionalBoolean
public "isStickyBlock"(state: $BlockState$$Type): boolean
public "canStickTo"(state: $BlockState$$Type, other: $BlockState$$Type): boolean
public "bz$canStickTo"(state: $BlockState$$Type, other: $BlockState$$Type): $OptionalBoolean
public "bz$isStickyBlock"(state: $BlockState$$Type): boolean
public "bz$getBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type): $PathType
public "getBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type): $PathType
public "shouldDisplayFluidOverlay"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, fluidState: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfinityBarrier$$Type = ($InfinityBarrier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfinityBarrier_ = $InfinityBarrier$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.essence.CalmingEssence" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BzEntityHurtEvent, $BzEntityHurtEvent$$Type} from "com.telepathicgrunt.the_bumblezone.events.entity.BzEntityHurtEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AbilityEssenceItem, $AbilityEssenceItem$$Type} from "com.telepathicgrunt.the_bumblezone.items.essence.AbilityEssenceItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $CalmingEssence extends $AbilityEssenceItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public static "spawnParticles"(world: $ServerLevel$$Type, location: $Vec3$$Type, random: $RandomSource$$Type): void
public "getColor"(): integer
public static "OnAttack"(event: $BzEntityHurtEvent$$Type): void
public "applyAbilityEffects"(itemStack: $ItemStack$$Type, level: $Level$$Type, serverPlayer: $ServerPlayer$$Type): void
public static "IsCalmingEssenceActive"(player: $Player$$Type): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CalmingEssence$$Type = ($CalmingEssence);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CalmingEssence_ = $CalmingEssence$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.advancements.BlockStateSpecificTrigger$TriggerInstance" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$CodecUtils$BlockMatcher, $CodecUtils$BlockMatcher$$Type} from "com.telepathicgrunt.the_bumblezone.utils.CodecUtils$BlockMatcher"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BlockStateSpecificTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($BlockStateSpecificTrigger$TriggerInstance)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, blockMatcher: $CodecUtils$BlockMatcher$$Type)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(blockState: $BlockState$$Type): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "blockMatcher"(): $CodecUtils$BlockMatcher
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateSpecificTrigger$TriggerInstance$$Type = ({"blockMatcher"?: $CodecUtils$BlockMatcher$$Type, "player"?: ($ContextAwarePredicate$$Type)?}) | ([blockMatcher?: $CodecUtils$BlockMatcher$$Type, player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateSpecificTrigger$TriggerInstance_ = $BlockStateSpecificTrigger$TriggerInstance$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.FloralFillWithRootminConfig" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $FloralFillWithRootminConfig implements $FeatureConfiguration {
readonly "rootminFlowerTag": $TagKey<($Block)>
static readonly "CODEC": $Codec<($FloralFillWithRootminConfig)>
readonly "disallowedFlowerTag": $TagKey<($Block)>
readonly "flowerTag": $TagKey<($Block)>
readonly "disallowedRootminFlowerTag": $TagKey<($Block)>
readonly "flowerChance": float
readonly "rootminChance": float

constructor(rootminChance: float, flowerChance: float, flowerTag: $TagKey$$Type<($Block)>, disallowedFlowerTag: $TagKey$$Type<($Block)>, rootminFlowerTag: $TagKey$$Type<($Block)>, disallowedRootminFlowerTag: $TagKey$$Type<($Block)>)

public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloralFillWithRootminConfig$$Type = ($FloralFillWithRootminConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloralFillWithRootminConfig_ = $FloralFillWithRootminConfig$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.BzBlockItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BzBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
/**
 * 
 * @deprecated
 */
 "block": $Block
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type, fitInContainers: boolean, useBlockName: boolean)
constructor(block: $Block$$Type, properties: $Item$Properties$$Type)
constructor(blockState: $BlockState$$Type, properties: $Item$Properties$$Type)

public "getBlockState"(): $BlockState
public "getDescriptionId"(): StringJS
public "canFitInsideContainerItems"(): boolean
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "blockState"(): $BlockState
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BzBlockItem$$Type = ($BzBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BzBlockItem_ = $BzBlockItem$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.fluids.SugarWaterBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FluidGetter, $FluidGetter$$Type} from "com.telepathicgrunt.the_bumblezone.fluids.base.FluidGetter"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$FluidData, $FluidData$$Type} from "com.teamresourceful.resourcefullib.common.fluid.data.FluidData"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SugarWaterBlock extends $LiquidBlock implements $FluidGetter {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LiquidBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "LEVEL": $IntegerProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "STABLE_SHAPE": $VoxelShape
readonly "fluid": $FlowingFluid
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(baseFluid: $FluidData$$Type)

public "onPlace"(blockState: $BlockState$$Type, world: $Level$$Type, blockPos: $BlockPos$$Type, previousBlockState: $BlockState$$Type, notify: boolean): void
public "updateShape"(blockState: $BlockState$$Type, direction: $Direction$$Type, blockState2: $BlockState$$Type, world: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, blockPos2: $BlockPos$$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "entityInside"(state: $BlockState$$Type, world: $Level$$Type, position: $BlockPos$$Type, entity: $Entity$$Type): void
public "getFluid"(): $FlowingFluid
public "neighborChanged"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, block: $Block$$Type, fromPos: $BlockPos$$Type, notify: boolean): void
public "asHolder"(): $Holder<(any)>
get "fluid"(): $FlowingFluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SugarWaterBlock$$Type = ($SugarWaterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SugarWaterBlock_ = $SugarWaterBlock$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.HoneyCrystalShards" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BzArrowItem, $BzArrowItem$$Type} from "com.telepathicgrunt.the_bumblezone.platform.BzArrowItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$AbstractArrow, $AbstractArrow$$Type} from "net.minecraft.world.entity.projectile.AbstractArrow"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$OptionalBoolean, $OptionalBoolean$$Type} from "com.telepathicgrunt.the_bumblezone.utils.OptionalBoolean"

export class $HoneyCrystalShards extends $BzArrowItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "bz$isInfinite"(stack: $ItemStack$$Type, bow: $ItemStack$$Type, player: $LivingEntity$$Type): $OptionalBoolean
public "createArrow"(level: $Level$$Type, stack: $ItemStack$$Type, livingEntity: $LivingEntity$$Type, weapon: $ItemStack$$Type): $AbstractArrow
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoneyCrystalShards$$Type = ($HoneyCrystalShards);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoneyCrystalShards_ = $HoneyCrystalShards$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.TwoToneSpikeFeatureConfig" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $TwoToneSpikeFeatureConfig implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($TwoToneSpikeFeatureConfig)>
readonly "tipBlocks": $List<($Block)>
readonly "heightRange": $IntProvider
readonly "allowedBaseBlockCopies": $TagKey<($Block)>

constructor(allowedBaseBlockCopies: $TagKey$$Type<($Block)>, tipBlocks: $List$$Type<($Block$$Type)>, heightRange: $IntProvider$$Type)

public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TwoToneSpikeFeatureConfig$$Type = ($TwoToneSpikeFeatureConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TwoToneSpikeFeatureConfig_ = $TwoToneSpikeFeatureConfig$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.PorousHoneycomb" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PorousHoneycomb extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($PorousHoneycomb)>
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

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "stepOn"(level: $Level$$Type, blockPos: $BlockPos$$Type, state: $BlockState$$Type, entity: $Entity$$Type): void
public "codec"(): $MapCodec<($PorousHoneycomb)>
public "entityInside"(state: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, entity: $Entity$$Type): void
public static "beeHoneyFill"(state: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, entity: $Entity$$Type): void
public "useItemOn"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, position: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type, raytraceResult: $BlockHitResult$$Type): $ItemInteractionResult
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PorousHoneycomb$$Type = ($PorousHoneycomb);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PorousHoneycomb_ = $PorousHoneycomb$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.PotionCandleBlockItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $PotionCandleBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
/**
 * 
 * @deprecated
 */
 "block": $Block
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, components: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "getDescriptionId"(): StringJS
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionCandleBlockItem$$Type = ($PotionCandleBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionCandleBlockItem_ = $PotionCandleBlockItem$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.EssenceBlockBlue" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$GeneralUtils$Lazy, $GeneralUtils$Lazy$$Type} from "com.telepathicgrunt.the_bumblezone.utils.GeneralUtils$Lazy"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ServerEssenceEvent, $ServerEssenceEvent$$Type} from "com.telepathicgrunt.the_bumblezone.bossbars.ServerEssenceEvent"
import {$StructurePlaceSettings, $StructurePlaceSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructurePlaceSettings"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EssenceBlockEntity, $EssenceBlockEntity$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.blockentities.EssenceBlockEntity"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EssenceBlock, $EssenceBlock$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.EssenceBlock"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EssenceBlockBlue extends $EssenceBlock {
static readonly "PLACEMENT_SETTINGS_WITH_ENTITIES": $GeneralUtils$Lazy<($StructurePlaceSettings)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($EssenceBlockBlue)>
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
static readonly "PLACEMENT_SETTINGS": $GeneralUtils$Lazy<($StructurePlaceSettings)>

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "codec"(): $MapCodec<($EssenceBlockBlue)>
public "getArenaNbt"(): $ResourceLocation
public "onPlayerEnter"(serverLevel: $ServerLevel$$Type, serverPlayer: $ServerPlayer$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type): void
public "onPlayerLeave"(serverLevel: $ServerLevel$$Type, serverPlayer: $ServerPlayer$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type): void
public "handleGiantBubbles"(serverLevel: $ServerLevel$$Type, blockPos: $BlockPos$$Type): void
public "getEventTimeFrame"(): integer
public "getServerEssenceEvent"(): $ServerEssenceEvent
public "getEssenceItemReward"(): $ResourceLocation
public "getEssenceXpReward"(): integer
public "hasMiningFatigue"(): boolean
public "awardPlayerWinStat"(serverPlayer: $ServerPlayer$$Type): void
public "performUniqueArenaTick"(serverLevel: $ServerLevel$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type): void
public "asHolder"(): $Holder<(any)>
get "arenaNbt"(): $ResourceLocation
get "eventTimeFrame"(): integer
get "serverEssenceEvent"(): $ServerEssenceEvent
get "essenceItemReward"(): $ResourceLocation
get "essenceXpReward"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceBlockBlue$$Type = ($EssenceBlockBlue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceBlockBlue_ = $EssenceBlockBlue$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.HoneyCrystal" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ProperFacingBlock, $ProperFacingBlock$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.ProperFacingBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $HoneyCrystal extends $ProperFacingBlock implements $SimpleWaterloggedBlock {
static readonly "FACING_TO_SHAPE_MAP": $Map<($Direction), ($VoxelShape)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($HoneyCrystal)>
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(properties: $BlockBehaviour$Properties$$Type)
constructor()

public "getShape"(blockstate: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "asItem"(): $Item
public "codec"(): $MapCodec<($HoneyCrystal)>
public "updateShape"(blockstate: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, world: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "canPlaceLiquid"(player: $Player$$Type, world: $BlockGetter$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, fluid: $Fluid$$Type): boolean
public "placeLiquid"(world: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, fluidState: $FluidState$$Type): boolean
public "pickupBlock"(player: $Player$$Type, world: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $ItemStack
public "canSurvive"(blockstate: $BlockState$$Type, world: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "getLightBlock"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "useItemOn"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, position: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type, raytraceResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "onProjectileHit"(level: $Level$$Type, blockState: $BlockState$$Type, blockHitResult: $BlockHitResult$$Type, projectile: $Projectile$$Type): void
public "getCloneItemStack"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public "asHolder"(): $Holder<(any)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoneyCrystal$$Type = ($HoneyCrystal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoneyCrystal_ = $HoneyCrystal$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.modules.base.Module" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"

export interface $Module<T extends $Module<(T)>> {

 "id"(): $ResourceLocation
 "codec"(): $Codec<(T)>
}

export namespace $Module {
const probejs$$marker: never
}
export class $Module$$Static<T extends $Module<(T)>> implements $Module {


 "id"(): $ResourceLocation
 "codec"(): $Codec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Module$$Type<T> = ($Module<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Module_<T> = $Module$$Type<(T)>;
}}
declare module "com.telepathicgrunt.the_bumblezone.advancements.GenericTrigger" {
import {$GenericTrigger$TriggerInstance, $GenericTrigger$TriggerInstance$$Type} from "com.telepathicgrunt.the_bumblezone.advancements.GenericTrigger$TriggerInstance"
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $GenericTrigger extends $SimpleCriterionTrigger<($GenericTrigger$TriggerInstance)> {

constructor()

public "trigger"(serverPlayer: $ServerPlayer$$Type): void
public "codec"(): $Codec<($GenericTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericTrigger$$Type = ($GenericTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericTrigger_ = $GenericTrigger$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.items.SpawnEggItemAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$SpawnEggItem, $SpawnEggItem$$Type} from "net.minecraft.world.item.SpawnEggItem"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export interface $SpawnEggItemAccessor {

}

export namespace $SpawnEggItemAccessor {
function bumblezone$getIdMap(): $Map<($EntityType<($Mob)>), ($SpawnEggItem)>
const probejs$$marker: never
}
export class $SpawnEggItemAccessor$$Static implements $SpawnEggItemAccessor {


static "bumblezone$getIdMap"(): $Map<($EntityType<($Mob)>), ($SpawnEggItem)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnEggItemAccessor$$Type = ($SpawnEggItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnEggItemAccessor_ = $SpawnEggItemAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.fluids.RoyalJellyFluidBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FluidGetter, $FluidGetter$$Type} from "com.telepathicgrunt.the_bumblezone.fluids.base.FluidGetter"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$FluidData, $FluidData$$Type} from "com.teamresourceful.resourcefullib.common.fluid.data.FluidData"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RoyalJellyFluidBlock extends $LiquidBlock implements $FluidGetter {
static readonly "maxBottomLayer": integer
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "STABLE_SHAPE": $VoxelShape
readonly "fluid": $FlowingFluid
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LiquidBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "LEVEL": $IntegerProperty
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(baseFluid: $FluidData$$Type)

public "onPlace"(blockState: $BlockState$$Type, world: $Level$$Type, blockPos: $BlockPos$$Type, previousBlockState: $BlockState$$Type, notify: boolean): void
public "updateShape"(blockState: $BlockState$$Type, direction: $Direction$$Type, previousBlockState: $BlockState$$Type, level: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, blockPos1: $BlockPos$$Type): $BlockState
public "entityInside"(state: $BlockState$$Type, world: $Level$$Type, position: $BlockPos$$Type, entity: $Entity$$Type): void
public "getFluid"(): $FlowingFluid
public "getFluidState"(blockState: $BlockState$$Type): $FluidState
public "neighborChanged"(blockState: $BlockState$$Type, world: $Level$$Type, blockPos: $BlockPos$$Type, block: $Block$$Type, fromPos: $BlockPos$$Type, notify: boolean): void
public "asHolder"(): $Holder<(any)>
get "fluid"(): $FlowingFluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoyalJellyFluidBlock$$Type = ($RoyalJellyFluidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoyalJellyFluidBlock_ = $RoyalJellyFluidBlock$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.BzShieldItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ShieldItem, $ShieldItem$$Type} from "net.minecraft.world.item.ShieldItem"

export class $BzShieldItem extends $ShieldItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "MINIMUM_DURABILITY_DAMAGE": float
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "EFFECTIVE_BLOCK_DELAY": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BzShieldItem$$Type = ($BzShieldItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BzShieldItem_ = $BzShieldItem$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.AncientWaxStairs" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$StairBlock, $StairBlock$$Type} from "net.minecraft.world.level.block.StairBlock"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Half, $Half$$Type} from "net.minecraft.world.level.block.state.properties.Half"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$AncientWaxBase, $AncientWaxBase$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.AncientWaxBase"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$StairsShape, $StairsShape$$Type} from "net.minecraft.world.level.block.state.properties.StairsShape"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $AncientWaxStairs extends $StairBlock implements $AncientWaxBase {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($AncientWaxStairs)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(state: $BlockState$$Type)
constructor(state: $BlockState$$Type, properties: $BlockBehaviour$Properties$$Type)

public "stepOn"(level: $Level$$Type, blockPos: $BlockPos$$Type, state: $BlockState$$Type, entity: $Entity$$Type): void
public "codec"(): $MapCodec<($AncientWaxStairs)>
public "useItemOn"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, position: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type, raytraceResult: $BlockHitResult$$Type): $ItemInteractionResult
public "trySwap"(itemStack: $ItemStack$$Type, currentState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type): $BlockState
public "trySwap"(itemStack: $ItemStack$$Type, currentState: $BlockState$$Type, blockPos: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type, blockIterationTag: $TagKey$$Type<($Block)>): $BlockState
public "applyEntityEffects"(currentState: $BlockState$$Type, collidingEntity: $Entity$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AncientWaxStairs$$Type = ($AncientWaxStairs);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AncientWaxStairs_ = $AncientWaxStairs$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.fluids.RoyalJellyFluid" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BzFluid, $BzFluid$$Type} from "com.telepathicgrunt.the_bumblezone.fluids.base.BzFluid"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RoyalJellyFluid extends $BzFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty


public "tick"(world: $Level$$Type, blockPos: $BlockPos$$Type, fluidState: $FluidState$$Type): void
public "getHeight"(fluidState: $FluidState$$Type, world: $BlockGetter$$Type, blockPos: $BlockPos$$Type): float
public "getSource"(): $Fluid
public "isSame"(fluid: $Fluid$$Type): boolean
public "getTickDelay"(world: $LevelReader$$Type): integer
public "getFlowing"(): $Fluid
public "animateTick"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $FluidState$$Type, random: $RandomSource$$Type): void
public "getBucket"(): $Item
public "getDropOff"(world: $LevelReader$$Type): integer
public static "adjustedFlowSpeed"(originalSpeed: integer, level: $LevelAccessor$$Type, blockPos: $BlockPos$$Type): integer
public "getSlopeFindDistance"(world: $LevelReader$$Type): integer
public "createLegacyBlock"(state: $FluidState$$Type): $BlockState
public "getDripParticle"(): $ParticleOptions
public "canBeReplacedWith"(state: $FluidState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, fluid: $Fluid$$Type, direction: $Direction$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
get "source"(): $Fluid
get "flowing"(): $Fluid
get "bucket"(): $Item
get "dripParticle"(): $ParticleOptions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoyalJellyFluid$$Type = ($RoyalJellyFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoyalJellyFluid_ = $RoyalJellyFluid$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.essence.LifeEssence" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AbilityEssenceItem, $AbilityEssenceItem$$Type} from "com.telepathicgrunt.the_bumblezone.items.essence.AbilityEssenceItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $LifeEssence extends $AbilityEssenceItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public static "spawnParticles"(world: $ServerLevel$$Type, location: $Vec3$$Type, random: $RandomSource$$Type): void
public "getColor"(): integer
public "applyAbilityEffects"(itemStack: $ItemStack$$Type, level: $Level$$Type, serverPlayer: $ServerPlayer$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LifeEssence$$Type = ($LifeEssence);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LifeEssence_ = $LifeEssence$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.gameplay.CooldownInstanceAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CooldownInstanceAccessor {

 "bumblezone$getStartTime"(): integer

(): integer
}

export namespace $CooldownInstanceAccessor {
const probejs$$marker: never
}
export class $CooldownInstanceAccessor$$Static implements $CooldownInstanceAccessor {


 "bumblezone$getStartTime"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CooldownInstanceAccessor$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CooldownInstanceAccessor_ = $CooldownInstanceAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.events.entity.BzEntityDeathEvent" {
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$CancellableEventHandler, $CancellableEventHandler$$Type} from "com.telepathicgrunt.the_bumblezone.events.base.CancellableEventHandler"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BzEntityDeathEvent extends $Record {
static readonly "EVENT_LOWEST": $CancellableEventHandler<($BzEntityDeathEvent)>
static readonly "EVENT": $CancellableEventHandler<($BzEntityDeathEvent)>

constructor(entity: $LivingEntity$$Type, source: $DamageSource$$Type)

public "entity"(): $LivingEntity
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "source"(): $DamageSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BzEntityDeathEvent$$Type = ({"source"?: $DamageSource$$Type, "entity"?: $LivingEntity$$Type}) | ([source?: $DamageSource$$Type, entity?: $LivingEntity$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BzEntityDeathEvent_ = $BzEntityDeathEvent$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.LuminescentWaxCornerNode" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$MapColor, $MapColor$$Type} from "net.minecraft.world.level.material.MapColor"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LuminescentWaxBase, $LuminescentWaxBase$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.LuminescentWaxBase"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$RotationFacingBlock, $RotationFacingBlock$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.RotationFacingBlock"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LuminescentWaxCornerNode extends $RotationFacingBlock implements $LuminescentWaxBase {
static readonly "ROTATION": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LuminescentWaxCornerNode)>
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

constructor(mapColor: $MapColor$$Type, light: integer)
constructor(properties: $BlockBehaviour$Properties$$Type)

public "stepOn"(level: $Level$$Type, blockPos: $BlockPos$$Type, state: $BlockState$$Type, entity: $Entity$$Type): void
public "codec"(): $MapCodec<($LuminescentWaxCornerNode)>
public "useItemOn"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, position: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type, raytraceResult: $BlockHitResult$$Type): $ItemInteractionResult
public "tryRotate"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, position: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type): $BlockState
public "applyEntityEffects"(currentState: $BlockState$$Type, collidingEntity: $Entity$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuminescentWaxCornerNode$$Type = ($LuminescentWaxCornerNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuminescentWaxCornerNode_ = $LuminescentWaxCornerNode$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.entities.AbstractArrowAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $AbstractArrowAccessor {

 "bumblezone$callGetPickupItem"(): $ItemStack

(): $ItemStack$$Type
}

export namespace $AbstractArrowAccessor {
const probejs$$marker: never
}
export class $AbstractArrowAccessor$$Static implements $AbstractArrowAccessor {


 "bumblezone$callGetPickupItem"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractArrowAccessor$$Type = (() => $ItemStack$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractArrowAccessor_ = $AbstractArrowAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.fluids.RoyalJellyFluid$Flowing" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$RoyalJellyFluid, $RoyalJellyFluid$$Type} from "com.telepathicgrunt.the_bumblezone.fluids.RoyalJellyFluid"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$FluidData, $FluidData$$Type} from "com.teamresourceful.resourcefullib.common.fluid.data.FluidData"

export class $RoyalJellyFluid$Flowing extends $RoyalJellyFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(properties: $FluidData$$Type)

public "getAmount"(state: $FluidState$$Type): integer
public "isSource"(state: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoyalJellyFluid$Flowing$$Type = ($RoyalJellyFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoyalJellyFluid$Flowing_ = $RoyalJellyFluid$Flowing$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.essence.EssenceOfTheBees" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $EssenceOfTheBees extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "isFoil"(itemStack: $ItemStack$$Type): boolean
public static "spawnParticles"(world: $ServerLevel$$Type, location: $Vec3$$Type, random: $RandomSource$$Type): void
public "getEatingSound"(): $SoundEvent
public "getUseDuration"(itemStack: $ItemStack$$Type, livingEntity: $LivingEntity$$Type): integer
public static "hasEssence"(serverPlayer: $ServerPlayer$$Type): boolean
public static "setEssence"(serverPlayer: $ServerPlayer$$Type, newValue: boolean): void
public "finishUsingItem"(itemStack: $ItemStack$$Type, level: $Level$$Type, livingEntity: $LivingEntity$$Type): $ItemStack
public "getDrinkingSound"(): $SoundEvent
public "getUseAnimation"(itemStack: $ItemStack$$Type): $UseAnim
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "eatingSound"(): $SoundEvent
get "drinkingSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceOfTheBees$$Type = ($EssenceOfTheBees);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceOfTheBees_ = $EssenceOfTheBees$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.HoneyCrystalFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$HoneyCrystalFeatureConfig, $HoneyCrystalFeatureConfig$$Type} from "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.HoneyCrystalFeatureConfig"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $HoneyCrystalFeature extends $Feature<($HoneyCrystalFeatureConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(configFactory: $Codec$$Type<($HoneyCrystalFeatureConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($HoneyCrystalFeatureConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoneyCrystalFeature$$Type = ($HoneyCrystalFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoneyCrystalFeature_ = $HoneyCrystalFeature$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.advancements.GenericTrigger$TriggerInstance" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $GenericTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($GenericTrigger$TriggerInstance)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(passthrough: boolean): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericTrigger$TriggerInstance_ = $GenericTrigger$TriggerInstance$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.PollenPuff" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ProjectileItem$DispenseConfig, $ProjectileItem$DispenseConfig$$Type} from "net.minecraft.world.item.ProjectileItem$DispenseConfig"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Position, $Position$$Type} from "net.minecraft.core.Position"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ProjectileItem, $ProjectileItem$$Type} from "net.minecraft.world.item.ProjectileItem"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $PollenPuff extends $Item implements $ProjectileItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(world: $Level$$Type, playerEntity: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "asProjectile"(level: $Level$$Type, position: $Position$$Type, itemStack: $ItemStack$$Type, direction: $Direction$$Type): $Projectile
public static "spawnItemstackEntity"(world: $Level$$Type, pos: $Vec3$$Type, itemStack: $ItemStack$$Type): void
public static "spawnItemstackEntity"(world: $Level$$Type, random: $RandomSource$$Type, blockPos: $BlockPos$$Type, itemStack: $ItemStack$$Type): void
public "shoot"(arg0: $Projectile$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float): void
public "createDispenseConfig"(): $ProjectileItem$DispenseConfig
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PollenPuff$$Type = ($PollenPuff);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PollenPuff_ = $PollenPuff$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.HoneyWeb" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $HoneyWeb extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($HoneyWeb)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "AXIS_TO_PROP": $Map<($Direction$Axis), ($BooleanProperty)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDOWN": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "NORTHSOUTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "EASTWEST": $BooleanProperty
 "hasCollision": boolean

constructor(properties: $BlockBehaviour$Properties$$Type)
constructor()

public "rotate"(blockState: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "getShape"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type, collisionContext: $CollisionContext$$Type): $VoxelShape
public "codec"(): $MapCodec<($HoneyWeb)>
public "entityInside"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, entity: $Entity$$Type): void
public "useItemOn"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, position: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type, raytraceResult: $BlockHitResult$$Type): $ItemInteractionResult
public "animateTick"(blockState: $BlockState$$Type, world: $Level$$Type, position: $BlockPos$$Type, random: $RandomSource$$Type): void
public "getStateForPlacement"(placeContext: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoneyWeb$$Type = ($HoneyWeb);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoneyWeb_ = $HoneyWeb$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.ItemFrameConfig$Attachment" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $ItemFrameConfig$Attachment extends $Enum<($ItemFrameConfig$Attachment)> implements $StringRepresentable {
static readonly "FLOOR": $ItemFrameConfig$Attachment
static readonly "WALL": $ItemFrameConfig$Attachment
static readonly "CODEC": $StringRepresentable$EnumCodec<($ItemFrameConfig$Attachment)>
static readonly "CEILING": $ItemFrameConfig$Attachment


public static "values"(): ($ItemFrameConfig$Attachment)[]
public static "valueOf"(name: StringJS): $ItemFrameConfig$Attachment
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFrameConfig$Attachment$$Type = (("floor") | ("ceiling") | ("wall"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFrameConfig$Attachment_ = $ItemFrameConfig$Attachment$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.items.PlayerDamageShieldInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerDamageShieldInvoker {

 "bumblezone$callHurtCurrentlyUsedShield"(arg0: float): void

(arg0: float): void
}

export namespace $PlayerDamageShieldInvoker {
const probejs$$marker: never
}
export class $PlayerDamageShieldInvoker$$Static implements $PlayerDamageShieldInvoker {


 "bumblezone$callHurtCurrentlyUsedShield"(arg0: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDamageShieldInvoker$$Type = ((arg0: float) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerDamageShieldInvoker_ = $PlayerDamageShieldInvoker$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.DirtPellet" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ProjectileItem$DispenseConfig, $ProjectileItem$DispenseConfig$$Type} from "net.minecraft.world.item.ProjectileItem$DispenseConfig"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Position, $Position$$Type} from "net.minecraft.core.Position"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ProjectileItem, $ProjectileItem$$Type} from "net.minecraft.world.item.ProjectileItem"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $DirtPellet extends $Item implements $ProjectileItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(world: $Level$$Type, playerEntity: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "asProjectile"(level: $Level$$Type, position: $Position$$Type, itemStack: $ItemStack$$Type, direction: $Direction$$Type): $Projectile
public "shoot"(arg0: $Projectile$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float): void
public "createDispenseConfig"(): $ProjectileItem$DispenseConfig
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirtPellet$$Type = ($DirtPellet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirtPellet_ = $DirtPellet$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.EssenceBlockYellow" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$GeneralUtils$Lazy, $GeneralUtils$Lazy$$Type} from "com.telepathicgrunt.the_bumblezone.utils.GeneralUtils$Lazy"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ServerEssenceEvent, $ServerEssenceEvent$$Type} from "com.telepathicgrunt.the_bumblezone.bossbars.ServerEssenceEvent"
import {$StructurePlaceSettings, $StructurePlaceSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructurePlaceSettings"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EssenceBlockEntity, $EssenceBlockEntity$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.blockentities.EssenceBlockEntity"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$ElectricRingEntity, $ElectricRingEntity$$Type} from "com.telepathicgrunt.the_bumblezone.entities.nonliving.ElectricRingEntity"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EssenceBlock, $EssenceBlock$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.EssenceBlock"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EssenceBlockYellow extends $EssenceBlock {
static readonly "PLACEMENT_SETTINGS_WITH_ENTITIES": $GeneralUtils$Lazy<($StructurePlaceSettings)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($EssenceBlockYellow)>
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
static readonly "PLACEMENT_SETTINGS": $GeneralUtils$Lazy<($StructurePlaceSettings)>

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "codec"(): $MapCodec<($EssenceBlockYellow)>
public "getArenaNbt"(): $ResourceLocation
public "onPlayerEnter"(serverLevel: $ServerLevel$$Type, serverPlayer: $ServerPlayer$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type): void
public "onPlayerLeave"(serverLevel: $ServerLevel$$Type, serverPlayer: $ServerPlayer$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type): void
public "ringActivated"(electricRingEntity: $ElectricRingEntity$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type, serverPlayer: $ServerPlayer$$Type): void
public "getEventTimeFrame"(): integer
public "getServerEssenceEvent"(): $ServerEssenceEvent
public "getEssenceItemReward"(): $ResourceLocation
public "getEssenceXpReward"(): integer
public "hasMiningFatigue"(): boolean
public "awardPlayerWinStat"(serverPlayer: $ServerPlayer$$Type): void
public "performUniqueArenaTick"(serverLevel: $ServerLevel$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type): void
public "asHolder"(): $Holder<(any)>
get "arenaNbt"(): $ResourceLocation
get "eventTimeFrame"(): integer
get "serverEssenceEvent"(): $ServerEssenceEvent
get "essenceItemReward"(): $ResourceLocation
get "essenceXpReward"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceBlockYellow$$Type = ($EssenceBlockYellow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceBlockYellow_ = $EssenceBlockYellow$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.recipes.PotionCandleRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$CustomRecipe, $CustomRecipe$$Type} from "net.minecraft.world.item.crafting.CustomRecipe"
import {$AtomicInteger, $AtomicInteger$$Type} from "java.util.concurrent.atomic.AtomicInteger"
import {$CraftingRecipe, $CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $PotionCandleRecipe extends $CustomRecipe implements $CraftingRecipe {

constructor(category: $CraftingBookCategory$$Type, group: StringJS, outputCount: integer, maxAllowedPotions: integer, shapedRecipeItems: $NonNullList$$Type<($Ingredient$$Type)>, shapelessRecipeItems: $NonNullList$$Type<($Ingredient$$Type)>, width: integer, height: integer, allowNormalPotions: boolean, allowSplashPotions: boolean, allowLingeringPotions: boolean, maxLevelCap: integer)

public "category"(): $CraftingBookCategory
public "getWidth"(): integer
public "getHeight"(): integer
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(craftingInput: $CraftingInput$$Type, level: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(provider: $HolderLookup$Provider$$Type): $ItemStack
public "isSpecial"(): boolean
public "getMaxLevelCap"(): integer
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(craftingInput: $CraftingInput$$Type, provider: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(width: integer, height: integer): boolean
public "getMaxAllowedPotions"(): integer
public "getAllowNormalPotions"(): boolean
public "getAllowSplashPotions"(): boolean
public "getShapedRecipeItems"(): $NonNullList<($Ingredient)>
public static "balanceMainStats"(chosenEffect: $MobEffect$$Type, maxDuration: $AtomicInteger$$Type, effectLevel: $AtomicInteger$$Type, potionEffectsFound: $AtomicInteger$$Type): void
public "getAllowLingeringPotions"(): boolean
public "getShapelessRecipeItems"(): $NonNullList<($Ingredient)>
public static "createTaggedPotionCandle"(chosenEffect: $MobEffect$$Type, maxDuration: $AtomicInteger$$Type, effectLevel: $AtomicInteger$$Type, splashCount: integer, lingerCount: integer, outputCount: integer): $ItemStack
get "width"(): integer
get "height"(): integer
get "type"(): $RecipeType<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "special"(): boolean
get "maxLevelCap"(): integer
get "serializer"(): $RecipeSerializer<(any)>
get "maxAllowedPotions"(): integer
get "allowNormalPotions"(): boolean
get "allowSplashPotions"(): boolean
get "shapedRecipeItems"(): $NonNullList<($Ingredient)>
get "allowLingeringPotions"(): boolean
get "shapelessRecipeItems"(): $NonNullList<($Ingredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionCandleRecipe$$Type = ($PotionCandleRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionCandleRecipe_ = $PotionCandleRecipe$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.world.StructurePoolAccessor" {
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$StructurePoolElement, $StructurePoolElement$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"

export interface $StructurePoolAccessor {

 "bumblezone$getRawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>

(): $List$$Type<($Pair$$Type<($StructurePoolElement$$Type), (integer)>)>
}

export namespace $StructurePoolAccessor {
const probejs$$marker: never
}
export class $StructurePoolAccessor$$Static implements $StructurePoolAccessor {


 "bumblezone$getRawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructurePoolAccessor$$Type = (() => $List$$Type<($Pair$$Type<($StructurePoolElement$$Type), (integer)>)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructurePoolAccessor_ = $StructurePoolAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.NbtOreConfiguration" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$NbtOreConfiguration$TargetBlockState, $NbtOreConfiguration$TargetBlockState$$Type} from "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.NbtOreConfiguration$TargetBlockState"
import {$List, $List$$Type} from "java.util.List"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $NbtOreConfiguration implements $FeatureConfiguration {
readonly "discardChanceOnAirExposure": float
static readonly "CODEC": $Codec<($NbtOreConfiguration)>
readonly "size": integer
readonly "targetStates": $List<($NbtOreConfiguration$TargetBlockState)>

constructor(targetStates: $List$$Type<($NbtOreConfiguration$TargetBlockState$$Type)>, size: integer, discardChanceOnAirExposure: float)

public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NbtOreConfiguration$$Type = ($NbtOreConfiguration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NbtOreConfiguration_ = $NbtOreConfiguration$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.platform.ItemExtension" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$FoodProperties, $FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ArmorMaterial$Layer, $ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemEnchantments, $ItemEnchantments$$Type} from "net.minecraft.world.item.enchantment.ItemEnchantments"
import {$IItemExtension, $IItemExtension$$Type} from "net.neoforged.neoforge.common.extensions.IItemExtension"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$HolderLookup$RegistryLookup, $HolderLookup$RegistryLookup$$Type} from "net.minecraft.core.HolderLookup$RegistryLookup"
import {$ItemEntity, $ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$EnderMan, $EnderMan$$Type} from "net.minecraft.world.entity.monster.EnderMan"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$TriState, $TriState$$Type} from "com.telepathicgrunt.the_bumblezone.utils.TriState"
import {$EnchantmentInstance, $EnchantmentInstance$$Type} from "net.minecraft.world.item.enchantment.EnchantmentInstance"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"

export interface $ItemExtension extends $IItemExtension {

 "getBzItem"(): $Item
 "bz$setDamage"(stack: $ItemStack$$Type, damage: integer): void
 "bz$onArmorTick"(itemstack: $ItemStack$$Type, world: $Level$$Type, player: $Player$$Type): void
 "bz$canEnchant"(itemstack: $ItemStack$$Type, enchantment: $Holder$$Type<($Enchantment)>): $TriState
 "bz$getEquipmentSlot"(stack: $ItemStack$$Type): $EquipmentSlot
 "bz$canPerformAction"(stack: $ItemStack$$Type, toolAction: StringJS): boolean
 "canPerformAction"(stack: $ItemStack$$Type, itemAbility: $ItemAbility$$Type): boolean
 "createEntity"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $ItemStack$$Type): $Entity
 "isRepairable"(arg0: $ItemStack$$Type): boolean
 "isDamageable"(arg0: $ItemStack$$Type): boolean
 "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
 "canEquip"(arg0: $ItemStack$$Type, arg1: $EquipmentSlot$$Type, arg2: $LivingEntity$$Type): boolean
 "setDamage"(arg0: $ItemStack$$Type, arg1: integer): void
 "getBurnTime"(arg0: $ItemStack$$Type, arg1: $RecipeType$$Type<(any)>): integer
 "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: integer, arg2: T, arg3: $Consumer$$Type<($Item)>): integer
 "isEnderMask"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $EnderMan$$Type): boolean
 "canBeHurtBy"(arg0: $ItemStack$$Type, arg1: $DamageSource$$Type): boolean
 "getDamage"(arg0: $ItemStack$$Type): integer
 "onStopUsing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer): void
 "getMaxDamage"(arg0: $ItemStack$$Type): integer
/**
 * 
 * @deprecated
 */
 "onEntitySwing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
 "onEntitySwing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $InteractionHand$$Type): boolean
 "getSweepHitBox"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $Entity$$Type): $AABB
 "onDestroyed"(arg0: $ItemEntity$$Type, arg1: $DamageSource$$Type): void
 "isDamaged"(arg0: $ItemStack$$Type): boolean
 "canElytraFly"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
 "getEnchantmentValue"(arg0: $ItemStack$$Type): integer
 "supportsEnchantment"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
 "onDroppedByPlayer"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
 "getHighlightTip"(arg0: $ItemStack$$Type, arg1: $Component$$Type): $Component
 "isPiglinCurrency"(arg0: $ItemStack$$Type): boolean
 "getXpRepairRatio"(arg0: $ItemStack$$Type): float
 "onLeftClickEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $Entity$$Type): boolean
 "getEntityLifespan"(arg0: $ItemStack$$Type, arg1: $Level$$Type): integer
 "hasCustomEntity"(arg0: $ItemStack$$Type): boolean
 "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
 "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
 "isBookEnchantable"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
 "getArmorTexture"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $EquipmentSlot$$Type, arg3: $ArmorMaterial$Layer$$Type, arg4: boolean): $ResourceLocation
 "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
 "getEnchantmentLevel"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): integer
 "getAllEnchantments"(arg0: $ItemStack$$Type, arg1: $HolderLookup$RegistryLookup$$Type<($Enchantment$$Type)>): $ItemEnchantments
 "getCreatorModId"(arg0: $ItemStack$$Type): StringJS
 "onAnimalArmorTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Mob$$Type): void
 "canGrindstoneRepair"(arg0: $ItemStack$$Type): boolean
 "applyEnchantments"(arg0: $ItemStack$$Type, arg1: $List$$Type<($EnchantmentInstance$$Type)>): $ItemStack
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
 "getEquipmentSlot"(arg0: $ItemStack$$Type): $EquipmentSlot
 "canWalkOnPowderedSnow"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
 "makesPiglinsNeutral"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
 "elytraFlightTick"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer): boolean
 "canContinueUsing"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
 "getFoodProperties"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): $FoodProperties
 "canDisableShield"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type, arg3: $LivingEntity$$Type): boolean
 "getCraftingRemainingItem"(arg0: $ItemStack$$Type): $ItemStack
 "hasCraftingRemainingItem"(arg0: $ItemStack$$Type): boolean
 "getDefaultAttributeModifiers"(arg0: $ItemStack$$Type): $ItemAttributeModifiers
 "canFitInsideContainerItems"(arg0: $ItemStack$$Type): boolean
 "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
 "isNotReplaceableByPickAction"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: integer): boolean

(arg0: $ItemStack): boolean
get "bzItem"(): $Item
}

export namespace $ItemExtension {
const probejs$$marker: never
}
export class $ItemExtension$$Static implements $ItemExtension {


 "getBzItem"(): $Item
 "bz$setDamage"(stack: $ItemStack$$Type, damage: integer): void
 "bz$onArmorTick"(itemstack: $ItemStack$$Type, world: $Level$$Type, player: $Player$$Type): void
 "bz$canEnchant"(itemstack: $ItemStack$$Type, enchantment: $Holder$$Type<($Enchantment)>): $TriState
 "bz$getEquipmentSlot"(stack: $ItemStack$$Type): $EquipmentSlot
 "bz$canPerformAction"(stack: $ItemStack$$Type, toolAction: StringJS): boolean
 "canPerformAction"(stack: $ItemStack$$Type, itemAbility: $ItemAbility$$Type): boolean
 "createEntity"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $ItemStack$$Type): $Entity
 "isRepairable"(arg0: $ItemStack$$Type): boolean
 "isDamageable"(arg0: $ItemStack$$Type): boolean
 "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
 "canEquip"(arg0: $ItemStack$$Type, arg1: $EquipmentSlot$$Type, arg2: $LivingEntity$$Type): boolean
 "setDamage"(arg0: $ItemStack$$Type, arg1: integer): void
 "getBurnTime"(arg0: $ItemStack$$Type, arg1: $RecipeType$$Type<(any)>): integer
 "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: integer, arg2: T, arg3: $Consumer$$Type<($Item)>): integer
 "isEnderMask"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $EnderMan$$Type): boolean
 "canBeHurtBy"(arg0: $ItemStack$$Type, arg1: $DamageSource$$Type): boolean
 "getDamage"(arg0: $ItemStack$$Type): integer
 "onStopUsing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer): void
 "getMaxDamage"(arg0: $ItemStack$$Type): integer
/**
 * 
 * @deprecated
 */
 "onEntitySwing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
 "onEntitySwing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $InteractionHand$$Type): boolean
 "getSweepHitBox"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $Entity$$Type): $AABB
 "onDestroyed"(arg0: $ItemEntity$$Type, arg1: $DamageSource$$Type): void
 "isDamaged"(arg0: $ItemStack$$Type): boolean
 "canElytraFly"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
 "getEnchantmentValue"(arg0: $ItemStack$$Type): integer
 "supportsEnchantment"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
 "onDroppedByPlayer"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
 "getHighlightTip"(arg0: $ItemStack$$Type, arg1: $Component$$Type): $Component
 "isPiglinCurrency"(arg0: $ItemStack$$Type): boolean
 "getXpRepairRatio"(arg0: $ItemStack$$Type): float
 "onLeftClickEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $Entity$$Type): boolean
 "getEntityLifespan"(arg0: $ItemStack$$Type, arg1: $Level$$Type): integer
 "hasCustomEntity"(arg0: $ItemStack$$Type): boolean
 "onEntityItemUpdate"(arg0: $ItemStack$$Type, arg1: $ItemEntity$$Type): boolean
 "doesSneakBypassUse"(arg0: $ItemStack$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
 "isBookEnchantable"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
 "getArmorTexture"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $EquipmentSlot$$Type, arg3: $ArmorMaterial$Layer$$Type, arg4: boolean): $ResourceLocation
 "isPrimaryItemFor"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
 "getEnchantmentLevel"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): integer
 "getAllEnchantments"(arg0: $ItemStack$$Type, arg1: $HolderLookup$RegistryLookup$$Type<($Enchantment$$Type)>): $ItemEnchantments
 "getCreatorModId"(arg0: $ItemStack$$Type): StringJS
 "onAnimalArmorTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Mob$$Type): void
 "canGrindstoneRepair"(arg0: $ItemStack$$Type): boolean
 "applyEnchantments"(arg0: $ItemStack$$Type, arg1: $List$$Type<($EnchantmentInstance$$Type)>): $ItemStack
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
 "getEquipmentSlot"(arg0: $ItemStack$$Type): $EquipmentSlot
 "canWalkOnPowderedSnow"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
 "makesPiglinsNeutral"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
 "elytraFlightTick"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer): boolean
 "canContinueUsing"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
 "getFoodProperties"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): $FoodProperties
 "canDisableShield"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $LivingEntity$$Type, arg3: $LivingEntity$$Type): boolean
 "getCraftingRemainingItem"(arg0: $ItemStack$$Type): $ItemStack
 "hasCraftingRemainingItem"(arg0: $ItemStack$$Type): boolean
 "getDefaultAttributeModifiers"(arg0: $ItemStack$$Type): $ItemAttributeModifiers
 "canFitInsideContainerItems"(arg0: $ItemStack$$Type): boolean
 "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
 "isNotReplaceableByPickAction"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemExtension$$Type = ((arg0: $ItemStack) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemExtension_ = $ItemExtension$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.HoneyCrystalShield" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemExtension, $ItemExtension$$Type} from "com.telepathicgrunt.the_bumblezone.platform.ItemExtension"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BzShieldItem, $BzShieldItem$$Type} from "com.telepathicgrunt.the_bumblezone.items.BzShieldItem"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$TriState, $TriState$$Type} from "com.telepathicgrunt.the_bumblezone.utils.TriState"
import {$BzEntityAttackedEvent, $BzEntityAttackedEvent$$Type} from "com.telepathicgrunt.the_bumblezone.events.entity.BzEntityAttackedEvent"

export class $HoneyCrystalShield extends $BzShieldItem implements $ItemExtension {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "MINIMUM_DURABILITY_DAMAGE": float
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "EFFECTIVE_BLOCK_DELAY": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type, initialDurability: integer)

public "setDamage"(stack: $ItemStack$$Type, damage: integer): void
public "getBarWidth"(itemStack: $ItemStack$$Type): integer
public "getBarColor"(itemStack: $ItemStack$$Type): integer
public "bz$setDamage"(itemStack: $ItemStack$$Type, damage: integer): void
public "bz$canEnchant"(itemstack: $ItemStack$$Type, enchantment: $Holder$$Type<($Enchantment)>): $TriState
public "bz$getEquipmentSlot"(stack: $ItemStack$$Type): $EquipmentSlot
public "bz$canPerformAction"(stack: $ItemStack$$Type, toolAction: StringJS): boolean
public static "slowPhysicalAttackers"(source: $DamageSource$$Type, player: $Player$$Type): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flagIn: $TooltipFlag$$Type): void
public "isValidRepairItem"(toRepair: $ItemStack$$Type, repair: $ItemStack$$Type): boolean
public "getEquipmentSlot"(stack: $ItemStack$$Type): $EquipmentSlot
public static "damageShieldFromExplosionAndFire"(source: $DamageSource$$Type, player: $Player$$Type): boolean
public "verifyComponentsAfterLoad"(itemStack: $ItemStack$$Type): void
public static "handledPlayerHurtBehavior"(event: $BzEntityAttackedEvent$$Type): boolean
public "getBzItem"(): $Item
public "bz$onArmorTick"(itemstack: $ItemStack$$Type, world: $Level$$Type, player: $Player$$Type): void
public "canPerformAction"(stack: $ItemStack$$Type, itemAbility: $ItemAbility$$Type): boolean
public "isRepairable"(arg0: $ItemStack$$Type): boolean
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "bzItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoneyCrystalShield$$Type = ($HoneyCrystalShield);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoneyCrystalShield_ = $HoneyCrystalShield$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.NbtOreConfiguration$TargetBlockState" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RuleTest, $RuleTest$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $NbtOreConfiguration$TargetBlockState {
static readonly "CODEC": $Codec<($NbtOreConfiguration$TargetBlockState)>
readonly "state": $BlockState
readonly "stateNbt": $CompoundTag
readonly "target": $RuleTest


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NbtOreConfiguration$TargetBlockState$$Type = ($NbtOreConfiguration$TargetBlockState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NbtOreConfiguration$TargetBlockState_ = $NbtOreConfiguration$TargetBlockState$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.world.SinglePoolElementAccessor" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$StructureTemplate, $StructureTemplate$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate"

export interface $SinglePoolElementAccessor {

 "bumblezone$getTemplate"(): $Either<($ResourceLocation), ($StructureTemplate)>

(): $Either$$Type<($ResourceLocation$$Type), ($StructureTemplate$$Type)>
}

export namespace $SinglePoolElementAccessor {
const probejs$$marker: never
}
export class $SinglePoolElementAccessor$$Static implements $SinglePoolElementAccessor {


 "bumblezone$getTemplate"(): $Either<($ResourceLocation), ($StructureTemplate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SinglePoolElementAccessor$$Type = (() => $Either$$Type<($ResourceLocation$$Type), ($StructureTemplate$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SinglePoolElementAccessor_ = $SinglePoolElementAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.effects.MobEffectInstanceAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MobEffectInstanceAccessor {

 "bumblezone$setDuration"(arg0: integer): void
 "bumblezone$callTickDownDuration"(): integer
}

export namespace $MobEffectInstanceAccessor {
const probejs$$marker: never
}
export class $MobEffectInstanceAccessor$$Static implements $MobEffectInstanceAccessor {


 "bumblezone$setDuration"(arg0: integer): void
 "bumblezone$callTickDownDuration"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectInstanceAccessor$$Type = ($MobEffectInstanceAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobEffectInstanceAccessor_ = $MobEffectInstanceAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.PileOfPollenSuspicious" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$StateReturningBrushableBlock, $StateReturningBrushableBlock$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.StateReturningBrushableBlock"
import {$BrushableBlock, $BrushableBlock$$Type} from "net.minecraft.world.level.block.BrushableBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Panda, $Panda$$Type} from "net.minecraft.world.entity.animal.Panda"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $PileOfPollenSuspicious extends $BrushableBlock implements $StateReturningBrushableBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($PileOfPollenSuspicious)>
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
static readonly "TICK_DELAY": integer
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(block: $Block$$Type, soundEvent1: $SoundEvent$$Type, soundEvent2: $SoundEvent$$Type, properties: $BlockBehaviour$Properties$$Type)
constructor()

public "tick"(blockState: $BlockState$$Type, serverLevel: $ServerLevel$$Type, blockPos: $BlockPos$$Type, randomSource: $RandomSource$$Type): void
public "getShape"(blockState: $BlockState$$Type, world: $BlockGetter$$Type, blockPos: $BlockPos$$Type, selectionContext: $CollisionContext$$Type): $VoxelShape
public "destroy"(world: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): void
public "asItem"(): $Item
public "codec"(): $MapCodec<($BrushableBlock)>
public "getVisualShape"(blockState: $BlockState$$Type, world: $BlockGetter$$Type, blockPos: $BlockPos$$Type, selectionContext: $CollisionContext$$Type): $VoxelShape
public "updateShape"(oldBlockState: $BlockState$$Type, direction: $Direction$$Type, newBlockState: $BlockState$$Type, world: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, blockPos1: $BlockPos$$Type): $BlockState
public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public "getTurnsInto"(): $Block
public static "spawnParticles"(blockState: $BlockState$$Type, world: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, random: $RandomSource$$Type, disturbed: boolean): void
public static "spawnParticles"(world: $LevelAccessor$$Type, location: $Vec3$$Type, random: $RandomSource$$Type, speedXZModifier: double, speedYModifier: double, initYSpeed: double): void
public "entityInside"(blockState: $BlockState$$Type, world: $Level$$Type, blockPos: $BlockPos$$Type, entity: $Entity$$Type): void
public "canSurvive"(blockState: $BlockState$$Type, world: $LevelReader$$Type, blockPos: $BlockPos$$Type): boolean
public "animateTick"(blockState: $BlockState$$Type, world: $Level$$Type, blockPos: $BlockPos$$Type, random: $RandomSource$$Type): void
public static "pandaSneezing"(pandaEntity: $Panda$$Type): void
public static "spawnParticlesServer"(world: $LevelAccessor$$Type, location: $Vec3$$Type, random: $RandomSource$$Type, speedXZModifier: double, speedYModifier: double, initYSpeed: double, numberOfParticles: integer): void
public "getTurnsIntoState"(): $BlockState
public "getBlockSupportShape"(blockState: $BlockState$$Type, world: $BlockGetter$$Type, blockPos: $BlockPos$$Type): $VoxelShape
public "getCollisionShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getCloneItemStack"(world: $LevelReader$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $ItemStack
public "useShapeForLightOcclusion"(blockState: $BlockState$$Type): boolean
public "asHolder"(): $Holder<(any)>
get "turnsInto"(): $Block
get "turnsIntoState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PileOfPollenSuspicious$$Type = ($PileOfPollenSuspicious);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PileOfPollenSuspicious_ = $PileOfPollenSuspicious$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.BeehiveBeeswax" {
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BeehiveBeeswax extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BeehiveBeeswax)>
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

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "codec"(): $MapCodec<($BeehiveBeeswax)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeehiveBeeswax$$Type = ($BeehiveBeeswax);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeehiveBeeswax_ = $BeehiveBeeswax$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.datacomponents.HoneyCompassBaseData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $HoneyCompassBaseData extends $Record {
static readonly "DIRECT_CODEC": $Codec<($HoneyCompassBaseData)>
static readonly "DIRECT_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($HoneyCompassBaseData)>

constructor()
constructor(compassType: StringJS, customName: $Optional$$Type<(StringJS)>, customDescription: $Optional$$Type<(StringJS)>)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "customName"(): $Optional<(StringJS)>
public "isDifferent"(compassType: StringJS, customName: $Optional$$Type<(StringJS)>, customDescription: $Optional$$Type<(StringJS)>): boolean
public "isBlockCompass"(): boolean
public "compassType"(): StringJS
public "isStructureCompass"(): boolean
public "customDescription"(): $Optional<(StringJS)>
get "blockCompass"(): boolean
get "structureCompass"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoneyCompassBaseData$$Type = ({"customName"?: (StringJS)?, "compassType"?: StringJS, "customDescription"?: (StringJS)?}) | ([customName?: (StringJS)?, compassType?: StringJS, customDescription?: (StringJS)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoneyCompassBaseData_ = $HoneyCompassBaseData$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.events.base.CancellableEventHandler$CancellableFunctionNoReturn" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CancellableEventHandler$CancellableFunctionNoReturn<T> {

 "apply"(arg0: boolean, arg1: T): void

(arg0: boolean, arg1: T): void
}

export namespace $CancellableEventHandler$CancellableFunctionNoReturn {
const probejs$$marker: never
}
export class $CancellableEventHandler$CancellableFunctionNoReturn$$Static<T> implements $CancellableEventHandler$CancellableFunctionNoReturn {


 "apply"(arg0: boolean, arg1: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CancellableEventHandler$CancellableFunctionNoReturn$$Type<T> = ((arg0: boolean, arg1: T) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CancellableEventHandler$CancellableFunctionNoReturn_<T> = $CancellableEventHandler$CancellableFunctionNoReturn$$Type<(T)>;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.CarvableWax" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ProperFacingBlock, $ProperFacingBlock$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.ProperFacingBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$CarvableWax$Carving, $CarvableWax$Carving$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.CarvableWax$Carving"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CarvableWax extends $ProperFacingBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CarvableWax)>
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
static readonly "CARVING": $EnumProperty<($CarvableWax$Carving)>
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "asItem"(): $Item
public "codec"(): $MapCodec<($CarvableWax)>
public "useItemOn"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, position: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type, raytraceResult: $BlockHitResult$$Type): $ItemInteractionResult
public "toItemStack"(state: $BlockState$$Type): $ItemStack
public "tryCarve"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, position: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type): $BlockState
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type): integer
public "getCloneItemStack"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public static "getFacingStateForPlacement"(carvableWaxBlockState: $BlockState$$Type, context: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarvableWax$$Type = ($CarvableWax);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarvableWax_ = $CarvableWax$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.platform.BlockExtension" {
import {$MapColor, $MapColor$$Type} from "net.minecraft.world.level.material.MapColor"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerPlayer$RespawnPosAngle, $ServerPlayer$RespawnPosAngle$$Type} from "net.minecraft.server.level.ServerPlayer$RespawnPosAngle"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IBlockExtension, $IBlockExtension$$Type} from "net.neoforged.neoforge.common.extensions.IBlockExtension"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$OptionalBoolean, $OptionalBoolean$$Type} from "com.telepathicgrunt.the_bumblezone.utils.OptionalBoolean"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BubbleColumnDirection, $BubbleColumnDirection$$Type} from "net.neoforged.neoforge.common.enums.BubbleColumnDirection"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$TriState, $TriState$$Type} from "net.neoforged.neoforge.common.util.TriState"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SoundType, $SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$CallbackInfoReturnable, $CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SignalGetter, $SignalGetter$$Type} from "net.minecraft.world.level.SignalGetter"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$PushReaction, $PushReaction$$Type} from "net.minecraft.world.level.material.PushReaction"

export interface $BlockExtension extends $IBlockExtension {

 "isStickyBlock"(state: $BlockState$$Type): boolean
 "canStickTo"(state: $BlockState$$Type, other: $BlockState$$Type): boolean
 "bz$canStickTo"(state: $BlockState$$Type, other: $BlockState$$Type): $OptionalBoolean
 "bz$isStickyBlock"(state: $BlockState$$Type): boolean
 "bz$getBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type): $PathType
 "getBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type): $PathType
 "bz$shouldNotDisplayFluidOverlay"(): $OptionalBoolean
 "shouldDisplayFluidOverlay"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, fluidState: $FluidState$$Type): boolean
 "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
 "isEmpty"(arg0: $BlockState$$Type): boolean
 "isBed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "isFlammable"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "onCaughtFire"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $LivingEntity$$Type): void
 "isFireSource"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "canBeHydrated"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type, arg4: $BlockPos$$Type): boolean
 "getMapColor"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $MapColor$$Type): $MapColor
 "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
 "isLadder"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "isBurning"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "onTreeGrow"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BiConsumer$$Type<($BlockPos), ($BlockState)>, arg3: $RandomSource$$Type, arg4: $BlockPos$$Type, arg5: $TreeConfiguration$$Type): boolean
 "isFertile"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "isConduitFrame"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
 "isPortalFrame"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "getExpDrop"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type, arg4: $Entity$$Type, arg5: $ItemStack$$Type): integer
 "isSlimeBlock"(arg0: $BlockState$$Type): boolean
 "setBedOccupied"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: boolean): void
 "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
 "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
 "isScaffolding"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "getWeakChanges"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
 "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
 "onBlockStateChange"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type): void
 "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
 "shouldCheckWeakPower"(arg0: $BlockState$$Type, arg1: $SignalGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
 "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
 "canHarvestBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
 "onDestroyedByPlayer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: boolean, arg5: $FluidState$$Type): boolean
 "getRespawnPosition"(arg0: $BlockState$$Type, arg1: $EntityType$$Type<(any)>, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: float): $Optional<($ServerPlayer$RespawnPosAngle)>
 "canSustainPlant"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type): $TriState
 "getEnchantPowerBonus"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): float
 "getStateAtViewpoint"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Vec3$$Type): $BlockState
 "getFlammability"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
 "getFireSpreadSpeed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
 "canEntityDestroy"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "canDropFromExplosion"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): boolean
 "onBlockExploded"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): void
 "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
 "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
 "addLandingEffects"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $LivingEntity$$Type, arg5: integer): boolean
 "addRunningEffects"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
 "getBedDirection"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): $Direction
 "makesOpenTrapdoorAboveClimbable"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
 "getAdjacentBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: $PathType$$Type): $PathType
 "hasDynamicLightEmission"(arg0: $BlockState$$Type): boolean
 "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
 "onDestroyedByPushReaction"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $FluidState$$Type): void
 "getBeaconColorMultiplier"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): integer
 "getBubbleColumnDirection"(arg0: $BlockState$$Type): $BubbleColumnDirection
 "shouldHideAdjacentFluidFace"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $FluidState$$Type): boolean
 "collisionExtendsVertically"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "handler$fon000$passablefoliage$pfoliage_getBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: $CallbackInfoReturnable$$Type<(any)>): void
}

export namespace $BlockExtension {
const probejs$$marker: never
}
export class $BlockExtension$$Static implements $BlockExtension {


 "isStickyBlock"(state: $BlockState$$Type): boolean
 "canStickTo"(state: $BlockState$$Type, other: $BlockState$$Type): boolean
 "bz$canStickTo"(state: $BlockState$$Type, other: $BlockState$$Type): $OptionalBoolean
 "bz$isStickyBlock"(state: $BlockState$$Type): boolean
 "bz$getBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type): $PathType
 "getBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type): $PathType
 "bz$shouldNotDisplayFluidOverlay"(): $OptionalBoolean
 "shouldDisplayFluidOverlay"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, fluidState: $FluidState$$Type): boolean
 "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
 "isEmpty"(arg0: $BlockState$$Type): boolean
 "isBed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "isFlammable"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "onCaughtFire"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $LivingEntity$$Type): void
 "isFireSource"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "canBeHydrated"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $FluidState$$Type, arg4: $BlockPos$$Type): boolean
 "getMapColor"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $MapColor$$Type): $MapColor
 "getAppearance"(arg0: $BlockState$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type): $BlockState
 "isLadder"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "isBurning"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "onTreeGrow"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BiConsumer$$Type<($BlockPos), ($BlockState)>, arg3: $RandomSource$$Type, arg4: $BlockPos$$Type, arg5: $TreeConfiguration$$Type): boolean
 "isFertile"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "isConduitFrame"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): boolean
 "isPortalFrame"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "getExpDrop"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type, arg4: $Entity$$Type, arg5: $ItemStack$$Type): integer
 "isSlimeBlock"(arg0: $BlockState$$Type): boolean
 "setBedOccupied"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type, arg4: boolean): void
 "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
 "getFriction"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): float
 "isScaffolding"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
 "getWeakChanges"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
 "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
 "onBlockStateChange"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type): void
 "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
 "shouldCheckWeakPower"(arg0: $BlockState$$Type, arg1: $SignalGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
 "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
 "canHarvestBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
 "onDestroyedByPlayer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: boolean, arg5: $FluidState$$Type): boolean
 "getRespawnPosition"(arg0: $BlockState$$Type, arg1: $EntityType$$Type<(any)>, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: float): $Optional<($ServerPlayer$RespawnPosAngle)>
 "canSustainPlant"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type): $TriState
 "getEnchantPowerBonus"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): float
 "getStateAtViewpoint"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Vec3$$Type): $BlockState
 "getFlammability"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
 "getFireSpreadSpeed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
 "canEntityDestroy"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "canDropFromExplosion"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): boolean
 "onBlockExploded"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): void
 "getToolModifiedState"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type, arg2: $ItemAbility$$Type, arg3: boolean): $BlockState
 "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
 "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
 "addLandingEffects"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $LivingEntity$$Type, arg5: integer): boolean
 "addRunningEffects"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
 "getBedDirection"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): $Direction
 "makesOpenTrapdoorAboveClimbable"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
 "getAdjacentBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: $PathType$$Type): $PathType
 "hasDynamicLightEmission"(arg0: $BlockState$$Type): boolean
 "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
 "onDestroyedByPushReaction"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $FluidState$$Type): void
 "getBeaconColorMultiplier"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): integer
 "getBubbleColumnDirection"(arg0: $BlockState$$Type): $BubbleColumnDirection
 "shouldHideAdjacentFluidFace"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $FluidState$$Type): boolean
 "collisionExtendsVertically"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
 "handler$fon000$passablefoliage$pfoliage_getBlockPathType"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Mob$$Type, arg4: $CallbackInfoReturnable$$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockExtension$$Type = ($BlockExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockExtension_ = $BlockExtension$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.WindyAir" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ProperFacingBlock, $ProperFacingBlock$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.ProperFacingBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Explosion, $Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WindyAir extends $ProperFacingBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WindyAir)>
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

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "getShape"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type, collisionContext: $CollisionContext$$Type): $VoxelShape
public "codec"(): $MapCodec<($WindyAir)>
public "entityInside"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, entity: $Entity$$Type): void
/**
 * 
 * @deprecated
 */
public "onExplosionHit"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, explosion: $Explosion$$Type, biConsumer: $BiConsumer$$Type<($ItemStack), ($BlockPos)>): void
public "getRenderShape"(blockState: $BlockState$$Type): $RenderShape
public "animateTick"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, randomSource: $RandomSource$$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getShadeBrightness"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): float
public "propagatesSkylightDown"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): boolean
public "getCollisionShape"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type, collisionContext: $CollisionContext$$Type): $VoxelShape
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindyAir$$Type = ($WindyAir);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WindyAir_ = $WindyAir$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.blocks.VineBlockAccessor" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $VineBlockAccessor {

 "bumblezone$callCanSupportAtFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean

(arg0: $BlockGetter, arg1: $BlockPos, arg2: $Direction): boolean
}

export namespace $VineBlockAccessor {
const probejs$$marker: never
}
export class $VineBlockAccessor$$Static implements $VineBlockAccessor {


 "bumblezone$callCanSupportAtFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VineBlockAccessor$$Type = ((arg0: $BlockGetter, arg1: $BlockPos, arg2: $Direction) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VineBlockAccessor_ = $VineBlockAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.fluids.HoneyFluidBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FluidGetter, $FluidGetter$$Type} from "com.telepathicgrunt.the_bumblezone.fluids.base.FluidGetter"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$FluidData, $FluidData$$Type} from "com.teamresourceful.resourcefullib.common.fluid.data.FluidData"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HoneyFluidBlock extends $LiquidBlock implements $FluidGetter {
static readonly "maxBottomLayer": integer
static readonly "ABOVE_FLUID": $BooleanProperty
static readonly "BOTTOM_LEVEL": $IntegerProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "STABLE_SHAPE": $VoxelShape
readonly "fluid": $FlowingFluid
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LiquidBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "LEVEL": $IntegerProperty
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(baseFluid: $FluidData$$Type)

public "onPlace"(blockState: $BlockState$$Type, world: $Level$$Type, blockPos: $BlockPos$$Type, previousBlockState: $BlockState$$Type, notify: boolean): void
public "updateShape"(blockState: $BlockState$$Type, direction: $Direction$$Type, previousBlockState: $BlockState$$Type, level: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, blockPos1: $BlockPos$$Type): $BlockState
public "entityInside"(state: $BlockState$$Type, world: $Level$$Type, position: $BlockPos$$Type, entity: $Entity$$Type): void
public "getFluid"(): $FlowingFluid
public "getFluidState"(blockState: $BlockState$$Type): $FluidState
public "neighborChanged"(blockState: $BlockState$$Type, world: $Level$$Type, blockPos: $BlockPos$$Type, block: $Block$$Type, fromPos: $BlockPos$$Type, notify: boolean): void
public "asHolder"(): $Holder<(any)>
get "fluid"(): $FlowingFluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoneyFluidBlock$$Type = ($HoneyFluidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoneyFluidBlock_ = $HoneyFluidBlock$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.client.BlockRenderDispatcherAccessor" {
import {$BlockColors, $BlockColors$$Type} from "net.minecraft.client.color.block.BlockColors"
import {$BlockEntityWithoutLevelRenderer, $BlockEntityWithoutLevelRenderer$$Type} from "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer"

export interface $BlockRenderDispatcherAccessor {

 "bumblezone$getBlockEntityRenderer"(): $BlockEntityWithoutLevelRenderer
 "bumblezone$getBlockColors"(): $BlockColors
}

export namespace $BlockRenderDispatcherAccessor {
const probejs$$marker: never
}
export class $BlockRenderDispatcherAccessor$$Static implements $BlockRenderDispatcherAccessor {


 "bumblezone$getBlockEntityRenderer"(): $BlockEntityWithoutLevelRenderer
 "bumblezone$getBlockColors"(): $BlockColors
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRenderDispatcherAccessor$$Type = ($BlockRenderDispatcherAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockRenderDispatcherAccessor_ = $BlockRenderDispatcherAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.LuminescentWaxChannel" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$MapColor, $MapColor$$Type} from "net.minecraft.world.level.material.MapColor"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LuminescentWaxBase, $LuminescentWaxBase$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.LuminescentWaxBase"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$RotationAxisBlock, $RotationAxisBlock$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.RotationAxisBlock"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LuminescentWaxChannel extends $RotationAxisBlock implements $LuminescentWaxBase {
static readonly "ROTATION": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LuminescentWaxChannel)>
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
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(mapColor: $MapColor$$Type, light: integer)
constructor(properties: $BlockBehaviour$Properties$$Type)

public "stepOn"(level: $Level$$Type, blockPos: $BlockPos$$Type, state: $BlockState$$Type, entity: $Entity$$Type): void
public "codec"(): $MapCodec<($LuminescentWaxChannel)>
public "useItemOn"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, position: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type, raytraceResult: $BlockHitResult$$Type): $ItemInteractionResult
public "tryRotate"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, position: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type): $BlockState
public "applyEntityEffects"(currentState: $BlockState$$Type, collidingEntity: $Entity$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuminescentWaxChannel$$Type = ($LuminescentWaxChannel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuminescentWaxChannel_ = $LuminescentWaxChannel$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.advancements.EntitySpecificTrigger$TriggerInstance" {
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $EntitySpecificTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($EntitySpecificTrigger$TriggerInstance)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, entity: $Optional$$Type<($ContextAwarePredicate$$Type)>)

public "entity"(): $Optional<($ContextAwarePredicate)>
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(context: $LootContext$$Type): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitySpecificTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "entity"?: ($ContextAwarePredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, entity?: ($ContextAwarePredicate$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntitySpecificTrigger$TriggerInstance_ = $EntitySpecificTrigger$TriggerInstance$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.fluids.HoneyFluid$Flowing" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$HoneyFluid, $HoneyFluid$$Type} from "com.telepathicgrunt.the_bumblezone.fluids.HoneyFluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$FluidData, $FluidData$$Type} from "com.teamresourceful.resourcefullib.common.fluid.data.FluidData"

export class $HoneyFluid$Flowing extends $HoneyFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(properties: $FluidData$$Type)

public "getAmount"(state: $FluidState$$Type): integer
public "isSource"(state: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoneyFluid$Flowing$$Type = ($HoneyFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoneyFluid$Flowing_ = $HoneyFluid$Flowing$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.events.player.BzPlayerItemAttackBlockEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ReturnableEventHandler, $ReturnableEventHandler$$Type} from "com.telepathicgrunt.the_bumblezone.events.base.ReturnableEventHandler"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BzPlayerItemAttackBlockEvent extends $Record {
static readonly "EVENT_HIGH": $ReturnableEventHandler<($BzPlayerItemAttackBlockEvent), ($InteractionResult)>

constructor(user: $Player$$Type, level: $Level$$Type, hand: $InteractionHand$$Type, usingStack: $ItemStack$$Type)

public "level"(): $Level
public "user"(): $Player
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "hand"(): $InteractionHand
public "usingStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BzPlayerItemAttackBlockEvent$$Type = ({"user"?: $Player$$Type, "level"?: $Level$$Type, "usingStack"?: $ItemStack$$Type, "hand"?: $InteractionHand$$Type}) | ([user?: $Player$$Type, level?: $Level$$Type, usingStack?: $ItemStack$$Type, hand?: $InteractionHand$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BzPlayerItemAttackBlockEvent_ = $BzPlayerItemAttackBlockEvent$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.BeehiveBeewaxBoundaries" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $BeehiveBeewaxBoundaries extends $Feature<($NoneFeatureConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(code: $Codec$$Type<($NoneFeatureConfiguration$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeehiveBeewaxBoundaries$$Type = ($BeehiveBeewaxBoundaries);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeehiveBeewaxBoundaries_ = $BeehiveBeewaxBoundaries$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.EssenceBlockPurple" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$GeneralUtils$Lazy, $GeneralUtils$Lazy$$Type} from "com.telepathicgrunt.the_bumblezone.utils.GeneralUtils$Lazy"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ServerEssenceEvent, $ServerEssenceEvent$$Type} from "com.telepathicgrunt.the_bumblezone.bossbars.ServerEssenceEvent"
import {$StructurePlaceSettings, $StructurePlaceSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructurePlaceSettings"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EssenceBlockEntity, $EssenceBlockEntity$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.blockentities.EssenceBlockEntity"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EssenceBlock, $EssenceBlock$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.EssenceBlock"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EssenceBlockPurple extends $EssenceBlock {
static readonly "PLACEMENT_SETTINGS_WITH_ENTITIES": $GeneralUtils$Lazy<($StructurePlaceSettings)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($EssenceBlockPurple)>
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
static readonly "INTERVALS": integer
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean
static readonly "PLACEMENT_SETTINGS": $GeneralUtils$Lazy<($StructurePlaceSettings)>

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "codec"(): $MapCodec<($EssenceBlockPurple)>
public "getArenaNbt"(): $ResourceLocation
public "onPlayerEnter"(serverLevel: $ServerLevel$$Type, serverPlayer: $ServerPlayer$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type): void
public "onPlayerLeave"(serverLevel: $ServerLevel$$Type, serverPlayer: $ServerPlayer$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type): void
public "getEventTimeFrame"(): integer
public "getServerEssenceEvent"(): $ServerEssenceEvent
public "getEssenceItemReward"(): $ResourceLocation
public "getEssenceXpReward"(): integer
public "hasMiningFatigue"(): boolean
public "awardPlayerWinStat"(serverPlayer: $ServerPlayer$$Type): void
public "performUniqueArenaTick"(serverLevel: $ServerLevel$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type): void
public "asHolder"(): $Holder<(any)>
get "arenaNbt"(): $ResourceLocation
get "eventTimeFrame"(): integer
get "serverEssenceEvent"(): $ServerEssenceEvent
get "essenceItemReward"(): $ResourceLocation
get "essenceXpReward"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceBlockPurple$$Type = ($EssenceBlockPurple);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceBlockPurple_ = $EssenceBlockPurple$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.StingerSpearItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemExtension, $ItemExtension$$Type} from "com.telepathicgrunt.the_bumblezone.platform.ItemExtension"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TriState, $TriState$$Type} from "com.telepathicgrunt.the_bumblezone.utils.TriState"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$TridentItem, $TridentItem$$Type} from "net.minecraft.world.item.TridentItem"

export class $StingerSpearItem extends $TridentItem implements $ItemExtension {
static readonly "BASE_THROWN_DAMAGE": float
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "BASE_DAMAGE": float
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "SHOOT_POWER": float
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "THROW_THRESHOLD_TIME": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, interactionHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(itemStack: $ItemStack$$Type, level: $Level$$Type, livingEntity: $LivingEntity$$Type, currentDuration: integer): void
public "getUseDuration"(itemStack: $ItemStack$$Type, livingEntity: $LivingEntity$$Type): integer
public "hurtEnemy"(itemStack: $ItemStack$$Type, victim: $LivingEntity$$Type, user: $LivingEntity$$Type): boolean
public "bz$canEnchant"(itemstack: $ItemStack$$Type, enchantment: $Holder$$Type<($Enchantment)>): $TriState
public static "createAttributes"(): $ItemAttributeModifiers
public "isValidRepairItem"(toRepair: $ItemStack$$Type, repair: $ItemStack$$Type): boolean
public "getBzItem"(): $Item
public "bz$setDamage"(stack: $ItemStack$$Type, damage: integer): void
public "bz$onArmorTick"(itemstack: $ItemStack$$Type, world: $Level$$Type, player: $Player$$Type): void
public "bz$getEquipmentSlot"(stack: $ItemStack$$Type): $EquipmentSlot
public "bz$canPerformAction"(stack: $ItemStack$$Type, toolAction: StringJS): boolean
public "canPerformAction"(stack: $ItemStack$$Type, itemAbility: $ItemAbility$$Type): boolean
public "isRepairable"(arg0: $ItemStack$$Type): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "bzItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StingerSpearItem$$Type = ($StingerSpearItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StingerSpearItem_ = $StingerSpearItem$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.SpiderInfestedBeeDungeon" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$NbtFeatureConfig, $NbtFeatureConfig$$Type} from "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.NbtFeatureConfig"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$NbtFeature, $NbtFeature$$Type} from "com.telepathicgrunt.the_bumblezone.worldgen.features.NbtFeature"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $SpiderInfestedBeeDungeon extends $NbtFeature<($NbtFeatureConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(configFactory: $Codec$$Type<($NbtFeatureConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($NbtFeatureConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpiderInfestedBeeDungeon$$Type = ($SpiderInfestedBeeDungeon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpiderInfestedBeeDungeon_ = $SpiderInfestedBeeDungeon$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.AncientWax" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$AncientWaxBase, $AncientWaxBase$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.AncientWaxBase"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AncientWax extends $Block implements $AncientWaxBase {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($AncientWax)>
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

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "stepOn"(level: $Level$$Type, blockPos: $BlockPos$$Type, state: $BlockState$$Type, entity: $Entity$$Type): void
public "codec"(): $MapCodec<($AncientWax)>
public "useItemOn"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, position: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type, raytraceResult: $BlockHitResult$$Type): $ItemInteractionResult
public "trySwap"(itemStack: $ItemStack$$Type, currentState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type): $BlockState
public "trySwap"(itemStack: $ItemStack$$Type, currentState: $BlockState$$Type, blockPos: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type, blockIterationTag: $TagKey$$Type<($Block)>): $BlockState
public "applyEntityEffects"(currentState: $BlockState$$Type, collidingEntity: $Entity$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AncientWax$$Type = ($AncientWax);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AncientWax_ = $AncientWax$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.events.entity.BzEntityHurtEvent" {
import {$EventHandler, $EventHandler$$Type} from "com.telepathicgrunt.the_bumblezone.events.base.EventHandler"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BzEntityHurtEvent extends $Record {
static readonly "EVENT_LOWEST": $EventHandler<($BzEntityHurtEvent)>

constructor(entity: $LivingEntity$$Type, source: $DamageSource$$Type, amount: float)

public "entity"(): $LivingEntity
public "amount"(): float
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "source"(): $DamageSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BzEntityHurtEvent$$Type = ({"amount"?: float, "source"?: $DamageSource$$Type, "entity"?: $LivingEntity$$Type}) | ([amount?: float, source?: $DamageSource$$Type, entity?: $LivingEntity$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BzEntityHurtEvent_ = $BzEntityHurtEvent$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.StateReturningBrushableBlock" {
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $StateReturningBrushableBlock {

 "getTurnsIntoState"(): $BlockState

(): $BlockState$$Type
get "turnsIntoState"(): $BlockState
}

export namespace $StateReturningBrushableBlock {
const probejs$$marker: never
}
export class $StateReturningBrushableBlock$$Static implements $StateReturningBrushableBlock {


 "getTurnsIntoState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StateReturningBrushableBlock$$Type = (() => $BlockState$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StateReturningBrushableBlock_ = $StateReturningBrushableBlock$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.RedstoneHoneyWeb" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Map, $Map$$Type} from "java.util.Map"
import {$HoneyWeb, $HoneyWeb$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.HoneyWeb"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RedstoneHoneyWeb extends $HoneyWeb {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "NORTHSOUTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($RedstoneHoneyWeb)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWER": $IntegerProperty
static readonly "AXIS_TO_PROP": $Map<($Direction$Axis), ($BooleanProperty)>
static readonly "UPDOWN": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "EASTWEST": $BooleanProperty
 "hasCollision": boolean

constructor(properties: $BlockBehaviour$Properties$$Type)
constructor()

public "tick"(blockState: $BlockState$$Type, serverLevel: $ServerLevel$$Type, blockPos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "codec"(): $MapCodec<($RedstoneHoneyWeb)>
public "onPlace"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, blockState1: $BlockState$$Type, pushed: boolean): void
public "entityInside"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, entity: $Entity$$Type): void
public "onRemove"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, blockState1: $BlockState$$Type, pushed: boolean): void
public "isSignalSource"(state: $BlockState$$Type): boolean
public "getSignal"(thisState: $BlockState$$Type, blockAccess: $BlockGetter$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type): integer
public "animateTick"(blockState: $BlockState$$Type, world: $Level$$Type, position: $BlockPos$$Type, random: $RandomSource$$Type): void
public "getStateForPlacement"(placeContext: $BlockPlaceContext$$Type): $BlockState
public "neighborChanged"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, block: $Block$$Type, blockPos1: $BlockPos$$Type, b: boolean): void
public "getDirectSignal"(blockstate: $BlockState$$Type, blockAccess: $BlockGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type): integer
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneHoneyWeb$$Type = ($RedstoneHoneyWeb);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneHoneyWeb_ = $RedstoneHoneyWeb$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.blockentities.EssenceBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$EssenceBlockEntity$EventEntities, $EssenceBlockEntity$EventEntities$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.blockentities.EssenceBlockEntity$EventEntities"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$ServerEssenceEvent, $ServerEssenceEvent$$Type} from "com.telepathicgrunt.the_bumblezone.bossbars.ServerEssenceEvent"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EssenceBlockEntity extends $BlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public static "serverTick"(level: $Level$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type): void
public "setRemoved"(): void
public "loadAdditional"(compoundTag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getUUID"(): $UUID
public "getArenaSize"(): $BlockPos
public "getEventBar"(): $ServerEssenceEvent
public static "EndEvent"(serverLevel: $ServerLevel$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type, won: boolean): void
public "getEventTimer"(): integer
public "setArenaSize"(arenaSize: $BlockPos$$Type): void
public "setEventTimer"(eventTimer: integer): void
public "setEventBar"(eventBar: $ServerEssenceEvent$$Type): void
public "isBeaten"(): boolean
public "setBeaten"(beaten: boolean): void
public "shouldDrawSide"(direction: $Direction$$Type): boolean
public "getUpdateTag"(provider: $HolderLookup$Provider$$Type): $CompoundTag
public "getPlayerInArena"(): $List<($UUID)>
public "getSavedNbtLocation"(): $ResourceLocation
public "setPlayerInArena"(playerInArena: $List$$Type<($UUID$$Type)>): void
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getExtraEventTrackingProgress"(): integer
public "getEventEntitiesInArena"(): $List<($EssenceBlockEntity$EventEntities)>
public "setExtraEventTrackingProgress"(extraEventTrackingProgress: integer): void
public "getSavedNbtLocationAsString"(): StringJS
public "setEventEntitiesInArena"(eventEntitiesInArena: $List$$Type<($EssenceBlockEntity$EventEntities$$Type)>): void
public static "getEssenceBlockAtLocation"(level: $Level$$Type, targetLevel: $ResourceKey$$Type<($Level)>, targetBlockPos: $BlockPos$$Type, targetEssenceUUID: $UUID$$Type): $EssenceBlockEntity
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "uUID"(): $UUID
get "arenaSize"(): $BlockPos
get "eventBar"(): $ServerEssenceEvent
get "eventTimer"(): integer
set "arenaSize"(value: $BlockPos$$Type)
set "eventTimer"(value: integer)
set "eventBar"(value: $ServerEssenceEvent$$Type)
get "beaten"(): boolean
set "beaten"(value: boolean)
get "playerInArena"(): $List<($UUID)>
get "savedNbtLocation"(): $ResourceLocation
set "playerInArena"(value: $List$$Type<($UUID$$Type)>)
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "extraEventTrackingProgress"(): integer
get "eventEntitiesInArena"(): $List<($EssenceBlockEntity$EventEntities)>
set "extraEventTrackingProgress"(value: integer)
get "savedNbtLocationAsString"(): StringJS
set "eventEntitiesInArena"(value: $List$$Type<($EssenceBlockEntity$EventEntities$$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceBlockEntity$$Type = ($EssenceBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceBlockEntity_ = $EssenceBlockEntity$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.utils.CodecUtils$BlockMatcher" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$$Type} from "net.minecraft.advancements.critereon.StatePropertiesPredicate"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $CodecUtils$BlockMatcher extends $Record {
static readonly "CODEC": $MapCodec<($CodecUtils$BlockMatcher)>

constructor(blockRL: $ResourceLocation$$Type, isTag: boolean, state: $Optional$$Type<($StatePropertiesPredicate$$Type)>)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "state"(): $Optional<($StatePropertiesPredicate)>
public "isTag"(): boolean
public "blockMatched"(blockState: $BlockState$$Type): boolean
public "blockRL"(): $ResourceLocation
get "tag"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodecUtils$BlockMatcher$$Type = ({"blockRL"?: $ResourceLocation$$Type, "state"?: ($StatePropertiesPredicate$$Type)?, "isTag"?: boolean}) | ([blockRL?: $ResourceLocation$$Type, state?: ($StatePropertiesPredicate$$Type)?, isTag?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CodecUtils$BlockMatcher_ = $CodecUtils$BlockMatcher$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.recipes.ItemStackSmeltingRecipe$ItemStackSmeltingRecipeSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ItemStackSmeltingRecipe, $ItemStackSmeltingRecipe$$Type} from "com.telepathicgrunt.the_bumblezone.items.recipes.ItemStackSmeltingRecipe"

export class $ItemStackSmeltingRecipe$ItemStackSmeltingRecipeSerializer implements $RecipeSerializer<($ItemStackSmeltingRecipe)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ItemStackSmeltingRecipe)>

constructor()

public "codec"(): $MapCodec<($ItemStackSmeltingRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ItemStackSmeltingRecipe)>
public static "fromNetwork"(friendlyByteBuf: $RegistryFriendlyByteBuf$$Type): $ItemStackSmeltingRecipe
public static "toNetwork"(friendlyByteBuf: $RegistryFriendlyByteBuf$$Type, itemStackSmeltingRecipe: $ItemStackSmeltingRecipe$$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackSmeltingRecipe$ItemStackSmeltingRecipeSerializer$$Type = ($ItemStackSmeltingRecipe$ItemStackSmeltingRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackSmeltingRecipe$ItemStackSmeltingRecipeSerializer_ = $ItemStackSmeltingRecipe$ItemStackSmeltingRecipeSerializer$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.events.base.ReturnableEventHandler$ReturnableFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ReturnableEventHandler$ReturnableFunction<T, R> {

 "apply"(arg0: R, arg1: T): R

(arg0: R, arg1: T): R
}

export namespace $ReturnableEventHandler$ReturnableFunction {
const probejs$$marker: never
}
export class $ReturnableEventHandler$ReturnableFunction$$Static<T, R> implements $ReturnableEventHandler$ReturnableFunction {


 "apply"(arg0: R, arg1: T): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReturnableEventHandler$ReturnableFunction$$Type<T, R> = ((arg0: R, arg1: T) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReturnableEventHandler$ReturnableFunction_<T, R> = $ReturnableEventHandler$ReturnableFunction$$Type<(T), (R)>;
}}
declare module "com.telepathicgrunt.the_bumblezone.effects.HiddenEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$BzEffect, $BzEffect$$Type} from "com.telepathicgrunt.the_bumblezone.effects.BzEffect"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $HiddenEffect extends $BzEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(type: $MobEffectCategory$$Type, potionColor: integer)

public "isInstantenous"(): boolean
public static "hideEntity"(livingEntity: $LivingEntity$$Type): double
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
public "onEffectStarted"(livingEntity: $LivingEntity$$Type, amplifier: integer): void
public "shouldApplyEffectTickThisTick"(duration: integer, amplifier: integer): boolean
get "instantenous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HiddenEffect$$Type = ($HiddenEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HiddenEffect_ = $HiddenEffect$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.effects.BeenergizedEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $BeenergizedEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(type: $MobEffectCategory$$Type, potionColor: integer)

public "isInstantenous"(): boolean
public "shouldApplyEffectTickThisTick"(duration: integer, amplifier: integer): boolean
get "instantenous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeenergizedEffect$$Type = ($BeenergizedEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeenergizedEffect_ = $BeenergizedEffect$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.entities.LivingEntityAccessor" {
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"

export interface $LivingEntityAccessor {

 "bumblezone$isJumping"(): boolean
 "bumblezone$setLastDamageSource"(arg0: $DamageSource$$Type): void
 "bumblezone$setLastDamageStamp"(arg0: long): void
 "bumblezone$callHurtArmor"(arg0: $DamageSource$$Type, arg1: float): void
 "bumblezone$callIsAlwaysExperienceDropper"(): boolean
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
export class $LivingEntityAccessor$$Static implements $LivingEntityAccessor {


 "bumblezone$isJumping"(): boolean
 "bumblezone$setLastDamageSource"(arg0: $DamageSource$$Type): void
 "bumblezone$setLastDamageStamp"(arg0: long): void
 "bumblezone$callHurtArmor"(arg0: $DamageSource$$Type, arg1: float): void
 "bumblezone$callIsAlwaysExperienceDropper"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccessor$$Type = ($LivingEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityAccessor_ = $LivingEntityAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.utils.OptionalBoolean" {
import {$BooleanConsumer, $BooleanConsumer$$Type} from "it.unimi.dsi.fastutil.booleans.BooleanConsumer"
import {$BooleanSupplier, $BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"

export class $OptionalBoolean {
static readonly "TRUE": $OptionalBoolean
static readonly "FALSE": $OptionalBoolean
static readonly "EMPTY": $OptionalBoolean


public "orElseGet"(supplier: $BooleanSupplier$$Type): boolean
public "ifPresent"(consumer: $BooleanConsumer$$Type): void
public "get"(): boolean
public "isEmpty"(): boolean
public static "of"(value: boolean): $OptionalBoolean
public "isPresent"(): boolean
get "empty"(): boolean
get "present"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionalBoolean$$Type = ($OptionalBoolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OptionalBoolean_ = $OptionalBoolean$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.events.player.BzPlayerItemUseOnBlockEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ReturnableEventHandler, $ReturnableEventHandler$$Type} from "com.telepathicgrunt.the_bumblezone.events.base.ReturnableEventHandler"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BzPlayerItemUseOnBlockEvent extends $Record {
static readonly "EVENT_HIGH": $ReturnableEventHandler<($BzPlayerItemUseOnBlockEvent), ($InteractionResult)>

constructor(user: $Player$$Type, level: $Level$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type, usingStack: $ItemStack$$Type)

public "level"(): $Level
public "user"(): $Player
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "hand"(): $InteractionHand
public "hitResult"(): $BlockHitResult
public "usingStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BzPlayerItemUseOnBlockEvent$$Type = ({"level"?: $Level$$Type, "user"?: $Player$$Type, "usingStack"?: $ItemStack$$Type, "hitResult"?: $BlockHitResult$$Type, "hand"?: $InteractionHand$$Type}) | ([level?: $Level$$Type, user?: $Player$$Type, usingStack?: $ItemStack$$Type, hitResult?: $BlockHitResult$$Type, hand?: $InteractionHand$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BzPlayerItemUseOnBlockEvent_ = $BzPlayerItemUseOnBlockEvent$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.BeeStinger" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BzArrowItem, $BzArrowItem$$Type} from "com.telepathicgrunt.the_bumblezone.platform.BzArrowItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$AbstractArrow, $AbstractArrow$$Type} from "net.minecraft.world.entity.projectile.AbstractArrow"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$OptionalBoolean, $OptionalBoolean$$Type} from "com.telepathicgrunt.the_bumblezone.utils.OptionalBoolean"

export class $BeeStinger extends $BzArrowItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "bz$isInfinite"(stack: $ItemStack$$Type, bow: $ItemStack$$Type, player: $LivingEntity$$Type): $OptionalBoolean
public "createArrow"(level: $Level$$Type, ammo: $ItemStack$$Type, livingEntity: $LivingEntity$$Type, weapon: $ItemStack$$Type): $AbstractArrow
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeeStinger$$Type = ($BeeStinger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeeStinger_ = $BeeStinger$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.util.WeightedRandomListAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WeightedRandomListAccessor {

 "bumblezone$getTotalWeight"(): integer

(): integer
}

export namespace $WeightedRandomListAccessor {
const probejs$$marker: never
}
export class $WeightedRandomListAccessor$$Static implements $WeightedRandomListAccessor {


 "bumblezone$getTotalWeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedRandomListAccessor$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedRandomListAccessor_ = $WeightedRandomListAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.RoyalJellyBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$OptionalBoolean, $OptionalBoolean$$Type} from "com.telepathicgrunt.the_bumblezone.utils.OptionalBoolean"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$HalfTransparentBlock, $HalfTransparentBlock$$Type} from "net.minecraft.world.level.block.HalfTransparentBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockExtension, $BlockExtension$$Type} from "com.telepathicgrunt.the_bumblezone.platform.BlockExtension"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $RoyalJellyBlock extends $HalfTransparentBlock implements $BlockExtension {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($RoyalJellyBlock)>
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

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "fallOn"(level: $Level$$Type, blockState: $BlockState$$Type, blockPos: $BlockPos$$Type, entity: $Entity$$Type, fallDistance: float): void
public "codec"(): $MapCodec<($RoyalJellyBlock)>
public "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, blockState: $BlockState$$Type, entity: $LivingEntity$$Type, itemStack: $ItemStack$$Type): void
public "entityInside"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, entity: $Entity$$Type): void
public "bz$canStickTo"(state: $BlockState$$Type, other: $BlockState$$Type): $OptionalBoolean
public "bz$isStickyBlock"(state: $BlockState$$Type): boolean
public static "isValidMoveDirection"(pushDirection: $Direction$$Type, pistonDirection: $Direction$$Type): boolean
public "getCollisionShape"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type, collisionContext: $CollisionContext$$Type): $VoxelShape
public static "showSlideParticles"(serverLevel: $ServerLevel$$Type, entity: $Entity$$Type): void
public static "showJumpParticles"(serverLevel: $ServerLevel$$Type, entity: $Entity$$Type): void
public "isStickyBlock"(state: $BlockState$$Type): boolean
public "canStickTo"(state: $BlockState$$Type, other: $BlockState$$Type): boolean
public "bz$getBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type): $PathType
public "getBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type): $PathType
public "bz$shouldNotDisplayFluidOverlay"(): $OptionalBoolean
public "shouldDisplayFluidOverlay"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, fluidState: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoyalJellyBlock$$Type = ($RoyalJellyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoyalJellyBlock_ = $RoyalJellyBlock$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.entities.ServerPlayerAccessor" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"

export interface $ServerPlayerAccessor {

 "bumblezone$setStartingToFallPosition"(arg0: $Vec3$$Type): void

(arg0: $Vec3): void
}

export namespace $ServerPlayerAccessor {
const probejs$$marker: never
}
export class $ServerPlayerAccessor$$Static implements $ServerPlayerAccessor {


 "bumblezone$setStartingToFallPosition"(arg0: $Vec3$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerAccessor$$Type = ((arg0: $Vec3) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerAccessor_ = $ServerPlayerAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.essence.AbilityEssenceItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemExtension, $ItemExtension$$Type} from "com.telepathicgrunt.the_bumblezone.platform.ItemExtension"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TriState, $TriState$$Type} from "com.telepathicgrunt.the_bumblezone.utils.TriState"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $AbilityEssenceItem extends $Item implements $ItemExtension {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type, cooldownTickLength: $Supplier$$Type<(integer)>, abilityUseAmount: $Supplier$$Type<(integer)>)

public "inventoryTick"(itemStack: $ItemStack$$Type, level: $Level$$Type, entity: $Entity$$Type, i: integer, bl: boolean): void
public "getColor"(): integer
public "isBarVisible"(itemStack: $ItemStack$$Type): boolean
public "getBarWidth"(itemStack: $ItemStack$$Type): integer
public "getBarColor"(itemStack: $ItemStack$$Type): integer
public "setDepleted"(itemStack: $ItemStack$$Type, serverPlayer: $ServerPlayer$$Type, vanillaItemCooldown: boolean): void
public "getAbilityUseRemaining"(itemStack: $ItemStack$$Type): integer
public "setAbilityUseRemaining"(itemStack: $ItemStack$$Type, abilityUseRemaining: integer): void
public "getCooldownTickLength"(): integer
public "incrementCooldownTime"(itemStack: $ItemStack$$Type): void
public "rechargeAbilitySlowly"(itemStack: $ItemStack$$Type, serverPlayer: $ServerPlayer$$Type): void
public "getMaxAbilityUseAmount"(): integer
public "bz$getEquipmentSlot"(stack: $ItemStack$$Type): $EquipmentSlot
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, components: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "getEquipmentSlot"(stack: $ItemStack$$Type): $EquipmentSlot
public "verifyComponentsAfterLoad"(itemStack: $ItemStack$$Type): void
public "decrementAbilityUseRemaining"(stack: $ItemStack$$Type, serverPlayer: $ServerPlayer$$Type, decreaseAmount: integer): boolean
public "rechargeAbilityEntirely"(stack: $ItemStack$$Type): void
public "getBzItem"(): $Item
public "bz$setDamage"(stack: $ItemStack$$Type, damage: integer): void
public "bz$onArmorTick"(itemstack: $ItemStack$$Type, world: $Level$$Type, player: $Player$$Type): void
public "bz$canEnchant"(itemstack: $ItemStack$$Type, enchantment: $Holder$$Type<($Enchantment)>): $TriState
public "bz$canPerformAction"(stack: $ItemStack$$Type, toolAction: StringJS): boolean
public "canPerformAction"(stack: $ItemStack$$Type, itemAbility: $ItemAbility$$Type): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "color"(): integer
get "cooldownTickLength"(): integer
get "maxAbilityUseAmount"(): integer
get "bzItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbilityEssenceItem$$Type = ($AbilityEssenceItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbilityEssenceItem_ = $AbilityEssenceItem$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.entities.MobAccessor" {
import {$GoalSelector, $GoalSelector$$Type} from "net.minecraft.world.entity.ai.goal.GoalSelector"

export interface $MobAccessor {

 "bumblezone$getTargetSelector"(): $GoalSelector

(): $GoalSelector$$Type
}

export namespace $MobAccessor {
const probejs$$marker: never
}
export class $MobAccessor$$Static implements $MobAccessor {


 "bumblezone$getTargetSelector"(): $GoalSelector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobAccessor$$Type = (() => $GoalSelector$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobAccessor_ = $MobAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.BuzzingBriefcase" {
import {$BzPlayerItemAttackBlockEvent, $BzPlayerItemAttackBlockEvent$$Type} from "com.telepathicgrunt.the_bumblezone.events.player.BzPlayerItemAttackBlockEvent"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $BuzzingBriefcase extends $Item {
static readonly "TAG_VARANT_BEES": StringJS
static readonly "MAX_NUMBER_OF_BEES": integer
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TAG_BEES": StringJS
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "hurtEnemy"(stack: $ItemStack$$Type, victim: $LivingEntity$$Type, attacker: $LivingEntity$$Type): boolean
public static "dumpBees"(player: $Player$$Type, beeIndex: integer, releaseAtPlayer: boolean): $List<($Entity)>
public static "tryAddBee"(briefcaseItem: $ItemStack$$Type, bee: $Entity$$Type): boolean
public static "getBeesStored"(level: $Level$$Type, briefcaseItem: $ItemStack$$Type, removeFromList: boolean): $List<($Entity)>
public static "overrwriteBees"(briefcaseItem: $ItemStack$$Type, bees: $List$$Type<($Entity$$Type)>): void
public static "getNumberOfBees"(briefcaseItem: $ItemStack$$Type): integer
public static "getSpecificBeesStored"(level: $Level$$Type, briefcaseItem: $ItemStack$$Type, beeIndex: integer, removeFromList: boolean): $Entity
public static "onLeftClickBlock"(event: $BzPlayerItemAttackBlockEvent$$Type): $InteractionResult
public "interactLivingEntity"(beeCannon: $ItemStack$$Type, player: $Player$$Type, entity: $LivingEntity$$Type, playerHand: $InteractionHand$$Type): $InteractionResult
public "verifyComponentsAfterLoad"(itemStack: $ItemStack$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuzzingBriefcase$$Type = ($BuzzingBriefcase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuzzingBriefcase_ = $BuzzingBriefcase$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.events.base.EventHandler" {
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $EventHandler<T> {

constructor()

public "invoke"(event: T): void
public "addListener"(listener: $Consumer$$Type<(T)>): void
public "removeListener"(listener: $Consumer$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventHandler$$Type<T> = ($EventHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventHandler_<T> = $EventHandler$$Type<(T)>;
}}
declare module "com.telepathicgrunt.the_bumblezone.fluids.HoneyFluid" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BzFluid, $BzFluid$$Type} from "com.telepathicgrunt.the_bumblezone.fluids.base.BzFluid"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HoneyFluid extends $BzFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty


public "tick"(world: $Level$$Type, blockPos: $BlockPos$$Type, fluidState: $FluidState$$Type): void
public "getHeight"(fluidState: $FluidState$$Type, world: $BlockGetter$$Type, blockPos: $BlockPos$$Type): float
public "getSource"(): $Fluid
public "isSame"(fluid: $Fluid$$Type): boolean
public "getTickDelay"(world: $LevelReader$$Type): integer
public "getFlowing"(): $Fluid
public "animateTick"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $FluidState$$Type, random: $RandomSource$$Type): void
public "getBucket"(): $Item
public "getDropOff"(world: $LevelReader$$Type): integer
public static "adjustedFlowSpeed"(originalSpeed: integer, level: $LevelAccessor$$Type, blockPos: $BlockPos$$Type): integer
public static "shouldRenderSide"(world: $BlockGetter$$Type, blockPos: $BlockPos$$Type, direction: $Direction$$Type, currentFluidState: $FluidState$$Type): boolean
public "getSlopeFindDistance"(world: $LevelReader$$Type): integer
public "createLegacyBlock"(state: $FluidState$$Type): $BlockState
public "getDripParticle"(): $ParticleOptions
public "canBeReplacedWith"(state: $FluidState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, fluid: $Fluid$$Type, direction: $Direction$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
get "source"(): $Fluid
get "flowing"(): $Fluid
get "bucket"(): $Item
get "dripParticle"(): $ParticleOptions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoneyFluid$$Type = ($HoneyFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoneyFluid_ = $HoneyFluid$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.BiomeBasedLayerConfig" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BiomeBasedLayerConfig implements $FeatureConfiguration {
readonly "rareStateChance": float
static readonly "CODEC": $Codec<($BiomeBasedLayerConfig)>
readonly "biomeRL": $ResourceLocation
readonly "suspiciousBlockLoot": $Optional<($ResourceLocation)>
readonly "state": $BlockState
readonly "rareState": $Optional<($BlockState)>
readonly "height": integer

constructor(height: integer, state: $BlockState$$Type, rareState: $Optional$$Type<($BlockState$$Type)>, rareStateChance: float, suspiciousBlockLoot: $Optional$$Type<($ResourceLocation$$Type)>, biomeRL: $ResourceLocation$$Type)

public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeBasedLayerConfig$$Type = ($BiomeBasedLayerConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeBasedLayerConfig_ = $BiomeBasedLayerConfig$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.advancements.KilledCounterTrigger" {
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$PlayerDataModule, $PlayerDataModule$$Type} from "com.telepathicgrunt.the_bumblezone.modules.PlayerDataModule"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$KilledCounterTrigger$TriggerInstance, $KilledCounterTrigger$TriggerInstance$$Type} from "com.telepathicgrunt.the_bumblezone.advancements.KilledCounterTrigger$TriggerInstance"

export class $KilledCounterTrigger extends $SimpleCriterionTrigger<($KilledCounterTrigger$TriggerInstance)> {

constructor()

public "trigger"(serverPlayer: $ServerPlayer$$Type, currentEntity: $Entity$$Type, module: $PlayerDataModule$$Type): void
public "codec"(): $Codec<($KilledCounterTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KilledCounterTrigger$$Type = ($KilledCounterTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KilledCounterTrigger_ = $KilledCounterTrigger$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.RoyalJellyBottle" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $RoyalJellyBottle extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getEatingSound"(): $SoundEvent
public "getUseDuration"(itemStack: $ItemStack$$Type, livingEntity: $LivingEntity$$Type): integer
public "interactLivingEntity"(stack: $ItemStack$$Type, playerEntity: $Player$$Type, entity: $LivingEntity$$Type, playerHand: $InteractionHand$$Type): $InteractionResult
public "finishUsingItem"(itemStack: $ItemStack$$Type, level: $Level$$Type, livingEntity: $LivingEntity$$Type): $ItemStack
public "getDrinkingSound"(): $SoundEvent
public "getUseAnimation"(itemStack: $ItemStack$$Type): $UseAnim
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "eatingSound"(): $SoundEvent
get "drinkingSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoyalJellyBottle$$Type = ($RoyalJellyBottle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoyalJellyBottle_ = $RoyalJellyBottle$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.BeeArmor" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$BzArmor, $BzArmor$$Type} from "com.telepathicgrunt.the_bumblezone.items.BzArmor"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $BeeArmor extends $BzArmor {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(material: $Holder$$Type<($ArmorMaterial)>, armorType: $ArmorItem$Type$$Type, properties: $Item$Properties$$Type, variant: integer, transTexture: boolean)

public "getVariant"(): integer
public "hasTransTexture"(): boolean
public static "getBeeThemedWearablesCount"(entity: $Entity$$Type): integer
public "isRepairable"(arg0: $ItemStack$$Type): boolean
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "variant"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeeArmor$$Type = ($BeeArmor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeeArmor_ = $BeeArmor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.CaveSugarWaterfall" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $CaveSugarWaterfall extends $Feature<($NoneFeatureConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(configFactory: $Codec$$Type<($NoneFeatureConfiguration$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CaveSugarWaterfall$$Type = ($CaveSugarWaterfall);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CaveSugarWaterfall_ = $CaveSugarWaterfall$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.blocks.FallingBlockEntityAccessor" {
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $FallingBlockEntityAccessor {

 "bumblezone$setBlockState"(arg0: $BlockState$$Type): void

(arg0: $BlockState): void
}

export namespace $FallingBlockEntityAccessor {
const probejs$$marker: never
}
export class $FallingBlockEntityAccessor$$Static implements $FallingBlockEntityAccessor {


 "bumblezone$setBlockState"(arg0: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FallingBlockEntityAccessor$$Type = ((arg0: $BlockState) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FallingBlockEntityAccessor_ = $FallingBlockEntityAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.events.base.CancellableEventHandler" {
import {$CancellableEventHandler$CancellableFunctionOnlyReturn, $CancellableEventHandler$CancellableFunctionOnlyReturn$$Type} from "com.telepathicgrunt.the_bumblezone.events.base.CancellableEventHandler$CancellableFunctionOnlyReturn"
import {$CancellableEventHandler$CancellableFunction, $CancellableEventHandler$CancellableFunction$$Type} from "com.telepathicgrunt.the_bumblezone.events.base.CancellableEventHandler$CancellableFunction"
import {$CancellableEventHandler$CancellableFunctionNoReturn, $CancellableEventHandler$CancellableFunctionNoReturn$$Type} from "com.telepathicgrunt.the_bumblezone.events.base.CancellableEventHandler$CancellableFunctionNoReturn"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $CancellableEventHandler<T> {

constructor()

public "invoke"(event: T, isCancelled: boolean): boolean
public "invoke"(event: T): boolean
public "addListener"(listener: $CancellableEventHandler$CancellableFunctionOnlyReturn$$Type<(T)>): void
public "addListener"(listener: $CancellableEventHandler$CancellableFunction$$Type<(T)>): void
public "addListener"(listener: $Consumer$$Type<(T)>): void
public "addListener"(listener: $CancellableEventHandler$CancellableFunctionNoReturn$$Type<(T)>): void
public "removeListener"(listener: $CancellableEventHandler$CancellableFunction$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CancellableEventHandler$$Type<T> = ($CancellableEventHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CancellableEventHandler_<T> = $CancellableEventHandler$$Type<(T)>;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.SugarWaterBottle" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $SugarWaterBottle extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getEatingSound"(): $SoundEvent
public "getUseDuration"(itemStack: $ItemStack$$Type, livingEntity: $LivingEntity$$Type): integer
public "finishUsingItem"(itemStack: $ItemStack$$Type, level: $Level$$Type, livingEntity: $LivingEntity$$Type): $ItemStack
public "getDrinkingSound"(): $SoundEvent
public "getUseAnimation"(itemStack: $ItemStack$$Type): $UseAnim
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "eatingSound"(): $SoundEvent
get "drinkingSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SugarWaterBottle$$Type = ($SugarWaterBottle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SugarWaterBottle_ = $SugarWaterBottle$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.HoneycombHole" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$NbtFeatureConfig, $NbtFeatureConfig$$Type} from "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.NbtFeatureConfig"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $HoneycombHole extends $Feature<($NbtFeatureConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(configFactory: $Codec$$Type<($NbtFeatureConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($NbtFeatureConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoneycombHole$$Type = ($HoneycombHole);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoneycombHole_ = $HoneycombHole$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.blockentities.CrystallineFlowerBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CrystallineFlowerBlockEntity extends $BlockEntity {
static readonly "UUID_TAG": StringJS
static readonly "BOOK_SLOT_ITEMS": StringJS
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "TIER_TAG": StringJS
static readonly "XP_TAG": StringJS
static readonly "CONSUME_SLOT_ITEMS": StringJS

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "loadAdditional"(compoundTag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getUUID"(): $UUID
public "getXpTier"(): integer
public "addXpAndTier"(xpChange: integer): void
public "setPillar"(tierChange: integer): void
public "increaseTier"(tierIncrease: integer): void
public "setCurrentXp"(currentXp: integer): void
public "isMinXP"(): boolean
public "isMaxXP"(): boolean
public "setXpTier"(xpTier: integer): void
public "setGUID"(uuid: $UUID$$Type): void
public "getCurrentXp"(): integer
public "syncPillar"(): void
public "isMinTier"(): boolean
public "decreaseTier"(tierDecrease: integer): void
public "saveToItem"(stack: $ItemStack$$Type, provider: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(provider: $HolderLookup$Provider$$Type): $CompoundTag
public "isMaxTier"(): boolean
public "getXpForNextTiers"(nextTiersToCalculate: integer): integer
public "getBookSlotItems"(): $ItemStack
public "getConsumeSlotItems"(): $ItemStack
public "getMaxXpForTier"(tier: integer): integer
public "setConsumeSlotItems"(consumeSlotItems: $ItemStack$$Type): void
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "removeComponentsFromTag"(compoundTag: $CompoundTag$$Type): void
public "setBookSlotItems"(bookSlotItems: $ItemStack$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "uUID"(): $UUID
get "xpTier"(): integer
set "pillar"(value: integer)
set "currentXp"(value: integer)
get "minXP"(): boolean
get "maxXP"(): boolean
set "xpTier"(value: integer)
set "gUID"(value: $UUID$$Type)
get "currentXp"(): integer
get "minTier"(): boolean
get "maxTier"(): boolean
get "bookSlotItems"(): $ItemStack
get "consumeSlotItems"(): $ItemStack
set "consumeSlotItems"(value: $ItemStack$$Type)
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
set "bookSlotItems"(value: $ItemStack$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrystallineFlowerBlockEntity$$Type = ($CrystallineFlowerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrystallineFlowerBlockEntity_ = $CrystallineFlowerBlockEntity$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.loot.EntityLootDropInterface" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntityLootDropInterface {

 "thebumblezone_performedEntityDrops"(): void
 "thebumblezone_hasPerformedEntityDrops"(): boolean
}

export namespace $EntityLootDropInterface {
const probejs$$marker: never
}
export class $EntityLootDropInterface$$Static implements $EntityLootDropInterface {


 "thebumblezone_performedEntityDrops"(): void
 "thebumblezone_hasPerformedEntityDrops"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityLootDropInterface$$Type = ($EntityLootDropInterface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityLootDropInterface_ = $EntityLootDropInterface$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.gameplay.ServerGamePacketListenerImplAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerGamePacketListenerImplAccessor {

 "bumblezone$setAboveGroundTickCount"(arg0: integer): void
 "bumblezone$setAboveGroundVehicleTickCount"(arg0: integer): void
}

export namespace $ServerGamePacketListenerImplAccessor {
const probejs$$marker: never
}
export class $ServerGamePacketListenerImplAccessor$$Static implements $ServerGamePacketListenerImplAccessor {


 "bumblezone$setAboveGroundTickCount"(arg0: integer): void
 "bumblezone$setAboveGroundVehicleTickCount"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerGamePacketListenerImplAccessor$$Type = ($ServerGamePacketListenerImplAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerGamePacketListenerImplAccessor_ = $ServerGamePacketListenerImplAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.events.base.CancellableEventHandler$CancellableFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CancellableEventHandler$CancellableFunction<T> {

 "apply"(arg0: boolean, arg1: T): boolean

(arg0: boolean, arg1: T): boolean
}

export namespace $CancellableEventHandler$CancellableFunction {
const probejs$$marker: never
}
export class $CancellableEventHandler$CancellableFunction$$Static<T> implements $CancellableEventHandler$CancellableFunction {


 "apply"(arg0: boolean, arg1: T): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CancellableEventHandler$CancellableFunction$$Type<T> = ((arg0: boolean, arg1: T) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CancellableEventHandler$CancellableFunction_<T> = $CancellableEventHandler$CancellableFunction$$Type<(T)>;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.entities.EntityAccessor" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $EntityAccessor {

 "bumblezone$setNextStep"(arg0: float): void
 "bumblezone$getNextStep"(): float
 "bumblezone$callCollide"(arg0: $Vec3$$Type): $Vec3
 "bumblezone$callGetTypeName"(): $Component
 "bumblezone$getDimensions"(): $EntityDimensions
 "bumblezone$callVibrationAndSoundEffectsFromBlock"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: boolean, arg3: boolean, arg4: $Vec3$$Type): boolean
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
export class $EntityAccessor$$Static implements $EntityAccessor {


 "bumblezone$setNextStep"(arg0: float): void
 "bumblezone$getNextStep"(): float
 "bumblezone$callCollide"(arg0: $Vec3$$Type): $Vec3
 "bumblezone$callGetTypeName"(): $Component
 "bumblezone$getDimensions"(): $EntityDimensions
 "bumblezone$callVibrationAndSoundEffectsFromBlock"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: boolean, arg3: boolean, arg4: $Vec3$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$$Type = ($EntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAccessor_ = $EntityAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.blocks.BrushableBlockEntityAccessor" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"

export interface $BrushableBlockEntityAccessor {

 "bumblezone$callDropContent"(arg0: $Player$$Type): void

(arg0: $Player): void
}

export namespace $BrushableBlockEntityAccessor {
const probejs$$marker: never
}
export class $BrushableBlockEntityAccessor$$Static implements $BrushableBlockEntityAccessor {


 "bumblezone$callDropContent"(arg0: $Player$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrushableBlockEntityAccessor$$Type = ((arg0: $Player) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrushableBlockEntityAccessor_ = $BrushableBlockEntityAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.FilledPorousHoneycomb" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FilledPorousHoneycomb extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FilledPorousHoneycomb)>
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

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "stepOn"(level: $Level$$Type, blockPos: $BlockPos$$Type, state: $BlockState$$Type, entity: $Entity$$Type): void
public "codec"(): $MapCodec<($FilledPorousHoneycomb)>
public "entityInside"(state: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, entity: $Entity$$Type): void
public static "beeHoneyTake"(state: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, entity: $Entity$$Type): void
public "useItemOn"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, world: $Level$$Type, position: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type, raytraceResult: $BlockHitResult$$Type): $ItemInteractionResult
public "animateTick"(blockState: $BlockState$$Type, world: $Level$$Type, position: $BlockPos$$Type, random: $RandomSource$$Type): void
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type): integer
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilledPorousHoneycomb$$Type = ($FilledPorousHoneycomb);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilledPorousHoneycomb_ = $FilledPorousHoneycomb$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.GlisteringHoneyCrystal" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ProperFacingBlock, $ProperFacingBlock$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.ProperFacingBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$OptionalBoolean, $OptionalBoolean$$Type} from "com.telepathicgrunt.the_bumblezone.utils.OptionalBoolean"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$BlockExtension, $BlockExtension$$Type} from "com.telepathicgrunt.the_bumblezone.platform.BlockExtension"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $GlisteringHoneyCrystal extends $ProperFacingBlock implements $BlockExtension {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($GlisteringHoneyCrystal)>
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

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "codec"(): $MapCodec<($GlisteringHoneyCrystal)>
public "onPlace"(blockState: $BlockState$$Type, world: $Level$$Type, blockPos: $BlockPos$$Type, previousBlockState: $BlockState$$Type, notify: boolean): void
public "getVisualShape"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type, collisionContext: $CollisionContext$$Type): $VoxelShape
public "skipRendering"(blockState: $BlockState$$Type, blockState1: $BlockState$$Type, direction: $Direction$$Type): boolean
public "animateTick"(blockState: $BlockState$$Type, world: $Level$$Type, position: $BlockPos$$Type, random: $RandomSource$$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "neighborChanged"(state: $BlockState$$Type, world: $Level$$Type, blockPos: $BlockPos$$Type, block: $Block$$Type, fromPos: $BlockPos$$Type, notify: boolean): void
public "getShadeBrightness"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): float
public "onProjectileHit"(level: $Level$$Type, blockState: $BlockState$$Type, blockHitResult: $BlockHitResult$$Type, projectile: $Projectile$$Type): void
public "propagatesSkylightDown"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): boolean
public "bz$shouldNotDisplayFluidOverlay"(): $OptionalBoolean
public "isStickyBlock"(state: $BlockState$$Type): boolean
public "canStickTo"(state: $BlockState$$Type, other: $BlockState$$Type): boolean
public "bz$canStickTo"(state: $BlockState$$Type, other: $BlockState$$Type): $OptionalBoolean
public "bz$isStickyBlock"(state: $BlockState$$Type): boolean
public "bz$getBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type): $PathType
public "getBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type): $PathType
public "shouldDisplayFluidOverlay"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, fluidState: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlisteringHoneyCrystal$$Type = ($GlisteringHoneyCrystal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlisteringHoneyCrystal_ = $GlisteringHoneyCrystal$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.BzHoneyCrystalBlockItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $BzHoneyCrystalBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
/**
 * 
 * @deprecated
 */
 "block": $Block
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BzHoneyCrystalBlockItem$$Type = ($BzHoneyCrystalBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BzHoneyCrystalBlockItem_ = $BzHoneyCrystalBlockItem$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.world.BiomeManagerAccessor" {
import {$BiomeManager$NoiseBiomeSource, $BiomeManager$NoiseBiomeSource$$Type} from "net.minecraft.world.level.biome.BiomeManager$NoiseBiomeSource"

export interface $BiomeManagerAccessor {

 "bumblezone$getNoiseBiomeSource"(): $BiomeManager$NoiseBiomeSource
 "bumblezone$getBiomeZoomSeed"(): long
}

export namespace $BiomeManagerAccessor {
const probejs$$marker: never
}
export class $BiomeManagerAccessor$$Static implements $BiomeManagerAccessor {


 "bumblezone$getNoiseBiomeSource"(): $BiomeManager$NoiseBiomeSource
 "bumblezone$getBiomeZoomSeed"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeManagerAccessor$$Type = ($BiomeManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeManagerAccessor_ = $BiomeManagerAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.recipes.ContainerCraftingRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CraftingRecipe, $CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $ContainerCraftingRecipe implements $CraftingRecipe {
static readonly "HARDCODED_EDGECASES_WITHOUT_CONTAINERS_SET": $Map<($Item), ($Item)>

constructor(groupIn: StringJS, craftingBookCategory: $CraftingBookCategory$$Type, recipeOutputIn: $ItemStack$$Type, recipeItemsIn: $NonNullList$$Type<($Ingredient$$Type)>)

public "category"(): $CraftingBookCategory
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(craftingInput: $CraftingInput$$Type, level: $Level$$Type): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(provider: $HolderLookup$Provider$$Type): $ItemStack
public "getGroup"(): StringJS
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(recipeInput: $CraftingInput$$Type, provider: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(i: integer, j: integer): boolean
public "getRemainingItems"(craftingInput: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getRemainingItems"(arg0: $RecipeInput$$Type): $NonNullList<(any)>
public "getType"(): $RecipeType<(any)>
public "isSpecial"(): boolean
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
get "serializer"(): $RecipeSerializer<(any)>
get "type"(): $RecipeType<(any)>
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerCraftingRecipe$$Type = ($ContainerCraftingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerCraftingRecipe_ = $ContainerCraftingRecipe$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.BeeBread" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $BeeBread extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "interactLivingEntity"(stack: $ItemStack$$Type, playerEntity: $Player$$Type, entity: $LivingEntity$$Type, playerHand: $InteractionHand$$Type): $InteractionResult
public static "grantStackingBeenergized"(playerEntity: $Player$$Type, fedEntity: $LivingEntity$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeeBread$$Type = ($BeeBread);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeeBread_ = $BeeBread$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.fluids.base.FluidGetter" {
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"

export interface $FluidGetter {

 "getFluid"(): $FlowingFluid
get "fluid"(): $FlowingFluid
}

export namespace $FluidGetter {
const probejs$$marker: never
}
export class $FluidGetter$$Static implements $FluidGetter {


 "getFluid"(): $FlowingFluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidGetter$$Type = ($FluidGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidGetter_ = $FluidGetter$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.StickyHoneyRedstone" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$StickyHoneyResidue, $StickyHoneyResidue$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.StickyHoneyResidue"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StickyHoneyRedstone extends $StickyHoneyResidue {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($StickyHoneyRedstone)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWERED": $BooleanProperty
static readonly "FACING_TO_PROPERTY_MAP": $Map<($Direction), ($BooleanProperty)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "tick"(blockstate: $BlockState$$Type, world: $ServerLevel$$Type, pos: $BlockPos$$Type, rand: $RandomSource$$Type): void
public "codec"(): $MapCodec<($StickyHoneyRedstone)>
public "onPlace"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, oldState: $BlockState$$Type, moved: boolean): void
public "setPlacedBy"(world: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, itemStack: $ItemStack$$Type): void
/**
 * 
 * @deprecated
 */
public "entityInside"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, entity: $Entity$$Type): void
public "onRemove"(blockstate: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "isSignalSource"(state: $BlockState$$Type): boolean
public "getSignal"(blockstate: $BlockState$$Type, blockAccess: $BlockGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type): integer
public "animateTick"(blockState: $BlockState$$Type, world: $Level$$Type, position: $BlockPos$$Type, random: $RandomSource$$Type): void
public "getDirectSignal"(blockstate: $BlockState$$Type, blockAccess: $BlockGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type): integer
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StickyHoneyRedstone$$Type = ($StickyHoneyRedstone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StickyHoneyRedstone_ = $StickyHoneyRedstone$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.blocks.DispenserBlockInvoker" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"

export interface $DispenserBlockInvoker {

}

export namespace $DispenserBlockInvoker {
function bumblezone$getDISPENSER_REGISTRY(): $Map<($Item), ($DispenseItemBehavior)>
const probejs$$marker: never
}
export class $DispenserBlockInvoker$$Static implements $DispenserBlockInvoker {


static "bumblezone$getDISPENSER_REGISTRY"(): $Map<($Item), ($DispenseItemBehavior)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispenserBlockInvoker$$Type = ($DispenserBlockInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DispenserBlockInvoker_ = $DispenserBlockInvoker$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.entities.living.CosmicCrystalState" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export class $CosmicCrystalState extends $Enum<($CosmicCrystalState)> {
static readonly "SWEEP_LASER": $CosmicCrystalState
static readonly "TRACKING_SMASHING_ATTACK": $CosmicCrystalState
static readonly "TRACKING_SPINNING_ATTACK": $CosmicCrystalState
static readonly "BY_ID": $IntFunction<($CosmicCrystalState)>
static readonly "VERTICAL_LASER": $CosmicCrystalState
static readonly "NORMAL": $CosmicCrystalState
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($CosmicCrystalState)>
static readonly "HORIZONTAL_LASER": $CosmicCrystalState
static readonly "TRACKING_LASER": $CosmicCrystalState


public static "values"(): ($CosmicCrystalState)[]
public static "valueOf"(name: StringJS): $CosmicCrystalState
public "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmicCrystalState$$Type = (("normal") | ("tracking_smashing_attack") | ("tracking_spinning_attack") | ("vertical_laser") | ("horizontal_laser") | ("sweep_laser") | ("tracking_laser"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmicCrystalState_ = $CosmicCrystalState$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.HoneyCrystalFeatureConfig" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $HoneyCrystalFeatureConfig implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($HoneyCrystalFeatureConfig)>
readonly "exposed": boolean

constructor(exposed: boolean)

public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoneyCrystalFeatureConfig$$Type = ($HoneyCrystalFeatureConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoneyCrystalFeatureConfig_ = $HoneyCrystalFeatureConfig$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.AncientWaxBase" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $AncientWaxBase {

 "trySwap"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type): $BlockState
 "trySwap"(itemStack: $ItemStack$$Type, currentState: $BlockState$$Type, blockPos: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type, blockIterationTag: $TagKey$$Type<($Block)>): $BlockState
 "applyEntityEffects"(currentState: $BlockState$$Type, collidingEntity: $Entity$$Type): void

(arg0: $ItemStack, arg1: $BlockState, arg2: $Level, arg3: $BlockPos, arg4: $Player, arg5: $InteractionHand): $BlockState$$Type
}

export namespace $AncientWaxBase {
const probejs$$marker: never
}
export class $AncientWaxBase$$Static implements $AncientWaxBase {


 "trySwap"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type): $BlockState
 "trySwap"(itemStack: $ItemStack$$Type, currentState: $BlockState$$Type, blockPos: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type, blockIterationTag: $TagKey$$Type<($Block)>): $BlockState
 "applyEntityEffects"(currentState: $BlockState$$Type, collidingEntity: $Entity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AncientWaxBase$$Type = ((arg0: $ItemStack, arg1: $BlockState, arg2: $Level, arg3: $BlockPos, arg4: $Player, arg5: $InteractionHand) => $BlockState$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AncientWaxBase_ = $AncientWaxBase$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.StringCurtain" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BzPlayerItemUseOnBlockEvent, $BzPlayerItemUseOnBlockEvent$$Type} from "com.telepathicgrunt.the_bumblezone.events.player.BzPlayerItemUseOnBlockEvent"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$PathfindingContext, $PathfindingContext$$Type} from "net.minecraft.world.level.pathfinder.PathfindingContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $StringCurtain extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($StringCurtain)>
static readonly "ATTACHED": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "IS_END": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "CENTER": $BooleanProperty
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
static readonly "HORIZONTAL_FACING": $DirectionProperty

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "getShape"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type, collisionContext: $CollisionContext$$Type): $VoxelShape
public "codec"(): $MapCodec<($StringCurtain)>
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "entityInside"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, entity: $Entity$$Type): void
public "canSurvive"(blockstate: $BlockState$$Type, world: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "onRemove"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, blockState2: $BlockState$$Type, bl: boolean): void
public "useItemOn"(itemStack: $ItemStack$$Type, blockstate: $BlockState$$Type, world: $Level$$Type, position: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type, raytraceResult: $BlockHitResult$$Type): $ItemInteractionResult
public static "onBlockInteractEvent"(event: $BzPlayerItemUseOnBlockEvent$$Type): $InteractionResult
public static "shouldBlockOffEntity"(mob: $Entity$$Type): boolean
public "getStateForPlacement"(placeContext: $BlockPlaceContext$$Type): $BlockState
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "neighborChanged"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, block: $Block$$Type, blockPos2: $BlockPos$$Type, bl: boolean): void
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): integer
public "getBlockSupportShape"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): $VoxelShape
public "getCollisionShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public static "extendCurtainIfPossible"(blockstate: $BlockState$$Type, world: $Level$$Type, position: $BlockPos$$Type): boolean
public static "getCurtainBlockPathType"(mob: $Entity$$Type, pathfindingContext: $PathfindingContext$$Type, blockPos: $BlockPos$$Type, blockPathType: $PathType$$Type): $PathType
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringCurtain$$Type = ($StringCurtain);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringCurtain_ = $StringCurtain$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.CrystallineFlowerBlockItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BzBlockItem, $BzBlockItem$$Type} from "com.telepathicgrunt.the_bumblezone.items.BzBlockItem"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $CrystallineFlowerBlockItem extends $BzBlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
/**
 * 
 * @deprecated
 */
 "block": $Block
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type, fitInContainers: boolean, useBlockName: boolean)

public "verifyComponentsAfterLoad"(itemStack: $ItemStack$$Type): void
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrystallineFlowerBlockItem$$Type = ($CrystallineFlowerBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrystallineFlowerBlockItem_ = $CrystallineFlowerBlockItem$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.recipes.PotionCandleRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$PotionCandleRecipe, $PotionCandleRecipe$$Type} from "com.telepathicgrunt.the_bumblezone.items.recipes.PotionCandleRecipe"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $PotionCandleRecipe$Serializer implements $RecipeSerializer<($PotionCandleRecipe)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($PotionCandleRecipe)>

constructor()

public "codec"(): $MapCodec<($PotionCandleRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($PotionCandleRecipe)>
public static "fromNetwork"(buffer: $RegistryFriendlyByteBuf$$Type): $PotionCandleRecipe
public static "toNetwork"(buffer: $RegistryFriendlyByteBuf$$Type, recipe: $PotionCandleRecipe$$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionCandleRecipe$Serializer$$Type = ($PotionCandleRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionCandleRecipe$Serializer_ = $PotionCandleRecipe$Serializer$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.advancements.TargetAdvancementDoneTrigger$TriggerInstance" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $TargetAdvancementDoneTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($TargetAdvancementDoneTrigger$TriggerInstance)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, targetAdvancement: $ResourceLocation$$Type)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(serverPlayer: $ServerPlayer$$Type): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "targetAdvancement"(): $ResourceLocation
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TargetAdvancementDoneTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "targetAdvancement"?: $ResourceLocation$$Type}) | ([player?: ($ContextAwarePredicate$$Type)?, targetAdvancement?: $ResourceLocation$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TargetAdvancementDoneTrigger$TriggerInstance_ = $TargetAdvancementDoneTrigger$TriggerInstance$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.effects.BzEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $BzEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BzEffect$$Type = ($BzEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BzEffect_ = $BzEffect$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.EssenceBlock" {
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerEssenceEvent, $ServerEssenceEvent$$Type} from "com.telepathicgrunt.the_bumblezone.bossbars.ServerEssenceEvent"
import {$StructurePlaceSettings, $StructurePlaceSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructurePlaceSettings"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$OptionalBoolean, $OptionalBoolean$$Type} from "com.telepathicgrunt.the_bumblezone.utils.OptionalBoolean"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$GeneralUtils$Lazy, $GeneralUtils$Lazy$$Type} from "com.telepathicgrunt.the_bumblezone.utils.GeneralUtils$Lazy"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$BlockExtension, $BlockExtension$$Type} from "com.telepathicgrunt.the_bumblezone.platform.BlockExtension"
import {$EssenceBlockEntity, $EssenceBlockEntity$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.blockentities.EssenceBlockEntity"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $EssenceBlock extends $BaseEntityBlock implements $BlockExtension {
static readonly "PLACEMENT_SETTINGS_WITH_ENTITIES": $GeneralUtils$Lazy<($StructurePlaceSettings)>
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
 "hasCollision": boolean
static readonly "PLACEMENT_SETTINGS": $GeneralUtils$Lazy<($StructurePlaceSettings)>


public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public static "spawnParticles"(world: $ServerLevel$$Type, location: $Vec3$$Type, random: $RandomSource$$Type): void
public "entityInside"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, entity: $Entity$$Type): void
public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, blockState: $BlockState$$Type, blockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getRenderShape"(blockState: $BlockState$$Type): $RenderShape
public "animateTick"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, randomSource: $RandomSource$$Type): void
public "getArenaNbt"(): $ResourceLocation
public "onPlayerEnter"(serverLevel: $ServerLevel$$Type, serverPlayer: $ServerPlayer$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type): void
public "onPlayerLeave"(serverLevel: $ServerLevel$$Type, serverPlayer: $ServerPlayer$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type): void
public "getEventTimeFrame"(): integer
public "getServerEssenceEvent"(): $ServerEssenceEvent
public "getEssenceItemReward"(): $ResourceLocation
public "getEssenceXpReward"(): integer
public "hasMiningFatigue"(): boolean
public "awardPlayerWinStat"(arg0: $ServerPlayer$$Type): void
public "performUniqueArenaTick"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $EssenceBlockEntity$$Type): void
public "getOcclusionShape"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): $VoxelShape
public "getBlockSupportShape"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): $VoxelShape
public "propagatesSkylightDown"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): boolean
public "getCollisionShape"(blockState: $BlockState$$Type, level: $BlockGetter$$Type, blockPos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "bz$shouldNotDisplayFluidOverlay"(): $OptionalBoolean
public "isStickyBlock"(state: $BlockState$$Type): boolean
public "canStickTo"(state: $BlockState$$Type, other: $BlockState$$Type): boolean
public "bz$canStickTo"(state: $BlockState$$Type, other: $BlockState$$Type): $OptionalBoolean
public "bz$isStickyBlock"(state: $BlockState$$Type): boolean
public "bz$getBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type): $PathType
public "getBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type): $PathType
public "shouldDisplayFluidOverlay"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, fluidState: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
get "arenaNbt"(): $ResourceLocation
get "eventTimeFrame"(): integer
get "serverEssenceEvent"(): $ServerEssenceEvent
get "essenceItemReward"(): $ResourceLocation
get "essenceXpReward"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceBlock$$Type = ($EssenceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceBlock_ = $EssenceBlock$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.BzArmor" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemExtension, $ItemExtension$$Type} from "com.telepathicgrunt.the_bumblezone.platform.ItemExtension"
import {$ArmorMaterial$Layer, $ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ArmorItem, $ArmorItem$$Type} from "net.minecraft.world.item.ArmorItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$TriState, $TriState$$Type} from "com.telepathicgrunt.the_bumblezone.utils.TriState"

export class $BzArmor extends $ArmorItem implements $ItemExtension {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(armorMaterial: $Holder$$Type<($ArmorMaterial)>, armorType: $ArmorItem$Type$$Type, properties: $Item$Properties$$Type)

public "inventoryTick"(itemStack: $ItemStack$$Type, level: $Level$$Type, entity: $Entity$$Type, slotIndex: integer, selected: boolean): void
public "bz$onArmorTick"(itemstack: $ItemStack$$Type, world: $Level$$Type, player: $Player$$Type): void
public "getArmorTexture"(stack: $ItemStack$$Type, entity: $Entity$$Type, slot: $EquipmentSlot$$Type, layer: $ArmorMaterial$Layer$$Type, innerModel: boolean): $ResourceLocation
public "getBzItem"(): $Item
public "bz$setDamage"(stack: $ItemStack$$Type, damage: integer): void
public "bz$canEnchant"(itemstack: $ItemStack$$Type, enchantment: $Holder$$Type<($Enchantment)>): $TriState
public "bz$getEquipmentSlot"(stack: $ItemStack$$Type): $EquipmentSlot
public "bz$canPerformAction"(stack: $ItemStack$$Type, toolAction: StringJS): boolean
public "canPerformAction"(stack: $ItemStack$$Type, itemAbility: $ItemAbility$$Type): boolean
public "isRepairable"(arg0: $ItemStack$$Type): boolean
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "bzItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BzArmor$$Type = ($BzArmor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BzArmor_ = $BzArmor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.essence.ContinuityEssence" {
import {$BzEntityDeathEvent, $BzEntityDeathEvent$$Type} from "com.telepathicgrunt.the_bumblezone.events.entity.BzEntityDeathEvent"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$AbilityEssenceItem, $AbilityEssenceItem$$Type} from "com.telepathicgrunt.the_bumblezone.items.essence.AbilityEssenceItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $ContinuityEssence extends $AbilityEssenceItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "inventoryTick"(itemStack: $ItemStack$$Type, level: $Level$$Type, entity: $Entity$$Type, i: integer, bl: boolean): void
public static "spawnParticles"(world: $ServerLevel$$Type, location: $Vec3$$Type, random: $RandomSource$$Type): void
public "getColor"(): integer
public static "CancelledDeath"(event: $BzEntityDeathEvent$$Type): boolean
public static "getDeathMessage"(serverLevel: $ServerLevel$$Type, damageSource: $DamageSource$$Type, serverPlayer: $ServerPlayer$$Type): $Component
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContinuityEssence$$Type = ($ContinuityEssence);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContinuityEssence_ = $ContinuityEssence$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.blocks.FlowingFluidAccessor" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $FlowingFluidAccessor {

 "bumblezone$callSourceNeighborCount"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type): integer
 "bumblezone$callCanPassThroughWall"(arg0: $Direction$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockPos$$Type, arg5: $BlockState$$Type): boolean
 "bumblezone$callSpreadToSides"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type, arg3: $BlockState$$Type): void
}

export namespace $FlowingFluidAccessor {
const probejs$$marker: never
}
export class $FlowingFluidAccessor$$Static implements $FlowingFluidAccessor {


 "bumblezone$callSourceNeighborCount"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type): integer
 "bumblezone$callCanPassThroughWall"(arg0: $Direction$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockPos$$Type, arg5: $BlockState$$Type): boolean
 "bumblezone$callSpreadToSides"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type, arg3: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlowingFluidAccessor$$Type = ($FlowingFluidAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlowingFluidAccessor_ = $FlowingFluidAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.recipes.NbtKeepingShapelessRecipe$Serializer" {
import {$NbtKeepingShapelessRecipe, $NbtKeepingShapelessRecipe$$Type} from "com.telepathicgrunt.the_bumblezone.items.recipes.NbtKeepingShapelessRecipe"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $NbtKeepingShapelessRecipe$Serializer implements $RecipeSerializer<($NbtKeepingShapelessRecipe)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($NbtKeepingShapelessRecipe)>

constructor()

public "codec"(): $MapCodec<($NbtKeepingShapelessRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($NbtKeepingShapelessRecipe)>
public static "fromNetwork"(friendlyByteBuf: $RegistryFriendlyByteBuf$$Type): $NbtKeepingShapelessRecipe
public static "toNetwork"(friendlyByteBuf: $RegistryFriendlyByteBuf$$Type, shapelessRecipe: $NbtKeepingShapelessRecipe$$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NbtKeepingShapelessRecipe$Serializer$$Type = ($NbtKeepingShapelessRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NbtKeepingShapelessRecipe$Serializer_ = $NbtKeepingShapelessRecipe$Serializer$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.recipes.ItemStackSmeltingRecipe" {
import {$CookingBookCategory, $CookingBookCategory$$Type} from "net.minecraft.world.item.crafting.CookingBookCategory"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$SingleRecipeInput, $SingleRecipeInput$$Type} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$SmeltingRecipe, $SmeltingRecipe$$Type} from "net.minecraft.world.item.crafting.SmeltingRecipe"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ItemStackSmeltingRecipe extends $SmeltingRecipe {

constructor(string: StringJS, cookingBookCategory: $CookingBookCategory$$Type, ingredient: $Ingredient$$Type, itemStack: $ItemStack$$Type, f: float, i: integer)

public "category"(): $CookingBookCategory
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(craftingInput: $SingleRecipeInput$$Type, level: $Level$$Type): boolean
public "getType"(): $RecipeType<(any)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(provider: $HolderLookup$Provider$$Type): $ItemStack
public "getGroup"(): StringJS
public "getSerializer"(): $RecipeSerializer<(any)>
public "getToastSymbol"(): $ItemStack
public "getCookingTime"(): integer
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(craftingInput: $SingleRecipeInput$$Type, provider: $HolderLookup$Provider$$Type): $ItemStack
public "getExperience"(): float
public "canCraftInDimensions"(i: integer, j: integer): boolean
get "type"(): $RecipeType<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
get "serializer"(): $RecipeSerializer<(any)>
get "toastSymbol"(): $ItemStack
get "cookingTime"(): integer
get "experience"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackSmeltingRecipe$$Type = ($ItemStackSmeltingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackSmeltingRecipe_ = $ItemStackSmeltingRecipe$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.RotationFacingBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RotationFacingBlock extends $Block {
static readonly "ROTATION": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($RotationFacingBlock)>
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


public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "codec"(): $MapCodec<($RotationFacingBlock)>
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "getStateForPlacement"(blockPlaceContext: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotationFacingBlock$$Type = ($RotationFacingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotationFacingBlock_ = $RotationFacingBlock$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.fluids.base.BzFluid" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$ResourcefulFlowingFluid, $ResourcefulFlowingFluid$$Type} from "com.teamresourceful.resourcefullib.common.fluid.ResourcefulFlowingFluid"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$FluidData, $FluidData$$Type} from "com.teamresourceful.resourcefullib.common.fluid.data.FluidData"

export class $BzFluid extends $ResourcefulFlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(info: $FluidData$$Type, source: boolean)

public "getSource"(): $Fluid
public "info"(): $FluidData
public "isSame"(fluid: $Fluid$$Type): boolean
public "getTickDelay"(level: $LevelReader$$Type): integer
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getFlowing"(): $Fluid
public "getBucket"(): $Item
public static "wrap"(arg1: any): $ReplacementMatch
get "source"(): $Fluid
get "pickupSound"(): $Optional<($SoundEvent)>
get "flowing"(): $Fluid
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BzFluid$$Type = ($BzFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BzFluid_ = $BzFluid$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.entities.EntityCollisionContextAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $EntityCollisionContextAccessor {

 "bumblezone$getHeldItem"(): $ItemStack

(): $ItemStack$$Type
}

export namespace $EntityCollisionContextAccessor {
const probejs$$marker: never
}
export class $EntityCollisionContextAccessor$$Static implements $EntityCollisionContextAccessor {


 "bumblezone$getHeldItem"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityCollisionContextAccessor$$Type = (() => $ItemStack$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityCollisionContextAccessor_ = $EntityCollisionContextAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.LayeredBlockSurface" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$BiomeBasedLayerConfig, $BiomeBasedLayerConfig$$Type} from "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.BiomeBasedLayerConfig"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $LayeredBlockSurface extends $Feature<($BiomeBasedLayerConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(configFactory: $Codec$$Type<($BiomeBasedLayerConfig$$Type)>)

public "setSeed"(seed: long): void
public "place"(context: $FeaturePlaceContext$$Type<($BiomeBasedLayerConfig$$Type)>): boolean
set "seed"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayeredBlockSurface$$Type = ($LayeredBlockSurface);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LayeredBlockSurface_ = $LayeredBlockSurface$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.platform.BzArrowItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ArrowItem, $ArrowItem$$Type} from "net.minecraft.world.item.ArrowItem"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$OptionalBoolean, $OptionalBoolean$$Type} from "com.telepathicgrunt.the_bumblezone.utils.OptionalBoolean"

export class $BzArrowItem extends $ArrowItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "isInfinite"(stack: $ItemStack$$Type, bow: $ItemStack$$Type, player: $Player$$Type): boolean
public "bz$isInfinite"(stack: $ItemStack$$Type, bow: $ItemStack$$Type, player: $LivingEntity$$Type): $OptionalBoolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BzArrowItem$$Type = ($BzArrowItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BzArrowItem_ = $BzArrowItem$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.advancements.CounterTrigger$TriggerInstance" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $CounterTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($CounterTrigger$TriggerInstance)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, targetCount: integer)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(count: integer): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "targetCount"(): integer
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CounterTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "targetCount"?: integer}) | ([player?: ($ContextAwarePredicate$$Type)?, targetCount?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CounterTrigger$TriggerInstance_ = $CounterTrigger$TriggerInstance$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.TwoToneSpikeFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$TwoToneSpikeFeatureConfig, $TwoToneSpikeFeatureConfig$$Type} from "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.TwoToneSpikeFeatureConfig"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $TwoToneSpikeFeature extends $Feature<($TwoToneSpikeFeatureConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(configFactory: $Codec$$Type<($TwoToneSpikeFeatureConfig$$Type)>)

public "setSeed"(seed: long): void
public "place"(context: $FeaturePlaceContext$$Type<($TwoToneSpikeFeatureConfig$$Type)>): boolean
set "seed"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TwoToneSpikeFeature$$Type = ($TwoToneSpikeFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TwoToneSpikeFeature_ = $TwoToneSpikeFeature$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.EssenceBlockRed" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$GeneralUtils$Lazy, $GeneralUtils$Lazy$$Type} from "com.telepathicgrunt.the_bumblezone.utils.GeneralUtils$Lazy"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ServerEssenceEvent, $ServerEssenceEvent$$Type} from "com.telepathicgrunt.the_bumblezone.bossbars.ServerEssenceEvent"
import {$StructurePlaceSettings, $StructurePlaceSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructurePlaceSettings"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EssenceBlockEntity, $EssenceBlockEntity$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.blockentities.EssenceBlockEntity"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EssenceBlock, $EssenceBlock$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.EssenceBlock"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EssenceBlockRed extends $EssenceBlock {
static readonly "PLACEMENT_SETTINGS_WITH_ENTITIES": $GeneralUtils$Lazy<($StructurePlaceSettings)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($EssenceBlockRed)>
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
static readonly "PLACEMENT_SETTINGS": $GeneralUtils$Lazy<($StructurePlaceSettings)>

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "codec"(): $MapCodec<($EssenceBlockRed)>
public "getArenaNbt"(): $ResourceLocation
public "onPlayerEnter"(serverLevel: $ServerLevel$$Type, serverPlayer: $ServerPlayer$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type): void
public "onPlayerLeave"(serverLevel: $ServerLevel$$Type, serverPlayer: $ServerPlayer$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type): void
public "getEventTimeFrame"(): integer
public "getServerEssenceEvent"(): $ServerEssenceEvent
public "getEssenceItemReward"(): $ResourceLocation
public "getEssenceXpReward"(): integer
public "hasMiningFatigue"(): boolean
public "awardPlayerWinStat"(serverPlayer: $ServerPlayer$$Type): void
public "performUniqueArenaTick"(serverLevel: $ServerLevel$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type): void
public "asHolder"(): $Holder<(any)>
get "arenaNbt"(): $ResourceLocation
get "eventTimeFrame"(): integer
get "serverEssenceEvent"(): $ServerEssenceEvent
get "essenceItemReward"(): $ResourceLocation
get "essenceXpReward"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceBlockRed$$Type = ($EssenceBlockRed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceBlockRed_ = $EssenceBlockRed$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.CarpenterBeeBoots" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemExtension, $ItemExtension$$Type} from "com.telepathicgrunt.the_bumblezone.platform.ItemExtension"
import {$ArmorMaterial$Layer, $ArmorMaterial$Layer$$Type} from "net.minecraft.world.item.ArmorMaterial$Layer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BeeArmor, $BeeArmor$$Type} from "com.telepathicgrunt.the_bumblezone.items.BeeArmor"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $CarpenterBeeBoots extends $BeeArmor implements $ItemExtension {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(material: $Holder$$Type<($ArmorMaterial)>, armorType: $ArmorItem$Type$$Type, properties: $Item$Properties$$Type, variant: integer)

public "bz$onArmorTick"(itemStack: $ItemStack$$Type, level: $Level$$Type, player: $Player$$Type): void
public static "getPlayerDestroySpeed"(player: $Player$$Type, currentSpeed: float): float
public static "getEntityBeeBoots"(entity: $LivingEntity$$Type): $ItemStack
public "verifyComponentsAfterLoad"(itemStack: $ItemStack$$Type): void
public "isRepairable"(arg0: $ItemStack$$Type): boolean
public "getArmorTexture"(arg0: $ItemStack$$Type, arg1: $Entity$$Type, arg2: $EquipmentSlot$$Type, arg3: $ArmorMaterial$Layer$$Type, arg4: boolean): $ResourceLocation
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarpenterBeeBoots$$Type = ($CarpenterBeeBoots);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarpenterBeeBoots_ = $CarpenterBeeBoots$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.RotationAxisBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RotationAxisBlock extends $Block {
static readonly "ROTATION": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($RotationAxisBlock)>
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
static readonly "AXIS": $EnumProperty<($Direction$Axis)>


public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "codec"(): $MapCodec<($RotationAxisBlock)>
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "getStateForPlacement"(blockPlaceContext: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotationAxisBlock$$Type = ($RotationAxisBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotationAxisBlock_ = $RotationAxisBlock$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.CrystalCannon" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ProjectileWeaponItem, $ProjectileWeaponItem$$Type} from "net.minecraft.world.item.ProjectileWeaponItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemExtension, $ItemExtension$$Type} from "com.telepathicgrunt.the_bumblezone.platform.ItemExtension"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TriState, $TriState$$Type} from "com.telepathicgrunt.the_bumblezone.utils.TriState"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $CrystalCannon extends $ProjectileWeaponItem implements $ItemExtension {
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, interactionHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(crystalCannon: $ItemStack$$Type, level: $Level$$Type, livingEntity: $LivingEntity$$Type, currentDuration: integer): void
public "getUseDuration"(itemStack: $ItemStack$$Type, livingEntity: $LivingEntity$$Type): integer
public static "tryAddCrystal"(crystalCannonItem: $ItemStack$$Type): boolean
public "bz$canEnchant"(itemstack: $ItemStack$$Type, enchantment: $Holder$$Type<($Enchantment)>): $TriState
public static "getNumberOfCrystals"(crystalCannonItem: $ItemStack$$Type): integer
public "getChargeDuration"(itemStack: $ItemStack$$Type, livingEntity: $LivingEntity$$Type): integer
public "getDefaultCreativeAmmo"(player: $Player$$Type, projectileWeaponItem: $ItemStack$$Type): $ItemStack
public "getEnchantmentValue"(): integer
public "isValidRepairItem"(toRepair: $ItemStack$$Type, repair: $ItemStack$$Type): boolean
public "getUseAnimation"(itemStack: $ItemStack$$Type): $UseAnim
public "getSupportedHeldProjectiles"(): $Predicate<($ItemStack)>
public "getAllSupportedProjectiles"(): $Predicate<($ItemStack)>
public "verifyComponentsAfterLoad"(itemStack: $ItemStack$$Type): void
public static "getAndClearStoredCrystals"(crystalCannonItem: $ItemStack$$Type): integer
public "getDefaultProjectileRange"(): integer
public "getBzItem"(): $Item
public "bz$setDamage"(stack: $ItemStack$$Type, damage: integer): void
public "bz$onArmorTick"(itemstack: $ItemStack$$Type, world: $Level$$Type, player: $Player$$Type): void
public "bz$getEquipmentSlot"(stack: $ItemStack$$Type): $EquipmentSlot
public "bz$canPerformAction"(stack: $ItemStack$$Type, toolAction: StringJS): boolean
public "canPerformAction"(stack: $ItemStack$$Type, itemAbility: $ItemAbility$$Type): boolean
public "isRepairable"(arg0: $ItemStack$$Type): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "enchantmentValue"(): integer
get "supportedHeldProjectiles"(): $Predicate<($ItemStack)>
get "allSupportedProjectiles"(): $Predicate<($ItemStack)>
get "defaultProjectileRange"(): integer
get "bzItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrystalCannon$$Type = ($CrystalCannon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrystalCannon_ = $CrystalCannon$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.modcompat.neoforge.framedblocks.CarvableWaxBlockCamoContainerFactory" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CarvableWaxBlockCamoContainer, $CarvableWaxBlockCamoContainer$$Type} from "com.telepathicgrunt.the_bumblezone.modcompat.neoforge.framedblocks.CarvableWaxBlockCamoContainer"
import {$CamoContainer, $CamoContainer$$Type} from "xfacthd.framedblocks.api.camo.CamoContainer"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbstractBlockCamoContainerFactory, $AbstractBlockCamoContainerFactory$$Type} from "xfacthd.framedblocks.api.camo.block.AbstractBlockCamoContainerFactory"

export class $CarvableWaxBlockCamoContainerFactory extends $AbstractBlockCamoContainerFactory<($CarvableWaxBlockCamoContainer)> {
static readonly "MSG_BLACKLISTED": $Component


public "applyCamo"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $ItemStack$$Type): $CamoContainer<(any), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarvableWaxBlockCamoContainerFactory$$Type = ($CarvableWaxBlockCamoContainerFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarvableWaxBlockCamoContainerFactory_ = $CarvableWaxBlockCamoContainerFactory$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.recipes.NbtKeepingShapelessRecipe" {
import {$CraftingInput, $CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$CraftingBookCategory, $CraftingBookCategory$$Type} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CraftingRecipe, $CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $NbtKeepingShapelessRecipe implements $CraftingRecipe {

constructor(string: StringJS, craftingBookCategory: $CraftingBookCategory$$Type, itemStack: $ItemStack$$Type, nonNullList: $NonNullList$$Type<($Ingredient$$Type)>, itemToKeepNbtOf: $Item$$Type)

public "category"(): $CraftingBookCategory
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(craftingContainer: $CraftingInput$$Type, level: $Level$$Type): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getResultItem"(provider: $HolderLookup$Provider$$Type): $ItemStack
public "getGroup"(): StringJS
public "getSerializer"(): $RecipeSerializer<(any)>
public "assemble"(craftingContainer: $CraftingInput$$Type, provider: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(i: integer, j: integer): boolean
public "getType"(): $RecipeType<(any)>
public "isSpecial"(): boolean
public "isIncomplete"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
get "serializer"(): $RecipeSerializer<(any)>
get "type"(): $RecipeType<(any)>
get "special"(): boolean
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NbtKeepingShapelessRecipe$$Type = ($NbtKeepingShapelessRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NbtKeepingShapelessRecipe_ = $NbtKeepingShapelessRecipe$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.BeeCannon" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemExtension, $ItemExtension$$Type} from "com.telepathicgrunt.the_bumblezone.platform.ItemExtension"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$UseAnim, $UseAnim$$Type} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TriState, $TriState$$Type} from "com.telepathicgrunt.the_bumblezone.utils.TriState"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $BeeCannon extends $Item implements $ItemExtension {
static readonly "MAX_NUMBER_OF_BEES": integer
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TAG_BEES": StringJS
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, interactionHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "releaseUsing"(beeCannon: $ItemStack$$Type, level: $Level$$Type, livingEntity: $LivingEntity$$Type, currentDuration: integer): void
public "getUseDuration"(itemStack: $ItemStack$$Type, livingEntity: $LivingEntity$$Type): integer
public static "tryAddBee"(beeCannonItem: $ItemStack$$Type, bee: $Entity$$Type): boolean
public static "tryReleaseBees"(level: $Level$$Type, beeCannonItem: $ItemStack$$Type): $List<($Entity)>
public "bz$canEnchant"(itemstack: $ItemStack$$Type, enchantment: $Holder$$Type<($Enchantment)>): $TriState
public static "getNumberOfBees"(beeCannonItem: $ItemStack$$Type): integer
public "getChargeDuration"(itemStack: $ItemStack$$Type, livingEntity: $LivingEntity$$Type): integer
public "interactLivingEntity"(beeCannon: $ItemStack$$Type, playerEntity: $Player$$Type, entity: $LivingEntity$$Type, playerHand: $InteractionHand$$Type): $InteractionResult
public "getEnchantmentValue"(): integer
public "isValidRepairItem"(toRepair: $ItemStack$$Type, repair: $ItemStack$$Type): boolean
public "getUseAnimation"(itemStack: $ItemStack$$Type): $UseAnim
public "verifyComponentsAfterLoad"(itemStack: $ItemStack$$Type): void
public "getBzItem"(): $Item
public "bz$setDamage"(stack: $ItemStack$$Type, damage: integer): void
public "bz$onArmorTick"(itemstack: $ItemStack$$Type, world: $Level$$Type, player: $Player$$Type): void
public "bz$getEquipmentSlot"(stack: $ItemStack$$Type): $EquipmentSlot
public "bz$canPerformAction"(stack: $ItemStack$$Type, toolAction: StringJS): boolean
public "canPerformAction"(stack: $ItemStack$$Type, itemAbility: $ItemAbility$$Type): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "enchantmentValue"(): integer
get "bzItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeeCannon$$Type = ($BeeCannon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeeCannon_ = $BeeCannon$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.utils.GeneralUtils$Lazy" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"

export class $GeneralUtils$Lazy<T> {

constructor()
constructor(supplierValue: $Supplier$$Type<(T)>)

public "getOrCompute"(supplier: $Supplier$$Type<(T)>): T
public "getOrFillFromInternal"(): T
get "orFillFromInternal"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneralUtils$Lazy$$Type<T> = ($GeneralUtils$Lazy<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeneralUtils$Lazy_<T> = $GeneralUtils$Lazy$$Type<(T)>;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.client.TextureStateShardAccessor" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"

export interface $TextureStateShardAccessor {

 "bumblezone$getTexture"(): $Optional<($ResourceLocation)>

(): $Optional$$Type<($ResourceLocation$$Type)>
}

export namespace $TextureStateShardAccessor {
const probejs$$marker: never
}
export class $TextureStateShardAccessor$$Static implements $TextureStateShardAccessor {


 "bumblezone$getTexture"(): $Optional<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureStateShardAccessor$$Type = (() => $Optional$$Type<($ResourceLocation$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureStateShardAccessor_ = $TextureStateShardAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.GiantHoneyCrystalFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $GiantHoneyCrystalFeature extends $Feature<($NoneFeatureConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(configFactory: $Codec$$Type<($NoneFeatureConfiguration$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GiantHoneyCrystalFeature$$Type = ($GiantHoneyCrystalFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GiantHoneyCrystalFeature_ = $GiantHoneyCrystalFeature$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.bossbars.ServerEssenceEvent" {
import {$ServerBossEvent, $ServerBossEvent$$Type} from "net.minecraft.server.level.ServerBossEvent"
import {$BossEvent$BossBarColor, $BossEvent$BossBarColor$$Type} from "net.minecraft.world.BossEvent$BossBarColor"
import {$BossEvent$BossBarOverlay, $BossEvent$BossBarOverlay$$Type} from "net.minecraft.world.BossEvent$BossBarOverlay"

export class $ServerEssenceEvent extends $ServerBossEvent {

constructor(translation: StringJS, bossBarColor: $BossEvent$BossBarColor$$Type, bossBarOverlay: $BossEvent$BossBarOverlay$$Type)

public "setEndEventTimer"(endEventTimer: integer, tickrate: float): void
public "getEndEventTimer"(): integer
get "endEventTimer"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerEssenceEvent$$Type = ($ServerEssenceEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerEssenceEvent_ = $ServerEssenceEvent$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.SentryWatcherSpawnEgg" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $SentryWatcherSpawnEgg extends $Item {
static readonly "DISPENSER_OWNER_UUID": $UUID
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(typeIn: $Supplier$$Type<($EntityType$$Type<($Entity$$Type)>)>, builder: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, interactionHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getType"(itemStack: $ItemStack$$Type): $EntityType<(any)>
public "useOn"(useOnContext: $UseOnContext$$Type): $InteractionResult
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SentryWatcherSpawnEgg$$Type = ($SentryWatcherSpawnEgg);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SentryWatcherSpawnEgg_ = $SentryWatcherSpawnEgg$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.events.base.ReturnableEventHandler" {
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ReturnableEventHandler$ReturnableFunction, $ReturnableEventHandler$ReturnableFunction$$Type} from "com.telepathicgrunt.the_bumblezone.events.base.ReturnableEventHandler$ReturnableFunction"

export class $ReturnableEventHandler<T, R> {

constructor()

public "invoke"(event: T, defaultValue: R): R
public "invoke"(event: T): R
public "addListener"(listener: $Function$$Type<(T), (R)>): void
public "addListener"(listener: $ReturnableEventHandler$ReturnableFunction$$Type<(T), (R)>): void
public "addListener"(listener: $BiConsumer$$Type<(R), (T)>): void
public "removeListener"(listener: $ReturnableEventHandler$ReturnableFunction$$Type<(T), (R)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReturnableEventHandler$$Type<T, R> = ($ReturnableEventHandler<(T), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReturnableEventHandler_<T, R> = $ReturnableEventHandler$$Type<(T), (R)>;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.SuperCandleWick" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$OptionalBoolean, $OptionalBoolean$$Type} from "com.telepathicgrunt.the_bumblezone.utils.OptionalBoolean"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$BlockExtension, $BlockExtension$$Type} from "com.telepathicgrunt.the_bumblezone.platform.BlockExtension"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $SuperCandleWick extends $Block implements $SimpleWaterloggedBlock, $BlockExtension {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SuperCandleWick)>
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "LIT": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(isSoul: boolean, properties: $BlockBehaviour$Properties$$Type)
constructor(isSoul: boolean)

public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "isSoul"(): boolean
public static "setLit"(levelAccessor: $LevelAccessor$$Type, blockState: $BlockState$$Type, blockPos: $BlockPos$$Type, lit: boolean): boolean
public "codec"(): $MapCodec<($SuperCandleWick)>
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "canPlaceLiquid"(player: $Player$$Type, world: $BlockGetter$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, fluid: $Fluid$$Type): boolean
public "placeLiquid"(level: $LevelAccessor$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, fluidState: $FluidState$$Type): boolean
public static "extinguish"(player: $Player$$Type, blockState: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type): void
public "entityInside"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): void
public "canSurvive"(blockState: $BlockState$$Type, levelReader: $LevelReader$$Type, blockPos: $BlockPos$$Type): boolean
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "animateTick"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public static "setBelowLit"(levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, lit: boolean): void
public static "isSoulBelowInRange"(levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type): boolean
public "bz$getBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type): $PathType
public static "attemptCandleLighting"(levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type): void
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "neighborChanged"(blockstate: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, block: $Block$$Type, fromPos: $BlockPos$$Type, notify: boolean): void
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): integer
public static "getLitWickPositionAbove"(levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type): $BlockPos
public "getPickupSound"(): $Optional<($SoundEvent)>
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "isStickyBlock"(state: $BlockState$$Type): boolean
public "canStickTo"(state: $BlockState$$Type, other: $BlockState$$Type): boolean
public "bz$canStickTo"(state: $BlockState$$Type, other: $BlockState$$Type): $OptionalBoolean
public "bz$isStickyBlock"(state: $BlockState$$Type): boolean
public "getBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type): $PathType
public "bz$shouldNotDisplayFluidOverlay"(): $OptionalBoolean
public "shouldDisplayFluidOverlay"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, fluidState: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "soul"(): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuperCandleWick$$Type = ($SuperCandleWick);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SuperCandleWick_ = $SuperCandleWick$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.SugarInfusedCobblestone" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SugarInfusedCobblestone extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SugarInfusedCobblestone)>
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

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "codec"(): $MapCodec<($SugarInfusedCobblestone)>
public "onPlace"(blockState: $BlockState$$Type, world: $Level$$Type, blockPos: $BlockPos$$Type, previousBlockState: $BlockState$$Type, notify: boolean): void
public "neighborChanged"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, block: $Block$$Type, blockPos1: $BlockPos$$Type, b: boolean): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SugarInfusedCobblestone$$Type = ($SugarInfusedCobblestone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SugarInfusedCobblestone_ = $SugarInfusedCobblestone$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.client.ParticleEngineAccessor" {
import {$TextureAtlas, $TextureAtlas$$Type} from "net.minecraft.client.renderer.texture.TextureAtlas"

export interface $ParticleEngineAccessor {

 "bumblezone$getTextureAtlas"(): $TextureAtlas

(): $TextureAtlas$$Type
}

export namespace $ParticleEngineAccessor {
const probejs$$marker: never
}
export class $ParticleEngineAccessor$$Static implements $ParticleEngineAccessor {


 "bumblezone$getTextureAtlas"(): $TextureAtlas
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEngineAccessor$$Type = (() => $TextureAtlas$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEngineAccessor_ = $ParticleEngineAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.NbtFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$NbtFeatureConfig, $NbtFeatureConfig$$Type} from "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.NbtFeatureConfig"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $NbtFeature<T extends $NbtFeatureConfig> extends $Feature<(T)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(configFactory: $Codec$$Type<(T)>)

public "place"(context: $FeaturePlaceContext$$Type<(T)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NbtFeature$$Type<T> = ($NbtFeature<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NbtFeature_<T> = $NbtFeature$$Type<(T)>;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.WebWall" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$Set, $Set$$Type} from "java.util.Set"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $WebWall extends $Feature<($NoneFeatureConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "AXIS_TO_FACINGS": $Map<($Direction$Axis), ($Set<($Direction)>)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(configFactory: $Codec$$Type<($NoneFeatureConfiguration$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WebWall$$Type = ($WebWall);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WebWall_ = $WebWall$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.client.RenderStateShardAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderStateShardAccessor {

 "bumblezone$getName"(): StringJS

(): StringJS
}

export namespace $RenderStateShardAccessor {
const probejs$$marker: never
}
export class $RenderStateShardAccessor$$Static implements $RenderStateShardAccessor {


 "bumblezone$getName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShardAccessor$$Type = (() => StringJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderStateShardAccessor_ = $RenderStateShardAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.dimension.NoiseChunkExtension" {
import {$Climate$Sampler, $Climate$Sampler$$Type} from "net.minecraft.world.level.biome.Climate$Sampler"
import {$BiomeSource, $BiomeSource$$Type} from "net.minecraft.world.level.biome.BiomeSource"

export interface $NoiseChunkExtension {

 "the_bumblezone$getCachedClimateSampler"(): $Climate$Sampler
 "the_bumblezone$setCachedClimateSampler"(arg0: $Climate$Sampler$$Type): void
 "the_bumblezone$getBiomeSource"(): $BiomeSource
 "the_bumblezone$setBiomeSource"(arg0: $BiomeSource$$Type): void
}

export namespace $NoiseChunkExtension {
const probejs$$marker: never
}
export class $NoiseChunkExtension$$Static implements $NoiseChunkExtension {


 "the_bumblezone$getCachedClimateSampler"(): $Climate$Sampler
 "the_bumblezone$setCachedClimateSampler"(arg0: $Climate$Sampler$$Type): void
 "the_bumblezone$getBiomeSource"(): $BiomeSource
 "the_bumblezone$setBiomeSource"(arg0: $BiomeSource$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoiseChunkExtension$$Type = ($NoiseChunkExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoiseChunkExtension_ = $NoiseChunkExtension$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.world.NoiseGeneratorSettingsAccessor" {
import {$NoiseRouter, $NoiseRouter$$Type} from "net.minecraft.world.level.levelgen.NoiseRouter"

export interface $NoiseGeneratorSettingsAccessor {

 "bumblezone$setNoiseRouter"(arg0: $NoiseRouter$$Type): void

(arg0: $NoiseRouter): void
}

export namespace $NoiseGeneratorSettingsAccessor {
const probejs$$marker: never
}
export class $NoiseGeneratorSettingsAccessor$$Static implements $NoiseGeneratorSettingsAccessor {


 "bumblezone$setNoiseRouter"(arg0: $NoiseRouter$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoiseGeneratorSettingsAccessor$$Type = ((arg0: $NoiseRouter) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoiseGeneratorSettingsAccessor_ = $NoiseGeneratorSettingsAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.WebCeiling" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $WebCeiling extends $Feature<($NoneFeatureConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(configFactory: $Codec$$Type<($NoneFeatureConfiguration$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WebCeiling$$Type = ($WebCeiling);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WebCeiling_ = $WebCeiling$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.PotionCandleBase" {
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$OptionalBoolean, $OptionalBoolean$$Type} from "com.telepathicgrunt.the_bumblezone.utils.OptionalBoolean"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SuperCandle, $SuperCandle$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.SuperCandle"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$BlockExtension, $BlockExtension$$Type} from "com.telepathicgrunt.the_bumblezone.platform.BlockExtension"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $PotionCandleBase extends $BaseEntityBlock implements $SimpleWaterloggedBlock, $SuperCandle, $BlockExtension {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($PotionCandleBase)>
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "LIT": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(properties: $BlockBehaviour$Properties$$Type)
constructor()

public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "codec"(): $MapCodec<($PotionCandleBase)>
public "onPlace"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, oldState: $BlockState$$Type, isMoving: boolean): void
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "canPlaceLiquid"(player: $Player$$Type, world: $BlockGetter$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, fluid: $Fluid$$Type): boolean
public "placeLiquid"(level: $LevelAccessor$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, fluidState: $FluidState$$Type): boolean
public "canSurvive"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, blockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "useItemOn"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, player: $Player$$Type, interactionHand: $InteractionHand$$Type, blockHitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "animateTick"(blockState: $BlockState$$Type, level: $Level$$Type, position: $BlockPos$$Type, random: $RandomSource$$Type): void
public static "getItemColor"(itemStack: $ItemStack$$Type): integer
public static "getBlockColor"(world: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, tintIndex: integer): integer
public "bz$getBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type): $PathType
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "neighborChanged"(blockstate: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, block: $Block$$Type, fromPos: $BlockPos$$Type, notify: boolean): void
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): integer
public "onProjectileHit"(level: $Level$$Type, state: $BlockState$$Type, hit: $BlockHitResult$$Type, projectile: $Projectile$$Type): void
public "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "getToolModifiedState"(state: $BlockState$$Type, context: $UseOnContext$$Type, itemAbility: $ItemAbility$$Type, simulate: boolean): $BlockState
public "getPickupSound"(): $Optional<($SoundEvent)>
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "lightCandle"(level: $Level$$Type, blockPos: $BlockPos$$Type, player: $Player$$Type): boolean
public static "canBeLit"(level: $Level$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public static "placeWickIfPossible"(levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, lit: boolean): void
public "CandleUnlightBehaviors"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, player: $Player$$Type, simulate: boolean): boolean
public "CandleLightBehaviors"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, player: $Player$$Type, playerHand: $InteractionHand$$Type, simulate: boolean): boolean
public "isStickyBlock"(state: $BlockState$$Type): boolean
public "canStickTo"(state: $BlockState$$Type, other: $BlockState$$Type): boolean
public "bz$canStickTo"(state: $BlockState$$Type, other: $BlockState$$Type): $OptionalBoolean
public "bz$isStickyBlock"(state: $BlockState$$Type): boolean
public "getBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type): $PathType
public "bz$shouldNotDisplayFluidOverlay"(): $OptionalBoolean
public "shouldDisplayFluidOverlay"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, fluidState: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionCandleBase$$Type = ($PotionCandleBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PotionCandleBase_ = $PotionCandleBase$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.StickyHoneyResidueFeature" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $StickyHoneyResidueFeature extends $Feature<($NoneFeatureConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(configFactory: $Codec$$Type<($NoneFeatureConfiguration$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StickyHoneyResidueFeature$$Type = ($StickyHoneyResidueFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StickyHoneyResidueFeature_ = $StickyHoneyResidueFeature$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.fluids.SugarWaterBubbleColumnBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BubbleColumnBlock, $BubbleColumnBlock$$Type} from "net.minecraft.world.level.block.BubbleColumnBlock"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SugarWaterBubbleColumnBlock extends $BubbleColumnBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BubbleColumnBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "DRAG_DOWN": $BooleanProperty
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

constructor()

public "tick"(blockState: $BlockState$$Type, serverLevel: $ServerLevel$$Type, blockPos: $BlockPos$$Type, randomSource: $RandomSource$$Type): void
public "getPickupSound"(): $Optional<($SoundEvent)>
public "updateShape"(blockState: $BlockState$$Type, direction: $Direction$$Type, blockState2: $BlockState$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, blockPos2: $BlockPos$$Type): $BlockState
public "pickupBlock"(player: $Player$$Type, levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $ItemStack
public static "updateColumn"(levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): void
public static "updateColumn"(levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, blockState2: $BlockState$$Type): void
/**
 * 
 * @deprecated
 */
public "entityInside"(state: $BlockState$$Type, world: $Level$$Type, position: $BlockPos$$Type, entity: $Entity$$Type): void
public "canSurvive"(blockState: $BlockState$$Type, levelReader: $LevelReader$$Type, blockPos: $BlockPos$$Type): boolean
public "getFluidState"(blockState: $BlockState$$Type): $FluidState
public "asHolder"(): $Holder<(any)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SugarWaterBubbleColumnBlock$$Type = ($SugarWaterBubbleColumnBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SugarWaterBubbleColumnBlock_ = $SugarWaterBubbleColumnBlock$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.effects.ProtectionOfTheHiveEffect" {
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

export class $ProtectionOfTheHiveEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(type: $MobEffectCategory$$Type, potionColor: integer)

public "isInstantenous"(): boolean
public static "resetBeeAngry"(world: $Level$$Type, livingEntity: $LivingEntity$$Type): void
public "applyEffectTick"(entity: $LivingEntity$$Type, amplifier: integer): boolean
public "onEffectStarted"(livingEntity: $LivingEntity$$Type, amplifier: integer): void
public "shouldApplyEffectTickThisTick"(duration: integer, amplifier: integer): boolean
get "instantenous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProtectionOfTheHiveEffect$$Type = ($ProtectionOfTheHiveEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProtectionOfTheHiveEffect_ = $ProtectionOfTheHiveEffect$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.events.lifecycle.BzSetupEvent" {
import {$EventHandler, $EventHandler$$Type} from "com.telepathicgrunt.the_bumblezone.events.base.EventHandler"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $BzSetupEvent extends $Record {
static readonly "EVENT": $EventHandler<($BzSetupEvent)>

constructor(enqueue: $Consumer$$Type<($Runnable)>)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "enqueue"(): $Consumer<($Runnable)>
public "enqueueWork"(runnable: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BzSetupEvent$$Type = ({"enqueue"?: $Consumer$$Type<($Runnable$$Type)>}) | ([enqueue?: $Consumer$$Type<($Runnable$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BzSetupEvent_ = $BzSetupEvent$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.events.player.BzPlayerGrantAdvancementEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$EventHandler, $EventHandler$$Type} from "com.telepathicgrunt.the_bumblezone.events.base.EventHandler"
import {$Advancement, $Advancement$$Type} from "net.minecraft.advancements.Advancement"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BzPlayerGrantAdvancementEvent extends $Record {
static readonly "EVENT": $EventHandler<($BzPlayerGrantAdvancementEvent)>

constructor(advancement: $Advancement$$Type, player: $Player$$Type)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "player"(): $Player
public "advancement"(): $Advancement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BzPlayerGrantAdvancementEvent$$Type = ({"player"?: $Player$$Type, "advancement"?: $Advancement$$Type}) | ([player?: $Player$$Type, advancement?: $Advancement$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BzPlayerGrantAdvancementEvent_ = $BzPlayerGrantAdvancementEvent$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.DispenserAddedSpawnEgg" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SpawnEggItem, $SpawnEggItem$$Type} from "net.minecraft.world.item.SpawnEggItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BzSetupEvent, $BzSetupEvent$$Type} from "com.telepathicgrunt.the_bumblezone.events.lifecycle.BzSetupEvent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $DispenserAddedSpawnEgg extends $SpawnEggItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "BY_ID": $Map<($EntityType<($Mob)>), ($SpawnEggItem)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
 "defaultType": $EntityType<(any)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(typeIn: $Supplier$$Type<($EntityType$$Type<($Mob$$Type)>)>, primaryColorIn: integer, secondaryColorIn: integer, builder: $Item$Properties$$Type)

public "getType"(itemStack: $ItemStack$$Type): $EntityType<(any)>
public static "onSetup"(event: $BzSetupEvent$$Type): void
public "requiredFeatures"(): $FeatureFlagSet
public static "bumblezone$getIdMap"(): $Map<($EntityType<($Mob)>), ($SpawnEggItem)>
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispenserAddedSpawnEgg$$Type = ($DispenserAddedSpawnEgg);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DispenserAddedSpawnEgg_ = $DispenserAddedSpawnEgg$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.BeeDungeon" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$NbtFeatureConfig, $NbtFeatureConfig$$Type} from "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.NbtFeatureConfig"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$NbtFeature, $NbtFeature$$Type} from "com.telepathicgrunt.the_bumblezone.worldgen.features.NbtFeature"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $BeeDungeon extends $NbtFeature<($NbtFeatureConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(configFactory: $Codec$$Type<($NbtFeatureConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($NbtFeatureConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeeDungeon$$Type = ($BeeDungeon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeeDungeon_ = $BeeDungeon$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.world.StructureTemplateAccessor" {
import {$StructureTemplate$Palette, $StructureTemplate$Palette$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette"
import {$StructureTemplate$StructureEntityInfo, $StructureTemplate$StructureEntityInfo$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureEntityInfo"
import {$List, $List$$Type} from "java.util.List"

export interface $StructureTemplateAccessor {

 "bumblezone$getBlocks"(): $List<($StructureTemplate$Palette)>
 "bumblezone$getEntityInfoList"(): $List<($StructureTemplate$StructureEntityInfo)>
}

export namespace $StructureTemplateAccessor {
const probejs$$marker: never
}
export class $StructureTemplateAccessor$$Static implements $StructureTemplateAccessor {


 "bumblezone$getBlocks"(): $List<($StructureTemplate$Palette)>
 "bumblezone$getEntityInfoList"(): $List<($StructureTemplate$StructureEntityInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplateAccessor$$Type = ($StructureTemplateAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureTemplateAccessor_ = $StructureTemplateAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.entities.FoxAccessor" {
import {$UUID, $UUID$$Type} from "java.util.UUID"

export interface $FoxAccessor {

 "bumblezone$callTrusts"(arg0: $UUID$$Type): boolean

(arg0: $UUID): boolean
}

export namespace $FoxAccessor {
const probejs$$marker: never
}
export class $FoxAccessor$$Static implements $FoxAccessor {


 "bumblezone$callTrusts"(arg0: $UUID$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoxAccessor$$Type = ((arg0: $UUID) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoxAccessor_ = $FoxAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.BzCustomBucketItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidData, $FluidData$$Type} from "com.teamresourceful.resourcefullib.common.fluid.data.FluidData"
import {$BzBucketItem, $BzBucketItem$$Type} from "com.telepathicgrunt.the_bumblezone.fluids.base.BzBucketItem"

export class $BzCustomBucketItem extends $BzBucketItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "fluid": $Fluid
readonly "content": $Fluid
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(info: $FluidData$$Type, builder: $Item$Properties$$Type)

public "use"(world: $Level$$Type, playerEntity: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "emptyContents"(player: $Player$$Type, level: $Level$$Type, pos: $BlockPos$$Type, hitResult: $BlockHitResult$$Type): boolean
public "emptyContents"(player: $Player$$Type, world: $Level$$Type, pos: $BlockPos$$Type, hitResult: $BlockHitResult$$Type, container: $ItemStack$$Type): boolean
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BzCustomBucketItem$$Type = ($BzCustomBucketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BzCustomBucketItem_ = $BzCustomBucketItem$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.ItemFrameWithRandomItem" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$ItemFrameConfig, $ItemFrameConfig$$Type} from "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.ItemFrameConfig"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $ItemFrameWithRandomItem extends $Feature<($ItemFrameConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(code: $Codec$$Type<($ItemFrameConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($ItemFrameConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFrameWithRandomItem$$Type = ($ItemFrameWithRandomItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFrameWithRandomItem_ = $ItemFrameWithRandomItem$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.SuperCandleBase" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Projectile, $Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ItemAbility, $ItemAbility$$Type} from "net.neoforged.neoforge.common.ItemAbility"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$OptionalBoolean, $OptionalBoolean$$Type} from "com.telepathicgrunt.the_bumblezone.utils.OptionalBoolean"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SuperCandle, $SuperCandle$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.SuperCandle"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockExtension, $BlockExtension$$Type} from "com.telepathicgrunt.the_bumblezone.platform.BlockExtension"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $SuperCandleBase extends $Block implements $SimpleWaterloggedBlock, $SuperCandle, $BlockExtension {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SuperCandleBase)>
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "LIT": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "codec"(): $MapCodec<($SuperCandleBase)>
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "canPlaceLiquid"(player: $Player$$Type, world: $BlockGetter$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, fluid: $Fluid$$Type): boolean
public "placeLiquid"(level: $LevelAccessor$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, fluidState: $FluidState$$Type): boolean
public "canSurvive"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "useItemOn"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, player: $Player$$Type, interactionHand: $InteractionHand$$Type, blockHitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "bz$getBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type): $PathType
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "neighborChanged"(blockstate: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, block: $Block$$Type, fromPos: $BlockPos$$Type, notify: boolean): void
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): integer
public "onProjectileHit"(level: $Level$$Type, state: $BlockState$$Type, hit: $BlockHitResult$$Type, projectile: $Projectile$$Type): void
public "getToolModifiedState"(state: $BlockState$$Type, context: $UseOnContext$$Type, itemAbility: $ItemAbility$$Type, simulate: boolean): $BlockState
public "getPickupSound"(): $Optional<($SoundEvent)>
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "lightCandle"(level: $Level$$Type, blockPos: $BlockPos$$Type, player: $Player$$Type): boolean
public static "canBeLit"(level: $Level$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public static "placeWickIfPossible"(levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, lit: boolean): void
public "CandleUnlightBehaviors"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, player: $Player$$Type, simulate: boolean): boolean
public "CandleLightBehaviors"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, player: $Player$$Type, playerHand: $InteractionHand$$Type, simulate: boolean): boolean
public "isStickyBlock"(state: $BlockState$$Type): boolean
public "canStickTo"(state: $BlockState$$Type, other: $BlockState$$Type): boolean
public "bz$canStickTo"(state: $BlockState$$Type, other: $BlockState$$Type): $OptionalBoolean
public "bz$isStickyBlock"(state: $BlockState$$Type): boolean
public "getBlockPathType"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, mob: $Mob$$Type): $PathType
public "bz$shouldNotDisplayFluidOverlay"(): $OptionalBoolean
public "shouldDisplayFluidOverlay"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, fluidState: $FluidState$$Type): boolean
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuperCandleBase$$Type = ($SuperCandleBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SuperCandleBase_ = $SuperCandleBase$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.entities.PlayerAdvancementsAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$AdvancementHolder, $AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$AdvancementProgress, $AdvancementProgress$$Type} from "net.minecraft.advancements.AdvancementProgress"

export interface $PlayerAdvancementsAccessor {

 "bumblezone$getProgress"(): $Map<($AdvancementHolder), ($AdvancementProgress)>

(): $Map$$Type<($AdvancementHolder$$Type), ($AdvancementProgress$$Type)>
}

export namespace $PlayerAdvancementsAccessor {
const probejs$$marker: never
}
export class $PlayerAdvancementsAccessor$$Static implements $PlayerAdvancementsAccessor {


 "bumblezone$getProgress"(): $Map<($AdvancementHolder), ($AdvancementProgress)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAdvancementsAccessor$$Type = (() => $Map$$Type<($AdvancementHolder$$Type), ($AdvancementProgress$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerAdvancementsAccessor_ = $PlayerAdvancementsAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.entities.BeeEntityInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BeeEntityInvoker {

 "bumblezone$callSetHasNectar"(arg0: boolean): void
 "bumblezone$callSetHasStung"(arg0: boolean): void
}

export namespace $BeeEntityInvoker {
const probejs$$marker: never
}
export class $BeeEntityInvoker$$Static implements $BeeEntityInvoker {


 "bumblezone$callSetHasNectar"(arg0: boolean): void
 "bumblezone$callSetHasStung"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeeEntityInvoker$$Type = ($BeeEntityInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeeEntityInvoker_ = $BeeEntityInvoker$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.ProperFacingBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$DirectionalBlock, $DirectionalBlock$$Type} from "net.minecraft.world.level.block.DirectionalBlock"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ProperFacingBlock extends $DirectionalBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ProperFacingBlock)>
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


public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "codec"(): $MapCodec<($ProperFacingBlock)>
public "mirror"(state: $BlockState$$Type, mirrorIn: $Mirror$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProperFacingBlock$$Type = ($ProperFacingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProperFacingBlock_ = $ProperFacingBlock$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.client.SoundEngineAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$SoundInstance, $SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$ChannelAccess$ChannelHandle, $ChannelAccess$ChannelHandle$$Type} from "net.minecraft.client.sounds.ChannelAccess$ChannelHandle"

export interface $SoundEngineAccessor {

 "bumblezone$getInstanceToChannel"(): $Map<($SoundInstance), ($ChannelAccess$ChannelHandle)>

(): $Map$$Type<($SoundInstance$$Type), ($ChannelAccess$ChannelHandle$$Type)>
}

export namespace $SoundEngineAccessor {
const probejs$$marker: never
}
export class $SoundEngineAccessor$$Static implements $SoundEngineAccessor {


 "bumblezone$getInstanceToChannel"(): $Map<($SoundInstance), ($ChannelAccess$ChannelHandle)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEngineAccessor$$Type = (() => $Map$$Type<($SoundInstance$$Type), ($ChannelAccess$ChannelHandle$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundEngineAccessor_ = $SoundEngineAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.PileOfPollen" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Panda, $Panda$$Type} from "net.minecraft.world.entity.animal.Panda"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$FallingBlock, $FallingBlock$$Type} from "net.minecraft.world.level.block.FallingBlock"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $PileOfPollen extends $FallingBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($PileOfPollen)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "LAYERS": $IntegerProperty
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

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "tick"(blockState: $BlockState$$Type, serverLevel: $ServerLevel$$Type, blockPos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "getShape"(blockState: $BlockState$$Type, world: $BlockGetter$$Type, blockPos: $BlockPos$$Type, selectionContext: $CollisionContext$$Type): $VoxelShape
public "destroy"(world: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): void
public "asItem"(): $Item
public "codec"(): $MapCodec<($PileOfPollen)>
public "getVisualShape"(blockState: $BlockState$$Type, world: $BlockGetter$$Type, blockPos: $BlockPos$$Type, selectionContext: $CollisionContext$$Type): $VoxelShape
public "updateShape"(oldBlockState: $BlockState$$Type, direction: $Direction$$Type, newBlockState: $BlockState$$Type, world: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, blockPos1: $BlockPos$$Type): $BlockState
public "getDustColor"(blockState: $BlockState$$Type, blockReader: $BlockGetter$$Type, blockPos: $BlockPos$$Type): integer
public static "spawnParticles"(blockState: $BlockState$$Type, world: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, random: $RandomSource$$Type, disturbed: boolean): void
public static "spawnParticles"(world: $LevelAccessor$$Type, location: $Vec3$$Type, random: $RandomSource$$Type, speedXZModifier: double, speedYModifier: double, initYSpeed: double): void
public "entityInside"(blockState: $BlockState$$Type, world: $Level$$Type, blockPos: $BlockPos$$Type, entity: $Entity$$Type): void
public "canSurvive"(blockState: $BlockState$$Type, world: $LevelReader$$Type, blockPos: $BlockPos$$Type): boolean
public "canBeReplaced"(blockState: $BlockState$$Type, itemPlacementContext: $BlockPlaceContext$$Type): boolean
public "animateTick"(blockState: $BlockState$$Type, world: $Level$$Type, blockPos: $BlockPos$$Type, random: $RandomSource$$Type): void
public static "slowFallSpeed"(entity: $Entity$$Type, blockPos: $BlockPos$$Type, slownessPower: integer): void
public static "stackPollen"(blockState: $BlockState$$Type, world: $Level$$Type, blockPos: $BlockPos$$Type, pollonToStack: $BlockState$$Type): void
public static "pandaSneezing"(pandaEntity: $Panda$$Type): void
public static "spawnParticlesServer"(world: $LevelAccessor$$Type, location: $Vec3$$Type, random: $RandomSource$$Type, speedXZModifier: double, speedYModifier: double, initYSpeed: double, numberOfParticles: integer): void
public "getStateForPlacement"(itemPlacementContext: $BlockPlaceContext$$Type): $BlockState
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, worldIn: $Level$$Type, pos: $BlockPos$$Type): integer
public "getBlockSupportShape"(blockState: $BlockState$$Type, world: $BlockGetter$$Type, blockPos: $BlockPos$$Type): $VoxelShape
public "getCollisionShape"(blockState: $BlockState$$Type, world: $BlockGetter$$Type, blockPos: $BlockPos$$Type, selectionContext: $CollisionContext$$Type): $VoxelShape
public "getCloneItemStack"(world: $LevelReader$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $ItemStack
public static "reapplyHiddenEffectIfInsidePollenPile"(livingEntity: $LivingEntity$$Type): void
public "useShapeForLightOcclusion"(blockState: $BlockState$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PileOfPollen$$Type = ($PileOfPollen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PileOfPollen_ = $PileOfPollen$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.EssenceBlockWhite" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$GeneralUtils$Lazy, $GeneralUtils$Lazy$$Type} from "com.telepathicgrunt.the_bumblezone.utils.GeneralUtils$Lazy"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ServerEssenceEvent, $ServerEssenceEvent$$Type} from "com.telepathicgrunt.the_bumblezone.bossbars.ServerEssenceEvent"
import {$StructurePlaceSettings, $StructurePlaceSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructurePlaceSettings"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EssenceBlockEntity, $EssenceBlockEntity$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.blockentities.EssenceBlockEntity"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$CosmicCrystalEntity, $CosmicCrystalEntity$$Type} from "com.telepathicgrunt.the_bumblezone.entities.living.CosmicCrystalEntity"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EssenceBlock, $EssenceBlock$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.EssenceBlock"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EssenceBlockWhite extends $EssenceBlock {
static readonly "PLACEMENT_SETTINGS_WITH_ENTITIES": $GeneralUtils$Lazy<($StructurePlaceSettings)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($EssenceBlockWhite)>
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
static readonly "PLACEMENT_SETTINGS": $GeneralUtils$Lazy<($StructurePlaceSettings)>

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "codec"(): $MapCodec<($EssenceBlockWhite)>
public "getArenaNbt"(): $ResourceLocation
public "onPlayerEnter"(serverLevel: $ServerLevel$$Type, serverPlayer: $ServerPlayer$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type): void
public "onPlayerLeave"(serverLevel: $ServerLevel$$Type, serverPlayer: $ServerPlayer$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type): void
public "crystalKilled"(cosmicCrystalEntity: $CosmicCrystalEntity$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type): void
public "getEventTimeFrame"(): integer
public "getServerEssenceEvent"(): $ServerEssenceEvent
public "getEssenceItemReward"(): $ResourceLocation
public "getEssenceXpReward"(): integer
public "hasMiningFatigue"(): boolean
public "awardPlayerWinStat"(serverPlayer: $ServerPlayer$$Type): void
public "performUniqueArenaTick"(serverLevel: $ServerLevel$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type): void
public "asHolder"(): $Holder<(any)>
get "arenaNbt"(): $ResourceLocation
get "eventTimeFrame"(): integer
get "serverEssenceEvent"(): $ServerEssenceEvent
get "essenceItemReward"(): $ResourceLocation
get "essenceXpReward"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceBlockWhite$$Type = ($EssenceBlockWhite);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceBlockWhite_ = $EssenceBlockWhite$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.datacomponents.HoneyCompassStateData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $HoneyCompassStateData extends $Record {
static readonly "DIRECT_CODEC": $Codec<($HoneyCompassStateData)>
static readonly "DIRECT_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($HoneyCompassStateData)>

constructor()
constructor(locked: boolean, searchId: $Optional$$Type<($UUID$$Type)>, isLoading: boolean, isFailed: boolean, locatedSpecialStructure: boolean)

public "isLoading"(): boolean
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "locked"(): boolean
public "isDifferent"(locked: boolean, searchId: $Optional$$Type<($UUID$$Type)>, isLoading: boolean, isFailed: boolean, locatedSpecialStructure: boolean): boolean
public "searchId"(): $Optional<($UUID)>
public "isFailed"(): boolean
public "locatedSpecialStructure"(): boolean
get "loading"(): boolean
get "failed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoneyCompassStateData$$Type = ({"searchId"?: ($UUID$$Type)?, "isLoading"?: boolean, "isFailed"?: boolean, "locatedSpecialStructure"?: boolean, "locked"?: boolean}) | ([searchId?: ($UUID$$Type)?, isLoading?: boolean, isFailed?: boolean, locatedSpecialStructure?: boolean, locked?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoneyCompassStateData_ = $HoneyCompassStateData$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.CrystallineFlower" {
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LootParams$Builder, $LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$CrystallineFlowerBlockEntity, $CrystallineFlowerBlockEntity$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.blockentities.CrystallineFlowerBlockEntity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $CrystallineFlower extends $BaseEntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CrystallineFlower)>
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
static readonly "FLOWER": $BooleanProperty
 "hasCollision": boolean

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "getShape"(blockstate: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "codec"(): $MapCodec<($CrystallineFlower)>
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hit: $BlockHitResult$$Type): $InteractionResult
public "getDrops"(state: $BlockState$$Type, builder: $LootParams$Builder$$Type): $List<($ItemStack)>
public "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public "entityInside"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): void
public "canSurvive"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "getRenderShape"(blockState: $BlockState$$Type): $RenderShape
public "animateTick"(blockState: $BlockState$$Type, world: $Level$$Type, position: $BlockPos$$Type, random: $RandomSource$$Type): void
public static "getXpPerItem"(stack: $ItemStack$$Type): integer
public static "isFlowerSpot"(level: $Level$$Type, pos: $BlockPos$$Type): boolean
public static "isBottomSpot"(level: $Level$$Type, pos: $BlockPos$$Type): boolean
public static "flowerHeightBelow"(level: $LevelReader$$Type, pos: $BlockPos$$Type): integer
public static "flowerHeightAbove"(level: $LevelReader$$Type, pos: $BlockPos$$Type): integer
public static "flowerTotalHeight"(level: $LevelReader$$Type, pos: $BlockPos$$Type): integer
public static "getObstructions"(scanArea: integer, level: $Level$$Type, pos: $BlockPos$$Type): $List<(boolean)>
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "neighborChanged"(blockstate: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, block: $Block$$Type, fromPos: $BlockPos$$Type, notify: boolean): void
public "getAnalogOutputSignal"(blockState: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): integer
public "getMenuProvider"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): $MenuProvider
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public static "getXpToHighestAvailableTier"(crystallineFlowerBlockEntity: $CrystallineFlowerBlockEntity$$Type, tiersToMax: integer, obstructedAbove: $List$$Type<(boolean)>): integer
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrystallineFlower$$Type = ($CrystallineFlower);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrystallineFlower_ = $CrystallineFlower$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.world.NoiseChunkAccessor" {
import {$Climate$Sampler, $Climate$Sampler$$Type} from "net.minecraft.world.level.biome.Climate$Sampler"
import {$List, $List$$Type} from "java.util.List"
import {$Climate$ParameterPoint, $Climate$ParameterPoint$$Type} from "net.minecraft.world.level.biome.Climate$ParameterPoint"
import {$NoiseRouter, $NoiseRouter$$Type} from "net.minecraft.world.level.levelgen.NoiseRouter"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $NoiseChunkAccessor {

 "bumblezone$callCachedClimateSampler"(arg0: $NoiseRouter$$Type, arg1: $List$$Type<($Climate$ParameterPoint$$Type)>): $Climate$Sampler
 "bumblezone$callGetInterpolatedState"(): $BlockState
}

export namespace $NoiseChunkAccessor {
const probejs$$marker: never
}
export class $NoiseChunkAccessor$$Static implements $NoiseChunkAccessor {


 "bumblezone$callCachedClimateSampler"(arg0: $NoiseRouter$$Type, arg1: $List$$Type<($Climate$ParameterPoint$$Type)>): $Climate$Sampler
 "bumblezone$callGetInterpolatedState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoiseChunkAccessor$$Type = ($NoiseChunkAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoiseChunkAccessor_ = $NoiseChunkAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.StickyHoneyResidue" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $StickyHoneyResidue extends $Block {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
 "descriptionId": StringJS
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UP": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($StickyHoneyResidue)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "FACING_TO_PROPERTY_MAP": $Map<($Direction), ($BooleanProperty)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor()
constructor(settings: $BlockBehaviour$Properties$$Type)

public "rotate"(blockState: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "tick"(blockstate: $BlockState$$Type, world: $ServerLevel$$Type, currentPos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "getShape"(blockstate: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "codec"(): $MapCodec<($StickyHoneyResidue)>
public "mirror"(blockState: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "updateShape"(blockstate: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, world: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "entityInside"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, entity: $Entity$$Type): void
public "canSurvive"(blockstate: $BlockState$$Type, world: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "getLightBlock"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "canBeReplaced"(blockState: $BlockState$$Type, blockPlaceContext: $BlockPlaceContext$$Type): boolean
public "useItemOn"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, position: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type, raytraceResult: $BlockHitResult$$Type): $ItemInteractionResult
public "animateTick"(blockState: $BlockState$$Type, world: $Level$$Type, position: $BlockPos$$Type, random: $RandomSource$$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public "getAnalogOutputSignal"(blockstate: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type): integer
public "propagatesSkylightDown"(state: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): boolean
public static "canHaveAtleastOneAttachment"(blockstate: $BlockState$$Type, world: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public static "hasAtleastOneAttachment"(blockstate: $BlockState$$Type): boolean
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StickyHoneyResidue$$Type = ($StickyHoneyResidue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StickyHoneyResidue_ = $StickyHoneyResidue$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.EmptyHoneycombBrood" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ProperFacingBlock, $ProperFacingBlock$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.ProperFacingBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EmptyHoneycombBrood extends $ProperFacingBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($EmptyHoneycombBrood)>
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

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "stepOn"(level: $Level$$Type, blockPos: $BlockPos$$Type, state: $BlockState$$Type, entity: $Entity$$Type): void
public "codec"(): $MapCodec<($EmptyHoneycombBrood)>
public "entityInside"(state: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, entity: $Entity$$Type): void
public static "beeHoneyFill"(state: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, entity: $Entity$$Type): void
public "useItemOn"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, position: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type, HitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyHoneycombBrood$$Type = ($EmptyHoneycombBrood);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyHoneycombBrood_ = $EmptyHoneycombBrood$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.neoforge.block.UseOnContextAccessor" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"

export interface $UseOnContextAccessor {

 "bumblezone$getHitResult"(): $BlockHitResult

(): $BlockHitResult$$Type
}

export namespace $UseOnContextAccessor {
const probejs$$marker: never
}
export class $UseOnContextAccessor$$Static implements $UseOnContextAccessor {


 "bumblezone$getHitResult"(): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UseOnContextAccessor$$Type = (() => $BlockHitResult$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UseOnContextAccessor_ = $UseOnContextAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.entities.nonliving.ElectricRingEntity" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$DimensionTransition, $DimensionTransition$$Type} from "net.minecraft.world.level.portal.DimensionTransition"
import {$ClientboundAddEntityPacket, $ClientboundAddEntityPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundAddEntityPacket"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$Stack, $Stack$$Type} from "java.util.Stack"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PortalProcessor, $PortalProcessor$$Type} from "net.minecraft.world.entity.PortalProcessor"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $ElectricRingEntity extends $Entity {
 "xRot": float
 "hasImpulse": boolean
 "ars_Nouveau$motions": $Stack<(any)>
 "tickCount": integer
static readonly "APPEARING_TIMESPAN": integer
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
static readonly "BOARDING_COOLDOWN": integer
 "removalReason": $Entity$RemovalReason
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "yRot": float
 "moveDist": float
static readonly "ID_TAG": StringJS
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "hurtMarked": boolean
 "invulnerableTime": integer
static readonly "UUID_TAG": StringJS
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "portalProcess": $PortalProcessor
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
static readonly "DISAPPERING_TIMESPAN": integer
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "eyeHeight": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
 "disappearingTime": integer
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "PASSENGERS_TAG": StringJS
 "blocksBuilding": boolean
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "wasTouchingWater": boolean
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

constructor(entityType: $EntityType$$Type<($ElectricRingEntity$$Type)>, level: $Level$$Type)

public "tick"(): void
public "playerTouch"(player: $Player$$Type): void
public "shouldRender"(x: double, y: double, z: double): boolean
public "baseTick"(): void
public "getEssenceController"(): $UUID
public "setEssenceController"(essenceController: $UUID$$Type): void
public "getDisappearingMarker"(): boolean
public "getPortalCooldown"(): integer
public "canChangeDimensions"(fromLevel: $Level$$Type, toLevel: $Level$$Type): boolean
public "changeDimension"(dimensionTransition: $DimensionTransition$$Type): $Entity
public "displayFireAnimation"(): boolean
public "recreateFromPacket"(clientboundAddEntityPacket: $ClientboundAddEntityPacket$$Type): void
public "getEssenceControllerBlockPos"(): $BlockPos
public "getEssenceControllerDimension"(): $ResourceKey<($Level)>
public "setEssenceControllerBlockPos"(essenceControllerBlockPos: $BlockPos$$Type): void
public "setEssenceControllerDimension"(essenceControllerDimension: $ResourceKey$$Type<($Level)>): void
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "essenceController"(): $UUID
set "essenceController"(value: $UUID$$Type)
get "disappearingMarker"(): boolean
get "portalCooldown"(): integer
get "essenceControllerBlockPos"(): $BlockPos
get "essenceControllerDimension"(): $ResourceKey<($Level)>
set "essenceControllerBlockPos"(value: $BlockPos$$Type)
set "essenceControllerDimension"(value: $ResourceKey$$Type<($Level)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricRingEntity$$Type = ($ElectricRingEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElectricRingEntity_ = $ElectricRingEntity$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.FlowerHeadwearHelmet" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$BzArmor, $BzArmor$$Type} from "com.telepathicgrunt.the_bumblezone.items.BzArmor"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemExtension, $ItemExtension$$Type} from "com.telepathicgrunt.the_bumblezone.platform.ItemExtension"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $FlowerHeadwearHelmet extends $BzArmor implements $ItemExtension {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(material: $Holder$$Type<($ArmorMaterial)>, armorType: $ArmorItem$Type$$Type, properties: $Item$Properties$$Type)

public "bz$onArmorTick"(itemstack: $ItemStack$$Type, world: $Level$$Type, player: $Player$$Type): void
public static "getFlowerHeadwear"(entity: $LivingEntity$$Type): $ItemStack
public "isValidRepairItem"(toRepair: $ItemStack$$Type, repair: $ItemStack$$Type): boolean
public "isRepairable"(arg0: $ItemStack$$Type): boolean
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlowerHeadwearHelmet$$Type = ($FlowerHeadwearHelmet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlowerHeadwearHelmet_ = $FlowerHeadwearHelmet$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.fluids.HoneyFluid$Source" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$HoneyFluid, $HoneyFluid$$Type} from "com.telepathicgrunt.the_bumblezone.fluids.HoneyFluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$FluidData, $FluidData$$Type} from "com.teamresourceful.resourcefullib.common.fluid.data.FluidData"

export class $HoneyFluid$Source extends $HoneyFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(properties: $FluidData$$Type)

public "getAmount"(state: $FluidState$$Type): integer
public "isSource"(state: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoneyFluid$Source$$Type = ($HoneyFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoneyFluid$Source_ = $HoneyFluid$Source$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.modcompat.neoforge.framedblocks.CarvableWaxBlockCamoContainer" {
import {$AbstractBlockCamoContainer, $AbstractBlockCamoContainer$$Type} from "xfacthd.framedblocks.api.camo.block.AbstractBlockCamoContainer"

export class $CarvableWaxBlockCamoContainer extends $AbstractBlockCamoContainer<($CarvableWaxBlockCamoContainer)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarvableWaxBlockCamoContainer$$Type = ($CarvableWaxBlockCamoContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarvableWaxBlockCamoContainer_ = $CarvableWaxBlockCamoContainer$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.EssenceBlockGreen" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$GeneralUtils$Lazy, $GeneralUtils$Lazy$$Type} from "com.telepathicgrunt.the_bumblezone.utils.GeneralUtils$Lazy"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ServerEssenceEvent, $ServerEssenceEvent$$Type} from "com.telepathicgrunt.the_bumblezone.bossbars.ServerEssenceEvent"
import {$StructurePlaceSettings, $StructurePlaceSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructurePlaceSettings"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EssenceBlockEntity, $EssenceBlockEntity$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.blockentities.EssenceBlockEntity"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EssenceBlock, $EssenceBlock$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.EssenceBlock"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EssenceBlockGreen extends $EssenceBlock {
static readonly "PLACEMENT_SETTINGS_WITH_ENTITIES": $GeneralUtils$Lazy<($StructurePlaceSettings)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($EssenceBlockGreen)>
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
static readonly "PLACEMENT_SETTINGS": $GeneralUtils$Lazy<($StructurePlaceSettings)>

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "codec"(): $MapCodec<($EssenceBlockGreen)>
public "getArenaNbt"(): $ResourceLocation
public "onPlayerEnter"(serverLevel: $ServerLevel$$Type, serverPlayer: $ServerPlayer$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type): void
public "onPlayerLeave"(serverLevel: $ServerLevel$$Type, serverPlayer: $ServerPlayer$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type): void
public "getEventTimeFrame"(): integer
public "getServerEssenceEvent"(): $ServerEssenceEvent
public "getEssenceItemReward"(): $ResourceLocation
public "getEssenceXpReward"(): integer
public "hasMiningFatigue"(): boolean
public "awardPlayerWinStat"(serverPlayer: $ServerPlayer$$Type): void
public "performUniqueArenaTick"(serverLevel: $ServerLevel$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, essenceBlockEntity: $EssenceBlockEntity$$Type): void
public "asHolder"(): $Holder<(any)>
get "arenaNbt"(): $ResourceLocation
get "eventTimeFrame"(): integer
get "serverEssenceEvent"(): $ServerEssenceEvent
get "essenceItemReward"(): $ResourceLocation
get "essenceXpReward"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EssenceBlockGreen$$Type = ($EssenceBlockGreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EssenceBlockGreen_ = $EssenceBlockGreen$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.advancements.TargetAdvancementDoneTrigger" {
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$TargetAdvancementDoneTrigger$TriggerInstance, $TargetAdvancementDoneTrigger$TriggerInstance$$Type} from "com.telepathicgrunt.the_bumblezone.advancements.TargetAdvancementDoneTrigger$TriggerInstance"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BzPlayerGrantAdvancementEvent, $BzPlayerGrantAdvancementEvent$$Type} from "com.telepathicgrunt.the_bumblezone.events.player.BzPlayerGrantAdvancementEvent"

export class $TargetAdvancementDoneTrigger extends $SimpleCriterionTrigger<($TargetAdvancementDoneTrigger$TriggerInstance)> {

constructor()

public "trigger"(serverPlayer: $ServerPlayer$$Type): void
public "codec"(): $Codec<($TargetAdvancementDoneTrigger$TriggerInstance)>
public static "OnAdvancementGiven"(event: $BzPlayerGrantAdvancementEvent$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TargetAdvancementDoneTrigger$$Type = ($TargetAdvancementDoneTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TargetAdvancementDoneTrigger_ = $TargetAdvancementDoneTrigger$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.entities.TemporaryPlayerData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TemporaryPlayerData {

 "bumblezonePlayerInHeavyAir"(): boolean
 "bumblezonePlayerTickOffGroundInHeavyAir"(): integer
}

export namespace $TemporaryPlayerData {
const probejs$$marker: never
}
export class $TemporaryPlayerData$$Static implements $TemporaryPlayerData {


 "bumblezonePlayerInHeavyAir"(): boolean
 "bumblezonePlayerTickOffGroundInHeavyAir"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporaryPlayerData$$Type = ($TemporaryPlayerData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporaryPlayerData_ = $TemporaryPlayerData$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.AncientWaxSlab" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SlabType, $SlabType$$Type} from "net.minecraft.world.level.block.state.properties.SlabType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$AncientWaxBase, $AncientWaxBase$$Type} from "com.telepathicgrunt.the_bumblezone.blocks.AncientWaxBase"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$SlabBlock, $SlabBlock$$Type} from "net.minecraft.world.level.block.SlabBlock"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $AncientWaxSlab extends $SlabBlock implements $AncientWaxBase {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($AncientWaxSlab)>
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "TYPE": $EnumProperty<($SlabType)>
 "hasCollision": boolean

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "stepOn"(level: $Level$$Type, blockPos: $BlockPos$$Type, state: $BlockState$$Type, entity: $Entity$$Type): void
public "codec"(): $MapCodec<($AncientWaxSlab)>
public "useItemOn"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, position: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type, raytraceResult: $BlockHitResult$$Type): $ItemInteractionResult
public "trySwap"(itemStack: $ItemStack$$Type, currentState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type): $BlockState
public "trySwap"(itemStack: $ItemStack$$Type, currentState: $BlockState$$Type, blockPos: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type, blockIterationTag: $TagKey$$Type<($Block)>): $BlockState
public "applyEntityEffects"(currentState: $BlockState$$Type, collidingEntity: $Entity$$Type): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AncientWaxSlab$$Type = ($AncientWaxSlab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AncientWaxSlab_ = $AncientWaxSlab$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.effects.ParalyzedEffect" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Attribute, $Attribute$$Type} from "net.minecraft.world.entity.ai.attributes.Attribute"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$MobEffectCategory, $MobEffectCategory$$Type} from "net.minecraft.world.effect.MobEffectCategory"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$AttributeTemplate, $MobEffect$AttributeTemplate$$Type} from "net.minecraft.world.effect.MobEffect$AttributeTemplate"

export class $ParalyzedEffect extends $MobEffect {
static readonly "CODEC": $Codec<($Holder<($MobEffect)>)>
readonly "attributeModifiers": $Map<($Holder<($Attribute)>), ($MobEffect$AttributeTemplate)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MobEffect)>)>

constructor(type: $MobEffectCategory$$Type, potionColor: integer)

public static "isParalyzed"(livingEntity: $LivingEntity$$Type): boolean
public static "effectRemoval"(entity: $LivingEntity$$Type, mobEffectInstance: $MobEffectInstance$$Type): void
public "isInstantenous"(): boolean
public static "isParalyzedClient"(livingEntity: $LivingEntity$$Type): boolean
public "applyEffectTick"(livingEntity: $LivingEntity$$Type, amplifier: integer): boolean
public "onEffectStarted"(livingEntity: $LivingEntity$$Type, amplifier: integer): void
public "shouldApplyEffectTickThisTick"(duration: integer, amplifier: integer): boolean
get "instantenous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParalyzedEffect$$Type = ($ParalyzedEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParalyzedEffect_ = $ParalyzedEffect$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.blocks.BlockEntityAccessor" {
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"

export interface $BlockEntityAccessor {

 "bumblezone$setType"(arg0: $BlockEntityType$$Type<(any)>): void

(arg0: $BlockEntityType<(any)>): void
}

export namespace $BlockEntityAccessor {
const probejs$$marker: never
}
export class $BlockEntityAccessor$$Static implements $BlockEntityAccessor {


 "bumblezone$setType"(arg0: $BlockEntityType$$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityAccessor$$Type = ((arg0: $BlockEntityType<(any)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityAccessor_ = $BlockEntityAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.potions.ConfigSafePotion" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Potion, $Potion$$Type} from "net.minecraft.world.item.alchemy.Potion"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$List, $List$$Type} from "java.util.List"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $ConfigSafePotion extends $Potion {
static readonly "CODEC": $Codec<($Holder<($Potion)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($Potion)>)>

constructor(mobEffectInstancesSupplier: $Supplier$$Type<($List$$Type<($MobEffectInstance$$Type)>)>)
constructor(string: StringJS, mobEffectInstancesSupplier: $Supplier$$Type<($List$$Type<($MobEffectInstance$$Type)>)>)

public "getEffects"(): $List<($MobEffectInstance)>
public "getCachedEffectList"(): $List<($MobEffectInstance)>
public "clearCachedEffectList"(): void
public "hasInstantEffects"(): boolean
get "effects"(): $List<($MobEffectInstance)>
get "cachedEffectList"(): $List<($MobEffectInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigSafePotion$$Type = ($ConfigSafePotion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigSafePotion_ = $ConfigSafePotion$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.HoneyBeeLeggings" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ArmorMaterial, $ArmorMaterial$$Type} from "net.minecraft.world.item.ArmorMaterial"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemAttributeModifiers, $ItemAttributeModifiers$$Type} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Equipable, $Equipable$$Type} from "net.minecraft.world.item.Equipable"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BeeArmor, $BeeArmor$$Type} from "com.telepathicgrunt.the_bumblezone.items.BeeArmor"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"
import {$ArmorItem$Type, $ArmorItem$Type$$Type} from "net.minecraft.world.item.ArmorItem$Type"

export class $HoneyBeeLeggings extends $BeeArmor {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Supplier<($ItemAttributeModifiers)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(material: $Holder$$Type<($ArmorMaterial)>, armorType: $ArmorItem$Type$$Type, properties: $Item$Properties$$Type, variant: integer)

public "bz$onArmorTick"(itemstack: $ItemStack$$Type, level: $Level$$Type, player: $Player$$Type): void
public static "setPollinated"(itemStack: $ItemStack$$Type): void
public static "isPollinated"(itemStack: $ItemStack$$Type): boolean
public static "armorStandTick"(livingEntity: $LivingEntity$$Type): void
public static "removeAndSpawnPollen"(world: $Level$$Type, position: $Vec3$$Type, itemStack: $ItemStack$$Type): void
public static "getEntityBeeLegging"(entity: $LivingEntity$$Type): $ItemStack
public static "clearPollinated"(itemStack: $ItemStack$$Type): void
public "verifyComponentsAfterLoad"(itemStack: $ItemStack$$Type): void
public "isRepairable"(arg0: $ItemStack$$Type): boolean
public static "get"(arg0: $ItemStack$$Type): $Equipable
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoneyBeeLeggings$$Type = ($HoneyBeeLeggings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoneyBeeLeggings_ = $HoneyBeeLeggings$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.loot.LootContextAccessor" {
import {$LootParams, $LootParams$$Type} from "net.minecraft.world.level.storage.loot.LootParams"

export interface $LootContextAccessor {

 "bumblezone$getParams"(): $LootParams

(): $LootParams$$Type
}

export namespace $LootContextAccessor {
const probejs$$marker: never
}
export class $LootContextAccessor$$Static implements $LootContextAccessor {


 "bumblezone$getParams"(): $LootParams
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootContextAccessor$$Type = (() => $LootParams$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootContextAccessor_ = $LootContextAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.client.ClientLevelAccessor" {
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $ClientLevelAccessor {

}

export namespace $ClientLevelAccessor {
function bumblezone$getMARKER_PARTICLE_ITEMS(): $Set<($Item)>
function bumblezone$setMARKER_PARTICLE_ITEMS(MARKER_PARTICLE_ITEMS: $Set$$Type<($Item$$Type)>): void
const probejs$$marker: never
}
export class $ClientLevelAccessor$$Static implements $ClientLevelAccessor {


static "bumblezone$getMARKER_PARTICLE_ITEMS"(): $Set<($Item)>
static "bumblezone$setMARKER_PARTICLE_ITEMS"(MARKER_PARTICLE_ITEMS: $Set$$Type<($Item$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientLevelAccessor$$Type = ($ClientLevelAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientLevelAccessor_ = $ClientLevelAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.entities.ExperienceOrbAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExperienceOrbAccessor {

 "bumblezone$setValue"(arg0: integer): void

(arg0: integer): void
}

export namespace $ExperienceOrbAccessor {
const probejs$$marker: never
}
export class $ExperienceOrbAccessor$$Static implements $ExperienceOrbAccessor {


 "bumblezone$setValue"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExperienceOrbAccessor$$Type = ((arg0: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExperienceOrbAccessor_ = $ExperienceOrbAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.gameplay.ItemCooldownsAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemCooldowns$CooldownInstance, $ItemCooldowns$CooldownInstance$$Type} from "net.minecraft.world.item.ItemCooldowns$CooldownInstance"

export interface $ItemCooldownsAccessor {

 "bumblezone$getCooldowns"(): $Map<($Item), ($ItemCooldowns$CooldownInstance)>
 "bumblezone$getTickCount"(): integer
}

export namespace $ItemCooldownsAccessor {
const probejs$$marker: never
}
export class $ItemCooldownsAccessor$$Static implements $ItemCooldownsAccessor {


 "bumblezone$getCooldowns"(): $Map<($Item), ($ItemCooldowns$CooldownInstance)>
 "bumblezone$getTickCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCooldownsAccessor$$Type = ($ItemCooldownsAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCooldownsAccessor_ = $ItemCooldownsAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.LuminescentWaxBase" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $LuminescentWaxBase {

 "tryRotate"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type): $BlockState
 "applyEntityEffects"(currentState: $BlockState$$Type, collidingEntity: $Entity$$Type): void

(arg0: $ItemStack, arg1: $BlockState, arg2: $Level, arg3: $BlockPos, arg4: $Player, arg5: $InteractionHand): $BlockState$$Type
}

export namespace $LuminescentWaxBase {
const probejs$$marker: never
}
export class $LuminescentWaxBase$$Static implements $LuminescentWaxBase {


 "tryRotate"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type): $BlockState
 "applyEntityEffects"(currentState: $BlockState$$Type, collidingEntity: $Entity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuminescentWaxBase$$Type = ((arg0: $ItemStack, arg1: $BlockState, arg2: $Level, arg3: $BlockPos, arg4: $Player, arg5: $InteractionHand) => $BlockState$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuminescentWaxBase_ = $LuminescentWaxBase$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.CarvableWax$Carving" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $CarvableWax$Carving extends $Enum<($CarvableWax$Carving)> implements $StringRepresentable {
static readonly "MUSIC": $CarvableWax$Carving
static readonly "UNCARVED": $CarvableWax$Carving
static readonly "WAVY": $CarvableWax$Carving
static readonly "DIAMOND": $CarvableWax$Carving
static readonly "CHISELED": $CarvableWax$Carving
static readonly "BRICKS": $CarvableWax$Carving
static readonly "GRATE": $CarvableWax$Carving
static readonly "CHAINS": $CarvableWax$Carving
static readonly "FLOWER": $CarvableWax$Carving


public "toString"(): StringJS
public static "values"(): ($CarvableWax$Carving)[]
public static "valueOf"(name: StringJS): $CarvableWax$Carving
public "next"(): $CarvableWax$Carving
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarvableWax$Carving$$Type = (("uncarved") | ("wavy") | ("flower") | ("chiseled") | ("diamond") | ("bricks") | ("chains") | ("music") | ("grate"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarvableWax$Carving_ = $CarvableWax$Carving$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.entities.AgeableMobAccessor" {
import {$EntityDataAccessor, $EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"

export interface $AgeableMobAccessor {

}

export namespace $AgeableMobAccessor {
function bumblezone$getDATA_BABY_ID(): $EntityDataAccessor<(boolean)>
const probejs$$marker: never
}
export class $AgeableMobAccessor$$Static implements $AgeableMobAccessor {


static "bumblezone$getDATA_BABY_ID"(): $EntityDataAccessor<(boolean)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AgeableMobAccessor$$Type = ($AgeableMobAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AgeableMobAccessor_ = $AgeableMobAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.PollinatedCaves" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $PollinatedCaves extends $Feature<($NoneFeatureConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(configFactory: $Codec$$Type<($NoneFeatureConfiguration$$Type)>)

public "setSeed"(seed: long): void
public "place"(context: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
set "seed"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PollinatedCaves$$Type = ($PollinatedCaves);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PollinatedCaves_ = $PollinatedCaves$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.fluids.base.BzBucketItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$FluidGetter, $FluidGetter$$Type} from "com.telepathicgrunt.the_bumblezone.fluids.base.FluidGetter"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BucketItem, $BucketItem$$Type} from "net.minecraft.world.item.BucketItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$FluidData, $FluidData$$Type} from "com.teamresourceful.resourcefullib.common.fluid.data.FluidData"

export class $BzBucketItem extends $BucketItem implements $FluidGetter {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
readonly "content": $Fluid
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(info: $FluidData$$Type, properties: $Item$Properties$$Type)

public "getFluid"(): $FlowingFluid
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "fluid"(): $FlowingFluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BzBucketItem$$Type = ($BzBucketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BzBucketItem_ = $BzBucketItem$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.structures.HoneyCaveRoomStructure" {
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$StructureType, $StructureType$$Type} from "net.minecraft.world.level.levelgen.structure.StructureType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Structure$GenerationStub, $Structure$GenerationStub$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationStub"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StructureTemplatePool, $StructureTemplatePool$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$HeightProvider, $HeightProvider$$Type} from "net.minecraft.world.level.levelgen.heightproviders.HeightProvider"
import {$Structure$StructureSettings, $Structure$StructureSettings$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$StructureSettings"

export class $HoneyCaveRoomStructure extends $Structure {
static readonly "CODEC": $MapCodec<($HoneyCaveRoomStructure)>
static readonly "DIRECT_CODEC": $Codec<($Structure)>

constructor(config: $Structure$StructureSettings$$Type, startPool: $Holder$$Type<($StructureTemplatePool)>, startJigsawName: $Optional$$Type<($ResourceLocation$$Type)>, size: integer, startHeight: $HeightProvider$$Type, projectStartToHeightmap: $Optional$$Type<($Heightmap$Types$$Type)>, maxDistanceFromCenter: integer)

public "type"(): $StructureType<(any)>
public "findGenerationPoint"(context: $Structure$GenerationContext$$Type): $Optional<($Structure$GenerationStub)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoneyCaveRoomStructure$$Type = ($HoneyCaveRoomStructure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoneyCaveRoomStructure_ = $HoneyCaveRoomStructure$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.SuperCandle" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $SuperCandle {

 "lightCandle"(level: $Level$$Type, blockPos: $BlockPos$$Type, player: $Player$$Type): boolean
 "CandleUnlightBehaviors"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, player: $Player$$Type, simulate: boolean): boolean
 "CandleLightBehaviors"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, player: $Player$$Type, playerHand: $InteractionHand$$Type, simulate: boolean): boolean
}

export namespace $SuperCandle {
function canBeLit(level: $Level$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
function placeWickIfPossible(levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, lit: boolean): void
const probejs$$marker: never
}
export class $SuperCandle$$Static implements $SuperCandle {


 "lightCandle"(level: $Level$$Type, blockPos: $BlockPos$$Type, player: $Player$$Type): boolean
static "canBeLit"(level: $Level$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
static "placeWickIfPossible"(levelAccessor: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, lit: boolean): void
 "CandleUnlightBehaviors"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, player: $Player$$Type, simulate: boolean): boolean
 "CandleLightBehaviors"(itemStack: $ItemStack$$Type, blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, player: $Player$$Type, playerHand: $InteractionHand$$Type, simulate: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuperCandle$$Type = ($SuperCandle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SuperCandle_ = $SuperCandle$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.fluids.RoyalJellyFluid$Source" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$RoyalJellyFluid, $RoyalJellyFluid$$Type} from "com.telepathicgrunt.the_bumblezone.fluids.RoyalJellyFluid"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$FluidData, $FluidData$$Type} from "com.teamresourceful.resourcefullib.common.fluid.data.FluidData"

export class $RoyalJellyFluid$Source extends $RoyalJellyFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(properties: $FluidData$$Type)

public "getAmount"(state: $FluidState$$Type): integer
public "isSource"(state: $FluidState$$Type): boolean
public static "wrap"(arg1: any): $ReplacementMatch
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoyalJellyFluid$Source$$Type = ($RoyalJellyFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoyalJellyFluid$Source_ = $RoyalJellyFluid$Source$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.items.ItemAccessor" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"

export interface $ItemAccessor {

}

export namespace $ItemAccessor {
function bumblezone$callGetPlayerPOVHitResult(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
const probejs$$marker: never
}
export class $ItemAccessor$$Static implements $ItemAccessor {


static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAccessor$$Type = ($ItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAccessor_ = $ItemAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.TreeDungeon" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeDungeonFeatureConfig, $TreeDungeonFeatureConfig$$Type} from "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.TreeDungeonFeatureConfig"
import {$NbtFeature, $NbtFeature$$Type} from "com.telepathicgrunt.the_bumblezone.worldgen.features.NbtFeature"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $TreeDungeon extends $NbtFeature<($TreeDungeonFeatureConfig)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(configFactory: $Codec$$Type<($TreeDungeonFeatureConfig$$Type)>)

public "place"(context: $FeaturePlaceContext$$Type<($TreeDungeonFeatureConfig$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeDungeon$$Type = ($TreeDungeon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeDungeon_ = $TreeDungeon$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.events.base.CancellableEventHandler$CancellableFunctionOnlyReturn" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CancellableEventHandler$CancellableFunctionOnlyReturn<T> {

 "apply"(arg0: T): boolean

(arg0: T): boolean
}

export namespace $CancellableEventHandler$CancellableFunctionOnlyReturn {
const probejs$$marker: never
}
export class $CancellableEventHandler$CancellableFunctionOnlyReturn$$Static<T> implements $CancellableEventHandler$CancellableFunctionOnlyReturn {


 "apply"(arg0: T): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CancellableEventHandler$CancellableFunctionOnlyReturn$$Type<T> = ((arg0: T) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CancellableEventHandler$CancellableFunctionOnlyReturn_<T> = $CancellableEventHandler$CancellableFunctionOnlyReturn$$Type<(T)>;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.recipes.ContainerCraftingRecipe$Serializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$ContainerCraftingRecipe, $ContainerCraftingRecipe$$Type} from "com.telepathicgrunt.the_bumblezone.items.recipes.ContainerCraftingRecipe"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $ContainerCraftingRecipe$Serializer implements $RecipeSerializer<($ContainerCraftingRecipe)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ContainerCraftingRecipe)>

constructor()

public "codec"(): $MapCodec<($ContainerCraftingRecipe)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ContainerCraftingRecipe)>
public static "fromNetwork"(buffer: $RegistryFriendlyByteBuf$$Type): $ContainerCraftingRecipe
public static "toNetwork"(buffer: $RegistryFriendlyByteBuf$$Type, recipe: $ContainerCraftingRecipe$$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerCraftingRecipe$Serializer$$Type = ($ContainerCraftingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerCraftingRecipe$Serializer_ = $ContainerCraftingRecipe$Serializer$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.ItemFrameConfig" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$ItemFrameConfig$Attachment, $ItemFrameConfig$Attachment$$Type} from "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.ItemFrameConfig$Attachment"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $ItemFrameConfig implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($ItemFrameConfig)>
readonly "attachment": $ItemFrameConfig$Attachment
readonly "itemToPickFrom": $HolderSet<($Item)>

constructor(itemToPickFrom: $HolderSet$$Type<($Item)>, attachment: $ItemFrameConfig$Attachment$$Type)

public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFrameConfig$$Type = ($ItemFrameConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFrameConfig_ = $ItemFrameConfig$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.advancements.CounterTrigger" {
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$CounterTrigger$TriggerInstance, $CounterTrigger$TriggerInstance$$Type} from "com.telepathicgrunt.the_bumblezone.advancements.CounterTrigger$TriggerInstance"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $CounterTrigger extends $SimpleCriterionTrigger<($CounterTrigger$TriggerInstance)> {

constructor()

public "trigger"(serverPlayer: $ServerPlayer$$Type, currentCount: integer): void
public "codec"(): $Codec<($CounterTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CounterTrigger$$Type = ($CounterTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CounterTrigger_ = $CounterTrigger$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.client.SoundManagerAccessor" {
import {$SoundEngine, $SoundEngine$$Type} from "net.minecraft.client.sounds.SoundEngine"

export interface $SoundManagerAccessor {

 "bumblezone$getSoundEngine"(): $SoundEngine

(): $SoundEngine$$Type
}

export namespace $SoundManagerAccessor {
const probejs$$marker: never
}
export class $SoundManagerAccessor$$Static implements $SoundManagerAccessor {


 "bumblezone$getSoundEngine"(): $SoundEngine
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundManagerAccessor$$Type = (() => $SoundEngine$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundManagerAccessor_ = $SoundManagerAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.advancements.ItemSpecificTrigger$TriggerInstance" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$CriterionValidator, $CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$SimpleCriterionTrigger$SimpleInstance, $SimpleCriterionTrigger$SimpleInstance$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"

export class $ItemSpecificTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
static readonly "CODEC": $Codec<($ItemSpecificTrigger$TriggerInstance)>

constructor(player: $Optional$$Type<($ContextAwarePredicate$$Type)>, item: $Optional$$Type<($ItemPredicate$$Type)>)

public "item"(): $Optional<($ItemPredicate)>
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(itemStack: $ItemStack$$Type): boolean
public "player"(): $Optional<($ContextAwarePredicate)>
public "validate"(arg0: $CriterionValidator$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSpecificTrigger$TriggerInstance$$Type = ({"player"?: ($ContextAwarePredicate$$Type)?, "item"?: ($ItemPredicate$$Type)?}) | ([player?: ($ContextAwarePredicate$$Type)?, item?: ($ItemPredicate$$Type)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSpecificTrigger$TriggerInstance_ = $ItemSpecificTrigger$TriggerInstance$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.items.HoneyCompass" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$HoneyCompassBaseData, $HoneyCompassBaseData$$Type} from "com.telepathicgrunt.the_bumblezone.items.datacomponents.HoneyCompassBaseData"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$HoneyCompassStateData, $HoneyCompassStateData$$Type} from "com.telepathicgrunt.the_bumblezone.items.datacomponents.HoneyCompassStateData"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$HoneyCompassTargetData, $HoneyCompassTargetData$$Type} from "com.telepathicgrunt.the_bumblezone.items.datacomponents.HoneyCompassTargetData"

export class $HoneyCompass extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "use"(level: $Level$$Type, player: $Player$$Type, interactionHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getName"(itemStack: $ItemStack$$Type): $Component
public "isFoil"(itemStack: $ItemStack$$Type): boolean
public "useOn"(useOnContext: $UseOnContext$$Type): $InteractionResult
public "inventoryTick"(itemStack: $ItemStack$$Type, level: $Level$$Type, entity: $Entity$$Type, i: integer, bl: boolean): void
public static "isValidBeeHive"(block: $BlockState$$Type): boolean
public static "setCompassBaseData"(honeyCompassBaseData: $HoneyCompassBaseData$$Type, compassType: StringJS, itemStack: $ItemStack$$Type): void
public static "setCompassTargetData"(honeyCompassTargetData: $HoneyCompassTargetData$$Type, targetBlock: $Optional$$Type<(StringJS)>, targetStructureTag: $Optional$$Type<(StringJS)>, targetPos: $Optional$$Type<($BlockPos$$Type)>, targetDimension: $Optional$$Type<($ResourceKey$$Type<($Level$$Type)>)>, itemStack: $ItemStack$$Type): void
public static "setCompassStateData"(honeyCompassStateData: $HoneyCompassStateData$$Type, locked: boolean, searchId: $Optional$$Type<($UUID$$Type)>, isLoading: boolean, isFailed: boolean, locatedSpecialStructure: boolean, itemStack: $ItemStack$$Type): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, components: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "getDescriptionId"(itemStack: $ItemStack$$Type): StringJS
public "verifyComponentsAfterLoad"(itemStack: $ItemStack$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoneyCompass$$Type = ($HoneyCompass);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoneyCompass_ = $HoneyCompass$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.entities.living.CosmicCrystalEntity" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$HumanoidArm, $HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$MagniaProperties, $MagniaProperties$$Type} from "net.bunten.enderscape.entity.magnia.MagniaProperties"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ArrayDeque, $ArrayDeque$$Type} from "java.util.ArrayDeque"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$DimensionTransition, $DimensionTransition$$Type} from "net.minecraft.world.level.portal.DimensionTransition"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$EntityDataAccessor, $EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"
import {$WalkAnimationState, $WalkAnimationState$$Type} from "net.minecraft.world.entity.WalkAnimationState"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PortalProcessor, $PortalProcessor$$Type} from "net.minecraft.world.entity.PortalProcessor"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityDataSerializer, $EntityDataSerializer$$Type} from "net.minecraft.network.syncher.EntityDataSerializer"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$CosmicCrystalState, $CosmicCrystalState$$Type} from "com.telepathicgrunt.the_bumblezone.entities.living.CosmicCrystalState"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$LevelRenderer, $LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"
import {$ChangeSubscriber, $ChangeSubscriber$$Type} from "net.caffeinemc.mods.lithium.common.util.change_tracking.ChangeSubscriber"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$AnimationState, $AnimationState$$Type} from "net.minecraft.world.entity.AnimationState"
import {$Stack, $Stack$$Type} from "java.util.Stack"
import {$AttributeSupplier$Builder, $AttributeSupplier$Builder$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeSupplier$Builder"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $CosmicCrystalEntity extends $LivingEntity {
static readonly "DEFAULT_BASE_GRAVITY": double
readonly "pastStates": $ArrayDeque<($CosmicCrystalState)>
 "xRot": float
 "hasImpulse": boolean
static readonly "USE_ITEM_INTERVAL": integer
 "prevAnimationTick": integer
 "ars_Nouveau$motions": $Stack<(any)>
 "yHeadRot": float
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "yBodyRotO": float
 "animationTimeTick": integer
 "removalReason": $Entity$RemovalReason
 "zza": float
 "swingingArm": $InteractionHand
 "prevLookAngle": $Vec3
static readonly "ID_TAG": StringJS
static readonly "DATA_HEALTH_ID": $EntityDataAccessor<(float)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "noCulling": boolean
 "walkAnimation": $WalkAnimationState
 "currentTickCount": integer
 "yya": float
 "oAttackAnim": float
 "yHeadRotO": float
static readonly "UUID_TAG": StringJS
 "hurtDuration": integer
static readonly "DEATH_DURATION": integer
 "portalProcess": $PortalProcessor
 "dead": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
static readonly "DEFAULT_BABY_SCALE": float
 "eyeHeight": float
static readonly "ATTRIBUTES_FIELD": StringJS
static readonly "DEFAULT_BB_HEIGHT": float
 "xxa": float
 "flyDist": float
 "lastPhysicalHit": integer
static readonly "PASSENGERS_TAG": StringJS
 "wasOnFire": boolean
 "attackAnim": float
 "zOld": double
readonly "timeOffs": float
 "wasTouchingWater": boolean
readonly "rotA": float
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions
static readonly "ARMOR_SLOT_OFFSET": integer
 "swingTime": integer
 "entityJs$builder": any
static readonly "BODY_ARMOR_OFFSET": integer
 "tickCount": integer
 "currentStateTimeTick": integer
static readonly "BOARDING_COOLDOWN": integer
static readonly "SWING_DURATION": integer
 "yRotO": float
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "CONTENTS_SLOT_INDEX": integer
static readonly "BASE_JUMP_POWER": float
 "level": $Level
 "yRot": float
 "moveDist": float
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "COSMIC_CRYSTAL_STATE_SERIALIZER": $EntityDataSerializer<($CosmicCrystalState)>
 "xOld": double
 "wasInPowderSnow": boolean
 "hurtTime": integer
 "swinging": boolean
 "hurtMarked": boolean
 "attackStrengthTicker": integer
 "deathTime": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
 "invulnerableTime": integer
 "jumping": boolean
static readonly "MAX_RANGE": integer
readonly "idleAnimationState": $AnimationState
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "ARMOR_SLOTS": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
 "yOld": double
static readonly "HAND_SLOTS": integer
static readonly "DEFAULT_BB_WIDTH": float
 "minorHorizontalCollision": boolean
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
 "removeArrowTime": integer
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "yBodyRot": float
 "blocksBuilding": boolean
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
readonly "invulnerableDuration": integer
 "removeStingerTime": integer
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "effectsDirty": boolean

constructor(entityType: $EntityType$$Type<($CosmicCrystalEntity$$Type)>, level: $Level$$Type)

public "tick"(): void
public "kill"(): void
public "attack"(damageSource: $DamageSource$$Type, damageAmount: float): boolean
public "heal"(f: float): void
public "travel"(vec3: $Vec3$$Type): void
public "lavaHurt"(): void
public "isNoGravity"(): boolean
public "setItemSlot"(equipmentSlot: $EquipmentSlot$$Type, itemStack: $ItemStack$$Type): void
public "getArmorSlots"(): $Iterable<($ItemStack)>
public "shouldShowName"(): boolean
public "isPushable"(): boolean
public "getMainArm"(): $HumanoidArm
public "baseTick"(): void
public "fireImmune"(): boolean
public "isInWall"(): boolean
public "getItemBySlot"(equipmentSlot: $EquipmentSlot$$Type): $ItemStack
public "canBeAffected"(mobEffectInstance: $MobEffectInstance$$Type): boolean
public "setShield"(shield: boolean): void
public "setSecondPhase"(smashingPhase: boolean): void
public "setCollided"(collided: boolean): void
public "getCollided"(): boolean
public "getSecondPhase"(): boolean
public "getShield"(): boolean
public static "isLaserState"(cosmicCrystalState: $CosmicCrystalState$$Type): boolean
public static "isOrbitState"(cosmicCrystalState: $CosmicCrystalState$$Type): boolean
public "isLaserFiring"(): boolean
public "getEssenceController"(): $UUID
public "setEssenceController"(essenceController: $UUID$$Type): void
public "getCosmicCrystalState"(): $CosmicCrystalState
public "getOrbitOffsetDegrees"(): integer
public "getDifficultyBoost"(): float
public "setDifficultyBoost"(difficultyBoost: float): void
public "setOrbitOffsetDegrees"(orbitOffsetDegrees: integer): void
public "setCosmicCrystalState"(cosmicCrystalState: $CosmicCrystalState$$Type): void
public "setStateTimespan"(stateTimespan: integer): void
public "setLaserStartDelay"(laserStartDelay: integer): void
public "setLaserFireStartTime"(laserFireStartTime: integer): void
public "getStateTimespan"(): integer
public "getLaserStartDelay"(): integer
public "getLaserFireStartTime"(): integer
public "setTargetEntityUUID"(targetEntityUUID: $UUID$$Type): void
public "getTargetEntityUUID"(): $UUID
public static "isTrackingState"(cosmicCrystalState: $CosmicCrystalState$$Type): boolean
public static "getAttributeBuilder"(): $AttributeSupplier$Builder
public "isGlowing"(): boolean
public "shouldDropExperience"(): boolean
public "addAdditionalSaveData"(compoundTag: $CompoundTag$$Type): void
public "readAdditionalSaveData"(compoundTag: $CompoundTag$$Type): void
public "getPortalCooldown"(): integer
public "isOnPortalCooldown"(): boolean
public "canChangeDimensions"(fromLevel: $Level$$Type, toLevel: $Level$$Type): boolean
public "changeDimension"(dimensionTransition: $DimensionTransition$$Type): $Entity
public "displayFireAnimation"(): boolean
public "isInvulnerableTo"(damageSource: $DamageSource$$Type): boolean
public "onSyncedDataUpdated"(entityDataAccessor: $EntityDataAccessor$$Type<(any)>): void
public "canDisableShield"(): boolean
public "setInitialRotationAnimationTimespan"(initialRotationAnimationTimespan: integer): void
public "getInitialRotationAnimationTimespan"(): integer
public "getEssenceControllerBlockPos"(): $BlockPos
public "getEssenceControllerDimension"(): $ResourceKey<($Level)>
public "setEssenceControllerBlockPos"(essenceControllerBlockPos: $BlockPos$$Type): void
public "setEssenceControllerDimension"(essenceControllerDimension: $ResourceKey$$Type<($Level)>): void
public "setSyncedCurrentStateTimeTick"(syncedCurrentStateTimeTick: integer): void
public "getSyncedCurrentStateTimeTick"(): integer
public static "isOrFromHorizontalState"(cosmicCrystalState: $CosmicCrystalState$$Type): boolean
public static "tickEntity"(entity: $LivingEntity$$Type): void
public static "getAlpha"(le: $LivingEntity$$Type, partialTicks: float): float
public static "getAlternativeStack"(livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, consumer: $Consumer$$Type<($ItemStack)>): void
public "lithium$getCachedFeetBlockState"(): $BlockState
public static "is"(arg0: $Entity$$Type): boolean
public static "spawnedFromEndTrialSpawner"(arg0: $Entity$$Type): boolean
public static "setSpawnedFromEndTrialSpawner"(arg0: $Entity$$Type, arg1: boolean): void
public static "getMagniaProperties"(arg0: $Entity$$Type): $MagniaProperties
public static "canMagniaAffect"(arg0: $Entity$$Type): boolean
public static "getMagnetismFactor"(arg0: $Entity$$Type): float
public static "dashed"(arg0: $Entity$$Type): boolean
public static "setDashed"(arg0: $Entity$$Type, arg1: boolean): void
public static "dashTicks"(arg0: $Entity$$Type): integer
public static "setDashTicks"(arg0: $Entity$$Type, arg1: integer): void
public "sdl$getDynamicLightX"(): double
public "sdl$getDynamicLightY"(): double
public "sdl$getDynamicLightZ"(): double
public "sdl$resetDynamicLight"(): void
public "sodiumdynamiclights$updateDynamicLight"(arg0: $LevelRenderer$$Type): boolean
public "sdl$getDynamicLightLevel"(): $Level
public "sdl$shouldUpdateDynamicLight"(): boolean
public "sodiumdynamiclights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$$Type): void
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: boolean): $ChangeSubscriber<(T)>
public static "without"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>): $ChangeSubscriber<(T)>
public static "combine"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: integer, arg2: $ChangeSubscriber$$Type<(T)>, arg3: integer): $ChangeSubscriber<(T)>
public static "dataOf"(arg0: $ChangeSubscriber$$Type<(any)>, arg1: $ChangeSubscriber$$Type<(any)>, arg2: integer): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer, arg3: integer, arg4: boolean): integer
public static "dataWithout"<T>(arg0: $ChangeSubscriber$$Type<(T)>, arg1: $ChangeSubscriber$$Type<(T)>, arg2: integer): integer
public static "containsSubscriber"(arg0: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg1: integer, arg2: $ChangeSubscriber$$Type<($ItemStack$$Type)>, arg3: integer): boolean
public static "forNameOnly"(arg0: StringJS): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "noGravity"(): boolean
get "armorSlots"(): $Iterable<($ItemStack)>
get "pushable"(): boolean
get "mainArm"(): $HumanoidArm
get "inWall"(): boolean
set "shield"(value: boolean)
set "secondPhase"(value: boolean)
set "collided"(value: boolean)
get "collided"(): boolean
get "secondPhase"(): boolean
get "shield"(): boolean
get "laserFiring"(): boolean
get "essenceController"(): $UUID
set "essenceController"(value: $UUID$$Type)
get "cosmicCrystalState"(): $CosmicCrystalState
get "orbitOffsetDegrees"(): integer
get "difficultyBoost"(): float
set "difficultyBoost"(value: float)
set "orbitOffsetDegrees"(value: integer)
set "cosmicCrystalState"(value: $CosmicCrystalState$$Type)
set "stateTimespan"(value: integer)
set "laserStartDelay"(value: integer)
set "laserFireStartTime"(value: integer)
get "stateTimespan"(): integer
get "laserStartDelay"(): integer
get "laserFireStartTime"(): integer
set "targetEntityUUID"(value: $UUID$$Type)
get "targetEntityUUID"(): $UUID
get "glowing"(): boolean
get "portalCooldown"(): integer
get "onPortalCooldown"(): boolean
set "initialRotationAnimationTimespan"(value: integer)
get "initialRotationAnimationTimespan"(): integer
get "essenceControllerBlockPos"(): $BlockPos
get "essenceControllerDimension"(): $ResourceKey<($Level)>
set "essenceControllerBlockPos"(value: $BlockPos$$Type)
set "essenceControllerDimension"(value: $ResourceKey$$Type<($Level)>)
set "syncedCurrentStateTimeTick"(value: integer)
get "syncedCurrentStateTimeTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CosmicCrystalEntity$$Type = ($CosmicCrystalEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CosmicCrystalEntity_ = $CosmicCrystalEntity$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.mixin.entities.ItemEntityAccessor" {
import {$UUID, $UUID$$Type} from "java.util.UUID"

export interface $ItemEntityAccessor {

 "bumblezone$getThrower"(): $UUID

(): $UUID$$Type
}

export namespace $ItemEntityAccessor {
const probejs$$marker: never
}
export class $ItemEntityAccessor$$Static implements $ItemEntityAccessor {


 "bumblezone$getThrower"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEntityAccessor$$Type = (() => $UUID$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemEntityAccessor_ = $ItemEntityAccessor$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.TreeDungeonFeatureConfig" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$NbtFeatureConfig, $NbtFeatureConfig$$Type} from "com.telepathicgrunt.the_bumblezone.worldgen.features.configs.NbtFeatureConfig"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"

export class $TreeDungeonFeatureConfig extends $NbtFeatureConfig implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($TreeDungeonFeatureConfig)>
readonly "treeConfiguredFeature": $ResourceLocation
readonly "postProcessor": $ResourceLocation
readonly "processor": $ResourceLocation
readonly "structureYOffset": integer
readonly "nbtResourcelocationsAndWeights": $List<($Pair<($ResourceLocation), (integer)>)>

constructor(treeConfiguredFeature: $ResourceLocation$$Type, processor: $ResourceLocation$$Type, postProcessor: $ResourceLocation$$Type, nbtIdentifiersAndWeights: $List$$Type<($Pair$$Type<($ResourceLocation$$Type), (integer)>)>, structureYOffset: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeDungeonFeatureConfig$$Type = ($TreeDungeonFeatureConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeDungeonFeatureConfig_ = $TreeDungeonFeatureConfig$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.blocks.HoneyCocoon" {
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $HoneyCocoon extends $BaseEntityBlock implements $SimpleWaterloggedBlock {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "waterDropDelay": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($HoneyCocoon)>
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "IS_LOOT_CONTAINER": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor()
constructor(properties: $BlockBehaviour$Properties$$Type)

public "tick"(blockState: $BlockState$$Type, serverLevel: $ServerLevel$$Type, blockPos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "getShape"(blockstate: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "codec"(): $MapCodec<($HoneyCocoon)>
public "randomTick"(blockState: $BlockState$$Type, serverLevel: $ServerLevel$$Type, blockPos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "updateShape"(blockstate: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, world: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "playerDestroy"(level: $Level$$Type, player: $Player$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, blockEntity: $BlockEntity$$Type, itemStack: $ItemStack$$Type): void
public "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, blockstate: $BlockState$$Type, livingEntity: $LivingEntity$$Type, itemStack: $ItemStack$$Type): void
public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public "canPlaceLiquid"(player: $Player$$Type, world: $BlockGetter$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, fluid: $Fluid$$Type): boolean
public "placeLiquid"(world: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, fluidState: $FluidState$$Type): boolean
public "pickupBlock"(player: $Player$$Type, world: $LevelAccessor$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $ItemStack
public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, blockState: $BlockState$$Type, blockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getRenderShape"(blockState: $BlockState$$Type): $RenderShape
public "useItemOn"(itemStack: $ItemStack$$Type, blockstate: $BlockState$$Type, world: $Level$$Type, position: $BlockPos$$Type, playerEntity: $Player$$Type, playerHand: $InteractionHand$$Type, raytraceResult: $BlockHitResult$$Type): $ItemInteractionResult
public "animateTick"(blockState: $BlockState$$Type, world: $Level$$Type, position: $BlockPos$$Type, random: $RandomSource$$Type): void
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "neighborChanged"(blockstate: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, block: $Block$$Type, fromPos: $BlockPos$$Type, notify: boolean): void
public "appendHoverText"(itemStack: $ItemStack$$Type, tooltipContext: $Item$TooltipContext$$Type, list: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "getPickupSound"(): $Optional<($SoundEvent)>
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoneyCocoon$$Type = ($HoneyCocoon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoneyCocoon_ = $HoneyCocoon$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.advancements.BlockStateSpecificTrigger" {
import {$BlockStateSpecificTrigger$TriggerInstance, $BlockStateSpecificTrigger$TriggerInstance$$Type} from "com.telepathicgrunt.the_bumblezone.advancements.BlockStateSpecificTrigger$TriggerInstance"
import {$SimpleCriterionTrigger, $SimpleCriterionTrigger$$Type} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BlockStateSpecificTrigger extends $SimpleCriterionTrigger<($BlockStateSpecificTrigger$TriggerInstance)> {

constructor()

public "trigger"(serverPlayer: $ServerPlayer$$Type, pos: $BlockPos$$Type): void
public "codec"(): $Codec<($BlockStateSpecificTrigger$TriggerInstance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateSpecificTrigger$$Type = ($BlockStateSpecificTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateSpecificTrigger_ = $BlockStateSpecificTrigger$$Type;
}}
declare module "com.telepathicgrunt.the_bumblezone.worldgen.features.HoneycombCaves" {
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $HoneycombCaves extends $Feature<($NoneFeatureConfiguration)> {
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "END_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>

constructor(configFactory: $Codec$$Type<($NoneFeatureConfiguration$$Type)>)

public "setSeed"(seed: long): void
public "place"(context: $FeaturePlaceContext$$Type<($NoneFeatureConfiguration$$Type)>): boolean
set "seed"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoneycombCaves$$Type = ($HoneycombCaves);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HoneycombCaves_ = $HoneycombCaves$$Type;
}}
