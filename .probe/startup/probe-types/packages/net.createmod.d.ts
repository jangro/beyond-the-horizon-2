declare module "net.createmod.catnip.data.Couple" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Pair, $Pair$$Type} from "net.createmod.catnip.data.Pair"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export class $Couple<T> extends $Pair<(T), (T)> implements $Iterable<(T)> {


public static "create"<T>(arg0: $Supplier$$Type<(T)>): $Couple<(T)>
public static "create"<T>(arg0: T, arg1: T): $Couple<(T)>
public "swap"(): $Couple<(T)>
public "get"(arg0: boolean): T
public "replace"(arg0: $Function$$Type<(T), (T)>): void
public "iterator"(): $Iterator<(T)>
public "map"<S>(arg0: $Function$$Type<(T), (S)>): $Couple<(S)>
public "stream"(): $Stream<(T)>
public "set"(arg0: boolean, arg1: T): void
public "forEach"(arg0: $Consumer$$Type<(T)>): void
public "copy"(): $Pair<(any), (any)>
public "either"(arg0: $Predicate$$Type<(T)>): boolean
public static "codec"<T>(arg0: $Codec$$Type<(T)>): $Codec<($Couple<(T)>)>
public "both"(arg0: $Predicate$$Type<(T)>): boolean
public static "streamCodec"<B, T>(arg0: $StreamCodec$$Type<(B), (T)>): $StreamCodec<(B), ($Couple<(T)>)>
public "serializeEach"(arg0: $Function$$Type<(T), ($CompoundTag$$Type)>): $ListTag
public "mapWithContext"<S>(arg0: $BiFunction$$Type<(T), (boolean), (S)>): $Couple<(S)>
public "mapWithParams"<S, R>(arg0: $BiFunction$$Type<(T), (R), (S)>, arg1: $Couple$$Type<(R)>): $Couple<(S)>
public "mapNotNull"<S>(arg0: $Function$$Type<(T), (S)>): $Couple<(S)>
public "forEachWithContext"(arg0: $BiConsumer$$Type<(T), (boolean)>): void
public static "createWithContext"<T>(arg0: $Function$$Type<(boolean), (T)>): $Couple<(T)>
public "mapNotNullWithParam"<S, R>(arg0: $BiFunction$$Type<(T), (R), (S)>, arg1: R): $Couple<(S)>
public "replaceWithContext"(arg0: $BiFunction$$Type<(T), (boolean), (T)>): void
public "replaceWithParams"<S>(arg0: $BiFunction$$Type<(T), (S), (T)>, arg1: $Couple$$Type<(S)>): void
public "forEachWithParams"<S>(arg0: $BiConsumer$$Type<(T), (S)>, arg1: $Couple$$Type<(S)>): void
public static "deserializeEach"<S>(arg0: $ListTag$$Type, arg1: $Function$$Type<($CompoundTag), (S)>): $Couple<(S)>
public "spliterator"(): $Spliterator<(T)>
[Symbol.iterator](): IterableIterator<T>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Couple$$Type<T> = ($Couple<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Couple_<T> = $Couple$$Type<(T)>;
}}
declare module "net.createmod.ponder.mixin.accessor.BiomeManagerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BiomeManagerAccessor {

 "catnip$getBiomeZoomSeed"(): long

(): long
}

export namespace $BiomeManagerAccessor {
const probejs$$marker: never
}
export class $BiomeManagerAccessor$$Static implements $BiomeManagerAccessor {


 "catnip$getBiomeZoomSeed"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeManagerAccessor$$Type = (() => long);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeManagerAccessor_ = $BiomeManagerAccessor$$Type;
}}
declare module "net.createmod.catnip.math.BlockFace" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Pair, $Pair$$Type} from "net.createmod.catnip.data.Pair"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $BlockFace extends $Pair<($BlockPos), ($Direction)> {
static "CODEC": $Codec<($BlockFace)>
static "STREAM_CODEC": $StreamCodec<($ByteBuf), ($BlockFace)>

constructor(arg0: $BlockPos$$Type, arg1: $Direction$$Type)

public "getPos"(): $BlockPos
public "getFace"(): $Direction
public "serializeNBT"(): $CompoundTag
public "getOpposite"(): $BlockFace
public "isEquivalent"(arg0: $BlockFace$$Type): boolean
public static "fromNBT"(arg0: $CompoundTag$$Type): $BlockFace
public "getConnectedPos"(): $BlockPos
public "getOppositeFace"(): $Direction
get "pos"(): $BlockPos
get "face"(): $Direction
get "opposite"(): $BlockFace
get "connectedPos"(): $BlockPos
get "oppositeFace"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFace$$Type = ($BlockFace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockFace_ = $BlockFace$$Type;
}}
declare module "net.createmod.catnip.data.Pair" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"

export class $Pair<F, S> {


public "getFirst"(): F
public "getSecond"(): S
public "swap"(): $Pair<(S), (F)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"<F, S>(arg0: F, arg1: S): $Pair<(F), (S)>
public "copy"(): $Pair<(F), (S)>
public static "codec"<F, S>(arg0: $Codec$$Type<(F)>, arg1: $Codec$$Type<(S)>): $Codec<($Pair<(F), (S)>)>
public static "streamCodec"<B, F, S>(arg0: $StreamCodec$$Type<(B), (F)>, arg1: $StreamCodec$$Type<(B), (S)>): $StreamCodec<(B), ($Pair<(F), (S)>)>
public "setSecond"(arg0: S): void
public "setFirst"(arg0: F): void
get "first"(): F
get "second"(): S
set "second"(value: S)
set "first"(value: F)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$$Type<F, S> = ($Pair<(F), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<F, S> = $Pair$$Type<(F), (S)>;
}}
declare module "net.createmod.ponder.mixin.client.accessor.GameRendererAccessor" {
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"

export interface $GameRendererAccessor {

 "catnip$callGetFov"(arg0: $Camera$$Type, arg1: float, arg2: boolean): double

(arg0: $Camera, arg1: float, arg2: boolean): double
}

export namespace $GameRendererAccessor {
const probejs$$marker: never
}
export class $GameRendererAccessor$$Static implements $GameRendererAccessor {


 "catnip$callGetFov"(arg0: $Camera$$Type, arg1: float, arg2: boolean): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRendererAccessor$$Type = ((arg0: $Camera, arg1: float, arg2: boolean) => double);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameRendererAccessor_ = $GameRendererAccessor$$Type;
}}
declare module "net.createmod.ponder.mixin.client.accessor.ClientPacketListenerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ClientPacketListenerAccessor {

 "catnip$getServerChunkRadius"(): integer

(): integer
}

export namespace $ClientPacketListenerAccessor {
const probejs$$marker: never
}
export class $ClientPacketListenerAccessor$$Static implements $ClientPacketListenerAccessor {


 "catnip$getServerChunkRadius"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientPacketListenerAccessor$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientPacketListenerAccessor_ = $ClientPacketListenerAccessor$$Type;
}}
declare module "net.createmod.catnip.gui.element.DelegatedStencilElement" {
import {$ScreenElement, $ScreenElement$$Type} from "net.createmod.catnip.gui.element.ScreenElement"
import {$RenderElement, $RenderElement$$Type} from "net.createmod.catnip.gui.element.RenderElement"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$StencilElement, $StencilElement$$Type} from "net.createmod.catnip.gui.element.StencilElement"
import {$AbstractRenderElement, $AbstractRenderElement$$Type} from "net.createmod.catnip.gui.element.AbstractRenderElement"
import {$FadableScreenElement, $FadableScreenElement$$Type} from "net.createmod.catnip.gui.element.FadableScreenElement"

export class $DelegatedStencilElement extends $AbstractRenderElement implements $StencilElement {
static "EMPTY": $RenderElement

constructor()
constructor(arg0: $FadableScreenElement$$Type, arg1: $FadableScreenElement$$Type)

public "renderElement"(arg0: $GuiGraphics$$Type): void
public "withElementRenderer"<T extends $DelegatedStencilElement>(arg0: $FadableScreenElement$$Type): T
public "withStencilRenderer"<T extends $DelegatedStencilElement>(arg0: $FadableScreenElement$$Type): T
public "renderStencil"(arg0: $GuiGraphics$$Type): void
public "transform"(arg0: $GuiGraphics$$Type): void
public "render"(arg0: $GuiGraphics$$Type): void
public "cleanUp"(arg0: $GuiGraphics$$Type): void
public "prepareStencil"(arg0: $GuiGraphics$$Type): void
public "prepareElement"(arg0: $GuiGraphics$$Type): void
public static "of"(arg0: $ScreenElement$$Type): $RenderElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DelegatedStencilElement$$Type = ($DelegatedStencilElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DelegatedStencilElement_ = $DelegatedStencilElement$$Type;
}}
declare module "net.createmod.ponder.mixin.client.accessor.ParticleEngineAccessor" {
import {$ParticleProvider, $ParticleProvider$$Type} from "net.minecraft.client.particle.ParticleProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"

export interface $ParticleEngineAccessor {

 "ponder$getProviders"(): $Map<($ResourceLocation), ($ParticleProvider<(any)>)>

(): $Map$$Type<($ResourceLocation$$Type), ($ParticleProvider$$Type<(any)>)>
}

export namespace $ParticleEngineAccessor {
const probejs$$marker: never
}
export class $ParticleEngineAccessor$$Static implements $ParticleEngineAccessor {


