declare module "com.teamabnormals.blueprint.core.endimator.effects.EndimationEffect" {
import {$ConfiguredEndimationEffect, $ConfiguredEndimationEffect$$Type} from "com.teamabnormals.blueprint.core.endimator.effects.ConfiguredEndimationEffect"
import {$EndimationEffectSource, $EndimationEffectSource$$Type} from "com.teamabnormals.blueprint.core.endimator.effects.EndimationEffectSource"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $EndimationEffect<C> {


public "process"(arg0: $EndimationEffectSource$$Type, arg1: float, arg2: C): void
public "getCodec"(): $MapCodec<($ConfiguredEndimationEffect<(C), ($EndimationEffect<(C)>)>)>
get "codec"(): $MapCodec<($ConfiguredEndimationEffect<(C), ($EndimationEffect<(C)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndimationEffect$$Type<C> = ($EndimationEffect<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndimationEffect_<C> = $EndimationEffect$$Type<(C)>;
}}
declare module "com.teamabnormals.blueprint.core.endimator.Endimation$PartKeyframes" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$EndimationKeyframe, $EndimationKeyframe$$Type} from "com.teamabnormals.blueprint.core.endimator.EndimationKeyframe"

export class $Endimation$PartKeyframes {
static readonly "CODEC": $Codec<($Endimation$PartKeyframes)>

constructor(arg0: ($EndimationKeyframe$$Type)[], arg1: ($EndimationKeyframe$$Type)[], arg2: ($EndimationKeyframe$$Type)[], arg3: ($EndimationKeyframe$$Type)[])

public "getScaleFrames"(): ($EndimationKeyframe)[]
public "getPosFrames"(): ($EndimationKeyframe)[]
public "getRotationFrames"(): ($EndimationKeyframe)[]
public "getOffsetFrames"(): ($EndimationKeyframe)[]
get "scaleFrames"(): ($EndimationKeyframe)[]
get "posFrames"(): ($EndimationKeyframe)[]
get "rotationFrames"(): ($EndimationKeyframe)[]
get "offsetFrames"(): ($EndimationKeyframe)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endimation$PartKeyframes$$Type = ($Endimation$PartKeyframes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Endimation$PartKeyframes_ = $Endimation$PartKeyframes$$Type;
}}
declare module "com.teamabnormals.blueprint.common.block.BlueprintBeehiveBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BeehiveBlock, $BeehiveBlock$$Type} from "net.minecraft.world.level.block.BeehiveBlock"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlueprintBeehiveBlock extends $BeehiveBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BeehiveBlock)>
static readonly "MAX_HONEY_LEVELS": integer
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
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "HONEY_LEVEL": $IntegerProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlueprintBeehiveBlock$$Type = ($BlueprintBeehiveBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlueprintBeehiveBlock_ = $BlueprintBeehiveBlock$$Type;
}}
declare module "com.teamabnormals.blueprint.core.endimator.Endimatable" {
import {$Endimatable$EndimatedState, $Endimatable$EndimatedState$$Type} from "com.teamabnormals.blueprint.core.endimator.Endimatable$EndimatedState"
import {$EndimationEffectSource, $EndimationEffectSource$$Type} from "com.teamabnormals.blueprint.core.endimator.effects.EndimationEffectSource"
import {$Position, $Position$$Type} from "net.minecraft.core.Position"
import {$PlayableEndimation, $PlayableEndimation$$Type} from "com.teamabnormals.blueprint.core.endimator.PlayableEndimation"
import {$EndimationEffectHandler, $EndimationEffectHandler$$Type} from "com.teamabnormals.blueprint.core.endimator.effects.EndimationEffectHandler"

export interface $Endimatable extends $EndimationEffectSource {

 "endimateTick"(): void
 "getEndimatedState"(): $Endimatable$EndimatedState
 "onEndimationEnd"(arg0: $PlayableEndimation$$Type, arg1: $PlayableEndimation$$Type): void
 "onEndimationStart"(arg0: $PlayableEndimation$$Type, arg1: $PlayableEndimation$$Type): void
 "setPlayingEndimation"(arg0: $PlayableEndimation$$Type): void
 "resetEndimation"(): void
 "getPlayingEndimation"(): $PlayableEndimation
 "getAnimationTick"(): integer
 "setAnimationTick"(arg0: integer): void
 "getEffectHandler"(): $EndimationEffectHandler
 "isNoEndimationPlaying"(): boolean
 "isEndimationPlaying"(arg0: $PlayableEndimation$$Type): boolean
 "isActive"(): boolean
 "getPos"(): $Position
get "endimatedState"(): $Endimatable$EndimatedState
set "playingEndimation"(value: $PlayableEndimation$$Type)
get "playingEndimation"(): $PlayableEndimation
get "animationTick"(): integer
set "animationTick"(value: integer)
get "effectHandler"(): $EndimationEffectHandler
get "noEndimationPlaying"(): boolean
get "active"(): boolean
get "pos"(): $Position
}

export namespace $Endimatable {
const probejs$$marker: never
}
export class $Endimatable$$Static implements $Endimatable {


 "endimateTick"(): void
 "getEndimatedState"(): $Endimatable$EndimatedState
 "onEndimationEnd"(arg0: $PlayableEndimation$$Type, arg1: $PlayableEndimation$$Type): void
 "onEndimationStart"(arg0: $PlayableEndimation$$Type, arg1: $PlayableEndimation$$Type): void
 "setPlayingEndimation"(arg0: $PlayableEndimation$$Type): void
 "resetEndimation"(): void
 "getPlayingEndimation"(): $PlayableEndimation
 "getAnimationTick"(): integer
 "setAnimationTick"(arg0: integer): void
 "getEffectHandler"(): $EndimationEffectHandler
 "isNoEndimationPlaying"(): boolean
 "isEndimationPlaying"(arg0: $PlayableEndimation$$Type): boolean
 "isActive"(): boolean
 "getPos"(): $Position
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endimatable$$Type = ($Endimatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Endimatable_ = $Endimatable$$Type;
}}
declare module "com.teamabnormals.blueprint.client.screen.splash.SplashManagerAccessor" {
import {$List, $List$$Type} from "java.util.List"

export interface $SplashManagerAccessor {

 "getSplashes"(): $List<(string)>

(): $List$$Type<(string)>
get "splashes"(): $List<(string)>
}

export namespace $SplashManagerAccessor {
const probejs$$marker: never
}
export class $SplashManagerAccessor$$Static implements $SplashManagerAccessor {


