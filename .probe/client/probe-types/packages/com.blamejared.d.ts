declare module "com.blamejared.clumps.api.events.IRepairEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"

export interface $IRepairEvent {

 "getValue"(): integer
 "setValue"(arg0: integer): void
 "getPlayer"(): $Player
get "value"(): integer
set "value"(value: integer)
get "player"(): $Player
}

export namespace $IRepairEvent {
const probejs$$marker: never
}
export class $IRepairEvent$$Static implements $IRepairEvent {


 "getValue"(): integer
 "setValue"(arg0: integer): void
 "getPlayer"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRepairEvent$$Type = ($IRepairEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRepairEvent_ = $IRepairEvent$$Type;
}}
declare module "com.blamejared.clumps.api.events.RepairEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IRepairEvent, $IRepairEvent$$Type} from "com.blamejared.clumps.api.events.IRepairEvent"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"

export class $RepairEvent extends $Event implements $IRepairEvent {

constructor(arg0: $Player$$Type, arg1: integer)

public "getValue"(): integer
public "setValue"(arg0: integer): void
public "getPlayer"(): $Player
get "value"(): integer
set "value"(value: integer)
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepairEvent$$Type = ($RepairEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepairEvent_ = $RepairEvent$$Type;
}}
declare module "com.blamejared.controlling.mixin.AccessInputConstantsKey" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $AccessInputConstantsKey {

}

export namespace $AccessInputConstantsKey {
function controlling$getNAME_MAP(): $Map<(StringJS), ($InputConstants$Key)>
const probejs$$marker: never
}
export class $AccessInputConstantsKey$$Static implements $AccessInputConstantsKey {


static "controlling$getNAME_MAP"(): $Map<(StringJS), ($InputConstants$Key)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessInputConstantsKey$$Type = ($AccessInputConstantsKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessInputConstantsKey_ = $AccessInputConstantsKey$$Type;
}}
declare module "com.blamejared.controlling.api.events.KeyEntryRenderEvent" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$IKeyEntry, $IKeyEntry$$Type} from "com.blamejared.controlling.api.entries.IKeyEntry"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$IKeyEntryRenderEvent, $IKeyEntryRenderEvent$$Type} from "com.blamejared.controlling.api.events.IKeyEntryRenderEvent"

export class $KeyEntryRenderEvent extends $Event implements $IKeyEntryRenderEvent {

constructor(arg0: $IKeyEntry$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: boolean, arg10: float)

public "getEntry"(): $IKeyEntry
public "getY"(): integer
public "getX"(): integer
public "getSlotIndex"(): integer
public "isHovered"(): boolean
public "getRowWidth"(): integer
public "getRowLeft"(): integer
public "getMouseX"(): integer
public "getMouseY"(): integer
public "getGuiGraphics"(): $GuiGraphics
public "getPartialTicks"(): float
get "entry"(): $IKeyEntry
get "y"(): integer
get "x"(): integer
get "slotIndex"(): integer
get "hovered"(): boolean
get "rowWidth"(): integer
get "rowLeft"(): integer
get "mouseX"(): integer
get "mouseY"(): integer
get "guiGraphics"(): $GuiGraphics
get "partialTicks"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyEntryRenderEvent$$Type = ($KeyEntryRenderEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyEntryRenderEvent_ = $KeyEntryRenderEvent$$Type;
}}
declare module "com.blamejared.controlling.api.events.IKeyEntryListenersEvent" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$List, $List$$Type} from "java.util.List"
import {$IKeyEntry, $IKeyEntry$$Type} from "com.blamejared.controlling.api.entries.IKeyEntry"

export interface $IKeyEntryListenersEvent {

 "getEntry"(): $IKeyEntry
 "getListeners"(): $List<($GuiEventListener)>
get "entry"(): $IKeyEntry
get "listeners"(): $List<($GuiEventListener)>
}

export namespace $IKeyEntryListenersEvent {
const probejs$$marker: never
}
export class $IKeyEntryListenersEvent$$Static implements $IKeyEntryListenersEvent {


 "getEntry"(): $IKeyEntry
 "getListeners"(): $List<($GuiEventListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyEntryListenersEvent$$Type = ($IKeyEntryListenersEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IKeyEntryListenersEvent_ = $IKeyEntryListenersEvent$$Type;
}}
declare module "com.blamejared.clumps.helper.IClumpedOrb" {
import {$Map, $Map$$Type} from "java.util.Map"

export interface $IClumpedOrb {

