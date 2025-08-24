declare module "com.leaky.INearbyItemAwareEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $INearbyItemAwareEntity {

 "getNearbyItems"(): integer
 "setNearbyItems"(arg0: integer): void
get "nearbyItems"(): integer
set "nearbyItems"(value: integer)
}

export namespace $INearbyItemAwareEntity {
const probejs$$marker: never
}
export class $INearbyItemAwareEntity$$Static implements $INearbyItemAwareEntity {


 "getNearbyItems"(): integer
 "setNearbyItems"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INearbyItemAwareEntity$$Type = ($INearbyItemAwareEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INearbyItemAwareEntity_ = $INearbyItemAwareEntity$$Type;
}}
