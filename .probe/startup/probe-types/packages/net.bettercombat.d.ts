declare module "net.bettercombat.logic.PlayerAttackProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PlayerAttackProperties {

 "getComboCount"(): integer
 "setComboCount"(arg0: integer): void
get "comboCount"(): integer
set "comboCount"(value: integer)
}

export namespace $PlayerAttackProperties {
const probejs$$marker: never
}
export class $PlayerAttackProperties$$Static implements $PlayerAttackProperties {


 "getComboCount"(): integer
 "setComboCount"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAttackProperties$$Type = ($PlayerAttackProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerAttackProperties_ = $PlayerAttackProperties$$Type;
}}
declare module "net.bettercombat.api.MinecraftClient_BetterCombat" {
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $MinecraftClient_BetterCombat {

 "getComboCount"(): integer
 "cancelUpswing"(): void
 "hasTargetsInReach"(): boolean
 "getCursorTarget"(): $Entity
 "getSwingProgress"(): float
 "getUpswingTicks"(): integer
 "isWeaponSwingInProgress"(): boolean
get "comboCount"(): integer
get "cursorTarget"(): $Entity
get "swingProgress"(): float
get "upswingTicks"(): integer
get "weaponSwingInProgress"(): boolean
}

export namespace $MinecraftClient_BetterCombat {
const probejs$$marker: never
}
export class $MinecraftClient_BetterCombat$$Static implements $MinecraftClient_BetterCombat {


