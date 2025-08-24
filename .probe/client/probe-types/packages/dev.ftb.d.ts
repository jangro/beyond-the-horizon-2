declare module "dev.ftb.mods.ftbquests.item.CustomIconItem" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $CustomIconItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(level: $Level$$Type, player: $Player$$Type, interactionHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "setIcon"(stack: $ItemStack$$Type, texture: $ResourceLocation$$Type): void
public static "getIcon"(stack: $ItemStack$$Type): $Icon
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flagIn: $TooltipFlag$$Type): void
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
 "arePlayersInSameTeam"(arg0: $UUID$$Type, arg1: $UUID$$Type): boolean
 "getTeamForPlayerID"(arg0: $UUID$$Type): $Optional<($Team)>
 "getTeamForPlayer"(arg0: $ServerPlayer$$Type): $Optional<($Team)>
 "getKnownPlayerTeams"(): $Map<($UUID), ($Team)>
 "createPartyTeam"(arg0: $ServerPlayer$$Type, arg1: string, arg2: string, arg3: $Color4I$$Type): $Team
 "getTeams"(): $Collection<($Team)>
 "getTeamByName"(arg0: string): $Optional<($Team)>
 "getTeamByID"(arg0: $UUID$$Type): $Optional<($Team)>
 "getExtraData"(): $CompoundTag
 "getPlayerTeamForPlayerID"(arg0: $UUID$$Type): $Optional<($Team)>
get "id"(): $UUID
get "server"(): $MinecraftServer
get "knownPlayerTeams"(): $Map<($UUID), ($Team)>
get "teams"(): $Collection<($Team)>
get "extraData"(): $CompoundTag
}

export namespace $TeamManager {
const probejs$$marker: never
}
export class $TeamManager$$Static implements $TeamManager {


 "getId"(): $UUID
 "markDirty"(): void
 "getServer"(): $MinecraftServer
 "arePlayersInSameTeam"(arg0: $UUID$$Type, arg1: $UUID$$Type): boolean
 "getTeamForPlayerID"(arg0: $UUID$$Type): $Optional<($Team)>
 "getTeamForPlayer"(arg0: $ServerPlayer$$Type): $Optional<($Team)>
 "getKnownPlayerTeams"(): $Map<($UUID), ($Team)>
 "createPartyTeam"(arg0: $ServerPlayer$$Type, arg1: string, arg2: string, arg3: $Color4I$$Type): $Team
 "getTeams"(): $Collection<($Team)>
 "getTeamByName"(arg0: string): $Optional<($Team)>
 "getTeamByID"(arg0: $UUID$$Type): $Optional<($Team)>
 "getExtraData"(): $CompoundTag
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
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SelectableResource, $SelectableResource$$Type} from "dev.ftb.mods.ftblibrary.config.ui.SelectableResource"
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ResourceConfigValue, $ResourceConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ResourceConfigValue"

