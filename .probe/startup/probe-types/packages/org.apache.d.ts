declare module "org.apache.commons.lang3.mutable.MutableInt" {
import {$Mutable, $Mutable$$Type} from "org.apache.commons.lang3.mutable.Mutable"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"

export class $MutableInt extends number implements $Comparable<($MutableInt)>, $Mutable<(number)> {

constructor(arg0: string)
constructor(arg0: number)
constructor(arg0: integer)
constructor()

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $MutableInt$$Type): integer
public "compareTo"(arg0: any): integer
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public "getValue"(): integer
public "add"(arg0: integer): void
public "add"(arg0: number): void
public "increment"(): void
public "setValue"(arg0: number): void
public "setValue"(arg0: integer): void
public "setValue"(arg0: any): void
public "getAndAdd"(arg0: number): integer
public "getAndAdd"(arg0: integer): integer
public "incrementAndGet"(): integer
public "getAndIncrement"(): integer
public "getAndDecrement"(): integer
public "decrementAndGet"(): integer
public "addAndGet"(arg0: number): integer
public "addAndGet"(arg0: integer): integer
public "subtract"(arg0: integer): void
public "subtract"(arg0: number): void
public "decrement"(): void
public "toInteger"(): integer
get "value"(): integer
set "value"(value: number)
set "value"(value: integer)
set "value"(value: any)
get "andIncrement"(): integer
get "andDecrement"(): integer
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

 "getKey"(): string
 "find"(arg0: $Artifact$$Type): $Artifact
 "getId"(): string
 "getProtocol"(): string
 "getProxy"(): $Proxy
 "isBlocked"(): boolean
 "setBlocked"(arg0: boolean): void
 "getReleases"(): $ArtifactRepositoryPolicy
 "getSnapshots"(): $ArtifactRepositoryPolicy
 "getLayout"(): $ArtifactRepositoryLayout
 "setLayout"(arg0: $ArtifactRepositoryLayout$$Type): void
 "getUrl"(): string
 "setId"(arg0: string): void
 "setUrl"(arg0: string): void
 "pathOf"(arg0: $Artifact$$Type): string
/**
 * 
 * @deprecated
 */
 "isBlacklisted"(): boolean
 "setProxy"(arg0: $Proxy$$Type): void
 "findVersions"(arg0: $Artifact$$Type): $List<(string)>
 "getBasedir"(): string
 "isProjectAware"(): boolean
/**
 * 
 * @deprecated
 */
 "setBlacklisted"(arg0: boolean): void
 "setReleaseUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
 "getAuthentication"(): $Authentication
/**
 * 
 * @deprecated
 */
 "isUniqueVersion"(): boolean
 "setAuthentication"(arg0: $Authentication$$Type): void
 "pathOfRemoteRepositoryMetadata"(arg0: $ArtifactMetadata$$Type): string
 "pathOfLocalRepositoryMetadata"(arg0: $ArtifactMetadata$$Type, arg1: $ArtifactRepository$$Type): string
 "setSnapshotUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
 "getMirroredRepositories"(): $List<($ArtifactRepository)>
 "setMirroredRepositories"(arg0: $List$$Type<($ArtifactRepository$$Type)>): void
get "key"(): string
get "id"(): string
get "protocol"(): string
get "proxy"(): $Proxy
get "blocked"(): boolean
set "blocked"(value: boolean)
get "releases"(): $ArtifactRepositoryPolicy
get "snapshots"(): $ArtifactRepositoryPolicy
get "layout"(): $ArtifactRepositoryLayout
set "layout"(value: $ArtifactRepositoryLayout$$Type)
get "url"(): string
set "id"(value: string)
set "url"(value: string)
get "blacklisted"(): boolean
set "proxy"(value: $Proxy$$Type)
get "basedir"(): string
get "projectAware"(): boolean
set "blacklisted"(value: boolean)
set "releaseUpdatePolicy"(value: $ArtifactRepositoryPolicy$$Type)
get "authentication"(): $Authentication
get "uniqueVersion"(): boolean
set "authentication"(value: $Authentication$$Type)
set "snapshotUpdatePolicy"(value: $ArtifactRepositoryPolicy$$Type)
get "mirroredRepositories"(): $List<($ArtifactRepository)>
set "mirroredRepositories"(value: $List$$Type<($ArtifactRepository$$Type)>)
}

export namespace $ArtifactRepository {
const probejs$$marker: never
}
export class $ArtifactRepository$$Static implements $ArtifactRepository {


 "getKey"(): string
 "find"(arg0: $Artifact$$Type): $Artifact
 "getId"(): string
 "getProtocol"(): string
 "getProxy"(): $Proxy
 "isBlocked"(): boolean
 "setBlocked"(arg0: boolean): void
 "getReleases"(): $ArtifactRepositoryPolicy
 "getSnapshots"(): $ArtifactRepositoryPolicy
 "getLayout"(): $ArtifactRepositoryLayout
 "setLayout"(arg0: $ArtifactRepositoryLayout$$Type): void
 "getUrl"(): string
 "setId"(arg0: string): void
 "setUrl"(arg0: string): void
 "pathOf"(arg0: $Artifact$$Type): string
/**
 * 
 * @deprecated
 */
 "isBlacklisted"(): boolean
 "setProxy"(arg0: $Proxy$$Type): void
 "findVersions"(arg0: $Artifact$$Type): $List<(string)>
 "getBasedir"(): string
 "isProjectAware"(): boolean
/**
 * 
 * @deprecated
 */
 "setBlacklisted"(arg0: boolean): void
 "setReleaseUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
 "getAuthentication"(): $Authentication
/**
 * 
 * @deprecated
 */
 "isUniqueVersion"(): boolean
 "setAuthentication"(arg0: $Authentication$$Type): void
 "pathOfRemoteRepositoryMetadata"(arg0: $ArtifactMetadata$$Type): string
 "pathOfLocalRepositoryMetadata"(arg0: $ArtifactMetadata$$Type, arg1: $ArtifactRepository$$Type): string
 "setSnapshotUpdatePolicy"(arg0: $ArtifactRepositoryPolicy$$Type): void
 "getMirroredRepositories"(): $List<($ArtifactRepository)>
 "setMirroredRepositories"(arg0: $List$$Type<($ArtifactRepository$$Type)>): void
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

 "getName"(): string
 "remove"(marker: $Marker$$Type): boolean
 "equals"(obj: any): boolean
 "hashCode"(): integer
 "addParents"(...markers: ($Marker$$Type)[]): $Marker
 "isInstanceOf"(m: $Marker$$Type): boolean
 "isInstanceOf"(name: string): boolean
 "getParents"(): ($Marker)[]
 "hasParents"(): boolean
 "setParents"(...markers: ($Marker$$Type)[]): $Marker
get "name"(): string
get "parents"(): ($Marker)[]
set "parents"(value: ($Marker$$Type)[])
}

export namespace $Marker {
const probejs$$marker: never
}
export class $Marker$$Static implements $Marker {


