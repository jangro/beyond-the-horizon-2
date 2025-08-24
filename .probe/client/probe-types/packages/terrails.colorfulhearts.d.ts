declare module "terrails.colorfulhearts.api.neoforge.event.NeoHeartSingleRenderEvent" {
import {$HeartSingleRenderEvent, $HeartSingleRenderEvent$$Type} from "terrails.colorfulhearts.api.event.HeartSingleRenderEvent"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Heart, $Heart$$Type} from "terrails.colorfulhearts.api.heart.drawing.Heart"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"

export class $NeoHeartSingleRenderEvent extends $Event {

constructor(heart: $Heart$$Type, guiGraphics: $GuiGraphics$$Type, index: integer, x: integer, y: integer, hardcore: boolean, blinking: boolean, blinkingHeart: boolean)

public "getEvent"(): $HeartSingleRenderEvent
public "getY"(): integer
public "getIndex"(): integer
public "getX"(): integer
public "isHardcoreEnabled"(): boolean
public "isBlinkingHeart"(): boolean
public "isBlinking"(): boolean
public "getHeart"(): $Heart
public "getGuiGraphics"(): $GuiGraphics
get "event"(): $HeartSingleRenderEvent
get "y"(): integer
get "index"(): integer
get "x"(): integer
get "hardcoreEnabled"(): boolean
get "blinkingHeart"(): boolean
get "blinking"(): boolean
get "heart"(): $Heart
get "guiGraphics"(): $GuiGraphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NeoHeartSingleRenderEvent$$Type = ($NeoHeartSingleRenderEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NeoHeartSingleRenderEvent_ = $NeoHeartSingleRenderEvent$$Type;
}}
declare module "terrails.colorfulhearts.api.neoforge.event.NeoHeartUpdateEvent" {
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"

export class $NeoHeartUpdateEvent extends $Event {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NeoHeartUpdateEvent$$Type = ($NeoHeartUpdateEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NeoHeartUpdateEvent_ = $NeoHeartUpdateEvent$$Type;
}}
declare module "terrails.colorfulhearts.api.neoforge.event.NeoHeartRenderEvent$Pre" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$HeartRenderEvent$Pre, $HeartRenderEvent$Pre$$Type} from "terrails.colorfulhearts.api.event.HeartRenderEvent$Pre"
import {$NeoHeartRenderEvent, $NeoHeartRenderEvent$$Type} from "terrails.colorfulhearts.api.neoforge.event.NeoHeartRenderEvent"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$OverlayHeart, $OverlayHeart$$Type} from "terrails.colorfulhearts.api.heart.drawing.OverlayHeart"

export class $NeoHeartRenderEvent$Pre extends $NeoHeartRenderEvent<($HeartRenderEvent$Pre)> {

constructor(guiGraphics: $GuiGraphics$$Type, player: $Player$$Type, x: integer, y: integer, maxHealth: integer, currentHealth: integer, displayHealth: integer, absorption: integer, blinking: boolean, hardcore: boolean, overlayHeart: $OverlayHeart$$Type)

public "isCancelled"(): boolean
public "setX"(x: integer): void
public "setY"(y: integer): void
public "setOverlayHeart"(heart: $OverlayHeart$$Type): void
public "setCancelled"(cancel: boolean): void
public "setBlinking"(blinking: boolean): void
public "setHardcore"(hardcore: boolean): void
get "cancelled"(): boolean
set "x"(value: integer)
set "y"(value: integer)
set "overlayHeart"(value: $OverlayHeart$$Type)
set "cancelled"(value: boolean)
set "blinking"(value: boolean)
set "hardcore"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NeoHeartRenderEvent$Pre$$Type = ($NeoHeartRenderEvent$Pre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NeoHeartRenderEvent$Pre_ = $NeoHeartRenderEvent$Pre$$Type;
}}
declare module "terrails.colorfulhearts.api.event.HeartRenderEvent$Post" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$HeartRenderEvent, $HeartRenderEvent$$Type} from "terrails.colorfulhearts.api.event.HeartRenderEvent"
import {$OverlayHeart, $OverlayHeart$$Type} from "terrails.colorfulhearts.api.heart.drawing.OverlayHeart"

