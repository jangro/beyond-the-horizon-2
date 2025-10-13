declare module "com.google.gson.stream.JsonWriter" {
import {$Writer, $Writer$$Type} from "java.io.Writer"
import {$Closeable, $Closeable$$Type} from "java.io.Closeable"
import {$Flushable, $Flushable$$Type} from "java.io.Flushable"

export class $JsonWriter implements $Closeable, $Flushable {

constructor(arg0: $Writer$$Type)

public "setLenient"(arg0: boolean): void
public "name"(arg0: StringJS): $JsonWriter
public "value"(arg0: double): $JsonWriter
public "value"(arg0: boolean): $JsonWriter
public "value"(arg0: boolean): $JsonWriter
public "value"(arg0: float): $JsonWriter
public "value"(arg0: StringJS): $JsonWriter
public "value"(arg0: number): $JsonWriter
public "value"(arg0: long): $JsonWriter
public "flush"(): void
public "close"(): void
public "jsonValue"(arg0: StringJS): $JsonWriter
public "nullValue"(): $JsonWriter
public "isHtmlSafe"(): boolean
public "setHtmlSafe"(arg0: boolean): void
public "isLenient"(): boolean
public "beginArray"(): $JsonWriter
public "beginObject"(): $JsonWriter
public "endArray"(): $JsonWriter
public "endObject"(): $JsonWriter
public "setIndent"(arg0: StringJS): void
public "getSerializeNulls"(): boolean
public "setSerializeNulls"(arg0: boolean): void
set "lenient"(value: boolean)
get "htmlSafe"(): boolean
set "htmlSafe"(value: boolean)
get "lenient"(): boolean
set "indent"(value: StringJS)
get "serializeNulls"(): boolean
set "serializeNulls"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonWriter$$Type = ($JsonWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonWriter_ = $JsonWriter$$Type;
}}
declare module "com.google.common.collect.ImmutableMap$Builder" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$ImmutableMap, $ImmutableMap$$Type} from "com.google.common.collect.ImmutableMap"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $ImmutableMap$Builder<K, V> {

constructor()

public "build"(): $ImmutableMap<(K), (V)>
public "put"(entry: $Map$Entry$$Type<(K), (V)>): $ImmutableMap$Builder<(K), (V)>
public "put"(key: K, value: V): $ImmutableMap$Builder<(K), (V)>
public "putAll"(entries: $Iterable$$Type<($Map$Entry$$Type<(K), (V)>)>): $ImmutableMap$Builder<(K), (V)>
public "putAll"(map: $Map$$Type<(K), (V)>): $ImmutableMap$Builder<(K), (V)>
public "buildOrThrow"(): $ImmutableMap<(K), (V)>
public "orderEntriesByValue"(valueComparator: $Comparator$$Type<(V)>): $ImmutableMap$Builder<(K), (V)>
public "buildKeepingLast"(): $ImmutableMap<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableMap$Builder$$Type<K, V> = ($ImmutableMap$Builder<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableMap$Builder_<K, V> = $ImmutableMap$Builder$$Type<(K), (V)>;
}}
declare module "com.google.common.reflect.Parameter" {
import {$AnnotatedElement, $AnnotatedElement$$Type} from "java.lang.reflect.AnnotatedElement"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$AnnotatedType, $AnnotatedType$$Type} from "java.lang.reflect.AnnotatedType"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Invokable, $Invokable$$Type} from "com.google.common.reflect.Invokable"
import {$TypeToken, $TypeToken$$Type} from "com.google.common.reflect.TypeToken"

export class $Parameter implements $AnnotatedElement {


public "equals"(obj: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isAnnotationPresent"(annotationType: $Class$$Type<($Annotation$$Type)>): boolean
public "getAnnotation"<A extends $Annotation>(annotationType: $Class$$Type<(A)>): A
public "getAnnotationsByType"<A extends $Annotation>(annotationType: $Class$$Type<(A)>): (A)[]
public "getAnnotations"(): ($Annotation)[]
public "getDeclaredAnnotation"<A extends $Annotation>(annotationType: $Class$$Type<(A)>): A
public "getDeclaredAnnotationsByType"<A extends $Annotation>(annotationType: $Class$$Type<(A)>): (A)[]
public "getDeclaredAnnotations"(): ($Annotation)[]
public "getType"(): $TypeToken<(any)>
public "getAnnotatedType"(): $AnnotatedType
public "getDeclaringInvokable"(): $Invokable<(any), (any)>
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
get "type"(): $TypeToken<(any)>
get "annotatedType"(): $AnnotatedType
get "declaringInvokable"(): $Invokable<(any), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Parameter$$Type = ($Parameter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Parameter_ = $Parameter$$Type;
}}
declare module "com.google.common.collect.HashMultimapGwtSerializationDependencies" {
import {$AbstractSetMultimap, $AbstractSetMultimap$$Type} from "com.google.common.collect.AbstractSetMultimap"
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Multiset, $Multiset$$Type} from "com.google.common.collect.Multiset"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $HashMultimapGwtSerializationDependencies<K, V> extends $AbstractSetMultimap<(K), (V)> {


public "removeAll"(key: any): $Collection<(any)>
public "get"(key: any): $Collection<(any)>
public "equals"(obj: any): boolean
public "entries"(): $Set<($Map$Entry<(K), (V)>)>
public "asMap"(): $Map<(K), ($Collection<(V)>)>
public "replaceValues"(key: K, values: $Iterable$$Type<(V)>): $Set<(V)>
public "remove"(key: any, value: any): boolean
public "size"(): integer
public "put"(key: K, value: V): boolean
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "putAll"(key: K, values: $Iterable$$Type<(V)>): boolean
public "putAll"(multimap: $Multimap$$Type<(K), (V)>): boolean
public "forEach"(action: $BiConsumer$$Type<(K), (V)>): void
public "containsKey"(key: any): boolean
public "keys"(): $Multiset<(K)>
public "keySet"(): $Set<(K)>
public "containsValue"(value: any): boolean
public "containsEntry"(key: any, value: any): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HashMultimapGwtSerializationDependencies$$Type<K, V> = ($HashMultimapGwtSerializationDependencies<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HashMultimapGwtSerializationDependencies_<K, V> = $HashMultimapGwtSerializationDependencies$$Type<(K), (V)>;
}}
declare module "com.google.common.collect.ForwardingSet" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$ForwardingCollection, $ForwardingCollection$$Type} from "com.google.common.collect.ForwardingCollection"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Set, $Set$$Type} from "java.util.Set"

export class $ForwardingSet<E> extends $ForwardingCollection<(E)> implements $Set<(E)> {


public "equals"(object: any): boolean
public "hashCode"(): integer
public "removeAll"(arg0: $Collection$$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$$Type<(any)>): boolean
public "remove"(arg0: any): boolean
public "size"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: E): boolean
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E): $Set<(E)>
public static "of"<E>(...arg0: (E)[]): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(): $Set<(E)>
public static "of"<E>(arg0: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForwardingSet$$Type<E> = ($ForwardingSet<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForwardingSet_<E> = $ForwardingSet$$Type<(E)>;
}}
declare module "com.google.gson.ReflectionAccessFilter$FilterResult" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ReflectionAccessFilter$FilterResult extends $Enum<($ReflectionAccessFilter$FilterResult)> {
static readonly "BLOCK_INACCESSIBLE": $ReflectionAccessFilter$FilterResult
static readonly "BLOCK_ALL": $ReflectionAccessFilter$FilterResult
static readonly "INDECISIVE": $ReflectionAccessFilter$FilterResult
static readonly "ALLOW": $ReflectionAccessFilter$FilterResult


public static "values"(): ($ReflectionAccessFilter$FilterResult)[]
public static "valueOf"(arg0: StringJS): $ReflectionAccessFilter$FilterResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReflectionAccessFilter$FilterResult$$Type = (("allow") | ("indecisive") | ("block_inaccessible") | ("block_all"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReflectionAccessFilter$FilterResult_ = $ReflectionAccessFilter$FilterResult$$Type;
}}
declare module "com.google.gson.JsonPrimitive" {
import {$BigInteger, $BigInteger$$Type} from "java.math.BigInteger"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$BigDecimal, $BigDecimal$$Type} from "java.math.BigDecimal"

export class $JsonPrimitive extends $JsonElement {

constructor(arg0: character)
constructor(arg0: StringJS)
constructor(arg0: number)
constructor(arg0: boolean)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getAsByte"(): byte
/**
 * 
 * @deprecated
 */
public "getAsCharacter"(): character
public "deepCopy"(): $JsonElement
public "getAsFloat"(): float
public "getAsShort"(): short
public "getAsString"(): StringJS
public "getAsBoolean"(): boolean
public "getAsDouble"(): double
public "getAsInt"(): integer
public "getAsLong"(): long
public "getAsNumber"(): number
public "isBoolean"(): boolean
public "isNumber"(): boolean
public "isString"(): boolean
public "getAsBigDecimal"(): $BigDecimal
public "getAsBigInteger"(): $BigInteger
get "asByte"(): byte
get "asCharacter"(): character
get "asFloat"(): float
get "asShort"(): short
get "asString"(): StringJS
get "asBoolean"(): boolean
get "asDouble"(): double
get "asInt"(): integer
get "asLong"(): long
get "asNumber"(): number
get "boolean"(): boolean
get "number"(): boolean
get "string"(): boolean
get "asBigDecimal"(): $BigDecimal
get "asBigInteger"(): $BigInteger
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonPrimitive$$Type = (number) | (StringJS) | (boolean) | (null);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonPrimitive_ = $JsonPrimitive$$Type;
}}
declare module "com.google.common.collect.ImmutableMap" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ImmutableSet, $ImmutableSet$$Type} from "com.google.common.collect.ImmutableSet"
import {$BinaryOperator, $BinaryOperator$$Type} from "java.util.function.BinaryOperator"
import {$ImmutableSetMultimap, $ImmutableSetMultimap$$Type} from "com.google.common.collect.ImmutableSetMultimap"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$ImmutableCollection, $ImmutableCollection$$Type} from "com.google.common.collect.ImmutableCollection"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Collector, $Collector$$Type} from "java.util.stream.Collector"
import {$ImmutableMap$Builder, $ImmutableMap$Builder$$Type} from "com.google.common.collect.ImmutableMap$Builder"
import {$Set, $Set$$Type} from "java.util.Set"

export class $ImmutableMap<K, V> implements $Map<(K), (V)>, $Serializable {


/**
 * 
 * @deprecated
 */
public "remove"(o: any): V
/**
 * 
 * @deprecated
 */
public "remove"(key: any, value: any): boolean
public "get"(key: any): V
/**
 * 
 * @deprecated
 */
public "put"(k: K, v: V): V
public "equals"(object: any): boolean
public "toString"(): StringJS
public "values"(): $ImmutableCollection<(V)>
public "hashCode"(): integer
public static "copyOf"<K, V>(entries: $Iterable$$Type<($Map$Entry$$Type<(K), (V)>)>): $ImmutableMap<(K), (V)>
public static "copyOf"<K, V>(map: $Map$$Type<(K), (V)>): $ImmutableMap<(K), (V)>
/**
 * 
 * @deprecated
 */
public "clear"(): void
public "isEmpty"(): boolean
/**
 * 
 * @deprecated
 */
public "replace"(key: K, oldValue: V, newValue: V): boolean
/**
 * 
 * @deprecated
 */
public "replace"(key: K, value: V): V
/**
 * 
 * @deprecated
 */
public "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
public static "of"<K, V>(k1: K, v1: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V, k6: K, v6: V, k7: K, v7: V, k8: K, v8: V, k9: K, v9: V, k10: K, v10: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V, k6: K, v6: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V, k6: K, v6: V, k7: K, v7: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V, k6: K, v6: V, k7: K, v7: V, k8: K, v8: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V, k6: K, v6: V, k7: K, v7: V, k8: K, v8: V, k9: K, v9: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V): $ImmutableMap<(K), (V)>
public static "builder"<K, V>(): $ImmutableMap$Builder<(K), (V)>
/**
 * 
 * @deprecated
 */
public "merge"(key: K, value: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
public "entrySet"(): $Set<(any)>
/**
 * 
 * @deprecated
 */
public "putAll"(map: $Map$$Type<(K), (V)>): void
/**
 * 
 * @deprecated
 */
public "putIfAbsent"(key: K, value: V): V
/**
 * 
 * @deprecated
 */
public "compute"(key: K, remappingFunction: $BiFunction$$Type<(K), (V), (V)>): V
public "containsKey"(key: any): boolean
/**
 * 
 * @deprecated
 */
public "computeIfAbsent"(key: K, mappingFunction: $Function$$Type<(K), (V)>): V
public "keySet"(): $ImmutableSet<(K)>
public "containsValue"(value: any): boolean
public "getOrDefault"(key: any, defaultValue: V): V
/**
 * 
 * @deprecated
 */
public "computeIfPresent"(key: K, remappingFunction: $BiFunction$$Type<(K), (V), (V)>): V
public static "ofEntries"<K, V>(...entries: ($Map$Entry$$Type<(K), (V)>)[]): $ImmutableMap<(K), (V)>
public static "toImmutableMap"<T, K, V>(keyFunction: $Function$$Type<(T), (K)>, valueFunction: $Function$$Type<(T), (V)>, mergeFunction: $BinaryOperator$$Type<(V)>): $Collector<(T), (any), ($ImmutableMap<(K), (V)>)>
public static "toImmutableMap"<T, K, V>(keyFunction: $Function$$Type<(T), (K)>, valueFunction: $Function$$Type<(T), (V)>): $Collector<(T), (any), ($ImmutableMap<(K), (V)>)>
public "asMultimap"(): $ImmutableSetMultimap<(K), (V)>
public static "builderWithExpectedSize"<K, V>(expectedSize: integer): $ImmutableMap$Builder<(K), (V)>
public "size"(): integer
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
[index: string | number]: V
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableMap$$Type<K, V> = ($ImmutableMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableMap_<K, V> = $ImmutableMap$$Type<(K), (V)>;
}}
declare module "com.google.common.collect.BaseImmutableMultimap" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Multiset, $Multiset$$Type} from "com.google.common.collect.Multiset"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$AbstractMultimap, $AbstractMultimap$$Type} from "com.google.common.collect.AbstractMultimap"