 "getName"(): string
 "remove"(marker: $Marker$$Type): boolean
 "equals"(obj: any): boolean
 "hashCode"(): integer
 "addParents"(...markers: ($Marker$$Type)[]): $Marker
 "isInstanceOf"(m: $Marker$$Type): boolean
 "isInstanceOf"(name: string): boolean
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
declare module "org.apache.logging.log4j.message.FlowMessage" {
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Message, $Message$$Type} from "org.apache.logging.log4j.message.Message"

export interface $FlowMessage extends $Message {

 "getMessage"(): $Message
 "getText"(): string
 "getParameters"(): (any)[]
 "getFormat"(): string
 "getThrowable"(): $Throwable
 "getFormattedMessage"(): string
get "message"(): $Message
get "text"(): string
get "parameters"(): (any)[]
get "format"(): string
get "throwable"(): $Throwable
get "formattedMessage"(): string
}

export namespace $FlowMessage {
const probejs$$marker: never
}
export class $FlowMessage$$Static implements $FlowMessage {


 "getMessage"(): $Message
 "getText"(): string
 "getParameters"(): (any)[]
 "getFormat"(): string
 "getThrowable"(): $Throwable
 "getFormattedMessage"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlowMessage$$Type = ($FlowMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlowMessage_ = $FlowMessage$$Type;
}}
declare module "org.apache.commons.lang3.function.TriConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriConsumer<T, U, V> {

 "accept"(arg0: T, arg1: U, arg2: V): void
 "andThen"(arg0: $TriConsumer$$Type<(T), (U), (V)>): $TriConsumer<(T), (U), (V)>

(arg0: T, arg1: U, arg2: V): void
}

export namespace $TriConsumer {
const probejs$$marker: never
}
export class $TriConsumer$$Static<T, U, V> implements $TriConsumer {


 "accept"(arg0: T, arg1: U, arg2: V): void
 "andThen"(arg0: $TriConsumer$$Type<(T), (U), (V)>): $TriConsumer<(T), (U), (V)>
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

public "equals"(arg0: any): boolean
public "toString"(arg0: string): string
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $Triple$$Type<(L), (M), (R)>): integer
public "compareTo"(arg0: any): integer
public static "of"<L, M, R>(arg0: L, arg1: M, arg2: R): $Triple<(L), (M), (R)>
public static "emptyArray"<L, M, R>(): ($Triple<(L), (M), (R)>)[]
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

public "isFalse"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $MutableBoolean$$Type): integer
public "booleanValue"(): boolean
public "getValue"(): boolean
public "setValue"(arg0: boolean): void
public "setValue"(arg0: any): void
public "setValue"(arg0: boolean): void
public "toBoolean"(): boolean
public "setFalse"(): void
public "setTrue"(): void
public "isTrue"(): boolean
get "false"(): boolean
get "value"(): boolean
set "value"(value: boolean)
set "value"(value: any)
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
 "getFormat"(): string
 "getThrowable"(): $Throwable
 "getFormattedMessage"(): string
get "parameters"(): (any)[]
get "format"(): string
get "throwable"(): $Throwable
get "formattedMessage"(): string
}

export namespace $Message {
const probejs$$marker: never
}
export class $Message$$Static implements $Message {


 "getParameters"(): (any)[]
 "getFormat"(): string
 "getThrowable"(): $Throwable
 "getFormattedMessage"(): string
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
declare module "org.apache.logging.log4j.message.ExitMessage" {
import {$FlowMessage, $FlowMessage$$Type} from "org.apache.logging.log4j.message.FlowMessage"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Message, $Message$$Type} from "org.apache.logging.log4j.message.Message"

export interface $ExitMessage extends $FlowMessage {

 "getMessage"(): $Message
 "getText"(): string
 "getParameters"(): (any)[]
 "getFormat"(): string
 "getThrowable"(): $Throwable
 "getFormattedMessage"(): string
get "message"(): $Message
get "text"(): string
get "parameters"(): (any)[]
get "format"(): string
get "throwable"(): $Throwable
get "formattedMessage"(): string
}

export namespace $ExitMessage {
const probejs$$marker: never
}
export class $ExitMessage$$Static implements $ExitMessage {


 "getMessage"(): $Message
 "getText"(): string
 "getParameters"(): (any)[]
 "getFormat"(): string
 "getThrowable"(): $Throwable
 "getFormattedMessage"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExitMessage$$Type = ($ExitMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExitMessage_ = $ExitMessage$$Type;
}}
declare module "org.apache.logging.log4j.Logger" {
import {$Supplier, $Supplier$$Type} from "org.apache.logging.log4j.util.Supplier"
import {$MessageFactory, $MessageFactory$$Type} from "org.apache.logging.log4j.message.MessageFactory"
import {$StackTraceElement, $StackTraceElement$$Type} from "java.lang.StackTraceElement"
import {$EntryMessage, $EntryMessage$$Type} from "org.apache.logging.log4j.message.EntryMessage"
import {$Level, $Level$$Type} from "org.apache.logging.log4j.Level"
import {$MessageSupplier, $MessageSupplier$$Type} from "org.apache.logging.log4j.util.MessageSupplier"
import {$LogBuilder, $LogBuilder$$Type} from "org.apache.logging.log4j.LogBuilder"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Message, $Message$$Type} from "org.apache.logging.log4j.message.Message"
import {$FlowMessageFactory, $FlowMessageFactory$$Type} from "org.apache.logging.log4j.message.FlowMessageFactory"
import {$Marker, $Marker$$Type} from "org.apache.logging.log4j.Marker"

export interface $Logger {

