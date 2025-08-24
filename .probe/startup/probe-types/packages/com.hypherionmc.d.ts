declare module "com.hypherionmc.craterlib.mixin.events.StoredUserEntryAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $StoredUserEntryAccessor<T> {

 "getUser"(): T

(): T
get "user"(): T
}

export namespace $StoredUserEntryAccessor {
const probejs$$marker: never
}
export class $StoredUserEntryAccessor$$Static<T> implements $StoredUserEntryAccessor {


 "getUser"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StoredUserEntryAccessor$$Type<T> = (() => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StoredUserEntryAccessor_<T> = $StoredUserEntryAccessor$$Type<(T)>;
}}