export class $BaseImmutableMultimap<K, V> extends $AbstractMultimap<(K), (V)> {


public "remove"(key: any, value: any): boolean
public "put"(key: K, value: V): boolean
public "equals"(obj: any): boolean
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "isEmpty"(): boolean
public "putAll"(key: K, values: $Iterable$$Type<(V)>): boolean
public "putAll"(multimap: $Multimap$$Type<(K), (V)>): boolean
public "keys"(): $Multiset<(K)>
public "keySet"(): $Set<(K)>
public "containsValue"(value: any): boolean
public "entries"(): $Collection<($Map$Entry<(K), (V)>)>
public "asMap"(): $Map<(K), ($Collection<(V)>)>
public "containsEntry"(key: any, value: any): boolean
public "replaceValues"(key: K, values: $Iterable$$Type<(V)>): $Collection<(V)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseImmutableMultimap$$Type<K, V> = ($BaseImmutableMultimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseImmutableMultimap_<K, V> = $BaseImmutableMultimap$$Type<(K), (V)>;
}}
declare module "com.google.gson.Gson" {
import {$JsonReader, $JsonReader$$Type} from "com.google.gson.stream.JsonReader"
import {$Reader, $Reader$$Type} from "java.io.Reader"
import {$Appendable, $Appendable$$Type} from "java.lang.Appendable"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$GsonBuilder, $GsonBuilder$$Type} from "com.google.gson.GsonBuilder"
import {$TypeAdapter, $TypeAdapter$$Type} from "com.google.gson.TypeAdapter"
import {$Excluder, $Excluder$$Type} from "com.google.gson.internal.Excluder"
import {$Writer, $Writer$$Type} from "java.io.Writer"
import {$JsonWriter, $JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$TypeAdapterFactory, $TypeAdapterFactory$$Type} from "com.google.gson.TypeAdapterFactory"
import {$TypeToken, $TypeToken$$Type} from "com.google.gson.reflect.TypeToken"
import {$FieldNamingStrategy, $FieldNamingStrategy$$Type} from "com.google.gson.FieldNamingStrategy"

export class $Gson {

constructor()

public "toString"(): StringJS
public "toJson"(arg0: any, arg1: $Type$$Type, arg2: $Appendable$$Type): void
public "toJson"(arg0: any, arg1: $Appendable$$Type): void
public "toJson"(arg0: any, arg1: $Type$$Type): StringJS
public "toJson"(arg0: any): StringJS
public "toJson"(arg0: $JsonElement$$Type): StringJS
public "toJson"(arg0: $JsonElement$$Type, arg1: $Appendable$$Type): void
public "toJson"(arg0: $JsonElement$$Type, arg1: $JsonWriter$$Type): void
public "toJson"(arg0: any, arg1: $Type$$Type, arg2: $JsonWriter$$Type): void
public "fromJson"<T>(arg0: $JsonElement$$Type, arg1: $Type$$Type): T
public "fromJson"<T>(arg0: StringJS, arg1: $Class$$Type<(T)>): T
public "fromJson"<T>(arg0: StringJS, arg1: $Type$$Type): T
public "fromJson"<T>(arg0: $JsonReader$$Type, arg1: $Type$$Type): T
public "fromJson"<T>(arg0: $JsonReader$$Type, arg1: $TypeToken$$Type<(T)>): T
public "fromJson"<T>(arg0: $JsonElement$$Type, arg1: $Class$$Type<(T)>): T
public "fromJson"<T>(arg0: $Reader$$Type, arg1: $TypeToken$$Type<(T)>): T
public "fromJson"<T>(arg0: $Reader$$Type, arg1: $Type$$Type): T
public "fromJson"<T>(arg0: $JsonElement$$Type, arg1: $TypeToken$$Type<(T)>): T
public "fromJson"<T>(arg0: $Reader$$Type, arg1: $Class$$Type<(T)>): T
public "fromJson"<T>(arg0: StringJS, arg1: $TypeToken$$Type<(T)>): T
/**
 * 
 * @deprecated
 */
public "excluder"(): $Excluder
public "serializeNulls"(): boolean
public "toJsonTree"(arg0: any): $JsonElement
public "toJsonTree"(arg0: any, arg1: $Type$$Type): $JsonElement
public "newBuilder"(): $GsonBuilder
public "getAdapter"<T>(arg0: $TypeToken$$Type<(T)>): $TypeAdapter<(T)>
public "getAdapter"<T>(arg0: $Class$$Type<(T)>): $TypeAdapter<(T)>
public "htmlSafe"(): boolean
public "newJsonReader"(arg0: $Reader$$Type): $JsonReader
public "newJsonWriter"(arg0: $Writer$$Type): $JsonWriter
public "fieldNamingStrategy"(): $FieldNamingStrategy
public "getDelegateAdapter"<T>(arg0: $TypeAdapterFactory$$Type, arg1: $TypeToken$$Type<(T)>): $TypeAdapter<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Gson$$Type = ($Gson);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Gson_ = $Gson$$Type;
}}
declare module "com.google.gson.GsonBuilder" {
import {$ExclusionStrategy, $ExclusionStrategy$$Type} from "com.google.gson.ExclusionStrategy"
import {$LongSerializationPolicy, $LongSerializationPolicy$$Type} from "com.google.gson.LongSerializationPolicy"
import {$ToNumberStrategy, $ToNumberStrategy$$Type} from "com.google.gson.ToNumberStrategy"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Gson, $Gson$$Type} from "com.google.gson.Gson"
import {$TypeAdapterFactory, $TypeAdapterFactory$$Type} from "com.google.gson.TypeAdapterFactory"
import {$ReflectionAccessFilter, $ReflectionAccessFilter$$Type} from "com.google.gson.ReflectionAccessFilter"
import {$FieldNamingPolicy, $FieldNamingPolicy$$Type} from "com.google.gson.FieldNamingPolicy"
import {$FieldNamingStrategy, $FieldNamingStrategy$$Type} from "com.google.gson.FieldNamingStrategy"

export class $GsonBuilder {

constructor()

public "setVersion"(arg0: double): $GsonBuilder
public "setLenient"(): $GsonBuilder
public "create"(): $Gson
public "setDateFormat"(arg0: integer): $GsonBuilder
public "setDateFormat"(arg0: StringJS): $GsonBuilder
public "setDateFormat"(arg0: integer, arg1: integer): $GsonBuilder
public "serializeNulls"(): $GsonBuilder
public "registerTypeAdapter"(arg0: $Type$$Type, arg1: any): $GsonBuilder
public "setPrettyPrinting"(): $GsonBuilder
public "setFieldNamingPolicy"(arg0: $FieldNamingPolicy$$Type): $GsonBuilder
public "setFieldNamingStrategy"(arg0: $FieldNamingStrategy$$Type): $GsonBuilder
public "setExclusionStrategies"(...arg0: ($ExclusionStrategy$$Type)[]): $GsonBuilder
public "disableHtmlEscaping"(): $GsonBuilder
public "disableJdkUnsafe"(): $GsonBuilder
public "serializeSpecialFloatingPointValues"(): $GsonBuilder
public "excludeFieldsWithoutExposeAnnotation"(): $GsonBuilder
public "enableComplexMapKeySerialization"(): $GsonBuilder
public "addSerializationExclusionStrategy"(arg0: $ExclusionStrategy$$Type): $GsonBuilder
public "addDeserializationExclusionStrategy"(arg0: $ExclusionStrategy$$Type): $GsonBuilder
public "excludeFieldsWithModifiers"(...arg0: (integer)[]): $GsonBuilder
public "disableInnerClassSerialization"(): $GsonBuilder
public "setLongSerializationPolicy"(arg0: $LongSerializationPolicy$$Type): $GsonBuilder
public "setObjectToNumberStrategy"(arg0: $ToNumberStrategy$$Type): $GsonBuilder
public "setNumberToNumberStrategy"(arg0: $ToNumberStrategy$$Type): $GsonBuilder
public "registerTypeAdapterFactory"(arg0: $TypeAdapterFactory$$Type): $GsonBuilder
public "registerTypeHierarchyAdapter"(arg0: $Class$$Type<(any)>, arg1: any): $GsonBuilder
public "addReflectionAccessFilter"(arg0: $ReflectionAccessFilter$$Type): $GsonBuilder
public "generateNonExecutableJson"(): $GsonBuilder
set "version"(value: double)
set "dateFormat"(value: integer)
set "dateFormat"(value: StringJS)
set "fieldNamingPolicy"(value: $FieldNamingPolicy$$Type)
set "fieldNamingStrategy"(value: $FieldNamingStrategy$$Type)
set "exclusionStrategies"(value: ($ExclusionStrategy$$Type)[])
set "longSerializationPolicy"(value: $LongSerializationPolicy$$Type)
set "objectToNumberStrategy"(value: $ToNumberStrategy$$Type)
set "numberToNumberStrategy"(value: $ToNumberStrategy$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GsonBuilder$$Type = ($GsonBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GsonBuilder_ = $GsonBuilder$$Type;
}}
declare module "com.google.common.collect.AbstractMapBasedMultimap" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Multiset, $Multiset$$Type} from "com.google.common.collect.Multiset"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$AbstractMultimap, $AbstractMultimap$$Type} from "com.google.common.collect.AbstractMultimap"

export class $AbstractMapBasedMultimap<K, V> extends $AbstractMultimap<(K), (V)> implements $Serializable {


public "remove"(key: any, value: any): boolean
public "put"(key: K, value: V): boolean
public "equals"(obj: any): boolean
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "isEmpty"(): boolean
public "putAll"(key: K, values: $Iterable$$Type<(V)>): boolean
public "putAll"(multimap: $Multimap$$Type<(K), (V)>): boolean
public "keys"(): $Multiset<(K)>
public "keySet"(): $Set<(K)>
public "containsValue"(value: any): boolean
public "entries"(): $Collection<($Map$Entry<(K), (V)>)>
public "asMap"(): $Map<(K), ($Collection<(V)>)>
public "containsEntry"(key: any, value: any): boolean
public "replaceValues"(key: K, values: $Iterable$$Type<(V)>): $Collection<(V)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractMapBasedMultimap$$Type<K, V> = ($AbstractMapBasedMultimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractMapBasedMultimap_<K, V> = $AbstractMapBasedMultimap$$Type<(K), (V)>;
}}
declare module "com.google.gson.LongSerializationPolicy" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"

