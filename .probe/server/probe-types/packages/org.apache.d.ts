declare module "org.apache.commons.lang3.mutable.MutableInt" {
import {$Mutable, $Mutable$$Type} from "org.apache.commons.lang3.mutable.Mutable"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"

export class $MutableInt extends number implements $Comparable<($MutableInt)>, $Mutable<(number)> {

constructor()
constructor(arg0: number)
constructor(arg0: StringJS)
constructor(arg0: integer)

public "incrementAndGet"(): integer
public "getAndIncrement"(): integer
public "getAndDecrement"(): integer
public "decrementAndGet"(): integer
public "addAndGet"(arg0: number): integer
public "addAndGet"(arg0: integer): integer
public "getAndAdd"(arg0: integer): integer
public "getAndAdd"(arg0: number): integer
public "decrement"(): void
public "subtract"(arg0: integer): void
public "subtract"(arg0: number): void
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $MutableInt$$Type): integer
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public "getValue"(): any
public "add"(arg0: number): void
public "add"(arg0: integer): void
public "increment"(): void
public "setValue"(arg0: integer): void
public "setValue"(arg0: any): void
public "setValue"(arg0: number): void
public "toInteger"(): integer
get "andIncrement"(): integer
get "andDecrement"(): integer
get "value"(): any
set "value"(value: integer)
set "value"(value: any)
set "value"(value: number)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableInt$$Type = ($MutableInt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableInt_ = $MutableInt$$Type;
}}
declare module "org.apache.maven.artifact.repository.ArtifactRepository" {
import {$ArtifactRepositoryPolicy, $ArtifactRepositoryPolicy$$Type} from "org.apache.maven.artifact.repository.ArtifactRepositoryPolicy"
import {$List, $List$$Type} from "java.util.List"
import {$Artifact, $Artifact$$Type} from "org.apache.maven.artifact.Artifact"
import {$Proxy, $Proxy$$Type} from "org.apache.maven.repository.Proxy"
import {$ArtifactMetadata, $ArtifactMetadata$$Type} from "org.apache.maven.artifact.metadata.ArtifactMetadata"
import {$ArtifactRepositoryLayout, $ArtifactRepositoryLayout$$Type} from "org.apache.maven.artifact.repository.layout.ArtifactRepositoryLayout"
import {$Authentication, $Authentication$$Type} from "org.apache.maven.artifact.repository.Authentication"

export interface $ArtifactRepository {

 "getProtocol"(): StringJS
 "getKey"(): StringJS
 "find"(arg0: $Artifact$$Type): $Artifact
 "getId"(): StringJS
 "setId"(arg0: StringJS): void
 "getUrl"(): StringJS
 "getProxy"(): $Proxy
 "isBlocked"(): boolean
 "getReleases"(): $ArtifactRepositoryPolicy
 "getSnapshots"(): $ArtifactRepositoryPolicy
 "setLayout"(arg0: $ArtifactRepositoryLayout$$Type): void
 "getLayout"(): $ArtifactRepositoryLayout
 "pathOf"(arg0: $Artifact$$Type): StringJS
 "setProxy"(arg0: $Proxy$$Type): void
/**
 * 
 * @deprecated
 */
 "isBlacklisted"(): boolean
 "setBlocked"(arg0: boolean): void
 "setUrl"(arg0: StringJS): void
 "getBasedir"(): StringJS
 "findVersions"(arg0: $Artifact$$Type): $List<(StringJS)>
/**
 * 
 * @deprecated
 */
 "setBlacklisted"(arg0: boolean): void
 "isProjectAware"(): boolean
 "setReleaseUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
/**
 * 
 * @deprecated
 */
 "isUniqueVersion"(): boolean
 "setAuthentication"(arg0: $Authentication$$Type): void
 "getAuthentication"(): $Authentication
 "setMirroredRepositories"(arg0: $List$$Type<($ArtifactRepository$$Type)>): void
 "setSnapshotUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
 "pathOfRemoteRepositoryMetadata"(arg0: $ArtifactMetadata$$Type): StringJS
 "pathOfLocalRepositoryMetadata"(arg0: $ArtifactMetadata$$Type, arg1: $ArtifactRepository$$Type): StringJS
 "getMirroredRepositories"(): $List<($ArtifactRepository)>
get "protocol"(): StringJS
get "key"(): StringJS
get "id"(): StringJS
set "id"(value: StringJS)
get "url"(): StringJS
get "proxy"(): $Proxy
get "blocked"(): boolean
get "releases"(): $ArtifactRepositoryPolicy
get "snapshots"(): $ArtifactRepositoryPolicy
set "layout"(value: $ArtifactRepositoryLayout$$Type)
get "layout"(): $ArtifactRepositoryLayout
set "proxy"(value: $Proxy$$Type)
get "blacklisted"(): boolean
set "blocked"(value: boolean)
set "url"(value: StringJS)
get "basedir"(): StringJS
set "blacklisted"(value: boolean)
get "projectAware"(): boolean
set "releaseUpdatePolicy"(value: $ArtifactRepositoryPolicy$$Type)
get "uniqueVersion"(): boolean
set "authentication"(value: $Authentication$$Type)
get "authentication"(): $Authentication
set "mirroredRepositories"(value: $List$$Type<($ArtifactRepository$$Type)>)
set "snapshotUpdatePolicy"(value: $ArtifactRepositoryPolicy$$Type)
get "mirroredRepositories"(): $List<($ArtifactRepository)>
}

export namespace $ArtifactRepository {
const probejs$$marker: never
}
export class $ArtifactRepository$$Static implements $ArtifactRepository {


 "getProtocol"(): StringJS
 "getKey"(): StringJS
 "find"(arg0: $Artifact$$Type): $Artifact
 "getId"(): StringJS
 "setId"(arg0: StringJS): void
 "getUrl"(): StringJS
 "getProxy"(): $Proxy
 "isBlocked"(): boolean
 "getReleases"(): $ArtifactRepositoryPolicy
 "getSnapshots"(): $ArtifactRepositoryPolicy
 "setLayout"(arg0: $ArtifactRepositoryLayout$$Type): void
 "getLayout"(): $ArtifactRepositoryLayout
 "pathOf"(arg0: $Artifact$$Type): StringJS
 "setProxy"(arg0: $Proxy$$Type): void
/**
 * 
 * @deprecated
 */
 "isBlacklisted"(): boolean
 "setBlocked"(arg0: boolean): void
 "setUrl"(arg0: StringJS): void
 "getBasedir"(): StringJS
 "findVersions"(arg0: $Artifact$$Type): $List<(StringJS)>
/**
 * 
 * @deprecated
 */
 "setBlacklisted"(arg0: boolean): void
 "isProjectAware"(): boolean
 "setReleaseUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
/**
 * 
 * @deprecated
 */
 "isUniqueVersion"(): boolean
 "setAuthentication"(arg0: $Authentication$$Type): void
 "getAuthentication"(): $Authentication
 "setMirroredRepositories"(arg0: $List$$Type<($ArtifactRepository$$Type)>): void
 "setSnapshotUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
 "pathOfRemoteRepositoryMetadata"(arg0: $ArtifactMetadata$$Type): StringJS
 "pathOfLocalRepositoryMetadata"(arg0: $ArtifactMetadata$$Type, arg1: $ArtifactRepository$$Type): StringJS
 "getMirroredRepositories"(): $List<($ArtifactRepository)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactRepository$$Type = ($ArtifactRepository);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactRepository_ = $ArtifactRepository$$Type;
}}
declare module "org.apache.logging.log4j.Marker" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"

export interface $Marker extends $Serializable {

 "getName"(): StringJS
 "remove"(marker: $Marker$$Type): boolean
 "equals"(obj: any): boolean
 "hashCode"(): integer
 "addParents"(...markers: ($Marker$$Type)[]): $Marker
 "isInstanceOf"(m: $Marker$$Type): boolean
 "isInstanceOf"(name: StringJS): boolean
 "getParents"(): ($Marker)[]
 "hasParents"(): boolean
 "setParents"(...markers: ($Marker$$Type)[]): $Marker
get "name"(): StringJS
get "parents"(): ($Marker)[]
set "parents"(value: ($Marker$$Type)[])
}

export namespace $Marker {
const probejs$$marker: never
}
export class $Marker$$Static implements $Marker {


 "getName"(): StringJS
 "remove"(marker: $Marker$$Type): boolean
 "equals"(obj: any): boolean
 "hashCode"(): integer
 "addParents"(...markers: ($Marker$$Type)[]): $Marker
 "isInstanceOf"(m: $Marker$$Type): boolean
 "isInstanceOf"(name: StringJS): boolean
 "getParents"(): ($Marker)[]
 "hasParents"(): boolean
 "setParents"(...markers: ($Marker$$Type)[]): $Marker
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
declare module "org.apache.logging.log4j.util.Supplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * 
 * @deprecated
 */
export interface $Supplier<T> {