 "ponder$getProviders"(): $Map<($ResourceLocation), ($ParticleProvider<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleEngineAccessor$$Type = (() => $Map$$Type<($ResourceLocation$$Type), ($ParticleProvider$$Type<(any)>)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleEngineAccessor_ = $ParticleEngineAccessor$$Type;
}}
declare module "net.createmod.catnip.config.ConfigBase$ConfigBool" {
import {$ConfigBase, $ConfigBase$$Type} from "net.createmod.catnip.config.ConfigBase"
import {$ConfigBase$CValue, $ConfigBase$CValue$$Type} from "net.createmod.catnip.config.ConfigBase$CValue"
import {$ModConfigSpec$BooleanValue, $ModConfigSpec$BooleanValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$BooleanValue"

export class $ConfigBase$ConfigBool extends $ConfigBase$CValue<(boolean), ($ModConfigSpec$BooleanValue)> {

constructor(arg0: $ConfigBase$$Type, arg1: StringJS, arg2: boolean, ...arg3: (StringJS)[])

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBase$ConfigBool$$Type = ($ConfigBase$ConfigBool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigBase$ConfigBool_ = $ConfigBase$ConfigBool$$Type;
}}
declare module "net.createmod.catnip.config.ConfigBase$ConfigGroup" {
import {$ConfigBase, $ConfigBase$$Type} from "net.createmod.catnip.config.ConfigBase"
import {$ConfigBase$CValue, $ConfigBase$CValue$$Type} from "net.createmod.catnip.config.ConfigBase$CValue"
import {$ModConfigSpec$BooleanValue, $ModConfigSpec$BooleanValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$BooleanValue"
import {$ModConfigSpec$Builder, $ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $ConfigBase$ConfigGroup extends $ConfigBase$CValue<(boolean), ($ModConfigSpec$BooleanValue)> {

constructor(arg0: $ConfigBase$$Type, arg1: StringJS, arg2: integer, ...arg3: (StringJS)[])

public "register"(arg0: $ModConfigSpec$Builder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBase$ConfigGroup$$Type = ($ConfigBase$ConfigGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigBase$ConfigGroup_ = $ConfigBase$ConfigGroup$$Type;
}}
declare module "net.createmod.catnip.net.base.ClientboundPacketPayload" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$PacketFlow, $PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$BasePacketPayload, $BasePacketPayload$$Type} from "net.createmod.catnip.net.base.BasePacketPayload"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$CustomPacketPayload$Type, $CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder, $StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$BasePacketPayload$PacketTypeProvider, $BasePacketPayload$PacketTypeProvider$$Type} from "net.createmod.catnip.net.base.BasePacketPayload$PacketTypeProvider"
import {$StreamMemberEncoder, $StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ServerboundCustomPayloadPacket, $ServerboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$LocalPlayer, $LocalPlayer$$Type} from "net.minecraft.client.player.LocalPlayer"
import {$ClientboundCustomPayloadPacket, $ClientboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$ConnectionProtocol, $ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec, $CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$CustomPacketPayload$FallbackProvider, $CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"

export interface $ClientboundPacketPayload extends $BasePacketPayload {

 "handle"(arg0: $LocalPlayer$$Type): void
 "handleInternal"(arg0: $Player$$Type): void
 "type"(): $CustomPacketPayload$Type<($CustomPacketPayload)>
 "getTypeProvider"(): $BasePacketPayload$PacketTypeProvider
 "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
 "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
get "typeProvider"(): $BasePacketPayload$PacketTypeProvider
}

export namespace $ClientboundPacketPayload {
function codec<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (any)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
function codec<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
function createType<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
const probejs$$marker: never
}
export class $ClientboundPacketPayload$$Static implements $ClientboundPacketPayload {


 "handle"(arg0: $LocalPlayer$$Type): void
 "handleInternal"(arg0: $Player$$Type): void
 "type"(): $CustomPacketPayload$Type<($CustomPacketPayload)>
 "getTypeProvider"(): $BasePacketPayload$PacketTypeProvider
static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (any)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
static "createType"<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
 "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
 "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundPacketPayload$$Type = ($ClientboundPacketPayload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientboundPacketPayload_ = $ClientboundPacketPayload$$Type;
}}
declare module "net.createmod.catnip.math.VoxelShaper" {
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export class $VoxelShaper {

constructor()

public "get"(arg0: $Direction$$Type): $VoxelShape
public "get"(arg0: $Direction$Axis$$Type): $VoxelShape
public static "forAxis"(arg0: $VoxelShape$$Type, arg1: $Direction$Axis$$Type): $VoxelShaper
public "withShape"(arg0: $VoxelShape$$Type, arg1: $Direction$$Type): $VoxelShaper
public static "forHorizontal"(arg0: $VoxelShape$$Type, arg1: $Direction$$Type): $VoxelShaper
public static "forDirectional"(arg0: $VoxelShape$$Type, arg1: $Direction$$Type): $VoxelShaper
public static "axisAsFace"(arg0: $Direction$Axis$$Type): $Direction
public static "forHorizontalAxis"(arg0: $VoxelShape$$Type, arg1: $Direction$Axis$$Type): $VoxelShaper
public "withVerticalShapes"(arg0: $VoxelShape$$Type): $VoxelShaper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoxelShaper$$Type = ($VoxelShaper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoxelShaper_ = $VoxelShaper$$Type;
}}
declare module "net.createmod.catnip.data.TriState" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $TriState extends $Enum<($TriState)> {
static readonly "TRUE": $TriState
static readonly "FALSE": $TriState
static readonly "DEFAULT": $TriState


public "isDefault"(): boolean
public "isFalse"(): boolean
public static "values"(): ($TriState)[]
public static "valueOf"(arg0: StringJS): $TriState
public "getValue"(): boolean
public "isTrue"(): boolean
get "default"(): boolean
get "false"(): boolean
get "value"(): boolean
get "true"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriState$$Type = (("true") | ("default") | ("false"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriState_ = $TriState$$Type;
}}
declare module "net.createmod.catnip.gui.element.ScreenElement" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $ScreenElement {

 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void

(arg0: $GuiGraphics, arg1: integer, arg2: integer): void
}

export namespace $ScreenElement {
const probejs$$marker: never
}
export class $ScreenElement$$Static implements $ScreenElement {


 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenElement$$Type = ((arg0: $GuiGraphics, arg1: integer, arg2: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenElement_ = $ScreenElement$$Type;
}}
declare module "net.createmod.catnip.config.ConfigBase" {
import {$ModConfigSpec, $ModConfigSpec$$Type} from "net.neoforged.neoforge.common.ModConfigSpec"
import {$ModConfigSpec$Builder, $ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $ConfigBase {
 "specification": $ModConfigSpec

constructor()

public "getName"(): StringJS
public "onLoad"(): void
public "registerAll"(arg0: $ModConfigSpec$Builder$$Type): void
public "onReload"(): void
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBase$$Type = ($ConfigBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigBase_ = $ConfigBase$$Type;
}}
declare module "net.createmod.catnip.math.Pointing" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"

export class $Pointing extends $Enum<($Pointing)> implements $StringRepresentable {
static readonly "DOWN": $Pointing
static readonly "LEFT": $Pointing
static readonly "RIGHT": $Pointing
static readonly "UP": $Pointing


public static "values"(): ($Pointing)[]
public static "valueOf"(arg0: StringJS): $Pointing
public "getXRotation"(): integer
public "getCombinedDirection"(arg0: $Direction$$Type): $Direction
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "xRotation"(): integer
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pointing$$Type = (("up") | ("left") | ("down") | ("right"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pointing_ = $Pointing$$Type;
}}
declare module "net.createmod.catnip.lang.LangBuilder" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Color, $Color$$Type} from "net.createmod.catnip.theme.Color"
import {$List, $List$$Type} from "java.util.List"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ChatFormatting, $ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $LangBuilder {
static readonly "DEFAULT_SPACE_WIDTH": float

constructor(arg0: StringJS)

public "string"(): StringJS
public "text"(arg0: integer, arg1: StringJS): $LangBuilder
public "text"(arg0: StringJS): $LangBuilder
public "text"(arg0: $ChatFormatting$$Type, arg1: StringJS): $LangBuilder
public "color"(arg0: $Color$$Type): $LangBuilder
public "color"(arg0: integer): $LangBuilder
public "addTo"(arg0: $List$$Type<($MutableComponent$$Type)>): void
public "space"(): $LangBuilder
public "add"(arg0: $Component$$Type): $LangBuilder
public "add"(arg0: $LangBuilder$$Type): $LangBuilder
public "add"(arg0: $MutableComponent$$Type): $LangBuilder
public "component"(): $MutableComponent
public "newLine"(): $LangBuilder
public "json"(): StringJS
public "style"(arg0: $ChatFormatting$$Type): $LangBuilder
public "sendStatus"(arg0: $Player$$Type): void
public "sendChat"(arg0: $Player$$Type): void
public "translate"(arg0: StringJS, ...arg1: (any)[]): $LangBuilder
public "forGoggles"(arg0: $List$$Type<($MutableComponent$$Type)>, arg1: integer): void
public "forGoggles"(arg0: $List$$Type<($MutableComponent$$Type)>): void
public static "resolveBuilders"(arg0: (any)[]): (any)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LangBuilder$$Type = ($LangBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LangBuilder_ = $LangBuilder$$Type;
}}
declare module "net.createmod.catnip.net.base.BasePacketPayload" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$PacketFlow, $PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$CustomPacketPayload$Type, $CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder, $StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$BasePacketPayload$PacketTypeProvider, $BasePacketPayload$PacketTypeProvider$$Type} from "net.createmod.catnip.net.base.BasePacketPayload$PacketTypeProvider"
import {$StreamMemberEncoder, $StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$ServerboundCustomPayloadPacket, $ServerboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ClientboundCustomPayloadPacket, $ClientboundCustomPayloadPacket$$Type} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$ConnectionProtocol, $ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec, $CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$CustomPacketPayload$FallbackProvider, $CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"

export interface $BasePacketPayload extends $CustomPacketPayload {

 "type"(): $CustomPacketPayload$Type<($CustomPacketPayload)>
 "getTypeProvider"(): $BasePacketPayload$PacketTypeProvider
 "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
 "toVanillaServerbound"(): $ServerboundCustomPayloadPacket

(): $BasePacketPayload$PacketTypeProvider$$Type
get "typeProvider"(): $BasePacketPayload$PacketTypeProvider
}

export namespace $BasePacketPayload {
function codec<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (any)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
function codec<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
function createType<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
const probejs$$marker: never
}
export class $BasePacketPayload$$Static implements $BasePacketPayload {


 "type"(): $CustomPacketPayload$Type<($CustomPacketPayload)>
 "getTypeProvider"(): $BasePacketPayload$PacketTypeProvider
static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (any)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
static "createType"<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
 "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
 "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasePacketPayload$$Type = (() => $BasePacketPayload$PacketTypeProvider$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasePacketPayload_ = $BasePacketPayload$$Type;
}}
declare module "net.createmod.catnip.levelWrappers.WrappedLevel" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$LevelLightEngine, $LevelLightEngine$$Type} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$MapId, $MapId$$Type} from "net.minecraft.world.level.saveddata.maps.MapId"
import {$LevelHeightAccessor, $LevelHeightAccessor$$Type} from "net.minecraft.world.level.LevelHeightAccessor"
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$BlockSnapshot, $BlockSnapshot$$Type} from "net.neoforged.neoforge.common.util.BlockSnapshot"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ChunkSource, $ChunkSource$$Type} from "net.minecraft.world.level.chunk.ChunkSource"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$GameEvent, $GameEvent$$Type} from "net.minecraft.world.level.gameevent.GameEvent"
import {$SoundSource, $SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$TickRateManager, $TickRateManager$$Type} from "net.minecraft.world.TickRateManager"
import {$MapItemSavedData, $MapItemSavedData$$Type} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ArrayList, $ArrayList$$Type} from "java.util.ArrayList"
import {$GameEvent$Context, $GameEvent$Context$$Type} from "net.minecraft.world.level.gameevent.GameEvent$Context"
import {$TickingBlockEntity, $TickingBlockEntity$$Type} from "net.minecraft.world.level.block.entity.TickingBlockEntity"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$RecipeManager, $RecipeManager$$Type} from "net.minecraft.world.item.crafting.RecipeManager"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelTickAccess, $LevelTickAccess$$Type} from "net.minecraft.world.ticks.LevelTickAccess"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Scoreboard, $Scoreboard$$Type} from "net.minecraft.world.scores.Scoreboard"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$PotionBrewing, $PotionBrewing$$Type} from "net.minecraft.world.item.alchemy.PotionBrewing"

