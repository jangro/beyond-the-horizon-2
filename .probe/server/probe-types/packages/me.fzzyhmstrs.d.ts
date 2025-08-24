declare module "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Builder" {
import {$ValidationResult, $ValidationResult$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult"
import {$ValidationResult$ErrorEntry, $ValidationResult$ErrorEntry$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ValidationResult$ErrorEntry$Type, $ValidationResult$ErrorEntry$Type$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Type"

export class $ValidationResult$ErrorEntry$Builder<C> {

constructor(type: $ValidationResult$ErrorEntry$Type$$Type<(C)>)

public "message"(msg: string): $ValidationResult$ErrorEntry$Builder<(C)>
public "exception"(e: $Throwable$$Type): $ValidationResult$ErrorEntry$Builder<(C)>
public "build"(): $ValidationResult$ErrorEntry
public "header"(header: string): $ValidationResult$ErrorEntry$Builder<(C)>
public "content"(content: C): $ValidationResult$ErrorEntry$Builder<(C)>
public "addError"(child: $ValidationResult$$Type<(any)>): $ValidationResult$ErrorEntry$Builder<(C)>
public "addError"(child: $ValidationResult$ErrorEntry$$Type): $ValidationResult$ErrorEntry$Builder<(C)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValidationResult$ErrorEntry$Builder$$Type<C> = ($ValidationResult$ErrorEntry$Builder<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValidationResult$ErrorEntry$Builder_<C> = $ValidationResult$ErrorEntry$Builder$$Type<(C)>;
}}
declare module "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$ValidationResult$ErrorEntry$Builder, $ValidationResult$ErrorEntry$Builder$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Builder"
import {$ValidationResult$ErrorEntry$Companion, $ValidationResult$ErrorEntry$Companion$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Companion"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Level, $Level$$Type} from "org.slf4j.event.Level"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ValidationResult$ErrorEntry$Mutable, $ValidationResult$ErrorEntry$Mutable$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Mutable"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ValidationResult$ErrorEntry$Type, $ValidationResult$ErrorEntry$Type$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Type"
import {$ValidationResult$ErrorEntry$Entry, $ValidationResult$ErrorEntry$Entry$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Entry"
import {$Logger, $Logger$$Type} from "org.slf4j.Logger"

export interface $ValidationResult$ErrorEntry {

 "isCritical"(): boolean
 "log"(writer: $BiConsumer$$Type<(string), ($Throwable)>): void
 "isEmpty"(): boolean
 "isError"(): boolean
 "isLoggable"(): boolean
 "getString"(): string
 "mutable"(): $ValidationResult$ErrorEntry$Mutable
 "hasType"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>): boolean
 "addError"(arg0: $ValidationResult$ErrorEntry$$Type): $ValidationResult$ErrorEntry
 "addError"(builder: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(string)>)>): $ValidationResult$ErrorEntry
 "addError"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>, arg1: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(C)>)>): $ValidationResult$ErrorEntry
 "logPlain"(writer: $BiConsumer$$Type<(string), ($Throwable)>): void
 "consumeType"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>, arg1: $Consumer$$Type<($ValidationResult$ErrorEntry$Entry<(C)>)>): void
 "consumeAll"(arg0: $Consumer$$Type<($ValidationResult$ErrorEntry$Entry<(any)>)>): void
 "iterateType"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>): $Iterable<($ValidationResult$ErrorEntry$Entry<(C)>)>
 "iterateAll"(): $Iterable<($ValidationResult$ErrorEntry$Entry<(any)>)>
 "predicateType"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>, arg1: $Predicate$$Type<($ValidationResult$ErrorEntry$Entry<(C)>)>): boolean
 "predicateAll"(arg0: $Predicate$$Type<($ValidationResult$ErrorEntry$Entry<(any)>)>): boolean
 "getPlainString"(): string
get "critical"(): boolean
get "empty"(): boolean
get "error"(): boolean
get "loggable"(): boolean
get "string"(): string
get "plainString"(): string
}

