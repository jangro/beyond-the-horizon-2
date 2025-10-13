declare module "tschipp.carryon.common.scripting.CarryOnScript$ScriptEffects" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $CarryOnScript$ScriptEffects extends $Record {
static readonly "CODEC": $Codec<($CarryOnScript$ScriptEffects)>
static readonly "EMPTY": $CarryOnScript$ScriptEffects

constructor(commandInit: StringJS, commandLoop: StringJS, commandPlace: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "commandLoop"(): StringJS
public "commandInit"(): StringJS
public "commandPlace"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarryOnScript$ScriptEffects$$Type = ({"commandLoop"?: StringJS, "commandPlace"?: StringJS, "commandInit"?: StringJS}) | ([commandLoop?: StringJS, commandPlace?: StringJS, commandInit?: StringJS]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarryOnScript$ScriptEffects_ = $CarryOnScript$ScriptEffects$$Type;
}}
declare module "tschipp.carryon.common.scripting.Matchables$ScoreboardCondition" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Matchables$Matchable, $Matchables$Matchable$$Type} from "tschipp.carryon.common.scripting.Matchables$Matchable"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Matchables$ScoreboardCondition extends $Record implements $Matchables$Matchable<($ServerPlayer)> {
static readonly "CODEC": $Codec<($Matchables$ScoreboardCondition)>
static readonly "NONE": $Matchables$ScoreboardCondition

constructor(cond: StringJS)

public "cond"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: any): boolean
public "matches"(arg0: $ServerPlayer$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matchables$ScoreboardCondition$$Type = ({"cond"?: StringJS}) | ([cond?: StringJS]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Matchables$ScoreboardCondition_ = $Matchables$ScoreboardCondition$$Type;
}}
declare module "tschipp.carryon.common.carry.CarryOnData" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$CarryOnScript, $CarryOnScript$$Type} from "tschipp.carryon.common.scripting.CarryOnScript"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$CarryOnData$CarryType, $CarryOnData$CarryType$$Type} from "tschipp.carryon.common.carry.CarryOnData$CarryType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CarryOnData {

constructor(arg0: $CompoundTag$$Type)

