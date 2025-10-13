declare module "java.util.PrimitiveIterator$OfLong" {
import {$LongConsumer, $LongConsumer$$Type} from "java.util.function.LongConsumer"
import {$PrimitiveIterator, $PrimitiveIterator$$Type} from "java.util.PrimitiveIterator"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $PrimitiveIterator$OfLong extends $PrimitiveIterator<(long), ($LongConsumer)> {

 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $LongConsumer$$Type): void
 "forEachRemaining"(arg0: $Consumer$$Type<(long)>): void
 "next"(): any
 "nextLong"(): long
 "remove"(): void
 "hasNext"(): boolean
}

export namespace $PrimitiveIterator$OfLong {
const probejs$$marker: never
}
export class $PrimitiveIterator$OfLong$$Static implements $PrimitiveIterator$OfLong {


 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $LongConsumer$$Type): void
 "forEachRemaining"(arg0: $Consumer$$Type<(long)>): void
 "next"(): any
 "nextLong"(): long
 "remove"(): void
 "hasNext"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimitiveIterator$OfLong$$Type = ($PrimitiveIterator$OfLong);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrimitiveIterator$OfLong_ = $PrimitiveIterator$OfLong$$Type;
}}
declare module "java.util.stream.BaseStream" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export interface $BaseStream<T, S extends $BaseStream<(T), (S)>> extends $AutoCloseable {

 "isParallel"(): boolean
 "onClose"(arg0: $Runnable$$Type): S
 "parallel"(): S
 "sequential"(): S
 "unordered"(): S
 "iterator"(): $Iterator<(T)>
 "spliterator"(): $Spliterator<(T)>
 "close"(): void
}

export namespace $BaseStream {
const probejs$$marker: never
}
export class $BaseStream$$Static<T, S extends $BaseStream<(T), (S)>> implements $BaseStream {


 "isParallel"(): boolean
 "onClose"(arg0: $Runnable$$Type): S
 "parallel"(): S
 "sequential"(): S
 "unordered"(): S
 "iterator"(): $Iterator<(T)>
 "spliterator"(): $Spliterator<(T)>
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseStream$$Type<T, S> = ($BaseStream<(T), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseStream_<T, S> = $BaseStream$$Type<(T), (S)>;
}}
declare module "java.util.OptionalDouble" {
import {$DoubleConsumer, $DoubleConsumer$$Type} from "java.util.function.DoubleConsumer"
import {$DoubleSupplier, $DoubleSupplier$$Type} from "java.util.function.DoubleSupplier"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$DoubleStream, $DoubleStream$$Type} from "java.util.stream.DoubleStream"

export class $OptionalDouble {


public "ifPresentOrElse"(arg0: $DoubleConsumer$$Type, arg1: $Runnable$$Type): void
public "orElseGet"(arg0: $DoubleSupplier$$Type): double
public "orElseThrow"<X extends $Throwable>(arg0: $Supplier$$Type<(X)>): double
public "orElseThrow"(): double
public "ifPresent"(arg0: $DoubleConsumer$$Type): void
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "stream"(): $DoubleStream
public static "of"(arg0: double): $OptionalDouble
public static "empty"(): $OptionalDouble
public "isPresent"(): boolean
public "orElse"(arg0: double): double
public "getAsDouble"(): double
get "present"(): boolean
get "asDouble"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionalDouble$$Type = ($OptionalDouble);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OptionalDouble_ = $OptionalDouble$$Type;
}}
declare module "java.util.concurrent.TimeUnit" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$ChronoUnit, $ChronoUnit$$Type} from "java.time.temporal.ChronoUnit"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$Duration, $Duration$$Type} from "java.time.Duration"

export class $TimeUnit extends $Enum<($TimeUnit)> {
static readonly "MILLISECONDS": $TimeUnit
static readonly "MICROSECONDS": $TimeUnit
static readonly "HOURS": $TimeUnit
static readonly "SECONDS": $TimeUnit
static readonly "NANOSECONDS": $TimeUnit
static readonly "DAYS": $TimeUnit
static readonly "MINUTES": $TimeUnit


public "toMicros"(arg0: long): long
public "toSeconds"(arg0: long): long
public "toMinutes"(arg0: long): long
public "toHours"(arg0: long): long
public "toDays"(arg0: long): long
public "timedWait"(arg0: any, arg1: long): void
public "timedJoin"(arg0: $Thread$$Type, arg1: long): void
public "toChronoUnit"(): $ChronoUnit
public static "values"(): ($TimeUnit)[]
public "convert"(arg0: long, arg1: $TimeUnit$$Type): long
public "convert"(arg0: $Duration$$Type): long
public static "valueOf"(arg0: StringJS): $TimeUnit
public static "of"(arg0: $ChronoUnit$$Type): $TimeUnit
public "toNanos"(arg0: long): long
public "toMillis"(arg0: long): long
public "sleep"(arg0: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimeUnit$$Type = (("nanoseconds") | ("microseconds") | ("milliseconds") | ("seconds") | ("minutes") | ("hours") | ("days"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimeUnit_ = $TimeUnit$$Type;
}}
declare module "java.util.Collections$UnmodifiableMap" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $Collections$UnmodifiableMap<K, V> implements $Map<(K), (V)>, $Serializable {


public "remove"(arg0: any, arg1: any): boolean
public "remove"(arg0: any): V
public "size"(): integer
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "equals"(arg0: any): boolean
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: K, arg1: V, arg2: V): boolean
public "replace"(arg0: K, arg1: V): V
public "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public "putAll"(arg0: $Map$$Type<(K), (V)>): void
public "putIfAbsent"(arg0: K, arg1: V): V
public "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
public "containsKey"(arg0: any): boolean
public "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
public "keySet"(): $Set<(K)>
public "containsValue"(arg0: any): boolean
public "getOrDefault"(arg0: any, arg1: V): V
public "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
[index: string | number]: V
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Collections$UnmodifiableMap$$Type<K, V> = ($Collections$UnmodifiableMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Collections$UnmodifiableMap_<K, V> = $Collections$UnmodifiableMap$$Type<(K), (V)>;
}}
declare module "java.util.stream.Stream$Builder" {
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $Stream$Builder<T> extends $Consumer<(T)> {

 "build"(): $Stream<(T)>
 "add"(arg0: T): $Stream$Builder<(T)>
 "accept"(arg0: T): void
 "andThen"(arg0: $Consumer$$Type<(T)>): $Consumer<(T)>
}

export namespace $Stream$Builder {
const probejs$$marker: never
}
export class $Stream$Builder$$Static<T> implements $Stream$Builder {


 "build"(): $Stream<(T)>
 "add"(arg0: T): $Stream$Builder<(T)>
 "accept"(arg0: T): void
 "andThen"(arg0: $Consumer$$Type<(T)>): $Consumer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stream$Builder$$Type<T> = ($Stream$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Stream$Builder_<T> = $Stream$Builder$$Type<(T)>;
}}
declare module "java.util.function.Supplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
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
declare module "java.util.SequencedCollection" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export interface $SequencedCollection<E> extends $Collection<(E)> {

 "reversed"(): $SequencedCollection<(E)>
 "getFirst"(): E
 "getLast"(): E
 "addFirst"(arg0: E): void
 "addLast"(arg0: E): void
 "removeFirst"(): E
 "removeLast"(): E
 "removeAll"(arg0: $Collection$$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$$Type<(any)>): boolean
 "parallelStream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: E): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "iterator"(): $Iterator<(E)>
 "stream"(): $Stream<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "forEach"(arg0: $Consumer$$Type<(E)>): void
[Symbol.iterator](): IterableIterator<E>;
get "first"(): E
get "last"(): E
get "empty"(): boolean
}

export namespace $SequencedCollection {
const probejs$$marker: never
}
export class $SequencedCollection$$Static<E> implements $SequencedCollection {


 "reversed"(): $SequencedCollection<(E)>
 "getFirst"(): E
 "getLast"(): E
 "addFirst"(arg0: E): void
 "addLast"(arg0: E): void
 "removeFirst"(): E
 "removeLast"(): E
 "removeAll"(arg0: $Collection$$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$$Type<(any)>): boolean
 "parallelStream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: E): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "iterator"(): $Iterator<(E)>
 "stream"(): $Stream<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "forEach"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequencedCollection$$Type<E> = ($SequencedCollection<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SequencedCollection_<E> = $SequencedCollection$$Type<(E)>;
}}
declare module "java.util.Locale$FilteringMode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Locale$FilteringMode extends $Enum<($Locale$FilteringMode)> {
static readonly "IGNORE_EXTENDED_RANGES": $Locale$FilteringMode
static readonly "MAP_EXTENDED_RANGES": $Locale$FilteringMode
static readonly "AUTOSELECT_FILTERING": $Locale$FilteringMode
static readonly "REJECT_EXTENDED_RANGES": $Locale$FilteringMode
static readonly "EXTENDED_FILTERING": $Locale$FilteringMode


public static "values"(): ($Locale$FilteringMode)[]
public static "valueOf"(arg0: StringJS): $Locale$FilteringMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Locale$FilteringMode$$Type = (("autoselect_filtering") | ("extended_filtering") | ("ignore_extended_ranges") | ("map_extended_ranges") | ("reject_extended_ranges"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Locale$FilteringMode_ = $Locale$FilteringMode$$Type;
}}
declare module "java.util.function.DoubleToIntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleToIntFunction {

 "applyAsInt"(arg0: double): integer

(arg0: double): integer
}

export namespace $DoubleToIntFunction {
const probejs$$marker: never
}
export class $DoubleToIntFunction$$Static implements $DoubleToIntFunction {


 "applyAsInt"(arg0: double): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleToIntFunction$$Type = ((arg0: double) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleToIntFunction_ = $DoubleToIntFunction$$Type;
}}
declare module "java.util.stream.LongStream" {
import {$LongPredicate, $LongPredicate$$Type} from "java.util.function.LongPredicate"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$LongStream$LongMapMultiConsumer, $LongStream$LongMapMultiConsumer$$Type} from "java.util.stream.LongStream$LongMapMultiConsumer"
import {$Spliterator$OfLong, $Spliterator$OfLong$$Type} from "java.util.Spliterator$OfLong"
import {$IntStream, $IntStream$$Type} from "java.util.stream.IntStream"
import {$BaseStream, $BaseStream$$Type} from "java.util.stream.BaseStream"
import {$OptionalDouble, $OptionalDouble$$Type} from "java.util.OptionalDouble"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$LongFunction, $LongFunction$$Type} from "java.util.function.LongFunction"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$LongToIntFunction, $LongToIntFunction$$Type} from "java.util.function.LongToIntFunction"
import {$LongUnaryOperator, $LongUnaryOperator$$Type} from "java.util.function.LongUnaryOperator"
import {$LongSupplier, $LongSupplier$$Type} from "java.util.function.LongSupplier"
import {$LongConsumer, $LongConsumer$$Type} from "java.util.function.LongConsumer"
import {$LongToDoubleFunction, $LongToDoubleFunction$$Type} from "java.util.function.LongToDoubleFunction"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$LongSummaryStatistics, $LongSummaryStatistics$$Type} from "java.util.LongSummaryStatistics"
import {$LongBinaryOperator, $LongBinaryOperator$$Type} from "java.util.function.LongBinaryOperator"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$DoubleStream, $DoubleStream$$Type} from "java.util.stream.DoubleStream"
import {$LongStream$Builder, $LongStream$Builder$$Type} from "java.util.stream.LongStream$Builder"
import {$ObjLongConsumer, $ObjLongConsumer$$Type} from "java.util.function.ObjLongConsumer"

export interface $LongStream extends $BaseStream<(long), ($LongStream)> {

 "distinct"(): $LongStream
 "sorted"(): $LongStream
 "asDoubleStream"(): $DoubleStream
 "average"(): $OptionalDouble
 "summaryStatistics"(): $LongSummaryStatistics
 "peek"(arg0: $LongConsumer$$Type): $LongStream
 "skip"(arg0: long): $LongStream
 "sum"(): long
 "reduce"(arg0: long, arg1: $LongBinaryOperator$$Type): long
 "reduce"(arg0: $LongBinaryOperator$$Type): $OptionalLong
 "mapToInt"(arg0: $LongToIntFunction$$Type): $IntStream
 "mapToDouble"(arg0: $LongToDoubleFunction$$Type): $DoubleStream
 "mapMulti"(arg0: $LongStream$LongMapMultiConsumer$$Type): $LongStream
 "takeWhile"(arg0: $LongPredicate$$Type): $LongStream
 "dropWhile"(arg0: $LongPredicate$$Type): $LongStream
 "forEachOrdered"(arg0: $LongConsumer$$Type): void
 "findFirst"(): $OptionalLong
 "allMatch"(arg0: $LongPredicate$$Type): boolean
 "noneMatch"(arg0: $LongPredicate$$Type): boolean
 "mapToObj"<U>(arg0: $LongFunction$$Type<(U)>): $Stream<(U)>
 "parallel"(): $LongStream
 "sequential"(): $LongStream
 "min"(): $OptionalLong
 "max"(): $OptionalLong
 "toArray"(): (long)[]
 "iterator"(): $Iterator<(any)>
 "map"(arg0: $LongUnaryOperator$$Type): $LongStream
 "collect"<R>(arg0: $Supplier$$Type<(R)>, arg1: $ObjLongConsumer$$Type<(R)>, arg2: $BiConsumer$$Type<(R), (R)>): R
 "count"(): long
 "limit"(arg0: long): $LongStream
 "spliterator"(): $Spliterator$OfLong
 "filter"(arg0: $LongPredicate$$Type): $LongStream
 "anyMatch"(arg0: $LongPredicate$$Type): boolean
 "flatMap"(arg0: $LongFunction$$Type<($LongStream$$Type)>): $LongStream
 "forEach"(arg0: $LongConsumer$$Type): void
 "findAny"(): $OptionalLong
 "boxed"(): $Stream<(long)>
 "isParallel"(): boolean
 "onClose"(arg0: $Runnable$$Type): $LongStream
 "unordered"(): $LongStream
 "close"(): void
}

export namespace $LongStream {
function iterate(arg0: long, arg1: $LongUnaryOperator$$Type): $LongStream
function iterate(arg0: long, arg1: $LongPredicate$$Type, arg2: $LongUnaryOperator$$Type): $LongStream
function generate(arg0: $LongSupplier$$Type): $LongStream
function rangeClosed(arg0: long, arg1: long): $LongStream
function range(arg0: long, arg1: long): $LongStream
function of(arg0: long): $LongStream
function of(...arg0: (long)[]): $LongStream
function builder(): $LongStream$Builder
function concat(arg0: $LongStream$$Type, arg1: $LongStream$$Type): $LongStream
function empty(): $LongStream
const probejs$$marker: never
}
export class $LongStream$$Static implements $LongStream {


static "iterate"(arg0: long, arg1: $LongUnaryOperator$$Type): $LongStream
static "iterate"(arg0: long, arg1: $LongPredicate$$Type, arg2: $LongUnaryOperator$$Type): $LongStream
 "distinct"(): $LongStream
 "sorted"(): $LongStream
static "generate"(arg0: $LongSupplier$$Type): $LongStream
 "asDoubleStream"(): $DoubleStream
 "average"(): $OptionalDouble
 "summaryStatistics"(): $LongSummaryStatistics
static "rangeClosed"(arg0: long, arg1: long): $LongStream
 "peek"(arg0: $LongConsumer$$Type): $LongStream
 "skip"(arg0: long): $LongStream
 "sum"(): long
 "reduce"(arg0: long, arg1: $LongBinaryOperator$$Type): long
 "reduce"(arg0: $LongBinaryOperator$$Type): $OptionalLong
 "mapToInt"(arg0: $LongToIntFunction$$Type): $IntStream
 "mapToDouble"(arg0: $LongToDoubleFunction$$Type): $DoubleStream
 "mapMulti"(arg0: $LongStream$LongMapMultiConsumer$$Type): $LongStream
 "takeWhile"(arg0: $LongPredicate$$Type): $LongStream
 "dropWhile"(arg0: $LongPredicate$$Type): $LongStream
 "forEachOrdered"(arg0: $LongConsumer$$Type): void
 "findFirst"(): $OptionalLong
 "allMatch"(arg0: $LongPredicate$$Type): boolean
 "noneMatch"(arg0: $LongPredicate$$Type): boolean
 "mapToObj"<U>(arg0: $LongFunction$$Type<(U)>): $Stream<(U)>
static "range"(arg0: long, arg1: long): $LongStream
 "parallel"(): $LongStream
 "sequential"(): $LongStream
 "min"(): $OptionalLong
 "max"(): $OptionalLong
 "toArray"(): (long)[]
 "iterator"(): $Iterator<(any)>
 "map"(arg0: $LongUnaryOperator$$Type): $LongStream
 "collect"<R>(arg0: $Supplier$$Type<(R)>, arg1: $ObjLongConsumer$$Type<(R)>, arg2: $BiConsumer$$Type<(R), (R)>): R
static "of"(arg0: long): $LongStream
static "of"(...arg0: (long)[]): $LongStream
 "count"(): long
static "builder"(): $LongStream$Builder
static "concat"(arg0: $LongStream$$Type, arg1: $LongStream$$Type): $LongStream
 "limit"(arg0: long): $LongStream
 "spliterator"(): $Spliterator$OfLong
 "filter"(arg0: $LongPredicate$$Type): $LongStream
static "empty"(): $LongStream
 "anyMatch"(arg0: $LongPredicate$$Type): boolean
 "flatMap"(arg0: $LongFunction$$Type<($LongStream$$Type)>): $LongStream
 "forEach"(arg0: $LongConsumer$$Type): void
 "findAny"(): $OptionalLong
 "boxed"(): $Stream<(long)>
 "isParallel"(): boolean
 "onClose"(arg0: $Runnable$$Type): $LongStream
 "unordered"(): $LongStream
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongStream$$Type = ($LongStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongStream_ = $LongStream$$Type;
}}
declare module "java.util.Locale$Category" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Locale$Category extends $Enum<($Locale$Category)> {
static readonly "DISPLAY": $Locale$Category
static readonly "FORMAT": $Locale$Category


public static "values"(): ($Locale$Category)[]
public static "valueOf"(arg0: StringJS): $Locale$Category
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Locale$Category$$Type = (("display") | ("format"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Locale$Category_ = $Locale$Category$$Type;
}}
declare module "java.util.EnumSet" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$AbstractSet, $AbstractSet$$Type} from "java.util.AbstractSet"

export class $EnumSet<E extends $Enum<(E)>> extends $AbstractSet<(E)> implements $Cloneable, $Serializable {


public static "allOf"<E extends $Enum<(E)>>(arg0: $Class$$Type<(E)>): $EnumSet<(E)>
public static "complementOf"<E extends $Enum<(E)>>(arg0: $EnumSet$$Type<(E)>): $EnumSet<(E)>
public static "noneOf"<E extends $Enum<(E)>>(arg0: $Class$$Type<(E)>): $EnumSet<(E)>
public static "range"<E extends $Enum<(E)>>(arg0: E, arg1: E): $EnumSet<(E)>
public "clone"(): $EnumSet<(E)>
public static "copyOf"<E extends $Enum<(E)>>(arg0: $Collection$$Type<(E)>): $EnumSet<(E)>
public static "copyOf"<E extends $Enum<(E)>>(arg0: $EnumSet$$Type<(E)>): $EnumSet<(E)>
public static "of"<E extends $Enum<(E)>>(arg0: E): $EnumSet<(E)>
public static "of"<E extends $Enum<(E)>>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $EnumSet<(E)>
public static "of"<E extends $Enum<(E)>>(arg0: E, ...arg1: (E)[]): $EnumSet<(E)>
public static "of"<E extends $Enum<(E)>>(arg0: E, arg1: E, arg2: E, arg3: E): $EnumSet<(E)>
public static "of"<E extends $Enum<(E)>>(arg0: E, arg1: E, arg2: E): $EnumSet<(E)>
public static "of"<E extends $Enum<(E)>>(arg0: E, arg1: E): $EnumSet<(E)>
public "retainAll"(arg0: $Collection$$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$$Type<(any)>): boolean
public "remove"(arg0: any): boolean
public "size"(): integer
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
export type $EnumSet$$Type<E> = ($EnumSet<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumSet_<E> = $EnumSet$$Type<(E)>;
}}
declare module "java.util.concurrent.Delayed" {
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export interface $Delayed extends $Comparable<($Delayed)> {

 "getDelay"(arg0: $TimeUnit$$Type): long
 "compareTo"(arg0: $Delayed$$Type): integer
}

export namespace $Delayed {
const probejs$$marker: never
}
export class $Delayed$$Static implements $Delayed {


 "getDelay"(arg0: $TimeUnit$$Type): long
 "compareTo"(arg0: $Delayed$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Delayed$$Type = ($Delayed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Delayed_ = $Delayed$$Type;
}}
declare module "java.util.Hashtable" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Dictionary, $Dictionary$$Type} from "java.util.Dictionary"
import {$Enumeration, $Enumeration$$Type} from "java.util.Enumeration"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $Hashtable<K, V> extends $Dictionary<(K), (V)> implements $Map<(K), (V)>, $Cloneable, $Serializable {

constructor(arg0: $Map$$Type<(K), (V)>)
constructor()
constructor(arg0: integer)
constructor(arg0: integer, arg1: float)

public "remove"(arg0: any, arg1: any): boolean
public "remove"(arg0: any): V
public "size"(): integer
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "clone"(): any
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: K, arg1: V, arg2: V): boolean
public "replace"(arg0: K, arg1: V): V
public "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
public "contains"(arg0: any): boolean
public "elements"(): $Enumeration<(V)>
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public "putAll"(arg0: $Map$$Type<(K), (V)>): void
public "putIfAbsent"(arg0: K, arg1: V): V
public "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
public "containsKey"(arg0: any): boolean
public "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
public "keys"(): $Enumeration<(K)>
public "keySet"(): $Set<(K)>
public "containsValue"(arg0: any): boolean
public "getOrDefault"(arg0: any, arg1: V): V
public "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
[index: string | number]: V
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Hashtable$$Type<K, V> = ($Hashtable<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Hashtable_<K, V> = $Hashtable$$Type<(K), (V)>;
}}
declare module "java.util.concurrent.ExecutorService" {
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$AutoCloseable, $AutoCloseable$$Type} from "java.lang.AutoCloseable"
import {$List, $List$$Type} from "java.util.List"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export interface $ExecutorService extends $Executor, $AutoCloseable {

 "isShutdown"(): boolean
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
 "submit"(arg0: $Runnable$$Type): $Future<(any)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "shutdownNow"(): $List<($Runnable)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "shutdown"(): void
 "isTerminated"(): boolean
 "close"(): void
 "execute"(arg0: $Runnable$$Type): void
get "terminated"(): boolean
}

export namespace $ExecutorService {
const probejs$$marker: never
}
export class $ExecutorService$$Static implements $ExecutorService {


 "isShutdown"(): boolean
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
 "submit"(arg0: $Runnable$$Type): $Future<(any)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "shutdownNow"(): $List<($Runnable)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "shutdown"(): void
 "isTerminated"(): boolean
 "close"(): void
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExecutorService$$Type = ($ExecutorService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExecutorService_ = $ExecutorService$$Type;
}}
declare module "java.util.function.IntUnaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntUnaryOperator {

 "applyAsInt"(arg0: integer): integer
 "compose"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
 "andThen"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator

(arg0: integer): integer
}

export namespace $IntUnaryOperator {
function identity(): $IntUnaryOperator
const probejs$$marker: never
}
export class $IntUnaryOperator$$Static implements $IntUnaryOperator {


 "applyAsInt"(arg0: integer): integer
 "compose"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
 "andThen"(arg0: $IntUnaryOperator$$Type): $IntUnaryOperator
static "identity"(): $IntUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntUnaryOperator$$Type = ((arg0: integer) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntUnaryOperator_ = $IntUnaryOperator$$Type;
}}
declare module "java.util.PrimitiveIterator$OfInt" {
import {$IntConsumer, $IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$PrimitiveIterator, $PrimitiveIterator$$Type} from "java.util.PrimitiveIterator"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $PrimitiveIterator$OfInt extends $PrimitiveIterator<(integer), ($IntConsumer)> {

 "nextInt"(): integer
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $Consumer$$Type<(integer)>): void
 "forEachRemaining"(arg0: $IntConsumer$$Type): void
 "next"(): integer
 "remove"(): void
 "hasNext"(): boolean
}

export namespace $PrimitiveIterator$OfInt {
const probejs$$marker: never
}
export class $PrimitiveIterator$OfInt$$Static implements $PrimitiveIterator$OfInt {


 "nextInt"(): integer
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $Consumer$$Type<(integer)>): void
 "forEachRemaining"(arg0: $IntConsumer$$Type): void
 "next"(): integer
 "remove"(): void
 "hasNext"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimitiveIterator$OfInt$$Type = ($PrimitiveIterator$OfInt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrimitiveIterator$OfInt_ = $PrimitiveIterator$OfInt$$Type;
}}
declare module "java.util.NavigableSet" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$SortedSet, $SortedSet$$Type} from "java.util.SortedSet"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export interface $NavigableSet<E> extends $SortedSet<(E)> {

 "reversed"(): $NavigableSet<(E)>
 "removeFirst"(): E
 "removeLast"(): E
 "lower"(arg0: E): E
 "subSet"(arg0: E, arg1: E): $SortedSet<(E)>
 "subSet"(arg0: E, arg1: boolean, arg2: E, arg3: boolean): $NavigableSet<(E)>
 "headSet"(arg0: E, arg1: boolean): $NavigableSet<(E)>
 "headSet"(arg0: E): $SortedSet<(E)>
 "tailSet"(arg0: E): $SortedSet<(E)>
 "tailSet"(arg0: E, arg1: boolean): $NavigableSet<(E)>
 "descendingSet"(): $NavigableSet<(E)>
 "ceiling"(arg0: E): E
 "higher"(arg0: E): E
 "pollFirst"(): E
 "pollLast"(): E
 "descendingIterator"(): $Iterator<(E)>
 "floor"(arg0: E): E
 "iterator"(): $Iterator<(E)>
 "getFirst"(): E
 "getLast"(): E
 "addFirst"(arg0: E): void
 "addLast"(arg0: E): void
 "comparator"(): $Comparator<(E)>
 "last"(): E
 "spliterator"(): $Spliterator<(E)>
 "first"(): E
 "removeAll"(arg0: $Collection$$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$$Type<(any)>): boolean
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: E): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "contains"(arg0: any): boolean
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "parallelStream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$$Type<(E)>): void
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export namespace $NavigableSet {
function copyOf<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
function of<E>(arg0: E, arg1: E): $Set<(E)>
function of<E>(...arg0: (E)[]): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
function of<E>(): $Set<(E)>
function of<E>(arg0: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
const probejs$$marker: never
}
export class $NavigableSet$$Static<E> implements $NavigableSet {


 "reversed"(): $NavigableSet<(E)>
 "removeFirst"(): E
 "removeLast"(): E
 "lower"(arg0: E): E
 "subSet"(arg0: E, arg1: E): $SortedSet<(E)>
 "subSet"(arg0: E, arg1: boolean, arg2: E, arg3: boolean): $NavigableSet<(E)>
 "headSet"(arg0: E, arg1: boolean): $NavigableSet<(E)>
 "headSet"(arg0: E): $SortedSet<(E)>
 "tailSet"(arg0: E): $SortedSet<(E)>
 "tailSet"(arg0: E, arg1: boolean): $NavigableSet<(E)>
 "descendingSet"(): $NavigableSet<(E)>
 "ceiling"(arg0: E): E
 "higher"(arg0: E): E
 "pollFirst"(): E
 "pollLast"(): E
 "descendingIterator"(): $Iterator<(E)>
 "floor"(arg0: E): E
 "iterator"(): $Iterator<(E)>
 "getFirst"(): E
 "getLast"(): E
 "addFirst"(arg0: E): void
 "addLast"(arg0: E): void
 "comparator"(): $Comparator<(E)>
 "last"(): E
 "spliterator"(): $Spliterator<(E)>
 "first"(): E
 "removeAll"(arg0: $Collection$$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$$Type<(any)>): boolean
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: E): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E): $Set<(E)>
static "of"<E>(...arg0: (E)[]): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
static "of"<E>(): $Set<(E)>
static "of"<E>(arg0: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
 "contains"(arg0: any): boolean
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "parallelStream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NavigableSet$$Type<E> = ($NavigableSet<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NavigableSet_<E> = $NavigableSet$$Type<(E)>;
}}
declare module "java.util.function.ObjIntConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ObjIntConsumer<T> {

 "accept"(arg0: T, arg1: integer): void

(arg0: T, arg1: integer): void
}

export namespace $ObjIntConsumer {
const probejs$$marker: never
}
export class $ObjIntConsumer$$Static<T> implements $ObjIntConsumer {


 "accept"(arg0: T, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjIntConsumer$$Type<T> = ((arg0: T, arg1: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjIntConsumer_<T> = $ObjIntConsumer$$Type<(T)>;
}}
declare module "java.util.function.DoubleSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleSupplier {

 "getAsDouble"(): double

(): double
get "asDouble"(): double
}

export namespace $DoubleSupplier {
const probejs$$marker: never
}
export class $DoubleSupplier$$Static implements $DoubleSupplier {


 "getAsDouble"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleSupplier$$Type = (() => double);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleSupplier_ = $DoubleSupplier$$Type;
}}
declare module "java.util.function.BinaryOperator" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Function, $Function$$Type} from "java.util.function.Function"

export interface $BinaryOperator<T> extends $BiFunction<(T), (T), (T)> {

 "andThen"<V>(arg0: $Function$$Type<(T), (V)>): $BiFunction<(T), (T), (V)>
 "apply"(arg0: T, arg1: T): T

(arg0: T, arg1: T): T
}