export class $WrappedLevel extends $Level {
 "restoringBlockSnapshots": boolean
 "oThunderLevel": float
static readonly "LONG_PARTICLE_CLIP_RANGE": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "thread": $Thread
 "thunderLevel": float
readonly "random": $RandomSource
 "capturedBlockSnapshots": $ArrayList<($BlockSnapshot)>
static readonly "OVERWORLD": $ResourceKey<($Level)>
static readonly "TICKS_PER_DAY": integer
static readonly "MAX_ENTITY_SPAWN_Y": integer
static readonly "NETHER": $ResourceKey<($Level)>
 "oRainLevel": float
static readonly "RESOURCE_KEY_CODEC": $Codec<($ResourceKey<($Level)>)>
static readonly "MAX_BRIGHTNESS": integer
static readonly "END": $ResourceKey<($Level)>
static readonly "MAX_LEVEL_SIZE": integer
static readonly "SHORT_PARTICLE_CLIP_RANGE": integer
static readonly "MIN_ENTITY_SPAWN_Y": integer
readonly "blockEntityTickers": $List<($TickingBlockEntity)>
 "rainLevel": float
 "captureBlockSnapshots": boolean

constructor(arg0: $Level$$Type)

public "getLevel"(): $Level
public "getEntity"(arg0: integer): $Entity
public "levelEvent"(arg0: $Player$$Type, arg1: integer, arg2: $BlockPos$$Type, arg3: integer): void
public "playSound"(arg0: $Player$$Type, arg1: double, arg2: double, arg3: double, arg4: $SoundEvent$$Type, arg5: $SoundSource$$Type, arg6: float, arg7: float): void
public "playSound"(arg0: $Player$$Type, arg1: $Entity$$Type, arg2: $SoundEvent$$Type, arg3: $SoundSource$$Type, arg4: float, arg5: float): void
public "addFreshEntity"(arg0: $Entity$$Type): boolean
public "getBlockTicks"(): $LevelTickAccess<($Block)>
public "getFluidTicks"(): $LevelTickAccess<($Fluid)>
public "getShade"(arg0: $Direction$$Type, arg1: boolean): float
public "getMaxSection"(): integer
public "getMinSection"(): integer
public "getLightEngine"(): $LevelLightEngine
public "getMapData"(arg0: $MapId$$Type): $MapItemSavedData
public "setMapData"(arg0: $MapId$$Type, arg1: $MapItemSavedData$$Type): void
public "getFreeMapId"(): $MapId
public "potionBrewing"(): $PotionBrewing
public "players"(): $List<($Player)>
public "getChunkSource"(): $ChunkSource
public "getBlockState"(arg0: $BlockPos$$Type): $BlockState
public "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
public "registryAccess"(): $RegistryAccess
public "gameEvent"(arg0: $Holder$$Type<($GameEvent)>, arg1: $Vec3$$Type, arg2: $GameEvent$Context$$Type): void
public "gameEvent"(arg0: $Entity$$Type, arg1: $Holder$$Type<($GameEvent)>, arg2: $Vec3$$Type): void
public "getScoreboard"(): $Scoreboard
public "setBlock"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: integer): boolean
public "setChunkSource"(arg0: $ChunkSource$$Type): void
public "getDayTimeFraction"(): float
public "getMaxBuildHeight"(): integer
public "isOutsideBuildHeight"(arg0: integer): boolean
public "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
public "sendBlockUpdated"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type, arg3: integer): void
public "gatherChunkSourceStats"(): StringJS
public "destroyBlockProgress"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "isStateAtPosition"(arg0: $BlockPos$$Type, arg1: $Predicate$$Type<($BlockState)>): boolean
public "getRecipeManager"(): $RecipeManager
public "setDayTimeFraction"(arg0: float): void
public "getDayTimePerTick"(): float
public "setDayTimePerTick"(arg0: float): void
public "getSectionIndex"(arg0: integer): integer
public "getUncachedNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
public "getSectionsCount"(): integer
public "enabledFeatures"(): $FeatureFlagSet
public "tickRateManager"(): $TickRateManager
public "playSeededSound"(arg0: $Player$$Type, arg1: $Entity$$Type, arg2: $Holder$$Type<($SoundEvent)>, arg3: $SoundSource$$Type, arg4: float, arg5: float, arg6: long): void
public "playSeededSound"(arg0: $Player$$Type, arg1: double, arg2: double, arg3: double, arg4: $Holder$$Type<($SoundEvent)>, arg5: $SoundSource$$Type, arg6: float, arg7: float, arg8: long): void
public "getMaxLocalRawBrightness"(arg0: $BlockPos$$Type): integer
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "getSectionYFromSectionIndex"(arg0: integer): integer
public "updateNeighbourForOutputSignal"(arg0: $BlockPos$$Type, arg1: $Block$$Type): void
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "getHeight"(): integer
public "getMinBuildHeight"(): integer
public static "getAllLoadedEntities"(level: $Level$$Type): $Iterable<($Entity)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
get "level"(): $Level
get "blockTicks"(): $LevelTickAccess<($Block)>
get "fluidTicks"(): $LevelTickAccess<($Fluid)>
get "maxSection"(): integer
get "minSection"(): integer
get "lightEngine"(): $LevelLightEngine
get "freeMapId"(): $MapId
get "chunkSource"(): $ChunkSource
get "scoreboard"(): $Scoreboard
set "chunkSource"(value: $ChunkSource$$Type)
get "dayTimeFraction"(): float
get "maxBuildHeight"(): integer
get "recipeManager"(): $RecipeManager
set "dayTimeFraction"(value: float)
get "dayTimePerTick"(): float
set "dayTimePerTick"(value: float)
get "sectionsCount"(): integer
get "height"(): integer
get "minBuildHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedLevel$$Type = ($WrappedLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrappedLevel_ = $WrappedLevel$$Type;
}}
declare module "net.createmod.catnip.gui.widget.AbstractSimiWidget" {
import {$NarrationElementOutput, $NarrationElementOutput$$Type} from "net.minecraft.client.gui.narration.NarrationElementOutput"
import {$PositionedRectangle, $PositionedRectangle$$Type} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$List, $List$$Type} from "java.util.List"
import {$AbstractWidget, $AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Component as $Component$0, $Component$$Type as $Component$0$$Type} from "io.wispforest.owo.ui.core.Component"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$TickableGuiEventListener, $TickableGuiEventListener$$Type} from "net.createmod.catnip.gui.TickableGuiEventListener"
import {$Color, $Color$$Type} from "net.createmod.catnip.theme.Color"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Couple, $Couple$$Type} from "net.createmod.catnip.data.Couple"
import {$Size, $Size$$Type} from "io.wispforest.owo.ui.core.Size"

