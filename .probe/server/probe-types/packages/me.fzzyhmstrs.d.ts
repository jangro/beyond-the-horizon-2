declare module "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Builder" {
import {$ValidationResult, $ValidationResult$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult"
import {$ValidationResult$ErrorEntry, $ValidationResult$ErrorEntry$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ValidationResult$ErrorEntry$Type, $ValidationResult$ErrorEntry$Type$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Type"

export class $ValidationResult$ErrorEntry$Builder<C> {

constructor(type: $ValidationResult$ErrorEntry$Type$$Type<(C)>)

public "content"(content: C): $ValidationResult$ErrorEntry$Builder<(C)>
public "header"(header: StringJS): $ValidationResult$ErrorEntry$Builder<(C)>
public "build"(): $ValidationResult$ErrorEntry
public "message"(msg: StringJS): $ValidationResult$ErrorEntry$Builder<(C)>
public "exception"(e: $Throwable$$Type): $ValidationResult$ErrorEntry$Builder<(C)>
public "addError"(child: $ValidationResult$ErrorEntry$$Type): $ValidationResult$ErrorEntry$Builder<(C)>
public "addError"(child: $ValidationResult$$Type<(any)>): $ValidationResult$ErrorEntry$Builder<(C)>
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
import {$ValidationResult$ErrorEntry$Type, $ValidationResult$ErrorEntry$Type$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Type"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ValidationResult$ErrorEntry$Entry, $ValidationResult$ErrorEntry$Entry$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Entry"
import {$Logger, $Logger$$Type} from "org.slf4j.Logger"

export interface $ValidationResult$ErrorEntry {

 "getString"(): StringJS
 "isCritical"(): boolean
 "isLoggable"(): boolean
 "isError"(): boolean
 "log"(writer: $BiConsumer$$Type<(StringJS), ($Throwable)>): void
 "isEmpty"(): boolean
 "mutable"(): $ValidationResult$ErrorEntry$Mutable
 "hasType"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>): boolean
 "addError"(arg0: $ValidationResult$ErrorEntry$$Type): $ValidationResult$ErrorEntry
 "addError"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>, arg1: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(C)>)>): $ValidationResult$ErrorEntry
 "addError"(builder: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(StringJS)>)>): $ValidationResult$ErrorEntry
 "getPlainString"(): StringJS
 "logPlain"(writer: $BiConsumer$$Type<(StringJS), ($Throwable)>): void
 "consumeType"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>, arg1: $Consumer$$Type<($ValidationResult$ErrorEntry$Entry<(C)>)>): void
 "consumeAll"(arg0: $Consumer$$Type<($ValidationResult$ErrorEntry$Entry<(any)>)>): void
 "iterateType"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>): $Iterable<($ValidationResult$ErrorEntry$Entry<(C)>)>
 "iterateAll"(): $Iterable<($ValidationResult$ErrorEntry$Entry<(any)>)>
 "predicateType"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>, arg1: $Predicate$$Type<($ValidationResult$ErrorEntry$Entry<(C)>)>): boolean
 "predicateAll"(arg0: $Predicate$$Type<($ValidationResult$ErrorEntry$Entry<(any)>)>): boolean
get "string"(): StringJS
get "critical"(): boolean
get "loggable"(): boolean
get "error"(): boolean
get "empty"(): boolean
get "plainString"(): StringJS
}

