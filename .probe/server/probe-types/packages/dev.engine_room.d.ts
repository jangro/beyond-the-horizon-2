declare module "dev.engine_room.flywheel.api.visual.Visual" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Visual {

 "update"(arg0: float): void
 "delete"(): void
}

export namespace $Visual {
const probejs$$marker: never
}
export class $Visual$$Static implements $Visual {


 "update"(arg0: float): void
 "delete"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Visual$$Type = ($Visual);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Visual_ = $Visual$$Type;
}}
declare module "dev.engine_room.flywheel.api.visual.TickableVisual" {
import {$Plan, $Plan$$Type} from "dev.engine_room.flywheel.api.task.Plan"
import {$TickableVisual$Context, $TickableVisual$Context$$Type} from "dev.engine_room.flywheel.api.visual.TickableVisual$Context"
import {$Visual, $Visual$$Type} from "dev.engine_room.flywheel.api.visual.Visual"

export interface $TickableVisual extends $Visual {

 "planTick"(): $Plan<($TickableVisual$Context)>
 "update"(arg0: float): void
 "delete"(): void
}

export namespace $TickableVisual {
const probejs$$marker: never
}
export class $TickableVisual$$Static implements $TickableVisual {


 "planTick"(): $Plan<($TickableVisual$Context)>
 "update"(arg0: float): void
 "delete"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickableVisual$$Type = ($TickableVisual);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickableVisual_ = $TickableVisual$$Type;
}}
declare module "dev.engine_room.flywheel.api.instance.InstanceHandle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $InstanceHandle {

 "isVisible"(): boolean
 "setChanged"(): void
 "setVisible"(arg0: boolean): void
 "setDeleted"(): void
get "visible"(): boolean
set "visible"(value: boolean)
}

export namespace $InstanceHandle {
const probejs$$marker: never
}
export class $InstanceHandle$$Static implements $InstanceHandle {


 "isVisible"(): boolean
 "setChanged"(): void
 "setVisible"(arg0: boolean): void
 "setDeleted"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstanceHandle$$Type = ($InstanceHandle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InstanceHandle_ = $InstanceHandle$$Type;
}}
declare module "dev.engine_room.flywheel.api.visual.BlockEntityVisual" {
import {$Instance, $Instance$$Type} from "dev.engine_room.flywheel.api.instance.Instance"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Visual, $Visual$$Type} from "dev.engine_room.flywheel.api.visual.Visual"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $BlockEntityVisual<T extends $BlockEntity> extends $Visual {

 "collectCrumblingInstances"(arg0: $Consumer$$Type<($Instance)>): void
 "update"(arg0: float): void
 "delete"(): void
}

export namespace $BlockEntityVisual {
const probejs$$marker: never
}
export class $BlockEntityVisual$$Static<T extends $BlockEntity> implements $BlockEntityVisual {


 "collectCrumblingInstances"(arg0: $Consumer$$Type<($Instance)>): void
 "update"(arg0: float): void
 "delete"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityVisual$$Type<T> = ($BlockEntityVisual<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityVisual_<T> = $BlockEntityVisual$$Type<(T)>;
}}
declare module "dev.engine_room.flywheel.api.visual.SectionTrackedVisual$SectionCollector" {
import {$LongSet, $LongSet$$Type} from "it.unimi.dsi.fastutil.longs.LongSet"

export interface $SectionTrackedVisual$SectionCollector {

 "sections"(arg0: $LongSet$$Type): void

(arg0: $LongSet): void
}

export namespace $SectionTrackedVisual$SectionCollector {
const probejs$$marker: never
}
export class $SectionTrackedVisual$SectionCollector$$Static implements $SectionTrackedVisual$SectionCollector {


 "sections"(arg0: $LongSet$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionTrackedVisual$SectionCollector$$Type = ((arg0: $LongSet) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SectionTrackedVisual$SectionCollector_ = $SectionTrackedVisual$SectionCollector$$Type;
}}
declare module "dev.engine_room.flywheel.api.instance.Instancer" {
import {$Instance, $Instance$$Type} from "dev.engine_room.flywheel.api.instance.Instance"

export interface $Instancer<I extends $Instance> {

 "createInstance"(): I
 "stealInstance"(arg0: I): void
 "createInstances"(arr: (I)[]): void
}

export namespace $Instancer {
const probejs$$marker: never
}
export class $Instancer$$Static<I extends $Instance> implements $Instancer {


 "createInstance"(): I
 "stealInstance"(arg0: I): void
 "createInstances"(arr: (I)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Instancer$$Type<I> = ($Instancer<(I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Instancer_<I> = $Instancer$$Type<(I)>;
}}
declare module "dev.engine_room.flywheel.api.visualization.VisualEmbedding" {
import {$Matrix4fc, $Matrix4fc$$Type} from "org.joml.Matrix4fc"
import {$Matrix3fc, $Matrix3fc$$Type} from "org.joml.Matrix3fc"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$InstancerProvider, $InstancerProvider$$Type} from "dev.engine_room.flywheel.api.instance.InstancerProvider"
import {$VisualizationContext, $VisualizationContext$$Type} from "dev.engine_room.flywheel.api.visualization.VisualizationContext"

export interface $VisualEmbedding extends $VisualizationContext {

 "transforms"(arg0: $Matrix4fc$$Type, arg1: $Matrix3fc$$Type): void
 "delete"(): void
 "createEmbedding"(arg0: $Vec3i$$Type): $VisualEmbedding
 "instancerProvider"(): $InstancerProvider
 "renderOrigin"(): $Vec3i
}

export namespace $VisualEmbedding {
const probejs$$marker: never
}
export class $VisualEmbedding$$Static implements $VisualEmbedding {


 "transforms"(arg0: $Matrix4fc$$Type, arg1: $Matrix3fc$$Type): void
 "delete"(): void
 "createEmbedding"(arg0: $Vec3i$$Type): $VisualEmbedding
 "instancerProvider"(): $InstancerProvider
 "renderOrigin"(): $Vec3i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VisualEmbedding$$Type = ($VisualEmbedding);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VisualEmbedding_ = $VisualEmbedding$$Type;
}}
declare module "dev.engine_room.flywheel.impl.extension.BlockEntityTypeExtension" {
import {$BlockEntityVisualizer, $BlockEntityVisualizer$$Type} from "dev.engine_room.flywheel.api.visualization.BlockEntityVisualizer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockEntityTypeExtension<T extends $BlockEntity> {

 "flywheel$getVisualizer"(): $BlockEntityVisualizer<(T)>
 "flywheel$setVisualizer"(arg0: $BlockEntityVisualizer$$Type<(T)>): void
}

export namespace $BlockEntityTypeExtension {
const probejs$$marker: never
}
export class $BlockEntityTypeExtension$$Static<T extends $BlockEntity> implements $BlockEntityTypeExtension {


 "flywheel$getVisualizer"(): $BlockEntityVisualizer<(T)>
 "flywheel$setVisualizer"(arg0: $BlockEntityVisualizer$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityTypeExtension$$Type<T> = ($BlockEntityTypeExtension<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityTypeExtension_<T> = $BlockEntityTypeExtension$$Type<(T)>;
}}
declare module "dev.engine_room.flywheel.api.model.Model" {
import {$Vector4fc, $Vector4fc$$Type} from "org.joml.Vector4fc"
import {$List, $List$$Type} from "java.util.List"
import {$Model$ConfiguredMesh, $Model$ConfiguredMesh$$Type} from "dev.engine_room.flywheel.api.model.Model$ConfiguredMesh"

export interface $Model {

 "meshes"(): $List<($Model$ConfiguredMesh)>
 "boundingSphere"(): $Vector4fc
}

export namespace $Model {
const probejs$$marker: never
}
export class $Model$$Static implements $Model {


 "meshes"(): $List<($Model$ConfiguredMesh)>
 "boundingSphere"(): $Vector4fc
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Model$$Type = ($Model);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Model_ = $Model$$Type;
}}
declare module "dev.engine_room.flywheel.impl.mixin.PoseStackAccessor" {
import {$PoseStack$Pose, $PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$Deque, $Deque$$Type} from "java.util.Deque"

export interface $PoseStackAccessor {

 "flywheel$getPoseStack"(): $Deque<($PoseStack$Pose)>

(): $Deque$$Type<($PoseStack$Pose$$Type)>
}

export namespace $PoseStackAccessor {
const probejs$$marker: never
}
export class $PoseStackAccessor$$Static implements $PoseStackAccessor {


 "flywheel$getPoseStack"(): $Deque<($PoseStack$Pose)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseStackAccessor$$Type = (() => $Deque$$Type<($PoseStack$Pose$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoseStackAccessor_ = $PoseStackAccessor$$Type;
}}
declare module "dev.engine_room.flywheel.backend.mixin.AbstractClientPlayerAccessor" {
import {$PlayerInfo, $PlayerInfo$$Type} from "net.minecraft.client.multiplayer.PlayerInfo"

export interface $AbstractClientPlayerAccessor {

 "flywheel$getPlayerInfo"(): $PlayerInfo

(): $PlayerInfo$$Type
}

export namespace $AbstractClientPlayerAccessor {
const probejs$$marker: never
}
export class $AbstractClientPlayerAccessor$$Static implements $AbstractClientPlayerAccessor {


 "flywheel$getPlayerInfo"(): $PlayerInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractClientPlayerAccessor$$Type = (() => $PlayerInfo$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractClientPlayerAccessor_ = $AbstractClientPlayerAccessor$$Type;
}}
declare module "dev.engine_room.flywheel.lib.transform.Translate" {
import {$Vector3ic, $Vector3ic$$Type} from "org.joml.Vector3ic"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Vector3fc, $Vector3fc$$Type} from "org.joml.Vector3fc"

export interface $Translate<Self extends $Translate<(Self)>> {

 "translate"(vec: $Vector3fc$$Type): Self
 "translate"(vec: $Vec3$$Type): Self
 "translate"(vec: $Vec3i$$Type): Self
 "translate"(vec: $Vector3ic$$Type): Self
 "translate"(x: double, y: double, z: double): Self
 "translate"(v: float): Self
 "translate"(arg0: float, arg1: float, arg2: float): Self
 "center"(): Self
 "nudge"(seed: integer): Self
 "uncenter"(): Self
 "translateZ"(z: float): Self
 "translateBack"(vec: $Vector3ic$$Type): Self
 "translateBack"(vec: $Vector3fc$$Type): Self
 "translateBack"(vec: $Vec3$$Type): Self
 "translateBack"(x: float, y: float, z: float): Self
 "translateBack"(vec: $Vec3i$$Type): Self
 "translateBack"(v: float): Self
 "translateBack"(x: double, y: double, z: double): Self
 "translateX"(x: float): Self
 "translateY"(y: float): Self

(arg0: float, arg1: float, arg2: float): Self
}

export namespace $Translate {
const CENTER: float
const probejs$$marker: never
}
export class $Translate$$Static<Self extends $Translate<(Self)>> implements $Translate {
static readonly "CENTER": float


 "translate"(vec: $Vector3fc$$Type): Self
 "translate"(vec: $Vec3$$Type): Self
 "translate"(vec: $Vec3i$$Type): Self
 "translate"(vec: $Vector3ic$$Type): Self
 "translate"(x: double, y: double, z: double): Self
 "translate"(v: float): Self
 "translate"(arg0: float, arg1: float, arg2: float): Self
 "center"(): Self
 "nudge"(seed: integer): Self
 "uncenter"(): Self
 "translateZ"(z: float): Self
 "translateBack"(vec: $Vector3ic$$Type): Self
 "translateBack"(vec: $Vector3fc$$Type): Self
 "translateBack"(vec: $Vec3$$Type): Self
 "translateBack"(x: float, y: float, z: float): Self
 "translateBack"(vec: $Vec3i$$Type): Self
 "translateBack"(v: float): Self
 "translateBack"(x: double, y: double, z: double): Self
 "translateX"(x: float): Self
 "translateY"(y: float): Self
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Translate$$Type<Self> = ((arg0: float, arg1: float, arg2: float) => Self);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Translate_<Self> = $Translate$$Type<(Self)>;
}}
declare module "dev.engine_room.flywheel.lib.transform.TransformStack" {
import {$Quaternionfc, $Quaternionfc$$Type} from "org.joml.Quaternionfc"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Transform, $Transform$$Type} from "dev.engine_room.flywheel.lib.transform.Transform"
import {$PoseStack$Pose, $PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Vector3ic, $Vector3ic$$Type} from "org.joml.Vector3ic"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Matrix4fc, $Matrix4fc$$Type} from "org.joml.Matrix4fc"
import {$Axis, $Axis$$Type} from "com.mojang.math.Axis"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Matrix3fc, $Matrix3fc$$Type} from "org.joml.Matrix3fc"
import {$Vector3fc, $Vector3fc$$Type} from "org.joml.Vector3fc"
import {$PoseTransformStack, $PoseTransformStack$$Type} from "dev.engine_room.flywheel.lib.transform.PoseTransformStack"
import {$AxisAngle4f, $AxisAngle4f$$Type} from "org.joml.AxisAngle4f"

export interface $TransformStack<Self extends $TransformStack<(Self)>> extends $Transform<(Self)> {

