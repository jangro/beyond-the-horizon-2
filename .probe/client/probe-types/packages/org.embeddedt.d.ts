declare module "org.embeddedt.modernfix.neoforge.recipe.ExtendedIngredient" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtendedIngredient {

 "mfix$clearReference"(): void

(): void
}

export namespace $ExtendedIngredient {
const probejs$$marker: never
}
export class $ExtendedIngredient$$Static implements $ExtendedIngredient {


 "mfix$clearReference"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedIngredient$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedIngredient_ = $ExtendedIngredient$$Type;
}}
declare module "org.embeddedt.modernfix.neoforge.mixin.bugfix.entity_pose_stack.PoseStackAccessor" {
import {$PoseStack$Pose, $PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$Deque, $Deque$$Type} from "java.util.Deque"

export interface $PoseStackAccessor {

 "getPoseStack"(): $Deque<($PoseStack$Pose)>

(): $Deque$$Type<($PoseStack$Pose$$Type)>
get "poseStack"(): $Deque<($PoseStack$Pose)>
}

export namespace $PoseStackAccessor {
const probejs$$marker: never
}
export class $PoseStackAccessor$$Static implements $PoseStackAccessor {


 "getPoseStack"(): $Deque<($PoseStack$Pose)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseStackAccessor$$Type = (() => $Deque$$Type<($PoseStack$Pose$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoseStackAccessor_ = $PoseStackAccessor$$Type;
}}
declare module "org.embeddedt.modernfix.duck.IProfilingServerFunctionManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IProfilingServerFunctionManager {

 "mfix$getProfilingResults"(): string

(): string
}

export namespace $IProfilingServerFunctionManager {
const probejs$$marker: never
}
export class $IProfilingServerFunctionManager$$Static implements $IProfilingServerFunctionManager {


 "mfix$getProfilingResults"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProfilingServerFunctionManager$$Type = (() => string);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IProfilingServerFunctionManager_ = $IProfilingServerFunctionManager$$Type;
}}
declare module "org.embeddedt.modernfix.common.mixin.perf.reduce_blockstate_cache_rebuilds.BlockBehaviourInvoker" {
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockBehaviourInvoker {

 "invokeIsRandomlyTicking"(arg0: $BlockState$$Type): boolean
 "invokeGetFluidState"(arg0: $BlockState$$Type): $FluidState
}

export namespace $BlockBehaviourInvoker {
const probejs$$marker: never
}
export class $BlockBehaviourInvoker$$Static implements $BlockBehaviourInvoker {


 "invokeIsRandomlyTicking"(arg0: $BlockState$$Type): boolean
 "invokeGetFluidState"(arg0: $BlockState$$Type): $FluidState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBehaviourInvoker$$Type = ($BlockBehaviourInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBehaviourInvoker_ = $BlockBehaviourInvoker$$Type;
}}
declare module "org.embeddedt.modernfix.duck.ITimeTrackingServer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITimeTrackingServer {

 "mfix$getLastTickStartTime"(): long

(): long
}

export namespace $ITimeTrackingServer {
const probejs$$marker: never
}
export class $ITimeTrackingServer$$Static implements $ITimeTrackingServer {


 "mfix$getLastTickStartTime"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITimeTrackingServer$$Type = (() => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITimeTrackingServer_ = $ITimeTrackingServer$$Type;
}}
declare module "org.embeddedt.modernfix.neoforge.caps.ITrackingCapEvent" {
import {$Set, $Set$$Type} from "java.util.Set"
import {$BaseCapability, $BaseCapability$$Type} from "net.neoforged.neoforge.capabilities.BaseCapability"

export interface $ITrackingCapEvent {

 "mfix$getTrackedCaps"(): $Set<($BaseCapability<(any), (any)>)>

(): $Set$$Type<($BaseCapability$$Type<(any), (any)>)>
}

export namespace $ITrackingCapEvent {
const probejs$$marker: never
}
export class $ITrackingCapEvent$$Static implements $ITrackingCapEvent {


 "mfix$getTrackedCaps"(): $Set<($BaseCapability<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITrackingCapEvent$$Type = (() => $Set$$Type<($BaseCapability$$Type<(any), (any)>)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITrackingCapEvent_ = $ITrackingCapEvent$$Type;
}}
declare module "org.embeddedt.modernfix.duck.IBlockState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IBlockState {

 "clearCache"(): void
 "isCacheInvalid"(): boolean
get "cacheInvalid"(): boolean
}

export namespace $IBlockState {
const probejs$$marker: never
}
export class $IBlockState$$Static implements $IBlockState {


 "clearCache"(): void
 "isCacheInvalid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockState$$Type = ($IBlockState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockState_ = $IBlockState$$Type;
}}