export namespace $ValidationResult$ErrorEntry {
const Companion: $ValidationResult$ErrorEntry$Companion
function createLogger(logger: $Logger$$Type, level: $Level$$Type, errorsOnly: boolean): $Consumer<($ValidationResult$ErrorEntry$Entry<(any)>)>
function createEntryLogger(logger: $Logger$$Type, level: $Level$$Type): $BiConsumer<(StringJS), ($Throwable)>
const probejs$$marker: never
}
export class $ValidationResult$ErrorEntry$$Static implements $ValidationResult$ErrorEntry {
static readonly "Companion": $ValidationResult$ErrorEntry$Companion


static "createLogger"(logger: $Logger$$Type, level: $Level$$Type, errorsOnly: boolean): $Consumer<($ValidationResult$ErrorEntry$Entry<(any)>)>
 "getString"(): StringJS
 "isCritical"(): boolean
 "isLoggable"(): boolean
 "isError"(): boolean
 "log"(writer: $BiConsumer$$Type<(StringJS), ($Throwable)>): void
 "isEmpty"(): boolean
 "mutable"(): $ValidationResult$ErrorEntry$Mutable
 "hasType"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>): boolean
 "addError"(arg0: $ValidationResult$ErrorEntry$$Type): $ValidationResult$ErrorEntry
 "addError"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>, arg1: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(C)>)>): $ValidationResult$ErrorEntry
 "addError"(builder: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(StringJS)>)>): $ValidationResult$ErrorEntry
 "getPlainString"(): StringJS
 "logPlain"(writer: $BiConsumer$$Type<(StringJS), ($Throwable)>): void
 "consumeType"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>, arg1: $Consumer$$Type<($ValidationResult$ErrorEntry$Entry<(C)>)>): void
 "consumeAll"(arg0: $Consumer$$Type<($ValidationResult$ErrorEntry$Entry<(any)>)>): void
 "iterateType"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>): $Iterable<($ValidationResult$ErrorEntry$Entry<(C)>)>
 "iterateAll"(): $Iterable<($ValidationResult$ErrorEntry$Entry<(any)>)>
 "predicateType"<C>(arg0: $ValidationResult$ErrorEntry$Type$$Type<(C)>, arg1: $Predicate$$Type<($ValidationResult$ErrorEntry$Entry<(C)>)>): boolean
 "predicateAll"(arg0: $Predicate$$Type<($ValidationResult$ErrorEntry$Entry<(any)>)>): boolean
