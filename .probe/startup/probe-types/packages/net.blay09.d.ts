declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Click" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenMouseEvent, $ScreenMouseEvent$$Type} from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent"

export class $ScreenMouseEvent$Click extends $ScreenMouseEvent {

constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvent$Click$$Type = ($ScreenMouseEvent$Click);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvent$Click_ = $ScreenMouseEvent$Click$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.builder.EnumConfigProperty" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractConfigProperty, $AbstractConfigProperty$$Type} from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import {$MutableLoadedConfig, $MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfigPropertyBuilder, $ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$ConfiguredEnum, $ConfiguredEnum$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredEnum"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $EnumConfigProperty<T extends $Enum<(T)>> extends $AbstractConfigProperty<(T)> implements $ConfiguredEnum<(T)> {

constructor(arg0: $ConfigPropertyBuilder$$Type, arg1: T)

public "type"(): $Class<(T)>
public "defaultValue"(): any
public "codec"(): $Codec<(T)>
public "streamCodec"(): $StreamCodec<($ByteBuf), (T)>
public "get"(arg0: $LoadedConfig$$Type): T
public "get"(): T
public "set"(arg0: T): void
public "set"(arg0: $MutableLoadedConfig$$Type, arg1: T): void
public "parentSchema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumConfigProperty$$Type<T> = ($EnumConfigProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumConfigProperty_<T> = $EnumConfigProperty$$Type<(T)>;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $ScreenKeyEvent extends $BalmEvent {

constructor(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer)

public "getModifiers"(): integer
public "getKey"(): integer
public "getScreen"(): $Screen
public "getScanCode"(): integer
get "modifiers"(): integer
get "key"(): integer
get "screen"(): $Screen
get "scanCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyEvent$$Type = ($ScreenKeyEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenKeyEvent_ = $ScreenKeyEvent$$Type;
}}
declare module "net.blay09.mods.forgivingvoid.ForgivingVoidFallThroughEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $ForgivingVoidFallThroughEvent extends $BalmEvent {

constructor(arg0: $Entity$$Type)

public "getEntity"(): $Entity
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgivingVoidFallThroughEvent$$Type = ($ForgivingVoidFallThroughEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgivingVoidFallThroughEvent_ = $ForgivingVoidFallThroughEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenInitEvent$Post" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenInitEvent, $ScreenInitEvent$$Type} from "net.blay09.mods.balm.api.event.client.screen.ScreenInitEvent"

export class $ScreenInitEvent$Post extends $ScreenInitEvent {

constructor(arg0: $Screen$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenInitEvent$Post$$Type = ($ScreenInitEvent$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenInitEvent$Post_ = $ScreenInitEvent$Post$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.builder.PropertyHolderBuilder" {
import {$ConfigPropertyBuilder, $ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"

export interface $PropertyHolderBuilder {

 "property"(arg0: StringJS): $ConfigPropertyBuilder

(arg0: StringJS): $ConfigPropertyBuilder$$Type
}

export namespace $PropertyHolderBuilder {
const probejs$$marker: never
}
export class $PropertyHolderBuilder$$Static implements $PropertyHolderBuilder {


 "property"(arg0: StringJS): $ConfigPropertyBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertyHolderBuilder$$Type = ((arg0: StringJS) => $ConfigPropertyBuilder$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropertyHolderBuilder_ = $PropertyHolderBuilder$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.builder.ListConfigProperty" {
import {$AbstractConfigProperty, $AbstractConfigProperty$$Type} from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig, $MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfigPropertyBuilder, $ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredList, $ConfiguredList$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredList"
import {$List, $List$$Type} from "java.util.List"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $ListConfigProperty<T> extends $AbstractConfigProperty<($List<(T)>)> implements $ConfiguredList<(T)> {

constructor(arg0: $ConfigPropertyBuilder$$Type, arg1: $Class$$Type<(T)>, arg2: $List$$Type<(T)>)

public "type"(): $Class<(any)>
public "defaultValue"(): any
public "codec"(): $Codec<($List<(T)>)>
public "streamCodec"(): $StreamCodec<($ByteBuf), ($List<(T)>)>
public "nestedType"(): $Class<(T)>
public "get"(arg0: $LoadedConfig$$Type): $List<(T)>
public "get"(): $List<(T)>
public "set"(arg0: $List$$Type<(T)>): void
public "set"(arg0: $MutableLoadedConfig$$Type, arg1: $List$$Type<(T)>): void
public "parentSchema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListConfigProperty$$Type<T> = ($ListConfigProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListConfigProperty_<T> = $ListConfigProperty$$Type<(T)>;
}}
declare module "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig, $MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfigPropertyBuilder, $ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ConfiguredProperty, $ConfiguredProperty$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $AbstractConfigProperty<T> implements $ConfiguredProperty<(T)> {

constructor(arg0: $ConfigPropertyBuilder$$Type)

public "category"(): StringJS
public "name"(): StringJS
public "comment"(): StringJS
public "synced"(): boolean
public "parentSchema"(): $BalmConfigSchema
public "type"(): $Class<(any)>
public "defaultValue"(): T
public "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: T): void
public "codec"(): $Codec<(T)>
public "getRaw"(arg0: $LoadedConfig$$Type): T
public "streamCodec"(): $StreamCodec<($ByteBuf), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractConfigProperty$$Type<T> = ($AbstractConfigProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractConfigProperty_<T> = $AbstractConfigProperty$$Type<(T)>;
}}
declare module "net.blay09.mods.balm.api.config.schema.ConfiguredDouble" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig, $MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ConfiguredProperty, $ConfiguredProperty$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export interface $ConfiguredDouble extends $ConfiguredProperty<(double)> {

 "get"(arg0: $LoadedConfig$$Type): double
 "get"(): double
 "set"(arg0: double): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: double): void
 "category"(): StringJS
 "name"(): StringJS
 "type"(): $Class<(any)>
 "comment"(): StringJS
 "defaultValue"(): double
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: double): void
 "synced"(): boolean
 "codec"(): $Codec<(double)>
 "getRaw"(arg0: $LoadedConfig$$Type): double
 "streamCodec"(): $StreamCodec<($ByteBuf), (double)>
 "parentSchema"(): $BalmConfigSchema
}

export namespace $ConfiguredDouble {
const probejs$$marker: never
}
export class $ConfiguredDouble$$Static implements $ConfiguredDouble {


 "get"(arg0: $LoadedConfig$$Type): double
 "get"(): double
 "set"(arg0: double): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: double): void
 "category"(): StringJS
 "name"(): StringJS
 "type"(): $Class<(any)>
 "comment"(): StringJS
 "defaultValue"(): double
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: double): void
 "synced"(): boolean
 "codec"(): $Codec<(double)>
 "getRaw"(arg0: $LoadedConfig$$Type): double
 "streamCodec"(): $StreamCodec<($ByteBuf), (double)>
 "parentSchema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredDouble$$Type = ($ConfiguredDouble);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguredDouble_ = $ConfiguredDouble$$Type;
}}
declare module "net.blay09.mods.balm.api.event.PlayerLoginEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $PlayerLoginEvent extends $BalmEvent {

constructor(arg0: $ServerPlayer$$Type)

public "getPlayer"(): $ServerPlayer
get "player"(): $ServerPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerLoginEvent$$Type = ($PlayerLoginEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerLoginEvent_ = $PlayerLoginEvent$$Type;
}}
declare module "net.blay09.mods.balm.mixin.SlotAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlotAccessor {

 "setX"(arg0: integer): void
 "setY"(arg0: integer): void
set "x"(value: integer)
set "y"(value: integer)
}

export namespace $SlotAccessor {
const probejs$$marker: never
}
export class $SlotAccessor$$Static implements $SlotAccessor {