export namespace $BinaryOperator {
function maxBy<T>(arg0: $Comparator$$Type<(T)>): $BinaryOperator<(T)>
function minBy<T>(arg0: $Comparator$$Type<(T)>): $BinaryOperator<(T)>
const probejs$$marker: never
}
export class $BinaryOperator$$Static<T> implements $BinaryOperator {


static "maxBy"<T>(arg0: $Comparator$$Type<(T)>): $BinaryOperator<(T)>
static "minBy"<T>(arg0: $Comparator$$Type<(T)>): $BinaryOperator<(T)>
 "andThen"<V>(arg0: $Function$$Type<(T), (V)>): $BiFunction<(T), (T), (V)>
 "apply"(arg0: T, arg1: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BinaryOperator$$Type<T> = ((arg0: T, arg1: T) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BinaryOperator_<T> = $BinaryOperator$$Type<(T)>;
}}
declare module "java.util.logging.LogRecord" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Level, $Level$$Type} from "java.util.logging.Level"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$ResourceBundle, $ResourceBundle$$Type} from "java.util.ResourceBundle"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $LogRecord implements $Serializable {

constructor(arg0: $Level$$Type, arg1: StringJS)

/**
 * 
 * @deprecated
 */
public "setMillis"(arg0: long): void
public "getInstant"(): $Instant
public "getResourceBundleName"(): StringJS
public "getLevel"(): $Level
public "setLoggerName"(arg0: StringJS): void
public "setResourceBundleName"(arg0: StringJS): void
public "setResourceBundle"(arg0: $ResourceBundle$$Type): void
public "setParameters"(arg0: (any)[]): void
public "setThrown"(arg0: $Throwable$$Type): void
public "setSourceClassName"(arg0: StringJS): void
public "setSourceMethodName"(arg0: StringJS): void
public "getResourceBundle"(): $ResourceBundle
public "setLevel"(arg0: $Level$$Type): void
public "getSourceClassName"(): StringJS
public "getSourceMethodName"(): StringJS
public "getMillis"(): long
public "getLoggerName"(): StringJS
public "getSequenceNumber"(): long
public "setSequenceNumber"(arg0: long): void
public "getParameters"(): (any)[]
public "setInstant"(arg0: $Instant$$Type): void
public "getMessage"(): StringJS
/**
 * 
 * @deprecated
 */
public "getThreadID"(): integer
/**
 * 
 * @deprecated
 */
public "setThreadID"(arg0: integer): void
public "getLongThreadID"(): long
public "setLongThreadID"(arg0: long): $LogRecord
public "getThrown"(): $Throwable
public "setMessage"(arg0: StringJS): void
set "millis"(value: long)
get "instant"(): $Instant
get "resourceBundleName"(): StringJS
get "level"(): $Level
set "loggerName"(value: StringJS)
set "resourceBundleName"(value: StringJS)
set "resourceBundle"(value: $ResourceBundle$$Type)
set "parameters"(value: (any)[])
set "thrown"(value: $Throwable$$Type)
set "sourceClassName"(value: StringJS)
set "sourceMethodName"(value: StringJS)
get "resourceBundle"(): $ResourceBundle
set "level"(value: $Level$$Type)
get "sourceClassName"(): StringJS
get "sourceMethodName"(): StringJS
get "millis"(): long
get "loggerName"(): StringJS
get "sequenceNumber"(): long
set "sequenceNumber"(value: long)
get "parameters"(): (any)[]
set "instant"(value: $Instant$$Type)
get "message"(): StringJS
get "threadID"(): integer
set "threadID"(value: integer)
get "longThreadID"(): long
set "longThreadID"(value: long)
get "thrown"(): $Throwable
set "message"(value: StringJS)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogRecord$$Type = ($LogRecord);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogRecord_ = $LogRecord$$Type;
}}
declare module "java.util.Iterator" {
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $Iterator<E> {

 "remove"(): void
 "forEachRemaining"(arg0: $Consumer$$Type<(E)>): void
 "hasNext"(): boolean
 "next"(): E
}

export namespace $Iterator {
const probejs$$marker: never
}
export class $Iterator$$Static<E> implements $Iterator {


 "remove"(): void
 "forEachRemaining"(arg0: $Consumer$$Type<(E)>): void
 "hasNext"(): boolean
 "next"(): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Iterator$$Type<E> = ($Iterator<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Iterator_<E> = $Iterator$$Type<(E)>;
}}
declare module "java.util.SequencedSet" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$SequencedCollection, $SequencedCollection$$Type} from "java.util.SequencedCollection"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export interface $SequencedSet<E> extends $SequencedCollection<(E)>, $Set<(E)> {

 "reversed"(): $SequencedSet<(E)>
 "getFirst"(): E
 "getLast"(): E
 "addFirst"(arg0: E): void
 "addLast"(arg0: E): void
 "removeFirst"(): E
 "removeLast"(): E
 "removeAll"(arg0: $Collection$$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$$Type<(any)>): boolean
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: E): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "iterator"(): $Iterator<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "parallelStream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$$Type<(E)>): void
[Symbol.iterator](): IterableIterator<E>;
get "first"(): E
get "last"(): E
get "empty"(): boolean
}

export namespace $SequencedSet {
function copyOf<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
function of<E>(arg0: E, arg1: E): $Set<(E)>
function of<E>(...arg0: (E)[]): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
function of<E>(): $Set<(E)>
function of<E>(arg0: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
const probejs$$marker: never
}
export class $SequencedSet$$Static<E> implements $SequencedSet {


 "reversed"(): $SequencedSet<(E)>
 "getFirst"(): E
 "getLast"(): E
 "addFirst"(arg0: E): void
 "addLast"(arg0: E): void
 "removeFirst"(): E
 "removeLast"(): E
 "removeAll"(arg0: $Collection$$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$$Type<(any)>): boolean
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: E): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "iterator"(): $Iterator<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E): $Set<(E)>
static "of"<E>(...arg0: (E)[]): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
static "of"<E>(): $Set<(E)>
static "of"<E>(arg0: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "parallelStream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequencedSet$$Type<E> = ($SequencedSet<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SequencedSet_<E> = $SequencedSet$$Type<(E)>;
}}
declare module "java.util.function.ToLongBiFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToLongBiFunction<T, U> {

 "applyAsLong"(arg0: T, arg1: U): long

(arg0: T, arg1: U): long
}

export namespace $ToLongBiFunction {
const probejs$$marker: never
}
export class $ToLongBiFunction$$Static<T, U> implements $ToLongBiFunction {


 "applyAsLong"(arg0: T, arg1: U): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToLongBiFunction$$Type<T, U> = ((arg0: T, arg1: U) => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToLongBiFunction_<T, U> = $ToLongBiFunction$$Type<(T), (U)>;
}}
declare module "java.util.SortedSet" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$SequencedSet, $SequencedSet$$Type} from "java.util.SequencedSet"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export interface $SortedSet<E> extends $Set<(E)>, $SequencedSet<(E)> {

 "reversed"(): $SortedSet<(E)>
 "getFirst"(): E
 "getLast"(): E
 "addFirst"(arg0: E): void
 "addLast"(arg0: E): void
 "removeFirst"(): E
 "removeLast"(): E
 "comparator"(): $Comparator<(E)>
 "subSet"(arg0: E, arg1: E): $SortedSet<(E)>
 "headSet"(arg0: E): $SortedSet<(E)>
 "tailSet"(arg0: E): $SortedSet<(E)>
 "last"(): E
 "spliterator"(): $Spliterator<(E)>
 "first"(): E
 "removeAll"(arg0: $Collection$$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$$Type<(any)>): boolean
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: E): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "iterator"(): $Iterator<(E)>
 "contains"(arg0: any): boolean
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "parallelStream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$$Type<(E)>): void
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export namespace $SortedSet {
function copyOf<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
function of<E>(arg0: E, arg1: E): $Set<(E)>
function of<E>(...arg0: (E)[]): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
function of<E>(): $Set<(E)>
function of<E>(arg0: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
const probejs$$marker: never
}
export class $SortedSet$$Static<E> implements $SortedSet {


 "reversed"(): $SortedSet<(E)>
 "getFirst"(): E
 "getLast"(): E
 "addFirst"(arg0: E): void
 "addLast"(arg0: E): void
 "removeFirst"(): E
 "removeLast"(): E
 "comparator"(): $Comparator<(E)>
 "subSet"(arg0: E, arg1: E): $SortedSet<(E)>
 "headSet"(arg0: E): $SortedSet<(E)>
 "tailSet"(arg0: E): $SortedSet<(E)>
 "last"(): E
 "spliterator"(): $Spliterator<(E)>
 "first"(): E
 "removeAll"(arg0: $Collection$$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$$Type<(any)>): boolean
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: E): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "iterator"(): $Iterator<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E): $Set<(E)>
static "of"<E>(...arg0: (E)[]): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
static "of"<E>(): $Set<(E)>
static "of"<E>(arg0: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
 "contains"(arg0: any): boolean
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "parallelStream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SortedSet$$Type<E> = ($SortedSet<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SortedSet_<E> = $SortedSet$$Type<(E)>;
}}
declare module "java.util.function.IntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntFunction<R> {

 "apply"(arg0: integer): R

(arg0: integer): R
}

export namespace $IntFunction {
const probejs$$marker: never
}
export class $IntFunction$$Static<R> implements $IntFunction {


 "apply"(arg0: integer): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntFunction$$Type<R> = ((arg0: integer) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntFunction_<R> = $IntFunction$$Type<(R)>;
}}
declare module "java.util.function.DoublePredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoublePredicate {

 "or"(arg0: $DoublePredicate$$Type): $DoublePredicate
 "negate"(): $DoublePredicate
 "and"(arg0: $DoublePredicate$$Type): $DoublePredicate
 "test"(arg0: double): boolean

(arg0: double): boolean
}

export namespace $DoublePredicate {
const probejs$$marker: never
}
export class $DoublePredicate$$Static implements $DoublePredicate {


 "or"(arg0: $DoublePredicate$$Type): $DoublePredicate
 "negate"(): $DoublePredicate
 "and"(arg0: $DoublePredicate$$Type): $DoublePredicate
 "test"(arg0: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoublePredicate$$Type = ((arg0: double) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoublePredicate_ = $DoublePredicate$$Type;
}}
declare module "java.util.Queue" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export interface $Queue<E> extends $Collection<(E)> {

 "peek"(): E
 "element"(): E
 "poll"(): E
 "offer"(arg0: E): boolean
 "remove"(): E
 "add"(arg0: E): boolean
 "removeAll"(arg0: $Collection$$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$$Type<(any)>): boolean
 "parallelStream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "iterator"(): $Iterator<(E)>
 "stream"(): $Stream<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "forEach"(arg0: $Consumer$$Type<(E)>): void
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export namespace $Queue {
const probejs$$marker: never
}
export class $Queue$$Static<E> implements $Queue {


 "peek"(): E
 "element"(): E
 "poll"(): E
 "offer"(arg0: E): boolean
 "remove"(): E
 "add"(arg0: E): boolean
 "removeAll"(arg0: $Collection$$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$$Type<(any)>): boolean
 "parallelStream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "iterator"(): $Iterator<(E)>
 "stream"(): $Stream<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "forEach"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Queue$$Type<E> = ($Queue<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Queue_<E> = $Queue$$Type<(E)>;
}}
declare module "java.util.List" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ListIterator, $ListIterator$$Type} from "java.util.ListIterator"
import {$SequencedCollection, $SequencedCollection$$Type} from "java.util.SequencedCollection"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export interface $List<E> extends $SequencedCollection<(E)> {

 "removeAll"(arg0: $Collection$$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$$Type<(any)>): boolean
 "listIterator"(): $ListIterator<(E)>
 "listIterator"(arg0: integer): $ListIterator<(E)>
 "reversed"(): $List<(E)>
 "containsAll"(arg0: $Collection$$Type<(any)>): boolean
 "getFirst"(): E
 "getLast"(): E
 "addFirst"(arg0: E): void
 "addLast"(arg0: E): void
 "removeFirst"(): E
 "removeLast"(): E
 "remove"(arg0: any): boolean
 "remove"(arg0: integer): E
 "size"(): integer
 "get"(arg0: integer): E
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "indexOf"(arg0: any): integer
 "clear"(): void
 "lastIndexOf"(arg0: any): integer
 "isEmpty"(): boolean
 "replaceAll"(arg0: $UnaryOperator$$Type<(E)>): void
 "add"(arg0: E): boolean
 "add"(arg0: integer, arg1: E): void
 "subList"(arg0: integer, arg1: integer): $List<(E)>
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "iterator"(): $Iterator<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "addAll"(arg0: integer, arg1: $Collection$$Type<(E)>): boolean
 "set"(arg0: integer, arg1: E): E
 "sort"(arg0: $Comparator$$Type<(E)>): void
 "parallelStream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$$Type<(E)>): void
[Symbol.iterator](): IterableIterator<E>;
[index: number]: E
get "first"(): E
get "last"(): E
get "empty"(): boolean
}

export namespace $List {
function copyOf<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
function of<E>(...arg0: (E)[]): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
function of<E>(): $List<(E)>
function of<E>(arg0: E): $List<(E)>
function of<E>(arg0: E, arg1: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
const probejs$$marker: never
}
export class $List$$Static<E> implements $List {


 "removeAll"(arg0: $Collection$$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$$Type<(any)>): boolean
 "listIterator"(): $ListIterator<(E)>
 "listIterator"(arg0: integer): $ListIterator<(E)>
 "reversed"(): $List<(E)>
 "containsAll"(arg0: $Collection$$Type<(any)>): boolean
 "getFirst"(): E
 "getLast"(): E
 "addFirst"(arg0: E): void
 "addLast"(arg0: E): void
 "removeFirst"(): E
 "removeLast"(): E
 "remove"(arg0: any): boolean
 "remove"(arg0: integer): E
 "size"(): integer
 "get"(arg0: integer): E
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
 "indexOf"(arg0: any): integer
 "clear"(): void
 "lastIndexOf"(arg0: any): integer
 "isEmpty"(): boolean
 "replaceAll"(arg0: $UnaryOperator$$Type<(E)>): void
 "add"(arg0: E): boolean
 "add"(arg0: integer, arg1: E): void
 "subList"(arg0: integer, arg1: integer): $List<(E)>
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "iterator"(): $Iterator<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
static "of"<E>(...arg0: (E)[]): $List<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
static "of"<E>(): $List<(E)>
static "of"<E>(arg0: E): $List<(E)>
static "of"<E>(arg0: E, arg1: E): $List<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "addAll"(arg0: integer, arg1: $Collection$$Type<(E)>): boolean
 "set"(arg0: integer, arg1: E): E
 "sort"(arg0: $Comparator$$Type<(E)>): void
 "parallelStream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $List$$Type<E> = ((E)[]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $List_<E> = $List$$Type<(E)>;
}}
declare module "java.util.random.RandomGenerator" {
import {$IntStream, $IntStream$$Type} from "java.util.stream.IntStream"
import {$LongStream, $LongStream$$Type} from "java.util.stream.LongStream"
import {$DoubleStream, $DoubleStream$$Type} from "java.util.stream.DoubleStream"

export interface $RandomGenerator {

 "nextInt"(arg0: integer): integer
 "nextInt"(arg0: integer, arg1: integer): integer
 "nextInt"(): integer
 "nextDouble"(arg0: double, arg1: double): double
 "nextDouble"(arg0: double): double
 "nextDouble"(): double
 "longs"(arg0: long): $LongStream
 "longs"(arg0: long, arg1: long): $LongStream
 "longs"(): $LongStream
 "longs"(arg0: long, arg1: long, arg2: long): $LongStream
 "nextBytes"(arg0: (byte)[]): void
 "ints"(): $IntStream
 "ints"(arg0: integer, arg1: integer): $IntStream
 "ints"(arg0: long): $IntStream
 "ints"(arg0: long, arg1: integer, arg2: integer): $IntStream
 "doubles"(arg0: double, arg1: double): $DoubleStream
 "doubles"(): $DoubleStream
 "doubles"(arg0: long): $DoubleStream
 "doubles"(arg0: long, arg1: double, arg2: double): $DoubleStream
 "nextFloat"(arg0: float, arg1: float): float
 "nextFloat"(): float
 "nextFloat"(arg0: float): float
 "nextGaussian"(arg0: double, arg1: double): double
 "nextGaussian"(): double
 "isDeprecated"(): boolean
 "nextExponential"(): double
 "nextLong"(arg0: long, arg1: long): long
 "nextLong"(arg0: long): long
 "nextLong"(): long
 "nextBoolean"(): boolean

(): long
get "deprecated"(): boolean
}

export namespace $RandomGenerator {
function getDefault(): $RandomGenerator
function of(arg0: StringJS): $RandomGenerator
const probejs$$marker: never
}
export class $RandomGenerator$$Static implements $RandomGenerator {


 "nextInt"(arg0: integer): integer
 "nextInt"(arg0: integer, arg1: integer): integer
 "nextInt"(): integer
 "nextDouble"(arg0: double, arg1: double): double
 "nextDouble"(arg0: double): double
 "nextDouble"(): double
 "longs"(arg0: long): $LongStream
 "longs"(arg0: long, arg1: long): $LongStream
 "longs"(): $LongStream
 "longs"(arg0: long, arg1: long, arg2: long): $LongStream
 "nextBytes"(arg0: (byte)[]): void
 "ints"(): $IntStream
 "ints"(arg0: integer, arg1: integer): $IntStream
 "ints"(arg0: long): $IntStream
 "ints"(arg0: long, arg1: integer, arg2: integer): $IntStream
 "doubles"(arg0: double, arg1: double): $DoubleStream
 "doubles"(): $DoubleStream
 "doubles"(arg0: long): $DoubleStream
 "doubles"(arg0: long, arg1: double, arg2: double): $DoubleStream
 "nextFloat"(arg0: float, arg1: float): float
 "nextFloat"(): float
 "nextFloat"(arg0: float): float
 "nextGaussian"(arg0: double, arg1: double): double
 "nextGaussian"(): double
 "isDeprecated"(): boolean
 "nextExponential"(): double
static "getDefault"(): $RandomGenerator
static "of"(arg0: StringJS): $RandomGenerator
 "nextLong"(arg0: long, arg1: long): long
 "nextLong"(arg0: long): long
 "nextLong"(): long
 "nextBoolean"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomGenerator$$Type = (() => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RandomGenerator_ = $RandomGenerator$$Type;
}}
declare module "java.util.concurrent.CompletableFuture" {
import {$CompletionStage, $CompletionStage$$Type} from "java.util.concurrent.CompletionStage"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"

export class $CompletableFuture<T> implements $Future<(T)>, $CompletionStage<(T)> {

constructor()

public "isCancelled"(): boolean
public "resultNow"(): T
public "exceptionNow"(): $Throwable
public "completeExceptionally"(arg0: $Throwable$$Type): boolean
public "defaultExecutor"(): $Executor
public "handle"<U>(arg0: $BiFunction$$Type<(T), ($Throwable), (U)>): $CompletableFuture<(U)>
public "complete"(arg0: T): boolean
public static "allOf"(...arg0: ($CompletableFuture$$Type<(any)>)[]): $CompletableFuture<(void)>
public "applyToEither"(arg0: $CompletionStage$$Type<(any)>, arg1: $Function$$Type<(any), (any)>): $CompletionStage<(any)>
public "runAfterBothAsync"(arg0: $CompletionStage$$Type<(any)>, arg1: $Runnable$$Type): $CompletableFuture<(void)>
public "runAfterBothAsync"(arg0: $CompletionStage$$Type<(any)>, arg1: $Runnable$$Type, arg2: $Executor$$Type): $CompletionStage<(any)>
public "runAfterBoth"(arg0: $CompletionStage$$Type<(any)>, arg1: $Runnable$$Type): $CompletionStage<(any)>
public "thenAcceptBothAsync"<U>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiConsumer$$Type<(T), (U)>, arg2: $Executor$$Type): $CompletableFuture<(void)>
public "thenAcceptBothAsync"<U>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiConsumer$$Type<(T), (U)>): $CompletableFuture<(void)>
public "thenAcceptBoth"<U>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiConsumer$$Type<(T), (U)>): $CompletableFuture<(void)>
public "thenCombineAsync"(arg0: $CompletionStage$$Type<(any)>, arg1: $BiFunction$$Type<(any), (any), (any)>): $CompletionStage<(any)>
public "thenCombineAsync"(arg0: $CompletionStage$$Type<(any)>, arg1: $BiFunction$$Type<(any), (any), (any)>, arg2: $Executor$$Type): $CompletionStage<(any)>
public "thenCombine"(arg0: $CompletionStage$$Type<(any)>, arg1: $BiFunction$$Type<(any), (any), (any)>): $CompletionStage<(any)>
public "thenRunAsync"(arg0: $Runnable$$Type): $CompletableFuture<(void)>
public "thenRunAsync"(arg0: $Runnable$$Type, arg1: $Executor$$Type): $CompletableFuture<(void)>
public "thenRun"(arg0: $Runnable$$Type): $CompletableFuture<(void)>
public "thenAcceptAsync"(arg0: $Consumer$$Type<(T)>, arg1: $Executor$$Type): $CompletableFuture<(void)>
public "thenAcceptAsync"(arg0: $Consumer$$Type<(T)>): $CompletableFuture<(void)>
public "thenAccept"(arg0: $Consumer$$Type<(any)>): $CompletionStage<(any)>
public "thenApplyAsync"<U>(arg0: $Function$$Type<(T), (U)>, arg1: $Executor$$Type): $CompletableFuture<(U)>
public "thenApplyAsync"(arg0: $Function$$Type<(any), (any)>): $CompletionStage<(any)>
public "thenApply"<U>(arg0: $Function$$Type<(T), (U)>): $CompletableFuture<(U)>
public static "runAsync"(arg0: $Runnable$$Type): $CompletableFuture<(void)>
public static "runAsync"(arg0: $Runnable$$Type, arg1: $Executor$$Type): $CompletableFuture<(void)>
public static "completedFuture"<U>(arg0: U): $CompletableFuture<(U)>
public "getNow"(arg0: T): T
public static "anyOf"(...arg0: ($CompletableFuture$$Type<(any)>)[]): $CompletableFuture<(any)>
public "isCompletedExceptionally"(): boolean
public "obtrudeValue"(arg0: T): void
public "obtrudeException"(arg0: $Throwable$$Type): void
public "getNumberOfDependents"(): integer
public "minimalCompletionStage"(): $CompletionStage<(T)>
public "orTimeout"(arg0: long, arg1: $TimeUnit$$Type): $CompletableFuture<(T)>
public "completeOnTimeout"(arg0: T, arg1: long, arg2: $TimeUnit$$Type): $CompletableFuture<(T)>
public static "delayedExecutor"(arg0: long, arg1: $TimeUnit$$Type, arg2: $Executor$$Type): $Executor
public static "delayedExecutor"(arg0: long, arg1: $TimeUnit$$Type): $Executor
public static "completedStage"<U>(arg0: U): $CompletionStage<(U)>
public static "failedFuture"<U>(arg0: $Throwable$$Type): $CompletableFuture<(U)>
public static "failedStage"<U>(arg0: $Throwable$$Type): $CompletionStage<(U)>
public "handleAsync"<U>(arg0: $BiFunction$$Type<(T), ($Throwable), (U)>): $CompletableFuture<(U)>
public "handleAsync"<U>(arg0: $BiFunction$$Type<(T), ($Throwable), (U)>, arg1: $Executor$$Type): $CompletableFuture<(U)>
public static "supplyAsync"<U>(arg0: $Supplier$$Type<(U)>): $CompletableFuture<(U)>
public static "supplyAsync"<U>(arg0: $Supplier$$Type<(U)>, arg1: $Executor$$Type): $CompletableFuture<(U)>
public "get"(arg0: long, arg1: $TimeUnit$$Type): T
public "get"(): T
public "toString"(): StringJS
public "join"(): T
public "state"(): $Future$State
public "isDone"(): boolean
public "cancel"(arg0: boolean): boolean
public "copy"(): $CompletableFuture<(T)>
public "newIncompleteFuture"<U>(): $CompletableFuture<(U)>
public "toCompletableFuture"(): $CompletableFuture<(T)>
public "completeAsync"(arg0: $Supplier$$Type<(T)>, arg1: $Executor$$Type): $CompletableFuture<(T)>
public "completeAsync"(arg0: $Supplier$$Type<(T)>): $CompletableFuture<(T)>
public "exceptionallyComposeAsync"(arg0: $Function$$Type<($Throwable), ($CompletionStage$$Type<(T)>)>): $CompletableFuture<(T)>
public "exceptionallyComposeAsync"(arg0: $Function$$Type<($Throwable), ($CompletionStage$$Type<(T)>)>, arg1: $Executor$$Type): $CompletableFuture<(T)>
public "exceptionallyCompose"(arg0: $Function$$Type<($Throwable), ($CompletionStage$$Type<(T)>)>): $CompletableFuture<(T)>
public "exceptionallyAsync"(arg0: $Function$$Type<(any), (any)>): $CompletionStage<(any)>
public "exceptionallyAsync"(arg0: $Function$$Type<(any), (any)>, arg1: $Executor$$Type): $CompletionStage<(any)>
public "exceptionally"(arg0: $Function$$Type<($Throwable), (T)>): $CompletableFuture<(T)>
public "whenCompleteAsync"(arg0: $BiConsumer$$Type<(T), ($Throwable)>): $CompletableFuture<(T)>
public "whenCompleteAsync"(arg0: $BiConsumer$$Type<(T), ($Throwable)>, arg1: $Executor$$Type): $CompletableFuture<(T)>
public "thenComposeAsync"(arg0: $Function$$Type<(any), (any)>, arg1: $Executor$$Type): $CompletionStage<(any)>
public "thenComposeAsync"<U>(arg0: $Function$$Type<(T), ($CompletionStage$$Type<(U)>)>): $CompletableFuture<(U)>
public "thenCompose"(arg0: $Function$$Type<(any), (any)>): $CompletionStage<(any)>
public "runAfterEitherAsync"(arg0: $CompletionStage$$Type<(any)>, arg1: $Runnable$$Type): $CompletionStage<(any)>
public "runAfterEitherAsync"(arg0: $CompletionStage$$Type<(any)>, arg1: $Runnable$$Type, arg2: $Executor$$Type): $CompletionStage<(any)>
public "runAfterEither"(arg0: $CompletionStage$$Type<(any)>, arg1: $Runnable$$Type): $CompletableFuture<(void)>
public "acceptEitherAsync"(arg0: $CompletionStage$$Type<(T)>, arg1: $Consumer$$Type<(T)>): $CompletableFuture<(void)>
public "acceptEitherAsync"(arg0: $CompletionStage$$Type<(T)>, arg1: $Consumer$$Type<(T)>, arg2: $Executor$$Type): $CompletableFuture<(void)>
public "acceptEither"(arg0: $CompletionStage$$Type<(T)>, arg1: $Consumer$$Type<(T)>): $CompletableFuture<(void)>
public "applyToEitherAsync"<U>(arg0: $CompletionStage$$Type<(T)>, arg1: $Function$$Type<(T), (U)>, arg2: $Executor$$Type): $CompletableFuture<(U)>
public "applyToEitherAsync"(arg0: $CompletionStage$$Type<(any)>, arg1: $Function$$Type<(any), (any)>): $CompletionStage<(any)>
public "whenComplete"(arg0: $BiConsumer$$Type<(T), ($Throwable)>): $CompletableFuture<(T)>
get "cancelled"(): boolean
get "completedExceptionally"(): boolean
get "numberOfDependents"(): integer
get "done"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompletableFuture$$Type<T> = ($CompletableFuture<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompletableFuture_<T> = $CompletableFuture$$Type<(T)>;
}}
declare module "java.util.TreeMap" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$SequencedCollection, $SequencedCollection$$Type} from "java.util.SequencedCollection"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$SequencedSet, $SequencedSet$$Type} from "java.util.SequencedSet"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$AbstractMap, $AbstractMap$$Type} from "java.util.AbstractMap"
import {$Set, $Set$$Type} from "java.util.Set"
import {$NavigableSet, $NavigableSet$$Type} from "java.util.NavigableSet"
import {$NavigableMap, $NavigableMap$$Type} from "java.util.NavigableMap"
import {$SortedMap, $SortedMap$$Type} from "java.util.SortedMap"

export class $TreeMap<K, V> extends $AbstractMap<(K), (V)> implements $NavigableMap<(K), (V)>, $Cloneable, $Serializable {

constructor()
constructor(arg0: $SortedMap$$Type<(K), (V)>)
constructor(arg0: $Comparator$$Type<(K)>)
constructor(arg0: $Map$$Type<(K), (V)>)

public "comparator"(): $Comparator<(K)>
public "navigableKeySet"(): $NavigableSet<(K)>
public "descendingKeySet"(): $NavigableSet<(K)>
public "descendingMap"(): $NavigableMap<(K), (V)>
public "subMap"(arg0: K, arg1: boolean, arg2: K, arg3: boolean): $NavigableMap<(K), (V)>
public "subMap"(arg0: K, arg1: K): $SortedMap<(K), (V)>
public "headMap"(arg0: K, arg1: boolean): $NavigableMap<(K), (V)>
public "headMap"(arg0: K): $SortedMap<(K), (V)>
public "tailMap"(arg0: K): $SortedMap<(K), (V)>
public "tailMap"(arg0: K, arg1: boolean): $NavigableMap<(K), (V)>
public "lastKey"(): K
public "lowerKey"(arg0: K): K
public "floorKey"(arg0: K): K
public "ceilingKey"(arg0: K): K
public "higherKey"(arg0: K): K
public "lowerEntry"(arg0: K): $Map$Entry<(K), (V)>
public "floorEntry"(arg0: K): $Map$Entry<(K), (V)>
public "ceilingEntry"(arg0: K): $Map$Entry<(K), (V)>
public "higherEntry"(arg0: K): $Map$Entry<(K), (V)>
public "firstKey"(): K
public "putFirst"(arg0: K, arg1: V): V
public "putLast"(arg0: K, arg1: V): V
public "firstEntry"(): $Map$Entry<(K), (V)>
public "lastEntry"(): $Map$Entry<(K), (V)>
public "pollFirstEntry"(): $Map$Entry<(K), (V)>
public "pollLastEntry"(): $Map$Entry<(K), (V)>
public "remove"(arg0: any): V
public "size"(): integer
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "values"(): $Collection<(V)>
public "clone"(): any
public "clear"(): void
public "replace"(arg0: K, arg1: V): V
public "replace"(arg0: K, arg1: V, arg2: V): boolean
public "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public "putAll"(arg0: $Map$$Type<(K), (V)>): void
public "putIfAbsent"(arg0: K, arg1: V): V
public "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
public "containsKey"(arg0: any): boolean
public "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
public "keySet"(): $Set<(K)>
public "containsValue"(arg0: any): boolean
public "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public "reversed"(): $NavigableMap<(K), (V)>
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
public "sequencedKeySet"(): $SequencedSet<(K)>
public "sequencedValues"(): $SequencedCollection<(V)>
public "sequencedEntrySet"(): $SequencedSet<($Map$Entry<(K), (V)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreeMap$$Type<K, V> = ($TreeMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreeMap_<K, V> = $TreeMap$$Type<(K), (V)>;
}}
declare module "java.util.NavigableMap" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$SequencedCollection, $SequencedCollection$$Type} from "java.util.SequencedCollection"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$SequencedSet, $SequencedSet$$Type} from "java.util.SequencedSet"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$NavigableSet, $NavigableSet$$Type} from "java.util.NavigableSet"
import {$SortedMap, $SortedMap$$Type} from "java.util.SortedMap"

export interface $NavigableMap<K, V> extends $SortedMap<(K), (V)> {

