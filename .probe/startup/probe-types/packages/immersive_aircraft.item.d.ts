declare module "immersive_aircraft.item.WeaponItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$DescriptionItem, $DescriptionItem$$Type} from "immersive_aircraft.item.DescriptionItem"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$WeaponMount$Type, $WeaponMount$Type$$Type} from "immersive_aircraft.entity.misc.WeaponMount$Type"

export class $WeaponItem extends $DescriptionItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(settings: $Item$Properties$$Type, mountType: $WeaponMount$Type$$Type)

public "getMountType"(): $WeaponMount$Type
public "appendHoverText"(stack: $ItemStack$$Type, ctx: $Item$TooltipContext$$Type, tooltips: $List$$Type<($Component$$Type)>, flags: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
get "mountType"(): $WeaponMount$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponItem$$Type = ($WeaponItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaponItem_ = $WeaponItem$$Type;
}}
declare module "immersive_aircraft.item.VehicleItem$VehicleConstructor" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$VehicleEntity, $VehicleEntity$$Type} from "immersive_aircraft.entity.VehicleEntity"

export interface $VehicleItem$VehicleConstructor {

 "create"(arg0: $Level$$Type): $VehicleEntity

(arg0: $Level): $VehicleEntity$$Type
}

export namespace $VehicleItem$VehicleConstructor {
const probejs$$marker: never
}
export class $VehicleItem$VehicleConstructor$$Static implements $VehicleItem$VehicleConstructor {


 "create"(arg0: $Level$$Type): $VehicleEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleItem$VehicleConstructor$$Type = ((arg0: $Level) => $VehicleEntity$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleItem$VehicleConstructor_ = $VehicleItem$VehicleConstructor$$Type;
}}
declare module "immersive_aircraft.item.DescriptionItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $DescriptionItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type)

public "appendHoverText"(stack: $ItemStack$$Type, ctx: $Item$TooltipContext$$Type, tooltips: $List$$Type<($Component$$Type)>, flags: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DescriptionItem$$Type = ($DescriptionItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DescriptionItem_ = $DescriptionItem$$Type;
}}
declare module "immersive_aircraft.item.AircraftItem$AircraftConstructor" {
import {$VehicleItem$VehicleConstructor, $VehicleItem$VehicleConstructor$$Type} from "immersive_aircraft.item.VehicleItem$VehicleConstructor"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AircraftEntity, $AircraftEntity$$Type} from "immersive_aircraft.entity.AircraftEntity"

export interface $AircraftItem$AircraftConstructor extends $VehicleItem$VehicleConstructor {

 "create"(arg0: $Level$$Type): $AircraftEntity

(arg0: $Level): $AircraftEntity$$Type
}

export namespace $AircraftItem$AircraftConstructor {
const probejs$$marker: never
}
export class $AircraftItem$AircraftConstructor$$Static implements $AircraftItem$AircraftConstructor {


 "create"(arg0: $Level$$Type): $AircraftEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AircraftItem$AircraftConstructor$$Type = ((arg0: $Level) => $AircraftEntity$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AircraftItem$AircraftConstructor_ = $AircraftItem$AircraftConstructor$$Type;
}}
declare module "immersive_aircraft.item.upgrade.VehicleStat" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $VehicleStat extends $Record {
static readonly "FRICTION": $VehicleStat
static readonly "WIND": $VehicleStat
static readonly "PUSH_SPEED": $VehicleStat
static readonly "DIALS": $VehicleStat
static readonly "ENGINE_SPEED": $VehicleStat
static readonly "STATS": $Map<(StringJS), ($VehicleStat)>
static readonly "PITCH_SPEED": $VehicleStat
static readonly "LIFT": $VehicleStat
static readonly "VERTICAL_SPEED": $VehicleStat
static readonly "STABILIZER": $VehicleStat
static readonly "VERTICAL_DECAY": $VehicleStat
static readonly "ACCELERATION": $VehicleStat
static readonly "DURABILITY": $VehicleStat
static readonly "GROUND_FRICTION": $VehicleStat
static readonly "HUD": $VehicleStat
static readonly "ROTATION_DECAY": $VehicleStat
static readonly "FUEL": $VehicleStat
static readonly "MASS": $VehicleStat
static readonly "GLIDE_FACTOR": $VehicleStat
static readonly "GROUND_PITCH": $VehicleStat
static readonly "WATER_FRICTION": $VehicleStat
static readonly "ROLL_FACTOR": $VehicleStat
static readonly "YAW_SPEED": $VehicleStat
static readonly "HORIZONTAL_DECAY": $VehicleStat

constructor(name: StringJS, positive: boolean, defaultValue: float)

public "positive"(): boolean
public "name"(): StringJS
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "register"(name: StringJS, positive: boolean, defaultValue: float): $VehicleStat
public static "register"(name: StringJS, positive: boolean): $VehicleStat
public "defaultValue"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleStat$$Type = ({"name"?: StringJS, "defaultValue"?: float, "positive"?: boolean}) | ([name?: StringJS, defaultValue?: float, positive?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleStat_ = $VehicleStat$$Type;
}}
declare module "immersive_aircraft.item.VehicleItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$VehicleItem$VehicleConstructor, $VehicleItem$VehicleConstructor$$Type} from "immersive_aircraft.item.VehicleItem$VehicleConstructor"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$DescriptionItem, $DescriptionItem$$Type} from "immersive_aircraft.item.DescriptionItem"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $VehicleItem extends $DescriptionItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(settings: $Item$Properties$$Type, arg1: $VehicleItem$VehicleConstructor$$Type)
constructor(settings: $Item$Properties$$Type, arg1: $VehicleItem$VehicleConstructor$$Type, onWater: boolean)

public "use"(world: $Level$$Type, user: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$$Type, ctx: $Item$TooltipContext$$Type, tooltips: $List$$Type<($Component$$Type)>, flags: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleItem$$Type = ($VehicleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleItem_ = $VehicleItem$$Type;
}}
declare module "immersive_aircraft.item.AircraftItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$VehicleItem, $VehicleItem$$Type} from "immersive_aircraft.item.VehicleItem"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$AircraftItem$AircraftConstructor, $AircraftItem$AircraftConstructor$$Type} from "immersive_aircraft.item.AircraftItem$AircraftConstructor"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"

export class $AircraftItem extends $VehicleItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(settings: $Item$Properties$$Type, arg1: $AircraftItem$AircraftConstructor$$Type)

public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AircraftItem$$Type = ($AircraftItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AircraftItem_ = $AircraftItem$$Type;
}}
declare module "immersive_aircraft.item.DyeableAircraftItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Item$Properties, $Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$AircraftItem$AircraftConstructor, $AircraftItem$AircraftConstructor$$Type} from "immersive_aircraft.item.AircraftItem$AircraftConstructor"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$AircraftItem, $AircraftItem$$Type} from "immersive_aircraft.item.AircraftItem"

export class $DyeableAircraftItem extends $AircraftItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(settings: $Item$Properties$$Type, arg1: $AircraftItem$AircraftConstructor$$Type)

public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyeableAircraftItem$$Type = ($DyeableAircraftItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DyeableAircraftItem_ = $DyeableAircraftItem$$Type;
}}
