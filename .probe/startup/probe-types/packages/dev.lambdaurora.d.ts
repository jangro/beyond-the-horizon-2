declare module "dev.lambdaurora.lambdynlights.api.DynamicLightHandler" {
import {$Creeper, $Creeper$$Type} from "net.minecraft.world.entity.monster.Creeper"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $DynamicLightHandler<T> {

 "getLuminance"(arg0: T): integer
 "isWaterSensitive"(lightSource: T): boolean

(arg0: T): integer
}

export namespace $DynamicLightHandler {
function makeHandler<T extends $LivingEntity>(luminance: $Function$$Type<(T), (integer)>, waterSensitive: $Function$$Type<(T), (boolean)>): $DynamicLightHandler<(T)>
function makeCreeperEntityHandler<T extends $Creeper>(handler: $DynamicLightHandler$$Type<(T)>): $DynamicLightHandler<(T)>
function makeLivingEntityHandler<T extends $LivingEntity>(handler: $DynamicLightHandler$$Type<(T)>): $DynamicLightHandler<(T)>
const probejs$$marker: never
}
export class $DynamicLightHandler$$Static<T> implements $DynamicLightHandler {


 "getLuminance"(arg0: T): integer
static "makeHandler"<T extends $LivingEntity>(luminance: $Function$$Type<(T), (integer)>, waterSensitive: $Function$$Type<(T), (boolean)>): $DynamicLightHandler<(T)>
static "makeCreeperEntityHandler"<T extends $Creeper>(handler: $DynamicLightHandler$$Type<(T)>): $DynamicLightHandler<(T)>
static "makeLivingEntityHandler"<T extends $LivingEntity>(handler: $DynamicLightHandler$$Type<(T)>): $DynamicLightHandler<(T)>
 "isWaterSensitive"(lightSource: T): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicLightHandler$$Type<T> = ((arg0: T) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicLightHandler_<T> = $DynamicLightHandler$$Type<(T)>;
}}