 "pushPose"(): Self
 "popPose"(): Self
 "transform"(pose: $PoseStack$Pose$$Type): Self
 "transform"(stack: $PoseStack$$Type): Self
 "transform"(pose: $Matrix4fc$$Type, normal: $Matrix3fc$$Type): Self
 "mulPose"(arg0: $Matrix4fc$$Type): Self
 "mulNormal"(arg0: $Matrix3fc$$Type): Self
 "rotateXCentered"(radians: float): Self
 "rotateYCentered"(radians: float): Self
 "rotateZCentered"(radians: float): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Axis$$Type): Self
 "rotateXCenteredDegrees"(degrees: float): Self
 "rotateYCenteredDegrees"(degrees: float): Self
 "rotateZCenteredDegrees"(degrees: float): Self
 "rotateAround"(quaternion: $Quaternionfc$$Type, vec: $Vector3fc$$Type): Self
 "rotateAround"(quaternion: $Quaternionfc$$Type, x: float, y: float, z: float): Self
 "rotateCentered"(radians: float, axis: $Axis$$Type): Self
 "rotateCentered"(radians: float, axis: $Direction$$Type): Self
 "rotateCentered"(q: $Quaternionfc$$Type): Self
 "rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateCentered"(radians: float, axis: $Direction$Axis$$Type): Self
 "rotateCentered"(radians: float, axis: $Vector3fc$$Type): Self
 "translate"(vec: $Vector3fc$$Type): Self
 "translate"(vec: $Vec3$$Type): Self
 "translate"(vec: $Vec3i$$Type): Self
 "translate"(vec: $Vector3ic$$Type): Self
 "translate"(x: double, y: double, z: double): Self
 "translate"(v: float): Self
 "translate"(arg0: float, arg1: float, arg2: float): Self
 "center"(): Self
 "nudge"(seed: integer): Self
 "uncenter"(): Self
 "translateZ"(z: float): Self
 "translateBack"(vec: $Vector3ic$$Type): Self
 "translateBack"(vec: $Vector3fc$$Type): Self
 "translateBack"(vec: $Vec3$$Type): Self
 "translateBack"(x: float, y: float, z: float): Self
 "translateBack"(vec: $Vec3i$$Type): Self
 "translateBack"(v: float): Self
 "translateBack"(x: double, y: double, z: double): Self
 "translateX"(x: float): Self
 "translateY"(y: float): Self
 "self"(): Self
 "rotate"(radians: float, axis: $Vector3fc$$Type): Self
 "rotate"(radians: float, axis: $Direction$$Type): Self
 "rotate"(radians: float, axis: $Direction$Axis$$Type): Self
 "rotate"(arg0: $Quaternionfc$$Type): Self
 "rotate"(axisAngle: $AxisAngle4f$$Type): Self
 "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotate"(radians: float, axis: $Axis$$Type): Self
 "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): Self
 "rotateTo"(from: $Direction$$Type, to: $Direction$$Type): Self
 "rotateTo"(from: $Vector3fc$$Type, to: $Vector3fc$$Type): Self
 "rotateX"(radians: float): Self
 "rotateY"(radians: float): Self
 "rotateZ"(radians: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Axis$$Type): Self
 "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$$Type): Self
 "rotateToFace"(facing: $Direction$$Type): Self
 "rotateYDegrees"(degrees: float): Self
 "rotateZDegrees"(degrees: float): Self
 "rotateXDegrees"(degrees: float): Self
 "scale"(factors: $Vector3fc$$Type): Self
 "scale"(factor: float): Self
 "scale"(arg0: float, arg1: float, arg2: float): Self
 "scaleZ"(factor: float): Self
 "scaleX"(factor: float): Self
 "scaleY"(factor: float): Self
}

export namespace $TransformStack {
function of(stack: $PoseStack$$Type): $PoseTransformStack
const probejs$$marker: never
}
export class $TransformStack$$Static<Self extends $TransformStack<(Self)>> implements $TransformStack {


static "of"(stack: $PoseStack$$Type): $PoseTransformStack
 "pushPose"(): Self
 "popPose"(): Self
 "transform"(pose: $PoseStack$Pose$$Type): Self
 "transform"(stack: $PoseStack$$Type): Self
 "transform"(pose: $Matrix4fc$$Type, normal: $Matrix3fc$$Type): Self
 "mulPose"(arg0: $Matrix4fc$$Type): Self
 "mulNormal"(arg0: $Matrix3fc$$Type): Self
 "rotateXCentered"(radians: float): Self
 "rotateYCentered"(radians: float): Self
 "rotateZCentered"(radians: float): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Axis$$Type): Self
 "rotateXCenteredDegrees"(degrees: float): Self
 "rotateYCenteredDegrees"(degrees: float): Self
 "rotateZCenteredDegrees"(degrees: float): Self
 "rotateAround"(quaternion: $Quaternionfc$$Type, vec: $Vector3fc$$Type): Self
 "rotateAround"(quaternion: $Quaternionfc$$Type, x: float, y: float, z: float): Self
 "rotateCentered"(radians: float, axis: $Axis$$Type): Self
 "rotateCentered"(radians: float, axis: $Direction$$Type): Self
 "rotateCentered"(q: $Quaternionfc$$Type): Self
 "rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateCentered"(radians: float, axis: $Direction$Axis$$Type): Self
 "rotateCentered"(radians: float, axis: $Vector3fc$$Type): Self
 "translate"(vec: $Vector3fc$$Type): Self
 "translate"(vec: $Vec3$$Type): Self
 "translate"(vec: $Vec3i$$Type): Self
 "translate"(vec: $Vector3ic$$Type): Self
 "translate"(x: double, y: double, z: double): Self
 "translate"(v: float): Self
 "translate"(arg0: float, arg1: float, arg2: float): Self
 "center"(): Self
 "nudge"(seed: integer): Self
 "uncenter"(): Self
 "translateZ"(z: float): Self
 "translateBack"(vec: $Vector3ic$$Type): Self
 "translateBack"(vec: $Vector3fc$$Type): Self
 "translateBack"(vec: $Vec3$$Type): Self
 "translateBack"(x: float, y: float, z: float): Self
 "translateBack"(vec: $Vec3i$$Type): Self
 "translateBack"(v: float): Self
 "translateBack"(x: double, y: double, z: double): Self
 "translateX"(x: float): Self
 "translateY"(y: float): Self
 "self"(): Self
 "rotate"(radians: float, axis: $Vector3fc$$Type): Self
 "rotate"(radians: float, axis: $Direction$$Type): Self
 "rotate"(radians: float, axis: $Direction$Axis$$Type): Self
 "rotate"(arg0: $Quaternionfc$$Type): Self
 "rotate"(axisAngle: $AxisAngle4f$$Type): Self
 "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotate"(radians: float, axis: $Axis$$Type): Self
 "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): Self
 "rotateTo"(from: $Direction$$Type, to: $Direction$$Type): Self
 "rotateTo"(from: $Vector3fc$$Type, to: $Vector3fc$$Type): Self
 "rotateX"(radians: float): Self
 "rotateY"(radians: float): Self
 "rotateZ"(radians: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Axis$$Type): Self
 "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$$Type): Self
 "rotateToFace"(facing: $Direction$$Type): Self
 "rotateYDegrees"(degrees: float): Self
 "rotateZDegrees"(degrees: float): Self
 "rotateXDegrees"(degrees: float): Self
 "scale"(factors: $Vector3fc$$Type): Self
 "scale"(factor: float): Self
 "scale"(arg0: float, arg1: float, arg2: float): Self
 "scaleZ"(factor: float): Self
 "scaleX"(factor: float): Self
 "scaleY"(factor: float): Self
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformStack$$Type<Self> = ($TransformStack<(Self)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformStack_<Self> = $TransformStack$$Type<(Self)>;
}}
declare module "dev.engine_room.flywheel.api.visual.EntityVisual" {
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Visual, $Visual$$Type} from "dev.engine_room.flywheel.api.visual.Visual"

export interface $EntityVisual<T extends $Entity> extends $Visual {

 "update"(arg0: float): void
 "delete"(): void
}

export namespace $EntityVisual {
const probejs$$marker: never
}
export class $EntityVisual$$Static<T extends $Entity> implements $EntityVisual {


 "update"(arg0: float): void
 "delete"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityVisual$$Type<T> = ($EntityVisual<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityVisual_<T> = $EntityVisual$$Type<(T)>;
}}
declare module "dev.engine_room.flywheel.lib.transform.Transform" {
import {$Quaternionfc, $Quaternionfc$$Type} from "org.joml.Quaternionfc"
import {$Affine, $Affine$$Type} from "dev.engine_room.flywheel.lib.transform.Affine"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$PoseStack$Pose, $PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Vector3ic, $Vector3ic$$Type} from "org.joml.Vector3ic"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Matrix4fc, $Matrix4fc$$Type} from "org.joml.Matrix4fc"
import {$Axis, $Axis$$Type} from "com.mojang.math.Axis"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Matrix3fc, $Matrix3fc$$Type} from "org.joml.Matrix3fc"
import {$Vector3fc, $Vector3fc$$Type} from "org.joml.Vector3fc"
import {$AxisAngle4f, $AxisAngle4f$$Type} from "org.joml.AxisAngle4f"

export interface $Transform<Self extends $Transform<(Self)>> extends $Affine<(Self)> {

