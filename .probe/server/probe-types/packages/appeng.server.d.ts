declare module "appeng.server.testplots.KitOutPlayerEvent" {
import {$PlayerEvent, $PlayerEvent$$Type} from "net.neoforged.neoforge.event.entity.player.PlayerEvent"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $KitOutPlayerEvent extends $PlayerEvent {

constructor(arg0: $ServerPlayer$$Type)

public "getPlayer"(): $ServerPlayer
public "getEntity"(): $Entity
get "player"(): $ServerPlayer
get "entity"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KitOutPlayerEvent$$Type = ($KitOutPlayerEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KitOutPlayerEvent_ = $KitOutPlayerEvent$$Type;
}}
declare module "appeng.server.testplots.SpawnExtraGridTestTools" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$InternalInventory, $InternalInventory$$Type} from "appeng.api.inventories.InternalInventory"
import {$IGrid, $IGrid$$Type} from "appeng.api.networking.IGrid"

export class $SpawnExtraGridTestTools extends $Event {

constructor(arg0: $ResourceLocation$$Type, arg1: $InternalInventory$$Type, arg2: $IGrid$$Type)

public "getInventory"(): $InternalInventory
public "getGrid"(): $IGrid
public "getPlotId"(): $ResourceLocation
get "inventory"(): $InternalInventory
get "grid"(): $IGrid
get "plotId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnExtraGridTestTools$$Type = ($SpawnExtraGridTestTools);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnExtraGridTestTools_ = $SpawnExtraGridTestTools$$Type;
}}
