declare module "dev.isxander.yacl3.mixin.OptionInstanceAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $OptionInstanceAccessor<T> {

 "getInitialValue"(): T

(): T
get "initialValue"(): T
}

export namespace $OptionInstanceAccessor {
const probejs$$marker: never
}
export class $OptionInstanceAccessor$$Static<T> implements $OptionInstanceAccessor {


 "getInitialValue"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionInstanceAccessor$$Type<T> = (() => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OptionInstanceAccessor_<T> = $OptionInstanceAccessor$$Type<(T)>;
}}
declare module "dev.isxander.yacl3.gui.render.GuiRenderStateSink" {
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $GuiRenderStateSink {

 "yacl$bufferSource"(): $MultiBufferSource

(): $MultiBufferSource$$Type
}

export namespace $GuiRenderStateSink {
function bufferSource(arg0: $GuiGraphics$$Type): $MultiBufferSource
const probejs$$marker: never
}
export class $GuiRenderStateSink$$Static implements $GuiRenderStateSink {


static "bufferSource"(arg0: $GuiGraphics$$Type): $MultiBufferSource
 "yacl$bufferSource"(): $MultiBufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiRenderStateSink$$Type = (() => $MultiBufferSource$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiRenderStateSink_ = $GuiRenderStateSink$$Type;
}}