public "getBlock"(): $BlockState
public "getSelected"(): integer
public "clone"(): any
public "clear"(): void
public "getEntity"(arg0: $Level$$Type): $Entity
public "getNbt"(): $CompoundTag
public "setSelected"(arg0: integer): void
public "isCarrying"(arg0: $CarryOnData$CarryType$$Type): boolean
public "isCarrying"(): boolean
public "getBlockEntity"(arg0: $BlockPos$$Type, arg1: $HolderLookup$Provider$$Type): $BlockEntity
public "setBlock"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): void
public "getContentNbt"(): $CompoundTag
public "setKeyPressed"(arg0: boolean): void
public "setEntity"(arg0: $Entity$$Type): void
public "isKeyPressed"(): boolean
public "getTick"(): integer
public "getActiveScript"(): $Optional<($CarryOnScript)>
public "setActiveScript"(arg0: $CarryOnScript$$Type): void
public "setCarryingPlayer"(): void
get "block"(): $BlockState
get "selected"(): integer
get "nbt"(): $CompoundTag
set "selected"(value: integer)
get "carrying"(): boolean
get "contentNbt"(): $CompoundTag
set "keyPressed"(value: boolean)
set "entity"(value: $Entity$$Type)
get "keyPressed"(): boolean
get "tick"(): integer
get "activeScript"(): $Optional<($CarryOnScript)>
set "activeScript"(value: $CarryOnScript$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarryOnData$$Type = ($CarryOnData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarryOnData_ = $CarryOnData$$Type;
}}
declare module "tschipp.carryon.common.scripting.CarryOnScript$ScriptObject" {
import {$CarryOnScript$ScriptObject$ScriptObjectBlock, $CarryOnScript$ScriptObject$ScriptObjectBlock$$Type} from "tschipp.carryon.common.scripting.CarryOnScript$ScriptObject$ScriptObjectBlock"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$CarryOnScript$ScriptObject$ScriptObjectEntity, $CarryOnScript$ScriptObject$ScriptObjectEntity$$Type} from "tschipp.carryon.common.scripting.CarryOnScript$ScriptObject$ScriptObjectEntity"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $CarryOnScript$ScriptObject extends $Record {
static readonly "CODEC": $Codec<($CarryOnScript$ScriptObject)>

constructor(block: $CarryOnScript$ScriptObject$ScriptObjectBlock$$Type, entity: $CarryOnScript$ScriptObject$ScriptObjectEntity$$Type)

public "entity"(): $CarryOnScript$ScriptObject$ScriptObjectEntity
public "block"(): $CarryOnScript$ScriptObject$ScriptObjectBlock
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarryOnScript$ScriptObject$$Type = ({"block"?: $CarryOnScript$ScriptObject$ScriptObjectBlock$$Type, "entity"?: $CarryOnScript$ScriptObject$ScriptObjectEntity$$Type}) | ([block?: $CarryOnScript$ScriptObject$ScriptObjectBlock$$Type, entity?: $CarryOnScript$ScriptObject$ScriptObjectEntity$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarryOnScript$ScriptObject_ = $CarryOnScript$ScriptObject$$Type;
}}
declare module "tschipp.carryon.common.scripting.CarryOnScript$ScriptRender" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Matchables$OptionalVec3, $Matchables$OptionalVec3$$Type} from "tschipp.carryon.common.scripting.Matchables$OptionalVec3"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $CarryOnScript$ScriptRender extends $Record {
static readonly "CODEC": $Codec<($CarryOnScript$ScriptRender)>
static readonly "EMPTY": $CarryOnScript$ScriptRender

constructor(renderNameBlock: $Optional$$Type<($ResourceKey$$Type<($Block$$Type)>)>, renderNameEntity: $Optional$$Type<($ResourceKey$$Type<($EntityType$$Type<(any)>)>)>, renderNBT: $Optional$$Type<($CompoundTag$$Type)>, renderTranslation: $Matchables$OptionalVec3$$Type, renderRotation: $Matchables$OptionalVec3$$Type, renderscale: $Matchables$OptionalVec3$$Type, renderRotationLeftArm: $Matchables$OptionalVec3$$Type, renderRotationRightArm: $Matchables$OptionalVec3$$Type, renderLeftArm: boolean, renderRightArm: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "renderLeftArm"(): boolean
public "renderRightArm"(): boolean
public "renderRotationLeftArm"(): $Matchables$OptionalVec3
public "renderRotationRightArm"(): $Matchables$OptionalVec3
public "renderscale"(): $Matchables$OptionalVec3
public "renderRotation"(): $Matchables$OptionalVec3
public "renderNBT"(): $Optional<($CompoundTag)>
public "renderNameBlock"(): $Optional<($ResourceKey<($Block)>)>
public "renderNameEntity"(): $Optional<($ResourceKey<($EntityType<(any)>)>)>
public "renderTranslation"(): $Matchables$OptionalVec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarryOnScript$ScriptRender$$Type = ({"renderRotationLeftArm"?: $Matchables$OptionalVec3$$Type, "renderNameBlock"?: ($ResourceKey$$Type<($Block$$Type)>)?, "renderNBT"?: ($CompoundTag$$Type)?, "renderLeftArm"?: boolean, "renderNameEntity"?: ($ResourceKey$$Type<($EntityType$$Type<(never)>)>)?, "renderRotationRightArm"?: $Matchables$OptionalVec3$$Type, "renderTranslation"?: $Matchables$OptionalVec3$$Type, "renderRotation"?: $Matchables$OptionalVec3$$Type, "renderRightArm"?: boolean, "renderscale"?: $Matchables$OptionalVec3$$Type}) | ([renderRotationLeftArm?: $Matchables$OptionalVec3$$Type, renderNameBlock?: ($ResourceKey$$Type<($Block$$Type)>)?, renderNBT?: ($CompoundTag$$Type)?, renderLeftArm?: boolean, renderNameEntity?: ($ResourceKey$$Type<($EntityType$$Type<(never)>)>)?, renderRotationRightArm?: $Matchables$OptionalVec3$$Type, renderTranslation?: $Matchables$OptionalVec3$$Type, renderRotation?: $Matchables$OptionalVec3$$Type, renderRightArm?: boolean, renderscale?: $Matchables$OptionalVec3$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarryOnScript$ScriptRender_ = $CarryOnScript$ScriptRender$$Type;
}}
declare module "tschipp.carryon.common.scripting.CarryOnScript$ScriptObject$ScriptObjectBlock" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Matchables$NBTCondition, $Matchables$NBTCondition$$Type} from "tschipp.carryon.common.scripting.Matchables$NBTCondition"
import {$Matchables$NumberBoundCondition, $Matchables$NumberBoundCondition$$Type} from "tschipp.carryon.common.scripting.Matchables$NumberBoundCondition"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $CarryOnScript$ScriptObject$ScriptObjectBlock extends $Record {
static readonly "CODEC": $Codec<($CarryOnScript$ScriptObject$ScriptObjectBlock)>
static readonly "EMPTY": $CarryOnScript$ScriptObject$ScriptObjectBlock

constructor(typeNameBlock: $Optional$$Type<($ResourceKey$$Type<($Block$$Type)>)>, typeHardness: $Matchables$NumberBoundCondition$$Type, typeResistance: $Matchables$NumberBoundCondition$$Type, typeBlockTag: $Matchables$NBTCondition$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "typeNameBlock"(): $Optional<($ResourceKey<($Block)>)>
public "typeBlockTag"(): $Matchables$NBTCondition
public "typeHardness"(): $Matchables$NumberBoundCondition
public "typeResistance"(): $Matchables$NumberBoundCondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarryOnScript$ScriptObject$ScriptObjectBlock$$Type = ({"typeResistance"?: $Matchables$NumberBoundCondition$$Type, "typeHardness"?: $Matchables$NumberBoundCondition$$Type, "typeBlockTag"?: $Matchables$NBTCondition$$Type, "typeNameBlock"?: ($ResourceKey$$Type<($Block$$Type)>)?}) | ([typeResistance?: $Matchables$NumberBoundCondition$$Type, typeHardness?: $Matchables$NumberBoundCondition$$Type, typeBlockTag?: $Matchables$NBTCondition$$Type, typeNameBlock?: ($ResourceKey$$Type<($Block$$Type)>)?]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarryOnScript$ScriptObject$ScriptObjectBlock_ = $CarryOnScript$ScriptObject$ScriptObjectBlock$$Type;
}}
declare module "tschipp.carryon.common.scripting.Matchables$AdvancementCondition" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Matchables$Matchable, $Matchables$Matchable$$Type} from "tschipp.carryon.common.scripting.Matchables$Matchable"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Matchables$AdvancementCondition extends $Record implements $Matchables$Matchable<($ServerPlayer)> {
static readonly "CODEC": $Codec<($Matchables$AdvancementCondition)>
static readonly "NONE": $Matchables$AdvancementCondition

constructor(advancement: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: any): boolean
public "matches"(arg0: $ServerPlayer$$Type): boolean
public "advancement"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matchables$AdvancementCondition$$Type = ({"advancement"?: StringJS}) | ([advancement?: StringJS]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Matchables$AdvancementCondition_ = $Matchables$AdvancementCondition$$Type;
}}
declare module "tschipp.carryon.common.scripting.CarryOnScript$ScriptObject$ScriptObjectEntity" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Matchables$NBTCondition, $Matchables$NBTCondition$$Type} from "tschipp.carryon.common.scripting.Matchables$NBTCondition"
import {$Matchables$NumberBoundCondition, $Matchables$NumberBoundCondition$$Type} from "tschipp.carryon.common.scripting.Matchables$NumberBoundCondition"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $CarryOnScript$ScriptObject$ScriptObjectEntity extends $Record {
static readonly "CODEC": $Codec<($CarryOnScript$ScriptObject$ScriptObjectEntity)>
static readonly "EMPTY": $CarryOnScript$ScriptObject$ScriptObjectEntity

constructor(typeNameEntity: $Optional$$Type<($ResourceKey$$Type<($EntityType$$Type<(any)>)>)>, typeHealth: $Matchables$NumberBoundCondition$$Type, typeHeight: $Matchables$NumberBoundCondition$$Type, typeWidth: $Matchables$NumberBoundCondition$$Type, typeEntityTag: $Matchables$NBTCondition$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "typeWidth"(): $Matchables$NumberBoundCondition
public "typeNameEntity"(): $Optional<($ResourceKey<($EntityType<(any)>)>)>
public "typeHeight"(): $Matchables$NumberBoundCondition
public "typeHealth"(): $Matchables$NumberBoundCondition
public "typeEntityTag"(): $Matchables$NBTCondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarryOnScript$ScriptObject$ScriptObjectEntity$$Type = ({"typeHeight"?: $Matchables$NumberBoundCondition$$Type, "typeNameEntity"?: ($ResourceKey$$Type<($EntityType$$Type<(never)>)>)?, "typeWidth"?: $Matchables$NumberBoundCondition$$Type, "typeEntityTag"?: $Matchables$NBTCondition$$Type, "typeHealth"?: $Matchables$NumberBoundCondition$$Type}) | ([typeHeight?: $Matchables$NumberBoundCondition$$Type, typeNameEntity?: ($ResourceKey$$Type<($EntityType$$Type<(never)>)>)?, typeWidth?: $Matchables$NumberBoundCondition$$Type, typeEntityTag?: $Matchables$NBTCondition$$Type, typeHealth?: $Matchables$NumberBoundCondition$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarryOnScript$ScriptObject$ScriptObjectEntity_ = $CarryOnScript$ScriptObject$ScriptObjectEntity$$Type;
}}
declare module "tschipp.carryon.common.scripting.Matchables$OptionalVec3" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"

export class $Matchables$OptionalVec3 {
static readonly "CODEC": $Codec<($Matchables$OptionalVec3)>
static readonly "NONE": $Matchables$OptionalVec3

constructor(arg0: StringJS)

public "getVec"(arg0: double, arg1: double, arg2: double): $Vec3
public "getVec"(): $Vec3
get "vec"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matchables$OptionalVec3$$Type = ($Matchables$OptionalVec3);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Matchables$OptionalVec3_ = $Matchables$OptionalVec3$$Type;
}}
declare module "tschipp.carryon.common.scripting.Matchables$Matchable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Matchables$Matchable<T> {

 "matches"(arg0: T): boolean

(arg0: T): boolean
}