 "transform"(pose: $PoseStack$Pose$$Type): Self
 "transform"(stack: $PoseStack$$Type): Self
 "transform"(pose: $Matrix4fc$$Type, normal: $Matrix3fc$$Type): Self
 "mulPose"(arg0: $Matrix4fc$$Type): Self
 "mulNormal"(arg0: $Matrix3fc$$Type): Self
 "rotateXCentered"(radians: float): Self
 "rotateYCentered"(radians: float): Self
 "rotateZCentered"(radians: float): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Axis$$Type): Self
 "rotateXCenteredDegrees"(degrees: float): Self
 "rotateYCenteredDegrees"(degrees: float): Self
 "rotateZCenteredDegrees"(degrees: float): Self
 "rotateAround"(quaternion: $Quaternionfc$$Type, vec: $Vector3fc$$Type): Self
 "rotateAround"(quaternion: $Quaternionfc$$Type, x: float, y: float, z: float): Self
 "rotateCentered"(radians: float, axis: $Axis$$Type): Self
 "rotateCentered"(radians: float, axis: $Direction$$Type): Self
 "rotateCentered"(q: $Quaternionfc$$Type): Self
 "rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateCentered"(radians: float, axis: $Direction$Axis$$Type): Self
 "rotateCentered"(radians: float, axis: $Vector3fc$$Type): Self
 "translate"(vec: $Vector3fc$$Type): Self
 "translate"(vec: $Vec3$$Type): Self
 "translate"(vec: $Vec3i$$Type): Self
 "translate"(vec: $Vector3ic$$Type): Self
 "translate"(x: double, y: double, z: double): Self
 "translate"(v: float): Self
 "translate"(arg0: float, arg1: float, arg2: float): Self
 "center"(): Self
 "nudge"(seed: integer): Self
 "uncenter"(): Self
 "translateZ"(z: float): Self
 "translateBack"(vec: $Vector3ic$$Type): Self
 "translateBack"(vec: $Vector3fc$$Type): Self
 "translateBack"(vec: $Vec3$$Type): Self
 "translateBack"(x: float, y: float, z: float): Self
 "translateBack"(vec: $Vec3i$$Type): Self
 "translateBack"(v: float): Self
 "translateBack"(x: double, y: double, z: double): Self
 "translateX"(x: float): Self
 "translateY"(y: float): Self
 "self"(): Self
 "rotate"(radians: float, axis: $Vector3fc$$Type): Self
 "rotate"(radians: float, axis: $Direction$$Type): Self
 "rotate"(radians: float, axis: $Direction$Axis$$Type): Self
 "rotate"(arg0: $Quaternionfc$$Type): Self
 "rotate"(axisAngle: $AxisAngle4f$$Type): Self
 "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotate"(radians: float, axis: $Axis$$Type): Self
 "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): Self
 "rotateTo"(from: $Direction$$Type, to: $Direction$$Type): Self
 "rotateTo"(from: $Vector3fc$$Type, to: $Vector3fc$$Type): Self
 "rotateX"(radians: float): Self
 "rotateY"(radians: float): Self
 "rotateZ"(radians: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Axis$$Type): Self
 "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$$Type): Self
 "rotateToFace"(facing: $Direction$$Type): Self
 "rotateYDegrees"(degrees: float): Self
 "rotateZDegrees"(degrees: float): Self
 "rotateXDegrees"(degrees: float): Self
 "scale"(factors: $Vector3fc$$Type): Self
 "scale"(factor: float): Self
 "scale"(arg0: float, arg1: float, arg2: float): Self
 "scaleZ"(factor: float): Self
 "scaleX"(factor: float): Self
 "scaleY"(factor: float): Self
}

export namespace $Transform {
const probejs$$marker: never
}
export class $Transform$$Static<Self extends $Transform<(Self)>> implements $Transform {


 "transform"(pose: $PoseStack$Pose$$Type): Self
 "transform"(stack: $PoseStack$$Type): Self
 "transform"(pose: $Matrix4fc$$Type, normal: $Matrix3fc$$Type): Self
 "mulPose"(arg0: $Matrix4fc$$Type): Self
 "mulNormal"(arg0: $Matrix3fc$$Type): Self
 "rotateXCentered"(radians: float): Self
 "rotateYCentered"(radians: float): Self
 "rotateZCentered"(radians: float): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Axis$$Type): Self
 "rotateXCenteredDegrees"(degrees: float): Self
 "rotateYCenteredDegrees"(degrees: float): Self
 "rotateZCenteredDegrees"(degrees: float): Self
 "rotateAround"(quaternion: $Quaternionfc$$Type, vec: $Vector3fc$$Type): Self
 "rotateAround"(quaternion: $Quaternionfc$$Type, x: float, y: float, z: float): Self
 "rotateCentered"(radians: float, axis: $Axis$$Type): Self
 "rotateCentered"(radians: float, axis: $Direction$$Type): Self
 "rotateCentered"(q: $Quaternionfc$$Type): Self
 "rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateCentered"(radians: float, axis: $Direction$Axis$$Type): Self
 "rotateCentered"(radians: float, axis: $Vector3fc$$Type): Self
 "translate"(vec: $Vector3fc$$Type): Self
 "translate"(vec: $Vec3$$Type): Self
 "translate"(vec: $Vec3i$$Type): Self
 "translate"(vec: $Vector3ic$$Type): Self
 "translate"(x: double, y: double, z: double): Self
 "translate"(v: float): Self
 "translate"(arg0: float, arg1: float, arg2: float): Self
 "center"(): Self
 "nudge"(seed: integer): Self
 "uncenter"(): Self
 "translateZ"(z: float): Self
 "translateBack"(vec: $Vector3ic$$Type): Self
 "translateBack"(vec: $Vector3fc$$Type): Self
 "translateBack"(vec: $Vec3$$Type): Self
 "translateBack"(x: float, y: float, z: float): Self
 "translateBack"(vec: $Vec3i$$Type): Self
 "translateBack"(v: float): Self
 "translateBack"(x: double, y: double, z: double): Self
 "translateX"(x: float): Self
 "translateY"(y: float): Self
 "self"(): Self
 "rotate"(radians: float, axis: $Vector3fc$$Type): Self
 "rotate"(radians: float, axis: $Direction$$Type): Self
 "rotate"(radians: float, axis: $Direction$Axis$$Type): Self
 "rotate"(arg0: $Quaternionfc$$Type): Self
 "rotate"(axisAngle: $AxisAngle4f$$Type): Self
 "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotate"(radians: float, axis: $Axis$$Type): Self
 "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): Self
 "rotateTo"(from: $Direction$$Type, to: $Direction$$Type): Self
 "rotateTo"(from: $Vector3fc$$Type, to: $Vector3fc$$Type): Self
 "rotateX"(radians: float): Self
 "rotateY"(radians: float): Self
 "rotateZ"(radians: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Axis$$Type): Self
 "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$$Type): Self
 "rotateToFace"(facing: $Direction$$Type): Self
 "rotateYDegrees"(degrees: float): Self
 "rotateZDegrees"(degrees: float): Self
 "rotateXDegrees"(degrees: float): Self
 "scale"(factors: $Vector3fc$$Type): Self
 "scale"(factor: float): Self
 "scale"(arg0: float, arg1: float, arg2: float): Self
 "scaleZ"(factor: float): Self
 "scaleX"(factor: float): Self
 "scaleY"(factor: float): Self
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transform$$Type<Self> = ($Transform<(Self)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transform_<Self> = $Transform$$Type<(Self)>;
}}
declare module "dev.engine_room.flywheel.api.visualization.EntityVisualizer" {
import {$VisualizationContext, $VisualizationContext$$Type} from "dev.engine_room.flywheel.api.visualization.VisualizationContext"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$EntityVisual, $EntityVisual$$Type} from "dev.engine_room.flywheel.api.visual.EntityVisual"

export interface $EntityVisualizer<T extends $Entity> {

 "skipVanillaRender"(arg0: T): boolean
 "createVisual"(arg0: $VisualizationContext$$Type, arg1: T, arg2: float): $EntityVisual<(T)>
}

export namespace $EntityVisualizer {
const probejs$$marker: never
}
export class $EntityVisualizer$$Static<T extends $Entity> implements $EntityVisualizer {


 "skipVanillaRender"(arg0: T): boolean
 "createVisual"(arg0: $VisualizationContext$$Type, arg1: T, arg2: float): $EntityVisual<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityVisualizer$$Type<T> = ($EntityVisualizer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityVisualizer_<T> = $EntityVisualizer$$Type<(T)>;
}}
declare module "dev.engine_room.flywheel.api.instance.Instance" {
import {$InstanceType, $InstanceType$$Type} from "dev.engine_room.flywheel.api.instance.InstanceType"
import {$InstanceHandle, $InstanceHandle$$Type} from "dev.engine_room.flywheel.api.instance.InstanceHandle"

export interface $Instance {

 "type"(): $InstanceType<(any)>
 "delete"(): void
 "handle"(): $InstanceHandle
 "setChanged"(): void
 "setVisible"(visible: boolean): void
set "visible"(value: boolean)
}

export namespace $Instance {
const probejs$$marker: never
}
export class $Instance$$Static implements $Instance {


 "type"(): $InstanceType<(any)>
 "delete"(): void
 "handle"(): $InstanceHandle
 "setChanged"(): void
 "setVisible"(visible: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Instance$$Type = ($Instance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Instance_ = $Instance$$Type;
}}
declare module "dev.engine_room.flywheel.api.instance.InstanceWriter" {
import {$Instance, $Instance$$Type} from "dev.engine_room.flywheel.api.instance.Instance"

export interface $InstanceWriter<I extends $Instance> {

 "write"(arg0: long, arg1: I): void

(arg0: long, arg1: I): void
}

export namespace $InstanceWriter {
const probejs$$marker: never
}
export class $InstanceWriter$$Static<I extends $Instance> implements $InstanceWriter {


 "write"(arg0: long, arg1: I): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstanceWriter$$Type<I> = ((arg0: long, arg1: I) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InstanceWriter_<I> = $InstanceWriter$$Type<(I)>;
}}
declare module "dev.engine_room.flywheel.lib.transform.Affine" {
import {$Quaternionfc, $Quaternionfc$$Type} from "org.joml.Quaternionfc"
import {$Scale, $Scale$$Type} from "dev.engine_room.flywheel.lib.transform.Scale"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Rotate, $Rotate$$Type} from "dev.engine_room.flywheel.lib.transform.Rotate"
import {$Translate, $Translate$$Type} from "dev.engine_room.flywheel.lib.transform.Translate"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Vector3ic, $Vector3ic$$Type} from "org.joml.Vector3ic"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Axis, $Axis$$Type} from "com.mojang.math.Axis"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Vector3fc, $Vector3fc$$Type} from "org.joml.Vector3fc"
import {$AxisAngle4f, $AxisAngle4f$$Type} from "org.joml.AxisAngle4f"

export interface $Affine<Self extends $Affine<(Self)>> extends $Translate<(Self)>, $Rotate<(Self)>, $Scale<(Self)> {

 "rotateXCentered"(radians: float): Self
 "rotateYCentered"(radians: float): Self
 "rotateZCentered"(radians: float): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Axis$$Type): Self
 "rotateXCenteredDegrees"(degrees: float): Self
 "rotateYCenteredDegrees"(degrees: float): Self
 "rotateZCenteredDegrees"(degrees: float): Self
 "rotateAround"(quaternion: $Quaternionfc$$Type, vec: $Vector3fc$$Type): Self
 "rotateAround"(quaternion: $Quaternionfc$$Type, x: float, y: float, z: float): Self
 "rotateCentered"(radians: float, axis: $Axis$$Type): Self
 "rotateCentered"(radians: float, axis: $Direction$$Type): Self
 "rotateCentered"(q: $Quaternionfc$$Type): Self
 "rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateCentered"(radians: float, axis: $Direction$Axis$$Type): Self
 "rotateCentered"(radians: float, axis: $Vector3fc$$Type): Self
 "translate"(vec: $Vector3fc$$Type): Self
 "translate"(vec: $Vec3$$Type): Self
 "translate"(vec: $Vec3i$$Type): Self
 "translate"(vec: $Vector3ic$$Type): Self
 "translate"(x: double, y: double, z: double): Self
 "translate"(v: float): Self
 "translate"(arg0: float, arg1: float, arg2: float): Self
 "center"(): Self
 "nudge"(seed: integer): Self
 "uncenter"(): Self
 "translateZ"(z: float): Self
 "translateBack"(vec: $Vector3ic$$Type): Self
 "translateBack"(vec: $Vector3fc$$Type): Self
 "translateBack"(vec: $Vec3$$Type): Self
 "translateBack"(x: float, y: float, z: float): Self
 "translateBack"(vec: $Vec3i$$Type): Self
 "translateBack"(v: float): Self
 "translateBack"(x: double, y: double, z: double): Self
 "translateX"(x: float): Self
 "translateY"(y: float): Self
 "self"(): Self
 "rotate"(radians: float, axis: $Vector3fc$$Type): Self
 "rotate"(radians: float, axis: $Direction$$Type): Self
 "rotate"(radians: float, axis: $Direction$Axis$$Type): Self
 "rotate"(arg0: $Quaternionfc$$Type): Self
 "rotate"(axisAngle: $AxisAngle4f$$Type): Self
 "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotate"(radians: float, axis: $Axis$$Type): Self
 "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): Self
 "rotateTo"(from: $Direction$$Type, to: $Direction$$Type): Self
 "rotateTo"(from: $Vector3fc$$Type, to: $Vector3fc$$Type): Self
 "rotateX"(radians: float): Self
 "rotateY"(radians: float): Self
 "rotateZ"(radians: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Axis$$Type): Self
 "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$$Type): Self
 "rotateToFace"(facing: $Direction$$Type): Self
 "rotateYDegrees"(degrees: float): Self
 "rotateZDegrees"(degrees: float): Self
 "rotateXDegrees"(degrees: float): Self
 "scale"(factors: $Vector3fc$$Type): Self
 "scale"(factor: float): Self
 "scale"(arg0: float, arg1: float, arg2: float): Self
 "scaleZ"(factor: float): Self
 "scaleX"(factor: float): Self
 "scaleY"(factor: float): Self
}

