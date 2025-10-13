declare module "org.slf4j.spi.LoggingEventBuilder" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Marker, $Marker$$Type} from "org.slf4j.Marker"

export interface $LoggingEventBuilder {

 "log"(): void
 "log"(arg0: StringJS): void
 "log"(arg0: StringJS, arg1: any): void
 "log"(arg0: $Supplier$$Type<(StringJS)>): void
 "log"(arg0: StringJS, ...arg1: (any)[]): void
 "log"(arg0: StringJS, arg1: any, arg2: any): void
 "setCause"(arg0: $Throwable$$Type): $LoggingEventBuilder
 "addMarker"(arg0: $Marker$$Type): $LoggingEventBuilder
 "addArgument"(arg0: any): $LoggingEventBuilder
 "addArgument"(arg0: $Supplier$$Type<(any)>): $LoggingEventBuilder
 "addKeyValue"(arg0: StringJS, arg1: any): $LoggingEventBuilder
 "addKeyValue"(arg0: StringJS, arg1: $Supplier$$Type<(any)>): $LoggingEventBuilder
 "setMessage"(arg0: $Supplier$$Type<(StringJS)>): $LoggingEventBuilder
 "setMessage"(arg0: StringJS): $LoggingEventBuilder
set "cause"(value: $Throwable$$Type)
set "message"(value: $Supplier$$Type<(StringJS)>)
set "message"(value: StringJS)
}

export namespace $LoggingEventBuilder {
const probejs$$marker: never
}
export class $LoggingEventBuilder$$Static implements $LoggingEventBuilder {


 "log"(): void
 "log"(arg0: StringJS): void
 "log"(arg0: StringJS, arg1: any): void
 "log"(arg0: $Supplier$$Type<(StringJS)>): void
 "log"(arg0: StringJS, ...arg1: (any)[]): void
 "log"(arg0: StringJS, arg1: any, arg2: any): void
 "setCause"(arg0: $Throwable$$Type): $LoggingEventBuilder
 "addMarker"(arg0: $Marker$$Type): $LoggingEventBuilder
 "addArgument"(arg0: any): $LoggingEventBuilder
 "addArgument"(arg0: $Supplier$$Type<(any)>): $LoggingEventBuilder
 "addKeyValue"(arg0: StringJS, arg1: any): $LoggingEventBuilder
 "addKeyValue"(arg0: StringJS, arg1: $Supplier$$Type<(any)>): $LoggingEventBuilder
 "setMessage"(arg0: $Supplier$$Type<(StringJS)>): $LoggingEventBuilder
 "setMessage"(arg0: StringJS): $LoggingEventBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoggingEventBuilder$$Type = ($LoggingEventBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoggingEventBuilder_ = $LoggingEventBuilder$$Type;
}}
declare module "org.slf4j.event.Level" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Level extends $Enum<($Level)> {
static readonly "TRACE": $Level
static readonly "ERROR": $Level
static readonly "INFO": $Level
static readonly "DEBUG": $Level
static readonly "WARN": $Level


public "toString"(): StringJS
public static "values"(): ($Level)[]
public static "valueOf"(arg0: StringJS): $Level
public "toInt"(): integer
public static "intToLevel"(arg0: integer): $Level
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Level$$Type = (("error") | ("warn") | ("info") | ("debug") | ("trace"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Level_ = $Level$$Type;
}}
declare module "org.slf4j.Logger" {
import {$LoggingEventBuilder, $LoggingEventBuilder$$Type} from "org.slf4j.spi.LoggingEventBuilder"
import {$Level, $Level$$Type} from "org.slf4j.event.Level"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Marker, $Marker$$Type} from "org.slf4j.Marker"

export interface $Logger {

