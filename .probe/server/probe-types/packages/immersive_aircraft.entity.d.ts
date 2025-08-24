declare module "immersive_aircraft.entity.misc.BoundingBoxDescriptor" {
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BoundingBoxDescriptor extends $Record {

constructor(width: float, height: float, x: float, y: float, z: float)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "decode"(buffer: $RegistryFriendlyByteBuf$$Type): $BoundingBoxDescriptor
public "encode"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "x"(): float
public "z"(): float
public "y"(): float
public "width"(): float
public static "fromJson"(json: $JsonObject$$Type): $BoundingBoxDescriptor
public "height"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoundingBoxDescriptor$$Type = ({"height"?: float, "x"?: float, "y"?: float, "z"?: float, "width"?: float}) | ([height?: float, x?: float, y?: float, z?: float, width?: float]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoundingBoxDescriptor_ = $BoundingBoxDescriptor$$Type;
}}
declare module "immersive_aircraft.entity.misc.TrailDescriptor" {
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $TrailDescriptor extends $Record {

constructor(x: float, y: float, z: float, size: float, rotate: float, gray: float, length: integer)

public "gray"(): float
public "size"(): float
public "equals"(o: any): boolean
public "length"(): integer
public "toString"(): string
public "hashCode"(): integer
public static "decode"(buf: $FriendlyByteBuf$$Type): $TrailDescriptor
public "encode"(buf: $FriendlyByteBuf$$Type): void
public "x"(): float
public "z"(): float
public "y"(): float
public "rotate"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrailDescriptor$$Type = ({"x"?: float, "size"?: float, "y"?: float, "rotate"?: float, "z"?: float, "length"?: integer, "gray"?: float}) | ([x?: float, size?: float, y?: float, rotate?: float, z?: float, length?: integer, gray?: float]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrailDescriptor_ = $TrailDescriptor$$Type;
}}
declare module "immersive_aircraft.entity.EngineVehicle$GUI_STYLE" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $EngineVehicle$GUI_STYLE extends $Enum<($EngineVehicle$GUI_STYLE)> {
static readonly "ENGINE": $EngineVehicle$GUI_STYLE
static readonly "NONE": $EngineVehicle$GUI_STYLE


public static "values"(): ($EngineVehicle$GUI_STYLE)[]
public static "valueOf"(name: string): $EngineVehicle$GUI_STYLE
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EngineVehicle$GUI_STYLE$$Type = (("none") | ("engine"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EngineVehicle$GUI_STYLE_ = $EngineVehicle$GUI_STYLE$$Type;
}}
declare module "immersive_aircraft.entity.EngineVehicle" {
import {$EngineVehicle$GUI_STYLE, $EngineVehicle$GUI_STYLE$$Type} from "immersive_aircraft.entity.EngineVehicle$GUI_STYLE"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$Stack, $Stack$$Type} from "java.util.Stack"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PortalProcessor, $PortalProcessor$$Type} from "net.minecraft.world.entity.PortalProcessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$InterpolatedFloat, $InterpolatedFloat$$Type} from "immersive_aircraft.util.InterpolatedFloat"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$InventoryVehicleEntity, $InventoryVehicleEntity$$Type} from "immersive_aircraft.entity.InventoryVehicleEntity"

export class $EngineVehicle extends $InventoryVehicleEntity {
 "xRot": float
 "hasImpulse": boolean
 "ars_Nouveau$motions": $Stack<(any)>
 "tickCount": integer
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "lastZ": double
 "lastY": double
 "lastX": double
static readonly "BOARDING_COOLDOWN": integer
 "removalReason": $Entity$RemovalReason
readonly "identifier": $ResourceLocation
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "yRot": float
 "moveDist": float
static readonly "ID_TAG": string
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "engineSpinUpStrength": float
 "hurtMarked": boolean
 "invulnerableTime": integer
static readonly "UUID_TAG": string
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "roll": float
 "portalProcess": $PortalProcessor
 "adaptPlayerRotation": boolean
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
 "secondLastZ": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "secondLastX": double
 "secondLastY": double
 "engineSound": float
static readonly "LOW_FUEL": integer
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "eyeHeight": float
 "prevRoll": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
readonly "pressingInterpolatedZ": $InterpolatedFloat
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": string
readonly "enginePower": $InterpolatedFloat
readonly "pressingInterpolatedX": $InterpolatedFloat
readonly "pressingInterpolatedY": $InterpolatedFloat
static readonly "PASSENGERS_TAG": string
 "blocksBuilding": boolean
 "wasOnFire": boolean
static readonly "TARGET_FUEL": integer
 "zOld": double
readonly "engineRotation": $InterpolatedFloat
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "wasTouchingWater": boolean
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

constructor(entityType: $EntityType$$Type<($EngineVehicle$$Type)>, world: $Level$$Type, canExplodeOnCrash: boolean)

public "tick"(): void
public "worksUnderWater"(): boolean
public "getEngineTarget"(): float
public "getPropellerSpeed"(): float
public "setEngineTarget"(engineTarget: float): void
public "getFuelConsumption"(): float
public "getFuelUtilization"(): float
public "emitSmokeParticle"(x: float, y: float, z: float, nx: float, ny: float, nz: float): void
public "setAnimationVariables"(tickDelta: float): void
public "getGuiStyle"(): $EngineVehicle$GUI_STYLE
public "getEnginePower"(): float
public "isFuelLow"(): boolean
public "consumeFuel"(consumption: float): float
public "getFuelType"(): string
public "getDisplayName"(): $Component
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "tryClear"(arg0: any): void
public "self"(): $Container
public static "forNameOnly"(arg0: string): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "engineTarget"(): float
get "propellerSpeed"(): float
set "engineTarget"(value: float)
get "fuelConsumption"(): float
get "fuelUtilization"(): float
set "animationVariables"(value: float)
get "guiStyle"(): $EngineVehicle$GUI_STYLE
get "enginePower"(): float
get "fuelLow"(): boolean
get "fuelType"(): string
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EngineVehicle$$Type = ($EngineVehicle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EngineVehicle_ = $EngineVehicle$$Type;
}}
declare module "immersive_aircraft.entity.DyeableVehicleEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$Stack, $Stack$$Type} from "java.util.Stack"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$PortalProcessor, $PortalProcessor$$Type} from "net.minecraft.world.entity.PortalProcessor"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$VehicleEntity, $VehicleEntity$$Type} from "immersive_aircraft.entity.VehicleEntity"
import {$InterpolatedFloat, $InterpolatedFloat$$Type} from "immersive_aircraft.util.InterpolatedFloat"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $DyeableVehicleEntity extends $VehicleEntity {
 "xRot": float
 "hasImpulse": boolean
 "ars_Nouveau$motions": $Stack<(any)>
 "tickCount": integer
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "lastZ": double
 "lastY": double
 "lastX": double
static readonly "BOARDING_COOLDOWN": integer
 "removalReason": $Entity$RemovalReason
readonly "identifier": $ResourceLocation
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "yRot": float
 "moveDist": float
static readonly "ID_TAG": string
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "hurtMarked": boolean
 "invulnerableTime": integer
static readonly "UUID_TAG": string
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "roll": float
 "portalProcess": $PortalProcessor
 "adaptPlayerRotation": boolean
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
 "secondLastZ": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "secondLastX": double
 "secondLastY": double
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "eyeHeight": float
 "prevRoll": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
readonly "pressingInterpolatedZ": $InterpolatedFloat
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": string
readonly "pressingInterpolatedX": $InterpolatedFloat
readonly "pressingInterpolatedY": $InterpolatedFloat
static readonly "PASSENGERS_TAG": string
 "blocksBuilding": boolean
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "wasTouchingWater": boolean
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

constructor(entityType: $EntityType$$Type<($VehicleEntity$$Type)>, world: $Level$$Type, canExplodeOnCrash: boolean)

public "getDisplayName"(): $Component
public "getDyeColor"(): integer
public "addItemTag"(stack: $ItemStack$$Type): void
public "getHighlightColor"(): integer
public "getDefaultDyeColor"(): integer
public "setDyeColor"(v: integer): void
public "getBodyColor"(): integer
public "readItemTag"(stack: $ItemStack$$Type): void
public static "forNameOnly"(arg0: string): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "displayName"(): $Component
get "dyeColor"(): integer
get "highlightColor"(): integer
get "defaultDyeColor"(): integer
set "dyeColor"(value: integer)
get "bodyColor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyeableVehicleEntity$$Type = ($DyeableVehicleEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DyeableVehicleEntity_ = $DyeableVehicleEntity$$Type;
}}
declare module "immersive_aircraft.entity.misc.WeaponMount" {
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $WeaponMount extends $Record {
static readonly "EMPTY": $WeaponMount

constructor(transform: $Matrix4f$$Type, blocking: boolean)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "decode"(buffer: $RegistryFriendlyByteBuf$$Type): $WeaponMount
public "encode"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "transform"(): $Matrix4f
public "blocking"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponMount$$Type = ({"transform"?: $Matrix4f$$Type, "blocking"?: boolean}) | ([transform?: $Matrix4f$$Type, blocking?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaponMount_ = $WeaponMount$$Type;
}}
declare module "immersive_aircraft.entity.misc.VehicleProperties" {
import {$VehicleStat, $VehicleStat$$Type} from "immersive_aircraft.item.upgrade.VehicleStat"
import {$Map, $Map$$Type} from "java.util.Map"
import {$InventoryVehicleEntity, $InventoryVehicleEntity$$Type} from "immersive_aircraft.entity.InventoryVehicleEntity"

export class $VehicleProperties {

constructor(baseValues: $Map$$Type<($VehicleStat$$Type), (float)>, vehicle: $InventoryVehicleEntity$$Type)

public "get"(stat: $VehicleStat$$Type): float
public "getAdditive"(stat: $VehicleStat$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleProperties$$Type = ($VehicleProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleProperties_ = $VehicleProperties$$Type;
}}
declare module "immersive_aircraft.entity.misc.PositionDescriptor" {
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PositionDescriptor extends $Record {

constructor(x: float, y: float, z: float, yaw: float, pitch: float, roll: float)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "decode"(byteBuf: $RegistryFriendlyByteBuf$$Type): $PositionDescriptor
public "encode"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "x"(): float
public "z"(): float
public "y"(): float
public "roll"(): float
public "yaw"(): float
public "matrix"(): $Matrix4f
public "pitch"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionDescriptor$$Type = ({"yaw"?: float, "pitch"?: float, "roll"?: float, "x"?: float, "y"?: float, "z"?: float}) | ([yaw?: float, pitch?: float, roll?: float, x?: float, y?: float, z?: float]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PositionDescriptor_ = $PositionDescriptor$$Type;
}}
declare module "immersive_aircraft.entity.misc.WeaponMount$Type" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $WeaponMount$Type extends $Enum<($WeaponMount$Type)> {
static readonly "ROTATING": $WeaponMount$Type
static readonly "FRONT": $WeaponMount$Type
static readonly "DROP": $WeaponMount$Type


public static "values"(): ($WeaponMount$Type)[]
public static "valueOf"(name: string): $WeaponMount$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponMount$Type$$Type = (("rotating") | ("front") | ("drop"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaponMount$Type_ = $WeaponMount$Type$$Type;
}}
declare module "immersive_aircraft.entity.inventory.SparseSimpleInventory" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SimpleContainer, $SimpleContainer$$Type} from "net.minecraft.world.SimpleContainer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$InventoryVehicleEntity, $InventoryVehicleEntity$$Type} from "immersive_aircraft.entity.InventoryVehicleEntity"

export class $SparseSimpleInventory extends $SimpleContainer {
 "size": integer
 "items": $NonNullList<($ItemStack)>

constructor(size: integer)

public "createTag"(levelRegistry: $HolderLookup$Provider$$Type): $ListTag
public "tick"(entity: $InventoryVehicleEntity$$Type): void
public "fromTag"(tag: $ListTag$$Type, levelRegistry: $HolderLookup$Provider$$Type): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SparseSimpleInventory$$Type = ($SparseSimpleInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SparseSimpleInventory_ = $SparseSimpleInventory$$Type;
}}
declare module "immersive_aircraft.entity.InventoryVehicleEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$BlockContainerJS, $BlockContainerJS$$Type} from "dev.latvian.mods.kubejs.level.BlockContainerJS"
import {$DyeableVehicleEntity, $DyeableVehicleEntity$$Type} from "immersive_aircraft.entity.DyeableVehicleEntity"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$ItemPredicate, $ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$ContainerListener, $ContainerListener$$Type} from "net.minecraft.world.ContainerListener"
import {$Set, $Set$$Type} from "java.util.Set"
import {$WeaponMount, $WeaponMount$$Type} from "immersive_aircraft.entity.misc.WeaponMount"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$VehicleProperties, $VehicleProperties$$Type} from "immersive_aircraft.entity.misc.VehicleProperties"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SlotAccess, $SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$VehicleInventoryDescription, $VehicleInventoryDescription$$Type} from "immersive_aircraft.entity.inventory.VehicleInventoryDescription"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Weapon, $Weapon$$Type} from "immersive_aircraft.entity.weapon.Weapon"
import {$InterpolatedFloat, $InterpolatedFloat$$Type} from "immersive_aircraft.util.InterpolatedFloat"
import {$VehicleStat, $VehicleStat$$Type} from "immersive_aircraft.item.upgrade.VehicleStat"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider, $MenuProvider$$Type} from "net.minecraft.world.MenuProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$HasCustomInventoryScreen, $HasCustomInventoryScreen$$Type} from "net.minecraft.world.entity.HasCustomInventoryScreen"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PortalProcessor, $PortalProcessor$$Type} from "net.minecraft.world.entity.PortalProcessor"
import {$SparseSimpleInventory, $SparseSimpleInventory$$Type} from "immersive_aircraft.entity.inventory.SparseSimpleInventory"
import {$Map, $Map$$Type} from "java.util.Map"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Stack, $Stack$$Type} from "java.util.Stack"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"