export namespace $ValidationResult$ErrorEntry {
const Companion: $ValidationResult$ErrorEntry$Companion
function createLogger(logger: $Logger$$Type, level: $Level$$Type, errorsOnly: boolean): $Consumer<($ValidationResult$ErrorEntry$Entry<(any)>)>
function createEntryLogger(logger: $Logger$$Type, level: $Level$$Type): $BiConsumer<(string), ($Throwable)>
const probejs$$marker: never
}
export class $ValidationResult$ErrorEntry$$Static implements $ValidationResult$ErrorEntry {
static readonly "Companion": $ValidationResult$ErrorEntry$Companion


 "isCritical"(): boolean
 "log"(writer: $BiConsumer$$Type<(string), ($Throwable)>): void
 "isEmpty"(): boolean
 "isError"(): boolean
 "isLoggable"(): boolean
 "getString"(): string
static "createLogger"(logger: $Logger$$Type, level: $Level$$Type, errorsOnly: boolean): $Consumer<($ValidationResult$ErrorEntry$Entry<(any)>)>
 "mutable"(): $ValidationResult$ErrorEntry$Mutable
 "hasType"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>): boolean
static "createEntryLogger"(logger: $Logger$$Type, level: $Level$$Type): $BiConsumer<(string), ($Throwable)>
 "addError"(arg0: $ValidationResult$ErrorEntry$$Type): $ValidationResult$ErrorEntry
 "addError"(builder: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(string)>)>): $ValidationResult$ErrorEntry
 "addError"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>, arg1: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(C)>)>): $ValidationResult$ErrorEntry
 "logPlain"(writer: $BiConsumer$$Type<(string), ($Throwable)>): void
 "consumeType"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>, arg1: $Consumer$$Type<($ValidationResult$ErrorEntry$Entry<(C)>)>): void
 "consumeAll"(arg0: $Consumer$$Type<($ValidationResult$ErrorEntry$Entry<(any)>)>): void
 "iterateType"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>): $Iterable<($ValidationResult$ErrorEntry$Entry<(C)>)>
 "iterateAll"(): $Iterable<($ValidationResult$ErrorEntry$Entry<(any)>)>
 "predicateType"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>, arg1: $Predicate$$Type<($ValidationResult$ErrorEntry$Entry<(C)>)>): boolean
 "predicateAll"(arg0: $Predicate$$Type<($ValidationResult$ErrorEntry$Entry<(any)>)>): boolean
 "getPlainString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValidationResult$ErrorEntry$$Type = ($ValidationResult$ErrorEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValidationResult$ErrorEntry_ = $ValidationResult$ErrorEntry$$Type;
}}
declare module "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Companion" {
import {$ValidationResult$ErrorEntry$Builder, $ValidationResult$ErrorEntry$Builder$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Builder"
import {$ValidationResult$ErrorEntry, $ValidationResult$ErrorEntry$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Level, $Level$$Type} from "org.slf4j.event.Level"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ValidationResult$ErrorEntry$Type, $ValidationResult$ErrorEntry$Type$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Type"
import {$ValidationResult$ErrorEntry$Entry, $ValidationResult$ErrorEntry$Entry$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Entry"
import {$Logger, $Logger$$Type} from "org.slf4j.Logger"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $ValidationResult$ErrorEntry$Companion {


public "builder"<C>(type: $ValidationResult$ErrorEntry$Type$$Type<(C)>): $ValidationResult$ErrorEntry$Builder<(C)>
public "builder"(): $ValidationResult$ErrorEntry$Builder<(string)>
public "empty"(header: string): $ValidationResult$ErrorEntry
public "createLogger"(logger: $Logger$$Type, level: $Level$$Type, errorsOnly: boolean): $Consumer<($ValidationResult$ErrorEntry$Entry<(any)>)>
public "basic"(error: string): $ValidationResult$ErrorEntry
public "createEntryLogger"(logger: $Logger$$Type, level: $Level$$Type): $BiConsumer<(string), ($Throwable)>
public "getENTRY_ERROR_LOGGER"(): $BiConsumer<(string), ($Throwable)>
public "getENTRY_INFO_LOGGER"(): $BiConsumer<(string), ($Throwable)>
public static "createLogger$default"(arg0: $ValidationResult$ErrorEntry$Companion$$Type, arg1: $Logger$$Type, arg2: $Level$$Type, arg3: boolean, arg4: integer, arg5: any): $Consumer<(any)>
public "getENTRY_WARN_LOGGER"(): $BiConsumer<(string), ($Throwable)>
public static "empty$default"(arg0: $ValidationResult$ErrorEntry$Companion$$Type, arg1: string, arg2: integer, arg3: any): $ValidationResult$ErrorEntry
public "getLOGGER"(): $Consumer<($ValidationResult$ErrorEntry$Entry<(any)>)>
public static "createEntryLogger$default"(arg0: $ValidationResult$ErrorEntry$Companion$$Type, arg1: $Logger$$Type, arg2: $Level$$Type, arg3: integer, arg4: any): $BiConsumer<(any), (any)>
get "eNTRY_ERROR_LOGGER"(): $BiConsumer<(string), ($Throwable)>
get "eNTRY_INFO_LOGGER"(): $BiConsumer<(string), ($Throwable)>
get "eNTRY_WARN_LOGGER"(): $BiConsumer<(string), ($Throwable)>
get "lOGGER"(): $Consumer<($ValidationResult$ErrorEntry$Entry<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValidationResult$ErrorEntry$Companion$$Type = ($ValidationResult$ErrorEntry$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValidationResult$ErrorEntry$Companion_ = $ValidationResult$ErrorEntry$Companion$$Type;
}}
declare module "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Type" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$$Type} from "kotlin.jvm.internal.DefaultConstructorMarker"
import {$ValidationResult$ErrorEntry, $ValidationResult$ErrorEntry$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"

export class $ValidationResult$ErrorEntry$Type<C> {

constructor(name: string, isString: boolean, isLoggable: boolean, isError: boolean)
constructor(arg0: string, arg1: boolean, arg2: boolean, arg3: boolean, arg4: integer, arg5: $DefaultConstructorMarker$$Type)

public "getName"(): string
public "toString"(): string
public "isError"(): boolean
public "isLoggable"(): boolean
public "isString"(): boolean
public "create$fzzy_config"(content: C, e: $Throwable$$Type, msg: string): $ValidationResult$ErrorEntry
public static "create$fzzy_config$default"(arg0: $ValidationResult$ErrorEntry$Type$$Type<(any)>, arg1: any, arg2: $Throwable$$Type, arg3: string, arg4: integer, arg5: any): $ValidationResult$ErrorEntry
get "name"(): string
get "error"(): boolean
get "loggable"(): boolean
get "string"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValidationResult$ErrorEntry$Type$$Type<C> = ($ValidationResult$ErrorEntry$Type<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValidationResult$ErrorEntry$Type_<C> = $ValidationResult$ErrorEntry$Type$$Type<(C)>;
}}
declare module "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Mutable" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$ValidationResult, $ValidationResult$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult"
import {$ValidationResult$ErrorEntry$Builder, $ValidationResult$ErrorEntry$Builder$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Builder"
import {$ValidationResult$ErrorEntry, $ValidationResult$ErrorEntry$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ValidationResult$ErrorEntry$Type, $ValidationResult$ErrorEntry$Type$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Type"

export class $ValidationResult$ErrorEntry$Mutable {

constructor(entry: $ValidationResult$ErrorEntry$$Type)

public "report"<T>(value: T, type: $ValidationResult$ErrorEntry$Type$$Type<(string)>, error: string, e: $Throwable$$Type): T
public "getEntry$fzzy_config"(): $ValidationResult$ErrorEntry
public static "addError$default"(arg0: $ValidationResult$ErrorEntry$Mutable$$Type, arg1: $ValidationResult$ErrorEntry$Type$$Type<(any)>, arg2: string, arg3: $Throwable$$Type, arg4: integer, arg5: any): $ValidationResult$ErrorEntry$Mutable
public "setEntry$fzzy_config"(arg0: $ValidationResult$ErrorEntry$$Type): void
public "addError"(type: $ValidationResult$ErrorEntry$Type$$Type<(string)>, error: string, e: $Throwable$$Type): $ValidationResult$ErrorEntry$Mutable
public "addError"(builder: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(string)>)>): $ValidationResult$ErrorEntry$Mutable
public "addError"(result: $ValidationResult$$Type<(any)>): $ValidationResult$ErrorEntry$Mutable
public "addError"(other: $ValidationResult$ErrorEntry$$Type): $ValidationResult$ErrorEntry$Mutable
public "addError"(other: $ValidationResult$ErrorEntry$Mutable$$Type): $ValidationResult$ErrorEntry$Mutable
public "addError"<C>(type: $ValidationResult$ErrorEntry$Type$$Type<(C)>, builder: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(C)>)>): $ValidationResult$ErrorEntry$Mutable
public static "report$default"(arg0: $ValidationResult$ErrorEntry$Mutable$$Type, arg1: any, arg2: $ValidationResult$ErrorEntry$Type$$Type<(any)>, arg3: string, arg4: $Throwable$$Type, arg5: integer, arg6: any): any
get "entry$fzzy_config"(): $ValidationResult$ErrorEntry
set "entry$fzzy_config"(value: $ValidationResult$ErrorEntry$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValidationResult$ErrorEntry$Mutable$$Type = ($ValidationResult$ErrorEntry$Mutable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValidationResult$ErrorEntry$Mutable_ = $ValidationResult$ErrorEntry$Mutable$$Type;
}}
declare module "me.fzzyhmstrs.fzzy_config.util.ValidationResult" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$$Type} from "kotlin.jvm.internal.DefaultConstructorMarker"
import {$ValidationResult$ErrorEntry, $ValidationResult$ErrorEntry$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ValidationResult$ErrorEntry$Type, $ValidationResult$ErrorEntry$Type$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Type"
import {$ValidationResult$Companion, $ValidationResult$Companion$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$Companion"
import {$ValidationResult$ErrorEntry$Entry, $ValidationResult$ErrorEntry$Entry$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Entry"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $ValidationResult<T> {
static readonly "Companion": $ValidationResult$Companion

constructor(storedVal: any, errorContext: $ValidationResult$ErrorEntry$$Type, $constructor_marker: $DefaultConstructorMarker$$Type)

public "isCritical"(): boolean
public "get"(): T
public "toString"(): string
public "log"(writer: $BiConsumer$$Type<(string), ($Throwable)>): $ValidationResult<(T)>
public "log"(): $ValidationResult<(T)>
public "test"<C>(t: $ValidationResult$ErrorEntry$Type$$Type<(C)>, p: $Predicate$$Type<($ValidationResult$ErrorEntry$Entry<(C)>)>): boolean
public "test"(p: $Predicate$$Type<($ValidationResult$ErrorEntry$Entry<(any)>)>): void
public "isError"(): boolean
public "iterate"<C>(t: $ValidationResult$ErrorEntry$Type$$Type<(C)>): $Iterable<($ValidationResult$ErrorEntry$Entry<(C)>)>
public "iterate"(): $Iterable<($ValidationResult$ErrorEntry$Entry<(any)>)>
public "isValid"(): boolean
public "has"<C>(t: $ValidationResult$ErrorEntry$Type$$Type<(C)>): boolean
public "consume"(c: $Consumer$$Type<($ValidationResult$ErrorEntry$Entry<(any)>)>): void
public "consume"<C>(t: $ValidationResult$ErrorEntry$Type$$Type<(C)>, c: $Consumer$$Type<($ValidationResult$ErrorEntry$Entry<(C)>)>): void
public "getError"(): string
public static "logPlain$default"(arg0: $ValidationResult$$Type<(any)>, arg1: $BiConsumer$$Type<(any), (any)>, arg2: integer, arg3: any): $ValidationResult<(any)>
public static "access$getStoredVal$p"($this: $ValidationResult$$Type<(any)>): any
public static "log$default"(arg0: $ValidationResult$$Type<(any)>, arg1: $BiConsumer$$Type<(any), (any)>, arg2: integer, arg3: any): $ValidationResult<(any)>
public "getErrorEntry"(): $ValidationResult$ErrorEntry
public "writeError"(errors: $List$$Type<(string)>): void
public "writeWarning"(errors: $List$$Type<(string)>): void
public "logPlain"(): $ValidationResult<(T)>
public "logPlain"(writer: $BiConsumer$$Type<(string), ($Throwable)>): $ValidationResult<(T)>
public static "access$getErrorContext$p"($this: $ValidationResult$$Type<(any)>): $ValidationResult$ErrorEntry
get "critical"(): boolean
get "error"(): boolean
get "valid"(): boolean
get "error"(): string
get "errorEntry"(): $ValidationResult$ErrorEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValidationResult$$Type<T> = ($ValidationResult<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValidationResult_<T> = $ValidationResult$$Type<(T)>;
}}
declare module "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Entry" {
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ValidationResult$ErrorEntry$Type, $ValidationResult$ErrorEntry$Type$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Type"

export interface $ValidationResult$ErrorEntry$Entry<C> {

 "log"(arg0: $BiConsumer$$Type<(string), ($Throwable)>): void
 "getType"(): $ValidationResult$ErrorEntry$Type<(C)>
 "getContent"(): C
 "getE"(): $Throwable
get "type"(): $ValidationResult$ErrorEntry$Type<(C)>
get "content"(): C
get "e"(): $Throwable
}

export namespace $ValidationResult$ErrorEntry$Entry {
const probejs$$marker: never
}
export class $ValidationResult$ErrorEntry$Entry$$Static<C> implements $ValidationResult$ErrorEntry$Entry {


 "log"(arg0: $BiConsumer$$Type<(string), ($Throwable)>): void
 "getType"(): $ValidationResult$ErrorEntry$Type<(C)>
 "getContent"(): C
 "getE"(): $Throwable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValidationResult$ErrorEntry$Entry$$Type<C> = ($ValidationResult$ErrorEntry$Entry<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValidationResult$ErrorEntry$Entry_<C> = $ValidationResult$ErrorEntry$Entry$$Type<(C)>;
}}
declare module "me.fzzyhmstrs.fzzy_config.util.ValidationResult$Companion" {
import {$ValidationResult, $ValidationResult$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult"
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$$Type} from "kotlin.jvm.internal.DefaultConstructorMarker"
import {$ValidationResult$ErrorEntry$Builder, $ValidationResult$ErrorEntry$Builder$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Builder"
import {$ValidationResult$ErrorEntry, $ValidationResult$ErrorEntry$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry"
import {$List, $List$$Type} from "java.util.List"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ValidationResult$ErrorEntry$Mutable, $ValidationResult$ErrorEntry$Mutable$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Mutable"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ValidationResult$ErrorEntry$Type, $ValidationResult$ErrorEntry$Type$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Type"

export class $ValidationResult$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$$Type)

public "report"<T>($this$report: $ValidationResult$$Type<(T)>, errorReporter: $Consumer$$Type<(string)>): $ValidationResult<(T)>
public "report"<T>($this$report: $ValidationResult$$Type<(T)>, errorBuilder: $List$$Type<(string)>): $ValidationResult<(T)>
public "wrap"<T>($this$wrap: $ValidationResult$$Type<(any)>, newVal: T): $ValidationResult<(T)>
public "map"<N, T>($this$map: $ValidationResult$$Type<(T)>, to: $Function$$Type<(T), (N)>): $ValidationResult<(N)>
public "error"<T>(storedVal: T, error: string): $ValidationResult<(T)>
public "error"<T>(storedVal: T, errorEntry: $ValidationResult$ErrorEntry$$Type): $ValidationResult<(T)>
public "error"<T, C>(storedVal: T, type: $ValidationResult$ErrorEntry$Type$$Type<(C)>, builder: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(C)>)>): $ValidationResult<(T)>
public "error"<T>(storedVal: T, type: $ValidationResult$ErrorEntry$Type$$Type<(string)>, error: string, e: $Throwable$$Type): $ValidationResult<(T)>
public "error"<T>(storedVal: T, type: $ValidationResult$ErrorEntry$Type$$Type<(string)>, error: string): $ValidationResult<(T)>
public "success"<T>(storedVal: T): $ValidationResult<(T)>
public "bimap"<N, T>($this$bimap: $ValidationResult$$Type<(T)>, to: $Function$$Type<($ValidationResult<(T)>), ($ValidationResult$$Type<(N)>)>): $ValidationResult<(N)>
public "inmap"<N, T>($this$inmap: $ValidationResult$$Type<(T)>, to: $Function$$Type<($ValidationResult<(T)>), (N)>): $ValidationResult<(N)>
public "also"<T, C>($this$also: $ValidationResult$$Type<(T)>, newTest: boolean, type: $ValidationResult$ErrorEntry$Type$$Type<(C)>, builder: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(C)>)>): $ValidationResult<(T)>
public "also"<T>($this$also: $ValidationResult$$Type<(T)>, newTest: boolean, error: string): $ValidationResult<(T)>
public "also"<T>($this$also: $ValidationResult$$Type<(T)>, newTest: boolean, type: $ValidationResult$ErrorEntry$Type$$Type<(string)>, error: string, e: $Throwable$$Type): $ValidationResult<(T)>
public "outmap"<N, T>($this$outmap: $ValidationResult$$Type<(T)>, to: $Function$$Type<(T), ($ValidationResult$$Type<(N)>)>): $ValidationResult<(N)>
public static "createMutable$default"(arg0: $ValidationResult$Companion$$Type, arg1: string, arg2: integer, arg3: any): $ValidationResult$ErrorEntry$Mutable
public static "also$default"(arg0: $ValidationResult$Companion$$Type, arg1: $ValidationResult$$Type<(any)>, arg2: boolean, arg3: $ValidationResult$ErrorEntry$Type$$Type<(any)>, arg4: string, arg5: $Throwable$$Type, arg6: integer, arg7: any): $ValidationResult<(any)>
public "createMutable"(header: string): $ValidationResult$ErrorEntry$Mutable
public static "error$default"(arg0: $ValidationResult$Companion$$Type, arg1: any, arg2: $ValidationResult$ErrorEntry$Type$$Type<(any)>, arg3: string, arg4: $Throwable$$Type, arg5: integer, arg6: any): $ValidationResult<(any)>
public "attachTo"<T>($this$attachTo: $ValidationResult$$Type<(T)>, mutable: $ValidationResult$ErrorEntry$Mutable$$Type): $ValidationResult<(T)>
public "ofMutable"<T>(storedVal: T, mutable: $ValidationResult$ErrorEntry$Mutable$$Type): $ValidationResult<(T)>
public "predicated"<T>(storedVal: T, valid: boolean, error: $Supplier$$Type<(string)>): $ValidationResult<(T)>
public "predicated"<T>(storedVal: T, valid: boolean, error: string): $ValidationResult<(T)>
public "predicated"<T, C>(storedVal: T, valid: $Predicate$$Type<(T)>, type: $ValidationResult$ErrorEntry$Type$$Type<(C)>, builder: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(C)>)>): $ValidationResult<(T)>
public "predicated"<T>(storedVal: T, valid: boolean, error: $ValidationResult$ErrorEntry$$Type): $ValidationResult<(T)>
public "predicated"<T, C>(storedVal: T, valid: boolean, type: $ValidationResult$ErrorEntry$Type$$Type<(C)>, builder: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(C)>)>): $ValidationResult<(T)>
public "mapDataResult"<T>(result: $DataResult$$Type<(T)>): $ValidationResult<(T)>
public "mapDataResult"<T>(result: $DataResult$$Type<(T)>, fallback: T): $ValidationResult<(T)>
public "reportTo"<T>($this$reportTo: $ValidationResult$$Type<(T)>, errorReporter: $BiConsumer$$Type<(string), ($Throwable)>): $ValidationResult<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValidationResult$Companion$$Type = ($ValidationResult$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValidationResult$Companion_ = $ValidationResult$Companion$$Type;
}}
