declare module "dev.uncandango.kubejstweaks.mixin.extension.JavaWrapperExtension" {
import {$Class, $Class$$Type} from "java.lang.Class"

export interface $JavaWrapperExtension {

}

export namespace $JavaWrapperExtension {
function cast<T>(arg1: $Class$$Type<(T)>, arg2: any): T
const probejs$$marker: never
}
export class $JavaWrapperExtension$$Static implements $JavaWrapperExtension {


/**
 * Cast the object to a target type, use if Rhino can't determine the parameter type due to type erasure.
 */
static "cast"<T>(arg1: $Class$$Type<(T)>, arg2: any): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JavaWrapperExtension$$Type = ($JavaWrapperExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JavaWrapperExtension_ = $JavaWrapperExtension$$Type;
}}
declare module "dev.uncandango.kubejstweaks.kubejs.event.RegisterCodecEventJS" {
import {$KubeEvent, $KubeEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"

export class $RegisterCodecEventJS implements $KubeEvent {

constructor()

public "registerCodec"<T>(arg0: StringJS, arg1: $Codec$$Type<(T)>): void
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterCodecEventJS$$Type = ($RegisterCodecEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegisterCodecEventJS_ = $RegisterCodecEventJS$$Type;
}}
declare module "dev.uncandango.kubejstweaks.mixin.core.main.JavaWrapperMixin" {
import {$JavaWrapperExtension, $JavaWrapperExtension$$Type} from "dev.uncandango.kubejstweaks.mixin.extension.JavaWrapperExtension"
import {$Class, $Class$$Type} from "java.lang.Class"

export interface $JavaWrapperMixin extends $JavaWrapperExtension {

}

export namespace $JavaWrapperMixin {
function cast<T>(arg1: $Class$$Type<(T)>, arg2: any): T
const probejs$$marker: never
}
export class $JavaWrapperMixin$$Static implements $JavaWrapperMixin {


/**
 * Cast the object to a target type, use if Rhino can't determine the parameter type due to type erasure.
 */
static "cast"<T>(arg1: $Class$$Type<(T)>, arg2: any): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JavaWrapperMixin$$Type = ($JavaWrapperMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JavaWrapperMixin_ = $JavaWrapperMixin$$Type;
}}
declare module "dev.uncandango.kubejstweaks.kubejs.event.PreRecipeEventJS$RecipeEntry" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PreRecipeEventJS$RecipeEntry extends $Record {

constructor(id: $ResourceLocation$$Type, json: $JsonObject$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "json"(): $JsonObject
public "disable"(): void
public "fromPath"(arg0: StringJS): $Optional<($Pair<($JsonElement), ($JsonElement)>)>
public "fromPath"(arg0: StringJS, arg1: StringJS): $Optional<($Pair<($JsonElement), ($JsonElement)>)>
public "ignoreWarning"(): void
public "fixCondition"(): void
public "fixItemAtKey"(arg0: StringJS): void
public "renameKey"(arg0: StringJS, arg1: StringJS, arg2: boolean): void
public "addItemCondition"(arg0: StringJS): void
public "addItemTagCondition"(arg0: StringJS): void
public "replaceValueAtKey"(arg0: StringJS, arg1: StringJS, arg2: StringJS, arg3: StringJS): void
public "addConditionsFromKey"(arg0: StringJS): void
public "addModConditionFromType"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PreRecipeEventJS$RecipeEntry$$Type = ({"id"?: $ResourceLocation$$Type, "json"?: $JsonObject$$Type}) | ([id?: $ResourceLocation$$Type, json?: $JsonObject$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PreRecipeEventJS$RecipeEntry_ = $PreRecipeEventJS$RecipeEntry$$Type;
}}
declare module "dev.uncandango.kubejstweaks.kubejs.plugin.KJSTPluginUtils" {
import {$KJSTPluginUtils$KJSTPackType, $KJSTPluginUtils$KJSTPackType$$Type} from "dev.uncandango.kubejstweaks.kubejs.plugin.KJSTPluginUtils$KJSTPackType"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$MultiPackResourceManager, $MultiPackResourceManager$$Type} from "net.minecraft.server.packs.resources.MultiPackResourceManager"
import {$WeakReference, $WeakReference$$Type} from "java.lang.ref.WeakReference"

export class $KJSTPluginUtils {
static "TEMPORARY_SERVER_PACK_RESOURCES": $MultiPackResourceManager
static "SERVER_PACK_RESOURCES": $WeakReference<($MultiPackResourceManager)>
static "CLIENT_PACK_RESOURCES": $MultiPackResourceManager

constructor()

public static "getClass"(arg0: any): $Class<(any)>
public static "getSuperclass"(arg0: any): $Class<(any)>
public static "readJsonFromMod"(arg1: StringJS, arg2: StringJS, arg3: $KJSTPluginUtils$KJSTPackType$$Type): $JsonElement
public static "readJsonFromMod"(arg1: StringJS, arg2: StringJS): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KJSTPluginUtils$$Type = ($KJSTPluginUtils);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KJSTPluginUtils_ = $KJSTPluginUtils$$Type;
}}
declare module "dev.uncandango.kubejstweaks.kubejs.event.PreRecipeEventJS" {
import {$KubeEvent, $KubeEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$PreRecipeEventJS$RecipeEntry, $PreRecipeEventJS$RecipeEntry$$Type} from "dev.uncandango.kubejstweaks.kubejs.event.PreRecipeEventJS$RecipeEntry"

export class $PreRecipeEventJS implements $KubeEvent {

constructor(arg0: $Map$$Type<($ResourceLocation$$Type), ($JsonElement$$Type)>)

public "getEntry"(arg0: any): $Stream<($PreRecipeEventJS$RecipeEntry)>
public "disable"(arg0: any): void
public "ignoreWarning"(arg0: any): void
public "fixCondition"(arg0: any): void
public "fixItemAtKey"(arg0: any, arg1: StringJS): void
public "dumpErroringRecipes"(): void
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PreRecipeEventJS$$Type = ($PreRecipeEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PreRecipeEventJS_ = $PreRecipeEventJS$$Type;
}}
declare module "dev.uncandango.kubejstweaks.kubejs.event.CompatibilityEventJS" {
import {$KubeEvent, $KubeEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeEvent"

export class $CompatibilityEventJS implements $KubeEvent {

constructor()

public "checkModVersion"(arg0: StringJS, arg1: StringJS, arg2: StringJS): void
public "checkModLoaded"(arg0: StringJS, arg1: StringJS): void
public "addIncompatibility"(arg0: StringJS, arg1: StringJS): void
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompatibilityEventJS$$Type = ($CompatibilityEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompatibilityEventJS_ = $CompatibilityEventJS$$Type;
}}
declare module "dev.uncandango.kubejstweaks.kubejs.plugin.KJSTPluginUtils$KJSTPackType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $KJSTPluginUtils$KJSTPackType extends $Enum<($KJSTPluginUtils$KJSTPackType)> {
static readonly "ASSETS": $KJSTPluginUtils$KJSTPackType
static readonly "DATA": $KJSTPluginUtils$KJSTPackType


public static "values"(): ($KJSTPluginUtils$KJSTPackType)[]
public static "valueOf"(arg0: StringJS): $KJSTPluginUtils$KJSTPackType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KJSTPluginUtils$KJSTPackType$$Type = (("assets") | ("data"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KJSTPluginUtils$KJSTPackType_ = $KJSTPluginUtils$KJSTPackType$$Type;
}}
declare module "dev.uncandango.kubejstweaks.kubejs.event.NoOpEventJS" {
import {$KubeEvent, $KubeEvent$$Type} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$KubeDataGenerator, $KubeDataGenerator$$Type} from "dev.latvian.mods.kubejs.generator.KubeDataGenerator"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"

/**
 * Disables an entry at datapack level
 */
export class $NoOpEventJS implements $KubeEvent {

constructor(arg0: $KubeDataGenerator$$Type)

/**
 * This is effectively the same event as generateData with "last" argument.
 * Use it to add any kind of json you wish
 */
public "json"(arg0: $ResourceLocation$$Type, arg1: $JsonElement$$Type): void
/**
 * Adds a condition that is always false, which effectively disables it
 */
public "recipes"(arg0: Special.RecipeId): void
/**
 * Adds a no-op type, disabling the biome modifier
 */
public "biomeModifiers"(arg0: Special.NeoforgeBiomeModifier): void
/**
 * Adds a condition that is always false, which effectively disables it
 */
public "lootTables"(arg0: Special.LootTable): void
/**
 * Adds a condition that is always false, which effectively disables it
 */
public "lootTablesBlock"(arg0: Special.Block): void
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(arg1: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(arg1: any): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(arg1: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoOpEventJS$$Type = ($NoOpEventJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoOpEventJS_ = $NoOpEventJS$$Type;
}}
