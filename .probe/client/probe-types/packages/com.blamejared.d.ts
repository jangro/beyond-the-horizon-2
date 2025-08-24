declare module "com.blamejared.controlling.mixin.AccessInputConstantsKey" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $AccessInputConstantsKey {

}

export namespace $AccessInputConstantsKey {
function controlling$getNAME_MAP(): $Map<(string), ($InputConstants$Key)>
const probejs$$marker: never
}
export class $AccessInputConstantsKey$$Static implements $AccessInputConstantsKey {


static "controlling$getNAME_MAP"(): $Map<(string), ($InputConstants$Key)>
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

public "getY"(): integer
public "getEntry"(): $IKeyEntry
public "getSlotIndex"(): integer
public "getRowWidth"(): integer
public "getRowLeft"(): integer
public "getX"(): integer
public "getPartialTicks"(): float
public "isHovered"(): boolean
public "getMouseX"(): integer
public "getMouseY"(): integer
public "getGuiGraphics"(): $GuiGraphics
get "y"(): integer
get "entry"(): $IKeyEntry
get "slotIndex"(): integer
get "rowWidth"(): integer
get "rowLeft"(): integer
get "x"(): integer
get "partialTicks"(): float
get "hovered"(): boolean
get "mouseX"(): integer
get "mouseY"(): integer
get "guiGraphics"(): $GuiGraphics
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
import {$IKeyEntry, $IKeyEntry$$Type} from "com.blamejared.controlling.api.entries.IKeyEntry"
import {$List, $List$$Type} from "java.util.List"

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
declare module "com.blamejared.controlling.api.events.IKeyEntryRenderEvent" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$IKeyEntry, $IKeyEntry$$Type} from "com.blamejared.controlling.api.entries.IKeyEntry"

export interface $IKeyEntryRenderEvent {

 "getY"(): integer
 "getEntry"(): $IKeyEntry
 "getSlotIndex"(): integer
 "getRowWidth"(): integer
 "getRowLeft"(): integer
 "getX"(): integer
 "getPartialTicks"(): float
 "isHovered"(): boolean
 "getMouseX"(): integer
 "getMouseY"(): integer
 "getGuiGraphics"(): $GuiGraphics
get "y"(): integer
get "entry"(): $IKeyEntry
get "slotIndex"(): integer
get "rowWidth"(): integer
get "rowLeft"(): integer
get "x"(): integer
get "partialTicks"(): float
get "hovered"(): boolean
get "mouseX"(): integer
get "mouseY"(): integer
get "guiGraphics"(): $GuiGraphics
}

export namespace $IKeyEntryRenderEvent {
const probejs$$marker: never
}
export class $IKeyEntryRenderEvent$$Static implements $IKeyEntryRenderEvent {


 "getY"(): integer
 "getEntry"(): $IKeyEntry
 "getSlotIndex"(): integer
 "getRowWidth"(): integer
 "getRowLeft"(): integer
 "getX"(): integer
 "getPartialTicks"(): float
 "isHovered"(): boolean
 "getMouseX"(): integer
 "getMouseY"(): integer
 "getGuiGraphics"(): $GuiGraphics
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

 "searchables$getResponder"(): $Consumer<(string)>
 "searchables$getFilter"(): $Predicate<(string)>
}

export namespace $AccessEditBox {
const probejs$$marker: never
}
export class $AccessEditBox$$Static implements $AccessEditBox {


 "searchables$getResponder"(): $Consumer<(string)>
 "searchables$getFilter"(): $Predicate<(string)>
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
declare module "com.blamejared.controlling.api.events.IKeyEntryMouseClickedEvent" {
import {$IKeyEntry, $IKeyEntry$$Type} from "com.blamejared.controlling.api.entries.IKeyEntry"

export interface $IKeyEntryMouseClickedEvent {

 "getEntry"(): $IKeyEntry
 "isHandled"(): boolean
 "getMouseX"(): double
 "getMouseY"(): double
 "setHandled"(arg0: boolean): void
 "getButtonId"(): integer
get "entry"(): $IKeyEntry
get "handled"(): boolean
get "mouseX"(): double
get "mouseY"(): double
set "handled"(value: boolean)
get "buttonId"(): integer
}

export namespace $IKeyEntryMouseClickedEvent {
const probejs$$marker: never
}
export class $IKeyEntryMouseClickedEvent$$Static implements $IKeyEntryMouseClickedEvent {


 "getEntry"(): $IKeyEntry
 "isHandled"(): boolean
 "getMouseX"(): double
 "getMouseY"(): double
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
 "isHandled"(): boolean
 "getMouseX"(): double
 "getMouseY"(): double
 "setHandled"(arg0: boolean): void
 "getButtonId"(): integer
get "entry"(): $IKeyEntry
get "handled"(): boolean
get "mouseX"(): double
get "mouseY"(): double
set "handled"(value: boolean)
get "buttonId"(): integer
}

export namespace $IKeyEntryMouseReleasedEvent {
const probejs$$marker: never
}
export class $IKeyEntryMouseReleasedEvent$$Static implements $IKeyEntryMouseReleasedEvent {


 "getEntry"(): $IKeyEntry
 "isHandled"(): boolean
 "getMouseX"(): double
 "getMouseY"(): double
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

 "categoryName"(): $Component
 "getKey"(): $KeyMapping
 "children"(): $List<($GuiEventListener)>
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: boolean, arg9: float): void
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


 "categoryName"(): $Component
 "getKey"(): $KeyMapping
 "children"(): $List<($GuiEventListener)>
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
 "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: boolean, arg9: float): void
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
declare module "com.blamejared.controlling.api.events.KeyEntryMouseReleasedEvent" {
import {$IKeyEntryMouseReleasedEvent, $IKeyEntryMouseReleasedEvent$$Type} from "com.blamejared.controlling.api.events.IKeyEntryMouseReleasedEvent"
import {$IKeyEntry, $IKeyEntry$$Type} from "com.blamejared.controlling.api.entries.IKeyEntry"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"

export class $KeyEntryMouseReleasedEvent extends $Event implements $IKeyEntryMouseReleasedEvent {

constructor(arg0: $IKeyEntry$$Type, arg1: double, arg2: double, arg3: integer)

public "getEntry"(): $IKeyEntry
public "isHandled"(): boolean
public "getMouseX"(): double
public "getMouseY"(): double
public "setHandled"(arg0: boolean): void
public "getButtonId"(): integer
get "entry"(): $IKeyEntry
get "handled"(): boolean
get "mouseX"(): double
get "mouseY"(): double
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
import {$IKeyEntry, $IKeyEntry$$Type} from "com.blamejared.controlling.api.entries.IKeyEntry"
import {$List, $List$$Type} from "java.util.List"
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
public "isHandled"(): boolean
public "getMouseX"(): double
public "getMouseY"(): double
public "setHandled"(arg0: boolean): void
public "getButtonId"(): integer
get "entry"(): $IKeyEntry
get "handled"(): boolean
get "mouseX"(): double
get "mouseY"(): double
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