 "warn"(arg0: $Marker$$Type, arg1: StringJS, arg2: any): void
 "warn"(arg0: $Marker$$Type, arg1: StringJS, arg2: any, arg3: any): void
 "warn"(arg0: $Marker$$Type, arg1: StringJS, ...arg2: (any)[]): void
 "warn"(arg0: $Marker$$Type, arg1: StringJS, arg2: $Throwable$$Type): void
 "warn"(arg0: StringJS, arg1: any): void
 "warn"(arg0: StringJS, ...arg1: (any)[]): void
 "warn"(arg0: StringJS, arg1: any, arg2: any): void
 "warn"(arg0: StringJS, arg1: $Throwable$$Type): void
 "warn"(arg0: StringJS): void
 "warn"(arg0: $Marker$$Type, arg1: StringJS): void
 "error"(arg0: $Marker$$Type, arg1: StringJS, ...arg2: (any)[]): void
 "error"(arg0: $Marker$$Type, arg1: StringJS, arg2: any, arg3: any): void
 "error"(arg0: $Marker$$Type, arg1: StringJS, arg2: any): void
 "error"(arg0: $Marker$$Type, arg1: StringJS, arg2: $Throwable$$Type): void
 "error"(arg0: StringJS): void
 "error"(arg0: StringJS, arg1: any): void
 "error"(arg0: StringJS, arg1: any, arg2: any): void
 "error"(arg0: StringJS, ...arg1: (any)[]): void
 "error"(arg0: StringJS, arg1: $Throwable$$Type): void
 "error"(arg0: $Marker$$Type, arg1: StringJS): void
 "getName"(): StringJS
 "info"(arg0: StringJS, arg1: any, arg2: any): void
 "info"(arg0: StringJS, ...arg1: (any)[]): void
 "info"(arg0: StringJS, arg1: $Throwable$$Type): void
 "info"(arg0: StringJS, arg1: any): void
 "info"(arg0: StringJS): void
 "info"(arg0: $Marker$$Type, arg1: StringJS, arg2: $Throwable$$Type): void
 "info"(arg0: $Marker$$Type, arg1: StringJS, ...arg2: (any)[]): void
 "info"(arg0: $Marker$$Type, arg1: StringJS, arg2: any, arg3: any): void
 "info"(arg0: $Marker$$Type, arg1: StringJS, arg2: any): void
 "info"(arg0: $Marker$$Type, arg1: StringJS): void
 "trace"(arg0: $Marker$$Type, arg1: StringJS, arg2: any, arg3: any): void
 "trace"(arg0: StringJS, ...arg1: (any)[]): void
 "trace"(arg0: StringJS, arg1: any, arg2: any): void
 "trace"(arg0: $Marker$$Type, arg1: StringJS, arg2: $Throwable$$Type): void
 "trace"(arg0: StringJS, arg1: any): void
 "trace"(arg0: $Marker$$Type, arg1: StringJS, ...arg2: (any)[]): void
 "trace"(arg0: StringJS): void
 "trace"(arg0: StringJS, arg1: $Throwable$$Type): void
 "trace"(arg0: $Marker$$Type, arg1: StringJS): void
 "trace"(arg0: $Marker$$Type, arg1: StringJS, arg2: any): void
 "debug"(arg0: StringJS, arg1: any, arg2: any): void
 "debug"(arg0: StringJS): void
 "debug"(arg0: StringJS, arg1: any): void
 "debug"(arg0: $Marker$$Type, arg1: StringJS, arg2: $Throwable$$Type): void
 "debug"(arg0: $Marker$$Type, arg1: StringJS, ...arg2: (any)[]): void
 "debug"(arg0: $Marker$$Type, arg1: StringJS): void
 "debug"(arg0: $Marker$$Type, arg1: StringJS, arg2: any, arg3: any): void
 "debug"(arg0: StringJS, arg1: $Throwable$$Type): void
 "debug"(arg0: StringJS, ...arg1: (any)[]): void
 "debug"(arg0: $Marker$$Type, arg1: StringJS, arg2: any): void
 "atInfo"(): $LoggingEventBuilder
 "atWarn"(): $LoggingEventBuilder
 "isDebugEnabled"(): boolean
 "isDebugEnabled"(arg0: $Marker$$Type): boolean
 "isErrorEnabled"(): boolean
 "isErrorEnabled"(arg0: $Marker$$Type): boolean
 "isInfoEnabled"(arg0: $Marker$$Type): boolean
 "isInfoEnabled"(): boolean
 "isTraceEnabled"(): boolean
 "isTraceEnabled"(arg0: $Marker$$Type): boolean
 "isWarnEnabled"(arg0: $Marker$$Type): boolean
 "isWarnEnabled"(): boolean
 "atTrace"(): $LoggingEventBuilder
 "atDebug"(): $LoggingEventBuilder
 "atError"(): $LoggingEventBuilder
 "atLevel"(arg0: $Level$$Type): $LoggingEventBuilder
 "isEnabledForLevel"(arg0: $Level$$Type): boolean
 "makeLoggingEventBuilder"(arg0: $Level$$Type): $LoggingEventBuilder
get "name"(): StringJS
get "debugEnabled"(): boolean
get "errorEnabled"(): boolean
get "infoEnabled"(): boolean
get "traceEnabled"(): boolean
get "warnEnabled"(): boolean
}

export namespace $Logger {
const ROOT_LOGGER_NAME: StringJS
const probejs$$marker: never
}
export class $Logger$$Static implements $Logger {
static readonly "ROOT_LOGGER_NAME": StringJS


