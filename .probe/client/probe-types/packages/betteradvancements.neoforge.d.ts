declare module "betteradvancements.neoforge.api.event.AdvancementMovedEvent" {
import {$AdvancementNode, $AdvancementNode$$Type} from "net.minecraft.advancements.AdvancementNode"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$IAdvancementMovedEvent, $IAdvancementMovedEvent$$Type} from "betteradvancements.common.api.event.IAdvancementMovedEvent"
import {$IBetterAdvancementEntryGui, $IBetterAdvancementEntryGui$$Type} from "betteradvancements.common.api.IBetterAdvancementEntryGui"

export class $AdvancementMovedEvent extends $Event implements $IAdvancementMovedEvent {

constructor(gui: $IBetterAdvancementEntryGui$$Type)

public "getY"(): integer
public "getX"(): integer
public "getAdvancement"(): $AdvancementNode
get "y"(): integer
get "x"(): integer
get "advancement"(): $AdvancementNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementMovedEvent$$Type = ($AdvancementMovedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancementMovedEvent_ = $AdvancementMovedEvent$$Type;
}}
declare module "betteradvancements.neoforge.api.event.AdvancementDrawConnectionsEvent" {
import {$AdvancementNode, $AdvancementNode$$Type} from "net.minecraft.advancements.AdvancementNode"
import {$IAdvancementDrawConnectionsEvent, $IAdvancementDrawConnectionsEvent$$Type} from "betteradvancements.common.api.event.IAdvancementDrawConnectionsEvent"
import {$List, $List$$Type} from "java.util.List"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$AdvancementHolder, $AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"

export class $AdvancementDrawConnectionsEvent extends $Event implements $IAdvancementDrawConnectionsEvent {

constructor(advancement: $AdvancementNode$$Type)

public "getAdvancement"(): $AdvancementNode
public "getExtraConnections"(): $List<($AdvancementHolder)>
get "advancement"(): $AdvancementNode
get "extraConnections"(): $List<($AdvancementHolder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementDrawConnectionsEvent$$Type = ($AdvancementDrawConnectionsEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancementDrawConnectionsEvent_ = $AdvancementDrawConnectionsEvent$$Type;
}}
