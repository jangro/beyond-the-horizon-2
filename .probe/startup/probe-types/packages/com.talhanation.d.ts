declare module "com.talhanation.smallships.world.item.DrakkarItem" {
import {$ShipItem, $ShipItem$$Type} from "com.talhanation.smallships.world.item.ShipItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Boat$Type, $Boat$Type$$Type} from "net.minecraft.world.entity.vehicle.Boat$Type"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $DrakkarItem extends $ShipItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(type: $Boat$Type$$Type, properties: $Item$Properties$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrakkarItem$$Type = ($DrakkarItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrakkarItem_ = $DrakkarItem$$Type;
}}
declare module "com.talhanation.smallships.world.entity.cannon.Cannon" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$ICannonProjectile, $ICannonProjectile$$Type} from "com.talhanation.smallships.world.entity.projectile.ICannonProjectile"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$ICannon, $ICannon$$Type} from "com.talhanation.smallships.world.entity.cannon.ICannon"
import {$Vector3d, $Vector3d$$Type} from "org.joml.Vector3d"

export class $Cannon {

constructor(owner: $ICannon$$Type)

public "tick"(x: double, y: double, z: double, yaw: double, pitch: double): void
public "getBarrelEndPoint"(): $Vector3d
public "getPitch"(): float
public "getForward"(): $Vector3d
public "setPitch"(pitch: float): void
public "getYaw"(): float
public "setYaw"(yaw: float): void
public "getPos"(): $Vector3d
public "getBarrelEndPointLocal"(): $Vector3d
public "isFuzing"(): boolean
public "triggerFuze"(shooter: $Entity$$Type, projectileSupplier: $Supplier$$Type<($ICannonProjectile$$Type)>): void
public "getPrevYaw"(): float
public "getPrevPitch"(): float
public "isCooldown"(): boolean
public "shootAdvanced"(shootVec: $Vec3$$Type, yShootVec: double, driverEntity: $LivingEntity$$Type, speed: double, accuracy: double): void
get "barrelEndPoint"(): $Vector3d
get "pitch"(): float
get "forward"(): $Vector3d
set "pitch"(value: float)
get "yaw"(): float
set "yaw"(value: float)
get "pos"(): $Vector3d
get "barrelEndPointLocal"(): $Vector3d
get "fuzing"(): boolean
get "prevYaw"(): float
get "prevPitch"(): float
get "cooldown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cannon$$Type = ($Cannon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cannon_ = $Cannon$$Type;
}}
declare module "com.talhanation.smallships.world.entity.projectile.ICannonProjectile" {
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Cannon, $Cannon$$Type} from "com.talhanation.smallships.world.entity.cannon.Cannon"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"
import {$Vector3d, $Vector3d$$Type} from "org.joml.Vector3d"

export interface $ICannonProjectile {

 "getAdditionalCannonShootParticles"(): $ParticleOptions
 "shootAndSpawn"(arg0: $Cannon$$Type, arg1: $Vector3d$$Type, arg2: $Vector3f$$Type, arg3: float, arg4: float, arg5: $Entity$$Type): void

(arg0: $Cannon, arg1: $Vector3d, arg2: $Vector3f, arg3: float, arg4: float, arg5: $Entity): void
get "additionalCannonShootParticles"(): $ParticleOptions
}

export namespace $ICannonProjectile {
const probejs$$marker: never
}
export class $ICannonProjectile$$Static implements $ICannonProjectile {


 "getAdditionalCannonShootParticles"(): $ParticleOptions
 "shootAndSpawn"(arg0: $Cannon$$Type, arg1: $Vector3d$$Type, arg2: $Vector3f$$Type, arg3: float, arg4: float, arg5: $Entity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICannonProjectile$$Type = ((arg0: $Cannon, arg1: $Vector3d, arg2: $Vector3f, arg3: float, arg4: float, arg5: $Entity) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICannonProjectile_ = $ICannonProjectile$$Type;
}}
declare module "com.talhanation.smallships.mixin.controlling.BoatAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BoatAccessor {

 "getDeltaRotation"(): float
 "setDeltaRotation"(arg0: float): void
 "isInputLeft"(): boolean
 "isInputRight"(): boolean
 "isInputUp"(): boolean
 "isInputDown"(): boolean
get "deltaRotation"(): float
set "deltaRotation"(value: float)
get "inputLeft"(): boolean
get "inputRight"(): boolean
get "inputUp"(): boolean
get "inputDown"(): boolean
}

