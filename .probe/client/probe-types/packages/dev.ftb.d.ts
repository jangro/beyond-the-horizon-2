declare module "dev.ftb.mods.ftblibrary.config.ui.resource.SelectableResource" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FluidStack, $FluidStack$$Type} from "dev.architectury.fluid.FluidStack"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $SelectableResource<T> {

 "resource"(): T
 "getName"(): $Component
 "isEmpty"(): boolean
 "getCount"(): long
 "copyWithCount"(arg0: long): $SelectableResource<(T)>
 "setCount"(arg0: integer): void
 "getIcon"(): $Icon
 "getComponentsTag"(): $CompoundTag
 "applyComponentsTag"(tag: $CompoundTag$$Type): void
get "name"(): $Component
get "empty"(): boolean
get "count"(): long
set "count"(value: integer)
get "icon"(): $Icon
get "componentsTag"(): $CompoundTag
}

export namespace $SelectableResource {
function item(stack: $ItemStack$$Type): $SelectableResource<($ItemStack)>
function fluid(stack: $FluidStack$$Type): $SelectableResource<($FluidStack)>
const probejs$$marker: never
}
export class $SelectableResource$$Static<T> implements $SelectableResource {


static "item"(stack: $ItemStack$$Type): $SelectableResource<($ItemStack)>
 "resource"(): T
 "getName"(): $Component
 "isEmpty"(): boolean
 "getCount"(): long
static "fluid"(stack: $FluidStack$$Type): $SelectableResource<($FluidStack)>
 "copyWithCount"(arg0: long): $SelectableResource<(T)>
 "setCount"(arg0: integer): void
 "getIcon"(): $Icon
 "getComponentsTag"(): $CompoundTag
 "applyComponentsTag"(tag: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectableResource$$Type<T> = ($SelectableResource<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectableResource_<T> = $SelectableResource$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftbquests.item.CustomIconItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $CustomIconItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(level: $Level$$Type, player: $Player$$Type, interactionHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getName"(stack: $ItemStack$$Type): $Component
public static "setIcon"(stack: $ItemStack$$Type, texture: $ResourceLocation$$Type): void
public static "getIcon"(stack: $ItemStack$$Type): $Icon
public static "setFaceIcon"(stack: $ItemStack$$Type, value: $EntityType$$Type<(any)>): void
public static "setFaceIcon"(stack: $ItemStack$$Type, value: $ResourceLocation$$Type): void
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flagIn: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomIconItem$$Type = ($CustomIconItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomIconItem_ = $CustomIconItem$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.TeamManager" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Team, $Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"

export interface $TeamManager {

 "getId"(): $UUID
 "markDirty"(): void
 "getServer"(): $MinecraftServer
 "getTeams"(): $Collection<($Team)>
 "getTeamByName"(arg0: StringJS): $Optional<($Team)>
 "getTeamByID"(arg0: $UUID$$Type): $Optional<($Team)>
 "getExtraData"(): $CompoundTag
 "arePlayersInSameTeam"(arg0: $UUID$$Type, arg1: $UUID$$Type): boolean
 "getTeamForPlayerID"(arg0: $UUID$$Type): $Optional<($Team)>
 "getKnownPlayerTeams"(): $Map<($UUID), ($Team)>
 "createPartyTeam"(arg0: $ServerPlayer$$Type, arg1: StringJS, arg2: StringJS, arg3: $Color4I$$Type): $Team
 "setChatRedirected"(arg0: $ServerPlayer$$Type, arg1: boolean): void
 "isChatRedirected"(arg0: $ServerPlayer$$Type): boolean
 "getTeamForPlayer"(arg0: $ServerPlayer$$Type): $Optional<($Team)>
 "getPlayerTeamForPlayerID"(arg0: $UUID$$Type): $Optional<($Team)>
get "id"(): $UUID
get "server"(): $MinecraftServer
get "teams"(): $Collection<($Team)>
get "extraData"(): $CompoundTag
get "knownPlayerTeams"(): $Map<($UUID), ($Team)>
}

export namespace $TeamManager {
const probejs$$marker: never
}
export class $TeamManager$$Static implements $TeamManager {


 "getId"(): $UUID
 "markDirty"(): void
 "getServer"(): $MinecraftServer
 "getTeams"(): $Collection<($Team)>
 "getTeamByName"(arg0: StringJS): $Optional<($Team)>
 "getTeamByID"(arg0: $UUID$$Type): $Optional<($Team)>
 "getExtraData"(): $CompoundTag
 "arePlayersInSameTeam"(arg0: $UUID$$Type, arg1: $UUID$$Type): boolean
 "getTeamForPlayerID"(arg0: $UUID$$Type): $Optional<($Team)>
 "getKnownPlayerTeams"(): $Map<($UUID), ($Team)>
 "createPartyTeam"(arg0: $ServerPlayer$$Type, arg1: StringJS, arg2: StringJS, arg3: $Color4I$$Type): $Team
 "setChatRedirected"(arg0: $ServerPlayer$$Type, arg1: boolean): void
 "isChatRedirected"(arg0: $ServerPlayer$$Type): boolean
 "getTeamForPlayer"(arg0: $ServerPlayer$$Type): $Optional<($Team)>
 "getPlayerTeamForPlayerID"(arg0: $UUID$$Type): $Optional<($Team)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamManager$$Type = ($TeamManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamManager_ = $TeamManager$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.ItemStackConfig" {
import {$SelectableResource, $SelectableResource$$Type} from "dev.ftb.mods.ftblibrary.config.ui.resource.SelectableResource"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ResourceConfigValue, $ResourceConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ResourceConfigValue"

export class $ItemStackConfig extends $ResourceConfigValue<($ItemStack)> {
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor(single: boolean, empty: boolean)
constructor(fixedSize: long)

public "getValue"(): $ItemStack
public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<($ItemStack)>
public "copy"(arg0: any): any
public "copy"(value: $ItemStack$$Type): $ItemStack
public "onClicked"(clickedWidget: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
public "setResource"(selectable: $SelectableResource$$Type<($ItemStack$$Type)>): boolean
public "fixedResourceSize"(): $OptionalLong
public "allowEmptyResource"(): boolean
public "getStringForGUI"(v: $ItemStack$$Type): $Component
public "getStringForGUI"(arg0: any): $Component
get "value"(): $ItemStack
get "empty"(): boolean
get "resource"(): $SelectableResource<($ItemStack)>
set "resource"(value: $SelectableResource$$Type<($ItemStack$$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackConfig$$Type = ($ItemStackConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackConfig_ = $ItemStackConfig$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.icon.Drawable" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export interface $Drawable {

 "draw"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
 "draw3D"(graphics: $GuiGraphics$$Type): void
 "drawStatic"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void

(arg0: $GuiGraphics, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
}

export namespace $Drawable {
const probejs$$marker: never
}
export class $Drawable$$Static implements $Drawable {


 "draw"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
 "draw3D"(graphics: $GuiGraphics$$Type): void
 "drawStatic"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Drawable$$Type = ((arg0: $GuiGraphics, arg1: integer, arg2: integer, arg3: integer, arg4: integer) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Drawable_ = $Drawable$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.DoubleConfig" {
import {$NumberConfig, $NumberConfig$$Type} from "dev.ftb.mods.ftblibrary.config.NumberConfig"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $DoubleConfig extends $NumberConfig<(double)> {
readonly "min": T
readonly "max": T
static readonly "COLOR": $Color4I
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor(mn: double, mx: double)

public "parse"(callback: $Consumer$$Type<(double)>, string: StringJS): boolean
public "scrollValue"(arg0: any, arg1: boolean): $Optional<(any)>
public "scrollValue"(currentValue: double, forward: boolean): $Optional<(double)>
public "addInfo"(list: $TooltipList$$Type): void
public "getStringFromValue"(arg0: any): StringJS
public "getStringFromValue"(v: double): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleConfig$$Type = ($DoubleConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleConfig_ = $DoubleConfig$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.icon.ImageIcon" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IResourceIcon, $IResourceIcon$$Type} from "dev.ftb.mods.ftblibrary.icon.IResourceIcon"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$PixelBuffer, $PixelBuffer$$Type} from "dev.ftb.mods.ftblibrary.math.PixelBuffer"

export class $ImageIcon extends $Icon implements $IResourceIcon {
 "minU": float
 "maxV": float
 "maxU": float
static readonly "CODEC": $Codec<($Icon)>
 "color": $Color4I
readonly "texture": $ResourceLocation
static readonly "MISSING_IMAGE": $ResourceLocation
 "minV": float
 "tileSize": double
static readonly "STRING_CODEC": $Codec<($Icon)>
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Icon)>

constructor(tex: $ResourceLocation$$Type)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "copy"(): $ImageIcon
public "draw"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "withColor"(arg0: $Color4I$$Type): $Icon
public "withUV"(arg0: float, arg1: float, arg2: float, arg3: float): $Icon
public "aspectRatio"(): double
public "withTint"(c: $Color4I$$Type): $ImageIcon
public "hasPixelBuffer"(): boolean
public "bindTexture"(): void
public "getResourceLocation"(): $ResourceLocation
public "createPixelBuffer"(): $PixelBuffer
get "resourceLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageIcon$$Type = ($ImageIcon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImageIcon_ = $ImageIcon$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.Widget" {
import {$WidgetType, $WidgetType$$Type} from "dev.ftb.mods.ftblibrary.ui.WidgetType"
import {$Key, $Key$$Type} from "dev.ftb.mods.ftblibrary.ui.input.Key"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$KeyModifiers, $KeyModifiers$$Type} from "dev.ftb.mods.ftblibrary.ui.input.KeyModifiers"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$PositionedIngredient, $PositionedIngredient$$Type} from "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IScreenWrapper, $IScreenWrapper$$Type} from "dev.ftb.mods.ftblibrary.ui.IScreenWrapper"
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Window, $Window$$Type} from "com.mojang.blaze3d.platform.Window"
import {$CursorType, $CursorType$$Type} from "dev.ftb.mods.ftblibrary.ui.CursorType"
import {$Theme, $Theme$$Type} from "dev.ftb.mods.ftblibrary.ui.Theme"
import {$BaseScreen, $BaseScreen$$Type} from "dev.ftb.mods.ftblibrary.ui.BaseScreen"
import {$Widget$DrawLayer, $Widget$DrawLayer$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget$DrawLayer"

export class $Widget implements $IScreenWrapper, $Comparable<($Widget)> {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(p: $Panel$$Type)

public "tick"(): void
public "setSize"(w: integer, h: integer): void
public "getWidth"(): integer
public "getHeight"(): integer
public "toString"(): StringJS
public "compareTo"(widget: $Widget$$Type): integer
public "compareTo"(arg0: any): integer
public "isEnabled"(): boolean
public "getParent"(): $Panel
public "getY"(): integer
public "getX"(): integer
public "setPos"(x: integer, y: integer): void
public "setX"(v: integer): void
public "setY"(v: integer): void
public "draw"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "keyPressed"(key: $Key$$Type): boolean
public static "isKeyDown"(key: integer): boolean
public "isMouseOver"(): boolean
public "getScreen"(): $Window
public "setWidth"(v: integer): void
public "setHeight"(v: integer): void
public "onClosed"(): void
public static "isShiftKeyDown"(): boolean
public "mouseReleased"(button: $MouseButton$$Type): void
public "mouseDragged"(button: integer, dragX: double, dragY: double): boolean
public "mouseScrolled"(scroll: double): boolean
public "keyReleased"(key: $Key$$Type): void
public "charTyped"(c: character, modifiers: $KeyModifiers$$Type): boolean
public "getMouseX"(): integer
public "getMouseY"(): integer
public "getCursor"(): $CursorType
public "getTitle"(): $Component
public "getGui"(): $BaseScreen
public static "isCtrlKeyDown"(): boolean
public "collidesWith"(x: integer, y: integer, w: integer, h: integer): boolean
public "getWidgetType"(): $WidgetType
public "getDrawLayer"(): $Widget$DrawLayer
public "setDrawLayer"(drawLayer: $Widget$DrawLayer$$Type): void
public "playClickSound"(): void
public "setPosAndSize"(x: integer, y: integer, w: integer, h: integer): $Widget
public "checkMouseOver"(mouseX: integer, mouseY: integer): boolean
public "shouldDraw"(): boolean
public "handleClick"(scheme: StringJS, path: StringJS): boolean
public "handleClick"(click: StringJS): boolean
public "getPosX"(): integer
public "getPosY"(): integer
public "mousePressed"(button: $MouseButton$$Type): boolean
public "getPartialTicks"(): float
public static "isMouseButtonDown"(button: $MouseButton$$Type): boolean
public static "getClipboardString"(): StringJS
public static "setClipboardString"(string: StringJS): void
public "acceptGhostIngredient"(ingredient: any): void
public "updateMouseOver"(mouseX: integer, mouseY: integer): void
public "mouseDoubleClicked"(button: $MouseButton$$Type): boolean
public "shouldAddMouseOverText"(): boolean
public "addMouseOverText"(list: $TooltipList$$Type): void
public "getIngredientUnderMouse"(): $Optional<($PositionedIngredient)>
public "isGhostIngredientTarget"(ingredient: any): boolean
public "closeGui"(openPrevScreen: boolean): void
public "openGui"(): void
public "run"(): void
public "openGuiLater"(): void
public "openAfter"(runnable: $Runnable$$Type): $Runnable
public "closeGui"(): void
public "closeContextMenu"(): void
get "width"(): integer
get "height"(): integer
get "enabled"(): boolean
get "parent"(): $Panel
get "y"(): integer
get "x"(): integer
set "x"(value: integer)
set "y"(value: integer)
get "mouseOver"(): boolean
get "screen"(): $Window
set "width"(value: integer)
set "height"(value: integer)
get "mouseX"(): integer
get "mouseY"(): integer
get "cursor"(): $CursorType
get "title"(): $Component
get "gui"(): $BaseScreen
get "widgetType"(): $WidgetType
get "drawLayer"(): $Widget$DrawLayer
set "drawLayer"(value: $Widget$DrawLayer$$Type)
get "posX"(): integer
get "posY"(): integer
get "partialTicks"(): float
get "ingredientUnderMouse"(): $Optional<($PositionedIngredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Widget$$Type = ($Widget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Widget_ = $Widget$$Type;
}}
declare module "dev.ftb.mods.ftbquests.item.QuestBookItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $QuestBookItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(world: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flagIn: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestBookItem$$Type = ($QuestBookItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestBookItem_ = $QuestBookItem$$Type;
}}
declare module "dev.ftb.mods.ftbquests.block.StageBarrierBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$QuestBarrierBlockEntity, $QuestBarrierBlockEntity$$Type} from "dev.ftb.mods.ftbquests.block.entity.QuestBarrierBlockEntity"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$QuestBarrierBlock, $QuestBarrierBlock$$Type} from "dev.ftb.mods.ftbquests.block.QuestBarrierBlock"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StageBarrierBlock extends $QuestBarrierBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "PROPS": $BlockBehaviour$Properties
 "hasCollision": boolean

constructor(props: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public static "stageBlockEntityProvider"(): $BlockEntityType$BlockEntitySupplier<($QuestBarrierBlockEntity)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StageBarrierBlock$$Type = ($StageBarrierBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StageBarrierBlock_ = $StageBarrierBlock$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.Button" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$PositionedIngredient, $PositionedIngredient$$Type} from "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient"
import {$CursorType, $CursorType$$Type} from "dev.ftb.mods.ftblibrary.ui.CursorType"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Theme, $Theme$$Type} from "dev.ftb.mods.ftblibrary.ui.Theme"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $Button extends $Widget {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(panel: $Panel$$Type, t: $Component$$Type, i: $Icon$$Type)
constructor(panel: $Panel$$Type)

public "draw"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawIcon"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "setIcon"(i: $Icon$$Type): $Button
public "setTitle"(s: $Component$$Type): $Button
public "getCursor"(): $CursorType
public "getTitle"(): $Component
public "onClicked"(arg0: $MouseButton$$Type): void
public "drawBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "mousePressed"(button: $MouseButton$$Type): boolean
public "setForceButtonSize"(forceButtonSize: boolean): $Button
public "getIngredientUnderMouse"(): $Optional<($PositionedIngredient)>
set "icon"(value: $Icon$$Type)
set "title"(value: $Component$$Type)
get "cursor"(): $CursorType
get "title"(): $Component
set "forceButtonSize"(value: boolean)
get "ingredientUnderMouse"(): $Optional<($PositionedIngredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Button$$Type = ($Button);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Button_ = $Button$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.reward.RewardType" {
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$RewardType$Provider, $RewardType$Provider$$Type} from "dev.ftb.mods.ftbquests.quest.reward.RewardType$Provider"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$RewardType$GuiProvider, $RewardType$GuiProvider$$Type} from "dev.ftb.mods.ftbquests.quest.reward.RewardType$GuiProvider"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $RewardType {
 "intId": integer

constructor(typeId: $ResourceLocation$$Type, provider: $RewardType$Provider$$Type, iconSupplier: $Supplier$$Type<($Icon$$Type)>, availableByDefault: boolean)
constructor(typeId: $ResourceLocation$$Type, provider: $RewardType$Provider$$Type, iconSupplier: $Supplier$$Type<($Icon$$Type)>)

public "getDisplayName"(): $Component
public "setDisplayName"(name: $Component$$Type): $RewardType
public "getTypeForNBT"(): StringJS
public "makeExtraNBT"(): $CompoundTag
public "setGuiProvider"(p: $RewardType$GuiProvider$$Type): $RewardType
public "getGuiProvider"(): $RewardType$GuiProvider
public static "createReward"(id: long, quest: $Quest$$Type, typeId: StringJS): $Reward
public "createReward"(id: long, quest: $Quest$$Type): $Reward
public "getTypeId"(): $ResourceLocation
public "getIconSupplier"(): $Icon
public "setExcludeFromListRewards"(v: boolean): $RewardType
public "getExcludeFromListRewards"(): boolean
get "displayName"(): $Component
set "displayName"(value: $Component$$Type)
get "typeForNBT"(): StringJS
set "guiProvider"(value: $RewardType$GuiProvider$$Type)
get "guiProvider"(): $RewardType$GuiProvider
get "typeId"(): $ResourceLocation
get "iconSupplier"(): $Icon
set "excludeFromListRewards"(value: boolean)
get "excludeFromListRewards"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardType$$Type = ($RewardType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewardType_ = $RewardType$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.loot.LootCrate" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EntityWeight, $EntityWeight$$Type} from "dev.ftb.mods.ftbquests.quest.loot.EntityWeight"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$RewardTable, $RewardTable$$Type} from "dev.ftb.mods.ftbquests.quest.loot.RewardTable"

export class $LootCrate {

constructor(table: $RewardTable$$Type, initFromTable: boolean)

public "getTable"(): $RewardTable
public "getDrops"(): $EntityWeight
public "getItemName"(): StringJS
public "getColor"(): $Color4I
public "isGlow"(): boolean
public "readNetData"(data: $FriendlyByteBuf$$Type): void
public "getStringID"(): StringJS
public static "getLootCrates"(isClient: boolean): $Map<(StringJS), ($LootCrate)>
public static "allCrateStacks"(isClientSide: boolean): $Collection<($ItemStack)>
public "writeNetData"(data: $FriendlyByteBuf$$Type): void
public "writeData"(nbt: $CompoundTag$$Type): void
public "readData"(nbt: $CompoundTag$$Type): void
public "createStack"(): $ItemStack
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "initFromTable"(): void
get "table"(): $RewardTable
get "drops"(): $EntityWeight
get "itemName"(): StringJS
get "color"(): $Color4I
get "glow"(): boolean
get "stringID"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCrate$$Type = ($LootCrate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootCrate_ = $LootCrate$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.snbt.config.IntValue" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$SNBTConfig, $SNBTConfig$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig"
import {$NumberValue, $NumberValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.NumberValue"
import {$SNBTCompoundTag, $SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"

export class $IntValue extends $NumberValue<(integer)> {
readonly "parent": $SNBTConfig
readonly "key": StringJS


public "range"(max: integer): $NumberValue<(integer)>
public "set"(arg0: any): void
public "set"(v: integer): void
public "write"(tag: $SNBTCompoundTag$$Type): void
public "read"(tag: $SNBTCompoundTag$$Type): void
public "createClientConfig"(group: $ConfigGroup$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntValue$$Type = ($IntValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntValue_ = $IntValue$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$StringValue, $StringValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.StringValue"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$BooleanValue, $BooleanValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.BooleanValue"
import {$List, $List$$Type} from "java.util.List"
import {$SNBTCompoundTag, $SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"
import {$LongValue, $LongValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.LongValue"
import {$IntValue, $IntValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.IntValue"
import {$IntArrayValue, $IntArrayValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.IntArrayValue"
import {$StringListValue, $StringListValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.StringListValue"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"
import {$BaseValue, $BaseValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.BaseValue"
import {$EnumValue, $EnumValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.EnumValue"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$DoubleValue, $DoubleValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.DoubleValue"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export class $SNBTConfig extends $BaseValue<($List<($BaseValue<(any)>)>)> {
readonly "parent": $SNBTConfig
readonly "key": StringJS


public static "create"(name: StringJS): $SNBTConfig
public "load"(path: $Path$$Type): void
public "load"(path: $Path$$Type, defaultPath: $Path$$Type, comment: $Supplier$$Type<((StringJS)[])>): void
public "add"<T extends $BaseValue<(any)>>(value: T): T
public "write"(tag: $SNBTCompoundTag$$Type): void
public "write"(buf: $FriendlyByteBuf$$Type): void
public "read"(buf: $FriendlyByteBuf$$Type): void
public "read"(tag: $SNBTCompoundTag$$Type): void
public "save"(path: $Path$$Type): void
public "saveNow"(path: $Path$$Type): void
public "addInt"(key: StringJS, def: integer, min: integer, max: integer): $IntValue
public "addInt"(key: StringJS, def: integer): $IntValue
public "addIntArray"(key: StringJS, def: (integer)[]): $IntArrayValue
public "addLong"(key: StringJS, def: long): $LongValue
public "addLong"(key: StringJS, def: long, min: long, max: long): $LongValue
public "addDouble"(key: StringJS, def: double): $DoubleValue
public "addDouble"(key: StringJS, def: double, min: double, max: double): $DoubleValue
public "addString"(key: StringJS, def: StringJS): $StringValue
public "addStringList"(key: StringJS, def: $List$$Type<(StringJS)>): $StringListValue
public "addBoolean"(key: StringJS, def: boolean): $BooleanValue
public "addEnum"<T>(key: StringJS, nameMap: $NameMap$$Type<(T)>, def: T): $EnumValue<(T)>
public "addEnum"<T>(key: StringJS, nameMap: $NameMap$$Type<(T)>): $EnumValue<(T)>
public "addGroup"(key: StringJS): $SNBTConfig
public "addGroup"(key: StringJS, displayOrder: integer): $SNBTConfig
public "createClientConfig"(group: $ConfigGroup$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SNBTConfig$$Type = ($SNBTConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SNBTConfig_ = $SNBTConfig$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.util.TooltipList" {
import {$List, $List$$Type} from "java.util.List"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ChatFormatting, $ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $TooltipList {
 "backgroundColor": integer
 "yOffset": integer
 "xOffset": integer
 "borderColorStart": integer
 "borderColorEnd": integer
 "maxWidth": integer

constructor()

public "string"(text: StringJS): void
public "reset"(): void
public "add"(component: $Component$$Type): void
public "shouldRender"(): boolean
public "translate"(key: StringJS, ...objects: (any)[]): void
public "getLines"(): $List<($Component)>
public "blankLine"(): void
public "styledString"(text: StringJS, style: $Style$$Type): void
public "styledString"(text: StringJS, color: $ChatFormatting$$Type): void
public "styledTranslate"(key: StringJS, style: $Style$$Type, ...objects: (any)[]): void
get "lines"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipList$$Type = ($TooltipList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltipList_ = $TooltipList$$Type;
}}
declare module "dev.ftb.mods.ftbquests.events.QuestProgressEventData" {
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$List, $List$$Type} from "java.util.List"
import {$Date, $Date$$Type} from "java.util.Date"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"

export class $QuestProgressEventData<T extends $QuestObject> {

constructor(date: $Date$$Type, teamData: $TeamData$$Type, object: T, online: $Collection$$Type<($ServerPlayer$$Type)>, notified: $Collection$$Type<($ServerPlayer$$Type)>)

public "getTime"(): $Date
public "getObject"(): T
public "setCompleted"(id: long): void
public "setStarted"(id: long): void
public "withObject"<N extends $QuestObject>(o: N): $QuestProgressEventData<(N)>
public "notifyPlayers"(id: long): void
public "getTeamData"(): $TeamData
public "getOnlineMembers"(): $List<($ServerPlayer)>
public "getNotifiedPlayers"(): $List<($ServerPlayer)>
get "time"(): $Date
get "object"(): T
set "completed"(value: long)
set "started"(value: long)
get "teamData"(): $TeamData
get "onlineMembers"(): $List<($ServerPlayer)>
get "notifiedPlayers"(): $List<($ServerPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestProgressEventData$$Type<T> = ($QuestProgressEventData<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestProgressEventData_<T> = $QuestProgressEventData$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftblibrary.ui.WidgetType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $WidgetType extends $Enum<($WidgetType)> {
static readonly "DISABLED": $WidgetType
static readonly "MOUSE_OVER": $WidgetType
static readonly "NORMAL": $WidgetType


public static "values"(): ($WidgetType)[]
public static "valueOf"(name: StringJS): $WidgetType
public static "mouseOver"(mouseOver: boolean): $WidgetType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetType$$Type = (("normal") | ("mouse_over") | ("disabled"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetType_ = $WidgetType$$Type;
}}
declare module "dev.ftb.mods.ftbteams.data.AbstractTeam" {
import {$AbstractTeamBase, $AbstractTeamBase$$Type} from "dev.ftb.mods.ftbteams.data.AbstractTeamBase"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$TeamRank, $TeamRank$$Type} from "dev.ftb.mods.ftbteams.api.TeamRank"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SNBTCompoundTag, $SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$TeamProperty, $TeamProperty$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$TeamPropertyCollection, $TeamPropertyCollection$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyCollection"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$TeamManagerImpl, $TeamManagerImpl$$Type} from "dev.ftb.mods.ftbteams.data.TeamManagerImpl"

export class $AbstractTeam extends $AbstractTeamBase {

constructor(manager: $TeamManagerImpl$$Type, id: $UUID$$Type)

public "getOwner"(): $UUID
public "settings"<T>(source: $CommandSourceStack$$Type, key: $TeamProperty$$Type<(T)>, value: StringJS): integer
public "markDirty"(): void
public "deserializeNBT"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "serializeNBT"(provider: $HolderLookup$Provider$$Type): $SNBTCompoundTag
public "getTeamInfo"(): $List<($Component)>
public "sendMessage"(from: $UUID$$Type, text: $Component$$Type): void
public "sendMessage"(senderId: $UUID$$Type, message: StringJS): void
public "updatePropertiesFrom"(newProperties: $TeamPropertyCollection$$Type): void
public "getOnlineMembers"(): $Collection<(any)>
public "declineInvitation"(source: $CommandSourceStack$$Type): integer
public "getOnlineRanked"(rank: $TeamRank$$Type): $List<($ServerPlayer)>
get "owner"(): $UUID
get "teamInfo"(): $List<($Component)>
get "onlineMembers"(): $Collection<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTeam$$Type = ($AbstractTeam);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractTeam_ = $AbstractTeam$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.WidgetLayout" {
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$WidgetLayout$Padding, $WidgetLayout$Padding$$Type} from "dev.ftb.mods.ftblibrary.ui.WidgetLayout$Padding"

export interface $WidgetLayout {

 "align"(arg0: $Panel$$Type): integer
 "getLayoutPadding"(): $WidgetLayout$Padding

(arg0: $Panel): integer
get "layoutPadding"(): $WidgetLayout$Padding
}

export namespace $WidgetLayout {
const VERTICAL: $WidgetLayout
const NO_PADDING: $WidgetLayout$Padding
const HORIZONTAL: $WidgetLayout
const NONE: $WidgetLayout
const probejs$$marker: never
}
export class $WidgetLayout$$Static implements $WidgetLayout {
static readonly "VERTICAL": $WidgetLayout
static readonly "NO_PADDING": $WidgetLayout$Padding
static readonly "HORIZONTAL": $WidgetLayout
static readonly "NONE": $WidgetLayout


 "align"(arg0: $Panel$$Type): integer
 "getLayoutPadding"(): $WidgetLayout$Padding
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetLayout$$Type = ((arg0: $Panel) => integer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WidgetLayout_ = $WidgetLayout$$Type;
}}
declare module "dev.ftb.mods.ftbquests.block.QuestBarrierBlock" {
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$QuestBarrierBlockEntity, $QuestBarrierBlockEntity$$Type} from "dev.ftb.mods.ftbquests.block.entity.QuestBarrierBlockEntity"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$LevelReader, $LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $QuestBarrierBlock extends $BaseEntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "PROPS": $BlockBehaviour$Properties
 "hasCollision": boolean

constructor(props: $BlockBehaviour$Properties$$Type)

public "getVisualShape"(state: $BlockState$$Type, blockGetter: $BlockGetter$$Type, pos: $BlockPos$$Type, ctx: $CollisionContext$$Type): $VoxelShape
public "skipRendering"(state: $BlockState$$Type, state2: $BlockState$$Type, dir: $Direction$$Type): boolean
public "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, entity: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, blockState: $BlockState$$Type, blockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "getShadeBrightness"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): float
public "propagatesSkylightDown"(state: $BlockState$$Type, bg: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "getCollisionShape"(state: $BlockState$$Type, bg: $BlockGetter$$Type, pos: $BlockPos$$Type, ctx: $CollisionContext$$Type): $VoxelShape
public "getCloneItemStack"(levelReader: $LevelReader$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $ItemStack
public static "questBlockEntityProvider"(): $BlockEntityType$BlockEntitySupplier<($QuestBarrierBlockEntity)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestBarrierBlock$$Type = ($QuestBarrierBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestBarrierBlock_ = $QuestBarrierBlock$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.translation.TranslationTable" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"

export class $TranslationTable {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($TranslationTable)>

constructor()

public "remove"(key: StringJS): void
public "size"(): integer
public "put"(key: StringJS, message: StringJS): void
public "put"(key: StringJS, message: $List$$Type<(StringJS)>): void
public "contains"(key: StringJS): boolean
public "saveToNBT"(): $CompoundTag
public static "fromNBT"(tag: $CompoundTag$$Type): $TranslationTable
public "getStringTranslation"(key: StringJS): $Optional<(StringJS)>
public "getStringListTranslation"(key: StringJS): $Optional<($List<(StringJS)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TranslationTable$$Type = ($TranslationTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TranslationTable_ = $TranslationTable$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.snbt.config.StringListValue" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$SNBTConfig, $SNBTConfig$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig"
import {$BaseValue, $BaseValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.BaseValue"
import {$List, $List$$Type} from "java.util.List"
import {$SNBTCompoundTag, $SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"

export class $StringListValue extends $BaseValue<($List<(StringJS)>)> {
readonly "parent": $SNBTConfig
readonly "key": StringJS


public "set"(arg0: any): void
public "set"(v: $List$$Type<(StringJS)>): void
public "write"(tag: $SNBTCompoundTag$$Type): void
public "read"(tag: $SNBTCompoundTag$$Type): void
public "createClientConfig"(group: $ConfigGroup$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringListValue$$Type = ($StringListValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringListValue_ = $StringListValue$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.property.TeamProperty" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TeamPropertyValue, $TeamPropertyValue$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyValue"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$TeamPropertyType, $TeamPropertyType$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyType"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"

export class $TeamProperty<T> {


public "config"(config: $ConfigGroup$$Type, value: $TeamPropertyValue$$Type<(T)>): void
public "readValue"(buf: $RegistryFriendlyByteBuf$$Type): T
public "getDefaultValue"(): T
public "equals"(o: any): boolean
public "toString"(): StringJS
public "toString"(value: T): StringJS
public "hashCode"(): integer
public "write"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "getId"(): $ResourceLocation
public "getType"(): $TeamPropertyType<(T)>
public "toNBT"(value: T): $Tag
public "fromString"(arg0: StringJS): $Optional<(T)>
public "writeValue"(buf: $RegistryFriendlyByteBuf$$Type, value: T): void
public "fromNBT"(tag: $Tag$$Type): $Optional<(T)>
public "createDefaultValue"(): $TeamPropertyValue<(T)>
public "getTranslationKey"(prefix: StringJS): StringJS
public "createValueFromNetwork"(buf: $RegistryFriendlyByteBuf$$Type): $TeamPropertyValue<(T)>
public "createValueFromNBT"(tag: $Tag$$Type): $TeamPropertyValue<(T)>
get "defaultValue"(): T
get "id"(): $ResourceLocation
get "type"(): $TeamPropertyType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamProperty$$Type<T> = ($TeamProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamProperty_<T> = $TeamProperty$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftblibrary.ui.Panel" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Key, $Key$$Type} from "dev.ftb.mods.ftblibrary.ui.input.Key"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$KeyModifiers, $KeyModifiers$$Type} from "dev.ftb.mods.ftblibrary.ui.input.KeyModifiers"
import {$List, $List$$Type} from "java.util.List"
import {$PositionedIngredient, $PositionedIngredient$$Type} from "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$CursorType, $CursorType$$Type} from "dev.ftb.mods.ftblibrary.ui.CursorType"
import {$Theme, $Theme$$Type} from "dev.ftb.mods.ftblibrary.ui.Theme"
import {$WidgetLayout, $WidgetLayout$$Type} from "dev.ftb.mods.ftblibrary.ui.WidgetLayout"

export class $Panel extends $Widget {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(panel: $Panel$$Type)

public "tick"(): void
public "setOffset"(flag: boolean): void
public "add"(widget: $Widget$$Type): void
public "addAll"(list: $Iterable$$Type<($Widget$$Type)>): void
public "getY"(): integer
public "getX"(): integer
public "draw"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "align"(layout: $WidgetLayout$$Type): integer
public "getWidget"(index: integer): $Widget
public "keyPressed"(key: $Key$$Type): boolean
public "clearWidgets"(): void
public "onClosed"(): void
public "mouseReleased"(button: $MouseButton$$Type): void
public "mouseDragged"(button: integer, dragX: double, dragY: double): boolean
public "mouseScrolled"(scroll: double): boolean
public "keyReleased"(key: $Key$$Type): void
public "charTyped"(c: character, modifiers: $KeyModifiers$$Type): boolean
public "getWidgets"(): $List<($Widget)>
public "getCursor"(): $CursorType
public "setScrollStep"(s: double): void
public "refreshWidgets"(): void
public "drawBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "addWidgets"(): void
public "alignWidgets"(): void
public "getScrollX"(): double
public "setScrollX"(scroll: double): void
public "getScrollY"(): double
public "setScrollY"(scroll: double): void
public "isOffset"(): boolean
public "drawWidget"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, widget: $Widget$$Type, x: integer, y: integer, w: integer, h: integer): void
public "scrollPanel"(scroll: double): boolean
public "getScrollStep"(): double
public "mousePressed"(button: $MouseButton$$Type): boolean
public "getContentHeight"(): integer
public "setOnlyInteractWithWidgetsInside"(value: boolean): void
public "getOnlyInteractWithWidgetsInside"(): boolean
public "getContentWidth"(): integer
public "drawOffsetBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "movePanelScroll"(dx: double, dy: double): boolean
public "isMouseOverAnyWidget"(): boolean
public "updateMouseOver"(mouseX: integer, mouseY: integer): void
public "mouseDoubleClicked"(button: $MouseButton$$Type): boolean
public "addMouseOverText"(list: $TooltipList$$Type): void
public "setOnlyRenderWidgetsInside"(value: boolean): void
public "getOnlyRenderWidgetsInside"(): boolean
public "getIngredientUnderMouse"(): $Optional<($PositionedIngredient)>
public "isDefaultScrollVertical"(): boolean
set "offset"(value: boolean)
get "y"(): integer
get "x"(): integer
get "widgets"(): $List<($Widget)>
get "cursor"(): $CursorType
set "scrollStep"(value: double)
get "scrollX"(): double
set "scrollX"(value: double)
get "scrollY"(): double
set "scrollY"(value: double)
get "offset"(): boolean
get "scrollStep"(): double
get "contentHeight"(): integer
set "onlyInteractWithWidgetsInside"(value: boolean)
get "onlyInteractWithWidgetsInside"(): boolean
get "contentWidth"(): integer
get "mouseOverAnyWidget"(): boolean
set "onlyRenderWidgetsInside"(value: boolean)
get "onlyRenderWidgetsInside"(): boolean
get "ingredientUnderMouse"(): $Optional<($PositionedIngredient)>
get "defaultScrollVertical"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Panel$$Type = ($Panel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Panel_ = $Panel$$Type;
}}
declare module "dev.ftb.mods.ftbteams.data.AbstractTeamBase" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$TeamRank, $TeamRank$$Type} from "dev.ftb.mods.ftbteams.api.TeamRank"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$TeamType, $TeamType$$Type} from "dev.ftb.mods.ftbteams.data.TeamType"
import {$TeamProperty, $TeamProperty$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import {$TeamMessage, $TeamMessage$$Type} from "dev.ftb.mods.ftbteams.api.TeamMessage"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$TeamPropertyCollection, $TeamPropertyCollection$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyCollection"
import {$Team, $Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"

export class $AbstractTeamBase implements $Team {


public "getDisplayName"(): StringJS
public "getDescription"(): StringJS
public "isValid"(): boolean
public "getName"(): $Component
public "getProperty"<T>(property: $TeamProperty$$Type<(T)>): T
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "setProperty"<T>(property: $TeamProperty$$Type<(T)>, value: T): void
public "getProperties"(): $TeamPropertyCollection
public "getId"(): $UUID
public "getType"(): $TeamType
public "markDirty"(): void
public "addMember"(id: $UUID$$Type, rank: $TeamRank$$Type): void
public "getMembers"(): $Set<($UUID)>
public "getColor"(): integer
public "removeMember"(id: $UUID$$Type): void
public "getShortName"(): StringJS
public "addMessage"(message: $TeamMessage$$Type): void
public "getColoredName"(): $Component
public "createParty"(description: StringJS, color: $Color4I$$Type): $Team
public "isFreeToJoin"(): boolean
public "isAllyOrBetter"(profile: $UUID$$Type): boolean
public "isInvited"(profile: $UUID$$Type): boolean
public "addMessages"(messages: $Collection$$Type<($TeamMessage$$Type)>): void
public "invalidateTeam"(): void
public "getTeamId"(): $UUID
public "isMember"(uuid: $UUID$$Type): boolean
public "getExtraData"(): $CompoundTag
public "getMessageHistory"(): $List<($TeamMessage)>
public "getRankForPlayer"(playerId: $UUID$$Type): $TeamRank
public "getPlayersByRank"(minRank: $TeamRank$$Type): $Map<($UUID), ($TeamRank)>
public "getTypeTranslationKey"(): StringJS
public "isOfficerOrBetter"(profile: $UUID$$Type): boolean
public "getMaxMessageHistorySize"(): integer
public "getOwner"(): $UUID
public "isPlayerTeam"(): boolean
public "isPartyTeam"(): boolean
public "isServerTeam"(): boolean
public "getTeamInfo"(): $List<($Component)>
public "isClientTeam"(): boolean
public "sendMessage"(arg0: $UUID$$Type, arg1: StringJS): void
public "sendMessage"(arg0: $UUID$$Type, arg1: $Component$$Type): void
public "getOnlineMembers"(): $Collection<($ServerPlayer)>
get "displayName"(): StringJS
get "description"(): StringJS
get "valid"(): boolean
get "name"(): $Component
get "properties"(): $TeamPropertyCollection
get "id"(): $UUID
get "type"(): $TeamType
get "members"(): $Set<($UUID)>
get "color"(): integer
get "shortName"(): StringJS
get "coloredName"(): $Component
get "freeToJoin"(): boolean
get "teamId"(): $UUID
get "extraData"(): $CompoundTag
get "messageHistory"(): $List<($TeamMessage)>
get "typeTranslationKey"(): StringJS
get "maxMessageHistorySize"(): integer
get "owner"(): $UUID
get "playerTeam"(): boolean
get "partyTeam"(): boolean
get "serverTeam"(): boolean
get "teamInfo"(): $List<($Component)>
get "clientTeam"(): boolean
get "onlineMembers"(): $Collection<($ServerPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTeamBase$$Type = ($AbstractTeamBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractTeamBase_ = $AbstractTeamBase$$Type;
}}
declare module "dev.ftb.mods.ftbquests.block.entity.IEditable" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"

export interface $IEditable {

 "hasPermissionToEdit"(arg0: $Player$$Type): boolean

(arg0: $Player): boolean
}

export namespace $IEditable {
const probejs$$marker: never
}
export class $IEditable$$Static implements $IEditable {


 "hasPermissionToEdit"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEditable$$Type = ((arg0: $Player) => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEditable_ = $IEditable$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.EntityFaceConfig" {
import {$SelectableResource, $SelectableResource$$Type} from "dev.ftb.mods.ftblibrary.config.ui.resource.SelectableResource"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ResourceConfigValue, $ResourceConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ResourceConfigValue"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $EntityFaceConfig extends $ResourceConfigValue<($EntityType<(any)>)> {
 "id": StringJS
static readonly "NONE": $EntityType<(any)>
static readonly "NULL_TEXT": $Component

constructor()

public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<($EntityType<(any)>)>
public "addInfo"(list: $TooltipList$$Type): void
public "onClicked"(clickedWidget: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
public "setResource"(selectable: $SelectableResource$$Type<($EntityType$$Type<(any)>)>): boolean
public "fixedResourceSize"(): $OptionalLong
public "getStringForGUI"(arg0: any): $Component
public "getStringForGUI"(v: $EntityType$$Type<(any)>): $Component
get "empty"(): boolean
get "resource"(): $SelectableResource<($EntityType<(any)>)>
set "resource"(value: $SelectableResource$$Type<($EntityType$$Type<(any)>)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityFaceConfig$$Type = ($EntityFaceConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityFaceConfig_ = $EntityFaceConfig$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.DropDownMenu" {
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ContextMenuItem, $ContextMenuItem$$Type} from "dev.ftb.mods.ftblibrary.ui.ContextMenuItem"
import {$List, $List$$Type} from "java.util.List"
import {$PopupMenu, $PopupMenu$$Type} from "dev.ftb.mods.ftblibrary.ui.PopupMenu"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Theme, $Theme$$Type} from "dev.ftb.mods.ftblibrary.ui.Theme"
import {$ModalPanel, $ModalPanel$$Type} from "dev.ftb.mods.ftblibrary.ui.ModalPanel"

export class $DropDownMenu extends $ModalPanel implements $PopupMenu {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(panel: $Panel$$Type, i: $List$$Type<($ContextMenuItem$$Type)>)

public "draw"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "addWidgets"(): void
public "alignWidgets"(): void
public "getModalPanel"(): $ModalPanel
public "scrollPanel"(scroll: double): boolean
public "mousePressed"(button: $MouseButton$$Type): boolean
public "setMaxHeightPercent"(maxHeightPercent: float): void
get "modalPanel"(): $ModalPanel
set "maxHeightPercent"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropDownMenu$$Type = ($DropDownMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DropDownMenu_ = $DropDownMenu$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag" {
import {$TagType, $TagType$$Type} from "net.minecraft.nbt.TagType"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$List, $List$$Type} from "java.util.List"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"

export class $SNBTCompoundTag extends $CompoundTag {
static readonly "CODEC": $Codec<($CompoundTag)>
static readonly "TYPE": $TagType<($CompoundTag)>
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($SNBTCompoundTag)>
readonly "tags": $Map<(StringJS), ($Tag)>

constructor()

public "getComment"(key: StringJS): StringJS
public "putNull"(key: StringJS): void
public "putBoolean"(key: StringJS, value: boolean): void
public static "of"(tag: $Tag$$Type): $SNBTCompoundTag
public "merge"(other: $CompoundTag$$Type, overwrite: boolean): $CompoundTag
public "comment"(key: StringJS, ...comment: (StringJS)[]): void
public "comment"(key: StringJS, comment: StringJS): void
public "copy"(): $Tag
public "getCompound"(arg0: StringJS): $CompoundTag
public "getList"<T extends $Tag>(key: StringJS, type: $Class$$Type<(T)>): $List<(T)>
public "isBoolean"(key: StringJS): boolean
public "singleLine"(): void
public "singleLine"(key: StringJS): void
public "putNumber"(key: StringJS, number: number): void
public "getNullableList"(key: StringJS, type: byte): $ListTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SNBTCompoundTag$$Type = ($SNBTCompoundTag);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SNBTCompoundTag_ = $SNBTCompoundTag$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.ContextMenu" {
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ContextMenuItem, $ContextMenuItem$$Type} from "dev.ftb.mods.ftblibrary.ui.ContextMenuItem"
import {$List, $List$$Type} from "java.util.List"
import {$PopupMenu, $PopupMenu$$Type} from "dev.ftb.mods.ftblibrary.ui.PopupMenu"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Theme, $Theme$$Type} from "dev.ftb.mods.ftblibrary.ui.Theme"
import {$ModalPanel, $ModalPanel$$Type} from "dev.ftb.mods.ftblibrary.ui.ModalPanel"

export class $ContextMenu extends $ModalPanel implements $PopupMenu {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(panel: $Panel$$Type, i: $List$$Type<($ContextMenuItem$$Type)>)

public "draw"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "setMaxRows"(maxRows: integer): void
public "drawBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "addWidgets"(): void
public "alignWidgets"(): void
public "getModalPanel"(): $ModalPanel
public "mousePressed"(button: $MouseButton$$Type): boolean
public "hasIcons"(): boolean
public "setDrawVerticalSeparators"(drawVerticalSeparators: boolean): void
set "maxRows"(value: integer)
get "modalPanel"(): $ModalPanel
set "drawVerticalSeparators"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextMenu$$Type = ($ContextMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextMenu_ = $ContextMenu$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.property.TeamPropertyArgument$Info$Template" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext, $CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$TeamPropertyArgument, $TeamPropertyArgument$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyArgument"
import {$TeamPropertyArgument$Info, $TeamPropertyArgument$Info$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyArgument$Info"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $TeamPropertyArgument$Info$Template implements $ArgumentTypeInfo$Template<($TeamPropertyArgument)> {

constructor(this$0: $TeamPropertyArgument$Info$$Type)

public "type"(): $ArgumentTypeInfo<($TeamPropertyArgument), (any)>
public "instantiate"(commandBuildContext: $CommandBuildContext$$Type): $TeamPropertyArgument
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyArgument$Info$Template$$Type = ($TeamPropertyArgument$Info$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyArgument$Info$Template_ = $TeamPropertyArgument$Info$Template$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.QuestObject" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ProgressChange, $ProgressChange$$Type} from "dev.ftb.mods.ftbquests.util.ProgressChange"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$QuestProgressEventData, $QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$QuestObjectBase, $QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"

export class $QuestObject extends $QuestObjectBase {
readonly "id": long

constructor(id: long)

public "getChildren"(): $Collection<($QuestObject)>
public "isVisible"(data: $TeamData$$Type): boolean
public "isSearchable"(data: $TeamData$$Type): boolean
public "isCompletedRaw"(data: $TeamData$$Type): boolean
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "cacheProgress"(): boolean
public "onStarted"(data: $QuestProgressEventData$$Type<(any)>): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(any)>): void
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getRelativeProgressFromChildren"(arg0: $TeamData$$Type): integer
public static "getRelativeProgressFromChildren"(progressSum: integer, count: integer): integer
public "getProgressColor"(data: $TeamData$$Type, dim: boolean): $Color4I
public "getProgressColor"(data: $TeamData$$Type): $Color4I
public "getRelatedQuest"(): $Quest
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "isOptionalForProgression"(): boolean
get "children"(): $Collection<($QuestObject)>
get "relatedQuest"(): $Quest
get "optionalForProgression"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestObject$$Type = ($QuestObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestObject_ = $QuestObject$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.reward.Reward" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$PositionedIngredient, $PositionedIngredient$$Type} from "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$RewardType, $RewardType$$Type} from "dev.ftb.mods.ftbquests.quest.reward.RewardType"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$QuestObjectType, $QuestObjectType$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ProgressChange, $ProgressChange$$Type} from "dev.ftb.mods.ftbquests.util.ProgressChange"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Button, $Button$$Type} from "dev.ftb.mods.ftblibrary.ui.Button"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeModHelper$Components, $RecipeModHelper$Components$$Type} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$RewardAutoClaim, $RewardAutoClaim$$Type} from "dev.ftb.mods.ftbquests.quest.reward.RewardAutoClaim"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$QuestObjectBase, $QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $Reward extends $QuestObjectBase {
readonly "id": long

constructor(id: long, q: $Quest$$Type)

public "getObjectType"(): $QuestObjectType
public "getType"(): $RewardType
public "claim"(arg0: $ServerPlayer$$Type, arg1: boolean): void
public "getQuestFile"(): $BaseQuestFile
public "isTeamReward"(): boolean
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "getParentID"(): long
public "editedFromGUI"(): void
public "createSubGroup"(group: $ConfigGroup$$Type): $ConfigGroup
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "deleteSelf"(): void
public "deleteChildren"(): void
public "getQuest"(): $Quest
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getButtonText"(): StringJS
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "onCreated"(): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getIngredient"(widget: $Widget$$Type): $Optional<($PositionedIngredient)>
public "onButtonClicked"(button: $Button$$Type, canClick: boolean): void
public "addMouseOverText"(list: $TooltipList$$Type): void
public "ignoreRewardBlocking"(): boolean
public "getQuestChapter"(): $Chapter
public "getExcludeFromClaimAll"(): boolean
public "isClaimAllHardcoded"(): boolean
public "automatedClaimPre"(blockEntity: $BlockEntity$$Type, items: $List$$Type<($ItemStack$$Type)>, random: $RandomSource$$Type, playerId: $UUID$$Type, player: $ServerPlayer$$Type): boolean
public "automatedClaimPost"(blockEntity: $BlockEntity$$Type, playerId: $UUID$$Type, player: $ServerPlayer$$Type): void
public "getAutoClaimType"(): $RewardAutoClaim
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "addTitleInMouseOverText"(): boolean
public "addAnyProtoTranslations"(tag: $CompoundTag$$Type): void
get "objectType"(): $QuestObjectType
get "type"(): $RewardType
get "questFile"(): $BaseQuestFile
get "teamReward"(): boolean
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "parentID"(): long
get "quest"(): $Quest
get "buttonText"(): StringJS
get "questChapter"(): $Chapter
get "excludeFromClaimAll"(): boolean
get "claimAllHardcoded"(): boolean
get "autoClaimType"(): $RewardAutoClaim
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reward$$Type = ($Reward);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Reward_ = $Reward$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.ListConfig" {
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$List, $List$$Type} from "java.util.List"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ConfigValue, $ConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ListConfig<E, CV extends $ConfigValue<(E)>> extends $ConfigValue<($List<(E)>)> {
static readonly "COLOR": $Color4I
static readonly "EMPTY_LIST": $Component
static readonly "NON_EMPTY_LIST": $Component
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor(t: CV)

public "getType"(): CV
public "copy"(v: $List$$Type<(E)>): $List<(E)>
public "copy"(arg0: any): any
public "getColor"(arg0: any): $Color4I
public "getColor"(v: $List$$Type<(E)>): $Color4I
public "addInfo"(l: $TooltipList$$Type): void
public "onClicked"(clickedWidget: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
public "getStringForGUI"(arg0: any): $Component
public "getStringForGUI"(v: $List$$Type<(E)>): $Component
get "type"(): CV
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListConfig$$Type<E, CV> = ($ListConfig<(E), (CV)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListConfig_<E, CV> = $ListConfig$$Type<(E), (CV)>;
}}
declare module "dev.ftb.mods.ftblibrary.math.PixelBuffer" {
import {$BufferedImage, $BufferedImage$$Type} from "java.awt.image.BufferedImage"
import {$InputStream, $InputStream$$Type} from "java.io.InputStream"
import {$ByteBuffer, $ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $PixelBuffer {

constructor(w: integer, h: integer)

public "getWidth"(): integer
public "getHeight"(): integer
public "getRGB"(startX: integer, startY: integer, w: integer, h: integer, p: (integer)[]): (integer)[]
public "getRGB"(x: integer, y: integer): integer
public "getPixels"(): (integer)[]
public "setPixels"(p: (integer)[]): void
public "setRGB"(startX: integer, startY: integer, w: integer, h: integer, rgbArray: (integer)[]): void
public "setRGB"(x: integer, y: integer, col: integer): void
public "setRGB"(startX: integer, startY: integer, buffer: $PixelBuffer$$Type): void
public "getSubimage"(x: integer, y: integer, w: integer, h: integer): $PixelBuffer
public "equals"(o: any): boolean
public "hashCode"(): integer
public "fill"(col: integer): void
public "fill"(startX: integer, startY: integer, w: integer, h: integer, col: integer): void
public static "from"(img: $BufferedImage$$Type): $PixelBuffer
public static "from"(stream: $InputStream$$Type): $PixelBuffer
public "copy"(): $PixelBuffer
public "toByteBuffer"(alpha: boolean): $ByteBuffer
public "toImage"(type: integer): $BufferedImage
get "width"(): integer
get "height"(): integer
get "pixels"(): (integer)[]
set "pixels"(value: (integer)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PixelBuffer$$Type = ($PixelBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PixelBuffer_ = $PixelBuffer$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.snbt.config.BaseValue" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$SNBTConfig, $SNBTConfig$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$BooleanSupplier, $BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$SNBTCompoundTag, $SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"

export class $BaseValue<T> implements $Comparable<($BaseValue<(T)>)> {
readonly "parent": $SNBTConfig
readonly "key": StringJS


public "excluded"<E extends $BaseValue<(T)>>(): E
public "get"(): T
public "toString"(): StringJS
public "compareTo"(o: $BaseValue$$Type<(T)>): integer
public "compareTo"(arg0: any): integer
public "getKey"(): StringJS
public "enabled"<E extends $BaseValue<(T)>>(e: $BooleanSupplier$$Type): E
public "set"(v: T): void
public "write"(arg0: $SNBTCompoundTag$$Type): void
public "read"(arg0: $SNBTCompoundTag$$Type): void
public "comment"<E extends $BaseValue<(T)>>(...s: (StringJS)[]): E
public "createClientConfig"(group: $ConfigGroup$$Type): void
public "withDisplayOrder"(order: integer): $BaseValue<(T)>
get "key"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseValue$$Type<T> = ($BaseValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseValue_<T> = $BaseValue$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftbteams.api.property.TeamPropertyArgument" {
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$TeamProperty, $TeamProperty$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$SuggestionsBuilder, $SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $TeamPropertyArgument implements $ArgumentType<($TeamProperty<(any)>)> {


public static "create"(): $TeamPropertyArgument
public static "get"(context: $CommandContext$$Type<($CommandSourceStack$$Type)>, name: StringJS): $TeamProperty<(any)>
public "parse"(arg0: $StringReader$$Type): any
public "listSuggestions"<S>(context: $CommandContext$$Type<(S)>, builder: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): $TeamProperty<(any)>
public "getExamples"(): $Collection<(StringJS)>
get "examples"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyArgument$$Type = ($TeamPropertyArgument);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyArgument_ = $TeamPropertyArgument$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.input.MouseButton" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $MouseButton {
static readonly "LEFT": $MouseButton
static readonly "NEXT": $MouseButton
static readonly "RIGHT": $MouseButton
static readonly "BACK": $MouseButton
readonly "id": integer
static readonly "MIDDLE": $MouseButton


public static "get"(i: integer): $MouseButton
public "hashCode"(): integer
public "getId"(): integer
public "isLeft"(): boolean
public "isRight"(): boolean
public "isMiddle"(): boolean
get "id"(): integer
get "left"(): boolean
get "right"(): boolean
get "middle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseButton$$Type = ($MouseButton);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseButton_ = $MouseButton$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.ConfigWithVariants" {
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ConfigValue, $ConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ConfigWithVariants<T> extends $ConfigValue<(T)> {
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor()

public "getIteration"(arg0: T, arg1: boolean): T
public "onClicked"(clickedWidget: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigWithVariants$$Type<T> = ($ConfigWithVariants<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigWithVariants_<T> = $ConfigWithVariants$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftblibrary.config.ConfigValue" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $ConfigValue<T> implements $Comparable<($ConfigValue<(T)>)> {
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor()

public "getPath"(): StringJS
public "isEqual"(v1: T, v2: T): boolean
public "getDefaultValue"(): T
public "getName"(): StringJS
public "compareTo"(o: $ConfigValue$$Type<(T)>): integer
public "compareTo"(arg0: any): integer
public "getValue"(): T
public static "info"(key: StringJS, value: any): $Component
public "init"(group: $ConfigGroup$$Type, id: StringJS, value: T, setter: $Consumer$$Type<(T)>, defaultValue: T): $ConfigValue<(T)>
public "setValue"(value: T): void
public "copy"(value: T): T
public "setIcon"(i: $Icon$$Type): $ConfigValue<(T)>
public "getColor"(): $Color4I
public "getColor"(v: T): $Color4I
public "getTooltip"(): StringJS
public "getGroup"(): $ConfigGroup
public "getIcon"(v: T): $Icon
public "getIcon"(): $Icon
public "getNameKey"(): StringJS
public "addInfo"(list: $TooltipList$$Type): void
public "onClicked"(arg0: $Widget$$Type, arg1: $MouseButton$$Type, arg2: $ConfigCallback$$Type): void
public "setNameKey"(key: StringJS): $ConfigValue<(T)>
public "getCanEdit"(): boolean
public "setCanEdit"(e: boolean): $ConfigValue<(T)>
public "applyValue"(): void
public "setOrder"(o: integer): $ConfigValue<(T)>
public "setDefaultValue"(defaultValue: T): void
public "setCurrentValue"(v: T): boolean
public "getStringForGUI"(v: T): $Component
public "getStringForGUI"(): $Component
get "path"(): StringJS
get "defaultValue"(): T
get "name"(): StringJS
get "value"(): T
set "value"(value: T)
set "icon"(value: $Icon$$Type)
get "color"(): $Color4I
get "tooltip"(): StringJS
get "group"(): $ConfigGroup
get "icon"(): $Icon
get "nameKey"(): StringJS
set "nameKey"(value: StringJS)
get "canEdit"(): boolean
set "canEdit"(value: boolean)
set "order"(value: integer)
set "defaultValue"(value: T)
set "currentValue"(value: T)
get "stringForGUI"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigValue$$Type<T> = ($ConfigValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigValue_<T> = $ConfigValue$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftbteams.data.TeamArgument" {
import {$Suggestions, $Suggestions$$Type} from "com.mojang.brigadier.suggestion.Suggestions"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$StringReader, $StringReader$$Type} from "com.mojang.brigadier.StringReader"
import {$Dynamic2CommandExceptionType, $Dynamic2CommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType"
import {$TeamArgumentProvider, $TeamArgumentProvider$$Type} from "dev.ftb.mods.ftbteams.data.TeamArgumentProvider"
import {$SuggestionsBuilder, $SuggestionsBuilder$$Type} from "com.mojang.brigadier.suggestion.SuggestionsBuilder"
import {$DynamicCommandExceptionType, $DynamicCommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.DynamicCommandExceptionType"
import {$CommandContext, $CommandContext$$Type} from "com.mojang.brigadier.context.CommandContext"
import {$SimpleCommandExceptionType, $SimpleCommandExceptionType$$Type} from "com.mojang.brigadier.exceptions.SimpleCommandExceptionType"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$TeamType, $TeamType$$Type} from "dev.ftb.mods.ftbteams.data.TeamType"
import {$Team, $Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $TeamArgument implements $ArgumentType<($TeamArgumentProvider)> {
static readonly "NOT_MEMBER": $Dynamic2CommandExceptionType
static readonly "OWNER_CANT_LEAVE": $SimpleCommandExceptionType
static readonly "NO_PERMISSION": $SimpleCommandExceptionType
static readonly "NAME_TOO_SHORT": $SimpleCommandExceptionType
static readonly "NOT_IN_PARTY": $SimpleCommandExceptionType
static readonly "CANT_EDIT": $DynamicCommandExceptionType
static readonly "CANT_KICK_OWNER": $SimpleCommandExceptionType
static readonly "TEAM_NOT_FOUND": $DynamicCommandExceptionType
static readonly "NOT_OFFICER": $Dynamic2CommandExceptionType
static readonly "PLAYER_IN_PARTY": $DynamicCommandExceptionType
static readonly "NOT_INVITED": $DynamicCommandExceptionType
static readonly "API_OVERRIDE": $SimpleCommandExceptionType
static readonly "ALREADY_IN_PARTY": $SimpleCommandExceptionType


public static "create"(): $TeamArgument
public static "create"(type: $TeamType$$Type): $TeamArgument
public static "get"(context: $CommandContext$$Type<($CommandSourceStack$$Type)>, name: StringJS): $Team
public "parse"(arg0: $StringReader$$Type): any
public "listSuggestions"<S>(commandContext: $CommandContext$$Type<(S)>, builder: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): $TeamArgumentProvider
public "getExamples"(): $Collection<(StringJS)>
get "examples"(): $Collection<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamArgument$$Type = ($TeamArgument);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamArgument_ = $TeamArgument$$Type;
}}
declare module "dev.ftb.mods.ftbchunks.core.BiomeFTBC" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BiomeFTBC {

 "setFTBCBiomeColorIndex"(arg0: integer): void
 "getFTBCBiomeColorIndex"(): integer
set "fTBCBiomeColorIndex"(value: integer)
get "fTBCBiomeColorIndex"(): integer
}

export namespace $BiomeFTBC {
const probejs$$marker: never
}
export class $BiomeFTBC$$Static implements $BiomeFTBC {


 "setFTBCBiomeColorIndex"(arg0: integer): void
 "getFTBCBiomeColorIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeFTBC$$Type = ($BiomeFTBC);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeFTBC_ = $BiomeFTBC$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.snbt.config.NumberValue" {
import {$SNBTConfig, $SNBTConfig$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig"
import {$BaseValue, $BaseValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.BaseValue"
import {$SNBTCompoundTag, $SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"

export class $NumberValue<T extends number> extends $BaseValue<(T)> {
readonly "parent": $SNBTConfig
readonly "key": StringJS


public "range"<E extends $BaseValue<(T)>>(min: T, max: T): E
public "write"(tag: $SNBTCompoundTag$$Type): void
public "fader"<E extends $BaseValue<(T)>>(): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumberValue$$Type<T> = ($NumberValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NumberValue_<T> = $NumberValue$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftblibrary.config.NumberConfig" {
import {$ConfigFromString, $ConfigFromString$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigFromString"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $NumberConfig<T extends number> extends $ConfigFromString<(T)> {
readonly "min": T
readonly "max": T
static readonly "COLOR": $Color4I
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor(mn: T, mx: T)

public "canScroll"(): boolean
public "getColor"(arg0: any): $Color4I
public "getColor"(v: T): $Color4I
public "fader"(v: boolean): $NumberConfig<(T)>
public "getStringForGUI"(arg0: any): $Component
public "getStringForGUI"(v: T): $Component
public "withScrollIncrement"(increment: T): $NumberConfig<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NumberConfig$$Type<T> = ($NumberConfig<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NumberConfig_<T> = $NumberConfig$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftbchunks.core.BlockStateFTBC" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockStateFTBC {

 "getFTBCIsWater"(): boolean

(): boolean
get "fTBCIsWater"(): boolean
}

export namespace $BlockStateFTBC {
const probejs$$marker: never
}
export class $BlockStateFTBC$$Static implements $BlockStateFTBC {


 "getFTBCIsWater"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateFTBC$$Type = (() => boolean);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateFTBC_ = $BlockStateFTBC$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.EnumConfig" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$ConfigWithVariants, $ConfigWithVariants$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigWithVariants"
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $EnumConfig<E> extends $ConfigWithVariants<(E)> {
readonly "nameMap": $NameMap<(E)>
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor(nm: $NameMap$$Type<(E)>)

public "getColor"(v: E): $Color4I
public "getIcon"(v: E): $Icon
public "addInfo"(list: $TooltipList$$Type): void
public "getIteration"(currentValue: E, next: boolean): E
public "onClicked"(clickedWidget: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
public "getStringForGUI"(v: E): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumConfig$$Type<E> = ($EnumConfig<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumConfig_<E> = $EnumConfig$$Type<(E)>;
}}
declare module "dev.ftb.mods.ftblibrary.ui.ModalPanel" {
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"

export class $ModalPanel extends $Panel {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(panel: $Panel$$Type)

public "setExtraZlevel"(extraZlevel: integer): void
public "checkMouseOver"(mouseX: integer, mouseY: integer): boolean
public "getExtraZlevel"(): integer
set "extraZlevel"(value: integer)
get "extraZlevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModalPanel$$Type = ($ModalPanel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModalPanel_ = $ModalPanel$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.snbt.config.StringValue" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Pattern, $Pattern$$Type} from "java.util.regex.Pattern"
import {$SNBTConfig, $SNBTConfig$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig"
import {$BaseValue, $BaseValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.BaseValue"
import {$SNBTCompoundTag, $SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"

export class $StringValue extends $BaseValue<(StringJS)> {
readonly "parent": $SNBTConfig
readonly "key": StringJS


public "pattern"(p: $Pattern$$Type): $StringValue
public "set"(arg0: any): void
public "set"(v: StringJS): void
public "write"(tag: $SNBTCompoundTag$$Type): void
public "read"(tag: $SNBTCompoundTag$$Type): void
public "createClientConfig"(group: $ConfigGroup$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringValue$$Type = ($StringValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringValue_ = $StringValue$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.QuestLink" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$QuestObjectType, $QuestObjectType$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Movable, $Movable$$Type} from "dev.ftb.mods.ftbquests.quest.Movable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Excludable, $Excludable$$Type} from "dev.ftb.mods.ftbquests.quest.Excludable"

export class $QuestLink extends $QuestObject implements $Movable, $Excludable {
readonly "id": long

constructor(id: long, chapter: $Chapter$$Type, linkId: long)

public "getWidth"(): double
public "getHeight"(): double
public "getShape"(): StringJS
public "getObjectType"(): $QuestObjectType
public "getY"(): double
public "getX"(): double
public "onMoved"(newX: double, newY: double, newChapterId: long): void
public "setPosition"(qx: double, qy: double): void
public "isVisible"(data: $TeamData$$Type): boolean
public "getQuestFile"(): $BaseQuestFile
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "getParentID"(): long
public "editedFromGUI"(): void
public "getMovableID"(): long
public "linksTo"(quest: $Quest$$Type): boolean
public "deleteSelf"(): void
public "getQuest"(): $Optional<($Quest)>
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getChapter"(): $Chapter
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "onCreated"(): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "copyToClipboard"(): void
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
public "initiateMoveClientSide"(to: $Chapter$$Type, x: double, y: double): void
public "getRelatedQuest"(): $Quest
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "isQuestObjectExcluded"(teamData: $TeamData$$Type): boolean
public "getRotation"(): double
public "getTitle"(): $Component
public "drawMoved"(graphics: $GuiGraphics$$Type): void
public "isAlignToCorner"(): boolean
public "getId"(): long
get "width"(): double
get "height"(): double
get "shape"(): StringJS
get "objectType"(): $QuestObjectType
get "y"(): double
get "x"(): double
get "questFile"(): $BaseQuestFile
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "parentID"(): long
get "movableID"(): long
get "quest"(): $Optional<($Quest)>
get "chapter"(): $Chapter
get "relatedQuest"(): $Quest
get "rotation"(): double
get "title"(): $Component
get "alignToCorner"(): boolean
get "id"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestLink$$Type = ($QuestLink);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestLink_ = $QuestLink$$Type;
}}
declare module "dev.ftb.mods.ftbquests.block.LootCrateOpenerBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootCrateOpenerBlockEntity, $LootCrateOpenerBlockEntity$$Type} from "dev.ftb.mods.ftbquests.block.entity.LootCrateOpenerBlockEntity"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LootCrateOpenerBlock extends $BaseEntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "PROPS": $BlockBehaviour$Properties
 "hasCollision": boolean

constructor(props: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(level: $Level$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, livingEntity: $LivingEntity$$Type, itemStack: $ItemStack$$Type): void
public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public static "blockEntityProvider"(): $BlockEntityType$BlockEntitySupplier<($LootCrateOpenerBlockEntity)>
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCrateOpenerBlock$$Type = ($LootCrateOpenerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootCrateOpenerBlock_ = $LootCrateOpenerBlock$$Type;
}}
declare module "dev.ftb.mods.ftbteams.data.TeamType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$AbstractTeam, $AbstractTeam$$Type} from "dev.ftb.mods.ftbteams.data.AbstractTeam"
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Team, $Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"
import {$ChatFormatting, $ChatFormatting$$Type} from "net.minecraft.ChatFormatting"
import {$TeamManagerImpl, $TeamManagerImpl$$Type} from "dev.ftb.mods.ftbteams.data.TeamManagerImpl"

export class $TeamType extends $Enum<($TeamType)> implements $StringRepresentable {
static readonly "PLAYER": $TeamType
static readonly "PARTY": $TeamType
static readonly "SERVER": $TeamType


public static "values"(): ($TeamType)[]
public static "valueOf"(name: StringJS): $TeamType
public "matches"(team: $Team$$Type): boolean
public "getColor"(): $ChatFormatting
public "createTeam"(manager: $TeamManagerImpl$$Type, id: $UUID$$Type): $AbstractTeam
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "color"(): $ChatFormatting
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamType$$Type = (("player") | ("party") | ("server"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamType_ = $TeamType$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.property.TeamPropertyType" {
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$TeamProperty, $TeamProperty$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$PrivacyMode, $PrivacyMode$$Type} from "dev.ftb.mods.ftbteams.api.property.PrivacyMode"

export class $TeamPropertyType<T> {
static readonly "STRING_LIST": $TeamPropertyType<($List<(StringJS)>)>
static readonly "ENUM": $TeamPropertyType<(StringJS)>
static readonly "PRIVACY_MODE": $TeamPropertyType<($PrivacyMode)>
static readonly "COLOR": $TeamPropertyType<($Color4I)>
static readonly "STRING": $TeamPropertyType<(StringJS)>
static readonly "DOUBLE": $TeamPropertyType<(double)>
static readonly "BOOLEAN": $TeamPropertyType<(boolean)>
static readonly "INT": $TeamPropertyType<(integer)>


public static "write"(buf: $RegistryFriendlyByteBuf$$Type, p: $TeamProperty$$Type<(any)>): void
public static "read"(buf: $RegistryFriendlyByteBuf$$Type): $TeamProperty<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyType$$Type<T> = ($TeamPropertyType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyType_<T> = $TeamPropertyType$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftbquests.quest.reward.RewardType$GuiProvider" {
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $RewardType$GuiProvider {

 "openCreationGui"(arg0: $Panel$$Type, arg1: $Quest$$Type, arg2: $Consumer$$Type<($Reward)>): void

(arg0: $Panel, arg1: $Quest, arg2: $Consumer<($Reward)>): void
}

export namespace $RewardType$GuiProvider {
const probejs$$marker: never
}
export class $RewardType$GuiProvider$$Static implements $RewardType$GuiProvider {


 "openCreationGui"(arg0: $Panel$$Type, arg1: $Quest$$Type, arg2: $Consumer$$Type<($Reward)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardType$GuiProvider$$Type = ((arg0: $Panel, arg1: $Quest, arg2: $Consumer<($Reward)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewardType$GuiProvider_ = $RewardType$GuiProvider$$Type;
}}
declare module "dev.ftb.mods.ftbquests.block.entity.QuestBarrierBlockEntity" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$BaseBarrierBlockEntity, $BaseBarrierBlockEntity$$Type} from "dev.ftb.mods.ftbquests.block.entity.BaseBarrierBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $QuestBarrierBlockEntity extends $BaseBarrierBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "isOpen"(player: $Player$$Type): boolean
public "setQuest"(quest: $Quest$$Type): void
public "getQuest"(): $Quest
public "updateFromString"(objStr: StringJS): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
set "quest"(value: $Quest$$Type)
get "quest"(): $Quest
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestBarrierBlockEntity$$Type = ($QuestBarrierBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestBarrierBlockEntity_ = $QuestBarrierBlockEntity$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.input.Key" {
import {$KeyModifiers, $KeyModifiers$$Type} from "dev.ftb.mods.ftblibrary.ui.input.KeyModifiers"
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"

export class $Key {
readonly "keyCode": integer
readonly "modifiers": $KeyModifiers
readonly "scanCode": integer

constructor(k: integer, s: integer, m: integer)

public "is"(k: integer): boolean
public "enter"(): boolean
public "copy"(): boolean
public "cut"(): boolean
public "esc"(): boolean
public "paste"(): boolean
public "escOrInventory"(): boolean
public "selectAll"(): boolean
public "backspace"(): boolean
public "deselectAll"(): boolean
public "getInputMapping"(): $InputConstants$Key
get "inputMapping"(): $InputConstants$Key
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Key$$Type = ($Key);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Key_ = $Key$$Type;
}}
declare module "dev.ftb.mods.ftbteams.data.TeamManagerImpl" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ServerTeam, $ServerTeam$$Type} from "dev.ftb.mods.ftbteams.data.ServerTeam"
import {$PlayerTeam, $PlayerTeam$$Type} from "dev.ftb.mods.ftbteams.data.PlayerTeam"
import {$PartyTeam, $PartyTeam$$Type} from "dev.ftb.mods.ftbteams.data.PartyTeam"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$SNBTCompoundTag, $SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"
import {$AbstractTeam, $AbstractTeam$$Type} from "dev.ftb.mods.ftbteams.data.AbstractTeam"
import {$TeamManager, $TeamManager$$Type} from "dev.ftb.mods.ftbteams.api.TeamManager"
import {$LevelResource, $LevelResource$$Type} from "net.minecraft.world.level.storage.LevelResource"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$Pair, $Pair$$Type} from "org.apache.commons.lang3.tuple.Pair"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Team, $Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $TeamManagerImpl implements $TeamManager {
static readonly "FOLDER_NAME": $LevelResource
static "INSTANCE": $TeamManagerImpl

constructor(s: $MinecraftServer$$Type)

public "load"(): void
public "getId"(): $UUID
public "markDirty"(): void
public "serializeNBT"(): $SNBTCompoundTag
public "getServer"(): $MinecraftServer
public "syncToAll"(...teams: ($Team$$Type)[]): void
public "saveNow"(): void
public "getTeamMap"(): $Map<($UUID), ($AbstractTeam)>
public "createParty"(playerId: $UUID$$Type, player: $ServerPlayer$$Type, name: StringJS, description: StringJS, color: $Color4I$$Type): $Pair<(integer), ($PartyTeam)>
public "createParty"(player: $ServerPlayer$$Type, name: StringJS): $Pair<(integer), ($PartyTeam)>
public "getTeams"(): $Collection<($Team)>
public "getTeamByName"(name: StringJS): $Optional<($Team)>
public "getTeamByID"(teamId: $UUID$$Type): $Optional<($Team)>
public "getPlayerName"(id: $UUID$$Type): $Component
public "getExtraData"(): $CompoundTag
public "playerLoggedIn"(player: $ServerPlayer$$Type, id: $UUID$$Type, name: StringJS): void
public "playerLoggedOut"(player: $ServerPlayer$$Type): void
public "getTeamNameMap"(): $Map<(StringJS), ($Team)>
public "createServer"(source: $CommandSourceStack$$Type, name: StringJS): $Pair<(integer), ($ServerTeam)>
public "arePlayersInSameTeam"(id1: $UUID$$Type, id2: $UUID$$Type): boolean
public "getTeamForPlayerID"(uuid: $UUID$$Type): $Optional<($Team)>
public "getKnownPlayerTeams"(): $Map<($UUID), ($Team)>
public "createPartyTeam"(player: $ServerPlayer$$Type, name: StringJS, description: StringJS, color: $Color4I$$Type): $Team
public "setChatRedirected"(player: $ServerPlayer$$Type, redirect: boolean): void
public "isChatRedirected"(player: $ServerPlayer$$Type): boolean
public "getTeamForPlayer"(player: $ServerPlayer$$Type): $Optional<($Team)>
public "syncAllToPlayer"(player: $ServerPlayer$$Type, selfTeam: $AbstractTeam$$Type): void
public "getPlayerTeamForPlayerID"(uuid: $UUID$$Type): $Optional<($Team)>
public "getPersonalTeamForPlayerID"(uuid: $UUID$$Type): $PlayerTeam
get "id"(): $UUID
get "server"(): $MinecraftServer
get "teamMap"(): $Map<($UUID), ($AbstractTeam)>
get "teams"(): $Collection<($Team)>
get "extraData"(): $CompoundTag
get "teamNameMap"(): $Map<(StringJS), ($Team)>
get "knownPlayerTeams"(): $Map<($UUID), ($Team)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamManagerImpl$$Type = ($TeamManagerImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamManagerImpl_ = $TeamManagerImpl$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.BooleanConfig" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$ConfigWithVariants, $ConfigWithVariants$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigWithVariants"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $BooleanConfig extends $ConfigWithVariants<(boolean)> {
static readonly "TRUE_TEXT": $Component
static readonly "FALSE_TEXT": $Component
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor()

public "getColor"(arg0: any): $Color4I
public "getColor"(v: boolean): $Color4I
public "getIcon"(arg0: any): $Icon
public "getIcon"(v: boolean): $Icon
public "getIteration"(arg0: any, arg1: boolean): any
public "getIteration"(currentValue: boolean, next: boolean): boolean
public "getStringForGUI"(arg0: any): $Component
public "getStringForGUI"(v: boolean): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanConfig$$Type = ($BooleanConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BooleanConfig_ = $BooleanConfig$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.icon.Icon" {
import {$Drawable, $Drawable$$Type} from "dev.ftb.mods.ftblibrary.icon.Drawable"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$PixelBuffer, $PixelBuffer$$Type} from "dev.ftb.mods.ftblibrary.math.PixelBuffer"

export class $Icon implements $Drawable {
static readonly "CODEC": $Codec<($Icon)>
static readonly "STRING_CODEC": $Codec<($Icon)>
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Icon)>

constructor()

public "equals"(o: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "empty"(): $Color4I
public "copy"(): $Icon
public "withColor"(color: $Color4I$$Type): $Icon
public static "getIcon"(json: $JsonElement$$Type): $Icon
public static "getIcon"(id: StringJS): $Icon
public static "getIcon"(id: $ResourceLocation$$Type): $Icon
public "getJson"(): $JsonElement
public "withUV"(u0: float, v0: float, u1: float, v1: float): $Icon
public "withUV"(x: float, y: float, w: float, h: float, tw: float, th: float): $Icon
public "aspectRatio"(): double
public "withTint"(color: $Color4I$$Type): $Icon
public "withBorder"(color: $Color4I$$Type, roundEdges: boolean): $Icon
public "hasPixelBuffer"(): boolean
public "withPadding"(padding: integer): $Icon
public "combineWith"(...icons: ($Icon$$Type)[]): $Icon
public "combineWith"(icon: $Icon$$Type): $Icon
public "getIngredient"(): any
public "createPixelBuffer"(): $PixelBuffer
public "getPixelBufferFrameCount"(): integer
public "draw"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "draw3D"(graphics: $GuiGraphics$$Type): void
public "drawStatic"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
get "json"(): $JsonElement
get "ingredient"(): any
get "pixelBufferFrameCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Icon$$Type = ($Icon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Icon_ = $Icon$$Type;
}}
declare module "dev.ftb.mods.ftbquests.item.TaskScreenConfiguratorItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GlobalPos, $GlobalPos$$Type} from "net.minecraft.core.GlobalPos"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $TaskScreenConfiguratorItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(ctx: $UseOnContext$$Type): $InteractionResult
public static "readBlockPos"(stack: $ItemStack$$Type): $Optional<($GlobalPos)>
public static "storeBlockPos"(stack: $ItemStack$$Type, level: $Level$$Type, clickedPos: $BlockPos$$Type): void
public "appendHoverText"(itemStack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, list: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenConfiguratorItem$$Type = ($TaskScreenConfiguratorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaskScreenConfiguratorItem_ = $TaskScreenConfiguratorItem$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.snbt.config.BooleanValue" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$SNBTConfig, $SNBTConfig$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig"
import {$BaseValue, $BaseValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.BaseValue"
import {$SNBTCompoundTag, $SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"

export class $BooleanValue extends $BaseValue<(boolean)> {
readonly "parent": $SNBTConfig
readonly "key": StringJS


public "write"(tag: $SNBTCompoundTag$$Type): void
public "read"(tag: $SNBTCompoundTag$$Type): void
public "toggle"(): void
public "createClientConfig"(group: $ConfigGroup$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanValue$$Type = ($BooleanValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BooleanValue_ = $BooleanValue$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.ContextMenuItem" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$List, $List$$Type} from "java.util.List"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$Button, $Button$$Type} from "dev.ftb.mods.ftblibrary.ui.Button"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ContextMenu, $ContextMenu$$Type} from "dev.ftb.mods.ftblibrary.ui.ContextMenu"
import {$Theme, $Theme$$Type} from "dev.ftb.mods.ftblibrary.ui.Theme"

export class $ContextMenuItem implements $Comparable<($ContextMenuItem)> {
static readonly "SEPARATOR": $ContextMenuItem

constructor(title: $Component$$Type, icon: $Icon$$Type, callback: $Consumer$$Type<($Button)>)

public static "separator"(): $ContextMenuItem
public "compareTo"(o: $ContextMenuItem$$Type): integer
public "compareTo"(arg0: any): integer
public "isEnabled"(): boolean
public static "title"(title: $Component$$Type): $ContextMenuItem
public "drawIcon"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "setEnabled"(enabled: boolean): $ContextMenuItem
public "getIcon"(): $Icon
public "getTitle"(): $Component
public static "subMenu"(title: $Component$$Type, icon: $Icon$$Type, subItems: $List$$Type<($ContextMenuItem$$Type)>): $ContextMenuItem
public "onClicked"(button: $Button$$Type, panel: $Panel$$Type, mouseButton: $MouseButton$$Type): void
public "getYesNoText"(): $Component
public "isClickable"(): boolean
public "createWidget"(panel: $ContextMenu$$Type): $Widget
public "addMouseOverText"(list: $TooltipList$$Type): void
public "setCloseMenu"(v: boolean): $ContextMenuItem
public "setYesNoText"(s: $Component$$Type): $ContextMenuItem
get "enabled"(): boolean
set "enabled"(value: boolean)
get "icon"(): $Icon
get "yesNoText"(): $Component
get "clickable"(): boolean
set "closeMenu"(value: boolean)
set "yesNoText"(value: $Component$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextMenuItem$$Type = ($ContextMenuItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContextMenuItem_ = $ContextMenuItem$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.Chapter" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$ChapterGroup, $ChapterGroup$$Type} from "dev.ftb.mods.ftbquests.quest.ChapterGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$QuestObjectType, $QuestObjectType$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ProgressionMode, $ProgressionMode$$Type} from "dev.ftb.mods.ftbquests.quest.ProgressionMode"
import {$List, $List$$Type} from "java.util.List"
import {$Movable, $Movable$$Type} from "dev.ftb.mods.ftbquests.quest.Movable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$QuestLink, $QuestLink$$Type} from "dev.ftb.mods.ftbquests.quest.QuestLink"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$QuestProgressEventData, $QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$ChapterImage, $ChapterImage$$Type} from "dev.ftb.mods.ftbquests.quest.ChapterImage"

export class $Chapter extends $QuestObject {
readonly "file": $BaseQuestFile
readonly "id": long

constructor(id: long, file: $BaseQuestFile$$Type, group: $ChapterGroup$$Type)
constructor(id: long, file: $BaseQuestFile$$Type, group: $ChapterGroup$$Type, filename: StringJS)

public "getPath"(): $Optional<(StringJS)>
public "getIndex"(): integer
public "getChildren"(): $Collection<($QuestObject)>
public "getObjectType"(): $QuestObjectType
public "isVisible"(data: $TeamData$$Type): boolean
public "getGroup"(): $ChapterGroup
public "getQuestFile"(): $BaseQuestFile
public "addImage"(image: $ChapterImage$$Type): void
public "removeImage"(image: $ChapterImage$$Type): void
public "getAutofocus"(): $Optional<($Movable)>
public "setAutofocus"(id: long): void
public "isAutofocus"(id: long): boolean
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "addQuestLink"(link: $QuestLink$$Type): void
public "addQuest"(quest: $Quest$$Type): void
public "getRawSubtitle"(): $List<(StringJS)>
public "setRawSubtitle"(rawSubtitle: $List$$Type<(StringJS)>): void
public "removeQuest"(quest: $Quest$$Type): void
public "consumeItems"(): boolean
public "onStarted"(data: $QuestProgressEventData$$Type<(any)>): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(any)>): void
public "deleteSelf"(): void
public "deleteChildren"(): void
public "getQuests"(): $List<($Quest)>
public "getQuestLinks"(): $List<($QuestLink)>
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "hasGroup"(): boolean
public "onCreated"(): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getImages"(): $List<($ChapterImage)>
public "getFilename"(): StringJS
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
public "getDefaultQuestSize"(): double
public "isDefaultRepeatable"(): boolean
public "clearCachedData"(): void
public "getQuestChapter"(): $Chapter
public "isAlwaysInvisible"(): boolean
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "getDefaultQuestShape"(): StringJS
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "getProgressionMode"(): $ProgressionMode
public "setDefaultQuestShape"(defaultQuestShape: StringJS): void
public "getDefaultMinWidth"(): integer
public "removeQuestLink"(link: $QuestLink$$Type): void
public "hasAnyVisibleChildren"(): boolean
public "isRequireSequentialTasks"(): boolean
public "hideQuestUntilDepsComplete"(): boolean
public "isHideQuestUntilDepsVisible"(): boolean
public "hideQuestDetailsUntilStartable"(): boolean
get "path"(): $Optional<(StringJS)>
get "index"(): integer
get "children"(): $Collection<($QuestObject)>
get "objectType"(): $QuestObjectType
get "group"(): $ChapterGroup
get "questFile"(): $BaseQuestFile
get "autofocus"(): $Optional<($Movable)>
set "autofocus"(value: long)
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "rawSubtitle"(): $List<(StringJS)>
set "rawSubtitle"(value: $List$$Type<(StringJS)>)
get "quests"(): $List<($Quest)>
get "questLinks"(): $List<($QuestLink)>
get "images"(): $List<($ChapterImage)>
get "filename"(): StringJS
get "defaultQuestSize"(): double
get "defaultRepeatable"(): boolean
get "questChapter"(): $Chapter
get "alwaysInvisible"(): boolean
get "defaultQuestShape"(): StringJS
get "progressionMode"(): $ProgressionMode
set "defaultQuestShape"(value: StringJS)
get "defaultMinWidth"(): integer
get "requireSequentialTasks"(): boolean
get "hideQuestUntilDepsVisible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Chapter$$Type = ($Chapter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Chapter_ = $Chapter$$Type;
}}
declare module "dev.ftb.mods.ftbteams.data.PlayerTeam" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$TeamRank, $TeamRank$$Type} from "dev.ftb.mods.ftbteams.api.TeamRank"
import {$AbstractTeam, $AbstractTeam$$Type} from "dev.ftb.mods.ftbteams.data.AbstractTeam"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$TeamType, $TeamType$$Type} from "dev.ftb.mods.ftbteams.data.TeamType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$KnownClientPlayer, $KnownClientPlayer$$Type} from "dev.ftb.mods.ftbteams.api.client.KnownClientPlayer"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Team, $Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"
import {$TeamManagerImpl, $TeamManagerImpl$$Type} from "dev.ftb.mods.ftbteams.data.TeamManagerImpl"

export class $PlayerTeam extends $AbstractTeam {

constructor(manager: $TeamManagerImpl$$Type, id: $UUID$$Type)

public "getType"(): $TeamType
public "getPlayer"(): $ServerPlayer
public "deserializeNBT"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "hasTeam"(): boolean
public "updatePresence"(): void
public "isPlayerTeam"(): boolean
public "createParty"(playerId: $UUID$$Type, player: $ServerPlayer$$Type, name: StringJS, description: StringJS, color: integer, invited: $Set$$Type<($GameProfile$$Type)>): $Team
public "isOnline"(): boolean
public "setOnline"(online: boolean): void
public "getTeamId"(): $UUID
public "getPlayerName"(): StringJS
public "setPlayerName"(playerName: StringJS): void
public "createClientPlayer"(): $KnownClientPlayer
public "getRankForPlayer"(playerId: $UUID$$Type): $TeamRank
public "getOnlineMembers"(): $List<($ServerPlayer)>
public "getEffectiveTeam"(): $AbstractTeam
public "setEffectiveTeam"(effectiveTeam: $AbstractTeam$$Type): void
get "type"(): $TeamType
get "player"(): $ServerPlayer
get "playerTeam"(): boolean
get "online"(): boolean
set "online"(value: boolean)
get "teamId"(): $UUID
get "playerName"(): StringJS
set "playerName"(value: StringJS)
get "onlineMembers"(): $List<($ServerPlayer)>
get "effectiveTeam"(): $AbstractTeam
set "effectiveTeam"(value: $AbstractTeam$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerTeam$$Type = ($PlayerTeam);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerTeam_ = $PlayerTeam$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.IScreenWrapper" {
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$BaseScreen, $BaseScreen$$Type} from "dev.ftb.mods.ftblibrary.ui.BaseScreen"
import {$IOpenableScreen, $IOpenableScreen$$Type} from "dev.ftb.mods.ftblibrary.ui.IOpenableScreen"

export interface $IScreenWrapper extends $IOpenableScreen {

 "getGui"(): $BaseScreen
 "closeGui"(openPrevScreen: boolean): void
 "openGui"(): void
 "run"(): void
 "openGuiLater"(): void
 "openAfter"(runnable: $Runnable$$Type): $Runnable
 "closeGui"(): void
 "closeContextMenu"(): void

(): $BaseScreen$$Type
get "gui"(): $BaseScreen
}

export namespace $IScreenWrapper {
const probejs$$marker: never
}
export class $IScreenWrapper$$Static implements $IScreenWrapper {


 "getGui"(): $BaseScreen
 "closeGui"(openPrevScreen: boolean): void
 "openGui"(): void
 "run"(): void
 "openGuiLater"(): void
 "openAfter"(runnable: $Runnable$$Type): $Runnable
 "closeGui"(): void
 "closeContextMenu"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenWrapper$$Type = (() => $BaseScreen$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenWrapper_ = $IScreenWrapper$$Type;
}}
declare module "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $RecipeModHelper$Components extends $Enum<($RecipeModHelper$Components)> {
static readonly "LOOT_CRATES": $RecipeModHelper$Components
static readonly "QUESTS": $RecipeModHelper$Components


public static "values"(): ($RecipeModHelper$Components)[]
public static "valueOf"(name: StringJS): $RecipeModHelper$Components
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeModHelper$Components$$Type = (("quests") | ("loot_crates"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeModHelper$Components_ = $RecipeModHelper$Components$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.Quest" {
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ProgressionMode, $ProgressionMode$$Type} from "dev.ftb.mods.ftbquests.quest.ProgressionMode"
import {$List, $List$$Type} from "java.util.List"
import {$Tristate, $Tristate$$Type} from "dev.ftb.mods.ftblibrary.config.Tristate"
import {$Movable, $Movable$$Type} from "dev.ftb.mods.ftbquests.quest.Movable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$QuestObjectType, $QuestObjectType$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ProgressChange, $ProgressChange$$Type} from "dev.ftb.mods.ftbquests.util.ProgressChange"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeModHelper$Components, $RecipeModHelper$Components$$Type} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$Task, $Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$Excludable, $Excludable$$Type} from "dev.ftb.mods.ftbquests.quest.Excludable"
import {$QuestProgressEventData, $QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"

export class $Quest extends $QuestObject implements $Movable, $Excludable {
readonly "id": long
static readonly "PAGEBREAK_CODE": StringJS

constructor(id: long, chapter: $Chapter$$Type)

public "setSize"(size: double): void
public "getDescription"(): $List<($Component)>
public "getChildren"(): $Collection<($QuestObject)>
public "getWidth"(): double
public "getHeight"(): double
public "getShape"(): StringJS
public "getSize"(): double
public "getObjectType"(): $QuestObjectType
public "getY"(): double
public "getX"(): double
public "setX"(x: double): void
public "setY"(y: double): void
public "onMoved"(newX: double, newY: double, newChapterId: long): void
public "addTask"(task: $Task$$Type): void
public "isVisible"(data: $TeamData$$Type): boolean
public "addDependency"(object: $QuestObject$$Type): void
public "isOptional"(): boolean
public "getQuestFile"(): $BaseQuestFile
public "isSearchable"(data: $TeamData$$Type): boolean
public "isCompletedRaw"(data: $TeamData$$Type): boolean
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "addReward"(reward: $Reward$$Type): void
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "getParentID"(): long
public "editedFromGUI"(): void
public "getTasksAsList"(): $List<($Task)>
public "getGuidePage"(): StringJS
public "getRawSubtitle"(): StringJS
public "setRawSubtitle"(rawSubtitle: StringJS): void
public "getMinWidth"(): integer
public "canBeRepeated"(): boolean
public "getIconScale"(): double
public "getDependants"(): $Collection<($QuestObject)>
public "getMovableID"(): long
public "hasDependency"(object: $QuestObject$$Type): boolean
public "removeTask"(task: $Task$$Type): void
public "removeReward"(reward: $Reward$$Type): void
public "setTaskList"(tasks: $List$$Type<($Task$$Type)>): void
public "setRewardList"(rewards: $List$$Type<($Reward$$Type)>): void
public "moveTaskLeft"(task: $Task$$Type): void
public "moveTaskRight"(task: $Task$$Type): void
public "moveRewardLeft"(reward: $Reward$$Type): void
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "onStarted"(data: $QuestProgressEventData$$Type<(any)>): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(any)>): void
public "deleteSelf"(): void
public "deleteChildren"(): void
public "writeTasks"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getRewards"(): $Collection<($Reward)>
public "writeRewards"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getChapter"(): $Chapter
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getSubtitle"(): $Component
public "onCreated"(): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getTasks"(): $Collection<($Task)>
public "copyToClipboard"(): void
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
public "ignoreRewardBlocking"(): boolean
public "showInRecipeMod"(): boolean
public "getRawDescription"(): $List<(StringJS)>
public "setRawDescription"(rawDescription: $List$$Type<(StringJS)>): void
public "hasDependencies"(): boolean
public "clearDependencies"(): void
public "shouldHideLockIcon"(): boolean
public "initiateMoveClientSide"(to: $Chapter$$Type, x: double, y: double): void
public "areDependenciesVisible"(teamData: $TeamData$$Type): boolean
public "streamDependencies"(): $Stream<($QuestObject)>
public "isProgressionIgnored"(data: $TeamData$$Type): boolean
public "checkRepeatable"(data: $TeamData$$Type, player: $UUID$$Type): void
public "allTasksCompleted"(teamData: $TeamData$$Type): boolean
public "buildDescriptionIndex"(): $List<($Pair<(integer), (integer)>)>
public "clearCachedData"(): void
public "getQuestChapter"(): $Chapter
public "getRelatedQuest"(): $Quest
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "getProgressionMode"(): $ProgressionMode
public "verifyDependencies"(autofix: boolean): boolean
public "removeDependency"(object: $QuestObject$$Type): void
public "isQuestObjectExcluded"(teamData: $TeamData$$Type): boolean
public "isExclusiveQuest"(): boolean
public "moveRewardRight"(reward: $Reward$$Type): void
public "isOptionalForProgression"(): boolean
public "removeInvalidDependencies"(): void
public "hideDetailsUntilStartable"(): boolean
public "getMinRequiredDependencies"(): integer
public "shouldHideDependentLines"(): boolean
public "getHideTextUntilComplete"(): $Tristate
public "getRequireSequentialTasks"(): boolean
public "areDependenciesComplete"(teamData: $TeamData$$Type): boolean
public "shouldHideDependencyLines"(): boolean
public "getRotation"(): double
public "getTitle"(): $Component
public "drawMoved"(graphics: $GuiGraphics$$Type): void
public "isAlignToCorner"(): boolean
public "getId"(): long
set "size"(value: double)
get "description"(): $List<($Component)>
get "children"(): $Collection<($QuestObject)>
get "width"(): double
get "height"(): double
get "shape"(): StringJS
get "size"(): double
get "objectType"(): $QuestObjectType
get "y"(): double
get "x"(): double
set "x"(value: double)
set "y"(value: double)
get "optional"(): boolean
get "questFile"(): $BaseQuestFile
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "parentID"(): long
get "tasksAsList"(): $List<($Task)>
get "guidePage"(): StringJS
get "rawSubtitle"(): StringJS
set "rawSubtitle"(value: StringJS)
get "minWidth"(): integer
get "iconScale"(): double
get "dependants"(): $Collection<($QuestObject)>
get "movableID"(): long
set "taskList"(value: $List$$Type<($Task$$Type)>)
set "rewardList"(value: $List$$Type<($Reward$$Type)>)
get "rewards"(): $Collection<($Reward)>
get "chapter"(): $Chapter
get "subtitle"(): $Component
get "tasks"(): $Collection<($Task)>
get "rawDescription"(): $List<(StringJS)>
set "rawDescription"(value: $List$$Type<(StringJS)>)
get "questChapter"(): $Chapter
get "relatedQuest"(): $Quest
get "progressionMode"(): $ProgressionMode
get "exclusiveQuest"(): boolean
get "optionalForProgression"(): boolean
get "minRequiredDependencies"(): integer
get "hideTextUntilComplete"(): $Tristate
get "requireSequentialTasks"(): boolean
get "rotation"(): double
get "title"(): $Component
get "alignToCorner"(): boolean
get "id"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Quest$$Type = ($Quest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Quest_ = $Quest$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.ChapterGroup" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$QuestObjectType, $QuestObjectType$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Comparator, $Comparator$$Type} from "java.util.Comparator"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$QuestProgressEventData, $QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"

export class $ChapterGroup extends $QuestObject {
readonly "id": long

constructor(id: long, file: $BaseQuestFile$$Type)

public "getFile"(): $BaseQuestFile
public "getChildren"(): $Collection<($QuestObject)>
public "getObjectType"(): $QuestObjectType
public "isVisible"(data: $TeamData$$Type): boolean
public "getQuestFile"(): $BaseQuestFile
public "isFirstGroup"(): boolean
public "isLastGroup"(): boolean
public "isGuiCollapsed"(): boolean
public "removeChapter"(chapter: $Chapter$$Type): void
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "addChapter"(chapter: $Chapter$$Type): void
public "editedFromGUI"(): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(any)>): void
public "deleteSelf"(): void
public "clearChapters"(): void
public "getChapters"(): $List<($Chapter)>
public "isDefaultGroup"(): boolean
public "sortChapters"(c: $Comparator$$Type<($Chapter)>): void
public "onCreated"(): void
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
public "toggleCollapsed"(): void
public "moveChapterWithinGroup"(chapter: $Chapter$$Type, movingUp: boolean): boolean
public "clearCachedData"(): void
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "getVisibleChapters"(data: $TeamData$$Type): $List<($Chapter)>
public "getFirstVisibleChapter"(data: $TeamData$$Type): $Chapter
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
get "file"(): $BaseQuestFile
get "children"(): $Collection<($QuestObject)>
get "objectType"(): $QuestObjectType
get "questFile"(): $BaseQuestFile
get "firstGroup"(): boolean
get "lastGroup"(): boolean
get "guiCollapsed"(): boolean
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "chapters"(): $List<($Chapter)>
get "defaultGroup"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChapterGroup$$Type = ($ChapterGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChapterGroup_ = $ChapterGroup$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.ResourceConfigValue" {
import {$SelectableResource, $SelectableResource$$Type} from "dev.ftb.mods.ftblibrary.config.ui.resource.SelectableResource"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ConfigValue, $ConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ResourceConfigValue<T> extends $ConfigValue<(T)> {
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor()

public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<(T)>
public "withFilter"(filter: $Predicate$$Type<(T)>): $ResourceConfigValue<(T)>
public "setResource"(arg0: $SelectableResource$$Type<(T)>): boolean
public "canHaveNBT"(): boolean
public "withAllowEmpty"(allowEmpty: boolean): $ResourceConfigValue<(T)>
public "allowResource"(resource: T): boolean
public "fixedResourceSize"(): $OptionalLong
public "allowEmptyResource"(): boolean
public "setAllowNBTEdit"(allow: boolean): $ResourceConfigValue<(T)>
get "empty"(): boolean
get "resource"(): $SelectableResource<(T)>
set "resource"(value: $SelectableResource$$Type<(T)>)
set "allowNBTEdit"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceConfigValue$$Type<T> = ($ResourceConfigValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceConfigValue_<T> = $ResourceConfigValue$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftbquests.quest.DefaultChapterGroup" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$ChapterGroup, $ChapterGroup$$Type} from "dev.ftb.mods.ftbquests.quest.ChapterGroup"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $DefaultChapterGroup extends $ChapterGroup {
readonly "id": long

constructor(f: $BaseQuestFile$$Type)

public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
get "altTitle"(): $Component
get "altIcon"(): $Icon
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DefaultChapterGroup$$Type = ($DefaultChapterGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DefaultChapterGroup_ = $DefaultChapterGroup$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.BaseScreen" {
import {$Key, $Key$$Type} from "dev.ftb.mods.ftblibrary.ui.input.Key"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$DropDownMenu, $DropDownMenu$$Type} from "dev.ftb.mods.ftblibrary.ui.DropDownMenu"
import {$KeyModifiers, $KeyModifiers$$Type} from "dev.ftb.mods.ftblibrary.ui.input.KeyModifiers"
import {$ContextMenuItem, $ContextMenuItem$$Type} from "dev.ftb.mods.ftblibrary.ui.ContextMenuItem"
import {$List, $List$$Type} from "java.util.List"
import {$BooleanConsumer, $BooleanConsumer$$Type} from "dev.ftb.mods.ftblibrary.util.BooleanConsumer"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ModalPanel, $ModalPanel$$Type} from "dev.ftb.mods.ftblibrary.ui.ModalPanel"
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Window, $Window$$Type} from "com.mojang.blaze3d.platform.Window"
import {$ContextMenu, $ContextMenu$$Type} from "dev.ftb.mods.ftblibrary.ui.ContextMenu"
import {$PopupMenu, $PopupMenu$$Type} from "dev.ftb.mods.ftblibrary.ui.PopupMenu"
import {$Theme, $Theme$$Type} from "dev.ftb.mods.ftblibrary.ui.Theme"

export class $BaseScreen extends $Panel {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor()

public "getY"(): integer
public "getX"(): integer
public "onInit"(): boolean
public "draw"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "keyPressed"(key: $Key$$Type): boolean
public "isMouseOver"(widget: $Widget$$Type): boolean
public "isMouseOver"(x: integer, y: integer, w: integer, h: integer): boolean
public "getScreen"(): $Window
public "onClosed"(): void
public "mouseReleased"(button: $MouseButton$$Type): void
public "mouseDragged"(button: integer, dragX: double, dragY: double): boolean
public "mouseScrolled"(scroll: double): boolean
public "keyReleased"(key: $Key$$Type): void
public "charTyped"(c: character, modifiers: $KeyModifiers$$Type): boolean
public "getMouseX"(): integer
public "getMouseY"(): integer
public "onBack"(): void
public "getGui"(): $BaseScreen
public "getTheme"(): $Theme
public "refreshWidgets"(): void
public "drawBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawForeground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "alignWidgets"(): void
public "initGui"(): void
public "getScrollX"(): double
public "setScrollX"(scroll: double): void
public "getScrollY"(): double
public "setScrollY"(scroll: double): void
public "setRenderBlur"(renderBlur: boolean): void
public "pushModalPanel"(modalPanel: $ModalPanel$$Type): void
public "popModalPanel"(): $ModalPanel
public "getPrevScreen"(): $Screen
public "closeGui"(openPrevScreen: boolean): void
public "onClosedByKey"(key: $Key$$Type): boolean
public "updateGui"(mx: integer, my: integer, pt: float): void
public "getContextMenu"(): $Optional<($ModalPanel)>
public "openPopupMenu"(popupMenu: $PopupMenu$$Type): void
public "getMaxZLevel"(): integer
public "openYesNoFull"(title: $Component$$Type, desc: $Component$$Type, callback: $BooleanConsumer$$Type): void
public "openYesNo"(title: $Component$$Type, desc: $Component$$Type, callback: $Runnable$$Type): void
public "handleClick"(scheme: StringJS, path: StringJS): boolean
public "mousePressed"(button: $MouseButton$$Type): boolean
public "onPostInit"(): void
public "openGui"(): void
public "getPartialTicks"(): float
public "shouldCloseOnEsc"(): boolean
public "shouldRenderBlur"(): boolean
public "closeModalPanel"(panel: $ModalPanel$$Type): void
public "anyModalPanelOpen"(): boolean
public "doesGuiPauseGame"(): boolean
public "updateMouseOver"(mouseX: integer, mouseY: integer): void
public "openContextMenu"(menuItems: $List$$Type<($ContextMenuItem$$Type)>): $ContextMenu
public "openContextMenu"(newContextMenu: $ContextMenu$$Type): void
public "openDropdownMenu"(menuItems: $List$$Type<($ContextMenuItem$$Type)>): $DropDownMenu
public "openDropdownMenu"(dropDownMenu: $DropDownMenu$$Type): void
public "closeContextMenu"(): void
public "drawDefaultBackground"(graphics: $GuiGraphics$$Type): boolean
public "mouseDoubleClicked"(button: $MouseButton$$Type): boolean
public "shouldAddMouseOverText"(): boolean
public "addMouseOverText"(list: $TooltipList$$Type): void
public "setFocusedWidget"(widget: $Widget$$Type): void
get "y"(): integer
get "x"(): integer
get "screen"(): $Window
get "mouseX"(): integer
get "mouseY"(): integer
get "gui"(): $BaseScreen
get "theme"(): $Theme
get "scrollX"(): double
set "scrollX"(value: double)
get "scrollY"(): double
set "scrollY"(value: double)
set "renderBlur"(value: boolean)
get "prevScreen"(): $Screen
get "contextMenu"(): $Optional<($ModalPanel)>
get "maxZLevel"(): integer
get "partialTicks"(): float
set "focusedWidget"(value: $Widget$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseScreen$$Type = ($BaseScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseScreen_ = $BaseScreen$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.TeamRank" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $TeamRank extends $Enum<($TeamRank)> implements $StringRepresentable {
static readonly "OWNER": $TeamRank
static readonly "INVITED": $TeamRank
static readonly "ALLY": $TeamRank
static readonly "NAME_MAP": $NameMap<($TeamRank)>
static readonly "ENEMY": $TeamRank
static readonly "OFFICER": $TeamRank
static readonly "NONE": $TeamRank
static readonly "MEMBER": $TeamRank


public "getDisplayName"(): $Component
public static "values"(): ($TeamRank)[]
public static "valueOf"(name: StringJS): $TeamRank
public "isAtLeast"(rank: $TeamRank$$Type): boolean
public "getIcon"(): $Optional<($Icon)>
public "isAllyOrBetter"(): boolean
public "isOwner"(): boolean
public "getPower"(): integer
public "getSerializedName"(): StringJS
public "isEnemyOrWorse"(): boolean
public "isNoneOrBetter"(): boolean
public "isMemberOrBetter"(): boolean
public "isOfficerOrBetter"(): boolean
public "isInvitedOrBetter"(): boolean
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "displayName"(): $Component
get "icon"(): $Optional<($Icon)>
get "allyOrBetter"(): boolean
get "owner"(): boolean
get "power"(): integer
get "serializedName"(): StringJS
get "enemyOrWorse"(): boolean
get "noneOrBetter"(): boolean
get "memberOrBetter"(): boolean
get "officerOrBetter"(): boolean
get "invitedOrBetter"(): boolean
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamRank$$Type = (("enemy") | ("none") | ("ally") | ("invited") | ("member") | ("officer") | ("owner"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamRank_ = $TeamRank$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.icon.Color4I" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$MutableColor4I, $MutableColor4I$$Type} from "dev.ftb.mods.ftblibrary.icon.MutableColor4I"
import {$PixelBuffer, $PixelBuffer$$Type} from "dev.ftb.mods.ftblibrary.math.PixelBuffer"
import {$ChatFormatting, $ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $Color4I extends $Icon {
static readonly "GRAY": $Color4I
static readonly "WHITE": $Color4I
static readonly "LIGHT_RED": $Color4I
static readonly "CODEC": $Codec<($Icon)>
static readonly "BLUE": $Color4I
static readonly "LIGHT_GREEN": $Color4I
static readonly "GREEN": $Color4I
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Icon)>
static readonly "RED": $Color4I
static readonly "LIGHT_BLUE": $Color4I
static readonly "BLACK": $Color4I
static readonly "DARK_GRAY": $Color4I
static readonly "STRING_CODEC": $Codec<($Icon)>


public static "rgb"(color: $Vec3$$Type): $Color4I
public static "rgb"(col: integer): $Color4I
public "rgb"(): integer
public static "rgb"(r: integer, g: integer, b: integer): $Color4I
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "copy"(): $Icon
public static "HSBtoRGB"(hue: float, saturation: float, brightness: float): integer
public static "RGBtoHSB"(r: integer, g: integer, b: integer, hsbvals: (float)[]): (float)[]
public static "hsb"(h: float, s: float, b: float): $Color4I
public "rgba"(): integer
public static "rgba"(r: integer, g: integer, b: integer, a: integer): $Color4I
public static "rgba"(col: integer): $Color4I
public "lerp"(col: $Color4I$$Type, m: float): $Color4I
public "redf"(): float
public "greenf"(): float
public "bluef"(): float
public "draw"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "isMutable"(): boolean
public "mutable"(): $MutableColor4I
public "withColor"(color: $Color4I$$Type): $Icon
public "getJson"(): $JsonElement
public static "fromJson"(element: $JsonElement$$Type): $Color4I
public static "fromString"(s: StringJS): $Color4I
public static "get256"(id: integer): $Color4I
public "redi"(): integer
public "greeni"(): integer
public "bluei"(): integer
public "alphai"(): integer
public "alphaf"(): float
public "withTint"(arg0: $Color4I$$Type): $Icon
public "hasPixelBuffer"(): boolean
public "whiteIfEmpty"(): $Color4I
public "withAlphaf"(alpha: float): $Color4I
public "addBrightness"(percent: float): $Color4I
public "toStyle"(): $Style
public "withAlpha"(a: integer): $Color4I
public static "getChatFormattingColor"(id: integer): $Color4I
public static "getChatFormattingColor"(formatting: $ChatFormatting$$Type): $Color4I
public "createPixelBuffer"(): $PixelBuffer
get "json"(): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color4I$$Type = ($Color4I);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Color4I_ = $Color4I$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.translation.TranslationManager" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$TranslationTable, $TranslationTable$$Type} from "dev.ftb.mods.ftbquests.quest.translation.TranslationTable"
import {$List, $List$$Type} from "java.util.List"
import {$QuestObjectBase, $QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$TranslationKey, $TranslationKey$$Type} from "dev.ftb.mods.ftbquests.quest.translation.TranslationKey"

export class $TranslationManager {
static readonly "DEFAULT_FALLBACK_LOCALE": StringJS

constructor()

public "saveToNBT"(langFolder: $Path$$Type, force: boolean): void
public "loadFromNBT"(file: $BaseQuestFile$$Type, langFolder: $Path$$Type): void
public static "syncTable"(player: $ServerPlayer$$Type, language: StringJS): void
public "addTranslation"(object: $QuestObjectBase$$Type, locale: StringJS, subKey: $TranslationKey$$Type, message: StringJS): void
public "addTranslation"(object: $QuestObjectBase$$Type, locale: StringJS, subKey: $TranslationKey$$Type, message: $List$$Type<(StringJS)>): void
public "syncTableFromServer"(locale: StringJS, table: $TranslationTable$$Type): void
public "sendTableToPlayer"(player: $ServerPlayer$$Type, locale: StringJS): void
public "removeAllTranslations"(obj: $QuestObjectBase$$Type): void
public "getStringTranslation"(object: $QuestObjectBase$$Type, locale: StringJS, subKey: $TranslationKey$$Type): $Optional<(StringJS)>
public "addInitialTranslation"(extra: $CompoundTag$$Type, locale: StringJS, translationKey: $TranslationKey$$Type, value: StringJS): void
public "hasMissingTranslation"(object: $QuestObjectBase$$Type, key: $TranslationKey$$Type): boolean
public "processInitialTranslation"(extra: $CompoundTag$$Type, object: $QuestObjectBase$$Type): void
public "getStringListTranslation"(object: $QuestObjectBase$$Type, locale: StringJS, subKey: $TranslationKey$$Type): $Optional<($List<(StringJS)>)>
public "sendTranslationsToPlayer"(player: $ServerPlayer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TranslationManager$$Type = ($TranslationManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TranslationManager_ = $TranslationManager$$Type;
}}
declare module "dev.ftb.mods.ftbquests.item.LootCrateItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootCrate, $LootCrate$$Type} from "dev.ftb.mods.ftbquests.quest.loot.LootCrate"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $LootCrateItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(world: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getName"(stack: $ItemStack$$Type): $Component
public "isFoil"(stack: $ItemStack$$Type): boolean
public static "getCrate"(stack: $ItemStack$$Type): $LootCrate
public static "getCrate"(stack: $ItemStack$$Type, isClientSide: boolean): $LootCrate
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCrateItem$$Type = ($LootCrateItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootCrateItem_ = $LootCrateItem$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.property.TeamPropertyArgument$Info" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$TeamPropertyArgument$Info$Template, $TeamPropertyArgument$Info$Template$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyArgument$Info$Template"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$TeamPropertyArgument, $TeamPropertyArgument$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyArgument"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $TeamPropertyArgument$Info implements $ArgumentTypeInfo<($TeamPropertyArgument), ($TeamPropertyArgument$Info$Template)> {

constructor()

public "unpack"(arg0: $ArgumentType$$Type<(any)>): $ArgumentTypeInfo$Template<(any)>
public "unpack"(argumentType: $TeamPropertyArgument$$Type): $TeamPropertyArgument$Info$Template
public "serializeToNetwork"(template: $TeamPropertyArgument$Info$Template$$Type, friendlyByteBuf: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $FriendlyByteBuf$$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template<(any)>
public "serializeToJson"(template: $TeamPropertyArgument$Info$Template$$Type, jsonObject: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $JsonObject$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyArgument$Info$$Type = ($TeamPropertyArgument$Info);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyArgument$Info_ = $TeamPropertyArgument$Info$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.icon.MutableColor4I" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"

export class $MutableColor4I extends $Color4I {
static readonly "GRAY": $Color4I
static readonly "WHITE": $Color4I
static readonly "LIGHT_RED": $Color4I
static readonly "CODEC": $Codec<($Icon)>
static readonly "BLUE": $Color4I
static readonly "LIGHT_GREEN": $Color4I
static readonly "GREEN": $Color4I
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Icon)>
static readonly "RED": $Color4I
static readonly "TEMP": $Color4I
static readonly "LIGHT_BLUE": $Color4I
static readonly "BLACK": $Color4I
static readonly "DARK_GRAY": $Color4I
static readonly "STRING_CODEC": $Codec<($Icon)>


public "set"(r: integer, g: integer, b: integer, a: integer): $Color4I
public "set"(col: $Color4I$$Type, a: integer): $Color4I
public "set"(col: $Color4I$$Type): $Color4I
public "set"(col: integer, a: integer): $Color4I
public "set"(col: integer): $Color4I
public "copy"(): $Icon
public "setAlpha"(a: integer): $Color4I
public "isMutable"(): boolean
public "mutable"(): $MutableColor4I
public "getJson"(): $JsonElement
public "addBrightness"(b: integer): $Color4I
public "setFromHSB"(h: float, s: float, b: float): $Color4I
public "withTint"(arg0: $Color4I$$Type): $Icon
set "alpha"(value: integer)
get "json"(): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableColor4I$$Type = ($MutableColor4I);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableColor4I_ = $MutableColor4I$$Type;
}}
declare module "dev.ftb.mods.ftbquests.item.ScreenBlockItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ScreenBlockItem$ScreenSize, $ScreenBlockItem$ScreenSize$$Type} from "dev.ftb.mods.ftbquests.item.ScreenBlockItem$ScreenSize"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $ScreenBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
/**
 * 
 * @deprecated
 */
 "block": $Block
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, size: $ScreenBlockItem$ScreenSize$$Type)

public static "getSize"(stack: $ItemStack$$Type): integer
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenBlockItem$$Type = ($ScreenBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenBlockItem_ = $ScreenBlockItem$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.task.TaskType$GuiProvider" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Task, $Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"

export interface $TaskType$GuiProvider {

 "openCreationGui"(arg0: $Panel$$Type, arg1: $Quest$$Type, arg2: $BiConsumer$$Type<($Task), ($CompoundTag)>): void

(arg0: $Panel, arg1: $Quest, arg2: $BiConsumer<($Task), ($CompoundTag)>): void
}

export namespace $TaskType$GuiProvider {
const probejs$$marker: never
}
export class $TaskType$GuiProvider$$Static implements $TaskType$GuiProvider {


 "openCreationGui"(arg0: $Panel$$Type, arg1: $Quest$$Type, arg2: $BiConsumer$$Type<($Task), ($CompoundTag)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskType$GuiProvider$$Type = ((arg0: $Panel, arg1: $Quest, arg2: $BiConsumer<($Task), ($CompoundTag)>) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaskType$GuiProvider_ = $TaskType$GuiProvider$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.loot.EntityWeight" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityWeight {
 "boss": integer
 "passive": integer
 "monster": integer

constructor()

public "getWeight"(entity: $Entity$$Type): integer
public "readNetData"(data: $FriendlyByteBuf$$Type): void
public "writeNetData"(data: $FriendlyByteBuf$$Type): void
public "writeData"(nbt: $CompoundTag$$Type): void
public "readData"(nbt: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityWeight$$Type = ($EntityWeight);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityWeight_ = $EntityWeight$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.reward.RewardClaimType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $RewardClaimType extends $Enum<($RewardClaimType)> {
static readonly "CLAIMED": $RewardClaimType
static readonly "CAN_CLAIM": $RewardClaimType
static readonly "CANT_CLAIM": $RewardClaimType


public static "values"(): ($RewardClaimType)[]
public static "valueOf"(name: StringJS): $RewardClaimType
public "isClaimed"(): boolean
public "canClaim"(): boolean
public "cantClaim"(): boolean
get "claimed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardClaimType$$Type = (("can_claim") | ("cant_claim") | ("claimed"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewardClaimType_ = $RewardClaimType$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.ProgressionMode" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $ProgressionMode extends $Enum<($ProgressionMode)> {
static readonly "NAME_MAP": $NameMap<($ProgressionMode)>
static readonly "NAME_MAP_NO_DEFAULT": $NameMap<($ProgressionMode)>
static readonly "LINEAR": $ProgressionMode
static readonly "DEFAULT": $ProgressionMode
static readonly "FLEXIBLE": $ProgressionMode


public static "values"(): ($ProgressionMode)[]
public static "valueOf"(name: StringJS): $ProgressionMode
public "getId"(): StringJS
get "id"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressionMode$$Type = (("default") | ("linear") | ("flexible"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressionMode_ = $ProgressionMode$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.PopupMenu" {
import {$ModalPanel, $ModalPanel$$Type} from "dev.ftb.mods.ftblibrary.ui.ModalPanel"

export interface $PopupMenu {

 "getModalPanel"(): $ModalPanel

(): $ModalPanel$$Type
get "modalPanel"(): $ModalPanel
}

export namespace $PopupMenu {
const probejs$$marker: never
}
export class $PopupMenu$$Static implements $PopupMenu {


 "getModalPanel"(): $ModalPanel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PopupMenu$$Type = (() => $ModalPanel$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PopupMenu_ = $PopupMenu$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.TeamData" {
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LongSet, $LongSet$$Type} from "it.unimi.dsi.fastutil.longs.LongSet"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$SNBTCompoundTag, $SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Task, $Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$Date, $Date$$Type} from "java.util.Date"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$RewardClaimType, $RewardClaimType$$Type} from "dev.ftb.mods.ftbquests.quest.reward.RewardClaimType"

export class $TeamData {
static readonly "AUTO_PIN_ID": integer
static readonly "VERSION": integer
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($TeamData)>

constructor(teamId: $UUID$$Type, file: $BaseQuestFile$$Type)
constructor(teamId: $UUID$$Type, file: $BaseQuestFile$$Type, name: StringJS)

public "getFile"(): $BaseQuestFile
public "isLocked"(): boolean
public "setCompleted"(id: long, time: $Date$$Type): boolean
public "isCompleted"(object: $QuestObject$$Type): boolean
public "copyData"(from: $TeamData$$Type): void
public "isStarted"(object: $QuestObject$$Type): boolean
public "getName"(): StringJS
public static "get"(player: $Player$$Type): $TeamData
public "toString"(): StringJS
public "setName"(name: StringJS): void
public "markDirty"(): void
public "deserializeNBT"(nbt: $SNBTCompoundTag$$Type): void
public "serializeNBT"(): $SNBTCompoundTag
public "setProgress"(task: $Task$$Type, progress: long): void
public "getProgress"(task: $Task$$Type): long
public "getProgress"(taskId: long): long
public "setStarted"(questId: long, time: $Date$$Type): boolean
public "canStartTasks"(quest: $Quest$$Type): boolean
public "deleteReward"(reward: $Reward$$Type): void
public "resetReward"(player: $UUID$$Type, reward: $Reward$$Type): boolean
public "claimReward"(player: $UUID$$Type, reward: $Reward$$Type, date: long): boolean
public "claimReward"(player: $ServerPlayer$$Type, reward: $Reward$$Type, notify: boolean): void
public "isQuestPinned"(player: $Player$$Type, id: long): boolean
public "setQuestPinned"(player: $Player$$Type, id: long, pinned: boolean): void
public "getStartedTime"(questId: long): $Optional<($Date)>
public "resetProgress"(task: $Task$$Type): void
public "setLocked"(newLocked: boolean): boolean
public "getClaimType"(player: $UUID$$Type, reward: $Reward$$Type): $RewardClaimType
public "addProgress"(task: $Task$$Type, progress: long): void
public "getTeamId"(): $UUID
public "mergeData"(from: $TeamData$$Type): void
public "getCanEdit"(player: $Player$$Type): boolean
public "setCanEdit"(player: $Player$$Type, newCanEdit: boolean): boolean
public "saveIfChanged"(): void
public "getCompletedTime"(questId: long): $Optional<($Date)>
public "getRewardClaimTime"(player: $UUID$$Type, reward: $Reward$$Type): $Optional<($Date)>
public "areRewardsBlocked"(): boolean
public "setRewardsBlocked"(rewardsBlocked: boolean): boolean
public "getPinnedQuestIds"(player: $Player$$Type): $LongSet
public "areDependenciesVisible"(quest: $Quest$$Type): boolean
public "isRewardBlocked"(reward: $Reward$$Type): boolean
public "getOnlineMembers"(): $Collection<($ServerPlayer)>
public "mergeClaimedRewards"(from: $TeamData$$Type): void
public "checkAutoCompletion"(quest: $Quest$$Type): void
public "clearCachedProgress"(): void
public "hasUnclaimedRewards"(player: $UUID$$Type, object: $QuestObject$$Type): boolean
public "getRelativeProgress"(object: $QuestObject$$Type): integer
public "isRewardClaimed"(player: $UUID$$Type, reward: $Reward$$Type): boolean
public "markTaskCompleted"(task: $Task$$Type): void
public "isExcludedByOtherQuestline"(qo: $QuestObject$$Type): boolean
public "areDependenciesComplete"(quest: $Quest$$Type): boolean
get "file"(): $BaseQuestFile
get "locked"(): boolean
get "name"(): StringJS
set "name"(value: StringJS)
set "locked"(value: boolean)
get "teamId"(): $UUID
set "rewardsBlocked"(value: boolean)
get "onlineMembers"(): $Collection<($ServerPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamData$$Type = ($TeamData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamData_ = $TeamData$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.client.KnownClientPlayer" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $KnownClientPlayer extends $Record {

constructor(id: $UUID$$Type, name: StringJS, online: boolean, teamId: $UUID$$Type, profile: $GameProfile$$Type, extraData: $CompoundTag$$Type)

public "name"(): StringJS
public "profile"(): $GameProfile
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $UUID
public "extraData"(): $CompoundTag
public "teamId"(): $UUID
public "online"(): boolean
public "isInternalTeam"(): boolean
public "isOnlineAndNotInParty"(): boolean
get "internalTeam"(): boolean
get "onlineAndNotInParty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KnownClientPlayer$$Type = ({"name"?: StringJS, "teamId"?: $UUID$$Type, "id"?: $UUID$$Type, "profile"?: $GameProfile$$Type, "online"?: boolean, "extraData"?: $CompoundTag$$Type}) | ([name?: StringJS, teamId?: $UUID$$Type, id?: $UUID$$Type, profile?: $GameProfile$$Type, online?: boolean, extraData?: $CompoundTag$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KnownClientPlayer_ = $KnownClientPlayer$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.core.ItemFTBL" {
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $ItemFTBL {

 "setCraftingRemainingItemFTBL"(arg0: $Item$$Type): void

(arg0: $Item): void
set "craftingRemainingItemFTBL"(value: $Item$$Type)
}

export namespace $ItemFTBL {
const probejs$$marker: never
}
export class $ItemFTBL$$Static implements $ItemFTBL {


 "setCraftingRemainingItemFTBL"(arg0: $Item$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFTBL$$Type = ((arg0: $Item) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFTBL_ = $ItemFTBL$$Type;
}}
declare module "dev.ftb.mods.ftbquests.block.entity.TaskScreenAuxBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ITaskScreen, $ITaskScreen$$Type} from "dev.ftb.mods.ftbquests.block.entity.ITaskScreen"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TaskScreenBlockEntity, $TaskScreenBlockEntity$$Type} from "dev.ftb.mods.ftbquests.block.entity.TaskScreenBlockEntity"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Nameable, $Nameable$$Type} from "net.minecraft.world.Nameable"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TaskScreenAuxBlockEntity extends $BlockEntity implements $ITaskScreen, $Nameable {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "getName"(): $Component
public "getSkin"(): $ItemStack
public "loadAdditional"(compoundTag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "isInputOnly"(): boolean
public "getCoreScreen"(): $Optional<($TaskScreenBlockEntity)>
public "setCoreScreen"(coreScreen: $TaskScreenBlockEntity$$Type): void
public "getTeamId"(): $UUID
public "isIndestructible"(): boolean
public "hasPermissionToEdit"(player: $Player$$Type): boolean
public "getDisplayName"(): $Component
public "getCustomName"(): $Component
public "hasCustomName"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "name"(): $Component
get "skin"(): $ItemStack
get "inputOnly"(): boolean
get "coreScreen"(): $Optional<($TaskScreenBlockEntity)>
set "coreScreen"(value: $TaskScreenBlockEntity$$Type)
get "teamId"(): $UUID
get "indestructible"(): boolean
get "displayName"(): $Component
get "customName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenAuxBlockEntity$$Type = ($TaskScreenAuxBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaskScreenAuxBlockEntity_ = $TaskScreenAuxBlockEntity$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.snbt.config.LongValue" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$SNBTConfig, $SNBTConfig$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig"
import {$NumberValue, $NumberValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.NumberValue"
import {$SNBTCompoundTag, $SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"

export class $LongValue extends $NumberValue<(long)> {
readonly "parent": $SNBTConfig
readonly "key": StringJS


public "range"(max: long): $NumberValue<(long)>
public "set"(arg0: any): void
public "set"(v: long): void
public "write"(tag: $SNBTCompoundTag$$Type): void
public "read"(tag: $SNBTCompoundTag$$Type): void
public "createClientConfig"(group: $ConfigGroup$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongValue$$Type = ($LongValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongValue_ = $LongValue$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.BaseQuestFile" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$ProgressionMode, $ProgressionMode$$Type} from "dev.ftb.mods.ftbquests.quest.ProgressionMode"
import {$LootCrate, $LootCrate$$Type} from "dev.ftb.mods.ftbquests.quest.loot.LootCrate"
import {$DefaultChapterGroup, $DefaultChapterGroup$$Type} from "dev.ftb.mods.ftbquests.quest.DefaultChapterGroup"
import {$List, $List$$Type} from "java.util.List"
import {$QuestFile, $QuestFile$$Type} from "dev.ftb.mods.ftbquests.api.QuestFile"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TaskType, $TaskType$$Type} from "dev.ftb.mods.ftbquests.quest.task.TaskType"
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$QuestLink, $QuestLink$$Type} from "dev.ftb.mods.ftbquests.quest.QuestLink"
import {$RewardType, $RewardType$$Type} from "dev.ftb.mods.ftbquests.quest.reward.RewardType"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Team, $Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"
import {$RewardTable, $RewardTable$$Type} from "dev.ftb.mods.ftbquests.quest.loot.RewardTable"
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$ChapterGroup, $ChapterGroup$$Type} from "dev.ftb.mods.ftbquests.quest.ChapterGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Env, $Env$$Type} from "dev.architectury.utils.Env"
import {$QuestObjectType, $QuestObjectType$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$TranslationManager, $TranslationManager$$Type} from "dev.ftb.mods.ftbquests.quest.translation.TranslationManager"
import {$EntityWeight, $EntityWeight$$Type} from "dev.ftb.mods.ftbquests.quest.loot.EntityWeight"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeModHelper$Components, $RecipeModHelper$Components$$Type} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$RewardAutoClaim, $RewardAutoClaim$$Type} from "dev.ftb.mods.ftbquests.quest.reward.RewardAutoClaim"
import {$Task, $Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$QuestProgressEventData, $QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$QuestObjectBase, $QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $BaseQuestFile extends $QuestObject implements $QuestFile {
static "VERSION": integer
readonly "id": long
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($BaseQuestFile)>

constructor()

public "newID"(): long
public "getTask"(id: long): $Task
public "getLocale"(): StringJS
public "create"(id: long, type: $QuestObjectType$$Type, parent: long, extra: $CompoundTag$$Type): $QuestObjectBase
public "getID"(obj: any): long
public "getChildren"(): $Collection<($QuestObject)>
public "getBase"(id: long): $QuestObjectBase
public "getObjectType"(): $QuestObjectType
public "isLoading"(): boolean
public "getFallbackLocale"(): StringJS
public "remove"(id: long): $QuestObjectBase
public "get"(id: long): $QuestObject
public "collect"<T extends $QuestObjectBase>(clazz: $Class$$Type<(T)>): $List<(T)>
public "collect"<T extends $QuestObjectBase>(filter: $Predicate$$Type<($QuestObjectBase)>): $List<(T)>
public "markDirty"(): void
public "holderLookup"(): $HolderLookup$Provider
public "isVisible"(data: $TeamData$$Type): boolean
public "deleteObject"(arg0: long): void
public "getSide"(): $Env
public "readID"(id: long): long
public "readID"(tag: $Tag$$Type): long
public "getQuestFile"(): $BaseQuestFile
public "isPlayerOnTeam"(arg0: $Player$$Type, arg1: $TeamData$$Type): boolean
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getSubmitTasks"(): $List<($Task)>
public "getGridScale"(): double
public "isPauseGame"(): boolean
public "refreshGui"(): void
public "isDisableGui"(): boolean
public "getAllTasks"(): $List<($Task)>
public "getAllChapters"(): $List<($Chapter)>
public "getAllTeamData"(): $Collection<($TeamData)>
public "getAltTitle"(): $MutableComponent
public "getAltIcon"(): $Icon
public "getParentID"(): long
public "getTaskType"(typeId: integer): $TaskType
public "showLockIcons"(): boolean
public "isServerSide"(): boolean
public "forAllChapters"(consumer: $Consumer$$Type<($Chapter)>): void
public "onStarted"(data: $QuestProgressEventData$$Type<(any)>): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(any)>): void
public "deleteSelf"(): void
public "deleteChildren"(): void
public "forAllQuests"(consumer: $Consumer$$Type<($Quest)>): void
public "refreshIDMap"(): void
public "getQuest"(id: long): $Quest
public "getReward"(id: long): $Reward
public "getRewardTable"(id: long): $RewardTable
public "getLootCrate"(id: StringJS): $LootCrate
public "writeDataFull"(folder: $Path$$Type, provider: $HolderLookup$Provider$$Type): void
public "readDataFull"(folder: $Path$$Type, provider: $HolderLookup$Provider$$Type): void
public "getAllObjects"(): $Collection<($QuestObjectBase)>
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "addRewardTable"(rewardTable: $RewardTable$$Type): void
public "getRewardType"(typeId: integer): $RewardType
public "getTeamData"(player: $Player$$Type): $Optional<($TeamData)>
public "getChapter"(id: long): $Chapter
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getFolder"(): $Path
public "addData"(data: $TeamData$$Type, override: boolean): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "canEdit"(): boolean
public "isDropLootCrates"(): boolean
public "makeRandomLootCrate"(entity: $Entity$$Type, random: $RandomSource$$Type): $Optional<($LootCrate)>
public "dropBookOnDeath"(): boolean
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
public "getTranslationManager"(): $TranslationManager
public "getQuestObjectOrThrow"<T extends $QuestObjectBase>(id: long, cls: $Class$$Type<(T)>): T
public "getChapterOrThrow"(id: long): $Chapter
public "getChapterGroup"(id: long): $ChapterGroup
public "clearCachedData"(): void
public "updateLootCrates"(): void
public "writeNetDataFull"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetDataFull"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getNullableTeamData"(id: $UUID$$Type): $TeamData
public "getOrCreateTeamData"(teamId: $UUID$$Type): $TeamData
public "getOrCreateTeamData"(player: $Entity$$Type): $TeamData
public "getOrCreateTeamData"(team: $Team$$Type): $TeamData
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "clearCachedProgress"(): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "getCraftingTasks"(): $List<($Task)>
public "getVisibleChapters"(data: $TeamData$$Type): $List<($Chapter)>
public "getFirstVisibleChapter"(data: $TeamData$$Type): $Chapter
public "getDefaultQuestShape"(): StringJS
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "getProgressionMode"(): $ProgressionMode
public "getDetectionDelay"(): integer
public "isHideExcludedQuests"(): boolean
public "isDefaultPerTeamReward"(): boolean
public "getEmergencyItems"(): $List<($ItemStack)>
public "getDefaultChapterGroup"(): $DefaultChapterGroup
public "getRewardTables"(): $List<($RewardTable)>
public "removeRewardTable"(rewardTable: $RewardTable$$Type): void
public "getChapterGroups"(): $List<($ChapterGroup)>
public "forAllChapterGroups"(consumer: $Consumer$$Type<($ChapterGroup)>): void
public "forAllQuestLinks"(consumer: $Consumer$$Type<($QuestLink)>): void
public "moveChapterGroup"(id: long, movingUp: boolean): boolean
public "getLootCrateNoDrop"(): $EntityWeight
public "refreshRewardTableRewardIDs"(): void
public "isDefaultTeamConsumeItems"(): boolean
public "getDefaultRewardAutoClaim"(): $RewardAutoClaim
public "getEmergencyItemsCooldown"(): integer
public "isDefaultQuestDisableJEI"(): boolean
public "removeEmptyRewardTables"(source: $CommandSourceStack$$Type): integer
get "locale"(): StringJS
get "children"(): $Collection<($QuestObject)>
get "objectType"(): $QuestObjectType
get "loading"(): boolean
get "fallbackLocale"(): StringJS
get "side"(): $Env
get "questFile"(): $BaseQuestFile
get "submitTasks"(): $List<($Task)>
get "gridScale"(): double
get "pauseGame"(): boolean
get "disableGui"(): boolean
get "allTasks"(): $List<($Task)>
get "allChapters"(): $List<($Chapter)>
get "allTeamData"(): $Collection<($TeamData)>
get "altTitle"(): $MutableComponent
get "altIcon"(): $Icon
get "parentID"(): long
get "serverSide"(): boolean
get "allObjects"(): $Collection<($QuestObjectBase)>
get "folder"(): $Path
get "dropLootCrates"(): boolean
get "translationManager"(): $TranslationManager
get "craftingTasks"(): $List<($Task)>
get "defaultQuestShape"(): StringJS
get "progressionMode"(): $ProgressionMode
get "detectionDelay"(): integer
get "hideExcludedQuests"(): boolean
get "defaultPerTeamReward"(): boolean
get "emergencyItems"(): $List<($ItemStack)>
get "defaultChapterGroup"(): $DefaultChapterGroup
get "rewardTables"(): $List<($RewardTable)>
get "chapterGroups"(): $List<($ChapterGroup)>
get "lootCrateNoDrop"(): $EntityWeight
get "defaultTeamConsumeItems"(): boolean
get "defaultRewardAutoClaim"(): $RewardAutoClaim
get "emergencyItemsCooldown"(): integer
get "defaultQuestDisableJEI"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseQuestFile$$Type = ($BaseQuestFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseQuestFile_ = $BaseQuestFile$$Type;
}}
declare module "dev.ftb.mods.ftbquests.item.QuestBarrierBlockItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $QuestBarrierBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
/**
 * 
 * @deprecated
 */
 "block": $Block
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestBarrierBlockItem$$Type = ($QuestBarrierBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestBarrierBlockItem_ = $QuestBarrierBlockItem$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.reward.RewardType$Provider" {
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"

export interface $RewardType$Provider {

 "create"(arg0: long, arg1: $Quest$$Type): $Reward

(arg0: long, arg1: $Quest): $Reward$$Type
}

export namespace $RewardType$Provider {
const probejs$$marker: never
}
export class $RewardType$Provider$$Static implements $RewardType$Provider {


 "create"(arg0: long, arg1: $Quest$$Type): $Reward
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardType$Provider$$Type = ((arg0: long, arg1: $Quest) => $Reward$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewardType$Provider_ = $RewardType$Provider$$Type;
}}
declare module "dev.ftb.mods.ftbquests.block.TaskScreenBlock$Aux" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$TaskScreenBlock, $TaskScreenBlock$$Type} from "dev.ftb.mods.ftbquests.block.TaskScreenBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TaskScreenBlock$Aux extends $TaskScreenBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "PROPS": $BlockBehaviour$Properties
 "hasCollision": boolean

constructor(props: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenBlock$Aux$$Type = ($TaskScreenBlock$Aux);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaskScreenBlock$Aux_ = $TaskScreenBlock$Aux$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.loot.RewardTable" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$LootCrate, $LootCrate$$Type} from "dev.ftb.mods.ftbquests.quest.loot.LootCrate"
import {$QuestObjectType, $QuestObjectType$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$WeightedReward, $WeightedReward$$Type} from "dev.ftb.mods.ftbquests.quest.loot.WeightedReward"
import {$List, $List$$Type} from "java.util.List"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$RecipeModHelper$Components, $RecipeModHelper$Components$$Type} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$Set, $Set$$Type} from "java.util.Set"
import {$QuestObjectBase, $QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"

export class $RewardTable extends $QuestObjectBase {
readonly "id": long

constructor(id: long, file: $BaseQuestFile$$Type, filename: StringJS)
constructor(id: long, file: $BaseQuestFile$$Type)

public "getFile"(): $BaseQuestFile
public "getPath"(): $Optional<(StringJS)>
public "getObjectType"(): $QuestObjectType
public "copy"(): $RewardTable
public "getTitleOrElse"(def: $Component$$Type): $Component
public "getQuestFile"(): $BaseQuestFile
public "getFakeQuest"(): $Quest
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "addReward"(weightedReward: $WeightedReward$$Type): void
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "editedFromGUI"(): void
public "removeReward"(weightedReward: $WeightedReward$$Type): void
public "deleteSelf"(): void
public "getLootCrate"(): $LootCrate
public static "isFakeQuestId"(id: long): boolean
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "onCreated"(): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getFilename"(): StringJS
public "getTotalWeight"(includeEmpty: boolean): float
public "addMouseOverText"(list: $TooltipList$$Type, includeWeight: boolean, includeEmpty: boolean): void
public "makeWeightedItemReward"(stack: $ItemStack$$Type, weight: float): $WeightedReward
public "toggleLootCrate"(): $LootCrate
public "shouldShowTooltip"(): boolean
public "clearCachedData"(): void
public static "createRewardForTable"(id: long, type: StringJS, file: $BaseQuestFile$$Type): $QuestObjectBase
public "editedFromGUIOnServer"(): void
public "onEditButtonClicked"(gui: $Runnable$$Type): void
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "getWeightedRewards"(): $List<($WeightedReward)>
public "generateWeightedRandomRewards"(random: $RandomSource$$Type, nAttempts: integer, includeEmpty: boolean): $Collection<($WeightedReward)>
get "file"(): $BaseQuestFile
get "path"(): $Optional<(StringJS)>
get "objectType"(): $QuestObjectType
get "questFile"(): $BaseQuestFile
get "fakeQuest"(): $Quest
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "lootCrate"(): $LootCrate
get "filename"(): StringJS
get "weightedRewards"(): $List<($WeightedReward)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardTable$$Type = ($RewardTable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewardTable_ = $RewardTable$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.ConfigGroup" {
import {$EnumConfig, $EnumConfig$$Type} from "dev.ftb.mods.ftblibrary.config.EnumConfig"
import {$LongConfig, $LongConfig$$Type} from "dev.ftb.mods.ftblibrary.config.LongConfig"
import {$Pattern, $Pattern$$Type} from "java.util.regex.Pattern"
import {$DoubleConfig, $DoubleConfig$$Type} from "dev.ftb.mods.ftblibrary.config.DoubleConfig"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$List, $List$$Type} from "java.util.List"
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$ItemStackConfig, $ItemStackConfig$$Type} from "dev.ftb.mods.ftblibrary.config.ItemStackConfig"
import {$Tristate, $Tristate$$Type} from "dev.ftb.mods.ftblibrary.config.Tristate"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IntConfig, $IntConfig$$Type} from "dev.ftb.mods.ftblibrary.config.IntConfig"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ColorConfig, $ColorConfig$$Type} from "dev.ftb.mods.ftblibrary.config.ColorConfig"
import {$BooleanConfig, $BooleanConfig$$Type} from "dev.ftb.mods.ftblibrary.config.BooleanConfig"
import {$FluidStack, $FluidStack$$Type} from "dev.architectury.fluid.FluidStack"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$SNBTConfig, $SNBTConfig$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig"
import {$FluidConfig, $FluidConfig$$Type} from "dev.ftb.mods.ftblibrary.config.FluidConfig"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$StringConfig, $StringConfig$$Type} from "dev.ftb.mods.ftblibrary.config.StringConfig"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$ImageResourceConfig, $ImageResourceConfig$$Type} from "dev.ftb.mods.ftblibrary.config.ImageResourceConfig"
import {$ListConfig, $ListConfig$$Type} from "dev.ftb.mods.ftblibrary.config.ListConfig"
import {$EntityFaceConfig, $EntityFaceConfig$$Type} from "dev.ftb.mods.ftblibrary.config.EntityFaceConfig"
import {$ConfigValue, $ConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ConfigGroup implements $Comparable<($ConfigGroup)> {

constructor(id: StringJS)
constructor(id: StringJS, savedCallback: $ConfigCallback$$Type)

public "getPath"(): StringJS
public "getName"(): $Component
public "compareTo"(o: $ConfigGroup$$Type): integer
public "compareTo"(arg0: any): integer
public "add"<T, CV extends $ConfigValue<(T)>>(id: StringJS, type: CV, value: T, setter: $Consumer$$Type<(T)>, defaultValue: T): CV
public "getParent"(): $ConfigGroup
public "getId"(): StringJS
public "save"(accepted: boolean): void
public "addItemStack"(id: StringJS, value: $ItemStack$$Type, setter: $Consumer$$Type<($ItemStack)>, def: $ItemStack$$Type, singleItem: boolean, allowEmpty: boolean): $ItemStackConfig
public "addItemStack"(id: StringJS, value: $ItemStack$$Type, setter: $Consumer$$Type<($ItemStack)>, def: $ItemStack$$Type, fixedSize: integer): $ItemStackConfig
public "getTooltip"(): $Component
public "addList"<E, CV extends $ConfigValue<(E)>>(id: StringJS, value: $List$$Type<(E)>, type: CV, def: E): $ListConfig<(E), (CV)>
public "addList"<E, CV extends $ConfigValue<(E)>>(id: StringJS, value: $List$$Type<(E)>, type: CV, setter: $Consumer$$Type<($List<(E)>)>, def: E): $ListConfig<(E), (CV)>
public "getNameKey"(): StringJS
public "getValues"(): $Collection<($ConfigValue<(any)>)>
public "addInt"(id: StringJS, value: integer, setter: $Consumer$$Type<(integer)>, def: integer, min: integer, max: integer): $IntConfig
public static "createEditable"(config: $SNBTConfig$$Type, groupName: StringJS, serverConfig: boolean): $ConfigGroup
public "addFluidStack"(id: StringJS, value: $FluidStack$$Type, setter: $Consumer$$Type<($FluidStack)>, def: $FluidStack$$Type, fixedSize: long): $FluidConfig
public "addFluidStack"(id: StringJS, value: $FluidStack$$Type, setter: $Consumer$$Type<($FluidStack)>, def: $FluidStack$$Type, allowEmpty: boolean): $FluidConfig
public "addImage"(id: StringJS, value: $ResourceLocation$$Type, setter: $Consumer$$Type<($ResourceLocation)>, def: $ResourceLocation$$Type): $ImageResourceConfig
public "addEntityFace"(id: StringJS, value: $EntityType$$Type<(any)>, setter: $Consumer$$Type<($EntityType<(any)>)>, def: $EntityType$$Type<(any)>): $EntityFaceConfig
public "getSubgroups"(): $Collection<($ConfigGroup)>
public "addLong"(id: StringJS, value: long, setter: $Consumer$$Type<(long)>, def: long, min: long, max: long): $LongConfig
public "addDouble"(id: StringJS, value: double, setter: $Consumer$$Type<(double)>, def: double, min: double, max: double): $DoubleConfig
public "addString"(id: StringJS, value: StringJS, setter: $Consumer$$Type<(StringJS)>, def: StringJS): $StringConfig
public "addString"(id: StringJS, value: StringJS, setter: $Consumer$$Type<(StringJS)>, def: StringJS, pattern: $Pattern$$Type): $StringConfig
public "addBool"(id: StringJS, value: boolean, setter: $Consumer$$Type<(boolean)>, def: boolean): $BooleanConfig
public "addTristate"(id: StringJS, value: $Tristate$$Type, setter: $Consumer$$Type<($Tristate)>, def: $Tristate$$Type): $EnumConfig<($Tristate)>
public "addTristate"(id: StringJS, value: $Tristate$$Type, setter: $Consumer$$Type<($Tristate)>): $EnumConfig<($Tristate)>
public "addColor"(id: StringJS, value: $Color4I$$Type, setter: $Consumer$$Type<($Color4I)>, def: $Color4I$$Type): $ColorConfig
public "addEnum"<E>(id: StringJS, value: E, setter: $Consumer$$Type<(E)>, nameMap: $NameMap$$Type<(E)>): $EnumConfig<(E)>
public "addEnum"<E>(id: StringJS, value: E, setter: $Consumer$$Type<(E)>, nameMap: $NameMap$$Type<(E)>, def: E): $EnumConfig<(E)>
public "setNameKey"(key: StringJS): $ConfigGroup
public "getOrCreateSubgroup"(id: StringJS, displayOrder: integer): $ConfigGroup
public "getOrCreateSubgroup"(id: StringJS): $ConfigGroup
get "path"(): StringJS
get "name"(): $Component
get "parent"(): $ConfigGroup
get "id"(): StringJS
get "tooltip"(): $Component
get "nameKey"(): StringJS
get "values"(): $Collection<($ConfigValue<(any)>)>
get "subgroups"(): $Collection<($ConfigGroup)>
set "nameKey"(value: StringJS)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigGroup$$Type = ($ConfigGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigGroup_ = $ConfigGroup$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.QuestObjectBase" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$QuestObjectType, $QuestObjectType$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$List, $List$$Type} from "java.util.List"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$TranslationKey, $TranslationKey$$Type} from "dev.ftb.mods.ftbquests.quest.translation.TranslationKey"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ProgressChange, $ProgressChange$$Type} from "dev.ftb.mods.ftbquests.util.ProgressChange"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeModHelper$Components, $RecipeModHelper$Components$$Type} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Set, $Set$$Type} from "java.util.Set"

export class $QuestObjectBase implements $Comparable<($QuestObjectBase)> {
readonly "id": long

constructor(id: long)

public "getPath"(): $Optional<(StringJS)>
public "isValid"(): boolean
public static "isNull"(object: $QuestObjectBase$$Type): boolean
public static "getID"(object: $QuestObjectBase$$Type): long
public "getObjectType"(): $QuestObjectType
public "equals"(object: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(other: $QuestObjectBase$$Type): integer
public "getId"(): long
public static "copy"<T extends $QuestObjectBase>(orig: T, factory: $Supplier$$Type<(T)>): T
public "hasTag"(tag: StringJS): boolean
public "getTags"(): $Set<(StringJS)>
public "holderLookup"(): $HolderLookup$Provider
public "getIcon"(): $Icon
public "getTitle"(): $Component
public "getQuestFile"(): $BaseQuestFile
public "setRawTitle"(rawTitle: StringJS): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "getParentID"(): long
public "setRawIcon"(rawIcon: $ItemStack$$Type): void
public "getRawTitle"(): StringJS
public static "parseHexId"(id: StringJS): $Optional<(long)>
public static "titleToID"(s: StringJS): $Optional<(StringJS)>
public "editedFromGUI"(): void
public "createSubGroup"(group: $ConfigGroup$$Type): $ConfigGroup
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "deleteSelf"(): void
public "deleteChildren"(): void
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getCodeString"(): StringJS
public static "getCodeString"(object: $QuestObjectBase$$Type): StringJS
public static "getCodeString"(id: long): StringJS
public "onCreated"(): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "clearCachedData"(): void
public static "itemOrMissingFromNBT"(tag: $Tag$$Type, provider: $HolderLookup$Provider$$Type): $ItemStack
public "getQuestChapter"(): $Chapter
public "getProtoTranslation"(key: $TranslationKey$$Type): StringJS
public "forceProgressRaw"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "getMutableTitle"(): $MutableComponent
public "editedFromGUIOnServer"(): void
public "onEditButtonClicked"(gui: $Runnable$$Type): void
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public static "parseCodeString"(id: StringJS): long
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public static "shouldSendNotifications"(): boolean
public static "singleItemOrMissingFromNBT"(tag: $Tag$$Type, provider: $HolderLookup$Provider$$Type): $ItemStack
public "modifyTranslatableListValue"(translationKey: $TranslationKey$$Type, setter: $Consumer$$Type<($List<(StringJS)>)>): void
get "path"(): $Optional<(StringJS)>
get "valid"(): boolean
get "objectType"(): $QuestObjectType
get "id"(): long
get "tags"(): $Set<(StringJS)>
get "icon"(): $Icon
get "title"(): $Component
get "questFile"(): $BaseQuestFile
set "rawTitle"(value: StringJS)
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "parentID"(): long
set "rawIcon"(value: $ItemStack$$Type)
get "rawTitle"(): StringJS
get "codeString"(): StringJS
get "questChapter"(): $Chapter
get "mutableTitle"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestObjectBase$$Type = ($QuestObjectBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestObjectBase_ = $QuestObjectBase$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.snbt.config.EnumValue" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$SNBTConfig, $SNBTConfig$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig"
import {$BaseValue, $BaseValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.BaseValue"
import {$SNBTCompoundTag, $SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"

export class $EnumValue<T> extends $BaseValue<(T)> {
readonly "parent": $SNBTConfig
readonly "key": StringJS


public "set"(v: T): void
public "write"(tag: $SNBTCompoundTag$$Type): void
public "read"(tag: $SNBTCompoundTag$$Type): void
public "createClientConfig"(group: $ConfigGroup$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumValue$$Type<T> = ($EnumValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumValue_<T> = $EnumValue$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Rect2i, $Rect2i$$Type} from "net.minecraft.client.renderer.Rect2i"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $PositionedIngredient extends $Record {

constructor(ingredient: any, area: $Rect2i$$Type, tooltip: boolean)

public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(ingredient: any, widget: $Widget$$Type): $Optional<($PositionedIngredient)>
public static "of"(ingredient: any, widget: $Widget$$Type, tooltip: boolean): $Optional<($PositionedIngredient)>
public "area"(): $Rect2i
public "ingredient"(): any
public "tooltip"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionedIngredient$$Type = ({"ingredient"?: any, "tooltip"?: boolean, "area"?: $Rect2i$$Type}) | ([ingredient?: any, tooltip?: boolean, area?: $Rect2i$$Type]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PositionedIngredient_ = $PositionedIngredient$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.ConfigCallback" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ConfigCallback {

 "save"(arg0: boolean): void

(arg0: boolean): void
}

export namespace $ConfigCallback {
const probejs$$marker: never
}
export class $ConfigCallback$$Static implements $ConfigCallback {


 "save"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigCallback$$Type = ((arg0: boolean) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigCallback_ = $ConfigCallback$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.Team" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$TeamRank, $TeamRank$$Type} from "dev.ftb.mods.ftbteams.api.TeamRank"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$TeamProperty, $TeamProperty$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import {$TeamMessage, $TeamMessage$$Type} from "dev.ftb.mods.ftbteams.api.TeamMessage"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$TeamPropertyCollection, $TeamPropertyCollection$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyCollection"

export interface $Team {

 "getOwner"(): $UUID
 "isValid"(): boolean
 "getName"(): $Component
 "getProperty"<T>(arg0: $TeamProperty$$Type<(T)>): T
 "setProperty"<T>(arg0: $TeamProperty$$Type<(T)>, arg1: T): void
 "getProperties"(): $TeamPropertyCollection
 "getId"(): $UUID
 "markDirty"(): void
 "getMembers"(): $Set<($UUID)>
 "getShortName"(): StringJS
 "isPlayerTeam"(): boolean
 "isPartyTeam"(): boolean
 "isServerTeam"(): boolean
 "getTeamInfo"(): $List<($Component)>
 "isClientTeam"(): boolean
 "getColoredName"(): $Component
 "createParty"(arg0: StringJS, arg1: $Color4I$$Type): $Team
 "getTeamId"(): $UUID
 "getExtraData"(): $CompoundTag
 "sendMessage"(arg0: $UUID$$Type, arg1: StringJS): void
 "sendMessage"(arg0: $UUID$$Type, arg1: $Component$$Type): void
 "getMessageHistory"(): $List<($TeamMessage)>
 "getRankForPlayer"(arg0: $UUID$$Type): $TeamRank
 "getPlayersByRank"(arg0: $TeamRank$$Type): $Map<($UUID), ($TeamRank)>
 "getTypeTranslationKey"(): StringJS
 "getOnlineMembers"(): $Collection<($ServerPlayer)>
get "owner"(): $UUID
get "valid"(): boolean
get "name"(): $Component
get "properties"(): $TeamPropertyCollection
get "id"(): $UUID
get "members"(): $Set<($UUID)>
get "shortName"(): StringJS
get "playerTeam"(): boolean
get "partyTeam"(): boolean
get "serverTeam"(): boolean
get "teamInfo"(): $List<($Component)>
get "clientTeam"(): boolean
get "coloredName"(): $Component
get "teamId"(): $UUID
get "extraData"(): $CompoundTag
get "messageHistory"(): $List<($TeamMessage)>
get "typeTranslationKey"(): StringJS
get "onlineMembers"(): $Collection<($ServerPlayer)>
}

export namespace $Team {
const probejs$$marker: never
}
export class $Team$$Static implements $Team {


 "getOwner"(): $UUID
 "isValid"(): boolean
 "getName"(): $Component
 "getProperty"<T>(arg0: $TeamProperty$$Type<(T)>): T
 "setProperty"<T>(arg0: $TeamProperty$$Type<(T)>, arg1: T): void
 "getProperties"(): $TeamPropertyCollection
 "getId"(): $UUID
 "markDirty"(): void
 "getMembers"(): $Set<($UUID)>
 "getShortName"(): StringJS
 "isPlayerTeam"(): boolean
 "isPartyTeam"(): boolean
 "isServerTeam"(): boolean
 "getTeamInfo"(): $List<($Component)>
 "isClientTeam"(): boolean
 "getColoredName"(): $Component
 "createParty"(arg0: StringJS, arg1: $Color4I$$Type): $Team
 "getTeamId"(): $UUID
 "getExtraData"(): $CompoundTag
 "sendMessage"(arg0: $UUID$$Type, arg1: StringJS): void
 "sendMessage"(arg0: $UUID$$Type, arg1: $Component$$Type): void
 "getMessageHistory"(): $List<($TeamMessage)>
 "getRankForPlayer"(arg0: $UUID$$Type): $TeamRank
 "getPlayersByRank"(arg0: $TeamRank$$Type): $Map<($UUID), ($TeamRank)>
 "getTypeTranslationKey"(): StringJS
 "getOnlineMembers"(): $Collection<($ServerPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Team$$Type = ($Team);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Team_ = $Team$$Type;
}}
declare module "dev.ftb.mods.ftbteams.data.ServerTeam" {
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$TeamType, $TeamType$$Type} from "dev.ftb.mods.ftbteams.data.TeamType"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$AbstractTeam, $AbstractTeam$$Type} from "dev.ftb.mods.ftbteams.data.AbstractTeam"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$TeamManagerImpl, $TeamManagerImpl$$Type} from "dev.ftb.mods.ftbteams.data.TeamManagerImpl"

export class $ServerTeam extends $AbstractTeam {

constructor(manager: $TeamManagerImpl$$Type, id: $UUID$$Type)

public "delete"(source: $CommandSourceStack$$Type): integer
public "getType"(): $TeamType
public "isServerTeam"(): boolean
public "getOnlineMembers"(): $Collection<(any)>
get "type"(): $TeamType
get "serverTeam"(): boolean
get "onlineMembers"(): $Collection<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerTeam$$Type = ($ServerTeam);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerTeam_ = $ServerTeam$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.QuestObjectType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$QuestObjectBase, $QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"
import {$ChatFormatting, $ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $QuestObjectType extends $Enum<($QuestObjectType)> implements $Predicate<($QuestObjectBase)> {
static readonly "TASK": $QuestObjectType
static readonly "ALL_PROGRESSING_OR_NULL": $Predicate<($QuestObjectBase)>
static readonly "NULL": $QuestObjectType
static readonly "NAME_MAP": $NameMap<($QuestObjectType)>
static readonly "REWARD": $QuestObjectType
static "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($QuestObjectType)>
static readonly "ALL_PROGRESSING": $Predicate<($QuestObjectBase)>
static readonly "CHAPTER": $QuestObjectType
static readonly "QUEST_LINK": $QuestObjectType
static readonly "CHAPTER_GROUP": $QuestObjectType
static readonly "FILE": $QuestObjectType
static readonly "REWARD_TABLE": $QuestObjectType
static readonly "QUEST": $QuestObjectType


public static "values"(): ($QuestObjectType)[]
public "test"(arg0: any): boolean
public "test"(object: $QuestObjectBase$$Type): boolean
public static "valueOf"(name: StringJS): $QuestObjectType
public "getId"(): StringJS
public "getColor"(): $ChatFormatting
public "getCompletedMessage"(): $Component
public "or"(arg0: $Predicate$$Type<($QuestObjectBase)>): $Predicate<($QuestObjectBase)>
public static "not"<T>(arg0: $Predicate$$Type<($QuestObjectBase)>): $Predicate<($QuestObjectBase)>
public "negate"(): $Predicate<($QuestObjectBase)>
public "and"(arg0: $Predicate$$Type<($QuestObjectBase)>): $Predicate<($QuestObjectBase)>
public static "isEqual"<T>(arg0: any): $Predicate<($QuestObjectBase)>
get "id"(): StringJS
get "color"(): $ChatFormatting
get "completedMessage"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestObjectType$$Type = (("null") | ("file") | ("chapter") | ("quest") | ("task") | ("reward") | ("reward_table") | ("chapter_group") | ("quest_link"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestObjectType_ = $QuestObjectType$$Type;
}}
declare module "dev.ftb.mods.ftbquests.item.StageBarrierBlockItem" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$ClipContext$Fluid, $ClipContext$Fluid$$Type} from "net.minecraft.world.level.ClipContext$Fluid"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $StageBarrierBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
/**
 * 
 * @deprecated
 */
 "block": $Block
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public static "invokeUpdateBlockEntityComponents"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StageBarrierBlockItem$$Type = ($StageBarrierBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StageBarrierBlockItem_ = $StageBarrierBlockItem$$Type;
}}
declare module "dev.ftb.mods.ftbquests.item.MissingItem" {
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
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $MissingItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": StringJS
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getName"(stack: $ItemStack$$Type): $Component
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flagIn: $TooltipFlag$$Type): void
public static "bumblezone$callGetPlayerPOVHitResult"(level: $Level$$Type, player: $Player$$Type, fluid: $ClipContext$Fluid$$Type): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MissingItem$$Type = ($MissingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MissingItem_ = $MissingItem$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.Widget$DrawLayer" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $Widget$DrawLayer extends $Enum<($Widget$DrawLayer)> {
static readonly "FOREGROUND": $Widget$DrawLayer
static readonly "BACKGROUND": $Widget$DrawLayer


public static "values"(): ($Widget$DrawLayer)[]
public static "valueOf"(name: StringJS): $Widget$DrawLayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Widget$DrawLayer$$Type = (("background") | ("foreground"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Widget$DrawLayer_ = $Widget$DrawLayer$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.property.TeamPropertyValue" {
import {$TeamProperty, $TeamProperty$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamProperty"

export class $TeamPropertyValue<T> {

constructor(property: $TeamProperty$$Type<(T)>, value: T)
constructor(k: $TeamProperty$$Type<(T)>)

public "getProperty"(): $TeamProperty<(T)>
public "toString"(): StringJS
public "getValue"(): T
public "setValue"(value: T): void
public "copy"(): $TeamPropertyValue<(T)>
get "property"(): $TeamProperty<(T)>
get "value"(): T
set "value"(value: T)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyValue$$Type<T> = ($TeamPropertyValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyValue_<T> = $TeamPropertyValue$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftbquests.quest.Excludable" {
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"

export interface $Excludable {

 "getId"(): long
 "isQuestObjectExcluded"(arg0: $TeamData$$Type): boolean
get "id"(): long
}

export namespace $Excludable {
const probejs$$marker: never
}
export class $Excludable$$Static implements $Excludable {


 "getId"(): long
 "isQuestObjectExcluded"(arg0: $TeamData$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Excludable$$Type = ($Excludable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Excludable_ = $Excludable$$Type;
}}
declare module "dev.ftb.mods.ftbteams.data.TeamArgumentProvider" {
import {$Team, $Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export interface $TeamArgumentProvider {

 "getTeam"(arg0: $CommandSourceStack$$Type): $Team

(arg0: $CommandSourceStack): $Team$$Type
}

export namespace $TeamArgumentProvider {
const probejs$$marker: never
}
export class $TeamArgumentProvider$$Static implements $TeamArgumentProvider {


 "getTeam"(arg0: $CommandSourceStack$$Type): $Team
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamArgumentProvider$$Type = ((arg0: $CommandSourceStack) => $Team$$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamArgumentProvider_ = $TeamArgumentProvider$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.ColorConfig" {
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ConfigValue, $ConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ColorConfig extends $ConfigValue<($Color4I)> {
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor()

public "onClicked"(clicked: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
public "getStringForGUI"(arg0: any): $Component
public "getStringForGUI"(v: $Color4I$$Type): $Component
public "withAlphaEditing"(): $ColorConfig
public "isAllowAlphaEdit"(): boolean
get "allowAlphaEdit"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorConfig$$Type = ($ColorConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorConfig_ = $ColorConfig$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.ImageResourceConfig" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$SelectableResource, $SelectableResource$$Type} from "dev.ftb.mods.ftblibrary.config.ui.resource.SelectableResource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ResourceConfigValue, $ResourceConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ResourceConfigValue"

export class $ImageResourceConfig extends $ResourceConfigValue<($ResourceLocation)> {
 "id": StringJS
static readonly "NONE": $ResourceLocation
static readonly "NULL_TEXT": $Component

constructor()

public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<($ResourceLocation)>
public "addInfo"(list: $TooltipList$$Type): void
public "onClicked"(clicked: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
public "setResource"(selectable: $SelectableResource$$Type<($ResourceLocation$$Type)>): boolean
public static "getResourceLocation"(icon: $Icon$$Type): $ResourceLocation
public "fixedResourceSize"(): $OptionalLong
get "empty"(): boolean
get "resource"(): $SelectableResource<($ResourceLocation)>
set "resource"(value: $SelectableResource$$Type<($ResourceLocation$$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImageResourceConfig$$Type = ($ImageResourceConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImageResourceConfig_ = $ImageResourceConfig$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.task.Task" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$PositionedIngredient, $PositionedIngredient$$Type} from "dev.ftb.mods.ftblibrary.util.client.PositionedIngredient"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TaskType, $TaskType$$Type} from "dev.ftb.mods.ftbquests.quest.task.TaskType"
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$QuestObjectType, $QuestObjectType$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ProgressChange, $ProgressChange$$Type} from "dev.ftb.mods.ftbquests.util.ProgressChange"
import {$Button, $Button$$Type} from "dev.ftb.mods.ftblibrary.ui.Button"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeModHelper$Components, $RecipeModHelper$Components$$Type} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$QuestProgressEventData, $QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $Task extends $QuestObject {
readonly "id": long

constructor(id: long, quest: $Quest$$Type)

public "getObjectType"(): $QuestObjectType
public "getType"(): $TaskType
public "submitTask"(teamData: $TeamData$$Type, player: $ServerPlayer$$Type, craftedItem: $ItemStack$$Type): void
public "submitTask"(teamData: $TeamData$$Type, player: $ServerPlayer$$Type): void
public "getQuestFile"(): $BaseQuestFile
public "checkOnLogin"(): boolean
public "formatProgress"(teamData: $TeamData$$Type, progress: long): StringJS
public "drawGUI"(teamData: $TeamData$$Type, graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "canInsertItem"(): boolean
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "getParentID"(): long
public "editedFromGUI"(): void
public "createSubGroup"(group: $ConfigGroup$$Type): $ConfigGroup
public "getMaxProgress"(): long
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "cacheProgress"(): boolean
public "onStarted"(data: $QuestProgressEventData$$Type<(any)>): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(any)>): void
public "deleteSelf"(): void
public "deleteChildren"(): void
public "getQuest"(): $Quest
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getButtonText"(): $MutableComponent
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "onCreated"(): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getIngredient"(widget: $Widget$$Type): $Optional<($PositionedIngredient)>
public "onButtonClicked"(button: $Button$$Type, canClick: boolean): void
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
public "addMouseOverText"(list: $TooltipList$$Type, teamData: $TeamData$$Type): void
public "getQuestChapter"(): $Chapter
public "getRelatedQuest"(): $Quest
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "formatMaxProgress"(): StringJS
public "consumesResources"(): boolean
public "hideProgressNumbers"(): boolean
public "addMouseOverHeader"(list: $TooltipList$$Type, teamData: $TeamData$$Type, advanced: boolean): void
public "autoSubmitOnPlayerTick"(): integer
public "isOptionalForProgression"(): boolean
public "submitItemsOnInventoryChange"(): boolean
public "addTitleInMouseOverText"(): boolean
get "objectType"(): $QuestObjectType
get "type"(): $TaskType
get "questFile"(): $BaseQuestFile
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "parentID"(): long
get "maxProgress"(): long
get "quest"(): $Quest
get "buttonText"(): $MutableComponent
get "questChapter"(): $Chapter
get "relatedQuest"(): $Quest
get "optionalForProgression"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Task$$Type = ($Task);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Task_ = $Task$$Type;
}}
declare module "dev.ftb.mods.ftbteams.data.TeamArgument$Info$Template" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$CommandBuildContext, $CommandBuildContext$$Type} from "net.minecraft.commands.CommandBuildContext"
import {$TeamArgument$Info, $TeamArgument$Info$$Type} from "dev.ftb.mods.ftbteams.data.TeamArgument$Info"
import {$TeamType, $TeamType$$Type} from "dev.ftb.mods.ftbteams.data.TeamType"
import {$TeamArgument, $TeamArgument$$Type} from "dev.ftb.mods.ftbteams.data.TeamArgument"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $TeamArgument$Info$Template implements $ArgumentTypeInfo$Template<($TeamArgument)> {

constructor(this$0: $TeamArgument$Info$$Type, teamType: $TeamType$$Type)

public "type"(): $ArgumentTypeInfo<($TeamArgument), (any)>
public "instantiate"(commandBuildContext: $CommandBuildContext$$Type): $TeamArgument
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamArgument$Info$Template$$Type = ($TeamArgument$Info$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamArgument$Info$Template_ = $TeamArgument$Info$Template$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.NameMap" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Iterator, $Iterator$$Type} from "java.util.Iterator"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Map, $Map$$Type} from "java.util.Map"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Spliterator, $Spliterator$$Type} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Random, $Random$$Type} from "java.util.Random"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$NameMap$Builder, $NameMap$Builder$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap$Builder"

export class $NameMap<E> implements $Iterable<(E)> {
readonly "defaultValue": E
readonly "keys": $List<(StringJS)>
readonly "values": $List<(E)>
readonly "map": $Map<(StringJS), (E)>


public "getNext"(value: E): E
public "getRandom"(rand: $Random$$Type): E
public "getIndex"(e: E): integer
public "getDisplayName"(value: E): $Component
public "getName"(value: E): StringJS
public "size"(): integer
public "get"(index: integer): E
public "get"(s: StringJS): E
public "iterator"(): $Iterator<(E)>
public static "of"<T>(defaultValue: T, values: $List$$Type<(T)>): $NameMap$Builder<(T)>
public static "of"<T>(defaultValue: T, values: (T)[]): $NameMap$Builder<(T)>
public "offset"(value: E, index: integer): E
public "write"(data: $FriendlyByteBuf$$Type, object: E): void
public "read"(data: $FriendlyByteBuf$$Type): E
public "getColor"(value: E): $Color4I
public "getIcon"(v: E): $Icon
public "getPrevious"(value: E): E
public "getStringIndex"(s: StringJS): integer
public "withDefault"(def: E): $NameMap<(E)>
public "getNullable"(s: StringJS): E
public "spliterator"(): $Spliterator<(E)>
public "forEach"(arg0: $Consumer$$Type<(E)>): void
[Symbol.iterator](): IterableIterator<E>;
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NameMap$$Type<E> = ($NameMap<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NameMap_<E> = $NameMap$$Type<(E)>;
}}
declare module "dev.ftb.mods.ftblibrary.ui.CursorType" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $CursorType extends $Enum<($CursorType)> {
static readonly "VRESIZE": $CursorType
static readonly "ARROW": $CursorType
static readonly "CROSSHAIR": $CursorType
static readonly "IBEAM": $CursorType
static readonly "HRESIZE": $CursorType
static readonly "HAND": $CursorType


public static "values"(): ($CursorType)[]
public static "valueOf"(name: StringJS): $CursorType
public static "set"(type: $CursorType$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CursorType$$Type = (("arrow") | ("ibeam") | ("crosshair") | ("hand") | ("hresize") | ("vresize"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CursorType_ = $CursorType$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.Movable" {
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $Movable {

 "getWidth"(): double
 "getHeight"(): double
 "getShape"(): StringJS
 "getY"(): double
 "getX"(): double
 "onMoved"(arg0: double, arg1: double, arg2: long): void
 "getRotation"(): double
 "getTitle"(): $Component
 "drawMoved"(graphics: $GuiGraphics$$Type): void
 "getMovableID"(): long
 "getChapter"(): $Chapter
 "copyToClipboard"(): void
 "initiateMoveClientSide"(arg0: $Chapter$$Type, arg1: double, arg2: double): void
 "isAlignToCorner"(): boolean
get "width"(): double
get "height"(): double
get "shape"(): StringJS
get "y"(): double
get "x"(): double
get "rotation"(): double
get "title"(): $Component
get "movableID"(): long
get "chapter"(): $Chapter
get "alignToCorner"(): boolean
}

export namespace $Movable {
const probejs$$marker: never
}
export class $Movable$$Static implements $Movable {


 "getWidth"(): double
 "getHeight"(): double
 "getShape"(): StringJS
 "getY"(): double
 "getX"(): double
 "onMoved"(arg0: double, arg1: double, arg2: long): void
 "getRotation"(): double
 "getTitle"(): $Component
 "drawMoved"(graphics: $GuiGraphics$$Type): void
 "getMovableID"(): long
 "getChapter"(): $Chapter
 "copyToClipboard"(): void
 "initiateMoveClientSide"(arg0: $Chapter$$Type, arg1: double, arg2: double): void
 "isAlignToCorner"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Movable$$Type = ($Movable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Movable_ = $Movable$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.LongConfig" {
import {$NumberConfig, $NumberConfig$$Type} from "dev.ftb.mods.ftblibrary.config.NumberConfig"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $LongConfig extends $NumberConfig<(long)> {
readonly "min": T
readonly "max": T
static readonly "COLOR": $Color4I
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor(mn: long, mx: long)

public "parse"(callback: $Consumer$$Type<(long)>, string: StringJS): boolean
public "scrollValue"(currentValue: long, forward: boolean): $Optional<(long)>
public "scrollValue"(arg0: any, arg1: boolean): $Optional<(any)>
public "addInfo"(list: $TooltipList$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongConfig$$Type = ($LongConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongConfig_ = $LongConfig$$Type;
}}
declare module "dev.ftb.mods.ftbquests.block.entity.ITaskScreen" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$IEditable, $IEditable$$Type} from "dev.ftb.mods.ftbquests.block.entity.IEditable"
import {$TaskScreenBlockEntity, $TaskScreenBlockEntity$$Type} from "dev.ftb.mods.ftbquests.block.entity.TaskScreenBlockEntity"

export interface $ITaskScreen extends $IEditable {

 "getSkin"(): $ItemStack
 "isInputOnly"(): boolean
 "getCoreScreen"(): $Optional<($TaskScreenBlockEntity)>
 "getTeamId"(): $UUID
 "isIndestructible"(): boolean
 "hasPermissionToEdit"(arg0: $Player$$Type): boolean
get "skin"(): $ItemStack
get "inputOnly"(): boolean
get "coreScreen"(): $Optional<($TaskScreenBlockEntity)>
get "teamId"(): $UUID
get "indestructible"(): boolean
}

export namespace $ITaskScreen {
const probejs$$marker: never
}
export class $ITaskScreen$$Static implements $ITaskScreen {


 "getSkin"(): $ItemStack
 "isInputOnly"(): boolean
 "getCoreScreen"(): $Optional<($TaskScreenBlockEntity)>
 "getTeamId"(): $UUID
 "isIndestructible"(): boolean
 "hasPermissionToEdit"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITaskScreen$$Type = ($ITaskScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITaskScreen_ = $ITaskScreen$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.translation.TranslationKey" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$List, $List$$Type} from "java.util.List"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $TranslationKey extends $Enum<($TranslationKey)> {
static readonly "QUEST_DESC": $TranslationKey
static readonly "NAME_MAP": $NameMap<($TranslationKey)>
static readonly "TITLE": $TranslationKey
static readonly "QUEST_SUBTITLE": $TranslationKey
static readonly "CHAPTER_SUBTITLE": $TranslationKey


public "getName"(): StringJS
public static "values"(): ($TranslationKey)[]
public static "valueOf"(name: StringJS): $TranslationKey
public "validate"(either: $Either$$Type<(StringJS), ($List$$Type<(StringJS)>)>): $Either<(StringJS), ($List<(StringJS)>)>
public "isListVal"(): boolean
public "getTranslationKey"(): StringJS
get "name"(): StringJS
get "listVal"(): boolean
get "translationKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TranslationKey$$Type = (("title") | ("quest_subtitle") | ("quest_desc") | ("chapter_subtitle"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TranslationKey_ = $TranslationKey$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.Theme" {
import {$WidgetType, $WidgetType$$Type} from "dev.ftb.mods.ftblibrary.ui.WidgetType"
import {$FormattedCharSequence, $FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$FormattedText, $FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$List, $List$$Type} from "java.util.List"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$ImageIcon, $ImageIcon$$Type} from "dev.ftb.mods.ftblibrary.icon.ImageIcon"

export class $Theme {
static readonly "MOUSE_OVER": integer
static readonly "BACKGROUND_SQUARES": $ImageIcon
static readonly "CENTERED": integer
static readonly "SHADOW": integer
static readonly "CENTERED_V": integer
static readonly "DARK": integer
static "renderDebugBoxes": boolean
static readonly "UNICODE": integer
static readonly "DEFAULT": $Theme

constructor()

public "getFont"(): $Font
public "drawString"(graphics: $GuiGraphics$$Type, text: any, x: integer, y: integer, flags: integer): integer
public "drawString"(graphics: $GuiGraphics$$Type, text: any, x: integer, y: integer, color: $Color4I$$Type, flags: integer): integer
public "drawString"(graphics: $GuiGraphics$$Type, text: any, x: integer, y: integer): integer
public "drawGui"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "drawWidget"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "drawTextBox"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "getFontHeight"(): integer
public "getStringWidth"(text: $FormattedCharSequence$$Type): integer
public "getStringWidth"(text: $FormattedText$$Type): integer
public "getStringWidth"(text: StringJS): integer
public "drawButton"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "drawScrollBar"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type, vertical: boolean): void
public "drawSlot"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "drawCheckbox"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type, selected: boolean, radioButton: boolean): void
public "drawPanelBackground"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "trimStringToWidth"(text: $FormattedText$$Type, width: integer): $FormattedText
public "trimStringToWidth"(text: StringJS, width: integer): StringJS
public "getContentColor"(type: $WidgetType$$Type): $Color4I
public "drawContextMenuBackground"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawScrollBarBackground"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "drawContainerSlot"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawCheckboxBackground"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, radioButton: boolean): void
public "drawHorizontalTab"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, selected: boolean): void
public "getInvertedContentColor"(): $Color4I
public "trimStringToWidthReverse"(text: StringJS, width: integer): StringJS
public "listFormattedStringToWidth"(text: $FormattedText$$Type, width: integer): $List<($FormattedText)>
get "font"(): $Font
get "fontHeight"(): integer
get "invertedContentColor"(): $Color4I
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Theme$$Type = ($Theme);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Theme_ = $Theme$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.ChapterImage" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Movable, $Movable$$Type} from "dev.ftb.mods.ftbquests.quest.Movable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$WeakReference, $WeakReference$$Type} from "java.lang.ref.WeakReference"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"

export class $ChapterImage implements $Movable {
static readonly "FTBQ_IMAGE": StringJS
static "clipboard": $WeakReference<($ChapterImage)>
static "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ChapterImage)>

constructor(c: $Chapter$$Type)

public "getWidth"(): double
public "getHeight"(): double
public "getShape"(): StringJS
public "getOrder"(): integer
public "copy"(newChapter: $Chapter$$Type, newX: double, newY: double): $ChapterImage
public "getY"(): double
public "getX"(): double
public "onMoved"(x: double, y: double, chapterId: long): void
public "getAlpha"(): integer
public "setPosition"(x: double, y: double): $ChapterImage
public "getColor"(): $Color4I
public "getRotation"(): double
public "getImage"(): $Icon
public "getTitle"(): $Component
public "getClick"(): StringJS
public "addHoverText"(list: $TooltipList$$Type): void
public "readNetData"(buffer: $FriendlyByteBuf$$Type): void
public "drawMoved"(graphics: $GuiGraphics$$Type): void
public "getMovableID"(): long
public "writeNetData"(buffer: $FriendlyByteBuf$$Type): void
public "getChapter"(): $Chapter
public "writeData"(nbt: $CompoundTag$$Type): $CompoundTag
public "setImage"(image: $Icon$$Type): $ChapterImage
public static "fromNet"(parent: $Chapter$$Type, buf: $FriendlyByteBuf$$Type): $ChapterImage
public "readData"(nbt: $CompoundTag$$Type): void
public "copyToClipboard"(): void
public "shouldShowImage"(teamData: $TeamData$$Type): boolean
public static "isImageInClipboard"(): boolean
public "initiateMoveClientSide"(to: $Chapter$$Type, _x: double, _y: double): void
public "isAlignToCorner"(): boolean
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "isAspectRatioOff"(): boolean
public "fixupAspectRatio"(adjustWidth: boolean): void
get "width"(): double
get "height"(): double
get "shape"(): StringJS
get "order"(): integer
get "y"(): double
get "x"(): double
get "alpha"(): integer
get "color"(): $Color4I
get "rotation"(): double
get "image"(): $Icon
get "title"(): $Component
get "click"(): StringJS
get "movableID"(): long
get "chapter"(): $Chapter
set "image"(value: $Icon$$Type)
get "alignToCorner"(): boolean
get "aspectRatioOff"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChapterImage$$Type = ($ChapterImage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChapterImage_ = $ChapterImage$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.reward.RewardAutoClaim" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $RewardAutoClaim extends $Enum<($RewardAutoClaim)> {
static readonly "DISABLED": $RewardAutoClaim
static readonly "NO_TOAST": $RewardAutoClaim
static readonly "INVISIBLE": $RewardAutoClaim
static readonly "NAME_MAP": $NameMap<($RewardAutoClaim)>
static readonly "NAME_MAP_NO_DEFAULT": $NameMap<($RewardAutoClaim)>
static readonly "ENABLED": $RewardAutoClaim
 "id": StringJS
static readonly "DEFAULT": $RewardAutoClaim


public static "values"(): ($RewardAutoClaim)[]
public static "valueOf"(name: StringJS): $RewardAutoClaim
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RewardAutoClaim$$Type = (("default") | ("disabled") | ("enabled") | ("no_toast") | ("invisible"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RewardAutoClaim_ = $RewardAutoClaim$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.ConfigFromString" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ConfigValue, $ConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigValue"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $ConfigFromString<T> extends $ConfigValue<(T)> {
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor()

public "parse"(arg0: $Consumer$$Type<(T)>, arg1: StringJS): boolean
public "canScroll"(): boolean
public "scrollValue"(currentValue: T, forward: boolean): $Optional<(T)>
public "onClicked"(clicked: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
public "getStringForGUI"(v: T): $Component
public "getStringFromValue"(v: T): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigFromString$$Type<T> = ($ConfigFromString<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigFromString_<T> = $ConfigFromString$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftblibrary.config.Tristate" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $Tristate extends $Enum<($Tristate)> {
readonly "result": $InteractionResult
readonly "color": $Color4I
static readonly "NAME_MAP": $NameMap<($Tristate)>
readonly "displayName": StringJS
readonly "icon": $Icon
static readonly "TRUE": $Tristate
static readonly "FALSE": $Tristate
static readonly "VALUES": ($Tristate)[]
static readonly "DEFAULT": $Tristate


public "isDefault"(): boolean
public "isFalse"(): boolean
public "get"(def: boolean): boolean
public "toString"(): StringJS
public static "values"(): ($Tristate)[]
public static "valueOf"(name: StringJS): $Tristate
public "write"(nbt: $CompoundTag$$Type, key: StringJS): void
public "write"(buffer: $FriendlyByteBuf$$Type): void
public static "read"(nbt: $CompoundTag$$Type, key: StringJS): $Tristate
public static "read"(buffer: $FriendlyByteBuf$$Type): $Tristate
public "isTrue"(): boolean
public "getOpposite"(): $Tristate
get "default"(): boolean
get "false"(): boolean
get "true"(): boolean
get "opposite"(): $Tristate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tristate$$Type = (("false") | ("true") | ("default"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Tristate_ = $Tristate$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.snbt.config.DoubleValue" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$SNBTConfig, $SNBTConfig$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig"
import {$NumberValue, $NumberValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.NumberValue"
import {$SNBTCompoundTag, $SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"

export class $DoubleValue extends $NumberValue<(double)> {
readonly "parent": $SNBTConfig
readonly "key": StringJS


public "range"(max: double): $NumberValue<(double)>
public "set"(arg0: any): void
public "set"(v: double): void
public "write"(tag: $SNBTCompoundTag$$Type): void
public "read"(tag: $SNBTCompoundTag$$Type): void
public "createClientConfig"(group: $ConfigGroup$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleValue$$Type = ($DoubleValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleValue_ = $DoubleValue$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.input.KeyModifiers" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $KeyModifiers {
static readonly "NONE": $KeyModifiers
readonly "modifiers": integer

constructor(m: integer)

public "shift"(): boolean
public "control"(): boolean
public "start"(): boolean
public "alt"(): boolean
public "onlyControl"(): boolean
public "numLock"(): boolean
public "capsLock"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyModifiers$$Type = ($KeyModifiers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyModifiers_ = $KeyModifiers$$Type;
}}
declare module "dev.ftb.mods.ftbquests.block.entity.BaseBarrierBlockEntity$TeleportData" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MinecraftServer, $MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $BaseBarrierBlockEntity$TeleportData extends $Record {
static readonly "CODEC": $Codec<($BaseBarrierBlockEntity$TeleportData)>
static readonly "NONE": $BaseBarrierBlockEntity$TeleportData
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($BaseBarrierBlockEntity$TeleportData)>

constructor(enabled: boolean, relative: boolean, dest: $BlockPos$$Type, pitch: float, yaw: float, dimId: $Optional$$Type<($ResourceKey$$Type<($Level$$Type)>)>)

public "relative"(): boolean
public "getLevel"(server: $MinecraftServer$$Type): $Level
public "dest"(): $BlockPos
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "enabled"(): boolean
public "pitch"(): float
public "yaw"(): float
public "dimId"(): $Optional<($ResourceKey<($Level)>)>
public "withDestPos"(pos: $BlockPos$$Type): $BaseBarrierBlockEntity$TeleportData
public "teleportPlayer"(player: $ServerPlayer$$Type): void
public "effectiveDest"(basePos: $BlockPos$$Type): $BaseBarrierBlockEntity$TeleportData
public "withDestZ"(z: integer): $BaseBarrierBlockEntity$TeleportData
public "withDimId"(dimId: $ResourceKey$$Type<($Level)>): $BaseBarrierBlockEntity$TeleportData
public "withDimId"(dimStr: StringJS): $BaseBarrierBlockEntity$TeleportData
public "withDestX"(x: integer): $BaseBarrierBlockEntity$TeleportData
public "withDestY"(y: integer): $BaseBarrierBlockEntity$TeleportData
public "withPitch"(pitch: float): $BaseBarrierBlockEntity$TeleportData
public "withYaw"(yaw: float): $BaseBarrierBlockEntity$TeleportData
public "withRelative"(relative: boolean): $BaseBarrierBlockEntity$TeleportData
public "withEnabled"(enabled: boolean): $BaseBarrierBlockEntity$TeleportData
public "dimStr"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBarrierBlockEntity$TeleportData$$Type = ({"dest"?: $BlockPos$$Type, "dimId"?: ($ResourceKey$$Type<($Level$$Type)>)?, "pitch"?: float, "enabled"?: boolean, "yaw"?: float, "relative"?: boolean}) | ([dest?: $BlockPos$$Type, dimId?: ($ResourceKey$$Type<($Level$$Type)>)?, pitch?: float, enabled?: boolean, yaw?: float, relative?: boolean]);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBarrierBlockEntity$TeleportData_ = $BaseBarrierBlockEntity$TeleportData$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.util.BooleanConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BooleanConsumer {

 "accept"(arg0: boolean): void

(arg0: boolean): void
}

export namespace $BooleanConsumer {
const probejs$$marker: never
}
export class $BooleanConsumer$$Static implements $BooleanConsumer {


 "accept"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanConsumer$$Type = ((arg0: boolean) => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BooleanConsumer_ = $BooleanConsumer$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.IntConfig" {
import {$NumberConfig, $NumberConfig$$Type} from "dev.ftb.mods.ftblibrary.config.NumberConfig"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $IntConfig extends $NumberConfig<(integer)> {
readonly "min": T
readonly "max": T
static readonly "COLOR": $Color4I
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor(mn: integer, mx: integer)

public "parse"(callback: $Consumer$$Type<(integer)>, string: StringJS): boolean
public "scrollValue"(currentValue: integer, forward: boolean): $Optional<(integer)>
public "scrollValue"(arg0: any, arg1: boolean): $Optional<(any)>
public "addInfo"(list: $TooltipList$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntConfig$$Type = ($IntConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntConfig_ = $IntConfig$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.StringConfig" {
import {$ConfigFromString, $ConfigFromString$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigFromString"
import {$Pattern, $Pattern$$Type} from "java.util.regex.Pattern"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export class $StringConfig extends $ConfigFromString<(StringJS)> {
static readonly "COLOR": $Color4I
readonly "pattern": $Pattern
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor(p: $Pattern$$Type)
constructor()

public "parse"(callback: $Consumer$$Type<(StringJS)>, string: StringJS): boolean
public "getColor"(arg0: any): $Color4I
public "getColor"(v: StringJS): $Color4I
public "addInfo"(list: $TooltipList$$Type): void
public "getStringForGUI"(v: StringJS): $Component
public "getStringForGUI"(arg0: any): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringConfig$$Type = ($StringConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StringConfig_ = $StringConfig$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.ui.IOpenableScreen" {
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"

export interface $IOpenableScreen extends $Runnable {

 "run"(): void
 "openGuiLater"(): void
 "openAfter"(runnable: $Runnable$$Type): $Runnable
 "closeGui"(openPrevScreen: boolean): void
 "closeGui"(): void
 "openGui"(): void
 "closeContextMenu"(): void

(): void
}

export namespace $IOpenableScreen {
const probejs$$marker: never
}
export class $IOpenableScreen$$Static implements $IOpenableScreen {


 "run"(): void
 "openGuiLater"(): void
 "openAfter"(runnable: $Runnable$$Type): $Runnable
 "closeGui"(openPrevScreen: boolean): void
 "closeGui"(): void
 "openGui"(): void
 "closeContextMenu"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOpenableScreen$$Type = (() => void);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOpenableScreen_ = $IOpenableScreen$$Type;
}}
declare module "dev.ftb.mods.ftbquests.util.ProgressChange" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Date, $Date$$Type} from "java.util.Date"
import {$QuestObjectBase, $QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"

export class $ProgressChange {
static "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ProgressChange)>

constructor(origin: $QuestObjectBase$$Type, playerId: $UUID$$Type)

public "getDate"(): $Date
public "setReset"(reset: boolean): $ProgressChange
public "shouldReset"(): boolean
public "getPlayerId"(): $UUID
public "shouldNotify"(): boolean
public "maybeForceProgress"(teamId: $UUID$$Type): void
public static "createServerSide"(origin: long, reset: boolean, playerId: $UUID$$Type, notifications: boolean): $ProgressChange
public "withNotifications"(): $ProgressChange
get "date"(): $Date
set "reset"(value: boolean)
get "playerId"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressChange$$Type = ($ProgressChange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressChange_ = $ProgressChange$$Type;
}}
declare module "dev.ftb.mods.ftbquests.item.ScreenBlockItem$ScreenSize" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export class $ScreenBlockItem$ScreenSize extends $Enum<($ScreenBlockItem$ScreenSize)> {
static readonly "THREE_X_THREE": $ScreenBlockItem$ScreenSize
static readonly "FIVE_X_FIVE": $ScreenBlockItem$ScreenSize
static readonly "SEVEN_X_SEVEN": $ScreenBlockItem$ScreenSize
static readonly "ONE_X_ONE": $ScreenBlockItem$ScreenSize


public "getSize"(): integer
public static "values"(): ($ScreenBlockItem$ScreenSize)[]
public static "valueOf"(name: StringJS): $ScreenBlockItem$ScreenSize
get "size"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenBlockItem$ScreenSize$$Type = (("one_x_one") | ("three_x_three") | ("five_x_five") | ("seven_x_seven"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenBlockItem$ScreenSize_ = $ScreenBlockItem$ScreenSize$$Type;
}}
declare module "dev.ftb.mods.ftbteams.data.TeamArgument$Info" {
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo$Template"
import {$ArgumentType, $ArgumentType$$Type} from "com.mojang.brigadier.arguments.ArgumentType"
import {$TeamArgument$Info$Template, $TeamArgument$Info$Template$$Type} from "dev.ftb.mods.ftbteams.data.TeamArgument$Info$Template"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$JsonObject, $JsonObject$$Type} from "com.google.gson.JsonObject"
import {$TeamArgument, $TeamArgument$$Type} from "dev.ftb.mods.ftbteams.data.TeamArgument"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$$Type} from "net.minecraft.commands.synchronization.ArgumentTypeInfo"

export class $TeamArgument$Info implements $ArgumentTypeInfo<($TeamArgument), ($TeamArgument$Info$Template)> {

constructor()

public "unpack"(arg0: $ArgumentType$$Type<(any)>): $ArgumentTypeInfo$Template<(any)>
public "unpack"(argumentType: $TeamArgument$$Type): $TeamArgument$Info$Template
public "serializeToNetwork"(template: $TeamArgument$Info$Template$$Type, buf: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $FriendlyByteBuf$$Type): void
public "deserializeFromNetwork"(buf: $FriendlyByteBuf$$Type): $TeamArgument$Info$Template
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $JsonObject$$Type): void
public "serializeToJson"(template: $TeamArgument$Info$Template$$Type, jsonObject: $JsonObject$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamArgument$Info$$Type = ($TeamArgument$Info);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamArgument$Info_ = $TeamArgument$Info$$Type;
}}
declare module "dev.ftb.mods.ftbquests.block.DetectorBlock" {
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DetectorBlock extends $BaseEntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "PROPS": $BlockBehaviour$Properties
 "hasCollision": boolean

constructor(props: $BlockBehaviour$Properties$$Type)

public "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, entity: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public "getRenderShape"(blockState: $BlockState$$Type): $RenderShape
public "neighborChanged"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, block: $Block$$Type, blockPos2: $BlockPos$$Type, bl: boolean): void
public "asHolder"(): $Holder<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DetectorBlock$$Type = ($DetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DetectorBlock_ = $DetectorBlock$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.property.PrivacyMode" {
import {$Keyable, $Keyable$$Type} from "com.mojang.serialization.Keyable"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$$Type} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type} from "net.minecraft.util.StringRepresentable"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $PrivacyMode extends $Enum<($PrivacyMode)> implements $StringRepresentable {
static readonly "NAME_MAP": $NameMap<($PrivacyMode)>
static readonly "PUBLIC": $PrivacyMode
static readonly "VALUES": ($PrivacyMode)[]
static readonly "ALLIES": $PrivacyMode
static readonly "PRIVATE": $PrivacyMode


public static "values"(): ($PrivacyMode)[]
public static "valueOf"(name: StringJS): $PrivacyMode
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrivacyMode$$Type = (("allies") | ("private") | ("public"));
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrivacyMode_ = $PrivacyMode$$Type;
}}
declare module "dev.ftb.mods.ftbquests.block.entity.BaseBarrierBlockEntity" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$EditableBlockEntity, $EditableBlockEntity$$Type} from "dev.ftb.mods.ftbquests.block.entity.EditableBlockEntity"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BaseBarrierBlockEntity$TeleportData, $BaseBarrierBlockEntity$TeleportData$$Type} from "dev.ftb.mods.ftbquests.block.entity.BaseBarrierBlockEntity$TeleportData"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BaseBarrierBlockEntity extends $EditableBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(blockEntityType: $BlockEntityType$$Type<(any)>, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public static "tick"(level: $Level$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, blockEntity: $BlockEntity$$Type): void
public "isOpen"(arg0: $Player$$Type): boolean
public "saveAdditional"(compoundTag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "setChanged"(): void
public "getSkin"(): $ItemStack
public "loadAdditional"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "setSkin"(skin: $ItemStack$$Type): void
public "getUpdateTag"(provider: $HolderLookup$Provider$$Type): $CompoundTag
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "forceAppearanceUpdate"(): void
public "setInvisibleWhenOpen"(invisibleWhenOpen: boolean): void
public "isInvisibleWhenOpen"(): boolean
public "getClientAppearance"(): $BlockState
public "updateFromString"(objStr: StringJS): void
public "optionalTeleportData"(): $Optional<($BaseBarrierBlockEntity$TeleportData)>
public "hasPermissionToEdit"(player: $Player$$Type): boolean
public "fillConfigGroup"(): $ConfigGroup
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "skin"(): $ItemStack
set "skin"(value: $ItemStack$$Type)
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
set "invisibleWhenOpen"(value: boolean)
get "invisibleWhenOpen"(): boolean
get "clientAppearance"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBarrierBlockEntity$$Type = ($BaseBarrierBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBarrierBlockEntity_ = $BaseBarrierBlockEntity$$Type;
}}
declare module "dev.ftb.mods.ftbquests.block.entity.TaskScreenBlockEntity" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ITaskScreen, $ITaskScreen$$Type} from "dev.ftb.mods.ftbquests.block.entity.ITaskScreen"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$EditableBlockEntity, $EditableBlockEntity$$Type} from "dev.ftb.mods.ftbquests.block.entity.EditableBlockEntity"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Task, $Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TaskScreenBlockEntity extends $EditableBlockEntity implements $ITaskScreen {
 "fakeTextureUV": (float)[]
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "getTask"(): $Task
public "getSkin"(): $ItemStack
public "loadAdditional"(compoundTag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "setTask"(task: $Task$$Type): void
public "isInputOnly"(): boolean
public "setInputOnly"(inputOnly: boolean): void
public "getCoreScreen"(): $Optional<($TaskScreenBlockEntity)>
public "setTeamId"(teamId: $UUID$$Type): void
public "setSkin"(skin: $ItemStack$$Type): void
public "getTeamId"(): $UUID
public "isTextShadow"(): boolean
public "setTextShadow"(textShadow: boolean): void
public "getUpdateTag"(provider: $HolderLookup$Provider$$Type): $CompoundTag
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getInputModeIcon"(): $ItemStack
public "setInputModeIcon"(inputModeIcon: $ItemStack$$Type): void
public "setIndestructible"(indestructible: boolean): void
public "getCachedTeamData"(): $TeamData
public "getFakeTextureUV"(): (float)[]
public "isIndestructible"(): boolean
public "removeAllAuxScreens"(): void
public "hasPermissionToEdit"(player: $Player$$Type): boolean
public "fillConfigGroup"(data: $TeamData$$Type): $ConfigGroup
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "task"(): $Task
get "skin"(): $ItemStack
set "task"(value: $Task$$Type)
get "inputOnly"(): boolean
set "inputOnly"(value: boolean)
get "coreScreen"(): $Optional<($TaskScreenBlockEntity)>
set "teamId"(value: $UUID$$Type)
set "skin"(value: $ItemStack$$Type)
get "teamId"(): $UUID
get "textShadow"(): boolean
set "textShadow"(value: boolean)
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "inputModeIcon"(): $ItemStack
set "inputModeIcon"(value: $ItemStack$$Type)
set "indestructible"(value: boolean)
get "cachedTeamData"(): $TeamData
get "fakeTextureUV"(): (float)[]
get "indestructible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenBlockEntity$$Type = ($TaskScreenBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaskScreenBlockEntity_ = $TaskScreenBlockEntity$$Type;
}}
declare module "dev.ftb.mods.ftbteams.data.PartyTeam" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$TeamType, $TeamType$$Type} from "dev.ftb.mods.ftbteams.data.TeamType"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$TeamRank, $TeamRank$$Type} from "dev.ftb.mods.ftbteams.api.TeamRank"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$AbstractTeam, $AbstractTeam$$Type} from "dev.ftb.mods.ftbteams.data.AbstractTeam"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$TeamManagerImpl, $TeamManagerImpl$$Type} from "dev.ftb.mods.ftbteams.data.TeamManagerImpl"

export class $PartyTeam extends $AbstractTeam {

constructor(manager: $TeamManagerImpl$$Type, id: $UUID$$Type)

public "getOwner"(): $UUID
public "join"(player: $ServerPlayer$$Type): integer
public "getType"(): $TeamType
public "leave"(id: $UUID$$Type): integer
public "kick"(from: $CommandSourceStack$$Type, players: $Collection$$Type<($GameProfile$$Type)>): integer
public "deserializeNBT"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "demote"(from: $ServerPlayer$$Type, players: $Collection$$Type<($GameProfile$$Type)>): integer
public "invite"(inviter: $ServerPlayer$$Type, profiles: $Collection$$Type<($GameProfile$$Type)>): integer
public "promote"(from: $ServerPlayer$$Type, players: $Collection$$Type<($GameProfile$$Type)>): integer
public "removeAlly"(source: $CommandSourceStack$$Type, players: $Collection$$Type<($GameProfile$$Type)>): integer
public "addAlly"(source: $CommandSourceStack$$Type, players: $Collection$$Type<($GameProfile$$Type)>): integer
public "isPartyTeam"(): boolean
public "isOwner"(profile: $UUID$$Type): boolean
public "listAllies"(source: $CommandSourceStack$$Type): integer
public "forceDisband"(from: $CommandSourceStack$$Type): integer
public "getRankForPlayer"(playerId: $UUID$$Type): $TeamRank
public "transferOwnership"(from: $CommandSourceStack$$Type, toProfiles: $Collection$$Type<($GameProfile$$Type)>): integer
public "transferOwnership"(from: $CommandSourceStack$$Type, toProfile: $GameProfile$$Type): integer
public "getOnlineMembers"(): $Collection<(any)>
get "owner"(): $UUID
get "type"(): $TeamType
get "partyTeam"(): boolean
get "onlineMembers"(): $Collection<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartyTeam$$Type = ($PartyTeam);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartyTeam_ = $PartyTeam$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.loot.WeightedReward" {
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"

export class $WeightedReward implements $Comparable<($WeightedReward)> {

constructor(reward: $Reward$$Type, weight: float)

public "compareTo"(o: $WeightedReward$$Type): integer
public "compareTo"(arg0: any): integer
public "copy"(): $WeightedReward
public "getWeight"(): float
public static "chanceString"(weight: float, totalWeight: float): StringJS
public static "chanceString"(weight: float, totalWeight: float, empty: boolean): StringJS
public "getReward"(): $Reward
public "setWeight"(weight: float): void
get "weight"(): float
get "reward"(): $Reward
set "weight"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeightedReward$$Type = ($WeightedReward);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeightedReward_ = $WeightedReward$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.FluidConfig" {
import {$SelectableResource, $SelectableResource$$Type} from "dev.ftb.mods.ftblibrary.config.ui.resource.SelectableResource"
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$FluidStack, $FluidStack$$Type} from "dev.architectury.fluid.FluidStack"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ResourceConfigValue, $ResourceConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ResourceConfigValue"

export class $FluidConfig extends $ResourceConfigValue<($FluidStack)> {
 "id": StringJS
static readonly "NULL_TEXT": $Component

constructor(allowEmpty: boolean)
constructor(fixedSize: long)

public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<($FluidStack)>
public "onClicked"(clickedWidget: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
public "setResource"(selectable: $SelectableResource$$Type<($FluidStack$$Type)>): boolean
public "showAmount"(show: boolean): $FluidConfig
public "fixedResourceSize"(): $OptionalLong
public "allowEmptyResource"(): boolean
public "getStringForGUI"(v: $FluidStack$$Type): $Component
public "getStringForGUI"(arg0: any): $Component
get "empty"(): boolean
get "resource"(): $SelectableResource<($FluidStack)>
set "resource"(value: $SelectableResource$$Type<($FluidStack$$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidConfig$$Type = ($FluidConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidConfig_ = $FluidConfig$$Type;
}}
declare module "dev.ftb.mods.ftbquests.api.QuestFile" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$QuestLink, $QuestLink$$Type} from "dev.ftb.mods.ftbquests.quest.QuestLink"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Chapter, $Chapter$$Type} from "dev.ftb.mods.ftbquests.quest.Chapter"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$Team, $Team$$Type} from "dev.ftb.mods.ftbteams.api.Team"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $QuestFile {

 "getAllTeamData"(): $Collection<($TeamData)>
 "isServerSide"(): boolean
 "forAllChapters"(arg0: $Consumer$$Type<($Chapter)>): void
 "forAllQuests"(arg0: $Consumer$$Type<($Quest)>): void
 "getTeamData"(arg0: $Player$$Type): $Optional<($TeamData)>
 "canEdit"(): boolean
 "getNullableTeamData"(arg0: $UUID$$Type): $TeamData
 "getOrCreateTeamData"(arg0: $UUID$$Type): $TeamData
 "getOrCreateTeamData"(arg0: $Team$$Type): $TeamData
/**
 * 
 * @deprecated
 */
 "getOrCreateTeamData"(arg0: $Entity$$Type): $TeamData
 "forAllQuestLinks"(arg0: $Consumer$$Type<($QuestLink)>): void
get "allTeamData"(): $Collection<($TeamData)>
get "serverSide"(): boolean
}

export namespace $QuestFile {
const probejs$$marker: never
}
export class $QuestFile$$Static implements $QuestFile {


 "getAllTeamData"(): $Collection<($TeamData)>
 "isServerSide"(): boolean
 "forAllChapters"(arg0: $Consumer$$Type<($Chapter)>): void
 "forAllQuests"(arg0: $Consumer$$Type<($Quest)>): void
 "getTeamData"(arg0: $Player$$Type): $Optional<($TeamData)>
 "canEdit"(): boolean
 "getNullableTeamData"(arg0: $UUID$$Type): $TeamData
 "getOrCreateTeamData"(arg0: $UUID$$Type): $TeamData
 "getOrCreateTeamData"(arg0: $Team$$Type): $TeamData
/**
 * 
 * @deprecated
 */
 "getOrCreateTeamData"(arg0: $Entity$$Type): $TeamData
 "forAllQuestLinks"(arg0: $Consumer$$Type<($QuestLink)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuestFile$$Type = ($QuestFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuestFile_ = $QuestFile$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.property.TeamPropertyCollection" {
import {$TeamPropertyValue, $TeamPropertyValue$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyValue"
import {$TeamProperty, $TeamProperty$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"

export interface $TeamPropertyCollection {

 "size"(): integer
 "get"<T>(arg0: $TeamProperty$$Type<(T)>): T
 "set"<T>(arg0: $TeamProperty$$Type<(T)>, arg1: T): void
 "forEach"<T>(arg0: $BiConsumer$$Type<($TeamProperty<(T)>), ($TeamPropertyValue<(T)>)>): void
 "copy"(): $TeamPropertyCollection
 "updateFrom"(arg0: $TeamPropertyCollection$$Type): void
}

export namespace $TeamPropertyCollection {
const probejs$$marker: never
}
export class $TeamPropertyCollection$$Static implements $TeamPropertyCollection {


 "size"(): integer
 "get"<T>(arg0: $TeamProperty$$Type<(T)>): T
 "set"<T>(arg0: $TeamProperty$$Type<(T)>, arg1: T): void
 "forEach"<T>(arg0: $BiConsumer$$Type<($TeamProperty<(T)>), ($TeamPropertyValue<(T)>)>): void
 "copy"(): $TeamPropertyCollection
 "updateFrom"(arg0: $TeamPropertyCollection$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamPropertyCollection$$Type = ($TeamPropertyCollection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamPropertyCollection_ = $TeamPropertyCollection$$Type;
}}
declare module "dev.ftb.mods.ftbquests.block.TaskScreenBlock" {
import {$BaseEntityBlock, $BaseEntityBlock$$Type} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey, $Block$BlockStatePairKey$$Type} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper, $IdMapper$$Type} from "net.minecraft.core.IdMapper"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TaskScreenAuxBlockEntity, $TaskScreenAuxBlockEntity$$Type} from "dev.ftb.mods.ftbquests.block.entity.TaskScreenAuxBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BoundingBox, $BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$TaskScreenBlockEntity, $TaskScreenBlockEntity$$Type} from "dev.ftb.mods.ftbquests.block.entity.TaskScreenBlockEntity"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$$Type} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $TaskScreenBlock extends $BaseEntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
 "descriptionId": StringJS
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "PROPS": $BlockBehaviour$Properties
 "hasCollision": boolean

constructor(props: $BlockBehaviour$Properties$$Type, size: integer)

public "getSize"(): integer
public "setPlacedBy"(level: $Level$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, livingEntity: $LivingEntity$$Type, itemStack: $ItemStack$$Type): void
public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public "onRemove"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public static "getMultiblockBounds"(corePos: $BlockPos$$Type, size: integer, facing: $Direction$$Type): $BoundingBox
public static "blockEntityProvider"(): $BlockEntityType$BlockEntitySupplier<($TaskScreenBlockEntity)>
public "getStateForPlacement"(blockPlaceContext: $BlockPlaceContext$$Type): $BlockState
public "getDestroyProgress"(blockState: $BlockState$$Type, player: $Player$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): float
public "appendHoverText"(itemStack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, list: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public static "blockEntityAuxProvider"(): $BlockEntityType$BlockEntitySupplier<($TaskScreenAuxBlockEntity)>
public "asHolder"(): $Holder<(any)>
get "size"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskScreenBlock$$Type = ($TaskScreenBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaskScreenBlock_ = $TaskScreenBlock$$Type;
}}
declare module "dev.ftb.mods.ftbquests.quest.task.TaskType" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$Task, $Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$TaskType$GuiProvider, $TaskType$GuiProvider$$Type} from "dev.ftb.mods.ftbquests.quest.task.TaskType$GuiProvider"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $TaskType {
 "internalId": integer


public "getDisplayName"(): $Component
public "setDisplayName"(name: $Component$$Type): $TaskType
public "getTypeForNBT"(): StringJS
public "makeExtraNBT"(): $CompoundTag
public "setGuiProvider"(p: $TaskType$GuiProvider$$Type): $TaskType
public "getGuiProvider"(): $TaskType$GuiProvider
public "createTask"(id: long, quest: $Quest$$Type): $Task
public static "createTask"(id: long, quest: $Quest$$Type, typeId: StringJS): $Task
public "getTypeId"(): $ResourceLocation
public "getIconSupplier"(): $Icon
get "displayName"(): $Component
set "displayName"(value: $Component$$Type)
get "typeForNBT"(): StringJS
set "guiProvider"(value: $TaskType$GuiProvider$$Type)
get "guiProvider"(): $TaskType$GuiProvider
get "typeId"(): $ResourceLocation
get "iconSupplier"(): $Icon
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TaskType$$Type = ($TaskType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TaskType_ = $TaskType$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.config.NameMap$Builder" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $NameMap$Builder<T> {


public "color"(p: $Function$$Type<(T), ($Color4I$$Type)>): $NameMap$Builder<(T)>
public "create"(): $NameMap<(T)>
public "name"(p: $Function$$Type<(T), ($Component$$Type)>): $NameMap$Builder<(T)>
public "id"(p: $Function$$Type<(T), (StringJS)>): $NameMap$Builder<(T)>
public "icon"(p: $Function$$Type<(T), ($Icon$$Type)>): $NameMap$Builder<(T)>
public "nameKey"(p: $Function$$Type<(T), (StringJS)>): $NameMap$Builder<(T)>
public "baseNameKey"(key: StringJS): $NameMap$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NameMap$Builder$$Type<T> = ($NameMap$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NameMap$Builder_<T> = $NameMap$Builder$$Type<(T)>;
}}
declare module "dev.ftb.mods.ftbquests.block.entity.EditableBlockEntity" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IEditable, $IEditable$$Type} from "dev.ftb.mods.ftbquests.block.entity.IEditable"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$RegistryAccess, $RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $EditableBlockEntity extends $BlockEntity implements $IEditable {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(blockEntityType: $BlockEntityType$$Type<(any)>, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "readPayload"(tag: $CompoundTag$$Type, registryAccess: $RegistryAccess$$Type): void
public "hasPermissionToEdit"(arg0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EditableBlockEntity$$Type = ($EditableBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EditableBlockEntity_ = $EditableBlockEntity$$Type;
}}
declare module "dev.ftb.mods.ftblibrary.snbt.config.IntArrayValue" {
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$SNBTConfig, $SNBTConfig$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig"
import {$BaseValue, $BaseValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.BaseValue"
import {$SNBTCompoundTag, $SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"

export class $IntArrayValue extends $BaseValue<((integer)[])> {
readonly "parent": $SNBTConfig
readonly "key": StringJS


public "write"(tag: $SNBTCompoundTag$$Type): void
public "read"(tag: $SNBTCompoundTag$$Type): void
public "createClientConfig"(group: $ConfigGroup$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntArrayValue$$Type = ($IntArrayValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntArrayValue_ = $IntArrayValue$$Type;
}}
declare module "dev.ftb.mods.ftbteams.api.TeamMessage" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $TeamMessage {

 "text"(): $Component
 "date"(): long
 "sender"(): $UUID
}

export namespace $TeamMessage {
const probejs$$marker: never
}
export class $TeamMessage$$Static implements $TeamMessage {


 "text"(): $Component
 "date"(): long
 "sender"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeamMessage$$Type = ($TeamMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeamMessage_ = $TeamMessage$$Type;
}}
declare module "dev.ftb.mods.ftbquests.block.entity.LootCrateOpenerBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LootCrateOpenerBlockEntity extends $BlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "getOwner"(): $UUID
public "setOwner"(owner: $UUID$$Type): void
public "loadAdditional"(compoundTag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getOutputCount"(): integer
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
get "owner"(): $UUID
set "owner"(value: $UUID$$Type)
get "outputCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootCrateOpenerBlockEntity$$Type = ($LootCrateOpenerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootCrateOpenerBlockEntity_ = $LootCrateOpenerBlockEntity$$Type;
}}
