declare module "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$CommentNode" {
import {$Map, $Map$$Type} from "java.util.Map"

export class $UnmodifiableCommentedConfig$CommentNode {

constructor(arg0: StringJS, arg1: $Map$$Type<(StringJS), ($UnmodifiableCommentedConfig$CommentNode$$Type)>)

public "getComment"(): StringJS
public "getChildren"(): $Map<(StringJS), ($UnmodifiableCommentedConfig$CommentNode)>
get "comment"(): StringJS
get "children"(): $Map<(StringJS), ($UnmodifiableCommentedConfig$CommentNode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnmodifiableCommentedConfig$CommentNode$$Type = ($UnmodifiableCommentedConfig$CommentNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnmodifiableCommentedConfig$CommentNode_ = $UnmodifiableCommentedConfig$CommentNode$$Type;
}}
declare module "com.electronwill.nightconfig.core.io.WritingMode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $WritingMode extends $Enum<($WritingMode)> {
static readonly "REPLACE_ATOMIC": $WritingMode
static readonly "REPLACE": $WritingMode
static readonly "APPEND": $WritingMode


public static "values"(): ($WritingMode)[]
public static "valueOf"(arg0: StringJS): $WritingMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WritingMode$$Type = (("replace") | ("replace_atomic") | ("append"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WritingMode_ = $WritingMode$$Type;
}}
declare module "com.electronwill.nightconfig.core.ConfigFormat" {
import {$Writer, $Writer$$Type} from "java.io.Writer"
import {$Map, $Map$$Type} from "java.util.Map"
import {$File, $File$$Type} from "java.io.File"
import {$ConfigWriter, $ConfigWriter$$Type} from "com.electronwill.nightconfig.core.io.ConfigWriter"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$WriterSupplier, $WriterSupplier$$Type} from "com.electronwill.nightconfig.core.utils.WriterSupplier"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Config, $Config$$Type} from "com.electronwill.nightconfig.core.Config"
import {$ConfigParser, $ConfigParser$$Type} from "com.electronwill.nightconfig.core.io.ConfigParser"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export interface $ConfigFormat<C extends $Config> {

 "createConfig"(arg0: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>): C
 "createConfig"(): C
 "createWriter"(): $ConfigWriter
 "createParser"(): $ConfigParser<(C)>
 "supportsType"(arg0: $Class$$Type<(any)>): boolean
 "isInMemory"(): boolean
 "initEmptyFile"(arg0: $Path$$Type): void
 "initEmptyFile"(arg0: $WriterSupplier$$Type): void
 "initEmptyFile"(arg0: $Writer$$Type): void
 "initEmptyFile"(arg0: $File$$Type): void
 "createConcurrentConfig"(): C
 "supportsComments"(): boolean
get "inMemory"(): boolean
}

export namespace $ConfigFormat {
const probejs$$marker: never
}
export class $ConfigFormat$$Static<C extends $Config> implements $ConfigFormat {


 "createConfig"(arg0: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>): C
 "createConfig"(): C
 "createWriter"(): $ConfigWriter
 "createParser"(): $ConfigParser<(C)>
 "supportsType"(arg0: $Class$$Type<(any)>): boolean
 "isInMemory"(): boolean
 "initEmptyFile"(arg0: $Path$$Type): void
 "initEmptyFile"(arg0: $WriterSupplier$$Type): void
 "initEmptyFile"(arg0: $Writer$$Type): void
 "initEmptyFile"(arg0: $File$$Type): void
 "createConcurrentConfig"(): C
 "supportsComments"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigFormat$$Type<C> = ($ConfigFormat<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigFormat_<C> = $ConfigFormat$$Type<(C)>;
}}
declare module "com.electronwill.nightconfig.core.ConfigSpec$CorrectionListener" {
import {$ConfigSpec$CorrectionAction, $ConfigSpec$CorrectionAction$$Type} from "com.electronwill.nightconfig.core.ConfigSpec$CorrectionAction"
import {$List, $List$$Type} from "java.util.List"

export interface $ConfigSpec$CorrectionListener {

 "onCorrect"(arg0: $ConfigSpec$CorrectionAction$$Type, arg1: $List$$Type<(StringJS)>, arg2: any, arg3: any): void

(arg0: $ConfigSpec$CorrectionAction, arg1: $List<(StringJS)>, arg2: any, arg3: any): void
}

export namespace $ConfigSpec$CorrectionListener {
const probejs$$marker: never
}
export class $ConfigSpec$CorrectionListener$$Static implements $ConfigSpec$CorrectionListener {


 "onCorrect"(arg0: $ConfigSpec$CorrectionAction$$Type, arg1: $List$$Type<(StringJS)>, arg2: any, arg3: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigSpec$CorrectionListener$$Type = ((arg0: $ConfigSpec$CorrectionAction, arg1: $List<(StringJS)>, arg2: any, arg3: any) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigSpec$CorrectionListener_ = $ConfigSpec$CorrectionListener$$Type;
}}
declare module "com.electronwill.nightconfig.core.UnmodifiableConfig" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$EnumGetMethod, $EnumGetMethod$$Type} from "com.electronwill.nightconfig.core.EnumGetMethod"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$LongSupplier, $LongSupplier$$Type} from "java.util.function.LongSupplier"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ConfigFormat, $ConfigFormat$$Type} from "com.electronwill.nightconfig.core.ConfigFormat"
import {$UnmodifiableConfig$Entry, $UnmodifiableConfig$Entry$$Type} from "com.electronwill.nightconfig.core.UnmodifiableConfig$Entry"

export interface $UnmodifiableConfig {

 "isNull"(arg0: $List$$Type<(StringJS)>): boolean
 "isNull"(arg0: StringJS): boolean
 "size"(): integer
 "get"<T>(arg0: StringJS): T
 "get"<T>(arg0: $List$$Type<(StringJS)>): T
 "getByte"(arg0: $List$$Type<(StringJS)>): byte
 "getByte"(arg0: StringJS): byte
 "getShort"(arg0: StringJS): short
 "getShort"(arg0: $List$$Type<(StringJS)>): short
 "getChar"(arg0: StringJS): character
 "getChar"(arg0: $List$$Type<(StringJS)>): character
 "getInt"(arg0: StringJS): integer
 "getInt"(arg0: $List$$Type<(StringJS)>): integer
 "getLong"(arg0: $List$$Type<(StringJS)>): long
 "getLong"(arg0: StringJS): long
 "isEmpty"(): boolean
 "apply"<T>(arg0: StringJS): T
 "apply"<T>(arg0: $List$$Type<(StringJS)>): T
 "contains"(arg0: StringJS): boolean
 "contains"(arg0: $List$$Type<(StringJS)>): boolean
 "entrySet"(): $Set<($UnmodifiableConfig$Entry)>
 "getRaw"<T>(arg0: StringJS): T
 "getRaw"<T>(arg0: $List$$Type<(StringJS)>): T
/**
 * 
 * @deprecated
 */
 "valueMap"(): $Map<(StringJS), (any)>
 "getOptional"<T>(arg0: StringJS): $Optional<(T)>
 "getOptional"<T>(arg0: $List$$Type<(StringJS)>): $Optional<(T)>
 "getOrElse"<T>(arg0: StringJS, arg1: T): T
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getOrElse"<T>(arg0: StringJS, arg1: $Supplier$$Type<(T)>): T
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getOptionalInt"(arg0: StringJS): $OptionalInt
 "getOptionalInt"(arg0: $List$$Type<(StringJS)>): $OptionalInt
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: StringJS, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: StringJS, arg1: integer): integer
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: integer): integer
 "getLongOrElse"(arg0: StringJS, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: StringJS, arg1: $LongSupplier$$Type): long
 "getByteOrElse"(arg0: StringJS, arg1: byte): byte
 "getByteOrElse"(arg0: $List$$Type<(StringJS)>, arg1: byte): byte
 "getShortOrElse"(arg0: $List$$Type<(StringJS)>, arg1: short): short
 "getShortOrElse"(arg0: StringJS, arg1: short): short
 "getCharOrElse"(arg0: $List$$Type<(StringJS)>, arg1: character): character
 "getCharOrElse"(arg0: StringJS, arg1: character): character
 "configFormat"(): $ConfigFormat<(any)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalLong"(arg0: $List$$Type<(StringJS)>): $OptionalLong
 "getOptionalLong"(arg0: StringJS): $OptionalLong
get "empty"(): boolean
}

export namespace $UnmodifiableConfig {
const probejs$$marker: never
}
export class $UnmodifiableConfig$$Static implements $UnmodifiableConfig {