export namespace $BoatAccessor {
const probejs$$marker: never
}
export class $BoatAccessor$$Static implements $BoatAccessor {


 "getDeltaRotation"(): float
 "setDeltaRotation"(arg0: float): void
 "isInputLeft"(): boolean
 "isInputRight"(): boolean
 "isInputUp"(): boolean
 "isInputDown"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoatAccessor$$Type = ($BoatAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoatAccessor_ = $BoatAccessor$$Type;
}}
declare module "com.talhanation.smallships.mixin.container.SimpleContainerAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export interface $SimpleContainerAccessor {

 "getItems"(): $NonNullList<($ItemStack)>

(): $NonNullList$$Type<($ItemStack$$Type)>
get "items"(): $NonNullList<($ItemStack)>
}

export namespace $SimpleContainerAccessor {
const probejs$$marker: never
}
export class $SimpleContainerAccessor$$Static implements $SimpleContainerAccessor {


 "getItems"(): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleContainerAccessor$$Type = (() => $NonNullList$$Type<($ItemStack$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleContainerAccessor_ = $SimpleContainerAccessor$$Type;
}}
declare module "com.talhanation.smallships.world.item.CannonBallItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $CannonBallItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonBallItem$$Type = ($CannonBallItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonBallItem_ = $CannonBallItem$$Type;
}}
declare module "com.talhanation.smallships.world.entity.IMixinEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinEntity {

 "setPreventDismountToCoordinates"(arg0: boolean): void
 "setPreventTeleportOnNextPassengerSync"(arg0: boolean): void
 "doNotTeleportOnNextPassengerSync"(): boolean
 "doNotDismountToCoordinates"(): boolean
 "getPrevXRot"(): float
 "getPrevYRot"(): float
set "preventDismountToCoordinates"(value: boolean)
set "preventTeleportOnNextPassengerSync"(value: boolean)
get "prevXRot"(): float
get "prevYRot"(): float
}

export namespace $IMixinEntity {
const probejs$$marker: never
}
export class $IMixinEntity$$Static implements $IMixinEntity {


 "setPreventDismountToCoordinates"(arg0: boolean): void
 "setPreventTeleportOnNextPassengerSync"(arg0: boolean): void
 "doNotTeleportOnNextPassengerSync"(): boolean
 "doNotDismountToCoordinates"(): boolean
 "getPrevXRot"(): float
 "getPrevYRot"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinEntity$$Type = ($IMixinEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinEntity_ = $IMixinEntity$$Type;
}}
declare module "com.talhanation.smallships.world.entity.cannon.ICannonBallSource" {
import {$CannonBallItem, $CannonBallItem$$Type} from "com.talhanation.smallships.world.item.CannonBallItem"

export interface $ICannonBallSource {

 "getCannonBallToShoot"(): $CannonBallItem
 "consumeCannonBall"(): void
get "cannonBallToShoot"(): $CannonBallItem
}

export namespace $ICannonBallSource {
const probejs$$marker: never
}
export class $ICannonBallSource$$Static implements $ICannonBallSource {


 "getCannonBallToShoot"(): $CannonBallItem
 "consumeCannonBall"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICannonBallSource$$Type = ($ICannonBallSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICannonBallSource_ = $ICannonBallSource$$Type;
}}
declare module "com.talhanation.smallships.world.item.ShipItem" {
import {$BoatItem, $BoatItem$$Type} from "net.minecraft.world.item.BoatItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Boat$Type, $Boat$Type$$Type} from "net.minecraft.world.entity.vehicle.Boat$Type"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $ShipItem extends $BoatItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(type: $Boat$Type$$Type, properties: $Item$Properties$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShipItem$$Type = ($ShipItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShipItem_ = $ShipItem$$Type;
}}
declare module "com.talhanation.smallships.world.item.GalleyItem" {
import {$ShipItem, $ShipItem$$Type} from "com.talhanation.smallships.world.item.ShipItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Boat$Type, $Boat$Type$$Type} from "net.minecraft.world.entity.vehicle.Boat$Type"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $GalleyItem extends $ShipItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(type: $Boat$Type$$Type, properties: $Item$Properties$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GalleyItem$$Type = ($GalleyItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GalleyItem_ = $GalleyItem$$Type;
}}
declare module "com.talhanation.smallships.world.item.CannonItem" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $CannonItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "useOn"(useOnContext: $UseOnContext$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CannonItem$$Type = ($CannonItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CannonItem_ = $CannonItem$$Type;
}}
declare module "com.talhanation.smallships.mixin.container.MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor {

 "setXpos"(arg0: double): void
 "setYpos"(arg0: double): void
 "setMouseGrabbed"(arg0: boolean): void