export class $LongSerializationPolicy extends $Enum<($LongSerializationPolicy)> {
static readonly "STRING": $LongSerializationPolicy
static readonly "DEFAULT": $LongSerializationPolicy


public static "values"(): ($LongSerializationPolicy)[]
public static "valueOf"(arg0: StringJS): $LongSerializationPolicy
public "serialize"(arg0: long): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongSerializationPolicy$$Type = (("default") | ("string"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongSerializationPolicy_ = $LongSerializationPolicy$$Type;
}}
declare module "com.google.common.collect.ForwardingObject" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ForwardingObject {


public "toString"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForwardingObject$$Type = ($ForwardingObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForwardingObject_ = $ForwardingObject$$Type;
}}
declare module "com.google.common.base.Supplier" {
import {$Supplier as $Supplier$0, $Supplier$$Type as $Supplier$0$$Type} from "java.util.function.Supplier"

export interface $Supplier<T> extends $Supplier$0<(T)> {

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
declare module "com.google.common.collect.AbstractMultimap" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Multiset, $Multiset$$Type} from "com.google.common.collect.Multiset"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $AbstractMultimap<K, V> implements $Multimap<(K), (V)> {


public "removeAll"(key: any): $Collection<(V)>
public "remove"(key: any, value: any): boolean
public "size"(): integer
public "get"(key: K): $Collection<(V)>
public "put"(key: K, value: V): boolean
public "equals"(obj: any): boolean
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "putAll"(key: K, values: $Iterable$$Type<(V)>): boolean
public "putAll"(multimap: $Multimap$$Type<(K), (V)>): boolean
public "forEach"(action: $BiConsumer$$Type<(K), (V)>): void
public "containsKey"(key: any): boolean
public "keys"(): $Multiset<(K)>
public "keySet"(): $Set<(K)>
public "containsValue"(value: any): boolean
public "entries"(): $Collection<($Map$Entry<(K), (V)>)>
public "asMap"(): $Map<(K), ($Collection<(V)>)>
public "containsEntry"(key: any, value: any): boolean
public "replaceValues"(key: K, values: $Iterable$$Type<(V)>): $Collection<(V)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractMultimap$$Type<K, V> = ($AbstractMultimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractMultimap_<K, V> = $AbstractMultimap$$Type<(K), (V)>;
}}
declare module "com.google.common.collect.ImmutableList$Builder" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ImmutableCollection, $ImmutableCollection$$Type} from "com.google.common.collect.ImmutableCollection"
import {$ImmutableCollection$Builder, $ImmutableCollection$Builder$$Type} from "com.google.common.collect.ImmutableCollection$Builder"

export class $ImmutableList$Builder<E> extends $ImmutableCollection$Builder<(E)> {

constructor()

public "build"(): $ImmutableCollection<(any)>
public "add"(elements: (any)[]): $ImmutableCollection$Builder<(any)>
public "add"(element: any): $ImmutableCollection$Builder<(any)>
public "addAll"(elements: $Iterator$$Type<(any)>): $ImmutableCollection$Builder<(any)>
public "addAll"(elements: $Iterable$$Type<(any)>): $ImmutableCollection$Builder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableList$Builder$$Type<E> = ($ImmutableList$Builder<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableList$Builder_<E> = $ImmutableList$Builder$$Type<(E)>;
}}
declare module "com.google.gson.reflect.TypeToken" {
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $TypeToken<T> {


public "getRawType"(): $Class<(T)>
public static "getArray"(arg0: $Type$$Type): $TypeToken<(any)>
public static "get"(arg0: $Type$$Type): $TypeToken<(any)>
public static "get"<T>(arg0: $Class$$Type<(T)>): $TypeToken<(T)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
/**
 * 
 * @deprecated
 */
public "isAssignableFrom"(arg0: $Type$$Type): boolean
/**
 * 
 * @deprecated
 */
public "isAssignableFrom"(arg0: $Class$$Type<(any)>): boolean
/**
 * 
 * @deprecated
 */
public "isAssignableFrom"(arg0: $TypeToken$$Type<(any)>): boolean
public "getType"(): $Type
public static "getParameterized"(arg0: $Type$$Type, ...arg1: ($Type$$Type)[]): $TypeToken<(any)>
get "rawType"(): $Class<(T)>
get "type"(): $Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeToken$$Type<T> = ($TypeToken<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeToken_<T> = $TypeToken$$Type<(T)>;
}}
declare module "com.google.common.base.Optional" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Supplier, $Supplier$$Type} from "com.google.common.base.Supplier"
import {$Optional as $Optional$0, $Optional$$Type as $Optional$0$$Type} from "java.util.Optional"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Function, $Function$$Type} from "com.google.common.base.Function"

export class $Optional<T> implements $Serializable {


public "or"(supplier: $Supplier$$Type<(T)>): T
public "or"(secondChoice: $Optional$$Type<(T)>): $Optional<(T)>
public "or"(defaultValue: T): T
public "get"(): T
public "equals"(object: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"<T>(reference: T): $Optional<(T)>
public "transform"<V>(arg0: $Function$$Type<(T), (V)>): $Optional<(V)>
public "isPresent"(): boolean
public static "absent"<T>(): $Optional<(T)>
public "orNull"(): T
public "asSet"(): $Set<(T)>
public static "fromNullable"<T>(nullableReference: T): $Optional<(T)>
public static "fromJavaUtil"<T>(javaUtilOptional: $Optional$0$$Type<(T)>): $Optional<(T)>
public static "toJavaUtil"<T>(googleOptional: $Optional$$Type<(T)>): $Optional$0<(T)>
public "toJavaUtil"(): $Optional$0<(T)>
public static "presentInstances"<T>(optionals: $Iterable$$Type<($Optional$$Type<(T)>)>): $Iterable<(T)>
get "present"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Optional$$Type<T> = ($Optional<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Optional_<T> = $Optional$$Type<(T)>;
}}
declare module "com.google.common.collect.ImmutableSetMultimap" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$SetMultimap, $SetMultimap$$Type} from "com.google.common.collect.SetMultimap"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$ImmutableSetMultimap$Builder, $ImmutableSetMultimap$Builder$$Type} from "com.google.common.collect.ImmutableSetMultimap$Builder"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$ImmutableMultimap, $ImmutableMultimap$$Type} from "com.google.common.collect.ImmutableMultimap"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Collector, $Collector$$Type} from "java.util.stream.Collector"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export class $ImmutableSetMultimap<K, V> extends $ImmutableMultimap<(K), (V)> implements $SetMultimap<(K), (V)> {


/**
 * 
 * @deprecated
 */
public "removeAll"(key: any): $Collection<(any)>
public "get"(key: any): $Set<(any)>
public static "copyOf"<K, V>(entries: $Iterable$$Type<($Map$Entry$$Type<(K), (V)>)>): $ImmutableSetMultimap<(K), (V)>
public static "copyOf"<K, V>(multimap: $Multimap$$Type<(K), (V)>): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V): $ImmutableSetMultimap<(K), (V)>
public static "builder"<K, V>(): $ImmutableSetMultimap$Builder<(K), (V)>
public "entries"(): $Set<(any)>
public "inverse"(): $ImmutableMultimap<(any), (any)>
/**
 * 
 * @deprecated
 */
public "replaceValues"(key: any, values: $Iterable$$Type<(any)>): $Collection<(any)>
public static "toImmutableSetMultimap"<T, K, V>(keyFunction: $Function$$Type<(T), (K)>, valueFunction: $Function$$Type<(T), (V)>): $Collector<(T), (any), ($ImmutableSetMultimap<(K), (V)>)>
public static "flatteningToImmutableSetMultimap"<T, K, V>(keyFunction: $Function$$Type<(T), (K)>, valuesFunction: $Function$$Type<(T), ($Stream$$Type<(V)>)>): $Collector<(T), (any), ($ImmutableSetMultimap<(K), (V)>)>
public "equals"(obj: any): boolean
public "asMap"(): $Map<(K), ($Collection<(V)>)>
public "keySet"(): $Set<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableSetMultimap$$Type<K, V> = ($ImmutableSetMultimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableSetMultimap_<K, V> = $ImmutableSetMultimap$$Type<(K), (V)>;
}}
declare module "com.google.gson.TypeAdapter" {
import {$Writer, $Writer$$Type} from "java.io.Writer"
import {$JsonReader, $JsonReader$$Type} from "com.google.gson.stream.JsonReader"
import {$JsonWriter, $JsonWriter$$Type} from "com.google.gson.stream.JsonWriter"
import {$Reader, $Reader$$Type} from "java.io.Reader"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"

export class $TypeAdapter<T> {

constructor()

public "write"(arg0: $JsonWriter$$Type, arg1: T): void
public "read"(arg0: $JsonReader$$Type): T
public "toJson"(arg0: $Writer$$Type, arg1: T): void
public "toJson"(arg0: T): StringJS
public "fromJsonTree"(arg0: $JsonElement$$Type): T
public "fromJson"(arg0: StringJS): T
public "fromJson"(arg0: $Reader$$Type): T
public "nullSafe"(): $TypeAdapter<(T)>
public "toJsonTree"(arg0: T): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeAdapter$$Type<T> = ($TypeAdapter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeAdapter_<T> = $TypeAdapter$$Type<(T)>;
}}
declare module "com.google.common.collect.Interner" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Interner<E> {

 "intern"(sample: E): E

(sample: E): E
}

export namespace $Interner {
const probejs$$marker: never
}
export class $Interner$$Static<E> implements $Interner {


 "intern"(sample: E): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Interner$$Type<E> = ((sample: E) => E);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Interner_<E> = $Interner$$Type<(E)>;
}}
declare module "com.google.common.collect.Table" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Table$Cell, $Table$Cell$$Type} from "com.google.common.collect.Table$Cell"

export interface $Table<R, C, V> {

 "row"(rowKey: R): $Map<(C), (V)>
 "remove"(rowKey: any, columnKey: any): V
 "size"(): integer
 "get"(rowKey: any, columnKey: any): V
 "put"(rowKey: R, columnKey: C, value: V): V
 "equals"(obj: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "contains"(rowKey: any, columnKey: any): boolean
 "putAll"(table: $Table$$Type<(R), (C), (V)>): void
 "containsValue"(value: any): boolean
 "rowMap"(): $Map<(R), ($Map<(C), (V)>)>
 "column"(columnKey: C): $Map<(R), (V)>
 "containsRow"(rowKey: any): boolean
 "containsColumn"(columnKey: any): boolean
 "cellSet"(): $Set<($Table$Cell<(R), (C), (V)>)>
 "rowKeySet"(): $Set<(R)>
 "columnKeySet"(): $Set<(C)>
 "columnMap"(): $Map<(C), ($Map<(R), (V)>)>
get "empty"(): boolean
}

export namespace $Table {
const probejs$$marker: never
}
export class $Table$$Static<R, C, V> implements $Table {


