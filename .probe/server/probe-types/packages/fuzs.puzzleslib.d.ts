declare module "fuzs.puzzleslib.api.biome.v1.BiomeLoadingPhase" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $BiomeLoadingPhase extends $Enum<($BiomeLoadingPhase)> {
static readonly "MODIFICATIONS": $BiomeLoadingPhase
static readonly "REMOVALS": $BiomeLoadingPhase
static readonly "POST_PROCESSING": $BiomeLoadingPhase
static readonly "ADDITIONS": $BiomeLoadingPhase


public static "values"(): ($BiomeLoadingPhase)[]
public static "valueOf"(name: string): $BiomeLoadingPhase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeLoadingPhase$$Type = (("additions") | ("removals") | ("modifications") | ("post_processing"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeLoadingPhase_ = $BiomeLoadingPhase$$Type;
}}
declare module "fuzs.puzzleslib.api.biome.v1.BiomeLoadingContext" {
import {$LevelStem, $LevelStem$$Type} from "net.minecraft.world.level.dimension.LevelStem"
import {$PlacedFeature, $PlacedFeature$$Type} from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $BiomeLoadingContext {

 "hasFeature"(key: $ResourceKey$$Type<($ConfiguredFeature<(any), (any)>)>): boolean
 "holder"(): $Holder<($Biome)>
 "is"(arg0: $TagKey$$Type<($Biome)>): boolean
 "is"(biome: $Biome$$Type): boolean
 "is"(holder: $Holder$$Type<($Biome)>): boolean
 "is"(resourceKey: $ResourceKey$$Type<($Biome)>): boolean
 "getBiome"(): $Biome
 "getResourceKey"(): $ResourceKey<($Biome)>
 "hasPlacedFeature"(key: $ResourceKey$$Type<($PlacedFeature)>): boolean
 "getPlacedFeatureKey"(arg0: $PlacedFeature$$Type): $Optional<($ResourceKey<($PlacedFeature)>)>
 "validForStructure"(arg0: $ResourceKey$$Type<($Structure)>): boolean
 "getStructureKey"(arg0: $Structure$$Type): $Optional<($ResourceKey<($Structure)>)>
 "getFeatureKey"(arg0: $ConfiguredFeature$$Type<(any), (any)>): $Optional<($ResourceKey<($ConfiguredFeature<(any), (any)>)>)>
 "canGenerateIn"(arg0: $ResourceKey$$Type<($LevelStem)>): boolean
get "biome"(): $Biome
get "resourceKey"(): $ResourceKey<($Biome)>
}

export namespace $BiomeLoadingContext {
const probejs$$marker: never
}
export class $BiomeLoadingContext$$Static implements $BiomeLoadingContext {


 "hasFeature"(key: $ResourceKey$$Type<($ConfiguredFeature<(any), (any)>)>): boolean
 "holder"(): $Holder<($Biome)>
 "is"(arg0: $TagKey$$Type<($Biome)>): boolean
 "is"(biome: $Biome$$Type): boolean
 "is"(holder: $Holder$$Type<($Biome)>): boolean
 "is"(resourceKey: $ResourceKey$$Type<($Biome)>): boolean
 "getBiome"(): $Biome
 "getResourceKey"(): $ResourceKey<($Biome)>
 "hasPlacedFeature"(key: $ResourceKey$$Type<($PlacedFeature)>): boolean
 "getPlacedFeatureKey"(arg0: $PlacedFeature$$Type): $Optional<($ResourceKey<($PlacedFeature)>)>
 "validForStructure"(arg0: $ResourceKey$$Type<($Structure)>): boolean
 "getStructureKey"(arg0: $Structure$$Type): $Optional<($ResourceKey<($Structure)>)>
 "getFeatureKey"(arg0: $ConfiguredFeature$$Type<(any), (any)>): $Optional<($ResourceKey<($ConfiguredFeature<(any), (any)>)>)>
 "canGenerateIn"(arg0: $ResourceKey$$Type<($LevelStem)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeLoadingContext$$Type = ($BiomeLoadingContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeLoadingContext_ = $BiomeLoadingContext$$Type;
}}
declare module "fuzs.puzzleslib.neoforge.mixin.accessor.MobSpawnSettingsBuilderNeoForgeAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$MobSpawnSettings$MobSpawnCost, $MobSpawnSettings$MobSpawnCost$$Type} from "net.minecraft.world.level.biome.MobSpawnSettings$MobSpawnCost"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export interface $MobSpawnSettingsBuilderNeoForgeAccessor {

 "puzzleslib$getMobSpawnCosts"(): $Map<($EntityType<(any)>), ($MobSpawnSettings$MobSpawnCost)>

(): $Map$$Type<($EntityType$$Type<(any)>), ($MobSpawnSettings$MobSpawnCost$$Type)>
}

export namespace $MobSpawnSettingsBuilderNeoForgeAccessor {
const probejs$$marker: never
}
export class $MobSpawnSettingsBuilderNeoForgeAccessor$$Static implements $MobSpawnSettingsBuilderNeoForgeAccessor {


 "puzzleslib$getMobSpawnCosts"(): $Map<($EntityType<(any)>), ($MobSpawnSettings$MobSpawnCost)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobSpawnSettingsBuilderNeoForgeAccessor$$Type = (() => $Map$$Type<($EntityType$$Type<(any)>), ($MobSpawnSettings$MobSpawnCost$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobSpawnSettingsBuilderNeoForgeAccessor_ = $MobSpawnSettingsBuilderNeoForgeAccessor$$Type;
}}
declare module "fuzs.puzzleslib.neoforge.impl.core.NeoForgeBiomeLoadingHandler$BiomeModification" {
import {$BiomeLoadingContext, $BiomeLoadingContext$$Type} from "fuzs.puzzleslib.api.biome.v1.BiomeLoadingContext"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$BiomeModificationContext, $BiomeModificationContext$$Type} from "fuzs.puzzleslib.api.biome.v1.BiomeModificationContext"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $NeoForgeBiomeLoadingHandler$BiomeModification extends $Record {

constructor(selector: $Predicate$$Type<($BiomeLoadingContext)>, modifier: $Consumer$$Type<($BiomeModificationContext)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "modifier"(): $Consumer<($BiomeModificationContext)>
public "selector"(): $Predicate<($BiomeLoadingContext)>
public "tryApply"(filter: $BiomeLoadingContext$$Type, context: $BiomeModificationContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NeoForgeBiomeLoadingHandler$BiomeModification$$Type = ({"modifier"?: $Consumer$$Type<($BiomeModificationContext$$Type)>, "selector"?: $Predicate$$Type<($BiomeLoadingContext$$Type)>}) | ([modifier?: $Consumer$$Type<($BiomeModificationContext$$Type)>, selector?: $Predicate$$Type<($BiomeLoadingContext$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NeoForgeBiomeLoadingHandler$BiomeModification_ = $NeoForgeBiomeLoadingHandler$BiomeModification$$Type;
}}
declare module "fuzs.puzzleslib.neoforge.api.event.v1.entity.living.ComputeEnchantedLootBonusEvent" {
import {$LivingEvent, $LivingEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingEvent"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$LootContext, $LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $ComputeEnchantedLootBonusEvent extends $LivingEvent {

constructor(entity: $LivingEntity$$Type, damageSource: $DamageSource$$Type, enchantment: $Holder$$Type<($Enchantment)>, enchantmentLevel: integer)

public static "onComputeEnchantedLootBonus"(enchantment: $Holder$$Type<($Enchantment)>, enchantmentLevel: integer, lootContext: $LootContext$$Type): integer
public static "onComputeEnchantedLootBonus"(enchantment: $Holder$$Type<($Enchantment)>, enchantmentLevel: integer, livingEntity: $LivingEntity$$Type, damageSource: $DamageSource$$Type): integer
public "setEnchantmentLevel"(enchantmentLevel: integer): void
public "getEnchantmentLevel"(): integer
public "getDamageSource"(): $DamageSource
public "getEnchantment"(): $Holder<($Enchantment)>
set "enchantmentLevel"(value: integer)
get "enchantmentLevel"(): integer
get "damageSource"(): $DamageSource
get "enchantment"(): $Holder<($Enchantment)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputeEnchantedLootBonusEvent$$Type = ($ComputeEnchantedLootBonusEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputeEnchantedLootBonusEvent_ = $ComputeEnchantedLootBonusEvent$$Type;
}}
declare module "fuzs.puzzleslib.neoforge.impl.data.FileHelperDataProvider" {
import {$ExistingFileHelper, $ExistingFileHelper$$Type} from "net.neoforged.neoforge.common.data.ExistingFileHelper"

export interface $FileHelperDataProvider {

 "puzzleslib$setExistingFileHelper"(arg0: $ExistingFileHelper$$Type): void

(arg0: $ExistingFileHelper): void
}

export namespace $FileHelperDataProvider {
const probejs$$marker: never
}
export class $FileHelperDataProvider$$Static implements $FileHelperDataProvider {


 "puzzleslib$setExistingFileHelper"(arg0: $ExistingFileHelper$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileHelperDataProvider$$Type = ((arg0: $ExistingFileHelper) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FileHelperDataProvider_ = $FileHelperDataProvider$$Type;
}}
declare module "fuzs.puzzleslib.neoforge.mixin.accessor.BiomeSpecialEffectsBuilderNeoForgeAccessor" {
import {$AmbientMoodSettings, $AmbientMoodSettings$$Type} from "net.minecraft.world.level.biome.AmbientMoodSettings"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$AmbientParticleSettings, $AmbientParticleSettings$$Type} from "net.minecraft.world.level.biome.AmbientParticleSettings"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$AmbientAdditionsSettings, $AmbientAdditionsSettings$$Type} from "net.minecraft.world.level.biome.AmbientAdditionsSettings"
import {$Music, $Music$$Type} from "net.minecraft.sounds.Music"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $BiomeSpecialEffectsBuilderNeoForgeAccessor {

 "puzzleslib$setFoliageColorOverride"(arg0: $Optional$$Type<(integer)>): void
 "puzzleslib$setGrassColorOverride"(arg0: $Optional$$Type<(integer)>): void
 "puzzleslib$setAmbientLoopSoundEvent"(arg0: $Optional$$Type<($Holder$$Type<($SoundEvent$$Type)>)>): void
 "puzzleslib$setAmbientMoodSettings"(arg0: $Optional$$Type<($AmbientMoodSettings$$Type)>): void
 "puzzleslib$setAmbientAdditionsSettings"(arg0: $Optional$$Type<($AmbientAdditionsSettings$$Type)>): void
 "puzzleslib$setAmbientParticle"(arg0: $Optional$$Type<($AmbientParticleSettings$$Type)>): void
 "puzzleslib$setBackgroundMusic"(arg0: $Optional$$Type<($Music$$Type)>): void
}

export namespace $BiomeSpecialEffectsBuilderNeoForgeAccessor {
const probejs$$marker: never
}
export class $BiomeSpecialEffectsBuilderNeoForgeAccessor$$Static implements $BiomeSpecialEffectsBuilderNeoForgeAccessor {


 "puzzleslib$setFoliageColorOverride"(arg0: $Optional$$Type<(integer)>): void
 "puzzleslib$setGrassColorOverride"(arg0: $Optional$$Type<(integer)>): void
 "puzzleslib$setAmbientLoopSoundEvent"(arg0: $Optional$$Type<($Holder$$Type<($SoundEvent$$Type)>)>): void
 "puzzleslib$setAmbientMoodSettings"(arg0: $Optional$$Type<($AmbientMoodSettings$$Type)>): void
 "puzzleslib$setAmbientAdditionsSettings"(arg0: $Optional$$Type<($AmbientAdditionsSettings$$Type)>): void
 "puzzleslib$setAmbientParticle"(arg0: $Optional$$Type<($AmbientParticleSettings$$Type)>): void
 "puzzleslib$setBackgroundMusic"(arg0: $Optional$$Type<($Music$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeSpecialEffectsBuilderNeoForgeAccessor$$Type = ($BiomeSpecialEffectsBuilderNeoForgeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeSpecialEffectsBuilderNeoForgeAccessor_ = $BiomeSpecialEffectsBuilderNeoForgeAccessor$$Type;
}}
declare module "fuzs.puzzleslib.neoforge.mixin.client.accessor.ItemColorsNeoForgeAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ItemColor, $ItemColor$$Type} from "net.minecraft.client.color.item.ItemColor"

export interface $ItemColorsNeoForgeAccessor {

 "puzzleslib$getItemColors"(): $Map<($Item), ($ItemColor)>

(): $Map$$Type<($Item$$Type), ($ItemColor$$Type)>
}

export namespace $ItemColorsNeoForgeAccessor {
const probejs$$marker: never
}
export class $ItemColorsNeoForgeAccessor$$Static implements $ItemColorsNeoForgeAccessor {


 "puzzleslib$getItemColors"(): $Map<($Item), ($ItemColor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemColorsNeoForgeAccessor$$Type = (() => $Map$$Type<($Item$$Type), ($ItemColor$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemColorsNeoForgeAccessor_ = $ItemColorsNeoForgeAccessor$$Type;
}}
declare module "fuzs.puzzleslib.neoforge.mixin.accessor.NewRegistryEventNeoForgeAccessor" {
import {$NewRegistryEvent, $NewRegistryEvent$$Type} from "net.neoforged.neoforge.registries.NewRegistryEvent"

export interface $NewRegistryEventNeoForgeAccessor {

 "puzzleslib$callFill"(): void

(): void
}

export namespace $NewRegistryEventNeoForgeAccessor {
function puzzleslib$callInit(): $NewRegistryEvent
const probejs$$marker: never
}
export class $NewRegistryEventNeoForgeAccessor$$Static implements $NewRegistryEventNeoForgeAccessor {


 "puzzleslib$callFill"(): void
static "puzzleslib$callInit"(): $NewRegistryEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NewRegistryEventNeoForgeAccessor$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NewRegistryEventNeoForgeAccessor_ = $NewRegistryEventNeoForgeAccessor$$Type;
}}
declare module "fuzs.puzzleslib.api.biome.v1.SpecialEffectsContext" {
import {$AmbientMoodSettings, $AmbientMoodSettings$$Type} from "net.minecraft.world.level.biome.AmbientMoodSettings"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BiomeSpecialEffects$GrassColorModifier, $BiomeSpecialEffects$GrassColorModifier$$Type} from "net.minecraft.world.level.biome.BiomeSpecialEffects$GrassColorModifier"
import {$AmbientParticleSettings, $AmbientParticleSettings$$Type} from "net.minecraft.world.level.biome.AmbientParticleSettings"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$AmbientAdditionsSettings, $AmbientAdditionsSettings$$Type} from "net.minecraft.world.level.biome.AmbientAdditionsSettings"
import {$Music, $Music$$Type} from "net.minecraft.sounds.Music"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $SpecialEffectsContext {

 "setFoliageColorOverride"(foliageColorOverride: integer): void
 "setFoliageColorOverride"(arg0: $Optional$$Type<(integer)>): void
 "clearFoliageColorOverride"(): void
 "clearGrassColorOverride"(): void
 "setAmbientParticleSettings"(ambientParticleSettings: $AmbientParticleSettings$$Type): void
 "setAmbientParticleSettings"(arg0: $Optional$$Type<($AmbientParticleSettings$$Type)>): void
 "clearAmbientParticleSettings"(): void
 "setAmbientLoopSoundEvent"(arg0: $Optional$$Type<($Holder$$Type<($SoundEvent$$Type)>)>): void
 "setAmbientLoopSoundEvent"(ambientLoopSoundEvent: $Holder$$Type<($SoundEvent)>): void
 "clearAmbientLoopSoundEvent"(): void
 "clearAmbientMoodSettings"(): void
 "setAmbientAdditionsSettings"(ambientAdditionsSettings: $AmbientAdditionsSettings$$Type): void
 "setAmbientAdditionsSettings"(arg0: $Optional$$Type<($AmbientAdditionsSettings$$Type)>): void
 "clearAmbientAdditionsSettings"(): void
 "getAmbientParticleSettings"(): $Optional<($AmbientParticleSettings)>
 "getAmbientLoopSoundEvent"(): $Optional<($Holder<($SoundEvent)>)>
 "getAmbientAdditionsSettings"(): $Optional<($AmbientAdditionsSettings)>
 "getFoliageColorOverride"(): $Optional<(integer)>
 "getWaterColor"(): integer
 "getFogColor"(): integer
 "getSkyColor"(): integer
 "getWaterFogColor"(): integer
 "getAmbientMoodSettings"(): $Optional<($AmbientMoodSettings)>
 "getGrassColorOverride"(): $Optional<(integer)>
 "getGrassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
 "getBackgroundMusic"(): $Optional<($Music)>
 "setWaterFogColor"(arg0: integer): void
 "setGrassColorOverride"(arg0: $Optional$$Type<(integer)>): void
 "setGrassColorOverride"(grassColorOverride: integer): void
 "setGrassColorModifier"(arg0: $BiomeSpecialEffects$GrassColorModifier$$Type): void
 "setAmbientMoodSettings"(arg0: $Optional$$Type<($AmbientMoodSettings$$Type)>): void
 "setAmbientMoodSettings"(ambientMoodSettings: $AmbientMoodSettings$$Type): void
 "setBackgroundMusic"(backgroundMusic: $Music$$Type): void
 "setBackgroundMusic"(arg0: $Optional$$Type<($Music$$Type)>): void
 "clearBackgroundMusic"(): void
 "setFogColor"(arg0: integer): void
 "setWaterColor"(arg0: integer): void
 "setSkyColor"(arg0: integer): void
set "foliageColorOverride"(value: integer)
set "foliageColorOverride"(value: $Optional$$Type<(integer)>)
set "ambientParticleSettings"(value: $AmbientParticleSettings$$Type)
set "ambientParticleSettings"(value: $Optional$$Type<($AmbientParticleSettings$$Type)>)
set "ambientLoopSoundEvent"(value: $Optional$$Type<($Holder$$Type<($SoundEvent$$Type)>)>)
set "ambientLoopSoundEvent"(value: $Holder$$Type<($SoundEvent)>)
set "ambientAdditionsSettings"(value: $AmbientAdditionsSettings$$Type)
set "ambientAdditionsSettings"(value: $Optional$$Type<($AmbientAdditionsSettings$$Type)>)
get "ambientParticleSettings"(): $Optional<($AmbientParticleSettings)>
get "ambientLoopSoundEvent"(): $Optional<($Holder<($SoundEvent)>)>
get "ambientAdditionsSettings"(): $Optional<($AmbientAdditionsSettings)>
get "foliageColorOverride"(): $Optional<(integer)>
get "waterColor"(): integer
get "fogColor"(): integer
get "skyColor"(): integer
get "waterFogColor"(): integer
get "ambientMoodSettings"(): $Optional<($AmbientMoodSettings)>
get "grassColorOverride"(): $Optional<(integer)>
get "grassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
get "backgroundMusic"(): $Optional<($Music)>
set "waterFogColor"(value: integer)
set "grassColorOverride"(value: $Optional$$Type<(integer)>)
set "grassColorOverride"(value: integer)
set "grassColorModifier"(value: $BiomeSpecialEffects$GrassColorModifier$$Type)
set "ambientMoodSettings"(value: $Optional$$Type<($AmbientMoodSettings$$Type)>)
set "ambientMoodSettings"(value: $AmbientMoodSettings$$Type)
set "backgroundMusic"(value: $Music$$Type)
set "backgroundMusic"(value: $Optional$$Type<($Music$$Type)>)
set "fogColor"(value: integer)
set "waterColor"(value: integer)
set "skyColor"(value: integer)
}

export namespace $SpecialEffectsContext {
const probejs$$marker: never
}
export class $SpecialEffectsContext$$Static implements $SpecialEffectsContext {


 "setFoliageColorOverride"(foliageColorOverride: integer): void
 "setFoliageColorOverride"(arg0: $Optional$$Type<(integer)>): void
 "clearFoliageColorOverride"(): void
 "clearGrassColorOverride"(): void
 "setAmbientParticleSettings"(ambientParticleSettings: $AmbientParticleSettings$$Type): void
 "setAmbientParticleSettings"(arg0: $Optional$$Type<($AmbientParticleSettings$$Type)>): void
 "clearAmbientParticleSettings"(): void
 "setAmbientLoopSoundEvent"(arg0: $Optional$$Type<($Holder$$Type<($SoundEvent$$Type)>)>): void
 "setAmbientLoopSoundEvent"(ambientLoopSoundEvent: $Holder$$Type<($SoundEvent)>): void
 "clearAmbientLoopSoundEvent"(): void
 "clearAmbientMoodSettings"(): void
 "setAmbientAdditionsSettings"(ambientAdditionsSettings: $AmbientAdditionsSettings$$Type): void
 "setAmbientAdditionsSettings"(arg0: $Optional$$Type<($AmbientAdditionsSettings$$Type)>): void
 "clearAmbientAdditionsSettings"(): void
 "getAmbientParticleSettings"(): $Optional<($AmbientParticleSettings)>
 "getAmbientLoopSoundEvent"(): $Optional<($Holder<($SoundEvent)>)>
 "getAmbientAdditionsSettings"(): $Optional<($AmbientAdditionsSettings)>
 "getFoliageColorOverride"(): $Optional<(integer)>
 "getWaterColor"(): integer
 "getFogColor"(): integer
 "getSkyColor"(): integer
 "getWaterFogColor"(): integer
 "getAmbientMoodSettings"(): $Optional<($AmbientMoodSettings)>
 "getGrassColorOverride"(): $Optional<(integer)>
 "getGrassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
 "getBackgroundMusic"(): $Optional<($Music)>
 "setWaterFogColor"(arg0: integer): void
 "setGrassColorOverride"(arg0: $Optional$$Type<(integer)>): void
 "setGrassColorOverride"(grassColorOverride: integer): void
 "setGrassColorModifier"(arg0: $BiomeSpecialEffects$GrassColorModifier$$Type): void
 "setAmbientMoodSettings"(arg0: $Optional$$Type<($AmbientMoodSettings$$Type)>): void
 "setAmbientMoodSettings"(ambientMoodSettings: $AmbientMoodSettings$$Type): void
 "setBackgroundMusic"(backgroundMusic: $Music$$Type): void
 "setBackgroundMusic"(arg0: $Optional$$Type<($Music$$Type)>): void
 "clearBackgroundMusic"(): void
 "setFogColor"(arg0: integer): void
 "setWaterColor"(arg0: integer): void
 "setSkyColor"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialEffectsContext$$Type = ($SpecialEffectsContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpecialEffectsContext_ = $SpecialEffectsContext$$Type;
}}
declare module "fuzs.puzzleslib.neoforge.impl.core.NeoForgeBiomeLoadingHandler$BiomeModifierImpl" {
import {$ModifiableBiomeInfo$BiomeInfo$Builder, $ModifiableBiomeInfo$BiomeInfo$Builder$$Type} from "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo$Builder"
import {$NeoForgeBiomeLoadingHandler$BiomeModification, $NeoForgeBiomeLoadingHandler$BiomeModification$$Type} from "fuzs.puzzleslib.neoforge.impl.core.NeoForgeBiomeLoadingHandler$BiomeModification"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$BiomeModifier, $BiomeModifier$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BiomeModifier$Phase, $BiomeModifier$Phase$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier$Phase"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$BiomeLoadingPhase, $BiomeLoadingPhase$$Type} from "fuzs.puzzleslib.api.biome.v1.BiomeLoadingPhase"

export class $NeoForgeBiomeLoadingHandler$BiomeModifierImpl extends $Record implements $BiomeModifier {

constructor(biomeModifications: $Multimap$$Type<($BiomeLoadingPhase$$Type), ($NeoForgeBiomeLoadingHandler$BiomeModification$$Type)>)

public "modify"(arg0: $Holder$$Type<($Biome)>, arg1: $BiomeModifier$Phase$$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$$Type): void
public "codec"(): $MapCodec<($BiomeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NeoForgeBiomeLoadingHandler$BiomeModifierImpl$$Type = ({"biomeModifications"?: $Multimap$$Type<($BiomeLoadingPhase$$Type), ($NeoForgeBiomeLoadingHandler$BiomeModification$$Type)>, "codec"?: $MapCodec$$Type<($BiomeModifier$$Type)>}) | ([biomeModifications?: $Multimap$$Type<($BiomeLoadingPhase$$Type), ($NeoForgeBiomeLoadingHandler$BiomeModification$$Type)>, codec?: $MapCodec$$Type<($BiomeModifier$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NeoForgeBiomeLoadingHandler$BiomeModifierImpl_ = $NeoForgeBiomeLoadingHandler$BiomeModifierImpl$$Type;
}}
declare module "fuzs.puzzleslib.api.biome.v1.GenerationSettingsContext" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$GenerationStep$Decoration, $GenerationStep$Decoration$$Type} from "net.minecraft.world.level.levelgen.GenerationStep$Decoration"
import {$GenerationStep$Carving, $GenerationStep$Carving$$Type} from "net.minecraft.world.level.levelgen.GenerationStep$Carving"
import {$PlacedFeature, $PlacedFeature$$Type} from "net.minecraft.world.level.levelgen.placement.PlacedFeature"
import {$ConfiguredWorldCarver, $ConfiguredWorldCarver$$Type} from "net.minecraft.world.level.levelgen.carver.ConfiguredWorldCarver"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export interface $GenerationSettingsContext {

 "getFeatures"(arg0: $GenerationStep$Decoration$$Type): $Iterable<($Holder<($PlacedFeature)>)>
 "removeFeature"(arg0: $GenerationStep$Decoration$$Type, arg1: $ResourceKey$$Type<($PlacedFeature)>): boolean
 "removeFeature"(featureKey: $ResourceKey$$Type<($PlacedFeature)>): boolean
 "addCarver"(arg0: $GenerationStep$Carving$$Type, arg1: $ResourceKey$$Type<($ConfiguredWorldCarver<(any)>)>): void
 "removeCarver"(carverKey: $ResourceKey$$Type<($ConfiguredWorldCarver<(any)>)>): boolean
 "removeCarver"(arg0: $GenerationStep$Carving$$Type, arg1: $ResourceKey$$Type<($ConfiguredWorldCarver<(any)>)>): boolean
 "getCarvers"(arg0: $GenerationStep$Carving$$Type): $Iterable<($Holder<($ConfiguredWorldCarver<(any)>)>)>
 "addFeature"(arg0: $GenerationStep$Decoration$$Type, arg1: $ResourceKey$$Type<($PlacedFeature)>): void
}

export namespace $GenerationSettingsContext {
const probejs$$marker: never
}
export class $GenerationSettingsContext$$Static implements $GenerationSettingsContext {


 "getFeatures"(arg0: $GenerationStep$Decoration$$Type): $Iterable<($Holder<($PlacedFeature)>)>
 "removeFeature"(arg0: $GenerationStep$Decoration$$Type, arg1: $ResourceKey$$Type<($PlacedFeature)>): boolean
 "removeFeature"(featureKey: $ResourceKey$$Type<($PlacedFeature)>): boolean
 "addCarver"(arg0: $GenerationStep$Carving$$Type, arg1: $ResourceKey$$Type<($ConfiguredWorldCarver<(any)>)>): void
 "removeCarver"(carverKey: $ResourceKey$$Type<($ConfiguredWorldCarver<(any)>)>): boolean
 "removeCarver"(arg0: $GenerationStep$Carving$$Type, arg1: $ResourceKey$$Type<($ConfiguredWorldCarver<(any)>)>): boolean
 "getCarvers"(arg0: $GenerationStep$Carving$$Type): $Iterable<($Holder<($ConfiguredWorldCarver<(any)>)>)>
 "addFeature"(arg0: $GenerationStep$Decoration$$Type, arg1: $ResourceKey$$Type<($PlacedFeature)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenerationSettingsContext$$Type = ($GenerationSettingsContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenerationSettingsContext_ = $GenerationSettingsContext$$Type;
}}
declare module "fuzs.puzzleslib.api.block.v1.entity.TickingEntityBlock" {
import {$TickingBlockEntity, $TickingBlockEntity$$Type} from "fuzs.puzzleslib.api.block.v1.entity.TickingBlockEntity"
import {$EntityBlock, $EntityBlock$$Type} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener, $GameEventListener$$Type} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $TickingEntityBlock<T extends ($BlockEntity) & ($TickingBlockEntity)> extends $EntityBlock {

 "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
 "getTicker"<BE extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, blockEntityType: $BlockEntityType$$Type<(BE)>): $BlockEntityTicker<(BE)>
 "getBlockEntityType"(): $BlockEntityType<(T)>
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener

(): $BlockEntityType$$Type<(T)>
get "blockEntityType"(): $BlockEntityType<(T)>
}

export namespace $TickingEntityBlock {
const probejs$$marker: never
}
export class $TickingEntityBlock$$Static<T extends ($BlockEntity) & ($TickingBlockEntity)> implements $TickingEntityBlock {


 "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
 "getTicker"<BE extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, blockEntityType: $BlockEntityType$$Type<(BE)>): $BlockEntityTicker<(BE)>
 "getBlockEntityType"(): $BlockEntityType<(T)>
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickingEntityBlock$$Type<T> = (() => $BlockEntityType$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickingEntityBlock_<T> = $TickingEntityBlock$$Type<(T)>;
}}
declare module "fuzs.puzzleslib.api.block.v1.entity.TickingBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TickingBlockEntity {

 "serverTick"(): void
 "clientTick"(): void
}

export namespace $TickingBlockEntity {
const probejs$$marker: never
}
export class $TickingBlockEntity$$Static implements $TickingBlockEntity {


 "serverTick"(): void
 "clientTick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickingBlockEntity$$Type = ($TickingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickingBlockEntity_ = $TickingBlockEntity$$Type;
}}
declare module "fuzs.puzzleslib.api.biome.v1.MobSpawnSettingsContext" {
import {$BiPredicate, $BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$MobCategory, $MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$List, $List$$Type} from "java.util.List"
import {$Set, $Set$$Type} from "java.util.Set"
import {$MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$$Type} from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import {$MobSpawnSettings$MobSpawnCost, $MobSpawnSettings$MobSpawnCost$$Type} from "net.minecraft.world.level.biome.MobSpawnSettings$MobSpawnCost"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export interface $MobSpawnSettingsContext {

 "getCreatureGenerationProbability"(): float
 "setCreatureGenerationProbability"(arg0: float): void
 "removeSpawnsOfEntityType"(entityType: $EntityType$$Type<(any)>): boolean
 "getMobCategoriesWithSpawns"(): $Set<($MobCategory)>
 "getEntityTypesWithSpawnCost"(): $Set<($EntityType<(any)>)>
 "removeSpawns"(arg0: $BiPredicate$$Type<($MobCategory), ($MobSpawnSettings$SpawnerData)>): boolean
 "clearSpawns"(): void
 "clearSpawns"(group: $MobCategory$$Type): void
 "setSpawnCost"(arg0: $EntityType$$Type<(any)>, arg1: double, arg2: double): void
 "clearSpawnCost"(arg0: $EntityType$$Type<(any)>): boolean
 "getSpawnerData"(arg0: $MobCategory$$Type): $List<($MobSpawnSettings$SpawnerData)>
 "getSpawnCost"(arg0: $EntityType$$Type<(any)>): $MobSpawnSettings$MobSpawnCost
 "addSpawn"(arg0: $MobCategory$$Type, arg1: $MobSpawnSettings$SpawnerData$$Type): void
get "creatureGenerationProbability"(): float
set "creatureGenerationProbability"(value: float)
get "mobCategoriesWithSpawns"(): $Set<($MobCategory)>
get "entityTypesWithSpawnCost"(): $Set<($EntityType<(any)>)>
}

export namespace $MobSpawnSettingsContext {
const probejs$$marker: never
}
export class $MobSpawnSettingsContext$$Static implements $MobSpawnSettingsContext {


 "getCreatureGenerationProbability"(): float
 "setCreatureGenerationProbability"(arg0: float): void
 "removeSpawnsOfEntityType"(entityType: $EntityType$$Type<(any)>): boolean
 "getMobCategoriesWithSpawns"(): $Set<($MobCategory)>
 "getEntityTypesWithSpawnCost"(): $Set<($EntityType<(any)>)>
 "removeSpawns"(arg0: $BiPredicate$$Type<($MobCategory), ($MobSpawnSettings$SpawnerData)>): boolean
 "clearSpawns"(): void
 "clearSpawns"(group: $MobCategory$$Type): void
 "setSpawnCost"(arg0: $EntityType$$Type<(any)>, arg1: double, arg2: double): void
 "clearSpawnCost"(arg0: $EntityType$$Type<(any)>): boolean
 "getSpawnerData"(arg0: $MobCategory$$Type): $List<($MobSpawnSettings$SpawnerData)>
 "getSpawnCost"(arg0: $EntityType$$Type<(any)>): $MobSpawnSettings$MobSpawnCost
 "addSpawn"(arg0: $MobCategory$$Type, arg1: $MobSpawnSettings$SpawnerData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobSpawnSettingsContext$$Type = ($MobSpawnSettingsContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobSpawnSettingsContext_ = $MobSpawnSettingsContext$$Type;
}}
declare module "fuzs.puzzleslib.api.biome.v1.ClimateSettingsContext" {
import {$Biome$TemperatureModifier, $Biome$TemperatureModifier$$Type} from "net.minecraft.world.level.biome.Biome$TemperatureModifier"

export interface $ClimateSettingsContext {

 "getTemperature"(): float
 "hasPrecipitation"(arg0: boolean): void
 "hasPrecipitation"(): boolean
 "setTemperatureModifier"(arg0: $Biome$TemperatureModifier$$Type): void
 "setTemperature"(arg0: float): void
 "setDownfall"(arg0: float): void
get "temperature"(): float
set "temperatureModifier"(value: $Biome$TemperatureModifier$$Type)
set "temperature"(value: float)
set "downfall"(value: float)
}

export namespace $ClimateSettingsContext {
const probejs$$marker: never
}
export class $ClimateSettingsContext$$Static implements $ClimateSettingsContext {


 "getTemperature"(): float
 "hasPrecipitation"(arg0: boolean): void
 "hasPrecipitation"(): boolean
 "setTemperatureModifier"(arg0: $Biome$TemperatureModifier$$Type): void
 "setTemperature"(arg0: float): void
 "setDownfall"(arg0: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClimateSettingsContext$$Type = ($ClimateSettingsContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClimateSettingsContext_ = $ClimateSettingsContext$$Type;
}}
declare module "fuzs.puzzleslib.api.biome.v1.BiomeModificationContext" {
import {$SpecialEffectsContext, $SpecialEffectsContext$$Type} from "fuzs.puzzleslib.api.biome.v1.SpecialEffectsContext"
import {$ClimateSettingsContext, $ClimateSettingsContext$$Type} from "fuzs.puzzleslib.api.biome.v1.ClimateSettingsContext"
import {$GenerationSettingsContext, $GenerationSettingsContext$$Type} from "fuzs.puzzleslib.api.biome.v1.GenerationSettingsContext"
import {$MobSpawnSettingsContext, $MobSpawnSettingsContext$$Type} from "fuzs.puzzleslib.api.biome.v1.MobSpawnSettingsContext"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BiomeModificationContext extends $Record {

constructor(climateSettings: $ClimateSettingsContext$$Type, specialEffects: $SpecialEffectsContext$$Type, generationSettings: $GenerationSettingsContext$$Type, mobSpawnSettings: $MobSpawnSettingsContext$$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "specialEffects"(): $SpecialEffectsContext
public "generationSettings"(): $GenerationSettingsContext
public "mobSpawnSettings"(): $MobSpawnSettingsContext
public "climateSettings"(): $ClimateSettingsContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModificationContext$$Type = ({"mobSpawnSettings"?: $MobSpawnSettingsContext$$Type, "climateSettings"?: $ClimateSettingsContext$$Type, "specialEffects"?: $SpecialEffectsContext$$Type, "generationSettings"?: $GenerationSettingsContext$$Type}) | ([mobSpawnSettings?: $MobSpawnSettingsContext$$Type, climateSettings?: $ClimateSettingsContext$$Type, specialEffects?: $SpecialEffectsContext$$Type, generationSettings?: $GenerationSettingsContext$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeModificationContext_ = $BiomeModificationContext$$Type;
}}
declare module "fuzs.puzzleslib.neoforge.mixin.client.accessor.BlockColorsNeoForgeAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"

export interface $BlockColorsNeoForgeAccessor {

 "puzzleslib$getBlockColors"(): $Map<($Block), ($BlockColor)>

(): $Map$$Type<($Block$$Type), ($BlockColor$$Type)>
}

export namespace $BlockColorsNeoForgeAccessor {
const probejs$$marker: never
}
export class $BlockColorsNeoForgeAccessor$$Static implements $BlockColorsNeoForgeAccessor {


 "puzzleslib$getBlockColors"(): $Map<($Block), ($BlockColor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockColorsNeoForgeAccessor$$Type = (() => $Map$$Type<($Block$$Type), ($BlockColor$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockColorsNeoForgeAccessor_ = $BlockColorsNeoForgeAccessor$$Type;
}}