export class $ItemStackConfig extends $ResourceConfigValue<($ItemStack)> {
 "id": string
static readonly "NULL_TEXT": $Component

constructor(single: boolean, empty: boolean)
constructor(fixedSize: long)

public "getValue"(): $ItemStack
public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<($ItemStack)>
public "copy"(arg0: any): any
public "copy"(value: $ItemStack$$Type): $ItemStack
public "getStringForGUI"(v: $ItemStack$$Type): $Component
public "getStringForGUI"(arg0: any): $Component
public "allowEmptyResource"(): boolean
public "fixedResourceSize"(): $OptionalLong
public "onClicked"(clickedWidget: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
public "setResource"(selectedStack: $SelectableResource$$Type<($ItemStack$$Type)>): boolean
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
 "id": string
static readonly "NULL_TEXT": $Component

constructor(mn: double, mx: double)

public "parse"(callback: $Consumer$$Type<(double)>, string: string): boolean
public "getStringFromValue"(arg0: any): string
public "getStringFromValue"(v: double): string
public "scrollValue"(currentValue: double, forward: boolean): $Optional<(double)>
public "scrollValue"(arg0: any, arg1: boolean): $Optional<(any)>
public "addInfo"(list: $TooltipList$$Type): void
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
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
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
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Icon)>

constructor(tex: $ResourceLocation$$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(): $ImageIcon
public "withColor"(arg0: $Color4I$$Type): $Icon
public "draw"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "withUV"(arg0: float, arg1: float, arg2: float, arg3: float): $Icon
public "getResourceLocation"(): $ResourceLocation
public "createPixelBuffer"(): $PixelBuffer
public "withTint"(c: $Color4I$$Type): $ImageIcon
public "hasPixelBuffer"(): boolean
public "aspectRatio"(): double
public "bindTexture"(): void
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
import {$Window, $Window$$Type} from "com.mojang.blaze3d.platform.Window"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$CursorType, $CursorType$$Type} from "dev.ftb.mods.ftblibrary.ui.CursorType"
import {$BaseScreen, $BaseScreen$$Type} from "dev.ftb.mods.ftblibrary.ui.BaseScreen"
import {$Widget$DrawLayer, $Widget$DrawLayer$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget$DrawLayer"
import {$Theme, $Theme$$Type} from "dev.ftb.mods.ftblibrary.ui.Theme"

export class $Widget implements $IScreenWrapper, $Comparable<($Widget)> {
 "posX": integer
 "posY": integer
 "width": integer
 "height": integer

constructor(p: $Panel$$Type)

public "getWidth"(): integer
public "getHeight"(): integer
public "getY"(): integer
public "toString"(): string
public "compareTo"(widget: $Widget$$Type): integer
public "compareTo"(arg0: any): integer
public "isEnabled"(): boolean
public "getParent"(): $Panel
public "tick"(): void
public "setSize"(w: integer, h: integer): void
public "setWidth"(v: integer): void
public "setHeight"(v: integer): void
public "onClosed"(): void
public static "isShiftKeyDown"(): boolean
public static "isKeyDown"(key: integer): boolean
public "keyPressed"(key: $Key$$Type): boolean
public "isMouseOver"(): boolean
public "mouseReleased"(button: $MouseButton$$Type): void
public "mouseDragged"(button: integer, dragX: double, dragY: double): boolean
public "mouseScrolled"(scroll: double): boolean
public "keyReleased"(key: $Key$$Type): void
public "charTyped"(c: character, modifiers: $KeyModifiers$$Type): boolean
public "getScreen"(): $Window
public "getCursor"(): $CursorType
public "getTitle"(): $Component
public "draw"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "getGui"(): $BaseScreen
public "setX"(v: integer): void
public "setY"(v: integer): void
public "getX"(): integer
public "setPos"(x: integer, y: integer): void
public "getPartialTicks"(): float
public static "getClipboardString"(): string
public static "setClipboardString"(string: string): void
public "acceptGhostIngredient"(ingredient: any): void
public "shouldAddMouseOverText"(): boolean
public "updateMouseOver"(mouseX: integer, mouseY: integer): void
public "mouseDoubleClicked"(button: $MouseButton$$Type): boolean
public "addMouseOverText"(list: $TooltipList$$Type): void
public static "isMouseButtonDown"(button: $MouseButton$$Type): boolean
public "shouldDraw"(): boolean
public "getWidgetType"(): $WidgetType
public "playClickSound"(): void
public static "isCtrlKeyDown"(): boolean
public "setPosAndSize"(x: integer, y: integer, w: integer, h: integer): $Widget
public "collidesWith"(x: integer, y: integer, w: integer, h: integer): boolean
public "checkMouseOver"(mouseX: integer, mouseY: integer): boolean
public "getDrawLayer"(): $Widget$DrawLayer
public "setDrawLayer"(drawLayer: $Widget$DrawLayer$$Type): void
public "handleClick"(click: string): boolean
public "handleClick"(scheme: string, path: string): boolean
public "getMouseX"(): integer
public "getMouseY"(): integer
public "getPosX"(): integer
public "getPosY"(): integer
public "mousePressed"(button: $MouseButton$$Type): boolean
public "getIngredientUnderMouse"(): $Optional<($PositionedIngredient)>
public "isGhostIngredientTarget"(ingredient: any): boolean
public "closeGui"(openPrevScreen: boolean): void
public "openGui"(): void
public "run"(): void
public "closeContextMenu"(): void
public "closeGui"(): void
public "openGuiLater"(): void
public "openAfter"(runnable: $Runnable$$Type): $Runnable
get "width"(): integer
get "height"(): integer
get "y"(): integer
get "enabled"(): boolean
get "parent"(): $Panel
set "width"(value: integer)
set "height"(value: integer)
get "mouseOver"(): boolean
get "screen"(): $Window
get "cursor"(): $CursorType
get "title"(): $Component
get "gui"(): $BaseScreen
set "x"(value: integer)
set "y"(value: integer)
get "x"(): integer
get "partialTicks"(): float
get "widgetType"(): $WidgetType
get "drawLayer"(): $Widget$DrawLayer
set "drawLayer"(value: $Widget$DrawLayer$$Type)
get "mouseX"(): integer
get "mouseY"(): integer
get "posX"(): integer
get "posY"(): integer
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
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $QuestBookItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(world: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flagIn: $TooltipFlag$$Type): void
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
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
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
 "descriptionId": string
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
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
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

public "setIcon"(i: $Icon$$Type): $Button
public "setTitle"(s: $Component$$Type): $Button
public "drawIcon"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "getCursor"(): $CursorType
public "getTitle"(): $Component
public "draw"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "setForceButtonSize"(forceButtonSize: boolean): $Button
public "onClicked"(arg0: $MouseButton$$Type): void
public "drawBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "mousePressed"(button: $MouseButton$$Type): boolean
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

constructor(typeId: $ResourceLocation$$Type, provider: $RewardType$Provider$$Type, iconSupplier: $Supplier$$Type<($Icon$$Type)>)

public "getDisplayName"(): $Component
public "getIconSupplier"(): $Icon
public "createReward"(id: long, quest: $Quest$$Type): $Reward
public static "createReward"(id: long, quest: $Quest$$Type, typeId: string): $Reward
public "makeExtraNBT"(): $CompoundTag
public "getGuiProvider"(): $RewardType$GuiProvider
public "setGuiProvider"(p: $RewardType$GuiProvider$$Type): $RewardType
public "getTypeForNBT"(): string
public "getTypeId"(): $ResourceLocation
public "setDisplayName"(name: $Component$$Type): $RewardType
public "setExcludeFromListRewards"(v: boolean): $RewardType
public "getExcludeFromListRewards"(): boolean
get "displayName"(): $Component
get "iconSupplier"(): $Icon
get "guiProvider"(): $RewardType$GuiProvider
set "guiProvider"(value: $RewardType$GuiProvider$$Type)
get "typeForNBT"(): string
get "typeId"(): $ResourceLocation
set "displayName"(value: $Component$$Type)
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
public "getItemName"(): string
public "getDrops"(): $EntityWeight
public "getColor"(): $Color4I
public "isGlow"(): boolean
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "getStringID"(): string
public static "getLootCrates"(isClient: boolean): $Map<(string), ($LootCrate)>
public static "allCrateStacks"(isClientSide: boolean): $Collection<($ItemStack)>
public "writeNetData"(data: $FriendlyByteBuf$$Type): void
public "readNetData"(data: $FriendlyByteBuf$$Type): void
public "writeData"(nbt: $CompoundTag$$Type): void
public "createStack"(): $ItemStack
public "readData"(nbt: $CompoundTag$$Type): void
public "initFromTable"(): void
get "table"(): $RewardTable
get "itemName"(): string
get "drops"(): $EntityWeight
get "color"(): $Color4I
get "glow"(): boolean
get "stringID"(): string
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
readonly "key": string


public "set"(arg0: any): void
public "set"(v: integer): void
public "write"(tag: $SNBTCompoundTag$$Type): void
public "read"(tag: $SNBTCompoundTag$$Type): void
public "range"(max: integer): $NumberValue<(integer)>
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
import {$List, $List$$Type} from "java.util.List"
import {$BooleanValue, $BooleanValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.BooleanValue"
import {$SNBTCompoundTag, $SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"
import {$LongValue, $LongValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.LongValue"
import {$IntValue, $IntValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.IntValue"
import {$IntArrayValue, $IntArrayValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.IntArrayValue"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"
import {$StringListValue, $StringListValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.StringListValue"
import {$BaseValue, $BaseValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.BaseValue"
import {$EnumValue, $EnumValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.EnumValue"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$DoubleValue, $DoubleValue$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.DoubleValue"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export class $SNBTConfig extends $BaseValue<($List<($BaseValue<(any)>)>)> {
readonly "parent": $SNBTConfig
readonly "key": string


public "load"(path: $Path$$Type): void
public "load"(path: $Path$$Type, defaultPath: $Path$$Type, comment: $Supplier$$Type<((string)[])>): void
public "add"<T extends $BaseValue<(any)>>(value: T): T
public "write"(tag: $SNBTCompoundTag$$Type): void
public "write"(buf: $FriendlyByteBuf$$Type): void
public "read"(tag: $SNBTCompoundTag$$Type): void
public "read"(buf: $FriendlyByteBuf$$Type): void
public "save"(path: $Path$$Type): void
public static "create"(name: string): $SNBTConfig
public "saveNow"(path: $Path$$Type): void
public "addInt"(key: string, def: integer, min: integer, max: integer): $IntValue
public "addInt"(key: string, def: integer): $IntValue
public "createClientConfig"(group: $ConfigGroup$$Type): void
public "addLong"(key: string, def: long): $LongValue
public "addLong"(key: string, def: long, min: long, max: long): $LongValue
public "addDouble"(key: string, def: double): $DoubleValue
public "addDouble"(key: string, def: double, min: double, max: double): $DoubleValue
public "addString"(key: string, def: string): $StringValue
public "addStringList"(key: string, def: $List$$Type<(string)>): $StringListValue
public "addBoolean"(key: string, def: boolean): $BooleanValue
public "addIntArray"(key: string, def: (integer)[]): $IntArrayValue
public "addEnum"<T>(key: string, nameMap: $NameMap$$Type<(T)>, def: T): $EnumValue<(T)>
public "addEnum"<T>(key: string, nameMap: $NameMap$$Type<(T)>): $EnumValue<(T)>
public "addGroup"(key: string, displayOrder: integer): $SNBTConfig
public "addGroup"(key: string): $SNBTConfig
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
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$List, $List$$Type} from "java.util.List"
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

public "reset"(): void
public "add"(component: $Component$$Type): void
public "string"(text: string): void
public "translate"(key: string, ...objects: (any)[]): void
public "shouldRender"(): boolean
public "getLines"(): $List<($Component)>
public "blankLine"(): void
public "styledString"(text: string, style: $Style$$Type): void
public "styledString"(text: string, color: $ChatFormatting$$Type): void
public "styledTranslate"(key: string, style: $Style$$Type, ...objects: (any)[]): void
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

public "getObject"(): T
public "getTime"(): $Date
public "setCompleted"(id: long): void
public "setStarted"(id: long): void
public "getOnlineMembers"(): $List<($ServerPlayer)>
public "withObject"<N extends $QuestObject>(o: N): $QuestProgressEventData<(N)>
public "notifyPlayers"(id: long): void
public "getTeamData"(): $TeamData
public "getNotifiedPlayers"(): $List<($ServerPlayer)>
get "object"(): T
get "time"(): $Date
set "completed"(value: long)
set "started"(value: long)
get "onlineMembers"(): $List<($ServerPlayer)>
get "teamData"(): $TeamData
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
public static "valueOf"(name: string): $WidgetType
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
import {$SNBTCompoundTag, $SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$TeamProperty, $TeamProperty$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$TeamPropertyCollection, $TeamPropertyCollection$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamPropertyCollection"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$TeamManagerImpl, $TeamManagerImpl$$Type} from "dev.ftb.mods.ftbteams.data.TeamManagerImpl"

export class $AbstractTeam extends $AbstractTeamBase {

constructor(manager: $TeamManagerImpl$$Type, id: $UUID$$Type)

public "settings"<T>(source: $CommandSourceStack$$Type, key: $TeamProperty$$Type<(T)>, value: string): integer
public "getOwner"(): $UUID
public "markDirty"(): void
public "sendMessage"(senderId: $UUID$$Type, message: string): void
public "deserializeNBT"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "serializeNBT"(provider: $HolderLookup$Provider$$Type): $SNBTCompoundTag
public "getOnlineMembers"(): $Collection<(any)>
public "updatePropertiesFrom"(newProperties: $TeamPropertyCollection$$Type): void
public "getTeamInfo"(): $List<($Component)>
public "declineInvitation"(source: $CommandSourceStack$$Type): integer
public "getOnlineRanked"(rank: $TeamRank$$Type): $List<($ServerPlayer)>
get "owner"(): $UUID
get "onlineMembers"(): $Collection<(any)>
get "teamInfo"(): $List<($Component)>
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
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap, $Object2ByteLinkedOpenHashMap$$Type} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker, $BlockEntityTicker$$Type} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape, $RenderShape$$Type} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
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
 "descriptionId": string
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "PROPS": $BlockBehaviour$Properties
 "hasCollision": boolean

constructor(props: $BlockBehaviour$Properties$$Type)

public "skipRendering"(state: $BlockState$$Type, state2: $BlockState$$Type, dir: $Direction$$Type): boolean
public "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, entity: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "getVisualShape"(state: $BlockState$$Type, blockGetter: $BlockGetter$$Type, pos: $BlockPos$$Type, ctx: $CollisionContext$$Type): $VoxelShape
public "newBlockEntity"(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $BlockEntity
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, blockState: $BlockState$$Type, blockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "propagatesSkylightDown"(state: $BlockState$$Type, bg: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "getShadeBrightness"(blockState: $BlockState$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): float
public "getCloneItemStack"(levelReader: $LevelReader$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type): $ItemStack
public "getCollisionShape"(state: $BlockState$$Type, bg: $BlockGetter$$Type, pos: $BlockPos$$Type, ctx: $CollisionContext$$Type): $VoxelShape
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

public "remove"(key: string): void
public "size"(): integer
public "put"(key: string, message: string): void
public "put"(key: string, message: $List$$Type<(string)>): void
public "contains"(key: string): boolean
public "getStringTranslation"(key: string): $Optional<(string)>
public "saveToNBT"(): $CompoundTag
public static "fromNBT"(tag: $CompoundTag$$Type): $TranslationTable
public "getStringListTranslation"(key: string): $Optional<($List<(string)>)>
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

export class $StringListValue extends $BaseValue<($List<(string)>)> {
readonly "parent": $SNBTConfig
readonly "key": string


public "set"(arg0: any): void
public "set"(v: $List$$Type<(string)>): void
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


public "equals"(o: any): boolean
public "toString"(value: T): string
public "toString"(): string
public "hashCode"(): integer
public "write"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "getId"(): $ResourceLocation
public "getType"(): $TeamPropertyType<(T)>
public "getDefaultValue"(): T
public "config"(config: $ConfigGroup$$Type, value: $TeamPropertyValue$$Type<(T)>): void
public "readValue"(buf: $RegistryFriendlyByteBuf$$Type): T
public "fromString"(arg0: string): $Optional<(T)>
public "writeValue"(buf: $RegistryFriendlyByteBuf$$Type, value: T): void
public "toNBT"(value: T): $Tag
public "createDefaultValue"(): $TeamPropertyValue<(T)>
public "getTranslationKey"(prefix: string): string
public "createValueFromNetwork"(buf: $RegistryFriendlyByteBuf$$Type): $TeamPropertyValue<(T)>
public "createValueFromNBT"(tag: $Tag$$Type): $TeamPropertyValue<(T)>
public "fromNBT"(tag: $Tag$$Type): $Optional<(T)>
get "id"(): $ResourceLocation
get "type"(): $TeamPropertyType<(T)>
get "defaultValue"(): T
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

public "getY"(): integer
public "add"(widget: $Widget$$Type): void
public "addAll"(list: $Iterable$$Type<($Widget$$Type)>): void
public "setOffset"(flag: boolean): void
public "tick"(): void
public "onClosed"(): void
public "getWidgets"(): $List<($Widget)>
public "keyPressed"(key: $Key$$Type): boolean
public "clearWidgets"(): void
public "mouseReleased"(button: $MouseButton$$Type): void
public "mouseDragged"(button: integer, dragX: double, dragY: double): boolean
public "mouseScrolled"(scroll: double): boolean
public "keyReleased"(key: $Key$$Type): void
public "charTyped"(c: character, modifiers: $KeyModifiers$$Type): boolean
public "getWidget"(index: integer): $Widget
public "getCursor"(): $CursorType
public "draw"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "align"(layout: $WidgetLayout$$Type): integer
public "getX"(): integer
public "getContentHeight"(): integer
public "getContentWidth"(): integer
public "drawOffsetBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "updateMouseOver"(mouseX: integer, mouseY: integer): void
public "mouseDoubleClicked"(button: $MouseButton$$Type): boolean
public "movePanelScroll"(dx: double, dy: double): boolean
public "isMouseOverAnyWidget"(): boolean
public "addMouseOverText"(list: $TooltipList$$Type): void
public "addWidgets"(): void
public "alignWidgets"(): void
public "refreshWidgets"(): void
public "isOffset"(): boolean
public "getScrollX"(): double
public "setScrollX"(scroll: double): void
public "getScrollY"(): double
public "setScrollY"(scroll: double): void
public "drawBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawWidget"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, widget: $Widget$$Type, x: integer, y: integer, w: integer, h: integer): void
public "scrollPanel"(scroll: double): boolean
public "getScrollStep"(): double
public "setScrollStep"(s: double): void
public "mousePressed"(button: $MouseButton$$Type): boolean
public "getOnlyRenderWidgetsInside"(): boolean
public "setOnlyRenderWidgetsInside"(value: boolean): void
public "isDefaultScrollVertical"(): boolean
public "getIngredientUnderMouse"(): $Optional<($PositionedIngredient)>
public "getOnlyInteractWithWidgetsInside"(): boolean
public "setOnlyInteractWithWidgetsInside"(value: boolean): void
get "y"(): integer
set "offset"(value: boolean)
get "widgets"(): $List<($Widget)>
get "cursor"(): $CursorType
get "x"(): integer
get "contentHeight"(): integer
get "contentWidth"(): integer
get "mouseOverAnyWidget"(): boolean
get "offset"(): boolean
get "scrollX"(): double
set "scrollX"(value: double)
get "scrollY"(): double
set "scrollY"(value: double)
get "scrollStep"(): double
set "scrollStep"(value: double)
get "onlyRenderWidgetsInside"(): boolean
set "onlyRenderWidgetsInside"(value: boolean)
get "defaultScrollVertical"(): boolean
get "ingredientUnderMouse"(): $Optional<($PositionedIngredient)>
get "onlyInteractWithWidgetsInside"(): boolean
set "onlyInteractWithWidgetsInside"(value: boolean)
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


public "getDescription"(): string
public "getName"(): $Component
public "getProperty"<T>(property: $TeamProperty$$Type<(T)>): T
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "setProperty"<T>(property: $TeamProperty$$Type<(T)>, value: T): void
public "getProperties"(): $TeamPropertyCollection
public "getId"(): $UUID
public "getType"(): $TeamType
public "getDisplayName"(): string
public "isValid"(): boolean
public "markDirty"(): void
public "getMembers"(): $Set<($UUID)>
public "addMember"(id: $UUID$$Type, rank: $TeamRank$$Type): void
public "getColor"(): integer
public "removeMember"(id: $UUID$$Type): void
public "getShortName"(): string
public "addMessage"(message: $TeamMessage$$Type): void
public "isOfficerOrBetter"(profile: $UUID$$Type): boolean
public "getMessageHistory"(): $List<($TeamMessage)>
public "getRankForPlayer"(playerId: $UUID$$Type): $TeamRank
public "getPlayersByRank"(minRank: $TeamRank$$Type): $Map<($UUID), ($TeamRank)>
public "getTypeTranslationKey"(): string
public "getTeamId"(): $UUID
public "getColoredName"(): $Component
public "createParty"(description: string, color: $Color4I$$Type): $Team
public "isFreeToJoin"(): boolean
public "isAllyOrBetter"(profile: $UUID$$Type): boolean
public "isInvited"(profile: $UUID$$Type): boolean
public "addMessages"(messages: $Collection$$Type<($TeamMessage$$Type)>): void
public "invalidateTeam"(): void
public "getExtraData"(): $CompoundTag
public "isMember"(uuid: $UUID$$Type): boolean
public "getMaxMessageHistorySize"(): integer
public "getOwner"(): $UUID
public "sendMessage"(arg0: $UUID$$Type, arg1: string): void
public "getOnlineMembers"(): $Collection<($ServerPlayer)>
public "isPlayerTeam"(): boolean
public "isPartyTeam"(): boolean
public "isServerTeam"(): boolean
public "getTeamInfo"(): $List<($Component)>
public "isClientTeam"(): boolean
get "description"(): string
get "name"(): $Component
get "properties"(): $TeamPropertyCollection
get "id"(): $UUID
get "type"(): $TeamType
get "displayName"(): string
get "valid"(): boolean
get "members"(): $Set<($UUID)>
get "color"(): integer
get "shortName"(): string
get "messageHistory"(): $List<($TeamMessage)>
get "typeTranslationKey"(): string
get "teamId"(): $UUID
get "coloredName"(): $Component
get "freeToJoin"(): boolean
get "extraData"(): $CompoundTag
get "maxMessageHistorySize"(): integer
get "owner"(): $UUID
get "onlineMembers"(): $Collection<($ServerPlayer)>
get "playerTeam"(): boolean
get "partyTeam"(): boolean
get "serverTeam"(): boolean
get "teamInfo"(): $List<($Component)>
get "clientTeam"(): boolean
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
declare module "dev.ftb.mods.ftblibrary.ui.DropDownMenu" {
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$List, $List$$Type} from "java.util.List"
import {$ContextMenuItem, $ContextMenuItem$$Type} from "dev.ftb.mods.ftblibrary.ui.ContextMenuItem"
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
public "getModalPanel"(): $ModalPanel
public "addWidgets"(): void
public "alignWidgets"(): void
public "drawBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
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
readonly "tags": $Map<(string), ($Tag)>

constructor()

public "putNull"(key: string): void
public "putBoolean"(key: string, value: boolean): void
public static "of"(tag: $Tag$$Type): $SNBTCompoundTag
public "merge"(other: $CompoundTag$$Type, overwrite: boolean): $CompoundTag
public "comment"(key: string, comment: string): void
public "comment"(key: string, ...comment: (string)[]): void
public "copy"(): $Tag
public "getComment"(key: string): string
public "getCompound"(arg0: string): $CompoundTag
public "isBoolean"(key: string): boolean
public "getList"<T extends $Tag>(key: string, type: $Class$$Type<(T)>): $List<(T)>
public "getNullableList"(key: string, type: byte): $ListTag
public "singleLine"(): void
public "singleLine"(key: string): void
public "putNumber"(key: string, number: number): void
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
import {$List, $List$$Type} from "java.util.List"
import {$ContextMenuItem, $ContextMenuItem$$Type} from "dev.ftb.mods.ftblibrary.ui.ContextMenuItem"
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
public "getModalPanel"(): $ModalPanel
public "addWidgets"(): void
public "alignWidgets"(): void
public "drawBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "mousePressed"(button: $MouseButton$$Type): boolean
public "setMaxRows"(maxRows: integer): void
public "hasIcons"(): boolean
public "setDrawVerticalSeparators"(drawVerticalSeparators: boolean): void
get "modalPanel"(): $ModalPanel
set "maxRows"(value: integer)
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
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "getProgressColor"(data: $TeamData$$Type): $Color4I
public "getProgressColor"(data: $TeamData$$Type, dim: boolean): $Color4I
public "getRelatedQuest"(): $Quest
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "cacheProgress"(): boolean
public "isSearchable"(data: $TeamData$$Type): boolean
public "isCompletedRaw"(data: $TeamData$$Type): boolean
public "onStarted"(data: $QuestProgressEventData$$Type<(any)>): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(any)>): void
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "isOptionalForProgression"(): boolean
public static "getRelativeProgressFromChildren"(progressSum: integer, count: integer): integer
public "getRelativeProgressFromChildren"(arg0: $TeamData$$Type): integer
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

public "claim"(arg0: $ServerPlayer$$Type, arg1: boolean): void
public "getType"(): $RewardType
public "getObjectType"(): $QuestObjectType
public "getQuestChapter"(): $Chapter
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "addMouseOverText"(list: $TooltipList$$Type): void
public "ignoreRewardBlocking"(): boolean
public "getExcludeFromClaimAll"(): boolean
public "isClaimAllHardcoded"(): boolean
public "automatedClaimPre"(blockEntity: $BlockEntity$$Type, items: $List$$Type<($ItemStack$$Type)>, random: $RandomSource$$Type, playerId: $UUID$$Type, player: $ServerPlayer$$Type): boolean
public "automatedClaimPost"(blockEntity: $BlockEntity$$Type, playerId: $UUID$$Type, player: $ServerPlayer$$Type): void
public "getAutoClaimType"(): $RewardAutoClaim
public "onButtonClicked"(button: $Button$$Type, canClick: boolean): void
public "onCreated"(): void
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "editedFromGUI"(): void
public "createSubGroup"(group: $ConfigGroup$$Type): $ConfigGroup
public "getQuestFile"(): $BaseQuestFile
public "deleteSelf"(): void
public "deleteChildren"(): void
public "getQuest"(): $Quest
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getParentID"(): long
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "isTeamReward"(): boolean
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getButtonText"(): string
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getIngredient"(widget: $Widget$$Type): $Optional<($PositionedIngredient)>
public "addTitleInMouseOverText"(): boolean
public "addAnyProtoTranslations"(tag: $CompoundTag$$Type): void
get "type"(): $RewardType
get "objectType"(): $QuestObjectType
get "questChapter"(): $Chapter
get "excludeFromClaimAll"(): boolean
get "claimAllHardcoded"(): boolean
get "autoClaimType"(): $RewardAutoClaim
get "questFile"(): $BaseQuestFile
get "quest"(): $Quest
get "parentID"(): long
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "teamReward"(): boolean
get "buttonText"(): string
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
 "id": string
static readonly "NULL_TEXT": $Component

constructor(t: CV)

public "getType"(): CV
public "copy"(arg0: any): any
public "copy"(v: $List$$Type<(E)>): $List<(E)>
public "getColor"(arg0: any): $Color4I
public "getColor"(v: $List$$Type<(E)>): $Color4I
public "getStringForGUI"(arg0: any): $Component
public "getStringForGUI"(v: $List$$Type<(E)>): $Component
public "onClicked"(clickedWidget: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
public "addInfo"(l: $TooltipList$$Type): void
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
readonly "key": string


public "excluded"<E extends $BaseValue<(T)>>(): E
public "get"(): T
public "toString"(): string
public "compareTo"(o: $BaseValue$$Type<(T)>): integer
public "compareTo"(arg0: any): integer
public "getKey"(): string
public "enabled"<E extends $BaseValue<(T)>>(e: $BooleanSupplier$$Type): E
public "set"(v: T): void
public "write"(arg0: $SNBTCompoundTag$$Type): void
public "read"(arg0: $SNBTCompoundTag$$Type): void
public "comment"<E extends $BaseValue<(T)>>(...s: (string)[]): E
public "withDisplayOrder"(order: integer): $BaseValue<(T)>
public "createClientConfig"(group: $ConfigGroup$$Type): void
get "key"(): string
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


public static "get"(context: $CommandContext$$Type<($CommandSourceStack$$Type)>, name: string): $TeamProperty<(any)>
public "parse"(reader: $StringReader$$Type): $TeamProperty<(any)>
public static "create"(): $TeamPropertyArgument
public "listSuggestions"<S>(context: $CommandContext$$Type<(S)>, builder: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public "getExamples"(): $Collection<(string)>
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): $TeamProperty<(any)>
get "examples"(): $Collection<(string)>
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
 "id": string
static readonly "NULL_TEXT": $Component

constructor()

public "onClicked"(clickedWidget: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
public "getIteration"(arg0: T, arg1: boolean): T
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
 "id": string
static readonly "NULL_TEXT": $Component

constructor()

public "getName"(): string
public "compareTo"(o: $ConfigValue$$Type<(T)>): integer
public "compareTo"(arg0: any): integer
public "getValue"(): T
public static "info"(key: string, value: any): $Component
public "init"(group: $ConfigGroup$$Type, id: string, value: T, setter: $Consumer$$Type<(T)>, defaultValue: T): $ConfigValue<(T)>
public "setValue"(value: T): void
public "copy"(value: T): T
public "getDefaultValue"(): T
public "getPath"(): string
public "isEqual"(v1: T, v2: T): boolean
public "setIcon"(i: $Icon$$Type): $ConfigValue<(T)>
public "getColor"(): $Color4I
public "getColor"(v: T): $Color4I
public "getTooltip"(): string
public "getGroup"(): $ConfigGroup
public "getIcon"(): $Icon
public "getIcon"(v: T): $Icon
public "getNameKey"(): string
public "setCurrentValue"(v: T): boolean
public "getStringForGUI"(): $Component
public "getStringForGUI"(v: T): $Component
public "setDefaultValue"(defaultValue: T): void
public "setCanEdit"(e: boolean): $ConfigValue<(T)>
public "onClicked"(arg0: $Widget$$Type, arg1: $MouseButton$$Type, arg2: $ConfigCallback$$Type): void
public "getCanEdit"(): boolean
public "setNameKey"(key: string): $ConfigValue<(T)>
public "addInfo"(list: $TooltipList$$Type): void
public "applyValue"(): void
public "setOrder"(o: integer): $ConfigValue<(T)>
get "name"(): string
get "value"(): T
set "value"(value: T)
get "defaultValue"(): T
get "path"(): string
set "icon"(value: $Icon$$Type)
get "color"(): $Color4I
get "tooltip"(): string
get "group"(): $ConfigGroup
get "icon"(): $Icon
get "nameKey"(): string
set "currentValue"(value: T)
get "stringForGUI"(): $Component
set "defaultValue"(value: T)
set "canEdit"(value: boolean)
get "canEdit"(): boolean
set "nameKey"(value: string)
set "order"(value: integer)
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


public static "get"(context: $CommandContext$$Type<($CommandSourceStack$$Type)>, name: string): $Team
public "parse"(arg0: $StringReader$$Type): any
public static "create"(): $TeamArgument
public static "create"(type: $TeamType$$Type): $TeamArgument
public "listSuggestions"<S>(commandContext: $CommandContext$$Type<(S)>, builder: $SuggestionsBuilder$$Type): $CompletableFuture<($Suggestions)>
public "getExamples"(): $Collection<(string)>
public "parse"<S>(arg0: $StringReader$$Type, arg1: S): $TeamArgumentProvider
get "examples"(): $Collection<(string)>
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
readonly "key": string


public "write"(tag: $SNBTCompoundTag$$Type): void
public "range"<E extends $BaseValue<(T)>>(min: T, max: T): E
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
 "id": string
static readonly "NULL_TEXT": $Component

constructor(mn: T, mx: T)

public "canScroll"(): boolean
public "getColor"(v: T): $Color4I
public "getColor"(arg0: any): $Color4I
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
 "id": string
static readonly "NULL_TEXT": $Component

constructor(nm: $NameMap$$Type<(E)>)

public "getColor"(v: E): $Color4I
public "getIcon"(v: E): $Icon
public "getStringForGUI"(v: E): $Component
public "onClicked"(clickedWidget: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
public "getIteration"(currentValue: E, next: boolean): E
public "addInfo"(list: $TooltipList$$Type): void
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

public "getExtraZlevel"(): integer
public "checkMouseOver"(mouseX: integer, mouseY: integer): boolean
public "setExtraZlevel"(extraZlevel: integer): void
get "extraZlevel"(): integer
set "extraZlevel"(value: integer)
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

export class $StringValue extends $BaseValue<(string)> {
readonly "parent": $SNBTConfig
readonly "key": string


public "pattern"(p: $Pattern$$Type): $StringValue
public "set"(arg0: any): void
public "set"(v: string): void
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
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Excludable, $Excludable$$Type} from "dev.ftb.mods.ftbquests.quest.Excludable"

export class $QuestLink extends $QuestObject implements $Movable, $Excludable {
readonly "id": long

constructor(id: long, chapter: $Chapter$$Type, linkId: long)

public "getWidth"(): double
public "getHeight"(): double
public "getY"(): double
public "getShape"(): string
public "getObjectType"(): $QuestObjectType
public "onMoved"(newX: double, newY: double, newChapterId: long): void
public "isVisible"(data: $TeamData$$Type): boolean
public "setPosition"(qx: double, qy: double): void
public "getX"(): double
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "getRelatedQuest"(): $Quest
public "initiateMoveClientSide"(to: $Chapter$$Type, x: double, y: double): void
public "isQuestObjectExcluded"(teamData: $TeamData$$Type): boolean
public "onCreated"(): void
public "editedFromGUI"(): void
public "getQuestFile"(): $BaseQuestFile
public "deleteSelf"(): void
public "getQuest"(): $Optional<($Quest)>
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getParentID"(): long
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "getMovableID"(): long
public "linksTo"(quest: $Quest$$Type): boolean
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getChapter"(): $Chapter
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "copyToClipboard"(): void
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
public "getRotation"(): double
public "getTitle"(): $Component
public "isAlignToCorner"(): boolean
public "drawMoved"(graphics: $GuiGraphics$$Type): void
public "getId"(): long
get "width"(): double
get "height"(): double
get "y"(): double
get "shape"(): string
get "objectType"(): $QuestObjectType
get "x"(): double
get "relatedQuest"(): $Quest
get "questFile"(): $BaseQuestFile
get "quest"(): $Optional<($Quest)>
get "parentID"(): long
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "movableID"(): long
get "chapter"(): $Chapter
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
 "descriptionId": string
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
import {$TeamManagerImpl, $TeamManagerImpl$$Type} from "dev.ftb.mods.ftbteams.data.TeamManagerImpl"
import {$ChatFormatting, $ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $TeamType extends $Enum<($TeamType)> implements $StringRepresentable {
static readonly "PLAYER": $TeamType
static readonly "PARTY": $TeamType
static readonly "SERVER": $TeamType


public static "values"(): ($TeamType)[]
public static "valueOf"(name: string): $TeamType
public "matches"(team: $Team$$Type): boolean
public "getColor"(): $ChatFormatting
public "getSerializedName"(): string
public "createTeam"(manager: $TeamManagerImpl$$Type, id: $UUID$$Type): $AbstractTeam
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "color"(): $ChatFormatting
get "serializedName"(): string
get "remappedEnumConstantName"(): string
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
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TeamProperty, $TeamProperty$$Type} from "dev.ftb.mods.ftbteams.api.property.TeamProperty"
import {$List, $List$$Type} from "java.util.List"
import {$PrivacyMode, $PrivacyMode$$Type} from "dev.ftb.mods.ftbteams.api.property.PrivacyMode"

export class $TeamPropertyType<T> {
static readonly "STRING_LIST": $TeamPropertyType<($List<(string)>)>
static readonly "ENUM": $TeamPropertyType<(string)>
static readonly "PRIVACY_MODE": $TeamPropertyType<($PrivacyMode)>
static readonly "COLOR": $TeamPropertyType<($Color4I)>
static readonly "STRING": $TeamPropertyType<(string)>
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
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "isOpen"(player: $Player$$Type): boolean
public "updateFromString"(objStr: string): void
public "getQuest"(): $Quest
public "setQuest"(quest: $Quest$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "quest"(): $Quest
set "quest"(value: $Quest$$Type)
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

public "enter"(): boolean
public "copy"(): boolean
public "is"(k: integer): boolean
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
import {$SNBTCompoundTag, $SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
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
public "syncAllToPlayer"(player: $ServerPlayer$$Type, selfTeam: $AbstractTeam$$Type): void
public "markDirty"(): void
public "getServer"(): $MinecraftServer
public "serializeNBT"(): $SNBTCompoundTag
public "syncToAll"(...teams: ($Team$$Type)[]): void
public "saveNow"(): void
public "arePlayersInSameTeam"(id1: $UUID$$Type, id2: $UUID$$Type): boolean
public "getTeamForPlayerID"(uuid: $UUID$$Type): $Optional<($Team)>
public "getTeamForPlayer"(player: $ServerPlayer$$Type): $Optional<($Team)>
public "getKnownPlayerTeams"(): $Map<($UUID), ($Team)>
public "createPartyTeam"(player: $ServerPlayer$$Type, name: string, description: string, color: $Color4I$$Type): $Team
public "playerLoggedOut"(player: $ServerPlayer$$Type): void
public "createParty"(player: $ServerPlayer$$Type, name: string): $Pair<(integer), ($PartyTeam)>
public "createParty"(playerId: $UUID$$Type, player: $ServerPlayer$$Type, name: string, description: string, color: $Color4I$$Type): $Pair<(integer), ($PartyTeam)>
public "getTeams"(): $Collection<($Team)>
public "getTeamByName"(name: string): $Optional<($Team)>
public "getTeamByID"(teamId: $UUID$$Type): $Optional<($Team)>
public "getTeamMap"(): $Map<($UUID), ($AbstractTeam)>
public "getExtraData"(): $CompoundTag
public "playerLoggedIn"(player: $ServerPlayer$$Type, id: $UUID$$Type, name: string): void
public "getPlayerName"(id: $UUID$$Type): $Component
public "getPlayerTeamForPlayerID"(uuid: $UUID$$Type): $Optional<($Team)>
public "getTeamNameMap"(): $Map<(string), ($Team)>
public "createServer"(source: $CommandSourceStack$$Type, name: string): $Pair<(integer), ($ServerTeam)>
public "getPersonalTeamForPlayerID"(uuid: $UUID$$Type): $PlayerTeam
get "id"(): $UUID
get "server"(): $MinecraftServer
get "knownPlayerTeams"(): $Map<($UUID), ($Team)>
get "teams"(): $Collection<($Team)>
get "teamMap"(): $Map<($UUID), ($AbstractTeam)>
get "extraData"(): $CompoundTag
get "teamNameMap"(): $Map<(string), ($Team)>
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
 "id": string
static readonly "NULL_TEXT": $Component

constructor()

public "getColor"(arg0: any): $Color4I
public "getColor"(v: boolean): $Color4I
public "getIcon"(arg0: any): $Icon
public "getIcon"(v: boolean): $Icon
public "getStringForGUI"(arg0: any): $Component
public "getStringForGUI"(v: boolean): $Component
public "getIteration"(arg0: any, arg1: boolean): any
public "getIteration"(currentValue: boolean, next: boolean): boolean
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
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$PixelBuffer, $PixelBuffer$$Type} from "dev.ftb.mods.ftblibrary.math.PixelBuffer"

export class $Icon implements $Drawable {
static readonly "CODEC": $Codec<($Icon)>
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Icon)>

constructor()

public "equals"(o: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "empty"(): $Color4I
public "copy"(): $Icon
public "withColor"(color: $Color4I$$Type): $Icon
public static "getIcon"(id: $ResourceLocation$$Type): $Icon
public static "getIcon"(json: $JsonElement$$Type): $Icon
public static "getIcon"(id: string): $Icon
public "getJson"(): $JsonElement
public "withUV"(x: float, y: float, w: float, h: float, tw: float, th: float): $Icon
public "withUV"(u0: float, v0: float, u1: float, v1: float): $Icon
public "createPixelBuffer"(): $PixelBuffer
public "withTint"(color: $Color4I$$Type): $Icon
public "withBorder"(color: $Color4I$$Type, roundEdges: boolean): $Icon
public "hasPixelBuffer"(): boolean
public "aspectRatio"(): double
public "withPadding"(padding: integer): $Icon
public "combineWith"(...icons: ($Icon$$Type)[]): $Icon
public "combineWith"(icon: $Icon$$Type): $Icon
public "getIngredient"(): any
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
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
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
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "use"(level: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "readBlockPos"(stack: $ItemStack$$Type): $Optional<($GlobalPos)>
public "useOn"(ctx: $UseOnContext$$Type): $InteractionResult
public "appendHoverText"(itemStack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, list: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public static "storeBlockPos"(stack: $ItemStack$$Type, level: $Level$$Type, clickedPos: $BlockPos$$Type): void
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
readonly "key": string


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
import {$Button, $Button$$Type} from "dev.ftb.mods.ftblibrary.ui.Button"
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$ContextMenu, $ContextMenu$$Type} from "dev.ftb.mods.ftblibrary.ui.ContextMenu"
import {$Theme, $Theme$$Type} from "dev.ftb.mods.ftblibrary.ui.Theme"

export class $ContextMenuItem implements $Comparable<($ContextMenuItem)> {
static readonly "SEPARATOR": $ContextMenuItem

constructor(title: $Component$$Type, icon: $Icon$$Type, callback: $Consumer$$Type<($Button)>)

public "compareTo"(o: $ContextMenuItem$$Type): integer
public "compareTo"(arg0: any): integer
public "isEnabled"(): boolean
public static "separator"(): $ContextMenuItem
public "drawIcon"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "setEnabled"(enabled: boolean): $ContextMenuItem
public "getIcon"(): $Icon
public "getTitle"(): $Component
public static "title"(title: $Component$$Type): $ContextMenuItem
public "addMouseOverText"(list: $TooltipList$$Type): void
public "onClicked"(button: $Button$$Type, panel: $Panel$$Type, mouseButton: $MouseButton$$Type): void
public static "subMenu"(title: $Component$$Type, icon: $Icon$$Type, subItems: $List$$Type<($ContextMenuItem$$Type)>): $ContextMenuItem
public "getYesNoText"(): $Component
public "isClickable"(): boolean
public "createWidget"(panel: $ContextMenu$$Type): $Widget
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
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$QuestProgressEventData, $QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$ChapterImage, $ChapterImage$$Type} from "dev.ftb.mods.ftbquests.quest.ChapterImage"

export class $Chapter extends $QuestObject {
readonly "file": $BaseQuestFile
readonly "id": long

constructor(id: long, file: $BaseQuestFile$$Type, group: $ChapterGroup$$Type)
constructor(id: long, file: $BaseQuestFile$$Type, group: $ChapterGroup$$Type, filename: string)

public "getPath"(): $Optional<(string)>
public "getIndex"(): integer
public "getChildren"(): $Collection<($QuestObject)>
public "getObjectType"(): $QuestObjectType
public "isVisible"(data: $TeamData$$Type): boolean
public "getGroup"(): $ChapterGroup
public "getQuestChapter"(): $Chapter
public "isAlwaysInvisible"(): boolean
public "clearCachedData"(): void
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "getDefaultQuestShape"(): string
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "getProgressionMode"(): $ProgressionMode
public "getDefaultQuestSize"(): double
public "isDefaultRepeatable"(): boolean
public "setDefaultQuestShape"(defaultQuestShape: string): void
public "getDefaultMinWidth"(): integer
public "removeQuestLink"(link: $QuestLink$$Type): void
public "hasAnyVisibleChildren"(): boolean
public "hasGroup"(): boolean
public "onCreated"(): void
public "getRawSubtitle"(): $List<(string)>
public "setRawSubtitle"(rawSubtitle: $List$$Type<(string)>): void
public "getQuestFile"(): $BaseQuestFile
public "consumeItems"(): boolean
public "onStarted"(data: $QuestProgressEventData$$Type<(any)>): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(any)>): void
public "deleteSelf"(): void
public "deleteChildren"(): void
public "getQuests"(): $List<($Quest)>
public "getQuestLinks"(): $List<($QuestLink)>
public "getFilename"(): string
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "addQuest"(quest: $Quest$$Type): void
public "addQuestLink"(link: $QuestLink$$Type): void
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "removeQuest"(quest: $Quest$$Type): void
public "addImage"(image: $ChapterImage$$Type): void
public "removeImage"(image: $ChapterImage$$Type): void
public "getAutofocus"(): $Optional<($Movable)>
public "setAutofocus"(id: long): void
public "isAutofocus"(id: long): boolean
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getImages"(): $List<($ChapterImage)>
public "isRequireSequentialTasks"(): boolean
public "hideQuestUntilDepsComplete"(): boolean
public "isHideQuestUntilDepsVisible"(): boolean
public "hideQuestDetailsUntilStartable"(): boolean
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
get "path"(): $Optional<(string)>
get "index"(): integer
get "children"(): $Collection<($QuestObject)>
get "objectType"(): $QuestObjectType
get "group"(): $ChapterGroup
get "questChapter"(): $Chapter
get "alwaysInvisible"(): boolean
get "defaultQuestShape"(): string
get "progressionMode"(): $ProgressionMode
get "defaultQuestSize"(): double
get "defaultRepeatable"(): boolean
set "defaultQuestShape"(value: string)
get "defaultMinWidth"(): integer
get "rawSubtitle"(): $List<(string)>
set "rawSubtitle"(value: $List$$Type<(string)>)
get "questFile"(): $BaseQuestFile
get "quests"(): $List<($Quest)>
get "questLinks"(): $List<($QuestLink)>
get "filename"(): string
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "autofocus"(): $Optional<($Movable)>
set "autofocus"(value: long)
get "images"(): $List<($ChapterImage)>
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
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$AbstractTeam, $AbstractTeam$$Type} from "dev.ftb.mods.ftbteams.data.AbstractTeam"
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
public "getRankForPlayer"(playerId: $UUID$$Type): $TeamRank
public "getOnlineMembers"(): $List<($ServerPlayer)>
public "createClientPlayer"(): $KnownClientPlayer
public "getTeamId"(): $UUID
public "isPlayerTeam"(): boolean
public "createParty"(playerId: $UUID$$Type, player: $ServerPlayer$$Type, name: string, description: string, color: integer, invited: $Set$$Type<($GameProfile$$Type)>): $Team
public "updatePresence"(): void
public "isOnline"(): boolean
public "setOnline"(online: boolean): void
public "getPlayerName"(): string
public "hasTeam"(): boolean
public "setPlayerName"(playerName: string): void
public "getEffectiveTeam"(): $AbstractTeam
public "setEffectiveTeam"(effectiveTeam: $AbstractTeam$$Type): void
get "type"(): $TeamType
get "player"(): $ServerPlayer
get "onlineMembers"(): $List<($ServerPlayer)>
get "teamId"(): $UUID
get "playerTeam"(): boolean
get "online"(): boolean
set "online"(value: boolean)
get "playerName"(): string
set "playerName"(value: string)
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
 "closeContextMenu"(): void
 "closeGui"(): void
 "openGuiLater"(): void
 "openAfter"(runnable: $Runnable$$Type): $Runnable

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
 "closeContextMenu"(): void
 "closeGui"(): void
 "openGuiLater"(): void
 "openAfter"(runnable: $Runnable$$Type): $Runnable
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
public static "valueOf"(name: string): $RecipeModHelper$Components
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
static readonly "PAGEBREAK_CODE": string

constructor(id: long, chapter: $Chapter$$Type)

public "getWidth"(): double
public "getHeight"(): double
public "getY"(): double
public "getDescription"(): $List<($Component)>
public "getSize"(): double
public "setSize"(size: double): void
public "getShape"(): string
public "getChildren"(): $Collection<($QuestObject)>
public "getObjectType"(): $QuestObjectType
public "onMoved"(newX: double, newY: double, newChapterId: long): void
public "isOptional"(): boolean
public "isVisible"(data: $TeamData$$Type): boolean
public "addDependency"(object: $QuestObject$$Type): void
public "setX"(x: double): void
public "setY"(y: double): void
public "getX"(): double
public "getQuestChapter"(): $Chapter
public "clearCachedData"(): void
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "getProgressionMode"(): $ProgressionMode
public "verifyDependencies"(autofix: boolean): boolean
public "removeDependency"(object: $QuestObject$$Type): void
public "getRelatedQuest"(): $Quest
public "ignoreRewardBlocking"(): boolean
public "showInRecipeMod"(): boolean
public "getRawDescription"(): $List<(string)>
public "setRawDescription"(rawDescription: $List$$Type<(string)>): void
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
public "isQuestObjectExcluded"(teamData: $TeamData$$Type): boolean
public "isExclusiveQuest"(): boolean
public "moveRewardRight"(reward: $Reward$$Type): void
public "onCreated"(): void
public "getTasksAsList"(): $List<($Task)>
public "getGuidePage"(): string
public "getRawSubtitle"(): string
public "setRawSubtitle"(rawSubtitle: string): void
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "editedFromGUI"(): void
public "isSearchable"(data: $TeamData$$Type): boolean
public "isCompletedRaw"(data: $TeamData$$Type): boolean
public "getQuestFile"(): $BaseQuestFile
public "onStarted"(data: $QuestProgressEventData$$Type<(any)>): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(any)>): void
public "deleteSelf"(): void
public "deleteChildren"(): void
public "writeTasks"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getRewards"(): $Collection<($Reward)>
public "writeRewards"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "addTask"(task: $Task$$Type): void
public "addReward"(reward: $Reward$$Type): void
public "getParentID"(): long
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
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
public "getSubtitle"(): $Component
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getChapter"(): $Chapter
public "getTasks"(): $Collection<($Task)>
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "copyToClipboard"(): void
public "removeInvalidDependencies"(): void
public "hideDetailsUntilStartable"(): boolean
public "getMinRequiredDependencies"(): integer
public "shouldHideDependentLines"(): boolean
public "getHideTextUntilComplete"(): $Tristate
public "getRequireSequentialTasks"(): boolean
public "areDependenciesComplete"(teamData: $TeamData$$Type): boolean
public "shouldHideDependencyLines"(): boolean
public "isOptionalForProgression"(): boolean
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
public "getRotation"(): double
public "getTitle"(): $Component
public "isAlignToCorner"(): boolean
public "drawMoved"(graphics: $GuiGraphics$$Type): void
public "getId"(): long
get "width"(): double
get "height"(): double
get "y"(): double
get "description"(): $List<($Component)>
get "size"(): double
set "size"(value: double)
get "shape"(): string
get "children"(): $Collection<($QuestObject)>
get "objectType"(): $QuestObjectType
get "optional"(): boolean
set "x"(value: double)
set "y"(value: double)
get "x"(): double
get "questChapter"(): $Chapter
get "progressionMode"(): $ProgressionMode
get "relatedQuest"(): $Quest
get "rawDescription"(): $List<(string)>
set "rawDescription"(value: $List$$Type<(string)>)
get "exclusiveQuest"(): boolean
get "tasksAsList"(): $List<($Task)>
get "guidePage"(): string
get "rawSubtitle"(): string
set "rawSubtitle"(value: string)
get "questFile"(): $BaseQuestFile
get "rewards"(): $Collection<($Reward)>
get "parentID"(): long
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "minWidth"(): integer
get "iconScale"(): double
get "dependants"(): $Collection<($QuestObject)>
get "movableID"(): long
set "taskList"(value: $List$$Type<($Task$$Type)>)
set "rewardList"(value: $List$$Type<($Reward$$Type)>)
get "subtitle"(): $Component
get "chapter"(): $Chapter
get "tasks"(): $Collection<($Task)>
get "minRequiredDependencies"(): integer
get "hideTextUntilComplete"(): $Tristate
get "requireSequentialTasks"(): boolean
get "optionalForProgression"(): boolean
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
import {$QuestObjectType, $QuestObjectType$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectType"
import {$UUID, $UUID$$Type} from "java.util.UUID"
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
public "clearCachedData"(): void
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "getVisibleChapters"(data: $TeamData$$Type): $List<($Chapter)>
public "getFirstVisibleChapter"(data: $TeamData$$Type): $Chapter
public "hasUnclaimedRewardsRaw"(teamData: $TeamData$$Type, player: $UUID$$Type): boolean
public "moveChapterWithinGroup"(chapter: $Chapter$$Type, movingUp: boolean): boolean
public "toggleCollapsed"(): void
public "onCreated"(): void
public "editedFromGUI"(): void
public "getQuestFile"(): $BaseQuestFile
public "onCompleted"(data: $QuestProgressEventData$$Type<(any)>): void
public "deleteSelf"(): void
public "clearChapters"(): void
public "getChapters"(): $List<($Chapter)>
public "isDefaultGroup"(): boolean
public "sortChapters"(c: $Comparator$$Type<($Chapter)>): void
public "addChapter"(chapter: $Chapter$$Type): void
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "removeChapter"(chapter: $Chapter$$Type): void
public "isFirstGroup"(): boolean
public "isLastGroup"(): boolean
public "isGuiCollapsed"(): boolean
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
get "file"(): $BaseQuestFile
get "children"(): $Collection<($QuestObject)>
get "objectType"(): $QuestObjectType
get "questFile"(): $BaseQuestFile
get "chapters"(): $List<($Chapter)>
get "defaultGroup"(): boolean
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "firstGroup"(): boolean
get "lastGroup"(): boolean
get "guiCollapsed"(): boolean
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
import {$SelectableResource, $SelectableResource$$Type} from "dev.ftb.mods.ftblibrary.config.ui.SelectableResource"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ConfigValue, $ConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ResourceConfigValue<T> extends $ConfigValue<(T)> {
 "id": string
static readonly "NULL_TEXT": $Component

constructor()

public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<(T)>
public "withFilter"(filter: $Predicate$$Type<(T)>): $ResourceConfigValue<(T)>
public "allowEmptyResource"(): boolean
public "fixedResourceSize"(): $OptionalLong
public "setAllowNBTEdit"(allow: boolean): $ResourceConfigValue<(T)>
public "canHaveNBT"(): boolean
public "allowResource"(resource: T): boolean
public "setResource"(arg0: $SelectableResource$$Type<(T)>): boolean
get "empty"(): boolean
get "resource"(): $SelectableResource<(T)>
set "allowNBTEdit"(value: boolean)
set "resource"(value: $SelectableResource$$Type<(T)>)
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
import {$ChapterGroup, $ChapterGroup$$Type} from "dev.ftb.mods.ftbquests.quest.ChapterGroup"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
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
import {$KeyModifiers, $KeyModifiers$$Type} from "dev.ftb.mods.ftblibrary.ui.input.KeyModifiers"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$DropDownMenu, $DropDownMenu$$Type} from "dev.ftb.mods.ftblibrary.ui.DropDownMenu"
import {$ContextMenuItem, $ContextMenuItem$$Type} from "dev.ftb.mods.ftblibrary.ui.ContextMenuItem"
import {$List, $List$$Type} from "java.util.List"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$BooleanConsumer, $BooleanConsumer$$Type} from "dev.ftb.mods.ftblibrary.util.BooleanConsumer"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ModalPanel, $ModalPanel$$Type} from "dev.ftb.mods.ftblibrary.ui.ModalPanel"
import {$Panel, $Panel$$Type} from "dev.ftb.mods.ftblibrary.ui.Panel"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$Window, $Window$$Type} from "com.mojang.blaze3d.platform.Window"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
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
public "onClosed"(): void
public "keyPressed"(key: $Key$$Type): boolean
public "isMouseOver"(x: integer, y: integer, w: integer, h: integer): boolean
public "isMouseOver"(widget: $Widget$$Type): boolean
public "mouseReleased"(button: $MouseButton$$Type): void
public "mouseDragged"(button: integer, dragX: double, dragY: double): boolean
public "mouseScrolled"(scroll: double): boolean
public "keyReleased"(key: $Key$$Type): void
public "charTyped"(c: character, modifiers: $KeyModifiers$$Type): boolean
public "getScreen"(): $Window
public "onInit"(): boolean
public "draw"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "getGui"(): $BaseScreen
public "onBack"(): void
public "getX"(): integer
public "getPartialTicks"(): float
public "shouldCloseOnEsc"(): boolean
public "shouldAddMouseOverText"(): boolean
public "updateMouseOver"(mouseX: integer, mouseY: integer): void
public "mouseDoubleClicked"(button: $MouseButton$$Type): boolean
public "closeContextMenu"(): void
public "addMouseOverText"(list: $TooltipList$$Type): void
public "shouldRenderBlur"(): boolean
public "closeModalPanel"(panel: $ModalPanel$$Type): void
public "anyModalPanelOpen"(): boolean
public "doesGuiPauseGame"(): boolean
public "openContextMenu"(menuItems: $List$$Type<($ContextMenuItem$$Type)>): $ContextMenu
public "openContextMenu"(newContextMenu: $ContextMenu$$Type): void
public "openDropdownMenu"(menuItems: $List$$Type<($ContextMenuItem$$Type)>): $DropDownMenu
public "openDropdownMenu"(dropDownMenu: $DropDownMenu$$Type): void
public "drawDefaultBackground"(graphics: $GuiGraphics$$Type): boolean
public "setFocusedWidget"(widget: $Widget$$Type): void
public "initGui"(): void
public "getTheme"(): $Theme
public "setRenderBlur"(renderBlur: boolean): void
public "popModalPanel"(): $ModalPanel
public "getPrevScreen"(): $Screen
public "onClosedByKey"(key: $Key$$Type): boolean
public "updateGui"(mx: integer, my: integer, pt: float): void
public "getContextMenu"(): $Optional<($ModalPanel)>
public "openPopupMenu"(popupMenu: $PopupMenu$$Type): void
public "drawForeground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "getMaxZLevel"(): integer
public "openYesNoFull"(title: $Component$$Type, desc: $Component$$Type, callback: $BooleanConsumer$$Type): void
public "openYesNo"(title: $Component$$Type, desc: $Component$$Type, callback: $Runnable$$Type): void
public "pushModalPanel"(modalPanel: $ModalPanel$$Type): void
public "closeGui"(openPrevScreen: boolean): void
public "alignWidgets"(): void
public "refreshWidgets"(): void
public "getScrollX"(): double
public "setScrollX"(scroll: double): void
public "getScrollY"(): double
public "setScrollY"(scroll: double): void
public "drawBackground"(graphics: $GuiGraphics$$Type, theme: $Theme$$Type, x: integer, y: integer, w: integer, h: integer): void
public "handleClick"(scheme: string, path: string): boolean
public "getMouseX"(): integer
public "getMouseY"(): integer
public "onPostInit"(): void
public "mousePressed"(button: $MouseButton$$Type): boolean
public "openGui"(): void
get "y"(): integer
get "screen"(): $Window
get "gui"(): $BaseScreen
get "x"(): integer
get "partialTicks"(): float
set "focusedWidget"(value: $Widget$$Type)
get "theme"(): $Theme
set "renderBlur"(value: boolean)
get "prevScreen"(): $Screen
get "contextMenu"(): $Optional<($ModalPanel)>
get "maxZLevel"(): integer
get "scrollX"(): double
set "scrollX"(value: double)
get "scrollY"(): double
set "scrollY"(value: double)
get "mouseX"(): integer
get "mouseY"(): integer
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


public static "values"(): ($TeamRank)[]
public static "valueOf"(name: string): $TeamRank
public "getDisplayName"(): $Component
public "isAtLeast"(rank: $TeamRank$$Type): boolean
public "getIcon"(): $Optional<($Icon)>
public "getSerializedName"(): string
public "isMemberOrBetter"(): boolean
public "isOfficerOrBetter"(): boolean
public "isInvitedOrBetter"(): boolean
public "isAllyOrBetter"(): boolean
public "isOwner"(): boolean
public "getPower"(): integer
public "isEnemyOrWorse"(): boolean
public "isNoneOrBetter"(): boolean
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "displayName"(): $Component
get "icon"(): $Optional<($Icon)>
get "serializedName"(): string
get "memberOrBetter"(): boolean
get "officerOrBetter"(): boolean
get "invitedOrBetter"(): boolean
get "allyOrBetter"(): boolean
get "owner"(): boolean
get "power"(): integer
get "enemyOrWorse"(): boolean
get "noneOrBetter"(): boolean
get "remappedEnumConstantName"(): string
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
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$MutableColor4I, $MutableColor4I$$Type} from "dev.ftb.mods.ftblibrary.icon.MutableColor4I"
import {$PixelBuffer, $PixelBuffer$$Type} from "dev.ftb.mods.ftblibrary.math.PixelBuffer"
import {$ChatFormatting, $ChatFormatting$$Type} from "net.minecraft.ChatFormatting"

export class $Color4I extends $Icon {
static readonly "RED": $Color4I
static readonly "GRAY": $Color4I
static readonly "WHITE": $Color4I
static readonly "LIGHT_RED": $Color4I
static readonly "CODEC": $Codec<($Icon)>
static readonly "BLUE": $Color4I
static readonly "LIGHT_BLUE": $Color4I
static readonly "LIGHT_GREEN": $Color4I
static readonly "BLACK": $Color4I
static readonly "DARK_GRAY": $Color4I
static readonly "GREEN": $Color4I
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Icon)>


public static "rgb"(color: $Vec3$$Type): $Color4I
public static "rgb"(col: integer): $Color4I
public "rgb"(): integer
public static "rgb"(r: integer, g: integer, b: integer): $Color4I
public static "RGBtoHSB"(r: integer, g: integer, b: integer, hsbvals: (float)[]): (float)[]
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(): $Color4I
public "isMutable"(): boolean
public "mutable"(): $MutableColor4I
public "withColor"(color: $Color4I$$Type): $Icon
public static "fromString"(s: string): $Color4I
public static "fromJson"(element: $JsonElement$$Type): $Color4I
public "getJson"(): $JsonElement
public static "rgba"(r: integer, g: integer, b: integer, a: integer): $Color4I
public "rgba"(): integer
public static "rgba"(col: integer): $Color4I
public static "hsb"(h: float, s: float, b: float): $Color4I
public "redf"(): float
public "greenf"(): float
public "bluef"(): float
public "draw"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "bluei"(): integer
public "alphai"(): integer
public "alphaf"(): float
public "redi"(): integer
public static "get256"(id: integer): $Color4I
public "greeni"(): integer
public "lerp"(col: $Color4I$$Type, m: float): $Color4I
public static "getChatFormattingColor"(id: integer): $Color4I
public static "getChatFormattingColor"(formatting: $ChatFormatting$$Type): $Color4I
public "createPixelBuffer"(): $PixelBuffer
public "withTint"(col: $Color4I$$Type): $Color4I
public "hasPixelBuffer"(): boolean
public "whiteIfEmpty"(): $Color4I
public "withAlphaf"(alpha: float): $Color4I
public "addBrightness"(percent: float): $Color4I
public "toStyle"(): $Style
public static "HSBtoRGB"(hue: float, saturation: float, brightness: float): integer
public "withAlpha"(a: integer): $Color4I
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
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$QuestObjectBase, $QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$TranslationKey, $TranslationKey$$Type} from "dev.ftb.mods.ftbquests.quest.translation.TranslationKey"

export class $TranslationManager {
static readonly "DEFAULT_FALLBACK_LOCALE": string

constructor()

public "addTranslation"(object: $QuestObjectBase$$Type, locale: string, subKey: $TranslationKey$$Type, message: string): void
public "addTranslation"(object: $QuestObjectBase$$Type, locale: string, subKey: $TranslationKey$$Type, message: $List$$Type<(string)>): void
public "removeAllTranslations"(obj: $QuestObjectBase$$Type): void
public "addInitialTranslation"(extra: $CompoundTag$$Type, locale: string, translationKey: $TranslationKey$$Type, value: string): void
public "getStringTranslation"(object: $QuestObjectBase$$Type, locale: string, subKey: $TranslationKey$$Type): $Optional<(string)>
public "sendTableToPlayer"(player: $ServerPlayer$$Type, locale: string): void
public "syncTableFromServer"(locale: string, table: $TranslationTable$$Type): void
public "saveToNBT"(langFolder: $Path$$Type, force: boolean): void
public "loadFromNBT"(file: $BaseQuestFile$$Type, langFolder: $Path$$Type): void
public static "syncTable"(player: $ServerPlayer$$Type, language: string): void
public "getStringListTranslation"(object: $QuestObjectBase$$Type, locale: string, subKey: $TranslationKey$$Type): $Optional<($List<(string)>)>
public "sendTranslationsToPlayer"(player: $ServerPlayer$$Type): void
public "processInitialTranslation"(extra: $CompoundTag$$Type, object: $QuestObjectBase$$Type): void
public "hasMissingTranslation"(object: $QuestObjectBase$$Type, key: $TranslationKey$$Type): boolean
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
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LootCrate, $LootCrate$$Type} from "dev.ftb.mods.ftbquests.quest.loot.LootCrate"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder, $InteractionResultHolder$$Type} from "net.minecraft.world.InteractionResultHolder"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $LootCrateItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getName"(stack: $ItemStack$$Type): $Component
public "use"(world: $Level$$Type, player: $Player$$Type, hand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "isFoil"(stack: $ItemStack$$Type): boolean
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flag: $TooltipFlag$$Type): void
public static "getCrate"(stack: $ItemStack$$Type, isClientSide: boolean): $LootCrate
public static "getCrate"(stack: $ItemStack$$Type): $LootCrate
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


public "set"(r: integer, g: integer, b: integer, a: integer): $Color4I
public "set"(col: $Color4I$$Type, a: integer): $Color4I
public "set"(col: $Color4I$$Type): $Color4I
public "set"(col: integer, a: integer): $Color4I
public "set"(col: integer): $Color4I
public "copy"(): $Icon
public "isMutable"(): boolean
public "mutable"(): $MutableColor4I
public "setAlpha"(a: integer): $Color4I
public "getJson"(): $JsonElement
public "addBrightness"(b: integer): $Color4I
public "setFromHSB"(h: float, s: float, b: float): $Color4I
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
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$ScreenBlockItem$ScreenSize, $ScreenBlockItem$ScreenSize$$Type} from "dev.ftb.mods.ftbquests.item.ScreenBlockItem$ScreenSize"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $ScreenBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
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
public "writeNetData"(data: $FriendlyByteBuf$$Type): void
public "readNetData"(data: $FriendlyByteBuf$$Type): void
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
public static "valueOf"(name: string): $RewardClaimType
public "isClaimed"(): boolean
public "cantClaim"(): boolean
public "canClaim"(): boolean
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
public static "valueOf"(name: string): $ProgressionMode
public "getId"(): string
get "id"(): string
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
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Reward, $Reward$$Type} from "dev.ftb.mods.ftbquests.quest.reward.Reward"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$LongSet, $LongSet$$Type} from "it.unimi.dsi.fastutil.longs.LongSet"
import {$SNBTCompoundTag, $SNBTCompoundTag$$Type} from "dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$QuestObject, $QuestObject$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObject"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$Task, $Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$Date, $Date$$Type} from "java.util.Date"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$RewardClaimType, $RewardClaimType$$Type} from "dev.ftb.mods.ftbquests.quest.reward.RewardClaimType"

export class $TeamData {
static readonly "AUTO_PIN_ID": integer
static readonly "VERSION": integer
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($TeamData)>

constructor(teamId: $UUID$$Type, file: $BaseQuestFile$$Type, name: string)
constructor(teamId: $UUID$$Type, file: $BaseQuestFile$$Type)

public "copyData"(from: $TeamData$$Type): void
public "getName"(): string
public static "get"(player: $Player$$Type): $TeamData
public "toString"(): string
public "setName"(name: string): void
public "isStarted"(object: $QuestObject$$Type): boolean
public "getFile"(): $BaseQuestFile
public "isLocked"(): boolean
public "setCompleted"(id: long, time: $Date$$Type): boolean
public "isCompleted"(object: $QuestObject$$Type): boolean
public "markDirty"(): void
public "deserializeNBT"(nbt: $SNBTCompoundTag$$Type): void
public "serializeNBT"(): $SNBTCompoundTag
public "getProgress"(taskId: long): long
public "getProgress"(task: $Task$$Type): long
public "setProgress"(task: $Task$$Type, progress: long): void
public "setStarted"(questId: long, time: $Date$$Type): boolean
public "mergeClaimedRewards"(from: $TeamData$$Type): void
public "checkAutoCompletion"(quest: $Quest$$Type): void
public "clearCachedProgress"(): void
public "hasUnclaimedRewards"(player: $UUID$$Type, object: $QuestObject$$Type): boolean
public "getRelativeProgress"(object: $QuestObject$$Type): integer
public "areDependenciesVisible"(quest: $Quest$$Type): boolean
public "isRewardBlocked"(reward: $Reward$$Type): boolean
public "isRewardClaimed"(player: $UUID$$Type, reward: $Reward$$Type): boolean
public "markTaskCompleted"(task: $Task$$Type): void
public "getCompletedTime"(questId: long): $Optional<($Date)>
public "getRewardClaimTime"(player: $UUID$$Type, reward: $Reward$$Type): $Optional<($Date)>
public "areRewardsBlocked"(): boolean
public "setRewardsBlocked"(rewardsBlocked: boolean): boolean
public "getPinnedQuestIds"(player: $Player$$Type): $LongSet
public "getOnlineMembers"(): $Collection<($ServerPlayer)>
public "setCanEdit"(player: $Player$$Type, newCanEdit: boolean): boolean
public "getTeamId"(): $UUID
public "addProgress"(task: $Task$$Type, progress: long): void
public "resetProgress"(task: $Task$$Type): void
public "getCanEdit"(player: $Player$$Type): boolean
public "mergeData"(from: $TeamData$$Type): void
public "canStartTasks"(quest: $Quest$$Type): boolean
public "getClaimType"(player: $UUID$$Type, reward: $Reward$$Type): $RewardClaimType
public "deleteReward"(reward: $Reward$$Type): void
public "resetReward"(player: $UUID$$Type, reward: $Reward$$Type): boolean
public "claimReward"(player: $ServerPlayer$$Type, reward: $Reward$$Type, notify: boolean): void
public "claimReward"(player: $UUID$$Type, reward: $Reward$$Type, date: long): boolean
public "isQuestPinned"(player: $Player$$Type, id: long): boolean
public "setQuestPinned"(player: $Player$$Type, id: long, pinned: boolean): void
public "getStartedTime"(questId: long): $Optional<($Date)>
public "setLocked"(newLocked: boolean): boolean
public "saveIfChanged"(): void
public "areDependenciesComplete"(quest: $Quest$$Type): boolean
public "isExcludedByOtherQuestline"(qo: $QuestObject$$Type): boolean
get "name"(): string
set "name"(value: string)
get "file"(): $BaseQuestFile
get "locked"(): boolean
set "rewardsBlocked"(value: boolean)
get "onlineMembers"(): $Collection<($ServerPlayer)>
get "teamId"(): $UUID
set "locked"(value: boolean)
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

constructor(id: $UUID$$Type, name: string, online: boolean, teamId: $UUID$$Type, profile: $GameProfile$$Type, extraData: $CompoundTag$$Type)

public "extraData"(): $CompoundTag
public "name"(): string
public "profile"(): $GameProfile
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "id"(): $UUID
public "teamId"(): $UUID
public "online"(): boolean
public "isOnlineAndNotInParty"(): boolean
public "isInternalTeam"(): boolean
get "onlineAndNotInParty"(): boolean
get "internalTeam"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KnownClientPlayer$$Type = ({"id"?: $UUID$$Type, "profile"?: $GameProfile$$Type, "online"?: boolean, "extraData"?: $CompoundTag$$Type, "name"?: string, "teamId"?: $UUID$$Type}) | ([id?: $UUID$$Type, profile?: $GameProfile$$Type, online?: boolean, extraData?: $CompoundTag$$Type, name?: string, teamId?: $UUID$$Type]);
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
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "getName"(): $Component
public "loadAdditional"(compoundTag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getSkin"(): $ItemStack
public "hasPermissionToEdit"(player: $Player$$Type): boolean
public "isIndestructible"(): boolean
public "getTeamId"(): $UUID
public "getCoreScreen"(): $Optional<($TaskScreenBlockEntity)>
public "setCoreScreen"(coreScreen: $TaskScreenBlockEntity$$Type): void
public "isInputOnly"(): boolean
public "getDisplayName"(): $Component
public "hasCustomName"(): boolean
public "getCustomName"(): $Component
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "name"(): $Component
get "skin"(): $ItemStack
get "indestructible"(): boolean
get "teamId"(): $UUID
get "coreScreen"(): $Optional<($TaskScreenBlockEntity)>
set "coreScreen"(value: $TaskScreenBlockEntity$$Type)
get "inputOnly"(): boolean
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
readonly "key": string


public "set"(arg0: any): void
public "set"(v: long): void
public "write"(tag: $SNBTCompoundTag$$Type): void
public "read"(tag: $SNBTCompoundTag$$Type): void
public "range"(max: long): $NumberValue<(long)>
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
import {$ProgressionMode, $ProgressionMode$$Type} from "dev.ftb.mods.ftbquests.quest.ProgressionMode"
import {$LootCrate, $LootCrate$$Type} from "dev.ftb.mods.ftbquests.quest.loot.LootCrate"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$DefaultChapterGroup, $DefaultChapterGroup$$Type} from "dev.ftb.mods.ftbquests.quest.DefaultChapterGroup"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$QuestFile, $QuestFile$$Type} from "dev.ftb.mods.ftbquests.api.QuestFile"
import {$TaskType, $TaskType$$Type} from "dev.ftb.mods.ftbquests.quest.task.TaskType"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
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
import {$QuestProgressEventData, $QuestProgressEventData$$Type} from "dev.ftb.mods.ftbquests.events.QuestProgressEventData"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$QuestObjectBase, $QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $BaseQuestFile extends $QuestObject implements $QuestFile {
static "VERSION": integer
readonly "id": long
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($BaseQuestFile)>

constructor()

public "getTask"(id: long): $Task
public "newID"(): long
public "remove"(id: long): $QuestObjectBase
public "get"(id: long): $QuestObject
public "collect"<T extends $QuestObjectBase>(filter: $Predicate$$Type<($QuestObjectBase)>): $List<(T)>
public "collect"<T extends $QuestObjectBase>(clazz: $Class$$Type<(T)>): $List<(T)>
public "create"(id: long, type: $QuestObjectType$$Type, parent: long, extra: $CompoundTag$$Type): $QuestObjectBase
public "getLocale"(): string
public "getID"(obj: any): long
public "getFallbackLocale"(): string
public "getBase"(id: long): $QuestObjectBase
public "getChildren"(): $Collection<($QuestObject)>
public "isLoading"(): boolean
public "getObjectType"(): $QuestObjectType
public "markDirty"(): void
public "isVisible"(data: $TeamData$$Type): boolean
public "holderLookup"(): $HolderLookup$Provider
public "getSide"(): $Env
public "deleteObject"(arg0: long): void
public "readID"(id: long): long
public "readID"(tag: $Tag$$Type): long
public "isDropLootCrates"(): boolean
public "makeRandomLootCrate"(entity: $Entity$$Type, random: $RandomSource$$Type): $Optional<($LootCrate)>
public "dropBookOnDeath"(): boolean
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
public "getOrCreateTeamData"(team: $Team$$Type): $TeamData
public "getOrCreateTeamData"(player: $Entity$$Type): $TeamData
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "clearCachedProgress"(): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "getCraftingTasks"(): $List<($Task)>
public "getVisibleChapters"(data: $TeamData$$Type): $List<($Chapter)>
public "getFirstVisibleChapter"(data: $TeamData$$Type): $Chapter
public "getDefaultQuestShape"(): string
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
public "getQuestFile"(): $BaseQuestFile
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
public "getLootCrate"(id: string): $LootCrate
public "writeDataFull"(folder: $Path$$Type, provider: $HolderLookup$Provider$$Type): void
public "readDataFull"(folder: $Path$$Type, provider: $HolderLookup$Provider$$Type): void
public "getAllObjects"(): $Collection<($QuestObjectBase)>
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getParentID"(): long
public "getAllTeamData"(): $Collection<($TeamData)>
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "getAllChapters"(): $List<($Chapter)>
public "getAllTasks"(): $List<($Task)>
public "getSubmitTasks"(): $List<($Task)>
public "refreshGui"(): void
public "isPauseGame"(): boolean
public "isDisableGui"(): boolean
public "getGridScale"(): double
public "isPlayerOnTeam"(arg0: $Player$$Type, arg1: $TeamData$$Type): boolean
public "getTaskType"(typeId: integer): $TaskType
public "getRewardType"(typeId: integer): $RewardType
public "addRewardTable"(rewardTable: $RewardTable$$Type): void
public "addData"(data: $TeamData$$Type, override: boolean): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getFolder"(): $Path
public "getTeamData"(player: $Player$$Type): $Optional<($TeamData)>
public "getChapter"(id: long): $Chapter
public "canEdit"(): boolean
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "refreshRewardTableRewardIDs"(): void
public "isDefaultTeamConsumeItems"(): boolean
public "getDefaultRewardAutoClaim"(): $RewardAutoClaim
public "getEmergencyItemsCooldown"(): integer
public "isDefaultQuestDisableJEI"(): boolean
public "removeEmptyRewardTables"(source: $CommandSourceStack$$Type): integer
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
get "locale"(): string
get "fallbackLocale"(): string
get "children"(): $Collection<($QuestObject)>
get "loading"(): boolean
get "objectType"(): $QuestObjectType
get "side"(): $Env
get "dropLootCrates"(): boolean
get "translationManager"(): $TranslationManager
get "craftingTasks"(): $List<($Task)>
get "defaultQuestShape"(): string
get "progressionMode"(): $ProgressionMode
get "detectionDelay"(): integer
get "hideExcludedQuests"(): boolean
get "defaultPerTeamReward"(): boolean
get "emergencyItems"(): $List<($ItemStack)>
get "defaultChapterGroup"(): $DefaultChapterGroup
get "rewardTables"(): $List<($RewardTable)>
get "chapterGroups"(): $List<($ChapterGroup)>
get "lootCrateNoDrop"(): $EntityWeight
get "questFile"(): $BaseQuestFile
get "serverSide"(): boolean
get "allObjects"(): $Collection<($QuestObjectBase)>
get "parentID"(): long
get "allTeamData"(): $Collection<($TeamData)>
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "allChapters"(): $List<($Chapter)>
get "allTasks"(): $List<($Task)>
get "submitTasks"(): $List<($Task)>
get "pauseGame"(): boolean
get "disableGui"(): boolean
get "gridScale"(): double
get "folder"(): $Path
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
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $QuestBarrierBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
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
 "descriptionId": string
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
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection, $Collection$$Type} from "java.util.Collection"
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
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Quest, $Quest$$Type} from "dev.ftb.mods.ftbquests.quest.Quest"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$RecipeModHelper$Components, $RecipeModHelper$Components$$Type} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$Set, $Set$$Type} from "java.util.Set"
import {$QuestObjectBase, $QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"

export class $RewardTable extends $QuestObjectBase {
readonly "id": long

constructor(id: long, file: $BaseQuestFile$$Type)
constructor(id: long, file: $BaseQuestFile$$Type, filename: string)

public "copy"(): $RewardTable
public "getFile"(): $BaseQuestFile
public "getPath"(): $Optional<(string)>
public "getObjectType"(): $QuestObjectType
public "clearCachedData"(): void
public static "createRewardForTable"(id: long, type: string, file: $BaseQuestFile$$Type): $QuestObjectBase
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "getWeightedRewards"(): $List<($WeightedReward)>
public "editedFromGUIOnServer"(): void
public "onEditButtonClicked"(gui: $Runnable$$Type): void
public "addMouseOverText"(list: $TooltipList$$Type, includeWeight: boolean, includeEmpty: boolean): void
public "makeWeightedItemReward"(stack: $ItemStack$$Type, weight: float): $WeightedReward
public "toggleLootCrate"(): $LootCrate
public "shouldShowTooltip"(): boolean
public "onCreated"(): void
public "editedFromGUI"(): void
public "getQuestFile"(): $BaseQuestFile
public "deleteSelf"(): void
public "getLootCrate"(): $LootCrate
public static "isFakeQuestId"(id: long): boolean
public "getFilename"(): string
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "addReward"(weightedReward: $WeightedReward$$Type): void
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "removeReward"(weightedReward: $WeightedReward$$Type): void
public "getTitleOrElse"(def: $Component$$Type): $Component
public "getFakeQuest"(): $Quest
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getTotalWeight"(includeEmpty: boolean): float
public "generateWeightedRandomRewards"(random: $RandomSource$$Type, nAttempts: integer, includeEmpty: boolean): $Collection<($WeightedReward)>
get "file"(): $BaseQuestFile
get "path"(): $Optional<(string)>
get "objectType"(): $QuestObjectType
get "weightedRewards"(): $List<($WeightedReward)>
get "questFile"(): $BaseQuestFile
get "lootCrate"(): $LootCrate
get "filename"(): string
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "fakeQuest"(): $Quest
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
import {$Pattern, $Pattern$$Type} from "java.util.regex.Pattern"
import {$LongConfig, $LongConfig$$Type} from "dev.ftb.mods.ftblibrary.config.LongConfig"
import {$DoubleConfig, $DoubleConfig$$Type} from "dev.ftb.mods.ftblibrary.config.DoubleConfig"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Comparable, $Comparable$$Type} from "java.lang.Comparable"
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$List, $List$$Type} from "java.util.List"
import {$ItemStackConfig, $ItemStackConfig$$Type} from "dev.ftb.mods.ftblibrary.config.ItemStackConfig"
import {$Tristate, $Tristate$$Type} from "dev.ftb.mods.ftblibrary.config.Tristate"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IntConfig, $IntConfig$$Type} from "dev.ftb.mods.ftblibrary.config.IntConfig"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ColorConfig, $ColorConfig$$Type} from "dev.ftb.mods.ftblibrary.config.ColorConfig"
import {$BooleanConfig, $BooleanConfig$$Type} from "dev.ftb.mods.ftblibrary.config.BooleanConfig"
import {$FluidStack, $FluidStack$$Type} from "dev.architectury.fluid.FluidStack"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$SNBTConfig, $SNBTConfig$$Type} from "dev.ftb.mods.ftblibrary.snbt.config.SNBTConfig"
import {$FluidConfig, $FluidConfig$$Type} from "dev.ftb.mods.ftblibrary.config.FluidConfig"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$StringConfig, $StringConfig$$Type} from "dev.ftb.mods.ftblibrary.config.StringConfig"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$ImageResourceConfig, $ImageResourceConfig$$Type} from "dev.ftb.mods.ftblibrary.config.ImageResourceConfig"
import {$ListConfig, $ListConfig$$Type} from "dev.ftb.mods.ftblibrary.config.ListConfig"
import {$ConfigValue, $ConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ConfigGroup implements $Comparable<($ConfigGroup)> {

constructor(id: string, savedCallback: $ConfigCallback$$Type)
constructor(id: string)

public "getName"(): $Component
public "compareTo"(arg0: any): integer
public "compareTo"(o: $ConfigGroup$$Type): integer
public "add"<T, CV extends $ConfigValue<(T)>>(id: string, type: CV, value: T, setter: $Consumer$$Type<(T)>, defaultValue: T): CV
public "getParent"(): $ConfigGroup
public "getId"(): string
public "save"(accepted: boolean): void
public "getPath"(): string
public "getTooltip"(): $Component
public "addItemStack"(id: string, value: $ItemStack$$Type, setter: $Consumer$$Type<($ItemStack)>, def: $ItemStack$$Type, singleItem: boolean, allowEmpty: boolean): $ItemStackConfig
public "addItemStack"(id: string, value: $ItemStack$$Type, setter: $Consumer$$Type<($ItemStack)>, def: $ItemStack$$Type, fixedSize: integer): $ItemStackConfig
public "getValues"(): $Collection<($ConfigValue<(any)>)>
public "addList"<E, CV extends $ConfigValue<(E)>>(id: string, value: $List$$Type<(E)>, type: CV, setter: $Consumer$$Type<($List<(E)>)>, def: E): $ListConfig<(E), (CV)>
public "addList"<E, CV extends $ConfigValue<(E)>>(id: string, value: $List$$Type<(E)>, type: CV, def: E): $ListConfig<(E), (CV)>
public "getNameKey"(): string
public "addInt"(id: string, value: integer, setter: $Consumer$$Type<(integer)>, def: integer, min: integer, max: integer): $IntConfig
public "getOrCreateSubgroup"(id: string, displayOrder: integer): $ConfigGroup
public "getOrCreateSubgroup"(id: string): $ConfigGroup
public "addLong"(id: string, value: long, setter: $Consumer$$Type<(long)>, def: long, min: long, max: long): $LongConfig
public "addDouble"(id: string, value: double, setter: $Consumer$$Type<(double)>, def: double, min: double, max: double): $DoubleConfig
public "addString"(id: string, value: string, setter: $Consumer$$Type<(string)>, def: string): $StringConfig
public "addString"(id: string, value: string, setter: $Consumer$$Type<(string)>, def: string, pattern: $Pattern$$Type): $StringConfig
public "addEnum"<E>(id: string, value: E, setter: $Consumer$$Type<(E)>, nameMap: $NameMap$$Type<(E)>, def: E): $EnumConfig<(E)>
public "addEnum"<E>(id: string, value: E, setter: $Consumer$$Type<(E)>, nameMap: $NameMap$$Type<(E)>): $EnumConfig<(E)>
public "addBool"(id: string, value: boolean, setter: $Consumer$$Type<(boolean)>, def: boolean): $BooleanConfig
public "setNameKey"(key: string): $ConfigGroup
public "addTristate"(id: string, value: $Tristate$$Type, setter: $Consumer$$Type<($Tristate)>): $EnumConfig<($Tristate)>
public "addTristate"(id: string, value: $Tristate$$Type, setter: $Consumer$$Type<($Tristate)>, def: $Tristate$$Type): $EnumConfig<($Tristate)>
public static "createEditable"(config: $SNBTConfig$$Type, groupName: string, serverConfig: boolean): $ConfigGroup
public "addFluidStack"(id: string, value: $FluidStack$$Type, setter: $Consumer$$Type<($FluidStack)>, def: $FluidStack$$Type, allowEmpty: boolean): $FluidConfig
public "addFluidStack"(id: string, value: $FluidStack$$Type, setter: $Consumer$$Type<($FluidStack)>, def: $FluidStack$$Type, fixedSize: long): $FluidConfig
public "addImage"(id: string, value: $ResourceLocation$$Type, setter: $Consumer$$Type<($ResourceLocation)>, def: $ResourceLocation$$Type): $ImageResourceConfig
public "getSubgroups"(): $Collection<($ConfigGroup)>
public "addColor"(id: string, value: $Color4I$$Type, setter: $Consumer$$Type<($Color4I)>, def: $Color4I$$Type): $ColorConfig
get "name"(): $Component
get "parent"(): $ConfigGroup
get "id"(): string
get "path"(): string
get "tooltip"(): $Component
get "values"(): $Collection<($ConfigValue<(any)>)>
get "nameKey"(): string
set "nameKey"(value: string)
get "subgroups"(): $Collection<($ConfigGroup)>
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
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$TranslationKey, $TranslationKey$$Type} from "dev.ftb.mods.ftbquests.quest.translation.TranslationKey"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ProgressChange, $ProgressChange$$Type} from "dev.ftb.mods.ftbquests.util.ProgressChange"
import {$BaseQuestFile, $BaseQuestFile$$Type} from "dev.ftb.mods.ftbquests.quest.BaseQuestFile"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RecipeModHelper$Components, $RecipeModHelper$Components$$Type} from "dev.ftb.mods.ftbquests.integration.RecipeModHelper$Components"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"

