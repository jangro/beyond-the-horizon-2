declare module "snownee.passablefoliage.PassableFoliageBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PassableFoliageBlock {

 "pfoliage$setPassable"(arg0: boolean): void
 "pfoliage$isPassable"(): boolean
}

export namespace $PassableFoliageBlock {
const probejs$$marker: never
}
export class $PassableFoliageBlock$$Static implements $PassableFoliageBlock {


 "pfoliage$setPassable"(arg0: boolean): void
 "pfoliage$isPassable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PassableFoliageBlock$$Type = ($PassableFoliageBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PassableFoliageBlock_ = $PassableFoliageBlock$$Type;
}}
declare module "snownee.passablefoliage.mixin.BlockBehaviourAccess" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockBehaviourAccess {

 "callIsCollisionShapeFullBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean

(arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos): boolean
}

export namespace $BlockBehaviourAccess {
const probejs$$marker: never
}
export class $BlockBehaviourAccess$$Static implements $BlockBehaviourAccess {


 "callIsCollisionShapeFullBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBehaviourAccess$$Type = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBehaviourAccess_ = $BlockBehaviourAccess$$Type;
}}
