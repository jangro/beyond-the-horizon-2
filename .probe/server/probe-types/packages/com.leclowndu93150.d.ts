declare module "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent$Hotbar" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InventoryUpdateEvent, $InventoryUpdateEvent$$Type} from "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent"

export class $InventoryUpdateEvent$Hotbar extends $InventoryUpdateEvent {

constructor(arg0: $Player$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryUpdateEvent$Hotbar$$Type = ($InventoryUpdateEvent$Hotbar);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryUpdateEvent$Hotbar_ = $InventoryUpdateEvent$Hotbar$$Type;
}}
declare module "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent$Offhand" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InventoryUpdateEvent, $InventoryUpdateEvent$$Type} from "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent"

export class $InventoryUpdateEvent$Offhand extends $InventoryUpdateEvent {

constructor(arg0: $Player$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryUpdateEvent$Offhand$$Type = ($InventoryUpdateEvent$Offhand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryUpdateEvent$Offhand_ = $InventoryUpdateEvent$Offhand$$Type;
}}
declare module "com.leclowndu93150.baguettelib.event.entity.CreativeFlightEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"

export class $CreativeFlightEvent extends $Event {


public "getPlayer"(): $Player
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeFlightEvent$$Type = ($CreativeFlightEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeFlightEvent_ = $CreativeFlightEvent$$Type;
}}
declare module "com.leclowndu93150.baguettelib.event.entity.death.PlayerDeathEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LivingDeathEvent, $LivingDeathEvent$$Type} from "com.leclowndu93150.baguettelib.event.entity.death.LivingDeathEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $PlayerDeathEvent extends $LivingDeathEvent {


public "getEntity"(): $LivingEntity
public "getPlayer"(): $Player
get "entity"(): $LivingEntity
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDeathEvent$$Type = ($PlayerDeathEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerDeathEvent_ = $PlayerDeathEvent$$Type;
}}
declare module "com.leclowndu93150.baguettelib.event.entity.death.PlayerDeathEvent$Pre" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$PlayerDeathEvent, $PlayerDeathEvent$$Type} from "com.leclowndu93150.baguettelib.event.entity.death.PlayerDeathEvent"

export class $PlayerDeathEvent$Pre extends $PlayerDeathEvent implements $ICancellableEvent {

constructor(arg0: $Player$$Type, arg1: $DamageSource$$Type)

public "getEntity"(): $LivingEntity
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "entity"(): $LivingEntity
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDeathEvent$Pre$$Type = ($PlayerDeathEvent$Pre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerDeathEvent$Pre_ = $PlayerDeathEvent$Pre$$Type;
}}
declare module "com.leclowndu93150.baguettelib.event.entity.death.LivingDeathEvent$Post" {
import {$LivingDeathEvent, $LivingDeathEvent$$Type} from "com.leclowndu93150.baguettelib.event.entity.death.LivingDeathEvent"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingDeathEvent$Post extends $LivingDeathEvent {

constructor(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDeathEvent$Post$$Type = ($LivingDeathEvent$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingDeathEvent$Post_ = $LivingDeathEvent$Post$$Type;
}}
declare module "com.leclowndu93150.baguettelib.event.entity.death.LivingDeathEvent" {
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingDeathEvent extends $Event {


public "getEntity"(): $LivingEntity
public "getSource"(): $DamageSource
get "entity"(): $LivingEntity
get "source"(): $DamageSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDeathEvent$$Type = ($LivingDeathEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingDeathEvent_ = $LivingDeathEvent$$Type;
}}
declare module "com.leclowndu93150.baguettelib.event.entity.CreativeFlightEvent$Toggle" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$CreativeFlightEvent, $CreativeFlightEvent$$Type} from "com.leclowndu93150.baguettelib.event.entity.CreativeFlightEvent"

export class $CreativeFlightEvent$Toggle extends $CreativeFlightEvent implements $ICancellableEvent {

constructor(arg0: $Player$$Type, arg1: boolean)

public "isEnablingFlight"(): boolean
public "isDisablingFlight"(): boolean
public "getFlightState"(): boolean
public "setFlightState"(arg0: boolean): void
public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "enablingFlight"(): boolean
get "disablingFlight"(): boolean
get "flightState"(): boolean
set "flightState"(value: boolean)
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeFlightEvent$Toggle$$Type = ($CreativeFlightEvent$Toggle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeFlightEvent$Toggle_ = $CreativeFlightEvent$Toggle$$Type;
}}
declare module "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent$MainInventory" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InventoryUpdateEvent, $InventoryUpdateEvent$$Type} from "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent"

export class $InventoryUpdateEvent$MainInventory extends $InventoryUpdateEvent {

constructor(arg0: $Player$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryUpdateEvent$MainInventory$$Type = ($InventoryUpdateEvent$MainInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryUpdateEvent$MainInventory_ = $InventoryUpdateEvent$MainInventory$$Type;
}}
declare module "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"

export class $InventoryUpdateEvent extends $Event {


public "getSlot"(): integer
public "getPlayer"(): $Player
public "getOldStack"(): $ItemStack
public "getNewStack"(): $ItemStack
get "slot"(): integer
get "player"(): $Player
get "oldStack"(): $ItemStack
get "newStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryUpdateEvent$$Type = ($InventoryUpdateEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryUpdateEvent_ = $InventoryUpdateEvent$$Type;
}}
declare module "com.leclowndu93150.baguettelib.event.entity.CreativeFlightEvent$Changed" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CreativeFlightEvent, $CreativeFlightEvent$$Type} from "com.leclowndu93150.baguettelib.event.entity.CreativeFlightEvent"

