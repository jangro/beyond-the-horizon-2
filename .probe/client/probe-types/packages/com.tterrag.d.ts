declare module "com.tterrag.registrate.providers.RegistrateLookupFillerProvider" {
import {$RegistrateProvider, $RegistrateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$CachedOutput, $CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$LogicalSide, $LogicalSide$$Type} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $RegistrateLookupFillerProvider extends $RegistrateProvider {

 "getFilledProvider"(): $CompletableFuture<($HolderLookup$Provider)>
 "getSide"(): $LogicalSide
 "getName"(): StringJS
 "run"(arg0: $CachedOutput$$Type): $CompletableFuture<(any)>
get "filledProvider"(): $CompletableFuture<($HolderLookup$Provider)>
get "side"(): $LogicalSide
get "name"(): StringJS
}

export namespace $RegistrateLookupFillerProvider {
function saveStable<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(any)>
function saveStable(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture<(any)>
const probejs$$marker: never
}
export class $RegistrateLookupFillerProvider$$Static implements $RegistrateLookupFillerProvider {


 "getFilledProvider"(): $CompletableFuture<($HolderLookup$Provider)>
 "getSide"(): $LogicalSide
 "getName"(): StringJS
 "run"(arg0: $CachedOutput$$Type): $CompletableFuture<(any)>
static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(any)>
static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateLookupFillerProvider$$Type = ($RegistrateLookupFillerProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrateLookupFillerProvider_ = $RegistrateLookupFillerProvider$$Type;
}}
declare module "com.tterrag.registrate.providers.RegistrateProvider" {
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$DataProvider, $DataProvider$$Type} from "net.minecraft.data.DataProvider"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$CachedOutput, $CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$LogicalSide, $LogicalSide$$Type} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $RegistrateProvider extends $DataProvider {

 "getSide"(): $LogicalSide
 "getName"(): StringJS
 "run"(arg0: $CachedOutput$$Type): $CompletableFuture<(any)>
get "side"(): $LogicalSide
get "name"(): StringJS
}

export namespace $RegistrateProvider {
function saveStable<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(any)>
function saveStable(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture<(any)>
const probejs$$marker: never
}
export class $RegistrateProvider$$Static implements $RegistrateProvider {


 "getSide"(): $LogicalSide
 "getName"(): StringJS
 "run"(arg0: $CachedOutput$$Type): $CompletableFuture<(any)>
static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(any)>
static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateProvider$$Type = ($RegistrateProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrateProvider_ = $RegistrateProvider$$Type;
}}
declare module "com.tterrag.registrate.providers.ProviderType$DependencyAwareProviderType" {
import {$ProviderType$SimpleServerDataFactory, $ProviderType$SimpleServerDataFactory$$Type} from "com.tterrag.registrate.providers.ProviderType$SimpleServerDataFactory"
import {$RegistrateProvider, $RegistrateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$Map, $Map$$Type} from "java.util.Map"
import {$NonNullUnaryOperator, $NonNullUnaryOperator$$Type} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$ProviderType$Context, $ProviderType$Context$$Type} from "com.tterrag.registrate.providers.ProviderType$Context"
import {$RegistrateTagsProvider, $RegistrateTagsProvider$$Type} from "com.tterrag.registrate.providers.RegistrateTagsProvider"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$GatherDataEvent, $GatherDataEvent$$Type} from "net.neoforged.neoforge.data.event.GatherDataEvent"
import {$RegistrateTagsProvider$Impl, $RegistrateTagsProvider$Impl$$Type} from "com.tterrag.registrate.providers.RegistrateTagsProvider$Impl"
import {$NonNullFunction, $NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$NonNullBiFunction, $NonNullBiFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullBiFunction"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$RegistrateTagsProvider$IntrinsicImpl, $RegistrateTagsProvider$IntrinsicImpl$$Type} from "com.tterrag.registrate.providers.RegistrateTagsProvider$IntrinsicImpl"
import {$ProviderType, $ProviderType$$Type} from "com.tterrag.registrate.providers.ProviderType"

export interface $ProviderType$DependencyAwareProviderType<T extends $RegistrateProvider> extends $ProviderType<(T)> {

 "create"(arg0: $AbstractRegistrate$$Type<(any)>, arg1: $GatherDataEvent$$Type, arg2: $Map$$Type<($ProviderType$$Type<(any)>), ($RegistrateProvider$$Type)>): T
 "create"(arg0: $ProviderType$Context$$Type<(T)>): T

(arg0: $ProviderType$Context<(T)>): T
}

export namespace $ProviderType$DependencyAwareProviderType {
function registerProvider<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$DependencyAwareProviderType$$Type<(T)>): $ProviderType<(T)>
function create<T extends $RegistrateProvider>(arg0: $ProviderType$$Type<(T)>, arg1: $AbstractRegistrate$$Type<(any)>, arg2: $GatherDataEvent$$Type, arg3: $Map$$Type<($ProviderType$$Type<(any)>), ($RegistrateProvider$$Type)>, arg4: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>): T
function register<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullFunction$$Type<($ProviderType<(T)>), ($NonNullBiFunction$$Type<($AbstractRegistrate$$Type<(any)>), ($GatherDataEvent$$Type), (T)>)>): $ProviderType<(T)>
function register<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$$Type<(T)>): $ProviderType<(T)>
function register<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullBiFunction$$Type<($AbstractRegistrate<(any)>), ($GatherDataEvent), (T)>): $ProviderType<(T)>
function registerTag<T, R extends $RegistrateTagsProvider<(T)>>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(T)>)>, arg2: $ProviderType$DependencyAwareProviderType$$Type<(R)>): $ProviderType<(R)>
function registerServerData<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$SimpleServerDataFactory$$Type<(T)>): $ProviderType<(T)>
function registerDynamicTag<T>(arg0: StringJS, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(T)>)>): $ProviderType<($RegistrateTagsProvider$Impl<(T)>)>
function registerIntrinsicTag<T>(arg0: StringJS, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(T)>)>, arg3: $Function$$Type<(T), ($ResourceKey$$Type<(T)>)>): $ProviderType<($RegistrateTagsProvider$IntrinsicImpl<(T)>)>
function registerDelegate<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullUnaryOperator$$Type<($ProviderType<(T)>)>): $ProviderType<(T)>
const probejs$$marker: never
}
export class $ProviderType$DependencyAwareProviderType$$Static<T extends $RegistrateProvider> implements $ProviderType$DependencyAwareProviderType {


 "create"(arg0: $AbstractRegistrate$$Type<(any)>, arg1: $GatherDataEvent$$Type, arg2: $Map$$Type<($ProviderType$$Type<(any)>), ($RegistrateProvider$$Type)>): T
 "create"(arg0: $ProviderType$Context$$Type<(T)>): T
static "registerProvider"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$DependencyAwareProviderType$$Type<(T)>): $ProviderType<(T)>
static "create"<T extends $RegistrateProvider>(arg0: $ProviderType$$Type<(T)>, arg1: $AbstractRegistrate$$Type<(any)>, arg2: $GatherDataEvent$$Type, arg3: $Map$$Type<($ProviderType$$Type<(any)>), ($RegistrateProvider$$Type)>, arg4: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>): T
/**
 * 
 * @deprecated
 */
static "register"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullFunction$$Type<($ProviderType<(T)>), ($NonNullBiFunction$$Type<($AbstractRegistrate$$Type<(any)>), ($GatherDataEvent$$Type), (T)>)>): $ProviderType<(T)>
/**
 * 
 * @deprecated
 */
static "register"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$$Type<(T)>): $ProviderType<(T)>
/**
 * 
 * @deprecated
 */
static "register"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullBiFunction$$Type<($AbstractRegistrate<(any)>), ($GatherDataEvent), (T)>): $ProviderType<(T)>
static "registerTag"<T, R extends $RegistrateTagsProvider<(T)>>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(T)>)>, arg2: $ProviderType$DependencyAwareProviderType$$Type<(R)>): $ProviderType<(R)>
static "registerServerData"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$SimpleServerDataFactory$$Type<(T)>): $ProviderType<(T)>
static "registerDynamicTag"<T>(arg0: StringJS, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(T)>)>): $ProviderType<($RegistrateTagsProvider$Impl<(T)>)>
static "registerIntrinsicTag"<T>(arg0: StringJS, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(T)>)>, arg3: $Function$$Type<(T), ($ResourceKey$$Type<(T)>)>): $ProviderType<($RegistrateTagsProvider$IntrinsicImpl<(T)>)>
/**
 * 
 * @deprecated
 */
static "registerDelegate"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullUnaryOperator$$Type<($ProviderType<(T)>)>): $ProviderType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProviderType$DependencyAwareProviderType$$Type<T> = ((arg0: $ProviderType$Context<(T)>) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProviderType$DependencyAwareProviderType_<T> = $ProviderType$DependencyAwareProviderType$$Type<(T)>;
}}
declare module "com.tterrag.registrate.providers.RegistrateItemTagsProvider" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$TagsProvider$TagLookup, $TagsProvider$TagLookup$$Type} from "net.minecraft.data.tags.TagsProvider$TagLookup"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$CachedOutput, $CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PackOutput, $PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TagBuilder, $TagBuilder$$Type} from "net.minecraft.tags.TagBuilder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ExistingFileHelper, $ExistingFileHelper$$Type} from "net.neoforged.neoforge.common.data.ExistingFileHelper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$RegistrateTagsProvider$IntrinsicImpl, $RegistrateTagsProvider$IntrinsicImpl$$Type} from "com.tterrag.registrate.providers.RegistrateTagsProvider$IntrinsicImpl"
import {$ProviderType, $ProviderType$$Type} from "com.tterrag.registrate.providers.ProviderType"

export class $RegistrateItemTagsProvider extends $RegistrateTagsProvider$IntrinsicImpl<($Item)> {
readonly "builders": $Map<($ResourceLocation), ($TagBuilder)>

constructor(arg0: $AbstractRegistrate$$Type<(any)>, arg1: $ProviderType$$Type<($RegistrateItemTagsProvider$$Type)>, arg2: StringJS, arg3: $PackOutput$$Type, arg4: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>, arg5: $CompletableFuture$$Type<($TagsProvider$TagLookup$$Type<($Block$$Type)>)>, arg6: $ExistingFileHelper$$Type)

public "copy"(arg0: $TagKey$$Type<($Block)>, arg1: $TagKey$$Type<($Item)>): void
public "contentsGetter"(): $CompletableFuture<($TagsProvider$TagLookup<(T)>)>
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(any)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateItemTagsProvider$$Type = ($RegistrateItemTagsProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrateItemTagsProvider_ = $RegistrateItemTagsProvider$$Type;
}}
declare module "com.tterrag.registrate.providers.ProviderType$SimpleServerDataFactory" {
import {$RegistrateProvider, $RegistrateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$Map, $Map$$Type} from "java.util.Map"
import {$NonNullUnaryOperator, $NonNullUnaryOperator$$Type} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$ProviderType$Context, $ProviderType$Context$$Type} from "com.tterrag.registrate.providers.ProviderType$Context"
import {$RegistrateTagsProvider, $RegistrateTagsProvider$$Type} from "com.tterrag.registrate.providers.RegistrateTagsProvider"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PackOutput, $PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$ProviderType$DependencyAwareProviderType, $ProviderType$DependencyAwareProviderType$$Type} from "com.tterrag.registrate.providers.ProviderType$DependencyAwareProviderType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$GatherDataEvent, $GatherDataEvent$$Type} from "net.neoforged.neoforge.data.event.GatherDataEvent"
import {$RegistrateTagsProvider$Impl, $RegistrateTagsProvider$Impl$$Type} from "com.tterrag.registrate.providers.RegistrateTagsProvider$Impl"
import {$NonNullFunction, $NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$NonNullBiFunction, $NonNullBiFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullBiFunction"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$RegistrateTagsProvider$IntrinsicImpl, $RegistrateTagsProvider$IntrinsicImpl$$Type} from "com.tterrag.registrate.providers.RegistrateTagsProvider$IntrinsicImpl"
import {$ProviderType, $ProviderType$$Type} from "com.tterrag.registrate.providers.ProviderType"

export interface $ProviderType$SimpleServerDataFactory<T extends $RegistrateProvider> extends $ProviderType$DependencyAwareProviderType<(T)> {

 "create"(arg0: $AbstractRegistrate$$Type<(any)>, arg1: $PackOutput$$Type, arg2: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>): T
 "create"(arg0: $ProviderType$Context$$Type<(T)>): T
 "asProvider"(): $ProviderType<(T)>
 "create"(arg0: $AbstractRegistrate$$Type<(any)>, arg1: $GatherDataEvent$$Type, arg2: $Map$$Type<($ProviderType$$Type<(any)>), ($RegistrateProvider$$Type)>): T

(arg0: $AbstractRegistrate<(any)>, arg1: $PackOutput, arg2: $CompletableFuture<($HolderLookup$Provider)>): T
}

export namespace $ProviderType$SimpleServerDataFactory {
function registerProvider<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$DependencyAwareProviderType$$Type<(T)>): $ProviderType<(T)>
function create<T extends $RegistrateProvider>(arg0: $ProviderType$$Type<(T)>, arg1: $AbstractRegistrate$$Type<(any)>, arg2: $GatherDataEvent$$Type, arg3: $Map$$Type<($ProviderType$$Type<(any)>), ($RegistrateProvider$$Type)>, arg4: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>): T
function register<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullFunction$$Type<($ProviderType<(T)>), ($NonNullBiFunction$$Type<($AbstractRegistrate$$Type<(any)>), ($GatherDataEvent$$Type), (T)>)>): $ProviderType<(T)>
function register<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$$Type<(T)>): $ProviderType<(T)>
function register<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullBiFunction$$Type<($AbstractRegistrate<(any)>), ($GatherDataEvent), (T)>): $ProviderType<(T)>
function registerTag<T, R extends $RegistrateTagsProvider<(T)>>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(T)>)>, arg2: $ProviderType$DependencyAwareProviderType$$Type<(R)>): $ProviderType<(R)>
function registerServerData<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$SimpleServerDataFactory$$Type<(T)>): $ProviderType<(T)>
function registerDynamicTag<T>(arg0: StringJS, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(T)>)>): $ProviderType<($RegistrateTagsProvider$Impl<(T)>)>
function registerIntrinsicTag<T>(arg0: StringJS, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(T)>)>, arg3: $Function$$Type<(T), ($ResourceKey$$Type<(T)>)>): $ProviderType<($RegistrateTagsProvider$IntrinsicImpl<(T)>)>
function registerDelegate<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullUnaryOperator$$Type<($ProviderType<(T)>)>): $ProviderType<(T)>
const probejs$$marker: never
}
export class $ProviderType$SimpleServerDataFactory$$Static<T extends $RegistrateProvider> implements $ProviderType$SimpleServerDataFactory {


 "create"(arg0: $AbstractRegistrate$$Type<(any)>, arg1: $PackOutput$$Type, arg2: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>): T
 "create"(arg0: $ProviderType$Context$$Type<(T)>): T
 "asProvider"(): $ProviderType<(T)>
 "create"(arg0: $AbstractRegistrate$$Type<(any)>, arg1: $GatherDataEvent$$Type, arg2: $Map$$Type<($ProviderType$$Type<(any)>), ($RegistrateProvider$$Type)>): T
static "registerProvider"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$DependencyAwareProviderType$$Type<(T)>): $ProviderType<(T)>
static "create"<T extends $RegistrateProvider>(arg0: $ProviderType$$Type<(T)>, arg1: $AbstractRegistrate$$Type<(any)>, arg2: $GatherDataEvent$$Type, arg3: $Map$$Type<($ProviderType$$Type<(any)>), ($RegistrateProvider$$Type)>, arg4: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>): T
/**
 * 
 * @deprecated
 */
static "register"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullFunction$$Type<($ProviderType<(T)>), ($NonNullBiFunction$$Type<($AbstractRegistrate$$Type<(any)>), ($GatherDataEvent$$Type), (T)>)>): $ProviderType<(T)>
/**
 * 
 * @deprecated
 */
static "register"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$$Type<(T)>): $ProviderType<(T)>
/**
 * 
 * @deprecated
 */
static "register"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullBiFunction$$Type<($AbstractRegistrate<(any)>), ($GatherDataEvent), (T)>): $ProviderType<(T)>
static "registerTag"<T, R extends $RegistrateTagsProvider<(T)>>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(T)>)>, arg2: $ProviderType$DependencyAwareProviderType$$Type<(R)>): $ProviderType<(R)>
static "registerServerData"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$SimpleServerDataFactory$$Type<(T)>): $ProviderType<(T)>
static "registerDynamicTag"<T>(arg0: StringJS, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(T)>)>): $ProviderType<($RegistrateTagsProvider$Impl<(T)>)>
static "registerIntrinsicTag"<T>(arg0: StringJS, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(T)>)>, arg3: $Function$$Type<(T), ($ResourceKey$$Type<(T)>)>): $ProviderType<($RegistrateTagsProvider$IntrinsicImpl<(T)>)>
/**
 * 
 * @deprecated
 */
static "registerDelegate"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullUnaryOperator$$Type<($ProviderType<(T)>)>): $ProviderType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProviderType$SimpleServerDataFactory$$Type<T> = ((arg0: $AbstractRegistrate<(any)>, arg1: $PackOutput, arg2: $CompletableFuture<($HolderLookup$Provider)>) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProviderType$SimpleServerDataFactory_<T> = $ProviderType$SimpleServerDataFactory$$Type<(T)>;
}}
declare module "com.tterrag.registrate.util.entry.BlockEntry" {
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$ItemProviderEntry, $ItemProviderEntry$$Type} from "com.tterrag.registrate.util.entry.ItemProviderEntry"
import {$RegistryEntry, $RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEntry<T extends $Block> extends $ItemProviderEntry<($Block), (T)> {

constructor(arg0: $AbstractRegistrate$$Type<(any)>, arg1: $DeferredHolder$$Type<($Block$$Type), (T)>)

public "has"(arg0: $BlockState$$Type): boolean
public static "cast"<T extends $Block>(arg0: $RegistryEntry$$Type<($Block$$Type), (T)>): $BlockEntry<(T)>
public "getDefaultState"(): $BlockState
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public "get"(): T
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "direct"<T>(arg0: T): $Holder<(T)>
get "defaultState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntry$$Type<T> = ($BlockEntry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntry_<T> = $BlockEntry$$Type<(T)>;
}}
declare module "com.tterrag.registrate.builders.MenuBuilder$ForgeMenuFactory" {
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $MenuBuilder$ForgeMenuFactory<T extends $AbstractContainerMenu> {

 "create"(arg0: $MenuType$$Type<(T)>, arg1: integer, arg2: $Inventory$$Type, arg3: $RegistryFriendlyByteBuf$$Type): T

(arg0: $MenuType<(T)>, arg1: integer, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf): T
}

export namespace $MenuBuilder$ForgeMenuFactory {
const probejs$$marker: never
}
export class $MenuBuilder$ForgeMenuFactory$$Static<T extends $AbstractContainerMenu> implements $MenuBuilder$ForgeMenuFactory {