export class $QuestObjectBase implements $Comparable<($QuestObjectBase)> {
readonly "id": long

constructor(id: long)

public "equals"(object: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(other: $QuestObjectBase$$Type): integer
public "compareTo"(arg0: any): integer
public "getId"(): long
public static "copy"<T extends $QuestObjectBase>(orig: T, factory: $Supplier$$Type<(T)>): T
public "getPath"(): $Optional<(string)>
public static "isNull"(object: $QuestObjectBase$$Type): boolean
public static "getID"(object: $QuestObjectBase$$Type): long
public "isValid"(): boolean
public "getObjectType"(): $QuestObjectType
public "getTags"(): $Set<(string)>
public "holderLookup"(): $HolderLookup$Provider
public "getIcon"(): $Icon
public "getTitle"(): $Component
public "hasTag"(tag: string): boolean
public "getQuestChapter"(): $Chapter
public "clearCachedData"(): void
public static "itemOrMissingFromNBT"(tag: $Tag$$Type, provider: $HolderLookup$Provider$$Type): $ItemStack
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public static "parseCodeString"(id: string): long
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "forceProgressRaw"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "getMutableTitle"(): $MutableComponent
public "editedFromGUIOnServer"(): void
public "onEditButtonClicked"(gui: $Runnable$$Type): void
public "getProtoTranslation"(key: $TranslationKey$$Type): string
public "onCreated"(): void
public "setRawIcon"(rawIcon: $ItemStack$$Type): void
public "getRawTitle"(): string
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public static "parseHexId"(id: string): $Optional<(long)>
public static "titleToID"(s: string): $Optional<(string)>
public "editedFromGUI"(): void
public "createSubGroup"(group: $ConfigGroup$$Type): $ConfigGroup
public "getQuestFile"(): $BaseQuestFile
public "deleteSelf"(): void
public "deleteChildren"(): void
public "getCodeString"(): string
public static "getCodeString"(id: long): string
public static "getCodeString"(object: $QuestObjectBase$$Type): string
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getParentID"(): long
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "setRawTitle"(rawTitle: string): void
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "modifyTranslatableListValue"(translationKey: $TranslationKey$$Type, setter: $Consumer$$Type<($List<(string)>)>): void
public static "shouldSendNotifications"(): boolean
public static "singleItemOrMissingFromNBT"(tag: $Tag$$Type, provider: $HolderLookup$Provider$$Type): $ItemStack
get "id"(): long
get "path"(): $Optional<(string)>
get "valid"(): boolean
get "objectType"(): $QuestObjectType
get "tags"(): $Set<(string)>
get "icon"(): $Icon
get "title"(): $Component
get "questChapter"(): $Chapter
get "mutableTitle"(): $MutableComponent
set "rawIcon"(value: $ItemStack$$Type)
get "rawTitle"(): string
get "questFile"(): $BaseQuestFile
get "codeString"(): string
get "parentID"(): long
get "altTitle"(): $Component
get "altIcon"(): $Icon
set "rawTitle"(value: string)
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
readonly "key": string


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
public "toString"(): string
public "hashCode"(): integer
public static "of"(ingredient: any, widget: $Widget$$Type): $Optional<($PositionedIngredient)>
public static "of"(ingredient: any, widget: $Widget$$Type, tooltip: boolean): $Optional<($PositionedIngredient)>
public "ingredient"(): any
public "tooltip"(): boolean
public "area"(): $Rect2i
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionedIngredient$$Type = ({"area"?: $Rect2i$$Type, "ingredient"?: any, "tooltip"?: boolean}) | ([area?: $Rect2i$$Type, ingredient?: any, tooltip?: boolean]);
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

 "getName"(): $Component
 "getProperty"<T>(arg0: $TeamProperty$$Type<(T)>): T
 "setProperty"<T>(arg0: $TeamProperty$$Type<(T)>, arg1: T): void
 "getProperties"(): $TeamPropertyCollection
 "getId"(): $UUID
 "getOwner"(): $UUID
 "isValid"(): boolean
 "markDirty"(): void
 "sendMessage"(arg0: $UUID$$Type, arg1: string): void
 "getMembers"(): $Set<($UUID)>
 "getShortName"(): string
 "getMessageHistory"(): $List<($TeamMessage)>
 "getRankForPlayer"(arg0: $UUID$$Type): $TeamRank
 "getPlayersByRank"(arg0: $TeamRank$$Type): $Map<($UUID), ($TeamRank)>
 "getTypeTranslationKey"(): string
 "getOnlineMembers"(): $Collection<($ServerPlayer)>
 "getTeamId"(): $UUID
 "isPlayerTeam"(): boolean
 "isPartyTeam"(): boolean
 "isServerTeam"(): boolean
 "getTeamInfo"(): $List<($Component)>
 "isClientTeam"(): boolean
 "getColoredName"(): $Component
 "createParty"(arg0: string, arg1: $Color4I$$Type): $Team
 "getExtraData"(): $CompoundTag
get "name"(): $Component
get "properties"(): $TeamPropertyCollection
get "id"(): $UUID
get "owner"(): $UUID
get "valid"(): boolean
get "members"(): $Set<($UUID)>
get "shortName"(): string
get "messageHistory"(): $List<($TeamMessage)>
get "typeTranslationKey"(): string
get "onlineMembers"(): $Collection<($ServerPlayer)>
get "teamId"(): $UUID
get "playerTeam"(): boolean
get "partyTeam"(): boolean
get "serverTeam"(): boolean
get "teamInfo"(): $List<($Component)>
get "clientTeam"(): boolean
get "coloredName"(): $Component
get "extraData"(): $CompoundTag
}

export namespace $Team {
const probejs$$marker: never
}
export class $Team$$Static implements $Team {


