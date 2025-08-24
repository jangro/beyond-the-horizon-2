declare module "com.github.exopandora.shouldersurfing.mixinducks.OptionsDuck" {
import {$CameraType, $CameraType$$Type} from "net.minecraft.client.CameraType"

export interface $OptionsDuck {

 "shouldersurfing$setCameraTypeDirect"(arg0: $CameraType$$Type): void

(arg0: $CameraType): void
}

export namespace $OptionsDuck {
const probejs$$marker: never
}
export class $OptionsDuck$$Static implements $OptionsDuck {


 "shouldersurfing$setCameraTypeDirect"(arg0: $CameraType$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionsDuck$$Type = ((arg0: $CameraType) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OptionsDuck_ = $OptionsDuck$$Type;
}}
declare module "com.github.exopandora.shouldersurfing.mixinducks.CameraDuck" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CameraDuck {

 "shouldersurfing$setZRot"(arg0: float): void
 "shouldersurfing$getZRot"(): float
}

export namespace $CameraDuck {
const probejs$$marker: never
}
export class $CameraDuck$$Static implements $CameraDuck {


 "shouldersurfing$setZRot"(arg0: float): void
 "shouldersurfing$getZRot"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraDuck$$Type = ($CameraDuck);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CameraDuck_ = $CameraDuck$$Type;
}}
declare module "com.github.exopandora.shouldersurfing.mixins.GameRendererAccessor" {
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"

export interface $GameRendererAccessor {

 "getMainCamera"(): $Camera

(): $Camera$$Type
get "mainCamera"(): $Camera
}

export namespace $GameRendererAccessor {
const probejs$$marker: never
}
export class $GameRendererAccessor$$Static implements $GameRendererAccessor {


 "getMainCamera"(): $Camera
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRendererAccessor$$Type = (() => $Camera$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameRendererAccessor_ = $GameRendererAccessor$$Type;
}}
declare module "com.github.exopandora.shouldersurfing.mixins.GuiAccessor" {
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"

export interface $GuiAccessor {

 "invokeCanRenderCrosshairForSpectator"(arg0: $HitResult$$Type): boolean

(arg0: $HitResult): boolean
}

export namespace $GuiAccessor {
const probejs$$marker: never
}
export class $GuiAccessor$$Static implements $GuiAccessor {


 "invokeCanRenderCrosshairForSpectator"(arg0: $HitResult$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiAccessor$$Type = ((arg0: $HitResult) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiAccessor_ = $GuiAccessor$$Type;
}}