 "getSplashes"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SplashManagerAccessor$$Type = (() => $List$$Type<(string)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SplashManagerAccessor_ = $SplashManagerAccessor$$Type;
}}
declare module "com.teamabnormals.blueprint.common.world.storage.tracking.SyncType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $SyncType extends $Enum<($SyncType)> {
static readonly "NOPE": $SyncType
static readonly "TO_CLIENT": $SyncType
static readonly "TO_CLIENTS": $SyncType


public static "values"(): ($SyncType)[]
public static "valueOf"(arg0: string): $SyncType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncType$$Type = (("nope") | ("to_client") | ("to_clients"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyncType_ = $SyncType$$Type;
}}
declare module "com.teamabnormals.blueprint.core.endimator.Endimation$Builder" {
import {$Object2ObjectArrayMap, $Object2ObjectArrayMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectArrayMap"
import {$Endimation$Builder$Keyframes, $Endimation$Builder$Keyframes$$Type} from "com.teamabnormals.blueprint.core.endimator.Endimation$Builder$Keyframes"
import {$Endimation, $Endimation$$Type} from "com.teamabnormals.blueprint.core.endimator.Endimation"
import {$Endimation$PartKeyframes, $Endimation$PartKeyframes$$Type} from "com.teamabnormals.blueprint.core.endimator.Endimation$PartKeyframes"
import {$ConfiguredEndimationEffect, $ConfiguredEndimationEffect$$Type} from "com.teamabnormals.blueprint.core.endimator.effects.ConfiguredEndimationEffect"

export class $Endimation$Builder {

constructor()

public "length"(arg0: float): $Endimation$Builder
public "build"(): $Endimation
public "effects"(arg0: ($ConfiguredEndimationEffect$$Type<(any), (any)>)[]): $Endimation$Builder
public "keyframes"(arg0: $Endimation$Builder$Keyframes$$Type): $Endimation$Builder
public "keyframes"(arg0: $Object2ObjectArrayMap$$Type<(string), ($Endimation$PartKeyframes$$Type)>): $Endimation$Builder
public "addEffects"(...arg0: ($ConfiguredEndimationEffect$$Type<(any), (any)>)[]): $Endimation$Builder
public "blendWeight"(arg0: float): $Endimation$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endimation$Builder$$Type = ($Endimation$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Endimation$Builder_ = $Endimation$Builder$$Type;
}}
declare module "com.teamabnormals.blueprint.common.world.modification.structure.RepalettedStructureStart" {
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$StructureModificationContext, $StructureModificationContext$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureModificationContext"
import {$StructureRepaletterManager$Entry, $StructureRepaletterManager$Entry$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureRepaletterManager$Entry"

export interface $RepalettedStructureStart {

 "initializeRepaletters"(arg0: $StructureModificationContext$$Type): void
 "setRepaletters"(arg0: $ArrayList$$Type<($StructureRepaletterManager$Entry$$Type)>): void
set "repaletters"(value: $ArrayList$$Type<($StructureRepaletterManager$Entry$$Type)>)
}

export namespace $RepalettedStructureStart {
const probejs$$marker: never
}
export class $RepalettedStructureStart$$Static implements $RepalettedStructureStart {


 "initializeRepaletters"(arg0: $StructureModificationContext$$Type): void
 "setRepaletters"(arg0: $ArrayList$$Type<($StructureRepaletterManager$Entry$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepalettedStructureStart$$Type = ($RepalettedStructureStart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepalettedStructureStart_ = $RepalettedStructureStart$$Type;
}}
declare module "com.teamabnormals.blueprint.core.endimator.effects.ConfiguredEndimationEffect" {
import {$EndimationEffect, $EndimationEffect$$Type} from "com.teamabnormals.blueprint.core.endimator.effects.EndimationEffect"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$EndimationEffectSource, $EndimationEffectSource$$Type} from "com.teamabnormals.blueprint.core.endimator.effects.EndimationEffectSource"

export class $ConfiguredEndimationEffect<C, E extends $EndimationEffect<(C)>> implements $Comparable<($ConfiguredEndimationEffect<(any), (any)>)> {
static readonly "CODEC": $Codec<($ConfiguredEndimationEffect<(any), (any)>)>

constructor(arg0: E, arg1: C, arg2: float)

public "compareTo"(arg0: $ConfiguredEndimationEffect$$Type<(any), (any)>): integer
public "compareTo"(arg0: any): integer
public "getTime"(): float
public "process"(arg0: $EndimationEffectSource$$Type, arg1: float): void
public "getEffect"(): E
public "getConfig"(): C
get "time"(): float
get "effect"(): E
get "config"(): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredEndimationEffect$$Type<C, E> = ($ConfiguredEndimationEffect<(C), (E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguredEndimationEffect_<C, E> = $ConfiguredEndimationEffect$$Type<(C), (E)>;
}}
declare module "com.teamabnormals.blueprint.core.api.EggLayer" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"

export interface $EggLayer {

 "getEggLayingSound"(): $SoundEvent
 "getEggTimer"(): integer
 "setEggTimer"(arg0: integer): void
 "isBirdJockey"(): boolean
 "setBirdJockey"(arg0: boolean): void
 "getEggItem"(): $Item
 "getNextEggTime"(arg0: $RandomSource$$Type): integer
get "eggLayingSound"(): $SoundEvent
get "eggTimer"(): integer
set "eggTimer"(value: integer)
get "birdJockey"(): boolean
set "birdJockey"(value: boolean)
get "eggItem"(): $Item
}

export namespace $EggLayer {
const probejs$$marker: never
}
export class $EggLayer$$Static implements $EggLayer {


 "getEggLayingSound"(): $SoundEvent
 "getEggTimer"(): integer
 "setEggTimer"(arg0: integer): void
 "isBirdJockey"(): boolean
 "setBirdJockey"(arg0: boolean): void
 "getEggItem"(): $Item
 "getNextEggTime"(arg0: $RandomSource$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EggLayer$$Type = ($EggLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EggLayer_ = $EggLayer$$Type;
}}
declare module "com.teamabnormals.blueprint.common.world.modification.structure.SimpleStructureRepaletter" {
import {$ServerLevelAccessor, $ServerLevelAccessor$$Type} from "net.minecraft.world.level.ServerLevelAccessor"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$StructureModificationContext, $StructureModificationContext$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureModificationContext"
import {$StructureRepaletter, $StructureRepaletter$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureRepaletter"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$StructureRepaletter$Replacer, $StructureRepaletter$Replacer$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureRepaletter$Replacer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SimpleStructureRepaletter extends $Record implements $StructureRepaletter, $StructureRepaletter$Replacer {
static readonly "CODEC": $MapCodec<($SimpleStructureRepaletter)>

constructor(replacesBlock: $Block$$Type, replacesWith: $Block$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getReplacement"(arg0: $ServerLevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $RandomSource$$Type): $BlockState
public "codec"(): $MapCodec<($StructureRepaletter)>
public "replacesBlock"(): $Block
public "replacesWith"(): $Block
public "createReplacer"(arg0: $StructureModificationContext$$Type): $StructureRepaletter$Replacer
public "savedTagCodec"(): $MapCodec<($StructureRepaletter$Replacer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleStructureRepaletter$$Type = ({"replacesWith"?: $Block$$Type, "replacesBlock"?: $Block$$Type}) | ([replacesWith?: $Block$$Type, replacesBlock?: $Block$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleStructureRepaletter_ = $SimpleStructureRepaletter$$Type;
}}
declare module "com.teamabnormals.blueprint.core.events.SimpleJsonResourceListenerPreparedEvent" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$Gson, $Gson$$Type} from "com.google.gson.Gson"

export class $SimpleJsonResourceListenerPreparedEvent extends $Event {

constructor(arg0: $Gson$$Type, arg1: string, arg2: $Map$$Type<($ResourceLocation$$Type), ($JsonElement$$Type)>)

public "getEntries"(): $Map<($ResourceLocation), ($JsonElement)>
public "getDirectory"(): string
public "getGson"(): $Gson
get "entries"(): $Map<($ResourceLocation), ($JsonElement)>
get "directory"(): string
get "gson"(): $Gson
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleJsonResourceListenerPreparedEvent$$Type = ($SimpleJsonResourceListenerPreparedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleJsonResourceListenerPreparedEvent_ = $SimpleJsonResourceListenerPreparedEvent$$Type;
}}
declare module "com.teamabnormals.blueprint.core.endimator.effects.EndimationEffectSource" {
import {$Position, $Position$$Type} from "net.minecraft.core.Position"

export interface $EndimationEffectSource {

 "isActive"(): boolean
 "getPos"(): $Position
get "active"(): boolean
get "pos"(): $Position
}

export namespace $EndimationEffectSource {
const probejs$$marker: never
}
export class $EndimationEffectSource$$Static implements $EndimationEffectSource {


 "isActive"(): boolean
 "getPos"(): $Position
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndimationEffectSource$$Type = ($EndimationEffectSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndimationEffectSource_ = $EndimationEffectSource$$Type;
}}
declare module "com.teamabnormals.blueprint.core.endimator.PlayableEndimation" {
import {$PlayableEndimation$LoopType, $PlayableEndimation$LoopType$$Type} from "com.teamabnormals.blueprint.core.endimator.PlayableEndimation$LoopType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Endimation, $Endimation$$Type} from "com.teamabnormals.blueprint.core.endimator.Endimation"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PlayableEndimation extends $Record {
static readonly "BLANK": $PlayableEndimation

constructor(location: $ResourceLocation$$Type, duration: integer, loopType: $PlayableEndimation$LoopType$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "location"(): $ResourceLocation
public "duration"(): integer
public "loopType"(): $PlayableEndimation$LoopType
public "asEndimation"(): $Endimation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayableEndimation$$Type = ({"duration"?: integer, "loopType"?: $PlayableEndimation$LoopType$$Type, "location"?: $ResourceLocation$$Type}) | ([duration?: integer, loopType?: $PlayableEndimation$LoopType$$Type, location?: $ResourceLocation$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayableEndimation_ = $PlayableEndimation$$Type;
}}
declare module "com.teamabnormals.blueprint.common.world.modification.structure.StructureRepaletter$Condition" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StructureModificationContext, $StructureModificationContext$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureModificationContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export interface $StructureRepaletter$Condition {

 "test"(arg0: $StructureModificationContext$$Type): boolean
 "codec"(): $MapCodec<($StructureRepaletter$Condition)>
}

export namespace $StructureRepaletter$Condition {
const CODEC: $Codec<($StructureRepaletter$Condition)>
const probejs$$marker: never
}
export class $StructureRepaletter$Condition$$Static implements $StructureRepaletter$Condition {
static readonly "CODEC": $Codec<($StructureRepaletter$Condition)>


 "test"(arg0: $StructureModificationContext$$Type): boolean
 "codec"(): $MapCodec<($StructureRepaletter$Condition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureRepaletter$Condition$$Type = ($StructureRepaletter$Condition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureRepaletter$Condition_ = $StructureRepaletter$Condition$$Type;
}}
declare module "com.teamabnormals.blueprint.core.api.conditions.ConfigValueCondition$Serializer" {
import {$KeyCompressor, $KeyCompressor$$Type} from "com.mojang.serialization.KeyCompressor"
import {$Map, $Map$$Type} from "java.util.Map"
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$RecordBuilder, $RecordBuilder$$Type} from "com.mojang.serialization.RecordBuilder"
import {$MapLike, $MapLike$$Type} from "com.mojang.serialization.MapLike"
import {$ConfigValueCondition, $ConfigValueCondition$$Type} from "com.teamabnormals.blueprint.core.api.conditions.ConfigValueCondition"
import {$IConfigPredicateSerializer, $IConfigPredicateSerializer$$Type} from "com.teamabnormals.blueprint.core.api.conditions.config.IConfigPredicateSerializer"
import {$HashMap, $HashMap$$Type} from "java.util.HashMap"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$ModConfigSpec$ConfigValue, $ModConfigSpec$ConfigValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$ConfigValue"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $ConfigValueCondition$Serializer extends $MapCodec<($ConfigValueCondition)> {
static readonly "CONFIG_PREDICATE_SERIALIZERS": $HashMap<($ResourceLocation), ($IConfigPredicateSerializer<(any)>)>

constructor(arg0: $Map$$Type<(string), ($ModConfigSpec$ConfigValue$$Type<(any)>)>)

public "decode"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $MapLike$$Type<(T)>): $DataResult<($ConfigValueCondition)>
public "encode"(arg0: any, arg1: $DynamicOps$$Type<(any)>, arg2: $RecordBuilder$$Type<(any)>): $RecordBuilder<(any)>
public "encode"<T>(arg0: $ConfigValueCondition$$Type, arg1: $DynamicOps$$Type<(T)>, arg2: $RecordBuilder$$Type<(T)>): $RecordBuilder<(T)>
public "keys"<T>(arg0: $DynamicOps$$Type<(T)>): $Stream<(T)>
public "compressor"<T>(arg0: $DynamicOps$$Type<(T)>): $KeyCompressor<(T)>
public static "makeCompressedBuilder"<T>(arg0: $DynamicOps$$Type<(T)>, arg1: $KeyCompressor$$Type<(T)>): $RecordBuilder<(T)>
public static "forStrings"(arg0: $Supplier$$Type<($Stream$$Type<(string)>)>): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigValueCondition$Serializer$$Type = ($ConfigValueCondition$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigValueCondition$Serializer_ = $ConfigValueCondition$Serializer$$Type;
}}
declare module "com.teamabnormals.blueprint.common.world.storage.tracking.TrackedData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SyncType, $SyncType$$Type} from "com.teamabnormals.blueprint.common.world.storage.tracking.SyncType"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $TrackedData<T> {


public "getDefaultValue"(): T
public "isPersistent"(): boolean
public "getCodec"(): $MapCodec<(T)>
public "getSyncType"(): $SyncType
public "getStreamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
get "defaultValue"(): T
get "persistent"(): boolean
get "codec"(): $MapCodec<(T)>
get "syncType"(): $SyncType
get "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackedData$$Type<T> = ($TrackedData<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackedData_<T> = $TrackedData$$Type<(T)>;
}}
declare module "com.teamabnormals.blueprint.common.world.modification.structure.StructureRepaletterManager$Entry" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$StructureRepaletter$Replacer, $StructureRepaletter$Replacer$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureRepaletter$Replacer"
import {$StructurePieceType, $StructurePieceType$$Type} from "net.minecraft.world.level.levelgen.structure.pieces.StructurePieceType"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $StructureRepaletterManager$Entry extends $Record {
static readonly "CODEC": $Codec<($StructureRepaletterManager$Entry)>
static readonly "KEY": string

constructor(pieces: $Optional$$Type<($HolderSet$$Type<($StructurePieceType$$Type)>)>, shouldApplyToAfterPlace: boolean, replacer: $StructureRepaletter$Replacer$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "replacer"(): $StructureRepaletter$Replacer
public "pieces"(): $Optional<($HolderSet<($StructurePieceType)>)>
public "shouldApplyToAfterPlace"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureRepaletterManager$Entry$$Type = ({"replacer"?: $StructureRepaletter$Replacer$$Type, "pieces"?: ($HolderSet$$Type<($StructurePieceType$$Type)>)?, "shouldApplyToAfterPlace"?: boolean}) | ([replacer?: $StructureRepaletter$Replacer$$Type, pieces?: ($HolderSet$$Type<($StructurePieceType$$Type)>)?, shouldApplyToAfterPlace?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureRepaletterManager$Entry_ = $StructureRepaletterManager$Entry$$Type;
}}
declare module "com.teamabnormals.woodworks.common.block.ChiseledMangroveBookShelfBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlueprintChiseledBookShelfBlock, $BlueprintChiseledBookShelfBlock$$Type} from "com.teamabnormals.blueprint.common.block.BlueprintChiseledBookShelfBlock"
import {$List, $List$$Type} from "java.util.List"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Vec2, $Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ChiseledBookShelfBlock, $ChiseledBookShelfBlock$$Type} from "net.minecraft.world.level.block.ChiseledBookShelfBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ChiseledMangroveBookShelfBlock extends $BlueprintChiseledBookShelfBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ChiseledBookShelfBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BOOKS_PER_ROW": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "SLOT_OCCUPIED_PROPERTIES": $List<($BooleanProperty)>
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getHitSlot"(arg0: $Vec2$$Type): $OptionalInt
public static "getSection"(arg0: float): integer
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChiseledMangroveBookShelfBlock$$Type = ($ChiseledMangroveBookShelfBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChiseledMangroveBookShelfBlock_ = $ChiseledMangroveBookShelfBlock$$Type;
}}
declare module "com.teamabnormals.blueprint.common.block.chest.BlueprintTrappedChestBlock" {
import {$ChestType, $ChestType$$Type} from "net.minecraft.world.level.block.state.properties.ChestType"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IChestBlock, $IChestBlock$$Type} from "com.teamabnormals.blueprint.core.api.IChestBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ChestBlock, $ChestBlock$$Type} from "net.minecraft.world.level.block.ChestBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlueprintTrappedChestBlock extends $ChestBlock implements $IChestBlock {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
readonly "type": string
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "EVENT_SET_OPEN_COUNT": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "TYPE": $EnumProperty<($ChestType)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ChestBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: string, arg1: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "getDirectSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "getChestMaterialsName"(): string
public "asHolder"(): $Holder<(any)>
get "chestMaterialsName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlueprintTrappedChestBlock$$Type = ($BlueprintTrappedChestBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlueprintTrappedChestBlock_ = $BlueprintTrappedChestBlock$$Type;
}}
declare module "com.teamabnormals.blueprint.core.api.IChestBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IChestBlock {

 "getChestMaterialsName"(): string

(): string
get "chestMaterialsName"(): string
}

export namespace $IChestBlock {
const probejs$$marker: never
}
export class $IChestBlock$$Static implements $IChestBlock {


 "getChestMaterialsName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChestBlock$$Type = (() => string);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChestBlock_ = $IChestBlock$$Type;
}}
declare module "com.teamabnormals.blueprint.core.endimator.Endimation" {
import {$Object2ObjectArrayMap, $Object2ObjectArrayMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectArrayMap"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Endimation$PartKeyframes, $Endimation$PartKeyframes$$Type} from "com.teamabnormals.blueprint.core.endimator.Endimation$PartKeyframes"
import {$ConfiguredEndimationEffect, $ConfiguredEndimationEffect$$Type} from "com.teamabnormals.blueprint.core.endimator.effects.ConfiguredEndimationEffect"
import {$Endimation$Builder, $Endimation$Builder$$Type} from "com.teamabnormals.blueprint.core.endimator.Endimation$Builder"

export class $Endimation {
static readonly "BLANK": $Endimation
static readonly "CODEC": $Codec<($Endimation)>

constructor(arg0: float, arg1: float, arg2: $Object2ObjectArrayMap$$Type<(string), ($Endimation$PartKeyframes$$Type)>, arg3: ($ConfiguredEndimationEffect$$Type<(any), (any)>)[])

public "getLength"(): float
public static "builder"(): $Endimation$Builder
public "getEffects"(): ($ConfiguredEndimationEffect<(any), (any)>)[]
public "getBlendWeight"(): float
public "getPartKeyframes"(): $Object2ObjectArrayMap<(string), ($Endimation$PartKeyframes)>
get "length"(): float
get "effects"(): ($ConfiguredEndimationEffect<(any), (any)>)[]
get "blendWeight"(): float
get "partKeyframes"(): $Object2ObjectArrayMap<(string), ($Endimation$PartKeyframes)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endimation$$Type = ($Endimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Endimation_ = $Endimation$$Type;
}}
declare module "com.teamabnormals.blueprint.common.world.modification.structure.WeightedStructureRepaletter" {
import {$ServerLevelAccessor, $ServerLevelAccessor$$Type} from "net.minecraft.world.level.ServerLevelAccessor"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$WeightedEntry$Wrapper, $WeightedEntry$Wrapper$$Type} from "net.minecraft.util.random.WeightedEntry$Wrapper"
import {$StructureModificationContext, $StructureModificationContext$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureModificationContext"
import {$StructureRepaletter, $StructureRepaletter$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureRepaletter"
import {$WeightedRandomList, $WeightedRandomList$$Type} from "net.minecraft.util.random.WeightedRandomList"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$StructureRepaletter$Replacer, $StructureRepaletter$Replacer$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureRepaletter$Replacer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $WeightedStructureRepaletter extends $Record implements $StructureRepaletter, $StructureRepaletter$Replacer {
static readonly "CODEC": $MapCodec<($WeightedStructureRepaletter)>

constructor(replacesBlock: $Block$$Type, replacesWith: $WeightedRandomList$$Type<($WeightedEntry$Wrapper$$Type<($Block$$Type)>)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getReplacement"(arg0: $ServerLevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $RandomSource$$Type): $BlockState
public "codec"(): $MapCodec<($StructureRepaletter)>
public "replacesBlock"(): $Block
public "replacesWith"(): $WeightedRandomList<($WeightedEntry$Wrapper<($Block)>)>
public "createReplacer"(arg0: $StructureModificationContext$$Type): $StructureRepaletter$Replacer
public "savedTagCodec"(): $MapCodec<($StructureRepaletter$Replacer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedStructureRepaletter$$Type = ({"replacesWith"?: $WeightedRandomList$$Type<($WeightedEntry$Wrapper$$Type<($Block$$Type)>)>, "replacesBlock"?: $Block$$Type}) | ([replacesWith?: $WeightedRandomList$$Type<($WeightedEntry$Wrapper$$Type<($Block$$Type)>)>, replacesBlock?: $Block$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedStructureRepaletter_ = $WeightedStructureRepaletter$$Type;
}}
declare module "com.teamabnormals.blueprint.common.world.storage.tracking.IDataManager$DataEntry" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TrackedData, $TrackedData$$Type} from "com.teamabnormals.blueprint.common.world.storage.tracking.TrackedData"
import {$RegistryOps, $RegistryOps$$Type} from "net.minecraft.resources.RegistryOps"
import {$List, $List$$Type} from "java.util.List"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"

export class $IDataManager$DataEntry<T> {
static readonly "LIST_STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($List<($IDataManager$DataEntry<(any)>)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($IDataManager$DataEntry<(any)>)>

constructor(arg0: $TrackedData$$Type<(T)>)

public "encode"(arg0: $CompoundTag$$Type, arg1: $RegistryOps$$Type<($Tag$$Type)>): $CompoundTag
public "getValue"(): T
public "write"(arg0: $RegistryFriendlyByteBuf$$Type): void
public static "read"(arg0: $RegistryFriendlyByteBuf$$Type): $IDataManager$DataEntry<(any)>
public "clean"(): void
public "setValue"(arg0: T, arg1: boolean): void
public "isDirty"(): boolean
public "readValue"(arg0: $CompoundTag$$Type, arg1: $RegistryOps$$Type<($Tag$$Type)>, arg2: boolean): void
public "readValue"(arg0: $RegistryFriendlyByteBuf$$Type, arg1: boolean): void
public "markDirty"(): void
public "getTrackedData"(): $TrackedData<(T)>
get "value"(): T
get "dirty"(): boolean
get "trackedData"(): $TrackedData<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDataManager$DataEntry$$Type<T> = ($IDataManager$DataEntry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDataManager$DataEntry_<T> = $IDataManager$DataEntry$$Type<(T)>;
}}
declare module "com.teamabnormals.woodworks.common.block.ClosetBlock" {
import {$ChestBlockEntity, $ChestBlockEntity$$Type} from "net.minecraft.world.level.block.entity.ChestBlockEntity"
import {$ChestType, $ChestType$$Type} from "net.minecraft.world.level.block.state.properties.ChestType"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$DoorHingeSide, $DoorHingeSide$$Type} from "net.minecraft.world.level.block.state.properties.DoorHingeSide"
import {$IChestBlock, $IChestBlock$$Type} from "com.teamabnormals.blueprint.core.api.IChestBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ChestBlock, $ChestBlock$$Type} from "net.minecraft.world.level.block.ChestBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$DoubleBlockCombiner$NeighborCombineResult, $DoubleBlockCombiner$NeighborCombineResult$$Type} from "net.minecraft.world.level.block.DoubleBlockCombiner$NeighborCombineResult"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ClosetBlock extends $ChestBlock implements $IChestBlock {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
readonly "type": string
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
static readonly "EVENT_SET_OPEN_COUNT": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "TYPE": $EnumProperty<($ChestType)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ChestBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: string, arg1: $BlockBehaviour$Properties$$Type, arg2: $Supplier$$Type<($BlockEntityType$$Type<($ChestBlockEntity$$Type)>)>)
constructor(arg0: string, arg1: $BlockBehaviour$Properties$$Type)

public "combine"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: boolean): $DoubleBlockCombiner$NeighborCombineResult<($ChestBlockEntity)>
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getMenuProvider"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $MenuProvider
public static "getConnectedDirection"(arg0: $BlockState$$Type): $Direction
public static "isChestBlockedAt"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): boolean
public "getChestMaterialsName"(): string
public static "shouldTranslateCloset"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "asHolder"(): $Holder<(any)>
get "chestMaterialsName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClosetBlock$$Type = ($ClosetBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClosetBlock_ = $ClosetBlock$$Type;
}}
declare module "com.teamabnormals.woodworks.common.block.ChiseledSpruceBookShelfBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlueprintChiseledBookShelfBlock, $BlueprintChiseledBookShelfBlock$$Type} from "com.teamabnormals.blueprint.common.block.BlueprintChiseledBookShelfBlock"
import {$List, $List$$Type} from "java.util.List"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Vec2, $Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ChiseledBookShelfBlock, $ChiseledBookShelfBlock$$Type} from "net.minecraft.world.level.block.ChiseledBookShelfBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ChiseledSpruceBookShelfBlock extends $BlueprintChiseledBookShelfBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ChiseledBookShelfBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BOOKS_PER_ROW": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "SLOT_OCCUPIED_PROPERTIES": $List<($BooleanProperty)>
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getHitSlot"(arg0: $Vec2$$Type): $OptionalInt
public static "getSection"(arg0: float): integer
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChiseledSpruceBookShelfBlock$$Type = ($ChiseledSpruceBookShelfBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChiseledSpruceBookShelfBlock_ = $ChiseledSpruceBookShelfBlock$$Type;
}}
declare module "com.teamabnormals.blueprint.common.world.modification.structure.StructureModificationContext" {
import {$Structure$GenerationContext, $Structure$GenerationContext$$Type} from "net.minecraft.world.level.levelgen.structure.Structure$GenerationContext"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $StructureModificationContext {

constructor(arg0: $Structure$GenerationContext$$Type, arg1: $BlockPos$$Type)

public "getPosition"(): $BlockPos
public "biome"(): $Supplier<($Holder<($Biome)>)>
public "getGenerationContext"(): $Structure$GenerationContext
get "position"(): $BlockPos
get "generationContext"(): $Structure$GenerationContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureModificationContext$$Type = ($StructureModificationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureModificationContext_ = $StructureModificationContext$$Type;
}}
declare module "com.teamabnormals.woodworks.common.block.ChiseledCrimsonBookShelfBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlueprintChiseledBookShelfBlock, $BlueprintChiseledBookShelfBlock$$Type} from "com.teamabnormals.blueprint.common.block.BlueprintChiseledBookShelfBlock"
import {$List, $List$$Type} from "java.util.List"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Vec2, $Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ChiseledBookShelfBlock, $ChiseledBookShelfBlock$$Type} from "net.minecraft.world.level.block.ChiseledBookShelfBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ChiseledCrimsonBookShelfBlock extends $BlueprintChiseledBookShelfBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ChiseledBookShelfBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BOOKS_PER_ROW": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "SLOT_OCCUPIED_PROPERTIES": $List<($BooleanProperty)>
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getHitSlot"(arg0: $Vec2$$Type): $OptionalInt
public static "getSection"(arg0: float): integer
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChiseledCrimsonBookShelfBlock$$Type = ($ChiseledCrimsonBookShelfBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChiseledCrimsonBookShelfBlock_ = $ChiseledCrimsonBookShelfBlock$$Type;
}}
declare module "com.teamabnormals.blueprint.core.endimator.effects.EndimationEffectHandler" {
import {$Endimation, $Endimation$$Type} from "com.teamabnormals.blueprint.core.endimator.Endimation"
import {$EndimationEffectSource, $EndimationEffectSource$$Type} from "com.teamabnormals.blueprint.core.endimator.effects.EndimationEffectSource"

export class $EndimationEffectHandler {

constructor(arg0: $EndimationEffectSource$$Type)

public "reset"(): void
public "update"(arg0: $Endimation$$Type, arg1: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndimationEffectHandler$$Type = ($EndimationEffectHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndimationEffectHandler_ = $EndimationEffectHandler$$Type;
}}
declare module "com.teamabnormals.blueprint.core.events.FallingBlockEvent$FallingBlockTickEvent" {
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$FallingBlockEntity, $FallingBlockEntity$$Type} from "net.minecraft.world.entity.item.FallingBlockEntity"
import {$FallingBlockEvent, $FallingBlockEvent$$Type} from "com.teamabnormals.blueprint.core.events.FallingBlockEvent"

export class $FallingBlockEvent$FallingBlockTickEvent extends $FallingBlockEvent implements $ICancellableEvent {

constructor(arg0: $FallingBlockEntity$$Type)

public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FallingBlockEvent$FallingBlockTickEvent$$Type = ($FallingBlockEvent$FallingBlockTickEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FallingBlockEvent$FallingBlockTickEvent_ = $FallingBlockEvent$FallingBlockTickEvent$$Type;
}}
declare module "com.teamabnormals.blueprint.core.api.conditions.config.IConfigPredicate" {
import {$ModConfigSpec$ConfigValue, $ModConfigSpec$ConfigValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$ConfigValue"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export interface $IConfigPredicate {

 "test"(arg0: $ModConfigSpec$ConfigValue$$Type<(any)>): boolean
 "getID"(): $ResourceLocation
get "iD"(): $ResourceLocation
}

export namespace $IConfigPredicate {
const probejs$$marker: never
}
export class $IConfigPredicate$$Static implements $IConfigPredicate {


 "test"(arg0: $ModConfigSpec$ConfigValue$$Type<(any)>): boolean
 "getID"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigPredicate$$Type = ($IConfigPredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigPredicate_ = $IConfigPredicate$$Type;
}}
declare module "com.teamabnormals.blueprint.common.world.modification.structure.WeightedTagStructureRepaletter" {
import {$WeightedEntry$Wrapper, $WeightedEntry$Wrapper$$Type} from "net.minecraft.util.random.WeightedEntry$Wrapper"
import {$WeightedRandomList, $WeightedRandomList$$Type} from "net.minecraft.util.random.WeightedRandomList"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$StructureRepaletter$Replacer, $StructureRepaletter$Replacer$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureRepaletter$Replacer"
import {$ServerLevelAccessor, $ServerLevelAccessor$$Type} from "net.minecraft.world.level.ServerLevelAccessor"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$StructureModificationContext, $StructureModificationContext$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureModificationContext"
import {$StructureRepaletter, $StructureRepaletter$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureRepaletter"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $WeightedTagStructureRepaletter extends $Record implements $StructureRepaletter, $StructureRepaletter$Replacer {
static readonly "CODEC": $MapCodec<($WeightedTagStructureRepaletter)>

constructor(replacesBlocks: $TagKey$$Type<($Block)>, replacesWith: $WeightedRandomList$$Type<($WeightedEntry$Wrapper$$Type<($Block$$Type)>)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getReplacement"(arg0: $ServerLevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $RandomSource$$Type): $BlockState
public "codec"(): $MapCodec<($StructureRepaletter)>
public "replacesWith"(): $WeightedRandomList<($WeightedEntry$Wrapper<($Block)>)>
public "createReplacer"(arg0: $StructureModificationContext$$Type): $StructureRepaletter$Replacer
public "savedTagCodec"(): $MapCodec<($StructureRepaletter$Replacer)>
public "replacesBlocks"(): $TagKey<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedTagStructureRepaletter$$Type = ({"replacesBlocks"?: $TagKey$$Type<($Block)>, "replacesWith"?: $WeightedRandomList$$Type<($WeightedEntry$Wrapper$$Type<($Block$$Type)>)>}) | ([replacesBlocks?: $TagKey$$Type<($Block)>, replacesWith?: $WeightedRandomList$$Type<($WeightedEntry$Wrapper$$Type<($Block$$Type)>)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedTagStructureRepaletter_ = $WeightedTagStructureRepaletter$$Type;
}}
declare module "com.teamabnormals.blueprint.core.mixin.FluidInvokerMixin" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"

export interface $FluidInvokerMixin {

 "callAnimateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type, arg3: $RandomSource$$Type): void

(arg0: $Level, arg1: $BlockPos, arg2: $FluidState, arg3: $RandomSource): void
}

export namespace $FluidInvokerMixin {
const probejs$$marker: never
}
export class $FluidInvokerMixin$$Static implements $FluidInvokerMixin {


 "callAnimateTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type, arg3: $RandomSource$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidInvokerMixin$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: $FluidState, arg3: $RandomSource) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidInvokerMixin_ = $FluidInvokerMixin$$Type;
}}
declare module "com.teamabnormals.blueprint.core.util.BiomeUtil$ModdedBiomeProvider" {
import {$Climate$Sampler, $Climate$Sampler$$Type} from "net.minecraft.world.level.biome.Climate$Sampler"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BiomeSource, $BiomeSource$$Type} from "net.minecraft.world.level.biome.BiomeSource"

export interface $BiomeUtil$ModdedBiomeProvider {

 "getNoiseBiome"(arg0: integer, arg1: integer, arg2: integer, arg3: $Climate$Sampler$$Type, arg4: $BiomeSource$$Type, arg5: $Registry$$Type<($Biome$$Type)>): $Holder<($Biome)>
 "codec"(): $MapCodec<($BiomeUtil$ModdedBiomeProvider)>
 "getAdditionalPossibleBiomes"(arg0: $Registry$$Type<($Biome$$Type)>): $Set<($Holder<($Biome)>)>
}

export namespace $BiomeUtil$ModdedBiomeProvider {
const CODEC: $Codec<($BiomeUtil$ModdedBiomeProvider)>
const probejs$$marker: never
}
export class $BiomeUtil$ModdedBiomeProvider$$Static implements $BiomeUtil$ModdedBiomeProvider {
static readonly "CODEC": $Codec<($BiomeUtil$ModdedBiomeProvider)>


 "getNoiseBiome"(arg0: integer, arg1: integer, arg2: integer, arg3: $Climate$Sampler$$Type, arg4: $BiomeSource$$Type, arg5: $Registry$$Type<($Biome$$Type)>): $Holder<($Biome)>
 "codec"(): $MapCodec<($BiomeUtil$ModdedBiomeProvider)>
 "getAdditionalPossibleBiomes"(arg0: $Registry$$Type<($Biome$$Type)>): $Set<($Holder<($Biome)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeUtil$ModdedBiomeProvider$$Type = ($BiomeUtil$ModdedBiomeProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeUtil$ModdedBiomeProvider_ = $BiomeUtil$ModdedBiomeProvider$$Type;
}}
declare module "com.teamabnormals.blueprint.core.endimator.Endimation$Builder$Keyframes" {
import {$Object2ObjectArrayMap, $Object2ObjectArrayMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ObjectArrayMap"
import {$Endimation$PartKeyframes, $Endimation$PartKeyframes$$Type} from "com.teamabnormals.blueprint.core.endimator.Endimation$PartKeyframes"
import {$Endimation$PartKeyframes$Builder, $Endimation$PartKeyframes$Builder$$Type} from "com.teamabnormals.blueprint.core.endimator.Endimation$PartKeyframes$Builder"

export class $Endimation$Builder$Keyframes {


public "build"(): $Object2ObjectArrayMap<(string), ($Endimation$PartKeyframes)>
public "part"(arg0: string, arg1: $Endimation$PartKeyframes$Builder$$Type): $Endimation$Builder$Keyframes
public "part"(arg0: string, arg1: $Endimation$PartKeyframes$$Type): $Endimation$Builder$Keyframes
public static "keyframes"(): $Endimation$Builder$Keyframes
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endimation$Builder$Keyframes$$Type = ($Endimation$Builder$Keyframes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Endimation$Builder$Keyframes_ = $Endimation$Builder$Keyframes$$Type;
}}
declare module "com.teamabnormals.blueprint.common.world.storage.tracking.IDataManager" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$TrackedData, $TrackedData$$Type} from "com.teamabnormals.blueprint.common.world.storage.tracking.TrackedData"
import {$IDataManager$DataEntry, $IDataManager$DataEntry$$Type} from "com.teamabnormals.blueprint.common.world.storage.tracking.IDataManager$DataEntry"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $IDataManager {

 "getValue"<T>(arg0: $TrackedData$$Type<(T)>): T
 "clean"(): void
 "setValue"<T>(arg0: $TrackedData$$Type<(T)>, arg1: T): void
 "getEntries"(arg0: boolean): $Set<($IDataManager$DataEntry<(any)>)>
 "isDirty"(): boolean
 "setDataMap"(arg0: $Map$$Type<($TrackedData$$Type<(any)>), ($IDataManager$DataEntry$$Type<(any)>)>): void
 "getDataMap"(): $Map<($TrackedData<(any)>), ($IDataManager$DataEntry<(any)>)>
 "getDirtyEntries"(): $Set<($IDataManager$DataEntry<(any)>)>
get "dirty"(): boolean
set "dataMap"(value: $Map$$Type<($TrackedData$$Type<(any)>), ($IDataManager$DataEntry$$Type<(any)>)>)
get "dataMap"(): $Map<($TrackedData<(any)>), ($IDataManager$DataEntry<(any)>)>
get "dirtyEntries"(): $Set<($IDataManager$DataEntry<(any)>)>
}

export namespace $IDataManager {
const probejs$$marker: never
}
export class $IDataManager$$Static implements $IDataManager {


 "getValue"<T>(arg0: $TrackedData$$Type<(T)>): T
 "clean"(): void
 "setValue"<T>(arg0: $TrackedData$$Type<(T)>, arg1: T): void
 "getEntries"(arg0: boolean): $Set<($IDataManager$DataEntry<(any)>)>
 "isDirty"(): boolean
 "setDataMap"(arg0: $Map$$Type<($TrackedData$$Type<(any)>), ($IDataManager$DataEntry$$Type<(any)>)>): void
 "getDataMap"(): $Map<($TrackedData<(any)>), ($IDataManager$DataEntry<(any)>)>
 "getDirtyEntries"(): $Set<($IDataManager$DataEntry<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDataManager$$Type = ($IDataManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDataManager_ = $IDataManager$$Type;
}}
declare module "com.teamabnormals.blueprint.common.world.modification.structure.StructureRepaletter" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StructureModificationContext, $StructureModificationContext$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureModificationContext"
import {$StructureRepaletter$Replacer, $StructureRepaletter$Replacer$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureRepaletter$Replacer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export interface $StructureRepaletter {

 "codec"(): $MapCodec<($StructureRepaletter)>
 "createReplacer"(arg0: $StructureModificationContext$$Type): $StructureRepaletter$Replacer
}

export namespace $StructureRepaletter {
const CODEC: $Codec<($StructureRepaletter)>
const probejs$$marker: never
}
export class $StructureRepaletter$$Static implements $StructureRepaletter {
static readonly "CODEC": $Codec<($StructureRepaletter)>


 "codec"(): $MapCodec<($StructureRepaletter)>
 "createReplacer"(arg0: $StructureModificationContext$$Type): $StructureRepaletter$Replacer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureRepaletter$$Type = ($StructureRepaletter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureRepaletter_ = $StructureRepaletter$$Type;
}}
declare module "com.teamabnormals.blueprint.common.block.chest.BlueprintChestBlock" {
import {$ChestType, $ChestType$$Type} from "net.minecraft.world.level.block.state.properties.ChestType"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IChestBlock, $IChestBlock$$Type} from "com.teamabnormals.blueprint.core.api.IChestBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ChestBlock, $ChestBlock$$Type} from "net.minecraft.world.level.block.ChestBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlueprintChestBlock extends $ChestBlock implements $IChestBlock {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
readonly "type": string
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "EVENT_SET_OPEN_COUNT": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "TYPE": $EnumProperty<($ChestType)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ChestBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: string, arg1: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getChestMaterialsName"(): string
public "asHolder"(): $Holder<(any)>
get "chestMaterialsName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlueprintChestBlock$$Type = ($BlueprintChestBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlueprintChestBlock_ = $BlueprintChestBlock$$Type;
}}
declare module "com.teamabnormals.woodworks.common.block.TrappedClosetBlock" {
import {$ChestType, $ChestType$$Type} from "net.minecraft.world.level.block.state.properties.ChestType"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$DoorHingeSide, $DoorHingeSide$$Type} from "net.minecraft.world.level.block.state.properties.DoorHingeSide"
import {$IChestBlock, $IChestBlock$$Type} from "com.teamabnormals.blueprint.core.api.IChestBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EnumProperty, $EnumProperty$$Type} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ClosetBlock, $ClosetBlock$$Type} from "com.teamabnormals.woodworks.common.block.ClosetBlock"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ChestBlock, $ChestBlock$$Type} from "net.minecraft.world.level.block.ChestBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TrappedClosetBlock extends $ClosetBlock implements $IChestBlock {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
readonly "type": string
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
static readonly "EVENT_SET_OPEN_COUNT": integer
 "descriptionId": string
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "TYPE": $EnumProperty<($ChestType)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ChestBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: string, arg1: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "getDirectSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "getChestMaterialsName"(): string
public "asHolder"(): $Holder<(any)>
get "chestMaterialsName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrappedClosetBlock$$Type = ($TrappedClosetBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrappedClosetBlock_ = $TrappedClosetBlock$$Type;
}}
declare module "com.teamabnormals.blueprint.common.world.modification.structure.StructureRepaletterEntry$Builder" {
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$StructureRepaletter, $StructureRepaletter$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureRepaletter"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$StructurePieceType, $StructurePieceType$$Type} from "net.minecraft.world.level.levelgen.structure.pieces.StructurePieceType"
import {$StructureRepaletter$Condition, $StructureRepaletter$Condition$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureRepaletter$Condition"
import {$StructureRepaletterEntry, $StructureRepaletterEntry$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureRepaletterEntry"

export class $StructureRepaletterEntry$Builder {

constructor()

public "priority"(arg0: integer): $StructureRepaletterEntry$Builder
public "condition"(arg0: $StructureRepaletter$Condition$$Type): $StructureRepaletterEntry$Builder
public "select"(arg0: $HolderSet$$Type<($Structure)>): $StructureRepaletterEntry
public "pieces"(arg0: $HolderSet$$Type<($StructurePieceType)>): $StructureRepaletterEntry$Builder
public "repaletters"(...arg0: ($StructureRepaletter$$Type)[]): $StructureRepaletterEntry$Builder
public "applyToAfterPlace"(): $StructureRepaletterEntry$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureRepaletterEntry$Builder$$Type = ($StructureRepaletterEntry$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureRepaletterEntry$Builder_ = $StructureRepaletterEntry$Builder$$Type;
}}
declare module "com.teamabnormals.blueprint.core.endimator.EndimationKeyframe" {
import {$EndimationKeyframe$Transform, $EndimationKeyframe$Transform$$Type} from "com.teamabnormals.blueprint.core.endimator.EndimationKeyframe$Transform"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$EndimationInterpolator, $EndimationInterpolator$$Type} from "com.teamabnormals.blueprint.core.endimator.interpolation.EndimationInterpolator"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"

export class $EndimationKeyframe implements $Comparable<($EndimationKeyframe)> {
readonly "preX": $Supplier<(float)>
readonly "preY": $Supplier<(float)>
static readonly "CATMULL_ROM": $EndimationInterpolator
static readonly "CODEC": $Codec<($EndimationKeyframe)>
readonly "preZ": $Supplier<(float)>
static readonly "PRE_POST_CODEC": $Codec<($EndimationKeyframe$Transform)>
readonly "postZ": $Supplier<(float)>
readonly "postX": $Supplier<(float)>
readonly "postY": $Supplier<(float)>
static readonly "PRE_AND_POST_CODEC": $Codec<($Pair<($EndimationKeyframe$Transform), ($EndimationKeyframe$Transform)>)>
readonly "interpolator": $EndimationInterpolator
readonly "time": float
static readonly "LINEAR": $EndimationInterpolator

constructor(arg0: float, arg1: $Supplier$$Type<(float)>, arg2: $Supplier$$Type<(float)>, arg3: $Supplier$$Type<(float)>, arg4: $Supplier$$Type<(float)>, arg5: $Supplier$$Type<(float)>, arg6: $Supplier$$Type<(float)>, arg7: $EndimationInterpolator$$Type)
constructor(arg0: float, arg1: $EndimationKeyframe$Transform$$Type, arg2: $EndimationInterpolator$$Type)

public "compareTo"(arg0: $EndimationKeyframe$$Type): integer
public "compareTo"(arg0: any): integer
public "apply"(arg0: $Vector3f$$Type, arg1: ($EndimationKeyframe$$Type)[], arg2: $EndimationKeyframe$$Type, arg3: $EndimationKeyframe$$Type, arg4: integer, arg5: integer, arg6: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndimationKeyframe$$Type = ($EndimationKeyframe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndimationKeyframe_ = $EndimationKeyframe$$Type;
}}
declare module "com.teamabnormals.blueprint.core.endimator.EndimatablePart" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EndimatablePart {

 "reset"(): void
 "addOffset"(arg0: float, arg1: float, arg2: float): void
 "addPos"(arg0: float, arg1: float, arg2: float): void
 "addRotation"(arg0: float, arg1: float, arg2: float): void
 "addScale"(arg0: float, arg1: float, arg2: float): void
}

export namespace $EndimatablePart {
const probejs$$marker: never
}
export class $EndimatablePart$$Static implements $EndimatablePart {


 "reset"(): void
 "addOffset"(arg0: float, arg1: float, arg2: float): void
 "addPos"(arg0: float, arg1: float, arg2: float): void
 "addRotation"(arg0: float, arg1: float, arg2: float): void
 "addScale"(arg0: float, arg1: float, arg2: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EndimatablePart$$Type = ($EndimatablePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EndimatablePart_ = $EndimatablePart$$Type;
}}
declare module "com.teamabnormals.blueprint.core.endimator.Endimatable$EndimatedState" {
import {$Endimatable, $Endimatable$$Type} from "com.teamabnormals.blueprint.core.endimator.Endimatable"
import {$PlayableEndimation, $PlayableEndimation$$Type} from "com.teamabnormals.blueprint.core.endimator.PlayableEndimation"
import {$EndimationEffectHandler, $EndimationEffectHandler$$Type} from "com.teamabnormals.blueprint.core.endimator.effects.EndimationEffectHandler"

export class $Endimatable$EndimatedState {
 "animationTick": integer
 "endimation": $PlayableEndimation
readonly "effectHandler": $EndimationEffectHandler

constructor(arg0: $Endimatable$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Endimatable$EndimatedState$$Type = ($Endimatable$EndimatedState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Endimatable$EndimatedState_ = $Endimatable$EndimatedState$$Type;
}}
declare module "com.teamabnormals.blueprint.common.world.modification.structure.StructureRepaletter$Replacer" {
import {$ServerLevelAccessor, $ServerLevelAccessor$$Type} from "net.minecraft.world.level.ServerLevelAccessor"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $StructureRepaletter$Replacer {

 "getReplacement"(arg0: $ServerLevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $RandomSource$$Type): $BlockState
 "savedTagCodec"(): $MapCodec<($StructureRepaletter$Replacer)>
}

export namespace $StructureRepaletter$Replacer {
const CODEC: $Codec<($StructureRepaletter$Replacer)>
const probejs$$marker: never
}
export class $StructureRepaletter$Replacer$$Static implements $StructureRepaletter$Replacer {
static readonly "CODEC": $Codec<($StructureRepaletter$Replacer)>


 "getReplacement"(arg0: $ServerLevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $RandomSource$$Type): $BlockState
 "savedTagCodec"(): $MapCodec<($StructureRepaletter$Replacer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureRepaletter$Replacer$$Type = ($StructureRepaletter$Replacer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureRepaletter$Replacer_ = $StructureRepaletter$Replacer$$Type;
}}
declare module "com.teamabnormals.blueprint.common.world.modification.structure.SimpleTagStructureRepaletter" {
import {$ServerLevelAccessor, $ServerLevelAccessor$$Type} from "net.minecraft.world.level.ServerLevelAccessor"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$StructureModificationContext, $StructureModificationContext$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureModificationContext"
import {$StructureRepaletter, $StructureRepaletter$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureRepaletter"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$StructureRepaletter$Replacer, $StructureRepaletter$Replacer$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureRepaletter$Replacer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $SimpleTagStructureRepaletter extends $Record implements $StructureRepaletter, $StructureRepaletter$Replacer {
static readonly "CODEC": $MapCodec<($SimpleTagStructureRepaletter)>

constructor(replacesBlock: $TagKey$$Type<($Block)>, replacesWith: $Block$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getReplacement"(arg0: $ServerLevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $RandomSource$$Type): $BlockState
public "codec"(): $MapCodec<($StructureRepaletter)>
public "replacesBlock"(): $TagKey<($Block)>
public "replacesWith"(): $Block
public "createReplacer"(arg0: $StructureModificationContext$$Type): $StructureRepaletter$Replacer
public "savedTagCodec"(): $MapCodec<($StructureRepaletter$Replacer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleTagStructureRepaletter$$Type = ({"replacesWith"?: $Block$$Type, "replacesBlock"?: $TagKey$$Type<($Block)>}) | ([replacesWith?: $Block$$Type, replacesBlock?: $TagKey$$Type<($Block)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleTagStructureRepaletter_ = $SimpleTagStructureRepaletter$$Type;
}}
declare module "com.teamabnormals.blueprint.core.events.FallingBlockEvent" {
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FallingBlockEntity, $FallingBlockEntity$$Type} from "net.minecraft.world.entity.item.FallingBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FallingBlockEvent extends $Event {

constructor(arg0: $FallingBlockEntity$$Type)

public "getEntity"(): $FallingBlockEntity
public static "onBlockFall"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FallingBlockEntity$$Type): $FallingBlockEntity
public static "onFallingBlockTick"(arg0: $FallingBlockEntity$$Type): boolean
public "setEntity"(arg0: $FallingBlockEntity$$Type): void
get "entity"(): $FallingBlockEntity
set "entity"(value: $FallingBlockEntity$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FallingBlockEvent$$Type = ($FallingBlockEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FallingBlockEvent_ = $FallingBlockEvent$$Type;
}}
declare module "com.teamabnormals.blueprint.common.world.modification.structure.StructureRepaletterEntry" {
import {$WeightedTagStructureRepaletter, $WeightedTagStructureRepaletter$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.WeightedTagStructureRepaletter"
import {$WeightedEntry$Wrapper, $WeightedEntry$Wrapper$$Type} from "net.minecraft.util.random.WeightedEntry$Wrapper"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HolderGetter, $HolderGetter$$Type} from "net.minecraft.core.HolderGetter"
import {$SimpleStructureRepaletter, $SimpleStructureRepaletter$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.SimpleStructureRepaletter"
import {$StructureRepaletterEntry$Builder, $StructureRepaletterEntry$Builder$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureRepaletterEntry$Builder"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$WeightedStructureRepaletter, $WeightedStructureRepaletter$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.WeightedStructureRepaletter"
import {$StructureRepaletter, $StructureRepaletter$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureRepaletter"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$SimpleTagStructureRepaletter, $SimpleTagStructureRepaletter$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.SimpleTagStructureRepaletter"
import {$StructurePieceType, $StructurePieceType$$Type} from "net.minecraft.world.level.levelgen.structure.pieces.StructurePieceType"
import {$StructureRepaletter$Condition, $StructureRepaletter$Condition$$Type} from "com.teamabnormals.blueprint.common.world.modification.structure.StructureRepaletter$Condition"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $StructureRepaletterEntry extends $Record {
static readonly "CODEC": $Codec<($StructureRepaletterEntry)>

constructor(structures: $HolderSet$$Type<($Structure)>, pieces: $Optional$$Type<($HolderSet$$Type<($StructurePieceType$$Type)>)>, shouldApplyToAfterPlace: boolean, priority: integer, condition: $Optional$$Type<($StructureRepaletter$Condition$$Type)>, repaletters: $List$$Type<($StructureRepaletter$$Type)>)
constructor(arg0: $HolderSet$$Type<($Structure)>, arg1: $Optional$$Type<($HolderSet$$Type<($StructurePieceType$$Type)>)>, arg2: boolean, arg3: $StructureRepaletter$Condition$$Type, arg4: $StructureRepaletter$$Type)
constructor(arg0: $HolderSet$$Type<($Structure)>, arg1: $Optional$$Type<($HolderSet$$Type<($StructurePieceType$$Type)>)>, arg2: boolean, arg3: $StructureRepaletter$$Type)
constructor(arg0: $HolderSet$$Type<($Structure)>, arg1: $Optional$$Type<($HolderSet$$Type<($StructurePieceType$$Type)>)>, arg2: boolean, arg3: integer, arg4: $StructureRepaletter$Condition$$Type, arg5: $StructureRepaletter$$Type)
constructor(arg0: $HolderSet$$Type<($Structure)>, arg1: $Optional$$Type<($HolderSet$$Type<($StructurePieceType$$Type)>)>, arg2: boolean, arg3: integer, arg4: $Optional$$Type<($StructureRepaletter$Condition$$Type)>, arg5: $StructureRepaletter$$Type)

public "priority"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "holder"(arg0: $HolderGetter$$Type<($Structure$$Type)>, ...arg1: ($ResourceKey$$Type<($Structure$$Type)>)[]): $HolderSet<($Structure)>
public "condition"(): $Optional<($StructureRepaletter$Condition)>
public "structures"(): $HolderSet<($Structure)>
public "pieces"(): $Optional<($HolderSet<($StructurePieceType)>)>
public static "simple"(arg0: $Block$$Type, arg1: $Block$$Type): $SimpleStructureRepaletter
public static "simple"(arg0: $TagKey$$Type<($Block)>, arg1: $Block$$Type): $SimpleTagStructureRepaletter
public "repaletters"(): $List<($StructureRepaletter)>
public static "repalette"(): $StructureRepaletterEntry$Builder
public static "weighted"(arg0: $Block$$Type, ...arg1: ($WeightedEntry$Wrapper$$Type<($Block$$Type)>)[]): $WeightedStructureRepaletter
public static "weighted"(arg0: $TagKey$$Type<($Block)>, ...arg1: ($WeightedEntry$Wrapper$$Type<($Block$$Type)>)[]): $WeightedTagStructureRepaletter
public "shouldApplyToAfterPlace"(): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.BlueprintStructureRepaletters
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.BlueprintStructureRepalettersTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureRepaletterEntry$$Type = (Special.BlueprintStructureRepaletters) | ({"condition"?: ($StructureRepaletter$Condition$$Type)?, "priority"?: integer, "shouldApplyToAfterPlace"?: boolean, "repaletters"?: $List$$Type<($StructureRepaletter$$Type)>, "structures"?: $HolderSet$$Type<($Structure)>, "pieces"?: ($HolderSet$$Type<($StructurePieceType$$Type)>)?}) | ([condition?: ($StructureRepaletter$Condition$$Type)?, priority?: integer, shouldApplyToAfterPlace?: boolean, repaletters?: $List$$Type<($StructureRepaletter$$Type)>, structures?: $HolderSet$$Type<($Structure)>, pieces?: ($HolderSet$$Type<($StructurePieceType$$Type)>)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureRepaletterEntry_ = $StructureRepaletterEntry$$Type;
}}
declare module "com.teamabnormals.blueprint.core.mixin.NoiseGeneratorSettingsMixin" {
import {$SurfaceRules$RuleSource, $SurfaceRules$RuleSource$$Type} from "net.minecraft.world.level.levelgen.SurfaceRules$RuleSource"

export interface $NoiseGeneratorSettingsMixin {

 "setSurfaceRule"(arg0: $SurfaceRules$RuleSource$$Type): void

(arg0: $SurfaceRules$RuleSource): void
set "surfaceRule"(value: $SurfaceRules$RuleSource$$Type)
}

export namespace $NoiseGeneratorSettingsMixin {
const probejs$$marker: never
}
export class $NoiseGeneratorSettingsMixin$$Static implements $NoiseGeneratorSettingsMixin {


 "setSurfaceRule"(arg0: $SurfaceRules$RuleSource$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoiseGeneratorSettingsMixin$$Type = ((arg0: $SurfaceRules$RuleSource) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoiseGeneratorSettingsMixin_ = $NoiseGeneratorSettingsMixin$$Type;
}}
declare module "com.teamabnormals.blueprint.core.events.LoadThisClassEvent" {
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$IModBusEvent, $IModBusEvent$$Type} from "net.neoforged.fml.event.IModBusEvent"

export class $LoadThisClassEvent extends $Event implements $IModBusEvent {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadThisClassEvent$$Type = ($LoadThisClassEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoadThisClassEvent_ = $LoadThisClassEvent$$Type;
}}
declare module "com.teamabnormals.woodworks.common.block.ChiseledBambooBookShelfBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlueprintChiseledBookShelfBlock, $BlueprintChiseledBookShelfBlock$$Type} from "com.teamabnormals.blueprint.common.block.BlueprintChiseledBookShelfBlock"
import {$List, $List$$Type} from "java.util.List"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Vec2, $Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ChiseledBookShelfBlock, $ChiseledBookShelfBlock$$Type} from "net.minecraft.world.level.block.ChiseledBookShelfBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ChiseledBambooBookShelfBlock extends $BlueprintChiseledBookShelfBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ChiseledBookShelfBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BOOKS_PER_ROW": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "SLOT_OCCUPIED_PROPERTIES": $List<($BooleanProperty)>
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getHitSlot"(arg0: $Vec2$$Type): $OptionalInt
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChiseledBambooBookShelfBlock$$Type = ($ChiseledBambooBookShelfBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChiseledBambooBookShelfBlock_ = $ChiseledBambooBookShelfBlock$$Type;
}}
declare module "com.teamabnormals.blueprint.core.events.FallingBlockEvent$BlockFallEvent" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$FallingBlockEntity, $FallingBlockEntity$$Type} from "net.minecraft.world.entity.item.FallingBlockEntity"
import {$FallingBlockEvent, $FallingBlockEvent$$Type} from "com.teamabnormals.blueprint.core.events.FallingBlockEvent"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FallingBlockEvent$BlockFallEvent extends $FallingBlockEvent {

constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FallingBlockEntity$$Type)

public "getState"(): $BlockState
public "getLevel"(): $Level
public "getPos"(): $BlockPos
get "state"(): $BlockState
get "level"(): $Level
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FallingBlockEvent$BlockFallEvent$$Type = ($FallingBlockEvent$BlockFallEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FallingBlockEvent$BlockFallEvent_ = $FallingBlockEvent$BlockFallEvent$$Type;
}}
declare module "com.teamabnormals.woodworks.common.block.ChiseledCherryBookShelfBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlueprintChiseledBookShelfBlock, $BlueprintChiseledBookShelfBlock$$Type} from "com.teamabnormals.blueprint.common.block.BlueprintChiseledBookShelfBlock"
import {$List, $List$$Type} from "java.util.List"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Vec2, $Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ChiseledBookShelfBlock, $ChiseledBookShelfBlock$$Type} from "net.minecraft.world.level.block.ChiseledBookShelfBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ChiseledCherryBookShelfBlock extends $BlueprintChiseledBookShelfBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ChiseledBookShelfBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BOOKS_PER_ROW": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "SLOT_OCCUPIED_PROPERTIES": $List<($BooleanProperty)>
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getHitSlot"(arg0: $Vec2$$Type): $OptionalInt
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChiseledCherryBookShelfBlock$$Type = ($ChiseledCherryBookShelfBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChiseledCherryBookShelfBlock_ = $ChiseledCherryBookShelfBlock$$Type;
}}
declare module "com.teamabnormals.blueprint.core.endimator.PlayableEndimation$LoopType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $PlayableEndimation$LoopType extends $Enum<($PlayableEndimation$LoopType)> {
static readonly "LOOP": $PlayableEndimation$LoopType
static readonly "NONE": $PlayableEndimation$LoopType
static readonly "HOLD": $PlayableEndimation$LoopType


public static "values"(): ($PlayableEndimation$LoopType)[]
public static "valueOf"(arg0: string): $PlayableEndimation$LoopType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayableEndimation$LoopType$$Type = (("none") | ("loop") | ("hold"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayableEndimation$LoopType_ = $PlayableEndimation$LoopType$$Type;
}}
declare module "com.teamabnormals.blueprint.common.world.modification.ModdedBiomeSlice" {
import {$HashSet, $HashSet$$Type} from "java.util.HashSet"
import {$LevelStem, $LevelStem$$Type} from "net.minecraft.world.level.dimension.LevelStem"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BiomeUtil$ModdedBiomeProvider, $BiomeUtil$ModdedBiomeProvider$$Type} from "com.teamabnormals.blueprint.core.util.BiomeUtil$ModdedBiomeProvider"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ModdedBiomeSlice extends $Record {
static readonly "CODEC": $Codec<($ModdedBiomeSlice)>

constructor(arg0: integer, arg1: $BiomeUtil$ModdedBiomeProvider$$Type, ...arg2: ($ResourceKey$$Type<($LevelStem$$Type)>)[])
constructor(levels: $HashSet$$Type<($ResourceKey$$Type<($LevelStem$$Type)>)>, weight: integer, provider: $BiomeUtil$ModdedBiomeProvider$$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "provider"(): $BiomeUtil$ModdedBiomeProvider
public "levels"(): $HashSet<($ResourceKey<($LevelStem)>)>
public "weight"(): integer
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.BlueprintModdedBiomeSlices
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.BlueprintModdedBiomeSlicesTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModdedBiomeSlice$$Type = (Special.BlueprintModdedBiomeSlices) | ({"levels"?: $HashSet$$Type<($ResourceKey$$Type<($LevelStem$$Type)>)>, "provider"?: $BiomeUtil$ModdedBiomeProvider$$Type, "weight"?: integer}) | ([levels?: $HashSet$$Type<($ResourceKey$$Type<($LevelStem$$Type)>)>, provider?: $BiomeUtil$ModdedBiomeProvider$$Type, weight?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModdedBiomeSlice_ = $ModdedBiomeSlice$$Type;
}}
declare module "com.teamabnormals.blueprint.core.api.conditions.config.IConfigPredicateSerializer" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$IConfigPredicate, $IConfigPredicate$$Type} from "com.teamabnormals.blueprint.core.api.conditions.config.IConfigPredicate"

export interface $IConfigPredicateSerializer<T extends $IConfigPredicate> {

 "write"(arg0: $JsonObject$$Type, arg1: $IConfigPredicate$$Type): void
 "read"(arg0: $JsonObject$$Type): T
 "getID"(): $ResourceLocation
get "iD"(): $ResourceLocation
}

export namespace $IConfigPredicateSerializer {
const probejs$$marker: never
}
export class $IConfigPredicateSerializer$$Static<T extends $IConfigPredicate> implements $IConfigPredicateSerializer {


 "write"(arg0: $JsonObject$$Type, arg1: $IConfigPredicate$$Type): void
 "read"(arg0: $JsonObject$$Type): T
 "getID"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigPredicateSerializer$$Type<T> = ($IConfigPredicateSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigPredicateSerializer_<T> = $IConfigPredicateSerializer$$Type<(T)>;
}}
declare module "com.teamabnormals.blueprint.common.block.BlueprintChiseledBookShelfBlock" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Vec2, $Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ChiseledBookShelfBlock, $ChiseledBookShelfBlock$$Type} from "net.minecraft.world.level.block.ChiseledBookShelfBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlueprintChiseledBookShelfBlock extends $ChiseledBookShelfBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ChiseledBookShelfBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BOOKS_PER_ROW": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "SLOT_OCCUPIED_PROPERTIES": $List<($BooleanProperty)>
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "getRelativeHitCoordinatesForBlockFace"(arg0: $BlockHitResult$$Type, arg1: $Direction$$Type): $Optional<($Vec2)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getHitSlot"(arg0: $Vec2$$Type): $OptionalInt
public "getHitSlot"(arg0: $BlockHitResult$$Type, arg1: $BlockState$$Type): $OptionalInt
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlueprintChiseledBookShelfBlock$$Type = ($BlueprintChiseledBookShelfBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlueprintChiseledBookShelfBlock_ = $BlueprintChiseledBookShelfBlock$$Type;
}}
declare module "com.teamabnormals.blueprint.common.world.storage.receiver.BlueprintServerLevel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlueprintServerLevel {

 "getLevelData"(arg0: integer): any

(arg0: integer): any
}

export namespace $BlueprintServerLevel {
const probejs$$marker: never
}
export class $BlueprintServerLevel$$Static implements $BlueprintServerLevel {


 "getLevelData"(arg0: integer): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlueprintServerLevel$$Type = ((arg0: integer) => any);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlueprintServerLevel_ = $BlueprintServerLevel$$Type;
}}
declare module "com.teamabnormals.woodworks.common.block.SawmillBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror, $Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SawmillBlock extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "CONTAINER_TITLE": $Component
static readonly "SHAPES": ($VoxelShape)[]
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
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useShapeForLightOcclusion"(arg0: $BlockState$$Type): boolean
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getMenuProvider"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $MenuProvider
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SawmillBlock$$Type = ($SawmillBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SawmillBlock_ = $SawmillBlock$$Type;
}}
declare module "com.teamabnormals.woodworks.common.block.ChiseledDarkOakBookShelfBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlueprintChiseledBookShelfBlock, $BlueprintChiseledBookShelfBlock$$Type} from "com.teamabnormals.blueprint.common.block.BlueprintChiseledBookShelfBlock"
import {$List, $List$$Type} from "java.util.List"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$Vec2, $Vec2$$Type} from "net.minecraft.world.phys.Vec2"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ChiseledBookShelfBlock, $ChiseledBookShelfBlock$$Type} from "net.minecraft.world.level.block.ChiseledBookShelfBlock"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ChiseledDarkOakBookShelfBlock extends $BlueprintChiseledBookShelfBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ChiseledBookShelfBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BOOKS_PER_ROW": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "SLOT_OCCUPIED_PROPERTIES": $List<($BooleanProperty)>
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getHitSlot"(arg0: $Vec2$$Type): $OptionalInt
public static "getSection"(arg0: integer, arg1: float): integer
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChiseledDarkOakBookShelfBlock$$Type = ($ChiseledDarkOakBookShelfBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChiseledDarkOakBookShelfBlock_ = $ChiseledDarkOakBookShelfBlock$$Type;
}}
declare module "com.teamabnormals.blueprint.common.block.LeafPileBlock" {
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$$Type} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$MultifaceBlock, $MultifaceBlock$$Type} from "net.minecraft.world.level.block.MultifaceBlock"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$MultifaceSpreader, $MultifaceSpreader$$Type} from "net.minecraft.world.level.block.MultifaceSpreader"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $LeafPileBlock extends $MultifaceBlock implements $SimpleWaterloggedBlock {
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
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
 "hasCollision": boolean

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getSpreader"(): $MultifaceSpreader
public "canBeReplaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "asHolder"(): $Holder<(any)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
get "spreader"(): $MultifaceSpreader
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeafPileBlock$$Type = ($LeafPileBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LeafPileBlock_ = $LeafPileBlock$$Type;
}}
declare module "com.teamabnormals.blueprint.core.api.conditions.ConfigValueCondition" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$DynamicOps, $DynamicOps$$Type} from "com.mojang.serialization.DynamicOps"
import {$WithConditions, $WithConditions$$Type} from "net.neoforged.neoforge.common.conditions.WithConditions"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$IConfigPredicate, $IConfigPredicate$$Type} from "com.teamabnormals.blueprint.core.api.conditions.config.IConfigPredicate"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ModConfigSpec$ConfigValue, $ModConfigSpec$ConfigValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$ConfigValue"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ICondition$IContext, $ICondition$IContext$$Type} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export class $ConfigValueCondition implements $ICondition {

constructor(arg0: $MapCodec$$Type<($ConfigValueCondition$$Type)>, arg1: string)
constructor(arg0: $MapCodec$$Type<($ConfigValueCondition$$Type)>, arg1: string, arg2: boolean)
constructor(arg0: $MapCodec$$Type<($ConfigValueCondition$$Type)>, arg1: string, arg2: $Map$$Type<($IConfigPredicate$$Type), (boolean)>, arg3: boolean)
constructor(arg0: $MapCodec$$Type<($ConfigValueCondition$$Type)>, arg1: $ModConfigSpec$ConfigValue$$Type<(any)>, arg2: string, arg3: $Map$$Type<($IConfigPredicate$$Type), (boolean)>, arg4: boolean)

public "test"(arg0: $ICondition$IContext$$Type): boolean
public "codec"(): $MapCodec<($ICondition)>
public static "getWithConditionalCodec"<V, T>(arg0: $Codec$$Type<($Optional$$Type<(T)>)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
public static "getWithWithConditionsCodec"<V, T>(arg0: $Codec$$Type<($Optional$$Type<($WithConditions$$Type<(T)>)>)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
public static "getConditionally"<V, T>(arg0: $Codec$$Type<(T)>, arg1: $DynamicOps$$Type<(V)>, arg2: V): $Optional<(T)>
public static "writeConditions"(arg0: $DynamicOps$$Type<($JsonElement$$Type)>, arg1: $JsonObject$$Type, arg2: $List$$Type<($ICondition$$Type)>): void
public static "writeConditions"(arg0: $HolderLookup$Provider$$Type, arg1: $JsonObject$$Type, ...arg2: ($ICondition$$Type)[]): void
public static "writeConditions"(arg0: $HolderLookup$Provider$$Type, arg1: $JsonObject$$Type, arg2: $List$$Type<($ICondition$$Type)>): void
public static "conditionsMatched"<V>(arg0: $DynamicOps$$Type<(V)>, arg1: V): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigValueCondition$$Type = ($ConfigValueCondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigValueCondition_ = $ConfigValueCondition$$Type;
}}
declare module "com.teamabnormals.blueprint.core.events.EntityStepEvent" {
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EntityStepEvent extends $Event implements $ICancellableEvent {

constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Entity$$Type)

public "getEntity"(): $Entity
public "getState"(): $BlockState
public "getLevel"(): $Level
public static "onEntityStep"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Entity$$Type): boolean
public "getPos"(): $BlockPos
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "entity"(): $Entity
get "state"(): $BlockState
get "level"(): $Level
get "pos"(): $BlockPos
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityStepEvent$$Type = ($EntityStepEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityStepEvent_ = $EntityStepEvent$$Type;
}}