 "isNull"(arg0: $List$$Type<(StringJS)>): boolean
 "isNull"(arg0: StringJS): boolean
 "size"(): integer
 "get"<T>(arg0: StringJS): T
 "get"<T>(arg0: $List$$Type<(StringJS)>): T
 "getByte"(arg0: $List$$Type<(StringJS)>): byte
 "getByte"(arg0: StringJS): byte
 "getShort"(arg0: StringJS): short
 "getShort"(arg0: $List$$Type<(StringJS)>): short
 "getChar"(arg0: StringJS): character
 "getChar"(arg0: $List$$Type<(StringJS)>): character
 "getInt"(arg0: StringJS): integer
 "getInt"(arg0: $List$$Type<(StringJS)>): integer
 "getLong"(arg0: $List$$Type<(StringJS)>): long
 "getLong"(arg0: StringJS): long
 "isEmpty"(): boolean
 "apply"<T>(arg0: StringJS): T
 "apply"<T>(arg0: $List$$Type<(StringJS)>): T
 "contains"(arg0: StringJS): boolean
 "contains"(arg0: $List$$Type<(StringJS)>): boolean
 "entrySet"(): $Set<($UnmodifiableConfig$Entry)>
 "getRaw"<T>(arg0: StringJS): T
 "getRaw"<T>(arg0: $List$$Type<(StringJS)>): T
/**
 * 
 * @deprecated
 */
 "valueMap"(): $Map<(StringJS), (any)>
 "getOptional"<T>(arg0: StringJS): $Optional<(T)>
 "getOptional"<T>(arg0: $List$$Type<(StringJS)>): $Optional<(T)>
 "getOrElse"<T>(arg0: StringJS, arg1: T): T
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getOrElse"<T>(arg0: StringJS, arg1: $Supplier$$Type<(T)>): T
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getOptionalInt"(arg0: StringJS): $OptionalInt
 "getOptionalInt"(arg0: $List$$Type<(StringJS)>): $OptionalInt
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: StringJS, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: StringJS, arg1: integer): integer
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: integer): integer
 "getLongOrElse"(arg0: StringJS, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: StringJS, arg1: $LongSupplier$$Type): long
 "getByteOrElse"(arg0: StringJS, arg1: byte): byte
 "getByteOrElse"(arg0: $List$$Type<(StringJS)>, arg1: byte): byte
 "getShortOrElse"(arg0: $List$$Type<(StringJS)>, arg1: short): short
 "getShortOrElse"(arg0: StringJS, arg1: short): short
 "getCharOrElse"(arg0: $List$$Type<(StringJS)>, arg1: character): character
 "getCharOrElse"(arg0: StringJS, arg1: character): character
 "configFormat"(): $ConfigFormat<(any)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalLong"(arg0: $List$$Type<(StringJS)>): $OptionalLong
 "getOptionalLong"(arg0: StringJS): $OptionalLong
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnmodifiableConfig$$Type = ($UnmodifiableConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnmodifiableConfig_ = $UnmodifiableConfig$$Type;
}}
declare module "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig" {
import {$EnumGetMethod, $EnumGetMethod$$Type} from "com.electronwill.nightconfig.core.EnumGetMethod"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UnmodifiableCommentedConfig$Entry, $UnmodifiableCommentedConfig$Entry$$Type} from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$Entry"
import {$List, $List$$Type} from "java.util.List"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$UnmodifiableCommentedConfig$CommentNode, $UnmodifiableCommentedConfig$CommentNode$$Type} from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$CommentNode"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$LongSupplier, $LongSupplier$$Type} from "java.util.function.LongSupplier"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UnmodifiableConfig, $UnmodifiableConfig$$Type} from "com.electronwill.nightconfig.core.UnmodifiableConfig"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ConfigFormat, $ConfigFormat$$Type} from "com.electronwill.nightconfig.core.ConfigFormat"

export interface $UnmodifiableCommentedConfig extends $UnmodifiableConfig {

 "getComment"(arg0: StringJS): StringJS
 "getComment"(arg0: $List$$Type<(StringJS)>): StringJS
 "entrySet"(): $Set<($UnmodifiableCommentedConfig$Entry)>
/**
 * 
 * @deprecated
 */
 "commentMap"(): $Map<(StringJS), (StringJS)>
 "getComments"(arg0: $Map$$Type<(StringJS), ($UnmodifiableCommentedConfig$CommentNode$$Type)>): void
 "getComments"(): $Map<(StringJS), ($UnmodifiableCommentedConfig$CommentNode)>
 "getOptionalComment"(arg0: $List$$Type<(StringJS)>): $Optional<(StringJS)>
 "getOptionalComment"(arg0: StringJS): $Optional<(StringJS)>
 "containsComment"(arg0: StringJS): boolean
 "containsComment"(arg0: $List$$Type<(StringJS)>): boolean
 "isNull"(arg0: $List$$Type<(StringJS)>): boolean
 "isNull"(arg0: StringJS): boolean
 "size"(): integer
 "get"<T>(arg0: StringJS): T
 "get"<T>(arg0: $List$$Type<(StringJS)>): T
 "getByte"(arg0: $List$$Type<(StringJS)>): byte
 "getByte"(arg0: StringJS): byte
 "getShort"(arg0: StringJS): short
 "getShort"(arg0: $List$$Type<(StringJS)>): short
 "getChar"(arg0: StringJS): character
 "getChar"(arg0: $List$$Type<(StringJS)>): character
 "getInt"(arg0: StringJS): integer
 "getInt"(arg0: $List$$Type<(StringJS)>): integer
 "getLong"(arg0: $List$$Type<(StringJS)>): long
 "getLong"(arg0: StringJS): long
 "isEmpty"(): boolean
 "apply"<T>(arg0: StringJS): T
 "apply"<T>(arg0: $List$$Type<(StringJS)>): T
 "contains"(arg0: StringJS): boolean
 "contains"(arg0: $List$$Type<(StringJS)>): boolean
 "getRaw"<T>(arg0: StringJS): T
 "getRaw"<T>(arg0: $List$$Type<(StringJS)>): T
/**
 * 
 * @deprecated
 */
 "valueMap"(): $Map<(StringJS), (any)>
 "getOptional"<T>(arg0: StringJS): $Optional<(T)>
 "getOptional"<T>(arg0: $List$$Type<(StringJS)>): $Optional<(T)>
 "getOrElse"<T>(arg0: StringJS, arg1: T): T
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getOrElse"<T>(arg0: StringJS, arg1: $Supplier$$Type<(T)>): T
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getOptionalInt"(arg0: StringJS): $OptionalInt
 "getOptionalInt"(arg0: $List$$Type<(StringJS)>): $OptionalInt
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: StringJS, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: StringJS, arg1: integer): integer
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: integer): integer
 "getLongOrElse"(arg0: StringJS, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: StringJS, arg1: $LongSupplier$$Type): long
 "getByteOrElse"(arg0: StringJS, arg1: byte): byte
 "getByteOrElse"(arg0: $List$$Type<(StringJS)>, arg1: byte): byte
 "getShortOrElse"(arg0: $List$$Type<(StringJS)>, arg1: short): short
 "getShortOrElse"(arg0: StringJS, arg1: short): short
 "getCharOrElse"(arg0: $List$$Type<(StringJS)>, arg1: character): character
 "getCharOrElse"(arg0: StringJS, arg1: character): character
 "configFormat"(): $ConfigFormat<(any)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalLong"(arg0: $List$$Type<(StringJS)>): $OptionalLong
 "getOptionalLong"(arg0: StringJS): $OptionalLong
get "comments"(): $Map<(StringJS), ($UnmodifiableCommentedConfig$CommentNode)>
get "empty"(): boolean
}

export namespace $UnmodifiableCommentedConfig {
function fake(arg0: $UnmodifiableConfig$$Type): $UnmodifiableCommentedConfig
const probejs$$marker: never
}
export class $UnmodifiableCommentedConfig$$Static implements $UnmodifiableCommentedConfig {