export class $HeartRenderEvent$Post extends $HeartRenderEvent {

constructor(guiGraphics: $GuiGraphics$$Type, player: $Player$$Type, x: integer, y: integer, maxHealth: integer, currentHealth: integer, displayHealth: integer, absorption: integer, blinking: boolean, hardcore: boolean, overlayHeart: $OverlayHeart$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeartRenderEvent$Post$$Type = ($HeartRenderEvent$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeartRenderEvent$Post_ = $HeartRenderEvent$Post$$Type;
}}
declare module "terrails.colorfulhearts.api.event.HeartRenderEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$OverlayHeart, $OverlayHeart$$Type} from "terrails.colorfulhearts.api.heart.drawing.OverlayHeart"

export class $HeartRenderEvent {

constructor(guiGraphics: $GuiGraphics$$Type, player: $Player$$Type, x: integer, y: integer, maxHealth: integer, currentHealth: integer, displayHealth: integer, absorption: integer, blinking: boolean, hardcore: boolean, overlayHeart: $OverlayHeart$$Type)

public "getY"(): integer
public "getPlayer"(): $Player
public "isHardcore"(): boolean
public "getMaxHealth"(): integer
public "getHealth"(): integer
public "getX"(): integer
public "getDisplayHealth"(): integer
public "getOverlayHeart"(): $Optional<($OverlayHeart)>
public "isBlinking"(): boolean
public "getAbsorption"(): integer
public "getGuiGraphics"(): $GuiGraphics
get "y"(): integer
get "player"(): $Player
get "hardcore"(): boolean
get "maxHealth"(): integer
get "health"(): integer
get "x"(): integer
get "displayHealth"(): integer
get "overlayHeart"(): $Optional<($OverlayHeart)>
get "blinking"(): boolean
get "absorption"(): integer
get "guiGraphics"(): $GuiGraphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeartRenderEvent$$Type = ($HeartRenderEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeartRenderEvent_ = $HeartRenderEvent$$Type;
}}
declare module "terrails.colorfulhearts.api.neoforge.event.NeoHeartRenderEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$HeartRenderEvent, $HeartRenderEvent$$Type} from "terrails.colorfulhearts.api.event.HeartRenderEvent"
import {$OverlayHeart, $OverlayHeart$$Type} from "terrails.colorfulhearts.api.heart.drawing.OverlayHeart"

export class $NeoHeartRenderEvent<E extends $HeartRenderEvent> extends $Event {

constructor(event: E)

public "getEvent"(): E
public "getY"(): integer
public "getPlayer"(): $Player
public "isHardcore"(): boolean
public "getMaxHealth"(): integer
public "getHealth"(): integer
public "getX"(): integer
public "getDisplayHealth"(): integer
public "getOverlayHeart"(): $Optional<($OverlayHeart)>
public "isBlinking"(): boolean
public "getAbsorption"(): integer
public "getGuiGraphics"(): $GuiGraphics
get "event"(): E
get "y"(): integer
get "player"(): $Player
get "hardcore"(): boolean
get "maxHealth"(): integer
get "health"(): integer
get "x"(): integer
get "displayHealth"(): integer
get "overlayHeart"(): $Optional<($OverlayHeart)>
get "blinking"(): boolean
get "absorption"(): integer
get "guiGraphics"(): $GuiGraphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NeoHeartRenderEvent$$Type<E> = ($NeoHeartRenderEvent<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NeoHeartRenderEvent_<E> = $NeoHeartRenderEvent$$Type<(E)>;
}}
declare module "terrails.colorfulhearts.api.heart.drawing.HeartDrawing" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export class $HeartDrawing {

constructor()

public "toString"(): string
public "getId"(): $ResourceLocation
public "draw"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: boolean, arg4: boolean, arg5: boolean): void
public static "colorBlend"(drawing: $HeartDrawing$$Type, id: $ResourceLocation$$Type, r: float, g: float, b: float, a: float, sourceFactor: integer, destinationFactor: integer): $HeartDrawing
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeartDrawing$$Type = ($HeartDrawing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeartDrawing_ = $HeartDrawing$$Type;
}}
declare module "terrails.colorfulhearts.api.neoforge.event.NeoHeartRegistryEvent" {
import {$Event, $Event$$Type} from "net.neoforged.bus.api.Event"
import {$HeartRegistry, $HeartRegistry$$Type} from "terrails.colorfulhearts.api.event.HeartRegistry"
import {$OverlayHeart, $OverlayHeart$$Type} from "terrails.colorfulhearts.api.heart.drawing.OverlayHeart"
import {$IModBusEvent, $IModBusEvent$$Type} from "net.neoforged.fml.event.IModBusEvent"

export class $NeoHeartRegistryEvent extends $Event implements $IModBusEvent {

constructor(registry: $HeartRegistry$$Type)

public "registerOverlayHeart"<T extends $OverlayHeart>(heart: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NeoHeartRegistryEvent$$Type = ($NeoHeartRegistryEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NeoHeartRegistryEvent_ = $NeoHeartRegistryEvent$$Type;
}}
declare module "terrails.colorfulhearts.api.heart.drawing.Heart" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$HeartDrawing, $HeartDrawing$$Type} from "terrails.colorfulhearts.api.heart.drawing.HeartDrawing"

export class $Heart {
static readonly "CONTAINER_HALF": $Heart
static readonly "CONTAINER_NONE": $Heart
static readonly "CONTAINER_FULL": $Heart


public "isContainer"(): boolean
public "equals"(o: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "full"(drawing: $HeartDrawing$$Type, background: $Heart$$Type): $Heart
public static "full"(drawing: $HeartDrawing$$Type): $Heart
public static "full"(drawing: $HeartDrawing$$Type, half: boolean, background: $Heart$$Type): $Heart
public static "half"(drawing: $HeartDrawing$$Type): $Heart
public "draw"(guiGraphics: $GuiGraphics$$Type, x: integer, y: integer, hardcore: boolean, highlightContainer: boolean, highlightHeart: boolean): void
get "container"(): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Heart$$Type = ($Heart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Heart_ = $Heart$$Type;
}}
declare module "terrails.colorfulhearts.api.neoforge.event.NeoHeartRenderEvent$Post" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$NeoHeartRenderEvent, $NeoHeartRenderEvent$$Type} from "terrails.colorfulhearts.api.neoforge.event.NeoHeartRenderEvent"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$HeartRenderEvent$Post, $HeartRenderEvent$Post$$Type} from "terrails.colorfulhearts.api.event.HeartRenderEvent$Post"
import {$OverlayHeart, $OverlayHeart$$Type} from "terrails.colorfulhearts.api.heart.drawing.OverlayHeart"