 "reversed"(): $NavigableMap<(K), (V)>
 "navigableKeySet"(): $NavigableSet<(K)>
 "descendingKeySet"(): $NavigableSet<(K)>
 "descendingMap"(): $NavigableMap<(K), (V)>
 "subMap"(arg0: K, arg1: K): $SortedMap<(K), (V)>
 "subMap"(arg0: K, arg1: boolean, arg2: K, arg3: boolean): $NavigableMap<(K), (V)>
 "headMap"(arg0: K, arg1: boolean): $NavigableMap<(K), (V)>
 "headMap"(arg0: K): $SortedMap<(K), (V)>
 "tailMap"(arg0: K, arg1: boolean): $NavigableMap<(K), (V)>
 "tailMap"(arg0: K): $SortedMap<(K), (V)>
 "lowerKey"(arg0: K): K
 "floorKey"(arg0: K): K
 "ceilingKey"(arg0: K): K
 "higherKey"(arg0: K): K
 "lowerEntry"(arg0: K): $Map$Entry<(K), (V)>
 "floorEntry"(arg0: K): $Map$Entry<(K), (V)>
 "ceilingEntry"(arg0: K): $Map$Entry<(K), (V)>
 "higherEntry"(arg0: K): $Map$Entry<(K), (V)>
 "firstEntry"(): $Map$Entry<(K), (V)>
 "lastEntry"(): $Map$Entry<(K), (V)>
 "pollFirstEntry"(): $Map$Entry<(K), (V)>
 "pollLastEntry"(): $Map$Entry<(K), (V)>
 "comparator"(): $Comparator<(K)>
 "lastKey"(): K
 "firstKey"(): K
 "putFirst"(arg0: K, arg1: V): V
 "putLast"(arg0: K, arg1: V): V
 "values"(): $Collection<(V)>
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "keySet"(): $Set<(K)>
 "sequencedKeySet"(): $SequencedSet<(K)>
 "sequencedValues"(): $SequencedCollection<(V)>
 "sequencedEntrySet"(): $SequencedSet<($Map$Entry<(K), (V)>)>
 "remove"(arg0: any, arg1: any): boolean
 "remove"(arg0: any): V
 "size"(): integer
 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "replace"(arg0: K, arg1: V): V
 "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "putAll"(arg0: $Map$$Type<(K), (V)>): void
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
 "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
 "containsValue"(arg0: any): boolean
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
[index: string | number]: V
get "empty"(): boolean
}

export namespace $NavigableMap {
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
export class $NavigableMap$$Static<K, V> implements $NavigableMap {


 "reversed"(): $NavigableMap<(K), (V)>
 "navigableKeySet"(): $NavigableSet<(K)>
 "descendingKeySet"(): $NavigableSet<(K)>
 "descendingMap"(): $NavigableMap<(K), (V)>
 "subMap"(arg0: K, arg1: K): $SortedMap<(K), (V)>
 "subMap"(arg0: K, arg1: boolean, arg2: K, arg3: boolean): $NavigableMap<(K), (V)>
 "headMap"(arg0: K, arg1: boolean): $NavigableMap<(K), (V)>
 "headMap"(arg0: K): $SortedMap<(K), (V)>
 "tailMap"(arg0: K, arg1: boolean): $NavigableMap<(K), (V)>
 "tailMap"(arg0: K): $SortedMap<(K), (V)>
 "lowerKey"(arg0: K): K
 "floorKey"(arg0: K): K
 "ceilingKey"(arg0: K): K
 "higherKey"(arg0: K): K
 "lowerEntry"(arg0: K): $Map$Entry<(K), (V)>
 "floorEntry"(arg0: K): $Map$Entry<(K), (V)>
 "ceilingEntry"(arg0: K): $Map$Entry<(K), (V)>
 "higherEntry"(arg0: K): $Map$Entry<(K), (V)>
 "firstEntry"(): $Map$Entry<(K), (V)>
 "lastEntry"(): $Map$Entry<(K), (V)>
 "pollFirstEntry"(): $Map$Entry<(K), (V)>
 "pollLastEntry"(): $Map$Entry<(K), (V)>
 "comparator"(): $Comparator<(K)>
 "lastKey"(): K
 "firstKey"(): K
 "putFirst"(arg0: K, arg1: V): V
 "putLast"(arg0: K, arg1: V): V
 "values"(): $Collection<(V)>
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "keySet"(): $Set<(K)>
 "sequencedKeySet"(): $SequencedSet<(K)>
 "sequencedValues"(): $SequencedCollection<(V)>
 "sequencedEntrySet"(): $SequencedSet<($Map$Entry<(K), (V)>)>
 "remove"(arg0: any, arg1: any): boolean
 "remove"(arg0: any): V
 "size"(): integer
 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
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
 "putAll"(arg0: $Map$$Type<(K), (V)>): void
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
 "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
 "containsValue"(arg0: any): boolean
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NavigableMap$$Type<K, V> = ($NavigableMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NavigableMap_<K, V> = $NavigableMap$$Type<(K), (V)>;
}}
declare module "java.util.stream.IntStream$IntMapMultiConsumer" {
import {$IntConsumer, $IntConsumer$$Type} from "java.util.function.IntConsumer"

export interface $IntStream$IntMapMultiConsumer {

 "accept"(arg0: integer, arg1: $IntConsumer$$Type): void

(arg0: integer, arg1: $IntConsumer): void
}

export namespace $IntStream$IntMapMultiConsumer {
const probejs$$marker: never
}
export class $IntStream$IntMapMultiConsumer$$Static implements $IntStream$IntMapMultiConsumer {


 "accept"(arg0: integer, arg1: $IntConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntStream$IntMapMultiConsumer$$Type = ((arg0: integer, arg1: $IntConsumer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntStream$IntMapMultiConsumer_ = $IntStream$IntMapMultiConsumer$$Type;
}}
declare module "java.util.Properties" {
import {$Hashtable, $Hashtable$$Type} from "java.util.Hashtable"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Charset, $Charset$$Type} from "java.nio.charset.Charset"
import {$Reader, $Reader$$Type} from "java.io.Reader"
import {$PrintWriter, $PrintWriter$$Type} from "java.io.PrintWriter"
import {$OutputStream, $OutputStream$$Type} from "java.io.OutputStream"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Writer, $Writer$$Type} from "java.io.Writer"
import {$PrintStream, $PrintStream$$Type} from "java.io.PrintStream"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$Enumeration, $Enumeration$$Type} from "java.util.Enumeration"

export class $Properties extends $Hashtable<(any), (any)> {

constructor(arg0: $Properties$$Type)
constructor(arg0: integer)
constructor()

public "remove"(arg0: any): any
public "remove"(arg0: any, arg1: any): boolean
public "size"(): integer
public "get"(arg0: any): any
public "put"(arg0: any, arg1: any): any
public "getProperty"(arg0: StringJS): StringJS
public "getProperty"(arg0: StringJS, arg1: StringJS): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "values"(): $Collection<(any)>
public "hashCode"(): integer
public "clone"(): any
public "load"(arg0: $Reader$$Type): void
public "load"(arg0: $InputStream$$Type): void
public "store"(arg0: $OutputStream$$Type, arg1: StringJS): void
public "store"(arg0: $Writer$$Type, arg1: StringJS): void
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: any, arg1: any): any
public "replace"(arg0: any, arg1: any, arg2: any): boolean
public "replaceAll"(arg0: $BiFunction$$Type<(any), (any), (any)>): void
public "contains"(arg0: any): boolean
public "list"(arg0: $PrintStream$$Type): void
public "list"(arg0: $PrintWriter$$Type): void
public "elements"(): $Enumeration<(any)>
public "merge"(arg0: any, arg1: any, arg2: $BiFunction$$Type<(any), (any), (any)>): any
public "entrySet"(): $Set<($Map$Entry<(any), (any)>)>
public "putAll"(arg0: $Map$$Type<(any), (any)>): void
public "putIfAbsent"(arg0: any, arg1: any): any
public "compute"(arg0: any, arg1: $BiFunction$$Type<(any), (any), (any)>): any
public "setProperty"(arg0: StringJS, arg1: StringJS): any
public "forEach"(arg0: $BiConsumer$$Type<(any), (any)>): void
public "containsKey"(arg0: any): boolean
public "computeIfAbsent"(arg0: any, arg1: $Function$$Type<(any), (any)>): any
public "storeToXML"(arg0: $OutputStream$$Type, arg1: StringJS, arg2: StringJS): void
public "storeToXML"(arg0: $OutputStream$$Type, arg1: StringJS, arg2: $Charset$$Type): void
public "storeToXML"(arg0: $OutputStream$$Type, arg1: StringJS): void
public "keys"(): $Enumeration<(any)>
public "keySet"(): $Set<(any)>
public "containsValue"(arg0: any): boolean
public "getOrDefault"(arg0: any, arg1: any): any
public "computeIfPresent"(arg0: any, arg1: $BiFunction$$Type<(any), (any), (any)>): any
/**
 * 
 * @deprecated
 */
public "save"(arg0: $OutputStream$$Type, arg1: StringJS): void
public "loadFromXML"(arg0: $InputStream$$Type): void
public "propertyNames"(): $Enumeration<(any)>
public "stringPropertyNames"(): $Set<(StringJS)>
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Properties$$Type = ($Properties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Properties_ = $Properties$$Type;
}}
declare module "java.util.function.ToDoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToDoubleFunction<T> {

 "applyAsDouble"(arg0: T): double

(arg0: T): double
}

export namespace $ToDoubleFunction {
const probejs$$marker: never
}
export class $ToDoubleFunction$$Static<T> implements $ToDoubleFunction {


 "applyAsDouble"(arg0: T): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToDoubleFunction$$Type<T> = ((arg0: T) => double);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToDoubleFunction_<T> = $ToDoubleFunction$$Type<(T)>;
}}
declare module "java.util.Map" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export interface $Map<K, V> {

 "remove"(arg0: any, arg1: any): boolean
 "remove"(arg0: any): V
 "size"(): integer
 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "equals"(arg0: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "replace"(arg0: K, arg1: V): V
 "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "putAll"(arg0: $Map$$Type<(K), (V)>): void
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

export namespace $Map {
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
export class $Map$$Static<K, V> implements $Map {


 "remove"(arg0: any, arg1: any): boolean
 "remove"(arg0: any): V
 "size"(): integer
 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "equals"(arg0: any): boolean
 "values"(): $Collection<(V)>
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
 "putAll"(arg0: $Map$$Type<(K), (V)>): void
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
export type $Map$$Type<K, V> = ({[key: string]: V});
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Map_<K, V> = $Map$$Type<(K), (V)>;
}}
declare module "java.util.stream.LongStream$LongMapMultiConsumer" {
import {$LongConsumer, $LongConsumer$$Type} from "java.util.function.LongConsumer"

export interface $LongStream$LongMapMultiConsumer {

 "accept"(arg0: long, arg1: $LongConsumer$$Type): void

(arg0: long, arg1: $LongConsumer): void
}

export namespace $LongStream$LongMapMultiConsumer {
const probejs$$marker: never
}
export class $LongStream$LongMapMultiConsumer$$Static implements $LongStream$LongMapMultiConsumer {


 "accept"(arg0: long, arg1: $LongConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongStream$LongMapMultiConsumer$$Type = ((arg0: long, arg1: $LongConsumer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongStream$LongMapMultiConsumer_ = $LongStream$LongMapMultiConsumer$$Type;
}}
declare module "java.util.Optional" {
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $Optional<T> {


public static "ofNullable"<T>(arg0: T): $Optional<(T)>
public "ifPresentOrElse"(arg0: $Consumer$$Type<(T)>, arg1: $Runnable$$Type): void
public "or"(arg0: $Supplier$$Type<($Optional$$Type<(T)>)>): $Optional<(T)>
public "orElseGet"(arg0: $Supplier$$Type<(T)>): T
public "orElseThrow"<X extends $Throwable>(arg0: $Supplier$$Type<(X)>): T
public "orElseThrow"(): T
public "ifPresent"(arg0: $Consumer$$Type<(T)>): void
public "get"(): T
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "map"<U>(arg0: $Function$$Type<(T), (U)>): $Optional<(U)>
public "stream"(): $Stream<(T)>
public static "of"<T>(arg0: T): $Optional<(T)>
public "filter"(arg0: $Predicate$$Type<(T)>): $Optional<(T)>
public static "empty"<T>(): $Optional<(T)>
public "flatMap"<U>(arg0: $Function$$Type<(T), ($Optional$$Type<(U)>)>): $Optional<(U)>
public "isPresent"(): boolean
public "orElse"(arg0: T): T
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
declare module "java.util.BitSet" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$IntStream, $IntStream$$Type} from "java.util.stream.IntStream"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$LongBuffer, $LongBuffer$$Type} from "java.nio.LongBuffer"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $BitSet implements $Cloneable, $Serializable {

constructor(arg0: integer)
constructor()

public "or"(arg0: $BitSet$$Type): void
public "flip"(arg0: integer, arg1: integer): void
public "flip"(arg0: integer): void
public "and"(arg0: $BitSet$$Type): void
public "nextClearBit"(arg0: integer): integer
public "cardinality"(): integer
public "nextSetBit"(arg0: integer): integer
public "toLongArray"(): (long)[]
public "previousSetBit"(arg0: integer): integer
public "previousClearBit"(arg0: integer): integer
public "intersects"(arg0: $BitSet$$Type): boolean
public "xor"(arg0: $BitSet$$Type): void
public "andNot"(arg0: $BitSet$$Type): void
public "toByteArray"(): (byte)[]
public "size"(): integer
public "get"(arg0: integer): boolean
public "get"(arg0: integer, arg1: integer): $BitSet
public "equals"(arg0: any): boolean
public "length"(): integer
public "toString"(): StringJS
public "hashCode"(): integer
public "clone"(): any
public static "valueOf"(arg0: (byte)[]): $BitSet
public static "valueOf"(arg0: $LongBuffer$$Type): $BitSet
public static "valueOf"(arg0: (long)[]): $BitSet
public static "valueOf"(arg0: $ByteBuffer$$Type): $BitSet
public "clear"(arg0: integer): void
public "clear"(arg0: integer, arg1: integer): void
public "clear"(): void
public "isEmpty"(): boolean
public "stream"(): $IntStream
public "set"(arg0: integer, arg1: boolean): void
public "set"(arg0: integer): void
public "set"(arg0: integer, arg1: integer, arg2: boolean): void
public "set"(arg0: integer, arg1: integer): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BitSet$$Type = ($BitSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BitSet_ = $BitSet$$Type;
}}
declare module "java.util.function.LongUnaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongUnaryOperator {

 "applyAsLong"(arg0: long): long
 "compose"(arg0: $LongUnaryOperator$$Type): $LongUnaryOperator
 "andThen"(arg0: $LongUnaryOperator$$Type): $LongUnaryOperator

(arg0: long): long
}

export namespace $LongUnaryOperator {
function identity(): $LongUnaryOperator
const probejs$$marker: never
}
export class $LongUnaryOperator$$Static implements $LongUnaryOperator {


 "applyAsLong"(arg0: long): long
 "compose"(arg0: $LongUnaryOperator$$Type): $LongUnaryOperator
 "andThen"(arg0: $LongUnaryOperator$$Type): $LongUnaryOperator
static "identity"(): $LongUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongUnaryOperator$$Type = ((arg0: long) => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongUnaryOperator_ = $LongUnaryOperator$$Type;
}}
declare module "java.util.Enumeration" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"

export interface $Enumeration<E> {

 "asIterator"(): $Iterator<(E)>
 "hasMoreElements"(): boolean
 "nextElement"(): E
}

export namespace $Enumeration {
const probejs$$marker: never
}
export class $Enumeration$$Static<E> implements $Enumeration {


 "asIterator"(): $Iterator<(E)>
 "hasMoreElements"(): boolean
 "nextElement"(): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Enumeration$$Type<E> = ($Enumeration<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Enumeration_<E> = $Enumeration$$Type<(E)>;
}}
declare module "java.util.function.DoubleUnaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleUnaryOperator {

 "applyAsDouble"(arg0: double): double
 "compose"(arg0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
 "andThen"(arg0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator

(arg0: double): double
}

export namespace $DoubleUnaryOperator {
function identity(): $DoubleUnaryOperator
const probejs$$marker: never
}
export class $DoubleUnaryOperator$$Static implements $DoubleUnaryOperator {


 "applyAsDouble"(arg0: double): double
 "compose"(arg0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
 "andThen"(arg0: $DoubleUnaryOperator$$Type): $DoubleUnaryOperator
static "identity"(): $DoubleUnaryOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleUnaryOperator$$Type = ((arg0: double) => double);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleUnaryOperator_ = $DoubleUnaryOperator$$Type;
}}
declare module "java.util.RandomAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RandomAccess {

}

export namespace $RandomAccess {
const probejs$$marker: never
}
export class $RandomAccess$$Static implements $RandomAccess {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomAccess$$Type = ($RandomAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RandomAccess_ = $RandomAccess$$Type;
}}
declare module "java.util.Vector" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$RandomAccess, $RandomAccess$$Type} from "java.util.RandomAccess"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$AbstractList, $AbstractList$$Type} from "java.util.AbstractList"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ListIterator, $ListIterator$$Type} from "java.util.ListIterator"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$Enumeration, $Enumeration$$Type} from "java.util.Enumeration"

export class $Vector<E> extends $AbstractList<(E)> implements $List<(E)>, $RandomAccess, $Cloneable, $Serializable {

constructor(arg0: integer, arg1: integer)
constructor()
constructor(arg0: integer)
constructor(arg0: $Collection$$Type<(E)>)

public "capacity"(): integer
public "ensureCapacity"(arg0: integer): void
public "trimToSize"(): void
public "removeAll"(arg0: $Collection$$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$$Type<(any)>): boolean
public "listIterator"(arg0: integer): $ListIterator<(E)>
public "listIterator"(): $ListIterator<(E)>
public "containsAll"(arg0: $Collection$$Type<(any)>): boolean
public "elementAt"(arg0: integer): E
public "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
public "removeElementAt"(arg0: integer): void
public "removeElement"(arg0: any): boolean
public "insertElementAt"(arg0: E, arg1: integer): void
public "removeAllElements"(): void
public "firstElement"(): E
public "lastElement"(): E
public "setElementAt"(arg0: E, arg1: integer): void
public "addElement"(arg0: E): void
public "setSize"(arg0: integer): void
public "copyInto"(arg0: (any)[]): void
public "remove"(arg0: integer): E
public "remove"(arg0: any): boolean
public "size"(): integer
public "get"(arg0: integer): E
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "clone"(): any
public "indexOf"(arg0: any): integer
public "indexOf"(arg0: any, arg1: integer): integer
public "clear"(): void
public "lastIndexOf"(arg0: any): integer
public "lastIndexOf"(arg0: any, arg1: integer): integer
public "isEmpty"(): boolean
public "replaceAll"(arg0: $UnaryOperator$$Type<(E)>): void
public "add"(arg0: E): boolean
public "add"(arg0: integer, arg1: E): void
public "subList"(arg0: integer, arg1: integer): $List<(E)>
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public "iterator"(): $Iterator<(E)>
public "contains"(arg0: any): boolean
public "elements"(): $Enumeration<(E)>
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "addAll"(arg0: integer, arg1: $Collection$$Type<(E)>): boolean
public "set"(arg0: integer, arg1: E): E
public "forEach"(arg0: $Consumer$$Type<(E)>): void
public "sort"(arg0: $Comparator$$Type<(E)>): void
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vector$$Type<E> = ($Vector<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vector_<E> = $Vector$$Type<(E)>;
}}
declare module "java.util.HashMap" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$AbstractMap, $AbstractMap$$Type} from "java.util.AbstractMap"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $HashMap<K, V> extends $AbstractMap<(K), (V)> implements $Map<(K), (V)>, $Cloneable, $Serializable {

constructor(arg0: integer, arg1: float)
constructor(arg0: integer)
constructor()
constructor(arg0: $Map$$Type<(K), (V)>)

public "remove"(arg0: any, arg1: any): boolean
public "remove"(arg0: any): V
public "size"(): integer
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "values"(): $Collection<(V)>
public "clone"(): any
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: K, arg1: V, arg2: V): boolean
public "replace"(arg0: K, arg1: V): V
public "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
public static "newHashMap"<K, V>(arg0: integer): $HashMap<(K), (V)>
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public "putAll"(arg0: $Map$$Type<(K), (V)>): void
public "putIfAbsent"(arg0: K, arg1: V): V
public "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
public "containsKey"(arg0: any): boolean
public "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
public "keySet"(): $Set<(K)>
public "containsValue"(arg0: any): boolean
public "getOrDefault"(arg0: any, arg1: V): V
public "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HashMap$$Type<K, V> = ($HashMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HashMap_<K, V> = $HashMap$$Type<(K), (V)>;
}}
declare module "java.util.concurrent.atomic.AtomicReference" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$BinaryOperator, $BinaryOperator$$Type} from "java.util.function.BinaryOperator"

export class $AtomicReference<V> implements $Serializable {

constructor()
constructor(arg0: V)

public "weakCompareAndSetVolatile"(arg0: V, arg1: V): boolean
public "getAndUpdate"(arg0: $UnaryOperator$$Type<(V)>): V
public "updateAndGet"(arg0: $UnaryOperator$$Type<(V)>): V
public "getAndAccumulate"(arg0: V, arg1: $BinaryOperator$$Type<(V)>): V
public "accumulateAndGet"(arg0: V, arg1: $BinaryOperator$$Type<(V)>): V
public "getPlain"(): V
public "setPlain"(arg0: V): void
public "getOpaque"(): V
public "setOpaque"(arg0: V): void
public "getAcquire"(): V
public "setRelease"(arg0: V): void
public "compareAndSet"(arg0: V, arg1: V): boolean
public "compareAndExchange"(arg0: V, arg1: V): V
public "compareAndExchangeAcquire"(arg0: V, arg1: V): V
public "compareAndExchangeRelease"(arg0: V, arg1: V): V
public "weakCompareAndSetPlain"(arg0: V, arg1: V): boolean
/**
 * 
 * @deprecated
 */
public "weakCompareAndSet"(arg0: V, arg1: V): boolean
public "weakCompareAndSetAcquire"(arg0: V, arg1: V): boolean
public "weakCompareAndSetRelease"(arg0: V, arg1: V): boolean
public "getAndSet"(arg0: V): V
public "lazySet"(arg0: V): void
public "get"(): V
public "toString"(): StringJS
public "set"(arg0: V): void
get "plain"(): V
set "plain"(value: V)
get "opaque"(): V
set "opaque"(value: V)
get "acquire"(): V
set "release"(value: V)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AtomicReference$$Type<V> = ($AtomicReference<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AtomicReference_<V> = $AtomicReference$$Type<(V)>;
}}
declare module "java.util.function.LongBinaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongBinaryOperator {

 "applyAsLong"(arg0: long, arg1: long): long

(arg0: long, arg1: long): long
}

export namespace $LongBinaryOperator {
const probejs$$marker: never
}
export class $LongBinaryOperator$$Static implements $LongBinaryOperator {


 "applyAsLong"(arg0: long, arg1: long): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongBinaryOperator$$Type = ((arg0: long, arg1: long) => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongBinaryOperator_ = $LongBinaryOperator$$Type;
}}
declare module "java.util.Spliterator$OfDouble" {
import {$Spliterator$OfPrimitive, $Spliterator$OfPrimitive$$Type} from "java.util.Spliterator$OfPrimitive"
import {$DoubleConsumer, $DoubleConsumer$$Type} from "java.util.function.DoubleConsumer"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $Spliterator$OfDouble extends $Spliterator$OfPrimitive<(double), ($DoubleConsumer), ($Spliterator$OfDouble)> {

 "tryAdvance"(arg0: $Consumer$$Type<(double)>): boolean
 "tryAdvance"(arg0: $DoubleConsumer$$Type): boolean
 "tryAdvance"(arg0: any): boolean
 "trySplit"(): $Spliterator<(any)>
 "forEachRemaining"(arg0: $Consumer$$Type<(double)>): void
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $DoubleConsumer$$Type): void
 "estimateSize"(): long
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
 "getComparator"(): $Comparator<(double)>
 "characteristics"(): integer
get "exactSizeIfKnown"(): long
get "comparator"(): $Comparator<(double)>
}

export namespace $Spliterator$OfDouble {
const probejs$$marker: never
}
export class $Spliterator$OfDouble$$Static implements $Spliterator$OfDouble {


 "tryAdvance"(arg0: $Consumer$$Type<(double)>): boolean
 "tryAdvance"(arg0: $DoubleConsumer$$Type): boolean
 "tryAdvance"(arg0: any): boolean
 "trySplit"(): $Spliterator<(any)>
 "forEachRemaining"(arg0: $Consumer$$Type<(double)>): void
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $DoubleConsumer$$Type): void
 "estimateSize"(): long
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
 "getComparator"(): $Comparator<(double)>
 "characteristics"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Spliterator$OfDouble$$Type = ($Spliterator$OfDouble);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Spliterator$OfDouble_ = $Spliterator$OfDouble$$Type;
}}
declare module "java.util.PrimitiveIterator" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $PrimitiveIterator<T, T_CONS> extends $Iterator<(T)> {

 "forEachRemaining"(arg0: T_CONS): void
 "remove"(): void
 "forEachRemaining"(arg0: $Consumer$$Type<(T)>): void
 "hasNext"(): boolean
 "next"(): T
}

export namespace $PrimitiveIterator {
const probejs$$marker: never
}
export class $PrimitiveIterator$$Static<T, T_CONS> implements $PrimitiveIterator {


 "forEachRemaining"(arg0: T_CONS): void
 "remove"(): void
 "forEachRemaining"(arg0: $Consumer$$Type<(T)>): void
 "hasNext"(): boolean
 "next"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimitiveIterator$$Type<T, T_CONS> = ($PrimitiveIterator<(T), (T_CONS)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrimitiveIterator_<T, T_CONS> = $PrimitiveIterator$$Type<(T), (T_CONS)>;
}}
declare module "java.util.concurrent.atomic.AtomicReferenceArray" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$BinaryOperator, $BinaryOperator$$Type} from "java.util.function.BinaryOperator"

export class $AtomicReferenceArray<E> implements $Serializable {

constructor(arg0: (E)[])
constructor(arg0: integer)

public "weakCompareAndSetVolatile"(arg0: integer, arg1: E, arg2: E): boolean
public "getAndUpdate"(arg0: integer, arg1: $UnaryOperator$$Type<(E)>): E
public "updateAndGet"(arg0: integer, arg1: $UnaryOperator$$Type<(E)>): E
public "getAndAccumulate"(arg0: integer, arg1: E, arg2: $BinaryOperator$$Type<(E)>): E
public "accumulateAndGet"(arg0: integer, arg1: E, arg2: $BinaryOperator$$Type<(E)>): E
public "getPlain"(arg0: integer): E
public "setPlain"(arg0: integer, arg1: E): void
public "getOpaque"(arg0: integer): E
public "setOpaque"(arg0: integer, arg1: E): void
public "getAcquire"(arg0: integer): E
public "setRelease"(arg0: integer, arg1: E): void
public "compareAndSet"(arg0: integer, arg1: E, arg2: E): boolean
public "compareAndExchange"(arg0: integer, arg1: E, arg2: E): E
public "compareAndExchangeAcquire"(arg0: integer, arg1: E, arg2: E): E
public "compareAndExchangeRelease"(arg0: integer, arg1: E, arg2: E): E
public "weakCompareAndSetPlain"(arg0: integer, arg1: E, arg2: E): boolean
/**
 * 
 * @deprecated
 */
public "weakCompareAndSet"(arg0: integer, arg1: E, arg2: E): boolean
public "weakCompareAndSetAcquire"(arg0: integer, arg1: E, arg2: E): boolean
public "weakCompareAndSetRelease"(arg0: integer, arg1: E, arg2: E): boolean
public "getAndSet"(arg0: integer, arg1: E): E
public "lazySet"(arg0: integer, arg1: E): void
public "get"(arg0: integer): E
public "length"(): integer
public "toString"(): StringJS
public "set"(arg0: integer, arg1: E): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AtomicReferenceArray$$Type<E> = ($AtomicReferenceArray<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AtomicReferenceArray_<E> = $AtomicReferenceArray$$Type<(E)>;
}}
declare module "java.util.AbstractQueue" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Queue, $Queue$$Type} from "java.util.Queue"
import {$AbstractCollection, $AbstractCollection$$Type} from "java.util.AbstractCollection"

export class $AbstractQueue<E> extends $AbstractCollection<(E)> implements $Queue<(E)> {


public "element"(): E
public "remove"(): E
public "clear"(): void
public "add"(arg0: E): boolean
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "peek"(): E
public "poll"(): E
public "offer"(arg0: E): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractQueue$$Type<E> = ($AbstractQueue<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractQueue_<E> = $AbstractQueue$$Type<(E)>;
}}
declare module "java.util.logging.Filter" {
import {$LogRecord, $LogRecord$$Type} from "java.util.logging.LogRecord"

export interface $Filter {

 "isLoggable"(arg0: $LogRecord$$Type): boolean

(arg0: $LogRecord): boolean
}

export namespace $Filter {
const probejs$$marker: never
}
export class $Filter$$Static implements $Filter {


 "isLoggable"(arg0: $LogRecord$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Filter$$Type = ((arg0: $LogRecord) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Filter_ = $Filter$$Type;
}}
declare module "java.util.LinkedList" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ListIterator, $ListIterator$$Type} from "java.util.ListIterator"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$AbstractSequentialList, $AbstractSequentialList$$Type} from "java.util.AbstractSequentialList"
import {$Deque, $Deque$$Type} from "java.util.Deque"

export class $LinkedList<E> extends $AbstractSequentialList<(E)> implements $List<(E)>, $Deque<(E)>, $Cloneable, $Serializable {

constructor(arg0: $Collection$$Type<(E)>)
constructor()

public "push"(arg0: E): void
public "pop"(): E
public "peek"(): E
public "listIterator"(arg0: integer): $ListIterator<(E)>
public "reversed"(): $LinkedList<(E)>
public "getFirst"(): E
public "getLast"(): E
public "element"(): E
public "addFirst"(arg0: E): void
public "addLast"(arg0: E): void
public "removeFirst"(): E
public "removeLast"(): E
public "poll"(): E
public "pollFirst"(): E
public "pollLast"(): E
public "offerLast"(arg0: E): boolean
public "peekFirst"(): E
public "removeFirstOccurrence"(arg0: any): boolean
public "offerFirst"(arg0: E): boolean
public "peekLast"(): E
public "removeLastOccurrence"(arg0: any): boolean
public "offer"(arg0: E): boolean
public "descendingIterator"(): $Iterator<(E)>
public "remove"(arg0: integer): E
public "remove"(arg0: any): boolean
public "remove"(): E
public "size"(): integer
public "get"(arg0: integer): E
public "clone"(): any
public "indexOf"(arg0: any): integer
public "clear"(): void
public "lastIndexOf"(arg0: any): integer
public "add"(arg0: integer, arg1: E): void
public "add"(arg0: E): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: integer, arg1: $Collection$$Type<(E)>): boolean
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "set"(arg0: integer, arg1: E): E
public "removeAll"(arg0: $Collection$$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$$Type<(any)>): boolean
public "listIterator"(): $ListIterator<(E)>
public "containsAll"(arg0: $Collection$$Type<(any)>): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
public "isEmpty"(): boolean
public "subList"(arg0: integer, arg1: integer): $List<(E)>
public "iterator"(): $Iterator<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
get "first"(): E
get "last"(): E
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkedList$$Type<E> = ($LinkedList<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkedList_<E> = $LinkedList$$Type<(E)>;
}}
declare module "java.util.stream.Collector$Characteristics" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Collector$Characteristics extends $Enum<($Collector$Characteristics)> {
static readonly "IDENTITY_FINISH": $Collector$Characteristics
static readonly "UNORDERED": $Collector$Characteristics
static readonly "CONCURRENT": $Collector$Characteristics


public static "values"(): ($Collector$Characteristics)[]
public static "valueOf"(arg0: StringJS): $Collector$Characteristics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Collector$Characteristics$$Type = (("concurrent") | ("unordered") | ("identity_finish"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Collector$Characteristics_ = $Collector$Characteristics$$Type;
}}
declare module "java.util.Dictionary" {
import {$Enumeration, $Enumeration$$Type} from "java.util.Enumeration"

export class $Dictionary<K, V> {

constructor()

public "remove"(arg0: any): V
public "size"(): integer
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "isEmpty"(): boolean
public "elements"(): $Enumeration<(V)>
public "keys"(): $Enumeration<(K)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dictionary$$Type<K, V> = ($Dictionary<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dictionary_<K, V> = $Dictionary$$Type<(K), (V)>;
}}
declare module "java.util.SequencedMap" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$SequencedSet, $SequencedSet$$Type} from "java.util.SequencedSet"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$SequencedCollection, $SequencedCollection$$Type} from "java.util.SequencedCollection"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export interface $SequencedMap<K, V> extends $Map<(K), (V)> {