 "getComment"(arg0: StringJS): StringJS
 "getComment"(arg0: $List$$Type<(StringJS)>): StringJS
static "fake"(arg0: $UnmodifiableConfig$$Type): $UnmodifiableCommentedConfig
 "entrySet"(): $Set<($UnmodifiableCommentedConfig$Entry)>
/**
 * 
 * @deprecated
 */
 "commentMap"(): $Map<(StringJS), (StringJS)>
 "getComments"(arg0: $Map$$Type<(StringJS), ($UnmodifiableCommentedConfig$CommentNode$$Type)>): void
 "getComments"(): $Map<(StringJS), ($UnmodifiableCommentedConfig$CommentNode)>
 "getOptionalComment"(arg0: $List$$Type<(StringJS)>): $Optional<(StringJS)>
 "getOptionalComment"(arg0: StringJS): $Optional<(StringJS)>
 "containsComment"(arg0: StringJS): boolean
 "containsComment"(arg0: $List$$Type<(StringJS)>): boolean
 "isNull"(arg0: $List$$Type<(StringJS)>): boolean
 "isNull"(arg0: StringJS): boolean
 "size"(): integer
 "get"<T>(arg0: StringJS): T
 "get"<T>(arg0: $List$$Type<(StringJS)>): T
 "getByte"(arg0: $List$$Type<(StringJS)>): byte
 "getByte"(arg0: StringJS): byte
 "getShort"(arg0: StringJS): short
 "getShort"(arg0: $List$$Type<(StringJS)>): short
 "getChar"(arg0: StringJS): character
 "getChar"(arg0: $List$$Type<(StringJS)>): character
 "getInt"(arg0: StringJS): integer
 "getInt"(arg0: $List$$Type<(StringJS)>): integer
 "getLong"(arg0: $List$$Type<(StringJS)>): long
 "getLong"(arg0: StringJS): long
 "isEmpty"(): boolean
 "apply"<T>(arg0: StringJS): T
 "apply"<T>(arg0: $List$$Type<(StringJS)>): T
 "contains"(arg0: StringJS): boolean
 "contains"(arg0: $List$$Type<(StringJS)>): boolean
 "getRaw"<T>(arg0: StringJS): T
 "getRaw"<T>(arg0: $List$$Type<(StringJS)>): T
/**
 * 
 * @deprecated
 */
 "valueMap"(): $Map<(StringJS), (any)>
 "getOptional"<T>(arg0: StringJS): $Optional<(T)>
 "getOptional"<T>(arg0: $List$$Type<(StringJS)>): $Optional<(T)>
 "getOrElse"<T>(arg0: StringJS, arg1: T): T
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getOrElse"<T>(arg0: StringJS, arg1: $Supplier$$Type<(T)>): T
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getOptionalInt"(arg0: StringJS): $OptionalInt
 "getOptionalInt"(arg0: $List$$Type<(StringJS)>): $OptionalInt
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: StringJS, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: StringJS, arg1: integer): integer
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: integer): integer
 "getLongOrElse"(arg0: StringJS, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: StringJS, arg1: $LongSupplier$$Type): long
 "getByteOrElse"(arg0: StringJS, arg1: byte): byte
 "getByteOrElse"(arg0: $List$$Type<(StringJS)>, arg1: byte): byte
 "getShortOrElse"(arg0: $List$$Type<(StringJS)>, arg1: short): short
 "getShortOrElse"(arg0: StringJS, arg1: short): short
 "getCharOrElse"(arg0: $List$$Type<(StringJS)>, arg1: character): character
 "getCharOrElse"(arg0: StringJS, arg1: character): character
 "configFormat"(): $ConfigFormat<(any)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalLong"(arg0: $List$$Type<(StringJS)>): $OptionalLong
 "getOptionalLong"(arg0: StringJS): $OptionalLong
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnmodifiableCommentedConfig$$Type = ($UnmodifiableCommentedConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnmodifiableCommentedConfig_ = $UnmodifiableCommentedConfig$$Type;
}}
declare module "com.electronwill.nightconfig.core.CommentedConfig$Entry" {
import {$Config$Entry, $Config$Entry$$Type} from "com.electronwill.nightconfig.core.Config$Entry"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$UnmodifiableCommentedConfig$Entry, $UnmodifiableCommentedConfig$Entry$$Type} from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$Entry"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"

export interface $CommentedConfig$Entry extends $Config$Entry, $UnmodifiableCommentedConfig$Entry {

 "setComment"(arg0: StringJS): StringJS
 "removeComment"(): StringJS
 "setValue"<T>(arg0: any): T
 "getComment"(): StringJS
 "isNull"(): boolean
 "getByte"(): byte
 "getShort"(): short
 "getChar"(): character
 "getInt"(): integer
 "getLong"(): long
 "getValue"<T>(): T
 "getKey"(): StringJS
 "getOptional"<T>(): $Optional<(T)>
 "getOrElse"<T>(arg0: T): T
 "getOptionalInt"(): $OptionalInt
 "getRawValue"<T>(): T
 "getIntOrElse"(arg0: integer): integer
 "getLongOrElse"(arg0: long): long
 "getByteOrElse"(arg0: byte): byte
 "getShortOrElse"(arg0: short): short
 "getCharOrElse"(arg0: character): character
 "getOptionalLong"(): $OptionalLong
set "comment"(value: StringJS)
set "value"(value: any)
get "comment"(): StringJS
get "null"(): boolean
get "byte"(): byte
get "short"(): short
get "char"(): character
get "int"(): integer
get "long"(): long
get "value"(): T
get "key"(): StringJS
get "optional"(): $Optional<(T)>
get "optionalInt"(): $OptionalInt
get "rawValue"(): T
get "optionalLong"(): $OptionalLong
}

export namespace $CommentedConfig$Entry {
const probejs$$marker: never
}
export class $CommentedConfig$Entry$$Static implements $CommentedConfig$Entry {


 "setComment"(arg0: StringJS): StringJS
 "removeComment"(): StringJS
 "setValue"<T>(arg0: any): T
 "getComment"(): StringJS
 "isNull"(): boolean
 "getByte"(): byte
 "getShort"(): short
 "getChar"(): character
 "getInt"(): integer
 "getLong"(): long
 "getValue"<T>(): T
 "getKey"(): StringJS
 "getOptional"<T>(): $Optional<(T)>
 "getOrElse"<T>(arg0: T): T
 "getOptionalInt"(): $OptionalInt
 "getRawValue"<T>(): T
 "getIntOrElse"(arg0: integer): integer
 "getLongOrElse"(arg0: long): long
 "getByteOrElse"(arg0: byte): byte
 "getShortOrElse"(arg0: short): short
 "getCharOrElse"(arg0: character): character
 "getOptionalLong"(): $OptionalLong
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommentedConfig$Entry$$Type = ($CommentedConfig$Entry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommentedConfig$Entry_ = $CommentedConfig$Entry$$Type;
}}
declare module "com.electronwill.nightconfig.core.Config$Entry" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$UnmodifiableConfig$Entry, $UnmodifiableConfig$Entry$$Type} from "com.electronwill.nightconfig.core.UnmodifiableConfig$Entry"

export interface $Config$Entry extends $UnmodifiableConfig$Entry {

 "setValue"<T>(arg0: any): T
 "isNull"(): boolean
 "getByte"(): byte
 "getShort"(): short
 "getChar"(): character
 "getInt"(): integer
 "getLong"(): long
 "getValue"<T>(): T
 "getKey"(): StringJS
 "getOptional"<T>(): $Optional<(T)>
 "getOrElse"<T>(arg0: T): T
 "getOptionalInt"(): $OptionalInt
 "getRawValue"<T>(): T
 "getIntOrElse"(arg0: integer): integer
 "getLongOrElse"(arg0: long): long
 "getByteOrElse"(arg0: byte): byte
 "getShortOrElse"(arg0: short): short
 "getCharOrElse"(arg0: character): character
 "getOptionalLong"(): $OptionalLong
set "value"(value: any)
get "null"(): boolean
get "byte"(): byte
get "short"(): short
get "char"(): character
get "int"(): integer
get "long"(): long
get "value"(): T
get "key"(): StringJS
get "optional"(): $Optional<(T)>
get "optionalInt"(): $OptionalInt
get "rawValue"(): T
get "optionalLong"(): $OptionalLong
}

export namespace $Config$Entry {
const probejs$$marker: never
}
export class $Config$Entry$$Static implements $Config$Entry {


 "setValue"<T>(arg0: any): T
 "isNull"(): boolean
 "getByte"(): byte
 "getShort"(): short
 "getChar"(): character
 "getInt"(): integer
 "getLong"(): long
 "getValue"<T>(): T
 "getKey"(): StringJS
 "getOptional"<T>(): $Optional<(T)>
 "getOrElse"<T>(arg0: T): T
 "getOptionalInt"(): $OptionalInt
 "getRawValue"<T>(): T
 "getIntOrElse"(arg0: integer): integer
 "getLongOrElse"(arg0: long): long
 "getByteOrElse"(arg0: byte): byte
 "getShortOrElse"(arg0: short): short
 "getCharOrElse"(arg0: character): character
 "getOptionalLong"(): $OptionalLong
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Config$Entry$$Type = ($Config$Entry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Config$Entry_ = $Config$Entry$$Type;
}}
declare module "com.electronwill.nightconfig.core.io.ConfigParser" {
import {$FileNotFoundAction, $FileNotFoundAction$$Type} from "com.electronwill.nightconfig.core.file.FileNotFoundAction"
import {$ParsingMode, $ParsingMode$$Type} from "com.electronwill.nightconfig.core.io.ParsingMode"
import {$File, $File$$Type} from "java.io.File"
import {$Charset, $Charset$$Type} from "java.nio.charset.Charset"
import {$Reader, $Reader$$Type} from "java.io.Reader"
import {$URL, $URL$$Type} from "java.net.URL"
import {$Config, $Config$$Type} from "com.electronwill.nightconfig.core.Config"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$ConfigFormat, $ConfigFormat$$Type} from "com.electronwill.nightconfig.core.ConfigFormat"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export interface $ConfigParser<C extends $Config> {

 "getFormat"(): $ConfigFormat<(C)>
 "parse"(arg0: $File$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $FileNotFoundAction$$Type, arg4: $Charset$$Type): void
 "parse"(arg0: $Path$$Type, arg1: $FileNotFoundAction$$Type): C
 "parse"(arg0: $Path$$Type, arg1: $FileNotFoundAction$$Type, arg2: $Charset$$Type): C
 "parse"(arg0: $File$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $FileNotFoundAction$$Type): void
 "parse"(arg0: $File$$Type, arg1: $FileNotFoundAction$$Type, arg2: $Charset$$Type): C
 "parse"(arg0: $URL$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type): void
 "parse"(arg0: $URL$$Type): C
 "parse"(arg0: $Path$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $FileNotFoundAction$$Type, arg4: $Charset$$Type): void
 "parse"(arg0: $Path$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $FileNotFoundAction$$Type): void
 "parse"(arg0: $InputStream$$Type): C
 "parse"(arg0: StringJS, arg1: $Config$$Type, arg2: $ParsingMode$$Type): void
 "parse"(arg0: StringJS): C
 "parse"(arg0: $Reader$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type): void
 "parse"(arg0: $Reader$$Type): C
 "parse"(arg0: $File$$Type, arg1: $FileNotFoundAction$$Type): C
 "parse"(arg0: $InputStream$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $Charset$$Type): void
 "parse"(arg0: $InputStream$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type): void
 "parse"(arg0: $InputStream$$Type, arg1: $Charset$$Type): C
get "format"(): $ConfigFormat<(C)>
}