export class $NeoHeartRenderEvent$Post extends $NeoHeartRenderEvent<($HeartRenderEvent$Post)> {

constructor(guiGraphics: $GuiGraphics$$Type, player: $Player$$Type, x: integer, y: integer, maxHealth: integer, currentHealth: integer, displayHealth: integer, absorption: integer, blinking: boolean, hardcore: boolean, overlayHeart: $OverlayHeart$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NeoHeartRenderEvent$Post$$Type = ($NeoHeartRenderEvent$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NeoHeartRenderEvent$Post_ = $NeoHeartRenderEvent$Post$$Type;
}}
declare module "terrails.colorfulhearts.api.heart.drawing.OverlayHeart$Builder" {
import {$HeartDrawing, $HeartDrawing$$Type} from "terrails.colorfulhearts.api.heart.drawing.HeartDrawing"
import {$OverlayHeart, $OverlayHeart$$Type} from "terrails.colorfulhearts.api.heart.drawing.OverlayHeart"

export class $OverlayHeart$Builder {


public "finish"(): $OverlayHeart
public "transparent"(): $OverlayHeart$Builder
public "addHealth"(drawing: $HeartDrawing$$Type, r: float, g: float, b: float): $OverlayHeart$Builder
public "addHealth"(drawing: $HeartDrawing$$Type, r: float, g: float, b: float, alpha: float, sourceFactor: integer, destinationFactor: integer): $OverlayHeart$Builder
public "addHealth"(drawing: $HeartDrawing$$Type): $OverlayHeart$Builder
public "addHealth"(first: $HeartDrawing$$Type, second: $HeartDrawing$$Type): $OverlayHeart$Builder
public "addAbsorption"(drawing: $HeartDrawing$$Type): $OverlayHeart$Builder
public "addAbsorption"(drawing: $HeartDrawing$$Type, r: float, g: float, b: float, alpha: float, sourceFactor: integer, destinationFactor: integer): $OverlayHeart$Builder
public "addAbsorption"(first: $HeartDrawing$$Type, second: $HeartDrawing$$Type): $OverlayHeart$Builder
public "addAbsorption"(drawing: $HeartDrawing$$Type, r: float, g: float, b: float): $OverlayHeart$Builder
public "blankAbsorption"(): $OverlayHeart$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverlayHeart$Builder$$Type = ($OverlayHeart$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OverlayHeart$Builder_ = $OverlayHeart$Builder$$Type;
}}
declare module "terrails.colorfulhearts.api.event.HeartSingleRenderEvent" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Heart, $Heart$$Type} from "terrails.colorfulhearts.api.heart.drawing.Heart"

export class $HeartSingleRenderEvent {

constructor(heart: $Heart$$Type, guiGraphics: $GuiGraphics$$Type, index: integer, x: integer, y: integer, hardcore: boolean, blinking: boolean, blinkingHeart: boolean)

public "getY"(): integer
public "getIndex"(): integer
public "getX"(): integer
public "isHardcoreEnabled"(): boolean
public "isBlinkingHeart"(): boolean
public "isBlinking"(): boolean
public "getHeart"(): $Heart
public "getGuiGraphics"(): $GuiGraphics
get "y"(): integer
get "index"(): integer
get "x"(): integer
get "hardcoreEnabled"(): boolean
get "blinkingHeart"(): boolean
get "blinking"(): boolean
get "heart"(): $Heart
get "guiGraphics"(): $GuiGraphics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeartSingleRenderEvent$$Type = ($HeartSingleRenderEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeartSingleRenderEvent_ = $HeartSingleRenderEvent$$Type;
}}
declare module "terrails.colorfulhearts.api.heart.drawing.OverlayHeart" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$HeartDrawing, $HeartDrawing$$Type} from "terrails.colorfulhearts.api.heart.drawing.HeartDrawing"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$OverlayHeart$Builder, $OverlayHeart$Builder$$Type} from "terrails.colorfulhearts.api.heart.drawing.OverlayHeart$Builder"