 "reversed"(): $SequencedMap<(K), (V)>
 "sequencedKeySet"(): $SequencedSet<(K)>
 "sequencedValues"(): $SequencedCollection<(V)>
 "sequencedEntrySet"(): $SequencedSet<($Map$Entry<(K), (V)>)>
 "putFirst"(arg0: K, arg1: V): V
 "putLast"(arg0: K, arg1: V): V
 "firstEntry"(): $Map$Entry<(K), (V)>
 "lastEntry"(): $Map$Entry<(K), (V)>
 "pollFirstEntry"(): $Map$Entry<(K), (V)>
 "pollLastEntry"(): $Map$Entry<(K), (V)>
 "remove"(arg0: any, arg1: any): boolean
 "remove"(arg0: any): V
 "size"(): integer
 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "equals"(arg0: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "replace"(arg0: K, arg1: V): V
 "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "putAll"(arg0: $Map$$Type<(K), (V)>): void
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

export namespace $SequencedMap {
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
export class $SequencedMap$$Static<K, V> implements $SequencedMap {


 "reversed"(): $SequencedMap<(K), (V)>
 "sequencedKeySet"(): $SequencedSet<(K)>
 "sequencedValues"(): $SequencedCollection<(V)>
 "sequencedEntrySet"(): $SequencedSet<($Map$Entry<(K), (V)>)>
 "putFirst"(arg0: K, arg1: V): V
 "putLast"(arg0: K, arg1: V): V
 "firstEntry"(): $Map$Entry<(K), (V)>
 "lastEntry"(): $Map$Entry<(K), (V)>
 "pollFirstEntry"(): $Map$Entry<(K), (V)>
 "pollLastEntry"(): $Map$Entry<(K), (V)>
 "remove"(arg0: any, arg1: any): boolean
 "remove"(arg0: any): V
 "size"(): integer
 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "equals"(arg0: any): boolean
 "values"(): $Collection<(V)>
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
 "putAll"(arg0: $Map$$Type<(K), (V)>): void
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
export type $SequencedMap$$Type<K, V> = ($SequencedMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SequencedMap_<K, V> = $SequencedMap$$Type<(K), (V)>;
}}
declare module "java.util.AbstractCollection" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export class $AbstractCollection<E> implements $Collection<(E)> {


public "removeAll"(arg0: $Collection$$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$$Type<(any)>): boolean
public "remove"(arg0: any): boolean
public "size"(): integer
public "toString"(): StringJS
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: E): boolean
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
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
export type $AbstractCollection$$Type<E> = ($AbstractCollection<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCollection_<E> = $AbstractCollection$$Type<(E)>;
}}
declare module "java.util.SortedMap" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$SequencedSet, $SequencedSet$$Type} from "java.util.SequencedSet"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$SequencedMap, $SequencedMap$$Type} from "java.util.SequencedMap"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$SequencedCollection, $SequencedCollection$$Type} from "java.util.SequencedCollection"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export interface $SortedMap<K, V> extends $SequencedMap<(K), (V)> {

 "reversed"(): $SequencedMap<(any), (any)>
 "comparator"(): $Comparator<(K)>
 "subMap"(arg0: K, arg1: K): $SortedMap<(K), (V)>
 "headMap"(arg0: K): $SortedMap<(K), (V)>
 "tailMap"(arg0: K): $SortedMap<(K), (V)>
 "lastKey"(): K
 "firstKey"(): K
 "putFirst"(arg0: K, arg1: V): V
 "putLast"(arg0: K, arg1: V): V
 "values"(): $Collection<(V)>
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "keySet"(): $Set<(K)>
 "sequencedKeySet"(): $SequencedSet<(K)>
 "sequencedValues"(): $SequencedCollection<(V)>
 "sequencedEntrySet"(): $SequencedSet<($Map$Entry<(K), (V)>)>
 "firstEntry"(): $Map$Entry<(K), (V)>
 "lastEntry"(): $Map$Entry<(K), (V)>
 "pollFirstEntry"(): $Map$Entry<(K), (V)>
 "pollLastEntry"(): $Map$Entry<(K), (V)>
 "remove"(arg0: any, arg1: any): boolean
 "remove"(arg0: any): V
 "size"(): integer
 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "replace"(arg0: K, arg1: V): V
 "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "putAll"(arg0: $Map$$Type<(K), (V)>): void
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
 "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
 "containsValue"(arg0: any): boolean
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
[index: string | number]: V
get "empty"(): boolean
}

export namespace $SortedMap {
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
export class $SortedMap$$Static<K, V> implements $SortedMap {


 "reversed"(): $SequencedMap<(any), (any)>
 "comparator"(): $Comparator<(K)>
 "subMap"(arg0: K, arg1: K): $SortedMap<(K), (V)>
 "headMap"(arg0: K): $SortedMap<(K), (V)>
 "tailMap"(arg0: K): $SortedMap<(K), (V)>
 "lastKey"(): K
 "firstKey"(): K
 "putFirst"(arg0: K, arg1: V): V
 "putLast"(arg0: K, arg1: V): V
 "values"(): $Collection<(V)>
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "keySet"(): $Set<(K)>
 "sequencedKeySet"(): $SequencedSet<(K)>
 "sequencedValues"(): $SequencedCollection<(V)>
 "sequencedEntrySet"(): $SequencedSet<($Map$Entry<(K), (V)>)>
 "firstEntry"(): $Map$Entry<(K), (V)>
 "lastEntry"(): $Map$Entry<(K), (V)>
 "pollFirstEntry"(): $Map$Entry<(K), (V)>
 "pollLastEntry"(): $Map$Entry<(K), (V)>
 "remove"(arg0: any, arg1: any): boolean
 "remove"(arg0: any): V
 "size"(): integer
 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
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
 "putAll"(arg0: $Map$$Type<(K), (V)>): void
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
 "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
 "containsValue"(arg0: any): boolean
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SortedMap$$Type<K, V> = ($SortedMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SortedMap_<K, V> = $SortedMap$$Type<(K), (V)>;
}}
declare module "java.util.AbstractList" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ListIterator, $ListIterator$$Type} from "java.util.ListIterator"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$List, $List$$Type} from "java.util.List"
import {$AbstractCollection, $AbstractCollection$$Type} from "java.util.AbstractCollection"

export class $AbstractList<E> extends $AbstractCollection<(E)> implements $List<(E)> {


public "listIterator"(): $ListIterator<(E)>
public "listIterator"(arg0: integer): $ListIterator<(E)>
public "remove"(arg0: integer): E
public "get"(arg0: integer): E
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "indexOf"(arg0: any): integer
public "clear"(): void
public "lastIndexOf"(arg0: any): integer
public "add"(arg0: E): boolean
public "add"(arg0: integer, arg1: E): void
public "subList"(arg0: integer, arg1: integer): $List<(E)>
public "iterator"(): $Iterator<(E)>
public "addAll"(arg0: integer, arg1: $Collection$$Type<(E)>): boolean
public "set"(arg0: integer, arg1: E): E
public "removeAll"(arg0: $Collection$$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$$Type<(any)>): boolean
public "reversed"(): $List<(E)>
public "containsAll"(arg0: $Collection$$Type<(any)>): boolean
public "getFirst"(): E
public "getLast"(): E
public "addFirst"(arg0: E): void
public "addLast"(arg0: E): void
public "removeFirst"(): E
public "removeLast"(): E
public "remove"(arg0: any): boolean
public "size"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
public "isEmpty"(): boolean
public "replaceAll"(arg0: $UnaryOperator$$Type<(E)>): void
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "sort"(arg0: $Comparator$$Type<(E)>): void
[index: number]: E
get "first"(): E
get "last"(): E
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractList$$Type<E> = ($AbstractList<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractList_<E> = $AbstractList$$Type<(E)>;
}}
declare module "java.util.function.LongSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongSupplier {

 "getAsLong"(): long

(): long
get "asLong"(): long
}

export namespace $LongSupplier {
const probejs$$marker: never
}
export class $LongSupplier$$Static implements $LongSupplier {


 "getAsLong"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongSupplier$$Type = (() => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongSupplier_ = $LongSupplier$$Type;
}}
declare module "java.util.regex.MatchResult" {
import {$Map, $Map$$Type} from "java.util.Map"

export interface $MatchResult {

 "namedGroups"(): $Map<(StringJS), (integer)>
 "hasMatch"(): boolean
 "groupCount"(): integer
 "group"(): StringJS
 "group"(arg0: integer): StringJS
 "group"(arg0: StringJS): StringJS
 "end"(): integer
 "end"(arg0: integer): integer
 "end"(arg0: StringJS): integer
 "start"(): integer
 "start"(arg0: integer): integer
 "start"(arg0: StringJS): integer
}

export namespace $MatchResult {
const probejs$$marker: never
}
export class $MatchResult$$Static implements $MatchResult {


 "namedGroups"(): $Map<(StringJS), (integer)>
 "hasMatch"(): boolean
 "groupCount"(): integer
 "group"(): StringJS
 "group"(arg0: integer): StringJS
 "group"(arg0: StringJS): StringJS
 "end"(): integer
 "end"(arg0: integer): integer
 "end"(arg0: StringJS): integer
 "start"(): integer
 "start"(arg0: integer): integer
 "start"(arg0: StringJS): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatchResult$$Type = ($MatchResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MatchResult_ = $MatchResult$$Type;
}}
declare module "java.util.Random" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$IntStream, $IntStream$$Type} from "java.util.stream.IntStream"
import {$LongStream, $LongStream$$Type} from "java.util.stream.LongStream"
import {$RandomGenerator, $RandomGenerator$$Type} from "java.util.random.RandomGenerator"
import {$DoubleStream, $DoubleStream$$Type} from "java.util.stream.DoubleStream"

export class $Random implements $RandomGenerator, $Serializable {

constructor()
constructor(arg0: long)

public "nextInt"(arg0: integer): integer
public "nextInt"(): integer
public "nextDouble"(): double
public "longs"(arg0: long, arg1: long, arg2: long): $LongStream
public "longs"(arg0: long, arg1: long): $LongStream
public "longs"(arg0: long): $LongStream
public "longs"(): $LongStream
public "nextBytes"(arg0: (byte)[]): void
public "ints"(arg0: long): $IntStream
public "ints"(arg0: long, arg1: integer, arg2: integer): $IntStream
public "ints"(): $IntStream
public "ints"(arg0: integer, arg1: integer): $IntStream
public "setSeed"(arg0: long): void
public "doubles"(arg0: double, arg1: double): $DoubleStream
public "doubles"(): $DoubleStream
public "doubles"(arg0: long): $DoubleStream
public "doubles"(arg0: long, arg1: double, arg2: double): $DoubleStream
public "nextFloat"(): float
public "nextGaussian"(): double
public static "from"(arg0: $RandomGenerator$$Type): $Random
public "nextLong"(): long
public "nextBoolean"(): boolean
public "nextInt"(arg0: integer, arg1: integer): integer
public "nextDouble"(arg0: double, arg1: double): double
public "nextDouble"(arg0: double): double
public "nextFloat"(arg0: float, arg1: float): float
public "nextFloat"(arg0: float): float
public "nextGaussian"(arg0: double, arg1: double): double
public "isDeprecated"(): boolean
public "nextExponential"(): double
public static "getDefault"(): $RandomGenerator
public static "of"(arg0: StringJS): $RandomGenerator
public "nextLong"(arg0: long, arg1: long): long
public "nextLong"(arg0: long): long
set "seed"(value: long)
get "deprecated"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Random$$Type = ($Random);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Random_ = $Random$$Type;
}}
declare module "java.util.logging.ErrorManager" {
import {$Exception, $Exception$$Type} from "java.lang.Exception"

export class $ErrorManager {
static readonly "GENERIC_FAILURE": integer
static readonly "CLOSE_FAILURE": integer
static readonly "OPEN_FAILURE": integer
static readonly "FORMAT_FAILURE": integer
static readonly "FLUSH_FAILURE": integer
static readonly "WRITE_FAILURE": integer

constructor()

public "error"(arg0: StringJS, arg1: $Exception$$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ErrorManager$$Type = ($ErrorManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ErrorManager_ = $ErrorManager$$Type;
}}
declare module "java.util.function.IntToDoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntToDoubleFunction {

 "applyAsDouble"(arg0: integer): double

(arg0: integer): double
}

export namespace $IntToDoubleFunction {
const probejs$$marker: never
}
export class $IntToDoubleFunction$$Static implements $IntToDoubleFunction {


 "applyAsDouble"(arg0: integer): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntToDoubleFunction$$Type = ((arg0: integer) => double);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntToDoubleFunction_ = $IntToDoubleFunction$$Type;
}}
declare module "java.util.zip.ZipConstants" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $ZipConstants {

}

export namespace $ZipConstants {
const probejs$$marker: never
}
export class $ZipConstants$$Static implements $ZipConstants {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZipConstants$$Type = ($ZipConstants);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZipConstants_ = $ZipConstants$$Type;
}}
declare module "java.util.Locale$IsoCountryCode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Locale$IsoCountryCode extends $Enum<($Locale$IsoCountryCode)> {
static readonly "PART3": $Locale$IsoCountryCode
static readonly "PART1_ALPHA2": $Locale$IsoCountryCode
static readonly "PART1_ALPHA3": $Locale$IsoCountryCode


public static "values"(): ($Locale$IsoCountryCode)[]
public static "valueOf"(arg0: StringJS): $Locale$IsoCountryCode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Locale$IsoCountryCode$$Type = (("part1_alpha2") | ("part1_alpha3") | ("part3"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Locale$IsoCountryCode_ = $Locale$IsoCountryCode$$Type;
}}
declare module "java.util.concurrent.BlockingQueue" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Queue, $Queue$$Type} from "java.util.Queue"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export interface $BlockingQueue<E> extends $Queue<(E)> {

 "take"(): E
 "drainTo"(arg0: $Collection$$Type<(E)>, arg1: integer): integer
 "drainTo"(arg0: $Collection$$Type<(E)>): integer
 "poll"(arg0: long, arg1: $TimeUnit$$Type): E
 "offer"(arg0: E, arg1: long, arg2: $TimeUnit$$Type): boolean
 "offer"(arg0: E): boolean
 "remove"(arg0: any): boolean
 "put"(arg0: E): void
 "add"(arg0: E): boolean
 "contains"(arg0: any): boolean
 "remainingCapacity"(): integer
 "peek"(): E
 "element"(): E
 "poll"(): E
 "remove"(): E
 "removeAll"(arg0: $Collection$$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$$Type<(any)>): boolean
 "parallelStream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "iterator"(): $Iterator<(E)>
 "stream"(): $Stream<(E)>
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "forEach"(arg0: $Consumer$$Type<(E)>): void
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export namespace $BlockingQueue {
const probejs$$marker: never
}
export class $BlockingQueue$$Static<E> implements $BlockingQueue {


 "take"(): E
 "drainTo"(arg0: $Collection$$Type<(E)>, arg1: integer): integer
 "drainTo"(arg0: $Collection$$Type<(E)>): integer
 "poll"(arg0: long, arg1: $TimeUnit$$Type): E
 "offer"(arg0: E, arg1: long, arg2: $TimeUnit$$Type): boolean
 "offer"(arg0: E): boolean
 "remove"(arg0: any): boolean
 "put"(arg0: E): void
 "add"(arg0: E): boolean
 "contains"(arg0: any): boolean
 "remainingCapacity"(): integer
 "peek"(): E
 "element"(): E
 "poll"(): E
 "remove"(): E
 "removeAll"(arg0: $Collection$$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$$Type<(any)>): boolean
 "parallelStream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "iterator"(): $Iterator<(E)>
 "stream"(): $Stream<(E)>
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "forEach"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockingQueue$$Type<E> = ($BlockingQueue<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockingQueue_<E> = $BlockingQueue$$Type<(E)>;
}}
declare module "java.util.LongSummaryStatistics" {
import {$LongConsumer, $LongConsumer$$Type} from "java.util.function.LongConsumer"
import {$IntConsumer, $IntConsumer$$Type} from "java.util.function.IntConsumer"

export class $LongSummaryStatistics implements $LongConsumer, $IntConsumer {

constructor()
constructor(arg0: long, arg1: long, arg2: long, arg3: long)

public "toString"(): StringJS
public "accept"(arg0: integer): void
public "accept"(arg0: long): void
public "combine"(arg0: $LongSummaryStatistics$$Type): void
public "getCount"(): long
public "getMax"(): long
public "getMin"(): long
public "getSum"(): long
public "getAverage"(): double
public "andThen"(arg0: $LongConsumer$$Type): $LongConsumer
public "andThen"(arg0: $IntConsumer$$Type): $IntConsumer
get "count"(): long
get "max"(): long
get "min"(): long
get "sum"(): long
get "average"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongSummaryStatistics$$Type = ($LongSummaryStatistics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongSummaryStatistics_ = $LongSummaryStatistics$$Type;
}}
declare module "java.util.zip.ZipFile" {
import {$File, $File$$Type} from "java.io.File"
import {$Charset, $Charset$$Type} from "java.nio.charset.Charset"
import {$Closeable, $Closeable$$Type} from "java.io.Closeable"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Enumeration, $Enumeration$$Type} from "java.util.Enumeration"
import {$ZipEntry, $ZipEntry$$Type} from "java.util.zip.ZipEntry"
import {$ZipConstants, $ZipConstants$$Type} from "java.util.zip.ZipConstants"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ZipFile implements $ZipConstants, $Closeable {
static readonly "OPEN_DELETE": integer
static readonly "OPEN_READ": integer

constructor(arg0: StringJS, arg1: $Charset$$Type)
constructor(arg0: $File$$Type, arg1: integer, arg2: $Charset$$Type)
constructor(arg0: $File$$Type)
constructor(arg0: StringJS)
constructor(arg0: $File$$Type, arg1: integer)
constructor(arg0: $File$$Type, arg1: $Charset$$Type)

public "getComment"(): StringJS
public "getEntry"(arg0: StringJS): $ZipEntry
public "getInputStream"(arg0: $ZipEntry$$Type): $InputStream
public "getName"(): StringJS
public "size"(): integer
public "stream"(): $Stream<($ZipEntry)>
public "close"(): void
public "entries"(): $Enumeration<($ZipEntry)>
get "comment"(): StringJS
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZipFile$$Type = ($ZipFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZipFile_ = $ZipFile$$Type;
}}
declare module "java.util.function.LongToIntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongToIntFunction {

 "applyAsInt"(arg0: long): integer

(arg0: long): integer
}

export namespace $LongToIntFunction {
const probejs$$marker: never
}
export class $LongToIntFunction$$Static implements $LongToIntFunction {


 "applyAsInt"(arg0: long): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongToIntFunction$$Type = ((arg0: long) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongToIntFunction_ = $LongToIntFunction$$Type;
}}
declare module "java.util.Set" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export interface $Set<E> extends $Collection<(E)> {

 "removeAll"(arg0: $Collection$$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$$Type<(any)>): boolean
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: E): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "iterator"(): $Iterator<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "parallelStream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$$Type<(E)>): void
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export namespace $Set {
function copyOf<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
function of<E>(arg0: E, arg1: E): $Set<(E)>
function of<E>(...arg0: (E)[]): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
function of<E>(): $Set<(E)>
function of<E>(arg0: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
const probejs$$marker: never
}
export class $Set$$Static<E> implements $Set {


 "removeAll"(arg0: $Collection$$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$$Type<(any)>): boolean
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: E): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "iterator"(): $Iterator<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E): $Set<(E)>
static "of"<E>(...arg0: (E)[]): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
static "of"<E>(): $Set<(E)>
static "of"<E>(arg0: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "parallelStream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Set$$Type<E> = ((E)[]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Set_<E> = $Set$$Type<(E)>;
}}
declare module "java.util.function.Consumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Consumer<T> {

 "andThen"(arg0: $Consumer$$Type<(T)>): $Consumer<(T)>
 "accept"(arg0: T): void

(arg0: T): void
}

export namespace $Consumer {
const probejs$$marker: never
}
export class $Consumer$$Static<T> implements $Consumer {


 "andThen"(arg0: $Consumer$$Type<(T)>): $Consumer<(T)>
 "accept"(arg0: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Consumer$$Type<T> = ((arg0: T) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Consumer_<T> = $Consumer$$Type<(T)>;
}}
declare module "java.util.function.LongPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongPredicate {

 "or"(arg0: $LongPredicate$$Type): $LongPredicate
 "negate"(): $LongPredicate
 "and"(arg0: $LongPredicate$$Type): $LongPredicate
 "test"(arg0: long): boolean

(arg0: long): boolean
}

export namespace $LongPredicate {
const probejs$$marker: never
}
export class $LongPredicate$$Static implements $LongPredicate {


 "or"(arg0: $LongPredicate$$Type): $LongPredicate
 "negate"(): $LongPredicate
 "and"(arg0: $LongPredicate$$Type): $LongPredicate
 "test"(arg0: long): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongPredicate$$Type = ((arg0: long) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongPredicate_ = $LongPredicate$$Type;
}}
declare module "java.util.function.IntBinaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntBinaryOperator {

 "applyAsInt"(arg0: integer, arg1: integer): integer

(arg0: integer, arg1: integer): integer
}

export namespace $IntBinaryOperator {
const probejs$$marker: never
}
export class $IntBinaryOperator$$Static implements $IntBinaryOperator {


 "applyAsInt"(arg0: integer, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntBinaryOperator$$Type = ((arg0: integer, arg1: integer) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntBinaryOperator_ = $IntBinaryOperator$$Type;
}}
declare module "java.util.logging.Formatter" {
import {$LogRecord, $LogRecord$$Type} from "java.util.logging.LogRecord"
import {$Handler, $Handler$$Type} from "java.util.logging.Handler"

export class $Formatter {


public "getHead"(arg0: $Handler$$Type): StringJS
public "getTail"(arg0: $Handler$$Type): StringJS
public "formatMessage"(arg0: $LogRecord$$Type): StringJS
public "format"(arg0: $LogRecord$$Type): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Formatter$$Type = ($Formatter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Formatter_ = $Formatter$$Type;
}}
declare module "java.util.function.ObjLongConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ObjLongConsumer<T> {

 "accept"(arg0: T, arg1: long): void

(arg0: T, arg1: long): void
}

export namespace $ObjLongConsumer {
const probejs$$marker: never
}
export class $ObjLongConsumer$$Static<T> implements $ObjLongConsumer {


 "accept"(arg0: T, arg1: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjLongConsumer$$Type<T> = ((arg0: T, arg1: long) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjLongConsumer_<T> = $ObjLongConsumer$$Type<(T)>;
}}
declare module "java.util.stream.LongStream$Builder" {
import {$LongConsumer, $LongConsumer$$Type} from "java.util.function.LongConsumer"
import {$LongStream, $LongStream$$Type} from "java.util.stream.LongStream"

export interface $LongStream$Builder extends $LongConsumer {

 "build"(): $LongStream
 "add"(arg0: long): $LongStream$Builder
 "accept"(arg0: long): void
 "andThen"(arg0: $LongConsumer$$Type): $LongConsumer
}

export namespace $LongStream$Builder {
const probejs$$marker: never
}
export class $LongStream$Builder$$Static implements $LongStream$Builder {


 "build"(): $LongStream
 "add"(arg0: long): $LongStream$Builder
 "accept"(arg0: long): void
 "andThen"(arg0: $LongConsumer$$Type): $LongConsumer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongStream$Builder$$Type = ($LongStream$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongStream$Builder_ = $LongStream$Builder$$Type;
}}
declare module "java.util.logging.Level" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"

export class $Level implements $Serializable {
static readonly "CONFIG": $Level
static readonly "ALL": $Level
static readonly "SEVERE": $Level
static readonly "FINER": $Level
static readonly "FINEST": $Level
static readonly "FINE": $Level
static readonly "INFO": $Level
static readonly "WARNING": $Level
static readonly "OFF": $Level


public "getResourceBundleName"(): StringJS
public "getLocalizedName"(): StringJS
public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "intValue"(): integer
public static "parse"(arg0: StringJS): $Level
get "resourceBundleName"(): StringJS
get "localizedName"(): StringJS
get "name"(): StringJS
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
declare module "java.util.stream.IntStream$Builder" {
import {$IntStream, $IntStream$$Type} from "java.util.stream.IntStream"
import {$IntConsumer, $IntConsumer$$Type} from "java.util.function.IntConsumer"

export interface $IntStream$Builder extends $IntConsumer {

 "build"(): $IntStream
 "add"(arg0: integer): $IntStream$Builder
 "accept"(arg0: integer): void
 "andThen"(arg0: $IntConsumer$$Type): $IntConsumer
}

export namespace $IntStream$Builder {
const probejs$$marker: never
}
export class $IntStream$Builder$$Static implements $IntStream$Builder {


 "build"(): $IntStream
 "add"(arg0: integer): $IntStream$Builder
 "accept"(arg0: integer): void
 "andThen"(arg0: $IntConsumer$$Type): $IntConsumer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntStream$Builder$$Type = ($IntStream$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntStream$Builder_ = $IntStream$Builder$$Type;
}}
declare module "java.util.function.BooleanSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BooleanSupplier {

 "getAsBoolean"(): boolean

(): boolean
get "asBoolean"(): boolean
}

export namespace $BooleanSupplier {
const probejs$$marker: never
}
export class $BooleanSupplier$$Static implements $BooleanSupplier {


 "getAsBoolean"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanSupplier$$Type = (() => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BooleanSupplier_ = $BooleanSupplier$$Type;
}}
declare module "java.util.function.BiConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BiConsumer<T, U> {

 "andThen"(arg0: $BiConsumer$$Type<(T), (U)>): $BiConsumer<(T), (U)>
 "accept"(arg0: T, arg1: U): void

(arg0: T, arg1: U): void
}

export namespace $BiConsumer {
const probejs$$marker: never
}
export class $BiConsumer$$Static<T, U> implements $BiConsumer {


 "andThen"(arg0: $BiConsumer$$Type<(T), (U)>): $BiConsumer<(T), (U)>
 "accept"(arg0: T, arg1: U): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiConsumer$$Type<T, U> = ((arg0: T, arg1: U) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiConsumer_<T, U> = $BiConsumer$$Type<(T), (U)>;
}}
declare module "java.util.concurrent.ScheduledExecutorService" {
import {$ScheduledFuture, $ScheduledFuture$$Type} from "java.util.concurrent.ScheduledFuture"
import {$Callable, $Callable$$Type} from "java.util.concurrent.Callable"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$List, $List$$Type} from "java.util.List"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$ExecutorService, $ExecutorService$$Type} from "java.util.concurrent.ExecutorService"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export interface $ScheduledExecutorService extends $ExecutorService {

 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShutdown"(): boolean
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
 "submit"(arg0: $Runnable$$Type): $Future<(any)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "shutdownNow"(): $List<($Runnable)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "shutdown"(): void
 "isTerminated"(): boolean
 "close"(): void
 "execute"(arg0: $Runnable$$Type): void
get "terminated"(): boolean
}

export namespace $ScheduledExecutorService {
const probejs$$marker: never
}
export class $ScheduledExecutorService$$Static implements $ScheduledExecutorService {


 "schedule"(arg0: $Runnable$$Type, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "schedule"<V>(arg0: $Callable$$Type<(V)>, arg1: long, arg2: $TimeUnit$$Type): $ScheduledFuture<(V)>
 "scheduleAtFixedRate"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "scheduleWithFixedDelay"(arg0: $Runnable$$Type, arg1: long, arg2: long, arg3: $TimeUnit$$Type): $ScheduledFuture<(any)>
 "isShutdown"(): boolean
 "submit"<T>(arg0: $Callable$$Type<(T)>): $Future<(T)>
 "submit"(arg0: $Runnable$$Type): $Future<(any)>
 "submit"<T>(arg0: $Runnable$$Type, arg1: T): $Future<(T)>
 "awaitTermination"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "shutdownNow"(): $List<($Runnable)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): $List<($Future<(T)>)>
 "invokeAll"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): $List<($Future<(T)>)>
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>, arg1: long, arg2: $TimeUnit$$Type): T
 "invokeAny"<T>(arg0: $Collection$$Type<($Callable$$Type<(T)>)>): T
 "shutdown"(): void
 "isTerminated"(): boolean
 "close"(): void
 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScheduledExecutorService$$Type = ($ScheduledExecutorService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScheduledExecutorService_ = $ScheduledExecutorService$$Type;
}}
declare module "java.util.function.IntConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntConsumer {

 "andThen"(arg0: $IntConsumer$$Type): $IntConsumer
 "accept"(arg0: integer): void

(arg0: integer): void
}

export namespace $IntConsumer {
const probejs$$marker: never
}
export class $IntConsumer$$Static implements $IntConsumer {


 "andThen"(arg0: $IntConsumer$$Type): $IntConsumer
 "accept"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntConsumer$$Type = ((arg0: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntConsumer_ = $IntConsumer$$Type;
}}
declare module "java.util.function.LongToDoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongToDoubleFunction {

 "applyAsDouble"(arg0: long): double

(arg0: long): double
}

export namespace $LongToDoubleFunction {
const probejs$$marker: never
}
export class $LongToDoubleFunction$$Static implements $LongToDoubleFunction {