export class $InventoryVehicleEntity extends $DyeableVehicleEntity implements $ContainerListener, $MenuProvider, $Container, $HasCustomInventoryScreen {
 "xRot": float
 "hasImpulse": boolean
 "ars_Nouveau$motions": $Stack<(any)>
 "tickCount": integer
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "lastZ": double
 "lastY": double
 "lastX": double
static readonly "BOARDING_COOLDOWN": integer
 "removalReason": $Entity$RemovalReason
readonly "identifier": $ResourceLocation
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "yRot": float
 "moveDist": float
static readonly "ID_TAG": string
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "hurtMarked": boolean
 "invulnerableTime": integer
static readonly "UUID_TAG": string
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "roll": float
 "portalProcess": $PortalProcessor
 "adaptPlayerRotation": boolean
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
 "secondLastZ": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "secondLastX": double
 "secondLastY": double
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "eyeHeight": float
 "prevRoll": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
readonly "pressingInterpolatedZ": $InterpolatedFloat
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": string
readonly "pressingInterpolatedX": $InterpolatedFloat
readonly "pressingInterpolatedY": $InterpolatedFloat
static readonly "PASSENGERS_TAG": string
 "blocksBuilding": boolean
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "wasTouchingWater": boolean
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

constructor(entityType: $EntityType$$Type<($InventoryVehicleEntity$$Type)>, world: $Level$$Type, canExplodeOnCrash: boolean)

public "removeItem"(slot: integer, amount: integer): $ItemStack
public "isEmpty"(): boolean
public "getProperties"(): $VehicleProperties
public "getSlot"(slot: integer): $SlotAccess
public "tick"(): void
public "getItem"(slot: integer): $ItemStack
public "openCustomInventoryScreen"(player: $Player$$Type): void
public "getDurability"(): float
public "createMenu"(i: integer, playerInventory: $Inventory$$Type, playerEntity: $Player$$Type): $AbstractContainerMenu
public "setItem"(slot: integer, stack: $ItemStack$$Type): void
public "canPlaceItem"(index: integer, stack: $ItemStack$$Type): boolean
public "clearContent"(): void
public "interact"(player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResult
public "getInventory"(): $SparseSimpleInventory
public "canTakeItem"(target: $Container$$Type, index: integer, stack: $ItemStack$$Type): boolean
public "stillValid"(player: $Player$$Type): boolean
public "isScoping"(): boolean
public "setChanged"(): void
public "getSlots"(slotType: string): $List<($ItemStack)>
public "openInventory"(player: $ServerPlayer$$Type): void
public "addItemTag"(stack: $ItemStack$$Type): void
public "canBoost"(): boolean
public "getWeapons"(): $Map<(integer), ($List<($Weapon)>)>
public "fireWeapon"(slot: integer, index: integer, direction: $Vector3f$$Type): void
public "boost"(): void
public "getContainerSize"(): integer
public "removeItemNoUpdate"(slot: integer): $ItemStack
public "containerChanged"(sender: $Container$$Type): void
public "getTotalUpgrade"(stat: $VehicleStat$$Type): float
public "clientFireWeapons"(entity: $Entity$$Type): void
public "getWeaponMounts"(slot: integer): $List<($WeaponMount)>
public "readItemTag"(stack: $ItemStack$$Type): void
public "getInventoryDescription"(): $VehicleInventoryDescription
public "getDisplayName"(): $Component
public "startOpen"(arg0: $Player$$Type): void
public "stopOpen"(arg0: $Player$$Type): void
public "countItem"(arg0: $Item$$Type): integer
public "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
public "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "getMaxStackSize"(): integer
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
public static "tryClear"(arg0: any): void
public "canReceiveTransferCooldown"(): boolean
public "setTransferCooldown"(arg0: long): void
public "lithium$itemInsertionTestRequiresStackSize1"(): boolean
public "self"(): $Container
public "getBlock"(arg0: $Level$$Type): $BlockContainerJS
public "isMutable"(): boolean
public "getSlots"(): integer
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "clear"(): void
public "getWidth"(): integer
public "getHeight"(): integer
public "setChanged"(): void
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "getStackInSlot"(arg0: integer): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "asContainer"(): $Container
public "isEmpty"(): boolean
public "insertItem"(arg0: $ItemStack$$Type, arg1: boolean): $ItemStack
public "clear"(arg0: $ItemPredicate$$Type): void
public "find"(arg0: $ItemPredicate$$Type): integer
public "find"(): integer
public "count"(): integer
public "count"(arg0: $ItemPredicate$$Type): integer
public "countNonEmpty"(arg0: $ItemPredicate$$Type): integer
public "countNonEmpty"(): integer
public "getAllItems"(): $List<($ItemStack)>
public static "forNameOnly"(arg0: string): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "empty"(): boolean
get "properties"(): $VehicleProperties
get "durability"(): float
get "inventory"(): $SparseSimpleInventory
get "scoping"(): boolean
get "weapons"(): $Map<(integer), ($List<($Weapon)>)>
get "containerSize"(): integer
get "inventoryDescription"(): $VehicleInventoryDescription
get "displayName"(): $Component
get "maxStackSize"(): integer
set "transferCooldown"(value: long)
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryVehicleEntity$$Type = ($InventoryVehicleEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryVehicleEntity_ = $InventoryVehicleEntity$$Type;
}}
declare module "immersive_aircraft.entity.inventory.slots.SlotDescription$SlotDescriptionFactory" {
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$SlotDescription, $SlotDescription$$Type} from "immersive_aircraft.entity.inventory.slots.SlotDescription"

export interface $SlotDescription$SlotDescriptionFactory {

