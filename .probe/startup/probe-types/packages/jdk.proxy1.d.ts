declare module "jdk.proxy1.$Proxy155" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$InvocationHandler, $InvocationHandler$$Type} from "java.lang.reflect.InvocationHandler"
import {$Proxy, $Proxy$$Type} from "java.lang.reflect.Proxy"

export class $$Proxy155 extends $Proxy implements $BiFunction<(any), (any), (any)> {

constructor(arg0: $InvocationHandler$$Type)

public "andThen"(arg0: $Function$$Type<(any), (any)>): $BiFunction<(any), (any), (any)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "apply"(arg0: any, arg1: any): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $$Proxy155$$Type = ($$Proxy155);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $$Proxy155_ = $$Proxy155$$Type;
}}
declare module "jdk.proxy1.$Proxy153" {
import {$InvocationHandler, $InvocationHandler$$Type} from "java.lang.reflect.InvocationHandler"
import {$Proxy, $Proxy$$Type} from "java.lang.reflect.Proxy"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $$Proxy153 extends $Proxy implements $Consumer<(any)> {

constructor(arg0: $InvocationHandler$$Type)

public "andThen"(arg0: $Consumer$$Type<(any)>): $Consumer<(any)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "accept"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $$Proxy153$$Type = ($$Proxy153);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $$Proxy153_ = $$Proxy153$$Type;
}}
