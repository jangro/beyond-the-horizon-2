declare module "corgitaco.corgilib.entity.condition.ConditionContext" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ConditionContext extends $Record {

constructor(conditionContext: $ConditionContext$$Type, entity: $LivingEntity$$Type)
constructor(world: $Level$$Type, entity: $LivingEntity$$Type, isDeadOrDying: boolean, previousConditionsPassed: integer)

public "entity"(): $LivingEntity
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "previousConditionsPassed"(): integer
public "isDeadOrDying"(): boolean
public "world"(): $Level
get "deadOrDying"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionContext$$Type = ({"previousConditionsPassed"?: integer, "world"?: $Level$$Type, "entity"?: $LivingEntity$$Type, "isDeadOrDying"?: boolean}) | ([previousConditionsPassed?: integer, world?: $Level$$Type, entity?: $LivingEntity$$Type, isDeadOrDying?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConditionContext_ = $ConditionContext$$Type;
}}
declare module "corgitaco.corgilib.entity.condition.Condition" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConditionContext, $ConditionContext$$Type} from "corgitaco.corgilib.entity.condition.ConditionContext"

export interface $Condition {

 "passes"(arg0: $ConditionContext$$Type): boolean
 "codec"(): $Codec<($Condition)>
}

export namespace $Condition {
const CODEC: $Codec<($Condition)>
function register(id: string, codec: $Codec$$Type<($Condition$$Type)>): void
function register(): void
const probejs$$marker: never
}
export class $Condition$$Static implements $Condition {
static readonly "CODEC": $Codec<($Condition)>


static "register"(id: string, codec: $Codec$$Type<($Condition$$Type)>): void
static "register"(): void
 "passes"(arg0: $ConditionContext$$Type): boolean
 "codec"(): $Codec<($Condition)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Condition$$Type = ($Condition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Condition_ = $Condition$$Type;
}}
declare module "corgitaco.corgilib.math.blendingfunction.BlendingFunction" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"

export interface $BlendingFunction {

 "apply"(factor: double, min: double, max: double): double
 "apply"(arg0: double): double
 "codec"(): $Codec<($BlendingFunction)>
}

export namespace $BlendingFunction {
const CODEC: $Codec<($BlendingFunction)>
function register(): void
const probejs$$marker: never
}
export class $BlendingFunction$$Static implements $BlendingFunction {
static readonly "CODEC": $Codec<($BlendingFunction)>


 "apply"(factor: double, min: double, max: double): double
 "apply"(arg0: double): double
static "register"(): void
 "codec"(): $Codec<($BlendingFunction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlendingFunction$$Type = ($BlendingFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlendingFunction_ = $BlendingFunction$$Type;
}}
declare module "corgitaco.corgilib.entity.IsInsideStructureTracker$Access" {
import {$IsInsideStructureTracker, $IsInsideStructureTracker$$Type} from "corgitaco.corgilib.entity.IsInsideStructureTracker"

export interface $IsInsideStructureTracker$Access {

 "getIsInsideStructureTracker"(): $IsInsideStructureTracker

(): $IsInsideStructureTracker$$Type
get "isInsideStructureTracker"(): $IsInsideStructureTracker
}

export namespace $IsInsideStructureTracker$Access {
const probejs$$marker: never
}
export class $IsInsideStructureTracker$Access$$Static implements $IsInsideStructureTracker$Access {


 "getIsInsideStructureTracker"(): $IsInsideStructureTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IsInsideStructureTracker$Access$$Type = (() => $IsInsideStructureTracker$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IsInsideStructureTracker$Access_ = $IsInsideStructureTracker$Access$$Type;
}}
declare module "corgitaco.corgilib.entity.IsInsideStructureTracker$IsInside" {
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"

export class $IsInsideStructureTracker$IsInside {
static readonly "CODEC": $Codec<($IsInsideStructureTracker$IsInside)>

constructor(insideStructure: boolean, insideStructurePiece: boolean)

public "isInsideStructurePiece"(): boolean
public "isInsideStructure"(): boolean
public "setInsideStructure"(insideStructure: boolean): $IsInsideStructureTracker$IsInside
public "setInsideStructurePiece"(insideStructurePiece: boolean): $IsInsideStructureTracker$IsInside
get "insideStructurePiece"(): boolean
get "insideStructure"(): boolean
set "insideStructure"(value: boolean)
set "insideStructurePiece"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IsInsideStructureTracker$IsInside$$Type = ($IsInsideStructureTracker$IsInside);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IsInsideStructureTracker$IsInside_ = $IsInsideStructureTracker$IsInside$$Type;
}}
declare module "corgitaco.corgilib.entity.IsInsideStructureTracker" {
import {$IsInsideStructureTracker$IsInside, $IsInsideStructureTracker$IsInside$$Type} from "corgitaco.corgilib.entity.IsInsideStructureTracker$IsInside"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $IsInsideStructureTracker {

constructor()

public "setInside"(world: $Level$$Type, entity: $Entity$$Type, isInside: $IsInsideStructureTracker$IsInside$$Type): void
public "getTracker"(): $IsInsideStructureTracker$IsInside
get "tracker"(): $IsInsideStructureTracker$IsInside
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IsInsideStructureTracker$$Type = ($IsInsideStructureTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IsInsideStructureTracker_ = $IsInsideStructureTracker$$Type;
}}
declare module "corgitaco.corgilib.world.level.RandomTickScheduler" {
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