 "warn"(arg0: $Marker$$Type, arg1: StringJS, arg2: any): void
 "warn"(arg0: $Marker$$Type, arg1: StringJS, arg2: any, arg3: any): void
 "warn"(arg0: $Marker$$Type, arg1: StringJS, ...arg2: (any)[]): void
 "warn"(arg0: $Marker$$Type, arg1: StringJS, arg2: $Throwable$$Type): void
 "warn"(arg0: StringJS, arg1: any): void
 "warn"(arg0: StringJS, ...arg1: (any)[]): void
 "warn"(arg0: StringJS, arg1: any, arg2: any): void
 "warn"(arg0: StringJS, arg1: $Throwable$$Type): void
 "warn"(arg0: StringJS): void
 "warn"(arg0: $Marker$$Type, arg1: StringJS): void
 "error"(arg0: $Marker$$Type, arg1: StringJS, ...arg2: (any)[]): void
 "error"(arg0: $Marker$$Type, arg1: StringJS, arg2: any, arg3: any): void
 "error"(arg0: $Marker$$Type, arg1: StringJS, arg2: any): void
 "error"(arg0: $Marker$$Type, arg1: StringJS, arg2: $Throwable$$Type): void
 "error"(arg0: StringJS): void
 "error"(arg0: StringJS, arg1: any): void
 "error"(arg0: StringJS, arg1: any, arg2: any): void
 "error"(arg0: StringJS, ...arg1: (any)[]): void
 "error"(arg0: StringJS, arg1: $Throwable$$Type): void
 "error"(arg0: $Marker$$Type, arg1: StringJS): void
 "getName"(): StringJS
 "info"(arg0: StringJS, arg1: any, arg2: any): void
 "info"(arg0: StringJS, ...arg1: (any)[]): void
 "info"(arg0: StringJS, arg1: $Throwable$$Type): void
 "info"(arg0: StringJS, arg1: any): void
 "info"(arg0: StringJS): void
 "info"(arg0: $Marker$$Type, arg1: StringJS, arg2: $Throwable$$Type): void
 "info"(arg0: $Marker$$Type, arg1: StringJS, ...arg2: (any)[]): void
 "info"(arg0: $Marker$$Type, arg1: StringJS, arg2: any, arg3: any): void
 "info"(arg0: $Marker$$Type, arg1: StringJS, arg2: any): void
 "info"(arg0: $Marker$$Type, arg1: StringJS): void
 "trace"(arg0: $Marker$$Type, arg1: StringJS, arg2: any, arg3: any): void
 "trace"(arg0: StringJS, ...arg1: (any)[]): void
 "trace"(arg0: StringJS, arg1: any, arg2: any): void
 "trace"(arg0: $Marker$$Type, arg1: StringJS, arg2: $Throwable$$Type): void
 "trace"(arg0: StringJS, arg1: any): void
 "trace"(arg0: $Marker$$Type, arg1: StringJS, ...arg2: (any)[]): void
 "trace"(arg0: StringJS): void
 "trace"(arg0: StringJS, arg1: $Throwable$$Type): void
 "trace"(arg0: $Marker$$Type, arg1: StringJS): void
 "trace"(arg0: $Marker$$Type, arg1: StringJS, arg2: any): void
 "debug"(arg0: StringJS, arg1: any, arg2: any): void
 "debug"(arg0: StringJS): void
 "debug"(arg0: StringJS, arg1: any): void
 "debug"(arg0: $Marker$$Type, arg1: StringJS, arg2: $Throwable$$Type): void
 "debug"(arg0: $Marker$$Type, arg1: StringJS, ...arg2: (any)[]): void
 "debug"(arg0: $Marker$$Type, arg1: StringJS): void
 "debug"(arg0: $Marker$$Type, arg1: StringJS, arg2: any, arg3: any): void
 "debug"(arg0: StringJS, arg1: $Throwable$$Type): void
 "debug"(arg0: StringJS, ...arg1: (any)[]): void
 "debug"(arg0: $Marker$$Type, arg1: StringJS, arg2: any): void
 "atInfo"(): $LoggingEventBuilder
 "atWarn"(): $LoggingEventBuilder
 "isDebugEnabled"(): boolean
 "isDebugEnabled"(arg0: $Marker$$Type): boolean
 "isErrorEnabled"(): boolean
 "isErrorEnabled"(arg0: $Marker$$Type): boolean
 "isInfoEnabled"(arg0: $Marker$$Type): boolean
 "isInfoEnabled"(): boolean
 "isTraceEnabled"(): boolean
 "isTraceEnabled"(arg0: $Marker$$Type): boolean
 "isWarnEnabled"(arg0: $Marker$$Type): boolean
 "isWarnEnabled"(): boolean
 "atTrace"(): $LoggingEventBuilder
 "atDebug"(): $LoggingEventBuilder
 "atError"(): $LoggingEventBuilder
 "atLevel"(arg0: $Level$$Type): $LoggingEventBuilder
 "isEnabledForLevel"(arg0: $Level$$Type): boolean
 "makeLoggingEventBuilder"(arg0: $Level$$Type): $LoggingEventBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Logger$$Type = ($Logger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Logger_ = $Logger$$Type;
}}
declare module "org.slf4j.Marker" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"

export interface $Marker extends $Serializable {

 "getName"(): StringJS
 "remove"(arg0: $Marker$$Type): boolean
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "add"(arg0: $Marker$$Type): void
 "iterator"(): $Iterator<($Marker)>
 "contains"(arg0: StringJS): boolean
 "contains"(arg0: $Marker$$Type): boolean
/**
 * 
 * @deprecated
 */
 "hasChildren"(): boolean
 "hasReferences"(): boolean
get "name"(): StringJS
}

export namespace $Marker {
const ANY_MARKER: StringJS
const ANY_NON_NULL_MARKER: StringJS
const probejs$$marker: never
}
export class $Marker$$Static implements $Marker {
static readonly "ANY_MARKER": StringJS
static readonly "ANY_NON_NULL_MARKER": StringJS


 "getName"(): StringJS
 "remove"(arg0: $Marker$$Type): boolean
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "add"(arg0: $Marker$$Type): void
 "iterator"(): $Iterator<($Marker)>
 "contains"(arg0: StringJS): boolean
 "contains"(arg0: $Marker$$Type): boolean
/**
 * 
 * @deprecated
 */
 "hasChildren"(): boolean
 "hasReferences"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Marker$$Type = ($Marker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Marker_ = $Marker$$Type;
}}