static "createEntryLogger"(logger: $Logger$$Type, level: $Level$$Type): $BiConsumer<(StringJS), ($Throwable)>
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
import {$ValidationResult$ErrorEntry$Type, $ValidationResult$ErrorEntry$Type$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Type"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ValidationResult$ErrorEntry$Entry, $ValidationResult$ErrorEntry$Entry$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Entry"
import {$Logger, $Logger$$Type} from "org.slf4j.Logger"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $ValidationResult$ErrorEntry$Companion {


public "createLogger"(logger: $Logger$$Type, level: $Level$$Type, errorsOnly: boolean): $Consumer<($ValidationResult$ErrorEntry$Entry<(any)>)>
public "basic"(error: StringJS): $ValidationResult$ErrorEntry
public "builder"<C>(type: $ValidationResult$ErrorEntry$Type$$Type<(C)>): $ValidationResult$ErrorEntry$Builder<(C)>
public "builder"(): $ValidationResult$ErrorEntry$Builder<(StringJS)>
public "empty"(header: StringJS): $ValidationResult$ErrorEntry
public static "empty$default"(arg0: $ValidationResult$ErrorEntry$Companion$$Type, arg1: StringJS, arg2: integer, arg3: any): $ValidationResult$ErrorEntry
public "getLOGGER"(): $Consumer<($ValidationResult$ErrorEntry$Entry<(any)>)>
public "getENTRY_ERROR_LOGGER"(): $BiConsumer<(StringJS), ($Throwable)>
public "getENTRY_INFO_LOGGER"(): $BiConsumer<(StringJS), ($Throwable)>
public static "createLogger$default"(arg0: $ValidationResult$ErrorEntry$Companion$$Type, arg1: $Logger$$Type, arg2: $Level$$Type, arg3: boolean, arg4: integer, arg5: any): $Consumer<(any)>
public "getENTRY_WARN_LOGGER"(): $BiConsumer<(StringJS), ($Throwable)>
public "createEntryLogger"(logger: $Logger$$Type, level: $Level$$Type): $BiConsumer<(StringJS), ($Throwable)>
public static "createEntryLogger$default"(arg0: $ValidationResult$ErrorEntry$Companion$$Type, arg1: $Logger$$Type, arg2: $Level$$Type, arg3: integer, arg4: any): $BiConsumer<(any), (any)>
get "lOGGER"(): $Consumer<($ValidationResult$ErrorEntry$Entry<(any)>)>
get "eNTRY_ERROR_LOGGER"(): $BiConsumer<(StringJS), ($Throwable)>
get "eNTRY_INFO_LOGGER"(): $BiConsumer<(StringJS), ($Throwable)>
get "eNTRY_WARN_LOGGER"(): $BiConsumer<(StringJS), ($Throwable)>
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

constructor(name: StringJS, isString: boolean, isLoggable: boolean, isError: boolean)
constructor(arg0: StringJS, arg1: boolean, arg2: boolean, arg3: boolean, arg4: integer, arg5: $DefaultConstructorMarker$$Type)

public "isLoggable"(): boolean
public "isError"(): boolean
public "getName"(): StringJS
public "toString"(): StringJS
public "isString"(): boolean
public "create$fzzy_config"(content: C, e: $Throwable$$Type, msg: StringJS): $ValidationResult$ErrorEntry
public static "create$fzzy_config$default"(arg0: $ValidationResult$ErrorEntry$Type$$Type<(any)>, arg1: any, arg2: $Throwable$$Type, arg3: StringJS, arg4: integer, arg5: any): $ValidationResult$ErrorEntry
get "loggable"(): boolean
get "error"(): boolean
get "name"(): StringJS
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

public "report"<T>(value: T, type: $ValidationResult$ErrorEntry$Type$$Type<(StringJS)>, error: StringJS, e: $Throwable$$Type): T
public "addError"<C>(type: $ValidationResult$ErrorEntry$Type$$Type<(C)>, builder: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(C)>)>): $ValidationResult$ErrorEntry$Mutable
public "addError"(other: $ValidationResult$ErrorEntry$Mutable$$Type): $ValidationResult$ErrorEntry$Mutable
public "addError"(builder: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(StringJS)>)>): $ValidationResult$ErrorEntry$Mutable
public "addError"(type: $ValidationResult$ErrorEntry$Type$$Type<(StringJS)>, error: StringJS, e: $Throwable$$Type): $ValidationResult$ErrorEntry$Mutable
public "addError"(other: $ValidationResult$ErrorEntry$$Type): $ValidationResult$ErrorEntry$Mutable
public "addError"(result: $ValidationResult$$Type<(any)>): $ValidationResult$ErrorEntry$Mutable
public static "report$default"(arg0: $ValidationResult$ErrorEntry$Mutable$$Type, arg1: any, arg2: $ValidationResult$ErrorEntry$Type$$Type<(any)>, arg3: StringJS, arg4: $Throwable$$Type, arg5: integer, arg6: any): any
public "getEntry$fzzy_config"(): $ValidationResult$ErrorEntry
public static "addError$default"(arg0: $ValidationResult$ErrorEntry$Mutable$$Type, arg1: $ValidationResult$ErrorEntry$Type$$Type<(any)>, arg2: StringJS, arg3: $Throwable$$Type, arg4: integer, arg5: any): $ValidationResult$ErrorEntry$Mutable
public "setEntry$fzzy_config"(arg0: $ValidationResult$ErrorEntry$$Type): void
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
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ValidationResult$ErrorEntry$Type, $ValidationResult$ErrorEntry$Type$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Type"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ValidationResult$Companion, $ValidationResult$Companion$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$Companion"
import {$ValidationResult$ErrorEntry$Entry, $ValidationResult$ErrorEntry$Entry$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Entry"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $ValidationResult<T> {
static readonly "Companion": $ValidationResult$Companion

constructor(storedVal: any, errorContext: $ValidationResult$ErrorEntry$$Type, $constructor_marker: $DefaultConstructorMarker$$Type)

public "iterate"<C>(t: $ValidationResult$ErrorEntry$Type$$Type<(C)>): $Iterable<($ValidationResult$ErrorEntry$Entry<(C)>)>
public "iterate"(): $Iterable<($ValidationResult$ErrorEntry$Entry<(any)>)>
public "has"<C>(t: $ValidationResult$ErrorEntry$Type$$Type<(C)>): boolean
public "consume"<C>(t: $ValidationResult$ErrorEntry$Type$$Type<(C)>, c: $Consumer$$Type<($ValidationResult$ErrorEntry$Entry<(C)>)>): void
public "consume"(c: $Consumer$$Type<($ValidationResult$ErrorEntry$Entry<(any)>)>): void
public "isValid"(): boolean
public "isCritical"(): boolean
public "isError"(): boolean
public "get"(): T
public "toString"(): StringJS
public "log"(): $ValidationResult<(T)>
public "log"(writer: $BiConsumer$$Type<(StringJS), ($Throwable)>): $ValidationResult<(T)>
public "test"<C>(t: $ValidationResult$ErrorEntry$Type$$Type<(C)>, p: $Predicate$$Type<($ValidationResult$ErrorEntry$Entry<(C)>)>): boolean
public "test"(p: $Predicate$$Type<($ValidationResult$ErrorEntry$Entry<(any)>)>): void
public "getError"(): StringJS
public static "log$default"(arg0: $ValidationResult$$Type<(any)>, arg1: $BiConsumer$$Type<(any), (any)>, arg2: integer, arg3: any): $ValidationResult<(any)>
public "getErrorEntry"(): $ValidationResult$ErrorEntry
public "writeError"(errors: $List$$Type<(StringJS)>): void
public "writeWarning"(errors: $List$$Type<(StringJS)>): void
public "logPlain"(): $ValidationResult<(T)>
public "logPlain"(writer: $BiConsumer$$Type<(StringJS), ($Throwable)>): $ValidationResult<(T)>
public static "logPlain$default"(arg0: $ValidationResult$$Type<(any)>, arg1: $BiConsumer$$Type<(any), (any)>, arg2: integer, arg3: any): $ValidationResult<(any)>
public static "access$getStoredVal$p"($this: $ValidationResult$$Type<(any)>): any
public static "access$getErrorContext$p"($this: $ValidationResult$$Type<(any)>): $ValidationResult$ErrorEntry
get "valid"(): boolean
get "critical"(): boolean
get "error"(): boolean
get "error"(): StringJS
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

 "getContent"(): C
 "log"(arg0: $BiConsumer$$Type<(StringJS), ($Throwable)>): void
 "getType"(): $ValidationResult$ErrorEntry$Type<(C)>
 "getE"(): $Throwable
get "content"(): C
get "type"(): $ValidationResult$ErrorEntry$Type<(C)>
get "e"(): $Throwable
}

