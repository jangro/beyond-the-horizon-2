declare module "com.sk89q.worldedit.neoforge.internal.ExtendedChunk" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ExtendedChunk {

 "setBlockState"(pos: $BlockPos$$Type, state: $BlockState$$Type, moved: boolean, update: boolean): $BlockState

(pos: $BlockPos, state: $BlockState, moved: boolean, update: boolean): $BlockState$$Type
}

export namespace $ExtendedChunk {
const probejs$$marker: never
}
export class $ExtendedChunk$$Static implements $ExtendedChunk {


 "setBlockState"(pos: $BlockPos$$Type, state: $BlockState$$Type, moved: boolean, update: boolean): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedChunk$$Type = ((pos: $BlockPos, state: $BlockState, moved: boolean, update: boolean) => $BlockState$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedChunk_ = $ExtendedChunk$$Type;
}}
declare module "com.sk89q.worldedit.neoforge.mixin.AccessorServerPlayerGameMode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorServerPlayerGameMode {

 "isDestroyingBlock"(): boolean

(): boolean
get "destroyingBlock"(): boolean
}

export namespace $AccessorServerPlayerGameMode {
const probejs$$marker: never
}
export class $AccessorServerPlayerGameMode$$Static implements $AccessorServerPlayerGameMode {


 "isDestroyingBlock"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorServerPlayerGameMode$$Type = (() => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorServerPlayerGameMode_ = $AccessorServerPlayerGameMode$$Type;
}}
