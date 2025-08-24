declare module "toni.sodiumdynamiclights.accessor.WorldRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WorldRendererAccessor {

 "sodiumdynamiclights$scheduleChunkRebuild"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void

(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void
}

export namespace $WorldRendererAccessor {
const probejs$$marker: never
}
export class $WorldRendererAccessor$$Static implements $WorldRendererAccessor {


 "sodiumdynamiclights$scheduleChunkRebuild"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldRendererAccessor$$Type = ((arg0: integer, arg1: integer, arg2: integer, arg3: boolean) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldRendererAccessor_ = $WorldRendererAccessor$$Type;
}}
declare module "toni.sodiumdynamiclights.DynamicLightSource" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LevelRenderer, $LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"

export interface $DynamicLightSource {

 "sodiumdynamiclights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$$Type): void
 "sodiumdynamiclights$updateDynamicLight"(arg0: $LevelRenderer$$Type): boolean
 "sdl$getDynamicLightLevel"(): $Level
 "sdl$isDynamicLightEnabled"(): boolean
 "sdl$setDynamicLightEnabled"(enabled: boolean): void
 "sdl$shouldUpdateDynamicLight"(): boolean
 "sdl$getDynamicLightX"(): double
 "sdl$getDynamicLightY"(): double
 "sdl$getDynamicLightZ"(): double
 "sdl$resetDynamicLight"(): void
 "sdl$dynamicLightTick"(): void
 "sdl$getLuminance"(): integer
}

export namespace $DynamicLightSource {
const probejs$$marker: never
}
export class $DynamicLightSource$$Static implements $DynamicLightSource {


 "sodiumdynamiclights$scheduleTrackedChunksRebuild"(arg0: $LevelRenderer$$Type): void
 "sodiumdynamiclights$updateDynamicLight"(arg0: $LevelRenderer$$Type): boolean
 "sdl$getDynamicLightLevel"(): $Level
 "sdl$isDynamicLightEnabled"(): boolean
 "sdl$setDynamicLightEnabled"(enabled: boolean): void
 "sdl$shouldUpdateDynamicLight"(): boolean
 "sdl$getDynamicLightX"(): double
 "sdl$getDynamicLightY"(): double
 "sdl$getDynamicLightZ"(): double
 "sdl$resetDynamicLight"(): void
 "sdl$dynamicLightTick"(): void
 "sdl$getLuminance"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicLightSource$$Type = ($DynamicLightSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicLightSource_ = $DynamicLightSource$$Type;
}}
declare module "toni.sodiumdynamiclights.accessor.DynamicLightHandlerHolder" {
import {$DynamicLightHandler, $DynamicLightHandler$$Type} from "dev.lambdaurora.lambdynlights.api.DynamicLightHandler"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export interface $DynamicLightHandlerHolder<T> {

 "sodiumdynamiclights$getDynamicLightHandler"(): $DynamicLightHandler<(T)>
 "sodiumdynamiclights$setDynamicLightHandler"(arg0: $DynamicLightHandler$$Type<(T)>): void
 "sodiumdynamiclights$getSetting"(): boolean
 "sodiumdynamiclights$getName"(): $Component
}

export namespace $DynamicLightHandlerHolder {
function cast<T extends $BlockEntity>(entityType: $BlockEntityType$$Type<(T)>): $DynamicLightHandlerHolder<(T)>
function cast<T extends $Entity>(entityType: $EntityType$$Type<(T)>): $DynamicLightHandlerHolder<(T)>
const probejs$$marker: never
}
export class $DynamicLightHandlerHolder$$Static<T> implements $DynamicLightHandlerHolder {


static "cast"<T extends $BlockEntity>(entityType: $BlockEntityType$$Type<(T)>): $DynamicLightHandlerHolder<(T)>
static "cast"<T extends $Entity>(entityType: $EntityType$$Type<(T)>): $DynamicLightHandlerHolder<(T)>
 "sodiumdynamiclights$getDynamicLightHandler"(): $DynamicLightHandler<(T)>
 "sodiumdynamiclights$setDynamicLightHandler"(arg0: $DynamicLightHandler$$Type<(T)>): void
 "sodiumdynamiclights$getSetting"(): boolean
 "sodiumdynamiclights$getName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicLightHandlerHolder$$Type<T> = ($DynamicLightHandlerHolder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicLightHandlerHolder_<T> = $DynamicLightHandlerHolder$$Type<(T)>;
}}