 "applyAsDouble"(arg0: long): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongToDoubleFunction$$Type = ((arg0: long) => double);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongToDoubleFunction_ = $LongToDoubleFunction$$Type;
}}
declare module "java.util.concurrent.Future$State" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Future$State extends $Enum<($Future$State)> {
static readonly "CANCELLED": $Future$State
static readonly "SUCCESS": $Future$State
static readonly "FAILED": $Future$State
static readonly "RUNNING": $Future$State


public static "values"(): ($Future$State)[]
public static "valueOf"(arg0: StringJS): $Future$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Future$State$$Type = (("running") | ("success") | ("failed") | ("cancelled"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Future$State_ = $Future$State$$Type;
}}
declare module "java.util.zip.ZipEntry" {
import {$LocalDateTime, $LocalDateTime$$Type} from "java.time.LocalDateTime"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$ZipConstants, $ZipConstants$$Type} from "java.util.zip.ZipConstants"
import {$FileTime, $FileTime$$Type} from "java.nio.file.attribute.FileTime"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ZipEntry implements $ZipConstants, $Cloneable {
static readonly "STORED": integer
static readonly "DEFLATED": integer

constructor(arg0: $ZipEntry$$Type)
constructor(arg0: StringJS)

public "getTime"(): long
public "getComment"(): StringJS
public "setTime"(arg0: long): void
public "setTimeLocal"(arg0: $LocalDateTime$$Type): void
public "getTimeLocal"(): $LocalDateTime
public "setLastAccessTime"(arg0: $FileTime$$Type): $ZipEntry
public "getLastAccessTime"(): $FileTime
public "setCreationTime"(arg0: $FileTime$$Type): $ZipEntry
public "getCreationTime"(): $FileTime
public "setSize"(arg0: long): void
public "getCompressedSize"(): long
public "setCompressedSize"(arg0: long): void
public "setCrc"(arg0: long): void
public "getCrc"(): long
public "setMethod"(arg0: integer): void
public "setExtra"(arg0: (byte)[]): void
public "getExtra"(): (byte)[]
public "setComment"(arg0: StringJS): void
public "getSize"(): long
public "isDirectory"(): boolean
public "setLastModifiedTime"(arg0: $FileTime$$Type): $ZipEntry
public "getLastModifiedTime"(): $FileTime
public "getName"(): StringJS
public "toString"(): StringJS
public "hashCode"(): integer
public "clone"(): any
public "getMethod"(): integer
get "time"(): long
get "comment"(): StringJS
set "time"(value: long)
set "timeLocal"(value: $LocalDateTime$$Type)
get "timeLocal"(): $LocalDateTime
set "lastAccessTime"(value: $FileTime$$Type)
get "lastAccessTime"(): $FileTime
set "creationTime"(value: $FileTime$$Type)
get "creationTime"(): $FileTime
set "size"(value: long)
get "compressedSize"(): long
set "compressedSize"(value: long)
set "crc"(value: long)
get "crc"(): long
set "method"(value: integer)
set "extra"(value: (byte)[])
get "extra"(): (byte)[]
set "comment"(value: StringJS)
get "size"(): long
get "directory"(): boolean
set "lastModifiedTime"(value: $FileTime$$Type)
get "lastModifiedTime"(): $FileTime
get "name"(): StringJS
get "method"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZipEntry$$Type = ($ZipEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZipEntry_ = $ZipEntry$$Type;
}}
declare module "java.util.Stack" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$List, $List$$Type} from "java.util.List"
import {$Vector, $Vector$$Type} from "java.util.Vector"

export class $Stack<E> extends $Vector<(E)> {

constructor()

public "push"(arg0: E): E
public "pop"(): E
public "peek"(): E
public "search"(arg0: any): integer
public "empty"(): boolean
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stack$$Type<E> = ($Stack<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Stack_<E> = $Stack$$Type<(E)>;
}}
declare module "java.util.concurrent.ScheduledFuture" {
import {$Delayed, $Delayed$$Type} from "java.util.concurrent.Delayed"
import {$Future, $Future$$Type} from "java.util.concurrent.Future"
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export interface $ScheduledFuture<V> extends $Delayed, $Future<(V)> {

 "getDelay"(arg0: $TimeUnit$$Type): long
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
 "get"(): V
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "state"(): $Future$State
 "isDone"(): boolean
 "cancel"(arg0: boolean): boolean
 "compareTo"(arg0: $Delayed$$Type): integer
get "cancelled"(): boolean
get "done"(): boolean
}

export namespace $ScheduledFuture {
const probejs$$marker: never
}
export class $ScheduledFuture$$Static<V> implements $ScheduledFuture {


 "getDelay"(arg0: $TimeUnit$$Type): long
 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
 "get"(): V
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "state"(): $Future$State
 "isDone"(): boolean
 "cancel"(arg0: boolean): boolean
 "compareTo"(arg0: $Delayed$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScheduledFuture$$Type<V> = ($ScheduledFuture<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScheduledFuture_<V> = $ScheduledFuture$$Type<(V)>;
}}
declare module "java.util.Spliterator" {
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $Spliterator<T> {

 "tryAdvance"(arg0: $Consumer$$Type<(T)>): boolean
 "estimateSize"(): long
 "trySplit"(): $Spliterator<(T)>
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
 "getComparator"(): $Comparator<(T)>
 "forEachRemaining"(arg0: $Consumer$$Type<(T)>): void
 "characteristics"(): integer
get "exactSizeIfKnown"(): long
get "comparator"(): $Comparator<(T)>
}

export namespace $Spliterator {
const NONNULL: integer
const SUBSIZED: integer
const ORDERED: integer
const DISTINCT: integer
const SIZED: integer
const IMMUTABLE: integer
const CONCURRENT: integer
const SORTED: integer
const probejs$$marker: never
}
export class $Spliterator$$Static<T> implements $Spliterator {
static readonly "NONNULL": integer
static readonly "SUBSIZED": integer
static readonly "ORDERED": integer
static readonly "DISTINCT": integer
static readonly "SIZED": integer
static readonly "IMMUTABLE": integer
static readonly "CONCURRENT": integer
static readonly "SORTED": integer


 "tryAdvance"(arg0: $Consumer$$Type<(T)>): boolean
 "estimateSize"(): long
 "trySplit"(): $Spliterator<(T)>
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
 "getComparator"(): $Comparator<(T)>
 "forEachRemaining"(arg0: $Consumer$$Type<(T)>): void
 "characteristics"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Spliterator$$Type<T> = ($Spliterator<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Spliterator_<T> = $Spliterator$$Type<(T)>;
}}
declare module "java.util.concurrent.ConcurrentMap" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export interface $ConcurrentMap<K, V> extends $Map<(K), (V)> {

 "remove"(arg0: any, arg1: any): boolean
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "replace"(arg0: K, arg1: V): V
 "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
 "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
 "remove"(arg0: any): V
 "size"(): integer
 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "equals"(arg0: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "putAll"(arg0: $Map$$Type<(K), (V)>): void
 "containsKey"(arg0: any): boolean
 "keySet"(): $Set<(K)>
 "containsValue"(arg0: any): boolean
[index: string | number]: V
get "empty"(): boolean
}

export namespace $ConcurrentMap {
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
export class $ConcurrentMap$$Static<K, V> implements $ConcurrentMap {


 "remove"(arg0: any, arg1: any): boolean
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "replace"(arg0: K, arg1: V): V
 "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
 "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
 "remove"(arg0: any): V
 "size"(): integer
 "get"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "equals"(arg0: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
 "clear"(): void
 "isEmpty"(): boolean
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
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "putAll"(arg0: $Map$$Type<(K), (V)>): void
static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
 "containsKey"(arg0: any): boolean
 "keySet"(): $Set<(K)>
 "containsValue"(arg0: any): boolean
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConcurrentMap$$Type<K, V> = ($ConcurrentMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConcurrentMap_<K, V> = $ConcurrentMap$$Type<(K), (V)>;
}}
declare module "java.util.function.DoubleToLongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleToLongFunction {

 "applyAsLong"(arg0: double): long

(arg0: double): long
}

export namespace $DoubleToLongFunction {
const probejs$$marker: never
}
export class $DoubleToLongFunction$$Static implements $DoubleToLongFunction {


 "applyAsLong"(arg0: double): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleToLongFunction$$Type = ((arg0: double) => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleToLongFunction_ = $DoubleToLongFunction$$Type;
}}
declare module "java.util.function.ObjDoubleConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ObjDoubleConsumer<T> {

 "accept"(arg0: T, arg1: double): void

(arg0: T, arg1: double): void
}

export namespace $ObjDoubleConsumer {
const probejs$$marker: never
}
export class $ObjDoubleConsumer$$Static<T> implements $ObjDoubleConsumer {


 "accept"(arg0: T, arg1: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjDoubleConsumer$$Type<T> = ((arg0: T, arg1: double) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjDoubleConsumer_<T> = $ObjDoubleConsumer$$Type<(T)>;
}}
declare module "java.util.function.IntToLongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntToLongFunction {

 "applyAsLong"(arg0: integer): long

(arg0: integer): long
}

export namespace $IntToLongFunction {
const probejs$$marker: never
}
export class $IntToLongFunction$$Static implements $IntToLongFunction {


 "applyAsLong"(arg0: integer): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntToLongFunction$$Type = ((arg0: integer) => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntToLongFunction_ = $IntToLongFunction$$Type;
}}
declare module "java.util.Deque" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Queue, $Queue$$Type} from "java.util.Queue"
import {$SequencedCollection, $SequencedCollection$$Type} from "java.util.SequencedCollection"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export interface $Deque<E> extends $Queue<(E)>, $SequencedCollection<(E)> {

 "push"(arg0: E): void
 "pop"(): E
 "peek"(): E
 "reversed"(): $SequencedCollection<(any)>
 "getFirst"(): E
 "getLast"(): E
 "element"(): E
 "addFirst"(arg0: E): void
 "addLast"(arg0: E): void
 "removeFirst"(): E
 "removeLast"(): E
 "poll"(): E
 "pollFirst"(): E
 "pollLast"(): E
 "offerLast"(arg0: E): boolean
 "peekFirst"(): E
 "removeFirstOccurrence"(arg0: any): boolean
 "offerFirst"(arg0: E): boolean
 "peekLast"(): E
 "removeLastOccurrence"(arg0: any): boolean
 "offer"(arg0: E): boolean
 "descendingIterator"(): $Iterator<(E)>
 "remove"(): E
 "remove"(arg0: any): boolean
 "size"(): integer
 "add"(arg0: E): boolean
 "iterator"(): $Iterator<(E)>
 "contains"(arg0: any): boolean
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "removeAll"(arg0: $Collection$$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$$Type<(any)>): boolean
 "parallelStream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "spliterator"(): $Spliterator<(E)>
 "forEach"(arg0: $Consumer$$Type<(E)>): void
[Symbol.iterator](): IterableIterator<E>;
get "first"(): E
get "last"(): E
get "empty"(): boolean
}

export namespace $Deque {
const probejs$$marker: never
}
export class $Deque$$Static<E> implements $Deque {


 "push"(arg0: E): void
 "pop"(): E
 "peek"(): E
 "reversed"(): $SequencedCollection<(any)>
 "getFirst"(): E
 "getLast"(): E
 "element"(): E
 "addFirst"(arg0: E): void
 "addLast"(arg0: E): void
 "removeFirst"(): E
 "removeLast"(): E
 "poll"(): E
 "pollFirst"(): E
 "pollLast"(): E
 "offerLast"(arg0: E): boolean
 "peekFirst"(): E
 "removeFirstOccurrence"(arg0: any): boolean
 "offerFirst"(arg0: E): boolean
 "peekLast"(): E
 "removeLastOccurrence"(arg0: any): boolean
 "offer"(arg0: E): boolean
 "descendingIterator"(): $Iterator<(E)>
 "remove"(): E
 "remove"(arg0: any): boolean
 "size"(): integer
 "add"(arg0: E): boolean
 "iterator"(): $Iterator<(E)>
 "contains"(arg0: any): boolean
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "removeAll"(arg0: $Collection$$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$$Type<(any)>): boolean
 "parallelStream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "spliterator"(): $Spliterator<(E)>
 "forEach"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Deque$$Type<E> = ($Deque<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Deque_<E> = $Deque$$Type<(E)>;
}}
declare module "java.util.function.IntSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntSupplier {

 "getAsInt"(): integer

(): integer
get "asInt"(): integer
}

export namespace $IntSupplier {
const probejs$$marker: never
}
export class $IntSupplier$$Static implements $IntSupplier {


 "getAsInt"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntSupplier$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntSupplier_ = $IntSupplier$$Type;
}}
declare module "java.util.HashSet" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AbstractSet, $AbstractSet$$Type} from "java.util.AbstractSet"

export class $HashSet<E> extends $AbstractSet<(E)> implements $Set<(E)>, $Cloneable, $Serializable {

constructor(arg0: integer)
constructor()
constructor(arg0: $Collection$$Type<(E)>)
constructor(arg0: integer, arg1: float)

public static "newHashSet"<T>(arg0: integer): $HashSet<(T)>
public "remove"(arg0: any): boolean
public "size"(): integer
public "clone"(): any
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: E): boolean
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "removeAll"(arg0: $Collection$$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$$Type<(any)>): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
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
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HashSet$$Type<E> = ($HashSet<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HashSet_<E> = $HashSet$$Type<(E)>;
}}
declare module "java.util.concurrent.Callable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Callable<V> {

 "call"(): V

(): V
}

export namespace $Callable {
const probejs$$marker: never
}
export class $Callable$$Static<V> implements $Callable {


 "call"(): V
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Callable$$Type<V> = (() => V);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Callable_<V> = $Callable$$Type<(V)>;
}}
declare module "java.util.logging.Handler" {
import {$Formatter, $Formatter$$Type} from "java.util.logging.Formatter"
import {$Filter, $Filter$$Type} from "java.util.logging.Filter"
import {$ErrorManager, $ErrorManager$$Type} from "java.util.logging.ErrorManager"
import {$LogRecord, $LogRecord$$Type} from "java.util.logging.LogRecord"
import {$Level, $Level$$Type} from "java.util.logging.Level"

export class $Handler {


public "publish"(arg0: $LogRecord$$Type): void
public "getEncoding"(): StringJS
public "setFilter"(arg0: $Filter$$Type): void
public "getLevel"(): $Level
public "isLoggable"(arg0: $LogRecord$$Type): boolean
public "setLevel"(arg0: $Level$$Type): void
public "setFormatter"(arg0: $Formatter$$Type): void
public "getFormatter"(): $Formatter
public "setEncoding"(arg0: StringJS): void
public "setErrorManager"(arg0: $ErrorManager$$Type): void
public "getErrorManager"(): $ErrorManager
public "getFilter"(): $Filter
public "flush"(): void
public "close"(): void
get "encoding"(): StringJS
set "filter"(value: $Filter$$Type)
get "level"(): $Level
set "level"(value: $Level$$Type)
set "formatter"(value: $Formatter$$Type)
get "formatter"(): $Formatter
set "encoding"(value: StringJS)
set "errorManager"(value: $ErrorManager$$Type)
get "errorManager"(): $ErrorManager
get "filter"(): $Filter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Handler$$Type = ($Handler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Handler_ = $Handler$$Type;
}}
declare module "java.util.concurrent.ConcurrentHashMap$CollectionView" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export class $ConcurrentHashMap$CollectionView<K, V, E> implements $Collection<(E)>, $Serializable {


public "removeAll"(arg0: $Collection$$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$$Type<(any)>): boolean
public "parallelStream"(): $Stream<(E)>
public "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
public "remove"(arg0: any): boolean
public "size"(): integer
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: E): boolean
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
public "iterator"(): $Iterator<(E)>
public "stream"(): $Stream<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "forEach"(arg0: $Consumer$$Type<(E)>): void
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConcurrentHashMap$CollectionView$$Type<K, V, E> = ($ConcurrentHashMap$CollectionView<(K), (V), (E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConcurrentHashMap$CollectionView_<K, V, E> = $ConcurrentHashMap$CollectionView$$Type<(K), (V), (E)>;
}}
declare module "java.util.function.DoubleBinaryOperator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleBinaryOperator {

 "applyAsDouble"(arg0: double, arg1: double): double

(arg0: double, arg1: double): double
}

export namespace $DoubleBinaryOperator {
const probejs$$marker: never
}
export class $DoubleBinaryOperator$$Static implements $DoubleBinaryOperator {


 "applyAsDouble"(arg0: double, arg1: double): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleBinaryOperator$$Type = ((arg0: double, arg1: double) => double);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleBinaryOperator_ = $DoubleBinaryOperator$$Type;
}}
declare module "java.util.function.BiFunction" {
import {$Function, $Function$$Type} from "java.util.function.Function"

export interface $BiFunction<T, U, R> {

 "andThen"<V>(arg0: $Function$$Type<(R), (V)>): $BiFunction<(T), (U), (V)>
 "apply"(arg0: T, arg1: U): R

(arg0: T, arg1: U): R
}

export namespace $BiFunction {
const probejs$$marker: never
}
export class $BiFunction$$Static<T, U, R> implements $BiFunction {


 "andThen"<V>(arg0: $Function$$Type<(R), (V)>): $BiFunction<(T), (U), (V)>
 "apply"(arg0: T, arg1: U): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiFunction$$Type<T, U, R> = ((arg0: T, arg1: U) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiFunction_<T, U, R> = $BiFunction$$Type<(T), (U), (R)>;
}}
declare module "java.util.PriorityQueue" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$SortedSet, $SortedSet$$Type} from "java.util.SortedSet"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$AbstractQueue, $AbstractQueue$$Type} from "java.util.AbstractQueue"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $PriorityQueue<E> extends $AbstractQueue<(E)> implements $Serializable {

constructor()
constructor(arg0: $SortedSet$$Type<(E)>)
constructor(arg0: $Collection$$Type<(E)>)
constructor(arg0: integer, arg1: $Comparator$$Type<(E)>)
constructor(arg0: $Comparator$$Type<(E)>)
constructor(arg0: integer)
constructor(arg0: $PriorityQueue$$Type<(E)>)

public "peek"(): E
public "removeAll"(arg0: $Collection$$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$$Type<(any)>): boolean
public "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
public "comparator"(): $Comparator<(E)>
public "poll"(): E
public "offer"(arg0: E): boolean
public "remove"(arg0: any): boolean
public "size"(): integer
public "clear"(): void
public "add"(arg0: E): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public "iterator"(): $Iterator<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "forEach"(arg0: $Consumer$$Type<(E)>): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PriorityQueue$$Type<E> = ($PriorityQueue<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PriorityQueue_<E> = $PriorityQueue$$Type<(E)>;
}}
declare module "java.util.Date" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $Date implements $Serializable, $Cloneable, $Comparable<($Date)> {

/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer)
constructor()
constructor(arg0: long)
/**
 * 
 * @deprecated
 */
constructor(arg0: integer, arg1: integer, arg2: integer)

public "getTime"(): long
/**
 * 
 * @deprecated
 */
public "getSeconds"(): integer
public "toInstant"(): $Instant
/**
 * 
 * @deprecated
 */
public static "UTC"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): long
public "setTime"(arg0: long): void
/**
 * 
 * @deprecated
 */
public "getYear"(): integer
/**
 * 
 * @deprecated
 */
public "setDate"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "setMonth"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "setYear"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "getDay"(): integer
/**
 * 
 * @deprecated
 */
public "toLocaleString"(): StringJS
/**
 * 
 * @deprecated
 */
public "toGMTString"(): StringJS
/**
 * 
 * @deprecated
 */
public "getTimezoneOffset"(): integer
/**
 * 
 * @deprecated
 */
public "getDate"(): integer
public "before"(arg0: $Date$$Type): boolean
public "after"(arg0: $Date$$Type): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "clone"(): any
public "compareTo"(arg0: $Date$$Type): integer
public "compareTo"(arg0: any): integer
public static "from"(arg0: $Instant$$Type): $Date
/**
 * 
 * @deprecated
 */
public static "parse"(arg0: StringJS): long
/**
 * 
 * @deprecated
 */
public "getMonth"(): integer
/**
 * 
 * @deprecated
 */
public "getHours"(): integer
/**
 * 
 * @deprecated
 */
public "getMinutes"(): integer
/**
 * 
 * @deprecated
 */
public "setHours"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "setMinutes"(arg0: integer): void
/**
 * 
 * @deprecated
 */
public "setSeconds"(arg0: integer): void
get "time"(): long
get "seconds"(): integer
set "time"(value: long)
get "year"(): integer
set "date"(value: integer)
set "month"(value: integer)
set "year"(value: integer)
get "day"(): integer
get "timezoneOffset"(): integer
get "date"(): integer
get "month"(): integer
get "hours"(): integer
get "minutes"(): integer
set "hours"(value: integer)
set "minutes"(value: integer)
set "seconds"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Date$$Type = ($Date);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Date_ = $Date$$Type;
}}
declare module "java.util.concurrent.Future" {
import {$Future$State, $Future$State$$Type} from "java.util.concurrent.Future$State"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$TimeUnit, $TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export interface $Future<V> {

 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
 "get"(): V
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "state"(): $Future$State
 "isDone"(): boolean
 "cancel"(arg0: boolean): boolean
get "cancelled"(): boolean
get "done"(): boolean
}

export namespace $Future {
const probejs$$marker: never
}
export class $Future$$Static<V> implements $Future {


 "isCancelled"(): boolean
 "resultNow"(): V
 "exceptionNow"(): $Throwable
 "get"(): V
 "get"(arg0: long, arg1: $TimeUnit$$Type): V
 "state"(): $Future$State
 "isDone"(): boolean
 "cancel"(arg0: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Future$$Type<V> = ($Future<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Future_<V> = $Future$$Type<(V)>;
}}
declare module "java.util.concurrent.atomic.AtomicInteger" {
import {$IntUnaryOperator, $IntUnaryOperator$$Type} from "java.util.function.IntUnaryOperator"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$IntBinaryOperator, $IntBinaryOperator$$Type} from "java.util.function.IntBinaryOperator"

export class $AtomicInteger extends number implements $Serializable {

constructor(arg0: integer)
constructor()

public "incrementAndGet"(): integer
public "weakCompareAndSetVolatile"(arg0: integer, arg1: integer): boolean
public "getAndIncrement"(): integer
public "getAndDecrement"(): integer
public "decrementAndGet"(): integer
public "addAndGet"(arg0: integer): integer
public "getAndUpdate"(arg0: $IntUnaryOperator$$Type): integer
public "updateAndGet"(arg0: $IntUnaryOperator$$Type): integer
public "getAndAccumulate"(arg0: integer, arg1: $IntBinaryOperator$$Type): integer
public "accumulateAndGet"(arg0: integer, arg1: $IntBinaryOperator$$Type): integer
public "getPlain"(): integer
public "setPlain"(arg0: integer): void
public "getOpaque"(): integer
public "setOpaque"(arg0: integer): void
public "getAcquire"(): integer
public "setRelease"(arg0: integer): void
public "compareAndSet"(arg0: integer, arg1: integer): boolean
public "compareAndExchange"(arg0: integer, arg1: integer): integer
public "compareAndExchangeAcquire"(arg0: integer, arg1: integer): integer
public "compareAndExchangeRelease"(arg0: integer, arg1: integer): integer
public "weakCompareAndSetPlain"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "weakCompareAndSet"(arg0: integer, arg1: integer): boolean
public "weakCompareAndSetAcquire"(arg0: integer, arg1: integer): boolean
public "weakCompareAndSetRelease"(arg0: integer, arg1: integer): boolean
public "getAndSet"(arg0: integer): integer
public "getAndAdd"(arg0: integer): integer
public "lazySet"(arg0: integer): void
public "get"(): integer
public "toString"(): StringJS
public "intValue"(): integer
public "longValue"(): long
public "floatValue"(): float
public "doubleValue"(): double
public "set"(arg0: integer): void
get "andIncrement"(): integer
get "andDecrement"(): integer
get "plain"(): integer
set "plain"(value: integer)
get "opaque"(): integer
set "opaque"(value: integer)
get "acquire"(): integer
set "release"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AtomicInteger$$Type = ($AtomicInteger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AtomicInteger_ = $AtomicInteger$$Type;
}}
declare module "java.util.function.ToIntFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToIntFunction<T> {

 "applyAsInt"(arg0: T): integer

(arg0: T): integer
}

export namespace $ToIntFunction {
const probejs$$marker: never
}
export class $ToIntFunction$$Static<T> implements $ToIntFunction {


 "applyAsInt"(arg0: T): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToIntFunction$$Type<T> = ((arg0: T) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToIntFunction_<T> = $ToIntFunction$$Type<(T)>;
}}
declare module "java.util.function.LongConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongConsumer {

 "andThen"(arg0: $LongConsumer$$Type): $LongConsumer
 "accept"(arg0: long): void

(arg0: long): void
}

export namespace $LongConsumer {
const probejs$$marker: never
}
export class $LongConsumer$$Static implements $LongConsumer {


 "andThen"(arg0: $LongConsumer$$Type): $LongConsumer
 "accept"(arg0: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongConsumer$$Type = ((arg0: long) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongConsumer_ = $LongConsumer$$Type;
}}
declare module "java.util.stream.IntStream" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$BaseStream, $BaseStream$$Type} from "java.util.stream.BaseStream"
import {$OptionalDouble, $OptionalDouble$$Type} from "java.util.OptionalDouble"
import {$LongStream, $LongStream$$Type} from "java.util.stream.LongStream"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$IntPredicate, $IntPredicate$$Type} from "java.util.function.IntPredicate"
import {$IntBinaryOperator, $IntBinaryOperator$$Type} from "java.util.function.IntBinaryOperator"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$IntStream$Builder, $IntStream$Builder$$Type} from "java.util.stream.IntStream$Builder"
import {$IntUnaryOperator, $IntUnaryOperator$$Type} from "java.util.function.IntUnaryOperator"
import {$IntToLongFunction, $IntToLongFunction$$Type} from "java.util.function.IntToLongFunction"
import {$OptionalInt, $OptionalInt$$Type} from "java.util.OptionalInt"
import {$IntStream$IntMapMultiConsumer, $IntStream$IntMapMultiConsumer$$Type} from "java.util.stream.IntStream$IntMapMultiConsumer"
import {$IntConsumer, $IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$Spliterator$OfInt, $Spliterator$OfInt$$Type} from "java.util.Spliterator$OfInt"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ObjIntConsumer, $ObjIntConsumer$$Type} from "java.util.function.ObjIntConsumer"
import {$IntSummaryStatistics, $IntSummaryStatistics$$Type} from "java.util.IntSummaryStatistics"
import {$IntToDoubleFunction, $IntToDoubleFunction$$Type} from "java.util.function.IntToDoubleFunction"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$DoubleStream, $DoubleStream$$Type} from "java.util.stream.DoubleStream"

export interface $IntStream extends $BaseStream<(integer), ($IntStream)> {

 "distinct"(): $IntStream
 "sorted"(): $IntStream
 "asLongStream"(): $LongStream
 "asDoubleStream"(): $DoubleStream
 "average"(): $OptionalDouble
 "summaryStatistics"(): $IntSummaryStatistics
 "peek"(arg0: $IntConsumer$$Type): $IntStream
 "skip"(arg0: long): $IntStream
 "sum"(): integer
 "reduce"(arg0: $IntBinaryOperator$$Type): $OptionalInt
 "reduce"(arg0: integer, arg1: $IntBinaryOperator$$Type): integer
 "mapToLong"(arg0: $IntToLongFunction$$Type): $LongStream
 "mapToDouble"(arg0: $IntToDoubleFunction$$Type): $DoubleStream
 "mapMulti"(arg0: $IntStream$IntMapMultiConsumer$$Type): $IntStream
 "takeWhile"(arg0: $IntPredicate$$Type): $IntStream
 "dropWhile"(arg0: $IntPredicate$$Type): $IntStream
 "forEachOrdered"(arg0: $IntConsumer$$Type): void
 "findFirst"(): $OptionalInt
 "allMatch"(arg0: $IntPredicate$$Type): boolean
 "noneMatch"(arg0: $IntPredicate$$Type): boolean
 "mapToObj"<U>(arg0: $IntFunction$$Type<(U)>): $Stream<(U)>
 "parallel"(): $BaseStream<(any), (any)>
 "sequential"(): $BaseStream<(any), (any)>
 "min"(): $OptionalInt
 "max"(): $OptionalInt
 "toArray"(): (integer)[]
 "iterator"(): $Iterator<(any)>
 "map"(arg0: $IntUnaryOperator$$Type): $IntStream
 "collect"<R>(arg0: $Supplier$$Type<(R)>, arg1: $ObjIntConsumer$$Type<(R)>, arg2: $BiConsumer$$Type<(R), (R)>): R
 "count"(): long
 "limit"(arg0: long): $IntStream
 "spliterator"(): $Spliterator$OfInt
 "filter"(arg0: $IntPredicate$$Type): $IntStream
 "anyMatch"(arg0: $IntPredicate$$Type): boolean
 "flatMap"(arg0: $IntFunction$$Type<($IntStream$$Type)>): $IntStream
 "forEach"(arg0: $IntConsumer$$Type): void
 "findAny"(): $OptionalInt
 "boxed"(): $Stream<(integer)>
 "isParallel"(): boolean
 "onClose"(arg0: $Runnable$$Type): $IntStream
 "unordered"(): $IntStream
 "close"(): void
}

export namespace $IntStream {
function iterate(arg0: integer, arg1: $IntUnaryOperator$$Type): $IntStream
function iterate(arg0: integer, arg1: $IntPredicate$$Type, arg2: $IntUnaryOperator$$Type): $IntStream
function generate(arg0: $IntSupplier$$Type): $IntStream
function rangeClosed(arg0: integer, arg1: integer): $IntStream
function range(arg0: integer, arg1: integer): $IntStream
function of(arg0: integer): $IntStream
function of(...arg0: (integer)[]): $IntStream
function builder(): $IntStream$Builder
function concat(arg0: $IntStream$$Type, arg1: $IntStream$$Type): $IntStream
function empty(): $IntStream
const probejs$$marker: never
}
export class $IntStream$$Static implements $IntStream {


static "iterate"(arg0: integer, arg1: $IntUnaryOperator$$Type): $IntStream
static "iterate"(arg0: integer, arg1: $IntPredicate$$Type, arg2: $IntUnaryOperator$$Type): $IntStream
 "distinct"(): $IntStream
 "sorted"(): $IntStream
static "generate"(arg0: $IntSupplier$$Type): $IntStream
 "asLongStream"(): $LongStream
 "asDoubleStream"(): $DoubleStream
 "average"(): $OptionalDouble
 "summaryStatistics"(): $IntSummaryStatistics
static "rangeClosed"(arg0: integer, arg1: integer): $IntStream
 "peek"(arg0: $IntConsumer$$Type): $IntStream
 "skip"(arg0: long): $IntStream
 "sum"(): integer
 "reduce"(arg0: $IntBinaryOperator$$Type): $OptionalInt
 "reduce"(arg0: integer, arg1: $IntBinaryOperator$$Type): integer
 "mapToLong"(arg0: $IntToLongFunction$$Type): $LongStream
 "mapToDouble"(arg0: $IntToDoubleFunction$$Type): $DoubleStream
 "mapMulti"(arg0: $IntStream$IntMapMultiConsumer$$Type): $IntStream
 "takeWhile"(arg0: $IntPredicate$$Type): $IntStream
 "dropWhile"(arg0: $IntPredicate$$Type): $IntStream
 "forEachOrdered"(arg0: $IntConsumer$$Type): void
 "findFirst"(): $OptionalInt
 "allMatch"(arg0: $IntPredicate$$Type): boolean
 "noneMatch"(arg0: $IntPredicate$$Type): boolean
 "mapToObj"<U>(arg0: $IntFunction$$Type<(U)>): $Stream<(U)>
static "range"(arg0: integer, arg1: integer): $IntStream
 "parallel"(): $BaseStream<(any), (any)>
 "sequential"(): $BaseStream<(any), (any)>
 "min"(): $OptionalInt
 "max"(): $OptionalInt
 "toArray"(): (integer)[]
 "iterator"(): $Iterator<(any)>
 "map"(arg0: $IntUnaryOperator$$Type): $IntStream
 "collect"<R>(arg0: $Supplier$$Type<(R)>, arg1: $ObjIntConsumer$$Type<(R)>, arg2: $BiConsumer$$Type<(R), (R)>): R
static "of"(arg0: integer): $IntStream
static "of"(...arg0: (integer)[]): $IntStream
 "count"(): long
static "builder"(): $IntStream$Builder
static "concat"(arg0: $IntStream$$Type, arg1: $IntStream$$Type): $IntStream
 "limit"(arg0: long): $IntStream
 "spliterator"(): $Spliterator$OfInt
 "filter"(arg0: $IntPredicate$$Type): $IntStream
static "empty"(): $IntStream
 "anyMatch"(arg0: $IntPredicate$$Type): boolean
 "flatMap"(arg0: $IntFunction$$Type<($IntStream$$Type)>): $IntStream
 "forEach"(arg0: $IntConsumer$$Type): void
 "findAny"(): $OptionalInt
 "boxed"(): $Stream<(integer)>
 "isParallel"(): boolean
 "onClose"(arg0: $Runnable$$Type): $IntStream
 "unordered"(): $IntStream
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntStream$$Type = ($IntStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntStream_ = $IntStream$$Type;
}}
declare module "java.util.function.Function" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Function<T, R> {