 "construct"(arg0: string, arg1: integer, arg2: integer, arg3: integer, arg4: $JsonObject$$Type): $SlotDescription

(arg0: string, arg1: integer, arg2: integer, arg3: integer, arg4: $JsonObject): $SlotDescription$$Type
}

export namespace $SlotDescription$SlotDescriptionFactory {
const probejs$$marker: never
}
export class $SlotDescription$SlotDescriptionFactory$$Static implements $SlotDescription$SlotDescriptionFactory {


 "construct"(arg0: string, arg1: integer, arg2: integer, arg3: integer, arg4: $JsonObject$$Type): $SlotDescription
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotDescription$SlotDescriptionFactory$$Type = ((arg0: string, arg1: integer, arg2: integer, arg3: integer, arg4: $JsonObject) => $SlotDescription$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotDescription$SlotDescriptionFactory_ = $SlotDescription$SlotDescriptionFactory$$Type;
}}
declare module "immersive_aircraft.entity.inventory.slots.SlotDescription" {
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$InventoryVehicleEntity, $InventoryVehicleEntity$$Type} from "immersive_aircraft.entity.InventoryVehicleEntity"

export class $SlotDescription {

constructor(type: string, index: integer, x: integer, y: integer, json: $JsonObject$$Type)
constructor(type: string, buffer: $RegistryFriendlyByteBuf$$Type)

public "index"(): integer
public "type"(): string
public "encode"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "x"(): integer
public "getSlot"(vehicle: $InventoryVehicleEntity$$Type, inventory: $Container$$Type): $Slot
public "y"(): integer
public "getToolTip"(): $Optional<($List<($Component)>)>
get "toolTip"(): $Optional<($List<($Component)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotDescription$$Type = ($SlotDescription);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotDescription_ = $SlotDescription$$Type;
}}
declare module "immersive_aircraft.entity.AircraftEntity" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$EngineVehicle, $EngineVehicle$$Type} from "immersive_aircraft.entity.EngineVehicle"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PortalProcessor, $PortalProcessor$$Type} from "net.minecraft.world.entity.PortalProcessor"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$Stack, $Stack$$Type} from "java.util.Stack"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Trail, $Trail$$Type} from "immersive_aircraft.entity.misc.Trail"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$InterpolatedFloat, $InterpolatedFloat$$Type} from "immersive_aircraft.util.InterpolatedFloat"