export namespace $ConfigParser {
const probejs$$marker: never
}
export class $ConfigParser$$Static<C extends $Config> implements $ConfigParser {


 "getFormat"(): $ConfigFormat<(C)>
 "parse"(arg0: $File$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $FileNotFoundAction$$Type, arg4: $Charset$$Type): void
 "parse"(arg0: $Path$$Type, arg1: $FileNotFoundAction$$Type): C
 "parse"(arg0: $Path$$Type, arg1: $FileNotFoundAction$$Type, arg2: $Charset$$Type): C
 "parse"(arg0: $File$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $FileNotFoundAction$$Type): void
 "parse"(arg0: $File$$Type, arg1: $FileNotFoundAction$$Type, arg2: $Charset$$Type): C
 "parse"(arg0: $URL$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type): void
 "parse"(arg0: $URL$$Type): C
 "parse"(arg0: $Path$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $FileNotFoundAction$$Type, arg4: $Charset$$Type): void
 "parse"(arg0: $Path$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $FileNotFoundAction$$Type): void
 "parse"(arg0: $InputStream$$Type): C
 "parse"(arg0: StringJS, arg1: $Config$$Type, arg2: $ParsingMode$$Type): void
 "parse"(arg0: StringJS): C
 "parse"(arg0: $Reader$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type): void
 "parse"(arg0: $Reader$$Type): C
 "parse"(arg0: $File$$Type, arg1: $FileNotFoundAction$$Type): C
 "parse"(arg0: $InputStream$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type, arg3: $Charset$$Type): void
 "parse"(arg0: $InputStream$$Type, arg1: $Config$$Type, arg2: $ParsingMode$$Type): void
 "parse"(arg0: $InputStream$$Type, arg1: $Charset$$Type): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigParser$$Type<C> = ($ConfigParser<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigParser_<C> = $ConfigParser$$Type<(C)>;
}}
declare module "com.electronwill.nightconfig.core.Config" {
import {$EnumGetMethod, $EnumGetMethod$$Type} from "com.electronwill.nightconfig.core.EnumGetMethod"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$LongSupplier, $LongSupplier$$Type} from "java.util.function.LongSupplier"
import {$Config$Entry, $Config$Entry$$Type} from "com.electronwill.nightconfig.core.Config$Entry"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UnmodifiableConfig, $UnmodifiableConfig$$Type} from "com.electronwill.nightconfig.core.UnmodifiableConfig"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ConfigFormat, $ConfigFormat$$Type} from "com.electronwill.nightconfig.core.ConfigFormat"

export interface $Config extends $UnmodifiableConfig {

 "checked"(): $Config
 "removeAll"(arg0: $UnmodifiableConfig$$Type): void
 "remove"<T>(arg0: $List$$Type<(StringJS)>): T
 "remove"<T>(arg0: StringJS): T
 "update"(arg0: $List$$Type<(StringJS)>, arg1: any): void
 "update"(arg0: StringJS, arg1: any): void
 "clear"(): void
 "add"(arg0: $List$$Type<(StringJS)>, arg1: any): boolean
 "add"(arg0: StringJS, arg1: any): boolean
 "addAll"(arg0: $UnmodifiableConfig$$Type): void
 "entrySet"(): $Set<($Config$Entry)>
 "putAll"(arg0: $UnmodifiableConfig$$Type): void
 "set"<T>(arg0: StringJS, arg1: any): T
 "set"<T>(arg0: $List$$Type<(StringJS)>, arg1: any): T
/**
 * 
 * @deprecated
 */
 "valueMap"(): $Map<(StringJS), (any)>
 "unmodifiable"(): $UnmodifiableConfig
 "createSubConfig"(): $Config
 "isNull"(arg0: $List$$Type<(StringJS)>): boolean
 "isNull"(arg0: StringJS): boolean
 "size"(): integer
 "get"<T>(arg0: StringJS): T
 "get"<T>(arg0: $List$$Type<(StringJS)>): T
 "getByte"(arg0: $List$$Type<(StringJS)>): byte
 "getByte"(arg0: StringJS): byte
 "getShort"(arg0: StringJS): short
 "getShort"(arg0: $List$$Type<(StringJS)>): short
 "getChar"(arg0: StringJS): character
 "getChar"(arg0: $List$$Type<(StringJS)>): character
 "getInt"(arg0: StringJS): integer
 "getInt"(arg0: $List$$Type<(StringJS)>): integer
 "getLong"(arg0: $List$$Type<(StringJS)>): long
 "getLong"(arg0: StringJS): long
 "isEmpty"(): boolean
 "apply"<T>(arg0: StringJS): T
 "apply"<T>(arg0: $List$$Type<(StringJS)>): T
 "contains"(arg0: StringJS): boolean
 "contains"(arg0: $List$$Type<(StringJS)>): boolean
 "getRaw"<T>(arg0: StringJS): T
 "getRaw"<T>(arg0: $List$$Type<(StringJS)>): T
 "getOptional"<T>(arg0: StringJS): $Optional<(T)>
 "getOptional"<T>(arg0: $List$$Type<(StringJS)>): $Optional<(T)>
 "getOrElse"<T>(arg0: StringJS, arg1: T): T
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getOrElse"<T>(arg0: StringJS, arg1: $Supplier$$Type<(T)>): T
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getOptionalInt"(arg0: StringJS): $OptionalInt
 "getOptionalInt"(arg0: $List$$Type<(StringJS)>): $OptionalInt
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: StringJS, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: StringJS, arg1: integer): integer
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: integer): integer
 "getLongOrElse"(arg0: StringJS, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: StringJS, arg1: $LongSupplier$$Type): long
 "getByteOrElse"(arg0: StringJS, arg1: byte): byte
 "getByteOrElse"(arg0: $List$$Type<(StringJS)>, arg1: byte): byte
 "getShortOrElse"(arg0: $List$$Type<(StringJS)>, arg1: short): short
 "getShortOrElse"(arg0: StringJS, arg1: short): short
 "getCharOrElse"(arg0: $List$$Type<(StringJS)>, arg1: character): character
 "getCharOrElse"(arg0: StringJS, arg1: character): character
 "configFormat"(): $ConfigFormat<(any)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalLong"(arg0: $List$$Type<(StringJS)>): $OptionalLong
 "getOptionalLong"(arg0: StringJS): $OptionalLong
get "empty"(): boolean
}