 "row"(rowKey: R): $Map<(C), (V)>
 "remove"(rowKey: any, columnKey: any): V
 "size"(): integer
 "get"(rowKey: any, columnKey: any): V
 "put"(rowKey: R, columnKey: C, value: V): V
 "equals"(obj: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "contains"(rowKey: any, columnKey: any): boolean
 "putAll"(table: $Table$$Type<(R), (C), (V)>): void
 "containsValue"(value: any): boolean
 "rowMap"(): $Map<(R), ($Map<(C), (V)>)>
 "column"(columnKey: C): $Map<(R), (V)>
 "containsRow"(rowKey: any): boolean
 "containsColumn"(columnKey: any): boolean
 "cellSet"(): $Set<($Table$Cell<(R), (C), (V)>)>
 "rowKeySet"(): $Set<(R)>
 "columnKeySet"(): $Set<(C)>
 "columnMap"(): $Map<(C), ($Map<(R), (V)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Table$$Type<R, C, V> = ($Table<(R), (C), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Table_<R, C, V> = $Table$$Type<(R), (C), (V)>;
}}
declare module "com.google.common.collect.Multiset$Entry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Multiset$Entry<E> {

 "getElement"(): E
 "equals"(o: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "getCount"(): integer
get "element"(): E
get "count"(): integer
}

export namespace $Multiset$Entry {
const probejs$$marker: never
}
export class $Multiset$Entry$$Static<E> implements $Multiset$Entry {


 "getElement"(): E
 "equals"(o: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "getCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Multiset$Entry$$Type<E> = ($Multiset$Entry<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Multiset$Entry_<E> = $Multiset$Entry$$Type<(E)>;
}}
declare module "com.google.gson.JsonDeserializationContext" {
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"

export interface $JsonDeserializationContext {

 "deserialize"<T>(arg0: $JsonElement$$Type, arg1: $Type$$Type): T

(arg0: $JsonElement, arg1: $Type): T
}

export namespace $JsonDeserializationContext {
const probejs$$marker: never
}
export class $JsonDeserializationContext$$Static implements $JsonDeserializationContext {


 "deserialize"<T>(arg0: $JsonElement$$Type, arg1: $Type$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonDeserializationContext$$Type = ((arg0: $JsonElement, arg1: $Type) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonDeserializationContext_ = $JsonDeserializationContext$$Type;
}}
declare module "com.google.common.collect.SetMultimap" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Multiset, $Multiset$$Type} from "com.google.common.collect.Multiset"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export interface $SetMultimap<K, V> extends $Multimap<(K), (V)> {

 "removeAll"(key: any): $Collection<(any)>
 "get"(key: any): $Collection<(any)>
 "equals"(obj: any): boolean
 "entries"(): $Set<($Map$Entry<(K), (V)>)>
 "asMap"(): $Map<(K), ($Collection<(V)>)>
 "replaceValues"(key: K, values: $Iterable$$Type<(V)>): $Set<(V)>
 "remove"(key: any, value: any): boolean
 "size"(): integer
 "put"(key: K, value: V): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "putAll"(key: K, values: $Iterable$$Type<(V)>): boolean
 "putAll"(multimap: $Multimap$$Type<(K), (V)>): boolean
 "forEach"(action: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(key: any): boolean
 "keys"(): $Multiset<(K)>
 "keySet"(): $Set<(K)>
 "containsValue"(value: any): boolean
 "containsEntry"(key: any, value: any): boolean
get "empty"(): boolean
}

export namespace $SetMultimap {
const probejs$$marker: never
}
export class $SetMultimap$$Static<K, V> implements $SetMultimap {


 "removeAll"(key: any): $Collection<(any)>
 "get"(key: any): $Collection<(any)>
 "equals"(obj: any): boolean
 "entries"(): $Set<($Map$Entry<(K), (V)>)>
 "asMap"(): $Map<(K), ($Collection<(V)>)>
 "replaceValues"(key: K, values: $Iterable$$Type<(V)>): $Set<(V)>
 "remove"(key: any, value: any): boolean
 "size"(): integer
 "put"(key: K, value: V): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "putAll"(key: K, values: $Iterable$$Type<(V)>): boolean
 "putAll"(multimap: $Multimap$$Type<(K), (V)>): boolean
 "forEach"(action: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(key: any): boolean
 "keys"(): $Multiset<(K)>
 "keySet"(): $Set<(K)>
 "containsValue"(value: any): boolean
 "containsEntry"(key: any, value: any): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetMultimap$$Type<K, V> = ($SetMultimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetMultimap_<K, V> = $SetMultimap$$Type<(K), (V)>;
}}
declare module "com.google.gson.JsonElement" {
import {$JsonPrimitive, $JsonPrimitive$$Type} from "com.google.gson.JsonPrimitive"
import {$BigInteger, $BigInteger$$Type} from "java.math.BigInteger"
import {$BigDecimal, $BigDecimal$$Type} from "java.math.BigDecimal"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$JsonArray, $JsonArray$$Type} from "com.google.gson.JsonArray"
import {$JsonNull, $JsonNull$$Type} from "com.google.gson.JsonNull"

export class $JsonElement {

/**
 * 
 * @deprecated
 */
constructor()

public "toString"(): StringJS
public "getAsByte"(): byte
/**
 * 
 * @deprecated
 */
public "getAsCharacter"(): character
public "deepCopy"(): $JsonElement
public "getAsFloat"(): float
public "getAsShort"(): short
public "getAsJsonNull"(): $JsonNull
public "getAsString"(): StringJS
public "getAsBoolean"(): boolean
public "getAsDouble"(): double
public "getAsInt"(): integer
public "getAsJsonArray"(): $JsonArray
public "getAsLong"(): long
public "getAsNumber"(): number
public "isJsonArray"(): boolean
public "isJsonNull"(): boolean
public "isJsonObject"(): boolean
public "getAsJsonPrimitive"(): $JsonPrimitive
public "isJsonPrimitive"(): boolean
public "getAsBigDecimal"(): $BigDecimal
public "getAsBigInteger"(): $BigInteger
public "getAsJsonObject"(): $JsonObject
get "asByte"(): byte
get "asCharacter"(): character
get "asFloat"(): float
get "asShort"(): short
get "asJsonNull"(): $JsonNull
get "asString"(): StringJS
get "asBoolean"(): boolean
get "asDouble"(): double
get "asInt"(): integer
get "asJsonArray"(): $JsonArray
get "asLong"(): long
get "asNumber"(): number
get "jsonArray"(): boolean
get "jsonNull"(): boolean
get "jsonObject"(): boolean
get "asJsonPrimitive"(): $JsonPrimitive
get "jsonPrimitive"(): boolean
get "asBigDecimal"(): $BigDecimal
get "asBigInteger"(): $BigInteger
get "asJsonObject"(): $JsonObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonElement$$Type = ($JsonObject$$Type) | ($JsonArray$$Type) | ($JsonPrimitive$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonElement_ = $JsonElement$$Type;
}}
declare module "com.google.common.collect.ImmutableMultisetGwtSerializationDependencies" {
import {$ImmutableCollection, $ImmutableCollection$$Type} from "com.google.common.collect.ImmutableCollection"

export class $ImmutableMultisetGwtSerializationDependencies<E> extends $ImmutableCollection<(E)> {


public "equals"(arg0: any): boolean
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableMultisetGwtSerializationDependencies$$Type<E> = ($ImmutableMultisetGwtSerializationDependencies<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableMultisetGwtSerializationDependencies_<E> = $ImmutableMultisetGwtSerializationDependencies$$Type<(E)>;
}}
declare module "com.google.common.collect.ForwardingMultimap" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ForwardingObject, $ForwardingObject$$Type} from "com.google.common.collect.ForwardingObject"
import {$Multiset, $Multiset$$Type} from "com.google.common.collect.Multiset"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $ForwardingMultimap<K, V> extends $ForwardingObject implements $Multimap<(K), (V)> {


public "removeAll"(key: any): $Collection<(V)>
public "remove"(key: any, value: any): boolean
public "size"(): integer
public "get"(key: K): $Collection<(V)>
public "put"(key: K, value: V): boolean
public "equals"(object: any): boolean
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "putAll"(multimap: $Multimap$$Type<(K), (V)>): boolean
public "putAll"(key: K, values: $Iterable$$Type<(V)>): boolean
public "containsKey"(key: any): boolean
public "keys"(): $Multiset<(K)>
public "keySet"(): $Set<(K)>
public "containsValue"(value: any): boolean
public "entries"(): $Collection<($Map$Entry<(K), (V)>)>
public "asMap"(): $Map<(K), ($Collection<(V)>)>
public "containsEntry"(key: any, value: any): boolean
public "replaceValues"(key: K, values: $Iterable$$Type<(V)>): $Collection<(V)>
public "forEach"(action: $BiConsumer$$Type<(K), (V)>): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForwardingMultimap$$Type<K, V> = ($ForwardingMultimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForwardingMultimap_<K, V> = $ForwardingMultimap$$Type<(K), (V)>;
}}
declare module "com.google.gson.stream.JsonToken" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $JsonToken extends $Enum<($JsonToken)> {
static readonly "NUMBER": $JsonToken
static readonly "NULL": $JsonToken
static readonly "END_DOCUMENT": $JsonToken
static readonly "BEGIN_OBJECT": $JsonToken
static readonly "END_ARRAY": $JsonToken
static readonly "STRING": $JsonToken
static readonly "END_OBJECT": $JsonToken
static readonly "BEGIN_ARRAY": $JsonToken
static readonly "BOOLEAN": $JsonToken
static readonly "NAME": $JsonToken


public static "values"(): ($JsonToken)[]
public static "valueOf"(arg0: StringJS): $JsonToken
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonToken$$Type = (("begin_array") | ("end_array") | ("begin_object") | ("end_object") | ("name") | ("string") | ("number") | ("boolean") | ("null") | ("end_document"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonToken_ = $JsonToken$$Type;
}}
declare module "com.google.common.collect.ImmutableCollection" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$UnmodifiableIterator, $UnmodifiableIterator$$Type} from "com.google.common.collect.UnmodifiableIterator"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$AbstractCollection, $AbstractCollection$$Type} from "java.util.AbstractCollection"

export class $ImmutableCollection<E> extends $AbstractCollection<(E)> implements $Serializable {


/**
 * 
 * @deprecated
 */
public "removeAll"(oldElements: $Collection$$Type<(any)>): boolean
/**
 * 
 * @deprecated
 */
public "retainAll"(elementsToKeep: $Collection$$Type<(any)>): boolean
/**
 * 
 * @deprecated
 */
public "removeIf"(filter: $Predicate$$Type<(E)>): boolean
public "asList"(): $ImmutableList<(E)>
/**
 * 
 * @deprecated
 */
public "remove"(object: any): boolean
/**
 * 
 * @deprecated
 */
public "clear"(): void
/**
 * 
 * @deprecated
 */
public "add"(e: E): boolean
public "toArray"<T>(other: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $UnmodifiableIterator<(E)>
public "contains"(object: any): boolean
public "spliterator"(): $Spliterator<(E)>
/**
 * 
 * @deprecated
 */
public "addAll"(newElements: $Collection$$Type<(E)>): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableCollection$$Type<E> = ($ImmutableCollection<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableCollection_<E> = $ImmutableCollection$$Type<(E)>;
}}
declare module "com.google.common.reflect.Invokable" {
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$AccessFlag, $AccessFlag$$Type} from "java.lang.reflect.AccessFlag"
import {$Method, $Method$$Type} from "java.lang.reflect.Method"
import {$TypeToken, $TypeToken$$Type} from "com.google.common.reflect.TypeToken"
import {$TypeVariable, $TypeVariable$$Type} from "java.lang.reflect.TypeVariable"
import {$Member, $Member$$Type} from "java.lang.reflect.Member"
import {$AnnotatedElement, $AnnotatedElement$$Type} from "java.lang.reflect.AnnotatedElement"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$AnnotatedType, $AnnotatedType$$Type} from "java.lang.reflect.AnnotatedType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Constructor, $Constructor$$Type} from "java.lang.reflect.Constructor"
import {$Parameter, $Parameter$$Type} from "com.google.common.reflect.Parameter"

export class $Invokable<T, R> implements $AnnotatedElement, $Member {


public "isPrivate"(): boolean
public "isNative"(): boolean
public "isAbstract"(): boolean
public "getExceptionTypes"(): $ImmutableList<($TypeToken<($Throwable)>)>
public "getAnnotatedReturnType"(): $AnnotatedType
public "getParameters"(): $ImmutableList<($Parameter)>
public "isSynchronized"(): boolean
public "invoke"(receiver: T, ...args: (any)[]): R
public "getName"(): StringJS
public "equals"(obj: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getModifiers"(): integer
public static "from"<T>(arg0: $Constructor$$Type<(T)>): $Invokable<(T), (T)>
public static "from"(method: $Method$$Type): $Invokable<(any), (any)>
public "getTypeParameters"(): ($TypeVariable<(any)>)[]
public "getReturnType"(): $TypeToken<(R)>
public "isSynthetic"(): boolean
public "isFinal"(): boolean
public "isStatic"(): boolean
public "isAnnotationPresent"(annotationClass: $Class$$Type<($Annotation$$Type)>): boolean
public "getDeclaringClass"(): $Class<(T)>
public "getAnnotation"<A extends $Annotation>(annotationClass: $Class$$Type<(A)>): A
public "getAnnotations"(): ($Annotation)[]
public "getDeclaredAnnotations"(): ($Annotation)[]
public "isPublic"(): boolean
public "setAccessible"(flag: boolean): void
public "isProtected"(): boolean
public "trySetAccessible"(): boolean
public "isAccessible"(): boolean
public "isVarArgs"(): boolean
public "isOverridable"(): boolean
public "returning"<R1 extends R>(returnType: $TypeToken$$Type<(R1)>): $Invokable<(T), (R1)>
public "returning"<R1 extends R>(returnType: $Class$$Type<(R1)>): $Invokable<(T), (R1)>
public "getOwnerType"(): $TypeToken<(T)>
public "isPackagePrivate"(): boolean
public "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
public "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$$Type<(T)>): (T)[]
public "accessFlags"(): $Set<($AccessFlag)>
get "private"(): boolean
get "native"(): boolean
get "abstract"(): boolean
get "exceptionTypes"(): $ImmutableList<($TypeToken<($Throwable)>)>
get "annotatedReturnType"(): $AnnotatedType
get "parameters"(): $ImmutableList<($Parameter)>
get "synchronized"(): boolean
get "name"(): StringJS
get "modifiers"(): integer
get "typeParameters"(): ($TypeVariable<(any)>)[]
get "returnType"(): $TypeToken<(R)>
get "synthetic"(): boolean
get "final"(): boolean
get "static"(): boolean
get "declaringClass"(): $Class<(T)>
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
get "public"(): boolean
set "accessible"(value: boolean)
get "protected"(): boolean
get "accessible"(): boolean
get "varArgs"(): boolean
get "overridable"(): boolean
get "ownerType"(): $TypeToken<(T)>
get "packagePrivate"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Invokable$$Type<T, R> = ($Invokable<(T), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Invokable_<T, R> = $Invokable$$Type<(T), (R)>;
}}
declare module "com.google.common.collect.ImmutableMultiset$Builder" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ImmutableCollection$Builder, $ImmutableCollection$Builder$$Type} from "com.google.common.collect.ImmutableCollection$Builder"
import {$ImmutableMultiset, $ImmutableMultiset$$Type} from "com.google.common.collect.ImmutableMultiset"

export class $ImmutableMultiset$Builder<E> extends $ImmutableCollection$Builder<(E)> {

constructor()

public "build"(): $ImmutableMultiset<(E)>
public "add"(elements: (any)[]): $ImmutableCollection$Builder<(any)>
public "add"(element: E): $ImmutableMultiset$Builder<(E)>
public "addAll"(elements: $Iterable$$Type<(any)>): $ImmutableCollection$Builder<(any)>
public "addAll"(elements: $Iterator$$Type<(any)>): $ImmutableCollection$Builder<(any)>
public "setCount"(element: E, count: integer): $ImmutableMultiset$Builder<(E)>
public "addCopies"(element: E, occurrences: integer): $ImmutableMultiset$Builder<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableMultiset$Builder$$Type<E> = ($ImmutableMultiset$Builder<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableMultiset$Builder_<E> = $ImmutableMultiset$Builder$$Type<(E)>;
}}
declare module "com.google.common.collect.HashMultimap" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$HashMultimapGwtSerializationDependencies, $HashMultimapGwtSerializationDependencies$$Type} from "com.google.common.collect.HashMultimapGwtSerializationDependencies"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Multiset, $Multiset$$Type} from "com.google.common.collect.Multiset"

export class $HashMultimap<K, V> extends $HashMultimapGwtSerializationDependencies<(K), (V)> {


public "removeAll"(key: any): $Set<(any)>
public static "create"<K, V>(): $HashMultimap<(K), (V)>
public static "create"<K, V>(multimap: $Multimap$$Type<(K), (V)>): $HashMultimap<(K), (V)>
public static "create"<K, V>(expectedKeys: integer, expectedValuesPerKey: integer): $HashMultimap<(K), (V)>
public "remove"(key: any, value: any): boolean
public "size"(): integer
public "get"(key: any): $Set<(any)>
public "put"(key: any, value: any): boolean
public "equals"(object: any): boolean
public "toString"(): StringJS
public "values"(): $Collection<(any)>
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "putAll"(multimap: $Multimap$$Type<(any), (any)>): boolean
public "putAll"(key: any, values: $Iterable$$Type<(any)>): boolean
public "forEach"(action: $BiConsumer$$Type<(any), (any)>): void
public "containsKey"(key: any): boolean
public "keys"(): $Multiset<(any)>
public "keySet"(): $Set<(any)>
public "containsValue"(value: any): boolean
public "entries"(): $Set<(any)>
public "asMap"(): $Map<(any), (any)>
public "containsEntry"(key: any, value: any): boolean
public "replaceValues"(key: any, values: $Iterable$$Type<(any)>): $Set<(any)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HashMultimap$$Type<K, V> = ($HashMultimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HashMultimap_<K, V> = $HashMultimap$$Type<(K), (V)>;
}}
declare module "com.google.gson.ExclusionStrategy" {
import {$Class, $Class$$Type} from "java.lang.Class"
import {$FieldAttributes, $FieldAttributes$$Type} from "com.google.gson.FieldAttributes"

export interface $ExclusionStrategy {

 "shouldSkipClass"(arg0: $Class$$Type<(any)>): boolean
 "shouldSkipField"(arg0: $FieldAttributes$$Type): boolean
}

export namespace $ExclusionStrategy {
const probejs$$marker: never
}
export class $ExclusionStrategy$$Static implements $ExclusionStrategy {


 "shouldSkipClass"(arg0: $Class$$Type<(any)>): boolean
 "shouldSkipField"(arg0: $FieldAttributes$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExclusionStrategy$$Type = ($ExclusionStrategy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExclusionStrategy_ = $ExclusionStrategy$$Type;
}}
declare module "com.google.gson.stream.JsonReader" {
import {$Reader, $Reader$$Type} from "java.io.Reader"
import {$JsonToken, $JsonToken$$Type} from "com.google.gson.stream.JsonToken"
import {$Closeable, $Closeable$$Type} from "java.io.Closeable"

export class $JsonReader implements $Closeable {

constructor(arg0: $Reader$$Type)

public "nextInt"(): integer
public "getPath"(): StringJS
public "peek"(): $JsonToken
public "nextDouble"(): double
public "setLenient"(arg0: boolean): void
public "toString"(): StringJS
public "hasNext"(): boolean
public "close"(): void
public "skipValue"(): void
public "nextName"(): StringJS
public "nextNull"(): void
public "nextLong"(): long
public "nextString"(): StringJS
public "isLenient"(): boolean
public "nextBoolean"(): boolean
public "beginArray"(): void
public "beginObject"(): void
public "endArray"(): void
public "endObject"(): void
public "getPreviousPath"(): StringJS
get "path"(): StringJS
set "lenient"(value: boolean)
get "lenient"(): boolean
get "previousPath"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonReader$$Type = ($JsonReader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonReader_ = $JsonReader$$Type;
}}
declare module "com.google.common.collect.Multiset" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Multiset$Entry, $Multiset$Entry$$Type} from "com.google.common.collect.Multiset$Entry"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$ObjIntConsumer, $ObjIntConsumer$$Type} from "java.util.function.ObjIntConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export interface $Multiset<E> extends $Collection<(E)> {

 "removeAll"(c: $Collection$$Type<(any)>): boolean
 "retainAll"(c: $Collection$$Type<(any)>): boolean
 "containsAll"(elements: $Collection$$Type<(any)>): boolean
 "forEachEntry"(action: $ObjIntConsumer$$Type<(E)>): void
 "remove"(element: any): boolean
 "remove"(element: any, occurrences: integer): integer
 "size"(): integer
 "equals"(object: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "add"(element: E): boolean
 "add"(element: E, occurrences: integer): integer
 "iterator"(): $Iterator<(E)>
 "count"(element: any): integer
 "contains"(element: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "entrySet"(): $Set<($Multiset$Entry<(E)>)>
 "forEach"(action: $Consumer$$Type<(E)>): void
 "elementSet"(): $Set<(E)>
 "setCount"(element: E, oldCount: integer, newCount: integer): boolean
 "setCount"(element: E, count: integer): integer
 "parallelStream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export namespace $Multiset {
const probejs$$marker: never
}
export class $Multiset$$Static<E> implements $Multiset {


 "removeAll"(c: $Collection$$Type<(any)>): boolean
 "retainAll"(c: $Collection$$Type<(any)>): boolean
 "containsAll"(elements: $Collection$$Type<(any)>): boolean
 "forEachEntry"(action: $ObjIntConsumer$$Type<(E)>): void
 "remove"(element: any): boolean
 "remove"(element: any, occurrences: integer): integer
 "size"(): integer
 "equals"(object: any): boolean
 "toString"(): StringJS
 "hashCode"(): integer
 "add"(element: E): boolean
 "add"(element: E, occurrences: integer): integer
 "iterator"(): $Iterator<(E)>
 "count"(element: any): integer
 "contains"(element: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "entrySet"(): $Set<($Multiset$Entry<(E)>)>
 "forEach"(action: $Consumer$$Type<(E)>): void
 "elementSet"(): $Set<(E)>
 "setCount"(element: E, oldCount: integer, newCount: integer): boolean
 "setCount"(element: E, count: integer): integer
 "parallelStream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Multiset$$Type<E> = ($Multiset<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Multiset_<E> = $Multiset$$Type<(E)>;
}}
declare module "com.google.common.hash.HashCode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $HashCode {


public "bits"(): integer
public "asInt"(): integer
public "equals"(object: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "asLong"(): long
public static "fromBytes"(bytes: (byte)[]): $HashCode
public "padToLong"(): long
public "asBytes"(): (byte)[]
public static "fromString"(string: StringJS): $HashCode
public static "fromInt"(hash: integer): $HashCode
public static "fromLong"(hash: long): $HashCode
public "writeBytesTo"(dest: (byte)[], offset: integer, maxLength: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HashCode$$Type = ($HashCode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HashCode_ = $HashCode$$Type;
}}
declare module "com.google.common.cache.LoadingCache" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$CacheStats, $CacheStats$$Type} from "com.google.common.cache.CacheStats"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ConcurrentMap, $ConcurrentMap$$Type} from "java.util.concurrent.ConcurrentMap"
import {$Cache, $Cache$$Type} from "com.google.common.cache.Cache"
import {$Function as $Function$0, $Function$$Type as $Function$0$$Type} from "com.google.common.base.Function"
import {$ImmutableMap, $ImmutableMap$$Type} from "com.google.common.collect.ImmutableMap"

export interface $LoadingCache<K, V> extends $Cache<(K), (V)>, $Function$0<(K), (V)> {

 "getUnchecked"(key: K): V
 "refresh"(key: K): void
 "getAll"(keys: $Iterable$$Type<(K)>): $ImmutableMap<(K), (V)>
 "get"(key: K): V
/**
 * 
 * @deprecated
 */
 "apply"(key: K): V
 "asMap"(): $ConcurrentMap<(K), (V)>
 "invalidate"(key: any): void
 "size"(): long
 "get"(key: K, loader: $Callable$$Type<(V)>): V
 "put"(key: K, value: V): void
 "putAll"(m: $Map$$Type<(K), (V)>): void
 "stats"(): $CacheStats
 "cleanUp"(): void
 "getIfPresent"(key: any): V
 "getAllPresent"(keys: $Iterable$$Type<(any)>): $ImmutableMap<(K), (V)>
 "invalidateAll"(keys: $Iterable$$Type<(any)>): void
 "invalidateAll"(): void
 "equals"(object: any): boolean
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (V)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(K), (V)>
}

export namespace $LoadingCache {
function identity<T>(): $Function<(K), (K)>
const probejs$$marker: never
}
export class $LoadingCache$$Static<K, V> implements $LoadingCache {


 "getUnchecked"(key: K): V
 "refresh"(key: K): void
 "getAll"(keys: $Iterable$$Type<(K)>): $ImmutableMap<(K), (V)>
 "get"(key: K): V
/**
 * 
 * @deprecated
 */
 "apply"(key: K): V
 "asMap"(): $ConcurrentMap<(K), (V)>
 "invalidate"(key: any): void
 "size"(): long
 "get"(key: K, loader: $Callable$$Type<(V)>): V
 "put"(key: K, value: V): void
 "putAll"(m: $Map$$Type<(K), (V)>): void
 "stats"(): $CacheStats
 "cleanUp"(): void
 "getIfPresent"(key: any): V
 "getAllPresent"(keys: $Iterable$$Type<(any)>): $ImmutableMap<(K), (V)>
 "invalidateAll"(keys: $Iterable$$Type<(any)>): void
 "invalidateAll"(): void
 "equals"(object: any): boolean
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (V)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(K), (V)>
static "identity"<T>(): $Function<(K), (K)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadingCache$$Type<K, V> = ($LoadingCache<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoadingCache_<K, V> = $LoadingCache$$Type<(K), (V)>;
}}
declare module "com.google.common.base.Function" {
import {$Function as $Function$0, $Function$$Type as $Function$0$$Type} from "java.util.function.Function"

export interface $Function<F, T> extends $Function$0<(F), (T)> {

 "equals"(object: any): boolean
 "apply"(input: F): T
 "compose"<V>(arg0: $Function$0$$Type<(V), (F)>): $Function$0<(V), (F)>
 "andThen"<V>(arg0: $Function$0$$Type<(F), (V)>): $Function$0<(F), (V)>
}

export namespace $Function {
function identity<T>(): $Function$0<(F), (F)>
const probejs$$marker: never
}
export class $Function$$Static<F, T> implements $Function {


 "equals"(object: any): boolean
 "apply"(input: F): T
 "compose"<V>(arg0: $Function$0$$Type<(V), (F)>): $Function$0<(V), (F)>
 "andThen"<V>(arg0: $Function$0$$Type<(F), (V)>): $Function$0<(F), (V)>
static "identity"<T>(): $Function$0<(F), (F)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function$$Type<F, T> = ($Function<(F), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function_<F, T> = $Function$$Type<(F), (T)>;
}}
declare module "com.google.gson.JsonNull" {
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"

export class $JsonNull extends $JsonElement {
static readonly "INSTANCE": $JsonNull

/**
 * 
 * @deprecated
 */
constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "deepCopy"(): $JsonNull
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonNull$$Type = ($JsonNull);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonNull_ = $JsonNull$$Type;
}}
declare module "com.google.gson.FieldNamingPolicy" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Field, $Field$$Type} from "java.lang.reflect.Field"
import {$FieldNamingStrategy, $FieldNamingStrategy$$Type} from "com.google.gson.FieldNamingStrategy"

export class $FieldNamingPolicy extends $Enum<($FieldNamingPolicy)> implements $FieldNamingStrategy {
static readonly "IDENTITY": $FieldNamingPolicy
static readonly "UPPER_CAMEL_CASE_WITH_SPACES": $FieldNamingPolicy
static readonly "UPPER_CAMEL_CASE": $FieldNamingPolicy
static readonly "LOWER_CASE_WITH_DOTS": $FieldNamingPolicy
static readonly "LOWER_CASE_WITH_UNDERSCORES": $FieldNamingPolicy
static readonly "UPPER_CASE_WITH_UNDERSCORES": $FieldNamingPolicy
static readonly "LOWER_CASE_WITH_DASHES": $FieldNamingPolicy


public static "values"(): ($FieldNamingPolicy)[]
public static "valueOf"(arg0: StringJS): $FieldNamingPolicy
public "translateName"(arg0: $Field$$Type): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldNamingPolicy$$Type = (("identity") | ("upper_camel_case") | ("upper_camel_case_with_spaces") | ("upper_case_with_underscores") | ("lower_case_with_underscores") | ("lower_case_with_dashes") | ("lower_case_with_dots"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieldNamingPolicy_ = $FieldNamingPolicy$$Type;
}}
declare module "com.google.common.collect.AbstractSetMultimap" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$SetMultimap, $SetMultimap$$Type} from "com.google.common.collect.SetMultimap"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AbstractMapBasedMultimap, $AbstractMapBasedMultimap$$Type} from "com.google.common.collect.AbstractMapBasedMultimap"
import {$Multiset, $Multiset$$Type} from "com.google.common.collect.Multiset"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $AbstractSetMultimap<K, V> extends $AbstractMapBasedMultimap<(K), (V)> implements $SetMultimap<(K), (V)> {


public "removeAll"(key: any): $Collection<(any)>
public "get"(key: any): $Collection<(any)>
public "equals"(obj: any): boolean
public "entries"(): $Set<($Map$Entry<(K), (V)>)>
public "asMap"(): $Map<(K), ($Collection<(V)>)>
public "replaceValues"(key: K, values: $Iterable$$Type<(V)>): $Set<(V)>
public "remove"(key: any, value: any): boolean
public "size"(): integer
public "put"(key: K, value: V): boolean
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "putAll"(key: K, values: $Iterable$$Type<(V)>): boolean
public "putAll"(multimap: $Multimap$$Type<(K), (V)>): boolean
public "forEach"(action: $BiConsumer$$Type<(K), (V)>): void
public "containsKey"(key: any): boolean
public "keys"(): $Multiset<(K)>
public "keySet"(): $Set<(K)>
public "containsValue"(value: any): boolean
public "containsEntry"(key: any, value: any): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSetMultimap$$Type<K, V> = ($AbstractSetMultimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSetMultimap_<K, V> = $AbstractSetMultimap$$Type<(K), (V)>;
}}
declare module "com.google.common.collect.ImmutableMultimap$Builder" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ImmutableMultimap, $ImmutableMultimap$$Type} from "com.google.common.collect.ImmutableMultimap"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $ImmutableMultimap$Builder<K, V> {

constructor()

public "build"(): $ImmutableMultimap<(K), (V)>
public "put"(key: K, value: V): $ImmutableMultimap$Builder<(K), (V)>
public "put"(entry: $Map$Entry$$Type<(K), (V)>): $ImmutableMultimap$Builder<(K), (V)>
public "putAll"(multimap: $Multimap$$Type<(K), (V)>): $ImmutableMultimap$Builder<(K), (V)>
public "putAll"(key: K, ...values: (V)[]): $ImmutableMultimap$Builder<(K), (V)>
public "putAll"(entries: $Iterable$$Type<($Map$Entry$$Type<(K), (V)>)>): $ImmutableMultimap$Builder<(K), (V)>
public "putAll"(key: K, values: $Iterable$$Type<(V)>): $ImmutableMultimap$Builder<(K), (V)>
public "orderValuesBy"(valueComparator: $Comparator$$Type<(V)>): $ImmutableMultimap$Builder<(K), (V)>
public "orderKeysBy"(keyComparator: $Comparator$$Type<(K)>): $ImmutableMultimap$Builder<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableMultimap$Builder$$Type<K, V> = ($ImmutableMultimap$Builder<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableMultimap$Builder_<K, V> = $ImmutableMultimap$Builder$$Type<(K), (V)>;
}}
declare module "com.google.common.reflect.TypeParameter" {
import {$TypeCapture, $TypeCapture$$Type} from "com.google.common.reflect.TypeCapture"

export class $TypeParameter<T> extends $TypeCapture<(T)> {


public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeParameter$$Type<T> = ($TypeParameter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeParameter_<T> = $TypeParameter$$Type<(T)>;
}}
declare module "com.google.common.collect.UnmodifiableIterator" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $UnmodifiableIterator<E> implements $Iterator<(E)> {


/**
 * 
 * @deprecated
 */
public "remove"(): void
public "forEachRemaining"(arg0: $Consumer$$Type<(E)>): void
public "hasNext"(): boolean
public "next"(): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnmodifiableIterator$$Type<E> = ($UnmodifiableIterator<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnmodifiableIterator_<E> = $UnmodifiableIterator$$Type<(E)>;
}}
declare module "com.google.gson.JsonArray" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$BigInteger, $BigInteger$$Type} from "java.math.BigInteger"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$BigDecimal, $BigDecimal$$Type} from "java.math.BigDecimal"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $JsonArray extends $JsonElement implements $Iterable<($JsonElement)> {

constructor()
constructor(arg0: integer)

public "asList"(): $List<($JsonElement)>
public "remove"(arg0: integer): $JsonElement
public "remove"(arg0: $JsonElement$$Type): boolean
public "size"(): integer
public "get"(arg0: integer): $JsonElement
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "add"(arg0: number): void
public "add"(arg0: boolean): void
public "add"(arg0: $JsonElement$$Type): void
public "add"(arg0: character): void
public "add"(arg0: StringJS): void
public "iterator"(): $Iterator<($JsonElement)>
public "contains"(arg0: $JsonElement$$Type): boolean
public "addAll"(arg0: $JsonArray$$Type): void
public "set"(arg0: integer, arg1: $JsonElement$$Type): $JsonElement
public "getAsByte"(): byte
/**
 * 
 * @deprecated
 */
public "getAsCharacter"(): character
public "deepCopy"(): $JsonElement
public "getAsFloat"(): float
public "getAsShort"(): short
public "getAsString"(): StringJS
public "getAsBoolean"(): boolean
public "getAsDouble"(): double
public "getAsInt"(): integer
public "getAsLong"(): long
public "getAsNumber"(): number
public "getAsBigDecimal"(): $BigDecimal
public "getAsBigInteger"(): $BigInteger
public "spliterator"(): $Spliterator<($JsonElement)>
public "forEach"(arg0: $Consumer$$Type<($JsonElement)>): void
[Symbol.iterator](): IterableIterator<$JsonElement>;
get "empty"(): boolean
get "asByte"(): byte
get "asCharacter"(): character
get "asFloat"(): float
get "asShort"(): short
get "asString"(): StringJS
get "asBoolean"(): boolean
get "asDouble"(): double
get "asInt"(): integer
get "asLong"(): long
get "asNumber"(): number
get "asBigDecimal"(): $BigDecimal
get "asBigInteger"(): $BigInteger
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonArray$$Type = ((any)[]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonArray_ = $JsonArray$$Type;
}}
declare module "com.google.common.collect.ImmutableMultimap" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$ImmutableMultiset, $ImmutableMultiset$$Type} from "com.google.common.collect.ImmutableMultiset"
import {$BaseImmutableMultimap, $BaseImmutableMultimap$$Type} from "com.google.common.collect.BaseImmutableMultimap"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$$Type} from "com.google.common.collect.ImmutableMultimap$Builder"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$ImmutableCollection, $ImmutableCollection$$Type} from "com.google.common.collect.ImmutableCollection"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"