 "get"(): T

(): T
}

export namespace $Supplier {
const probejs$$marker: never
}
export class $Supplier$$Static<T> implements $Supplier {


 "get"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Supplier$$Type<T> = (() => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Supplier_<T> = $Supplier$$Type<(T)>;
}}
declare module "org.apache.maven.artifact.resolver.filter.ArtifactFilter" {
import {$Artifact, $Artifact$$Type} from "org.apache.maven.artifact.Artifact"

export interface $ArtifactFilter {

 "include"(arg0: $Artifact$$Type): boolean

(arg0: $Artifact): boolean
}

export namespace $ArtifactFilter {
const probejs$$marker: never
}
export class $ArtifactFilter$$Static implements $ArtifactFilter {


 "include"(arg0: $Artifact$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactFilter$$Type = ((arg0: $Artifact) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactFilter_ = $ArtifactFilter$$Type;
}}
declare module "org.apache.commons.lang3.function.TriConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriConsumer<T, U, V> {

 "andThen"(arg0: $TriConsumer$$Type<(T), (U), (V)>): $TriConsumer<(T), (U), (V)>
 "accept"(arg0: T, arg1: U, arg2: V): void

(arg0: T, arg1: U, arg2: V): void
}

export namespace $TriConsumer {
const probejs$$marker: never
}
export class $TriConsumer$$Static<T, U, V> implements $TriConsumer {


 "andThen"(arg0: $TriConsumer$$Type<(T), (U), (V)>): $TriConsumer<(T), (U), (V)>
 "accept"(arg0: T, arg1: U, arg2: V): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriConsumer$$Type<T, U, V> = ((arg0: T, arg1: U, arg2: V) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriConsumer_<T, U, V> = $TriConsumer$$Type<(T), (U), (V)>;
}}
declare module "org.apache.commons.lang3.tuple.Triple" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"

export class $Triple<L, M, R> implements $Comparable<($Triple<(L), (M), (R)>)>, $Serializable {
static readonly "EMPTY_ARRAY": ($Triple<(any), (any), (any)>)[]

constructor()

public static "emptyArray"<L, M, R>(): ($Triple<(L), (M), (R)>)[]
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "toString"(arg0: StringJS): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $Triple$$Type<(L), (M), (R)>): integer
public static "of"<L, M, R>(arg0: L, arg1: M, arg2: R): $Triple<(L), (M), (R)>
public "getLeft"(): L
public "getRight"(): R
public static "ofNonNull"<L, M, R>(arg0: L, arg1: M, arg2: R): $Triple<(L), (M), (R)>
public "getMiddle"(): M
get "left"(): L
get "right"(): R
get "middle"(): M
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Triple$$Type<L, M, R> = ($Triple<(L), (M), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Triple_<L, M, R> = $Triple$$Type<(L), (M), (R)>;
}}
declare module "org.apache.commons.lang3.mutable.MutableBoolean" {
import {$Mutable, $Mutable$$Type} from "org.apache.commons.lang3.mutable.Mutable"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"

export class $MutableBoolean implements $Mutable<(boolean)>, $Serializable, $Comparable<($MutableBoolean)> {

constructor()
constructor(arg0: boolean)
constructor(arg0: boolean)

public "toBoolean"(): boolean
public "isFalse"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $MutableBoolean$$Type): integer
public "booleanValue"(): boolean
public "getValue"(): any
public "setValue"(arg0: any): void
public "setValue"(arg0: boolean): void
public "setValue"(arg0: boolean): void
public "isTrue"(): boolean
public "setTrue"(): void
public "setFalse"(): void
get "false"(): boolean
get "value"(): any
set "value"(value: any)
set "value"(value: boolean)
set "value"(value: boolean)
get "true"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableBoolean$$Type = ($MutableBoolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableBoolean_ = $MutableBoolean$$Type;
}}
declare module "org.apache.logging.log4j.message.Message" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"

export interface $Message extends $Serializable {

 "getParameters"(): (any)[]
 "getFormat"(): StringJS
 "getThrowable"(): $Throwable
 "getFormattedMessage"(): StringJS
get "parameters"(): (any)[]
get "format"(): StringJS
get "throwable"(): $Throwable
get "formattedMessage"(): StringJS
}

export namespace $Message {
const probejs$$marker: never
}
export class $Message$$Static implements $Message {


 "getParameters"(): (any)[]
 "getFormat"(): StringJS
 "getThrowable"(): $Throwable
 "getFormattedMessage"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Message$$Type = ($Message);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Message_ = $Message$$Type;
}}
declare module "org.apache.logging.log4j.Logger" {
import {$Supplier, $Supplier$$Type} from "org.apache.logging.log4j.util.Supplier"
import {$MessageFactory, $MessageFactory$$Type} from "org.apache.logging.log4j.message.MessageFactory"
import {$StackTraceElement, $StackTraceElement$$Type} from "java.lang.StackTraceElement"
import {$EntryMessage, $EntryMessage$$Type} from "org.apache.logging.log4j.message.EntryMessage"
import {$Level, $Level$$Type} from "org.apache.logging.log4j.Level"
import {$LogBuilder, $LogBuilder$$Type} from "org.apache.logging.log4j.LogBuilder"
import {$MessageSupplier, $MessageSupplier$$Type} from "org.apache.logging.log4j.util.MessageSupplier"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Message, $Message$$Type} from "org.apache.logging.log4j.message.Message"
import {$FlowMessageFactory, $FlowMessageFactory$$Type} from "org.apache.logging.log4j.message.FlowMessageFactory"
import {$Marker, $Marker$$Type} from "org.apache.logging.log4j.Marker"