export namespace $Affine {
const probejs$$marker: never
}
export class $Affine$$Static<Self extends $Affine<(Self)>> implements $Affine {


 "rotateXCentered"(radians: float): Self
 "rotateYCentered"(radians: float): Self
 "rotateZCentered"(radians: float): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Axis$$Type): Self
 "rotateXCenteredDegrees"(degrees: float): Self
 "rotateYCenteredDegrees"(degrees: float): Self
 "rotateZCenteredDegrees"(degrees: float): Self
 "rotateAround"(quaternion: $Quaternionfc$$Type, vec: $Vector3fc$$Type): Self
 "rotateAround"(quaternion: $Quaternionfc$$Type, x: float, y: float, z: float): Self
 "rotateCentered"(radians: float, axis: $Axis$$Type): Self
 "rotateCentered"(radians: float, axis: $Direction$$Type): Self
 "rotateCentered"(q: $Quaternionfc$$Type): Self
 "rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateCentered"(radians: float, axis: $Direction$Axis$$Type): Self
 "rotateCentered"(radians: float, axis: $Vector3fc$$Type): Self
 "translate"(vec: $Vector3fc$$Type): Self
 "translate"(vec: $Vec3$$Type): Self
 "translate"(vec: $Vec3i$$Type): Self
 "translate"(vec: $Vector3ic$$Type): Self
 "translate"(x: double, y: double, z: double): Self
 "translate"(v: float): Self
 "translate"(arg0: float, arg1: float, arg2: float): Self
 "center"(): Self
 "nudge"(seed: integer): Self
 "uncenter"(): Self
 "translateZ"(z: float): Self
 "translateBack"(vec: $Vector3ic$$Type): Self
 "translateBack"(vec: $Vector3fc$$Type): Self
 "translateBack"(vec: $Vec3$$Type): Self
 "translateBack"(x: float, y: float, z: float): Self
 "translateBack"(vec: $Vec3i$$Type): Self
 "translateBack"(v: float): Self
 "translateBack"(x: double, y: double, z: double): Self
 "translateX"(x: float): Self
 "translateY"(y: float): Self
 "self"(): Self
 "rotate"(radians: float, axis: $Vector3fc$$Type): Self
 "rotate"(radians: float, axis: $Direction$$Type): Self
 "rotate"(radians: float, axis: $Direction$Axis$$Type): Self
 "rotate"(arg0: $Quaternionfc$$Type): Self
 "rotate"(axisAngle: $AxisAngle4f$$Type): Self
 "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotate"(radians: float, axis: $Axis$$Type): Self
 "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): Self
 "rotateTo"(from: $Direction$$Type, to: $Direction$$Type): Self
 "rotateTo"(from: $Vector3fc$$Type, to: $Vector3fc$$Type): Self
 "rotateX"(radians: float): Self
 "rotateY"(radians: float): Self
 "rotateZ"(radians: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Axis$$Type): Self
 "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$$Type): Self
 "rotateToFace"(facing: $Direction$$Type): Self
 "rotateYDegrees"(degrees: float): Self
 "rotateZDegrees"(degrees: float): Self
 "rotateXDegrees"(degrees: float): Self
 "scale"(factors: $Vector3fc$$Type): Self
 "scale"(factor: float): Self
 "scale"(arg0: float, arg1: float, arg2: float): Self
 "scaleZ"(factor: float): Self
 "scaleX"(factor: float): Self
 "scaleY"(factor: float): Self
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Affine$$Type<Self> = ($Affine<(Self)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Affine_<Self> = $Affine$$Type<(Self)>;
}}
declare module "dev.engine_room.flywheel.impl.extension.LevelExtension" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $LevelExtension {

 "flywheel$getAllLoadedEntities"(): $Iterable<($Entity)>

(): $Iterable$$Type<($Entity$$Type)>
}

export namespace $LevelExtension {
function getAllLoadedEntities(level: $Level$$Type): $Iterable<($Entity)>
const probejs$$marker: never
}
export class $LevelExtension$$Static implements $LevelExtension {


 "flywheel$getAllLoadedEntities"(): $Iterable<($Entity)>
static "getAllLoadedEntities"(level: $Level$$Type): $Iterable<($Entity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelExtension$$Type = (() => $Iterable$$Type<($Entity$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelExtension_ = $LevelExtension$$Type;
}}
declare module "dev.engine_room.flywheel.impl.extension.PoseStackExtension" {
import {$PoseTransformStack, $PoseTransformStack$$Type} from "dev.engine_room.flywheel.lib.transform.PoseTransformStack"

export interface $PoseStackExtension {

 "flywheel$transformStack"(): $PoseTransformStack

(): $PoseTransformStack$$Type
}

export namespace $PoseStackExtension {
const probejs$$marker: never
}
export class $PoseStackExtension$$Static implements $PoseStackExtension {


 "flywheel$transformStack"(): $PoseTransformStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseStackExtension$$Type = (() => $PoseTransformStack$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoseStackExtension_ = $PoseStackExtension$$Type;
}}
declare module "dev.engine_room.flywheel.api.visual.ShaderLightVisual" {
import {$SectionTrackedVisual, $SectionTrackedVisual$$Type} from "dev.engine_room.flywheel.api.visual.SectionTrackedVisual"
import {$SectionTrackedVisual$SectionCollector, $SectionTrackedVisual$SectionCollector$$Type} from "dev.engine_room.flywheel.api.visual.SectionTrackedVisual$SectionCollector"

export interface $ShaderLightVisual extends $SectionTrackedVisual {

 "setSectionCollector"(arg0: $SectionTrackedVisual$SectionCollector$$Type): void
 "update"(arg0: float): void
 "delete"(): void
set "sectionCollector"(value: $SectionTrackedVisual$SectionCollector$$Type)
}

export namespace $ShaderLightVisual {
const probejs$$marker: never
}
export class $ShaderLightVisual$$Static implements $ShaderLightVisual {


 "setSectionCollector"(arg0: $SectionTrackedVisual$SectionCollector$$Type): void
 "update"(arg0: float): void
 "delete"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderLightVisual$$Type = ($ShaderLightVisual);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShaderLightVisual_ = $ShaderLightVisual$$Type;
}}
declare module "dev.engine_room.flywheel.lib.transform.Rotate" {
import {$Quaternionfc, $Quaternionfc$$Type} from "org.joml.Quaternionfc"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Axis, $Axis$$Type} from "com.mojang.math.Axis"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Vector3fc, $Vector3fc$$Type} from "org.joml.Vector3fc"
import {$AxisAngle4f, $AxisAngle4f$$Type} from "org.joml.AxisAngle4f"

export interface $Rotate<Self extends $Rotate<(Self)>> {

 "self"(): Self
 "rotate"(radians: float, axis: $Vector3fc$$Type): Self
 "rotate"(radians: float, axis: $Direction$$Type): Self
 "rotate"(radians: float, axis: $Direction$Axis$$Type): Self
 "rotate"(arg0: $Quaternionfc$$Type): Self
 "rotate"(axisAngle: $AxisAngle4f$$Type): Self
 "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotate"(radians: float, axis: $Axis$$Type): Self
 "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): Self
 "rotateTo"(from: $Direction$$Type, to: $Direction$$Type): Self
 "rotateTo"(from: $Vector3fc$$Type, to: $Vector3fc$$Type): Self
 "rotateX"(radians: float): Self
 "rotateY"(radians: float): Self
 "rotateZ"(radians: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Axis$$Type): Self
 "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$$Type): Self
 "rotateToFace"(facing: $Direction$$Type): Self
 "rotateYDegrees"(degrees: float): Self
 "rotateZDegrees"(degrees: float): Self
 "rotateXDegrees"(degrees: float): Self

(arg0: $Quaternionfc): Self
}

export namespace $Rotate {
const probejs$$marker: never
}
export class $Rotate$$Static<Self extends $Rotate<(Self)>> implements $Rotate {


 "self"(): Self
 "rotate"(radians: float, axis: $Vector3fc$$Type): Self
 "rotate"(radians: float, axis: $Direction$$Type): Self
 "rotate"(radians: float, axis: $Direction$Axis$$Type): Self
 "rotate"(arg0: $Quaternionfc$$Type): Self
 "rotate"(axisAngle: $AxisAngle4f$$Type): Self
 "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotate"(radians: float, axis: $Axis$$Type): Self
 "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): Self
 "rotateTo"(from: $Direction$$Type, to: $Direction$$Type): Self
 "rotateTo"(from: $Vector3fc$$Type, to: $Vector3fc$$Type): Self
 "rotateX"(radians: float): Self
 "rotateY"(radians: float): Self
 "rotateZ"(radians: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Axis$$Type): Self
 "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$$Type): Self
 "rotateToFace"(facing: $Direction$$Type): Self
 "rotateYDegrees"(degrees: float): Self
 "rotateZDegrees"(degrees: float): Self
 "rotateXDegrees"(degrees: float): Self
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rotate$$Type<Self> = ((arg0: $Quaternionfc) => Self);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rotate_<Self> = $Rotate$$Type<(Self)>;
}}
declare module "dev.engine_room.flywheel.impl.extension.EntityTypeExtension" {
import {$EntityVisualizer, $EntityVisualizer$$Type} from "dev.engine_room.flywheel.api.visualization.EntityVisualizer"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $EntityTypeExtension<T extends $Entity> {

 "flywheel$getVisualizer"(): $EntityVisualizer<(T)>
 "flywheel$setVisualizer"(arg0: $EntityVisualizer$$Type<(T)>): void
}

export namespace $EntityTypeExtension {
const probejs$$marker: never
}
export class $EntityTypeExtension$$Static<T extends $Entity> implements $EntityTypeExtension {