export namespace $Config {
function wrap(arg0: $Map$$Type<(StringJS), (any)>, arg1: $ConfigFormat$$Type<(any)>): $Config
function of(arg0: $ConfigFormat$$Type<($Config$$Type)>): $Config
function of(arg0: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>, arg1: $ConfigFormat$$Type<(any)>): $Config
function copy(arg0: $UnmodifiableConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $Config
function copy(arg0: $UnmodifiableConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>, arg2: $ConfigFormat$$Type<(any)>): $Config
function copy(arg0: $UnmodifiableConfig$$Type): $Config
function copy(arg0: $UnmodifiableConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>): $Config
function inMemory(): $Config
function ofConcurrent(arg0: $ConfigFormat$$Type<($Config$$Type)>): $Config
function concurrentCopy(arg0: $UnmodifiableConfig$$Type): $Config
function concurrentCopy(arg0: $UnmodifiableConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $Config
function getDefaultMapCreator<T>(arg0: boolean): $Supplier<($Map<(StringJS), (T)>)>
function getDefaultMapCreator<T>(arg0: boolean, arg1: boolean): $Supplier<($Map<(StringJS), (T)>)>
function inMemoryUniversal(): $Config
function inMemoryConcurrent(): $Config
function inMemoryUniversalConcurrent(): $Config
function isInsertionOrderPreserved(): boolean
function setInsertionOrderPreserved(arg0: boolean): void
const probejs$$marker: never
}
export class $Config$$Static implements $Config {


 "checked"(): $Config
 "removeAll"(arg0: $UnmodifiableConfig$$Type): void
 "remove"<T>(arg0: $List$$Type<(StringJS)>): T
 "remove"<T>(arg0: StringJS): T
 "update"(arg0: $List$$Type<(StringJS)>, arg1: any): void
 "update"(arg0: StringJS, arg1: any): void
 "clear"(): void
static "wrap"(arg0: $Map$$Type<(StringJS), (any)>, arg1: $ConfigFormat$$Type<(any)>): $Config
 "add"(arg0: $List$$Type<(StringJS)>, arg1: any): boolean
 "add"(arg0: StringJS, arg1: any): boolean
static "of"(arg0: $ConfigFormat$$Type<($Config$$Type)>): $Config
static "of"(arg0: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>, arg1: $ConfigFormat$$Type<(any)>): $Config
 "addAll"(arg0: $UnmodifiableConfig$$Type): void
 "entrySet"(): $Set<($Config$Entry)>
 "putAll"(arg0: $UnmodifiableConfig$$Type): void
 "set"<T>(arg0: StringJS, arg1: any): T
 "set"<T>(arg0: $List$$Type<(StringJS)>, arg1: any): T
static "copy"(arg0: $UnmodifiableConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $Config
static "copy"(arg0: $UnmodifiableConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>, arg2: $ConfigFormat$$Type<(any)>): $Config
static "copy"(arg0: $UnmodifiableConfig$$Type): $Config
static "copy"(arg0: $UnmodifiableConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>): $Config
/**
 * 
 * @deprecated
 */
 "valueMap"(): $Map<(StringJS), (any)>
static "inMemory"(): $Config
 "unmodifiable"(): $UnmodifiableConfig
/**
 * 
 * @deprecated
 */
static "ofConcurrent"(arg0: $ConfigFormat$$Type<($Config$$Type)>): $Config
/**
 * 
 * @deprecated
 */
static "concurrentCopy"(arg0: $UnmodifiableConfig$$Type): $Config
/**
 * 
 * @deprecated
 */
static "concurrentCopy"(arg0: $UnmodifiableConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $Config
 "createSubConfig"(): $Config
/**
 * 
 * @deprecated
 */
static "getDefaultMapCreator"<T>(arg0: boolean): $Supplier<($Map<(StringJS), (T)>)>
/**
 * 
 * @deprecated
 */
static "getDefaultMapCreator"<T>(arg0: boolean, arg1: boolean): $Supplier<($Map<(StringJS), (T)>)>
static "inMemoryUniversal"(): $Config
/**
 * 
 * @deprecated
 */
static "inMemoryConcurrent"(): $Config
/**
 * 
 * @deprecated
 */
static "inMemoryUniversalConcurrent"(): $Config
static "isInsertionOrderPreserved"(): boolean
static "setInsertionOrderPreserved"(arg0: boolean): void
 "isNull"(arg0: $List$$Type<(StringJS)>): boolean
 "isNull"(arg0: StringJS): boolean
 "size"(): integer
 "get"<T>(arg0: StringJS): T
 "get"<T>(arg0: $List$$Type<(StringJS)>): T
 "getByte"(arg0: $List$$Type<(StringJS)>): byte
 "getByte"(arg0: StringJS): byte
 "getShort"(arg0: StringJS): short
 "getShort"(arg0: $List$$Type<(StringJS)>): short
 "getChar"(arg0: StringJS): character
 "getChar"(arg0: $List$$Type<(StringJS)>): character
 "getInt"(arg0: StringJS): integer
 "getInt"(arg0: $List$$Type<(StringJS)>): integer
 "getLong"(arg0: $List$$Type<(StringJS)>): long
 "getLong"(arg0: StringJS): long
 "isEmpty"(): boolean
 "apply"<T>(arg0: StringJS): T
 "apply"<T>(arg0: $List$$Type<(StringJS)>): T
 "contains"(arg0: StringJS): boolean
 "contains"(arg0: $List$$Type<(StringJS)>): boolean
 "getRaw"<T>(arg0: StringJS): T
 "getRaw"<T>(arg0: $List$$Type<(StringJS)>): T
 "getOptional"<T>(arg0: StringJS): $Optional<(T)>
 "getOptional"<T>(arg0: $List$$Type<(StringJS)>): $Optional<(T)>
 "getOrElse"<T>(arg0: StringJS, arg1: T): T
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getOrElse"<T>(arg0: StringJS, arg1: $Supplier$$Type<(T)>): T
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getOptionalInt"(arg0: StringJS): $OptionalInt
 "getOptionalInt"(arg0: $List$$Type<(StringJS)>): $OptionalInt
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: StringJS, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: StringJS, arg1: integer): integer
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: integer): integer
 "getLongOrElse"(arg0: StringJS, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: StringJS, arg1: $LongSupplier$$Type): long
 "getByteOrElse"(arg0: StringJS, arg1: byte): byte
 "getByteOrElse"(arg0: $List$$Type<(StringJS)>, arg1: byte): byte
 "getShortOrElse"(arg0: $List$$Type<(StringJS)>, arg1: short): short
 "getShortOrElse"(arg0: StringJS, arg1: short): short
 "getCharOrElse"(arg0: $List$$Type<(StringJS)>, arg1: character): character
 "getCharOrElse"(arg0: StringJS, arg1: character): character
 "configFormat"(): $ConfigFormat<(any)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalLong"(arg0: $List$$Type<(StringJS)>): $OptionalLong
 "getOptionalLong"(arg0: StringJS): $OptionalLong
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Config$$Type = ($Config);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Config_ = $Config$$Type;
}}
declare module "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$Entry" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$UnmodifiableConfig$Entry, $UnmodifiableConfig$Entry$$Type} from "com.electronwill.nightconfig.core.UnmodifiableConfig$Entry"

export interface $UnmodifiableCommentedConfig$Entry extends $UnmodifiableConfig$Entry {

 "getComment"(): StringJS
 "isNull"(): boolean
 "getByte"(): byte
 "getShort"(): short
 "getChar"(): character
 "getInt"(): integer
 "getLong"(): long
 "getValue"<T>(): T
 "getKey"(): StringJS
 "getOptional"<T>(): $Optional<(T)>
 "getOrElse"<T>(arg0: T): T
 "getOptionalInt"(): $OptionalInt
 "getRawValue"<T>(): T
 "getIntOrElse"(arg0: integer): integer
 "getLongOrElse"(arg0: long): long
 "getByteOrElse"(arg0: byte): byte
 "getShortOrElse"(arg0: short): short
 "getCharOrElse"(arg0: character): character
 "getOptionalLong"(): $OptionalLong
get "comment"(): StringJS
get "null"(): boolean
get "byte"(): byte
get "short"(): short
get "char"(): character
get "int"(): integer
get "long"(): long
get "value"(): T
get "key"(): StringJS
get "optional"(): $Optional<(T)>
get "optionalInt"(): $OptionalInt
get "rawValue"(): T
get "optionalLong"(): $OptionalLong
}

export namespace $UnmodifiableCommentedConfig$Entry {
const probejs$$marker: never
}
export class $UnmodifiableCommentedConfig$Entry$$Static implements $UnmodifiableCommentedConfig$Entry {


 "getComment"(): StringJS
 "isNull"(): boolean
 "getByte"(): byte
 "getShort"(): short
 "getChar"(): character
 "getInt"(): integer
 "getLong"(): long
 "getValue"<T>(): T
 "getKey"(): StringJS
 "getOptional"<T>(): $Optional<(T)>
 "getOrElse"<T>(arg0: T): T
 "getOptionalInt"(): $OptionalInt
 "getRawValue"<T>(): T
 "getIntOrElse"(arg0: integer): integer
 "getLongOrElse"(arg0: long): long
 "getByteOrElse"(arg0: byte): byte
 "getShortOrElse"(arg0: short): short
 "getCharOrElse"(arg0: character): character
 "getOptionalLong"(): $OptionalLong
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnmodifiableCommentedConfig$Entry$$Type = ($UnmodifiableCommentedConfig$Entry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnmodifiableCommentedConfig$Entry_ = $UnmodifiableCommentedConfig$Entry$$Type;
}}
declare module "com.electronwill.nightconfig.core.EnumGetMethod" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $EnumGetMethod extends $Enum<($EnumGetMethod)> {
static readonly "NAME_IGNORECASE": $EnumGetMethod
static readonly "ORDINAL_OR_NAME": $EnumGetMethod
static readonly "ORDINAL_OR_NAME_IGNORECASE": $EnumGetMethod
static readonly "NAME": $EnumGetMethod


public "get"<T extends $Enum<(T)>>(arg0: any, arg1: $Class$$Type<(T)>): T
public static "values"(): ($EnumGetMethod)[]
public static "valueOf"(arg0: StringJS): $EnumGetMethod
public "validate"<T extends $Enum<(T)>>(arg0: any, arg1: $Class$$Type<(T)>): boolean
public "isCaseSensitive"(): boolean
public "isOrdinalOk"(): boolean
get "caseSensitive"(): boolean
get "ordinalOk"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumGetMethod$$Type = (("name") | ("name_ignorecase") | ("ordinal_or_name") | ("ordinal_or_name_ignorecase"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumGetMethod_ = $EnumGetMethod$$Type;
}}
declare module "com.electronwill.nightconfig.core.UnmodifiableConfig$Entry" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"

export interface $UnmodifiableConfig$Entry {