 "getName"(): $Component
 "getProperty"<T>(arg0: $TeamProperty$$Type<(T)>): T
 "setProperty"<T>(arg0: $TeamProperty$$Type<(T)>, arg1: T): void
 "getProperties"(): $TeamPropertyCollection
 "getId"(): $UUID
 "getOwner"(): $UUID
 "isValid"(): boolean
 "markDirty"(): void
 "sendMessage"(arg0: $UUID$$Type, arg1: string): void
 "getMembers"(): $Set<($UUID)>
 "getShortName"(): string
 "getMessageHistory"(): $List<($TeamMessage)>
 "getRankForPlayer"(arg0: $UUID$$Type): $TeamRank
 "getPlayersByRank"(arg0: $TeamRank$$Type): $Map<($UUID), ($TeamRank)>
 "getTypeTranslationKey"(): string
 "getOnlineMembers"(): $Collection<($ServerPlayer)>
 "getTeamId"(): $UUID
 "isPlayerTeam"(): boolean
 "isPartyTeam"(): boolean
 "isServerTeam"(): boolean
 "getTeamInfo"(): $List<($Component)>
 "isClientTeam"(): boolean
 "getColoredName"(): $Component
 "createParty"(arg0: string, arg1: $Color4I$$Type): $Team
 "getExtraData"(): $CompoundTag
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
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$QuestObjectBase, $QuestObjectBase$$Type} from "dev.ftb.mods.ftbquests.quest.QuestObjectBase"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ChatFormatting, $ChatFormatting$$Type} from "net.minecraft.ChatFormatting"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"

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
public "test"(object: $QuestObjectBase$$Type): boolean
public "test"(arg0: any): boolean
public static "valueOf"(name: string): $QuestObjectType
public "getId"(): string
public "getColor"(): $ChatFormatting
public "getCompletedMessage"(): $Component
public "or"(arg0: $Predicate$$Type<($QuestObjectBase)>): $Predicate<($QuestObjectBase)>
public "negate"(): $Predicate<($QuestObjectBase)>
public "and"(arg0: $Predicate$$Type<($QuestObjectBase)>): $Predicate<($QuestObjectBase)>
public static "not"<T>(arg0: $Predicate$$Type<($QuestObjectBase)>): $Predicate<($QuestObjectBase)>
public static "isEqual"<T>(arg0: any): $Predicate<($QuestObjectBase)>
get "id"(): string
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
import {$Map, $Map$$Type} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem, $BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $StageBarrierBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
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
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List, $List$$Type} from "java.util.List"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag, $TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext, $Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"