 "flywheel$getVisualizer"(): $EntityVisualizer<(T)>
 "flywheel$setVisualizer"(arg0: $EntityVisualizer$$Type<(T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTypeExtension$$Type<T> = ($EntityTypeExtension<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityTypeExtension_<T> = $EntityTypeExtension$$Type<(T)>;
}}
declare module "dev.engine_room.flywheel.api.visual.LightUpdatedVisual" {
import {$SectionTrackedVisual, $SectionTrackedVisual$$Type} from "dev.engine_room.flywheel.api.visual.SectionTrackedVisual"
import {$SectionTrackedVisual$SectionCollector, $SectionTrackedVisual$SectionCollector$$Type} from "dev.engine_room.flywheel.api.visual.SectionTrackedVisual$SectionCollector"

export interface $LightUpdatedVisual extends $SectionTrackedVisual {

 "updateLight"(arg0: float): void
 "setSectionCollector"(arg0: $SectionTrackedVisual$SectionCollector$$Type): void
 "update"(arg0: float): void
 "delete"(): void
set "sectionCollector"(value: $SectionTrackedVisual$SectionCollector$$Type)
}

export namespace $LightUpdatedVisual {
const probejs$$marker: never
}
export class $LightUpdatedVisual$$Static implements $LightUpdatedVisual {


 "updateLight"(arg0: float): void
 "setSectionCollector"(arg0: $SectionTrackedVisual$SectionCollector$$Type): void
 "update"(arg0: float): void
 "delete"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightUpdatedVisual$$Type = ($LightUpdatedVisual);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightUpdatedVisual_ = $LightUpdatedVisual$$Type;
}}
declare module "dev.engine_room.flywheel.lib.visual.AbstractEntityVisual" {
import {$AbstractVisual, $AbstractVisual$$Type} from "dev.engine_room.flywheel.lib.visual.AbstractVisual"
import {$FrustumIntersection, $FrustumIntersection$$Type} from "org.joml.FrustumIntersection"
import {$VisualizationContext, $VisualizationContext$$Type} from "dev.engine_room.flywheel.api.visualization.VisualizationContext"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$EntityVisual, $EntityVisual$$Type} from "dev.engine_room.flywheel.api.visual.EntityVisual"

export class $AbstractEntityVisual<T extends $Entity> extends $AbstractVisual implements $EntityVisual<(T)> {

constructor(ctx: $VisualizationContext$$Type, entity: T, partialTick: float)

public "isVisible"(frustum: $FrustumIntersection$$Type): boolean
public "distanceSquared"(x: double, y: double, z: double): double
public "getVisualPosition"(): $Vector3f
public "getVisualPosition"(partialTick: float): $Vector3f
get "visualPosition"(): $Vector3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractEntityVisual$$Type<T> = ($AbstractEntityVisual<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractEntityVisual_<T> = $AbstractEntityVisual$$Type<(T)>;
}}
declare module "dev.engine_room.flywheel.api.task.Plan" {
import {$TaskExecutor, $TaskExecutor$$Type} from "dev.engine_room.flywheel.api.task.TaskExecutor"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export interface $Plan<C> {

 "execute"(arg0: $TaskExecutor$$Type, arg1: C, arg2: $Runnable$$Type): void
 "execute"(taskExecutor: $TaskExecutor$$Type, context: C): void
 "and"(arg0: $Plan$$Type<(C)>): $Plan<(C)>
 "then"(arg0: $Plan$$Type<(C)>): $Plan<(C)>
}

export namespace $Plan {
const probejs$$marker: never
}
export class $Plan$$Static<C> implements $Plan {


 "execute"(arg0: $TaskExecutor$$Type, arg1: C, arg2: $Runnable$$Type): void
 "execute"(taskExecutor: $TaskExecutor$$Type, context: C): void
 "and"(arg0: $Plan$$Type<(C)>): $Plan<(C)>
 "then"(arg0: $Plan$$Type<(C)>): $Plan<(C)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Plan$$Type<C> = ($Plan<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Plan_<C> = $Plan$$Type<(C)>;
}}
declare module "dev.engine_room.flywheel.api.visual.DistanceUpdateLimiter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DistanceUpdateLimiter {

 "shouldUpdate"(arg0: double): boolean

(arg0: double): boolean
}

export namespace $DistanceUpdateLimiter {
const probejs$$marker: never
}
export class $DistanceUpdateLimiter$$Static implements $DistanceUpdateLimiter {


 "shouldUpdate"(arg0: double): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DistanceUpdateLimiter$$Type = ((arg0: double) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DistanceUpdateLimiter_ = $DistanceUpdateLimiter$$Type;
}}
declare module "dev.engine_room.flywheel.lib.model.baked.PartialModel" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"

export class $PartialModel {


public "get"(): $BakedModel
public static "of"(modelLocation: $ResourceLocation$$Type): $PartialModel
public "modelLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartialModel$$Type = ($PartialModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartialModel_ = $PartialModel$$Type;
}}
declare module "dev.engine_room.flywheel.api.visual.TickableVisual$Context" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TickableVisual$Context {

}

export namespace $TickableVisual$Context {
const probejs$$marker: never
}
export class $TickableVisual$Context$$Static implements $TickableVisual$Context {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickableVisual$Context$$Type = ($TickableVisual$Context);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickableVisual$Context_ = $TickableVisual$Context$$Type;
}}
declare module "dev.engine_room.flywheel.api.instance.InstanceType" {
import {$Layout, $Layout$$Type} from "dev.engine_room.flywheel.api.layout.Layout"
import {$InstanceWriter, $InstanceWriter$$Type} from "dev.engine_room.flywheel.api.instance.InstanceWriter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Instance, $Instance$$Type} from "dev.engine_room.flywheel.api.instance.Instance"
import {$InstanceHandle, $InstanceHandle$$Type} from "dev.engine_room.flywheel.api.instance.InstanceHandle"

export interface $InstanceType<I extends $Instance> {

 "writer"(): $InstanceWriter<(I)>
 "create"(arg0: $InstanceHandle$$Type): I
 "layout"(): $Layout
 "vertexShader"(): $ResourceLocation
 "cullShader"(): $ResourceLocation
}

export namespace $InstanceType {
const probejs$$marker: never
}
export class $InstanceType$$Static<I extends $Instance> implements $InstanceType {


 "writer"(): $InstanceWriter<(I)>
 "create"(arg0: $InstanceHandle$$Type): I
 "layout"(): $Layout
 "vertexShader"(): $ResourceLocation
 "cullShader"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstanceType$$Type<I> = ($InstanceType<(I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InstanceType_<I> = $InstanceType$$Type<(I)>;
}}
declare module "dev.engine_room.flywheel.api.visualization.VisualizationContext" {
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$VisualEmbedding, $VisualEmbedding$$Type} from "dev.engine_room.flywheel.api.visualization.VisualEmbedding"
import {$InstancerProvider, $InstancerProvider$$Type} from "dev.engine_room.flywheel.api.instance.InstancerProvider"

export interface $VisualizationContext {

 "createEmbedding"(arg0: $Vec3i$$Type): $VisualEmbedding
 "instancerProvider"(): $InstancerProvider
 "renderOrigin"(): $Vec3i
}

export namespace $VisualizationContext {
const probejs$$marker: never
}
export class $VisualizationContext$$Static implements $VisualizationContext {