 "clumps$resolve"(): boolean
 "clumps$getClumpedMap"(): $Map<(integer), (integer)>
 "clumps$setClumpedMap"(arg0: $Map$$Type<(integer), (integer)>): void
}

export namespace $IClumpedOrb {
const probejs$$marker: never
}
export class $IClumpedOrb$$Static implements $IClumpedOrb {


 "clumps$resolve"(): boolean
 "clumps$getClumpedMap"(): $Map<(integer), (integer)>
 "clumps$setClumpedMap"(arg0: $Map$$Type<(integer), (integer)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClumpedOrb$$Type = ($IClumpedOrb);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClumpedOrb_ = $IClumpedOrb$$Type;
}}
declare module "com.blamejared.controlling.api.events.IKeyEntryRenderEvent" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$IKeyEntry, $IKeyEntry$$Type} from "com.blamejared.controlling.api.entries.IKeyEntry"

export interface $IKeyEntryRenderEvent {

 "getEntry"(): $IKeyEntry
 "getY"(): integer
 "getX"(): integer
 "getSlotIndex"(): integer
 "isHovered"(): boolean
 "getRowWidth"(): integer
 "getRowLeft"(): integer
 "getMouseX"(): integer
 "getMouseY"(): integer
 "getGuiGraphics"(): $GuiGraphics
 "getPartialTicks"(): float
get "entry"(): $IKeyEntry
get "y"(): integer
get "x"(): integer
get "slotIndex"(): integer
get "hovered"(): boolean
get "rowWidth"(): integer
get "rowLeft"(): integer
get "mouseX"(): integer
get "mouseY"(): integer
get "guiGraphics"(): $GuiGraphics
get "partialTicks"(): float
}

export namespace $IKeyEntryRenderEvent {
const probejs$$marker: never
}
export class $IKeyEntryRenderEvent$$Static implements $IKeyEntryRenderEvent {


 "getEntry"(): $IKeyEntry
 "getY"(): integer
 "getX"(): integer
 "getSlotIndex"(): integer
 "isHovered"(): boolean
 "getRowWidth"(): integer
 "getRowLeft"(): integer
 "getMouseX"(): integer
 "getMouseY"(): integer
 "getGuiGraphics"(): $GuiGraphics
 "getPartialTicks"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyEntryRenderEvent$$Type = ($IKeyEntryRenderEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IKeyEntryRenderEvent_ = $IKeyEntryRenderEvent$$Type;
}}
declare module "com.blamejared.searchables.mixin.AccessEditBox" {
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $AccessEditBox {

 "searchables$getFilter"(): $Predicate<(StringJS)>
 "searchables$getResponder"(): $Consumer<(StringJS)>
}

export namespace $AccessEditBox {
const probejs$$marker: never
}
export class $AccessEditBox$$Static implements $AccessEditBox {


 "searchables$getFilter"(): $Predicate<(StringJS)>
 "searchables$getResponder"(): $Consumer<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessEditBox$$Type = ($AccessEditBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessEditBox_ = $AccessEditBox$$Type;
}}
declare module "com.blamejared.clumps.api.events.IValueEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"

export interface $IValueEvent {

 "getValue"(): integer
 "setValue"(arg0: integer): void
 "getPlayer"(): $Player
get "value"(): integer
set "value"(value: integer)
get "player"(): $Player
}

export namespace $IValueEvent {
const probejs$$marker: never
}
export class $IValueEvent$$Static implements $IValueEvent {


 "getValue"(): integer
 "setValue"(arg0: integer): void
 "getPlayer"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IValueEvent$$Type = ($IValueEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IValueEvent_ = $IValueEvent$$Type;
}}
declare module "com.blamejared.clumps.api.events.ValueEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$IValueEvent, $IValueEvent$$Type} from "com.blamejared.clumps.api.events.IValueEvent"

export class $ValueEvent extends $Event implements $IValueEvent {

constructor(arg0: $Player$$Type, arg1: integer)

public "getValue"(): integer
public "setValue"(arg0: integer): void
public "getPlayer"(): $Player
get "value"(): integer
set "value"(value: integer)
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueEvent$$Type = ($ValueEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueEvent_ = $ValueEvent$$Type;
}}
declare module "com.blamejared.controlling.api.events.IKeyEntryMouseClickedEvent" {
import {$IKeyEntry, $IKeyEntry$$Type} from "com.blamejared.controlling.api.entries.IKeyEntry"

export interface $IKeyEntryMouseClickedEvent {