 "isNull"(): boolean
 "getByte"(): byte
 "getShort"(): short
 "getChar"(): character
 "getInt"(): integer
 "getLong"(): long
 "getValue"<T>(): T
 "getKey"(): StringJS
 "getOptional"<T>(): $Optional<(T)>
 "getOrElse"<T>(arg0: T): T
 "getOptionalInt"(): $OptionalInt
 "getRawValue"<T>(): T
 "getIntOrElse"(arg0: integer): integer
 "getLongOrElse"(arg0: long): long
 "getByteOrElse"(arg0: byte): byte
 "getShortOrElse"(arg0: short): short
 "getCharOrElse"(arg0: character): character
 "getOptionalLong"(): $OptionalLong
get "null"(): boolean
get "byte"(): byte
get "short"(): short
get "char"(): character
get "int"(): integer
get "long"(): long
get "value"(): T
get "key"(): StringJS
get "optional"(): $Optional<(T)>
get "optionalInt"(): $OptionalInt
get "rawValue"(): T
get "optionalLong"(): $OptionalLong
}

export namespace $UnmodifiableConfig$Entry {
const probejs$$marker: never
}
export class $UnmodifiableConfig$Entry$$Static implements $UnmodifiableConfig$Entry {


 "isNull"(): boolean
 "getByte"(): byte
 "getShort"(): short
 "getChar"(): character
 "getInt"(): integer
 "getLong"(): long
 "getValue"<T>(): T
 "getKey"(): StringJS
 "getOptional"<T>(): $Optional<(T)>
 "getOrElse"<T>(arg0: T): T
 "getOptionalInt"(): $OptionalInt
 "getRawValue"<T>(): T
 "getIntOrElse"(arg0: integer): integer
 "getLongOrElse"(arg0: long): long
 "getByteOrElse"(arg0: byte): byte
 "getShortOrElse"(arg0: short): short
 "getCharOrElse"(arg0: character): character
 "getOptionalLong"(): $OptionalLong
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnmodifiableConfig$Entry$$Type = ($UnmodifiableConfig$Entry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnmodifiableConfig$Entry_ = $UnmodifiableConfig$Entry$$Type;
}}
declare module "com.electronwill.nightconfig.core.io.ParsingMode" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$List, $List$$Type} from "java.util.List"
import {$Config, $Config$$Type} from "com.electronwill.nightconfig.core.Config"

export class $ParsingMode extends $Enum<($ParsingMode)> {
static readonly "ADD": $ParsingMode
static readonly "MERGE": $ParsingMode
static readonly "REPLACE": $ParsingMode


public "put"(arg0: $Map$$Type<(StringJS), (any)>, arg1: StringJS, arg2: any): any
public "put"(arg0: $Config$$Type, arg1: StringJS, arg2: any): any
public "put"(arg0: $Config$$Type, arg1: $List$$Type<(StringJS)>, arg2: any): any
public static "values"(): ($ParsingMode)[]
public static "valueOf"(arg0: StringJS): $ParsingMode
public "prepareParsing"(arg0: $Config$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParsingMode$$Type = (("replace") | ("merge") | ("add"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParsingMode_ = $ParsingMode$$Type;
}}
declare module "com.electronwill.nightconfig.core.CommentedConfig" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$EnumGetMethod, $EnumGetMethod$$Type} from "com.electronwill.nightconfig.core.EnumGetMethod"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$UnmodifiableCommentedConfig, $UnmodifiableCommentedConfig$$Type} from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$Config, $Config$$Type} from "com.electronwill.nightconfig.core.Config"
import {$UnmodifiableCommentedConfig$CommentNode, $UnmodifiableCommentedConfig$CommentNode$$Type} from "com.electronwill.nightconfig.core.UnmodifiableCommentedConfig$CommentNode"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$LongSupplier, $LongSupplier$$Type} from "java.util.function.LongSupplier"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Set, $Set$$Type} from "java.util.Set"
import {$UnmodifiableConfig, $UnmodifiableConfig$$Type} from "com.electronwill.nightconfig.core.UnmodifiableConfig"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$CommentedConfig$Entry, $CommentedConfig$Entry$$Type} from "com.electronwill.nightconfig.core.CommentedConfig$Entry"
import {$ConfigFormat, $ConfigFormat$$Type} from "com.electronwill.nightconfig.core.ConfigFormat"

export interface $CommentedConfig extends $UnmodifiableCommentedConfig, $Config {

 "checked"(): $CommentedConfig
 "setComment"(arg0: StringJS, arg1: StringJS): StringJS
 "setComment"(arg0: $List$$Type<(StringJS)>, arg1: StringJS): StringJS
 "entrySet"(): $Set<($CommentedConfig$Entry)>
 "putAllComments"(arg0: $UnmodifiableCommentedConfig$$Type): void
 "putAllComments"(arg0: $Map$$Type<(StringJS), ($UnmodifiableCommentedConfig$CommentNode$$Type)>): void
 "removeComment"(arg0: $List$$Type<(StringJS)>): StringJS
 "removeComment"(arg0: StringJS): StringJS
 "clearComments"(): void
 "unmodifiable"(): $UnmodifiableConfig
/**
 * 
 * @deprecated
 */
 "commentMap"(): $Map<(StringJS), (StringJS)>
 "createSubConfig"(): $CommentedConfig
 "getComment"(arg0: StringJS): StringJS
 "getComment"(arg0: $List$$Type<(StringJS)>): StringJS
 "getComments"(arg0: $Map$$Type<(StringJS), ($UnmodifiableCommentedConfig$CommentNode$$Type)>): void
 "getComments"(): $Map<(StringJS), ($UnmodifiableCommentedConfig$CommentNode)>
 "getOptionalComment"(arg0: $List$$Type<(StringJS)>): $Optional<(StringJS)>
 "getOptionalComment"(arg0: StringJS): $Optional<(StringJS)>
 "containsComment"(arg0: StringJS): boolean
 "containsComment"(arg0: $List$$Type<(StringJS)>): boolean
 "removeAll"(arg0: $UnmodifiableConfig$$Type): void
 "remove"<T>(arg0: $List$$Type<(StringJS)>): T
 "remove"<T>(arg0: StringJS): T
 "update"(arg0: $List$$Type<(StringJS)>, arg1: any): void
 "update"(arg0: StringJS, arg1: any): void
 "clear"(): void
 "add"(arg0: $List$$Type<(StringJS)>, arg1: any): boolean
 "add"(arg0: StringJS, arg1: any): boolean
 "addAll"(arg0: $UnmodifiableConfig$$Type): void
 "putAll"(arg0: $UnmodifiableConfig$$Type): void
 "set"<T>(arg0: StringJS, arg1: any): T
 "set"<T>(arg0: $List$$Type<(StringJS)>, arg1: any): T
/**
 * 
 * @deprecated
 */
 "valueMap"(): $Map<(StringJS), (any)>
 "isNull"(arg0: $List$$Type<(StringJS)>): boolean
 "isNull"(arg0: StringJS): boolean
 "size"(): integer
 "get"<T>(arg0: StringJS): T
 "get"<T>(arg0: $List$$Type<(StringJS)>): T
 "getByte"(arg0: $List$$Type<(StringJS)>): byte
 "getByte"(arg0: StringJS): byte
 "getShort"(arg0: StringJS): short
 "getShort"(arg0: $List$$Type<(StringJS)>): short
 "getChar"(arg0: StringJS): character
 "getChar"(arg0: $List$$Type<(StringJS)>): character
 "getInt"(arg0: StringJS): integer
 "getInt"(arg0: $List$$Type<(StringJS)>): integer
 "getLong"(arg0: $List$$Type<(StringJS)>): long
 "getLong"(arg0: StringJS): long
 "isEmpty"(): boolean
 "apply"<T>(arg0: StringJS): T
 "apply"<T>(arg0: $List$$Type<(StringJS)>): T
 "contains"(arg0: StringJS): boolean
 "contains"(arg0: $List$$Type<(StringJS)>): boolean
 "getRaw"<T>(arg0: StringJS): T
 "getRaw"<T>(arg0: $List$$Type<(StringJS)>): T
 "getOptional"<T>(arg0: StringJS): $Optional<(T)>
 "getOptional"<T>(arg0: $List$$Type<(StringJS)>): $Optional<(T)>
 "getOrElse"<T>(arg0: StringJS, arg1: T): T
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getOrElse"<T>(arg0: StringJS, arg1: $Supplier$$Type<(T)>): T
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getOptionalInt"(arg0: StringJS): $OptionalInt
 "getOptionalInt"(arg0: $List$$Type<(StringJS)>): $OptionalInt
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: StringJS, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: StringJS, arg1: integer): integer
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: integer): integer
 "getLongOrElse"(arg0: StringJS, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: StringJS, arg1: $LongSupplier$$Type): long
 "getByteOrElse"(arg0: StringJS, arg1: byte): byte
 "getByteOrElse"(arg0: $List$$Type<(StringJS)>, arg1: byte): byte
 "getShortOrElse"(arg0: $List$$Type<(StringJS)>, arg1: short): short
 "getShortOrElse"(arg0: StringJS, arg1: short): short
 "getCharOrElse"(arg0: $List$$Type<(StringJS)>, arg1: character): character
 "getCharOrElse"(arg0: StringJS, arg1: character): character
 "configFormat"(): $ConfigFormat<(any)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalLong"(arg0: $List$$Type<(StringJS)>): $OptionalLong
 "getOptionalLong"(arg0: StringJS): $OptionalLong
