declare module "malte0811.dualcodecs.DualMapCodec" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DualCodec, $DualCodec$$Type} from "malte0811.dualcodecs.DualCodec"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $DualMapCodec<S extends $ByteBuf, T> extends $Record {

constructor(mapCodec: $MapCodec$$Type<(T)>, streamCodec: $StreamCodec$$Type<(S), (T)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "map"<T1>(arg0: $Function$$Type<(T), (T1)>, arg1: $Function$$Type<(T1), (T)>): $DualMapCodec<(S), (T1)>
public static "unit"<S extends $ByteBuf, T>(arg0: T): $DualMapCodec<(S), (T)>
public "mapCodec"(): $MapCodec<(T)>
public "streamCodec"(): $StreamCodec<(S), (T)>
public "codec"(): $DualCodec<(S), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DualMapCodec$$Type<S, T> = ({"mapCodec"?: $MapCodec$$Type<(any)>, "streamCodec"?: $StreamCodec$$Type<(any), (any)>}) | ([mapCodec?: $MapCodec$$Type<(any)>, streamCodec?: $StreamCodec$$Type<(any), (any)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DualMapCodec_<S, T> = $DualMapCodec$$Type<(S), (T)>;
}}
declare module "malte0811.dualcodecs.DualCodec" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$DualMapCodec, $DualMapCodec$$Type} from "malte0811.dualcodecs.DualMapCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $DualCodec<S extends $ByteBuf, T> extends $Record {

constructor(codec: $Codec$$Type<(T)>, streamCodec: $StreamCodec$$Type<(S), (T)>)

public "dispatch"<V>(arg0: $Function$$Type<(V), (T)>, arg1: $Function$$Type<(T), ($DualMapCodec$$Type<(S), (V)>)>): $DualCodec<(S), (V)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "map"<T1>(arg0: $Function$$Type<(T), (T1)>, arg1: $Function$$Type<(T1), (T)>): $DualCodec<(S), (T1)>
public "fieldOf"(arg0: string): $DualMapCodec<(S), (T)>
public "streamCodec"(): $StreamCodec<(S), (T)>
public "setOf"(): $DualCodec<(S), ($Set<(T)>)>
public "toJSON"(arg0: T): $JsonElement
public "listOf"(): $DualCodec<(S), ($List<(T)>)>
public "codec"(): $Codec<(T)>
public "toNBT"(arg0: T): $Tag
public "optionalFieldOf"(arg0: string, arg1: T): $DualMapCodec<(S), (T)>
public "optionalFieldOf"(arg0: string): $DualMapCodec<(S), ($Optional<(T)>)>
public "castStream"<S1 extends S>(): $DualCodec<(S1), (T)>
public "fromJSON"(arg0: $JsonElement$$Type): T
public "fromNBT"(arg0: $Tag$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DualCodec$$Type<S, T> = ({"streamCodec"?: $StreamCodec$$Type<(any), (any)>, "codec"?: $Codec$$Type<(any)>}) | ([streamCodec?: $StreamCodec$$Type<(any), (any)>, codec?: $Codec$$Type<(any)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DualCodec_<S, T> = $DualCodec$$Type<(S), (T)>;
}}