export class $ImmutableMultimap<K, V> extends $BaseImmutableMultimap<(K), (V)> implements $Serializable {


/**
 * 
 * @deprecated
 */
public "removeAll"(key: any): $Collection<(any)>
/**
 * 
 * @deprecated
 */
public "remove"(key: any, value: any): boolean
public "size"(): integer
public "get"(key: any): $Collection<(any)>
/**
 * 
 * @deprecated
 */
public "put"(key: K, value: V): boolean
public "equals"(object: any): boolean
public "toString"(): StringJS
public "values"(): $ImmutableCollection<(V)>
public "hashCode"(): integer
public static "copyOf"<K, V>(entries: $Iterable$$Type<($Map$Entry$$Type<(K), (V)>)>): $ImmutableMultimap<(K), (V)>
public static "copyOf"<K, V>(multimap: $Multimap$$Type<(K), (V)>): $ImmutableMultimap<(K), (V)>
/**
 * 
 * @deprecated
 */
public "clear"(): void
public "isEmpty"(): boolean
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V): $ImmutableMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V, k5: K, v5: V): $ImmutableMultimap<(K), (V)>
public static "of"<K, V>(): $ImmutableMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V): $ImmutableMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V): $ImmutableMultimap<(K), (V)>
public static "of"<K, V>(k1: K, v1: V, k2: K, v2: V, k3: K, v3: V, k4: K, v4: V): $ImmutableMultimap<(K), (V)>
public static "builder"<K, V>(): $ImmutableMultimap$Builder<(K), (V)>
/**
 * 
 * @deprecated
 */