export class $AircraftEntity extends $EngineVehicle {
 "xRot": float
 "hasImpulse": boolean
 "ars_Nouveau$motions": $Stack<(any)>
 "tickCount": integer
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "lastZ": double
 "lastY": double
 "lastX": double
static readonly "BOARDING_COOLDOWN": integer
 "removalReason": $Entity$RemovalReason
readonly "identifier": $ResourceLocation
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "yRot": float
 "moveDist": float
static readonly "ID_TAG": string
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "engineSpinUpStrength": float
 "hurtMarked": boolean
 "invulnerableTime": integer
static readonly "UUID_TAG": string
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "roll": float
 "portalProcess": $PortalProcessor
 "adaptPlayerRotation": boolean
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
 "secondLastZ": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "secondLastX": double
 "secondLastY": double
 "engineSound": float
static readonly "LOW_FUEL": integer
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "eyeHeight": float
 "prevRoll": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
readonly "pressingInterpolatedZ": $InterpolatedFloat
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": string
readonly "enginePower": $InterpolatedFloat
readonly "pressingInterpolatedX": $InterpolatedFloat
readonly "pressingInterpolatedY": $InterpolatedFloat
static readonly "PASSENGERS_TAG": string
 "blocksBuilding": boolean
 "wasOnFire": boolean
static readonly "TARGET_FUEL": integer
 "zOld": double
readonly "engineRotation": $InterpolatedFloat
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
 "inWaterLevel": float
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "wasTouchingWater": boolean
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

constructor(entityType: $EntityType$$Type<($AircraftEntity$$Type)>, world: $Level$$Type, canExplodeOnCrash: boolean)

public "tick"(): void
public "chill"(): void
public "getWindStrength"(): float
public "getTrails"(): $List<($Trail)>
public "getWindEffect"(): $Vector3f
public "getDisplayName"(): $Component
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "tryClear"(arg0: any): void
public "self"(): $Container
public static "forNameOnly"(arg0: string): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "windStrength"(): float
get "trails"(): $List<($Trail)>
get "windEffect"(): $Vector3f
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AircraftEntity$$Type = ($AircraftEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AircraftEntity_ = $AircraftEntity$$Type;
}}
declare module "immersive_aircraft.entity.VehicleEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$MoverType, $MoverType$$Type} from "net.minecraft.world.entity.MoverType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$VehicleData, $VehicleData$$Type} from "immersive_aircraft.entity.misc.VehicleData"
import {$ScoreHolder, $ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$PortalProcessor, $PortalProcessor$$Type} from "net.minecraft.world.entity.PortalProcessor"
import {$BlockUtil$FoundRectangle, $BlockUtil$FoundRectangle$$Type} from "net.minecraft.BlockUtil$FoundRectangle"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$Entity$MoveFunction, $Entity$MoveFunction$$Type} from "net.minecraft.world.entity.Entity$MoveFunction"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$EntityDimensions, $EntityDimensions$$Type} from "net.minecraft.world.entity.EntityDimensions"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$Entity$RemovalReason, $Entity$RemovalReason$$Type} from "net.minecraft.world.entity.Entity$RemovalReason"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Matrix3f, $Matrix3f$$Type} from "org.joml.Matrix3f"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Stack, $Stack$$Type} from "java.util.Stack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$AABB, $AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$InterpolatedFloat, $InterpolatedFloat$$Type} from "immersive_aircraft.util.InterpolatedFloat"