 "getComboCount"(): integer
 "cancelUpswing"(): void
 "hasTargetsInReach"(): boolean
 "getCursorTarget"(): $Entity
 "getSwingProgress"(): float
 "getUpswingTicks"(): integer
 "isWeaponSwingInProgress"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftClient_BetterCombat$$Type = ($MinecraftClient_BetterCombat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftClient_BetterCombat_ = $MinecraftClient_BetterCombat$$Type;
}}
declare module "net.bettercombat.api.WeaponAttributes$Condition" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $WeaponAttributes$Condition extends $Enum<($WeaponAttributes$Condition)> {
static readonly "NO_OFFHAND_ITEM": $WeaponAttributes$Condition
static readonly "NOT_MOUNTED": $WeaponAttributes$Condition
static readonly "NOT_DUAL_WIELDING": $WeaponAttributes$Condition
static readonly "DUAL_WIELDING_ANY": $WeaponAttributes$Condition
static readonly "DUAL_WIELDING_SAME_CATEGORY": $WeaponAttributes$Condition
static readonly "MOUNTED": $WeaponAttributes$Condition
static readonly "MAIN_HAND_ONLY": $WeaponAttributes$Condition
static readonly "OFF_HAND_ONLY": $WeaponAttributes$Condition
static readonly "DUAL_WIELDING_SAME": $WeaponAttributes$Condition
static readonly "OFF_HAND_SHIELD": $WeaponAttributes$Condition


public static "values"(): ($WeaponAttributes$Condition)[]
public static "valueOf"(name: StringJS): $WeaponAttributes$Condition
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponAttributes$Condition$$Type = (("not_dual_wielding") | ("dual_wielding_any") | ("dual_wielding_same") | ("dual_wielding_same_category") | ("no_offhand_item") | ("off_hand_shield") | ("main_hand_only") | ("off_hand_only") | ("mounted") | ("not_mounted"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaponAttributes$Condition_ = $WeaponAttributes$Condition$$Type;
}}
declare module "net.bettercombat.api.WeaponAttributes$Attack" {
import {$WeaponAttributes$Condition, $WeaponAttributes$Condition$$Type} from "net.bettercombat.api.WeaponAttributes$Condition"
import {$WeaponAttributes$Sound, $WeaponAttributes$Sound$$Type} from "net.bettercombat.api.WeaponAttributes$Sound"
import {$WeaponAttributes$HitBoxShape, $WeaponAttributes$HitBoxShape$$Type} from "net.bettercombat.api.WeaponAttributes$HitBoxShape"

export class $WeaponAttributes$Attack {

constructor()
constructor(conditions: ($WeaponAttributes$Condition$$Type)[], hitbox: $WeaponAttributes$HitBoxShape$$Type, damage_multiplier: double, angle: double, upswing: double, animation: StringJS, swing_sound: $WeaponAttributes$Sound$$Type, impact_sound: $WeaponAttributes$Sound$$Type)

public "equals"(obj: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "angle"(): double
public "upswing"(): double
public "animation"(): StringJS
public "conditions"(): ($WeaponAttributes$Condition)[]
public "hitbox"(): $WeaponAttributes$HitBoxShape
public "damageMultiplier"(): double
public "swingSound"(): $WeaponAttributes$Sound
public "impactSound"(): $WeaponAttributes$Sound
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponAttributes$Attack$$Type = ($WeaponAttributes$Attack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaponAttributes$Attack_ = $WeaponAttributes$Attack$$Type;
}}
declare module "net.bettercombat.api.WeaponAttributes" {
import {$WeaponAttributes$Attack, $WeaponAttributes$Attack$$Type} from "net.bettercombat.api.WeaponAttributes$Attack"

export class $WeaponAttributes {

constructor(attack_range: double, range_bonus: double, pose: StringJS, off_hand_pose: StringJS, isTwoHanded: boolean, category: StringJS, attacks: ($WeaponAttributes$Attack$$Type)[])

public "category"(): StringJS
public "equals"(obj: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "empty"(): $WeaponAttributes
public "pose"(): StringJS
public "attacks"(): ($WeaponAttributes$Attack)[]
public "isTwoHanded"(): boolean
public "two_handed"(): boolean
public "rangeBonus"(): double
public "offHandPose"(): StringJS
public "attackRange"(): double
get "twoHanded"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponAttributes$$Type = ($WeaponAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaponAttributes_ = $WeaponAttributes$$Type;
}}
declare module "net.bettercombat.logic.AnimatedHand" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $AnimatedHand extends $Enum<($AnimatedHand)> {
static readonly "MAIN_HAND": $AnimatedHand
static readonly "TWO_HANDED": $AnimatedHand
static readonly "OFF_HAND": $AnimatedHand


public static "values"(): ($AnimatedHand)[]
public static "valueOf"(name: StringJS): $AnimatedHand
public static "from"(isOffHand: boolean, isTwoHanded: boolean): $AnimatedHand
public "isOffHand"(): boolean
get "offHand"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimatedHand$$Type = (("main_hand") | ("off_hand") | ("two_handed"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimatedHand_ = $AnimatedHand$$Type;
}}
declare module "net.bettercombat.client.collision.OrientedBoundingBox" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$Matrix3f, $Matrix3f$$Type} from "org.joml.Matrix3f"

export class $OrientedBoundingBox {
 "extent": $Vec3
 "vertex8": $Vec3
 "vertex5": $Vec3
 "vertex4": $Vec3
 "vertices": ($Vec3)[]
 "vertex7": $Vec3
 "center": $Vec3
 "rotation": $Matrix3f
 "vertex6": $Vec3
 "scaledAxisY": $Vec3
 "scaledAxisZ": $Vec3
 "scaledAxisX": $Vec3
 "axisZ": $Vec3
 "axisY": $Vec3
 "axisX": $Vec3
 "vertex1": $Vec3
 "vertex3": $Vec3
 "vertex2": $Vec3

constructor(obb: $OrientedBoundingBox$$Type)
constructor(center: $Vec3$$Type, width: double, height: double, depth: double, yaw: float, pitch: float)
constructor(box: $AABB$$Type)
constructor(center: $Vec3$$Type, size: $Vec3$$Type, yaw: float, pitch: float)

public "intersects"(otherOBB: $OrientedBoundingBox$$Type): boolean
public "intersects"(boundingBox: $AABB$$Type): boolean
public "scale"(scale: double): $OrientedBoundingBox
public "offset"(offset: $Vec3$$Type): $OrientedBoundingBox
public "contains"(point: $Vec3$$Type): boolean
public "copy"(): $OrientedBoundingBox
public "updateVertex"(): $OrientedBoundingBox
public static "Intersects"(a: $OrientedBoundingBox$$Type, b: $OrientedBoundingBox$$Type): boolean
public "offsetAlongAxisX"(offset: double): $OrientedBoundingBox
public "offsetAlongAxisY"(offset: double): $OrientedBoundingBox
public "offsetAlongAxisZ"(offset: double): $OrientedBoundingBox
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OrientedBoundingBox$$Type = ($OrientedBoundingBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OrientedBoundingBox_ = $OrientedBoundingBox$$Type;
}}
declare module "net.bettercombat.mixin.player.LivingEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingEntityAccessor {

 "invokeTurnHead"(arg0: float, arg1: float): float
 "setLastAttackedTicks"(arg0: integer): void
 "getAttackStrengthTicker"(): integer
set "lastAttackedTicks"(value: integer)
get "attackStrengthTicker"(): integer
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
export class $LivingEntityAccessor$$Static implements $LivingEntityAccessor {