 "create"(arg0: $MenuType$$Type<(T)>, arg1: integer, arg2: $Inventory$$Type, arg3: $RegistryFriendlyByteBuf$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuBuilder$ForgeMenuFactory$$Type<T> = ((arg0: $MenuType<(T)>, arg1: integer, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuBuilder$ForgeMenuFactory_<T> = $MenuBuilder$ForgeMenuFactory$$Type<(T)>;
}}
declare module "com.tterrag.registrate.builders.MenuBuilder$ScreenFactory" {
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$MenuAccess, $MenuAccess$$Type} from "net.minecraft.client.gui.screens.inventory.MenuAccess"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $MenuBuilder$ScreenFactory<M extends $AbstractContainerMenu, T extends ($Screen) & ($MenuAccess<(M)>)> {

 "create"(arg0: M, arg1: $Inventory$$Type, arg2: $Component$$Type): T

(arg0: M, arg1: $Inventory, arg2: $Component): T
}

export namespace $MenuBuilder$ScreenFactory {
const probejs$$marker: never
}
export class $MenuBuilder$ScreenFactory$$Static<M extends $AbstractContainerMenu, T extends ($Screen) & ($MenuAccess<(M)>)> implements $MenuBuilder$ScreenFactory {


 "create"(arg0: M, arg1: $Inventory$$Type, arg2: $Component$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuBuilder$ScreenFactory$$Type<M, T> = ((arg0: M, arg1: $Inventory, arg2: $Component) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuBuilder$ScreenFactory_<M, T> = $MenuBuilder$ScreenFactory$$Type<(M), (T)>;
}}
declare module "com.tterrag.registrate.builders.BlockBuilder" {
import {$NonNullBiConsumer, $NonNullBiConsumer$$Type} from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import {$AbstractBuilder, $AbstractBuilder$$Type} from "com.tterrag.registrate.builders.AbstractBuilder"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$DataGenContext, $DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$RegistrateBlockLootTables, $RegistrateBlockLootTables$$Type} from "com.tterrag.registrate.providers.loot.RegistrateBlockLootTables"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$BlockEntityBuilder, $BlockEntityBuilder$$Type} from "com.tterrag.registrate.builders.BlockEntityBuilder"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$BuilderCallback, $BuilderCallback$$Type} from "com.tterrag.registrate.builders.BuilderCallback"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$NonNullFunction, $NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$NonNullBiFunction, $NonNullBiFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullBiFunction"
import {$BlockColor, $BlockColor$$Type} from "net.minecraft.client.color.block.BlockColor"
import {$NonNullUnaryOperator, $NonNullUnaryOperator$$Type} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$RegistrateRecipeProvider, $RegistrateRecipeProvider$$Type} from "com.tterrag.registrate.providers.RegistrateRecipeProvider"
import {$BlockEntityBuilder$BlockEntityFactory, $BlockEntityBuilder$BlockEntityFactory$$Type} from "com.tterrag.registrate.builders.BlockEntityBuilder$BlockEntityFactory"
import {$IClientBlockExtensions, $IClientBlockExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientBlockExtensions"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$BlockEntry, $BlockEntry$$Type} from "com.tterrag.registrate.util.entry.BlockEntry"
import {$ItemBuilder, $ItemBuilder$$Type} from "com.tterrag.registrate.builders.ItemBuilder"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $BlockBuilder<T extends $Block, P> extends $AbstractBuilder<($Block), (T), (P), ($BlockBuilder<(T), (P)>)> {


public "lang"(arg0: StringJS): $BlockBuilder<(T), (P)>
public "tag"(...arg0: ($TagKey$$Type<($Block$$Type)>)[]): $BlockBuilder<(T), (P)>
public "recipe"(arg0: $NonNullBiConsumer$$Type<($DataGenContext<($Block), (T)>), ($RegistrateRecipeProvider)>): $BlockBuilder<(T), (P)>
public "color"(arg0: $NonNullSupplier$$Type<($Supplier$$Type<($BlockColor$$Type)>)>): $BlockBuilder<(T), (P)>
public static "create"<T extends $Block, P>(arg0: $AbstractRegistrate$$Type<(any)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $NonNullFunction$$Type<($BlockBehaviour$Properties), (T)>): $BlockBuilder<(T), (P)>
public "item"(): $ItemBuilder<($BlockItem), ($BlockBuilder<(T), (P)>)>
public "item"<I extends $Item>(arg0: $NonNullBiFunction$$Type<(T), ($Item$Properties), (I)>): $ItemBuilder<(I), ($BlockBuilder<(T), (P)>)>
public "register"(): $BlockEntry<(T)>
public "properties"(arg0: $NonNullUnaryOperator$$Type<($BlockBehaviour$Properties)>): $BlockBuilder<(T), (P)>
public "loot"(arg0: $NonNullBiConsumer$$Type<($RegistrateBlockLootTables), (T)>): $BlockBuilder<(T), (P)>
public "defaultLang"(): $BlockBuilder<(T), (P)>
public "blockstate"(arg0: $NonNullBiConsumer$$Type<($DataGenContext<($Block), (T)>), ($RegistrateBlockstateProvider)>): $BlockBuilder<(T), (P)>
public "blockEntity"<BE extends $BlockEntity>(arg0: $BlockEntityBuilder$BlockEntityFactory$$Type<(BE)>): $BlockEntityBuilder<(BE), ($BlockBuilder<(T), (P)>)>
public "simpleItem"(): $BlockBuilder<(T), (P)>
public "defaultLoot"(): $BlockBuilder<(T), (P)>
/**
 * 
 * @deprecated
 */
public "addLayer"(arg0: $Supplier$$Type<($Supplier$$Type<($RenderType$$Type)>)>): $BlockBuilder<(T), (P)>
public "defaultBlockstate"(): $BlockBuilder<(T), (P)>
public "simpleBlockEntity"<BE extends $BlockEntity>(arg0: $BlockEntityBuilder$BlockEntityFactory$$Type<(BE)>): $BlockBuilder<(T), (P)>
/**
 * 
 * @deprecated
 */
public "clientExtension"(arg0: $Function$$Type<(T), ($NonNullSupplier$$Type<($Supplier$$Type<($IClientBlockExtensions$$Type)>)>)>): $BlockBuilder<(T), (P)>
public "clientExtension"(arg0: $NonNullSupplier$$Type<($Supplier$$Type<($IClientBlockExtensions$$Type)>)>): $BlockBuilder<(T), (P)>
public "initialProperties"(arg0: $NonNullSupplier$$Type<($Block$$Type)>): $BlockBuilder<(T), (P)>
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBuilder$$Type<T, P> = ($BlockBuilder<(T), (P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBuilder_<T, P> = $BlockBuilder$$Type<(T), (P)>;
}}
declare module "com.tterrag.registrate.util.entry.BlockEntityEntry" {
import {$RegistryEntry, $RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEntityEntry<T extends $BlockEntity> extends $RegistryEntry<($BlockEntityType<(any)>), ($BlockEntityType<(T)>)> {

constructor(arg0: $AbstractRegistrate$$Type<(any)>, arg1: $DeferredHolder$$Type<($BlockEntityType$$Type<(any)>), ($BlockEntityType$$Type<(T)>)>)

public "is"(arg0: $BlockEntity$$Type): boolean
public "create"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): T
public "get"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<(T)>
public static "cast"<T extends $BlockEntity>(arg0: $RegistryEntry$$Type<($BlockEntityType$$Type<(any)>), ($BlockEntityType$$Type<(T)>)>): $BlockEntityEntry<(T)>
public "getNullable"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): T
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public "get"(): T
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "direct"<T>(arg0: T): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityEntry$$Type<T> = ($BlockEntityEntry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityEntry_<T> = $BlockEntityEntry$$Type<(T)>;
}}
declare module "com.tterrag.registrate.providers.loot.RegistrateBlockLootTables" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ValidationContext, $ValidationContext$$Type} from "net.minecraft.world.level.storage.loot.ValidationContext"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$NumberProvider, $NumberProvider$$Type} from "net.minecraft.world.level.storage.loot.providers.number.NumberProvider"
import {$FunctionUserBuilder, $FunctionUserBuilder$$Type} from "net.minecraft.world.level.storage.loot.functions.FunctionUserBuilder"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$VanillaBlockLoot, $VanillaBlockLoot$$Type} from "net.minecraft.data.loot.packs.VanillaBlockLoot"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$LootTable$Builder, $LootTable$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$LootItemCondition$Builder, $LootItemCondition$Builder$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$LootPoolEntryContainer$Builder, $LootPoolEntryContainer$Builder$$Type} from "net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer$Builder"
import {$ConditionUserBuilder, $ConditionUserBuilder$$Type} from "net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder"
import {$RegistrateLootTables, $RegistrateLootTables$$Type} from "com.tterrag.registrate.providers.loot.RegistrateLootTables"
import {$WritableRegistry, $WritableRegistry$$Type} from "net.minecraft.core.WritableRegistry"

export class $RegistrateBlockLootTables extends $VanillaBlockLoot implements $RegistrateLootTables {
static readonly "HAS_SHEARS": $LootItemCondition$Builder
static readonly "NORMAL_LEAVES_STICK_CHANCES": (float)[]
 "registries": $HolderLookup$Provider
static readonly "NORMAL_LEAVES_SAPLING_CHANCES": (float)[]

constructor(arg0: $HolderLookup$Provider$$Type, arg1: $AbstractRegistrate$$Type<(any)>, arg2: $Consumer$$Type<($RegistrateBlockLootTables)>)

public "add"(arg0: $Block$$Type, arg1: $LootTable$Builder$$Type): void
public "getRegistries"(): $HolderLookup$Provider
public "createOreDrop"(arg0: $Block$$Type, arg1: $Item$$Type): $LootTable$Builder
public "dropOther"(arg0: $Block$$Type, arg1: $ItemLike$$Type): void
public "dropSelf"(arg0: $Block$$Type): void
public "createDoorTable"(arg0: $Block$$Type): $LootTable$Builder
public "applyExplosionDecay"<T extends $FunctionUserBuilder<(T)>>(arg0: $ItemLike$$Type, arg1: $FunctionUserBuilder$$Type<(T)>): T
public "createSingleItemTable"(arg0: $ItemLike$$Type, arg1: $NumberProvider$$Type): $LootTable$Builder
public "createSlabItemTable"(arg0: $Block$$Type): $LootTable$Builder
public "createShulkerBoxDrop"(arg0: $Block$$Type): $LootTable$Builder
public "createCopperOreDrops"(arg0: $Block$$Type): $LootTable$Builder
public "createLapisOreDrops"(arg0: $Block$$Type): $LootTable$Builder
public "createRedstoneOreDrops"(arg0: $Block$$Type): $LootTable$Builder
public "createBannerDrop"(arg0: $Block$$Type): $LootTable$Builder
public "createBeeNestDrop"(arg0: $Block$$Type): $LootTable$Builder
public "createBeeHiveDrop"(arg0: $Block$$Type): $LootTable$Builder
public "createCaveVinesDrop"(arg0: $Block$$Type): $LootTable$Builder
public "createGrassDrops"(arg0: $Block$$Type): $LootTable$Builder
public static "createShearsOnlyDrop"(arg0: $ItemLike$$Type): $LootTable$Builder
public "createLeavesDrops"(arg0: $Block$$Type, arg1: $Block$$Type, ...arg2: (float)[]): $LootTable$Builder
public "createOakLeavesDrops"(arg0: $Block$$Type, arg1: $Block$$Type, ...arg2: (float)[]): $LootTable$Builder
public "createCropDrops"(arg0: $Block$$Type, arg1: $Item$$Type, arg2: $Item$$Type, arg3: $LootItemCondition$Builder$$Type): $LootTable$Builder
public "createCandleDrops"(arg0: $Block$$Type): $LootTable$Builder
public "createPetalsDrops"(arg0: $Block$$Type): $LootTable$Builder
public static "createCandleCakeDrops"(arg0: $Block$$Type): $LootTable$Builder
public "dropPottedContents"(arg0: $Block$$Type): void
public "otherWhenSilkTouch"(arg0: $Block$$Type, arg1: $Block$$Type): void
public "dropWhenSilkTouch"(arg0: $Block$$Type): void
public "createSilkTouchOrShearsDispatchTable"(arg0: $Block$$Type, arg1: $LootPoolEntryContainer$Builder$$Type<(any)>): $LootTable$Builder
public "createSingleItemTableWithSilkTouch"(arg0: $Block$$Type, arg1: $ItemLike$$Type): $LootTable$Builder
public "createSingleItemTableWithSilkTouch"(arg0: $Block$$Type, arg1: $ItemLike$$Type, arg2: $NumberProvider$$Type): $LootTable$Builder
public "applyExplosionCondition"<T extends $ConditionUserBuilder<(T)>>(arg0: $ItemLike$$Type, arg1: $ConditionUserBuilder$$Type<(T)>): T
public "createSilkTouchDispatchTable"(arg0: $Block$$Type, arg1: $LootPoolEntryContainer$Builder$$Type<(any)>): $LootTable$Builder
public "createShearsDispatchTable"(arg0: $Block$$Type, arg1: $LootPoolEntryContainer$Builder$$Type<(any)>): $LootTable$Builder
public "createSilkTouchOnlyTable"(arg0: $ItemLike$$Type): $LootTable$Builder
public "createPotFlowerItemTable"(arg0: $ItemLike$$Type): $LootTable$Builder
public "createNameableBlockEntityTable"(arg0: $Block$$Type): $LootTable$Builder
public "createMushroomBlockDrop"(arg0: $Block$$Type, arg1: $ItemLike$$Type): $LootTable$Builder
public "createMultifaceBlockDrops"(arg0: $Block$$Type, arg1: $LootItemCondition$Builder$$Type): $LootTable$Builder
public "createMangroveLeavesDrops"(arg0: $Block$$Type): $LootTable$Builder
public "createDoublePlantShearsDrop"(arg0: $Block$$Type): $LootTable$Builder
public "createDoublePlantWithSeedDrops"(arg0: $Block$$Type, arg1: $Block$$Type): $LootTable$Builder
public "addNetherVinesDropTable"(arg0: $Block$$Type, arg1: $Block$$Type): void
public "validate"(arg0: $WritableRegistry$$Type<($LootTable$$Type)>, arg1: $ValidationContext$$Type): void
public "generate"(arg0: $BiConsumer$$Type<($ResourceKey<($LootTable)>), ($LootTable$Builder)>): void
public static "aether$getNormalLeavesSaplingChances"(): (float)[]
get "registries"(): $HolderLookup$Provider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateBlockLootTables$$Type = ($RegistrateBlockLootTables);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrateBlockLootTables_ = $RegistrateBlockLootTables$$Type;
}}
declare module "com.tterrag.registrate.util.nullness.NonNullFunction" {
import {$Function, $Function$$Type} from "java.util.function.Function"

export interface $NonNullFunction<T, R> extends $Function<(T), (R)> {

 "andThen"<V>(arg0: $NonNullFunction$$Type<(R), (V)>): $NonNullFunction<(T), (V)>
 "apply"(arg0: T): R
 "compose"<V>(arg0: $Function$$Type<(V), (T)>): $Function<(V), (R)>
 "andThen"<V>(arg0: $Function$$Type<(R), (V)>): $Function<(T), (V)>

(arg0: T): R
}

export namespace $NonNullFunction {
function identity<T>(): $Function<(T), (T)>
const probejs$$marker: never
}
export class $NonNullFunction$$Static<T, R> implements $NonNullFunction {


 "andThen"<V>(arg0: $NonNullFunction$$Type<(R), (V)>): $NonNullFunction<(T), (V)>
 "apply"(arg0: T): R
 "compose"<V>(arg0: $Function$$Type<(V), (T)>): $Function<(V), (R)>
 "andThen"<V>(arg0: $Function$$Type<(R), (V)>): $Function<(T), (V)>
static "identity"<T>(): $Function<(T), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullFunction$$Type<T, R> = ((arg0: T) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonNullFunction_<T, R> = $NonNullFunction$$Type<(T), (R)>;
}}
declare module "com.tterrag.registrate.providers.RegistrateTagsProvider$Impl" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$TagsProvider$TagLookup, $TagsProvider$TagLookup$$Type} from "net.minecraft.data.tags.TagsProvider$TagLookup"
import {$RegistrateTagsProvider, $RegistrateTagsProvider$$Type} from "com.tterrag.registrate.providers.RegistrateTagsProvider"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$TagsProvider, $TagsProvider$$Type} from "net.minecraft.data.tags.TagsProvider"
import {$CachedOutput, $CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$LogicalSide, $LogicalSide$$Type} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PackOutput, $PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TagBuilder, $TagBuilder$$Type} from "net.minecraft.tags.TagBuilder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$TagsProvider$TagAppender, $TagsProvider$TagAppender$$Type} from "net.minecraft.data.tags.TagsProvider$TagAppender"
import {$ExistingFileHelper, $ExistingFileHelper$$Type} from "net.neoforged.neoforge.common.data.ExistingFileHelper"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$ProviderType, $ProviderType$$Type} from "com.tterrag.registrate.providers.ProviderType"

export class $RegistrateTagsProvider$Impl<T> extends $TagsProvider<(T)> implements $RegistrateTagsProvider<(T)> {
readonly "builders": $Map<($ResourceLocation), ($TagBuilder)>

constructor(arg0: $AbstractRegistrate$$Type<(any)>, arg1: $ProviderType$$Type<($RegistrateTagsProvider$Impl$$Type<(T)>)>, arg2: StringJS, arg3: $PackOutput$$Type, arg4: $ResourceKey$$Type<($Registry<(T)>)>, arg5: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>, arg6: $ExistingFileHelper$$Type)

public "getName"(): StringJS
public "addTag"(arg0: $TagKey$$Type<(T)>): $TagsProvider$TagAppender<(T)>
public "getSide"(): $LogicalSide
public "registry"(): $ResourceKey<($Registry<(T)>)>
public "getFilledProvider"(): $CompletableFuture<($HolderLookup$Provider)>
public "contentsGetter"(): $CompletableFuture<($TagsProvider$TagLookup<(T)>)>
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(any)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture<(any)>
get "name"(): StringJS
get "side"(): $LogicalSide
get "filledProvider"(): $CompletableFuture<($HolderLookup$Provider)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateTagsProvider$Impl$$Type<T> = ($RegistrateTagsProvider$Impl<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrateTagsProvider$Impl_<T> = $RegistrateTagsProvider$Impl$$Type<(T)>;
}}
declare module "com.tterrag.registrate.providers.RegistrateDataMapProvider" {
import {$RegistrateProvider, $RegistrateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$DataMapProvider, $DataMapProvider$$Type} from "net.neoforged.neoforge.common.data.DataMapProvider"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$CachedOutput, $CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$LogicalSide, $LogicalSide$$Type} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $RegistrateDataMapProvider extends $DataMapProvider implements $RegistrateProvider {


public "getSide"(): $LogicalSide
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(any)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture<(any)>
get "side"(): $LogicalSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateDataMapProvider$$Type = ($RegistrateDataMapProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrateDataMapProvider_ = $RegistrateDataMapProvider$$Type;
}}
declare module "com.tterrag.registrate.builders.FluidBuilder$FluidTypeFactory" {
import {$FluidType$Properties, $FluidType$Properties$$Type} from "net.neoforged.neoforge.fluids.FluidType$Properties"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"

export interface $FluidBuilder$FluidTypeFactory {

 "create"(arg0: $FluidType$Properties$$Type, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type): $FluidType

(arg0: $FluidType$Properties, arg1: $ResourceLocation, arg2: $ResourceLocation): $FluidType$$Type
}

export namespace $FluidBuilder$FluidTypeFactory {
const probejs$$marker: never
}
export class $FluidBuilder$FluidTypeFactory$$Static implements $FluidBuilder$FluidTypeFactory {


 "create"(arg0: $FluidType$Properties$$Type, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type): $FluidType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidBuilder$FluidTypeFactory$$Type = ((arg0: $FluidType$Properties, arg1: $ResourceLocation, arg2: $ResourceLocation) => $FluidType$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidBuilder$FluidTypeFactory_ = $FluidBuilder$FluidTypeFactory$$Type;
}}
declare module "com.tterrag.registrate.providers.RegistrateBlockstateProvider" {
import {$WallSide, $WallSide$$Type} from "net.minecraft.world.level.block.state.properties.WallSide"
import {$RegistrateProvider, $RegistrateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$VariantBlockStateBuilder, $VariantBlockStateBuilder$$Type} from "net.neoforged.neoforge.client.model.generators.VariantBlockStateBuilder"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$CachedOutput, $CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$ImmutableMap, $ImmutableMap$$Type} from "com.google.common.collect.ImmutableMap"
import {$LogicalSide, $LogicalSide$$Type} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PackOutput, $PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$MultiPartBlockStateBuilder, $MultiPartBlockStateBuilder$$Type} from "net.neoforged.neoforge.client.model.generators.MultiPartBlockStateBuilder"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$BlockStateProvider, $BlockStateProvider$$Type} from "net.neoforged.neoforge.client.model.generators.BlockStateProvider"
import {$ExistingFileHelper, $ExistingFileHelper$$Type} from "net.neoforged.neoforge.common.data.ExistingFileHelper"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$Property, $Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $RegistrateBlockstateProvider extends $BlockStateProvider implements $RegistrateProvider {
static readonly "WALL_PROPS": $ImmutableMap<($Direction), ($Property<($WallSide)>)>

constructor(arg0: $AbstractRegistrate$$Type<(any)>, arg1: $PackOutput$$Type, arg2: $ExistingFileHelper$$Type)

public "getName"(): StringJS
public "getSide"(): $LogicalSide
public "getExistingVariantBuilder"(arg0: $Block$$Type): $Optional<($VariantBlockStateBuilder)>
public "getExistingMultipartBuilder"(arg0: $Block$$Type): $Optional<($MultiPartBlockStateBuilder)>
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(any)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture<(any)>
get "name"(): StringJS
get "side"(): $LogicalSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateBlockstateProvider$$Type = ($RegistrateBlockstateProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrateBlockstateProvider_ = $RegistrateBlockstateProvider$$Type;
}}
declare module "com.tterrag.registrate.providers.RegistrateItemModelProvider" {
import {$RegistrateProvider, $RegistrateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$Map, $Map$$Type} from "java.util.Map"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$CachedOutput, $CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$LogicalSide, $LogicalSide$$Type} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ItemModelBuilder, $ItemModelBuilder$$Type} from "net.neoforged.neoforge.client.model.generators.ItemModelBuilder"
import {$ExistingFileHelper$ResourceType, $ExistingFileHelper$ResourceType$$Type} from "net.neoforged.neoforge.common.data.ExistingFileHelper$ResourceType"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$PackOutput, $PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$ItemModelProvider, $ItemModelProvider$$Type} from "net.neoforged.neoforge.client.model.generators.ItemModelProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$ExistingFileHelper, $ExistingFileHelper$$Type} from "net.neoforged.neoforge.common.data.ExistingFileHelper"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export class $RegistrateItemModelProvider extends $ItemModelProvider implements $RegistrateProvider {
static readonly "TEXTURE": $ExistingFileHelper$ResourceType
static readonly "ITEM_FOLDER": StringJS
readonly "generatedModels": $Map<($ResourceLocation), (T)>
readonly "existingFileHelper": $ExistingFileHelper
static readonly "BLOCK_FOLDER": StringJS