public "putAll"(multimap: $Multimap$$Type<(K), (V)>): boolean
/**
 * 
 * @deprecated
 */
public "putAll"(key: K, values: $Iterable$$Type<(V)>): boolean
public "forEach"(action: $BiConsumer$$Type<(K), (V)>): void
public "containsKey"(key: any): boolean
public "keys"(): $ImmutableMultiset<(K)>
public "keySet"(): $Set<(any)>
public "containsValue"(value: any): boolean
public "entries"(): $Collection<(any)>
public "asMap"(): $Map<(any), (any)>
public "inverse"(): $ImmutableMultimap<(V), (K)>
public "containsEntry"(key: any, value: any): boolean
/**
 * 
 * @deprecated
 */
public "replaceValues"(key: any, values: $Iterable$$Type<(any)>): $Collection<(any)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableMultimap$$Type<K, V> = ($ImmutableMultimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableMultimap_<K, V> = $ImmutableMultimap$$Type<(K), (V)>;
}}
declare module "com.google.common.collect.Table$Cell" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Table$Cell<R, C, V> {

 "equals"(obj: any): boolean
 "hashCode"(): integer
 "getValue"(): V
 "getRowKey"(): R
 "getColumnKey"(): C
get "value"(): V
get "rowKey"(): R
get "columnKey"(): C
}

export namespace $Table$Cell {
const probejs$$marker: never
}
export class $Table$Cell$$Static<R, C, V> implements $Table$Cell {


 "equals"(obj: any): boolean
 "hashCode"(): integer
 "getValue"(): V
 "getRowKey"(): R
 "getColumnKey"(): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Table$Cell$$Type<R, C, V> = ($Table$Cell<(R), (C), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Table$Cell_<R, C, V> = $Table$Cell$$Type<(R), (C), (V)>;
}}
declare module "com.google.gson.TypeAdapterFactory" {
import {$Gson, $Gson$$Type} from "com.google.gson.Gson"
import {$TypeAdapter, $TypeAdapter$$Type} from "com.google.gson.TypeAdapter"
import {$TypeToken, $TypeToken$$Type} from "com.google.gson.reflect.TypeToken"

export interface $TypeAdapterFactory {

 "create"<T>(arg0: $Gson$$Type, arg1: $TypeToken$$Type<(T)>): $TypeAdapter<(T)>

(arg0: $Gson, arg1: $TypeToken<(T)>): $TypeAdapter$$Type<(T)>
}

export namespace $TypeAdapterFactory {
const probejs$$marker: never
}
export class $TypeAdapterFactory$$Static implements $TypeAdapterFactory {


 "create"<T>(arg0: $Gson$$Type, arg1: $TypeToken$$Type<(T)>): $TypeAdapter<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeAdapterFactory$$Type = ((arg0: $Gson, arg1: $TypeToken<(T)>) => $TypeAdapter$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeAdapterFactory_ = $TypeAdapterFactory$$Type;
}}
declare module "com.google.common.collect.BiMap" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export interface $BiMap<K, V> extends $Map<(K), (V)> {

 "put"(key: K, value: V): V
 "values"(): $Collection<(any)>
 "putAll"(map: $Map$$Type<(K), (V)>): void
 "inverse"(): $BiMap<(V), (K)>
 "forcePut"(key: K, value: V): V
 "remove"(arg0: any, arg1: any): boolean
 "remove"(arg0: any): V
 "size"(): integer
 "get"(arg0: any): V
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "replace"(arg0: K, arg1: V): V
 "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
 "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
 "keySet"(): $Set<(K)>
 "containsValue"(arg0: any): boolean
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
[index: string | number]: V
get "empty"(): boolean
}

export namespace $BiMap {
function copyOf<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
function of<K, V>(): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
function entry<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
function ofEntries<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
const probejs$$marker: never
}
export class $BiMap$$Static<K, V> implements $BiMap {


 "put"(key: K, value: V): V
 "values"(): $Collection<(any)>
 "putAll"(map: $Map$$Type<(K), (V)>): void
 "inverse"(): $BiMap<(V), (K)>
 "forcePut"(key: K, value: V): V
 "remove"(arg0: any, arg1: any): boolean
 "remove"(arg0: any): V
 "size"(): integer
 "get"(arg0: any): V
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
 "clear"(): void
 "isEmpty"(): boolean
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "replace"(arg0: K, arg1: V): V
 "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
static "of"<K, V>(): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
 "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
 "keySet"(): $Set<(K)>
 "containsValue"(arg0: any): boolean
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiMap$$Type<K, V> = ($BiMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiMap_<K, V> = $BiMap$$Type<(K), (V)>;
}}
declare module "com.google.gson.FieldAttributes" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Annotation, $Annotation$$Type} from "java.lang.annotation.Annotation"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Field, $Field$$Type} from "java.lang.reflect.Field"

export class $FieldAttributes {

constructor(arg0: $Field$$Type)

public "getName"(): StringJS
public "toString"(): StringJS
public "getDeclaringClass"(): $Class<(any)>
public "getAnnotation"<T extends $Annotation>(arg0: $Class$$Type<(T)>): T
public "getAnnotations"(): $Collection<($Annotation)>
public "hasModifier"(arg0: integer): boolean
public "getDeclaredType"(): $Type
public "getDeclaredClass"(): $Class<(any)>
get "name"(): StringJS
get "declaringClass"(): $Class<(any)>
get "annotations"(): $Collection<($Annotation)>
get "declaredType"(): $Type
get "declaredClass"(): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldAttributes$$Type = ($FieldAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieldAttributes_ = $FieldAttributes$$Type;
}}
declare module "com.google.common.collect.ImmutableSet" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$ImmutableCollection, $ImmutableCollection$$Type} from "com.google.common.collect.ImmutableCollection"
import {$Collector, $Collector$$Type} from "java.util.stream.Collector"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ImmutableSet$Builder, $ImmutableSet$Builder$$Type} from "com.google.common.collect.ImmutableSet$Builder"

