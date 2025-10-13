declare module "software.bernie.geckolib.animation.keyframe.AnimationPoint" {
import {$Keyframe, $Keyframe$$Type} from "software.bernie.geckolib.animation.keyframe.Keyframe"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AnimationPoint extends $Record {

constructor(keyFrame: $Keyframe$$Type<(any)>, currentTick: double, transitionLength: double, animationStartValue: double, animationEndValue: double)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "currentTick"(): double
public "keyFrame"(): $Keyframe<(any)>
public "animationEndValue"(): double
public "animationStartValue"(): double
public "transitionLength"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationPoint$$Type = ({"transitionLength"?: double, "animationEndValue"?: double, "currentTick"?: double, "keyFrame"?: $Keyframe$$Type<(never)>, "animationStartValue"?: double}) | ([transitionLength?: double, animationEndValue?: double, currentTick?: double, keyFrame?: $Keyframe$$Type<(never)>, animationStartValue?: double]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationPoint_ = $AnimationPoint$$Type;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Item$Post" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$GeoRenderEvent$Item, $GeoRenderEvent$Item$$Type} from "software.bernie.geckolib.event.GeoRenderEvent$Item"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$GeoItemRenderer, $GeoItemRenderer$$Type} from "software.bernie.geckolib.renderer.GeoItemRenderer"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$Item$Post extends $GeoRenderEvent$Item {

constructor(arg0: $GeoItemRenderer$$Type<(any)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getRenderer"(): $GeoRenderer<(any)>
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "renderer"(): $GeoRenderer<(any)>
get "partialTick"(): float
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Item$Post$$Type = ($GeoRenderEvent$Item$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$Item$Post_ = $GeoRenderEvent$Item$Post$$Type;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Entity" {
import {$GeoRenderEvent, $GeoRenderEvent$$Type} from "software.bernie.geckolib.event.GeoRenderEvent"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$GeoEntityRenderer, $GeoEntityRenderer$$Type} from "software.bernie.geckolib.renderer.GeoEntityRenderer"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $GeoRenderEvent$Entity extends $Event implements $GeoRenderEvent {

constructor(arg0: $GeoEntityRenderer$$Type<(any)>)

public "getEntity"(): $Entity
public "getRenderer"(): $GeoEntityRenderer<(any)>
get "entity"(): $Entity
get "renderer"(): $GeoEntityRenderer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Entity$$Type = ($GeoRenderEvent$Entity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$Entity_ = $GeoRenderEvent$Entity$$Type;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Object$Pre" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoRenderEvent$Object, $GeoRenderEvent$Object$$Type} from "software.bernie.geckolib.event.GeoRenderEvent$Object"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$GeoObjectRenderer, $GeoObjectRenderer$$Type} from "software.bernie.geckolib.renderer.GeoObjectRenderer"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$Object$Pre extends $GeoRenderEvent$Object implements $ICancellableEvent {

constructor(arg0: $GeoObjectRenderer$$Type<(any)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getRenderer"(): $GeoRenderer<(any)>
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "renderer"(): $GeoRenderer<(any)>
get "partialTick"(): float
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Object$Pre$$Type = ($GeoRenderEvent$Object$Pre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$Object$Pre_ = $GeoRenderEvent$Object$Pre$$Type;
}}
declare module "software.bernie.geckolib.animation.Animation$LoopType" {
import {$AnimationController, $AnimationController$$Type} from "software.bernie.geckolib.animation.AnimationController"
import {$Map, $Map$$Type} from "java.util.Map"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Animation, $Animation$$Type} from "software.bernie.geckolib.animation.Animation"

export interface $Animation$LoopType {

 "getId"(): StringJS
 "shouldPlayAgain"(arg0: $GeoAnimatable$$Type, arg1: $AnimationController$$Type<($GeoAnimatable$$Type)>, arg2: $Animation$$Type): boolean

(arg0: $GeoAnimatable, arg1: $AnimationController<($GeoAnimatable)>, arg2: $Animation): boolean
get "id"(): StringJS
}

export namespace $Animation$LoopType {
const LOOP: $Animation$LoopType
const HOLD_ON_LAST_FRAME: $Animation$LoopType
const PLAY_ONCE: $Animation$LoopType
const LOOP_TYPES: $Map<(StringJS), ($Animation$LoopType)>
const DEFAULT: $Animation$LoopType
function register(arg0: StringJS, arg1: $Animation$LoopType$$Type): $Animation$LoopType
function fromJson(arg0: $JsonElement$$Type): $Animation$LoopType
function fromString(arg0: StringJS): $Animation$LoopType
const probejs$$marker: never
}
export class $Animation$LoopType$$Static implements $Animation$LoopType {
static readonly "LOOP": $Animation$LoopType
static readonly "HOLD_ON_LAST_FRAME": $Animation$LoopType
static readonly "PLAY_ONCE": $Animation$LoopType
static readonly "LOOP_TYPES": $Map<(StringJS), ($Animation$LoopType)>
static readonly "DEFAULT": $Animation$LoopType


static "register"(arg0: StringJS, arg1: $Animation$LoopType$$Type): $Animation$LoopType
 "getId"(): StringJS
static "fromJson"(arg0: $JsonElement$$Type): $Animation$LoopType
static "fromString"(arg0: StringJS): $Animation$LoopType
 "shouldPlayAgain"(arg0: $GeoAnimatable$$Type, arg1: $AnimationController$$Type<($GeoAnimatable$$Type)>, arg2: $Animation$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$LoopType$$Type = ((arg0: $GeoAnimatable, arg1: $AnimationController<($GeoAnimatable)>, arg2: $Animation) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation$LoopType_ = $Animation$LoopType$$Type;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$ReplacedEntity$CompileRenderLayers" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$GeoRenderEvent$ReplacedEntity, $GeoRenderEvent$ReplacedEntity$$Type} from "software.bernie.geckolib.event.GeoRenderEvent$ReplacedEntity"
import {$GeoReplacedEntityRenderer, $GeoReplacedEntityRenderer$$Type} from "software.bernie.geckolib.renderer.GeoReplacedEntityRenderer"
import {$GeoRenderLayer, $GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"

export class $GeoRenderEvent$ReplacedEntity$CompileRenderLayers extends $GeoRenderEvent$ReplacedEntity {

constructor(arg0: $GeoReplacedEntityRenderer$$Type<(any), (any)>)

public "getRenderer"(): $GeoRenderer<(any)>
public "addLayer"(arg0: $GeoRenderLayer$$Type<(any)>): void
get "renderer"(): $GeoRenderer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$ReplacedEntity$CompileRenderLayers$$Type = ($GeoRenderEvent$ReplacedEntity$CompileRenderLayers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$ReplacedEntity$CompileRenderLayers_ = $GeoRenderEvent$ReplacedEntity$CompileRenderLayers$$Type;
}}
declare module "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar" {
import {$AnimationController, $AnimationController$$Type} from "software.bernie.geckolib.animation.AnimationController"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$List, $List$$Type} from "java.util.List"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AnimatableManager$ControllerRegistrar extends $Record {

constructor(controllers: $List$$Type<($AnimationController$$Type<($GeoAnimatable$$Type)>)>)

public "remove"(arg0: StringJS): $AnimatableManager$ControllerRegistrar
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "add"(...arg0: ($AnimationController$$Type<(any)>)[]): $AnimatableManager$ControllerRegistrar
public "add"(arg0: $AnimationController$$Type<(any)>): $AnimatableManager$ControllerRegistrar
public "controllers"(): $List<($AnimationController<($GeoAnimatable)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableManager$ControllerRegistrar$$Type = ({"controllers"?: $List$$Type<($AnimationController$$Type<($GeoAnimatable$$Type)>)>}) | ([controllers?: $List$$Type<($AnimationController$$Type<($GeoAnimatable$$Type)>)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableManager$ControllerRegistrar_ = $AnimatableManager$ControllerRegistrar$$Type;
}}
declare module "software.bernie.geckolib.renderer.GeoReplacedEntityRenderer" {
import {$EntityRenderer, $EntityRenderer$$Type} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List, $List$$Type} from "java.util.List"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$EntityRendererProvider$Context, $EntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import {$GeoRenderLayer, $GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoQuad, $GeoQuad$$Type} from "software.bernie.geckolib.cache.object.GeoQuad"
import {$GeoModel, $GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$EntityRenderDispatcher, $EntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$Color, $Color$$Type} from "software.bernie.geckolib.util.Color"
import {$GeoCube, $GeoCube$$Type} from "software.bernie.geckolib.cache.object.GeoCube"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $GeoReplacedEntityRenderer<E extends $Entity, T extends $GeoAnimatable> extends $EntityRenderer<(E)> implements $GeoRenderer<(T)> {
 "shadowRadius": float
static readonly "LEASH_RENDER_STEPS": integer
readonly "entityRenderDispatcher": $EntityRenderDispatcher
 "shadowStrength": float

constructor(arg0: $EntityRendererProvider$Context$$Type, arg1: $GeoModel$$Type<(T)>, arg2: T)

public "getCurrentEntity"(): E
public "render"(arg0: E, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "shouldShowName"(arg0: E): boolean
public "getRenderType"(arg0: T, arg1: $ResourceLocation$$Type, arg2: $MultiBufferSource$$Type, arg3: float): $RenderType
public "getGeoModel"(): $GeoModel<(T)>
public "preRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "actuallyRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "renderFinal"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: integer, arg7: integer, arg8: integer): void
public "getAnimatable"(): T
public "getInstanceId"(arg0: T): long
public "withScale"(arg0: float): $GeoReplacedEntityRenderer<(E), (T)>
public "withScale"(arg0: float, arg1: float): $GeoReplacedEntityRenderer<(E), (T)>
public "postRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "addRenderLayer"(arg0: $GeoRenderLayer$$Type<(T)>): $GeoReplacedEntityRenderer<(E), (T)>
public "renderLeash"<H extends $Entity, M extends $Mob>(arg0: M, arg1: float, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: H): void
public "isShaking"(arg0: T): boolean
public "getPackedOverlay"(arg0: T, arg1: float, arg2: float): integer
public "firePreRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): boolean
public "applyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "firePostRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): void
public "doPostRenderCleanup"(): void
public "renderRecursively"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "getTextureLocation"(arg0: E): $ResourceLocation
public "getRenderLayers"(): $List<($GeoRenderLayer<(T)>)>
public "updateAnimatedTextureFrame"(arg0: T): void
public "fireCompileRenderLayersEvent"(): void
public "getNameRenderCutoffDistance"(arg0: E, arg1: T): double
public "getRenderColor"(arg0: T, arg1: float, arg2: integer): $Color
public "defaultRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: float, arg7: integer): void
public "reRender"(arg0: $BakedGeoModel$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: T, arg4: $RenderType$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "renderCube"(arg0: $PoseStack$$Type, arg1: $GeoCube$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "preApplyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "checkAndRefreshBuffer"(arg0: boolean, arg1: $VertexConsumer$$Type, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type): $VertexConsumer
public "renderCubesOfBone"(arg0: $PoseStack$$Type, arg1: $GeoBone$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "renderChildBones"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "createVerticesOfQuad"(arg0: $GeoQuad$$Type, arg1: $Matrix4f$$Type, arg2: $Vector3f$$Type, arg3: $VertexConsumer$$Type, arg4: integer, arg5: integer, arg6: integer): void
public "getMotionAnimThreshold"(arg0: T): float
public "scaleModelForRender"(arg0: float, arg1: float, arg2: $PoseStack$$Type, arg3: T, arg4: $BakedGeoModel$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer): void
public "getTextureLocation"(arg0: T): $ResourceLocation
public "applyRenderLayersForBone"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
get "currentEntity"(): E
get "geoModel"(): $GeoModel<(T)>
get "animatable"(): T
get "renderLayers"(): $List<($GeoRenderLayer<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoReplacedEntityRenderer$$Type<E, T> = ($GeoReplacedEntityRenderer<(E), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoReplacedEntityRenderer_<E, T> = $GeoReplacedEntityRenderer$$Type<(E), (T)>;
}}
declare module "software.bernie.geckolib.loading.math.MathValue" {
import {$DoubleSupplier, $DoubleSupplier$$Type} from "java.util.function.DoubleSupplier"

export interface $MathValue extends $DoubleSupplier {

 "get"(): double
 "isMutable"(): boolean
 "getAsDouble"(): double

(): double
get "mutable"(): boolean
get "asDouble"(): double
}

export namespace $MathValue {
const probejs$$marker: never
}
export class $MathValue$$Static implements $MathValue {


 "get"(): double
 "isMutable"(): boolean
 "getAsDouble"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MathValue$$Type = (() => double);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MathValue_ = $MathValue$$Type;
}}
declare module "software.bernie.geckolib.animation.AnimationController" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$RawAnimation, $RawAnimation$$Type} from "software.bernie.geckolib.animation.RawAnimation"
import {$AnimationController$AnimationStateHandler, $AnimationController$AnimationStateHandler$$Type} from "software.bernie.geckolib.animation.AnimationController$AnimationStateHandler"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$BoneSnapshot, $BoneSnapshot$$Type} from "software.bernie.geckolib.animation.state.BoneSnapshot"
import {$IAnimationControllerJS, $IAnimationControllerJS$$Type} from "net.liopyu.entityjs.util.implementation.IAnimationControllerJS"
import {$EasingType, $EasingType$$Type} from "software.bernie.geckolib.animation.EasingType"
import {$AnimationController$State, $AnimationController$State$$Type} from "software.bernie.geckolib.animation.AnimationController$State"
import {$AnimationProcessor$QueuedAnimation, $AnimationProcessor$QueuedAnimation$$Type} from "software.bernie.geckolib.animation.AnimationProcessor$QueuedAnimation"
import {$AnimationController$SoundKeyframeHandler, $AnimationController$SoundKeyframeHandler$$Type} from "software.bernie.geckolib.animation.AnimationController$SoundKeyframeHandler"
import {$GeoModel, $GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$AnimationController$ParticleKeyframeHandler, $AnimationController$ParticleKeyframeHandler$$Type} from "software.bernie.geckolib.animation.AnimationController$ParticleKeyframeHandler"
import {$AnimationController$CustomKeyframeHandler, $AnimationController$CustomKeyframeHandler$$Type} from "software.bernie.geckolib.animation.AnimationController$CustomKeyframeHandler"
import {$AnimationState, $AnimationState$$Type} from "software.bernie.geckolib.animation.AnimationState"
import {$BoneAnimationQueue, $BoneAnimationQueue$$Type} from "software.bernie.geckolib.animation.keyframe.BoneAnimationQueue"

export class $AnimationController<T extends $GeoAnimatable> implements $IAnimationControllerJS {

constructor(arg0: T, arg1: $AnimationController$AnimationStateHandler$$Type<(T)>)
constructor(arg0: T, arg1: StringJS, arg2: $AnimationController$AnimationStateHandler$$Type<(T)>)
constructor(arg0: T, arg1: StringJS, arg2: integer, arg3: $AnimationController$AnimationStateHandler$$Type<(T)>)
constructor(arg0: T, arg1: integer, arg2: $AnimationController$AnimationStateHandler$$Type<(T)>)

public "process"(arg0: $GeoModel$$Type<(T)>, arg1: $AnimationState$$Type<(T)>, arg2: $Map$$Type<(StringJS), ($GeoBone$$Type)>, arg3: $Map$$Type<(StringJS), ($BoneSnapshot$$Type)>, arg4: double, arg5: boolean): void
public "getName"(): StringJS
public "stop"(): void
public "setAnimation"(arg0: $RawAnimation$$Type): void
public "getBoneAnimationQueues"(): $Map<(StringJS), ($BoneAnimationQueue)>
public "getAnimationState"(): $AnimationController$State
public "forceAnimationReset"(): void
public "triggerableAnim"(arg0: StringJS, arg1: $RawAnimation$$Type): $AnimationController<(T)>
public "tryTriggerAnimation"(arg0: StringJS): boolean
public "getAnimationSpeed"(): double
public "setOverrideEasingType"(arg0: $EasingType$$Type): $AnimationController<(T)>
public "getTriggeredAnimation"(): $RawAnimation
public "getStateHandler"(): $AnimationController$AnimationStateHandler<(T)>
public "getCurrentRawAnimation"(): $RawAnimation
public "getCurrentAnimation"(): $AnimationProcessor$QueuedAnimation
public "setAnimationSpeed"(arg0: double): $AnimationController<(T)>
public "transitionLength"(arg0: integer): $AnimationController<(T)>
public "hasAnimationFinished"(): boolean
public "setCustomInstructionKeyframeHandler"(arg0: $AnimationController$CustomKeyframeHandler$$Type<(T)>): $AnimationController<(T)>
public "getCurrentAnimationTick"(): double
public "setSoundKeyframeHandler"(arg0: $AnimationController$SoundKeyframeHandler$$Type<(T)>): $AnimationController<(T)>
public "setAnimationSpeedHandler"(arg0: $Function$$Type<(T), (double)>): $AnimationController<(T)>
public "isPlayingTriggeredAnimation"(): boolean
public "setParticleKeyframeHandler"(arg0: $AnimationController$ParticleKeyframeHandler$$Type<(T)>): $AnimationController<(T)>
public "setOverrideEasingTypeFunction"(arg0: $Function$$Type<(T), ($EasingType$$Type)>): $AnimationController<(T)>
public "receiveTriggeredAnimations"(): $AnimationController<(T)>
get "name"(): StringJS
set "animation"(value: $RawAnimation$$Type)
get "boneAnimationQueues"(): $Map<(StringJS), ($BoneAnimationQueue)>
get "animationState"(): $AnimationController$State
get "animationSpeed"(): double
set "overrideEasingType"(value: $EasingType$$Type)
get "triggeredAnimation"(): $RawAnimation
get "stateHandler"(): $AnimationController$AnimationStateHandler<(T)>
get "currentRawAnimation"(): $RawAnimation
get "currentAnimation"(): $AnimationProcessor$QueuedAnimation
set "animationSpeed"(value: double)
set "customInstructionKeyframeHandler"(value: $AnimationController$CustomKeyframeHandler$$Type<(T)>)
get "currentAnimationTick"(): double
set "soundKeyframeHandler"(value: $AnimationController$SoundKeyframeHandler$$Type<(T)>)
set "animationSpeedHandler"(value: $Function$$Type<(T), (double)>)
get "playingTriggeredAnimation"(): boolean
set "particleKeyframeHandler"(value: $AnimationController$ParticleKeyframeHandler$$Type<(T)>)
set "overrideEasingTypeFunction"(value: $Function$$Type<(T), ($EasingType$$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$$Type<T> = ($AnimationController<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController_<T> = $AnimationController$$Type<(T)>;
}}
declare module "software.bernie.geckolib.animatable.GeoEntity" {
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$SerializableDataTicket, $SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$$Type} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"

export interface $GeoEntity extends $GeoAnimatable {

 "triggerAnim"(arg0: StringJS, arg1: StringJS): void
 "getTick"(arg0: any): double
 "getAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>): D
 "setAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>, arg1: D): void
 "stopTriggeredAnim"(arg0: StringJS, arg1: StringJS): void
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
 "getBoneResetTime"(): double
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "animatableCacheOverride"(): $AnimatableInstanceCache
get "boneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
}

export namespace $GeoEntity {
const probejs$$marker: never
}
export class $GeoEntity$$Static implements $GeoEntity {


 "triggerAnim"(arg0: StringJS, arg1: StringJS): void
 "getTick"(arg0: any): double
 "getAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>): D
 "setAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>, arg1: D): void
 "stopTriggeredAnim"(arg0: StringJS, arg1: StringJS): void
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
 "getBoneResetTime"(): double
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "animatableCacheOverride"(): $AnimatableInstanceCache
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoEntity$$Type = ($GeoEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoEntity_ = $GeoEntity$$Type;
}}
declare module "software.bernie.geckolib.loading.json.raw.FaceUV$Rotation" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $FaceUV$Rotation extends $Enum<($FaceUV$Rotation)> {
static readonly "CLOCKWISE_90": $FaceUV$Rotation
static readonly "CLOCKWISE_270": $FaceUV$Rotation
static readonly "CLOCKWISE_180": $FaceUV$Rotation
static readonly "NONE": $FaceUV$Rotation


public static "values"(): ($FaceUV$Rotation)[]
public static "valueOf"(arg0: StringJS): $FaceUV$Rotation
public static "fromValue"(arg0: integer): $FaceUV$Rotation
public "rotateUvs"(arg0: float, arg1: float, arg2: float, arg3: float): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FaceUV$Rotation$$Type = (("none") | ("clockwise_90") | ("clockwise_180") | ("clockwise_270"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FaceUV$Rotation_ = $FaceUV$Rotation$$Type;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$ReplacedEntity$Post" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoRenderEvent$ReplacedEntity, $GeoRenderEvent$ReplacedEntity$$Type} from "software.bernie.geckolib.event.GeoRenderEvent$ReplacedEntity"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$GeoReplacedEntityRenderer, $GeoReplacedEntityRenderer$$Type} from "software.bernie.geckolib.renderer.GeoReplacedEntityRenderer"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$ReplacedEntity$Post extends $GeoRenderEvent$ReplacedEntity {

constructor(arg0: $GeoReplacedEntityRenderer$$Type<(any), (any)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getRenderer"(): $GeoRenderer<(any)>
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "renderer"(): $GeoRenderer<(any)>
get "partialTick"(): float
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$ReplacedEntity$Post$$Type = ($GeoRenderEvent$ReplacedEntity$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$ReplacedEntity$Post_ = $GeoRenderEvent$ReplacedEntity$Post$$Type;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$ReplacedEntity$Pre" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoRenderEvent$ReplacedEntity, $GeoRenderEvent$ReplacedEntity$$Type} from "software.bernie.geckolib.event.GeoRenderEvent$ReplacedEntity"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$GeoReplacedEntityRenderer, $GeoReplacedEntityRenderer$$Type} from "software.bernie.geckolib.renderer.GeoReplacedEntityRenderer"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$ReplacedEntity$Pre extends $GeoRenderEvent$ReplacedEntity implements $ICancellableEvent {

constructor(arg0: $GeoReplacedEntityRenderer$$Type<(any), (any)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getRenderer"(): $GeoRenderer<(any)>
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "renderer"(): $GeoRenderer<(any)>
get "partialTick"(): float
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$ReplacedEntity$Pre$$Type = ($GeoRenderEvent$ReplacedEntity$Pre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$ReplacedEntity$Pre_ = $GeoRenderEvent$ReplacedEntity$Pre$$Type;
}}
declare module "software.bernie.geckolib.animatable.GeoBlockEntity" {
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$SerializableDataTicket, $SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$$Type} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"

export interface $GeoBlockEntity extends $GeoAnimatable {

 "triggerAnim"(arg0: StringJS, arg1: StringJS): void
 "getTick"(arg0: any): double
 "getAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>): D
 "setAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>, arg1: D): void
 "stopTriggeredAnim"(arg0: StringJS, arg1: StringJS): void
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
 "getBoneResetTime"(): double
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "animatableCacheOverride"(): $AnimatableInstanceCache
get "boneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
}

export namespace $GeoBlockEntity {
const probejs$$marker: never
}
export class $GeoBlockEntity$$Static implements $GeoBlockEntity {


 "triggerAnim"(arg0: StringJS, arg1: StringJS): void
 "getTick"(arg0: any): double
 "getAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>): D
 "setAnimData"<D>(arg0: $SerializableDataTicket$$Type<(D)>, arg1: D): void
 "stopTriggeredAnim"(arg0: StringJS, arg1: StringJS): void
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
 "getBoneResetTime"(): double
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "animatableCacheOverride"(): $AnimatableInstanceCache
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoBlockEntity$$Type = ($GeoBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoBlockEntity_ = $GeoBlockEntity$$Type;
}}
declare module "software.bernie.geckolib.cache.object.GeoBone" {
import {$List, $List$$Type} from "java.util.List"
import {$BoneSnapshot, $BoneSnapshot$$Type} from "software.bernie.geckolib.animation.state.BoneSnapshot"
import {$GeoCube, $GeoCube$$Type} from "software.bernie.geckolib.cache.object.GeoCube"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Matrix3f, $Matrix3f$$Type} from "org.joml.Matrix3f"
import {$Vector3d, $Vector3d$$Type} from "org.joml.Vector3d"

export class $GeoBone {

constructor(arg0: $GeoBone$$Type, arg1: StringJS, arg2: boolean, arg3: double, arg4: boolean, arg5: boolean)

public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isHidden"(): boolean
public "getParent"(): $GeoBone
public "setHidden"(arg0: boolean): void
public "saveSnapshot"(): $BoneSnapshot
public "getMirror"(): boolean
public "setRotZ"(arg0: float): void
public "setPosZ"(arg0: float): void
public "setScaleX"(arg0: float): void
public "setScaleY"(arg0: float): void
public "setScaleZ"(arg0: float): void
public "setPivotX"(arg0: float): void
public "setPivotY"(arg0: float): void
public "setPivotZ"(arg0: float): void
public "updatePosition"(arg0: float, arg1: float, arg2: float): void
public "getPosZ"(): float
public "getRotZ"(): float
public "getScaleX"(): float
public "getScaleY"(): float
public "getScaleZ"(): float
public "getCubes"(): $List<($GeoCube)>
public "getChildBones"(): $List<($GeoBone)>
public "updateScale"(arg0: float, arg1: float, arg2: float): void
public "updatePivot"(arg0: float, arg1: float, arg2: float): void
public "getPivotX"(): float
public "getPivotY"(): float
public "getPivotZ"(): float
public "getInflate"(): double
public "getReset"(): boolean
public "getScaleVector"(): $Vector3d
public "getPosX"(): float
public "getPosY"(): float
public "setPosX"(arg0: float): void
public "setPosY"(arg0: float): void
public "getRotY"(): float
public "setRotY"(arg0: float): void
public "getRotX"(): float
public "setRotX"(arg0: float): void
public "updateRotation"(arg0: float, arg1: float, arg2: float): void
public "markRotationAsChanged"(): void
public "markPositionAsChanged"(): void
public "markScaleAsChanged"(): void
public "setChildrenHidden"(arg0: boolean): void
public "setTrackingMatrices"(arg0: boolean): void
public "getLocalSpaceMatrix"(): $Matrix4f
public "getModelSpaceMatrix"(): $Matrix4f
public "getWorldSpaceMatrix"(): $Matrix4f
public "getInitialSnapshot"(): $BoneSnapshot
public "isHidingChildren"(): boolean
public "hasScaleChanged"(): boolean
public "hasRotationChanged"(): boolean
public "hasPositionChanged"(): boolean
public "resetStateChanges"(): void
public "saveInitialSnapshot"(): void
public "shouldNeverRender"(): boolean
public "isTrackingMatrices"(): boolean
public "setModelSpaceMatrix"(arg0: $Matrix4f$$Type): void
public "setLocalSpaceMatrix"(arg0: $Matrix4f$$Type): void
public "setWorldSpaceMatrix"(arg0: $Matrix4f$$Type): void
public "setWorldSpaceNormal"(arg0: $Matrix3f$$Type): void
public "getWorldSpaceNormal"(): $Matrix3f
public "getLocalPosition"(): $Vector3d
public "getModelPosition"(): $Vector3d
public "setModelPosition"(arg0: $Vector3d$$Type): void
public "getModelRotationMatrix"(): $Matrix4f
public "getPositionVector"(): $Vector3d
public "getRotationVector"(): $Vector3d
public "getWorldPosition"(): $Vector3d
public "addRotationOffsetFromBone"(arg0: $GeoBone$$Type): void
get "name"(): StringJS
get "hidden"(): boolean
get "parent"(): $GeoBone
set "hidden"(value: boolean)
get "mirror"(): boolean
set "rotZ"(value: float)
set "posZ"(value: float)
set "scaleX"(value: float)
set "scaleY"(value: float)
set "scaleZ"(value: float)
set "pivotX"(value: float)
set "pivotY"(value: float)
set "pivotZ"(value: float)
get "posZ"(): float
get "rotZ"(): float
get "scaleX"(): float
get "scaleY"(): float
get "scaleZ"(): float
get "cubes"(): $List<($GeoCube)>
get "childBones"(): $List<($GeoBone)>
get "pivotX"(): float
get "pivotY"(): float
get "pivotZ"(): float
get "inflate"(): double
get "reset"(): boolean
get "scaleVector"(): $Vector3d
get "posX"(): float
get "posY"(): float
set "posX"(value: float)
set "posY"(value: float)
get "rotY"(): float
set "rotY"(value: float)
get "rotX"(): float
set "rotX"(value: float)
set "childrenHidden"(value: boolean)
set "trackingMatrices"(value: boolean)
get "localSpaceMatrix"(): $Matrix4f
get "modelSpaceMatrix"(): $Matrix4f
get "worldSpaceMatrix"(): $Matrix4f
get "initialSnapshot"(): $BoneSnapshot
get "hidingChildren"(): boolean
get "trackingMatrices"(): boolean
set "modelSpaceMatrix"(value: $Matrix4f$$Type)
set "localSpaceMatrix"(value: $Matrix4f$$Type)
set "worldSpaceMatrix"(value: $Matrix4f$$Type)
set "worldSpaceNormal"(value: $Matrix3f$$Type)
get "worldSpaceNormal"(): $Matrix3f
get "localPosition"(): $Vector3d
get "modelPosition"(): $Vector3d
set "modelPosition"(value: $Vector3d$$Type)
get "modelRotationMatrix"(): $Matrix4f
get "positionVector"(): $Vector3d
get "rotationVector"(): $Vector3d
get "worldPosition"(): $Vector3d
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoBone$$Type = ($GeoBone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoBone_ = $GeoBone$$Type;
}}
declare module "software.bernie.geckolib.util.Color" {
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Color extends $Record {
static readonly "WHITE": $Color
static readonly "GRAY": $Color
static readonly "BLUE": $Color
static readonly "GREEN": $Color
static readonly "RED": $Color
static readonly "PINK": $Color
static readonly "LIGHT_GRAY": $Color
static readonly "BLACK": $Color
static readonly "MAGENTA": $Color
static readonly "YELLOW": $Color
static readonly "DARK_GRAY": $Color
static readonly "CYAN": $Color
static readonly "ORANGE": $Color

constructor(argbInt: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getRed"(): integer
public "getAlpha"(): integer
public "getColor"(): integer
public "darker"(arg0: float): $Color
public static "ofARGB"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Color
public static "ofARGB"(arg0: float, arg1: float, arg2: float, arg3: float): $Color
public "getRedFloat"(): float
public "getGreenFloat"(): float
public "getBlueFloat"(): float
public static "ofOpaque"(arg0: integer): $Color
public "brighter"(arg0: double): $Color
public "argbInt"(): integer
public "getGreen"(): integer
public "getBlue"(): integer
public static "ofRGBA"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $Color
public static "ofRGBA"(arg0: float, arg1: float, arg2: float, arg3: float): $Color
public static "ofHSB"(arg0: float, arg1: float, arg2: float): $Color
public static "ofRGB"(arg0: integer, arg1: integer, arg2: integer): $Color
public static "ofRGB"(arg0: float, arg1: float, arg2: float): $Color
public "getAlphaFloat"(): float
public static "HSBtoARGB"(arg0: float, arg1: float, arg2: float): integer
get "red"(): integer
get "alpha"(): integer
get "color"(): integer
get "redFloat"(): float
get "greenFloat"(): float
get "blueFloat"(): float
get "green"(): integer
get "blue"(): integer
get "alphaFloat"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color$$Type = ({"argbInt"?: integer}) | ([argbInt?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Color_ = $Color$$Type;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Object$Post" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoRenderEvent$Object, $GeoRenderEvent$Object$$Type} from "software.bernie.geckolib.event.GeoRenderEvent$Object"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$GeoObjectRenderer, $GeoObjectRenderer$$Type} from "software.bernie.geckolib.renderer.GeoObjectRenderer"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$Object$Post extends $GeoRenderEvent$Object {

constructor(arg0: $GeoObjectRenderer$$Type<(any)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getRenderer"(): $GeoRenderer<(any)>
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "renderer"(): $GeoRenderer<(any)>
get "partialTick"(): float
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Object$Post$$Type = ($GeoRenderEvent$Object$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$Object$Post_ = $GeoRenderEvent$Object$Post$$Type;
}}
declare module "software.bernie.geckolib.animation.keyframe.BoneAnimationQueue" {
import {$AnimationPoint, $AnimationPoint$$Type} from "software.bernie.geckolib.animation.keyframe.AnimationPoint"
import {$AnimationPointQueue, $AnimationPointQueue$$Type} from "software.bernie.geckolib.animation.keyframe.AnimationPointQueue"
import {$Keyframe, $Keyframe$$Type} from "software.bernie.geckolib.animation.keyframe.Keyframe"
import {$BoneSnapshot, $BoneSnapshot$$Type} from "software.bernie.geckolib.animation.state.BoneSnapshot"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BoneAnimationQueue extends $Record {

constructor(arg0: $GeoBone$$Type)
constructor(bone: $GeoBone$$Type, rotationXQueue: $AnimationPointQueue$$Type, rotationYQueue: $AnimationPointQueue$$Type, rotationZQueue: $AnimationPointQueue$$Type, positionXQueue: $AnimationPointQueue$$Type, positionYQueue: $AnimationPointQueue$$Type, positionZQueue: $AnimationPointQueue$$Type, scaleXQueue: $AnimationPointQueue$$Type, scaleYQueue: $AnimationPointQueue$$Type, scaleZQueue: $AnimationPointQueue$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "bone"(): $GeoBone
public "rotationXQueue"(): $AnimationPointQueue
public "rotationYQueue"(): $AnimationPointQueue
public "rotationZQueue"(): $AnimationPointQueue
public "positionXQueue"(): $AnimationPointQueue
public "positionYQueue"(): $AnimationPointQueue
public "positionZQueue"(): $AnimationPointQueue
public "scaleXQueue"(): $AnimationPointQueue
public "scaleYQueue"(): $AnimationPointQueue
public "scaleZQueue"(): $AnimationPointQueue
public "addNextScale"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: $BoneSnapshot$$Type, arg4: $AnimationPoint$$Type, arg5: $AnimationPoint$$Type, arg6: $AnimationPoint$$Type): void
public "addRotations"(arg0: $AnimationPoint$$Type, arg1: $AnimationPoint$$Type, arg2: $AnimationPoint$$Type): void
public "addPositions"(arg0: $AnimationPoint$$Type, arg1: $AnimationPoint$$Type, arg2: $AnimationPoint$$Type): void
public "addScales"(arg0: $AnimationPoint$$Type, arg1: $AnimationPoint$$Type, arg2: $AnimationPoint$$Type): void
public "addScaleZPoint"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addScaleYPoint"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addScaleXPoint"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addPosZPoint"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addPosXPoint"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addPosYPoint"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addNextRotation"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: $BoneSnapshot$$Type, arg4: $BoneSnapshot$$Type, arg5: $AnimationPoint$$Type, arg6: $AnimationPoint$$Type, arg7: $AnimationPoint$$Type): void
public "addNextPosition"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: $BoneSnapshot$$Type, arg4: $AnimationPoint$$Type, arg5: $AnimationPoint$$Type, arg6: $AnimationPoint$$Type): void
public "addRotationZPoint"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addRotationXPoint"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
public "addRotationYPoint"(arg0: $Keyframe$$Type<(any)>, arg1: double, arg2: double, arg3: double, arg4: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoneAnimationQueue$$Type = ({"scaleZQueue"?: $AnimationPointQueue$$Type, "rotationZQueue"?: $AnimationPointQueue$$Type, "positionXQueue"?: $AnimationPointQueue$$Type, "positionZQueue"?: $AnimationPointQueue$$Type, "scaleYQueue"?: $AnimationPointQueue$$Type, "rotationYQueue"?: $AnimationPointQueue$$Type, "bone"?: $GeoBone$$Type, "positionYQueue"?: $AnimationPointQueue$$Type, "rotationXQueue"?: $AnimationPointQueue$$Type, "scaleXQueue"?: $AnimationPointQueue$$Type}) | ([scaleZQueue?: $AnimationPointQueue$$Type, rotationZQueue?: $AnimationPointQueue$$Type, positionXQueue?: $AnimationPointQueue$$Type, positionZQueue?: $AnimationPointQueue$$Type, scaleYQueue?: $AnimationPointQueue$$Type, rotationYQueue?: $AnimationPointQueue$$Type, bone?: $GeoBone$$Type, positionYQueue?: $AnimationPointQueue$$Type, rotationXQueue?: $AnimationPointQueue$$Type, scaleXQueue?: $AnimationPointQueue$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoneAnimationQueue_ = $BoneAnimationQueue$$Type;
}}
declare module "software.bernie.geckolib.animation.Animation" {
import {$Animation$Keyframes, $Animation$Keyframes$$Type} from "software.bernie.geckolib.animation.Animation$Keyframes"
import {$BoneAnimation, $BoneAnimation$$Type} from "software.bernie.geckolib.animation.keyframe.BoneAnimation"
import {$Animation$LoopType, $Animation$LoopType$$Type} from "software.bernie.geckolib.animation.Animation$LoopType"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Animation extends $Record {

constructor(name: StringJS, length: double, loopType: $Animation$LoopType$$Type, boneAnimations: ($BoneAnimation$$Type)[], keyFrames: $Animation$Keyframes$$Type)

public "loopType"(): $Animation$LoopType
public "name"(): StringJS
public "equals"(arg0: any): boolean
public "length"(): double
public "toString"(): StringJS
public "hashCode"(): integer
public "boneAnimations"(): ($BoneAnimation)[]
public "keyFrames"(): $Animation$Keyframes
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$$Type = ({"loopType"?: $Animation$LoopType$$Type, "keyFrames"?: $Animation$Keyframes$$Type, "length"?: double, "name"?: StringJS, "boneAnimations"?: ($BoneAnimation$$Type)[]}) | ([loopType?: $Animation$LoopType$$Type, keyFrames?: $Animation$Keyframes$$Type, length?: double, name?: StringJS, boneAnimations?: ($BoneAnimation$$Type)[]]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation_ = $Animation$$Type;
}}
declare module "software.bernie.geckolib.animation.keyframe.event.data.KeyFrameData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $KeyFrameData {

constructor(arg0: double)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getStartTick"(): double
get "startTick"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyFrameData$$Type = ($KeyFrameData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyFrameData_ = $KeyFrameData$$Type;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$ReplacedEntity" {
import {$GeoRenderEvent, $GeoRenderEvent$$Type} from "software.bernie.geckolib.event.GeoRenderEvent"
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$GeoReplacedEntityRenderer, $GeoReplacedEntityRenderer$$Type} from "software.bernie.geckolib.renderer.GeoReplacedEntityRenderer"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $GeoRenderEvent$ReplacedEntity extends $Event implements $GeoRenderEvent {

constructor(arg0: $GeoReplacedEntityRenderer$$Type<(any), (any)>)

public "getRenderer"(): $GeoRenderer<(any)>
public "getReplacedEntity"(): $Entity
get "renderer"(): $GeoRenderer<(any)>
get "replacedEntity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$ReplacedEntity$$Type = ($GeoRenderEvent$ReplacedEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$ReplacedEntity_ = $GeoRenderEvent$ReplacedEntity$$Type;
}}
declare module "software.bernie.geckolib.constant.dataticket.SerializableDataTicket" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$DataTicket, $DataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.DataTicket"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $SerializableDataTicket<D> extends $DataTicket<(D)> {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SerializableDataTicket<(any)>)>

constructor(arg0: StringJS, arg1: $Class$$Type<(D)>)

public static "ofInt"(arg0: $ResourceLocation$$Type): $SerializableDataTicket<(integer)>
public static "ofEnum"<E extends $Enum<(E)>>(arg0: $ResourceLocation$$Type, arg1: $Class$$Type<(E)>): $SerializableDataTicket<(E)>
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (D)>
public static "ofDouble"(arg0: $ResourceLocation$$Type): $SerializableDataTicket<(double)>
public static "ofFloat"(arg0: $ResourceLocation$$Type): $SerializableDataTicket<(float)>
public static "ofBoolean"(arg0: $ResourceLocation$$Type): $SerializableDataTicket<(boolean)>
public static "ofString"(arg0: $ResourceLocation$$Type): $SerializableDataTicket<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializableDataTicket$$Type<D> = ($SerializableDataTicket<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializableDataTicket_<D> = $SerializableDataTicket$$Type<(D)>;
}}
declare module "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache" {
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$DataTicket, $DataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.DataTicket"
import {$AnimatableManager, $AnimatableManager$$Type} from "software.bernie.geckolib.animation.AnimatableManager"

export class $AnimatableInstanceCache {

constructor(arg0: $GeoAnimatable$$Type)

public "addDataPoint"<D>(arg0: long, arg1: $DataTicket$$Type<(D)>, arg2: D): void
public "getDataPoint"<D>(arg0: long, arg1: $DataTicket$$Type<(D)>): D
public "getManagerForId"<T extends $GeoAnimatable>(arg0: long): $AnimatableManager<(T)>
public "getRenderProvider"(): any
get "renderProvider"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableInstanceCache$$Type = ($AnimatableInstanceCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableInstanceCache_ = $AnimatableInstanceCache$$Type;
}}
declare module "software.bernie.geckolib.cache.object.GeoCube" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$GeoQuad, $GeoQuad$$Type} from "software.bernie.geckolib.cache.object.GeoQuad"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $GeoCube extends $Record {

constructor(quads: ($GeoQuad$$Type)[], pivot: $Vec3$$Type, rotation: $Vec3$$Type, size: $Vec3$$Type, inflate: double, mirror: boolean)

public "pivot"(): $Vec3
public "size"(): $Vec3
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "inflate"(): double
public "quads"(): ($GeoQuad)[]
public "mirror"(): boolean
public "rotation"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoCube$$Type = ({"mirror"?: boolean, "inflate"?: double, "size"?: $Vec3$$Type, "rotation"?: $Vec3$$Type, "quads"?: ($GeoQuad$$Type)[], "pivot"?: $Vec3$$Type}) | ([mirror?: boolean, inflate?: double, size?: $Vec3$$Type, rotation?: $Vec3$$Type, quads?: ($GeoQuad$$Type)[], pivot?: $Vec3$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoCube_ = $GeoCube$$Type;
}}
declare module "software.bernie.geckolib.animation.keyframe.event.data.ParticleKeyframeData" {
import {$KeyFrameData, $KeyFrameData$$Type} from "software.bernie.geckolib.animation.keyframe.event.data.KeyFrameData"

export class $ParticleKeyframeData extends $KeyFrameData {

constructor(arg0: double, arg1: StringJS, arg2: StringJS, arg3: StringJS)

public "script"(): StringJS
public "getLocator"(): StringJS
public "hashCode"(): integer
public "getEffect"(): StringJS
get "locator"(): StringJS
get "effect"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleKeyframeData$$Type = ($ParticleKeyframeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleKeyframeData_ = $ParticleKeyframeData$$Type;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Entity$Pre" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoRenderEvent$Entity, $GeoRenderEvent$Entity$$Type} from "software.bernie.geckolib.event.GeoRenderEvent$Entity"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$GeoEntityRenderer, $GeoEntityRenderer$$Type} from "software.bernie.geckolib.renderer.GeoEntityRenderer"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$Entity$Pre extends $GeoRenderEvent$Entity implements $ICancellableEvent {

constructor(arg0: $GeoEntityRenderer$$Type<(any)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getRenderer"(): $GeoRenderer<(any)>
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "renderer"(): $GeoRenderer<(any)>
get "partialTick"(): float
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Entity$Pre$$Type = ($GeoRenderEvent$Entity$Pre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$Entity$Pre_ = $GeoRenderEvent$Entity$Pre$$Type;
}}
declare module "software.bernie.geckolib.animation.state.BoneSnapshot" {
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"

export class $BoneSnapshot {

constructor(arg0: $GeoBone$$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copy"(arg0: $BoneSnapshot$$Type): $BoneSnapshot
public "startRotAnim"(): void
public "updateOffset"(arg0: float, arg1: float, arg2: float): void
public "startPosAnim"(): void
public "startScaleAnim"(): void
public "stopRotAnim"(arg0: double): void
public "stopPosAnim"(arg0: double): void
public "stopScaleAnim"(arg0: double): void
public "getBone"(): $GeoBone
public "getRotZ"(): float
public "getScaleX"(): float
public "getScaleY"(): float
public "getScaleZ"(): float
public "updateScale"(arg0: float, arg1: float, arg2: float): void
public "getOffsetX"(): float
public "getOffsetY"(): float
public "getOffsetZ"(): float
public "getRotY"(): float
public "getRotX"(): float
public "updateRotation"(arg0: float, arg1: float, arg2: float): void
public "isRotAnimInProgress"(): boolean
public "isPosAnimInProgress"(): boolean
public "isScaleAnimInProgress"(): boolean
public "getLastResetScaleTick"(): double
public "getLastResetRotationTick"(): double
public "getLastResetPositionTick"(): double
get "bone"(): $GeoBone
get "rotZ"(): float
get "scaleX"(): float
get "scaleY"(): float
get "scaleZ"(): float
get "offsetX"(): float
get "offsetY"(): float
get "offsetZ"(): float
get "rotY"(): float
get "rotX"(): float
get "rotAnimInProgress"(): boolean
get "posAnimInProgress"(): boolean
get "scaleAnimInProgress"(): boolean
get "lastResetScaleTick"(): double
get "lastResetRotationTick"(): double
get "lastResetPositionTick"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoneSnapshot$$Type = ($BoneSnapshot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoneSnapshot_ = $BoneSnapshot$$Type;
}}
declare module "software.bernie.geckolib.renderer.GeoEntityRenderer" {
import {$EntityRenderer, $EntityRenderer$$Type} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List, $List$$Type} from "java.util.List"
import {$Mob, $Mob$$Type} from "net.minecraft.world.entity.Mob"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$EntityRendererProvider$Context, $EntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import {$GeoRenderLayer, $GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoQuad, $GeoQuad$$Type} from "software.bernie.geckolib.cache.object.GeoQuad"
import {$GeoModel, $GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$EntityRenderDispatcher, $EntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$Color, $Color$$Type} from "software.bernie.geckolib.util.Color"
import {$GeoCube, $GeoCube$$Type} from "software.bernie.geckolib.cache.object.GeoCube"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $GeoEntityRenderer<T extends ($Entity) & ($GeoAnimatable)> extends $EntityRenderer<(T)> implements $GeoRenderer<(T)> {
 "shadowRadius": float
static readonly "LEASH_RENDER_STEPS": integer
readonly "entityRenderDispatcher": $EntityRenderDispatcher
 "shadowStrength": float

constructor(arg0: $EntityRendererProvider$Context$$Type, arg1: $EntityType$$Type<(T)>)
constructor(arg0: $EntityRendererProvider$Context$$Type, arg1: $GeoModel$$Type<(T)>)

public "render"(arg0: T, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "shouldShowName"(arg0: T): boolean
public "getRenderType"(arg0: T, arg1: $ResourceLocation$$Type, arg2: $MultiBufferSource$$Type, arg3: float): $RenderType
public "getRenderType"(arg0: $GeoAnimatable$$Type, arg1: $ResourceLocation$$Type, arg2: $MultiBufferSource$$Type, arg3: float): $RenderType
public "getGeoModel"(): $GeoModel<(T)>
public "preRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "preRender"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "getRenderColor"(arg0: $GeoAnimatable$$Type, arg1: float, arg2: integer): $Color
public "getRenderColor"(arg0: T, arg1: float, arg2: integer): $Color
public "actuallyRender"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "actuallyRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "renderFinal"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: integer, arg7: integer, arg8: integer): void
public "renderFinal"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: integer, arg7: integer, arg8: integer): void
public "getAnimatable"(): T
public "getInstanceId"(arg0: $GeoAnimatable$$Type): long
public "getInstanceId"(arg0: T): long
public "withScale"(arg0: float): $GeoEntityRenderer<(T)>
public "withScale"(arg0: float, arg1: float): $GeoEntityRenderer<(T)>
public "addRenderLayer"(arg0: $GeoRenderLayer$$Type<(T)>): $GeoEntityRenderer<(T)>
public "renderLeash"<E extends $Entity, M extends $Mob>(arg0: M, arg1: float, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: E): void
public "isShaking"(arg0: T): boolean
public "getPackedOverlay"(arg0: T, arg1: float, arg2: float): integer
public "getPackedOverlay"(arg0: $GeoAnimatable$$Type, arg1: float, arg2: float): integer
public "firePreRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): boolean
public "applyRenderLayers"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "applyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "firePostRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): void
public "doPostRenderCleanup"(): void
public "renderRecursively"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "renderRecursively"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "getTextureLocation"(arg0: T): $ResourceLocation
public "getTextureLocation"(arg0: $GeoAnimatable$$Type): $ResourceLocation
public "getRenderLayers"(): $List<($GeoRenderLayer<(T)>)>
public "updateAnimatedTextureFrame"(arg0: $GeoAnimatable$$Type): void
public "updateAnimatedTextureFrame"(arg0: T): void
public "fireCompileRenderLayersEvent"(): void
public "getNameRenderCutoffDistance"(arg0: T): double
public "defaultRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: float, arg7: integer): void
public "reRender"(arg0: $BakedGeoModel$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: T, arg4: $RenderType$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "postRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "renderCube"(arg0: $PoseStack$$Type, arg1: $GeoCube$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "preApplyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "checkAndRefreshBuffer"(arg0: boolean, arg1: $VertexConsumer$$Type, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type): $VertexConsumer
public "renderCubesOfBone"(arg0: $PoseStack$$Type, arg1: $GeoBone$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "renderChildBones"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "createVerticesOfQuad"(arg0: $GeoQuad$$Type, arg1: $Matrix4f$$Type, arg2: $Vector3f$$Type, arg3: $VertexConsumer$$Type, arg4: integer, arg5: integer, arg6: integer): void
public "getMotionAnimThreshold"(arg0: T): float
public "scaleModelForRender"(arg0: float, arg1: float, arg2: $PoseStack$$Type, arg3: T, arg4: $BakedGeoModel$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer): void
public "applyRenderLayersForBone"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
get "geoModel"(): $GeoModel<(T)>
get "animatable"(): T
get "renderLayers"(): $List<($GeoRenderLayer<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoEntityRenderer$$Type<T> = ($GeoEntityRenderer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoEntityRenderer_<T> = $GeoEntityRenderer$$Type<(T)>;
}}
declare module "software.bernie.geckolib.cache.object.BakedGeoModel" {
import {$ModelProperties, $ModelProperties$$Type} from "software.bernie.geckolib.loading.json.raw.ModelProperties"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BakedGeoModel extends $Record {

constructor(topLevelBones: $List$$Type<($GeoBone$$Type)>, properties: $ModelProperties$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "properties"(): $ModelProperties
public "topLevelBones"(): $List<($GeoBone)>
public "getBone"(arg0: StringJS): $Optional<($GeoBone)>
public "searchForChildBone"(arg0: $GeoBone$$Type, arg1: StringJS): $GeoBone
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedGeoModel$$Type = ({"properties"?: $ModelProperties$$Type, "topLevelBones"?: $List$$Type<($GeoBone$$Type)>}) | ([properties?: $ModelProperties$$Type, topLevelBones?: $List$$Type<($GeoBone$$Type)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedGeoModel_ = $BakedGeoModel$$Type;
}}
declare module "software.bernie.geckolib.renderer.layer.AutoGlowingGeoLayer" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$GeoRenderLayer, $GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $AutoGlowingGeoLayer<T extends $GeoAnimatable> extends $GeoRenderLayer<(T)> {

constructor(arg0: $GeoRenderer$$Type<(T)>)

public "render"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoGlowingGeoLayer$$Type<T> = ($AutoGlowingGeoLayer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoGlowingGeoLayer_<T> = $AutoGlowingGeoLayer$$Type<(T)>;
}}
declare module "software.bernie.geckolib.animation.keyframe.event.data.CustomInstructionKeyframeData" {
import {$KeyFrameData, $KeyFrameData$$Type} from "software.bernie.geckolib.animation.keyframe.event.data.KeyFrameData"

export class $CustomInstructionKeyframeData extends $KeyFrameData {

constructor(arg0: double, arg1: StringJS)

public "hashCode"(): integer
public "getInstructions"(): StringJS
get "instructions"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomInstructionKeyframeData$$Type = ($CustomInstructionKeyframeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomInstructionKeyframeData_ = $CustomInstructionKeyframeData$$Type;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Armor$Post" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$GeoArmorRenderer, $GeoArmorRenderer$$Type} from "software.bernie.geckolib.renderer.GeoArmorRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoRenderEvent$Armor, $GeoRenderEvent$Armor$$Type} from "software.bernie.geckolib.event.GeoRenderEvent$Armor"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$Armor$Post extends $GeoRenderEvent$Armor {

constructor(arg0: $GeoArmorRenderer$$Type<(any)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getRenderer"(): $GeoRenderer<(any)>
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "renderer"(): $GeoRenderer<(any)>
get "partialTick"(): float
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Armor$Post$$Type = ($GeoRenderEvent$Armor$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$Armor$Post_ = $GeoRenderEvent$Armor$Post$$Type;
}}
declare module "software.bernie.geckolib.renderer.GeoBlockRenderer" {
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List, $List$$Type} from "java.util.List"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$GeoRenderLayer, $GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoQuad, $GeoQuad$$Type} from "software.bernie.geckolib.cache.object.GeoQuad"
import {$GeoModel, $GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Color, $Color$$Type} from "software.bernie.geckolib.util.Color"
import {$BlockEntityRenderer, $BlockEntityRenderer$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderer"
import {$GeoCube, $GeoCube$$Type} from "software.bernie.geckolib.cache.object.GeoCube"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"

export class $GeoBlockRenderer<T extends ($BlockEntity) & ($GeoAnimatable)> implements $GeoRenderer<(T)>, $BlockEntityRenderer<(T)> {

constructor(arg0: $BlockEntityType$$Type<(T)>)
constructor(arg0: $GeoModel$$Type<(T)>)

public "render"(arg0: T, arg1: float, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: integer): void
public "getGeoModel"(): $GeoModel<(T)>
public "preRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "preRender"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "actuallyRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "actuallyRender"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "getAnimatable"(): T
public "getInstanceId"(arg0: $GeoAnimatable$$Type): long
public "getInstanceId"(arg0: T): long
public "withScale"(arg0: float): $GeoBlockRenderer<(T)>
public "withScale"(arg0: float, arg1: float): $GeoBlockRenderer<(T)>
public "addRenderLayer"(arg0: $GeoRenderLayer$$Type<(T)>): $GeoBlockRenderer<(T)>
public "firePreRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): boolean
public "firePostRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): void
public "doPostRenderCleanup"(): void
public "renderRecursively"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "renderRecursively"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "getRenderLayers"(): $List<($GeoRenderLayer<(T)>)>
public "updateAnimatedTextureFrame"(arg0: $GeoAnimatable$$Type): void
public "updateAnimatedTextureFrame"(arg0: T): void
public "fireCompileRenderLayersEvent"(): void
public "getRenderType"(arg0: T, arg1: $ResourceLocation$$Type, arg2: $MultiBufferSource$$Type, arg3: float): $RenderType
public "getRenderColor"(arg0: T, arg1: float, arg2: integer): $Color
public "renderFinal"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: integer, arg7: integer, arg8: integer): void
public "defaultRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: float, arg7: integer): void
public "reRender"(arg0: $BakedGeoModel$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: T, arg4: $RenderType$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "postRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "renderCube"(arg0: $PoseStack$$Type, arg1: $GeoCube$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "getPackedOverlay"(arg0: T, arg1: float, arg2: float): integer
public "preApplyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "applyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "checkAndRefreshBuffer"(arg0: boolean, arg1: $VertexConsumer$$Type, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type): $VertexConsumer
public "renderCubesOfBone"(arg0: $PoseStack$$Type, arg1: $GeoBone$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "renderChildBones"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "createVerticesOfQuad"(arg0: $GeoQuad$$Type, arg1: $Matrix4f$$Type, arg2: $Vector3f$$Type, arg3: $VertexConsumer$$Type, arg4: integer, arg5: integer, arg6: integer): void
public "getMotionAnimThreshold"(arg0: T): float
public "scaleModelForRender"(arg0: float, arg1: float, arg2: $PoseStack$$Type, arg3: T, arg4: $BakedGeoModel$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer): void
public "getTextureLocation"(arg0: T): $ResourceLocation
public "applyRenderLayersForBone"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "shouldRender"(arg0: T, arg1: $Vec3$$Type): boolean
public "shouldRenderOffScreen"(arg0: T): boolean
public "getViewDistance"(): integer
public "getRenderBoundingBox"(arg0: T): $AABB
get "geoModel"(): $GeoModel<(T)>
get "animatable"(): T
get "renderLayers"(): $List<($GeoRenderLayer<(T)>)>
get "viewDistance"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoBlockRenderer$$Type<T> = ($GeoBlockRenderer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoBlockRenderer_<T> = $GeoBlockRenderer$$Type<(T)>;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Object$CompileRenderLayers" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$GeoRenderEvent$Object, $GeoRenderEvent$Object$$Type} from "software.bernie.geckolib.event.GeoRenderEvent$Object"
import {$GeoObjectRenderer, $GeoObjectRenderer$$Type} from "software.bernie.geckolib.renderer.GeoObjectRenderer"
import {$GeoRenderLayer, $GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"

export class $GeoRenderEvent$Object$CompileRenderLayers extends $GeoRenderEvent$Object {

constructor(arg0: $GeoObjectRenderer$$Type<(any)>)

public "getRenderer"(): $GeoRenderer<(any)>
public "addLayer"(arg0: $GeoRenderLayer$$Type<(any)>): void
get "renderer"(): $GeoRenderer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Object$CompileRenderLayers$$Type = ($GeoRenderEvent$Object$CompileRenderLayers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$Object$CompileRenderLayers_ = $GeoRenderEvent$Object$CompileRenderLayers$$Type;
}}
declare module "software.bernie.geckolib.animation.AnimationState" {
import {$AnimationController, $AnimationController$$Type} from "software.bernie.geckolib.animation.AnimationController"
import {$Map, $Map$$Type} from "java.util.Map"
import {$RawAnimation, $RawAnimation$$Type} from "software.bernie.geckolib.animation.RawAnimation"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$DataTicket, $DataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.DataTicket"
import {$PlayState, $PlayState$$Type} from "software.bernie.geckolib.animation.PlayState"

export class $AnimationState<T extends $GeoAnimatable> {
 "animationTick": double

constructor(arg0: T, arg1: float, arg2: float, arg3: float, arg4: boolean)

public "getData"<D>(arg0: $DataTicket$$Type<(D)>): D
public "setData"<D>(arg0: $DataTicket$$Type<(D)>, arg1: D): void
public "isMoving"(): boolean
public "withController"(arg0: $AnimationController$$Type<(T)>): $AnimationState<(T)>
public "getLimbSwing"(): float
public "getAnimatable"(): T
public "getController"(): $AnimationController<(T)>
public "setAnimation"(arg0: $RawAnimation$$Type): void
public "getPartialTick"(): float
public "getExtraData"(): $Map<($DataTicket<(any)>), (any)>
public "setAndContinue"(arg0: $RawAnimation$$Type): $PlayState
public "getLimbSwingAmount"(): float
public "setControllerSpeed"(arg0: float): void
public "getAnimationTick"(): double
public "resetCurrentAnimation"(): void
public "isCurrentAnimation"(arg0: $RawAnimation$$Type): boolean
public "isCurrentAnimationStage"(arg0: StringJS): boolean
get "moving"(): boolean
get "limbSwing"(): float
get "animatable"(): T
get "controller"(): $AnimationController<(T)>
set "animation"(value: $RawAnimation$$Type)
get "partialTick"(): float
get "extraData"(): $Map<($DataTicket<(any)>), (any)>
set "andContinue"(value: $RawAnimation$$Type)
get "limbSwingAmount"(): float
set "controllerSpeed"(value: float)
get "animationTick"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationState$$Type<T> = ($AnimationState<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationState_<T> = $AnimationState$$Type<(T)>;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Item$CompileRenderLayers" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$GeoRenderEvent$Item, $GeoRenderEvent$Item$$Type} from "software.bernie.geckolib.event.GeoRenderEvent$Item"
import {$GeoRenderLayer, $GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import {$GeoItemRenderer, $GeoItemRenderer$$Type} from "software.bernie.geckolib.renderer.GeoItemRenderer"

export class $GeoRenderEvent$Item$CompileRenderLayers extends $GeoRenderEvent$Item {

constructor(arg0: $GeoItemRenderer$$Type<(any)>)

public "getRenderer"(): $GeoRenderer<(any)>
public "addLayer"(arg0: $GeoRenderLayer$$Type<(any)>): void
get "renderer"(): $GeoRenderer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Item$CompileRenderLayers$$Type = ($GeoRenderEvent$Item$CompileRenderLayers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$Item$CompileRenderLayers_ = $GeoRenderEvent$Item$CompileRenderLayers$$Type;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Block$CompileRenderLayers" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$GeoRenderEvent$Block, $GeoRenderEvent$Block$$Type} from "software.bernie.geckolib.event.GeoRenderEvent$Block"
import {$GeoBlockRenderer, $GeoBlockRenderer$$Type} from "software.bernie.geckolib.renderer.GeoBlockRenderer"
import {$GeoRenderLayer, $GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"

export class $GeoRenderEvent$Block$CompileRenderLayers extends $GeoRenderEvent$Block {

constructor(arg0: $GeoBlockRenderer$$Type<(any)>)

public "getRenderer"(): $GeoRenderer<(any)>
public "addLayer"(arg0: $GeoRenderLayer$$Type<(any)>): void
get "renderer"(): $GeoRenderer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Block$CompileRenderLayers$$Type = ($GeoRenderEvent$Block$CompileRenderLayers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$Block$CompileRenderLayers_ = $GeoRenderEvent$Block$CompileRenderLayers$$Type;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Entity$CompileRenderLayers" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$GeoRenderEvent$Entity, $GeoRenderEvent$Entity$$Type} from "software.bernie.geckolib.event.GeoRenderEvent$Entity"
import {$GeoEntityRenderer, $GeoEntityRenderer$$Type} from "software.bernie.geckolib.renderer.GeoEntityRenderer"
import {$GeoRenderLayer, $GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"

export class $GeoRenderEvent$Entity$CompileRenderLayers extends $GeoRenderEvent$Entity {

constructor(arg0: $GeoEntityRenderer$$Type<(any)>)

public "getRenderer"(): $GeoRenderer<(any)>
public "addLayer"(arg0: $GeoRenderLayer$$Type<(any)>): void
get "renderer"(): $GeoRenderer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Entity$CompileRenderLayers$$Type = ($GeoRenderEvent$Entity$CompileRenderLayers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$Entity$CompileRenderLayers_ = $GeoRenderEvent$Entity$CompileRenderLayers$$Type;
}}
declare module "software.bernie.geckolib.animation.keyframe.event.data.SoundKeyframeData" {
import {$KeyFrameData, $KeyFrameData$$Type} from "software.bernie.geckolib.animation.keyframe.event.data.KeyFrameData"

export class $SoundKeyframeData extends $KeyFrameData {

constructor(arg0: double, arg1: StringJS)

public "hashCode"(): integer
public "getSound"(): StringJS
get "sound"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundKeyframeData$$Type = ($SoundKeyframeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundKeyframeData_ = $SoundKeyframeData$$Type;
}}
declare module "software.bernie.geckolib.renderer.layer.GeoRenderLayer" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoModel, $GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderLayer<T extends $GeoAnimatable> {

constructor(arg0: $GeoRenderer$$Type<(T)>)

public "render"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "renderForBone"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "getGeoModel"(): $GeoModel<(T)>
public "preRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "getRenderer"(): $GeoRenderer<(T)>
public "getDefaultBakedModel"(arg0: T): $BakedGeoModel
get "geoModel"(): $GeoModel<(T)>
get "renderer"(): $GeoRenderer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderLayer$$Type<T> = ($GeoRenderLayer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderLayer_<T> = $GeoRenderLayer$$Type<(T)>;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Armor" {
import {$GeoRenderEvent, $GeoRenderEvent$$Type} from "software.bernie.geckolib.event.GeoRenderEvent"
import {$GeoArmorRenderer, $GeoArmorRenderer$$Type} from "software.bernie.geckolib.renderer.GeoArmorRenderer"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $GeoRenderEvent$Armor extends $Event implements $GeoRenderEvent {

constructor(arg0: $GeoArmorRenderer$$Type<(any)>)

public "getEntity"(): $Entity
public "getItemStack"(): $ItemStack
public "getRenderer"(): $GeoArmorRenderer<(any)>
public "getEquipmentSlot"(): $EquipmentSlot
get "entity"(): $Entity
get "itemStack"(): $ItemStack
get "renderer"(): $GeoArmorRenderer<(any)>
get "equipmentSlot"(): $EquipmentSlot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Armor$$Type = ($GeoRenderEvent$Armor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$Armor_ = $GeoRenderEvent$Armor$$Type;
}}
declare module "software.bernie.geckolib.animation.keyframe.event.CustomInstructionKeyframeEvent" {
import {$AnimationController, $AnimationController$$Type} from "software.bernie.geckolib.animation.AnimationController"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$CustomInstructionKeyframeData, $CustomInstructionKeyframeData$$Type} from "software.bernie.geckolib.animation.keyframe.event.data.CustomInstructionKeyframeData"
import {$KeyFrameEvent, $KeyFrameEvent$$Type} from "software.bernie.geckolib.animation.keyframe.event.KeyFrameEvent"

export class $CustomInstructionKeyframeEvent<T extends $GeoAnimatable> extends $KeyFrameEvent<(T), ($CustomInstructionKeyframeData)> {

constructor(arg0: T, arg1: double, arg2: $AnimationController$$Type<(T)>, arg3: $CustomInstructionKeyframeData$$Type)

public "getKeyframeData"(): $CustomInstructionKeyframeData
get "keyframeData"(): $CustomInstructionKeyframeData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomInstructionKeyframeEvent$$Type<T> = ($CustomInstructionKeyframeEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomInstructionKeyframeEvent_<T> = $CustomInstructionKeyframeEvent$$Type<(T)>;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Object" {
import {$GeoRenderEvent, $GeoRenderEvent$$Type} from "software.bernie.geckolib.event.GeoRenderEvent"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$GeoObjectRenderer, $GeoObjectRenderer$$Type} from "software.bernie.geckolib.renderer.GeoObjectRenderer"

export class $GeoRenderEvent$Object extends $Event implements $GeoRenderEvent {

constructor(arg0: $GeoObjectRenderer$$Type<(any)>)

public "getRenderer"(): $GeoObjectRenderer<(any)>
get "renderer"(): $GeoObjectRenderer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Object$$Type = ($GeoRenderEvent$Object);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$Object_ = $GeoRenderEvent$Object$$Type;
}}
declare module "software.bernie.geckolib.animation.AnimationController$SoundKeyframeHandler" {
import {$SoundKeyframeEvent, $SoundKeyframeEvent$$Type} from "software.bernie.geckolib.animation.keyframe.event.SoundKeyframeEvent"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"

export interface $AnimationController$SoundKeyframeHandler<A extends $GeoAnimatable> {

 "handle"(arg0: $SoundKeyframeEvent$$Type<(A)>): void

(arg0: $SoundKeyframeEvent<(A)>): void
}

export namespace $AnimationController$SoundKeyframeHandler {
const probejs$$marker: never
}
export class $AnimationController$SoundKeyframeHandler$$Static<A extends $GeoAnimatable> implements $AnimationController$SoundKeyframeHandler {


 "handle"(arg0: $SoundKeyframeEvent$$Type<(A)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$SoundKeyframeHandler$$Type<A> = ((arg0: $SoundKeyframeEvent<(A)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController$SoundKeyframeHandler_<A> = $AnimationController$SoundKeyframeHandler$$Type<(A)>;
}}
declare module "software.bernie.geckolib.animatable.SingletonGeoAnimatable" {
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$GeoRenderProvider, $GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$SerializableDataTicket, $SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$$Type} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $SingletonGeoAnimatable extends $GeoAnimatable {

 "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
 "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
 "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
 "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
 "getRenderProvider"(): any
 "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "animatableCacheOverride"(): $AnimatableInstanceCache
 "getTick"(arg0: any): double
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
 "getBoneResetTime"(): double
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
}

export namespace $SingletonGeoAnimatable {
function registerSyncedAnimatable(arg0: $GeoAnimatable$$Type): void
const probejs$$marker: never
}
export class $SingletonGeoAnimatable$$Static implements $SingletonGeoAnimatable {


 "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
 "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
 "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
 "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
 "getRenderProvider"(): any
 "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "animatableCacheOverride"(): $AnimatableInstanceCache
static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
 "getTick"(arg0: any): double
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
 "getBoneResetTime"(): double
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingletonGeoAnimatable$$Type = ($SingletonGeoAnimatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingletonGeoAnimatable_ = $SingletonGeoAnimatable$$Type;
}}
declare module "software.bernie.geckolib.animation.AnimatableManager" {
import {$AnimationController, $AnimationController$$Type} from "software.bernie.geckolib.animation.AnimationController"
import {$Map, $Map$$Type} from "java.util.Map"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$BoneSnapshot, $BoneSnapshot$$Type} from "software.bernie.geckolib.animation.state.BoneSnapshot"
import {$DataTicket, $DataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.DataTicket"

export class $AnimatableManager<T extends $GeoAnimatable> {

constructor(arg0: $GeoAnimatable$$Type)

public "getData"<D>(arg0: $DataTicket$$Type<(D)>): D
public "setData"<D>(arg0: $DataTicket$$Type<(D)>, arg1: D): void
public "startedAt"(arg0: double): void
public "isFirstTick"(): boolean
public "updatedAt"(arg0: double): void
public "getFirstTickTime"(): double
public "tryTriggerAnimation"(arg0: StringJS, arg1: StringJS): void
public "tryTriggerAnimation"(arg0: StringJS): void
public "stopTriggeredAnimation"(arg0: StringJS, arg1: StringJS): void
public "stopTriggeredAnimation"(arg0: StringJS): void
public "getLastUpdateTime"(): double
public "removeController"(arg0: StringJS): void
public "clearSnapshotCache"(): void
public "getBoneSnapshotCollection"(): $Map<(StringJS), ($BoneSnapshot)>
public "getAnimationControllers"(): $Map<(StringJS), ($AnimationController<(T)>)>
public "addController"(arg0: $AnimationController$$Type<(any)>): void
get "firstTick"(): boolean
get "firstTickTime"(): double
get "lastUpdateTime"(): double
get "boneSnapshotCollection"(): $Map<(StringJS), ($BoneSnapshot)>
get "animationControllers"(): $Map<(StringJS), ($AnimationController<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatableManager$$Type<T> = ($AnimatableManager<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatableManager_<T> = $AnimatableManager$$Type<(T)>;
}}
declare module "software.bernie.geckolib.animation.AnimationController$ParticleKeyframeHandler" {
import {$ParticleKeyframeEvent, $ParticleKeyframeEvent$$Type} from "software.bernie.geckolib.animation.keyframe.event.ParticleKeyframeEvent"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"

export interface $AnimationController$ParticleKeyframeHandler<A extends $GeoAnimatable> {

 "handle"(arg0: $ParticleKeyframeEvent$$Type<(A)>): void

(arg0: $ParticleKeyframeEvent<(A)>): void
}

export namespace $AnimationController$ParticleKeyframeHandler {
const probejs$$marker: never
}
export class $AnimationController$ParticleKeyframeHandler$$Static<A extends $GeoAnimatable> implements $AnimationController$ParticleKeyframeHandler {


 "handle"(arg0: $ParticleKeyframeEvent$$Type<(A)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$ParticleKeyframeHandler$$Type<A> = ((arg0: $ParticleKeyframeEvent<(A)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController$ParticleKeyframeHandler_<A> = $AnimationController$ParticleKeyframeHandler$$Type<(A)>;
}}
declare module "software.bernie.geckolib.animation.keyframe.event.SoundKeyframeEvent" {
import {$AnimationController, $AnimationController$$Type} from "software.bernie.geckolib.animation.AnimationController"
import {$SoundKeyframeData, $SoundKeyframeData$$Type} from "software.bernie.geckolib.animation.keyframe.event.data.SoundKeyframeData"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$KeyFrameEvent, $KeyFrameEvent$$Type} from "software.bernie.geckolib.animation.keyframe.event.KeyFrameEvent"

export class $SoundKeyframeEvent<T extends $GeoAnimatable> extends $KeyFrameEvent<(T), ($SoundKeyframeData)> {

constructor(arg0: T, arg1: double, arg2: $AnimationController$$Type<(T)>, arg3: $SoundKeyframeData$$Type)

public "getKeyframeData"(): $SoundKeyframeData
get "keyframeData"(): $SoundKeyframeData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundKeyframeEvent$$Type<T> = ($SoundKeyframeEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundKeyframeEvent_<T> = $SoundKeyframeEvent$$Type<(T)>;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Entity$Post" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoRenderEvent$Entity, $GeoRenderEvent$Entity$$Type} from "software.bernie.geckolib.event.GeoRenderEvent$Entity"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$GeoEntityRenderer, $GeoEntityRenderer$$Type} from "software.bernie.geckolib.renderer.GeoEntityRenderer"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$Entity$Post extends $GeoRenderEvent$Entity {

constructor(arg0: $GeoEntityRenderer$$Type<(any)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getRenderer"(): $GeoRenderer<(any)>
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "renderer"(): $GeoRenderer<(any)>
get "partialTick"(): float
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Entity$Post$$Type = ($GeoRenderEvent$Entity$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$Entity$Post_ = $GeoRenderEvent$Entity$Post$$Type;
}}
declare module "software.bernie.geckolib.renderer.layer.ItemArmorGeoLayer" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GeoRenderLayer, $GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $ItemArmorGeoLayer<T extends ($LivingEntity) & ($GeoAnimatable)> extends $GeoRenderLayer<(T)> {

constructor(arg0: $GeoRenderer$$Type<(T)>)

public "renderForBone"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "renderForBone"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "preRender"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "preRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemArmorGeoLayer$$Type<T> = ($ItemArmorGeoLayer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemArmorGeoLayer_<T> = $ItemArmorGeoLayer$$Type<(T)>;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Block$Pre" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoRenderEvent$Block, $GeoRenderEvent$Block$$Type} from "software.bernie.geckolib.event.GeoRenderEvent$Block"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$GeoBlockRenderer, $GeoBlockRenderer$$Type} from "software.bernie.geckolib.renderer.GeoBlockRenderer"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$Block$Pre extends $GeoRenderEvent$Block implements $ICancellableEvent {

constructor(arg0: $GeoBlockRenderer$$Type<(any)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getRenderer"(): $GeoRenderer<(any)>
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "renderer"(): $GeoRenderer<(any)>
get "partialTick"(): float
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Block$Pre$$Type = ($GeoRenderEvent$Block$Pre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$Block$Pre_ = $GeoRenderEvent$Block$Pre$$Type;
}}
declare module "software.bernie.geckolib.animatable.client.GeoRenderProvider" {
import {$HumanoidModel, $HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntityWithoutLevelRenderer, $BlockEntityWithoutLevelRenderer$$Type} from "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer"

export interface $GeoRenderProvider {

 "getGeoItemRenderer"(): $BlockEntityWithoutLevelRenderer
 "getGeoArmorRenderer"<T extends $LivingEntity>(arg0: T, arg1: $ItemStack$$Type, arg2: $EquipmentSlot$$Type, arg3: $HumanoidModel$$Type<(T)>): $HumanoidModel<(any)>
get "geoItemRenderer"(): $BlockEntityWithoutLevelRenderer
}

export namespace $GeoRenderProvider {
const DEFAULT: $GeoRenderProvider
function of(arg0: $ItemStack$$Type): $GeoRenderProvider
function of(arg0: $Item$$Type): $GeoRenderProvider
const probejs$$marker: never
}
export class $GeoRenderProvider$$Static implements $GeoRenderProvider {
static readonly "DEFAULT": $GeoRenderProvider


static "of"(arg0: $ItemStack$$Type): $GeoRenderProvider
static "of"(arg0: $Item$$Type): $GeoRenderProvider
 "getGeoItemRenderer"(): $BlockEntityWithoutLevelRenderer
 "getGeoArmorRenderer"<T extends $LivingEntity>(arg0: T, arg1: $ItemStack$$Type, arg2: $EquipmentSlot$$Type, arg3: $HumanoidModel$$Type<(T)>): $HumanoidModel<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderProvider$$Type = ($GeoRenderProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderProvider_ = $GeoRenderProvider$$Type;
}}
declare module "software.bernie.geckolib.animation.RawAnimation" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RawAnimation$Stage, $RawAnimation$Stage$$Type} from "software.bernie.geckolib.animation.RawAnimation$Stage"
import {$List, $List$$Type} from "java.util.List"
import {$Animation$LoopType, $Animation$LoopType$$Type} from "software.bernie.geckolib.animation.Animation$LoopType"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"

export class $RawAnimation {
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($RawAnimation)>


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"(arg0: $RawAnimation$$Type): $RawAnimation
public static "begin"(): $RawAnimation
public "then"(arg0: StringJS, arg1: $Animation$LoopType$$Type): $RawAnimation
public "thenWait"(arg0: integer): $RawAnimation
public "thenPlayXTimes"(arg0: StringJS, arg1: integer): $RawAnimation
public "getStageCount"(): integer
public "thenLoop"(arg0: StringJS): $RawAnimation
public "thenPlay"(arg0: StringJS): $RawAnimation
public "getAnimationStages"(): $List<($RawAnimation$Stage)>
public "thenPlayAndHold"(arg0: StringJS): $RawAnimation
get "stageCount"(): integer
get "animationStages"(): $List<($RawAnimation$Stage)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawAnimation$$Type = ($RawAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawAnimation_ = $RawAnimation$$Type;
}}
declare module "software.bernie.geckolib.animation.RawAnimation$Stage" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Animation$LoopType, $Animation$LoopType$$Type} from "software.bernie.geckolib.animation.Animation$LoopType"
import {$ByteBuf, $ByteBuf$$Type} from "io.netty.buffer.ByteBuf"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $RawAnimation$Stage extends $Record {
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($RawAnimation$Stage)>

constructor(arg0: StringJS, arg1: $Animation$LoopType$$Type)
constructor(animationName: StringJS, loopType: $Animation$LoopType$$Type, additionalTicks: integer)

public "loopType"(): $Animation$LoopType
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "animationName"(): StringJS
public "additionalTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RawAnimation$Stage$$Type = ({"animationName"?: StringJS, "loopType"?: $Animation$LoopType$$Type, "additionalTicks"?: integer}) | ([animationName?: StringJS, loopType?: $Animation$LoopType$$Type, additionalTicks?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RawAnimation$Stage_ = $RawAnimation$Stage$$Type;
}}
declare module "software.bernie.geckolib.animation.AnimationProcessor" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Queue, $Queue$$Type} from "java.util.Queue"
import {$RawAnimation, $RawAnimation$$Type} from "software.bernie.geckolib.animation.RawAnimation"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$GeoModel, $GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$AnimationState, $AnimationState$$Type} from "software.bernie.geckolib.animation.AnimationState"
import {$AnimatableManager, $AnimatableManager$$Type} from "software.bernie.geckolib.animation.AnimatableManager"
import {$AnimationProcessor$QueuedAnimation, $AnimationProcessor$QueuedAnimation$$Type} from "software.bernie.geckolib.animation.AnimationProcessor$QueuedAnimation"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $AnimationProcessor<T extends $GeoAnimatable> {
 "reloadAnimations": boolean

constructor(arg0: $GeoModel$$Type<(T)>)

public "setActiveModel"(arg0: $BakedGeoModel$$Type): void
public "tickAnimation"(arg0: T, arg1: $GeoModel$$Type<(T)>, arg2: $AnimatableManager$$Type<(T)>, arg3: double, arg4: $AnimationState$$Type<(T)>, arg5: boolean): void
public "getBone"(arg0: StringJS): $GeoBone
public "preAnimationSetup"(arg0: $AnimationState$$Type<(T)>, arg1: double): void
public "getRegisteredBones"(): $Collection<($GeoBone)>
public "registerGeoBone"(arg0: $GeoBone$$Type): void
public "buildAnimationQueue"(arg0: T, arg1: $RawAnimation$$Type): $Queue<($AnimationProcessor$QueuedAnimation)>
set "activeModel"(value: $BakedGeoModel$$Type)
get "registeredBones"(): $Collection<($GeoBone)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProcessor$$Type<T> = ($AnimationProcessor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationProcessor_<T> = $AnimationProcessor$$Type<(T)>;
}}
declare module "software.bernie.geckolib.animation.keyframe.KeyframeStack" {
import {$List, $List$$Type} from "java.util.List"
import {$Keyframe, $Keyframe$$Type} from "software.bernie.geckolib.animation.keyframe.Keyframe"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $KeyframeStack<T extends $Keyframe<(any)>> extends $Record {

constructor()
constructor(xKeyframes: $List$$Type<(T)>, yKeyframes: $List$$Type<(T)>, zKeyframes: $List$$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "from"<F extends $Keyframe<(any)>>(arg0: $KeyframeStack$$Type<(F)>): $KeyframeStack<(F)>
public "xKeyframes"(): $List<(T)>
public "yKeyframes"(): $List<(T)>
public "zKeyframes"(): $List<(T)>
public "getLastKeyframeTime"(): double
get "lastKeyframeTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyframeStack$$Type<T> = ({"xKeyframes"?: $List$$Type<(any)>, "yKeyframes"?: $List$$Type<(any)>, "zKeyframes"?: $List$$Type<(any)>}) | ([xKeyframes?: $List$$Type<(any)>, yKeyframes?: $List$$Type<(any)>, zKeyframes?: $List$$Type<(any)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyframeStack_<T> = $KeyframeStack$$Type<(T)>;
}}
declare module "software.bernie.geckolib.animatable.GeoItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$GeoRenderProvider, $GeoRenderProvider$$Type} from "software.bernie.geckolib.animatable.client.GeoRenderProvider"
import {$SingletonGeoAnimatable, $SingletonGeoAnimatable$$Type} from "software.bernie.geckolib.animatable.SingletonGeoAnimatable"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$SerializableDataTicket, $SerializableDataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.SerializableDataTicket"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$$Type} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $GeoItem extends $SingletonGeoAnimatable {

 "getTick"(arg0: any): double
 "isPerspectiveAware"(): boolean
 "animatableCacheOverride"(): $AnimatableInstanceCache
 "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
 "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
 "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
 "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
 "getRenderProvider"(): any
 "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
 "getBoneResetTime"(): double
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
get "perspectiveAware"(): boolean
get "renderProvider"(): any
get "boneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
}

export namespace $GeoItem {
function getId(arg0: $ItemStack$$Type): long
function getOrAssignId(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
function registerSyncedAnimatable(arg0: $GeoAnimatable$$Type): void
const probejs$$marker: never
}
export class $GeoItem$$Static implements $GeoItem {


static "getId"(arg0: $ItemStack$$Type): long
static "getOrAssignId"(arg0: $ItemStack$$Type, arg1: $ServerLevel$$Type): long
 "getTick"(arg0: any): double
 "isPerspectiveAware"(): boolean
 "animatableCacheOverride"(): $AnimatableInstanceCache
static "registerSyncedAnimatable"(arg0: $GeoAnimatable$$Type): void
 "triggerAnim"<D>(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>, arg2: D, arg3: $Entity$$Type): void
 "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$$Type<(D)>): D
 "setAnimData"<D>(arg0: $Entity$$Type, arg1: long, arg2: $SerializableDataTicket$$Type<(D)>, arg3: D): void
 "stopTriggeredAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "createGeoRenderer"(arg0: $Consumer$$Type<($GeoRenderProvider)>): void
 "getRenderProvider"(): any
 "triggerArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "stopTriggeredArmorAnim"(arg0: $Entity$$Type, arg1: long, arg2: StringJS, arg3: StringJS): void
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
 "getBoneResetTime"(): double
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoItem$$Type = ($GeoItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoItem_ = $GeoItem$$Type;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Item$Pre" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$GeoRenderEvent$Item, $GeoRenderEvent$Item$$Type} from "software.bernie.geckolib.event.GeoRenderEvent$Item"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$GeoItemRenderer, $GeoItemRenderer$$Type} from "software.bernie.geckolib.renderer.GeoItemRenderer"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$Item$Pre extends $GeoRenderEvent$Item implements $ICancellableEvent {

constructor(arg0: $GeoItemRenderer$$Type<(any)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getRenderer"(): $GeoRenderer<(any)>
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "renderer"(): $GeoRenderer<(any)>
get "partialTick"(): float
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Item$Pre$$Type = ($GeoRenderEvent$Item$Pre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$Item$Pre_ = $GeoRenderEvent$Item$Pre$$Type;
}}
declare module "software.bernie.geckolib.animation.keyframe.event.KeyFrameEvent" {
import {$AnimationController, $AnimationController$$Type} from "software.bernie.geckolib.animation.AnimationController"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$KeyFrameData, $KeyFrameData$$Type} from "software.bernie.geckolib.animation.keyframe.event.data.KeyFrameData"

export class $KeyFrameEvent<T extends $GeoAnimatable, E extends $KeyFrameData> {

constructor(arg0: T, arg1: double, arg2: $AnimationController$$Type<(T)>, arg3: E)

public "getAnimatable"(): T
public "getController"(): $AnimationController<(T)>
public "getKeyframeData"(): E
public "getAnimationTick"(): double
get "animatable"(): T
get "controller"(): $AnimationController<(T)>
get "keyframeData"(): E
get "animationTick"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyFrameEvent$$Type<T, E> = ($KeyFrameEvent<(T), (E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyFrameEvent_<T, E> = $KeyFrameEvent$$Type<(T), (E)>;
}}
declare module "software.bernie.geckolib.animation.keyframe.event.ParticleKeyframeEvent" {
import {$AnimationController, $AnimationController$$Type} from "software.bernie.geckolib.animation.AnimationController"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$ParticleKeyframeData, $ParticleKeyframeData$$Type} from "software.bernie.geckolib.animation.keyframe.event.data.ParticleKeyframeData"
import {$KeyFrameEvent, $KeyFrameEvent$$Type} from "software.bernie.geckolib.animation.keyframe.event.KeyFrameEvent"

export class $ParticleKeyframeEvent<T extends $GeoAnimatable> extends $KeyFrameEvent<(T), ($ParticleKeyframeData)> {

constructor(arg0: T, arg1: double, arg2: $AnimationController$$Type<(T)>, arg3: $ParticleKeyframeData$$Type)

public "getKeyframeData"(): $ParticleKeyframeData
get "keyframeData"(): $ParticleKeyframeData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleKeyframeEvent$$Type<T> = ($ParticleKeyframeEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleKeyframeEvent_<T> = $ParticleKeyframeEvent$$Type<(T)>;
}}
declare module "software.bernie.geckolib.cache.object.GeoVertex" {
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $GeoVertex extends $Record {

constructor(arg0: double, arg1: double, arg2: double)
constructor(position: $Vector3f$$Type, texU: float, texV: float)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "position"(): $Vector3f
public "texU"(): float
public "texV"(): float
public "withUVs"(arg0: float, arg1: float): $GeoVertex
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoVertex$$Type = ({"texU"?: float, "texV"?: float, "position"?: $Vector3f$$Type}) | ([texU?: float, texV?: float, position?: $Vector3f$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoVertex_ = $GeoVertex$$Type;
}}
declare module "software.bernie.geckolib.model.GeoModel" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$Animation, $Animation$$Type} from "software.bernie.geckolib.animation.Animation"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$AnimationProcessor, $AnimationProcessor$$Type} from "software.bernie.geckolib.animation.AnimationProcessor"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$DataTicket, $DataTicket$$Type} from "software.bernie.geckolib.constant.dataticket.DataTicket"
import {$AnimationState, $AnimationState$$Type} from "software.bernie.geckolib.animation.AnimationState"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $GeoModel<T extends $GeoAnimatable> {

constructor()

public "getAnimation"(arg0: T, arg1: StringJS): $Animation
public "getRenderType"(arg0: T, arg1: $ResourceLocation$$Type): $RenderType
public "getBone"(arg0: StringJS): $Optional<($GeoBone)>
public "getBakedModel"(arg0: $ResourceLocation$$Type): $BakedGeoModel
public "crashIfBoneMissing"(): boolean
public "setCustomAnimations"(arg0: T, arg1: long, arg2: $AnimationState$$Type<(T)>): void
public "addAdditionalStateData"(arg0: T, arg1: long, arg2: $BiConsumer$$Type<($DataTicket<(T)>), (T)>): void
public "handleAnimations"(arg0: T, arg1: long, arg2: $AnimationState$$Type<(T)>, arg3: float): void
public "applyMolangQueries"(arg0: $AnimationState$$Type<(T)>, arg1: double): void
public "getAnimationProcessor"(): $AnimationProcessor<(T)>
public "getAnimationResource"(arg0: T): $ResourceLocation
public "getModelResource"(arg0: T, arg1: $GeoRenderer$$Type<(T)>): $ResourceLocation
/**
 * 
 * @deprecated
 */
public "getModelResource"(arg0: T): $ResourceLocation
/**
 * 
 * @deprecated
 */
public "getTextureResource"(arg0: T): $ResourceLocation
public "getTextureResource"(arg0: T, arg1: $GeoRenderer$$Type<(T)>): $ResourceLocation
public "getAnimationResourceFallbacks"(arg0: T): ($ResourceLocation)[]
get "animationProcessor"(): $AnimationProcessor<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoModel$$Type<T> = ($GeoModel<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoModel_<T> = $GeoModel$$Type<(T)>;
}}
declare module "software.bernie.geckolib.renderer.GeoRenderer" {
import {$List, $List$$Type} from "java.util.List"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$GeoRenderLayer, $GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GeoQuad, $GeoQuad$$Type} from "software.bernie.geckolib.cache.object.GeoQuad"
import {$GeoModel, $GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$Color, $Color$$Type} from "software.bernie.geckolib.util.Color"
import {$GeoCube, $GeoCube$$Type} from "software.bernie.geckolib.cache.object.GeoCube"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export interface $GeoRenderer<T extends $GeoAnimatable> {

 "getRenderType"(arg0: T, arg1: $ResourceLocation$$Type, arg2: $MultiBufferSource$$Type, arg3: float): $RenderType
 "getGeoModel"(): $GeoModel<(T)>
 "preRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
 "getRenderColor"(arg0: T, arg1: float, arg2: integer): $Color
 "actuallyRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
 "renderFinal"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: integer, arg7: integer, arg8: integer): void
 "getAnimatable"(): T
 "getInstanceId"(arg0: T): long
 "defaultRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: float, arg7: integer): void
 "reRender"(arg0: $BakedGeoModel$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: T, arg4: $RenderType$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
 "postRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
 "renderCube"(arg0: $PoseStack$$Type, arg1: $GeoCube$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
 "getPackedOverlay"(arg0: T, arg1: float, arg2: float): integer
 "firePreRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): boolean
 "preApplyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
 "applyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
 "firePostRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): void
 "doPostRenderCleanup"(): void
 "renderRecursively"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
 "checkAndRefreshBuffer"(arg0: boolean, arg1: $VertexConsumer$$Type, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type): $VertexConsumer
 "renderCubesOfBone"(arg0: $PoseStack$$Type, arg1: $GeoBone$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
 "renderChildBones"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
 "createVerticesOfQuad"(arg0: $GeoQuad$$Type, arg1: $Matrix4f$$Type, arg2: $Vector3f$$Type, arg3: $VertexConsumer$$Type, arg4: integer, arg5: integer, arg6: integer): void
 "getMotionAnimThreshold"(arg0: T): float
 "scaleModelForRender"(arg0: float, arg1: float, arg2: $PoseStack$$Type, arg3: T, arg4: $BakedGeoModel$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer): void
 "getTextureLocation"(arg0: T): $ResourceLocation
 "getRenderLayers"(): $List<($GeoRenderLayer<(T)>)>
 "updateAnimatedTextureFrame"(arg0: T): void
 "applyRenderLayersForBone"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
 "fireCompileRenderLayersEvent"(): void
get "geoModel"(): $GeoModel<(T)>
get "animatable"(): T
get "renderLayers"(): $List<($GeoRenderLayer<(T)>)>
}

export namespace $GeoRenderer {
const probejs$$marker: never
}
export class $GeoRenderer$$Static<T extends $GeoAnimatable> implements $GeoRenderer {


 "getRenderType"(arg0: T, arg1: $ResourceLocation$$Type, arg2: $MultiBufferSource$$Type, arg3: float): $RenderType
 "getGeoModel"(): $GeoModel<(T)>
 "preRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
 "getRenderColor"(arg0: T, arg1: float, arg2: integer): $Color
 "actuallyRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
 "renderFinal"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: integer, arg7: integer, arg8: integer): void
 "getAnimatable"(): T
 "getInstanceId"(arg0: T): long
 "defaultRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: float, arg7: integer): void
 "reRender"(arg0: $BakedGeoModel$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: T, arg4: $RenderType$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
 "postRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
 "renderCube"(arg0: $PoseStack$$Type, arg1: $GeoCube$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
 "getPackedOverlay"(arg0: T, arg1: float, arg2: float): integer
 "firePreRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): boolean
 "preApplyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
 "applyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
 "firePostRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): void
 "doPostRenderCleanup"(): void
 "renderRecursively"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
 "checkAndRefreshBuffer"(arg0: boolean, arg1: $VertexConsumer$$Type, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type): $VertexConsumer
 "renderCubesOfBone"(arg0: $PoseStack$$Type, arg1: $GeoBone$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
 "renderChildBones"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
 "createVerticesOfQuad"(arg0: $GeoQuad$$Type, arg1: $Matrix4f$$Type, arg2: $Vector3f$$Type, arg3: $VertexConsumer$$Type, arg4: integer, arg5: integer, arg6: integer): void
 "getMotionAnimThreshold"(arg0: T): float
 "scaleModelForRender"(arg0: float, arg1: float, arg2: $PoseStack$$Type, arg3: T, arg4: $BakedGeoModel$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer): void
 "getTextureLocation"(arg0: T): $ResourceLocation
 "getRenderLayers"(): $List<($GeoRenderLayer<(T)>)>
 "updateAnimatedTextureFrame"(arg0: T): void
 "applyRenderLayersForBone"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
 "fireCompileRenderLayersEvent"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderer$$Type<T> = ($GeoRenderer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderer_<T> = $GeoRenderer$$Type<(T)>;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Block" {
import {$GeoRenderEvent, $GeoRenderEvent$$Type} from "software.bernie.geckolib.event.GeoRenderEvent"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$GeoBlockRenderer, $GeoBlockRenderer$$Type} from "software.bernie.geckolib.renderer.GeoBlockRenderer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $GeoRenderEvent$Block extends $Event implements $GeoRenderEvent {

constructor(arg0: $GeoBlockRenderer$$Type<(any)>)

public "getBlockEntity"(): $BlockEntity
public "getRenderer"(): $GeoBlockRenderer<(any)>
get "blockEntity"(): $BlockEntity
get "renderer"(): $GeoBlockRenderer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Block$$Type = ($GeoRenderEvent$Block);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$Block_ = $GeoRenderEvent$Block$$Type;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Block$Post" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoRenderEvent$Block, $GeoRenderEvent$Block$$Type} from "software.bernie.geckolib.event.GeoRenderEvent$Block"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$GeoBlockRenderer, $GeoBlockRenderer$$Type} from "software.bernie.geckolib.renderer.GeoBlockRenderer"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$Block$Post extends $GeoRenderEvent$Block {

constructor(arg0: $GeoBlockRenderer$$Type<(any)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getRenderer"(): $GeoRenderer<(any)>
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "renderer"(): $GeoRenderer<(any)>
get "partialTick"(): float
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Block$Post$$Type = ($GeoRenderEvent$Block$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$Block$Post_ = $GeoRenderEvent$Block$Post$$Type;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Armor$Pre" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$GeoArmorRenderer, $GeoArmorRenderer$$Type} from "software.bernie.geckolib.renderer.GeoArmorRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoRenderEvent$Armor, $GeoRenderEvent$Armor$$Type} from "software.bernie.geckolib.event.GeoRenderEvent$Armor"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"

export class $GeoRenderEvent$Armor$Pre extends $GeoRenderEvent$Armor implements $ICancellableEvent {

constructor(arg0: $GeoArmorRenderer$$Type<(any)>, arg1: $PoseStack$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: float, arg5: integer)

public "getModel"(): $BakedGeoModel
public "getPackedLight"(): integer
public "getRenderer"(): $GeoRenderer<(any)>
public "getPartialTick"(): float
public "getPoseStack"(): $PoseStack
public "getBufferSource"(): $MultiBufferSource
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "model"(): $BakedGeoModel
get "packedLight"(): integer
get "renderer"(): $GeoRenderer<(any)>
get "partialTick"(): float
get "poseStack"(): $PoseStack
get "bufferSource"(): $MultiBufferSource
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Armor$Pre$$Type = ($GeoRenderEvent$Armor$Pre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$Armor$Pre_ = $GeoRenderEvent$Armor$Pre$$Type;
}}
declare module "software.bernie.geckolib.animation.keyframe.Keyframe" {
import {$List, $List$$Type} from "java.util.List"
import {$EasingType, $EasingType$$Type} from "software.bernie.geckolib.animation.EasingType"
import {$MathValue, $MathValue$$Type} from "software.bernie.geckolib.loading.math.MathValue"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Keyframe<T extends $MathValue> extends $Record {

constructor(arg0: double, arg1: T, arg2: T)
constructor(arg0: double, arg1: T, arg2: T, arg3: $EasingType$$Type)
constructor(length: double, startValue: T, endValue: T, easingType: $EasingType$$Type, easingArgs: $List$$Type<(T)>)

public "startValue"(): T
public "endValue"(): T
public "equals"(arg0: any): boolean
public "length"(): double
public "toString"(): StringJS
public "hashCode"(): integer
public "easingType"(): $EasingType
public "easingArgs"(): $List<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Keyframe$$Type<T> = ({"startValue"?: any, "length"?: double, "endValue"?: any, "easingType"?: $EasingType$$Type, "easingArgs"?: $List$$Type<(any)>}) | ([startValue?: any, length?: double, endValue?: any, easingType?: $EasingType$$Type, easingArgs?: $List$$Type<(any)>]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Keyframe_<T> = $Keyframe$$Type<(T)>;
}}
declare module "software.bernie.geckolib.renderer.GeoArmorRenderer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List, $List$$Type} from "java.util.List"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"
import {$TwoHandedItemAnimation, $TwoHandedItemAnimation$$Type} from "net.joefoxe.hexerei.client.renderer.TwoHandedItemAnimation"
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$Color, $Color$$Type} from "software.bernie.geckolib.util.Color"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$GeoCube, $GeoCube$$Type} from "software.bernie.geckolib.cache.object.GeoCube"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"
import {$HumanoidModel$ArmPose, $HumanoidModel$ArmPose$$Type} from "net.minecraft.client.model.HumanoidModel$ArmPose"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$GeoRenderLayer, $GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import {$GeoItem, $GeoItem$$Type} from "software.bernie.geckolib.animatable.GeoItem"
import {$HumanoidModel, $HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$GeoQuad, $GeoQuad$$Type} from "software.bernie.geckolib.cache.object.GeoQuad"
import {$GeoModel, $GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $GeoArmorRenderer<T extends ($Item) & ($GeoItem)> extends $HumanoidModel<(any)> implements $GeoRenderer<(T)> {
readonly "scaleHead": boolean
 "young": boolean
readonly "rightArm": $ModelPart
static readonly "OVERLAY_SCALE": float
readonly "leftLeg": $ModelPart
 "riding": boolean
readonly "body": $ModelPart
 "swimAmount": float
readonly "head": $ModelPart
 "twoHanded": $TwoHandedItemAnimation
readonly "leftArm": $ModelPart
readonly "babyYHeadOffset": float
static readonly "TOOT_HORN_YROT_BASE": float
readonly "hat": $ModelPart
readonly "bodyYOffset": float
static readonly "TOOT_HORN_XROT_BASE": float
 "leftArmPose": $HumanoidModel$ArmPose
 "attackTime": float
readonly "babyZHeadOffset": float
readonly "babyHeadScale": float
static readonly "LEGGINGS_OVERLAY_SCALE": float
static readonly "HAT_OVERLAY_SCALE": float
 "crouching": boolean
readonly "rightLeg": $ModelPart
readonly "babyBodyScale": float
 "rightArmPose": $HumanoidModel$ArmPose

constructor<I extends T>(arg0: I)
constructor(arg0: $GeoModel$$Type<(T)>)

public "getCurrentEntity"(): $Entity
public "getRenderType"(arg0: T, arg1: $ResourceLocation$$Type, arg2: $MultiBufferSource$$Type, arg3: float): $RenderType
public "getRenderType"(arg0: $GeoAnimatable$$Type, arg1: $ResourceLocation$$Type, arg2: $MultiBufferSource$$Type, arg3: float): $RenderType
public "getHeadBone"(arg0: $GeoModel$$Type<(T)>): $GeoBone
public "getBodyBone"(arg0: $GeoModel$$Type<(T)>): $GeoBone
public "getLeftArmBone"(arg0: $GeoModel$$Type<(T)>): $GeoBone
public "getLeftLegBone"(arg0: $GeoModel$$Type<(T)>): $GeoBone
/**
 * 
 * @deprecated
 */
public "prepForRender"(arg0: $Entity$$Type, arg1: $ItemStack$$Type, arg2: $EquipmentSlot$$Type, arg3: $HumanoidModel$$Type<(any)>): void
public "prepForRender"(arg0: $Entity$$Type, arg1: $ItemStack$$Type, arg2: $EquipmentSlot$$Type, arg3: $HumanoidModel$$Type<(any)>, arg4: $MultiBufferSource$$Type, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float): void
public "getCurrentSlot"(): $EquipmentSlot
public "getGeoModel"(): $GeoModel<(T)>
public "preRender"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "preRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "getRenderColor"(arg0: $GeoAnimatable$$Type, arg1: float, arg2: integer): $Color
public "getRenderColor"(arg0: T, arg1: float, arg2: integer): $Color
public "actuallyRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "actuallyRender"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "getAnimatable"(): $GeoAnimatable
public "getInstanceId"(arg0: T): long
public "getInstanceId"(arg0: $GeoAnimatable$$Type): long
public "withScale"(arg0: float, arg1: float): $GeoArmorRenderer<(T)>
public "withScale"(arg0: float): $GeoArmorRenderer<(T)>
public "addRenderLayer"(arg0: $GeoRenderLayer$$Type<(T)>): $GeoArmorRenderer<(T)>
public "setAllVisible"(arg0: boolean): void
public "renderToBuffer"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: integer, arg3: integer, arg4: integer): void
public "firePreRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): boolean
public "firePostRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): void
public "doPostRenderCleanup"(): void
public "renderRecursively"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "renderRecursively"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "getCurrentStack"(): $ItemStack
public "getRenderLayers"(): $List<($GeoRenderLayer<(T)>)>
public "scaleModelForBaby"(arg0: $PoseStack$$Type, arg1: T, arg2: float, arg3: boolean): void
public "getRightArmBone"(arg0: $GeoModel$$Type<(T)>): $GeoBone
public "getRightLegBone"(arg0: $GeoModel$$Type<(T)>): $GeoBone
public "getRightBootBone"(arg0: $GeoModel$$Type<(T)>): $GeoBone
public "getLeftBootBone"(arg0: $GeoModel$$Type<(T)>): $GeoBone
public "updateAnimatedTextureFrame"(arg0: $GeoAnimatable$$Type): void
public "updateAnimatedTextureFrame"(arg0: T): void
public "fireCompileRenderLayersEvent"(): void
/**
 * 
 * @deprecated
 */
public "doArmourPostRenderCleanup"(): void
public "applyBoneVisibilityByPart"(arg0: $EquipmentSlot$$Type, arg1: $ModelPart$$Type, arg2: $HumanoidModel$$Type<(any)>): void
public "renderFinal"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: integer, arg7: integer, arg8: integer): void
public "defaultRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: float, arg7: integer): void
public "reRender"(arg0: $BakedGeoModel$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: T, arg4: $RenderType$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "postRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "renderCube"(arg0: $PoseStack$$Type, arg1: $GeoCube$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "getPackedOverlay"(arg0: T, arg1: float, arg2: float): integer
public "preApplyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "applyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "checkAndRefreshBuffer"(arg0: boolean, arg1: $VertexConsumer$$Type, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type): $VertexConsumer
public "renderCubesOfBone"(arg0: $PoseStack$$Type, arg1: $GeoBone$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "renderChildBones"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "createVerticesOfQuad"(arg0: $GeoQuad$$Type, arg1: $Matrix4f$$Type, arg2: $Vector3f$$Type, arg3: $VertexConsumer$$Type, arg4: integer, arg5: integer, arg6: integer): void
public "getMotionAnimThreshold"(arg0: T): float
public "scaleModelForRender"(arg0: float, arg1: float, arg2: $PoseStack$$Type, arg3: T, arg4: $BakedGeoModel$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer): void
public "getTextureLocation"(arg0: T): $ResourceLocation
public "applyRenderLayersForBone"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
get "currentEntity"(): $Entity
get "currentSlot"(): $EquipmentSlot
get "geoModel"(): $GeoModel<(T)>
get "animatable"(): $GeoAnimatable
set "allVisible"(value: boolean)
get "currentStack"(): $ItemStack
get "renderLayers"(): $List<($GeoRenderLayer<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoArmorRenderer$$Type<T> = ($GeoArmorRenderer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoArmorRenderer_<T> = $GeoArmorRenderer$$Type<(T)>;
}}
declare module "software.bernie.geckolib.renderer.GeoObjectRenderer" {
import {$List, $List$$Type} from "java.util.List"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$GeoRenderLayer, $GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoQuad, $GeoQuad$$Type} from "software.bernie.geckolib.cache.object.GeoQuad"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$GeoModel, $GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$Color, $Color$$Type} from "software.bernie.geckolib.util.Color"
import {$GeoCube, $GeoCube$$Type} from "software.bernie.geckolib.cache.object.GeoCube"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $GeoObjectRenderer<T extends $GeoAnimatable> implements $GeoRenderer<(T)> {

constructor(arg0: $GeoModel$$Type<(T)>)

public "render"(arg0: $PoseStack$$Type, arg1: T, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type, arg4: $VertexConsumer$$Type, arg5: integer, arg6: float): void
public "getGeoModel"(): $GeoModel<(T)>
public "preRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "actuallyRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "getAnimatable"(): T
public "withScale"(arg0: float): $GeoObjectRenderer<(T)>
public "withScale"(arg0: float, arg1: float): $GeoObjectRenderer<(T)>
public "addRenderLayer"(arg0: $GeoRenderLayer$$Type<(T)>): $GeoObjectRenderer<(T)>
public "firePreRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): boolean
public "firePostRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): void
public "doPostRenderCleanup"(): void
public "renderRecursively"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "getTextureLocation"(arg0: T): $ResourceLocation
public "getRenderLayers"(): $List<($GeoRenderLayer<(T)>)>
public "updateAnimatedTextureFrame"(arg0: T): void
public "fireCompileRenderLayersEvent"(): void
public "getRenderType"(arg0: T, arg1: $ResourceLocation$$Type, arg2: $MultiBufferSource$$Type, arg3: float): $RenderType
public "getRenderColor"(arg0: T, arg1: float, arg2: integer): $Color
public "renderFinal"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: integer, arg7: integer, arg8: integer): void
public "getInstanceId"(arg0: T): long
public "defaultRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: float, arg7: integer): void
public "reRender"(arg0: $BakedGeoModel$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: T, arg4: $RenderType$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "postRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "renderCube"(arg0: $PoseStack$$Type, arg1: $GeoCube$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "getPackedOverlay"(arg0: T, arg1: float, arg2: float): integer
public "preApplyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "applyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "checkAndRefreshBuffer"(arg0: boolean, arg1: $VertexConsumer$$Type, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type): $VertexConsumer
public "renderCubesOfBone"(arg0: $PoseStack$$Type, arg1: $GeoBone$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "renderChildBones"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "createVerticesOfQuad"(arg0: $GeoQuad$$Type, arg1: $Matrix4f$$Type, arg2: $Vector3f$$Type, arg3: $VertexConsumer$$Type, arg4: integer, arg5: integer, arg6: integer): void
public "getMotionAnimThreshold"(arg0: T): float
public "scaleModelForRender"(arg0: float, arg1: float, arg2: $PoseStack$$Type, arg3: T, arg4: $BakedGeoModel$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer): void
public "applyRenderLayersForBone"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
get "geoModel"(): $GeoModel<(T)>
get "animatable"(): T
get "renderLayers"(): $List<($GeoRenderLayer<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoObjectRenderer$$Type<T> = ($GeoObjectRenderer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoObjectRenderer_<T> = $GeoObjectRenderer$$Type<(T)>;
}}
declare module "software.bernie.geckolib.animation.EasingType" {
import {$AnimationPoint, $AnimationPoint$$Type} from "software.bernie.geckolib.animation.keyframe.AnimationPoint"
import {$Double2DoubleFunction, $Double2DoubleFunction$$Type} from "it.unimi.dsi.fastutil.doubles.Double2DoubleFunction"
import {$Map, $Map$$Type} from "java.util.Map"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"

export interface $EasingType {

 "apply"(arg0: $AnimationPoint$$Type, arg1: double, arg2: double): double
 "apply"(arg0: $AnimationPoint$$Type): double
 "buildTransformer"(arg0: double): $Double2DoubleFunction

(arg0: double): $Double2DoubleFunction$$Type
}

export namespace $EasingType {
const EASE_OUT_QUAD: $EasingType
const EASE_OUT_SINE: $EasingType
const CATMULLROM: $EasingType
const EASE_OUT_ELASTIC: $EasingType
const EASE_OUT_QUART: $EasingType
const EASE_IN_OUT_QUAD: $EasingType
const EASE_IN_ELASTIC: $EasingType
const EASE_IN_CUBIC: $EasingType
const EASE_IN_QUINT: $EasingType
const EASE_IN_OUT_SINE: $EasingType
const EASE_IN_OUT_CIRC: $EasingType
const EASE_IN_EXPO: $EasingType
const EASE_OUT_CIRC: $EasingType
const EASE_IN_QUART: $EasingType
const EASE_OUT_CUBIC: $EasingType
const EASE_IN_OUT_BOUNCE: $EasingType
const EASE_IN_OUT_CUBIC: $EasingType
const EASE_IN_OUT_EXPO: $EasingType
const EASING_TYPES: $Map<(StringJS), ($EasingType)>
const EASE_OUT_BACK: $EasingType
const EASE_IN_BOUNCE: $EasingType
const EASE_IN_OUT_BACK: $EasingType
const STEP: $EasingType
const EASE_IN_OUT_QUINT: $EasingType
const EASE_IN_OUT_ELASTIC: $EasingType
const EASE_IN_BACK: $EasingType
const EASE_OUT_BOUNCE: $EasingType
const EASE_IN_SINE: $EasingType
const EASE_IN_QUAD: $EasingType
const EASE_OUT_EXPO: $EasingType
const EASE_OUT_QUINT: $EasingType
const LINEAR: $EasingType
const EASE_IN_OUT_QUART: $EasingType
const EASE_IN_CIRC: $EasingType
function step(arg0: double): $Double2DoubleFunction
function back(arg0: double): $Double2DoubleFunction
function pow(arg0: double): $Double2DoubleFunction
function exp(arg0: double): double
function register(arg0: StringJS, arg1: $EasingType$$Type): $EasingType
function bounce(arg0: double): $Double2DoubleFunction
function linear(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
function linear(arg0: double): double
function fromJson(arg0: $JsonElement$$Type): $EasingType
function fromString(arg0: StringJS): $EasingType
function circle(arg0: double): double
function elastic(arg0: double): $Double2DoubleFunction
function lerpWithOverride(arg0: $AnimationPoint$$Type, arg1: $EasingType$$Type): double
function easeIn(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
function sine(arg0: double): double
function cubic(arg0: double): double
function easeInOut(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
function easeOut(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
function stepPositive(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
function quadratic(arg0: double): double
function catmullRom(arg0: double): double
function stepNonNegative(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
const probejs$$marker: never
}
export class $EasingType$$Static implements $EasingType {
static readonly "EASE_OUT_QUAD": $EasingType
static readonly "EASE_OUT_SINE": $EasingType
static readonly "CATMULLROM": $EasingType
static readonly "EASE_OUT_ELASTIC": $EasingType
static readonly "EASE_OUT_QUART": $EasingType
static readonly "EASE_IN_OUT_QUAD": $EasingType
static readonly "EASE_IN_ELASTIC": $EasingType
static readonly "EASE_IN_CUBIC": $EasingType
static readonly "EASE_IN_QUINT": $EasingType
static readonly "EASE_IN_OUT_SINE": $EasingType
static readonly "EASE_IN_OUT_CIRC": $EasingType
static readonly "EASE_IN_EXPO": $EasingType
static readonly "EASE_OUT_CIRC": $EasingType
static readonly "EASE_IN_QUART": $EasingType
static readonly "EASE_OUT_CUBIC": $EasingType
static readonly "EASE_IN_OUT_BOUNCE": $EasingType
static readonly "EASE_IN_OUT_CUBIC": $EasingType
static readonly "EASE_IN_OUT_EXPO": $EasingType
static readonly "EASING_TYPES": $Map<(StringJS), ($EasingType)>
static readonly "EASE_OUT_BACK": $EasingType
static readonly "EASE_IN_BOUNCE": $EasingType
static readonly "EASE_IN_OUT_BACK": $EasingType
static readonly "STEP": $EasingType
static readonly "EASE_IN_OUT_QUINT": $EasingType
static readonly "EASE_IN_OUT_ELASTIC": $EasingType
static readonly "EASE_IN_BACK": $EasingType
static readonly "EASE_OUT_BOUNCE": $EasingType
static readonly "EASE_IN_SINE": $EasingType
static readonly "EASE_IN_QUAD": $EasingType
static readonly "EASE_OUT_EXPO": $EasingType
static readonly "EASE_OUT_QUINT": $EasingType
static readonly "LINEAR": $EasingType
static readonly "EASE_IN_OUT_QUART": $EasingType
static readonly "EASE_IN_CIRC": $EasingType


static "step"(arg0: double): $Double2DoubleFunction
static "back"(arg0: double): $Double2DoubleFunction
static "pow"(arg0: double): $Double2DoubleFunction
static "exp"(arg0: double): double
 "apply"(arg0: $AnimationPoint$$Type, arg1: double, arg2: double): double
 "apply"(arg0: $AnimationPoint$$Type): double
static "register"(arg0: StringJS, arg1: $EasingType$$Type): $EasingType
static "bounce"(arg0: double): $Double2DoubleFunction
static "linear"(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
static "linear"(arg0: double): double
static "fromJson"(arg0: $JsonElement$$Type): $EasingType
static "fromString"(arg0: StringJS): $EasingType
static "circle"(arg0: double): double
static "elastic"(arg0: double): $Double2DoubleFunction
static "lerpWithOverride"(arg0: $AnimationPoint$$Type, arg1: $EasingType$$Type): double
static "easeIn"(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
static "sine"(arg0: double): double
static "cubic"(arg0: double): double
static "easeInOut"(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
static "easeOut"(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
static "stepPositive"(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
static "quadratic"(arg0: double): double
static "catmullRom"(arg0: double): double
 "buildTransformer"(arg0: double): $Double2DoubleFunction
static "stepNonNegative"(arg0: $Double2DoubleFunction$$Type): $Double2DoubleFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EasingType$$Type = ((arg0: double) => $Double2DoubleFunction$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EasingType_ = $EasingType$$Type;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Item" {
import {$GeoRenderEvent, $GeoRenderEvent$$Type} from "software.bernie.geckolib.event.GeoRenderEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$GeoItemRenderer, $GeoItemRenderer$$Type} from "software.bernie.geckolib.renderer.GeoItemRenderer"

export class $GeoRenderEvent$Item extends $Event implements $GeoRenderEvent {

constructor(arg0: $GeoItemRenderer$$Type<(any)>)

public "getItemStack"(): $ItemStack
public "getRenderer"(): $GeoItemRenderer<(any)>
get "itemStack"(): $ItemStack
get "renderer"(): $GeoItemRenderer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Item$$Type = ($GeoRenderEvent$Item);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$Item_ = $GeoRenderEvent$Item$$Type;
}}
declare module "software.bernie.geckolib.animatable.GeoAnimatable" {
import {$AnimatableInstanceCache, $AnimatableInstanceCache$$Type} from "software.bernie.geckolib.animatable.instance.AnimatableInstanceCache"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$$Type} from "software.bernie.geckolib.animation.AnimatableManager$ControllerRegistrar"

export interface $GeoAnimatable {

 "getTick"(arg0: any): double
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
 "getBoneResetTime"(): double
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "animatableCacheOverride"(): $AnimatableInstanceCache
get "boneResetTime"(): double
get "animatableInstanceCache"(): $AnimatableInstanceCache
}

export namespace $GeoAnimatable {
const probejs$$marker: never
}
export class $GeoAnimatable$$Static implements $GeoAnimatable {


 "getTick"(arg0: any): double
 "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$$Type): void
 "getBoneResetTime"(): double
 "getAnimatableInstanceCache"(): $AnimatableInstanceCache
 "shouldPlayAnimsWhileGamePaused"(): boolean
 "animatableCacheOverride"(): $AnimatableInstanceCache
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoAnimatable$$Type = ($GeoAnimatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoAnimatable_ = $GeoAnimatable$$Type;
}}
declare module "software.bernie.geckolib.loading.json.raw.ModelProperties" {
import {$JsonDeserializer, $JsonDeserializer$$Type} from "com.google.gson.JsonDeserializer"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ModelProperties extends $Record {

constructor(animationArmsDown: boolean, animationArmsOutFront: boolean, animationDontShowArmor: boolean, animationInvertedCrouch: boolean, animationNoHeadBob: boolean, animationSingleArmAnimation: boolean, animationSingleLegAnimation: boolean, animationStationaryLegs: boolean, animationStatueOfLibertyArms: boolean, animationUpsideDown: boolean, identifier: StringJS, preserveModelPose: boolean, textureHeight: double, textureWidth: double, visibleBoundsHeight: double, visibleBoundsOffset: (double)[], visibleBoundsWidth: double)

public "identifier"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "textureWidth"(): double
public "textureHeight"(): double
public static "deserializer"(): $JsonDeserializer<($ModelProperties)>
public "animationArmsDown"(): boolean
public "animationArmsOutFront"(): boolean
public "animationDontShowArmor"(): boolean
public "animationNoHeadBob"(): boolean
public "animationUpsideDown"(): boolean
public "preserveModelPose"(): boolean
public "visibleBoundsHeight"(): double
public "visibleBoundsOffset"(): (double)[]
public "visibleBoundsWidth"(): double
public "animationInvertedCrouch"(): boolean
public "animationSingleArmAnimation"(): boolean
public "animationSingleLegAnimation"(): boolean
public "animationStationaryLegs"(): boolean
public "animationStatueOfLibertyArms"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelProperties$$Type = ({"animationNoHeadBob"?: boolean, "animationSingleLegAnimation"?: boolean, "animationSingleArmAnimation"?: boolean, "textureHeight"?: double, "visibleBoundsWidth"?: double, "animationStatueOfLibertyArms"?: boolean, "visibleBoundsOffset"?: (double)[], "animationUpsideDown"?: boolean, "animationInvertedCrouch"?: boolean, "identifier"?: StringJS, "textureWidth"?: double, "animationArmsDown"?: boolean, "visibleBoundsHeight"?: double, "animationDontShowArmor"?: boolean, "preserveModelPose"?: boolean, "animationStationaryLegs"?: boolean, "animationArmsOutFront"?: boolean}) | ([animationNoHeadBob?: boolean, animationSingleLegAnimation?: boolean, animationSingleArmAnimation?: boolean, textureHeight?: double, visibleBoundsWidth?: double, animationStatueOfLibertyArms?: boolean, visibleBoundsOffset?: (double)[], animationUpsideDown?: boolean, animationInvertedCrouch?: boolean, identifier?: StringJS, textureWidth?: double, animationArmsDown?: boolean, visibleBoundsHeight?: double, animationDontShowArmor?: boolean, preserveModelPose?: boolean, animationStationaryLegs?: boolean, animationArmsOutFront?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelProperties_ = $ModelProperties$$Type;
}}
declare module "software.bernie.geckolib.animation.AnimationController$State" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $AnimationController$State extends $Enum<($AnimationController$State)> {
static readonly "PAUSED": $AnimationController$State
static readonly "RUNNING": $AnimationController$State
static readonly "STOPPED": $AnimationController$State
static readonly "TRANSITIONING": $AnimationController$State


public static "values"(): ($AnimationController$State)[]
public static "valueOf"(arg0: StringJS): $AnimationController$State
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$State$$Type = (("running") | ("transitioning") | ("paused") | ("stopped"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController$State_ = $AnimationController$State$$Type;
}}
declare module "software.bernie.geckolib.renderer.layer.BlockAndItemGeoLayer" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$GeoRenderLayer, $GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockAndItemGeoLayer<T extends $GeoAnimatable> extends $GeoRenderLayer<(T)> {

constructor(arg0: $GeoRenderer$$Type<(T)>)
constructor(arg0: $GeoRenderer$$Type<(T)>, arg1: $BiFunction$$Type<($GeoBone), (T), ($ItemStack$$Type)>, arg2: $BiFunction$$Type<($GeoBone), (T), ($BlockState$$Type)>)

public "renderForBone"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockAndItemGeoLayer$$Type<T> = ($BlockAndItemGeoLayer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockAndItemGeoLayer_<T> = $BlockAndItemGeoLayer$$Type<(T)>;
}}
declare module "software.bernie.geckolib.animation.keyframe.AnimationPointQueue" {
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$AnimationPoint, $AnimationPoint$$Type} from "software.bernie.geckolib.animation.keyframe.AnimationPoint"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ListIterator, $ListIterator$$Type} from "java.util.ListIterator"
import {$List, $List$$Type} from "java.util.List"
import {$LinkedList, $LinkedList$$Type} from "java.util.LinkedList"

export class $AnimationPointQueue extends $LinkedList<($AnimationPoint)> {

constructor()

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
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationPointQueue$$Type = ($AnimationPointQueue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationPointQueue_ = $AnimationPointQueue$$Type;
}}
declare module "software.bernie.geckolib.animation.keyframe.BoneAnimation" {
import {$Keyframe, $Keyframe$$Type} from "software.bernie.geckolib.animation.keyframe.Keyframe"
import {$KeyframeStack, $KeyframeStack$$Type} from "software.bernie.geckolib.animation.keyframe.KeyframeStack"
import {$MathValue, $MathValue$$Type} from "software.bernie.geckolib.loading.math.MathValue"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BoneAnimation extends $Record {

constructor(boneName: StringJS, rotationKeyFrames: $KeyframeStack$$Type<($Keyframe$$Type<($MathValue$$Type)>)>, positionKeyFrames: $KeyframeStack$$Type<($Keyframe$$Type<($MathValue$$Type)>)>, scaleKeyFrames: $KeyframeStack$$Type<($Keyframe$$Type<($MathValue$$Type)>)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "scaleKeyFrames"(): $KeyframeStack<($Keyframe<($MathValue)>)>
public "boneName"(): StringJS
public "rotationKeyFrames"(): $KeyframeStack<($Keyframe<($MathValue)>)>
public "positionKeyFrames"(): $KeyframeStack<($Keyframe<($MathValue)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoneAnimation$$Type = ({"scaleKeyFrames"?: $KeyframeStack$$Type<($Keyframe$$Type<($MathValue$$Type)>)>, "positionKeyFrames"?: $KeyframeStack$$Type<($Keyframe$$Type<($MathValue$$Type)>)>, "rotationKeyFrames"?: $KeyframeStack$$Type<($Keyframe$$Type<($MathValue$$Type)>)>, "boneName"?: StringJS}) | ([scaleKeyFrames?: $KeyframeStack$$Type<($Keyframe$$Type<($MathValue$$Type)>)>, positionKeyFrames?: $KeyframeStack$$Type<($Keyframe$$Type<($MathValue$$Type)>)>, rotationKeyFrames?: $KeyframeStack$$Type<($Keyframe$$Type<($MathValue$$Type)>)>, boneName?: StringJS]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoneAnimation_ = $BoneAnimation$$Type;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"

export interface $GeoRenderEvent {

 "getRenderer"(): $GeoRenderer<(any)>

(): $GeoRenderer$$Type<(any)>
get "renderer"(): $GeoRenderer<(any)>
}

export namespace $GeoRenderEvent {
const probejs$$marker: never
}
export class $GeoRenderEvent$$Static implements $GeoRenderEvent {


 "getRenderer"(): $GeoRenderer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$$Type = (() => $GeoRenderer$$Type<(any)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent_ = $GeoRenderEvent$$Type;
}}
declare module "software.bernie.geckolib.renderer.GeoItemRenderer" {
import {$ItemDisplayContext, $ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List, $List$$Type} from "java.util.List"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$GeoRenderLayer, $GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$BakedGeoModel, $BakedGeoModel$$Type} from "software.bernie.geckolib.cache.object.BakedGeoModel"
import {$BlockEntityRenderDispatcher, $BlockEntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GeoQuad, $GeoQuad$$Type} from "software.bernie.geckolib.cache.object.GeoQuad"
import {$GeoModel, $GeoModel$$Type} from "software.bernie.geckolib.model.GeoModel"
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$Color, $Color$$Type} from "software.bernie.geckolib.util.Color"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$GeoCube, $GeoCube$$Type} from "software.bernie.geckolib.cache.object.GeoCube"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$EntityModelSet, $EntityModelSet$$Type} from "net.minecraft.client.model.geom.EntityModelSet"
import {$BlockEntityWithoutLevelRenderer, $BlockEntityWithoutLevelRenderer$$Type} from "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer"

export class $GeoItemRenderer<T extends ($Item) & ($GeoAnimatable)> extends $BlockEntityWithoutLevelRenderer implements $GeoRenderer<(T)> {
readonly "blockEntityRenderDispatcher": $BlockEntityRenderDispatcher

constructor(arg0: $BlockEntityRenderDispatcher$$Type, arg1: $EntityModelSet$$Type, arg2: $GeoModel$$Type<(T)>)
constructor(arg0: $GeoModel$$Type<(T)>)
constructor<I extends T>(arg0: I)

public "getGeoModel"(): $GeoModel<(T)>
public "preRender"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "preRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "actuallyRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "actuallyRender"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "getAnimatable"(): $GeoAnimatable
public "getInstanceId"(arg0: T): long
public "getInstanceId"(arg0: $GeoAnimatable$$Type): long
public "withScale"(arg0: float): $GeoItemRenderer<(T)>
public "withScale"(arg0: float, arg1: float): $GeoItemRenderer<(T)>
public "renderByItem"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: integer): void
public "addRenderLayer"(arg0: $GeoRenderLayer$$Type<(T)>): $GeoItemRenderer<(T)>
public "firePreRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): boolean
public "firePostRenderEvent"(arg0: $PoseStack$$Type, arg1: $BakedGeoModel$$Type, arg2: $MultiBufferSource$$Type, arg3: float, arg4: integer): void
public "doPostRenderCleanup"(): void
public "renderRecursively"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "renderRecursively"(arg0: $PoseStack$$Type, arg1: $GeoAnimatable$$Type, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "getTextureLocation"(arg0: T): $ResourceLocation
public "getTextureLocation"(arg0: $GeoAnimatable$$Type): $ResourceLocation
public "getRenderLayers"(): $List<($GeoRenderLayer<(T)>)>
public "getCurrentItemStack"(): $ItemStack
public "updateAnimatedTextureFrame"(arg0: T): void
public "updateAnimatedTextureFrame"(arg0: $GeoAnimatable$$Type): void
public "fireCompileRenderLayersEvent"(): void
public "setupLightingForGuiRender"(): void
public "useAlternateGuiLighting"(): $GeoItemRenderer<(T)>
public "getRenderType"(arg0: T, arg1: $ResourceLocation$$Type, arg2: $MultiBufferSource$$Type, arg3: float): $RenderType
public "getRenderColor"(arg0: T, arg1: float, arg2: integer): $Color
public "renderFinal"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: integer, arg7: integer, arg8: integer): void
public "defaultRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type, arg4: $VertexConsumer$$Type, arg5: float, arg6: float, arg7: integer): void
public "reRender"(arg0: $BakedGeoModel$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: T, arg4: $RenderType$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "postRender"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $MultiBufferSource$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer, arg9: integer): void
public "renderCube"(arg0: $PoseStack$$Type, arg1: $GeoCube$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "getPackedOverlay"(arg0: T, arg1: float, arg2: float): integer
public "preApplyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "applyRenderLayers"(arg0: $PoseStack$$Type, arg1: T, arg2: $BakedGeoModel$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
public "checkAndRefreshBuffer"(arg0: boolean, arg1: $VertexConsumer$$Type, arg2: $MultiBufferSource$$Type, arg3: $RenderType$$Type): $VertexConsumer
public "renderCubesOfBone"(arg0: $PoseStack$$Type, arg1: $GeoBone$$Type, arg2: $VertexConsumer$$Type, arg3: integer, arg4: integer, arg5: integer): void
public "renderChildBones"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: float, arg8: integer, arg9: integer, arg10: integer): void
public "createVerticesOfQuad"(arg0: $GeoQuad$$Type, arg1: $Matrix4f$$Type, arg2: $Vector3f$$Type, arg3: $VertexConsumer$$Type, arg4: integer, arg5: integer, arg6: integer): void
public "getMotionAnimThreshold"(arg0: T): float
public "scaleModelForRender"(arg0: float, arg1: float, arg2: $PoseStack$$Type, arg3: T, arg4: $BakedGeoModel$$Type, arg5: boolean, arg6: float, arg7: integer, arg8: integer): void
public "applyRenderLayersForBone"(arg0: $PoseStack$$Type, arg1: T, arg2: $GeoBone$$Type, arg3: $RenderType$$Type, arg4: $MultiBufferSource$$Type, arg5: $VertexConsumer$$Type, arg6: float, arg7: integer, arg8: integer): void
get "geoModel"(): $GeoModel<(T)>
get "animatable"(): $GeoAnimatable
get "renderLayers"(): $List<($GeoRenderLayer<(T)>)>
get "currentItemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoItemRenderer$$Type<T> = ($GeoItemRenderer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoItemRenderer_<T> = $GeoItemRenderer$$Type<(T)>;
}}
declare module "software.bernie.geckolib.animation.Animation$Keyframes" {
import {$SoundKeyframeData, $SoundKeyframeData$$Type} from "software.bernie.geckolib.animation.keyframe.event.data.SoundKeyframeData"
import {$CustomInstructionKeyframeData, $CustomInstructionKeyframeData$$Type} from "software.bernie.geckolib.animation.keyframe.event.data.CustomInstructionKeyframeData"
import {$ParticleKeyframeData, $ParticleKeyframeData$$Type} from "software.bernie.geckolib.animation.keyframe.event.data.ParticleKeyframeData"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $Animation$Keyframes extends $Record {

constructor(sounds: ($SoundKeyframeData$$Type)[], particles: ($ParticleKeyframeData$$Type)[], customInstructions: ($CustomInstructionKeyframeData$$Type)[])

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "sounds"(): ($SoundKeyframeData)[]
public "particles"(): ($ParticleKeyframeData)[]
public "customInstructions"(): ($CustomInstructionKeyframeData)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animation$Keyframes$$Type = ({"sounds"?: ($SoundKeyframeData$$Type)[], "customInstructions"?: ($CustomInstructionKeyframeData$$Type)[], "particles"?: ($ParticleKeyframeData$$Type)[]}) | ([sounds?: ($SoundKeyframeData$$Type)[], customInstructions?: ($CustomInstructionKeyframeData$$Type)[], particles?: ($ParticleKeyframeData$$Type)[]]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animation$Keyframes_ = $Animation$Keyframes$$Type;
}}
declare module "software.bernie.geckolib.animation.PlayState" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $PlayState extends $Enum<($PlayState)> {
static readonly "CONTINUE": $PlayState
static readonly "STOP": $PlayState


public static "values"(): ($PlayState)[]
public static "valueOf"(arg0: StringJS): $PlayState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayState$$Type = (("continue") | ("stop"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayState_ = $PlayState$$Type;
}}
declare module "software.bernie.geckolib.event.GeoRenderEvent$Armor$CompileRenderLayers" {
import {$GeoRenderer, $GeoRenderer$$Type} from "software.bernie.geckolib.renderer.GeoRenderer"
import {$GeoArmorRenderer, $GeoArmorRenderer$$Type} from "software.bernie.geckolib.renderer.GeoArmorRenderer"
import {$GeoRenderEvent$Armor, $GeoRenderEvent$Armor$$Type} from "software.bernie.geckolib.event.GeoRenderEvent$Armor"
import {$GeoRenderLayer, $GeoRenderLayer$$Type} from "software.bernie.geckolib.renderer.layer.GeoRenderLayer"

export class $GeoRenderEvent$Armor$CompileRenderLayers extends $GeoRenderEvent$Armor {

constructor(arg0: $GeoArmorRenderer$$Type<(any)>)

public "getRenderer"(): $GeoRenderer<(any)>
public "addLayer"(arg0: $GeoRenderLayer$$Type<(any)>): void
get "renderer"(): $GeoRenderer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoRenderEvent$Armor$CompileRenderLayers$$Type = ($GeoRenderEvent$Armor$CompileRenderLayers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoRenderEvent$Armor$CompileRenderLayers_ = $GeoRenderEvent$Armor$CompileRenderLayers$$Type;
}}
declare module "software.bernie.geckolib.animation.AnimationController$CustomKeyframeHandler" {
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$CustomInstructionKeyframeEvent, $CustomInstructionKeyframeEvent$$Type} from "software.bernie.geckolib.animation.keyframe.event.CustomInstructionKeyframeEvent"

export interface $AnimationController$CustomKeyframeHandler<A extends $GeoAnimatable> {

 "handle"(arg0: $CustomInstructionKeyframeEvent$$Type<(A)>): void

(arg0: $CustomInstructionKeyframeEvent<(A)>): void
}

export namespace $AnimationController$CustomKeyframeHandler {
const probejs$$marker: never
}
export class $AnimationController$CustomKeyframeHandler$$Static<A extends $GeoAnimatable> implements $AnimationController$CustomKeyframeHandler {


 "handle"(arg0: $CustomInstructionKeyframeEvent$$Type<(A)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$CustomKeyframeHandler$$Type<A> = ((arg0: $CustomInstructionKeyframeEvent<(A)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController$CustomKeyframeHandler_<A> = $AnimationController$CustomKeyframeHandler$$Type<(A)>;
}}
declare module "software.bernie.geckolib.animation.AnimationProcessor$QueuedAnimation" {
import {$Animation$LoopType, $Animation$LoopType$$Type} from "software.bernie.geckolib.animation.Animation$LoopType"
import {$Animation, $Animation$$Type} from "software.bernie.geckolib.animation.Animation"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AnimationProcessor$QueuedAnimation extends $Record {

constructor(animation: $Animation$$Type, loopType: $Animation$LoopType$$Type)

public "loopType"(): $Animation$LoopType
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "animation"(): $Animation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProcessor$QueuedAnimation$$Type = ({"loopType"?: $Animation$LoopType$$Type, "animation"?: $Animation$$Type}) | ([loopType?: $Animation$LoopType$$Type, animation?: $Animation$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationProcessor$QueuedAnimation_ = $AnimationProcessor$QueuedAnimation$$Type;
}}
declare module "software.bernie.geckolib.constant.dataticket.DataTicket" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Class, $Class$$Type} from "java.lang.Class"

export class $DataTicket<D> {

constructor(arg0: StringJS, arg1: $Class$$Type<(D)>)

public "getData"<D>(arg0: $Map$$Type<($DataTicket$$Type<(any)>), (any)>): D
public "hashCode"(): integer
public "id"(): StringJS
public "objectType"(): $Class<(D)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataTicket$$Type<D> = ($DataTicket<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataTicket_<D> = $DataTicket$$Type<(D)>;
}}
declare module "software.bernie.geckolib.animation.AnimationController$AnimationStateHandler" {
import {$GeoAnimatable, $GeoAnimatable$$Type} from "software.bernie.geckolib.animatable.GeoAnimatable"
import {$AnimationState, $AnimationState$$Type} from "software.bernie.geckolib.animation.AnimationState"
import {$PlayState, $PlayState$$Type} from "software.bernie.geckolib.animation.PlayState"

export interface $AnimationController$AnimationStateHandler<A extends $GeoAnimatable> {

 "handle"(arg0: $AnimationState$$Type<(A)>): $PlayState

(arg0: $AnimationState<(A)>): $PlayState$$Type
}

export namespace $AnimationController$AnimationStateHandler {
const probejs$$marker: never
}
export class $AnimationController$AnimationStateHandler$$Static<A extends $GeoAnimatable> implements $AnimationController$AnimationStateHandler {


 "handle"(arg0: $AnimationState$$Type<(A)>): $PlayState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationController$AnimationStateHandler$$Type<A> = ((arg0: $AnimationState<(A)>) => $PlayState$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationController$AnimationStateHandler_<A> = $AnimationController$AnimationStateHandler$$Type<(A)>;
}}
declare module "software.bernie.geckolib.cache.object.GeoQuad" {
import {$GeoVertex, $GeoVertex$$Type} from "software.bernie.geckolib.cache.object.GeoVertex"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$FaceUV$Rotation, $FaceUV$Rotation$$Type} from "software.bernie.geckolib.loading.json.raw.FaceUV$Rotation"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $GeoQuad extends $Record {

constructor(vertices: ($GeoVertex$$Type)[], normal: $Vector3f$$Type, direction: $Direction$$Type)

public "direction"(): $Direction
public static "build"(arg0: ($GeoVertex$$Type)[], arg1: float, arg2: float, arg3: float, arg4: float, arg5: $FaceUV$Rotation$$Type, arg6: float, arg7: float, arg8: boolean, arg9: $Direction$$Type): $GeoQuad
public static "build"(arg0: ($GeoVertex$$Type)[], arg1: (double)[], arg2: (double)[], arg3: $FaceUV$Rotation$$Type, arg4: float, arg5: float, arg6: boolean, arg7: $Direction$$Type): $GeoQuad
/**
 * 
 * @deprecated
 */
public static "build"(arg0: ($GeoVertex$$Type)[], arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: boolean, arg8: $Direction$$Type): $GeoQuad
/**
 * 
 * @deprecated
 */
public static "build"(arg0: ($GeoVertex$$Type)[], arg1: (double)[], arg2: (double)[], arg3: float, arg4: float, arg5: boolean, arg6: $Direction$$Type): $GeoQuad
public "normal"(): $Vector3f
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "vertices"(): ($GeoVertex)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoQuad$$Type = ({"normal"?: $Vector3f$$Type, "direction"?: $Direction$$Type, "vertices"?: ($GeoVertex$$Type)[]}) | ([normal?: $Vector3f$$Type, direction?: $Direction$$Type, vertices?: ($GeoVertex$$Type)[]]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeoQuad_ = $GeoQuad$$Type;
}}