 "setX"(arg0: integer): void
 "setY"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotAccessor$$Type = ($SlotAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotAccessor_ = $SlotAccessor$$Type;
}}
declare module "net.blay09.mods.balm.api.event.CropGrowEvent$Post" {
import {$CropGrowEvent, $CropGrowEvent$$Type} from "net.blay09.mods.balm.api.event.CropGrowEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CropGrowEvent$Post extends $CropGrowEvent {

constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropGrowEvent$Post$$Type = ($CropGrowEvent$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CropGrowEvent$Post_ = $CropGrowEvent$Post$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Drag$Pre" {
import {$ScreenMouseEvent$Drag, $ScreenMouseEvent$Drag$$Type} from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Drag"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $ScreenMouseEvent$Drag$Pre extends $ScreenMouseEvent$Drag {

constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer, arg4: double, arg5: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvent$Drag$Pre$$Type = ($ScreenMouseEvent$Drag$Pre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvent$Drag$Pre_ = $ScreenMouseEvent$Drag$Pre$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Drag$Post" {
import {$ScreenMouseEvent$Drag, $ScreenMouseEvent$Drag$$Type} from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Drag"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $ScreenMouseEvent$Drag$Post extends $ScreenMouseEvent$Drag {

constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer, arg4: double, arg5: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvent$Drag$Post$$Type = ($ScreenMouseEvent$Drag$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvent$Drag$Post_ = $ScreenMouseEvent$Drag$Post$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.OpenScreenEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $OpenScreenEvent extends $BalmEvent {

constructor(arg0: $Screen$$Type)

public "setScreen"(arg0: $Screen$$Type): void
public "getScreen"(): $Screen
public "getNewScreen"(): $Screen
set "screen"(value: $Screen$$Type)
get "screen"(): $Screen
get "newScreen"(): $Screen
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OpenScreenEvent$$Type = ($OpenScreenEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OpenScreenEvent_ = $OpenScreenEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Release$Pre" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenMouseEvent$Release, $ScreenMouseEvent$Release$$Type} from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Release"

export class $ScreenMouseEvent$Release$Pre extends $ScreenMouseEvent$Release {

constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvent$Release$Pre$$Type = ($ScreenMouseEvent$Release$Pre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvent$Release$Pre_ = $ScreenMouseEvent$Release$Pre$$Type;
}}
declare module "net.blay09.mods.balm.api.event.CropGrowEvent$Pre" {
import {$CropGrowEvent, $CropGrowEvent$$Type} from "net.blay09.mods.balm.api.event.CropGrowEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CropGrowEvent$Pre extends $CropGrowEvent {

constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropGrowEvent$Pre$$Type = ($CropGrowEvent$Pre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CropGrowEvent$Pre_ = $CropGrowEvent$Pre$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Release" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenMouseEvent, $ScreenMouseEvent$$Type} from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent"

export class $ScreenMouseEvent$Release extends $ScreenMouseEvent {

constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvent$Release$$Type = ($ScreenMouseEvent$Release);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvent$Release_ = $ScreenMouseEvent$Release$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.ConfiguredInt" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig, $MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ConfiguredProperty, $ConfiguredProperty$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export interface $ConfiguredInt extends $ConfiguredProperty<(integer)> {

 "get"(arg0: $LoadedConfig$$Type): integer
 "get"(): integer
 "set"(arg0: integer): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: integer): void
 "category"(): StringJS
 "name"(): StringJS
 "type"(): $Class<(any)>
 "comment"(): StringJS
 "defaultValue"(): integer
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: integer): void
 "synced"(): boolean
 "codec"(): $Codec<(integer)>
 "getRaw"(arg0: $LoadedConfig$$Type): integer
 "streamCodec"(): $StreamCodec<($ByteBuf), (integer)>
 "parentSchema"(): $BalmConfigSchema
}

export namespace $ConfiguredInt {
const probejs$$marker: never
}
export class $ConfiguredInt$$Static implements $ConfiguredInt {


 "get"(arg0: $LoadedConfig$$Type): integer
 "get"(): integer
 "set"(arg0: integer): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: integer): void
 "category"(): StringJS
 "name"(): StringJS
 "type"(): $Class<(any)>
 "comment"(): StringJS
 "defaultValue"(): integer
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: integer): void
 "synced"(): boolean
 "codec"(): $Codec<(integer)>
 "getRaw"(arg0: $LoadedConfig$$Type): integer
 "streamCodec"(): $StreamCodec<($ByteBuf), (integer)>
 "parentSchema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredInt$$Type = ($ConfiguredInt);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguredInt_ = $ConfiguredInt$$Type;
}}
declare module "net.blay09.mods.balm.api.event.LivingDamageEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingDamageEvent extends $BalmEvent {

constructor(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type, arg2: float)

public "getEntity"(): $LivingEntity
public "setDamageAmount"(arg0: float): void
public "getDamageSource"(): $DamageSource
public "getDamageAmount"(): float
get "entity"(): $LivingEntity
set "damageAmount"(value: float)
get "damageSource"(): $DamageSource
get "damageAmount"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDamageEvent$$Type = ($LivingDamageEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingDamageEvent_ = $LivingDamageEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.ConnectedToServerEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $ConnectedToServerEvent extends $BalmEvent {

constructor(arg0: $Minecraft$$Type)

public "getClient"(): $Minecraft
get "client"(): $Minecraft
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectedToServerEvent$$Type = ($ConnectedToServerEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectedToServerEvent_ = $ConnectedToServerEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.ConfiguredBoolean" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig, $MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ConfiguredProperty, $ConfiguredProperty$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export interface $ConfiguredBoolean extends $ConfiguredProperty<(boolean)> {

 "get"(arg0: $LoadedConfig$$Type): boolean
 "get"(): boolean
 "set"(arg0: boolean): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: boolean): void
 "category"(): StringJS
 "name"(): StringJS
 "type"(): $Class<(any)>
 "comment"(): StringJS
 "defaultValue"(): boolean
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: boolean): void
 "synced"(): boolean
 "codec"(): $Codec<(boolean)>
 "getRaw"(arg0: $LoadedConfig$$Type): boolean
 "streamCodec"(): $StreamCodec<($ByteBuf), (boolean)>
 "parentSchema"(): $BalmConfigSchema
}

export namespace $ConfiguredBoolean {
const probejs$$marker: never
}
export class $ConfiguredBoolean$$Static implements $ConfiguredBoolean {


 "get"(arg0: $LoadedConfig$$Type): boolean
 "get"(): boolean
 "set"(arg0: boolean): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: boolean): void
 "category"(): StringJS
 "name"(): StringJS
 "type"(): $Class<(any)>
 "comment"(): StringJS
 "defaultValue"(): boolean
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: boolean): void
 "synced"(): boolean
 "codec"(): $Codec<(boolean)>
 "getRaw"(arg0: $LoadedConfig$$Type): boolean
 "streamCodec"(): $StreamCodec<($ByteBuf), (boolean)>
 "parentSchema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredBoolean$$Type = ($ConfiguredBoolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguredBoolean_ = $ConfiguredBoolean$$Type;
}}
declare module "net.blay09.mods.forgivingvoid.mixin.ServerPlayerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerPlayerAccessor {

 "setIsChangingDimension"(arg0: boolean): void

(arg0: boolean): void
set "isChangingDimension"(value: boolean)
}

export namespace $ServerPlayerAccessor {
const probejs$$marker: never
}
export class $ServerPlayerAccessor$$Static implements $ServerPlayerAccessor {