export namespace $ValidationResult$ErrorEntry$Entry {
const probejs$$marker: never
}
export class $ValidationResult$ErrorEntry$Entry$$Static<C> implements $ValidationResult$ErrorEntry$Entry {


 "getContent"(): C
 "log"(arg0: $BiConsumer$$Type<(StringJS), ($Throwable)>): void
 "getType"(): $ValidationResult$ErrorEntry$Type<(C)>
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
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$ValidationResult, $ValidationResult$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult"
import {$ValidationResult$ErrorEntry$Builder, $ValidationResult$ErrorEntry$Builder$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Builder"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$$Type} from "kotlin.jvm.internal.DefaultConstructorMarker"
import {$ValidationResult$ErrorEntry, $ValidationResult$ErrorEntry$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry"
import {$DataResult, $DataResult$$Type} from "com.mojang.serialization.DataResult"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ValidationResult$ErrorEntry$Mutable, $ValidationResult$ErrorEntry$Mutable$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Mutable"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ValidationResult$ErrorEntry$Type, $ValidationResult$ErrorEntry$Type$$Type} from "me.fzzyhmstrs.fzzy_config.util.ValidationResult$ErrorEntry$Type"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"

export class $ValidationResult$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$$Type)

public "error"<T>(storedVal: T, type: $ValidationResult$ErrorEntry$Type$$Type<(StringJS)>, error: StringJS, e: $Throwable$$Type): $ValidationResult<(T)>
public "error"<T, C>(storedVal: T, type: $ValidationResult$ErrorEntry$Type$$Type<(C)>, builder: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(C)>)>): $ValidationResult<(T)>
public "error"<T>(storedVal: T, errorEntry: $ValidationResult$ErrorEntry$$Type): $ValidationResult<(T)>
public "error"<T>(storedVal: T, type: $ValidationResult$ErrorEntry$Type$$Type<(StringJS)>, error: StringJS): $ValidationResult<(T)>
public "error"<T>(storedVal: T, error: StringJS): $ValidationResult<(T)>
public "success"<T>(storedVal: T): $ValidationResult<(T)>
public "report"<T>($this$report: $ValidationResult$$Type<(T)>, errorBuilder: $List$$Type<(StringJS)>): $ValidationResult<(T)>
public "report"<T>($this$report: $ValidationResult$$Type<(T)>, errorReporter: $Consumer$$Type<(StringJS)>): $ValidationResult<(T)>
public "wrap"<T>($this$wrap: $ValidationResult$$Type<(any)>, newVal: T): $ValidationResult<(T)>
public "map"<N, T>($this$map: $ValidationResult$$Type<(T)>, to: $Function$$Type<(T), (N)>): $ValidationResult<(N)>
public "bimap"<N, T>($this$bimap: $ValidationResult$$Type<(T)>, to: $Function$$Type<($ValidationResult<(T)>), ($ValidationResult$$Type<(N)>)>): $ValidationResult<(N)>
public "outmap"<N, T>($this$outmap: $ValidationResult$$Type<(T)>, to: $Function$$Type<(T), ($ValidationResult$$Type<(N)>)>): $ValidationResult<(N)>
public "also"<T, C>($this$also: $ValidationResult$$Type<(T)>, newTest: boolean, type: $ValidationResult$ErrorEntry$Type$$Type<(C)>, builder: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(C)>)>): $ValidationResult<(T)>
public "also"<T>($this$also: $ValidationResult$$Type<(T)>, newTest: boolean, type: $ValidationResult$ErrorEntry$Type$$Type<(StringJS)>, error: StringJS, e: $Throwable$$Type): $ValidationResult<(T)>
public "also"<T>($this$also: $ValidationResult$$Type<(T)>, newTest: boolean, error: StringJS): $ValidationResult<(T)>
public "inmap"<N, T>($this$inmap: $ValidationResult$$Type<(T)>, to: $Function$$Type<($ValidationResult<(T)>), (N)>): $ValidationResult<(N)>
public static "also$default"(arg0: $ValidationResult$Companion$$Type, arg1: $ValidationResult$$Type<(any)>, arg2: boolean, arg3: $ValidationResult$ErrorEntry$Type$$Type<(any)>, arg4: StringJS, arg5: $Throwable$$Type, arg6: integer, arg7: any): $ValidationResult<(any)>
public "createMutable"(header: StringJS): $ValidationResult$ErrorEntry$Mutable
public static "error$default"(arg0: $ValidationResult$Companion$$Type, arg1: any, arg2: $ValidationResult$ErrorEntry$Type$$Type<(any)>, arg3: StringJS, arg4: $Throwable$$Type, arg5: integer, arg6: any): $ValidationResult<(any)>
public "attachTo"<T>($this$attachTo: $ValidationResult$$Type<(T)>, mutable: $ValidationResult$ErrorEntry$Mutable$$Type): $ValidationResult<(T)>
public "ofMutable"<T>(storedVal: T, mutable: $ValidationResult$ErrorEntry$Mutable$$Type): $ValidationResult<(T)>
public "predicated"<T>(storedVal: T, valid: boolean, error: $Supplier$$Type<(StringJS)>): $ValidationResult<(T)>
public "predicated"<T, C>(storedVal: T, valid: $Predicate$$Type<(T)>, type: $ValidationResult$ErrorEntry$Type$$Type<(C)>, builder: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(C)>)>): $ValidationResult<(T)>
public "predicated"<T, C>(storedVal: T, valid: boolean, type: $ValidationResult$ErrorEntry$Type$$Type<(C)>, builder: $UnaryOperator$$Type<($ValidationResult$ErrorEntry$Builder<(C)>)>): $ValidationResult<(T)>
public "predicated"<T>(storedVal: T, valid: boolean, error: $ValidationResult$ErrorEntry$$Type): $ValidationResult<(T)>
public "predicated"<T>(storedVal: T, valid: boolean, error: StringJS): $ValidationResult<(T)>
public "reportTo"<T>($this$reportTo: $ValidationResult$$Type<(T)>, errorReporter: $BiConsumer$$Type<(StringJS), ($Throwable)>): $ValidationResult<(T)>
public "mapDataResult"<T>(result: $DataResult$$Type<(T)>): $ValidationResult<(T)>
public "mapDataResult"<T>(result: $DataResult$$Type<(T)>, fallback: T): $ValidationResult<(T)>
public static "createMutable$default"(arg0: $ValidationResult$Companion$$Type, arg1: StringJS, arg2: integer, arg3: any): $ValidationResult$ErrorEntry$Mutable
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