 "compose"<V>(arg0: $Function$$Type<(V), (T)>): $Function<(V), (R)>
 "andThen"<V>(arg0: $Function$$Type<(R), (V)>): $Function<(T), (V)>
 "apply"(arg0: T): R

(arg0: T): R
}

export namespace $Function {
function identity<T>(): $Function<(T), (T)>
const probejs$$marker: never
}
export class $Function$$Static<T, R> implements $Function {


 "compose"<V>(arg0: $Function$$Type<(V), (T)>): $Function<(V), (R)>
 "andThen"<V>(arg0: $Function$$Type<(R), (V)>): $Function<(T), (V)>
 "apply"(arg0: T): R
static "identity"<T>(): $Function<(T), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function$$Type<T, R> = ((arg0: T) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function_<T, R> = $Function$$Type<(T), (R)>;
}}
declare module "java.util.function.ToDoubleBiFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToDoubleBiFunction<T, U> {

 "applyAsDouble"(arg0: T, arg1: U): double

(arg0: T, arg1: U): double
}

export namespace $ToDoubleBiFunction {
const probejs$$marker: never
}
export class $ToDoubleBiFunction$$Static<T, U> implements $ToDoubleBiFunction {


 "applyAsDouble"(arg0: T, arg1: U): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToDoubleBiFunction$$Type<T, U> = ((arg0: T, arg1: U) => double);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToDoubleBiFunction_<T, U> = $ToDoubleBiFunction$$Type<(T), (U)>;
}}
declare module "java.util.PrimitiveIterator$OfDouble" {
import {$DoubleConsumer, $DoubleConsumer$$Type} from "java.util.function.DoubleConsumer"
import {$PrimitiveIterator, $PrimitiveIterator$$Type} from "java.util.PrimitiveIterator"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $PrimitiveIterator$OfDouble extends $PrimitiveIterator<(double), ($DoubleConsumer)> {

 "nextDouble"(): double
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $Consumer$$Type<(double)>): void
 "forEachRemaining"(arg0: $DoubleConsumer$$Type): void
 "next"(): double
 "remove"(): void
 "hasNext"(): boolean
}

export namespace $PrimitiveIterator$OfDouble {
const probejs$$marker: never
}
export class $PrimitiveIterator$OfDouble$$Static implements $PrimitiveIterator$OfDouble {


 "nextDouble"(): double
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $Consumer$$Type<(double)>): void
 "forEachRemaining"(arg0: $DoubleConsumer$$Type): void
 "next"(): double
 "remove"(): void
 "hasNext"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrimitiveIterator$OfDouble$$Type = ($PrimitiveIterator$OfDouble);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrimitiveIterator$OfDouble_ = $PrimitiveIterator$OfDouble$$Type;
}}
declare module "java.util.UUID" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"

export class $UUID implements $Serializable, $Comparable<($UUID)> {

constructor(arg0: long, arg1: long)

public "node"(): long
public static "randomUUID"(): $UUID
public static "nameUUIDFromBytes"(arg0: (byte)[]): $UUID
public "getLeastSignificantBits"(): long
public "getMostSignificantBits"(): long
public "clockSequence"(): integer
public "variant"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "version"(): integer
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $UUID$$Type): integer
public "timestamp"(): long
public static "fromString"(arg0: StringJS): $UUID
get "leastSignificantBits"(): long
get "mostSignificantBits"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UUID$$Type = (StringJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UUID_ = $UUID$$Type;
}}
declare module "java.util.function.DoubleConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleConsumer {

 "andThen"(arg0: $DoubleConsumer$$Type): $DoubleConsumer
 "accept"(arg0: double): void

(arg0: double): void
}

export namespace $DoubleConsumer {
const probejs$$marker: never
}
export class $DoubleConsumer$$Static implements $DoubleConsumer {


 "andThen"(arg0: $DoubleConsumer$$Type): $DoubleConsumer
 "accept"(arg0: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleConsumer$$Type = ((arg0: double) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleConsumer_ = $DoubleConsumer$$Type;
}}
declare module "java.util.stream.DoubleStream" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$DoubleStream$Builder, $DoubleStream$Builder$$Type} from "java.util.stream.DoubleStream$Builder"
import {$DoubleUnaryOperator, $DoubleUnaryOperator$$Type} from "java.util.function.DoubleUnaryOperator"
import {$DoubleStream$DoubleMapMultiConsumer, $DoubleStream$DoubleMapMultiConsumer$$Type} from "java.util.stream.DoubleStream$DoubleMapMultiConsumer"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$BaseStream, $BaseStream$$Type} from "java.util.stream.BaseStream"
import {$IntStream, $IntStream$$Type} from "java.util.stream.IntStream"
import {$OptionalDouble, $OptionalDouble$$Type} from "java.util.OptionalDouble"
import {$LongStream, $LongStream$$Type} from "java.util.stream.LongStream"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$DoubleBinaryOperator, $DoubleBinaryOperator$$Type} from "java.util.function.DoubleBinaryOperator"
import {$DoubleConsumer, $DoubleConsumer$$Type} from "java.util.function.DoubleConsumer"
import {$DoubleSupplier, $DoubleSupplier$$Type} from "java.util.function.DoubleSupplier"
import {$DoubleToIntFunction, $DoubleToIntFunction$$Type} from "java.util.function.DoubleToIntFunction"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ObjDoubleConsumer, $ObjDoubleConsumer$$Type} from "java.util.function.ObjDoubleConsumer"
import {$DoubleSummaryStatistics, $DoubleSummaryStatistics$$Type} from "java.util.DoubleSummaryStatistics"
import {$DoubleFunction, $DoubleFunction$$Type} from "java.util.function.DoubleFunction"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$DoublePredicate, $DoublePredicate$$Type} from "java.util.function.DoublePredicate"
import {$DoubleToLongFunction, $DoubleToLongFunction$$Type} from "java.util.function.DoubleToLongFunction"

export interface $DoubleStream extends $BaseStream<(double), ($DoubleStream)> {

 "distinct"(): $DoubleStream
 "sorted"(): $DoubleStream
 "average"(): $OptionalDouble
 "summaryStatistics"(): $DoubleSummaryStatistics
 "peek"(arg0: $DoubleConsumer$$Type): $DoubleStream
 "skip"(arg0: long): $DoubleStream
 "sum"(): double
 "reduce"(arg0: $DoubleBinaryOperator$$Type): $OptionalDouble
 "reduce"(arg0: double, arg1: $DoubleBinaryOperator$$Type): double
 "mapToInt"(arg0: $DoubleToIntFunction$$Type): $IntStream
 "mapToLong"(arg0: $DoubleToLongFunction$$Type): $LongStream
 "mapMulti"(arg0: $DoubleStream$DoubleMapMultiConsumer$$Type): $DoubleStream
 "takeWhile"(arg0: $DoublePredicate$$Type): $DoubleStream
 "dropWhile"(arg0: $DoublePredicate$$Type): $DoubleStream
 "forEachOrdered"(arg0: $DoubleConsumer$$Type): void
 "findFirst"(): $OptionalDouble
 "allMatch"(arg0: $DoublePredicate$$Type): boolean
 "noneMatch"(arg0: $DoublePredicate$$Type): boolean
 "mapToObj"<U>(arg0: $DoubleFunction$$Type<(U)>): $Stream<(U)>
 "parallel"(): $BaseStream<(any), (any)>
 "sequential"(): $BaseStream<(any), (any)>
 "min"(): $OptionalDouble
 "max"(): $OptionalDouble
 "toArray"(): (double)[]
 "iterator"(): $Iterator<(any)>
 "map"(arg0: $DoubleUnaryOperator$$Type): $DoubleStream
 "collect"<R>(arg0: $Supplier$$Type<(R)>, arg1: $ObjDoubleConsumer$$Type<(R)>, arg2: $BiConsumer$$Type<(R), (R)>): R
 "count"(): long
 "limit"(arg0: long): $DoubleStream
 "spliterator"(): $Spliterator<(any)>
 "filter"(arg0: $DoublePredicate$$Type): $DoubleStream
 "anyMatch"(arg0: $DoublePredicate$$Type): boolean
 "flatMap"(arg0: $DoubleFunction$$Type<($DoubleStream$$Type)>): $DoubleStream
 "forEach"(arg0: $DoubleConsumer$$Type): void
 "findAny"(): $OptionalDouble
 "boxed"(): $Stream<(double)>
 "isParallel"(): boolean
 "onClose"(arg0: $Runnable$$Type): $DoubleStream
 "unordered"(): $DoubleStream
 "close"(): void
}

export namespace $DoubleStream {
function iterate(arg0: double, arg1: $DoubleUnaryOperator$$Type): $DoubleStream
function iterate(arg0: double, arg1: $DoublePredicate$$Type, arg2: $DoubleUnaryOperator$$Type): $DoubleStream
function generate(arg0: $DoubleSupplier$$Type): $DoubleStream
function of(arg0: double): $DoubleStream
function of(...arg0: (double)[]): $DoubleStream
function builder(): $DoubleStream$Builder
function concat(arg0: $DoubleStream$$Type, arg1: $DoubleStream$$Type): $DoubleStream
function empty(): $DoubleStream
const probejs$$marker: never
}
export class $DoubleStream$$Static implements $DoubleStream {


static "iterate"(arg0: double, arg1: $DoubleUnaryOperator$$Type): $DoubleStream
static "iterate"(arg0: double, arg1: $DoublePredicate$$Type, arg2: $DoubleUnaryOperator$$Type): $DoubleStream
 "distinct"(): $DoubleStream
 "sorted"(): $DoubleStream
static "generate"(arg0: $DoubleSupplier$$Type): $DoubleStream
 "average"(): $OptionalDouble
 "summaryStatistics"(): $DoubleSummaryStatistics
 "peek"(arg0: $DoubleConsumer$$Type): $DoubleStream
 "skip"(arg0: long): $DoubleStream
 "sum"(): double
 "reduce"(arg0: $DoubleBinaryOperator$$Type): $OptionalDouble
 "reduce"(arg0: double, arg1: $DoubleBinaryOperator$$Type): double
 "mapToInt"(arg0: $DoubleToIntFunction$$Type): $IntStream
 "mapToLong"(arg0: $DoubleToLongFunction$$Type): $LongStream
 "mapMulti"(arg0: $DoubleStream$DoubleMapMultiConsumer$$Type): $DoubleStream
 "takeWhile"(arg0: $DoublePredicate$$Type): $DoubleStream
 "dropWhile"(arg0: $DoublePredicate$$Type): $DoubleStream
 "forEachOrdered"(arg0: $DoubleConsumer$$Type): void
 "findFirst"(): $OptionalDouble
 "allMatch"(arg0: $DoublePredicate$$Type): boolean
 "noneMatch"(arg0: $DoublePredicate$$Type): boolean
 "mapToObj"<U>(arg0: $DoubleFunction$$Type<(U)>): $Stream<(U)>
 "parallel"(): $BaseStream<(any), (any)>
 "sequential"(): $BaseStream<(any), (any)>
 "min"(): $OptionalDouble
 "max"(): $OptionalDouble
 "toArray"(): (double)[]
 "iterator"(): $Iterator<(any)>
 "map"(arg0: $DoubleUnaryOperator$$Type): $DoubleStream
 "collect"<R>(arg0: $Supplier$$Type<(R)>, arg1: $ObjDoubleConsumer$$Type<(R)>, arg2: $BiConsumer$$Type<(R), (R)>): R
static "of"(arg0: double): $DoubleStream
static "of"(...arg0: (double)[]): $DoubleStream
 "count"(): long
static "builder"(): $DoubleStream$Builder
static "concat"(arg0: $DoubleStream$$Type, arg1: $DoubleStream$$Type): $DoubleStream
 "limit"(arg0: long): $DoubleStream
 "spliterator"(): $Spliterator<(any)>
 "filter"(arg0: $DoublePredicate$$Type): $DoubleStream
static "empty"(): $DoubleStream
 "anyMatch"(arg0: $DoublePredicate$$Type): boolean
 "flatMap"(arg0: $DoubleFunction$$Type<($DoubleStream$$Type)>): $DoubleStream
 "forEach"(arg0: $DoubleConsumer$$Type): void
 "findAny"(): $OptionalDouble
 "boxed"(): $Stream<(double)>
 "isParallel"(): boolean
 "onClose"(arg0: $Runnable$$Type): $DoubleStream
 "unordered"(): $DoubleStream
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleStream$$Type = ($DoubleStream);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleStream_ = $DoubleStream$$Type;
}}
declare module "java.util.concurrent.atomic.AtomicBoolean" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"

export class $AtomicBoolean implements $Serializable {

constructor(arg0: boolean)
constructor()

public "weakCompareAndSetVolatile"(arg0: boolean, arg1: boolean): boolean
public "getPlain"(): boolean
public "setPlain"(arg0: boolean): void
public "getOpaque"(): boolean
public "setOpaque"(arg0: boolean): void
public "getAcquire"(): boolean
public "setRelease"(arg0: boolean): void
public "compareAndSet"(arg0: boolean, arg1: boolean): boolean
public "compareAndExchange"(arg0: boolean, arg1: boolean): boolean
public "compareAndExchangeAcquire"(arg0: boolean, arg1: boolean): boolean
public "compareAndExchangeRelease"(arg0: boolean, arg1: boolean): boolean
public "weakCompareAndSetPlain"(arg0: boolean, arg1: boolean): boolean
/**
 * 
 * @deprecated
 */
public "weakCompareAndSet"(arg0: boolean, arg1: boolean): boolean
public "weakCompareAndSetAcquire"(arg0: boolean, arg1: boolean): boolean
public "weakCompareAndSetRelease"(arg0: boolean, arg1: boolean): boolean
public "getAndSet"(arg0: boolean): boolean
public "lazySet"(arg0: boolean): void
public "get"(): boolean
public "toString"(): StringJS
public "set"(arg0: boolean): void
get "plain"(): boolean
set "plain"(value: boolean)
get "opaque"(): boolean
set "opaque"(value: boolean)
get "acquire"(): boolean
set "release"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AtomicBoolean$$Type = ($AtomicBoolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AtomicBoolean_ = $AtomicBoolean$$Type;
}}
declare module "java.util.concurrent.CompletionStage" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Executor, $Executor$$Type} from "java.util.concurrent.Executor"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $CompletionStage<T> {

 "handle"<U>(arg0: $BiFunction$$Type<(T), ($Throwable), (U)>): $CompletionStage<(U)>
 "applyToEither"<U>(arg0: $CompletionStage$$Type<(T)>, arg1: $Function$$Type<(T), (U)>): $CompletionStage<(U)>
 "runAfterBothAsync"(arg0: $CompletionStage$$Type<(any)>, arg1: $Runnable$$Type): $CompletionStage<(void)>
 "runAfterBothAsync"(arg0: $CompletionStage$$Type<(any)>, arg1: $Runnable$$Type, arg2: $Executor$$Type): $CompletionStage<(void)>
 "runAfterBoth"(arg0: $CompletionStage$$Type<(any)>, arg1: $Runnable$$Type): $CompletionStage<(void)>
 "thenAcceptBothAsync"<U>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiConsumer$$Type<(T), (U)>): $CompletionStage<(void)>
 "thenAcceptBothAsync"<U>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiConsumer$$Type<(T), (U)>, arg2: $Executor$$Type): $CompletionStage<(void)>
 "thenAcceptBoth"<U>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiConsumer$$Type<(T), (U)>): $CompletionStage<(void)>
 "thenCombineAsync"<U, V>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiFunction$$Type<(T), (U), (V)>): $CompletionStage<(V)>
 "thenCombineAsync"<U, V>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiFunction$$Type<(T), (U), (V)>, arg2: $Executor$$Type): $CompletionStage<(V)>
 "thenCombine"<U, V>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiFunction$$Type<(T), (U), (V)>): $CompletionStage<(V)>
 "thenRunAsync"(arg0: $Runnable$$Type): $CompletionStage<(void)>
 "thenRunAsync"(arg0: $Runnable$$Type, arg1: $Executor$$Type): $CompletionStage<(void)>
 "thenRun"(arg0: $Runnable$$Type): $CompletionStage<(void)>
 "thenAcceptAsync"(arg0: $Consumer$$Type<(T)>): $CompletionStage<(void)>
 "thenAcceptAsync"(arg0: $Consumer$$Type<(T)>, arg1: $Executor$$Type): $CompletionStage<(void)>
 "thenAccept"(arg0: $Consumer$$Type<(T)>): $CompletionStage<(void)>
 "thenApplyAsync"<U>(arg0: $Function$$Type<(T), (U)>): $CompletionStage<(U)>
 "thenApplyAsync"<U>(arg0: $Function$$Type<(T), (U)>, arg1: $Executor$$Type): $CompletionStage<(U)>
 "thenApply"<U>(arg0: $Function$$Type<(T), (U)>): $CompletionStage<(U)>
 "handleAsync"<U>(arg0: $BiFunction$$Type<(T), ($Throwable), (U)>, arg1: $Executor$$Type): $CompletionStage<(U)>
 "handleAsync"<U>(arg0: $BiFunction$$Type<(T), ($Throwable), (U)>): $CompletionStage<(U)>
 "toCompletableFuture"(): $CompletableFuture<(T)>
 "exceptionallyComposeAsync"(arg0: $Function$$Type<($Throwable), ($CompletionStage$$Type<(T)>)>, arg1: $Executor$$Type): $CompletionStage<(T)>
 "exceptionallyComposeAsync"(arg0: $Function$$Type<($Throwable), ($CompletionStage$$Type<(T)>)>): $CompletionStage<(T)>
 "exceptionallyCompose"(arg0: $Function$$Type<($Throwable), ($CompletionStage$$Type<(T)>)>): $CompletionStage<(T)>
 "exceptionallyAsync"(arg0: $Function$$Type<($Throwable), (T)>): $CompletionStage<(T)>
 "exceptionallyAsync"(arg0: $Function$$Type<($Throwable), (T)>, arg1: $Executor$$Type): $CompletionStage<(T)>
 "exceptionally"(arg0: $Function$$Type<($Throwable), (T)>): $CompletionStage<(T)>
 "whenCompleteAsync"(arg0: $BiConsumer$$Type<(T), ($Throwable)>, arg1: $Executor$$Type): $CompletionStage<(T)>
 "whenCompleteAsync"(arg0: $BiConsumer$$Type<(T), ($Throwable)>): $CompletionStage<(T)>
 "thenComposeAsync"<U>(arg0: $Function$$Type<(T), ($CompletionStage$$Type<(U)>)>): $CompletionStage<(U)>
 "thenComposeAsync"<U>(arg0: $Function$$Type<(T), ($CompletionStage$$Type<(U)>)>, arg1: $Executor$$Type): $CompletionStage<(U)>
 "thenCompose"<U>(arg0: $Function$$Type<(T), ($CompletionStage$$Type<(U)>)>): $CompletionStage<(U)>
 "runAfterEitherAsync"(arg0: $CompletionStage$$Type<(any)>, arg1: $Runnable$$Type): $CompletionStage<(void)>
 "runAfterEitherAsync"(arg0: $CompletionStage$$Type<(any)>, arg1: $Runnable$$Type, arg2: $Executor$$Type): $CompletionStage<(void)>
 "runAfterEither"(arg0: $CompletionStage$$Type<(any)>, arg1: $Runnable$$Type): $CompletionStage<(void)>
 "acceptEitherAsync"(arg0: $CompletionStage$$Type<(T)>, arg1: $Consumer$$Type<(T)>): $CompletionStage<(void)>
 "acceptEitherAsync"(arg0: $CompletionStage$$Type<(T)>, arg1: $Consumer$$Type<(T)>, arg2: $Executor$$Type): $CompletionStage<(void)>
 "acceptEither"(arg0: $CompletionStage$$Type<(T)>, arg1: $Consumer$$Type<(T)>): $CompletionStage<(void)>
 "applyToEitherAsync"<U>(arg0: $CompletionStage$$Type<(T)>, arg1: $Function$$Type<(T), (U)>): $CompletionStage<(U)>
 "applyToEitherAsync"<U>(arg0: $CompletionStage$$Type<(T)>, arg1: $Function$$Type<(T), (U)>, arg2: $Executor$$Type): $CompletionStage<(U)>
 "whenComplete"(arg0: $BiConsumer$$Type<(T), ($Throwable)>): $CompletionStage<(T)>
}

export namespace $CompletionStage {
const probejs$$marker: never
}
export class $CompletionStage$$Static<T> implements $CompletionStage {


 "handle"<U>(arg0: $BiFunction$$Type<(T), ($Throwable), (U)>): $CompletionStage<(U)>
 "applyToEither"<U>(arg0: $CompletionStage$$Type<(T)>, arg1: $Function$$Type<(T), (U)>): $CompletionStage<(U)>
 "runAfterBothAsync"(arg0: $CompletionStage$$Type<(any)>, arg1: $Runnable$$Type): $CompletionStage<(void)>
 "runAfterBothAsync"(arg0: $CompletionStage$$Type<(any)>, arg1: $Runnable$$Type, arg2: $Executor$$Type): $CompletionStage<(void)>
 "runAfterBoth"(arg0: $CompletionStage$$Type<(any)>, arg1: $Runnable$$Type): $CompletionStage<(void)>
 "thenAcceptBothAsync"<U>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiConsumer$$Type<(T), (U)>): $CompletionStage<(void)>
 "thenAcceptBothAsync"<U>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiConsumer$$Type<(T), (U)>, arg2: $Executor$$Type): $CompletionStage<(void)>
 "thenAcceptBoth"<U>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiConsumer$$Type<(T), (U)>): $CompletionStage<(void)>
 "thenCombineAsync"<U, V>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiFunction$$Type<(T), (U), (V)>): $CompletionStage<(V)>
 "thenCombineAsync"<U, V>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiFunction$$Type<(T), (U), (V)>, arg2: $Executor$$Type): $CompletionStage<(V)>
 "thenCombine"<U, V>(arg0: $CompletionStage$$Type<(U)>, arg1: $BiFunction$$Type<(T), (U), (V)>): $CompletionStage<(V)>
 "thenRunAsync"(arg0: $Runnable$$Type): $CompletionStage<(void)>
 "thenRunAsync"(arg0: $Runnable$$Type, arg1: $Executor$$Type): $CompletionStage<(void)>
 "thenRun"(arg0: $Runnable$$Type): $CompletionStage<(void)>
 "thenAcceptAsync"(arg0: $Consumer$$Type<(T)>): $CompletionStage<(void)>
 "thenAcceptAsync"(arg0: $Consumer$$Type<(T)>, arg1: $Executor$$Type): $CompletionStage<(void)>
 "thenAccept"(arg0: $Consumer$$Type<(T)>): $CompletionStage<(void)>
 "thenApplyAsync"<U>(arg0: $Function$$Type<(T), (U)>): $CompletionStage<(U)>
 "thenApplyAsync"<U>(arg0: $Function$$Type<(T), (U)>, arg1: $Executor$$Type): $CompletionStage<(U)>
 "thenApply"<U>(arg0: $Function$$Type<(T), (U)>): $CompletionStage<(U)>
 "handleAsync"<U>(arg0: $BiFunction$$Type<(T), ($Throwable), (U)>, arg1: $Executor$$Type): $CompletionStage<(U)>
 "handleAsync"<U>(arg0: $BiFunction$$Type<(T), ($Throwable), (U)>): $CompletionStage<(U)>
 "toCompletableFuture"(): $CompletableFuture<(T)>
 "exceptionallyComposeAsync"(arg0: $Function$$Type<($Throwable), ($CompletionStage$$Type<(T)>)>, arg1: $Executor$$Type): $CompletionStage<(T)>
 "exceptionallyComposeAsync"(arg0: $Function$$Type<($Throwable), ($CompletionStage$$Type<(T)>)>): $CompletionStage<(T)>
 "exceptionallyCompose"(arg0: $Function$$Type<($Throwable), ($CompletionStage$$Type<(T)>)>): $CompletionStage<(T)>
 "exceptionallyAsync"(arg0: $Function$$Type<($Throwable), (T)>): $CompletionStage<(T)>
 "exceptionallyAsync"(arg0: $Function$$Type<($Throwable), (T)>, arg1: $Executor$$Type): $CompletionStage<(T)>
 "exceptionally"(arg0: $Function$$Type<($Throwable), (T)>): $CompletionStage<(T)>
 "whenCompleteAsync"(arg0: $BiConsumer$$Type<(T), ($Throwable)>, arg1: $Executor$$Type): $CompletionStage<(T)>
 "whenCompleteAsync"(arg0: $BiConsumer$$Type<(T), ($Throwable)>): $CompletionStage<(T)>
 "thenComposeAsync"<U>(arg0: $Function$$Type<(T), ($CompletionStage$$Type<(U)>)>): $CompletionStage<(U)>
 "thenComposeAsync"<U>(arg0: $Function$$Type<(T), ($CompletionStage$$Type<(U)>)>, arg1: $Executor$$Type): $CompletionStage<(U)>
 "thenCompose"<U>(arg0: $Function$$Type<(T), ($CompletionStage$$Type<(U)>)>): $CompletionStage<(U)>
 "runAfterEitherAsync"(arg0: $CompletionStage$$Type<(any)>, arg1: $Runnable$$Type): $CompletionStage<(void)>
 "runAfterEitherAsync"(arg0: $CompletionStage$$Type<(any)>, arg1: $Runnable$$Type, arg2: $Executor$$Type): $CompletionStage<(void)>
 "runAfterEither"(arg0: $CompletionStage$$Type<(any)>, arg1: $Runnable$$Type): $CompletionStage<(void)>
 "acceptEitherAsync"(arg0: $CompletionStage$$Type<(T)>, arg1: $Consumer$$Type<(T)>): $CompletionStage<(void)>
 "acceptEitherAsync"(arg0: $CompletionStage$$Type<(T)>, arg1: $Consumer$$Type<(T)>, arg2: $Executor$$Type): $CompletionStage<(void)>
 "acceptEither"(arg0: $CompletionStage$$Type<(T)>, arg1: $Consumer$$Type<(T)>): $CompletionStage<(void)>
 "applyToEitherAsync"<U>(arg0: $CompletionStage$$Type<(T)>, arg1: $Function$$Type<(T), (U)>): $CompletionStage<(U)>
 "applyToEitherAsync"<U>(arg0: $CompletionStage$$Type<(T)>, arg1: $Function$$Type<(T), (U)>, arg2: $Executor$$Type): $CompletionStage<(U)>
 "whenComplete"(arg0: $BiConsumer$$Type<(T), ($Throwable)>): $CompletionStage<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompletionStage$$Type<T> = ($CompletionStage<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompletionStage_<T> = $CompletionStage$$Type<(T)>;
}}
declare module "java.util.LinkedHashSet" {
import {$HashSet, $HashSet$$Type} from "java.util.HashSet"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$SequencedSet, $SequencedSet$$Type} from "java.util.SequencedSet"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$SequencedCollection, $SequencedCollection$$Type} from "java.util.SequencedCollection"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$Set, $Set$$Type} from "java.util.Set"

export class $LinkedHashSet<E> extends $HashSet<(E)> implements $SequencedSet<(E)>, $Cloneable, $Serializable {

constructor(arg0: integer, arg1: float)
constructor(arg0: integer)
constructor()
constructor(arg0: $Collection$$Type<(E)>)

public "reversed"(): $SequencedCollection<(any)>
public "getFirst"(): E
public "getLast"(): E
public "addFirst"(arg0: E): void
public "addLast"(arg0: E): void
public "removeFirst"(): E
public "removeLast"(): E
public static "newLinkedHashSet"<T>(arg0: integer): $LinkedHashSet<(T)>
public "spliterator"(): $Spliterator<(E)>
public "removeAll"(arg0: $Collection$$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$$Type<(any)>): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $Set<(E)>
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
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
get "first"(): E
get "last"(): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkedHashSet$$Type<E> = ($LinkedHashSet<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkedHashSet_<E> = $LinkedHashSet$$Type<(E)>;
}}
declare module "java.util.Locale$LanguageRange" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"

export class $Locale$LanguageRange {
static readonly "MAX_WEIGHT": double
static readonly "MIN_WEIGHT": double

constructor(arg0: StringJS)
constructor(arg0: StringJS, arg1: double)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "parse"(arg0: StringJS): $List<($Locale$LanguageRange)>
public static "parse"(arg0: StringJS, arg1: $Map$$Type<(StringJS), ($List$$Type<(StringJS)>)>): $List<($Locale$LanguageRange)>
public "getRange"(): StringJS
public static "mapEquivalents"(arg0: $List$$Type<($Locale$LanguageRange$$Type)>, arg1: $Map$$Type<(StringJS), ($List$$Type<(StringJS)>)>): $List<($Locale$LanguageRange)>
public "getWeight"(): double
get "range"(): StringJS
get "weight"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Locale$LanguageRange$$Type = ($Locale$LanguageRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Locale$LanguageRange_ = $Locale$LanguageRange$$Type;
}}
declare module "java.util.Locale" {
import {$Locale$FilteringMode, $Locale$FilteringMode$$Type} from "java.util.Locale$FilteringMode"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Locale$Category, $Locale$Category$$Type} from "java.util.Locale$Category"
import {$List, $List$$Type} from "java.util.List"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Locale$LanguageRange, $Locale$LanguageRange$$Type} from "java.util.Locale$LanguageRange"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Locale$IsoCountryCode, $Locale$IsoCountryCode$$Type} from "java.util.Locale$IsoCountryCode"