constructor(arg0: $AbstractRegistrate$$Type<(any)>, arg1: $PackOutput$$Type, arg2: $ExistingFileHelper$$Type)

public "generated"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>): $ItemModelBuilder
public "generated"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>, ...arg1: ($ResourceLocation$$Type)[]): $ItemModelBuilder
public "getName"(): StringJS
public "name"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>): StringJS
public "modid"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>): StringJS
public "blockItem"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>, arg1: StringJS): $ItemModelBuilder
public "blockItem"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>): $ItemModelBuilder
public "blockSprite"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>): $ItemModelBuilder
public "blockSprite"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>, arg1: $ResourceLocation$$Type): $ItemModelBuilder
public "itemTexture"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>): $ResourceLocation
public "handheld"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>, arg1: $ResourceLocation$$Type): $ItemModelBuilder
public "handheld"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>): $ItemModelBuilder
public "getSide"(): $LogicalSide
public "blockWithInventoryModel"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>): $ItemModelBuilder
public "run"(arg0: $CachedOutput$$Type): $CompletableFuture<(any)>
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(any)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture<(any)>
get "side"(): $LogicalSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateItemModelProvider$$Type = ($RegistrateItemModelProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrateItemModelProvider_ = $RegistrateItemModelProvider$$Type;
}}
declare module "com.tterrag.registrate.providers.RegistrateGenericProvider$Generator" {
import {$DataProvider, $DataProvider$$Type} from "net.minecraft.data.DataProvider"
import {$RegistrateGenericProvider$GeneratorData, $RegistrateGenericProvider$GeneratorData$$Type} from "com.tterrag.registrate.providers.RegistrateGenericProvider$GeneratorData"

export interface $RegistrateGenericProvider$Generator {

 "generate"(arg0: $RegistrateGenericProvider$GeneratorData$$Type): $DataProvider

(arg0: $RegistrateGenericProvider$GeneratorData): $DataProvider$$Type
}

export namespace $RegistrateGenericProvider$Generator {
const probejs$$marker: never
}
export class $RegistrateGenericProvider$Generator$$Static implements $RegistrateGenericProvider$Generator {


 "generate"(arg0: $RegistrateGenericProvider$GeneratorData$$Type): $DataProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateGenericProvider$Generator$$Type = ((arg0: $RegistrateGenericProvider$GeneratorData) => $DataProvider$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrateGenericProvider$Generator_ = $RegistrateGenericProvider$Generator$$Type;
}}
declare module "com.tterrag.registrate.providers.RegistrateAdvancementProvider" {
import {$RegistrateProvider, $RegistrateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$List, $List$$Type} from "java.util.List"
import {$CachedOutput, $CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$AdvancementHolder, $AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$LogicalSide, $LogicalSide$$Type} from "net.neoforged.fml.LogicalSide"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$PackOutput, $PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export class $RegistrateAdvancementProvider implements $RegistrateProvider, $Consumer<($AdvancementHolder)> {

constructor(arg0: $AbstractRegistrate$$Type<(any)>, arg1: $PackOutput$$Type, arg2: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>)

public "desc"(arg0: StringJS, arg1: StringJS, arg2: StringJS): $MutableComponent
public "getProvider"(): $HolderLookup$Provider
public "getName"(): StringJS
public "run"(arg0: $CachedOutput$$Type): $CompletableFuture<(any)>
public "resolve"<T>(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
public "accept"(arg0: any): void
public "accept"(arg0: $AdvancementHolder$$Type): void
public "title"(arg0: StringJS, arg1: StringJS, arg2: StringJS): $MutableComponent
public "withConditions"(arg0: $AdvancementHolder$$Type, arg1: $List$$Type<($ICondition$$Type)>): void
public "getSide"(): $LogicalSide
public "andThen"(arg0: $Consumer$$Type<($AdvancementHolder)>): $Consumer<($AdvancementHolder)>
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(any)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture<(any)>
get "provider"(): $HolderLookup$Provider
get "name"(): StringJS
get "side"(): $LogicalSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateAdvancementProvider$$Type = ($RegistrateAdvancementProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrateAdvancementProvider_ = $RegistrateAdvancementProvider$$Type;
}}
declare module "com.tterrag.registrate.util.nullness.NonNullBiConsumer" {
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"

export interface $NonNullBiConsumer<T, U> extends $BiConsumer<(T), (U)> {

 "accept"(arg0: T, arg1: U): void
 "andThen"(arg0: $BiConsumer$$Type<(T), (U)>): $BiConsumer<(T), (U)>

(arg0: T, arg1: U): void
}

export namespace $NonNullBiConsumer {
function noop<T, U>(): $NonNullBiConsumer<(T), (U)>
const probejs$$marker: never
}
export class $NonNullBiConsumer$$Static<T, U> implements $NonNullBiConsumer {


 "accept"(arg0: T, arg1: U): void
static "noop"<T, U>(): $NonNullBiConsumer<(T), (U)>
 "andThen"(arg0: $BiConsumer$$Type<(T), (U)>): $BiConsumer<(T), (U)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullBiConsumer$$Type<T, U> = ((arg0: T, arg1: U) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonNullBiConsumer_<T, U> = $NonNullBiConsumer$$Type<(T), (U)>;
}}
declare module "com.tterrag.registrate.providers.loot.RegistrateEntityLootTables" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ValidationContext, $ValidationContext$$Type} from "net.minecraft.world.level.storage.loot.ValidationContext"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$LootTable$Builder, $LootTable$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$LootItemCondition$Builder, $LootItemCondition$Builder$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set, $Set$$Type} from "java.util.Set"
import {$FrogVariant, $FrogVariant$$Type} from "net.minecraft.world.entity.animal.FrogVariant"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$VanillaEntityLoot, $VanillaEntityLoot$$Type} from "net.minecraft.data.loot.packs.VanillaEntityLoot"
import {$RegistrateLootTables, $RegistrateLootTables$$Type} from "com.tterrag.registrate.providers.loot.RegistrateLootTables"
import {$WritableRegistry, $WritableRegistry$$Type} from "net.minecraft.core.WritableRegistry"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $RegistrateEntityLootTables extends $VanillaEntityLoot implements $RegistrateLootTables {
static readonly "SPECIAL_LOOT_TABLE_TYPES": $Set<($EntityType<(any)>)>
 "registries": $HolderLookup$Provider
readonly "map": $Map<($EntityType<(any)>), ($Map<($ResourceKey<($LootTable)>), ($LootTable$Builder)>)>

constructor(arg0: $HolderLookup$Provider$$Type, arg1: $AbstractRegistrate$$Type<(any)>, arg2: $Consumer$$Type<($RegistrateEntityLootTables)>)

public "generate"(): void
public "add"(arg0: $EntityType$$Type<(any)>, arg1: $ResourceKey$$Type<($LootTable)>, arg2: $LootTable$Builder$$Type): void
public "add"(arg0: $EntityType$$Type<(any)>, arg1: $LootTable$Builder$$Type): void
public "getRegistries"(): $HolderLookup$Provider
public "canHaveLootTable"(arg0: $EntityType$$Type<(any)>): boolean
public static "createSheepTable"(arg0: $ItemLike$$Type): $LootTable$Builder
public "killedByFrogVariant"(arg0: $ResourceKey$$Type<($FrogVariant)>): $LootItemCondition$Builder
public "validate"(arg0: $WritableRegistry$$Type<($LootTable$$Type)>, arg1: $ValidationContext$$Type): void
public "generate"(arg0: $BiConsumer$$Type<($ResourceKey<($LootTable)>), ($LootTable$Builder)>): void
get "registries"(): $HolderLookup$Provider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateEntityLootTables$$Type = ($RegistrateEntityLootTables);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrateEntityLootTables_ = $RegistrateEntityLootTables$$Type;
}}
declare module "com.tterrag.registrate.util.nullness.NonNullUnaryOperator" {
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$NonNullFunction, $NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"

export interface $NonNullUnaryOperator<T> extends $NonNullFunction<(T), (T)> {

 "andThen"<V>(arg0: $NonNullUnaryOperator$$Type<(T)>): $NonNullUnaryOperator<(T)>
 "andThen"<V>(arg0: $NonNullFunction$$Type<(T), (V)>): $NonNullFunction<(T), (V)>
 "apply"(arg0: T): T
 "compose"<V>(arg0: $Function$$Type<(V), (T)>): $Function<(V), (T)>
 "andThen"<V>(arg0: $Function$$Type<(T), (V)>): $Function<(T), (V)>

(arg0: T): T
}

export namespace $NonNullUnaryOperator {
function identity<T>(): $NonNullUnaryOperator<(T)>
const probejs$$marker: never
}
export class $NonNullUnaryOperator$$Static<T> implements $NonNullUnaryOperator {


 "andThen"<V>(arg0: $NonNullUnaryOperator$$Type<(T)>): $NonNullUnaryOperator<(T)>
static "identity"<T>(): $NonNullUnaryOperator<(T)>
 "andThen"<V>(arg0: $NonNullFunction$$Type<(T), (V)>): $NonNullFunction<(T), (V)>
 "apply"(arg0: T): T
 "compose"<V>(arg0: $Function$$Type<(V), (T)>): $Function<(V), (T)>
 "andThen"<V>(arg0: $Function$$Type<(T), (V)>): $Function<(T), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullUnaryOperator$$Type<T> = ((arg0: T) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonNullUnaryOperator_<T> = $NonNullUnaryOperator$$Type<(T)>;
}}
declare module "com.tterrag.registrate.util.DataIngredient" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$RegistrateRecipeProvider, $RegistrateRecipeProvider$$Type} from "com.tterrag.registrate.providers.RegistrateRecipeProvider"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$InventoryChangeTrigger$TriggerInstance, $InventoryChangeTrigger$TriggerInstance$$Type} from "net.minecraft.advancements.critereon.InventoryChangeTrigger$TriggerInstance"
import {$Criterion, $Criterion$$Type} from "net.minecraft.advancements.Criterion"
import {$ICustomIngredient, $ICustomIngredient$$Type} from "net.neoforged.neoforge.common.crafting.ICustomIngredient"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$IntList, $IntList$$Type} from "it.unimi.dsi.fastutil.ints.IntList"

export class $DataIngredient {


public "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "tag"(arg0: $TagKey$$Type<($Item)>): $DataIngredient
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "items"<T extends $ItemLike>(arg0: T, ...arg1: (T)[]): $DataIngredient
public static "items"<T extends $ItemLike>(arg0: $NonNullSupplier$$Type<(T)>, ...arg1: ($NonNullSupplier$$Type<(T)>)[]): $DataIngredient
public "test"(arg0: $ItemStack$$Type): boolean
public "isEmpty"(): boolean
public "getId"(): $ResourceLocation
public static "stacks"(arg0: $ItemStack$$Type, ...arg1: ($ItemStack$$Type)[]): $DataIngredient
public static "ingredient"(arg0: $Ingredient$$Type, arg1: $ItemLike$$Type): $DataIngredient
public static "ingredient"(arg0: $Ingredient$$Type, arg1: $TagKey$$Type<($Item)>): $DataIngredient
public static "ingredient"(arg0: $Ingredient$$Type, arg1: $ResourceLocation$$Type, ...arg2: ($ItemPredicate$$Type)[]): $DataIngredient
public "toVanilla"(): $Ingredient
public "getCriterion"(arg0: $RegistrateRecipeProvider$$Type): $Criterion<($InventoryChangeTrigger$TriggerInstance)>
public "isSimple"(): boolean
public "hasNoItems"(): boolean
public "isCustom"(): boolean
public "getStackingIds"(): $IntList
public "getCustomIngredient"(): $ICustomIngredient
get "empty"(): boolean
get "id"(): $ResourceLocation
get "simple"(): boolean
get "custom"(): boolean
get "stackingIds"(): $IntList
get "customIngredient"(): $ICustomIngredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataIngredient$$Type = ($DataIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataIngredient_ = $DataIngredient$$Type;
}}
declare module "com.tterrag.registrate.providers.RegistrateTagsProvider" {
import {$TagsProvider$TagLookup, $TagsProvider$TagLookup$$Type} from "net.minecraft.data.tags.TagsProvider$TagLookup"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$CachedOutput, $CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$RegistrateLookupFillerProvider, $RegistrateLookupFillerProvider$$Type} from "com.tterrag.registrate.providers.RegistrateLookupFillerProvider"
import {$LogicalSide, $LogicalSide$$Type} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$TagsProvider$TagAppender, $TagsProvider$TagAppender$$Type} from "net.minecraft.data.tags.TagsProvider$TagAppender"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export interface $RegistrateTagsProvider<T> extends $RegistrateLookupFillerProvider {

 "addTag"(arg0: $TagKey$$Type<(T)>): $TagsProvider$TagAppender<(T)>
 "contentsGetter"(): $CompletableFuture<($TagsProvider$TagLookup<(T)>)>
 "registry"(): $ResourceKey<($Registry<(T)>)>
 "getFilledProvider"(): $CompletableFuture<($HolderLookup$Provider)>
 "getSide"(): $LogicalSide
 "getName"(): StringJS
 "run"(arg0: $CachedOutput$$Type): $CompletableFuture<(any)>
get "filledProvider"(): $CompletableFuture<($HolderLookup$Provider)>
get "side"(): $LogicalSide
get "name"(): StringJS
}

export namespace $RegistrateTagsProvider {
function saveStable<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(any)>
function saveStable(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture<(any)>
const probejs$$marker: never
}
export class $RegistrateTagsProvider$$Static<T> implements $RegistrateTagsProvider {


 "addTag"(arg0: $TagKey$$Type<(T)>): $TagsProvider$TagAppender<(T)>
 "contentsGetter"(): $CompletableFuture<($TagsProvider$TagLookup<(T)>)>
 "registry"(): $ResourceKey<($Registry<(T)>)>
 "getFilledProvider"(): $CompletableFuture<($HolderLookup$Provider)>
 "getSide"(): $LogicalSide
 "getName"(): StringJS
 "run"(arg0: $CachedOutput$$Type): $CompletableFuture<(any)>
static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(any)>
static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateTagsProvider$$Type<T> = ($RegistrateTagsProvider<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrateTagsProvider_<T> = $RegistrateTagsProvider$$Type<(T)>;
}}
declare module "com.tterrag.registrate.providers.ProviderType" {
import {$ProviderType$SimpleServerDataFactory, $ProviderType$SimpleServerDataFactory$$Type} from "com.tterrag.registrate.providers.ProviderType$SimpleServerDataFactory"
import {$RegistrateLootTableProvider, $RegistrateLootTableProvider$$Type} from "com.tterrag.registrate.providers.loot.RegistrateLootTableProvider"
import {$RegistrateDatapackProvider, $RegistrateDatapackProvider$$Type} from "com.tterrag.registrate.providers.RegistrateDatapackProvider"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$NonNullFunction, $NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$NonNullBiFunction, $NonNullBiFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullBiFunction"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$RegistrateGenericProvider, $RegistrateGenericProvider$$Type} from "com.tterrag.registrate.providers.RegistrateGenericProvider"
import {$RegistrateTagsProvider$IntrinsicImpl, $RegistrateTagsProvider$IntrinsicImpl$$Type} from "com.tterrag.registrate.providers.RegistrateTagsProvider$IntrinsicImpl"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$RegistrateProvider, $RegistrateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$Map, $Map$$Type} from "java.util.Map"
import {$RegistrateItemModelProvider, $RegistrateItemModelProvider$$Type} from "com.tterrag.registrate.providers.RegistrateItemModelProvider"
import {$NonNullUnaryOperator, $NonNullUnaryOperator$$Type} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$ProviderType$Context, $ProviderType$Context$$Type} from "com.tterrag.registrate.providers.ProviderType$Context"
import {$RegistrateTagsProvider, $RegistrateTagsProvider$$Type} from "com.tterrag.registrate.providers.RegistrateTagsProvider"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$RegistrateRecipeProvider, $RegistrateRecipeProvider$$Type} from "com.tterrag.registrate.providers.RegistrateRecipeProvider"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Enchantment, $Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$RegistrateLangProvider, $RegistrateLangProvider$$Type} from "com.tterrag.registrate.providers.RegistrateLangProvider"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$RegistrateDataMapProvider, $RegistrateDataMapProvider$$Type} from "com.tterrag.registrate.providers.RegistrateDataMapProvider"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$ProviderType$DependencyAwareProviderType, $ProviderType$DependencyAwareProviderType$$Type} from "com.tterrag.registrate.providers.ProviderType$DependencyAwareProviderType"
import {$RegistrateItemTagsProvider, $RegistrateItemTagsProvider$$Type} from "com.tterrag.registrate.providers.RegistrateItemTagsProvider"
import {$GatherDataEvent, $GatherDataEvent$$Type} from "net.neoforged.neoforge.data.event.GatherDataEvent"
import {$RegistrateTagsProvider$Impl, $RegistrateTagsProvider$Impl$$Type} from "com.tterrag.registrate.providers.RegistrateTagsProvider$Impl"
import {$RegistrateAdvancementProvider, $RegistrateAdvancementProvider$$Type} from "com.tterrag.registrate.providers.RegistrateAdvancementProvider"

export interface $ProviderType<T extends $RegistrateProvider> {

 "create"(arg0: $ProviderType$Context$$Type<(T)>): T
/**
 * 
 * @deprecated
 */
 "create"(arg0: $AbstractRegistrate$$Type<(any)>, arg1: $GatherDataEvent$$Type, arg2: $Map$$Type<($ProviderType$$Type<(any)>), ($RegistrateProvider$$Type)>): T

(arg0: $AbstractRegistrate<(any)>, arg1: $GatherDataEvent, arg2: $Map<($ProviderType<(any)>), ($RegistrateProvider)>): T
}