export namespace $Matchables$Matchable {
const probejs$$marker: never
}
export class $Matchables$Matchable$$Static<T> implements $Matchables$Matchable {


 "matches"(arg0: T): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matchables$Matchable$$Type<T> = ((arg0: T) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Matchables$Matchable_<T> = $Matchables$Matchable$$Type<(T)>;
}}
declare module "tschipp.carryon.events.EntityPickupEvent" {
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $EntityPickupEvent extends $Event implements $ICancellableEvent {
readonly "player": $ServerPlayer
readonly "target": $Entity

constructor(arg0: $ServerPlayer$$Type, arg1: $Entity$$Type)

public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPickupEvent$$Type = ($EntityPickupEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityPickupEvent_ = $EntityPickupEvent$$Type;
}}
declare module "tschipp.carryon.common.carry.CarryOnData$CarryType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $CarryOnData$CarryType extends $Enum<($CarryOnData$CarryType)> {
static readonly "PLAYER": $CarryOnData$CarryType
static readonly "ENTITY": $CarryOnData$CarryType
static readonly "BLOCK": $CarryOnData$CarryType
static readonly "INVALID": $CarryOnData$CarryType


public static "values"(): ($CarryOnData$CarryType)[]
public static "valueOf"(arg0: StringJS): $CarryOnData$CarryType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarryOnData$CarryType$$Type = (("block") | ("entity") | ("player") | ("invalid"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarryOnData$CarryType_ = $CarryOnData$CarryType$$Type;
}}
declare module "tschipp.carryon.common.scripting.Matchables$NumberBoundCondition" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Matchables$Matchable, $Matchables$Matchable$$Type} from "tschipp.carryon.common.scripting.Matchables$Matchable"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Matchables$NumberBoundCondition extends $Record implements $Matchables$Matchable<(number)> {
static readonly "CODEC": $Codec<($Matchables$NumberBoundCondition)>
static readonly "NONE": $Matchables$NumberBoundCondition

constructor(bounds: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: any): boolean
public "matches"(arg0: number): boolean
public "bounds"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matchables$NumberBoundCondition$$Type = ({"bounds"?: StringJS}) | ([bounds?: StringJS]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Matchables$NumberBoundCondition_ = $Matchables$NumberBoundCondition$$Type;
}}
declare module "tschipp.carryon.common.carry.CarryOnDataManager$ICarrying" {
import {$CarryOnData, $CarryOnData$$Type} from "tschipp.carryon.common.carry.CarryOnData"

export interface $CarryOnDataManager$ICarrying {