export class $AbstractSimiWidget extends $AbstractWidget implements $TickableGuiEventListener {
static readonly "COLOR_SUCCESS": $Couple<($Color)>
 "visible": boolean
static readonly "HEADER_RGB": $Color
 "lockedTooltipY": integer
static readonly "COLOR_HOVER": $Couple<($Color)>
 "active": boolean
static readonly "COLOR_CLICK": $Couple<($Color)>
static readonly "UNSET_FG_COLOR": integer
static readonly "HINT_RGB": $Color
static readonly "COLOR_IDLE": $Couple<($Color)>
 "lockedTooltipX": integer
 "focused": boolean
static readonly "COLOR_DISABLED": $Couple<($Color)>
static readonly "COLOR_FAIL": $Couple<($Color)>


public "tick"(): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "setHeight"(arg0: integer): void
public "setActive"<T extends $AbstractSimiWidget>(arg0: boolean): T
public "onClick"(arg0: double, arg1: double): void
public "getToolTip"(): $List<($Component)>
public "withCallback"<T extends $AbstractSimiWidget>(arg0: $Runnable$$Type): T
public "withCallback"<T extends $AbstractSimiWidget>(arg0: $BiConsumer$$Type<(integer), (integer)>): T
public "updateWidgetNarration"(arg0: $NarrationElementOutput$$Type): void
public "atZLevel"<T extends $AbstractSimiWidget>(arg0: float): T
public "runCallback"(arg0: double, arg1: double): void
public static "bypassCheck"(component: $Component$0$$Type, runnable: $Runnable$$Type): void
public static "bookshelf$renderScrollingString"(arg0: $GuiGraphics$$Type, arg1: $Font$$Type, arg2: $Component$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer): void
public static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
public static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
set "height"(value: integer)
set "active"(value: boolean)
get "toolTip"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractSimiWidget$$Type = ($AbstractSimiWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractSimiWidget_ = $AbstractSimiWidget$$Type;
}}
declare module "net.createmod.catnip.gui.element.FadableScreenElement" {
import {$ScreenElement, $ScreenElement$$Type} from "net.createmod.catnip.gui.element.ScreenElement"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $FadableScreenElement extends $ScreenElement {

 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void

(arg0: $GuiGraphics, arg1: integer, arg2: integer, arg3: float): void
}

export namespace $FadableScreenElement {
const probejs$$marker: never
}
export class $FadableScreenElement$$Static implements $FadableScreenElement {


 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FadableScreenElement$$Type = ((arg0: $GuiGraphics, arg1: integer, arg2: integer, arg3: float) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FadableScreenElement_ = $FadableScreenElement$$Type;
}}
declare module "net.createmod.catnip.gui.TickableGuiEventListener" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$FocusNavigationEvent, $FocusNavigationEvent$$Type} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$ScreenRectangle, $ScreenRectangle$$Type} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$ComponentPath, $ComponentPath$$Type} from "net.minecraft.client.gui.ComponentPath"

export interface $TickableGuiEventListener extends $GuiEventListener {

 "tick"(): void
 "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
 "nextFocusPath"(arg0: $FocusNavigationEvent$$Type): $ComponentPath
 "isMouseOver"(arg0: double, arg1: double): boolean
 "getRectangle"(): $ScreenRectangle
 "setFocused"(arg0: boolean): void
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
 "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
 "charTyped"(arg0: character, arg1: integer): boolean
 "isFocused"(): boolean
 "mouseMoved"(arg0: double, arg1: double): void
 "getCurrentFocusPath"(): $ComponentPath
 "getTabOrderGroup"(): integer
get "rectangle"(): $ScreenRectangle
set "focused"(value: boolean)
get "focused"(): boolean
get "currentFocusPath"(): $ComponentPath
get "tabOrderGroup"(): integer
}

export namespace $TickableGuiEventListener {
const probejs$$marker: never
}
export class $TickableGuiEventListener$$Static implements $TickableGuiEventListener {


 "tick"(): void
 "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
 "nextFocusPath"(arg0: $FocusNavigationEvent$$Type): $ComponentPath
 "isMouseOver"(arg0: double, arg1: double): boolean
 "getRectangle"(): $ScreenRectangle
 "setFocused"(arg0: boolean): void
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
 "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
 "charTyped"(arg0: character, arg1: integer): boolean
 "isFocused"(): boolean
 "mouseMoved"(arg0: double, arg1: double): void
 "getCurrentFocusPath"(): $ComponentPath
 "getTabOrderGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickableGuiEventListener$$Type = ($TickableGuiEventListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickableGuiEventListener_ = $TickableGuiEventListener$$Type;
}}
declare module "net.createmod.catnip.net.base.BasePacketPayload$PacketTypeProvider" {
import {$CustomPacketPayload$Type, $CustomPacketPayload$Type$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$CustomPacketPayload, $CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"

export interface $BasePacketPayload$PacketTypeProvider {

 "getType"<T extends $CustomPacketPayload>(): $CustomPacketPayload$Type<(T)>

(): $CustomPacketPayload$Type$$Type<(T)>
get "type"(): $CustomPacketPayload$Type<(T)>
}

export namespace $BasePacketPayload$PacketTypeProvider {
const probejs$$marker: never
}
export class $BasePacketPayload$PacketTypeProvider$$Static implements $BasePacketPayload$PacketTypeProvider {


 "getType"<T extends $CustomPacketPayload>(): $CustomPacketPayload$Type<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasePacketPayload$PacketTypeProvider$$Type = (() => $CustomPacketPayload$Type$$Type<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasePacketPayload$PacketTypeProvider_ = $BasePacketPayload$PacketTypeProvider$$Type;
}}
declare module "net.createmod.catnip.render.SpriteShiftEntry" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export class $SpriteShiftEntry {

constructor()

public "getTarget"(): $TextureAtlasSprite
public "set"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): void
public "getTargetU"(arg0: float): float
public "getTargetV"(arg0: float): float
public "getOriginal"(): $TextureAtlasSprite
public static "getUnInterpolatedU"(arg0: $TextureAtlasSprite$$Type, arg1: float): float
public static "getUnInterpolatedV"(arg0: $TextureAtlasSprite$$Type, arg1: float): float
public "getOriginalResourceLocation"(): $ResourceLocation
public "getTargetResourceLocation"(): $ResourceLocation
get "target"(): $TextureAtlasSprite
get "original"(): $TextureAtlasSprite
get "originalResourceLocation"(): $ResourceLocation
get "targetResourceLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteShiftEntry$$Type = ($SpriteShiftEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteShiftEntry_ = $SpriteShiftEntry$$Type;
}}
declare module "net.createmod.catnip.data.IntAttached" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Pair, $Pair$$Type} from "net.createmod.catnip.data.Pair"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $IntAttached<V> extends $Pair<(integer), (V)> {


public static "comparator"(): $Comparator<($IntAttached<(any)>)>
public "decrement"(): void
public "isZero"(): boolean
public "getValue"(): V
public "increment"(): void
public static "read"<T>(arg0: $CompoundTag$$Type, arg1: $Function$$Type<($CompoundTag), (T)>): $IntAttached<(T)>
public static "with"<V>(arg0: integer, arg1: V): $IntAttached<(V)>
public static "codec"<T>(arg0: $Codec$$Type<(T)>): $Codec<($IntAttached<(T)>)>
public "serializeNBT"(arg0: $Function$$Type<(V), ($CompoundTag$$Type)>): $CompoundTag
public static "streamCodec"<B extends $ByteBuf, T>(arg0: $StreamCodec$$Type<(B), (T)>): $StreamCodec<(B), ($IntAttached<(T)>)>
public "exceeds"(arg0: integer): boolean
public static "withZero"<V>(arg0: V): $IntAttached<(V)>
public "isOrBelowZero"(): boolean
get "zero"(): boolean
get "value"(): V
get "orBelowZero"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntAttached$$Type<V> = ($IntAttached<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntAttached_<V> = $IntAttached$$Type<(V)>;
}}
declare module "net.createmod.catnip.gui.TextureSheetSegment" {
import {$BindableTexture, $BindableTexture$$Type} from "net.createmod.catnip.render.BindableTexture"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export interface $TextureSheetSegment extends $BindableTexture {

 "getWidth"(): integer
 "getHeight"(): integer
 "getStartX"(): integer
 "getStartY"(): integer
 "bind"(): void
 "getLocation"(): $ResourceLocation
get "width"(): integer
get "height"(): integer
get "startX"(): integer
get "startY"(): integer
get "location"(): $ResourceLocation
}

export namespace $TextureSheetSegment {
const probejs$$marker: never
}
export class $TextureSheetSegment$$Static implements $TextureSheetSegment {