export namespace $ProviderType {
const ADVANCEMENT: $ProviderType<($RegistrateAdvancementProvider)>
const ITEM_MODEL: $ProviderType<($RegistrateItemModelProvider)>
const LOOT: $ProviderType<($RegistrateLootTableProvider)>
const LANG: $ProviderType<($RegistrateLangProvider)>
const ENTITY_TAGS: $ProviderType<($RegistrateTagsProvider$IntrinsicImpl<($EntityType<(any)>)>)>
const DYNAMIC: $ProviderType<($RegistrateDatapackProvider)>
const BLOCK_TAGS: $ProviderType<($RegistrateTagsProvider$IntrinsicImpl<($Block)>)>
const FLUID_TAGS: $ProviderType<($RegistrateTagsProvider$IntrinsicImpl<($Fluid)>)>
const GENERIC_CLIENT: $ProviderType<($RegistrateGenericProvider)>
const BLOCKSTATE: $ProviderType<($RegistrateBlockstateProvider)>
const RECIPE: $ProviderType<($RegistrateRecipeProvider)>
const ENCHANTMENT_TAGS: $ProviderType<($RegistrateTagsProvider$Impl<($Enchantment)>)>
const DATA_MAP: $ProviderType<($RegistrateDataMapProvider)>
const ITEM_TAGS: $ProviderType<($RegistrateItemTagsProvider)>
const GENERIC_SERVER: $ProviderType<($RegistrateGenericProvider)>
function registerProvider<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$DependencyAwareProviderType$$Type<(T)>): $ProviderType<(T)>
function create<T extends $RegistrateProvider>(arg0: $ProviderType$$Type<(T)>, arg1: $AbstractRegistrate$$Type<(any)>, arg2: $GatherDataEvent$$Type, arg3: $Map$$Type<($ProviderType$$Type<(any)>), ($RegistrateProvider$$Type)>, arg4: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>): T
function register<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullFunction$$Type<($ProviderType<(T)>), ($NonNullBiFunction$$Type<($AbstractRegistrate$$Type<(any)>), ($GatherDataEvent$$Type), (T)>)>): $ProviderType<(T)>
function register<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$$Type<(T)>): $ProviderType<(T)>
function register<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullBiFunction$$Type<($AbstractRegistrate<(any)>), ($GatherDataEvent), (T)>): $ProviderType<(T)>
function registerTag<T, R extends $RegistrateTagsProvider<(T)>>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(T)>)>, arg2: $ProviderType$DependencyAwareProviderType$$Type<(R)>): $ProviderType<(R)>
function registerServerData<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$SimpleServerDataFactory$$Type<(T)>): $ProviderType<(T)>
function registerDynamicTag<T>(arg0: StringJS, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(T)>)>): $ProviderType<($RegistrateTagsProvider$Impl<(T)>)>
function registerIntrinsicTag<T>(arg0: StringJS, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(T)>)>, arg3: $Function$$Type<(T), ($ResourceKey$$Type<(T)>)>): $ProviderType<($RegistrateTagsProvider$IntrinsicImpl<(T)>)>
function registerDelegate<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullUnaryOperator$$Type<($ProviderType<(T)>)>): $ProviderType<(T)>
const probejs$$marker: never
}
export class $ProviderType$$Static<T extends $RegistrateProvider> implements $ProviderType {
static readonly "ADVANCEMENT": $ProviderType<($RegistrateAdvancementProvider)>
static readonly "ITEM_MODEL": $ProviderType<($RegistrateItemModelProvider)>
static readonly "LOOT": $ProviderType<($RegistrateLootTableProvider)>
static readonly "LANG": $ProviderType<($RegistrateLangProvider)>
static readonly "ENTITY_TAGS": $ProviderType<($RegistrateTagsProvider$IntrinsicImpl<($EntityType<(any)>)>)>
static readonly "DYNAMIC": $ProviderType<($RegistrateDatapackProvider)>
static readonly "BLOCK_TAGS": $ProviderType<($RegistrateTagsProvider$IntrinsicImpl<($Block)>)>
static readonly "FLUID_TAGS": $ProviderType<($RegistrateTagsProvider$IntrinsicImpl<($Fluid)>)>
static readonly "GENERIC_CLIENT": $ProviderType<($RegistrateGenericProvider)>
static readonly "BLOCKSTATE": $ProviderType<($RegistrateBlockstateProvider)>
static readonly "RECIPE": $ProviderType<($RegistrateRecipeProvider)>
static readonly "ENCHANTMENT_TAGS": $ProviderType<($RegistrateTagsProvider$Impl<($Enchantment)>)>
static readonly "DATA_MAP": $ProviderType<($RegistrateDataMapProvider)>
static readonly "ITEM_TAGS": $ProviderType<($RegistrateItemTagsProvider)>
static readonly "GENERIC_SERVER": $ProviderType<($RegistrateGenericProvider)>


static "registerProvider"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$DependencyAwareProviderType$$Type<(T)>): $ProviderType<(T)>
static "create"<T extends $RegistrateProvider>(arg0: $ProviderType$$Type<(T)>, arg1: $AbstractRegistrate$$Type<(any)>, arg2: $GatherDataEvent$$Type, arg3: $Map$$Type<($ProviderType$$Type<(any)>), ($RegistrateProvider$$Type)>, arg4: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>): T
 "create"(arg0: $ProviderType$Context$$Type<(T)>): T
/**
 * 
 * @deprecated
 */
 "create"(arg0: $AbstractRegistrate$$Type<(any)>, arg1: $GatherDataEvent$$Type, arg2: $Map$$Type<($ProviderType$$Type<(any)>), ($RegistrateProvider$$Type)>): T
/**
 * 
 * @deprecated
 */
static "register"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullFunction$$Type<($ProviderType<(T)>), ($NonNullBiFunction$$Type<($AbstractRegistrate$$Type<(any)>), ($GatherDataEvent$$Type), (T)>)>): $ProviderType<(T)>
/**
 * 
 * @deprecated
 */
static "register"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$$Type<(T)>): $ProviderType<(T)>
/**
 * 
 * @deprecated
 */
static "register"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullBiFunction$$Type<($AbstractRegistrate<(any)>), ($GatherDataEvent), (T)>): $ProviderType<(T)>
static "registerTag"<T, R extends $RegistrateTagsProvider<(T)>>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(T)>)>, arg2: $ProviderType$DependencyAwareProviderType$$Type<(R)>): $ProviderType<(R)>
static "registerServerData"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $ProviderType$SimpleServerDataFactory$$Type<(T)>): $ProviderType<(T)>
static "registerDynamicTag"<T>(arg0: StringJS, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(T)>)>): $ProviderType<($RegistrateTagsProvider$Impl<(T)>)>
static "registerIntrinsicTag"<T>(arg0: StringJS, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(T)>)>, arg3: $Function$$Type<(T), ($ResourceKey$$Type<(T)>)>): $ProviderType<($RegistrateTagsProvider$IntrinsicImpl<(T)>)>
/**
 * 
 * @deprecated
 */
static "registerDelegate"<T extends $RegistrateProvider>(arg0: StringJS, arg1: $NonNullUnaryOperator$$Type<($ProviderType<(T)>)>): $ProviderType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProviderType$$Type<T> = ((arg0: $AbstractRegistrate<(any)>, arg1: $GatherDataEvent, arg2: $Map<($ProviderType<(any)>), ($RegistrateProvider)>) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProviderType_<T> = $ProviderType$$Type<(T)>;
}}
declare module "com.tterrag.registrate.providers.RegistrateRecipeProvider" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$$Type} from "net.minecraft.advancements.critereon.MinMaxBounds$Ints"
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$DataIngredient, $DataIngredient$$Type} from "com.tterrag.registrate.util.DataIngredient"
import {$List, $List$$Type} from "java.util.List"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$CachedOutput, $CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$AdvancementHolder, $AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$Advancement$Builder, $Advancement$Builder$$Type} from "net.minecraft.advancements.Advancement$Builder"
import {$EnterBlockTrigger$TriggerInstance, $EnterBlockTrigger$TriggerInstance$$Type} from "net.minecraft.advancements.critereon.EnterBlockTrigger$TriggerInstance"
import {$RecipeBuilder, $RecipeBuilder$$Type} from "net.minecraft.data.recipes.RecipeBuilder"
import {$BlockFamily, $BlockFamily$$Type} from "net.minecraft.data.BlockFamily"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$InventoryChangeTrigger$TriggerInstance, $InventoryChangeTrigger$TriggerInstance$$Type} from "net.minecraft.advancements.critereon.InventoryChangeTrigger$TriggerInstance"
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$PackOutput, $PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$PackOutput$PathProvider, $PackOutput$PathProvider$$Type} from "net.minecraft.data.PackOutput$PathProvider"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ItemPredicate$Builder, $ItemPredicate$Builder$$Type} from "net.minecraft.advancements.critereon.ItemPredicate$Builder"
import {$RegistrateProvider, $RegistrateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$BlockFamily$Variant, $BlockFamily$Variant$$Type} from "net.minecraft.data.BlockFamily$Variant"
import {$Map, $Map$$Type} from "java.util.Map"
import {$RecipeCategory, $RecipeCategory$$Type} from "net.minecraft.data.recipes.RecipeCategory"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$$Type} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import {$LogicalSide, $LogicalSide$$Type} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ItemPredicate, $ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Criterion, $Criterion$$Type} from "net.minecraft.advancements.Criterion"
import {$AbstractCookingRecipe$Factory, $AbstractCookingRecipe$Factory$$Type} from "net.minecraft.world.item.crafting.AbstractCookingRecipe$Factory"
import {$ShapedRecipeBuilder, $ShapedRecipeBuilder$$Type} from "net.minecraft.data.recipes.ShapedRecipeBuilder"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Recipe, $Recipe$$Type} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeProvider, $RecipeProvider$$Type} from "net.minecraft.data.recipes.RecipeProvider"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ShapelessRecipeBuilder, $ShapelessRecipeBuilder$$Type} from "net.minecraft.data.recipes.ShapelessRecipeBuilder"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$RecipeSerializer, $RecipeSerializer$$Type} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$ICondition, $ICondition$$Type} from "net.neoforged.neoforge.common.conditions.ICondition"

export class $RegistrateRecipeProvider extends $RecipeProvider implements $RegistrateProvider, $RecipeOutput {
readonly "advancementPathProvider": $PackOutput$PathProvider
static readonly "DEFAULT_SMOKE_TIME": integer
static readonly "SHAPE_BUILDERS": $Map<($BlockFamily$Variant), ($BiFunction<($ItemLike), ($ItemLike), ($RecipeBuilder)>)>
static readonly "DEFAULT_CAMPFIRE_TIME": integer
static readonly "DEFAULT_SMELT_TIME": integer
static readonly "DEFAULT_BLAST_TIME": integer
readonly "recipePathProvider": $PackOutput$PathProvider

constructor(arg0: $AbstractRegistrate$$Type<(any)>, arg1: $PackOutput$$Type, arg2: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>)

public static "has"(arg0: $MinMaxBounds$Ints$$Type, arg1: $ItemLike$$Type): $Criterion<($InventoryChangeTrigger$TriggerInstance)>
public static "has"(arg0: $TagKey$$Type<($Item)>): $Criterion<($InventoryChangeTrigger$TriggerInstance)>
public static "has"(arg0: $ItemLike$$Type): $Criterion<($InventoryChangeTrigger$TriggerInstance)>
public "getProvider"(): $HolderLookup$Provider
public "wall"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>): void
public static "wall"(arg0: $RecipeOutput$$Type, arg1: $RecipeCategory$$Type, arg2: $ItemLike$$Type, arg3: $ItemLike$$Type): void
public "fence"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: StringJS): void
public "square"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: boolean): void
public "resolve"<T>(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
public "accept"(arg0: $ResourceLocation$$Type, arg1: $Recipe$$Type<(any)>, arg2: $AdvancementHolder$$Type, ...arg3: ($ICondition$$Type)[]): void
public static "candle"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "carpet"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "banner"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public "door"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: StringJS): void
public "slab"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: StringJS, arg4: boolean): void
public static "slab"(arg0: $RecipeOutput$$Type, arg1: $RecipeCategory$$Type, arg2: $ItemLike$$Type, arg3: $ItemLike$$Type): void
public "stairs"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: StringJS, arg4: boolean): void
public static "cut"(arg0: $RecipeOutput$$Type, arg1: $RecipeCategory$$Type, arg2: $ItemLike$$Type, arg3: $ItemLike$$Type): void
public "planks"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>): void
public "safeId"(arg0: $ItemLike$$Type): $ResourceLocation
public "safeId"(arg0: $ResourceLocation$$Type): $ResourceLocation
public "safeId"(arg0: $DataIngredient$$Type): $ResourceLocation
public static "grate"(arg0: $RecipeOutput$$Type, arg1: $Block$$Type, arg2: $Block$$Type): void
public "food"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float): void
public static "trimSmithing"(arg0: $RecipeOutput$$Type, arg1: $Item$$Type, arg2: $ResourceLocation$$Type): void
public static "twoByTwoPacker"(arg0: $RecipeOutput$$Type, arg1: $RecipeCategory$$Type, arg2: $ItemLike$$Type, arg3: $ItemLike$$Type): void
public static "planksFromLog"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $TagKey$$Type<($Item)>, arg3: integer): void
public static "planksFromLogs"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $TagKey$$Type<($Item)>, arg3: integer): void
public static "woodFromLogs"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "woodenBoat"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "chestBoat"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "buttonBuilder"(arg0: $ItemLike$$Type, arg1: $Ingredient$$Type): $RecipeBuilder
public static "doorBuilder"(arg0: $ItemLike$$Type, arg1: $Ingredient$$Type): $RecipeBuilder
public static "fenceBuilder"(arg0: $ItemLike$$Type, arg1: $Ingredient$$Type): $RecipeBuilder
public static "pressurePlate"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "slabBuilder"(arg0: $RecipeCategory$$Type, arg1: $ItemLike$$Type, arg2: $Ingredient$$Type): $RecipeBuilder
public static "stairBuilder"(arg0: $ItemLike$$Type, arg1: $Ingredient$$Type): $RecipeBuilder
public static "signBuilder"(arg0: $ItemLike$$Type, arg1: $Ingredient$$Type): $RecipeBuilder
public static "hangingSign"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "concretePowder"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "wallBuilder"(arg0: $RecipeCategory$$Type, arg1: $ItemLike$$Type, arg2: $Ingredient$$Type): $RecipeBuilder
public static "polished"(arg0: $RecipeOutput$$Type, arg1: $RecipeCategory$$Type, arg2: $ItemLike$$Type, arg3: $ItemLike$$Type): void
public static "cutBuilder"(arg0: $RecipeCategory$$Type, arg1: $ItemLike$$Type, arg2: $Ingredient$$Type): $ShapedRecipeBuilder
public static "chiseled"(arg0: $RecipeOutput$$Type, arg1: $RecipeCategory$$Type, arg2: $ItemLike$$Type, arg3: $ItemLike$$Type): void
public static "mosaicBuilder"(arg0: $RecipeOutput$$Type, arg1: $RecipeCategory$$Type, arg2: $ItemLike$$Type, arg3: $ItemLike$$Type): void
public static "waxRecipes"(arg0: $RecipeOutput$$Type, arg1: $FeatureFlagSet$$Type): void
public static "copperBulb"(arg0: $RecipeOutput$$Type, arg1: $Block$$Type, arg2: $Block$$Type): void
public static "getBaseBlock"(arg0: $BlockFamily$$Type, arg1: $BlockFamily$Variant$$Type): $Block
public static "insideOf"(arg0: $Block$$Type): $Criterion<($EnterBlockTrigger$TriggerInstance)>
public static "getHasName"(arg0: $ItemLike$$Type): StringJS
public static "getItemName"(arg0: $ItemLike$$Type): StringJS
public "singleItem"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: integer, arg4: integer): void
public "fenceGate"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: StringJS): void
public "trapDoor"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: StringJS): void
public "campfire"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float, arg4: integer): void
public "campfire"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float): void
public "safeName"(arg0: $ItemLike$$Type): StringJS
public "safeName"(arg0: $ResourceLocation$$Type): StringJS
public "safeName"(arg0: $DataIngredient$$Type): StringJS
public "cooking"<T extends $ItemLike, S extends $AbstractCookingRecipe>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float, arg4: integer, arg5: StringJS, arg6: $RecipeSerializer$$Type<(S)>, arg7: $AbstractCookingRecipe$Factory$$Type<(S)>): void
public "cooking"<T extends $ItemLike, S extends $AbstractCookingRecipe>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float, arg4: integer, arg5: $RecipeSerializer$$Type<(S)>, arg6: $AbstractCookingRecipe$Factory$$Type<(S)>): void
public "smelting"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float): void
public "smelting"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float, arg4: integer): void
public "blasting"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float, arg4: integer): void
public "blasting"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float): void
public "smoking"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float): void
public "smoking"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float, arg4: integer): void
public "stonecutting"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: integer): void
public "stonecutting"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>): void
public "advancement"(): $Advancement$Builder
public "getSide"(): $LogicalSide
public "storage"<T extends $ItemLike>(arg0: $NonNullSupplier$$Type<(T)>, arg1: $RecipeCategory$$Type, arg2: $NonNullSupplier$$Type<(T)>): void
/**
 * 
 * @deprecated
 */
public "storage"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $NonNullSupplier$$Type<(T)>): void
public "storage"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $NonNullSupplier$$Type<(T)>, arg3: $DataIngredient$$Type, arg4: $NonNullSupplier$$Type<(T)>): void
public "singleItemUnfinished"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: integer, arg4: integer): $ShapelessRecipeBuilder
public "buildAdvancement"(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $AdvancementHolder$$Type, ...arg3: ($ICondition$$Type)[]): $CompletableFuture<(any)>
public "buildAdvancement"(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $AdvancementHolder$$Type): $CompletableFuture<(any)>
public static "netheriteSmithing"(arg0: $RecipeOutput$$Type, arg1: $Item$$Type, arg2: $RecipeCategory$$Type, arg3: $Item$$Type): void
public static "threeByThreePacker"(arg0: $RecipeOutput$$Type, arg1: $RecipeCategory$$Type, arg2: $ItemLike$$Type, arg3: $ItemLike$$Type): void
public static "threeByThreePacker"(arg0: $RecipeOutput$$Type, arg1: $RecipeCategory$$Type, arg2: $ItemLike$$Type, arg3: $ItemLike$$Type, arg4: StringJS): void
public static "fenceGateBuilder"(arg0: $ItemLike$$Type, arg1: $Ingredient$$Type): $RecipeBuilder
public static "pressurePlateBuilder"(arg0: $RecipeCategory$$Type, arg1: $ItemLike$$Type, arg2: $Ingredient$$Type): $RecipeBuilder
public static "trapdoorBuilder"(arg0: $ItemLike$$Type, arg1: $Ingredient$$Type): $RecipeBuilder
public static "colorBlockWithDye"(arg0: $RecipeOutput$$Type, arg1: $List$$Type<($Item$$Type)>, arg2: $List$$Type<($Item$$Type)>, arg3: StringJS): void
public static "bedFromPlanksAndWool"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "polishedBuilder"(arg0: $RecipeCategory$$Type, arg1: $ItemLike$$Type, arg2: $Ingredient$$Type): $RecipeBuilder
public static "chiseledBuilder"(arg0: $RecipeCategory$$Type, arg1: $ItemLike$$Type, arg2: $Ingredient$$Type): $ShapedRecipeBuilder
public static "smeltingResultFromBase"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "copySmithingTemplate"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $Ingredient$$Type): void
public static "copySmithingTemplate"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $TagKey$$Type<($Item)>): void
public static "copySmithingTemplate"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "generateRecipes"(arg0: $RecipeOutput$$Type, arg1: $BlockFamily$$Type, arg2: $FeatureFlagSet$$Type): void
public static "inventoryTrigger"(...arg0: ($ItemPredicate$Builder$$Type)[]): $Criterion<($InventoryChangeTrigger$TriggerInstance)>
public static "inventoryTrigger"(...arg0: ($ItemPredicate$$Type)[]): $Criterion<($InventoryChangeTrigger$TriggerInstance)>
public static "getSimpleRecipeName"(arg0: $ItemLike$$Type): StringJS
public static "getSmeltingRecipeName"(arg0: $ItemLike$$Type): StringJS
public static "getBlastingRecipeName"(arg0: $ItemLike$$Type): StringJS
public "smeltingAndBlasting"<T extends $ItemLike>(arg0: $DataIngredient$$Type, arg1: $RecipeCategory$$Type, arg2: $Supplier$$Type<(T)>, arg3: float): void
public "generateForEnabledBlockFamilies"(arg0: $RecipeOutput$$Type, arg1: $FeatureFlagSet$$Type): void
public static "stainedGlassPaneFromStainedGlass"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "stainedGlassPaneFromGlassPaneAndDye"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "coloredTerracottaFromTerracottaAndDye"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "stainedGlassFromGlassAndDye"(arg0: $RecipeOutput$$Type, arg1: $ItemLike$$Type, arg2: $ItemLike$$Type): void
public static "stonecutterResultFromBase"(arg0: $RecipeOutput$$Type, arg1: $RecipeCategory$$Type, arg2: $ItemLike$$Type, arg3: $ItemLike$$Type, arg4: integer): void
public static "stonecutterResultFromBase"(arg0: $RecipeOutput$$Type, arg1: $RecipeCategory$$Type, arg2: $ItemLike$$Type, arg3: $ItemLike$$Type): void
public static "getConversionRecipeName"(arg0: $ItemLike$$Type, arg1: $ItemLike$$Type): StringJS
public "accept"(arg0: $ResourceLocation$$Type, arg1: $Recipe$$Type<(any)>, arg2: $AdvancementHolder$$Type): void
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(any)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture<(any)>
public "withConditions"(...arg0: ($ICondition$$Type)[]): $RecipeOutput
get "provider"(): $HolderLookup$Provider
get "side"(): $LogicalSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateRecipeProvider$$Type = ($RegistrateRecipeProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrateRecipeProvider_ = $RegistrateRecipeProvider$$Type;
}}
declare module "com.tterrag.registrate.providers.loot.RegistrateLootTableProvider" {
import {$RegistrateProvider, $RegistrateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$LootTableProvider, $LootTableProvider$$Type} from "net.minecraft.data.loot.LootTableProvider"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$List, $List$$Type} from "java.util.List"
import {$CachedOutput, $CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$RegistrateLootTableProvider$LootType, $RegistrateLootTableProvider$LootType$$Type} from "com.tterrag.registrate.providers.loot.RegistrateLootTableProvider$LootType"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$LootContextParamSet, $LootContextParamSet$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"
import {$LogicalSide, $LogicalSide$$Type} from "net.neoforged.fml.LogicalSide"
import {$LootTableProvider$SubProviderEntry, $LootTableProvider$SubProviderEntry$$Type} from "net.minecraft.data.loot.LootTableProvider$SubProviderEntry"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$LootTable$Builder, $LootTable$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$PackOutput, $PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$NonNullConsumer, $NonNullConsumer$$Type} from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$RegistrateLootTables, $RegistrateLootTables$$Type} from "com.tterrag.registrate.providers.loot.RegistrateLootTables"