export class $CreativeFlightEvent$Changed extends $CreativeFlightEvent {

constructor(arg0: $Player$$Type, arg1: boolean, arg2: boolean)

public "getPreviousFlightState"(): boolean
public "getNewFlightState"(): boolean
public "wasFlightEnabled"(): boolean
public "wasFlightDisabled"(): boolean
get "previousFlightState"(): boolean
get "newFlightState"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeFlightEvent$Changed$$Type = ($CreativeFlightEvent$Changed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeFlightEvent$Changed_ = $CreativeFlightEvent$Changed$$Type;
}}
declare module "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent$Armor" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$InventoryUpdateEvent, $InventoryUpdateEvent$$Type} from "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent"

export class $InventoryUpdateEvent$Armor extends $InventoryUpdateEvent {

constructor(arg0: $Player$$Type, arg1: $EquipmentSlot$$Type, arg2: integer, arg3: $ItemStack$$Type, arg4: $ItemStack$$Type)

public "getEquipmentSlot"(): $EquipmentSlot
get "equipmentSlot"(): $EquipmentSlot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryUpdateEvent$Armor$$Type = ($InventoryUpdateEvent$Armor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryUpdateEvent$Armor_ = $InventoryUpdateEvent$Armor$$Type;
}}
declare module "com.leclowndu93150.baguettelib.event.entity.death.PlayerDeathEvent$Post" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$PlayerDeathEvent, $PlayerDeathEvent$$Type} from "com.leclowndu93150.baguettelib.event.entity.death.PlayerDeathEvent"

export class $PlayerDeathEvent$Post extends $PlayerDeathEvent {

constructor(arg0: $Player$$Type, arg1: $DamageSource$$Type)

public "getEntity"(): $LivingEntity
get "entity"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDeathEvent$Post$$Type = ($PlayerDeathEvent$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerDeathEvent$Post_ = $PlayerDeathEvent$Post$$Type;
}}
declare module "com.leclowndu93150.baguettelib.event.entity.death.LivingDeathEvent$Pre" {
import {$LivingDeathEvent, $LivingDeathEvent$$Type} from "com.leclowndu93150.baguettelib.event.entity.death.LivingDeathEvent"
import {$DamageSource, $DamageSource$$Type} from "net.minecraft.world.damagesource.DamageSource"
import {$ICancellableEvent, $ICancellableEvent$$Type} from "net.neoforged.bus.api.ICancellableEvent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LivingDeathEvent$Pre extends $LivingDeathEvent implements $ICancellableEvent {

constructor(arg0: $LivingEntity$$Type, arg1: $DamageSource$$Type)

public "isCanceled"(): boolean
public "setCanceled"(arg0: boolean): void
get "canceled"(): boolean
set "canceled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDeathEvent$Pre$$Type = ($LivingDeathEvent$Pre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingDeathEvent$Pre_ = $LivingDeathEvent$Pre$$Type;
}}
declare module "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent$Hands" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$InventoryUpdateEvent, $InventoryUpdateEvent$$Type} from "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent"

export class $InventoryUpdateEvent$Hands extends $InventoryUpdateEvent {

constructor(arg0: $Player$$Type, arg1: $EquipmentSlot$$Type, arg2: integer, arg3: $ItemStack$$Type, arg4: $ItemStack$$Type)

public "getEquipmentSlot"(): $EquipmentSlot
get "equipmentSlot"(): $EquipmentSlot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryUpdateEvent$Hands$$Type = ($InventoryUpdateEvent$Hands);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryUpdateEvent$Hands_ = $InventoryUpdateEvent$Hands$$Type;
}}
declare module "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent$All" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InventoryUpdateEvent, $InventoryUpdateEvent$$Type} from "com.leclowndu93150.baguettelib.event.inventory.InventoryUpdateEvent"

export class $InventoryUpdateEvent$All extends $InventoryUpdateEvent {

constructor(arg0: $Player$$Type, arg1: integer, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryUpdateEvent$All$$Type = ($InventoryUpdateEvent$All);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryUpdateEvent$All_ = $InventoryUpdateEvent$All$$Type;
}}