export class $OverlayHeart {


public "toString"(): string
public "getId"(): $ResourceLocation
public "isOpaque"(): boolean
public static "build"(id: $ResourceLocation$$Type, condition: $Predicate$$Type<($Player)>): $OverlayHeart$Builder
public "shouldDraw"(player: $Player$$Type): boolean
public "getHealthDrawings"(): $List<($HeartDrawing)>
public "getAbsorptionDrawings"(): $List<($HeartDrawing)>
get "id"(): $ResourceLocation
get "opaque"(): boolean
get "healthDrawings"(): $List<($HeartDrawing)>
get "absorptionDrawings"(): $List<($HeartDrawing)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverlayHeart$$Type = ($OverlayHeart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OverlayHeart_ = $OverlayHeart$$Type;
}}
declare module "terrails.colorfulhearts.api.event.HeartRenderEvent$Pre" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$HeartRenderEvent, $HeartRenderEvent$$Type} from "terrails.colorfulhearts.api.event.HeartRenderEvent"
import {$OverlayHeart, $OverlayHeart$$Type} from "terrails.colorfulhearts.api.heart.drawing.OverlayHeart"

export class $HeartRenderEvent$Pre extends $HeartRenderEvent {

constructor(guiGraphics: $GuiGraphics$$Type, player: $Player$$Type, x: integer, y: integer, maxHealth: integer, currentHealth: integer, displayHealth: integer, absorption: integer, blinking: boolean, hardcore: boolean, overlayHeart: $OverlayHeart$$Type)

public "isCancelled"(): boolean
public "setX"(x: integer): void
public "setY"(y: integer): void
public "setOverlayHeart"(heart: $OverlayHeart$$Type): void
public "setCancelled"(cancel: boolean): void
public "setBlinking"(blinking: boolean): void
public "setHardcore"(hardcore: boolean): void
get "cancelled"(): boolean
set "x"(value: integer)
set "y"(value: integer)
set "overlayHeart"(value: $OverlayHeart$$Type)
set "cancelled"(value: boolean)
set "blinking"(value: boolean)
set "hardcore"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeartRenderEvent$Pre$$Type = ($HeartRenderEvent$Pre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeartRenderEvent$Pre_ = $HeartRenderEvent$Pre$$Type;
}}
declare module "terrails.colorfulhearts.api.event.HeartRegistry" {
import {$OverlayHeart, $OverlayHeart$$Type} from "terrails.colorfulhearts.api.heart.drawing.OverlayHeart"

export class $HeartRegistry {

constructor()

public "registerOverlayHeart"<T extends $OverlayHeart>(heart: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeartRegistry$$Type = ($HeartRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeartRegistry_ = $HeartRegistry$$Type;
}}