export class $RegistrateLootTableProvider extends $LootTableProvider implements $RegistrateProvider {

constructor(arg0: $AbstractRegistrate$$Type<(any)>, arg1: $PackOutput$$Type, arg2: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>)

public "getProvider"(): $HolderLookup$Provider
public "resolve"<T>(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
public "getTables"(): $List<($LootTableProvider$SubProviderEntry)>
public "addLootAction"(arg0: $LootContextParamSet$$Type, arg1: $Consumer$$Type<($BiConsumer<($ResourceKey<($LootTable)>), ($LootTable$Builder)>)>): void
public "addLootAction"<T extends $RegistrateLootTables>(arg0: $RegistrateLootTableProvider$LootType$$Type<(T)>, arg1: $NonNullConsumer$$Type<(T)>): void
public "getSide"(): $LogicalSide
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(any)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture<(any)>
get "provider"(): $HolderLookup$Provider
get "tables"(): $List<($LootTableProvider$SubProviderEntry)>
get "side"(): $LogicalSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateLootTableProvider$$Type = ($RegistrateLootTableProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrateLootTableProvider_ = $RegistrateLootTableProvider$$Type;
}}
declare module "com.tterrag.registrate.util.nullness.NonNullConsumer" {
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $NonNullConsumer<T> extends $Consumer<(T)> {

 "andThen"(arg0: $NonNullConsumer$$Type<(T)>): $NonNullConsumer<(T)>
 "accept"(arg0: T): void
 "andThen"(arg0: $Consumer$$Type<(T)>): $Consumer<(T)>

(arg0: T): void
}

export namespace $NonNullConsumer {
function noop<T>(): $NonNullConsumer<(T)>
const probejs$$marker: never
}
export class $NonNullConsumer$$Static<T> implements $NonNullConsumer {