 "createEmbedding"(arg0: $Vec3i$$Type): $VisualEmbedding
 "instancerProvider"(): $InstancerProvider
 "renderOrigin"(): $Vec3i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VisualizationContext$$Type = ($VisualizationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VisualizationContext_ = $VisualizationContext$$Type;
}}
declare module "dev.engine_room.flywheel.api.model.Model$ConfiguredMesh" {
import {$Mesh, $Mesh$$Type} from "dev.engine_room.flywheel.api.model.Mesh"
import {$Record, $Record$$Type} from "java.lang.Record"
import {$Material, $Material$$Type} from "dev.engine_room.flywheel.api.material.Material"

export class $Model$ConfiguredMesh extends $Record {

constructor(material: $Material$$Type, mesh: $Mesh$$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "mesh"(): $Mesh
public "material"(): $Material
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Model$ConfiguredMesh$$Type = ({"material"?: $Material$$Type, "mesh"?: $Mesh$$Type}) | ([material?: $Material$$Type, mesh?: $Mesh$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Model$ConfiguredMesh_ = $Model$ConfiguredMesh$$Type;
}}
declare module "dev.engine_room.flywheel.api.instance.InstancerProvider" {
import {$InstanceType, $InstanceType$$Type} from "dev.engine_room.flywheel.api.instance.InstanceType"
import {$Instancer, $Instancer$$Type} from "dev.engine_room.flywheel.api.instance.Instancer"
import {$Model, $Model$$Type} from "dev.engine_room.flywheel.api.model.Model"
import {$Instance, $Instance$$Type} from "dev.engine_room.flywheel.api.instance.Instance"

export interface $InstancerProvider {

 "instancer"<I extends $Instance>(arg0: $InstanceType$$Type<(I)>, arg1: $Model$$Type, arg2: integer): $Instancer<(I)>
 "instancer"<I extends $Instance>(type: $InstanceType$$Type<(I)>, model: $Model$$Type): $Instancer<(I)>

(arg0: $InstanceType<(I)>, arg1: $Model, arg2: integer): $Instancer$$Type<(I)>
}

export namespace $InstancerProvider {
const probejs$$marker: never
}
export class $InstancerProvider$$Static implements $InstancerProvider {


 "instancer"<I extends $Instance>(arg0: $InstanceType$$Type<(I)>, arg1: $Model$$Type, arg2: integer): $Instancer<(I)>
 "instancer"<I extends $Instance>(type: $InstanceType$$Type<(I)>, model: $Model$$Type): $Instancer<(I)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstancerProvider$$Type = ((arg0: $InstanceType<(I)>, arg1: $Model, arg2: integer) => $Instancer$$Type<(I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InstancerProvider_ = $InstancerProvider$$Type;
}}
declare module "dev.engine_room.flywheel.api.visual.DynamicVisual$Context" {
import {$FrustumIntersection, $FrustumIntersection$$Type} from "org.joml.FrustumIntersection"
import {$DistanceUpdateLimiter, $DistanceUpdateLimiter$$Type} from "dev.engine_room.flywheel.api.visual.DistanceUpdateLimiter"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"

export interface $DynamicVisual$Context {

 "partialTick"(): float
 "frustum"(): $FrustumIntersection
 "camera"(): $Camera
 "limiter"(): $DistanceUpdateLimiter
}

export namespace $DynamicVisual$Context {
const probejs$$marker: never
}
export class $DynamicVisual$Context$$Static implements $DynamicVisual$Context {


 "partialTick"(): float
 "frustum"(): $FrustumIntersection
 "camera"(): $Camera
 "limiter"(): $DistanceUpdateLimiter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicVisual$Context$$Type = ($DynamicVisual$Context);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicVisual$Context_ = $DynamicVisual$Context$$Type;
}}
declare module "dev.engine_room.flywheel.lib.transform.Scale" {
import {$Vector3fc, $Vector3fc$$Type} from "org.joml.Vector3fc"

export interface $Scale<Self extends $Scale<(Self)>> {

 "scale"(factors: $Vector3fc$$Type): Self
 "scale"(factor: float): Self
 "scale"(arg0: float, arg1: float, arg2: float): Self
 "scaleZ"(factor: float): Self
 "scaleX"(factor: float): Self
 "scaleY"(factor: float): Self

(arg0: float, arg1: float, arg2: float): Self
}

export namespace $Scale {
const probejs$$marker: never
}
export class $Scale$$Static<Self extends $Scale<(Self)>> implements $Scale {


 "scale"(factors: $Vector3fc$$Type): Self
 "scale"(factor: float): Self
 "scale"(arg0: float, arg1: float, arg2: float): Self
 "scaleZ"(factor: float): Self
 "scaleX"(factor: float): Self
 "scaleY"(factor: float): Self
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Scale$$Type<Self> = ((arg0: float, arg1: float, arg2: float) => Self);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Scale_<Self> = $Scale$$Type<(Self)>;
}}
declare module "dev.engine_room.flywheel.api.visual.DynamicVisual" {
import {$Plan, $Plan$$Type} from "dev.engine_room.flywheel.api.task.Plan"
import {$DynamicVisual$Context, $DynamicVisual$Context$$Type} from "dev.engine_room.flywheel.api.visual.DynamicVisual$Context"
import {$Visual, $Visual$$Type} from "dev.engine_room.flywheel.api.visual.Visual"

export interface $DynamicVisual extends $Visual {

 "planFrame"(): $Plan<($DynamicVisual$Context)>
 "update"(arg0: float): void
 "delete"(): void
}

export namespace $DynamicVisual {
const probejs$$marker: never
}
export class $DynamicVisual$$Static implements $DynamicVisual {


 "planFrame"(): $Plan<($DynamicVisual$Context)>
 "update"(arg0: float): void
 "delete"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicVisual$$Type = ($DynamicVisual);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicVisual_ = $DynamicVisual$$Type;
}}
declare module "dev.engine_room.flywheel.api.layout.Layout" {
import {$Layout$Element, $Layout$Element$$Type} from "dev.engine_room.flywheel.api.layout.Layout$Element"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"

export interface $Layout {

 "byteSize"(): integer
 "byteAlignment"(): integer
 "elements"(): $List<($Layout$Element)>
 "asMap"(): $Map<(string), ($Layout$Element)>
}

export namespace $Layout {
const MAX_ELEMENT_NAME_LENGTH: integer
const probejs$$marker: never
}
export class $Layout$$Static implements $Layout {
static readonly "MAX_ELEMENT_NAME_LENGTH": integer


 "byteSize"(): integer
 "byteAlignment"(): integer
 "elements"(): $List<($Layout$Element)>
 "asMap"(): $Map<(string), ($Layout$Element)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layout$$Type = ($Layout);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Layout_ = $Layout$$Type;
}}
declare module "dev.engine_room.flywheel.lib.transform.PoseTransformStack" {
import {$Quaternionfc, $Quaternionfc$$Type} from "org.joml.Quaternionfc"
import {$Affine, $Affine$$Type} from "dev.engine_room.flywheel.lib.transform.Affine"
import {$Scale, $Scale$$Type} from "dev.engine_room.flywheel.lib.transform.Scale"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Transform, $Transform$$Type} from "dev.engine_room.flywheel.lib.transform.Transform"
import {$TransformStack, $TransformStack$$Type} from "dev.engine_room.flywheel.lib.transform.TransformStack"
import {$Translate, $Translate$$Type} from "dev.engine_room.flywheel.lib.transform.Translate"
import {$PoseStack$Pose, $PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Vector3ic, $Vector3ic$$Type} from "org.joml.Vector3ic"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Matrix4fc, $Matrix4fc$$Type} from "org.joml.Matrix4fc"
import {$Axis, $Axis$$Type} from "com.mojang.math.Axis"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Matrix3fc, $Matrix3fc$$Type} from "org.joml.Matrix3fc"
import {$Vector3fc, $Vector3fc$$Type} from "org.joml.Vector3fc"
import {$AxisAngle4f, $AxisAngle4f$$Type} from "org.joml.AxisAngle4f"

export class $PoseTransformStack implements $TransformStack<($PoseTransformStack)> {

constructor(stack: $PoseStack$$Type)

public "scale"(arg0: float, arg1: float, arg2: float): $Scale<(any)>
public "unwrap"(): $PoseStack
public "rotate"(quaternion: $Quaternionfc$$Type): $PoseTransformStack
public "translate"(arg0: float, arg1: float, arg2: float): $Translate<(any)>
public "pushPose"(): $PoseTransformStack
public "popPose"(): $TransformStack<(any)>
public "mulPose"(pose: $Matrix4fc$$Type): $PoseTransformStack
public "rotateAround"(arg0: $Quaternionfc$$Type, arg1: float, arg2: float, arg3: float): $Affine<(any)>
public "mulNormal"(arg0: $Matrix3fc$$Type): $Transform<(any)>
public static "of"(stack: $PoseStack$$Type): $PoseTransformStack
public "transform"(pose: $PoseStack$Pose$$Type): $PoseTransformStack
public "transform"(stack: $PoseStack$$Type): $PoseTransformStack
public "transform"(pose: $Matrix4fc$$Type, normal: $Matrix3fc$$Type): $PoseTransformStack
public "rotateXCentered"(radians: float): $PoseTransformStack
public "rotateYCentered"(radians: float): $PoseTransformStack
public "rotateZCentered"(radians: float): $PoseTransformStack
public "rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$$Type): $PoseTransformStack
public "rotateCenteredDegrees"(degrees: float, axis: $Direction$$Type): $PoseTransformStack
public "rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$$Type): $PoseTransformStack
public "rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): $PoseTransformStack
public "rotateCenteredDegrees"(degrees: float, axis: $Axis$$Type): $PoseTransformStack
public "rotateXCenteredDegrees"(degrees: float): $PoseTransformStack
public "rotateYCenteredDegrees"(degrees: float): $PoseTransformStack
public "rotateZCenteredDegrees"(degrees: float): $PoseTransformStack
public "rotateAround"(quaternion: $Quaternionfc$$Type, vec: $Vector3fc$$Type): $PoseTransformStack
public "rotateCentered"(radians: float, axis: $Axis$$Type): $PoseTransformStack
public "rotateCentered"(radians: float, axis: $Direction$$Type): $PoseTransformStack
public "rotateCentered"(q: $Quaternionfc$$Type): $PoseTransformStack
public "rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): $PoseTransformStack
public "rotateCentered"(radians: float, axis: $Direction$Axis$$Type): $PoseTransformStack
public "rotateCentered"(radians: float, axis: $Vector3fc$$Type): $PoseTransformStack
public "translate"(vec: $Vector3fc$$Type): $PoseTransformStack
public "translate"(vec: $Vec3$$Type): $PoseTransformStack
public "translate"(vec: $Vec3i$$Type): $PoseTransformStack
public "translate"(vec: $Vector3ic$$Type): $PoseTransformStack
public "translate"(x: double, y: double, z: double): $PoseTransformStack
public "translate"(v: float): $PoseTransformStack
public "center"(): $PoseTransformStack
public "nudge"(seed: integer): $PoseTransformStack
public "uncenter"(): $PoseTransformStack
public "translateZ"(z: float): $PoseTransformStack
public "translateBack"(vec: $Vector3ic$$Type): $PoseTransformStack
public "translateBack"(vec: $Vector3fc$$Type): $PoseTransformStack
public "translateBack"(vec: $Vec3$$Type): $PoseTransformStack
public "translateBack"(x: float, y: float, z: float): $PoseTransformStack
public "translateBack"(vec: $Vec3i$$Type): $PoseTransformStack
public "translateBack"(v: float): $PoseTransformStack
public "translateBack"(x: double, y: double, z: double): $PoseTransformStack
public "translateX"(x: float): $PoseTransformStack
public "translateY"(y: float): $PoseTransformStack
public "self"(): $PoseTransformStack
public "rotate"(radians: float, axis: $Vector3fc$$Type): $PoseTransformStack
public "rotate"(radians: float, axis: $Direction$$Type): $PoseTransformStack
public "rotate"(radians: float, axis: $Direction$Axis$$Type): $PoseTransformStack
public "rotate"(axisAngle: $AxisAngle4f$$Type): $PoseTransformStack
public "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): $PoseTransformStack
public "rotate"(radians: float, axis: $Axis$$Type): $PoseTransformStack
public "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): $PoseTransformStack
public "rotateTo"(from: $Direction$$Type, to: $Direction$$Type): $PoseTransformStack
public "rotateTo"(from: $Vector3fc$$Type, to: $Vector3fc$$Type): $PoseTransformStack
public "rotateX"(radians: float): $PoseTransformStack
public "rotateY"(radians: float): $PoseTransformStack
public "rotateZ"(radians: float): $PoseTransformStack
public "rotateDegrees"(degrees: float, axis: $Direction$Axis$$Type): $PoseTransformStack
public "rotateDegrees"(degrees: float, axis: $Vector3fc$$Type): $PoseTransformStack
public "rotateDegrees"(degrees: float, axis: $Axis$$Type): $PoseTransformStack
public "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): $PoseTransformStack
public "rotateDegrees"(degrees: float, axis: $Direction$$Type): $PoseTransformStack
public "rotateToFace"(facing: $Direction$$Type): $PoseTransformStack
public "rotateYDegrees"(degrees: float): $PoseTransformStack
public "rotateZDegrees"(degrees: float): $PoseTransformStack
public "rotateXDegrees"(degrees: float): $PoseTransformStack
public "scale"(factors: $Vector3fc$$Type): $PoseTransformStack
public "scale"(factor: float): $PoseTransformStack
public "scaleZ"(factor: float): $PoseTransformStack
public "scaleX"(factor: float): $PoseTransformStack
public "scaleY"(factor: float): $PoseTransformStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseTransformStack$$Type = ($PoseTransformStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoseTransformStack_ = $PoseTransformStack$$Type;
}}
declare module "dev.engine_room.flywheel.backend.mixin.LevelRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LevelRendererAccessor {

 "flywheel$getTicks"(): integer

(): integer
}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
export class $LevelRendererAccessor$$Static implements $LevelRendererAccessor {


 "flywheel$getTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererAccessor$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelRendererAccessor_ = $LevelRendererAccessor$$Type;
}}
declare module "dev.engine_room.flywheel.api.visualization.BlockEntityVisualizer" {
import {$BlockEntityVisual, $BlockEntityVisual$$Type} from "dev.engine_room.flywheel.api.visual.BlockEntityVisual"
import {$VisualizationContext, $VisualizationContext$$Type} from "dev.engine_room.flywheel.api.visualization.VisualizationContext"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockEntityVisualizer<T extends $BlockEntity> {

 "skipVanillaRender"(arg0: T): boolean
 "createVisual"(arg0: $VisualizationContext$$Type, arg1: T, arg2: float): $BlockEntityVisual<(T)>
}

export namespace $BlockEntityVisualizer {
const probejs$$marker: never
}
export class $BlockEntityVisualizer$$Static<T extends $BlockEntity> implements $BlockEntityVisualizer {


 "skipVanillaRender"(arg0: T): boolean
 "createVisual"(arg0: $VisualizationContext$$Type, arg1: T, arg2: float): $BlockEntityVisual<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityVisualizer$$Type<T> = ($BlockEntityVisualizer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityVisualizer_<T> = $BlockEntityVisualizer$$Type<(T)>;
}}
declare module "dev.engine_room.flywheel.impl.mixin.ModelPartAccessor" {
import {$PoseStack$Pose, $PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$Map, $Map$$Type} from "java.util.Map"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export interface $ModelPartAccessor {

 "flywheel$children"(): $Map<(string), ($ModelPart)>
 "flywheel$compile"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: integer, arg3: integer, arg4: integer): void
}

export namespace $ModelPartAccessor {
const probejs$$marker: never
}
export class $ModelPartAccessor$$Static implements $ModelPartAccessor {


 "flywheel$children"(): $Map<(string), ($ModelPart)>
 "flywheel$compile"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: integer, arg3: integer, arg4: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartAccessor$$Type = ($ModelPartAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelPartAccessor_ = $ModelPartAccessor$$Type;
}}
declare module "dev.engine_room.flywheel.api.visualization.VisualizationLevel" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$LevelLightEngine, $LevelLightEngine$$Type} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LevelHeightAccessor, $LevelHeightAccessor$$Type} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ChunkAccess, $ChunkAccess$$Type} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$ColorResolver, $ColorResolver$$Type} from "net.minecraft.world.level.ColorResolver"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$GameEvent, $GameEvent$$Type} from "net.minecraft.world.level.gameevent.GameEvent"
import {$SoundSource, $SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$EntityTypeTest, $EntityTypeTest$$Type} from "net.minecraft.world.level.entity.EntityTypeTest"
import {$Biome, $Biome$$Type} from "net.minecraft.world.level.biome.Biome"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$BiomeManager, $BiomeManager$$Type} from "net.minecraft.world.level.biome.BiomeManager"
import {$AuxiliaryLightManager, $AuxiliaryLightManager$$Type} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$Difficulty, $Difficulty$$Type} from "net.minecraft.world.Difficulty"
import {$ChunkStatus, $ChunkStatus$$Type} from "net.minecraft.world.level.chunk.status.ChunkStatus"
import {$LevelData, $LevelData$$Type} from "net.minecraft.world.level.storage.LevelData"
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Holder$Reference, $Holder$Reference$$Type} from "net.minecraft.core.Holder$Reference"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ClipContext, $ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ChunkSource, $ChunkSource$$Type} from "net.minecraft.world.level.chunk.ChunkSource"
import {$WorldBorder, $WorldBorder$$Type} from "net.minecraft.world.level.border.WorldBorder"
import {$TickPriority, $TickPriority$$Type} from "net.minecraft.world.ticks.TickPriority"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$TargetingConditions, $TargetingConditions$$Type} from "net.minecraft.world.entity.ai.targeting.TargetingConditions"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ClipBlockStateContext, $ClipBlockStateContext$$Type} from "net.minecraft.world.level.ClipBlockStateContext"
import {$HolderLookup, $HolderLookup$$Type} from "net.minecraft.core.HolderLookup"
import {$LightLayer, $LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$GameEvent$Context, $GameEvent$Context$$Type} from "net.minecraft.world.level.gameevent.GameEvent$Context"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LevelTickAccess, $LevelTickAccess$$Type} from "net.minecraft.world.ticks.LevelTickAccess"
import {$Heightmap$Types, $Heightmap$Types$$Type} from "net.minecraft.world.level.levelgen.Heightmap$Types"
import {$Registry, $Registry$$Type} from "net.minecraft.core.Registry"
import {$DifficultyInstance, $DifficultyInstance$$Type} from "net.minecraft.world.DifficultyInstance"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$DimensionType, $DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"

export interface $VisualizationLevel extends $LevelAccessor {