 "setCarryOnData"(arg0: $CarryOnData$$Type): void
 "getCarryOnData"(): $CarryOnData
set "carryOnData"(value: $CarryOnData$$Type)
get "carryOnData"(): $CarryOnData
}

export namespace $CarryOnDataManager$ICarrying {
const probejs$$marker: never
}
export class $CarryOnDataManager$ICarrying$$Static implements $CarryOnDataManager$ICarrying {


 "setCarryOnData"(arg0: $CarryOnData$$Type): void
 "getCarryOnData"(): $CarryOnData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarryOnDataManager$ICarrying$$Type = ($CarryOnDataManager$ICarrying);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarryOnDataManager$ICarrying_ = $CarryOnDataManager$ICarrying$$Type;
}}
declare module "tschipp.carryon.common.scripting.Matchables$EffectsCondition" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Matchables$Matchable, $Matchables$Matchable$$Type} from "tschipp.carryon.common.scripting.Matchables$Matchable"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Matchables$EffectsCondition extends $Record implements $Matchables$Matchable<($ServerPlayer)> {
static readonly "CODEC": $Codec<($Matchables$EffectsCondition)>
static readonly "NONE": $Matchables$EffectsCondition

constructor(effects: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: any): boolean
public "matches"(arg0: $ServerPlayer$$Type): boolean
public "effects"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matchables$EffectsCondition$$Type = ({"effects"?: StringJS}) | ([effects?: StringJS]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Matchables$EffectsCondition_ = $Matchables$EffectsCondition$$Type;
}}
declare module "tschipp.carryon.common.scripting.CarryOnScript$ScriptConditions" {
import {$Matchables$AdvancementCondition, $Matchables$AdvancementCondition$$Type} from "tschipp.carryon.common.scripting.Matchables$AdvancementCondition"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Matchables$GamestageCondition, $Matchables$GamestageCondition$$Type} from "tschipp.carryon.common.scripting.Matchables$GamestageCondition"
import {$Matchables$PositionCondition, $Matchables$PositionCondition$$Type} from "tschipp.carryon.common.scripting.Matchables$PositionCondition"
import {$Matchables$NumberBoundCondition, $Matchables$NumberBoundCondition$$Type} from "tschipp.carryon.common.scripting.Matchables$NumberBoundCondition"
import {$Matchables$EffectsCondition, $Matchables$EffectsCondition$$Type} from "tschipp.carryon.common.scripting.Matchables$EffectsCondition"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$Matchables$ScoreboardCondition, $Matchables$ScoreboardCondition$$Type} from "tschipp.carryon.common.scripting.Matchables$ScoreboardCondition"