 "getWidth"(): integer
 "getHeight"(): integer
 "getStartX"(): integer
 "getStartY"(): integer
 "bind"(): void
 "getLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureSheetSegment$$Type = ($TextureSheetSegment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextureSheetSegment_ = $TextureSheetSegment$$Type;
}}
declare module "net.createmod.catnip.gui.element.StencilElement" {
import {$ScreenElement, $ScreenElement$$Type} from "net.createmod.catnip.gui.element.ScreenElement"
import {$RenderElement, $RenderElement$$Type} from "net.createmod.catnip.gui.element.RenderElement"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $StencilElement extends $RenderElement {

 "transform"(arg0: $GuiGraphics$$Type): void
 "render"(arg0: $GuiGraphics$$Type): void
 "cleanUp"(arg0: $GuiGraphics$$Type): void
 "renderElement"(arg0: $GuiGraphics$$Type): void
 "prepareStencil"(arg0: $GuiGraphics$$Type): void
 "prepareElement"(arg0: $GuiGraphics$$Type): void
 "renderStencil"(arg0: $GuiGraphics$$Type): void
 "at"<T extends $RenderElement>(arg0: float, arg1: float, arg2: float): T
 "at"<T extends $RenderElement>(arg0: float, arg1: float): T
 "getWidth"(): integer
 "getHeight"(): integer
 "getY"(): float
 "getX"(): float
 "getZ"(): float
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
 "withBounds"<T extends $RenderElement>(arg0: integer, arg1: integer): T
 "withAlpha"<T extends $RenderElement>(arg0: float): T
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
get "width"(): integer
get "height"(): integer
get "y"(): float
get "x"(): float
get "z"(): float
}

export namespace $StencilElement {
function of(arg0: $ScreenElement$$Type): $RenderElement
const probejs$$marker: never
}
export class $StencilElement$$Static implements $StencilElement {


 "transform"(arg0: $GuiGraphics$$Type): void
 "render"(arg0: $GuiGraphics$$Type): void
 "cleanUp"(arg0: $GuiGraphics$$Type): void
 "renderElement"(arg0: $GuiGraphics$$Type): void
 "prepareStencil"(arg0: $GuiGraphics$$Type): void
 "prepareElement"(arg0: $GuiGraphics$$Type): void
 "renderStencil"(arg0: $GuiGraphics$$Type): void
 "at"<T extends $RenderElement>(arg0: float, arg1: float, arg2: float): T
 "at"<T extends $RenderElement>(arg0: float, arg1: float): T
 "getWidth"(): integer
 "getHeight"(): integer
static "of"(arg0: $ScreenElement$$Type): $RenderElement
 "getY"(): float
 "getX"(): float
 "getZ"(): float
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
 "withBounds"<T extends $RenderElement>(arg0: integer, arg1: integer): T
 "withAlpha"<T extends $RenderElement>(arg0: float): T
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StencilElement$$Type = ($StencilElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StencilElement_ = $StencilElement$$Type;
}}
declare module "net.createmod.catnip.config.ConfigBase$ConfigInt" {
import {$ConfigBase, $ConfigBase$$Type} from "net.createmod.catnip.config.ConfigBase"
import {$ConfigBase$CValue, $ConfigBase$CValue$$Type} from "net.createmod.catnip.config.ConfigBase$CValue"
import {$ModConfigSpec$IntValue, $ModConfigSpec$IntValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$IntValue"

export class $ConfigBase$ConfigInt extends $ConfigBase$CValue<(integer), ($ModConfigSpec$IntValue)> {

constructor(arg0: $ConfigBase$$Type, arg1: StringJS, arg2: integer, arg3: integer, arg4: integer, ...arg5: (StringJS)[])

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBase$ConfigInt$$Type = ($ConfigBase$ConfigInt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigBase$ConfigInt_ = $ConfigBase$ConfigInt$$Type;
}}
declare module "net.createmod.catnip.animation.LerpedFloat" {
import {$LerpedFloat$Chaser, $LerpedFloat$Chaser$$Type} from "net.createmod.catnip.animation.LerpedFloat$Chaser"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LerpedFloat$Interpolator, $LerpedFloat$Interpolator$$Type} from "net.createmod.catnip.animation.LerpedFloat$Interpolator"

export class $LerpedFloat {

constructor(arg0: $LerpedFloat$Interpolator$$Type)

public "getValue"(arg0: float): float
public "getValue"(): float
public "setValue"(arg0: double): void
public static "linear"(): $LerpedFloat
public "chase"(arg0: double, arg1: double, arg2: $LerpedFloat$Chaser$$Type): $LerpedFloat
public "settled"(): boolean
public "chaseTimed"(arg0: double, arg1: integer): $LerpedFloat
public "forceNextSync"(): void
public "readNBT"(arg0: $CompoundTag$$Type, arg1: boolean): void
public static "angular"(): $LerpedFloat
public "startWithValue"(arg0: double): $LerpedFloat
public "tickChaser"(): void
public "getChaseTarget"(): float
public "writeNBT"(): $CompoundTag
public "updateChaseTarget"(arg0: float): void
public "setValueNoUpdate"(arg0: double): void
public "updateChaseSpeed"(arg0: double): boolean
public "disableSmartAngleChasing"(): $LerpedFloat
get "value"(): float
set "value"(value: double)
get "chaseTarget"(): float
set "valueNoUpdate"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LerpedFloat$$Type = ($LerpedFloat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LerpedFloat_ = $LerpedFloat$$Type;
}}
declare module "net.createmod.ponder.api.VirtualBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VirtualBlockEntity {

 "isVirtual"(): boolean
 "markVirtual"(): void
get "virtual"(): boolean
}

export namespace $VirtualBlockEntity {
const probejs$$marker: never
}
export class $VirtualBlockEntity$$Static implements $VirtualBlockEntity {


 "isVirtual"(): boolean
 "markVirtual"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VirtualBlockEntity$$Type = ($VirtualBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VirtualBlockEntity_ = $VirtualBlockEntity$$Type;
}}
declare module "net.createmod.catnip.animation.LerpedFloat$Interpolator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LerpedFloat$Interpolator {

 "interpolate"(arg0: double, arg1: double, arg2: double): float

(arg0: double, arg1: double, arg2: double): float
}

export namespace $LerpedFloat$Interpolator {
const probejs$$marker: never
}
export class $LerpedFloat$Interpolator$$Static implements $LerpedFloat$Interpolator {


 "interpolate"(arg0: double, arg1: double, arg2: double): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LerpedFloat$Interpolator$$Type = ((arg0: double, arg1: double, arg2: double) => float);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LerpedFloat$Interpolator_ = $LerpedFloat$Interpolator$$Type;
}}
declare module "net.createmod.catnip.animation.LerpedFloat$Chaser" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LerpedFloat$Chaser {

 "chase"(arg0: double, arg1: double, arg2: double): float

(arg0: double, arg1: double, arg2: double): float
}