 "supportsVisualization"(): boolean
 "getRandom"(): $RandomSource
 "getLevelData"(): $LevelData
 "getChunkSource"(): $ChunkSource
 "gameEvent"(arg0: $ResourceKey$$Type<($GameEvent)>, arg1: $BlockPos$$Type, arg2: $GameEvent$Context$$Type): void
 "gameEvent"(arg0: $Holder$$Type<($GameEvent)>, arg1: $BlockPos$$Type, arg2: $GameEvent$Context$$Type): void
 "gameEvent"(arg0: $Entity$$Type, arg1: $Holder$$Type<($GameEvent)>, arg2: $Vec3$$Type): void
 "gameEvent"(arg0: $Holder$$Type<($GameEvent)>, arg1: $Vec3$$Type, arg2: $GameEvent$Context$$Type): void
 "gameEvent"(arg0: $Entity$$Type, arg1: $Holder$$Type<($GameEvent)>, arg2: $BlockPos$$Type): void
 "addParticle"(arg0: $ParticleOptions$$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): void
 "getDifficulty"(): $Difficulty
 "playSound"(arg0: $Player$$Type, arg1: $BlockPos$$Type, arg2: $SoundEvent$$Type, arg3: $SoundSource$$Type, arg4: float, arg5: float): void
 "playSound"(arg0: $Player$$Type, arg1: $BlockPos$$Type, arg2: $SoundEvent$$Type, arg3: $SoundSource$$Type): void
 "getServer"(): $MinecraftServer
 "levelEvent"(arg0: $Player$$Type, arg1: integer, arg2: $BlockPos$$Type, arg3: integer): void
 "levelEvent"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
 "blockUpdated"(arg0: $BlockPos$$Type, arg1: $Block$$Type): void
 "hasChunk"(arg0: integer, arg1: integer): boolean
 "dayTime"(): long
 "getBlockTicks"(): $LevelTickAccess<($Block)>
 "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Block$$Type, arg2: integer, arg3: $TickPriority$$Type): void
 "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Fluid$$Type, arg2: integer): void
 "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Block$$Type, arg2: integer): void
 "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Fluid$$Type, arg2: integer, arg3: $TickPriority$$Type): void
 "getFluidTicks"(): $LevelTickAccess<($Fluid)>
 "neighborShapeChanged"(arg0: $Direction$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type, arg4: integer, arg5: integer): void
 "getCurrentDifficultyAt"(arg0: $BlockPos$$Type): $DifficultyInstance
 "nextSubTickCount"(): long
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
 "isUnobstructed"(arg0: $Entity$$Type, arg1: $VoxelShape$$Type): boolean
 "getHeightmapPos"(arg0: $Heightmap$Types$$Type, arg1: $BlockPos$$Type): $BlockPos
 "getEntityCollisions"(arg0: $Entity$$Type, arg1: $AABB$$Type): $List<($VoxelShape)>
 "getTimeOfDay"(arg0: float): float
 "getMoonPhase"(): integer
 "getMoonBrightness"(): float
 "getEntities"(arg0: $Entity$$Type, arg1: $AABB$$Type): $List<($Entity)>
 "getEntities"<T extends $Entity>(arg0: $EntityTypeTest$$Type<($Entity$$Type), (T)>, arg1: $AABB$$Type, arg2: $Predicate$$Type<(T)>): $List<(T)>
 "getEntities"(arg0: $Entity$$Type, arg1: $AABB$$Type, arg2: $Predicate$$Type<($Entity)>): $List<($Entity)>
 "players"(): $List<($Player)>
 "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$$Type<(T)>, arg1: $AABB$$Type, arg2: $Predicate$$Type<(T)>): $List<(T)>
 "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$$Type<(T)>, arg1: $AABB$$Type): $List<(T)>
 "getNearestPlayer"(arg0: $TargetingConditions$$Type, arg1: $LivingEntity$$Type, arg2: double, arg3: double, arg4: double): $Player
 "getNearestPlayer"(arg0: $TargetingConditions$$Type, arg1: double, arg2: double, arg3: double): $Player
 "getNearestPlayer"(arg0: $Entity$$Type, arg1: double): $Player
 "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: $Predicate$$Type<($Entity)>): $Player
 "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: boolean): $Player
 "getNearestPlayer"(arg0: $TargetingConditions$$Type, arg1: $LivingEntity$$Type): $Player
 "hasNearbyAlivePlayer"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "getNearestEntity"<T extends $LivingEntity>(arg0: $List$$Type<(T)>, arg1: $TargetingConditions$$Type, arg2: $LivingEntity$$Type, arg3: double, arg4: double, arg5: double): T
 "getNearestEntity"<T extends $LivingEntity>(arg0: $Class$$Type<(T)>, arg1: $TargetingConditions$$Type, arg2: $LivingEntity$$Type, arg3: double, arg4: double, arg5: double, arg6: $AABB$$Type): T
 "getNearbyPlayers"(arg0: $TargetingConditions$$Type, arg1: $LivingEntity$$Type, arg2: $AABB$$Type): $List<($Player)>
 "getNearbyEntities"<T extends $LivingEntity>(arg0: $Class$$Type<(T)>, arg1: $TargetingConditions$$Type, arg2: $LivingEntity$$Type, arg3: $AABB$$Type): $List<(T)>
 "getPlayerByUUID"(arg0: $UUID$$Type): $Player
 "getHeight"(arg0: $Heightmap$Types$$Type, arg1: integer, arg2: integer): integer
 "getHeight"(): integer
/**
 * 
 * @deprecated
 */
 "getLightLevelDependentMagicValue"(arg0: $BlockPos$$Type): float
 "getPathfindingCostFromLightLevels"(arg0: $BlockPos$$Type): float
 "canSeeSkyFromBelowWater"(arg0: $BlockPos$$Type): boolean
 "getMaxLocalRawBrightness"(arg0: $BlockPos$$Type): integer
 "getMaxLocalRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
 "registryAccess"(): $RegistryAccess
 "getBiome"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "isClientSide"(): boolean
/**
 * 
 * @deprecated
 */
 "hasChunkAt"(arg0: $BlockPos$$Type): boolean
/**
 * 
 * @deprecated
 */
 "hasChunkAt"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): boolean
 "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$$Type, arg3: boolean): $ChunkAccess
 "getChunk"(arg0: $BlockPos$$Type): $ChunkAccess
 "getChunk"(arg0: integer, arg1: integer): $ChunkAccess
 "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$$Type): $ChunkAccess
/**
 * 
 * @deprecated
 */
 "getSeaLevel"(): integer
 "dimensionType"(): $DimensionType
 "getSkyDarken"(): integer
 "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
 "getNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
 "isEmptyBlock"(arg0: $BlockPos$$Type): boolean
 "isWaterAt"(arg0: $BlockPos$$Type): boolean
 "holderLookup"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $HolderLookup<(T)>
 "getBlockStatesIfLoaded"(arg0: $AABB$$Type): $Stream<($BlockState)>
 "getMinBuildHeight"(): integer
 "containsAnyLiquid"(arg0: $AABB$$Type): boolean
 "getBiomeManager"(): $BiomeManager
 "getChunkForCollisions"(arg0: integer, arg1: integer): $BlockGetter
 "getUncachedNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
 "lithium$getLoadedChunk"(arg0: integer, arg1: integer): $ChunkAccess
 "enabledFeatures"(): $FeatureFlagSet
 "getLightEngine"(): $LevelLightEngine
 "canSeeSky"(arg0: $BlockPos$$Type): boolean
 "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
 "getShade"(arg0: $Direction$$Type, arg1: boolean): float
 "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
 "collidesWithSuffocatingBlock"(arg0: $Entity$$Type, arg1: $AABB$$Type): boolean
 "getWorldBorder"(): $WorldBorder
 "noCollision"(arg0: $Entity$$Type, arg1: $AABB$$Type): boolean
 "noCollision"(arg0: $Entity$$Type): boolean
 "noCollision"(arg0: $AABB$$Type): boolean
 "isUnobstructed"(arg0: $Entity$$Type): boolean
 "isUnobstructed"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $CollisionContext$$Type): boolean
 "getCollisions"(arg0: $Entity$$Type, arg1: $AABB$$Type): $Iterable<($VoxelShape)>
 "findSupportingBlock"(arg0: $Entity$$Type, arg1: $AABB$$Type): $Optional<($BlockPos)>
 "getBlockCollisions"(arg0: $Entity$$Type, arg1: $AABB$$Type): $Iterable<($VoxelShape)>
 "noBlockCollision"(arg0: $Entity$$Type, arg1: $AABB$$Type): boolean
 "findFreePosition"(arg0: $Entity$$Type, arg1: $VoxelShape$$Type, arg2: $Vec3$$Type, arg3: double, arg4: double, arg5: double): $Optional<($Vec3)>
 "shouldPassThroughWalls"(arg0: $Player$$Type): boolean
 "isVerticalCollision"(arg0: $VoxelShape$$Type, arg1: $AABB$$Type, arg2: $Player$$Type): boolean
 "getSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): integer
 "hasSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): boolean
 "getBestNeighborSignal"(arg0: $BlockPos$$Type): integer
 "getControlInputSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type, arg2: boolean): integer
 "hasNeighborSignal"(arg0: $BlockPos$$Type): boolean
 "getDirectSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): integer
 "getDirectSignalTo"(arg0: $BlockPos$$Type): integer
 "holder"<T>(arg0: $ResourceKey$$Type<(T)>): $Optional<($Holder$Reference<(T)>)>
 "holderOrThrow"<T>(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
 "isAreaLoaded"(arg0: $BlockPos$$Type, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
 "getBlockEntityRenderAttachment"(arg0: $BlockPos$$Type): any
 "isStateAtPosition"(arg0: $BlockPos$$Type, arg1: $Predicate$$Type<($BlockState)>): boolean
 "isFluidAtPosition"(arg0: $BlockPos$$Type, arg1: $Predicate$$Type<($FluidState)>): boolean
 "addFreshEntity"(arg0: $Entity$$Type): boolean
 "removeBlock"(arg0: $BlockPos$$Type, arg1: boolean): boolean
 "destroyBlock"(arg0: $BlockPos$$Type, arg1: boolean, arg2: $Entity$$Type, arg3: integer): boolean
 "destroyBlock"(arg0: $BlockPos$$Type, arg1: boolean, arg2: $Entity$$Type): boolean
 "destroyBlock"(arg0: $BlockPos$$Type, arg1: boolean): boolean
 "setBlock"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: integer): boolean
 "setBlock"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: integer, arg3: integer): boolean
 "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
 "getBlockState"(arg0: $BlockPos$$Type): $BlockState
 "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
 "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
 "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
 "getFluidState"(arg0: $BlockPos$$Type): $FluidState
 "clip"(arg0: $ClipContext$$Type): $BlockHitResult
 "getLightEmission"(arg0: $BlockPos$$Type): integer
 "getMaxLightLevel"(): integer
 "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
 "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getMaxSection"(): integer
 "getMinSection"(): integer
 "getMaxBuildHeight"(): integer
 "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getSectionIndex"(arg0: integer): integer
 "getSectionsCount"(): integer
 "getModelData"(arg0: $BlockPos$$Type): $ModelData
 "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
 "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
 "hasBiomes"(): boolean
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
get "random"(): $RandomSource
get "levelData"(): $LevelData
get "chunkSource"(): $ChunkSource
get "difficulty"(): $Difficulty
get "server"(): $MinecraftServer
get "blockTicks"(): $LevelTickAccess<($Block)>
get "fluidTicks"(): $LevelTickAccess<($Fluid)>
get "moonPhase"(): integer
get "moonBrightness"(): float
get "height"(): integer
get "clientSide"(): boolean
get "seaLevel"(): integer
get "skyDarken"(): integer
get "minBuildHeight"(): integer
get "biomeManager"(): $BiomeManager
get "lightEngine"(): $LevelLightEngine
get "worldBorder"(): $WorldBorder
get "maxLightLevel"(): integer
get "maxSection"(): integer
get "minSection"(): integer
get "maxBuildHeight"(): integer
get "sectionsCount"(): integer
}

export namespace $VisualizationLevel {
function traverseBlocks<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
function create(arg0: integer, arg1: integer): $LevelHeightAccessor
const probejs$$marker: never
}
export class $VisualizationLevel$$Static implements $VisualizationLevel {