 "setIsChangingDimension"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerAccessor$$Type = ((arg0: boolean) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerAccessor_ = $ServerPlayerAccessor$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ContainerScreenDrawEvent$Foreground" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ContainerScreenDrawEvent, $ContainerScreenDrawEvent$$Type} from "net.blay09.mods.balm.api.event.client.screen.ContainerScreenDrawEvent"

export class $ContainerScreenDrawEvent$Foreground extends $ContainerScreenDrawEvent {

constructor(arg0: $Screen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerScreenDrawEvent$Foreground$$Type = ($ContainerScreenDrawEvent$Foreground);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerScreenDrawEvent$Foreground_ = $ContainerScreenDrawEvent$Foreground$$Type;
}}
declare module "net.blay09.mods.balm.api.config.LoadedConfig" {
import {$MutableLoadedConfig, $MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfiguredProperty, $ConfiguredProperty$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"

export interface $LoadedConfig {

 "getRaw"<T>(arg0: $ConfiguredProperty$$Type<(T)>): T
 "mutable"(arg0: $BalmConfigSchema$$Type): $MutableLoadedConfig
}

export namespace $LoadedConfig {
const probejs$$marker: never
}
export class $LoadedConfig$$Static implements $LoadedConfig {


 "getRaw"<T>(arg0: $ConfiguredProperty$$Type<(T)>): T
 "mutable"(arg0: $BalmConfigSchema$$Type): $MutableLoadedConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadedConfig$$Type = ($LoadedConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoadedConfig_ = $LoadedConfig$$Type;
}}
declare module "net.blay09.mods.balm.api.entity.BalmEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export interface $BalmEntity {

 "getFabricBalmData"(): $CompoundTag
 "setFabricBalmData"(arg0: $CompoundTag$$Type): void
get "fabricBalmData"(): $CompoundTag
set "fabricBalmData"(value: $CompoundTag$$Type)
}

export namespace $BalmEntity {
const probejs$$marker: never
}
export class $BalmEntity$$Static implements $BalmEntity {


 "getFabricBalmData"(): $CompoundTag
 "setFabricBalmData"(arg0: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BalmEntity$$Type = ($BalmEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BalmEntity_ = $BalmEntity$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ContainerScreenDrawEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $ContainerScreenDrawEvent extends $BalmEvent {

constructor(arg0: $Screen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer)

public "getScreen"(): $Screen
public "getMouseX"(): integer
public "getMouseY"(): integer
public "getGuiGraphics"(): $GuiGraphics
get "screen"(): $Screen
get "mouseX"(): integer
get "mouseY"(): integer
get "guiGraphics"(): $GuiGraphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerScreenDrawEvent$$Type = ($ContainerScreenDrawEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerScreenDrawEvent_ = $ContainerScreenDrawEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.BalmConfigSchema" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ConfigSchemaImpl, $ConfigSchemaImpl$$Type} from "net.blay09.mods.balm.api.config.schema.impl.ConfigSchemaImpl"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$ConfiguredProperty, $ConfiguredProperty$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$ConfigCategory, $ConfigCategory$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigCategory"

export interface $BalmConfigSchema {

 "identifier"(): $ResourceLocation
 "defaults"(): $LoadedConfig
 "findProperty"(arg0: StringJS, arg1: StringJS): $ConfiguredProperty<(any)>
 "categories"(): $Collection<($ConfigCategory)>
 "rootProperties"(): $Collection<($ConfiguredProperty<(any)>)>
 "findRootProperty"(arg0: StringJS): $ConfiguredProperty<(any)>
}

export namespace $BalmConfigSchema {
function create(arg0: $ResourceLocation$$Type): $ConfigSchemaImpl
const probejs$$marker: never
}
export class $BalmConfigSchema$$Static implements $BalmConfigSchema {


 "identifier"(): $ResourceLocation
static "create"(arg0: $ResourceLocation$$Type): $ConfigSchemaImpl
 "defaults"(): $LoadedConfig
 "findProperty"(arg0: StringJS, arg1: StringJS): $ConfiguredProperty<(any)>
 "categories"(): $Collection<($ConfigCategory)>
 "rootProperties"(): $Collection<($ConfiguredProperty<(any)>)>
 "findRootProperty"(arg0: StringJS): $ConfiguredProperty<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BalmConfigSchema$$Type = ($BalmConfigSchema);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BalmConfigSchema_ = $BalmConfigSchema$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $ScreenMouseEvent extends $BalmEvent {

constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer)

public "getScreen"(): $Screen
public "getMouseX"(): double
public "getMouseY"(): double
public "getButton"(): integer
get "screen"(): $Screen
get "mouseX"(): double
get "mouseY"(): double
get "button"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvent$$Type = ($ScreenMouseEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvent_ = $ScreenMouseEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.LivingFallEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingFallEvent extends $BalmEvent {

constructor(arg0: $LivingEntity$$Type)

public "getEntity"(): $LivingEntity
public "setFallDamageOverride"(arg0: float): void
public "getFallDamageOverride"(): float
get "entity"(): $LivingEntity
set "fallDamageOverride"(value: float)
get "fallDamageOverride"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingFallEvent$$Type = ($LivingFallEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingFallEvent_ = $LivingFallEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.EntityAddedEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityAddedEvent extends $BalmEvent {

constructor(arg0: $Entity$$Type, arg1: $Level$$Type)

public "getLevel"(): $Level
public "getEntity"(): $Entity
get "level"(): $Level
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAddedEvent$$Type = ($EntityAddedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAddedEvent_ = $EntityAddedEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.LivingHealEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingHealEvent extends $BalmEvent {

constructor(arg0: $LivingEntity$$Type, arg1: float)

public "getEntity"(): $LivingEntity
public "getAmount"(): float
get "entity"(): $LivingEntity
get "amount"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingHealEvent$$Type = ($LivingHealEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingHealEvent_ = $LivingHealEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Press$Post" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenKeyEvent$Press, $ScreenKeyEvent$Press$$Type} from "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Press"

export class $ScreenKeyEvent$Press$Post extends $ScreenKeyEvent$Press {

constructor(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyEvent$Press$Post$$Type = ($ScreenKeyEvent$Press$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenKeyEvent$Press$Post_ = $ScreenKeyEvent$Press$Post$$Type;
}}
declare module "net.blay09.mods.balm.api.event.ConfigReloadedEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"

export class $ConfigReloadedEvent extends $BalmEvent {

constructor(arg0: $BalmConfigSchema$$Type)
constructor()

public "getSchema"(): $BalmConfigSchema
get "schema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigReloadedEvent$$Type = ($ConfigReloadedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigReloadedEvent_ = $ConfigReloadedEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Press$Pre" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenKeyEvent$Press, $ScreenKeyEvent$Press$$Type} from "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Press"

export class $ScreenKeyEvent$Press$Pre extends $ScreenKeyEvent$Press {

constructor(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyEvent$Press$Pre$$Type = ($ScreenKeyEvent$Press$Pre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenKeyEvent$Press$Pre_ = $ScreenKeyEvent$Press$Pre$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.ConfiguredLong" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig, $MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ConfiguredProperty, $ConfiguredProperty$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export interface $ConfiguredLong extends $ConfiguredProperty<(long)> {

 "get"(arg0: $LoadedConfig$$Type): long
 "get"(): long
 "set"(arg0: long): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: long): void
 "category"(): StringJS
 "name"(): StringJS
 "type"(): $Class<(any)>
 "comment"(): StringJS
 "defaultValue"(): long
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: long): void
 "synced"(): boolean
 "codec"(): $Codec<(long)>
 "getRaw"(arg0: $LoadedConfig$$Type): long
 "streamCodec"(): $StreamCodec<($ByteBuf), (long)>
 "parentSchema"(): $BalmConfigSchema
}

export namespace $ConfiguredLong {
const probejs$$marker: never
}
export class $ConfiguredLong$$Static implements $ConfiguredLong {


 "get"(arg0: $LoadedConfig$$Type): long
 "get"(): long
 "set"(arg0: long): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: long): void
 "category"(): StringJS
 "name"(): StringJS
 "type"(): $Class<(any)>
 "comment"(): StringJS
 "defaultValue"(): long
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: long): void
 "synced"(): boolean
 "codec"(): $Codec<(long)>
 "getRaw"(arg0: $LoadedConfig$$Type): long
 "streamCodec"(): $StreamCodec<($ByteBuf), (long)>
 "parentSchema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredLong$$Type = ($ConfiguredLong);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguredLong_ = $ConfiguredLong$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.GuiDrawEvent$Post" {
import {$GuiDrawEvent$Element, $GuiDrawEvent$Element$$Type} from "net.blay09.mods.balm.api.event.client.GuiDrawEvent$Element"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$GuiDrawEvent, $GuiDrawEvent$$Type} from "net.blay09.mods.balm.api.event.client.GuiDrawEvent"
import {$Window, $Window$$Type} from "com.mojang.blaze3d.platform.Window"

export class $GuiDrawEvent$Post extends $GuiDrawEvent {

constructor(arg0: $Window$$Type, arg1: $GuiGraphics$$Type, arg2: $GuiDrawEvent$Element$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiDrawEvent$Post$$Type = ($GuiDrawEvent$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiDrawEvent$Post_ = $GuiDrawEvent$Post$$Type;
}}
declare module "net.blay09.mods.balm.api.event.BalmEvent" {
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"

export class $BalmEvent extends $Event implements $ICancellableEvent {

constructor()

public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BalmEvent$$Type = ($BalmEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BalmEvent_ = $BalmEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.PlayerOpenMenuEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $PlayerOpenMenuEvent extends $BalmEvent {

constructor(arg0: $ServerPlayer$$Type, arg1: $AbstractContainerMenu$$Type)

public "getPlayer"(): $ServerPlayer
public "getMenu"(): $AbstractContainerMenu
get "player"(): $ServerPlayer
get "menu"(): $AbstractContainerMenu
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerOpenMenuEvent$$Type = ($PlayerOpenMenuEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerOpenMenuEvent_ = $PlayerOpenMenuEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.builder.BooleanConfigProperty" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractConfigProperty, $AbstractConfigProperty$$Type} from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import {$MutableLoadedConfig, $MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfigPropertyBuilder, $ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$ConfiguredBoolean, $ConfiguredBoolean$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredBoolean"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $BooleanConfigProperty extends $AbstractConfigProperty<(boolean)> implements $ConfiguredBoolean {
static readonly "CODEC": $Codec<(boolean)>

constructor(arg0: $ConfigPropertyBuilder$$Type, arg1: boolean)

public "type"(): $Class<(boolean)>
public "defaultValue"(): boolean
public "codec"(): $Codec<(boolean)>
public "streamCodec"(): $StreamCodec<($ByteBuf), (boolean)>
public "get"(arg0: $LoadedConfig$$Type): boolean
public "get"(): boolean
public "set"(arg0: boolean): void
public "set"(arg0: $MutableLoadedConfig$$Type, arg1: boolean): void
public "parentSchema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanConfigProperty$$Type = ($BooleanConfigProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BooleanConfigProperty_ = $BooleanConfigProperty$$Type;
}}
declare module "net.blay09.mods.forgivingvoid.mixin.ServerGamePacketListenerImplAccessor" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"

export interface $ServerGamePacketListenerImplAccessor {

 "getAwaitingPositionFromClient"(): $Vec3

(): $Vec3$$Type
get "awaitingPositionFromClient"(): $Vec3
}

export namespace $ServerGamePacketListenerImplAccessor {
const probejs$$marker: never
}
export class $ServerGamePacketListenerImplAccessor$$Static implements $ServerGamePacketListenerImplAccessor {


 "getAwaitingPositionFromClient"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerGamePacketListenerImplAccessor$$Type = (() => $Vec3$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerGamePacketListenerImplAccessor_ = $ServerGamePacketListenerImplAccessor$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Click$Post" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenMouseEvent$Click, $ScreenMouseEvent$Click$$Type} from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Click"

export class $ScreenMouseEvent$Click$Post extends $ScreenMouseEvent$Click {

constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvent$Click$Post$$Type = ($ScreenMouseEvent$Click$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvent$Click$Post_ = $ScreenMouseEvent$Click$Post$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.ConfiguredFloat" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig, $MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ConfiguredProperty, $ConfiguredProperty$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export interface $ConfiguredFloat extends $ConfiguredProperty<(float)> {

 "get"(arg0: $LoadedConfig$$Type): float
 "get"(): float
 "set"(arg0: float): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: float): void
 "category"(): StringJS
 "name"(): StringJS
 "type"(): $Class<(any)>
 "comment"(): StringJS
 "defaultValue"(): float
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: float): void
 "synced"(): boolean
 "codec"(): $Codec<(float)>
 "getRaw"(arg0: $LoadedConfig$$Type): float
 "streamCodec"(): $StreamCodec<($ByteBuf), (float)>
 "parentSchema"(): $BalmConfigSchema
}

export namespace $ConfiguredFloat {
const probejs$$marker: never
}
export class $ConfiguredFloat$$Static implements $ConfiguredFloat {


 "get"(arg0: $LoadedConfig$$Type): float
 "get"(): float
 "set"(arg0: float): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: float): void
 "category"(): StringJS
 "name"(): StringJS
 "type"(): $Class<(any)>
 "comment"(): StringJS
 "defaultValue"(): float
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: float): void
 "synced"(): boolean
 "codec"(): $Codec<(float)>
 "getRaw"(arg0: $LoadedConfig$$Type): float
 "streamCodec"(): $StreamCodec<($ByteBuf), (float)>
 "parentSchema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredFloat$$Type = ($ConfiguredFloat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguredFloat_ = $ConfiguredFloat$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.builder.ConfigCategory" {
import {$List, $List$$Type} from "java.util.List"
import {$ConfiguredProperty, $ConfiguredProperty$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"

export interface $ConfigCategory {

 "name"(): StringJS
 "properties"(): $List<($ConfiguredProperty<(any)>)>
 "comment"(): StringJS
 "parentSchema"(): $BalmConfigSchema
}

export namespace $ConfigCategory {
const probejs$$marker: never
}
export class $ConfigCategory$$Static implements $ConfigCategory {


 "name"(): StringJS
 "properties"(): $List<($ConfiguredProperty<(any)>)>
 "comment"(): StringJS
 "parentSchema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigCategory$$Type = ($ConfigCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigCategory_ = $ConfigCategory$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.builder.StringConfigProperty" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractConfigProperty, $AbstractConfigProperty$$Type} from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import {$MutableLoadedConfig, $MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfigPropertyBuilder, $ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ConfiguredString, $ConfiguredString$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredString"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $StringConfigProperty extends $AbstractConfigProperty<(StringJS)> implements $ConfiguredString {

constructor(arg0: $ConfigPropertyBuilder$$Type, arg1: StringJS)

public "type"(): $Class<(StringJS)>
public "defaultValue"(): any
public "codec"(): $Codec<(StringJS)>
public "streamCodec"(): $StreamCodec<($ByteBuf), (StringJS)>
public "get"(arg0: $LoadedConfig$$Type): StringJS
public "get"(): StringJS
public "set"(arg0: StringJS): void
public "set"(arg0: $MutableLoadedConfig$$Type, arg1: StringJS): void
public "parentSchema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringConfigProperty$$Type = ($StringConfigProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringConfigProperty_ = $StringConfigProperty$$Type;
}}
declare module "net.blay09.mods.balm.neoforge.world.BalmBiomeModifier" {
import {$ModifiableBiomeInfo$BiomeInfo$Builder, $ModifiableBiomeInfo$BiomeInfo$Builder$$Type} from "net.neoforged.neoforge.common.world.ModifiableBiomeInfo$BiomeInfo$Builder"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$BiomeModifier, $BiomeModifier$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier"
import {$BiomeModifier$Phase, $BiomeModifier$Phase$$Type} from "net.neoforged.neoforge.common.world.BiomeModifier$Phase"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $BalmBiomeModifier implements $BiomeModifier {
static readonly "INSTANCE": $BalmBiomeModifier

constructor()

public "codec"(): $MapCodec<($BiomeModifier)>
public "modify"(arg0: $Holder$$Type<($Biome)>, arg1: $BiomeModifier$Phase$$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BalmBiomeModifier$$Type = ($BalmBiomeModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BalmBiomeModifier_ = $BalmBiomeModifier$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenDrawEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $ScreenDrawEvent extends $BalmEvent {

constructor(arg0: $Screen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: float)

public "getScreen"(): $Screen
public "getMouseX"(): integer
public "getMouseY"(): integer
public "getTickDelta"(): float
public "getGuiGraphics"(): $GuiGraphics
get "screen"(): $Screen
get "mouseX"(): integer
get "mouseY"(): integer
get "tickDelta"(): float
get "guiGraphics"(): $GuiGraphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenDrawEvent$$Type = ($ScreenDrawEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenDrawEvent_ = $ScreenDrawEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.builder.SetConfigProperty" {
import {$AbstractConfigProperty, $AbstractConfigProperty$$Type} from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig, $MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfigPropertyBuilder, $ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredSet, $ConfiguredSet$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredSet"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $SetConfigProperty<T> extends $AbstractConfigProperty<($Set<(T)>)> implements $ConfiguredSet<(T)> {

constructor(arg0: $ConfigPropertyBuilder$$Type, arg1: $Class$$Type<(T)>, arg2: $Set$$Type<(T)>)

public "type"(): $Class<(any)>
public "defaultValue"(): any
public "codec"(): $Codec<($Set<(T)>)>
public "streamCodec"(): $StreamCodec<($ByteBuf), ($Set<(T)>)>
public "nestedType"(): $Class<(T)>
public "get"(arg0: $LoadedConfig$$Type): $Set<(T)>
public "get"(): $Set<(T)>
public "set"(arg0: $Set$$Type<(T)>): void
public "set"(arg0: $MutableLoadedConfig$$Type, arg1: $Set$$Type<(T)>): void
public "parentSchema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetConfigProperty$$Type<T> = ($SetConfigProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetConfigProperty_<T> = $SetConfigProperty$$Type<(T)>;
}}
declare module "net.blay09.mods.balm.api.event.client.GuiDrawEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$GuiDrawEvent$Element, $GuiDrawEvent$Element$$Type} from "net.blay09.mods.balm.api.event.client.GuiDrawEvent$Element"
import {$Window, $Window$$Type} from "com.mojang.blaze3d.platform.Window"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export class $GuiDrawEvent extends $BalmEvent {

constructor(arg0: $Window$$Type, arg1: $GuiGraphics$$Type, arg2: $GuiDrawEvent$Element$$Type)

public "getElement"(): $GuiDrawEvent$Element
public "getWindow"(): $Window
public "getGuiGraphics"(): $GuiGraphics
get "element"(): $GuiDrawEvent$Element
get "window"(): $Window
get "guiGraphics"(): $GuiGraphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiDrawEvent$$Type = ($GuiDrawEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiDrawEvent_ = $GuiDrawEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.impl.ConfigSchemaImpl" {
import {$ConfigSchemaBuilder, $ConfigSchemaBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.ConfigSchemaBuilder"
import {$ConfigPropertyBuilder, $ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$ConfigCategoryBuilder, $ConfigCategoryBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigCategoryBuilder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$ConfiguredProperty, $ConfiguredProperty$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$ConfigCategory, $ConfigCategory$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigCategory"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"

export class $ConfigSchemaImpl implements $BalmConfigSchema, $ConfigSchemaBuilder {

constructor(arg0: $ResourceLocation$$Type)

public "identifier"(): $ResourceLocation
public "category"(arg0: StringJS): $ConfigCategoryBuilder
public "property"(arg0: StringJS): $ConfigPropertyBuilder
public "defaults"(): $LoadedConfig
public "findProperty"(arg0: StringJS, arg1: StringJS): $ConfiguredProperty<(any)>
public "categories"(): $Collection<($ConfigCategory)>
public "addAndReturn"<T extends $ConfiguredProperty<(any)>>(arg0: T): T
public "rootProperties"(): $Collection<($ConfiguredProperty<(any)>)>
public "findRootProperty"(arg0: StringJS): $ConfiguredProperty<(any)>
public static "create"(arg0: $ResourceLocation$$Type): $ConfigSchemaImpl
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigSchemaImpl$$Type = ($ConfigSchemaImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigSchemaImpl_ = $ConfigSchemaImpl$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.ConfiguredSet" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$NestedTypeHolder, $NestedTypeHolder$$Type} from "net.blay09.mods.balm.api.config.schema.NestedTypeHolder"
import {$MutableLoadedConfig, $MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ConfiguredProperty, $ConfiguredProperty$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export interface $ConfiguredSet<T> extends $ConfiguredProperty<($Set<(T)>)>, $NestedTypeHolder<(T)> {

 "get"(arg0: $LoadedConfig$$Type): $Set<(T)>
 "get"(): $Set<(T)>
 "set"(arg0: $Set$$Type<(T)>): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: $Set$$Type<(T)>): void
 "category"(): StringJS
 "name"(): StringJS
 "type"(): $Class<(any)>
 "comment"(): StringJS
 "defaultValue"(): $Set<(T)>
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: $Set$$Type<(T)>): void
 "synced"(): boolean
 "codec"(): $Codec<($Set<(T)>)>
 "getRaw"(arg0: $LoadedConfig$$Type): $Set<(T)>
 "streamCodec"(): $StreamCodec<($ByteBuf), ($Set<(T)>)>
 "parentSchema"(): $BalmConfigSchema
 "nestedType"(): $Class<(T)>
}

export namespace $ConfiguredSet {
const probejs$$marker: never
}
export class $ConfiguredSet$$Static<T> implements $ConfiguredSet {


 "get"(arg0: $LoadedConfig$$Type): $Set<(T)>
 "get"(): $Set<(T)>
 "set"(arg0: $Set$$Type<(T)>): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: $Set$$Type<(T)>): void
 "category"(): StringJS
 "name"(): StringJS
 "type"(): $Class<(any)>
 "comment"(): StringJS
 "defaultValue"(): $Set<(T)>
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: $Set$$Type<(T)>): void
 "synced"(): boolean
 "codec"(): $Codec<($Set<(T)>)>
 "getRaw"(arg0: $LoadedConfig$$Type): $Set<(T)>
 "streamCodec"(): $StreamCodec<($ByteBuf), ($Set<(T)>)>
 "parentSchema"(): $BalmConfigSchema
 "nestedType"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredSet$$Type<T> = ($ConfiguredSet<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguredSet_<T> = $ConfiguredSet$$Type<(T)>;
}}
declare module "net.blay09.mods.balm.api.event.DigSpeedEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DigSpeedEvent extends $BalmEvent {

constructor(arg0: $Player$$Type, arg1: $BlockState$$Type, arg2: float)

public "getState"(): $BlockState
public "getPlayer"(): $Player
public "getSpeed"(): float
public "setSpeedOverride"(arg0: float): void
public "getSpeedOverride"(): float
get "state"(): $BlockState
get "player"(): $Player
get "speed"(): float
set "speedOverride"(value: float)
get "speedOverride"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DigSpeedEvent$$Type = ($DigSpeedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DigSpeedEvent_ = $DigSpeedEvent$$Type;
}}
declare module "net.blay09.mods.kuma.mixin.KeyMappingAccessor" {
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $KeyMappingAccessor {

 "getKey"(): $InputConstants$Key

(): $InputConstants$Key$$Type
get "key"(): $InputConstants$Key
}

export namespace $KeyMappingAccessor {
const probejs$$marker: never
}
export class $KeyMappingAccessor$$Static implements $KeyMappingAccessor {


 "getKey"(): $InputConstants$Key
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMappingAccessor$$Type = (() => $InputConstants$Key$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyMappingAccessor_ = $KeyMappingAccessor$$Type;
}}
declare module "net.blay09.mods.balm.api.event.PlayerConnectedEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $PlayerConnectedEvent extends $BalmEvent {

constructor(arg0: $ServerPlayer$$Type)

public "getPlayer"(): $ServerPlayer
get "player"(): $ServerPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerConnectedEvent$$Type = ($PlayerConnectedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerConnectedEvent_ = $PlayerConnectedEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.DisconnectedFromServerEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $DisconnectedFromServerEvent extends $BalmEvent {

constructor(arg0: $Minecraft$$Type)

public "getClient"(): $Minecraft
get "client"(): $Minecraft
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisconnectedFromServerEvent$$Type = ($DisconnectedFromServerEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisconnectedFromServerEvent_ = $DisconnectedFromServerEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.builder.ConfigCategoryBuilder" {
import {$ConfigPropertyBuilder, $ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ConfigCategoryImpl, $ConfigCategoryImpl$$Type} from "net.blay09.mods.balm.api.config.schema.impl.ConfigCategoryImpl"
import {$PropertyHolderBuilder, $PropertyHolderBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.PropertyHolderBuilder"

export interface $ConfigCategoryBuilder extends $PropertyHolderBuilder {

 "comment"(arg0: StringJS): $ConfigCategoryImpl
 "via"<T>(arg0: $Function$$Type<($ConfigCategoryBuilder), (T)>): T
 "property"(arg0: StringJS): $ConfigPropertyBuilder
}

export namespace $ConfigCategoryBuilder {
const probejs$$marker: never
}
export class $ConfigCategoryBuilder$$Static implements $ConfigCategoryBuilder {


 "comment"(arg0: StringJS): $ConfigCategoryImpl
 "via"<T>(arg0: $Function$$Type<($ConfigCategoryBuilder), (T)>): T
 "property"(arg0: StringJS): $ConfigPropertyBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigCategoryBuilder$$Type = ($ConfigCategoryBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigCategoryBuilder_ = $ConfigCategoryBuilder$$Type;
}}
declare module "net.blay09.mods.balm.api.event.PlayerChangedDimensionEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $PlayerChangedDimensionEvent extends $BalmEvent {

constructor(arg0: $ServerPlayer$$Type, arg1: $ResourceKey$$Type<($Level)>, arg2: $ResourceKey$$Type<($Level)>)

public "getPlayer"(): $ServerPlayer
public "getFromDim"(): $ResourceKey<($Level)>
public "getToDim"(): $ResourceKey<($Level)>
get "player"(): $ServerPlayer
get "fromDim"(): $ResourceKey<($Level)>
get "toDim"(): $ResourceKey<($Level)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerChangedDimensionEvent$$Type = ($PlayerChangedDimensionEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerChangedDimensionEvent_ = $PlayerChangedDimensionEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.CropGrowEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CropGrowEvent extends $BalmEvent {

constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getLevel"(): $Level
public "getState"(): $BlockState
public "getPos"(): $BlockPos
get "level"(): $Level
get "state"(): $BlockState
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropGrowEvent$$Type = ($CropGrowEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CropGrowEvent_ = $CropGrowEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ContainerScreenDrawEvent$Background" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ContainerScreenDrawEvent, $ContainerScreenDrawEvent$$Type} from "net.blay09.mods.balm.api.event.client.screen.ContainerScreenDrawEvent"

export class $ContainerScreenDrawEvent$Background extends $ContainerScreenDrawEvent {

constructor(arg0: $Screen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerScreenDrawEvent$Background$$Type = ($ContainerScreenDrawEvent$Background);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContainerScreenDrawEvent$Background_ = $ContainerScreenDrawEvent$Background$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.ConfiguredProperty" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig, $MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export interface $ConfiguredProperty<T> {

 "category"(): StringJS
 "name"(): StringJS
 "type"(): $Class<(any)>
 "comment"(): StringJS
 "defaultValue"(): T
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: T): void
 "synced"(): boolean
 "codec"(): $Codec<(T)>
 "getRaw"(arg0: $LoadedConfig$$Type): T
 "streamCodec"(): $StreamCodec<($ByteBuf), (T)>
 "parentSchema"(): $BalmConfigSchema
}

export namespace $ConfiguredProperty {
const probejs$$marker: never
}
export class $ConfiguredProperty$$Static<T> implements $ConfiguredProperty {


 "category"(): StringJS
 "name"(): StringJS
 "type"(): $Class<(any)>
 "comment"(): StringJS
 "defaultValue"(): T
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: T): void
 "synced"(): boolean
 "codec"(): $Codec<(T)>
 "getRaw"(arg0: $LoadedConfig$$Type): T
 "streamCodec"(): $StreamCodec<($ByteBuf), (T)>
 "parentSchema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredProperty$$Type<T> = ($ConfiguredProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguredProperty_<T> = $ConfiguredProperty$$Type<(T)>;
}}
declare module "net.blay09.mods.balm.api.event.ConfigLoadedEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"

export class $ConfigLoadedEvent extends $BalmEvent {

constructor(arg0: $BalmConfigSchema$$Type)

public "getSchema"(): $BalmConfigSchema
get "schema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigLoadedEvent$$Type = ($ConfigLoadedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigLoadedEvent_ = $ConfigLoadedEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.LivingDeathEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingDeathEvent extends $BalmEvent {

constructor(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type)

public "getEntity"(): $LivingEntity
public "getDamageSource"(): $DamageSource
get "entity"(): $LivingEntity
get "damageSource"(): $DamageSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDeathEvent$$Type = ($LivingDeathEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingDeathEvent_ = $LivingDeathEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.ConfigSchemaBuilder" {
import {$ConfigPropertyBuilder, $ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$ConfigCategoryBuilder, $ConfigCategoryBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigCategoryBuilder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ConfigSchemaImpl, $ConfigSchemaImpl$$Type} from "net.blay09.mods.balm.api.config.schema.impl.ConfigSchemaImpl"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$PropertyHolderBuilder, $PropertyHolderBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.PropertyHolderBuilder"
import {$ConfiguredProperty, $ConfiguredProperty$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$ConfigCategory, $ConfigCategory$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigCategory"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"

export interface $ConfigSchemaBuilder extends $PropertyHolderBuilder, $BalmConfigSchema {

 "category"(arg0: StringJS): $ConfigCategoryBuilder
 "property"(arg0: StringJS): $ConfigPropertyBuilder
 "identifier"(): $ResourceLocation
 "defaults"(): $LoadedConfig
 "findProperty"(arg0: StringJS, arg1: StringJS): $ConfiguredProperty<(any)>
 "categories"(): $Collection<($ConfigCategory)>
 "rootProperties"(): $Collection<($ConfiguredProperty<(any)>)>
 "findRootProperty"(arg0: StringJS): $ConfiguredProperty<(any)>
}

export namespace $ConfigSchemaBuilder {
function create(arg0: $ResourceLocation$$Type): $ConfigSchemaImpl
const probejs$$marker: never
}
export class $ConfigSchemaBuilder$$Static implements $ConfigSchemaBuilder {


 "category"(arg0: StringJS): $ConfigCategoryBuilder
 "property"(arg0: StringJS): $ConfigPropertyBuilder
 "identifier"(): $ResourceLocation
static "create"(arg0: $ResourceLocation$$Type): $ConfigSchemaImpl
 "defaults"(): $LoadedConfig
 "findProperty"(arg0: StringJS, arg1: StringJS): $ConfiguredProperty<(any)>
 "categories"(): $Collection<($ConfigCategory)>
 "rootProperties"(): $Collection<($ConfiguredProperty<(any)>)>
 "findRootProperty"(arg0: StringJS): $ConfiguredProperty<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigSchemaBuilder$$Type = ($ConfigSchemaBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigSchemaBuilder_ = $ConfigSchemaBuilder$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.RecipesUpdatedEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$RecipeManager, $RecipeManager$$Type} from "net.minecraft.world.item.crafting.RecipeManager"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

/**
 * 
 * @deprecated
 */
export class $RecipesUpdatedEvent extends $BalmEvent {

constructor(arg0: $RecipeManager$$Type, arg1: $RegistryAccess$$Type)

public "getRegistryAccess"(): $RegistryAccess
public "getRecipeManager"(): $RecipeManager
get "registryAccess"(): $RegistryAccess
get "recipeManager"(): $RecipeManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipesUpdatedEvent$$Type = ($RecipesUpdatedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipesUpdatedEvent_ = $RecipesUpdatedEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Release$Pre" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenKeyEvent$Release, $ScreenKeyEvent$Release$$Type} from "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Release"

export class $ScreenKeyEvent$Release$Pre extends $ScreenKeyEvent$Release {

constructor(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyEvent$Release$Pre$$Type = ($ScreenKeyEvent$Release$Pre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenKeyEvent$Release$Pre_ = $ScreenKeyEvent$Release$Pre$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Release$Post" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenMouseEvent$Release, $ScreenMouseEvent$Release$$Type} from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Release"

export class $ScreenMouseEvent$Release$Post extends $ScreenMouseEvent$Release {

constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvent$Release$Post$$Type = ($ScreenMouseEvent$Release$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvent$Release$Post_ = $ScreenMouseEvent$Release$Post$$Type;
}}
declare module "net.blay09.mods.balm.api.event.server.ServerReloadedEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$ReloadableServerResources, $ReloadableServerResources$$Type} from "net.minecraft.server.ReloadableServerResources"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $ServerReloadedEvent extends $BalmEvent {

constructor(arg0: $ReloadableServerResources$$Type)

public "getResources"(): $ReloadableServerResources
public "getServer"(): $MinecraftServer
get "resources"(): $ReloadableServerResources
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerReloadedEvent$$Type = ($ServerReloadedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerReloadedEvent_ = $ServerReloadedEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.ConfiguredString" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig, $MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ConfiguredProperty, $ConfiguredProperty$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export interface $ConfiguredString extends $ConfiguredProperty<(StringJS)> {

 "get"(arg0: $LoadedConfig$$Type): StringJS
 "get"(): StringJS
 "set"(arg0: StringJS): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: StringJS): void
 "category"(): StringJS
 "name"(): StringJS
 "type"(): $Class<(any)>
 "comment"(): StringJS
 "defaultValue"(): StringJS
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: StringJS): void
 "synced"(): boolean
 "codec"(): $Codec<(StringJS)>
 "getRaw"(arg0: $LoadedConfig$$Type): StringJS
 "streamCodec"(): $StreamCodec<($ByteBuf), (StringJS)>
 "parentSchema"(): $BalmConfigSchema
}

export namespace $ConfiguredString {
const probejs$$marker: never
}
export class $ConfiguredString$$Static implements $ConfiguredString {


 "get"(arg0: $LoadedConfig$$Type): StringJS
 "get"(): StringJS
 "set"(arg0: StringJS): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: StringJS): void
 "category"(): StringJS
 "name"(): StringJS
 "type"(): $Class<(any)>
 "comment"(): StringJS
 "defaultValue"(): StringJS
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: StringJS): void
 "synced"(): boolean
 "codec"(): $Codec<(StringJS)>
 "getRaw"(arg0: $LoadedConfig$$Type): StringJS
 "streamCodec"(): $StreamCodec<($ByteBuf), (StringJS)>
 "parentSchema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredString$$Type = ($ConfiguredString);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguredString_ = $ConfiguredString$$Type;
}}
declare module "net.blay09.mods.balm.api.event.TossItemEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export class $TossItemEvent extends $BalmEvent {

constructor(arg0: $Player$$Type, arg1: $ItemStack$$Type)

public "getPlayer"(): $Player
public "getItemStack"(): $ItemStack
get "player"(): $Player
get "itemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TossItemEvent$$Type = ($TossItemEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TossItemEvent_ = $TossItemEvent$$Type;
}}
declare module "net.blay09.mods.balm.mixin.AbstractContainerScreenAccessor" {
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $AbstractContainerScreenAccessor {

 "getLeftPos"(): integer
 "getTopPos"(): integer
 "getImageWidth"(): integer
 "getImageHeight"(): integer
 "getHoveredSlot"(): $Slot
 "callIsHovering"(arg0: $Slot$$Type, arg1: double, arg2: double): boolean
 "callRenderSlot"(arg0: $GuiGraphics$$Type, arg1: $Slot$$Type): void
get "leftPos"(): integer
get "topPos"(): integer
get "imageWidth"(): integer
get "imageHeight"(): integer
get "hoveredSlot"(): $Slot
}

export namespace $AbstractContainerScreenAccessor {
const probejs$$marker: never
}
export class $AbstractContainerScreenAccessor$$Static implements $AbstractContainerScreenAccessor {


 "getLeftPos"(): integer
 "getTopPos"(): integer
 "getImageWidth"(): integer
 "getImageHeight"(): integer
 "getHoveredSlot"(): $Slot
 "callIsHovering"(arg0: $Slot$$Type, arg1: double, arg2: double): boolean
 "callRenderSlot"(arg0: $GuiGraphics$$Type, arg1: $Slot$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerScreenAccessor$$Type = ($AbstractContainerScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerScreenAccessor_ = $AbstractContainerScreenAccessor$$Type;
}}
declare module "net.blay09.mods.balm.api.event.server.ServerStartedEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $ServerStartedEvent extends $BalmEvent {

constructor(arg0: $MinecraftServer$$Type)

public "getServer"(): $MinecraftServer
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerStartedEvent$$Type = ($ServerStartedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerStartedEvent_ = $ServerStartedEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenInitEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export class $ScreenInitEvent extends $BalmEvent {

constructor(arg0: $Screen$$Type)

public "getScreen"(): $Screen
get "screen"(): $Screen
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenInitEvent$$Type = ($ScreenInitEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenInitEvent_ = $ScreenInitEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.BreakBlockEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BreakBlockEvent extends $BalmEvent {

constructor(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type)

public "getLevel"(): $Level
public "getState"(): $BlockState
public "getPos"(): $BlockPos
public "getPlayer"(): $Player
public "getBlockEntity"(): $BlockEntity
get "level"(): $Level
get "state"(): $BlockState
get "pos"(): $BlockPos
get "player"(): $Player
get "blockEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BreakBlockEvent$$Type = ($BreakBlockEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BreakBlockEvent_ = $BreakBlockEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.ClientStartedEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $ClientStartedEvent extends $BalmEvent {

constructor(arg0: $Minecraft$$Type)

public "getMinecraft"(): $Minecraft
get "minecraft"(): $Minecraft
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientStartedEvent$$Type = ($ClientStartedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientStartedEvent_ = $ClientStartedEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.ItemCraftedEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export class $ItemCraftedEvent extends $BalmEvent {

constructor(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Container$$Type)

public "getPlayer"(): $Player
public "getItemStack"(): $ItemStack
public "getCraftMatrix"(): $Container
get "player"(): $Player
get "itemStack"(): $ItemStack
get "craftMatrix"(): $Container
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCraftedEvent$$Type = ($ItemCraftedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCraftedEvent_ = $ItemCraftedEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.builder.DoubleConfigProperty" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractConfigProperty, $AbstractConfigProperty$$Type} from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import {$MutableLoadedConfig, $MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfigPropertyBuilder, $ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredDouble, $ConfiguredDouble$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredDouble"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $DoubleConfigProperty extends $AbstractConfigProperty<(double)> implements $ConfiguredDouble {
static readonly "CODEC": $Codec<(double)>

constructor(arg0: $ConfigPropertyBuilder$$Type, arg1: double)

public "type"(): $Class<(double)>
public "defaultValue"(): double
public "codec"(): $Codec<(double)>
public "streamCodec"(): $StreamCodec<($ByteBuf), (double)>
public "get"(arg0: $LoadedConfig$$Type): double
public "get"(): double
public "set"(arg0: double): void
public "set"(arg0: $MutableLoadedConfig$$Type, arg1: double): void
public "parentSchema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleConfigProperty$$Type = ($DoubleConfigProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleConfigProperty_ = $DoubleConfigProperty$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.ConfiguredList" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$NestedTypeHolder, $NestedTypeHolder$$Type} from "net.blay09.mods.balm.api.config.schema.NestedTypeHolder"
import {$MutableLoadedConfig, $MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ConfiguredProperty, $ConfiguredProperty$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export interface $ConfiguredList<T> extends $ConfiguredProperty<($List<(T)>)>, $NestedTypeHolder<(T)> {

 "get"(arg0: $LoadedConfig$$Type): $List<(T)>
 "get"(): $List<(T)>
 "set"(arg0: $List$$Type<(T)>): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: $List$$Type<(T)>): void
 "category"(): StringJS
 "name"(): StringJS
 "type"(): $Class<(any)>
 "comment"(): StringJS
 "defaultValue"(): $List<(T)>
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: $List$$Type<(T)>): void
 "synced"(): boolean
 "codec"(): $Codec<($List<(T)>)>
 "getRaw"(arg0: $LoadedConfig$$Type): $List<(T)>
 "streamCodec"(): $StreamCodec<($ByteBuf), ($List<(T)>)>
 "parentSchema"(): $BalmConfigSchema
 "nestedType"(): $Class<(T)>
}

export namespace $ConfiguredList {
const probejs$$marker: never
}
export class $ConfiguredList$$Static<T> implements $ConfiguredList {


 "get"(arg0: $LoadedConfig$$Type): $List<(T)>
 "get"(): $List<(T)>
 "set"(arg0: $List$$Type<(T)>): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: $List$$Type<(T)>): void
 "category"(): StringJS
 "name"(): StringJS
 "type"(): $Class<(any)>
 "comment"(): StringJS
 "defaultValue"(): $List<(T)>
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: $List$$Type<(T)>): void
 "synced"(): boolean
 "codec"(): $Codec<($List<(T)>)>
 "getRaw"(arg0: $LoadedConfig$$Type): $List<(T)>
 "streamCodec"(): $StreamCodec<($ByteBuf), ($List<(T)>)>
 "parentSchema"(): $BalmConfigSchema
 "nestedType"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredList$$Type<T> = ($ConfiguredList<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguredList_<T> = $ConfiguredList$$Type<(T)>;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Release$Post" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenKeyEvent$Release, $ScreenKeyEvent$Release$$Type} from "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Release"

export class $ScreenKeyEvent$Release$Post extends $ScreenKeyEvent$Release {

constructor(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyEvent$Release$Post$$Type = ($ScreenKeyEvent$Release$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenKeyEvent$Release$Post_ = $ScreenKeyEvent$Release$Post$$Type;
}}
declare module "net.blay09.mods.balm.api.event.UseBlockEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export class $UseBlockEvent extends $BalmEvent {

constructor(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $InteractionHand$$Type, arg3: $BlockHitResult$$Type)

public "getLevel"(): $Level
public "setResult"(arg0: $InteractionResult$$Type): void
public "getPlayer"(): $Player
public "getHand"(): $InteractionHand
public "getHitResult"(): $BlockHitResult
public "getInteractionResult"(): $InteractionResult
get "level"(): $Level
set "result"(value: $InteractionResult$$Type)
get "player"(): $Player
get "hand"(): $InteractionHand
get "hitResult"(): $BlockHitResult
get "interactionResult"(): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UseBlockEvent$$Type = ($UseBlockEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UseBlockEvent_ = $UseBlockEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.RenderHandEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"

export class $RenderHandEvent extends $BalmEvent {

constructor(arg0: $InteractionHand$$Type, arg1: $ItemStack$$Type, arg2: float)

public "getHand"(): $InteractionHand
public "getItemStack"(): $ItemStack
public "getSwingProgress"(): float
get "hand"(): $InteractionHand
get "itemStack"(): $ItemStack
get "swingProgress"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderHandEvent$$Type = ($RenderHandEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderHandEvent_ = $RenderHandEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.builder.IntConfigProperty" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractConfigProperty, $AbstractConfigProperty$$Type} from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import {$MutableLoadedConfig, $MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfigPropertyBuilder, $ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredInt, $ConfiguredInt$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredInt"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $IntConfigProperty extends $AbstractConfigProperty<(integer)> implements $ConfiguredInt {
static readonly "CODEC": $Codec<(integer)>

constructor(arg0: $ConfigPropertyBuilder$$Type, arg1: integer)

public "type"(): $Class<(integer)>
public "defaultValue"(): integer
public "codec"(): $Codec<(integer)>
public "streamCodec"(): $StreamCodec<($ByteBuf), (integer)>
public "get"(arg0: $LoadedConfig$$Type): integer
public "get"(): integer
public "set"(arg0: integer): void
public "set"(arg0: $MutableLoadedConfig$$Type, arg1: integer): void
public "parentSchema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntConfigProperty$$Type = ($IntConfigProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntConfigProperty_ = $IntConfigProperty$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.builder.FloatConfigProperty" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractConfigProperty, $AbstractConfigProperty$$Type} from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import {$MutableLoadedConfig, $MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfigPropertyBuilder, $ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ConfiguredFloat, $ConfiguredFloat$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredFloat"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $FloatConfigProperty extends $AbstractConfigProperty<(float)> implements $ConfiguredFloat {
static readonly "CODEC": $Codec<(float)>

constructor(arg0: $ConfigPropertyBuilder$$Type, arg1: float)

public "type"(): $Class<(float)>
public "defaultValue"(): float
public "codec"(): $Codec<(float)>
public "streamCodec"(): $StreamCodec<($ByteBuf), (float)>
public "get"(arg0: $LoadedConfig$$Type): float
public "get"(): float
public "set"(arg0: float): void
public "set"(arg0: $MutableLoadedConfig$$Type, arg1: float): void
public "parentSchema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatConfigProperty$$Type = ($FloatConfigProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloatConfigProperty_ = $FloatConfigProperty$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Click$Pre" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenMouseEvent$Click, $ScreenMouseEvent$Click$$Type} from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Click"

export class $ScreenMouseEvent$Click$Pre extends $ScreenMouseEvent$Click {

constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvent$Click$Pre$$Type = ($ScreenMouseEvent$Click$Pre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvent$Click$Pre_ = $ScreenMouseEvent$Click$Pre$$Type;
}}
declare module "net.blay09.mods.balm.api.event.CommandEvent" {
import {$ParseResults, $ParseResults$$Type} from "com.mojang.brigadier.ParseResults"
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $CommandEvent extends $BalmEvent {

constructor(arg0: $ParseResults$$Type<($CommandSourceStack$$Type)>)

public "getParseResults"(): $ParseResults<($CommandSourceStack)>
get "parseResults"(): $ParseResults<($CommandSourceStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandEvent$$Type = ($CommandEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandEvent_ = $CommandEvent$$Type;
}}
declare module "net.blay09.mods.balm.mixin.ScreenAccessor" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$List, $List$$Type} from "java.util.List"
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"

export interface $ScreenAccessor {

 "balm_getChildren"(): $List<($GuiEventListener)>
 "balm_getNarratables"(): $List<($NarratableEntry)>
 "balm_getRenderables"(): $List<($Renderable)>
}

export namespace $ScreenAccessor {
const probejs$$marker: never
}
export class $ScreenAccessor$$Static implements $ScreenAccessor {


 "balm_getChildren"(): $List<($GuiEventListener)>
 "balm_getNarratables"(): $List<($NarratableEntry)>
 "balm_getRenderables"(): $List<($Renderable)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$$Type = ($ScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenAccessor_ = $ScreenAccessor$$Type;
}}
declare module "net.blay09.mods.defaultoptions.neoforge.mixin.NeoForgeKeyMappingAccessor" {
import {$KeyModifier, $KeyModifier$$Type} from "net.neoforged.neoforge.client.settings.KeyModifier"

export interface $NeoForgeKeyMappingAccessor {

 "setKeyModifierDefault"(arg0: $KeyModifier$$Type): void

(arg0: $KeyModifier): void
set "keyModifierDefault"(value: $KeyModifier$$Type)
}

export namespace $NeoForgeKeyMappingAccessor {
const probejs$$marker: never
}
export class $NeoForgeKeyMappingAccessor$$Static implements $NeoForgeKeyMappingAccessor {


 "setKeyModifierDefault"(arg0: $KeyModifier$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NeoForgeKeyMappingAccessor$$Type = ((arg0: $KeyModifier) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NeoForgeKeyMappingAccessor_ = $NeoForgeKeyMappingAccessor$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenDrawEvent$Post" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenDrawEvent, $ScreenDrawEvent$$Type} from "net.blay09.mods.balm.api.event.client.screen.ScreenDrawEvent"

export class $ScreenDrawEvent$Post extends $ScreenDrawEvent {

constructor(arg0: $Screen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenDrawEvent$Post$$Type = ($ScreenDrawEvent$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenDrawEvent$Post_ = $ScreenDrawEvent$Post$$Type;
}}
declare module "net.blay09.mods.balm.api.config.MutableLoadedConfig" {
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$ConfiguredProperty, $ConfiguredProperty$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"

export interface $MutableLoadedConfig extends $LoadedConfig {

 "copy"(): $MutableLoadedConfig
 "setRaw"<T>(arg0: $ConfiguredProperty$$Type<(T)>, arg1: T): void
 "applyFrom"(arg0: $BalmConfigSchema$$Type, arg1: $LoadedConfig$$Type): void
 "applyFrom"(arg0: $BalmConfigSchema$$Type, arg1: $LoadedConfig$$Type, arg2: $Predicate$$Type<($ConfiguredProperty<(any)>)>): void
 "getRaw"<T>(arg0: $ConfiguredProperty$$Type<(T)>): T
 "mutable"(arg0: $BalmConfigSchema$$Type): $MutableLoadedConfig
}

export namespace $MutableLoadedConfig {
const probejs$$marker: never
}
export class $MutableLoadedConfig$$Static implements $MutableLoadedConfig {


 "copy"(): $MutableLoadedConfig
 "setRaw"<T>(arg0: $ConfiguredProperty$$Type<(T)>, arg1: T): void
 "applyFrom"(arg0: $BalmConfigSchema$$Type, arg1: $LoadedConfig$$Type): void
 "applyFrom"(arg0: $BalmConfigSchema$$Type, arg1: $LoadedConfig$$Type, arg2: $Predicate$$Type<($ConfiguredProperty<(any)>)>): void
 "getRaw"<T>(arg0: $ConfiguredProperty$$Type<(T)>): T
 "mutable"(arg0: $BalmConfigSchema$$Type): $MutableLoadedConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableLoadedConfig$$Type = ($MutableLoadedConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableLoadedConfig_ = $MutableLoadedConfig$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenDrawEvent$Pre" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenDrawEvent, $ScreenDrawEvent$$Type} from "net.blay09.mods.balm.api.event.client.screen.ScreenDrawEvent"

export class $ScreenDrawEvent$Pre extends $ScreenDrawEvent {

constructor(arg0: $Screen$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenDrawEvent$Pre$$Type = ($ScreenDrawEvent$Pre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenDrawEvent$Pre_ = $ScreenDrawEvent$Pre$$Type;
}}
declare module "net.blay09.mods.balm.mixin.MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor {

 "getMouseX"(): double
 "getMouseY"(): double
get "mouseX"(): double
get "mouseY"(): double
}

export namespace $MouseHandlerAccessor {
const probejs$$marker: never
}
export class $MouseHandlerAccessor$$Static implements $MouseHandlerAccessor {


 "getMouseX"(): double
 "getMouseY"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseHandlerAccessor$$Type = ($MouseHandlerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseHandlerAccessor_ = $MouseHandlerAccessor$$Type;
}}
declare module "net.blay09.mods.balm.api.event.PlayerRespawnEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $PlayerRespawnEvent extends $BalmEvent {

constructor(arg0: $ServerPlayer$$Type, arg1: $ServerPlayer$$Type)

public "getOldPlayer"(): $ServerPlayer
public "getNewPlayer"(): $ServerPlayer
get "oldPlayer"(): $ServerPlayer
get "newPlayer"(): $ServerPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerRespawnEvent$$Type = ($PlayerRespawnEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerRespawnEvent_ = $PlayerRespawnEvent$$Type;
}}
declare module "net.blay09.mods.balm.mixin.KeyMappingAccessor" {
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $KeyMappingAccessor {

 "getKey"(): $InputConstants$Key

(): $InputConstants$Key$$Type
get "key"(): $InputConstants$Key
}

export namespace $KeyMappingAccessor {
const probejs$$marker: never
}
export class $KeyMappingAccessor$$Static implements $KeyMappingAccessor {


 "getKey"(): $InputConstants$Key
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMappingAccessor$$Type = (() => $InputConstants$Key$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyMappingAccessor_ = $KeyMappingAccessor$$Type;
}}
declare module "net.blay09.mods.balm.api.event.server.ServerStartingEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $ServerStartingEvent extends $BalmEvent {

constructor(arg0: $MinecraftServer$$Type)

public "getServer"(): $MinecraftServer
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerStartingEvent$$Type = ($ServerStartingEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerStartingEvent_ = $ServerStartingEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.ItemTooltipEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"

export class $ItemTooltipEvent extends $BalmEvent {

constructor(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type)

public "getFlags"(): $TooltipFlag
public "getPlayer"(): $Player
public "getItemStack"(): $ItemStack
public "getToolTip"(): $List<($Component)>
get "flags"(): $TooltipFlag
get "player"(): $Player
get "itemStack"(): $ItemStack
get "toolTip"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTooltipEvent$$Type = ($ItemTooltipEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTooltipEvent_ = $ItemTooltipEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder" {
import {$BooleanConfigProperty, $BooleanConfigProperty$$Type} from "net.blay09.mods.balm.api.config.schema.builder.BooleanConfigProperty"
import {$LongConfigProperty, $LongConfigProperty$$Type} from "net.blay09.mods.balm.api.config.schema.builder.LongConfigProperty"
import {$ListConfigProperty, $ListConfigProperty$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ListConfigProperty"
import {$StringConfigProperty, $StringConfigProperty$$Type} from "net.blay09.mods.balm.api.config.schema.builder.StringConfigProperty"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$List, $List$$Type} from "java.util.List"
import {$SetConfigProperty, $SetConfigProperty$$Type} from "net.blay09.mods.balm.api.config.schema.builder.SetConfigProperty"
import {$FloatConfigProperty, $FloatConfigProperty$$Type} from "net.blay09.mods.balm.api.config.schema.builder.FloatConfigProperty"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$EnumConfigProperty, $EnumConfigProperty$$Type} from "net.blay09.mods.balm.api.config.schema.builder.EnumConfigProperty"
import {$IntConfigProperty, $IntConfigProperty$$Type} from "net.blay09.mods.balm.api.config.schema.builder.IntConfigProperty"
import {$ConfigSchemaImpl, $ConfigSchemaImpl$$Type} from "net.blay09.mods.balm.api.config.schema.impl.ConfigSchemaImpl"
import {$Set, $Set$$Type} from "java.util.Set"
import {$DoubleConfigProperty, $DoubleConfigProperty$$Type} from "net.blay09.mods.balm.api.config.schema.builder.DoubleConfigProperty"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ResourceLocationConfigProperty, $ResourceLocationConfigProperty$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ResourceLocationConfigProperty"

export class $ConfigPropertyBuilder {

constructor(arg0: $ConfigSchemaImpl$$Type, arg1: StringJS, arg2: StringJS)
constructor(arg0: $ConfigSchemaImpl$$Type, arg1: StringJS)

public "stringOf"(arg0: StringJS): $StringConfigProperty
public "comment"(arg0: StringJS): $ConfigPropertyBuilder
public "intOf"(arg0: integer): $IntConfigProperty
public "longOf"(arg0: long): $LongConfigProperty
public "boolOf"(arg0: boolean): $BooleanConfigProperty
public "enumOf"<T extends $Enum<(T)>>(arg0: T): $EnumConfigProperty<(T)>
public "setOf"<T>(arg0: $Class$$Type<(T)>, arg1: $Set$$Type<(T)>): $SetConfigProperty<(T)>
public "synced"(): $ConfigPropertyBuilder
public "listOf"<T>(arg0: $Class$$Type<(T)>, arg1: $List$$Type<(T)>): $ListConfigProperty<(T)>
public "floatOf"(arg0: float): $FloatConfigProperty
public "doubleOf"(arg0: double): $DoubleConfigProperty
public "resourceLocationOf"(arg0: $ResourceLocation$$Type): $ResourceLocationConfigProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigPropertyBuilder$$Type = ($ConfigPropertyBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigPropertyBuilder_ = $ConfigPropertyBuilder$$Type;
}}
declare module "net.blay09.mods.defaultoptions.mixin.KeyMappingAccessor" {
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $KeyMappingAccessor {

 "setDefaultKey"(arg0: $InputConstants$Key$$Type): void

(arg0: $InputConstants$Key): void
set "defaultKey"(value: $InputConstants$Key$$Type)
}

export namespace $KeyMappingAccessor {
const probejs$$marker: never
}
export class $KeyMappingAccessor$$Static implements $KeyMappingAccessor {


 "setDefaultKey"(arg0: $InputConstants$Key$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMappingAccessor$$Type = ((arg0: $InputConstants$Key) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyMappingAccessor_ = $KeyMappingAccessor$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.impl.ConfigCategoryImpl" {
import {$ConfigPropertyBuilder, $ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$ConfigCategoryBuilder, $ConfigCategoryBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigCategoryBuilder"
import {$List, $List$$Type} from "java.util.List"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ConfigSchemaImpl, $ConfigSchemaImpl$$Type} from "net.blay09.mods.balm.api.config.schema.impl.ConfigSchemaImpl"
import {$ConfiguredProperty, $ConfiguredProperty$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$ConfigCategory, $ConfigCategory$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigCategory"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"

export class $ConfigCategoryImpl implements $ConfigCategoryBuilder, $ConfigCategory {

constructor(arg0: $ConfigSchemaImpl$$Type, arg1: StringJS)

public "property"(arg0: StringJS): $ConfigPropertyBuilder
public "name"(): StringJS
public "properties"(): $List<($ConfiguredProperty<(any)>)>
public "comment"(): StringJS
public "comment"(arg0: StringJS): $ConfigCategoryImpl
public "via"<T>(arg0: $Function$$Type<($ConfigCategoryBuilder), (T)>): T
public "addProperty"<T extends $ConfiguredProperty<(any)>>(arg0: T): void
public "parentSchema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigCategoryImpl$$Type = ($ConfigCategoryImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigCategoryImpl_ = $ConfigCategoryImpl$$Type;
}}
declare module "net.blay09.mods.balm.mixin.ModelBakeryAccessor" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$UnbakedModel, $UnbakedModel$$Type} from "net.minecraft.client.resources.model.UnbakedModel"

export interface $ModelBakeryAccessor {

 "callGetModel"(arg0: $ResourceLocation$$Type): $UnbakedModel

(arg0: $ResourceLocation): $UnbakedModel$$Type
}

export namespace $ModelBakeryAccessor {
const probejs$$marker: never
}
export class $ModelBakeryAccessor$$Static implements $ModelBakeryAccessor {


 "callGetModel"(arg0: $ResourceLocation$$Type): $UnbakedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBakeryAccessor$$Type = ((arg0: $ResourceLocation) => $UnbakedModel$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBakeryAccessor_ = $ModelBakeryAccessor$$Type;
}}
declare module "net.blay09.mods.balm.api.event.server.ServerReloadFinishedEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export class $ServerReloadFinishedEvent extends $BalmEvent {

constructor(arg0: $MinecraftServer$$Type)

public "getServer"(): $MinecraftServer
get "server"(): $MinecraftServer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerReloadFinishedEvent$$Type = ($ServerReloadFinishedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerReloadFinishedEvent_ = $ServerReloadFinishedEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.GuiDrawEvent$Pre" {
import {$GuiDrawEvent$Element, $GuiDrawEvent$Element$$Type} from "net.blay09.mods.balm.api.event.client.GuiDrawEvent$Element"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$GuiDrawEvent, $GuiDrawEvent$$Type} from "net.blay09.mods.balm.api.event.client.GuiDrawEvent"
import {$Window, $Window$$Type} from "com.mojang.blaze3d.platform.Window"

export class $GuiDrawEvent$Pre extends $GuiDrawEvent {

constructor(arg0: $Window$$Type, arg1: $GuiGraphics$$Type, arg2: $GuiDrawEvent$Element$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiDrawEvent$Pre$$Type = ($GuiDrawEvent$Pre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiDrawEvent$Pre_ = $GuiDrawEvent$Pre$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent$Drag" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenMouseEvent, $ScreenMouseEvent$$Type} from "net.blay09.mods.balm.api.event.client.screen.ScreenMouseEvent"

export class $ScreenMouseEvent$Drag extends $ScreenMouseEvent {

constructor(arg0: $Screen$$Type, arg1: double, arg2: double, arg3: integer, arg4: double, arg5: double)

public "getDragX"(): double
public "getDragY"(): double
get "dragX"(): double
get "dragY"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvent$Drag$$Type = ($ScreenMouseEvent$Drag);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvent$Drag_ = $ScreenMouseEvent$Drag$$Type;
}}
declare module "net.blay09.mods.balm.api.event.PlayerAttackEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $PlayerAttackEvent extends $BalmEvent {

constructor(arg0: $Player$$Type, arg1: $Entity$$Type)

public "getTarget"(): $Entity
public "getPlayer"(): $Player
get "target"(): $Entity
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAttackEvent$$Type = ($PlayerAttackEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerAttackEvent_ = $PlayerAttackEvent$$Type;
}}
declare module "net.blay09.mods.defaultoptions.DefaultOptionsKeyMapping" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DefaultOptionsKeyMapping {

 "defaultoptions$wasSeen"(): boolean
 "defaultoptions$setSeen"(arg0: boolean): void
}

export namespace $DefaultOptionsKeyMapping {
const probejs$$marker: never
}
export class $DefaultOptionsKeyMapping$$Static implements $DefaultOptionsKeyMapping {


 "defaultoptions$wasSeen"(): boolean
 "defaultoptions$setSeen"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultOptionsKeyMapping$$Type = ($DefaultOptionsKeyMapping);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultOptionsKeyMapping_ = $DefaultOptionsKeyMapping$$Type;
}}
declare module "net.blay09.mods.balm.api.event.PlayerLogoutEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $PlayerLogoutEvent extends $BalmEvent {

constructor(arg0: $ServerPlayer$$Type)

public "getPlayer"(): $ServerPlayer
get "player"(): $ServerPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerLogoutEvent$$Type = ($PlayerLogoutEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerLogoutEvent_ = $PlayerLogoutEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.UseItemEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"

export class $UseItemEvent extends $BalmEvent {

constructor(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $InteractionHand$$Type)

public "getLevel"(): $Level
public "setResult"(arg0: $InteractionResult$$Type): void
public "getPlayer"(): $Player
public "getHand"(): $InteractionHand
public "getInteractionResult"(): $InteractionResult
get "level"(): $Level
set "result"(value: $InteractionResult$$Type)
get "player"(): $Player
get "hand"(): $InteractionHand
get "interactionResult"(): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UseItemEvent$$Type = ($UseItemEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UseItemEvent_ = $UseItemEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.ConfiguredResourceLocation" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig, $MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ConfiguredProperty, $ConfiguredProperty$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export interface $ConfiguredResourceLocation extends $ConfiguredProperty<($ResourceLocation)> {

 "get"(arg0: $LoadedConfig$$Type): $ResourceLocation
 "get"(): $ResourceLocation
 "set"(arg0: $ResourceLocation$$Type): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: $ResourceLocation$$Type): void
 "category"(): StringJS
 "name"(): StringJS
 "type"(): $Class<(any)>
 "comment"(): StringJS
 "defaultValue"(): $ResourceLocation
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: $ResourceLocation$$Type): void
 "synced"(): boolean
 "codec"(): $Codec<($ResourceLocation)>
 "getRaw"(arg0: $LoadedConfig$$Type): $ResourceLocation
 "streamCodec"(): $StreamCodec<($ByteBuf), ($ResourceLocation)>
 "parentSchema"(): $BalmConfigSchema
}

export namespace $ConfiguredResourceLocation {
const probejs$$marker: never
}
export class $ConfiguredResourceLocation$$Static implements $ConfiguredResourceLocation {


 "get"(arg0: $LoadedConfig$$Type): $ResourceLocation
 "get"(): $ResourceLocation
 "set"(arg0: $ResourceLocation$$Type): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: $ResourceLocation$$Type): void
 "category"(): StringJS
 "name"(): StringJS
 "type"(): $Class<(any)>
 "comment"(): StringJS
 "defaultValue"(): $ResourceLocation
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: $ResourceLocation$$Type): void
 "synced"(): boolean
 "codec"(): $Codec<($ResourceLocation)>
 "getRaw"(arg0: $LoadedConfig$$Type): $ResourceLocation
 "streamCodec"(): $StreamCodec<($ByteBuf), ($ResourceLocation)>
 "parentSchema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredResourceLocation$$Type = ($ConfiguredResourceLocation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguredResourceLocation_ = $ConfiguredResourceLocation$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.builder.LongConfigProperty" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$AbstractConfigProperty, $AbstractConfigProperty$$Type} from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import {$MutableLoadedConfig, $MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfigPropertyBuilder, $ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ConfiguredLong, $ConfiguredLong$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredLong"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $LongConfigProperty extends $AbstractConfigProperty<(long)> implements $ConfiguredLong {
static readonly "CODEC": $Codec<(long)>

constructor(arg0: $ConfigPropertyBuilder$$Type, arg1: long)

public "type"(): $Class<(long)>
public "defaultValue"(): long
public "codec"(): $Codec<(long)>
public "streamCodec"(): $StreamCodec<($ByteBuf), (long)>
public "get"(arg0: $LoadedConfig$$Type): long
public "get"(): long
public "set"(arg0: long): void
public "set"(arg0: $MutableLoadedConfig$$Type, arg1: long): void
public "parentSchema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongConfigProperty$$Type = ($LongConfigProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongConfigProperty_ = $LongConfigProperty$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.GuiDrawEvent$Element" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $GuiDrawEvent$Element extends $Enum<($GuiDrawEvent$Element)> {
static readonly "ALL": $GuiDrawEvent$Element
static readonly "BOSS_INFO": $GuiDrawEvent$Element
static readonly "CHAT": $GuiDrawEvent$Element
static readonly "HEALTH": $GuiDrawEvent$Element
static readonly "PLAYER_LIST": $GuiDrawEvent$Element
static readonly "DEBUG": $GuiDrawEvent$Element


public static "values"(): ($GuiDrawEvent$Element)[]
public static "valueOf"(arg0: StringJS): $GuiDrawEvent$Element
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiDrawEvent$Element$$Type = (("all") | ("health") | ("chat") | ("debug") | ("boss_info") | ("player_list"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiDrawEvent$Element_ = $GuiDrawEvent$Element$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Release" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenKeyEvent, $ScreenKeyEvent$$Type} from "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent"

export class $ScreenKeyEvent$Release extends $ScreenKeyEvent {

constructor(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyEvent$Release$$Type = ($ScreenKeyEvent$Release);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenKeyEvent$Release_ = $ScreenKeyEvent$Release$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent$Press" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenKeyEvent, $ScreenKeyEvent$$Type} from "net.blay09.mods.balm.api.event.client.screen.ScreenKeyEvent"

export class $ScreenKeyEvent$Press extends $ScreenKeyEvent {

constructor(arg0: $Screen$$Type, arg1: integer, arg2: integer, arg3: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyEvent$Press$$Type = ($ScreenKeyEvent$Press);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenKeyEvent$Press_ = $ScreenKeyEvent$Press$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.ConfiguredEnum" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$MutableLoadedConfig, $MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ConfiguredProperty, $ConfiguredProperty$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredProperty"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export interface $ConfiguredEnum<T extends $Enum<(T)>> extends $ConfiguredProperty<(T)> {

 "get"(arg0: $LoadedConfig$$Type): T
 "get"(): T
 "set"(arg0: T): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: T): void
 "category"(): StringJS
 "name"(): StringJS
 "type"(): $Class<(any)>
 "comment"(): StringJS
 "defaultValue"(): T
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: T): void
 "synced"(): boolean
 "codec"(): $Codec<(T)>
 "getRaw"(arg0: $LoadedConfig$$Type): T
 "streamCodec"(): $StreamCodec<($ByteBuf), (T)>
 "parentSchema"(): $BalmConfigSchema
}

export namespace $ConfiguredEnum {
const probejs$$marker: never
}
export class $ConfiguredEnum$$Static<T extends $Enum<(T)>> implements $ConfiguredEnum {


 "get"(arg0: $LoadedConfig$$Type): T
 "get"(): T
 "set"(arg0: T): void
 "set"(arg0: $MutableLoadedConfig$$Type, arg1: T): void
 "category"(): StringJS
 "name"(): StringJS
 "type"(): $Class<(any)>
 "comment"(): StringJS
 "defaultValue"(): T
 "setRaw"(arg0: $MutableLoadedConfig$$Type, arg1: T): void
 "synced"(): boolean
 "codec"(): $Codec<(T)>
 "getRaw"(arg0: $LoadedConfig$$Type): T
 "streamCodec"(): $StreamCodec<($ByteBuf), (T)>
 "parentSchema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredEnum$$Type<T> = ($ConfiguredEnum<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguredEnum_<T> = $ConfiguredEnum$$Type<(T)>;
}}
declare module "net.blay09.mods.forgivingvoid.mixin.ThrownTridentAccessor" {
import {$EntityDataAccessor, $EntityDataAccessor$$Type} from "net.minecraft.network.syncher.EntityDataAccessor"

export interface $ThrownTridentAccessor {

}

export namespace $ThrownTridentAccessor {
function getIdLoyalty(): $EntityDataAccessor<(byte)>
const probejs$$marker: never
}
export class $ThrownTridentAccessor$$Static implements $ThrownTridentAccessor {


static "getIdLoyalty"(): $EntityDataAccessor<(byte)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThrownTridentAccessor$$Type = ($ThrownTridentAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThrownTridentAccessor_ = $ThrownTridentAccessor$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.FovUpdateEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $FovUpdateEvent extends $BalmEvent {

constructor(arg0: $LivingEntity$$Type)

public "getEntity"(): $LivingEntity
public "setFov"(arg0: float): void
public "getFov"(): float
get "entity"(): $LivingEntity
set "fov"(value: float)
get "fov"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FovUpdateEvent$$Type = ($FovUpdateEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FovUpdateEvent_ = $FovUpdateEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.BlockHighlightDrawEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"

export class $BlockHighlightDrawEvent extends $BalmEvent {

constructor(arg0: $BlockHitResult$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: $Camera$$Type)

public "getCamera"(): $Camera
public "getPoseStack"(): $PoseStack
public "getHitResult"(): $BlockHitResult
public "getMultiBufferSource"(): $MultiBufferSource
get "camera"(): $Camera
get "poseStack"(): $PoseStack
get "hitResult"(): $BlockHitResult
get "multiBufferSource"(): $MultiBufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockHighlightDrawEvent$$Type = ($BlockHighlightDrawEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockHighlightDrawEvent_ = $BlockHighlightDrawEvent$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.screen.ScreenInitEvent$Pre" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$ScreenInitEvent, $ScreenInitEvent$$Type} from "net.blay09.mods.balm.api.event.client.screen.ScreenInitEvent"

export class $ScreenInitEvent$Pre extends $ScreenInitEvent {

constructor(arg0: $Screen$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenInitEvent$Pre$$Type = ($ScreenInitEvent$Pre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenInitEvent$Pre_ = $ScreenInitEvent$Pre$$Type;
}}
declare module "net.blay09.mods.balm.api.config.schema.builder.ResourceLocationConfigProperty" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ConfiguredResourceLocation, $ConfiguredResourceLocation$$Type} from "net.blay09.mods.balm.api.config.schema.ConfiguredResourceLocation"
import {$AbstractConfigProperty, $AbstractConfigProperty$$Type} from "net.blay09.mods.balm.api.config.schema.builder.AbstractConfigProperty"
import {$MutableLoadedConfig, $MutableLoadedConfig$$Type} from "net.blay09.mods.balm.api.config.MutableLoadedConfig"
import {$ConfigPropertyBuilder, $ConfigPropertyBuilder$$Type} from "net.blay09.mods.balm.api.config.schema.builder.ConfigPropertyBuilder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$LoadedConfig, $LoadedConfig$$Type} from "net.blay09.mods.balm.api.config.LoadedConfig"
import {$BalmConfigSchema, $BalmConfigSchema$$Type} from "net.blay09.mods.balm.api.config.schema.BalmConfigSchema"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $ResourceLocationConfigProperty extends $AbstractConfigProperty<($ResourceLocation)> implements $ConfiguredResourceLocation {

constructor(arg0: $ConfigPropertyBuilder$$Type, arg1: $ResourceLocation$$Type)

public "type"(): $Class<($ResourceLocation)>
public "defaultValue"(): any
public "codec"(): $Codec<($ResourceLocation)>
public "streamCodec"(): $StreamCodec<($ByteBuf), ($ResourceLocation)>
public "get"(arg0: $LoadedConfig$$Type): $ResourceLocation
public "get"(): $ResourceLocation
public "set"(arg0: $ResourceLocation$$Type): void
public "set"(arg0: $MutableLoadedConfig$$Type, arg1: $ResourceLocation$$Type): void
public "parentSchema"(): $BalmConfigSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceLocationConfigProperty$$Type = ($ResourceLocationConfigProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceLocationConfigProperty_ = $ResourceLocationConfigProperty$$Type;
}}
declare module "net.blay09.mods.balm.api.event.client.UseItemInputEvent" {
import {$BalmEvent, $BalmEvent$$Type} from "net.blay09.mods.balm.api.event.BalmEvent"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"

export class $UseItemInputEvent extends $BalmEvent {

constructor(arg0: $InteractionHand$$Type)

public "getHand"(): $InteractionHand
get "hand"(): $InteractionHand
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UseItemInputEvent$$Type = ($UseItemInputEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UseItemInputEvent_ = $UseItemInputEvent$$Type;
}}