export namespace $LerpedFloat$Chaser {
const IDLE: $LerpedFloat$Chaser
const EXP: $LerpedFloat$Chaser
const LINEAR: $LerpedFloat$Chaser
function exp(arg0: double): $LerpedFloat$Chaser
const probejs$$marker: never
}
export class $LerpedFloat$Chaser$$Static implements $LerpedFloat$Chaser {
static readonly "IDLE": $LerpedFloat$Chaser
static readonly "EXP": $LerpedFloat$Chaser
static readonly "LINEAR": $LerpedFloat$Chaser


static "exp"(arg0: double): $LerpedFloat$Chaser
 "chase"(arg0: double, arg1: double, arg2: double): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LerpedFloat$Chaser$$Type = ((arg0: double, arg1: double, arg2: double) => float);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LerpedFloat$Chaser_ = $LerpedFloat$Chaser$$Type;
}}
declare module "net.createmod.catnip.config.ConfigBase$CValue" {
import {$ModConfigSpec$ConfigValue, $ModConfigSpec$ConfigValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$ConfigValue"
import {$ConfigBase, $ConfigBase$$Type} from "net.createmod.catnip.config.ConfigBase"
import {$ConfigBase$IValueProvider, $ConfigBase$IValueProvider$$Type} from "net.createmod.catnip.config.ConfigBase$IValueProvider"
import {$ModConfigSpec$Builder, $ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export class $ConfigBase$CValue<V, T extends $ModConfigSpec$ConfigValue<(V)>> {

constructor(arg0: $ConfigBase$$Type, arg1: StringJS, arg2: $ConfigBase$IValueProvider$$Type<(V), (T)>, ...arg3: (StringJS)[])

public "getName"(): StringJS
public "get"(): V
public "register"(arg0: $ModConfigSpec$Builder$$Type): void
public "set"(arg0: V): void
public "addComments"(arg0: $ModConfigSpec$Builder$$Type, ...arg1: (StringJS)[]): void
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBase$CValue$$Type<V, T> = ($ConfigBase$CValue<(V), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigBase$CValue_<V, T> = $ConfigBase$CValue$$Type<(V), (T)>;
}}
declare module "net.createmod.ponder.mixin.client.accessor.BufferBuilderAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BufferBuilderAccessor {

 "catnip$getVertices"(): integer

(): integer
}

export namespace $BufferBuilderAccessor {
const probejs$$marker: never
}
export class $BufferBuilderAccessor$$Static implements $BufferBuilderAccessor {


 "catnip$getVertices"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BufferBuilderAccessor$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BufferBuilderAccessor_ = $BufferBuilderAccessor$$Type;
}}
declare module "net.createmod.ponder.mixin.client.accessor.RenderTypeAccessor" {
import {$RenderType$CompositeState, $RenderType$CompositeState$$Type} from "net.minecraft.client.renderer.RenderType$CompositeState"
import {$VertexFormat$Mode, $VertexFormat$Mode$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import {$VertexFormat, $VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"
import {$RenderType$CompositeRenderType, $RenderType$CompositeRenderType$$Type} from "net.minecraft.client.renderer.RenderType$CompositeRenderType"

export interface $RenderTypeAccessor {

}

export namespace $RenderTypeAccessor {
function catnip$create(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: boolean, arg5: boolean, arg6: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
const probejs$$marker: never
}
export class $RenderTypeAccessor$$Static implements $RenderTypeAccessor {


static "catnip$create"(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: boolean, arg5: boolean, arg6: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTypeAccessor$$Type = ($RenderTypeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderTypeAccessor_ = $RenderTypeAccessor$$Type;
}}
declare module "net.createmod.catnip.data.WorldAttached" {
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $WorldAttached<T> {

constructor(arg0: $Function$$Type<($LevelAccessor), (T)>)

public "get"(arg0: $LevelAccessor$$Type): T
public "put"(arg0: $LevelAccessor$$Type, arg1: T): void
public "replace"(arg0: $LevelAccessor$$Type, arg1: $Consumer$$Type<(T)>): T
public "replace"(arg0: $LevelAccessor$$Type): T
public "empty"(arg0: $BiConsumer$$Type<($LevelAccessor), (T)>): void
public "empty"(arg0: $Consumer$$Type<(T)>): void
public static "invalidateWorld"(arg0: $LevelAccessor$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldAttached$$Type<T> = ($WorldAttached<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldAttached_<T> = $WorldAttached$$Type<(T)>;
}}
declare module "net.createmod.catnip.config.ConfigBase$IValueProvider" {
import {$ModConfigSpec$ConfigValue, $ModConfigSpec$ConfigValue$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$ConfigValue"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ModConfigSpec$Builder, $ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export interface $ConfigBase$IValueProvider<V, T extends $ModConfigSpec$ConfigValue<(V)>> extends $Function<($ModConfigSpec$Builder), (T)> {

 "compose"<V>(arg0: $Function$$Type<(V), ($ModConfigSpec$Builder$$Type)>): $Function<(V), ($ModConfigSpec$Builder)>
 "andThen"<V>(arg0: $Function$$Type<($ModConfigSpec$Builder), (V)>): $Function<($ModConfigSpec$Builder), (V)>
 "apply"(arg0: $ModConfigSpec$Builder$$Type): $ModConfigSpec$Builder

(arg0: $ModConfigSpec$Builder): $ModConfigSpec$Builder$$Type
}

export namespace $ConfigBase$IValueProvider {
function identity<T>(): $Function<($ModConfigSpec$Builder), ($ModConfigSpec$Builder)>
const probejs$$marker: never
}
export class $ConfigBase$IValueProvider$$Static<V, T extends $ModConfigSpec$ConfigValue<(V)>> implements $ConfigBase$IValueProvider {


 "compose"<V>(arg0: $Function$$Type<(V), ($ModConfigSpec$Builder$$Type)>): $Function<(V), ($ModConfigSpec$Builder)>
 "andThen"<V>(arg0: $Function$$Type<($ModConfigSpec$Builder), (V)>): $Function<($ModConfigSpec$Builder), (V)>
 "apply"(arg0: $ModConfigSpec$Builder$$Type): $ModConfigSpec$Builder
static "identity"<T>(): $Function<($ModConfigSpec$Builder), ($ModConfigSpec$Builder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigBase$IValueProvider$$Type<V, T> = ((arg0: $ModConfigSpec$Builder) => $ModConfigSpec$Builder$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigBase$IValueProvider_<V, T> = $ConfigBase$IValueProvider$$Type<(V), (T)>;
}}
declare module "net.createmod.catnip.gui.element.RenderElement" {
import {$ScreenElement, $ScreenElement$$Type} from "net.createmod.catnip.gui.element.ScreenElement"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$FadableScreenElement, $FadableScreenElement$$Type} from "net.createmod.catnip.gui.element.FadableScreenElement"

export interface $RenderElement extends $FadableScreenElement {

 "at"<T extends $RenderElement>(arg0: float, arg1: float, arg2: float): T
 "at"<T extends $RenderElement>(arg0: float, arg1: float): T
 "getWidth"(): integer
 "getHeight"(): integer
 "getY"(): float
 "getX"(): float
 "getZ"(): float
 "render"(arg0: $GuiGraphics$$Type): void
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
 "withBounds"<T extends $RenderElement>(arg0: integer, arg1: integer): T
 "withAlpha"<T extends $RenderElement>(arg0: float): T
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
get "width"(): integer
get "height"(): integer
get "y"(): float
get "x"(): float
get "z"(): float
}

export namespace $RenderElement {
function of(arg0: $ScreenElement$$Type): $RenderElement
const probejs$$marker: never
}
export class $RenderElement$$Static implements $RenderElement {


 "at"<T extends $RenderElement>(arg0: float, arg1: float, arg2: float): T
 "at"<T extends $RenderElement>(arg0: float, arg1: float): T
 "getWidth"(): integer
 "getHeight"(): integer
static "of"(arg0: $ScreenElement$$Type): $RenderElement
 "getY"(): float
 "getX"(): float
 "getZ"(): float
 "render"(arg0: $GuiGraphics$$Type): void
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
 "withBounds"<T extends $RenderElement>(arg0: integer, arg1: integer): T
 "withAlpha"<T extends $RenderElement>(arg0: float): T
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderElement$$Type = ($RenderElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderElement_ = $RenderElement$$Type;
}}
declare module "net.createmod.ponder.mixin.accessor.TimerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TimerAccessor {

 "catnip$getDeltaTickResidual"(): float

(): float
}

export namespace $TimerAccessor {
const probejs$$marker: never
}
export class $TimerAccessor$$Static implements $TimerAccessor {


 "catnip$getDeltaTickResidual"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimerAccessor$$Type = (() => float);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimerAccessor_ = $TimerAccessor$$Type;
}}
declare module "net.createmod.ponder.mixin.accessor.EntityAccessor" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export interface $EntityAccessor {

 "catnip$callSetLevel"(arg0: $Level$$Type): void

(arg0: $Level): void
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
export class $EntityAccessor$$Static implements $EntityAccessor {


 "catnip$callSetLevel"(arg0: $Level$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$$Type = ((arg0: $Level) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAccessor_ = $EntityAccessor$$Type;
}}
declare module "net.createmod.ponder.mixin.client.accessor.ItemRendererAccessor" {
import {$TextureManager, $TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"

export interface $ItemRendererAccessor {

 "catnip$getTextureManager"(): $TextureManager

(): $TextureManager$$Type
}

export namespace $ItemRendererAccessor {
const probejs$$marker: never
}
export class $ItemRendererAccessor$$Static implements $ItemRendererAccessor {


 "catnip$getTextureManager"(): $TextureManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRendererAccessor$$Type = (() => $TextureManager$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemRendererAccessor_ = $ItemRendererAccessor$$Type;
}}
declare module "net.createmod.ponder.mixin.client.accessor.ScreenAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"

export interface $ScreenAccessor {

 "catnip$getRenderables"(): $List<($Renderable)>

(): $List$$Type<($Renderable$$Type)>
}

export namespace $ScreenAccessor {
const probejs$$marker: never
}
export class $ScreenAccessor$$Static implements $ScreenAccessor {


 "catnip$getRenderables"(): $List<($Renderable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$$Type = (() => $List$$Type<($Renderable$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenAccessor_ = $ScreenAccessor$$Type;
}}
declare module "net.createmod.ponder.mixin.accessor.MinecraftServerAccessor" {
import {$LevelStorageSource$LevelStorageAccess, $LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"

export interface $MinecraftServerAccessor {

 "catnip$getStorageSource"(): $LevelStorageSource$LevelStorageAccess

(): $LevelStorageSource$LevelStorageAccess$$Type
}

export namespace $MinecraftServerAccessor {
const probejs$$marker: never
}
export class $MinecraftServerAccessor$$Static implements $MinecraftServerAccessor {


 "catnip$getStorageSource"(): $LevelStorageSource$LevelStorageAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServerAccessor$$Type = (() => $LevelStorageSource$LevelStorageAccess$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftServerAccessor_ = $MinecraftServerAccessor$$Type;
}}
declare module "net.createmod.catnip.theme.Color" {
import {$UnaryOperator, $UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Couple, $Couple$$Type} from "net.createmod.catnip.data.Couple"

export class $Color {
static readonly "RED": $Color
static readonly "TRANSPARENT_BLACK": $Color
static readonly "WHITE": $Color
static readonly "BLACK": $Color
static readonly "SPRING_GREEN": $Color
static readonly "PURPLE": $Color
static readonly "GREEN": $Color

constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: integer, arg1: boolean)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: float, arg1: float, arg2: float, arg3: float)
constructor(arg0: integer)

public "setImmutable"(): $Color
public "getRGB"(): integer
public "setValue"(arg0: integer): $Color
public "copy"(arg0: boolean): $Color
public "copy"(): $Color
public "setRed"(arg0: float): $Color
public "setRed"(arg0: integer): $Color
public "getRed"(): integer
public "getAlpha"(): integer
public static "rainbowColor"(arg0: integer): $Color
public "setAlpha"(arg0: float): $Color
public "setAlpha"(arg0: integer): $Color
public "darker"(): $Color
public "getRedAsFloat"(): float
public "getBlueAsFloat"(): float
public "asVector"(): $Vec3
public "asVectorF"(): $Vector3f
public "asStyle"(): $Style
public "ensureMutable"(): $Color
public "scaleAlpha"(arg0: float): $Color
public "brighter"(): $Color
public "modifyValue"(arg0: $UnaryOperator$$Type<(integer)>): $Color
public static "mixColors"(arg0: $Color$$Type, arg1: $Color$$Type, arg2: float): $Color
public static "mixColors"(arg0: integer, arg1: integer, arg2: float): integer
public static "mixColors"(arg0: $Couple$$Type<($Color$$Type)>, arg1: float): $Color
public "mixWith"(arg0: $Color$$Type, arg1: float): $Color
public "setGreen"(arg0: float): $Color
public "setGreen"(arg0: integer): $Color
public "setBlue"(arg0: integer): $Color
public "setBlue"(arg0: float): $Color
public "getGreen"(): integer
public "getBlue"(): integer
public "getGreenAsFloat"(): float
public "getAlphaAsFloat"(): float
public "scaleAlphaForText"(arg0: float): $Color
public static "generateFromLong"(arg0: long): $Color
get "rGB"(): integer
set "value"(value: integer)
set "red"(value: float)
set "red"(value: integer)
get "red"(): integer
get "alpha"(): integer
set "alpha"(value: float)
set "alpha"(value: integer)
get "redAsFloat"(): float
get "blueAsFloat"(): float
set "green"(value: float)
set "green"(value: integer)
set "blue"(value: integer)
set "blue"(value: float)
get "green"(): integer
get "blue"(): integer
get "greenAsFloat"(): float
get "alphaAsFloat"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color$$Type = ($Color);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Color_ = $Color$$Type;
}}
declare module "net.createmod.catnip.render.SuperByteBuffer" {
import {$Quaternionfc, $Quaternionfc$$Type} from "org.joml.Quaternionfc"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$TransformStack, $TransformStack$$Type} from "dev.engine_room.flywheel.lib.transform.TransformStack"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$PoseStack$Pose, $PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$Matrix4fc, $Matrix4fc$$Type} from "org.joml.Matrix4fc"
import {$Vector3ic, $Vector3ic$$Type} from "org.joml.Vector3ic"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Matrix3fc, $Matrix3fc$$Type} from "org.joml.Matrix3fc"
import {$Axis, $Axis$$Type} from "com.mojang.math.Axis"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$BlockAndTintGetter, $BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Color, $Color$$Type} from "net.createmod.catnip.theme.Color"
import {$SpriteShiftEntry, $SpriteShiftEntry$$Type} from "net.createmod.catnip.render.SpriteShiftEntry"
import {$Vector3fc, $Vector3fc$$Type} from "org.joml.Vector3fc"
import {$PoseTransformStack, $PoseTransformStack$$Type} from "dev.engine_room.flywheel.lib.transform.PoseTransformStack"
import {$AxisAngle4f, $AxisAngle4f$$Type} from "org.joml.AxisAngle4f"

export interface $SuperByteBuffer extends $TransformStack<($SuperByteBuffer)> {

 "rotate"<Self extends $SuperByteBuffer>(arg0: $Direction$Axis$$Type, arg1: float): Self
 "getTransforms"(): $PoseStack
 "color"<Self extends $SuperByteBuffer>(arg0: integer, arg1: integer, arg2: integer, arg3: integer): Self
 "color"<Self extends $SuperByteBuffer>(arg0: integer): Self
 "color"<Self extends $SuperByteBuffer>(arg0: $Color$$Type): Self
 "reset"<Self extends $SuperByteBuffer>(): Self
 "isEmpty"(): boolean
 "delete"(): void
 "light"<Self extends $SuperByteBuffer>(arg0: integer): Self
 "overlay"<Self extends $SuperByteBuffer>(arg0: integer): Self
 "useLevelLight"<Self extends $SuperByteBuffer>(arg0: $BlockAndTintGetter$$Type): Self
 "useLevelLight"<Self extends $SuperByteBuffer>(arg0: $BlockAndTintGetter$$Type, arg1: $Matrix4f$$Type): Self
 "renderInto"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type): void
 "disableDiffuse"<Self extends $SuperByteBuffer>(): Self
 "shiftUV"<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry$$Type): Self
 "shiftUVtoSheet"<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry$$Type, arg1: float, arg2: float, arg3: integer): Self
 "shiftUVScrolling"<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry$$Type, arg1: float): Self
 "shiftUVScrolling"<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry$$Type, arg1: float, arg2: float): Self
 "pushPose"(): $SuperByteBuffer
 "popPose"(): $SuperByteBuffer
 "transform"(pose: $PoseStack$Pose$$Type): $SuperByteBuffer
 "transform"(stack: $PoseStack$$Type): $SuperByteBuffer
 "transform"(pose: $Matrix4fc$$Type, normal: $Matrix3fc$$Type): $SuperByteBuffer
 "mulPose"(arg0: $Matrix4fc$$Type): $SuperByteBuffer
 "mulNormal"(arg0: $Matrix3fc$$Type): $SuperByteBuffer
 "rotateAround"(quaternion: $Quaternionfc$$Type, x: float, y: float, z: float): $SuperByteBuffer
 "rotateAround"(quaternion: $Quaternionfc$$Type, vec: $Vector3fc$$Type): $SuperByteBuffer
 "rotateCentered"(radians: float, axis: $Direction$Axis$$Type): $SuperByteBuffer
 "rotateCentered"(radians: float, axis: $Vector3fc$$Type): $SuperByteBuffer
 "rotateCentered"(radians: float, axis: $Direction$$Type): $SuperByteBuffer
 "rotateCentered"(q: $Quaternionfc$$Type): $SuperByteBuffer
 "rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): $SuperByteBuffer
 "rotateCentered"(radians: float, axis: $Axis$$Type): $SuperByteBuffer
 "rotateXCentered"(radians: float): $SuperByteBuffer
 "rotateYCentered"(radians: float): $SuperByteBuffer
 "rotateZCentered"(radians: float): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$$Type): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axis: $Axis$$Type): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$$Type): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$$Type): $SuperByteBuffer
 "rotateXCenteredDegrees"(degrees: float): $SuperByteBuffer
 "rotateYCenteredDegrees"(degrees: float): $SuperByteBuffer
 "rotateZCenteredDegrees"(degrees: float): $SuperByteBuffer
 "center"(): $SuperByteBuffer
 "translate"(vec: $Vector3fc$$Type): $SuperByteBuffer
 "translate"(vec: $Vec3$$Type): $SuperByteBuffer
 "translate"(vec: $Vec3i$$Type): $SuperByteBuffer
 "translate"(vec: $Vector3ic$$Type): $SuperByteBuffer
 "translate"(x: double, y: double, z: double): $SuperByteBuffer
 "translate"(v: float): $SuperByteBuffer
 "translate"(arg0: float, arg1: float, arg2: float): $SuperByteBuffer
 "uncenter"(): $SuperByteBuffer
 "nudge"(seed: integer): $SuperByteBuffer
 "translateX"(x: float): $SuperByteBuffer
 "translateY"(y: float): $SuperByteBuffer
 "translateZ"(z: float): $SuperByteBuffer
 "translateBack"(x: float, y: float, z: float): $SuperByteBuffer
 "translateBack"(vec: $Vec3$$Type): $SuperByteBuffer
 "translateBack"(vec: $Vector3fc$$Type): $SuperByteBuffer
 "translateBack"(x: double, y: double, z: double): $SuperByteBuffer
 "translateBack"(v: float): $SuperByteBuffer
 "translateBack"(vec: $Vec3i$$Type): $SuperByteBuffer
 "translateBack"(vec: $Vector3ic$$Type): $SuperByteBuffer
 "rotate"(radians: float, axis: $Axis$$Type): $SuperByteBuffer
 "rotate"(radians: float, axis: $Vector3fc$$Type): $SuperByteBuffer
 "rotate"(radians: float, axis: $Direction$$Type): $SuperByteBuffer
 "rotate"(radians: float, axis: $Direction$Axis$$Type): $SuperByteBuffer
 "rotate"(arg0: $Quaternionfc$$Type): $SuperByteBuffer
 "rotate"(axisAngle: $AxisAngle4f$$Type): $SuperByteBuffer
 "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): $SuperByteBuffer
 "self"(): $SuperByteBuffer
 "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): $SuperByteBuffer
 "rotateTo"(from: $Vector3fc$$Type, to: $Vector3fc$$Type): $SuperByteBuffer
 "rotateTo"(from: $Direction$$Type, to: $Direction$$Type): $SuperByteBuffer
 "rotateY"(radians: float): $SuperByteBuffer
 "rotateZ"(radians: float): $SuperByteBuffer
 "rotateX"(radians: float): $SuperByteBuffer
 "rotateZDegrees"(degrees: float): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axis: $Direction$Axis$$Type): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axis: $Axis$$Type): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axis: $Vector3fc$$Type): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axis: $Direction$$Type): $SuperByteBuffer
 "rotateToFace"(facing: $Direction$$Type): $SuperByteBuffer
 "rotateYDegrees"(degrees: float): $SuperByteBuffer
 "rotateXDegrees"(degrees: float): $SuperByteBuffer
 "scale"(factors: $Vector3fc$$Type): $SuperByteBuffer
 "scale"(factor: float): $SuperByteBuffer
 "scale"(arg0: float, arg1: float, arg2: float): $SuperByteBuffer
 "scaleX"(factor: float): $SuperByteBuffer
 "scaleY"(factor: float): $SuperByteBuffer
 "scaleZ"(factor: float): $SuperByteBuffer