export class $ImmutableSet<E> extends $ImmutableCollection<(E)> implements $Set<(E)> {


public "equals"(object: any): boolean
public "hashCode"(): integer
public static "copyOf"<E>(elements: $Collection$$Type<(E)>): $ImmutableSet<(E)>
public static "copyOf"<E>(elements: $Iterable$$Type<(E)>): $ImmutableSet<(E)>
public static "copyOf"<E>(elements: $Iterator$$Type<(E)>): $ImmutableSet<(E)>
public static "copyOf"<E>(elements: (E)[]): $ImmutableSet<(E)>
public "iterator"(): $Iterator<(any)>
public static "of"<E>(e1: E, e2: E, e3: E, e4: E): $ImmutableSet<(E)>
public static "of"<E>(e1: E, e2: E, e3: E): $ImmutableSet<(E)>
public static "of"<E>(): $ImmutableSet<(E)>
public static "of"<E>(element: E): $ImmutableSet<(E)>
public static "of"<E>(e1: E, e2: E): $ImmutableSet<(E)>
public static "of"<E>(e1: E, e2: E, e3: E, e4: E, e5: E): $ImmutableSet<(E)>
public static "of"<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, ...others: (E)[]): $ImmutableSet<(E)>
public static "builder"<E>(): $ImmutableSet$Builder<(E)>
public static "toImmutableSet"<E>(): $Collector<(E), (any), ($ImmutableSet<(E)>)>
public static "builderWithExpectedSize"<E>(expectedSize: integer): $ImmutableSet$Builder<(E)>
public "removeAll"(arg0: $Collection$$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$$Type<(any)>): boolean
public "remove"(arg0: any): boolean
public "size"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: E): boolean
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(...arg0: (E)[]): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableSet$$Type<E> = ($ImmutableSet<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableSet_<E> = $ImmutableSet$$Type<(E)>;
}}
declare module "com.google.gson.JsonDeserializer" {
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$JsonDeserializationContext, $JsonDeserializationContext$$Type} from "com.google.gson.JsonDeserializationContext"

export interface $JsonDeserializer<T> {

 "deserialize"(arg0: $JsonElement$$Type, arg1: $Type$$Type, arg2: $JsonDeserializationContext$$Type): T

(arg0: $JsonElement, arg1: $Type, arg2: $JsonDeserializationContext): T
}

export namespace $JsonDeserializer {
const probejs$$marker: never
}
export class $JsonDeserializer$$Static<T> implements $JsonDeserializer {


 "deserialize"(arg0: $JsonElement$$Type, arg1: $Type$$Type, arg2: $JsonDeserializationContext$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonDeserializer$$Type<T> = ((arg0: $JsonElement, arg1: $Type, arg2: $JsonDeserializationContext) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonDeserializer_<T> = $JsonDeserializer$$Type<(T)>;
}}
declare module "com.google.common.reflect.TypeCapture" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TypeCapture<T> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeCapture$$Type<T> = ($TypeCapture<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeCapture_<T> = $TypeCapture$$Type<(T)>;
}}
declare module "com.google.common.collect.Multimap" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Multiset, $Multiset$$Type} from "com.google.common.collect.Multiset"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export interface $Multimap<K, V> {

 "removeAll"(key: any): $Collection<(V)>
 "remove"(key: any, value: any): boolean
 "size"(): integer
 "get"(key: K): $Collection<(V)>
 "put"(key: K, value: V): boolean
 "equals"(obj: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "putAll"(key: K, values: $Iterable$$Type<(V)>): boolean
 "putAll"(multimap: $Multimap$$Type<(K), (V)>): boolean
 "forEach"(action: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(key: any): boolean
 "keys"(): $Multiset<(K)>
 "keySet"(): $Set<(K)>
 "containsValue"(value: any): boolean
 "entries"(): $Collection<($Map$Entry<(K), (V)>)>
 "asMap"(): $Map<(K), ($Collection<(V)>)>
 "containsEntry"(key: any, value: any): boolean
 "replaceValues"(key: K, values: $Iterable$$Type<(V)>): $Collection<(V)>
get "empty"(): boolean
}

export namespace $Multimap {
const probejs$$marker: never
}
export class $Multimap$$Static<K, V> implements $Multimap {


 "removeAll"(key: any): $Collection<(V)>
 "remove"(key: any, value: any): boolean
 "size"(): integer
 "get"(key: K): $Collection<(V)>
 "put"(key: K, value: V): boolean
 "equals"(obj: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "putAll"(key: K, values: $Iterable$$Type<(V)>): boolean
 "putAll"(multimap: $Multimap$$Type<(K), (V)>): boolean
 "forEach"(action: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(key: any): boolean
 "keys"(): $Multiset<(K)>
 "keySet"(): $Set<(K)>
 "containsValue"(value: any): boolean
 "entries"(): $Collection<($Map$Entry<(K), (V)>)>
 "asMap"(): $Map<(K), ($Collection<(V)>)>
 "containsEntry"(key: any, value: any): boolean
 "replaceValues"(key: K, values: $Iterable$$Type<(V)>): $Collection<(V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Multimap$$Type<K, V> = ($Multimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Multimap_<K, V> = $Multimap$$Type<(K), (V)>;
}}
declare module "com.google.common.base.Predicate" {
import {$Predicate as $Predicate$0, $Predicate$$Type as $Predicate$0$$Type} from "java.util.function.Predicate"

export interface $Predicate<T> extends $Predicate$0<(T)> {

 "equals"(object: any): boolean
 "test"(input: T): boolean
 "apply"(input: T): boolean
 "or"(arg0: $Predicate$0$$Type<(T)>): $Predicate$0<(T)>
 "negate"(): $Predicate$0<(T)>
 "and"(arg0: $Predicate$0$$Type<(T)>): $Predicate$0<(T)>
}

export namespace $Predicate {
function not<T>(arg0: $Predicate$0$$Type<(T)>): $Predicate$0<(T)>
function isEqual<T>(arg0: any): $Predicate$0<(T)>
const probejs$$marker: never
}
export class $Predicate$$Static<T> implements $Predicate {


 "equals"(object: any): boolean
 "test"(input: T): boolean
 "apply"(input: T): boolean
 "or"(arg0: $Predicate$0$$Type<(T)>): $Predicate$0<(T)>
static "not"<T>(arg0: $Predicate$0$$Type<(T)>): $Predicate$0<(T)>
 "negate"(): $Predicate$0<(T)>
 "and"(arg0: $Predicate$0$$Type<(T)>): $Predicate$0<(T)>
static "isEqual"<T>(arg0: any): $Predicate$0<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Predicate$$Type<T> = ($Predicate<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Predicate_<T> = $Predicate$$Type<(T)>;
}}
declare module "com.google.common.reflect.TypeToken$TypeSet" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ForwardingSet, $ForwardingSet$$Type} from "com.google.common.collect.ForwardingSet"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Set, $Set$$Type} from "java.util.Set"
import {$TypeToken, $TypeToken$$Type} from "com.google.common.reflect.TypeToken"

export class $TypeToken$TypeSet extends $ForwardingSet<($TypeToken<(T)>)> implements $Serializable {


public "interfaces"(): $TypeToken$TypeSet<>
public "classes"(): $TypeToken$TypeSet<>
public "rawTypes"(): $Set<($Class<(T)>)>
public "removeAll"(arg0: $Collection$$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$$Type<(any)>): boolean
public "remove"(arg0: any): boolean
public "size"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: E): boolean
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E): $Set<(E)>
public static "of"<E>(...arg0: (E)[]): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(): $Set<(E)>
public static "of"<E>(arg0: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeToken$TypeSet$$Type = ($TypeToken$TypeSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeToken$TypeSet_ = $TypeToken$TypeSet$$Type;
}}
declare module "com.google.common.collect.ImmutableMultiset" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$UnmodifiableIterator, $UnmodifiableIterator$$Type} from "com.google.common.collect.UnmodifiableIterator"
import {$ImmutableList, $ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$ImmutableMultiset$Builder, $ImmutableMultiset$Builder$$Type} from "com.google.common.collect.ImmutableMultiset$Builder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ToIntFunction, $ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ObjIntConsumer, $ObjIntConsumer$$Type} from "java.util.function.ObjIntConsumer"
import {$Collector, $Collector$$Type} from "java.util.stream.Collector"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Multiset, $Multiset$$Type} from "com.google.common.collect.Multiset"
import {$ImmutableMultisetGwtSerializationDependencies, $ImmutableMultisetGwtSerializationDependencies$$Type} from "com.google.common.collect.ImmutableMultisetGwtSerializationDependencies"

export class $ImmutableMultiset<E> extends $ImmutableMultisetGwtSerializationDependencies<(E)> implements $Multiset<(E)> {


public "asList"(): $ImmutableList<(E)>
/**
 * 
 * @deprecated
 */
public "remove"(element: any, occurrences: integer): integer
public "equals"(object: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "copyOf"<E>(elements: $Iterable$$Type<(E)>): $ImmutableMultiset<(E)>
public static "copyOf"<E>(elements: $Iterator$$Type<(E)>): $ImmutableMultiset<(E)>
public static "copyOf"<E>(elements: (E)[]): $ImmutableMultiset<(E)>
/**
 * 
 * @deprecated
 */
public "add"(element: E, occurrences: integer): integer
public "iterator"(): $UnmodifiableIterator<(E)>
public static "of"<E>(element: E): $ImmutableMultiset<(E)>
public static "of"<E>(e1: E, e2: E, e3: E): $ImmutableMultiset<(E)>
public static "of"<E>(): $ImmutableMultiset<(E)>
public static "of"<E>(e1: E, e2: E, e3: E, e4: E): $ImmutableMultiset<(E)>
public static "of"<E>(e1: E, e2: E, e3: E, e4: E, e5: E): $ImmutableMultiset<(E)>
public static "of"<E>(e1: E, e2: E, e3: E, e4: E, e5: E, e6: E, ...others: (E)[]): $ImmutableMultiset<(E)>
public static "of"<E>(e1: E, e2: E): $ImmutableMultiset<(E)>
public static "builder"<E>(): $ImmutableMultiset$Builder<(E)>
public "contains"(object: any): boolean
public "entrySet"(): $Set<(any)>
public "elementSet"(): $Set<(any)>
/**
 * 
 * @deprecated
 */
public "setCount"(element: E, count: integer): integer
/**
 * 
 * @deprecated
 */
public "setCount"(element: E, oldCount: integer, newCount: integer): boolean
public static "toImmutableMultiset"<E>(): $Collector<(E), (any), ($ImmutableMultiset<(E)>)>
public static "toImmutableMultiset"<T, E>(elementFunction: $Function$$Type<(T), (E)>, countFunction: $ToIntFunction$$Type<(T)>): $Collector<(T), (any), ($ImmutableMultiset<(E)>)>
public "removeAll"(c: $Collection$$Type<(any)>): boolean
public "retainAll"(c: $Collection$$Type<(any)>): boolean
public "containsAll"(elements: $Collection$$Type<(any)>): boolean
public "forEachEntry"(action: $ObjIntConsumer$$Type<(E)>): void
public "remove"(element: any): boolean
public "size"(): integer
public "add"(element: E): boolean
public "count"(element: any): integer
public "spliterator"(): $Spliterator<(E)>
public "forEach"(action: $Consumer$$Type<(E)>): void
public "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
public "clear"(): void
public "isEmpty"(): boolean
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableMultiset$$Type<E> = ($ImmutableMultiset<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableMultiset_<E> = $ImmutableMultiset$$Type<(E)>;
}}
declare module "com.google.common.cache.CacheStats" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CacheStats {

constructor(hitCount: long, missCount: long, loadSuccessCount: long, loadExceptionCount: long, totalLoadTime: long, evictionCount: long)

public "minus"(other: $CacheStats$$Type): $CacheStats
public "plus"(other: $CacheStats$$Type): $CacheStats
public "equals"(object: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "totalLoadTime"(): long
public "evictionCount"(): long
public "requestCount"(): long
public "hitRate"(): double
public "missRate"(): double
public "loadCount"(): long
public "missCount"(): long
public "hitCount"(): long
public "loadSuccessCount"(): long
public "loadExceptionCount"(): long
public "loadExceptionRate"(): double
public "averageLoadPenalty"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CacheStats$$Type = ($CacheStats);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CacheStats_ = $CacheStats$$Type;
}}
declare module "com.google.gson.ToNumberStrategy" {
import {$JsonReader, $JsonReader$$Type} from "com.google.gson.stream.JsonReader"

export interface $ToNumberStrategy {

 "readNumber"(arg0: $JsonReader$$Type): number

(arg0: $JsonReader): number
}

export namespace $ToNumberStrategy {
const probejs$$marker: never
}
export class $ToNumberStrategy$$Static implements $ToNumberStrategy {


 "readNumber"(arg0: $JsonReader$$Type): number
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToNumberStrategy$$Type = ((arg0: $JsonReader) => number);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToNumberStrategy_ = $ToNumberStrategy$$Type;
}}
declare module "com.google.common.collect.ImmutableSet$Builder" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ImmutableCollection, $ImmutableCollection$$Type} from "com.google.common.collect.ImmutableCollection"
import {$ImmutableCollection$Builder, $ImmutableCollection$Builder$$Type} from "com.google.common.collect.ImmutableCollection$Builder"

export class $ImmutableSet$Builder<E> extends $ImmutableCollection$Builder<(E)> {

constructor()

public "build"(): $ImmutableCollection<(any)>
public "add"(element: any): $ImmutableCollection$Builder<(any)>
public "add"(...elements: (E)[]): $ImmutableSet$Builder<(E)>
public "addAll"(elements: $Iterable$$Type<(E)>): $ImmutableSet$Builder<(E)>
public "addAll"(elements: $Iterator$$Type<(any)>): $ImmutableCollection$Builder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableSet$Builder$$Type<E> = ($ImmutableSet$Builder<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableSet$Builder_<E> = $ImmutableSet$Builder$$Type<(E)>;
}}
declare module "com.google.gson.FieldNamingStrategy" {
import {$Field, $Field$$Type} from "java.lang.reflect.Field"

export interface $FieldNamingStrategy {

