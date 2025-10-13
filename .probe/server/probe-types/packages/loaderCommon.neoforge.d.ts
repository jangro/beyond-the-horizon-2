declare module "loaderCommon.neoforge.com.seibel.distanthorizons.common.wrappers.misc.IMixinServerPlayer" {
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export interface $IMixinServerPlayer {

 "distantHorizons$getDimensionChangeDestination"(): $ServerLevel

(): $ServerLevel$$Type
}

export namespace $IMixinServerPlayer {
const probejs$$marker: never
}
export class $IMixinServerPlayer$$Static implements $IMixinServerPlayer {


 "distantHorizons$getDimensionChangeDestination"(): $ServerLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinServerPlayer$$Type = (() => $ServerLevel$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinServerPlayer_ = $IMixinServerPlayer$$Type;
}}