export class $VehicleEntity extends $Entity {
 "xRot": float
 "hasImpulse": boolean
 "ars_Nouveau$motions": $Stack<(any)>
 "tickCount": integer
 "an_isRewinding": boolean
 "noPhysics": boolean
 "yo": double
 "lastZ": double
 "lastY": double
 "lastX": double
static readonly "BOARDING_COOLDOWN": integer
 "removalReason": $Entity$RemovalReason
readonly "identifier": $ResourceLocation
 "yRotO": float
static readonly "CONTENTS_SLOT_INDEX": integer
 "level": $Level
 "yRot": float
 "moveDist": float
static readonly "ID_TAG": string
 "mainSupportingBlockPos": $Optional<($BlockPos)>
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
 "xRotO": float
 "zo": double
 "walkDist": float
 "xOld": double
 "noCulling": boolean
 "wasInPowderSnow": boolean
 "hurtMarked": boolean
 "invulnerableTime": integer
static readonly "UUID_TAG": string
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
 "fallDistance": float
 "roll": float
 "portalProcess": $PortalProcessor
 "adaptPlayerRotation": boolean
 "verticalCollision": boolean
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
 "secondLastZ": double
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
 "verticalCollisionBelow": boolean
 "secondLastX": double
 "secondLastY": double
 "yOld": double
static readonly "DEFAULT_BB_WIDTH": float
 "eyeHeight": float
 "prevRoll": float
 "minorHorizontalCollision": boolean
static readonly "DEFAULT_BB_HEIGHT": float
readonly "pressingInterpolatedZ": $InterpolatedFloat
 "walkDistO": float
static readonly "FREEZE_HURT_FREQUENCY": integer
 "flyDist": float
 "isInPowderSnow": boolean
static readonly "ATTACHMENTS_NBT_KEY": string
readonly "pressingInterpolatedX": $InterpolatedFloat
readonly "pressingInterpolatedY": $InterpolatedFloat
static readonly "PASSENGERS_TAG": string
 "blocksBuilding": boolean
 "wasOnFire": boolean
 "zOld": double
static readonly "TOTAL_AIR_SUPPLY": integer
 "xo": double
static readonly "BASE_SAFE_FALL_DISTANCE": integer
 "wasTouchingWater": boolean
 "horizontalCollision": boolean
 "dimensions": $EntityDimensions

constructor(entityType: $EntityType$$Type<($VehicleEntity$$Type)>, world: $Level$$Type, canExplodeOnCrash: boolean)

public "getDisplayName"(): $Component
public "move"(movementType: $MoverType$$Type, movement: $Vec3$$Type): void
public "tick"(): void
public "getVehicleNormalTransformQuantized"(): $Matrix3f
public "getDismountLocationForPassenger"(passenger: $LivingEntity$$Type): $Vec3
public "getVehicleNormalTransform"(): $Matrix3f
public "shouldRenderAtSqrDistance"(distance: double): boolean
public "getControllingPassenger"(): $LivingEntity
public "getRelativePortalPosition"(portalAxis: $Direction$Axis$$Type, portalRect: $BlockUtil$FoundRectangle$$Type): $Vec3
public "getBoundingBoxForCulling"(): $AABB
public "getDurability"(): float
public "interact"(player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResult
public "setPitch"(pitch: float): void
public "setHealth"(damage: float): void
public "getHealth"(): float
public "animateHurt"(yaw: float): void
public "isPickable"(): boolean
public "maxUpStep"(): float
public "getPickResult"(): $ItemStack
public "canCollideWith"(other: $Entity$$Type): boolean
public "positionRider"(passenger: $Entity$$Type, positionUpdater: $Entity$MoveFunction$$Type): void
public "addItemTag"(stack: $ItemStack$$Type): void
public "getBoost"(): integer
public "canBoost"(): boolean
public "boost"(): void
public "boost"(ticks: integer): void
public "chill"(): void
public "attack"(source: $DamageSource$$Type, amount: float): boolean
public "lerpTo"(x: double, y: double, z: double, yaw: float, pitch: float, steps: integer): void
public "asItem"(): $Item
public "onPassengerTurned"(passenger: $Entity$$Type): void
public "canBeCollidedWith"(): boolean
public "onAboveBubbleCol"(drag: boolean): void
public "skipAttackInteraction"(attacker: $Entity$$Type): boolean
public "getDamageWobbleSide"(): integer
public "setDamageWobbleSide"(side: integer): void
public "setDamageWobbleTicks"(wobbleTicks: integer): void
public "getDamageWobbleTicks"(): integer
public "getAdditionalShapes"(): $List<($AABB)>
public "isValidDimension"(): boolean
public "canTurnOnEngine"(pilot: $Entity$$Type): boolean
public "getTopDirection"(): $Vector3f
public "getVehicleTransform"(): $Matrix4f
public "getForwardDirection"(): $Vector3f
public "getRightDirection"(): $Vector3f
public "getPassengerSpace"(): integer
public "isPilotCreative"(): boolean
public "isWithinParticleRange"(): boolean
public "setAnimationVariables"(tickDelta: float): void
public static "canCollide"(entity: $Entity$$Type, other: $Entity$$Type): boolean
public "getShapes"(): $List<($AABB)>
public "getSpeedVector"(): $Vec3
public "setInputs"(x: float, y: float, z: float): void
public "copyEntityData"(entity: $Entity$$Type): void
public "getGunner"(offset: integer): $Entity
public "getVehicleData"(): $VehicleData
public "setZRot"(rot: float): void
public "toVec3d"(v: $Vector3f$$Type): $Vec3
public "readItemTag"(stack: $ItemStack$$Type): void
public "getRoll"(tickDelta: float): float
public "getRoll"(): float
public "getZoom"(): double
public "getDamageWobbleStrength"(): float
public "setDamageWobbleStrength"(wobbleStrength: float): void
public static "forNameOnly"(arg0: string): $ScoreHolder
public static "fromGameProfile"(arg0: $GameProfile$$Type): $ScoreHolder
/**
 * 
 * @deprecated
 */
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "displayName"(): $Component
get "vehicleNormalTransformQuantized"(): $Matrix3f
get "vehicleNormalTransform"(): $Matrix3f
get "controllingPassenger"(): $LivingEntity
get "boundingBoxForCulling"(): $AABB
get "durability"(): float
set "pitch"(value: float)
set "health"(value: float)
get "health"(): float
get "pickable"(): boolean
get "pickResult"(): $ItemStack
get "damageWobbleSide"(): integer
set "damageWobbleSide"(value: integer)
set "damageWobbleTicks"(value: integer)
get "damageWobbleTicks"(): integer
get "additionalShapes"(): $List<($AABB)>
get "validDimension"(): boolean
get "topDirection"(): $Vector3f
get "vehicleTransform"(): $Matrix4f
get "forwardDirection"(): $Vector3f
get "rightDirection"(): $Vector3f
get "passengerSpace"(): integer
get "pilotCreative"(): boolean
get "withinParticleRange"(): boolean
set "animationVariables"(value: float)
get "shapes"(): $List<($AABB)>
get "speedVector"(): $Vec3
get "vehicleData"(): $VehicleData
set "zRot"(value: float)
get "roll"(): float
get "zoom"(): double
get "damageWobbleStrength"(): float
set "damageWobbleStrength"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleEntity$$Type = ($VehicleEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleEntity_ = $VehicleEntity$$Type;
}}
declare module "immersive_aircraft.entity.misc.Trail" {
import {$Vector4f, $Vector4f$$Type} from "org.joml.Vector4f"

export class $Trail {
 "entries": integer
readonly "gray": float
readonly "size": integer
 "nullEntries": integer
readonly "buffer": (float)[]
 "lastIndex": integer

constructor(length: integer)
constructor(length: integer, gray: float)

public "add"(first: $Vector4f$$Type, second: $Vector4f$$Type, alpha: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Trail$$Type = ($Trail);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Trail_ = $Trail$$Type;
}}
declare module "immersive_aircraft.entity.inventory.VehicleInventoryDescription" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Rect2iCommon, $Rect2iCommon$$Type} from "immersive_aircraft.util.Rect2iCommon"
import {$List, $List$$Type} from "java.util.List"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$SlotDescription, $SlotDescription$$Type} from "immersive_aircraft.entity.inventory.slots.SlotDescription"
import {$JsonArray, $JsonArray$$Type} from "com.google.gson.JsonArray"
import {$SlotDescription$SlotDescriptionDecoder, $SlotDescription$SlotDescriptionDecoder$$Type} from "immersive_aircraft.entity.inventory.slots.SlotDescription$SlotDescriptionDecoder"
import {$SlotDescription$SlotDescriptionFactory, $SlotDescription$SlotDescriptionFactory$$Type} from "immersive_aircraft.entity.inventory.slots.SlotDescription$SlotDescriptionFactory"