 "getEntry"(): $IKeyEntry
 "getMouseX"(): double
 "getMouseY"(): double
 "isHandled"(): boolean
 "setHandled"(arg0: boolean): void
 "getButtonId"(): integer
get "entry"(): $IKeyEntry
get "mouseX"(): double
get "mouseY"(): double
get "handled"(): boolean
set "handled"(value: boolean)
get "buttonId"(): integer
}

export namespace $IKeyEntryMouseClickedEvent {
const probejs$$marker: never
}
export class $IKeyEntryMouseClickedEvent$$Static implements $IKeyEntryMouseClickedEvent {


 "getEntry"(): $IKeyEntry
 "getMouseX"(): double
 "getMouseY"(): double
 "isHandled"(): boolean
 "setHandled"(arg0: boolean): void
 "getButtonId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyEntryMouseClickedEvent$$Type = ($IKeyEntryMouseClickedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IKeyEntryMouseClickedEvent_ = $IKeyEntryMouseClickedEvent$$Type;
}}
declare module "com.blamejared.controlling.mixin.AccessKeyMapping" {
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $AccessKeyMapping {

 "controlling$getKey"(): $InputConstants$Key

(): $InputConstants$Key$$Type
}

export namespace $AccessKeyMapping {
const probejs$$marker: never
}
export class $AccessKeyMapping$$Static implements $AccessKeyMapping {


 "controlling$getKey"(): $InputConstants$Key
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessKeyMapping$$Type = (() => $InputConstants$Key$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessKeyMapping_ = $AccessKeyMapping$$Type;
}}
declare module "com.blamejared.controlling.api.events.IKeyEntryMouseReleasedEvent" {
import {$IKeyEntry, $IKeyEntry$$Type} from "com.blamejared.controlling.api.entries.IKeyEntry"

export interface $IKeyEntryMouseReleasedEvent {

 "getEntry"(): $IKeyEntry
 "getMouseX"(): double
 "getMouseY"(): double
 "isHandled"(): boolean
 "setHandled"(arg0: boolean): void
 "getButtonId"(): integer
get "entry"(): $IKeyEntry
get "mouseX"(): double
get "mouseY"(): double
get "handled"(): boolean
set "handled"(value: boolean)
get "buttonId"(): integer
}

export namespace $IKeyEntryMouseReleasedEvent {
const probejs$$marker: never
}
export class $IKeyEntryMouseReleasedEvent$$Static implements $IKeyEntryMouseReleasedEvent {


 "getEntry"(): $IKeyEntry
 "getMouseX"(): double
 "getMouseY"(): double
 "isHandled"(): boolean
 "setHandled"(arg0: boolean): void
 "getButtonId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyEntryMouseReleasedEvent$$Type = ($IKeyEntryMouseReleasedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IKeyEntryMouseReleasedEvent_ = $IKeyEntryMouseReleasedEvent$$Type;
}}
declare module "com.blamejared.controlling.api.entries.IKeyEntry" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$List, $List$$Type} from "java.util.List"
import {$KeyMapping, $KeyMapping$$Type} from "net.minecraft.client.KeyMapping"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Button, $Button$$Type} from "net.minecraft.client.gui.components.Button"

export interface $IKeyEntry {

 "children"(): $List<($GuiEventListener)>
 "categoryName"(): $Component
 "getKey"(): $KeyMapping
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: boolean, arg9: float): void
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
 "getKeyDesc"(): $Component
 "getBtnResetKeyBinding"(): $Button
 "getBtnChangeKeyBinding"(): $Button
get "key"(): $KeyMapping
get "keyDesc"(): $Component
get "btnResetKeyBinding"(): $Button
get "btnChangeKeyBinding"(): $Button
}

export namespace $IKeyEntry {
const probejs$$marker: never
}
export class $IKeyEntry$$Static implements $IKeyEntry {