get "transforms"(): $PoseStack
get "empty"(): boolean
}

export namespace $SuperByteBuffer {
function maxLight(arg0: integer, arg1: integer): integer
function of(stack: $PoseStack$$Type): $PoseTransformStack
const probejs$$marker: never
}
export class $SuperByteBuffer$$Static implements $SuperByteBuffer {


 "rotate"<Self extends $SuperByteBuffer>(arg0: $Direction$Axis$$Type, arg1: float): Self
 "getTransforms"(): $PoseStack
 "color"<Self extends $SuperByteBuffer>(arg0: integer, arg1: integer, arg2: integer, arg3: integer): Self
 "color"<Self extends $SuperByteBuffer>(arg0: integer): Self
 "color"<Self extends $SuperByteBuffer>(arg0: $Color$$Type): Self
 "reset"<Self extends $SuperByteBuffer>(): Self
 "isEmpty"(): boolean
 "delete"(): void
 "light"<Self extends $SuperByteBuffer>(arg0: integer): Self
 "overlay"<Self extends $SuperByteBuffer>(arg0: integer): Self
static "maxLight"(arg0: integer, arg1: integer): integer
 "useLevelLight"<Self extends $SuperByteBuffer>(arg0: $BlockAndTintGetter$$Type): Self
 "useLevelLight"<Self extends $SuperByteBuffer>(arg0: $BlockAndTintGetter$$Type, arg1: $Matrix4f$$Type): Self
 "renderInto"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type): void
 "disableDiffuse"<Self extends $SuperByteBuffer>(): Self
 "shiftUV"<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry$$Type): Self
 "shiftUVtoSheet"<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry$$Type, arg1: float, arg2: float, arg3: integer): Self
 "shiftUVScrolling"<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry$$Type, arg1: float): Self
 "shiftUVScrolling"<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry$$Type, arg1: float, arg2: float): Self
