declare module "com.texelsaurus.minecraft.chameleon.registry.RegistryEntry" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"

export interface $RegistryEntry<T> extends $Supplier<(T)> {

 "getId"(): $ResourceLocation
 "get"(): T
get "id"(): $ResourceLocation
}

export namespace $RegistryEntry {
const probejs$$marker: never
}
export class $RegistryEntry$$Static<T> implements $RegistryEntry {


 "getId"(): $ResourceLocation
 "get"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryEntry$$Type<T> = ($RegistryEntry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryEntry_<T> = $RegistryEntry$$Type<(T)>;
}}
declare module "com.texelsaurus.minecraft.chameleon.capabilities.ChameleonCapability" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $ChameleonCapability<T> {

 "id"(): $ResourceLocation
 "getCapability"(arg0: $Level$$Type, arg1: $BlockPos$$Type): T
}

export namespace $ChameleonCapability {
const probejs$$marker: never
}
export class $ChameleonCapability$$Static<T> implements $ChameleonCapability {


 "id"(): $ResourceLocation
 "getCapability"(arg0: $Level$$Type, arg1: $BlockPos$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChameleonCapability$$Type<T> = ($ChameleonCapability<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChameleonCapability_<T> = $ChameleonCapability$$Type<(T)>;
}}