 "supportsVisualization"(): boolean
 "getRandom"(): $RandomSource
 "getLevelData"(): $LevelData
 "getChunkSource"(): $ChunkSource
 "gameEvent"(arg0: $ResourceKey$$Type<($GameEvent)>, arg1: $BlockPos$$Type, arg2: $GameEvent$Context$$Type): void
 "gameEvent"(arg0: $Holder$$Type<($GameEvent)>, arg1: $BlockPos$$Type, arg2: $GameEvent$Context$$Type): void
 "gameEvent"(arg0: $Entity$$Type, arg1: $Holder$$Type<($GameEvent)>, arg2: $Vec3$$Type): void
 "gameEvent"(arg0: $Holder$$Type<($GameEvent)>, arg1: $Vec3$$Type, arg2: $GameEvent$Context$$Type): void
 "gameEvent"(arg0: $Entity$$Type, arg1: $Holder$$Type<($GameEvent)>, arg2: $BlockPos$$Type): void
 "addParticle"(arg0: $ParticleOptions$$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): void
 "getDifficulty"(): $Difficulty
 "playSound"(arg0: $Player$$Type, arg1: $BlockPos$$Type, arg2: $SoundEvent$$Type, arg3: $SoundSource$$Type, arg4: float, arg5: float): void
 "playSound"(arg0: $Player$$Type, arg1: $BlockPos$$Type, arg2: $SoundEvent$$Type, arg3: $SoundSource$$Type): void
 "getServer"(): $MinecraftServer
 "levelEvent"(arg0: $Player$$Type, arg1: integer, arg2: $BlockPos$$Type, arg3: integer): void
 "levelEvent"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
 "blockUpdated"(arg0: $BlockPos$$Type, arg1: $Block$$Type): void
 "hasChunk"(arg0: integer, arg1: integer): boolean
 "dayTime"(): long
 "getBlockTicks"(): $LevelTickAccess<($Block)>
 "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Block$$Type, arg2: integer, arg3: $TickPriority$$Type): void
 "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Fluid$$Type, arg2: integer): void
 "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Block$$Type, arg2: integer): void
 "scheduleTick"(arg0: $BlockPos$$Type, arg1: $Fluid$$Type, arg2: integer, arg3: $TickPriority$$Type): void
 "getFluidTicks"(): $LevelTickAccess<($Fluid)>
 "neighborShapeChanged"(arg0: $Direction$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type, arg4: integer, arg5: integer): void
 "getCurrentDifficultyAt"(arg0: $BlockPos$$Type): $DifficultyInstance
 "nextSubTickCount"(): long
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
 "isUnobstructed"(arg0: $Entity$$Type, arg1: $VoxelShape$$Type): boolean
 "getHeightmapPos"(arg0: $Heightmap$Types$$Type, arg1: $BlockPos$$Type): $BlockPos
 "getEntityCollisions"(arg0: $Entity$$Type, arg1: $AABB$$Type): $List<($VoxelShape)>
 "getTimeOfDay"(arg0: float): float
 "getMoonPhase"(): integer
 "getMoonBrightness"(): float
 "getEntities"(arg0: $Entity$$Type, arg1: $AABB$$Type): $List<($Entity)>
 "getEntities"<T extends $Entity>(arg0: $EntityTypeTest$$Type<($Entity$$Type), (T)>, arg1: $AABB$$Type, arg2: $Predicate$$Type<(T)>): $List<(T)>
 "getEntities"(arg0: $Entity$$Type, arg1: $AABB$$Type, arg2: $Predicate$$Type<($Entity)>): $List<($Entity)>
 "players"(): $List<($Player)>
 "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$$Type<(T)>, arg1: $AABB$$Type, arg2: $Predicate$$Type<(T)>): $List<(T)>
 "getEntitiesOfClass"<T extends $Entity>(arg0: $Class$$Type<(T)>, arg1: $AABB$$Type): $List<(T)>
 "getNearestPlayer"(arg0: $TargetingConditions$$Type, arg1: $LivingEntity$$Type, arg2: double, arg3: double, arg4: double): $Player
 "getNearestPlayer"(arg0: $TargetingConditions$$Type, arg1: double, arg2: double, arg3: double): $Player
 "getNearestPlayer"(arg0: $Entity$$Type, arg1: double): $Player
 "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: $Predicate$$Type<($Entity)>): $Player
 "getNearestPlayer"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: boolean): $Player
 "getNearestPlayer"(arg0: $TargetingConditions$$Type, arg1: $LivingEntity$$Type): $Player
 "hasNearbyAlivePlayer"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "getNearestEntity"<T extends $LivingEntity>(arg0: $List$$Type<(T)>, arg1: $TargetingConditions$$Type, arg2: $LivingEntity$$Type, arg3: double, arg4: double, arg5: double): T
 "getNearestEntity"<T extends $LivingEntity>(arg0: $Class$$Type<(T)>, arg1: $TargetingConditions$$Type, arg2: $LivingEntity$$Type, arg3: double, arg4: double, arg5: double, arg6: $AABB$$Type): T
 "getNearbyPlayers"(arg0: $TargetingConditions$$Type, arg1: $LivingEntity$$Type, arg2: $AABB$$Type): $List<($Player)>
 "getNearbyEntities"<T extends $LivingEntity>(arg0: $Class$$Type<(T)>, arg1: $TargetingConditions$$Type, arg2: $LivingEntity$$Type, arg3: $AABB$$Type): $List<(T)>
 "getPlayerByUUID"(arg0: $UUID$$Type): $Player
 "getHeight"(arg0: $Heightmap$Types$$Type, arg1: integer, arg2: integer): integer
 "getHeight"(): integer
/**
 * 
 * @deprecated
 */
 "getLightLevelDependentMagicValue"(arg0: $BlockPos$$Type): float
 "getPathfindingCostFromLightLevels"(arg0: $BlockPos$$Type): float
 "canSeeSkyFromBelowWater"(arg0: $BlockPos$$Type): boolean
 "getMaxLocalRawBrightness"(arg0: $BlockPos$$Type): integer
 "getMaxLocalRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
 "registryAccess"(): $RegistryAccess
 "getBiome"(arg0: $BlockPos$$Type): $Holder<($Biome)>
 "isClientSide"(): boolean
/**
 * 
 * @deprecated
 */
 "hasChunkAt"(arg0: $BlockPos$$Type): boolean
/**
 * 
 * @deprecated
 */
 "hasChunkAt"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): boolean
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
/**
 * 
 * @deprecated
 */
 "hasChunksAt"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type): boolean
 "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$$Type, arg3: boolean): $ChunkAccess
 "getChunk"(arg0: $BlockPos$$Type): $ChunkAccess
 "getChunk"(arg0: integer, arg1: integer): $ChunkAccess
 "getChunk"(arg0: integer, arg1: integer, arg2: $ChunkStatus$$Type): $ChunkAccess
/**
 * 
 * @deprecated
 */
 "getSeaLevel"(): integer
 "dimensionType"(): $DimensionType
 "getSkyDarken"(): integer
 "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
 "getNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
 "isEmptyBlock"(arg0: $BlockPos$$Type): boolean
 "isWaterAt"(arg0: $BlockPos$$Type): boolean
 "holderLookup"<T>(arg0: $ResourceKey$$Type<($Registry<(T)>)>): $HolderLookup<(T)>
 "getBlockStatesIfLoaded"(arg0: $AABB$$Type): $Stream<($BlockState)>
 "getMinBuildHeight"(): integer
 "containsAnyLiquid"(arg0: $AABB$$Type): boolean
 "getBiomeManager"(): $BiomeManager
 "getChunkForCollisions"(arg0: integer, arg1: integer): $BlockGetter
 "getUncachedNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
 "lithium$getLoadedChunk"(arg0: integer, arg1: integer): $ChunkAccess
 "enabledFeatures"(): $FeatureFlagSet
 "getLightEngine"(): $LevelLightEngine
 "canSeeSky"(arg0: $BlockPos$$Type): boolean
 "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
 "getShade"(arg0: $Direction$$Type, arg1: boolean): float
 "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
 "collidesWithSuffocatingBlock"(arg0: $Entity$$Type, arg1: $AABB$$Type): boolean
 "getWorldBorder"(): $WorldBorder
 "noCollision"(arg0: $Entity$$Type, arg1: $AABB$$Type): boolean
 "noCollision"(arg0: $Entity$$Type): boolean
 "noCollision"(arg0: $AABB$$Type): boolean
 "isUnobstructed"(arg0: $Entity$$Type): boolean
 "isUnobstructed"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $CollisionContext$$Type): boolean
 "getCollisions"(arg0: $Entity$$Type, arg1: $AABB$$Type): $Iterable<($VoxelShape)>
 "findSupportingBlock"(arg0: $Entity$$Type, arg1: $AABB$$Type): $Optional<($BlockPos)>
 "getBlockCollisions"(arg0: $Entity$$Type, arg1: $AABB$$Type): $Iterable<($VoxelShape)>
 "noBlockCollision"(arg0: $Entity$$Type, arg1: $AABB$$Type): boolean
 "findFreePosition"(arg0: $Entity$$Type, arg1: $VoxelShape$$Type, arg2: $Vec3$$Type, arg3: double, arg4: double, arg5: double): $Optional<($Vec3)>
 "shouldPassThroughWalls"(arg0: $Player$$Type): boolean
 "isVerticalCollision"(arg0: $VoxelShape$$Type, arg1: $AABB$$Type, arg2: $Player$$Type): boolean
 "getSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): integer
 "hasSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): boolean
 "getBestNeighborSignal"(arg0: $BlockPos$$Type): integer
 "getControlInputSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type, arg2: boolean): integer
 "hasNeighborSignal"(arg0: $BlockPos$$Type): boolean
 "getDirectSignal"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): integer
 "getDirectSignalTo"(arg0: $BlockPos$$Type): integer
 "holder"<T>(arg0: $ResourceKey$$Type<(T)>): $Optional<($Holder$Reference<(T)>)>
 "holderOrThrow"<T>(arg0: $ResourceKey$$Type<(T)>): $Holder<(T)>
 "isAreaLoaded"(arg0: $BlockPos$$Type, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
 "getBlockEntityRenderAttachment"(arg0: $BlockPos$$Type): any
 "isStateAtPosition"(arg0: $BlockPos$$Type, arg1: $Predicate$$Type<($BlockState)>): boolean
 "isFluidAtPosition"(arg0: $BlockPos$$Type, arg1: $Predicate$$Type<($FluidState)>): boolean
 "addFreshEntity"(arg0: $Entity$$Type): boolean
 "removeBlock"(arg0: $BlockPos$$Type, arg1: boolean): boolean
 "destroyBlock"(arg0: $BlockPos$$Type, arg1: boolean, arg2: $Entity$$Type, arg3: integer): boolean
 "destroyBlock"(arg0: $BlockPos$$Type, arg1: boolean, arg2: $Entity$$Type): boolean
 "destroyBlock"(arg0: $BlockPos$$Type, arg1: boolean): boolean
 "setBlock"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: integer): boolean
 "setBlock"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: integer, arg3: integer): boolean
 "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
 "getBlockState"(arg0: $BlockPos$$Type): $BlockState
 "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
 "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
 "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
 "getFluidState"(arg0: $BlockPos$$Type): $FluidState
 "clip"(arg0: $ClipContext$$Type): $BlockHitResult
 "getLightEmission"(arg0: $BlockPos$$Type): integer
 "getMaxLightLevel"(): integer
 "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
 "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getMaxSection"(): integer
 "getMinSection"(): integer
 "getMaxBuildHeight"(): integer
 "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getSectionIndex"(arg0: integer): integer
 "getSectionsCount"(): integer
 "getModelData"(arg0: $BlockPos$$Type): $ModelData
 "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
 "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
 "getBlockEntityRenderData"(arg0: $BlockPos$$Type): any
 "hasBiomes"(): boolean
 "getBiomeFabric"(arg0: $BlockPos$$Type): $Holder<($Biome)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VisualizationLevel$$Type = ($VisualizationLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VisualizationLevel_ = $VisualizationLevel$$Type;
}}