static "of"(stack: $PoseStack$$Type): $PoseTransformStack
 "pushPose"(): $SuperByteBuffer
 "popPose"(): $SuperByteBuffer
 "transform"(pose: $PoseStack$Pose$$Type): $SuperByteBuffer
 "transform"(stack: $PoseStack$$Type): $SuperByteBuffer
 "transform"(pose: $Matrix4fc$$Type, normal: $Matrix3fc$$Type): $SuperByteBuffer
 "mulPose"(arg0: $Matrix4fc$$Type): $SuperByteBuffer
 "mulNormal"(arg0: $Matrix3fc$$Type): $SuperByteBuffer
 "rotateAround"(quaternion: $Quaternionfc$$Type, x: float, y: float, z: float): $SuperByteBuffer
 "rotateAround"(quaternion: $Quaternionfc$$Type, vec: $Vector3fc$$Type): $SuperByteBuffer
 "rotateCentered"(radians: float, axis: $Direction$Axis$$Type): $SuperByteBuffer
 "rotateCentered"(radians: float, axis: $Vector3fc$$Type): $SuperByteBuffer
 "rotateCentered"(radians: float, axis: $Direction$$Type): $SuperByteBuffer
 "rotateCentered"(q: $Quaternionfc$$Type): $SuperByteBuffer
 "rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): $SuperByteBuffer
 "rotateCentered"(radians: float, axis: $Axis$$Type): $SuperByteBuffer
 "rotateXCentered"(radians: float): $SuperByteBuffer
 "rotateYCentered"(radians: float): $SuperByteBuffer
 "rotateZCentered"(radians: float): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$$Type): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axis: $Axis$$Type): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$$Type): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$$Type): $SuperByteBuffer
 "rotateXCenteredDegrees"(degrees: float): $SuperByteBuffer
 "rotateYCenteredDegrees"(degrees: float): $SuperByteBuffer
 "rotateZCenteredDegrees"(degrees: float): $SuperByteBuffer
 "center"(): $SuperByteBuffer
 "translate"(vec: $Vector3fc$$Type): $SuperByteBuffer
 "translate"(vec: $Vec3$$Type): $SuperByteBuffer
 "translate"(vec: $Vec3i$$Type): $SuperByteBuffer
 "translate"(vec: $Vector3ic$$Type): $SuperByteBuffer
 "translate"(x: double, y: double, z: double): $SuperByteBuffer
 "translate"(v: float): $SuperByteBuffer
 "translate"(arg0: float, arg1: float, arg2: float): $SuperByteBuffer
 "uncenter"(): $SuperByteBuffer
 "nudge"(seed: integer): $SuperByteBuffer
 "translateX"(x: float): $SuperByteBuffer
 "translateY"(y: float): $SuperByteBuffer
 "translateZ"(z: float): $SuperByteBuffer
 "translateBack"(x: float, y: float, z: float): $SuperByteBuffer
 "translateBack"(vec: $Vec3$$Type): $SuperByteBuffer
 "translateBack"(vec: $Vector3fc$$Type): $SuperByteBuffer
 "translateBack"(x: double, y: double, z: double): $SuperByteBuffer
 "translateBack"(v: float): $SuperByteBuffer
 "translateBack"(vec: $Vec3i$$Type): $SuperByteBuffer
 "translateBack"(vec: $Vector3ic$$Type): $SuperByteBuffer
 "rotate"(radians: float, axis: $Axis$$Type): $SuperByteBuffer
 "rotate"(radians: float, axis: $Vector3fc$$Type): $SuperByteBuffer
 "rotate"(radians: float, axis: $Direction$$Type): $SuperByteBuffer
 "rotate"(radians: float, axis: $Direction$Axis$$Type): $SuperByteBuffer
 "rotate"(arg0: $Quaternionfc$$Type): $SuperByteBuffer
 "rotate"(axisAngle: $AxisAngle4f$$Type): $SuperByteBuffer
 "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): $SuperByteBuffer
 "self"(): $SuperByteBuffer
 "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): $SuperByteBuffer
 "rotateTo"(from: $Vector3fc$$Type, to: $Vector3fc$$Type): $SuperByteBuffer
 "rotateTo"(from: $Direction$$Type, to: $Direction$$Type): $SuperByteBuffer
 "rotateY"(radians: float): $SuperByteBuffer
 "rotateZ"(radians: float): $SuperByteBuffer
 "rotateX"(radians: float): $SuperByteBuffer
 "rotateZDegrees"(degrees: float): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axis: $Direction$Axis$$Type): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axis: $Axis$$Type): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axis: $Vector3fc$$Type): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axis: $Direction$$Type): $SuperByteBuffer
 "rotateToFace"(facing: $Direction$$Type): $SuperByteBuffer
 "rotateYDegrees"(degrees: float): $SuperByteBuffer
 "rotateXDegrees"(degrees: float): $SuperByteBuffer
 "scale"(factors: $Vector3fc$$Type): $SuperByteBuffer
 "scale"(factor: float): $SuperByteBuffer
 "scale"(arg0: float, arg1: float, arg2: float): $SuperByteBuffer
 "scaleX"(factor: float): $SuperByteBuffer
 "scaleY"(factor: float): $SuperByteBuffer
 "scaleZ"(factor: float): $SuperByteBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuperByteBuffer$$Type = ($SuperByteBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SuperByteBuffer_ = $SuperByteBuffer$$Type;
}}
declare module "net.createmod.catnip.gui.element.AbstractRenderElement" {
import {$ScreenElement, $ScreenElement$$Type} from "net.createmod.catnip.gui.element.ScreenElement"
import {$RenderElement, $RenderElement$$Type} from "net.createmod.catnip.gui.element.RenderElement"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export class $AbstractRenderElement implements $RenderElement {
static "EMPTY": $RenderElement

constructor()

public "at"<T extends $RenderElement>(arg0: float, arg1: float, arg2: float): T
public "at"<T extends $RenderElement>(arg0: float, arg1: float): T
public "getWidth"(): integer
public "getHeight"(): integer
public "getY"(): float
public "getX"(): float
public "getZ"(): float
public "withBounds"<T extends $RenderElement>(arg0: integer, arg1: integer): T
public "withAlpha"<T extends $RenderElement>(arg0: float): T
public static "of"(arg0: $ScreenElement$$Type): $RenderElement
public "render"(arg0: $GuiGraphics$$Type): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
get "width"(): integer
get "height"(): integer
get "y"(): float
get "x"(): float
get "z"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRenderElement$$Type = ($AbstractRenderElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractRenderElement_ = $AbstractRenderElement$$Type;
}}