export class $VehicleInventoryDescription {
static readonly "DYE": string
static readonly "INVENTORY": string
static readonly "BANNER": string
static readonly "SLOT_DECODER": $Map<(string), ($SlotDescription$SlotDescriptionDecoder)>
static readonly "SLOT_TYPES": $Map<(string), ($SlotDescription$SlotDescriptionFactory)>
static readonly "BOILER": string
static readonly "UPGRADE": string
static readonly "BOOSTER": string
static readonly "WEAPON": string
static readonly "INGREDIENT": string

constructor()
constructor(inventorySlots: $JsonArray$$Type)
constructor(buffer: $RegistryFriendlyByteBuf$$Type)

public "getHeight"(): integer
public "encode"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "build"(): $VehicleInventoryDescription
public "addSlot"(slotDescription: $SlotDescription$$Type): $VehicleInventoryDescription
public "getSlots"(type: string): $List<($SlotDescription)>
public "getSlots"(): $List<($SlotDescription)>
public "getInventorySize"(): integer
public static "registerSlotType"(name: string, slotFactory: $SlotDescription$SlotDescriptionFactory$$Type, slotDecoder: $SlotDescription$SlotDescriptionDecoder$$Type): string
public "getLastSyncIndex"(): integer
public "addRectangle"(x: integer, y: integer, w: integer, h: integer): $VehicleInventoryDescription
public "getRectangles"(): $List<($Rect2iCommon)>
public "addSlots"(type: string, x: integer, y: integer, cols: integer, rows: integer, boxed: boolean, json: $JsonObject$$Type): $VehicleInventoryDescription
get "height"(): integer
get "slots"(): $List<($SlotDescription)>
get "inventorySize"(): integer
get "lastSyncIndex"(): integer
get "rectangles"(): $List<($Rect2iCommon)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleInventoryDescription$$Type = ($VehicleInventoryDescription);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleInventoryDescription_ = $VehicleInventoryDescription$$Type;
}}
declare module "immersive_aircraft.entity.misc.VehicleData" {
import {$VehicleStat, $VehicleStat$$Type} from "immersive_aircraft.item.upgrade.VehicleStat"
import {$VehicleInventoryDescription, $VehicleInventoryDescription$$Type} from "immersive_aircraft.entity.inventory.VehicleInventoryDescription"
import {$Map, $Map$$Type} from "java.util.Map"
import {$TrailDescriptor, $TrailDescriptor$$Type} from "immersive_aircraft.entity.misc.TrailDescriptor"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$BoundingBoxDescriptor, $BoundingBoxDescriptor$$Type} from "immersive_aircraft.entity.misc.BoundingBoxDescriptor"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$WeaponMount$Type, $WeaponMount$Type$$Type} from "immersive_aircraft.entity.misc.WeaponMount$Type"
import {$WeaponMount, $WeaponMount$$Type} from "immersive_aircraft.entity.misc.WeaponMount"
import {$PositionDescriptor, $PositionDescriptor$$Type} from "immersive_aircraft.entity.misc.PositionDescriptor"