export class $MissingItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
 "descriptionId": string
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getName"(stack: $ItemStack$$Type): $Component
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltip: $List$$Type<($Component$$Type)>, flagIn: $TooltipFlag$$Type): void
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
public static "valueOf"(name: string): $Widget$DrawLayer
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
public "toString"(): string
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
declare module "dev.ftb.mods.ftblibrary.config.ui.SelectableResource" {
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FluidStack, $FluidStack$$Type} from "dev.architectury.fluid.FluidStack"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $SelectableResource<T> {

 "getName"(): $Component
 "stack"(): T
 "isEmpty"(): boolean
 "getCount"(): long
 "copyWithCount"(arg0: long): $SelectableResource<(T)>
 "setCount"(arg0: integer): void
 "getIcon"(): $Icon
 "getComponentsTag"(): $CompoundTag
 "applyComponentsTag"(arg0: $CompoundTag$$Type): void
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


 "getName"(): $Component
 "stack"(): T
 "isEmpty"(): boolean
 "getCount"(): long
static "item"(stack: $ItemStack$$Type): $SelectableResource<($ItemStack)>
 "copyWithCount"(arg0: long): $SelectableResource<(T)>
 "setCount"(arg0: integer): void
 "getIcon"(): $Icon
static "fluid"(stack: $FluidStack$$Type): $SelectableResource<($FluidStack)>
 "getComponentsTag"(): $CompoundTag
 "applyComponentsTag"(arg0: $CompoundTag$$Type): void
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
declare module "dev.ftb.mods.ftblibrary.config.ColorConfig" {
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ConfigValue, $ConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ColorConfig extends $ConfigValue<($Color4I)> {
 "id": string
static readonly "NULL_TEXT": $Component

constructor()

public "getStringForGUI"(v: $Color4I$$Type): $Component
public "getStringForGUI"(arg0: any): $Component
public "onClicked"(clicked: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
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
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TooltipList, $TooltipList$$Type} from "dev.ftb.mods.ftblibrary.util.TooltipList"
import {$SelectableResource, $SelectableResource$$Type} from "dev.ftb.mods.ftblibrary.config.ui.SelectableResource"
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ResourceConfigValue, $ResourceConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ResourceConfigValue"

export class $ImageResourceConfig extends $ResourceConfigValue<($ResourceLocation)> {
 "id": string
static readonly "NONE": $ResourceLocation
static readonly "NULL_TEXT": $Component

constructor()

public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<($ResourceLocation)>
public static "getResourceLocation"(icon: $Icon$$Type): $ResourceLocation
public "allowEmptyResource"(): boolean
public "fixedResourceSize"(): $OptionalLong
public "onClicked"(clicked: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
public "canHaveNBT"(): boolean
public "setAllowEmpty"(allowEmpty: boolean): void
public "addInfo"(list: $TooltipList$$Type): void
public "setResource"(selectedStack: $SelectableResource$$Type<($ResourceLocation$$Type)>): boolean
get "empty"(): boolean
get "resource"(): $SelectableResource<($ResourceLocation)>
set "allowEmpty"(value: boolean)
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

public "getType"(): $TaskType
public "getObjectType"(): $QuestObjectType
public "getQuestChapter"(): $Chapter
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "componentsToRefresh"(): $Set<($RecipeModHelper$Components)>
public "getRelatedQuest"(): $Quest
public "formatMaxProgress"(): string
public "consumesResources"(): boolean
public "hideProgressNumbers"(): boolean
public "addMouseOverHeader"(list: $TooltipList$$Type, teamData: $TeamData$$Type, advanced: boolean): void
public "addMouseOverText"(list: $TooltipList$$Type, teamData: $TeamData$$Type): void
public "autoSubmitOnPlayerTick"(): integer
public "onButtonClicked"(button: $Button$$Type, canClick: boolean): void
public "getMaxProgress"(): long
public "onCreated"(): void
public "forceProgress"(teamData: $TeamData$$Type, progressChange: $ProgressChange$$Type): void
public "editedFromGUI"(): void
public "createSubGroup"(group: $ConfigGroup$$Type): $ConfigGroup
public "formatProgress"(teamData: $TeamData$$Type, progress: long): string
public "drawGUI"(teamData: $TeamData$$Type, graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "canInsertItem"(): boolean
public "cacheProgress"(): boolean
public "checkOnLogin"(): boolean
public "submitTask"(teamData: $TeamData$$Type, player: $ServerPlayer$$Type): void
public "submitTask"(teamData: $TeamData$$Type, player: $ServerPlayer$$Type, craftedItem: $ItemStack$$Type): void
public "getQuestFile"(): $BaseQuestFile
public "onStarted"(data: $QuestProgressEventData$$Type<(any)>): void
public "onCompleted"(data: $QuestProgressEventData$$Type<(any)>): void
public "deleteSelf"(): void
public "deleteChildren"(): void
public "getQuest"(): $Quest
public "writeNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "readNetData"(buffer: $RegistryFriendlyByteBuf$$Type): void
public "getParentID"(): long
public "getAltTitle"(): $Component
public "getAltIcon"(): $Icon
public "writeData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getButtonText"(): $MutableComponent
public "readData"(nbt: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getIngredient"(widget: $Widget$$Type): $Optional<($PositionedIngredient)>
public "addTitleInMouseOverText"(): boolean
public "isOptionalForProgression"(): boolean
public "submitItemsOnInventoryChange"(): boolean
public "getRelativeProgressFromChildren"(data: $TeamData$$Type): integer
get "type"(): $TaskType
get "objectType"(): $QuestObjectType
get "questChapter"(): $Chapter
get "relatedQuest"(): $Quest
get "maxProgress"(): long
get "questFile"(): $BaseQuestFile
get "quest"(): $Quest
get "parentID"(): long
get "altTitle"(): $Component
get "altIcon"(): $Icon
get "buttonText"(): $MutableComponent
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
readonly "keys": $List<(string)>
readonly "values": $List<(E)>
readonly "map": $Map<(string), (E)>


public "getNext"(value: E): E
public "getRandom"(rand: $Random$$Type): E
public "getName"(value: E): string
public "size"(): integer
public "get"(index: integer): E
public "get"(s: string): E
public "iterator"(): $Iterator<(E)>
public static "of"<T>(defaultValue: T, values: (T)[]): $NameMap$Builder<(T)>
public static "of"<T>(defaultValue: T, values: $List$$Type<(T)>): $NameMap$Builder<(T)>
public "offset"(value: E, index: integer): E
public "write"(data: $FriendlyByteBuf$$Type, object: E): void
public "read"(data: $FriendlyByteBuf$$Type): E
public "getIndex"(e: E): integer
public "getDisplayName"(value: E): $Component
public "getColor"(value: E): $Color4I
public "getIcon"(v: E): $Icon
public "getPrevious"(value: E): E
public "getStringIndex"(s: string): integer
public "withDefault"(def: E): $NameMap<(E)>
public "getNullable"(s: string): E
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
public static "valueOf"(name: string): $CursorType
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
 "getY"(): double
 "getShape"(): string
 "onMoved"(arg0: double, arg1: double, arg2: long): void
 "getRotation"(): double
 "getTitle"(): $Component
 "getX"(): double
 "isAlignToCorner"(): boolean
 "initiateMoveClientSide"(arg0: $Chapter$$Type, arg1: double, arg2: double): void
 "drawMoved"(graphics: $GuiGraphics$$Type): void
 "getMovableID"(): long
 "getChapter"(): $Chapter
 "copyToClipboard"(): void
get "width"(): double
get "height"(): double
get "y"(): double
get "shape"(): string
get "rotation"(): double
get "title"(): $Component
get "x"(): double
get "alignToCorner"(): boolean
get "movableID"(): long
get "chapter"(): $Chapter
}

export namespace $Movable {
const probejs$$marker: never
}
export class $Movable$$Static implements $Movable {


 "getWidth"(): double
 "getHeight"(): double
 "getY"(): double
 "getShape"(): string
 "onMoved"(arg0: double, arg1: double, arg2: long): void
 "getRotation"(): double
 "getTitle"(): $Component
 "getX"(): double
 "isAlignToCorner"(): boolean
 "initiateMoveClientSide"(arg0: $Chapter$$Type, arg1: double, arg2: double): void
 "drawMoved"(graphics: $GuiGraphics$$Type): void
 "getMovableID"(): long
 "getChapter"(): $Chapter
 "copyToClipboard"(): void
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
 "id": string
static readonly "NULL_TEXT": $Component

constructor(mn: long, mx: long)

public "parse"(callback: $Consumer$$Type<(long)>, string: string): boolean
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
 "isIndestructible"(): boolean
 "getTeamId"(): $UUID
 "getCoreScreen"(): $Optional<($TaskScreenBlockEntity)>
 "isInputOnly"(): boolean
 "hasPermissionToEdit"(arg0: $Player$$Type): boolean
get "skin"(): $ItemStack
get "indestructible"(): boolean
get "teamId"(): $UUID
get "coreScreen"(): $Optional<($TaskScreenBlockEntity)>
get "inputOnly"(): boolean
}

export namespace $ITaskScreen {
const probejs$$marker: never
}
export class $ITaskScreen$$Static implements $ITaskScreen {


 "getSkin"(): $ItemStack
 "isIndestructible"(): boolean
 "getTeamId"(): $UUID
 "getCoreScreen"(): $Optional<($TaskScreenBlockEntity)>
 "isInputOnly"(): boolean
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


public "getName"(): string
public static "values"(): ($TranslationKey)[]
public static "valueOf"(name: string): $TranslationKey
public "validate"(either: $Either$$Type<(string), ($List$$Type<(string)>)>): $Either<(string), ($List<(string)>)>
public "getTranslationKey"(): string
public "isListVal"(): boolean
get "name"(): string
get "translationKey"(): string
get "listVal"(): boolean
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

public "drawString"(graphics: $GuiGraphics$$Type, text: any, x: integer, y: integer, color: $Color4I$$Type, flags: integer): integer
public "drawString"(graphics: $GuiGraphics$$Type, text: any, x: integer, y: integer, flags: integer): integer
public "drawString"(graphics: $GuiGraphics$$Type, text: any, x: integer, y: integer): integer
public "getFont"(): $Font
public "drawPanelBackground"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "trimStringToWidth"(text: string, width: integer): string
public "trimStringToWidth"(text: $FormattedText$$Type, width: integer): $FormattedText
public "getContentColor"(type: $WidgetType$$Type): $Color4I
public "drawGui"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "drawButton"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "getFontHeight"(): integer
public "drawScrollBar"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type, vertical: boolean): void
public "drawWidget"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "drawTextBox"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawSlot"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "getStringWidth"(text: $FormattedCharSequence$$Type): integer
public "getStringWidth"(text: string): integer
public "getStringWidth"(text: $FormattedText$$Type): integer
public "drawScrollBarBackground"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type): void
public "drawContextMenuBackground"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawCheckbox"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, type: $WidgetType$$Type, selected: boolean, radioButton: boolean): void
public "drawCheckboxBackground"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, radioButton: boolean): void
public "drawContainerSlot"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer): void
public "drawHorizontalTab"(graphics: $GuiGraphics$$Type, x: integer, y: integer, w: integer, h: integer, selected: boolean): void
public "getInvertedContentColor"(): $Color4I
public "trimStringToWidthReverse"(text: string, width: integer): string
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
import {$ConfigGroup, $ConfigGroup$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigGroup"
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
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
static readonly "FTBQ_IMAGE": string
static "clipboard": $WeakReference<($ChapterImage)>
static "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ChapterImage)>

constructor(c: $Chapter$$Type)

public "getWidth"(): double
public "getHeight"(): double
public "getY"(): double
public "getOrder"(): integer
public "copy"(newChapter: $Chapter$$Type, newX: double, newY: double): $ChapterImage
public "getShape"(): string
public "onMoved"(x: double, y: double, chapterId: long): void
public "getRotation"(): double
public "getColor"(): $Color4I
public "getAlpha"(): integer
public "setPosition"(x: double, y: double): $ChapterImage
public "getImage"(): $Icon
public "getTitle"(): $Component
public "getX"(): double
public "isAlignToCorner"(): boolean
public "fillConfigGroup"(config: $ConfigGroup$$Type): void
public "initiateMoveClientSide"(to: $Chapter$$Type, _x: double, _y: double): void
public "isAspectRatioOff"(): boolean
public "fixupAspectRatio"(adjustWidth: boolean): void
public "shouldShowImage"(teamData: $TeamData$$Type): boolean
public static "isImageInClipboard"(): boolean
public static "fromNet"(parent: $Chapter$$Type, buf: $FriendlyByteBuf$$Type): $ChapterImage
public "drawMoved"(graphics: $GuiGraphics$$Type): void
public "writeNetData"(buffer: $FriendlyByteBuf$$Type): void
public "readNetData"(buffer: $FriendlyByteBuf$$Type): void
public "getMovableID"(): long
public "getClick"(): string
public "addHoverText"(list: $TooltipList$$Type): void
public "writeData"(nbt: $CompoundTag$$Type): $CompoundTag
public "setImage"(image: $Icon$$Type): $ChapterImage
public "getChapter"(): $Chapter
public "readData"(nbt: $CompoundTag$$Type): void
public "copyToClipboard"(): void
get "width"(): double
get "height"(): double
get "y"(): double
get "order"(): integer
get "shape"(): string
get "rotation"(): double
get "color"(): $Color4I
get "alpha"(): integer
get "image"(): $Icon
get "title"(): $Component
get "x"(): double
get "alignToCorner"(): boolean
get "aspectRatioOff"(): boolean
get "movableID"(): long
get "click"(): string
set "image"(value: $Icon$$Type)
get "chapter"(): $Chapter
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
 "id": string
static readonly "DEFAULT": $RewardAutoClaim


public static "values"(): ($RewardAutoClaim)[]
public static "valueOf"(name: string): $RewardAutoClaim
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
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"
import {$ConfigValue, $ConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigValue"

export class $ConfigFromString<T> extends $ConfigValue<(T)> {
 "id": string
static readonly "NULL_TEXT": $Component

constructor()

public "parse"(arg0: $Consumer$$Type<(T)>, arg1: string): boolean
public "canScroll"(): boolean
public "getStringFromValue"(v: T): string
public "getStringForGUI"(v: T): $Component
public "onClicked"(clicked: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
public "scrollValue"(currentValue: T, forward: boolean): $Optional<(T)>
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
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Icon, $Icon$$Type} from "dev.ftb.mods.ftblibrary.icon.Icon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Color4I, $Color4I$$Type} from "dev.ftb.mods.ftblibrary.icon.Color4I"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$NameMap, $NameMap$$Type} from "dev.ftb.mods.ftblibrary.config.NameMap"

export class $Tristate extends $Enum<($Tristate)> {
readonly "result": $InteractionResult
readonly "color": $Color4I
static readonly "NAME_MAP": $NameMap<($Tristate)>
readonly "displayName": string
readonly "icon": $Icon
static readonly "TRUE": $Tristate
static readonly "FALSE": $Tristate
static readonly "VALUES": ($Tristate)[]
static readonly "DEFAULT": $Tristate


public "isFalse"(): boolean
public "get"(def: boolean): boolean
public "toString"(): string
public static "values"(): ($Tristate)[]
public static "valueOf"(name: string): $Tristate
public "write"(nbt: $CompoundTag$$Type, key: string): void
public "write"(buffer: $FriendlyByteBuf$$Type): void
public static "read"(nbt: $CompoundTag$$Type, key: string): $Tristate
public static "read"(buffer: $FriendlyByteBuf$$Type): $Tristate
public "isDefault"(): boolean
public "getOpposite"(): $Tristate
public "isTrue"(): boolean
get "false"(): boolean
get "default"(): boolean
get "opposite"(): $Tristate
get "true"(): boolean
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
readonly "key": string


public "set"(arg0: any): void
public "set"(v: double): void
public "write"(tag: $SNBTCompoundTag$$Type): void
public "read"(tag: $SNBTCompoundTag$$Type): void
public "range"(max: double): $NumberValue<(double)>
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

public "start"(): boolean
public "shift"(): boolean
public "control"(): boolean
public "alt"(): boolean
public "numLock"(): boolean
public "capsLock"(): boolean
public "onlyControl"(): boolean
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
 "id": string
static readonly "NULL_TEXT": $Component

constructor(mn: integer, mx: integer)

public "parse"(callback: $Consumer$$Type<(integer)>, string: string): boolean
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

export class $StringConfig extends $ConfigFromString<(string)> {
static readonly "COLOR": $Color4I
readonly "pattern": $Pattern
 "id": string
static readonly "NULL_TEXT": $Component

constructor(p: $Pattern$$Type)
constructor()

public "parse"(callback: $Consumer$$Type<(string)>, string: string): boolean
public "getColor"(arg0: any): $Color4I
public "getColor"(v: string): $Color4I
public "getStringForGUI"(v: string): $Component
public "getStringForGUI"(arg0: any): $Component
public "addInfo"(list: $TooltipList$$Type): void
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
 "closeContextMenu"(): void
 "closeGui"(openPrevScreen: boolean): void
 "closeGui"(): void
 "openGuiLater"(): void
 "openAfter"(runnable: $Runnable$$Type): $Runnable
 "openGui"(): void

(): void
}

export namespace $IOpenableScreen {
const probejs$$marker: never
}
export class $IOpenableScreen$$Static implements $IOpenableScreen {


 "run"(): void
 "closeContextMenu"(): void
 "closeGui"(openPrevScreen: boolean): void
 "closeGui"(): void
 "openGuiLater"(): void
 "openAfter"(runnable: $Runnable$$Type): $Runnable
 "openGui"(): void
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
public "maybeForceProgress"(teamId: $UUID$$Type): void
public static "createServerSide"(origin: long, reset: boolean, playerId: $UUID$$Type, notifications: boolean): $ProgressChange
public "withNotifications"(): $ProgressChange
public "shouldReset"(): boolean
public "shouldNotify"(): boolean
public "setReset"(reset: boolean): $ProgressChange
public "getPlayerId"(): $UUID
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


public static "values"(): ($ScreenBlockItem$ScreenSize)[]
public static "valueOf"(name: string): $ScreenBlockItem$ScreenSize
public "getSize"(): integer
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

public "unpack"(argumentType: $TeamArgument$$Type): $TeamArgument$Info$Template
public "unpack"(arg0: $ArgumentType$$Type<(any)>): $ArgumentTypeInfo$Template<(any)>
public "serializeToNetwork"(template: $TeamArgument$Info$Template$$Type, buf: $FriendlyByteBuf$$Type): void
public "serializeToNetwork"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $FriendlyByteBuf$$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$$Type): $ArgumentTypeInfo$Template<(any)>
public "serializeToJson"(template: $TeamArgument$Info$Template$$Type, jsonObject: $JsonObject$$Type): void
public "serializeToJson"(arg0: $ArgumentTypeInfo$Template$$Type<(any)>, arg1: $JsonObject$$Type): void
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
 "descriptionId": string
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
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
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
public static "valueOf"(name: string): $PrivacyMode
public "getSerializedName"(): string
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public "getRemappedEnumConstantName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(string), (string)>): $Function<(string), (T)>
get "serializedName"(): string
get "remappedEnumConstantName"(): string
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
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$TrackedData, $TrackedData$$Type} from "dev.corgitaco.dataanchor.data.TrackedData"
import {$TrackedDataContainer, $TrackedDataContainer$$Type} from "dev.corgitaco.dataanchor.data.TrackedDataContainer"
import {$TrackedDataRegistry, $TrackedDataRegistry$$Type} from "dev.corgitaco.dataanchor.data.registry.TrackedDataRegistry"
import {$EditableBlockEntity, $EditableBlockEntity$$Type} from "dev.ftb.mods.ftbquests.block.entity.EditableBlockEntity"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BaseBarrierBlockEntity extends $EditableBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(blockEntityType: $BlockEntityType$$Type<(any)>, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "isOpen"(arg0: $Player$$Type): boolean
public static "tick"(level: $Level$$Type, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type, blockEntity: $BlockEntity$$Type): void
public "loadAdditional"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "saveAdditional"(compoundTag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(provider: $HolderLookup$Provider$$Type): $CompoundTag
public "getSkin"(): $ItemStack
public "setChanged"(): void
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "fillConfigGroup"(): $ConfigGroup
public "hasPermissionToEdit"(player: $Player$$Type): boolean
public "forceAppearanceUpdate"(): void
public "setInvisibleWhenOpen"(invisibleWhenOpen: boolean): void
public "isInvisibleWhenOpen"(): boolean
public "getClientAppearance"(): $BlockState
public "updateFromString"(objStr: string): void
public "setSkin"(skin: $ItemStack$$Type): void
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "skin"(): $ItemStack
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
set "invisibleWhenOpen"(value: boolean)
get "invisibleWhenOpen"(): boolean
get "clientAppearance"(): $BlockState
set "skin"(value: $ItemStack$$Type)
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
import {$TeamData, $TeamData$$Type} from "dev.ftb.mods.ftbquests.quest.TeamData"
import {$EditableBlockEntity, $EditableBlockEntity$$Type} from "dev.ftb.mods.ftbquests.block.entity.EditableBlockEntity"
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ClientGamePacketListener, $ClientGamePacketListener$$Type} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Task, $Task$$Type} from "dev.ftb.mods.ftbquests.quest.task.Task"
import {$Packet, $Packet$$Type} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TaskScreenBlockEntity extends $EditableBlockEntity implements $ITaskScreen {
 "fakeTextureUV": (float)[]
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "getTask"(): $Task
public "loadAdditional"(compoundTag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(provider: $HolderLookup$Provider$$Type): $CompoundTag
public "getSkin"(): $ItemStack
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "fillConfigGroup"(data: $TeamData$$Type): $ConfigGroup
public "hasPermissionToEdit"(player: $Player$$Type): boolean
public "isIndestructible"(): boolean
public "removeAllAuxScreens"(): void
public "getInputModeIcon"(): $ItemStack
public "setInputModeIcon"(inputModeIcon: $ItemStack$$Type): void
public "setIndestructible"(indestructible: boolean): void
public "getCachedTeamData"(): $TeamData
public "getFakeTextureUV"(): (float)[]
public "getTeamId"(): $UUID
public "getCoreScreen"(): $Optional<($TaskScreenBlockEntity)>
public "setTeamId"(teamId: $UUID$$Type): void
public "setSkin"(skin: $ItemStack$$Type): void
public "setTask"(task: $Task$$Type): void
public "isInputOnly"(): boolean
public "setInputOnly"(inputOnly: boolean): void
public "setTextShadow"(textShadow: boolean): void
public "isTextShadow"(): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
get "task"(): $Task
get "skin"(): $ItemStack
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
get "indestructible"(): boolean
get "inputModeIcon"(): $ItemStack
set "inputModeIcon"(value: $ItemStack$$Type)
set "indestructible"(value: boolean)
get "cachedTeamData"(): $TeamData
get "fakeTextureUV"(): (float)[]
get "teamId"(): $UUID
get "coreScreen"(): $Optional<($TaskScreenBlockEntity)>
set "teamId"(value: $UUID$$Type)
set "skin"(value: $ItemStack$$Type)
set "task"(value: $Task$$Type)
get "inputOnly"(): boolean
set "inputOnly"(value: boolean)
set "textShadow"(value: boolean)
get "textShadow"(): boolean
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
import {$HolderLookup$Provider, $HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$TeamManagerImpl, $TeamManagerImpl$$Type} from "dev.ftb.mods.ftbteams.data.TeamManagerImpl"

export class $PartyTeam extends $AbstractTeam {

constructor(manager: $TeamManagerImpl$$Type, id: $UUID$$Type)

public "join"(player: $ServerPlayer$$Type): integer
public "getType"(): $TeamType
public "getOwner"(): $UUID
public "deserializeNBT"(tag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "demote"(from: $ServerPlayer$$Type, players: $Collection$$Type<($GameProfile$$Type)>): integer
public "invite"(inviter: $ServerPlayer$$Type, profiles: $Collection$$Type<($GameProfile$$Type)>): integer
public "leave"(id: $UUID$$Type): integer
public "kick"(from: $CommandSourceStack$$Type, players: $Collection$$Type<($GameProfile$$Type)>): integer
public "getRankForPlayer"(playerId: $UUID$$Type): $TeamRank
public "transferOwnership"(from: $CommandSourceStack$$Type, toProfiles: $Collection$$Type<($GameProfile$$Type)>): integer
public "transferOwnership"(from: $CommandSourceStack$$Type, toProfile: $GameProfile$$Type): integer
public "isPartyTeam"(): boolean
public "addAlly"(source: $CommandSourceStack$$Type, players: $Collection$$Type<($GameProfile$$Type)>): integer
public "promote"(from: $ServerPlayer$$Type, players: $Collection$$Type<($GameProfile$$Type)>): integer
public "removeAlly"(source: $CommandSourceStack$$Type, players: $Collection$$Type<($GameProfile$$Type)>): integer
public "isOwner"(profile: $UUID$$Type): boolean
public "forceDisband"(from: $CommandSourceStack$$Type): integer
public "listAllies"(source: $CommandSourceStack$$Type): integer
public "getOnlineMembers"(): $Collection<(any)>
get "type"(): $TeamType
get "owner"(): $UUID
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
public "getReward"(): $Reward
public static "chanceString"(weight: float, totalWeight: float): string
public static "chanceString"(weight: float, totalWeight: float, empty: boolean): string
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
import {$SelectableResource, $SelectableResource$$Type} from "dev.ftb.mods.ftblibrary.config.ui.SelectableResource"
import {$ConfigCallback, $ConfigCallback$$Type} from "dev.ftb.mods.ftblibrary.config.ConfigCallback"
import {$OptionalLong, $OptionalLong$$Type} from "java.util.OptionalLong"
import {$FluidStack, $FluidStack$$Type} from "dev.architectury.fluid.FluidStack"
import {$MouseButton, $MouseButton$$Type} from "dev.ftb.mods.ftblibrary.ui.input.MouseButton"
import {$Widget, $Widget$$Type} from "dev.ftb.mods.ftblibrary.ui.Widget"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ResourceConfigValue, $ResourceConfigValue$$Type} from "dev.ftb.mods.ftblibrary.config.ResourceConfigValue"

export class $FluidConfig extends $ResourceConfigValue<($FluidStack)> {
 "id": string
static readonly "NULL_TEXT": $Component

constructor(allowEmpty: boolean)
constructor(fixedSize: long)

public "isEmpty"(): boolean
public "getResource"(): $SelectableResource<($FluidStack)>
public "getStringForGUI"(arg0: any): $Component
public "getStringForGUI"(v: $FluidStack$$Type): $Component
public "allowEmptyResource"(): boolean
public "fixedResourceSize"(): $OptionalLong
public "onClicked"(clickedWidget: $Widget$$Type, button: $MouseButton$$Type, callback: $ConfigCallback$$Type): void
public "setResource"(selectedStack: $SelectableResource$$Type<($FluidStack$$Type)>): boolean
public "showAmount"(show: boolean): $FluidConfig
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

 "getNullableTeamData"(arg0: $UUID$$Type): $TeamData
 "getOrCreateTeamData"(arg0: $Team$$Type): $TeamData
 "getOrCreateTeamData"(arg0: $UUID$$Type): $TeamData
/**
 * 
 * @deprecated
 */
 "getOrCreateTeamData"(arg0: $Entity$$Type): $TeamData
 "forAllQuestLinks"(arg0: $Consumer$$Type<($QuestLink)>): void
 "isServerSide"(): boolean
 "forAllChapters"(arg0: $Consumer$$Type<($Chapter)>): void
 "forAllQuests"(arg0: $Consumer$$Type<($Quest)>): void
 "getAllTeamData"(): $Collection<($TeamData)>
 "getTeamData"(arg0: $Player$$Type): $Optional<($TeamData)>
 "canEdit"(): boolean
get "serverSide"(): boolean
get "allTeamData"(): $Collection<($TeamData)>
}

export namespace $QuestFile {
const probejs$$marker: never
}
export class $QuestFile$$Static implements $QuestFile {


 "getNullableTeamData"(arg0: $UUID$$Type): $TeamData
 "getOrCreateTeamData"(arg0: $Team$$Type): $TeamData
 "getOrCreateTeamData"(arg0: $UUID$$Type): $TeamData
/**
 * 
 * @deprecated
 */
 "getOrCreateTeamData"(arg0: $Entity$$Type): $TeamData
 "forAllQuestLinks"(arg0: $Consumer$$Type<($QuestLink)>): void
 "isServerSide"(): boolean
 "forAllChapters"(arg0: $Consumer$$Type<($Chapter)>): void
 "forAllQuests"(arg0: $Consumer$$Type<($Quest)>): void
 "getAllTeamData"(): $Collection<($TeamData)>
 "getTeamData"(arg0: $Player$$Type): $Optional<($TeamData)>
 "canEdit"(): boolean
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
import {$ThreadLocal, $ThreadLocal$$Type} from "java.lang.ThreadLocal"
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
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
 "descriptionId": string
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
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "onRemove"(blockState: $BlockState$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "getStateForPlacement"(blockPlaceContext: $BlockPlaceContext$$Type): $BlockState
public "appendHoverText"(itemStack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, list: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "getDestroyProgress"(blockState: $BlockState$$Type, player: $Player$$Type, blockGetter: $BlockGetter$$Type, blockPos: $BlockPos$$Type): float
public static "blockEntityProvider"(): $BlockEntityType$BlockEntitySupplier<($TaskScreenBlockEntity)>
public static "blockEntityAuxProvider"(): $BlockEntityType$BlockEntitySupplier<($TaskScreenAuxBlockEntity)>
public static "getMultiblockBounds"(corePos: $BlockPos$$Type, size: integer, facing: $Direction$$Type): $BoundingBox
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
public "getIconSupplier"(): $Icon
public "makeExtraNBT"(): $CompoundTag
public "getGuiProvider"(): $TaskType$GuiProvider
public "setGuiProvider"(p: $TaskType$GuiProvider$$Type): $TaskType
public "getTypeForNBT"(): string
public "getTypeId"(): $ResourceLocation
public "createTask"(id: long, quest: $Quest$$Type): $Task
public static "createTask"(id: long, quest: $Quest$$Type, typeId: string): $Task
public "setDisplayName"(name: $Component$$Type): $TaskType
get "displayName"(): $Component
get "iconSupplier"(): $Icon
get "guiProvider"(): $TaskType$GuiProvider
set "guiProvider"(value: $TaskType$GuiProvider$$Type)
get "typeForNBT"(): string
get "typeId"(): $ResourceLocation
set "displayName"(value: $Component$$Type)
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


public "name"(p: $Function$$Type<(T), ($Component$$Type)>): $NameMap$Builder<(T)>
public "id"(p: $Function$$Type<(T), (string)>): $NameMap$Builder<(T)>
public "create"(): $NameMap<(T)>
public "color"(p: $Function$$Type<(T), ($Color4I$$Type)>): $NameMap$Builder<(T)>
public "nameKey"(p: $Function$$Type<(T), (string)>): $NameMap$Builder<(T)>
public "icon"(p: $Function$$Type<(T), ($Icon$$Type)>): $NameMap$Builder<(T)>
public "baseNameKey"(key: string): $NameMap$Builder<(T)>
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
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(blockEntityType: $BlockEntityType$$Type<(any)>, blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "readPayload"(tag: $CompoundTag$$Type, registryAccess: $RegistryAccess$$Type): void
public "hasPermissionToEdit"(arg0: $Player$$Type): boolean
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
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
readonly "key": string


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
static readonly "ATTACHMENTS_NBT_KEY": string

constructor(blockPos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "getOwner"(): $UUID
public "setOwner"(owner: $UUID$$Type): void
public "loadAdditional"(compoundTag: $CompoundTag$$Type, provider: $HolderLookup$Provider$$Type): void
public "getOutputCount"(): integer
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean): $TrackedDataContainer<(O), (T)>
public static "makeBasicContainer"<O, T extends $TrackedData<(O)>>(registry: $TrackedDataRegistry$$Type<(O), (T)>, o: O, isClient: boolean, lazyLoad: boolean): $TrackedDataContainer<(O), (T)>
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