export class $CarryOnScript$ScriptConditions extends $Record {
static readonly "CODEC": $Codec<($CarryOnScript$ScriptConditions)>
static readonly "EMPTY": $CarryOnScript$ScriptConditions

constructor(conditionGamestage: $Matchables$GamestageCondition$$Type, conditionAchievement: $Matchables$AdvancementCondition$$Type, conditionXp: $Matchables$NumberBoundCondition$$Type, conditionGamemode: $Matchables$NumberBoundCondition$$Type, conditionScoreboard: $Matchables$ScoreboardCondition$$Type, conditionPosition: $Matchables$PositionCondition$$Type, conditionEffects: $Matchables$EffectsCondition$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "conditionXp"(): $Matchables$NumberBoundCondition
public "conditionGamestage"(): $Matchables$GamestageCondition
public "conditionAchievement"(): $Matchables$AdvancementCondition
public "conditionGamemode"(): $Matchables$NumberBoundCondition
public "conditionPosition"(): $Matchables$PositionCondition
public "conditionScoreboard"(): $Matchables$ScoreboardCondition
public "conditionEffects"(): $Matchables$EffectsCondition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarryOnScript$ScriptConditions$$Type = ({"conditionEffects"?: $Matchables$EffectsCondition$$Type, "conditionAchievement"?: $Matchables$AdvancementCondition$$Type, "conditionXp"?: $Matchables$NumberBoundCondition$$Type, "conditionPosition"?: $Matchables$PositionCondition$$Type, "conditionScoreboard"?: $Matchables$ScoreboardCondition$$Type, "conditionGamemode"?: $Matchables$NumberBoundCondition$$Type, "conditionGamestage"?: $Matchables$GamestageCondition$$Type}) | ([conditionEffects?: $Matchables$EffectsCondition$$Type, conditionAchievement?: $Matchables$AdvancementCondition$$Type, conditionXp?: $Matchables$NumberBoundCondition$$Type, conditionPosition?: $Matchables$PositionCondition$$Type, conditionScoreboard?: $Matchables$ScoreboardCondition$$Type, conditionGamemode?: $Matchables$NumberBoundCondition$$Type, conditionGamestage?: $Matchables$GamestageCondition$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarryOnScript$ScriptConditions_ = $CarryOnScript$ScriptConditions$$Type;
}}
declare module "tschipp.carryon.common.scripting.Matchables$PositionCondition" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Matchables$Matchable, $Matchables$Matchable$$Type} from "tschipp.carryon.common.scripting.Matchables$Matchable"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Matchables$PositionCondition extends $Record implements $Matchables$Matchable<($ServerPlayer)> {
static readonly "CODEC": $Codec<($Matchables$PositionCondition)>
static readonly "NONE": $Matchables$PositionCondition

constructor(cond: StringJS)

public "cond"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: any): boolean
public "matches"(arg0: $ServerPlayer$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matchables$PositionCondition$$Type = ({"cond"?: StringJS}) | ([cond?: StringJS]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Matchables$PositionCondition_ = $Matchables$PositionCondition$$Type;
}}
declare module "tschipp.carryon.common.scripting.Matchables$GamestageCondition" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Matchables$Matchable, $Matchables$Matchable$$Type} from "tschipp.carryon.common.scripting.Matchables$Matchable"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Matchables$GamestageCondition extends $Record implements $Matchables$Matchable<($ServerPlayer)> {
static readonly "CODEC": $Codec<($Matchables$GamestageCondition)>
static readonly "NONE": $Matchables$GamestageCondition

constructor(gamestage: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: any): boolean
public "matches"(arg0: $ServerPlayer$$Type): boolean
public "gamestage"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matchables$GamestageCondition$$Type = ({"gamestage"?: StringJS}) | ([gamestage?: StringJS]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Matchables$GamestageCondition_ = $Matchables$GamestageCondition$$Type;
}}
declare module "tschipp.carryon.common.scripting.Matchables$NBTCondition" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Matchables$Matchable, $Matchables$Matchable$$Type} from "tschipp.carryon.common.scripting.Matchables$Matchable"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Matchables$NBTCondition extends $Record implements $Matchables$Matchable<($CompoundTag)> {
static readonly "CODEC": $Codec<($Matchables$NBTCondition)>
static readonly "NONE": $Matchables$NBTCondition

constructor(tag: $CompoundTag$$Type)

public "tag"(): $CompoundTag
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "matches"(arg0: any): boolean
public "matches"(arg0: $CompoundTag$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matchables$NBTCondition$$Type = ({"tag"?: $CompoundTag$$Type}) | ([tag?: $CompoundTag$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Matchables$NBTCondition_ = $Matchables$NBTCondition$$Type;
}}
declare module "tschipp.carryon.common.scripting.CarryOnScript" {
import {$CarryOnScript$ScriptEffects, $CarryOnScript$ScriptEffects$$Type} from "tschipp.carryon.common.scripting.CarryOnScript$ScriptEffects"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$CarryOnScript$ScriptConditions, $CarryOnScript$ScriptConditions$$Type} from "tschipp.carryon.common.scripting.CarryOnScript$ScriptConditions"
import {$CarryOnScript$ScriptRender, $CarryOnScript$ScriptRender$$Type} from "tschipp.carryon.common.scripting.CarryOnScript$ScriptRender"
import {$CarryOnScript$ScriptObject, $CarryOnScript$ScriptObject$$Type} from "tschipp.carryon.common.scripting.CarryOnScript$ScriptObject"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $CarryOnScript extends $Record {
static readonly "CODEC": $Codec<($CarryOnScript)>

constructor(priority: long, scriptObject: $CarryOnScript$ScriptObject$$Type, scriptConditions: $CarryOnScript$ScriptConditions$$Type, scriptRender: $CarryOnScript$ScriptRender$$Type, scriptEffects: $CarryOnScript$ScriptEffects$$Type)

public "isValid"(): boolean
public "isEntity"(): boolean
public "priority"(): long
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "scriptObject"(): $CarryOnScript$ScriptObject
public "scriptEffects"(): $CarryOnScript$ScriptEffects
public "isBlock"(): boolean
public "scriptRender"(): $CarryOnScript$ScriptRender
public "scriptConditions"(): $CarryOnScript$ScriptConditions
public "fulfillsConditions"(arg0: $ServerPlayer$$Type): boolean
get "valid"(): boolean
get "entity"(): boolean
get "block"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarryOnScript$$Type = ({"scriptEffects"?: $CarryOnScript$ScriptEffects$$Type, "scriptObject"?: $CarryOnScript$ScriptObject$$Type, "scriptConditions"?: $CarryOnScript$ScriptConditions$$Type, "scriptRender"?: $CarryOnScript$ScriptRender$$Type, "priority"?: long}) | ([scriptEffects?: $CarryOnScript$ScriptEffects$$Type, scriptObject?: $CarryOnScript$ScriptObject$$Type, scriptConditions?: $CarryOnScript$ScriptConditions$$Type, scriptRender?: $CarryOnScript$ScriptRender$$Type, priority?: long]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarryOnScript_ = $CarryOnScript$$Type;
}}
