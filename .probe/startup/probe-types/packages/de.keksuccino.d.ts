declare module "de.keksuccino.konkrete.mixin.mixins.client.IMixinEditBox" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinEditBox {

 "getIsEditableKonkrete"(): boolean
 "getMaxLengthKonkrete"(): integer
 "onValueChangeKonkrete"(arg0: StringJS): void
 "getHightlightPosKonkrete"(): integer
get "isEditableKonkrete"(): boolean
get "maxLengthKonkrete"(): integer
get "hightlightPosKonkrete"(): integer
}

export namespace $IMixinEditBox {
const probejs$$marker: never
}
export class $IMixinEditBox$$Static implements $IMixinEditBox {


 "getIsEditableKonkrete"(): boolean
 "getMaxLengthKonkrete"(): integer
 "onValueChangeKonkrete"(arg0: StringJS): void
 "getHightlightPosKonkrete"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinEditBox$$Type = ($IMixinEditBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinEditBox_ = $IMixinEditBox$$Type;
}}
declare module "de.keksuccino.fancymenu.util.resource.RenderableResource" {
import {$Resource, $Resource$$Type} from "de.keksuccino.fancymenu.util.resource.Resource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$AspectRatio, $AspectRatio$$Type} from "de.keksuccino.fancymenu.util.rendering.AspectRatio"

export interface $RenderableResource extends $Resource {

 "getWidth"(): integer
 "getHeight"(): integer
 "reset"(): void
 "getAspectRatio"(): $AspectRatio
 "getResourceLocation"(): $ResourceLocation
 "open"(): $InputStream
 "isReady"(): boolean
 "waitForReady"(arg0: long): void
 "isClosed"(): boolean
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "close"(): void
get "width"(): integer
get "height"(): integer
get "aspectRatio"(): $AspectRatio
get "resourceLocation"(): $ResourceLocation
get "ready"(): boolean
get "closed"(): boolean
get "loadingCompleted"(): boolean
get "loadingFailed"(): boolean
}

export namespace $RenderableResource {
const MISSING_TEXTURE_LOCATION: $ResourceLocation
const FULLY_TRANSPARENT_TEXTURE: $ResourceLocation
const probejs$$marker: never
}
export class $RenderableResource$$Static implements $RenderableResource {
static readonly "MISSING_TEXTURE_LOCATION": $ResourceLocation
static readonly "FULLY_TRANSPARENT_TEXTURE": $ResourceLocation


 "getWidth"(): integer
 "getHeight"(): integer
 "reset"(): void
 "getAspectRatio"(): $AspectRatio
 "getResourceLocation"(): $ResourceLocation
 "open"(): $InputStream
 "isReady"(): boolean
 "waitForReady"(arg0: long): void
 "isClosed"(): boolean
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderableResource$$Type = ($RenderableResource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderableResource_ = $RenderableResource$$Type;
}}
declare module "de.keksuccino.fancymenu.util.resource.resources.audio.IAudio" {
import {$SoundSource, $SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$PlayableResourceWithAudio, $PlayableResourceWithAudio$$Type} from "de.keksuccino.fancymenu.util.resource.resources.audio.PlayableResourceWithAudio"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"

export interface $IAudio extends $PlayableResourceWithAudio {

 "getDuration"(): float
 "play"(): void
 "getPlayTime"(): float
 "setSoundChannel"(arg0: $SoundSource$$Type): void
 "getSoundChannel"(): $SoundSource
 "getVolume"(): float
 "setVolume"(arg0: float): void
 "stop"(): void
 "pause"(): void
 "isPaused"(): boolean
 "isPlaying"(): boolean
 "open"(): $InputStream
 "isReady"(): boolean
 "waitForReady"(arg0: long): void
 "isClosed"(): boolean
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "close"(): void
get "duration"(): float
get "playTime"(): float
set "soundChannel"(value: $SoundSource$$Type)
get "soundChannel"(): $SoundSource
get "volume"(): float
set "volume"(value: float)
get "paused"(): boolean
get "playing"(): boolean
get "ready"(): boolean
get "closed"(): boolean
get "loadingCompleted"(): boolean
get "loadingFailed"(): boolean
}

export namespace $IAudio {
const probejs$$marker: never
}
export class $IAudio$$Static implements $IAudio {


 "getDuration"(): float
 "play"(): void
 "getPlayTime"(): float
 "setSoundChannel"(arg0: $SoundSource$$Type): void
 "getSoundChannel"(): $SoundSource
 "getVolume"(): float
 "setVolume"(arg0: float): void
 "stop"(): void
 "pause"(): void
 "isPaused"(): boolean
 "isPlaying"(): boolean
 "open"(): $InputStream
 "isReady"(): boolean
 "waitForReady"(arg0: long): void
 "isClosed"(): boolean
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAudio$$Type = ($IAudio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAudio_ = $IAudio$$Type;
}}
declare module "de.keksuccino.konkrete.mixin.mixins.client.IMixinDynamicTexture" {
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"

export interface $IMixinDynamicTexture {

 "getPixelsKonkrete"(): $NativeImage
 "setPixelsKonkrete"(arg0: $NativeImage$$Type): void
get "pixelsKonkrete"(): $NativeImage
set "pixelsKonkrete"(value: $NativeImage$$Type)
}

export namespace $IMixinDynamicTexture {
const probejs$$marker: never
}
export class $IMixinDynamicTexture$$Static implements $IMixinDynamicTexture {


