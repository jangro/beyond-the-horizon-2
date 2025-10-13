declare module "jdk.proxy3.$Proxy137" {
import {$KubeEvent, $KubeEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$InvocationHandler, $InvocationHandler$$Type} from "java.lang.reflect.InvocationHandler"
import {$IEventHandler, $IEventHandler$$Type} from "dev.latvian.mods.kubejs.event.IEventHandler"
import {$Proxy, $Proxy$$Type} from "java.lang.reflect.Proxy"

export class $$Proxy137 extends $Proxy implements $IEventHandler {

constructor(arg0: $InvocationHandler$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "onEvent"(arg0: $KubeEvent$$Type): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $$Proxy137$$Type = ($$Proxy137);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $$Proxy137_ = $$Proxy137$$Type;
}}
