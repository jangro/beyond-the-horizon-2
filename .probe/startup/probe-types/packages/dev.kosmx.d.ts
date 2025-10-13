declare module "dev.kosmx.playerAnim.mixin.PlayerModelAccessor" {
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export interface $PlayerModelAccessor {

 "getCloak"(): $ModelPart

(): $ModelPart$$Type
get "cloak"(): $ModelPart
}

export namespace $PlayerModelAccessor {
const probejs$$marker: never
}
export class $PlayerModelAccessor$$Static implements $PlayerModelAccessor {


 "getCloak"(): $ModelPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerModelAccessor$$Type = (() => $ModelPart$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerModelAccessor_ = $PlayerModelAccessor$$Type;
}}
declare module "dev.kosmx.playerAnim.impl.IUpperPartHelper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IUpperPartHelper {

 "setUpperPart"(arg0: boolean): void
 "isUpperPart"(): boolean
set "upperPart"(value: boolean)
get "upperPart"(): boolean
}

export namespace $IUpperPartHelper {
const probejs$$marker: never
}
export class $IUpperPartHelper$$Static implements $IUpperPartHelper {


 "setUpperPart"(arg0: boolean): void
 "isUpperPart"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpperPartHelper$$Type = ($IUpperPartHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpperPartHelper_ = $IUpperPartHelper$$Type;
}}
declare module "dev.kosmx.playerAnim.impl.IMutableModel" {
import {$AnimationProcessor, $AnimationProcessor$$Type} from "dev.kosmx.playerAnim.core.impl.AnimationProcessor"
import {$SetableSupplier, $SetableSupplier$$Type} from "dev.kosmx.playerAnim.core.util.SetableSupplier"

export interface $IMutableModel {

 "setEmoteSupplier"(arg0: $SetableSupplier$$Type<($AnimationProcessor$$Type)>): void
 "getEmoteSupplier"(): $SetableSupplier<($AnimationProcessor)>
set "emoteSupplier"(value: $SetableSupplier$$Type<($AnimationProcessor$$Type)>)
get "emoteSupplier"(): $SetableSupplier<($AnimationProcessor)>
}

export namespace $IMutableModel {
const probejs$$marker: never
}
export class $IMutableModel$$Static implements $IMutableModel {