 "getPixelsKonkrete"(): $NativeImage
 "setPixelsKonkrete"(arg0: $NativeImage$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinDynamicTexture$$Type = ($IMixinDynamicTexture);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinDynamicTexture_ = $IMixinDynamicTexture$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinMinecraft" {
import {$ResourceLoadStateTracker, $ResourceLoadStateTracker$$Type} from "net.minecraft.client.ResourceLoadStateTracker"

export interface $IMixinMinecraft {

 "openChatScreenFancyMenu"(arg0: StringJS): void
 "getReloadStateTrackerFancyMenu"(): $ResourceLoadStateTracker
get "reloadStateTrackerFancyMenu"(): $ResourceLoadStateTracker
}

export namespace $IMixinMinecraft {
const probejs$$marker: never
}
export class $IMixinMinecraft$$Static implements $IMixinMinecraft {


 "openChatScreenFancyMenu"(arg0: StringJS): void
 "getReloadStateTrackerFancyMenu"(): $ResourceLoadStateTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinMinecraft$$Type = ($IMixinMinecraft);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinMinecraft_ = $IMixinMinecraft$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinMusicManager" {
import {$SoundInstance, $SoundInstance$$Type} from "net.minecraft.client.resources.sounds.SoundInstance"

export interface $IMixinMusicManager {

 "getCurrentMusic_FancyMenu"(): $SoundInstance

(): $SoundInstance$$Type
get "currentMusic_FancyMenu"(): $SoundInstance
}

export namespace $IMixinMusicManager {
const probejs$$marker: never
}
export class $IMixinMusicManager$$Static implements $IMixinMusicManager {


 "getCurrentMusic_FancyMenu"(): $SoundInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinMusicManager$$Type = (() => $SoundInstance$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinMusicManager_ = $IMixinMusicManager$$Type;
}}
declare module "de.keksuccino.drippyloadingscreen.mixin.mixins.common.client.IMixinMinecraft" {
import {$FontManager, $FontManager$$Type} from "net.minecraft.client.gui.font.FontManager"

export interface $IMixinMinecraft {

 "getFontManagerDrippy"(): $FontManager

(): $FontManager$$Type
get "fontManagerDrippy"(): $FontManager
}

export namespace $IMixinMinecraft {
const probejs$$marker: never
}
export class $IMixinMinecraft$$Static implements $IMixinMinecraft {


 "getFontManagerDrippy"(): $FontManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinMinecraft$$Type = (() => $FontManager$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinMinecraft_ = $IMixinMinecraft$$Type;
}}
declare module "de.keksuccino.konkrete.mixin.mixins.client.IMixinClientLanguage" {
import {$Map, $Map$$Type} from "java.util.Map"

export interface $IMixinClientLanguage {

 "getStorageKonkrete"(): $Map<(StringJS), (StringJS)>

(): $Map$$Type<(StringJS), (StringJS)>
get "storageKonkrete"(): $Map<(StringJS), (StringJS)>
}

export namespace $IMixinClientLanguage {
const probejs$$marker: never
}
export class $IMixinClientLanguage$$Static implements $IMixinClientLanguage {


 "getStorageKonkrete"(): $Map<(StringJS), (StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinClientLanguage$$Type = (() => $Map$$Type<(StringJS), (StringJS)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinClientLanguage_ = $IMixinClientLanguage$$Type;
}}
declare module "de.keksuccino.fancymenu.util.rendering.ui.widget.CustomizableWidget$CustomBackgroundResetBehavior" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $CustomizableWidget$CustomBackgroundResetBehavior extends $Enum<($CustomizableWidget$CustomBackgroundResetBehavior)> {
static readonly "RESET_ON_UNHOVER": $CustomizableWidget$CustomBackgroundResetBehavior
static readonly "RESET_NEVER": $CustomizableWidget$CustomBackgroundResetBehavior
static readonly "RESET_ON_HOVER": $CustomizableWidget$CustomBackgroundResetBehavior
static readonly "RESET_ON_HOVER_AND_UNHOVER": $CustomizableWidget$CustomBackgroundResetBehavior


public static "values"(): ($CustomizableWidget$CustomBackgroundResetBehavior)[]
public static "valueOf"(arg0: StringJS): $CustomizableWidget$CustomBackgroundResetBehavior
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomizableWidget$CustomBackgroundResetBehavior$$Type = (("reset_never") | ("reset_on_hover") | ("reset_on_unhover") | ("reset_on_hover_and_unhover"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomizableWidget$CustomBackgroundResetBehavior_ = $CustomizableWidget$CustomBackgroundResetBehavior$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinAbstractWidget" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IMixinAbstractWidget {

 "setHeightFancyMenu"(arg0: integer): void
 "getAlphaFancyMenu"(): float
 "setMessageFieldFancyMenu"(arg0: $Component$$Type): void
set "heightFancyMenu"(value: integer)
get "alphaFancyMenu"(): float
set "messageFieldFancyMenu"(value: $Component$$Type)
}

export namespace $IMixinAbstractWidget {
const probejs$$marker: never
}
export class $IMixinAbstractWidget$$Static implements $IMixinAbstractWidget {


 "setHeightFancyMenu"(arg0: integer): void
 "getAlphaFancyMenu"(): float
 "setMessageFieldFancyMenu"(arg0: $Component$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinAbstractWidget$$Type = ($IMixinAbstractWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinAbstractWidget_ = $IMixinAbstractWidget$$Type;
}}
declare module "de.keksuccino.melody.mixin.mixins.common.client.IMixinSoundEngine" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinSoundEngine {

 "getLoadedMelody"(): boolean

(): boolean
get "loadedMelody"(): boolean
}

export namespace $IMixinSoundEngine {
const probejs$$marker: never
}
export class $IMixinSoundEngine$$Static implements $IMixinSoundEngine {


 "getLoadedMelody"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinSoundEngine$$Type = (() => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinSoundEngine_ = $IMixinSoundEngine$$Type;
}}
declare module "de.keksuccino.konkrete.mixin.mixins.client.IMixinLocalPlayer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinLocalPlayer {

 "getPermissionLevelKonkrete"(): integer

(): integer
get "permissionLevelKonkrete"(): integer
}

export namespace $IMixinLocalPlayer {
const probejs$$marker: never
}
export class $IMixinLocalPlayer$$Static implements $IMixinLocalPlayer {


 "getPermissionLevelKonkrete"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinLocalPlayer$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinLocalPlayer_ = $IMixinLocalPlayer$$Type;
}}
declare module "de.keksuccino.konkrete.mixin.mixins.client.IMixinMouseHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinMouseHandler {

 "getActiveButtonKonkrete"(): integer

(): integer
get "activeButtonKonkrete"(): integer
}

export namespace $IMixinMouseHandler {
const probejs$$marker: never
}
export class $IMixinMouseHandler$$Static implements $IMixinMouseHandler {


 "getActiveButtonKonkrete"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinMouseHandler$$Type = (() => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinMouseHandler_ = $IMixinMouseHandler$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinReceivingLevelScreen" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinReceivingLevelScreen {

 "setCreatedAtFancyMenu"(arg0: long): void

(arg0: long): void
set "createdAtFancyMenu"(value: long)
}

export namespace $IMixinReceivingLevelScreen {
const probejs$$marker: never
}
export class $IMixinReceivingLevelScreen$$Static implements $IMixinReceivingLevelScreen {


 "setCreatedAtFancyMenu"(arg0: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinReceivingLevelScreen$$Type = ((arg0: long) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinReceivingLevelScreen_ = $IMixinReceivingLevelScreen$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinScreen" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$List, $List$$Type} from "java.util.List"
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"

export interface $IMixinScreen {

 "getChildrenFancyMenu"(): $List<($GuiEventListener)>
 "getRenderablesFancyMenu"(): $List<($Renderable)>
 "getNarratablesFancyMenu"(): $List<($NarratableEntry)>
 "invokeRemoveWidgetFancyMenu"(arg0: $GuiEventListener$$Type): void
 "get_initialized_FancyMenu"(): boolean
get "childrenFancyMenu"(): $List<($GuiEventListener)>
get "renderablesFancyMenu"(): $List<($Renderable)>
get "narratablesFancyMenu"(): $List<($NarratableEntry)>
get "_initialized_FancyMenu"(): boolean
}

export namespace $IMixinScreen {
const probejs$$marker: never
}
export class $IMixinScreen$$Static implements $IMixinScreen {


 "getChildrenFancyMenu"(): $List<($GuiEventListener)>
 "getRenderablesFancyMenu"(): $List<($Renderable)>
 "getNarratablesFancyMenu"(): $List<($NarratableEntry)>
 "invokeRemoveWidgetFancyMenu"(arg0: $GuiEventListener$$Type): void
 "get_initialized_FancyMenu"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinScreen$$Type = ($IMixinScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinScreen_ = $IMixinScreen$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinEditBox" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$FormattedCharSequence, $FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IMixinEditBox {

 "getIsEditableFancyMenu"(): boolean
 "getDisplayPosFancyMenu"(): integer
 "setDisplayPosFancyMenu"(arg0: integer): void
 "getBorderedFancyMenu"(): boolean
 "getMaxLengthFancyMenu"(): integer
 "getFormatterFancyMenu"(): $BiFunction<(StringJS), (integer), ($FormattedCharSequence)>
 "getTextColorFancyMenu"(): integer
 "getHintFancyMenu"(): $Component
 "getSuggestionFancyMenu"(): StringJS
 "getTextColorUneditableFancyMenu"(): integer
 "getHighlightPosFancyMenu"(): integer
 "invokeDeleteTextFancyMenu"(arg0: integer): void
 "getFocusedTimeFancyMenu"(): long
 "invokeRenderHighlightFancyMenu"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
get "isEditableFancyMenu"(): boolean
get "displayPosFancyMenu"(): integer
set "displayPosFancyMenu"(value: integer)
get "borderedFancyMenu"(): boolean
get "maxLengthFancyMenu"(): integer
get "formatterFancyMenu"(): $BiFunction<(StringJS), (integer), ($FormattedCharSequence)>
get "textColorFancyMenu"(): integer
get "hintFancyMenu"(): $Component
get "suggestionFancyMenu"(): StringJS
get "textColorUneditableFancyMenu"(): integer
get "highlightPosFancyMenu"(): integer
get "focusedTimeFancyMenu"(): long
}

export namespace $IMixinEditBox {
const probejs$$marker: never
}
export class $IMixinEditBox$$Static implements $IMixinEditBox {


 "getIsEditableFancyMenu"(): boolean
 "getDisplayPosFancyMenu"(): integer
 "setDisplayPosFancyMenu"(arg0: integer): void
 "getBorderedFancyMenu"(): boolean
 "getMaxLengthFancyMenu"(): integer
 "getFormatterFancyMenu"(): $BiFunction<(StringJS), (integer), ($FormattedCharSequence)>
 "getTextColorFancyMenu"(): integer
 "getHintFancyMenu"(): $Component
 "getSuggestionFancyMenu"(): StringJS
 "getTextColorUneditableFancyMenu"(): integer
 "getHighlightPosFancyMenu"(): integer
 "invokeDeleteTextFancyMenu"(arg0: integer): void
 "getFocusedTimeFancyMenu"(): long
 "invokeRenderHighlightFancyMenu"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinEditBox$$Type = ($IMixinEditBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinEditBox_ = $IMixinEditBox$$Type;
}}
declare module "de.keksuccino.fancymenu.util.resource.resources.audio.PlayableResourceWithAudio" {
import {$PlayableResource, $PlayableResource$$Type} from "de.keksuccino.fancymenu.util.resource.PlayableResource"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"

export interface $PlayableResourceWithAudio extends $PlayableResource {

 "getVolume"(): float
 "setVolume"(arg0: float): void
 "stop"(): void
 "pause"(): void
 "play"(): void
 "isPaused"(): boolean
 "isPlaying"(): boolean
 "open"(): $InputStream
 "isReady"(): boolean
 "waitForReady"(arg0: long): void
 "isClosed"(): boolean
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "close"(): void
get "volume"(): float
set "volume"(value: float)
get "paused"(): boolean
get "playing"(): boolean
get "ready"(): boolean
get "closed"(): boolean
get "loadingCompleted"(): boolean
get "loadingFailed"(): boolean
}

export namespace $PlayableResourceWithAudio {
const probejs$$marker: never
}
export class $PlayableResourceWithAudio$$Static implements $PlayableResourceWithAudio {


 "getVolume"(): float
 "setVolume"(arg0: float): void
 "stop"(): void
 "pause"(): void
 "play"(): void
 "isPaused"(): boolean
 "isPlaying"(): boolean
 "open"(): $InputStream
 "isReady"(): boolean
 "waitForReady"(arg0: long): void
 "isClosed"(): boolean
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayableResourceWithAudio$$Type = ($PlayableResourceWithAudio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayableResourceWithAudio_ = $PlayableResourceWithAudio$$Type;
}}
declare module "de.keksuccino.fancymenu.util.rendering.ui.widget.UniqueWidget" {
import {$AbstractWidget, $AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"

export interface $UniqueWidget {

 "setWidgetIdentifierFancyMenu"(arg0: StringJS): $AbstractWidget
 "getWidgetIdentifierFancyMenu"(): StringJS
set "widgetIdentifierFancyMenu"(value: StringJS)
get "widgetIdentifierFancyMenu"(): StringJS
}

export namespace $UniqueWidget {
const probejs$$marker: never
}
export class $UniqueWidget$$Static implements $UniqueWidget {


 "setWidgetIdentifierFancyMenu"(arg0: StringJS): $AbstractWidget
 "getWidgetIdentifierFancyMenu"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniqueWidget$$Type = ($UniqueWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniqueWidget_ = $UniqueWidget$$Type;
}}
declare module "de.keksuccino.konkrete.mixin.mixins.client.IMixinClientPacketListener" {
import {$CommandDispatcher, $CommandDispatcher$$Type} from "com.mojang.brigadier.CommandDispatcher"
import {$SharedSuggestionProvider, $SharedSuggestionProvider$$Type} from "net.minecraft.commands.SharedSuggestionProvider"

export interface $IMixinClientPacketListener {

 "getCommandsKonkrete"(): $CommandDispatcher<($SharedSuggestionProvider)>
 "setCommandsKonkrete"(arg0: $CommandDispatcher$$Type<($SharedSuggestionProvider$$Type)>): void
get "commandsKonkrete"(): $CommandDispatcher<($SharedSuggestionProvider)>
set "commandsKonkrete"(value: $CommandDispatcher$$Type<($SharedSuggestionProvider$$Type)>)
}

export namespace $IMixinClientPacketListener {
const probejs$$marker: never
}
export class $IMixinClientPacketListener$$Static implements $IMixinClientPacketListener {


 "getCommandsKonkrete"(): $CommandDispatcher<($SharedSuggestionProvider)>
 "setCommandsKonkrete"(arg0: $CommandDispatcher$$Type<($SharedSuggestionProvider$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinClientPacketListener$$Type = ($IMixinClientPacketListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinClientPacketListener_ = $IMixinClientPacketListener$$Type;
}}
declare module "de.keksuccino.melody.mixin.mixins.common.client.IMixinSoundManager" {
import {$SoundEngine, $SoundEngine$$Type} from "net.minecraft.client.sounds.SoundEngine"

export interface $IMixinSoundManager {

 "getSoundEngineMelody"(): $SoundEngine

(): $SoundEngine$$Type
get "soundEngineMelody"(): $SoundEngine
}

export namespace $IMixinSoundManager {
const probejs$$marker: never
}
export class $IMixinSoundManager$$Static implements $IMixinSoundManager {


 "getSoundEngineMelody"(): $SoundEngine
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinSoundManager$$Type = (() => $SoundEngine$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinSoundManager_ = $IMixinSoundManager$$Type;
}}
declare module "de.keksuccino.konkrete.mixin.mixins.client.IMixinAbstractWidget" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinAbstractWidget {

 "setHeightKonkrete"(arg0: integer): void

(arg0: integer): void
set "heightKonkrete"(value: integer)
}

export namespace $IMixinAbstractWidget {
const probejs$$marker: never
}
export class $IMixinAbstractWidget$$Static implements $IMixinAbstractWidget {


 "setHeightKonkrete"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinAbstractWidget$$Type = ((arg0: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinAbstractWidget_ = $IMixinAbstractWidget$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinBossHealthOverlay" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$LerpingBossEvent, $LerpingBossEvent$$Type} from "net.minecraft.client.gui.components.LerpingBossEvent"

export interface $IMixinBossHealthOverlay {

 "get_events_FancyMenu"(): $Map<($UUID), ($LerpingBossEvent)>

(): $Map$$Type<($UUID$$Type), ($LerpingBossEvent$$Type)>
get "_events_FancyMenu"(): $Map<($UUID), ($LerpingBossEvent)>
}

export namespace $IMixinBossHealthOverlay {
const probejs$$marker: never
}
export class $IMixinBossHealthOverlay$$Static implements $IMixinBossHealthOverlay {


 "get_events_FancyMenu"(): $Map<($UUID), ($LerpingBossEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinBossHealthOverlay$$Type = (() => $Map$$Type<($UUID$$Type), ($LerpingBossEvent$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinBossHealthOverlay_ = $IMixinBossHealthOverlay$$Type;
}}
declare module "de.keksuccino.fancymenu.util.rendering.AspectRatio" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AspectRatio {

constructor(arg0: integer, arg1: integer)

public "getAspectRatioSizeByMinimumSize"(arg0: integer, arg1: integer): (integer)[]
public "getInputWidth"(): integer
public "getInputHeight"(): integer
public "getAspectRatioHeight"(arg0: integer): integer
public "getAspectRatioWidth"(arg0: integer): integer
public "getAspectRatioSizeByMaximumSize"(arg0: integer, arg1: integer): (integer)[]
get "inputWidth"(): integer
get "inputHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AspectRatio$$Type = ($AspectRatio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AspectRatio_ = $AspectRatio$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinSplashRenderer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinSplashRenderer {

 "getSplashFancyMenu"(): StringJS

(): StringJS
get "splashFancyMenu"(): StringJS
}

export namespace $IMixinSplashRenderer {
const probejs$$marker: never
}
export class $IMixinSplashRenderer$$Static implements $IMixinSplashRenderer {


 "getSplashFancyMenu"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinSplashRenderer$$Type = (() => StringJS);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinSplashRenderer_ = $IMixinSplashRenderer$$Type;
}}
declare module "de.keksuccino.fancymenu.util.rendering.ui.screen.CustomizableScreen" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$List, $List$$Type} from "java.util.List"

export interface $CustomizableScreen {

 "removeOnInitChildrenFancyMenu"(): $List<($GuiEventListener)>

(): $List$$Type<($GuiEventListener$$Type)>
}

export namespace $CustomizableScreen {
const probejs$$marker: never
}
export class $CustomizableScreen$$Static implements $CustomizableScreen {


 "removeOnInitChildrenFancyMenu"(): $List<($GuiEventListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomizableScreen$$Type = (() => $List$$Type<($GuiEventListener$$Type)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomizableScreen_ = $CustomizableScreen$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinClientLanguage" {
import {$Map, $Map$$Type} from "java.util.Map"

export interface $IMixinClientLanguage {

 "getStorageFancyMenu"(): $Map<(StringJS), (StringJS)>

(): $Map$$Type<(StringJS), (StringJS)>
get "storageFancyMenu"(): $Map<(StringJS), (StringJS)>
}

export namespace $IMixinClientLanguage {
const probejs$$marker: never
}
export class $IMixinClientLanguage$$Static implements $IMixinClientLanguage {


 "getStorageFancyMenu"(): $Map<(StringJS), (StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinClientLanguage$$Type = (() => $Map$$Type<(StringJS), (StringJS)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinClientLanguage_ = $IMixinClientLanguage$$Type;
}}
declare module "de.keksuccino.fancymenu.util.rendering.ui.widget.CustomizableWidget" {
import {$CustomizableWidget$CustomBackgroundResetBehavior, $CustomizableWidget$CustomBackgroundResetBehavior$$Type} from "de.keksuccino.fancymenu.util.rendering.ui.widget.CustomizableWidget$CustomBackgroundResetBehavior"
import {$RenderableResource, $RenderableResource$$Type} from "de.keksuccino.fancymenu.util.resource.RenderableResource"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$List, $List$$Type} from "java.util.List"
import {$AbstractWidget, $AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IAudio, $IAudio$$Type} from "de.keksuccino.fancymenu.util.resource.resources.audio.IAudio"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $CustomizableWidget {

 "setHoverSoundFancyMenu"(arg0: $IAudio$$Type): void
 "setHiddenFancyMenu"(arg0: boolean): void
 "setHoverLabelFancyMenu"(arg0: $Component$$Type): void
 "setCustomXFancyMenu"(arg0: integer): void
 "setCustomYFancyMenu"(arg0: integer): void
 "getHoverLabelFancyMenu"(): $Component
 "getHoverSoundFancyMenu"(): $IAudio
 "isHiddenFancyMenu"(): boolean
 "getCustomXFancyMenu"(): integer
 "getCustomYFancyMenu"(): integer
 "resetWidgetCustomizationsFancyMenu"(): void
 "tickHoverStateListenersFancyMenu"(arg0: boolean): void
 "tickFocusStateListenersFancyMenu"(arg0: boolean): void
 "addHoverOrFocusStateListenerFancyMenu"(arg0: $Consumer$$Type<(boolean)>): void
 "getHoverStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "getFocusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "getHoverOrFocusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "getLastHoverOrFocusStateFancyMenu"(): boolean
 "setLastHoverOrFocusStateFancyMenu"(arg0: boolean): void
 "getCustomBackgroundNormalFancyMenu"(): $RenderableResource
 "getCustomBackgroundHoverFancyMenu"(): $RenderableResource
 "getCustomBackgroundInactiveFancyMenu"(): $RenderableResource
 "setCustomBackgroundNormalFancyMenu"(arg0: $RenderableResource$$Type): void
 "setCustomBackgroundHoverFancyMenu"(arg0: $RenderableResource$$Type): void
 "setCustomBackgroundInactiveFancyMenu"(arg0: $RenderableResource$$Type): void
 "resetWidgetSizeAndPositionFancyMenu"(): void
 "setNineSliceCustomBackground_FancyMenu"(arg0: boolean): void
 "renderCustomBackgroundFancyMenu"(arg0: $AbstractWidget$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
 "tickHoverOrFocusStateListenersFancyMenu"(arg0: boolean): void
 "addResetCustomizationsListenerFancyMenu"(arg0: $Runnable$$Type): void
 "getResetCustomizationsListenersFancyMenu"(): $List<($Runnable)>
 "setCustomBackgroundResetBehaviorFancyMenu"(arg0: $CustomizableWidget$CustomBackgroundResetBehavior$$Type): void
 "isNineSliceCustomBackgroundTexture_FancyMenu"(): boolean
 "getNineSliceCustomBackgroundBorderX_FancyMenu"(): integer
 "getNineSliceCustomBackgroundBorderY_FancyMenu"(): integer
 "getCustomBackgroundResetBehaviorFancyMenu"(): $CustomizableWidget$CustomBackgroundResetBehavior
 "addHoverStateListenerFancyMenu"(arg0: $Consumer$$Type<(boolean)>): void
 "addFocusStateListenerFancyMenu"(arg0: $Consumer$$Type<(boolean)>): void
 "getLastHoverStateFancyMenu"(): boolean
 "setLastHoverStateFancyMenu"(arg0: boolean): void
 "getLastFocusStateFancyMenu"(): boolean
 "setLastFocusStateFancyMenu"(arg0: boolean): void
 "setCustomClickSoundFancyMenu"(arg0: $IAudio$$Type): void
 "setCustomLabelFancyMenu"(arg0: $Component$$Type): void
 "setCustomWidthFancyMenu"(arg0: integer): void
 "setCustomHeightFancyMenu"(arg0: integer): void
 "getCustomLabelFancyMenu"(): $Component
 "getCustomClickSoundFancyMenu"(): $IAudio
 "setNineSliceBorderX_FancyMenu"(arg0: integer): void
 "setNineSliceBorderY_FancyMenu"(arg0: integer): void
 "getCustomWidthFancyMenu"(): integer
 "getCustomHeightFancyMenu"(): integer
 "getOriginalMessageFancyMenu"(): $Component
 "stopCustomClickSoundFancyMenu"(): void
 "stopHoverSoundFancyMenu"(): void
set "hoverSoundFancyMenu"(value: $IAudio$$Type)
set "hiddenFancyMenu"(value: boolean)
set "hoverLabelFancyMenu"(value: $Component$$Type)
set "customXFancyMenu"(value: integer)
set "customYFancyMenu"(value: integer)
get "hoverLabelFancyMenu"(): $Component
get "hoverSoundFancyMenu"(): $IAudio
get "hiddenFancyMenu"(): boolean
get "customXFancyMenu"(): integer
get "customYFancyMenu"(): integer
get "hoverStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
get "focusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
get "hoverOrFocusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
get "lastHoverOrFocusStateFancyMenu"(): boolean
set "lastHoverOrFocusStateFancyMenu"(value: boolean)
get "customBackgroundNormalFancyMenu"(): $RenderableResource
get "customBackgroundHoverFancyMenu"(): $RenderableResource
get "customBackgroundInactiveFancyMenu"(): $RenderableResource
set "customBackgroundNormalFancyMenu"(value: $RenderableResource$$Type)
set "customBackgroundHoverFancyMenu"(value: $RenderableResource$$Type)
set "customBackgroundInactiveFancyMenu"(value: $RenderableResource$$Type)
set "nineSliceCustomBackground_FancyMenu"(value: boolean)
get "resetCustomizationsListenersFancyMenu"(): $List<($Runnable)>
set "customBackgroundResetBehaviorFancyMenu"(value: $CustomizableWidget$CustomBackgroundResetBehavior$$Type)
get "nineSliceCustomBackgroundTexture_FancyMenu"(): boolean
get "nineSliceCustomBackgroundBorderX_FancyMenu"(): integer
get "nineSliceCustomBackgroundBorderY_FancyMenu"(): integer
get "customBackgroundResetBehaviorFancyMenu"(): $CustomizableWidget$CustomBackgroundResetBehavior
get "lastHoverStateFancyMenu"(): boolean
set "lastHoverStateFancyMenu"(value: boolean)
get "lastFocusStateFancyMenu"(): boolean
set "lastFocusStateFancyMenu"(value: boolean)
set "customClickSoundFancyMenu"(value: $IAudio$$Type)
set "customLabelFancyMenu"(value: $Component$$Type)
set "customWidthFancyMenu"(value: integer)
set "customHeightFancyMenu"(value: integer)
get "customLabelFancyMenu"(): $Component
get "customClickSoundFancyMenu"(): $IAudio
set "nineSliceBorderX_FancyMenu"(value: integer)
set "nineSliceBorderY_FancyMenu"(value: integer)
get "customWidthFancyMenu"(): integer
get "customHeightFancyMenu"(): integer
get "originalMessageFancyMenu"(): $Component
}

export namespace $CustomizableWidget {
const probejs$$marker: never
}
export class $CustomizableWidget$$Static implements $CustomizableWidget {


 "setHoverSoundFancyMenu"(arg0: $IAudio$$Type): void
 "setHiddenFancyMenu"(arg0: boolean): void
 "setHoverLabelFancyMenu"(arg0: $Component$$Type): void
 "setCustomXFancyMenu"(arg0: integer): void
 "setCustomYFancyMenu"(arg0: integer): void
 "getHoverLabelFancyMenu"(): $Component
 "getHoverSoundFancyMenu"(): $IAudio
 "isHiddenFancyMenu"(): boolean
 "getCustomXFancyMenu"(): integer
 "getCustomYFancyMenu"(): integer
 "resetWidgetCustomizationsFancyMenu"(): void
 "tickHoverStateListenersFancyMenu"(arg0: boolean): void
 "tickFocusStateListenersFancyMenu"(arg0: boolean): void
 "addHoverOrFocusStateListenerFancyMenu"(arg0: $Consumer$$Type<(boolean)>): void
 "getHoverStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "getFocusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "getHoverOrFocusStateListenersFancyMenu"(): $List<($Consumer<(boolean)>)>
 "getLastHoverOrFocusStateFancyMenu"(): boolean
 "setLastHoverOrFocusStateFancyMenu"(arg0: boolean): void
 "getCustomBackgroundNormalFancyMenu"(): $RenderableResource
 "getCustomBackgroundHoverFancyMenu"(): $RenderableResource
 "getCustomBackgroundInactiveFancyMenu"(): $RenderableResource
 "setCustomBackgroundNormalFancyMenu"(arg0: $RenderableResource$$Type): void
 "setCustomBackgroundHoverFancyMenu"(arg0: $RenderableResource$$Type): void
 "setCustomBackgroundInactiveFancyMenu"(arg0: $RenderableResource$$Type): void
 "resetWidgetSizeAndPositionFancyMenu"(): void
 "setNineSliceCustomBackground_FancyMenu"(arg0: boolean): void
 "renderCustomBackgroundFancyMenu"(arg0: $AbstractWidget$$Type, arg1: $GuiGraphics$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): boolean
 "tickHoverOrFocusStateListenersFancyMenu"(arg0: boolean): void
 "addResetCustomizationsListenerFancyMenu"(arg0: $Runnable$$Type): void
 "getResetCustomizationsListenersFancyMenu"(): $List<($Runnable)>
 "setCustomBackgroundResetBehaviorFancyMenu"(arg0: $CustomizableWidget$CustomBackgroundResetBehavior$$Type): void
 "isNineSliceCustomBackgroundTexture_FancyMenu"(): boolean
 "getNineSliceCustomBackgroundBorderX_FancyMenu"(): integer
 "getNineSliceCustomBackgroundBorderY_FancyMenu"(): integer
 "getCustomBackgroundResetBehaviorFancyMenu"(): $CustomizableWidget$CustomBackgroundResetBehavior
 "addHoverStateListenerFancyMenu"(arg0: $Consumer$$Type<(boolean)>): void
 "addFocusStateListenerFancyMenu"(arg0: $Consumer$$Type<(boolean)>): void
 "getLastHoverStateFancyMenu"(): boolean
 "setLastHoverStateFancyMenu"(arg0: boolean): void
 "getLastFocusStateFancyMenu"(): boolean
 "setLastFocusStateFancyMenu"(arg0: boolean): void
 "setCustomClickSoundFancyMenu"(arg0: $IAudio$$Type): void
 "setCustomLabelFancyMenu"(arg0: $Component$$Type): void
 "setCustomWidthFancyMenu"(arg0: integer): void
 "setCustomHeightFancyMenu"(arg0: integer): void
 "getCustomLabelFancyMenu"(): $Component
 "getCustomClickSoundFancyMenu"(): $IAudio
 "setNineSliceBorderX_FancyMenu"(arg0: integer): void
 "setNineSliceBorderY_FancyMenu"(arg0: integer): void
 "getCustomWidthFancyMenu"(): integer
 "getCustomHeightFancyMenu"(): integer
 "getOriginalMessageFancyMenu"(): $Component
 "stopCustomClickSoundFancyMenu"(): void
 "stopHoverSoundFancyMenu"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomizableWidget$$Type = ($CustomizableWidget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomizableWidget_ = $CustomizableWidget$$Type;
}}
declare module "de.keksuccino.konkrete.mixin.mixins.client.IMixinScreen" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$List, $List$$Type} from "java.util.List"
import {$NarratableEntry, $NarratableEntry$$Type} from "net.minecraft.client.gui.narration.NarratableEntry"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$Renderable, $Renderable$$Type} from "net.minecraft.client.gui.components.Renderable"

export interface $IMixinScreen {

 "setFontKonkrete"(arg0: $Font$$Type): void
 "getRenderablesKonkrete"(): $List<($Renderable)>
 "getChildrenKonkrete"(): $List<($GuiEventListener)>
 "invokeAddRenderableWidgetKonkrete"<T extends ($GuiEventListener) & ($Renderable) & ($NarratableEntry)>(arg0: T): T
 "invokeAddWidgetKonkrete"<T extends ($GuiEventListener) & ($NarratableEntry)>(arg0: T): T
set "fontKonkrete"(value: $Font$$Type)
get "renderablesKonkrete"(): $List<($Renderable)>
get "childrenKonkrete"(): $List<($GuiEventListener)>
}

export namespace $IMixinScreen {
const probejs$$marker: never
}
export class $IMixinScreen$$Static implements $IMixinScreen {


 "setFontKonkrete"(arg0: $Font$$Type): void
 "getRenderablesKonkrete"(): $List<($Renderable)>
 "getChildrenKonkrete"(): $List<($GuiEventListener)>
 "invokeAddRenderableWidgetKonkrete"<T extends ($GuiEventListener) & ($Renderable) & ($NarratableEntry)>(arg0: T): T
 "invokeAddWidgetKonkrete"<T extends ($GuiEventListener) & ($NarratableEntry)>(arg0: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinScreen$$Type = ($IMixinScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinScreen_ = $IMixinScreen$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinPlayerModel" {
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export interface $IMixinPlayerModel {

 "getCloakFancyMenu"(): $ModelPart

(): $ModelPart$$Type
get "cloakFancyMenu"(): $ModelPart
}

export namespace $IMixinPlayerModel {
const probejs$$marker: never
}
export class $IMixinPlayerModel$$Static implements $IMixinPlayerModel {


 "getCloakFancyMenu"(): $ModelPart
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinPlayerModel$$Type = (() => $ModelPart$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinPlayerModel_ = $IMixinPlayerModel$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinOptions" {
import {$Options$FieldAccess, $Options$FieldAccess$$Type} from "net.minecraft.client.Options$FieldAccess"
import {$Set, $Set$$Type} from "java.util.Set"
import {$PlayerModelPart, $PlayerModelPart$$Type} from "net.minecraft.world.entity.player.PlayerModelPart"

export interface $IMixinOptions {

 "getModelPartsFancyMenu"(): $Set<($PlayerModelPart)>
 "invokeProcessOptionsFancyMenu"(arg0: $Options$FieldAccess$$Type): void
get "modelPartsFancyMenu"(): $Set<($PlayerModelPart)>
}

export namespace $IMixinOptions {
const probejs$$marker: never
}
export class $IMixinOptions$$Static implements $IMixinOptions {


 "getModelPartsFancyMenu"(): $Set<($PlayerModelPart)>
 "invokeProcessOptionsFancyMenu"(arg0: $Options$FieldAccess$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinOptions$$Type = ($IMixinOptions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinOptions_ = $IMixinOptions$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinGui" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IMixinGui {

 "get_title_FancyMenu"(): $Component
 "get_subtitle_FancyMenu"(): $Component
get "_title_FancyMenu"(): $Component
get "_subtitle_FancyMenu"(): $Component
}

export namespace $IMixinGui {
const probejs$$marker: never
}
export class $IMixinGui$$Static implements $IMixinGui {


 "get_title_FancyMenu"(): $Component
 "get_subtitle_FancyMenu"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinGui$$Type = ($IMixinGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinGui_ = $IMixinGui$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinButton" {
import {$Button$OnPress, $Button$OnPress$$Type} from "net.minecraft.client.gui.components.Button$OnPress"

export interface $IMixinButton {

 "setPressActionFancyMenu"(arg0: $Button$OnPress$$Type): void

(arg0: $Button$OnPress): void
set "pressActionFancyMenu"(value: $Button$OnPress$$Type)
}

export namespace $IMixinButton {
const probejs$$marker: never
}
export class $IMixinButton$$Static implements $IMixinButton {


 "setPressActionFancyMenu"(arg0: $Button$OnPress$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinButton$$Type = ((arg0: $Button$OnPress) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinButton_ = $IMixinButton$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinGuiGraphics" {
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"

export interface $IMixinGuiGraphics {

 "getBufferSource_FancyMenu"(): $MultiBufferSource$BufferSource

(): $MultiBufferSource$BufferSource$$Type
get "bufferSource_FancyMenu"(): $MultiBufferSource$BufferSource
}

export namespace $IMixinGuiGraphics {
const probejs$$marker: never
}
export class $IMixinGuiGraphics$$Static implements $IMixinGuiGraphics {


 "getBufferSource_FancyMenu"(): $MultiBufferSource$BufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinGuiGraphics$$Type = (() => $MultiBufferSource$BufferSource$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinGuiGraphics_ = $IMixinGuiGraphics$$Type;
}}
declare module "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinGameRenderer" {
import {$PostChain, $PostChain$$Type} from "net.minecraft.client.renderer.PostChain"

export interface $IMixinGameRenderer {

 "getBlurEffect_FancyMenu"(): $PostChain

(): $PostChain$$Type
get "blurEffect_FancyMenu"(): $PostChain
}

export namespace $IMixinGameRenderer {
const probejs$$marker: never
}
export class $IMixinGameRenderer$$Static implements $IMixinGameRenderer {


 "getBlurEffect_FancyMenu"(): $PostChain
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinGameRenderer$$Type = (() => $PostChain$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinGameRenderer_ = $IMixinGameRenderer$$Type;
}}
declare module "de.keksuccino.fancymenu.util.resource.Resource" {
import {$Closeable, $Closeable$$Type} from "java.io.Closeable"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"

export interface $Resource extends $Closeable {

 "open"(): $InputStream
 "isReady"(): boolean
 "waitForReady"(arg0: long): void
 "isClosed"(): boolean
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "close"(): void
get "ready"(): boolean
get "closed"(): boolean
get "loadingCompleted"(): boolean
get "loadingFailed"(): boolean
}

export namespace $Resource {
const probejs$$marker: never
}
export class $Resource$$Static implements $Resource {


 "open"(): $InputStream
 "isReady"(): boolean
 "waitForReady"(arg0: long): void
 "isClosed"(): boolean
 "isLoadingCompleted"(): boolean
 "isLoadingFailed"(): boolean
 "waitForLoadingCompletedOrFailed"(arg0: long): void
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Resource$$Type = ($Resource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Resource_ = $Resource$$Type;
}}