 "andThen"(arg0: $NonNullConsumer$$Type<(T)>): $NonNullConsumer<(T)>
 "accept"(arg0: T): void
static "noop"<T>(): $NonNullConsumer<(T)>
 "andThen"(arg0: $Consumer$$Type<(T)>): $Consumer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullConsumer$$Type<T> = ((arg0: T) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonNullConsumer_<T> = $NonNullConsumer$$Type<(T)>;
}}
declare module "com.tterrag.registrate.builders.NoConfigBuilder" {
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BuilderCallback, $BuilderCallback$$Type} from "com.tterrag.registrate.builders.BuilderCallback"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$AbstractBuilder, $AbstractBuilder$$Type} from "com.tterrag.registrate.builders.AbstractBuilder"

export class $NoConfigBuilder<R, T extends R, P> extends $AbstractBuilder<(R), (T), (P), ($NoConfigBuilder<(R), (T), (P)>)> {

constructor(arg0: $AbstractRegistrate$$Type<(any)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $ResourceKey$$Type<($Registry<(R)>)>, arg5: $NonNullSupplier$$Type<(T)>)

public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoConfigBuilder$$Type<R, T, P> = ($NoConfigBuilder<(R), (T), (P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoConfigBuilder_<R, T, P> = $NoConfigBuilder$$Type<(R), (T), (P)>;
}}
declare module "com.tterrag.registrate.providers.RegistrateGenericProvider" {
import {$RegistrateProvider, $RegistrateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$CachedOutput, $CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$RegistrateGenericProvider$Generator, $RegistrateGenericProvider$Generator$$Type} from "com.tterrag.registrate.providers.RegistrateGenericProvider$Generator"
import {$LogicalSide, $LogicalSide$$Type} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $RegistrateGenericProvider implements $RegistrateProvider {


public "getName"(): StringJS
public "run"(arg0: $CachedOutput$$Type): $CompletableFuture<(any)>
public "add"(arg0: $RegistrateGenericProvider$Generator$$Type): $RegistrateGenericProvider
public "getSide"(): $LogicalSide
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(any)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture<(any)>
get "name"(): StringJS
get "side"(): $LogicalSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateGenericProvider$$Type = ($RegistrateGenericProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrateGenericProvider_ = $RegistrateGenericProvider$$Type;
}}
declare module "com.tterrag.registrate.AbstractRegistrate" {
import {$RegistryEntry, $RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$EntityType$EntityFactory, $EntityType$EntityFactory$$Type} from "net.minecraft.world.entity.EntityType$EntityFactory"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$MenuAccess, $MenuAccess$$Type} from "net.minecraft.client.gui.screens.inventory.MenuAccess"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$EntityBuilder, $EntityBuilder$$Type} from "com.tterrag.registrate.builders.EntityBuilder"
import {$BlockEntityBuilder, $BlockEntityBuilder$$Type} from "com.tterrag.registrate.builders.BlockEntityBuilder"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$MenuBuilder$ScreenFactory, $MenuBuilder$ScreenFactory$$Type} from "com.tterrag.registrate.builders.MenuBuilder$ScreenFactory"
import {$BuilderCallback, $BuilderCallback$$Type} from "com.tterrag.registrate.builders.BuilderCallback"
import {$BlockBuilder, $BlockBuilder$$Type} from "com.tterrag.registrate.builders.BlockBuilder"
import {$NonNullFunction, $NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$NonNullBiFunction, $NonNullBiFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullBiFunction"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$NonNullUnaryOperator, $NonNullUnaryOperator$$Type} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$RegistryBuilder, $RegistryBuilder$$Type} from "net.neoforged.neoforge.registries.RegistryBuilder"
import {$FluidBuilder, $FluidBuilder$$Type} from "com.tterrag.registrate.builders.FluidBuilder"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ItemBuilder, $ItemBuilder$$Type} from "com.tterrag.registrate.builders.ItemBuilder"
import {$CreativeModeTab$Builder, $CreativeModeTab$Builder$$Type} from "net.minecraft.world.item.CreativeModeTab$Builder"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MenuBuilder$ForgeMenuFactory, $MenuBuilder$ForgeMenuFactory$$Type} from "com.tterrag.registrate.builders.MenuBuilder$ForgeMenuFactory"
import {$BaseFlowingFluid, $BaseFlowingFluid$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"
import {$ProviderType, $ProviderType$$Type} from "com.tterrag.registrate.providers.ProviderType"
import {$BaseFlowingFluid$Flowing, $BaseFlowingFluid$Flowing$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Flowing"
import {$MenuBuilder$MenuFactory, $MenuBuilder$MenuFactory$$Type} from "com.tterrag.registrate.builders.MenuBuilder$MenuFactory"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$NoConfigBuilder, $NoConfigBuilder$$Type} from "com.tterrag.registrate.builders.NoConfigBuilder"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$IEventBus, $IEventBus$$Type} from "net.neoforged.bus.api.IEventBus"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$NonNullConsumer, $NonNullConsumer$$Type} from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$MenuBuilder, $MenuBuilder$$Type} from "com.tterrag.registrate.builders.MenuBuilder"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$RegistrateProvider, $RegistrateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$DataProviderInitializer, $DataProviderInitializer$$Type} from "com.tterrag.registrate.providers.DataProviderInitializer"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$CreativeModeTabModifier, $CreativeModeTabModifier$$Type} from "com.tterrag.registrate.util.CreativeModeTabModifier"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockEntityBuilder$BlockEntityFactory, $BlockEntityBuilder$BlockEntityFactory$$Type} from "com.tterrag.registrate.builders.BlockEntityBuilder$BlockEntityFactory"
import {$Builder, $Builder$$Type} from "com.tterrag.registrate.builders.Builder"
import {$FluidBuilder$FluidTypeFactory, $FluidBuilder$FluidTypeFactory$$Type} from "com.tterrag.registrate.builders.FluidBuilder$FluidTypeFactory"
import {$MobCategory, $MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"

export class $AbstractRegistrate<S extends $AbstractRegistrate<(S)>> {


public "entity"<T extends $Entity>(arg0: $EntityType$EntityFactory$$Type<(T)>, arg1: $MobCategory$$Type): $EntityBuilder<(T), (S)>
public "entity"<T extends $Entity, P>(arg0: P, arg1: $EntityType$EntityFactory$$Type<(T)>, arg2: $MobCategory$$Type): $EntityBuilder<(T), (P)>
public "entity"<T extends $Entity, P>(arg0: P, arg1: StringJS, arg2: $EntityType$EntityFactory$$Type<(T)>, arg3: $MobCategory$$Type): $EntityBuilder<(T), (P)>
public "entity"<T extends $Entity>(arg0: StringJS, arg1: $EntityType$EntityFactory$$Type<(T)>, arg2: $MobCategory$$Type): $EntityBuilder<(T), (S)>
public "generic"<R, T extends R>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(R)>)>, arg2: $NonNullSupplier$$Type<(T)>): $NoConfigBuilder<(R), (T), (S)>
public "generic"<R, T extends R, P>(arg0: P, arg1: $ResourceKey$$Type<($Registry<(R)>)>, arg2: $NonNullSupplier$$Type<(T)>): $NoConfigBuilder<(R), (T), (P)>
public "generic"<R, T extends R, P>(arg0: P, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(R)>)>, arg3: $NonNullSupplier$$Type<(T)>): $NoConfigBuilder<(R), (T), (P)>
public "generic"<R, T extends R>(arg0: $ResourceKey$$Type<($Registry<(R)>)>, arg1: $NonNullSupplier$$Type<(T)>): $NoConfigBuilder<(R), (T), (S)>
public "block"<T extends $Block>(arg0: StringJS, arg1: $NonNullFunction$$Type<($BlockBehaviour$Properties), (T)>): $BlockBuilder<(T), (S)>
public "block"<T extends $Block>(arg0: $NonNullFunction$$Type<($BlockBehaviour$Properties), (T)>): $BlockBuilder<(T), (S)>
public "block"<T extends $Block, P>(arg0: P, arg1: StringJS, arg2: $NonNullFunction$$Type<($BlockBehaviour$Properties), (T)>): $BlockBuilder<(T), (P)>
public "block"<T extends $Block, P>(arg0: P, arg1: $NonNullFunction$$Type<($BlockBehaviour$Properties), (T)>): $BlockBuilder<(T), (P)>
public "item"<T extends $Item>(arg0: StringJS, arg1: $NonNullFunction$$Type<($Item$Properties), (T)>): $ItemBuilder<(T), (S)>
public "item"<T extends $Item, P>(arg0: P, arg1: $NonNullFunction$$Type<($Item$Properties), (T)>): $ItemBuilder<(T), (P)>
public "item"<T extends $Item>(arg0: $NonNullFunction$$Type<($Item$Properties), (T)>): $ItemBuilder<(T), (S)>
public "item"<T extends $Item, P>(arg0: P, arg1: StringJS, arg2: $NonNullFunction$$Type<($Item$Properties), (T)>): $ItemBuilder<(T), (P)>
public "object"(arg0: StringJS): S
public "getAll"<R, T extends R>(arg0: $ResourceKey$$Type<($Registry<(R)>)>): $Collection<($RegistryEntry<(R), (T)>)>
public "get"<R, T extends R>(arg0: $ResourceKey$$Type<($Registry<(R)>)>): $RegistryEntry<(R), (T)>
public "get"<R, T extends R>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(R)>)>): $RegistryEntry<(R), (T)>
public "transform"(arg0: $NonNullUnaryOperator$$Type<(S)>): S
public "transform"<R, T extends R, P, S2 extends $Builder<(R), (T), (P), (S2)>>(arg0: $NonNullFunction$$Type<(S), (S2)>): S2
public "isRegistered"<R>(arg0: $ResourceKey$$Type<($Registry<(R)>)>): boolean
public "entry"<R, T extends R, P, S2 extends $Builder<(R), (T), (P), (S2)>>(arg0: $NonNullBiFunction$$Type<(StringJS), ($BuilderCallback), (S2)>): S2
public "entry"<R, T extends R, P, S2 extends $Builder<(R), (T), (P), (S2)>>(arg0: StringJS, arg1: $NonNullFunction$$Type<($BuilderCallback), (S2)>): S2
public "simple"<R, T extends R>(arg0: $ResourceKey$$Type<($Registry<(R)>)>, arg1: $NonNullSupplier$$Type<(T)>): $RegistryEntry<(R), (T)>
public "simple"<R, T extends R>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(R)>)>, arg2: $NonNullSupplier$$Type<(T)>): $RegistryEntry<(R), (T)>
public "simple"<R, T extends R, P>(arg0: P, arg1: $ResourceKey$$Type<($Registry<(R)>)>, arg2: $NonNullSupplier$$Type<(T)>): $RegistryEntry<(R), (T)>
public "simple"<R, T extends R, P>(arg0: P, arg1: StringJS, arg2: $ResourceKey$$Type<($Registry<(R)>)>, arg3: $NonNullSupplier$$Type<(T)>): $RegistryEntry<(R), (T)>
public "fluid"<P>(arg0: P, arg1: StringJS, arg2: $NonNullSupplier$$Type<($FluidType$$Type)>): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"<P>(arg0: P, arg1: StringJS, arg2: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"<P>(arg0: P, arg1: StringJS): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"<P>(arg0: P, arg1: StringJS, arg2: $ResourceLocation$$Type, arg3: $ResourceLocation$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"<P>(arg0: P, arg1: StringJS, arg2: $ResourceLocation$$Type, arg3: $ResourceLocation$$Type, arg4: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"<T extends $BaseFlowingFluid>(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type, arg2: $NonNullSupplier$$Type<($FluidType$$Type)>, arg3: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (S)>
public "fluid"<T extends $BaseFlowingFluid>(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type, arg2: $FluidBuilder$FluidTypeFactory$$Type, arg3: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (S)>
public "fluid"<T extends $BaseFlowingFluid>(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type, arg2: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (S)>
public "fluid"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type, arg2: $NonNullSupplier$$Type<($FluidType$$Type)>): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "fluid"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type, arg2: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "fluid"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "fluid"<P>(arg0: P, arg1: StringJS, arg2: $ResourceLocation$$Type, arg3: $ResourceLocation$$Type, arg4: $NonNullSupplier$$Type<($FluidType$$Type)>): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"<T extends $BaseFlowingFluid, P>(arg0: P, arg1: StringJS, arg2: $ResourceLocation$$Type, arg3: $ResourceLocation$$Type, arg4: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (P)>
public "fluid"<T extends $BaseFlowingFluid, P>(arg0: P, arg1: StringJS, arg2: $ResourceLocation$$Type, arg3: $ResourceLocation$$Type, arg4: $FluidBuilder$FluidTypeFactory$$Type, arg5: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (P)>
public "fluid"<T extends $BaseFlowingFluid, P>(arg0: P, arg1: StringJS, arg2: $ResourceLocation$$Type, arg3: $ResourceLocation$$Type, arg4: $NonNullSupplier$$Type<($FluidType$$Type)>, arg5: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (P)>
public "fluid"(arg0: StringJS): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "fluid"<P>(arg0: P, arg1: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $NonNullSupplier$$Type<($FluidType$$Type)>): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "fluid"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "fluid"<P>(arg0: P, arg1: $NonNullSupplier$$Type<($FluidType$$Type)>): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"<P>(arg0: P, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"<P>(arg0: P): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"<T extends $BaseFlowingFluid>(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $NonNullSupplier$$Type<($FluidType$$Type)>, arg4: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (S)>
public "fluid"<T extends $BaseFlowingFluid>(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $FluidBuilder$FluidTypeFactory$$Type, arg4: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (S)>
public "fluid"<T extends $BaseFlowingFluid>(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (S)>
public "fluid"<P>(arg0: P, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $NonNullSupplier$$Type<($FluidType$$Type)>): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"<T extends $BaseFlowingFluid, P>(arg0: P, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (P)>
public "fluid"<T extends $BaseFlowingFluid, P>(arg0: P, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $FluidBuilder$FluidTypeFactory$$Type, arg4: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (P)>
public "fluid"<T extends $BaseFlowingFluid, P>(arg0: P, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $NonNullSupplier$$Type<($FluidType$$Type)>, arg4: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (P)>
public "fluid"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "fluid"(arg0: StringJS, arg1: $NonNullSupplier$$Type<($FluidType$$Type)>): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "fluid"(arg0: StringJS, arg1: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "fluid"<P>(arg0: P, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public "fluid"(): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "fluid"(arg0: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "fluid"(arg0: $NonNullSupplier$$Type<($FluidType$$Type)>): $FluidBuilder<($BaseFlowingFluid$Flowing), (S)>
public "menu"<T extends $AbstractContainerMenu, SC extends ($Screen) & ($MenuAccess<(T)>)>(arg0: $MenuBuilder$ForgeMenuFactory$$Type<(T)>, arg1: $NonNullSupplier$$Type<($MenuBuilder$ScreenFactory$$Type<(T), (SC)>)>): $MenuBuilder<(T), (SC), (S)>
public "menu"<T extends $AbstractContainerMenu, SC extends ($Screen) & ($MenuAccess<(T)>)>(arg0: StringJS, arg1: $MenuBuilder$ForgeMenuFactory$$Type<(T)>, arg2: $NonNullSupplier$$Type<($MenuBuilder$ScreenFactory$$Type<(T), (SC)>)>): $MenuBuilder<(T), (SC), (S)>
public "menu"<T extends $AbstractContainerMenu, SC extends ($Screen) & ($MenuAccess<(T)>), P>(arg0: P, arg1: $MenuBuilder$ForgeMenuFactory$$Type<(T)>, arg2: $NonNullSupplier$$Type<($MenuBuilder$ScreenFactory$$Type<(T), (SC)>)>): $MenuBuilder<(T), (SC), (P)>
public "menu"<T extends $AbstractContainerMenu, SC extends ($Screen) & ($MenuAccess<(T)>), P>(arg0: P, arg1: StringJS, arg2: $MenuBuilder$ForgeMenuFactory$$Type<(T)>, arg3: $NonNullSupplier$$Type<($MenuBuilder$ScreenFactory$$Type<(T), (SC)>)>): $MenuBuilder<(T), (SC), (P)>
public "menu"<T extends $AbstractContainerMenu, SC extends ($Screen) & ($MenuAccess<(T)>)>(arg0: $MenuBuilder$MenuFactory$$Type<(T)>, arg1: $NonNullSupplier$$Type<($MenuBuilder$ScreenFactory$$Type<(T), (SC)>)>): $MenuBuilder<(T), (SC), (S)>
public "menu"<T extends $AbstractContainerMenu, SC extends ($Screen) & ($MenuAccess<(T)>)>(arg0: StringJS, arg1: $MenuBuilder$MenuFactory$$Type<(T)>, arg2: $NonNullSupplier$$Type<($MenuBuilder$ScreenFactory$$Type<(T), (SC)>)>): $MenuBuilder<(T), (SC), (S)>
public "menu"<T extends $AbstractContainerMenu, SC extends ($Screen) & ($MenuAccess<(T)>), P>(arg0: P, arg1: $MenuBuilder$MenuFactory$$Type<(T)>, arg2: $NonNullSupplier$$Type<($MenuBuilder$ScreenFactory$$Type<(T), (SC)>)>): $MenuBuilder<(T), (SC), (P)>
public "menu"<T extends $AbstractContainerMenu, SC extends ($Screen) & ($MenuAccess<(T)>), P>(arg0: P, arg1: StringJS, arg2: $MenuBuilder$MenuFactory$$Type<(T)>, arg3: $NonNullSupplier$$Type<($MenuBuilder$ScreenFactory$$Type<(T), (SC)>)>): $MenuBuilder<(T), (SC), (P)>
public "skipErrors"(arg0: boolean): S
public "addRawLang"(arg0: StringJS, arg1: StringJS): $MutableComponent
public "addLang"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: StringJS, arg3: StringJS): $MutableComponent
public "addLang"(arg0: StringJS, arg1: $ResourceLocation$$Type, arg2: StringJS): $MutableComponent
public "genData"<T extends $RegistrateProvider>(arg0: $ProviderType$$Type<(T)>, arg1: T): void
public "makeRegistry"<R>(arg0: StringJS, arg1: $Function$$Type<($ResourceKey<($Registry<(R)>)>), ($RegistryBuilder$$Type<(R)>)>): $ResourceKey<($Registry<(R)>)>
public "getModEventBus"(): $IEventBus
public "setModEventBus"(arg0: $IEventBus$$Type): void
public "getModid"(): StringJS
public "blockEntity"<T extends $BlockEntity, P>(arg0: P, arg1: StringJS, arg2: $BlockEntityBuilder$BlockEntityFactory$$Type<(T)>): $BlockEntityBuilder<(T), (P)>
public "blockEntity"<T extends $BlockEntity>(arg0: $BlockEntityBuilder$BlockEntityFactory$$Type<(T)>): $BlockEntityBuilder<(T), (S)>
public "blockEntity"<T extends $BlockEntity, P>(arg0: P, arg1: $BlockEntityBuilder$BlockEntityFactory$$Type<(T)>): $BlockEntityBuilder<(T), (P)>
public "blockEntity"<T extends $BlockEntity>(arg0: StringJS, arg1: $BlockEntityBuilder$BlockEntityFactory$$Type<(T)>): $BlockEntityBuilder<(T), (S)>
public "getOptional"<R, T extends R>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(R)>)>): $Optional<($RegistryEntry<(R), (T)>)>
public "addRegisterCallback"<R>(arg0: $ResourceKey$$Type<($Registry<(R)>)>, arg1: $Runnable$$Type): S
public "addRegisterCallback"<R, T extends R>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(R)>)>, arg2: $NonNullConsumer$$Type<(T)>): S
public "setDataGenerator"<P extends $RegistrateProvider, R>(arg0: $Builder$$Type<(R), (any), (any), (any)>, arg1: $ProviderType$$Type<(P)>, arg2: $NonNullConsumer$$Type<(P)>): S
public "setDataGenerator"<P extends $RegistrateProvider, R>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(R)>)>, arg2: $ProviderType$$Type<(P)>, arg3: $NonNullConsumer$$Type<(P)>): S
public "addDataGenerator"<T extends $RegistrateProvider>(arg0: $ProviderType$$Type<(T)>, arg1: $NonNullConsumer$$Type<(T)>): S
public "makeDatapackRegistry"<R>(arg0: StringJS, arg1: $Codec$$Type<(R)>, arg2: $Codec$$Type<(R)>): $ResourceKey<($Registry<(R)>)>
public "makeDatapackRegistry"<R>(arg0: StringJS, arg1: $Codec$$Type<(R)>): $ResourceKey<($Registry<(R)>)>
public "getDataGenInitializer"(): $DataProviderInitializer
public "modifyCreativeModeTab"(arg0: $ResourceKey$$Type<($CreativeModeTab)>, arg1: $Consumer$$Type<($CreativeModeTabModifier)>): S
public "registerEventListeners"(arg0: $IEventBus$$Type): S
public "defaultCreativeTab"(arg0: StringJS, arg1: $Consumer$$Type<($CreativeModeTab$Builder)>): $NoConfigBuilder<($CreativeModeTab), ($CreativeModeTab), (S)>
public "defaultCreativeTab"(): $NoConfigBuilder<($CreativeModeTab), ($CreativeModeTab), (S)>
public "defaultCreativeTab"(arg0: $Consumer$$Type<($CreativeModeTab$Builder)>): $NoConfigBuilder<($CreativeModeTab), ($CreativeModeTab), (S)>
public "defaultCreativeTab"<P>(arg0: P, arg1: StringJS): $NoConfigBuilder<($CreativeModeTab), ($CreativeModeTab), (P)>
public "defaultCreativeTab"(arg0: StringJS): $NoConfigBuilder<($CreativeModeTab), ($CreativeModeTab), (S)>
public "defaultCreativeTab"(arg0: $ResourceKey$$Type<($CreativeModeTab)>): S
public "defaultCreativeTab"<P>(arg0: P): $NoConfigBuilder<($CreativeModeTab), ($CreativeModeTab), (P)>
public "defaultCreativeTab"<P>(arg0: P, arg1: StringJS, arg2: $Consumer$$Type<($CreativeModeTab$Builder)>): $NoConfigBuilder<($CreativeModeTab), ($CreativeModeTab), (P)>
public "defaultCreativeTab"<P>(arg0: P, arg1: $Consumer$$Type<($CreativeModeTab$Builder)>): $NoConfigBuilder<($CreativeModeTab), ($CreativeModeTab), (P)>
public "getDataProvider"<P extends $RegistrateProvider>(arg0: $ProviderType$$Type<(P)>): $Optional<(P)>
public static "isDevEnvironment"(): boolean
get "modEventBus"(): $IEventBus
set "modEventBus"(value: $IEventBus$$Type)
get "modid"(): StringJS
get "dataGenInitializer"(): $DataProviderInitializer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRegistrate$$Type<S> = ($AbstractRegistrate<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractRegistrate_<S> = $AbstractRegistrate$$Type<(S)>;
}}
declare module "com.tterrag.registrate.util.CreativeModeTabModifier" {
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$CreativeModeTab$TabVisibility, $CreativeModeTab$TabVisibility$$Type} from "net.minecraft.world.item.CreativeModeTab$TabVisibility"
import {$BooleanSupplier, $BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"

export class $CreativeModeTabModifier implements $CreativeModeTab$Output {

constructor(arg0: $Supplier$$Type<($FeatureFlagSet$$Type)>, arg1: $BooleanSupplier$$Type, arg2: $BiConsumer$$Type<($ItemStack), ($CreativeModeTab$TabVisibility)>, arg3: $Supplier$$Type<($CreativeModeTab$ItemDisplayParameters$$Type)>)

public "getFlags"(): $FeatureFlagSet
public "hasPermissions"(): boolean
public "getParameters"(): $CreativeModeTab$ItemDisplayParameters
public "accept"(arg0: $ItemStack$$Type, arg1: $CreativeModeTab$TabVisibility$$Type): void
public "accept"(arg0: $Supplier$$Type<($ItemLike$$Type)>, arg1: $CreativeModeTab$TabVisibility$$Type): void
public "accept"(arg0: $Supplier$$Type<($ItemLike$$Type)>): void
public "accept"(arg0: $ItemLike$$Type): void
public "accept"(arg0: $ItemLike$$Type, arg1: $CreativeModeTab$TabVisibility$$Type): void
public "accept"(arg0: $ItemStack$$Type): void
public "acceptAll"(arg0: $Collection$$Type<($ItemStack$$Type)>): void
public "acceptAll"(arg0: $Collection$$Type<($ItemStack$$Type)>, arg1: $CreativeModeTab$TabVisibility$$Type): void
get "flags"(): $FeatureFlagSet
get "parameters"(): $CreativeModeTab$ItemDisplayParameters
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeModeTabModifier$$Type = ($CreativeModeTabModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeModeTabModifier_ = $CreativeModeTabModifier$$Type;
}}
declare module "com.tterrag.registrate.builders.BlockEntityBuilder$BlockEntityFactory" {
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockEntityBuilder$BlockEntityFactory<T extends $BlockEntity> {

 "create"(arg0: $BlockEntityType$$Type<(T)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): T

(arg0: $BlockEntityType<(T)>, arg1: $BlockPos, arg2: $BlockState): T
}

export namespace $BlockEntityBuilder$BlockEntityFactory {
const probejs$$marker: never
}
export class $BlockEntityBuilder$BlockEntityFactory$$Static<T extends $BlockEntity> implements $BlockEntityBuilder$BlockEntityFactory {


 "create"(arg0: $BlockEntityType$$Type<(T)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityBuilder$BlockEntityFactory$$Type<T> = ((arg0: $BlockEntityType<(T)>, arg1: $BlockPos, arg2: $BlockState) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityBuilder$BlockEntityFactory_<T> = $BlockEntityBuilder$BlockEntityFactory$$Type<(T)>;
}}
declare module "com.tterrag.registrate.providers.loot.RegistrateLootTables" {
import {$LootTable$Builder, $LootTable$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$LootTableSubProvider, $LootTableSubProvider$$Type} from "net.minecraft.data.loot.LootTableSubProvider"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ValidationContext, $ValidationContext$$Type} from "net.minecraft.world.level.storage.loot.ValidationContext"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$WritableRegistry, $WritableRegistry$$Type} from "net.minecraft.core.WritableRegistry"

export interface $RegistrateLootTables extends $LootTableSubProvider {

 "validate"(arg0: $WritableRegistry$$Type<($LootTable$$Type)>, arg1: $ValidationContext$$Type): void
 "generate"(arg0: $BiConsumer$$Type<($ResourceKey<($LootTable)>), ($LootTable$Builder)>): void

(arg0: $BiConsumer<($ResourceKey<($LootTable)>), ($LootTable$Builder)>): void
}

export namespace $RegistrateLootTables {
const probejs$$marker: never
}
export class $RegistrateLootTables$$Static implements $RegistrateLootTables {


 "validate"(arg0: $WritableRegistry$$Type<($LootTable$$Type)>, arg1: $ValidationContext$$Type): void
 "generate"(arg0: $BiConsumer$$Type<($ResourceKey<($LootTable)>), ($LootTable$Builder)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateLootTables$$Type = ((arg0: $BiConsumer<($ResourceKey<($LootTable)>), ($LootTable$Builder)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrateLootTables_ = $RegistrateLootTables$$Type;
}}
declare module "com.tterrag.registrate.builders.EntityBuilder" {
import {$EntityRenderer, $EntityRenderer$$Type} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$EntityType$EntityFactory, $EntityType$EntityFactory$$Type} from "net.minecraft.world.entity.EntityType$EntityFactory"
import {$NonNullBiConsumer, $NonNullBiConsumer$$Type} from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import {$AbstractBuilder, $AbstractBuilder$$Type} from "com.tterrag.registrate.builders.AbstractBuilder"
import {$SpawnEggItem, $SpawnEggItem$$Type} from "net.minecraft.world.item.SpawnEggItem"
import {$RegistrateEntityLootTables, $RegistrateEntityLootTables$$Type} from "com.tterrag.registrate.providers.loot.RegistrateEntityLootTables"
import {$SpawnPlacementType, $SpawnPlacementType$$Type} from "net.minecraft.world.entity.SpawnPlacementType"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$NonNullConsumer, $NonNullConsumer$$Type} from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BuilderCallback, $BuilderCallback$$Type} from "com.tterrag.registrate.builders.BuilderCallback"
import {$NonNullFunction, $NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$RegisterSpawnPlacementsEvent$Operation, $RegisterSpawnPlacementsEvent$Operation$$Type} from "net.neoforged.neoforge.event.entity.RegisterSpawnPlacementsEvent$Operation"
import {$EntityType$Builder, $EntityType$Builder$$Type} from "net.minecraft.world.entity.EntityType$Builder"
import {$SpawnPlacements$SpawnPredicate, $SpawnPlacements$SpawnPredicate$$Type} from "net.minecraft.world.entity.SpawnPlacements$SpawnPredicate"
import {$EntityRendererProvider$Context, $EntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$MobCategory, $MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$EntityEntry, $EntityEntry$$Type} from "com.tterrag.registrate.util.entry.EntityEntry"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$AttributeSupplier$Builder, $AttributeSupplier$Builder$$Type} from "net.minecraft.world.entity.ai.attributes.AttributeSupplier$Builder"
import {$ItemBuilder, $ItemBuilder$$Type} from "com.tterrag.registrate.builders.ItemBuilder"

export class $EntityBuilder<T extends $Entity, P> extends $AbstractBuilder<($EntityType<(any)>), ($EntityType<(T)>), (P), ($EntityBuilder<(T), (P)>)> {


public "lang"(arg0: StringJS): $EntityBuilder<(T), (P)>
public "tag"(...arg0: ($TagKey$$Type<($EntityType$$Type<(any)>)>)[]): $EntityBuilder<(T), (P)>
public static "create"<T extends $Entity, P>(arg0: $AbstractRegistrate$$Type<(any)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $EntityType$EntityFactory$$Type<(T)>, arg5: $MobCategory$$Type): $EntityBuilder<(T), (P)>
public "renderer"(arg0: $NonNullSupplier$$Type<($NonNullFunction$$Type<($EntityRendererProvider$Context$$Type), ($EntityRenderer$$Type<(T)>)>)>): $EntityBuilder<(T), (P)>
public "attributes"(arg0: $Supplier$$Type<($AttributeSupplier$Builder$$Type)>): $EntityBuilder<(T), (P)>
public "register"(): $EntityEntry<(T)>
public "properties"(arg0: $NonNullConsumer$$Type<($EntityType$Builder<(T)>)>): $EntityBuilder<(T), (P)>
public "loot"(arg0: $NonNullBiConsumer$$Type<($RegistrateEntityLootTables), ($EntityType<(T)>)>): $EntityBuilder<(T), (P)>
/**
 * 
 * @deprecated
 */
public "spawnEgg"(arg0: integer, arg1: integer): $ItemBuilder<($SpawnEggItem), ($EntityBuilder<(T), (P)>)>
public "defaultLang"(): $EntityBuilder<(T), (P)>
public "spawnPlacement"(arg0: $SpawnPlacementType$$Type, arg1: $Heightmap$Types$$Type, arg2: $SpawnPlacements$SpawnPredicate$$Type<(T)>, arg3: $RegisterSpawnPlacementsEvent$Operation$$Type): $EntityBuilder<(T), (P)>
/**
 * 
 * @deprecated
 */
public "defaultSpawnEgg"(arg0: integer, arg1: integer): $EntityBuilder<(T), (P)>
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityBuilder$$Type<T, P> = ($EntityBuilder<(T), (P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityBuilder_<T, P> = $EntityBuilder$$Type<(T), (P)>;
}}
declare module "com.tterrag.registrate.providers.RegistrateDatapackProvider" {
import {$PackOutput, $PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$DatapackBuiltinEntriesProvider, $DatapackBuiltinEntriesProvider$$Type} from "net.neoforged.neoforge.common.data.DatapackBuiltinEntriesProvider"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$CachedOutput, $CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$RegistrateLookupFillerProvider, $RegistrateLookupFillerProvider$$Type} from "com.tterrag.registrate.providers.RegistrateLookupFillerProvider"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$LogicalSide, $LogicalSide$$Type} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $RegistrateDatapackProvider extends $DatapackBuiltinEntriesProvider implements $RegistrateLookupFillerProvider {
 "registries": $CompletableFuture<($HolderLookup$Provider)>

constructor(arg0: $AbstractRegistrate$$Type<(any)>, arg1: $PackOutput$$Type, arg2: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>)

public "getSide"(): $LogicalSide
public "getFilledProvider"(): $CompletableFuture<($HolderLookup$Provider)>
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(any)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture<(any)>
get "side"(): $LogicalSide
get "filledProvider"(): $CompletableFuture<($HolderLookup$Provider)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateDatapackProvider$$Type = ($RegistrateDatapackProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrateDatapackProvider_ = $RegistrateDatapackProvider$$Type;
}}
declare module "com.tterrag.registrate.providers.ProviderType$Context" {
import {$RegistrateProvider, $RegistrateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$PackOutput, $PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$Map, $Map$$Type} from "java.util.Map"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$ExistingFileHelper, $ExistingFileHelper$$Type} from "net.neoforged.neoforge.common.data.ExistingFileHelper"
import {$GatherDataEvent, $GatherDataEvent$$Type} from "net.neoforged.neoforge.data.event.GatherDataEvent"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ProviderType, $ProviderType$$Type} from "com.tterrag.registrate.providers.ProviderType"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ProviderType$Context<T extends $RegistrateProvider> extends $Record {

constructor(type: $ProviderType$$Type<(T)>, parent: $AbstractRegistrate$$Type<(any)>, event: $GatherDataEvent$$Type, existing: $Map$$Type<($ProviderType$$Type<(any)>), ($RegistrateProvider$$Type)>, output: $PackOutput$$Type, fileHelper: $ExistingFileHelper$$Type, provider: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>)

public "existing"(): $Map<($ProviderType<(any)>), ($RegistrateProvider)>
public "output"(): $PackOutput
public "parent"(): $AbstractRegistrate<(any)>
public "get"<R extends $RegistrateProvider>(arg0: $ProviderType$$Type<(R)>): R
public "type"(): $ProviderType<(T)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "provider"(): $CompletableFuture<($HolderLookup$Provider)>
/**
 * 
 * @deprecated
 */
public "event"(): $GatherDataEvent
public "fileHelper"(): $ExistingFileHelper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProviderType$Context$$Type<T> = ({"output"?: $PackOutput$$Type, "parent"?: $AbstractRegistrate$$Type<(never)>, "fileHelper"?: $ExistingFileHelper$$Type, "type"?: $ProviderType$$Type<(any)>, "event"?: $GatherDataEvent$$Type, "existing"?: $Map$$Type<($ProviderType$$Type<(never)>), ($RegistrateProvider$$Type)>, "provider"?: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>}) | ([output?: $PackOutput$$Type, parent?: $AbstractRegistrate$$Type<(never)>, fileHelper?: $ExistingFileHelper$$Type, type?: $ProviderType$$Type<(any)>, event?: $GatherDataEvent$$Type, existing?: $Map$$Type<($ProviderType$$Type<(never)>), ($RegistrateProvider$$Type)>, provider?: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProviderType$Context_<T> = $ProviderType$Context$$Type<(T)>;
}}
declare module "com.tterrag.registrate.builders.MenuBuilder$MenuFactory" {
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $MenuBuilder$MenuFactory<T extends $AbstractContainerMenu> {

 "create"(arg0: $MenuType$$Type<(T)>, arg1: integer, arg2: $Inventory$$Type): T

(arg0: $MenuType<(T)>, arg1: integer, arg2: $Inventory): T
}

export namespace $MenuBuilder$MenuFactory {
const probejs$$marker: never
}
export class $MenuBuilder$MenuFactory$$Static<T extends $AbstractContainerMenu> implements $MenuBuilder$MenuFactory {


 "create"(arg0: $MenuType$$Type<(T)>, arg1: integer, arg2: $Inventory$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuBuilder$MenuFactory$$Type<T> = ((arg0: $MenuType<(T)>, arg1: integer, arg2: $Inventory) => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuBuilder$MenuFactory_<T> = $MenuBuilder$MenuFactory$$Type<(T)>;
}}
declare module "com.tterrag.registrate.providers.loot.RegistrateLootTableProvider$LootType" {
import {$RegistrateBlockLootTables, $RegistrateBlockLootTables$$Type} from "com.tterrag.registrate.providers.loot.RegistrateBlockLootTables"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$RegistrateEntityLootTables, $RegistrateEntityLootTables$$Type} from "com.tterrag.registrate.providers.loot.RegistrateEntityLootTables"
import {$LootContextParamSet, $LootContextParamSet$$Type} from "net.minecraft.world.level.storage.loot.parameters.LootContextParamSet"
import {$RegistrateLootTables, $RegistrateLootTables$$Type} from "com.tterrag.registrate.providers.loot.RegistrateLootTables"
import {$TriFunction, $TriFunction$$Type} from "org.apache.commons.lang3.function.TriFunction"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $RegistrateLootTableProvider$LootType<T extends $RegistrateLootTables> {

 "getLootCreator"(arg0: $HolderLookup$Provider$$Type, arg1: $AbstractRegistrate$$Type<(any)>, arg2: $Consumer$$Type<(T)>): T
 "getLootSet"(): $LootContextParamSet
get "lootSet"(): $LootContextParamSet
}

export namespace $RegistrateLootTableProvider$LootType {
const ENTITY: $RegistrateLootTableProvider$LootType<($RegistrateEntityLootTables)>
const BLOCK: $RegistrateLootTableProvider$LootType<($RegistrateBlockLootTables)>
function register<T extends $RegistrateLootTables>(arg0: StringJS, arg1: $LootContextParamSet$$Type, arg2: $TriFunction$$Type<($HolderLookup$Provider), ($AbstractRegistrate), ($Consumer<(T)>), (T)>): $RegistrateLootTableProvider$LootType<(T)>
const probejs$$marker: never
}
export class $RegistrateLootTableProvider$LootType$$Static<T extends $RegistrateLootTables> implements $RegistrateLootTableProvider$LootType {
static readonly "ENTITY": $RegistrateLootTableProvider$LootType<($RegistrateEntityLootTables)>
static readonly "BLOCK": $RegistrateLootTableProvider$LootType<($RegistrateBlockLootTables)>


static "register"<T extends $RegistrateLootTables>(arg0: StringJS, arg1: $LootContextParamSet$$Type, arg2: $TriFunction$$Type<($HolderLookup$Provider), ($AbstractRegistrate), ($Consumer<(T)>), (T)>): $RegistrateLootTableProvider$LootType<(T)>
 "getLootCreator"(arg0: $HolderLookup$Provider$$Type, arg1: $AbstractRegistrate$$Type<(any)>, arg2: $Consumer$$Type<(T)>): T
 "getLootSet"(): $LootContextParamSet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateLootTableProvider$LootType$$Type<T> = ($RegistrateLootTableProvider$LootType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrateLootTableProvider$LootType_<T> = $RegistrateLootTableProvider$LootType$$Type<(T)>;
}}
declare module "com.tterrag.registrate.providers.RegistrateTagsProvider$IntrinsicImpl" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$TagsProvider$TagLookup, $TagsProvider$TagLookup$$Type} from "net.minecraft.data.tags.TagsProvider$TagLookup"
import {$RegistrateTagsProvider, $RegistrateTagsProvider$$Type} from "com.tterrag.registrate.providers.RegistrateTagsProvider"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$CachedOutput, $CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$IntrinsicHolderTagsProvider, $IntrinsicHolderTagsProvider$$Type} from "net.minecraft.data.tags.IntrinsicHolderTagsProvider"
import {$LogicalSide, $LogicalSide$$Type} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PackOutput, $PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TagBuilder, $TagBuilder$$Type} from "net.minecraft.tags.TagBuilder"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ExistingFileHelper, $ExistingFileHelper$$Type} from "net.neoforged.neoforge.common.data.ExistingFileHelper"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$ProviderType, $ProviderType$$Type} from "com.tterrag.registrate.providers.ProviderType"
import {$IntrinsicHolderTagsProvider$IntrinsicTagAppender, $IntrinsicHolderTagsProvider$IntrinsicTagAppender$$Type} from "net.minecraft.data.tags.IntrinsicHolderTagsProvider$IntrinsicTagAppender"

export class $RegistrateTagsProvider$IntrinsicImpl<T> extends $IntrinsicHolderTagsProvider<(T)> implements $RegistrateTagsProvider<(T)> {
readonly "builders": $Map<($ResourceLocation), ($TagBuilder)>

constructor(arg0: $AbstractRegistrate$$Type<(any)>, arg1: $ProviderType$$Type<($RegistrateTagsProvider$IntrinsicImpl$$Type<(T)>)>, arg2: StringJS, arg3: $PackOutput$$Type, arg4: $ResourceKey$$Type<($Registry<(T)>)>, arg5: $CompletableFuture$$Type<($HolderLookup$Provider$$Type)>, arg6: $Function$$Type<(T), ($ResourceKey$$Type<(T)>)>, arg7: $ExistingFileHelper$$Type)

public "getName"(): StringJS
public "addTag"(arg0: $TagKey$$Type<(T)>): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<(T)>
public "getSide"(): $LogicalSide
public "registry"(): $ResourceKey<($Registry<(T)>)>
public "getFilledProvider"(): $CompletableFuture<($HolderLookup$Provider)>
public "contentsGetter"(): $CompletableFuture<($TagsProvider$TagLookup<(T)>)>
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(any)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture<(any)>
get "name"(): StringJS
get "side"(): $LogicalSide
get "filledProvider"(): $CompletableFuture<($HolderLookup$Provider)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateTagsProvider$IntrinsicImpl$$Type<T> = ($RegistrateTagsProvider$IntrinsicImpl<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrateTagsProvider$IntrinsicImpl_<T> = $RegistrateTagsProvider$IntrinsicImpl$$Type<(T)>;
}}
declare module "com.tterrag.registrate.util.entry.RegistryEntry" {
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"

export class $RegistryEntry<R, S extends R> extends $DeferredHolder<(R), (S)> implements $NonNullSupplier<(S)> {

constructor(arg0: $AbstractRegistrate$$Type<(any)>, arg1: $DeferredHolder$$Type<(R), (S)>)

public "is"<X>(arg0: X): boolean
public "filter"(arg0: $Predicate$$Type<(R)>): $Optional<($RegistryEntry<(R), (S)>)>
public "getSibling"<X, Y extends X>(arg0: $ResourceKey$$Type<($Registry<(X)>)>): $RegistryEntry<(X), (Y)>
public "getSibling"<X, Y extends X>(arg0: $Registry$$Type<(X)>): $RegistryEntry<(X), (Y)>
public "lazy"(): $NonNullSupplier<(S)>
public static "lazy"<T>(arg0: $Supplier$$Type<(S)>): $NonNullSupplier<(S)>
public "get"(): S
public static "of"<T>(arg0: $Supplier$$Type<(S)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(S)>
public static "of"<T>(arg0: $Supplier$$Type<(S)>): $NonNullSupplier<(S)>
public static "direct"<T>(arg0: T): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryEntry$$Type<R, S> = ($RegistryEntry<(R), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryEntry_<R, S> = $RegistryEntry$$Type<(R), (S)>;
}}
declare module "com.tterrag.registrate.util.entry.ItemProviderEntry" {
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$RegistryEntry, $RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $ItemProviderEntry<R extends $ItemLike, T extends R> extends $RegistryEntry<(R), (T)> implements $ItemLike {

constructor(arg0: $AbstractRegistrate$$Type<(any)>, arg1: $DeferredHolder$$Type<(R), (T)>)

public "is"(arg0: $Item$$Type): boolean
public "isIn"(arg0: $ItemStack$$Type): boolean
public "asItem"(): $Item
public "asStack"(): $ItemStack
public "asStack"(arg0: integer): $ItemStack
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public "get"(): T
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "direct"<T>(arg0: T): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemProviderEntry$$Type<R, T> = ($ItemProviderEntry<(R), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemProviderEntry_<R, T> = $ItemProviderEntry$$Type<(R), (T)>;
}}
declare module "com.tterrag.registrate.builders.ItemBuilder" {
import {$RegistryEntry, $RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$RegistrateItemModelProvider, $RegistrateItemModelProvider$$Type} from "com.tterrag.registrate.providers.RegistrateItemModelProvider"
import {$NonNullUnaryOperator, $NonNullUnaryOperator$$Type} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$CreativeModeTabModifier, $CreativeModeTabModifier$$Type} from "com.tterrag.registrate.util.CreativeModeTabModifier"
import {$NonNullBiConsumer, $NonNullBiConsumer$$Type} from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import {$RegistrateRecipeProvider, $RegistrateRecipeProvider$$Type} from "com.tterrag.registrate.providers.RegistrateRecipeProvider"
import {$AbstractBuilder, $AbstractBuilder$$Type} from "com.tterrag.registrate.builders.AbstractBuilder"
import {$DataGenContext, $DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$IClientItemExtensions, $IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$BuilderCallback, $BuilderCallback$$Type} from "com.tterrag.registrate.builders.BuilderCallback"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$NonNullFunction, $NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ItemColor, $ItemColor$$Type} from "net.minecraft.client.color.item.ItemColor"

export class $ItemBuilder<T extends $Item, P> extends $AbstractBuilder<($Item), (T), (P), ($ItemBuilder<(T), (P)>)> {


public "lang"(arg0: StringJS): $ItemBuilder<(T), (P)>
public "tag"(...arg0: ($TagKey$$Type<($Item$$Type)>)[]): $ItemBuilder<(T), (P)>
public "recipe"(arg0: $NonNullBiConsumer$$Type<($DataGenContext<($Item), (T)>), ($RegistrateRecipeProvider)>): $ItemBuilder<(T), (P)>
public "color"(arg0: $NonNullSupplier$$Type<($Supplier$$Type<($ItemColor$$Type)>)>): $ItemBuilder<(T), (P)>
public static "create"<T extends $Item, P>(arg0: $AbstractRegistrate$$Type<(any)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $NonNullFunction$$Type<($Item$Properties), (T)>): $ItemBuilder<(T), (P)>
public "model"(arg0: $NonNullBiConsumer$$Type<($DataGenContext<($Item), (T)>), ($RegistrateItemModelProvider)>): $ItemBuilder<(T), (P)>
public "register"(): $RegistryEntry<(any), (any)>
public "properties"(arg0: $NonNullUnaryOperator$$Type<($Item$Properties)>): $ItemBuilder<(T), (P)>
/**
 * 
 * @deprecated
 */
public "tab"(arg0: $ResourceKey$$Type<($CreativeModeTab)>, arg1: $Consumer$$Type<($CreativeModeTabModifier)>): $ItemBuilder<(T), (P)>
public "tab"(arg0: $ResourceKey$$Type<($CreativeModeTab)>, arg1: $NonNullBiConsumer$$Type<($DataGenContext<($Item), (T)>), ($CreativeModeTabModifier)>): $ItemBuilder<(T), (P)>
public "tab"(arg0: $ResourceKey$$Type<($CreativeModeTab)>): $ItemBuilder<(T), (P)>
public "burnTime"(arg0: integer): $ItemBuilder<(T), (P)>
public "defaultLang"(): $ItemBuilder<(T), (P)>
public "defaultModel"(): $ItemBuilder<(T), (P)>
public "removeTab"(arg0: $ResourceKey$$Type<($CreativeModeTab)>): $ItemBuilder<(T), (P)>
public "compostable"(arg0: float): $ItemBuilder<(T), (P)>
public "clientExtension"(arg0: $NonNullSupplier$$Type<($Supplier$$Type<($IClientItemExtensions$$Type)>)>): $ItemBuilder<(T), (P)>
/**
 * 
 * @deprecated
 */
public "clientExtension"(arg0: $Function$$Type<(T), ($NonNullSupplier$$Type<($Supplier$$Type<($IClientItemExtensions$$Type)>)>)>): $ItemBuilder<(T), (P)>
public "initialProperties"(arg0: $NonNullSupplier$$Type<($Item$Properties$$Type)>): $ItemBuilder<(T), (P)>
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBuilder$$Type<T, P> = ($ItemBuilder<(T), (P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBuilder_<T, P> = $ItemBuilder$$Type<(T), (P)>;
}}
declare module "com.tterrag.registrate.builders.MenuBuilder" {
import {$MenuBuilder$MenuFactory, $MenuBuilder$MenuFactory$$Type} from "com.tterrag.registrate.builders.MenuBuilder$MenuFactory"
import {$RegistryEntry, $RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$AbstractBuilder, $AbstractBuilder$$Type} from "com.tterrag.registrate.builders.AbstractBuilder"
import {$MenuAccess, $MenuAccess$$Type} from "net.minecraft.client.gui.screens.inventory.MenuAccess"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$MenuBuilder$ScreenFactory, $MenuBuilder$ScreenFactory$$Type} from "com.tterrag.registrate.builders.MenuBuilder$ScreenFactory"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$BuilderCallback, $BuilderCallback$$Type} from "com.tterrag.registrate.builders.BuilderCallback"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$MenuBuilder$ForgeMenuFactory, $MenuBuilder$ForgeMenuFactory$$Type} from "com.tterrag.registrate.builders.MenuBuilder$ForgeMenuFactory"

export class $MenuBuilder<T extends $AbstractContainerMenu, S extends ($Screen) & ($MenuAccess<(T)>), P> extends $AbstractBuilder<($MenuType<(any)>), ($MenuType<(T)>), (P), ($MenuBuilder<(T), (S), (P)>)> {

constructor(arg0: $AbstractRegistrate$$Type<(any)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $MenuBuilder$MenuFactory$$Type<(T)>, arg5: $NonNullSupplier$$Type<($MenuBuilder$ScreenFactory$$Type<(T), (S)>)>)
constructor(arg0: $AbstractRegistrate$$Type<(any)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $MenuBuilder$ForgeMenuFactory$$Type<(T)>, arg5: $NonNullSupplier$$Type<($MenuBuilder$ScreenFactory$$Type<(T), (S)>)>)

public "register"(): $RegistryEntry<(any), (any)>
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuBuilder$$Type<T, S, P> = ($MenuBuilder<(T), (S), (P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MenuBuilder_<T, S, P> = $MenuBuilder$$Type<(T), (S), (P)>;
}}
declare module "com.tterrag.registrate.util.nullness.NonNullSupplier" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"

export interface $NonNullSupplier<T> extends $Supplier<(T)> {

 "lazy"(): $NonNullSupplier<(T)>
 "get"(): T

(): T
}

export namespace $NonNullSupplier {
function lazy<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
function of<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
function of<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
const probejs$$marker: never
}
export class $NonNullSupplier$$Static<T> implements $NonNullSupplier {


 "lazy"(): $NonNullSupplier<(T)>
static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
 "get"(): T
static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullSupplier$$Type<T> = (() => T);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonNullSupplier_<T> = $NonNullSupplier$$Type<(T)>;
}}
declare module "com.tterrag.registrate.builders.Builder" {
import {$RegistrateProvider, $RegistrateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$RegistryEntry, $RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$NonNullBiConsumer, $NonNullBiConsumer$$Type} from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import {$DataGenContext, $DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$NonNullConsumer, $NonNullConsumer$$Type} from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$DataMapType, $DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$NonNullFunction, $NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ProviderType, $ProviderType$$Type} from "com.tterrag.registrate.providers.ProviderType"

export interface $Builder<R, T extends R, P, S extends $Builder<(R), (T), (P), (S)>> extends $NonNullSupplier<($RegistryEntry<(R), (T)>)> {

 "getEntry"(): T
 "getOwner"(): $AbstractRegistrate<(any)>
 "setData"<D extends $RegistrateProvider>(arg0: $ProviderType$$Type<(D)>, arg1: $NonNullBiConsumer$$Type<($DataGenContext<(R), (T)>), (D)>): S
 "build"(): P
 "getName"(): StringJS
 "get"(): $RegistryEntry<(R), (T)>
 "transform"<R2, T2 extends R2, P2, S2 extends $Builder<(R2), (T2), (P2), (S2)>>(arg0: $NonNullFunction$$Type<(S), (S2)>): S2
 "register"(): $RegistryEntry<(R), (T)>
 "getParent"(): P
 "dataMap"<D>(arg0: $DataMapType$$Type<(R), (D)>, arg1: D): S
 "asSupplier"(): $NonNullSupplier<(T)>
 "addMiscData"<D extends $RegistrateProvider>(arg0: $ProviderType$$Type<(D)>, arg1: $NonNullConsumer$$Type<(D)>): S
 "getRegistryKey"(): $ResourceKey<($Registry<(R)>)>
 "onRegister"(arg0: $NonNullConsumer$$Type<(T)>): S
 "onRegisterAfter"<OR>(arg0: $ResourceKey$$Type<($Registry<(OR)>)>, arg1: $NonNullConsumer$$Type<(T)>): S
 "lazy"(): $NonNullSupplier<($RegistryEntry<(R), (T)>)>
get "entry"(): T
get "owner"(): $AbstractRegistrate<(any)>
get "name"(): StringJS
get "parent"(): P
get "registryKey"(): $ResourceKey<($Registry<(R)>)>
}

export namespace $Builder {
function lazy<T>(arg0: $Supplier$$Type<($RegistryEntry$$Type<(R), (T)>)>): $NonNullSupplier<($RegistryEntry<(R), (T)>)>
function of<T>(arg0: $Supplier$$Type<($RegistryEntry$$Type<(R), (T)>)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<($RegistryEntry<(R), (T)>)>
function of<T>(arg0: $Supplier$$Type<($RegistryEntry$$Type<(R), (T)>)>): $NonNullSupplier<($RegistryEntry<(R), (T)>)>
const probejs$$marker: never
}
export class $Builder$$Static<R, T extends R, P, S extends $Builder<(R), (T), (P), (S)>> implements $Builder {


 "getEntry"(): T
 "getOwner"(): $AbstractRegistrate<(any)>
 "setData"<D extends $RegistrateProvider>(arg0: $ProviderType$$Type<(D)>, arg1: $NonNullBiConsumer$$Type<($DataGenContext<(R), (T)>), (D)>): S
 "build"(): P
 "getName"(): StringJS
 "get"(): $RegistryEntry<(R), (T)>
 "transform"<R2, T2 extends R2, P2, S2 extends $Builder<(R2), (T2), (P2), (S2)>>(arg0: $NonNullFunction$$Type<(S), (S2)>): S2
 "register"(): $RegistryEntry<(R), (T)>
 "getParent"(): P
 "dataMap"<D>(arg0: $DataMapType$$Type<(R), (D)>, arg1: D): S
 "asSupplier"(): $NonNullSupplier<(T)>
 "addMiscData"<D extends $RegistrateProvider>(arg0: $ProviderType$$Type<(D)>, arg1: $NonNullConsumer$$Type<(D)>): S
 "getRegistryKey"(): $ResourceKey<($Registry<(R)>)>
 "onRegister"(arg0: $NonNullConsumer$$Type<(T)>): S
 "onRegisterAfter"<OR>(arg0: $ResourceKey$$Type<($Registry<(OR)>)>, arg1: $NonNullConsumer$$Type<(T)>): S
 "lazy"(): $NonNullSupplier<($RegistryEntry<(R), (T)>)>
static "lazy"<T>(arg0: $Supplier$$Type<($RegistryEntry$$Type<(R), (T)>)>): $NonNullSupplier<($RegistryEntry<(R), (T)>)>
static "of"<T>(arg0: $Supplier$$Type<($RegistryEntry$$Type<(R), (T)>)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<($RegistryEntry<(R), (T)>)>
static "of"<T>(arg0: $Supplier$$Type<($RegistryEntry$$Type<(R), (T)>)>): $NonNullSupplier<($RegistryEntry<(R), (T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Builder$$Type<R, T, P, S> = ($Builder<(R), (T), (P), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Builder_<R, T, P, S> = $Builder$$Type<(R), (T), (P), (S)>;
}}
declare module "com.tterrag.registrate.providers.DataProviderInitializer" {
import {$RegistrySetBuilder$RegistryBootstrap, $RegistrySetBuilder$RegistryBootstrap$$Type} from "net.minecraft.core.RegistrySetBuilder$RegistryBootstrap"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$RegistrateLookupFillerProvider, $RegistrateLookupFillerProvider$$Type} from "com.tterrag.registrate.providers.RegistrateLookupFillerProvider"
import {$ProviderType, $ProviderType$$Type} from "com.tterrag.registrate.providers.ProviderType"

export class $DataProviderInitializer {

constructor()

public "add"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>, arg1: $RegistrySetBuilder$RegistryBootstrap$$Type<(T)>): void
public "addDependency"(arg0: $ProviderType$$Type<(any)>, arg1: $ProviderType$$Type<($RegistrateLookupFillerProvider$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataProviderInitializer$$Type = ($DataProviderInitializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataProviderInitializer_ = $DataProviderInitializer$$Type;
}}
declare module "com.tterrag.registrate.util.entry.EntityEntry" {
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$RegistryEntry, $RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $EntityEntry<T extends $Entity> extends $RegistryEntry<($EntityType<(any)>), ($EntityType<(T)>)> {

constructor(arg0: $AbstractRegistrate$$Type<(any)>, arg1: $DeferredHolder$$Type<($EntityType$$Type<(any)>), ($EntityType$$Type<(T)>)>)

public "is"(arg0: $Entity$$Type): boolean
public "create"(arg0: $Level$$Type): T
public static "cast"<T extends $Entity>(arg0: $RegistryEntry$$Type<($EntityType$$Type<(any)>), ($EntityType$$Type<(T)>)>): $EntityEntry<(T)>
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public "get"(): T
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "direct"<T>(arg0: T): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityEntry$$Type<T> = ($EntityEntry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityEntry_<T> = $EntityEntry$$Type<(T)>;
}}
declare module "com.tterrag.registrate.util.nullness.NonNullBiFunction" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Function, $Function$$Type} from "java.util.function.Function"

export interface $NonNullBiFunction<T, U, R> extends $BiFunction<(T), (U), (R)> {

 "apply"(arg0: T, arg1: U): R
 "andThen"<V>(arg0: $Function$$Type<(R), (V)>): $BiFunction<(T), (U), (V)>

(arg0: T, arg1: U): R
}

export namespace $NonNullBiFunction {
const probejs$$marker: never
}
export class $NonNullBiFunction$$Static<T, U, R> implements $NonNullBiFunction {


 "apply"(arg0: T, arg1: U): R
 "andThen"<V>(arg0: $Function$$Type<(R), (V)>): $BiFunction<(T), (U), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullBiFunction$$Type<T, U, R> = ((arg0: T, arg1: U) => R);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonNullBiFunction_<T, U, R> = $NonNullBiFunction$$Type<(T), (U), (R)>;
}}
declare module "com.tterrag.registrate.builders.FluidBuilder" {
import {$RegistryEntry, $RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$FluidType$Properties, $FluidType$Properties$$Type} from "net.neoforged.neoforge.fluids.FluidType$Properties"
import {$AbstractBuilder, $AbstractBuilder$$Type} from "com.tterrag.registrate.builders.AbstractBuilder"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$BucketItem, $BucketItem$$Type} from "net.minecraft.world.item.BucketItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$NonNullConsumer, $NonNullConsumer$$Type} from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$BuilderCallback, $BuilderCallback$$Type} from "com.tterrag.registrate.builders.BuilderCallback"
import {$NonNullFunction, $NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$BaseFlowingFluid$Properties, $BaseFlowingFluid$Properties$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Properties"
import {$BlockBuilder, $BlockBuilder$$Type} from "com.tterrag.registrate.builders.BlockBuilder"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$NonNullBiFunction, $NonNullBiFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullBiFunction"
import {$FluidType, $FluidType$$Type} from "net.neoforged.neoforge.fluids.FluidType"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$FluidBuilder$FluidTypeFactory, $FluidBuilder$FluidTypeFactory$$Type} from "com.tterrag.registrate.builders.FluidBuilder$FluidTypeFactory"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ItemBuilder, $ItemBuilder$$Type} from "com.tterrag.registrate.builders.ItemBuilder"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$LiquidBlock, $LiquidBlock$$Type} from "net.minecraft.world.level.block.LiquidBlock"
import {$BaseFlowingFluid, $BaseFlowingFluid$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid"
import {$BaseFlowingFluid$Flowing, $BaseFlowingFluid$Flowing$$Type} from "net.neoforged.neoforge.fluids.BaseFlowingFluid$Flowing"

export class $FluidBuilder<T extends $BaseFlowingFluid, P> extends $AbstractBuilder<($Fluid), (T), (P), ($FluidBuilder<(T), (P)>)> {

constructor(arg0: $AbstractRegistrate$$Type<(any)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $ResourceLocation$$Type, arg5: $ResourceLocation$$Type, arg6: $FluidBuilder$FluidTypeFactory$$Type, arg7: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>)
constructor(arg0: $AbstractRegistrate$$Type<(any)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $ResourceLocation$$Type, arg5: $ResourceLocation$$Type, arg6: $NonNullSupplier$$Type<($FluidType$$Type)>, arg7: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>)

public "block"<B extends $LiquidBlock>(arg0: $NonNullBiFunction$$Type<(T), ($BlockBehaviour$Properties), (B)>): $BlockBuilder<(B), ($FluidBuilder<(T), (P)>)>
public "block"(): $BlockBuilder<($LiquidBlock), ($FluidBuilder<(T), (P)>)>
public "lang"(arg0: StringJS): $FluidBuilder<(T), (P)>
public "tag"(...arg0: ($TagKey$$Type<($Fluid$$Type)>)[]): $FluidBuilder<(T), (P)>
public static "create"<P>(arg0: $AbstractRegistrate$$Type<(any)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $ResourceLocation$$Type, arg5: $ResourceLocation$$Type, arg6: $NonNullSupplier$$Type<($FluidType$$Type)>): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public static "create"<P>(arg0: $AbstractRegistrate$$Type<(any)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $ResourceLocation$$Type, arg5: $ResourceLocation$$Type, arg6: $FluidBuilder$FluidTypeFactory$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public static "create"<P>(arg0: $AbstractRegistrate$$Type<(any)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $ResourceLocation$$Type, arg5: $ResourceLocation$$Type): $FluidBuilder<($BaseFlowingFluid$Flowing), (P)>
public static "create"<T extends $BaseFlowingFluid, P>(arg0: $AbstractRegistrate$$Type<(any)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $ResourceLocation$$Type, arg5: $ResourceLocation$$Type, arg6: $FluidBuilder$FluidTypeFactory$$Type, arg7: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (P)>
public static "create"<T extends $BaseFlowingFluid, P>(arg0: $AbstractRegistrate$$Type<(any)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $ResourceLocation$$Type, arg5: $ResourceLocation$$Type, arg6: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (P)>
public static "create"<T extends $BaseFlowingFluid, P>(arg0: $AbstractRegistrate$$Type<(any)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $ResourceLocation$$Type, arg5: $ResourceLocation$$Type, arg6: $NonNullSupplier$$Type<($FluidType$$Type)>, arg7: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), (T)>): $FluidBuilder<(T), (P)>
public "register"(): $RegistryEntry<(any), (any)>
public "source"(arg0: $NonNullFunction$$Type<($BaseFlowingFluid$Properties), ($BaseFlowingFluid$$Type)>): $FluidBuilder<(T), (P)>
public "properties"(arg0: $NonNullConsumer$$Type<($FluidType$Properties)>): $FluidBuilder<(T), (P)>
public "bucket"<I extends $BucketItem>(arg0: $NonNullBiFunction$$Type<($BaseFlowingFluid), ($Item$Properties), (I)>): $ItemBuilder<(I), ($FluidBuilder<(T), (P)>)>
public "bucket"(): $ItemBuilder<($BucketItem), ($FluidBuilder<(T), (P)>)>
public "defaultLang"(): $FluidBuilder<(T), (P)>
public "defaultSource"(): $FluidBuilder<(T), (P)>
public "defaultBlock"(): $FluidBuilder<(T), (P)>
public "defaultBucket"(): $FluidBuilder<(T), (P)>
public "noBlock"(): $FluidBuilder<(T), (P)>
public "noBucket"(): $FluidBuilder<(T), (P)>
public "renderType"(arg0: $Supplier$$Type<($Supplier$$Type<($RenderType$$Type)>)>): $FluidBuilder<(T), (P)>
public "removeTag"(...arg0: ($TagKey$$Type<($Fluid$$Type)>)[]): $FluidBuilder<(T), (P)>
public "fluidProperties"(arg0: $NonNullConsumer$$Type<($BaseFlowingFluid$Properties)>): $FluidBuilder<(T), (P)>
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidBuilder$$Type<T, P> = ($FluidBuilder<(T), (P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidBuilder_<T, P> = $FluidBuilder$$Type<(T), (P)>;
}}
declare module "com.tterrag.registrate.builders.AbstractBuilder" {
import {$RegistryEntry, $RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$RegistrateProvider, $RegistrateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$RegistrateTagsProvider, $RegistrateTagsProvider$$Type} from "com.tterrag.registrate.providers.RegistrateTagsProvider"
import {$NonNullBiConsumer, $NonNullBiConsumer$$Type} from "com.tterrag.registrate.util.nullness.NonNullBiConsumer"
import {$TagsProvider, $TagsProvider$$Type} from "net.minecraft.data.tags.TagsProvider"
import {$DataGenContext, $DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$Builder, $Builder$$Type} from "com.tterrag.registrate.builders.Builder"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$NonNullConsumer, $NonNullConsumer$$Type} from "com.tterrag.registrate.util.nullness.NonNullConsumer"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BuilderCallback, $BuilderCallback$$Type} from "com.tterrag.registrate.builders.BuilderCallback"
import {$DataMapType, $DataMapType$$Type} from "net.neoforged.neoforge.registries.datamaps.DataMapType"
import {$NonNullFunction, $NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ProviderType, $ProviderType$$Type} from "com.tterrag.registrate.providers.ProviderType"

export class $AbstractBuilder<R, T extends R, P, S extends $AbstractBuilder<(R), (T), (P), (S)>> implements $Builder<(R), (T), (P), (S)> {

constructor(arg0: $AbstractRegistrate$$Type<(any)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $ResourceKey$$Type<($Registry<(R)>)>)

public "getOwner"(): $AbstractRegistrate<(any)>
public "lang"(arg0: $NonNullFunction$$Type<(T), (StringJS)>, arg1: StringJS): S
public "lang"(arg0: $NonNullFunction$$Type<(T), (StringJS)>): S
public "tag"<TP extends ($TagsProvider<(R)>) & ($RegistrateTagsProvider<(R)>)>(arg0: $ProviderType$$Type<(TP)>, ...arg1: ($TagKey$$Type<(R)>)[]): S
public "getName"(): StringJS
public "register"(): $RegistryEntry<(R), (T)>
public "getParent"(): P
public "asSupplier"(): $NonNullSupplier<(T)>
public "asOptional"(): S
public "getRegistryKey"(): $ResourceKey<($Registry<(R)>)>
public "removeTag"<TP extends ($TagsProvider<(R)>) & ($RegistrateTagsProvider<(R)>)>(arg0: $ProviderType$$Type<(TP)>, ...arg1: ($TagKey$$Type<(R)>)[]): S
public "getEntry"(): T
public "setData"<D extends $RegistrateProvider>(arg0: $ProviderType$$Type<(D)>, arg1: $NonNullBiConsumer$$Type<($DataGenContext<(R), (T)>), (D)>): S
public "build"(): P
public "get"(): $RegistryEntry<(R), (T)>
public "transform"<R2, T2 extends R2, P2, S2 extends $Builder<(R2), (T2), (P2), (S2)>>(arg0: $NonNullFunction$$Type<(S), (S2)>): S2
public "dataMap"<D>(arg0: $DataMapType$$Type<(R), (D)>, arg1: D): S
public "addMiscData"<D extends $RegistrateProvider>(arg0: $ProviderType$$Type<(D)>, arg1: $NonNullConsumer$$Type<(D)>): S
public "onRegister"(arg0: $NonNullConsumer$$Type<(T)>): S
public "onRegisterAfter"<OR>(arg0: $ResourceKey$$Type<($Registry<(OR)>)>, arg1: $NonNullConsumer$$Type<(T)>): S
public "lazy"(): $NonNullSupplier<($RegistryEntry<(R), (T)>)>
public static "lazy"<T>(arg0: $Supplier$$Type<($RegistryEntry$$Type<(R), (T)>)>): $NonNullSupplier<($RegistryEntry<(R), (T)>)>
public static "of"<T>(arg0: $Supplier$$Type<($RegistryEntry$$Type<(R), (T)>)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<($RegistryEntry<(R), (T)>)>
public static "of"<T>(arg0: $Supplier$$Type<($RegistryEntry$$Type<(R), (T)>)>): $NonNullSupplier<($RegistryEntry<(R), (T)>)>
get "owner"(): $AbstractRegistrate<(any)>
get "name"(): StringJS
get "parent"(): P
get "registryKey"(): $ResourceKey<($Registry<(R)>)>
get "entry"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBuilder$$Type<R, T, P, S> = ($AbstractBuilder<(R), (T), (P), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBuilder_<R, T, P, S> = $AbstractBuilder$$Type<(R), (T), (P), (S)>;
}}
declare module "com.tterrag.registrate.providers.DataGenContext" {
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Builder, $Builder$$Type} from "com.tterrag.registrate.builders.Builder"

export class $DataGenContext<R, E extends R> implements $NonNullSupplier<(E)> {

constructor(arg0: $NonNullSupplier$$Type<(E)>, arg1: StringJS, arg2: $ResourceLocation$$Type)

public "getEntry"(): E
public "lazy"(): $NonNullSupplier<(E)>
public "getName"(): StringJS
public "get"(): E
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "from"<R, E extends R>(arg0: $Builder$$Type<(R), (E), (any), (any)>): $DataGenContext<(R), (E)>
/**
 * 
 * @deprecated
 */
public static "from"<R, E extends R>(arg0: $Builder$$Type<(R), (E), (any), (any)>, arg1: $ResourceKey$$Type<($Registry<(R)>)>): $DataGenContext<(R), (E)>
public "getId"(): $ResourceLocation
public static "lazy"<T>(arg0: $Supplier$$Type<(E)>): $NonNullSupplier<(E)>
public static "of"<T>(arg0: $Supplier$$Type<(E)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(E)>
public static "of"<T>(arg0: $Supplier$$Type<(E)>): $NonNullSupplier<(E)>
get "entry"(): E
get "name"(): StringJS
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataGenContext$$Type<R, E> = ($DataGenContext<(R), (E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataGenContext_<R, E> = $DataGenContext$$Type<(R), (E)>;
}}
declare module "com.tterrag.registrate.builders.BlockEntityBuilder" {
import {$BlockEntityEntry, $BlockEntityEntry$$Type} from "com.tterrag.registrate.util.entry.BlockEntityEntry"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$AbstractBuilder, $AbstractBuilder$$Type} from "com.tterrag.registrate.builders.AbstractBuilder"
import {$BlockEntityBuilder$BlockEntityFactory, $BlockEntityBuilder$BlockEntityFactory$$Type} from "com.tterrag.registrate.builders.BlockEntityBuilder$BlockEntityFactory"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$BuilderCallback, $BuilderCallback$$Type} from "com.tterrag.registrate.builders.BuilderCallback"
import {$BlockEntityRenderer, $BlockEntityRenderer$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderer"
import {$NonNullFunction, $NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$BlockEntityRendererProvider$Context, $BlockEntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider$Context"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $BlockEntityBuilder<T extends $BlockEntity, P> extends $AbstractBuilder<($BlockEntityType<(any)>), ($BlockEntityType<(T)>), (P), ($BlockEntityBuilder<(T), (P)>)> {


public static "create"<T extends $BlockEntity, P>(arg0: $AbstractRegistrate$$Type<(any)>, arg1: P, arg2: StringJS, arg3: $BuilderCallback$$Type, arg4: $BlockEntityBuilder$BlockEntityFactory$$Type<(T)>): $BlockEntityBuilder<(T), (P)>
public "renderer"(arg0: $NonNullSupplier$$Type<($NonNullFunction$$Type<($BlockEntityRendererProvider$Context$$Type), ($BlockEntityRenderer$$Type<(T)>)>)>): $BlockEntityBuilder<(T), (P)>
public "register"(): $BlockEntityEntry<(T)>
public "validBlocks"(...arg0: ($NonNullSupplier$$Type<($Block$$Type)>)[]): $BlockEntityBuilder<(T), (P)>
public "validBlock"(arg0: $NonNullSupplier$$Type<($Block$$Type)>): $BlockEntityBuilder<(T), (P)>
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityBuilder$$Type<T, P> = ($BlockEntityBuilder<(T), (P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityBuilder_<T, P> = $BlockEntityBuilder$$Type<(T), (P)>;
}}
declare module "com.tterrag.registrate.providers.RegistrateLangProvider" {
import {$RegistrateProvider, $RegistrateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateProvider"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$CachedOutput, $CachedOutput$$Type} from "net.minecraft.data.CachedOutput"
import {$LogicalSide, $LogicalSide$$Type} from "net.neoforged.fml.LogicalSide"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$PackOutput, $PackOutput$$Type} from "net.minecraft.data.PackOutput"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AbstractRegistrate, $AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$LanguageProvider, $LanguageProvider$$Type} from "net.neoforged.neoforge.common.data.LanguageProvider"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $RegistrateLangProvider extends $LanguageProvider implements $RegistrateProvider {

constructor(arg0: $AbstractRegistrate$$Type<(any)>, arg1: $PackOutput$$Type)

public "addItem"(arg0: $NonNullSupplier$$Type<($Item$$Type)>): void
public "getName"(): StringJS
public "run"(arg0: $CachedOutput$$Type): $CompletableFuture<(any)>
public "add"(arg0: $CreativeModeTab$$Type, arg1: StringJS): void
public "add"(arg0: StringJS, arg1: StringJS): void
public static "toEnglishName"(arg0: StringJS): StringJS
public "addBlock"(arg0: $NonNullSupplier$$Type<($Block$$Type)>): void
public "addTooltip"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>, arg1: StringJS): void
public "addTooltip"(arg0: $NonNullSupplier$$Type<($ItemLike$$Type)>, arg1: $List$$Type<(StringJS)>): void
public "addEntityType"(arg0: $NonNullSupplier$$Type<($EntityType$$Type<(any)>)>): void
public "getSide"(): $LogicalSide
public "getAutomaticName"<T>(arg0: $NonNullSupplier$$Type<(T)>, arg1: $ResourceKey$$Type<($Registry<(T)>)>): StringJS
public "addBlockWithTooltip"(arg0: $NonNullSupplier$$Type<($Block$$Type)>, arg1: StringJS): void
public "addBlockWithTooltip"(arg0: $NonNullSupplier$$Type<($Block$$Type)>, arg1: StringJS, arg2: StringJS): void
public "addItemWithTooltip"(arg0: $NonNullSupplier$$Type<($Item$$Type)>, arg1: StringJS, arg2: $List$$Type<(StringJS)>): void
public static "saveStable"<T>(arg0: $CachedOutput$$Type, arg1: $HolderLookup$Provider$$Type, arg2: $Codec$$Type<(T)>, arg3: T, arg4: $Path$$Type): $CompletableFuture<(any)>
public static "saveStable"(arg0: $CachedOutput$$Type, arg1: $JsonElement$$Type, arg2: $Path$$Type): $CompletableFuture<(any)>
get "name"(): StringJS
get "side"(): $LogicalSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistrateLangProvider$$Type = ($RegistrateLangProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistrateLangProvider_ = $RegistrateLangProvider$$Type;
}}
declare module "com.tterrag.registrate.builders.BuilderCallback" {
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$RegistryEntry, $RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$NonNullFunction, $NonNullFunction$$Type} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Builder, $Builder$$Type} from "com.tterrag.registrate.builders.Builder"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"

export interface $BuilderCallback {

 "accept"<R, T extends R>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(R)>)>, arg2: $Builder$$Type<(R), (T), (any), (any)>, arg3: $NonNullSupplier$$Type<(T)>, arg4: $NonNullFunction$$Type<($DeferredHolder<(R), (T)>), ($RegistryEntry$$Type<(R), (T)>)>): $RegistryEntry<(R), (T)>
 "accept"<R, T extends R>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(R)>)>, arg2: $Builder$$Type<(R), (T), (any), (any)>, arg3: $NonNullSupplier$$Type<(T)>): $RegistryEntry<(R), (T)>

(arg0: StringJS, arg1: $ResourceKey<($Registry<(R)>)>, arg2: $Builder<(R), (T), (any), (any)>, arg3: $NonNullSupplier<(T)>, arg4: $NonNullFunction<($DeferredHolder<(R), (T)>), ($RegistryEntry$$Type<(R), (T)>)>): $RegistryEntry$$Type<(R), (T)>
}

export namespace $BuilderCallback {
const probejs$$marker: never
}
export class $BuilderCallback$$Static implements $BuilderCallback {


 "accept"<R, T extends R>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(R)>)>, arg2: $Builder$$Type<(R), (T), (any), (any)>, arg3: $NonNullSupplier$$Type<(T)>, arg4: $NonNullFunction$$Type<($DeferredHolder<(R), (T)>), ($RegistryEntry$$Type<(R), (T)>)>): $RegistryEntry<(R), (T)>
 "accept"<R, T extends R>(arg0: StringJS, arg1: $ResourceKey$$Type<($Registry<(R)>)>, arg2: $Builder$$Type<(R), (T), (any), (any)>, arg3: $NonNullSupplier$$Type<(T)>): $RegistryEntry<(R), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuilderCallback$$Type = ((arg0: StringJS, arg1: $ResourceKey<($Registry<(R)>)>, arg2: $Builder<(R), (T), (any), (any)>, arg3: $NonNullSupplier<(T)>, arg4: $NonNullFunction<($DeferredHolder<(R), (T)>), ($RegistryEntry<(R), (T)>)>) => $RegistryEntry$$Type<(R), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuilderCallback_ = $BuilderCallback$$Type;
}}