export class $Locale implements $Cloneable, $Serializable {
static readonly "PRC": $Locale
static readonly "CANADA": $Locale
static readonly "ENGLISH": $Locale
static readonly "ROOT": $Locale
static readonly "TAIWAN": $Locale
static readonly "CHINA": $Locale
static readonly "ITALY": $Locale
static readonly "CHINESE": $Locale
static readonly "KOREA": $Locale
static readonly "FRENCH": $Locale
static readonly "FRANCE": $Locale
static readonly "TRADITIONAL_CHINESE": $Locale
static readonly "CANADA_FRENCH": $Locale
static readonly "GERMANY": $Locale
static readonly "ITALIAN": $Locale
static readonly "PRIVATE_USE_EXTENSION": character
static readonly "UK": $Locale
static readonly "JAPAN": $Locale
static readonly "JAPANESE": $Locale
static readonly "UNICODE_LOCALE_EXTENSION": character
static readonly "SIMPLIFIED_CHINESE": $Locale
static readonly "GERMAN": $Locale
static readonly "US": $Locale
static readonly "KOREAN": $Locale

/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS, arg1: StringJS)
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS)
/**
 * 
 * @deprecated
 */
constructor(arg0: StringJS, arg1: StringJS, arg2: StringJS)

public "getLanguage"(): StringJS
public "getDisplayName"(): StringJS
public "getDisplayName"(arg0: $Locale$$Type): StringJS
public static "getAvailableLocales"(): ($Locale)[]
public "getScript"(): StringJS
public "getCountry"(): StringJS
public "getVariant"(): StringJS
public static "setDefault"(arg0: $Locale$Category$$Type, arg1: $Locale$$Type): void
public static "setDefault"(arg0: $Locale$$Type): void
public "hasExtensions"(): boolean
public "getUnicodeLocaleAttributes"(): $Set<(StringJS)>
public "getUnicodeLocaleType"(arg0: StringJS): StringJS
public "getUnicodeLocaleKeys"(): $Set<(StringJS)>
public "getDisplayLanguage"(): StringJS
public "getDisplayLanguage"(arg0: $Locale$$Type): StringJS
public "getDisplayScript"(arg0: $Locale$$Type): StringJS
public "getDisplayScript"(): StringJS
public "getDisplayCountry"(arg0: $Locale$$Type): StringJS
public "getDisplayCountry"(): StringJS
public "getDisplayVariant"(arg0: $Locale$$Type): StringJS
public "getDisplayVariant"(): StringJS
public static "filterTags"(arg0: $List$$Type<($Locale$LanguageRange$$Type)>, arg1: $Collection$$Type<(StringJS)>, arg2: $Locale$FilteringMode$$Type): $List<(StringJS)>
public static "filterTags"(arg0: $List$$Type<($Locale$LanguageRange$$Type)>, arg1: $Collection$$Type<(StringJS)>): $List<(StringJS)>
public static "lookupTag"(arg0: $List$$Type<($Locale$LanguageRange$$Type)>, arg1: $Collection$$Type<(StringJS)>): StringJS
public static "availableLocales"(): $Stream<($Locale)>
public static "getISOCountries"(): (StringJS)[]
public static "getISOCountries"(arg0: $Locale$IsoCountryCode$$Type): $Set<(StringJS)>
public static "getISOLanguages"(): (StringJS)[]
public "stripExtensions"(): $Locale
public "getExtension"(arg0: character): StringJS
public "getExtensionKeys"(): $Set<(character)>
public "toLanguageTag"(): StringJS
public static "caseFoldLanguageTag"(arg0: StringJS): StringJS
public static "forLanguageTag"(arg0: StringJS): $Locale
public "getISO3Language"(): StringJS
public "getISO3Country"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "clone"(): any
public static "getDefault"(): $Locale
public static "getDefault"(arg0: $Locale$Category$$Type): $Locale
public static "of"(arg0: StringJS): $Locale
public static "of"(arg0: StringJS, arg1: StringJS): $Locale
public static "of"(arg0: StringJS, arg1: StringJS, arg2: StringJS): $Locale
public static "lookup"(arg0: $List$$Type<($Locale$LanguageRange$$Type)>, arg1: $Collection$$Type<($Locale$$Type)>): $Locale
public static "filter"(arg0: $List$$Type<($Locale$LanguageRange$$Type)>, arg1: $Collection$$Type<($Locale$$Type)>, arg2: $Locale$FilteringMode$$Type): $List<($Locale)>
public static "filter"(arg0: $List$$Type<($Locale$LanguageRange$$Type)>, arg1: $Collection$$Type<($Locale$$Type)>): $List<($Locale)>
get "language"(): StringJS
get "displayName"(): StringJS
get "script"(): StringJS
get "country"(): StringJS
get "variant"(): StringJS
get "unicodeLocaleAttributes"(): $Set<(StringJS)>
get "unicodeLocaleKeys"(): $Set<(StringJS)>
get "displayLanguage"(): StringJS
get "displayScript"(): StringJS
get "displayCountry"(): StringJS
get "displayVariant"(): StringJS
get "extensionKeys"(): $Set<(character)>
get "iSO3Language"(): StringJS
get "iSO3Country"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Locale$$Type = ($Locale);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Locale_ = $Locale$$Type;
}}
declare module "java.util.OptionalInt" {
import {$IntStream, $IntStream$$Type} from "java.util.stream.IntStream"
import {$IntConsumer, $IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$IntSupplier, $IntSupplier$$Type} from "java.util.function.IntSupplier"

export class $OptionalInt {


public "ifPresentOrElse"(arg0: $IntConsumer$$Type, arg1: $Runnable$$Type): void
public "orElseGet"(arg0: $IntSupplier$$Type): integer
public "orElseThrow"<X extends $Throwable>(arg0: $Supplier$$Type<(X)>): integer
public "orElseThrow"(): integer
public "ifPresent"(arg0: $IntConsumer$$Type): void
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "stream"(): $IntStream
public static "of"(arg0: integer): $OptionalInt
public static "empty"(): $OptionalInt
public "isPresent"(): boolean
public "orElse"(arg0: integer): integer
public "getAsInt"(): integer
get "present"(): boolean
get "asInt"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionalInt$$Type = ($OptionalInt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OptionalInt_ = $OptionalInt$$Type;
}}
declare module "java.util.Currency" {
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Locale, $Locale$$Type} from "java.util.Locale"

export class $Currency implements $Serializable {


public "getSymbol"(): StringJS
public "getSymbol"(arg0: $Locale$$Type): StringJS
public "getDisplayName"(arg0: $Locale$$Type): StringJS
public "getDisplayName"(): StringJS
public static "getAvailableCurrencies"(): $Set<($Currency)>
public "getDefaultFractionDigits"(): integer
public "getNumericCode"(): integer
public "getNumericCodeAsString"(): StringJS
public "toString"(): StringJS
public static "getInstance"(arg0: $Locale$$Type): $Currency
public static "getInstance"(arg0: StringJS): $Currency
public "getCurrencyCode"(): StringJS
get "symbol"(): StringJS
get "displayName"(): StringJS
get "defaultFractionDigits"(): integer
get "numericCode"(): integer
get "numericCodeAsString"(): StringJS
get "currencyCode"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Currency$$Type = ($Currency);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Currency_ = $Currency$$Type;
}}
declare module "java.util.AbstractSet" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Set, $Set$$Type} from "java.util.Set"
import {$AbstractCollection, $AbstractCollection$$Type} from "java.util.AbstractCollection"

export class $AbstractSet<E> extends $AbstractCollection<(E)> implements $Set<(E)> {


public "removeAll"(arg0: $Collection$$Type<(any)>): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
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
export type $AbstractSet$$Type<E> = ($AbstractSet<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSet_<E> = $AbstractSet$$Type<(E)>;
}}
declare module "java.util.ArrayDeque" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$SequencedCollection, $SequencedCollection$$Type} from "java.util.SequencedCollection"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$Deque, $Deque$$Type} from "java.util.Deque"
import {$AbstractCollection, $AbstractCollection$$Type} from "java.util.AbstractCollection"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $ArrayDeque<E> extends $AbstractCollection<(E)> implements $Deque<(E)>, $Cloneable, $Serializable {

constructor()
constructor(arg0: integer)
constructor(arg0: $Collection$$Type<(E)>)

public "push"(arg0: E): void
public "pop"(): E
public "peek"(): E
public "removeAll"(arg0: $Collection$$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$$Type<(any)>): boolean
public "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
public "getFirst"(): E
public "getLast"(): E
public "element"(): E
public "addFirst"(arg0: E): void
public "addLast"(arg0: E): void
public "removeFirst"(): E
public "removeLast"(): E
public "poll"(): E
public "pollFirst"(): E
public "pollLast"(): E
public "offerLast"(arg0: E): boolean
public "peekFirst"(): E
public "removeFirstOccurrence"(arg0: any): boolean
public "offerFirst"(arg0: E): boolean
public "peekLast"(): E
public "removeLastOccurrence"(arg0: any): boolean
public "offer"(arg0: E): boolean
public "descendingIterator"(): $Iterator<(E)>
public "remove"(arg0: any): boolean
public "remove"(): E
public "size"(): integer
public "clone"(): any
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: E): boolean
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "forEach"(arg0: $Consumer$$Type<(E)>): void
public "reversed"(): $SequencedCollection<(any)>
public "equals"(arg0: any): boolean
public "hashCode"(): integer
get "first"(): E
get "last"(): E
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrayDeque$$Type<E> = ($ArrayDeque<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArrayDeque_<E> = $ArrayDeque$$Type<(E)>;
}}
declare module "java.util.Spliterator$OfInt" {
import {$Spliterator$OfPrimitive, $Spliterator$OfPrimitive$$Type} from "java.util.Spliterator$OfPrimitive"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$IntConsumer, $IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $Spliterator$OfInt extends $Spliterator$OfPrimitive<(integer), ($IntConsumer), ($Spliterator$OfInt)> {

 "tryAdvance"(arg0: $Consumer$$Type<(integer)>): boolean
 "tryAdvance"(arg0: $IntConsumer$$Type): boolean
 "tryAdvance"(arg0: any): boolean
 "trySplit"(): $Spliterator<(any)>
 "forEachRemaining"(arg0: $Consumer$$Type<(integer)>): void
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $IntConsumer$$Type): void
 "estimateSize"(): long
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
 "getComparator"(): $Comparator<(integer)>
 "characteristics"(): integer
get "exactSizeIfKnown"(): long
get "comparator"(): $Comparator<(integer)>
}

export namespace $Spliterator$OfInt {
const probejs$$marker: never
}
export class $Spliterator$OfInt$$Static implements $Spliterator$OfInt {


 "tryAdvance"(arg0: $Consumer$$Type<(integer)>): boolean
 "tryAdvance"(arg0: $IntConsumer$$Type): boolean
 "tryAdvance"(arg0: any): boolean
 "trySplit"(): $Spliterator<(any)>
 "forEachRemaining"(arg0: $Consumer$$Type<(integer)>): void
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $IntConsumer$$Type): void
 "estimateSize"(): long
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
 "getComparator"(): $Comparator<(integer)>
 "characteristics"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Spliterator$OfInt$$Type = ($Spliterator$OfInt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Spliterator$OfInt_ = $Spliterator$OfInt$$Type;
}}
declare module "java.util.Collection" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"

export interface $Collection<E> extends $Iterable<(E)> {

 "removeAll"(arg0: $Collection$$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$$Type<(any)>): boolean
 "parallelStream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: E): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "iterator"(): $Iterator<(E)>
 "stream"(): $Stream<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "forEach"(arg0: $Consumer$$Type<(E)>): void
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}

export namespace $Collection {
const probejs$$marker: never
}
export class $Collection$$Static<E> implements $Collection {


 "removeAll"(arg0: $Collection$$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$$Type<(any)>): boolean
 "parallelStream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
 "remove"(arg0: any): boolean
 "size"(): integer
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "add"(arg0: E): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "toArray"<T>(arg0: $IntFunction$$Type<((T)[])>): (T)[]
 "iterator"(): $Iterator<(E)>
 "stream"(): $Stream<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: $Collection$$Type<(E)>): boolean
 "forEach"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Collection$$Type<E> = ((E)[]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Collection_<E> = $Collection$$Type<(E)>;
}}
declare module "java.util.IntSummaryStatistics" {
import {$IntConsumer, $IntConsumer$$Type} from "java.util.function.IntConsumer"

export class $IntSummaryStatistics implements $IntConsumer {

constructor()
constructor(arg0: long, arg1: integer, arg2: integer, arg3: long)

public "toString"(): StringJS
public "accept"(arg0: integer): void
public "combine"(arg0: $IntSummaryStatistics$$Type): void
public "getCount"(): long
public "getMax"(): integer
public "getMin"(): integer
public "getSum"(): long
public "getAverage"(): double
public "andThen"(arg0: $IntConsumer$$Type): $IntConsumer
get "count"(): long
get "max"(): integer
get "min"(): integer
get "sum"(): long
get "average"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntSummaryStatistics$$Type = ($IntSummaryStatistics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntSummaryStatistics_ = $IntSummaryStatistics$$Type;
}}
declare module "java.util.function.Predicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Predicate<T> {

 "or"(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
 "negate"(): $Predicate<(T)>
 "and"(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
 "test"(arg0: T): boolean

(arg0: T): boolean
}

export namespace $Predicate {
function not<T>(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
function isEqual<T>(arg0: any): $Predicate<(T)>
const probejs$$marker: never
}
export class $Predicate$$Static<T> implements $Predicate {


 "or"(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
static "not"<T>(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
 "negate"(): $Predicate<(T)>
 "and"(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
static "isEqual"<T>(arg0: any): $Predicate<(T)>
 "test"(arg0: T): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Predicate$$Type<T> = ((arg0: T) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Predicate_<T> = $Predicate$$Type<(T)>;
}}
declare module "java.util.stream.DoubleStream$Builder" {
import {$DoubleConsumer, $DoubleConsumer$$Type} from "java.util.function.DoubleConsumer"
import {$DoubleStream, $DoubleStream$$Type} from "java.util.stream.DoubleStream"

export interface $DoubleStream$Builder extends $DoubleConsumer {

 "build"(): $DoubleStream
 "add"(arg0: double): $DoubleStream$Builder
 "accept"(arg0: double): void
 "andThen"(arg0: $DoubleConsumer$$Type): $DoubleConsumer
}

export namespace $DoubleStream$Builder {
const probejs$$marker: never
}
export class $DoubleStream$Builder$$Static implements $DoubleStream$Builder {


 "build"(): $DoubleStream
 "add"(arg0: double): $DoubleStream$Builder
 "accept"(arg0: double): void
 "andThen"(arg0: $DoubleConsumer$$Type): $DoubleConsumer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleStream$Builder$$Type = ($DoubleStream$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleStream$Builder_ = $DoubleStream$Builder$$Type;
}}
declare module "java.util.regex.Pattern" {
import {$Matcher, $Matcher$$Type} from "java.util.regex.Matcher"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export class $Pattern implements $Serializable {
static readonly "DOTALL": integer
static readonly "UNICODE_CASE": integer
static readonly "LITERAL": integer
static readonly "UNICODE_CHARACTER_CLASS": integer
static readonly "CASE_INSENSITIVE": integer
static readonly "CANON_EQ": integer
static readonly "COMMENTS": integer
static readonly "UNIX_LINES": integer
static readonly "MULTILINE": integer


public "namedGroups"(): $Map<(StringJS), (integer)>
public static "quote"(arg0: StringJS): StringJS
public "asPredicate"(): $Predicate<(StringJS)>
public "asMatchPredicate"(): $Predicate<(StringJS)>
public "splitAsStream"(arg0: charseq): $Stream<(StringJS)>
public "toString"(): StringJS
public "flags"(): integer
public static "matches"(arg0: StringJS, arg1: charseq): boolean
public static "compile"(arg0: StringJS, arg1: integer): $Pattern
public static "compile"(arg0: StringJS): $Pattern
public "matcher"(arg0: charseq): $Matcher
public "split"(arg0: charseq): (StringJS)[]
public "split"(arg0: charseq, arg1: integer): (StringJS)[]
public "splitWithDelimiters"(arg0: charseq, arg1: integer): (StringJS)[]
public "pattern"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pattern$$Type = ($Pattern);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pattern_ = $Pattern$$Type;
}}
declare module "java.util.regex.Matcher" {
import {$Pattern, $Pattern$$Type} from "java.util.regex.Pattern"
import {$StringBuilder, $StringBuilder$$Type} from "java.lang.StringBuilder"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringBuffer, $StringBuffer$$Type} from "java.lang.StringBuffer"
import {$MatchResult, $MatchResult$$Type} from "java.util.regex.MatchResult"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export class $Matcher implements $MatchResult {


public "namedGroups"(): $Map<(StringJS), (integer)>
public "appendReplacement"(arg0: $StringBuilder$$Type, arg1: StringJS): $Matcher
public "appendReplacement"(arg0: $StringBuffer$$Type, arg1: StringJS): $Matcher
public "appendTail"(arg0: $StringBuilder$$Type): $StringBuilder
public "appendTail"(arg0: $StringBuffer$$Type): $StringBuffer
public "region"(arg0: integer, arg1: integer): $Matcher
public "hitEnd"(): boolean
public "hasMatch"(): boolean
public "groupCount"(): integer
public "regionStart"(): integer
public "regionEnd"(): integer
public "requireEnd"(): boolean
public "toMatchResult"(): $MatchResult
public "usePattern"(arg0: $Pattern$$Type): $Matcher
public "lookingAt"(): boolean
public static "quoteReplacement"(arg0: StringJS): StringJS
public "results"(): $Stream<($MatchResult)>
public "hasTransparentBounds"(): boolean
public "useTransparentBounds"(arg0: boolean): $Matcher
public "hasAnchoringBounds"(): boolean
public "useAnchoringBounds"(arg0: boolean): $Matcher
public "group"(): StringJS
public "group"(arg0: StringJS): StringJS
public "group"(arg0: integer): StringJS
public "reset"(): $Matcher
public "reset"(arg0: charseq): $Matcher
public "toString"(): StringJS
public "end"(arg0: StringJS): integer
public "end"(arg0: integer): integer
public "end"(): integer
public "matches"(): boolean
public "replaceFirst"(arg0: StringJS): StringJS
public "replaceFirst"(arg0: $Function$$Type<($MatchResult), (StringJS)>): StringJS
public "replaceAll"(arg0: StringJS): StringJS
public "replaceAll"(arg0: $Function$$Type<($MatchResult), (StringJS)>): StringJS
public "pattern"(): $Pattern
public "find"(arg0: integer): boolean
public "find"(): boolean
public "start"(): integer
public "start"(arg0: integer): integer
public "start"(arg0: StringJS): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matcher$$Type = ($Matcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Matcher_ = $Matcher$$Type;
}}
declare module "java.util.OptionalLong" {
import {$LongSupplier, $LongSupplier$$Type} from "java.util.function.LongSupplier"
import {$LongConsumer, $LongConsumer$$Type} from "java.util.function.LongConsumer"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$LongStream, $LongStream$$Type} from "java.util.stream.LongStream"
import {$Throwable, $Throwable$$Type} from "java.lang.Throwable"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export class $OptionalLong {


public "ifPresentOrElse"(arg0: $LongConsumer$$Type, arg1: $Runnable$$Type): void
public "orElseGet"(arg0: $LongSupplier$$Type): long
public "orElseThrow"<X extends $Throwable>(arg0: $Supplier$$Type<(X)>): long
public "orElseThrow"(): long
public "ifPresent"(arg0: $LongConsumer$$Type): void
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "stream"(): $LongStream
public static "of"(arg0: long): $OptionalLong
public static "empty"(): $OptionalLong
public "isPresent"(): boolean
public "orElse"(arg0: long): long
public "getAsLong"(): long
get "present"(): boolean
get "asLong"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionalLong$$Type = ($OptionalLong);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OptionalLong_ = $OptionalLong$$Type;
}}
declare module "java.util.stream.Stream" {
import {$ToDoubleFunction, $ToDoubleFunction$$Type} from "java.util.function.ToDoubleFunction"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$BaseStream, $BaseStream$$Type} from "java.util.stream.BaseStream"
import {$List, $List$$Type} from "java.util.List"
import {$Stream$Builder, $Stream$Builder$$Type} from "java.util.stream.Stream$Builder"
import {$BinaryOperator, $BinaryOperator$$Type} from "java.util.function.BinaryOperator"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$IntFunction, $IntFunction$$Type} from "java.util.function.IntFunction"
import {$ToLongFunction, $ToLongFunction$$Type} from "java.util.function.ToLongFunction"
import {$LongConsumer, $LongConsumer$$Type} from "java.util.function.LongConsumer"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$IntConsumer, $IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Collector, $Collector$$Type} from "java.util.stream.Collector"
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$IntStream, $IntStream$$Type} from "java.util.stream.IntStream"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$LongStream, $LongStream$$Type} from "java.util.stream.LongStream"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$ToIntFunction, $ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$DoubleConsumer, $DoubleConsumer$$Type} from "java.util.function.DoubleConsumer"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$DoubleStream, $DoubleStream$$Type} from "java.util.stream.DoubleStream"

export interface $Stream<T> extends $BaseStream<(T), ($Stream<(T)>)> {

 "distinct"(): $Stream<(T)>
 "sorted"(arg0: $Comparator$$Type<(T)>): $Stream<(T)>
 "sorted"(): $Stream<(T)>
 "peek"(arg0: $Consumer$$Type<(T)>): $Stream<(T)>
 "skip"(arg0: long): $Stream<(T)>
 "reduce"(arg0: T, arg1: $BinaryOperator$$Type<(T)>): T
 "reduce"(arg0: $BinaryOperator$$Type<(T)>): $Optional<(T)>
 "reduce"<U>(arg0: U, arg1: $BiFunction$$Type<(U), (T), (U)>, arg2: $BinaryOperator$$Type<(U)>): U
 "flatMapToInt"(arg0: $Function$$Type<(T), ($IntStream$$Type)>): $IntStream
 "flatMapToLong"(arg0: $Function$$Type<(T), ($LongStream$$Type)>): $LongStream
 "flatMapToDouble"(arg0: $Function$$Type<(T), ($DoubleStream$$Type)>): $DoubleStream
 "mapToInt"(arg0: $ToIntFunction$$Type<(T)>): $IntStream
 "mapToLong"(arg0: $ToLongFunction$$Type<(T)>): $LongStream
 "mapToDouble"(arg0: $ToDoubleFunction$$Type<(T)>): $DoubleStream
 "mapMulti"<R>(arg0: $BiConsumer$$Type<(T), ($Consumer<(R)>)>): $Stream<(R)>
 "mapMultiToInt"(arg0: $BiConsumer$$Type<(T), ($IntConsumer)>): $IntStream
 "mapMultiToLong"(arg0: $BiConsumer$$Type<(T), ($LongConsumer)>): $LongStream
 "mapMultiToDouble"(arg0: $BiConsumer$$Type<(T), ($DoubleConsumer)>): $DoubleStream
 "takeWhile"(arg0: $Predicate$$Type<(T)>): $Stream<(T)>
 "dropWhile"(arg0: $Predicate$$Type<(T)>): $Stream<(T)>
 "forEachOrdered"(arg0: $Consumer$$Type<(T)>): void
 "findFirst"(): $Optional<(T)>
 "allMatch"(arg0: $Predicate$$Type<(T)>): boolean
 "noneMatch"(arg0: $Predicate$$Type<(T)>): boolean
 "min"(arg0: $Comparator$$Type<(T)>): $Optional<(T)>
 "max"(arg0: $Comparator$$Type<(T)>): $Optional<(T)>
 "toArray"<A>(arg0: $IntFunction$$Type<((A)[])>): (A)[]
 "toArray"(): (any)[]
 "map"<R>(arg0: $Function$$Type<(T), (R)>): $Stream<(R)>
 "collect"<R, A>(arg0: $Collector$$Type<(T), (A), (R)>): R
 "collect"<R>(arg0: $Supplier$$Type<(R)>, arg1: $BiConsumer$$Type<(R), (T)>, arg2: $BiConsumer$$Type<(R), (R)>): R
 "toList"(): $List<(T)>
 "count"(): long
 "limit"(arg0: long): $Stream<(T)>
 "filter"(arg0: $Predicate$$Type<(T)>): $Stream<(T)>
 "anyMatch"(arg0: $Predicate$$Type<(T)>): boolean
 "flatMap"<R>(arg0: $Function$$Type<(T), ($Stream$$Type<(R)>)>): $Stream<(R)>
 "forEach"(arg0: $Consumer$$Type<(T)>): void
 "findAny"(): $Optional<(T)>
 "isParallel"(): boolean
 "onClose"(arg0: $Runnable$$Type): $Stream<(T)>
 "parallel"(): $Stream<(T)>
 "sequential"(): $Stream<(T)>
 "unordered"(): $Stream<(T)>
 "iterator"(): $Iterator<(T)>
 "spliterator"(): $Spliterator<(T)>
 "close"(): void
}

export namespace $Stream {
function iterate<T>(arg0: T, arg1: $Predicate$$Type<(T)>, arg2: $UnaryOperator$$Type<(T)>): $Stream<(T)>
function iterate<T>(arg0: T, arg1: $UnaryOperator$$Type<(T)>): $Stream<(T)>
function ofNullable<T>(arg0: T): $Stream<(T)>
function generate<T>(arg0: $Supplier$$Type<(T)>): $Stream<(T)>
function of<T>(...arg0: (T)[]): $Stream<(T)>
function of<T>(arg0: T): $Stream<(T)>
function builder<T>(): $Stream$Builder<(T)>
function concat<T>(arg0: $Stream$$Type<(T)>, arg1: $Stream$$Type<(T)>): $Stream<(T)>
function empty<T>(): $Stream<(T)>
const probejs$$marker: never
}
export class $Stream$$Static<T> implements $Stream {


static "iterate"<T>(arg0: T, arg1: $Predicate$$Type<(T)>, arg2: $UnaryOperator$$Type<(T)>): $Stream<(T)>
static "iterate"<T>(arg0: T, arg1: $UnaryOperator$$Type<(T)>): $Stream<(T)>
 "distinct"(): $Stream<(T)>
static "ofNullable"<T>(arg0: T): $Stream<(T)>
 "sorted"(arg0: $Comparator$$Type<(T)>): $Stream<(T)>
 "sorted"(): $Stream<(T)>
static "generate"<T>(arg0: $Supplier$$Type<(T)>): $Stream<(T)>
 "peek"(arg0: $Consumer$$Type<(T)>): $Stream<(T)>
 "skip"(arg0: long): $Stream<(T)>
 "reduce"(arg0: T, arg1: $BinaryOperator$$Type<(T)>): T
 "reduce"(arg0: $BinaryOperator$$Type<(T)>): $Optional<(T)>
 "reduce"<U>(arg0: U, arg1: $BiFunction$$Type<(U), (T), (U)>, arg2: $BinaryOperator$$Type<(U)>): U
 "flatMapToInt"(arg0: $Function$$Type<(T), ($IntStream$$Type)>): $IntStream
 "flatMapToLong"(arg0: $Function$$Type<(T), ($LongStream$$Type)>): $LongStream
 "flatMapToDouble"(arg0: $Function$$Type<(T), ($DoubleStream$$Type)>): $DoubleStream
 "mapToInt"(arg0: $ToIntFunction$$Type<(T)>): $IntStream
 "mapToLong"(arg0: $ToLongFunction$$Type<(T)>): $LongStream
 "mapToDouble"(arg0: $ToDoubleFunction$$Type<(T)>): $DoubleStream
 "mapMulti"<R>(arg0: $BiConsumer$$Type<(T), ($Consumer<(R)>)>): $Stream<(R)>
 "mapMultiToInt"(arg0: $BiConsumer$$Type<(T), ($IntConsumer)>): $IntStream
 "mapMultiToLong"(arg0: $BiConsumer$$Type<(T), ($LongConsumer)>): $LongStream
 "mapMultiToDouble"(arg0: $BiConsumer$$Type<(T), ($DoubleConsumer)>): $DoubleStream
 "takeWhile"(arg0: $Predicate$$Type<(T)>): $Stream<(T)>
 "dropWhile"(arg0: $Predicate$$Type<(T)>): $Stream<(T)>
 "forEachOrdered"(arg0: $Consumer$$Type<(T)>): void
 "findFirst"(): $Optional<(T)>
 "allMatch"(arg0: $Predicate$$Type<(T)>): boolean
 "noneMatch"(arg0: $Predicate$$Type<(T)>): boolean
 "min"(arg0: $Comparator$$Type<(T)>): $Optional<(T)>
 "max"(arg0: $Comparator$$Type<(T)>): $Optional<(T)>
 "toArray"<A>(arg0: $IntFunction$$Type<((A)[])>): (A)[]
 "toArray"(): (any)[]
 "map"<R>(arg0: $Function$$Type<(T), (R)>): $Stream<(R)>
 "collect"<R, A>(arg0: $Collector$$Type<(T), (A), (R)>): R
 "collect"<R>(arg0: $Supplier$$Type<(R)>, arg1: $BiConsumer$$Type<(R), (T)>, arg2: $BiConsumer$$Type<(R), (R)>): R
 "toList"(): $List<(T)>
static "of"<T>(...arg0: (T)[]): $Stream<(T)>
static "of"<T>(arg0: T): $Stream<(T)>
 "count"(): long
static "builder"<T>(): $Stream$Builder<(T)>
static "concat"<T>(arg0: $Stream$$Type<(T)>, arg1: $Stream$$Type<(T)>): $Stream<(T)>
 "limit"(arg0: long): $Stream<(T)>
 "filter"(arg0: $Predicate$$Type<(T)>): $Stream<(T)>
static "empty"<T>(): $Stream<(T)>
 "anyMatch"(arg0: $Predicate$$Type<(T)>): boolean
 "flatMap"<R>(arg0: $Function$$Type<(T), ($Stream$$Type<(R)>)>): $Stream<(R)>
 "forEach"(arg0: $Consumer$$Type<(T)>): void
 "findAny"(): $Optional<(T)>
 "isParallel"(): boolean
 "onClose"(arg0: $Runnable$$Type): $Stream<(T)>
 "parallel"(): $Stream<(T)>
 "sequential"(): $Stream<(T)>
 "unordered"(): $Stream<(T)>
 "iterator"(): $Iterator<(T)>
 "spliterator"(): $Spliterator<(T)>
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stream$$Type<T> = ($Stream<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Stream_<T> = $Stream$$Type<(T)>;
}}
declare module "java.util.function.BiPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BiPredicate<T, U> {

 "or"(arg0: $BiPredicate$$Type<(T), (U)>): $BiPredicate<(T), (U)>
 "negate"(): $BiPredicate<(T), (U)>
 "and"(arg0: $BiPredicate$$Type<(T), (U)>): $BiPredicate<(T), (U)>
 "test"(arg0: T, arg1: U): boolean

(arg0: T, arg1: U): boolean
}

export namespace $BiPredicate {
const probejs$$marker: never
}
export class $BiPredicate$$Static<T, U> implements $BiPredicate {


