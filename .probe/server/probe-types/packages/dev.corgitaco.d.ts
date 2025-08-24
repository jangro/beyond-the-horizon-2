declare module "dev.corgitaco.enhancedcelestials.api.lunarevent.client.LunarEventClientSettings" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ColorSettings, $ColorSettings$$Type} from "dev.corgitaco.enhancedcelestials.api.client.ColorSettings"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $LunarEventClientSettings extends $Record {
static readonly "CODEC": $Codec<($LunarEventClientSettings)>

constructor(colorSettings: $ColorSettings$$Type, moonSize: float, moonTextureLocation: $ResourceLocation$$Type, soundTrack: $SoundEvent$$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "moonSize"(): float
public "colorSettings"(): $ColorSettings
public "soundTrack"(): $SoundEvent
public "moonTextureLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunarEventClientSettings$$Type = ({"colorSettings"?: $ColorSettings$$Type, "moonTextureLocation"?: $ResourceLocation$$Type, "moonSize"?: float, "soundTrack"?: $SoundEvent$$Type}) | ([colorSettings?: $ColorSettings$$Type, moonTextureLocation?: $ResourceLocation$$Type, moonSize?: float, soundTrack?: $SoundEvent$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunarEventClientSettings_ = $LunarEventClientSettings$$Type;
}}
declare module "dev.corgitaco.enhancedcelestials.api.lunarevent.LunarMobSpawnInfo" {
import {$MobSpawnSettings, $MobSpawnSettings$$Type} from "net.minecraft.world.level.biome.MobSpawnSettings"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $LunarMobSpawnInfo extends $Record {
static readonly "CODEC": $Codec<($LunarMobSpawnInfo)>
static readonly "DEFAULT": $LunarMobSpawnInfo

constructor(useBiomeSpawnSettings: boolean, forceSurfaceSpawning: boolean, slimesSpawnEverywhere: boolean, spawnInfo: $MobSpawnSettings$$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "slimesSpawnEverywhere"(): boolean
public "spawnInfo"(): $MobSpawnSettings
public "useBiomeSpawnSettings"(): boolean
public "forceSurfaceSpawning"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunarMobSpawnInfo$$Type = ({"useBiomeSpawnSettings"?: boolean, "spawnInfo"?: $MobSpawnSettings$$Type, "forceSurfaceSpawning"?: boolean, "slimesSpawnEverywhere"?: boolean}) | ([useBiomeSpawnSettings?: boolean, spawnInfo?: $MobSpawnSettings$$Type, forceSurfaceSpawning?: boolean, slimesSpawnEverywhere?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunarMobSpawnInfo_ = $LunarMobSpawnInfo$$Type;
}}
declare module "dev.corgitaco.enhancedcelestials.api.lunarevent.DropSettings" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $DropSettings extends $Record {
static "CODEC": $Codec<($DropSettings)>
static readonly "EMPTY": $DropSettings

constructor(dropEnhancer: $Map$$Type<($TagKey$$Type<($Item$$Type)>), (double)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "dropEnhancer"(): $Map<($TagKey<($Item)>), (double)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropSettings$$Type = ({"dropEnhancer"?: $Map$$Type<($TagKey$$Type<($Item$$Type)>), (double)>}) | ([dropEnhancer?: $Map$$Type<($TagKey$$Type<($Item$$Type)>), (double)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropSettings_ = $DropSettings$$Type;
}}
declare module "dev.corgitaco.dataanchor.data.TrackedData" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Class, $Class$$Type} from "java.lang.Class"

export interface $TrackedData<T> extends $Supplier<(T)> {

 "load"(tag: $CompoundTag$$Type): void
 "save"(): $CompoundTag
 "get"(): T

(): T
}

export namespace $TrackedData {
function fromTag<T>(tag: $Tag$$Type, clazz: $Class$$Type<(T)>): T
function toTag(obj: any): $Tag
function updateExistingFromTag<T>(tag: $Tag$$Type, obj: T): T
const probejs$$marker: never
}
export class $TrackedData$$Static<T> implements $TrackedData {


 "load"(tag: $CompoundTag$$Type): void
 "save"(): $CompoundTag
static "fromTag"<T>(tag: $Tag$$Type, clazz: $Class$$Type<(T)>): T
static "toTag"(obj: any): $Tag
static "updateExistingFromTag"<T>(tag: $Tag$$Type, obj: T): T
 "get"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackedData$$Type<T> = (() => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackedData_<T> = $TrackedData$$Type<(T)>;
}}
declare module "dev.corgitaco.enhancedcelestials.api.lunarevent.LunarEvent$SpawnRequirements" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$IntArraySet, $IntArraySet$$Type} from "it.unimi.dsi.fastutil.ints.IntArraySet"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $LunarEvent$SpawnRequirements extends $Record {
static readonly "CODEC": $Codec<($LunarEvent$SpawnRequirements)>

constructor(chance: double, minNumberOfNights: integer, validMoonPhases: $Collection$$Type<(integer)>)
constructor(chance: double, minNumberOfNights: integer, validMoonPhases: $IntArraySet$$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "chance"(): double
public "validMoonPhases"(): $IntArraySet
public "minNumberOfNights"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunarEvent$SpawnRequirements$$Type = ({"minNumberOfNights"?: integer, "chance"?: double, "validMoonPhases"?: $IntArraySet$$Type}) | ([minNumberOfNights?: integer, chance?: double, validMoonPhases?: $IntArraySet$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunarEvent$SpawnRequirements_ = $LunarEvent$SpawnRequirements$$Type;
}}
declare module "dev.corgitaco.dataanchor.data.type.chunk.ChunkBlockStateInterceptor$Internal" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ChunkBlockStateInterceptor$Internal {

 "dataAnchor$getInterceptorState"(pos: $BlockPos$$Type, original: $BlockState$$Type, lastState: $BlockState$$Type, isMoving: boolean): $BlockState
}

export namespace $ChunkBlockStateInterceptor$Internal {
const probejs$$marker: never
}
export class $ChunkBlockStateInterceptor$Internal$$Static implements $ChunkBlockStateInterceptor$Internal {


 "dataAnchor$getInterceptorState"(pos: $BlockPos$$Type, original: $BlockState$$Type, lastState: $BlockState$$Type, isMoving: boolean): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBlockStateInterceptor$Internal$$Type = ($ChunkBlockStateInterceptor$Internal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkBlockStateInterceptor$Internal_ = $ChunkBlockStateInterceptor$Internal$$Type;
}}
declare module "dev.corgitaco.enhancedcelestials.api.lunarevent.LunarMobSettings" {
import {$LunarMobSpawnInfo, $LunarMobSpawnInfo$$Type} from "dev.corgitaco.enhancedcelestials.api.lunarevent.LunarMobSpawnInfo"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$MobCategory, $MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$MobEffectInstanceBuilder, $MobEffectInstanceBuilder$$Type} from "dev.corgitaco.enhancedcelestials.api.lunarevent.MobEffectInstanceBuilder"
import {$Condition, $Condition$$Type} from "corgitaco.corgilib.entity.condition.Condition"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $LunarMobSettings extends $Record {
static readonly "CODEC": $Codec<($LunarMobSettings)>
static readonly "DEFAULT": $LunarMobSettings

constructor(spawnCategoryMultiplier: $Map$$Type<($MobCategory$$Type), (double)>, lunarMobSpawnInfo: $LunarMobSpawnInfo$$Type, effectsForEntityTag: $List$$Type<($Pair$$Type<($Condition$$Type), ($MobEffectInstanceBuilder$$Type)>)>, blockSleeping: $Condition$$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "blockSleeping"(): $Condition
public "lunarMobSpawnInfo"(): $LunarMobSpawnInfo
public "effectsForEntityTag"(): $List<($Pair<($Condition), ($MobEffectInstanceBuilder)>)>
public "spawnCategoryMultiplier"(): $Map<($MobCategory), (double)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunarMobSettings$$Type = ({"lunarMobSpawnInfo"?: $LunarMobSpawnInfo$$Type, "effectsForEntityTag"?: $List$$Type<($Pair$$Type<($Condition$$Type), ($MobEffectInstanceBuilder$$Type)>)>, "blockSleeping"?: $Condition$$Type, "spawnCategoryMultiplier"?: $Map$$Type<($MobCategory$$Type), (double)>}) | ([lunarMobSpawnInfo?: $LunarMobSpawnInfo$$Type, effectsForEntityTag?: $List$$Type<($Pair$$Type<($Condition$$Type), ($MobEffectInstanceBuilder$$Type)>)>, blockSleeping?: $Condition$$Type, spawnCategoryMultiplier?: $Map$$Type<($MobCategory$$Type), (double)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunarMobSettings_ = $LunarMobSettings$$Type;
}}
declare module "dev.corgitaco.dataanchor.data.registry.TrackedDataKey" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"

export class $TrackedDataKey<T extends $TrackedData<(any)>> {


public static "of"<E, T extends $TrackedData<(E)>, KEY extends $TrackedDataKey<(T)>>(dataRegistry: $TrackedDataRegistry$$Type<(E), (T)>, clazz: $Class$$Type<(T)>, id: $ResourceLocation$$Type): KEY
public "getId"(): $ResourceLocation
public static "fromID"<E, T extends $TrackedData<(E)>>(dataRegistry: $TrackedDataRegistry$$Type<(E), (T)>, id: $ResourceLocation$$Type): $TrackedDataKey<(T)>
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackedDataKey$$Type<T> = ($TrackedDataKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackedDataKey_<T> = $TrackedDataKey$$Type<(T)>;
}}
declare module "dev.corgitaco.dataanchor.data.TrackedDataContainer" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$TrackedDataKey, $TrackedDataKey$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataKey"

export interface $TrackedDataContainer<O, T extends $TrackedData<(O)>> {

 "dataAnchor$getTrackedData"<E extends T>(arg0: $TrackedDataKey$$Type<(E)>): $Optional<(E)>
 "dataAnchor$createTrackedData"(): void
 "dataAnchor$getTrackedDataKeys"(): $Collection<($TrackedDataKey<(T)>)>
}

export namespace $TrackedDataContainer {
function makeBasicContainer<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
function makeBasicContainer<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
const probejs$$marker: never
}
export class $TrackedDataContainer$$Static<O, T extends $TrackedData<(O)>> implements $TrackedDataContainer {


 "dataAnchor$getTrackedData"<E extends T>(arg0: $TrackedDataKey$$Type<(E)>): $Optional<(E)>
 "dataAnchor$createTrackedData"(): void
 "dataAnchor$getTrackedDataKeys"(): $Collection<($TrackedDataKey<(T)>)>
static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackedDataContainer$$Type<O, T> = ($TrackedDataContainer<(O), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackedDataContainer_<O, T> = $TrackedDataContainer$$Type<(O), (T)>;
}}
declare module "dev.corgitaco.enhancedcelestials.api.lunarevent.LunarEvent" {
import {$DropSettings, $DropSettings$$Type} from "dev.corgitaco.enhancedcelestials.api.lunarevent.DropSettings"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LunarEvent$SpawnRequirements, $LunarEvent$SpawnRequirements$$Type} from "dev.corgitaco.enhancedcelestials.api.lunarevent.LunarEvent$SpawnRequirements"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LunarMobSpawnInfo, $LunarMobSpawnInfo$$Type} from "dev.corgitaco.enhancedcelestials.api.lunarevent.LunarMobSpawnInfo"
import {$LunarMobSettings, $LunarMobSettings$$Type} from "dev.corgitaco.enhancedcelestials.api.lunarevent.LunarMobSettings"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$MobCategory, $MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$LunarEventClientSettings, $LunarEventClientSettings$$Type} from "dev.corgitaco.enhancedcelestials.api.lunarevent.client.LunarEventClientSettings"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LunarTextComponents$Notification, $LunarTextComponents$Notification$$Type} from "dev.corgitaco.enhancedcelestials.api.lunarevent.LunarTextComponents$Notification"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LunarTextComponents, $LunarTextComponents$$Type} from "dev.corgitaco.enhancedcelestials.api.lunarevent.LunarTextComponents"

export class $LunarEvent {
static readonly "DIRECT_CODEC": $Codec<($LunarEvent)>

constructor(eventChancesByDimension: $Map$$Type<($ResourceKey$$Type<($Level$$Type)>), ($LunarEvent$SpawnRequirements$$Type)>, clientSettings: $LunarEventClientSettings$$Type, textComponents: $LunarTextComponents$$Type, lunarMobSettings: $LunarMobSettings$$Type, dropSettings: $DropSettings$$Type)
constructor(eventChancesByDimension: $Map$$Type<($ResourceKey$$Type<($Level$$Type)>), ($LunarEvent$SpawnRequirements$$Type)>, clientSettings: $LunarEventClientSettings$$Type, textComponents: $LunarTextComponents$$Type, lunarMobSettings: $LunarMobSettings$$Type, dropSettings: $DropSettings$$Type, anvilCostAmplifier: double, enchantmentTableCostAmplifier: double, xpAmplifier: double, beaconRadiusAmplifier: double)

public "getEventChancesByDimension"(): $Map<($ResourceKey<($Level)>), ($LunarEvent$SpawnRequirements)>
public "enchantmentTableCostAmplifier"(): double
public "blockSleeping"(entity: $LivingEntity$$Type): boolean
public "xpAmplifier"(): double
public "livingEntityTick"(entity: $LivingEntity$$Type): void
public "onBlockItemDrop"(world: $ServerLevel$$Type, itemStack: $ItemStack$$Type): void
public "getLunarMobSettings"(): $LunarMobSettings
public "beaconRadiusAmplifier"(): double
public "anvilCostAmplifier"(): double
public "startNotification"(): $LunarTextComponents$Notification
public "endNotification"(): $LunarTextComponents$Notification
public "getClientSettings"(): $LunarEventClientSettings
public "getLunarSpawner"(): $LunarMobSpawnInfo
public "getDropSettings"(): $DropSettings
public "getTextComponents"(): $LunarTextComponents
public "getSpawnMultiplierForMonsterCategory"(classification: $MobCategory$$Type): double
get "eventChancesByDimension"(): $Map<($ResourceKey<($Level)>), ($LunarEvent$SpawnRequirements)>
get "lunarMobSettings"(): $LunarMobSettings
get "clientSettings"(): $LunarEventClientSettings
get "lunarSpawner"(): $LunarMobSpawnInfo
get "dropSettings"(): $DropSettings
get "textComponents"(): $LunarTextComponents
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnhancedcelestialsLunarEvent
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnhancedcelestialsLunarEventTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunarEvent$$Type = (Special.EnhancedcelestialsLunarEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunarEvent_ = $LunarEvent$$Type;
}}
declare module "dev.corgitaco.enhancedcelestials.api.lunarevent.MobEffectInstanceBuilder" {
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $MobEffectInstanceBuilder extends $Record {
static readonly "CODEC": $Codec<($MobEffectInstanceBuilder)>

constructor(effect: $MobEffect$$Type, duration: integer, amplifier: integer, ambient: boolean, visible: boolean, showIcon: boolean)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "duration"(): integer
public "visible"(): boolean
public "showIcon"(): boolean
public "ambient"(): boolean
public "amplifier"(): integer
public "effect"(): $MobEffect
public "makeInstance"(): $MobEffectInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectInstanceBuilder$$Type = ({"duration"?: integer, "amplifier"?: integer, "visible"?: boolean, "showIcon"?: boolean, "ambient"?: boolean, "effect"?: $MobEffect$$Type}) | ([duration?: integer, amplifier?: integer, visible?: boolean, showIcon?: boolean, ambient?: boolean, effect?: $MobEffect$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobEffectInstanceBuilder_ = $MobEffectInstanceBuilder$$Type;
}}
declare module "dev.corgitaco.enhancedcelestials.api.lunarevent.LunarTextComponents" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$LunarTextComponents$Notification, $LunarTextComponents$Notification$$Type} from "dev.corgitaco.enhancedcelestials.api.lunarevent.LunarTextComponents$Notification"
import {$CustomTranslationTextComponent, $CustomTranslationTextComponent$$Type} from "dev.corgitaco.enhancedcelestials.util.CustomTranslationTextComponent"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $LunarTextComponents extends $Record {
static readonly "CODEC": $Codec<($LunarTextComponents)>

constructor(name: $CustomTranslationTextComponent$$Type, riseNotification: $Optional$$Type<($LunarTextComponents$Notification$$Type)>, setNotification: $Optional$$Type<($LunarTextComponents$Notification$$Type)>)
constructor(name: $CustomTranslationTextComponent$$Type, riseNotification: $LunarTextComponents$Notification$$Type, setNotification: $LunarTextComponents$Notification$$Type)
constructor(name: $CustomTranslationTextComponent$$Type, riseNotification: $CustomTranslationTextComponent$$Type, setNotification: $CustomTranslationTextComponent$$Type)

public "name"(): $CustomTranslationTextComponent
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "setNotification"(): $Optional<($LunarTextComponents$Notification)>
public "riseNotification"(): $Optional<($LunarTextComponents$Notification)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunarTextComponents$$Type = ({"setNotification"?: ($LunarTextComponents$Notification$$Type)?, "riseNotification"?: ($LunarTextComponents$Notification$$Type)?, "name"?: $CustomTranslationTextComponent$$Type}) | ([setNotification?: ($LunarTextComponents$Notification$$Type)?, riseNotification?: ($LunarTextComponents$Notification$$Type)?, name?: $CustomTranslationTextComponent$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunarTextComponents_ = $LunarTextComponents$$Type;
}}
declare module "dev.corgitaco.ohthetreesyoullgrow.world.level.levelgen.feature.TreeFromStructureNBTFeature" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$GeodeConfiguration, $GeodeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.GeodeConfiguration"
import {$SeagrassFeature, $SeagrassFeature$$Type} from "net.minecraft.world.level.levelgen.feature.SeagrassFeature"
import {$SpringConfiguration, $SpringConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpringConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TwistingVinesConfig"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceSphereConfiguration"
import {$StructurePlaceSettings, $StructurePlaceSettings$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructurePlaceSettings"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NoneFeatureConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.UnderwaterMagmaConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$$Type} from "net.minecraft.world.level.levelgen.feature.LakeFeature$Configuration"
import {$BonusChestFeature, $BonusChestFeature$$Type} from "net.minecraft.world.level.levelgen.feature.BonusChestFeature"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.NetherForestVegetationConfig"
import {$Set, $Set$$Type} from "java.util.Set"
import {$OreConfiguration, $OreConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomBooleanFeatureConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomPatchConfiguration"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleBlockConfiguration"
import {$LayerConfiguration, $LayerConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ReplaceBlockConfiguration"
import {$Feature, $Feature$$Type} from "net.minecraft.world.level.levelgen.feature.Feature"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockColumnConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.FossilFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.LargeDripstoneConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ColumnFeatureConfiguration"
import {$TreeFromStructureNBTConfig, $TreeFromStructureNBTConfig$$Type} from "dev.corgitaco.ohthetreesyoullgrow.world.level.levelgen.feature.configurations.TreeFromStructureNBTConfig"
import {$TreeConfiguration, $TreeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.TreeConfiguration"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.PointedDripstoneConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SculkPatchConfiguration"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.VegetationPatchConfiguration"
import {$List, $List$$Type} from "java.util.List"
import {$BlockStateConfiguration, $BlockStateConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockStateConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.BlockPileConfiguration"
import {$TreeDecorator, $TreeDecorator$$Type} from "net.minecraft.world.level.levelgen.feature.treedecorators.TreeDecorator"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.EndGatewayConfiguration"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$BlockPredicate, $BlockPredicate$$Type} from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"
import {$RootSystemConfiguration, $RootSystemConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RootSystemConfiguration"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CountConfiguration, $CountConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.CountConfiguration"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.RandomFeatureConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.HugeMushroomFeatureConfiguration"
import {$StructureTemplate$Palette, $StructureTemplate$Palette$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$Palette"
import {$WorldGenLevel, $WorldGenLevel$$Type} from "net.minecraft.world.level.WorldGenLevel"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DeltaFeatureConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.MultifaceGrowthConfiguration"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.ProbabilityFeatureConfiguration"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$FeaturePlaceContext, $FeaturePlaceContext$$Type} from "net.minecraft.world.level.levelgen.feature.FeaturePlaceContext"
import {$SpikeConfiguration, $SpikeConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SpikeConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.HugeFungusConfiguration"
import {$DiskConfiguration, $DiskConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DiskConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.SimpleRandomFeatureConfiguration"
import {$BlockStateProvider, $BlockStateProvider$$Type} from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import {$IllegalArgumentException, $IllegalArgumentException$$Type} from "java.lang.IllegalArgumentException"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.DripstoneClusterConfiguration"

export class $TreeFromStructureNBTFeature extends $Feature<($TreeFromStructureNBTConfig)> {
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

constructor($$0: $Codec$$Type<($TreeFromStructureNBTConfig$$Type)>)

public "place"(featurePlaceContext: $FeaturePlaceContext$$Type<($TreeFromStructureNBTConfig$$Type)>): boolean
public static "placeLeavesWithCalculatedDistanceAndRotation"(leavesProvider: $BlockStateProvider$$Type, level: $WorldGenLevel$$Type, origin: $BlockPos$$Type, random: $RandomSource$$Type, placeSettings: $StructurePlaceSettings$$Type, leaves: $List$$Type<($StructureTemplate$StructureBlockInfo$$Type)>, leavePositions: $Map$$Type<($BlockPos$$Type), ($BlockState$$Type)>, canopyCenterOffset: $BlockPos$$Type, leavesPlacementFilter: $BlockPredicate$$Type): void
public static "getStructureInfosInStructurePalletteFromBlockList"(blocks: $Iterable$$Type<($Block$$Type)>, palette: $StructureTemplate$Palette$$Type): $List<($StructureTemplate$StructureBlockInfo)>
public static "noTreePartPresent"(location: $ResourceLocation$$Type): $IllegalArgumentException
public static "fillTrunkPositions"(logProvider: $BlockStateProvider$$Type, leavesProvider: $BlockStateProvider$$Type, config: $TreeFromStructureNBTConfig$$Type, level: $WorldGenLevel$$Type, randomSource: $RandomSource$$Type, origin: $BlockPos$$Type, placeSettings: $StructurePlaceSettings$$Type, trunkBasePalette: $StructureTemplate$Palette$$Type, centerOffset: $BlockPos$$Type, logs: $List$$Type<($StructureTemplate$StructureBlockInfo$$Type)>, logBuilders: $List$$Type<($StructureTemplate$StructureBlockInfo$$Type)>, leavePositions: $Map$$Type<($BlockPos$$Type), ($BlockState$$Type)>, trunkPositions: $Map$$Type<($BlockPos$$Type), ($BlockState$$Type)>, maxTrunkBuildingDepth: integer): void
public static "fillCanopyPositions"(logProvider: $BlockStateProvider$$Type, leavesProvider: $BlockStateProvider$$Type, config: $TreeFromStructureNBTConfig$$Type, level: $WorldGenLevel$$Type, randomSource: $RandomSource$$Type, origin: $BlockPos$$Type, placeSettings: $StructurePlaceSettings$$Type, randomCanopyPalette: $StructureTemplate$Palette$$Type, leavePositions: $Map$$Type<($BlockPos$$Type), ($BlockState$$Type)>, trunkPositions: $Map$$Type<($BlockPos$$Type), ($BlockState$$Type)>, trunkLength: integer): boolean
public static "placeAdditional"(config: $TreeFromStructureNBTConfig$$Type, level: $WorldGenLevel$$Type, origin: $BlockPos$$Type, placeSettings: $StructurePlaceSettings$$Type, palette: $StructureTemplate$Palette$$Type, centerOffset: $BlockPos$$Type): void
public static "placeTreeDecorations"(treeDecorators: $Iterable$$Type<($TreeDecorator$$Type)>, level: $WorldGenLevel$$Type, random: $RandomSource$$Type, leavePositions: $Set$$Type<($BlockPos$$Type)>, trunkPositions: $Set$$Type<($BlockPos$$Type)>, decorationPositions: $Set$$Type<($BlockPos$$Type)>): void
public static "placeLogsWithRotation"(logProvider: $BlockStateProvider$$Type, level: $WorldGenLevel$$Type, random: $RandomSource$$Type, origin: $BlockPos$$Type, placeSettings: $StructurePlaceSettings$$Type, centerOffset: $BlockPos$$Type, logs: $List$$Type<($StructureTemplate$StructureBlockInfo$$Type)>, trunkPositions: $Map$$Type<($BlockPos$$Type), ($BlockState$$Type)>): void
public static "getTransformedState"(modifiedPos: $BlockPos$$Type, state: $BlockState$$Type, nbtState: $BlockState$$Type, rotation: $Rotation$$Type, level: $WorldGenLevel$$Type): $BlockState
public static "getModifiedPos"(settings: $StructurePlaceSettings$$Type, placing: $StructureTemplate$StructureBlockInfo$$Type, partCenter: $BlockPos$$Type, featureOrigin: $BlockPos$$Type): $BlockPos
public static "isOnGround"(maxLogDepth: integer, level: $WorldGenLevel$$Type, pos: $BlockPos$$Type, growableOn: $BlockPredicate$$Type): boolean
public static "fillLogsUnder"(logProvider: $BlockStateProvider$$Type, level: $WorldGenLevel$$Type, random: $RandomSource$$Type, origin: $BlockPos$$Type, placeSettings: $StructurePlaceSettings$$Type, centerOffset: $BlockPos$$Type, logBuilders: $List$$Type<($StructureTemplate$StructureBlockInfo$$Type)>, maxTrunkBuildingDepth: integer, groundFilter: $BlockPredicate$$Type, trunkPositions: $Map$$Type<($BlockPos$$Type), ($BlockState$$Type)>): void
public static "intersectTrunk"(logProvider: $BlockStateProvider$$Type, level: $WorldGenLevel$$Type, random: $RandomSource$$Type, origin: $BlockPos$$Type, placeSettings: $StructurePlaceSettings$$Type, centerOffset: $BlockPos$$Type, logBuilders: $List$$Type<($StructureTemplate$StructureBlockInfo$$Type)>, maxTrunkBuildingDepth: integer, trunkPositions: $Map$$Type<($BlockPos$$Type), ($BlockState$$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeFromStructureNBTFeature$$Type = ($TreeFromStructureNBTFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeFromStructureNBTFeature_ = $TreeFromStructureNBTFeature$$Type;
}}
declare module "dev.corgitaco.dataanchor.data.InternalDirtyMarker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $InternalDirtyMarker {

 "dataAnchor$markDirty"(): void
 "dataAnchor$clearDirty"(): void
}

export namespace $InternalDirtyMarker {
const probejs$$marker: never
}
export class $InternalDirtyMarker$$Static implements $InternalDirtyMarker {


 "dataAnchor$markDirty"(): void
 "dataAnchor$clearDirty"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InternalDirtyMarker$$Type = ($InternalDirtyMarker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InternalDirtyMarker_ = $InternalDirtyMarker$$Type;
}}
declare module "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry$TrackedDataFactory" {
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataKey, $TrackedDataKey$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataKey"

export interface $TrackedDataRegistry$TrackedDataFactory<T, D extends $TrackedData<(T)>> {

 "create"(arg0: $TrackedDataKey$$Type<(D)>, arg1: T): D

(arg0: $TrackedDataKey<(D)>, arg1: T): D
}

export namespace $TrackedDataRegistry$TrackedDataFactory {
const probejs$$marker: never
}
export class $TrackedDataRegistry$TrackedDataFactory$$Static<T, D extends $TrackedData<(T)>> implements $TrackedDataRegistry$TrackedDataFactory {


 "create"(arg0: $TrackedDataKey$$Type<(D)>, arg1: T): D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackedDataRegistry$TrackedDataFactory$$Type<T, D> = ((arg0: $TrackedDataKey<(D)>, arg1: T) => D);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackedDataRegistry$TrackedDataFactory_<T, D> = $TrackedDataRegistry$TrackedDataFactory$$Type<(T), (D)>;
}}
declare module "dev.corgitaco.enhancedcelestials.api.client.ColorSettings" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"

export class $ColorSettings {
static readonly "CODEC": $Codec<($ColorSettings)>

constructor(skyLightHexColor: string, moonTextureHexColor: string)
constructor(skyLightColor: integer, moonTextureColor: integer)

public static "tryParseColor"(input: string): integer
public "getGLMoonColor"(): $Vector3f
public "getMoonTextureColor"(): integer
public "getSkyLightColor"(): integer
public "getGLSkyLightColor"(): $Vector3f
get "gLMoonColor"(): $Vector3f
get "moonTextureColor"(): integer
get "skyLightColor"(): integer
get "gLSkyLightColor"(): $Vector3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorSettings$$Type = ($ColorSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorSettings_ = $ColorSettings$$Type;
}}
declare module "dev.corgitaco.enhancedcelestials.api.lunarevent.LunarEventProbabilities" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$LunarEvent, $LunarEvent$$Type} from "dev.corgitaco.enhancedcelestials.api.lunarevent.LunarEvent"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$LunarEvent$SpawnRequirements, $LunarEvent$SpawnRequirements$$Type} from "dev.corgitaco.enhancedcelestials.api.lunarevent.LunarEvent$SpawnRequirements"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $LunarEventProbabilities extends $Record {
static "CODEC": $Codec<($LunarEventProbabilities)>

constructor(priority: integer, probabilitiesByEvent: $Map$$Type<($ResourceKey$$Type<($LunarEvent$$Type)>), ($Map$$Type<($ResourceKey$$Type<($Level$$Type)>), ($LunarEvent$SpawnRequirements$$Type)>)>)

public "priority"(): integer
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "probabilitiesByEvent"(): $Map<($ResourceKey<($LunarEvent)>), ($Map<($ResourceKey<($Level)>), ($LunarEvent$SpawnRequirements)>)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnhancedcelestialsLunarEventProbability
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnhancedcelestialsLunarEventProbabilityTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunarEventProbabilities$$Type = (Special.EnhancedcelestialsLunarEventProbability) | ({"probabilitiesByEvent"?: $Map$$Type<($ResourceKey$$Type<($LunarEvent$$Type)>), ($Map$$Type<($ResourceKey$$Type<($Level$$Type)>), ($LunarEvent$SpawnRequirements$$Type)>)>, "priority"?: integer}) | ([probabilitiesByEvent?: $Map$$Type<($ResourceKey$$Type<($LunarEvent$$Type)>), ($Map$$Type<($ResourceKey$$Type<($Level$$Type)>), ($LunarEvent$SpawnRequirements$$Type)>)>, priority?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunarEventProbabilities_ = $LunarEventProbabilities$$Type;
}}
declare module "dev.corgitaco.ohthetreesyoullgrow.world.level.levelgen.feature.configurations.TreeFromStructureNBTConfig" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ConfiguredFeature, $ConfiguredFeature$$Type} from "net.minecraft.world.level.levelgen.feature.ConfiguredFeature"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntProvider, $IntProvider$$Type} from "net.minecraft.util.valueproviders.IntProvider"
import {$FeatureConfiguration, $FeatureConfiguration$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.FeatureConfiguration"
import {$TreeDecorator, $TreeDecorator$$Type} from "net.minecraft.world.level.levelgen.feature.treedecorators.TreeDecorator"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockPredicate, $BlockPredicate$$Type} from "net.minecraft.world.level.levelgen.blockpredicates.BlockPredicate"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockStateProvider, $BlockStateProvider$$Type} from "net.minecraft.world.level.levelgen.feature.stateproviders.BlockStateProvider"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $TreeFromStructureNBTConfig extends $Record implements $FeatureConfiguration {
static readonly "BLOCK_SET_CODEC": $Codec<($Set<($Block)>)>
static readonly "CODEC": $Codec<($TreeFromStructureNBTConfig)>

constructor(baseLocation: $ResourceLocation$$Type, canopyLocation: $ResourceLocation$$Type, height: $IntProvider$$Type, logProvider: $BlockStateProvider$$Type, leavesProvider: $BlockStateProvider$$Type, logTarget: $Collection$$Type<($Block$$Type)>, leavesTarget: $List$$Type<($Block$$Type)>, growableOn: $TagKey$$Type<($Block)>, maxLogDepth: integer, treeDecorators: $List$$Type<($TreeDecorator$$Type)>, isSapling: boolean)
constructor(baseLocation: $ResourceLocation$$Type, canopyLocation: $ResourceLocation$$Type, height: $IntProvider$$Type, logProvider: $BlockStateProvider$$Type, leavesProvider: $BlockStateProvider$$Type, logTarget: $Block$$Type, leavesTarget: $Block$$Type, growableOn: $TagKey$$Type<($Block)>, maxLogDepth: integer, treeDecorators: $List$$Type<($TreeDecorator$$Type)>, isSapling: boolean)
constructor(baseLocation: $ResourceLocation$$Type, canopyLocation: $ResourceLocation$$Type, height: $IntProvider$$Type, logProvider: $BlockStateProvider$$Type, leavesProvider: $BlockStateProvider$$Type, logTarget: $Block$$Type, leavesTarget: $Block$$Type, growableOn: $TagKey$$Type<($Block)>, maxLogDepth: integer, isSapling: boolean)
constructor(baseLocation: $ResourceLocation$$Type, canopyLocation: $ResourceLocation$$Type, height: $IntProvider$$Type, logProvider: $BlockStateProvider$$Type, leavesProvider: $BlockStateProvider$$Type, logTarget: $Supplier$$Type<($Block$$Type)>, leavesTarget: $Supplier$$Type<($Block$$Type)>, growableOn: $TagKey$$Type<($Block)>, maxLogDepth: integer, treeDecorators: $List$$Type<($TreeDecorator$$Type)>, isSapling: boolean)
constructor(baseLocation: $ResourceLocation$$Type, canopyLocation: $ResourceLocation$$Type, height: $IntProvider$$Type, logProvider: $BlockStateProvider$$Type, leavesProvider: $BlockStateProvider$$Type, logTarget: $Set$$Type<($Block$$Type)>, leavesTarget: $Set$$Type<($Block$$Type)>, growableOn: $BlockPredicate$$Type, leavesPlacementFilter: $BlockPredicate$$Type, maxLogDepth: integer, treeDecorators: $List$$Type<($TreeDecorator$$Type)>, placeFromNBT: $Set$$Type<($Block$$Type)>, isSapling: boolean)
constructor(baseLocation: $ResourceLocation$$Type, canopyLocation: $ResourceLocation$$Type, height: $IntProvider$$Type, logProvider: $BlockStateProvider$$Type, leavesProvider: $BlockStateProvider$$Type, logTarget: $Collection$$Type<($Block$$Type)>, leavesTarget: $List$$Type<($Block$$Type)>, growableOn: $TagKey$$Type<($Block)>, maxLogDepth: integer, treeDecorators: $List$$Type<($TreeDecorator$$Type)>)
constructor(baseLocation: $ResourceLocation$$Type, canopyLocation: $ResourceLocation$$Type, height: $IntProvider$$Type, logProvider: $BlockStateProvider$$Type, leavesProvider: $BlockStateProvider$$Type, logTarget: $Block$$Type, leavesTarget: $Block$$Type, growableOn: $TagKey$$Type<($Block)>, maxLogDepth: integer, treeDecorators: $List$$Type<($TreeDecorator$$Type)>)
constructor(baseLocation: $ResourceLocation$$Type, canopyLocation: $ResourceLocation$$Type, height: $IntProvider$$Type, logProvider: $BlockStateProvider$$Type, leavesProvider: $BlockStateProvider$$Type, logTarget: $Block$$Type, leavesTarget: $Block$$Type, growableOn: $TagKey$$Type<($Block)>, maxLogDepth: integer)
constructor(baseLocation: $ResourceLocation$$Type, canopyLocation: $ResourceLocation$$Type, height: $IntProvider$$Type, logProvider: $BlockStateProvider$$Type, leavesProvider: $BlockStateProvider$$Type, logTarget: $Supplier$$Type<($Block$$Type)>, leavesTarget: $Supplier$$Type<($Block$$Type)>, growableOn: $TagKey$$Type<($Block)>, maxLogDepth: integer, treeDecorators: $List$$Type<($TreeDecorator$$Type)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "height"(): $IntProvider
public "leavesPlacementFilter"(): $BlockPredicate
public "logProvider"(): $BlockStateProvider
public "leavesProvider"(): $BlockStateProvider
public "baseLocation"(): $ResourceLocation
public "canopyLocation"(): $ResourceLocation
public "logTarget"(): $Set<($Block)>
public "maxLogDepth"(): integer
public "growableOn"(): $BlockPredicate
public "isSapling"(): boolean
public "treeDecorators"(): $List<($TreeDecorator)>
public "placeFromNBT"(): $Set<($Block)>
public "leavesTarget"(): $Set<($Block)>
public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "sapling"(): boolean
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeFromStructureNBTConfig$$Type = ({"placeFromNBT"?: $Set$$Type<($Block$$Type)>, "leavesProvider"?: $BlockStateProvider$$Type, "maxLogDepth"?: integer, "growableOn"?: $BlockPredicate$$Type, "canopyLocation"?: $ResourceLocation$$Type, "isSapling"?: boolean, "logTarget"?: $Set$$Type<($Block$$Type)>, "logProvider"?: $BlockStateProvider$$Type, "leavesPlacementFilter"?: $BlockPredicate$$Type, "height"?: $IntProvider$$Type, "baseLocation"?: $ResourceLocation$$Type, "leavesTarget"?: $Set$$Type<($Block$$Type)>, "treeDecorators"?: $List$$Type<($TreeDecorator$$Type)>}) | ([placeFromNBT?: $Set$$Type<($Block$$Type)>, leavesProvider?: $BlockStateProvider$$Type, maxLogDepth?: integer, growableOn?: $BlockPredicate$$Type, canopyLocation?: $ResourceLocation$$Type, isSapling?: boolean, logTarget?: $Set$$Type<($Block$$Type)>, logProvider?: $BlockStateProvider$$Type, leavesPlacementFilter?: $BlockPredicate$$Type, height?: $IntProvider$$Type, baseLocation?: $ResourceLocation$$Type, leavesTarget?: $Set$$Type<($Block$$Type)>, treeDecorators?: $List$$Type<($TreeDecorator$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeFromStructureNBTConfig_ = $TreeFromStructureNBTConfig$$Type;
}}
declare module "dev.corgitaco.enhancedcelestials.api.lunarevent.LunarTextComponents$Notification" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$LunarTextComponents$NotificationType, $LunarTextComponents$NotificationType$$Type} from "dev.corgitaco.enhancedcelestials.api.lunarevent.LunarTextComponents$NotificationType"
import {$CustomTranslationTextComponent, $CustomTranslationTextComponent$$Type} from "dev.corgitaco.enhancedcelestials.util.CustomTranslationTextComponent"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $LunarTextComponents$Notification extends $Record {
static readonly "CODEC": $Codec<($LunarTextComponents$Notification)>

constructor(customTranslationTextComponent: $CustomTranslationTextComponent$$Type, notificationType: $LunarTextComponents$NotificationType$$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "customTranslationTextComponent"(): $CustomTranslationTextComponent
public "notificationType"(): $LunarTextComponents$NotificationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunarTextComponents$Notification$$Type = ({"customTranslationTextComponent"?: $CustomTranslationTextComponent$$Type, "notificationType"?: $LunarTextComponents$NotificationType$$Type}) | ([customTranslationTextComponent?: $CustomTranslationTextComponent$$Type, notificationType?: $LunarTextComponents$NotificationType$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunarTextComponents$Notification_ = $LunarTextComponents$Notification$$Type;
}}
declare module "dev.corgitaco.ohthetreesyoullgrow.world.level.chunk.RandomTickScheduler" {
import {$List, $List$$Type} from "java.util.List"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $RandomTickScheduler {

 "getScheduledRandomTicks"(): $List<($BlockPos)>
 "scheduleRandomTick"(arg0: $BlockPos$$Type): void
get "scheduledRandomTicks"(): $List<($BlockPos)>
}

export namespace $RandomTickScheduler {
const probejs$$marker: never
}
export class $RandomTickScheduler$$Static implements $RandomTickScheduler {


 "getScheduledRandomTicks"(): $List<($BlockPos)>
 "scheduleRandomTick"(arg0: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomTickScheduler$$Type = ($RandomTickScheduler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RandomTickScheduler_ = $RandomTickScheduler$$Type;
}}
declare module "dev.corgitaco.enhancedcelestials.api.lunarevent.LunarDimensionSettings" {
import {$LunarEvent, $LunarEvent$$Type} from "dev.corgitaco.enhancedcelestials.api.lunarevent.LunarEvent"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $LunarDimensionSettings extends $Record {
static readonly "CODEC": $Codec<($LunarDimensionSettings)>

constructor(defaultEvent: $ResourceKey$$Type<($LunarEvent)>, trackedPastEventsMaxCount: long, dayLength: long, yearLengthInDays: long, minDaysBetweenEvents: long, maxDaysBetweenEvents: long, requiresClearSkies: boolean)

public "defaultEvent"(): $ResourceKey<($LunarEvent)>
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "yearLengthInDays"(): long
public "maxDaysBetweenEvents"(): long
public "requiresClearSkies"(): boolean
public "minDaysBetweenEvents"(): long
public "dayLength"(): long
public "trackedPastEventsMaxCount"(): long
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.EnhancedcelestialsLunarDimensionSettings
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.EnhancedcelestialsLunarDimensionSettingsTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LunarDimensionSettings$$Type = (Special.EnhancedcelestialsLunarDimensionSettings) | ({"defaultEvent"?: $ResourceKey$$Type<($LunarEvent)>, "minDaysBetweenEvents"?: long, "yearLengthInDays"?: long, "maxDaysBetweenEvents"?: long, "dayLength"?: long, "trackedPastEventsMaxCount"?: long, "requiresClearSkies"?: boolean}) | ([defaultEvent?: $ResourceKey$$Type<($LunarEvent)>, minDaysBetweenEvents?: long, yearLengthInDays?: long, maxDaysBetweenEvents?: long, dayLength?: long, trackedPastEventsMaxCount?: long, requiresClearSkies?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunarDimensionSettings_ = $LunarDimensionSettings$$Type;
}}
declare module "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry$TrackedDataFactory, $TrackedDataRegistry$TrackedDataFactory$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry$TrackedDataFactory"
import {$TrackedDataKey, $TrackedDataKey$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataKey"

export class $TrackedDataRegistry<O, T extends $TrackedData<(O)>> {
static readonly "REGISTRIES": $Map<($ResourceLocation), ($TrackedDataRegistry<(any), (any)>)>


public "getContainer"(o: O): $TrackedDataContainer<(O), (T)>
public "get"<E extends T>(key: $TrackedDataKey$$Type<(E)>, o: O): $Optional<(E)>
public static "of"<O, T extends $TrackedData<(O)>>(id: $ResourceLocation$$Type): $TrackedDataRegistry<(O), (T)>
public "register"<E extends T>(id: $ResourceLocation$$Type, clazz: $Class$$Type<(E)>, factory: $TrackedDataRegistry$TrackedDataFactory$$Type<(O), (E)>): $TrackedDataKey<(E)>
public "register"<F extends T, K extends $TrackedDataKey<(F)>>(key: K, factory: $TrackedDataRegistry$TrackedDataFactory$$Type<(O), (F)>): void
public "factories"(): $Map<($TrackedDataKey<(T)>), ($TrackedDataRegistry$TrackedDataFactory<(O), (T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackedDataRegistry$$Type<O, T> = ($TrackedDataRegistry<(O), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackedDataRegistry_<O, T> = $TrackedDataRegistry$$Type<(O), (T)>;
}}
declare module "dev.corgitaco.enhancedcelestials.api.lunarevent.LunarTextComponents$NotificationType" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $LunarTextComponents$NotificationType extends $Enum<($LunarTextComponents$NotificationType)> implements $StringRepresentable {
static readonly "CODEC": $Codec<($LunarTextComponents$NotificationType)>
static readonly "CHAT": $LunarTextComponents$NotificationType
static readonly "HOT_BAR": $LunarTextComponents$NotificationType
static readonly "NONE": $LunarTextComponents$NotificationType


public static "values"(): ($LunarTextComponents$NotificationType)[]
public static "valueOf"(name: string): $LunarTextComponents$NotificationType
public static "byName"(name: string): $LunarTextComponents$NotificationType
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
export type $LunarTextComponents$NotificationType$$Type = (("chat") | ("none") | ("hot_bar"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LunarTextComponents$NotificationType_ = $LunarTextComponents$NotificationType$$Type;
}}
declare module "dev.corgitaco.enhancedcelestials.util.CustomTranslationTextComponent" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $CustomTranslationTextComponent {
static readonly "CODEC": $Codec<($CustomTranslationTextComponent)>
static readonly "DEFAULT": $CustomTranslationTextComponent

constructor(translationKey: string, style: $Style$$Type, args: $List$$Type<($CustomTranslationTextComponent$$Type)>)
constructor(translationKey: string, style: $Style$$Type, ...args: ($CustomTranslationTextComponent$$Type)[])
constructor(translationKey: string, ...args: ($CustomTranslationTextComponent$$Type)[])

public "getKey"(): string
public "getStyle"(): $Style
public "getComponent"(): $Component
get "key"(): string
get "style"(): $Style
get "component"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTranslationTextComponent$$Type = ($CustomTranslationTextComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTranslationTextComponent_ = $CustomTranslationTextComponent$$Type;
}}