 "getName"(): string
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
 "log"(level: $Level$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "log"(level: $Level$$Type, message: string, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any): void
 "log"(level: $Level$$Type, message: any): void
 "log"(level: $Level$$Type, message: any, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, message: string): void
 "log"(level: $Level$$Type, message: string, ...params: (any)[]): void
 "log"(level: $Level$$Type, message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "log"(level: $Level$$Type, message: string, p0: any): void
 "log"(level: $Level$$Type, message: string, p0: any, p1: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, ...params: (any)[]): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: $Message$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: charseq): void
 "log"(level: $Level$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, messageSupplier: $MessageSupplier$$Type): void
 "log"(level: $Level$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, message: charseq): void
 "log"(level: $Level$$Type, message: charseq, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, message: $Message$$Type): void
 "log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string): void
 "log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any): void
 "log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "isEnabled"(level: $Level$$Type): boolean
 "isEnabled"(level: $Level$$Type, marker: $Marker$$Type): boolean
 "info"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, message: charseq): void
 "info"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "info"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "info"(marker: $Marker$$Type, message: string, ...params: (any)[]): void
 "info"(marker: $Marker$$Type, message: string): void
 "info"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, message: any): void
 "info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "info"(marker: $Marker$$Type, message: $Message$$Type): void
 "info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "info"(message: string, p0: any, p1: any): void
 "info"(message: string, p0: any, p1: any, p2: any): void
 "info"(message: string, p0: any, p1: any, p2: any, p3: any): void
 "info"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "info"(messageSupplier: $Supplier$$Type<(any)>): void
 "info"(message: string, throwable: $Throwable$$Type): void
 "info"(message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "info"(message: string, ...params: (any)[]): void
 "info"(message: string): void
 "info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any): void
 "info"(marker: $Marker$$Type, message: string, p0: any, p1: any): void
 "info"(marker: $Marker$$Type, message: string, p0: any): void
 "info"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "info"(message: $Message$$Type): void
 "info"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "info"(marker: $Marker$$Type, message: string, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "info"(message: any, throwable: $Throwable$$Type): void
 "info"(message: any): void
 "info"(message: charseq, throwable: $Throwable$$Type): void
 "info"(message: charseq): void
 "info"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "info"(messageSupplier: $MessageSupplier$$Type): void
 "info"(message: string, p0: any): void
 "info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "printf"(level: $Level$$Type, format: string, ...params: (any)[]): void
 "printf"(level: $Level$$Type, marker: $Marker$$Type, format: string, ...params: (any)[]): void
/**
 * 
 * @deprecated
 */
 "entry"(): void
/**
 * 
 * @deprecated
 */
 "entry"(...params: (any)[]): void
 "trace"(marker: $Marker$$Type, message: string, throwable: $Throwable$$Type): void
 "trace"(message: charseq, throwable: $Throwable$$Type): void
 "trace"(message: charseq): void
 "trace"(marker: $Marker$$Type, message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "trace"(messageSupplier: $MessageSupplier$$Type): void
 "trace"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "trace"(message: $Message$$Type): void
 "trace"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "trace"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, message: string, p0: any): void
 "trace"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "trace"(messageSupplier: $Supplier$$Type<(any)>): void
 "trace"(message: string, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, message: string, p0: any, p1: any): void
 "trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any): void
 "trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "trace"(message: any): void
 "trace"(message: any, throwable: $Throwable$$Type): void
 "trace"(message: string): void
 "trace"(message: string, ...params: (any)[]): void
 "trace"(message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "trace"(message: string, p0: any, p1: any, p2: any, p3: any): void
 "trace"(message: string, p0: any, p1: any, p2: any): void
 "trace"(message: string, p0: any, p1: any): void
 "trace"(message: string, p0: any): void
 "trace"(marker: $Marker$$Type, message: charseq): void
 "trace"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, message: any): void
 "trace"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, message: string): void
 "trace"(marker: $Marker$$Type, message: string, ...params: (any)[]): void
 "trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "trace"(marker: $Marker$$Type, message: $Message$$Type): void
 "trace"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "trace"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any): void
 "debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "debug"(message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "debug"(message: string, throwable: $Throwable$$Type): void
 "debug"(messageSupplier: $Supplier$$Type<(any)>): void
 "debug"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, message: string, p0: any): void
 "debug"(marker: $Marker$$Type, message: string, p0: any, p1: any): void
 "debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "debug"(message: string, p0: any): void
 "debug"(message: string, p0: any, p1: any): void
 "debug"(message: string, p0: any, p1: any, p2: any): void
 "debug"(message: string, p0: any, p1: any, p2: any, p3: any): void
 "debug"(marker: $Marker$$Type, message: any): void
 "debug"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, message: string): void
 "debug"(marker: $Marker$$Type, message: string, ...params: (any)[]): void
 "debug"(marker: $Marker$$Type, message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "debug"(marker: $Marker$$Type, message: string, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, message: $Message$$Type): void
 "debug"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "debug"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, message: charseq): void
 "debug"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "debug"(message: charseq): void
 "debug"(message: charseq, throwable: $Throwable$$Type): void
 "debug"(message: any): void
 "debug"(message: any, throwable: $Throwable$$Type): void
 "debug"(message: string): void
 "debug"(message: string, ...params: (any)[]): void
 "debug"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "debug"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "debug"(message: $Message$$Type): void
 "debug"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "debug"(messageSupplier: $MessageSupplier$$Type): void
 "debug"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "error"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "error"(messageSupplier: $MessageSupplier$$Type): void
 "error"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "error"(message: $Message$$Type): void
 "error"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "error"(message: string, ...params: (any)[]): void
 "error"(message: string): void
 "error"(message: any, throwable: $Throwable$$Type): void
 "error"(message: any): void
 "error"(message: charseq, throwable: $Throwable$$Type): void
 "error"(message: charseq): void
 "error"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, message: charseq): void
 "error"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "error"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, message: $Message$$Type): void
 "error"(marker: $Marker$$Type, message: string, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "error"(marker: $Marker$$Type, message: string, ...params: (any)[]): void
 "error"(marker: $Marker$$Type, message: string): void
 "error"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, message: any): void
 "error"(message: string, p0: any, p1: any, p2: any, p3: any): void
 "error"(message: string, p0: any, p1: any, p2: any): void
 "error"(message: string, p0: any, p1: any): void
 "error"(message: string, p0: any): void
 "error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "error"(marker: $Marker$$Type, message: string, p0: any, p1: any): void
 "error"(marker: $Marker$$Type, message: string, p0: any): void
 "error"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "error"(messageSupplier: $Supplier$$Type<(any)>): void
 "error"(message: string, throwable: $Throwable$$Type): void
 "error"(message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any): void
 "error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "warn"(message: $Message$$Type): void
 "warn"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "warn"(messageSupplier: $MessageSupplier$$Type): void
 "warn"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "warn"(marker: $Marker$$Type, message: string, throwable: $Throwable$$Type): void
 "warn"(message: string, ...params: (any)[]): void
 "warn"(message: string): void
 "warn"(message: any, throwable: $Throwable$$Type): void
 "warn"(message: any): void
 "warn"(message: charseq, throwable: $Throwable$$Type): void
 "warn"(message: charseq): void
 "warn"(marker: $Marker$$Type, message: charseq): void
 "warn"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "warn"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, message: $Message$$Type): void
 "warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "warn"(marker: $Marker$$Type, message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "warn"(marker: $Marker$$Type, message: string, ...params: (any)[]): void
 "warn"(marker: $Marker$$Type, message: string): void
 "warn"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, message: any): void
 "warn"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "warn"(message: string, p0: any): void
 "warn"(message: string, p0: any, p1: any): void
 "warn"(message: string, p0: any, p1: any, p2: any): void
 "warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "warn"(message: string, p0: any, p1: any, p2: any, p3: any): void
 "warn"(marker: $Marker$$Type, message: string, p0: any, p1: any): void
 "warn"(marker: $Marker$$Type, message: string, p0: any): void
 "warn"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "warn"(messageSupplier: $Supplier$$Type<(any)>): void
 "warn"(message: string, throwable: $Throwable$$Type): void
 "warn"(message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any): void
 "warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "getLevel"(): $Level
 "throwing"<T extends $Throwable>(level: $Level$$Type, throwable: T): T
 "throwing"<T extends $Throwable>(throwable: T): T
 "catching"(level: $Level$$Type, throwable: $Throwable$$Type): void
 "catching"(throwable: $Throwable$$Type): void
 "isDebugEnabled"(): boolean
 "isDebugEnabled"(marker: $Marker$$Type): boolean
 "isErrorEnabled"(marker: $Marker$$Type): boolean
 "isErrorEnabled"(): boolean
 "isFatalEnabled"(marker: $Marker$$Type): boolean
 "isFatalEnabled"(): boolean
 "isInfoEnabled"(): boolean
 "isInfoEnabled"(marker: $Marker$$Type): boolean
 "isTraceEnabled"(marker: $Marker$$Type): boolean
 "isTraceEnabled"(): boolean
 "isWarnEnabled"(marker: $Marker$$Type): boolean
 "isWarnEnabled"(): boolean
 "traceEntry"(format: string, ...params: (any)[]): $EntryMessage
 "traceEntry"(...paramSuppliers: ($Supplier$$Type<(any)>)[]): $EntryMessage
 "traceEntry"(format: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): $EntryMessage
 "traceEntry"(message: $Message$$Type): $EntryMessage
 "traceEntry"(): $EntryMessage
 "traceExit"<R>(format: string, result: R): R
 "traceExit"(message: $EntryMessage$$Type): void
 "traceExit"<R>(message: $EntryMessage$$Type, result: R): R
 "traceExit"<R>(message: $Message$$Type, result: R): R
 "traceExit"<R>(result: R): R
 "traceExit"(): void
 "logMessage"(level: $Level$$Type, marker: $Marker$$Type, fqcn: string, location: $StackTraceElement$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "atTrace"(): $LogBuilder
 "atDebug"(): $LogBuilder
 "atError"(): $LogBuilder
 "atFatal"(): $LogBuilder
 "atLevel"(level: $Level$$Type): $LogBuilder
 "fatal"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "fatal"(marker: $Marker$$Type, message: string, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "fatal"(marker: $Marker$$Type, message: string, ...params: (any)[]): void
 "fatal"(marker: $Marker$$Type, message: string): void
 "fatal"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "fatal"(message: charseq): void
 "fatal"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "fatal"(messageSupplier: $MessageSupplier$$Type): void
 "fatal"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "fatal"(message: $Message$$Type): void
 "fatal"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: $Message$$Type): void
 "fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "fatal"(marker: $Marker$$Type, message: any): void
 "fatal"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: charseq): void
 "fatal"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "fatal"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "fatal"(message: string, p0: any, p1: any, p2: any, p3: any): void
 "fatal"(message: string, p0: any, p1: any, p2: any): void
 "fatal"(message: string, p0: any, p1: any): void
 "fatal"(message: string, p0: any): void
 "fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "fatal"(message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "fatal"(message: string, ...params: (any)[]): void
 "fatal"(message: string): void
 "fatal"(message: any, throwable: $Throwable$$Type): void
 "fatal"(message: any): void
 "fatal"(message: charseq, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any): void
 "fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any): void
 "fatal"(marker: $Marker$$Type, message: string, p0: any): void
 "fatal"(message: string, throwable: $Throwable$$Type): void
 "fatal"(messageSupplier: $Supplier$$Type<(any)>): void
 "fatal"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "atInfo"(): $LogBuilder
 "atWarn"(): $LogBuilder
 "always"(): $LogBuilder
 "getMessageFactory"<MF extends $MessageFactory>(): MF
 "getFlowMessageFactory"(): $FlowMessageFactory