 "or"(arg0: $BiPredicate$$Type<(T), (U)>): $BiPredicate<(T), (U)>
 "negate"(): $BiPredicate<(T), (U)>
 "and"(arg0: $BiPredicate$$Type<(T), (U)>): $BiPredicate<(T), (U)>
 "test"(arg0: T, arg1: U): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiPredicate$$Type<T, U> = ((arg0: T, arg1: U) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiPredicate_<T, U> = $BiPredicate$$Type<(T), (U)>;
}}
declare module "java.util.ListIterator" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $ListIterator<E> extends $Iterator<(E)> {

 "previousIndex"(): integer
 "hasPrevious"(): boolean
 "previous"(): E
 "nextIndex"(): integer
 "remove"(): void
 "add"(arg0: E): void
 "hasNext"(): boolean
 "next"(): E
 "set"(arg0: E): void
 "forEachRemaining"(arg0: $Consumer$$Type<(E)>): void
}

export namespace $ListIterator {
const probejs$$marker: never
}
export class $ListIterator$$Static<E> implements $ListIterator {


 "previousIndex"(): integer
 "hasPrevious"(): boolean
 "previous"(): E
 "nextIndex"(): integer
 "remove"(): void
 "add"(arg0: E): void
 "hasNext"(): boolean
 "next"(): E
 "set"(arg0: E): void
 "forEachRemaining"(arg0: $Consumer$$Type<(E)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListIterator$$Type<E> = ($ListIterator<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListIterator_<E> = $ListIterator$$Type<(E)>;
}}
declare module "java.util.EventListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EventListener {

}

export namespace $EventListener {
const probejs$$marker: never
}
export class $EventListener$$Static implements $EventListener {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventListener$$Type = ($EventListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventListener_ = $EventListener$$Type;
}}
declare module "java.util.concurrent.Executor" {
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export interface $Executor {

 "execute"(arg0: $Runnable$$Type): void

(arg0: $Runnable): void
}

export namespace $Executor {
const probejs$$marker: never
}
export class $Executor$$Static implements $Executor {


 "execute"(arg0: $Runnable$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Executor$$Type = ((arg0: $Runnable) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Executor_ = $Executor$$Type;
}}
declare module "java.util.function.UnaryOperator" {
import {$Function, $Function$$Type} from "java.util.function.Function"

export interface $UnaryOperator<T> extends $Function<(T), (T)> {

 "compose"<V>(arg0: $Function$$Type<(V), (T)>): $Function<(V), (T)>
 "andThen"<V>(arg0: $Function$$Type<(T), (V)>): $Function<(T), (V)>
 "apply"(arg0: T): T

(arg0: T): T
}

export namespace $UnaryOperator {
function identity<T>(): $UnaryOperator<(T)>
const probejs$$marker: never
}
export class $UnaryOperator$$Static<T> implements $UnaryOperator {


static "identity"<T>(): $UnaryOperator<(T)>
 "compose"<V>(arg0: $Function$$Type<(V), (T)>): $Function<(V), (T)>
 "andThen"<V>(arg0: $Function$$Type<(T), (V)>): $Function<(T), (V)>
 "apply"(arg0: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnaryOperator$$Type<T> = ((arg0: T) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnaryOperator_<T> = $UnaryOperator$$Type<(T)>;
}}
declare module "java.util.Spliterator$OfLong" {
import {$Spliterator$OfPrimitive, $Spliterator$OfPrimitive$$Type} from "java.util.Spliterator$OfPrimitive"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$LongConsumer, $LongConsumer$$Type} from "java.util.function.LongConsumer"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $Spliterator$OfLong extends $Spliterator$OfPrimitive<(long), ($LongConsumer), ($Spliterator$OfLong)> {

 "tryAdvance"(arg0: $Consumer$$Type<(long)>): boolean
 "tryAdvance"(arg0: $LongConsumer$$Type): boolean
 "tryAdvance"(arg0: any): boolean
 "trySplit"(): $Spliterator<(any)>
 "forEachRemaining"(arg0: $Consumer$$Type<(long)>): void
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $LongConsumer$$Type): void
 "estimateSize"(): long
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
 "getComparator"(): $Comparator<(long)>
 "characteristics"(): integer
get "exactSizeIfKnown"(): long
get "comparator"(): $Comparator<(long)>
}

export namespace $Spliterator$OfLong {
const probejs$$marker: never
}
export class $Spliterator$OfLong$$Static implements $Spliterator$OfLong {


 "tryAdvance"(arg0: $Consumer$$Type<(long)>): boolean
 "tryAdvance"(arg0: $LongConsumer$$Type): boolean
 "tryAdvance"(arg0: any): boolean
 "trySplit"(): $Spliterator<(any)>
 "forEachRemaining"(arg0: $Consumer$$Type<(long)>): void
 "forEachRemaining"(arg0: any): void
 "forEachRemaining"(arg0: $LongConsumer$$Type): void
 "estimateSize"(): long
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
 "getComparator"(): $Comparator<(long)>
 "characteristics"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Spliterator$OfLong$$Type = ($Spliterator$OfLong);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Spliterator$OfLong_ = $Spliterator$OfLong$$Type;
}}
declare module "java.util.function.LongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LongFunction<R> {

 "apply"(arg0: long): R

(arg0: long): R
}

export namespace $LongFunction {
const probejs$$marker: never
}
export class $LongFunction$$Static<R> implements $LongFunction {


 "apply"(arg0: long): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongFunction$$Type<R> = ((arg0: long) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongFunction_<R> = $LongFunction$$Type<(R)>;
}}
declare module "java.util.Spliterator$OfPrimitive" {
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $Spliterator$OfPrimitive<T, T_CONS, T_SPLITR extends $Spliterator$OfPrimitive<(T), (T_CONS), (T_SPLITR)>> extends $Spliterator<(T)> {

 "tryAdvance"(arg0: T_CONS): boolean
 "trySplit"(): $Spliterator<(any)>
 "forEachRemaining"(arg0: T_CONS): void
 "tryAdvance"(arg0: $Consumer$$Type<(T)>): boolean
 "estimateSize"(): long
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
 "getComparator"(): $Comparator<(T)>
 "forEachRemaining"(arg0: $Consumer$$Type<(T)>): void
 "characteristics"(): integer
get "exactSizeIfKnown"(): long
get "comparator"(): $Comparator<(T)>
}

export namespace $Spliterator$OfPrimitive {
const probejs$$marker: never
}
export class $Spliterator$OfPrimitive$$Static<T, T_CONS, T_SPLITR extends $Spliterator$OfPrimitive<(T), (T_CONS), (T_SPLITR)>> implements $Spliterator$OfPrimitive {


 "tryAdvance"(arg0: T_CONS): boolean
 "trySplit"(): $Spliterator<(any)>
 "forEachRemaining"(arg0: T_CONS): void
 "tryAdvance"(arg0: $Consumer$$Type<(T)>): boolean
 "estimateSize"(): long
 "getExactSizeIfKnown"(): long
 "hasCharacteristics"(arg0: integer): boolean
 "getComparator"(): $Comparator<(T)>
 "forEachRemaining"(arg0: $Consumer$$Type<(T)>): void
 "characteristics"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Spliterator$OfPrimitive$$Type<T, T_CONS, T_SPLITR> = ($Spliterator$OfPrimitive<(T), (T_CONS), (T_SPLITR)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Spliterator$OfPrimitive_<T, T_CONS, T_SPLITR> = $Spliterator$OfPrimitive$$Type<(T), (T_CONS), (T_SPLITR)>;
}}
declare module "java.util.concurrent.ConcurrentHashMap" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ToDoubleFunction, $ToDoubleFunction$$Type} from "java.util.function.ToDoubleFunction"
import {$ToDoubleBiFunction, $ToDoubleBiFunction$$Type} from "java.util.function.ToDoubleBiFunction"
import {$ToLongBiFunction, $ToLongBiFunction$$Type} from "java.util.function.ToLongBiFunction"
import {$ToIntBiFunction, $ToIntBiFunction$$Type} from "java.util.function.ToIntBiFunction"
import {$IntBinaryOperator, $IntBinaryOperator$$Type} from "java.util.function.IntBinaryOperator"
import {$DoubleBinaryOperator, $DoubleBinaryOperator$$Type} from "java.util.function.DoubleBinaryOperator"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$ToIntFunction, $ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$ConcurrentHashMap$KeySetView, $ConcurrentHashMap$KeySetView$$Type} from "java.util.concurrent.ConcurrentHashMap$KeySetView"
import {$ToLongFunction, $ToLongFunction$$Type} from "java.util.function.ToLongFunction"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ConcurrentMap, $ConcurrentMap$$Type} from "java.util.concurrent.ConcurrentMap"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$LongBinaryOperator, $LongBinaryOperator$$Type} from "java.util.function.LongBinaryOperator"
import {$AbstractMap, $AbstractMap$$Type} from "java.util.AbstractMap"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Enumeration, $Enumeration$$Type} from "java.util.Enumeration"

export class $ConcurrentHashMap<K, V> extends $AbstractMap<(K), (V)> implements $ConcurrentMap<(K), (V)>, $Serializable {

constructor(arg0: integer, arg1: float, arg2: integer)
constructor(arg0: integer)
constructor(arg0: integer, arg1: float)
constructor()
constructor(arg0: $Map$$Type<(K), (V)>)

public "mappingCount"(): long
public static "newKeySet"<K>(arg0: integer): $ConcurrentHashMap$KeySetView<(K), (boolean)>
public static "newKeySet"<K>(): $ConcurrentHashMap$KeySetView<(K), (boolean)>
public "search"<U>(arg0: long, arg1: $BiFunction$$Type<(K), (V), (U)>): U
public "reduce"<U>(arg0: long, arg1: $BiFunction$$Type<(K), (V), (U)>, arg2: $BiFunction$$Type<(U), (U), (U)>): U
public "reduceToDouble"(arg0: long, arg1: $ToDoubleBiFunction$$Type<(K), (V)>, arg2: double, arg3: $DoubleBinaryOperator$$Type): double
public "reduceToLong"(arg0: long, arg1: $ToLongBiFunction$$Type<(K), (V)>, arg2: long, arg3: $LongBinaryOperator$$Type): long
public "reduceToInt"(arg0: long, arg1: $ToIntBiFunction$$Type<(K), (V)>, arg2: integer, arg3: $IntBinaryOperator$$Type): integer
public "forEachKey"<U>(arg0: long, arg1: $Function$$Type<(K), (U)>, arg2: $Consumer$$Type<(U)>): void
public "forEachKey"(arg0: long, arg1: $Consumer$$Type<(K)>): void
public "searchKeys"<U>(arg0: long, arg1: $Function$$Type<(K), (U)>): U
public "reduceKeys"(arg0: long, arg1: $BiFunction$$Type<(K), (K), (K)>): K
public "reduceKeys"<U>(arg0: long, arg1: $Function$$Type<(K), (U)>, arg2: $BiFunction$$Type<(U), (U), (U)>): U
public "reduceKeysToDouble"(arg0: long, arg1: $ToDoubleFunction$$Type<(K)>, arg2: double, arg3: $DoubleBinaryOperator$$Type): double
public "reduceKeysToLong"(arg0: long, arg1: $ToLongFunction$$Type<(K)>, arg2: long, arg3: $LongBinaryOperator$$Type): long
public "reduceKeysToInt"(arg0: long, arg1: $ToIntFunction$$Type<(K)>, arg2: integer, arg3: $IntBinaryOperator$$Type): integer
public "forEachValue"<U>(arg0: long, arg1: $Function$$Type<(V), (U)>, arg2: $Consumer$$Type<(U)>): void
public "forEachValue"(arg0: long, arg1: $Consumer$$Type<(V)>): void
public "searchValues"<U>(arg0: long, arg1: $Function$$Type<(V), (U)>): U
public "reduceValues"<U>(arg0: long, arg1: $Function$$Type<(V), (U)>, arg2: $BiFunction$$Type<(U), (U), (U)>): U
public "reduceValues"(arg0: long, arg1: $BiFunction$$Type<(V), (V), (V)>): V
public "reduceValuesToDouble"(arg0: long, arg1: $ToDoubleFunction$$Type<(V)>, arg2: double, arg3: $DoubleBinaryOperator$$Type): double
public "reduceValuesToLong"(arg0: long, arg1: $ToLongFunction$$Type<(V)>, arg2: long, arg3: $LongBinaryOperator$$Type): long
public "reduceValuesToInt"(arg0: long, arg1: $ToIntFunction$$Type<(V)>, arg2: integer, arg3: $IntBinaryOperator$$Type): integer
public "forEachEntry"(arg0: long, arg1: $Consumer$$Type<($Map$Entry<(K), (V)>)>): void
public "forEachEntry"<U>(arg0: long, arg1: $Function$$Type<($Map$Entry<(K), (V)>), (U)>, arg2: $Consumer$$Type<(U)>): void
public "searchEntries"<U>(arg0: long, arg1: $Function$$Type<($Map$Entry<(K), (V)>), (U)>): U
public "reduceEntries"(arg0: long, arg1: $BiFunction$$Type<($Map$Entry<(K), (V)>), ($Map$Entry<(K), (V)>), ($Map$Entry$$Type<(K), (V)>)>): $Map$Entry<(K), (V)>
public "reduceEntries"<U>(arg0: long, arg1: $Function$$Type<($Map$Entry<(K), (V)>), (U)>, arg2: $BiFunction$$Type<(U), (U), (U)>): U
public "reduceEntriesToDouble"(arg0: long, arg1: $ToDoubleFunction$$Type<($Map$Entry<(K), (V)>)>, arg2: double, arg3: $DoubleBinaryOperator$$Type): double
public "reduceEntriesToLong"(arg0: long, arg1: $ToLongFunction$$Type<($Map$Entry<(K), (V)>)>, arg2: long, arg3: $LongBinaryOperator$$Type): long
public "reduceEntriesToInt"(arg0: long, arg1: $ToIntFunction$$Type<($Map$Entry<(K), (V)>)>, arg2: integer, arg3: $IntBinaryOperator$$Type): integer
public "remove"(arg0: any): V
public "remove"(arg0: any, arg1: any): boolean
public "size"(): integer
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "replace"(arg0: K, arg1: V): V
public "replace"(arg0: K, arg1: V, arg2: V): boolean
public "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
public "contains"(arg0: any): boolean
public "elements"(): $Enumeration<(V)>
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public "putAll"(arg0: $Map$$Type<(K), (V)>): void
public "putIfAbsent"(arg0: K, arg1: V): V
public "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public "forEach"<U>(arg0: long, arg1: $BiFunction$$Type<(K), (V), (U)>, arg2: $Consumer$$Type<(U)>): void
public "forEach"(arg0: long, arg1: $BiConsumer$$Type<(K), (V)>): void
public "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
public "containsKey"(arg0: any): boolean
public "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
public "keys"(): $Enumeration<(K)>
public "keySet"(): $Set<(any)>
public "keySet"(arg0: V): $ConcurrentHashMap$KeySetView<(K), (V)>
public "containsValue"(arg0: any): boolean
public "getOrDefault"(arg0: any, arg1: V): V
public "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConcurrentHashMap$$Type<K, V> = ($ConcurrentHashMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConcurrentHashMap_<K, V> = $ConcurrentHashMap$$Type<(K), (V)>;
}}
declare module "java.util.AbstractSequentialList" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ListIterator, $ListIterator$$Type} from "java.util.ListIterator"
import {$List, $List$$Type} from "java.util.List"
import {$AbstractList, $AbstractList$$Type} from "java.util.AbstractList"

export class $AbstractSequentialList<E> extends $AbstractList<(E)> {


public "listIterator"(arg0: integer): $ListIterator<(E)>
public "remove"(arg0: integer): E
public "get"(arg0: integer): E
public "add"(arg0: integer, arg1: E): void
public "iterator"(): $Iterator<(E)>
public "addAll"(arg0: integer, arg1: $Collection$$Type<(E)>): boolean
public "set"(arg0: integer, arg1: E): E
public "removeAll"(arg0: $Collection$$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$$Type<(any)>): boolean
public "remove"(arg0: any): boolean
public "size"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
public "isEmpty"(): boolean
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSequentialList$$Type<E> = ($AbstractSequentialList<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSequentialList_<E> = $AbstractSequentialList$$Type<(E)>;
}}
declare module "java.util.ArrayList" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$RandomAccess, $RandomAccess$$Type} from "java.util.RandomAccess"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$AbstractList, $AbstractList$$Type} from "java.util.AbstractList"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ListIterator, $ListIterator$$Type} from "java.util.ListIterator"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"

export class $ArrayList<E> extends $AbstractList<(E)> implements $List<(E)>, $RandomAccess, $Cloneable, $Serializable {

constructor(arg0: integer)
constructor(arg0: $Collection$$Type<(E)>)
constructor()

public "ensureCapacity"(arg0: integer): void
public "trimToSize"(): void
public "removeAll"(arg0: $Collection$$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$$Type<(any)>): boolean
public "listIterator"(arg0: integer): $ListIterator<(E)>
public "listIterator"(): $ListIterator<(E)>
public "removeIf"(arg0: $Predicate$$Type<(E)>): boolean
public "getFirst"(): E
public "getLast"(): E
public "addFirst"(arg0: E): void
public "addLast"(arg0: E): void
public "removeFirst"(): E
public "removeLast"(): E
public "remove"(arg0: any): boolean
public "remove"(arg0: integer): E
public "size"(): integer
public "get"(arg0: integer): E
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "indexOf"(arg0: any): integer
public "clear"(): void
public "lastIndexOf"(arg0: any): integer
public "isEmpty"(): boolean
public "replaceAll"(arg0: $UnaryOperator$$Type<(E)>): void
public "add"(arg0: integer, arg1: E): void
public "add"(arg0: E): boolean
public "subList"(arg0: integer, arg1: integer): $List<(E)>
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public "iterator"(): $Iterator<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "addAll"(arg0: integer, arg1: $Collection$$Type<(E)>): boolean
public "set"(arg0: integer, arg1: E): E
public "forEach"(arg0: $Consumer$$Type<(E)>): void
public "sort"(arg0: $Comparator$$Type<(E)>): void
public "containsAll"(arg0: $Collection$$Type<(any)>): boolean
public static "copyOf"<E>(arg0: $Collection$$Type<(E)>): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
get "first"(): E
get "last"(): E
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArrayList$$Type<E> = ($ArrayList<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArrayList_<E> = $ArrayList$$Type<(E)>;
}}
declare module "java.util.concurrent.ConcurrentHashMap$KeySetView" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$ConcurrentHashMap, $ConcurrentHashMap$$Type} from "java.util.concurrent.ConcurrentHashMap"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ConcurrentHashMap$CollectionView, $ConcurrentHashMap$CollectionView$$Type} from "java.util.concurrent.ConcurrentHashMap$CollectionView"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $ConcurrentHashMap$KeySetView<K, V> extends $ConcurrentHashMap$CollectionView<(K), (V), (K)> implements $Set<(K)>, $Serializable {


public "getMap"(): $ConcurrentHashMap<(any), (any)>
public "getMappedValue"(): V
public "removeAll"(arg0: $Collection$$Type<(any)>): boolean
public "remove"(arg0: any): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "add"(arg0: K): boolean
public "iterator"(): $Iterator<(K)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(K)>
public "addAll"(arg0: $Collection$$Type<(K)>): boolean
public "forEach"(arg0: $Consumer$$Type<(K)>): void
public "retainAll"(arg0: $Collection$$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$$Type<(any)>): boolean
public "size"(): integer
public static "copyOf"<E>(arg0: $Collection$$Type<(K)>): $Set<(K)>
public "clear"(): void
public "isEmpty"(): boolean
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K): $Set<(K)>
public static "of"<E>(...arg0: (K)[]): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K, arg8: K, arg9: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K, arg4: K, arg5: K, arg6: K, arg7: K, arg8: K): $Set<(K)>
public static "of"<E>(): $Set<(K)>
public static "of"<E>(arg0: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K): $Set<(K)>
public static "of"<E>(arg0: K, arg1: K, arg2: K, arg3: K): $Set<(K)>
get "map"(): $ConcurrentHashMap<(any), (any)>
get "mappedValue"(): V
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConcurrentHashMap$KeySetView$$Type<K, V> = ($ConcurrentHashMap$KeySetView<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConcurrentHashMap$KeySetView_<K, V> = $ConcurrentHashMap$KeySetView$$Type<(K), (V)>;
}}
declare module "java.util.stream.DoubleStream$DoubleMapMultiConsumer" {
import {$DoubleConsumer, $DoubleConsumer$$Type} from "java.util.function.DoubleConsumer"

export interface $DoubleStream$DoubleMapMultiConsumer {

 "accept"(arg0: double, arg1: $DoubleConsumer$$Type): void

(arg0: double, arg1: $DoubleConsumer): void
}

export namespace $DoubleStream$DoubleMapMultiConsumer {
const probejs$$marker: never
}
export class $DoubleStream$DoubleMapMultiConsumer$$Static implements $DoubleStream$DoubleMapMultiConsumer {


 "accept"(arg0: double, arg1: $DoubleConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleStream$DoubleMapMultiConsumer$$Type = ((arg0: double, arg1: $DoubleConsumer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleStream$DoubleMapMultiConsumer_ = $DoubleStream$DoubleMapMultiConsumer$$Type;
}}
declare module "java.util.function.ToIntBiFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToIntBiFunction<T, U> {

 "applyAsInt"(arg0: T, arg1: U): integer

(arg0: T, arg1: U): integer
}

export namespace $ToIntBiFunction {
const probejs$$marker: never
}
export class $ToIntBiFunction$$Static<T, U> implements $ToIntBiFunction {


 "applyAsInt"(arg0: T, arg1: U): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToIntBiFunction$$Type<T, U> = ((arg0: T, arg1: U) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToIntBiFunction_<T, U> = $ToIntBiFunction$$Type<(T), (U)>;
}}
declare module "java.util.function.DoubleFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DoubleFunction<R> {

 "apply"(arg0: double): R

(arg0: double): R
}

export namespace $DoubleFunction {
const probejs$$marker: never
}
export class $DoubleFunction$$Static<R> implements $DoubleFunction {


 "apply"(arg0: double): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleFunction$$Type<R> = ((arg0: double) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleFunction_<R> = $DoubleFunction$$Type<(R)>;
}}
declare module "java.util.DoubleSummaryStatistics" {
import {$DoubleConsumer, $DoubleConsumer$$Type} from "java.util.function.DoubleConsumer"

export class $DoubleSummaryStatistics implements $DoubleConsumer {

constructor()
constructor(arg0: long, arg1: double, arg2: double, arg3: double)

public "toString"(): StringJS
public "accept"(arg0: double): void
public "combine"(arg0: $DoubleSummaryStatistics$$Type): void
public "getCount"(): long
public "getMax"(): double
public "getMin"(): double
public "getSum"(): double
public "getAverage"(): double
public "andThen"(arg0: $DoubleConsumer$$Type): $DoubleConsumer
get "count"(): long
get "max"(): double
get "min"(): double
get "sum"(): double
get "average"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleSummaryStatistics$$Type = ($DoubleSummaryStatistics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleSummaryStatistics_ = $DoubleSummaryStatistics$$Type;
}}
declare module "java.util.LinkedHashMap" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$SequencedSet, $SequencedSet$$Type} from "java.util.SequencedSet"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$SequencedMap, $SequencedMap$$Type} from "java.util.SequencedMap"
import {$SequencedCollection, $SequencedCollection$$Type} from "java.util.SequencedCollection"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$HashMap, $HashMap$$Type} from "java.util.HashMap"

export class $LinkedHashMap<K, V> extends $HashMap<(K), (V)> implements $SequencedMap<(K), (V)> {

constructor(arg0: integer)
constructor(arg0: integer, arg1: float)
constructor(arg0: integer, arg1: float, arg2: boolean)
constructor()
constructor(arg0: $Map$$Type<(K), (V)>)

public "reversed"(): $SequencedMap<(K), (V)>
public "sequencedKeySet"(): $SequencedSet<(K)>
public "sequencedValues"(): $SequencedCollection<(V)>
public "sequencedEntrySet"(): $SequencedSet<($Map$Entry<(K), (V)>)>
public "putFirst"(arg0: K, arg1: V): V
public "putLast"(arg0: K, arg1: V): V
public "get"(arg0: any): V
public "values"(): $Collection<(V)>
public "clear"(): void
public "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public static "newLinkedHashMap"<K, V>(arg0: integer): $LinkedHashMap<(K), (V)>
public "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
public "keySet"(): $Set<(K)>
public "containsValue"(arg0: any): boolean
public "getOrDefault"(arg0: any, arg1: V): V
public "firstEntry"(): $Map$Entry<(K), (V)>
public "lastEntry"(): $Map$Entry<(K), (V)>
public "pollFirstEntry"(): $Map$Entry<(K), (V)>
public "pollLastEntry"(): $Map$Entry<(K), (V)>
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkedHashMap$$Type<K, V> = ($LinkedHashMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkedHashMap_<K, V> = $LinkedHashMap$$Type<(K), (V)>;
}}
declare module "java.util.EnumMap" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Serializable, $Serializable$$Type} from "java.io.Serializable"
import {$Cloneable, $Cloneable$$Type} from "java.lang.Cloneable"
import {$AbstractMap, $AbstractMap$$Type} from "java.util.AbstractMap"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $EnumMap<K extends $Enum<(K)>, V> extends $AbstractMap<(K), (V)> implements $Serializable, $Cloneable {

constructor(arg0: $Map$$Type<(K), (V)>)
constructor(arg0: $EnumMap$$Type<(K), (V)>)
constructor(arg0: $Class$$Type<(K)>)

public "remove"(arg0: any): V
public "size"(): integer
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "put"(arg0: any, arg1: any): any
public "equals"(arg0: any): boolean
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "clone"(): $EnumMap<(K), (V)>
public "clear"(): void
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public "putAll"(arg0: $Map$$Type<(K), (V)>): void
public "containsKey"(arg0: any): boolean
public "keySet"(): $Set<(K)>
public "containsValue"(arg0: any): boolean
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumMap$$Type<K, V> = ($EnumMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumMap_<K, V> = $EnumMap$$Type<(K), (V)>;
}}
declare module "java.util.concurrent.ThreadFactory" {
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export interface $ThreadFactory {

 "newThread"(arg0: $Runnable$$Type): $Thread

(arg0: $Runnable): $Thread$$Type
}

export namespace $ThreadFactory {
const probejs$$marker: never
}
export class $ThreadFactory$$Static implements $ThreadFactory {


 "newThread"(arg0: $Runnable$$Type): $Thread
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThreadFactory$$Type = ((arg0: $Runnable) => $Thread$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThreadFactory_ = $ThreadFactory$$Type;
}}
declare module "java.util.AbstractMap" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export class $AbstractMap<K, V> implements $Map<(K), (V)> {


public "remove"(arg0: any): V
public "size"(): integer
public "get"(arg0: any): V
public "put"(arg0: K, arg1: V): V
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
public "putAll"(arg0: $Map$$Type<(K), (V)>): void
public "containsKey"(arg0: any): boolean
public "keySet"(): $Set<(K)>
public "containsValue"(arg0: any): boolean
public "remove"(arg0: any, arg1: any): boolean
public static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
public "replace"(arg0: K, arg1: V, arg2: V): boolean
public "replace"(arg0: K, arg1: V): V
public "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
public "putIfAbsent"(arg0: K, arg1: V): V
public "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
public "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
public "getOrDefault"(arg0: any, arg1: V): V
public "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
[index: string | number]: V
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractMap$$Type<K, V> = ($AbstractMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractMap_<K, V> = $AbstractMap$$Type<(K), (V)>;
}}
declare module "java.util.function.IntPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntPredicate {

 "or"(arg0: $IntPredicate$$Type): $IntPredicate
 "negate"(): $IntPredicate
 "and"(arg0: $IntPredicate$$Type): $IntPredicate
 "test"(arg0: integer): boolean

(arg0: integer): boolean
}

export namespace $IntPredicate {
const probejs$$marker: never
}
export class $IntPredicate$$Static implements $IntPredicate {


 "or"(arg0: $IntPredicate$$Type): $IntPredicate
 "negate"(): $IntPredicate
 "and"(arg0: $IntPredicate$$Type): $IntPredicate
 "test"(arg0: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntPredicate$$Type = ((arg0: integer) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntPredicate_ = $IntPredicate$$Type;
}}
declare module "java.util.function.ToLongFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ToLongFunction<T> {

 "applyAsLong"(arg0: T): long

(arg0: T): long
}

export namespace $ToLongFunction {
const probejs$$marker: never
}
export class $ToLongFunction$$Static<T> implements $ToLongFunction {


 "applyAsLong"(arg0: T): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToLongFunction$$Type<T> = ((arg0: T) => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToLongFunction_<T> = $ToLongFunction$$Type<(T)>;
}}
declare module "java.util.stream.Collector" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Collector$Characteristics, $Collector$Characteristics$$Type} from "java.util.stream.Collector$Characteristics"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$BinaryOperator, $BinaryOperator$$Type} from "java.util.function.BinaryOperator"

export interface $Collector<T, A, R> {

 "accumulator"(): $BiConsumer<(A), (T)>
 "finisher"(): $Function<(A), (R)>
 "supplier"(): $Supplier<(A)>
 "characteristics"(): $Set<($Collector$Characteristics)>
 "combiner"(): $BinaryOperator<(A)>
}

export namespace $Collector {
function of<T, A, R>(arg0: $Supplier$$Type<(A)>, arg1: $BiConsumer$$Type<(A), (T)>, arg2: $BinaryOperator$$Type<(A)>, arg3: $Function$$Type<(A), (R)>, ...arg4: ($Collector$Characteristics$$Type)[]): $Collector<(T), (A), (R)>
function of<T, R>(arg0: $Supplier$$Type<(R)>, arg1: $BiConsumer$$Type<(R), (T)>, arg2: $BinaryOperator$$Type<(R)>, ...arg3: ($Collector$Characteristics$$Type)[]): $Collector<(T), (R), (R)>
const probejs$$marker: never
}
export class $Collector$$Static<T, A, R> implements $Collector {


 "accumulator"(): $BiConsumer<(A), (T)>
 "finisher"(): $Function<(A), (R)>
 "supplier"(): $Supplier<(A)>
static "of"<T, A, R>(arg0: $Supplier$$Type<(A)>, arg1: $BiConsumer$$Type<(A), (T)>, arg2: $BinaryOperator$$Type<(A)>, arg3: $Function$$Type<(A), (R)>, ...arg4: ($Collector$Characteristics$$Type)[]): $Collector<(T), (A), (R)>
static "of"<T, R>(arg0: $Supplier$$Type<(R)>, arg1: $BiConsumer$$Type<(R), (T)>, arg2: $BinaryOperator$$Type<(R)>, ...arg3: ($Collector$Characteristics$$Type)[]): $Collector<(T), (R), (R)>
 "characteristics"(): $Set<($Collector$Characteristics)>
 "combiner"(): $BinaryOperator<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Collector$$Type<T, A, R> = ($Collector<(T), (A), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Collector_<T, A, R> = $Collector$$Type<(T), (A), (R)>;
}}