export interface $Logger {

 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "warn"(marker: $Marker$$Type, message: $Message$$Type): void
 "warn"(message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "warn"(message: StringJS, throwable: $Throwable$$Type): void
 "warn"(messageSupplier: $Supplier$$Type<(any)>): void
 "warn"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any): void
 "warn"(message: StringJS, p0: any, p1: any): void
 "warn"(message: StringJS, p0: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "warn"(message: charseq): void
 "warn"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "warn"(messageSupplier: $MessageSupplier$$Type): void
 "warn"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "warn"(message: $Message$$Type): void
 "warn"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "warn"(message: StringJS, ...params: (any)[]): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "warn"(message: StringJS): void
 "warn"(message: any, throwable: $Throwable$$Type): void
 "warn"(message: any): void
 "warn"(message: charseq, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, message: any): void
 "warn"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, message: charseq): void
 "warn"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "warn"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "warn"(marker: $Marker$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "warn"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, message: StringJS): void
 "warn"(marker: $Marker$$Type, message: StringJS, ...params: (any)[]): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "error"(message: StringJS): void
 "error"(message: StringJS, ...params: (any)[]): void
 "error"(message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "error"(message: StringJS, throwable: $Throwable$$Type): void
 "error"(messageSupplier: $Supplier$$Type<(any)>): void
 "error"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "error"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "error"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "error"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "error"(message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "error"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "error"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "error"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "error"(message: StringJS, p0: any): void
 "error"(message: StringJS, p0: any, p1: any): void
 "error"(message: StringJS, p0: any, p1: any, p2: any): void
 "error"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, message: any): void
 "error"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, message: StringJS): void
 "error"(marker: $Marker$$Type, message: StringJS, ...params: (any)[]): void
 "error"(marker: $Marker$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "error"(marker: $Marker$$Type, message: $Message$$Type): void
 "error"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "error"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, message: charseq): void
 "error"(messageSupplier: $MessageSupplier$$Type): void
 "error"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "error"(message: charseq): void
 "error"(message: charseq, throwable: $Throwable$$Type): void
 "error"(message: any): void
 "error"(message: any, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "error"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "error"(message: $Message$$Type): void
 "error"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "getLevel"(): $Level
 "throwing"<T extends $Throwable>(throwable: T): T
 "throwing"<T extends $Throwable>(level: $Level$$Type, throwable: T): T
 "getName"(): StringJS
/**
 * 
 * @deprecated
 */
 "exit"<R>(result: R): R
/**
 * 
 * @deprecated
 */
 "exit"(): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: charseq): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, ...params: (any)[]): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: $Message$$Type): void
 "log"(level: $Level$$Type, message: StringJS, p0: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "log"(level: $Level$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "log"(level: $Level$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "log"(level: $Level$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, messageSupplier: $MessageSupplier$$Type): void
 "log"(level: $Level$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, message: charseq): void
 "log"(level: $Level$$Type, message: $Message$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "log"(level: $Level$$Type, message: any, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, message: StringJS): void
 "log"(level: $Level$$Type, message: StringJS, ...params: (any)[]): void
 "log"(level: $Level$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "log"(level: $Level$$Type, message: charseq, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, message: any): void
 "isEnabled"(level: $Level$$Type): boolean
 "isEnabled"(level: $Level$$Type, marker: $Marker$$Type): boolean
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "info"(message: StringJS, ...params: (any)[]): void
 "info"(message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "info"(message: StringJS, throwable: $Throwable$$Type): void
 "info"(messageSupplier: $Supplier$$Type<(any)>): void
 "info"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any): void
 "info"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "info"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "info"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "info"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "info"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "info"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "info"(message: StringJS, p0: any): void
 "info"(message: StringJS, p0: any, p1: any): void
 "info"(message: StringJS, p0: any, p1: any, p2: any): void
 "info"(message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "info"(marker: $Marker$$Type, message: any): void
 "info"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, message: StringJS): void
 "info"(marker: $Marker$$Type, message: StringJS, ...params: (any)[]): void
 "info"(marker: $Marker$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "info"(marker: $Marker$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, message: $Message$$Type): void
 "info"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "info"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, message: charseq): void
 "info"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "info"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "info"(message: charseq): void
 "info"(message: charseq, throwable: $Throwable$$Type): void
 "info"(message: any): void
 "info"(message: any, throwable: $Throwable$$Type): void
 "info"(message: StringJS): void
 "info"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "info"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "info"(message: $Message$$Type): void
 "info"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "info"(messageSupplier: $MessageSupplier$$Type): void
 "printf"(level: $Level$$Type, marker: $Marker$$Type, format: StringJS, ...params: (any)[]): void
 "printf"(level: $Level$$Type, format: StringJS, ...params: (any)[]): void
/**
 * 
 * @deprecated
 */
 "entry"(...params: (any)[]): void
/**
 * 
 * @deprecated
 */
 "entry"(): void
 "trace"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, message: charseq): void
 "trace"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "trace"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "trace"(marker: $Marker$$Type, message: StringJS, ...params: (any)[]): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "trace"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, message: any): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "trace"(message: StringJS, p0: any): void
 "trace"(message: StringJS, p0: any, p1: any): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any): void
 "trace"(marker: $Marker$$Type, message: $Message$$Type): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "trace"(marker: $Marker$$Type, message: StringJS): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "trace"(messageSupplier: $Supplier$$Type<(any)>): void
 "trace"(message: StringJS, throwable: $Throwable$$Type): void
 "trace"(message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "trace"(message: StringJS, ...params: (any)[]): void
 "trace"(message: StringJS): void
 "trace"(message: any, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any): void
 "trace"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "trace"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "trace"(message: $Message$$Type): void
 "trace"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "trace"(marker: $Marker$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "trace"(message: any): void
 "trace"(message: charseq, throwable: $Throwable$$Type): void
 "trace"(message: charseq): void
 "trace"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "trace"(messageSupplier: $MessageSupplier$$Type): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "debug"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "debug"(messageSupplier: $MessageSupplier$$Type): void
 "debug"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "debug"(message: $Message$$Type): void
 "debug"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "debug"(message: StringJS, ...params: (any)[]): void
 "debug"(message: StringJS): void
 "debug"(message: any, throwable: $Throwable$$Type): void
 "debug"(message: any): void
 "debug"(message: charseq, throwable: $Throwable$$Type): void
 "debug"(message: charseq): void
 "debug"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, message: charseq): void
 "debug"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "debug"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, message: $Message$$Type): void
 "debug"(marker: $Marker$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "debug"(marker: $Marker$$Type, message: StringJS, ...params: (any)[]): void
 "debug"(marker: $Marker$$Type, message: StringJS): void
 "debug"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, message: any): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any): void
 "debug"(message: StringJS, p0: any, p1: any): void
 "debug"(message: StringJS, p0: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any): void
 "debug"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "debug"(messageSupplier: $Supplier$$Type<(any)>): void
 "debug"(message: StringJS, throwable: $Throwable$$Type): void
 "debug"(message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "fatal"(message: StringJS): void
 "fatal"(message: StringJS, ...params: (any)[]): void
 "fatal"(message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "fatal"(message: StringJS, throwable: $Throwable$$Type): void
 "fatal"(messageSupplier: $Supplier$$Type<(any)>): void
 "fatal"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "fatal"(message: StringJS, p0: any): void
 "fatal"(message: StringJS, p0: any, p1: any): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any): void
 "fatal"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: any): void
 "fatal"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: StringJS): void
 "fatal"(marker: $Marker$$Type, message: StringJS, ...params: (any)[]): void
 "fatal"(marker: $Marker$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "fatal"(marker: $Marker$$Type, message: $Message$$Type): void
 "fatal"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "fatal"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: charseq): void
 "fatal"(messageSupplier: $MessageSupplier$$Type): void
 "fatal"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "fatal"(message: charseq): void
 "fatal"(message: charseq, throwable: $Throwable$$Type): void
 "fatal"(message: any): void
 "fatal"(message: any, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "fatal"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "fatal"(message: $Message$$Type): void
 "fatal"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "atInfo"(): $LogBuilder
 "atWarn"(): $LogBuilder
 "always"(): $LogBuilder
 "catching"(level: $Level$$Type, throwable: $Throwable$$Type): void
 "catching"(throwable: $Throwable$$Type): void
 "isDebugEnabled"(marker: $Marker$$Type): boolean
 "isDebugEnabled"(): boolean
 "isErrorEnabled"(marker: $Marker$$Type): boolean
 "isErrorEnabled"(): boolean
 "isFatalEnabled"(marker: $Marker$$Type): boolean
 "isFatalEnabled"(): boolean
 "isInfoEnabled"(marker: $Marker$$Type): boolean
 "isInfoEnabled"(): boolean
 "isTraceEnabled"(marker: $Marker$$Type): boolean
 "isTraceEnabled"(): boolean
 "isWarnEnabled"(marker: $Marker$$Type): boolean
 "isWarnEnabled"(): boolean
 "traceEntry"(format: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): $EntryMessage
 "traceEntry"(message: $Message$$Type): $EntryMessage
 "traceEntry"(format: StringJS, ...params: (any)[]): $EntryMessage
 "traceEntry"(...paramSuppliers: ($Supplier$$Type<(any)>)[]): $EntryMessage
 "traceEntry"(): $EntryMessage
 "traceExit"<R>(message: $EntryMessage$$Type, result: R): R
 "traceExit"(message: $EntryMessage$$Type): void
 "traceExit"<R>(format: StringJS, result: R): R
 "traceExit"<R>(message: $Message$$Type, result: R): R
 "traceExit"(): void
 "traceExit"<R>(result: R): R
 "logMessage"(level: $Level$$Type, marker: $Marker$$Type, fqcn: StringJS, location: $StackTraceElement$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "atTrace"(): $LogBuilder
 "atDebug"(): $LogBuilder
 "atError"(): $LogBuilder
 "atFatal"(): $LogBuilder
 "atLevel"(level: $Level$$Type): $LogBuilder
 "getMessageFactory"<MF extends $MessageFactory>(): MF
 "getFlowMessageFactory"(): $FlowMessageFactory
get "level"(): $Level
get "name"(): StringJS
get "debugEnabled"(): boolean
get "errorEnabled"(): boolean
get "fatalEnabled"(): boolean
get "infoEnabled"(): boolean
get "traceEnabled"(): boolean
get "warnEnabled"(): boolean
get "messageFactory"(): MF
get "flowMessageFactory"(): $FlowMessageFactory
}

export namespace $Logger {
const probejs$$marker: never
}
export class $Logger$$Static implements $Logger {


 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "warn"(marker: $Marker$$Type, message: $Message$$Type): void
 "warn"(message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "warn"(message: StringJS, throwable: $Throwable$$Type): void
 "warn"(messageSupplier: $Supplier$$Type<(any)>): void
 "warn"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any): void
 "warn"(message: StringJS, p0: any, p1: any): void
 "warn"(message: StringJS, p0: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "warn"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "warn"(message: charseq): void
 "warn"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "warn"(messageSupplier: $MessageSupplier$$Type): void
 "warn"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "warn"(message: $Message$$Type): void
 "warn"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "warn"(message: StringJS, ...params: (any)[]): void
 "warn"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "warn"(message: StringJS): void
 "warn"(message: any, throwable: $Throwable$$Type): void
 "warn"(message: any): void
 "warn"(message: charseq, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, message: any): void
 "warn"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, message: charseq): void
 "warn"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "warn"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "warn"(marker: $Marker$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "warn"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, message: StringJS): void
 "warn"(marker: $Marker$$Type, message: StringJS, ...params: (any)[]): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "error"(message: StringJS): void
 "error"(message: StringJS, ...params: (any)[]): void
 "error"(message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "error"(message: StringJS, throwable: $Throwable$$Type): void
 "error"(messageSupplier: $Supplier$$Type<(any)>): void
 "error"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "error"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "error"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "error"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "error"(message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "error"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "error"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "error"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "error"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "error"(message: StringJS, p0: any): void
 "error"(message: StringJS, p0: any, p1: any): void
 "error"(message: StringJS, p0: any, p1: any, p2: any): void
 "error"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, message: any): void
 "error"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, message: StringJS): void
 "error"(marker: $Marker$$Type, message: StringJS, ...params: (any)[]): void
 "error"(marker: $Marker$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "error"(marker: $Marker$$Type, message: $Message$$Type): void
 "error"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "error"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, message: charseq): void
 "error"(messageSupplier: $MessageSupplier$$Type): void
 "error"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "error"(message: charseq): void
 "error"(message: charseq, throwable: $Throwable$$Type): void
 "error"(message: any): void
 "error"(message: any, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "error"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "error"(message: $Message$$Type): void
 "error"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "getLevel"(): $Level
 "throwing"<T extends $Throwable>(throwable: T): T
 "throwing"<T extends $Throwable>(level: $Level$$Type, throwable: T): T
 "getName"(): StringJS
/**
 * 
 * @deprecated
 */
 "exit"<R>(result: R): R
/**
 * 
 * @deprecated
 */
 "exit"(): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: charseq): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, ...params: (any)[]): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: $Message$$Type): void
 "log"(level: $Level$$Type, message: StringJS, p0: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "log"(level: $Level$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "log"(level: $Level$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "log"(level: $Level$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "log"(level: $Level$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, messageSupplier: $MessageSupplier$$Type): void
 "log"(level: $Level$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, message: charseq): void
 "log"(level: $Level$$Type, message: $Message$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "log"(level: $Level$$Type, message: any, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, message: StringJS): void
 "log"(level: $Level$$Type, message: StringJS, ...params: (any)[]): void
 "log"(level: $Level$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "log"(level: $Level$$Type, message: charseq, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, message: any): void
 "isEnabled"(level: $Level$$Type): boolean
 "isEnabled"(level: $Level$$Type, marker: $Marker$$Type): boolean
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "info"(message: StringJS, ...params: (any)[]): void
 "info"(message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "info"(message: StringJS, throwable: $Throwable$$Type): void
 "info"(messageSupplier: $Supplier$$Type<(any)>): void
 "info"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any): void
 "info"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "info"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "info"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "info"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "info"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "info"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "info"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "info"(message: StringJS, p0: any): void
 "info"(message: StringJS, p0: any, p1: any): void
 "info"(message: StringJS, p0: any, p1: any, p2: any): void
 "info"(message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "info"(marker: $Marker$$Type, message: any): void
 "info"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, message: StringJS): void
 "info"(marker: $Marker$$Type, message: StringJS, ...params: (any)[]): void
 "info"(marker: $Marker$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "info"(marker: $Marker$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, message: $Message$$Type): void
 "info"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "info"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, message: charseq): void
 "info"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "info"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "info"(message: charseq): void
 "info"(message: charseq, throwable: $Throwable$$Type): void
 "info"(message: any): void
 "info"(message: any, throwable: $Throwable$$Type): void
 "info"(message: StringJS): void
 "info"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "info"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "info"(message: $Message$$Type): void
 "info"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "info"(messageSupplier: $MessageSupplier$$Type): void
 "printf"(level: $Level$$Type, marker: $Marker$$Type, format: StringJS, ...params: (any)[]): void
 "printf"(level: $Level$$Type, format: StringJS, ...params: (any)[]): void
/**
 * 
 * @deprecated
 */
 "entry"(...params: (any)[]): void
/**
 * 
 * @deprecated
 */
 "entry"(): void
 "trace"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, message: charseq): void
 "trace"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "trace"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "trace"(marker: $Marker$$Type, message: StringJS, ...params: (any)[]): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "trace"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, message: any): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "trace"(message: StringJS, p0: any): void
 "trace"(message: StringJS, p0: any, p1: any): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any): void
 "trace"(marker: $Marker$$Type, message: $Message$$Type): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "trace"(marker: $Marker$$Type, message: StringJS): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "trace"(messageSupplier: $Supplier$$Type<(any)>): void
 "trace"(message: StringJS, throwable: $Throwable$$Type): void
 "trace"(message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "trace"(message: StringJS, ...params: (any)[]): void
 "trace"(message: StringJS): void
 "trace"(message: any, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any): void
 "trace"(marker: $Marker$$Type, message: StringJS, p0: any): void
 "trace"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "trace"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "trace"(message: $Message$$Type): void
 "trace"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "trace"(marker: $Marker$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "trace"(message: any): void
 "trace"(message: charseq, throwable: $Throwable$$Type): void
 "trace"(message: charseq): void
 "trace"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "trace"(messageSupplier: $MessageSupplier$$Type): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "trace"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "debug"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "debug"(messageSupplier: $MessageSupplier$$Type): void
 "debug"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "debug"(message: $Message$$Type): void
 "debug"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "debug"(message: StringJS, ...params: (any)[]): void
 "debug"(message: StringJS): void
 "debug"(message: any, throwable: $Throwable$$Type): void
 "debug"(message: any): void
 "debug"(message: charseq, throwable: $Throwable$$Type): void
 "debug"(message: charseq): void
 "debug"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, message: charseq): void
 "debug"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "debug"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, message: $Message$$Type): void
 "debug"(marker: $Marker$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "debug"(marker: $Marker$$Type, message: StringJS, ...params: (any)[]): void
 "debug"(marker: $Marker$$Type, message: StringJS): void
 "debug"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, message: any): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any): void
 "debug"(message: StringJS, p0: any, p1: any): void
 "debug"(message: StringJS, p0: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "debug"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any): void
 "debug"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "debug"(messageSupplier: $Supplier$$Type<(any)>): void
 "debug"(message: StringJS, throwable: $Throwable$$Type): void
 "debug"(message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "debug"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "fatal"(message: StringJS): void
 "fatal"(message: StringJS, ...params: (any)[]): void
 "fatal"(message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "fatal"(message: StringJS, throwable: $Throwable$$Type): void
 "fatal"(messageSupplier: $Supplier$$Type<(any)>): void
 "fatal"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "fatal"(marker: $Marker$$Type, message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "fatal"(message: StringJS, p0: any): void
 "fatal"(message: StringJS, p0: any, p1: any): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any): void
 "fatal"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: any): void
 "fatal"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: StringJS): void
 "fatal"(marker: $Marker$$Type, message: StringJS, ...params: (any)[]): void
 "fatal"(marker: $Marker$$Type, message: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "fatal"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "fatal"(marker: $Marker$$Type, message: $Message$$Type): void
 "fatal"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "fatal"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: charseq): void
 "fatal"(messageSupplier: $MessageSupplier$$Type): void
 "fatal"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "fatal"(message: charseq): void
 "fatal"(message: charseq, throwable: $Throwable$$Type): void
 "fatal"(message: any): void
 "fatal"(message: any, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: StringJS, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "fatal"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "fatal"(message: $Message$$Type): void
 "fatal"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "atInfo"(): $LogBuilder
 "atWarn"(): $LogBuilder
 "always"(): $LogBuilder
 "catching"(level: $Level$$Type, throwable: $Throwable$$Type): void
 "catching"(throwable: $Throwable$$Type): void
 "isDebugEnabled"(marker: $Marker$$Type): boolean
 "isDebugEnabled"(): boolean
 "isErrorEnabled"(marker: $Marker$$Type): boolean
 "isErrorEnabled"(): boolean
 "isFatalEnabled"(marker: $Marker$$Type): boolean
 "isFatalEnabled"(): boolean
 "isInfoEnabled"(marker: $Marker$$Type): boolean
 "isInfoEnabled"(): boolean
 "isTraceEnabled"(marker: $Marker$$Type): boolean
 "isTraceEnabled"(): boolean
 "isWarnEnabled"(marker: $Marker$$Type): boolean
 "isWarnEnabled"(): boolean
 "traceEntry"(format: StringJS, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): $EntryMessage
 "traceEntry"(message: $Message$$Type): $EntryMessage
 "traceEntry"(format: StringJS, ...params: (any)[]): $EntryMessage
 "traceEntry"(...paramSuppliers: ($Supplier$$Type<(any)>)[]): $EntryMessage
 "traceEntry"(): $EntryMessage
 "traceExit"<R>(message: $EntryMessage$$Type, result: R): R
 "traceExit"(message: $EntryMessage$$Type): void
 "traceExit"<R>(format: StringJS, result: R): R
 "traceExit"<R>(message: $Message$$Type, result: R): R
 "traceExit"(): void
 "traceExit"<R>(result: R): R
 "logMessage"(level: $Level$$Type, marker: $Marker$$Type, fqcn: StringJS, location: $StackTraceElement$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "atTrace"(): $LogBuilder
 "atDebug"(): $LogBuilder
 "atError"(): $LogBuilder
 "atFatal"(): $LogBuilder
 "atLevel"(level: $Level$$Type): $LogBuilder
 "getMessageFactory"<MF extends $MessageFactory>(): MF
 "getFlowMessageFactory"(): $FlowMessageFactory
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
declare module "org.apache.logging.log4j.LogBuilder" {
import {$Supplier, $Supplier$$Type} from "org.apache.logging.log4j.util.Supplier"
import {$StackTraceElement, $StackTraceElement$$Type} from "java.lang.StackTraceElement"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Message, $Message$$Type} from "org.apache.logging.log4j.message.Message"
import {$Marker, $Marker$$Type} from "org.apache.logging.log4j.Marker"

export interface $LogBuilder {

 "log"(message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "log"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "log"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "log"(message: StringJS, p0: any, p1: any, p2: any): void
 "log"(message: StringJS, p0: any, p1: any): void
 "log"(message: StringJS, p0: any): void
 "log"(): void
 "log"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "log"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "log"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "log"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "log"(message: StringJS, ...params: ($Supplier$$Type<(any)>)[]): void
 "log"(message: StringJS, ...params: (any)[]): void
 "log"(message: StringJS): void
 "log"(message: charseq): void
 "log"(message: any): void
 "log"(messageSupplier: $Supplier$$Type<($Message$$Type)>): void
 "log"(message: $Message$$Type): void
 "withMarker"(marker: $Marker$$Type): $LogBuilder
 "withThrowable"(throwable: $Throwable$$Type): $LogBuilder
 "withLocation"(location: $StackTraceElement$$Type): $LogBuilder
 "withLocation"(): $LogBuilder
 "logAndGet"(messageSupplier: $Supplier$$Type<($Message$$Type)>): $Message
}

export namespace $LogBuilder {
const NOOP: $LogBuilder
const probejs$$marker: never
}
export class $LogBuilder$$Static implements $LogBuilder {
static readonly "NOOP": $LogBuilder


 "log"(message: StringJS, p0: any, p1: any, p2: any, p3: any): void
 "log"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "log"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "log"(message: StringJS, p0: any, p1: any, p2: any): void
 "log"(message: StringJS, p0: any, p1: any): void
 "log"(message: StringJS, p0: any): void
 "log"(): void
 "log"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "log"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "log"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "log"(message: StringJS, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "log"(message: StringJS, ...params: ($Supplier$$Type<(any)>)[]): void
 "log"(message: StringJS, ...params: (any)[]): void
 "log"(message: StringJS): void
 "log"(message: charseq): void
 "log"(message: any): void
 "log"(messageSupplier: $Supplier$$Type<($Message$$Type)>): void
 "log"(message: $Message$$Type): void
 "withMarker"(marker: $Marker$$Type): $LogBuilder
 "withThrowable"(throwable: $Throwable$$Type): $LogBuilder
 "withLocation"(location: $StackTraceElement$$Type): $LogBuilder
 "withLocation"(): $LogBuilder
 "logAndGet"(messageSupplier: $Supplier$$Type<($Message$$Type)>): $Message
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogBuilder$$Type = ($LogBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogBuilder_ = $LogBuilder$$Type;
}}
declare module "org.apache.logging.log4j.spi.StandardLevel" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $StandardLevel extends $Enum<($StandardLevel)> {
static readonly "TRACE": $StandardLevel
static readonly "ALL": $StandardLevel
static readonly "ERROR": $StandardLevel
static readonly "INFO": $StandardLevel
static readonly "FATAL": $StandardLevel
static readonly "DEBUG": $StandardLevel
static readonly "OFF": $StandardLevel
static readonly "WARN": $StandardLevel


public static "values"(): ($StandardLevel)[]
public static "valueOf"(name: StringJS): $StandardLevel
public "intLevel"(): integer
public static "getStandardLevel"(intLevel: integer): $StandardLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StandardLevel$$Type = (("off") | ("fatal") | ("error") | ("warn") | ("info") | ("debug") | ("trace") | ("all"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StandardLevel_ = $StandardLevel$$Type;
}}
declare module "org.apache.commons.lang3.mutable.Mutable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Mutable<T> {

 "getValue"(): T
 "setValue"(arg0: T): void
get "value"(): T
set "value"(value: T)
}

export namespace $Mutable {
const probejs$$marker: never
}
export class $Mutable$$Static<T> implements $Mutable {


 "getValue"(): T
 "setValue"(arg0: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mutable$$Type<T> = ($Mutable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mutable_<T> = $Mutable$$Type<(T)>;
}}
declare module "org.apache.maven.artifact.versioning.Restriction" {
import {$ArtifactVersion, $ArtifactVersion$$Type} from "org.apache.maven.artifact.versioning.ArtifactVersion"

export class $Restriction {
static readonly "EVERYTHING": $Restriction

constructor(arg0: $ArtifactVersion$$Type, arg1: boolean, arg2: $ArtifactVersion$$Type, arg3: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getLowerBound"(): $ArtifactVersion
public "getUpperBound"(): $ArtifactVersion
public "containsVersion"(arg0: $ArtifactVersion$$Type): boolean
public "isLowerBoundInclusive"(): boolean
public "isUpperBoundInclusive"(): boolean
get "lowerBound"(): $ArtifactVersion
get "upperBound"(): $ArtifactVersion
get "lowerBoundInclusive"(): boolean
get "upperBoundInclusive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Restriction$$Type = ($Restriction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Restriction_ = $Restriction$$Type;
}}
declare module "org.apache.maven.artifact.Artifact" {
import {$ArtifactFilter, $ArtifactFilter$$Type} from "org.apache.maven.artifact.resolver.filter.ArtifactFilter"
import {$ArtifactRepository, $ArtifactRepository$$Type} from "org.apache.maven.artifact.repository.ArtifactRepository"
import {$Pattern, $Pattern$$Type} from "java.util.regex.Pattern"
import {$ArtifactVersion, $ArtifactVersion$$Type} from "org.apache.maven.artifact.versioning.ArtifactVersion"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$File, $File$$Type} from "java.io.File"
import {$ArtifactHandler, $ArtifactHandler$$Type} from "org.apache.maven.artifact.handler.ArtifactHandler"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$List, $List$$Type} from "java.util.List"
import {$VersionRange, $VersionRange$$Type} from "org.apache.maven.artifact.versioning.VersionRange"
import {$ArtifactMetadata, $ArtifactMetadata$$Type} from "org.apache.maven.artifact.metadata.ArtifactMetadata"

export interface $Artifact extends $Comparable<($Artifact)> {

 "setVersion"(arg0: StringJS): void
 "setRelease"(arg0: boolean): void
 "getFile"(): $File
 "getVersion"(): StringJS
 "isResolved"(): boolean
 "getScope"(): StringJS
 "getRepository"(): $ArtifactRepository
 "getId"(): StringJS
 "getType"(): StringJS
 "isOptional"(): boolean
 "setFile"(arg0: $File$$Type): void
 "getGroupId"(): StringJS
 "getArtifactId"(): StringJS
 "getClassifier"(): StringJS
 "setScope"(arg0: StringJS): void
 "setGroupId"(arg0: StringJS): void
 "isSnapshot"(): boolean
 "getSelectedVersion"(): $ArtifactVersion
 "isSelectedVersionKnown"(): boolean
 "getDependencyTrail"(): $List<(StringJS)>
 "getVersionRange"(): $VersionRange
 "updateVersion"(arg0: StringJS, arg1: $ArtifactRepository$$Type): void
 "setBaseVersion"(arg0: StringJS): void
 "addMetadata"(arg0: $ArtifactMetadata$$Type): void
 "setRepository"(arg0: $ArtifactRepository$$Type): void
 "getBaseVersion"(): StringJS
 "hasClassifier"(): boolean
 "setOptional"(arg0: boolean): void
 "setArtifactId"(arg0: StringJS): void
 "getDownloadUrl"(): StringJS
 "setResolved"(arg0: boolean): void
 "selectVersion"(arg0: StringJS): void
 "isRelease"(): boolean
 "setDownloadUrl"(arg0: StringJS): void
 "getMetadataList"(): $Collection<($ArtifactMetadata)>
 "getDependencyFilter"(): $ArtifactFilter
 "setDependencyFilter"(arg0: $ArtifactFilter$$Type): void
 "getArtifactHandler"(): $ArtifactHandler
 "setDependencyTrail"(arg0: $List$$Type<(StringJS)>): void
 "setVersionRange"(arg0: $VersionRange$$Type): void
 "setResolvedVersion"(arg0: StringJS): void
 "setArtifactHandler"(arg0: $ArtifactHandler$$Type): void
 "getAvailableVersions"(): $List<($ArtifactVersion)>
 "setAvailableVersions"(arg0: $List$$Type<($ArtifactVersion$$Type)>): void
 "getDependencyConflictId"(): StringJS
 "compareTo"(arg0: $Artifact$$Type): integer
set "version"(value: StringJS)
set "release"(value: boolean)
get "file"(): $File
get "version"(): StringJS
get "resolved"(): boolean
get "scope"(): StringJS
get "repository"(): $ArtifactRepository
get "id"(): StringJS
get "type"(): StringJS
get "optional"(): boolean
set "file"(value: $File$$Type)
get "groupId"(): StringJS
get "artifactId"(): StringJS
get "classifier"(): StringJS
set "scope"(value: StringJS)
set "groupId"(value: StringJS)
get "snapshot"(): boolean
get "selectedVersion"(): $ArtifactVersion
get "selectedVersionKnown"(): boolean
get "dependencyTrail"(): $List<(StringJS)>
get "versionRange"(): $VersionRange
set "baseVersion"(value: StringJS)
set "repository"(value: $ArtifactRepository$$Type)
get "baseVersion"(): StringJS
set "optional"(value: boolean)
set "artifactId"(value: StringJS)
get "downloadUrl"(): StringJS
set "resolved"(value: boolean)
get "release"(): boolean
set "downloadUrl"(value: StringJS)
get "metadataList"(): $Collection<($ArtifactMetadata)>
get "dependencyFilter"(): $ArtifactFilter
set "dependencyFilter"(value: $ArtifactFilter$$Type)
get "artifactHandler"(): $ArtifactHandler
set "dependencyTrail"(value: $List$$Type<(StringJS)>)
set "versionRange"(value: $VersionRange$$Type)
set "resolvedVersion"(value: StringJS)
set "artifactHandler"(value: $ArtifactHandler$$Type)
get "availableVersions"(): $List<($ArtifactVersion)>
set "availableVersions"(value: $List$$Type<($ArtifactVersion$$Type)>)
get "dependencyConflictId"(): StringJS
}

export namespace $Artifact {
const VERSION_FILE_PATTERN: $Pattern
const SCOPE_RUNTIME: StringJS
const SCOPE_TEST: StringJS
const SCOPE_RUNTIME_PLUS_SYSTEM: StringJS
const SCOPE_IMPORT: StringJS
const SCOPE_PROVIDED: StringJS
const RELEASE_VERSION: StringJS
const SCOPE_SYSTEM: StringJS
const SNAPSHOT_VERSION: StringJS
const SCOPE_COMPILE: StringJS
const SCOPE_COMPILE_PLUS_RUNTIME: StringJS
const LATEST_VERSION: StringJS
const probejs$$marker: never
}
export class $Artifact$$Static implements $Artifact {
static readonly "VERSION_FILE_PATTERN": $Pattern
static readonly "SCOPE_RUNTIME": StringJS
static readonly "SCOPE_TEST": StringJS
static readonly "SCOPE_RUNTIME_PLUS_SYSTEM": StringJS
static readonly "SCOPE_IMPORT": StringJS
static readonly "SCOPE_PROVIDED": StringJS
static readonly "RELEASE_VERSION": StringJS
static readonly "SCOPE_SYSTEM": StringJS
static readonly "SNAPSHOT_VERSION": StringJS
static readonly "SCOPE_COMPILE": StringJS
static readonly "SCOPE_COMPILE_PLUS_RUNTIME": StringJS
static readonly "LATEST_VERSION": StringJS


 "setVersion"(arg0: StringJS): void
 "setRelease"(arg0: boolean): void
 "getFile"(): $File
 "getVersion"(): StringJS
 "isResolved"(): boolean
 "getScope"(): StringJS
 "getRepository"(): $ArtifactRepository
 "getId"(): StringJS
 "getType"(): StringJS
 "isOptional"(): boolean
 "setFile"(arg0: $File$$Type): void
 "getGroupId"(): StringJS
 "getArtifactId"(): StringJS
 "getClassifier"(): StringJS
 "setScope"(arg0: StringJS): void
 "setGroupId"(arg0: StringJS): void
 "isSnapshot"(): boolean
 "getSelectedVersion"(): $ArtifactVersion
 "isSelectedVersionKnown"(): boolean
 "getDependencyTrail"(): $List<(StringJS)>
 "getVersionRange"(): $VersionRange
 "updateVersion"(arg0: StringJS, arg1: $ArtifactRepository$$Type): void
 "setBaseVersion"(arg0: StringJS): void
 "addMetadata"(arg0: $ArtifactMetadata$$Type): void
 "setRepository"(arg0: $ArtifactRepository$$Type): void
 "getBaseVersion"(): StringJS
 "hasClassifier"(): boolean
 "setOptional"(arg0: boolean): void
 "setArtifactId"(arg0: StringJS): void
 "getDownloadUrl"(): StringJS
 "setResolved"(arg0: boolean): void
 "selectVersion"(arg0: StringJS): void
 "isRelease"(): boolean
 "setDownloadUrl"(arg0: StringJS): void
 "getMetadataList"(): $Collection<($ArtifactMetadata)>
 "getDependencyFilter"(): $ArtifactFilter
 "setDependencyFilter"(arg0: $ArtifactFilter$$Type): void
 "getArtifactHandler"(): $ArtifactHandler
 "setDependencyTrail"(arg0: $List$$Type<(StringJS)>): void
 "setVersionRange"(arg0: $VersionRange$$Type): void
 "setResolvedVersion"(arg0: StringJS): void
 "setArtifactHandler"(arg0: $ArtifactHandler$$Type): void
 "getAvailableVersions"(): $List<($ArtifactVersion)>
 "setAvailableVersions"(arg0: $List$$Type<($ArtifactVersion$$Type)>): void
 "getDependencyConflictId"(): StringJS
 "compareTo"(arg0: $Artifact$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Artifact$$Type = ($Artifact);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Artifact_ = $Artifact$$Type;
}}
declare module "org.apache.maven.artifact.versioning.VersionRange" {
import {$Restriction, $Restriction$$Type} from "org.apache.maven.artifact.versioning.Restriction"
import {$ArtifactVersion, $ArtifactVersion$$Type} from "org.apache.maven.artifact.versioning.ArtifactVersion"
import {$List, $List$$Type} from "java.util.List"
import {$Artifact, $Artifact$$Type} from "org.apache.maven.artifact.Artifact"

export class $VersionRange {


public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
/**
 * 
 * @deprecated
 */
public "cloneOf"(): $VersionRange
public "restrict"(arg0: $VersionRange$$Type): $VersionRange
public "matchVersion"(arg0: $List$$Type<($ArtifactVersion$$Type)>): $ArtifactVersion
public static "createFromVersionSpec"(arg0: StringJS): $VersionRange
public "getRecommendedVersion"(): $ArtifactVersion
public "getRestrictions"(): $List<($Restriction)>
public static "createFromVersion"(arg0: StringJS): $VersionRange
public "getSelectedVersion"(arg0: $Artifact$$Type): $ArtifactVersion
public "isSelectedVersionKnown"(arg0: $Artifact$$Type): boolean
public "containsVersion"(arg0: $ArtifactVersion$$Type): boolean
public "hasRestrictions"(): boolean
get "recommendedVersion"(): $ArtifactVersion
get "restrictions"(): $List<($Restriction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VersionRange$$Type = ($VersionRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VersionRange_ = $VersionRange$$Type;
}}
declare module "org.apache.commons.lang3.math.Fraction" {
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"

export class $Fraction extends number implements $Comparable<($Fraction)> {
static readonly "FOUR_FIFTHS": $Fraction
static readonly "ZERO": $Fraction
static readonly "ONE_HALF": $Fraction
static readonly "TWO_QUARTERS": $Fraction
static readonly "THREE_FIFTHS": $Fraction
static readonly "ONE": $Fraction
static readonly "ONE_QUARTER": $Fraction
static readonly "TWO_THIRDS": $Fraction
static readonly "THREE_QUARTERS": $Fraction
static readonly "ONE_THIRD": $Fraction
static readonly "ONE_FIFTH": $Fraction
static readonly "TWO_FIFTHS": $Fraction


public "reduce"(): $Fraction
public "negate"(): $Fraction
public "subtract"(arg0: $Fraction$$Type): $Fraction
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "abs"(): $Fraction
public "pow"(arg0: integer): $Fraction
public "compareTo"(arg0: $Fraction$$Type): integer
public "compareTo"(arg0: any): integer
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public "add"(arg0: $Fraction$$Type): $Fraction
public "invert"(): $Fraction
public "getDenominator"(): integer
public "getNumerator"(): integer
public static "getFraction"(arg0: StringJS): $Fraction
public static "getFraction"(arg0: integer, arg1: integer, arg2: integer): $Fraction
public static "getFraction"(arg0: integer, arg1: integer): $Fraction
public static "getFraction"(arg0: double): $Fraction
public "multiplyBy"(arg0: $Fraction$$Type): $Fraction
public "toProperString"(): StringJS
public "getProperWhole"(): integer
public "divideBy"(arg0: $Fraction$$Type): $Fraction
public static "getReducedFraction"(arg0: integer, arg1: integer): $Fraction
public "getProperNumerator"(): integer
get "denominator"(): integer
get "numerator"(): integer
get "properWhole"(): integer
get "properNumerator"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Fraction$$Type = ($Fraction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Fraction_ = $Fraction$$Type;
}}
declare module "org.apache.logging.log4j.Level" {
import {$StandardLevel, $StandardLevel$$Type} from "org.apache.logging.log4j.spi.StandardLevel"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $Level implements $Comparable<($Level)>, $Serializable {
static readonly "TRACE": $Level
static readonly "ALL": $Level
static readonly "CATEGORY": StringJS
static readonly "ERROR": $Level
static readonly "INFO": $Level
static readonly "FATAL": $Level
static readonly "DEBUG": $Level
static readonly "OFF": $Level
static readonly "WARN": $Level


public static "getLevel"(name: StringJS): $Level
public "name"(): StringJS
public static "forName"(name: StringJS, intValue: integer): $Level
public "equals"(other: any): boolean
public "toString"(): StringJS
public static "values"(): ($Level)[]
public "hashCode"(): integer
public "clone"(): $Level
public "compareTo"(other: $Level$$Type): integer
public "compareTo"(other: any): integer
public static "valueOf"<T extends $Enum<(T)>>(enumType: $Class$$Type<(T)>, name: StringJS): T
public static "valueOf"(name: StringJS): $Level
public "getDeclaringClass"(): $Class<($Level)>
public "isInRange"(minLevel: $Level$$Type, maxLevel: $Level$$Type): boolean
public static "toLevel"(level: StringJS): $Level
public static "toLevel"(name: StringJS, defaultLevel: $Level$$Type): $Level
public "intLevel"(): integer
public "isMoreSpecificThan"(level: $Level$$Type): boolean
public "getStandardLevel"(): $StandardLevel
public "isLessSpecificThan"(level: $Level$$Type): boolean
get "declaringClass"(): $Class<($Level)>
get "standardLevel"(): $StandardLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Level$$Type = ($Level);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Level_ = $Level$$Type;
}}
declare module "org.apache.maven.artifact.handler.ArtifactHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ArtifactHandler {

 "getLanguage"(): StringJS
 "getExtension"(): StringJS
 "getClassifier"(): StringJS
 "getDirectory"(): StringJS
 "getPackaging"(): StringJS
 "isIncludesDependencies"(): boolean
 "isAddedToClasspath"(): boolean
get "language"(): StringJS
get "extension"(): StringJS
get "classifier"(): StringJS
get "directory"(): StringJS
get "packaging"(): StringJS
get "includesDependencies"(): boolean
get "addedToClasspath"(): boolean
}

export namespace $ArtifactHandler {
const ROLE: StringJS
const probejs$$marker: never
}
export class $ArtifactHandler$$Static implements $ArtifactHandler {
static readonly "ROLE": StringJS


 "getLanguage"(): StringJS
 "getExtension"(): StringJS
 "getClassifier"(): StringJS
 "getDirectory"(): StringJS
 "getPackaging"(): StringJS
 "isIncludesDependencies"(): boolean
 "isAddedToClasspath"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactHandler$$Type = ($ArtifactHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactHandler_ = $ArtifactHandler$$Type;
}}
declare module "org.apache.logging.log4j.util.MessageSupplier" {
import {$Message, $Message$$Type} from "org.apache.logging.log4j.message.Message"

export interface $MessageSupplier {

 "get"(): $Message

(): $Message$$Type
}

export namespace $MessageSupplier {
const probejs$$marker: never
}
export class $MessageSupplier$$Static implements $MessageSupplier {


 "get"(): $Message
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageSupplier$$Type = (() => $Message$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageSupplier_ = $MessageSupplier$$Type;
}}
declare module "org.apache.maven.artifact.metadata.ArtifactMetadata" {
import {$ArtifactRepository, $ArtifactRepository$$Type} from "org.apache.maven.artifact.repository.ArtifactRepository"
import {$ArtifactMetadata as $ArtifactMetadata$0, $ArtifactMetadata$$Type as $ArtifactMetadata$0$$Type} from "org.apache.maven.repository.legacy.metadata.ArtifactMetadata"

/**
 * 
 * @deprecated
 */
export interface $ArtifactMetadata extends $ArtifactMetadata$0 {

 "merge"(arg0: $ArtifactMetadata$$Type): void
 "merge"(arg0: $ArtifactMetadata$0$$Type): void
 "getKey"(): any
 "getGroupId"(): StringJS
 "getArtifactId"(): StringJS
 "getBaseVersion"(): StringJS
 "storedInGroupDirectory"(): boolean
 "getLocalFilename"(arg0: $ArtifactRepository$$Type): StringJS
 "getRemoteFilename"(): StringJS
 "storeInLocalRepository"(arg0: $ArtifactRepository$$Type, arg1: $ArtifactRepository$$Type): void
 "extendedToString"(): StringJS
 "storedInArtifactVersionDirectory"(): boolean
get "key"(): any
get "groupId"(): StringJS
get "artifactId"(): StringJS
get "baseVersion"(): StringJS
get "remoteFilename"(): StringJS
}

export namespace $ArtifactMetadata {
const probejs$$marker: never
}
export class $ArtifactMetadata$$Static implements $ArtifactMetadata {


 "merge"(arg0: $ArtifactMetadata$$Type): void
 "merge"(arg0: $ArtifactMetadata$0$$Type): void
 "getKey"(): any
 "getGroupId"(): StringJS
 "getArtifactId"(): StringJS
 "getBaseVersion"(): StringJS
 "storedInGroupDirectory"(): boolean
 "getLocalFilename"(arg0: $ArtifactRepository$$Type): StringJS
 "getRemoteFilename"(): StringJS
 "storeInLocalRepository"(arg0: $ArtifactRepository$$Type, arg1: $ArtifactRepository$$Type): void
 "extendedToString"(): StringJS
 "storedInArtifactVersionDirectory"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactMetadata$$Type = ($ArtifactMetadata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactMetadata_ = $ArtifactMetadata$$Type;
}}
declare module "org.apache.logging.log4j.message.EntryMessage" {
import {$FlowMessage, $FlowMessage$$Type} from "org.apache.logging.log4j.message.FlowMessage"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Message, $Message$$Type} from "org.apache.logging.log4j.message.Message"

export interface $EntryMessage extends $FlowMessage {

 "getMessage"(): $Message
 "getText"(): StringJS
 "getParameters"(): (any)[]
 "getFormat"(): StringJS
 "getThrowable"(): $Throwable
 "getFormattedMessage"(): StringJS
get "message"(): $Message
get "text"(): StringJS
get "parameters"(): (any)[]
get "format"(): StringJS
get "throwable"(): $Throwable
get "formattedMessage"(): StringJS
}

export namespace $EntryMessage {
const probejs$$marker: never
}
export class $EntryMessage$$Static implements $EntryMessage {


 "getMessage"(): $Message
 "getText"(): StringJS
 "getParameters"(): (any)[]
 "getFormat"(): StringJS
 "getThrowable"(): $Throwable
 "getFormattedMessage"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntryMessage$$Type = ($EntryMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntryMessage_ = $EntryMessage$$Type;
}}
declare module "org.apache.commons.lang3.tuple.ImmutableTriple" {
import {$Triple, $Triple$$Type} from "org.apache.commons.lang3.tuple.Triple"

export class $ImmutableTriple<L, M, R> extends $Triple<(L), (M), (R)> {
readonly "middle": M
static readonly "EMPTY_ARRAY": ($ImmutableTriple<(any), (any), (any)>)[]
readonly "left": L
readonly "right": R

constructor(arg0: L, arg1: M, arg2: R)

public static "emptyArray"<L, M, R>(): ($ImmutableTriple<(L), (M), (R)>)[]
public static "of"<L, M, R>(arg0: L, arg1: M, arg2: R): $ImmutableTriple<(L), (M), (R)>
public "getLeft"(): L
public "getRight"(): R
public static "ofNonNull"<L, M, R>(arg0: L, arg1: M, arg2: R): $ImmutableTriple<(L), (M), (R)>
public static "nullTriple"<L, M, R>(): $ImmutableTriple<(L), (M), (R)>
public "getMiddle"(): M
get "left"(): L
get "right"(): R
get "middle"(): M
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableTriple$$Type<L, M, R> = ($ImmutableTriple<(L), (M), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableTriple_<L, M, R> = $ImmutableTriple$$Type<(L), (M), (R)>;
}}
declare module "org.apache.maven.artifact.versioning.ArtifactVersion" {
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"

export interface $ArtifactVersion extends $Comparable<($ArtifactVersion)> {

 "getMinorVersion"(): integer
 "getMajorVersion"(): integer
 "getBuildNumber"(): integer
 "getQualifier"(): StringJS
 "parseVersion"(arg0: StringJS): void
 "getIncrementalVersion"(): integer
 "compareTo"(arg0: $ArtifactVersion$$Type): integer
get "minorVersion"(): integer
get "majorVersion"(): integer
get "buildNumber"(): integer
get "qualifier"(): StringJS
get "incrementalVersion"(): integer
}

export namespace $ArtifactVersion {
const probejs$$marker: never
}
export class $ArtifactVersion$$Static implements $ArtifactVersion {


 "getMinorVersion"(): integer
 "getMajorVersion"(): integer
 "getBuildNumber"(): integer
 "getQualifier"(): StringJS
 "parseVersion"(arg0: StringJS): void
 "getIncrementalVersion"(): integer
 "compareTo"(arg0: $ArtifactVersion$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArtifactVersion$$Type = ($ArtifactVersion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArtifactVersion_ = $ArtifactVersion$$Type;
}}
declare module "org.apache.logging.log4j.message.FlowMessageFactory" {
import {$ExitMessage, $ExitMessage$$Type} from "org.apache.logging.log4j.message.ExitMessage"
import {$EntryMessage, $EntryMessage$$Type} from "org.apache.logging.log4j.message.EntryMessage"
import {$Message, $Message$$Type} from "org.apache.logging.log4j.message.Message"

export interface $FlowMessageFactory {

 "newExitMessage"(message: $EntryMessage$$Type): $ExitMessage
 "newExitMessage"(result: any, message: $Message$$Type): $ExitMessage
 "newExitMessage"(result: any, message: $EntryMessage$$Type): $ExitMessage
 "newExitMessage"(message: $Message$$Type): $ExitMessage
 "newExitMessage"(format: StringJS, result: any): $ExitMessage
 "newEntryMessage"(message: $Message$$Type): $EntryMessage
 "newEntryMessage"(message: StringJS, ...params: (any)[]): $EntryMessage
}

export namespace $FlowMessageFactory {
const probejs$$marker: never
}
export class $FlowMessageFactory$$Static implements $FlowMessageFactory {


 "newExitMessage"(message: $EntryMessage$$Type): $ExitMessage
 "newExitMessage"(result: any, message: $Message$$Type): $ExitMessage
 "newExitMessage"(result: any, message: $EntryMessage$$Type): $ExitMessage
 "newExitMessage"(message: $Message$$Type): $ExitMessage
 "newExitMessage"(format: StringJS, result: any): $ExitMessage
 "newEntryMessage"(message: $Message$$Type): $EntryMessage
 "newEntryMessage"(message: StringJS, ...params: (any)[]): $EntryMessage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlowMessageFactory$$Type = ($FlowMessageFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlowMessageFactory_ = $FlowMessageFactory$$Type;
}}
declare module "org.apache.commons.lang3.function.TriFunction" {
import {$Function, $Function$$Type} from "java.util.function.Function"

export interface $TriFunction<T, U, V, R> {

 "andThen"<W>(arg0: $Function$$Type<(R), (W)>): $TriFunction<(T), (U), (V), (W)>
 "apply"(arg0: T, arg1: U, arg2: V): R

(arg0: T, arg1: U, arg2: V): R
}

export namespace $TriFunction {
const probejs$$marker: never
}
export class $TriFunction$$Static<T, U, V, R> implements $TriFunction {


 "andThen"<W>(arg0: $Function$$Type<(R), (W)>): $TriFunction<(T), (U), (V), (W)>
 "apply"(arg0: T, arg1: U, arg2: V): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriFunction$$Type<T, U, V, R> = ((arg0: T, arg1: U, arg2: V) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriFunction_<T, U, V, R> = $TriFunction$$Type<(T), (U), (V), (R)>;
}}
declare module "org.apache.commons.lang3.mutable.MutableFloat" {
import {$Mutable, $Mutable$$Type} from "org.apache.commons.lang3.mutable.Mutable"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"

export class $MutableFloat extends number implements $Comparable<($MutableFloat)>, $Mutable<(number)> {

constructor()
constructor(arg0: float)
constructor(arg0: StringJS)
constructor(arg0: number)

public "incrementAndGet"(): float
public "getAndIncrement"(): float
public "getAndDecrement"(): float
public "decrementAndGet"(): float
public "addAndGet"(arg0: number): float
public "addAndGet"(arg0: float): float
public "getAndAdd"(arg0: float): float
public "getAndAdd"(arg0: number): float
public "decrement"(): void
public "subtract"(arg0: float): void
public "subtract"(arg0: number): void
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isInfinite"(): boolean
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $MutableFloat$$Type): integer
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public "getValue"(): any
public "add"(arg0: number): void
public "add"(arg0: float): void
public "increment"(): void
public "isNaN"(): boolean
public "setValue"(arg0: any): void
public "setValue"(arg0: number): void
public "setValue"(arg0: float): void
public "toFloat"(): float
get "andIncrement"(): float
get "andDecrement"(): float
get "infinite"(): boolean
get "value"(): any
get "naN"(): boolean
set "value"(value: any)
set "value"(value: number)
set "value"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableFloat$$Type = ($MutableFloat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableFloat_ = $MutableFloat$$Type;
}}
declare module "org.apache.logging.log4j.message.MessageFactory" {
import {$Message, $Message$$Type} from "org.apache.logging.log4j.message.Message"

export interface $MessageFactory {

 "newMessage"(message: any): $Message
 "newMessage"(message: StringJS): $Message
 "newMessage"(message: StringJS, ...params: (any)[]): $Message
}

export namespace $MessageFactory {
const probejs$$marker: never
}
export class $MessageFactory$$Static implements $MessageFactory {


 "newMessage"(message: any): $Message
 "newMessage"(message: StringJS): $Message
 "newMessage"(message: StringJS, ...params: (any)[]): $Message
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MessageFactory$$Type = ($MessageFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MessageFactory_ = $MessageFactory$$Type;
}}
declare module "org.apache.logging.log4j.util.TriConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriConsumer<K, V, S> {

 "accept"(k: K, v: V, s: S): void

(k: K, v: V, s: S): void
}

export namespace $TriConsumer {
const probejs$$marker: never
}
export class $TriConsumer$$Static<K, V, S> implements $TriConsumer {


 "accept"(k: K, v: V, s: S): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriConsumer$$Type<K, V, S> = ((k: K, v: V, s: S) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriConsumer_<K, V, S> = $TriConsumer$$Type<(K), (V), (S)>;
}}
declare module "org.apache.commons.lang3.mutable.MutableObject" {
import {$Mutable, $Mutable$$Type} from "org.apache.commons.lang3.mutable.Mutable"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"

export class $MutableObject<T> implements $Mutable<(T)>, $Serializable {

constructor()
constructor(arg0: T)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getValue"(): T
public "setValue"(arg0: T): void
get "value"(): T
set "value"(value: T)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableObject$$Type<T> = ($MutableObject<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableObject_<T> = $MutableObject$$Type<(T)>;
}}