get "name"(): string
get "level"(): $Level
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


 "getName"(): string
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
 "log"(level: $Level$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "log"(level: $Level$$Type, message: string, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any): void
 "log"(level: $Level$$Type, message: any): void
 "log"(level: $Level$$Type, message: any, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, message: string): void
 "log"(level: $Level$$Type, message: string, ...params: (any)[]): void
 "log"(level: $Level$$Type, message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "log"(level: $Level$$Type, message: string, p0: any): void
 "log"(level: $Level$$Type, message: string, p0: any, p1: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, ...params: (any)[]): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: $Message$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: charseq): void
 "log"(level: $Level$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, messageSupplier: $MessageSupplier$$Type): void
 "log"(level: $Level$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, message: charseq): void
 "log"(level: $Level$$Type, message: charseq, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "log"(level: $Level$$Type, message: $Message$$Type): void
 "log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "log"(level: $Level$$Type, marker: $Marker$$Type, message: string): void
 "log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any): void
 "log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "log"(level: $Level$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "isEnabled"(level: $Level$$Type): boolean
 "isEnabled"(level: $Level$$Type, marker: $Marker$$Type): boolean
 "info"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, message: charseq): void
 "info"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "info"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "info"(marker: $Marker$$Type, message: string, ...params: (any)[]): void
 "info"(marker: $Marker$$Type, message: string): void
 "info"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, message: any): void
 "info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "info"(marker: $Marker$$Type, message: $Message$$Type): void
 "info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "info"(message: string, p0: any, p1: any): void
 "info"(message: string, p0: any, p1: any, p2: any): void
 "info"(message: string, p0: any, p1: any, p2: any, p3: any): void
 "info"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "info"(messageSupplier: $Supplier$$Type<(any)>): void
 "info"(message: string, throwable: $Throwable$$Type): void
 "info"(message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "info"(message: string, ...params: (any)[]): void
 "info"(message: string): void
 "info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "info"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any): void
 "info"(marker: $Marker$$Type, message: string, p0: any, p1: any): void
 "info"(marker: $Marker$$Type, message: string, p0: any): void
 "info"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "info"(message: $Message$$Type): void
 "info"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "info"(marker: $Marker$$Type, message: string, throwable: $Throwable$$Type): void
 "info"(marker: $Marker$$Type, message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "info"(message: any, throwable: $Throwable$$Type): void
 "info"(message: any): void
 "info"(message: charseq, throwable: $Throwable$$Type): void
 "info"(message: charseq): void
 "info"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "info"(messageSupplier: $MessageSupplier$$Type): void
 "info"(message: string, p0: any): void
 "info"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "printf"(level: $Level$$Type, format: string, ...params: (any)[]): void
 "printf"(level: $Level$$Type, marker: $Marker$$Type, format: string, ...params: (any)[]): void
/**
 * 
 * @deprecated
 */
 "entry"(): void
/**
 * 
 * @deprecated
 */
 "entry"(...params: (any)[]): void
 "trace"(marker: $Marker$$Type, message: string, throwable: $Throwable$$Type): void
 "trace"(message: charseq, throwable: $Throwable$$Type): void
 "trace"(message: charseq): void
 "trace"(marker: $Marker$$Type, message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "trace"(messageSupplier: $MessageSupplier$$Type): void
 "trace"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "trace"(message: $Message$$Type): void
 "trace"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "trace"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, message: string, p0: any): void
 "trace"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "trace"(messageSupplier: $Supplier$$Type<(any)>): void
 "trace"(message: string, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, message: string, p0: any, p1: any): void
 "trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any): void
 "trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "trace"(message: any): void
 "trace"(message: any, throwable: $Throwable$$Type): void
 "trace"(message: string): void
 "trace"(message: string, ...params: (any)[]): void
 "trace"(message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "trace"(message: string, p0: any, p1: any, p2: any, p3: any): void
 "trace"(message: string, p0: any, p1: any, p2: any): void
 "trace"(message: string, p0: any, p1: any): void
 "trace"(message: string, p0: any): void
 "trace"(marker: $Marker$$Type, message: charseq): void
 "trace"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, message: any): void
 "trace"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, message: string): void
 "trace"(marker: $Marker$$Type, message: string, ...params: (any)[]): void
 "trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "trace"(marker: $Marker$$Type, message: $Message$$Type): void
 "trace"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "trace"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "trace"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "trace"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any): void
 "debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "debug"(message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "debug"(message: string, throwable: $Throwable$$Type): void
 "debug"(messageSupplier: $Supplier$$Type<(any)>): void
 "debug"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, message: string, p0: any): void
 "debug"(marker: $Marker$$Type, message: string, p0: any, p1: any): void
 "debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "debug"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "debug"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "debug"(message: string, p0: any): void
 "debug"(message: string, p0: any, p1: any): void
 "debug"(message: string, p0: any, p1: any, p2: any): void
 "debug"(message: string, p0: any, p1: any, p2: any, p3: any): void
 "debug"(marker: $Marker$$Type, message: any): void
 "debug"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, message: string): void
 "debug"(marker: $Marker$$Type, message: string, ...params: (any)[]): void
 "debug"(marker: $Marker$$Type, message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "debug"(marker: $Marker$$Type, message: string, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, message: $Message$$Type): void
 "debug"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "debug"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "debug"(marker: $Marker$$Type, message: charseq): void
 "debug"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "debug"(message: charseq): void
 "debug"(message: charseq, throwable: $Throwable$$Type): void
 "debug"(message: any): void
 "debug"(message: any, throwable: $Throwable$$Type): void
 "debug"(message: string): void
 "debug"(message: string, ...params: (any)[]): void
 "debug"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "debug"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "debug"(message: $Message$$Type): void
 "debug"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "debug"(messageSupplier: $MessageSupplier$$Type): void
 "debug"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "error"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "error"(messageSupplier: $MessageSupplier$$Type): void
 "error"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "error"(message: $Message$$Type): void
 "error"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "error"(message: string, ...params: (any)[]): void
 "error"(message: string): void
 "error"(message: any, throwable: $Throwable$$Type): void
 "error"(message: any): void
 "error"(message: charseq, throwable: $Throwable$$Type): void
 "error"(message: charseq): void
 "error"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, message: charseq): void
 "error"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "error"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, message: $Message$$Type): void
 "error"(marker: $Marker$$Type, message: string, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "error"(marker: $Marker$$Type, message: string, ...params: (any)[]): void
 "error"(marker: $Marker$$Type, message: string): void
 "error"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "error"(marker: $Marker$$Type, message: any): void
 "error"(message: string, p0: any, p1: any, p2: any, p3: any): void
 "error"(message: string, p0: any, p1: any, p2: any): void
 "error"(message: string, p0: any, p1: any): void
 "error"(message: string, p0: any): void
 "error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "error"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "error"(marker: $Marker$$Type, message: string, p0: any, p1: any): void
 "error"(marker: $Marker$$Type, message: string, p0: any): void
 "error"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "error"(messageSupplier: $Supplier$$Type<(any)>): void
 "error"(message: string, throwable: $Throwable$$Type): void
 "error"(message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any): void
 "error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "error"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "warn"(message: $Message$$Type): void
 "warn"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "warn"(messageSupplier: $MessageSupplier$$Type): void
 "warn"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "warn"(marker: $Marker$$Type, message: string, throwable: $Throwable$$Type): void
 "warn"(message: string, ...params: (any)[]): void
 "warn"(message: string): void
 "warn"(message: any, throwable: $Throwable$$Type): void
 "warn"(message: any): void
 "warn"(message: charseq, throwable: $Throwable$$Type): void
 "warn"(message: charseq): void
 "warn"(marker: $Marker$$Type, message: charseq): void
 "warn"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "warn"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, message: $Message$$Type): void
 "warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "warn"(marker: $Marker$$Type, message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "warn"(marker: $Marker$$Type, message: string, ...params: (any)[]): void
 "warn"(marker: $Marker$$Type, message: string): void
 "warn"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, message: any): void
 "warn"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "warn"(message: string, p0: any): void
 "warn"(message: string, p0: any, p1: any): void
 "warn"(message: string, p0: any, p1: any, p2: any): void
 "warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "warn"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "warn"(message: string, p0: any, p1: any, p2: any, p3: any): void
 "warn"(marker: $Marker$$Type, message: string, p0: any, p1: any): void
 "warn"(marker: $Marker$$Type, message: string, p0: any): void
 "warn"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "warn"(messageSupplier: $Supplier$$Type<(any)>): void
 "warn"(message: string, throwable: $Throwable$$Type): void
 "warn"(message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any): void
 "warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "warn"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "getLevel"(): $Level
 "throwing"<T extends $Throwable>(level: $Level$$Type, throwable: T): T
 "throwing"<T extends $Throwable>(throwable: T): T
 "catching"(level: $Level$$Type, throwable: $Throwable$$Type): void
 "catching"(throwable: $Throwable$$Type): void
 "isDebugEnabled"(): boolean
 "isDebugEnabled"(marker: $Marker$$Type): boolean
 "isErrorEnabled"(marker: $Marker$$Type): boolean
 "isErrorEnabled"(): boolean
 "isFatalEnabled"(marker: $Marker$$Type): boolean
 "isFatalEnabled"(): boolean
 "isInfoEnabled"(): boolean
 "isInfoEnabled"(marker: $Marker$$Type): boolean
 "isTraceEnabled"(marker: $Marker$$Type): boolean
 "isTraceEnabled"(): boolean
 "isWarnEnabled"(marker: $Marker$$Type): boolean
 "isWarnEnabled"(): boolean
 "traceEntry"(format: string, ...params: (any)[]): $EntryMessage
 "traceEntry"(...paramSuppliers: ($Supplier$$Type<(any)>)[]): $EntryMessage
 "traceEntry"(format: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): $EntryMessage
 "traceEntry"(message: $Message$$Type): $EntryMessage
 "traceEntry"(): $EntryMessage
 "traceExit"<R>(format: string, result: R): R
 "traceExit"(message: $EntryMessage$$Type): void
 "traceExit"<R>(message: $EntryMessage$$Type, result: R): R
 "traceExit"<R>(message: $Message$$Type, result: R): R
 "traceExit"<R>(result: R): R
 "traceExit"(): void
 "logMessage"(level: $Level$$Type, marker: $Marker$$Type, fqcn: string, location: $StackTraceElement$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "atTrace"(): $LogBuilder
 "atDebug"(): $LogBuilder
 "atError"(): $LogBuilder
 "atFatal"(): $LogBuilder
 "atLevel"(level: $Level$$Type): $LogBuilder
 "fatal"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>): void
 "fatal"(marker: $Marker$$Type, message: string, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "fatal"(marker: $Marker$$Type, message: string, ...params: (any)[]): void
 "fatal"(marker: $Marker$$Type, message: string): void
 "fatal"(marker: $Marker$$Type, message: any, throwable: $Throwable$$Type): void
 "fatal"(message: charseq): void
 "fatal"(messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "fatal"(messageSupplier: $MessageSupplier$$Type): void
 "fatal"(message: $Message$$Type, throwable: $Throwable$$Type): void
 "fatal"(message: $Message$$Type): void
 "fatal"(marker: $Marker$$Type, messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: $Message$$Type): void
 "fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any): void
 "fatal"(marker: $Marker$$Type, message: any): void
 "fatal"(marker: $Marker$$Type, message: charseq, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: charseq): void
 "fatal"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, messageSupplier: $MessageSupplier$$Type): void
 "fatal"(marker: $Marker$$Type, message: $Message$$Type, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "fatal"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "fatal"(message: string, p0: any, p1: any, p2: any, p3: any): void
 "fatal"(message: string, p0: any, p1: any, p2: any): void
 "fatal"(message: string, p0: any, p1: any): void
 "fatal"(message: string, p0: any): void
 "fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "fatal"(message: string, ...paramSuppliers: ($Supplier$$Type<(any)>)[]): void
 "fatal"(message: string, ...params: (any)[]): void
 "fatal"(message: string): void
 "fatal"(message: any, throwable: $Throwable$$Type): void
 "fatal"(message: any): void
 "fatal"(message: charseq, throwable: $Throwable$$Type): void
 "fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any, p2: any): void
 "fatal"(marker: $Marker$$Type, message: string, p0: any, p1: any): void
 "fatal"(marker: $Marker$$Type, message: string, p0: any): void
 "fatal"(message: string, throwable: $Throwable$$Type): void
 "fatal"(messageSupplier: $Supplier$$Type<(any)>): void
 "fatal"(messageSupplier: $Supplier$$Type<(any)>, throwable: $Throwable$$Type): void
 "atInfo"(): $LogBuilder
 "atWarn"(): $LogBuilder
 "always"(): $LogBuilder
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

 "log"(message: string, p0: any, p1: any, p2: any, p3: any): void
 "log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "log"(message: string, p0: any, p1: any, p2: any): void
 "log"(message: string, p0: any, p1: any): void
 "log"(message: string, p0: any): void
 "log"(): void
 "log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "log"(message: string, ...params: ($Supplier$$Type<(any)>)[]): void
 "log"(message: string, ...params: (any)[]): void
 "log"(message: string): void
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


 "log"(message: string, p0: any, p1: any, p2: any, p3: any): void
 "log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any): void
 "log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): void
 "log"(message: string, p0: any, p1: any, p2: any): void
 "log"(message: string, p0: any, p1: any): void
 "log"(message: string, p0: any): void
 "log"(): void
 "log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any): void
 "log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any): void
 "log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any): void
 "log"(message: string, p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any): void
 "log"(message: string, ...params: ($Supplier$$Type<(any)>)[]): void
 "log"(message: string, ...params: (any)[]): void
 "log"(message: string): void
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
public static "valueOf"(name: string): $StandardLevel
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
public "toString"(): string
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

 "setVersion"(arg0: string): void
 "getRepository"(): $ArtifactRepository
 "getId"(): string
 "getType"(): string
 "getScope"(): string
 "isResolved"(): boolean
 "setRelease"(arg0: boolean): void
 "getFile"(): $File
 "getVersion"(): string
 "isOptional"(): boolean
 "setFile"(arg0: $File$$Type): void
 "getGroupId"(): string
 "getArtifactId"(): string
 "getClassifier"(): string
 "getSelectedVersion"(): $ArtifactVersion
 "isSelectedVersionKnown"(): boolean
 "getDependencyTrail"(): $List<(string)>
 "getVersionRange"(): $VersionRange
 "isSnapshot"(): boolean
 "setGroupId"(arg0: string): void
 "setScope"(arg0: string): void
 "isRelease"(): boolean
 "setArtifactId"(arg0: string): void
 "selectVersion"(arg0: string): void
 "getDownloadUrl"(): string
 "setOptional"(arg0: boolean): void
 "setResolved"(arg0: boolean): void
 "updateVersion"(arg0: string, arg1: $ArtifactRepository$$Type): void
 "setDownloadUrl"(arg0: string): void
 "setRepository"(arg0: $ArtifactRepository$$Type): void
 "addMetadata"(arg0: $ArtifactMetadata$$Type): void
 "setBaseVersion"(arg0: string): void
 "getBaseVersion"(): string
 "hasClassifier"(): boolean
 "getArtifactHandler"(): $ArtifactHandler
 "setDependencyTrail"(arg0: $List$$Type<(string)>): void
 "getMetadataList"(): $Collection<($ArtifactMetadata)>
 "setVersionRange"(arg0: $VersionRange$$Type): void
 "setDependencyFilter"(arg0: $ArtifactFilter$$Type): void
 "getDependencyFilter"(): $ArtifactFilter
 "setResolvedVersion"(arg0: string): void
 "setArtifactHandler"(arg0: $ArtifactHandler$$Type): void
 "getAvailableVersions"(): $List<($ArtifactVersion)>
 "setAvailableVersions"(arg0: $List$$Type<($ArtifactVersion$$Type)>): void
 "getDependencyConflictId"(): string
 "compareTo"(arg0: $Artifact$$Type): integer
set "version"(value: string)
get "repository"(): $ArtifactRepository
get "id"(): string
get "type"(): string
get "scope"(): string
get "resolved"(): boolean
set "release"(value: boolean)
get "file"(): $File
get "version"(): string
get "optional"(): boolean
set "file"(value: $File$$Type)
get "groupId"(): string
get "artifactId"(): string
get "classifier"(): string
get "selectedVersion"(): $ArtifactVersion
get "selectedVersionKnown"(): boolean
get "dependencyTrail"(): $List<(string)>
get "versionRange"(): $VersionRange
get "snapshot"(): boolean
set "groupId"(value: string)
set "scope"(value: string)
get "release"(): boolean
set "artifactId"(value: string)
get "downloadUrl"(): string
set "optional"(value: boolean)
set "resolved"(value: boolean)
set "downloadUrl"(value: string)
set "repository"(value: $ArtifactRepository$$Type)
set "baseVersion"(value: string)
get "baseVersion"(): string
get "artifactHandler"(): $ArtifactHandler
set "dependencyTrail"(value: $List$$Type<(string)>)
get "metadataList"(): $Collection<($ArtifactMetadata)>
set "versionRange"(value: $VersionRange$$Type)
set "dependencyFilter"(value: $ArtifactFilter$$Type)
get "dependencyFilter"(): $ArtifactFilter
set "resolvedVersion"(value: string)
set "artifactHandler"(value: $ArtifactHandler$$Type)
get "availableVersions"(): $List<($ArtifactVersion)>
set "availableVersions"(value: $List$$Type<($ArtifactVersion$$Type)>)
get "dependencyConflictId"(): string
}

export namespace $Artifact {
const VERSION_FILE_PATTERN: $Pattern
const SCOPE_RUNTIME: string
const SCOPE_TEST: string
const SCOPE_RUNTIME_PLUS_SYSTEM: string
const SCOPE_IMPORT: string
const SCOPE_PROVIDED: string
const RELEASE_VERSION: string
const SCOPE_SYSTEM: string
const SNAPSHOT_VERSION: string
const SCOPE_COMPILE: string
const SCOPE_COMPILE_PLUS_RUNTIME: string
const LATEST_VERSION: string
const probejs$$marker: never
}
export class $Artifact$$Static implements $Artifact {
static readonly "VERSION_FILE_PATTERN": $Pattern
static readonly "SCOPE_RUNTIME": string
static readonly "SCOPE_TEST": string
static readonly "SCOPE_RUNTIME_PLUS_SYSTEM": string
static readonly "SCOPE_IMPORT": string
static readonly "SCOPE_PROVIDED": string
static readonly "RELEASE_VERSION": string
static readonly "SCOPE_SYSTEM": string
static readonly "SNAPSHOT_VERSION": string
static readonly "SCOPE_COMPILE": string
static readonly "SCOPE_COMPILE_PLUS_RUNTIME": string
static readonly "LATEST_VERSION": string


 "setVersion"(arg0: string): void
 "getRepository"(): $ArtifactRepository
 "getId"(): string
 "getType"(): string
 "getScope"(): string
 "isResolved"(): boolean
 "setRelease"(arg0: boolean): void
 "getFile"(): $File
 "getVersion"(): string
 "isOptional"(): boolean
 "setFile"(arg0: $File$$Type): void
 "getGroupId"(): string
 "getArtifactId"(): string
 "getClassifier"(): string
 "getSelectedVersion"(): $ArtifactVersion
 "isSelectedVersionKnown"(): boolean
 "getDependencyTrail"(): $List<(string)>
 "getVersionRange"(): $VersionRange
 "isSnapshot"(): boolean
 "setGroupId"(arg0: string): void
 "setScope"(arg0: string): void
 "isRelease"(): boolean
 "setArtifactId"(arg0: string): void
 "selectVersion"(arg0: string): void
 "getDownloadUrl"(): string
 "setOptional"(arg0: boolean): void
 "setResolved"(arg0: boolean): void
 "updateVersion"(arg0: string, arg1: $ArtifactRepository$$Type): void
 "setDownloadUrl"(arg0: string): void
 "setRepository"(arg0: $ArtifactRepository$$Type): void
 "addMetadata"(arg0: $ArtifactMetadata$$Type): void
 "setBaseVersion"(arg0: string): void
 "getBaseVersion"(): string
 "hasClassifier"(): boolean
 "getArtifactHandler"(): $ArtifactHandler
 "setDependencyTrail"(arg0: $List$$Type<(string)>): void
 "getMetadataList"(): $Collection<($ArtifactMetadata)>
 "setVersionRange"(arg0: $VersionRange$$Type): void
 "setDependencyFilter"(arg0: $ArtifactFilter$$Type): void
 "getDependencyFilter"(): $ArtifactFilter
 "setResolvedVersion"(arg0: string): void
 "setArtifactHandler"(arg0: $ArtifactHandler$$Type): void
 "getAvailableVersions"(): $List<($ArtifactVersion)>
 "setAvailableVersions"(arg0: $List$$Type<($ArtifactVersion$$Type)>): void
 "getDependencyConflictId"(): string
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
public "toString"(): string
public "hashCode"(): integer
/**
 * 
 * @deprecated
 */
public "cloneOf"(): $VersionRange
public "restrict"(arg0: $VersionRange$$Type): $VersionRange
public "matchVersion"(arg0: $List$$Type<($ArtifactVersion$$Type)>): $ArtifactVersion
public static "createFromVersionSpec"(arg0: string): $VersionRange
public "getRecommendedVersion"(): $ArtifactVersion
public "getRestrictions"(): $List<($Restriction)>
public static "createFromVersion"(arg0: string): $VersionRange
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


public "equals"(arg0: any): boolean
public "toString"(): string
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
public "reduce"(): $Fraction
public "subtract"(arg0: $Fraction$$Type): $Fraction
public "negate"(): $Fraction
public "getNumerator"(): integer
public "getDenominator"(): integer
public "multiplyBy"(arg0: $Fraction$$Type): $Fraction
public static "getFraction"(arg0: integer, arg1: integer, arg2: integer): $Fraction
public static "getFraction"(arg0: double): $Fraction
public static "getFraction"(arg0: integer, arg1: integer): $Fraction
public static "getFraction"(arg0: string): $Fraction
public "toProperString"(): string
public "getProperWhole"(): integer
public "divideBy"(arg0: $Fraction$$Type): $Fraction
public "invert"(): $Fraction
public static "getReducedFraction"(arg0: integer, arg1: integer): $Fraction
public "getProperNumerator"(): integer
get "numerator"(): integer
get "denominator"(): integer
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
static readonly "CATEGORY": string
static readonly "ERROR": $Level
static readonly "INFO": $Level
static readonly "FATAL": $Level
static readonly "DEBUG": $Level
static readonly "OFF": $Level
static readonly "WARN": $Level


public "name"(): string
public static "forName"(name: string, intValue: integer): $Level
public "equals"(other: any): boolean
public "toString"(): string
public static "values"(): ($Level)[]
public "hashCode"(): integer
public "clone"(): $Level
public "compareTo"(other: $Level$$Type): integer
public "compareTo"(other: any): integer
public static "valueOf"<T extends $Enum<(T)>>(enumType: $Class$$Type<(T)>, name: string): T
public static "valueOf"(name: string): $Level
public "getDeclaringClass"(): $Class<($Level)>
public static "getLevel"(name: string): $Level
public static "toLevel"(name: string, defaultLevel: $Level$$Type): $Level
public static "toLevel"(level: string): $Level
public "intLevel"(): integer
public "isInRange"(minLevel: $Level$$Type, maxLevel: $Level$$Type): boolean
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

 "getLanguage"(): string
 "getExtension"(): string
 "getClassifier"(): string
 "getDirectory"(): string
 "getPackaging"(): string
 "isIncludesDependencies"(): boolean
 "isAddedToClasspath"(): boolean
get "language"(): string
get "extension"(): string
get "classifier"(): string
get "directory"(): string
get "packaging"(): string
get "includesDependencies"(): boolean
get "addedToClasspath"(): boolean
}

export namespace $ArtifactHandler {
const ROLE: string
const probejs$$marker: never
}
export class $ArtifactHandler$$Static implements $ArtifactHandler {
static readonly "ROLE": string


 "getLanguage"(): string
 "getExtension"(): string
 "getClassifier"(): string
 "getDirectory"(): string
 "getPackaging"(): string
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
 "getGroupId"(): string
 "getArtifactId"(): string
 "getBaseVersion"(): string
 "storedInGroupDirectory"(): boolean
 "getLocalFilename"(arg0: $ArtifactRepository$$Type): string
 "getRemoteFilename"(): string
 "storeInLocalRepository"(arg0: $ArtifactRepository$$Type, arg1: $ArtifactRepository$$Type): void
 "extendedToString"(): string
 "storedInArtifactVersionDirectory"(): boolean
get "key"(): any
get "groupId"(): string
get "artifactId"(): string
get "baseVersion"(): string
get "remoteFilename"(): string
}

export namespace $ArtifactMetadata {
const probejs$$marker: never
}
export class $ArtifactMetadata$$Static implements $ArtifactMetadata {


 "merge"(arg0: $ArtifactMetadata$$Type): void
 "merge"(arg0: $ArtifactMetadata$0$$Type): void
 "getKey"(): any
 "getGroupId"(): string
 "getArtifactId"(): string
 "getBaseVersion"(): string
 "storedInGroupDirectory"(): boolean
 "getLocalFilename"(arg0: $ArtifactRepository$$Type): string
 "getRemoteFilename"(): string
 "storeInLocalRepository"(arg0: $ArtifactRepository$$Type, arg1: $ArtifactRepository$$Type): void
 "extendedToString"(): string
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
 "getText"(): string
 "getParameters"(): (any)[]
 "getFormat"(): string
 "getThrowable"(): $Throwable
 "getFormattedMessage"(): string
get "message"(): $Message
get "text"(): string
get "parameters"(): (any)[]
get "format"(): string
get "throwable"(): $Throwable
get "formattedMessage"(): string
}

export namespace $EntryMessage {
const probejs$$marker: never
}
export class $EntryMessage$$Static implements $EntryMessage {


 "getMessage"(): $Message
 "getText"(): string
 "getParameters"(): (any)[]
 "getFormat"(): string
 "getThrowable"(): $Throwable
 "getFormattedMessage"(): string
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

public static "of"<L, M, R>(arg0: L, arg1: M, arg2: R): $ImmutableTriple<(L), (M), (R)>
public static "emptyArray"<L, M, R>(): ($ImmutableTriple<(L), (M), (R)>)[]
public "getLeft"(): L
public "getRight"(): R
public static "ofNonNull"<L, M, R>(arg0: L, arg1: M, arg2: R): $ImmutableTriple<(L), (M), (R)>
public "getMiddle"(): M
public static "nullTriple"<L, M, R>(): $ImmutableTriple<(L), (M), (R)>
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

 "getMajorVersion"(): integer
 "getMinorVersion"(): integer
 "getBuildNumber"(): integer
 "getQualifier"(): string
 "parseVersion"(arg0: string): void
 "getIncrementalVersion"(): integer
 "compareTo"(arg0: $ArtifactVersion$$Type): integer
get "majorVersion"(): integer
get "minorVersion"(): integer
get "buildNumber"(): integer
get "qualifier"(): string
get "incrementalVersion"(): integer
}

export namespace $ArtifactVersion {
const probejs$$marker: never
}
export class $ArtifactVersion$$Static implements $ArtifactVersion {


 "getMajorVersion"(): integer
 "getMinorVersion"(): integer
 "getBuildNumber"(): integer
 "getQualifier"(): string
 "parseVersion"(arg0: string): void
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
 "newExitMessage"(format: string, result: any): $ExitMessage
 "newEntryMessage"(message: $Message$$Type): $EntryMessage
 "newEntryMessage"(message: string, ...params: (any)[]): $EntryMessage
}

export namespace $FlowMessageFactory {
const probejs$$marker: never
}
export class $FlowMessageFactory$$Static implements $FlowMessageFactory {


 "newExitMessage"(message: $EntryMessage$$Type): $ExitMessage
 "newExitMessage"(result: any, message: $Message$$Type): $ExitMessage
 "newExitMessage"(result: any, message: $EntryMessage$$Type): $ExitMessage
 "newExitMessage"(message: $Message$$Type): $ExitMessage
 "newExitMessage"(format: string, result: any): $ExitMessage
 "newEntryMessage"(message: $Message$$Type): $EntryMessage
 "newEntryMessage"(message: string, ...params: (any)[]): $EntryMessage
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

 "apply"(arg0: T, arg1: U, arg2: V): R
 "andThen"<W>(arg0: $Function$$Type<(R), (W)>): $TriFunction<(T), (U), (V), (W)>

(arg0: T, arg1: U, arg2: V): R
}

export namespace $TriFunction {
const probejs$$marker: never
}
export class $TriFunction$$Static<T, U, V, R> implements $TriFunction {


 "apply"(arg0: T, arg1: U, arg2: V): R
 "andThen"<W>(arg0: $Function$$Type<(R), (W)>): $TriFunction<(T), (U), (V), (W)>
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

constructor(arg0: string)
constructor(arg0: number)
constructor(arg0: float)
constructor()

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isInfinite"(): boolean
public "compareTo"(arg0: $MutableFloat$$Type): integer
public "compareTo"(arg0: any): integer
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public "getValue"(): float
public "add"(arg0: float): void
public "add"(arg0: number): void
public "increment"(): void
public "isNaN"(): boolean
public "setValue"(arg0: float): void
public "setValue"(arg0: number): void
public "setValue"(arg0: any): void
public "getAndAdd"(arg0: number): float
public "getAndAdd"(arg0: float): float
public "incrementAndGet"(): float
public "getAndIncrement"(): float
public "getAndDecrement"(): float
public "decrementAndGet"(): float
public "addAndGet"(arg0: float): float
public "addAndGet"(arg0: number): float
public "subtract"(arg0: float): void
public "subtract"(arg0: number): void
public "decrement"(): void
public "toFloat"(): float
get "infinite"(): boolean
get "value"(): float
get "naN"(): boolean
set "value"(value: float)
set "value"(value: number)
set "value"(value: any)
get "andIncrement"(): float
get "andDecrement"(): float
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
 "newMessage"(message: string): $Message
 "newMessage"(message: string, ...params: (any)[]): $Message
}

export namespace $MessageFactory {
const probejs$$marker: never
}
export class $MessageFactory$$Static implements $MessageFactory {


 "newMessage"(message: any): $Message
 "newMessage"(message: string): $Message
 "newMessage"(message: string, ...params: (any)[]): $Message
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
public "toString"(): string
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