 "translateName"(arg0: $Field$$Type): StringJS

(arg0: $Field): StringJS
}

export namespace $FieldNamingStrategy {
const probejs$$marker: never
}
export class $FieldNamingStrategy$$Static implements $FieldNamingStrategy {


 "translateName"(arg0: $Field$$Type): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldNamingStrategy$$Type = ((arg0: $Field) => StringJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieldNamingStrategy_ = $FieldNamingStrategy$$Type;
}}
declare module "com.google.common.collect.ImmutableSetMultimap$Builder" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$$Type} from "com.google.common.collect.ImmutableMultimap$Builder"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Multimap, $Multimap$$Type} from "com.google.common.collect.Multimap"
import {$ImmutableSetMultimap, $ImmutableSetMultimap$$Type} from "com.google.common.collect.ImmutableSetMultimap"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $ImmutableSetMultimap$Builder<K, V> extends $ImmutableMultimap$Builder<(K), (V)> {

constructor()

public "build"(): $ImmutableSetMultimap<(K), (V)>
public "put"(entry: $Map$Entry$$Type<(any), (any)>): $ImmutableMultimap$Builder<(any), (any)>
public "put"(key: any, value: any): $ImmutableMultimap$Builder<(any), (any)>
public "putAll"(multimap: $Multimap$$Type<(any), (any)>): $ImmutableMultimap$Builder<(any), (any)>
public "putAll"(entries: $Iterable$$Type<($Map$Entry$$Type<(K), (V)>)>): $ImmutableSetMultimap$Builder<(K), (V)>
public "putAll"(key: K, values: $Iterable$$Type<(V)>): $ImmutableSetMultimap$Builder<(K), (V)>
public "putAll"(key: any, values: (any)[]): $ImmutableMultimap$Builder<(any), (any)>
public "orderValuesBy"(valueComparator: $Comparator$$Type<(V)>): $ImmutableSetMultimap$Builder<(K), (V)>
public "orderKeysBy"(keyComparator: $Comparator$$Type<(K)>): $ImmutableSetMultimap$Builder<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableSetMultimap$Builder$$Type<K, V> = ($ImmutableSetMultimap$Builder<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableSetMultimap$Builder_<K, V> = $ImmutableSetMultimap$Builder$$Type<(K), (V)>;
}}
declare module "com.google.gson.ReflectionAccessFilter" {
import {$ReflectionAccessFilter$FilterResult, $ReflectionAccessFilter$FilterResult$$Type} from "com.google.gson.ReflectionAccessFilter$FilterResult"
import {$Class, $Class$$Type} from "java.lang.Class"

export interface $ReflectionAccessFilter {

 "check"(arg0: $Class$$Type<(any)>): $ReflectionAccessFilter$FilterResult

(arg0: $Class<(any)>): $ReflectionAccessFilter$FilterResult$$Type
}

export namespace $ReflectionAccessFilter {
const BLOCK_INACCESSIBLE_JAVA: $ReflectionAccessFilter
const BLOCK_ALL_ANDROID: $ReflectionAccessFilter
const BLOCK_ALL_PLATFORM: $ReflectionAccessFilter
const BLOCK_ALL_JAVA: $ReflectionAccessFilter
const probejs$$marker: never
}
export class $ReflectionAccessFilter$$Static implements $ReflectionAccessFilter {
static readonly "BLOCK_INACCESSIBLE_JAVA": $ReflectionAccessFilter
static readonly "BLOCK_ALL_ANDROID": $ReflectionAccessFilter
static readonly "BLOCK_ALL_PLATFORM": $ReflectionAccessFilter
static readonly "BLOCK_ALL_JAVA": $ReflectionAccessFilter


 "check"(arg0: $Class$$Type<(any)>): $ReflectionAccessFilter$FilterResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReflectionAccessFilter$$Type = ((arg0: $Class<(any)>) => $ReflectionAccessFilter$FilterResult$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReflectionAccessFilter_ = $ReflectionAccessFilter$$Type;
}}
declare module "com.google.common.collect.ForwardingCollection" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$ForwardingObject, $ForwardingObject$$Type} from "com.google.common.collect.ForwardingObject"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export class $ForwardingCollection<E> extends $ForwardingObject implements $Collection<(E)> {


public "removeAll"(collection: $Collection$$Type<(any)>): boolean
public "retainAll"(collection: $Collection$$Type<(any)>): boolean
public "containsAll"(collection: $Collection$$Type<(any)>): boolean
public "remove"(object: any): boolean
public "size"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "add"(element: E): boolean
public "toArray"<T>(array: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<(E)>
public "contains"(object: any): boolean
public "addAll"(collection: $Collection$$Type<(E)>): boolean
public "parallelStream"(): $Stream<(E)>
public "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
public "stream"(): $Stream<(E)>
public "spliterator"(): $Spliterator<(E)>
public "forEach"(arg0: $Consumer$$Type<(E)>): void
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForwardingCollection$$Type<E> = ($ForwardingCollection<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForwardingCollection_<E> = $ForwardingCollection$$Type<(E)>;
}}
declare module "com.google.common.cache.Cache" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$CacheStats, $CacheStats$$Type} from "com.google.common.cache.CacheStats"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ConcurrentMap, $ConcurrentMap$$Type} from "java.util.concurrent.ConcurrentMap"
import {$ImmutableMap, $ImmutableMap$$Type} from "com.google.common.collect.ImmutableMap"

export interface $Cache<K, V> {

 "invalidate"(key: any): void
 "size"(): long
 "get"(key: K, loader: $Callable$$Type<(V)>): V
 "put"(key: K, value: V): void
 "putAll"(m: $Map$$Type<(K), (V)>): void
 "asMap"(): $ConcurrentMap<(K), (V)>
 "stats"(): $CacheStats
 "cleanUp"(): void
 "getIfPresent"(key: any): V
 "getAllPresent"(keys: $Iterable$$Type<(any)>): $ImmutableMap<(K), (V)>
 "invalidateAll"(keys: $Iterable$$Type<(any)>): void
 "invalidateAll"(): void
}

export namespace $Cache {
const probejs$$marker: never
}
export class $Cache$$Static<K, V> implements $Cache {


 "invalidate"(key: any): void
 "size"(): long
 "get"(key: K, loader: $Callable$$Type<(V)>): V
 "put"(key: K, value: V): void
 "putAll"(m: $Map$$Type<(K), (V)>): void
 "asMap"(): $ConcurrentMap<(K), (V)>
 "stats"(): $CacheStats
 "cleanUp"(): void
 "getIfPresent"(key: any): V
 "getAllPresent"(keys: $Iterable$$Type<(any)>): $ImmutableMap<(K), (V)>
 "invalidateAll"(keys: $Iterable$$Type<(any)>): void
 "invalidateAll"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cache$$Type<K, V> = ($Cache<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cache_<K, V> = $Cache$$Type<(K), (V)>;
}}
declare module "com.google.gson.internal.Excluder" {
import {$ExclusionStrategy, $ExclusionStrategy$$Type} from "com.google.gson.ExclusionStrategy"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$TypeAdapterFactory, $TypeAdapterFactory$$Type} from "com.google.gson.TypeAdapterFactory"
import {$Field, $Field$$Type} from "java.lang.reflect.Field"
import {$Gson, $Gson$$Type} from "com.google.gson.Gson"
import {$TypeAdapter, $TypeAdapter$$Type} from "com.google.gson.TypeAdapter"
import {$TypeToken, $TypeToken$$Type} from "com.google.gson.reflect.TypeToken"

export class $Excluder implements $TypeAdapterFactory, $Cloneable {
static readonly "DEFAULT": $Excluder

constructor()

public "create"<T>(arg0: $Gson$$Type, arg1: $TypeToken$$Type<(T)>): $TypeAdapter<(T)>
public "withVersion"(arg0: double): $Excluder
public "withModifiers"(...arg0: (integer)[]): $Excluder
public "excludeClass"(arg0: $Class$$Type<(any)>, arg1: boolean): boolean
public "excludeField"(arg0: $Field$$Type, arg1: boolean): boolean
public "withExclusionStrategy"(arg0: $ExclusionStrategy$$Type, arg1: boolean, arg2: boolean): $Excluder
public "excludeFieldsWithoutExposeAnnotation"(): $Excluder
public "disableInnerClassSerialization"(): $Excluder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Excluder$$Type = ($Excluder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Excluder_ = $Excluder$$Type;
}}
declare module "com.google.common.collect.ImmutableCollection$Builder" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ImmutableCollection, $ImmutableCollection$$Type} from "com.google.common.collect.ImmutableCollection"

export class $ImmutableCollection$Builder<E> {


public "build"(): $ImmutableCollection<(E)>
public "add"(...elements: (E)[]): $ImmutableCollection$Builder<(E)>
public "add"(element: E): $ImmutableCollection$Builder<(E)>
public "addAll"(elements: $Iterator$$Type<(E)>): $ImmutableCollection$Builder<(E)>
public "addAll"(elements: $Iterable$$Type<(E)>): $ImmutableCollection$Builder<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableCollection$Builder$$Type<E> = ($ImmutableCollection$Builder<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableCollection$Builder_<E> = $ImmutableCollection$Builder$$Type<(E)>;
}}
declare module "com.google.common.reflect.TypeToken" {
import {$TypeCapture, $TypeCapture$$Type} from "com.google.common.reflect.TypeCapture"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Type, $Type$$Type} from "java.lang.reflect.Type"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Constructor, $Constructor$$Type} from "java.lang.reflect.Constructor"
import {$TypeParameter, $TypeParameter$$Type} from "com.google.common.reflect.TypeParameter"
import {$Invokable, $Invokable$$Type} from "com.google.common.reflect.Invokable"
import {$TypeToken$TypeSet, $TypeToken$TypeSet$$Type} from "com.google.common.reflect.TypeToken$TypeSet"
import {$Method, $Method$$Type} from "java.lang.reflect.Method"

export class $TypeToken<T> extends $TypeCapture<(T)> implements $Serializable {


public "unwrap"(): $TypeToken<(T)>
public "getRawType"(): $Class<(T)>
public "where"<X>(typeParam: $TypeParameter$$Type<(X)>, typeArg: $TypeToken$$Type<(X)>): $TypeToken<(T)>
public "where"<X>(typeParam: $TypeParameter$$Type<(X)>, typeArg: $Class$$Type<(X)>): $TypeToken<(T)>
public "equals"(o: any): boolean
public "toString"(): StringJS
public "method"(method: $Method$$Type): $Invokable<(T), (any)>
public "hashCode"(): integer
public "isArray"(): boolean
public "isPrimitive"(): boolean
public "wrap"(): $TypeToken<(T)>
public static "of"<T>(type: $Class$$Type<(T)>): $TypeToken<(T)>
public static "of"(type: $Type$$Type): $TypeToken<(any)>
public "getComponentType"(): $TypeToken<(any)>
public "constructor"(arg0: $Constructor$$Type<(any)>): $Invokable<(T), (T)>
public "getType"(): $Type
public "resolveType"(type: $Type$$Type): $TypeToken<(any)>
public "getSubtype"(subclass: $Class$$Type<(any)>): $TypeToken<(T)>
public "isSubtypeOf"(type: $TypeToken$$Type<(any)>): boolean
public "isSubtypeOf"(supertype: $Type$$Type): boolean
public "getTypes"(): $TypeToken$TypeSet<>
public "isSupertypeOf"(type: $TypeToken$$Type<(any)>): boolean
public "isSupertypeOf"(type: $Type$$Type): boolean
public "getSupertype"(superclass: $Class$$Type<(T)>): $TypeToken<(T)>
get "rawType"(): $Class<(T)>
get "array"(): boolean
get "primitive"(): boolean
get "componentType"(): $TypeToken<(any)>
get "type"(): $Type
get "types"(): $TypeToken$TypeSet<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeToken$$Type<T> = ($TypeToken<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeToken_<T> = $TypeToken$$Type<(T)>;
}}
declare module "com.google.gson.JsonObject" {
import {$JsonPrimitive, $JsonPrimitive$$Type} from "com.google.gson.JsonPrimitive"
import {$Map, $Map$$Type} from "java.util.Map"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Set, $Set$$Type} from "java.util.Set"
import {$JsonArray, $JsonArray$$Type} from "com.google.gson.JsonArray"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $JsonObject extends $JsonElement {

constructor()

public "has"(arg0: StringJS): boolean
public "remove"(arg0: StringJS): $JsonElement
public "size"(): integer
public "get"(arg0: StringJS): $JsonElement
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "add"(arg0: StringJS, arg1: $JsonElement$$Type): void
public "entrySet"(): $Set<($Map$Entry<(StringJS), ($JsonElement)>)>
public "keySet"(): $Set<(StringJS)>
public "asMap"(): $Map<(StringJS), ($JsonElement)>
public "deepCopy"(): $JsonElement
public "getAsJsonArray"(arg0: StringJS): $JsonArray
public "addProperty"(arg0: StringJS, arg1: number): void
public "addProperty"(arg0: StringJS, arg1: boolean): void
public "addProperty"(arg0: StringJS, arg1: StringJS): void
public "addProperty"(arg0: StringJS, arg1: character): void
public "getAsJsonPrimitive"(arg0: StringJS): $JsonPrimitive
public "getAsJsonObject"(arg0: StringJS): $JsonObject
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonObject$$Type = (object);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonObject_ = $JsonObject$$Type;
}}