 "invokeTurnHead"(arg0: float, arg1: float): float
 "setLastAttackedTicks"(arg0: integer): void
 "getAttackStrengthTicker"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccessor$$Type = ($LivingEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityAccessor_ = $LivingEntityAccessor$$Type;
}}
declare module "net.bettercombat.api.EntityPlayer_BetterCombat" {
import {$AttackHand, $AttackHand$$Type} from "net.bettercombat.api.AttackHand"

export interface $EntityPlayer_BetterCombat {

 "getCurrentAttack"(): $AttackHand
 "getMainHandIdleAnimation"(): StringJS
 "getOffHandIdleAnimation"(): StringJS
get "currentAttack"(): $AttackHand
get "mainHandIdleAnimation"(): StringJS
get "offHandIdleAnimation"(): StringJS
}

export namespace $EntityPlayer_BetterCombat {
const probejs$$marker: never
}
export class $EntityPlayer_BetterCombat$$Static implements $EntityPlayer_BetterCombat {


 "getCurrentAttack"(): $AttackHand
 "getMainHandIdleAnimation"(): StringJS
 "getOffHandIdleAnimation"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPlayer_BetterCombat$$Type = ($EntityPlayer_BetterCombat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityPlayer_BetterCombat_ = $EntityPlayer_BetterCombat$$Type;
}}
declare module "net.bettercombat.mixin.player.PlayerEntityAccessor" {
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $PlayerEntityAccessor {

 "getInventory"(): $Inventory

(): $Inventory$$Type
get "inventory"(): $Inventory
}

export namespace $PlayerEntityAccessor {
const probejs$$marker: never
}
export class $PlayerEntityAccessor$$Static implements $PlayerEntityAccessor {


 "getInventory"(): $Inventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEntityAccessor$$Type = (() => $Inventory$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerEntityAccessor_ = $PlayerEntityAccessor$$Type;
}}
declare module "net.bettercombat.logic.knockback.ConfigurableKnockback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ConfigurableKnockback {

 "setKnockbackMultiplier_BetterCombat"(arg0: float): void

(arg0: float): void
set "knockbackMultiplier_BetterCombat"(value: float)
}

export namespace $ConfigurableKnockback {
const probejs$$marker: never
}
export class $ConfigurableKnockback$$Static implements $ConfigurableKnockback {


 "setKnockbackMultiplier_BetterCombat"(arg0: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurableKnockback$$Type = ((arg0: float) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigurableKnockback_ = $ConfigurableKnockback$$Type;
}}
declare module "net.bettercombat.api.WeaponAttributes$HitBoxShape" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $WeaponAttributes$HitBoxShape extends $Enum<($WeaponAttributes$HitBoxShape)> {
static readonly "FORWARD_BOX": $WeaponAttributes$HitBoxShape
static readonly "VERTICAL_PLANE": $WeaponAttributes$HitBoxShape
static readonly "HORIZONTAL_PLANE": $WeaponAttributes$HitBoxShape


public static "values"(): ($WeaponAttributes$HitBoxShape)[]
public static "valueOf"(name: StringJS): $WeaponAttributes$HitBoxShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponAttributes$HitBoxShape$$Type = (("forward_box") | ("vertical_plane") | ("horizontal_plane"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaponAttributes$HitBoxShape_ = $WeaponAttributes$HitBoxShape$$Type;
}}
declare module "net.bettercombat.logic.ItemStackNBTWeaponAttributes" {
import {$WeaponAttributes, $WeaponAttributes$$Type} from "net.bettercombat.api.WeaponAttributes"

export interface $ItemStackNBTWeaponAttributes {

 "hasInvalidAttributes"(): boolean
 "setInvalidAttributes"(arg0: boolean): void
 "getWeaponAttributes"(): $WeaponAttributes
 "setWeaponAttributes"(arg0: $WeaponAttributes$$Type): void
set "invalidAttributes"(value: boolean)
get "weaponAttributes"(): $WeaponAttributes
set "weaponAttributes"(value: $WeaponAttributes$$Type)
}

export namespace $ItemStackNBTWeaponAttributes {
const probejs$$marker: never
}
export class $ItemStackNBTWeaponAttributes$$Static implements $ItemStackNBTWeaponAttributes {


