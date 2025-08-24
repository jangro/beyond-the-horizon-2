declare module "rynnavinx.sspb.common.mixin.minecraft.ModelBlockRendererAccessor" {
import {$BitSet, $BitSet$$Type} from "java.util.BitSet"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ModelBlockRendererAccessor {

 "sspb$invokeCalculateShape"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: (integer)[], arg4: $Direction$$Type, arg5: (float)[], arg6: $BitSet$$Type): void

(arg0: $BlockAndTintGetter, arg1: $BlockState, arg2: $BlockPos, arg3: (integer)[], arg4: $Direction, arg5: (float)[], arg6: $BitSet): void
}

export namespace $ModelBlockRendererAccessor {
const probejs$$marker: never
}
export class $ModelBlockRendererAccessor$$Static implements $ModelBlockRendererAccessor {


 "sspb$invokeCalculateShape"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: (integer)[], arg4: $Direction$$Type, arg5: (float)[], arg6: $BitSet$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBlockRendererAccessor$$Type = ((arg0: $BlockAndTintGetter, arg1: $BlockState, arg2: $BlockPos, arg3: (integer)[], arg4: $Direction, arg5: (float)[], arg6: $BitSet) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBlockRendererAccessor_ = $ModelBlockRendererAccessor$$Type;
}}
declare module "rynnavinx.sspb.common.mixin.minecraft.AmbientOcclusionFaceAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AmbientOcclusionFaceAccessor {

 "sspb$getBrightness"(): (float)[]
 "sspb$getLightmap"(): (integer)[]
}

export namespace $AmbientOcclusionFaceAccessor {
const probejs$$marker: never
}
export class $AmbientOcclusionFaceAccessor$$Static implements $AmbientOcclusionFaceAccessor {


 "sspb$getBrightness"(): (float)[]
 "sspb$getLightmap"(): (integer)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmbientOcclusionFaceAccessor$$Type = ($AmbientOcclusionFaceAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmbientOcclusionFaceAccessor_ = $AmbientOcclusionFaceAccessor$$Type;
}}