export class $VehicleData {

constructor(byteBuf: $RegistryFriendlyByteBuf$$Type)
constructor(json: $JsonObject$$Type)
constructor()

public "encode"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getProperties"(): $Map<($VehicleStat), (float)>
public "getWeaponMounts"(): $Map<(integer), ($Map<($WeaponMount$Type), ($List<($WeaponMount)>)>)>
public "getBoundingBoxes"(): $List<($BoundingBoxDescriptor)>
public "getPassengerPositions"(): $List<($List<($PositionDescriptor)>)>
public "getTrails"(): $List<($TrailDescriptor)>
public "getInventoryDescription"(): $VehicleInventoryDescription
get "properties"(): $Map<($VehicleStat), (float)>
get "weaponMounts"(): $Map<(integer), ($Map<($WeaponMount$Type), ($List<($WeaponMount)>)>)>
get "boundingBoxes"(): $List<($BoundingBoxDescriptor)>
get "passengerPositions"(): $List<($List<($PositionDescriptor)>)>
get "trails"(): $List<($TrailDescriptor)>
get "inventoryDescription"(): $VehicleInventoryDescription
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleData$$Type = ($VehicleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleData_ = $VehicleData$$Type;
}}
declare module "immersive_aircraft.entity.weapon.Weapon" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$WeaponMount, $WeaponMount$$Type} from "immersive_aircraft.entity.misc.WeaponMount"
import {$VehicleEntity, $VehicleEntity$$Type} from "immersive_aircraft.entity.VehicleEntity"