 "hasInvalidAttributes"(): boolean
 "setInvalidAttributes"(arg0: boolean): void
 "getWeaponAttributes"(): $WeaponAttributes
 "setWeaponAttributes"(arg0: $WeaponAttributes$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackNBTWeaponAttributes$$Type = ($ItemStackNBTWeaponAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackNBTWeaponAttributes_ = $ItemStackNBTWeaponAttributes$$Type;
}}
declare module "net.bettercombat.api.AttackHand" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ComboState, $ComboState$$Type} from "net.bettercombat.api.ComboState"
import {$WeaponAttributes, $WeaponAttributes$$Type} from "net.bettercombat.api.WeaponAttributes"
import {$WeaponAttributes$Attack, $WeaponAttributes$Attack$$Type} from "net.bettercombat.api.WeaponAttributes$Attack"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AttackHand extends $Record {

constructor(attack: $WeaponAttributes$Attack$$Type, combo: $ComboState$$Type, isOffHand: boolean, attributes: $WeaponAttributes$$Type, itemStack: $ItemStack$$Type)

public "attributes"(): $WeaponAttributes
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "attack"(): $WeaponAttributes$Attack
public "upswingRate"(): double
public "isOffHand"(): boolean
public "itemStack"(): $ItemStack
public "combo"(): $ComboState
get "offHand"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackHand$$Type = ({"itemStack"?: $ItemStack$$Type, "attributes"?: $WeaponAttributes$$Type, "attack"?: $WeaponAttributes$Attack$$Type, "combo"?: $ComboState$$Type, "isOffHand"?: boolean}) | ([itemStack?: $ItemStack$$Type, attributes?: $WeaponAttributes$$Type, attack?: $WeaponAttributes$Attack$$Type, combo?: $ComboState$$Type, isOffHand?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttackHand_ = $AttackHand$$Type;
}}
declare module "net.bettercombat.mixin.client.MinecraftClientAccessor" {
import {$EntityRenderDispatcher, $EntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"

export interface $MinecraftClientAccessor {

 "getMissTime"(): integer
 "setAttackCooldown"(arg0: integer): void
 "getEntityRenderDispatcher"(): $EntityRenderDispatcher
get "missTime"(): integer
set "attackCooldown"(value: integer)
get "entityRenderDispatcher"(): $EntityRenderDispatcher
}

export namespace $MinecraftClientAccessor {
const probejs$$marker: never
}
export class $MinecraftClientAccessor$$Static implements $MinecraftClientAccessor {


 "getMissTime"(): integer
 "setAttackCooldown"(arg0: integer): void
 "getEntityRenderDispatcher"(): $EntityRenderDispatcher
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftClientAccessor$$Type = ($MinecraftClientAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftClientAccessor_ = $MinecraftClientAccessor$$Type;
}}
declare module "net.bettercombat.client.animation.PlayerAttackAnimatable" {
import {$AnimatedHand, $AnimatedHand$$Type} from "net.bettercombat.logic.AnimatedHand"

export interface $PlayerAttackAnimatable {

 "updateAnimationsOnTick"(): void
 "playAttackAnimation"(arg0: StringJS, arg1: $AnimatedHand$$Type, arg2: float, arg3: float): void
 "stopAttackAnimation"(arg0: float): void
}

export namespace $PlayerAttackAnimatable {
const probejs$$marker: never
}
export class $PlayerAttackAnimatable$$Static implements $PlayerAttackAnimatable {


 "updateAnimationsOnTick"(): void
 "playAttackAnimation"(arg0: StringJS, arg1: $AnimatedHand$$Type, arg2: float, arg3: float): void
 "stopAttackAnimation"(arg0: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAttackAnimatable$$Type = ($PlayerAttackAnimatable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerAttackAnimatable_ = $PlayerAttackAnimatable$$Type;
}}
declare module "net.bettercombat.api.ComboState" {
import {$Record, $Record$$Type} from "java.lang.Record"

export class $ComboState extends $Record {

constructor(current: integer, total: integer)

public "total"(): integer
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "current"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComboState$$Type = ({"current"?: integer, "total"?: integer}) | ([current?: integer, total?: integer]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComboState_ = $ComboState$$Type;
}}
declare module "net.bettercombat.api.WeaponAttributes$Sound" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $WeaponAttributes$Sound {

constructor()
constructor(id: StringJS)

public "equals"(obj: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): StringJS
public "volume"(): float
public "pitch"(): float
public "randomness"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponAttributes$Sound$$Type = ($WeaponAttributes$Sound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaponAttributes$Sound_ = $WeaponAttributes$Sound$$Type;
}}
