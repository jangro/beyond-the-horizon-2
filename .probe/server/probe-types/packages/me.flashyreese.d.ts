declare module "me.flashyreese.mods.sodiumextra.mixin.gui.MinecraftClientAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MinecraftClientAccessor {

}

export namespace $MinecraftClientAccessor {
function getFPS(): integer
const probejs$$marker: never
}
export class $MinecraftClientAccessor$$Static implements $MinecraftClientAccessor {


static "getFPS"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftClientAccessor$$Type = ($MinecraftClientAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftClientAccessor_ = $MinecraftClientAccessor$$Type;
}}
declare module "me.flashyreese.mods.sodiumextra.mixin.optimizations.beacon_beam_rendering.LevelRendererAccessor" {
import {$Frustum, $Frustum$$Type} from "net.minecraft.client.renderer.culling.Frustum"

export interface $LevelRendererAccessor {

 "getCullingFrustum"(): $Frustum

(): $Frustum$$Type
get "cullingFrustum"(): $Frustum
}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
export class $LevelRendererAccessor$$Static implements $LevelRendererAccessor {


 "getCullingFrustum"(): $Frustum
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererAccessor$$Type = (() => $Frustum$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelRendererAccessor_ = $LevelRendererAccessor$$Type;
}}
