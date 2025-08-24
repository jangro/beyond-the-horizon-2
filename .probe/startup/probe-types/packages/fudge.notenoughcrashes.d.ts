declare module "fudge.notenoughcrashes.patches.MinecraftClientAccess" {
import {$MetricsRecorder, $MetricsRecorder$$Type} from "net.minecraft.util.profiling.metrics.profiling.MetricsRecorder"

export interface $MinecraftClientAccess {

 "getRecorder"(): $MetricsRecorder
 "setRecorder"(arg0: $MetricsRecorder$$Type): void
get "recorder"(): $MetricsRecorder
set "recorder"(value: $MetricsRecorder$$Type)
}

export namespace $MinecraftClientAccess {
const probejs$$marker: never
}
export class $MinecraftClientAccess$$Static implements $MinecraftClientAccess {


 "getRecorder"(): $MetricsRecorder
 "setRecorder"(arg0: $MetricsRecorder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftClientAccess$$Type = ($MinecraftClientAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftClientAccess_ = $MinecraftClientAccess$$Type;
}}
