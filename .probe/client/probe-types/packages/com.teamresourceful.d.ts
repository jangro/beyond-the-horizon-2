declare module "com.teamresourceful.bytecodecs.base.ByteCodec" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$PairCodec, $PairCodec$$Type} from "com.teamresourceful.bytecodecs.defaults.PairCodec"
import {$ObjectEntryByteCodec, $ObjectEntryByteCodec$$Type} from "com.teamresourceful.bytecodecs.base.ObjectEntryByteCodec"
import {$Either, $Either$$Type} from "com.teamresourceful.bytecodecs.utils.Either"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$MapCodec, $MapCodec$$Type} from "com.teamresourceful.bytecodecs.defaults.MapCodec"

export interface $ByteCodec<T> {

 "optionalOf"(arg0: T): $ByteCodec<($Optional<(T)>)>
 "optionalOf"(): $ByteCodec<($Optional<(T)>)>
 "optionalOf"(arg0: $Supplier$$Type<(T)>): $ByteCodec<($Optional<(T)>)>
 "dispatch"<O>(arg0: $Function$$Type<(T), ($ByteCodec$$Type<(O)>)>, arg1: $Function$$Type<(O), (T)>): $ByteCodec<(O)>
 "decode"(arg0: $ByteBuf$$Type): T
 "encode"(arg0: T, arg1: $ByteBuf$$Type): void
 "map"<R>(arg0: $Function$$Type<(T), (R)>, arg1: $Function$$Type<(R), (T)>): $ByteCodec<(R)>
 "setOf"(): $ByteCodec<($Set<(T)>)>
 "listOf"(): $ByteCodec<($List<(T)>)>
 "fieldOf"<O>(arg0: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
 "collectionOf"<C extends $Collection<(T)>>(arg0: $Function$$Type<(integer), (C)>): $ByteCodec<(C)>
 "mapDispatch"<O>(arg0: $Function$$Type<(T), ($ByteCodec$$Type<(O)>)>): $ByteCodec<($Map<(T), (O)>)>
 "nullableOf"(): $ByteCodec<(T)>
 "linkedSetOf"(): $ByteCodec<($Set<(T)>)>
 "nullableFieldOf"<O>(arg0: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
 "nullableFieldOf"<O>(arg0: $Supplier$$Type<(T)>, arg1: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
 "nullableFieldOf"<O>(arg0: T, arg1: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
 "optionalFieldOf"<O>(arg0: T, arg1: $Function$$Type<(O), ($Optional$$Type<(T)>)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>
 "optionalFieldOf"<O>(arg0: $Supplier$$Type<(T)>, arg1: $Function$$Type<(O), ($Optional$$Type<(T)>)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>
 "optionalFieldOf"<O>(arg0: $Function$$Type<(O), ($Optional$$Type<(T)>)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>
}

export namespace $ByteCodec {
const FLOAT: $ByteCodec<(float)>
const VAR_INT: $ByteCodec<(integer)>
const STRING_COMPONENT: $ByteCodec<(StringJS)>
const CHAR: $ByteCodec<(character)>
const BOOLEAN: $ByteCodec<(boolean)>
const INT: $ByteCodec<(integer)>
const SHORT: $ByteCodec<(short)>
const VAR_LONG: $ByteCodec<(long)>
const BYTE: $ByteCodec<(byte)>
const STRING: $ByteCodec<(StringJS)>
const DOUBLE: $ByteCodec<(double)>
const UUID: $ByteCodec<($UUID)>
const LONG: $ByteCodec<(long)>
function unit<T>(arg0: $Supplier$$Type<(T)>): $ByteCodec<(T)>
function unit<T>(arg0: T): $ByteCodec<(T)>
function choice<T>(arg0: $ByteCodec$$Type<(T)>, arg1: $ByteCodec$$Type<(T)>, arg2: $Function$$Type<(T), ($Either$$Type<(T), (T)>)>): $ByteCodec<(T)>
function ofEnum<T extends $Enum<(T)>>(arg0: $Class$$Type<(T)>): $ByteCodec<(T)>
function mapOf<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $MapCodec<(K), (V)>
function either<F, S>(arg0: $ByteCodec$$Type<(F)>, arg1: $ByteCodec$$Type<(S)>): $ByteCodec<($Either<(F), (S)>)>
function passthrough<T>(arg0: $BiConsumer$$Type<($ByteBuf), (T)>, arg1: $Function$$Type<($ByteBuf), (T)>): $ByteCodec<(T)>
function pairOf<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $PairCodec<(K), (V)>
const probejs$$marker: never
}
export class $ByteCodec$$Static<T> implements $ByteCodec {
static readonly "FLOAT": $ByteCodec<(float)>
static readonly "VAR_INT": $ByteCodec<(integer)>
static readonly "STRING_COMPONENT": $ByteCodec<(StringJS)>
static readonly "CHAR": $ByteCodec<(character)>
static readonly "BOOLEAN": $ByteCodec<(boolean)>
static readonly "INT": $ByteCodec<(integer)>
static readonly "SHORT": $ByteCodec<(short)>
static readonly "VAR_LONG": $ByteCodec<(long)>
static readonly "BYTE": $ByteCodec<(byte)>
static readonly "STRING": $ByteCodec<(StringJS)>
static readonly "DOUBLE": $ByteCodec<(double)>
static readonly "UUID": $ByteCodec<($UUID)>
static readonly "LONG": $ByteCodec<(long)>


static "unit"<T>(arg0: $Supplier$$Type<(T)>): $ByteCodec<(T)>
static "unit"<T>(arg0: T): $ByteCodec<(T)>
 "optionalOf"(arg0: T): $ByteCodec<($Optional<(T)>)>
 "optionalOf"(): $ByteCodec<($Optional<(T)>)>
 "optionalOf"(arg0: $Supplier$$Type<(T)>): $ByteCodec<($Optional<(T)>)>
static "choice"<T>(arg0: $ByteCodec$$Type<(T)>, arg1: $ByteCodec$$Type<(T)>, arg2: $Function$$Type<(T), ($Either$$Type<(T), (T)>)>): $ByteCodec<(T)>
 "dispatch"<O>(arg0: $Function$$Type<(T), ($ByteCodec$$Type<(O)>)>, arg1: $Function$$Type<(O), (T)>): $ByteCodec<(O)>
 "decode"(arg0: $ByteBuf$$Type): T
 "encode"(arg0: T, arg1: $ByteBuf$$Type): void
 "map"<R>(arg0: $Function$$Type<(T), (R)>, arg1: $Function$$Type<(R), (T)>): $ByteCodec<(R)>
static "ofEnum"<T extends $Enum<(T)>>(arg0: $Class$$Type<(T)>): $ByteCodec<(T)>
 "setOf"(): $ByteCodec<($Set<(T)>)>
static "mapOf"<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $MapCodec<(K), (V)>
static "either"<F, S>(arg0: $ByteCodec$$Type<(F)>, arg1: $ByteCodec$$Type<(S)>): $ByteCodec<($Either<(F), (S)>)>
 "listOf"(): $ByteCodec<($List<(T)>)>
static "passthrough"<T>(arg0: $BiConsumer$$Type<($ByteBuf), (T)>, arg1: $Function$$Type<($ByteBuf), (T)>): $ByteCodec<(T)>
 "fieldOf"<O>(arg0: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
static "pairOf"<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $PairCodec<(K), (V)>
 "collectionOf"<C extends $Collection<(T)>>(arg0: $Function$$Type<(integer), (C)>): $ByteCodec<(C)>
 "mapDispatch"<O>(arg0: $Function$$Type<(T), ($ByteCodec$$Type<(O)>)>): $ByteCodec<($Map<(T), (O)>)>
 "nullableOf"(): $ByteCodec<(T)>
 "linkedSetOf"(): $ByteCodec<($Set<(T)>)>
 "nullableFieldOf"<O>(arg0: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
 "nullableFieldOf"<O>(arg0: $Supplier$$Type<(T)>, arg1: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
 "nullableFieldOf"<O>(arg0: T, arg1: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
 "optionalFieldOf"<O>(arg0: T, arg1: $Function$$Type<(O), ($Optional$$Type<(T)>)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>
 "optionalFieldOf"<O>(arg0: $Supplier$$Type<(T)>, arg1: $Function$$Type<(O), ($Optional$$Type<(T)>)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>
 "optionalFieldOf"<O>(arg0: $Function$$Type<(O), ($Optional$$Type<(T)>)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ByteCodec$$Type<T> = ($ByteCodec<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ByteCodec_<T> = $ByteCodec$$Type<(T)>;
}}
declare module "com.teamresourceful.resourcefullib.common.fluid.ResourcefulFlowingFluid" {
import {$ReplacementMatch, $ReplacementMatch$$Type} from "dev.latvian.mods.kubejs.recipe.match.ReplacementMatch"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$FluidData, $FluidData$$Type} from "com.teamresourceful.resourcefullib.common.fluid.data.FluidData"

export class $ResourcefulFlowingFluid extends $FlowingFluid {
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty

constructor(data: $FluidData$$Type)

public "getData"(): $FluidData
public "getSource"(): $Fluid
public "isSame"(fluid: $Fluid$$Type): boolean
public "getTickDelay"(levelReader: $LevelReader$$Type): integer
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getFlowing"(): $Fluid
public "getFluidType"(): $FluidType
public "getBucket"(): $Item
public static "wrap"(arg1: any): $ReplacementMatch
get "data"(): $FluidData
get "source"(): $Fluid
get "pickupSound"(): $Optional<($SoundEvent)>
get "flowing"(): $Fluid
get "fluidType"(): $FluidType
get "bucket"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourcefulFlowingFluid$$Type = ($ResourcefulFlowingFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourcefulFlowingFluid_ = $ResourcefulFlowingFluid$$Type;
}}
declare module "com.teamresourceful.resourcefulconfig.mixins.common.PlayerListAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerListAccessor {

 "setMaxPlayers"(arg0: integer): void

(arg0: integer): void
set "maxPlayers"(value: integer)
}

export namespace $PlayerListAccessor {
const probejs$$marker: never
}
export class $PlayerListAccessor$$Static implements $PlayerListAccessor {


 "setMaxPlayers"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerListAccessor$$Type = ((arg0: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerListAccessor_ = $PlayerListAccessor$$Type;
}}
declare module "com.teamresourceful.bytecodecs.defaults.PairCodec" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$ObjectEntryByteCodec, $ObjectEntryByteCodec$$Type} from "com.teamresourceful.bytecodecs.base.ObjectEntryByteCodec"
import {$Either, $Either$$Type} from "com.teamresourceful.bytecodecs.utils.Either"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ByteCodec, $ByteCodec$$Type} from "com.teamresourceful.bytecodecs.base.ByteCodec"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$MapCodec, $MapCodec$$Type} from "com.teamresourceful.bytecodecs.defaults.MapCodec"

export class $PairCodec<K, V> extends $Record implements $ByteCodec<($Map$Entry<(K), (V)>)> {

constructor(first: $ByteCodec$$Type<(K)>, second: $ByteCodec$$Type<(V)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "decode"(arg0: $ByteBuf$$Type): any
public "encode"(arg0: any, arg1: $ByteBuf$$Type): void
public "encode"(arg0: $Map$Entry$$Type<(K), (V)>, arg1: $ByteBuf$$Type): void
public "first"(): $ByteCodec<(K)>
public "second"(): $ByteCodec<(V)>
public static "unit"<T>(arg0: $Supplier$$Type<($Map$Entry$$Type<(K), (V)>)>): $ByteCodec<($Map$Entry<(K), (V)>)>
public static "unit"<T>(arg0: $Map$Entry$$Type<(K), (V)>): $ByteCodec<($Map$Entry<(K), (V)>)>
public "optionalOf"(arg0: $Map$Entry$$Type<(K), (V)>): $ByteCodec<($Optional<($Map$Entry<(K), (V)>)>)>
public "optionalOf"(): $ByteCodec<($Optional<($Map$Entry<(K), (V)>)>)>
public "optionalOf"(arg0: $Supplier$$Type<($Map$Entry$$Type<(K), (V)>)>): $ByteCodec<($Optional<($Map$Entry<(K), (V)>)>)>
public static "choice"<T>(arg0: $ByteCodec$$Type<($Map$Entry$$Type<(K), (V)>)>, arg1: $ByteCodec$$Type<($Map$Entry$$Type<(K), (V)>)>, arg2: $Function$$Type<($Map$Entry<(K), (V)>), ($Either$$Type<($Map$Entry$$Type<(K), (V)>), ($Map$Entry$$Type<(K), (V)>)>)>): $ByteCodec<($Map$Entry<(K), (V)>)>
public "dispatch"<O>(arg0: $Function$$Type<($Map$Entry<(K), (V)>), ($ByteCodec$$Type<(O)>)>, arg1: $Function$$Type<(O), ($Map$Entry$$Type<(K), (V)>)>): $ByteCodec<(O)>
public "map"<R>(arg0: $Function$$Type<($Map$Entry<(K), (V)>), (R)>, arg1: $Function$$Type<(R), ($Map$Entry$$Type<(K), (V)>)>): $ByteCodec<(R)>
public static "ofEnum"<T extends $Enum<(T)>>(arg0: $Class$$Type<($Map$Entry$$Type<(K), (V)>)>): $ByteCodec<($Map$Entry<(K), (V)>)>
public "setOf"(): $ByteCodec<($Set<($Map$Entry<(K), (V)>)>)>
public static "mapOf"<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $MapCodec<(K), (V)>
public static "either"<F, S>(arg0: $ByteCodec$$Type<(F)>, arg1: $ByteCodec$$Type<(S)>): $ByteCodec<($Either<(F), (S)>)>
public "listOf"(): $ByteCodec<($List<($Map$Entry<(K), (V)>)>)>
public static "passthrough"<T>(arg0: $BiConsumer$$Type<($ByteBuf), ($Map$Entry<(K), (V)>)>, arg1: $Function$$Type<($ByteBuf), ($Map$Entry$$Type<(K), (V)>)>): $ByteCodec<($Map$Entry<(K), (V)>)>
public "fieldOf"<O>(arg0: $Function$$Type<(O), ($Map$Entry$$Type<(K), (V)>)>): $ObjectEntryByteCodec<(O), ($Map$Entry<(K), (V)>)>
public static "pairOf"<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $PairCodec<(K), (V)>
public "collectionOf"<C extends $Collection<(T)>>(arg0: $Function$$Type<(integer), (C)>): $ByteCodec<(C)>
public "mapDispatch"<O>(arg0: $Function$$Type<($Map$Entry<(K), (V)>), ($ByteCodec$$Type<(O)>)>): $ByteCodec<($Map<($Map$Entry<(K), (V)>), (O)>)>
public "nullableOf"(): $ByteCodec<($Map$Entry<(K), (V)>)>
public "linkedSetOf"(): $ByteCodec<($Set<($Map$Entry<(K), (V)>)>)>
public "nullableFieldOf"<O>(arg0: $Function$$Type<(O), ($Map$Entry$$Type<(K), (V)>)>): $ObjectEntryByteCodec<(O), ($Map$Entry<(K), (V)>)>
public "nullableFieldOf"<O>(arg0: $Supplier$$Type<($Map$Entry$$Type<(K), (V)>)>, arg1: $Function$$Type<(O), ($Map$Entry$$Type<(K), (V)>)>): $ObjectEntryByteCodec<(O), ($Map$Entry<(K), (V)>)>
public "nullableFieldOf"<O>(arg0: $Map$Entry$$Type<(K), (V)>, arg1: $Function$$Type<(O), ($Map$Entry$$Type<(K), (V)>)>): $ObjectEntryByteCodec<(O), ($Map$Entry<(K), (V)>)>
public "optionalFieldOf"<O>(arg0: $Map$Entry$$Type<(K), (V)>, arg1: $Function$$Type<(O), ($Optional$$Type<($Map$Entry$$Type<(K), (V)>)>)>): $ObjectEntryByteCodec<(O), ($Optional<($Map$Entry<(K), (V)>)>)>
public "optionalFieldOf"<O>(arg0: $Supplier$$Type<($Map$Entry$$Type<(K), (V)>)>, arg1: $Function$$Type<(O), ($Optional$$Type<($Map$Entry$$Type<(K), (V)>)>)>): $ObjectEntryByteCodec<(O), ($Optional<($Map$Entry<(K), (V)>)>)>
public "optionalFieldOf"<O>(arg0: $Function$$Type<(O), ($Optional$$Type<($Map$Entry$$Type<(K), (V)>)>)>): $ObjectEntryByteCodec<(O), ($Optional<($Map$Entry<(K), (V)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PairCodec$$Type<K, V> = ({"second"?: $ByteCodec$$Type<(any)>, "first"?: $ByteCodec$$Type<(any)>}) | ([second?: $ByteCodec$$Type<(any)>, first?: $ByteCodec$$Type<(any)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PairCodec_<K, V> = $PairCodec$$Type<(K), (V)>;
}}
declare module "com.teamresourceful.bytecodecs.utils.Either" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $Either<L, R> {

 "left"(): $Optional<(L)>
 "right"(): $Optional<(R)>
 "map"<T>(arg0: $Function$$Type<(L), (T)>, arg1: $Function$$Type<(R), (T)>): T
 "ifLeft"(arg0: $Consumer$$Type<(L)>): $Either<(L), (R)>
 "isLeft"(): boolean
 "mapLeft"<T>(arg0: $Function$$Type<(L), (T)>): $Either<(T), (R)>
 "mapRight"<T>(arg0: $Function$$Type<(R), (T)>): $Either<(L), (T)>
 "ifRight"(arg0: $Consumer$$Type<(R)>): $Either<(L), (R)>
 "mapEither"<F, S>(arg0: $Function$$Type<(L), (F)>, arg1: $Function$$Type<(R), (S)>): $Either<(F), (S)>
 "leftOrThrow"(): L
 "rightOrThrow"(): R
 "isRight"(): boolean
 "leftOr"(arg0: L): L
 "ifRightOrElse"(arg0: $Consumer$$Type<(R)>, arg1: $Runnable$$Type): $Either<(L), (R)>
 "ifLeftOrElse"(arg0: $Consumer$$Type<(L)>, arg1: $Runnable$$Type): $Either<(L), (R)>
 "rightOr"(arg0: R): R

(arg0: $Function<(L), (T)>, arg1: $Function<(R), (T)>): T
}

export namespace $Either {
function value<T>(arg0: $Either$$Type<(T), (T)>): T
function ofLeft<L, R>(arg0: L): $Either<(L), (R)>
function ofRight<L, R>(arg0: R): $Either<(L), (R)>
const probejs$$marker: never
}
export class $Either$$Static<L, R> implements $Either {


 "left"(): $Optional<(L)>
 "right"(): $Optional<(R)>
static "value"<T>(arg0: $Either$$Type<(T), (T)>): T
 "map"<T>(arg0: $Function$$Type<(L), (T)>, arg1: $Function$$Type<(R), (T)>): T
 "ifLeft"(arg0: $Consumer$$Type<(L)>): $Either<(L), (R)>
 "isLeft"(): boolean
 "mapLeft"<T>(arg0: $Function$$Type<(L), (T)>): $Either<(T), (R)>
 "mapRight"<T>(arg0: $Function$$Type<(R), (T)>): $Either<(L), (T)>
 "ifRight"(arg0: $Consumer$$Type<(R)>): $Either<(L), (R)>
 "mapEither"<F, S>(arg0: $Function$$Type<(L), (F)>, arg1: $Function$$Type<(R), (S)>): $Either<(F), (S)>
static "ofLeft"<L, R>(arg0: L): $Either<(L), (R)>
 "leftOrThrow"(): L
static "ofRight"<L, R>(arg0: R): $Either<(L), (R)>
 "rightOrThrow"(): R
 "isRight"(): boolean
 "leftOr"(arg0: L): L
 "ifRightOrElse"(arg0: $Consumer$$Type<(R)>, arg1: $Runnable$$Type): $Either<(L), (R)>
 "ifLeftOrElse"(arg0: $Consumer$$Type<(L)>, arg1: $Runnable$$Type): $Either<(L), (R)>
 "rightOr"(arg0: R): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Either$$Type<L, R> = ((arg0: $Function<(L), (T)>, arg1: $Function<(R), (T)>) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Either_<L, R> = $Either$$Type<(L), (R)>;
}}
declare module "com.teamresourceful.resourcefullib.common.fluid.data.FluidSounds" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $FluidSounds extends $Record {
static readonly "BUCKET_EMPTY": StringJS
static readonly "BUCKET_FILL": StringJS

constructor()
constructor(sounds: $Map$$Type<(StringJS), ($SoundEvent$$Type)>)

public "has"(name: StringJS): boolean
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "add"(name: StringJS, sound: $SoundEvent$$Type): void
public "getOrDefault"(name: StringJS, defaultSound: $SoundEvent$$Type): $SoundEvent
public "sounds"(): $Map<(StringJS), ($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidSounds$$Type = ({"sounds"?: $Map$$Type<(StringJS), ($SoundEvent$$Type)>}) | ([sounds?: $Map$$Type<(StringJS), ($SoundEvent$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidSounds_ = $FluidSounds$$Type;
}}
declare module "com.teamresourceful.bytecodecs.base.WrappedByteCodec" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$PairCodec, $PairCodec$$Type} from "com.teamresourceful.bytecodecs.defaults.PairCodec"
import {$ObjectEntryByteCodec, $ObjectEntryByteCodec$$Type} from "com.teamresourceful.bytecodecs.base.ObjectEntryByteCodec"
import {$Either, $Either$$Type} from "com.teamresourceful.bytecodecs.utils.Either"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ByteCodec, $ByteCodec$$Type} from "com.teamresourceful.bytecodecs.base.ByteCodec"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$MapCodec, $MapCodec$$Type} from "com.teamresourceful.bytecodecs.defaults.MapCodec"

export interface $WrappedByteCodec<T> extends $ByteCodec<(T)> {

 "decode"(arg0: $ByteBuf$$Type): T
 "encode"(arg0: T, arg1: $ByteBuf$$Type): void
 "codec"(): $ByteCodec<(T)>
 "optionalOf"(arg0: T): $ByteCodec<($Optional<(T)>)>
 "optionalOf"(): $ByteCodec<($Optional<(T)>)>
 "optionalOf"(arg0: $Supplier$$Type<(T)>): $ByteCodec<($Optional<(T)>)>
 "dispatch"<O>(arg0: $Function$$Type<(T), ($ByteCodec$$Type<(O)>)>, arg1: $Function$$Type<(O), (T)>): $ByteCodec<(O)>
 "map"<R>(arg0: $Function$$Type<(T), (R)>, arg1: $Function$$Type<(R), (T)>): $ByteCodec<(R)>
 "setOf"(): $ByteCodec<($Set<(T)>)>
 "listOf"(): $ByteCodec<($List<(T)>)>
 "fieldOf"<O>(arg0: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
 "collectionOf"<C extends $Collection<(T)>>(arg0: $Function$$Type<(integer), (C)>): $ByteCodec<(C)>
 "mapDispatch"<O>(arg0: $Function$$Type<(T), ($ByteCodec$$Type<(O)>)>): $ByteCodec<($Map<(T), (O)>)>
 "nullableOf"(): $ByteCodec<(T)>
 "linkedSetOf"(): $ByteCodec<($Set<(T)>)>
 "nullableFieldOf"<O>(arg0: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
 "nullableFieldOf"<O>(arg0: $Supplier$$Type<(T)>, arg1: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
 "nullableFieldOf"<O>(arg0: T, arg1: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
 "optionalFieldOf"<O>(arg0: T, arg1: $Function$$Type<(O), ($Optional$$Type<(T)>)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>
 "optionalFieldOf"<O>(arg0: $Supplier$$Type<(T)>, arg1: $Function$$Type<(O), ($Optional$$Type<(T)>)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>
 "optionalFieldOf"<O>(arg0: $Function$$Type<(O), ($Optional$$Type<(T)>)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>

(): $ByteCodec$$Type<(T)>
}

export namespace $WrappedByteCodec {
function unit<T>(arg0: $Supplier$$Type<(T)>): $ByteCodec<(T)>
function unit<T>(arg0: T): $ByteCodec<(T)>
function choice<T>(arg0: $ByteCodec$$Type<(T)>, arg1: $ByteCodec$$Type<(T)>, arg2: $Function$$Type<(T), ($Either$$Type<(T), (T)>)>): $ByteCodec<(T)>
function ofEnum<T extends $Enum<(T)>>(arg0: $Class$$Type<(T)>): $ByteCodec<(T)>
function mapOf<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $MapCodec<(K), (V)>
function either<F, S>(arg0: $ByteCodec$$Type<(F)>, arg1: $ByteCodec$$Type<(S)>): $ByteCodec<($Either<(F), (S)>)>
function passthrough<T>(arg0: $BiConsumer$$Type<($ByteBuf), (T)>, arg1: $Function$$Type<($ByteBuf), (T)>): $ByteCodec<(T)>
function pairOf<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $PairCodec<(K), (V)>
const probejs$$marker: never
}
export class $WrappedByteCodec$$Static<T> implements $WrappedByteCodec {


 "decode"(arg0: $ByteBuf$$Type): T
 "encode"(arg0: T, arg1: $ByteBuf$$Type): void
 "codec"(): $ByteCodec<(T)>
static "unit"<T>(arg0: $Supplier$$Type<(T)>): $ByteCodec<(T)>
static "unit"<T>(arg0: T): $ByteCodec<(T)>
 "optionalOf"(arg0: T): $ByteCodec<($Optional<(T)>)>
 "optionalOf"(): $ByteCodec<($Optional<(T)>)>
 "optionalOf"(arg0: $Supplier$$Type<(T)>): $ByteCodec<($Optional<(T)>)>
static "choice"<T>(arg0: $ByteCodec$$Type<(T)>, arg1: $ByteCodec$$Type<(T)>, arg2: $Function$$Type<(T), ($Either$$Type<(T), (T)>)>): $ByteCodec<(T)>
 "dispatch"<O>(arg0: $Function$$Type<(T), ($ByteCodec$$Type<(O)>)>, arg1: $Function$$Type<(O), (T)>): $ByteCodec<(O)>
 "map"<R>(arg0: $Function$$Type<(T), (R)>, arg1: $Function$$Type<(R), (T)>): $ByteCodec<(R)>
static "ofEnum"<T extends $Enum<(T)>>(arg0: $Class$$Type<(T)>): $ByteCodec<(T)>
 "setOf"(): $ByteCodec<($Set<(T)>)>
static "mapOf"<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $MapCodec<(K), (V)>
static "either"<F, S>(arg0: $ByteCodec$$Type<(F)>, arg1: $ByteCodec$$Type<(S)>): $ByteCodec<($Either<(F), (S)>)>
 "listOf"(): $ByteCodec<($List<(T)>)>
static "passthrough"<T>(arg0: $BiConsumer$$Type<($ByteBuf), (T)>, arg1: $Function$$Type<($ByteBuf), (T)>): $ByteCodec<(T)>
 "fieldOf"<O>(arg0: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
static "pairOf"<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $PairCodec<(K), (V)>
 "collectionOf"<C extends $Collection<(T)>>(arg0: $Function$$Type<(integer), (C)>): $ByteCodec<(C)>
 "mapDispatch"<O>(arg0: $Function$$Type<(T), ($ByteCodec$$Type<(O)>)>): $ByteCodec<($Map<(T), (O)>)>
 "nullableOf"(): $ByteCodec<(T)>
 "linkedSetOf"(): $ByteCodec<($Set<(T)>)>
 "nullableFieldOf"<O>(arg0: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
 "nullableFieldOf"<O>(arg0: $Supplier$$Type<(T)>, arg1: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
 "nullableFieldOf"<O>(arg0: T, arg1: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
 "optionalFieldOf"<O>(arg0: T, arg1: $Function$$Type<(O), ($Optional$$Type<(T)>)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>
 "optionalFieldOf"<O>(arg0: $Supplier$$Type<(T)>, arg1: $Function$$Type<(O), ($Optional$$Type<(T)>)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>
 "optionalFieldOf"<O>(arg0: $Function$$Type<(O), ($Optional$$Type<(T)>)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedByteCodec$$Type<T> = (() => $ByteCodec$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrappedByteCodec_<T> = $WrappedByteCodec$$Type<(T)>;
}}
declare module "com.teamresourceful.bytecodecs.defaults.MapCodec" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$PairCodec, $PairCodec$$Type} from "com.teamresourceful.bytecodecs.defaults.PairCodec"
import {$ObjectEntryByteCodec, $ObjectEntryByteCodec$$Type} from "com.teamresourceful.bytecodecs.base.ObjectEntryByteCodec"
import {$Either, $Either$$Type} from "com.teamresourceful.bytecodecs.utils.Either"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ByteCodec, $ByteCodec$$Type} from "com.teamresourceful.bytecodecs.base.ByteCodec"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $MapCodec<K, V> extends $Record implements $ByteCodec<($Map<(K), (V)>)> {

constructor(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>)
constructor(codec: $PairCodec$$Type<(K), (V)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "decode"(arg0: $ByteBuf$$Type): any
public "encode"(arg0: any, arg1: $ByteBuf$$Type): void
public "encode"(arg0: $Map$$Type<(K), (V)>, arg1: $ByteBuf$$Type): void
public "codec"(): $PairCodec<(K), (V)>
public static "unit"<T>(arg0: $Supplier$$Type<($Map$$Type<(K), (V)>)>): $ByteCodec<($Map<(K), (V)>)>
public static "unit"<T>(arg0: $Map$$Type<(K), (V)>): $ByteCodec<($Map<(K), (V)>)>
public "optionalOf"(arg0: $Map$$Type<(K), (V)>): $ByteCodec<($Optional<($Map<(K), (V)>)>)>
public "optionalOf"(): $ByteCodec<($Optional<($Map<(K), (V)>)>)>
public "optionalOf"(arg0: $Supplier$$Type<($Map$$Type<(K), (V)>)>): $ByteCodec<($Optional<($Map<(K), (V)>)>)>
public static "choice"<T>(arg0: $ByteCodec$$Type<($Map$$Type<(K), (V)>)>, arg1: $ByteCodec$$Type<($Map$$Type<(K), (V)>)>, arg2: $Function$$Type<($Map<(K), (V)>), ($Either$$Type<($Map$$Type<(K), (V)>), ($Map$$Type<(K), (V)>)>)>): $ByteCodec<($Map<(K), (V)>)>
public "dispatch"<O>(arg0: $Function$$Type<($Map<(K), (V)>), ($ByteCodec$$Type<(O)>)>, arg1: $Function$$Type<(O), ($Map$$Type<(K), (V)>)>): $ByteCodec<(O)>
public "map"<R>(arg0: $Function$$Type<($Map<(K), (V)>), (R)>, arg1: $Function$$Type<(R), ($Map$$Type<(K), (V)>)>): $ByteCodec<(R)>
public static "ofEnum"<T extends $Enum<(T)>>(arg0: $Class$$Type<($Map$$Type<(K), (V)>)>): $ByteCodec<($Map<(K), (V)>)>
public "setOf"(): $ByteCodec<($Set<($Map<(K), (V)>)>)>
public static "mapOf"<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $MapCodec<(K), (V)>
public static "either"<F, S>(arg0: $ByteCodec$$Type<(F)>, arg1: $ByteCodec$$Type<(S)>): $ByteCodec<($Either<(F), (S)>)>
public "listOf"(): $ByteCodec<($List<($Map<(K), (V)>)>)>
public static "passthrough"<T>(arg0: $BiConsumer$$Type<($ByteBuf), ($Map<(K), (V)>)>, arg1: $Function$$Type<($ByteBuf), ($Map$$Type<(K), (V)>)>): $ByteCodec<($Map<(K), (V)>)>
public "fieldOf"<O>(arg0: $Function$$Type<(O), ($Map$$Type<(K), (V)>)>): $ObjectEntryByteCodec<(O), ($Map<(K), (V)>)>
public static "pairOf"<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $PairCodec<(K), (V)>
public "collectionOf"<C extends $Collection<(T)>>(arg0: $Function$$Type<(integer), (C)>): $ByteCodec<(C)>
public "mapDispatch"<O>(arg0: $Function$$Type<($Map<(K), (V)>), ($ByteCodec$$Type<(O)>)>): $ByteCodec<($Map<($Map<(K), (V)>), (O)>)>
public "nullableOf"(): $ByteCodec<($Map<(K), (V)>)>
public "linkedSetOf"(): $ByteCodec<($Set<($Map<(K), (V)>)>)>
public "nullableFieldOf"<O>(arg0: $Function$$Type<(O), ($Map$$Type<(K), (V)>)>): $ObjectEntryByteCodec<(O), ($Map<(K), (V)>)>
public "nullableFieldOf"<O>(arg0: $Supplier$$Type<($Map$$Type<(K), (V)>)>, arg1: $Function$$Type<(O), ($Map$$Type<(K), (V)>)>): $ObjectEntryByteCodec<(O), ($Map<(K), (V)>)>
public "nullableFieldOf"<O>(arg0: $Map$$Type<(K), (V)>, arg1: $Function$$Type<(O), ($Map$$Type<(K), (V)>)>): $ObjectEntryByteCodec<(O), ($Map<(K), (V)>)>
public "optionalFieldOf"<O>(arg0: $Map$$Type<(K), (V)>, arg1: $Function$$Type<(O), ($Optional$$Type<($Map$$Type<(K), (V)>)>)>): $ObjectEntryByteCodec<(O), ($Optional<($Map<(K), (V)>)>)>
public "optionalFieldOf"<O>(arg0: $Supplier$$Type<($Map$$Type<(K), (V)>)>, arg1: $Function$$Type<(O), ($Optional$$Type<($Map$$Type<(K), (V)>)>)>): $ObjectEntryByteCodec<(O), ($Optional<($Map<(K), (V)>)>)>
public "optionalFieldOf"<O>(arg0: $Function$$Type<(O), ($Optional$$Type<($Map$$Type<(K), (V)>)>)>): $ObjectEntryByteCodec<(O), ($Optional<($Map<(K), (V)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapCodec$$Type<K, V> = ({"codec"?: $PairCodec$$Type<(any), (any)>}) | ([codec?: $PairCodec$$Type<(any), (any)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapCodec_<K, V> = $MapCodec$$Type<(K), (V)>;
}}
declare module "com.teamresourceful.resourcefullib.common.fluid.neoforge.ResourcefulFluidType" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientFluidTypeExtensions"
import {$Lazy, $Lazy$$Type} from "net.neoforged.neoforge.common.util.Lazy"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$FluidProperties, $FluidProperties$$Type} from "com.teamresourceful.resourcefullib.common.fluid.data.FluidProperties"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $ResourcefulFluidType extends $FluidType {
static readonly "SIZE": $Lazy<(integer)>
static readonly "BUCKET_VOLUME": integer

constructor(id: $ResourceLocation$$Type, props: $FluidProperties$$Type)

public "initializeClient"(consumer: $Consumer$$Type<($IClientFluidTypeExtensions)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourcefulFluidType$$Type = ($ResourcefulFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourcefulFluidType_ = $ResourcefulFluidType$$Type;
}}
declare module "com.teamresourceful.resourcefullib.common.fluid.data.FluidData" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FlowingFluid, $FlowingFluid$$Type} from "net.minecraft.world.level.material.FlowingFluid"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$FluidProperties, $FluidProperties$$Type} from "com.teamresourceful.resourcefullib.common.fluid.data.FluidProperties"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"

export interface $FluidData {

 "block"(): $Supplier<($LiquidBlock)>
 "data"<T>(): T
 "id"(): $ResourceLocation
 "properties"(): $FluidProperties
 "bucket"(): $Supplier<($Item)>
 "still"(): $Supplier<($FlowingFluid)>
 "flowing"(): $Supplier<($FlowingFluid)>
 "setBlock"(arg0: $Supplier$$Type<($LiquidBlock$$Type)>): void
 "setStill"(arg0: $Supplier$$Type<($FlowingFluid$$Type)>): void
 "setFlowing"(arg0: $Supplier$$Type<($FlowingFluid$$Type)>): void
 "setBucket"(arg0: $Supplier$$Type<($Item$$Type)>): void
}

export namespace $FluidData {
const probejs$$marker: never
}
export class $FluidData$$Static implements $FluidData {


 "block"(): $Supplier<($LiquidBlock)>
 "data"<T>(): T
 "id"(): $ResourceLocation
 "properties"(): $FluidProperties
 "bucket"(): $Supplier<($Item)>
 "still"(): $Supplier<($FlowingFluid)>
 "flowing"(): $Supplier<($FlowingFluid)>
 "setBlock"(arg0: $Supplier$$Type<($LiquidBlock$$Type)>): void
 "setStill"(arg0: $Supplier$$Type<($FlowingFluid$$Type)>): void
 "setFlowing"(arg0: $Supplier$$Type<($FlowingFluid$$Type)>): void
 "setBucket"(arg0: $Supplier$$Type<($Item$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidData$$Type = ($FluidData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidData_ = $FluidData$$Type;
}}
declare module "com.teamresourceful.bytecodecs.base.ObjectEntryByteCodec" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$PairCodec, $PairCodec$$Type} from "com.teamresourceful.bytecodecs.defaults.PairCodec"
import {$Either, $Either$$Type} from "com.teamresourceful.bytecodecs.utils.Either"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ByteCodec, $ByteCodec$$Type} from "com.teamresourceful.bytecodecs.base.ByteCodec"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$WrappedByteCodec, $WrappedByteCodec$$Type} from "com.teamresourceful.bytecodecs.base.WrappedByteCodec"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$MapCodec, $MapCodec$$Type} from "com.teamresourceful.bytecodecs.defaults.MapCodec"

export class $ObjectEntryByteCodec<O, T> extends $Record implements $WrappedByteCodec<(T)> {

constructor(codec: $ByteCodec$$Type<(T)>, getter: $Function$$Type<(O), (T)>)

public "getter"(): $Function<(O), (T)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "codec"(): $ByteCodec<(T)>
public "mapEncode"(arg0: O, arg1: $ByteBuf$$Type): void
public "decode"(arg0: $ByteBuf$$Type): T
public "encode"(arg0: T, arg1: $ByteBuf$$Type): void
public static "unit"<T>(arg0: $Supplier$$Type<(T)>): $ByteCodec<(T)>
public static "unit"<T>(arg0: T): $ByteCodec<(T)>
public "optionalOf"(arg0: T): $ByteCodec<($Optional<(T)>)>
public "optionalOf"(): $ByteCodec<($Optional<(T)>)>
public "optionalOf"(arg0: $Supplier$$Type<(T)>): $ByteCodec<($Optional<(T)>)>
public static "choice"<T>(arg0: $ByteCodec$$Type<(T)>, arg1: $ByteCodec$$Type<(T)>, arg2: $Function$$Type<(T), ($Either$$Type<(T), (T)>)>): $ByteCodec<(T)>
public "dispatch"<O>(arg0: $Function$$Type<(T), ($ByteCodec$$Type<(O)>)>, arg1: $Function$$Type<(O), (T)>): $ByteCodec<(O)>
public "map"<R>(arg0: $Function$$Type<(T), (R)>, arg1: $Function$$Type<(R), (T)>): $ByteCodec<(R)>
public static "ofEnum"<T extends $Enum<(T)>>(arg0: $Class$$Type<(T)>): $ByteCodec<(T)>
public "setOf"(): $ByteCodec<($Set<(T)>)>
public static "mapOf"<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $MapCodec<(K), (V)>
public static "either"<F, S>(arg0: $ByteCodec$$Type<(F)>, arg1: $ByteCodec$$Type<(S)>): $ByteCodec<($Either<(F), (S)>)>
public "listOf"(): $ByteCodec<($List<(T)>)>
public static "passthrough"<T>(arg0: $BiConsumer$$Type<($ByteBuf), (T)>, arg1: $Function$$Type<($ByteBuf), (T)>): $ByteCodec<(T)>
public "fieldOf"<O>(arg0: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
public static "pairOf"<K, V>(arg0: $ByteCodec$$Type<(K)>, arg1: $ByteCodec$$Type<(V)>): $PairCodec<(K), (V)>
public "collectionOf"<C extends $Collection<(T)>>(arg0: $Function$$Type<(integer), (C)>): $ByteCodec<(C)>
public "mapDispatch"<O>(arg0: $Function$$Type<(T), ($ByteCodec$$Type<(O)>)>): $ByteCodec<($Map<(T), (O)>)>
public "nullableOf"(): $ByteCodec<(T)>
public "linkedSetOf"(): $ByteCodec<($Set<(T)>)>
public "nullableFieldOf"<O>(arg0: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
public "nullableFieldOf"<O>(arg0: $Supplier$$Type<(T)>, arg1: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
public "nullableFieldOf"<O>(arg0: T, arg1: $Function$$Type<(O), (T)>): $ObjectEntryByteCodec<(O), (T)>
public "optionalFieldOf"<O>(arg0: T, arg1: $Function$$Type<(O), ($Optional$$Type<(T)>)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>
public "optionalFieldOf"<O>(arg0: $Supplier$$Type<(T)>, arg1: $Function$$Type<(O), ($Optional$$Type<(T)>)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>
public "optionalFieldOf"<O>(arg0: $Function$$Type<(O), ($Optional$$Type<(T)>)>): $ObjectEntryByteCodec<(O), ($Optional<(T)>)>
get "ter"(): $Function<(O), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ObjectEntryByteCodec$$Type<O, T> = ({"codec"?: $ByteCodec$$Type<(any)>, "getter"?: $Function$$Type<(any), (any)>}) | ([codec?: $ByteCodec$$Type<(any)>, getter?: $Function$$Type<(any), (any)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ObjectEntryByteCodec_<O, T> = $ObjectEntryByteCodec$$Type<(O), (T)>;
}}
declare module "com.teamresourceful.resourcefullib.common.fluid.data.FluidProperties" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FluidSounds, $FluidSounds$$Type} from "com.teamresourceful.resourcefullib.common.fluid.data.FluidSounds"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$Rarity, $Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$FluidProperties$Builder, $FluidProperties$Builder$$Type} from "com.teamresourceful.resourcefullib.common.fluid.data.FluidProperties$Builder"

export interface $FluidProperties {

 "sounds"(): $FluidSounds
/**
 * 
 * @deprecated
 */
 "still"(): $ResourceLocation
 "rarity"(): $Rarity
 "canPlace"(): boolean
 "motionScale"(): double
 "canPushEntity"(): boolean
 "canSwim"(): boolean
 "canExtinguish"(): boolean
 "canHydrate"(): boolean
/**
 * 
 * @deprecated
 */
 "flowing"(): $ResourceLocation
 "canDrown"(): boolean
 "pathType"(): $PathType
 "lightLevel"(): integer
 "viscosity"(): integer
 "temperature"(): integer
 "density"(): integer
/**
 * 
 * @deprecated
 */
 "overlay"(): $ResourceLocation
/**
 * 
 * @deprecated
 */
 "screenOverlay"(): $ResourceLocation
 "dropOff"(): integer
/**
 * 
 * @deprecated
 */
 "tintColor"(): integer
 "tickDelay"(): integer
 "slopeFindDistance"(): integer
 "fallDistanceModifier"(): float
 "canConvertToSource"(): boolean
 "supportsBoating"(): boolean
 "adjacentPathType"(): $PathType
 "explosionResistance"(): float
}

export namespace $FluidProperties {
function builder(): $FluidProperties$Builder
const probejs$$marker: never
}
export class $FluidProperties$$Static implements $FluidProperties {


static "builder"(): $FluidProperties$Builder
 "sounds"(): $FluidSounds
/**
 * 
 * @deprecated
 */
 "still"(): $ResourceLocation
 "rarity"(): $Rarity
 "canPlace"(): boolean
 "motionScale"(): double
 "canPushEntity"(): boolean
 "canSwim"(): boolean
 "canExtinguish"(): boolean
 "canHydrate"(): boolean
/**
 * 
 * @deprecated
 */
 "flowing"(): $ResourceLocation
 "canDrown"(): boolean
 "pathType"(): $PathType
 "lightLevel"(): integer
 "viscosity"(): integer
 "temperature"(): integer
 "density"(): integer
/**
 * 
 * @deprecated
 */
 "overlay"(): $ResourceLocation
/**
 * 
 * @deprecated
 */
 "screenOverlay"(): $ResourceLocation
 "dropOff"(): integer
/**
 * 
 * @deprecated
 */
 "tintColor"(): integer
 "tickDelay"(): integer
 "slopeFindDistance"(): integer
 "fallDistanceModifier"(): float
 "canConvertToSource"(): boolean
 "supportsBoating"(): boolean
 "adjacentPathType"(): $PathType
 "explosionResistance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidProperties$$Type = ($FluidProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidProperties_ = $FluidProperties$$Type;
}}
declare module "com.teamresourceful.resourcefullib.common.fluid.data.FluidProperties$Builder" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$PathType, $PathType$$Type} from "net.minecraft.world.level.pathfinder.PathType"
import {$Rarity, $Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$FluidProperties, $FluidProperties$$Type} from "com.teamresourceful.resourcefullib.common.fluid.data.FluidProperties"

export class $FluidProperties$Builder {


public "build"(): $FluidProperties
public "sounds"(sound: StringJS, soundEvent: $SoundEvent$$Type): $FluidProperties$Builder
/**
 * 
 * @deprecated
 */
public "still"(still: $ResourceLocation$$Type): $FluidProperties$Builder
public "rarity"(rarity: $Rarity$$Type): $FluidProperties$Builder
public "motionScale"(motionScale: double): $FluidProperties$Builder
public "canPushEntity"(canPushEntity: boolean): $FluidProperties$Builder
public "canSwim"(canSwim: boolean): $FluidProperties$Builder
public "canExtinguish"(canExtinguish: boolean): $FluidProperties$Builder
public "canHydrate"(canHydrate: boolean): $FluidProperties$Builder
/**
 * 
 * @deprecated
 */
public "flowing"(flowing: $ResourceLocation$$Type): $FluidProperties$Builder
public "canDrown"(canDrown: boolean): $FluidProperties$Builder
public "pathType"(pathType: $PathType$$Type): $FluidProperties$Builder
public "lightLevel"(lightLevel: integer): $FluidProperties$Builder
public "viscosity"(viscosity: integer): $FluidProperties$Builder
public "temperature"(temperature: integer): $FluidProperties$Builder
public "density"(density: integer): $FluidProperties$Builder
/**
 * 
 * @deprecated
 */
public "overlay"(overlay: $ResourceLocation$$Type): $FluidProperties$Builder
/**
 * 
 * @deprecated
 */
public "screenOverlay"(screenOverlay: $ResourceLocation$$Type): $FluidProperties$Builder
public "dropOff"(dropOff: integer): $FluidProperties$Builder
/**
 * 
 * @deprecated
 */
public "tintColor"(tintColor: integer): $FluidProperties$Builder
public "disablePlacing"(): $FluidProperties$Builder
public "tickRate"(tickRate: integer): $FluidProperties$Builder
public "slopeFindDistance"(slopeFindDistance: integer): $FluidProperties$Builder
public "fallDistanceModifier"(fallDistanceModifier: float): $FluidProperties$Builder
public "canConvertToSource"(canConvertToSource: boolean): $FluidProperties$Builder
public "supportsBoating"(supportsBoating: boolean): $FluidProperties$Builder
public "adjacentPathType"(adjacentPathType: $PathType$$Type): $FluidProperties$Builder
public "explosionResistance"(explosionResistance: float): $FluidProperties$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidProperties$Builder$$Type = ($FluidProperties$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidProperties$Builder_ = $FluidProperties$Builder$$Type;
}}
declare module "com.teamresourceful.resourcefullib.common.recipe.CodecRecipeSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$ByteCodec, $ByteCodec$$Type} from "com.teamresourceful.bytecodecs.base.ByteCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $CodecRecipeSerializer<R extends $Recipe<(any)>> implements $RecipeSerializer<(R)> {

constructor(recipeType: $RecipeType$$Type<(R)>, jsonCodec: $MapCodec$$Type<(R)>, networkCodec: $ByteCodec$$Type<(R)>)
constructor(recipeType: $RecipeType$$Type<(R)>, jsonCodec: $MapCodec$$Type<(R)>, networkCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (R)>)

public "type"(): $RecipeType<(R)>
public "codec"(): $MapCodec<(R)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (R)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodecRecipeSerializer$$Type<R> = ($CodecRecipeSerializer<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CodecRecipeSerializer_<R> = $CodecRecipeSerializer$$Type<(R)>;
}}
declare module "com.teamresourceful.resourcefullib.common.recipe.CodecRecipe" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeType, $RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$CodecRecipeSerializer, $CodecRecipeSerializer$$Type} from "com.teamresourceful.resourcefullib.common.recipe.CodecRecipeSerializer"

export interface $CodecRecipe<C extends $RecipeInput> extends $Recipe<(C)> {

 "getResultItem"(provider: $HolderLookup$Provider$$Type): $ItemStack
 "isSpecial"(): boolean
 "serializer"(): $CodecRecipeSerializer<($CodecRecipe<(C)>)>
 "getSerializer"(): $RecipeSerializer<(any)>
 "assemble"(container: C, provider: $HolderLookup$Provider$$Type): $ItemStack
 "canCraftInDimensions"(pWidth: integer, pHeight: integer): boolean
 "matches"(arg0: C, arg1: $Level$$Type): boolean
 "getType"(): $RecipeType<(any)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getGroup"(): StringJS
 "isIncomplete"(): boolean
 "getToastSymbol"(): $ItemStack
 "showNotification"(): boolean
 "getRemainingItems"(arg0: C): $NonNullList<($ItemStack)>
get "special"(): boolean
get "type"(): $RecipeType<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "group"(): StringJS
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
}

export namespace $CodecRecipe {
const probejs$$marker: never
}
export class $CodecRecipe$$Static<C extends $RecipeInput> implements $CodecRecipe {


 "getResultItem"(provider: $HolderLookup$Provider$$Type): $ItemStack
 "isSpecial"(): boolean
 "serializer"(): $CodecRecipeSerializer<($CodecRecipe<(C)>)>
 "getSerializer"(): $RecipeSerializer<(any)>
 "assemble"(container: C, provider: $HolderLookup$Provider$$Type): $ItemStack
 "canCraftInDimensions"(pWidth: integer, pHeight: integer): boolean
 "matches"(arg0: C, arg1: $Level$$Type): boolean
 "getType"(): $RecipeType<(any)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getGroup"(): StringJS
 "isIncomplete"(): boolean
 "getToastSymbol"(): $ItemStack
 "showNotification"(): boolean
 "getRemainingItems"(arg0: C): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CodecRecipe$$Type<C> = ($CodecRecipe<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CodecRecipe_<C> = $CodecRecipe$$Type<(C)>;
}}