get "comments"(): $Map<(StringJS), ($UnmodifiableCommentedConfig$CommentNode)>
get "empty"(): boolean
}

export namespace $CommentedConfig {
function fake(arg0: $Config$$Type): $CommentedConfig
function wrap(arg0: $Map$$Type<(StringJS), (any)>, arg1: $ConfigFormat$$Type<(any)>): $CommentedConfig
function of(arg0: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>, arg1: $ConfigFormat$$Type<($CommentedConfig$$Type)>): $CommentedConfig
function of(arg0: $ConfigFormat$$Type<($CommentedConfig$$Type)>): $CommentedConfig
function copy(arg0: $UnmodifiableConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $CommentedConfig
function copy(arg0: $UnmodifiableConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>, arg2: $ConfigFormat$$Type<(any)>): $CommentedConfig
function copy(arg0: $UnmodifiableConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>): $CommentedConfig
function copy(arg0: $UnmodifiableConfig$$Type): $CommentedConfig
function copy(arg0: $UnmodifiableCommentedConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $CommentedConfig
function copy(arg0: $UnmodifiableCommentedConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>, arg2: $ConfigFormat$$Type<($CommentedConfig$$Type)>): $CommentedConfig
function copy(arg0: $UnmodifiableCommentedConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>): $CommentedConfig
function copy(arg0: $UnmodifiableCommentedConfig$$Type): $CommentedConfig
function inMemory(): $CommentedConfig
function ofConcurrent(arg0: $ConfigFormat$$Type<($CommentedConfig$$Type)>): $CommentedConfig
function concurrentCopy(arg0: $UnmodifiableConfig$$Type): $CommentedConfig
function concurrentCopy(arg0: $UnmodifiableCommentedConfig$$Type): $CommentedConfig
function concurrentCopy(arg0: $UnmodifiableConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $CommentedConfig
function concurrentCopy(arg0: $UnmodifiableCommentedConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $CommentedConfig
function inMemoryConcurrent(): $CommentedConfig
function fake(arg0: $UnmodifiableConfig$$Type): $UnmodifiableCommentedConfig
function getDefaultMapCreator<T>(arg0: boolean): $Supplier<($Map<(StringJS), (T)>)>
function getDefaultMapCreator<T>(arg0: boolean, arg1: boolean): $Supplier<($Map<(StringJS), (T)>)>
function inMemoryUniversal(): $Config
function inMemoryUniversalConcurrent(): $Config
function isInsertionOrderPreserved(): boolean
function setInsertionOrderPreserved(arg0: boolean): void
const probejs$$marker: never
}
export class $CommentedConfig$$Static implements $CommentedConfig {


 "checked"(): $CommentedConfig
 "setComment"(arg0: StringJS, arg1: StringJS): StringJS
 "setComment"(arg0: $List$$Type<(StringJS)>, arg1: StringJS): StringJS
static "fake"(arg0: $Config$$Type): $CommentedConfig
static "wrap"(arg0: $Map$$Type<(StringJS), (any)>, arg1: $ConfigFormat$$Type<(any)>): $CommentedConfig
static "of"(arg0: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>, arg1: $ConfigFormat$$Type<($CommentedConfig$$Type)>): $CommentedConfig
static "of"(arg0: $ConfigFormat$$Type<($CommentedConfig$$Type)>): $CommentedConfig
 "entrySet"(): $Set<($CommentedConfig$Entry)>
static "copy"(arg0: $UnmodifiableConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $CommentedConfig
static "copy"(arg0: $UnmodifiableConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>, arg2: $ConfigFormat$$Type<(any)>): $CommentedConfig
static "copy"(arg0: $UnmodifiableConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>): $CommentedConfig
static "copy"(arg0: $UnmodifiableConfig$$Type): $CommentedConfig
static "copy"(arg0: $UnmodifiableCommentedConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $CommentedConfig
static "copy"(arg0: $UnmodifiableCommentedConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>, arg2: $ConfigFormat$$Type<($CommentedConfig$$Type)>): $CommentedConfig
static "copy"(arg0: $UnmodifiableCommentedConfig$$Type, arg1: $Supplier$$Type<($Map$$Type<(StringJS), (any)>)>): $CommentedConfig
static "copy"(arg0: $UnmodifiableCommentedConfig$$Type): $CommentedConfig
 "putAllComments"(arg0: $UnmodifiableCommentedConfig$$Type): void
 "putAllComments"(arg0: $Map$$Type<(StringJS), ($UnmodifiableCommentedConfig$CommentNode$$Type)>): void
static "inMemory"(): $CommentedConfig
 "removeComment"(arg0: $List$$Type<(StringJS)>): StringJS
 "removeComment"(arg0: StringJS): StringJS
 "clearComments"(): void
 "unmodifiable"(): $UnmodifiableConfig
/**
 * 
 * @deprecated
 */
static "ofConcurrent"(arg0: $ConfigFormat$$Type<($CommentedConfig$$Type)>): $CommentedConfig
/**
 * 
 * @deprecated
 */
static "concurrentCopy"(arg0: $UnmodifiableConfig$$Type): $CommentedConfig
/**
 * 
 * @deprecated
 */
static "concurrentCopy"(arg0: $UnmodifiableCommentedConfig$$Type): $CommentedConfig
/**
 * 
 * @deprecated
 */
static "concurrentCopy"(arg0: $UnmodifiableConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $CommentedConfig
/**
 * 
 * @deprecated
 */
static "concurrentCopy"(arg0: $UnmodifiableCommentedConfig$$Type, arg1: $ConfigFormat$$Type<(any)>): $CommentedConfig
/**
 * 
 * @deprecated
 */
 "commentMap"(): $Map<(StringJS), (StringJS)>
 "createSubConfig"(): $CommentedConfig
/**
 * 
 * @deprecated
 */
static "inMemoryConcurrent"(): $CommentedConfig
 "getComment"(arg0: StringJS): StringJS
 "getComment"(arg0: $List$$Type<(StringJS)>): StringJS
static "fake"(arg0: $UnmodifiableConfig$$Type): $UnmodifiableCommentedConfig
 "getComments"(arg0: $Map$$Type<(StringJS), ($UnmodifiableCommentedConfig$CommentNode$$Type)>): void
 "getComments"(): $Map<(StringJS), ($UnmodifiableCommentedConfig$CommentNode)>
 "getOptionalComment"(arg0: $List$$Type<(StringJS)>): $Optional<(StringJS)>
 "getOptionalComment"(arg0: StringJS): $Optional<(StringJS)>
 "containsComment"(arg0: StringJS): boolean
 "containsComment"(arg0: $List$$Type<(StringJS)>): boolean
 "removeAll"(arg0: $UnmodifiableConfig$$Type): void
 "remove"<T>(arg0: $List$$Type<(StringJS)>): T
 "remove"<T>(arg0: StringJS): T
 "update"(arg0: $List$$Type<(StringJS)>, arg1: any): void
 "update"(arg0: StringJS, arg1: any): void
 "clear"(): void
 "add"(arg0: $List$$Type<(StringJS)>, arg1: any): boolean
 "add"(arg0: StringJS, arg1: any): boolean
 "addAll"(arg0: $UnmodifiableConfig$$Type): void
 "putAll"(arg0: $UnmodifiableConfig$$Type): void
 "set"<T>(arg0: StringJS, arg1: any): T
 "set"<T>(arg0: $List$$Type<(StringJS)>, arg1: any): T
/**
 * 
 * @deprecated
 */
 "valueMap"(): $Map<(StringJS), (any)>
/**
 * 
 * @deprecated
 */
static "getDefaultMapCreator"<T>(arg0: boolean): $Supplier<($Map<(StringJS), (T)>)>
/**
 * 
 * @deprecated
 */
static "getDefaultMapCreator"<T>(arg0: boolean, arg1: boolean): $Supplier<($Map<(StringJS), (T)>)>
static "inMemoryUniversal"(): $Config
/**
 * 
 * @deprecated
 */
static "inMemoryUniversalConcurrent"(): $Config
static "isInsertionOrderPreserved"(): boolean
static "setInsertionOrderPreserved"(arg0: boolean): void
 "isNull"(arg0: $List$$Type<(StringJS)>): boolean
 "isNull"(arg0: StringJS): boolean
 "size"(): integer
 "get"<T>(arg0: StringJS): T
 "get"<T>(arg0: $List$$Type<(StringJS)>): T
 "getByte"(arg0: $List$$Type<(StringJS)>): byte
 "getByte"(arg0: StringJS): byte
 "getShort"(arg0: StringJS): short
 "getShort"(arg0: $List$$Type<(StringJS)>): short
 "getChar"(arg0: StringJS): character
 "getChar"(arg0: $List$$Type<(StringJS)>): character
 "getInt"(arg0: StringJS): integer
 "getInt"(arg0: $List$$Type<(StringJS)>): integer
 "getLong"(arg0: $List$$Type<(StringJS)>): long
 "getLong"(arg0: StringJS): long
 "isEmpty"(): boolean
 "apply"<T>(arg0: StringJS): T
 "apply"<T>(arg0: $List$$Type<(StringJS)>): T
 "contains"(arg0: StringJS): boolean
 "contains"(arg0: $List$$Type<(StringJS)>): boolean
 "getRaw"<T>(arg0: StringJS): T
 "getRaw"<T>(arg0: $List$$Type<(StringJS)>): T
 "getOptional"<T>(arg0: StringJS): $Optional<(T)>
 "getOptional"<T>(arg0: $List$$Type<(StringJS)>): $Optional<(T)>
 "getOrElse"<T>(arg0: StringJS, arg1: T): T
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getOrElse"<T>(arg0: StringJS, arg1: $Supplier$$Type<(T)>): T
 "getOrElse"<T>(arg0: $List$$Type<(StringJS)>, arg1: $Supplier$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: T, arg2: $EnumGetMethod$$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type, arg3: $Supplier$$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $Supplier$$Type<(T)>): T
 "getOptionalInt"(arg0: StringJS): $OptionalInt
 "getOptionalInt"(arg0: $List$$Type<(StringJS)>): $OptionalInt
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: StringJS, arg1: $IntSupplier$$Type): integer
 "getIntOrElse"(arg0: StringJS, arg1: integer): integer
 "getIntOrElse"(arg0: $List$$Type<(StringJS)>, arg1: integer): integer
 "getLongOrElse"(arg0: StringJS, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: long): long
 "getLongOrElse"(arg0: $List$$Type<(StringJS)>, arg1: $LongSupplier$$Type): long
 "getLongOrElse"(arg0: StringJS, arg1: $LongSupplier$$Type): long
 "getByteOrElse"(arg0: StringJS, arg1: byte): byte
 "getByteOrElse"(arg0: $List$$Type<(StringJS)>, arg1: byte): byte
 "getShortOrElse"(arg0: $List$$Type<(StringJS)>, arg1: short): short
 "getShortOrElse"(arg0: StringJS, arg1: short): short
 "getCharOrElse"(arg0: $List$$Type<(StringJS)>, arg1: character): character
 "getCharOrElse"(arg0: StringJS, arg1: character): character
 "configFormat"(): $ConfigFormat<(any)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$$Type<(StringJS)>, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>, arg2: $EnumGetMethod$$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: StringJS, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getOptionalLong"(arg0: $List$$Type<(StringJS)>): $OptionalLong
 "getOptionalLong"(arg0: StringJS): $OptionalLong
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommentedConfig$$Type = ($CommentedConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommentedConfig_ = $CommentedConfig$$Type;
}}
declare module "com.electronwill.nightconfig.core.file.FileNotFoundAction" {
import {$File, $File$$Type} from "java.io.File"
import {$URL, $URL$$Type} from "java.net.URL"
import {$ConfigFormat, $ConfigFormat$$Type} from "com.electronwill.nightconfig.core.ConfigFormat"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export interface $FileNotFoundAction {

 "run"(arg0: $Path$$Type, arg1: $ConfigFormat$$Type<(any)>): boolean

(arg0: $Path, arg1: $ConfigFormat<(any)>): boolean
}

export namespace $FileNotFoundAction {
const READ_NOTHING: $FileNotFoundAction
const CREATE_EMPTY: $FileNotFoundAction
const THROW_ERROR: $FileNotFoundAction
function copyData(arg0: $InputStream$$Type): $FileNotFoundAction
function copyData(arg0: $File$$Type): $FileNotFoundAction
function copyData(arg0: $URL$$Type): $FileNotFoundAction
function copyData(arg0: $Path$$Type): $FileNotFoundAction
function copyResource(arg0: StringJS): $FileNotFoundAction
const probejs$$marker: never
}
export class $FileNotFoundAction$$Static implements $FileNotFoundAction {
static readonly "READ_NOTHING": $FileNotFoundAction
static readonly "CREATE_EMPTY": $FileNotFoundAction
static readonly "THROW_ERROR": $FileNotFoundAction


static "copyData"(arg0: $InputStream$$Type): $FileNotFoundAction
static "copyData"(arg0: $File$$Type): $FileNotFoundAction
static "copyData"(arg0: $URL$$Type): $FileNotFoundAction
static "copyData"(arg0: $Path$$Type): $FileNotFoundAction
 "run"(arg0: $Path$$Type, arg1: $ConfigFormat$$Type<(any)>): boolean
static "copyResource"(arg0: StringJS): $FileNotFoundAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileNotFoundAction$$Type = ((arg0: $Path, arg1: $ConfigFormat<(any)>) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FileNotFoundAction_ = $FileNotFoundAction$$Type;
}}
declare module "com.electronwill.nightconfig.core.utils.WriterSupplier" {
import {$Writer, $Writer$$Type} from "java.io.Writer"

export interface $WriterSupplier {

 "get"(): $Writer

(): $Writer$$Type
}

export namespace $WriterSupplier {
const probejs$$marker: never
}
export class $WriterSupplier$$Static implements $WriterSupplier {


 "get"(): $Writer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WriterSupplier$$Type = (() => $Writer$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WriterSupplier_ = $WriterSupplier$$Type;
}}
declare module "com.electronwill.nightconfig.core.io.ConfigWriter" {
import {$WritingMode, $WritingMode$$Type} from "com.electronwill.nightconfig.core.io.WritingMode"
import {$Writer, $Writer$$Type} from "java.io.Writer"
import {$File, $File$$Type} from "java.io.File"
import {$Charset, $Charset$$Type} from "java.nio.charset.Charset"
import {$URL, $URL$$Type} from "java.net.URL"
import {$UnmodifiableConfig, $UnmodifiableConfig$$Type} from "com.electronwill.nightconfig.core.UnmodifiableConfig"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export interface $ConfigWriter {

 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $Path$$Type, arg2: $WritingMode$$Type, arg3: $Charset$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $File$$Type, arg2: $WritingMode$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $File$$Type, arg2: $WritingMode$$Type, arg3: $Charset$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $URL$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $Writer$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $OutputStream$$Type, arg2: $Charset$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $OutputStream$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $Path$$Type, arg2: $WritingMode$$Type): void
 "writeToString"(arg0: $UnmodifiableConfig$$Type): StringJS

(arg0: $UnmodifiableConfig, arg1: $Writer): void
}

export namespace $ConfigWriter {
const probejs$$marker: never
}
export class $ConfigWriter$$Static implements $ConfigWriter {


 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $Path$$Type, arg2: $WritingMode$$Type, arg3: $Charset$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $File$$Type, arg2: $WritingMode$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $File$$Type, arg2: $WritingMode$$Type, arg3: $Charset$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $URL$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $Writer$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $OutputStream$$Type, arg2: $Charset$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $OutputStream$$Type): void
 "write"(arg0: $UnmodifiableConfig$$Type, arg1: $Path$$Type, arg2: $WritingMode$$Type): void
 "writeToString"(arg0: $UnmodifiableConfig$$Type): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigWriter$$Type = ((arg0: $UnmodifiableConfig, arg1: $Writer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigWriter_ = $ConfigWriter$$Type;
}}
declare module "com.electronwill.nightconfig.core.ConfigSpec$CorrectionAction" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ConfigSpec$CorrectionAction extends $Enum<($ConfigSpec$CorrectionAction)> {
static readonly "ADD": $ConfigSpec$CorrectionAction
static readonly "REMOVE": $ConfigSpec$CorrectionAction
static readonly "REPLACE": $ConfigSpec$CorrectionAction


public static "values"(): ($ConfigSpec$CorrectionAction)[]
public static "valueOf"(arg0: StringJS): $ConfigSpec$CorrectionAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigSpec$CorrectionAction$$Type = (("add") | ("replace") | ("remove"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigSpec$CorrectionAction_ = $ConfigSpec$CorrectionAction$$Type;
}}