set "xpos"(value: double)
set "ypos"(value: double)
set "mouseGrabbed"(value: boolean)
}

export namespace $MouseHandlerAccessor {
const probejs$$marker: never
}
export class $MouseHandlerAccessor$$Static implements $MouseHandlerAccessor {


 "setXpos"(arg0: double): void
 "setYpos"(arg0: double): void
 "setMouseGrabbed"(arg0: boolean): void
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
declare module "com.talhanation.smallships.world.item.SailItem" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $SailItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SailItem$$Type = ($SailItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SailItem_ = $SailItem$$Type;
}}
declare module "com.talhanation.smallships.duck.CameraZoomAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CameraZoomAccess {

 "smallships$getShipZoomData"(): float
 "smallships$setShipZoomData"(arg0: float): void
}

export namespace $CameraZoomAccess {
const probejs$$marker: never
}
export class $CameraZoomAccess$$Static implements $CameraZoomAccess {


 "smallships$getShipZoomData"(): float
 "smallships$setShipZoomData"(arg0: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraZoomAccess$$Type = ($CameraZoomAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CameraZoomAccess_ = $CameraZoomAccess$$Type;
}}
declare module "com.talhanation.smallships.world.entity.cannon.ICannon" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent, $SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$ICannonBallSource, $ICannonBallSource$$Type} from "com.talhanation.smallships.world.entity.cannon.ICannonBallSource"
import {$CannonBallItem, $CannonBallItem$$Type} from "com.talhanation.smallships.world.item.CannonBallItem"
import {$ParticleOptions, $ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export interface $ICannon extends $ICannonBallSource {

 "getLevel"(): $Level
 "provideShootParticles"(): $ParticleOptions
 "playSoundAt"(arg0: $SoundEvent$$Type, arg1: float, arg2: float): void
 "getCannonBallToShoot"(): $CannonBallItem
 "consumeCannonBall"(): void
get "level"(): $Level
get "cannonBallToShoot"(): $CannonBallItem
}

export namespace $ICannon {
const probejs$$marker: never
}
export class $ICannon$$Static implements $ICannon {


 "getLevel"(): $Level
 "provideShootParticles"(): $ParticleOptions
 "playSoundAt"(arg0: $SoundEvent$$Type, arg1: float, arg2: float): void
 "getCannonBallToShoot"(): $CannonBallItem
 "consumeCannonBall"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICannon$$Type = ($ICannon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICannon_ = $ICannon$$Type;
}}
declare module "com.talhanation.smallships.world.item.BriggItem" {
import {$ShipItem, $ShipItem$$Type} from "com.talhanation.smallships.world.item.ShipItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Boat$Type, $Boat$Type$$Type} from "net.minecraft.world.entity.vehicle.Boat$Type"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $BriggItem extends $ShipItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(type: $Boat$Type$$Type, properties: $Item$Properties$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BriggItem$$Type = ($BriggItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BriggItem_ = $BriggItem$$Type;
}}
declare module "com.talhanation.smallships.world.particles.ModParticleTypes$SimpleParticleTypeImpl" {
import {$ParticleType, $ParticleType$$Type} from "net.minecraft.core.particles.ParticleType"
import {$SimpleParticleType, $SimpleParticleType$$Type} from "net.minecraft.core.particles.SimpleParticleType"

export class $ModParticleTypes$SimpleParticleTypeImpl extends $SimpleParticleType {

constructor(bl: boolean)

public "getType"(): $ParticleType<(any)>
get "type"(): $ParticleType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModParticleTypes$SimpleParticleTypeImpl$$Type = ($ModParticleTypes$SimpleParticleTypeImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModParticleTypes$SimpleParticleTypeImpl_ = $ModParticleTypes$SimpleParticleTypeImpl$$Type;
}}
declare module "com.talhanation.smallships.world.item.CogItem" {
import {$ShipItem, $ShipItem$$Type} from "com.talhanation.smallships.world.item.ShipItem"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Boat$Type, $Boat$Type$$Type} from "net.minecraft.world.entity.vehicle.Boat$Type"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $CogItem extends $ShipItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(type: $Boat$Type$$Type, properties: $Item$Properties$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CogItem$$Type = ($CogItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CogItem_ = $CogItem$$Type;
}}
