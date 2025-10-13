declare module "dev.dhyces.trimmed.impl.mixin.TagEntryAccessor" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export interface $TagEntryAccessor {

 "getId"(): $ResourceLocation
 "isTag"(): boolean
 "isRequired"(): boolean
get "id"(): $ResourceLocation
get "tag"(): boolean
get "required"(): boolean
}

export namespace $TagEntryAccessor {
const probejs$$marker: never
}
export class $TagEntryAccessor$$Static implements $TagEntryAccessor {


 "getId"(): $ResourceLocation
 "isTag"(): boolean
 "isRequired"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagEntryAccessor$$Type = ($TagEntryAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TagEntryAccessor_ = $TagEntryAccessor$$Type;
}}
declare module "dev.dhyces.trimmed.impl.mixin.client.ReloadableResourceManagerImplAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$PreparableReloadListener, $PreparableReloadListener$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener"

export interface $ReloadableResourceManagerImplAccessor {

 "getListeners"(): $List<($PreparableReloadListener)>

(): $List$$Type<($PreparableReloadListener$$Type)>
get "listeners"(): $List<($PreparableReloadListener)>
}

export namespace $ReloadableResourceManagerImplAccessor {
const probejs$$marker: never
}
export class $ReloadableResourceManagerImplAccessor$$Static implements $ReloadableResourceManagerImplAccessor {


 "getListeners"(): $List<($PreparableReloadListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReloadableResourceManagerImplAccessor$$Type = (() => $List$$Type<($PreparableReloadListener$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReloadableResourceManagerImplAccessor_ = $ReloadableResourceManagerImplAccessor$$Type;
}}