 "setEmoteSupplier"(arg0: $SetableSupplier$$Type<($AnimationProcessor$$Type)>): void
 "getEmoteSupplier"(): $SetableSupplier<($AnimationProcessor)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMutableModel$$Type = ($IMutableModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMutableModel_ = $IMutableModel$$Type;
}}
declare module "dev.kosmx.playerAnim.impl.animation.AnimationApplier" {
import {$AnimationProcessor, $AnimationProcessor$$Type} from "dev.kosmx.playerAnim.core.impl.AnimationProcessor"
import {$IAnimation, $IAnimation$$Type} from "dev.kosmx.playerAnim.api.layered.IAnimation"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export class $AnimationApplier extends $AnimationProcessor {

constructor(animation: $IAnimation$$Type)

public "updatePart"(partName: StringJS, part: $ModelPart$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationApplier$$Type = ($AnimationApplier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationApplier_ = $AnimationApplier$$Type;
}}
declare module "dev.kosmx.playerAnim.impl.IAnimatedPlayer" {
import {$AnimationApplier, $AnimationApplier$$Type} from "dev.kosmx.playerAnim.impl.animation.AnimationApplier"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IAnimation, $IAnimation$$Type} from "dev.kosmx.playerAnim.api.layered.IAnimation"
import {$AnimationStack, $AnimationStack$$Type} from "dev.kosmx.playerAnim.api.layered.AnimationStack"
import {$IPlayer, $IPlayer$$Type} from "dev.kosmx.playerAnim.api.IPlayer"

export interface $IAnimatedPlayer extends $IPlayer {

/**
 * 
 * @deprecated
 */
 "getAnimation"(): $AnimationApplier
 "playerAnimator_getAnimation"(arg0: $ResourceLocation$$Type): $IAnimation
 "playerAnimator_getAnimation"(): $AnimationApplier
 "playerAnimator_setAnimation"(arg0: $ResourceLocation$$Type, arg1: $IAnimation$$Type): $IAnimation
 "getAnimationStack"(): $AnimationStack
get "animation"(): $AnimationApplier
get "animationStack"(): $AnimationStack
}

export namespace $IAnimatedPlayer {
const probejs$$marker: never
}
export class $IAnimatedPlayer$$Static implements $IAnimatedPlayer {


/**
 * 
 * @deprecated
 */
 "getAnimation"(): $AnimationApplier
 "playerAnimator_getAnimation"(arg0: $ResourceLocation$$Type): $IAnimation
 "playerAnimator_getAnimation"(): $AnimationApplier
 "playerAnimator_setAnimation"(arg0: $ResourceLocation$$Type, arg1: $IAnimation$$Type): $IAnimation
 "getAnimationStack"(): $AnimationStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAnimatedPlayer$$Type = ($IAnimatedPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAnimatedPlayer_ = $IAnimatedPlayer$$Type;
}}
declare module "dev.kosmx.playerAnim.api.IPlayer" {
import {$AnimationStack, $AnimationStack$$Type} from "dev.kosmx.playerAnim.api.layered.AnimationStack"

export interface $IPlayer {

 "getAnimationStack"(): $AnimationStack

(): $AnimationStack$$Type
get "animationStack"(): $AnimationStack
}

export namespace $IPlayer {
const probejs$$marker: never
}
export class $IPlayer$$Static implements $IPlayer {


 "getAnimationStack"(): $AnimationStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayer$$Type = (() => $AnimationStack$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayer_ = $IPlayer$$Type;
}}
declare module "dev.kosmx.playerAnim.api.TransformType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $TransformType extends $Enum<($TransformType)> {
static readonly "ROTATION": $TransformType
static readonly "POSITION": $TransformType
static readonly "BEND": $TransformType
static readonly "SCALE": $TransformType


public static "values"(): ($TransformType)[]
public static "valueOf"(name: StringJS): $TransformType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformType$$Type = (("position") | ("rotation") | ("bend") | ("scale"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformType_ = $TransformType$$Type;
}}
declare module "dev.kosmx.playerAnim.core.util.Vec3d" {
import {$Vector3, $Vector3$$Type} from "dev.kosmx.playerAnim.core.util.Vector3"

export class $Vec3d extends $Vector3<(double)> {

constructor(x: double, y: double, z: double)

public "subtract"(rhs: $Vec3d$$Type): $Vec3d
public "scale"(scalar: double): $Vec3d
public "add"(other: $Vec3d$$Type): $Vec3d
public "distanceTo"(vec3d: $Vec3d$$Type): double
public "dotProduct"(other: $Vec3d$$Type): double
public "crossProduct"(other: $Vec3d$$Type): $Vec3d
public "squaredDistanceTo"(vec3d: $Vec3d$$Type): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec3d$$Type = ($Vec3d);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vec3d_ = $Vec3d$$Type;
}}
declare module "dev.kosmx.playerAnim.core.util.Vec3f" {
import {$Vector3, $Vector3$$Type} from "dev.kosmx.playerAnim.core.util.Vector3"
import {$Vec3d, $Vec3d$$Type} from "dev.kosmx.playerAnim.core.util.Vec3d"

export class $Vec3f extends $Vector3<(float)> {
static readonly "ZERO": $Vec3f

constructor(x: float, y: float, z: float)

public "subtract"(rhs: $Vec3f$$Type): $Vec3f
public "scale"(scalar: float): $Vec3f
public "add"(other: $Vec3f$$Type): $Vec3f
public "distanceTo"(vec3d: $Vec3d$$Type): double
public "dotProduct"(other: $Vec3f$$Type): float
public "crossProduct"(other: $Vec3f$$Type): $Vec3f
public "squaredDistanceTo"(vec3d: $Vec3d$$Type): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec3f$$Type = ($Vec3f);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vec3f_ = $Vec3f$$Type;
}}
declare module "dev.kosmx.playerAnim.api.layered.IAnimation" {
import {$FirstPersonMode, $FirstPersonMode$$Type} from "dev.kosmx.playerAnim.api.firstPerson.FirstPersonMode"
import {$FirstPersonConfiguration, $FirstPersonConfiguration$$Type} from "dev.kosmx.playerAnim.api.firstPerson.FirstPersonConfiguration"
import {$TransformType, $TransformType$$Type} from "dev.kosmx.playerAnim.api.TransformType"
import {$Vec3f, $Vec3f$$Type} from "dev.kosmx.playerAnim.core.util.Vec3f"

export interface $IAnimation {

 "tick"(): void
 "isActive"(): boolean
 "get3DTransform"(arg0: StringJS, arg1: $TransformType$$Type, arg2: float, arg3: $Vec3f$$Type): $Vec3f
 "setupAnim"(arg0: float): void
 "getFirstPersonMode"(tickDelta: float): $FirstPersonMode
 "getFirstPersonConfiguration"(tickDelta: float): $FirstPersonConfiguration
get "active"(): boolean
set "upAnim"(value: float)
}

export namespace $IAnimation {
const probejs$$marker: never
}
export class $IAnimation$$Static implements $IAnimation {


 "tick"(): void
 "isActive"(): boolean
 "get3DTransform"(arg0: StringJS, arg1: $TransformType$$Type, arg2: float, arg3: $Vec3f$$Type): $Vec3f
 "setupAnim"(arg0: float): void
 "getFirstPersonMode"(tickDelta: float): $FirstPersonMode
 "getFirstPersonConfiguration"(tickDelta: float): $FirstPersonConfiguration
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAnimation$$Type = ($IAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAnimation_ = $IAnimation$$Type;
}}
declare module "dev.kosmx.playerAnim.api.firstPerson.FirstPersonMode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $FirstPersonMode extends $Enum<($FirstPersonMode)> {
static readonly "DISABLED": $FirstPersonMode
static readonly "THIRD_PERSON_MODEL": $FirstPersonMode
static readonly "VANILLA": $FirstPersonMode
static readonly "NONE": $FirstPersonMode


public static "values"(): ($FirstPersonMode)[]
public static "valueOf"(name: StringJS): $FirstPersonMode
public "isEnabled"(): boolean
public static "setFirstPersonPass"(newValue: boolean): void
public static "isFirstPersonPass"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FirstPersonMode$$Type = (("none") | ("vanilla") | ("third_person_model") | ("disabled"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FirstPersonMode_ = $FirstPersonMode$$Type;
}}
declare module "dev.kosmx.playerAnim.mixin.firstPerson.CameraAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CameraAccessor {

 "setDetached"(arg0: boolean): void

(arg0: boolean): void
set "detached"(value: boolean)
}

export namespace $CameraAccessor {
const probejs$$marker: never
}
export class $CameraAccessor$$Static implements $CameraAccessor {


 "setDetached"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraAccessor$$Type = ((arg0: boolean) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CameraAccessor_ = $CameraAccessor$$Type;
}}
declare module "dev.kosmx.playerAnim.core.util.SetableSupplier" {
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"

export class $SetableSupplier<T> implements $Supplier<(T)> {

constructor()

public "get"(): T
public "set"(object: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetableSupplier$$Type<T> = ($SetableSupplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetableSupplier_<T> = $SetableSupplier$$Type<(T)>;
}}
declare module "dev.kosmx.playerAnim.core.util.Vector3" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Vector3<N extends number> {

constructor(x: N, y: N, z: N)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getY"(): N
public "getX"(): N
public "getZ"(): N
get "y"(): N
get "x"(): N
get "z"(): N
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vector3$$Type<N> = ($Vector3<(N)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vector3_<N> = $Vector3$$Type<(N)>;
}}
declare module "dev.kosmx.playerAnim.core.util.Pair" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Pair<L, R> {

constructor(left: L, right: R)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getLeft"(): L
public "getRight"(): R
get "left"(): L
get "right"(): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$$Type<L, R> = ($Pair<(L), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<L, R> = $Pair$$Type<(L), (R)>;
}}
declare module "dev.kosmx.playerAnim.api.firstPerson.FirstPersonConfiguration" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FirstPersonConfiguration {

constructor(showRightArm: boolean, showLeftArm: boolean, showRightItem: boolean, showLeftItem: boolean)
constructor()

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "setShowLeftArm"(showLeftArm: boolean): $FirstPersonConfiguration
public "isShowLeftItem"(): boolean
public "isShowRightArm"(): boolean
public "isShowLeftArm"(): boolean
public "setShowRightArm"(showRightArm: boolean): $FirstPersonConfiguration
public "isShowRightItem"(): boolean
public "setShowLeftItem"(showLeftItem: boolean): $FirstPersonConfiguration
public "setShowRightItem"(showRightItem: boolean): $FirstPersonConfiguration
set "showLeftArm"(value: boolean)
get "showLeftItem"(): boolean
get "showRightArm"(): boolean
get "showLeftArm"(): boolean
set "showRightArm"(value: boolean)
get "showRightItem"(): boolean
set "showLeftItem"(value: boolean)
set "showRightItem"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FirstPersonConfiguration$$Type = ($FirstPersonConfiguration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FirstPersonConfiguration_ = $FirstPersonConfiguration$$Type;
}}
declare module "dev.kosmx.playerAnim.impl.IPlayerModel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPlayerModel {

 "playerAnimator_prepForFirstPersonRender"(): void

(): void
}

export namespace $IPlayerModel {
const probejs$$marker: never
}
export class $IPlayerModel$$Static implements $IPlayerModel {


 "playerAnimator_prepForFirstPersonRender"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerModel$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayerModel_ = $IPlayerModel$$Type;
}}
declare module "dev.kosmx.playerAnim.api.layered.AnimationStack" {
import {$FirstPersonMode, $FirstPersonMode$$Type} from "dev.kosmx.playerAnim.api.firstPerson.FirstPersonMode"
import {$FirstPersonConfiguration, $FirstPersonConfiguration$$Type} from "dev.kosmx.playerAnim.api.firstPerson.FirstPersonConfiguration"
import {$IAnimation, $IAnimation$$Type} from "dev.kosmx.playerAnim.api.layered.IAnimation"
import {$TransformType, $TransformType$$Type} from "dev.kosmx.playerAnim.api.TransformType"
import {$Vec3f, $Vec3f$$Type} from "dev.kosmx.playerAnim.core.util.Vec3f"

export class $AnimationStack implements $IAnimation {

constructor()

public "tick"(): void
public "isActive"(): boolean
public "addAnimLayer"(priority: integer, layer: $IAnimation$$Type): void
public "get3DTransform"(modelName: StringJS, type: $TransformType$$Type, tickDelta: float, value0: $Vec3f$$Type): $Vec3f
public "setupAnim"(tickDelta: float): void
public "removeLayer"(layerLevel: integer): boolean
public "removeLayer"(layer: $IAnimation$$Type): boolean
public "getFirstPersonMode"(tickDelta: float): $FirstPersonMode
public "getFirstPersonConfiguration"(tickDelta: float): $FirstPersonConfiguration
get "active"(): boolean
set "upAnim"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationStack$$Type = ($AnimationStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationStack_ = $AnimationStack$$Type;
}}
declare module "dev.kosmx.playerAnim.core.impl.AnimationProcessor" {
import {$Pair, $Pair$$Type} from "dev.kosmx.playerAnim.core.util.Pair"
import {$FirstPersonMode, $FirstPersonMode$$Type} from "dev.kosmx.playerAnim.api.firstPerson.FirstPersonMode"
import {$FirstPersonConfiguration, $FirstPersonConfiguration$$Type} from "dev.kosmx.playerAnim.api.firstPerson.FirstPersonConfiguration"
import {$IAnimation, $IAnimation$$Type} from "dev.kosmx.playerAnim.api.layered.IAnimation"
import {$TransformType, $TransformType$$Type} from "dev.kosmx.playerAnim.api.TransformType"
import {$Vec3f, $Vec3f$$Type} from "dev.kosmx.playerAnim.core.util.Vec3f"

export class $AnimationProcessor {

constructor(animation: $IAnimation$$Type)

public "tick"(): void
public "isActive"(): boolean
public "get3DTransform"(modelName: StringJS, type: $TransformType$$Type, value0: $Vec3f$$Type): $Vec3f
public "setTickDelta"(tickDelta: float): void
public "getBend"(modelName: StringJS): $Pair<(float), (float)>
public "getFirstPersonMode"(): $FirstPersonMode
public "getFirstPersonConfiguration"(): $FirstPersonConfiguration
public "isFirstPersonAnimationDisabled"(): boolean
get "active"(): boolean
set "tickDelta"(value: float)
get "firstPersonMode"(): $FirstPersonMode
get "firstPersonConfiguration"(): $FirstPersonConfiguration
get "firstPersonAnimationDisabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProcessor$$Type = ($AnimationProcessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationProcessor_ = $AnimationProcessor$$Type;
}}
