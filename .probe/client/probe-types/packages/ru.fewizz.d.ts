declare module "ru.fewizz.crawl.mixininterface.PrevPoseState" {
import {$Pose, $Pose$$Type} from "net.minecraft.world.entity.Pose"

export interface $PrevPoseState {

 "getPrevPose"(): $Pose

(): $Pose$$Type
get "prevPose"(): $Pose
}

export namespace $PrevPoseState {
const probejs$$marker: never
}
export class $PrevPoseState$$Static implements $PrevPoseState {


 "getPrevPose"(): $Pose
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrevPoseState$$Type = (() => $Pose$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrevPoseState_ = $PrevPoseState$$Type;
}}
declare module "ru.fewizz.crawl.client.mixininterface.CrawlingState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CrawlingState {

 "setCrawling"(arg0: boolean): void
 "isCrawling"(): boolean
set "crawling"(value: boolean)
get "crawling"(): boolean
}

export namespace $CrawlingState {
const probejs$$marker: never
}
export class $CrawlingState$$Static implements $CrawlingState {


 "setCrawling"(arg0: boolean): void
 "isCrawling"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrawlingState$$Type = ($CrawlingState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrawlingState_ = $CrawlingState$$Type;
}}