export class $Weapon {

constructor(entity: $VehicleEntity$$Type, stack: $ItemStack$$Type, mount: $WeaponMount$$Type, slot: integer)

public "getEntity"(): $VehicleEntity
public "getSlot"(): integer
public "getStack"(): $ItemStack
public "tick"(): void
public "clientFire"(arg0: integer): void
public "fire"(arg0: $Vector3f$$Type): void
public "setGunnerOffset"(gunnerOffset: integer): void
public "getGunnerOffset"(): integer
public "setAnimationVariables"<T extends $VehicleEntity>(entity: T, time: float): void
public "getMount"(): $WeaponMount
get "entity"(): $VehicleEntity
get "slot"(): integer
get "stack"(): $ItemStack
set "gunnerOffset"(value: integer)
get "gunnerOffset"(): integer
get "mount"(): $WeaponMount
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Weapon$$Type = ($Weapon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Weapon_ = $Weapon$$Type;
}}
declare module "immersive_aircraft.entity.inventory.slots.SlotDescription$SlotDescriptionDecoder" {
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$SlotDescription, $SlotDescription$$Type} from "immersive_aircraft.entity.inventory.slots.SlotDescription"

export interface $SlotDescription$SlotDescriptionDecoder {

 "decode"(arg0: string, arg1: $RegistryFriendlyByteBuf$$Type): $SlotDescription

(arg0: string, arg1: $RegistryFriendlyByteBuf): $SlotDescription$$Type
}

export namespace $SlotDescription$SlotDescriptionDecoder {
const probejs$$marker: never
}
export class $SlotDescription$SlotDescriptionDecoder$$Static implements $SlotDescription$SlotDescriptionDecoder {


 "decode"(arg0: string, arg1: $RegistryFriendlyByteBuf$$Type): $SlotDescription
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotDescription$SlotDescriptionDecoder$$Type = ((arg0: string, arg1: $RegistryFriendlyByteBuf) => $SlotDescription$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotDescription$SlotDescriptionDecoder_ = $SlotDescription$SlotDescriptionDecoder$$Type;
}}