 "children"(): $List<($GuiEventListener)>
 "categoryName"(): $Component
 "getKey"(): $KeyMapping
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: boolean, arg9: float): void
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
 "getKeyDesc"(): $Component
 "getBtnResetKeyBinding"(): $Button
 "getBtnChangeKeyBinding"(): $Button
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyEntry$$Type = ($IKeyEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IKeyEntry_ = $IKeyEntry$$Type;
}}
declare module "com.blamejared.clumps.mixin.ExperienceOrbAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExperienceOrbAccess {

 "clumps$getAge"(): integer
 "clumps$setAge"(arg0: integer): void
 "clumps$setCount"(arg0: integer): void
}

export namespace $ExperienceOrbAccess {
const probejs$$marker: never
}
export class $ExperienceOrbAccess$$Static implements $ExperienceOrbAccess {


 "clumps$getAge"(): integer
 "clumps$setAge"(arg0: integer): void
 "clumps$setCount"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExperienceOrbAccess$$Type = ($ExperienceOrbAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExperienceOrbAccess_ = $ExperienceOrbAccess$$Type;
}}
declare module "com.blamejared.controlling.api.events.KeyEntryMouseReleasedEvent" {
import {$IKeyEntryMouseReleasedEvent, $IKeyEntryMouseReleasedEvent$$Type} from "com.blamejared.controlling.api.events.IKeyEntryMouseReleasedEvent"
import {$IKeyEntry, $IKeyEntry$$Type} from "com.blamejared.controlling.api.entries.IKeyEntry"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"

export class $KeyEntryMouseReleasedEvent extends $Event implements $IKeyEntryMouseReleasedEvent {

constructor(arg0: $IKeyEntry$$Type, arg1: double, arg2: double, arg3: integer)

public "getEntry"(): $IKeyEntry
public "getMouseX"(): double
public "getMouseY"(): double
public "isHandled"(): boolean
public "setHandled"(arg0: boolean): void
public "getButtonId"(): integer
get "entry"(): $IKeyEntry
get "mouseX"(): double
get "mouseY"(): double
get "handled"(): boolean
set "handled"(value: boolean)
get "buttonId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyEntryMouseReleasedEvent$$Type = ($KeyEntryMouseReleasedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyEntryMouseReleasedEvent_ = $KeyEntryMouseReleasedEvent$$Type;
}}
declare module "com.blamejared.controlling.api.events.KeyEntryListenersEvent" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$List, $List$$Type} from "java.util.List"
import {$IKeyEntry, $IKeyEntry$$Type} from "com.blamejared.controlling.api.entries.IKeyEntry"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$IKeyEntryListenersEvent, $IKeyEntryListenersEvent$$Type} from "com.blamejared.controlling.api.events.IKeyEntryListenersEvent"

export class $KeyEntryListenersEvent extends $Event implements $IKeyEntryListenersEvent {

constructor(arg0: $IKeyEntry$$Type)

public "getEntry"(): $IKeyEntry
public "getListeners"(): $List<($GuiEventListener)>
get "entry"(): $IKeyEntry
get "listeners"(): $List<($GuiEventListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyEntryListenersEvent$$Type = ($KeyEntryListenersEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyEntryListenersEvent_ = $KeyEntryListenersEvent$$Type;
}}
declare module "com.blamejared.controlling.api.events.KeyEntryMouseClickedEvent" {
import {$IKeyEntry, $IKeyEntry$$Type} from "com.blamejared.controlling.api.entries.IKeyEntry"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$IKeyEntryMouseClickedEvent, $IKeyEntryMouseClickedEvent$$Type} from "com.blamejared.controlling.api.events.IKeyEntryMouseClickedEvent"

export class $KeyEntryMouseClickedEvent extends $Event implements $IKeyEntryMouseClickedEvent {

constructor(arg0: $IKeyEntry$$Type, arg1: double, arg2: double, arg3: integer)

public "getEntry"(): $IKeyEntry
public "getMouseX"(): double
public "getMouseY"(): double
public "isHandled"(): boolean
public "setHandled"(arg0: boolean): void
public "getButtonId"(): integer
get "entry"(): $IKeyEntry
get "mouseX"(): double
get "mouseY"(): double
get "handled"(): boolean
set "handled"(value: boolean)
get "buttonId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyEntryMouseClickedEvent$$Type = ($KeyEntryMouseClickedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyEntryMouseClickedEvent_ = $KeyEntryMouseClickedEvent$$Type;
}}
